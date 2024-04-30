import{ShaderChunk as oi,Matrix4 as Qi,Color as gn,LinearEncoding as sp,DataTexture as Bs,RGBFormat as Kl,RepeatWrapping as fa,LinearFilter as ma,Frustum as op,WebGLRenderTarget as ga,RGBAFormat as vn,HalfFloatType as $l,ShaderMaterial as Si,FloatType as lp,ShaderLib as zs,FrontSide as ec,BackSide as cp,Vector2 as va,Vector4 as tc,NearestFilter as _a,Math as hp}from"//cdn.skypack.dev/three@0.130.1/build/three.module.js";import{Pass as ic,FullScreenQuad as _n}from"//cdn.skypack.dev/three@0.130.1/examples/jsm/postprocessing/Pass.js";import*as Be from"https://cdn.skypack.dev/three@0.130.1";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();const up=(()=>{class a{constructor(){this.ids_=0,this.entitiesMap_={},this.entities_=[],this.passes_=[0,1,2,3]}_GenerateName(){return"__name__"+this.ids_}Get(t){return this.entitiesMap_[t]}Filter(t){return this.entities_.filter(t)}Add(t,i){this.ids_+=1,i||(i=this._GenerateName()),this.entitiesMap_[i]=t,this.entities_.push(t),t.SetParent(this),t.SetName(i),t.SetId(this.ids_),t.InitEntity()}SetActive(t,i){const r=this.entities_.indexOf(t);if(i){if(r>=0)return;this.entities_.push(t)}else{if(r<0)return;this.entities_.splice(r,1)}}Update(t){for(let i=0;i<this.passes_.length;++i)this.UpdatePass_(t,this.passes_[i])}UpdatePass_(t,i){const r=[],n=[];for(let s=0;s<this.entities_.length;++s){const o=this.entities_[s];o.Update(t,i),o.dead_?r.push(o):n.push(o)}for(let s=0;s<r.length;++s){const o=r[s];delete this.entitiesMap_[o.Name],o.Destroy()}this.entities_=n}}return{EntityManager:a}})();/**
* @license
* Copyright 2010-2021 Three.js Authors
* SPDX-License-Identifier: MIT
*/const rc="130",dp=0,nc=1,pp=2,ac=1,sc=2,xn=3,fr=0,nt=1,Mi=2,oc=1,yn=0,mr=1,xa=2,lc=3,cc=4,hc=5,qi=100,fp=101,mp=102,uc=103,dc=104,gp=200,wn=201,vp=202,_p=203,pc=204,fc=205,xp=206,yp=207,wp=208,bp=209,Sp=210,Mp=0,Tp=1,Ap=2,Hs=3,Ep=4,Lp=5,Pp=6,Cp=7,ya=0,Rp=1,Ip=2,gr=0,Fp=1,Np=2,Dp=3,Up=4,Op=5,mc=300,ks=301,Gs=302,Vs=303,gc=304,Ws=306,Xs=307,at=1e3,St=1001,wa=1002,lt=1003,js=1004,Ys=1005,ut=1006,vc=1007,vr=1008,ba=1009,Bp=1010,zp=1011,Sa=1012,Hp=1013,Ma=1014,li=1015,_r=1016,kp=1017,Gp=1018,Vp=1019,bn=1020,Wp=1021,Ti=1022,Ct=1023,Xp=1024,jp=1025,xr=1026,Sn=1027,Yp=1028,Qp=1029,qp=1030,Jp=1031,Zp=1032,Kp=1033,_c=33776,xc=33777,yc=33778,wc=33779,bc=35840,Sc=35841,Mc=35842,Tc=35843,$p=36196,Ac=37492,Ec=37496,ef=37808,tf=37809,rf=37810,nf=37811,af=37812,sf=37813,of=37814,lf=37815,cf=37816,hf=37817,uf=37818,df=37819,pf=37820,ff=37821,mf=36492,gf=37840,vf=37841,_f=37842,xf=37843,yf=37844,wf=37845,bf=37846,Sf=37847,Mf=37848,Tf=37849,Af=37850,Ef=37851,Lf=37852,Pf=37853,Ta=2200,Cf=2201,Rf=2202,Mn=2300,yr=2301,Qs=2302,wr=2400,br=2401,Aa=2402,qs=2500,Lc=2501,If=0,Ff=1,Pc=2,Tn=3e3,Rt=3001,Nf=3007,Df=3002,Uf=3003,Of=3004,Bf=3005,zf=3006,Hf=3200,kf=3201,Ji=0,Gf=1,Js=7680,Vf=519,An=35044,Ea=35048,Cc="300 es";class Zi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const t=this._listeners[e.type];if(t!==void 0){e.target=this;const i=t.slice(0);for(let r=0,n=i.length;r<n;r++)i[r].call(this,e);e.target=null}}}const vt=[];for(let a=0;a<256;a++)vt[a]=(a<16?"0":"")+a.toString(16);let La=1234567;const En=Math.PI/180,Ln=180/Math.PI;function Ht(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(vt[a&255]+vt[a>>8&255]+vt[a>>16&255]+vt[a>>24&255]+"-"+vt[e&255]+vt[e>>8&255]+"-"+vt[e>>16&15|64]+vt[e>>24&255]+"-"+vt[t&63|128]+vt[t>>8&255]+"-"+vt[t>>16&255]+vt[t>>24&255]+vt[i&255]+vt[i>>8&255]+vt[i>>16&255]+vt[i>>24&255]).toUpperCase()}function It(a,e,t){return Math.max(e,Math.min(t,a))}function Zs(a,e){return(a%e+e)%e}function Wf(a,e,t,i,r){return i+(a-e)*(r-i)/(t-e)}function Xf(a,e,t){return a!==e?(t-a)/(e-a):0}function Pn(a,e,t){return(1-t)*a+t*e}function jf(a,e,t,i){return Pn(a,e,1-Math.exp(-t*i))}function Yf(a,e=1){return e-Math.abs(Zs(a,e*2)-e)}function Qf(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*(3-2*a))}function qf(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*a*(a*(a*6-15)+10))}function Jf(a,e){return a+Math.floor(Math.random()*(e-a+1))}function Zf(a,e){return a+Math.random()*(e-a)}function Kf(a){return a*(.5-Math.random())}function $f(a){return a!==void 0&&(La=a%2147483647),La=La*16807%2147483647,(La-1)/2147483646}function em(a){return a*En}function tm(a){return a*Ln}function Ks(a){return(a&a-1)===0&&a!==0}function Rc(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function Ic(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function im(a,e,t,i,r){const n=Math.cos,s=Math.sin,o=n(t/2),l=s(t/2),c=n((e+i)/2),h=s((e+i)/2),u=n((e-i)/2),d=s((e-i)/2),p=n((i-e)/2),m=s((i-e)/2);switch(r){case"XYX":a.set(o*h,l*u,l*d,o*c);break;case"YZY":a.set(l*d,o*h,l*u,o*c);break;case"ZXZ":a.set(l*u,l*d,o*h,o*c);break;case"XZX":a.set(o*h,l*m,l*p,o*c);break;case"YXY":a.set(l*p,o*h,l*m,o*c);break;case"ZYZ":a.set(l*m,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}var Yt=Object.freeze({__proto__:null,DEG2RAD:En,RAD2DEG:Ln,generateUUID:Ht,clamp:It,euclideanModulo:Zs,mapLinear:Wf,inverseLerp:Xf,lerp:Pn,damp:jf,pingpong:Yf,smoothstep:Qf,smootherstep:qf,randInt:Jf,randFloat:Zf,randFloatSpread:Kf,seededRandom:$f,degToRad:em,radToDeg:tm,isPowerOfTwo:Ks,ceilPowerOfTwo:Rc,floorPowerOfTwo:Ic,setQuaternionFromProperEuler:im});class X{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),n=this.x-e.x,s=this.y-e.y;return this.x=n*i-s*r+e.x,this.y=n*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}}X.prototype.isVector2=!0;class dt{constructor(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,i,r,n,s,o,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=n,h[5]=l,h[6]=i,h[7]=s,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,n=this.elements,s=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],p=i[5],m=i[8],v=r[0],_=r[3],g=r[6],f=r[1],x=r[4],S=r[7],w=r[2],y=r[5],M=r[8];return n[0]=s*v+o*f+l*w,n[3]=s*_+o*x+l*y,n[6]=s*g+o*S+l*M,n[1]=c*v+h*f+u*w,n[4]=c*_+h*x+u*y,n[7]=c*g+h*S+u*M,n[2]=d*v+p*f+m*w,n[5]=d*_+p*x+m*y,n[8]=d*g+p*S+m*M,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],n=e[3],s=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*s*h-t*o*c-i*n*h+i*o*l+r*n*c-r*s*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],n=e[3],s=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*s-o*c,d=o*l-h*n,p=c*n-s*l,m=t*u+i*d+r*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/m;return e[0]=u*v,e[1]=(r*c-h*i)*v,e[2]=(o*i-r*s)*v,e[3]=d*v,e[4]=(h*t-r*l)*v,e[5]=(r*n-o*t)*v,e[6]=p*v,e[7]=(i*l-c*t)*v,e[8]=(s*t-i*n)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,n,s,o){const l=Math.cos(n),c=Math.sin(n);return this.set(i*l,i*c,-i*(l*s+c*o)+s+e,-r*c,r*l,-r*(-c*s+l*o)+o+t,0,0,1),this}scale(e,t){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=t,i[4]*=t,i[7]*=t,this}rotate(e){const t=Math.cos(e),i=Math.sin(e),r=this.elements,n=r[0],s=r[3],o=r[6],l=r[1],c=r[4],h=r[7];return r[0]=t*n+i*l,r[3]=t*s+i*c,r[6]=t*o+i*h,r[1]=-i*n+t*l,r[4]=-i*s+t*c,r[7]=-i*o+t*h,this}translate(e,t){const i=this.elements;return i[0]+=e*i[2],i[3]+=e*i[5],i[6]+=e*i[8],i[1]+=t*i[2],i[4]+=t*i[5],i[7]+=t*i[8],this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}dt.prototype.isMatrix3=!0;let Sr;class Mr{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Sr===void 0&&(Sr=document.createElementNS("http://www.w3.org/1999/xhtml","canvas")),Sr.width=e.width,Sr.height=e.height;const i=Sr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Sr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}}let rm=0;class st extends Zi{constructor(e=st.DEFAULT_IMAGE,t=st.DEFAULT_MAPPING,i=St,r=St,n=ut,s=vr,o=Ct,l=ba,c=1,h=Tn){super(),Object.defineProperty(this,"id",{value:rm++}),this.uuid=Ht(),this.name="",this.image=e,this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=r,this.magFilter=n,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new X(0,0),this.repeat=new X(1,1),this.center=new X(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.version=0,this.onUpdate=null}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.image=e.image,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(this.image!==void 0){const r=this.image;if(r.uuid===void 0&&(r.uuid=Ht()),!t&&e.images[r.uuid]===void 0){let n;if(Array.isArray(r)){n=[];for(let s=0,o=r.length;s<o;s++)r[s].isDataTexture?n.push($s(r[s].image)):n.push($s(r[s]))}else n=$s(r);e.images[r.uuid]={uuid:r.uuid,url:n}}i.image=r.uuid}return t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==mc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case at:e.x=e.x-Math.floor(e.x);break;case St:e.x=e.x<0?0:1;break;case wa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case at:e.y=e.y-Math.floor(e.y);break;case St:e.y=e.y<0?0:1;break;case wa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&this.version++}}st.DEFAULT_IMAGE=void 0,st.DEFAULT_MAPPING=mc,st.prototype.isTexture=!0;function $s(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?Mr.getDataURL(a):a.data?{data:Array.prototype.slice.call(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}class Ue{constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,n=this.w,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r+s[12]*n,this.y=s[1]*t+s[5]*i+s[9]*r+s[13]*n,this.z=s[2]*t+s[6]*i+s[10]*r+s[14]*n,this.w=s[3]*t+s[7]*i+s[11]*r+s[15]*n,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,n;const s=e.elements,o=s[0],l=s[4],c=s[8],h=s[1],u=s[5],d=s[9],p=s[2],m=s[6],v=s[10];if(Math.abs(l-h)<.01&&Math.abs(c-p)<.01&&Math.abs(d-m)<.01){if(Math.abs(l+h)<.1&&Math.abs(c+p)<.1&&Math.abs(d+m)<.1&&Math.abs(o+u+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const g=(o+1)/2,f=(u+1)/2,x=(v+1)/2,S=(l+h)/4,w=(c+p)/4,y=(d+m)/4;return g>f&&g>x?g<.01?(i=0,r=.707106781,n=.707106781):(i=Math.sqrt(g),r=S/i,n=w/i):f>x?f<.01?(i=.707106781,r=0,n=.707106781):(r=Math.sqrt(f),i=S/r,n=y/r):x<.01?(i=.707106781,r=.707106781,n=0):(n=Math.sqrt(x),i=w/n,r=y/n),this.set(i,r,n,t),this}let _=Math.sqrt((m-d)*(m-d)+(c-p)*(c-p)+(h-l)*(h-l));return Math.abs(_)<.001&&(_=1),this.x=(m-d)/_,this.y=(c-p)/_,this.z=(h-l)/_,this.w=Math.acos((o+u+v-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}}Ue.prototype.isVector4=!0;class Ft extends Zi{constructor(e,t,i={}){super(),this.width=e,this.height=t,this.depth=1,this.scissor=new Ue(0,0,e,t),this.scissorTest=!1,this.viewport=new Ue(0,0,e,t),this.texture=new st(void 0,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.image={width:e,height:t,depth:1},this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:ut,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null}setTexture(e){e.image={width:this.width,height:this.height,depth:this.depth},this.texture=e}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.image={...this.texture.image},this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}Ft.prototype.isWebGLRenderTarget=!0;class nm extends Ft{constructor(e,t,i){super(e,t);const r=this.texture;this.texture=[];for(let n=0;n<i;n++)this.texture[n]=r.clone()}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,n=this.texture.length;r<n;r++)this.texture[r].image.width=e,this.texture[r].image.height=t,this.texture[r].image.depth=i;this.dispose()}return this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t),this}copy(e){this.dispose(),this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.set(0,0,this.width,this.height),this.scissor.set(0,0,this.width,this.height),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this.texture.length=0;for(let t=0,i=e.texture.length;t<i;t++)this.texture[t]=e.texture[t].clone();return this}}nm.prototype.isWebGLMultipleRenderTargets=!0;class Fc extends Ft{constructor(e,t,i){super(e,t,i),this.samples=4}copy(e){return super.copy.call(this,e),this.samples=e.samples,this}}Fc.prototype.isWebGLMultisampleRenderTarget=!0;class Ge{constructor(e=0,t=0,i=0,r=1){this._x=e,this._y=t,this._z=i,this._w=r}static slerp(e,t,i,r){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),i.slerpQuaternions(e,t,r)}static slerpFlat(e,t,i,r,n,s,o){let l=i[r+0],c=i[r+1],h=i[r+2],u=i[r+3];const d=n[s+0],p=n[s+1],m=n[s+2],v=n[s+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=p,e[t+2]=m,e[t+3]=v;return}if(u!==v||l!==d||c!==p||h!==m){let _=1-o;const g=l*d+c*p+h*m+u*v,f=g>=0?1:-1,x=1-g*g;if(x>Number.EPSILON){const w=Math.sqrt(x),y=Math.atan2(w,g*f);_=Math.sin(_*y)/w,o=Math.sin(o*y)/w}const S=o*f;if(l=l*_+d*S,c=c*_+p*S,h=h*_+m*S,u=u*_+v*S,_===1-o){const w=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=w,c*=w,h*=w,u*=w}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,r,n,s){const o=i[r],l=i[r+1],c=i[r+2],h=i[r+3],u=n[s],d=n[s+1],p=n[s+2],m=n[s+3];return e[t]=o*m+h*u+l*p-c*d,e[t+1]=l*m+h*d+c*u-o*p,e[t+2]=c*m+h*p+o*d-l*u,e[t+3]=h*m-o*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const i=e._x,r=e._y,n=e._z,s=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(r/2),u=o(n/2),d=l(i/2),p=l(r/2),m=l(n/2);switch(s){case"XYZ":this._x=d*h*u+c*p*m,this._y=c*p*u-d*h*m,this._z=c*h*m+d*p*u,this._w=c*h*u-d*p*m;break;case"YXZ":this._x=d*h*u+c*p*m,this._y=c*p*u-d*h*m,this._z=c*h*m-d*p*u,this._w=c*h*u+d*p*m;break;case"ZXY":this._x=d*h*u-c*p*m,this._y=c*p*u+d*h*m,this._z=c*h*m+d*p*u,this._w=c*h*u-d*p*m;break;case"ZYX":this._x=d*h*u-c*p*m,this._y=c*p*u+d*h*m,this._z=c*h*m-d*p*u,this._w=c*h*u+d*p*m;break;case"YZX":this._x=d*h*u+c*p*m,this._y=c*p*u+d*h*m,this._z=c*h*m-d*p*u,this._w=c*h*u-d*p*m;break;case"XZY":this._x=d*h*u-c*p*m,this._y=c*p*u-d*h*m,this._z=c*h*m+d*p*u,this._w=c*h*u+d*p*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],n=t[8],s=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+o+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(n-c)*p,this._z=(s-r)*p}else if(i>o&&i>u){const p=2*Math.sqrt(1+i-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(r+s)/p,this._z=(n+c)/p}else if(o>u){const p=2*Math.sqrt(1+o-i-u);this._w=(n-c)/p,this._x=(r+s)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-i-o);this._w=(s-r)/p,this._x=(n+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(It(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,n=e._z,s=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+s*o+r*c-n*l,this._y=r*h+s*l+n*o-i*c,this._z=n*h+s*c+i*l-r*o,this._w=s*h-i*o-r*l-n*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,n=this._z,s=this._w;let o=s*e._w+i*e._x+r*e._y+n*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=i,this._y=r,this._z=n,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*s+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*n+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=s*u+this._w*d,this._x=i*u+this._x*d,this._y=r*u+this._y*d,this._z=n*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){this.copy(e).slerp(t,i)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}Ge.prototype.isQuaternion=!0;class b{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(Nc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Nc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6]*r,this.y=n[1]*t+n[4]*i+n[7]*r,this.z=n[2]*t+n[5]*i+n[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,n=e.elements,s=1/(n[3]*t+n[7]*i+n[11]*r+n[15]);return this.x=(n[0]*t+n[4]*i+n[8]*r+n[12])*s,this.y=(n[1]*t+n[5]*i+n[9]*r+n[13])*s,this.z=(n[2]*t+n[6]*i+n[10]*r+n[14])*s,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,n=e.x,s=e.y,o=e.z,l=e.w,c=l*t+s*r-o*i,h=l*i+o*t-n*r,u=l*r+n*i-s*t,d=-n*t-s*i-o*r;return this.x=c*l+d*-n+h*-o-u*-s,this.y=h*l+d*-s+u*-n-c*-o,this.z=u*l+d*-o+c*-s-h*-n,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,n=e.elements;return this.x=n[0]*t+n[4]*i+n[8]*r,this.y=n[1]*t+n[5]*i+n[9]*r,this.z=n[2]*t+n[6]*i+n[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,n=e.z,s=t.x,o=t.y,l=t.z;return this.x=r*l-n*o,this.y=n*s-i*l,this.z=i*o-r*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return eo.copy(this).projectOnVector(e),this.sub(eo)}reflect(e){return this.sub(eo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(It(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}}b.prototype.isVector3=!0;const eo=new b,Nc=new Ge;class Dt{constructor(e=new b(1/0,1/0,1/0),t=new b(-1/0,-1/0,-1/0)){this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,r=1/0,n=-1/0,s=-1/0,o=-1/0;for(let l=0,c=e.length;l<c;l+=3){const h=e[l],u=e[l+1],d=e[l+2];h<t&&(t=h),u<i&&(i=u),d<r&&(r=d),h>n&&(n=h),u>s&&(s=u),d>o&&(o=d)}return this.min.set(t,i,r),this.max.set(n,s,o),this}setFromBufferAttribute(e){let t=1/0,i=1/0,r=1/0,n=-1/0,s=-1/0,o=-1/0;for(let l=0,c=e.count;l<c;l++){const h=e.getX(l),u=e.getY(l),d=e.getZ(l);h<t&&(t=h),u<i&&(i=u),d<r&&(r=d),h>n&&(n=h),u>s&&(s=u),d>o&&(o=d)}return this.min.set(t,i,r),this.max.set(n,s,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Cn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e){return this.makeEmpty(),this.expandByObject(e)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e){e.updateWorldMatrix(!1,!1);const t=e.geometry;t!==void 0&&(t.boundingBox===null&&t.computeBoundingBox(),to.copy(t.boundingBox),to.applyMatrix4(e.matrixWorld),this.union(to));const i=e.children;for(let r=0,n=i.length;r<n;r++)this.expandByObject(i[r]);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Cn),Cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Rn),Pa.subVectors(this.max,Rn),Tr.subVectors(e.a,Rn),Ar.subVectors(e.b,Rn),Er.subVectors(e.c,Rn),Ai.subVectors(Ar,Tr),Ei.subVectors(Er,Ar),Ki.subVectors(Tr,Er);let t=[0,-Ai.z,Ai.y,0,-Ei.z,Ei.y,0,-Ki.z,Ki.y,Ai.z,0,-Ai.x,Ei.z,0,-Ei.x,Ki.z,0,-Ki.x,-Ai.y,Ai.x,0,-Ei.y,Ei.x,0,-Ki.y,Ki.x,0];return!io(t,Tr,Ar,Er,Pa)||(t=[1,0,0,0,1,0,0,0,1],!io(t,Tr,Ar,Er,Pa))?!1:(Ca.crossVectors(Ai,Ei),t=[Ca.x,Ca.y,Ca.z],io(t,Tr,Ar,Er,Pa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Cn.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Cn).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ci),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}Dt.prototype.isBox3=!0;const ci=[new b,new b,new b,new b,new b,new b,new b,new b],Cn=new b,to=new Dt,Tr=new b,Ar=new b,Er=new b,Ai=new b,Ei=new b,Ki=new b,Rn=new b,Pa=new b,Ca=new b,$i=new b;function io(a,e,t,i,r){for(let n=0,s=a.length-3;n<=s;n+=3){$i.fromArray(a,n);const o=r.x*Math.abs($i.x)+r.y*Math.abs($i.y)+r.z*Math.abs($i.z),l=e.dot($i),c=t.dot($i),h=i.dot($i);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const am=new Dt,Dc=new b,ro=new b,no=new b;class Li{constructor(e=new b,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):am.setFromPoints(e).getCenter(i);let r=0;for(let n=0,s=e.length;n<s;n++)r=Math.max(r,i.distanceToSquared(e[n]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){no.subVectors(e,this.center);const t=no.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.add(no.multiplyScalar(r/i)),this.radius+=r}return this}union(e){return ro.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(Dc.copy(e.center).add(ro)),this.expandByPoint(Dc.copy(e.center).sub(ro)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const hi=new b,ao=new b,Ra=new b,Pi=new b,so=new b,Ia=new b,oo=new b;class er{constructor(e=new b,t=new b(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=hi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(hi.copy(this.direction).multiplyScalar(t).add(this.origin),hi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){ao.copy(e).add(t).multiplyScalar(.5),Ra.copy(t).sub(e).normalize(),Pi.copy(this.origin).sub(ao);const n=e.distanceTo(t)*.5,s=-this.direction.dot(Ra),o=Pi.dot(this.direction),l=-Pi.dot(Ra),c=Pi.lengthSq(),h=Math.abs(1-s*s);let u,d,p,m;if(h>0)if(u=s*l-o,d=s*o-l,m=n*h,u>=0)if(d>=-m)if(d<=m){const v=1/h;u*=v,d*=v,p=u*(u+s*d+2*o)+d*(s*u+d+2*l)+c}else d=n,u=Math.max(0,-(s*d+o)),p=-u*u+d*(d+2*l)+c;else d=-n,u=Math.max(0,-(s*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-s*n+o)),d=u>0?-n:Math.min(Math.max(-n,-l),n),p=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-n,-l),n),p=d*(d+2*l)+c):(u=Math.max(0,-(s*n+o)),d=u>0?n:Math.min(Math.max(-n,-l),n),p=-u*u+d*(d+2*l)+c);else d=s>0?-n:n,u=Math.max(0,-(s*d+o)),p=-u*u+d*(d+2*l)+c;return i&&i.copy(this.direction).multiplyScalar(u).add(this.origin),r&&r.copy(Ra).multiplyScalar(d).add(ao),p}intersectSphere(e,t){hi.subVectors(e.center,this.origin);const i=hi.dot(this.direction),r=hi.dot(hi)-i*i,n=e.radius*e.radius;if(r>n)return null;const s=Math.sqrt(n-r),o=i-s,l=i+s;return o<0&&l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,n,s,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),h>=0?(n=(e.min.y-d.y)*h,s=(e.max.y-d.y)*h):(n=(e.max.y-d.y)*h,s=(e.min.y-d.y)*h),i>s||n>r||((n>i||i!==i)&&(i=n),(s<r||r!==r)&&(r=s),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,hi)!==null}intersectTriangle(e,t,i,r,n){so.subVectors(t,e),Ia.subVectors(i,e),oo.crossVectors(so,Ia);let s=this.direction.dot(oo),o;if(s>0){if(r)return null;o=1}else if(s<0)o=-1,s=-s;else return null;Pi.subVectors(this.origin,e);const l=o*this.direction.dot(Ia.crossVectors(Pi,Ia));if(l<0)return null;const c=o*this.direction.dot(so.cross(Pi));if(c<0||l+c>s)return null;const h=-o*Pi.dot(oo);return h<0?null:this.at(h/s,n)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ee{constructor(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,i,r,n,s,o,l,c,h,u,d,p,m,v,_){const g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=r,g[1]=n,g[5]=s,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=d,g[3]=p,g[7]=m,g[11]=v,g[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ee().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Lr.setFromMatrixColumn(e,0).length(),n=1/Lr.setFromMatrixColumn(e,1).length(),s=1/Lr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*n,t[5]=i[5]*n,t[6]=i[6]*n,t[7]=0,t[8]=i[8]*s,t[9]=i[9]*s,t[10]=i[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const t=this.elements,i=e.x,r=e.y,n=e.z,s=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(n),u=Math.sin(n);if(e.order==="XYZ"){const d=s*h,p=s*u,m=o*h,v=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+m*c,t[5]=d-v*c,t[9]=-o*l,t[2]=v-d*c,t[6]=m+p*c,t[10]=s*l}else if(e.order==="YXZ"){const d=l*h,p=l*u,m=c*h,v=c*u;t[0]=d+v*o,t[4]=m*o-p,t[8]=s*c,t[1]=s*u,t[5]=s*h,t[9]=-o,t[2]=p*o-m,t[6]=v+d*o,t[10]=s*l}else if(e.order==="ZXY"){const d=l*h,p=l*u,m=c*h,v=c*u;t[0]=d-v*o,t[4]=-s*u,t[8]=m+p*o,t[1]=p+m*o,t[5]=s*h,t[9]=v-d*o,t[2]=-s*c,t[6]=o,t[10]=s*l}else if(e.order==="ZYX"){const d=s*h,p=s*u,m=o*h,v=o*u;t[0]=l*h,t[4]=m*c-p,t[8]=d*c+v,t[1]=l*u,t[5]=v*c+d,t[9]=p*c-m,t[2]=-c,t[6]=o*l,t[10]=s*l}else if(e.order==="YZX"){const d=s*l,p=s*c,m=o*l,v=o*c;t[0]=l*h,t[4]=v-d*u,t[8]=m*u+p,t[1]=u,t[5]=s*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*u+m,t[10]=d-v*u}else if(e.order==="XZY"){const d=s*l,p=s*c,m=o*l,v=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+v,t[5]=s*h,t[9]=p*u-m,t[2]=m*u-p,t[6]=o*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(sm,e,om)}lookAt(e,t,i){const r=this.elements;return Ut.subVectors(e,t),Ut.lengthSq()===0&&(Ut.z=1),Ut.normalize(),Ci.crossVectors(i,Ut),Ci.lengthSq()===0&&(Math.abs(i.z)===1?Ut.x+=1e-4:Ut.z+=1e-4,Ut.normalize(),Ci.crossVectors(i,Ut)),Ci.normalize(),Fa.crossVectors(Ut,Ci),r[0]=Ci.x,r[4]=Fa.x,r[8]=Ut.x,r[1]=Ci.y,r[5]=Fa.y,r[9]=Ut.y,r[2]=Ci.z,r[6]=Fa.z,r[10]=Ut.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,n=this.elements,s=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],p=i[13],m=i[2],v=i[6],_=i[10],g=i[14],f=i[3],x=i[7],S=i[11],w=i[15],y=r[0],M=r[4],L=r[8],N=r[12],R=r[1],z=r[5],H=r[9],I=r[13],F=r[2],P=r[6],C=r[10],O=r[14],Y=r[3],G=r[7],ie=r[11],te=r[15];return n[0]=s*y+o*R+l*F+c*Y,n[4]=s*M+o*z+l*P+c*G,n[8]=s*L+o*H+l*C+c*ie,n[12]=s*N+o*I+l*O+c*te,n[1]=h*y+u*R+d*F+p*Y,n[5]=h*M+u*z+d*P+p*G,n[9]=h*L+u*H+d*C+p*ie,n[13]=h*N+u*I+d*O+p*te,n[2]=m*y+v*R+_*F+g*Y,n[6]=m*M+v*z+_*P+g*G,n[10]=m*L+v*H+_*C+g*ie,n[14]=m*N+v*I+_*O+g*te,n[3]=f*y+x*R+S*F+w*Y,n[7]=f*M+x*z+S*P+w*G,n[11]=f*L+x*H+S*C+w*ie,n[15]=f*N+x*I+S*O+w*te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],n=e[12],s=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14],m=e[3],v=e[7],_=e[11],g=e[15];return m*(+n*l*u-r*c*u-n*o*d+i*c*d+r*o*p-i*l*p)+v*(+t*l*p-t*c*d+n*s*d-r*s*p+r*c*h-n*l*h)+_*(+t*c*u-t*o*p-n*s*u+i*s*p+n*o*h-i*c*h)+g*(-r*o*h-t*l*u+t*o*d+r*s*u-i*s*d+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],n=e[3],s=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],m=e[12],v=e[13],_=e[14],g=e[15],f=u*_*c-v*d*c+v*l*p-o*_*p-u*l*g+o*d*g,x=m*d*c-h*_*c-m*l*p+s*_*p+h*l*g-s*d*g,S=h*v*c-m*u*c+m*o*p-s*v*p-h*o*g+s*u*g,w=m*u*l-h*v*l-m*o*d+s*v*d+h*o*_-s*u*_,y=t*f+i*x+r*S+n*w;if(y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const M=1/y;return e[0]=f*M,e[1]=(v*d*n-u*_*n-v*r*p+i*_*p+u*r*g-i*d*g)*M,e[2]=(o*_*n-v*l*n+v*r*c-i*_*c-o*r*g+i*l*g)*M,e[3]=(u*l*n-o*d*n-u*r*c+i*d*c+o*r*p-i*l*p)*M,e[4]=x*M,e[5]=(h*_*n-m*d*n+m*r*p-t*_*p-h*r*g+t*d*g)*M,e[6]=(m*l*n-s*_*n-m*r*c+t*_*c+s*r*g-t*l*g)*M,e[7]=(s*d*n-h*l*n+h*r*c-t*d*c-s*r*p+t*l*p)*M,e[8]=S*M,e[9]=(m*u*n-h*v*n-m*i*p+t*v*p+h*i*g-t*u*g)*M,e[10]=(s*v*n-m*o*n+m*i*c-t*v*c-s*i*g+t*o*g)*M,e[11]=(h*o*n-s*u*n-h*i*c+t*u*c+s*i*p-t*o*p)*M,e[12]=w*M,e[13]=(h*v*r-m*u*r+m*i*d-t*v*d-h*i*_+t*u*_)*M,e[14]=(m*o*r-s*v*r-m*i*l+t*v*l+s*i*_-t*o*_)*M,e[15]=(s*u*r-h*o*r+h*i*l-t*u*l-s*i*d+t*o*d)*M,this}scale(e){const t=this.elements,i=e.x,r=e.y,n=e.z;return t[0]*=i,t[4]*=r,t[8]*=n,t[1]*=i,t[5]*=r,t[9]*=n,t[2]*=i,t[6]*=r,t[10]*=n,t[3]*=i,t[7]*=r,t[11]*=n,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),n=1-i,s=e.x,o=e.y,l=e.z,c=n*s,h=n*o;return this.set(c*s+i,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+i,h*l-r*s,0,c*l-r*o,h*l+r*s,n*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,n,s){return this.set(1,i,n,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,n=t._x,s=t._y,o=t._z,l=t._w,c=n+n,h=s+s,u=o+o,d=n*c,p=n*h,m=n*u,v=s*h,_=s*u,g=o*u,f=l*c,x=l*h,S=l*u,w=i.x,y=i.y,M=i.z;return r[0]=(1-(v+g))*w,r[1]=(p+S)*w,r[2]=(m-x)*w,r[3]=0,r[4]=(p-S)*y,r[5]=(1-(d+g))*y,r[6]=(_+f)*y,r[7]=0,r[8]=(m+x)*M,r[9]=(_-f)*M,r[10]=(1-(d+v))*M,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let n=Lr.set(r[0],r[1],r[2]).length();const s=Lr.set(r[4],r[5],r[6]).length(),o=Lr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(n=-n),e.x=r[12],e.y=r[13],e.z=r[14],Qt.copy(this);const l=1/n,c=1/s,h=1/o;return Qt.elements[0]*=l,Qt.elements[1]*=l,Qt.elements[2]*=l,Qt.elements[4]*=c,Qt.elements[5]*=c,Qt.elements[6]*=c,Qt.elements[8]*=h,Qt.elements[9]*=h,Qt.elements[10]*=h,t.setFromRotationMatrix(Qt),i.x=n,i.y=s,i.z=o,this}makePerspective(e,t,i,r,n,s){s===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const o=this.elements,l=2*n/(t-e),c=2*n/(i-r),h=(t+e)/(t-e),u=(i+r)/(i-r),d=-(s+n)/(s-n),p=-2*s*n/(s-n);return o[0]=l,o[4]=0,o[8]=h,o[12]=0,o[1]=0,o[5]=c,o[9]=u,o[13]=0,o[2]=0,o[6]=0,o[10]=d,o[14]=p,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,i,r,n,s){const o=this.elements,l=1/(t-e),c=1/(i-r),h=1/(s-n),u=(t+e)*l,d=(i+r)*c,p=(s+n)*h;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-u,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-d,o[2]=0,o[6]=0,o[10]=-2*h,o[14]=-p,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}ee.prototype.isMatrix4=!0;const Lr=new b,Qt=new ee,sm=new b(0,0,0),om=new b(1,1,1),Ci=new b,Fa=new b,Ut=new b,Uc=new ee,Oc=new Ge;class zt{constructor(e=0,t=0,i=0,r=zt.DefaultOrder){this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,n=r[0],s=r[4],o=r[8],l=r[1],c=r[5],h=r[9],u=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(It(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-s,n)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-It(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,n),this._z=0);break;case"ZXY":this._x=Math.asin(It(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,n));break;case"ZYX":this._y=Math.asin(-It(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,n)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(It(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,n)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-It(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,n)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Uc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Uc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Oc.setFromEuler(this),this.setFromQuaternion(Oc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}toVector3(e){return e?e.set(this._x,this._y,this._z):new b(this._x,this._y,this._z)}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}zt.prototype.isEuler=!0,zt.DefaultOrder="XYZ",zt.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class lm{constructor(){this.mask=1}set(e){this.mask=1<<e|0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}}let cm=0;const Bc=new b,Pr=new Ge,ui=new ee,Na=new b,In=new b,hm=new b,um=new Ge,zc=new b(1,0,0),Hc=new b(0,1,0),kc=new b(0,0,1),dm={type:"added"},Gc={type:"removed"};class Ie extends Zi{constructor(){super(),Object.defineProperty(this,"id",{value:cm++}),this.uuid=Ht(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ie.DefaultUp.clone();const e=new b,t=new zt,i=new Ge,r=new b(1,1,1);function n(){i.setFromEuler(t,!1)}function s(){t.setFromQuaternion(i,void 0,!1)}t._onChange(n),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ee},normalMatrix:{value:new dt}}),this.matrix=new ee,this.matrixWorld=new ee,this.matrixAutoUpdate=Ie.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new lm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Pr.setFromAxisAngle(e,t),this.quaternion.multiply(Pr),this}rotateOnWorldAxis(e,t){return Pr.setFromAxisAngle(e,t),this.quaternion.premultiply(Pr),this}rotateX(e){return this.rotateOnAxis(zc,e)}rotateY(e){return this.rotateOnAxis(Hc,e)}rotateZ(e){return this.rotateOnAxis(kc,e)}translateOnAxis(e,t){return Bc.copy(e).applyQuaternion(this.quaternion),this.position.add(Bc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(zc,e)}translateY(e){return this.translateOnAxis(Hc,e)}translateZ(e){return this.translateOnAxis(kc,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(ui.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Na.copy(e):Na.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),In.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ui.lookAt(In,Na,this.up):ui.lookAt(Na,In,this.up),this.quaternion.setFromRotationMatrix(ui),r&&(ui.extractRotation(r.matrixWorld),Pr.setFromRotationMatrix(ui),this.quaternion.premultiply(Pr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(dm)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Gc)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Gc)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(ui),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const n=this.children[i].getObjectByProperty(e,t);if(n!==void 0)return n}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(In,e,hm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(In,um,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let n=0,s=r.length;n<s;n++)r[n].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function n(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=n(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];n(e.shapes,u)}else n(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(n(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(n(e.materials,this.material[l]));r.material=o}else r.material=n(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(n(e.animations,l))}}if(t){const o=s(e.geometries),l=s(e.materials),c=s(e.textures),h=s(e.images),u=s(e.shapes),d=s(e.skeletons),p=s(e.animations);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p)}return i.object=r,i;function s(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ie.DefaultUp=new b(0,1,0),Ie.DefaultMatrixAutoUpdate=!0,Ie.prototype.isObject3D=!0;const qt=new b,di=new b,lo=new b,pi=new b,Cr=new b,Rr=new b,Vc=new b,co=new b,ho=new b,uo=new b;class ht{constructor(e=new b,t=new b,i=new b){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),qt.subVectors(e,t),r.cross(qt);const n=r.lengthSq();return n>0?r.multiplyScalar(1/Math.sqrt(n)):r.set(0,0,0)}static getBarycoord(e,t,i,r,n){qt.subVectors(r,t),di.subVectors(i,t),lo.subVectors(e,t);const s=qt.dot(qt),o=qt.dot(di),l=qt.dot(lo),c=di.dot(di),h=di.dot(lo),u=s*c-o*o;if(u===0)return n.set(-2,-1,-1);const d=1/u,p=(c*l-o*h)*d,m=(s*h-o*l)*d;return n.set(1-p-m,m,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,pi),pi.x>=0&&pi.y>=0&&pi.x+pi.y<=1}static getUV(e,t,i,r,n,s,o,l){return this.getBarycoord(e,t,i,r,pi),l.set(0,0),l.addScaledVector(n,pi.x),l.addScaledVector(s,pi.y),l.addScaledVector(o,pi.z),l}static isFrontFacing(e,t,i,r){return qt.subVectors(i,t),di.subVectors(e,t),qt.cross(di).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qt.subVectors(this.c,this.b),di.subVectors(this.a,this.b),qt.cross(di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ht.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ht.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,n){return ht.getUV(e,this.a,this.b,this.c,t,i,r,n)}containsPoint(e){return ht.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ht.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,n=this.c;let s,o;Cr.subVectors(r,i),Rr.subVectors(n,i),co.subVectors(e,i);const l=Cr.dot(co),c=Rr.dot(co);if(l<=0&&c<=0)return t.copy(i);ho.subVectors(e,r);const h=Cr.dot(ho),u=Rr.dot(ho);if(h>=0&&u<=h)return t.copy(r);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return s=l/(l-h),t.copy(i).addScaledVector(Cr,s);uo.subVectors(e,n);const p=Cr.dot(uo),m=Rr.dot(uo);if(m>=0&&p<=m)return t.copy(n);const v=p*c-l*m;if(v<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(i).addScaledVector(Rr,o);const _=h*m-p*u;if(_<=0&&u-h>=0&&p-m>=0)return Vc.subVectors(n,r),o=(u-h)/(u-h+(p-m)),t.copy(r).addScaledVector(Vc,o);const g=1/(_+v+d);return s=v*g,o=d*g,t.copy(i).addScaledVector(Cr,s).addScaledVector(Rr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let pm=0;class pt extends Zi{constructor(){super(),Object.defineProperty(this,"id",{value:pm++}),this.uuid=Ht(),this.name="",this.type="Material",this.fog=!0,this.blending=mr,this.side=fr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=pc,this.blendDst=fc,this.blendEquation=qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Js,this.stencilZFail=Js,this.stencilZPass=Js,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaTest=0,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0}onBuild(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=i===oc;continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen&&this.sheen.isColor&&(i.sheen=this.sheen.getHex()),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==mr&&(i.blending=this.blending),this.side!==fr&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.morphTargets===!0&&(i.morphTargets=!0),this.morphNormals===!0&&(i.morphNormals=!0),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData);function r(n){const s=[];for(const o in n){const l=n[o];delete l.metadata,s.push(l)}return s}if(t){const n=r(e.textures),s=r(e.images);n.length>0&&(i.textures=n),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.fog=e.fog,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let n=0;n!==r;++n)i[n]=t[n].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}pt.prototype.isMaterial=!0;const Wc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Jt={h:0,s:0,l:0},Da={h:0,s:0,l:0};function po(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}function fo(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function mo(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}class Z{constructor(e,t,i){return t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,this}setRGB(e,t,i){return this.r=e,this.g=t,this.b=i,this}setHSL(e,t,i){if(e=Zs(e,1),t=It(t,0,1),i=It(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,n=2*i-r;this.r=po(n,r,e+1/3),this.g=po(n,r,e),this.b=po(n,r,e-1/3)}return this}setStyle(e){function t(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r;const n=i[1],s=i[2];switch(n){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,t(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,t(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s)){const o=parseFloat(r[1])/360,l=parseInt(r[2],10)/100,c=parseInt(r[3],10)/100;return t(r[4]),this.setHSL(o,l,c)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],n=r.length;if(n===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,this;if(n===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,this}return e&&e.length>0?this.setColorName(e):this}setColorName(e){const t=Wc[e.toLowerCase()];return t!==void 0?this.setHex(t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copyGammaToLinear(e,t=2){return this.r=Math.pow(e.r,t),this.g=Math.pow(e.g,t),this.b=Math.pow(e.b,t),this}copyLinearToGamma(e,t=2){const i=t>0?1/t:1;return this.r=Math.pow(e.r,i),this.g=Math.pow(e.g,i),this.b=Math.pow(e.b,i),this}convertGammaToLinear(e){return this.copyGammaToLinear(this,e),this}convertLinearToGamma(e){return this.copyLinearToGamma(this,e),this}copySRGBToLinear(e){return this.r=fo(e.r),this.g=fo(e.g),this.b=fo(e.b),this}copyLinearToSRGB(e){return this.r=mo(e.r),this.g=mo(e.g),this.b=mo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(){return this.r*255<<16^this.g*255<<8^this.b*255<<0}getHexString(){return("000000"+this.getHex().toString(16)).slice(-6)}getHSL(e){const t=this.r,i=this.g,r=this.b,n=Math.max(t,i,r),s=Math.min(t,i,r);let o,l;const c=(s+n)/2;if(s===n)o=0,l=0;else{const h=n-s;switch(l=c<=.5?h/(n+s):h/(2-n-s),n){case t:o=(i-r)/h+(i<r?6:0);break;case i:o=(r-t)/h+2;break;case r:o=(t-i)/h+4;break}o/=6}return e.h=o,e.s=l,e.l=c,e}getStyle(){return"rgb("+(this.r*255|0)+","+(this.g*255|0)+","+(this.b*255|0)+")"}offsetHSL(e,t,i){return this.getHSL(Jt),Jt.h+=e,Jt.s+=t,Jt.l+=i,this.setHSL(Jt.h,Jt.s,Jt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Jt),e.getHSL(Da);const i=Pn(Jt.h,Da.h,t),r=Pn(Jt.s,Da.s,t),n=Pn(Jt.l,Da.l,t);return this.setHSL(i,r,n),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}}Z.NAMES=Wc,Z.prototype.isColor=!0,Z.prototype.r=1,Z.prototype.g=1,Z.prototype.b=1;class Zt extends pt{constructor(e){super(),this.type="MeshBasicMaterial",this.color=new Z(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ya,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.morphTargets=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.morphTargets=e.morphTargets,this}}Zt.prototype.isMeshBasicMaterial=!0;const We=new b,Ua=new X;class Ke{constructor(e,t,i){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i===!0,this.usage=An,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,n=this.itemSize;r<n;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let i=0;for(let r=0,n=e.length;r<n;r++){let s=e[r];s===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",r),s=new Z),t[i++]=s.r,t[i++]=s.g,t[i++]=s.b}return this}copyVector2sArray(e){const t=this.array;let i=0;for(let r=0,n=e.length;r<n;r++){let s=e[r];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",r),s=new X),t[i++]=s.x,t[i++]=s.y}return this}copyVector3sArray(e){const t=this.array;let i=0;for(let r=0,n=e.length;r<n;r++){let s=e[r];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",r),s=new b),t[i++]=s.x,t[i++]=s.y,t[i++]=s.z}return this}copyVector4sArray(e){const t=this.array;let i=0;for(let r=0,n=e.length;r<n;r++){let s=e[r];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",r),s=new Ue),t[i++]=s.x,t[i++]=s.y,t[i++]=s.z,t[i++]=s.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ua.fromBufferAttribute(this,t),Ua.applyMatrix3(e),this.setXY(t,Ua.x,Ua.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)We.fromBufferAttribute(this,t),We.applyMatrix3(e),this.setXYZ(t,We.x,We.y,We.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)We.x=this.getX(t),We.y=this.getY(t),We.z=this.getZ(t),We.applyMatrix4(e),this.setXYZ(t,We.x,We.y,We.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)We.x=this.getX(t),We.y=this.getY(t),We.z=this.getZ(t),We.applyNormalMatrix(e),this.setXYZ(t,We.x,We.y,We.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)We.x=this.getX(t),We.y=this.getY(t),We.z=this.getZ(t),We.transformDirection(e),this.setXYZ(t,We.x,We.y,We.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=n,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==An&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}Ke.prototype.isBufferAttribute=!0;class go extends Ke{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Xc extends Ke{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class fm extends Ke{constructor(e,t,i){super(new Uint16Array(e),t,i)}}fm.prototype.isFloat16BufferAttribute=!0;class be extends Ke{constructor(e,t,i){super(new Float32Array(e),t,i)}}function jc(a){if(a.length===0)return-1/0;let e=a[0];for(let t=1,i=a.length;t<i;++t)a[t]>e&&(e=a[t]);return e}let mm=0;const kt=new ee,vo=new Ie,Ir=new b,Ot=new Dt,Fn=new Dt,ft=new b;class Fe extends Zi{constructor(){super(),Object.defineProperty(this,"id",{value:mm++}),this.uuid=Ht(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jc(e)>65535?Xc:go)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const n=new dt().getNormalMatrix(e);i.applyNormalMatrix(n),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return kt.makeRotationFromQuaternion(e),this.applyMatrix4(kt),this}rotateX(e){return kt.makeRotationX(e),this.applyMatrix4(kt),this}rotateY(e){return kt.makeRotationY(e),this.applyMatrix4(kt),this}rotateZ(e){return kt.makeRotationZ(e),this.applyMatrix4(kt),this}translate(e,t,i){return kt.makeTranslation(e,t,i),this.applyMatrix4(kt),this}scale(e,t,i){return kt.makeScale(e,t,i),this.applyMatrix4(kt),this}lookAt(e){return vo.lookAt(e),vo.updateMatrix(),this.applyMatrix4(vo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ir).negate(),this.translate(Ir.x,Ir.y,Ir.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const n=e[i];t.push(n.x,n.y,n.z||0)}return this.setAttribute("position",new be(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Dt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new b(-1/0,-1/0,-1/0),new b(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const n=t[i];Ot.setFromBufferAttribute(n),this.morphTargetsRelative?(ft.addVectors(this.boundingBox.min,Ot.min),this.boundingBox.expandByPoint(ft),ft.addVectors(this.boundingBox.max,Ot.max),this.boundingBox.expandByPoint(ft)):(this.boundingBox.expandByPoint(Ot.min),this.boundingBox.expandByPoint(Ot.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Li);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new b,1/0);return}if(e){const i=this.boundingSphere.center;if(Ot.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const o=t[n];Fn.setFromBufferAttribute(o),this.morphTargetsRelative?(ft.addVectors(Ot.min,Fn.min),Ot.expandByPoint(ft),ft.addVectors(Ot.max,Fn.max),Ot.expandByPoint(ft)):(Ot.expandByPoint(Fn.min),Ot.expandByPoint(Fn.max))}Ot.getCenter(i);let r=0;for(let n=0,s=e.count;n<s;n++)ft.fromBufferAttribute(e,n),r=Math.max(r,i.distanceToSquared(ft));if(t)for(let n=0,s=t.length;n<s;n++){const o=t[n],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)ft.fromBufferAttribute(o,c),l&&(Ir.fromBufferAttribute(e,c),ft.add(Ir)),r=Math.max(r,i.distanceToSquared(ft))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeFaceNormals(){}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,n=t.normal.array,s=t.uv.array,o=r.length/3;t.tangent===void 0&&this.setAttribute("tangent",new Ke(new Float32Array(4*o),4));const l=t.tangent.array,c=[],h=[];for(let R=0;R<o;R++)c[R]=new b,h[R]=new b;const u=new b,d=new b,p=new b,m=new X,v=new X,_=new X,g=new b,f=new b;function x(R,z,H){u.fromArray(r,R*3),d.fromArray(r,z*3),p.fromArray(r,H*3),m.fromArray(s,R*2),v.fromArray(s,z*2),_.fromArray(s,H*2),d.sub(u),p.sub(u),v.sub(m),_.sub(m);const I=1/(v.x*_.y-_.x*v.y);isFinite(I)&&(g.copy(d).multiplyScalar(_.y).addScaledVector(p,-v.y).multiplyScalar(I),f.copy(p).multiplyScalar(v.x).addScaledVector(d,-_.x).multiplyScalar(I),c[R].add(g),c[z].add(g),c[H].add(g),h[R].add(f),h[z].add(f),h[H].add(f))}let S=this.groups;S.length===0&&(S=[{start:0,count:i.length}]);for(let R=0,z=S.length;R<z;++R){const H=S[R],I=H.start,F=H.count;for(let P=I,C=I+F;P<C;P+=3)x(i[P+0],i[P+1],i[P+2])}const w=new b,y=new b,M=new b,L=new b;function N(R){M.fromArray(n,R*3),L.copy(M);const z=c[R];w.copy(z),w.sub(M.multiplyScalar(M.dot(z))).normalize(),y.crossVectors(L,z);const H=y.dot(h[R])<0?-1:1;l[R*4]=w.x,l[R*4+1]=w.y,l[R*4+2]=w.z,l[R*4+3]=H}for(let R=0,z=S.length;R<z;++R){const H=S[R],I=H.start,F=H.count;for(let P=I,C=I+F;P<C;P+=3)N(i[P+0]),N(i[P+1]),N(i[P+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ke(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new b,n=new b,s=new b,o=new b,l=new b,c=new b,h=new b,u=new b;if(e)for(let d=0,p=e.count;d<p;d+=3){const m=e.getX(d+0),v=e.getX(d+1),_=e.getX(d+2);r.fromBufferAttribute(t,m),n.fromBufferAttribute(t,v),s.fromBufferAttribute(t,_),h.subVectors(s,n),u.subVectors(r,n),h.cross(u),o.fromBufferAttribute(i,m),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,_),o.add(h),l.add(h),c.add(h),i.setXYZ(m,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(_,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),n.fromBufferAttribute(t,d+1),s.fromBufferAttribute(t,d+2),h.subVectors(s,n),u.subVectors(r,n),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const i=this.attributes;for(const r in i){if(e.attributes[r]===void 0)continue;const n=i[r].array,s=e.attributes[r],o=s.array,l=s.itemSize*t,c=Math.min(o.length,n.length-l);for(let h=0,u=l;h<c;h++,u++)n[u]=o[h]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)ft.fromBufferAttribute(e,t),ft.normalize(),e.setXYZ(t,ft.x,ft.y,ft.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let p=0,m=0;for(let v=0,_=l.length;v<_;v++){o.isInterleavedBufferAttribute?p=l[v]*o.data.stride+o.offset:p=l[v]*h;for(let g=0;g<h;g++)d[m++]=c[p++]}return new Ke(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Fe,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const n=this.morphAttributes;for(const o in n){const l=[],c=n[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],p=e(d,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let n=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(r[l]=h,n=!0)}n&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new Fe().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(t))}const n=e.morphAttributes;for(const c in n){const h=[],u=n[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,h=s.length;c<h;c++){const u=s[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}Fe.prototype.isBufferGeometry=!0;const Yc=new ee,Fr=new er,_o=new Li,Ri=new b,Ii=new b,Fi=new b,xo=new b,yo=new b,wo=new b,Oa=new b,Ba=new b,za=new b,Ha=new X,ka=new X,Ga=new X,bo=new b,Va=new b;class qe extends Ie{constructor(e=new Fe,t=new Zt){super(),this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,s=r.length;n<s;n++){const o=r[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=n}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}raycast(e,t){const i=this.geometry,r=this.material,n=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),_o.copy(i.boundingSphere),_o.applyMatrix4(n),e.ray.intersectsSphere(_o)===!1)||(Yc.copy(n).invert(),Fr.copy(e.ray).applyMatrix4(Yc),i.boundingBox!==null&&Fr.intersectsBox(i.boundingBox)===!1))return;let s;if(i.isBufferGeometry){const o=i.index,l=i.attributes.position,c=i.morphAttributes.position,h=i.morphTargetsRelative,u=i.attributes.uv,d=i.attributes.uv2,p=i.groups,m=i.drawRange;if(o!==null)if(Array.isArray(r))for(let v=0,_=p.length;v<_;v++){const g=p[v],f=r[g.materialIndex],x=Math.max(g.start,m.start),S=Math.min(g.start+g.count,m.start+m.count);for(let w=x,y=S;w<y;w+=3){const M=o.getX(w),L=o.getX(w+1),N=o.getX(w+2);s=Wa(this,f,e,Fr,l,c,h,u,d,M,L,N),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const v=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let g=v,f=_;g<f;g+=3){const x=o.getX(g),S=o.getX(g+1),w=o.getX(g+2);s=Wa(this,r,e,Fr,l,c,h,u,d,x,S,w),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let v=0,_=p.length;v<_;v++){const g=p[v],f=r[g.materialIndex],x=Math.max(g.start,m.start),S=Math.min(g.start+g.count,m.start+m.count);for(let w=x,y=S;w<y;w+=3){const M=w,L=w+1,N=w+2;s=Wa(this,f,e,Fr,l,c,h,u,d,M,L,N),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const v=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let g=v,f=_;g<f;g+=3){const x=g,S=g+1,w=g+2;s=Wa(this,r,e,Fr,l,c,h,u,d,x,S,w),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}else i.isGeometry&&console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}qe.prototype.isMesh=!0;function gm(a,e,t,i,r,n,s,o){let l;if(e.side===nt?l=i.intersectTriangle(s,n,r,!0,o):l=i.intersectTriangle(r,n,s,e.side!==Mi,o),l===null)return null;Va.copy(o),Va.applyMatrix4(a.matrixWorld);const c=t.ray.origin.distanceTo(Va);return c<t.near||c>t.far?null:{distance:c,point:Va.clone(),object:a}}function Wa(a,e,t,i,r,n,s,o,l,c,h,u){Ri.fromBufferAttribute(r,c),Ii.fromBufferAttribute(r,h),Fi.fromBufferAttribute(r,u);const d=a.morphTargetInfluences;if(e.morphTargets&&n&&d){Oa.set(0,0,0),Ba.set(0,0,0),za.set(0,0,0);for(let m=0,v=n.length;m<v;m++){const _=d[m],g=n[m];_!==0&&(xo.fromBufferAttribute(g,c),yo.fromBufferAttribute(g,h),wo.fromBufferAttribute(g,u),s?(Oa.addScaledVector(xo,_),Ba.addScaledVector(yo,_),za.addScaledVector(wo,_)):(Oa.addScaledVector(xo.sub(Ri),_),Ba.addScaledVector(yo.sub(Ii),_),za.addScaledVector(wo.sub(Fi),_)))}Ri.add(Oa),Ii.add(Ba),Fi.add(za)}a.isSkinnedMesh&&(a.boneTransform(c,Ri),a.boneTransform(h,Ii),a.boneTransform(u,Fi));const p=gm(a,e,t,i,Ri,Ii,Fi,bo);if(p){o&&(Ha.fromBufferAttribute(o,c),ka.fromBufferAttribute(o,h),Ga.fromBufferAttribute(o,u),p.uv=ht.getUV(bo,Ri,Ii,Fi,Ha,ka,Ga,new X)),l&&(Ha.fromBufferAttribute(l,c),ka.fromBufferAttribute(l,h),Ga.fromBufferAttribute(l,u),p.uv2=ht.getUV(bo,Ri,Ii,Fi,Ha,ka,Ga,new X));const m={a:c,b:h,c:u,normal:new b,materialIndex:0};ht.getNormal(Ri,Ii,Fi,m.normal),p.face=m}return p}class bi extends Fe{constructor(e=1,t=1,i=1,r=1,n=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:n,depthSegments:s};const o=this;r=Math.floor(r),n=Math.floor(n),s=Math.floor(s);const l=[],c=[],h=[],u=[];let d=0,p=0;m("z","y","x",-1,-1,i,t,e,s,n,0),m("z","y","x",1,-1,i,t,-e,s,n,1),m("x","z","y",1,1,e,i,t,r,s,2),m("x","z","y",1,-1,e,i,-t,r,s,3),m("x","y","z",1,-1,e,t,i,r,n,4),m("x","y","z",-1,-1,e,t,-i,r,n,5),this.setIndex(l),this.setAttribute("position",new be(c,3)),this.setAttribute("normal",new be(h,3)),this.setAttribute("uv",new be(u,2));function m(v,_,g,f,x,S,w,y,M,L,N){const R=S/M,z=w/L,H=S/2,I=w/2,F=y/2,P=M+1,C=L+1;let O=0,Y=0;const G=new b;for(let ie=0;ie<C;ie++){const te=ie*z-I;for(let pe=0;pe<P;pe++){const he=pe*R-H;G[v]=he*f,G[_]=te*x,G[g]=F,c.push(G.x,G.y,G.z),G[v]=0,G[_]=0,G[g]=y>0?1:-1,h.push(G.x,G.y,G.z),u.push(pe/M),u.push(1-ie/L),O+=1}}for(let ie=0;ie<L;ie++)for(let te=0;te<M;te++){const pe=d+te+P*ie,he=d+te+P*(ie+1),_e=d+(te+1)+P*(ie+1),ce=d+(te+1)+P*ie;l.push(pe,he,ce),l.push(he,_e,ce),Y+=6}o.addGroup(p,Y,N),p+=Y,d+=O}}static fromJSON(e){return new bi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Nr(a){const e={};for(const t in a){e[t]={};for(const i in a[t]){const r=a[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Mt(a){const e={};for(let t=0;t<a.length;t++){const i=Nr(a[t]);for(const r in i)e[r]=i[r]}return e}const Xa={clone:Nr,merge:Mt};var vm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_m=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class mt extends pt{constructor(e){super(),this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=vm,this.fragmentShader=_m,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.morphTargets=!1,this.morphNormals=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Nr(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.lights=e.lights,this.clipping=e.clipping,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const n=this.uniforms[r].value;n&&n.isTexture?t.uniforms[r]={type:"t",value:n.toJSON(e).uuid}:n&&n.isColor?t.uniforms[r]={type:"c",value:n.getHex()}:n&&n.isVector2?t.uniforms[r]={type:"v2",value:n.toArray()}:n&&n.isVector3?t.uniforms[r]={type:"v3",value:n.toArray()}:n&&n.isVector4?t.uniforms[r]={type:"v4",value:n.toArray()}:n&&n.isMatrix3?t.uniforms[r]={type:"m3",value:n.toArray()}:n&&n.isMatrix4?t.uniforms[r]={type:"m4",value:n.toArray()}:t.uniforms[r]={value:n}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}mt.prototype.isShaderMaterial=!0;class So extends Ie{constructor(){super(),this.type="Camera",this.matrixWorldInverse=new ee,this.projectionMatrix=new ee,this.projectionMatrixInverse=new ee}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}So.prototype.isCamera=!0;class _t extends So{constructor(e=50,t=1,i=.1,r=2e3){super(),this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ln*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(En*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ln*2*Math.atan(Math.tan(En*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,n,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=n,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(En*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,n=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;n+=s.offsetX*r/l,t-=s.offsetY*i/c,r*=s.width/l,i*=s.height/c}const o=this.filmOffset;o!==0&&(n+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(n,n+r,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}_t.prototype.isPerspectiveCamera=!0;const Dr=90,Ur=1;class Mo extends Ie{constructor(e,t,i){if(super(),this.type="CubeCamera",i.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=i;const r=new _t(Dr,Ur,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new b(1,0,0)),this.add(r);const n=new _t(Dr,Ur,e,t);n.layers=this.layers,n.up.set(0,-1,0),n.lookAt(new b(-1,0,0)),this.add(n);const s=new _t(Dr,Ur,e,t);s.layers=this.layers,s.up.set(0,0,1),s.lookAt(new b(0,1,0)),this.add(s);const o=new _t(Dr,Ur,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(new b(0,-1,0)),this.add(o);const l=new _t(Dr,Ur,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new b(0,0,1)),this.add(l);const c=new _t(Dr,Ur,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new b(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,n,s,o,l,c]=this.children,h=e.xr.enabled,u=e.getRenderTarget();e.xr.enabled=!1;const d=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,n),e.setRenderTarget(i,2),e.render(t,s),e.setRenderTarget(i,3),e.render(t,o),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=d,e.setRenderTarget(i,5),e.render(t,c),e.setRenderTarget(u),e.xr.enabled=h}}class ja extends st{constructor(e,t,i,r,n,s,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:ks,o=o!==void 0?o:Ti,super(e,t,i,r,n,s,o,l,c,h),this._needsFlipEnvMap=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}ja.prototype.isCubeTexture=!0;class Qc extends Ft{constructor(e,t,i){Number.isInteger(t)&&(console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"),t=i),super(e,e,t),t=t||{},this.texture=new ja(void 0,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ut,this.texture._needsFlipEnvMap=!1}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.format=Ct,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new bi(5,5,5),n=new mt({name:"CubemapFromEquirect",uniforms:Nr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:nt,blending:yn});n.uniforms.tEquirect.value=t;const s=new qe(r,n),o=t.minFilter;return t.minFilter===vr&&(t.minFilter=ut),new Mo(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,i,r){const n=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,i,r);e.setRenderTarget(n)}}Qc.prototype.isWebGLCubeRenderTarget=!0;const To=new b,xm=new b,ym=new dt;class fi{constructor(e=new b(1,0,0),t=0){this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=To.subVectors(i,t).cross(xm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const i=e.delta(To),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const n=-(e.start.dot(this.normal)+this.constant)/r;return n<0||n>1?null:t.copy(i).multiplyScalar(n).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||ym.getNormalMatrix(e),r=this.coplanarPoint(To).applyMatrix4(e),n=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(n),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}fi.prototype.isPlane=!0;const Or=new Li,Ya=new b;let Qa=class{constructor(a=new fi,e=new fi,t=new fi,i=new fi,r=new fi,n=new fi){this.planes=[a,e,t,i,r,n]}set(a,e,t,i,r,n){const s=this.planes;return s[0].copy(a),s[1].copy(e),s[2].copy(t),s[3].copy(i),s[4].copy(r),s[5].copy(n),this}copy(a){const e=this.planes;for(let t=0;t<6;t++)e[t].copy(a.planes[t]);return this}setFromProjectionMatrix(a){const e=this.planes,t=a.elements,i=t[0],r=t[1],n=t[2],s=t[3],o=t[4],l=t[5],c=t[6],h=t[7],u=t[8],d=t[9],p=t[10],m=t[11],v=t[12],_=t[13],g=t[14],f=t[15];return e[0].setComponents(s-i,h-o,m-u,f-v).normalize(),e[1].setComponents(s+i,h+o,m+u,f+v).normalize(),e[2].setComponents(s+r,h+l,m+d,f+_).normalize(),e[3].setComponents(s-r,h-l,m-d,f-_).normalize(),e[4].setComponents(s-n,h-c,m-p,f-g).normalize(),e[5].setComponents(s+n,h+c,m+p,f+g).normalize(),this}intersectsObject(a){const e=a.geometry;return e.boundingSphere===null&&e.computeBoundingSphere(),Or.copy(e.boundingSphere).applyMatrix4(a.matrixWorld),this.intersectsSphere(Or)}intersectsSprite(a){return Or.center.set(0,0,0),Or.radius=.7071067811865476,Or.applyMatrix4(a.matrixWorld),this.intersectsSphere(Or)}intersectsSphere(a){const e=this.planes,t=a.center,i=-a.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(t)<i)return!1;return!0}intersectsBox(a){const e=this.planes;for(let t=0;t<6;t++){const i=e[t];if(Ya.x=i.normal.x>0?a.max.x:a.min.x,Ya.y=i.normal.y>0?a.max.y:a.min.y,Ya.z=i.normal.z>0?a.max.z:a.min.z,i.distanceToPoint(Ya)<0)return!1}return!0}containsPoint(a){const e=this.planes;for(let t=0;t<6;t++)if(e[t].distanceToPoint(a)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function qc(){let a=null,e=!1,t=null,i=null;function r(n,s){t(n,s),i=a.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=a.requestAnimationFrame(r),e=!0)},stop:function(){a.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(n){t=n},setContext:function(n){a=n}}}function wm(a,e){const t=e.isWebGL2,i=new WeakMap;function r(c,h){const u=c.array,d=c.usage,p=a.createBuffer();a.bindBuffer(h,p),a.bufferData(h,u,d),c.onUploadCallback();let m=5126;return u instanceof Float32Array?m=5126:u instanceof Float64Array?console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."):u instanceof Uint16Array?c.isFloat16BufferAttribute?t?m=5131:console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."):m=5123:u instanceof Int16Array?m=5122:u instanceof Uint32Array?m=5125:u instanceof Int32Array?m=5124:u instanceof Int8Array?m=5120:(u instanceof Uint8Array||u instanceof Uint8ClampedArray)&&(m=5121),{buffer:p,type:m,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version}}function n(c,h,u){const d=h.array,p=h.updateRange;a.bindBuffer(u,c),p.count===-1?a.bufferSubData(u,0,d):(t?a.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):a.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1)}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);h&&(a.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u===void 0?i.set(c,r(c,h)):u.version<c.version&&(n(u.buffer,c,h),u.version=c.version)}return{get:s,remove:o,update:l}}class Hl extends Fe{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const n=e/2,s=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,h=l+1,u=e/o,d=t/l,p=[],m=[],v=[],_=[];for(let g=0;g<h;g++){const f=g*d-s;for(let x=0;x<c;x++){const S=x*u-n;m.push(S,-f,0),v.push(0,0,1),_.push(x/o),_.push(1-g/l)}}for(let g=0;g<l;g++)for(let f=0;f<o;f++){const x=f+c*g,S=f+c*(g+1),w=f+1+c*(g+1),y=f+1+c*g;p.push(x,S,y),p.push(S,w,y)}this.setIndex(p),this.setAttribute("position",new be(m,3)),this.setAttribute("normal",new be(v,3)),this.setAttribute("uv",new be(_,2))}static fromJSON(e){return new Hl(e.width,e.height,e.widthSegments,e.heightSegments)}}var bm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Sm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mm=`#ifdef ALPHATEST
	if ( diffuseColor.a < ALPHATEST ) discard;
#endif`,Tm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );
	#endif
#endif`,Am=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Em="vec3 transformed = vec3( position );",Lm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Pm=`vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	return vec2( -1.04, 1.04 ) * a004 + r.zw;
}
float punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
#if defined ( PHYSICALLY_CORRECT_LIGHTS )
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
#else
	if( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
		return pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );
	}
	return 1.0;
#endif
}
vec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 specularColor, const in float dotVH ) {
	float fresnel = exp2( ( -5.55473 * dotVH - 6.98316 ) * dotVH );
	return ( 1.0 - specularColor ) * fresnel + specularColor;
}
vec3 F_Schlick_RoughnessDependent( const in vec3 F0, const in float dotNV, const in float roughness ) {
	float fresnel = exp2( ( -5.55473 * dotNV - 6.98316 ) * dotNV );
	vec3 Fr = max( vec3( 1.0 - roughness ), F0 ) - F0;
	return Fr * fresnel + F0;
}
float G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	float gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	return 1.0 / ( gl * gv );
}
float G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( incidentLight.direction + viewDir );
	float dotNL = saturate( dot( normal, incidentLight.direction ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );
	vec3 F = F_Schlick( specularColor, dotLH );
	float G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( G * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
vec3 BRDF_Specular_GGX_Environment( const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );
	return specularColor * brdf.x + brdf.y;
}
void BRDF_Specular_Multiscattering_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
	vec3 F = F_Schlick_RoughnessDependent( specularColor, dotNV, roughness );
	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );
	vec3 FssEss = F * brdf.x + brdf.y;
	float Ess = brdf.x + brdf.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );
	float dotNH = saturate( dot( geometry.normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );
	vec3 F = F_Schlick( specularColor, dotLH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
float GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {
	return ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );
}
float BlinnExponentToGGXRoughness( const in float blinnExponent ) {
	return sqrt( 2.0 / ( blinnExponent + 2.0 ) );
}
#if defined( USE_SHEEN )
float D_Charlie(float roughness, float NoH) {
	float invAlpha = 1.0 / roughness;
	float cos2h = NoH * NoH;
	float sin2h = max(1.0 - cos2h, 0.0078125);	return (2.0 + invAlpha) * pow(sin2h, invAlpha * 0.5) / (2.0 * PI);
}
float V_Neubelt(float NoV, float NoL) {
	return saturate(1.0 / (4.0 * (NoL + NoV - NoL * NoV)));
}
vec3 BRDF_Specular_Sheen( const in float roughness, const in vec3 L, const in GeometricContext geometry, vec3 specularColor ) {
	vec3 N = geometry.normal;
	vec3 V = geometry.viewDir;
	vec3 H = normalize( V + L );
	float dotNH = saturate( dot( N, H ) );
	return specularColor * D_Charlie( roughness, dotNH ) * V_Neubelt( dot(N, V), dot(N, L) );
}
#endif`,Cm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Rm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Im=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Fm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Nm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Dm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Um=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Om=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Bm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,zm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate(a) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement(a) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract(sin(sn) * c);
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float max3( vec3 v ) { return max( max( v.x, v.y ), v.z ); }
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
vec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
	float distance = dot( planeNormal, point - pointOnPlane );
	return - distance * planeNormal + point;
}
float sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
	return sign( dot( point - pointOnPlane, planeNormal ) );
}
vec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {
	return lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Hm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_maxMipLevel 8.0
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_maxTileSize 256.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		float texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );
		vec2 uv = getUV( direction, face ) * ( faceSize - 1.0 );
		vec2 f = fract( uv );
		uv += 0.5 - f;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		if ( mipInt < cubeUV_maxMipLevel ) {
			uv.y += 2.0 * cubeUV_maxTileSize;
		}
		uv.y += filterInt * 2.0 * cubeUV_minTileSize;
		uv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );
		uv *= texelSize;
		vec3 tl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x += texelSize;
		vec3 tr = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.y += texelSize;
		vec3 br = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x -= texelSize;
		vec3 bl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		vec3 tm = mix( tl, tr, f.x );
		vec3 bm = mix( bl, br, f.x );
		return mix( tm, bm, f.y );
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,km=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Gm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Wm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ym=`
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 GammaToLinear( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );
}
vec4 LinearToGamma( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );
}
vec4 sRGBToLinear( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 RGBEToLinear( in vec4 value ) {
	return vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );
}
vec4 LinearToRGBE( in vec4 value ) {
	float maxComponent = max( max( value.r, value.g ), value.b );
	float fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );
	return vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );
}
vec4 RGBMToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * value.a * maxRange, 1.0 );
}
vec4 LinearToRGBM( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float M = clamp( maxRGB / maxRange, 0.0, 1.0 );
	M = ceil( M * 255.0 ) / 255.0;
	return vec4( value.rgb / ( M * maxRange ), M );
}
vec4 RGBDToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );
}
vec4 LinearToRGBD( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float D = max( maxRange / maxRGB, 1.0 );
	D = clamp( floor( D ) / 255.0, 0.0, 1.0 );
	return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );
}
const mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );
vec4 LinearToLogLuv( in vec4 value ) {
	vec3 Xp_Y_XYZp = cLogLuvM * value.rgb;
	Xp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );
	vec4 vResult;
	vResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;
	float Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;
	vResult.w = fract( Le );
	vResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;
	return vResult;
}
const mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );
vec4 LogLuvToLinear( in vec4 value ) {
	float Le = value.z * 255.0 + value.w;
	vec3 Xp_Y_XYZp;
	Xp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );
	Xp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;
	Xp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;
	vec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;
	return vec4( max( vRGB, 0.0 ), 1.0 );
}`,Qm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifndef ENVMAP_TYPE_CUBE_UV
		envColor = envMapTexelToLinear( envColor );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,qm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform int maxMipLevel;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Jm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Zm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Km=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,$m=`#ifdef USE_FOG
	fogDepth = - mvPosition.z;
#endif`,eg=`#ifdef USE_FOG
	varying float fogDepth;
#endif`,tg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, fogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ig=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float fogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return texture2D( gradientMap, coord ).rgb;
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,ng=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel= texture2D( lightMap, vUv2 );
	reflectedLight.indirectDiffuse += PI * lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
#endif`,ag=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sg=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );
		#endif
	}
	#pragma unroll_loop_end
#endif`,og=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in GeometricContext geometry ) {
	vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	return irradiance;
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		directLight.color = directionalLight.color;
		directLight.direction = directionalLight.direction;
		directLight.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		vec3 lVector = pointLight.position - geometry.position;
		directLight.direction = normalize( lVector );
		float lightDistance = length( lVector );
		directLight.color = pointLight.color;
		directLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );
		directLight.visible = ( directLight.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		vec3 lVector = spotLight.position - geometry.position;
		directLight.direction = normalize( lVector );
		float lightDistance = length( lVector );
		float angleCos = dot( directLight.direction, spotLight.direction );
		if ( angleCos > spotLight.coneCos ) {
			float spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );
			directLight.color = spotLight.color;
			directLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );
			directLight.visible = true;
		} else {
			directLight.color = vec3( 0.0 );
			directLight.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {
		float dotNL = dot( geometry.normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			irradiance *= PI;
		#endif
		return irradiance;
	}
#endif`,lg=`#if defined( USE_ENVMAP )
	#ifdef ENVMAP_MODE_REFRACTION
		uniform float refractionRatio;
	#endif
	vec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {
		vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
		#ifdef ENVMAP_TYPE_CUBE
			vec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );
			#else
				vec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_CUBE_UV )
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
		#else
			vec4 envMapColor = vec4( 0.0 );
		#endif
		return PI * envMapColor.rgb * envMapIntensity;
	}
	float getSpecularMIPLevel( const in float roughness, const in int maxMIPLevel ) {
		float maxMIPLevelScalar = float( maxMIPLevel );
		float sigma = PI * roughness * roughness / ( 1.0 + roughness );
		float desiredMIPLevel = maxMIPLevelScalar + log2( sigma );
		return clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );
	}
	vec3 getLightProbeIndirectRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in int maxMIPLevel ) {
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( -viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
		#else
			vec3 reflectVec = refract( -viewDir, normal, refractionRatio );
		#endif
		reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
		float specularMIPLevel = getSpecularMIPLevel( roughness, maxMIPLevel );
		#ifdef ENVMAP_TYPE_CUBE
			vec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );
			#else
				vec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_CUBE_UV )
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
		#endif
		return envMapColor.rgb * envMapIntensity;
	}
#endif`,cg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hg=`varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,ug=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,dg=`varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,pg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.specularRoughness = max( roughnessFactor, 0.0525 );material.specularRoughness += geometryRoughness;
material.specularRoughness = min( material.specularRoughness, 1.0 );
#ifdef REFLECTIVITY
	material.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );
#endif
#ifdef CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheen;
#endif`,fg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float specularRoughness;
	vec3 specularColor;
#ifdef CLEARCOAT
	float clearcoat;
	float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	vec3 sheenColor;
#endif
};
#define MAXIMUM_SPECULAR_COEFFICIENT 0.16
#define DEFAULT_SPECULAR_COEFFICIENT 0.04
float clearcoatDHRApprox( const in float roughness, const in float dotNL ) {
	return DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.specularRoughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	#ifdef CLEARCOAT
		float ccDotNL = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = ccDotNL * directLight.color;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			ccIrradiance *= PI;
		#endif
		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );
		reflectedLight.directSpecular += ccIrradiance * material.clearcoat * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );
	#else
		float clearcoatDHR = 0.0;
	#endif
	#ifdef USE_SHEEN
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_Sheen(
			material.specularRoughness,
			directLight.direction,
			geometry,
			material.sheenColor
		);
	#else
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.normal, material.specularColor, material.specularRoughness);
	#endif
	reflectedLight.directDiffuse += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef CLEARCOAT
		float ccDotNV = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		reflectedLight.indirectSpecular += clearcoatRadiance * material.clearcoat * BRDF_Specular_GGX_Environment( geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );
		float ccDotNL = ccDotNV;
		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );
	#else
		float clearcoatDHR = 0.0;
	#endif
	float clearcoatInv = 1.0 - clearcoatDHR;
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	BRDF_Specular_Multiscattering_Environment( geometry, material.specularColor, material.specularRoughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
	reflectedLight.indirectSpecular += clearcoatInv * radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,mg=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointDirectLightIrradiance( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotDirectLightIrradiance( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,gg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			lightMapIrradiance *= PI;
		#endif
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.normal, material.specularRoughness, maxMipLevel );
	#ifdef CLEARCOAT
		clearcoatRadiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness, maxMipLevel );
	#endif
#endif`,vg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,_g=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,wg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,bg=`#ifdef USE_MAP
	vec4 texelColor = texture2D( map, vUv );
	texelColor = mapTexelToLinear( texelColor );
	diffuseColor *= texelColor;
#endif`,Sg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Mg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	vec4 mapTexel = texture2D( map, uv );
	diffuseColor *= mapTexelToLinear( mapTexel );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Tg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ag=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Eg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Lg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
	objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
	objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
	objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
#endif`,Pg=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifndef USE_MORPHNORMALS
		uniform float morphTargetInfluences[ 8 ];
	#else
		uniform float morphTargetInfluences[ 4 ];
	#endif
#endif`,Cg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	transformed += morphTarget0 * morphTargetInfluences[ 0 ];
	transformed += morphTarget1 * morphTargetInfluences[ 1 ];
	transformed += morphTarget2 * morphTargetInfluences[ 2 ];
	transformed += morphTarget3 * morphTargetInfluences[ 3 ];
	#ifndef USE_MORPHNORMALS
		transformed += morphTarget4 * morphTargetInfluences[ 4 ];
		transformed += morphTarget5 * morphTargetInfluences[ 5 ];
		transformed += morphTarget6 * morphTargetInfluences[ 6 ];
		transformed += morphTarget7 * morphTargetInfluences[ 7 ];
	#endif
#endif`,Rg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Ig=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( -vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Fg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Ng=`#ifdef CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Dg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Ug=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Og=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ));
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w);
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return (( near + viewZ ) * far ) / (( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Bg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Hg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Gg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Vg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Wg=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Xg=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,jg=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,Yg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Qg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	#ifdef BONE_TEXTURE
		uniform highp sampler2D boneTexture;
		uniform int boneTextureSize;
		mat4 getBoneMatrix( const in float i ) {
			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );
			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );
			y = dy * ( y + 0.5 );
			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
			mat4 bone = mat4( v1, v2, v3, v4 );
			return bone;
		}
	#else
		uniform mat4 boneMatrices[ MAX_BONES ];
		mat4 getBoneMatrix( const in float i ) {
			mat4 bone = boneMatrices[ int(i) ];
			return bone;
		}
	#endif
#endif`,Jg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Zg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Kg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$g=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ev=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tv=`#ifndef saturate
#define saturate(a) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,iv=`#ifdef USE_TRANSMISSION
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSNMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition.xyz / vWorldPosition.w;
	vec3 v = normalize( cameraPosition - pos );
	float ior = ( 1.0 + 0.4 * reflectivity ) / ( 1.0 - 0.4 * reflectivity );
	vec3 transmission = transmissionFactor * getIBLVolumeRefraction(
		normal, v, roughnessFactor, material.diffuseColor, totalSpecular,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission, transmissionFactor );
#endif`,rv=`#ifdef USE_TRANSMISSION
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec4 vWorldPosition;
	vec3 getVolumeTransmissionRay(vec3 n, vec3 v, float thickness, float ior, mat4 modelMatrix) {
		vec3 refractionVector = refract(-v, normalize(n), 1.0 / ior);
		vec3 modelScale;
		modelScale.x = length(vec3(modelMatrix[0].xyz));
		modelScale.y = length(vec3(modelMatrix[1].xyz));
		modelScale.z = length(vec3(modelMatrix[2].xyz));
		return normalize(refractionVector) * thickness * modelScale;
	}
	float applyIorToRoughness(float roughness, float ior) {
		return roughness * clamp(ior * 2.0 - 2.0, 0.0, 1.0);
	}
	vec3 getTransmissionSample(vec2 fragCoord, float roughness, float ior) {
		float framebufferLod = log2(transmissionSamplerSize.x) * applyIorToRoughness(roughness, ior);
		return texture2DLodEXT(transmissionSamplerMap, fragCoord.xy, framebufferLod).rgb;
	}
	vec3 applyVolumeAttenuation(vec3 radiance, float transmissionDistance, vec3 attenuationColor, float attenuationDistance) {
		if (attenuationDistance == 0.0) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log(attenuationColor) / attenuationDistance;
			vec3 transmittance = exp(-attenuationCoefficient * transmissionDistance);			return transmittance * radiance;
		}
	}
	vec3 getIBLVolumeRefraction(vec3 n, vec3 v, float perceptualRoughness, vec3 baseColor, vec3 specularColor,
		vec3 position, mat4 modelMatrix, mat4 viewMatrix, mat4 projMatrix, float ior, float thickness,
		vec3 attenuationColor, float attenuationDistance) {
		vec3 transmissionRay = getVolumeTransmissionRay(n, v, thickness, ior, modelMatrix);
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4(refractedRayExit, 1.0);
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec3 transmittedLight = getTransmissionSample(refractionCoords, perceptualRoughness, ior);
		vec3 attenuatedColor = applyVolumeAttenuation(transmittedLight, length(transmissionRay), attenuationColor, attenuationDistance);
		return (1.0 - specularColor) * attenuatedColor * baseColor;
	}
#endif`,nv=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,av=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,sv=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,ov=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,lv=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,cv=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,hv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,uv=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,dv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pv=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,fv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,gv=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,vv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,_v=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,xv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	vec4 texColor = texture2D( tEquirect, sampleUV );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,yv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Sv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
	
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mv=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <skinbase_vertex>
	#ifdef USE_ENVMAP
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Tv=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Av=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ev=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <fog_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
		matcapColor = matcapTexelToLinear( matcapColor );
	#else
		vec4 matcapColor = vec4( 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lv=`#define MATCAP
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#ifndef FLAT_SHADED
		vNormal = normalize( transformedNormal );
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Pv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cv=`#define TOON
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Iv=`#define PHONG
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fv=`#define STANDARD
#ifdef PHYSICAL
	#define REFLECTIVITY
	#define CLEARCOAT
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform vec3 attenuationColor;
	uniform float attenuationDistance;
#endif
#ifdef REFLECTIVITY
	uniform float reflectivity;
#endif
#ifdef CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheen;
#endif
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <transmission_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nv=`#define STANDARD
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#ifdef USE_TRANSMISSION
	varying vec4 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition;
#endif
}`,Dv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <packing>
#include <uv_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
}`,Uv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ov=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Bv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,zv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Hv=`#include <common>
#include <fog_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <begin_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Gv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`;const Le={alphamap_fragment:bm,alphamap_pars_fragment:Sm,alphatest_fragment:Mm,aomap_fragment:Tm,aomap_pars_fragment:Am,begin_vertex:Em,beginnormal_vertex:Lm,bsdfs:Pm,bumpmap_pars_fragment:Cm,clipping_planes_fragment:Rm,clipping_planes_pars_fragment:Im,clipping_planes_pars_vertex:Fm,clipping_planes_vertex:Nm,color_fragment:Dm,color_pars_fragment:Um,color_pars_vertex:Om,color_vertex:Bm,common:zm,cube_uv_reflection_fragment:Hm,defaultnormal_vertex:km,displacementmap_pars_vertex:Gm,displacementmap_vertex:Vm,emissivemap_fragment:Wm,emissivemap_pars_fragment:Xm,encodings_fragment:jm,encodings_pars_fragment:Ym,envmap_fragment:Qm,envmap_common_pars_fragment:qm,envmap_pars_fragment:Jm,envmap_pars_vertex:Zm,envmap_physical_pars_fragment:lg,envmap_vertex:Km,fog_vertex:$m,fog_pars_vertex:eg,fog_fragment:tg,fog_pars_fragment:ig,gradientmap_pars_fragment:rg,lightmap_fragment:ng,lightmap_pars_fragment:ag,lights_lambert_vertex:sg,lights_pars_begin:og,lights_toon_fragment:cg,lights_toon_pars_fragment:hg,lights_phong_fragment:ug,lights_phong_pars_fragment:dg,lights_physical_fragment:pg,lights_physical_pars_fragment:fg,lights_fragment_begin:mg,lights_fragment_maps:gg,lights_fragment_end:vg,logdepthbuf_fragment:_g,logdepthbuf_pars_fragment:xg,logdepthbuf_pars_vertex:yg,logdepthbuf_vertex:wg,map_fragment:bg,map_pars_fragment:Sg,map_particle_fragment:Mg,map_particle_pars_fragment:Tg,metalnessmap_fragment:Ag,metalnessmap_pars_fragment:Eg,morphnormal_vertex:Lg,morphtarget_pars_vertex:Pg,morphtarget_vertex:Cg,normal_fragment_begin:Rg,normal_fragment_maps:Ig,normalmap_pars_fragment:Fg,clearcoat_normal_fragment_begin:Ng,clearcoat_normal_fragment_maps:Dg,clearcoat_pars_fragment:Ug,packing:Og,premultiplied_alpha_fragment:Bg,project_vertex:zg,dithering_fragment:Hg,dithering_pars_fragment:kg,roughnessmap_fragment:Gg,roughnessmap_pars_fragment:Vg,shadowmap_pars_fragment:Wg,shadowmap_pars_vertex:Xg,shadowmap_vertex:jg,shadowmask_pars_fragment:Yg,skinbase_vertex:Qg,skinning_pars_vertex:qg,skinning_vertex:Jg,skinnormal_vertex:Zg,specularmap_fragment:Kg,specularmap_pars_fragment:$g,tonemapping_fragment:ev,tonemapping_pars_fragment:tv,transmission_fragment:iv,transmission_pars_fragment:rv,uv_pars_fragment:nv,uv_pars_vertex:av,uv_vertex:sv,uv2_pars_fragment:ov,uv2_pars_vertex:lv,uv2_vertex:cv,worldpos_vertex:hv,background_frag:uv,background_vert:dv,cube_frag:pv,cube_vert:fv,depth_frag:mv,depth_vert:gv,distanceRGBA_frag:vv,distanceRGBA_vert:_v,equirect_frag:xv,equirect_vert:yv,linedashed_frag:wv,linedashed_vert:bv,meshbasic_frag:Sv,meshbasic_vert:Mv,meshlambert_frag:Tv,meshlambert_vert:Av,meshmatcap_frag:Ev,meshmatcap_vert:Lv,meshtoon_frag:Pv,meshtoon_vert:Cv,meshphong_frag:Rv,meshphong_vert:Iv,meshphysical_frag:Fv,meshphysical_vert:Nv,normal_frag:Dv,normal_vert:Uv,points_frag:Ov,points_vert:Bv,shadow_frag:zv,shadow_vert:Hv,sprite_frag:kv,sprite_vert:Gv},ne={common:{diffuse:{value:new Z(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new dt},uv2Transform:{value:new dt},alphaMap:{value:null}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},refractionRatio:{value:.98},maxMipLevel:{value:0}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new X(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Z(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Z(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},uvTransform:{value:new dt}},sprite:{diffuse:{value:new Z(16777215)},opacity:{value:1},center:{value:new X(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},uvTransform:{value:new dt}}},ei={basic:{uniforms:Mt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.fog]),vertexShader:Le.meshbasic_vert,fragmentShader:Le.meshbasic_frag},lambert:{uniforms:Mt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.fog,ne.lights,{emissive:{value:new Z(0)}}]),vertexShader:Le.meshlambert_vert,fragmentShader:Le.meshlambert_frag},phong:{uniforms:Mt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new Z(0)},specular:{value:new Z(1118481)},shininess:{value:30}}]),vertexShader:Le.meshphong_vert,fragmentShader:Le.meshphong_frag},standard:{uniforms:Mt([ne.common,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.roughnessmap,ne.metalnessmap,ne.fog,ne.lights,{emissive:{value:new Z(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag},toon:{uniforms:Mt([ne.common,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.gradientmap,ne.fog,ne.lights,{emissive:{value:new Z(0)}}]),vertexShader:Le.meshtoon_vert,fragmentShader:Le.meshtoon_frag},matcap:{uniforms:Mt([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,{matcap:{value:null}}]),vertexShader:Le.meshmatcap_vert,fragmentShader:Le.meshmatcap_frag},points:{uniforms:Mt([ne.points,ne.fog]),vertexShader:Le.points_vert,fragmentShader:Le.points_frag},dashed:{uniforms:Mt([ne.common,ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Le.linedashed_vert,fragmentShader:Le.linedashed_frag},depth:{uniforms:Mt([ne.common,ne.displacementmap]),vertexShader:Le.depth_vert,fragmentShader:Le.depth_frag},normal:{uniforms:Mt([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,{opacity:{value:1}}]),vertexShader:Le.normal_vert,fragmentShader:Le.normal_frag},sprite:{uniforms:Mt([ne.sprite,ne.fog]),vertexShader:Le.sprite_vert,fragmentShader:Le.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null}},vertexShader:Le.background_vert,fragmentShader:Le.background_frag},cube:{uniforms:Mt([ne.envmap,{opacity:{value:1}}]),vertexShader:Le.cube_vert,fragmentShader:Le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Le.equirect_vert,fragmentShader:Le.equirect_frag},distanceRGBA:{uniforms:Mt([ne.common,ne.displacementmap,{referencePosition:{value:new b},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Le.distanceRGBA_vert,fragmentShader:Le.distanceRGBA_frag},shadow:{uniforms:Mt([ne.lights,ne.fog,{color:{value:new Z(0)},opacity:{value:1}}]),vertexShader:Le.shadow_vert,fragmentShader:Le.shadow_frag}};ei.physical={uniforms:Mt([ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new X(1,1)},clearcoatNormalMap:{value:null},sheen:{value:new Z(0)},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new X},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Z(0)}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag};function Vv(a,e,t,i,r){const n=new Z(0);let s=0,o,l,c=null,h=0,u=null;function d(m,v){let _=!1,g=v.isScene===!0?v.background:null;g&&g.isTexture&&(g=e.get(g));const f=a.xr,x=f.getSession&&f.getSession();x&&x.environmentBlendMode==="additive"&&(g=null),g===null?p(n,s):g&&g.isColor&&(p(g,1),_=!0),(a.autoClear||_)&&a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil),g&&(g.isCubeTexture||g.mapping===Ws)?(l===void 0&&(l=new qe(new bi(1,1,1),new mt({name:"BackgroundCubeMaterial",uniforms:Nr(ei.cube.uniforms),vertexShader:ei.cube.vertexShader,fragmentShader:ei.cube.fragmentShader,side:nt,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(S,w,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=g,l.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g._needsFlipEnvMap?-1:1,(c!==g||h!==g.version||u!==a.toneMapping)&&(l.material.needsUpdate=!0,c=g,h=g.version,u=a.toneMapping),m.unshift(l,l.geometry,l.material,0,0,null)):g&&g.isTexture&&(o===void 0&&(o=new qe(new Hl(2,2),new mt({name:"BackgroundMaterial",uniforms:Nr(ei.background.uniforms),vertexShader:ei.background.vertexShader,fragmentShader:ei.background.fragmentShader,side:fr,depthTest:!1,depthWrite:!1,fog:!1})),o.geometry.deleteAttribute("normal"),Object.defineProperty(o.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(o)),o.material.uniforms.t2D.value=g,g.matrixAutoUpdate===!0&&g.updateMatrix(),o.material.uniforms.uvTransform.value.copy(g.matrix),(c!==g||h!==g.version||u!==a.toneMapping)&&(o.material.needsUpdate=!0,c=g,h=g.version,u=a.toneMapping),m.unshift(o,o.geometry,o.material,0,0,null))}function p(m,v){t.buffers.color.setClear(m.r,m.g,m.b,v,r)}return{getClearColor:function(){return n},setClearColor:function(m,v=1){n.set(m),s=v,p(n,s)},getClearAlpha:function(){return s},setClearAlpha:function(m){s=m,p(n,s)},render:d}}function Wv(a,e,t,i){const r=a.getParameter(34921),n=i.isWebGL2?null:e.get("OES_vertex_array_object"),s=i.isWebGL2||n!==null,o={},l=v(null);let c=l;function h(I,F,P,C,O){let Y=!1;if(s){const G=m(C,P,F);c!==G&&(c=G,d(c.object)),Y=_(C,O),Y&&g(C,O)}else{const G=F.wireframe===!0;(c.geometry!==C.id||c.program!==P.id||c.wireframe!==G)&&(c.geometry=C.id,c.program=P.id,c.wireframe=G,Y=!0)}I.isInstancedMesh===!0&&(Y=!0),O!==null&&t.update(O,34963),Y&&(M(I,F,P,C),O!==null&&a.bindBuffer(34963,t.get(O).buffer))}function u(){return i.isWebGL2?a.createVertexArray():n.createVertexArrayOES()}function d(I){return i.isWebGL2?a.bindVertexArray(I):n.bindVertexArrayOES(I)}function p(I){return i.isWebGL2?a.deleteVertexArray(I):n.deleteVertexArrayOES(I)}function m(I,F,P){const C=P.wireframe===!0;let O=o[I.id];O===void 0&&(O={},o[I.id]=O);let Y=O[F.id];Y===void 0&&(Y={},O[F.id]=Y);let G=Y[C];return G===void 0&&(G=v(u()),Y[C]=G),G}function v(I){const F=[],P=[],C=[];for(let O=0;O<r;O++)F[O]=0,P[O]=0,C[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:P,attributeDivisors:C,object:I,attributes:{},index:null}}function _(I,F){const P=c.attributes,C=I.attributes;let O=0;for(const Y in C){const G=P[Y],ie=C[Y];if(G===void 0||G.attribute!==ie||G.data!==ie.data)return!0;O++}return c.attributesNum!==O||c.index!==F}function g(I,F){const P={},C=I.attributes;let O=0;for(const Y in C){const G=C[Y],ie={};ie.attribute=G,G.data&&(ie.data=G.data),P[Y]=ie,O++}c.attributes=P,c.attributesNum=O,c.index=F}function f(){const I=c.newAttributes;for(let F=0,P=I.length;F<P;F++)I[F]=0}function x(I){S(I,0)}function S(I,F){const P=c.newAttributes,C=c.enabledAttributes,O=c.attributeDivisors;P[I]=1,C[I]===0&&(a.enableVertexAttribArray(I),C[I]=1),O[I]!==F&&((i.isWebGL2?a:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,F),O[I]=F)}function w(){const I=c.newAttributes,F=c.enabledAttributes;for(let P=0,C=F.length;P<C;P++)F[P]!==I[P]&&(a.disableVertexAttribArray(P),F[P]=0)}function y(I,F,P,C,O,Y){i.isWebGL2===!0&&(P===5124||P===5125)?a.vertexAttribIPointer(I,F,P,O,Y):a.vertexAttribPointer(I,F,P,C,O,Y)}function M(I,F,P,C){if(i.isWebGL2===!1&&(I.isInstancedMesh||C.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;f();const O=C.attributes,Y=P.getAttributes(),G=F.defaultAttributeValues;for(const ie in Y){const te=Y[ie];if(te>=0){const pe=O[ie];if(pe!==void 0){const he=pe.normalized,_e=pe.itemSize,ce=t.get(pe);if(ce===void 0)continue;const V=ce.buffer,Ze=ce.type,Pe=ce.bytesPerElement;if(pe.isInterleavedBufferAttribute){const fe=pe.data,me=fe.stride,Q=pe.offset;fe&&fe.isInstancedInterleavedBuffer?(S(te,fe.meshPerAttribute),C._maxInstanceCount===void 0&&(C._maxInstanceCount=fe.meshPerAttribute*fe.count)):x(te),a.bindBuffer(34962,V),y(te,_e,Ze,he,me*Pe,Q*Pe)}else pe.isInstancedBufferAttribute?(S(te,pe.meshPerAttribute),C._maxInstanceCount===void 0&&(C._maxInstanceCount=pe.meshPerAttribute*pe.count)):x(te),a.bindBuffer(34962,V),y(te,_e,Ze,he,0,0)}else if(ie==="instanceMatrix"){const he=t.get(I.instanceMatrix);if(he===void 0)continue;const _e=he.buffer,ce=he.type;S(te+0,1),S(te+1,1),S(te+2,1),S(te+3,1),a.bindBuffer(34962,_e),a.vertexAttribPointer(te+0,4,ce,!1,64,0),a.vertexAttribPointer(te+1,4,ce,!1,64,16),a.vertexAttribPointer(te+2,4,ce,!1,64,32),a.vertexAttribPointer(te+3,4,ce,!1,64,48)}else if(ie==="instanceColor"){const he=t.get(I.instanceColor);if(he===void 0)continue;const _e=he.buffer,ce=he.type;S(te,1),a.bindBuffer(34962,_e),a.vertexAttribPointer(te,3,ce,!1,12,0)}else if(G!==void 0){const he=G[ie];if(he!==void 0)switch(he.length){case 2:a.vertexAttrib2fv(te,he);break;case 3:a.vertexAttrib3fv(te,he);break;case 4:a.vertexAttrib4fv(te,he);break;default:a.vertexAttrib1fv(te,he)}}}}w()}function L(){z();for(const I in o){const F=o[I];for(const P in F){const C=F[P];for(const O in C)p(C[O].object),delete C[O];delete F[P]}delete o[I]}}function N(I){if(o[I.id]===void 0)return;const F=o[I.id];for(const P in F){const C=F[P];for(const O in C)p(C[O].object),delete C[O];delete F[P]}delete o[I.id]}function R(I){for(const F in o){const P=o[F];if(P[I.id]===void 0)continue;const C=P[I.id];for(const O in C)p(C[O].object),delete C[O];delete P[I.id]}}function z(){H(),c!==l&&(c=l,d(c.object))}function H(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:z,resetDefaultState:H,dispose:L,releaseStatesOfGeometry:N,releaseStatesOfProgram:R,initAttributes:f,enableAttribute:x,disableUnusedAttributes:w}}function Xv(a,e,t,i){const r=i.isWebGL2;let n;function s(c){n=c}function o(c,h){a.drawArrays(n,c,h),t.update(h,n,1)}function l(c,h,u){if(u===0)return;let d,p;if(r)d=a,p="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](n,c,h,u),t.update(h,n,u)}this.setMode=s,this.render=o,this.renderInstances=l}function jv(a,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const M=e.get("EXT_texture_filter_anisotropic");i=a.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function n(M){if(M==="highp"){if(a.getShaderPrecisionFormat(35633,36338).precision>0&&a.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";M="mediump"}return M==="mediump"&&a.getShaderPrecisionFormat(35633,36337).precision>0&&a.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext<"u"&&a instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&a instanceof WebGL2ComputeRenderingContext;let o=t.precision!==void 0?t.precision:"highp";const l=n(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=s||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=a.getParameter(34930),d=a.getParameter(35660),p=a.getParameter(3379),m=a.getParameter(34076),v=a.getParameter(34921),_=a.getParameter(36347),g=a.getParameter(36348),f=a.getParameter(36349),x=d>0,S=s||e.has("OES_texture_float"),w=x&&S,y=s?a.getParameter(36183):0;return{isWebGL2:s,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:n,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:m,maxAttributes:v,maxVertexUniforms:_,maxVaryings:g,maxFragmentUniforms:f,vertexTextures:x,floatFragmentTextures:S,floatVertexTextures:w,maxSamples:y}}function Yv(a){const e=this;let t=null,i=0,r=!1,n=!1;const s=new fi,o=new dt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d,p){const m=u.length!==0||d||i!==0||r;return r=d,t=h(u,p,0),i=u.length,m},this.beginShadows=function(){n=!0,h(null)},this.endShadows=function(){n=!1,c()},this.setState=function(u,d,p){const m=u.clippingPlanes,v=u.clipIntersection,_=u.clipShadows,g=a.get(u);if(!r||m===null||m.length===0||n&&!_)n?h(null):c();else{const f=n?0:i,x=f*4;let S=g.clippingState||null;l.value=S,S=h(m,d,x,p);for(let w=0;w!==x;++w)S[w]=t[w];g.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=f}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,p,m){const v=u!==null?u.length:0;let _=null;if(v!==0){if(_=l.value,m!==!0||_===null){const g=p+v*4,f=d.matrixWorldInverse;o.getNormalMatrix(f),(_===null||_.length<g)&&(_=new Float32Array(g));for(let x=0,S=p;x!==v;++x,S+=4)s.copy(u[x]).applyMatrix4(f,o),s.normal.toArray(_,S),_[S+3]=s.constant}l.value=_,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,_}}function Qv(a){let e=new WeakMap;function t(s,o){return o===Vs?s.mapping=ks:o===gc&&(s.mapping=Gs),s}function i(s){if(s&&s.isTexture){const o=s.mapping;if(o===Vs||o===gc)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=a.getRenderTarget(),h=new Qc(l.height/2);return h.fromEquirectangularTexture(a,s),e.set(s,h),a.setRenderTarget(c),s.addEventListener("dispose",r),t(h.texture,s.mapping)}else return null}}return s}function r(s){const o=s.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function n(){e=new WeakMap}return{get:i,dispose:n}}function qv(a){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=a.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Jv(a,e,t,i){const r={},n=new WeakMap;function s(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const m in d.attributes)e.remove(d.attributes[m]);d.removeEventListener("dispose",s),delete r[d.id];const p=n.get(d);p&&(e.remove(p),n.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return r[d.id]===!0||(d.addEventListener("dispose",s),r[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const m in d)e.update(d[m],34962);const p=u.morphAttributes;for(const m in p){const v=p[m];for(let _=0,g=v.length;_<g;_++)e.update(v[_],34962)}}function c(u){const d=[],p=u.index,m=u.attributes.position;let v=0;if(p!==null){const f=p.array;v=p.version;for(let x=0,S=f.length;x<S;x+=3){const w=f[x+0],y=f[x+1],M=f[x+2];d.push(w,y,y,M,M,w)}}else{const f=m.array;v=m.version;for(let x=0,S=f.length/3-1;x<S;x+=3){const w=x+0,y=x+1,M=x+2;d.push(w,y,y,M,M,w)}}const _=new(jc(d)>65535?Xc:go)(d,1);_.version=v;const g=n.get(u);g&&e.remove(g),n.set(u,_)}function h(u){const d=n.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return n.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Zv(a,e,t,i){const r=i.isWebGL2;let n;function s(d){n=d}let o,l;function c(d){o=d.type,l=d.bytesPerElement}function h(d,p){a.drawElements(n,p,o,d*l),t.update(p,n,1)}function u(d,p,m){if(m===0)return;let v,_;if(r)v=a,_="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),_="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[_](n,p,o,d*l,m),t.update(p,n,m)}this.setMode=s,this.setIndex=c,this.render=h,this.renderInstances=u}function Kv(a){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(n,s,o){switch(t.calls++,s){case 4:t.triangles+=o*(n/3);break;case 1:t.lines+=o*(n/2);break;case 3:t.lines+=o*(n-1);break;case 2:t.lines+=o*n;break;case 0:t.points+=o*n;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function $v(a,e){return a[0]-e[0]}function e0(a,e){return Math.abs(e[1])-Math.abs(a[1])}function t0(a){const e={},t=new Float32Array(8),i=[];for(let n=0;n<8;n++)i[n]=[n,0];function r(n,s,o,l){const c=n.morphTargetInfluences,h=c===void 0?0:c.length;let u=e[s.id];if(u===void 0||u.length!==h){u=[];for(let _=0;_<h;_++)u[_]=[_,0];e[s.id]=u}for(let _=0;_<h;_++){const g=u[_];g[0]=_,g[1]=c[_]}u.sort(e0);for(let _=0;_<8;_++)_<h&&u[_][1]?(i[_][0]=u[_][0],i[_][1]=u[_][1]):(i[_][0]=Number.MAX_SAFE_INTEGER,i[_][1]=0);i.sort($v);const d=o.morphTargets&&s.morphAttributes.position,p=o.morphNormals&&s.morphAttributes.normal;let m=0;for(let _=0;_<8;_++){const g=i[_],f=g[0],x=g[1];f!==Number.MAX_SAFE_INTEGER&&x?(d&&s.getAttribute("morphTarget"+_)!==d[f]&&s.setAttribute("morphTarget"+_,d[f]),p&&s.getAttribute("morphNormal"+_)!==p[f]&&s.setAttribute("morphNormal"+_,p[f]),t[_]=x,m+=x):(d&&s.hasAttribute("morphTarget"+_)===!0&&s.deleteAttribute("morphTarget"+_),p&&s.hasAttribute("morphNormal"+_)===!0&&s.deleteAttribute("morphNormal"+_),t[_]=0)}const v=s.morphTargetsRelative?1:1-m;l.getUniforms().setValue(a,"morphTargetBaseInfluence",v),l.getUniforms().setValue(a,"morphTargetInfluences",t)}return{update:r}}function i0(a,e,t,i){let r=new WeakMap;function n(l){const c=i.render.frame,h=l.geometry,u=e.get(l,h);return r.get(u)!==c&&(e.update(u),r.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),u}function s(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:n,dispose:s}}class Jc extends st{constructor(e=null,t=1,i=1,r=1){super(null),this.image={data:e,width:t,height:i,depth:r},this.magFilter=lt,this.minFilter=lt,this.wrapR=St,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}}Jc.prototype.isDataTexture2DArray=!0;class Zc extends st{constructor(e=null,t=1,i=1,r=1){super(null),this.image={data:e,width:t,height:i,depth:r},this.magFilter=lt,this.minFilter=lt,this.wrapR=St,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}}Zc.prototype.isDataTexture3D=!0;const Kc=new st,r0=new Jc,n0=new Zc,$c=new ja,eh=[],th=[],ih=new Float32Array(16),rh=new Float32Array(9),nh=new Float32Array(4);function Br(a,e,t){const i=a[0];if(i<=0||i>0)return a;const r=e*t;let n=eh[r];if(n===void 0&&(n=new Float32Array(r),eh[r]=n),e!==0){i.toArray(n,0);for(let s=1,o=0;s!==e;++s)o+=t,a[s].toArray(n,o)}return n}function Lt(a,e){if(a.length!==e.length)return!1;for(let t=0,i=a.length;t<i;t++)if(a[t]!==e[t])return!1;return!0}function Tt(a,e){for(let t=0,i=e.length;t<i;t++)a[t]=e[t]}function ah(a,e){let t=th[e];t===void 0&&(t=new Int32Array(e),th[e]=t);for(let i=0;i!==e;++i)t[i]=a.allocateTextureUnit();return t}function a0(a,e){const t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function s0(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;a.uniform2fv(this.addr,e),Tt(t,e)}}function o0(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Lt(t,e))return;a.uniform3fv(this.addr,e),Tt(t,e)}}function l0(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;a.uniform4fv(this.addr,e),Tt(t,e)}}function c0(a,e){const t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),Tt(t,e)}else{if(Lt(t,i))return;nh.set(i),a.uniformMatrix2fv(this.addr,!1,nh),Tt(t,i)}}function h0(a,e){const t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),Tt(t,e)}else{if(Lt(t,i))return;rh.set(i),a.uniformMatrix3fv(this.addr,!1,rh),Tt(t,i)}}function u0(a,e){const t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),Tt(t,e)}else{if(Lt(t,i))return;ih.set(i),a.uniformMatrix4fv(this.addr,!1,ih),Tt(t,i)}}function d0(a,e){const t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function p0(a,e){const t=this.cache;Lt(t,e)||(a.uniform2iv(this.addr,e),Tt(t,e))}function f0(a,e){const t=this.cache;Lt(t,e)||(a.uniform3iv(this.addr,e),Tt(t,e))}function m0(a,e){const t=this.cache;Lt(t,e)||(a.uniform4iv(this.addr,e),Tt(t,e))}function g0(a,e){const t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function v0(a,e){const t=this.cache;Lt(t,e)||(a.uniform2uiv(this.addr,e),Tt(t,e))}function _0(a,e){const t=this.cache;Lt(t,e)||(a.uniform3uiv(this.addr,e),Tt(t,e))}function x0(a,e){const t=this.cache;Lt(t,e)||(a.uniform4uiv(this.addr,e),Tt(t,e))}function y0(a,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(a.uniform1i(this.addr,r),i[0]=r),t.safeSetTexture2D(e||Kc,r)}function w0(a,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(a.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||n0,r)}function b0(a,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(a.uniform1i(this.addr,r),i[0]=r),t.safeSetTextureCube(e||$c,r)}function S0(a,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(a.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||r0,r)}function M0(a){switch(a){case 5126:return a0;case 35664:return s0;case 35665:return o0;case 35666:return l0;case 35674:return c0;case 35675:return h0;case 35676:return u0;case 5124:case 35670:return d0;case 35667:case 35671:return p0;case 35668:case 35672:return f0;case 35669:case 35673:return m0;case 5125:return g0;case 36294:return v0;case 36295:return _0;case 36296:return x0;case 35678:case 36198:case 36298:case 36306:case 35682:return y0;case 35679:case 36299:case 36307:return w0;case 35680:case 36300:case 36308:case 36293:return b0;case 36289:case 36303:case 36311:case 36292:return S0}}function T0(a,e){a.uniform1fv(this.addr,e)}function A0(a,e){const t=Br(e,this.size,2);a.uniform2fv(this.addr,t)}function E0(a,e){const t=Br(e,this.size,3);a.uniform3fv(this.addr,t)}function L0(a,e){const t=Br(e,this.size,4);a.uniform4fv(this.addr,t)}function P0(a,e){const t=Br(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function C0(a,e){const t=Br(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function R0(a,e){const t=Br(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function I0(a,e){a.uniform1iv(this.addr,e)}function F0(a,e){a.uniform2iv(this.addr,e)}function N0(a,e){a.uniform3iv(this.addr,e)}function D0(a,e){a.uniform4iv(this.addr,e)}function U0(a,e){a.uniform1uiv(this.addr,e)}function O0(a,e){a.uniform2uiv(this.addr,e)}function B0(a,e){a.uniform3uiv(this.addr,e)}function z0(a,e){a.uniform4uiv(this.addr,e)}function H0(a,e,t){const i=e.length,r=ah(t,i);a.uniform1iv(this.addr,r);for(let n=0;n!==i;++n)t.safeSetTexture2D(e[n]||Kc,r[n])}function k0(a,e,t){const i=e.length,r=ah(t,i);a.uniform1iv(this.addr,r);for(let n=0;n!==i;++n)t.safeSetTextureCube(e[n]||$c,r[n])}function G0(a){switch(a){case 5126:return T0;case 35664:return A0;case 35665:return E0;case 35666:return L0;case 35674:return P0;case 35675:return C0;case 35676:return R0;case 5124:case 35670:return I0;case 35667:case 35671:return F0;case 35668:case 35672:return N0;case 35669:case 35673:return D0;case 5125:return U0;case 36294:return O0;case 36295:return B0;case 36296:return z0;case 35678:case 36198:case 36298:case 36306:case 35682:return H0;case 35680:case 36300:case 36308:case 36293:return k0}}function V0(a,e,t){this.id=a,this.addr=t,this.cache=[],this.setValue=M0(e.type)}function sh(a,e,t){this.id=a,this.addr=t,this.cache=[],this.size=e.size,this.setValue=G0(e.type)}sh.prototype.updateCache=function(a){const e=this.cache;a instanceof Float32Array&&e.length!==a.length&&(this.cache=new Float32Array(a.length)),Tt(e,a)};function oh(a){this.id=a,this.seq=[],this.map={}}oh.prototype.setValue=function(a,e,t){const i=this.seq;for(let r=0,n=i.length;r!==n;++r){const s=i[r];s.setValue(a,e[s.id],t)}};const Ao=/(\w+)(\])?(\[|\.)?/g;function lh(a,e){a.seq.push(e),a.map[e.id]=e}function W0(a,e,t){const i=a.name,r=i.length;for(Ao.lastIndex=0;;){const n=Ao.exec(i),s=Ao.lastIndex;let o=n[1];const l=n[2]==="]",c=n[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===r){lh(t,c===void 0?new V0(o,a,e):new sh(o,a,e));break}else{let h=t.map[o];h===void 0&&(h=new oh(o),lh(t,h)),t=h}}}function Ni(a,e){this.seq=[],this.map={};const t=a.getProgramParameter(e,35718);for(let i=0;i<t;++i){const r=a.getActiveUniform(e,i),n=a.getUniformLocation(e,r.name);W0(r,n,this)}}Ni.prototype.setValue=function(a,e,t,i){const r=this.map[e];r!==void 0&&r.setValue(a,t,i)},Ni.prototype.setOptional=function(a,e,t){const i=e[t];i!==void 0&&this.setValue(a,t,i)},Ni.upload=function(a,e,t,i){for(let r=0,n=e.length;r!==n;++r){const s=e[r],o=t[s.id];o.needsUpdate!==!1&&s.setValue(a,o.value,i)}},Ni.seqWithValue=function(a,e){const t=[];for(let i=0,r=a.length;i!==r;++i){const n=a[i];n.id in e&&t.push(n)}return t};function ch(a,e,t){const i=a.createShader(e);return a.shaderSource(i,t),a.compileShader(i),i}let X0=0;function j0(a){const e=a.split(`
`);for(let t=0;t<e.length;t++)e[t]=t+1+": "+e[t];return e.join(`
`)}function hh(a){switch(a){case Tn:return["Linear","( value )"];case Rt:return["sRGB","( value )"];case Df:return["RGBE","( value )"];case Of:return["RGBM","( value, 7.0 )"];case Bf:return["RGBM","( value, 16.0 )"];case zf:return["RGBD","( value, 256.0 )"];case Nf:return["Gamma","( value, float( GAMMA_FACTOR ) )"];case Uf:return["LogLuv","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",a),["Linear","( value )"]}}function uh(a,e,t){const i=a.getShaderParameter(e,35713),r=a.getShaderInfoLog(e).trim();if(i&&r==="")return"";const n=a.getShaderSource(e);return"THREE.WebGLShader: gl.getShaderInfoLog() "+t+`
`+r+j0(n)}function Nn(a,e){const t=hh(e);return"vec4 "+a+"( vec4 value ) { return "+t[0]+"ToLinear"+t[1]+"; }"}function Y0(a,e){const t=hh(e);return"vec4 "+a+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Q0(a,e){let t;switch(e){case Fp:t="Linear";break;case Np:t="Reinhard";break;case Dp:t="OptimizedCineon";break;case Up:t="ACESFilmic";break;case Op:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function q0(a){return[a.extensionDerivatives||a.envMapCubeUV||a.bumpMap||a.tangentSpaceNormalMap||a.clearcoatNormalMap||a.flatShading||a.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(a.extensionFragDepth||a.logarithmicDepthBuffer)&&a.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",a.extensionDrawBuffers&&a.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(a.extensionShaderTextureLOD||a.envMap||a.transmission>0)&&a.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Dn).join(`
`)}function J0(a){const e=[];for(const t in a){const i=a[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Z0(a,e){const t={},i=a.getProgramParameter(e,35721);for(let r=0;r<i;r++){const n=a.getActiveAttrib(e,r).name;t[n]=a.getAttribLocation(e,n)}return t}function Dn(a){return a!==""}function dh(a,e){return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ph(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const K0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Eo(a){return a.replace(K0,$0)}function $0(a,e){const t=Le[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Eo(t)}const e_=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,t_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fh(a){return a.replace(t_,mh).replace(e_,i_)}function i_(a,e,t,i){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),mh(a,e,t,i)}function mh(a,e,t,i){let r="";for(let n=parseInt(e);n<parseInt(t);n++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+n+" ]").replace(/UNROLLED_LOOP_INDEX/g,n);return r}function gh(a){let e="precision "+a.precision+` float;
precision `+a.precision+" int;";return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function r_(a){let e="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===ac?e="SHADOWMAP_TYPE_PCF":a.shadowMapType===sc?e="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===xn&&(e="SHADOWMAP_TYPE_VSM"),e}function n_(a){let e="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case ks:case Gs:e="ENVMAP_TYPE_CUBE";break;case Ws:case Xs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function a_(a){let e="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case Gs:case Xs:e="ENVMAP_MODE_REFRACTION";break}return e}function s_(a){let e="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case ya:e="ENVMAP_BLENDING_MULTIPLY";break;case Rp:e="ENVMAP_BLENDING_MIX";break;case Ip:e="ENVMAP_BLENDING_ADD";break}return e}function o_(a,e,t,i){const r=a.getContext(),n=t.defines;let s=t.vertexShader,o=t.fragmentShader;const l=r_(t),c=n_(t),h=a_(t),u=s_(t),d=a.gammaFactor>0?a.gammaFactor:1,p=t.isWebGL2?"":q0(t),m=J0(n),v=r.createProgram();let _,g,f=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=[m].filter(Dn).join(`
`),_.length>0&&(_+=`
`),g=[p,m].filter(Dn).join(`
`),g.length>0&&(g+=`
`)):(_=[gh(t),"#define SHADER_NAME "+t.shaderName,m,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define GAMMA_FACTOR "+d,"#define MAX_BONES "+t.maxBones,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.useVertexTexture?"#define BONE_TEXTURE":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_MORPHTARGETS","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Dn).join(`
`),g=[p,gh(t),"#define SHADER_NAME "+t.shaderName,m,t.alphaTest?"#define ALPHATEST "+t.alphaTest+(t.alphaTest%1?"":".0"):"","#define GAMMA_FACTOR "+d,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.sheen?"#define USE_SHEEN":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"",(t.extensionShaderTextureLOD||t.envMap)&&t.rendererExtensionShaderTextureLod?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==gr?"#define TONE_MAPPING":"",t.toneMapping!==gr?Le.tonemapping_pars_fragment:"",t.toneMapping!==gr?Q0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",Le.encodings_pars_fragment,t.map?Nn("mapTexelToLinear",t.mapEncoding):"",t.matcap?Nn("matcapTexelToLinear",t.matcapEncoding):"",t.envMap?Nn("envMapTexelToLinear",t.envMapEncoding):"",t.emissiveMap?Nn("emissiveMapTexelToLinear",t.emissiveMapEncoding):"",t.lightMap?Nn("lightMapTexelToLinear",t.lightMapEncoding):"",Y0("linearToOutputTexel",t.outputEncoding),t.depthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Dn).join(`
`)),s=Eo(s),s=dh(s,t),s=ph(s,t),o=Eo(o),o=dh(o,t),o=ph(o,t),s=fh(s),o=fh(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(f=`#version 300 es
`,_=["#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,g=["#define varying in",t.glslVersion===Cc?"":"out highp vec4 pc_fragColor;",t.glslVersion===Cc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const x=f+_+s,S=f+g+o,w=ch(r,35633,x),y=ch(r,35632,S);if(r.attachShader(v,w),r.attachShader(v,y),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v),a.debug.checkShaderErrors){const N=r.getProgramInfoLog(v).trim(),R=r.getShaderInfoLog(w).trim(),z=r.getShaderInfoLog(y).trim();let H=!0,I=!0;if(r.getProgramParameter(v,35714)===!1){H=!1;const F=uh(r,w,"vertex"),P=uh(r,y,"fragment");console.error("THREE.WebGLProgram: shader error: ",r.getError(),"35715",r.getProgramParameter(v,35715),"gl.getProgramInfoLog",N,F,P)}else N!==""?console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()",N):(R===""||z==="")&&(I=!1);I&&(this.diagnostics={runnable:H,programLog:N,vertexShader:{log:R,prefix:_},fragmentShader:{log:z,prefix:g}})}r.deleteShader(w),r.deleteShader(y);let M;this.getUniforms=function(){return M===void 0&&(M=new Ni(r,v)),M};let L;return this.getAttributes=function(){return L===void 0&&(L=Z0(r,v)),L},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.name=t.shaderName,this.id=X0++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=w,this.fragmentShader=y,this}function l_(a,e,t,i,r,n){const s=[],o=i.isWebGL2,l=i.logarithmicDepthBuffer,c=i.floatVertexTextures,h=i.maxVertexUniforms,u=i.vertexTextures;let d=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"},m=["precision","isWebGL2","supportsVertexTextures","outputEncoding","instancing","instancingColor","map","mapEncoding","matcap","matcapEncoding","envMap","envMapMode","envMapEncoding","envMapCubeUV","lightMap","lightMapEncoding","aoMap","emissiveMap","emissiveMapEncoding","bumpMap","normalMap","objectSpaceNormalMap","tangentSpaceNormalMap","clearcoatMap","clearcoatRoughnessMap","clearcoatNormalMap","displacementMap","specularMap","roughnessMap","metalnessMap","gradientMap","alphaMap","combine","vertexColors","vertexAlphas","vertexTangents","vertexUvs","uvsVertexOnly","fog","useFog","fogExp2","flatShading","sizeAttenuation","logarithmicDepthBuffer","skinning","maxBones","useVertexTexture","morphTargets","morphNormals","premultipliedAlpha","numDirLights","numPointLights","numSpotLights","numHemiLights","numRectAreaLights","numDirLightShadows","numPointLightShadows","numSpotLightShadows","shadowMapEnabled","shadowMapType","toneMapping","physicallyCorrectLights","alphaTest","doubleSided","flipSided","numClippingPlanes","numClipIntersection","depthPacking","dithering","sheen","transmission","transmissionMap","thicknessMap"];function v(y){const M=y.skeleton.bones;if(c)return 1024;{const L=Math.floor((h-20)/4),N=Math.min(L,M.length);return N<M.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+M.length+" bones. This GPU supports "+N+"."),0):N}}function _(y){let M;return y&&y.isTexture?M=y.encoding:y&&y.isWebGLRenderTarget?(console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),M=y.texture.encoding):M=Tn,M}function g(y,M,L,N,R){const z=N.fog,H=y.isMeshStandardMaterial?N.environment:null,I=e.get(y.envMap||H),F=p[y.type],P=R.isSkinnedMesh?v(R):0;y.precision!==null&&(d=i.getMaxPrecision(y.precision),d!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));let C,O;if(F){const G=ei[F];C=G.vertexShader,O=G.fragmentShader}else C=y.vertexShader,O=y.fragmentShader;const Y=a.getRenderTarget();return{isWebGL2:o,shaderID:F,shaderName:y.type,vertexShader:C,fragmentShader:O,defines:y.defines,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,instancing:R.isInstancedMesh===!0,instancingColor:R.isInstancedMesh===!0&&R.instanceColor!==null,supportsVertexTextures:u,outputEncoding:Y!==null?_(Y.texture):a.outputEncoding,map:!!y.map,mapEncoding:_(y.map),matcap:!!y.matcap,matcapEncoding:_(y.matcap),envMap:!!I,envMapMode:I&&I.mapping,envMapEncoding:_(I),envMapCubeUV:!!I&&(I.mapping===Ws||I.mapping===Xs),lightMap:!!y.lightMap,lightMapEncoding:_(y.lightMap),aoMap:!!y.aoMap,emissiveMap:!!y.emissiveMap,emissiveMapEncoding:_(y.emissiveMap),bumpMap:!!y.bumpMap,normalMap:!!y.normalMap,objectSpaceNormalMap:y.normalMapType===Gf,tangentSpaceNormalMap:y.normalMapType===Ji,clearcoatMap:!!y.clearcoatMap,clearcoatRoughnessMap:!!y.clearcoatRoughnessMap,clearcoatNormalMap:!!y.clearcoatNormalMap,displacementMap:!!y.displacementMap,roughnessMap:!!y.roughnessMap,metalnessMap:!!y.metalnessMap,specularMap:!!y.specularMap,alphaMap:!!y.alphaMap,gradientMap:!!y.gradientMap,sheen:!!y.sheen,transmission:!!y.transmission,transmissionMap:!!y.transmissionMap,thicknessMap:!!y.thicknessMap,combine:y.combine,vertexTangents:y.normalMap&&y.vertexTangents,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&R.geometry&&R.geometry.attributes.color&&R.geometry.attributes.color.itemSize===4,vertexUvs:!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatMap||!!y.clearcoatRoughnessMap||!!y.clearcoatNormalMap||!!y.displacementMap||!!y.transmissionMap||!!y.thicknessMap,uvsVertexOnly:!(y.map||y.bumpMap||y.normalMap||y.specularMap||y.alphaMap||y.emissiveMap||y.roughnessMap||y.metalnessMap||y.clearcoatNormalMap||y.transmission||y.transmissionMap||y.thicknessMap)&&!!y.displacementMap,fog:!!z,useFog:y.fog,fogExp2:z&&z.isFogExp2,flatShading:!!y.flatShading,sizeAttenuation:y.sizeAttenuation,logarithmicDepthBuffer:l,skinning:R.isSkinnedMesh===!0&&P>0,maxBones:P,useVertexTexture:c,morphTargets:y.morphTargets,morphNormals:y.morphNormals,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numClippingPlanes:n.numPlanes,numClipIntersection:n.numIntersection,dithering:y.dithering,shadowMapEnabled:a.shadowMap.enabled&&L.length>0,shadowMapType:a.shadowMap.type,toneMapping:y.toneMapped?a.toneMapping:gr,physicallyCorrectLights:a.physicallyCorrectLights,premultipliedAlpha:y.premultipliedAlpha,alphaTest:y.alphaTest,doubleSided:y.side===Mi,flipSided:y.side===nt,depthPacking:y.depthPacking!==void 0?y.depthPacking:!1,index0AttributeName:y.index0AttributeName,extensionDerivatives:y.extensions&&y.extensions.derivatives,extensionFragDepth:y.extensions&&y.extensions.fragDepth,extensionDrawBuffers:y.extensions&&y.extensions.drawBuffers,extensionShaderTextureLOD:y.extensions&&y.extensions.shaderTextureLOD,rendererExtensionFragDepth:o||t.has("EXT_frag_depth"),rendererExtensionDrawBuffers:o||t.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:o||t.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function f(y){const M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.fragmentShader),M.push(y.vertexShader)),y.defines!==void 0)for(const L in y.defines)M.push(L),M.push(y.defines[L]);if(y.isRawShaderMaterial===!1){for(let L=0;L<m.length;L++)M.push(y[m[L]]);M.push(a.outputEncoding),M.push(a.gammaFactor)}return M.push(y.customProgramCacheKey),M.join()}function x(y){const M=p[y.type];let L;if(M){const N=ei[M];L=Xa.clone(N.uniforms)}else L=y.uniforms;return L}function S(y,M){let L;for(let N=0,R=s.length;N<R;N++){const z=s[N];if(z.cacheKey===M){L=z,++L.usedTimes;break}}return L===void 0&&(L=new o_(a,M,y,r),s.push(L)),L}function w(y){if(--y.usedTimes===0){const M=s.indexOf(y);s[M]=s[s.length-1],s.pop(),y.destroy()}}return{getParameters:g,getProgramCacheKey:f,getUniforms:x,acquireProgram:S,releaseProgram:w,programs:s}}function c_(){let a=new WeakMap;function e(n){let s=a.get(n);return s===void 0&&(s={},a.set(n,s)),s}function t(n){a.delete(n)}function i(n,s,o){a.get(n)[s]=o}function r(){a=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function h_(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.program!==e.program?a.program.id-e.program.id:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function vh(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function _h(a){const e=[];let t=0;const i=[],r=[],n=[],s={id:-1};function o(){t=0,i.length=0,r.length=0,n.length=0}function l(p,m,v,_,g,f){let x=e[t];const S=a.get(v);return x===void 0?(x={id:p.id,object:p,geometry:m,material:v,program:S.program||s,groupOrder:_,renderOrder:p.renderOrder,z:g,group:f},e[t]=x):(x.id=p.id,x.object=p,x.geometry=m,x.material=v,x.program=S.program||s,x.groupOrder=_,x.renderOrder=p.renderOrder,x.z=g,x.group=f),t++,x}function c(p,m,v,_,g,f){const x=l(p,m,v,_,g,f);v.transmission>0?r.push(x):v.transparent===!0?n.push(x):i.push(x)}function h(p,m,v,_,g,f){const x=l(p,m,v,_,g,f);v.transmission>0?r.unshift(x):v.transparent===!0?n.unshift(x):i.unshift(x)}function u(p,m){i.length>1&&i.sort(p||h_),r.length>1&&r.sort(m||vh),n.length>1&&n.sort(m||vh)}function d(){for(let p=t,m=e.length;p<m;p++){const v=e[p];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.program=null,v.group=null}}return{opaque:i,transmissive:r,transparent:n,init:o,push:c,unshift:h,finish:d,sort:u}}function u_(a){let e=new WeakMap;function t(r,n){let s;return e.has(r)===!1?(s=new _h(a),e.set(r,[s])):n>=e.get(r).length?(s=new _h(a),e.get(r).push(s)):s=e.get(r)[n],s}function i(){e=new WeakMap}return{get:t,dispose:i}}function d_(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new b,color:new Z};break;case"SpotLight":t={position:new b,direction:new b,color:new Z,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new b,color:new Z,distance:0,decay:0};break;case"HemisphereLight":t={direction:new b,skyColor:new Z,groundColor:new Z};break;case"RectAreaLight":t={color:new Z,position:new b,halfWidth:new b,halfHeight:new b};break}return a[e.id]=t,t}}}function p_(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new X};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new X};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new X,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}let f_=0;function m_(a,e){return(e.castShadow?1:0)-(a.castShadow?1:0)}function g_(a,e){const t=new d_,i=p_(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let h=0;h<9;h++)r.probe.push(new b);const n=new b,s=new ee,o=new ee;function l(h){let u=0,d=0,p=0;for(let M=0;M<9;M++)r.probe[M].set(0,0,0);let m=0,v=0,_=0,g=0,f=0,x=0,S=0,w=0;h.sort(m_);for(let M=0,L=h.length;M<L;M++){const N=h[M],R=N.color,z=N.intensity,H=N.distance,I=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)u+=R.r*z,d+=R.g*z,p+=R.b*z;else if(N.isLightProbe)for(let F=0;F<9;F++)r.probe[F].addScaledVector(N.sh.coefficients[F],z);else if(N.isDirectionalLight){const F=t.get(N);if(F.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const P=N.shadow,C=i.get(N);C.shadowBias=P.bias,C.shadowNormalBias=P.normalBias,C.shadowRadius=P.radius,C.shadowMapSize=P.mapSize,r.directionalShadow[m]=C,r.directionalShadowMap[m]=I,r.directionalShadowMatrix[m]=N.shadow.matrix,x++}r.directional[m]=F,m++}else if(N.isSpotLight){const F=t.get(N);if(F.position.setFromMatrixPosition(N.matrixWorld),F.color.copy(R).multiplyScalar(z),F.distance=H,F.coneCos=Math.cos(N.angle),F.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),F.decay=N.decay,N.castShadow){const P=N.shadow,C=i.get(N);C.shadowBias=P.bias,C.shadowNormalBias=P.normalBias,C.shadowRadius=P.radius,C.shadowMapSize=P.mapSize,r.spotShadow[_]=C,r.spotShadowMap[_]=I,r.spotShadowMatrix[_]=N.shadow.matrix,w++}r.spot[_]=F,_++}else if(N.isRectAreaLight){const F=t.get(N);F.color.copy(R).multiplyScalar(z),F.halfWidth.set(N.width*.5,0,0),F.halfHeight.set(0,N.height*.5,0),r.rectArea[g]=F,g++}else if(N.isPointLight){const F=t.get(N);if(F.color.copy(N.color).multiplyScalar(N.intensity),F.distance=N.distance,F.decay=N.decay,N.castShadow){const P=N.shadow,C=i.get(N);C.shadowBias=P.bias,C.shadowNormalBias=P.normalBias,C.shadowRadius=P.radius,C.shadowMapSize=P.mapSize,C.shadowCameraNear=P.camera.near,C.shadowCameraFar=P.camera.far,r.pointShadow[v]=C,r.pointShadowMap[v]=I,r.pointShadowMatrix[v]=N.shadow.matrix,S++}r.point[v]=F,v++}else if(N.isHemisphereLight){const F=t.get(N);F.skyColor.copy(N.color).multiplyScalar(z),F.groundColor.copy(N.groundColor).multiplyScalar(z),r.hemi[f]=F,f++}}g>0&&(e.isWebGL2||a.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ne.LTC_FLOAT_1,r.rectAreaLTC2=ne.LTC_FLOAT_2):a.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ne.LTC_HALF_1,r.rectAreaLTC2=ne.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=u,r.ambient[1]=d,r.ambient[2]=p;const y=r.hash;(y.directionalLength!==m||y.pointLength!==v||y.spotLength!==_||y.rectAreaLength!==g||y.hemiLength!==f||y.numDirectionalShadows!==x||y.numPointShadows!==S||y.numSpotShadows!==w)&&(r.directional.length=m,r.spot.length=_,r.rectArea.length=g,r.point.length=v,r.hemi.length=f,r.directionalShadow.length=x,r.directionalShadowMap.length=x,r.pointShadow.length=S,r.pointShadowMap.length=S,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=x,r.pointShadowMatrix.length=S,r.spotShadowMatrix.length=w,y.directionalLength=m,y.pointLength=v,y.spotLength=_,y.rectAreaLength=g,y.hemiLength=f,y.numDirectionalShadows=x,y.numPointShadows=S,y.numSpotShadows=w,r.version=f_++)}function c(h,u){let d=0,p=0,m=0,v=0,_=0;const g=u.matrixWorldInverse;for(let f=0,x=h.length;f<x;f++){const S=h[f];if(S.isDirectionalLight){const w=r.directional[d];w.direction.setFromMatrixPosition(S.matrixWorld),n.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(n),w.direction.transformDirection(g),d++}else if(S.isSpotLight){const w=r.spot[m];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(g),w.direction.setFromMatrixPosition(S.matrixWorld),n.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(n),w.direction.transformDirection(g),m++}else if(S.isRectAreaLight){const w=r.rectArea[v];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(g),o.identity(),s.copy(S.matrixWorld),s.premultiply(g),o.extractRotation(s),w.halfWidth.set(S.width*.5,0,0),w.halfHeight.set(0,S.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),v++}else if(S.isPointLight){const w=r.point[p];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(g),p++}else if(S.isHemisphereLight){const w=r.hemi[_];w.direction.setFromMatrixPosition(S.matrixWorld),w.direction.transformDirection(g),w.direction.normalize(),_++}}}return{setup:l,setupView:c,state:r}}function xh(a,e){const t=new g_(a,e),i=[],r=[];function n(){i.length=0,r.length=0}function s(h){i.push(h)}function o(h){r.push(h)}function l(){t.setup(i)}function c(h){t.setupView(i,h)}return{init:n,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:s,pushShadow:o}}function v_(a,e){let t=new WeakMap;function i(n,s=0){let o;return t.has(n)===!1?(o=new xh(a,e),t.set(n,[o])):s>=t.get(n).length?(o=new xh(a,e),t.get(n).push(o)):o=t.get(n)[s],o}function r(){t=new WeakMap}return{get:i,dispose:r}}class yh extends pt{constructor(e){super(),this.type="MeshDepthMaterial",this.depthPacking=Hf,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.morphTargets=e.morphTargets,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}yh.prototype.isMeshDepthMaterial=!0;class wh extends pt{constructor(e){super(),this.type="MeshDistanceMaterial",this.referencePosition=new b,this.nearDistance=1,this.farDistance=1e3,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.morphTargets=e.morphTargets,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}wh.prototype.isMeshDistanceMaterial=!0;var __=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	float mean = 0.0;
	float squared_mean = 0.0;
	float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy ) / resolution ) );
	for ( float i = -1.0; i < 1.0 ; i += SAMPLE_RATE) {
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( i, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, i ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean * HALF_SAMPLE_RATE;
	squared_mean = squared_mean * HALF_SAMPLE_RATE;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`,x_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`;function bh(a,e,t){let i=new Qa;const r=new X,n=new X,s=new Ue,o=[],l=[],c={},h=t.maxTextureSize,u={0:nt,1:fr,2:Mi},d=new mt({defines:{SAMPLE_RATE:2/8,HALF_SAMPLE_RATE:1/8},uniforms:{shadow_pass:{value:null},resolution:{value:new X},radius:{value:4}},vertexShader:x_,fragmentShader:__}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const m=new Fe;m.setAttribute("position",new Ke(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new qe(m,d),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ac,this.render=function(y,M,L){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||y.length===0)return;const N=a.getRenderTarget(),R=a.getActiveCubeFace(),z=a.getActiveMipmapLevel(),H=a.state;H.setBlending(yn),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);for(let I=0,F=y.length;I<F;I++){const P=y[I],C=P.shadow;if(C===void 0){console.warn("THREE.WebGLShadowMap:",P,"has no shadow.");continue}if(C.autoUpdate===!1&&C.needsUpdate===!1)continue;r.copy(C.mapSize);const O=C.getFrameExtents();if(r.multiply(O),n.copy(C.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(n.x=Math.floor(h/O.x),r.x=n.x*O.x,C.mapSize.x=n.x),r.y>h&&(n.y=Math.floor(h/O.y),r.y=n.y*O.y,C.mapSize.y=n.y)),C.map===null&&!C.isPointLightShadow&&this.type===xn){const G={minFilter:ut,magFilter:ut,format:Ct};C.map=new Ft(r.x,r.y,G),C.map.texture.name=P.name+".shadowMap",C.mapPass=new Ft(r.x,r.y,G),C.camera.updateProjectionMatrix()}if(C.map===null){const G={minFilter:lt,magFilter:lt,format:Ct};C.map=new Ft(r.x,r.y,G),C.map.texture.name=P.name+".shadowMap",C.camera.updateProjectionMatrix()}a.setRenderTarget(C.map),a.clear();const Y=C.getViewportCount();for(let G=0;G<Y;G++){const ie=C.getViewport(G);s.set(n.x*ie.x,n.y*ie.y,n.x*ie.z,n.y*ie.w),H.viewport(s),C.updateMatrices(P,G),i=C.getFrustum(),w(M,L,C.camera,P,this.type)}!C.isPointLightShadow&&this.type===xn&&g(C,L),C.needsUpdate=!1}_.needsUpdate=!1,a.setRenderTarget(N,R,z)};function g(y,M){const L=e.update(v);d.uniforms.shadow_pass.value=y.map.texture,d.uniforms.resolution.value=y.mapSize,d.uniforms.radius.value=y.radius,a.setRenderTarget(y.mapPass),a.clear(),a.renderBufferDirect(M,null,L,d,v,null),p.uniforms.shadow_pass.value=y.mapPass.texture,p.uniforms.resolution.value=y.mapSize,p.uniforms.radius.value=y.radius,a.setRenderTarget(y.map),a.clear(),a.renderBufferDirect(M,null,L,p,v,null)}function f(y){const M=y<<0;let L=o[M];return L===void 0&&(L=new yh({depthPacking:kf,morphTargets:y}),o[M]=L),L}function x(y){const M=y<<0;let L=l[M];return L===void 0&&(L=new wh({morphTargets:y}),l[M]=L),L}function S(y,M,L,N,R,z,H){let I=null,F=f,P=y.customDepthMaterial;if(N.isPointLight===!0&&(F=x,P=y.customDistanceMaterial),P===void 0){let C=!1;L.morphTargets===!0&&(C=M.morphAttributes&&M.morphAttributes.position&&M.morphAttributes.position.length>0),I=F(C)}else I=P;if(a.localClippingEnabled&&L.clipShadows===!0&&L.clippingPlanes.length!==0){const C=I.uuid,O=L.uuid;let Y=c[C];Y===void 0&&(Y={},c[C]=Y);let G=Y[O];G===void 0&&(G=I.clone(),Y[O]=G),I=G}return I.visible=L.visible,I.wireframe=L.wireframe,H===xn?I.side=L.shadowSide!==null?L.shadowSide:L.side:I.side=L.shadowSide!==null?L.shadowSide:u[L.side],I.clipShadows=L.clipShadows,I.clippingPlanes=L.clippingPlanes,I.clipIntersection=L.clipIntersection,I.wireframeLinewidth=L.wireframeLinewidth,I.linewidth=L.linewidth,N.isPointLight===!0&&I.isMeshDistanceMaterial===!0&&(I.referencePosition.setFromMatrixPosition(N.matrixWorld),I.nearDistance=R,I.farDistance=z),I}function w(y,M,L,N,R){if(y.visible===!1)return;if(y.layers.test(M.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&R===xn)&&(!y.frustumCulled||i.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,y.matrixWorld);const H=e.update(y),I=y.material;if(Array.isArray(I)){const F=H.groups;for(let P=0,C=F.length;P<C;P++){const O=F[P],Y=I[O.materialIndex];if(Y&&Y.visible){const G=S(y,H,Y,N,L.near,L.far,R);a.renderBufferDirect(L,null,H,G,y,O)}}}else if(I.visible){const F=S(y,H,I,N,L.near,L.far,R);a.renderBufferDirect(L,null,H,F,y,null)}}const z=y.children;for(let H=0,I=z.length;H<I;H++)w(z[H],M,L,N,R)}}function y_(a,e,t){const i=t.isWebGL2;function r(){let D=!1;const re=new Ue;let W=null;const xe=new Ue(0,0,0,0);return{setMask:function(se){W!==se&&!D&&(a.colorMask(se,se,se,se),W=se)},setLocked:function(se){D=se},setClear:function(se,rt,yt,wt,Wi){Wi===!0&&(se*=wt,rt*=wt,yt*=wt),re.set(se,rt,yt,wt),xe.equals(re)===!1&&(a.clearColor(se,rt,yt,wt),xe.copy(re))},reset:function(){D=!1,W=null,xe.set(-1,0,0,0)}}}function n(){let D=!1,re=null,W=null,xe=null;return{setTest:function(se){se?_e(2929):ce(2929)},setMask:function(se){re!==se&&!D&&(a.depthMask(se),re=se)},setFunc:function(se){if(W!==se){if(se)switch(se){case Mp:a.depthFunc(512);break;case Tp:a.depthFunc(519);break;case Ap:a.depthFunc(513);break;case Hs:a.depthFunc(515);break;case Ep:a.depthFunc(514);break;case Lp:a.depthFunc(518);break;case Pp:a.depthFunc(516);break;case Cp:a.depthFunc(517);break;default:a.depthFunc(515)}else a.depthFunc(515);W=se}},setLocked:function(se){D=se},setClear:function(se){xe!==se&&(a.clearDepth(se),xe=se)},reset:function(){D=!1,re=null,W=null,xe=null}}}function s(){let D=!1,re=null,W=null,xe=null,se=null,rt=null,yt=null,wt=null,Wi=null;return{setTest:function($e){D||($e?_e(2960):ce(2960))},setMask:function($e){re!==$e&&!D&&(a.stencilMask($e),re=$e)},setFunc:function($e,si,jt){(W!==$e||xe!==si||se!==jt)&&(a.stencilFunc($e,si,jt),W=$e,xe=si,se=jt)},setOp:function($e,si,jt){(rt!==$e||yt!==si||wt!==jt)&&(a.stencilOp($e,si,jt),rt=$e,yt=si,wt=jt)},setLocked:function($e){D=$e},setClear:function($e){Wi!==$e&&(a.clearStencil($e),Wi=$e)},reset:function(){D=!1,re=null,W=null,xe=null,se=null,rt=null,yt=null,wt=null,Wi=null}}}const o=new r,l=new n,c=new s;let h={},u=null,d={},p=null,m=!1,v=null,_=null,g=null,f=null,x=null,S=null,w=null,y=!1,M=null,L=null,N=null,R=null,z=null;const H=a.getParameter(35661);let I=!1,F=0;const P=a.getParameter(7938);P.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(P)[1]),I=F>=1):P.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(P)[1]),I=F>=2);let C=null,O={};const Y=a.getParameter(3088),G=a.getParameter(2978),ie=new Ue().fromArray(Y),te=new Ue().fromArray(G);function pe(D,re,W){const xe=new Uint8Array(4),se=a.createTexture();a.bindTexture(D,se),a.texParameteri(D,10241,9728),a.texParameteri(D,10240,9728);for(let rt=0;rt<W;rt++)a.texImage2D(re+rt,0,6408,1,1,0,6408,5121,xe);return se}const he={};he[3553]=pe(3553,3553,1),he[34067]=pe(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),_e(2929),l.setFunc(Hs),$(!1),le(nc),_e(2884),Q(yn);function _e(D){h[D]!==!0&&(a.enable(D),h[D]=!0)}function ce(D){h[D]!==!1&&(a.disable(D),h[D]=!1)}function V(D){D!==u&&(a.bindFramebuffer(36160,D),u=D)}function Ze(D,re){return re===null&&u!==null&&(re=u),d[D]!==re?(a.bindFramebuffer(D,re),d[D]=re,i&&(D===36009&&(d[36160]=re),D===36160&&(d[36009]=re)),!0):!1}function Pe(D){return p!==D?(a.useProgram(D),p=D,!0):!1}const fe={[qi]:32774,[fp]:32778,[mp]:32779};if(i)fe[uc]=32775,fe[dc]=32776;else{const D=e.get("EXT_blend_minmax");D!==null&&(fe[uc]=D.MIN_EXT,fe[dc]=D.MAX_EXT)}const me={[gp]:0,[wn]:1,[vp]:768,[pc]:770,[Sp]:776,[wp]:774,[xp]:772,[_p]:769,[fc]:771,[bp]:775,[yp]:773};function Q(D,re,W,xe,se,rt,yt,wt){if(D===yn){m===!0&&(ce(3042),m=!1);return}if(m===!1&&(_e(3042),m=!0),D!==hc){if(D!==v||wt!==y){if((_!==qi||x!==qi)&&(a.blendEquation(32774),_=qi,x=qi),wt)switch(D){case mr:a.blendFuncSeparate(1,771,1,771);break;case xa:a.blendFunc(1,1);break;case lc:a.blendFuncSeparate(0,0,769,771);break;case cc:a.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case mr:a.blendFuncSeparate(770,771,1,771);break;case xa:a.blendFunc(770,1);break;case lc:a.blendFunc(0,769);break;case cc:a.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}g=null,f=null,S=null,w=null,v=D,y=wt}return}se=se||re,rt=rt||W,yt=yt||xe,(re!==_||se!==x)&&(a.blendEquationSeparate(fe[re],fe[se]),_=re,x=se),(W!==g||xe!==f||rt!==S||yt!==w)&&(a.blendFuncSeparate(me[W],me[xe],me[rt],me[yt]),g=W,f=xe,S=rt,w=yt),v=D,y=null}function q(D,re){D.side===Mi?ce(2884):_e(2884);let W=D.side===nt;re&&(W=!W),$(W),D.blending===mr&&D.transparent===!1?Q(yn):Q(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),o.setMask(D.colorWrite);const xe=D.stencilWrite;c.setTest(xe),xe&&(c.setMask(D.stencilWriteMask),c.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),c.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Me(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?_e(32926):ce(32926)}function $(D){M!==D&&(D?a.frontFace(2304):a.frontFace(2305),M=D)}function le(D){D!==dp?(_e(2884),D!==L&&(D===nc?a.cullFace(1029):D===pp?a.cullFace(1028):a.cullFace(1032))):ce(2884),L=D}function ae(D){D!==N&&(I&&a.lineWidth(D),N=D)}function Me(D,re,W){D?(_e(32823),(R!==re||z!==W)&&(a.polygonOffset(re,W),R=re,z=W)):ce(32823)}function E(D){D?_e(3089):ce(3089)}function A(D){D===void 0&&(D=33984+H-1),C!==D&&(a.activeTexture(D),C=D)}function j(D,re){C===null&&A();let W=O[C];W===void 0&&(W={type:void 0,texture:void 0},O[C]=W),(W.type!==D||W.texture!==re)&&(a.bindTexture(D,re||he[D]),W.type=D,W.texture=re)}function J(){const D=O[C];D!==void 0&&D.type!==void 0&&(a.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function ue(){try{a.compressedTexImage2D.apply(a,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function oe(){try{a.texImage2D.apply(a,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ge(){try{a.texImage3D.apply(a,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Se(D){ie.equals(D)===!1&&(a.scissor(D.x,D.y,D.z,D.w),ie.copy(D))}function Ae(D){te.equals(D)===!1&&(a.viewport(D.x,D.y,D.z,D.w),te.copy(D))}function de(){a.disable(3042),a.disable(2884),a.disable(2929),a.disable(32823),a.disable(3089),a.disable(2960),a.disable(32926),a.blendEquation(32774),a.blendFunc(1,0),a.blendFuncSeparate(1,0,1,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(513),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(519,0,4294967295),a.stencilOp(7680,7680,7680),a.clearStencil(0),a.cullFace(1029),a.frontFace(2305),a.polygonOffset(0,0),a.activeTexture(33984),a.bindFramebuffer(36160,null),i===!0&&(a.bindFramebuffer(36009,null),a.bindFramebuffer(36008,null)),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),h={},C=null,O={},u=null,d={},p=null,m=!1,v=null,_=null,g=null,f=null,x=null,S=null,w=null,y=!1,M=null,L=null,N=null,R=null,z=null,ie.set(0,0,a.canvas.width,a.canvas.height),te.set(0,0,a.canvas.width,a.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:_e,disable:ce,bindFramebuffer:Ze,bindXRFramebuffer:V,useProgram:Pe,setBlending:Q,setMaterial:q,setFlipSided:$,setCullFace:le,setLineWidth:ae,setPolygonOffset:Me,setScissorTest:E,activeTexture:A,bindTexture:j,unbindTexture:J,compressedTexImage2D:ue,texImage2D:oe,texImage3D:ge,scissor:Se,viewport:Ae,reset:de}}function w_(a,e,t,i,r,n,s){const o=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,h=r.maxTextureSize,u=r.maxSamples,d=new WeakMap;let p,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(E,A){return m?new OffscreenCanvas(E,A):document.createElementNS("http://www.w3.org/1999/xhtml","canvas")}function _(E,A,j,J){let ue=1;if((E.width>J||E.height>J)&&(ue=J/Math.max(E.width,E.height)),ue<1||A===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){const oe=A?Ic:Math.floor,ge=oe(ue*E.width),Se=oe(ue*E.height);p===void 0&&(p=v(ge,Se));const Ae=j?v(ge,Se):p;return Ae.width=ge,Ae.height=Se,Ae.getContext("2d").drawImage(E,0,0,ge,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+ge+"x"+Se+")."),Ae}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function g(E){return Ks(E.width)&&Ks(E.height)}function f(E){return o?!1:E.wrapS!==St||E.wrapT!==St||E.minFilter!==lt&&E.minFilter!==ut}function x(E,A){return E.generateMipmaps&&A&&E.minFilter!==lt&&E.minFilter!==ut}function S(E,A,j,J,ue=1){a.generateMipmap(E);const oe=i.get(A);oe.__maxMipLevel=Math.log2(Math.max(j,J,ue))}function w(E,A,j){if(o===!1)return A;if(E!==null){if(a[E]!==void 0)return a[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let J=A;return A===6403&&(j===5126&&(J=33326),j===5131&&(J=33325),j===5121&&(J=33321)),A===6407&&(j===5126&&(J=34837),j===5131&&(J=34843),j===5121&&(J=32849)),A===6408&&(j===5126&&(J=34836),j===5131&&(J=34842),j===5121&&(J=32856)),(J===33325||J===33326||J===34842||J===34836)&&e.get("EXT_color_buffer_float"),J}function y(E){return E===lt||E===js||E===Ys?9728:9729}function M(E){const A=E.target;A.removeEventListener("dispose",M),N(A),A.isVideoTexture&&d.delete(A),s.memory.textures--}function L(E){const A=E.target;A.removeEventListener("dispose",L),R(A)}function N(E){const A=i.get(E);A.__webglInit!==void 0&&(a.deleteTexture(A.__webglTexture),i.remove(E))}function R(E){const A=E.texture,j=i.get(E),J=i.get(A);if(E){if(J.__webglTexture!==void 0&&(a.deleteTexture(J.__webglTexture),s.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let ue=0;ue<6;ue++)a.deleteFramebuffer(j.__webglFramebuffer[ue]),j.__webglDepthbuffer&&a.deleteRenderbuffer(j.__webglDepthbuffer[ue]);else a.deleteFramebuffer(j.__webglFramebuffer),j.__webglDepthbuffer&&a.deleteRenderbuffer(j.__webglDepthbuffer),j.__webglMultisampledFramebuffer&&a.deleteFramebuffer(j.__webglMultisampledFramebuffer),j.__webglColorRenderbuffer&&a.deleteRenderbuffer(j.__webglColorRenderbuffer),j.__webglDepthRenderbuffer&&a.deleteRenderbuffer(j.__webglDepthRenderbuffer);if(E.isWebGLMultipleRenderTargets)for(let ue=0,oe=A.length;ue<oe;ue++){const ge=i.get(A[ue]);ge.__webglTexture&&(a.deleteTexture(ge.__webglTexture),s.memory.textures--),i.remove(A[ue])}i.remove(A),i.remove(E)}}let z=0;function H(){z=0}function I(){const E=z;return E>=l&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+l),z+=1,E}function F(E,A){const j=i.get(E);if(E.isVideoTexture&&q(E),E.version>0&&j.__version!==E.version){const J=E.image;if(J===void 0)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pe(j,E,A);return}}t.activeTexture(33984+A),t.bindTexture(3553,j.__webglTexture)}function P(E,A){const j=i.get(E);if(E.version>0&&j.__version!==E.version){pe(j,E,A);return}t.activeTexture(33984+A),t.bindTexture(35866,j.__webglTexture)}function C(E,A){const j=i.get(E);if(E.version>0&&j.__version!==E.version){pe(j,E,A);return}t.activeTexture(33984+A),t.bindTexture(32879,j.__webglTexture)}function O(E,A){const j=i.get(E);if(E.version>0&&j.__version!==E.version){he(j,E,A);return}t.activeTexture(33984+A),t.bindTexture(34067,j.__webglTexture)}const Y={[at]:10497,[St]:33071,[wa]:33648},G={[lt]:9728,[js]:9984,[Ys]:9986,[ut]:9729,[vc]:9985,[vr]:9987};function ie(E,A,j){if(j?(a.texParameteri(E,10242,Y[A.wrapS]),a.texParameteri(E,10243,Y[A.wrapT]),(E===32879||E===35866)&&a.texParameteri(E,32882,Y[A.wrapR]),a.texParameteri(E,10240,G[A.magFilter]),a.texParameteri(E,10241,G[A.minFilter])):(a.texParameteri(E,10242,33071),a.texParameteri(E,10243,33071),(E===32879||E===35866)&&a.texParameteri(E,32882,33071),(A.wrapS!==St||A.wrapT!==St)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),a.texParameteri(E,10240,y(A.magFilter)),a.texParameteri(E,10241,y(A.minFilter)),A.minFilter!==lt&&A.minFilter!==ut&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const J=e.get("EXT_texture_filter_anisotropic");if(A.type===li&&e.has("OES_texture_float_linear")===!1||o===!1&&A.type===_r&&e.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||i.get(A).__currentAnisotropy)&&(a.texParameterf(E,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,r.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy)}}function te(E,A){E.__webglInit===void 0&&(E.__webglInit=!0,A.addEventListener("dispose",M),E.__webglTexture=a.createTexture(),s.memory.textures++)}function pe(E,A,j){let J=3553;A.isDataTexture2DArray&&(J=35866),A.isDataTexture3D&&(J=32879),te(E,A),t.activeTexture(33984+j),t.bindTexture(J,E.__webglTexture),a.pixelStorei(37440,A.flipY),a.pixelStorei(37441,A.premultiplyAlpha),a.pixelStorei(3317,A.unpackAlignment),a.pixelStorei(37443,0);const ue=f(A)&&g(A.image)===!1,oe=_(A.image,ue,!1,h),ge=g(oe)||o,Se=n.convert(A.format);let Ae=n.convert(A.type),de=w(A.internalFormat,Se,Ae);ie(J,A,ge);let D;const re=A.mipmaps;if(A.isDepthTexture)de=6402,o?A.type===li?de=36012:A.type===Ma?de=33190:A.type===bn?de=35056:de=33189:A.type===li&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===xr&&de===6402&&A.type!==Sa&&A.type!==Ma&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=Sa,Ae=n.convert(A.type)),A.format===Sn&&de===6402&&(de=34041,A.type!==bn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=bn,Ae=n.convert(A.type))),t.texImage2D(3553,0,de,oe.width,oe.height,0,Se,Ae,null);else if(A.isDataTexture)if(re.length>0&&ge){for(let W=0,xe=re.length;W<xe;W++)D=re[W],t.texImage2D(3553,W,de,D.width,D.height,0,Se,Ae,D.data);A.generateMipmaps=!1,E.__maxMipLevel=re.length-1}else t.texImage2D(3553,0,de,oe.width,oe.height,0,Se,Ae,oe.data),E.__maxMipLevel=0;else if(A.isCompressedTexture){for(let W=0,xe=re.length;W<xe;W++)D=re[W],A.format!==Ct&&A.format!==Ti?Se!==null?t.compressedTexImage2D(3553,W,de,D.width,D.height,0,D.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):t.texImage2D(3553,W,de,D.width,D.height,0,Se,Ae,D.data);E.__maxMipLevel=re.length-1}else if(A.isDataTexture2DArray)t.texImage3D(35866,0,de,oe.width,oe.height,oe.depth,0,Se,Ae,oe.data),E.__maxMipLevel=0;else if(A.isDataTexture3D)t.texImage3D(32879,0,de,oe.width,oe.height,oe.depth,0,Se,Ae,oe.data),E.__maxMipLevel=0;else if(re.length>0&&ge){for(let W=0,xe=re.length;W<xe;W++)D=re[W],t.texImage2D(3553,W,de,Se,Ae,D);A.generateMipmaps=!1,E.__maxMipLevel=re.length-1}else t.texImage2D(3553,0,de,Se,Ae,oe),E.__maxMipLevel=0;x(A,ge)&&S(J,A,oe.width,oe.height),E.__version=A.version,A.onUpdate&&A.onUpdate(A)}function he(E,A,j){if(A.image.length!==6)return;te(E,A),t.activeTexture(33984+j),t.bindTexture(34067,E.__webglTexture),a.pixelStorei(37440,A.flipY),a.pixelStorei(37441,A.premultiplyAlpha),a.pixelStorei(3317,A.unpackAlignment),a.pixelStorei(37443,0);const J=A&&(A.isCompressedTexture||A.image[0].isCompressedTexture),ue=A.image[0]&&A.image[0].isDataTexture,oe=[];for(let W=0;W<6;W++)!J&&!ue?oe[W]=_(A.image[W],!1,!0,c):oe[W]=ue?A.image[W].image:A.image[W];const ge=oe[0],Se=g(ge)||o,Ae=n.convert(A.format),de=n.convert(A.type),D=w(A.internalFormat,Ae,de);ie(34067,A,Se);let re;if(J){for(let W=0;W<6;W++){re=oe[W].mipmaps;for(let xe=0;xe<re.length;xe++){const se=re[xe];A.format!==Ct&&A.format!==Ti?Ae!==null?t.compressedTexImage2D(34069+W,xe,D,se.width,se.height,0,se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):t.texImage2D(34069+W,xe,D,se.width,se.height,0,Ae,de,se.data)}}E.__maxMipLevel=re.length-1}else{re=A.mipmaps;for(let W=0;W<6;W++)if(ue){t.texImage2D(34069+W,0,D,oe[W].width,oe[W].height,0,Ae,de,oe[W].data);for(let xe=0;xe<re.length;xe++){const se=re[xe].image[W].image;t.texImage2D(34069+W,xe+1,D,se.width,se.height,0,Ae,de,se.data)}}else{t.texImage2D(34069+W,0,D,Ae,de,oe[W]);for(let xe=0;xe<re.length;xe++){const se=re[xe];t.texImage2D(34069+W,xe+1,D,Ae,de,se.image[W])}}E.__maxMipLevel=re.length}x(A,Se)&&S(34067,A,ge.width,ge.height),E.__version=A.version,A.onUpdate&&A.onUpdate(A)}function _e(E,A,j,J,ue){const oe=n.convert(j.format),ge=n.convert(j.type),Se=w(j.internalFormat,oe,ge);ue===32879||ue===35866?t.texImage3D(ue,0,Se,A.width,A.height,A.depth,0,oe,ge,null):t.texImage2D(ue,0,Se,A.width,A.height,0,oe,ge,null),t.bindFramebuffer(36160,E),a.framebufferTexture2D(36160,J,ue,i.get(j).__webglTexture,0),t.bindFramebuffer(36160,null)}function ce(E,A,j){if(a.bindRenderbuffer(36161,E),A.depthBuffer&&!A.stencilBuffer){let J=33189;if(j){const ue=A.depthTexture;ue&&ue.isDepthTexture&&(ue.type===li?J=36012:ue.type===Ma&&(J=33190));const oe=Q(A);a.renderbufferStorageMultisample(36161,oe,J,A.width,A.height)}else a.renderbufferStorage(36161,J,A.width,A.height);a.framebufferRenderbuffer(36160,36096,36161,E)}else if(A.depthBuffer&&A.stencilBuffer){if(j){const J=Q(A);a.renderbufferStorageMultisample(36161,J,35056,A.width,A.height)}else a.renderbufferStorage(36161,34041,A.width,A.height);a.framebufferRenderbuffer(36160,33306,36161,E)}else{const J=A.isWebGLMultipleRenderTargets===!0?A.texture[0]:A.texture,ue=n.convert(J.format),oe=n.convert(J.type),ge=w(J.internalFormat,ue,oe);if(j){const Se=Q(A);a.renderbufferStorageMultisample(36161,Se,ge,A.width,A.height)}else a.renderbufferStorage(36161,ge,A.width,A.height)}a.bindRenderbuffer(36161,null)}function V(E,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,E),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),F(A.depthTexture,0);const j=i.get(A.depthTexture).__webglTexture;if(A.depthTexture.format===xr)a.framebufferTexture2D(36160,36096,3553,j,0);else if(A.depthTexture.format===Sn)a.framebufferTexture2D(36160,33306,3553,j,0);else throw new Error("Unknown depthTexture format")}function Ze(E){const A=i.get(E),j=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture){if(j)throw new Error("target.depthTexture not supported in Cube render targets");V(A.__webglFramebuffer,E)}else if(j){A.__webglDepthbuffer=[];for(let J=0;J<6;J++)t.bindFramebuffer(36160,A.__webglFramebuffer[J]),A.__webglDepthbuffer[J]=a.createRenderbuffer(),ce(A.__webglDepthbuffer[J],E,!1)}else t.bindFramebuffer(36160,A.__webglFramebuffer),A.__webglDepthbuffer=a.createRenderbuffer(),ce(A.__webglDepthbuffer,E,!1);t.bindFramebuffer(36160,null)}function Pe(E){const A=E.texture,j=i.get(E),J=i.get(A);E.addEventListener("dispose",L),E.isWebGLMultipleRenderTargets!==!0&&(J.__webglTexture=a.createTexture(),J.__version=A.version,s.memory.textures++);const ue=E.isWebGLCubeRenderTarget===!0,oe=E.isWebGLMultipleRenderTargets===!0,ge=E.isWebGLMultisampleRenderTarget===!0,Se=A.isDataTexture3D||A.isDataTexture2DArray,Ae=g(E)||o;if(o&&A.format===Ti&&(A.type===li||A.type===_r)&&(A.format=Ct,console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")),ue){j.__webglFramebuffer=[];for(let de=0;de<6;de++)j.__webglFramebuffer[de]=a.createFramebuffer()}else if(j.__webglFramebuffer=a.createFramebuffer(),oe)if(r.drawBuffers){const de=E.texture;for(let D=0,re=de.length;D<re;D++){const W=i.get(de[D]);W.__webglTexture===void 0&&(W.__webglTexture=a.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");else if(ge)if(o){j.__webglMultisampledFramebuffer=a.createFramebuffer(),j.__webglColorRenderbuffer=a.createRenderbuffer(),a.bindRenderbuffer(36161,j.__webglColorRenderbuffer);const de=n.convert(A.format),D=n.convert(A.type),re=w(A.internalFormat,de,D),W=Q(E);a.renderbufferStorageMultisample(36161,W,re,E.width,E.height),t.bindFramebuffer(36160,j.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064,36161,j.__webglColorRenderbuffer),a.bindRenderbuffer(36161,null),E.depthBuffer&&(j.__webglDepthRenderbuffer=a.createRenderbuffer(),ce(j.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(36160,null)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");if(ue){t.bindTexture(34067,J.__webglTexture),ie(34067,A,Ae);for(let de=0;de<6;de++)_e(j.__webglFramebuffer[de],E,A,36064,34069+de);x(A,Ae)&&S(34067,A,E.width,E.height),t.bindTexture(34067,null)}else if(oe){const de=E.texture;for(let D=0,re=de.length;D<re;D++){const W=de[D],xe=i.get(W);t.bindTexture(3553,xe.__webglTexture),ie(3553,W,Ae),_e(j.__webglFramebuffer,E,W,36064+D,3553),x(W,Ae)&&S(3553,W,E.width,E.height)}t.bindTexture(3553,null)}else{let de=3553;Se&&(o?de=A.isDataTexture3D?32879:35866:console.warn("THREE.DataTexture3D and THREE.DataTexture2DArray only supported with WebGL2.")),t.bindTexture(de,J.__webglTexture),ie(de,A,Ae),_e(j.__webglFramebuffer,E,A,36064,de),x(A,Ae)&&S(de,A,E.width,E.height,E.depth),t.bindTexture(de,null)}E.depthBuffer&&Ze(E)}function fe(E){const A=g(E)||o,j=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let J=0,ue=j.length;J<ue;J++){const oe=j[J];if(x(oe,A)){const ge=E.isWebGLCubeRenderTarget?34067:3553,Se=i.get(oe).__webglTexture;t.bindTexture(ge,Se),S(ge,oe,E.width,E.height),t.bindTexture(ge,null)}}}function me(E){if(E.isWebGLMultisampleRenderTarget)if(o){const A=E.width,j=E.height;let J=16384;E.depthBuffer&&(J|=256),E.stencilBuffer&&(J|=1024);const ue=i.get(E);t.bindFramebuffer(36008,ue.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,ue.__webglFramebuffer),a.blitFramebuffer(0,0,A,j,0,0,A,j,J,9728),t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,ue.__webglMultisampledFramebuffer)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")}function Q(E){return o&&E.isWebGLMultisampleRenderTarget?Math.min(u,E.samples):0}function q(E){const A=s.render.frame;d.get(E)!==A&&(d.set(E,A),E.update())}let $=!1,le=!1;function ae(E,A){E&&E.isWebGLRenderTarget&&($===!1&&(console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."),$=!0),E=E.texture),F(E,A)}function Me(E,A){E&&E.isWebGLCubeRenderTarget&&(le===!1&&(console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."),le=!0),E=E.texture),O(E,A)}this.allocateTextureUnit=I,this.resetTextureUnits=H,this.setTexture2D=F,this.setTexture2DArray=P,this.setTexture3D=C,this.setTextureCube=O,this.setupRenderTarget=Pe,this.updateRenderTargetMipmap=fe,this.updateMultisampleRenderTarget=me,this.safeSetTexture2D=ae,this.safeSetTextureCube=Me}function b_(a,e,t){const i=t.isWebGL2;function r(n){let s;if(n===ba)return 5121;if(n===kp)return 32819;if(n===Gp)return 32820;if(n===Vp)return 33635;if(n===Bp)return 5120;if(n===zp)return 5122;if(n===Sa)return 5123;if(n===Hp)return 5124;if(n===Ma)return 5125;if(n===li)return 5126;if(n===_r)return i?5131:(s=e.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(n===Wp)return 6406;if(n===Ti)return 6407;if(n===Ct)return 6408;if(n===Xp)return 6409;if(n===jp)return 6410;if(n===xr)return 6402;if(n===Sn)return 34041;if(n===Yp)return 6403;if(n===Qp)return 36244;if(n===qp)return 33319;if(n===Jp)return 33320;if(n===Zp)return 36248;if(n===Kp)return 36249;if(n===_c||n===xc||n===yc||n===wc)if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===_c)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===xc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===yc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===wc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===bc||n===Sc||n===Mc||n===Tc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===bc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Sc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Mc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Tc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===$p)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if((n===Ac||n===Ec)&&(s=e.get("WEBGL_compressed_texture_etc"),s!==null)){if(n===Ac)return s.COMPRESSED_RGB8_ETC2;if(n===Ec)return s.COMPRESSED_RGBA8_ETC2_EAC}if(n===ef||n===tf||n===rf||n===nf||n===af||n===sf||n===of||n===lf||n===cf||n===hf||n===uf||n===df||n===pf||n===ff||n===gf||n===vf||n===_f||n===xf||n===yf||n===wf||n===bf||n===Sf||n===Mf||n===Tf||n===Af||n===Ef||n===Lf||n===Pf)return s=e.get("WEBGL_compressed_texture_astc"),s!==null?n:null;if(n===mf)return s=e.get("EXT_texture_compression_bptc"),s!==null?n:null;if(n===bn)return i?34042:(s=e.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null)}return{convert:r}}class Sh extends _t{constructor(e=[]){super(),this.cameras=e}}Sh.prototype.isArrayCamera=!0;class ct extends Ie{constructor(){super(),this.type="Group"}}ct.prototype.isGroup=!0;const S_={type:"move"};class Lo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ct,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ct,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new b,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new b),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ct,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new b,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new b),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,n=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred")if(o!==null&&(r=t.getPose(e.targetRaySpace,i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(S_))),c&&e.hand){s=!0;for(const v of e.hand.values()){const _=t.getJointPose(v,i);if(c.joints[v.jointName]===void 0){const f=new ct;f.matrixAutoUpdate=!1,f.visible=!1,c.joints[v.jointName]=f,c.add(f)}const g=c.joints[v.jointName];_!==null&&(g.matrix.fromArray(_.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.jointRadius=_.radius),g.visible=_!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,m=.005;c.inputState.pinching&&d>p+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(n=t.getPose(e.gripSpace,i),n!==null&&(l.matrix.fromArray(n.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),n.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(n.linearVelocity)):l.hasLinearVelocity=!1,n.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(n.angularVelocity)):l.hasAngularVelocity=!1));return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=n!==null),c!==null&&(c.visible=s!==null),this}}class M_ extends Zi{constructor(e,t){super();const i=this,r=e.state;let n=null,s=1,o=null,l="local-floor",c=null,h=null,u=null,d=null;const p=[],m=new Map,v=new _t;v.layers.enable(1),v.viewport=new Ue;const _=new _t;_.layers.enable(2),_.viewport=new Ue;const g=[v,_],f=new Sh;f.layers.enable(1),f.layers.enable(2);let x=null,S=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(P){let C=p[P];return C===void 0&&(C=new Lo,p[P]=C),C.getTargetRaySpace()},this.getControllerGrip=function(P){let C=p[P];return C===void 0&&(C=new Lo,p[P]=C),C.getGripSpace()},this.getHand=function(P){let C=p[P];return C===void 0&&(C=new Lo,p[P]=C),C.getHandSpace()};function w(P){const C=m.get(P.inputSource);C&&C.dispatchEvent({type:P.type,data:P.inputSource})}function y(){m.forEach(function(P,C){P.disconnect(C)}),m.clear(),x=null,S=null,r.bindXRFramebuffer(null),e.setRenderTarget(e.getRenderTarget()),F.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(P){s=P,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(P){l=P,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return o},this.getSession=function(){return n},this.setSession=async function(P){if(n=P,n!==null){n.addEventListener("select",w),n.addEventListener("selectstart",w),n.addEventListener("selectend",w),n.addEventListener("squeeze",w),n.addEventListener("squeezestart",w),n.addEventListener("squeezeend",w),n.addEventListener("end",y),n.addEventListener("inputsourceschange",M);const C=t.getContextAttributes();if(C.xrCompatible!==!0&&await t.makeXRCompatible(),n.renderState.layers===void 0){const O={antialias:C.antialias,alpha:C.alpha,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:s},Y=new XRWebGLLayer(n,t,O);n.updateRenderState({baseLayer:Y})}else{let O=0;C.depth&&(O=C.stencil?34041:6402);const Y={colorFormat:C.alpha?6408:6407,depthFormat:O,scaleFactor:s};h=new XRWebGLBinding(n,t),d=h.createProjectionLayer(Y),u=t.createFramebuffer(),n.updateRenderState({layers:[d]})}o=await n.requestReferenceSpace(l),F.setContext(n),F.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function M(P){const C=n.inputSources;for(let O=0;O<p.length;O++)m.set(C[O],p[O]);for(let O=0;O<P.removed.length;O++){const Y=P.removed[O],G=m.get(Y);G&&(G.dispatchEvent({type:"disconnected",data:Y}),m.delete(Y))}for(let O=0;O<P.added.length;O++){const Y=P.added[O],G=m.get(Y);G&&G.dispatchEvent({type:"connected",data:Y})}}const L=new b,N=new b;function R(P,C,O){L.setFromMatrixPosition(C.matrixWorld),N.setFromMatrixPosition(O.matrixWorld);const Y=L.distanceTo(N),G=C.projectionMatrix.elements,ie=O.projectionMatrix.elements,te=G[14]/(G[10]-1),pe=G[14]/(G[10]+1),he=(G[9]+1)/G[5],_e=(G[9]-1)/G[5],ce=(G[8]-1)/G[0],V=(ie[8]+1)/ie[0],Ze=te*ce,Pe=te*V,fe=Y/(-ce+V),me=fe*-ce;C.matrixWorld.decompose(P.position,P.quaternion,P.scale),P.translateX(me),P.translateZ(fe),P.matrixWorld.compose(P.position,P.quaternion,P.scale),P.matrixWorldInverse.copy(P.matrixWorld).invert();const Q=te+fe,q=pe+fe,$=Ze-me,le=Pe+(Y-me),ae=he*pe/q*Q,Me=_e*pe/q*Q;P.projectionMatrix.makePerspective($,le,ae,Me,Q,q)}function z(P,C){C===null?P.matrixWorld.copy(P.matrix):P.matrixWorld.multiplyMatrices(C.matrixWorld,P.matrix),P.matrixWorldInverse.copy(P.matrixWorld).invert()}this.updateCamera=function(P){if(n===null)return;f.near=_.near=v.near=P.near,f.far=_.far=v.far=P.far,(x!==f.near||S!==f.far)&&(n.updateRenderState({depthNear:f.near,depthFar:f.far}),x=f.near,S=f.far);const C=P.parent,O=f.cameras;z(f,C);for(let G=0;G<O.length;G++)z(O[G],C);f.matrixWorld.decompose(f.position,f.quaternion,f.scale),P.position.copy(f.position),P.quaternion.copy(f.quaternion),P.scale.copy(f.scale),P.matrix.copy(f.matrix),P.matrixWorld.copy(f.matrixWorld);const Y=P.children;for(let G=0,ie=Y.length;G<ie;G++)Y[G].updateMatrixWorld(!0);O.length===2?R(f,v,_):f.projectionMatrix.copy(v.projectionMatrix)},this.getCamera=function(){return f};let H=null;function I(P,C){if(c=C.getViewerPose(o),c!==null){const Y=c.views,G=n.renderState.baseLayer;n.renderState.layers===void 0&&r.bindXRFramebuffer(G.framebuffer);let ie=!1;Y.length!==f.cameras.length&&(f.cameras.length=0,ie=!0);for(let te=0;te<Y.length;te++){const pe=Y[te];let he=null;if(n.renderState.layers===void 0)he=G.getViewport(pe);else{const ce=h.getViewSubImage(d,pe);r.bindXRFramebuffer(u),t.framebufferTexture2D(36160,36064,3553,ce.colorTexture,0),ce.depthStencilTexture!==void 0&&t.framebufferTexture2D(36160,36096,3553,ce.depthStencilTexture,0),he=ce.viewport}const _e=g[te];_e.matrix.fromArray(pe.transform.matrix),_e.projectionMatrix.fromArray(pe.projectionMatrix),_e.viewport.set(he.x,he.y,he.width,he.height),te===0&&f.matrix.copy(_e.matrix),ie===!0&&f.cameras.push(_e)}}const O=n.inputSources;for(let Y=0;Y<p.length;Y++){const G=p[Y],ie=O[Y];G.update(ie,C,o)}H&&H(P,C)}const F=new qc;F.setAnimationLoop(I),this.setAnimationLoop=function(P){H=P},this.dispose=function(){}}}function T_(a){function e(g,f){g.fogColor.value.copy(f.color),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function t(g,f,x,S,w){f.isMeshBasicMaterial?i(g,f):f.isMeshLambertMaterial?(i(g,f),l(g,f)):f.isMeshToonMaterial?(i(g,f),h(g,f)):f.isMeshPhongMaterial?(i(g,f),c(g,f)):f.isMeshStandardMaterial?(i(g,f),f.isMeshPhysicalMaterial?d(g,f,w):u(g,f)):f.isMeshMatcapMaterial?(i(g,f),p(g,f)):f.isMeshDepthMaterial?(i(g,f),m(g,f)):f.isMeshDistanceMaterial?(i(g,f),v(g,f)):f.isMeshNormalMaterial?(i(g,f),_(g,f)):f.isLineBasicMaterial?(r(g,f),f.isLineDashedMaterial&&n(g,f)):f.isPointsMaterial?s(g,f,x,S):f.isSpriteMaterial?o(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function i(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map),f.alphaMap&&(g.alphaMap.value=f.alphaMap),f.specularMap&&(g.specularMap.value=f.specularMap);const x=a.get(f).envMap;if(x){g.envMap.value=x,g.flipEnvMap.value=x.isCubeTexture&&x._needsFlipEnvMap?-1:1,g.reflectivity.value=f.reflectivity,g.refractionRatio.value=f.refractionRatio;const y=a.get(x).__maxMipLevel;y!==void 0&&(g.maxMipLevel.value=y)}f.lightMap&&(g.lightMap.value=f.lightMap,g.lightMapIntensity.value=f.lightMapIntensity),f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity);let S;f.map?S=f.map:f.specularMap?S=f.specularMap:f.displacementMap?S=f.displacementMap:f.normalMap?S=f.normalMap:f.bumpMap?S=f.bumpMap:f.roughnessMap?S=f.roughnessMap:f.metalnessMap?S=f.metalnessMap:f.alphaMap?S=f.alphaMap:f.emissiveMap?S=f.emissiveMap:f.clearcoatMap?S=f.clearcoatMap:f.clearcoatNormalMap?S=f.clearcoatNormalMap:f.clearcoatRoughnessMap&&(S=f.clearcoatRoughnessMap),S!==void 0&&(S.isWebGLRenderTarget&&(S=S.texture),S.matrixAutoUpdate===!0&&S.updateMatrix(),g.uvTransform.value.copy(S.matrix));let w;f.aoMap?w=f.aoMap:f.lightMap&&(w=f.lightMap),w!==void 0&&(w.isWebGLRenderTarget&&(w=w.texture),w.matrixAutoUpdate===!0&&w.updateMatrix(),g.uv2Transform.value.copy(w.matrix))}function r(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity}function n(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function s(g,f,x,S){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*x,g.scale.value=S*.5,f.map&&(g.map.value=f.map),f.alphaMap&&(g.alphaMap.value=f.alphaMap);let w;f.map?w=f.map:f.alphaMap&&(w=f.alphaMap),w!==void 0&&(w.matrixAutoUpdate===!0&&w.updateMatrix(),g.uvTransform.value.copy(w.matrix))}function o(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map),f.alphaMap&&(g.alphaMap.value=f.alphaMap);let x;f.map?x=f.map:f.alphaMap&&(x=f.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),g.uvTransform.value.copy(x.matrix))}function l(g,f){f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap)}function c(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap),f.bumpMap&&(g.bumpMap.value=f.bumpMap,g.bumpScale.value=f.bumpScale,f.side===nt&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,g.normalScale.value.copy(f.normalScale),f.side===nt&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias)}function h(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap),f.bumpMap&&(g.bumpMap.value=f.bumpMap,g.bumpScale.value=f.bumpScale,f.side===nt&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,g.normalScale.value.copy(f.normalScale),f.side===nt&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias)}function u(g,f){g.roughness.value=f.roughness,g.metalness.value=f.metalness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap),f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap),f.bumpMap&&(g.bumpMap.value=f.bumpMap,g.bumpScale.value=f.bumpScale,f.side===nt&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,g.normalScale.value.copy(f.normalScale),f.side===nt&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),a.get(f).envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function d(g,f,x){u(g,f),g.reflectivity.value=f.reflectivity,g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.sheen&&g.sheen.value.copy(f.sheen),f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap),f.clearcoatNormalMap&&(g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),g.clearcoatNormalMap.value=f.clearcoatNormalMap,f.side===nt&&g.clearcoatNormalScale.value.negate()),g.transmission.value=f.transmission,f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap),f.transmission>0&&(g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)}function p(g,f){f.matcap&&(g.matcap.value=f.matcap),f.bumpMap&&(g.bumpMap.value=f.bumpMap,g.bumpScale.value=f.bumpScale,f.side===nt&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,g.normalScale.value.copy(f.normalScale),f.side===nt&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias)}function m(g,f){f.displacementMap&&(g.displacementMap.value=f.displacementMap,g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias)}function v(g,f){f.displacementMap&&(g.displacementMap.value=f.displacementMap,g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),g.referencePosition.value.copy(f.referencePosition),g.nearDistance.value=f.nearDistance,g.farDistance.value=f.farDistance}function _(g,f){f.bumpMap&&(g.bumpMap.value=f.bumpMap,g.bumpScale.value=f.bumpScale,f.side===nt&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,g.normalScale.value.copy(f.normalScale),f.side===nt&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias)}return{refreshFogUniforms:e,refreshMaterialUniforms:t}}function A_(){const a=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");return a.style.display="block",a}function Ve(a={}){const e=a.canvas!==void 0?a.canvas:A_(),t=a.context!==void 0?a.context:null,i=a.alpha!==void 0?a.alpha:!1,r=a.depth!==void 0?a.depth:!0,n=a.stencil!==void 0?a.stencil:!0,s=a.antialias!==void 0?a.antialias:!1,o=a.premultipliedAlpha!==void 0?a.premultipliedAlpha:!0,l=a.preserveDrawingBuffer!==void 0?a.preserveDrawingBuffer:!1,c=a.powerPreference!==void 0?a.powerPreference:"default",h=a.failIfMajorPerformanceCaveat!==void 0?a.failIfMajorPerformanceCaveat:!1;let u=null,d=null;const p=[],m=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.gammaFactor=2,this.outputEncoding=Tn,this.physicallyCorrectLights=!1,this.toneMapping=gr,this.toneMappingExposure=1;const v=this;let _=!1,g=0,f=0,x=null,S=-1,w=null;const y=new Ue,M=new Ue;let L=null,N=e.width,R=e.height,z=1,H=null,I=null;const F=new Ue(0,0,N,R),P=new Ue(0,0,N,R);let C=!1;const O=[],Y=new Qa;let G=!1,ie=!1,te=null;const pe=new ee,he=new b,_e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ce(){return x===null?z:1}let V=t;function Ze(T,B){for(let U=0;U<T.length;U++){const k=T[U],K=e.getContext(k,B);if(K!==null)return K}return null}try{const T={alpha:i,depth:r,stencil:n,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:h};if(e.addEventListener("webglcontextlost",rt,!1),e.addEventListener("webglcontextrestored",yt,!1),V===null){const B=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&B.shift(),V=Ze(B,T),V===null)throw Ze(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}V.getShaderPrecisionFormat===void 0&&(V.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Pe,fe,me,Q,q,$,le,ae,Me,E,A,j,J,ue,oe,ge,Se,Ae,de,D,re,W;function xe(){Pe=new qv(V),fe=new jv(V,Pe,a),Pe.init(fe),re=new b_(V,Pe,fe),me=new y_(V,Pe,fe),O[0]=1029,Q=new Kv,q=new c_,$=new w_(V,Pe,me,q,fe,re,Q),le=new Qv(v),ae=new wm(V,fe),W=new Wv(V,Pe,ae,fe),Me=new Jv(V,ae,Q,W),E=new i0(V,Me,ae,Q),Ae=new t0(V),oe=new Yv(q),A=new l_(v,le,Pe,fe,W,oe),j=new T_(q),J=new u_(q),ue=new v_(Pe,fe),Se=new Vv(v,le,me,E,o),ge=new bh(v,E,fe),de=new Xv(V,Pe,Q,fe),D=new Zv(V,Pe,Q,fe),Q.programs=A.programs,v.capabilities=fe,v.extensions=Pe,v.properties=q,v.renderLists=J,v.shadowMap=ge,v.state=me,v.info=Q}xe();const se=new M_(v,V);this.xr=se,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const T=Pe.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Pe.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(T){T!==void 0&&(z=T,this.setSize(N,R,!1))},this.getSize=function(T){return T.set(N,R)},this.setSize=function(T,B,U){if(se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=T,R=B,e.width=Math.floor(T*z),e.height=Math.floor(B*z),U!==!1&&(e.style.width=T+"px",e.style.height=B+"px"),this.setViewport(0,0,T,B)},this.getDrawingBufferSize=function(T){return T.set(N*z,R*z).floor()},this.setDrawingBufferSize=function(T,B,U){N=T,R=B,z=U,e.width=Math.floor(T*U),e.height=Math.floor(B*U),this.setViewport(0,0,T,B)},this.getCurrentViewport=function(T){return T.copy(y)},this.getViewport=function(T){return T.copy(F)},this.setViewport=function(T,B,U,k){T.isVector4?F.set(T.x,T.y,T.z,T.w):F.set(T,B,U,k),me.viewport(y.copy(F).multiplyScalar(z).floor())},this.getScissor=function(T){return T.copy(P)},this.setScissor=function(T,B,U,k){T.isVector4?P.set(T.x,T.y,T.z,T.w):P.set(T,B,U,k),me.scissor(M.copy(P).multiplyScalar(z).floor())},this.getScissorTest=function(){return C},this.setScissorTest=function(T){me.setScissorTest(C=T)},this.setOpaqueSort=function(T){H=T},this.setTransparentSort=function(T){I=T},this.getClearColor=function(T){return T.copy(Se.getClearColor())},this.setClearColor=function(){Se.setClearColor.apply(Se,arguments)},this.getClearAlpha=function(){return Se.getClearAlpha()},this.setClearAlpha=function(){Se.setClearAlpha.apply(Se,arguments)},this.clear=function(T,B,U){let k=0;(T===void 0||T)&&(k|=16384),(B===void 0||B)&&(k|=256),(U===void 0||U)&&(k|=1024),V.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",rt,!1),e.removeEventListener("webglcontextrestored",yt,!1),J.dispose(),ue.dispose(),q.dispose(),le.dispose(),E.dispose(),W.dispose(),se.dispose(),se.removeEventListener("sessionstart",jl),se.removeEventListener("sessionend",Yl),te&&(te.dispose(),te=null),Xi.stop()};function rt(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),_=!0}function yt(){console.log("THREE.WebGLRenderer: Context Restored."),_=!1;const T=Q.autoReset,B=ge.enabled,U=ge.autoUpdate,k=ge.needsUpdate,K=ge.type;xe(),Q.autoReset=T,ge.enabled=B,ge.autoUpdate=U,ge.needsUpdate=k,ge.type=K}function wt(T){const B=T.target;B.removeEventListener("dispose",wt),Wi(B)}function Wi(T){$e(T),q.remove(T)}function $e(T){const B=q.get(T).programs;B!==void 0&&B.forEach(function(U){A.releaseProgram(U)})}function si(T,B){T.render(function(U){v.renderBufferImmediate(U,B)})}this.renderBufferImmediate=function(T,B){W.initAttributes();const U=q.get(T);T.hasPositions&&!U.position&&(U.position=V.createBuffer()),T.hasNormals&&!U.normal&&(U.normal=V.createBuffer()),T.hasUvs&&!U.uv&&(U.uv=V.createBuffer()),T.hasColors&&!U.color&&(U.color=V.createBuffer());const k=B.getAttributes();T.hasPositions&&(V.bindBuffer(34962,U.position),V.bufferData(34962,T.positionArray,35048),W.enableAttribute(k.position),V.vertexAttribPointer(k.position,3,5126,!1,0,0)),T.hasNormals&&(V.bindBuffer(34962,U.normal),V.bufferData(34962,T.normalArray,35048),W.enableAttribute(k.normal),V.vertexAttribPointer(k.normal,3,5126,!1,0,0)),T.hasUvs&&(V.bindBuffer(34962,U.uv),V.bufferData(34962,T.uvArray,35048),W.enableAttribute(k.uv),V.vertexAttribPointer(k.uv,2,5126,!1,0,0)),T.hasColors&&(V.bindBuffer(34962,U.color),V.bufferData(34962,T.colorArray,35048),W.enableAttribute(k.color),V.vertexAttribPointer(k.color,3,5126,!1,0,0)),W.disableUnusedAttributes(),V.drawArrays(4,0,T.count),T.count=0},this.renderBufferDirect=function(T,B,U,k,K,ye){B===null&&(B=_e);const ve=K.isMesh&&K.matrixWorld.determinant()<0,Te=Zl(T,B,k,K);me.setMaterial(k,ve);let Ne=U.index;const we=U.attributes.position;if(Ne===null){if(we===void 0||we.count===0)return}else if(Ne.count===0)return;let De=1;k.wireframe===!0&&(Ne=Me.getWireframeAttribute(U),De=2),(k.morphTargets||k.morphNormals)&&Ae.update(K,U,k,Te),W.setup(K,k,Te,U,Ne);let Ee,Xe=de;Ne!==null&&(Ee=ae.get(Ne),Xe=D,Xe.setIndex(Ee));const $t=Ne!==null?Ne.count:we.count,Et=U.drawRange.start*De,ji=U.drawRange.count*De,je=ye!==null?ye.start*De:0,Yi=ye!==null?ye.count*De:1/0,bt=Math.max(Et,je),ap=Math.min($t,Et+ji,je+Yi)-1,pa=Math.max(0,ap-bt+1);if(pa!==0){if(K.isMesh)k.wireframe===!0?(me.setLineWidth(k.wireframeLinewidth*ce()),Xe.setMode(1)):Xe.setMode(4);else if(K.isLine){let mn=k.linewidth;mn===void 0&&(mn=1),me.setLineWidth(mn*ce()),K.isLineSegments?Xe.setMode(1):K.isLineLoop?Xe.setMode(2):Xe.setMode(3)}else K.isPoints?Xe.setMode(0):K.isSprite&&Xe.setMode(4);if(K.isInstancedMesh)Xe.renderInstances(bt,pa,K.count);else if(U.isInstancedBufferGeometry){const mn=Math.min(U.instanceCount,U._maxInstanceCount);Xe.renderInstances(bt,pa,mn)}else Xe.render(bt,pa)}},this.compile=function(T,B){d=ue.get(T),d.init(),T.traverseVisible(function(U){U.isLight&&U.layers.test(B.layers)&&(d.pushLight(U),U.castShadow&&d.pushShadow(U))}),d.setupLights(),T.traverse(function(U){const k=U.material;if(k)if(Array.isArray(k))for(let K=0;K<k.length;K++){const ye=k[K];Os(ye,T,U)}else Os(k,T,U)})};let jt=null;function tp(T){jt&&jt(T)}function jl(){Xi.stop()}function Yl(){Xi.start()}const Xi=new qc;Xi.setAnimationLoop(tp),typeof window<"u"&&Xi.setContext(window),this.setAnimationLoop=function(T){jt=T,se.setAnimationLoop(T),T===null?Xi.stop():Xi.start()},se.addEventListener("sessionstart",jl),se.addEventListener("sessionend",Yl),this.render=function(T,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(_===!0)return;T.autoUpdate===!0&&T.updateMatrixWorld(),B.parent===null&&B.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(se.cameraAutoUpdate===!0&&se.updateCamera(B),B=se.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,B,x),d=ue.get(T,m.length),d.init(),m.push(d),pe.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Y.setFromProjectionMatrix(pe),ie=this.localClippingEnabled,G=oe.init(this.clippingPlanes,ie,B),u=J.get(T,p.length),u.init(),p.push(u),Ql(T,B,0,v.sortObjects),u.finish(),v.sortObjects===!0&&u.sort(H,I),G===!0&&oe.beginShadows();const U=d.state.shadowsArray;ge.render(U,T,B),d.setupLights(),d.setupLightsView(B),G===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset(),Se.render(u,T);const k=u.opaque,K=u.transmissive,ye=u.transparent;k.length>0&&da(k,T,B),K.length>0&&ip(k,K,T,B),ye.length>0&&da(ye,T,B),x!==null&&($.updateMultisampleRenderTarget(x),$.updateRenderTargetMipmap(x)),T.isScene===!0&&T.onAfterRender(v,T,B),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1),W.resetDefaultState(),S=-1,w=null,m.pop(),m.length>0?d=m[m.length-1]:d=null,p.pop(),p.length>0?u=p[p.length-1]:u=null};function Ql(T,B,U,k){if(T.visible===!1)return;if(T.layers.test(B.layers)){if(T.isGroup)U=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(B);else if(T.isLight)d.pushLight(T),T.castShadow&&d.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Y.intersectsSprite(T)){k&&he.setFromMatrixPosition(T.matrixWorld).applyMatrix4(pe);const ye=E.update(T),ve=T.material;ve.visible&&u.push(T,ye,ve,U,he.z,null)}}else if(T.isImmediateRenderObject)k&&he.setFromMatrixPosition(T.matrixWorld).applyMatrix4(pe),u.push(T,null,T.material,U,he.z,null);else if((T.isMesh||T.isLine||T.isPoints)&&(T.isSkinnedMesh&&T.skeleton.frame!==Q.render.frame&&(T.skeleton.update(),T.skeleton.frame=Q.render.frame),!T.frustumCulled||Y.intersectsObject(T))){k&&he.setFromMatrixPosition(T.matrixWorld).applyMatrix4(pe);const ye=E.update(T),ve=T.material;if(Array.isArray(ve)){const Te=ye.groups;for(let Ne=0,we=Te.length;Ne<we;Ne++){const De=Te[Ne],Ee=ve[De.materialIndex];Ee&&Ee.visible&&u.push(T,ye,Ee,U,he.z,De)}}else ve.visible&&u.push(T,ye,ve,U,he.z,null)}}const K=T.children;for(let ye=0,ve=K.length;ye<ve;ye++)Ql(K[ye],B,U,k)}function ip(T,B,U,k){if(te===null){const ve=s===!0&&fe.isWebGL2===!0?Fc:Ft;te=new ve(1024,1024,{generateMipmaps:!0,type:re.convert(_r)!==null?_r:ba,minFilter:vr,magFilter:lt,wrapS:St,wrapT:St})}const K=v.getRenderTarget();v.setRenderTarget(te),v.clear();const ye=v.toneMapping;v.toneMapping=gr,da(T,U,k),v.toneMapping=ye,$.updateMultisampleRenderTarget(te),$.updateRenderTargetMipmap(te),v.setRenderTarget(K),da(B,U,k)}function da(T,B,U){const k=B.isScene===!0?B.overrideMaterial:null;for(let K=0,ye=T.length;K<ye;K++){const ve=T[K],Te=ve.object,Ne=ve.geometry,we=k===null?ve.material:k,De=ve.group;if(U.isArrayCamera){const Ee=U.cameras;for(let Xe=0,$t=Ee.length;Xe<$t;Xe++){const Et=Ee[Xe];Te.layers.test(Et.layers)&&(me.viewport(y.copy(Et.viewport)),d.setupLightsView(Et),ql(Te,B,Et,Ne,we,De))}}else ql(Te,B,U,Ne,we,De)}}function ql(T,B,U,k,K,ye){if(T.onBeforeRender(v,B,U,k,K,ye),T.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),T.isImmediateRenderObject){const ve=Zl(U,B,K,T);me.setMaterial(K),W.reset(),si(T,ve)}else K.transparent===!0&&K.side===Mi?(K.side=nt,K.needsUpdate=!0,v.renderBufferDirect(U,B,k,K,T,ye),K.side=fr,K.needsUpdate=!0,v.renderBufferDirect(U,B,k,K,T,ye),K.side=Mi):v.renderBufferDirect(U,B,k,K,T,ye);T.onAfterRender(v,B,U,k,K,ye)}function Os(T,B,U){B.isScene!==!0&&(B=_e);const k=q.get(T),K=d.state.lights,ye=d.state.shadowsArray,ve=K.state.version,Te=A.getParameters(T,K.state,ye,B,U),Ne=A.getProgramCacheKey(Te);let we=k.programs;k.environment=T.isMeshStandardMaterial?B.environment:null,k.fog=B.fog,k.envMap=le.get(T.envMap||k.environment),we===void 0&&(T.addEventListener("dispose",wt),we=new Map,k.programs=we);let De=we.get(Ne);if(De!==void 0){if(k.currentProgram===De&&k.lightsStateVersion===ve)return Jl(T,Te),De}else Te.uniforms=A.getUniforms(T),T.onBuild(Te,v),T.onBeforeCompile(Te,v),De=A.acquireProgram(Te,Ne),we.set(Ne,De),k.uniforms=Te.uniforms;const Ee=k.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ee.clippingPlanes=oe.uniform),Jl(T,Te),k.needsLights=np(T),k.lightsStateVersion=ve,k.needsLights&&(Ee.ambientLightColor.value=K.state.ambient,Ee.lightProbe.value=K.state.probe,Ee.directionalLights.value=K.state.directional,Ee.directionalLightShadows.value=K.state.directionalShadow,Ee.spotLights.value=K.state.spot,Ee.spotLightShadows.value=K.state.spotShadow,Ee.rectAreaLights.value=K.state.rectArea,Ee.ltc_1.value=K.state.rectAreaLTC1,Ee.ltc_2.value=K.state.rectAreaLTC2,Ee.pointLights.value=K.state.point,Ee.pointLightShadows.value=K.state.pointShadow,Ee.hemisphereLights.value=K.state.hemi,Ee.directionalShadowMap.value=K.state.directionalShadowMap,Ee.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Ee.spotShadowMap.value=K.state.spotShadowMap,Ee.spotShadowMatrix.value=K.state.spotShadowMatrix,Ee.pointShadowMap.value=K.state.pointShadowMap,Ee.pointShadowMatrix.value=K.state.pointShadowMatrix);const Xe=De.getUniforms(),$t=Ni.seqWithValue(Xe.seq,Ee);return k.currentProgram=De,k.uniformsList=$t,De}function Jl(T,B){const U=q.get(T);U.outputEncoding=B.outputEncoding,U.instancing=B.instancing,U.skinning=B.skinning,U.numClippingPlanes=B.numClippingPlanes,U.numIntersection=B.numClipIntersection,U.vertexAlphas=B.vertexAlphas}function Zl(T,B,U,k){B.isScene!==!0&&(B=_e),$.resetTextureUnits();const K=B.fog,ye=U.isMeshStandardMaterial?B.environment:null,ve=x===null?v.outputEncoding:x.texture.encoding,Te=le.get(U.envMap||ye),Ne=U.vertexColors===!0&&k.geometry&&k.geometry.attributes.color&&k.geometry.attributes.color.itemSize===4,we=q.get(U),De=d.state.lights;if(G===!0&&(ie===!0||T!==w)){const bt=T===w&&U.id===S;oe.setState(U,T,bt)}let Ee=!1;U.version===we.__version?(we.needsLights&&we.lightsStateVersion!==De.state.version||we.outputEncoding!==ve||k.isInstancedMesh&&we.instancing===!1||!k.isInstancedMesh&&we.instancing===!0||k.isSkinnedMesh&&we.skinning===!1||!k.isSkinnedMesh&&we.skinning===!0||we.envMap!==Te||U.fog&&we.fog!==K||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==oe.numPlanes||we.numIntersection!==oe.numIntersection)||we.vertexAlphas!==Ne)&&(Ee=!0):(Ee=!0,we.__version=U.version);let Xe=we.currentProgram;Ee===!0&&(Xe=Os(U,B,k));let $t=!1,Et=!1,ji=!1;const je=Xe.getUniforms(),Yi=we.uniforms;if(me.useProgram(Xe.program)&&($t=!0,Et=!0,ji=!0),U.id!==S&&(S=U.id,Et=!0),$t||w!==T){if(je.setValue(V,"projectionMatrix",T.projectionMatrix),fe.logarithmicDepthBuffer&&je.setValue(V,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),w!==T&&(w=T,Et=!0,ji=!0),U.isShaderMaterial||U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshStandardMaterial||U.envMap){const bt=je.map.cameraPosition;bt!==void 0&&bt.setValue(V,he.setFromMatrixPosition(T.matrixWorld))}(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&je.setValue(V,"isOrthographic",T.isOrthographicCamera===!0),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial||U.isShadowMaterial||k.isSkinnedMesh)&&je.setValue(V,"viewMatrix",T.matrixWorldInverse)}if(k.isSkinnedMesh){je.setOptional(V,k,"bindMatrix"),je.setOptional(V,k,"bindMatrixInverse");const bt=k.skeleton;bt&&(fe.floatVertexTextures?(bt.boneTexture===null&&bt.computeBoneTexture(),je.setValue(V,"boneTexture",bt.boneTexture,$),je.setValue(V,"boneTextureSize",bt.boneTextureSize)):je.setOptional(V,bt,"boneMatrices"))}return(Et||we.receiveShadow!==k.receiveShadow)&&(we.receiveShadow=k.receiveShadow,je.setValue(V,"receiveShadow",k.receiveShadow)),Et&&(je.setValue(V,"toneMappingExposure",v.toneMappingExposure),we.needsLights&&rp(Yi,ji),K&&U.fog&&j.refreshFogUniforms(Yi,K),j.refreshMaterialUniforms(Yi,U,z,R,te),Ni.upload(V,we.uniformsList,Yi,$)),U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(Ni.upload(V,we.uniformsList,Yi,$),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&je.setValue(V,"center",k.center),je.setValue(V,"modelViewMatrix",k.modelViewMatrix),je.setValue(V,"normalMatrix",k.normalMatrix),je.setValue(V,"modelMatrix",k.matrixWorld),Xe}function rp(T,B){T.ambientLightColor.needsUpdate=B,T.lightProbe.needsUpdate=B,T.directionalLights.needsUpdate=B,T.directionalLightShadows.needsUpdate=B,T.pointLights.needsUpdate=B,T.pointLightShadows.needsUpdate=B,T.spotLights.needsUpdate=B,T.spotLightShadows.needsUpdate=B,T.rectAreaLights.needsUpdate=B,T.hemisphereLights.needsUpdate=B}function np(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return g},this.getActiveMipmapLevel=function(){return f},this.getRenderTarget=function(){return x},this.setRenderTarget=function(T,B=0,U=0){x=T,g=B,f=U,T&&q.get(T).__webglFramebuffer===void 0&&$.setupRenderTarget(T);let k=null,K=!1,ye=!1;if(T){const ve=T.texture;(ve.isDataTexture3D||ve.isDataTexture2DArray)&&(ye=!0);const Te=q.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(k=Te[B],K=!0):T.isWebGLMultisampleRenderTarget?k=q.get(T).__webglMultisampledFramebuffer:k=Te,y.copy(T.viewport),M.copy(T.scissor),L=T.scissorTest}else y.copy(F).multiplyScalar(z).floor(),M.copy(P).multiplyScalar(z).floor(),L=C;if(me.bindFramebuffer(36160,k)&&fe.drawBuffers){let ve=!1;if(T)if(T.isWebGLMultipleRenderTargets){const Te=T.texture;if(O.length!==Te.length||O[0]!==36064){for(let Ne=0,we=Te.length;Ne<we;Ne++)O[Ne]=36064+Ne;O.length=Te.length,ve=!0}}else(O.length!==1||O[0]!==36064)&&(O[0]=36064,O.length=1,ve=!0);else(O.length!==1||O[0]!==1029)&&(O[0]=1029,O.length=1,ve=!0);ve&&(fe.isWebGL2?V.drawBuffers(O):Pe.get("WEBGL_draw_buffers").drawBuffersWEBGL(O))}if(me.viewport(y),me.scissor(M),me.setScissorTest(L),K){const ve=q.get(T.texture);V.framebufferTexture2D(36160,36064,34069+B,ve.__webglTexture,U)}else if(ye){const ve=q.get(T.texture),Te=B||0;V.framebufferTextureLayer(36160,36064,ve.__webglTexture,U||0,Te)}},this.readRenderTargetPixels=function(T,B,U,k,K,ye,ve){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=q.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ve!==void 0&&(Te=Te[ve]),Te){me.bindFramebuffer(36160,Te);try{const Ne=T.texture,we=Ne.format,De=Ne.type;if(we!==Ct&&re.convert(we)!==V.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ee=De===_r&&(Pe.has("EXT_color_buffer_half_float")||fe.isWebGL2&&Pe.has("EXT_color_buffer_float"));if(De!==ba&&re.convert(De)!==V.getParameter(35738)&&!(De===li&&(fe.isWebGL2||Pe.has("OES_texture_float")||Pe.has("WEBGL_color_buffer_float")))&&!Ee){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V.checkFramebufferStatus(36160)===36053?B>=0&&B<=T.width-k&&U>=0&&U<=T.height-K&&V.readPixels(B,U,k,K,re.convert(we),re.convert(De),ye):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")}finally{const Ne=x!==null?q.get(x).__webglFramebuffer:null;me.bindFramebuffer(36160,Ne)}}},this.copyFramebufferToTexture=function(T,B,U=0){const k=Math.pow(2,-U),K=Math.floor(B.image.width*k),ye=Math.floor(B.image.height*k);let ve=re.convert(B.format);fe.isWebGL2&&(ve===6407&&(ve=32849),ve===6408&&(ve=32856)),$.setTexture2D(B,0),V.copyTexImage2D(3553,U,ve,T.x,T.y,K,ye,0),me.unbindTexture()},this.copyTextureToTexture=function(T,B,U,k=0){const K=B.image.width,ye=B.image.height,ve=re.convert(U.format),Te=re.convert(U.type);$.setTexture2D(U,0),V.pixelStorei(37440,U.flipY),V.pixelStorei(37441,U.premultiplyAlpha),V.pixelStorei(3317,U.unpackAlignment),B.isDataTexture?V.texSubImage2D(3553,k,T.x,T.y,K,ye,ve,Te,B.image.data):B.isCompressedTexture?V.compressedTexSubImage2D(3553,k,T.x,T.y,B.mipmaps[0].width,B.mipmaps[0].height,ve,B.mipmaps[0].data):V.texSubImage2D(3553,k,T.x,T.y,ve,Te,B.image),k===0&&U.generateMipmaps&&V.generateMipmap(3553),me.unbindTexture()},this.copyTextureToTexture3D=function(T,B,U,k,K=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ye=T.max.x-T.min.x+1,ve=T.max.y-T.min.y+1,Te=T.max.z-T.min.z+1,Ne=re.convert(k.format),we=re.convert(k.type);let De;if(k.isDataTexture3D)$.setTexture3D(k,0),De=32879;else if(k.isDataTexture2DArray)$.setTexture2DArray(k,0),De=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}V.pixelStorei(37440,k.flipY),V.pixelStorei(37441,k.premultiplyAlpha),V.pixelStorei(3317,k.unpackAlignment);const Ee=V.getParameter(3314),Xe=V.getParameter(32878),$t=V.getParameter(3316),Et=V.getParameter(3315),ji=V.getParameter(32877),je=U.isCompressedTexture?U.mipmaps[0]:U.image;V.pixelStorei(3314,je.width),V.pixelStorei(32878,je.height),V.pixelStorei(3316,T.min.x),V.pixelStorei(3315,T.min.y),V.pixelStorei(32877,T.min.z),U.isDataTexture||U.isDataTexture3D?V.texSubImage3D(De,K,B.x,B.y,B.z,ye,ve,Te,Ne,we,je.data):U.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),V.compressedTexSubImage3D(De,K,B.x,B.y,B.z,ye,ve,Te,Ne,je.data)):V.texSubImage3D(De,K,B.x,B.y,B.z,ye,ve,Te,Ne,we,je),V.pixelStorei(3314,Ee),V.pixelStorei(32878,Xe),V.pixelStorei(3316,$t),V.pixelStorei(3315,Et),V.pixelStorei(32877,ji),K===0&&k.generateMipmaps&&V.generateMipmap(De),me.unbindTexture()},this.initTexture=function(T){$.setTexture2D(T,0),me.unbindTexture()},this.resetState=function(){g=0,f=0,x=null,me.reset(),W.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class E_ extends Ve{}E_.prototype.isWebGL1Renderer=!0;class ua{constructor(e,t=25e-5){this.name="",this.color=new Z(e),this.density=t}clone(){return new ua(this.color,this.density)}toJSON(){return{type:"FogExp2",color:this.color.getHex(),density:this.density}}}ua.prototype.isFogExp2=!0;class Un extends Ie{constructor(){super(),this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}Un.prototype.isScene=!0;class zr{constructor(e,t){this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=An,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Ht()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,n=this.stride;r<n;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ht()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ht()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}zr.prototype.isInterleavedBuffer=!0;const et=new b;class dn{constructor(e,t,i,r=!1){this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)et.x=this.getX(t),et.y=this.getY(t),et.z=this.getZ(t),et.applyMatrix4(e),this.setXYZ(t,et.x,et.y,et.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)et.x=this.getX(t),et.y=this.getY(t),et.z=this.getZ(t),et.applyNormalMatrix(e),this.setXYZ(t,et.x,et.y,et.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)et.x=this.getX(t),et.y=this.getY(t),et.z=this.getZ(t),et.transformDirection(e),this.setXYZ(t,et.x,et.y,et.z);return this}setX(e,t){return this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){return this.data.array[e*this.data.stride+this.offset]}getY(e){return this.data.array[e*this.data.stride+this.offset+1]}getZ(e){return this.data.array[e*this.data.stride+this.offset+2]}getW(e){return this.data.array[e*this.data.stride+this.offset+3]}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,n){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=n,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let n=0;n<this.itemSize;n++)t.push(this.data.array[r+n])}return new Ke(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new dn(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let n=0;n<this.itemSize;n++)t.push(this.data.array[r+n])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}dn.prototype.isInterleavedBufferAttribute=!0;class Po extends pt{constructor(e){super(),this.type="SpriteMaterial",this.color=new Z(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this}}Po.prototype.isSpriteMaterial=!0;let Hr;const On=new b,kr=new b,Gr=new b,Vr=new X,Bn=new X,Mh=new ee,qa=new b,zn=new b,Ja=new b,Th=new X,Co=new X,Ah=new X;class Eh extends Ie{constructor(e){if(super(),this.type="Sprite",Hr===void 0){Hr=new Fe;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new zr(t,5);Hr.setIndex([0,1,2,0,2,3]),Hr.setAttribute("position",new dn(i,3,0,!1)),Hr.setAttribute("uv",new dn(i,2,3,!1))}this.geometry=Hr,this.material=e!==void 0?e:new Po,this.center=new X(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),kr.setFromMatrixScale(this.matrixWorld),Mh.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Gr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&kr.multiplyScalar(-Gr.z);const i=this.material.rotation;let r,n;i!==0&&(n=Math.cos(i),r=Math.sin(i));const s=this.center;Za(qa.set(-.5,-.5,0),Gr,s,kr,r,n),Za(zn.set(.5,-.5,0),Gr,s,kr,r,n),Za(Ja.set(.5,.5,0),Gr,s,kr,r,n),Th.set(0,0),Co.set(1,0),Ah.set(1,1);let o=e.ray.intersectTriangle(qa,zn,Ja,!1,On);if(o===null&&(Za(zn.set(-.5,.5,0),Gr,s,kr,r,n),Co.set(0,1),o=e.ray.intersectTriangle(qa,Ja,zn,!1,On),o===null))return;const l=e.ray.origin.distanceTo(On);l<e.near||l>e.far||t.push({distance:l,point:On.clone(),uv:ht.getUV(On,qa,zn,Ja,Th,Co,Ah,new X),face:null,object:this})}copy(e){return super.copy(e),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}Eh.prototype.isSprite=!0;function Za(a,e,t,i,r,n){Vr.subVectors(a,t).addScalar(.5).multiply(i),r!==void 0?(Bn.x=n*Vr.x-r*Vr.y,Bn.y=r*Vr.x+n*Vr.y):Bn.copy(Vr),a.copy(e),a.x+=Bn.x,a.y+=Bn.y,a.applyMatrix4(Mh)}const Lh=new b,Ph=new Ue,Ch=new Ue,L_=new b,Rh=new ee;class Ka extends qe{constructor(e,t){super(e,t),this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new ee,this.bindMatrixInverse=new ee}copy(e){return super.copy(e),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ue,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.x=t.getX(i),e.y=t.getY(i),e.z=t.getZ(i),e.w=t.getW(i);const n=1/e.manhattanLength();n!==1/0?e.multiplyScalar(n):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const i=this.skeleton,r=this.geometry;Ph.fromBufferAttribute(r.attributes.skinIndex,e),Ch.fromBufferAttribute(r.attributes.skinWeight,e),Lh.fromBufferAttribute(r.attributes.position,e).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let n=0;n<4;n++){const s=Ch.getComponent(n);if(s!==0){const o=Ph.getComponent(n);Rh.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(L_.copy(Lh).applyMatrix4(Rh),s)}}return t.applyMatrix4(this.bindMatrixInverse)}}Ka.prototype.isSkinnedMesh=!0;class Hn extends Ie{constructor(){super(),this.type="Bone"}}Hn.prototype.isBone=!0;class Ih extends st{constructor(e=null,t=1,i=1,r,n,s,o,l,c=lt,h=lt,u,d){super(null,s,o,l,c,h,r,n,u,d),this.image={data:e,width:t,height:i},this.magFilter=c,this.minFilter=h,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}}Ih.prototype.isDataTexture=!0;const Fh=new ee,P_=new ee;class Ds{constructor(e=[],t=[]){this.uuid=Ht(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new ee)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new ee;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let n=0,s=e.length;n<s;n++){const o=e[n]?e[n].matrixWorld:P_;Fh.multiplyMatrices(o,t[n]),Fh.toArray(i,n*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new Ds(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Rc(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new Ih(t,e,e,Ct,li);return this.boneMatrices=t,this.boneTexture=i,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){const n=e.bones[i];let s=t[n];s===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",n),s=new Hn),this.bones.push(s),this.boneInverses.push(new ee().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let r=0,n=t.length;r<n;r++){const s=t[r];e.bones.push(s.uuid);const o=i[r];e.boneInverses.push(o.toArray())}return e}}const Nh=new ee,Dh=new ee,$a=[],kn=new qe;class C_ extends qe{constructor(e,t,i){super(e,t),this.instanceMatrix=new Ke(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.frustumCulled=!1}copy(e){return super.copy(e),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const i=this.matrixWorld,r=this.count;if(kn.geometry=this.geometry,kn.material=this.material,kn.material!==void 0)for(let n=0;n<r;n++){this.getMatrixAt(n,Nh),Dh.multiplyMatrices(i,Nh),kn.matrixWorld=Dh,kn.raycast(e,$a);for(let s=0,o=$a.length;s<o;s++){const l=$a[s];l.instanceId=n,l.object=this,t.push(l)}$a.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ke(new Float32Array(this.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}C_.prototype.isInstancedMesh=!0;class tr extends pt{constructor(e){super(),this.type="LineBasicMaterial",this.color=new Z(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.morphTargets=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.morphTargets=e.morphTargets,this}}tr.prototype.isLineBasicMaterial=!0;const Uh=new b,Oh=new b,Bh=new ee,Ro=new er,es=new Li;class Gn extends Ie{constructor(e=new Fe,t=new tr){super(),this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,n=t.count;r<n;r++)Uh.fromBufferAttribute(t,r-1),Oh.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Uh.distanceTo(Oh);e.setAttribute("lineDistance",new be(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,n=e.params.Line.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),es.copy(i.boundingSphere),es.applyMatrix4(r),es.radius+=n,e.ray.intersectsSphere(es)===!1)return;Bh.copy(r).invert(),Ro.copy(e.ray).applyMatrix4(Bh);const o=n/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new b,h=new b,u=new b,d=new b,p=this.isLineSegments?2:1;if(i.isBufferGeometry){const m=i.index,v=i.attributes.position;if(m!==null){const _=Math.max(0,s.start),g=Math.min(m.count,s.start+s.count);for(let f=_,x=g-1;f<x;f+=p){const S=m.getX(f),w=m.getX(f+1);if(c.fromBufferAttribute(v,S),h.fromBufferAttribute(v,w),Ro.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const y=e.ray.origin.distanceTo(d);y<e.near||y>e.far||t.push({distance:y,point:u.clone().applyMatrix4(this.matrixWorld),index:f,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,s.start),g=Math.min(v.count,s.start+s.count);for(let f=_,x=g-1;f<x;f+=p){if(c.fromBufferAttribute(v,f),h.fromBufferAttribute(v,f+1),Ro.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const S=e.ray.origin.distanceTo(d);S<e.near||S>e.far||t.push({distance:S,point:u.clone().applyMatrix4(this.matrixWorld),index:f,face:null,faceIndex:null,object:this})}}}else i.isGeometry&&console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,s=r.length;n<s;n++){const o=r[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=n}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}Gn.prototype.isLine=!0;const zh=new b,Hh=new b;class ts extends Gn{constructor(e,t){super(e,t),this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,n=t.count;r<n;r+=2)zh.fromBufferAttribute(t,r),Hh.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+zh.distanceTo(Hh);e.setAttribute("lineDistance",new be(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}}ts.prototype.isLineSegments=!0;class kh extends Gn{constructor(e,t){super(e,t),this.type="LineLoop"}}kh.prototype.isLineLoop=!0;class Io extends pt{constructor(e){super(),this.type="PointsMaterial",this.color=new Z(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.morphTargets=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.morphTargets=e.morphTargets,this}}Io.prototype.isPointsMaterial=!0;const Gh=new ee,Fo=new er,is=new Li,rs=new b;class Vh extends Ie{constructor(e=new Fe,t=new Io){super(),this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,n=e.params.Points.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),is.copy(i.boundingSphere),is.applyMatrix4(r),is.radius+=n,e.ray.intersectsSphere(is)===!1)return;Gh.copy(r).invert(),Fo.copy(e.ray).applyMatrix4(Gh);const o=n/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o;if(i.isBufferGeometry){const c=i.index,h=i.attributes.position;if(c!==null){const u=Math.max(0,s.start),d=Math.min(c.count,s.start+s.count);for(let p=u,m=d;p<m;p++){const v=c.getX(p);rs.fromBufferAttribute(h,v),Wh(rs,v,l,r,e,t,this)}}else{const u=Math.max(0,s.start),d=Math.min(h.count,s.start+s.count);for(let p=u,m=d;p<m;p++)rs.fromBufferAttribute(h,p),Wh(rs,p,l,r,e,t,this)}}else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,s=r.length;n<s;n++){const o=r[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=n}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}Vh.prototype.isPoints=!0;function Wh(a,e,t,i,r,n,s){const o=Fo.distanceSqToPoint(a);if(o<t){const l=new b;Fo.closestPointToPoint(a,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;n.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:s})}}class R_ extends st{constructor(e,t,i,r,n,s,o,l,c){super(e,t,i,r,n,s,o,l,c),this.format=o!==void 0?o:Ti,this.minFilter=s!==void 0?s:ut,this.magFilter=n!==void 0?n:ut,this.generateMipmaps=!1;const h=this;function u(){h.needsUpdate=!0,e.requestVideoFrameCallback(u)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(u)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;!("requestVideoFrameCallback"in e)&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}R_.prototype.isVideoTexture=!0;class I_ extends st{constructor(e,t,i,r,n,s,o,l,c,h,u,d){super(null,s,o,l,c,h,r,n,u,d),this.image={width:t,height:i},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}I_.prototype.isCompressedTexture=!0;class Xh extends st{constructor(e,t,i,r,n,s,o,l,c){super(e,t,i,r,n,s,o,l,c),this.needsUpdate=!0}}Xh.prototype.isCanvasTexture=!0;class F_ extends st{constructor(e,t,i,r,n,s,o,l,c,h){if(h=h!==void 0?h:xr,h!==xr&&h!==Sn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===xr&&(i=Sa),i===void 0&&h===Sn&&(i=bn),super(null,r,n,s,o,l,h,i,c),this.image={width:e,height:t},this.magFilter=o!==void 0?o:lt,this.minFilter=l!==void 0?l:lt,this.flipY=!1,this.generateMipmaps=!1}}F_.prototype.isDepthTexture=!0;class kl extends Fe{constructor(e=1,t=1,i=1,r=8,n=1,s=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:n,openEnded:s,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),n=Math.floor(n);const h=[],u=[],d=[],p=[];let m=0;const v=[],_=i/2;let g=0;f(),s===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new be(u,3)),this.setAttribute("normal",new be(d,3)),this.setAttribute("uv",new be(p,2));function f(){const S=new b,w=new b;let y=0;const M=(t-e)/i;for(let L=0;L<=n;L++){const N=[],R=L/n,z=R*(t-e)+e;for(let H=0;H<=r;H++){const I=H/r,F=I*l+o,P=Math.sin(F),C=Math.cos(F);w.x=z*P,w.y=-R*i+_,w.z=z*C,u.push(w.x,w.y,w.z),S.set(P,M,C).normalize(),d.push(S.x,S.y,S.z),p.push(I,1-R),N.push(m++)}v.push(N)}for(let L=0;L<r;L++)for(let N=0;N<n;N++){const R=v[N][L],z=v[N+1][L],H=v[N+1][L+1],I=v[N][L+1];h.push(R,z,I),h.push(z,H,I),y+=6}c.addGroup(g,y,0),g+=y}function x(S){const w=m,y=new X,M=new b;let L=0;const N=S===!0?e:t,R=S===!0?1:-1;for(let H=1;H<=r;H++)u.push(0,_*R,0),d.push(0,R,0),p.push(.5,.5),m++;const z=m;for(let H=0;H<=r;H++){const I=H/r*l+o,F=Math.cos(I),P=Math.sin(I);M.x=N*P,M.y=_*R,M.z=N*F,u.push(M.x,M.y,M.z),d.push(0,R,0),y.x=F*.5+.5,y.y=P*.5*R+.5,p.push(y.x,y.y),m++}for(let H=0;H<r;H++){const I=w+H,F=z+H;S===!0?h.push(F,F+1,I):h.push(F+1,F,I),L+=3}c.addGroup(g,L,S===!0?1:2),g+=L}}static fromJSON(e){return new kl(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Gl extends Fe{constructor(e,t,i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const n=[],s=[];o(r),c(i),h(),this.setAttribute("position",new be(n,3)),this.setAttribute("normal",new be(n.slice(),3)),this.setAttribute("uv",new be(s,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(f){const x=new b,S=new b,w=new b;for(let y=0;y<t.length;y+=3)p(t[y+0],x),p(t[y+1],S),p(t[y+2],w),l(x,S,w,f)}function l(f,x,S,w){const y=w+1,M=[];for(let L=0;L<=y;L++){M[L]=[];const N=f.clone().lerp(S,L/y),R=x.clone().lerp(S,L/y),z=y-L;for(let H=0;H<=z;H++)H===0&&L===y?M[L][H]=N:M[L][H]=N.clone().lerp(R,H/z)}for(let L=0;L<y;L++)for(let N=0;N<2*(y-L)-1;N++){const R=Math.floor(N/2);N%2===0?(d(M[L][R+1]),d(M[L+1][R]),d(M[L][R])):(d(M[L][R+1]),d(M[L+1][R+1]),d(M[L+1][R]))}}function c(f){const x=new b;for(let S=0;S<n.length;S+=3)x.x=n[S+0],x.y=n[S+1],x.z=n[S+2],x.normalize().multiplyScalar(f),n[S+0]=x.x,n[S+1]=x.y,n[S+2]=x.z}function h(){const f=new b;for(let x=0;x<n.length;x+=3){f.x=n[x+0],f.y=n[x+1],f.z=n[x+2];const S=_(f)/2/Math.PI+.5,w=g(f)/Math.PI+.5;s.push(S,1-w)}m(),u()}function u(){for(let f=0;f<s.length;f+=6){const x=s[f+0],S=s[f+2],w=s[f+4],y=Math.max(x,S,w),M=Math.min(x,S,w);y>.9&&M<.1&&(x<.2&&(s[f+0]+=1),S<.2&&(s[f+2]+=1),w<.2&&(s[f+4]+=1))}}function d(f){n.push(f.x,f.y,f.z)}function p(f,x){const S=f*3;x.x=e[S+0],x.y=e[S+1],x.z=e[S+2]}function m(){const f=new b,x=new b,S=new b,w=new b,y=new X,M=new X,L=new X;for(let N=0,R=0;N<n.length;N+=9,R+=6){f.set(n[N+0],n[N+1],n[N+2]),x.set(n[N+3],n[N+4],n[N+5]),S.set(n[N+6],n[N+7],n[N+8]),y.set(s[R+0],s[R+1]),M.set(s[R+2],s[R+3]),L.set(s[R+4],s[R+5]),w.copy(f).add(x).add(S).divideScalar(3);const z=_(w);v(y,R+0,f,z),v(M,R+2,x,z),v(L,R+4,S,z)}}function v(f,x,S,w){w<0&&f.x===1&&(s[x]=f.x-1),S.x===0&&S.z===0&&(s[x]=w/2/Math.PI+.5)}function _(f){return Math.atan2(f.z,-f.x)}function g(f){return Math.atan2(-f.y,Math.sqrt(f.x*f.x+f.z*f.z))}}static fromJSON(e){return new Gl(e.vertices,e.indices,e.radius,e.details)}}class Bt{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),n=0;t.push(0);for(let s=1;s<=e;s++)i=this.getPoint(s/e),n+=i.distanceTo(r),t.push(n),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let r=0;const n=i.length;let s;t?s=t:s=e*i[n-1];let o=0,l=n-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=i[r]-s,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===s)return r/(n-1);const h=i[r],u=i[r+1]-h,d=(s-h)/u;return(r+d)/(n-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const n=this.getPoint(i),s=this.getPoint(r),o=t||(n.isVector2?new X:new b);return o.copy(s).sub(n).normalize(),o}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new b,r=[],n=[],s=[],o=new b,l=new ee;for(let p=0;p<=e;p++){const m=p/e;r[p]=this.getTangentAt(m,new b),r[p].normalize()}n[0]=new b,s[0]=new b;let c=Number.MAX_VALUE;const h=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(r[0],i).normalize(),n[0].crossVectors(r[0],o),s[0].crossVectors(r[0],n[0]);for(let p=1;p<=e;p++){if(n[p]=n[p-1].clone(),s[p]=s[p-1].clone(),o.crossVectors(r[p-1],r[p]),o.length()>Number.EPSILON){o.normalize();const m=Math.acos(It(r[p-1].dot(r[p]),-1,1));n[p].applyMatrix4(l.makeRotationAxis(o,m))}s[p].crossVectors(r[p],n[p])}if(t===!0){let p=Math.acos(It(n[0].dot(n[e]),-1,1));p/=e,r[0].dot(o.crossVectors(n[0],n[e]))>0&&(p=-p);for(let m=1;m<=e;m++)n[m].applyMatrix4(l.makeRotationAxis(r[m],p*m)),s[m].crossVectors(r[m],n[m])}return{tangents:r,normals:n,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class ns extends Bt{constructor(e=0,t=0,i=1,r=1,n=0,s=Math.PI*2,o=!1,l=0){super(),this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=n,this.aEndAngle=s,this.aClockwise=o,this.aRotation=l}getPoint(e,t){const i=t||new X,r=Math.PI*2;let n=this.aEndAngle-this.aStartAngle;const s=Math.abs(n)<Number.EPSILON;for(;n<0;)n+=r;for(;n>r;)n-=r;n<Number.EPSILON&&(s?n=0:n=r),this.aClockwise===!0&&!s&&(n===r?n=-r:n=n-r);const o=this.aStartAngle+e*n;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}ns.prototype.isEllipseCurve=!0;class jh extends ns{constructor(e,t,i,r,n,s){super(e,t,i,i,r,n,s),this.type="ArcCurve"}}jh.prototype.isArcCurve=!0;function No(){let a=0,e=0,t=0,i=0;function r(n,s,o,l){a=n,e=o,t=-3*n+3*s-2*o-l,i=2*n-2*s+o+l}return{initCatmullRom:function(n,s,o,l,c){r(s,o,c*(o-n),c*(l-s))},initNonuniformCatmullRom:function(n,s,o,l,c,h,u){let d=(s-n)/c-(o-n)/(c+h)+(o-s)/h,p=(o-s)/h-(l-s)/(h+u)+(l-o)/u;d*=h,p*=h,r(s,o,d,p)},calc:function(n){const s=n*n,o=s*n;return a+e*n+t*s+i*o}}}const as=new b,Do=new No,Uo=new No,Oo=new No;class Yh extends Bt{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new b){const i=t,r=this.points,n=r.length,s=(n-(this.closed?0:1))*e;let o=Math.floor(s),l=s-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/n)+1)*n:l===0&&o===n-1&&(o=n-2,l=1);let c,h;this.closed||o>0?c=r[(o-1)%n]:(as.subVectors(r[0],r[1]).add(r[0]),c=as);const u=r[o%n],d=r[(o+1)%n];if(this.closed||o+2<n?h=r[(o+2)%n]:(as.subVectors(r[n-1],r[n-2]).add(r[n-1]),h=as),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(u),p),v=Math.pow(u.distanceToSquared(d),p),_=Math.pow(d.distanceToSquared(h),p);v<1e-4&&(v=1),m<1e-4&&(m=v),_<1e-4&&(_=v),Do.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,m,v,_),Uo.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,m,v,_),Oo.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,m,v,_)}else this.curveType==="catmullrom"&&(Do.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Uo.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Oo.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return i.set(Do.calc(l),Uo.calc(l),Oo.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new b().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}Yh.prototype.isCatmullRomCurve3=!0;function Qh(a,e,t,i,r){const n=(i-e)*.5,s=(r-t)*.5,o=a*a,l=a*o;return(2*t-2*i+n+s)*l+(-3*t+3*i-2*n-s)*o+n*a+t}function N_(a,e){const t=1-a;return t*t*e}function D_(a,e){return 2*(1-a)*a*e}function U_(a,e){return a*a*e}function Vn(a,e,t,i){return N_(a,e)+D_(a,t)+U_(a,i)}function O_(a,e){const t=1-a;return t*t*t*e}function B_(a,e){const t=1-a;return 3*t*t*a*e}function z_(a,e){return 3*(1-a)*a*a*e}function H_(a,e){return a*a*a*e}function Wn(a,e,t,i,r){return O_(a,e)+B_(a,t)+z_(a,i)+H_(a,r)}class Bo extends Bt{constructor(e=new X,t=new X,i=new X,r=new X){super(),this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new X){const i=t,r=this.v0,n=this.v1,s=this.v2,o=this.v3;return i.set(Wn(e,r.x,n.x,s.x,o.x),Wn(e,r.y,n.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}Bo.prototype.isCubicBezierCurve=!0;class qh extends Bt{constructor(e=new b,t=new b,i=new b,r=new b){super(),this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new b){const i=t,r=this.v0,n=this.v1,s=this.v2,o=this.v3;return i.set(Wn(e,r.x,n.x,s.x,o.x),Wn(e,r.y,n.y,s.y,o.y),Wn(e,r.z,n.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}qh.prototype.isCubicBezierCurve3=!0;class ss extends Bt{constructor(e=new X,t=new X){super(),this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new X){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){const i=t||new X;return i.copy(this.v2).sub(this.v1).normalize(),i}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}ss.prototype.isLineCurve=!0;class k_ extends Bt{constructor(e=new b,t=new b){super(),this.type="LineCurve3",this.isLineCurve3=!0,this.v1=e,this.v2=t}getPoint(e,t=new b){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class zo extends Bt{constructor(e=new X,t=new X,i=new X){super(),this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new X){const i=t,r=this.v0,n=this.v1,s=this.v2;return i.set(Vn(e,r.x,n.x,s.x),Vn(e,r.y,n.y,s.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}zo.prototype.isQuadraticBezierCurve=!0;class Jh extends Bt{constructor(e=new b,t=new b,i=new b){super(),this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new b){const i=t,r=this.v0,n=this.v1,s=this.v2;return i.set(Vn(e,r.x,n.x,s.x),Vn(e,r.y,n.y,s.y),Vn(e,r.z,n.z,s.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}Jh.prototype.isQuadraticBezierCurve3=!0;class Ho extends Bt{constructor(e=[]){super(),this.type="SplineCurve",this.points=e}getPoint(e,t=new X){const i=t,r=this.points,n=(r.length-1)*e,s=Math.floor(n),o=n-s,l=r[s===0?s:s-1],c=r[s],h=r[s>r.length-2?r.length-1:s+1],u=r[s>r.length-3?r.length-1:s+2];return i.set(Qh(o,l.x,c.x,h.x,u.x),Qh(o,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new X().fromArray(r))}return this}}Ho.prototype.isSplineCurve=!0;var Zh=Object.freeze({__proto__:null,ArcCurve:jh,CatmullRomCurve3:Yh,CubicBezierCurve:Bo,CubicBezierCurve3:qh,EllipseCurve:ns,LineCurve:ss,LineCurve3:k_,QuadraticBezierCurve:zo,QuadraticBezierCurve3:Jh,SplineCurve:Ho});const G_={triangulate:function(a,e,t=2){const i=e&&e.length,r=i?e[0]*t:a.length;let n=Kh(a,0,r,t,!0);const s=[];if(!n||n.next===n.prev)return s;let o,l,c,h,u,d,p;if(i&&(n=Y_(a,e,n,t)),a.length>80*t){o=c=a[0],l=h=a[1];for(let m=t;m<r;m+=t)u=a[m],d=a[m+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);p=Math.max(c-o,h-l),p=p!==0?1/p:0}return Xn(n,s,t,o,l,p),s}};function Kh(a,e,t,i,r){let n,s;if(r===nx(a,e,t,i)>0)for(n=e;n<t;n+=i)s=tu(n,a[n],a[n+1],s);else for(n=t-i;n>=e;n-=i)s=tu(n,a[n],a[n+1],s);return s&&os(s,s.next)&&(Yn(s),s=s.next),s}function Di(a,e){if(!a)return a;e||(e=a);let t=a,i;do if(i=!1,!t.steiner&&(os(t,t.next)||Je(t.prev,t,t.next)===0)){if(Yn(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Xn(a,e,t,i,r,n,s){if(!a)return;!s&&n&&K_(a,i,r,n);let o=a,l,c;for(;a.prev!==a.next;){if(l=a.prev,c=a.next,n?W_(a,i,r,n):V_(a)){e.push(l.i/t),e.push(a.i/t),e.push(c.i/t),Yn(a),a=c.next,o=c.next;continue}if(a=c,a===o){s?s===1?(a=X_(Di(a),e,t),Xn(a,e,t,i,r,n,2)):s===2&&j_(a,e,t,i,r,n):Xn(Di(a),e,t,i,r,n,1);break}}}function V_(a){const e=a.prev,t=a,i=a.next;if(Je(e,t,i)>=0)return!1;let r=a.next.next;for(;r!==a.prev;){if(Wr(e.x,e.y,t.x,t.y,i.x,i.y,r.x,r.y)&&Je(r.prev,r,r.next)>=0)return!1;r=r.next}return!0}function W_(a,e,t,i){const r=a.prev,n=a,s=a.next;if(Je(r,n,s)>=0)return!1;const o=r.x<n.x?r.x<s.x?r.x:s.x:n.x<s.x?n.x:s.x,l=r.y<n.y?r.y<s.y?r.y:s.y:n.y<s.y?n.y:s.y,c=r.x>n.x?r.x>s.x?r.x:s.x:n.x>s.x?n.x:s.x,h=r.y>n.y?r.y>s.y?r.y:s.y:n.y>s.y?n.y:s.y,u=ko(o,l,e,t,i),d=ko(c,h,e,t,i);let p=a.prevZ,m=a.nextZ;for(;p&&p.z>=u&&m&&m.z<=d;){if(p!==a.prev&&p!==a.next&&Wr(r.x,r.y,n.x,n.y,s.x,s.y,p.x,p.y)&&Je(p.prev,p,p.next)>=0||(p=p.prevZ,m!==a.prev&&m!==a.next&&Wr(r.x,r.y,n.x,n.y,s.x,s.y,m.x,m.y)&&Je(m.prev,m,m.next)>=0))return!1;m=m.nextZ}for(;p&&p.z>=u;){if(p!==a.prev&&p!==a.next&&Wr(r.x,r.y,n.x,n.y,s.x,s.y,p.x,p.y)&&Je(p.prev,p,p.next)>=0)return!1;p=p.prevZ}for(;m&&m.z<=d;){if(m!==a.prev&&m!==a.next&&Wr(r.x,r.y,n.x,n.y,s.x,s.y,m.x,m.y)&&Je(m.prev,m,m.next)>=0)return!1;m=m.nextZ}return!0}function X_(a,e,t){let i=a;do{const r=i.prev,n=i.next.next;!os(r,n)&&$h(r,i,i.next,n)&&jn(r,n)&&jn(n,r)&&(e.push(r.i/t),e.push(i.i/t),e.push(n.i/t),Yn(i),Yn(i.next),i=a=n),i=i.next}while(i!==a);return Di(i)}function j_(a,e,t,i,r,n){let s=a;do{let o=s.next.next;for(;o!==s.prev;){if(s.i!==o.i&&tx(s,o)){let l=eu(s,o);s=Di(s,s.next),l=Di(l,l.next),Xn(s,e,t,i,r,n),Xn(l,e,t,i,r,n);return}o=o.next}s=s.next}while(s!==a)}function Y_(a,e,t,i){const r=[];let n,s,o,l,c;for(n=0,s=e.length;n<s;n++)o=e[n]*i,l=n<s-1?e[n+1]*i:a.length,c=Kh(a,o,l,i,!1),c===c.next&&(c.steiner=!0),r.push(ex(c));for(r.sort(Q_),n=0;n<r.length;n++)q_(r[n],t),t=Di(t,t.next);return t}function Q_(a,e){return a.x-e.x}function q_(a,e){if(e=J_(a,e),e){const t=eu(e,a);Di(e,e.next),Di(t,t.next)}}function J_(a,e){let t=e;const i=a.x,r=a.y;let n=-1/0,s;do{if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const d=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=i&&d>n){if(n=d,d===i){if(r===t.y)return t;if(r===t.next.y)return t.next}s=t.x<t.next.x?t:t.next}}t=t.next}while(t!==e);if(!s)return null;if(i===n)return s;const o=s,l=s.x,c=s.y;let h=1/0,u;t=s;do i>=t.x&&t.x>=l&&i!==t.x&&Wr(r<c?i:n,r,l,c,r<c?n:i,r,t.x,t.y)&&(u=Math.abs(r-t.y)/(i-t.x),jn(t,a)&&(u<h||u===h&&(t.x>s.x||t.x===s.x&&Z_(s,t)))&&(s=t,h=u)),t=t.next;while(t!==o);return s}function Z_(a,e){return Je(a.prev,a,e.prev)<0&&Je(e.next,a,a.next)<0}function K_(a,e,t,i){let r=a;do r.z===null&&(r.z=ko(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==a);r.prevZ.nextZ=null,r.prevZ=null,$_(r)}function $_(a){let e,t,i,r,n,s,o,l,c=1;do{for(t=a,a=null,n=null,s=0;t;){for(s++,i=t,o=0,e=0;e<c&&(o++,i=i.nextZ,!!i);e++);for(l=c;o>0||l>0&&i;)o!==0&&(l===0||!i||t.z<=i.z)?(r=t,t=t.nextZ,o--):(r=i,i=i.nextZ,l--),n?n.nextZ=r:a=r,r.prevZ=n,n=r;t=i}n.nextZ=null,c*=2}while(s>1);return a}function ko(a,e,t,i,r){return a=32767*(a-t)*r,e=32767*(e-i)*r,a=(a|a<<8)&16711935,a=(a|a<<4)&252645135,a=(a|a<<2)&858993459,a=(a|a<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,a|e<<1}function ex(a){let e=a,t=a;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==a);return t}function Wr(a,e,t,i,r,n,s,o){return(r-s)*(e-o)-(a-s)*(n-o)>=0&&(a-s)*(i-o)-(t-s)*(e-o)>=0&&(t-s)*(n-o)-(r-s)*(i-o)>=0}function tx(a,e){return a.next.i!==e.i&&a.prev.i!==e.i&&!ix(a,e)&&(jn(a,e)&&jn(e,a)&&rx(a,e)&&(Je(a.prev,a,e.prev)||Je(a,e.prev,e))||os(a,e)&&Je(a.prev,a,a.next)>0&&Je(e.prev,e,e.next)>0)}function Je(a,e,t){return(e.y-a.y)*(t.x-e.x)-(e.x-a.x)*(t.y-e.y)}function os(a,e){return a.x===e.x&&a.y===e.y}function $h(a,e,t,i){const r=cs(Je(a,e,t)),n=cs(Je(a,e,i)),s=cs(Je(t,i,a)),o=cs(Je(t,i,e));return!!(r!==n&&s!==o||r===0&&ls(a,t,e)||n===0&&ls(a,i,e)||s===0&&ls(t,a,i)||o===0&&ls(t,e,i))}function ls(a,e,t){return e.x<=Math.max(a.x,t.x)&&e.x>=Math.min(a.x,t.x)&&e.y<=Math.max(a.y,t.y)&&e.y>=Math.min(a.y,t.y)}function cs(a){return a>0?1:a<0?-1:0}function ix(a,e){let t=a;do{if(t.i!==a.i&&t.next.i!==a.i&&t.i!==e.i&&t.next.i!==e.i&&$h(t,t.next,a,e))return!0;t=t.next}while(t!==a);return!1}function jn(a,e){return Je(a.prev,a,a.next)<0?Je(a,e,a.next)>=0&&Je(a,a.prev,e)>=0:Je(a,e,a.prev)<0||Je(a,a.next,e)<0}function rx(a,e){let t=a,i=!1;const r=(a.x+e.x)/2,n=(a.y+e.y)/2;do t.y>n!=t.next.y>n&&t.next.y!==t.y&&r<(t.next.x-t.x)*(n-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==a);return i}function eu(a,e){const t=new Go(a.i,a.x,a.y),i=new Go(e.i,e.x,e.y),r=a.next,n=e.prev;return a.next=e,e.prev=a,t.next=r,r.prev=t,i.next=t,t.prev=i,n.next=i,i.prev=n,i}function tu(a,e,t,i){const r=new Go(a,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Yn(a){a.next.prev=a.prev,a.prev.next=a.next,a.prevZ&&(a.prevZ.nextZ=a.nextZ),a.nextZ&&(a.nextZ.prevZ=a.prevZ)}function Go(a,e,t){this.i=a,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function nx(a,e,t,i){let r=0;for(let n=e,s=t-i;n<t;n+=i)r+=(a[s]-a[n])*(a[n+1]+a[s+1]),s=n;return r}class Vi{static area(e){const t=e.length;let i=0;for(let r=t-1,n=0;n<t;r=n++)i+=e[r].x*e[n].y-e[n].x*e[r].y;return i*.5}static isClockWise(e){return Vi.area(e)<0}static triangulateShape(e,t){const i=[],r=[],n=[];iu(e),ru(i,e);let s=e.length;t.forEach(iu);for(let l=0;l<t.length;l++)r.push(s),s+=t[l].length,ru(i,t[l]);const o=G_.triangulate(i,r);for(let l=0;l<o.length;l+=3)n.push(o.slice(l,l+3));return n}}function iu(a){const e=a.length;e>2&&a[e-1].equals(a[0])&&a.pop()}function ru(a,e){for(let t=0;t<e.length;t++)a.push(e[t].x),a.push(e[t].y)}class pn extends Fe{constructor(e,t){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,r=[],n=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];s(c)}this.setAttribute("position",new be(r,3)),this.setAttribute("uv",new be(n,2)),this.computeVertexNormals();function s(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1;let u=t.depth!==void 0?t.depth:100,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:6,m=t.bevelSize!==void 0?t.bevelSize:p-2,v=t.bevelOffset!==void 0?t.bevelOffset:0,_=t.bevelSegments!==void 0?t.bevelSegments:3;const g=t.extrudePath,f=t.UVGenerator!==void 0?t.UVGenerator:ax;t.amount!==void 0&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),u=t.amount);let x,S=!1,w,y,M,L;g&&(x=g.getSpacedPoints(h),S=!0,d=!1,w=g.computeFrenetFrames(h,!1),y=new b,M=new b,L=new b),d||(_=0,p=0,m=0,v=0);const N=o.extractPoints(c);let R=N.shape;const z=N.holes;if(!Vi.isClockWise(R)){R=R.reverse();for(let Q=0,q=z.length;Q<q;Q++){const $=z[Q];Vi.isClockWise($)&&(z[Q]=$.reverse())}}const H=Vi.triangulateShape(R,z),I=R;for(let Q=0,q=z.length;Q<q;Q++){const $=z[Q];R=R.concat($)}function F(Q,q,$){return q||console.error("THREE.ExtrudeGeometry: vec does not exist"),q.clone().multiplyScalar($).add(Q)}const P=R.length,C=H.length;function O(Q,q,$){let le,ae,Me;const E=Q.x-q.x,A=Q.y-q.y,j=$.x-Q.x,J=$.y-Q.y,ue=E*E+A*A,oe=E*J-A*j;if(Math.abs(oe)>Number.EPSILON){const ge=Math.sqrt(ue),Se=Math.sqrt(j*j+J*J),Ae=q.x-A/ge,de=q.y+E/ge,D=$.x-J/Se,re=$.y+j/Se,W=((D-Ae)*J-(re-de)*j)/(E*J-A*j);le=Ae+E*W-Q.x,ae=de+A*W-Q.y;const xe=le*le+ae*ae;if(xe<=2)return new X(le,ae);Me=Math.sqrt(xe/2)}else{let ge=!1;E>Number.EPSILON?j>Number.EPSILON&&(ge=!0):E<-Number.EPSILON?j<-Number.EPSILON&&(ge=!0):Math.sign(A)===Math.sign(J)&&(ge=!0),ge?(le=-A,ae=E,Me=Math.sqrt(ue)):(le=E,ae=A,Me=Math.sqrt(ue/2))}return new X(le/Me,ae/Me)}const Y=[];for(let Q=0,q=I.length,$=q-1,le=Q+1;Q<q;Q++,$++,le++)$===q&&($=0),le===q&&(le=0),Y[Q]=O(I[Q],I[$],I[le]);const G=[];let ie,te=Y.concat();for(let Q=0,q=z.length;Q<q;Q++){const $=z[Q];ie=[];for(let le=0,ae=$.length,Me=ae-1,E=le+1;le<ae;le++,Me++,E++)Me===ae&&(Me=0),E===ae&&(E=0),ie[le]=O($[le],$[Me],$[E]);G.push(ie),te=te.concat(ie)}for(let Q=0;Q<_;Q++){const q=Q/_,$=p*Math.cos(q*Math.PI/2),le=m*Math.sin(q*Math.PI/2)+v;for(let ae=0,Me=I.length;ae<Me;ae++){const E=F(I[ae],Y[ae],le);V(E.x,E.y,-$)}for(let ae=0,Me=z.length;ae<Me;ae++){const E=z[ae];ie=G[ae];for(let A=0,j=E.length;A<j;A++){const J=F(E[A],ie[A],le);V(J.x,J.y,-$)}}}const pe=m+v;for(let Q=0;Q<P;Q++){const q=d?F(R[Q],te[Q],pe):R[Q];S?(M.copy(w.normals[0]).multiplyScalar(q.x),y.copy(w.binormals[0]).multiplyScalar(q.y),L.copy(x[0]).add(M).add(y),V(L.x,L.y,L.z)):V(q.x,q.y,0)}for(let Q=1;Q<=h;Q++)for(let q=0;q<P;q++){const $=d?F(R[q],te[q],pe):R[q];S?(M.copy(w.normals[Q]).multiplyScalar($.x),y.copy(w.binormals[Q]).multiplyScalar($.y),L.copy(x[Q]).add(M).add(y),V(L.x,L.y,L.z)):V($.x,$.y,u/h*Q)}for(let Q=_-1;Q>=0;Q--){const q=Q/_,$=p*Math.cos(q*Math.PI/2),le=m*Math.sin(q*Math.PI/2)+v;for(let ae=0,Me=I.length;ae<Me;ae++){const E=F(I[ae],Y[ae],le);V(E.x,E.y,u+$)}for(let ae=0,Me=z.length;ae<Me;ae++){const E=z[ae];ie=G[ae];for(let A=0,j=E.length;A<j;A++){const J=F(E[A],ie[A],le);S?V(J.x,J.y+x[h-1].y,x[h-1].x+$):V(J.x,J.y,u+$)}}}he(),_e();function he(){const Q=r.length/3;if(d){let q=0,$=P*q;for(let le=0;le<C;le++){const ae=H[le];Ze(ae[2]+$,ae[1]+$,ae[0]+$)}q=h+_*2,$=P*q;for(let le=0;le<C;le++){const ae=H[le];Ze(ae[0]+$,ae[1]+$,ae[2]+$)}}else{for(let q=0;q<C;q++){const $=H[q];Ze($[2],$[1],$[0])}for(let q=0;q<C;q++){const $=H[q];Ze($[0]+P*h,$[1]+P*h,$[2]+P*h)}}i.addGroup(Q,r.length/3-Q,0)}function _e(){const Q=r.length/3;let q=0;ce(I,q),q+=I.length;for(let $=0,le=z.length;$<le;$++){const ae=z[$];ce(ae,q),q+=ae.length}i.addGroup(Q,r.length/3-Q,1)}function ce(Q,q){let $=Q.length;for(;--$>=0;){const le=$;let ae=$-1;ae<0&&(ae=Q.length-1);for(let Me=0,E=h+_*2;Me<E;Me++){const A=P*Me,j=P*(Me+1),J=q+le+A,ue=q+ae+A,oe=q+ae+j,ge=q+le+j;Pe(J,ue,oe,ge)}}}function V(Q,q,$){l.push(Q),l.push(q),l.push($)}function Ze(Q,q,$){fe(Q),fe(q),fe($);const le=r.length/3,ae=f.generateTopUV(i,r,le-3,le-2,le-1);me(ae[0]),me(ae[1]),me(ae[2])}function Pe(Q,q,$,le){fe(Q),fe(q),fe(le),fe(q),fe($),fe(le);const ae=r.length/3,Me=f.generateSideWallUV(i,r,ae-6,ae-3,ae-2,ae-1);me(Me[0]),me(Me[1]),me(Me[3]),me(Me[1]),me(Me[2]),me(Me[3])}function fe(Q){r.push(l[Q*3+0]),r.push(l[Q*3+1]),r.push(l[Q*3+2])}function me(Q){n.push(Q.x),n.push(Q.y)}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return sx(t,i,e)}static fromJSON(e,t){const i=[];for(let n=0,s=e.shapes.length;n<s;n++){const o=t[e.shapes[n]];i.push(o)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Zh[r.type]().fromJSON(r)),new pn(i,e.options)}}const ax={generateTopUV:function(a,e,t,i,r){const n=e[t*3],s=e[t*3+1],o=e[i*3],l=e[i*3+1],c=e[r*3],h=e[r*3+1];return[new X(n,s),new X(o,l),new X(c,h)]},generateSideWallUV:function(a,e,t,i,r,n){const s=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[i*3],h=e[i*3+1],u=e[i*3+2],d=e[r*3],p=e[r*3+1],m=e[r*3+2],v=e[n*3],_=e[n*3+1],g=e[n*3+2];return Math.abs(o-h)<Math.abs(s-c)?[new X(s,1-l),new X(c,1-u),new X(d,1-m),new X(v,1-g)]:[new X(o,1-l),new X(h,1-u),new X(p,1-m),new X(_,1-g)]}};function sx(a,e,t){if(t.shapes=[],Array.isArray(a))for(let i=0,r=a.length;i<r;i++){const n=a[i];t.shapes.push(n.uuid)}else t.shapes.push(a.uuid);return e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Vl extends Gl{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],n=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,n,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Vl(e.radius,e.detail)}}class Wl extends Fe{constructor(e,t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const i=[],r=[],n=[],s=[];let o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(i),this.setAttribute("position",new be(r,3)),this.setAttribute("normal",new be(n,3)),this.setAttribute("uv",new be(s,2));function c(h){const u=r.length/3,d=h.extractPoints(t);let p=d.shape;const m=d.holes;Vi.isClockWise(p)===!1&&(p=p.reverse());for(let _=0,g=m.length;_<g;_++){const f=m[_];Vi.isClockWise(f)===!0&&(m[_]=f.reverse())}const v=Vi.triangulateShape(p,m);for(let _=0,g=m.length;_<g;_++){const f=m[_];p=p.concat(f)}for(let _=0,g=p.length;_<g;_++){const f=p[_];r.push(f.x,f.y,0),n.push(0,0,1),s.push(f.x,f.y)}for(let _=0,g=v.length;_<g;_++){const f=v[_],x=f[0]+u,S=f[1]+u,w=f[2]+u;i.push(x,S,w),l+=3}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return ox(t,e)}static fromJSON(e,t){const i=[];for(let r=0,n=e.shapes.length;r<n;r++){const s=t[e.shapes[r]];i.push(s)}return new Wl(i,e.curveSegments)}}function ox(a,e){if(e.shapes=[],Array.isArray(a))for(let t=0,i=a.length;t<i;t++){const r=a[t];e.shapes.push(r.uuid)}else e.shapes.push(a.uuid);return e}class Xl extends Fe{constructor(e=1,t=8,i=6,r=0,n=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:n,thetaStart:s,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(s+o,Math.PI);let c=0;const h=[],u=new b,d=new b,p=[],m=[],v=[],_=[];for(let g=0;g<=i;g++){const f=[],x=g/i;let S=0;g==0&&s==0?S=.5/t:g==i&&l==Math.PI&&(S=-.5/t);for(let w=0;w<=t;w++){const y=w/t;u.x=-e*Math.cos(r+y*n)*Math.sin(s+x*o),u.y=e*Math.cos(s+x*o),u.z=e*Math.sin(r+y*n)*Math.sin(s+x*o),m.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),_.push(y+S,1-x),f.push(c++)}h.push(f)}for(let g=0;g<i;g++)for(let f=0;f<t;f++){const x=h[g][f+1],S=h[g][f],w=h[g+1][f],y=h[g+1][f+1];(g!==0||s>0)&&p.push(x,S,y),(g!==i-1||l<Math.PI)&&p.push(S,w,y)}this.setIndex(p),this.setAttribute("position",new be(m,3)),this.setAttribute("normal",new be(v,3)),this.setAttribute("uv",new be(_,2))}static fromJSON(e){return new Xl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class lx extends pt{constructor(e){super(),this.type="ShadowMaterial",this.color=new Z(0),this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this}}lx.prototype.isShadowMaterial=!0;class cx extends mt{constructor(e){super(e),this.type="RawShaderMaterial"}}cx.prototype.isRawShaderMaterial=!0;class ir extends pt{constructor(e){super(),this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Z(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Z(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ji,this.normalScale=new X(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.morphTargets=!1,this.morphNormals=!1,this.flatShading=!1,this.vertexTangents=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.flatShading=e.flatShading,this.vertexTangents=e.vertexTangents,this}}ir.prototype.isMeshStandardMaterial=!0;class Vo extends ir{constructor(e){super(),this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoat=0,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new X(1,1),this.clearcoatNormalMap=null,this.reflectivity=.5,Object.defineProperty(this,"ior",{get:function(){return(1+.4*this.reflectivity)/(1-.4*this.reflectivity)},set:function(t){this.reflectivity=It(2.5*(t-1)/(t+1),0,1)}}),this.sheen=null,this.transmission=0,this.transmissionMap=null,this.thickness=.01,this.thicknessMap=null,this.attenuationDistance=0,this.attenuationColor=new Z(1,1,1),this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.reflectivity=e.reflectivity,e.sheen?this.sheen=(this.sheen||new Z).copy(e.sheen):this.sheen=null,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this}}Vo.prototype.isMeshPhysicalMaterial=!0;class hs extends pt{constructor(e){super(),this.type="MeshPhongMaterial",this.color=new Z(16777215),this.specular=new Z(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Z(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ji,this.normalScale=new X(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ya,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.morphTargets=!1,this.morphNormals=!1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.flatShading=e.flatShading,this}}hs.prototype.isMeshPhongMaterial=!0;class hx extends pt{constructor(e){super(),this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Z(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Z(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ji,this.normalScale=new X(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.morphTargets=!1,this.morphNormals=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this}}hx.prototype.isMeshToonMaterial=!0;class ux extends pt{constructor(e){super(),this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ji,this.normalScale=new X(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.morphTargets=!1,this.morphNormals=!1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.flatShading=e.flatShading,this}}ux.prototype.isMeshNormalMaterial=!0;class nu extends pt{constructor(e){super(),this.type="MeshLambertMaterial",this.color=new Z(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Z(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ya,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.morphTargets=!1,this.morphNormals=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this}}nu.prototype.isMeshLambertMaterial=!0;class dx extends pt{constructor(e){super(),this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Z(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ji,this.normalScale=new X(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.morphTargets=!1,this.morphNormals=!1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.flatShading=e.flatShading,this}}dx.prototype.isMeshMatcapMaterial=!0;class px extends tr{constructor(e){super(),this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}px.prototype.isLineDashedMaterial=!0;const Qe={arraySlice:function(a,e,t){return Qe.isTypedArray(a)?new a.constructor(a.subarray(e,t!==void 0?t:a.length)):a.slice(e,t)},convertArray:function(a,e,t){return!a||!t&&a.constructor===e?a:typeof e.BYTES_PER_ELEMENT=="number"?new e(a):Array.prototype.slice.call(a)},isTypedArray:function(a){return ArrayBuffer.isView(a)&&!(a instanceof DataView)},getKeyframeOrder:function(a){function e(r,n){return a[r]-a[n]}const t=a.length,i=new Array(t);for(let r=0;r!==t;++r)i[r]=r;return i.sort(e),i},sortedArray:function(a,e,t){const i=a.length,r=new a.constructor(i);for(let n=0,s=0;s!==i;++n){const o=t[n]*e;for(let l=0;l!==e;++l)r[s++]=a[o+l]}return r},flattenJSON:function(a,e,t,i){let r=1,n=a[0];for(;n!==void 0&&n[i]===void 0;)n=a[r++];if(n===void 0)return;let s=n[i];if(s!==void 0)if(Array.isArray(s))do s=n[i],s!==void 0&&(e.push(n.time),t.push.apply(t,s)),n=a[r++];while(n!==void 0);else if(s.toArray!==void 0)do s=n[i],s!==void 0&&(e.push(n.time),s.toArray(t,t.length)),n=a[r++];while(n!==void 0);else do s=n[i],s!==void 0&&(e.push(n.time),t.push(s)),n=a[r++];while(n!==void 0)},subclip:function(a,e,t,i,r=30){const n=a.clone();n.name=e;const s=[];for(let l=0;l<n.tracks.length;++l){const c=n.tracks[l],h=c.getValueSize(),u=[],d=[];for(let p=0;p<c.times.length;++p){const m=c.times[p]*r;if(!(m<t||m>=i)){u.push(c.times[p]);for(let v=0;v<h;++v)d.push(c.values[p*h+v])}}u.length!==0&&(c.times=Qe.convertArray(u,c.times.constructor),c.values=Qe.convertArray(d,c.values.constructor),s.push(c))}n.tracks=s;let o=1/0;for(let l=0;l<n.tracks.length;++l)o>n.tracks[l].times[0]&&(o=n.tracks[l].times[0]);for(let l=0;l<n.tracks.length;++l)n.tracks[l].shift(-1*o);return n.resetDuration(),n},makeClipAdditive:function(a,e=0,t=a,i=30){i<=0&&(i=30);const r=t.tracks.length,n=e/i;for(let s=0;s<r;++s){const o=t.tracks[s],l=o.ValueTypeName;if(l==="bool"||l==="string")continue;const c=a.tracks.find(function(g){return g.name===o.name&&g.ValueTypeName===l});if(c===void 0)continue;let h=0;const u=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=u/3);let d=0;const p=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=p/3);const m=o.times.length-1;let v;if(n<=o.times[0]){const g=h,f=u-h;v=Qe.arraySlice(o.values,g,f)}else if(n>=o.times[m]){const g=m*u+h,f=g+u-h;v=Qe.arraySlice(o.values,g,f)}else{const g=o.createInterpolant(),f=h,x=u-h;g.evaluate(n),v=Qe.arraySlice(g.resultBuffer,f,x)}l==="quaternion"&&new Ge().fromArray(v).normalize().conjugate().toArray(v);const _=c.times.length;for(let g=0;g<_;++g){const f=g*p+d;if(l==="quaternion")Ge.multiplyQuaternionsFlat(c.values,f,v,0,c.values,f);else{const x=p-d*2;for(let S=0;S<x;++S)c.values[f+S]-=v[S]}}}return a.blendMode=Lc,a}};class mi{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,r=t[i],n=t[i-1];e:{t:{let s;i:{r:if(!(e<r)){for(let o=i+2;;){if(r===void 0){if(e<n)break r;return i=t.length,this._cachedIndex=i,this.afterEnd_(i-1,e,n)}if(i===o)break;if(n=r,r=t[++i],e<r)break t}s=t.length;break i}if(!(e>=n)){const o=t[1];e<o&&(i=2,n=o);for(let l=i-2;;){if(n===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,r);if(i===l)break;if(r=n,n=t[--i-1],e>=n)break t}s=i,i=0;break i}break e}for(;i<s;){const o=i+s>>>1;e<t[o]?s=o:i=o+1}if(r=t[i],n=t[i-1],n===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,r);if(r===void 0)return i=t.length,this._cachedIndex=i,this.afterEnd_(i-1,n,e)}this._cachedIndex=i,this.intervalChanged_(i,n,r)}return this.interpolate_(i,n,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,n=e*r;for(let s=0;s!==r;++s)t[s]=i[n+s];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}mi.prototype.beforeStart_=mi.prototype.copySampleValue_,mi.prototype.afterEnd_=mi.prototype.copySampleValue_;class fx extends mi{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:wr,endingEnd:wr}}intervalChanged_(e,t,i){const r=this.parameterPositions;let n=e-2,s=e+1,o=r[n],l=r[s];if(o===void 0)switch(this.getSettings_().endingStart){case br:n=e,o=2*t-i;break;case Aa:n=r.length-2,o=t+r[n]-r[n+1];break;default:n=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case br:s=e,l=2*i-t;break;case Aa:s=1,l=i+r[1]-r[0];break;default:s=e-1,l=t}const c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=n*h,this._offsetNext=s*h}interpolate_(e,t,i,r){const n=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,m=(i-t)/(r-t),v=m*m,_=v*m,g=-d*_+2*d*v-d*m,f=(1+d)*_+(-1.5-2*d)*v+(-.5+d)*m+1,x=(-1-p)*_+(1.5+p)*v+.5*m,S=p*_-p*v;for(let w=0;w!==o;++w)n[w]=g*s[h+w]+f*s[c+w]+x*s[l+w]+S*s[u+w];return n}}class au extends mi{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const n=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(r-t),u=1-h;for(let d=0;d!==o;++d)n[d]=s[c+d]*u+s[l+d]*h;return n}}class mx extends mi{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class ti{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Qe.convertArray(t,this.TimeBufferType),this.values=Qe.convertArray(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Qe.convertArray(e.times,Array),values:Qe.convertArray(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new mx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new au(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new fx(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Mn:t=this.InterpolantFactoryMethodDiscrete;break;case yr:t=this.InterpolantFactoryMethodLinear;break;case Qs:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Mn;case this.InterpolantFactoryMethodLinear:return yr;case this.InterpolantFactoryMethodSmooth:return Qs}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){const i=this.times,r=i.length;let n=0,s=r-1;for(;n!==r&&i[n]<e;)++n;for(;s!==-1&&i[s]>t;)--s;if(++s,n!==0||s!==r){n>=s&&(s=Math.max(s,1),n=s-1);const o=this.getValueSize();this.times=Qe.arraySlice(i,n,s),this.values=Qe.arraySlice(this.values,n*o,s*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,r=this.values,n=i.length;n===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let s=null;for(let o=0;o!==n;o++){const l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(s!==null&&s>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,s),e=!1;break}s=l}if(r!==void 0&&Qe.isTypedArray(r))for(let o=0,l=r.length;o!==l;++o){const c=r[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=Qe.arraySlice(this.times),t=Qe.arraySlice(this.values),i=this.getValueSize(),r=this.getInterpolation()===Qs,n=e.length-1;let s=1;for(let o=1;o<n;++o){let l=!1;const c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(r)l=!0;else{const u=o*i,d=u-i,p=u+i;for(let m=0;m!==i;++m){const v=t[u+m];if(v!==t[d+m]||v!==t[p+m]){l=!0;break}}}if(l){if(o!==s){e[s]=e[o];const u=o*i,d=s*i;for(let p=0;p!==i;++p)t[d+p]=t[u+p]}++s}}if(n>0){e[s]=e[n];for(let o=n*i,l=s*i,c=0;c!==i;++c)t[l+c]=t[o+c];++s}return s!==e.length?(this.times=Qe.arraySlice(e,0,s),this.values=Qe.arraySlice(t,0,s*i)):(this.times=e,this.values=t),this}clone(){const e=Qe.arraySlice(this.times,0),t=Qe.arraySlice(this.values,0),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}ti.prototype.TimeBufferType=Float32Array,ti.prototype.ValueBufferType=Float32Array,ti.prototype.DefaultInterpolation=yr;class Xr extends ti{}Xr.prototype.ValueTypeName="bool",Xr.prototype.ValueBufferType=Array,Xr.prototype.DefaultInterpolation=Mn,Xr.prototype.InterpolantFactoryMethodLinear=void 0,Xr.prototype.InterpolantFactoryMethodSmooth=void 0;class su extends ti{}su.prototype.ValueTypeName="color";class jr extends ti{}jr.prototype.ValueTypeName="number";class gx extends mi{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const n=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=(i-t)/(r-t);let c=e*o;for(let h=c+o;c!==h;c+=4)Ge.slerpFlat(n,0,s,c-o,s,c,l);return n}}class Ui extends ti{InterpolantFactoryMethodLinear(e){return new gx(this.times,this.values,this.getValueSize(),e)}}Ui.prototype.ValueTypeName="quaternion",Ui.prototype.DefaultInterpolation=yr,Ui.prototype.InterpolantFactoryMethodSmooth=void 0;class Yr extends ti{}Yr.prototype.ValueTypeName="string",Yr.prototype.ValueBufferType=Array,Yr.prototype.DefaultInterpolation=Mn,Yr.prototype.InterpolantFactoryMethodLinear=void 0,Yr.prototype.InterpolantFactoryMethodSmooth=void 0;class rr extends ti{}rr.prototype.ValueTypeName="vector";class Qn{constructor(e,t=-1,i,r=qs){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=Ht(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,r=1/(e.fps||1);for(let s=0,o=i.length;s!==o;++s)t.push(_x(i[s]).scale(r));const n=new this(e.name,e.duration,t,e.blendMode);return n.uuid=e.uuid,n}static toJSON(e){const t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let n=0,s=i.length;n!==s;++n)t.push(ti.toJSON(i[n]));return r}static CreateFromMorphTargetSequence(e,t,i,r){const n=t.length,s=[];for(let o=0;o<n;o++){let l=[],c=[];l.push((o+n-1)%n,o,(o+1)%n),c.push(0,1,0);const h=Qe.getKeyframeOrder(l);l=Qe.sortedArray(l,1,h),c=Qe.sortedArray(c,1,h),!r&&l[0]===0&&(l.push(n),c.push(c[0])),s.push(new jr(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/i))}return new this(e,-1,s)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const r={},n=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],h=c.name.match(n);if(h&&h.length>1){const u=h[1];let d=r[u];d||(r[u]=d=[]),d.push(c)}}const s=[];for(const o in r)s.push(this.CreateFromMorphTargetSequence(o,r[o],t,i));return s}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(h,u,d,p,m){if(d.length!==0){const v=[],_=[];Qe.flattenJSON(d,v,_,p),v.length!==0&&m.push(new h(u,v,_))}},r=[],n=e.name||"default",s=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const u=c[h].keys;if(!(!u||u.length===0))if(u[0].morphTargets){const d={};let p;for(p=0;p<u.length;p++)if(u[p].morphTargets)for(let m=0;m<u[p].morphTargets.length;m++)d[u[p].morphTargets[m]]=-1;for(const m in d){const v=[],_=[];for(let g=0;g!==u[p].morphTargets.length;++g){const f=u[p];v.push(f.time),_.push(f.morphTarget===m?1:0)}r.push(new jr(".morphTargetInfluence["+m+"]",v,_))}l=d.length*(s||1)}else{const d=".bones["+t[h].name+"]";i(rr,d+".position",u,"pos",r),i(Ui,d+".quaternion",u,"rot",r),i(rr,d+".scale",u,"scl",r)}}return r.length===0?null:new this(n,l,r,o)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,r=e.length;i!==r;++i){const n=this.tracks[i];t=Math.max(t,n.times[n.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function vx(a){switch(a.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return jr;case"vector":case"vector2":case"vector3":case"vector4":return rr;case"color":return su;case"quaternion":return Ui;case"bool":case"boolean":return Xr;case"string":return Yr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+a)}function _x(a){if(a.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=vx(a.type);if(a.times===void 0){const t=[],i=[];Qe.flattenJSON(a.keys,t,i,"value"),a.times=t,a.values=i}return e.parse!==void 0?e.parse(a):new e(a.name,a.times,a.values,a.interpolation)}const Qr={enabled:!1,files:{},add:function(a,e){this.enabled!==!1&&(this.files[a]=e)},get:function(a){if(this.enabled!==!1)return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}};class xx{constructor(e,t,i){const r=this;let n=!1,s=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){o++,n===!1&&r.onStart!==void 0&&r.onStart(h,s,o),n=!0},this.itemEnd=function(h){s++,r.onProgress!==void 0&&r.onProgress(h,s,o),s===o&&(n=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const p=c[u],m=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return m}return null}}}const yx=new xx;class ii{constructor(e){this.manager=e!==void 0?e:yx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,n){i.load(e,r,t,n)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const Kt={};class us extends ii{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const n=this,s=Qr.get(e);if(s!==void 0)return n.manager.itemStart(e),setTimeout(function(){t&&t(s),n.manager.itemEnd(e)},0),s;if(Kt[e]!==void 0){Kt[e].push({onLoad:t,onProgress:i,onError:r});return}const o=/^data:(.*?)(;base64)?,(.*)$/,l=e.match(o);let c;if(l){const h=l[1],u=!!l[2];let d=l[3];d=decodeURIComponent(d),u&&(d=atob(d));try{let p;const m=(this.responseType||"").toLowerCase();switch(m){case"arraybuffer":case"blob":const v=new Uint8Array(d.length);for(let _=0;_<d.length;_++)v[_]=d.charCodeAt(_);m==="blob"?p=new Blob([v.buffer],{type:h}):p=v.buffer;break;case"document":p=new DOMParser().parseFromString(d,h);break;case"json":p=JSON.parse(d);break;default:p=d;break}setTimeout(function(){t&&t(p),n.manager.itemEnd(e)},0)}catch(p){setTimeout(function(){r&&r(p),n.manager.itemError(e),n.manager.itemEnd(e)},0)}}else{Kt[e]=[],Kt[e].push({onLoad:t,onProgress:i,onError:r}),c=new XMLHttpRequest,c.open("GET",e,!0),c.addEventListener("load",function(h){const u=this.response,d=Kt[e];if(delete Kt[e],this.status===200||this.status===0){this.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),Qr.add(e,u);for(let p=0,m=d.length;p<m;p++){const v=d[p];v.onLoad&&v.onLoad(u)}n.manager.itemEnd(e)}else{for(let p=0,m=d.length;p<m;p++){const v=d[p];v.onError&&v.onError(h)}n.manager.itemError(e),n.manager.itemEnd(e)}},!1),c.addEventListener("progress",function(h){const u=Kt[e];for(let d=0,p=u.length;d<p;d++){const m=u[d];m.onProgress&&m.onProgress(h)}},!1),c.addEventListener("error",function(h){const u=Kt[e];delete Kt[e];for(let d=0,p=u.length;d<p;d++){const m=u[d];m.onError&&m.onError(h)}n.manager.itemError(e),n.manager.itemEnd(e)},!1),c.addEventListener("abort",function(h){const u=Kt[e];delete Kt[e];for(let d=0,p=u.length;d<p;d++){const m=u[d];m.onError&&m.onError(h)}n.manager.itemError(e),n.manager.itemEnd(e)},!1),this.responseType!==void 0&&(c.responseType=this.responseType),this.withCredentials!==void 0&&(c.withCredentials=this.withCredentials),c.overrideMimeType&&c.overrideMimeType(this.mimeType!==void 0?this.mimeType:"text/plain");for(const h in this.requestHeader)c.setRequestHeader(h,this.requestHeader[h]);c.send(null)}return n.manager.itemStart(e),c}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class ou extends ii{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const n=this,s=Qr.get(e);if(s!==void 0)return n.manager.itemStart(e),setTimeout(function(){t&&t(s),n.manager.itemEnd(e)},0),s;const o=document.createElementNS("http://www.w3.org/1999/xhtml","img");function l(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1),Qr.add(e,this),t&&t(this),n.manager.itemEnd(e)}function c(h){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1),r&&r(h),n.manager.itemError(e),n.manager.itemEnd(e)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.substr(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),n.manager.itemStart(e),o.src=e,o}}class lu extends ii{constructor(e){super(e)}load(e,t,i,r){const n=new ja,s=new ou(this.manager);s.setCrossOrigin(this.crossOrigin),s.setPath(this.path);let o=0;function l(c){s.load(e[c],function(h){n.images[c]=h,o++,o===6&&(n.needsUpdate=!0,t&&t(n))},void 0,r)}for(let c=0;c<e.length;++c)l(c);return n}}class nr extends ii{constructor(e){super(e)}load(e,t,i,r){const n=new st,s=new ou(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(o){n.image=o;const l=e.search(/\.jpe?g($|\?)/i)>0||e.search(/^data\:image\/jpeg/)===0;n.format=l?Ti:Ct,n.needsUpdate=!0,t!==void 0&&t(n)},i,r),n}}class wx extends Bt{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new ss(t,e))}getPoint(e){const t=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=t){const n=i[r]-t,s=this.curves[r],o=s.getLength(),l=o===0?0:1-n/o;return s.getPointAt(l)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let r=0,n=this.curves;r<n.length;r++){const s=n[r],o=s&&s.isEllipseCurve?e*2:s&&(s.isLineCurve||s.isLineCurve3)?1:s&&s.isSplineCurve?e*s.points.length:e,l=s.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(new Zh[r.type]().fromJSON(r))}return this}}class Wo extends wx{constructor(e){super(),this.type="Path",this.currentPoint=new X,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new ss(this.currentPoint.clone(),new X(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){const n=new zo(this.currentPoint.clone(),new X(e,t),new X(i,r));return this.curves.push(n),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,n,s){const o=new Bo(this.currentPoint.clone(),new X(e,t),new X(i,r),new X(n,s));return this.curves.push(o),this.currentPoint.set(n,s),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new Ho(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,n,s){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,r,n,s),this}absarc(e,t,i,r,n,s){return this.absellipse(e,t,i,i,r,n,s),this}ellipse(e,t,i,r,n,s,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,r,n,s,o,l),this}absellipse(e,t,i,r,n,s,o,l){const c=new ns(e,t,i,r,n,s,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Xo extends Wo{constructor(e){super(e),this.uuid=Ht(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(new Wo().fromJSON(r))}return this}}class ri extends Ie{constructor(e,t=1){super(),this.type="Light",this.color=new Z(e),this.intensity=t}dispose(){}copy(e){return super.copy(e),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}ri.prototype.isLight=!0;class cu extends ri{constructor(e,t,i){super(e,i),this.type="HemisphereLight",this.position.copy(Ie.DefaultUp),this.updateMatrix(),this.groundColor=new Z(t)}copy(e){return ri.prototype.copy.call(this,e),this.groundColor.copy(e.groundColor),this}}cu.prototype.isHemisphereLight=!0;const hu=new ee,uu=new b,du=new b;class jo{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.mapSize=new X(512,512),this.map=null,this.mapPass=null,this.matrix=new ee,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qa,this._frameExtents=new X(1,1),this._viewportCount=1,this._viewports=[new Ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;uu.setFromMatrixPosition(e.matrixWorld),t.position.copy(uu),du.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(du),t.updateMatrixWorld(),hu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(t.projectionMatrix),i.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class pu extends jo{constructor(){super(new _t(50,1,.5,500)),this.focus=1}updateMatrices(e){const t=this.camera,i=Ln*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,n=e.distance||t.far;(i!==t.fov||r!==t.aspect||n!==t.far)&&(t.fov=i,t.aspect=r,t.far=n,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}pu.prototype.isSpotLightShadow=!0;class Yo extends ri{constructor(e,t,i=0,r=Math.PI/3,n=0,s=1){super(e,t),this.type="SpotLight",this.position.copy(Ie.DefaultUp),this.updateMatrix(),this.target=new Ie,this.distance=i,this.angle=r,this.penumbra=n,this.decay=s,this.shadow=new pu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}Yo.prototype.isSpotLight=!0;const fu=new ee,qn=new b,Qo=new b;class mu extends jo{constructor(){super(new _t(90,1,.5,500)),this._frameExtents=new X(4,2),this._viewportCount=6,this._viewports=[new Ue(2,1,1,1),new Ue(0,1,1,1),new Ue(3,1,1,1),new Ue(1,1,1,1),new Ue(3,0,1,1),new Ue(1,0,1,1)],this._cubeDirections=[new b(1,0,0),new b(-1,0,0),new b(0,0,1),new b(0,0,-1),new b(0,1,0),new b(0,-1,0)],this._cubeUps=[new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,0,1),new b(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,n=e.distance||i.far;n!==i.far&&(i.far=n,i.updateProjectionMatrix()),qn.setFromMatrixPosition(e.matrixWorld),i.position.copy(qn),Qo.copy(i.position),Qo.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Qo),i.updateMatrixWorld(),r.makeTranslation(-qn.x,-qn.y,-qn.z),fu.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fu)}}mu.prototype.isPointLightShadow=!0;class ds extends ri{constructor(e,t,i=0,r=1){super(e,t),this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new mu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}ds.prototype.isPointLight=!0;class ar extends So{constructor(e=-1,t=1,i=1,r=-1,n=.1,s=2e3){super(),this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=n,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,n,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=n,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let n=i-e,s=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;n+=c*this.view.offsetX,s=n+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(n,s,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}ar.prototype.isOrthographicCamera=!0;class gu extends jo{constructor(){super(new ar(-5,5,5,-5,.5,500))}}gu.prototype.isDirectionalLightShadow=!0;class ps extends ri{constructor(e,t){super(e,t),this.type="DirectionalLight",this.position.copy(Ie.DefaultUp),this.updateMatrix(),this.target=new Ie,this.shadow=new gu}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}ps.prototype.isDirectionalLight=!0;class qo extends ri{constructor(e,t){super(e,t),this.type="AmbientLight"}}qo.prototype.isAmbientLight=!0;class bx extends ri{constructor(e,t,i=10,r=10){super(e,t),this.type="RectAreaLight",this.width=i,this.height=r}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}bx.prototype.isRectAreaLight=!0;class vu{constructor(){this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new b)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const i=e.x,r=e.y,n=e.z,s=this.coefficients;return t.copy(s[0]).multiplyScalar(.282095),t.addScaledVector(s[1],.488603*r),t.addScaledVector(s[2],.488603*n),t.addScaledVector(s[3],.488603*i),t.addScaledVector(s[4],1.092548*(i*r)),t.addScaledVector(s[5],1.092548*(r*n)),t.addScaledVector(s[6],.315392*(3*n*n-1)),t.addScaledVector(s[7],1.092548*(i*n)),t.addScaledVector(s[8],.546274*(i*i-r*r)),t}getIrradianceAt(e,t){const i=e.x,r=e.y,n=e.z,s=this.coefficients;return t.copy(s[0]).multiplyScalar(.886227),t.addScaledVector(s[1],2*.511664*r),t.addScaledVector(s[2],2*.511664*n),t.addScaledVector(s[3],2*.511664*i),t.addScaledVector(s[4],2*.429043*i*r),t.addScaledVector(s[5],2*.429043*r*n),t.addScaledVector(s[6],.743125*n*n-.247708),t.addScaledVector(s[7],2*.429043*i*n),t.addScaledVector(s[8],.429043*(i*i-r*r)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let i=0;i<9;i++)this.coefficients[i].addScaledVector(e.coefficients[i],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let i=0;i<9;i++)this.coefficients[i].lerp(e.coefficients[i],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const i=this.coefficients;for(let r=0;r<9;r++)i[r].fromArray(e,t+r*3);return this}toArray(e=[],t=0){const i=this.coefficients;for(let r=0;r<9;r++)i[r].toArray(e,t+r*3);return e}static getBasisAt(e,t){const i=e.x,r=e.y,n=e.z;t[0]=.282095,t[1]=.488603*r,t[2]=.488603*n,t[3]=.488603*i,t[4]=1.092548*i*r,t[5]=1.092548*r*n,t[6]=.315392*(3*n*n-1),t[7]=1.092548*i*n,t[8]=.546274*(i*i-r*r)}}vu.prototype.isSphericalHarmonics3=!0;class Jo extends ri{constructor(e=new vu,t=1){super(void 0,t),this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}Jo.prototype.isLightProbe=!0;class gi{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,r=e.length;i<r;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.substr(0,t+1)}}class Sx extends Fe{constructor(){super(),this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}clone(){return new this.constructor().copy(this)}toJSON(){const e=super.toJSON(this);return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}Sx.prototype.isInstancedBufferGeometry=!0;class Mx extends Ke{constructor(e,t,i,r=1){typeof i=="number"&&(r=i,i=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")),super(e,t,i),this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}Mx.prototype.isInstancedBufferAttribute=!0;class _u extends ii{constructor(e){super(e),typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const n=this,s=Qr.get(e);if(s!==void 0)return n.manager.itemStart(e),setTimeout(function(){t&&t(s),n.manager.itemEnd(e)},0),s;const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(n.options,{colorSpaceConversion:"none"}))}).then(function(l){Qr.add(e,l),t&&t(l),n.manager.itemEnd(e)}).catch(function(l){r&&r(l),n.manager.itemError(e),n.manager.itemEnd(e)}),n.manager.itemStart(e)}}_u.prototype.isImageBitmapLoader=!0;let fs;const xu={getContext:function(){return fs===void 0&&(fs=new(window.AudioContext||window.webkitAudioContext)),fs},setContext:function(a){fs=a}};class Zo extends ii{constructor(e){super(e)}load(e,t,i,r){const n=this,s=new us(this.manager);s.setResponseType("arraybuffer"),s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,function(o){try{const l=o.slice(0);xu.getContext().decodeAudioData(l,function(c){t(c)})}catch(l){r?r(l):console.error(l),n.manager.itemError(e)}},i,r)}}class Tx extends Jo{constructor(e,t,i=1){super(void 0,i);const r=new Z().set(e),n=new Z().set(t),s=new b(r.r,r.g,r.b),o=new b(n.r,n.g,n.b),l=Math.sqrt(Math.PI),c=l*Math.sqrt(.75);this.sh.coefficients[0].copy(s).add(o).multiplyScalar(l),this.sh.coefficients[1].copy(s).sub(o).multiplyScalar(c)}}Tx.prototype.isHemisphereLightProbe=!0;class Ax extends Jo{constructor(e,t=1){super(void 0,t);const i=new Z().set(e);this.sh.coefficients[0].set(i.r,i.g,i.b).multiplyScalar(2*Math.sqrt(Math.PI))}}Ax.prototype.isAmbientLightProbe=!0;class yu{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=wu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=wu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function wu(){return(typeof performance>"u"?Date:performance).now()}const sr=new b,bu=new Ge,Ex=new b,or=new b;class Su extends Ie{constructor(){super(),this.type="AudioListener",this.context=xu.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new yu}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener,i=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(sr,bu,Ex),or.set(0,0,-1).applyQuaternion(bu),t.positionX){const r=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(sr.x,r),t.positionY.linearRampToValueAtTime(sr.y,r),t.positionZ.linearRampToValueAtTime(sr.z,r),t.forwardX.linearRampToValueAtTime(or.x,r),t.forwardY.linearRampToValueAtTime(or.y,r),t.forwardZ.linearRampToValueAtTime(or.z,r),t.upX.linearRampToValueAtTime(i.x,r),t.upY.linearRampToValueAtTime(i.y,r),t.upZ.linearRampToValueAtTime(i.z,r)}else t.setPosition(sr.x,sr.y,sr.z),t.setOrientation(or.x,or.y,or.z,i.x,i.y,i.z)}}class Mu extends Ie{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){if(this.detune=e,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}const lr=new b,Tu=new Ge,Lx=new b,cr=new b;class Ko extends Mu{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,i){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=i,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(lr,Tu,Lx),cr.set(0,0,1).applyQuaternion(Tu);const t=this.panner;if(t.positionX){const i=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(lr.x,i),t.positionY.linearRampToValueAtTime(lr.y,i),t.positionZ.linearRampToValueAtTime(lr.z,i),t.orientationX.linearRampToValueAtTime(cr.x,i),t.orientationY.linearRampToValueAtTime(cr.y,i),t.orientationZ.linearRampToValueAtTime(cr.z,i)}else t.setPosition(lr.x,lr.y,lr.z),t.setOrientation(cr.x,cr.y,cr.z)}}class Px{constructor(e,t,i){this.binding=e,this.valueSize=i;let r,n,s;switch(t){case"quaternion":r=this._slerp,n=this._slerpAdditive,s=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":r=this._select,n=this._select,s=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:r=this._lerp,n=this._lerpAdditive,s=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=r,this._mixBufferRegionAdditive=n,this._setIdentity=s,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const i=this.buffer,r=this.valueSize,n=e*r+r;let s=this.cumulativeWeight;if(s===0){for(let o=0;o!==r;++o)i[n+o]=i[o];s=t}else{s+=t;const o=t/s;this._mixBufferRegion(i,n,0,o,r)}this.cumulativeWeight=s}accumulateAdditive(e){const t=this.buffer,i=this.valueSize,r=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,r,0,e,i),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,i=this.buffer,r=e*t+t,n=this.cumulativeWeight,s=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,n<1){const l=t*this._origIndex;this._mixBufferRegion(i,r,l,1-n,t)}s>0&&this._mixBufferRegionAdditive(i,r,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(i[l]!==i[l+t]){o.setValue(i,r);break}}saveOriginalState(){const e=this.binding,t=this.buffer,i=this.valueSize,r=i*this._origIndex;e.getValue(t,r);for(let n=i,s=r;n!==s;++n)t[n]=t[r+n%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let i=e;i<t;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[t+i]=this.buffer[e+i]}_select(e,t,i,r,n){if(r>=.5)for(let s=0;s!==n;++s)e[t+s]=e[i+s]}_slerp(e,t,i,r){Ge.slerpFlat(e,t,e,t,e,i,r)}_slerpAdditive(e,t,i,r,n){const s=this._workIndex*n;Ge.multiplyQuaternionsFlat(e,s,e,t,e,i),Ge.slerpFlat(e,t,e,t,e,s,r)}_lerp(e,t,i,r,n){const s=1-r;for(let o=0;o!==n;++o){const l=t+o;e[l]=e[l]*s+e[i+o]*r}}_lerpAdditive(e,t,i,r,n){for(let s=0;s!==n;++s){const o=t+s;e[o]=e[o]+e[i+s]*r}}}const $o="\\[\\]\\.:\\/",Cx=new RegExp("["+$o+"]","g"),el="[^"+$o+"]",Rx="[^"+$o.replace("\\.","")+"]",Ix=/((?:WC+[\/:])*)/.source.replace("WC",el),Fx=/(WCOD+)?/.source.replace("WCOD",Rx),Nx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",el),Dx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",el),Ux=new RegExp("^"+Ix+Fx+Nx+Dx+"$"),Ox=["material","materials","bones"];class Bx{constructor(e,t,i){const r=i||ze.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,n=i.length;r!==n;++r)i[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class ze{constructor(e,t,i){this.path=t,this.parsedPath=i||ze.parseTrackName(t),this.node=ze.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new ze.Composite(e,t,i):new ze(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Cx,"")}static parseTrackName(e){const t=Ux.exec(e);if(!t)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const n=i.nodeName.substring(r+1);Ox.indexOf(n)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=n)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(!t||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(n){for(let s=0;s<n.length;s++){const o=n[s];if(o.name===t||o.uuid===t)return o;const l=i(o.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.node[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let r=0,n=i.length;r!==n;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let r=0,n=i.length;r!==n;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,n=i.length;r!==n;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,n=i.length;r!==n;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,r=t.propertyName;let n=t.propertyIndex;if(e||(e=ze.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const s=e[r];if(s===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(n!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(e.geometry.isBufferGeometry){if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[n]!==void 0&&(n=e.morphTargetDictionary[n])}else{console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",this);return}}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=n}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ze.Composite=Bx,ze.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},ze.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},ze.prototype.GetterByBindingType=[ze.prototype._getValue_direct,ze.prototype._getValue_array,ze.prototype._getValue_arrayElement,ze.prototype._getValue_toArray],ze.prototype.SetterByBindingTypeAndVersioning=[[ze.prototype._setValue_direct,ze.prototype._setValue_direct_setNeedsUpdate,ze.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ze.prototype._setValue_array,ze.prototype._setValue_array_setNeedsUpdate,ze.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ze.prototype._setValue_arrayElement,ze.prototype._setValue_arrayElement_setNeedsUpdate,ze.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ze.prototype._setValue_fromArray,ze.prototype._setValue_fromArray_setNeedsUpdate,ze.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class zx{constructor(e,t,i=null,r=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=i,this.blendMode=r;const n=t.tracks,s=n.length,o=new Array(s),l={endingStart:wr,endingEnd:wr};for(let c=0;c!==s;++c){const h=n[c].createInterpolant(null);o[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(s),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Cf,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,i){if(e.fadeOut(t),this.fadeIn(t),i){const r=this._clip.duration,n=e._clip.duration,s=n/r,o=r/n;e.warp(1,s,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,i){return e.crossFadeFrom(this,t,i)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,i){const r=this._mixer,n=r.time,s=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=r._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=n,l[1]=n+i,c[0]=e/s,c[1]=t/s,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,i,r){if(!this.enabled){this._updateWeight(e);return}const n=this._startTime;if(n!==null){const l=(e-n)*i;if(l<0||i===0)return;this._startTime=null,t=i*l}t*=this._updateTimeScale(e);const s=this._updateTime(t),o=this._updateWeight(e);if(o>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Lc:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(s),c[h].accumulateAdditive(o);break;case qs:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(s),c[h].accumulate(r,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const i=this._weightInterpolant;if(i!==null){const r=i.evaluate(e)[0];t*=r,e>i.parameterPositions[1]&&(this.stopFading(),r===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const i=this._timeScaleInterpolant;if(i!==null){const r=i.evaluate(e)[0];t*=r,e>i.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,i=this.loop;let r=this.time+e,n=this._loopCount;const s=i===Rf;if(e===0)return n===-1?r:s&&(n&1)===1?t-r:r;if(i===Ta){n===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(r>=t)r=t;else if(r<0)r=0;else{this.time=r;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(n===-1&&(e>=0?(n=0,this._setEndings(!0,this.repetitions===0,s)):this._setEndings(this.repetitions===0,!0,s)),r>=t||r<0){const o=Math.floor(r/t);r-=t*o,n+=Math.abs(o);const l=this.repetitions-n;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,r=e>0?t:0,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,s)}else this._setEndings(!1,!1,s);this._loopCount=n,this.time=r,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=r;if(s&&(n&1)===1)return t-r}return r}_setEndings(e,t,i){const r=this._interpolantSettings;i?(r.endingStart=br,r.endingEnd=br):(e?r.endingStart=this.zeroSlopeAtStart?br:wr:r.endingStart=Aa,t?r.endingEnd=this.zeroSlopeAtEnd?br:wr:r.endingEnd=Aa)}_scheduleFading(e,t,i){const r=this._mixer,n=r.time;let s=this._weightInterpolant;s===null&&(s=r._lendControlInterpolant(),this._weightInterpolant=s);const o=s.parameterPositions,l=s.sampleValues;return o[0]=n,l[0]=t,o[1]=n+e,l[1]=i,this}}class tl extends Zi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const i=e._localRoot||this._root,r=e._clip.tracks,n=r.length,s=e._propertyBindings,o=e._interpolants,l=i.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==n;++u){const d=r[u],p=d.name;let m=h[p];if(m!==void 0)s[u]=m;else{if(m=s[u],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,l,p));continue}const v=t&&t._propertyBindings[u].binding.parsedPath;m=new Px(ze.create(i,p,v),d.ValueTypeName,d.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,l,p),s[u]=m}o[u].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const i=(e._localRoot||this._root).uuid,r=e._clip.uuid,n=this._actionsByClip[r];this._bindAction(e,n&&n.knownActions[0]),this._addInactiveAction(e,r,i)}const t=e._propertyBindings;for(let i=0,r=t.length;i!==r;++i){const n=t[i];n.useCount++===0&&(this._lendBinding(n),n.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let i=0,r=t.length;i!==r;++i){const n=t[i];--n.useCount===0&&(n.restoreOriginalState(),this._takeBackBinding(n))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,i){const r=this._actions,n=this._actionsByClip;let s=n[t];if(s===void 0)s={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,n[t]=s;else{const o=s.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=r.length,r.push(e),s.actionByRoot[i]=e}_removeInactiveAction(e){const t=this._actions,i=t[t.length-1],r=e._cacheIndex;i._cacheIndex=r,t[r]=i,t.pop(),e._cacheIndex=null;const n=e._clip.uuid,s=this._actionsByClip,o=s[n],l=o.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;const u=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],l.length===0&&delete s[n],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let i=0,r=t.length;i!==r;++i){const n=t[i];--n.referenceCount===0&&this._removeInactiveBinding(n)}}_lendAction(e){const t=this._actions,i=e._cacheIndex,r=this._nActiveActions++,n=t[r];e._cacheIndex=r,t[r]=e,n._cacheIndex=i,t[i]=n}_takeBackAction(e){const t=this._actions,i=e._cacheIndex,r=--this._nActiveActions,n=t[r];e._cacheIndex=r,t[r]=e,n._cacheIndex=i,t[i]=n}_addInactiveBinding(e,t,i){const r=this._bindingsByRootAndName,n=this._bindings;let s=r[t];s===void 0&&(s={},r[t]=s),s[i]=e,e._cacheIndex=n.length,n.push(e)}_removeInactiveBinding(e){const t=this._bindings,i=e.binding,r=i.rootNode.uuid,n=i.path,s=this._bindingsByRootAndName,o=s[r],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[n],Object.keys(o).length===0&&delete s[r]}_lendBinding(e){const t=this._bindings,i=e._cacheIndex,r=this._nActiveBindings++,n=t[r];e._cacheIndex=r,t[r]=e,n._cacheIndex=i,t[i]=n}_takeBackBinding(e){const t=this._bindings,i=e._cacheIndex,r=--this._nActiveBindings,n=t[r];e._cacheIndex=r,t[r]=e,n._cacheIndex=i,t[i]=n}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let i=e[t];return i===void 0&&(i=new au(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),i.__cacheIndex=t,e[t]=i),i}_takeBackControlInterpolant(e){const t=this._controlInterpolants,i=e.__cacheIndex,r=--this._nActiveControlInterpolants,n=t[r];e.__cacheIndex=r,t[r]=e,n.__cacheIndex=i,t[i]=n}clipAction(e,t,i){const r=t||this._root,n=r.uuid;let s=typeof e=="string"?Qn.findByName(r,e):e;const o=s!==null?s.uuid:e,l=this._actionsByClip[o];let c=null;if(i===void 0&&(s!==null?i=s.blendMode:i=qs),l!==void 0){const u=l.actionByRoot[n];if(u!==void 0&&u.blendMode===i)return u;c=l.knownActions[0],s===null&&(s=c._clip)}if(s===null)return null;const h=new zx(this,s,t,i);return this._bindAction(h,c),this._addInactiveAction(h,o,n),h}existingAction(e,t){const i=t||this._root,r=i.uuid,n=typeof e=="string"?Qn.findByName(i,e):e,s=n?n.uuid:e,o=this._actionsByClip[s];return o!==void 0&&o.actionByRoot[r]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let i=t-1;i>=0;--i)e[i].stop();return this}update(e){e*=this.timeScale;const t=this._actions,i=this._nActiveActions,r=this.time+=e,n=Math.sign(e),s=this._accuIndex^=1;for(let c=0;c!==i;++c)t[c]._update(r,e,n,s);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(s);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,i=e.uuid,r=this._actionsByClip,n=r[i];if(n!==void 0){const s=n.knownActions;for(let o=0,l=s.length;o!==l;++o){const c=s[o];this._deactivateAction(c);const h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete r[i]}}uncacheRoot(e){const t=e.uuid,i=this._actionsByClip;for(const s in i){const o=i[s].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const r=this._bindingsByRootAndName,n=r[t];if(n!==void 0)for(const s in n){const o=n[s];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const i=this.existingAction(e,t);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}}tl.prototype._controlInterpolantsResultBuffer=new Float32Array(1);class Hx extends zr{constructor(e,t,i=1){super(e,t),this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}Hx.prototype.isInstancedInterleavedBuffer=!0;class kx extends Ie{constructor(e){super(),this.material=e,this.render=function(){},this.hasPositions=!1,this.hasNormals=!1,this.hasColors=!1,this.hasUvs=!1,this.positionArray=null,this.normalArray=null,this.colorArray=null,this.uvArray=null,this.count=0}}kx.prototype.isImmediateRenderObject=!0;const Oi=new b,ms=new ee,il=new ee;class Au extends ts{constructor(e){const t=Eu(e),i=new Fe,r=[],n=[],s=new Z(0,0,1),o=new Z(0,1,0);for(let c=0;c<t.length;c++){const h=t[c];h.parent&&h.parent.isBone&&(r.push(0,0,0),r.push(0,0,0),n.push(s.r,s.g,s.b),n.push(o.r,o.g,o.b))}i.setAttribute("position",new be(r,3)),i.setAttribute("color",new be(n,3));const l=new tr({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(i,l),this.type="SkeletonHelper",this.isSkeletonHelper=!0,this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){const t=this.bones,i=this.geometry,r=i.getAttribute("position");il.copy(this.root.matrixWorld).invert();for(let n=0,s=0;n<t.length;n++){const o=t[n];o.parent&&o.parent.isBone&&(ms.multiplyMatrices(il,o.matrixWorld),Oi.setFromMatrixPosition(ms),r.setXYZ(s,Oi.x,Oi.y,Oi.z),ms.multiplyMatrices(il,o.parent.matrixWorld),Oi.setFromMatrixPosition(ms),r.setXYZ(s+1,Oi.x,Oi.y,Oi.z),s+=2)}i.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}}function Eu(a){const e=[];a&&a.isBone&&e.push(a);for(let t=0;t<a.children.length;t++)e.push.apply(e,Eu(a.children[t]));return e}class Gx extends ts{constructor(e=10,t=10,i=4473924,r=8947848){i=new Z(i),r=new Z(r);const n=t/2,s=e/t,o=e/2,l=[],c=[];for(let d=0,p=0,m=-o;d<=t;d++,m+=s){l.push(-o,0,m,o,0,m),l.push(m,0,-o,m,0,o);const v=d===n?i:r;v.toArray(c,p),p+=3,v.toArray(c,p),p+=3,v.toArray(c,p),p+=3,v.toArray(c,p),p+=3}const h=new Fe;h.setAttribute("position",new be(l,3)),h.setAttribute("color",new be(c,3));const u=new tr({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}}const Vx=new Float32Array(1);new Int32Array(Vx.buffer);const Wx=new Zt({side:nt,depthWrite:!1,depthTest:!1});new qe(new bi,Wx),Bt.create=function(a,e){return console.log("THREE.Curve.create() has been deprecated"),a.prototype=Object.create(Bt.prototype),a.prototype.constructor=a,a.prototype.getPoint=e,a},Wo.prototype.fromPoints=function(a){return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),this.setFromPoints(a)},Gx.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")},Au.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.")},ii.prototype.extractUrlBase=function(a){return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),gi.extractUrlBase(a)},ii.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")}},Dt.prototype.center=function(a){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(a)},Dt.prototype.empty=function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()},Dt.prototype.isIntersectionBox=function(a){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(a)},Dt.prototype.isIntersectionSphere=function(a){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(a)},Dt.prototype.size=function(a){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(a)},Li.prototype.empty=function(){return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),this.isEmpty()},Qa.prototype.setFromMatrix=function(a){return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),this.setFromProjectionMatrix(a)},dt.prototype.flattenToArrayOffset=function(a,e){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(a,e)},dt.prototype.multiplyVector3=function(a){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),a.applyMatrix3(this)},dt.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")},dt.prototype.applyToBufferAttribute=function(a){return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),a.applyMatrix3(this)},dt.prototype.applyToVector3Array=function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")},dt.prototype.getInverse=function(a){return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(a).invert()},ee.prototype.extractPosition=function(a){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(a)},ee.prototype.flattenToArrayOffset=function(a,e){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(a,e)},ee.prototype.getPosition=function(){return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),new b().setFromMatrixColumn(this,3)},ee.prototype.setRotationFromQuaternion=function(a){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(a)},ee.prototype.multiplyToArray=function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")},ee.prototype.multiplyVector3=function(a){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),a.applyMatrix4(this)},ee.prototype.multiplyVector4=function(a){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),a.applyMatrix4(this)},ee.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")},ee.prototype.rotateAxis=function(a){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),a.transformDirection(this)},ee.prototype.crossVector=function(a){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),a.applyMatrix4(this)},ee.prototype.translate=function(){console.error("THREE.Matrix4: .translate() has been removed.")},ee.prototype.rotateX=function(){console.error("THREE.Matrix4: .rotateX() has been removed.")},ee.prototype.rotateY=function(){console.error("THREE.Matrix4: .rotateY() has been removed.")},ee.prototype.rotateZ=function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")},ee.prototype.rotateByAxis=function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")},ee.prototype.applyToBufferAttribute=function(a){return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),a.applyMatrix4(this)},ee.prototype.applyToVector3Array=function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")},ee.prototype.makeFrustum=function(a,e,t,i,r,n){return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(a,e,i,t,r,n)},ee.prototype.getInverse=function(a){return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(a).invert()},fi.prototype.isIntersectionLine=function(a){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(a)},Ge.prototype.multiplyVector3=function(a){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),a.applyQuaternion(this)},Ge.prototype.inverse=function(){return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."),this.invert()},er.prototype.isIntersectionBox=function(a){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(a)},er.prototype.isIntersectionPlane=function(a){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(a)},er.prototype.isIntersectionSphere=function(a){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(a)},ht.prototype.area=function(){return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea()},ht.prototype.barycoordFromPoint=function(a,e){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(a,e)},ht.prototype.midpoint=function(a){return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(a)},ht.prototypenormal=function(a){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(a)},ht.prototype.plane=function(a){return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(a)},ht.barycoordFromPoint=function(a,e,t,i,r){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),ht.getBarycoord(a,e,t,i,r)},ht.normal=function(a,e,t,i){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),ht.getNormal(a,e,t,i)},Xo.prototype.extractAllPoints=function(a){return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),this.extractPoints(a)},Xo.prototype.extrude=function(a){return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),new pn(this,a)},Xo.prototype.makeGeometry=function(a){return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),new Wl(this,a)},X.prototype.fromAttribute=function(a,e,t){return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(a,e,t)},X.prototype.distanceToManhattan=function(a){return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(a)},X.prototype.lengthManhattan=function(){return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()},b.prototype.setEulerFromRotationMatrix=function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")},b.prototype.setEulerFromQuaternion=function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")},b.prototype.getPositionFromMatrix=function(a){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(a)},b.prototype.getScaleFromMatrix=function(a){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(a)},b.prototype.getColumnFromMatrix=function(a,e){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(e,a)},b.prototype.applyProjection=function(a){return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(a)},b.prototype.fromAttribute=function(a,e,t){return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(a,e,t)},b.prototype.distanceToManhattan=function(a){return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(a)},b.prototype.lengthManhattan=function(){return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()},Ue.prototype.fromAttribute=function(a,e,t){return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(a,e,t)},Ue.prototype.lengthManhattan=function(){return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()},Ie.prototype.getChildByName=function(a){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(a)},Ie.prototype.renderDepth=function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")},Ie.prototype.translate=function(a,e){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(e,a)},Ie.prototype.getWorldRotation=function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")},Ie.prototype.applyMatrix=function(a){return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(a)},Object.defineProperties(Ie.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(a){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=a}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}}),qe.prototype.setDrawMode=function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")},Object.defineProperties(qe.prototype,{drawMode:{get:function(){return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),If},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}}),Ka.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.")},_t.prototype.setLens=function(a,e){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),e!==void 0&&(this.filmGauge=e),this.setFocalLength(a)},Object.defineProperties(ri.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(a){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=a}},shadowCameraLeft:{set:function(a){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=a}},shadowCameraRight:{set:function(a){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=a}},shadowCameraTop:{set:function(a){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=a}},shadowCameraBottom:{set:function(a){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=a}},shadowCameraNear:{set:function(a){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=a}},shadowCameraFar:{set:function(a){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=a}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(a){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=a}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(a){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=a}},shadowMapHeight:{set:function(a){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=a}}}),Object.defineProperties(Ke.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}},dynamic:{get:function(){return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.usage===Ea},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.setUsage(Ea)}}}),Ke.prototype.setDynamic=function(a){return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(a===!0?Ea:An),this},Ke.prototype.copyIndicesArray=function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")},Ke.prototype.setArray=function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")},Fe.prototype.addIndex=function(a){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(a)},Fe.prototype.addAttribute=function(a,e){return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),!(e&&e.isBufferAttribute)&&!(e&&e.isInterleavedBufferAttribute)?(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(a,new Ke(arguments[1],arguments[2]))):a==="index"?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(e),this):this.setAttribute(a,e)},Fe.prototype.addDrawCall=function(a,e,t){t!==void 0&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(a,e)},Fe.prototype.clearDrawCalls=function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()},Fe.prototype.computeOffsets=function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")},Fe.prototype.removeAttribute=function(a){return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),this.deleteAttribute(a)},Fe.prototype.applyMatrix=function(a){return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(a)},Object.defineProperties(Fe.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}}),zr.prototype.setDynamic=function(a){return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(a===!0?Ea:An),this},zr.prototype.setArray=function(){console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")},pn.prototype.getArrays=function(){console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.")},pn.prototype.addShapeList=function(){console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.")},pn.prototype.addShape=function(){console.error("THREE.ExtrudeGeometry: .addShape() has been removed.")},Un.prototype.dispose=function(){console.error("THREE.Scene: .dispose() has been removed.")},Object.defineProperties(pt.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE.Material: .wrapRGB has been removed."),new Z}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(a){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=a===oc}},stencilMask:{get:function(){return console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask},set:function(a){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask=a}}}),Object.defineProperties(mt.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(a){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=a}}}),Ve.prototype.clearTarget=function(a,e,t,i){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),this.setRenderTarget(a),this.clear(e,t,i)},Ve.prototype.animate=function(a){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(a)},Ve.prototype.getCurrentRenderTarget=function(){return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget()},Ve.prototype.getMaxAnisotropy=function(){return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()},Ve.prototype.getPrecision=function(){return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision},Ve.prototype.resetGLState=function(){return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset()},Ve.prototype.supportsFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")},Ve.prototype.supportsHalfFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")},Ve.prototype.supportsStandardDerivatives=function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")},Ve.prototype.supportsCompressedTextureS3TC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")},Ve.prototype.supportsCompressedTexturePVRTC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")},Ve.prototype.supportsBlendMinMax=function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")},Ve.prototype.supportsVertexTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures},Ve.prototype.supportsInstancedArrays=function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")},Ve.prototype.enableScissorTest=function(a){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(a)},Ve.prototype.initMaterial=function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")},Ve.prototype.addPrePlugin=function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")},Ve.prototype.addPostPlugin=function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")},Ve.prototype.updateShadowMap=function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")},Ve.prototype.setFaceCulling=function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")},Ve.prototype.allocTextureUnit=function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")},Ve.prototype.setTexture=function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")},Ve.prototype.setTexture2D=function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")},Ve.prototype.setTextureCube=function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")},Ve.prototype.getActiveMipMapLevel=function(){return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),this.getActiveMipmapLevel()},Object.defineProperties(Ve.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(a){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=a}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(a){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=a}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}},context:{get:function(){return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),this.getContext()}},vr:{get:function(){return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),this.xr}},gammaInput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),!1},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")}},gammaOutput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),!1},set:function(a){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),this.outputEncoding=a===!0?Rt:Tn}},toneMappingWhitePoint:{get:function(){return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),1},set:function(){console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")}}}),Object.defineProperties(bh.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}}),Object.defineProperties(Ft.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(a){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=a}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(a){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=a}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(a){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=a}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(a){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=a}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(a){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=a}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(a){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=a}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(a){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=a}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(a){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=a}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(a){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=a}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(a){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=a}}}),Mu.prototype.load=function(a){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");const e=this;return new Zo().load(a,function(t){e.setBuffer(t)}),this},Mo.prototype.updateCubeMap=function(a,e){return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(a,e)},Mo.prototype.clear=function(a,e,t,i){return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."),this.renderTarget.clear(a,e,t,i)},Mr.crossOrigin=void 0,Mr.loadTexture=function(a,e,t,i){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");const r=new nr;r.setCrossOrigin(this.crossOrigin);const n=r.load(a,t,void 0,i);return e&&(n.mapping=e),n},Mr.loadTextureCube=function(a,e,t,i){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");const r=new lu;r.setCrossOrigin(this.crossOrigin);const n=r.load(a,t,void 0,i);return e&&(n.mapping=e),n},Mr.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")},Mr.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rc}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rc);var gs={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;

		}`};class Jn{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}}const Xx=new ar(-1,1,1,-1,0,1),rl=new Fe;rl.setAttribute("position",new be([-1,3,0,-1,-1,0,3,-1,0],3)),rl.setAttribute("uv",new be([0,2,0,0,2,0],2));class Lu{constructor(e){this._mesh=new qe(rl,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Xx)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Zn extends Jn{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof mt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Xa.clone(e.uniforms),this.material=new mt({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Lu(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}}class Pu extends Jn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const r=e.getContext(),n=e.state;n.buffers.color.setMask(!1),n.buffers.depth.setMask(!1),n.buffers.color.setLocked(!0),n.buffers.depth.setLocked(!0);let s,o;this.inverse?(s=0,o=1):(s=1,o=0),n.buffers.stencil.setTest(!0),n.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),n.buffers.stencil.setFunc(r.ALWAYS,s,4294967295),n.buffers.stencil.setClear(o),n.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),n.buffers.color.setLocked(!1),n.buffers.depth.setLocked(!1),n.buffers.stencil.setLocked(!1),n.buffers.stencil.setFunc(r.EQUAL,1,4294967295),n.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),n.buffers.stencil.setLocked(!0)}}class jx extends Jn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Yx{constructor(e,t){if(this.renderer=e,t===void 0){const i={minFilter:ut,magFilter:ut,format:Ct},r=e.getSize(new X);this._pixelRatio=e.getPixelRatio(),this._width=r.width,this._height=r.height,t=new Ft(this._width*this._pixelRatio,this._height*this._pixelRatio,i),t.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],gs===void 0&&console.error("THREE.EffectComposer relies on CopyShader"),Zn===void 0&&console.error("THREE.EffectComposer relies on ShaderPass"),this.copyPass=new Zn(gs),this.clock=new yu}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let r=0,n=this.passes.length;r<n;r++){const s=this.passes[r];if(s.enabled!==!1){if(s.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),s.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),s.needsSwap){if(i){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Pu!==void 0&&(s instanceof Pu?i=!0:s instanceof jx&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new X);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let n=0;n<this.passes.length;n++)this.passes[n].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}}new ar(-1,1,1,-1,0,1);const Cu=new Fe;Cu.setAttribute("position",new be([-1,3,0,-1,-1,0,3,-1,0],3)),Cu.setAttribute("uv",new be([0,2,0,0,2,0],2));const Qx={uniforms:{tDiffuse:{value:null}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 tex = texture2D( tDiffuse, vUv );

			gl_FragColor = LinearTosRGB( tex ); // optional: LinearToGamma( tex, float( GAMMA_FACTOR ) );

		}`};class nl extends Jn{constructor(e,t,i,r,n){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=n!==void 0?n:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Z}render(e,t,i){const r=e.autoClear;e.autoClear=!1;let n,s;this.overrideMaterial!==void 0&&(s=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),n=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,n),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=s),e.autoClear=r}}const qx={uniforms:{tDiffuse:{value:null},resolution:{value:new X(1/1024,1/512)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		uniform vec2 resolution;

		varying vec2 vUv;

		#define FXAA_PC 1
		#define FXAA_GLSL_100 1
		#define FXAA_QUALITY_PRESET 12

		#define FXAA_GREEN_AS_LUMA 1

		/*--------------------------------------------------------------------------*/
		#ifndef FXAA_PC_CONSOLE
				//
				// The console algorithm for PC is included
				// for developers targeting really low spec machines.
				// Likely better to just run FXAA_PC, and use a really low preset.
				//
				#define FXAA_PC_CONSOLE 0
		#endif
		/*--------------------------------------------------------------------------*/
		#ifndef FXAA_GLSL_120
				#define FXAA_GLSL_120 0
		#endif
		/*--------------------------------------------------------------------------*/
		#ifndef FXAA_GLSL_130
				#define FXAA_GLSL_130 0
		#endif
		/*--------------------------------------------------------------------------*/
		#ifndef FXAA_HLSL_3
				#define FXAA_HLSL_3 0
		#endif
		/*--------------------------------------------------------------------------*/
		#ifndef FXAA_HLSL_4
				#define FXAA_HLSL_4 0
		#endif
		/*--------------------------------------------------------------------------*/
		#ifndef FXAA_HLSL_5
				#define FXAA_HLSL_5 0
		#endif
		/*==========================================================================*/
		#ifndef FXAA_GREEN_AS_LUMA
				//
				// For those using non-linear color,
				// and either not able to get luma in alpha, or not wanting to,
				// this enables FXAA to run using green as a proxy for luma.
				// So with this enabled, no need to pack luma in alpha.
				//
				// This will turn off AA on anything which lacks some amount of green.
				// Pure red and blue or combination of only R and B, will get no AA.
				//
				// Might want to lower the settings for both,
				//		fxaaConsoleEdgeThresholdMin
				//		fxaaQualityEdgeThresholdMin
				// In order to insure AA does not get turned off on colors
				// which contain a minor amount of green.
				//
				// 1 = On.
				// 0 = Off.
				//
				#define FXAA_GREEN_AS_LUMA 0
		#endif
		/*--------------------------------------------------------------------------*/
		#ifndef FXAA_EARLY_EXIT
				//
				// Controls algorithm's early exit path.
				// On PS3 turning this ON adds 2 cycles to the shader.
				// On 360 turning this OFF adds 10ths of a millisecond to the shader.
				// Turning this off on console will result in a more blurry image.
				// So this defaults to on.
				//
				// 1 = On.
				// 0 = Off.
				//
				#define FXAA_EARLY_EXIT 1
		#endif
		/*--------------------------------------------------------------------------*/
		#ifndef FXAA_DISCARD
				//
				// Only valid for PC OpenGL currently.
				// Probably will not work when FXAA_GREEN_AS_LUMA = 1.
				//
				// 1 = Use discard on pixels which don't need AA.
				//		 For APIs which enable concurrent TEX+ROP from same surface.
				// 0 = Return unchanged color on pixels which don't need AA.
				//
				#define FXAA_DISCARD 0
		#endif
		/*--------------------------------------------------------------------------*/
		#ifndef FXAA_FAST_PIXEL_OFFSET
				//
				// Used for GLSL 120 only.
				//
				// 1 = GL API supports fast pixel offsets
				// 0 = do not use fast pixel offsets
				//
				#ifdef GL_EXT_gpu_shader4
						#define FXAA_FAST_PIXEL_OFFSET 1
				#endif
				#ifdef GL_NV_gpu_shader5
						#define FXAA_FAST_PIXEL_OFFSET 1
				#endif
				#ifdef GL_ARB_gpu_shader5
						#define FXAA_FAST_PIXEL_OFFSET 1
				#endif
				#ifndef FXAA_FAST_PIXEL_OFFSET
						#define FXAA_FAST_PIXEL_OFFSET 0
				#endif
		#endif
		/*--------------------------------------------------------------------------*/
		#ifndef FXAA_GATHER4_ALPHA
				//
				// 1 = API supports gather4 on alpha channel.
				// 0 = API does not support gather4 on alpha channel.
				//
				#if (FXAA_HLSL_5 == 1)
						#define FXAA_GATHER4_ALPHA 1
				#endif
				#ifdef GL_ARB_gpu_shader5
						#define FXAA_GATHER4_ALPHA 1
				#endif
				#ifdef GL_NV_gpu_shader5
						#define FXAA_GATHER4_ALPHA 1
				#endif
				#ifndef FXAA_GATHER4_ALPHA
						#define FXAA_GATHER4_ALPHA 0
				#endif
		#endif


		/*============================================================================
														FXAA QUALITY - TUNING KNOBS
		------------------------------------------------------------------------------
		NOTE the other tuning knobs are now in the shader function inputs!
		============================================================================*/
		#ifndef FXAA_QUALITY_PRESET
				//
				// Choose the quality preset.
				// This needs to be compiled into the shader as it effects code.
				// Best option to include multiple presets is to
				// in each shader define the preset, then include this file.
				//
				// OPTIONS
				// -----------------------------------------------------------------------
				// 10 to 15 - default medium dither (10=fastest, 15=highest quality)
				// 20 to 29 - less dither, more expensive (20=fastest, 29=highest quality)
				// 39			 - no dither, very expensive
				//
				// NOTES
				// -----------------------------------------------------------------------
				// 12 = slightly faster then FXAA 3.9 and higher edge quality (default)
				// 13 = about same speed as FXAA 3.9 and better than 12
				// 23 = closest to FXAA 3.9 visually and performance wise
				//	_ = the lowest digit is directly related to performance
				// _	= the highest digit is directly related to style
				//
				#define FXAA_QUALITY_PRESET 12
		#endif


		/*============================================================================

															 FXAA QUALITY - PRESETS

		============================================================================*/

		/*============================================================================
												 FXAA QUALITY - MEDIUM DITHER PRESETS
		============================================================================*/
		#if (FXAA_QUALITY_PRESET == 10)
				#define FXAA_QUALITY_PS 3
				#define FXAA_QUALITY_P0 1.5
				#define FXAA_QUALITY_P1 3.0
				#define FXAA_QUALITY_P2 12.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 11)
				#define FXAA_QUALITY_PS 4
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 3.0
				#define FXAA_QUALITY_P3 12.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 12)
				#define FXAA_QUALITY_PS 5
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 2.0
				#define FXAA_QUALITY_P3 4.0
				#define FXAA_QUALITY_P4 12.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 13)
				#define FXAA_QUALITY_PS 6
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 2.0
				#define FXAA_QUALITY_P3 2.0
				#define FXAA_QUALITY_P4 4.0
				#define FXAA_QUALITY_P5 12.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 14)
				#define FXAA_QUALITY_PS 7
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 2.0
				#define FXAA_QUALITY_P3 2.0
				#define FXAA_QUALITY_P4 2.0
				#define FXAA_QUALITY_P5 4.0
				#define FXAA_QUALITY_P6 12.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 15)
				#define FXAA_QUALITY_PS 8
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 2.0
				#define FXAA_QUALITY_P3 2.0
				#define FXAA_QUALITY_P4 2.0
				#define FXAA_QUALITY_P5 2.0
				#define FXAA_QUALITY_P6 4.0
				#define FXAA_QUALITY_P7 12.0
		#endif

		/*============================================================================
												 FXAA QUALITY - LOW DITHER PRESETS
		============================================================================*/
		#if (FXAA_QUALITY_PRESET == 20)
				#define FXAA_QUALITY_PS 3
				#define FXAA_QUALITY_P0 1.5
				#define FXAA_QUALITY_P1 2.0
				#define FXAA_QUALITY_P2 8.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 21)
				#define FXAA_QUALITY_PS 4
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 2.0
				#define FXAA_QUALITY_P3 8.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 22)
				#define FXAA_QUALITY_PS 5
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 2.0
				#define FXAA_QUALITY_P3 2.0
				#define FXAA_QUALITY_P4 8.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 23)
				#define FXAA_QUALITY_PS 6
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 2.0
				#define FXAA_QUALITY_P3 2.0
				#define FXAA_QUALITY_P4 2.0
				#define FXAA_QUALITY_P5 8.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 24)
				#define FXAA_QUALITY_PS 7
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 2.0
				#define FXAA_QUALITY_P3 2.0
				#define FXAA_QUALITY_P4 2.0
				#define FXAA_QUALITY_P5 3.0
				#define FXAA_QUALITY_P6 8.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 25)
				#define FXAA_QUALITY_PS 8
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 2.0
				#define FXAA_QUALITY_P3 2.0
				#define FXAA_QUALITY_P4 2.0
				#define FXAA_QUALITY_P5 2.0
				#define FXAA_QUALITY_P6 4.0
				#define FXAA_QUALITY_P7 8.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 26)
				#define FXAA_QUALITY_PS 9
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 2.0
				#define FXAA_QUALITY_P3 2.0
				#define FXAA_QUALITY_P4 2.0
				#define FXAA_QUALITY_P5 2.0
				#define FXAA_QUALITY_P6 2.0
				#define FXAA_QUALITY_P7 4.0
				#define FXAA_QUALITY_P8 8.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 27)
				#define FXAA_QUALITY_PS 10
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 2.0
				#define FXAA_QUALITY_P3 2.0
				#define FXAA_QUALITY_P4 2.0
				#define FXAA_QUALITY_P5 2.0
				#define FXAA_QUALITY_P6 2.0
				#define FXAA_QUALITY_P7 2.0
				#define FXAA_QUALITY_P8 4.0
				#define FXAA_QUALITY_P9 8.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 28)
				#define FXAA_QUALITY_PS 11
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 2.0
				#define FXAA_QUALITY_P3 2.0
				#define FXAA_QUALITY_P4 2.0
				#define FXAA_QUALITY_P5 2.0
				#define FXAA_QUALITY_P6 2.0
				#define FXAA_QUALITY_P7 2.0
				#define FXAA_QUALITY_P8 2.0
				#define FXAA_QUALITY_P9 4.0
				#define FXAA_QUALITY_P10 8.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 29)
				#define FXAA_QUALITY_PS 12
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 2.0
				#define FXAA_QUALITY_P3 2.0
				#define FXAA_QUALITY_P4 2.0
				#define FXAA_QUALITY_P5 2.0
				#define FXAA_QUALITY_P6 2.0
				#define FXAA_QUALITY_P7 2.0
				#define FXAA_QUALITY_P8 2.0
				#define FXAA_QUALITY_P9 2.0
				#define FXAA_QUALITY_P10 4.0
				#define FXAA_QUALITY_P11 8.0
		#endif

		/*============================================================================
												 FXAA QUALITY - EXTREME QUALITY
		============================================================================*/
		#if (FXAA_QUALITY_PRESET == 39)
				#define FXAA_QUALITY_PS 12
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.0
				#define FXAA_QUALITY_P2 1.0
				#define FXAA_QUALITY_P3 1.0
				#define FXAA_QUALITY_P4 1.0
				#define FXAA_QUALITY_P5 1.5
				#define FXAA_QUALITY_P6 2.0
				#define FXAA_QUALITY_P7 2.0
				#define FXAA_QUALITY_P8 2.0
				#define FXAA_QUALITY_P9 2.0
				#define FXAA_QUALITY_P10 4.0
				#define FXAA_QUALITY_P11 8.0
		#endif



		/*============================================================================

																		API PORTING

		============================================================================*/
		#if (FXAA_GLSL_100 == 1) || (FXAA_GLSL_120 == 1) || (FXAA_GLSL_130 == 1)
				#define FxaaBool bool
				#define FxaaDiscard discard
				#define FxaaFloat float
				#define FxaaFloat2 vec2
				#define FxaaFloat3 vec3
				#define FxaaFloat4 vec4
				#define FxaaHalf float
				#define FxaaHalf2 vec2
				#define FxaaHalf3 vec3
				#define FxaaHalf4 vec4
				#define FxaaInt2 ivec2
				#define FxaaSat(x) clamp(x, 0.0, 1.0)
				#define FxaaTex sampler2D
		#else
				#define FxaaBool bool
				#define FxaaDiscard clip(-1)
				#define FxaaFloat float
				#define FxaaFloat2 float2
				#define FxaaFloat3 float3
				#define FxaaFloat4 float4
				#define FxaaHalf half
				#define FxaaHalf2 half2
				#define FxaaHalf3 half3
				#define FxaaHalf4 half4
				#define FxaaSat(x) saturate(x)
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_GLSL_100 == 1)
			#define FxaaTexTop(t, p) texture2D(t, p, 0.0)
			#define FxaaTexOff(t, p, o, r) texture2D(t, p + (o * r), 0.0)
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_GLSL_120 == 1)
				// Requires,
				//	#version 120
				// And at least,
				//	#extension GL_EXT_gpu_shader4 : enable
				//	(or set FXAA_FAST_PIXEL_OFFSET 1 to work like DX9)
				#define FxaaTexTop(t, p) texture2DLod(t, p, 0.0)
				#if (FXAA_FAST_PIXEL_OFFSET == 1)
						#define FxaaTexOff(t, p, o, r) texture2DLodOffset(t, p, 0.0, o)
				#else
						#define FxaaTexOff(t, p, o, r) texture2DLod(t, p + (o * r), 0.0)
				#endif
				#if (FXAA_GATHER4_ALPHA == 1)
						// use #extension GL_ARB_gpu_shader5 : enable
						#define FxaaTexAlpha4(t, p) textureGather(t, p, 3)
						#define FxaaTexOffAlpha4(t, p, o) textureGatherOffset(t, p, o, 3)
						#define FxaaTexGreen4(t, p) textureGather(t, p, 1)
						#define FxaaTexOffGreen4(t, p, o) textureGatherOffset(t, p, o, 1)
				#endif
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_GLSL_130 == 1)
				// Requires "#version 130" or better
				#define FxaaTexTop(t, p) textureLod(t, p, 0.0)
				#define FxaaTexOff(t, p, o, r) textureLodOffset(t, p, 0.0, o)
				#if (FXAA_GATHER4_ALPHA == 1)
						// use #extension GL_ARB_gpu_shader5 : enable
						#define FxaaTexAlpha4(t, p) textureGather(t, p, 3)
						#define FxaaTexOffAlpha4(t, p, o) textureGatherOffset(t, p, o, 3)
						#define FxaaTexGreen4(t, p) textureGather(t, p, 1)
						#define FxaaTexOffGreen4(t, p, o) textureGatherOffset(t, p, o, 1)
				#endif
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_HLSL_3 == 1)
				#define FxaaInt2 float2
				#define FxaaTex sampler2D
				#define FxaaTexTop(t, p) tex2Dlod(t, float4(p, 0.0, 0.0))
				#define FxaaTexOff(t, p, o, r) tex2Dlod(t, float4(p + (o * r), 0, 0))
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_HLSL_4 == 1)
				#define FxaaInt2 int2
				struct FxaaTex { SamplerState smpl; Texture2D tex; };
				#define FxaaTexTop(t, p) t.tex.SampleLevel(t.smpl, p, 0.0)
				#define FxaaTexOff(t, p, o, r) t.tex.SampleLevel(t.smpl, p, 0.0, o)
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_HLSL_5 == 1)
				#define FxaaInt2 int2
				struct FxaaTex { SamplerState smpl; Texture2D tex; };
				#define FxaaTexTop(t, p) t.tex.SampleLevel(t.smpl, p, 0.0)
				#define FxaaTexOff(t, p, o, r) t.tex.SampleLevel(t.smpl, p, 0.0, o)
				#define FxaaTexAlpha4(t, p) t.tex.GatherAlpha(t.smpl, p)
				#define FxaaTexOffAlpha4(t, p, o) t.tex.GatherAlpha(t.smpl, p, o)
				#define FxaaTexGreen4(t, p) t.tex.GatherGreen(t.smpl, p)
				#define FxaaTexOffGreen4(t, p, o) t.tex.GatherGreen(t.smpl, p, o)
		#endif


		/*============================================================================
											 GREEN AS LUMA OPTION SUPPORT FUNCTION
		============================================================================*/
		#if (FXAA_GREEN_AS_LUMA == 0)
				FxaaFloat FxaaLuma(FxaaFloat4 rgba) { return rgba.w; }
		#else
				FxaaFloat FxaaLuma(FxaaFloat4 rgba) { return rgba.y; }
		#endif




		/*============================================================================

																 FXAA3 QUALITY - PC

		============================================================================*/
		#if (FXAA_PC == 1)
		/*--------------------------------------------------------------------------*/
		FxaaFloat4 FxaaPixelShader(
				//
				// Use noperspective interpolation here (turn off perspective interpolation).
				// {xy} = center of pixel
				FxaaFloat2 pos,
				//
				// Used only for FXAA Console, and not used on the 360 version.
				// Use noperspective interpolation here (turn off perspective interpolation).
				// {xy_} = upper left of pixel
				// {_zw} = lower right of pixel
				FxaaFloat4 fxaaConsolePosPos,
				//
				// Input color texture.
				// {rgb_} = color in linear or perceptual color space
				// if (FXAA_GREEN_AS_LUMA == 0)
				//		 {__a} = luma in perceptual color space (not linear)
				FxaaTex tex,
				//
				// Only used on the optimized 360 version of FXAA Console.
				// For everything but 360, just use the same input here as for "tex".
				// For 360, same texture, just alias with a 2nd sampler.
				// This sampler needs to have an exponent bias of -1.
				FxaaTex fxaaConsole360TexExpBiasNegOne,
				//
				// Only used on the optimized 360 version of FXAA Console.
				// For everything but 360, just use the same input here as for "tex".
				// For 360, same texture, just alias with a 3nd sampler.
				// This sampler needs to have an exponent bias of -2.
				FxaaTex fxaaConsole360TexExpBiasNegTwo,
				//
				// Only used on FXAA Quality.
				// This must be from a constant/uniform.
				// {x_} = 1.0/screenWidthInPixels
				// {_y} = 1.0/screenHeightInPixels
				FxaaFloat2 fxaaQualityRcpFrame,
				//
				// Only used on FXAA Console.
				// This must be from a constant/uniform.
				// This effects sub-pixel AA quality and inversely sharpness.
				//	 Where N ranges between,
				//		 N = 0.50 (default)
				//		 N = 0.33 (sharper)
				// {x__} = -N/screenWidthInPixels
				// {_y_} = -N/screenHeightInPixels
				// {_z_} =	N/screenWidthInPixels
				// {__w} =	N/screenHeightInPixels
				FxaaFloat4 fxaaConsoleRcpFrameOpt,
				//
				// Only used on FXAA Console.
				// Not used on 360, but used on PS3 and PC.
				// This must be from a constant/uniform.
				// {x__} = -2.0/screenWidthInPixels
				// {_y_} = -2.0/screenHeightInPixels
				// {_z_} =	2.0/screenWidthInPixels
				// {__w} =	2.0/screenHeightInPixels
				FxaaFloat4 fxaaConsoleRcpFrameOpt2,
				//
				// Only used on FXAA Console.
				// Only used on 360 in place of fxaaConsoleRcpFrameOpt2.
				// This must be from a constant/uniform.
				// {x__} =	8.0/screenWidthInPixels
				// {_y_} =	8.0/screenHeightInPixels
				// {_z_} = -4.0/screenWidthInPixels
				// {__w} = -4.0/screenHeightInPixels
				FxaaFloat4 fxaaConsole360RcpFrameOpt2,
				//
				// Only used on FXAA Quality.
				// This used to be the FXAA_QUALITY_SUBPIX define.
				// It is here now to allow easier tuning.
				// Choose the amount of sub-pixel aliasing removal.
				// This can effect sharpness.
				//	 1.00 - upper limit (softer)
				//	 0.75 - default amount of filtering
				//	 0.50 - lower limit (sharper, less sub-pixel aliasing removal)
				//	 0.25 - almost off
				//	 0.00 - completely off
				FxaaFloat fxaaQualitySubpix,
				//
				// Only used on FXAA Quality.
				// This used to be the FXAA_QUALITY_EDGE_THRESHOLD define.
				// It is here now to allow easier tuning.
				// The minimum amount of local contrast required to apply algorithm.
				//	 0.333 - too little (faster)
				//	 0.250 - low quality
				//	 0.166 - default
				//	 0.125 - high quality
				//	 0.063 - overkill (slower)
				FxaaFloat fxaaQualityEdgeThreshold,
				//
				// Only used on FXAA Quality.
				// This used to be the FXAA_QUALITY_EDGE_THRESHOLD_MIN define.
				// It is here now to allow easier tuning.
				// Trims the algorithm from processing darks.
				//	 0.0833 - upper limit (default, the start of visible unfiltered edges)
				//	 0.0625 - high quality (faster)
				//	 0.0312 - visible limit (slower)
				// Special notes when using FXAA_GREEN_AS_LUMA,
				//	 Likely want to set this to zero.
				//	 As colors that are mostly not-green
				//	 will appear very dark in the green channel!
				//	 Tune by looking at mostly non-green content,
				//	 then start at zero and increase until aliasing is a problem.
				FxaaFloat fxaaQualityEdgeThresholdMin,
				//
				// Only used on FXAA Console.
				// This used to be the FXAA_CONSOLE_EDGE_SHARPNESS define.
				// It is here now to allow easier tuning.
				// This does not effect PS3, as this needs to be compiled in.
				//	 Use FXAA_CONSOLE_PS3_EDGE_SHARPNESS for PS3.
				//	 Due to the PS3 being ALU bound,
				//	 there are only three safe values here: 2 and 4 and 8.
				//	 These options use the shaders ability to a free *|/ by 2|4|8.
				// For all other platforms can be a non-power of two.
				//	 8.0 is sharper (default!!!)
				//	 4.0 is softer
				//	 2.0 is really soft (good only for vector graphics inputs)
				FxaaFloat fxaaConsoleEdgeSharpness,
				//
				// Only used on FXAA Console.
				// This used to be the FXAA_CONSOLE_EDGE_THRESHOLD define.
				// It is here now to allow easier tuning.
				// This does not effect PS3, as this needs to be compiled in.
				//	 Use FXAA_CONSOLE_PS3_EDGE_THRESHOLD for PS3.
				//	 Due to the PS3 being ALU bound,
				//	 there are only two safe values here: 1/4 and 1/8.
				//	 These options use the shaders ability to a free *|/ by 2|4|8.
				// The console setting has a different mapping than the quality setting.
				// Other platforms can use other values.
				//	 0.125 leaves less aliasing, but is softer (default!!!)
				//	 0.25 leaves more aliasing, and is sharper
				FxaaFloat fxaaConsoleEdgeThreshold,
				//
				// Only used on FXAA Console.
				// This used to be the FXAA_CONSOLE_EDGE_THRESHOLD_MIN define.
				// It is here now to allow easier tuning.
				// Trims the algorithm from processing darks.
				// The console setting has a different mapping than the quality setting.
				// This only applies when FXAA_EARLY_EXIT is 1.
				// This does not apply to PS3,
				// PS3 was simplified to avoid more shader instructions.
				//	 0.06 - faster but more aliasing in darks
				//	 0.05 - default
				//	 0.04 - slower and less aliasing in darks
				// Special notes when using FXAA_GREEN_AS_LUMA,
				//	 Likely want to set this to zero.
				//	 As colors that are mostly not-green
				//	 will appear very dark in the green channel!
				//	 Tune by looking at mostly non-green content,
				//	 then start at zero and increase until aliasing is a problem.
				FxaaFloat fxaaConsoleEdgeThresholdMin,
				//
				// Extra constants for 360 FXAA Console only.
				// Use zeros or anything else for other platforms.
				// These must be in physical constant registers and NOT immediates.
				// Immediates will result in compiler un-optimizing.
				// {xyzw} = float4(1.0, -1.0, 0.25, -0.25)
				FxaaFloat4 fxaaConsole360ConstDir
		) {
		/*--------------------------------------------------------------------------*/
				FxaaFloat2 posM;
				posM.x = pos.x;
				posM.y = pos.y;
				#if (FXAA_GATHER4_ALPHA == 1)
						#if (FXAA_DISCARD == 0)
								FxaaFloat4 rgbyM = FxaaTexTop(tex, posM);
								#if (FXAA_GREEN_AS_LUMA == 0)
										#define lumaM rgbyM.w
								#else
										#define lumaM rgbyM.y
								#endif
						#endif
						#if (FXAA_GREEN_AS_LUMA == 0)
								FxaaFloat4 luma4A = FxaaTexAlpha4(tex, posM);
								FxaaFloat4 luma4B = FxaaTexOffAlpha4(tex, posM, FxaaInt2(-1, -1));
						#else
								FxaaFloat4 luma4A = FxaaTexGreen4(tex, posM);
								FxaaFloat4 luma4B = FxaaTexOffGreen4(tex, posM, FxaaInt2(-1, -1));
						#endif
						#if (FXAA_DISCARD == 1)
								#define lumaM luma4A.w
						#endif
						#define lumaE luma4A.z
						#define lumaS luma4A.x
						#define lumaSE luma4A.y
						#define lumaNW luma4B.w
						#define lumaN luma4B.z
						#define lumaW luma4B.x
				#else
						FxaaFloat4 rgbyM = FxaaTexTop(tex, posM);
						#if (FXAA_GREEN_AS_LUMA == 0)
								#define lumaM rgbyM.w
						#else
								#define lumaM rgbyM.y
						#endif
						#if (FXAA_GLSL_100 == 1)
							FxaaFloat lumaS = FxaaLuma(FxaaTexOff(tex, posM, FxaaFloat2( 0.0, 1.0), fxaaQualityRcpFrame.xy));
							FxaaFloat lumaE = FxaaLuma(FxaaTexOff(tex, posM, FxaaFloat2( 1.0, 0.0), fxaaQualityRcpFrame.xy));
							FxaaFloat lumaN = FxaaLuma(FxaaTexOff(tex, posM, FxaaFloat2( 0.0,-1.0), fxaaQualityRcpFrame.xy));
							FxaaFloat lumaW = FxaaLuma(FxaaTexOff(tex, posM, FxaaFloat2(-1.0, 0.0), fxaaQualityRcpFrame.xy));
						#else
							FxaaFloat lumaS = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2( 0, 1), fxaaQualityRcpFrame.xy));
							FxaaFloat lumaE = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2( 1, 0), fxaaQualityRcpFrame.xy));
							FxaaFloat lumaN = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2( 0,-1), fxaaQualityRcpFrame.xy));
							FxaaFloat lumaW = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2(-1, 0), fxaaQualityRcpFrame.xy));
						#endif
				#endif
		/*--------------------------------------------------------------------------*/
				FxaaFloat maxSM = max(lumaS, lumaM);
				FxaaFloat minSM = min(lumaS, lumaM);
				FxaaFloat maxESM = max(lumaE, maxSM);
				FxaaFloat minESM = min(lumaE, minSM);
				FxaaFloat maxWN = max(lumaN, lumaW);
				FxaaFloat minWN = min(lumaN, lumaW);
				FxaaFloat rangeMax = max(maxWN, maxESM);
				FxaaFloat rangeMin = min(minWN, minESM);
				FxaaFloat rangeMaxScaled = rangeMax * fxaaQualityEdgeThreshold;
				FxaaFloat range = rangeMax - rangeMin;
				FxaaFloat rangeMaxClamped = max(fxaaQualityEdgeThresholdMin, rangeMaxScaled);
				FxaaBool earlyExit = range < rangeMaxClamped;
		/*--------------------------------------------------------------------------*/
				if(earlyExit)
						#if (FXAA_DISCARD == 1)
								FxaaDiscard;
						#else
								return rgbyM;
						#endif
		/*--------------------------------------------------------------------------*/
				#if (FXAA_GATHER4_ALPHA == 0)
						#if (FXAA_GLSL_100 == 1)
							FxaaFloat lumaNW = FxaaLuma(FxaaTexOff(tex, posM, FxaaFloat2(-1.0,-1.0), fxaaQualityRcpFrame.xy));
							FxaaFloat lumaSE = FxaaLuma(FxaaTexOff(tex, posM, FxaaFloat2( 1.0, 1.0), fxaaQualityRcpFrame.xy));
							FxaaFloat lumaNE = FxaaLuma(FxaaTexOff(tex, posM, FxaaFloat2( 1.0,-1.0), fxaaQualityRcpFrame.xy));
							FxaaFloat lumaSW = FxaaLuma(FxaaTexOff(tex, posM, FxaaFloat2(-1.0, 1.0), fxaaQualityRcpFrame.xy));
						#else
							FxaaFloat lumaNW = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2(-1,-1), fxaaQualityRcpFrame.xy));
							FxaaFloat lumaSE = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2( 1, 1), fxaaQualityRcpFrame.xy));
							FxaaFloat lumaNE = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2( 1,-1), fxaaQualityRcpFrame.xy));
							FxaaFloat lumaSW = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2(-1, 1), fxaaQualityRcpFrame.xy));
						#endif
				#else
						FxaaFloat lumaNE = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2(1, -1), fxaaQualityRcpFrame.xy));
						FxaaFloat lumaSW = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2(-1, 1), fxaaQualityRcpFrame.xy));
				#endif
		/*--------------------------------------------------------------------------*/
				FxaaFloat lumaNS = lumaN + lumaS;
				FxaaFloat lumaWE = lumaW + lumaE;
				FxaaFloat subpixRcpRange = 1.0/range;
				FxaaFloat subpixNSWE = lumaNS + lumaWE;
				FxaaFloat edgeHorz1 = (-2.0 * lumaM) + lumaNS;
				FxaaFloat edgeVert1 = (-2.0 * lumaM) + lumaWE;
		/*--------------------------------------------------------------------------*/
				FxaaFloat lumaNESE = lumaNE + lumaSE;
				FxaaFloat lumaNWNE = lumaNW + lumaNE;
				FxaaFloat edgeHorz2 = (-2.0 * lumaE) + lumaNESE;
				FxaaFloat edgeVert2 = (-2.0 * lumaN) + lumaNWNE;
		/*--------------------------------------------------------------------------*/
				FxaaFloat lumaNWSW = lumaNW + lumaSW;
				FxaaFloat lumaSWSE = lumaSW + lumaSE;
				FxaaFloat edgeHorz4 = (abs(edgeHorz1) * 2.0) + abs(edgeHorz2);
				FxaaFloat edgeVert4 = (abs(edgeVert1) * 2.0) + abs(edgeVert2);
				FxaaFloat edgeHorz3 = (-2.0 * lumaW) + lumaNWSW;
				FxaaFloat edgeVert3 = (-2.0 * lumaS) + lumaSWSE;
				FxaaFloat edgeHorz = abs(edgeHorz3) + edgeHorz4;
				FxaaFloat edgeVert = abs(edgeVert3) + edgeVert4;
		/*--------------------------------------------------------------------------*/
				FxaaFloat subpixNWSWNESE = lumaNWSW + lumaNESE;
				FxaaFloat lengthSign = fxaaQualityRcpFrame.x;
				FxaaBool horzSpan = edgeHorz >= edgeVert;
				FxaaFloat subpixA = subpixNSWE * 2.0 + subpixNWSWNESE;
		/*--------------------------------------------------------------------------*/
				if(!horzSpan) lumaN = lumaW;
				if(!horzSpan) lumaS = lumaE;
				if(horzSpan) lengthSign = fxaaQualityRcpFrame.y;
				FxaaFloat subpixB = (subpixA * (1.0/12.0)) - lumaM;
		/*--------------------------------------------------------------------------*/
				FxaaFloat gradientN = lumaN - lumaM;
				FxaaFloat gradientS = lumaS - lumaM;
				FxaaFloat lumaNN = lumaN + lumaM;
				FxaaFloat lumaSS = lumaS + lumaM;
				FxaaBool pairN = abs(gradientN) >= abs(gradientS);
				FxaaFloat gradient = max(abs(gradientN), abs(gradientS));
				if(pairN) lengthSign = -lengthSign;
				FxaaFloat subpixC = FxaaSat(abs(subpixB) * subpixRcpRange);
		/*--------------------------------------------------------------------------*/
				FxaaFloat2 posB;
				posB.x = posM.x;
				posB.y = posM.y;
				FxaaFloat2 offNP;
				offNP.x = (!horzSpan) ? 0.0 : fxaaQualityRcpFrame.x;
				offNP.y = ( horzSpan) ? 0.0 : fxaaQualityRcpFrame.y;
				if(!horzSpan) posB.x += lengthSign * 0.5;
				if( horzSpan) posB.y += lengthSign * 0.5;
		/*--------------------------------------------------------------------------*/
				FxaaFloat2 posN;
				posN.x = posB.x - offNP.x * FXAA_QUALITY_P0;
				posN.y = posB.y - offNP.y * FXAA_QUALITY_P0;
				FxaaFloat2 posP;
				posP.x = posB.x + offNP.x * FXAA_QUALITY_P0;
				posP.y = posB.y + offNP.y * FXAA_QUALITY_P0;
				FxaaFloat subpixD = ((-2.0)*subpixC) + 3.0;
				FxaaFloat lumaEndN = FxaaLuma(FxaaTexTop(tex, posN));
				FxaaFloat subpixE = subpixC * subpixC;
				FxaaFloat lumaEndP = FxaaLuma(FxaaTexTop(tex, posP));
		/*--------------------------------------------------------------------------*/
				if(!pairN) lumaNN = lumaSS;
				FxaaFloat gradientScaled = gradient * 1.0/4.0;
				FxaaFloat lumaMM = lumaM - lumaNN * 0.5;
				FxaaFloat subpixF = subpixD * subpixE;
				FxaaBool lumaMLTZero = lumaMM < 0.0;
		/*--------------------------------------------------------------------------*/
				lumaEndN -= lumaNN * 0.5;
				lumaEndP -= lumaNN * 0.5;
				FxaaBool doneN = abs(lumaEndN) >= gradientScaled;
				FxaaBool doneP = abs(lumaEndP) >= gradientScaled;
				if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P1;
				if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P1;
				FxaaBool doneNP = (!doneN) || (!doneP);
				if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P1;
				if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P1;
		/*--------------------------------------------------------------------------*/
				if(doneNP) {
						if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));
						if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));
						if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;
						if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;
						doneN = abs(lumaEndN) >= gradientScaled;
						doneP = abs(lumaEndP) >= gradientScaled;
						if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P2;
						if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P2;
						doneNP = (!doneN) || (!doneP);
						if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P2;
						if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P2;
		/*--------------------------------------------------------------------------*/
						#if (FXAA_QUALITY_PS > 3)
						if(doneNP) {
								if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));
								if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));
								if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;
								if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;
								doneN = abs(lumaEndN) >= gradientScaled;
								doneP = abs(lumaEndP) >= gradientScaled;
								if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P3;
								if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P3;
								doneNP = (!doneN) || (!doneP);
								if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P3;
								if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P3;
		/*--------------------------------------------------------------------------*/
								#if (FXAA_QUALITY_PS > 4)
								if(doneNP) {
										if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));
										if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));
										if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;
										if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;
										doneN = abs(lumaEndN) >= gradientScaled;
										doneP = abs(lumaEndP) >= gradientScaled;
										if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P4;
										if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P4;
										doneNP = (!doneN) || (!doneP);
										if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P4;
										if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P4;
		/*--------------------------------------------------------------------------*/
										#if (FXAA_QUALITY_PS > 5)
										if(doneNP) {
												if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));
												if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));
												if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;
												if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;
												doneN = abs(lumaEndN) >= gradientScaled;
												doneP = abs(lumaEndP) >= gradientScaled;
												if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P5;
												if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P5;
												doneNP = (!doneN) || (!doneP);
												if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P5;
												if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P5;
		/*--------------------------------------------------------------------------*/
												#if (FXAA_QUALITY_PS > 6)
												if(doneNP) {
														if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));
														if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));
														if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;
														if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;
														doneN = abs(lumaEndN) >= gradientScaled;
														doneP = abs(lumaEndP) >= gradientScaled;
														if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P6;
														if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P6;
														doneNP = (!doneN) || (!doneP);
														if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P6;
														if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P6;
		/*--------------------------------------------------------------------------*/
														#if (FXAA_QUALITY_PS > 7)
														if(doneNP) {
																if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));
																if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));
																if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;
																if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;
																doneN = abs(lumaEndN) >= gradientScaled;
																doneP = abs(lumaEndP) >= gradientScaled;
																if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P7;
																if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P7;
																doneNP = (!doneN) || (!doneP);
																if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P7;
																if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P7;
		/*--------------------------------------------------------------------------*/
				#if (FXAA_QUALITY_PS > 8)
				if(doneNP) {
						if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));
						if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));
						if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;
						if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;
						doneN = abs(lumaEndN) >= gradientScaled;
						doneP = abs(lumaEndP) >= gradientScaled;
						if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P8;
						if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P8;
						doneNP = (!doneN) || (!doneP);
						if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P8;
						if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P8;
		/*--------------------------------------------------------------------------*/
						#if (FXAA_QUALITY_PS > 9)
						if(doneNP) {
								if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));
								if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));
								if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;
								if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;
								doneN = abs(lumaEndN) >= gradientScaled;
								doneP = abs(lumaEndP) >= gradientScaled;
								if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P9;
								if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P9;
								doneNP = (!doneN) || (!doneP);
								if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P9;
								if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P9;
		/*--------------------------------------------------------------------------*/
								#if (FXAA_QUALITY_PS > 10)
								if(doneNP) {
										if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));
										if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));
										if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;
										if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;
										doneN = abs(lumaEndN) >= gradientScaled;
										doneP = abs(lumaEndP) >= gradientScaled;
										if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P10;
										if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P10;
										doneNP = (!doneN) || (!doneP);
										if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P10;
										if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P10;
		/*--------------------------------------------------------------------------*/
										#if (FXAA_QUALITY_PS > 11)
										if(doneNP) {
												if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));
												if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));
												if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;
												if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;
												doneN = abs(lumaEndN) >= gradientScaled;
												doneP = abs(lumaEndP) >= gradientScaled;
												if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P11;
												if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P11;
												doneNP = (!doneN) || (!doneP);
												if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P11;
												if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P11;
		/*--------------------------------------------------------------------------*/
												#if (FXAA_QUALITY_PS > 12)
												if(doneNP) {
														if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));
														if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));
														if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;
														if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;
														doneN = abs(lumaEndN) >= gradientScaled;
														doneP = abs(lumaEndP) >= gradientScaled;
														if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P12;
														if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P12;
														doneNP = (!doneN) || (!doneP);
														if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P12;
														if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P12;
		/*--------------------------------------------------------------------------*/
												}
												#endif
		/*--------------------------------------------------------------------------*/
										}
										#endif
		/*--------------------------------------------------------------------------*/
								}
								#endif
		/*--------------------------------------------------------------------------*/
						}
						#endif
		/*--------------------------------------------------------------------------*/
				}
				#endif
		/*--------------------------------------------------------------------------*/
														}
														#endif
		/*--------------------------------------------------------------------------*/
												}
												#endif
		/*--------------------------------------------------------------------------*/
										}
										#endif
		/*--------------------------------------------------------------------------*/
								}
								#endif
		/*--------------------------------------------------------------------------*/
						}
						#endif
		/*--------------------------------------------------------------------------*/
				}
		/*--------------------------------------------------------------------------*/
				FxaaFloat dstN = posM.x - posN.x;
				FxaaFloat dstP = posP.x - posM.x;
				if(!horzSpan) dstN = posM.y - posN.y;
				if(!horzSpan) dstP = posP.y - posM.y;
		/*--------------------------------------------------------------------------*/
				FxaaBool goodSpanN = (lumaEndN < 0.0) != lumaMLTZero;
				FxaaFloat spanLength = (dstP + dstN);
				FxaaBool goodSpanP = (lumaEndP < 0.0) != lumaMLTZero;
				FxaaFloat spanLengthRcp = 1.0/spanLength;
		/*--------------------------------------------------------------------------*/
				FxaaBool directionN = dstN < dstP;
				FxaaFloat dst = min(dstN, dstP);
				FxaaBool goodSpan = directionN ? goodSpanN : goodSpanP;
				FxaaFloat subpixG = subpixF * subpixF;
				FxaaFloat pixelOffset = (dst * (-spanLengthRcp)) + 0.5;
				FxaaFloat subpixH = subpixG * fxaaQualitySubpix;
		/*--------------------------------------------------------------------------*/
				FxaaFloat pixelOffsetGood = goodSpan ? pixelOffset : 0.0;
				FxaaFloat pixelOffsetSubpix = max(pixelOffsetGood, subpixH);
				if(!horzSpan) posM.x += pixelOffsetSubpix * lengthSign;
				if( horzSpan) posM.y += pixelOffsetSubpix * lengthSign;
				#if (FXAA_DISCARD == 1)
						return FxaaTexTop(tex, posM);
				#else
						return FxaaFloat4(FxaaTexTop(tex, posM).xyz, lumaM);
				#endif
		}
		/*==========================================================================*/
		#endif

		void main() {
			gl_FragColor = FxaaPixelShader(
				vUv,
				vec4(0.0),
				tDiffuse,
				tDiffuse,
				tDiffuse,
				resolution,
				vec4(0.0),
				vec4(0.0),
				vec4(0.0),
				0.75,
				0.166,
				0.0833,
				0.0,
				0.0,
				0.0,
				vec4(0.0)
			);

			// TODO avoid querying texture twice for same texel
			gl_FragColor.a = texture2D(tDiffuse, vUv).a;
		}`},Ru={shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Z(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class fn extends Jn{constructor(e,t,i,r){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=r,this.resolution=e!==void 0?new X(e.x,e.y):new X(256,256),this.clearColor=new Z(0,0,0);const n={minFilter:ut,magFilter:ut,format:Ct};this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Ft(s,o,n),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){const p=new Ft(s,o,n);p.texture.name="UnrealBloomPass.h"+d,p.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(p);const m=new Ft(s,o,n);m.texture.name="UnrealBloomPass.v"+d,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),s=Math.round(s/2),o=Math.round(o/2)}Ru===void 0&&console.error("THREE.UnrealBloomPass relies on LuminosityHighPassShader");const l=Ru;this.highPassUniforms=Xa.clone(l.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new mt({uniforms:this.highPassUniforms,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader,defines:{}}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[d])),this.separableBlurMaterials[d].uniforms.texSize.value=new X(s,o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1,this.compositeMaterial.needsUpdate=!0;const h=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=h,this.bloomTintColors=[new b(1,1,1),new b(1,1,1),new b(1,1,1),new b(1,1,1),new b(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,gs===void 0&&console.error("THREE.UnrealBloomPass relies on CopyShader");const u=gs;this.copyUniforms=Xa.clone(u.uniforms),this.copyUniforms.opacity.value=1,this.materialCopy=new mt({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:xa,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Z,this.oldClearAlpha=1,this.basic=new Zt,this.fsQuad=new Lu(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose()}setSize(e,t){let i=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(i,r);for(let n=0;n<this.nMips;n++)this.renderTargetsHorizontal[n].setSize(i,r),this.renderTargetsVertical[n].setSize(i,r),this.separableBlurMaterials[n].uniforms.texSize.value=new X(i,r),i=Math.round(i/2),r=Math.round(r/2)}render(e,t,i,r,n){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const s=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),n&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=fn.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=fn.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,n&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=s}getSeperableBlurMaterial(e){return new mt({defines:{KERNEL_RADIUS:e,SIGMA:e},uniforms:{colorTexture:{value:null},texSize:{value:new X(.5,.5)},direction:{value:new X(.5,.5)}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 texSize;
				uniform vec2 direction;

				float gaussianPdf(in float x, in float sigma) {
					return 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;
				}
				void main() {
					vec2 invSize = 1.0 / texSize;
					float fSigma = float(SIGMA);
					float weightSum = gaussianPdf(0.0, fSigma);
					vec3 diffuseSum = texture2D( colorTexture, vUv).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianPdf(x, fSigma);
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new mt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},dirtTexture:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform sampler2D dirtTexture;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}fn.BlurDirectionX=new X(1,0),fn.BlurDirectionY=new X(0,1);/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.6.9
*/var Iu={},al=function(a){return URL.createObjectURL(new Blob([a],{type:"text/javascript"}))},Fu=function(a){return new Worker(a)};try{URL.revokeObjectURL(al(""))}catch{al=function(a){return"data:application/javascript;charset=UTF-8,"+encodeURI(a)},Fu=function(a){return new Worker(a,{type:"module"})}}var Jx=function(a,e,t,i,r){var n=Fu(Iu[e]||(Iu[e]=al(a)));return n.onerror=function(s){return r(s.error,null)},n.onmessage=function(s){return r(null,s.data)},n.postMessage(t,i),n},Re=Uint8Array,gt=Uint16Array,vi=Uint32Array,qr=new Re([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Jr=new Re([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Kn=new Re([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Nu=function(a,e){for(var t=new gt(31),i=0;i<31;++i)t[i]=e+=1<<a[i-1];for(var r=new vi(t[30]),i=1;i<30;++i)for(var n=t[i];n<t[i+1];++n)r[n]=n-t[i]<<5|i;return[t,r]},Du=Nu(qr,2),sl=Du[0],vs=Du[1];sl[28]=258,vs[258]=28;for(var Uu=Nu(Jr,0),Ou=Uu[0],ol=Uu[1],$n=new gt(32768),Ye=0;Ye<32768;++Ye){var Bi=(Ye&43690)>>>1|(Ye&21845)<<1;Bi=(Bi&52428)>>>2|(Bi&13107)<<2,Bi=(Bi&61680)>>>4|(Bi&3855)<<4,$n[Ye]=((Bi&65280)>>>8|(Bi&255)<<8)>>>1}for(var Gt=function(a,e,t){for(var i=a.length,r=0,n=new gt(e);r<i;++r)++n[a[r]-1];var s=new gt(e);for(r=0;r<e;++r)s[r]=s[r-1]+n[r-1]<<1;var o;if(t){o=new gt(1<<e);var l=15-e;for(r=0;r<i;++r)if(a[r])for(var c=r<<4|a[r],h=e-a[r],u=s[a[r]-1]++<<h,d=u|(1<<h)-1;u<=d;++u)o[$n[u]>>>l]=c}else for(o=new gt(i),r=0;r<i;++r)a[r]&&(o[r]=$n[s[a[r]-1]++]>>>15-a[r]);return o},_i=new Re(288),Ye=0;Ye<144;++Ye)_i[Ye]=8;for(var Ye=144;Ye<256;++Ye)_i[Ye]=9;for(var Ye=256;Ye<280;++Ye)_i[Ye]=7;for(var Ye=280;Ye<288;++Ye)_i[Ye]=8;for(var Zr=new Re(32),Ye=0;Ye<32;++Ye)Zr[Ye]=5;var Bu=Gt(_i,9,0),zu=Gt(_i,9,1),Hu=Gt(Zr,5,0),ku=Gt(Zr,5,1),_s=function(a){for(var e=a[0],t=1;t<a.length;++t)a[t]>e&&(e=a[t]);return e},Vt=function(a,e,t){var i=e/8|0;return(a[i]|a[i+1]<<8)>>(e&7)&t},xs=function(a,e){var t=e/8|0;return(a[t]|a[t+1]<<8|a[t+2]<<16)>>(e&7)},ea=function(a){return(a/8|0)+(a&7&&1)},Wt=function(a,e,t){(e==null||e<0)&&(e=0),(t==null||t>a.length)&&(t=a.length);var i=new(a instanceof gt?gt:a instanceof vi?vi:Re)(t-e);return i.set(a.subarray(e,t)),i},ta=function(a,e,t){var i=a.length;if(!i||t&&!t.l&&i<5)return e||new Re(0);var r=!e||t,n=!t||t.i;t||(t={}),e||(e=new Re(i*3));var s=function(V){var Ze=e.length;if(V>Ze){var Pe=new Re(Math.max(Ze*2,V));Pe.set(e),e=Pe}},o=t.f||0,l=t.p||0,c=t.b||0,h=t.l,u=t.d,d=t.m,p=t.n,m=i*8;do{if(!h){t.f=o=Vt(a,l,1);var v=Vt(a,l+1,3);if(l+=3,v)if(v==1)h=zu,u=ku,d=9,p=5;else if(v==2){var _=Vt(a,l,31)+257,g=Vt(a,l+10,15)+4,f=_+Vt(a,l+5,31)+1;l+=14;for(var x=new Re(f),S=new Re(19),w=0;w<g;++w)S[Kn[w]]=Vt(a,l+w*3,7);l+=g*3;for(var y=_s(S),M=(1<<y)-1,L=Gt(S,y,1),w=0;w<f;){var N=L[Vt(a,l,M)];l+=N&15;var R=N>>>4;if(R<16)x[w++]=R;else{var z=0,H=0;for(R==16?(H=3+Vt(a,l,3),l+=2,z=x[w-1]):R==17?(H=3+Vt(a,l,7),l+=3):R==18&&(H=11+Vt(a,l,127),l+=7);H--;)x[w++]=z}}var I=x.subarray(0,_),F=x.subarray(_);d=_s(I),p=_s(F),h=Gt(I,d,1),u=Gt(F,p,1)}else throw"invalid block type";else{var R=ea(l)+4,P=a[R-4]|a[R-3]<<8,C=R+P;if(C>i){if(n)throw"unexpected EOF";break}r&&s(c+P),e.set(a.subarray(R,C),c),t.b=c+=P,t.p=l=C*8;continue}if(l>m){if(n)throw"unexpected EOF";break}}r&&s(c+131072);for(var O=(1<<d)-1,Y=(1<<p)-1,G=l;;G=l){var z=h[xs(a,l)&O],ie=z>>>4;if(l+=z&15,l>m){if(n)throw"unexpected EOF";break}if(!z)throw"invalid length/literal";if(ie<256)e[c++]=ie;else if(ie==256){G=l,h=null;break}else{var te=ie-254;if(ie>264){var w=ie-257,pe=qr[w];te=Vt(a,l,(1<<pe)-1)+sl[w],l+=pe}var he=u[xs(a,l)&Y],_e=he>>>4;if(!he)throw"invalid distance";l+=he&15;var F=Ou[_e];if(_e>3){var pe=Jr[_e];F+=xs(a,l)&(1<<pe)-1,l+=pe}if(l>m){if(n)throw"unexpected EOF";break}r&&s(c+131072);for(var ce=c+te;c<ce;c+=4)e[c]=e[c-F],e[c+1]=e[c+1-F],e[c+2]=e[c+2-F],e[c+3]=e[c+3-F];c=ce}}t.l=h,t.p=G,t.b=c,h&&(o=1,t.m=d,t.d=u,t.n=p)}while(!o);return c==e.length?e:Wt(e,0,c)},ni=function(a,e,t){t<<=e&7;var i=e/8|0;a[i]|=t,a[i+1]|=t>>>8},Kr=function(a,e,t){t<<=e&7;var i=e/8|0;a[i]|=t,a[i+1]|=t>>>8,a[i+2]|=t>>>16},ys=function(a,e){for(var t=[],i=0;i<a.length;++i)a[i]&&t.push({s:i,f:a[i]});var r=t.length,n=t.slice();if(!r)return[xi,0];if(r==1){var s=new Re(t[0].s+1);return s[t[0].s]=1,[s,1]}t.sort(function(w,y){return w.f-y.f}),t.push({s:-1,f:25001});var o=t[0],l=t[1],c=0,h=1,u=2;for(t[0]={s:-1,f:o.f+l.f,l:o,r:l};h!=r-1;)o=t[t[c].f<t[u].f?c++:u++],l=t[c!=h&&t[c].f<t[u].f?c++:u++],t[h++]={s:-1,f:o.f+l.f,l:o,r:l};for(var d=n[0].s,i=1;i<r;++i)n[i].s>d&&(d=n[i].s);var p=new gt(d+1),m=ws(t[h-1],p,0);if(m>e){var i=0,v=0,_=m-e,g=1<<_;for(n.sort(function(y,M){return p[M.s]-p[y.s]||y.f-M.f});i<r;++i){var f=n[i].s;if(p[f]>e)v+=g-(1<<m-p[f]),p[f]=e;else break}for(v>>>=_;v>0;){var x=n[i].s;p[x]<e?v-=1<<e-p[x]++-1:++i}for(;i>=0&&v;--i){var S=n[i].s;p[S]==e&&(--p[S],++v)}m=e}return[new Re(p),m]},ws=function(a,e,t){return a.s==-1?Math.max(ws(a.l,e,t+1),ws(a.r,e,t+1)):e[a.s]=t},ll=function(a){for(var e=a.length;e&&!a[--e];);for(var t=new gt(++e),i=0,r=a[0],n=1,s=function(l){t[i++]=l},o=1;o<=e;++o)if(a[o]==r&&o!=e)++n;else{if(!r&&n>2){for(;n>138;n-=138)s(32754);n>2&&(s(n>10?n-11<<5|28690:n-3<<5|12305),n=0)}else if(n>3){for(s(r),--n;n>6;n-=6)s(8304);n>2&&(s(n-3<<5|8208),n=0)}for(;n--;)s(r);n=1,r=a[o]}return[t.subarray(0,i),e]},$r=function(a,e){for(var t=0,i=0;i<e.length;++i)t+=a[i]*e[i];return t},ia=function(a,e,t){var i=t.length,r=ea(e+2);a[r]=i&255,a[r+1]=i>>>8,a[r+2]=a[r]^255,a[r+3]=a[r+1]^255;for(var n=0;n<i;++n)a[r+n+4]=t[n];return(r+4+i)*8},cl=function(a,e,t,i,r,n,s,o,l,c,h){ni(e,h++,t),++r[256];for(var u=ys(r,15),d=u[0],p=u[1],m=ys(n,15),v=m[0],_=m[1],g=ll(d),f=g[0],x=g[1],S=ll(v),w=S[0],y=S[1],M=new gt(19),L=0;L<f.length;++L)M[f[L]&31]++;for(var L=0;L<w.length;++L)M[w[L]&31]++;for(var N=ys(M,7),R=N[0],z=N[1],H=19;H>4&&!R[Kn[H-1]];--H);var I=c+5<<3,F=$r(r,_i)+$r(n,Zr)+s,P=$r(r,d)+$r(n,v)+s+14+3*H+$r(M,R)+(2*M[16]+3*M[17]+7*M[18]);if(I<=F&&I<=P)return ia(e,h,a.subarray(l,l+c));var C,O,Y,G;if(ni(e,h,1+(P<F)),h+=2,P<F){C=Gt(d,p,0),O=d,Y=Gt(v,_,0),G=v;var ie=Gt(R,z,0);ni(e,h,x-257),ni(e,h+5,y-1),ni(e,h+10,H-4),h+=14;for(var L=0;L<H;++L)ni(e,h+3*L,R[Kn[L]]);h+=3*H;for(var te=[f,w],pe=0;pe<2;++pe)for(var he=te[pe],L=0;L<he.length;++L){var _e=he[L]&31;ni(e,h,ie[_e]),h+=R[_e],_e>15&&(ni(e,h,he[L]>>>5&127),h+=he[L]>>>12)}}else C=Bu,O=_i,Y=Hu,G=Zr;for(var L=0;L<o;++L)if(i[L]>255){var _e=i[L]>>>18&31;Kr(e,h,C[_e+257]),h+=O[_e+257],_e>7&&(ni(e,h,i[L]>>>23&31),h+=qr[_e]);var ce=i[L]&31;Kr(e,h,Y[ce]),h+=G[ce],ce>3&&(Kr(e,h,i[L]>>>5&8191),h+=Jr[ce])}else Kr(e,h,C[i[L]]),h+=O[i[L]];return Kr(e,h,C[256]),h+O[256]},Gu=new vi([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),xi=new Re(0),Vu=function(a,e,t,i,r,n){var s=a.length,o=new Re(i+s+5*(1+Math.ceil(s/7e3))+r),l=o.subarray(i,o.length-r),c=0;if(!e||s<8)for(var h=0;h<=s;h+=65535){var u=h+65535;u<s?c=ia(l,c,a.subarray(h,u)):(l[h]=n,c=ia(l,c,a.subarray(h,s)))}else{for(var d=Gu[e-1],p=d>>>13,m=d&8191,v=(1<<t)-1,_=new gt(32768),g=new gt(v+1),f=Math.ceil(t/3),x=2*f,S=function(le){return(a[le]^a[le+1]<<f^a[le+2]<<x)&v},w=new vi(25e3),y=new gt(288),M=new gt(32),L=0,N=0,h=0,R=0,z=0,H=0;h<s;++h){var I=S(h),F=h&32767,P=g[I];if(_[F]=P,g[I]=F,z<=h){var C=s-h;if((L>7e3||R>24576)&&C>423){c=cl(a,l,0,w,y,M,N,R,H,h-H,c),R=L=N=0,H=h;for(var O=0;O<286;++O)y[O]=0;for(var O=0;O<30;++O)M[O]=0}var Y=2,G=0,ie=m,te=F-P&32767;if(C>2&&I==S(h-te))for(var pe=Math.min(p,C)-1,he=Math.min(32767,h),_e=Math.min(258,C);te<=he&&--ie&&F!=P;){if(a[h+Y]==a[h+Y-te]){for(var ce=0;ce<_e&&a[h+ce]==a[h+ce-te];++ce);if(ce>Y){if(Y=ce,G=te,ce>pe)break;for(var V=Math.min(te,ce-2),Ze=0,O=0;O<V;++O){var Pe=h-te+O+32768&32767,fe=_[Pe],me=Pe-fe+32768&32767;me>Ze&&(Ze=me,P=Pe)}}}F=P,P=_[F],te+=F-P+32768&32767}if(G){w[R++]=268435456|vs[Y]<<18|ol[G];var Q=vs[Y]&31,q=ol[G]&31;N+=qr[Q]+Jr[q],++y[257+Q],++M[q],z=h+Y,++L}else w[R++]=a[h],++y[a[h]]}}c=cl(a,l,n,w,y,M,N,R,H,h-H,c),!n&&c&7&&(c=ia(l,c+1,xi))}return Wt(o,0,i+ea(c)+r)},Wu=function(){for(var a=new vi(256),e=0;e<256;++e){for(var t=e,i=9;--i;)t=(t&1&&3988292384)^t>>>1;a[e]=t}return a}(),en=function(){var a=-1;return{p:function(e){for(var t=a,i=0;i<e.length;++i)t=Wu[t&255^e[i]]^t>>>8;a=t},d:function(){return~a}}},hl=function(){var a=1,e=0;return{p:function(t){for(var i=a,r=e,n=t.length,s=0;s!=n;){for(var o=Math.min(s+2655,n);s<o;++s)r+=i+=t[s];i=(i&65535)+15*(i>>16),r=(r&65535)+15*(r>>16)}a=i,e=r},d:function(){return a%=65521,e%=65521,(a&255)<<24|a>>>8<<16|(e&255)<<8|e>>>8}}},hr=function(a,e,t,i,r){return Vu(a,e.level==null?6:e.level,e.mem==null?Math.ceil(Math.max(8,Math.min(13,Math.log(a.length)))*1.5):12+e.mem,t,i,!r)},ra=function(a,e){var t={};for(var i in a)t[i]=a[i];for(var i in e)t[i]=e[i];return t},Xu=function(a,e,t){for(var i=a(),r=a.toString(),n=r.slice(r.indexOf("[")+1,r.lastIndexOf("]")).replace(/ /g,"").split(","),s=0;s<i.length;++s){var o=i[s],l=n[s];if(typeof o=="function"){e+=";"+l+"=";var c=o.toString();if(o.prototype)if(c.indexOf("[native code]")!=-1){var h=c.indexOf(" ",8)+1;e+=c.slice(h,c.indexOf("(",h))}else{e+=c;for(var u in o.prototype)e+=";"+l+".prototype."+u+"="+o.prototype[u].toString()}else e+=c}else t[l]=o}return[e,t]},bs=[],Zx=function(a){var e=[];for(var t in a)(a[t]instanceof Re||a[t]instanceof gt||a[t]instanceof vi)&&e.push((a[t]=new a[t].constructor(a[t])).buffer);return e},ju=function(a,e,t,i){var r;if(!bs[t]){for(var n="",s={},o=a.length-1,l=0;l<o;++l)r=Xu(a[l],n,s),n=r[0],s=r[1];bs[t]=Xu(a[o],n,s)}var c=ra({},bs[t][1]);return Jx(bs[t][0]+";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage="+e.toString()+"}",t,c,Zx(c),i)},tn=function(){return[Re,gt,vi,qr,Jr,Kn,sl,Ou,zu,ku,$n,Gt,_s,Vt,xs,ea,Wt,ta,sn,zi,ul]},rn=function(){return[Re,gt,vi,qr,Jr,Kn,vs,ol,Bu,_i,Hu,Zr,$n,Gu,xi,Gt,ni,Kr,ys,ws,ll,$r,ia,cl,ea,Wt,Vu,hr,na,zi]},Yu=function(){return[pl,ml,ke,en,Wu]},Qu=function(){return[fl,Zu]},qu=function(){return[gl,ke,hl]},Ju=function(){return[Ku]},zi=function(a){return postMessage(a,[a.buffer])},ul=function(a){return a&&a.size&&new Re(a.size)},nn=function(a,e,t,i,r,n){var s=ju(t,i,r,function(o,l){s.terminate(),n(o,l)});return s.postMessage([a,e],e.consume?[a.buffer]:[]),function(){s.terminate()}},Xt=function(a){return a.ondata=function(e,t){return postMessage([e,t],[e.buffer])},function(e){return a.push(e.data[0],e.data[1])}},an=function(a,e,t,i,r){var n,s=ju(a,i,r,function(o,l){o?(s.terminate(),e.ondata.call(e,o)):(l[1]&&s.terminate(),e.ondata.call(e,o,l[0],l[1]))});s.postMessage(t),e.push=function(o,l){if(n)throw"stream finished";if(!e.ondata)throw"no stream handler";s.postMessage([o,n=l],[o.buffer])},e.terminate=function(){s.terminate()}},Pt=function(a,e){return a[e]|a[e+1]<<8},tt=function(a,e){return(a[e]|a[e+1]<<8|a[e+2]<<16|a[e+3]<<24)>>>0},dl=function(a,e){return tt(a,e)+tt(a,e+4)*4294967296},ke=function(a,e,t){for(;t;++e)a[e]=t,t>>>=8},pl=function(a,e){var t=e.filename;if(a[0]=31,a[1]=139,a[2]=8,a[8]=e.level<2?4:e.level==9?2:0,a[9]=3,e.mtime!=0&&ke(a,4,Math.floor(new Date(e.mtime||Date.now())/1e3)),t){a[3]=8;for(var i=0;i<=t.length;++i)a[i+10]=t.charCodeAt(i)}},fl=function(a){if(a[0]!=31||a[1]!=139||a[2]!=8)throw"invalid gzip data";var e=a[3],t=10;e&4&&(t+=a[10]|(a[11]<<8)+2);for(var i=(e>>3&1)+(e>>4&1);i>0;i-=!a[t++]);return t+(e&2)},Zu=function(a){var e=a.length;return(a[e-4]|a[e-3]<<8|a[e-2]<<16|a[e-1]<<24)>>>0},ml=function(a){return 10+(a.filename&&a.filename.length+1||0)},gl=function(a,e){var t=e.level,i=t==0?0:t<6?1:t==9?3:2;a[0]=120,a[1]=i<<6|(i?32-2*i:1)},Ku=function(a){if((a[0]&15)!=8||a[0]>>>4>7||(a[0]<<8|a[1])%31)throw"invalid zlib data";if(a[1]&32)throw"invalid zlib data: preset dictionaries not supported"};function vl(a,e){return!e&&typeof a=="function"&&(e=a,a={}),this.ondata=e,a}var ai=function(){function a(e,t){!t&&typeof e=="function"&&(t=e,e={}),this.ondata=t,this.o=e||{}}return a.prototype.p=function(e,t){this.ondata(hr(e,this.o,0,0,!t),t)},a.prototype.push=function(e,t){if(this.d)throw"stream finished";if(!this.ondata)throw"no stream handler";this.d=t,this.p(e,t||!1)},a}(),$u=function(){function a(e,t){an([rn,function(){return[Xt,ai]}],this,vl.call(this,e,t),function(i){var r=new ai(i.data);onmessage=Xt(r)},6)}return a}();function ed(a,e,t){if(t||(t=e,e={}),typeof t!="function")throw"no callback";return nn(a,e,[rn],function(i){return zi(na(i.data[0],i.data[1]))},0,t)}function na(a,e){return hr(a,e||{},0,0)}var Nt=function(){function a(e){this.s={},this.p=new Re(0),this.ondata=e}return a.prototype.e=function(e){if(this.d)throw"stream finished";if(!this.ondata)throw"no stream handler";var t=this.p.length,i=new Re(t+e.length);i.set(this.p),i.set(e,t),this.p=i},a.prototype.c=function(e){this.d=this.s.i=e||!1;var t=this.s.b,i=ta(this.p,this.o,this.s);this.ondata(Wt(i,t,this.s.b),this.d),this.o=Wt(i,this.s.b-32768),this.s.b=this.o.length,this.p=Wt(this.p,this.s.p/8|0),this.s.p&=7},a.prototype.push=function(e,t){this.e(e),this.c(t)},a}(),_l=function(){function a(e){this.ondata=e,an([tn,function(){return[Xt,Nt]}],this,0,function(){var t=new Nt;onmessage=Xt(t)},7)}return a}();function xl(a,e,t){if(t||(t=e,e={}),typeof t!="function")throw"no callback";return nn(a,e,[tn],function(i){return zi(sn(i.data[0],ul(i.data[1])))},1,t)}function sn(a,e){return ta(a,e)}var Ss=function(){function a(e,t){this.c=en(),this.l=0,this.v=1,ai.call(this,e,t)}return a.prototype.push=function(e,t){ai.prototype.push.call(this,e,t)},a.prototype.p=function(e,t){this.c.p(e),this.l+=e.length;var i=hr(e,this.o,this.v&&ml(this.o),t&&8,!t);this.v&&(pl(i,this.o),this.v=0),t&&(ke(i,i.length-8,this.c.d()),ke(i,i.length-4,this.l)),this.ondata(i,t)},a}(),td=function(){function a(e,t){an([rn,Yu,function(){return[Xt,ai,Ss]}],this,vl.call(this,e,t),function(i){var r=new Ss(i.data);onmessage=Xt(r)},8)}return a}();function id(a,e,t){if(t||(t=e,e={}),typeof t!="function")throw"no callback";return nn(a,e,[rn,Yu,function(){return[Ms]}],function(i){return zi(Ms(i.data[0],i.data[1]))},2,t)}function Ms(a,e){e||(e={});var t=en(),i=a.length;t.p(a);var r=hr(a,e,ml(e),8),n=r.length;return pl(r,e),ke(r,n-8,t.d()),ke(r,n-4,i),r}var Ts=function(){function a(e){this.v=1,Nt.call(this,e)}return a.prototype.push=function(e,t){if(Nt.prototype.e.call(this,e),this.v){var i=this.p.length>3?fl(this.p):4;if(i>=this.p.length&&!t)return;this.p=this.p.subarray(i),this.v=0}if(t){if(this.p.length<8)throw"invalid gzip stream";this.p=this.p.subarray(0,-8)}Nt.prototype.c.call(this,t)},a}(),rd=function(){function a(e){this.ondata=e,an([tn,Qu,function(){return[Xt,Nt,Ts]}],this,0,function(){var t=new Ts;onmessage=Xt(t)},9)}return a}();function nd(a,e,t){if(t||(t=e,e={}),typeof t!="function")throw"no callback";return nn(a,e,[tn,Qu,function(){return[As]}],function(i){return zi(As(i.data[0]))},3,t)}function As(a,e){return ta(a.subarray(fl(a),-8),e||new Re(Zu(a)))}var yl=function(){function a(e,t){this.c=hl(),this.v=1,ai.call(this,e,t)}return a.prototype.push=function(e,t){ai.prototype.push.call(this,e,t)},a.prototype.p=function(e,t){this.c.p(e);var i=hr(e,this.o,this.v&&2,t&&4,!t);this.v&&(gl(i,this.o),this.v=0),t&&ke(i,i.length-4,this.c.d()),this.ondata(i,t)},a}(),Kx=function(){function a(e,t){an([rn,qu,function(){return[Xt,ai,yl]}],this,vl.call(this,e,t),function(i){var r=new yl(i.data);onmessage=Xt(r)},10)}return a}();function $x(a,e,t){if(t||(t=e,e={}),typeof t!="function")throw"no callback";return nn(a,e,[rn,qu,function(){return[wl]}],function(i){return zi(wl(i.data[0],i.data[1]))},4,t)}function wl(a,e){e||(e={});var t=hl();t.p(a);var i=hr(a,e,2,4);return gl(i,e),ke(i,i.length-4,t.d()),i}var Es=function(){function a(e){this.v=1,Nt.call(this,e)}return a.prototype.push=function(e,t){if(Nt.prototype.e.call(this,e),this.v){if(this.p.length<2&&!t)return;this.p=this.p.subarray(2),this.v=0}if(t){if(this.p.length<4)throw"invalid zlib stream";this.p=this.p.subarray(0,-4)}Nt.prototype.c.call(this,t)},a}(),ad=function(){function a(e){this.ondata=e,an([tn,Ju,function(){return[Xt,Nt,Es]}],this,0,function(){var t=new Es;onmessage=Xt(t)},11)}return a}();function sd(a,e,t){if(t||(t=e,e={}),typeof t!="function")throw"no callback";return nn(a,e,[tn,Ju,function(){return[aa]}],function(i){return zi(aa(i.data[0],ul(i.data[1])))},5,t)}function aa(a,e){return ta((Ku(a),a.subarray(2,-4)),e)}var od=function(){function a(e){this.G=Ts,this.I=Nt,this.Z=Es,this.ondata=e}return a.prototype.push=function(e,t){if(!this.ondata)throw"no stream handler";if(this.s)this.s.push(e,t);else{if(this.p&&this.p.length){var i=new Re(this.p.length+e.length);i.set(this.p),i.set(e,this.p.length)}else this.p=e;if(this.p.length>2){var r=this,n=function(){r.ondata.apply(r,arguments)};this.s=this.p[0]==31&&this.p[1]==139&&this.p[2]==8?new this.G(n):(this.p[0]&15)!=8||this.p[0]>>4>7||(this.p[0]<<8|this.p[1])%31?new this.I(n):new this.Z(n),this.s.push(this.p,t),this.p=null}}},a}(),ey=function(){function a(e){this.G=rd,this.I=_l,this.Z=ad,this.ondata=e}return a.prototype.push=function(e,t){od.prototype.push.call(this,e,t)},a}();function ty(a,e,t){if(t||(t=e,e={}),typeof t!="function")throw"no callback";return a[0]==31&&a[1]==139&&a[2]==8?nd(a,e,t):(a[0]&15)!=8||a[0]>>4>7||(a[0]<<8|a[1])%31?xl(a,e,t):sd(a,e,t)}function iy(a,e){return a[0]==31&&a[1]==139&&a[2]==8?As(a,e):(a[0]&15)!=8||a[0]>>4>7||(a[0]<<8|a[1])%31?sn(a,e):aa(a,e)}var bl=function(a,e,t,i){for(var r in a){var n=a[r],s=e+r;n instanceof Re?t[s]=[n,i]:Array.isArray(n)?t[s]=[n[0],ra(i,n[1])]:bl(n,s+"/",t,i)}},ld=typeof TextEncoder<"u"&&new TextEncoder,Sl=typeof TextDecoder<"u"&&new TextDecoder,cd=0;try{Sl.decode(xi,{stream:!0}),cd=1}catch{}var hd=function(a){for(var e="",t=0;;){var i=a[t++],r=(i>127)+(i>223)+(i>239);if(t+r>a.length)return[e,Wt(a,t-1)];r?r==3?(i=((i&15)<<18|(a[t++]&63)<<12|(a[t++]&63)<<6|a[t++]&63)-65536,e+=String.fromCharCode(55296|i>>10,56320|i&1023)):r&1?e+=String.fromCharCode((i&31)<<6|a[t++]&63):e+=String.fromCharCode((i&15)<<12|(a[t++]&63)<<6|a[t++]&63):e+=String.fromCharCode(i)}},ry=function(){function a(e){this.ondata=e,cd?this.t=new TextDecoder:this.p=xi}return a.prototype.push=function(e,t){if(!this.ondata)throw"no callback";if(t=!!t,this.t){if(this.ondata(this.t.decode(e,{stream:!0}),t),t){if(this.t.decode().length)throw"invalid utf-8 data";this.t=null}return}if(!this.p)throw"stream finished";var i=new Re(this.p.length+e.length);i.set(this.p),i.set(e,this.p.length);var r=hd(i),n=r[0],s=r[1];if(t){if(s.length)throw"invalid utf-8 data";this.p=null}else this.p=s;this.ondata(n,t)},a}(),ny=function(){function a(e){this.ondata=e}return a.prototype.push=function(e,t){if(!this.ondata)throw"no callback";if(this.d)throw"stream finished";this.ondata(Hi(e),this.d=t||!1)},a}();function Hi(a,e){if(e){for(var t=new Re(a.length),i=0;i<a.length;++i)t[i]=a.charCodeAt(i);return t}if(ld)return ld.encode(a);for(var r=a.length,n=new Re(a.length+(a.length>>1)),s=0,o=function(u){n[s++]=u},i=0;i<r;++i){if(s+5>n.length){var l=new Re(s+8+(r-i<<1));l.set(n),n=l}var c=a.charCodeAt(i);c<128||e?o(c):c<2048?(o(192|c>>6),o(128|c&63)):c>55295&&c<57344?(c=65536+(c&1047552)|a.charCodeAt(++i)&1023,o(240|c>>18),o(128|c>>12&63),o(128|c>>6&63),o(128|c&63)):(o(224|c>>12),o(128|c>>6&63),o(128|c&63))}return Wt(n,0,s)}function Ml(a,e){if(e){for(var t="",i=0;i<a.length;i+=16384)t+=String.fromCharCode.apply(null,a.subarray(i,i+16384));return t}else{if(Sl)return Sl.decode(a);var r=hd(a),n=r[0],s=r[1];if(s.length)throw"invalid utf-8 data";return n}}var ud=function(a){return a==1?3:a<6?2:a==9?1:0},dd=function(a,e){return e+30+Pt(a,e+26)+Pt(a,e+28)},pd=function(a,e,t){var i=Pt(a,e+28),r=Ml(a.subarray(e+46,e+46+i),!(Pt(a,e+8)&2048)),n=e+46+i,s=tt(a,e+20),o=t&&s==4294967295?fd(a,n):[s,tt(a,e+24),tt(a,e+42)],l=o[0],c=o[1],h=o[2];return[Pt(a,e+10),l,c,r,n+Pt(a,e+30)+Pt(a,e+32),h]},fd=function(a,e){for(;Pt(a,e)!=1;e+=4+Pt(a,e+2));return[dl(a,e+12),dl(a,e+4),dl(a,e+20)]},ki=function(a){var e=0;if(a)for(var t in a){var i=a[t].length;if(i>65535)throw"extra field too long";e+=i+4}return e},on=function(a,e,t,i,r,n,s,o){var l=i.length,c=t.extra,h=o&&o.length,u=ki(c);ke(a,e,s!=null?33639248:67324752),e+=4,s!=null&&(a[e++]=20,a[e++]=t.os),a[e]=20,e+=2,a[e++]=t.flag<<1|(n==null&&8),a[e++]=r&&8,a[e++]=t.compression&255,a[e++]=t.compression>>8;var d=new Date(t.mtime==null?Date.now():t.mtime),p=d.getFullYear()-1980;if(p<0||p>119)throw"date not in range 1980-2099";if(ke(a,e,p<<25|d.getMonth()+1<<21|d.getDate()<<16|d.getHours()<<11|d.getMinutes()<<5|d.getSeconds()>>>1),e+=4,n!=null&&(ke(a,e,t.crc),ke(a,e+4,n),ke(a,e+8,t.size)),ke(a,e+12,l),ke(a,e+14,u),e+=16,s!=null&&(ke(a,e,h),ke(a,e+6,t.attrs),ke(a,e+10,s),e+=14),a.set(i,e),e+=l,u)for(var m in c){var v=c[m],_=v.length;ke(a,e,+m),ke(a,e+2,_),a.set(v,e+4),e+=4+_}return h&&(a.set(o,e),e+=h),e},Tl=function(a,e,t,i,r){ke(a,e,101010256),ke(a,e+8,t),ke(a,e+10,t),ke(a,e+12,i),ke(a,e+16,r)},sa=function(){function a(e){this.filename=e,this.c=en(),this.size=0,this.compression=0}return a.prototype.process=function(e,t){this.ondata(null,e,t)},a.prototype.push=function(e,t){if(!this.ondata)throw"no callback - add to ZIP archive before pushing";this.c.p(e),this.size+=e.length,t&&(this.crc=this.c.d()),this.process(e,t||!1)},a}(),ay=function(){function a(e,t){var i=this;t||(t={}),sa.call(this,e),this.d=new ai(t,function(r,n){i.ondata(null,r,n)}),this.compression=8,this.flag=ud(t.level)}return a.prototype.process=function(e,t){try{this.d.push(e,t)}catch(i){this.ondata(i,null,t)}},a.prototype.push=function(e,t){sa.prototype.push.call(this,e,t)},a}(),sy=function(){function a(e,t){var i=this;t||(t={}),sa.call(this,e),this.d=new $u(t,function(r,n,s){i.ondata(r,n,s)}),this.compression=8,this.flag=ud(t.level),this.terminate=this.d.terminate}return a.prototype.process=function(e,t){this.d.push(e,t)},a.prototype.push=function(e,t){sa.prototype.push.call(this,e,t)},a}(),oy=function(){function a(e){this.ondata=e,this.u=[],this.d=1}return a.prototype.add=function(e){var t=this;if(this.d&2)throw"stream finished";var i=Hi(e.filename),r=i.length,n=e.comment,s=n&&Hi(n),o=r!=e.filename.length||s&&n.length!=s.length,l=r+ki(e.extra)+30;if(r>65535)throw"filename too long";var c=new Re(l);on(c,0,e,i,o);var h=[c],u=function(){for(var _=0,g=h;_<g.length;_++){var f=g[_];t.ondata(null,f,!1)}h=[]},d=this.d;this.d=0;var p=this.u.length,m=ra(e,{f:i,u:o,o:s,t:function(){e.terminate&&e.terminate()},r:function(){if(u(),d){var _=t.u[p+1];_?_.r():t.d=1}d=1}}),v=0;e.ondata=function(_,g,f){if(_)t.ondata(_,g,f),t.terminate();else if(v+=g.length,h.push(g),f){var x=new Re(16);ke(x,0,134695760),ke(x,4,e.crc),ke(x,8,v),ke(x,12,e.size),h.push(x),m.c=v,m.b=l+v+16,m.crc=e.crc,m.size=e.size,d&&m.r(),d=1}else d&&u()},this.u.push(m)},a.prototype.end=function(){var e=this;if(this.d&2)throw this.d&1?"stream finishing":"stream finished";this.d?this.e():this.u.push({r:function(){e.d&1&&(e.u.splice(-1,1),e.e())},t:function(){}}),this.d=3},a.prototype.e=function(){for(var e=0,t=0,i=0,r=0,n=this.u;r<n.length;r++){var s=n[r];i+=46+s.f.length+ki(s.extra)+(s.o?s.o.length:0)}for(var o=new Re(i+22),l=0,c=this.u;l<c.length;l++){var s=c[l];on(o,e,s,s.f,s.u,s.c,t,s.o),e+=46+s.f.length+ki(s.extra)+(s.o?s.o.length:0),t+=s.b}Tl(o,e,this.u.length,i,t),this.ondata(null,o,!0),this.d=2},a.prototype.terminate=function(){for(var e=0,t=this.u;e<t.length;e++){var i=t[e];i.t()}this.d=2},a}();function ly(a,e,t){if(t||(t=e,e={}),typeof t!="function")throw"no callback";var i={};bl(a,"",i,e);var r=Object.keys(i),n=r.length,s=0,o=0,l=n,c=new Array(n),h=[],u=function(){for(var v=0;v<h.length;++v)h[v]()},d=function(){var v=new Re(o+22),_=s,g=o-s;o=0;for(var f=0;f<l;++f){var x=c[f];try{var S=x.c.length;on(v,o,x,x.f,x.u,S);var w=30+x.f.length+ki(x.extra),y=o+w;v.set(x.c,y),on(v,s,x,x.f,x.u,S,o,x.m),s+=16+w+(x.m?x.m.length:0),o=y+S}catch(M){return t(M,null)}}Tl(v,s,c.length,g,_),t(null,v)};n||d();for(var p=function(v){var _=r[v],g=i[_],f=g[0],x=g[1],S=en(),w=f.length;S.p(f);var y=Hi(_),M=y.length,L=x.comment,N=L&&Hi(L),R=N&&N.length,z=ki(x.extra),H=x.level==0?0:8,I=function(F,P){if(F)u(),t(F,null);else{var C=P.length;c[v]=ra(x,{size:w,crc:S.d(),c:P,f:y,m:N,u:M!=_.length||N&&L.length!=R,compression:H}),s+=30+M+z+C,o+=76+2*(M+z)+(R||0)+C,--n||d()}};if(M>65535&&I("filename too long",null),!H)I(null,f);else if(w<16e4)try{I(null,na(f,x))}catch(F){I(F,null)}else h.push(ed(f,x,I))},m=0;m<l;++m)p(m);return u}function cy(a,e){e||(e={});var t={},i=[];bl(a,"",t,e);var r=0,n=0;for(var s in t){var o=t[s],l=o[0],c=o[1],h=c.level==0?0:8,u=Hi(s),d=u.length,p=c.comment,m=p&&Hi(p),v=m&&m.length,_=ki(c.extra);if(d>65535)throw"filename too long";var g=h?na(l,c):l,f=g.length,x=en();x.p(l),i.push(ra(c,{size:l.length,crc:x.d(),c:g,f:u,m,u:d!=s.length||m&&p.length!=v,o:r,compression:h})),r+=30+d+_+f,n+=76+2*(d+_)+(v||0)+f}for(var S=new Re(n+22),w=r,y=n-r,M=0;M<i.length;++M){var u=i[M];on(S,u.o,u,u.f,u.u,u.c.length);var L=30+u.f.length+ki(u.extra);S.set(u.c,u.o+L),on(S,r,u,u.f,u.u,u.c.length,u.o,u.m),r+=16+L+(u.m?u.m.length:0)}return Tl(S,r,i.length,y,w),S}var md=function(){function a(){}return a.prototype.push=function(e,t){this.ondata(null,e,t)},a.compression=0,a}(),hy=function(){function a(){var e=this;this.i=new Nt(function(t,i){e.ondata(null,t,i)})}return a.prototype.push=function(e,t){try{this.i.push(e,t)}catch(i){this.ondata(i,e,t)}},a.compression=8,a}(),uy=function(){function a(e,t){var i=this;t<32e4?this.i=new Nt(function(r,n){i.ondata(null,r,n)}):(this.i=new _l(function(r,n,s){i.ondata(r,n,s)}),this.terminate=this.i.terminate)}return a.prototype.push=function(e,t){this.i.terminate&&(e=Wt(e,0)),this.i.push(e,t)},a.compression=8,a}(),dy=function(){function a(e){this.onfile=e,this.k=[],this.o={0:md},this.p=xi}return a.prototype.push=function(e,t){var i=this;if(!this.onfile)throw"no callback";if(!this.p)throw"stream finished";if(this.c>0){var r=Math.min(this.c,e.length),n=e.subarray(0,r);if(this.c-=r,this.d?this.d.push(n,!this.c):this.k[0].push(n),e=e.subarray(r),e.length)return this.push(e,t)}else{var s=0,o=0,l=void 0,c=void 0;this.p.length?e.length?(c=new Re(this.p.length+e.length),c.set(this.p),c.set(e,this.p.length)):c=this.p:c=e;for(var h=c.length,u=this.c,d=u&&this.d,p=function(){var g,f=tt(c,o);if(f==67324752){s=1,l=o,m.d=null,m.c=0;var x=Pt(c,o+6),S=Pt(c,o+8),w=x&2048,y=x&8,M=Pt(c,o+26),L=Pt(c,o+28);if(h>o+30+M+L){var N=[];m.k.unshift(N),s=2;var R=tt(c,o+18),z=tt(c,o+22),H=Ml(c.subarray(o+30,o+=30+M),!w);R==4294967295?(g=y?[-2]:fd(c,o),R=g[0],z=g[1]):y&&(R=-1),o+=L,m.c=R;var I,F={name:H,compression:S,start:function(){if(!F.ondata)throw"no callback";if(!R)F.ondata(null,xi,!0);else{var P=i.o[S];if(!P)throw"unknown compression type "+S;I=R<0?new P(H):new P(H,R,z),I.ondata=function(G,ie,te){F.ondata(G,ie,te)};for(var C=0,O=N;C<O.length;C++){var Y=O[C];I.push(Y,!1)}i.k[0]==N&&i.c?i.d=I:I.push(xi,!0)}},terminate:function(){I&&I.terminate&&I.terminate()}};R>=0&&(F.size=R,F.originalSize=z),m.onfile(F)}return"break"}else if(u){if(f==134695760)return l=o+=12+(u==-2&&8),s=3,m.c=0,"break";if(f==33639248)return l=o-=4,s=3,m.c=0,"break"}},m=this;o<h-4;++o){var v=p();if(v==="break")break}if(this.p=xi,u<0){var _=s?c.subarray(0,l-12-(u==-2&&8)-(tt(c,l-16)==134695760&&4)):c.subarray(0,o);d?d.push(_,!!s):this.k[+(s==2)].push(_)}if(s&2)return this.push(c.subarray(o),t);this.p=c.subarray(o)}if(t){if(this.c)throw"invalid zip file";this.p=null}},a.prototype.register=function(e){this.o[e.compression]=e},a}();function py(a,e){if(typeof e!="function")throw"no callback";for(var t=[],i=function(){for(var d=0;d<t.length;++d)t[d]()},r={},n=a.length-22;tt(a,n)!=101010256;--n)if(!n||a.length-n>65558){e("invalid zip file",null);return}var s=Pt(a,n+8);s||e(null,{});var o=s,l=tt(a,n+16),c=l==4294967295;if(c){if(n=tt(a,n-12),tt(a,n)!=101075792){e("invalid zip file",null);return}o=s=tt(a,n+32),l=tt(a,n+48)}for(var h=function(d){var p=pd(a,l,c),m=p[0],v=p[1],_=p[2],g=p[3],f=p[4],x=p[5],S=dd(a,x);l=f;var w=function(M,L){M?(i(),e(M,null)):(r[g]=L,--s||e(null,r))};if(!m)w(null,Wt(a,S,S+v));else if(m==8){var y=a.subarray(S,S+v);if(v<32e4)try{w(null,sn(y,new Re(_)))}catch(M){w(M,null)}else t.push(xl(y,{size:_},w))}else w("unknown compression type "+m,null)},u=0;u<o;++u)h();return i}function fy(a){for(var e={},t=a.length-22;tt(a,t)!=101010256;--t)if(!t||a.length-t>65558)throw"invalid zip file";var i=Pt(a,t+8);if(!i)return{};var r=tt(a,t+16),n=r==4294967295;if(n){if(t=tt(a,t-12),tt(a,t)!=101075792)throw"invalid zip file";i=tt(a,t+32),r=tt(a,t+48)}for(var s=0;s<i;++s){var o=pd(a,r,n),l=o[0],c=o[1],h=o[2],u=o[3],d=o[4],p=o[5],m=dd(a,p);if(r=d,!l)e[u]=Wt(a,m,m+c);else if(l==8)e[u]=sn(a.subarray(m,m+c),new Re(h));else throw"unknown compression type "+l}return e}const my=Object.freeze(Object.defineProperty({__proto__:null,AsyncCompress:td,AsyncDecompress:ey,AsyncDeflate:$u,AsyncGunzip:rd,AsyncGzip:td,AsyncInflate:_l,AsyncUnzipInflate:uy,AsyncUnzlib:ad,AsyncZipDeflate:sy,AsyncZlib:Kx,Compress:Ss,DecodeUTF8:ry,Decompress:od,Deflate:ai,EncodeUTF8:ny,Gunzip:Ts,Gzip:Ss,Inflate:Nt,Unzip:dy,UnzipInflate:hy,UnzipPassThrough:md,Unzlib:Es,Zip:oy,ZipDeflate:ay,ZipPassThrough:sa,Zlib:yl,compress:id,compressSync:Ms,decompress:ty,decompressSync:iy,deflate:ed,deflateSync:na,gunzip:nd,gunzipSync:As,gzip:id,gzipSync:Ms,inflate:xl,inflateSync:sn,strFromU8:Ml,strToU8:Hi,unzip:py,unzipSync:fy,unzlib:sd,unzlibSync:aa,zip:ly,zipSync:cy,zlib:$x,zlibSync:wl},Symbol.toStringTag,{value:"Module"}));class gd{static findSpan(e,t,i){const r=i.length-e-1;if(t>=i[r])return r-1;if(t<=i[e])return e;let n=e,s=r,o=Math.floor((n+s)/2);for(;t<i[o]||t>=i[o+1];)t<i[o]?s=o:n=o,o=Math.floor((n+s)/2);return o}static calcBasisFunctions(e,t,i,r){const n=[],s=[],o=[];n[0]=1;for(let l=1;l<=i;++l){s[l]=t-r[e+1-l],o[l]=r[e+l]-t;let c=0;for(let h=0;h<l;++h){const u=o[h+1],d=s[l-h],p=n[h]/(u+d);n[h]=c+u*p,c=d*p}n[l]=c}return n}static calcBSplinePoint(e,t,i,r){const n=this.findSpan(e,r,t),s=this.calcBasisFunctions(n,r,e,t),o=new Ue(0,0,0,0);for(let l=0;l<=e;++l){const c=i[n-e+l],h=s[l],u=c.w*h;o.x+=c.x*u,o.y+=c.y*u,o.z+=c.z*u,o.w+=c.w*h}return o}static calcBasisFunctionDerivatives(e,t,i,r,n){const s=[];for(let d=0;d<=i;++d)s[d]=0;const o=[];for(let d=0;d<=r;++d)o[d]=s.slice(0);const l=[];for(let d=0;d<=i;++d)l[d]=s.slice(0);l[0][0]=1;const c=s.slice(0),h=s.slice(0);for(let d=1;d<=i;++d){c[d]=t-n[e+1-d],h[d]=n[e+d]-t;let p=0;for(let m=0;m<d;++m){const v=h[m+1],_=c[d-m];l[d][m]=v+_;const g=l[m][d-1]/l[d][m];l[m][d]=p+v*g,p=_*g}l[d][d]=p}for(let d=0;d<=i;++d)o[0][d]=l[d][i];for(let d=0;d<=i;++d){let p=0,m=1;const v=[];for(let _=0;_<=i;++_)v[_]=s.slice(0);v[0][0]=1;for(let _=1;_<=r;++_){let g=0;const f=d-_,x=i-_;d>=_&&(v[m][0]=v[p][0]/l[x+1][f],g=v[m][0]*l[f][x]);const S=f>=-1?1:-f,w=d-1<=x?_-1:i-d;for(let M=S;M<=w;++M)v[m][M]=(v[p][M]-v[p][M-1])/l[x+1][f+M],g+=v[m][M]*l[f+M][x];d<=x&&(v[m][_]=-v[p][_-1]/l[x+1][d],g+=v[m][_]*l[d][x]),o[_][d]=g;const y=p;p=m,m=y}}let u=i;for(let d=1;d<=r;++d){for(let p=0;p<=i;++p)o[d][p]*=u;u*=i-d}return o}static calcBSplineDerivatives(e,t,i,r,n){const s=n<e?n:e,o=[],l=this.findSpan(e,r,t),c=this.calcBasisFunctionDerivatives(l,r,e,s,t),h=[];for(let u=0;u<i.length;++u){const d=i[u].clone(),p=d.w;d.x*=p,d.y*=p,d.z*=p,h[u]=d}for(let u=0;u<=s;++u){const d=h[l-e].clone().multiplyScalar(c[u][0]);for(let p=1;p<=e;++p)d.add(h[l-e+p].clone().multiplyScalar(c[u][p]));o[u]=d}for(let u=s+1;u<=n+1;++u)o[u]=new Ue(0,0,0);return o}static calcKoverI(e,t){let i=1;for(let n=2;n<=e;++n)i*=n;let r=1;for(let n=2;n<=t;++n)r*=n;for(let n=2;n<=e-t;++n)r*=n;return i/r}static calcRationalCurveDerivatives(e){const t=e.length,i=[],r=[];for(let s=0;s<t;++s){const o=e[s];i[s]=new b(o.x,o.y,o.z),r[s]=o.w}const n=[];for(let s=0;s<t;++s){const o=i[s].clone();for(let l=1;l<=s;++l)o.sub(n[s-l].clone().multiplyScalar(this.calcKoverI(s,l)*r[l]));n[s]=o.divideScalar(r[0])}return n}static calcNURBSDerivatives(e,t,i,r,n){const s=this.calcBSplineDerivatives(e,t,i,r,n);return this.calcRationalCurveDerivatives(s)}static calcSurfacePoint(e,t,i,r,n,s,o,l){const c=this.findSpan(e,s,i),h=this.findSpan(t,o,r),u=this.calcBasisFunctions(c,s,e,i),d=this.calcBasisFunctions(h,o,t,r),p=[];for(let v=0;v<=t;++v){p[v]=new Ue(0,0,0,0);for(let _=0;_<=e;++_){const g=n[c-e+_][h-t+v].clone(),f=g.w;g.x*=f,g.y*=f,g.z*=f,p[v].add(g.multiplyScalar(u[_]))}}const m=new Ue(0,0,0,0);for(let v=0;v<=t;++v)m.add(p[v].multiplyScalar(d[v]));m.divideScalar(m.w),l.set(m.x,m.y,m.z)}}class vd extends Bt{constructor(e,t,i,r,n){super(),this.degree=e,this.knots=t,this.controlPoints=[],this.startKnot=r||0,this.endKnot=n||this.knots.length-1;for(let s=0;s<i.length;++s){const o=i[s];this.controlPoints[s]=new Ue(o.x,o.y,o.z,o.w)}}getPoint(e,t=new b){const i=t,r=this.knots[this.startKnot]+e*(this.knots[this.endKnot]-this.knots[this.startKnot]),n=gd.calcBSplinePoint(this.degree,this.knots,this.controlPoints,r);return n.w!==1&&n.divideScalar(n.w),i.set(n.x,n.y,n.z)}getTangent(e,t=new b){const i=t,r=this.knots[0]+e*(this.knots[this.knots.length-1]-this.knots[0]),n=gd.calcNURBSDerivatives(this.degree,this.knots,this.controlPoints,r,1);return i.copy(n[1]).normalize(),i}}let Ce,it,At;class gy extends ii{constructor(e){super(e)}load(e,t,i,r){const n=this,s=n.path===""?gi.extractUrlBase(e):n.path,o=new us(this.manager);o.setPath(n.path),o.setResponseType("arraybuffer"),o.setRequestHeader(n.requestHeader),o.setWithCredentials(n.withCredentials),o.load(e,function(l){try{t(n.parse(l,s))}catch(c){r?r(c):console.error(c),n.manager.itemError(e)}},i,r)}parse(e,t){if(by(e))Ce=new wy().parse(e);else{const r=Sd(e);if(!Sy(r))throw new Error("THREE.FBXLoader: Unknown format.");if(yd(r)<7e3)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+yd(r));Ce=new yy().parse(r)}const i=new nr(this.manager).setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);return new vy(i,this.manager).parse(Ce)}}class vy{constructor(e,t){this.textureLoader=e,this.manager=t}parse(){it=this.parseConnections();const e=this.parseImages(),t=this.parseTextures(e),i=this.parseMaterials(t),r=this.parseDeformers(),n=new _y().parse(r);return this.parseScene(r,n,i),At}parseConnections(){const e=new Map;return"Connections"in Ce&&Ce.Connections.connections.forEach(function(t){const i=t[0],r=t[1],n=t[2];e.has(i)||e.set(i,{parents:[],children:[]});const s={ID:r,relationship:n};e.get(i).parents.push(s),e.has(r)||e.set(r,{parents:[],children:[]});const o={ID:i,relationship:n};e.get(r).children.push(o)}),e}parseImages(){const e={},t={};if("Video"in Ce.Objects){const i=Ce.Objects.Video;for(const r in i){const n=i[r],s=parseInt(r);if(e[s]=n.RelativeFilename||n.Filename,"Content"in n){const o=n.Content instanceof ArrayBuffer&&n.Content.byteLength>0,l=typeof n.Content=="string"&&n.Content!=="";if(o||l){const c=this.parseImage(i[r]);t[n.RelativeFilename||n.Filename]=c}}}}for(const i in e){const r=e[i];t[r]!==void 0?e[i]=t[r]:e[i]=e[i].split("\\").pop()}return e}parseImage(e){const t=e.Content,i=e.RelativeFilename||e.Filename,r=i.slice(i.lastIndexOf(".")+1).toLowerCase();let n;switch(r){case"bmp":n="image/bmp";break;case"jpg":case"jpeg":n="image/jpeg";break;case"png":n="image/png";break;case"tif":n="image/tiff";break;case"tga":this.manager.getHandler(".tga")===null&&console.warn("FBXLoader: TGA loader not found, skipping ",i),n="image/tga";break;default:console.warn('FBXLoader: Image type "'+r+'" is not supported.');return}if(typeof t=="string")return"data:"+n+";base64,"+t;{const s=new Uint8Array(t);return window.URL.createObjectURL(new Blob([s],{type:n}))}}parseTextures(e){const t=new Map;if("Texture"in Ce.Objects){const i=Ce.Objects.Texture;for(const r in i){const n=this.parseTexture(i[r],e);t.set(parseInt(r),n)}}return t}parseTexture(e,t){const i=this.loadTexture(e,t);i.ID=e.id,i.name=e.attrName;const r=e.WrapModeU,n=e.WrapModeV,s=r!==void 0?r.value:0,o=n!==void 0?n.value:0;if(i.wrapS=s===0?at:St,i.wrapT=o===0?at:St,"Scaling"in e){const l=e.Scaling.value;i.repeat.x=l[0],i.repeat.y=l[1]}return i}loadTexture(e,t){let i;const r=this.textureLoader.path,n=it.get(e.id).children;n!==void 0&&n.length>0&&t[n[0].ID]!==void 0&&(i=t[n[0].ID],(i.indexOf("blob:")===0||i.indexOf("data:")===0)&&this.textureLoader.setPath(void 0));let s;const o=e.FileName.slice(-3).toLowerCase();if(o==="tga"){const l=this.manager.getHandler(".tga");l===null?(console.warn("FBXLoader: TGA loader not found, creating placeholder texture for",e.RelativeFilename),s=new st):(l.setPath(this.textureLoader.path),s=l.load(i))}else o==="psd"?(console.warn("FBXLoader: PSD textures are not supported, creating placeholder texture for",e.RelativeFilename),s=new st):s=this.textureLoader.load(i);return this.textureLoader.setPath(r),s}parseMaterials(e){const t=new Map;if("Material"in Ce.Objects){const i=Ce.Objects.Material;for(const r in i){const n=this.parseMaterial(i[r],e);n!==null&&t.set(parseInt(r),n)}}return t}parseMaterial(e,t){const i=e.id,r=e.attrName;let n=e.ShadingModel;if(typeof n=="object"&&(n=n.value),!it.has(i))return null;const s=this.parseParameters(e,t,i);let o;switch(n.toLowerCase()){case"phong":o=new hs;break;case"lambert":o=new nu;break;default:console.warn('THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.',n),o=new hs;break}return o.setValues(s),o.name=r,o}parseParameters(e,t,i){const r={};e.BumpFactor&&(r.bumpScale=e.BumpFactor.value),e.Diffuse?r.color=new Z().fromArray(e.Diffuse.value):e.DiffuseColor&&(e.DiffuseColor.type==="Color"||e.DiffuseColor.type==="ColorRGB")&&(r.color=new Z().fromArray(e.DiffuseColor.value)),e.DisplacementFactor&&(r.displacementScale=e.DisplacementFactor.value),e.Emissive?r.emissive=new Z().fromArray(e.Emissive.value):e.EmissiveColor&&(e.EmissiveColor.type==="Color"||e.EmissiveColor.type==="ColorRGB")&&(r.emissive=new Z().fromArray(e.EmissiveColor.value)),e.EmissiveFactor&&(r.emissiveIntensity=parseFloat(e.EmissiveFactor.value)),e.Opacity&&(r.opacity=parseFloat(e.Opacity.value)),r.opacity<1&&(r.transparent=!0),e.ReflectionFactor&&(r.reflectivity=e.ReflectionFactor.value),e.Shininess&&(r.shininess=e.Shininess.value),e.Specular?r.specular=new Z().fromArray(e.Specular.value):e.SpecularColor&&e.SpecularColor.type==="Color"&&(r.specular=new Z().fromArray(e.SpecularColor.value));const n=this;return it.get(i).children.forEach(function(s){const o=s.relationship;switch(o){case"Bump":r.bumpMap=n.getTexture(t,s.ID);break;case"Maya|TEX_ao_map":r.aoMap=n.getTexture(t,s.ID);break;case"DiffuseColor":case"Maya|TEX_color_map":r.map=n.getTexture(t,s.ID),r.map.encoding=Rt;break;case"DisplacementColor":r.displacementMap=n.getTexture(t,s.ID);break;case"EmissiveColor":r.emissiveMap=n.getTexture(t,s.ID),r.emissiveMap.encoding=Rt;break;case"NormalMap":case"Maya|TEX_normal_map":r.normalMap=n.getTexture(t,s.ID);break;case"ReflectionColor":r.envMap=n.getTexture(t,s.ID),r.envMap.mapping=Vs,r.envMap.encoding=Rt;break;case"SpecularColor":r.specularMap=n.getTexture(t,s.ID),r.specularMap.encoding=Rt;break;case"TransparentColor":case"TransparencyFactor":r.alphaMap=n.getTexture(t,s.ID),r.transparent=!0;break;case"AmbientColor":case"ShininessExponent":case"SpecularFactor":case"VectorDisplacementColor":default:console.warn("THREE.FBXLoader: %s map is not supported in three.js, skipping texture.",o);break}}),r}getTexture(e,t){return"LayeredTexture"in Ce.Objects&&t in Ce.Objects.LayeredTexture&&(console.warn("THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer."),t=it.get(t).children[0].ID),e.get(t)}parseDeformers(){const e={},t={};if("Deformer"in Ce.Objects){const i=Ce.Objects.Deformer;for(const r in i){const n=i[r],s=it.get(parseInt(r));if(n.attrType==="Skin"){const o=this.parseSkeleton(s,i);o.ID=r,s.parents.length>1&&console.warn("THREE.FBXLoader: skeleton attached to more than one geometry is not supported."),o.geometryID=s.parents[0].ID,e[r]=o}else if(n.attrType==="BlendShape"){const o={id:r};o.rawTargets=this.parseMorphTargets(s,i),o.id=r,s.parents.length>1&&console.warn("THREE.FBXLoader: morph target attached to more than one geometry is not supported."),t[r]=o}}}return{skeletons:e,morphTargets:t}}parseSkeleton(e,t){const i=[];return e.children.forEach(function(r){const n=t[r.ID];if(n.attrType!=="Cluster")return;const s={ID:r.ID,indices:[],weights:[],transformLink:new ee().fromArray(n.TransformLink.a)};"Indexes"in n&&(s.indices=n.Indexes.a,s.weights=n.Weights.a),i.push(s)}),{rawBones:i,bones:[]}}parseMorphTargets(e,t){const i=[];for(let r=0;r<e.children.length;r++){const n=e.children[r],s=t[n.ID],o={name:s.attrName,initialWeight:s.DeformPercent,id:s.id,fullWeights:s.FullWeights.a};if(s.attrType!=="BlendShapeChannel")return;o.geoID=it.get(parseInt(n.ID)).children.filter(function(l){return l.relationship===void 0})[0].ID,i.push(o)}return i}parseScene(e,t,i){At=new ct;const r=this.parseModels(e.skeletons,t,i),n=Ce.Objects.Model,s=this;r.forEach(function(l){const c=n[l.ID];s.setLookAtProperties(l,c),it.get(l.ID).parents.forEach(function(h){const u=r.get(h.ID);u!==void 0&&u.add(l)}),l.parent===null&&At.add(l)}),this.bindSkeleton(e.skeletons,t,r),this.createAmbientLight(),this.setupMorphMaterials(),At.traverse(function(l){if(l.userData.transformData){l.parent&&(l.userData.transformData.parentMatrix=l.parent.matrix,l.userData.transformData.parentMatrixWorld=l.parent.matrixWorld);const c=wd(l.userData.transformData);l.applyMatrix4(c),l.updateWorldMatrix()}});const o=new xy().parse();At.children.length===1&&At.children[0].isGroup&&(At.children[0].animations=o,At=At.children[0]),At.animations=o}parseModels(e,t,i){const r=new Map,n=Ce.Objects.Model;for(const s in n){const o=parseInt(s),l=n[s],c=it.get(o);let h=this.buildSkeleton(c,e,o,l.attrName);if(!h){switch(l.attrType){case"Camera":h=this.createCamera(c);break;case"Light":h=this.createLight(c);break;case"Mesh":h=this.createMesh(c,t,i);break;case"NurbsCurve":h=this.createCurve(c,t);break;case"LimbNode":case"Root":h=new Hn;break;case"Null":default:h=new ct;break}h.name=l.attrName?ze.sanitizeNodeName(l.attrName):"",h.ID=o}this.getTransformData(h,l),r.set(o,h)}return r}buildSkeleton(e,t,i,r){let n=null;return e.parents.forEach(function(s){for(const o in t){const l=t[o];l.rawBones.forEach(function(c,h){if(c.ID===s.ID){const u=n;n=new Hn,n.matrixWorld.copy(c.transformLink),n.name=r?ze.sanitizeNodeName(r):"",n.ID=i,l.bones[h]=n,u!==null&&n.add(u)}})}}),n}createCamera(e){let t,i;if(e.children.forEach(function(r){const n=Ce.Objects.NodeAttribute[r.ID];n!==void 0&&(i=n)}),i===void 0)t=new Ie;else{let r=0;i.CameraProjectionType!==void 0&&i.CameraProjectionType.value===1&&(r=1);let n=1;i.NearPlane!==void 0&&(n=i.NearPlane.value/1e3);let s=1e3;i.FarPlane!==void 0&&(s=i.FarPlane.value/1e3);let o=window.innerWidth,l=window.innerHeight;i.AspectWidth!==void 0&&i.AspectHeight!==void 0&&(o=i.AspectWidth.value,l=i.AspectHeight.value);const c=o/l;let h=45;i.FieldOfView!==void 0&&(h=i.FieldOfView.value);const u=i.FocalLength?i.FocalLength.value:null;switch(r){case 0:t=new _t(h,c,n,s),u!==null&&t.setFocalLength(u);break;case 1:t=new ar(-o/2,o/2,l/2,-l/2,n,s);break;default:console.warn("THREE.FBXLoader: Unknown camera type "+r+"."),t=new Ie;break}}return t}createLight(e){let t,i;if(e.children.forEach(function(r){const n=Ce.Objects.NodeAttribute[r.ID];n!==void 0&&(i=n)}),i===void 0)t=new Ie;else{let r;i.LightType===void 0?r=0:r=i.LightType.value;let n=16777215;i.Color!==void 0&&(n=new Z().fromArray(i.Color.value));let s=i.Intensity===void 0?1:i.Intensity.value/100;i.CastLightOnObject!==void 0&&i.CastLightOnObject.value===0&&(s=0);let o=0;i.FarAttenuationEnd!==void 0&&(i.EnableFarAttenuation!==void 0&&i.EnableFarAttenuation.value===0?o=0:o=i.FarAttenuationEnd.value);const l=1;switch(r){case 0:t=new ds(n,s,o,l);break;case 1:t=new ps(n,s);break;case 2:let c=Math.PI/3;i.InnerAngle!==void 0&&(c=Yt.degToRad(i.InnerAngle.value));let h=0;i.OuterAngle!==void 0&&(h=Yt.degToRad(i.OuterAngle.value),h=Math.max(h,1)),t=new Yo(n,s,o,c,h,l);break;default:console.warn("THREE.FBXLoader: Unknown light type "+i.LightType.value+", defaulting to a PointLight."),t=new ds(n,s);break}i.CastShadows!==void 0&&i.CastShadows.value===1&&(t.castShadow=!0)}return t}createMesh(e,t,i){let r,n=null,s=null;const o=[];return e.children.forEach(function(l){t.has(l.ID)&&(n=t.get(l.ID)),i.has(l.ID)&&o.push(i.get(l.ID))}),o.length>1?s=o:o.length>0?s=o[0]:(s=new hs({color:13421772}),o.push(s)),"color"in n.attributes&&o.forEach(function(l){l.vertexColors=!0}),n.FBX_Deformer?(r=new Ka(n,s),r.normalizeSkinWeights()):r=new qe(n,s),r}createCurve(e,t){const i=e.children.reduce(function(n,s){return t.has(s.ID)&&(n=t.get(s.ID)),n},null),r=new tr({color:3342591,linewidth:1});return new Gn(i,r)}getTransformData(e,t){const i={};"InheritType"in t&&(i.inheritType=parseInt(t.InheritType.value)),"RotationOrder"in t?i.eulerOrder=bd(t.RotationOrder.value):i.eulerOrder="ZYX","Lcl_Translation"in t&&(i.translation=t.Lcl_Translation.value),"PreRotation"in t&&(i.preRotation=t.PreRotation.value),"Lcl_Rotation"in t&&(i.rotation=t.Lcl_Rotation.value),"PostRotation"in t&&(i.postRotation=t.PostRotation.value),"Lcl_Scaling"in t&&(i.scale=t.Lcl_Scaling.value),"ScalingOffset"in t&&(i.scalingOffset=t.ScalingOffset.value),"ScalingPivot"in t&&(i.scalingPivot=t.ScalingPivot.value),"RotationOffset"in t&&(i.rotationOffset=t.RotationOffset.value),"RotationPivot"in t&&(i.rotationPivot=t.RotationPivot.value),e.userData.transformData=i}setLookAtProperties(e,t){"LookAtProperty"in t&&it.get(e.ID).children.forEach(function(i){if(i.relationship==="LookAtProperty"){const r=Ce.Objects.Model[i.ID];if("Lcl_Translation"in r){const n=r.Lcl_Translation.value;e.target!==void 0?(e.target.position.fromArray(n),At.add(e.target)):e.lookAt(new b().fromArray(n))}}})}bindSkeleton(e,t,i){const r=this.parsePoseNodes();for(const n in e){const s=e[n];it.get(parseInt(s.ID)).parents.forEach(function(o){if(t.has(o.ID)){const l=o.ID;it.get(l).parents.forEach(function(c){i.has(c.ID)&&i.get(c.ID).bind(new Ds(s.bones),r[c.ID])})}})}}parsePoseNodes(){const e={};if("Pose"in Ce.Objects){const t=Ce.Objects.Pose;for(const i in t)if(t[i].attrType==="BindPose"){const r=t[i].PoseNode;Array.isArray(r)?r.forEach(function(n){e[n.Node]=new ee().fromArray(n.Matrix.a)}):e[r.Node]=new ee().fromArray(r.Matrix.a)}}return e}createAmbientLight(){if("GlobalSettings"in Ce&&"AmbientColor"in Ce.GlobalSettings){const e=Ce.GlobalSettings.AmbientColor.value,t=e[0],i=e[1],r=e[2];if(t!==0||i!==0||r!==0){const n=new Z(t,i,r);At.add(new qo(n,1))}}}setupMorphMaterials(){const e=this;At.traverse(function(t){t.isMesh&&t.geometry.morphAttributes.position&&t.geometry.morphAttributes.position.length&&(Array.isArray(t.material)?t.material.forEach(function(i,r){e.setupMorphMaterial(t,i,r)}):e.setupMorphMaterial(t,t.material))})}setupMorphMaterial(e,t,i){const r=e.uuid,n=t.uuid;let s=!1;if(At.traverse(function(o){o.isMesh&&(Array.isArray(o.material)?o.material.forEach(function(l){l.uuid===n&&o.uuid!==r&&(s=!0)}):o.material.uuid===n&&o.uuid!==r&&(s=!0))}),s===!0){const o=t.clone();o.morphTargets=!0,i===void 0?e.material=o:e.material[i]=o}else t.morphTargets=!0}}class _y{parse(e){const t=new Map;if("Geometry"in Ce.Objects){const i=Ce.Objects.Geometry;for(const r in i){const n=it.get(parseInt(r)),s=this.parseGeometry(n,i[r],e);t.set(parseInt(r),s)}}return t}parseGeometry(e,t,i){switch(t.attrType){case"Mesh":return this.parseMeshGeometry(e,t,i);case"NurbsCurve":return this.parseNurbsGeometry(t)}}parseMeshGeometry(e,t,i){const r=i.skeletons,n=[],s=e.parents.map(function(u){return Ce.Objects.Model[u.ID]});if(s.length===0)return;const o=e.children.reduce(function(u,d){return r[d.ID]!==void 0&&(u=r[d.ID]),u},null);e.children.forEach(function(u){i.morphTargets[u.ID]!==void 0&&n.push(i.morphTargets[u.ID])});const l=s[0],c={};"RotationOrder"in l&&(c.eulerOrder=bd(l.RotationOrder.value)),"InheritType"in l&&(c.inheritType=parseInt(l.InheritType.value)),"GeometricTranslation"in l&&(c.translation=l.GeometricTranslation.value),"GeometricRotation"in l&&(c.rotation=l.GeometricRotation.value),"GeometricScaling"in l&&(c.scale=l.GeometricScaling.value);const h=wd(c);return this.genGeometry(t,o,n,h)}genGeometry(e,t,i,r){const n=new Fe;e.attrName&&(n.name=e.attrName);const s=this.parseGeoNode(e,t),o=this.genBuffers(s),l=new be(o.vertex,3);if(l.applyMatrix4(r),n.setAttribute("position",l),o.colors.length>0&&n.setAttribute("color",new be(o.colors,3)),t&&(n.setAttribute("skinIndex",new go(o.weightsIndices,4)),n.setAttribute("skinWeight",new be(o.vertexWeights,4)),n.FBX_Deformer=t),o.normal.length>0){const c=new dt().getNormalMatrix(r),h=new be(o.normal,3);h.applyNormalMatrix(c),n.setAttribute("normal",h)}if(o.uvs.forEach(function(c,h){let u="uv"+(h+1).toString();h===0&&(u="uv"),n.setAttribute(u,new be(o.uvs[h],2))}),s.material&&s.material.mappingType!=="AllSame"){let c=o.materialIndex[0],h=0;if(o.materialIndex.forEach(function(u,d){u!==c&&(n.addGroup(h,d-h,c),c=u,h=d)}),n.groups.length>0){const u=n.groups[n.groups.length-1],d=u.start+u.count;d!==o.materialIndex.length&&n.addGroup(d,o.materialIndex.length-d,c)}n.groups.length===0&&n.addGroup(0,o.materialIndex.length,o.materialIndex[0])}return this.addMorphTargets(n,e,i,r),n}parseGeoNode(e,t){const i={};if(i.vertexPositions=e.Vertices!==void 0?e.Vertices.a:[],i.vertexIndices=e.PolygonVertexIndex!==void 0?e.PolygonVertexIndex.a:[],e.LayerElementColor&&(i.color=this.parseVertexColors(e.LayerElementColor[0])),e.LayerElementMaterial&&(i.material=this.parseMaterialIndices(e.LayerElementMaterial[0])),e.LayerElementNormal&&(i.normal=this.parseNormals(e.LayerElementNormal[0])),e.LayerElementUV){i.uv=[];let r=0;for(;e.LayerElementUV[r];)e.LayerElementUV[r].UV&&i.uv.push(this.parseUVs(e.LayerElementUV[r])),r++}return i.weightTable={},t!==null&&(i.skeleton=t,t.rawBones.forEach(function(r,n){r.indices.forEach(function(s,o){i.weightTable[s]===void 0&&(i.weightTable[s]=[]),i.weightTable[s].push({id:n,weight:r.weights[o]})})})),i}genBuffers(e){const t={vertex:[],normal:[],colors:[],uvs:[],materialIndex:[],vertexWeights:[],weightsIndices:[]};let i=0,r=0,n=!1,s=[],o=[],l=[],c=[],h=[],u=[];const d=this;return e.vertexIndices.forEach(function(p,m){let v,_=!1;p<0&&(p=p^-1,_=!0);let g=[],f=[];if(s.push(p*3,p*3+1,p*3+2),e.color){const x=Ls(m,i,p,e.color);l.push(x[0],x[1],x[2])}if(e.skeleton){if(e.weightTable[p]!==void 0&&e.weightTable[p].forEach(function(x){f.push(x.weight),g.push(x.id)}),f.length>4){n||(console.warn("THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights."),n=!0);const x=[0,0,0,0],S=[0,0,0,0];f.forEach(function(w,y){let M=w,L=g[y];S.forEach(function(N,R,z){if(M>N){z[R]=M,M=N;const H=x[R];x[R]=L,L=H}})}),g=x,f=S}for(;f.length<4;)f.push(0),g.push(0);for(let x=0;x<4;++x)h.push(f[x]),u.push(g[x])}if(e.normal){const x=Ls(m,i,p,e.normal);o.push(x[0],x[1],x[2])}e.material&&e.material.mappingType!=="AllSame"&&(v=Ls(m,i,p,e.material)[0]),e.uv&&e.uv.forEach(function(x,S){const w=Ls(m,i,p,x);c[S]===void 0&&(c[S]=[]),c[S].push(w[0]),c[S].push(w[1])}),r++,_&&(d.genFace(t,e,s,v,o,l,c,h,u,r),i++,r=0,s=[],o=[],l=[],c=[],h=[],u=[])}),t}genFace(e,t,i,r,n,s,o,l,c,h){for(let u=2;u<h;u++)e.vertex.push(t.vertexPositions[i[0]]),e.vertex.push(t.vertexPositions[i[1]]),e.vertex.push(t.vertexPositions[i[2]]),e.vertex.push(t.vertexPositions[i[(u-1)*3]]),e.vertex.push(t.vertexPositions[i[(u-1)*3+1]]),e.vertex.push(t.vertexPositions[i[(u-1)*3+2]]),e.vertex.push(t.vertexPositions[i[u*3]]),e.vertex.push(t.vertexPositions[i[u*3+1]]),e.vertex.push(t.vertexPositions[i[u*3+2]]),t.skeleton&&(e.vertexWeights.push(l[0]),e.vertexWeights.push(l[1]),e.vertexWeights.push(l[2]),e.vertexWeights.push(l[3]),e.vertexWeights.push(l[(u-1)*4]),e.vertexWeights.push(l[(u-1)*4+1]),e.vertexWeights.push(l[(u-1)*4+2]),e.vertexWeights.push(l[(u-1)*4+3]),e.vertexWeights.push(l[u*4]),e.vertexWeights.push(l[u*4+1]),e.vertexWeights.push(l[u*4+2]),e.vertexWeights.push(l[u*4+3]),e.weightsIndices.push(c[0]),e.weightsIndices.push(c[1]),e.weightsIndices.push(c[2]),e.weightsIndices.push(c[3]),e.weightsIndices.push(c[(u-1)*4]),e.weightsIndices.push(c[(u-1)*4+1]),e.weightsIndices.push(c[(u-1)*4+2]),e.weightsIndices.push(c[(u-1)*4+3]),e.weightsIndices.push(c[u*4]),e.weightsIndices.push(c[u*4+1]),e.weightsIndices.push(c[u*4+2]),e.weightsIndices.push(c[u*4+3])),t.color&&(e.colors.push(s[0]),e.colors.push(s[1]),e.colors.push(s[2]),e.colors.push(s[(u-1)*3]),e.colors.push(s[(u-1)*3+1]),e.colors.push(s[(u-1)*3+2]),e.colors.push(s[u*3]),e.colors.push(s[u*3+1]),e.colors.push(s[u*3+2])),t.material&&t.material.mappingType!=="AllSame"&&(e.materialIndex.push(r),e.materialIndex.push(r),e.materialIndex.push(r)),t.normal&&(e.normal.push(n[0]),e.normal.push(n[1]),e.normal.push(n[2]),e.normal.push(n[(u-1)*3]),e.normal.push(n[(u-1)*3+1]),e.normal.push(n[(u-1)*3+2]),e.normal.push(n[u*3]),e.normal.push(n[u*3+1]),e.normal.push(n[u*3+2])),t.uv&&t.uv.forEach(function(d,p){e.uvs[p]===void 0&&(e.uvs[p]=[]),e.uvs[p].push(o[p][0]),e.uvs[p].push(o[p][1]),e.uvs[p].push(o[p][(u-1)*2]),e.uvs[p].push(o[p][(u-1)*2+1]),e.uvs[p].push(o[p][u*2]),e.uvs[p].push(o[p][u*2+1])})}addMorphTargets(e,t,i,r){if(i.length===0)return;e.morphTargetsRelative=!0,e.morphAttributes.position=[];const n=this;i.forEach(function(s){s.rawTargets.forEach(function(o){const l=Ce.Objects.Geometry[o.geoID];l!==void 0&&n.genMorphGeometry(e,t,l,r,o.name)})})}genMorphGeometry(e,t,i,r,n){const s=t.PolygonVertexIndex!==void 0?t.PolygonVertexIndex.a:[],o=i.Vertices!==void 0?i.Vertices.a:[],l=i.Indexes!==void 0?i.Indexes.a:[],c=e.attributes.position.count*3,h=new Float32Array(c);for(let m=0;m<l.length;m++){const v=l[m]*3;h[v]=o[m*3],h[v+1]=o[m*3+1],h[v+2]=o[m*3+2]}const u={vertexIndices:s,vertexPositions:h},d=this.genBuffers(u),p=new be(d.vertex,3);p.name=n||i.attrName,p.applyMatrix4(r),e.morphAttributes.position.push(p)}parseNormals(e){const t=e.MappingInformationType,i=e.ReferenceInformationType,r=e.Normals.a;let n=[];return i==="IndexToDirect"&&("NormalIndex"in e?n=e.NormalIndex.a:"NormalsIndex"in e&&(n=e.NormalsIndex.a)),{dataSize:3,buffer:r,indices:n,mappingType:t,referenceType:i}}parseUVs(e){const t=e.MappingInformationType,i=e.ReferenceInformationType,r=e.UV.a;let n=[];return i==="IndexToDirect"&&(n=e.UVIndex.a),{dataSize:2,buffer:r,indices:n,mappingType:t,referenceType:i}}parseVertexColors(e){const t=e.MappingInformationType,i=e.ReferenceInformationType,r=e.Colors.a;let n=[];return i==="IndexToDirect"&&(n=e.ColorIndex.a),{dataSize:4,buffer:r,indices:n,mappingType:t,referenceType:i}}parseMaterialIndices(e){const t=e.MappingInformationType,i=e.ReferenceInformationType;if(t==="NoMappingInformation")return{dataSize:1,buffer:[0],indices:[0],mappingType:"AllSame",referenceType:i};const r=e.Materials.a,n=[];for(let s=0;s<r.length;++s)n.push(s);return{dataSize:1,buffer:r,indices:n,mappingType:t,referenceType:i}}parseNurbsGeometry(e){if(vd===void 0)return console.error("THREE.FBXLoader: The loader relies on NURBSCurve for any nurbs present in the model. Nurbs will show up as empty geometry."),new Fe;const t=parseInt(e.Order);if(isNaN(t))return console.error("THREE.FBXLoader: Invalid Order %s given for geometry ID: %s",e.Order,e.id),new Fe;const i=t-1,r=e.KnotVector.a,n=[],s=e.Points.a;for(let d=0,p=s.length;d<p;d+=4)n.push(new Ue().fromArray(s,d));let o,l;if(e.Form==="Closed")n.push(n[0]);else if(e.Form==="Periodic"){o=i,l=r.length-1-o;for(let d=0;d<i;++d)n.push(n[d])}const c=new vd(i,r,n,o,l).getPoints(n.length*7),h=new Float32Array(c.length*3);c.forEach(function(d,p){d.toArray(h,p*3)});const u=new Fe;return u.setAttribute("position",new Ke(h,3)),u}}class xy{parse(){const e=[],t=this.parseClips();if(t!==void 0)for(const i in t){const r=t[i],n=this.addClip(r);e.push(n)}return e}parseClips(){if(Ce.Objects.AnimationCurve===void 0)return;const e=this.parseAnimationCurveNodes();this.parseAnimationCurves(e);const t=this.parseAnimationLayers(e);return this.parseAnimStacks(t)}parseAnimationCurveNodes(){const e=Ce.Objects.AnimationCurveNode,t=new Map;for(const i in e){const r=e[i];if(r.attrName.match(/S|R|T|DeformPercent/)!==null){const n={id:r.id,attr:r.attrName,curves:{}};t.set(n.id,n)}}return t}parseAnimationCurves(e){const t=Ce.Objects.AnimationCurve;for(const i in t){const r={id:t[i].id,times:t[i].KeyTime.a.map(My),values:t[i].KeyValueFloat.a},n=it.get(r.id);if(n!==void 0){const s=n.parents[0].ID,o=n.parents[0].relationship;o.match(/X/)?e.get(s).curves.x=r:o.match(/Y/)?e.get(s).curves.y=r:o.match(/Z/)?e.get(s).curves.z=r:o.match(/d|DeformPercent/)&&e.has(s)&&(e.get(s).curves.morph=r)}}}parseAnimationLayers(e){const t=Ce.Objects.AnimationLayer,i=new Map;for(const r in t){const n=[],s=it.get(parseInt(r));s!==void 0&&(s.children.forEach(function(o,l){if(e.has(o.ID)){const c=e.get(o.ID);if(c.curves.x!==void 0||c.curves.y!==void 0||c.curves.z!==void 0){if(n[l]===void 0){const h=it.get(o.ID).parents.filter(function(u){return u.relationship!==void 0})[0].ID;if(h!==void 0){const u=Ce.Objects.Model[h.toString()];if(u===void 0){console.warn("THREE.FBXLoader: Encountered a unused curve.",o);return}const d={modelName:u.attrName?ze.sanitizeNodeName(u.attrName):"",ID:u.id,initialPosition:[0,0,0],initialRotation:[0,0,0],initialScale:[1,1,1]};At.traverse(function(p){p.ID===u.id&&(d.transform=p.matrix,p.userData.transformData&&(d.eulerOrder=p.userData.transformData.eulerOrder))}),d.transform||(d.transform=new ee),"PreRotation"in u&&(d.preRotation=u.PreRotation.value),"PostRotation"in u&&(d.postRotation=u.PostRotation.value),n[l]=d}}n[l]&&(n[l][c.attr]=c)}else if(c.curves.morph!==void 0){if(n[l]===void 0){const h=it.get(o.ID).parents.filter(function(_){return _.relationship!==void 0})[0].ID,u=it.get(h).parents[0].ID,d=it.get(u).parents[0].ID,p=it.get(d).parents[0].ID,m=Ce.Objects.Model[p],v={modelName:m.attrName?ze.sanitizeNodeName(m.attrName):"",morphName:Ce.Objects.Deformer[h].attrName};n[l]=v}n[l][c.attr]=c}}}),i.set(parseInt(r),n))}return i}parseAnimStacks(e){const t=Ce.Objects.AnimationStack,i={};for(const r in t){const n=it.get(parseInt(r)).children;n.length>1&&console.warn("THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers.");const s=e.get(n[0].ID);i[r]={name:t[r].attrName,layer:s}}return i}addClip(e){let t=[];const i=this;return e.layer.forEach(function(r){t=t.concat(i.generateTracks(r))}),new Qn(e.name,-1,t)}generateTracks(e){const t=[];let i=new b,r=new Ge,n=new b;if(e.transform&&e.transform.decompose(i,r,n),i=i.toArray(),r=new zt().setFromQuaternion(r,e.eulerOrder).toArray(),n=n.toArray(),e.T!==void 0&&Object.keys(e.T.curves).length>0){const s=this.generateVectorTrack(e.modelName,e.T.curves,i,"position");s!==void 0&&t.push(s)}if(e.R!==void 0&&Object.keys(e.R.curves).length>0){const s=this.generateRotationTrack(e.modelName,e.R.curves,r,e.preRotation,e.postRotation,e.eulerOrder);s!==void 0&&t.push(s)}if(e.S!==void 0&&Object.keys(e.S.curves).length>0){const s=this.generateVectorTrack(e.modelName,e.S.curves,n,"scale");s!==void 0&&t.push(s)}if(e.DeformPercent!==void 0){const s=this.generateMorphTrack(e);s!==void 0&&t.push(s)}return t}generateVectorTrack(e,t,i,r){const n=this.getTimesForAllAxes(t),s=this.getKeyframeTrackValues(n,t,i);return new rr(e+"."+r,n,s)}generateRotationTrack(e,t,i,r,n,s){t.x!==void 0&&(this.interpolateRotations(t.x),t.x.values=t.x.values.map(Yt.degToRad)),t.y!==void 0&&(this.interpolateRotations(t.y),t.y.values=t.y.values.map(Yt.degToRad)),t.z!==void 0&&(this.interpolateRotations(t.z),t.z.values=t.z.values.map(Yt.degToRad));const o=this.getTimesForAllAxes(t),l=this.getKeyframeTrackValues(o,t,i);r!==void 0&&(r=r.map(Yt.degToRad),r.push(s),r=new zt().fromArray(r),r=new Ge().setFromEuler(r)),n!==void 0&&(n=n.map(Yt.degToRad),n.push(s),n=new zt().fromArray(n),n=new Ge().setFromEuler(n).invert());const c=new Ge,h=new zt,u=[];for(let d=0;d<l.length;d+=3)h.set(l[d],l[d+1],l[d+2],s),c.setFromEuler(h),r!==void 0&&c.premultiply(r),n!==void 0&&c.multiply(n),c.toArray(u,d/3*4);return new Ui(e+".quaternion",o,u)}generateMorphTrack(e){const t=e.DeformPercent.curves.morph,i=t.values.map(function(n){return n/100}),r=At.getObjectByName(e.modelName).morphTargetDictionary[e.morphName];return new jr(e.modelName+".morphTargetInfluences["+r+"]",t.times,i)}getTimesForAllAxes(e){let t=[];if(e.x!==void 0&&(t=t.concat(e.x.times)),e.y!==void 0&&(t=t.concat(e.y.times)),e.z!==void 0&&(t=t.concat(e.z.times)),t=t.sort(function(i,r){return i-r}),t.length>1){let i=1,r=t[0];for(let n=1;n<t.length;n++){const s=t[n];s!==r&&(t[i]=s,r=s,i++)}t=t.slice(0,i)}return t}getKeyframeTrackValues(e,t,i){const r=i,n=[];let s=-1,o=-1,l=-1;return e.forEach(function(c){if(t.x&&(s=t.x.times.indexOf(c)),t.y&&(o=t.y.times.indexOf(c)),t.z&&(l=t.z.times.indexOf(c)),s!==-1){const h=t.x.values[s];n.push(h),r[0]=h}else n.push(r[0]);if(o!==-1){const h=t.y.values[o];n.push(h),r[1]=h}else n.push(r[1]);if(l!==-1){const h=t.z.values[l];n.push(h),r[2]=h}else n.push(r[2])}),n}interpolateRotations(e){for(let t=1;t<e.values.length;t++){const i=e.values[t-1],r=e.values[t]-i,n=Math.abs(r);if(n>=180){const s=n/180,o=r/s;let l=i+o;const c=e.times[t-1],h=(e.times[t]-c)/s;let u=c+h;const d=[],p=[];for(;u<e.times[t];)d.push(u),u+=h,p.push(l),l+=o;e.times=Md(e.times,t,d),e.values=Md(e.values,t,p)}}}}class yy{getPrevNode(){return this.nodeStack[this.currentIndent-2]}getCurrentNode(){return this.nodeStack[this.currentIndent-1]}getCurrentProp(){return this.currentProp}pushStack(e){this.nodeStack.push(e),this.currentIndent+=1}popStack(){this.nodeStack.pop(),this.currentIndent-=1}setCurrentProp(e,t){this.currentProp=e,this.currentPropName=t}parse(e){this.currentIndent=0,this.allNodes=new xd,this.nodeStack=[],this.currentProp=[],this.currentPropName="";const t=this,i=e.split(/[\r\n]+/);return i.forEach(function(r,n){const s=r.match(/^[\s\t]*;/),o=r.match(/^[\s\t]*$/);if(s||o)return;const l=r.match("^\\t{"+t.currentIndent+"}(\\w+):(.*){",""),c=r.match("^\\t{"+t.currentIndent+"}(\\w+):[\\s\\t\\r\\n](.*)"),h=r.match("^\\t{"+(t.currentIndent-1)+"}}");l?t.parseNodeBegin(r,l):c?t.parseNodeProperty(r,c,i[++n]):h?t.popStack():r.match(/^[^\s\t}]/)&&t.parseNodePropertyContinued(r)}),this.allNodes}parseNodeBegin(e,t){const i=t[1].trim().replace(/^"/,"").replace(/"$/,""),r=t[2].split(",").map(function(l){return l.trim().replace(/^"/,"").replace(/"$/,"")}),n={name:i},s=this.parseNodeAttr(r),o=this.getCurrentNode();this.currentIndent===0?this.allNodes.add(i,n):i in o?(i==="PoseNode"?o.PoseNode.push(n):o[i].id!==void 0&&(o[i]={},o[i][o[i].id]=o[i]),s.id!==""&&(o[i][s.id]=n)):typeof s.id=="number"?(o[i]={},o[i][s.id]=n):i!=="Properties70"&&(i==="PoseNode"?o[i]=[n]:o[i]=n),typeof s.id=="number"&&(n.id=s.id),s.name!==""&&(n.attrName=s.name),s.type!==""&&(n.attrType=s.type),this.pushStack(n)}parseNodeAttr(e){let t=e[0];e[0]!==""&&(t=parseInt(e[0]),isNaN(t)&&(t=e[0]));let i="",r="";return e.length>1&&(i=e[1].replace(/^(\w+)::/,""),r=e[2]),{id:t,name:i,type:r}}parseNodeProperty(e,t,i){let r=t[1].replace(/^"/,"").replace(/"$/,"").trim(),n=t[2].replace(/^"/,"").replace(/"$/,"").trim();r==="Content"&&n===","&&(n=i.replace(/"/g,"").replace(/,$/,"").trim());const s=this.getCurrentNode();if(s.name==="Properties70"){this.parseNodeSpecialProperty(e,r,n);return}if(r==="C"){const o=n.split(",").slice(1),l=parseInt(o[0]),c=parseInt(o[1]);let h=n.split(",").slice(3);h=h.map(function(u){return u.trim().replace(/^"/,"")}),r="connections",n=[l,c],Ay(n,h),s[r]===void 0&&(s[r]=[])}r==="Node"&&(s.id=n),r in s&&Array.isArray(s[r])?s[r].push(n):r!=="a"?s[r]=n:s.a=n,this.setCurrentProp(s,r),r==="a"&&n.slice(-1)!==","&&(s.a=El(n))}parseNodePropertyContinued(e){const t=this.getCurrentNode();t.a+=e,e.slice(-1)!==","&&(t.a=El(t.a))}parseNodeSpecialProperty(e,t,i){const r=i.split('",').map(function(h){return h.trim().replace(/^\"/,"").replace(/\s/,"_")}),n=r[0],s=r[1],o=r[2],l=r[3];let c=r[4];switch(s){case"int":case"enum":case"bool":case"ULongLong":case"double":case"Number":case"FieldOfView":c=parseFloat(c);break;case"Color":case"ColorRGB":case"Vector3D":case"Lcl_Translation":case"Lcl_Rotation":case"Lcl_Scaling":c=El(c);break}this.getPrevNode()[n]={type:s,type2:o,flag:l,value:c},this.setCurrentProp(this.getPrevNode(),n)}}class wy{parse(e){const t=new _d(e);t.skip(23);const i=t.getUint32();if(i<6400)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+i);const r=new xd;for(;!this.endOfContent(t);){const n=this.parseNode(t,i);n!==null&&r.add(n.name,n)}return r}endOfContent(e){return e.size()%16===0?(e.getOffset()+160+16&-16)>=e.size():e.getOffset()+160+16>=e.size()}parseNode(e,t){const i={},r=t>=7500?e.getUint64():e.getUint32(),n=t>=7500?e.getUint64():e.getUint32();t>=7500?e.getUint64():e.getUint32();const s=e.getUint8(),o=e.getString(s);if(r===0)return null;const l=[];for(let d=0;d<n;d++)l.push(this.parseProperty(e));const c=l.length>0?l[0]:"",h=l.length>1?l[1]:"",u=l.length>2?l[2]:"";for(i.singleProperty=n===1&&e.getOffset()===r;r>e.getOffset();){const d=this.parseNode(e,t);d!==null&&this.parseSubNode(o,i,d)}return i.propertyList=l,typeof c=="number"&&(i.id=c),h!==""&&(i.attrName=h),u!==""&&(i.attrType=u),o!==""&&(i.name=o),i}parseSubNode(e,t,i){if(i.singleProperty===!0){const r=i.propertyList[0];Array.isArray(r)?(t[i.name]=i,i.a=r):t[i.name]=r}else if(e==="Connections"&&i.name==="C"){const r=[];i.propertyList.forEach(function(n,s){s!==0&&r.push(n)}),t.connections===void 0&&(t.connections=[]),t.connections.push(r)}else if(i.name==="Properties70")Object.keys(i).forEach(function(r){t[r]=i[r]});else if(e==="Properties70"&&i.name==="P"){let r=i.propertyList[0],n=i.propertyList[1];const s=i.propertyList[2],o=i.propertyList[3];let l;r.indexOf("Lcl ")===0&&(r=r.replace("Lcl ","Lcl_")),n.indexOf("Lcl ")===0&&(n=n.replace("Lcl ","Lcl_")),n==="Color"||n==="ColorRGB"||n==="Vector"||n==="Vector3D"||n.indexOf("Lcl_")===0?l=[i.propertyList[4],i.propertyList[5],i.propertyList[6]]:l=i.propertyList[4],t[r]={type:n,type2:s,flag:o,value:l}}else t[i.name]===void 0?typeof i.id=="number"?(t[i.name]={},t[i.name][i.id]=i):t[i.name]=i:i.name==="PoseNode"?(Array.isArray(t[i.name])||(t[i.name]=[t[i.name]]),t[i.name].push(i)):t[i.name][i.id]===void 0&&(t[i.name][i.id]=i)}parseProperty(e){const t=e.getString(1);let i;switch(t){case"C":return e.getBoolean();case"D":return e.getFloat64();case"F":return e.getFloat32();case"I":return e.getInt32();case"L":return e.getInt64();case"R":return i=e.getUint32(),e.getArrayBuffer(i);case"S":return i=e.getUint32(),e.getString(i);case"Y":return e.getInt16();case"b":case"c":case"d":case"f":case"i":case"l":const r=e.getUint32(),n=e.getUint32(),s=e.getUint32();if(n===0)switch(t){case"b":case"c":return e.getBooleanArray(r);case"d":return e.getFloat64Array(r);case"f":return e.getFloat32Array(r);case"i":return e.getInt32Array(r);case"l":return e.getInt64Array(r)}typeof my>"u"&&console.error("THREE.FBXLoader: External library fflate.min.js required.");const o=aa(new Uint8Array(e.getArrayBuffer(s))),l=new _d(o.buffer);switch(t){case"b":case"c":return l.getBooleanArray(r);case"d":return l.getFloat64Array(r);case"f":return l.getFloat32Array(r);case"i":return l.getInt32Array(r);case"l":return l.getInt64Array(r)}default:throw new Error("THREE.FBXLoader: Unknown property type "+t)}}}class _d{constructor(e,t){this.dv=new DataView(e),this.offset=0,this.littleEndian=t!==void 0?t:!0}getOffset(){return this.offset}size(){return this.dv.buffer.byteLength}skip(e){this.offset+=e}getBoolean(){return(this.getUint8()&1)===1}getBooleanArray(e){const t=[];for(let i=0;i<e;i++)t.push(this.getBoolean());return t}getUint8(){const e=this.dv.getUint8(this.offset);return this.offset+=1,e}getInt16(){const e=this.dv.getInt16(this.offset,this.littleEndian);return this.offset+=2,e}getInt32(){const e=this.dv.getInt32(this.offset,this.littleEndian);return this.offset+=4,e}getInt32Array(e){const t=[];for(let i=0;i<e;i++)t.push(this.getInt32());return t}getUint32(){const e=this.dv.getUint32(this.offset,this.littleEndian);return this.offset+=4,e}getInt64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t&2147483648?(t=~t&4294967295,e=~e&4294967295,e===4294967295&&(t=t+1&4294967295),e=e+1&4294967295,-(t*4294967296+e)):t*4294967296+e}getInt64Array(e){const t=[];for(let i=0;i<e;i++)t.push(this.getInt64());return t}getUint64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t*4294967296+e}getFloat32(){const e=this.dv.getFloat32(this.offset,this.littleEndian);return this.offset+=4,e}getFloat32Array(e){const t=[];for(let i=0;i<e;i++)t.push(this.getFloat32());return t}getFloat64(){const e=this.dv.getFloat64(this.offset,this.littleEndian);return this.offset+=8,e}getFloat64Array(e){const t=[];for(let i=0;i<e;i++)t.push(this.getFloat64());return t}getArrayBuffer(e){const t=this.dv.buffer.slice(this.offset,this.offset+e);return this.offset+=e,t}getString(e){let t=[];for(let r=0;r<e;r++)t[r]=this.getUint8();const i=t.indexOf(0);return i>=0&&(t=t.slice(0,i)),gi.decodeText(new Uint8Array(t))}}class xd{add(e,t){this[e]=t}}function by(a){const e="Kaydara FBX Binary  \0";return a.byteLength>=e.length&&e===Sd(a,0,e.length)}function Sy(a){const e=["K","a","y","d","a","r","a","\\","F","B","X","\\","B","i","n","a","r","y","\\","\\"];let t=0;function i(r){const n=a[r-1];return a=a.slice(t+r),t++,n}for(let r=0;r<e.length;++r)if(i(1)===e[r])return!1;return!0}function yd(a){const e=/FBXVersion: (\d+)/,t=a.match(e);if(t)return parseInt(t[1]);throw new Error("THREE.FBXLoader: Cannot find the version number for the file given.")}function My(a){return a/46186158e3}const Ty=[];function Ls(a,e,t,i){let r;switch(i.mappingType){case"ByPolygonVertex":r=a;break;case"ByPolygon":r=e;break;case"ByVertice":r=t;break;case"AllSame":r=i.indices[0];break;default:console.warn("THREE.FBXLoader: unknown attribute mapping type "+i.mappingType)}i.referenceType==="IndexToDirect"&&(r=i.indices[r]);const n=r*i.dataSize,s=n+i.dataSize;return Ey(Ty,i.buffer,n,s)}const Al=new zt,ln=new b;function wd(a){const e=new ee,t=new ee,i=new ee,r=new ee,n=new ee,s=new ee,o=new ee,l=new ee,c=new ee,h=new ee,u=new ee,d=new ee,p=a.inheritType?a.inheritType:0;if(a.translation&&e.setPosition(ln.fromArray(a.translation)),a.preRotation){const R=a.preRotation.map(Yt.degToRad);R.push(a.eulerOrder),t.makeRotationFromEuler(Al.fromArray(R))}if(a.rotation){const R=a.rotation.map(Yt.degToRad);R.push(a.eulerOrder),i.makeRotationFromEuler(Al.fromArray(R))}if(a.postRotation){const R=a.postRotation.map(Yt.degToRad);R.push(a.eulerOrder),r.makeRotationFromEuler(Al.fromArray(R)),r.invert()}a.scale&&n.scale(ln.fromArray(a.scale)),a.scalingOffset&&o.setPosition(ln.fromArray(a.scalingOffset)),a.scalingPivot&&s.setPosition(ln.fromArray(a.scalingPivot)),a.rotationOffset&&l.setPosition(ln.fromArray(a.rotationOffset)),a.rotationPivot&&c.setPosition(ln.fromArray(a.rotationPivot)),a.parentMatrixWorld&&(u.copy(a.parentMatrix),h.copy(a.parentMatrixWorld));const m=t.clone().multiply(i).multiply(r),v=new ee;v.extractRotation(h);const _=new ee;_.copyPosition(h);const g=_.clone().invert().multiply(h),f=v.clone().invert().multiply(g),x=n,S=new ee;if(p===0)S.copy(v).multiply(m).multiply(f).multiply(x);else if(p===1)S.copy(v).multiply(f).multiply(m).multiply(x);else{const R=new ee().scale(new b().setFromMatrixScale(u)).clone().invert(),z=f.clone().multiply(R);S.copy(v).multiply(m).multiply(z).multiply(x)}const w=c.clone().invert(),y=s.clone().invert();let M=e.clone().multiply(l).multiply(c).multiply(t).multiply(i).multiply(r).multiply(w).multiply(o).multiply(s).multiply(n).multiply(y);const L=new ee().copyPosition(M),N=h.clone().multiply(L);return d.copyPosition(N),M=d.clone().multiply(S),M.premultiply(h.invert()),M}function bd(a){a=a||0;const e=["ZYX","YZX","XZY","ZXY","YXZ","XYZ"];return a===6?(console.warn("THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect."),e[0]):e[a]}function El(a){return a.split(",").map(function(e){return parseFloat(e)})}function Sd(a,e,t){return e===void 0&&(e=0),t===void 0&&(t=a.byteLength),gi.decodeText(new Uint8Array(a,e,t))}function Ay(a,e){for(let t=0,i=a.length,r=e.length;t<r;t++,i++)a[i]=e[t]}function Ey(a,e,t,i){for(let r=t,n=0;r<i;r++,n++)a[n]=e[r];return a}function Md(a,e,t){return a.slice(0,e).concat(t).concat(a.slice(e))}class Ly extends ii{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Iy(t)}),this.register(function(t){return new Ny(t)}),this.register(function(t){return new Dy(t)}),this.register(function(t){return new Fy(t)}),this.register(function(t){return new Cy(t)}),this.register(function(t){return new Uy(t)})}load(e,t,i,r){const n=this;let s;this.resourcePath!==""?s=this.resourcePath:this.path!==""?s=this.path:s=gi.extractUrlBase(e),this.manager.itemStart(e);const o=function(c){r?r(c):console.error(c),n.manager.itemError(e),n.manager.itemEnd(e)},l=new us(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{n.parse(c,s,function(h){t(h),n.manager.itemEnd(e)},o)}catch(h){o(h)}},i,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,r){let n;const s={},o={};if(typeof e=="string")n=e;else if(gi.decodeText(new Uint8Array(e,0,4))===Td){try{s[He.KHR_BINARY_GLTF]=new Oy(e)}catch(h){r&&r(h);return}n=s[He.KHR_BINARY_GLTF].content}else n=gi.decodeText(new Uint8Array(e));const l=JSON.parse(n);if(l.asset===void 0||l.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new Yy(l,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);o[u.name]=u,s[u.name]=!0}if(l.extensionsUsed)for(let h=0;h<l.extensionsUsed.length;++h){const u=l.extensionsUsed[h],d=l.extensionsRequired||[];switch(u){case He.KHR_MATERIALS_UNLIT:s[u]=new Ry;break;case He.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:s[u]=new Hy;break;case He.KHR_DRACO_MESH_COMPRESSION:s[u]=new By(l,this.dracoLoader);break;case He.KHR_TEXTURE_TRANSFORM:s[u]=new zy;break;case He.KHR_MESH_QUANTIZATION:s[u]=new ky;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(s),c.setPlugins(o),c.parse(i,r)}}function Py(){let a={};return{get:function(e){return a[e]},add:function(e,t){a[e]=t},remove:function(e){delete a[e]},removeAll:function(){a={}}}}const He={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:"KHR_materials_pbrSpecularGlossiness",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression"};class Cy{constructor(e){this.parser=e,this.name=He.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,r=t.length;i<r;i++){const n=t[i];n.extensions&&n.extensions[this.name]&&n.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,n.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let r=t.cache.get(i);if(r)return r;const n=t.json,s=((n.extensions&&n.extensions[this.name]||{}).lights||[])[e];let o;const l=new Z(16777215);s.color!==void 0&&l.fromArray(s.color);const c=s.range!==void 0?s.range:0;switch(s.type){case"directional":o=new ps(l),o.target.position.set(0,0,-1),o.add(o.target);break;case"point":o=new ds(l),o.distance=c;break;case"spot":o=new Yo(l),o.distance=c,s.spot=s.spot||{},s.spot.innerConeAngle=s.spot.innerConeAngle!==void 0?s.spot.innerConeAngle:0,s.spot.outerConeAngle=s.spot.outerConeAngle!==void 0?s.spot.outerConeAngle:Math.PI/4,o.angle=s.spot.outerConeAngle,o.penumbra=1-s.spot.innerConeAngle/s.spot.outerConeAngle,o.target.position.set(0,0,-1),o.add(o.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+s.type)}return o.position.set(0,0,0),o.decay=2,s.intensity!==void 0&&(o.intensity=s.intensity),o.name=t.createUniqueName(s.name||"light_"+e),r=Promise.resolve(o),t.cache.add(i,r),r}createNodeAttachment(e){const t=this,i=this.parser,r=i.json.nodes[e],n=(r.extensions&&r.extensions[this.name]||{}).light;return n===void 0?null:this._loadLight(n).then(function(s){return i._getNodeRef(t.cache,n,s)})}}class Ry{constructor(){this.name=He.KHR_MATERIALS_UNLIT}getMaterialType(){return Zt}extendParams(e,t,i){const r=[];e.color=new Z(1,1,1),e.opacity=1;const n=t.pbrMetallicRoughness;if(n){if(Array.isArray(n.baseColorFactor)){const s=n.baseColorFactor;e.color.fromArray(s),e.opacity=s[3]}n.baseColorTexture!==void 0&&r.push(i.assignTexture(e,"map",n.baseColorTexture))}return Promise.all(r)}}class Iy{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Vo}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const n=[],s=r.extensions[this.name];if(s.clearcoatFactor!==void 0&&(t.clearcoat=s.clearcoatFactor),s.clearcoatTexture!==void 0&&n.push(i.assignTexture(t,"clearcoatMap",s.clearcoatTexture)),s.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=s.clearcoatRoughnessFactor),s.clearcoatRoughnessTexture!==void 0&&n.push(i.assignTexture(t,"clearcoatRoughnessMap",s.clearcoatRoughnessTexture)),s.clearcoatNormalTexture!==void 0&&(n.push(i.assignTexture(t,"clearcoatNormalMap",s.clearcoatNormalTexture)),s.clearcoatNormalTexture.scale!==void 0)){const o=s.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new X(o,-o)}return Promise.all(n)}}class Fy{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Vo}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const n=[],s=r.extensions[this.name];return s.transmissionFactor!==void 0&&(t.transmission=s.transmissionFactor),s.transmissionTexture!==void 0&&n.push(i.assignTexture(t,"transmissionMap",s.transmissionTexture)),Promise.all(n)}}class Ny{constructor(e){this.parser=e,this.name=He.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,r=i.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const n=r.extensions[this.name],s=i.images[n.source],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s,o)}}class Dy{constructor(e){this.parser=e,this.name=He.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,r=i.json,n=r.textures[e];if(!n.extensions||!n.extensions[t])return null;const s=n.extensions[t],o=r.images[s.source];let l=i.textureLoader;if(o.uri){const c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Uy{constructor(e){this.name=He.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const r=i.extensions[this.name],n=this.parser.getDependency("buffer",r.buffer),s=this.parser.options.meshoptDecoder;if(!s||!s.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return Promise.all([n,s.ready]).then(function(o){const l=r.byteOffset||0,c=r.byteLength||0,h=r.count,u=r.byteStride,d=new ArrayBuffer(h*u),p=new Uint8Array(o[0],l,c);return s.decodeGltfBuffer(new Uint8Array(d),h,u,p,r.mode,r.filter),d})}else return null}}const Td="glTF",oa=12,Ad={JSON:1313821514,BIN:5130562};class Oy{constructor(e){this.name=He.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,oa);if(this.header={magic:gi.decodeText(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Td)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-oa,r=new DataView(e,oa);let n=0;for(;n<i;){const s=r.getUint32(n,!0);n+=4;const o=r.getUint32(n,!0);if(n+=4,o===Ad.JSON){const l=new Uint8Array(e,oa+n,s);this.content=gi.decodeText(l)}else if(o===Ad.BIN){const l=oa+n;this.body=e.slice(l,l+s)}n+=s}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class By{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=He.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,r=this.dracoLoader,n=e.extensions[this.name].bufferView,s=e.extensions[this.name].attributes,o={},l={},c={};for(const h in s){const u=Pl[h]||h.toLowerCase();o[u]=s[h]}for(const h in e.attributes){const u=Pl[h]||h.toLowerCase();if(s[h]!==void 0){const d=i.accessors[e.attributes[h]],p=la[d.componentType];c[u]=p,l[u]=d.normalized===!0}}return t.getDependency("bufferView",n).then(function(h){return new Promise(function(u){r.decodeDracoFile(h,function(d){for(const p in d.attributes){const m=d.attributes[p],v=l[p];v!==void 0&&(m.normalized=v)}u(d)},o,c)})})}}class zy{constructor(){this.name=He.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return t.texCoord!==void 0&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Ll extends ir{constructor(e){super(),this.isGLTFSpecularGlossinessMaterial=!0;const t=["#ifdef USE_SPECULARMAP","	uniform sampler2D specularMap;","#endif"].join(`
`),i=["#ifdef USE_GLOSSINESSMAP","	uniform sampler2D glossinessMap;","#endif"].join(`
`),r=["vec3 specularFactor = specular;","#ifdef USE_SPECULARMAP","	vec4 texelSpecular = texture2D( specularMap, vUv );","	texelSpecular = sRGBToLinear( texelSpecular );","	// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture","	specularFactor *= texelSpecular.rgb;","#endif"].join(`
`),n=["float glossinessFactor = glossiness;","#ifdef USE_GLOSSINESSMAP","	vec4 texelGlossiness = texture2D( glossinessMap, vUv );","	// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture","	glossinessFactor *= texelGlossiness.a;","#endif"].join(`
`),s=["PhysicalMaterial material;","material.diffuseColor = diffuseColor.rgb * ( 1. - max( specularFactor.r, max( specularFactor.g, specularFactor.b ) ) );","vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );","float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );","material.specularRoughness = max( 1.0 - glossinessFactor, 0.0525 ); // 0.0525 corresponds to the base mip of a 256 cubemap.","material.specularRoughness += geometryRoughness;","material.specularRoughness = min( material.specularRoughness, 1.0 );","material.specularColor = specularFactor;"].join(`
`),o={specular:{value:new Z().setHex(16777215)},glossiness:{value:1},specularMap:{value:null},glossinessMap:{value:null}};this._extraUniforms=o,this.onBeforeCompile=function(l){for(const c in o)l.uniforms[c]=o[c];l.fragmentShader=l.fragmentShader.replace("uniform float roughness;","uniform vec3 specular;").replace("uniform float metalness;","uniform float glossiness;").replace("#include <roughnessmap_pars_fragment>",t).replace("#include <metalnessmap_pars_fragment>",i).replace("#include <roughnessmap_fragment>",r).replace("#include <metalnessmap_fragment>",n).replace("#include <lights_physical_fragment>",s)},Object.defineProperties(this,{specular:{get:function(){return o.specular.value},set:function(l){o.specular.value=l}},specularMap:{get:function(){return o.specularMap.value},set:function(l){o.specularMap.value=l,l?this.defines.USE_SPECULARMAP="":delete this.defines.USE_SPECULARMAP}},glossiness:{get:function(){return o.glossiness.value},set:function(l){o.glossiness.value=l}},glossinessMap:{get:function(){return o.glossinessMap.value},set:function(l){o.glossinessMap.value=l,l?(this.defines.USE_GLOSSINESSMAP="",this.defines.USE_UV=""):(delete this.defines.USE_GLOSSINESSMAP,delete this.defines.USE_UV)}}}),delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this.setValues(e)}copy(e){return super.copy(e),this.specularMap=e.specularMap,this.specular.copy(e.specular),this.glossinessMap=e.glossinessMap,this.glossiness=e.glossiness,delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this}}class Hy{constructor(){this.name=He.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS,this.specularGlossinessParams=["color","map","lightMap","lightMapIntensity","aoMap","aoMapIntensity","emissive","emissiveIntensity","emissiveMap","bumpMap","bumpScale","normalMap","normalMapType","displacementMap","displacementScale","displacementBias","specularMap","specular","glossinessMap","glossiness","alphaMap","envMap","envMapIntensity","refractionRatio"]}getMaterialType(){return Ll}extendParams(e,t,i){const r=t.extensions[this.name];e.color=new Z(1,1,1),e.opacity=1;const n=[];if(Array.isArray(r.diffuseFactor)){const s=r.diffuseFactor;e.color.fromArray(s),e.opacity=s[3]}if(r.diffuseTexture!==void 0&&n.push(i.assignTexture(e,"map",r.diffuseTexture)),e.emissive=new Z(0,0,0),e.glossiness=r.glossinessFactor!==void 0?r.glossinessFactor:1,e.specular=new Z(1,1,1),Array.isArray(r.specularFactor)&&e.specular.fromArray(r.specularFactor),r.specularGlossinessTexture!==void 0){const s=r.specularGlossinessTexture;n.push(i.assignTexture(e,"glossinessMap",s)),n.push(i.assignTexture(e,"specularMap",s))}return Promise.all(n)}createMaterial(e){const t=new Ll(e);return t.fog=!0,t.color=e.color,t.map=e.map===void 0?null:e.map,t.lightMap=null,t.lightMapIntensity=1,t.aoMap=e.aoMap===void 0?null:e.aoMap,t.aoMapIntensity=1,t.emissive=e.emissive,t.emissiveIntensity=1,t.emissiveMap=e.emissiveMap===void 0?null:e.emissiveMap,t.bumpMap=e.bumpMap===void 0?null:e.bumpMap,t.bumpScale=1,t.normalMap=e.normalMap===void 0?null:e.normalMap,t.normalMapType=Ji,e.normalScale&&(t.normalScale=e.normalScale),t.displacementMap=null,t.displacementScale=1,t.displacementBias=0,t.specularMap=e.specularMap===void 0?null:e.specularMap,t.specular=e.specular,t.glossinessMap=e.glossinessMap===void 0?null:e.glossinessMap,t.glossiness=e.glossiness,t.alphaMap=null,t.envMap=e.envMap===void 0?null:e.envMap,t.envMapIntensity=1,t.refractionRatio=.98,t}}class ky{constructor(){this.name=He.KHR_MESH_QUANTIZATION}}class cn extends mi{constructor(e,t,i,r){super(e,t,i,r)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,n=e*r*3+r;for(let s=0;s!==r;s++)t[s]=i[n+s];return t}}cn.prototype.beforeStart_=cn.prototype.copySampleValue_,cn.prototype.afterEnd_=cn.prototype.copySampleValue_,cn.prototype.interpolate_=function(a,e,t,i){const r=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=s*2,l=s*3,c=i-e,h=(t-e)/c,u=h*h,d=u*h,p=a*l,m=p-l,v=-2*d+3*u,_=d-u,g=1-v,f=_-u+h;for(let x=0;x!==s;x++){const S=n[m+x+s],w=n[m+x+o]*c,y=n[p+x+s],M=n[p+x]*c;r[x]=g*S+f*w+v*y+_*M}return r};const yi={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},la={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Ed={9728:lt,9729:ut,9984:js,9985:vc,9986:Ys,9987:vr},Ld={33071:St,33648:wa,10497:at},Pd={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Pl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Gi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Gy={CUBICSPLINE:void 0,LINEAR:yr,STEP:Mn},Cl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Cd(a,e){return typeof a!="string"||a===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(a)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(a)||/^data:.*,.*$/i.test(a)||/^blob:.*$/i.test(a)?a:e+a)}function Vy(a){return a.DefaultMaterial===void 0&&(a.DefaultMaterial=new ir({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:fr})),a.DefaultMaterial}function ca(a,e,t){for(const i in t.extensions)a[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function ur(a,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(a.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Wy(a,e,t){let i=!1,r=!1;for(let o=0,l=e.length;o<l;o++){const c=e[o];if(c.POSITION!==void 0&&(i=!0),c.NORMAL!==void 0&&(r=!0),i&&r)break}if(!i&&!r)return Promise.resolve(a);const n=[],s=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];if(i){const h=c.POSITION!==void 0?t.getDependency("accessor",c.POSITION):a.attributes.position;n.push(h)}if(r){const h=c.NORMAL!==void 0?t.getDependency("accessor",c.NORMAL):a.attributes.normal;s.push(h)}}return Promise.all([Promise.all(n),Promise.all(s)]).then(function(o){const l=o[0],c=o[1];return i&&(a.morphAttributes.position=l),r&&(a.morphAttributes.normal=c),a.morphTargetsRelative=!0,a})}function Xy(a,e){if(a.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)a.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(a.morphTargetInfluences.length===t.length){a.morphTargetDictionary={};for(let i=0,r=t.length;i<r;i++)a.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function jy(a){const e=a.extensions&&a.extensions[He.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+Rd(e.attributes):t=a.indices+":"+Rd(a.attributes)+":"+a.mode,t}function Rd(a){let e="";const t=Object.keys(a).sort();for(let i=0,r=t.length;i<r;i++)e+=t[i]+":"+a[t[i]]+";";return e}function Rl(a){switch(a){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}class Yy{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Py,this.associations=new Map,this.primitiveCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.textureCache={},this.nodeNamesUsed={},typeof createImageBitmap<"u"&&/Firefox/.test(navigator.userAgent)===!1?this.textureLoader=new _u(this.options.manager):this.textureLoader=new nr(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new us(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,r=this.json,n=this.extensions;this.cache.removeAll(),this._invokeAll(function(s){return s._markDefs&&s._markDefs()}),Promise.all(this._invokeAll(function(s){return s.beforeRoot&&s.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(s){const o={scene:s[0][r.scene||0],scenes:s[0],animations:s[1],cameras:s[2],asset:r.asset,parser:i,userData:{}};ca(n,o,r),ur(o,r),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let r=0,n=t.length;r<n;r++){const s=t[r].joints;for(let o=0,l=s.length;o<l;o++)e[s[o]].isBone=!0}for(let r=0,n=e.length;r<n;r++){const s=e[r];s.mesh!==void 0&&(this._addNodeRef(this.meshCache,s.mesh),s.skin!==void 0&&(i[s.mesh].isSkinnedMesh=!0)),s.camera!==void 0&&this._addNodeRef(this.cameraCache,s.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const r=i.clone();return r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const r=e(t[i]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let r=0;r<t.length;r++){const n=e(t[r]);n&&i.push(n)}return i}getDependency(e,t){const i=e+":"+t;let r=this.cache.get(i);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this.loadNode(t);break;case"mesh":r=this._invokeOne(function(n){return n.loadMesh&&n.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(n){return n.loadBufferView&&n.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(n){return n.loadMaterial&&n.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(n){return n.loadTexture&&n.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this.loadAnimation(t);break;case"camera":r=this.loadCamera(t);break;default:throw new Error("Unknown type: "+e)}this.cache.add(i,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(n,s){return i.getDependency(e,s)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[He.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(n,s){i.load(Cd(t.uri,r.path),n,void 0,function(){s(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const r=t.byteLength||0,n=t.byteOffset||0;return i.slice(n,n+r)})}loadAccessor(e){const t=this,i=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0)return Promise.resolve(null);const n=[];return r.bufferView!==void 0?n.push(this.getDependency("bufferView",r.bufferView)):n.push(null),r.sparse!==void 0&&(n.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),n.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(n).then(function(s){const o=s[0],l=Pd[r.type],c=la[r.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=r.byteOffset||0,p=r.bufferView!==void 0?i.bufferViews[r.bufferView].byteStride:void 0,m=r.normalized===!0;let v,_;if(p&&p!==u){const g=Math.floor(d/p),f="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+g+":"+r.count;let x=t.cache.get(f);x||(v=new c(o,g*p,r.count*p/h),x=new zr(v,p/h),t.cache.add(f,x)),_=new dn(x,l,d%p/h,m)}else o===null?v=new c(r.count*l):v=new c(o,d,r.count*l),_=new Ke(v,l,m);if(r.sparse!==void 0){const g=Pd.SCALAR,f=la[r.sparse.indices.componentType],x=r.sparse.indices.byteOffset||0,S=r.sparse.values.byteOffset||0,w=new f(s[1],x,r.sparse.count*g),y=new c(s[2],S,r.sparse.count*l);o!==null&&(_=new Ke(_.array.slice(),_.itemSize,_.normalized));for(let M=0,L=w.length;M<L;M++){const N=w[M];if(_.setX(N,y[M*l]),l>=2&&_.setY(N,y[M*l+1]),l>=3&&_.setZ(N,y[M*l+2]),l>=4&&_.setW(N,y[M*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return _})}loadTexture(e){const t=this.json,i=this.options,r=t.textures[e],n=t.images[r.source];let s=this.textureLoader;if(n.uri){const o=i.manager.getHandler(n.uri);o!==null&&(s=o)}return this.loadTextureImage(e,n,s)}loadTextureImage(e,t,i){const r=this,n=this.json,s=this.options,o=n.textures[e],l=(t.uri||t.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=self.URL||self.webkitURL;let h=t.uri||"",u=!1,d=!0;const p=h.search(/\.jpe?g($|\?)/i)>0||h.search(/^data\:image\/jpeg/)===0;if((t.mimeType==="image/jpeg"||p)&&(d=!1),t.bufferView!==void 0)h=r.getDependency("bufferView",t.bufferView).then(function(v){if(t.mimeType==="image/png"){const g=new DataView(v,25,1).getUint8(0,!1);d=g===6||g===4||g===3}u=!0;const _=new Blob([v],{type:t.mimeType});return h=c.createObjectURL(_),h});else if(t.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const m=Promise.resolve(h).then(function(v){return new Promise(function(_,g){let f=_;i.isImageBitmapLoader===!0&&(f=function(x){const S=new st(x);S.needsUpdate=!0,_(S)}),i.load(Cd(v,s.path),f,void 0,g)})}).then(function(v){u===!0&&c.revokeObjectURL(h),v.flipY=!1,o.name&&(v.name=o.name),d||(v.format=Ti);const _=(n.samplers||{})[o.sampler]||{};return v.magFilter=Ed[_.magFilter]||ut,v.minFilter=Ed[_.minFilter]||vr,v.wrapS=Ld[_.wrapS]||at,v.wrapT=Ld[_.wrapT]||at,r.associations.set(v,{type:"textures",index:e}),v}).catch(function(){return console.error("THREE.GLTFLoader: Couldn't load texture",h),null});return this.textureCache[l]=m,m}assignTexture(e,t,i){const r=this;return this.getDependency("texture",i.index).then(function(n){if(i.texCoord!==void 0&&i.texCoord!=0&&!(t==="aoMap"&&i.texCoord==1)&&console.warn("THREE.GLTFLoader: Custom UV set "+i.texCoord+" for texture "+t+" not yet supported."),r.extensions[He.KHR_TEXTURE_TRANSFORM]){const s=i.extensions!==void 0?i.extensions[He.KHR_TEXTURE_TRANSFORM]:void 0;if(s){const o=r.associations.get(n);n=r.extensions[He.KHR_TEXTURE_TRANSFORM].extendTexture(n,s),r.associations.set(n,o)}}e[t]=n})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const r=t.attributes.tangent!==void 0,n=t.attributes.color!==void 0,s=t.attributes.normal===void 0,o=Object.keys(t.morphAttributes).length>0,l=o&&t.morphAttributes.normal!==void 0;if(e.isPoints){const c="PointsMaterial:"+i.uuid;let h=this.cache.get(c);h||(h=new Io,pt.prototype.copy.call(h,i),h.color.copy(i.color),h.map=i.map,h.sizeAttenuation=!1,this.cache.add(c,h)),i=h}else if(e.isLine){const c="LineBasicMaterial:"+i.uuid;let h=this.cache.get(c);h||(h=new tr,pt.prototype.copy.call(h,i),h.color.copy(i.color),this.cache.add(c,h)),i=h}if(r||n||s||o){let c="ClonedMaterial:"+i.uuid+":";i.isGLTFSpecularGlossinessMaterial&&(c+="specular-glossiness:"),r&&(c+="vertex-tangents:"),n&&(c+="vertex-colors:"),s&&(c+="flat-shading:"),o&&(c+="morph-targets:"),l&&(c+="morph-normals:");let h=this.cache.get(c);h||(h=i.clone(),n&&(h.vertexColors=!0),s&&(h.flatShading=!0),o&&(h.morphTargets=!0),l&&(h.morphNormals=!0),r&&(h.vertexTangents=!0,h.normalScale&&(h.normalScale.y*=-1),h.clearcoatNormalScale&&(h.clearcoatNormalScale.y*=-1)),this.cache.add(c,h),this.associations.set(h,this.associations.get(i))),i=h}i.aoMap&&t.attributes.uv2===void 0&&t.attributes.uv!==void 0&&t.setAttribute("uv2",t.attributes.uv),e.material=i}getMaterialType(){return ir}loadMaterial(e){const t=this,i=this.json,r=this.extensions,n=i.materials[e];let s;const o={},l=n.extensions||{},c=[];if(l[He.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS]){const u=r[He.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS];s=u.getMaterialType(),c.push(u.extendParams(o,n,t))}else if(l[He.KHR_MATERIALS_UNLIT]){const u=r[He.KHR_MATERIALS_UNLIT];s=u.getMaterialType(),c.push(u.extendParams(o,n,t))}else{const u=n.pbrMetallicRoughness||{};if(o.color=new Z(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;o.color.fromArray(d),o.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),s=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}n.doubleSided===!0&&(o.side=Mi);const h=n.alphaMode||Cl.OPAQUE;return h===Cl.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Cl.MASK&&(o.alphaTest=n.alphaCutoff!==void 0?n.alphaCutoff:.5)),n.normalTexture!==void 0&&s!==Zt&&(c.push(t.assignTexture(o,"normalMap",n.normalTexture)),o.normalScale=new X(1,-1),n.normalTexture.scale!==void 0&&o.normalScale.set(n.normalTexture.scale,-n.normalTexture.scale)),n.occlusionTexture!==void 0&&s!==Zt&&(c.push(t.assignTexture(o,"aoMap",n.occlusionTexture)),n.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=n.occlusionTexture.strength)),n.emissiveFactor!==void 0&&s!==Zt&&(o.emissive=new Z().fromArray(n.emissiveFactor)),n.emissiveTexture!==void 0&&s!==Zt&&c.push(t.assignTexture(o,"emissiveMap",n.emissiveTexture)),Promise.all(c).then(function(){let u;return s===Ll?u=r[He.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].createMaterial(o):u=new s(o),n.name&&(u.name=n.name),u.map&&(u.map.encoding=Rt),u.emissiveMap&&(u.emissiveMap.encoding=Rt),ur(u,n),t.associations.set(u,{type:"materials",index:e}),n.extensions&&ca(r,u,n),u})}createUniqueName(e){const t=ze.sanitizeNodeName(e||"");let i=t;for(let r=1;this.nodeNamesUsed[i];++r)i=t+"_"+r;return this.nodeNamesUsed[i]=!0,i}loadGeometries(e){const t=this,i=this.extensions,r=this.primitiveCache;function n(o){return i[He.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Fd(l,o,t)})}const s=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],h=jy(c),u=r[h];if(u)s.push(u.promise);else{let d;c.extensions&&c.extensions[He.KHR_DRACO_MESH_COMPRESSION]?d=n(c):d=Fd(new Fe,c,t),r[h]={primitive:c,promise:d},s.push(d)}}return Promise.all(s)}loadMesh(e){const t=this,i=this.json,r=this.extensions,n=i.meshes[e],s=n.primitives,o=[];for(let l=0,c=s.length;l<c;l++){const h=s[l].material===void 0?Vy(this.cache):this.getDependency("material",s[l].material);o.push(h)}return o.push(t.loadGeometries(s)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let p=0,m=h.length;p<m;p++){const v=h[p],_=s[p];let g;const f=c[p];if(_.mode===yi.TRIANGLES||_.mode===yi.TRIANGLE_STRIP||_.mode===yi.TRIANGLE_FAN||_.mode===void 0)g=n.isSkinnedMesh===!0?new Ka(v,f):new qe(v,f),g.isSkinnedMesh===!0&&!g.geometry.attributes.skinWeight.normalized&&g.normalizeSkinWeights(),_.mode===yi.TRIANGLE_STRIP?g.geometry=Nd(g.geometry,Ff):_.mode===yi.TRIANGLE_FAN&&(g.geometry=Nd(g.geometry,Pc));else if(_.mode===yi.LINES)g=new ts(v,f);else if(_.mode===yi.LINE_STRIP)g=new Gn(v,f);else if(_.mode===yi.LINE_LOOP)g=new kh(v,f);else if(_.mode===yi.POINTS)g=new Vh(v,f);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+_.mode);Object.keys(g.geometry.morphAttributes).length>0&&Xy(g,n),g.name=t.createUniqueName(n.name||"mesh_"+e),ur(g,n),_.extensions&&ca(r,g,_),t.assignFinalMaterial(g),u.push(g)}if(u.length===1)return u[0];const d=new ct;for(let p=0,m=u.length;p<m;p++)d.add(u[p]);return d})}loadCamera(e){let t;const i=this.json.cameras[e],r=i[i.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new _t(Yt.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):i.type==="orthographic"&&(t=new ar(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),ur(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i={joints:t.joints};return t.inverseBindMatrices===void 0?Promise.resolve(i):this.getDependency("accessor",t.inverseBindMatrices).then(function(r){return i.inverseBindMatrices=r,i})}loadAnimation(e){const t=this.json.animations[e],i=[],r=[],n=[],s=[],o=[];for(let l=0,c=t.channels.length;l<c;l++){const h=t.channels[l],u=t.samplers[h.sampler],d=h.target,p=d.node!==void 0?d.node:d.id,m=t.parameters!==void 0?t.parameters[u.input]:u.input,v=t.parameters!==void 0?t.parameters[u.output]:u.output;i.push(this.getDependency("node",p)),r.push(this.getDependency("accessor",m)),n.push(this.getDependency("accessor",v)),s.push(u),o.push(d)}return Promise.all([Promise.all(i),Promise.all(r),Promise.all(n),Promise.all(s),Promise.all(o)]).then(function(l){const c=l[0],h=l[1],u=l[2],d=l[3],p=l[4],m=[];for(let _=0,g=c.length;_<g;_++){const f=c[_],x=h[_],S=u[_],w=d[_],y=p[_];if(f===void 0)continue;f.updateMatrix(),f.matrixAutoUpdate=!0;let M;switch(Gi[y.path]){case Gi.weights:M=jr;break;case Gi.rotation:M=Ui;break;case Gi.position:case Gi.scale:default:M=rr;break}const L=f.name?f.name:f.uuid,N=w.interpolation!==void 0?Gy[w.interpolation]:yr,R=[];Gi[y.path]===Gi.weights?f.traverse(function(H){H.isMesh===!0&&H.morphTargetInfluences&&R.push(H.name?H.name:H.uuid)}):R.push(L);let z=S.array;if(S.normalized){const H=Rl(z.constructor),I=new Float32Array(z.length);for(let F=0,P=z.length;F<P;F++)I[F]=z[F]*H;z=I}for(let H=0,I=R.length;H<I;H++){const F=new M(R[H]+"."+Gi[y.path],x.array,z,N);w.interpolation==="CUBICSPLINE"&&(F.createInterpolant=function(P){return new cn(this.times,this.values,this.getValueSize()/3,P)},F.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),m.push(F)}}const v=t.name?t.name:"animation_"+e;return new Qn(v,void 0,m)})}createNodeMesh(e){const t=this.json,i=this,r=t.nodes[e];return r.mesh===void 0?null:i.getDependency("mesh",r.mesh).then(function(n){const s=i._getNodeRef(i.meshCache,r.mesh,n);return r.weights!==void 0&&s.traverse(function(o){if(o.isMesh)for(let l=0,c=r.weights.length;l<c;l++)o.morphTargetInfluences[l]=r.weights[l]}),s})}loadNode(e){const t=this.json,i=this.extensions,r=this,n=t.nodes[e],s=n.name?r.createUniqueName(n.name):"";return function(){const o=[],l=r._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),n.camera!==void 0&&o.push(r.getDependency("camera",n.camera).then(function(c){return r._getNodeRef(r.cameraCache,n.camera,c)})),r._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),Promise.all(o)}().then(function(o){let l;if(n.isBone===!0?l=new Hn:o.length>1?l=new ct:o.length===1?l=o[0]:l=new Ie,l!==o[0])for(let c=0,h=o.length;c<h;c++)l.add(o[c]);if(n.name&&(l.userData.name=n.name,l.name=s),ur(l,n),n.extensions&&ca(i,l,n),n.matrix!==void 0){const c=new ee;c.fromArray(n.matrix),l.applyMatrix4(c)}else n.translation!==void 0&&l.position.fromArray(n.translation),n.rotation!==void 0&&l.quaternion.fromArray(n.rotation),n.scale!==void 0&&l.scale.fromArray(n.scale);return r.associations.set(l,{type:"nodes",index:e}),l})}loadScene(e){const t=this.json,i=this.extensions,r=this.json.scenes[e],n=this,s=new ct;r.name&&(s.name=n.createUniqueName(r.name)),ur(s,r),r.extensions&&ca(i,s,r);const o=r.nodes||[],l=[];for(let c=0,h=o.length;c<h;c++)l.push(Id(o[c],s,t,n));return Promise.all(l).then(function(){return s})}}function Id(a,e,t,i){const r=t.nodes[a];return i.getDependency("node",a).then(function(n){if(r.skin===void 0)return n;let s;return i.getDependency("skin",r.skin).then(function(o){s=o;const l=[];for(let c=0,h=s.joints.length;c<h;c++)l.push(i.getDependency("node",s.joints[c]));return Promise.all(l)}).then(function(o){return n.traverse(function(l){if(!l.isMesh)return;const c=[],h=[];for(let u=0,d=o.length;u<d;u++){const p=o[u];if(p){c.push(p);const m=new ee;s.inverseBindMatrices!==void 0&&m.fromArray(s.inverseBindMatrices.array,u*16),h.push(m)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',s.joints[u])}l.bind(new Ds(c,h),l.matrixWorld)}),n})}).then(function(n){e.add(n);const s=[];if(r.children){const o=r.children;for(let l=0,c=o.length;l<c;l++){const h=o[l];s.push(Id(h,n,t,i))}}return Promise.all(s)})}function Qy(a,e,t){const i=e.attributes,r=new Dt;if(i.POSITION!==void 0){const o=t.json.accessors[i.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(r.set(new b(l[0],l[1],l[2]),new b(c[0],c[1],c[2])),o.normalized){const h=Rl(la[o.componentType]);r.min.multiplyScalar(h),r.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const n=e.targets;if(n!==void 0){const o=new b,l=new b;for(let c=0,h=n.length;c<h;c++){const u=n[c];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],p=d.min,m=d.max;if(p!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(m[2]))),d.normalized){const v=Rl(la[d.componentType]);l.multiplyScalar(v)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(o)}a.boundingBox=r;const s=new Li;r.getCenter(s.center),s.radius=r.min.distanceTo(r.max)/2,a.boundingSphere=s}function Fd(a,e,t){const i=e.attributes,r=[];function n(s,o){return t.getDependency("accessor",s).then(function(l){a.setAttribute(o,l)})}for(const s in i){const o=Pl[s]||s.toLowerCase();o in a.attributes||r.push(n(i[s],o))}if(e.indices!==void 0&&!a.index){const s=t.getDependency("accessor",e.indices).then(function(o){a.setIndex(o)});r.push(s)}return ur(a,e),Qy(a,e,t),Promise.all(r).then(function(){return e.targets!==void 0?Wy(a,e.targets,t):a})}function Nd(a,e){let t=a.getIndex();if(t===null){const s=[],o=a.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)s.push(l);a.setIndex(s),t=a.getIndex()}else return console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),a}const i=t.count-2,r=[];if(e===Pc)for(let s=1;s<=i;s++)r.push(t.getX(0)),r.push(t.getX(s)),r.push(t.getX(s+1));else for(let s=0;s<i;s++)s%2===0?(r.push(t.getX(s)),r.push(t.getX(s+1)),r.push(t.getX(s+2))):(r.push(t.getX(s+2)),r.push(t.getX(s+1)),r.push(t.getX(s)));r.length/3!==i&&console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const n=a.clone();return n.setIndex(r),n}class Ps{static retarget(e,t,i={}){const r=new b,n=new Ge,s=new b,o=new ee,l=new ee,c=new ee;i.preserveMatrix=i.preserveMatrix!==void 0?i.preserveMatrix:!0,i.preservePosition=i.preservePosition!==void 0?i.preservePosition:!0,i.preserveHipPosition=i.preserveHipPosition!==void 0?i.preserveHipPosition:!1,i.useTargetMatrix=i.useTargetMatrix!==void 0?i.useTargetMatrix:!1,i.hip=i.hip!==void 0?i.hip:"hip",i.names=i.names||{};const h=t.isObject3D?t.skeleton.bones:this.getBones(t),u=e.isObject3D?e.skeleton.bones:this.getBones(e);let d,p,m,v,_;if(e.isObject3D?e.skeleton.pose():(i.useTargetMatrix=!0,i.preserveMatrix=!1),i.preservePosition){_=[];for(let g=0;g<u.length;g++)_.push(u[g].position.clone())}if(i.preserveMatrix){e.updateMatrixWorld(),e.matrixWorld.identity();for(let g=0;g<e.children.length;++g)e.children[g].updateMatrixWorld(!0)}if(i.offsets){d=[];for(let g=0;g<u.length;++g)p=u[g],m=i.names[p.name]||p.name,i.offsets&&i.offsets[m]&&(p.matrix.multiply(i.offsets[m]),p.matrix.decompose(p.position,p.quaternion,p.scale),p.updateMatrixWorld()),d.push(p.matrixWorld.clone())}for(let g=0;g<u.length;++g){if(p=u[g],m=i.names[p.name]||p.name,v=this.getBoneByName(m,h),c.copy(p.matrixWorld),v){if(v.updateMatrixWorld(),i.useTargetMatrix?l.copy(v.matrixWorld):(l.copy(e.matrixWorld).invert(),l.multiply(v.matrixWorld)),s.setFromMatrixScale(l),l.scale(s.set(1/s.x,1/s.y,1/s.z)),c.makeRotationFromQuaternion(n.setFromRotationMatrix(l)),e.isObject3D){const f=u.indexOf(p),x=d?d[f]:o.copy(e.skeleton.boneInverses[f]).invert();c.multiply(x)}c.copyPosition(l)}p.parent&&p.parent.isBone?(p.matrix.copy(p.parent.matrixWorld).invert(),p.matrix.multiply(c)):p.matrix.copy(c),i.preserveHipPosition&&m===i.hip&&p.matrix.setPosition(r.set(0,p.position.y,0)),p.matrix.decompose(p.position,p.quaternion,p.scale),p.updateMatrixWorld()}if(i.preservePosition)for(let g=0;g<u.length;++g)p=u[g],m=i.names[p.name]||p.name,m!==i.hip&&p.position.copy(_[g]);i.preserveMatrix&&e.updateMatrixWorld(!0)}static retargetClip(e,t,i,r={}){r.useFirstFramePosition=r.useFirstFramePosition!==void 0?r.useFirstFramePosition:!1,r.fps=r.fps!==void 0?r.fps:30,r.names=r.names||[],t.isObject3D||(t=this.getHelperFromSkeleton(t));const n=Math.round(i.duration*(r.fps/1e3)*1e3),s=1/r.fps,o=[],l=new tl(t),c=this.getBones(e.skeleton),h=[];let u,d,p,m,v;l.clipAction(i).play(),l.update(0),t.updateMatrixWorld();for(let _=0;_<n;++_){const g=_*s;this.retarget(e,t,r);for(let f=0;f<c.length;++f)v=r.names[c[f].name]||c[f].name,p=this.getBoneByName(v,t.skeleton),p&&(d=c[f],m=h[f]=h[f]||{bone:d},r.hip===v&&(m.pos||(m.pos={times:new Float32Array(n),values:new Float32Array(n*3)}),r.useFirstFramePosition&&(_===0&&(u=d.position.clone()),d.position.sub(u)),m.pos.times[_]=g,d.position.toArray(m.pos.values,_*3)),m.quat||(m.quat={times:new Float32Array(n),values:new Float32Array(n*4)}),m.quat.times[_]=g,d.quaternion.toArray(m.quat.values,_*4));l.update(s),t.updateMatrixWorld()}for(let _=0;_<h.length;++_)m=h[_],m&&(m.pos&&o.push(new rr(".bones["+m.bone.name+"].position",m.pos.times,m.pos.values)),o.push(new Ui(".bones["+m.bone.name+"].quaternion",m.quat.times,m.quat.values)));return l.uncacheAction(i),new Qn(i.name,-1,o)}static getHelperFromSkeleton(e){const t=new Au(e.bones[0]);return t.skeleton=e,t}static getSkeletonOffsets(e,t,i={}){const r=new b,n=new b,s=new b,o=new b,l=new X,c=new X;i.hip=i.hip!==void 0?i.hip:"hip",i.names=i.names||{},t.isObject3D||(t=this.getHelperFromSkeleton(t));const h=Object.keys(i.names),u=Object.values(i.names),d=t.isObject3D?t.skeleton.bones:this.getBones(t),p=e.isObject3D?e.skeleton.bones:this.getBones(e),m=[];let v,_,g,f;for(e.skeleton.pose(),f=0;f<p.length;++f)if(v=p[f],g=i.names[v.name]||v.name,_=this.getBoneByName(g,d),_&&g!==i.hip){const x=this.getNearestBone(v.parent,h),S=this.getNearestBone(_.parent,u);x.updateMatrixWorld(),S.updateMatrixWorld(),r.setFromMatrixPosition(x.matrixWorld),n.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(S.matrixWorld),o.setFromMatrixPosition(_.matrixWorld),l.subVectors(new X(n.x,n.y),new X(r.x,r.y)).normalize(),c.subVectors(new X(o.x,o.y),new X(s.x,s.y)).normalize();const w=l.angle()-c.angle(),y=new ee().makeRotationFromEuler(new zt(0,0,w));v.matrix.multiply(y),v.matrix.decompose(v.position,v.quaternion,v.scale),v.updateMatrixWorld(),m[g]=y}return m}static renameBones(e,t){const i=this.getBones(e);for(let r=0;r<i.length;++r){const n=i[r];t[n.name]&&(n.name=t[n.name])}return this}static getBones(e){return Array.isArray(e)?e:e.bones}static getBoneByName(e,t){for(let i=0,r=this.getBones(t);i<r.length;i++)if(e===r[i].name)return r[i]}static getNearestBone(e,t){for(;e.isBone;){if(t.indexOf(e.name)!==-1)return e;e=e.parent}}static findBoneTrackData(e,t){const i=/\[(.*)\]\.(.*)/,r={name:e};for(let n=0;n<t.length;++n){const s=i.exec(t[n].name);s&&e===s[1]&&(r[s[2]]=n)}return r}static getEqualsBonesNames(e,t){const i=this.getBones(e),r=this.getBones(t),n=[];e:for(let s=0;s<i.length;s++){const o=i[s].name;for(let l=0;l<r.length;l++)if(o===r[l].name){n.push(o);continue e}}return n}static clone(e){const t=new Map,i=new Map,r=e.clone();return Dd(e,r,function(n,s){t.set(s,n),i.set(n,s)}),r.traverse(function(n){if(!n.isSkinnedMesh)return;const s=n,o=t.get(n),l=o.skeleton.bones;s.skeleton=o.skeleton.clone(),s.bindMatrix.copy(o.bindMatrix),s.skeleton.bones=l.map(function(c){return i.get(c)}),s.bind(s.skeleton,s.bindMatrix)}),r}}function Dd(a,e,t){t(a,e);for(let i=0;i<a.children.length;i++)Dd(a.children[i],e.children[i],t)}class qy extends Fe{constructor(e,t,i,r){super();const n=[],s=[],o=[],l=new b,c=new ee;c.makeRotationFromEuler(i),c.setPosition(t);const h=new ee;h.copy(c).invert(),u(),this.setAttribute("position",new be(n,3)),this.setAttribute("normal",new be(s,3)),this.setAttribute("uv",new be(o,2));function u(){let v=[];const _=new b,g=new b;if(e.geometry.isGeometry===!0){console.error("THREE.DecalGeometry no longer supports THREE.Geometry. Use BufferGeometry instead.");return}const f=e.geometry,x=f.attributes.position,S=f.attributes.normal;if(f.index!==null){const w=f.index;for(let y=0;y<w.count;y++)_.fromBufferAttribute(x,w.getX(y)),g.fromBufferAttribute(S,w.getX(y)),d(v,_,g)}else for(let w=0;w<x.count;w++)_.fromBufferAttribute(x,w),g.fromBufferAttribute(S,w),d(v,_,g);v=p(v,l.set(1,0,0)),v=p(v,l.set(-1,0,0)),v=p(v,l.set(0,1,0)),v=p(v,l.set(0,-1,0)),v=p(v,l.set(0,0,1)),v=p(v,l.set(0,0,-1));for(let w=0;w<v.length;w++){const y=v[w];o.push(.5+y.position.x/r.x,.5+y.position.y/r.y),y.position.applyMatrix4(c),n.push(y.position.x,y.position.y,y.position.z),s.push(y.normal.x,y.normal.y,y.normal.z)}}function d(v,_,g){_.applyMatrix4(e.matrixWorld),_.applyMatrix4(h),g.transformDirection(e.matrixWorld),v.push(new Ud(_.clone(),g.clone()))}function p(v,_){const g=[],f=.5*Math.abs(r.dot(_));for(let x=0;x<v.length;x+=3){let S=0,w,y,M,L;const N=v[x+0].position.dot(_)-f,R=v[x+1].position.dot(_)-f,z=v[x+2].position.dot(_)-f,H=N>0,I=R>0,F=z>0;switch(S=(H?1:0)+(I?1:0)+(F?1:0),S){case 0:{g.push(v[x]),g.push(v[x+1]),g.push(v[x+2]);break}case 1:{if(H&&(w=v[x+1],y=v[x+2],M=m(v[x],w,_,f),L=m(v[x],y,_,f)),I){w=v[x],y=v[x+2],M=m(v[x+1],w,_,f),L=m(v[x+1],y,_,f),g.push(M),g.push(y.clone()),g.push(w.clone()),g.push(y.clone()),g.push(M.clone()),g.push(L);break}F&&(w=v[x],y=v[x+1],M=m(v[x+2],w,_,f),L=m(v[x+2],y,_,f)),g.push(w.clone()),g.push(y.clone()),g.push(M),g.push(L),g.push(M.clone()),g.push(y.clone());break}case 2:{H||(w=v[x].clone(),y=m(w,v[x+1],_,f),M=m(w,v[x+2],_,f),g.push(w),g.push(y),g.push(M)),I||(w=v[x+1].clone(),y=m(w,v[x+2],_,f),M=m(w,v[x],_,f),g.push(w),g.push(y),g.push(M)),F||(w=v[x+2].clone(),y=m(w,v[x],_,f),M=m(w,v[x+1],_,f),g.push(w),g.push(y),g.push(M));break}}}return g}function m(v,_,g,f){const x=v.position.dot(g)-f,S=_.position.dot(g)-f,w=x/(x-S);return new Ud(new b(v.position.x+w*(_.position.x-v.position.x),v.position.y+w*(_.position.y-v.position.y),v.position.z+w*(_.position.z-v.position.z)),new b(v.normal.x+w*(_.normal.x-v.normal.x),v.normal.y+w*(_.normal.y-v.normal.y),v.normal.z+w*(_.normal.z-v.normal.z)))}}}class Ud{constructor(e,t){this.position=e,this.normal=t}clone(){return new this.constructor(this.position.clone(),this.normal.clone())}}const Od=`
		#ifdef USE_SKINNING
		#ifdef BONE_TEXTURE
			uniform sampler2D prevBoneTexture;
			mat4 getPrevBoneMatrix( const in float i ) {
				float j = i * 4.0;
				float x = mod( j, float( boneTextureSize ) );
				float y = floor( j / float( boneTextureSize ) );
				float dx = 1.0 / float( boneTextureSize );
				float dy = 1.0 / float( boneTextureSize );
				y = dy * ( y + 0.5 );
				vec4 v1 = texture2D( prevBoneTexture, vec2( dx * ( x + 0.5 ), y ) );
				vec4 v2 = texture2D( prevBoneTexture, vec2( dx * ( x + 1.5 ), y ) );
				vec4 v3 = texture2D( prevBoneTexture, vec2( dx * ( x + 2.5 ), y ) );
				vec4 v4 = texture2D( prevBoneTexture, vec2( dx * ( x + 3.5 ), y ) );
				mat4 bone = mat4( v1, v2, v3, v4 );
				return bone;
			}
		#else
			uniform mat4 prevBoneMatrices[ MAX_BONES ];
			mat4 getPrevBoneMatrix( const in float i ) {
				mat4 bone = prevBoneMatrices[ int(i) ];
				return bone;
			}
		#endif
		#endif
	`,Bd=`
		vec3 transformed;

		// Get the normal
		${oi.skinbase_vertex}
		${oi.beginnormal_vertex}
		${oi.skinnormal_vertex}
		${oi.defaultnormal_vertex}

		// Get the current vertex position
		transformed = vec3( position );
		${oi.skinning_vertex}
		newPosition = modelViewMatrix * vec4(transformed, 1.0);

		// Get the previous vertex position
		transformed = vec3( position );
		${oi.skinbase_vertex.replace(/mat4 /g,"").replace(/getBoneMatrix/g,"getPrevBoneMatrix")}
		${oi.skinning_vertex.replace(/vec4 /g,"")}
		prevPosition = prevModelViewMatrix * vec4(transformed, 1.0);

		// The delta between frames
		vec3 delta = newPosition.xyz - prevPosition.xyz;
		vec3 direction = normalize(delta);

		// Stretch along the velocity axes
		// TODO: Can we combine the stretch and expand
		float stretchDot = dot(direction, transformedNormal);
		vec4 expandDir = vec4(direction, 0.0) * stretchDot * expandGeometry * length(delta);
		vec4 newPosition2 =  projectionMatrix * (newPosition + expandDir);
		vec4 prevPosition2 = prevProjectionMatrix * (prevPosition + expandDir);

		newPosition =  projectionMatrix * newPosition;
		prevPosition = prevProjectionMatrix * prevPosition;

		gl_Position = mix(newPosition2, prevPosition2, interpolateGeometry * (1.0 - step(0.0, stretchDot) ) );

	`,Jy={uniforms:{prevProjectionMatrix:{value:new Qi},prevModelViewMatrix:{value:new Qi},prevBoneTexture:{value:null},expandGeometry:{value:0},interpolateGeometry:{value:1},smearIntensity:{value:1}},vertexShader:`
			${oi.skinning_pars_vertex}
			${Od}

			uniform mat4 prevProjectionMatrix;
			uniform mat4 prevModelViewMatrix;
			uniform float expandGeometry;
			uniform float interpolateGeometry;
			varying vec4 prevPosition;
			varying vec4 newPosition;

			void main() {

				${Bd}

			}
		`,fragmentShader:`
			uniform float smearIntensity;
			varying vec4 prevPosition;
			varying vec4 newPosition;

			void main() {

				// NOTE: It seems the velociyt is incorrectly calculated here -- see the velocity pass
				// in shader replacement to see how to compute velocities in screen uv space.
				vec3 vel;
				vel = (newPosition.xyz / newPosition.w) - (prevPosition.xyz / prevPosition.w);

				gl_FragColor = vec4(vel * smearIntensity, 1.0);
			}
		`},Zy={uniforms:{prevProjectionMatrix:{value:new Qi},prevModelViewMatrix:{value:new Qi},prevBoneTexture:{value:null},expandGeometry:{value:0},interpolateGeometry:{value:1},smearIntensity:{value:1}},vertexShader:`
			${oi.skinning_pars_vertex}
			${Od}

			uniform mat4 prevProjectionMatrix;
			uniform mat4 prevModelViewMatrix;
			uniform float expandGeometry;
			uniform float interpolateGeometry;
			varying vec4 prevPosition;
			varying vec4 newPosition;
			varying vec3 color;

			void main() {

				${Bd}

				color = (modelViewMatrix * vec4(normal.xyz, 0)).xyz;
				color = normalize(color);

			}
		`,fragmentShader:`
			varying vec3 color;

			void main() {
				gl_FragColor = vec4(color, 1);
			}
		`},Ky={defines:{SAMPLES:30,JITTER_STRATEGY:1,BLUENOISE_SIZE:"32.0"},uniforms:{sourceBuffer:{value:null},velocityBuffer:{value:null},jitter:{value:1},blueNoiseTex:{value:null}},vertexShader:`
			varying vec2 vUv;
			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}
		`,fragmentShader:`
			varying vec2 vUv;
			uniform sampler2D sourceBuffer;
			uniform sampler2D velocityBuffer;
			uniform float jitter;

			#if JITTER_STRATEGY == 2 // blue noise
			uniform sampler2D blueNoiseTex;
			#endif

			#include <common>
			void main() {

				vec2 vel = texture2D( velocityBuffer, vUv ).xy;

				#if JITTER_STRATEGY == 0 // Regular Jitter
				float jitterValue = mod( ( gl_FragCoord.x + gl_FragCoord.y ) * 0.25, 1.0 );
				#elif JITTER_STRATEGY == 1 // Random Jitter
				float jitterValue = rand( gl_FragCoord.xy * 0.01 );
				#elif JITTER_STRATEGY == 2 // Blue Noise Jitter
				float jitterValue = texture2D( blueNoiseTex, gl_FragCoord.xy / BLUENOISE_SIZE ).r;
				#endif

				vec2 jitterOffset = jitter * vel * vec2( jitterValue ) / float( SAMPLES );
				vec4 result;

				vec2 startUv = clamp( vUv - vel * 0.5 + jitterOffset, 0.0, 1.0 );
				vec2 endUv = clamp( vUv + vel * 0.5 + jitterOffset, 0.0, 1.0 );
				for( int i = 0; i < SAMPLES; i ++ ) {

					vec2 sampleUv = mix( startUv, endUv, float( i ) / float( SAMPLES ) );
					result += texture2D( sourceBuffer, sampleUv );

				}

				result /= float( SAMPLES );

				gl_FragColor = result;

			}
		`};function $y(a,e=Math.random){for(let t=a.length-1;t>0;t--){const i=~~((e()-1e-6)*t),r=a[t];a[t]=a[i],a[i]=r}}function e1(a,e){a.fill(0);for(let t=0;t<e;t++)a[t]=1}class zd{constructor(e){this.count=0,this.size=-1,this.sigma=-1,this.radius=-1,this.lookupTable=null,this.score=null,this.binaryPattern=null,this.resize(e),this.setSigma(1.5)}findVoid(){const{score:e,binaryPattern:t}=this;let i=1/0,r=-1;for(let n=0,s=t.length;n<s;n++){if(t[n]!==0)continue;const o=e[n];o<i&&(i=o,r=n)}return r}findCluster(){const{score:e,binaryPattern:t}=this;let i=-1/0,r=-1;for(let n=0,s=t.length;n<s;n++){if(t[n]!==1)continue;const o=e[n];o>i&&(i=o,r=n)}return r}setSigma(e){if(e===this.sigma)return;const t=~~(Math.sqrt(10*2*e**2)+1),i=2*t+1,r=new Float32Array(i*i),n=e*e;for(let s=-t;s<=t;s++)for(let o=-t;o<=t;o++){const l=(t+o)*i+s+t,c=s*s+o*o;r[l]=Math.E**(-c/(2*n))}this.lookupTable=r,this.sigma=e,this.radius=t}resize(e){this.size!==e&&(this.size=e,this.score=new Float32Array(e*e),this.binaryPattern=new Uint8Array(e*e))}invert(){const{binaryPattern:e,score:t,size:i}=this;t.fill(0);for(let r=0,n=e.length;r<n;r++)if(e[r]===0){const s=~~(r/i),o=r-s*i;this.updateScore(o,s,1),e[r]=1}else e[r]=0}updateScore(e,t,i){const{size:r,score:n,lookupTable:s}=this,o=this.radius,l=2*o+1;for(let c=-o;c<=o;c++)for(let h=-o;h<=o;h++){const u=(o+h)*l+c+o,d=s[u];let p=e+c;p=p<0?r+p:p%r;let m=t+h;m=m<0?r+m:m%r;const v=m*r+p;n[v]+=i*d}}addPointIndex(e){this.binaryPattern[e]=1;const t=this.size,i=~~(e/t),r=e-i*t;this.updateScore(r,i,1),this.count++}removePointIndex(e){this.binaryPattern[e]=0;const t=this.size,i=~~(e/t),r=e-i*t;this.updateScore(r,i,-1),this.count--}copy(e){this.resize(e.size),this.score.set(e.score),this.binaryPattern.set(e.binaryPattern),this.setSigma(e.sigma),this.count=e.count}}class Hd{constructor(){this.random=Math.random,this.sigma=1.5,this.size=64,this.majorityPointsRatio=.1,this.samples=new zd(1),this.savedSamples=new zd(1)}generate(){const{samples:e,savedSamples:t,sigma:i,majorityPointsRatio:r,size:n}=this;e.resize(n),e.setSigma(i);const s=Math.floor(n*n*r),o=e.binaryPattern;console.time("Array Initialization"),e1(o,s),$y(o,this.random),console.timeEnd("Array Initialization"),console.time("Score Initialization");for(let u=0,d=o.length;u<d;u++)o[u]===1&&e.addPointIndex(u);for(console.timeEnd("Score Initialization"),console.time("Point Rearrangement");;){const u=e.findCluster();e.removePointIndex(u);const d=e.findVoid();if(u===d){e.addPointIndex(u);break}e.addPointIndex(d)}console.timeEnd("Point Rearrangement");const l=new Uint32Array(n*n);t.copy(e),console.time("Dither Array Phase 1");let c;for(c=e.count-1;c>=0;){const u=e.findCluster();e.removePointIndex(u),l[u]=c,c--}console.timeEnd("Dither Array Phase 1"),console.time("Dither Array Phase 2");const h=n*n;for(c=t.count;c<h/2;){const u=t.findVoid();t.addPointIndex(u),l[u]=c,c++}for(console.timeEnd("Dither Array Phase 2"),console.time("Samples Invert"),t.invert(),console.timeEnd("Samples Invert"),console.time("Dither Array Phase 3");c<h;){const u=t.findCluster();t.removePointIndex(u),l[u]=c,c++}return console.timeEnd("Dither Array Phase 3"),{data:l,maxValue:h}}}class kd{constructor(){this.clearAlpha=0,this.clearColor=new gn,this.renderTarget=null,this.outputEncoding=sp,this.overrideMaterial=null,this.shadowsEnabled=!1,this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.background=null,this.autoUpdate=!0}copy(e,t){e&&(this.clearAlpha=e.getClearAlpha(),this.clearColor=e.getClearColor(this.clearColor),this.renderTarget=e.getRenderTarget(),this.shadowsEnabled=e.shadowMap.enabled,this.outputEncoding=e.outputEncoding,this.autoClear=e.autoClear,this.autoClearColor=e.autoClearColor,this.autoClearDepth=e.autoClearDepth,this.autoClearStencil=e.autoClearStencil),t&&(this.overrideMaterial=t.overrideMaterial,this.background=t.background,this.autoUpdate=t.autoUpdate)}restore(e,t){e&&(e.setClearAlpha(this.clearAlpha),e.setClearColor(this.clearColor),e.setRenderTarget(this.renderTarget),e.shadowMap.enabled=this.shadowsEnabled,e.outputEncoding=this.outputEncoding,e.autoClear=this.autoClear,e.autoClearColor=this.autoClearColor,e.autoClearDepth=this.autoClearDepth,e.autoClearStencil=this.autoClearStencil),t&&(t.overrideMaterial=this.overrideMaterial,t.background=this.background,t.autoUpdate=this.autoUpdate),this.renderTarget=null,this.overrideMaterial=null}}function Gd(a,e){if(a.visible){(a.isMesh||a.isSkinnedMesh)&&e(a);const t=a.children;for(let i=0,r=t.length;i<r;i++)Gd(t[i],e)}}const t1=new gn(0,0,0),i1={},Vd=new kd,Cs=new Hd;Cs.size=32;const Wd=new Uint8Array(32**2*4);for(let a=0,e=1;a<e;a++){const t=Cs.generate(),i=t.data,r=t.maxValue;for(let n=0,s=i.length;n<s;n++){const o=255*(i[n]/r);Wd[n*3+a]=o}}const Rs=new Bs(Wd,Cs.size,Cs.size,Kl);Rs.wrapS=fa,Rs.wrapT=fa,Rs.minFilter=ma;class xt extends ic{get enabled(){return this._enabled}set enabled(e){e===!1&&(this._prevPosMap.clear(),this._cameraMatricesNeedInitializing=!0),this._enabled=e}constructor(e,t,i={}){super(),this.enabled=!0,this.needsSwap=!0,this.samples="samples"in i?i.samples:15,this.expandGeometry="expandGeometry"in i?i.expandGeometry:0,this.interpolateGeometry="interpolateGeometry"in i?i.interpolateGeometry:1,this.smearIntensity="smearIntensity"in i?i.smearIntensity:1,this.blurTransparent="blurTransparent"in i?i.blurTransparent:!1,this.renderCameraBlur="renderCameraBlur"in i?i.renderCameraBlur:!0,this.renderTargetScale="renderTargetScale"in i?i.renderTargetScale:1,this.jitter="jitter"in i?i.jitter:1,this.jitterStrategy="jitterStrategy"in i?i.jitterStrategy:xt.RANDOM_JITTER,this.debug={display:xt.DEFAULT,dontUpdateState:!1},this.scene=e,this.camera=t,this._prevPosMap=new Map,this._currentFrameMod=0,this._frustum=new op,this._projScreenMatrix=new Qi,this._cameraMatricesNeedInitializing=!0,this._prevCamProjection=new Qi,this._prevCamWorldInverse=new Qi,this._velocityBuffer=new ga(256,256,{minFilter:ma,magFilter:ma,format:vn,type:$l}),this._velocityBuffer.texture.name="MotionBlurPass.Velocity",this._velocityBuffer.texture.generateMipmaps=!1,this._compositeMaterial=new Si(Ky),this._compositeQuad=new _n(this._compositeMaterial)}dispose(){this._compositeQuad.dispose(),this._velocityBuffer.dispose(),this._prevPosMap.clear()}setSize(e,t){const i=this.renderTargetScale;this._velocityBuffer.setSize(e*i,t*i)}render(e,t,i){const r=this.debug,n=this.scene,s=this.camera,o=this._compositeQuad,l=this.renderToScreen?null:t;switch(Vd.copy(e,n),e.autoClear=!1,e.setClearColor(t1,0),e.compile(n,s),this._ensurePrevCameraTransform(),r.display){case xt.GEOMETRY:{e.setRenderTarget(l),e.clear(),this._drawAllMeshes(e,xt.GEOMETRY,!r.dontUpdateState);break}case xt.VELOCITY:{e.setRenderTarget(l),e.clear(),this._drawAllMeshes(e,xt.VELOCITY,!r.dontUpdateState);break}case xt.DEFAULT:{const c=this._velocityBuffer;e.setRenderTarget(c),e.clear(),this._drawAllMeshes(e,xt.VELOCITY,!r.dontUpdateState);const h=this._compositeMaterial,u=h.uniforms;u.sourceBuffer.value=i.texture,u.velocityBuffer.value=this._velocityBuffer.texture,u.jitter.value=this.jitter,u.blueNoiseTex.value=Rs,h.defines.SAMPLES!==this.samples&&(h.defines.SAMPLES=Math.max(0,Math.floor(this.samples)),h.needsUpdate=!0),h.defines.JITTER_STRATEGY!==this.jitterStrategy&&(h.defines.JITTER_STRATEGY=this.jitterStrategy,h.needsUpdate=!0),e.setRenderTarget(l),o.render(e);break}}this._prevCamWorldInverse.copy(s.matrixWorldInverse),this._prevCamProjection.copy(s.projectionMatrix),Vd.restore(e,n)}_getPreviousFrameState(e){const t=this._prevPosMap;let i=t.get(e);i===void 0&&(i={lastUsedFrame:-1,matrixWorld:e.matrixWorld.clone(),geometryMaterial:new Si(Zy),velocityMaterial:new Si(Jy),boneMatrices:null,boneTexture:null},t.set(e,i));const r=e.type==="SkinnedMesh"&&e.skeleton&&e.skeleton.bones&&e.skeleton.boneMatrices;i.geometryMaterial.skinning=r,i.velocityMaterial.skinning=r;const n=e.skeleton,s=i.boneMatrices===null||i.boneMatrices.length!==n.boneMatrices.length;if(r&&s){const o=new Float32Array(n.boneMatrices.length);o.set(n.boneMatrices),i.boneMatrices=o;const l=Math.sqrt(n.boneMatrices.length/4),c=new Bs(o,l,l,vn,lp);c.needsUpdate=!0,i.geometryMaterial.uniforms.prevBoneTexture.value=c,i.velocityMaterial.uniforms.prevBoneTexture.value=c,i.boneTexture=c}return i}_saveCurrentObjectState(e){const t=this._prevPosMap.get(e);t.boneMatrices!==null&&(t.boneMatrices.set(e.skeleton.boneMatrices),t.boneTexture.needsUpdate=!0),t.matrixWorld.copy(e.matrixWorld)}_drawAllMeshes(e,t,i){this._currentFrameMod=(this._currentFrameMod+1)%2;const r=this._currentFrameMod,n=this._prevPosMap;Gd(this.scene,s=>{this._drawMesh(e,s,t,i),n.has(s)&&(n.get(s).lastUsedFrame=r)}),n.forEach((s,o)=>{s.lastUsedFrame!==r&&(s.geometryMaterial.dispose(),s.velocityMaterial.dispose(),s.boneTexture&&s.boneTexture.dispose(),n.delete(o))})}_drawMesh(e,t,i,r){const n=t.motionBlur||i1;let s=this.blurTransparent,o=this.renderCameraBlur,l=this.expandGeometry,c=this.interpolateGeometry,h=this.smearIntensity;s="blurTransparent"in n?n.blurTransparent:this.blurTransparent,o="renderCameraBlur"in n?n.renderCameraBlur:this.renderCameraBlur,l="expandGeometry"in n?n.expandGeometry:this.expandGeometry,c="interpolateGeometry"in n?n.interpolateGeometry:this.interpolateGeometry,h="smearIntensity"in n?n.smearIntensity:this.smearIntensity;const u=t.material.transparent||t.material.alpha<1,d=t.frustumCulled&&!this._frustum.intersectsObject(t);if(s===!1&&u||d)this._prevPosMap.has(t)&&r&&this._saveCurrentObjectState(t);else{const p=this.camera,m=this._getPreviousFrameState(t),v=i===xt.GEOMETRY?m.geometryMaterial:m.velocityMaterial,_=v.uniforms;_.expandGeometry.value=l,_.interpolateGeometry.value=c,_.smearIntensity.value=h;const g=o?this._prevCamProjection:p.projectionMatrix,f=o?this._prevCamWorldInverse:p.matrixWorldInverse;_.prevProjectionMatrix.value.copy(g),_.prevModelViewMatrix.value.multiplyMatrices(f,m.matrixWorld),e.renderBufferDirect(p,null,t.geometry,v,t,null),r&&this._saveCurrentObjectState(t)}}_ensurePrevCameraTransform(){const e=this.camera,t=this._projScreenMatrix;this._cameraMatricesNeedInitializing&&(this._prevCamWorldInverse.copy(e.matrixWorldInverse),this._prevCamProjection.copy(e.projectionMatrix),this._cameraMatricesNeedInitializing=!1),t.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(t)}}xt.DEFAULT=0,xt.VELOCITY=1,xt.GEOMETRY=2,xt.REGULAR_JITTER=0,xt.RANDOM_JITTER=1,xt.BLUENOISE_JITTER=2;class r1 extends Si{constructor(...e){super(...e),["opacity","map","emissiveMap","roughnessMap","metalnessMap"].forEach(t=>{Object.defineProperty(this,t,{get(){if(t in this.uniforms)return this.uniforms[t].value},set(i){t in this.uniforms&&(this.uniforms[t].value=i)}})})}}class n1 extends r1{constructor(...e){super(...e),this.modifiedDefines={},this.modifiedUniforms={}}setDefine(e,t){const i=this.defines,r=this.modifiedDefines;t==null?e in i&&(e in r||(r[e]=i[e]),delete i[e]):i[e]!==t&&(e in r||(e in i?r[e]=i[e]:r[e]=void 0),i[e]=t)}setTextureUniform(e,t){const i=this.uniforms,r=this.modifiedUniforms;e in r||(r[e]=i[e].value),i[e].value=t}finalize(){const e=this.modifiedDefines,t=this.defines;for(const n in e)e[n]===void 0?n in t&&(this.needsUpdate=!0):t[n]!==e[n]&&(this.needsUpdate=!0),delete e[n];const i=this.modifiedUniforms,r=this.uniforms;for(const n in i)i[n]!==r[n].value&&(this.needsUpdate=!0),delete i[n]}}const Xd=new WeakMap;class jd{constructor(e){this._replacementMaterial=new n1(e),this._replacementMaterials=new WeakMap,this.overrideUniforms={},this.overrideDefines={}}replace(e,t=!1,i=!0){const r=this;function n(l){if(!l.isMesh&&!l.isSkinnedMesh)return;if(!s.has(l)){const u=r.createMaterial(l);s.set(l,u)}const c=s.get(l);if(c===null)return;let h=l.material;i?o.set(l,h):h=o.get(l),h||console.error("ShaderReplacement : Material for object was not cached before replacing shader.",l),r.updateUniforms(l,h,c),c.finalize&&c.finalize(),l.material=c}const s=this._replacementMaterials,o=Xd;if(Array.isArray(e))if(t)for(let l=0,c=e.length;l<c;l++)e[l].traverse(n);else for(let l=0,c=e.length;l<c;l++)n(e[l]);else t?e.traverse(n):n(e)}reset(e,t){function i(n){r.has(n)?(n.material=r.get(n),r.delete(n)):(n.isSkinnedMesh||n.isMesh)&&console.error("ShaderReplacement : Material for object was not cached before resetting.",n)}const r=Xd;if(Array.isArray(e))if(t)for(let n=0,s=e.length;n<s;n++)i(e[n]);else for(let n=0,s=e.length;n<s;n++)e[n].traverse(i);else t?e.traverse(i):i(e)}createMaterial(e){return this._replacementMaterial.clone()}updateUniforms(e,t,i){const r=this._replacementMaterial.defines,n=t.defines,s=i.defines;if(i.side=t.side,i.flatShading=t.flatShading,i.skinning=t.skinning,n){for(const h in n)i.setDefine(h,n[h]);for(const h in s)h in n?i.setDefine(h,n[h]):i.setDefine(h,r[h])}const o=i.uniforms;if(t.isShaderMaterial){const h=t.uniforms;for(const u in o){const d=h[u],p=o[u];d&&d.value!==p.value&&(p.value&&p.value.isTexture||d.value&&d.value.isTexture?i.setTextureUniform(u,d.value):p.value=d.value)}}else for(const h in o){const u=o[h];h in t&&t[h]!==u.value&&(u.value&&u.value.isTexture||t[h]&&t[h].isTexture?i.setTextureUniform(h,t[h]):u.value=t[h])}const{overrideDefines:l,overrideUniforms:c}=this;for(const h in l)l[h]===null||l[h]===void 0?delete s[h]:s[h]!==l[h]&&(s[h]=l[h],i.needsUpdate=!0);for(const h in c)h in o&&(o[h].value=c[h].value)}dispose(){}}class a1 extends jd{constructor(){super({extensions:{derivatives:!0},defines:{USE_UV:""},uniforms:{...zs.normal.uniforms,alphaMap:{value:null},alphaTest:{value:0},map:{value:null},opacity:{value:1}},vertexShader:zs.normal.vertexShader,fragmentShader:`

				#define NORMAL
				uniform float opacity;
				#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
					varying vec3 vViewPosition;
				#endif
				#ifndef FLAT_SHADED
					varying vec3 vNormal;
					#ifdef USE_TANGENT
						varying vec3 vTangent;
						varying vec3 vBitangent;
					#endif
				#endif
				#include <packing>
				#include <uv_pars_fragment>
				#include <map_pars_fragment>
				#include <bumpmap_pars_fragment>
				#include <normalmap_pars_fragment>
				#include <alphamap_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <clipping_planes_pars_fragment>
				void main() {
					vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
					#include <clipping_planes_fragment>
					#include <logdepthbuf_fragment>
					#include <map_fragment>
					#include <alphamap_fragment>
					#include <alphatest_fragment>
					#include <normal_fragment_begin>
					#include <normal_fragment_maps>
					gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
				}
			`}),this.useNormalMaps=!1}createMaterial(...e){return super.createMaterial(...e)}updateUniforms(e,t,i){super.updateUniforms(e,t,i),i.setDefine("USE_NORMALMAP",this.useNormalMaps&&i.uniforms.normalMap.value?"":void 0),i.setDefine("TANGENTSPACE_NORMALMAP",this.useNormalMaps&&i.uniforms.normalMap.value?"":void 0),i.setDefine("ALPHATEST",i.uniforms.alphaTest.value?i.uniforms.alphaTest.value:void 0),i.setDefine("USE_ALPHAMAP",i.defines.ALPHATEST===0||!i.uniforms.alphaMap.value?void 0:""),i.setDefine("USE_MAP",i.defines.ALPHATEST===0||!i.uniforms.map.value?void 0:""),i.setDefine("USE_UV","USE_ALPHAMAP"in i.defines||"USE_MAP"in i.defines?"":void 0)}}class s1 extends jd{constructor(){super({extensions:{derivatives:!0},defines:{USE_UV:""},uniforms:{...zs.normal.uniforms,alphaMap:{value:null},alphaTest:{value:0},map:{value:null},opacity:{value:1}},vertexShader:`
				varying vec3 vViewPosition;
				#include <common>
				#include <uv_pars_vertex>
				#include <displacementmap_pars_vertex>
				#include <morphtarget_pars_vertex>
				#include <skinning_pars_vertex>
				#include <logdepthbuf_pars_vertex>
				#include <clipping_planes_pars_vertex>
				void main() {
					#include <uv_vertex>
					#include <beginnormal_vertex>
					#include <morphnormal_vertex>
					#include <skinbase_vertex>
					#include <skinnormal_vertex>
					#include <defaultnormal_vertex>
					#include <begin_vertex>
					#include <morphtarget_vertex>
					#include <skinning_vertex>
					#include <displacementmap_vertex>
					#include <project_vertex>
					#include <logdepthbuf_vertex>
					#include <clipping_planes_vertex>
					vViewPosition = mvPosition.xyz;
				}
			`,fragmentShader:`
				uniform float opacity;
				varying vec3 vViewPosition;
				#include <uv_pars_fragment>
				#include <map_pars_fragment>
				#include <bumpmap_pars_fragment>
				#include <normalmap_pars_fragment>
				#include <alphamap_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <clipping_planes_pars_fragment>
				void main() {
					vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
					#include <clipping_planes_fragment>
					#include <logdepthbuf_fragment>
					#include <map_fragment>
					#include <alphamap_fragment>
					#include <alphatest_fragment>
					gl_FragColor = vec4( vViewPosition.z );
				}
			`}),this.invertSide=!1}updateUniforms(e,t,i){super.updateUniforms(e,t,i);let r;this.invertSide&&(i.side=i.side===ec?cp:ec),r=i.defines.ALPHATEST,i.uniforms.alphaTest.value===0?delete i.defines.ALPHATEST:i.defines.ALPHATEST=i.uniforms.alphaTest.value,r!==i.defines.ALPHATEST&&(i.needsUpdate=!0),r=i.defines.USE_ALPHAMAP,i.defines.ALPHATEST===0||!i.uniforms.alphaMap.value?delete i.defines.USE_ALPHAMAP:i.defines.USE_ALPHAMAP="",r!==i.defines.USE_ALPHAMAP&&(i.needsUpdate=!0),r=i.defines.USE_MAP,i.defines.ALPHATEST===0||!i.uniforms.map.value?delete i.defines.USE_MAP:i.defines.USE_MAP="",r!==i.defines.USE_MAP&&(i.needsUpdate=!0),r=i.defines.USE_UV,"USE_ALPHAMAP"in i.defines||"USE_MAP"in i.defines?i.defines.USE_UV="":delete i.defines.USE_UV,r!==i.defines.USE_UV&&(i.needsUpdate=!0)}}const o1={uniforms:{texture:{value:null}},vertexShader:`
		varying vec3 vViewPosition;
		varying vec2 vUv;
		void main() {

			#include <begin_vertex>
			#include <project_vertex>
			vViewPosition = mvPosition.xyz;
			vUv = uv;

		}
	`,fragmentShader:`
		varying vec2 vUv;
		uniform sampler2D texture;
		void main() {

			vec4 texVal = texture2D( texture, vUv );
			float depthVal = - texVal.r;
			depthVal = mod( depthVal, 1.0 );
			gl_FragColor = vec4( depthVal );

		}
	`},l1={uniforms:{tex:{value:null},displayRoughness:{value:0}},vertexShader:`
		varying vec3 vViewPosition;
		varying vec2 vUv;
		void main() {

			#include <begin_vertex>
			#include <project_vertex>
			vViewPosition = mvPosition.xyz;
			vUv = uv;

		}
	`,fragmentShader:`
		varying vec2 vUv;
		uniform sampler2D tex;
		uniform float displayRoughness;
		void main() {

			vec4 texVal = texture2D( tex, vUv );
			float roughness = texVal.a;
			vec3 packedNormal = texVal.xyz;
			vec3 unpackedNormal = ( packedNormal - 0.5 ) * 2.0;
			gl_FragColor = mix(
				vec4( unpackedNormal, 1.0 ),
				vec4( roughness, roughness, roughness, 1.0 ),
				displayRoughness
			);

		}
	`},c1={defines:{NUM_DIRECTIONS:32,NUM_STEPS:16,RADIUS:"2.0",ENABLE_FALLOFF:1,FALLOFF_START2:"0.16",FALLOFF_END2:"4.0",ENABLE_ROTATION_JITTER:1,ENABLE_RADIUS_JITTER:1,ENABLE_COLOR_BOUNCE:1,JITTER_TYPE:0},uniforms:{colorBuffer:{value:null},normalBuffer:{value:null},depthBuffer:{value:null},renderSize:{value:new va},blueNoiseTex:{value:null},blueNoiseSize:{value:1},clipInfo:{value:new tc},projInfo:{value:new tc},params:{value:new va},lightBounceIntensity:{value:1}},vertexShader:`
		varying vec2 vUv;
		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}
	`,fragmentShader:`
		#define TWO_PI			6.2831853071795864
		#define HALF_PI			1.5707963267948966
		#define ONE_OVER_PI		0.3183098861837906

		#include <common>
		#include <packing>
		varying vec2 vUv;

		uniform sampler2D noiseTexture;
		uniform sampler2D normalBuffer;
		uniform sampler2D depthBuffer;
		uniform sampler2D colorBuffer;
		uniform vec2 renderSize;

		uniform vec4 projInfo;
		uniform vec4 clipInfo;
		uniform vec4 params;
		uniform float lightBounceIntensity;

		#if ENABLE_ROTATION_JITTER == 2 || ENABLE_RADIUS_JITTER == 2
		uniform float blueNoiseSize;
		uniform sampler2D blueNoiseTex;
		#endif

		float round( float f ) {

			return f < 0.5 ? floor( f ) : ceil( f );

		}

		vec2 round( vec2 v ) {

			v.x = round( v.x );
			v.y = round( v.y );
			return v;

		}

		vec3 UnpackNormal( vec4 d ) {

			return d.xyz * 2.0 - 1.0;

		}

		vec4 GetViewPosition( vec2 uv ) {

			float near = clipInfo.x;
			float far = clipInfo.y;

			vec2 basesize = renderSize;
			vec2 coord = ( uv / basesize );

			// d is expected to be [ 0.0, 1.0 ]
			float d = texture2D( depthBuffer, coord ).r;
			d = d == 0.0 ? far : d;
			d = ( abs( d ) - near ) / ( far - near );

			vec4 ret = vec4( 0.0 );
			ret.w = d;
			ret.z = near + d * ( far - near );
			ret.xy = ( uv * projInfo.xy + projInfo.zw ) * ret.z;

			return ret;

		}

		float Falloff( float dist2 ) {

			return 2.0 * clamp(
				( dist2 - FALLOFF_START2 ) / ( FALLOFF_END2 - FALLOFF_START2 ),
				0.0,
				1.0
			);

		}

		void main() {

			vec2 screenCoord = gl_FragCoord.xy;
			vec4 vpos = GetViewPosition( renderSize * vUv );

			// if it's the background
			if ( vpos.w == 1.0 ) {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0);
				return;

			}

			vec4 s;
			vec3 vnorm	= UnpackNormal( texture2D( normalBuffer, vUv ) );
			vec3 vdir	= normalize( - vpos.xyz );
			vec3 dir, ws;

			// calculation uses left handed system
			vnorm.z = - vnorm.z;

			vec2 noises	= vec2( 0.0 );
			vec2 offset;
			vec2 horizons = vec2( - 1.0, - 1.0 );

			// scale the search radius by the depth and camera FOV
			float radius = ( RADIUS * clipInfo.z ) / vpos.z;
			radius = max( float( NUM_STEPS ), radius );

			float stepSize	= radius / float( NUM_STEPS );
			float phi		= 0.0;
			float ao		= 0.0;
			float division	= noises.y * stepSize;
			float currStep	= 1.0 + division + 0.25 * stepSize * params.y;
			float dist2, invdist, falloff, cosh;

			#if ENABLE_COLOR_BOUNCE
			vec3 color = vec3( 0.0 );
			#endif

			#if ENABLE_ROTATION_JITTER == 1

			// Rotation jitter approach from
			// https://github.com/MaxwellGengYF/Unity-Ground-Truth-Ambient-Occlusion/blob/9cc30e0f31eb950a994c71866d79b2798d1c508e/Shaders/GTAO_Common.cginc#L152-L155
			float rotJitterOffset = PI * fract( 52.9829189 * fract( dot( screenCoord, vec2( 0.06711056, 0.00583715 ) ) ) );

			#elif ENABLE_ROTATION_JITTER == 2

			float rotJitterOffset = PI * texture2D( blueNoiseTex, gl_FragCoord.xy / blueNoiseSize ).r;

			#endif

			#if ENABLE_RADIUS_JITTER == 1

			float jitterMod = ( gl_FragCoord.x + gl_FragCoord.y ) * 0.25;
			float radiusJitterOffset = mod( jitterMod, 1.0 ) * stepSize * 0.25;

			#elif ENABLE_RADIUS_JITTER == 2

			float radiusJitterOffset = PI * texture2D( blueNoiseTex, gl_FragCoord.xy / blueNoiseSize ).g;

			#endif

			#pragma unroll_loop_start
			for ( int i = 0; i < NUM_DIRECTIONS; i ++ ) {

				phi = float( i ) * ( PI / float( NUM_DIRECTIONS ) ) + params.x * PI;

				#if ENABLE_ROTATION_JITTER != 0

				phi += rotJitterOffset;

				#endif

				currStep = 1.0 + 0.25 * stepSize * params.y;


				#if ENABLE_RADIUS_JITTER != 0

				currStep += radiusJitterOffset;

				#endif

				dir = vec3( cos( phi ), sin( phi ), 0.0 );
				horizons = vec2( - 1.0 );

				// calculate horizon angles
				for ( int j = 0; j < NUM_STEPS; ++ j ) {

					offset = round( dir.xy * currStep );

					// h1
					s = GetViewPosition( screenCoord + offset );
					ws = s.xyz - vpos.xyz;

					dist2 = dot( ws, ws );
					invdist = inversesqrt( dist2 );
					cosh = invdist * dot( ws, vdir );

					#if ENABLE_FALLOFF

					falloff = Falloff( dist2 );

					#endif

					horizons.x = max( horizons.x, cosh - falloff );

					#if ENABLE_COLOR_BOUNCE

					vec3 ptColor, ptDir;
					float alpha;
					ptColor = texture2D( colorBuffer, ( screenCoord + offset ) / renderSize ).rgb;
					ptDir = normalize( ws );
					alpha = saturate( length( ws ) / float( RADIUS ) );
					color += ptColor * saturate( dot( ptDir, vnorm ) ) * pow( ( 1.0 - alpha ), 2.0 );

					#endif

					// h2
					s = GetViewPosition( screenCoord - offset );
					ws = s.xyz - vpos.xyz;

					dist2 = dot( ws, ws );
					invdist = inversesqrt( dist2 );
					cosh = invdist * dot( ws, vdir );

					#if ENABLE_FALLOFF

					falloff = Falloff( dist2 );

					#endif

					horizons.y = max( horizons.y, cosh - falloff );

					// increment
					currStep += stepSize;

					#if ENABLE_COLOR_BOUNCE

					ptColor = texture2D( colorBuffer, ( screenCoord - offset ) / renderSize ).rgb;
					ptDir = normalize( ws );
					alpha = saturate( length( ws ) / float( RADIUS ) );
					color += ptColor * saturate( dot( ptDir, vnorm ) ) * pow( ( 1.0 - alpha ), 2.0 );

					#endif

				}

				horizons = acos( horizons );

				// calculate gamma
				vec3 bitangent	= normalize( cross( dir, vdir ) );
				vec3 tangent	= cross( vdir, bitangent );
				vec3 nx			= vnorm - bitangent * dot( vnorm, bitangent );

				float nnx		= length( nx );
				float invnnx	= 1.0 / ( nnx + 1e-6 );			// to avoid division with zero
				float cosxi		= dot( nx, tangent ) * invnnx;	// xi = gamma + HALF_PI
				float gamma		= acos( cosxi ) - HALF_PI;
				float cosgamma	= dot( nx, vdir ) * invnnx;
				float singamma2	= - 2.0 * cosxi;					// cos(x + HALF_PI) = -sin(x)

				// clamp to normal hemisphere
				horizons.x = gamma + max( - horizons.x - gamma, - HALF_PI );
				horizons.y = gamma + min( horizons.y - gamma, HALF_PI );

				// Riemann integral is additive
				ao += nnx * 0.25 * (
					( horizons.x * singamma2 + cosgamma - cos( 2.0 * horizons.x - gamma ) ) +
					( horizons.y * singamma2 + cosgamma - cos( 2.0 * horizons.y - gamma ) ) );

			}
			#pragma unroll_loop_end

			// PDF = 1 / pi and must normalize with pi because of Lambert
			ao = ao / float( NUM_DIRECTIONS );

			#if ENABLE_COLOR_BOUNCE

			color /= float( NUM_STEPS * NUM_DIRECTIONS ) * 2.0 / lightBounceIntensity;
			gl_FragColor = vec4( color, ao );

			#else

			gl_FragColor = vec4( 0.0, 0.0, 0.0, ao );

			#endif
		}

	`},h1={defines:{BLUR_ITERATIONS:5,BLUR_MODE:0,AO_ONLY:0,COLOR_ONLY:0,DEPTH_THRESHOLD:"5e-1"},uniforms:{fullSize:{value:new va},aoSize:{value:new va},normalBuffer:{value:null},depthBuffer:{value:null},colorBuffer:{value:null},gtaoBuffer:{value:null},intensity:{value:1},blurStride:{value:1},ambientColor:{value:new gn},ambientIntensity:{value:0}},vertexShader:`
		varying vec2 vUv;
		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}
	`,fragmentShader:`
		varying vec2 vUv;

		uniform vec3 ambientColor;
		uniform float ambientIntensity;

		uniform vec2 aoSize;
		uniform vec2 fullSize;
		uniform sampler2D colorBuffer;
		uniform sampler2D depthBuffer;
		uniform sampler2D normalBuffer;
		uniform sampler2D gtaoBuffer;
		uniform float intensity;
		uniform int blurStride;

		vec3 UnpackNormal( vec4 d ) {

			return d.xyz * 2.0 - 1.0;

		}

		vec3 MultiBounce( float ao, vec3 albedo ) {

			vec3 x = vec3( ao );

			vec3 a = 2.0404 * albedo - vec3( 0.3324 );
			vec3 b = -4.7951 * albedo + vec3( 0.6417 );
			vec3 c = 2.7552 * albedo + vec3( 0.6903 );

			return max( x, ( ( x * a + b ) * x + c ) * x );

		}

		void main() {

			vec4 color = texture2D( colorBuffer, vUv );

			// NO_BLUR
			#if BLUR_MODE == 0

			vec4 accumSample = texture2D( gtaoBuffer, vUv );

			#else

			vec2 currTexel = vUv * fullSize;
			vec2 currAoTexel = vUv * aoSize;

			// aoPixels per full size ones. Should be 1/2 at
			vec2 texelRatio = aoSize / fullSize;

			vec3 currNormal = UnpackNormal( texture2D( normalBuffer, vUv ) );
			float currDepth = texture2D( depthBuffer, vUv ).r;

			// TODO: pull this sampling out into a function
			vec4 accumSample = vec4( 0.0 );
			float totalWeight = 1e-10;
			float pixelOffset = - float( BLUR_ITERATIONS ) / 2.0;
			pixelOffset += mod( float( BLUR_ITERATIONS ), 2.0 ) == 0.0 ? 0.0 : 0.5;
			pixelOffset *= float( blurStride );

			// BOX_BLUR
			#if BLUR_MODE == 1

			#pragma unroll_loop_start
			for ( int x = 0; x < BLUR_ITERATIONS; x ++ ) {

				#pragma unroll_loop_start
				for ( int y = 0; y < BLUR_ITERATIONS; y ++ ) {

					vec2 step = vec2( float( x ), float( y ) ) * float( blurStride );

					// iterate over full res pixels
					vec2 offsetUv = currTexel + ( pixelOffset + step ) / texelRatio;
					offsetUv /= fullSize;

					// get the associated pixel in the AO buffer
					vec2 aoUv = currAoTexel + pixelOffset + step;
					aoUv /= aoSize;

					// if the pixels are close enough in space then blur them together
					float offsetDepth = texture2D( depthBuffer, offsetUv ).r;
					if ( abs( offsetDepth - currDepth ) <= DEPTH_THRESHOLD ) {

						// Weigh the sample based on normal similarity
						vec3 offsetNormal = UnpackNormal( texture2D( normalBuffer, offsetUv ) );
						float weight = max( 0.0, dot( offsetNormal, currNormal ) );

						// square the weight to give pixels with a closer normal even higher priority
						weight *= weight;

						// accumulate
						vec4 val = texture2D( gtaoBuffer, aoUv );
						accumSample += val * weight;
						totalWeight += weight;

					}

				}
				#pragma unroll_loop_end

			}
			#pragma unroll_loop_end

			// CROSS_BLUR
			#elif BLUR_MODE == 2

			#pragma unroll_loop_start
			for ( int i = 0; i < BLUR_ITERATIONS; i ++ ) {

				vec2 offsetUv, aoUv;
				float offsetDepth;

				// X sample
				// iterate over full res pixels
				offsetUv = currTexel + vec2( pixelOffset + float( i * blurStride ), 0.0 ) / texelRatio;
				offsetUv /= fullSize;

				aoUv = currAoTexel + vec2( pixelOffset + float( i * blurStride ), 0.0 );
				aoUv /= aoSize;

				// further more negative
				offsetDepth = texture2D( depthBuffer, offsetUv ).r;
				if ( abs(offsetDepth - currDepth) <= DEPTH_THRESHOLD ) {

					vec3 offsetNormal = UnpackNormal( texture2D( normalBuffer, offsetUv ) );
					float weight = max(0.0, dot( offsetNormal, currNormal ) );
					weight *= weight;

					vec4 val = texture2D( gtaoBuffer, aoUv );
					accumSample += val * weight;
					totalWeight += weight;

				}

				// TODO: this should not be here if on the center pixel
				// Y sample
				// iterate over full res pixels
				offsetUv = currTexel + vec2( 0.0, pixelOffset + float( i * blurStride ) ) / texelRatio;
				offsetUv /= fullSize;

				aoUv = currAoTexel + vec2( 0.0, pixelOffset + float( i * blurStride ) );
				aoUv /= aoSize;

				// further more negative
				offsetDepth = texture2D( depthBuffer, offsetUv ).r;
				if ( abs(offsetDepth - currDepth) <= DEPTH_THRESHOLD ) {

					vec3 offsetNormal = UnpackNormal( texture2D( normalBuffer, offsetUv ) );
					float weight = max(0.0, dot( offsetNormal, currNormal ) );
					weight *= weight;

					vec4 val = texture2D( gtaoBuffer, aoUv );
					accumSample += val * weight;
					totalWeight += weight;

				}

			}
			#pragma unroll_loop_end

			// DIAGONAL_BLUR
			#elif BLUR_MODE == 3

			#pragma unroll_loop_start
			for ( int i = 0; i < BLUR_ITERATIONS; i ++ ) {

				vec2 offsetUv, aoUv;
				float offsetDepth;

				// X sample
				// iterate over full res pixels
				offsetUv = currTexel + vec2( pixelOffset + float( i * blurStride ), pixelOffset + float( i * blurStride ) ) / texelRatio;
				offsetUv /= fullSize;

				aoUv = currAoTexel + vec2( pixelOffset + float( i * blurStride ), pixelOffset + float( i * blurStride ) );
				aoUv /= aoSize;

				// further more negative
				offsetDepth = texture2D( depthBuffer, offsetUv ).r;
				if ( abs(offsetDepth - currDepth) <= DEPTH_THRESHOLD ) {

					vec3 offsetNormal = UnpackNormal( texture2D( normalBuffer, offsetUv ) );
					float weight = max(0.0, dot( offsetNormal, currNormal ) );
					weight *= weight;

					vec4 val = texture2D( gtaoBuffer, aoUv );
					accumSample += val * weight;
					totalWeight += weight;

				}

				// TODO: this should not be here if on the center pixel
				// Y sample
				// iterate over full res pixels
				offsetUv = currTexel + vec2( - pixelOffset - float( i * blurStride ), pixelOffset + float( i * blurStride ) ) / texelRatio;
				offsetUv /= fullSize;

				aoUv = currAoTexel + vec2( - pixelOffset - float( i * blurStride ), pixelOffset + float( i * blurStride ) );
				aoUv /= aoSize;

				// further more negative
				offsetDepth = texture2D( depthBuffer, offsetUv ).r;
				if ( abs(offsetDepth - currDepth) <= DEPTH_THRESHOLD ) {

					vec3 offsetNormal = UnpackNormal( texture2D( normalBuffer, offsetUv ) );
					float weight = max(0.0, dot( offsetNormal, currNormal ) );
					weight *= weight;

					vec4 val = texture2D( gtaoBuffer, aoUv );
					accumSample += val * weight;
					totalWeight += weight;

				}

			}
			#pragma unroll_loop_end

			#endif

			accumSample /= totalWeight;

			#endif

			float gtao = accumSample.a;

			#if COLOR_ONLY

			gl_FragColor = vec4( accumSample.rgb, 1.0 );

			#elif AO_ONLY

			vec3 rgb = mix( vec3( 1.0 ), vec3( accumSample.a ), intensity );
			gl_FragColor = vec4( rgb, 1.0 );

			#else

			vec3 rgb = mix( color.rgb, color.rgb * MultiBounce( gtao, color.rgb ), intensity );
			vec3 delta = color.rgb - rgb;
			vec3 ambient = ambientColor * delta * ambientIntensity;

			float colorFade = ( 1.0 - pow( 1.0 - gtao, 2.0 ) );
			gl_FragColor = vec4( rgb + ambient + accumSample.rgb * ( 0.75 + colorFade * 0.25 ), color.a );

			#endif

		}
		`},Yd=new kd,u1=new gn(0),Is=new Hd;Is.size=32;const Qd=new Uint8Array(32**2*4);for(let a=0,e=4;a<e;a++){const t=Is.generate(),i=t.data,r=t.maxValue;for(let n=0,s=i.length;n<s;n++){const o=255*(i[n]/r);Qd[n*4+a]=o}}const hn=new Bs(Qd,Is.size,Is.size,vn);hn.wrapS=fa,hn.wrapT=fa,hn.minFilter=ma,hn.needsUpdate=!0;class ot extends ic{constructor(e,t){super(),this.enabled=!0,this.needsSwap=!0,this.scene=e,this.camera=t,this.debug={display:ot.DEFAULT},this.renderTargetScale=1,this.enableJitter=!0,this.radiusJitter=0,this.rotationJitter=0,this.numSteps=8,this.numDirections=8,this.intensity=1,this.radius=2,this.directionOffset=0,this.stepOffset=0,this.blurMode=ot.BOX_BLUR,this.blurIterations=4,this.blurStride=1,this.enableFalloff=!0,this.falloffStart=.4,this.falloffEnd=2,this.ambientColor=new gn,this.ambientIntensity=0,this.lightBounceIntensity=1,this._gtaoBuffer=new ga(1,1,{format:vn}),this._depthBuffer=new ga(1,1,{minFilter:_a,magFilter:_a,format:Kl,type:$l}),this._depthReplacement=new s1,this._normalBuffer=new ga(1,1,{minFilter:_a,magFilter:_a,format:vn}),this._normalReplacement=new a1,this.gtaoQuad=new _n(new Si(c1)),this.debugPackedQuad=new _n(new Si(l1)),this.debugDepthQuad=new _n(new Si(o1)),this.compositeQuad=new _n(new Si(h1))}dispose(){}setSize(e,t){const i=this.renderTargetScale,r=Math.floor(e*i),n=Math.floor(t*i);this._depthBuffer.setSize(e,t),this._normalBuffer.setSize(e,t),this._gtaoBuffer.setSize(r,n)}render(e,t,i){const r=this.renderToScreen?null:t,{scene:n,camera:s,debug:o,debugPackedQuad:l,debugDepthQuad:c,compositeQuad:h,gtaoQuad:u}=this,d=u.material;Yd.copy(e,n);const p=()=>{Yd.restore(e,n),m.reset(n,!0)},m=this._depthReplacement,v=this._depthBuffer;if(n.background=null,m.replace(n,!0,!0),e.setRenderTarget(v),e.setClearColor(u1,0),e.clear(),e.render(n,s),o.display===ot.DEPTH){e.setRenderTarget(r),c.material.uniforms.texture.value=v.texture,c.render(e),p();return}const _=this._normalReplacement,g=this._normalBuffer;if(_.replace(n,!0,!1),e.setRenderTarget(g),e.clear(),e.render(n,s),o.display===ot.NORMAL){e.setRenderTarget(r),e.clear(),l.material.uniforms.displayRoughness.value=0,l.material.uniforms.texture.value=g.texture,l.render(e),p();return}this.numSteps!==d.defines.NUM_STEPS&&(d.defines.NUM_STEPS=this.numSteps,d.needsUpdate=!0),this.numDirections!==d.defines.NUM_DIRECTIONS&&(d.defines.NUM_DIRECTIONS=this.numDirections,d.needsUpdate=!0),this.radius.toFixed(16)!==d.defines.RADIUS&&(d.defines.RADIUS=this.radius.toFixed(16),d.needsUpdate=!0),(Math.pow(this.falloffStart,2).toFixed(16)!==d.defines.FALLOFF_START2||Math.pow(this.falloffEnd,2).toFixed(16)!==d.defines.FALLOFF_END2||this.enableFalloff!==!!d.defines.ENABLE_FALLOFF)&&(d.defines.FALLOFF_START2=Math.pow(this.falloffStart,2).toFixed(16),d.defines.FALLOFF_END2=Math.pow(this.falloffEnd,2).toFixed(16),d.defines.ENABLE_FALLOFF=this.enableFalloff?1:0,d.needsUpdate=!0),this.rotationJitter!==d.defines.ENABLE_ROTATION_JITTER&&(d.defines.ENABLE_ROTATION_JITTER=this.rotationJitter,d.needsUpdate=!0),this.radiusJitter!==d.defines.ENABLE_RADIUS_JITTER&&(d.defines.ENABLE_RADIUS_JITTER=this.radiusJitter,d.needsUpdate=!0),this.lightBounceIntensity!==0!=!!d.defines.ENABLE_COLOR_BOUNCE&&(d.defines.ENABLE_COLOR_BOUNCE=this.lightBounceIntensity!==0?1:0,d.needsUpdate=!0);const f=this._gtaoBuffer,x=Math.floor(f.texture.image.width),S=Math.floor(f.texture.image.height),w=s.projectionMatrix,y=hp.DEG2RAD*s.fov;d.uniforms.params.value.set(this.directionOffset,this.stepOffset),d.uniforms.projInfo.value.set(2/(x*w.elements[4*0+0]),2/(S*w.elements[4*1+1]),-1/w.elements[4*0+0],-1/w.elements[4*1+1]),d.uniforms.clipInfo.value.set(s.near,s.far,.5*(S/(2*Math.tan(y*.5))),0),d.uniforms.normalBuffer.value=g.texture,d.uniforms.depthBuffer.value=v.texture,d.uniforms.colorBuffer.value=i.texture,d.uniforms.lightBounceIntensity.value=this.lightBounceIntensity,d.uniforms.renderSize.value.set(Math.floor(f.texture.image.width),Math.floor(f.texture.image.height)),d.uniforms.blueNoiseTex.value=hn,d.uniforms.blueNoiseSize.value=hn.image.width,e.setRenderTarget(f),e.clear(),u.render(e);const M=h.material;M.uniforms.depthBuffer.value=v.texture,M.uniforms.normalBuffer.value=g.texture,M.uniforms.colorBuffer.value=i.texture,M.uniforms.gtaoBuffer.value=f.texture,M.uniforms.intensity.value=this.intensity,M.uniforms.aoSize.value.set(f.width,f.height),M.uniforms.fullSize.value.set(i.width,i.height),M.uniforms.blurStride.value=this.blurStride,M.uniforms.ambientColor.value.copy(this.ambientColor),M.uniforms.ambientIntensity.value=this.ambientIntensity,this.blurIterations!==M.defines.BLUR_ITERATIONS&&(M.defines.BLUR_ITERATIONS=this.blurIterations,M.needsUpdate=!0),this.blurMode!==M.defines.BLUR_MODE&&(M.defines.BLUR_MODE=this.blurMode,M.needsUpdate=!0),o.display===ot.AO_SAMPLE?M.defines.AO_ONLY!==1&&(M.defines.AO_ONLY=1,M.needsUpdate=!0):M.defines.AO_ONLY!==0&&(M.defines.AO_ONLY=0,M.needsUpdate=!0),o.display===ot.COLOR_SAMPLE?M.defines.COLOR_ONLY!==1&&(M.defines.COLOR_ONLY=1,M.needsUpdate=!0):M.defines.COLOR_ONLY!==0&&(M.defines.COLOR_ONLY=0,M.needsUpdate=!0),e.setRenderTarget(r),e.clear(),h.render(e),p()}}ot.NO_JITTER=0,ot.RANDOM_JITTER=1,ot.BLUENOISE_JITTER=2,ot.DEFAULT=0,ot.DEPTH=1,ot.NORMAL=2,ot.AO_SAMPLE=3,ot.COLOR_SAMPLE=4,ot.NO_BLUR=0,ot.BOX_BLUR=1,ot.CROSS_BLUR=2,ot.DIAGONAL_BLUR=3;const Il=new Be.Matrix4;class Us{constructor(e){e=e||{},this.vertices={near:[new Be.Vector3,new Be.Vector3,new Be.Vector3,new Be.Vector3],far:[new Be.Vector3,new Be.Vector3,new Be.Vector3,new Be.Vector3]},e.projectionMatrix!==void 0&&this.setFromProjectionMatrix(e.projectionMatrix,e.maxFar||1e4)}setFromProjectionMatrix(e,t){const i=e.elements[11]===0;return Il.copy(e).invert(),this.vertices.near[0].set(1,1,-1),this.vertices.near[1].set(1,-1,-1),this.vertices.near[2].set(-1,-1,-1),this.vertices.near[3].set(-1,1,-1),this.vertices.near.forEach(function(r){r.applyMatrix4(Il)}),this.vertices.far[0].set(1,1,1),this.vertices.far[1].set(1,-1,1),this.vertices.far[2].set(-1,-1,1),this.vertices.far[3].set(-1,1,1),this.vertices.far.forEach(function(r){r.applyMatrix4(Il);const n=Math.abs(r.z);i?r.z*=Math.min(t/n,1):r.multiplyScalar(Math.min(t/n,1))}),this.vertices}split(e,t){for(;e.length>t.length;)t.push(new Us);t.length=e.length;for(let i=0;i<e.length;i++){const r=t[i];if(i===0)for(let n=0;n<4;n++)r.vertices.near[n].copy(this.vertices.near[n]);else for(let n=0;n<4;n++)r.vertices.near[n].lerpVectors(this.vertices.near[n],this.vertices.far[n],e[i-1]);if(i===e.length-1)for(let n=0;n<4;n++)r.vertices.far[n].copy(this.vertices.far[n]);else for(let n=0;n<4;n++)r.vertices.far[n].lerpVectors(this.vertices.near[n],this.vertices.far[n],e[i])}}toSpace(e,t){for(var i=0;i<4;i++)t.vertices.near[i].copy(this.vertices.near[i]).applyMatrix4(e),t.vertices.far[i].copy(this.vertices.far[i]).applyMatrix4(e)}}var qd={lights_fragment_begin:`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef CLEARCOAT
geometry.clearcoatNormal = clearcoatNormal;
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
PointLight pointLight;
#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
PointLightShadow pointLightShadow;
#endif
#pragma unroll_loop_start
for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
  pointLight = pointLights[ i ];
  getPointDirectLightIrradiance( pointLight, geometry, directLight );
  #if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
  pointLightShadow = pointLightShadows[ i ];
  directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
  #endif
  RE_Direct( directLight, geometry, material, reflectedLight );
}
#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
SpotLight spotLight;
#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
SpotLightShadow spotLightShadow;
#endif
#pragma unroll_loop_start
for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
  spotLight = spotLights[ i ];
  getSpotDirectLightIrradiance( spotLight, geometry, directLight );
  #if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
  spotLightShadow = spotLightShadows[ i ];
  directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
  #endif
  RE_Direct( directLight, geometry, material, reflectedLight );
}
#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0) && defined( RE_Direct ) && defined( USE_CSM ) && defined( CSM_CASCADES )
DirectionalLight directionalLight;
float linearDepth = (vViewPosition.z) / (shadowFar - cameraNear);
#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
DirectionalLightShadow directionalLightShadow;
#endif
#if defined( USE_SHADOWMAP ) && defined( CSM_FADE )
vec2 cascade;
float cascadeCenter;
float closestEdge;
float margin;
float csmx;
float csmy;
#pragma unroll_loop_start
for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
  directionalLight = directionalLights[ i ];
  getDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );
  // NOTE: Depth gets larger away from the camera.
  // cascade.x is closer, cascade.y is further
  cascade = CSM_cascades[ i ];
  cascadeCenter = ( cascade.x + cascade.y ) / 2.0;
  closestEdge = linearDepth < cascadeCenter ? cascade.x : cascade.y;
  margin = 0.25 * pow( closestEdge, 2.0 );
  csmx = cascade.x - margin / 2.0;
  csmy = cascade.y + margin / 2.0;
  if( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS && linearDepth >= csmx && ( linearDepth < csmy || UNROLLED_LOOP_INDEX == CSM_CASCADES - 1 ) ) {
    float dist = min( linearDepth - csmx, csmy - linearDepth );
    float ratio = clamp( dist / margin, 0.0, 1.0 );
    if( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS ) {
      vec3 prevColor = directLight.color;
      directionalLightShadow = directionalLightShadows[ i ];
      directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
      bool shouldFadeLastCascade = UNROLLED_LOOP_INDEX == CSM_CASCADES - 1 && linearDepth > cascadeCenter;
      directLight.color = mix( prevColor, directLight.color, shouldFadeLastCascade ? ratio : 1.0 );
    }
    ReflectedLight prevLight = reflectedLight;
    RE_Direct( directLight, geometry, material, reflectedLight );
    bool shouldBlend = UNROLLED_LOOP_INDEX != CSM_CASCADES - 1 || UNROLLED_LOOP_INDEX == CSM_CASCADES - 1 && linearDepth < cascadeCenter;
    float blendRatio = shouldBlend ? ratio : 1.0;
    reflectedLight.directDiffuse = mix( prevLight.directDiffuse, reflectedLight.directDiffuse, blendRatio );
    reflectedLight.directSpecular = mix( prevLight.directSpecular, reflectedLight.directSpecular, blendRatio );
    reflectedLight.indirectDiffuse = mix( prevLight.indirectDiffuse, reflectedLight.indirectDiffuse, blendRatio );
    reflectedLight.indirectSpecular = mix( prevLight.indirectSpecular, reflectedLight.indirectSpecular, blendRatio );
  }
}
#pragma unroll_loop_end
#else
#pragma unroll_loop_start
for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
  directionalLight = directionalLights[ i ];
  getDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );
  #if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
  directionalLightShadow = directionalLightShadows[ i ];
  if(linearDepth >= CSM_cascades[UNROLLED_LOOP_INDEX].x && linearDepth < CSM_cascades[UNROLLED_LOOP_INDEX].y) directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
  #endif
  if(linearDepth >= CSM_cascades[UNROLLED_LOOP_INDEX].x && (linearDepth < CSM_cascades[UNROLLED_LOOP_INDEX].y || UNROLLED_LOOP_INDEX == CSM_CASCADES - 1)) RE_Direct( directLight, geometry, material, reflectedLight );
}
#pragma unroll_loop_end
#endif
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct ) && !defined( USE_CSM ) && !defined( CSM_CASCADES )
DirectionalLight directionalLight;
#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
DirectionalLightShadow directionalLightShadow;
#endif
#pragma unroll_loop_start
for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
  directionalLight = directionalLights[ i ];
  getDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );
  #if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
  directionalLightShadow = directionalLightShadows[ i ];
  directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
  #endif
  RE_Direct( directLight, geometry, material, reflectedLight );
}
#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
RectAreaLight rectAreaLight;
#pragma unroll_loop_start
for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
  rectAreaLight = rectAreaLights[ i ];
  RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
}
#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
vec3 iblIrradiance = vec3( 0.0 );
vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
irradiance += getLightProbeIrradiance( lightProbe, geometry );
#if ( NUM_HEMI_LIGHTS > 0 )
  #pragma unroll_loop_start
  for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
    irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
  }
  #pragma unroll_loop_end
#endif
#endif
#if defined( RE_IndirectSpecular )
vec3 radiance = vec3( 0.0 );
vec3 clearcoatRadiance = vec3( 0.0 );
#endif
`,lights_pars_begin:`
#if defined( USE_CSM ) && defined( CSM_CASCADES )
uniform vec2 CSM_cascades[CSM_CASCADES];
uniform float cameraNear;
uniform float shadowFar;
#endif
`+Be.ShaderChunk.lights_pars_begin};class d1 extends Be.Group{constructor(e){super(),this.csm=e,this.displayFrustum=!0,this.displayPlanes=!0,this.displayShadowBounds=!0;const t=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(24),r=new Be.BufferGeometry;r.setIndex(new Be.BufferAttribute(t,1)),r.setAttribute("position",new Be.BufferAttribute(i,3,!1));const n=new Be.LineSegments(r,new Be.LineBasicMaterial);this.add(n),this.frustumLines=n,this.cascadeLines=[],this.cascadePlanes=[],this.shadowLines=[]}updateVisibility(){const e=this.displayFrustum,t=this.displayPlanes,i=this.displayShadowBounds,r=this.frustumLines,n=this.cascadeLines,s=this.cascadePlanes,o=this.shadowLines;for(let l=0,c=n.length;l<c;l++){const h=n[l],u=s[l],d=o[l];h.visible=e,u.visible=e&&t,d.visible=i}r.visible=e}update(){const e=this.csm,t=e.camera,i=e.cascades,r=e.mainFrustum,n=e.frustums,s=e.lights,o=this.frustumLines.geometry.getAttribute("position"),l=this.cascadeLines,c=this.cascadePlanes,h=this.shadowLines;for(this.position.copy(t.position),this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.updateMatrixWorld(!0);l.length>i;)this.remove(l.pop()),this.remove(c.pop()),this.remove(h.pop());for(;l.length<i;){const p=new Be.Box3Helper(new Be.Box3,16777215),m=new Be.MeshBasicMaterial({transparent:!0,opacity:.1,depthWrite:!1,side:Be.DoubleSide}),v=new Be.Mesh(new Be.PlaneBufferGeometry,m),_=new Be.Group,g=new Be.Box3Helper(new Be.Box3,16776960);_.add(g),this.add(p),this.add(v),this.add(_),l.push(p),c.push(v),h.push(_)}for(let p=0;p<i;p++){const m=n[p],v=s[p].shadow.camera,_=m.vertices.far,g=l[p],f=c[p],x=h[p],S=x.children[0];g.box.min.copy(_[2]),g.box.max.copy(_[0]),g.box.max.z+=1e-4,f.position.addVectors(_[0],_[2]),f.position.multiplyScalar(.5),f.scale.subVectors(_[0],_[2]),f.scale.z=1e-4,this.remove(x),x.position.copy(v.position),x.quaternion.copy(v.quaternion),x.scale.copy(v.scale),x.updateMatrixWorld(!0),this.attach(x),S.box.min.set(v.bottom,v.left,-v.far),S.box.max.set(v.top,v.right,-v.near)}const u=r.vertices.near,d=r.vertices.far;o.setXYZ(0,d[0].x,d[0].y,d[0].z),o.setXYZ(1,d[3].x,d[3].y,d[3].z),o.setXYZ(2,d[2].x,d[2].y,d[2].z),o.setXYZ(3,d[1].x,d[1].y,d[1].z),o.setXYZ(4,u[0].x,u[0].y,u[0].z),o.setXYZ(5,u[3].x,u[3].y,u[3].z),o.setXYZ(6,u[2].x,u[2].y,u[2].z),o.setXYZ(7,u[1].x,u[1].y,u[1].z),o.needsUpdate=!0}}const Jd=new Be.Matrix4,Fl=new Us,wi=new Be.Vector3,ha=new Be.Box3,Nl=[],Dl=[];class Zd{constructor(e){e=e||{},this.camera=e.camera,this.parent=e.parent,this.cascades=e.cascades||3,this.maxFar=e.maxFar||1e5,this.mode=e.mode||"practical",this.shadowMapSize=e.shadowMapSize||2048,this.shadowBias=e.shadowBias||1e-6,this.lightDirection=e.lightDirection||new Be.Vector3(1,-1,1).normalize(),this.lightIntensity=e.lightIntensity||1,this.lightNear=e.lightNear||1,this.lightFar=e.lightFar||2e3,this.lightMargin=e.lightMargin||200,this.customSplitsCallback=e.customSplitsCallback,this.fade=!1,this.mainFrustum=new Us,this.frustums=[],this.breaks=[],this.lights=[],this.shaders=new Map,this.createLights(),this.updateFrustums(),this.injectInclude()}createLights(){for(let e=0;e<this.cascades;e++){const t=new Be.DirectionalLight(16777215,this.lightIntensity);t.castShadow=!0,t.shadow.mapSize.width=this.shadowMapSize,t.shadow.mapSize.height=this.shadowMapSize,t.shadow.camera.near=this.lightNear,t.shadow.camera.far=this.lightFar,t.shadow.bias=this.shadowBias,this.parent.add(t),this.parent.add(t.target),this.lights.push(t)}}initCascades(){const e=this.camera;e.updateProjectionMatrix(),this.mainFrustum.setFromProjectionMatrix(e.projectionMatrix,this.maxFar),this.mainFrustum.split(this.breaks,this.frustums)}updateShadowBounds(){const e=this.frustums;for(let t=0;t<e.length;t++){const i=this.lights[t].shadow.camera,r=this.frustums[t],n=r.vertices.near,s=r.vertices.far,o=s[0];let l;o.distanceTo(s[2])>o.distanceTo(n[2])?l=s[2]:l=n[2];let c=o.distanceTo(l);if(this.fade){const h=this.camera,u=Math.max(h.far,this.maxFar),d=r.vertices.far[0].z/(u-h.near),p=.25*Math.pow(d,2)*(u-h.near);c+=p}i.left=-c/2,i.right=c/2,i.top=c/2,i.bottom=-c/2,i.updateProjectionMatrix()}}getBreaks(){const e=this.camera,t=Math.min(e.far,this.maxFar);switch(this.breaks.length=0,this.mode){case"uniform":i(this.cascades,e.near,t,this.breaks);break;case"logarithmic":r(this.cascades,e.near,t,this.breaks);break;case"practical":n(this.cascades,e.near,t,.5,this.breaks);break;case"custom":this.customSplitsCallback===void 0&&console.error("CSM: Custom split scheme callback not defined."),this.customSplitsCallback(this.cascades,e.near,t,this.breaks);break}function i(s,o,l,c){for(let h=1;h<s;h++)c.push((o+(l-o)*h/s)/l);c.push(1)}function r(s,o,l,c){for(let h=1;h<s;h++)c.push(o*(l/o)**(h/s)/l);c.push(1)}function n(s,o,l,c,h){Nl.length=0,Dl.length=0,r(s,o,l,Dl),i(s,o,l,Nl);for(let u=1;u<s;u++)h.push(Be.MathUtils.lerp(Nl[u-1],Dl[u-1],c));h.push(1)}}update(){const e=this.camera,t=this.frustums;for(let i=0;i<t.length;i++){const r=this.lights[i],n=r.shadow.camera,s=(n.right-n.left)/this.shadowMapSize,o=(n.top-n.bottom)/this.shadowMapSize;r.shadow.camera.updateMatrixWorld(!0),Jd.multiplyMatrices(r.shadow.camera.matrixWorldInverse,e.matrixWorld),t[i].toSpace(Jd,Fl);const l=Fl.vertices.near,c=Fl.vertices.far;ha.makeEmpty();for(let h=0;h<4;h++)ha.expandByPoint(l[h]),ha.expandByPoint(c[h]);ha.getCenter(wi),wi.z=ha.max.z+this.lightMargin,wi.x=Math.floor(wi.x/s)*s,wi.y=Math.floor(wi.y/o)*o,wi.applyMatrix4(r.shadow.camera.matrixWorld),r.position.copy(wi),r.target.position.copy(wi),r.target.position.x+=this.lightDirection.x,r.target.position.y+=this.lightDirection.y,r.target.position.z+=this.lightDirection.z}}injectInclude(){Be.ShaderChunk.lights_fragment_begin=qd.lights_fragment_begin,Be.ShaderChunk.lights_pars_begin=qd.lights_pars_begin}setupMaterial(e){e.defines=e.defines||{},e.defines.USE_CSM=1,e.defines.CSM_CASCADES=this.cascades,this.fade&&(e.defines.CSM_FADE="");const t=[],i=this,r=this.shaders,n=e.onBeforeCompile;e.onBeforeCompile=function(s){n&&n(s);const o=Math.min(i.camera.far,i.maxFar);i.getExtendedBreaks(t),s.uniforms.CSM_cascades={value:t},s.uniforms.cameraNear={value:i.camera.near},s.uniforms.shadowFar={value:o},r.set(e,s)},r.set(e,null)}updateUniforms(){const e=Math.min(this.camera.far,this.maxFar);this.shaders.forEach(function(t,i){if(t!==null){const r=t.uniforms;this.getExtendedBreaks(r.CSM_cascades.value),r.cameraNear.value=this.camera.near,r.shadowFar.value=e}!this.fade&&"CSM_FADE"in i.defines?(delete i.defines.CSM_FADE,i.needsUpdate=!0):this.fade&&!("CSM_FADE"in i.defines)&&(i.defines.CSM_FADE="",i.needsUpdate=!0)},this)}getExtendedBreaks(e){for(;e.length<this.breaks.length;)e.push(new Be.Vector2);e.length=this.breaks.length;for(let t=0;t<this.cascades;t++){let i=this.breaks[t],r=this.breaks[t-1]||0;e[t].x=r,e[t].y=i}}updateFrustums(){this.getBreaks(),this.initCascades(),this.updateShadowBounds(),this.updateUniforms()}remove(){for(let e=0;e<this.lights.length;e++)this.parent.remove(this.lights[e])}dispose(){const e=this.shaders;e.forEach(function(t,i){delete i.onBeforeCompile,delete i.defines.USE_CSM,delete i.defines.CSM_CASCADES,delete i.defines.CSM_FADE,delete t.uniforms.CSM_cascades,delete t.uniforms.cameraNear,delete t.uniforms.shadowFar,i.needsUpdate=!0}),e.clear()}}Zd.Helper=d1;const Oe=(()=>{class a{constructor(){this.name_=null,this.id_=null,this.components_={},this.attributes_={},this._position=new b,this._rotation=new Ge,this.handlers_={},this.parent_=null,this.dead_=!1}Destroy(){for(let i in this.components_)this.components_[i].Destroy();this.components_=null,this.parent_=null,this.handlers_=null}RegisterHandler_(i,r){i in this.handlers_||(this.handlers_[i]=[]),this.handlers_[i].push(r)}SetParent(i){this.parent_=i}SetName(i){this.name_=i}SetId(i){this.id_=i}get Name(){return this.name_}get ID(){return this.id_}get Manager(){return this.parent_}get Attributes(){return this.attributes_}get IsDead(){return this.dead_}SetActive(i){this.parent_.SetActive(this,i)}SetDead(){this.dead_=!0}AddComponent(i){i.SetParent(this),this.components_[i.constructor.name]=i,i.InitComponent()}InitEntity(){for(let i in this.components_)this.components_[i].InitEntity()}GetComponent(i){return this.components_[i]}FindEntity(i){return this.parent_.Get(i)}Broadcast(i){if(!this.IsDead&&i.topic in this.handlers_)for(let r of this.handlers_[i.topic])r(i)}SetPosition(i){this._position.copy(i),this.Broadcast({topic:"update.position",value:this._position})}SetQuaternion(i){this._rotation.copy(i),this.Broadcast({topic:"update.rotation",value:this._rotation})}get Position(){return this._position}get Quaternion(){return this._rotation}get Forward(){const i=new b(0,0,-1);return i.applyQuaternion(this._rotation),i}get Left(){const i=new b(-1,0,0);return i.applyQuaternion(this._rotation),i}get Up(){const i=new b(0,1,0);return i.applyQuaternion(this._rotation),i}Update(i,r){for(let n in this.components_){const s=this.components_[n];s.Pass==r&&s.Update(i)}}}class e{constructor(){this.parent_=null,this.pass_=0}Destroy(){}SetParent(i){this.parent_=i}SetPass(i){this.pass_=i}get Pass(){return this.pass_}InitComponent(){}InitEntity(){}GetComponent(i){return this.parent_.GetComponent(i)}get Manager(){return this.parent_.Manager}get Parent(){return this.parent_}FindEntity(i){return this.parent_.FindEntity(i)}Broadcast(i){this.parent_.Broadcast(i)}Update(i){}RegisterHandler_(i,r){this.parent_.RegisterHandler_(i,r)}}return{Entity:a,Component:e}})(),p1=(()=>{class a extends Oe.Component{constructor(){super(),this.textures_={},this.models_={},this.sounds_={},this.playing_=[]}AddModel(t,i,r){const n=i+r;this.models_[n]={loader:null,asset:t}}LoadTexture(t,i){if(!(i in this.textures_)){const r=new nr;r.setPath(t),this.textures_[i]={loader:r,texture:r.load(i)},this.textures_[i].encoding=Rt}return this.textures_[i].texture}LoadSound(t,i,r){if(i in this.sounds_){const n=this.FindEntity("threejs").GetComponent("ThreeJSController"),s=new Ko(n.listener_);s.setBuffer(this.sounds_[i].buffer),s.setRefDistance(25),s.setMaxDistance(1e3),r(s),this.playing_.push(s)}else{const n=new Zo;n.setPath(t),n.load(i,s=>{this.sounds_[i]={buffer:s};const o=this.FindEntity("threejs").GetComponent("ThreeJSController"),l=new Ko(o.listener_);l.setBuffer(s),l.setRefDistance(10),l.setMaxDistance(500),r(l),this.playing_.push(l)})}}Load(t,i,r){if(i.endsWith("glb")||i.endsWith("gltf"))this.LoadGLB(t,i,r);else if(i.endsWith("fbx"))this.LoadFBX(t,i,r);else{const n=t+i;if(this.models_[n]){const s=this.models_[n].asset.clone();r({scene:s});return}}}LoadFBX(t,i,r){if(i in this.models_)if(this.models_[i].asset==null)this.models_[i].queue.push(r);else{const n=Ps.clone(this.models_[i].asset);r(n)}else{const n=new gy;n.setPath(t),this.models_[i]={loader:n,asset:null,queue:[r]},this.models_[i].loader.load(i,s=>{this.models_[i].asset=s;const o=this.models_[i].queue;this.models_[i].queue=null;for(let l of o){const c=Ps.clone(this.models_[i].asset);l(c)}})}}LoadGLB(t,i,r){const n=t+i;if(n in this.models_)if(this.models_[n].asset==null)this.models_[n].queue.push(r);else{const s={...this.models_[n].asset};s.scene=Ps.clone(s.scene),r(s)}else{const s=new Ly;s.setPath(t),this.models_[n]={loader:s,asset:null,queue:[r]},this.models_[n].loader.load(i,o=>{this.models_[n].asset=o;const l=this.models_[n].queue;this.models_[n].queue=null;for(let c of l){const h={...o};h.scene=Ps.clone(h.scene),c(h)}})}}Update(t){for(let i=0;i<this.playing_.length;++i)this.playing_[i].isPlaying||this.playing_[i].parent.remove(this.playing_[i]);this.playing_=this.playing_.filter(i=>i.isPlaying)}}return{LoadController:a}})(),dr=function(){return{rand_range:function(a,e){return Math.random()*(e-a)+a},rand_normalish:function(){return(Math.random()+Math.random()+Math.random()+Math.random())/4*2-1},rand_int:function(a,e){return Math.round(Math.random()*(e-a)+a)},lerp:function(a,e,t){return a*(t-e)+e},smoothstep:function(a,e,t){return a=a*a*(3-2*a),a*(t-e)+e},smootherstep:function(a,e,t){return a=a*a*a*(a*(a*6-15)+10),a*(t-e)+e},clamp:function(a,e,t){return Math.min(Math.max(a,e),t)},sat:function(a){return Math.min(Math.max(a,0),1)},in_range:(a,e,t)=>a>=e&&a<=t}}(),Ul=(()=>({INPUT:3,CAMERA:1,GUN:2}))(),pr=(()=>{const a={a:65,s:83,w:87,d:68,SPACE:32,SHIFT_L:16,CTRL_L:17};class e extends Oe.Component{constructor(i){super(),this.params_=i}InitEntity(){this.current_={leftButton:!1,rightButton:!1,mouseXDelta:0,mouseYDelta:0,mouseX:0,mouseY:0},this.previous_=null,this.keys_={},this.previousKeys_={},this.target_=document,this.target_.addEventListener("mousedown",i=>this.onMouseDown_(i),!1),this.target_.addEventListener("mousemove",i=>this.onMouseMove_(i),!1),this.target_.addEventListener("mouseup",i=>this.onMouseUp_(i),!1),this.target_.addEventListener("keydown",i=>this.onKeyDown_(i),!1),this.target_.addEventListener("keyup",i=>this.onKeyUp_(i),!1),this.Parent.Attributes.Input={Keyboard:{Current:this.keys_,Previous:this.previousKeys_},Mouse:{Current:this.current_,Previous:this.previous_}},this.SetPass(Ul.INPUT)}onMouseMove_(i){this.current_.mouseX=i.pageX-window.innerWidth/2,this.current_.mouseY=i.pageY-window.innerHeight/2,this.previous_===null&&(this.previous_={...this.current_}),this.current_.mouseXDelta=this.current_.mouseX-this.previous_.mouseX,this.current_.mouseYDelta=this.current_.mouseY-this.previous_.mouseY}onMouseDown_(i){switch(this.onMouseMove_(i),i.button){case 0:{this.current_.leftButton=!0;break}case 2:{this.current_.rightButton=!0;break}}}onMouseUp_(i){switch(this.onMouseMove_(i),i.button){case 0:{this.current_.leftButton=!1;break}case 2:{this.current_.rightButton=!1;break}}}onKeyDown_(i){this.keys_[i.keyCode]=!0}onKeyUp_(i){this.keys_[i.keyCode]=!1}key(i){return!!this.keys_[i]}mouseLeftReleased(i=!0){return!this.current_.leftButton&&this.previous_.leftButton}isReady(){return this.previous_!==null}Update(i){this.previous_!==null&&(this.current_.mouseXDelta=this.current_.mouseX-this.previous_.mouseX,this.current_.mouseYDelta=this.current_.mouseY-this.previous_.mouseY,this.previous_={...this.current_},this.previousKeys_={...this.keys_})}}return{PlayerInput:e,KEYS:a}})(),f1=(()=>{class a extends Oe.Component{constructor(t){super(),this.params_=t,this.camera_=t.camera,this.group_=new ct,this.params_.scene.add(this.group_)}Destroy(){this.params_.scene.remove(this.group_)}InitEntity(){this.rotation_=new Ge,this.translation_=new b(0,3,0),this.phi_=0,this.phiSpeed_=8,this.theta_=0,this.thetaSpeed_=5,this.headBobActive_=!1,this.headBobTimer_=0,this.headBobSpeed_=15,this.headBobHeight_=.01,this.walkSpeed_=10,this.strafeSpeed_=10,this.powerTime_=1,this.power_=!1,this.Parent.Attributes.FPSCamera={group:this.group_},this.SetPass(Ul.CAMERA)}Update(t){this.updateRotation_(t),this.updateCamera_(t),this.updateTranslation_(t),this.updateHeadBob_(t),this.updatePower_(t),this.Parent.SetPosition(this.translation_),this.Parent.SetQuaternion(this.rotation_)}updateCamera_(t){this.camera_.quaternion.copy(this.rotation_),this.camera_.position.copy(this.translation_),this.camera_.position.y+=Math.sin(this.headBobTimer_*this.headBobSpeed_)*this.headBobHeight_,this.group_.position.copy(this.translation_),this.group_.quaternion.copy(this.rotation_)}updateHeadBob_(t){if(this.headBobActive_){const i=Math.PI,r=1+Math.floor((this.headBobTimer_+1e-6)*this.headBobSpeed_/i),n=r*i/this.headBobSpeed_;this.headBobTimer_=Math.min(this.headBobTimer_+t,n),this.headBobTimer_==n&&(this.headBobActive_=!1,this.Broadcast({topic:"fps.step",step:r}))}}updateTranslation_(t){const i=this.GetComponent("PlayerInput"),r=(i.key(pr.KEYS.w)?1:0)+(i.key(pr.KEYS.s)?-1:0),n=(i.key(pr.KEYS.a)?1:0)+(i.key(pr.KEYS.d)?-1:0),s=new Ge;s.setFromAxisAngle(new b(0,1,0),this.phi_);const o=new b(0,0,-1);o.applyQuaternion(s),o.multiplyScalar(r*t*this.walkSpeed_);const l=new b(-1,0,0);l.applyQuaternion(s),l.multiplyScalar(n*t*this.strafeSpeed_);const c=o.clone().add(l);this.Parent.Attributes.Physics.CharacterController.setWalkDirection(c);const h=this.Parent.Attributes.Physics.CharacterController.body_.getWorldTransform().getOrigin(),u=new b(h.x(),h.y(),h.z());this.translation_.lerp(u,.75),i.key(pr.KEYS.SPACE)&&(this.headBobActive_=!1,this.Parent.Attributes.Physics.CharacterController.jump()),i.key(pr.KEYS.SHIFT_L)?this.powerUp_(!0):this.powerUp_(!1),(r!=0||n!=0)&&(this.headBobActive_=!0)}powerUp_(t){this.power_&&t||(t&&this.powerTime_<1&&(t=!1),this.power_=t)}updatePower_(t){this.power_?(this.powerTime_-=t/5,this.powerTime_<0&&(this.power_=!1)):(this.powerTime_+=t/10,this.powerTime_=dr.sat(this.powerTime_)),this.FindEntity("ui").Broadcast({topic:"ui.charge",value:this.powerTime_});const i=this.power_,r=this.FindEntity("threejs").GetComponent("ThreeJSController");r.radialBlur_.uniforms.strength.value=dr.lerp(t*5,r.radialBlur_.uniforms.strength.value,i?.5:0),r.radialBlur_.uniforms.strength.value<.001&&!i&&(r.radialBlur_.uniforms.strength.value=0),this.walkSpeed_=i?30:10,this.Parent.Attributes.Physics.CharacterController.setJumpMultiplier(i?2.25:1)}updateRotation_(t){const i=this.GetComponent("PlayerInput"),r=i.current_.mouseXDelta/window.innerWidth,n=i.current_.mouseYDelta/window.innerHeight;this.phi_+=-r*this.phiSpeed_,this.theta_=dr.clamp(this.theta_+-n*this.thetaSpeed_,-Math.PI/3,Math.PI/3);const s=new Ge;s.setFromAxisAngle(new b(0,1,0),this.phi_);const o=new Ge;o.setFromAxisAngle(new b(1,0,0),this.theta_);const l=new Ge;l.multiply(s),l.multiply(o);const c=1-Math.pow(.01,5*t);this.rotation_.slerp(l,c)}}return{FirstPersonCamera:a}})(),m1=(()=>{class a extends Oe.Component{constructor(t){super(),this.params_=t,this.visible_=!0}Destroy(){if(!this.sprite_){this.visible_=!1;return}this.sprite_.traverse(t=>{if(t.material){let i=t.material;t.material instanceof Array||(i=[t.material]);for(let r of i)r.dispose()}t.geometry&&t.geometry.dispose()}),this.sprite_.parent&&this.sprite_.parent.remove(this.sprite_)}InitEntity(){this.OnCreateSprite_()}OnDeath_(){this.Destroy()}OnCreateSprite_(){if(!this.visible_)return;const t=128;this.element_=document.createElement("canvas"),this.context2d_=this.element_.getContext("2d"),this.context2d_.canvas.width=t,this.context2d_.canvas.height=t,this.context2d_.fillStyle="#FFFFFF",this.context2d_.lineWidth=5,this.context2d_.translate(t*.5,t*.5),this.context2d_.rotate(Math.PI/4),this.context2d_.translate(-t*.5,-t*.5);const i=()=>{this.context2d_.translate(t*.5,t*.5),this.context2d_.rotate(Math.PI/2),this.context2d_.translate(-t*.5,-t*.5),this.context2d_.beginPath(),this.context2d_.moveTo(t*.48,t*.25),this.context2d_.moveTo(t*.495,t*.45),this.context2d_.lineTo(t*.505,t*.45),this.context2d_.lineTo(t*.52,t*.25),this.context2d_.lineTo(t*.48,t*.25),this.context2d_.fill()};for(let n=0;n<4;++n)i();const r=new Xh(this.context2d_.canvas);r.anisotropy=2,this.sprite_=new Eh(new Po({map:r,color:16777215,fog:!1,depthTest:!1})),this.sprite_.scale.set(4,4,1),this.sprite_.position.set(0,5,0),this.FindEntity("threejs").GetComponent("ThreeJSController").uiScene_.add(this.sprite_)}Update(){if(!this.sprite_)return;const t=this.FindEntity("threejs").GetComponent("ThreeJSController").camera_,i=new b(0,0,-10);this.sprite_.scale.set(.15,.15*t.aspect,1),this.sprite_.position.copy(i);const r=this.FindEntity("physics").GetComponent("AmmoJSController"),n=this.Parent.Forward.clone();n.multiplyScalar(1e3),n.add(this.Parent.Position),r.RayTest(this.Parent.Position,n).filter(s=>s.name!=this.Parent.Name).length>0?this.sprite_.material.color.setRGB(1,0,0):this.sprite_.material.color.setRGB(1,1,1)}}return{Crosshair:a}})(),Kd=(()=>{class a extends Oe.Component{constructor(t){super(),this.params_=t}Destroy(){this.FindEntity("physics").GetComponent("AmmoJSController").RemoveRigidBody(this.body_)}InitEntity(){const t=this.Parent.Position,i=this.Parent.Quaternion;this.body_=this.FindEntity("physics").GetComponent("AmmoJSController").CreateKinematicCharacterController(t,i,{name:this.Parent.Name}),this.Parent.Attributes.Physics={CharacterController:this.body_},this.Broadcast({topic:"physics.loaded"})}InitComponent(){this.RegisterHandler_("update.position",t=>{this.OnPosition_(t)})}OnPosition_(t){this.OnTransformChanged_()}OnTransformChanged_(){const t=this.Parent.Position;this.Parent.Quaternion;const i=this.body_.transform_;this.body_.body_.getWorldTransform(i),i.getOrigin().setValue(t.x,t.y,t.z),this.body_.body_.setWorldTransform(i)}}return{KinematicCharacterController:a}})(),un=(()=>{class a extends Oe.Component{constructor(t){super(),this.group_=new ct,this.target_=null,this.offset_=null,this.params_=t,this.params_.scene.add(this.group_)}Destroy(){this.group_.traverse(t=>{t.material&&t.material.dispose(),t.geometry&&t.geometry.dispose()}),this.params_.scene.remove(this.group_)}InitEntity(){this.Parent.Attributes.Render={group:this.group_},this.LoadModels_()}InitComponent(){this.RegisterHandler_("update.position",t=>{this.OnPosition_(t)}),this.RegisterHandler_("update.rotation",t=>{this.OnRotation_(t)}),this.RegisterHandler_("render.visible",t=>{this.OnVisible_(t)}),this.RegisterHandler_("render.offset",t=>{this.OnOffset_(t.offset)})}OnVisible_(t){this.group_.visible=t.value}OnPosition_(t){this.group_.position.copy(t.value)}OnRotation_(t){this.group_.quaternion.copy(t.value)}OnOffset_(t){this.offset_=t,this.offset_&&this.target_&&(this.target_.position.copy(this.offset_.position),this.target_.quaternion.copy(this.offset_.quaternion))}LoadModels_(){this.FindEntity("loader").GetComponent("LoadController").Load(this.params_.resourcePath,this.params_.resourceName,t=>{this.OnLoaded_(t.scene)})}OnLoaded_(t){this.target_=t,this.group_.add(this.target_),this.group_.position.copy(this.Parent.Position),this.group_.quaternion.copy(this.Parent.Quaternion),this.target_.scale.copy(this.params_.scale),this.params_.offset&&(this.offset_=this.params_.offset),this.OnOffset_(this.offset_);const i={};if(this.params_.textures){const r=this.FindEntity("loader").GetComponent("LoadController");for(let n in this.params_.textures.names){const s=r.LoadTexture(this.params_.textures.resourcePath,this.params_.textures.names[n]);s.encoding=Rt,this.params_.textures.wrap&&(s.wrapS=at,s.wrapT=at),i[n]=s}}this.target_.traverse(r=>{let n=r.material;r.material instanceof Array||(n=[r.material]),r.geometry&&r.geometry.computeBoundingBox();for(let s of n)if(s){this.params_.onMaterial&&this.params_.onMaterial(s);for(let o in i)s.name.search(o)>=0&&(s.map=i[o]);this.params_.specular&&(s.specular=this.params_.specular),this.params_.emissive&&(s.emissive=this.params_.emissive),this.params_.colour&&(s.color=this.params_.colour)}this.params_.receiveShadow!==void 0&&(r.receiveShadow=this.params_.receiveShadow),this.params_.castShadow!==void 0&&(r.castShadow=this.params_.castShadow),this.params_.visible!==void 0&&(r.visible=this.params_.visible),r.castShadow=!0,r.receiveShadow=!0}),this.Broadcast({topic:"render.loaded",value:this.target_})}Update(t){}}return{RenderComponent:a}})(),g1=(()=>{function a(e,t){e.onBeforeCompile=i=>{i.uniforms.poopSpot={value:t},i.vertexShader=i.vertexShader.replace("#include <common>",`
      #include <common>
      varying vec4 vWorldPosition;
      varying vec3 vWorldNormal;
      `),i.vertexShader=i.vertexShader.replace("#include <fog_vertex>",`
      #include <fog_vertex>
      vWorldPosition = worldPosition;
      vWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
      `);const r=`
      uniform vec3 poopSpot;
      `;i.fragmentShader=i.fragmentShader.replace("void main()",r+"void main()"),i.fragmentShader=i.fragmentShader.replace("#include <common>",`
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

      `),i.fragmentShader=i.fragmentShader.replace("#include <emissivemap_fragment>",`
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
      `),e.userData.shader=i}}return{ModifyMaterial:a}})(),Ol=(()=>({DEFAULT:0,DECALS:1,SHIELDS:2,PARTICLES:3}))(),v1=(()=>{class a extends Oe.Component{constructor(t){super(),this.group_=new ct,this.soundGroup_=new ct,this.decals_=new ct,this.decals_.renderOrder=Ol.DECALS,this.params_=t,this.params_.scene.add(this.decals_),this.params_.scene.add(this.soundGroup_),this.lastStep_=0,this.cooldown_=0}Destroy(){this.group_.traverse(t=>{t.material&&t.material.dispose(),t.geometry&&t.geometry.dispose()}),this.group_.parent.remove(this.group_)}InitComponent(){this.RegisterHandler_("render.visible",t=>{this.OnVisible_(t)}),this.RegisterHandler_("fps.step",t=>{this.OnStep_(t)}),this.SetPass(Ul.GUN)}LoadSound_(t){const i=this.FindEntity("threejs").GetComponent("ThreeJSController"),r=new Ko(i.listener_);this.soundGroup_.add(r),new Zo().load("resources/sounds/"+t,n=>{r.setBuffer(n),r.setLoop(!1),r.setVolume(1),r.setRefDistance(1),r.play()})}InitEntity(){const t=this.FindEntity("threejs").GetComponent("ThreeJSController"),i=new nr().load("resources/textures/whitesquare.png");i.anisotropy=t.getMaxAnisotropy(),i.wrapS=at,i.wrapT=at,new ct;const r=new Oe.Entity;r.AddComponent(new un.RenderComponent({scene:this.Parent.Attributes.FPSCamera.group,resourcePath:"resources/rifle/",resourceName:"scene.gltf",scale:new b(1,1,1),emissive:new Z(0),color:new Z(16777215)})),this.Manager.Add(r),r.SetPosition(new b(.1,-.25,-.1)),r.SetActive(!1),this.gun_=r}OnVisible_(t){this.group_.visible=t.value}OnStep_(t){t.step%2,t.step%2,this.lastStep_<=0&&(this.lastStep_=.25,this.Parent.Attributes.Physics.CharacterController.onGround()&&this.LoadSound_("footstep.ogg"))}UpdateGunRecoil_(){}Update(t){this.soundGroup_.position.copy(this.Parent.Position),this.lastStep_-=t;const i=this.GetComponent("PlayerInput");if(!(!i.isReady()||(this.cooldown_-=t,this.UpdateGunRecoil_(),this.cooldown_>0))&&i.mouseLeftReleased()){this.cooldown_=.5,this.LoadSound_("shot.ogg");const r=this.FindEntity("physics").GetComponent("AmmoJSController"),n=this.Parent.Forward.clone();n.multiplyScalar(100),n.add(this.Parent.Position);const s=new b(.1,-.125,-.75),o=this.FindEntity("fx").GetComponent("BlasterSystem").CreateParticle();o.Start=s.clone(),o.Start.applyQuaternion(this.Parent.Quaternion),o.Start.add(this.Parent.Position),o.End=this.Parent.Forward.clone(),o.End.multiplyScalar(10),o.End.add(this.Parent.Position),o.Velocity=o.End.clone(),o.Velocity.sub(o.Start),o.Velocity.normalize(),o.Velocity.multiplyScalar(5),o.Colours=[new Z(4210752),new Z(2105376)],o.Length=10,o.Life=1,o.TotalLife=1,o.Width=.125;const l=r.RayTest(this.Parent.Position,n);if(l.length==0)return;for(let c=0;c<l.length;++c){const h=this.FindEntity(l[c].name);if(h.Attributes.NPC){if(h.Attributes.Stats.health>0){h.Broadcast({topic:"shot.hit",position:l[c].position,start:this.Parent.Position,end:n});return}continue}h.Attributes.Render.group.traverse(u=>{if(u.geometry){const d=l[c].position.clone(),p=d.clone();p.add(l[c].normal);const m=new ee;m.makeRotationZ(Math.PI*Math.random());const v=new ee;v.lookAt(p,d,Ie.DefaultUp),v.multiply(m);const _=new zt;_.setFromRotationMatrix(v),console.log("pos: "+d.y);const g=new ir({color:16777215,transparent:!0,depthTest:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4,roughness:.1,metalness:.1});g1.ModifyMaterial(g,d),g.customProgramCacheKey=()=>"decalMaterial";const f=10,x=new qe(new qy(u,d,_,new b(f,f,f*2)),g);x.receiveShadow=!0,this.decals_.add(x)}});return}}}}return{GunController:a}})(),Fs=(()=>{class a extends Oe.Component{constructor(i){super(),this.params_=i}Destroy(){this.FindEntity("physics").GetComponent("AmmoJSController").RemoveRigidBody(this.body_)}InitEntity(){const i=this.Parent.Position,r=this.Parent.Quaternion;if(this.body_=this.FindEntity("physics").GetComponent("AmmoJSController").CreateBox(i,r,this.params_.box,{name:this.Parent.Name}),this.params_.scene){const n=new bi(1,1,1),s=new Zt({color:65280});this.debug_=new qe(n,s),this.debug_.scale.copy(this.params_.box),this.params_.scene.add(this.debug_)}this.Parent.Attributes.roughRadius=Math.max(this.params_.box.x,Math.max(this.params_.box.y,this.params_.box.z)),this.Broadcast({topic:"physics.loaded"})}InitComponent(){this.RegisterHandler_("update.position",i=>{this.OnPosition_(i)}),this.RegisterHandler_("update.rotation",i=>{this.OnRotation_(i)}),this.RegisterHandler_("physics.collision",i=>{this.OnCollision_(i)})}OnCollision_(){}OnPosition_(i){this.OnTransformChanged_()}OnRotation_(i){this.OnTransformChanged_()}OnTransformChanged_(){const i=this.Parent.Position,r=this.Parent.Quaternion,n=this.body_.motionState_,s=this.body_.transform_;if(n.getWorldTransform(s),s.setIdentity(),s.getOrigin().setValue(i.x,i.y,i.z),s.getRotation().setValue(r.x,r.y,r.z,r.w),n.setWorldTransform(s),this.debug_){const o=i;this.debug_.position.copy(o),this.debug_.quaternion.copy(r)}}Update(i){}}class e extends Oe.Component{constructor(i){super(),this.params_=i,this.box_=new Dt}Destroy(){this.FindEntity("physics").GetComponent("AmmoJSController").RemoveRigidBody(this.body_)}InitEntity(){const i=this.Parent.Position,r=this.Parent.Quaternion;if(this.body_=this.FindEntity("physics").GetComponent("AmmoJSController").CreateBox(i,r,this.params_.box,{name:this.Parent.Name}),this.params_.scene){const n=new bi(1,1,1),s=new Zt({color:65280});this.debug_=new qe(n,s),this.debug_.scale.copy(this.params_.box),this.params_.scene.add(this.debug_)}this.Parent.Attributes.roughRadius=Math.max(this.params_.box.x,Math.max(this.params_.box.y,this.params_.box.z)),this.Broadcast({topic:"physics.loaded"})}InitComponent(){this.RegisterHandler_("update.position",i=>{this.OnPosition_(i)}),this.RegisterHandler_("update.rotation",i=>{this.OnRotation_(i)}),this.RegisterHandler_("physics.collision",i=>{this.OnCollision_(i)})}OnCollision_(){}OnPosition_(i){this.OnTransformChanged_()}OnRotation_(i){this.OnTransformChanged_()}OnTransformChanged_(){this.box_.setFromObject(this.Parent.Attributes.Render.group);const i=this.Parent.Quaternion,r=this.body_.motionState_,n=this.body_.transform_,s=this.Parent.Position;if(this.box_.isEmpty()||this.box_.getCenter(s),r.getWorldTransform(n),n.setIdentity(),n.getOrigin().setValue(s.x,s.y,s.z),n.getRotation().setValue(i.x,i.y,i.z,i.w),r.setWorldTransform(n),this.debug_){const o=s;this.debug_.position.copy(o),this.debug_.quaternion.copy(i)}}Update(i){}}return{BasicRigidBody:a,CharacterRigidBody:e}})(),_1=(()=>{class a extends Oe.Component{constructor(t){super(),this.params_=t,this.spawned_=!1,this.materials_={}}LoadMaterial_(t,i,r,n){const s=new nr,o=s.load("resources/textures/"+t);o.anisotropy=this.FindEntity("threejs").GetComponent("ThreeJSController").getMaxAnisotropy(),o.wrapS=at,o.wrapT=at,o.encoding=Rt;const l=s.load("resources/textures/"+n);l.anisotropy=this.FindEntity("threejs").GetComponent("ThreeJSController").getMaxAnisotropy(),l.wrapS=at,l.wrapT=at;const c=s.load("resources/textures/"+i);c.anisotropy=this.FindEntity("threejs").GetComponent("ThreeJSController").getMaxAnisotropy(),c.wrapS=at,c.wrapT=at;const h=s.load("resources/textures/"+r);h.anisotropy=this.FindEntity("threejs").GetComponent("ThreeJSController").getMaxAnisotropy(),h.wrapS=at,h.wrapT=at;const u=new ir({map:o,color:3158064});return u.onBeforeCompile=d=>{d.uniforms.iTime={value:0},d.vertexShader=d.vertexShader.replace("#include <common>",`
        #include <common>
        varying vec4 vWorldPosition;
        varying vec3 vWorldNormal;
        `),d.vertexShader=d.vertexShader.replace("#include <fog_vertex>",`
        #include <fog_vertex>
        vWorldPosition = worldPosition;
        vWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
        `),d.fragmentShader=d.fragmentShader.replace("#include <common>",`
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

        `),d.fragmentShader=d.fragmentShader.replace("#include <emissivemap_fragment>",`
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

        `),u.userData.shader=d},u.customProgramCacheKey=()=>o,this.FindEntity("threejs").GetComponent("ThreeJSController").csm_.setupMaterial(u),u}BuildHackModel_(){this.materials_.checkerboard=this.LoadMaterial_("whitesquare.png",null,null,null),this.materials_.vintageTile=this.LoadMaterial_("vintage-tile1_albedo.png","vintage-tile1_normal.png","vintage-tile1_roughness.png","vintage-tile1_metallic.png"),this.materials_.hexagonPavers=this.LoadMaterial_("hexagon-pavers1_albedo.png","hexagon-pavers1_normal.png","hexagon-pavers1_roughness.png","hexagon-pavers1_metallic.png"),this.materials_.dampDungeon=this.LoadMaterial_("damp-dungeon-floor_albedo.png","damp-dungeon-floor_normal.png","damp-dungeon-floor_roughness.png","damp-dungeon-floor_metallic.png"),this.materials_.rockSliced=this.LoadMaterial_("rock_sliced_albedo.png","rock_sliced_normal.png","rock_sliced_roughness.png","rock_sliced_metallic.png"),this.materials_.filthySpacePanels=this.LoadMaterial_("filthy-space-panels_albedo.png","filthy-space-panels_normal.png","filthy-space-panels_roughness.png","filthy-space-panels_metallic.png"),this.materials_.paintedWornAsphalt=this.LoadMaterial_("painted-worn-asphalt_albedo.png","painted-worn-asphalt_normal.png","painted-worn-asphalt_roughness.png","painted-worn-asphalt_metallic.png"),this.materials_.brokenDownConcrete2=this.LoadMaterial_("broken_down_concrete2_albedo.png","broken_down_concrete2_normal.png","broken_down_concrete2_roughness.png","broken_down_concrete2_metallic.png"),this.materials_.stucco1=this.LoadMaterial_("stucco1_albedo.png","stucco1_normal.png","stucco1_roughness.png","stucco1_metallic.png");const t=new qe(new bi(1,1,1,10,10,10),this.materials_.checkerboard);t.castShadow=!0,t.receiveShadow=!0,this.FindEntity("loader").GetComponent("LoadController").AddModel(t,"built-in.","ground");const i=new qe(new bi(1,1,1,10,10,10),this.materials_.checkerboard);i.castShadow=!0,i.receiveShadow=!0,this.FindEntity("loader").GetComponent("LoadController").AddModel(i,"built-in.","box");const r=new qe(new kl(.5,.5,1,8,1),this.materials_.hexagonPavers);r.castShadow=!0,r.receiveShadow=!0,this.FindEntity("loader").GetComponent("LoadController").AddModel(r,"built-in.","column"),this.currentTime_=0}Update(t){if(this.currentTime_+=t,this.materials_.checkerboard&&this.materials_.checkerboard.userData.shader&&(this.materials_.checkerboard.userData.shader.uniforms.iTime.value=this.currentTime_,this.materials_.checkerboard.needsUpdate=!0),this.spawned_)return;this.spawned_=!0,this.BuildHackModel_();const i=new Oe.Entity;i.AddComponent(new un.RenderComponent({scene:this.params_.scene,resourcePath:"built-in.",resourceName:"ground",scale:new b(100,20,100),emissive:new Z(0),color:new Z(16777215)})),i.AddComponent(new Fs.BasicRigidBody({box:new b(100,20,100)})),this.Manager.Add(i,"ground"),i.SetPosition(new b(0,-12,0)),i.SetActive(!1);const r=[["anubis",10,[-1,-1]],["robot",1,[-1,1]],["buddha",10,[1,-1]],["skull",10,[1,1]]];for(let n=0;n<r.length;++n){const s=new b(r[n][2][0]*50,0,r[n][2][1]*50);{const l=new Oe.Entity;l.AddComponent(new un.RenderComponent({scene:this.params_.scene,resourcePath:"built-in.",resourceName:"box",scale:new b(20,30,20),emissive:new Z(0),color:new Z(8421504)})),l.AddComponent(new Fs.BasicRigidBody({box:new b(20,30,20)})),this.Manager.Add(l),l.SetPosition(s),l.SetActive(!1)}const o=new Oe.Entity;o.AddComponent(new un.RenderComponent({scene:this.params_.scene,resourcePath:"resources/models/"+r[n][0]+"/",resourceName:"scene.glb",scale:new b(r[n][1],r[n][1],r[n][1]),emissive:new Z(0),color:new Z(16777215)})),this.Manager.Add(o),o.SetPosition(new b(s.x,s.y+15,s.z)),o.SetActive(!1)}for(let n=-2;n<=2;++n)for(let s=-2;s<=2;++s){const o=new Oe.Entity;o.AddComponent(new un.RenderComponent({scene:this.params_.scene,resourcePath:"built-in.",resourceName:"ground",scale:new b(50,20,50),emissive:new Z(0),color:new Z(16777215)})),o.AddComponent(new Fs.BasicRigidBody({box:new b(50,20,50)})),this.Manager.Add(o),o.SetPosition(new b(n*50,dr.rand_range(-30,-10),s*50)),o.SetActive(!1)}for(let n=-3;n<=3;++n)for(let s=-3;s<=3;++s){if(n==0&&s==0)continue;const o=new Oe.Entity;o.AddComponent(new un.RenderComponent({scene:this.params_.scene,resourcePath:"built-in.",resourceName:"box",scale:new b(8,10,8),emissive:new Z(0),color:new Z(16777215)})),o.AddComponent(new Fs.BasicRigidBody({box:new b(8,10,8)})),this.Manager.Add(o,"box."+n+"."+s),o.SetPosition(new b(n*20,1,s*20)),o.SetActive(!1)}this.FindEntity("spawners").GetComponent("TargetSpawner").Spawn({scene:this.params_.scene,position:new b(0,2,5)})}}return{Level1Builder:a}})(),$d=(()=>{class a extends Oe.Component{constructor(t){super(),this.stats_={...t}}InitComponent(){this.RegisterHandler_("shot.hit",t=>this.OnDamage_(t)),this.RegisterHandler_("health.add-experience",t=>this.OnAddExperience_(t)),this.UpdateUI_()}InitEntity(){this.Parent.Attributes.Stats=this.stats_}IsAlive(){return this.stats_.health>0}get Health(){return this.stats_.health}UpdateUI_(){this.stats_.updateUI&&document.getElementById("health-bar")}_ComputeLevelXPRequirement(){const t=this.stats_.level;return Math.round(2**(t-1)*100)}OnAddExperience_(t){this.stats_.experience+=t.value;const i=this._ComputeLevelXPRequirement();this.stats_.experience<i||(this.stats_.level+=1,this.stats_.strength+=1,this.stats_.wisdomness+=1,this.stats_.benchpress+=1,this.stats_.curl+=2,this.FindEntity("level-up-spawner").GetComponent("LevelUpComponentSpawner").Spawn(this.Parent.Position),this.Broadcast({topic:"health.levelGained",value:this.stats_.level}),this.UpdateUI_())}OnDeath_(){this.Broadcast({topic:"health.death"})}OnHealthChanged_(){this.stats_.health==0&&this.OnDeath_(),this.Broadcast({topic:"health.update",health:this.stats_.health,maxHealth:this.stats_.maxHealth}),this.UpdateUI_()}OnDamage_(t){const i=this.stats_.health;this.stats_.health=Math.max(0,this.stats_.health-25),i!=this.stats_.health&&this.OnHealthChanged_()}}return{HealthComponent:a}})(),x1=(()=>{class a{constructor(){this._states={},this._currentState=null}_AddState(t,i){this._states[t]=i}get State(){return this._currentState.Name}SetState(t){const i=this._currentState;if(i){if(i.Name==t)return;i.Exit()}const r=new this._states[t](this);this._currentState=r,r.Enter(i)}Update(t,i){this._currentState&&this._currentState.Update(t,i)}}return{FiniteStateMachine:a}})(),Ns=(()=>{class a{constructor(l){this._parent=l}Enter(){}Exit(){}Update(){}}class e extends a{constructor(l){super(l),this._action=null}get Name(){return"death"}Enter(l){if(this._action=this._parent._proxy.animations.death.action,this._action.reset(),this._action.setLoop(Ta,1),this._action.clampWhenFinished=!0,l){const c=this._parent._proxy.animations[l.Name].action;this._action.crossFadeFrom(c,.2,!0),this._action.play()}else this._action.play()}Exit(){}Update(l){}}class t extends a{constructor(l){super(l),this._action=null,this._FinishedCallback=()=>{this._Finished()}}get Name(){return"dance"}Enter(l){if(this._action=this._parent._proxy.animations.dance.action,this._action.getMixer().addEventListener("finished",this._FinishedCallback),this._action.reset(),this._action.setLoop(Ta,1),this._action.clampWhenFinished=!0,l){const c=this._parent._proxy.animations[l.Name].action;this._action.crossFadeFrom(c,.2,!0),this._action.play()}else this._action.play()}_Finished(){this._Cleanup(),this._parent.SetState("idle")}_Cleanup(){this._action&&this._action.getMixer().removeEventListener("finished",this._FinishedCallback)}Exit(){this._Cleanup()}Update(l){}}class i extends a{constructor(l){super(l),this._action=null,this._FinishedCallback=()=>{this._Finished()}}get Name(){return"attack"}Enter(l){if(this._action=this._parent._proxy.animations.attack.action,this._action.getMixer().addEventListener("finished",this._FinishedCallback),l){const c=this._parent._proxy.animations[l.Name].action;this._action.reset(),this._action.setLoop(Ta,1),this._action.clampWhenFinished=!0,this._action.crossFadeFrom(c,.4,!0),this._action.play()}else this._action.play()}_Finished(){this._Cleanup(),this._parent.SetState("idle")}_Cleanup(){this._action&&this._action.getMixer().removeEventListener("finished",this._FinishedCallback)}Exit(){this._Cleanup()}Update(l){}}class r extends a{constructor(l){super(l)}get Name(){return"walk"}Enter(l){const c=this._parent._proxy.animations.walk.action;if(l){const h=this._parent._proxy.animations[l.Name].action;if(c.enabled=!0,l.Name=="run"){const u=c.getClip().duration/h.getClip().duration;c.time=h.time*u}else c.time=0,c.setEffectiveTimeScale(1),c.setEffectiveWeight(1);c.crossFadeFrom(h,.1,!0),c.play()}else c.play()}Exit(){}Update(l,c){if(c){if(c._keys.forward||c._keys.backward){c._keys.shift&&this._parent.SetState("run");return}this._parent.SetState("idle")}}}class n extends a{constructor(l){super(l)}get Name(){return"run"}Enter(l){const c=this._parent._proxy.animations.run.action;if(l){const h=this._parent._proxy.animations[l.Name].action;if(c.enabled=!0,l.Name=="walk"){const u=c.getClip().duration/h.getClip().duration;c.time=h.time*u}else c.time=0,c.setEffectiveTimeScale(1),c.setEffectiveWeight(1);c.crossFadeFrom(h,.1,!0),c.play()}else c.play()}Exit(){}Update(l,c){if(c){if(c._keys.forward||c._keys.backward){c._keys.shift||this._parent.SetState("walk");return}this._parent.SetState("idle")}}}class s extends a{constructor(l){super(l)}get Name(){return"idle"}Enter(l){const c=this._parent._proxy.animations.idle.action;if(l){const h=this._parent._proxy.animations[l.Name].action;c.time=0,c.enabled=!0,c.setEffectiveTimeScale(1),c.setEffectiveWeight(1),c.crossFadeFrom(h,.25,!0),c.play()}else c.play()}Exit(){}Update(l,c){c&&(c._keys.forward||c._keys.backward?this._parent.SetState("walk"):c._keys.space?this._parent.SetState("attack"):c._keys.backspace&&this._parent.SetState("dance"))}}return{State:a,DanceState:t,AttackState:i,IdleState:s,WalkState:r,RunState:n,DeathState:e}})(),y1=(()=>{const a=new ee,e=new Ge;class t extends x1.FiniteStateMachine{constructor(s){super(),this._proxy=s,this.Init_()}Init_(){this._AddState("idle",Ns.IdleState),this._AddState("run",Ns.RunState),this._AddState("death",Ns.DeathState),this._AddState("shoot",Ns.AttackState)}}class i{constructor(s){this.animations_=s}get animations(){return this.animations_}}class r extends Oe.Component{constructor(s){super(),this.params_=s}InitEntity(){this.Init_()}Init_(){this.decceleration_=new b(-5e-4,-1e-4,-5),this.acceleration_=new b(1,.125,100),this.velocity_=new b(0,0,0),this.group_=new ct,this.params_.scene.add(this.group_),this.animations_={},this.Parent.Attributes.Render={group:this.group_},this.Parent.Attributes.NPC=!0,this.LoadModels_()}InitComponent(){this.RegisterHandler_("health.death",s=>{this.OnDeath_(s)}),this.RegisterHandler_("update.position",s=>{this.OnUpdatePosition_(s)}),this.RegisterHandler_("update.rotation",s=>{this.OnUpdateRotation_(s)})}OnUpdatePosition_(s){this.group_.position.copy(s.value)}OnUpdateRotation_(s){this.group_.quaternion.copy(s.value)}OnDeath_(s){this.stateMachine_.SetState("death")}LoadModels_(){this.FindEntity("loader").GetComponent("LoadController").Load(this.params_.model.path,this.params_.model.name,s=>{this.target_=s.scene,this.group_.add(this.target_),this.target_.scale.setScalar(this.params_.model.scale),this.target_.position.set(0,-2.35,0),this.target_.rotateY(Math.PI),this.bones_={},this.target_.traverse(l=>{if(l.skeleton)for(let c of l.skeleton.bones)this.bones_[c.name]=c}),this.target_.traverse(l=>{l.castShadow=!0,l.receiveShadow=!0,l.material&&l.material.map&&(l.material.map.encoding=Rt)}),this.mixer_=new tl(this.target_);const o=l=>{for(let c=0;c<s.animations.length;c++)if(s.animations[c].name.includes(l)){const h=s.animations[c],u=this.mixer_.clipAction(h);return{clip:h,action:u}}return null};this.animations_.idle=o("Idle"),this.animations_.walk=o("Walk"),this.animations_.run=o("Run"),this.animations_.death=o("Death"),this.animations_.attack=o("Attack"),this.animations_.shoot=o("Shoot"),this.stateMachine_=new t(new i(this.animations_)),this.queuedState_?(this.stateMachine_.SetState(this.queuedState_),this.queuedState_=null):this.stateMachine_.SetState("idle"),this.Broadcast({topic:"load.character",model:this.group_,bones:this.bones_})})}FindPlayer_(){const s=this.FindEntity("player").Position.clone();return s.sub(this.Parent.Position),s.y=0,s}UpdateAI_(s){const o=this.FindPlayer_(),l=o.clone().normalize();if(o.length()==0||o.length()>50){this.stateMachine_.SetState("idle"),this.Parent.Attributes.Physics.CharacterController.setWalkDirection(new b(0,0,0));return}if(a.lookAt(new b(0,0,0),l,new b(0,1,0)),e.setFromRotationMatrix(a),this.Parent.SetQuaternion(e),o.length()<20){this.stateMachine_.SetState("shoot"),this.Parent.Attributes.Physics.CharacterController.setWalkDirection(new b(0,0,0));return}const c=1,h=0,u=new b(0,0,-1);u.applyQuaternion(e),u.multiplyScalar(c*s*2);const d=new b(-1,0,0);d.applyQuaternion(e),d.multiplyScalar(h*s*2);const p=u.clone().add(d);this.Parent.Attributes.Physics.CharacterController.setWalkDirection(p),this.stateMachine_.SetState("run")}Update(s){if(!this.stateMachine_)return;const o=this.GetComponent("BasicCharacterControllerInput");this.stateMachine_.Update(s,o),this.mixer_&&this.mixer_.update(s),this.stateMachine_._currentState._action&&this.Broadcast({topic:"player.action",action:this.stateMachine_._currentState.Name,time:this.stateMachine_._currentState._action.time});const l=this.Parent.Attributes.Physics.CharacterController.body_.getWorldTransform().getOrigin(),c=new b(l.x(),l.y(),l.z());this.Parent.SetPosition(c)}}return{TargetFSM:t,TargetCharacterController:r}})(),w1=(()=>{const a=`
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
  }`,e=`
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
  }`;class t extends Oe.Component{constructor(r){super(),this.params_=r}InitEntity(){const r=new Vl(2,6),n=new mt({uniforms:{time:{value:0},dissolveTime:{value:1e8},strength:{value:1},health:{value:1},hit:{value:new b(0,0,0)},hitTime:{value:0}},vertexShader:a,fragmentShader:e,transparent:!0,blending:hc,blendEquation:qi,blendSrc:wn,blendDst:wn,blendSrcAlpha:wn,blendDstAlpha:wn,blending:xa});this.model_=new qe(r,n),this.model_.position.set(0,-1,0),this.group_=new ct,this.group_.add(this.model_),this.group_.renderOrder=Ol.SHIELDS,this.params_.scene.add(this.group_),this.dead_=!1}InitComponent(){this.RegisterHandler_("health.death",r=>{this.OnDeath_(r)}),this.RegisterHandler_("update.position",r=>{this.OnUpdatePosition_(r)}),this.RegisterHandler_("update.rotation",r=>{this.OnUpdateRotation_(r)}),this.RegisterHandler_("shot.hit",r=>{this.OnHit_(r)}),this.RegisterHandler_("health.update",r=>{this.OnDamage_(r)})}OnUpdatePosition_(r){this.group_.position.copy(r.value)}OnUpdateRotation_(r){this.group_.quaternion.copy(r.value)}OnHit_(r){if(this.dead_)return;this.model_.updateWorldMatrix(!0,!0);const n=new b(0,0,0);n.applyMatrix4(this.model_.matrixWorld);const s=r.end.clone().sub(r.start).normalize(),o=new er(r.start,s),l=new Li(n,2),c=new b;o.intersectSphere(l,c),this.model_.material.uniforms.hit.value.copy(c)}OnDeath_(r){this.dead_=!0,this.model_.material.uniforms.dissolveTime.value=this.model_.material.uniforms.time.value}OnDamage_(r){this.dead_||(this.model_.material.uniforms.hitTime.value=this.model_.material.uniforms.time.value,this.model_.material.uniforms.health.value=this.Parent.Attributes.Stats.health/this.Parent.Attributes.Stats.maxHealth)}Update(r){this.model_.material.uniforms.time.value+=r}}return{ShieldComponent:t}})(),Bl=(()=>{class a extends Oe.Component{constructor(r){super(),this.params_=r}Spawn(){const r=new Oe.Entity;return r.SetPosition(new b(0,2,0)),r.AddComponent(new pr.PlayerInput(this.params_)),r.AddComponent(new f1.FirstPersonCamera(this.params_)),r.AddComponent(new m1.Crosshair(this.params_)),r.AddComponent(new Kd.KinematicCharacterController(this.params_)),r.AddComponent(new v1.GunController(this.params_)),r.AddComponent(new $d.HealthComponent({health:100,maxHealth:100,updateUI:!0})),this.Manager.Add(r,"player"),r}}class e extends Oe.Component{constructor(r){super(),this.params_=r}Spawn(){const r=new Oe.Entity;return r.SetPosition(new b(0,0,0)),r.AddComponent(new _1.Level1Builder(this.params_)),this.Manager.Add(r,"levelBuilder"),r}}class t extends Oe.Component{constructor(r){super(),this.params_=r}Spawn(r){const n=new Oe.Entity;return n.AddComponent(new y1.TargetCharacterController({scene:this.params_.scene,model:{path:"resources/quaternius/Enemies/",name:"Enemy_Large_Gun.glb",scale:2}})),n.AddComponent(new Kd.KinematicCharacterController(this.params_)),n.AddComponent(new w1.ShieldComponent(this.params_)),n.AddComponent(new $d.HealthComponent({health:100,maxHealth:100})),this.Manager.Add(n),n.SetPosition(r.position),n.SetActive(!0),n}}return{PlayerSpawner:a,Level1Spawner:e,TargetSpawner:t}})(),b1=(()=>{class a{constructor(t,i){const[r,n]=i;this._cells=[...Array(r)].map(s=>[...Array(n)].map(o=>null)),this._dimensions=i,this._bounds=t,this._queryIds=0,this.ids_=0}_GetCellIndex(t){const i=dr.sat((t[0]-this._bounds[0][0])/(this._bounds[1][0]-this._bounds[0][0])),r=dr.sat((t[1]-this._bounds[0][1])/(this._bounds[1][1]-this._bounds[0][1])),n=Math.floor(i*(this._dimensions[0]-1)),s=Math.floor(r*(this._dimensions[1]-1));return[n,s]}NewClient(t,i){const r={position:t,dimensions:i,_cells:{min:null,max:null,nodes:null},_queryId:-1,id_:this.ids_++};return this._Insert(r),r}UpdateClient(t){const[i,r]=t.position,[n,s]=t.dimensions,o=this._GetCellIndex([i-n/2,r-s/2]),l=this._GetCellIndex([i+n/2,r+s/2]);t._cells.min[0]==o[0]&&t._cells.min[1]==o[1]&&t._cells.max[0]==l[0]&&t._cells.max[1]==l[1]||(this.Remove(t),this._Insert(t))}FindNear(t,i){const[r,n]=t,[s,o]=i,l=this._GetCellIndex([r-s/2,n-o/2]),c=this._GetCellIndex([r+s/2,n+o/2]),h=[],u=this._queryIds++;for(let d=l[0],p=c[0];d<=p;++d)for(let m=l[1],v=c[1];m<=v;++m){let _=this._cells[d][m];for(;_;){const g=_.client;_=_.next,g._queryId!=u&&(g._queryId=u,h.push(g))}}return h}_Insert(t){const[i,r]=t.position,[n,s]=t.dimensions,o=this._GetCellIndex([i-n/2,r-s/2]),l=this._GetCellIndex([i+n/2,r+s/2]),c=[];for(let h=o[0],u=l[0];h<=u;++h){c.push([]);for(let d=o[1],p=l[1];d<=p;++d){const m=h-o[0],v={next:null,prev:null,client:t};c[m].push(v),v.next=this._cells[h][d],this._cells[h][d]&&(this._cells[h][d].prev=v),this._cells[h][d]=v}}t._cells.min=o,t._cells.max=l,t._cells.nodes=c}Remove(t){const i=t._cells.min,r=t._cells.max;for(let n=i[0],s=r[0];n<=s;++n)for(let o=i[1],l=r[1];o<=l;++o){const c=n-i[0],h=o-i[1],u=t._cells.nodes[c][h];u.next&&(u.next.prev=u.prev),u.prev&&(u.prev.next=u.next),u.prev||(this._cells[n][o]=u.next)}t._cells.min=null,t._cells.max=null,t._cells.nodes=null}}return{SpatialHashGrid:a}})(),ep={shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Z(0)},defaultOpacity:{value:0}},vertexShader:`
		varying vec2 vUv;
		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;
		varying vec2 vUv;
		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			vec3 luma = vec3( 0.299, 0.587, 0.114 );
			float v = dot( texel.xyz, luma );
			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );
			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );
			alpha = texel.w;
			gl_FragColor = mix( outputColor, texel, alpha );
		}`},zl={shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},strength:{value:.5},center:{value:new X(0,0)},resolution:{value:new X(0,0)}},vertexShader:`
		varying vec2 vUv;
		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
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
    `},S1=(()=>{const a=`
  varying vec3 vWorldPosition;
  
  void main() {
    vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
    vWorldPosition = worldPosition.xyz;
  
    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
  }`,e=`
  uniform samplerCube background;
  uniform samplerCube stars;
  uniform float time;
  
  varying vec3 vWorldPosition;
  
  void main() {
    vec3 viewDirection = normalize(vWorldPosition - cameraPosition);
    vec3 sunDirection = normalize(vec3(0.0, 0.25, 1.0));
    vec3 sky = sRGBToLinear(textureCube(background, viewDirection)).xyz;

    float c1 = cos(time * 0.02);
    float s1 = sin(time * 0.02);
    float c2 = cos(time * 0.0075);
    float s2 = sin(time * 0.0075);
    mat3 r1 = mat3(
        1.0, 0.0, 0.0,
        0.0, c1, -s1,
        0, s1, c1);
    mat3 r2 = mat3(
        c2, 0.0, s2,
        0.0, 1.0, 0.0,
        -s2, 0.0, c2);
    vec3 stars = sRGBToLinear(textureCube(stars, r1 * r2 * viewDirection)).xyz;
  
    // sky = smoothstep(vec3(0.0), vec3(1.0), sky);
    // sky = sky * mix(vec3(1.0, 0.6, 0.0), vec3(1.0), 0.75);
    // sky = pow(sky, vec3(0.8, 1.5, 1.5));
    // sky = smoothstep(vec3(0.0), vec3(1.0), sky);

    // VIDEO HACK
    sky = pow(sky, vec3(1.5, 1.5, 1.2));

    vec3 luma = vec3( 0.299, 0.587, 0.114 );
    float starAlpha = clamp(dot(sky, luma) + 0.5, 0.0, 1.0);
    starAlpha = pow(starAlpha, 1.5);
    // VIDEO HACK
    sky = mix(stars, sky, starAlpha);

    float bloom = 0.2 * pow(max(0.0, dot(viewDirection, sunDirection)), 16.0);
    // VIDEO HACK
    // float bloom = 0.0;
    // gl_FragColor = vec4(sky, 1.0);
    gl_FragColor = vec4(sky * (1.0 - bloom * 2.0), bloom);
  }`;class t extends Oe.Component{constructor(){super()}InitEntity(){Le.emissivemap_fragment+=`
diffuseColor.a = 0.0;`,this.threejs_=new Ve({antialias:!1}),this.threejs_.shadowMap.enabled=!0,this.threejs_.shadowMap.type=sc,this.threejs_.setPixelRatio(window.devicePixelRatio),this.threejs_.setSize(window.innerWidth,window.innerHeight),this.threejs_.domElement.id="threejs",this.threejs_.physicallyCorrectLights=!0,document.getElementById("container").appendChild(this.threejs_.domElement),window.addEventListener("resize",()=>{this.onWindowResize_()},!1);const r=60,n=1920/1080,s=.1,o=1e3;this.camera_=new _t(r,n,s,o),this.camera_.position.set(20,5,15),this.scene_=new Un,this.scene_.add(this.camera_),this.decalCamera_=new _t(r,n,s,o),this.decalCamera_.position.set(20,5,15),this.sceneDecals_=new Un,this.sceneDecals_.add(this.decalCamera_),this.listener_=new Su,this.camera_.add(this.listener_),this.uiCamera_=new ar(-1,1,1,-1,1,1e3),this.uiScene_=new Un,this.scene_.fog=new ua(14674419,5e-5),this.sceneDecals_.fog=new ua(14674419,5e-5);let l=new ps(15985598,.75);l.position.set(-20,100,20),l.target.position.set(0,0,0),l.intensity=2.4;const c=l.position.clone();c.normalize(),c.multiplyScalar(-1),this.sun_=l,this.csm_=new Zd({maxFar:this.camera_.far,cascades:4,mode:"logarithmic",parent:this.scene_,shadowMapSize:4096,lightDirection:c,camera:this.camera_,lightNear:1,lightFar:1e3}),this.csm_.fade=!0;const h=new Z(15985598);for(let v=0;v<this.csm_.lights.length;++v)this.csm_.lights[v].color=h,this.csm_.lights[v].intensity=1.5;const u=16777088,d=8421504;l=new cu(u,d,.75),l.color.setHSL(.6,1,.6),l.groundColor.setHSL(.095,1,.75),l.position.set(0,4,0),this.scene_.add(l),l=new qo(16777215,.01),this.scene_.add(l),this.listener_=new Su,this.camera_.add(this.listener_);const p={minFilter:lt,magFilter:lt,format:Ct,type:li},m=new Ft(window.innerWidth,window.innerHeight,p);this.writeBuffer_=m,this.readBuffer_=m.clone(),this.composer_=new Yx(this.threejs_),this.composer_.setPixelRatio(window.devicePixelRatio),this.composer_.setSize(window.innerWidth,window.innerHeight),this.fxaaPass_=new Zn(qx),this.uiPass_=new nl(this.uiScene_,this.uiCamera_),this.uiPass_.clear=!1,this.motionBlurPass_=new xt(this.scene_,this.camera_),this.motionBlurPass_.samples=32,this.motionBlurPass_.smearIntensity=.02,this.motionBlurPass_.interpolateGeometry=!0,this.gtaoPass_=new ot(this.scene_,this.camera_),this.bloomPass_=new fn(new X(window.innerWidth,window.innerHeight),1.5,.4,.85),this.bloomPass_.radius=0,this.bloomPass_.materialHighPassFilter=new mt({uniforms:this.bloomPass_.highPassUniforms,vertexShader:ep.vertexShader,fragmentShader:ep.fragmentShader,defines:{}}),this.radialBlur_=new Zn(new mt({uniforms:zl.uniforms,vertexShader:zl.vertexShader,fragmentShader:zl.fragmentShader})),this.opaquePass_=new nl(this.scene_,this.camera_),this.decalPass_=new nl(this.sceneDecals_,this.decalCamera_),this.gammaPass_=new Zn(Qx),this.composer_.addPass(this.opaquePass_),this.composer_.addPass(this.gtaoPass_),this.composer_.addPass(this.bloomPass_),this.composer_.addPass(this.uiPass_),this.composer_.addPass(this.gammaPass_),this.composer_.addPass(this.fxaaPass_),this.LoadBackground_(),this.onWindowResize_()}LoadBackground_(){const r=new lu,n=r.load(["resources/sky/Cold_Sunset__Cam_2_Left+X.png","resources/sky/Cold_Sunset__Cam_3_Right-X.png","resources/sky/Cold_Sunset__Cam_4_Up+Y.png","resources/sky/Cold_Sunset__Cam_5_Down-Y.png","resources/sky/Cold_Sunset__Cam_0_Front+Z.png","resources/sky/Cold_Sunset__Cam_1_Back-Z.png"]);n.encoding=Rt;const s=r.load(["resources/sky/space-posx.jpg","resources/sky/space-negx.jpg","resources/sky/space-posy.jpg","resources/sky/space-negy.jpg","resources/sky/space-posz.jpg","resources/sky/space-negz.jpg"]);s.encoding=Rt;const o={background:{value:n},stars:{value:s},time:{value:0}},l=new Xl(1e3,32,15),c=new mt({uniforms:o,vertexShader:a,fragmentShader:e,side:nt});this.sky_=new qe(l,c),this.scene_.add(this.sky_)}getMaxAnisotropy(){return this.threejs_.capabilities.getMaxAnisotropy()}onWindowResize_(){this.camera_.aspect=window.innerWidth/window.innerHeight,this.camera_.updateProjectionMatrix(),this.threejs_.setSize(window.innerWidth,window.innerHeight),this.composer_.setSize(window.innerWidth,window.innerHeight),this.csm_.updateFrustums();const r=this.threejs_.getPixelRatio();this.fxaaPass_.material.uniforms.resolution.value.x=1/(window.innerWidth*r),this.fxaaPass_.material.uniforms.resolution.value.y=1/(window.innerHeight*r)}swapBuffers_(){const r=this.writeBuffer_;this.writeBuffer_=this.readBuffer_,this.readBuffer_=r}Render(r){this.csm_.update(this.camera_.matrix),this.opaquePass_.clearColor=new Z(0),this.opaquePass_.clearAlpha=0,this.opaquePass_.render(this.threejs_,this.writeBuffer_,this.readBuffer_,r,!1),this.bloomPass_.render(this.threejs_,this.writeBuffer_,this.readBuffer_,r,!1),this.uiPass_.render(this.threejs_,this.writeBuffer_,this.readBuffer_,r,!1),this.radialBlur_.uniforms.center.value.set(window.innerWidth*.5,window.innerHeight*.5),this.radialBlur_.uniforms.resolution.value.set(window.innerWidth,window.innerHeight),this.radialBlur_.render(this.threejs_,this.writeBuffer_,this.readBuffer_,r,!1),this.swapBuffers_(),this.fxaaPass_.render(this.threejs_,this.writeBuffer_,this.readBuffer_,r,!1),this.swapBuffers_(),this.gammaPass_.renderToScreen=!0,this.gammaPass_.render(this.threejs_,this.writeBuffer_,this.readBuffer_,r,!1)}Update(r){const n=this.FindEntity("player");if(!n)return;const s=n._position;this.sun_.position.copy(s),this.sun_.position.add(new b(-20,100,20)),this.sun_.target.position.copy(s),this.sun_.updateMatrixWorld(),this.sun_.target.updateMatrixWorld(),this.sky_&&(this.sky_.material.uniforms.time.value+=r),this.sky_.position.copy(s)}}return{ThreeJSController:t}})(),M1=(()=>{const a={CF_STATIC_OBJECT:1,CF_KINEMATIC_OBJECT:2,CF_NO_CONTACT_RESPONSE:4,CF_CUSTOM_MATERIAL_CALLBACK:8,CF_CHARACTER_OBJECT:16},e=75;class t{constructor(){}Destroy(){}Init(s,o,l){this.transform_=new Ammo.btTransform,this.transform_.setIdentity(),this.transform_.setOrigin(new Ammo.btVector3(s.x,s.y,s.z)),this.transform_.setRotation(new Ammo.btQuaternion(o.x,o.y,o.z,o.w)),this.shape_=new Ammo.btCapsuleShape(1,3),this.shape_.setMargin(.05),this.body_=new Ammo.btPairCachingGhostObject,this.body_.setWorldTransform(this.transform_),this.body_.setCollisionShape(this.shape_),this.body_.setCollisionFlags(a.CF_CHARACTER_OBJECT),this.body_.activate(!0),this.controller_=new Ammo.btKinematicCharacterController(this.body_,this.shape_,.35,1),this.controller_.setUseGhostSweepTest(!0),this.controller_.setUpInterpolate(),this.controller_.setGravity(e),this.controller_.setMaxSlope(Math.PI/3),this.controller_.canJump(!0),this.controller_.setJumpSpeed(e/3),this.controller_.setMaxJumpHeight(100),this.userData_=new Ammo.btVector3(0,0,0),this.userData_.userData=l,this.body_.setUserPointer(this.userData_),this.tmpVec3_=new Ammo.btVector3(0,0,0)}setJumpMultiplier(s){this.controller_.setJumpSpeed(s*e/3)}setWalkDirection(s){this.tmpVec3_.setValue(s.x,s.y,s.z),this.controller_.setWalkDirection(this.tmpVec3_)}onGround(){return this.controller_.onGround()}jump(){this.controller_.onGround()&&this.controller_.jump()}}class i{constructor(){}Destroy(){Ammo.destroy(this.body_),Ammo.destroy(this.info_),Ammo.destroy(this.shape_),Ammo.destroy(this.inertia_),Ammo.destroy(this.motionState_),Ammo.destroy(this.transform_),Ammo.destroy(this.userData_),this.mesh_&&Ammo.destroy(this.mesh_)}InitBox(s,o,l,c){this.transform_=new Ammo.btTransform,this.transform_.setIdentity(),this.transform_.setOrigin(new Ammo.btVector3(s.x,s.y,s.z)),this.transform_.setRotation(new Ammo.btQuaternion(o.x,o.y,o.z,o.w)),this.motionState_=new Ammo.btDefaultMotionState(this.transform_);let h=new Ammo.btVector3(l.x*.5,l.y*.5,l.z*.5);this.shape_=new Ammo.btBoxShape(h),this.shape_.setMargin(.05),this.inertia_=new Ammo.btVector3(0,0,0),this.shape_.calculateLocalInertia(10,this.inertia_),this.info_=new Ammo.btRigidBodyConstructionInfo(10,this.motionState_,this.shape_,this.inertia_),this.body_=new Ammo.btRigidBody(this.info_),this.userData_=new Ammo.btVector3(0,0,0),this.userData_.userData=c,this.body_.setUserPointer(this.userData_),Ammo.destroy(h)}InitMesh(s,o,l,c){const h=new Ammo.btVector3(0,0,0),u=new Ammo.btVector3(0,0,0),d=new Ammo.btVector3(0,0,0),p=new b,m=new b,v=new b;this.mesh_=new Ammo.btTriangleMesh(!0,!0),s.traverse(_=>{if(_.updateMatrixWorld(!0),_.geometry){const g=_.geometry.attributes.position.array;for(let f=0;f<_.geometry.index.count;f+=3){const x=_.geometry.index.array[f]*3,S=_.geometry.index.array[f+1]*3,w=_.geometry.index.array[f+2]*3;p.fromArray(g,x).applyMatrix4(_.matrixWorld),m.fromArray(g,S).applyMatrix4(_.matrixWorld),v.fromArray(g,w).applyMatrix4(_.matrixWorld),h.setX(p.x),h.setY(p.y),h.setZ(p.z),u.setX(m.x),u.setY(m.y),u.setZ(m.z),d.setX(v.x),d.setY(v.y),d.setZ(v.z),this.mesh_.addTriangle(h,u,d,!1)}}}),this.inertia_=new Ammo.btVector3(0,0,0),this.shape_=new Ammo.btBvhTriangleMeshShape(this.mesh_,!0,!0),this.shape_.setMargin(.05),this.shape_.calculateLocalInertia(10,this.inertia_),this.transform_=new Ammo.btTransform,this.transform_.setIdentity(),this.transform_.getOrigin().setValue(o.x,o.y,o.z),this.transform_.getRotation().setValue(l.x,l.y,l.z,l.w),this.motionState_=new Ammo.btDefaultMotionState(this.transform_),this.info_=new Ammo.btRigidBodyConstructionInfo(10,this.motionState_,this.shape_,this.inertia_),this.body_=new Ammo.btRigidBody(this.info_),this.userData_=new Ammo.btVector3(0,0,0),this.userData_.userData=c,this.body_.setUserPointer(this.userData_),Ammo.destroy(h),Ammo.destroy(u),Ammo.destroy(d)}}class r extends Oe.Component{constructor(){super()}Destroy(){Ammo.Destroy(this.physicsWorld_),Ammo.Destroy(this.solver_),Ammo.Destroy(this.broadphase_),Ammo.Destroy(this.dispatcher_),Ammo.Destroy(this.collisionConfiguration_)}InitEntity(){this.collisionConfiguration_=new Ammo.btDefaultCollisionConfiguration,this.dispatcher_=new Ammo.btCollisionDispatcher(this.collisionConfiguration_),this.broadphase_=new Ammo.btDbvtBroadphase,this.solver_=new Ammo.btSequentialImpulseConstraintSolver,this.physicsWorld_=new Ammo.btDiscreteDynamicsWorld(this.dispatcher_,this.broadphase_,this.solver_,this.collisionConfiguration_),this.physicsWorld_.setGravity(new Ammo.btVector3(0,-100,0)),this.tmpRayOrigin_=new Ammo.btVector3,this.tmpRayDst_=new Ammo.btVector3,this.rayCallback_=new Ammo.AllHitsRayResultCallback(this.tmpRayOrigin_,this.tmpRayDst_)}RayTest(s,o){this.tmpRayOrigin_.setValue(s.x,s.y,s.z),this.tmpRayDst_.setValue(o.x,o.y,o.z),this.tmpRayOrigin_.setValue(s.x,s.y,s.z),this.tmpRayDst_.setValue(o.x,o.y,o.z);const l=new Ammo.AllHitsRayResultCallback(this.tmpRayOrigin_,this.tmpRayDst_);this.physicsWorld_.rayTest(this.tmpRayOrigin_,this.tmpRayDst_,l);const c=[];if(l.hasHit()){const h=l.get_m_collisionObjects(),u=l.get_m_hitPointWorld(),d=l.get_m_hitNormalWorld(),p=h.size();for(let m=0;m<p;++m){const v=h.at(m),_=Ammo.castObject(v.getUserPointer(),Ammo.btVector3).userData,g=u.at(m),f=d.at(m),x=new b(g.x(),g.y(),g.z()),S=new b(f.x(),f.y(),f.z());c.push({name:_.name,position:x,normal:S,distance:x.distanceTo(s)})}}return c.sort((h,u)=>h.distance-u.distance),Ammo.destroy(l),c}RemoveRigidBody(s){this.physicsWorld_.removeRigidBody(s.body_),s.Destroy()}CreateKinematicCharacterController(s,o,l){const c=new t;return c.Init(s,o,l),this.physicsWorld_.addCollisionObject(c.body_),this.physicsWorld_.addAction(c.controller_),this.physicsWorld_.getBroadphase().getOverlappingPairCache().setInternalGhostPairCallback(new Ammo.btGhostPairCallback),c}CreateBox(s,o,l,c){const h=new i;return h.InitBox(s,o,l,c),this.physicsWorld_.addRigidBody(h.body_),h.body_.setActivationState(4),h.body_.setCollisionFlags(2),h}CreateMesh(s,o,l,c){const h=new i;return h.InitMesh(s,o,l,c),this.physicsWorld_.addRigidBody(h.body_),h.body_.setActivationState(4),h.body_.setCollisionFlags(2),h}StepSimulation(s){this.physicsWorld_.stepSimulation(s,10);const o=this.physicsWorld_.getDispatcher(),l=this.dispatcher_.getNumManifolds(),c={};for(let h=0;h<l;h++){const u=o.getManifoldByIndexInternal(h);if(u.getNumContacts()>0){const d=u.getBody0(),p=u.getBody1(),m=Ammo.castObject(d.getUserPointer(),Ammo.btVector3).userData,v=Ammo.castObject(p.getUserPointer(),Ammo.btVector3).userData;m.name in c||(c[m.name]=[]),c[m.name].push(v.name),v.name in c||(c[v.name]=[]),c[v.name].push(m.name)}}for(let h in c)this.FindEntity(h).Broadcast({topic:"physics.collision",value:c[h]})}Update(s){}}return{AmmoJSController:r}})(),T1=(()=>{const a=`
out vec2 v_UV;
out vec4 vColor;

void main() {
  vColor = color;
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mvPosition;
  v_UV = uv;
}
`,e=`
uniform sampler2D diffuse;

in vec2 v_UV;
in vec4 vColor;

void main() {
  gl_FragColor = vec4(vColor) * texture(diffuse, v_UV);
}
`;class t extends Oe.Component{constructor(r){super(),this.params_=r,this.Init_()}Init_(r){const n={diffuse:{value:new nr().load(this.params_.texture)}};this.material_=new mt({uniforms:n,vertexShader:a,fragmentShader:e,blending:mr,depthTest:!0,depthWrite:!1,transparent:!0,vertexColors:!0,side:Mi}),this.geometry_=new Fe,this.particleSystem_=new qe(this.geometry_,this.material_),this.particleSystem_.frustumCulled=!1,this.liveParticles_=[],this.group_=new ct,this.group_.renderOrder=Ol.PARTICLES,this.group_.add(this.particleSystem_),this.params_.scene.add(this.group_)}CreateParticle(){const r={Start:new b(0,0,0),End:new b(0,0,0),Colour:new Z,Size:1,Alive:!0,Life:1};return this.liveParticles_.push(r),r}Update(r){for(const n of this.liveParticles_){if(n.Life-=r,n.Life<=0){n.Alive=!1;continue}if(n.End.add(n.Velocity.clone().multiplyScalar(r)),n.End.clone().sub(n.Start).length()>n.Length){const s=n.Velocity.clone().normalize();n.Start=n.End.clone().sub(s.multiplyScalar(n.Length))}}this.liveParticles_=this.liveParticles_.filter(n=>n.Alive),this.GenerateBuffers_()}GenerateBuffers_(){const r=[],n=[],s=[],o=[],l=[0,1,2,2,3,0];let c=0;this.params_.camera.matrixWorldInverse;const h=this.params_.camera.matrixWorld;for(const u of this.liveParticles_){r.push(...l.map(L=>L+c)),c+=4;const d=new Ue(u.End.x,u.End.y,u.End.z,1);d.applyMatrix4(this.particleSystem_.modelViewMatrix),d.applyMatrix4(this.params_.camera.projectionMatrix);const p=new Ue(u.Start.x,u.Start.y,u.Start.z,1);p.applyMatrix4(this.particleSystem_.modelViewMatrix),p.applyMatrix4(this.params_.camera.projectionMatrix),d.multiplyScalar(1/d.w),p.multiplyScalar(1/p.w);const m=new b(d.x,d.y,d.z),v=new b(p.x,p.y,p.z),_=new b().subVectors(m,v);_.z=0,_.normalize();const g=new b(-_.y,_.x,0).clone().transformDirection(this.params_.camera.projectionMatrixInverse);g.transformDirection(h),g.multiplyScalar(u.Width);const f=new b().copy(u.Start);f.sub(g);const x=new b().copy(u.Start);x.add(g);const S=new b().copy(u.End);S.add(g);const w=new b().copy(u.End);w.sub(g),n.push(f.x,f.y,f.z),n.push(x.x,x.y,x.z),n.push(S.x,S.y,S.z),n.push(w.x,w.y,w.z),o.push(0,0),o.push(1,0),o.push(1,1),o.push(0,1);const y=u.Colours[0].lerp(u.Colours[1],1-u.Life/u.TotalLife),M=dr.sat(u.Life/u.TotalLife);for(let L=0;L<4;L++)s.push(y.r,y.g,y.b,M)}this.geometry_.setAttribute("position",new be(n,3)),this.geometry_.setAttribute("uv",new be(o,2)),this.geometry_.setAttribute("color",new be(s,4)),this.geometry_.setIndex(new Ke(new Uint32Array(r),1)),this.geometry_.attributes.position.needsUpdate=!0,this.geometry_.attributes.uv.needsUpdate=!0}}return{BlasterSystem:t}})(),A1=(()=>{class a extends Oe.Component{constructor(t){super()}InitComponent(){this.RegisterHandler_("ui.charge",i=>this.OnCharge_(i));const t=document.getElementById("top-left-ui-area");t.style.visibility="hidden"}OnCharge_(t){const i=document.getElementById("charge-text");i.innerText=Math.ceil(t.value*100)+"%";const r=document.getElementById("charge-bar"),n=new Z("rgb(89, 241, 142)"),s=new Z("rgb(237, 50, 50)").clone();s.lerpHSL(n,t.value),r.style.backgroundColor=s.getStyle(),r.style.width=i.innerText}}return{UIController:a}})();class E1{constructor(){this._Initialize()}_Initialize(){this.entityManager_=new up.EntityManager,this.OnGameStarted_()}OnGameStarted_(){this.grid_=new b1.SpatialHashGrid([[-5e3,-5e3],[5e3,5e3]],[100,100]),this.LoadControllers_(),this.previousRAF_=null,this.RAF_()}LoadControllers_(){const e=new Oe.Entity;e.AddComponent(new S1.ThreeJSController),this.entityManager_.Add(e,"threejs");const t=new Oe.Entity;t.AddComponent(new M1.AmmoJSController),this.entityManager_.Add(t,"physics"),this.ammojs_=t.GetComponent("AmmoJSController"),this.scene_=e.GetComponent("ThreeJSController").scene_,this.decals_=e.GetComponent("ThreeJSController").sceneDecals_,this.camera_=e.GetComponent("ThreeJSController").camera_,this.threejs_=e.GetComponent("ThreeJSController");const i=new Oe.Entity;i.AddComponent(new T1.BlasterSystem({scene:this.scene_,camera:this.camera_,texture:"resources/textures/fx/tracer.png"})),this.entityManager_.Add(i,"fx");const r=new Oe.Entity;r.AddComponent(new p1.LoadController),this.entityManager_.Add(r,"loader");const n=new Oe.Entity;n.AddComponent(new A1.UIController),this.entityManager_.Add(n,"ui");const s={grid:this.grid_,scene:this.scene_,decals:this.decals_,camera:this.camera_},o=new Oe.Entity;o.AddComponent(new Bl.PlayerSpawner(s)),o.AddComponent(new Bl.Level1Spawner(s)),o.AddComponent(new Bl.TargetSpawner(s)),this.entityManager_.Add(o,"spawners"),o.GetComponent("PlayerSpawner").Spawn(),o.GetComponent("Level1Spawner").Spawn()}RAF_(){requestAnimationFrame(e=>{this.previousRAF_===null?this.previousRAF_=e:(this.Step_(e-this.previousRAF_),this.previousRAF_=e),setTimeout(()=>{this.RAF_()},1)})}Step_(e){const t=Math.min(.03333333333333333,e*.001);this.entityManager_.Update(t),this.ammojs_.StepSimulation(t),this.threejs_.Render(t)}}window.addEventListener("DOMContentLoaded",async()=>{const a=await Ammo();Ammo=a,new E1});
