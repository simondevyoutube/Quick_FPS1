import {THREE, DecalGeometry} from './three-defs.js';

import {entity} from './entity.js';

import {render_component} from './render-component.js';
import {decal_material} from './decal-material.js';
import {passes} from './passes.js';
import {render_order} from './render-order.js';
import {math} from './math.js';


export const gun_controller = (() => {

  const DEFAULT_COOLDOWN = 0.5;

  function ExpImpulse(x, k) {
    const h = k * x;
    return h * Math.exp(1.0 - h);
  }

  class GunController extends entity.Component {
    static CLASS_NAME = 'GunController';

    get NAME() {
      return GunController.CLASS_NAME;
    }

    constructor(params) {
      super();

      this.group_ = new THREE.Group();
      this.soundGroup_ = new THREE.Group();
      this.decals_ = new THREE.Group();
      this.decals_.renderOrder = render_order.DECALS;
      this.params_ = params;
      this.params_.scene.add(this.decals_);
      this.params_.scene.add(this.soundGroup_);
      this.lastStep_ = 0.0;
      this.cooldown_ = 0.0;
    }

    Destroy() {
      this.group_.traverse(c => {
        if (c.material) {
          c.material.dispose();
        }
        if (c.geometry) {
          c.geometry.dispose();
        }
      });
      this.group_.parent.remove(this.group_);
    }

    InitComponent() {
      this.RegisterHandler_('render.visible', (m) => { this.OnVisible_(m); });
      this.RegisterHandler_('fps.step', (m) => { this.OnStep_(m); });
      this.SetPass(passes.GUN);
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

    InitEntity() {
      const threejs = this.FindEntity('threejs').GetComponent('ThreeJSController');
      const textureLoader = new THREE.TextureLoader();
      const whitesquare = textureLoader.load('resources/textures/whitesquare.png');
      whitesquare.anisotropy = threejs.getMaxAnisotropy();
      whitesquare.wrapS = THREE.RepeatWrapping;
      whitesquare.wrapT = THREE.RepeatWrapping;

      // const decalMaterial = new THREE.MeshStandardMaterial({map: whitesquare});
      // const geo = new THREE.BoxGeometry(1, 1, 1);

      // let box = new THREE.Mesh(geo, decalMaterial);
      // box.castShadow = false;
      // box.receiveShadow = true;
      // box.scale.set(0.0625, 0.0625, 0.5);
      // box.position.set(0.25, -0.125, -0.25);
      // this.group_.add(box);

      // box = new THREE.Mesh(geo, decalMaterial);
      // box.castShadow = false;
      // box.receiveShadow = true;
      // box.scale.set(0.01, 0.01, 0.4);
      // box.position.set(0.25, -0.09, -0.25);
      // this.group_.add(box);

      // this.Parent.Attributes.FPSCamera.group.add(this.group_);


      // VIDEO HACK
      const poopgroup = new THREE.Group();
      const e = new entity.Entity();
      e.AddComponent(new render_component.RenderComponent({
        scene: this.Parent.Attributes.FPSCamera.group,
        // scene: poopgroup,
        resourcePath: 'resources/rifle/',
        resourceName: 'scene.gltf',
        scale: new THREE.Vector3(1, 1, 1),
        emissive: new THREE.Color(0x000000),
        color: new THREE.Color(0xFFFFFF),
      }));
      this.Manager.Add(e);
      e.SetPosition(new THREE.Vector3(0.1, -0.25, -0.1));
      e.SetActive(false);
      this.gun_ = e;
    }

    OnVisible_(m) {
      this.group_.visible = m.value;
    }

    OnStep_(msg) {
      const footIndex = (msg.step % 2 == 0) ? 'L' : 'R';
      const footOffset = (msg.step % 2 == 0) ? 1 : -1;

      if (this.lastStep_ <= 0) {
        this.lastStep_ = 0.25;
        if (this.Parent.Attributes.Physics.CharacterController.onGround()) {
          this.LoadSound_('footstep.ogg');
        }
      }

      // const physics = this.FindEntity('physics').GetComponent('AmmoJSController');
      // const end = this.Parent.Left.clone().multiplyScalar(footOffset);
      // end.add(new THREE.Vector3(0, -5, 0));
      // end.add(this.Parent.Position);

      // const hits = physics.RayTest(this.Parent.Position, end).filter(
      //     e => { e.Name != 'player'});

      // if (hits.length == 0) {
      //   return;
      // }

      // const textureLoader = new THREE.TextureLoader();

      // const mesh = this.FindEntity(hits[0].name);

      // mesh.Attributes.Render.group.traverse(c => {
      //   if (c.geometry) {
      //     {
      //       const position = hits[0].position.clone();
      //       const eye = position.clone();
      //       eye.add(hits[0].normal);

      //       const eulerZ = new THREE.Euler();
      //       eulerZ.setFromQuaternion(this.Parent.Quaternion);
      //       eulerZ.x = 0;
      //       eulerZ.y = 0;
      //       const rotation = new THREE.Matrix4();
      //       rotation.lookAt(eye, position, this.Parent.Forward);
      //       // rotation.multiply(new THREE.Matrix4().makeRotationFromEuler(eulerZ));
      //       const euler = new THREE.Euler();
      //       euler.setFromRotationMatrix(rotation);

      //       // console.log('pos: ' + position.y);

      //       const decalMaterial = new THREE.MeshStandardMaterial( {
      //         color: 0xFFFFFF,
      //         map: textureLoader.load('resources/footprint' + footIndex + '.png'),
      //         transparent: true,
      //         depthTest: true,
      //         depthWrite: false,
      //         polygonOffset: true,
      //         polygonOffsetFactor: -4,
      //       });
      //       decalMaterial.map.encoding = THREE.sRGBEncoding;
            
      //       const decalScale = 1.0;
      //       const m = new THREE.Mesh(
      //           new DecalGeometry(c, position, euler, new THREE.Vector3(decalScale, decalScale, decalScale * 2) ), decalMaterial);
      //       m.receiveShadow = true;
      //       this.decals_.add(m);  
      //     }
      //   }
      // });
    }

    UpdateGunRecoil_() {
      // const q1 = new THREE.Quaternion();
      // const q2 = new THREE.Quaternion();
      // q2.setFromAxisAngle(new THREE.Vector3(1, 0, 0), Math.PI / 11);
      // const t = ExpImpulse(math.sat(1.0 - this.cooldown_ / DEFAULT_COOLDOWN), 10.0);

      // q1.slerp(q2, t);
      // this.gun_.SetQuaternion(q1);

      // const v1 = new THREE.Vector3(0.1, -0.25, -0.1);
      // const v2 = new THREE.Vector3(0.1, -0.25, -0.0);

      // v1.lerp(v2, t);
      // this.gun_.SetPosition(v1);
    }

    Update(timeElapsedS) {
      this.soundGroup_.position.copy(this.Parent.Position);
      this.lastStep_ -= timeElapsedS;

      const input = this.GetComponent('PlayerInput');
      if (!input.isReady()) {
        return;
      }

      this.cooldown_ -= timeElapsedS;

      this.UpdateGunRecoil_();

      // VIDEO HACK
      if (this.cooldown_ > 0.0) {
        return;
      }

      // VIDEO HACK
      // if (this.cooldown_ < 0.0) {
      //   this.cooldown_ = DEFAULT_COOLDOWN;
      //   const v1 = new THREE.Vector3(0.1, -0.25, -0.1);
      //   v1.x = math.rand_int(-5, 5) * 0.05;
      //   v1.y = math.rand_int(-5, 5) * 0.0625;
      //   v1.z = math.rand_int(-5, 5) * 0.025 - 0.1w;
      //   this.gun_.SetPosition(v1);
      // }

      // VIDEO HACK
      // return;
      const fired = input.mouseLeftReleased();
      if (fired) {
        this.cooldown_ = DEFAULT_COOLDOWN;

        this.LoadSound_('shot.ogg');

        const physics = this.FindEntity('physics').GetComponent('AmmoJSController');
        const end = this.Parent.Forward.clone();
        end.multiplyScalar(100);
        // VIDEO: THIS WAS BROKEN
        // I forgot to add the parent position to the forward vector, so all the shots were
        // offset
        end.add(this.Parent.Position);


        const offset = new THREE.Vector3(0.1, -0.125, -0.75);

        const blaster = this.FindEntity('fx').GetComponent('BlasterSystem');
        const tracer = blaster.CreateParticle();
        // tracer.Start = this.Parent.Position.clone();
        // tracer.End.add(this.Parent.Position);
        // tracer.Velocity = this.Parent.Forward.clone();
        tracer.Start = offset.clone();
        tracer.Start.applyQuaternion(this.Parent.Quaternion);
        tracer.Start.add(this.Parent.Position);
        tracer.End = this.Parent.Forward.clone();
        tracer.End.multiplyScalar(10.0);
        tracer.End.add(this.Parent.Position);

        tracer.Velocity = tracer.End.clone();
        tracer.Velocity.sub(tracer.Start);
        tracer.Velocity.normalize();
        tracer.Velocity.multiplyScalar(5.0);
        tracer.Colours = [new THREE.Color(0x404040), new THREE.Color(0x202020)];
        tracer.Length = 10.0;
        tracer.Life = 1.0;
        tracer.TotalLife = 1.0;
        tracer.Width = 0.125;

        const hits = physics.RayTest(this.Parent.Position, end);

        if (hits.length == 0) {
          return;
        }

        for (let i = 0; i < hits.length; ++i) {
          const mesh = this.FindEntity(hits[i].name);

          if (mesh.Attributes.NPC) {
            if (mesh.Attributes.Stats.health > 0) {
              mesh.Broadcast({topic: 'shot.hit', position: hits[i].position, start: this.Parent.Position, end: end});
              return;
            }
            continue;
          }
      
          mesh.Attributes.Render.group.traverse(c => {
            if (c.geometry) {
              if (0) {
                const position = hits[i].position.clone();
  
                const rotationZ = new THREE.Quaternion();
                rotationZ.setFromAxisAngle(new THREE.Vector3(0, 0, -1), Math.PI * Math.random());
                const rotation = this.Parent.Quaternion.clone();
                rotation.multiply(rotationZ);
                const euler = new THREE.Euler();
                euler.setFromQuaternion(rotation);
    
                const decalScale = 0.2;
                const m = new THREE.Mesh(
                    new DecalGeometry(c, position, euler, new THREE.Vector3(decalScale, decalScale, decalScale) ), decalMaterial);
                this.decals_.add(m);
              }
  
              if (0) {
                {
                  const geometry = new THREE.SphereGeometry( 0.25, 16, 16 );
                  const material = new THREE.MeshBasicMaterial( { color: 0x00FF00 } );
                  const sphere = new THREE.Mesh( geometry, material );
                  sphere.position.copy(hits[i].position);
                  this.params_.scene.add( sphere );  
                }

                const material = new THREE.LineBasicMaterial({
                  color: 0xFF0000,
                  linewidth: 5,
                });
                
                const points = [tracer.Start, hits[i].position];
                
                const geometry = new THREE.BufferGeometry().setFromPoints( points );
                
                const line = new THREE.Line( geometry, material );
                this.params_.scene.add( line );
              }

              // VIDEO HACK
              if (1) {
                const position = hits[i].position.clone();
                const eye = position.clone();
                eye.add(hits[i].normal);
  
                const rotationZ = new THREE.Matrix4();
                rotationZ.makeRotationZ(Math.PI * Math.random());
                const rotation = new THREE.Matrix4();
                rotation.lookAt(eye, position, THREE.Object3D.DefaultUp);
                rotation.multiply(rotationZ);
                const euler = new THREE.Euler();
                euler.setFromRotationMatrix(rotation);
  
                console.log('pos: ' + position.y);
  
                const decalMaterial = new THREE.MeshStandardMaterial( {
                  color: 0xFFFFFF,
                  // map: textureLoader.load('resources/textures/bullet-albedo.png'),
                  // normalMap: textureLoader.load('resources/textures/bullet2-normal.jpg'),
                  // normalScale: new THREE.Vector2(1, -1),
                  transparent: true,
                  depthTest: true,
                  depthWrite: false,
                  polygonOffset: true,
                  polygonOffsetFactor: -4,
                  roughness: 0.1,
                  metalness: 0.1,
                });
                // decalMaterial.map.wrapS = THREE.RepeatWrapping;
                // decalMaterial.map.wrapT = THREE.RepeatWrapping;
                // decalMaterial.map.encoding = THREE.sRGBEncoding;
  
                decal_material.ModifyMaterial(decalMaterial, position);
            
                decalMaterial.customProgramCacheKey = () => {
                  return 'decalMaterial';
                };
                
                const decalScale = 10.0;
                const m = new THREE.Mesh(
                    new DecalGeometry(c, position, euler, new THREE.Vector3(decalScale, decalScale, decalScale * 2) ), decalMaterial);
                m.receiveShadow = true;
                this.decals_.add(m);  
              }
  
            }
          });
          return;
        }
      }
    }

  };

  return {
    GunController: GunController
  };

})();