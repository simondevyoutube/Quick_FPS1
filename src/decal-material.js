import {THREE} from "./three-defs.js";


export const decal_material = (() => {

  function Modify(material, position) {
    material.onBeforeCompile = (shader) => {
      shader.uniforms.poopSpot = { value: position, };

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
      const FS_DECLARATIONS = `
      uniform vec3 poopSpot;
      `;
      shader.fragmentShader = shader.fragmentShader.replace('void main()', FS_DECLARATIONS + 'void main()');
      shader.fragmentShader = shader.fragmentShader.replace('#include <common>',
    `
      #include <common>
      varying vec4 vWorldPosition;
      varying vec3 vWorldNormal;


      vec3 hash( vec3 p ) // replace this by something better. really. do
      {
        p = vec3( dot(p,vec3(127.1,311.7, 74.7)),
              dot(p,vec3(269.5,183.3,246.1)),
              dot(p,vec3(113.5,271.9,124.6)));

        return -1.0 + 2.0*fract(sin(p)*43758.5453123);
      }

      // return value noise (in x) and its derivatives (in yzw)
      vec4 noised( in vec3 x )
      {
          // grid
          vec3 i = floor(x);
          vec3 w = fract(x);
          
          #if 1
          // quintic interpolant
          vec3 u = w*w*w*(w*(w*6.0-15.0)+10.0);
          vec3 du = 30.0*w*w*(w*(w-2.0)+1.0);
          #else
          // cubic interpolant
          vec3 u = w*w*(3.0-2.0*w);
          vec3 du = 6.0*w*(1.0-w);
          #endif    
          
          // gradients
          vec3 ga = hash( i+vec3(0.0,0.0,0.0) );
          vec3 gb = hash( i+vec3(1.0,0.0,0.0) );
          vec3 gc = hash( i+vec3(0.0,1.0,0.0) );
          vec3 gd = hash( i+vec3(1.0,1.0,0.0) );
          vec3 ge = hash( i+vec3(0.0,0.0,1.0) );
        vec3 gf = hash( i+vec3(1.0,0.0,1.0) );
          vec3 gg = hash( i+vec3(0.0,1.0,1.0) );
          vec3 gh = hash( i+vec3(1.0,1.0,1.0) );
          
          // projections
          float va = dot( ga, w-vec3(0.0,0.0,0.0) );
          float vb = dot( gb, w-vec3(1.0,0.0,0.0) );
          float vc = dot( gc, w-vec3(0.0,1.0,0.0) );
          float vd = dot( gd, w-vec3(1.0,1.0,0.0) );
          float ve = dot( ge, w-vec3(0.0,0.0,1.0) );
          float vf = dot( gf, w-vec3(1.0,0.0,1.0) );
          float vg = dot( gg, w-vec3(0.0,1.0,1.0) );
          float vh = dot( gh, w-vec3(1.0,1.0,1.0) );
        
          // interpolations
          return vec4( va + u.x*(vb-va) + u.y*(vc-va) + u.z*(ve-va) + u.x*u.y*(va-vb-vc+vd) + u.y*u.z*(va-vc-ve+vg) + u.z*u.x*(va-vb-ve+vf) + (-va+vb+vc-vd+ve-vf-vg+vh)*u.x*u.y*u.z,    // value
                        ga + u.x*(gb-ga) + u.y*(gc-ga) + u.z*(ge-ga) + u.x*u.y*(ga-gb-gc+gd) + u.y*u.z*(ga-gc-ge+gg) + u.z*u.x*(ga-gb-ge+gf) + (-ga+gb+gc-gd+ge-gf-gg+gh)*u.x*u.y*u.z +   // derivatives
                        du * (vec3(vb,vc,ve) - va + u.yzx*vec3(va-vb-vc+vd,va-vc-ve+vg,va-vb-ve+vf) + u.zxy*vec3(va-vb-ve+vf,va-vb-vc+vd,va-vc-ve+vg) + u.yzx*u.zxy*(-va+vb+vc-vd+ve-vf-vg+vh) ));
      }

      float sdCircle( vec3 p, float r )
      {
          return length(p) - r;
      }

      float smin(float a, float b, float k) {
        float h = clamp(0.5 + 0.5*(a-b)/k, 0.0, 1.0);
        return mix(a, b, h) - k*h*(1.0-h);
      }

      const mat3 m3  = mat3( 0.00,  0.80,  0.60,
        -0.80,  0.36, -0.48,
        -0.60, -0.48,  0.64 );
      const mat3 m3i = mat3( 0.00, -0.80, -0.60,
        0.80,  0.36, -0.48,
        0.60, -0.48,  0.64 );
      const mat2 m2 = mat2(  0.80,  0.60,
        -0.60,  0.80 );
      const mat2 m2i = mat2( 0.80, -0.60,
        0.60,  0.80 );

      vec4 fbmd_7( in vec3 x )
      {
          float f = 1.92;
          float s = 0.5;
          float a = 0.0;
          float b = 0.5;
          vec3  d = vec3(0.0);
          mat3  m = mat3(1.0,0.0,0.0,
                        0.0,1.0,0.0,
                        0.0,0.0,1.0);
          for( int i=0; i<3; i++ )
          {
              vec4 n = noised(x);
              a += b*n.x;          // accumulate values		
              d += b*m*n.yzw;      // accumulate derivatives
              b *= s;
              x = f*m3*x;
              m = f*m3i*m;
          }
        return vec4( a, d );
      }

      `);
      shader.fragmentShader = shader.fragmentShader.replace('#include <emissivemap_fragment>',
        `
        #include <emissivemap_fragment>

        float sdf = sdCircle(vWorldPosition.xyz - poopSpot, 0.15);
        for (float i = 0.0; i < 15.0; i += 1.0) {
          vec4 noiseSample = noised(poopSpot + vec3(i * 10.0));
          vec3 projPoint = 0.5 * noiseSample.yzw;
          vec3 splatPos = poopSpot + projPoint;
          float d = sdCircle(vWorldPosition.xyz - splatPos, noiseSample.x * 0.05 + 0.05);
          sdf = smin(sdf, d, 0.3);
        }
        float dist = smoothstep(0.1, 0.0, sdf);

        vec4 foop = noised(poopSpot.xyz * 100.0);
        diffuseColor.w = clamp(dist, 0.0, 1.0);
        diffuseColor.xyz = vec3(0.0, 0.0, 1.0);
      `);
      material.userData.shader = shader;
    };
  }

  return {
    ModifyMaterial: Modify,
  };
})();