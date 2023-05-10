import {THREE} from './three-defs.js';

import {entity} from './entity.js';
import {render_order} from './render-order.js';


export const shield_component = (() => {

  const VSH = `
  varying vec3 vWorldPosition;
  varying vec3 vLocalPosition;
  varying vec3 vNormal;

  uniform float time;
  uniform float hitTime;

  float easeOutBounce(float x) {
    const float n1 = 7.5625;
    const float d1 = 2.75;
  
    if (x < 1.0 / d1) {
      return n1 * x * x;
    } else if (x < 2.0 / d1) {
      x -= 1.5 / d1;
      return n1 * x * x + 0.75;
    } else if (x < 2.5 / d1) {
      x -= 2.25 / d1;
      return n1 * x * x + 0.9375;
    } else {
      x -= 2.625 / d1;
      return n1 * x * x + 0.984375;
    }
  }
  
  float easeInBounce(float x) {
    return 1.0 - easeOutBounce(1.0 - x);
  }
  
  float easeInOutBounce(float x) {
    return x < 0.5
      ? (1.0 - easeOutBounce(1.0 - 2.0 * x)) / 2.0
      : (1.0 + easeOutBounce(2.0 * x - 1.0)) / 2.0;
  }

  float parabola( float x, float k ) {
      return pow( 4.0*x*(1.0-x), k );
  }

  void main() {
    float t = clamp((time - hitTime), 0.0, 1.0);
    t = easeOutBounce(t);
    t = parabola(t, 1.0);

    vNormal = (modelMatrix * vec4(position , 0.0)).xyz;
    vLocalPosition = position;
    vWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position * (1.0 + 0.1 * t), 1.0 );
  }`;

  const FSH = `
  varying vec3 vWorldPosition;
  varying vec3 vLocalPosition;
  varying vec3 vNormal;

  uniform float health;
  uniform float time;
  uniform float dissolveTime;
  uniform vec3 hit;
  uniform float hitTime;
  uniform float strength;


  float hash(float p) { p = fract(p * 0.011); p *= p + 7.5; p *= p + p; return fract(p); }

  vec3 hash( vec3 x )
  {
    x = vec3( dot(x,vec3(127.1,311.7, 74.7)),
          dot(x,vec3(269.5,183.3,246.1)),
          dot(x,vec3(113.5,271.9,124.6)));
  
    return fract(sin(x)*43758.5453123);
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
  
  // returns closest, second closest, and cell id
  vec3 voronoi( in vec3 x )
  {
      vec3 p = floor( x );
      vec3 f = fract( x );
  
    float id = 0.0;
      vec2 res = vec2( 100.0 );
      for( int k=-1; k<=1; k++ )
      for( int j=-1; j<=1; j++ )
      for( int i=-1; i<=1; i++ )
      {
          vec3 b = vec3( float(i), float(j), float(k) );
          vec3 r = vec3( b ) - f + hash( p + b );
          float d = dot( r, r );
  
          if( d < res.x )
          {
              id = dot( p+b, vec3(1.0,57.0,113.0 ) );
              res = vec2( d, res.x );			
          }
          else if( d < res.y )
          {
              res.y = d;
          }
      }
  
      return vec3( sqrt( res ), abs(id) );
  }


// 2D 3rd-order Voronoi: This is just a rehash of Fabrice Neyret's version, which is in
// turn based on IQ's original. I've simplified it slightly, and tidied up the "if-statements,"
// but the clever bit at the end came from Fabrice.
//
// Using a bit of science and art, Fabrice came up with the following formula to produce a more 
// rounded, evenly distributed, cellular value:

// d1, d2, d3 - First, second and third closest points (nodes).
// val = 1./(1./(d2 - d1) + 1./(d3 - d1));
//
float Voronoi(in vec3 x){

  vec3 p = floor( x );
  vec3 f = fract( x );

  vec3 d = vec3(1);

  float id = 0.0;
  vec2 res = vec2( 100.0 );
  for( int k=-1; k<=1; k++ )
  for( int j=-1; j<=1; j++ )
  for( int i=-1; i<=1; i++ )
  {
      vec3 b = vec3( float(i), float(j), float(k) );
      vec3 r = vec3( b ) - f + hash( p + b );
      float q = dot( r, r );

      d.z = max(d.x, max(d.y, min(d.z, q))); // 3rd.
      d.y = max(d.x, min(d.y, q)); // 2nd.
      d.x = min(d.x, q); // Closest.
  }

  d = sqrt(d); // Squared distance to distance.
  return min(2./(1./max(d.y - d.x, .001) + 1./max(d.z - d.x, .001)), 1.);
}

vec2 voronoiBorder(vec3 uv){
    
  // Plain Voronoi value. We're saving it and returning it to use when coloring.
  // It's a little less tidy, but saves the need for recalculation later.
  float h = Voronoi(uv*6.);
  
  // Adding some bordering and returning the result as the height map value.
  float c = smoothstep(0., fwidth(h)*0.5, h - .02)*h;
  c += (1.-smoothstep(0., fwidth(h)*1., h - .05))*c*.5; 
  
  // Returning the rounded border Voronoi, and the straight Voronoi values.
  return vec2(c, h);
  
}

  float parabola( float x, float k ) {
    return pow( 4.0*x*(1.0-x), k );
  }

  float easeOutBounce(float x) {
    const float n1 = 7.5625;
    const float d1 = 2.75;

    if (x < 1.0 / d1) {
      return n1 * x * x;
    } else if (x < 2.0 / d1) {
      x -= 1.5 / d1;
      return n1 * x * x + 0.75;
    } else if (x < 2.5 / d1) {
      x -= 2.25 / d1;
      return n1 * x * x + 0.9375;
    } else {
      x -= 2.625 / d1;
      return n1 * x * x + 0.984375;
    }
  }

  float easeInBounce(float x) {
    return 1.0 - easeOutBounce(1.0 - x);
  }

  float easeInOutBounce(float x) {
    return x < 0.5
      ? (1.0 - easeOutBounce(1.0 - 2.0 * x)) / 2.0
      : (1.0 + easeOutBounce(2.0 * x - 1.0)) / 2.0;
  }

  void main() {
    vec3 viewDirection = normalize(cameraPosition - vWorldPosition);
    vec3 normal = normalize(vNormal);
    vec3 voronoiCoord = vLocalPosition * 0.5 + vec3(0.0, time * 0.05, 0.0);

    // Obtain the height map (rounded Voronoi border) value, then another nearby. 
    vec2 c = voronoiBorder(voronoiCoord);
    
    vec3 base = mix(vec3(1.0, .05, 0.25), vec3(0.25, .05, 1.0), health);
    vec3 col = base * (c.x * 0.75 + 0.25);
    float sv = Voronoi(voronoiCoord*16. + c.y)*.66 + (1.-Voronoi(voronoiCoord*48. + c.y*2.))*.34; // Finer overlay pattern.
    col = col*.85 + vec3(0.5, .7, 1.0)*sv*sqrt(sv)*.2; // Mix in a little of the overlay.
    col *= col;
    
    float dp = max(0.0, dot(viewDirection, normal));
    float fresnel = smoothstep(1.0, 0.2, dp);
    fresnel = pow(fresnel, 1.0);

    float hitDist = distance(hit, vWorldPosition);
    float hitFresnel = smoothstep(1.0, 0.0, hitDist);
    hitFresnel = 2.0 * pow(hitFresnel, 2.0);
    hitFresnel *= parabola(clamp(time - hitTime, 0.0, 1.0), 1.0);

    fresnel = clamp(max(fresnel, hitFresnel), 0.0, 1.0);

    float noiseSample = fbmd_7(fbmd_7(vWorldPosition * 0.5).yzw + vWorldPosition * 0.5).x;

    float dissolveT = (noiseSample + clamp((time - dissolveTime) / 2.0, 0.0, 10.0));
    float dissolve = smoothstep(1.05, 1.0, dissolveT);
    float totalStrength = clamp(strength + 5.0 * smoothstep(0.9, 1.0, dissolveT), 0.0, 1.0);

    // VIDEO HACK
    gl_FragColor = vec4(col * (0.5 + fresnel), fresnel) * totalStrength * dissolve;
    // gl_FragColor = vec4(col * (0.5 + fresnel), fresnel * alpha);
    // gl_FragColor = vec4(vec3(alpha), 1.0);
  }`;

  class ShieldComponent extends entity.Component {
    constructor(params) {
      super();
      this.params_ = params;
    }

    InitEntity() {
      const geometry = new THREE.IcosahedronGeometry(2, 6);
      const material = new THREE.ShaderMaterial({
        uniforms: {
          time: { value: 0.0 },
          dissolveTime: { value: 100000000.0 },
          strength: { value: 1.0 },
          health: { value: 1.0 },
          hit: { value: new THREE.Vector3(0, 0, 0) },
          hitTime: { value: 0.0 },
        },
        vertexShader: VSH,
        fragmentShader: FSH,
        transparent: true,
        blending: THREE.CustomBlending,
        blendEquation: THREE.AddEquation,
        blendSrc: THREE.OneFactor,
        blendDst: THREE.OneFactor,
        blendSrcAlpha: THREE.OneFactor,
        blendDstAlpha: THREE.OneFactor,
        blending: THREE.AdditiveBlending,
      });
      this.model_ = new THREE.Mesh(geometry, material);
      this.model_.position.set(0, -1, 0);

      this.group_ = new THREE.Group();
      this.group_.add(this.model_);
      this.group_.renderOrder = render_order.SHIELDS;

      this.params_.scene.add(this.group_);

      this.dead_ = false;
    }

    InitComponent() {
      this.RegisterHandler_('health.death', (m) => { this.OnDeath_(m); });
      this.RegisterHandler_(
          'update.position', (m) => { this.OnUpdatePosition_(m); });
      this.RegisterHandler_(
          'update.rotation', (m) => { this.OnUpdateRotation_(m); });
      this.RegisterHandler_(
          'shot.hit', (m) => { this.OnHit_(m); });
      this.RegisterHandler_(
          'health.update', (m) => { this.OnDamage_(m); });
    }

    OnUpdatePosition_(msg) {
      this.group_.position.copy(msg.value);
    }

    OnUpdateRotation_(msg) {
      this.group_.quaternion.copy(msg.value);
    }

    OnHit_(msg) {
      if (this.dead_) {
        return;
      }
      this.model_.updateWorldMatrix(true, true);

      const origin = new THREE.Vector3(0, 0, 0);
      origin.applyMatrix4(this.model_.matrixWorld);

      const dir = msg.end.clone().sub(msg.start).normalize();
      const ray = new THREE.Ray(msg.start, dir);
      const sphere = new THREE.Sphere(origin, 2);
      const hit = new THREE.Vector3();

      ray.intersectSphere(sphere, hit);

      this.model_.material.uniforms.hit.value.copy(hit);
    }

    OnDeath_(msg) {
      this.dead_ = true;
      this.model_.material.uniforms.dissolveTime.value = this.model_.material.uniforms.time.value;
    }

    OnDamage_(msg) {
      if (this.dead_) {
        return;
      }
      this.model_.material.uniforms.hitTime.value = this.model_.material.uniforms.time.value;
      this.model_.material.uniforms.health.value = this.Parent.Attributes.Stats.health / this.Parent.Attributes.Stats.maxHealth;
    }

    Update(timeInSeconds) {
      this.model_.material.uniforms.time.value += timeInSeconds;
    }
  };
  
  return {
      ShieldComponent: ShieldComponent,
  };

})();