import {THREE} from './three-defs.js';

import {entity} from './entity.js';

import {math} from './math.js';

import {render_component} from './render-component.js';
import {basic_rigid_body} from './basic-rigid-body.js';
import {mesh_rigid_body} from './mesh-rigid-body.js';

export const level_1_builder = (() => {

  class Level1Builder extends entity.Component {
    static CLASS_NAME = 'Level1Builder';

    get NAME() {
      return Level1Builder.CLASS_NAME;
    }

    constructor(params) {
      super();

      this.params_ = params;
      this.spawned_ = false;
      this.materials_ = {};
    }

    LoadMaterial_(albedoName, normalName, roughnessName, metalnessName) {
      const textureLoader = new THREE.TextureLoader();
      const albedo = textureLoader.load('resources/textures/' + albedoName);
      albedo.anisotropy = this.FindEntity('threejs').GetComponent('ThreeJSController').getMaxAnisotropy();
      albedo.wrapS = THREE.RepeatWrapping;
      albedo.wrapT = THREE.RepeatWrapping;
      albedo.encoding = THREE.sRGBEncoding;

      const metalness = textureLoader.load('resources/textures/' + metalnessName);
      metalness.anisotropy = this.FindEntity('threejs').GetComponent('ThreeJSController').getMaxAnisotropy();
      metalness.wrapS = THREE.RepeatWrapping;
      metalness.wrapT = THREE.RepeatWrapping;

      const normal = textureLoader.load('resources/textures/' + normalName);
      normal.anisotropy = this.FindEntity('threejs').GetComponent('ThreeJSController').getMaxAnisotropy();
      normal.wrapS = THREE.RepeatWrapping;
      normal.wrapT = THREE.RepeatWrapping;

      const roughness = textureLoader.load('resources/textures/' + roughnessName);
      roughness.anisotropy = this.FindEntity('threejs').GetComponent('ThreeJSController').getMaxAnisotropy();
      roughness.wrapS = THREE.RepeatWrapping;
      roughness.wrapT = THREE.RepeatWrapping;

      const material = new THREE.MeshStandardMaterial({
        map: albedo,
        color: 0x303030,
        // metalnessMap: metalness,
        // normalMap: normal,
        // roughnessMap: roughness,
      });

      // VIDEO HACK
      material.onBeforeCompile = (shader) => {
        shader.uniforms.iTime = { value: 0.0 };
  
        shader.vertexShader = shader.vertexShader.replace('#include <common>',
        `
        #include <common>
        varying vec4 vWorldPosition;
        varying vec3 vWorldNormal;
        `);
        shader.vertexShader = shader.vertexShader.replace('#include <fog_vertex>',
        `
        #include <fog_vertex>
        vWorldPosition = worldPosition;
        vWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
        `);
        shader.fragmentShader = shader.fragmentShader.replace('#include <common>',
        `
        #include <common>
        varying vec4 vWorldPosition;
        varying vec3 vWorldNormal;
        uniform float iTime;

vec3 hash3( vec3 p ) // replace this by something better. really. do
{
  p = vec3( dot(p,vec3(127.1,311.7, 74.7)),
        dot(p,vec3(269.5,183.3,246.1)),
        dot(p,vec3(113.5,271.9,124.6)));

  return -1.0 + 2.0*fract(sin(p)*43758.5453123);
}

float noise( in vec3 p )
{
    vec3 i = floor( p );
    vec3 f = fract( p );
	
	vec3 u = f*f*(3.0-2.0*f);

    return mix( mix( mix( dot( hash3( i + vec3(0.0,0.0,0.0) ), f - vec3(0.0,0.0,0.0) ), 
                          dot( hash3( i + vec3(1.0,0.0,0.0) ), f - vec3(1.0,0.0,0.0) ), u.x),
                     mix( dot( hash3( i + vec3(0.0,1.0,0.0) ), f - vec3(0.0,1.0,0.0) ), 
                          dot( hash3( i + vec3(1.0,1.0,0.0) ), f - vec3(1.0,1.0,0.0) ), u.x), u.y),
                mix( mix( dot( hash3( i + vec3(0.0,0.0,1.0) ), f - vec3(0.0,0.0,1.0) ), 
                          dot( hash3( i + vec3(1.0,0.0,1.0) ), f - vec3(1.0,0.0,1.0) ), u.x),
                     mix( dot( hash3( i + vec3(0.0,1.0,1.0) ), f - vec3(0.0,1.0,1.0) ), 
                          dot( hash3( i + vec3(1.0,1.0,1.0) ), f - vec3(1.0,1.0,1.0) ), u.x), u.y), u.z );
}

float sdCircle( vec3 p, float r )
{
    return length(p) - r;
}

float smin(float a, float b, float k) {
  float h = clamp(0.5 + 0.5*(a-b)/k, 0.0, 1.0);
  return mix(a, b, h) - k*h*(1.0-h);
}

vec3 pal( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d )
{
    return a + b*cos( 6.28318*(c*t+d) );
}

        `);
        shader.fragmentShader = shader.fragmentShader.replace('#include <emissivemap_fragment>',
          `
          #include <emissivemap_fragment>
  
          float size = 1.0;
          vec2 posXY = mod(floor(vWorldPosition.xy / size), size);  
          vec2 posXZ = mod(floor(vWorldPosition.xz / size), 10.0);  
          vec2 posYZ = mod(floor(vWorldPosition.yz), 1.0);
  
          vec3 weights = abs(vWorldNormal.xyz);
          weights /= dot(weights, vec3(1.0));

          float maxWeight = max(weights.x, max(weights.y, weights.z));

          vec2 coords;
          if (maxWeight == weights.z) {
            coords = vWorldPosition.xy / size;
          } else if (maxWeight == weights.y) {
            coords = vWorldPosition.xz / size;
          } else {
            coords = vWorldPosition.yz / size;
          }

          diffuseColor.xyz = texture(map, coords).xyz;

          // metalnessFactor = 0.1 * (1.0 - diffuseColor.x);
          // roughnessFactor = diffuseColor.x * 0.5;

          // vec3 flooredPos = floor(vWorldPosition.xyz / size);

          // Hack, Nvidia cards seem to have a problem with the world position code above.
          // No idea why.
          ivec2 iflooredPos2 = ivec2(
            int(floor(coords.x / size)),
            int(floor(coords.y / size)));
          vec3 flooredPos2 = vec3(float(iflooredPos2.x), float(iflooredPos2.y), float(iflooredPos2.x));

          float t = noise(flooredPos2 * 23.926325 + vec3(0.2));
          vec3 c1 = pal( t, vec3(0.5,0.5,0.5),vec3(0.5,0.5,0.5),vec3(1.0,1.0,1.0),vec3(0.0,0.33,0.67) );

          diffuseColor.xyz *= mix(0.25, 0.5, t);

          t = noise(flooredPos2 * 37.8953326 + vec3(0.05 * iTime));
          totalEmissiveRadiance += smoothstep(0.3, 0.31, t) * c1 * 0.25;
          diffuseColor.a = smoothstep(50.0, 0.0, fogDepth) * smoothstep(0.3, 0.31, t) * 0.5;

        `);
        material.userData.shader = shader;
      };
  
      material.customProgramCacheKey = () => {
        return albedo;
      };

      // VIDEO HACK
      const csm = this.FindEntity('threejs').GetComponent('ThreeJSController').csm_;
      csm.setupMaterial(material);

      return material;
    }

    BuildHackModel_() {
      // HACK
      // const plane = new THREE.Mesh(
      //     new THREE.PlaneGeometry(100, 100, 10, 10),
      //     checkerboard);
      // plane.castShadow = false;
      // plane.receiveShadow = true;
      // plane.rotation.x = -Math.PI / 2;
      // this.scene_.add(plane);
      this.materials_.checkerboard = this.LoadMaterial_(
          'whitesquare.png', null, null, null);
      this.materials_.vintageTile = this.LoadMaterial_(
          'vintage-tile1_albedo.png', 'vintage-tile1_normal.png',
          'vintage-tile1_roughness.png', 'vintage-tile1_metallic.png');
      this.materials_.hexagonPavers = this.LoadMaterial_(
          'hexagon-pavers1_albedo.png', 'hexagon-pavers1_normal.png',
          'hexagon-pavers1_roughness.png', 'hexagon-pavers1_metallic.png');
      this.materials_.dampDungeon = this.LoadMaterial_(
          'damp-dungeon-floor_albedo.png', 'damp-dungeon-floor_normal.png',
          'damp-dungeon-floor_roughness.png', 'damp-dungeon-floor_metallic.png');
      this.materials_.rockSliced = this.LoadMaterial_(
          'rock_sliced_albedo.png', 'rock_sliced_normal.png',
          'rock_sliced_roughness.png', 'rock_sliced_metallic.png');
      this.materials_.filthySpacePanels = this.LoadMaterial_(
          'filthy-space-panels_albedo.png', 'filthy-space-panels_normal.png',
          'filthy-space-panels_roughness.png', 'filthy-space-panels_metallic.png');
      this.materials_.paintedWornAsphalt = this.LoadMaterial_(
          'painted-worn-asphalt_albedo.png', 'painted-worn-asphalt_normal.png',
          'painted-worn-asphalt_roughness.png', 'painted-worn-asphalt_metallic.png');
      this.materials_.brokenDownConcrete2 = this.LoadMaterial_(
          'broken_down_concrete2_albedo.png', 'broken_down_concrete2_normal.png',
          'broken_down_concrete2_roughness.png', 'broken_down_concrete2_metallic.png');
      this.materials_.stucco1 = this.LoadMaterial_(
          'stucco1_albedo.png', 'stucco1_normal.png',
          'stucco1_roughness.png', 'stucco1_metallic.png');

      const ground = new THREE.Mesh(
          new THREE.BoxGeometry(1, 1, 1, 10, 10, 10),
          this.materials_.checkerboard);
      ground.castShadow = true;
      ground.receiveShadow = true;

      this.FindEntity('loader').GetComponent('LoadController').AddModel(ground, 'built-in.', 'ground');

      const box = new THREE.Mesh(
          new THREE.BoxGeometry(1, 1, 1, 10, 10, 10),
          this.materials_.checkerboard);
      box.castShadow = true;
      box.receiveShadow = true;

      this.FindEntity('loader').GetComponent('LoadController').AddModel(box, 'built-in.', 'box');

      const column = new THREE.Mesh(
          new THREE.CylinderGeometry(0.5, 0.5, 1, 8, 1),
          this.materials_.hexagonPavers);
      column.castShadow = true;
      column.receiveShadow = true;

      this.FindEntity('loader').GetComponent('LoadController').AddModel(column, 'built-in.', 'column');
    
      this.currentTime_ = 0.0;
    }

    Update(timeElapsed) {
      this.currentTime_ += timeElapsed;

      if (this.materials_.checkerboard && this.materials_.checkerboard.userData.shader) {
        this.materials_.checkerboard.userData.shader.uniforms.iTime.value = this.currentTime_;
        this.materials_.checkerboard.needsUpdate = true;
      }

      if (this.spawned_) {
        return;
      }

      this.spawned_ = true;

      this.BuildHackModel_();

      const e = new entity.Entity();
      e.AddComponent(new render_component.RenderComponent({
        scene: this.params_.scene,
        resourcePath: 'built-in.',
        resourceName: 'ground',
        scale: new THREE.Vector3(100, 20, 100),
        emissive: new THREE.Color(0x000000),
        color: new THREE.Color(0xFFFFFF),
      }));
      e.AddComponent(new basic_rigid_body.BasicRigidBody({
        // scene: this.params_.scene,
        box: new THREE.Vector3(100, 20, 100)
      }));

      this.Manager.Add(e, 'ground');
      e.SetPosition(new THREE.Vector3(0, -12, 0));
      e.SetActive(false);

      // VIDEO HACK
      const models = [
        ['anubis', 10, [-1, -1]],
        ['robot', 1, [-1, 1]],
        ['buddha', 10, [1, -1]],
        ['skull', 10, [1, 1]]
      ];
      for (let i = 0; i < models.length; ++i) {
        const pos = new THREE.Vector3(models[i][2][0] * 50, 0, models[i][2][1 ] * 50);
        {
          const e = new entity.Entity();
          e.AddComponent(new render_component.RenderComponent({
            scene: this.params_.scene,
            resourcePath: 'built-in.',
            resourceName: 'box',
            scale: new THREE.Vector3(20, 30, 20),
            emissive: new THREE.Color(0x000000),
            color: new THREE.Color(0x808080),
          }));
          e.AddComponent(new basic_rigid_body.BasicRigidBody({
            // scene: this.params_.scene,
            box: new THREE.Vector3(20, 30, 20),
          }));
    
          this.Manager.Add(e);
          e.SetPosition(pos);
          e.SetActive(false);  
        }

        const e = new entity.Entity();
        e.AddComponent(new render_component.RenderComponent({
          scene: this.params_.scene,
          resourcePath: 'resources/models/' + models[i][0] + '/',
          resourceName: 'scene.glb',
          scale: new THREE.Vector3(models[i][1], models[i][1], models[i][1]),
          emissive: new THREE.Color(0x000000),
          color: new THREE.Color(0xFFFFFF),
        }));

        this.Manager.Add(e);
        e.SetPosition(new THREE.Vector3(pos.x, pos.y + 15, pos.z));
        e.SetActive(false);
      }

      for (let x = -2; x <= 2; ++x) {
        for (let y = -2; y <= 2; ++y) {
          const e = new entity.Entity();
          e.AddComponent(new render_component.RenderComponent({
            scene: this.params_.scene,
            resourcePath: 'built-in.',
            resourceName: 'ground',
            scale: new THREE.Vector3(50, 20, 50),
            emissive: new THREE.Color(0x000000),
            color: new THREE.Color(0xFFFFFF),
          }));
          e.AddComponent(new basic_rigid_body.BasicRigidBody({
            // scene: this.params_.scene,
            box: new THREE.Vector3(50, 20, 50)
          }));
    
          this.Manager.Add(e);
          e.SetPosition(new THREE.Vector3(x * 50, math.rand_range(-30.0, -10.0), y * 50));
          e.SetActive(false);
        }
      }
      for (let i = -3; i <= 3; ++i) {
        for (let j = -3; j <= 3; ++j) {
          if (i == 0 && j == 0) {
            continue;
          }
          const e = new entity.Entity();
          e.AddComponent(new render_component.RenderComponent({
            scene: this.params_.scene,
            resourcePath: 'built-in.',
            resourceName: 'box',
            scale: new THREE.Vector3(8, 10, 8),
            emissive: new THREE.Color(0x000000),
            color: new THREE.Color(0xFFFFFF),
          }));
          e.AddComponent(new basic_rigid_body.BasicRigidBody({
            // scene: this.params_.scene,
            box: new THREE.Vector3(8, 10, 8),
          }));
    
          this.Manager.Add(e, 'box.' + i + '.' + j);
          e.SetPosition(new THREE.Vector3(i * 20, 1, j * 20));
          e.SetActive(false);
        }
      }
      // {
      //   const e = new entity.Entity();
      //   e.AddComponent(new render_component.RenderComponent({
      //     scene: this.params_.scene,
      //     resourcePath: 'built-in.',
      //     resourceName: 'box',
      //     scale: new THREE.Vector3(10, 10, 10),
      //     emissive: new THREE.Color(0x000000),
      //     color: new THREE.Color(0xFFFFFF),
      //   }));
      //   e.AddComponent(new basic_rigid_body.BasicRigidBody({
      //     // scene: this.params_.scene,
      //     box: new THREE.Vector3(10, 10, 10),
      //   }));
  
      //   this.Manager.Add(e);
      //   e.SetPosition(new THREE.Vector3(0, 3, -20));
      //   e.SetActive(false);
      // }

      // const walls = [[-1, 0], [1, 0], [0, -1], [0, 1]];
      // for (let i = 0; i < walls.length; ++i) {
      //   const e = new entity.Entity();
      //   e.AddComponent(new render_component.RenderComponent({
      //     scene: this.params_.scene,
      //     resourcePath: 'built-in.',
      //     resourceName: 'ground',
      //     scale: new THREE.Vector3(100, 10, 100),
      //     emissive: new THREE.Color(0x000000),
      //     color: new THREE.Color(0xFFFFFF),
      //   }));
      //   e.AddComponent(new basic_rigid_body.BasicRigidBody({
      //     // scene: this.params_.scene,
      //     box: new THREE.Vector3(100, 10, 100)
      //   }));
  
      //   this.Manager.Add(e);
      //   e.SetPosition(new THREE.Vector3(walls[i][0] * 100, 3, walls[i][1] * 100));
      //   e.SetActive(false);
      // }

      this.FindEntity('spawners').GetComponent('TargetSpawner').Spawn({
        scene: this.params_.scene,
        position: new THREE.Vector3(0, 2, 5)
      });

      // this.FindEntity('spawners').GetComponent('TargetSpawner').Spawn({
      //   scene: this.params_.scene,
      //   position: new THREE.Vector3(-100, 50, -100)
      // });

      // this.FindEntity('spawners').GetComponent('TargetSpawner').Spawn({
      //   scene: this.params_.scene,
      //   position: new THREE.Vector3(-100, 50, -5)
      // });

      // this.FindEntity('spawners').GetComponent('TargetSpawner').Spawn({
      //   scene: this.params_.scene,
      //   position: new THREE.Vector3(-50, 50, -50)
      // });

      // this.FindEntity('spawners').GetComponent('TargetSpawner').Spawn({
      //   scene: this.params_.scene,
      //   position: new THREE.Vector3(-50, 50, 50)
      // });

      // {
      //   const e = new entity.Entity();
      //   e.AddComponent(new render_component.RenderComponent({
      //     scene: this.params_.scene,
      //     resourcePath: 'built-in.',
      //     resourceName: 'box',
      //     scale: new THREE.Vector3(10, 10, 10),
      //     emissive: new THREE.Color(0x000000),
      //     color: new THREE.Color(0xFFFFFF),
      //   }));
      //   e.AddComponent(new basic_rigid_body.BasicRigidBody({
      //     box: new THREE.Vector3(10, 10, 10)
      //   }));
  
      //   this.Manager.Add(e, 'box.11');
      //   e.SetPosition(new THREE.Vector3(0, 5, -20));
      //   e.SetActive(false);
      // }

      // this.spawned_.push(e);
    }
  };

  return {
    Level1Builder: Level1Builder
  };

})();