import {THREE} from './three-defs.js';


const RadialBlurShader = {

	shaderID: 'luminosityHighPass',

	uniforms: {

		'tDiffuse': { value: null },
		'strength': { value: 0.5 },
		'center': { value: new THREE.Vector2(0, 0) },
		'resolution': { value: new THREE.Vector2(0, 0) },
	},

	vertexShader: /* glsl */`
		varying vec2 vUv;
		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,

	fragmentShader: `
uniform sampler2D tDiffuse;
uniform vec2 center;
uniform float strength;
uniform vec2 resolution;
varying vec2 vUv;

float hash(vec3 scale){return fract(sin(dot(gl_FragCoord.xyz,scale))*43758.5453);}

vec3 saturate(vec3 t) {
  return clamp(t, vec3(0.0), vec3(1.0));
}

vec3 RRTAndODTFit( vec3 v ) {
  vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
  vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
  return a / b;
}
vec3 ACESFilmicToneMapping( vec3 colour ) {
// sRGB => XYZ => D65_2_D60 => AP1 => RRT_SAT
  const mat3 ACESInputMat = mat3(
    vec3( 0.59719, 0.07600, 0.02840 ), // transposed from source
    vec3( 0.35458, 0.90834, 0.13383 ),
    vec3( 0.04823, 0.01566, 0.83777 )
  );
// ODT_SAT => XYZ => D60_2_D65 => sRGB
  const mat3 ACESOutputMat = mat3(
    vec3(  1.60475, -0.10208, -0.00327 ), // transposed from source
    vec3( -0.53108,  1.10813, -0.07276 ),
    vec3( -0.07367, -0.00605,  1.07602 )
  );
  colour = ACESInputMat * colour;
// Apply RRT and ODT
  colour = RRTAndODTFit( colour );
  colour = ACESOutputMat * colour;
// Clamp to [0, 1]
  return saturate( colour );
}

float inverseLerp(float v, float minValue, float maxValue) {
  return (v - minValue) / (maxValue - minValue);
}

float remap(float v, float inMin, float inMax, float outMin, float outMax) {
  float t = inverseLerp(v, inMin, inMax);
  return mix(outMin, outMax, t);
}


const float SAMPLES = 64.0;

void main(){
  vec4 colour = vec4(0.0);

  if (strength > 0.0) {
    vec3 luma = vec3(0.299, 0.587, 0.114);
    vec2 toCenter = center - vUv * resolution;

    float offset = hash(vec3(13.4325, 67.8432, 33.535));
    float total = 0.0;

    for(float t = 0.0; t < SAMPLES; t++) {
      float percent = (t + offset) / SAMPLES;
      float weight= 4.0 * (percent - percent * percent);
      float falloff = length(toCenter);
      falloff = smoothstep(200.0, 600.0, falloff);

      vec4 textureSample = texture2D(
          tDiffuse, vUv + falloff * percent * toCenter * strength / resolution);
      textureSample.xyz = mix(
          textureSample.xyz, vec3(dot(textureSample.xyz, luma)) * 0.1, falloff * strength);

      colour += textureSample * weight;
      total += weight;
    }
    colour = colour / total;
    colour.xyz = mix(colour.xyz, smoothstep(vec3(0.0), vec3(1.0), colour.xyz), strength);
  } else {
    colour = texture2D(tDiffuse, vUv);
  }

  // Might as well do colour grading here
  colour.xyz *= 1.0 / 0.6;
  colour.xyz = ACESFilmicToneMapping(colour.xyz);

  // VIDEO HACK
  // Vignette
  float v1 = smoothstep(0.5, 0.3, abs(vUv.x - 0.5));
  float v2 = smoothstep(0.5, 0.3, abs(vUv.y - 0.5));
  float v = v1 * v2;
  v = pow(v, 0.25);
  v = remap(v, 0.0, 1.0, 0.2, 1.0);

  colour.xyz *= vec3(v);

  gl_FragColor = colour;
}
    `

};

export { RadialBlurShader };