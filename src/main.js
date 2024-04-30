import {entity_manager} from './entity-manager.js';
import {entity} from './entity.js';

import {load_controller} from './load-controller.js';
import {spawners} from './spawners.js';

import {spatial_hash_grid} from './spatial-hash-grid.js';
import {threejs_component} from './threejs-component.js';
import {ammojs_component} from './ammojs-component.js';
import {blaster} from './fx/blaster.js';
import {ui_controller} from './ui-controller.js';


class QuickFPS1 {
  constructor() {
    this._Initialize();
  }

  _Initialize() {
    this.entityManager_ = new entity_manager.EntityManager();

    this.OnGameStarted_();
  }

  OnGameStarted_() {
    this.grid_ = new spatial_hash_grid.SpatialHashGrid(
        [[-5000, -5000], [5000, 5000]], [100, 100]);

    this.LoadControllers_();

    this.previousRAF_ = null;
    this.RAF_();
  }

  LoadControllers_() {
    const threejs = new entity.Entity();
    threejs.AddComponent(new threejs_component.ThreeJSController());
    this.entityManager_.Add(threejs, 'threejs');

    const ammojs = new entity.Entity();
    ammojs.AddComponent(new ammojs_component.AmmoJSController());
    this.entityManager_.Add(ammojs, 'physics');

    // Hack
    this.ammojs_ = ammojs.GetComponent('AmmoJSController');
    this.scene_ = threejs.GetComponent('ThreeJSController').scene_;
    this.decals_ = threejs.GetComponent('ThreeJSController').sceneDecals_;
    this.camera_ = threejs.GetComponent('ThreeJSController').camera_;
    this.threejs_ = threejs.GetComponent('ThreeJSController');

    const fx = new entity.Entity();
    fx.AddComponent(new blaster.BlasterSystem({
        scene: this.scene_,
        camera: this.camera_,
        texture: 'resources/textures/fx/tracer.png',
    }));
    this.entityManager_.Add(fx, 'fx');

    const l = new entity.Entity();
    l.AddComponent(new load_controller.LoadController());
    this.entityManager_.Add(l, 'loader');

    const u = new entity.Entity();
    u.AddComponent(new ui_controller.UIController());
    this.entityManager_.Add(u, 'ui');

    const basicParams = {
      grid: this.grid_,
      scene: this.scene_,
      decals: this.decals_,
      camera: this.camera_,
    };

    const spawner = new entity.Entity();
    spawner.AddComponent(new spawners.PlayerSpawner(basicParams));
    spawner.AddComponent(new spawners.Level1Spawner(basicParams));
    spawner.AddComponent(new spawners.TargetSpawner(basicParams));
    this.entityManager_.Add(spawner, 'spawners');

    spawner.GetComponent('PlayerSpawner').Spawn();
    spawner.GetComponent('Level1Spawner').Spawn();
  }

  RAF_() {
    requestAnimationFrame((t) => {
      if (this.previousRAF_ === null) {
        this.previousRAF_ = t;
      } else {
        this.Step_(t - this.previousRAF_);
        this.previousRAF_ = t;
      }

      setTimeout(() => {
        this.RAF_();
      }, 1);
    });
  }

  Step_(timeElapsed) {
    const timeElapsedS = Math.min(1.0 / 30.0, timeElapsed * 0.001);

    this.entityManager_.Update(timeElapsedS);

    this.ammojs_.StepSimulation(timeElapsedS);
    this.threejs_.Render(timeElapsedS);
  }
}


let _APP = null;

window.addEventListener('DOMContentLoaded', async () => {
  // const _Setup = () => {
  //   Ammo().then(function(AmmoLib) {
  //     Ammo = AmmoLib;
  //     _APP = new QuickFPS1();
  //   }); 
  //   document.body.removeEventListener('click', _Setup);
  // };
  // document.body.addEventListener('click', _Setup);
  const AmmoLib = await Ammo();
  Ammo = AmmoLib;
  _APP = new QuickFPS1();
});
