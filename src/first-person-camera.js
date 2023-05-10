import {THREE} from './three-defs.js';

import {entity} from './entity.js';
import {math} from './math.js';

import {player_input} from './player-input.js';
import {passes} from './passes.js';


export const first_person_camera = (() => {

  const POWER_TIME = 5;
  const POWER_RECHARGE = 10;

  class FirstPersonCamera extends entity.Component {
    constructor(params) {
      super();

      this.params_ = params;
      this.camera_ = params.camera;
      this.group_ = new THREE.Group();
      this.params_.scene.add(this.group_);
    }

    Destroy() {
      this.params_.scene.remove(this.group_);
    }

    InitEntity() {
      this.rotation_ = new THREE.Quaternion();
      this.translation_ = new THREE.Vector3(0, 3, 0);
      this.phi_ = 0;
      this.phiSpeed_ = 8;
      this.theta_ = 0;
      this.thetaSpeed_ = 5;
      this.headBobActive_ = false;
      this.headBobTimer_ = 0;
      this.headBobSpeed_ = 15;
      // VIDEO HACK, original 0.01
      this.headBobHeight_ = 0.01;
      this.walkSpeed_ = 10;
      this.strafeSpeed_ = 10;
      this.powerTime_ = 1;
      this.power_ = false;
      this.Parent.Attributes.FPSCamera = {
        group: this.group_
      };

      this.SetPass(passes.CAMERA);
    }

    Update(timeElapsedS) {
      this.updateRotation_(timeElapsedS);
      this.updateCamera_(timeElapsedS);
      this.updateTranslation_(timeElapsedS);
      this.updateHeadBob_(timeElapsedS);
      this.updatePower_(timeElapsedS);

      this.Parent.SetPosition(this.translation_);
      this.Parent.SetQuaternion(this.rotation_);
    }
  
    updateCamera_(_) {
      this.camera_.quaternion.copy(this.rotation_);
      this.camera_.position.copy(this.translation_);
      this.camera_.position.y += Math.sin(this.headBobTimer_ * this.headBobSpeed_) * this.headBobHeight_;
      this.group_.position.copy(this.translation_);
      this.group_.quaternion.copy(this.rotation_);
  
      // const forward = new THREE.Vector3(0, 0, -1);
      // forward.applyQuaternion(this.rotation_);
  
      // forward.multiplyScalar(100);
      // forward.add(this.translation_);
  
      // const hits = this.FindEntity('physics').GetComponent('AmmoJSController').RayTest(this.translation_, forward);

      // if (hits.length > 0) {
      //   this.camera_.lookAt(hits[0].position);
      // }
    }
  
    updateHeadBob_(timeElapsedS) {
      if (this.headBobActive_) {
        const wavelength = Math.PI;
        const nextStep = 1 + Math.floor(((this.headBobTimer_ + 0.000001) * this.headBobSpeed_) / wavelength);
        const nextStepTime = nextStep * wavelength / this.headBobSpeed_;
        this.headBobTimer_ = Math.min(this.headBobTimer_ + timeElapsedS, nextStepTime);
  
        if (this.headBobTimer_ == nextStepTime) {
          this.headBobActive_ = false;
          this.Broadcast({
            topic: 'fps.step',
            step: nextStep,
          });
        }
      }
    }
  
    updateTranslation_(timeElapsedS) {
      const input = this.GetComponent('PlayerInput');

      const forwardVelocity = (input.key(player_input.KEYS.w) ? 1 : 0) + (input.key(player_input.KEYS.s) ? -1 : 0)
      const strafeVelocity = (input.key(player_input.KEYS.a) ? 1 : 0) + (input.key(player_input.KEYS.d) ? -1 : 0)

      const qx = new THREE.Quaternion();
      qx.setFromAxisAngle(new THREE.Vector3(0, 1, 0), this.phi_);
  
      const forward = new THREE.Vector3(0, 0, -1);
      forward.applyQuaternion(qx);
      forward.multiplyScalar(forwardVelocity * timeElapsedS * this.walkSpeed_);
  
      const left = new THREE.Vector3(-1, 0, 0);
      left.applyQuaternion(qx);
      left.multiplyScalar(strafeVelocity * timeElapsedS * this.strafeSpeed_);

      const walk = forward.clone().add(left);

      // this.position.setValue( x, y + this.verticalVelocity, z );
      // this.position.direction( this.q );
  
      this.Parent.Attributes.Physics.CharacterController.setWalkDirection(walk);
      // this.body_.motionState_.getWorldTransform(this.body_.transform_);
      const t = this.Parent.Attributes.Physics.CharacterController.body_.getWorldTransform();
      const pos = t.getOrigin();
      const pos3 = new THREE.Vector3(pos.x(), pos.y(), pos.z());

      this.translation_.lerp(pos3, 0.75);
      // this.translation_.add(forward);
      // this.translation_.add(left);
  
      if (input.key(player_input.KEYS.SPACE)) {
        this.headBobActive_ = false;
        this.Parent.Attributes.Physics.CharacterController.jump();
      }

      if (input.key(player_input.KEYS.SHIFT_L)) {
        this.powerUp_(true);
      } else {
        this.powerUp_(false);
      }

      if (forwardVelocity != 0 || strafeVelocity != 0) {
        this.headBobActive_ = true;
      }
    }

    powerUp_(activate) {
      if (this.power_ && activate) {
        return;
      }

      if (activate && this.powerTime_ < 1) {
        activate = false;
      }

      this.power_ = activate;
    }

    updatePower_(timeElapsedS) {
      if (this.power_) {
        this.powerTime_ -= timeElapsedS / POWER_TIME;
        if (this.powerTime_ < 0) {
          this.power_ = false;
        }
      } else {
        this.powerTime_ += timeElapsedS / POWER_RECHARGE;
        this.powerTime_ = math.sat(this.powerTime_);  
      }

      this.FindEntity('ui').Broadcast(
          {topic: 'ui.charge', value: this.powerTime_})

      const power = this.power_;

      const threejs = this.FindEntity('threejs').GetComponent('ThreeJSController');

      threejs.radialBlur_.uniforms.strength.value = math.lerp(
          timeElapsedS * 5.0, threejs.radialBlur_.uniforms.strength.value, power ? 0.5 : 0);
      if (threejs.radialBlur_.uniforms.strength.value < 0.001 && !power) {
        threejs.radialBlur_.uniforms.strength.value = 0;
      }
      this.walkSpeed_ = power ? 30 : 10;
      this.Parent.Attributes.Physics.CharacterController.setJumpMultiplier(power ? 2.25 : 1);
    }
  
    updateRotation_(timeElapsedS) {
      const input = this.GetComponent('PlayerInput');

      const xh = input.current_.mouseXDelta / window.innerWidth;
      const yh = input.current_.mouseYDelta / window.innerHeight;
  
      this.phi_ += -xh * this.phiSpeed_;
      this.theta_ = math.clamp(this.theta_ + -yh * this.thetaSpeed_, -Math.PI / 3, Math.PI / 3);
  
      const qx = new THREE.Quaternion();
      qx.setFromAxisAngle(new THREE.Vector3(0, 1, 0), this.phi_);
      const qz = new THREE.Quaternion();
      qz.setFromAxisAngle(new THREE.Vector3(1, 0, 0), this.theta_);
  
      const q = new THREE.Quaternion();
      q.multiply(qx);
      q.multiply(qz);
  
      const t = 1.0 - Math.pow(0.01, 5 * timeElapsedS);
      this.rotation_.slerp(q, t);
    }
  };

  return {
    FirstPersonCamera: FirstPersonCamera
  };

})();