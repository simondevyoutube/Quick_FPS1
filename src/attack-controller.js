import {THREE} from './three-defs.js';

import {entity} from './entity.js';
import {math} from './math.js';


export const attack_controller = (() => {

  class AttackController extends entity.Component {
    constructor(params) {
      super();
      this.params_ = params;
      this.timeElapsed_ = 0.0;
      this.action_ = null;

      this.soundGroup_ = new THREE.Group();
      this.params_.scene.add(this.soundGroup_);
    }

    InitComponent() {
      this.RegisterHandler_('player.action', (m) => { this.OnAnimAction_(m); });
    }

    LoadSound_(soundName) {
      const threejs = this.FindEntity('threejs').GetComponent('ThreeJSController');

      const sound1 = new THREE.PositionalAudio(threejs.listener_);

      this.soundGroup_.add(sound1);

      const loader = new THREE.AudioLoader();
      loader.load('resources/sounds/' + soundName, (buffer) => {
        sound1.setBuffer(buffer);
        sound1.setLoop(false);
        sound1.setVolume(1.0);
        sound1.setRefDistance(1);
        sound1.play();
      });
    }

    OnAnimAction_(m) {
      if (m.action != this.action_) {
        this.action_ = m.action;
        this.timeElapsed_ = 0.0;
      }

      const oldTiming = this.timeElapsed_;
      this.timeElapsed_ = m.time;

      if (oldTiming < this.params_.timing && this.timeElapsed_ >= this.params_.timing) {
        this.LoadSound_('shot.ogg');

        const target = this.FindEntity('player').Position.clone();

        target.add(
            new THREE.Vector3(
                math.rand_range(-2.0, 2.0), math.rand_range(-2.0, 2.0), math.rand_range(-2.0, 2.0)));

        const offset = new THREE.Vector3(0.0, 0.1, -0.75);

        const blaster = this.FindEntity('fx').GetComponent('BlasterSystem');
        const tracer = blaster.CreateParticle();
        tracer.Start = offset.clone();
        tracer.Start.applyQuaternion(this.Parent.Quaternion);
        tracer.Start.add(this.Parent.Position);
        tracer.End = target.clone().sub(this.Parent.Position).normalize();
        tracer.End.multiplyScalar(10.0);
        tracer.End.add(this.Parent.Position);

        tracer.Velocity = tracer.End.clone();
        tracer.Velocity.sub(tracer.Start);
        tracer.Velocity.normalize();
        tracer.Velocity.multiplyScalar(5.0);
        tracer.Colours = [new THREE.Color(0xFF0000), new THREE.Color(0xFFFFFF)];
        tracer.Length = 10.0;
        tracer.Life = 1.0;
        tracer.TotalLife = 1.0;
        tracer.Width = 0.125;

        // const hits = physics.RayTest(this.Parent.Position, end);

        // if (hits.length == 0) {
        //   return;
        // }

        // const mesh = this.FindEntity(hits[0].name);
      }
    }
  };

  return {
      AttackController: AttackController,
  };
})();