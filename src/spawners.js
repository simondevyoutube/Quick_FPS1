import {THREE} from './three-defs.js';

import {entity} from './entity.js';

import {player_controller} from './player-controller.js';
import {player_input} from './player-input.js';
import {first_person_camera} from './first-person-camera.js';
import {crosshair} from './crosshair.js';
import {kinematic_character_controller} from './kinematic-character-controller.js';
import {gun_controller} from './gun-controller.js';
import {level_1_builder} from './level-1-builder.js';
import {health_component} from './health-component.js';
import {render_component} from './render-component.js';
import {basic_rigid_body} from './basic-rigid-body.js';
import {target_entity} from './target-controller.js';
import {shield_component} from './shield-component.js';
import {attack_controller} from './attack-controller.js';


export const spawners = (() => {

  class PlayerSpawner extends entity.Component {
    constructor(params) {
      super();
      this.params_ = params;
    }

    Spawn() {
      const player = new entity.Entity();
      player.SetPosition(new THREE.Vector3(0, 2, 0));
      player.AddComponent(new player_input.PlayerInput(this.params_));
      player.AddComponent(new first_person_camera.FirstPersonCamera(this.params_));
      player.AddComponent(new crosshair.Crosshair(this.params_));
      player.AddComponent(new kinematic_character_controller.KinematicCharacterController(this.params_));
      player.AddComponent(new gun_controller.GunController(this.params_));
      player.AddComponent(new health_component.HealthComponent({health: 100, maxHealth: 100, updateUI: true}));

      this.Manager.Add(player, 'player');

      return player;
    }
  };

  class Level1Spawner extends entity.Component {
    constructor(params) {
      super();
      this.params_ = params;
    }

    Spawn() {
      const e = new entity.Entity();
      e.SetPosition(new THREE.Vector3(0, 0, 0));
      e.AddComponent(new level_1_builder.Level1Builder(this.params_));

      this.Manager.Add(e, 'levelBuilder');

      return e;
    }
  };

  class TargetSpawner extends entity.Component {
    constructor(params) {
      super();
      this.params_ = params;
    }

    Spawn(params) {
      const e = new entity.Entity();
      e.AddComponent(new target_entity.TargetCharacterController({
        scene: this.params_.scene,
        model: {
          path: './resources/quaternius/Enemies/',
          name: 'Enemy_Large_Gun.glb',
          scale: 2,
        },
      }));
      // e.AddComponent(new basic_rigid_body.CharacterRigidBody({
      //   // scene: params.scene,
      //   box: new THREE.Vector3(2, 2, 2),
      // }));
      e.AddComponent(new kinematic_character_controller.KinematicCharacterController(this.params_));
      // VIDEO HACK
      e.AddComponent(new shield_component.ShieldComponent(this.params_));
      // e.AddComponent(new attack_controller.AttackController({scene: this.params_.scene, timing: 0.25}));
      e.AddComponent(new health_component.HealthComponent({health: 100, maxHealth: 100}));

      this.Manager.Add(e);
      e.SetPosition(params.position);
      e.SetActive(true);

      return e;
    }
  };

  return {
    PlayerSpawner: PlayerSpawner,
    Level1Spawner: Level1Spawner,
    TargetSpawner: TargetSpawner,
  };
})();