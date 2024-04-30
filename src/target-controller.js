import {THREE, FBXLoader} from './three-defs.js';

import {entity} from './entity.js';
import {finite_state_machine} from './finite-state-machine.js';
import {player_state} from './player-state.js';

export const target_entity = (() => {

  const _M = new THREE.Matrix4();
  const _R = new THREE.Quaternion();

  class TargetFSM extends finite_state_machine.FiniteStateMachine {
    constructor(proxy) {
      super();
      this._proxy = proxy;
      this.Init_();
    }
  
    Init_() {
      this._AddState('idle', player_state.IdleState);
      this._AddState('run', player_state.RunState);
      this._AddState('death', player_state.DeathState);
      this._AddState('shoot', player_state.AttackState);
    }
  };
  
  class TargetCharacterControllerProxy {
    constructor(animations) {
      this.animations_ = animations;
    }
  
    get animations() {
      return this.animations_;
    }
  };

  class TargetCharacterController extends entity.Component {
    static CLASS_NAME = 'TargetCharacterController';

    get NAME() {
      return TargetCharacterController.CLASS_NAME;
    }

    constructor(params) {
      super();
      this.params_ = params;
    }

    InitEntity() {
      this.Init_();
    }

    Init_() {
      this.decceleration_ = new THREE.Vector3(-0.0005, -0.0001, -5.0);
      this.acceleration_ = new THREE.Vector3(1, 0.125, 100.0);
      this.velocity_ = new THREE.Vector3(0, 0, 0);
      this.group_ = new THREE.Group();

      this.params_.scene.add(this.group_);
      this.animations_ = {};
  
      this.Parent.Attributes.Render = {
        group: this.group_,
      };
      this.Parent.Attributes.NPC = true;
      this.LoadModels_();
    }

    InitComponent() {
      this.RegisterHandler_('health.death', (m) => { this.OnDeath_(m); });
      this.RegisterHandler_(
          'update.position', (m) => { this.OnUpdatePosition_(m); });
      this.RegisterHandler_(
          'update.rotation', (m) => { this.OnUpdateRotation_(m); });
    }

    OnUpdatePosition_(msg) {
      this.group_.position.copy(msg.value);
    }

    OnUpdateRotation_(msg) {
      this.group_.quaternion.copy(msg.value);
    }

    OnDeath_(msg) {
      this.stateMachine_.SetState('death');
    }

    LoadModels_() {
      const loader = this.FindEntity('loader').GetComponent('LoadController');
      loader.Load(this.params_.model.path, this.params_.model.name, (glb) => {
        this.target_ = glb.scene;

        this.group_.add(this.target_);
        this.target_.scale.setScalar(this.params_.model.scale);

        // Hack
        this.target_.position.set(0, -2.35, 0);
        this.target_.rotateY(Math.PI);
  
        this.bones_ = {};
        this.target_.traverse(c => {
          if (!c.skeleton) {
            return;
          }
          for (let b of c.skeleton.bones) {
            this.bones_[b.name] = b;
          }
        });

        this.target_.traverse(c => {
          c.castShadow = true;
          c.receiveShadow = true;
          // if (c.material) {
          //   // c.material = new THREE.MeshStandardMaterial({
          //   //   color: c.material.color,
          //   //   roughness: 0.6,
          //   //   metalness: 1.0,
          //   // });
          // }
          if (c.material && c.material.map) {
            c.material.map.encoding = THREE.sRGBEncoding;
          }
        });

        this.mixer_ = new THREE.AnimationMixer(this.target_);

        const _FindAnim = (animName) => {
          for (let i = 0; i < glb.animations.length; i++) {
            if (glb.animations[i].name.includes(animName)) {
              const clip = glb.animations[i];
              const action = this.mixer_.clipAction(clip);
              return {
                clip: clip,
                action: action
              }
            }
          }
          return null;
        };

        this.animations_['idle'] = _FindAnim('Idle');
        this.animations_['walk'] = _FindAnim('Walk');
        this.animations_['run'] = _FindAnim('Run');
        this.animations_['death'] = _FindAnim('Death');
        this.animations_['attack'] = _FindAnim('Attack');
        this.animations_['shoot'] = _FindAnim('Shoot');

        // this.target_.visible = true;

        this.stateMachine_ = new TargetFSM(
            new TargetCharacterControllerProxy(this.animations_));

        if (this.queuedState_) {
          this.stateMachine_.SetState(this.queuedState_)
          this.queuedState_ = null;
        } else {
          this.stateMachine_.SetState('idle');
        }

        this.Broadcast({
            topic: 'load.character',
            model: this.group_,
            bones: this.bones_,
        });
        // this.Parent.SetPosition(this.Parent.Position);
      });
    }

    FindPlayer_() {
      const player = this.FindEntity('player');

      const dir = player.Position.clone();
      dir.sub(this.Parent.Position);
      dir.y = 0;

      return dir;
    }

    UpdateAI_(timeElapsedS) {
      const toPlayer = this.FindPlayer_();
      const dirToPlayer = toPlayer.clone().normalize();

      if (toPlayer.length() == 0 || toPlayer.length() > 50) {
        this.stateMachine_.SetState('idle');
        this.Parent.Attributes.Physics.CharacterController.setWalkDirection(new THREE.Vector3(0, 0, 0));
        return;
      }

      _M.lookAt(
          new THREE.Vector3(0, 0, 0),
          dirToPlayer,
          new THREE.Vector3(0, 1, 0));
      _R.setFromRotationMatrix(_M);

      this.Parent.SetQuaternion(_R);

      if (toPlayer.length() < 20) {
        this.stateMachine_.SetState('shoot');
        this.Parent.Attributes.Physics.CharacterController.setWalkDirection(new THREE.Vector3(0, 0, 0));
        return;
      }

      const forwardVelocity = 1;
      const strafeVelocity = 0;

      const forward = new THREE.Vector3(0, 0, -1);
      forward.applyQuaternion(_R);
      forward.multiplyScalar(forwardVelocity * timeElapsedS * 2);
  
      const left = new THREE.Vector3(-1, 0, 0);
      left.applyQuaternion(_R);
      left.multiplyScalar(strafeVelocity * timeElapsedS * 2);

      const walk = forward.clone().add(left);

      this.Parent.Attributes.Physics.CharacterController.setWalkDirection(walk);
      this.stateMachine_.SetState('run');
    }

    Update(timeInSeconds) {
      if (!this.stateMachine_) {
        return;
      }

      const input = this.GetComponent('BasicCharacterControllerInput');
      this.stateMachine_.Update(timeInSeconds, input);

      if (this.mixer_) {
        this.mixer_.update(timeInSeconds);
      }

      // HARDCODED
      if (this.stateMachine_._currentState._action) {
        this.Broadcast({
          topic: 'player.action',
          action: this.stateMachine_._currentState.Name,
          time: this.stateMachine_._currentState._action.time,
        });
      }

      // VIDEO HACK
      // switch (this.stateMachine_.State) {
      //   case 'idle': {
      //     this.UpdateAI_(timeInSeconds);
      //     break;
      //   }
      //   case 'run': {
      //     this.UpdateAI_(timeInSeconds);
      //     break;
      //   }
      //   case 'shoot': {
      //     break;
      //   }
      //   case 'death': {
      //     this.Parent.Attributes.Physics.CharacterController.setWalkDirection(new THREE.Vector3(0, 0, 0));
      //     break;
      //   }
      // }

      // this.Parent.Attributes.Physics.CharacterController.setWalkDirection(walk);
      // this.body_.motionState_.getWorldTransform(this.body_.transform_);
      const t = this.Parent.Attributes.Physics.CharacterController.body_.getWorldTransform();
      const pos = t.getOrigin();
      const pos3 = new THREE.Vector3(pos.x(), pos.y(), pos.z());

      this.Parent.SetPosition(pos3);

      // // HARDCODED
      // this.Broadcast({
      //     topic: 'player.action',
      //     action: this.stateMachine_._currentState.Name,
      // });

      // const currentState = this.stateMachine_._currentState;
      // if (currentState.Name != 'walk' &&
      //     currentState.Name != 'run' &&
      //     currentState.Name != 'idle') {
      //   return;
      // }
    
      // const velocity = this.velocity_;
      // const frameDecceleration = new THREE.Vector3(
      //     velocity.x * this.decceleration_.x,
      //     velocity.y * this.decceleration_.y,
      //     velocity.z * this.decceleration_.z
      // );
      // frameDecceleration.multiplyScalar(timeInSeconds);
      // frameDecceleration.z = Math.sign(frameDecceleration.z) * Math.min(
      //     Math.abs(frameDecceleration.z), Math.abs(velocity.z));
  
      // velocity.add(frameDecceleration);
  
      // const controlObject = this.group_;
      // const _Q = new THREE.Quaternion();
      // const _A = new THREE.Vector3();
      // const _R = controlObject.quaternion.clone();
  
      // const acc = this.acceleration_.clone();
      // if (input._keys.shift) {
      //   acc.multiplyScalar(2.0);
      // }
  
      // if (input._keys.forward) {
      //   velocity.z += acc.z * timeInSeconds;
      // }
      // if (input._keys.backward) {
      //   velocity.z -= acc.z * timeInSeconds;
      // }
      // if (input._keys.left) {
      //   _A.set(0, 1, 0);
      //   _Q.setFromAxisAngle(_A, 4.0 * Math.PI * timeInSeconds * this.acceleration_.y);
      //   _R.multiply(_Q);
      // }
      // if (input._keys.right) {
      //   _A.set(0, 1, 0);
      //   _Q.setFromAxisAngle(_A, 4.0 * -Math.PI * timeInSeconds * this.acceleration_.y);
      //   _R.multiply(_Q);
      // }
  
      // controlObject.quaternion.copy(_R);
  
      // const oldPosition = new THREE.Vector3();
      // oldPosition.copy(controlObject.position);
  
      // const forward = new THREE.Vector3(0, 0, 1);
      // forward.applyQuaternion(controlObject.quaternion);
      // forward.normalize();
  
      // const sideways = new THREE.Vector3(1, 0, 0);
      // sideways.applyQuaternion(controlObject.quaternion);
      // sideways.normalize();
  
      // sideways.multiplyScalar(velocity.x * timeInSeconds);
      // forward.multiplyScalar(velocity.z * timeInSeconds);
  
      // const pos = controlObject.position.clone();
      // pos.add(forward);
      // pos.add(sideways);

      // const collisions = this._FindIntersections(pos, oldPosition);
      // if (collisions.length > 0) {
      //   return;
      // }

      // const terrain = this.FindEntity('terrain').GetComponent('TerrainChunkManager');
      // pos.y = terrain.GetHeight(pos)[0];

      // controlObject.position.copy(pos);
  
      // this.Parent.SetPosition(controlObject.position);
      // this.Parent.SetQuaternion(controlObject.quaternion);
    }
  };
  
  return {
      TargetFSM: TargetFSM,
      TargetCharacterController: TargetCharacterController,
  };

})();