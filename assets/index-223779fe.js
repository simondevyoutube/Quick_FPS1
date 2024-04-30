var lf=Object.defineProperty;var cf=(s,e,t)=>e in s?lf(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var rt=(s,e,t)=>(cf(s,typeof e!="symbol"?e+"":e,t),t);import{ShaderChunk as gn,Matrix4 as si,Color as ss,LinearEncoding as hf,DataTexture as $o,RGBFormat as Qh,RepeatWrapping as Aa,LinearFilter as ra,Frustum as uf,WebGLRenderTarget as Zs,RGBAFormat as Vr,HalfFloatType as qh,ShaderMaterial as Nn,FloatType as df,ShaderLib as Fo,FrontSide as $l,BackSide as ff,Vector2 as sa,Vector4 as ec,NearestFilter as ms,Math as pf}from"//cdn.skypack.dev/three@0.130.1/build/three.module.js";import{Pass as Jh,FullScreenQuad as Cr}from"//cdn.skypack.dev/three@0.130.1/examples/jsm/postprocessing/Pass.js";import*as Oe from"https://cdn.skypack.dev/three@0.130.1";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const mf=(()=>{class s{constructor(){this.ids_=0,this.entitiesMap_={},this.entities_=[],this.passes_=[0,1,2,3]}_GenerateName(){return"__name__"+this.ids_}Get(t){return this.entitiesMap_[t]}Filter(t){return this.entities_.filter(t)}Add(t,n){this.ids_+=1,n||(n=this._GenerateName()),this.entitiesMap_[n]=t,this.entities_.push(t),t.SetParent(this),t.SetName(n),t.SetId(this.ids_),t.InitEntity()}SetActive(t,n){const i=this.entities_.indexOf(t);if(n){if(i>=0)return;this.entities_.push(t)}else{if(i<0)return;this.entities_.splice(i,1)}}Update(t){for(let n=0;n<this.passes_.length;++n)this.UpdatePass_(t,this.passes_[n])}UpdatePass_(t,n){const i=[],r=[];for(let a=0;a<this.entities_.length;++a){const o=this.entities_[a];o.Update(t,n),o.dead_?i.push(o):r.push(o)}for(let a=0;a<i.length;++a){const o=i[a];delete this.entitiesMap_[o.Name],o.Destroy()}this.entities_=r}}return{EntityManager:s}})();/**
 * @license
 * Copyright 2010-2021 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Zh="130",gf=0,tc=1,_f=2,Kh=1,$h=2,Fr=3,Wi=0,st=1,kn=2,eu=1,Dr=0,ki=1,aa=2,nc=3,ic=4,tu=5,ri=100,vf=101,xf=102,rc=103,sc=104,yf=200,Rr=201,wf=202,Sf=203,nu=204,iu=205,Mf=206,Af=207,bf=208,Tf=209,Ef=210,Lf=0,Pf=1,Cf=2,Ro=3,Ff=4,Rf=5,If=6,Df=7,ba=0,Nf=1,Uf=2,Gi=0,Bf=1,Of=2,zf=3,kf=4,Gf=5,ru=300,el=301,tl=302,Io=303,ac=304,nl=306,il=307,at=1e3,Tt=1001,oa=1002,ct=1003,Do=1004,No=1005,ft=1006,su=1007,tr=1008,la=1009,Hf=1010,Vf=1011,ca=1012,Wf=1013,Ks=1014,vn=1015,Hi=1016,Xf=1017,Yf=1018,jf=1019,Nr=1020,Qf=1021,Un=1022,It=1023,qf=1024,Jf=1025,Vi=1026,Wr=1027,Zf=1028,Kf=1029,$f=1030,ep=1031,tp=1032,np=1033,oc=33776,lc=33777,cc=33778,hc=33779,uc=35840,dc=35841,fc=35842,pc=35843,ip=36196,mc=37492,gc=37496,rp=37808,sp=37809,ap=37810,op=37811,lp=37812,cp=37813,hp=37814,up=37815,dp=37816,fp=37817,pp=37818,mp=37819,gp=37820,_p=37821,vp=36492,xp=37840,yp=37841,wp=37842,Sp=37843,Mp=37844,Ap=37845,bp=37846,Tp=37847,Ep=37848,Lp=37849,Pp=37850,Cp=37851,Fp=37852,Rp=37853,$s=2200,Ip=2201,Dp=2202,Xr=2300,Xi=2301,za=2302,Bi=2400,Oi=2401,ha=2402,rl=2500,au=2501,Np=0,Up=1,ou=2,as=3e3,Rt=3001,Bp=3007,Op=3002,zp=3003,kp=3004,Gp=3005,Hp=3006,Vp=3200,Wp=3201,li=0,Xp=1,ka=7680,Yp=519,Yr=35044,ua=35048,_c="300 es";class ci{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const vt=[];for(let s=0;s<256;s++)vt[s]=(s<16?"0":"")+s.toString(16);let gs=1234567;const Ur=Math.PI/180,jr=180/Math.PI;function Vt(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(vt[s&255]+vt[s>>8&255]+vt[s>>16&255]+vt[s>>24&255]+"-"+vt[e&255]+vt[e>>8&255]+"-"+vt[e>>16&15|64]+vt[e>>24&255]+"-"+vt[t&63|128]+vt[t>>8&255]+"-"+vt[t>>16&255]+vt[t>>24&255]+vt[n&255]+vt[n>>8&255]+vt[n>>16&255]+vt[n>>24&255]).toUpperCase()}function Ft(s,e,t){return Math.max(e,Math.min(t,s))}function sl(s,e){return(s%e+e)%e}function jp(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Qp(s,e,t){return s!==e?(t-s)/(e-s):0}function Br(s,e,t){return(1-t)*s+t*e}function qp(s,e,t,n){return Br(s,e,1-Math.exp(-t*n))}function Jp(s,e=1){return e-Math.abs(sl(s,e*2)-e)}function Zp(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Kp(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function $p(s,e){return s+Math.floor(Math.random()*(e-s+1))}function em(s,e){return s+Math.random()*(e-s)}function tm(s){return s*(.5-Math.random())}function nm(s){return s!==void 0&&(gs=s%2147483647),gs=gs*16807%2147483647,(gs-1)/2147483646}function im(s){return s*Ur}function rm(s){return s*jr}function Uo(s){return(s&s-1)===0&&s!==0}function lu(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function cu(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function sm(s,e,t,n,i){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),p=a((n-e)/2);switch(i){case"XYX":s.set(o*h,l*u,l*d,o*c);break;case"YZY":s.set(l*d,o*h,l*u,o*c);break;case"ZXZ":s.set(l*u,l*d,o*h,o*c);break;case"XZX":s.set(o*h,l*p,l*f,o*c);break;case"YXY":s.set(l*f,o*h,l*p,o*c);break;case"ZYZ":s.set(l*p,l*f,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}var Kt=Object.freeze({__proto__:null,DEG2RAD:Ur,RAD2DEG:jr,generateUUID:Vt,clamp:Ft,euclideanModulo:sl,mapLinear:jp,inverseLerp:Qp,lerp:Br,damp:qp,pingpong:Jp,smoothstep:Zp,smootherstep:Kp,randInt:$p,randFloat:em,randFloatSpread:tm,seededRandom:nm,degToRad:im,radToDeg:rm,isPowerOfTwo:Uo,ceilPowerOfTwo:lu,floorPowerOfTwo:cu,setQuaternionFromProperEuler:sm});class X{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}}X.prototype.isVector2=!0;class pt{constructor(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],p=n[8],_=i[0],v=i[3],m=i[6],g=i[1],x=i[4],M=i[7],w=i[2],y=i[5],A=i[8];return r[0]=a*_+o*g+l*w,r[3]=a*v+o*x+l*y,r[6]=a*m+o*M+l*A,r[1]=c*_+h*g+u*w,r[4]=c*v+h*x+u*y,r[7]=c*m+h*M+u*A,r[2]=d*_+f*g+p*w,r[5]=d*v+f*x+p*y,r[8]=d*m+f*M+p*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,p=t*u+n*d+i*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/p;return e[0]=u*_,e[1]=(i*c-h*n)*_,e[2]=(o*n-i*a)*_,e[3]=d*_,e[4]=(h*t-i*l)*_,e[5]=(i*r-o*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),i=this.elements,r=i[0],a=i[3],o=i[6],l=i[1],c=i[4],h=i[7];return i[0]=t*r+n*l,i[3]=t*a+n*c,i[6]=t*o+n*h,i[1]=-n*r+t*l,i[4]=-n*a+t*c,i[7]=-n*o+t*h,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}pt.prototype.isMatrix3=!0;let gi;class nr{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{gi===void 0&&(gi=document.createElementNS("http://www.w3.org/1999/xhtml","canvas")),gi.width=e.width,gi.height=e.height;const n=gi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=gi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}}let am=0;class lt extends ci{constructor(e=lt.DEFAULT_IMAGE,t=lt.DEFAULT_MAPPING,n=Tt,i=Tt,r=ft,a=tr,o=It,l=la,c=1,h=as){super(),Object.defineProperty(this,"id",{value:am++}),this.uuid=Vt(),this.name="",this.image=e,this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new X(0,0),this.repeat=new X(1,1),this.center=new X(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.version=0,this.onUpdate=null}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.image=e.image,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(this.image!==void 0){const i=this.image;if(i.uuid===void 0&&(i.uuid=Vt()),!t&&e.images[i.uuid]===void 0){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Ga(i[a].image)):r.push(Ga(i[a]))}else r=Ga(i);e.images[i.uuid]={uuid:i.uuid,url:r}}n.image=i.uuid}return t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ru)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case at:e.x=e.x-Math.floor(e.x);break;case Tt:e.x=e.x<0?0:1;break;case oa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case at:e.y=e.y-Math.floor(e.y);break;case Tt:e.y=e.y<0?0:1;break;case oa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&this.version++}}lt.DEFAULT_IMAGE=void 0;lt.DEFAULT_MAPPING=ru;lt.prototype.isTexture=!0;function Ga(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?nr.getDataURL(s):s.data?{data:Array.prototype.slice.call(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}class Ue{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],p=l[9],_=l[2],v=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(p-v)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(p+v)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,M=(f+1)/2,w=(m+1)/2,y=(h+d)/4,A=(u+_)/4,E=(p+v)/4;return x>M&&x>w?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=y/n,r=A/n):M>w?M<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(M),n=y/i,r=E/i):w<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(w),n=A/r,i=E/r),this.set(n,i,r,t),this}let g=Math.sqrt((v-p)*(v-p)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(g)<.001&&(g=1),this.x=(v-p)/g,this.y=(u-_)/g,this.z=(d-h)/g,this.w=Math.acos((c+f+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}}Ue.prototype.isVector4=!0;class Dt extends ci{constructor(e,t,n={}){super(),this.width=e,this.height=t,this.depth=1,this.scissor=new Ue(0,0,e,t),this.scissorTest=!1,this.viewport=new Ue(0,0,e,t),this.texture=new lt(void 0,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.image={width:e,height:t,depth:1},this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:ft,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null}setTexture(e){e.image={width:this.width,height:this.height,depth:this.depth},this.texture=e}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.image={...this.texture.image},this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}Dt.prototype.isWebGLRenderTarget=!0;class om extends Dt{constructor(e,t,n){super(e,t);const i=this.texture;this.texture=[];for(let r=0;r<n;r++)this.texture[r]=i.clone()}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.texture.length;i<r;i++)this.texture[i].image.width=e,this.texture[i].image.height=t,this.texture[i].image.depth=n;this.dispose()}return this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t),this}copy(e){this.dispose(),this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.set(0,0,this.width,this.height),this.scissor.set(0,0,this.width,this.height),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this.texture.length=0;for(let t=0,n=e.texture.length;t<n;t++)this.texture[t]=e.texture[t].clone();return this}}om.prototype.isWebGLMultipleRenderTargets=!0;class hu extends Dt{constructor(e,t,n){super(e,t,n),this.samples=4}copy(e){return super.copy.call(this,e),this.samples=e.samples,this}}hu.prototype.isWebGLMultisampleRenderTarget=!0;class Ve{constructor(e=0,t=0,n=0,i=1){this._x=e,this._y=t,this._z=n,this._w=i}static slerp(e,t,n,i){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),n.slerpQuaternions(e,t,i)}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=r[a+0],f=r[a+1],p=r[a+2],_=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=p,e[t+3]=_;return}if(u!==_||l!==d||c!==f||h!==p){let v=1-o;const m=l*d+c*f+h*p+u*_,g=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){const w=Math.sqrt(x),y=Math.atan2(w,m*g);v=Math.sin(v*y)/w,o=Math.sin(o*y)/w}const M=o*g;if(l=l*v+d*M,c=c*v+f*M,h=h*v+p*M,u=u*v+_*M,v===1-o){const w=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=w,c*=w,h*=w,u*=w}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[a],d=r[a+1],f=r[a+2],p=r[a+3];return e[t]=o*p+h*u+l*f-c*d,e[t+1]=l*p+h*d+c*u-o*f,e[t+2]=c*p+h*f+o*d-l*u,e[t+3]=h*p-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(r/2),d=l(n/2),f=l(i/2),p=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"YZX":this._x=d*h*u+c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u-d*f*p;break;case"XZY":this._x=d*h*u-c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u+d*f*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-i)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+c)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ft(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){this.copy(e).slerp(t,n)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}Ve.prototype.isQuaternion=!0;class S{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(vc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(vc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*i-o*n,h=l*n+o*t-r*i,u=l*i+r*n-a*t,d=-r*t-a*n-o*i;return this.x=c*l+d*-r+h*-o-u*-a,this.y=h*l+d*-a+u*-r-c*-o,this.z=u*l+d*-o+c*-a-h*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ha.copy(this).projectOnVector(e),this.sub(Ha)}reflect(e){return this.sub(Ha.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}}S.prototype.isVector3=!0;const Ha=new S,vc=new Ve;class kt{constructor(e=new S(1/0,1/0,1/0),t=new S(-1/0,-1/0,-1/0)){this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,r=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.length;l<c;l+=3){const h=e[l],u=e[l+1],d=e[l+2];h<t&&(t=h),u<n&&(n=u),d<i&&(i=d),h>r&&(r=h),u>a&&(a=u),d>o&&(o=d)}return this.min.set(t,n,i),this.max.set(r,a,o),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,r=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.count;l<c;l++){const h=e.getX(l),u=e.getY(l),d=e.getZ(l);h<t&&(t=h),u<n&&(n=u),d<i&&(i=d),h>r&&(r=h),u>a&&(a=u),d>o&&(o=d)}return this.min.set(t,n,i),this.max.set(r,a,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=_r.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e){return this.makeEmpty(),this.expandByObject(e)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e){e.updateWorldMatrix(!1,!1);const t=e.geometry;t!==void 0&&(t.boundingBox===null&&t.computeBoundingBox(),Va.copy(t.boundingBox),Va.applyMatrix4(e.matrixWorld),this.union(Va));const n=e.children;for(let i=0,r=n.length;i<r;i++)this.expandByObject(n[i]);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,_r),_r.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(vr),_s.subVectors(this.max,vr),_i.subVectors(e.a,vr),vi.subVectors(e.b,vr),xi.subVectors(e.c,vr),bn.subVectors(vi,_i),Tn.subVectors(xi,vi),Jn.subVectors(_i,xi);let t=[0,-bn.z,bn.y,0,-Tn.z,Tn.y,0,-Jn.z,Jn.y,bn.z,0,-bn.x,Tn.z,0,-Tn.x,Jn.z,0,-Jn.x,-bn.y,bn.x,0,-Tn.y,Tn.x,0,-Jn.y,Jn.x,0];return!Wa(t,_i,vi,xi,_s)||(t=[1,0,0,0,1,0,0,0,1],!Wa(t,_i,vi,xi,_s))?!1:(vs.crossVectors(bn,Tn),t=[vs.x,vs.y,vs.z],Wa(t,_i,vi,xi,_s))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return _r.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(_r).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(cn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}kt.prototype.isBox3=!0;const cn=[new S,new S,new S,new S,new S,new S,new S,new S],_r=new S,Va=new kt,_i=new S,vi=new S,xi=new S,bn=new S,Tn=new S,Jn=new S,vr=new S,_s=new S,vs=new S,Zn=new S;function Wa(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Zn.fromArray(s,r);const o=i.x*Math.abs(Zn.x)+i.y*Math.abs(Zn.y)+i.z*Math.abs(Zn.z),l=e.dot(Zn),c=t.dot(Zn),h=n.dot(Zn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const lm=new kt,xc=new S,Xa=new S,Ya=new S;class Vn{constructor(e=new S,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):lm.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){Ya.subVectors(e,this.center);const t=Ya.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.add(Ya.multiplyScalar(i/n)),this.radius+=i}return this}union(e){return Xa.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(xc.copy(e.center).add(Xa)),this.expandByPoint(xc.copy(e.center).sub(Xa)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const hn=new S,ja=new S,xs=new S,En=new S,Qa=new S,ys=new S,qa=new S;class hi{constructor(e=new S,t=new S(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=hn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(hn.copy(this.direction).multiplyScalar(t).add(this.origin),hn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ja.copy(e).add(t).multiplyScalar(.5),xs.copy(t).sub(e).normalize(),En.copy(this.origin).sub(ja);const r=e.distanceTo(t)*.5,a=-this.direction.dot(xs),o=En.dot(this.direction),l=-En.dot(xs),c=En.lengthSq(),h=Math.abs(1-a*a);let u,d,f,p;if(h>0)if(u=a*l-o,d=a*o-l,p=r*h,u>=0)if(d>=-p)if(d<=p){const _=1/h;u*=_,d*=_,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-p?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=p?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(u).add(this.origin),i&&i.copy(xs).multiplyScalar(d).add(ja),f}intersectSphere(e,t){hn.subVectors(e.center,this.origin);const n=hn.dot(this.direction),i=hn.dot(hn)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return o<0&&l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>i||((r>n||n!==n)&&(n=r),(a<i||i!==i)&&(i=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,hn)!==null}intersectTriangle(e,t,n,i,r){Qa.subVectors(t,e),ys.subVectors(n,e),qa.crossVectors(Qa,ys);let a=this.direction.dot(qa),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;En.subVectors(this.origin,e);const l=o*this.direction.dot(ys.crossVectors(En,ys));if(l<0)return null;const c=o*this.direction.dot(Qa.cross(En));if(c<0||l+c>a)return null;const h=-o*En.dot(qa);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ee{constructor(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,r,a,o,l,c,h,u,d,f,p,_,v){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=p,m[11]=_,m[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ee().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/yi.setFromMatrixColumn(e,0).length(),r=1/yi.setFromMatrixColumn(e,1).length(),a=1/yi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=a*h,f=a*u,p=o*h,_=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+p*c,t[5]=d-_*c,t[9]=-o*l,t[2]=_-d*c,t[6]=p+f*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*h,f=l*u,p=c*h,_=c*u;t[0]=d+_*o,t[4]=p*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-p,t[6]=_+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*h,f=l*u,p=c*h,_=c*u;t[0]=d-_*o,t[4]=-a*u,t[8]=p+f*o,t[1]=f+p*o,t[5]=a*h,t[9]=_-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*h,f=a*u,p=o*h,_=o*u;t[0]=l*h,t[4]=p*c-f,t[8]=d*c+_,t[1]=l*u,t[5]=_*c+d,t[9]=f*c-p,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,f=a*c,p=o*l,_=o*c;t[0]=l*h,t[4]=_-d*u,t[8]=p*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+p,t[10]=d-_*u}else if(e.order==="XZY"){const d=a*l,f=a*c,p=o*l,_=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+_,t[5]=a*h,t[9]=f*u-p,t[2]=p*u-f,t[6]=o*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cm,e,hm)}lookAt(e,t,n){const i=this.elements;return Ut.subVectors(e,t),Ut.lengthSq()===0&&(Ut.z=1),Ut.normalize(),Ln.crossVectors(n,Ut),Ln.lengthSq()===0&&(Math.abs(n.z)===1?Ut.x+=1e-4:Ut.z+=1e-4,Ut.normalize(),Ln.crossVectors(n,Ut)),Ln.normalize(),ws.crossVectors(Ut,Ln),i[0]=Ln.x,i[4]=ws.x,i[8]=Ut.x,i[1]=Ln.y,i[5]=ws.y,i[9]=Ut.y,i[2]=Ln.z,i[6]=ws.z,i[10]=Ut.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],p=n[2],_=n[6],v=n[10],m=n[14],g=n[3],x=n[7],M=n[11],w=n[15],y=i[0],A=i[4],E=i[8],D=i[12],R=i[1],z=i[5],H=i[9],F=i[13],I=i[2],C=i[6],P=i[10],B=i[14],j=i[3],G=i[7],ne=i[11],K=i[15];return r[0]=a*y+o*R+l*I+c*j,r[4]=a*A+o*z+l*C+c*G,r[8]=a*E+o*H+l*P+c*ne,r[12]=a*D+o*F+l*B+c*K,r[1]=h*y+u*R+d*I+f*j,r[5]=h*A+u*z+d*C+f*G,r[9]=h*E+u*H+d*P+f*ne,r[13]=h*D+u*F+d*B+f*K,r[2]=p*y+_*R+v*I+m*j,r[6]=p*A+_*z+v*C+m*G,r[10]=p*E+_*H+v*P+m*ne,r[14]=p*D+_*F+v*B+m*K,r[3]=g*y+x*R+M*I+w*j,r[7]=g*A+x*z+M*C+w*G,r[11]=g*E+x*H+M*P+w*ne,r[15]=g*D+x*F+M*B+w*K,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],p=e[3],_=e[7],v=e[11],m=e[15];return p*(+r*l*u-i*c*u-r*o*d+n*c*d+i*o*f-n*l*f)+_*(+t*l*f-t*c*d+r*a*d-i*a*f+i*c*h-r*l*h)+v*(+t*c*u-t*o*f-r*a*u+n*a*f+r*o*h-n*c*h)+m*(-i*o*h-t*l*u+t*o*d+i*a*u-n*a*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],p=e[12],_=e[13],v=e[14],m=e[15],g=u*v*c-_*d*c+_*l*f-o*v*f-u*l*m+o*d*m,x=p*d*c-h*v*c-p*l*f+a*v*f+h*l*m-a*d*m,M=h*_*c-p*u*c+p*o*f-a*_*f-h*o*m+a*u*m,w=p*u*l-h*_*l-p*o*d+a*_*d+h*o*v-a*u*v,y=t*g+n*x+i*M+r*w;if(y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/y;return e[0]=g*A,e[1]=(_*d*r-u*v*r-_*i*f+n*v*f+u*i*m-n*d*m)*A,e[2]=(o*v*r-_*l*r+_*i*c-n*v*c-o*i*m+n*l*m)*A,e[3]=(u*l*r-o*d*r-u*i*c+n*d*c+o*i*f-n*l*f)*A,e[4]=x*A,e[5]=(h*v*r-p*d*r+p*i*f-t*v*f-h*i*m+t*d*m)*A,e[6]=(p*l*r-a*v*r-p*i*c+t*v*c+a*i*m-t*l*m)*A,e[7]=(a*d*r-h*l*r+h*i*c-t*d*c-a*i*f+t*l*f)*A,e[8]=M*A,e[9]=(p*u*r-h*_*r-p*n*f+t*_*f+h*n*m-t*u*m)*A,e[10]=(a*_*r-p*o*r+p*n*c-t*_*c-a*n*m+t*o*m)*A,e[11]=(h*o*r-a*u*r-h*n*c+t*u*c+a*n*f-t*o*f)*A,e[12]=w*A,e[13]=(h*_*i-p*u*i+p*n*d-t*_*d-h*n*v+t*u*v)*A,e[14]=(p*o*i-a*_*i-p*n*l+t*_*l+a*n*v-t*o*v)*A,e[15]=(a*u*i-h*o*i+h*n*l-t*u*l-a*n*d+t*o*d)*A,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,p=r*u,_=a*h,v=a*u,m=o*u,g=l*c,x=l*h,M=l*u,w=n.x,y=n.y,A=n.z;return i[0]=(1-(_+m))*w,i[1]=(f+M)*w,i[2]=(p-x)*w,i[3]=0,i[4]=(f-M)*y,i[5]=(1-(d+m))*y,i[6]=(v+g)*y,i[7]=0,i[8]=(p+x)*A,i[9]=(v-g)*A,i[10]=(1-(d+_))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=yi.set(i[0],i[1],i[2]).length();const a=yi.set(i[4],i[5],i[6]).length(),o=yi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Qt.copy(this);const c=1/r,h=1/a,u=1/o;return Qt.elements[0]*=c,Qt.elements[1]*=c,Qt.elements[2]*=c,Qt.elements[4]*=h,Qt.elements[5]*=h,Qt.elements[6]*=h,Qt.elements[8]*=u,Qt.elements[9]*=u,Qt.elements[10]*=u,t.setFromRotationMatrix(Qt),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a){a===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const o=this.elements,l=2*r/(t-e),c=2*r/(n-i),h=(t+e)/(t-e),u=(n+i)/(n-i),d=-(a+r)/(a-r),f=-2*a*r/(a-r);return o[0]=l,o[4]=0,o[8]=h,o[12]=0,o[1]=0,o[5]=c,o[9]=u,o[13]=0,o[2]=0,o[6]=0,o[10]=d,o[14]=f,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,i,r,a){const o=this.elements,l=1/(t-e),c=1/(n-i),h=1/(a-r),u=(t+e)*l,d=(n+i)*c,f=(a+r)*h;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-u,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-d,o[2]=0,o[6]=0,o[10]=-2*h,o[14]=-f,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}ee.prototype.isMatrix4=!0;const yi=new S,Qt=new ee,cm=new S(0,0,0),hm=new S(1,1,1),Ln=new S,ws=new S,Ut=new S,yc=new ee,wc=new Ve;class Ot{constructor(e=0,t=0,n=0,i=Ot.DefaultOrder){this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ft(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ft(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ft(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ft(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ft(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return yc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(yc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return wc.setFromEuler(this),this.setFromQuaternion(wc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}toVector3(e){return e?e.set(this._x,this._y,this._z):new S(this._x,this._y,this._z)}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}Ot.prototype.isEuler=!0;Ot.DefaultOrder="XYZ";Ot.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class um{constructor(){this.mask=1}set(e){this.mask=1<<e|0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}}let dm=0;const Sc=new S,wi=new Ve,un=new ee,Ss=new S,xr=new S,fm=new S,pm=new Ve,Mc=new S(1,0,0),Ac=new S(0,1,0),bc=new S(0,0,1),mm={type:"added"},Tc={type:"removed"};class Ne extends ci{constructor(){super(),Object.defineProperty(this,"id",{value:dm++}),this.uuid=Vt(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ne.DefaultUp.clone();const e=new S,t=new Ot,n=new Ve,i=new S(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ee},normalMatrix:{value:new pt}}),this.matrix=new ee,this.matrixWorld=new ee,this.matrixAutoUpdate=Ne.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new um,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return wi.setFromAxisAngle(e,t),this.quaternion.multiply(wi),this}rotateOnWorldAxis(e,t){return wi.setFromAxisAngle(e,t),this.quaternion.premultiply(wi),this}rotateX(e){return this.rotateOnAxis(Mc,e)}rotateY(e){return this.rotateOnAxis(Ac,e)}rotateZ(e){return this.rotateOnAxis(bc,e)}translateOnAxis(e,t){return Sc.copy(e).applyQuaternion(this.quaternion),this.position.add(Sc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Mc,e)}translateY(e){return this.translateOnAxis(Ac,e)}translateZ(e){return this.translateOnAxis(bc,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(un.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ss.copy(e):Ss.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),xr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?un.lookAt(xr,Ss,this.up):un.lookAt(Ss,xr,this.up),this.quaternion.setFromRotationMatrix(un),i&&(un.extractRotation(i.matrixWorld),wi.setFromRotationMatrix(un),this.quaternion.premultiply(wi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(mm)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Tc)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Tc)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),un.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),un.multiply(e.parent.matrixWorld)),e.applyMatrix4(un),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xr,e,fm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xr,pm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Ne.DefaultUp=new S(0,1,0);Ne.DefaultMatrixAutoUpdate=!0;Ne.prototype.isObject3D=!0;const qt=new S,dn=new S,Ja=new S,fn=new S,Si=new S,Mi=new S,Ec=new S,Za=new S,Ka=new S,$a=new S;class ht{constructor(e=new S,t=new S,n=new S){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),qt.subVectors(e,t),i.cross(qt);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){qt.subVectors(i,t),dn.subVectors(n,t),Ja.subVectors(e,t);const a=qt.dot(qt),o=qt.dot(dn),l=qt.dot(Ja),c=dn.dot(dn),h=dn.dot(Ja),u=a*c-o*o;if(u===0)return r.set(-2,-1,-1);const d=1/u,f=(c*l-o*h)*d,p=(a*h-o*l)*d;return r.set(1-f-p,p,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,fn),fn.x>=0&&fn.y>=0&&fn.x+fn.y<=1}static getUV(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,fn),l.set(0,0),l.addScaledVector(r,fn.x),l.addScaledVector(a,fn.y),l.addScaledVector(o,fn.z),l}static isFrontFacing(e,t,n,i){return qt.subVectors(n,t),dn.subVectors(e,t),qt.cross(dn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qt.subVectors(this.c,this.b),dn.subVectors(this.a,this.b),qt.cross(dn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ht.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ht.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return ht.getUV(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return ht.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ht.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;Si.subVectors(i,n),Mi.subVectors(r,n),Za.subVectors(e,n);const l=Si.dot(Za),c=Mi.dot(Za);if(l<=0&&c<=0)return t.copy(n);Ka.subVectors(e,i);const h=Si.dot(Ka),u=Mi.dot(Ka);if(h>=0&&u<=h)return t.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Si,a);$a.subVectors(e,r);const f=Si.dot($a),p=Mi.dot($a);if(p>=0&&f<=p)return t.copy(r);const _=f*c-l*p;if(_<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Mi,o);const v=h*p-f*u;if(v<=0&&u-h>=0&&f-p>=0)return Ec.subVectors(r,i),o=(u-h)/(u-h+(f-p)),t.copy(i).addScaledVector(Ec,o);const m=1/(v+_+d);return a=_*m,o=d*m,t.copy(n).addScaledVector(Si,a).addScaledVector(Mi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let gm=0;class _t extends ci{constructor(){super(),Object.defineProperty(this,"id",{value:gm++}),this.uuid=Vt(),this.name="",this.type="Material",this.fog=!0,this.blending=ki,this.side=Wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=nu,this.blendDst=iu,this.blendEquation=ri,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ro,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ka,this.stencilZFail=ka,this.stencilZPass=ka,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaTest=0,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0}onBuild(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===eu;continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen&&this.sheen.isColor&&(n.sheen=this.sheen.getHex()),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ki&&(n.blending=this.blending),this.side!==Wi&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.morphTargets===!0&&(n.morphTargets=!0),this.morphNormals===!0&&(n.morphNormals=!0),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.fog=e.fog,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}_t.prototype.isMaterial=!0;const uu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Jt={h:0,s:0,l:0},Ms={h:0,s:0,l:0};function eo(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}function to(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function no(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}class J{constructor(e,t,n){return t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,this}setRGB(e,t,n){return this.r=e,this.g=t,this.b=n,this}setHSL(e,t,n){if(e=sl(e,1),t=Ft(t,0,1),n=Ft(n,0,1),t===0)this.r=this.g=this.b=n;else{const i=n<=.5?n*(1+t):n+t-n*t,r=2*n-i;this.r=eo(r,i,e+1/3),this.g=eo(r,i,e),this.b=eo(r,i,e-1/3)}return this}setStyle(e){function t(i){i!==void 0&&parseFloat(i)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let i;const r=n[1],a=n[2];switch(r){case"rgb":case"rgba":if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(i[1],10))/255,this.g=Math.min(255,parseInt(i[2],10))/255,this.b=Math.min(255,parseInt(i[3],10))/255,t(i[4]),this;if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(i[1],10))/100,this.g=Math.min(100,parseInt(i[2],10))/100,this.b=Math.min(100,parseInt(i[3],10))/100,t(i[4]),this;break;case"hsl":case"hsla":if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const o=parseFloat(i[1])/360,l=parseInt(i[2],10)/100,c=parseInt(i[3],10)/100;return t(i[4]),this.setHSL(o,l,c)}break}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const i=n[1],r=i.length;if(r===3)return this.r=parseInt(i.charAt(0)+i.charAt(0),16)/255,this.g=parseInt(i.charAt(1)+i.charAt(1),16)/255,this.b=parseInt(i.charAt(2)+i.charAt(2),16)/255,this;if(r===6)return this.r=parseInt(i.charAt(0)+i.charAt(1),16)/255,this.g=parseInt(i.charAt(2)+i.charAt(3),16)/255,this.b=parseInt(i.charAt(4)+i.charAt(5),16)/255,this}return e&&e.length>0?this.setColorName(e):this}setColorName(e){const t=uu[e.toLowerCase()];return t!==void 0?this.setHex(t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copyGammaToLinear(e,t=2){return this.r=Math.pow(e.r,t),this.g=Math.pow(e.g,t),this.b=Math.pow(e.b,t),this}copyLinearToGamma(e,t=2){const n=t>0?1/t:1;return this.r=Math.pow(e.r,n),this.g=Math.pow(e.g,n),this.b=Math.pow(e.b,n),this}convertGammaToLinear(e){return this.copyGammaToLinear(this,e),this}convertLinearToGamma(e){return this.copyLinearToGamma(this,e),this}copySRGBToLinear(e){return this.r=to(e.r),this.g=to(e.g),this.b=to(e.b),this}copyLinearToSRGB(e){return this.r=no(e.r),this.g=no(e.g),this.b=no(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(){return this.r*255<<16^this.g*255<<8^this.b*255<<0}getHexString(){return("000000"+this.getHex().toString(16)).slice(-6)}getHSL(e){const t=this.r,n=this.g,i=this.b,r=Math.max(t,n,i),a=Math.min(t,n,i);let o,l;const c=(a+r)/2;if(a===r)o=0,l=0;else{const h=r-a;switch(l=c<=.5?h/(r+a):h/(2-r-a),r){case t:o=(n-i)/h+(n<i?6:0);break;case n:o=(i-t)/h+2;break;case i:o=(t-n)/h+4;break}o/=6}return e.h=o,e.s=l,e.l=c,e}getStyle(){return"rgb("+(this.r*255|0)+","+(this.g*255|0)+","+(this.b*255|0)+")"}offsetHSL(e,t,n){return this.getHSL(Jt),Jt.h+=e,Jt.s+=t,Jt.l+=n,this.setHSL(Jt.h,Jt.s,Jt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Jt),e.getHSL(Ms);const n=Br(Jt.h,Ms.h,t),i=Br(Jt.s,Ms.s,t),r=Br(Jt.l,Ms.l,t);return this.setHSL(n,i,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}}J.NAMES=uu;J.prototype.isColor=!0;J.prototype.r=1;J.prototype.g=1;J.prototype.b=1;class $t extends _t{constructor(e){super(),this.type="MeshBasicMaterial",this.color=new J(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ba,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.morphTargets=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.morphTargets=e.morphTargets,this}}$t.prototype.isMeshBasicMaterial=!0;const Ye=new S,As=new X;class $e{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=Yr,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),a=new J),t[n++]=a.r,t[n++]=a.g,t[n++]=a.b}return this}copyVector2sArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),a=new X),t[n++]=a.x,t[n++]=a.y}return this}copyVector3sArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),a=new S),t[n++]=a.x,t[n++]=a.y,t[n++]=a.z}return this}copyVector4sArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),a=new Ue),t[n++]=a.x,t[n++]=a.y,t[n++]=a.z,t[n++]=a.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)As.fromBufferAttribute(this,t),As.applyMatrix3(e),this.setXY(t,As.x,As.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ye.fromBufferAttribute(this,t),Ye.applyMatrix3(e),this.setXYZ(t,Ye.x,Ye.y,Ye.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ye.x=this.getX(t),Ye.y=this.getY(t),Ye.z=this.getZ(t),Ye.applyMatrix4(e),this.setXYZ(t,Ye.x,Ye.y,Ye.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ye.x=this.getX(t),Ye.y=this.getY(t),Ye.z=this.getZ(t),Ye.applyNormalMatrix(e),this.setXYZ(t,Ye.x,Ye.y,Ye.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ye.x=this.getX(t),Ye.y=this.getY(t),Ye.z=this.getZ(t),Ye.transformDirection(e),this.setXYZ(t,Ye.x,Ye.y,Ye.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Yr&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}$e.prototype.isBufferAttribute=!0;class al extends $e{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class du extends $e{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class _m extends $e{constructor(e,t,n){super(new Uint16Array(e),t,n)}}_m.prototype.isFloat16BufferAttribute=!0;class Me extends $e{constructor(e,t,n){super(new Float32Array(e),t,n)}}function fu(s){if(s.length===0)return-1/0;let e=s[0];for(let t=1,n=s.length;t<n;++t)s[t]>e&&(e=s[t]);return e}let vm=0;const Gt=new ee,io=new Ne,Ai=new S,Bt=new kt,yr=new kt,dt=new S;class De extends ci{constructor(){super(),Object.defineProperty(this,"id",{value:vm++}),this.uuid=Vt(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(fu(e)>65535?du:al)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new pt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Gt.makeRotationFromQuaternion(e),this.applyMatrix4(Gt),this}rotateX(e){return Gt.makeRotationX(e),this.applyMatrix4(Gt),this}rotateY(e){return Gt.makeRotationY(e),this.applyMatrix4(Gt),this}rotateZ(e){return Gt.makeRotationZ(e),this.applyMatrix4(Gt),this}translate(e,t,n){return Gt.makeTranslation(e,t,n),this.applyMatrix4(Gt),this}scale(e,t,n){return Gt.makeScale(e,t,n),this.applyMatrix4(Gt),this}lookAt(e){return io.lookAt(e),io.updateMatrix(),this.applyMatrix4(io.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ai).negate(),this.translate(Ai.x,Ai.y,Ai.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Me(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new kt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new S(-1/0,-1/0,-1/0),new S(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Bt.setFromBufferAttribute(r),this.morphTargetsRelative?(dt.addVectors(this.boundingBox.min,Bt.min),this.boundingBox.expandByPoint(dt),dt.addVectors(this.boundingBox.max,Bt.max),this.boundingBox.expandByPoint(dt)):(this.boundingBox.expandByPoint(Bt.min),this.boundingBox.expandByPoint(Bt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new S,1/0);return}if(e){const n=this.boundingSphere.center;if(Bt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];yr.setFromBufferAttribute(o),this.morphTargetsRelative?(dt.addVectors(Bt.min,yr.min),Bt.expandByPoint(dt),dt.addVectors(Bt.max,yr.max),Bt.expandByPoint(dt)):(Bt.expandByPoint(yr.min),Bt.expandByPoint(yr.max))}Bt.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)dt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(dt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)dt.fromBufferAttribute(o,c),l&&(Ai.fromBufferAttribute(e,c),dt.add(Ai)),i=Math.max(i,n.distanceToSquared(dt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeFaceNormals(){}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,a=t.uv.array,o=i.length/3;t.tangent===void 0&&this.setAttribute("tangent",new $e(new Float32Array(4*o),4));const l=t.tangent.array,c=[],h=[];for(let R=0;R<o;R++)c[R]=new S,h[R]=new S;const u=new S,d=new S,f=new S,p=new X,_=new X,v=new X,m=new S,g=new S;function x(R,z,H){u.fromArray(i,R*3),d.fromArray(i,z*3),f.fromArray(i,H*3),p.fromArray(a,R*2),_.fromArray(a,z*2),v.fromArray(a,H*2),d.sub(u),f.sub(u),_.sub(p),v.sub(p);const F=1/(_.x*v.y-v.x*_.y);isFinite(F)&&(m.copy(d).multiplyScalar(v.y).addScaledVector(f,-_.y).multiplyScalar(F),g.copy(f).multiplyScalar(_.x).addScaledVector(d,-v.x).multiplyScalar(F),c[R].add(m),c[z].add(m),c[H].add(m),h[R].add(g),h[z].add(g),h[H].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let R=0,z=M.length;R<z;++R){const H=M[R],F=H.start,I=H.count;for(let C=F,P=F+I;C<P;C+=3)x(n[C+0],n[C+1],n[C+2])}const w=new S,y=new S,A=new S,E=new S;function D(R){A.fromArray(r,R*3),E.copy(A);const z=c[R];w.copy(z),w.sub(A.multiplyScalar(A.dot(z))).normalize(),y.crossVectors(E,z);const F=y.dot(h[R])<0?-1:1;l[R*4]=w.x,l[R*4+1]=w.y,l[R*4+2]=w.z,l[R*4+3]=F}for(let R=0,z=M.length;R<z;++R){const H=M[R],F=H.start,I=H.count;for(let C=F,P=F+I;C<P;C+=3)D(n[C+0]),D(n[C+1]),D(n[C+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new $e(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new S,r=new S,a=new S,o=new S,l=new S,c=new S,h=new S,u=new S;if(e)for(let d=0,f=e.count;d<f;d+=3){const p=e.getX(d+0),_=e.getX(d+1),v=e.getX(d+2);i.fromBufferAttribute(t,p),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,v),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,v),o.add(h),l.add(h),c.add(h),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(v,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const n=this.attributes;for(const i in n){if(e.attributes[i]===void 0)continue;const a=n[i].array,o=e.attributes[i],l=o.array,c=o.itemSize*t,h=Math.min(l.length,a.length-c);for(let u=0,d=c;u<h;u++,d++)a[d]=l[u]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)dt.fromBufferAttribute(e,t),dt.normalize(),e.setXYZ(t,dt.x,dt.y,dt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let f=0,p=0;for(let _=0,v=l.length;_<v;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*h;for(let m=0;m<h;m++)d[p++]=c[f++]}return new $e(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new De,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new De().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}De.prototype.isBufferGeometry=!0;const Lc=new ee,bi=new hi,ro=new Vn,Pn=new S,Cn=new S,Fn=new S,so=new S,ao=new S,oo=new S,bs=new S,Ts=new S,Es=new S,Ls=new X,Ps=new X,Cs=new X,lo=new S,Fs=new S;class Ke extends Ne{constructor(e=new De,t=new $t){super(),this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),ro.copy(n.boundingSphere),ro.applyMatrix4(r),e.ray.intersectsSphere(ro)===!1)||(Lc.copy(r).invert(),bi.copy(e.ray).applyMatrix4(Lc),n.boundingBox!==null&&bi.intersectsBox(n.boundingBox)===!1))return;let a;if(n.isBufferGeometry){const o=n.index,l=n.attributes.position,c=n.morphAttributes.position,h=n.morphTargetsRelative,u=n.attributes.uv,d=n.attributes.uv2,f=n.groups,p=n.drawRange;if(o!==null)if(Array.isArray(i))for(let _=0,v=f.length;_<v;_++){const m=f[_],g=i[m.materialIndex],x=Math.max(m.start,p.start),M=Math.min(m.start+m.count,p.start+p.count);for(let w=x,y=M;w<y;w+=3){const A=o.getX(w),E=o.getX(w+1),D=o.getX(w+2);a=Rs(this,g,e,bi,l,c,h,u,d,A,E,D),a&&(a.faceIndex=Math.floor(w/3),a.face.materialIndex=m.materialIndex,t.push(a))}}else{const _=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let m=_,g=v;m<g;m+=3){const x=o.getX(m),M=o.getX(m+1),w=o.getX(m+2);a=Rs(this,i,e,bi,l,c,h,u,d,x,M,w),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(i))for(let _=0,v=f.length;_<v;_++){const m=f[_],g=i[m.materialIndex],x=Math.max(m.start,p.start),M=Math.min(m.start+m.count,p.start+p.count);for(let w=x,y=M;w<y;w+=3){const A=w,E=w+1,D=w+2;a=Rs(this,g,e,bi,l,c,h,u,d,A,E,D),a&&(a.faceIndex=Math.floor(w/3),a.face.materialIndex=m.materialIndex,t.push(a))}}else{const _=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=_,g=v;m<g;m+=3){const x=m,M=m+1,w=m+2;a=Rs(this,i,e,bi,l,c,h,u,d,x,M,w),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}}}else n.isGeometry&&console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}Ke.prototype.isMesh=!0;function xm(s,e,t,n,i,r,a,o){let l;if(e.side===st?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side!==kn,o),l===null)return null;Fs.copy(o),Fs.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Fs);return c<t.near||c>t.far?null:{distance:c,point:Fs.clone(),object:s}}function Rs(s,e,t,n,i,r,a,o,l,c,h,u){Pn.fromBufferAttribute(i,c),Cn.fromBufferAttribute(i,h),Fn.fromBufferAttribute(i,u);const d=s.morphTargetInfluences;if(e.morphTargets&&r&&d){bs.set(0,0,0),Ts.set(0,0,0),Es.set(0,0,0);for(let p=0,_=r.length;p<_;p++){const v=d[p],m=r[p];v!==0&&(so.fromBufferAttribute(m,c),ao.fromBufferAttribute(m,h),oo.fromBufferAttribute(m,u),a?(bs.addScaledVector(so,v),Ts.addScaledVector(ao,v),Es.addScaledVector(oo,v)):(bs.addScaledVector(so.sub(Pn),v),Ts.addScaledVector(ao.sub(Cn),v),Es.addScaledVector(oo.sub(Fn),v)))}Pn.add(bs),Cn.add(Ts),Fn.add(Es)}s.isSkinnedMesh&&(s.boneTransform(c,Pn),s.boneTransform(h,Cn),s.boneTransform(u,Fn));const f=xm(s,e,t,n,Pn,Cn,Fn,lo);if(f){o&&(Ls.fromBufferAttribute(o,c),Ps.fromBufferAttribute(o,h),Cs.fromBufferAttribute(o,u),f.uv=ht.getUV(lo,Pn,Cn,Fn,Ls,Ps,Cs,new X)),l&&(Ls.fromBufferAttribute(l,c),Ps.fromBufferAttribute(l,h),Cs.fromBufferAttribute(l,u),f.uv2=ht.getUV(lo,Pn,Cn,Fn,Ls,Ps,Cs,new X));const p={a:c,b:h,c:u,normal:new S,materialIndex:0};ht.getNormal(Pn,Cn,Fn,p.normal),f.face=p}return f}class wn extends De{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,f=0;p("z","y","x",-1,-1,n,t,e,a,r,0),p("z","y","x",1,-1,n,t,-e,a,r,1),p("x","z","y",1,1,e,n,t,i,a,2),p("x","z","y",1,-1,e,n,-t,i,a,3),p("x","y","z",1,-1,e,t,n,i,r,4),p("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Me(c,3)),this.setAttribute("normal",new Me(h,3)),this.setAttribute("uv",new Me(u,2));function p(_,v,m,g,x,M,w,y,A,E,D){const R=M/A,z=w/E,H=M/2,F=w/2,I=y/2,C=A+1,P=E+1;let B=0,j=0;const G=new S;for(let ne=0;ne<P;ne++){const K=ne*z-F;for(let ue=0;ue<C;ue++){const ce=ue*R-H;G[_]=ce*g,G[v]=K*x,G[m]=I,c.push(G.x,G.y,G.z),G[_]=0,G[v]=0,G[m]=y>0?1:-1,h.push(G.x,G.y,G.z),u.push(ue/A),u.push(1-ne/E),B+=1}}for(let ne=0;ne<E;ne++)for(let K=0;K<A;K++){const ue=d+K+C*ne,ce=d+K+C*(ne+1),me=d+(K+1)+C*(ne+1),he=d+(K+1)+C*ne;l.push(ue,ce,he),l.push(ce,me,he),j+=6}o.addGroup(f,j,D),f+=j,d+=B}}static fromJSON(e){return new wn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Yi(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function At(s){const e={};for(let t=0;t<s.length;t++){const n=Yi(s[t]);for(const i in n)e[i]=n[i]}return e}const da={clone:Yi,merge:At};var ym=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class mt extends _t{constructor(e){super(),this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=ym,this.fragmentShader=wm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.morphTargets=!1,this.morphNormals=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Yi(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.lights=e.lights,this.clipping=e.clipping,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}mt.prototype.isShaderMaterial=!0;class ol extends Ne{constructor(){super(),this.type="Camera",this.matrixWorldInverse=new ee,this.projectionMatrix=new ee,this.projectionMatrixInverse=new ee}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}ol.prototype.isCamera=!0;class yt extends ol{constructor(e=50,t=1,n=.1,i=2e3){super(),this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=jr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ur*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return jr*2*Math.atan(Math.tan(Ur*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ur*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}yt.prototype.isPerspectiveCamera=!0;const Ti=90,Ei=1;class ll extends Ne{constructor(e,t,n){if(super(),this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;const i=new yt(Ti,Ei,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new S(1,0,0)),this.add(i);const r=new yt(Ti,Ei,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new S(-1,0,0)),this.add(r);const a=new yt(Ti,Ei,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(new S(0,1,0)),this.add(a);const o=new yt(Ti,Ei,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(new S(0,-1,0)),this.add(o);const l=new yt(Ti,Ei,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new S(0,0,1)),this.add(l);const c=new yt(Ti,Ei,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new S(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,a,o,l,c]=this.children,h=e.xr.enabled,u=e.getRenderTarget();e.xr.enabled=!1;const d=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=d,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.xr.enabled=h}}class Ta extends lt{constructor(e,t,n,i,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:el,o=o!==void 0?o:Un,super(e,t,n,i,r,a,o,l,c,h),this._needsFlipEnvMap=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}Ta.prototype.isCubeTexture=!0;class pu extends Dt{constructor(e,t,n){Number.isInteger(t)&&(console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"),t=n),super(e,e,t),t=t||{},this.texture=new Ta(void 0,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ft,this.texture._needsFlipEnvMap=!1}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.format=It,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new wn(5,5,5),r=new mt({name:"CubemapFromEquirect",uniforms:Yi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:st,blending:Dr});r.uniforms.tEquirect.value=t;const a=new Ke(i,r),o=t.minFilter;return t.minFilter===tr&&(t.minFilter=ft),new ll(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}pu.prototype.isWebGLCubeRenderTarget=!0;const co=new S,Sm=new S,Mm=new pt;class _n{constructor(e=new S(1,0,0),t=0){this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=co.subVectors(n,t).cross(Sm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(co),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(n).multiplyScalar(r).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Mm.getNormalMatrix(e),i=this.coplanarPoint(co).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}_n.prototype.isPlane=!0;const Li=new Vn,Is=new S;let Ea=class{constructor(e=new _n,t=new _n,n=new _n,i=new _n,r=new _n,a=new _n){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],r=n[1],a=n[2],o=n[3],l=n[4],c=n[5],h=n[6],u=n[7],d=n[8],f=n[9],p=n[10],_=n[11],v=n[12],m=n[13],g=n[14],x=n[15];return t[0].setComponents(o-i,u-l,_-d,x-v).normalize(),t[1].setComponents(o+i,u+l,_+d,x+v).normalize(),t[2].setComponents(o+r,u+c,_+f,x+m).normalize(),t[3].setComponents(o-r,u-c,_-f,x-m).normalize(),t[4].setComponents(o-a,u-h,_-p,x-g).normalize(),t[5].setComponents(o+a,u+h,_+p,x+g).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Li.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Li)}intersectsSprite(e){return Li.center.set(0,0,0),Li.radius=.7071067811865476,Li.applyMatrix4(e.matrixWorld),this.intersectsSphere(Li)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Is.x=i.normal.x>0?e.max.x:e.min.x,Is.y=i.normal.y>0?e.max.y:e.min.y,Is.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Is)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function mu(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Am(s,e){const t=e.isWebGL2,n=new WeakMap;function i(c,h){const u=c.array,d=c.usage,f=s.createBuffer();s.bindBuffer(h,f),s.bufferData(h,u,d),c.onUploadCallback();let p=5126;return u instanceof Float32Array?p=5126:u instanceof Float64Array?console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."):u instanceof Uint16Array?c.isFloat16BufferAttribute?t?p=5131:console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."):p=5123:u instanceof Int16Array?p=5122:u instanceof Uint32Array?p=5125:u instanceof Int32Array?p=5124:u instanceof Int8Array?p=5120:(u instanceof Uint8Array||u instanceof Uint8ClampedArray)&&(p=5121),{buffer:f,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version}}function r(c,h,u){const d=h.array,f=h.updateRange;s.bindBuffer(u,c),f.count===-1?s.bufferSubData(u,0,d):(t?s.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):s.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1)}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(s.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u===void 0?n.set(c,i(c,h)):u.version<c.version&&(r(u.buffer,c,h),u.version=c.version)}return{get:a,remove:o,update:l}}class cl extends De{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=e/o,d=t/l,f=[],p=[],_=[],v=[];for(let m=0;m<h;m++){const g=m*d-a;for(let x=0;x<c;x++){const M=x*u-r;p.push(M,-g,0),_.push(0,0,1),v.push(x/o),v.push(1-m/l)}}for(let m=0;m<l;m++)for(let g=0;g<o;g++){const x=g+c*m,M=g+c*(m+1),w=g+1+c*(m+1),y=g+1+c*m;f.push(x,M,y),f.push(M,w,y)}this.setIndex(f),this.setAttribute("position",new Me(p,3)),this.setAttribute("normal",new Me(_,3)),this.setAttribute("uv",new Me(v,2))}static fromJSON(e){return new cl(e.width,e.height,e.widthSegments,e.heightSegments)}}var bm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Tm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Em=`#ifdef ALPHATEST
	if ( diffuseColor.a < ALPHATEST ) discard;
#endif`,Lm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );
	#endif
#endif`,Pm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Cm="vec3 transformed = vec3( position );",Fm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Rm=`vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {
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
#endif`,Im=`#ifdef USE_BUMPMAP
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
#endif`,Dm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Nm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Um=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Bm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Om=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,zm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,km=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Gm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Hm=`#define PI 3.141592653589793
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
}`,Vm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Wm=`vec3 transformedNormal = objectNormal;
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
#endif`,Xm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ym=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,jm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Jm=`
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
}`,Zm=`#ifdef USE_ENVMAP
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
#endif`,Km=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform int maxMipLevel;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,$m=`#ifdef USE_ENVMAP
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
#endif`,eg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tg=`#ifdef USE_ENVMAP
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
#endif`,ng=`#ifdef USE_FOG
	fogDepth = - mvPosition.z;
#endif`,ig=`#ifdef USE_FOG
	varying float fogDepth;
#endif`,rg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, fogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float fogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ag=`#ifdef USE_GRADIENTMAP
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
}`,og=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel= texture2D( lightMap, vUv2 );
	reflectedLight.indirectDiffuse += PI * lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
#endif`,lg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cg=`vec3 diffuse = vec3( 1.0 );
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
#endif`,hg=`uniform bool receiveShadow;
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
#endif`,ug=`#if defined( USE_ENVMAP )
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
#endif`,dg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fg=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,pg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mg=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,gg=`PhysicalMaterial material;
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
#endif`,_g=`struct PhysicalMaterial {
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
}`,vg=`
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
#endif`,xg=`#if defined( RE_IndirectDiffuse )
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
#endif`,yg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,wg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Sg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Ag=`#ifdef USE_LOGDEPTHBUF
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
#endif`,Tg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Eg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	vec4 mapTexel = texture2D( map, uv );
	diffuseColor *= mapTexelToLinear( mapTexel );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Lg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Cg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Fg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
	objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
	objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
	objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
#endif`,Rg=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifndef USE_MORPHNORMALS
		uniform float morphTargetInfluences[ 8 ];
	#else
		uniform float morphTargetInfluences[ 4 ];
	#endif
#endif`,Ig=`#ifdef USE_MORPHTARGETS
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
#endif`,Dg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,Ng=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,Ug=`#ifdef USE_NORMALMAP
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
#endif`,Bg=`#ifdef CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Og=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,zg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,kg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Gg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Vg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Wg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Yg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jg=`#ifdef USE_SHADOWMAP
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
#endif`,Qg=`#ifdef USE_SHADOWMAP
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
#endif`,qg=`#ifdef USE_SHADOWMAP
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
#endif`,Jg=`float getShadowMask() {
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
}`,Zg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Kg=`#ifdef USE_SKINNING
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
#endif`,$g=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,e0=`#ifdef USE_SKINNING
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
#endif`,t0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,n0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,i0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,r0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,s0=`#ifdef USE_TRANSMISSION
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
#endif`,a0=`#ifdef USE_TRANSMISSION
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
#endif`,o0=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,l0=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,c0=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,h0=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,u0=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,d0=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,f0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,p0=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,m0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,g0=`#include <envmap_common_pars_fragment>
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
}`,_0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,v0=`#if DEPTH_PACKING == 3200
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
}`,x0=`#include <common>
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
}`,y0=`#define DISTANCE
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
}`,w0=`#define DISTANCE
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
}`,S0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	vec4 texColor = texture2D( tEquirect, sampleUV );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,M0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,A0=`uniform vec3 diffuse;
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
}`,b0=`uniform float scale;
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
}`,T0=`uniform vec3 diffuse;
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
}`,E0=`#include <common>
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
}`,L0=`uniform vec3 diffuse;
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
}`,P0=`#define LAMBERT
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
}`,C0=`#define MATCAP
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
}`,F0=`#define MATCAP
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
}`,R0=`#define TOON
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
}`,I0=`#define TOON
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
}`,D0=`#define PHONG
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
}`,N0=`#define PHONG
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
}`,U0=`#define STANDARD
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
}`,B0=`#define STANDARD
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
}`,O0=`#define NORMAL
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
}`,z0=`#define NORMAL
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
}`,k0=`uniform vec3 diffuse;
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
}`,G0=`uniform float size;
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
}`,H0=`uniform vec3 color;
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
}`,V0=`#include <common>
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
}`,W0=`uniform vec3 diffuse;
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
}`,X0=`uniform float rotation;
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
}`;const Ce={alphamap_fragment:bm,alphamap_pars_fragment:Tm,alphatest_fragment:Em,aomap_fragment:Lm,aomap_pars_fragment:Pm,begin_vertex:Cm,beginnormal_vertex:Fm,bsdfs:Rm,bumpmap_pars_fragment:Im,clipping_planes_fragment:Dm,clipping_planes_pars_fragment:Nm,clipping_planes_pars_vertex:Um,clipping_planes_vertex:Bm,color_fragment:Om,color_pars_fragment:zm,color_pars_vertex:km,color_vertex:Gm,common:Hm,cube_uv_reflection_fragment:Vm,defaultnormal_vertex:Wm,displacementmap_pars_vertex:Xm,displacementmap_vertex:Ym,emissivemap_fragment:jm,emissivemap_pars_fragment:Qm,encodings_fragment:qm,encodings_pars_fragment:Jm,envmap_fragment:Zm,envmap_common_pars_fragment:Km,envmap_pars_fragment:$m,envmap_pars_vertex:eg,envmap_physical_pars_fragment:ug,envmap_vertex:tg,fog_vertex:ng,fog_pars_vertex:ig,fog_fragment:rg,fog_pars_fragment:sg,gradientmap_pars_fragment:ag,lightmap_fragment:og,lightmap_pars_fragment:lg,lights_lambert_vertex:cg,lights_pars_begin:hg,lights_toon_fragment:dg,lights_toon_pars_fragment:fg,lights_phong_fragment:pg,lights_phong_pars_fragment:mg,lights_physical_fragment:gg,lights_physical_pars_fragment:_g,lights_fragment_begin:vg,lights_fragment_maps:xg,lights_fragment_end:yg,logdepthbuf_fragment:wg,logdepthbuf_pars_fragment:Sg,logdepthbuf_pars_vertex:Mg,logdepthbuf_vertex:Ag,map_fragment:bg,map_pars_fragment:Tg,map_particle_fragment:Eg,map_particle_pars_fragment:Lg,metalnessmap_fragment:Pg,metalnessmap_pars_fragment:Cg,morphnormal_vertex:Fg,morphtarget_pars_vertex:Rg,morphtarget_vertex:Ig,normal_fragment_begin:Dg,normal_fragment_maps:Ng,normalmap_pars_fragment:Ug,clearcoat_normal_fragment_begin:Bg,clearcoat_normal_fragment_maps:Og,clearcoat_pars_fragment:zg,packing:kg,premultiplied_alpha_fragment:Gg,project_vertex:Hg,dithering_fragment:Vg,dithering_pars_fragment:Wg,roughnessmap_fragment:Xg,roughnessmap_pars_fragment:Yg,shadowmap_pars_fragment:jg,shadowmap_pars_vertex:Qg,shadowmap_vertex:qg,shadowmask_pars_fragment:Jg,skinbase_vertex:Zg,skinning_pars_vertex:Kg,skinning_vertex:$g,skinnormal_vertex:e0,specularmap_fragment:t0,specularmap_pars_fragment:n0,tonemapping_fragment:i0,tonemapping_pars_fragment:r0,transmission_fragment:s0,transmission_pars_fragment:a0,uv_pars_fragment:o0,uv_pars_vertex:l0,uv_vertex:c0,uv2_pars_fragment:h0,uv2_pars_vertex:u0,uv2_vertex:d0,worldpos_vertex:f0,background_frag:p0,background_vert:m0,cube_frag:g0,cube_vert:_0,depth_frag:v0,depth_vert:x0,distanceRGBA_frag:y0,distanceRGBA_vert:w0,equirect_frag:S0,equirect_vert:M0,linedashed_frag:A0,linedashed_vert:b0,meshbasic_frag:T0,meshbasic_vert:E0,meshlambert_frag:L0,meshlambert_vert:P0,meshmatcap_frag:C0,meshmatcap_vert:F0,meshtoon_frag:R0,meshtoon_vert:I0,meshphong_frag:D0,meshphong_vert:N0,meshphysical_frag:U0,meshphysical_vert:B0,normal_frag:O0,normal_vert:z0,points_frag:k0,points_vert:G0,shadow_frag:H0,shadow_vert:V0,sprite_frag:W0,sprite_vert:X0},re={common:{diffuse:{value:new J(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new pt},uv2Transform:{value:new pt},alphaMap:{value:null}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},refractionRatio:{value:.98},maxMipLevel:{value:0}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new X(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new J(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new J(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},uvTransform:{value:new pt}},sprite:{diffuse:{value:new J(16777215)},opacity:{value:1},center:{value:new X(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},uvTransform:{value:new pt}}},nn={basic:{uniforms:At([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:Ce.meshbasic_vert,fragmentShader:Ce.meshbasic_frag},lambert:{uniforms:At([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.fog,re.lights,{emissive:{value:new J(0)}}]),vertexShader:Ce.meshlambert_vert,fragmentShader:Ce.meshlambert_frag},phong:{uniforms:At([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new J(0)},specular:{value:new J(1118481)},shininess:{value:30}}]),vertexShader:Ce.meshphong_vert,fragmentShader:Ce.meshphong_frag},standard:{uniforms:At([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new J(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ce.meshphysical_vert,fragmentShader:Ce.meshphysical_frag},toon:{uniforms:At([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new J(0)}}]),vertexShader:Ce.meshtoon_vert,fragmentShader:Ce.meshtoon_frag},matcap:{uniforms:At([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:Ce.meshmatcap_vert,fragmentShader:Ce.meshmatcap_frag},points:{uniforms:At([re.points,re.fog]),vertexShader:Ce.points_vert,fragmentShader:Ce.points_frag},dashed:{uniforms:At([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ce.linedashed_vert,fragmentShader:Ce.linedashed_frag},depth:{uniforms:At([re.common,re.displacementmap]),vertexShader:Ce.depth_vert,fragmentShader:Ce.depth_frag},normal:{uniforms:At([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:Ce.normal_vert,fragmentShader:Ce.normal_frag},sprite:{uniforms:At([re.sprite,re.fog]),vertexShader:Ce.sprite_vert,fragmentShader:Ce.sprite_frag},background:{uniforms:{uvTransform:{value:new pt},t2D:{value:null}},vertexShader:Ce.background_vert,fragmentShader:Ce.background_frag},cube:{uniforms:At([re.envmap,{opacity:{value:1}}]),vertexShader:Ce.cube_vert,fragmentShader:Ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ce.equirect_vert,fragmentShader:Ce.equirect_frag},distanceRGBA:{uniforms:At([re.common,re.displacementmap,{referencePosition:{value:new S},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ce.distanceRGBA_vert,fragmentShader:Ce.distanceRGBA_frag},shadow:{uniforms:At([re.lights,re.fog,{color:{value:new J(0)},opacity:{value:1}}]),vertexShader:Ce.shadow_vert,fragmentShader:Ce.shadow_frag}};nn.physical={uniforms:At([nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new X(1,1)},clearcoatNormalMap:{value:null},sheen:{value:new J(0)},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new X},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new J(0)}}]),vertexShader:Ce.meshphysical_vert,fragmentShader:Ce.meshphysical_frag};function Y0(s,e,t,n,i){const r=new J(0);let a=0,o,l,c=null,h=0,u=null;function d(p,_){let v=!1,m=_.isScene===!0?_.background:null;m&&m.isTexture&&(m=e.get(m));const g=s.xr,x=g.getSession&&g.getSession();x&&x.environmentBlendMode==="additive"&&(m=null),m===null?f(r,a):m&&m.isColor&&(f(m,1),v=!0),(s.autoClear||v)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),m&&(m.isCubeTexture||m.mapping===nl)?(l===void 0&&(l=new Ke(new wn(1,1,1),new mt({name:"BackgroundCubeMaterial",uniforms:Yi(nn.cube.uniforms),vertexShader:nn.cube.vertexShader,fragmentShader:nn.cube.fragmentShader,side:st,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(M,w,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=m,l.material.uniforms.flipEnvMap.value=m.isCubeTexture&&m._needsFlipEnvMap?-1:1,(c!==m||h!==m.version||u!==s.toneMapping)&&(l.material.needsUpdate=!0,c=m,h=m.version,u=s.toneMapping),p.unshift(l,l.geometry,l.material,0,0,null)):m&&m.isTexture&&(o===void 0&&(o=new Ke(new cl(2,2),new mt({name:"BackgroundMaterial",uniforms:Yi(nn.background.uniforms),vertexShader:nn.background.vertexShader,fragmentShader:nn.background.fragmentShader,side:Wi,depthTest:!1,depthWrite:!1,fog:!1})),o.geometry.deleteAttribute("normal"),Object.defineProperty(o.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(o)),o.material.uniforms.t2D.value=m,m.matrixAutoUpdate===!0&&m.updateMatrix(),o.material.uniforms.uvTransform.value.copy(m.matrix),(c!==m||h!==m.version||u!==s.toneMapping)&&(o.material.needsUpdate=!0,c=m,h=m.version,u=s.toneMapping),p.unshift(o,o.geometry,o.material,0,0,null))}function f(p,_){t.buffers.color.setClear(p.r,p.g,p.b,_,i)}return{getClearColor:function(){return r},setClearColor:function(p,_=1){r.set(p),a=_,f(r,a)},getClearAlpha:function(){return a},setClearAlpha:function(p){a=p,f(r,a)},render:d}}function j0(s,e,t,n){const i=s.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=_(null);let c=l;function h(F,I,C,P,B){let j=!1;if(a){const G=p(P,C,I);c!==G&&(c=G,d(c.object)),j=v(P,B),j&&m(P,B)}else{const G=I.wireframe===!0;(c.geometry!==P.id||c.program!==C.id||c.wireframe!==G)&&(c.geometry=P.id,c.program=C.id,c.wireframe=G,j=!0)}F.isInstancedMesh===!0&&(j=!0),B!==null&&t.update(B,34963),j&&(A(F,I,C,P),B!==null&&s.bindBuffer(34963,t.get(B).buffer))}function u(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function d(F){return n.isWebGL2?s.bindVertexArray(F):r.bindVertexArrayOES(F)}function f(F){return n.isWebGL2?s.deleteVertexArray(F):r.deleteVertexArrayOES(F)}function p(F,I,C){const P=C.wireframe===!0;let B=o[F.id];B===void 0&&(B={},o[F.id]=B);let j=B[I.id];j===void 0&&(j={},B[I.id]=j);let G=j[P];return G===void 0&&(G=_(u()),j[P]=G),G}function _(F){const I=[],C=[],P=[];for(let B=0;B<i;B++)I[B]=0,C[B]=0,P[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:C,attributeDivisors:P,object:F,attributes:{},index:null}}function v(F,I){const C=c.attributes,P=F.attributes;let B=0;for(const j in P){const G=C[j],ne=P[j];if(G===void 0||G.attribute!==ne||G.data!==ne.data)return!0;B++}return c.attributesNum!==B||c.index!==I}function m(F,I){const C={},P=F.attributes;let B=0;for(const j in P){const G=P[j],ne={};ne.attribute=G,G.data&&(ne.data=G.data),C[j]=ne,B++}c.attributes=C,c.attributesNum=B,c.index=I}function g(){const F=c.newAttributes;for(let I=0,C=F.length;I<C;I++)F[I]=0}function x(F){M(F,0)}function M(F,I){const C=c.newAttributes,P=c.enabledAttributes,B=c.attributeDivisors;C[F]=1,P[F]===0&&(s.enableVertexAttribArray(F),P[F]=1),B[F]!==I&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](F,I),B[F]=I)}function w(){const F=c.newAttributes,I=c.enabledAttributes;for(let C=0,P=I.length;C<P;C++)I[C]!==F[C]&&(s.disableVertexAttribArray(C),I[C]=0)}function y(F,I,C,P,B,j){n.isWebGL2===!0&&(C===5124||C===5125)?s.vertexAttribIPointer(F,I,C,B,j):s.vertexAttribPointer(F,I,C,P,B,j)}function A(F,I,C,P){if(n.isWebGL2===!1&&(F.isInstancedMesh||P.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;g();const B=P.attributes,j=C.getAttributes(),G=I.defaultAttributeValues;for(const ne in j){const K=j[ne];if(K>=0){const ue=B[ne];if(ue!==void 0){const ce=ue.normalized,me=ue.itemSize,he=t.get(ue);if(he===void 0)continue;const V=he.buffer,Xe=he.type,Te=he.bytesPerElement;if(ue.isInterleavedBufferAttribute){const we=ue.data,pe=we.stride,be=ue.offset;we&&we.isInstancedInterleavedBuffer?(M(K,we.meshPerAttribute),P._maxInstanceCount===void 0&&(P._maxInstanceCount=we.meshPerAttribute*we.count)):x(K),s.bindBuffer(34962,V),y(K,me,Xe,ce,pe*Te,be*Te)}else ue.isInstancedBufferAttribute?(M(K,ue.meshPerAttribute),P._maxInstanceCount===void 0&&(P._maxInstanceCount=ue.meshPerAttribute*ue.count)):x(K),s.bindBuffer(34962,V),y(K,me,Xe,ce,0,0)}else if(ne==="instanceMatrix"){const ce=t.get(F.instanceMatrix);if(ce===void 0)continue;const me=ce.buffer,he=ce.type;M(K+0,1),M(K+1,1),M(K+2,1),M(K+3,1),s.bindBuffer(34962,me),s.vertexAttribPointer(K+0,4,he,!1,64,0),s.vertexAttribPointer(K+1,4,he,!1,64,16),s.vertexAttribPointer(K+2,4,he,!1,64,32),s.vertexAttribPointer(K+3,4,he,!1,64,48)}else if(ne==="instanceColor"){const ce=t.get(F.instanceColor);if(ce===void 0)continue;const me=ce.buffer,he=ce.type;M(K,1),s.bindBuffer(34962,me),s.vertexAttribPointer(K,3,he,!1,12,0)}else if(G!==void 0){const ce=G[ne];if(ce!==void 0)switch(ce.length){case 2:s.vertexAttrib2fv(K,ce);break;case 3:s.vertexAttrib3fv(K,ce);break;case 4:s.vertexAttrib4fv(K,ce);break;default:s.vertexAttrib1fv(K,ce)}}}}w()}function E(){z();for(const F in o){const I=o[F];for(const C in I){const P=I[C];for(const B in P)f(P[B].object),delete P[B];delete I[C]}delete o[F]}}function D(F){if(o[F.id]===void 0)return;const I=o[F.id];for(const C in I){const P=I[C];for(const B in P)f(P[B].object),delete P[B];delete I[C]}delete o[F.id]}function R(F){for(const I in o){const C=o[I];if(C[F.id]===void 0)continue;const P=C[F.id];for(const B in P)f(P[B].object),delete P[B];delete C[F.id]}}function z(){H(),c!==l&&(c=l,d(c.object))}function H(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:z,resetDefaultState:H,dispose:E,releaseStatesOfGeometry:D,releaseStatesOfProgram:R,initAttributes:g,enableAttribute:x,disableUnusedAttributes:w}}function Q0(s,e,t,n){const i=n.isWebGL2;let r;function a(c){r=c}function o(c,h){s.drawArrays(r,c,h),t.update(h,r,1)}function l(c,h,u){if(u===0)return;let d,f;if(i)d=s,f="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[f](r,c,h,u),t.update(h,r,u)}this.setMode=a,this.render=o,this.renderInstances=l}function q0(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(A){if(A==="highp"){if(s.getShaderPrecisionFormat(35633,36338).precision>0&&s.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(35633,36337).precision>0&&s.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&s instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&s instanceof WebGL2ComputeRenderingContext;let o=t.precision!==void 0?t.precision:"highp";const l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=s.getParameter(34930),d=s.getParameter(35660),f=s.getParameter(3379),p=s.getParameter(34076),_=s.getParameter(34921),v=s.getParameter(36347),m=s.getParameter(36348),g=s.getParameter(36349),x=d>0,M=a||e.has("OES_texture_float"),w=x&&M,y=a?s.getParameter(36183):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:p,maxAttributes:_,maxVertexUniforms:v,maxVaryings:m,maxFragmentUniforms:g,vertexTextures:x,floatFragmentTextures:M,floatVertexTextures:w,maxSamples:y}}function J0(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new _n,o=new pt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d,f){const p=u.length!==0||d||n!==0||i;return i=d,t=h(u,f,0),n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1,c()},this.setState=function(u,d,f){const p=u.clippingPlanes,_=u.clipIntersection,v=u.clipShadows,m=s.get(u);if(!i||p===null||p.length===0||r&&!v)r?h(null):c();else{const g=r?0:n,x=g*4;let M=m.clippingState||null;l.value=M,M=h(p,d,x,f);for(let w=0;w!==x;++w)M[w]=t[w];m.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,p){const _=u!==null?u.length:0;let v=null;if(_!==0){if(v=l.value,p!==!0||v===null){const m=f+_*4,g=d.matrixWorldInverse;o.getNormalMatrix(g),(v===null||v.length<m)&&(v=new Float32Array(m));for(let x=0,M=f;x!==_;++x,M+=4)a.copy(u[x]).applyMatrix4(g,o),a.normal.toArray(v,M),v[M+3]=a.constant}l.value=v,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,v}}function Z0(s){let e=new WeakMap;function t(a,o){return o===Io?a.mapping=el:o===ac&&(a.mapping=tl),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Io||o===ac)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=s.getRenderTarget(),h=new pu(l.height/2);return h.fromEquirectangularTexture(s,a),e.set(a,h),s.setRenderTarget(c),a.addEventListener("dispose",i),t(h.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}function K0(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function $0(s,e,t,n){const i={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const p in d.attributes)e.remove(d.attributes[p]);d.removeEventListener("dispose",a),delete i[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const p in d)e.update(d[p],34962);const f=u.morphAttributes;for(const p in f){const _=f[p];for(let v=0,m=_.length;v<m;v++)e.update(_[v],34962)}}function c(u){const d=[],f=u.index,p=u.attributes.position;let _=0;if(f!==null){const g=f.array;_=f.version;for(let x=0,M=g.length;x<M;x+=3){const w=g[x+0],y=g[x+1],A=g[x+2];d.push(w,y,y,A,A,w)}}else{const g=p.array;_=p.version;for(let x=0,M=g.length/3-1;x<M;x+=3){const w=x+0,y=x+1,A=x+2;d.push(w,y,y,A,A,w)}}const v=new(fu(d)>65535?du:al)(d,1);v.version=_;const m=r.get(u);m&&e.remove(m),r.set(u,v)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function e_(s,e,t,n){const i=n.isWebGL2;let r;function a(d){r=d}let o,l;function c(d){o=d.type,l=d.bytesPerElement}function h(d,f){s.drawElements(r,f,o,d*l),t.update(f,r,1)}function u(d,f,p){if(p===0)return;let _,v;if(i)_=s,v="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),v="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[v](r,f,o,d*l,p),t.update(f,r,p)}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=u}function t_(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case 4:t.triangles+=o*(r/3);break;case 1:t.lines+=o*(r/2);break;case 3:t.lines+=o*(r-1);break;case 2:t.lines+=o*r;break;case 0:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function n_(s,e){return s[0]-e[0]}function i_(s,e){return Math.abs(e[1])-Math.abs(s[1])}function r_(s){const e={},t=new Float32Array(8),n=[];for(let r=0;r<8;r++)n[r]=[r,0];function i(r,a,o,l){const c=r.morphTargetInfluences,h=c===void 0?0:c.length;let u=e[a.id];if(u===void 0||u.length!==h){u=[];for(let v=0;v<h;v++)u[v]=[v,0];e[a.id]=u}for(let v=0;v<h;v++){const m=u[v];m[0]=v,m[1]=c[v]}u.sort(i_);for(let v=0;v<8;v++)v<h&&u[v][1]?(n[v][0]=u[v][0],n[v][1]=u[v][1]):(n[v][0]=Number.MAX_SAFE_INTEGER,n[v][1]=0);n.sort(n_);const d=o.morphTargets&&a.morphAttributes.position,f=o.morphNormals&&a.morphAttributes.normal;let p=0;for(let v=0;v<8;v++){const m=n[v],g=m[0],x=m[1];g!==Number.MAX_SAFE_INTEGER&&x?(d&&a.getAttribute("morphTarget"+v)!==d[g]&&a.setAttribute("morphTarget"+v,d[g]),f&&a.getAttribute("morphNormal"+v)!==f[g]&&a.setAttribute("morphNormal"+v,f[g]),t[v]=x,p+=x):(d&&a.hasAttribute("morphTarget"+v)===!0&&a.deleteAttribute("morphTarget"+v),f&&a.hasAttribute("morphNormal"+v)===!0&&a.deleteAttribute("morphNormal"+v),t[v]=0)}const _=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(s,"morphTargetBaseInfluence",_),l.getUniforms().setValue(s,"morphTargetInfluences",t)}return{update:i}}function s_(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);return i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),u}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}class gu extends lt{constructor(e=null,t=1,n=1,i=1){super(null),this.image={data:e,width:t,height:n,depth:i},this.magFilter=ct,this.minFilter=ct,this.wrapR=Tt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}}gu.prototype.isDataTexture2DArray=!0;class _u extends lt{constructor(e=null,t=1,n=1,i=1){super(null),this.image={data:e,width:t,height:n,depth:i},this.magFilter=ct,this.minFilter=ct,this.wrapR=Tt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}}_u.prototype.isDataTexture3D=!0;const vu=new lt,a_=new gu,o_=new _u,xu=new Ta,Pc=[],Cc=[],Fc=new Float32Array(16),Rc=new Float32Array(9),Ic=new Float32Array(4);function ir(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Pc[i];if(r===void 0&&(r=new Float32Array(i),Pc[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Ct(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Et(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function yu(s,e){let t=Cc[e];t===void 0&&(t=new Int32Array(e),Cc[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function l_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function c_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;s.uniform2fv(this.addr,e),Et(t,e)}}function h_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ct(t,e))return;s.uniform3fv(this.addr,e),Et(t,e)}}function u_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;s.uniform4fv(this.addr,e),Et(t,e)}}function d_(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Et(t,e)}else{if(Ct(t,n))return;Ic.set(n),s.uniformMatrix2fv(this.addr,!1,Ic),Et(t,n)}}function f_(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Et(t,e)}else{if(Ct(t,n))return;Rc.set(n),s.uniformMatrix3fv(this.addr,!1,Rc),Et(t,n)}}function p_(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Et(t,e)}else{if(Ct(t,n))return;Fc.set(n),s.uniformMatrix4fv(this.addr,!1,Fc),Et(t,n)}}function m_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function g_(s,e){const t=this.cache;Ct(t,e)||(s.uniform2iv(this.addr,e),Et(t,e))}function __(s,e){const t=this.cache;Ct(t,e)||(s.uniform3iv(this.addr,e),Et(t,e))}function v_(s,e){const t=this.cache;Ct(t,e)||(s.uniform4iv(this.addr,e),Et(t,e))}function x_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function y_(s,e){const t=this.cache;Ct(t,e)||(s.uniform2uiv(this.addr,e),Et(t,e))}function w_(s,e){const t=this.cache;Ct(t,e)||(s.uniform3uiv(this.addr,e),Et(t,e))}function S_(s,e){const t=this.cache;Ct(t,e)||(s.uniform4uiv(this.addr,e),Et(t,e))}function M_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.safeSetTexture2D(e||vu,i)}function A_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||o_,i)}function b_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.safeSetTextureCube(e||xu,i)}function T_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||a_,i)}function E_(s){switch(s){case 5126:return l_;case 35664:return c_;case 35665:return h_;case 35666:return u_;case 35674:return d_;case 35675:return f_;case 35676:return p_;case 5124:case 35670:return m_;case 35667:case 35671:return g_;case 35668:case 35672:return __;case 35669:case 35673:return v_;case 5125:return x_;case 36294:return y_;case 36295:return w_;case 36296:return S_;case 35678:case 36198:case 36298:case 36306:case 35682:return M_;case 35679:case 36299:case 36307:return A_;case 35680:case 36300:case 36308:case 36293:return b_;case 36289:case 36303:case 36311:case 36292:return T_}}function L_(s,e){s.uniform1fv(this.addr,e)}function P_(s,e){const t=ir(e,this.size,2);s.uniform2fv(this.addr,t)}function C_(s,e){const t=ir(e,this.size,3);s.uniform3fv(this.addr,t)}function F_(s,e){const t=ir(e,this.size,4);s.uniform4fv(this.addr,t)}function R_(s,e){const t=ir(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function I_(s,e){const t=ir(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function D_(s,e){const t=ir(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function N_(s,e){s.uniform1iv(this.addr,e)}function U_(s,e){s.uniform2iv(this.addr,e)}function B_(s,e){s.uniform3iv(this.addr,e)}function O_(s,e){s.uniform4iv(this.addr,e)}function z_(s,e){s.uniform1uiv(this.addr,e)}function k_(s,e){s.uniform2uiv(this.addr,e)}function G_(s,e){s.uniform3uiv(this.addr,e)}function H_(s,e){s.uniform4uiv(this.addr,e)}function V_(s,e,t){const n=e.length,i=yu(t,n);s.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.safeSetTexture2D(e[r]||vu,i[r])}function W_(s,e,t){const n=e.length,i=yu(t,n);s.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.safeSetTextureCube(e[r]||xu,i[r])}function X_(s){switch(s){case 5126:return L_;case 35664:return P_;case 35665:return C_;case 35666:return F_;case 35674:return R_;case 35675:return I_;case 35676:return D_;case 5124:case 35670:return N_;case 35667:case 35671:return U_;case 35668:case 35672:return B_;case 35669:case 35673:return O_;case 5125:return z_;case 36294:return k_;case 36295:return G_;case 36296:return H_;case 35678:case 36198:case 36298:case 36306:case 35682:return V_;case 35680:case 36300:case 36308:case 36293:return W_}}function Y_(s,e,t){this.id=s,this.addr=t,this.cache=[],this.setValue=E_(e.type)}function wu(s,e,t){this.id=s,this.addr=t,this.cache=[],this.size=e.size,this.setValue=X_(e.type)}wu.prototype.updateCache=function(s){const e=this.cache;s instanceof Float32Array&&e.length!==s.length&&(this.cache=new Float32Array(s.length)),Et(e,s)};function Su(s){this.id=s,this.seq=[],this.map={}}Su.prototype.setValue=function(s,e,t){const n=this.seq;for(let i=0,r=n.length;i!==r;++i){const a=n[i];a.setValue(s,e[a.id],t)}};const ho=/(\w+)(\])?(\[|\.)?/g;function Dc(s,e){s.seq.push(e),s.map[e.id]=e}function j_(s,e,t){const n=s.name,i=n.length;for(ho.lastIndex=0;;){const r=ho.exec(n),a=ho.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Dc(t,c===void 0?new Y_(o,s,e):new wu(o,s,e));break}else{let u=t.map[o];u===void 0&&(u=new Su(o),Dc(t,u)),t=u}}}function Bn(s,e){this.seq=[],this.map={};const t=s.getProgramParameter(e,35718);for(let n=0;n<t;++n){const i=s.getActiveUniform(e,n),r=s.getUniformLocation(e,i.name);j_(i,r,this)}}Bn.prototype.setValue=function(s,e,t,n){const i=this.map[e];i!==void 0&&i.setValue(s,t,n)};Bn.prototype.setOptional=function(s,e,t){const n=e[t];n!==void 0&&this.setValue(s,t,n)};Bn.upload=function(s,e,t,n){for(let i=0,r=e.length;i!==r;++i){const a=e[i],o=t[a.id];o.needsUpdate!==!1&&a.setValue(s,o.value,n)}};Bn.seqWithValue=function(s,e){const t=[];for(let n=0,i=s.length;n!==i;++n){const r=s[n];r.id in e&&t.push(r)}return t};function Nc(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}let Q_=0;function q_(s){const e=s.split(`
`);for(let t=0;t<e.length;t++)e[t]=t+1+": "+e[t];return e.join(`
`)}function Mu(s){switch(s){case as:return["Linear","( value )"];case Rt:return["sRGB","( value )"];case Op:return["RGBE","( value )"];case kp:return["RGBM","( value, 7.0 )"];case Gp:return["RGBM","( value, 16.0 )"];case Hp:return["RGBD","( value, 256.0 )"];case Bp:return["Gamma","( value, float( GAMMA_FACTOR ) )"];case zp:return["LogLuv","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",s),["Linear","( value )"]}}function Uc(s,e,t){const n=s.getShaderParameter(e,35713),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=s.getShaderSource(e);return"THREE.WebGLShader: gl.getShaderInfoLog() "+t+`
`+i+q_(r)}function wr(s,e){const t=Mu(e);return"vec4 "+s+"( vec4 value ) { return "+t[0]+"ToLinear"+t[1]+"; }"}function J_(s,e){const t=Mu(e);return"vec4 "+s+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Z_(s,e){let t;switch(e){case Bf:t="Linear";break;case Of:t="Reinhard";break;case zf:t="OptimizedCineon";break;case kf:t="ACESFilmic";break;case Gf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function K_(s){return[s.extensionDerivatives||s.envMapCubeUV||s.bumpMap||s.tangentSpaceNormalMap||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission>0)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ir).join(`
`)}function $_(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ev(s,e){const t={},n=s.getProgramParameter(e,35721);for(let i=0;i<n;i++){const a=s.getActiveAttrib(e,i).name;t[a]=s.getAttribLocation(e,a)}return t}function Ir(s){return s!==""}function Bc(s,e){return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Oc(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const tv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bo(s){return s.replace(tv,nv)}function nv(s,e){const t=Ce[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Bo(t)}const iv=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,rv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zc(s){return s.replace(rv,Au).replace(iv,sv)}function sv(s,e,t,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),Au(s,e,t,n)}function Au(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function kc(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function av(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Kh?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===$h?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Fr&&(e="SHADOWMAP_TYPE_VSM"),e}function ov(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case el:case tl:e="ENVMAP_TYPE_CUBE";break;case nl:case il:e="ENVMAP_TYPE_CUBE_UV";break}return e}function lv(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case tl:case il:e="ENVMAP_MODE_REFRACTION";break}return e}function cv(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case ba:e="ENVMAP_BLENDING_MULTIPLY";break;case Nf:e="ENVMAP_BLENDING_MIX";break;case Uf:e="ENVMAP_BLENDING_ADD";break}return e}function hv(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=av(t),c=ov(t),h=lv(t),u=cv(t),d=s.gammaFactor>0?s.gammaFactor:1,f=t.isWebGL2?"":K_(t),p=$_(r),_=i.createProgram();let v,m,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=[p].filter(Ir).join(`
`),v.length>0&&(v+=`
`),m=[f,p].filter(Ir).join(`
`),m.length>0&&(m+=`
`)):(v=[kc(t),"#define SHADER_NAME "+t.shaderName,p,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define GAMMA_FACTOR "+d,"#define MAX_BONES "+t.maxBones,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.useVertexTexture?"#define BONE_TEXTURE":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_MORPHTARGETS","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ir).join(`
`),m=[f,kc(t),"#define SHADER_NAME "+t.shaderName,p,t.alphaTest?"#define ALPHATEST "+t.alphaTest+(t.alphaTest%1?"":".0"):"","#define GAMMA_FACTOR "+d,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.sheen?"#define USE_SHEEN":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"",(t.extensionShaderTextureLOD||t.envMap)&&t.rendererExtensionShaderTextureLod?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Gi?"#define TONE_MAPPING":"",t.toneMapping!==Gi?Ce.tonemapping_pars_fragment:"",t.toneMapping!==Gi?Z_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",Ce.encodings_pars_fragment,t.map?wr("mapTexelToLinear",t.mapEncoding):"",t.matcap?wr("matcapTexelToLinear",t.matcapEncoding):"",t.envMap?wr("envMapTexelToLinear",t.envMapEncoding):"",t.emissiveMap?wr("emissiveMapTexelToLinear",t.emissiveMapEncoding):"",t.lightMap?wr("lightMapTexelToLinear",t.lightMapEncoding):"",J_("linearToOutputTexel",t.outputEncoding),t.depthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ir).join(`
`)),a=Bo(a),a=Bc(a,t),a=Oc(a,t),o=Bo(o),o=Bc(o,t),o=Oc(o,t),a=zc(a),o=zc(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,v=["#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,m=["#define varying in",t.glslVersion===_c?"":"out highp vec4 pc_fragColor;",t.glslVersion===_c?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const x=g+v+a,M=g+m+o,w=Nc(i,35633,x),y=Nc(i,35632,M);if(i.attachShader(_,w),i.attachShader(_,y),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_),s.debug.checkShaderErrors){const D=i.getProgramInfoLog(_).trim(),R=i.getShaderInfoLog(w).trim(),z=i.getShaderInfoLog(y).trim();let H=!0,F=!0;if(i.getProgramParameter(_,35714)===!1){H=!1;const I=Uc(i,w,"vertex"),C=Uc(i,y,"fragment");console.error("THREE.WebGLProgram: shader error: ",i.getError(),"35715",i.getProgramParameter(_,35715),"gl.getProgramInfoLog",D,I,C)}else D!==""?console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()",D):(R===""||z==="")&&(F=!1);F&&(this.diagnostics={runnable:H,programLog:D,vertexShader:{log:R,prefix:v},fragmentShader:{log:z,prefix:m}})}i.deleteShader(w),i.deleteShader(y);let A;this.getUniforms=function(){return A===void 0&&(A=new Bn(i,_)),A};let E;return this.getAttributes=function(){return E===void 0&&(E=ev(i,_)),E},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.name=t.shaderName,this.id=Q_++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=w,this.fragmentShader=y,this}function uv(s,e,t,n,i,r){const a=[],o=n.isWebGL2,l=n.logarithmicDepthBuffer,c=n.floatVertexTextures,h=n.maxVertexUniforms,u=n.vertexTextures;let d=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"},p=["precision","isWebGL2","supportsVertexTextures","outputEncoding","instancing","instancingColor","map","mapEncoding","matcap","matcapEncoding","envMap","envMapMode","envMapEncoding","envMapCubeUV","lightMap","lightMapEncoding","aoMap","emissiveMap","emissiveMapEncoding","bumpMap","normalMap","objectSpaceNormalMap","tangentSpaceNormalMap","clearcoatMap","clearcoatRoughnessMap","clearcoatNormalMap","displacementMap","specularMap","roughnessMap","metalnessMap","gradientMap","alphaMap","combine","vertexColors","vertexAlphas","vertexTangents","vertexUvs","uvsVertexOnly","fog","useFog","fogExp2","flatShading","sizeAttenuation","logarithmicDepthBuffer","skinning","maxBones","useVertexTexture","morphTargets","morphNormals","premultipliedAlpha","numDirLights","numPointLights","numSpotLights","numHemiLights","numRectAreaLights","numDirLightShadows","numPointLightShadows","numSpotLightShadows","shadowMapEnabled","shadowMapType","toneMapping","physicallyCorrectLights","alphaTest","doubleSided","flipSided","numClippingPlanes","numClipIntersection","depthPacking","dithering","sheen","transmission","transmissionMap","thicknessMap"];function _(y){const E=y.skeleton.bones;if(c)return 1024;{const R=Math.floor((h-20)/4),z=Math.min(R,E.length);return z<E.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+E.length+" bones. This GPU supports "+z+"."),0):z}}function v(y){let A;return y&&y.isTexture?A=y.encoding:y&&y.isWebGLRenderTarget?(console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),A=y.texture.encoding):A=as,A}function m(y,A,E,D,R){const z=D.fog,H=y.isMeshStandardMaterial?D.environment:null,F=e.get(y.envMap||H),I=f[y.type],C=R.isSkinnedMesh?_(R):0;y.precision!==null&&(d=n.getMaxPrecision(y.precision),d!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));let P,B;if(I){const ne=nn[I];P=ne.vertexShader,B=ne.fragmentShader}else P=y.vertexShader,B=y.fragmentShader;const j=s.getRenderTarget();return{isWebGL2:o,shaderID:I,shaderName:y.type,vertexShader:P,fragmentShader:B,defines:y.defines,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,instancing:R.isInstancedMesh===!0,instancingColor:R.isInstancedMesh===!0&&R.instanceColor!==null,supportsVertexTextures:u,outputEncoding:j!==null?v(j.texture):s.outputEncoding,map:!!y.map,mapEncoding:v(y.map),matcap:!!y.matcap,matcapEncoding:v(y.matcap),envMap:!!F,envMapMode:F&&F.mapping,envMapEncoding:v(F),envMapCubeUV:!!F&&(F.mapping===nl||F.mapping===il),lightMap:!!y.lightMap,lightMapEncoding:v(y.lightMap),aoMap:!!y.aoMap,emissiveMap:!!y.emissiveMap,emissiveMapEncoding:v(y.emissiveMap),bumpMap:!!y.bumpMap,normalMap:!!y.normalMap,objectSpaceNormalMap:y.normalMapType===Xp,tangentSpaceNormalMap:y.normalMapType===li,clearcoatMap:!!y.clearcoatMap,clearcoatRoughnessMap:!!y.clearcoatRoughnessMap,clearcoatNormalMap:!!y.clearcoatNormalMap,displacementMap:!!y.displacementMap,roughnessMap:!!y.roughnessMap,metalnessMap:!!y.metalnessMap,specularMap:!!y.specularMap,alphaMap:!!y.alphaMap,gradientMap:!!y.gradientMap,sheen:!!y.sheen,transmission:!!y.transmission,transmissionMap:!!y.transmissionMap,thicknessMap:!!y.thicknessMap,combine:y.combine,vertexTangents:y.normalMap&&y.vertexTangents,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&R.geometry&&R.geometry.attributes.color&&R.geometry.attributes.color.itemSize===4,vertexUvs:!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatMap||!!y.clearcoatRoughnessMap||!!y.clearcoatNormalMap||!!y.displacementMap||!!y.transmissionMap||!!y.thicknessMap,uvsVertexOnly:!(y.map||y.bumpMap||y.normalMap||y.specularMap||y.alphaMap||y.emissiveMap||y.roughnessMap||y.metalnessMap||y.clearcoatNormalMap||y.transmission||y.transmissionMap||y.thicknessMap)&&!!y.displacementMap,fog:!!z,useFog:y.fog,fogExp2:z&&z.isFogExp2,flatShading:!!y.flatShading,sizeAttenuation:y.sizeAttenuation,logarithmicDepthBuffer:l,skinning:R.isSkinnedMesh===!0&&C>0,maxBones:C,useVertexTexture:c,morphTargets:y.morphTargets,morphNormals:y.morphNormals,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&E.length>0,shadowMapType:s.shadowMap.type,toneMapping:y.toneMapped?s.toneMapping:Gi,physicallyCorrectLights:s.physicallyCorrectLights,premultipliedAlpha:y.premultipliedAlpha,alphaTest:y.alphaTest,doubleSided:y.side===kn,flipSided:y.side===st,depthPacking:y.depthPacking!==void 0?y.depthPacking:!1,index0AttributeName:y.index0AttributeName,extensionDerivatives:y.extensions&&y.extensions.derivatives,extensionFragDepth:y.extensions&&y.extensions.fragDepth,extensionDrawBuffers:y.extensions&&y.extensions.drawBuffers,extensionShaderTextureLOD:y.extensions&&y.extensions.shaderTextureLOD,rendererExtensionFragDepth:o||t.has("EXT_frag_depth"),rendererExtensionDrawBuffers:o||t.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:o||t.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function g(y){const A=[];if(y.shaderID?A.push(y.shaderID):(A.push(y.fragmentShader),A.push(y.vertexShader)),y.defines!==void 0)for(const E in y.defines)A.push(E),A.push(y.defines[E]);if(y.isRawShaderMaterial===!1){for(let E=0;E<p.length;E++)A.push(y[p[E]]);A.push(s.outputEncoding),A.push(s.gammaFactor)}return A.push(y.customProgramCacheKey),A.join()}function x(y){const A=f[y.type];let E;if(A){const D=nn[A];E=da.clone(D.uniforms)}else E=y.uniforms;return E}function M(y,A){let E;for(let D=0,R=a.length;D<R;D++){const z=a[D];if(z.cacheKey===A){E=z,++E.usedTimes;break}}return E===void 0&&(E=new hv(s,A,y,i),a.push(E)),E}function w(y){if(--y.usedTimes===0){const A=a.indexOf(y);a[A]=a[a.length-1],a.pop(),y.destroy()}}return{getParameters:m,getProgramCacheKey:g,getUniforms:x,acquireProgram:M,releaseProgram:w,programs:a}}function dv(){let s=new WeakMap;function e(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function t(r){s.delete(r)}function n(r,a,o){s.get(r)[a]=o}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function fv(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.program!==e.program?s.program.id-e.program.id:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Gc(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Hc(s){const e=[];let t=0;const n=[],i=[],r=[],a={id:-1};function o(){t=0,n.length=0,i.length=0,r.length=0}function l(f,p,_,v,m,g){let x=e[t];const M=s.get(_);return x===void 0?(x={id:f.id,object:f,geometry:p,material:_,program:M.program||a,groupOrder:v,renderOrder:f.renderOrder,z:m,group:g},e[t]=x):(x.id=f.id,x.object=f,x.geometry=p,x.material=_,x.program=M.program||a,x.groupOrder=v,x.renderOrder=f.renderOrder,x.z=m,x.group=g),t++,x}function c(f,p,_,v,m,g){const x=l(f,p,_,v,m,g);_.transmission>0?i.push(x):_.transparent===!0?r.push(x):n.push(x)}function h(f,p,_,v,m,g){const x=l(f,p,_,v,m,g);_.transmission>0?i.unshift(x):_.transparent===!0?r.unshift(x):n.unshift(x)}function u(f,p){n.length>1&&n.sort(f||fv),i.length>1&&i.sort(p||Gc),r.length>1&&r.sort(p||Gc)}function d(){for(let f=t,p=e.length;f<p;f++){const _=e[f];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.program=null,_.group=null}}return{opaque:n,transmissive:i,transparent:r,init:o,push:c,unshift:h,finish:d,sort:u}}function pv(s){let e=new WeakMap;function t(i,r){let a;return e.has(i)===!1?(a=new Hc(s),e.set(i,[a])):r>=e.get(i).length?(a=new Hc(s),e.get(i).push(a)):a=e.get(i)[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}function mv(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new S,color:new J};break;case"SpotLight":t={position:new S,direction:new S,color:new J,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new S,color:new J,distance:0,decay:0};break;case"HemisphereLight":t={direction:new S,skyColor:new J,groundColor:new J};break;case"RectAreaLight":t={color:new J,position:new S,halfWidth:new S,halfHeight:new S};break}return s[e.id]=t,t}}}function gv(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new X};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new X};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new X,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let _v=0;function vv(s,e){return(e.castShadow?1:0)-(s.castShadow?1:0)}function xv(s,e){const t=new mv,n=gv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let h=0;h<9;h++)i.probe.push(new S);const r=new S,a=new ee,o=new ee;function l(h){let u=0,d=0,f=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let p=0,_=0,v=0,m=0,g=0,x=0,M=0,w=0;h.sort(vv);for(let A=0,E=h.length;A<E;A++){const D=h[A],R=D.color,z=D.intensity,H=D.distance,F=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=R.r*z,d+=R.g*z,f+=R.b*z;else if(D.isLightProbe)for(let I=0;I<9;I++)i.probe[I].addScaledVector(D.sh.coefficients[I],z);else if(D.isDirectionalLight){const I=t.get(D);if(I.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const C=D.shadow,P=n.get(D);P.shadowBias=C.bias,P.shadowNormalBias=C.normalBias,P.shadowRadius=C.radius,P.shadowMapSize=C.mapSize,i.directionalShadow[p]=P,i.directionalShadowMap[p]=F,i.directionalShadowMatrix[p]=D.shadow.matrix,x++}i.directional[p]=I,p++}else if(D.isSpotLight){const I=t.get(D);if(I.position.setFromMatrixPosition(D.matrixWorld),I.color.copy(R).multiplyScalar(z),I.distance=H,I.coneCos=Math.cos(D.angle),I.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),I.decay=D.decay,D.castShadow){const C=D.shadow,P=n.get(D);P.shadowBias=C.bias,P.shadowNormalBias=C.normalBias,P.shadowRadius=C.radius,P.shadowMapSize=C.mapSize,i.spotShadow[v]=P,i.spotShadowMap[v]=F,i.spotShadowMatrix[v]=D.shadow.matrix,w++}i.spot[v]=I,v++}else if(D.isRectAreaLight){const I=t.get(D);I.color.copy(R).multiplyScalar(z),I.halfWidth.set(D.width*.5,0,0),I.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=I,m++}else if(D.isPointLight){const I=t.get(D);if(I.color.copy(D.color).multiplyScalar(D.intensity),I.distance=D.distance,I.decay=D.decay,D.castShadow){const C=D.shadow,P=n.get(D);P.shadowBias=C.bias,P.shadowNormalBias=C.normalBias,P.shadowRadius=C.radius,P.shadowMapSize=C.mapSize,P.shadowCameraNear=C.camera.near,P.shadowCameraFar=C.camera.far,i.pointShadow[_]=P,i.pointShadowMap[_]=F,i.pointShadowMatrix[_]=D.shadow.matrix,M++}i.point[_]=I,_++}else if(D.isHemisphereLight){const I=t.get(D);I.skyColor.copy(D.color).multiplyScalar(z),I.groundColor.copy(D.groundColor).multiplyScalar(z),i.hemi[g]=I,g++}}m>0&&(e.isWebGL2||s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=re.LTC_FLOAT_1,i.rectAreaLTC2=re.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=re.LTC_HALF_1,i.rectAreaLTC2=re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const y=i.hash;(y.directionalLength!==p||y.pointLength!==_||y.spotLength!==v||y.rectAreaLength!==m||y.hemiLength!==g||y.numDirectionalShadows!==x||y.numPointShadows!==M||y.numSpotShadows!==w)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=m,i.point.length=_,i.hemi.length=g,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=M,i.spotShadowMatrix.length=w,y.directionalLength=p,y.pointLength=_,y.spotLength=v,y.rectAreaLength=m,y.hemiLength=g,y.numDirectionalShadows=x,y.numPointShadows=M,y.numSpotShadows=w,i.version=_v++)}function c(h,u){let d=0,f=0,p=0,_=0,v=0;const m=u.matrixWorldInverse;for(let g=0,x=h.length;g<x;g++){const M=h[g];if(M.isDirectionalLight){const w=i.directional[d];w.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(m),d++}else if(M.isSpotLight){const w=i.spot[p];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(m),p++}else if(M.isRectAreaLight){const w=i.rectArea[_];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(m),o.identity(),a.copy(M.matrixWorld),a.premultiply(m),o.extractRotation(a),w.halfWidth.set(M.width*.5,0,0),w.halfHeight.set(0,M.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),_++}else if(M.isPointLight){const w=i.point[f];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(m),f++}else if(M.isHemisphereLight){const w=i.hemi[v];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(m),w.direction.normalize(),v++}}}return{setup:l,setupView:c,state:i}}function Vc(s,e){const t=new xv(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function a(u){n.push(u)}function o(u){i.push(u)}function l(){t.setup(n)}function c(u){t.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function yv(s,e){let t=new WeakMap;function n(r,a=0){let o;return t.has(r)===!1?(o=new Vc(s,e),t.set(r,[o])):a>=t.get(r).length?(o=new Vc(s,e),t.get(r).push(o)):o=t.get(r)[a],o}function i(){t=new WeakMap}return{get:n,dispose:i}}class bu extends _t{constructor(e){super(),this.type="MeshDepthMaterial",this.depthPacking=Vp,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.morphTargets=e.morphTargets,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}bu.prototype.isMeshDepthMaterial=!0;class Tu extends _t{constructor(e){super(),this.type="MeshDistanceMaterial",this.referencePosition=new S,this.nearDistance=1,this.farDistance=1e3,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.morphTargets=e.morphTargets,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}Tu.prototype.isMeshDistanceMaterial=!0;var wv=`uniform sampler2D shadow_pass;
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
}`,Sv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`;function Eu(s,e,t){let n=new Ea;const i=new X,r=new X,a=new Ue,o=[],l=[],c={},h=t.maxTextureSize,u={0:st,1:Wi,2:kn},d=new mt({defines:{SAMPLE_RATE:2/8,HALF_SAMPLE_RATE:1/8},uniforms:{shadow_pass:{value:null},resolution:{value:new X},radius:{value:4}},vertexShader:Sv,fragmentShader:wv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const p=new De;p.setAttribute("position",new $e(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ke(p,d),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kh,this.render=function(y,A,E){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||y.length===0)return;const D=s.getRenderTarget(),R=s.getActiveCubeFace(),z=s.getActiveMipmapLevel(),H=s.state;H.setBlending(Dr),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);for(let F=0,I=y.length;F<I;F++){const C=y[F],P=C.shadow;if(P===void 0){console.warn("THREE.WebGLShadowMap:",C,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;i.copy(P.mapSize);const B=P.getFrameExtents();if(i.multiply(B),r.copy(P.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/B.x),i.x=r.x*B.x,P.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/B.y),i.y=r.y*B.y,P.mapSize.y=r.y)),P.map===null&&!P.isPointLightShadow&&this.type===Fr){const G={minFilter:ft,magFilter:ft,format:It};P.map=new Dt(i.x,i.y,G),P.map.texture.name=C.name+".shadowMap",P.mapPass=new Dt(i.x,i.y,G),P.camera.updateProjectionMatrix()}if(P.map===null){const G={minFilter:ct,magFilter:ct,format:It};P.map=new Dt(i.x,i.y,G),P.map.texture.name=C.name+".shadowMap",P.camera.updateProjectionMatrix()}s.setRenderTarget(P.map),s.clear();const j=P.getViewportCount();for(let G=0;G<j;G++){const ne=P.getViewport(G);a.set(r.x*ne.x,r.y*ne.y,r.x*ne.z,r.y*ne.w),H.viewport(a),P.updateMatrices(C,G),n=P.getFrustum(),w(A,E,P.camera,C,this.type)}!P.isPointLightShadow&&this.type===Fr&&m(P,E),P.needsUpdate=!1}v.needsUpdate=!1,s.setRenderTarget(D,R,z)};function m(y,A){const E=e.update(_);d.uniforms.shadow_pass.value=y.map.texture,d.uniforms.resolution.value=y.mapSize,d.uniforms.radius.value=y.radius,s.setRenderTarget(y.mapPass),s.clear(),s.renderBufferDirect(A,null,E,d,_,null),f.uniforms.shadow_pass.value=y.mapPass.texture,f.uniforms.resolution.value=y.mapSize,f.uniforms.radius.value=y.radius,s.setRenderTarget(y.map),s.clear(),s.renderBufferDirect(A,null,E,f,_,null)}function g(y){const A=y<<0;let E=o[A];return E===void 0&&(E=new bu({depthPacking:Wp,morphTargets:y}),o[A]=E),E}function x(y){const A=y<<0;let E=l[A];return E===void 0&&(E=new Tu({morphTargets:y}),l[A]=E),E}function M(y,A,E,D,R,z,H){let F=null,I=g,C=y.customDepthMaterial;if(D.isPointLight===!0&&(I=x,C=y.customDistanceMaterial),C===void 0){let P=!1;E.morphTargets===!0&&(P=A.morphAttributes&&A.morphAttributes.position&&A.morphAttributes.position.length>0),F=I(P)}else F=C;if(s.localClippingEnabled&&E.clipShadows===!0&&E.clippingPlanes.length!==0){const P=F.uuid,B=E.uuid;let j=c[P];j===void 0&&(j={},c[P]=j);let G=j[B];G===void 0&&(G=F.clone(),j[B]=G),F=G}return F.visible=E.visible,F.wireframe=E.wireframe,H===Fr?F.side=E.shadowSide!==null?E.shadowSide:E.side:F.side=E.shadowSide!==null?E.shadowSide:u[E.side],F.clipShadows=E.clipShadows,F.clippingPlanes=E.clippingPlanes,F.clipIntersection=E.clipIntersection,F.wireframeLinewidth=E.wireframeLinewidth,F.linewidth=E.linewidth,D.isPointLight===!0&&F.isMeshDistanceMaterial===!0&&(F.referencePosition.setFromMatrixPosition(D.matrixWorld),F.nearDistance=R,F.farDistance=z),F}function w(y,A,E,D,R){if(y.visible===!1)return;if(y.layers.test(A.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&R===Fr)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,y.matrixWorld);const F=e.update(y),I=y.material;if(Array.isArray(I)){const C=F.groups;for(let P=0,B=C.length;P<B;P++){const j=C[P],G=I[j.materialIndex];if(G&&G.visible){const ne=M(y,F,G,D,E.near,E.far,R);s.renderBufferDirect(E,null,F,ne,y,j)}}}else if(I.visible){const C=M(y,F,I,D,E.near,E.far,R);s.renderBufferDirect(E,null,F,C,y,null)}}const H=y.children;for(let F=0,I=H.length;F<I;F++)w(H[F],A,E,D,R)}}function Mv(s,e,t){const n=t.isWebGL2;function i(){let N=!1;const ie=new Ue;let Y=null;const _e=new Ue(0,0,0,0);return{setMask:function(ae){Y!==ae&&!N&&(s.colorMask(ae,ae,ae,ae),Y=ae)},setLocked:function(ae){N=ae},setClear:function(ae,qe,wt,St,Yn){Yn===!0&&(ae*=St,qe*=St,wt*=St),ie.set(ae,qe,wt,St),_e.equals(ie)===!1&&(s.clearColor(ae,qe,wt,St),_e.copy(ie))},reset:function(){N=!1,Y=null,_e.set(-1,0,0,0)}}}function r(){let N=!1,ie=null,Y=null,_e=null;return{setTest:function(ae){ae?me(2929):he(2929)},setMask:function(ae){ie!==ae&&!N&&(s.depthMask(ae),ie=ae)},setFunc:function(ae){if(Y!==ae){if(ae)switch(ae){case Lf:s.depthFunc(512);break;case Pf:s.depthFunc(519);break;case Cf:s.depthFunc(513);break;case Ro:s.depthFunc(515);break;case Ff:s.depthFunc(514);break;case Rf:s.depthFunc(518);break;case If:s.depthFunc(516);break;case Df:s.depthFunc(517);break;default:s.depthFunc(515)}else s.depthFunc(515);Y=ae}},setLocked:function(ae){N=ae},setClear:function(ae){_e!==ae&&(s.clearDepth(ae),_e=ae)},reset:function(){N=!1,ie=null,Y=null,_e=null}}}function a(){let N=!1,ie=null,Y=null,_e=null,ae=null,qe=null,wt=null,St=null,Yn=null;return{setTest:function(et){N||(et?me(2960):he(2960))},setMask:function(et){ie!==et&&!N&&(s.stencilMask(et),ie=et)},setFunc:function(et,ln,jt){(Y!==et||_e!==ln||ae!==jt)&&(s.stencilFunc(et,ln,jt),Y=et,_e=ln,ae=jt)},setOp:function(et,ln,jt){(qe!==et||wt!==ln||St!==jt)&&(s.stencilOp(et,ln,jt),qe=et,wt=ln,St=jt)},setLocked:function(et){N=et},setClear:function(et){Yn!==et&&(s.clearStencil(et),Yn=et)},reset:function(){N=!1,ie=null,Y=null,_e=null,ae=null,qe=null,wt=null,St=null,Yn=null}}}const o=new i,l=new r,c=new a;let h={},u=null,d={},f=null,p=!1,_=null,v=null,m=null,g=null,x=null,M=null,w=null,y=!1,A=null,E=null,D=null,R=null,z=null;const H=s.getParameter(35661);let F=!1,I=0;const C=s.getParameter(7938);C.indexOf("WebGL")!==-1?(I=parseFloat(/^WebGL (\d)/.exec(C)[1]),F=I>=1):C.indexOf("OpenGL ES")!==-1&&(I=parseFloat(/^OpenGL ES (\d)/.exec(C)[1]),F=I>=2);let P=null,B={};const j=s.getParameter(3088),G=s.getParameter(2978),ne=new Ue().fromArray(j),K=new Ue().fromArray(G);function ue(N,ie,Y){const _e=new Uint8Array(4),ae=s.createTexture();s.bindTexture(N,ae),s.texParameteri(N,10241,9728),s.texParameteri(N,10240,9728);for(let qe=0;qe<Y;qe++)s.texImage2D(ie+qe,0,6408,1,1,0,6408,5121,_e);return ae}const ce={};ce[3553]=ue(3553,3553,1),ce[34067]=ue(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),me(2929),l.setFunc(Ro),Z(!1),te(tc),me(2884),be(Dr);function me(N){h[N]!==!0&&(s.enable(N),h[N]=!0)}function he(N){h[N]!==!1&&(s.disable(N),h[N]=!1)}function V(N){N!==u&&(s.bindFramebuffer(36160,N),u=N)}function Xe(N,ie){return ie===null&&u!==null&&(ie=u),d[N]!==ie?(s.bindFramebuffer(N,ie),d[N]=ie,n&&(N===36009&&(d[36160]=ie),N===36160&&(d[36009]=ie)),!0):!1}function Te(N){return f!==N?(s.useProgram(N),f=N,!0):!1}const we={[ri]:32774,[vf]:32778,[xf]:32779};if(n)we[rc]=32775,we[sc]=32776;else{const N=e.get("EXT_blend_minmax");N!==null&&(we[rc]=N.MIN_EXT,we[sc]=N.MAX_EXT)}const pe={[yf]:0,[Rr]:1,[wf]:768,[nu]:770,[Ef]:776,[bf]:774,[Mf]:772,[Sf]:769,[iu]:771,[Tf]:775,[Af]:773};function be(N,ie,Y,_e,ae,qe,wt,St){if(N===Dr){p===!0&&(he(3042),p=!1);return}if(p===!1&&(me(3042),p=!0),N!==tu){if(N!==_||St!==y){if((v!==ri||x!==ri)&&(s.blendEquation(32774),v=ri,x=ri),St)switch(N){case ki:s.blendFuncSeparate(1,771,1,771);break;case aa:s.blendFunc(1,1);break;case nc:s.blendFuncSeparate(0,0,769,771);break;case ic:s.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case ki:s.blendFuncSeparate(770,771,1,771);break;case aa:s.blendFunc(770,1);break;case nc:s.blendFunc(0,769);break;case ic:s.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}m=null,g=null,M=null,w=null,_=N,y=St}return}ae=ae||ie,qe=qe||Y,wt=wt||_e,(ie!==v||ae!==x)&&(s.blendEquationSeparate(we[ie],we[ae]),v=ie,x=ae),(Y!==m||_e!==g||qe!==M||wt!==w)&&(s.blendFuncSeparate(pe[Y],pe[_e],pe[qe],pe[wt]),m=Y,g=_e,M=qe,w=wt),_=N,y=null}function Q(N,ie){N.side===kn?he(2884):me(2884);let Y=N.side===st;ie&&(Y=!Y),Z(Y),N.blending===ki&&N.transparent===!1?be(Dr):be(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.premultipliedAlpha),l.setFunc(N.depthFunc),l.setTest(N.depthTest),l.setMask(N.depthWrite),o.setMask(N.colorWrite);const _e=N.stencilWrite;c.setTest(_e),_e&&(c.setMask(N.stencilWriteMask),c.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),c.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),oe(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?me(32926):he(32926)}function Z(N){A!==N&&(N?s.frontFace(2304):s.frontFace(2305),A=N)}function te(N){N!==gf?(me(2884),N!==E&&(N===tc?s.cullFace(1029):N===_f?s.cullFace(1028):s.cullFace(1032))):he(2884),E=N}function fe(N){N!==D&&(F&&s.lineWidth(N),D=N)}function oe(N,ie,Y){N?(me(32823),(R!==ie||z!==Y)&&(s.polygonOffset(ie,Y),R=ie,z=Y)):he(32823)}function L(N){N?me(3089):he(3089)}function T(N){N===void 0&&(N=33984+H-1),P!==N&&(s.activeTexture(N),P=N)}function W(N,ie){P===null&&T();let Y=B[P];Y===void 0&&(Y={type:void 0,texture:void 0},B[P]=Y),(Y.type!==N||Y.texture!==ie)&&(s.bindTexture(N,ie||ce[N]),Y.type=N,Y.texture=ie)}function q(){const N=B[P];N!==void 0&&N.type!==void 0&&(s.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function se(){try{s.compressedTexImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function le(){try{s.texImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ye(){try{s.texImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function xe(N){ne.equals(N)===!1&&(s.scissor(N.x,N.y,N.z,N.w),ne.copy(N))}function Ee(N){K.equals(N)===!1&&(s.viewport(N.x,N.y,N.z,N.w),K.copy(N))}function de(){s.disable(3042),s.disable(2884),s.disable(2929),s.disable(32823),s.disable(3089),s.disable(2960),s.disable(32926),s.blendEquation(32774),s.blendFunc(1,0),s.blendFuncSeparate(1,0,1,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(513),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(519,0,4294967295),s.stencilOp(7680,7680,7680),s.clearStencil(0),s.cullFace(1029),s.frontFace(2305),s.polygonOffset(0,0),s.activeTexture(33984),s.bindFramebuffer(36160,null),n===!0&&(s.bindFramebuffer(36009,null),s.bindFramebuffer(36008,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},P=null,B={},u=null,d={},f=null,p=!1,_=null,v=null,m=null,g=null,x=null,M=null,w=null,y=!1,A=null,E=null,D=null,R=null,z=null,ne.set(0,0,s.canvas.width,s.canvas.height),K.set(0,0,s.canvas.width,s.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:me,disable:he,bindFramebuffer:Xe,bindXRFramebuffer:V,useProgram:Te,setBlending:be,setMaterial:Q,setFlipSided:Z,setCullFace:te,setLineWidth:fe,setPolygonOffset:oe,setScissorTest:L,activeTexture:T,bindTexture:W,unbindTexture:q,compressedTexImage2D:se,texImage2D:le,texImage3D:ye,scissor:xe,viewport:Ee,reset:de}}function Av(s,e,t,n,i,r,a){const o=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,h=i.maxTextureSize,u=i.maxSamples,d=new WeakMap;let f,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(L,T){return p?new OffscreenCanvas(L,T):document.createElementNS("http://www.w3.org/1999/xhtml","canvas")}function v(L,T,W,q){let se=1;if((L.width>q||L.height>q)&&(se=q/Math.max(L.width,L.height)),se<1||T===!0)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap){const le=T?cu:Math.floor,ye=le(se*L.width),xe=le(se*L.height);f===void 0&&(f=_(ye,xe));const Ee=W?_(ye,xe):f;return Ee.width=ye,Ee.height=xe,Ee.getContext("2d").drawImage(L,0,0,ye,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+ye+"x"+xe+")."),Ee}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),L;return L}function m(L){return Uo(L.width)&&Uo(L.height)}function g(L){return o?!1:L.wrapS!==Tt||L.wrapT!==Tt||L.minFilter!==ct&&L.minFilter!==ft}function x(L,T){return L.generateMipmaps&&T&&L.minFilter!==ct&&L.minFilter!==ft}function M(L,T,W,q,se=1){s.generateMipmap(L);const le=n.get(T);le.__maxMipLevel=Math.log2(Math.max(W,q,se))}function w(L,T,W){if(o===!1)return T;if(L!==null){if(s[L]!==void 0)return s[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let q=T;return T===6403&&(W===5126&&(q=33326),W===5131&&(q=33325),W===5121&&(q=33321)),T===6407&&(W===5126&&(q=34837),W===5131&&(q=34843),W===5121&&(q=32849)),T===6408&&(W===5126&&(q=34836),W===5131&&(q=34842),W===5121&&(q=32856)),(q===33325||q===33326||q===34842||q===34836)&&e.get("EXT_color_buffer_float"),q}function y(L){return L===ct||L===Do||L===No?9728:9729}function A(L){const T=L.target;T.removeEventListener("dispose",A),D(T),T.isVideoTexture&&d.delete(T),a.memory.textures--}function E(L){const T=L.target;T.removeEventListener("dispose",E),R(T)}function D(L){const T=n.get(L);T.__webglInit!==void 0&&(s.deleteTexture(T.__webglTexture),n.remove(L))}function R(L){const T=L.texture,W=n.get(L),q=n.get(T);if(L){if(q.__webglTexture!==void 0&&(s.deleteTexture(q.__webglTexture),a.memory.textures--),L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let se=0;se<6;se++)s.deleteFramebuffer(W.__webglFramebuffer[se]),W.__webglDepthbuffer&&s.deleteRenderbuffer(W.__webglDepthbuffer[se]);else s.deleteFramebuffer(W.__webglFramebuffer),W.__webglDepthbuffer&&s.deleteRenderbuffer(W.__webglDepthbuffer),W.__webglMultisampledFramebuffer&&s.deleteFramebuffer(W.__webglMultisampledFramebuffer),W.__webglColorRenderbuffer&&s.deleteRenderbuffer(W.__webglColorRenderbuffer),W.__webglDepthRenderbuffer&&s.deleteRenderbuffer(W.__webglDepthRenderbuffer);if(L.isWebGLMultipleRenderTargets)for(let se=0,le=T.length;se<le;se++){const ye=n.get(T[se]);ye.__webglTexture&&(s.deleteTexture(ye.__webglTexture),a.memory.textures--),n.remove(T[se])}n.remove(T),n.remove(L)}}let z=0;function H(){z=0}function F(){const L=z;return L>=l&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l),z+=1,L}function I(L,T){const W=n.get(L);if(L.isVideoTexture&&Q(L),L.version>0&&W.__version!==L.version){const q=L.image;if(q===void 0)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ue(W,L,T);return}}t.activeTexture(33984+T),t.bindTexture(3553,W.__webglTexture)}function C(L,T){const W=n.get(L);if(L.version>0&&W.__version!==L.version){ue(W,L,T);return}t.activeTexture(33984+T),t.bindTexture(35866,W.__webglTexture)}function P(L,T){const W=n.get(L);if(L.version>0&&W.__version!==L.version){ue(W,L,T);return}t.activeTexture(33984+T),t.bindTexture(32879,W.__webglTexture)}function B(L,T){const W=n.get(L);if(L.version>0&&W.__version!==L.version){ce(W,L,T);return}t.activeTexture(33984+T),t.bindTexture(34067,W.__webglTexture)}const j={[at]:10497,[Tt]:33071,[oa]:33648},G={[ct]:9728,[Do]:9984,[No]:9986,[ft]:9729,[su]:9985,[tr]:9987};function ne(L,T,W){if(W?(s.texParameteri(L,10242,j[T.wrapS]),s.texParameteri(L,10243,j[T.wrapT]),(L===32879||L===35866)&&s.texParameteri(L,32882,j[T.wrapR]),s.texParameteri(L,10240,G[T.magFilter]),s.texParameteri(L,10241,G[T.minFilter])):(s.texParameteri(L,10242,33071),s.texParameteri(L,10243,33071),(L===32879||L===35866)&&s.texParameteri(L,32882,33071),(T.wrapS!==Tt||T.wrapT!==Tt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(L,10240,y(T.magFilter)),s.texParameteri(L,10241,y(T.minFilter)),T.minFilter!==ct&&T.minFilter!==ft&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const q=e.get("EXT_texture_filter_anisotropic");if(T.type===vn&&e.has("OES_texture_float_linear")===!1||o===!1&&T.type===Hi&&e.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||n.get(T).__currentAnisotropy)&&(s.texParameterf(L,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy)}}function K(L,T){L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",A),L.__webglTexture=s.createTexture(),a.memory.textures++)}function ue(L,T,W){let q=3553;T.isDataTexture2DArray&&(q=35866),T.isDataTexture3D&&(q=32879),K(L,T),t.activeTexture(33984+W),t.bindTexture(q,L.__webglTexture),s.pixelStorei(37440,T.flipY),s.pixelStorei(37441,T.premultiplyAlpha),s.pixelStorei(3317,T.unpackAlignment),s.pixelStorei(37443,0);const se=g(T)&&m(T.image)===!1,le=v(T.image,se,!1,h),ye=m(le)||o,xe=r.convert(T.format);let Ee=r.convert(T.type),de=w(T.internalFormat,xe,Ee);ne(q,T,ye);let N;const ie=T.mipmaps;if(T.isDepthTexture)de=6402,o?T.type===vn?de=36012:T.type===Ks?de=33190:T.type===Nr?de=35056:de=33189:T.type===vn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===Vi&&de===6402&&T.type!==ca&&T.type!==Ks&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=ca,Ee=r.convert(T.type)),T.format===Wr&&de===6402&&(de=34041,T.type!==Nr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=Nr,Ee=r.convert(T.type))),t.texImage2D(3553,0,de,le.width,le.height,0,xe,Ee,null);else if(T.isDataTexture)if(ie.length>0&&ye){for(let Y=0,_e=ie.length;Y<_e;Y++)N=ie[Y],t.texImage2D(3553,Y,de,N.width,N.height,0,xe,Ee,N.data);T.generateMipmaps=!1,L.__maxMipLevel=ie.length-1}else t.texImage2D(3553,0,de,le.width,le.height,0,xe,Ee,le.data),L.__maxMipLevel=0;else if(T.isCompressedTexture){for(let Y=0,_e=ie.length;Y<_e;Y++)N=ie[Y],T.format!==It&&T.format!==Un?xe!==null?t.compressedTexImage2D(3553,Y,de,N.width,N.height,0,N.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):t.texImage2D(3553,Y,de,N.width,N.height,0,xe,Ee,N.data);L.__maxMipLevel=ie.length-1}else if(T.isDataTexture2DArray)t.texImage3D(35866,0,de,le.width,le.height,le.depth,0,xe,Ee,le.data),L.__maxMipLevel=0;else if(T.isDataTexture3D)t.texImage3D(32879,0,de,le.width,le.height,le.depth,0,xe,Ee,le.data),L.__maxMipLevel=0;else if(ie.length>0&&ye){for(let Y=0,_e=ie.length;Y<_e;Y++)N=ie[Y],t.texImage2D(3553,Y,de,xe,Ee,N);T.generateMipmaps=!1,L.__maxMipLevel=ie.length-1}else t.texImage2D(3553,0,de,xe,Ee,le),L.__maxMipLevel=0;x(T,ye)&&M(q,T,le.width,le.height),L.__version=T.version,T.onUpdate&&T.onUpdate(T)}function ce(L,T,W){if(T.image.length!==6)return;K(L,T),t.activeTexture(33984+W),t.bindTexture(34067,L.__webglTexture),s.pixelStorei(37440,T.flipY),s.pixelStorei(37441,T.premultiplyAlpha),s.pixelStorei(3317,T.unpackAlignment),s.pixelStorei(37443,0);const q=T&&(T.isCompressedTexture||T.image[0].isCompressedTexture),se=T.image[0]&&T.image[0].isDataTexture,le=[];for(let Y=0;Y<6;Y++)!q&&!se?le[Y]=v(T.image[Y],!1,!0,c):le[Y]=se?T.image[Y].image:T.image[Y];const ye=le[0],xe=m(ye)||o,Ee=r.convert(T.format),de=r.convert(T.type),N=w(T.internalFormat,Ee,de);ne(34067,T,xe);let ie;if(q){for(let Y=0;Y<6;Y++){ie=le[Y].mipmaps;for(let _e=0;_e<ie.length;_e++){const ae=ie[_e];T.format!==It&&T.format!==Un?Ee!==null?t.compressedTexImage2D(34069+Y,_e,N,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):t.texImage2D(34069+Y,_e,N,ae.width,ae.height,0,Ee,de,ae.data)}}L.__maxMipLevel=ie.length-1}else{ie=T.mipmaps;for(let Y=0;Y<6;Y++)if(se){t.texImage2D(34069+Y,0,N,le[Y].width,le[Y].height,0,Ee,de,le[Y].data);for(let _e=0;_e<ie.length;_e++){const qe=ie[_e].image[Y].image;t.texImage2D(34069+Y,_e+1,N,qe.width,qe.height,0,Ee,de,qe.data)}}else{t.texImage2D(34069+Y,0,N,Ee,de,le[Y]);for(let _e=0;_e<ie.length;_e++){const ae=ie[_e];t.texImage2D(34069+Y,_e+1,N,Ee,de,ae.image[Y])}}L.__maxMipLevel=ie.length}x(T,xe)&&M(34067,T,ye.width,ye.height),L.__version=T.version,T.onUpdate&&T.onUpdate(T)}function me(L,T,W,q,se){const le=r.convert(W.format),ye=r.convert(W.type),xe=w(W.internalFormat,le,ye);se===32879||se===35866?t.texImage3D(se,0,xe,T.width,T.height,T.depth,0,le,ye,null):t.texImage2D(se,0,xe,T.width,T.height,0,le,ye,null),t.bindFramebuffer(36160,L),s.framebufferTexture2D(36160,q,se,n.get(W).__webglTexture,0),t.bindFramebuffer(36160,null)}function he(L,T,W){if(s.bindRenderbuffer(36161,L),T.depthBuffer&&!T.stencilBuffer){let q=33189;if(W){const se=T.depthTexture;se&&se.isDepthTexture&&(se.type===vn?q=36012:se.type===Ks&&(q=33190));const le=be(T);s.renderbufferStorageMultisample(36161,le,q,T.width,T.height)}else s.renderbufferStorage(36161,q,T.width,T.height);s.framebufferRenderbuffer(36160,36096,36161,L)}else if(T.depthBuffer&&T.stencilBuffer){if(W){const q=be(T);s.renderbufferStorageMultisample(36161,q,35056,T.width,T.height)}else s.renderbufferStorage(36161,34041,T.width,T.height);s.framebufferRenderbuffer(36160,33306,36161,L)}else{const q=T.isWebGLMultipleRenderTargets===!0?T.texture[0]:T.texture,se=r.convert(q.format),le=r.convert(q.type),ye=w(q.internalFormat,se,le);if(W){const xe=be(T);s.renderbufferStorageMultisample(36161,xe,ye,T.width,T.height)}else s.renderbufferStorage(36161,ye,T.width,T.height)}s.bindRenderbuffer(36161,null)}function V(L,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),I(T.depthTexture,0);const q=n.get(T.depthTexture).__webglTexture;if(T.depthTexture.format===Vi)s.framebufferTexture2D(36160,36096,3553,q,0);else if(T.depthTexture.format===Wr)s.framebufferTexture2D(36160,33306,3553,q,0);else throw new Error("Unknown depthTexture format")}function Xe(L){const T=n.get(L),W=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture){if(W)throw new Error("target.depthTexture not supported in Cube render targets");V(T.__webglFramebuffer,L)}else if(W){T.__webglDepthbuffer=[];for(let q=0;q<6;q++)t.bindFramebuffer(36160,T.__webglFramebuffer[q]),T.__webglDepthbuffer[q]=s.createRenderbuffer(),he(T.__webglDepthbuffer[q],L,!1)}else t.bindFramebuffer(36160,T.__webglFramebuffer),T.__webglDepthbuffer=s.createRenderbuffer(),he(T.__webglDepthbuffer,L,!1);t.bindFramebuffer(36160,null)}function Te(L){const T=L.texture,W=n.get(L),q=n.get(T);L.addEventListener("dispose",E),L.isWebGLMultipleRenderTargets!==!0&&(q.__webglTexture=s.createTexture(),q.__version=T.version,a.memory.textures++);const se=L.isWebGLCubeRenderTarget===!0,le=L.isWebGLMultipleRenderTargets===!0,ye=L.isWebGLMultisampleRenderTarget===!0,xe=T.isDataTexture3D||T.isDataTexture2DArray,Ee=m(L)||o;if(o&&T.format===Un&&(T.type===vn||T.type===Hi)&&(T.format=It,console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")),se){W.__webglFramebuffer=[];for(let de=0;de<6;de++)W.__webglFramebuffer[de]=s.createFramebuffer()}else if(W.__webglFramebuffer=s.createFramebuffer(),le)if(i.drawBuffers){const de=L.texture;for(let N=0,ie=de.length;N<ie;N++){const Y=n.get(de[N]);Y.__webglTexture===void 0&&(Y.__webglTexture=s.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");else if(ye)if(o){W.__webglMultisampledFramebuffer=s.createFramebuffer(),W.__webglColorRenderbuffer=s.createRenderbuffer(),s.bindRenderbuffer(36161,W.__webglColorRenderbuffer);const de=r.convert(T.format),N=r.convert(T.type),ie=w(T.internalFormat,de,N),Y=be(L);s.renderbufferStorageMultisample(36161,Y,ie,L.width,L.height),t.bindFramebuffer(36160,W.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064,36161,W.__webglColorRenderbuffer),s.bindRenderbuffer(36161,null),L.depthBuffer&&(W.__webglDepthRenderbuffer=s.createRenderbuffer(),he(W.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(36160,null)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");if(se){t.bindTexture(34067,q.__webglTexture),ne(34067,T,Ee);for(let de=0;de<6;de++)me(W.__webglFramebuffer[de],L,T,36064,34069+de);x(T,Ee)&&M(34067,T,L.width,L.height),t.bindTexture(34067,null)}else if(le){const de=L.texture;for(let N=0,ie=de.length;N<ie;N++){const Y=de[N],_e=n.get(Y);t.bindTexture(3553,_e.__webglTexture),ne(3553,Y,Ee),me(W.__webglFramebuffer,L,Y,36064+N,3553),x(Y,Ee)&&M(3553,Y,L.width,L.height)}t.bindTexture(3553,null)}else{let de=3553;xe&&(o?de=T.isDataTexture3D?32879:35866:console.warn("THREE.DataTexture3D and THREE.DataTexture2DArray only supported with WebGL2.")),t.bindTexture(de,q.__webglTexture),ne(de,T,Ee),me(W.__webglFramebuffer,L,T,36064,de),x(T,Ee)&&M(de,T,L.width,L.height,L.depth),t.bindTexture(de,null)}L.depthBuffer&&Xe(L)}function we(L){const T=m(L)||o,W=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let q=0,se=W.length;q<se;q++){const le=W[q];if(x(le,T)){const ye=L.isWebGLCubeRenderTarget?34067:3553,xe=n.get(le).__webglTexture;t.bindTexture(ye,xe),M(ye,le,L.width,L.height),t.bindTexture(ye,null)}}}function pe(L){if(L.isWebGLMultisampleRenderTarget)if(o){const T=L.width,W=L.height;let q=16384;L.depthBuffer&&(q|=256),L.stencilBuffer&&(q|=1024);const se=n.get(L);t.bindFramebuffer(36008,se.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,se.__webglFramebuffer),s.blitFramebuffer(0,0,T,W,0,0,T,W,q,9728),t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,se.__webglMultisampledFramebuffer)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")}function be(L){return o&&L.isWebGLMultisampleRenderTarget?Math.min(u,L.samples):0}function Q(L){const T=a.render.frame;d.get(L)!==T&&(d.set(L,T),L.update())}let Z=!1,te=!1;function fe(L,T){L&&L.isWebGLRenderTarget&&(Z===!1&&(console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."),Z=!0),L=L.texture),I(L,T)}function oe(L,T){L&&L.isWebGLCubeRenderTarget&&(te===!1&&(console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."),te=!0),L=L.texture),B(L,T)}this.allocateTextureUnit=F,this.resetTextureUnits=H,this.setTexture2D=I,this.setTexture2DArray=C,this.setTexture3D=P,this.setTextureCube=B,this.setupRenderTarget=Te,this.updateRenderTargetMipmap=we,this.updateMultisampleRenderTarget=pe,this.safeSetTexture2D=fe,this.safeSetTextureCube=oe}function bv(s,e,t){const n=t.isWebGL2;function i(r){let a;if(r===la)return 5121;if(r===Xf)return 32819;if(r===Yf)return 32820;if(r===jf)return 33635;if(r===Hf)return 5120;if(r===Vf)return 5122;if(r===ca)return 5123;if(r===Wf)return 5124;if(r===Ks)return 5125;if(r===vn)return 5126;if(r===Hi)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Qf)return 6406;if(r===Un)return 6407;if(r===It)return 6408;if(r===qf)return 6409;if(r===Jf)return 6410;if(r===Vi)return 6402;if(r===Wr)return 34041;if(r===Zf)return 6403;if(r===Kf)return 36244;if(r===$f)return 33319;if(r===ep)return 33320;if(r===tp)return 36248;if(r===np)return 36249;if(r===oc||r===lc||r===cc||r===hc)if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===oc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===lc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===cc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===hc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===uc||r===dc||r===fc||r===pc)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===uc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===dc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===fc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===pc)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===ip)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if((r===mc||r===gc)&&(a=e.get("WEBGL_compressed_texture_etc"),a!==null)){if(r===mc)return a.COMPRESSED_RGB8_ETC2;if(r===gc)return a.COMPRESSED_RGBA8_ETC2_EAC}if(r===rp||r===sp||r===ap||r===op||r===lp||r===cp||r===hp||r===up||r===dp||r===fp||r===pp||r===mp||r===gp||r===_p||r===xp||r===yp||r===wp||r===Sp||r===Mp||r===Ap||r===bp||r===Tp||r===Ep||r===Lp||r===Pp||r===Cp||r===Fp||r===Rp)return a=e.get("WEBGL_compressed_texture_astc"),a!==null?r:null;if(r===vp)return a=e.get("EXT_texture_compression_bptc"),a!==null?r:null;if(r===Nr)return n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null)}return{convert:i}}class Lu extends yt{constructor(e=[]){super(),this.cameras=e}}Lu.prototype.isArrayCamera=!0;class ut extends Ne{constructor(){super(),this.type="Group"}}ut.prototype.isGroup=!0;const Tv={type:"move"};class uo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ut,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ut,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new S,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new S),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ut,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new S,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new S),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred")if(o!==null&&(i=t.getPose(e.targetRaySpace,n),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Tv))),c&&e.hand){a=!0;for(const _ of e.hand.values()){const v=t.getJointPose(_,n);if(c.joints[_.jointName]===void 0){const g=new ut;g.matrixAutoUpdate=!1,g.visible=!1,c.joints[_.jointName]=g,c.add(g)}const m=c.joints[_.jointName];v!==null&&(m.matrix.fromArray(v.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.jointRadius=v.radius),m.visible=v!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}}class Ev extends ci{constructor(e,t){super();const n=this,i=e.state;let r=null,a=1,o=null,l="local-floor",c=null,h=null,u=null,d=null;const f=[],p=new Map,_=new yt;_.layers.enable(1),_.viewport=new Ue;const v=new yt;v.layers.enable(2),v.viewport=new Ue;const m=[_,v],g=new Lu;g.layers.enable(1),g.layers.enable(2);let x=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(C){let P=f[C];return P===void 0&&(P=new uo,f[C]=P),P.getTargetRaySpace()},this.getControllerGrip=function(C){let P=f[C];return P===void 0&&(P=new uo,f[C]=P),P.getGripSpace()},this.getHand=function(C){let P=f[C];return P===void 0&&(P=new uo,f[C]=P),P.getHandSpace()};function w(C){const P=p.get(C.inputSource);P&&P.dispatchEvent({type:C.type,data:C.inputSource})}function y(){p.forEach(function(C,P){C.disconnect(P)}),p.clear(),x=null,M=null,i.bindXRFramebuffer(null),e.setRenderTarget(e.getRenderTarget()),I.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(C){a=C,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(C){l=C,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return o},this.getSession=function(){return r},this.setSession=async function(C){if(r=C,r!==null){r.addEventListener("select",w),r.addEventListener("selectstart",w),r.addEventListener("selectend",w),r.addEventListener("squeeze",w),r.addEventListener("squeezestart",w),r.addEventListener("squeezeend",w),r.addEventListener("end",y),r.addEventListener("inputsourceschange",A);const P=t.getContextAttributes();if(P.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0){const B={antialias:P.antialias,alpha:P.alpha,depth:P.depth,stencil:P.stencil,framebufferScaleFactor:a},j=new XRWebGLLayer(r,t,B);r.updateRenderState({baseLayer:j})}else{let B=0;P.depth&&(B=P.stencil?34041:6402);const j={colorFormat:P.alpha?6408:6407,depthFormat:B,scaleFactor:a};h=new XRWebGLBinding(r,t),d=h.createProjectionLayer(j),u=t.createFramebuffer(),r.updateRenderState({layers:[d]})}o=await r.requestReferenceSpace(l),I.setContext(r),I.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function A(C){const P=r.inputSources;for(let B=0;B<f.length;B++)p.set(P[B],f[B]);for(let B=0;B<C.removed.length;B++){const j=C.removed[B],G=p.get(j);G&&(G.dispatchEvent({type:"disconnected",data:j}),p.delete(j))}for(let B=0;B<C.added.length;B++){const j=C.added[B],G=p.get(j);G&&G.dispatchEvent({type:"connected",data:j})}}const E=new S,D=new S;function R(C,P,B){E.setFromMatrixPosition(P.matrixWorld),D.setFromMatrixPosition(B.matrixWorld);const j=E.distanceTo(D),G=P.projectionMatrix.elements,ne=B.projectionMatrix.elements,K=G[14]/(G[10]-1),ue=G[14]/(G[10]+1),ce=(G[9]+1)/G[5],me=(G[9]-1)/G[5],he=(G[8]-1)/G[0],V=(ne[8]+1)/ne[0],Xe=K*he,Te=K*V,we=j/(-he+V),pe=we*-he;P.matrixWorld.decompose(C.position,C.quaternion,C.scale),C.translateX(pe),C.translateZ(we),C.matrixWorld.compose(C.position,C.quaternion,C.scale),C.matrixWorldInverse.copy(C.matrixWorld).invert();const be=K+we,Q=ue+we,Z=Xe-pe,te=Te+(j-pe),fe=ce*ue/Q*be,oe=me*ue/Q*be;C.projectionMatrix.makePerspective(Z,te,fe,oe,be,Q)}function z(C,P){P===null?C.matrixWorld.copy(C.matrix):C.matrixWorld.multiplyMatrices(P.matrixWorld,C.matrix),C.matrixWorldInverse.copy(C.matrixWorld).invert()}this.updateCamera=function(C){if(r===null)return;g.near=v.near=_.near=C.near,g.far=v.far=_.far=C.far,(x!==g.near||M!==g.far)&&(r.updateRenderState({depthNear:g.near,depthFar:g.far}),x=g.near,M=g.far);const P=C.parent,B=g.cameras;z(g,P);for(let G=0;G<B.length;G++)z(B[G],P);g.matrixWorld.decompose(g.position,g.quaternion,g.scale),C.position.copy(g.position),C.quaternion.copy(g.quaternion),C.scale.copy(g.scale),C.matrix.copy(g.matrix),C.matrixWorld.copy(g.matrixWorld);const j=C.children;for(let G=0,ne=j.length;G<ne;G++)j[G].updateMatrixWorld(!0);B.length===2?R(g,_,v):g.projectionMatrix.copy(_.projectionMatrix)},this.getCamera=function(){return g};let H=null;function F(C,P){if(c=P.getViewerPose(o),c!==null){const j=c.views,G=r.renderState.baseLayer;r.renderState.layers===void 0&&i.bindXRFramebuffer(G.framebuffer);let ne=!1;j.length!==g.cameras.length&&(g.cameras.length=0,ne=!0);for(let K=0;K<j.length;K++){const ue=j[K];let ce=null;if(r.renderState.layers===void 0)ce=G.getViewport(ue);else{const he=h.getViewSubImage(d,ue);i.bindXRFramebuffer(u),t.framebufferTexture2D(36160,36064,3553,he.colorTexture,0),he.depthStencilTexture!==void 0&&t.framebufferTexture2D(36160,36096,3553,he.depthStencilTexture,0),ce=he.viewport}const me=m[K];me.matrix.fromArray(ue.transform.matrix),me.projectionMatrix.fromArray(ue.projectionMatrix),me.viewport.set(ce.x,ce.y,ce.width,ce.height),K===0&&g.matrix.copy(me.matrix),ne===!0&&g.cameras.push(me)}}const B=r.inputSources;for(let j=0;j<f.length;j++){const G=f[j],ne=B[j];G.update(ne,P,o)}H&&H(C,P)}const I=new mu;I.setAnimationLoop(F),this.setAnimationLoop=function(C){H=C},this.dispose=function(){}}}function Lv(s){function e(m,g){m.fogColor.value.copy(g.color),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function t(m,g,x,M,w){g.isMeshBasicMaterial?n(m,g):g.isMeshLambertMaterial?(n(m,g),l(m,g)):g.isMeshToonMaterial?(n(m,g),h(m,g)):g.isMeshPhongMaterial?(n(m,g),c(m,g)):g.isMeshStandardMaterial?(n(m,g),g.isMeshPhysicalMaterial?d(m,g,w):u(m,g)):g.isMeshMatcapMaterial?(n(m,g),f(m,g)):g.isMeshDepthMaterial?(n(m,g),p(m,g)):g.isMeshDistanceMaterial?(n(m,g),_(m,g)):g.isMeshNormalMaterial?(n(m,g),v(m,g)):g.isLineBasicMaterial?(i(m,g),g.isLineDashedMaterial&&r(m,g)):g.isPointsMaterial?a(m,g,x,M):g.isSpriteMaterial?o(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function n(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map),g.alphaMap&&(m.alphaMap.value=g.alphaMap),g.specularMap&&(m.specularMap.value=g.specularMap);const x=s.get(g).envMap;if(x){m.envMap.value=x,m.flipEnvMap.value=x.isCubeTexture&&x._needsFlipEnvMap?-1:1,m.reflectivity.value=g.reflectivity,m.refractionRatio.value=g.refractionRatio;const y=s.get(x).__maxMipLevel;y!==void 0&&(m.maxMipLevel.value=y)}g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity);let M;g.map?M=g.map:g.specularMap?M=g.specularMap:g.displacementMap?M=g.displacementMap:g.normalMap?M=g.normalMap:g.bumpMap?M=g.bumpMap:g.roughnessMap?M=g.roughnessMap:g.metalnessMap?M=g.metalnessMap:g.alphaMap?M=g.alphaMap:g.emissiveMap?M=g.emissiveMap:g.clearcoatMap?M=g.clearcoatMap:g.clearcoatNormalMap?M=g.clearcoatNormalMap:g.clearcoatRoughnessMap&&(M=g.clearcoatRoughnessMap),M!==void 0&&(M.isWebGLRenderTarget&&(M=M.texture),M.matrixAutoUpdate===!0&&M.updateMatrix(),m.uvTransform.value.copy(M.matrix));let w;g.aoMap?w=g.aoMap:g.lightMap&&(w=g.lightMap),w!==void 0&&(w.isWebGLRenderTarget&&(w=w.texture),w.matrixAutoUpdate===!0&&w.updateMatrix(),m.uv2Transform.value.copy(w.matrix))}function i(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity}function r(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function a(m,g,x,M){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*x,m.scale.value=M*.5,g.map&&(m.map.value=g.map),g.alphaMap&&(m.alphaMap.value=g.alphaMap);let w;g.map?w=g.map:g.alphaMap&&(w=g.alphaMap),w!==void 0&&(w.matrixAutoUpdate===!0&&w.updateMatrix(),m.uvTransform.value.copy(w.matrix))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map),g.alphaMap&&(m.alphaMap.value=g.alphaMap);let x;g.map?x=g.map:g.alphaMap&&(x=g.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),m.uvTransform.value.copy(x.matrix))}function l(m,g){g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap)}function c(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap),g.bumpMap&&(m.bumpMap.value=g.bumpMap,m.bumpScale.value=g.bumpScale,g.side===st&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,m.normalScale.value.copy(g.normalScale),g.side===st&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias)}function h(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap),g.bumpMap&&(m.bumpMap.value=g.bumpMap,m.bumpScale.value=g.bumpScale,g.side===st&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,m.normalScale.value.copy(g.normalScale),g.side===st&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias)}function u(m,g){m.roughness.value=g.roughness,m.metalness.value=g.metalness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap),g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap),g.bumpMap&&(m.bumpMap.value=g.bumpMap,m.bumpScale.value=g.bumpScale,g.side===st&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,m.normalScale.value.copy(g.normalScale),g.side===st&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),s.get(g).envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function d(m,g,x){u(m,g),m.reflectivity.value=g.reflectivity,m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.sheen&&m.sheen.value.copy(g.sheen),g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap),g.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),m.clearcoatNormalMap.value=g.clearcoatNormalMap,g.side===st&&m.clearcoatNormalScale.value.negate()),m.transmission.value=g.transmission,g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap),g.transmission>0&&(m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)}function f(m,g){g.matcap&&(m.matcap.value=g.matcap),g.bumpMap&&(m.bumpMap.value=g.bumpMap,m.bumpScale.value=g.bumpScale,g.side===st&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,m.normalScale.value.copy(g.normalScale),g.side===st&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias)}function p(m,g){g.displacementMap&&(m.displacementMap.value=g.displacementMap,m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias)}function _(m,g){g.displacementMap&&(m.displacementMap.value=g.displacementMap,m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),m.referencePosition.value.copy(g.referencePosition),m.nearDistance.value=g.nearDistance,m.farDistance.value=g.farDistance}function v(m,g){g.bumpMap&&(m.bumpMap.value=g.bumpMap,m.bumpScale.value=g.bumpScale,g.side===st&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,m.normalScale.value.copy(g.normalScale),g.side===st&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias)}return{refreshFogUniforms:e,refreshMaterialUniforms:t}}function Pv(){const s=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");return s.style.display="block",s}function We(s={}){const e=s.canvas!==void 0?s.canvas:Pv(),t=s.context!==void 0?s.context:null,n=s.alpha!==void 0?s.alpha:!1,i=s.depth!==void 0?s.depth:!0,r=s.stencil!==void 0?s.stencil:!0,a=s.antialias!==void 0?s.antialias:!1,o=s.premultipliedAlpha!==void 0?s.premultipliedAlpha:!0,l=s.preserveDrawingBuffer!==void 0?s.preserveDrawingBuffer:!1,c=s.powerPreference!==void 0?s.powerPreference:"default",h=s.failIfMajorPerformanceCaveat!==void 0?s.failIfMajorPerformanceCaveat:!1;let u=null,d=null;const f=[],p=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.gammaFactor=2,this.outputEncoding=as,this.physicallyCorrectLights=!1,this.toneMapping=Gi,this.toneMappingExposure=1;const _=this;let v=!1,m=0,g=0,x=null,M=-1,w=null;const y=new Ue,A=new Ue;let E=null,D=e.width,R=e.height,z=1,H=null,F=null;const I=new Ue(0,0,D,R),C=new Ue(0,0,D,R);let P=!1;const B=[],j=new Ea;let G=!1,ne=!1,K=null;const ue=new ee,ce=new S,me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function he(){return x===null?z:1}let V=t;function Xe(b,O){for(let U=0;U<b.length;U++){const k=b[U],$=e.getContext(k,O);if($!==null)return $}return null}try{const b={alpha:n,depth:i,stencil:r,antialias:a,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:h};if(e.addEventListener("webglcontextlost",qe,!1),e.addEventListener("webglcontextrestored",wt,!1),V===null){const O=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&O.shift(),V=Xe(O,b),V===null)throw Xe(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}V.getShaderPrecisionFormat===void 0&&(V.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Te,we,pe,be,Q,Z,te,fe,oe,L,T,W,q,se,le,ye,xe,Ee,de,N,ie,Y;function _e(){Te=new K0(V),we=new q0(V,Te,s),Te.init(we),ie=new bv(V,Te,we),pe=new Mv(V,Te,we),B[0]=1029,be=new t_,Q=new dv,Z=new Av(V,Te,pe,Q,we,ie,be),te=new Z0(_),fe=new Am(V,we),Y=new j0(V,Te,fe,we),oe=new $0(V,fe,be,Y),L=new s_(V,oe,fe,be),Ee=new r_(V),le=new J0(Q),T=new uv(_,te,Te,we,Y,le),W=new Lv(Q),q=new pv(Q),se=new yv(Te,we),xe=new Y0(_,te,pe,L,o),ye=new Eu(_,L,we),de=new Q0(V,Te,be,we),N=new e_(V,Te,be,we),be.programs=T.programs,_.capabilities=we,_.extensions=Te,_.properties=Q,_.renderLists=q,_.shadowMap=ye,_.state=pe,_.info=be}_e();const ae=new Ev(_,V);this.xr=ae,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const b=Te.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Te.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(b){b!==void 0&&(z=b,this.setSize(D,R,!1))},this.getSize=function(b){return b.set(D,R)},this.setSize=function(b,O,U){if(ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=b,R=O,e.width=Math.floor(b*z),e.height=Math.floor(O*z),U!==!1&&(e.style.width=b+"px",e.style.height=O+"px"),this.setViewport(0,0,b,O)},this.getDrawingBufferSize=function(b){return b.set(D*z,R*z).floor()},this.setDrawingBufferSize=function(b,O,U){D=b,R=O,z=U,e.width=Math.floor(b*U),e.height=Math.floor(O*U),this.setViewport(0,0,b,O)},this.getCurrentViewport=function(b){return b.copy(y)},this.getViewport=function(b){return b.copy(I)},this.setViewport=function(b,O,U,k){b.isVector4?I.set(b.x,b.y,b.z,b.w):I.set(b,O,U,k),pe.viewport(y.copy(I).multiplyScalar(z).floor())},this.getScissor=function(b){return b.copy(C)},this.setScissor=function(b,O,U,k){b.isVector4?C.set(b.x,b.y,b.z,b.w):C.set(b,O,U,k),pe.scissor(A.copy(C).multiplyScalar(z).floor())},this.getScissorTest=function(){return P},this.setScissorTest=function(b){pe.setScissorTest(P=b)},this.setOpaqueSort=function(b){H=b},this.setTransparentSort=function(b){F=b},this.getClearColor=function(b){return b.copy(xe.getClearColor())},this.setClearColor=function(){xe.setClearColor.apply(xe,arguments)},this.getClearAlpha=function(){return xe.getClearAlpha()},this.setClearAlpha=function(){xe.setClearAlpha.apply(xe,arguments)},this.clear=function(b,O,U){let k=0;(b===void 0||b)&&(k|=16384),(O===void 0||O)&&(k|=256),(U===void 0||U)&&(k|=1024),V.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",qe,!1),e.removeEventListener("webglcontextrestored",wt,!1),q.dispose(),se.dispose(),Q.dispose(),te.dispose(),L.dispose(),Y.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",jl),ae.removeEventListener("sessionend",Ql),K&&(K.dispose(),K=null),jn.stop()};function qe(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function wt(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;const b=be.autoReset,O=ye.enabled,U=ye.autoUpdate,k=ye.needsUpdate,$=ye.type;_e(),be.autoReset=b,ye.enabled=O,ye.autoUpdate=U,ye.needsUpdate=k,ye.type=$}function St(b){const O=b.target;O.removeEventListener("dispose",St),Yn(O)}function Yn(b){et(b),Q.remove(b)}function et(b){const O=Q.get(b).programs;O!==void 0&&O.forEach(function(U){T.releaseProgram(U)})}function ln(b,O){b.render(function(U){_.renderBufferImmediate(U,O)})}this.renderBufferImmediate=function(b,O){Y.initAttributes();const U=Q.get(b);b.hasPositions&&!U.position&&(U.position=V.createBuffer()),b.hasNormals&&!U.normal&&(U.normal=V.createBuffer()),b.hasUvs&&!U.uv&&(U.uv=V.createBuffer()),b.hasColors&&!U.color&&(U.color=V.createBuffer());const k=O.getAttributes();b.hasPositions&&(V.bindBuffer(34962,U.position),V.bufferData(34962,b.positionArray,35048),Y.enableAttribute(k.position),V.vertexAttribPointer(k.position,3,5126,!1,0,0)),b.hasNormals&&(V.bindBuffer(34962,U.normal),V.bufferData(34962,b.normalArray,35048),Y.enableAttribute(k.normal),V.vertexAttribPointer(k.normal,3,5126,!1,0,0)),b.hasUvs&&(V.bindBuffer(34962,U.uv),V.bufferData(34962,b.uvArray,35048),Y.enableAttribute(k.uv),V.vertexAttribPointer(k.uv,2,5126,!1,0,0)),b.hasColors&&(V.bindBuffer(34962,U.color),V.bufferData(34962,b.colorArray,35048),Y.enableAttribute(k.color),V.vertexAttribPointer(k.color,3,5126,!1,0,0)),Y.disableUnusedAttributes(),V.drawArrays(4,0,b.count),b.count=0},this.renderBufferDirect=function(b,O,U,k,$,Le){O===null&&(O=me);const Ae=$.isMesh&&$.matrixWorld.determinant()<0,ge=Kl(b,O,k,$);pe.setMaterial(k,Ae);let Pe=U.index;const ve=U.attributes.position;if(Pe===null){if(ve===void 0||ve.count===0)return}else if(Pe.count===0)return;let Re=1;k.wireframe===!0&&(Pe=oe.getWireframeAttribute(U),Re=2),(k.morphTargets||k.morphNormals)&&Ee.update($,U,k,ge),Y.setup($,k,ge,U,Pe);let Se,He=de;Pe!==null&&(Se=fe.get(Pe),He=N,He.setIndex(Se));const en=Pe!==null?Pe.count:ve.count,Lt=U.drawRange.start*Re,Qn=U.drawRange.count*Re,je=Le!==null?Le.start*Re:0,qn=Le!==null?Le.count*Re:1/0,Mt=Math.max(Lt,je),of=Math.min(en,Lt+Qn,je+qn)-1,ps=Math.max(0,of-Mt+1);if(ps!==0){if($.isMesh)k.wireframe===!0?(pe.setLineWidth(k.wireframeLinewidth*he()),He.setMode(1)):He.setMode(4);else if($.isLine){let gr=k.linewidth;gr===void 0&&(gr=1),pe.setLineWidth(gr*he()),$.isLineSegments?He.setMode(1):$.isLineLoop?He.setMode(2):He.setMode(3)}else $.isPoints?He.setMode(0):$.isSprite&&He.setMode(4);if($.isInstancedMesh)He.renderInstances(Mt,ps,$.count);else if(U.isInstancedBufferGeometry){const gr=Math.min(U.instanceCount,U._maxInstanceCount);He.renderInstances(Mt,ps,gr)}else He.render(Mt,ps)}},this.compile=function(b,O){d=se.get(b),d.init(),b.traverseVisible(function(U){U.isLight&&U.layers.test(O.layers)&&(d.pushLight(U),U.castShadow&&d.pushShadow(U))}),d.setupLights(),b.traverse(function(U){const k=U.material;if(k)if(Array.isArray(k))for(let $=0;$<k.length;$++){const Le=k[$];Oa(Le,b,U)}else Oa(k,b,U)})};let jt=null;function nf(b){jt&&jt(b)}function jl(){jn.stop()}function Ql(){jn.start()}const jn=new mu;jn.setAnimationLoop(nf),typeof window<"u"&&jn.setContext(window),this.setAnimationLoop=function(b){jt=b,ae.setAnimationLoop(b),b===null?jn.stop():jn.start()},ae.addEventListener("sessionstart",jl),ae.addEventListener("sessionend",Ql),this.render=function(b,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;b.autoUpdate===!0&&b.updateMatrixWorld(),O.parent===null&&O.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(O),O=ae.getCamera()),b.isScene===!0&&b.onBeforeRender(_,b,O,x),d=se.get(b,p.length),d.init(),p.push(d),ue.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),j.setFromProjectionMatrix(ue),ne=this.localClippingEnabled,G=le.init(this.clippingPlanes,ne,O),u=q.get(b,f.length),u.init(),f.push(u),ql(b,O,0,_.sortObjects),u.finish(),_.sortObjects===!0&&u.sort(H,F),G===!0&&le.beginShadows();const U=d.state.shadowsArray;ye.render(U,b,O),d.setupLights(),d.setupLightsView(O),G===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset(),xe.render(u,b);const k=u.opaque,$=u.transmissive,Le=u.transparent;k.length>0&&fs(k,b,O),$.length>0&&rf(k,$,b,O),Le.length>0&&fs(Le,b,O),x!==null&&(Z.updateMultisampleRenderTarget(x),Z.updateRenderTargetMipmap(x)),b.isScene===!0&&b.onAfterRender(_,b,O),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1),Y.resetDefaultState(),M=-1,w=null,p.pop(),p.length>0?d=p[p.length-1]:d=null,f.pop(),f.length>0?u=f[f.length-1]:u=null};function ql(b,O,U,k){if(b.visible===!1)return;if(b.layers.test(O.layers)){if(b.isGroup)U=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(O);else if(b.isLight)d.pushLight(b),b.castShadow&&d.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||j.intersectsSprite(b)){k&&ce.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ue);const Ae=L.update(b),ge=b.material;ge.visible&&u.push(b,Ae,ge,U,ce.z,null)}}else if(b.isImmediateRenderObject)k&&ce.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ue),u.push(b,null,b.material,U,ce.z,null);else if((b.isMesh||b.isLine||b.isPoints)&&(b.isSkinnedMesh&&b.skeleton.frame!==be.render.frame&&(b.skeleton.update(),b.skeleton.frame=be.render.frame),!b.frustumCulled||j.intersectsObject(b))){k&&ce.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ue);const Ae=L.update(b),ge=b.material;if(Array.isArray(ge)){const Pe=Ae.groups;for(let ve=0,Re=Pe.length;ve<Re;ve++){const Se=Pe[ve],He=ge[Se.materialIndex];He&&He.visible&&u.push(b,Ae,He,U,ce.z,Se)}}else ge.visible&&u.push(b,Ae,ge,U,ce.z,null)}}const Le=b.children;for(let Ae=0,ge=Le.length;Ae<ge;Ae++)ql(Le[Ae],O,U,k)}function rf(b,O,U,k){if(K===null){const ge=a===!0&&we.isWebGL2===!0?hu:Dt;K=new ge(1024,1024,{generateMipmaps:!0,type:ie.convert(Hi)!==null?Hi:la,minFilter:tr,magFilter:ct,wrapS:Tt,wrapT:Tt})}const $=_.getRenderTarget();_.setRenderTarget(K),_.clear();const Le=_.toneMapping;_.toneMapping=Gi,fs(b,U,k),_.toneMapping=Le,Z.updateMultisampleRenderTarget(K),Z.updateRenderTargetMipmap(K),_.setRenderTarget($),fs(O,U,k)}function fs(b,O,U){const k=O.isScene===!0?O.overrideMaterial:null;for(let $=0,Le=b.length;$<Le;$++){const Ae=b[$],ge=Ae.object,Pe=Ae.geometry,ve=k===null?Ae.material:k,Re=Ae.group;if(U.isArrayCamera){const Se=U.cameras;for(let He=0,en=Se.length;He<en;He++){const Lt=Se[He];ge.layers.test(Lt.layers)&&(pe.viewport(y.copy(Lt.viewport)),d.setupLightsView(Lt),Jl(ge,O,Lt,Pe,ve,Re))}}else Jl(ge,O,U,Pe,ve,Re)}}function Jl(b,O,U,k,$,Le){if(b.onBeforeRender(_,O,U,k,$,Le),b.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),b.isImmediateRenderObject){const Ae=Kl(U,O,$,b);pe.setMaterial($),Y.reset(),ln(b,Ae)}else $.transparent===!0&&$.side===kn?($.side=st,$.needsUpdate=!0,_.renderBufferDirect(U,O,k,$,b,Le),$.side=Wi,$.needsUpdate=!0,_.renderBufferDirect(U,O,k,$,b,Le),$.side=kn):_.renderBufferDirect(U,O,k,$,b,Le);b.onAfterRender(_,O,U,k,$,Le)}function Oa(b,O,U){O.isScene!==!0&&(O=me);const k=Q.get(b),$=d.state.lights,Le=d.state.shadowsArray,Ae=$.state.version,ge=T.getParameters(b,$.state,Le,O,U),Pe=T.getProgramCacheKey(ge);let ve=k.programs;k.environment=b.isMeshStandardMaterial?O.environment:null,k.fog=O.fog,k.envMap=te.get(b.envMap||k.environment),ve===void 0&&(b.addEventListener("dispose",St),ve=new Map,k.programs=ve);let Re=ve.get(Pe);if(Re!==void 0){if(k.currentProgram===Re&&k.lightsStateVersion===Ae)return Zl(b,ge),Re}else ge.uniforms=T.getUniforms(b),b.onBuild(ge,_),b.onBeforeCompile(ge,_),Re=T.acquireProgram(ge,Pe),ve.set(Pe,Re),k.uniforms=ge.uniforms;const Se=k.uniforms;(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Se.clippingPlanes=le.uniform),Zl(b,ge),k.needsLights=af(b),k.lightsStateVersion=Ae,k.needsLights&&(Se.ambientLightColor.value=$.state.ambient,Se.lightProbe.value=$.state.probe,Se.directionalLights.value=$.state.directional,Se.directionalLightShadows.value=$.state.directionalShadow,Se.spotLights.value=$.state.spot,Se.spotLightShadows.value=$.state.spotShadow,Se.rectAreaLights.value=$.state.rectArea,Se.ltc_1.value=$.state.rectAreaLTC1,Se.ltc_2.value=$.state.rectAreaLTC2,Se.pointLights.value=$.state.point,Se.pointLightShadows.value=$.state.pointShadow,Se.hemisphereLights.value=$.state.hemi,Se.directionalShadowMap.value=$.state.directionalShadowMap,Se.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Se.spotShadowMap.value=$.state.spotShadowMap,Se.spotShadowMatrix.value=$.state.spotShadowMatrix,Se.pointShadowMap.value=$.state.pointShadowMap,Se.pointShadowMatrix.value=$.state.pointShadowMatrix);const He=Re.getUniforms(),en=Bn.seqWithValue(He.seq,Se);return k.currentProgram=Re,k.uniformsList=en,Re}function Zl(b,O){const U=Q.get(b);U.outputEncoding=O.outputEncoding,U.instancing=O.instancing,U.skinning=O.skinning,U.numClippingPlanes=O.numClippingPlanes,U.numIntersection=O.numClipIntersection,U.vertexAlphas=O.vertexAlphas}function Kl(b,O,U,k){O.isScene!==!0&&(O=me),Z.resetTextureUnits();const $=O.fog,Le=U.isMeshStandardMaterial?O.environment:null,Ae=x===null?_.outputEncoding:x.texture.encoding,ge=te.get(U.envMap||Le),Pe=U.vertexColors===!0&&k.geometry&&k.geometry.attributes.color&&k.geometry.attributes.color.itemSize===4,ve=Q.get(U),Re=d.state.lights;if(G===!0&&(ne===!0||b!==w)){const Mt=b===w&&U.id===M;le.setState(U,b,Mt)}let Se=!1;U.version===ve.__version?(ve.needsLights&&ve.lightsStateVersion!==Re.state.version||ve.outputEncoding!==Ae||k.isInstancedMesh&&ve.instancing===!1||!k.isInstancedMesh&&ve.instancing===!0||k.isSkinnedMesh&&ve.skinning===!1||!k.isSkinnedMesh&&ve.skinning===!0||ve.envMap!==ge||U.fog&&ve.fog!==$||ve.numClippingPlanes!==void 0&&(ve.numClippingPlanes!==le.numPlanes||ve.numIntersection!==le.numIntersection)||ve.vertexAlphas!==Pe)&&(Se=!0):(Se=!0,ve.__version=U.version);let He=ve.currentProgram;Se===!0&&(He=Oa(U,O,k));let en=!1,Lt=!1,Qn=!1;const je=He.getUniforms(),qn=ve.uniforms;if(pe.useProgram(He.program)&&(en=!0,Lt=!0,Qn=!0),U.id!==M&&(M=U.id,Lt=!0),en||w!==b){if(je.setValue(V,"projectionMatrix",b.projectionMatrix),we.logarithmicDepthBuffer&&je.setValue(V,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),w!==b&&(w=b,Lt=!0,Qn=!0),U.isShaderMaterial||U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshStandardMaterial||U.envMap){const Mt=je.map.cameraPosition;Mt!==void 0&&Mt.setValue(V,ce.setFromMatrixPosition(b.matrixWorld))}(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&je.setValue(V,"isOrthographic",b.isOrthographicCamera===!0),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial||U.isShadowMaterial||k.isSkinnedMesh)&&je.setValue(V,"viewMatrix",b.matrixWorldInverse)}if(k.isSkinnedMesh){je.setOptional(V,k,"bindMatrix"),je.setOptional(V,k,"bindMatrixInverse");const Mt=k.skeleton;Mt&&(we.floatVertexTextures?(Mt.boneTexture===null&&Mt.computeBoneTexture(),je.setValue(V,"boneTexture",Mt.boneTexture,Z),je.setValue(V,"boneTextureSize",Mt.boneTextureSize)):je.setOptional(V,Mt,"boneMatrices"))}return(Lt||ve.receiveShadow!==k.receiveShadow)&&(ve.receiveShadow=k.receiveShadow,je.setValue(V,"receiveShadow",k.receiveShadow)),Lt&&(je.setValue(V,"toneMappingExposure",_.toneMappingExposure),ve.needsLights&&sf(qn,Qn),$&&U.fog&&W.refreshFogUniforms(qn,$),W.refreshMaterialUniforms(qn,U,z,R,K),Bn.upload(V,ve.uniformsList,qn,Z)),U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(Bn.upload(V,ve.uniformsList,qn,Z),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&je.setValue(V,"center",k.center),je.setValue(V,"modelViewMatrix",k.modelViewMatrix),je.setValue(V,"normalMatrix",k.normalMatrix),je.setValue(V,"modelMatrix",k.matrixWorld),He}function sf(b,O){b.ambientLightColor.needsUpdate=O,b.lightProbe.needsUpdate=O,b.directionalLights.needsUpdate=O,b.directionalLightShadows.needsUpdate=O,b.pointLights.needsUpdate=O,b.pointLightShadows.needsUpdate=O,b.spotLights.needsUpdate=O,b.spotLightShadows.needsUpdate=O,b.rectAreaLights.needsUpdate=O,b.hemisphereLights.needsUpdate=O}function af(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return m},this.getActiveMipmapLevel=function(){return g},this.getRenderTarget=function(){return x},this.setRenderTarget=function(b,O=0,U=0){x=b,m=O,g=U,b&&Q.get(b).__webglFramebuffer===void 0&&Z.setupRenderTarget(b);let k=null,$=!1,Le=!1;if(b){const ge=b.texture;(ge.isDataTexture3D||ge.isDataTexture2DArray)&&(Le=!0);const Pe=Q.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(k=Pe[O],$=!0):b.isWebGLMultisampleRenderTarget?k=Q.get(b).__webglMultisampledFramebuffer:k=Pe,y.copy(b.viewport),A.copy(b.scissor),E=b.scissorTest}else y.copy(I).multiplyScalar(z).floor(),A.copy(C).multiplyScalar(z).floor(),E=P;if(pe.bindFramebuffer(36160,k)&&we.drawBuffers){let ge=!1;if(b)if(b.isWebGLMultipleRenderTargets){const Pe=b.texture;if(B.length!==Pe.length||B[0]!==36064){for(let ve=0,Re=Pe.length;ve<Re;ve++)B[ve]=36064+ve;B.length=Pe.length,ge=!0}}else(B.length!==1||B[0]!==36064)&&(B[0]=36064,B.length=1,ge=!0);else(B.length!==1||B[0]!==1029)&&(B[0]=1029,B.length=1,ge=!0);ge&&(we.isWebGL2?V.drawBuffers(B):Te.get("WEBGL_draw_buffers").drawBuffersWEBGL(B))}if(pe.viewport(y),pe.scissor(A),pe.setScissorTest(E),$){const ge=Q.get(b.texture);V.framebufferTexture2D(36160,36064,34069+O,ge.__webglTexture,U)}else if(Le){const ge=Q.get(b.texture),Pe=O||0;V.framebufferTextureLayer(36160,36064,ge.__webglTexture,U||0,Pe)}},this.readRenderTargetPixels=function(b,O,U,k,$,Le,Ae){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ge=Q.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ae!==void 0&&(ge=ge[Ae]),ge){pe.bindFramebuffer(36160,ge);try{const Pe=b.texture,ve=Pe.format,Re=Pe.type;if(ve!==It&&ie.convert(ve)!==V.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Se=Re===Hi&&(Te.has("EXT_color_buffer_half_float")||we.isWebGL2&&Te.has("EXT_color_buffer_float"));if(Re!==la&&ie.convert(Re)!==V.getParameter(35738)&&!(Re===vn&&(we.isWebGL2||Te.has("OES_texture_float")||Te.has("WEBGL_color_buffer_float")))&&!Se){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V.checkFramebufferStatus(36160)===36053?O>=0&&O<=b.width-k&&U>=0&&U<=b.height-$&&V.readPixels(O,U,k,$,ie.convert(ve),ie.convert(Re),Le):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")}finally{const Pe=x!==null?Q.get(x).__webglFramebuffer:null;pe.bindFramebuffer(36160,Pe)}}},this.copyFramebufferToTexture=function(b,O,U=0){const k=Math.pow(2,-U),$=Math.floor(O.image.width*k),Le=Math.floor(O.image.height*k);let Ae=ie.convert(O.format);we.isWebGL2&&(Ae===6407&&(Ae=32849),Ae===6408&&(Ae=32856)),Z.setTexture2D(O,0),V.copyTexImage2D(3553,U,Ae,b.x,b.y,$,Le,0),pe.unbindTexture()},this.copyTextureToTexture=function(b,O,U,k=0){const $=O.image.width,Le=O.image.height,Ae=ie.convert(U.format),ge=ie.convert(U.type);Z.setTexture2D(U,0),V.pixelStorei(37440,U.flipY),V.pixelStorei(37441,U.premultiplyAlpha),V.pixelStorei(3317,U.unpackAlignment),O.isDataTexture?V.texSubImage2D(3553,k,b.x,b.y,$,Le,Ae,ge,O.image.data):O.isCompressedTexture?V.compressedTexSubImage2D(3553,k,b.x,b.y,O.mipmaps[0].width,O.mipmaps[0].height,Ae,O.mipmaps[0].data):V.texSubImage2D(3553,k,b.x,b.y,Ae,ge,O.image),k===0&&U.generateMipmaps&&V.generateMipmap(3553),pe.unbindTexture()},this.copyTextureToTexture3D=function(b,O,U,k,$=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Le=b.max.x-b.min.x+1,Ae=b.max.y-b.min.y+1,ge=b.max.z-b.min.z+1,Pe=ie.convert(k.format),ve=ie.convert(k.type);let Re;if(k.isDataTexture3D)Z.setTexture3D(k,0),Re=32879;else if(k.isDataTexture2DArray)Z.setTexture2DArray(k,0),Re=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}V.pixelStorei(37440,k.flipY),V.pixelStorei(37441,k.premultiplyAlpha),V.pixelStorei(3317,k.unpackAlignment);const Se=V.getParameter(3314),He=V.getParameter(32878),en=V.getParameter(3316),Lt=V.getParameter(3315),Qn=V.getParameter(32877),je=U.isCompressedTexture?U.mipmaps[0]:U.image;V.pixelStorei(3314,je.width),V.pixelStorei(32878,je.height),V.pixelStorei(3316,b.min.x),V.pixelStorei(3315,b.min.y),V.pixelStorei(32877,b.min.z),U.isDataTexture||U.isDataTexture3D?V.texSubImage3D(Re,$,O.x,O.y,O.z,Le,Ae,ge,Pe,ve,je.data):U.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),V.compressedTexSubImage3D(Re,$,O.x,O.y,O.z,Le,Ae,ge,Pe,je.data)):V.texSubImage3D(Re,$,O.x,O.y,O.z,Le,Ae,ge,Pe,ve,je),V.pixelStorei(3314,Se),V.pixelStorei(32878,He),V.pixelStorei(3316,en),V.pixelStorei(3315,Lt),V.pixelStorei(32877,Qn),$===0&&k.generateMipmaps&&V.generateMipmap(Re),pe.unbindTexture()},this.initTexture=function(b){Z.setTexture2D(b,0),pe.unbindTexture()},this.resetState=function(){m=0,g=0,x=null,pe.reset(),Y.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Cv extends We{}Cv.prototype.isWebGL1Renderer=!0;class Qr{constructor(e,t=25e-5){this.name="",this.color=new J(e),this.density=t}clone(){return new Qr(this.color,this.density)}toJSON(){return{type:"FogExp2",color:this.color.getHex(),density:this.density}}}Qr.prototype.isFogExp2=!0;class Or extends Ne{constructor(){super(),this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}Or.prototype.isScene=!0;class rr{constructor(e,t){this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Yr,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Vt()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}rr.prototype.isInterleavedBuffer=!0;const tt=new S;class ji{constructor(e,t,n,i=!1){this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)tt.x=this.getX(t),tt.y=this.getY(t),tt.z=this.getZ(t),tt.applyMatrix4(e),this.setXYZ(t,tt.x,tt.y,tt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)tt.x=this.getX(t),tt.y=this.getY(t),tt.z=this.getZ(t),tt.applyNormalMatrix(e),this.setXYZ(t,tt.x,tt.y,tt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)tt.x=this.getX(t),tt.y=this.getY(t),tt.z=this.getZ(t),tt.transformDirection(e),this.setXYZ(t,tt.x,tt.y,tt.z);return this}setX(e,t){return this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){return this.data.array[e*this.data.stride+this.offset]}getY(e){return this.data.array[e*this.data.stride+this.offset+1]}getZ(e){return this.data.array[e*this.data.stride+this.offset+2]}getW(e){return this.data.array[e*this.data.stride+this.offset+3]}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new $e(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ji(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}ji.prototype.isInterleavedBufferAttribute=!0;class hl extends _t{constructor(e){super(),this.type="SpriteMaterial",this.color=new J(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this}}hl.prototype.isSpriteMaterial=!0;let Pi;const Sr=new S,Ci=new S,Fi=new S,Ri=new X,Mr=new X,Pu=new ee,Ds=new S,Ar=new S,Ns=new S,Wc=new X,fo=new X,Xc=new X;class Cu extends Ne{constructor(e){if(super(),this.type="Sprite",Pi===void 0){Pi=new De;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new rr(t,5);Pi.setIndex([0,1,2,0,2,3]),Pi.setAttribute("position",new ji(n,3,0,!1)),Pi.setAttribute("uv",new ji(n,2,3,!1))}this.geometry=Pi,this.material=e!==void 0?e:new hl,this.center=new X(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ci.setFromMatrixScale(this.matrixWorld),Pu.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Fi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ci.multiplyScalar(-Fi.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const a=this.center;Us(Ds.set(-.5,-.5,0),Fi,a,Ci,i,r),Us(Ar.set(.5,-.5,0),Fi,a,Ci,i,r),Us(Ns.set(.5,.5,0),Fi,a,Ci,i,r),Wc.set(0,0),fo.set(1,0),Xc.set(1,1);let o=e.ray.intersectTriangle(Ds,Ar,Ns,!1,Sr);if(o===null&&(Us(Ar.set(-.5,.5,0),Fi,a,Ci,i,r),fo.set(0,1),o=e.ray.intersectTriangle(Ds,Ns,Ar,!1,Sr),o===null))return;const l=e.ray.origin.distanceTo(Sr);l<e.near||l>e.far||t.push({distance:l,point:Sr.clone(),uv:ht.getUV(Sr,Ds,Ar,Ns,Wc,fo,Xc,new X),face:null,object:this})}copy(e){return super.copy(e),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}Cu.prototype.isSprite=!0;function Us(s,e,t,n,i,r){Ri.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(Mr.x=r*Ri.x-i*Ri.y,Mr.y=i*Ri.x+r*Ri.y):Mr.copy(Ri),s.copy(e),s.x+=Mr.x,s.y+=Mr.y,s.applyMatrix4(Pu)}const Yc=new S,jc=new Ue,Qc=new Ue,Fv=new S,qc=new ee;class La extends Ke{constructor(e,t){super(e,t),this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new ee,this.bindMatrixInverse=new ee}copy(e){return super.copy(e),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ue,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.x=t.getX(n),e.y=t.getY(n),e.z=t.getZ(n),e.w=t.getW(n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const n=this.skeleton,i=this.geometry;jc.fromBufferAttribute(i.attributes.skinIndex,e),Qc.fromBufferAttribute(i.attributes.skinWeight,e),Yc.fromBufferAttribute(i.attributes.position,e).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=Qc.getComponent(r);if(a!==0){const o=jc.getComponent(r);qc.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Fv.copy(Yc).applyMatrix4(qc),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}La.prototype.isSkinnedMesh=!0;class qr extends Ne{constructor(){super(),this.type="Bone"}}qr.prototype.isBone=!0;class Fu extends lt{constructor(e=null,t=1,n=1,i,r,a,o,l,c=ct,h=ct,u,d){super(null,a,o,l,c,h,i,r,u,d),this.image={data:e,width:t,height:n},this.magFilter=c,this.minFilter=h,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}}Fu.prototype.isDataTexture=!0;const Jc=new ee,Rv=new ee;class Pa{constructor(e=[],t=[]){this.uuid=Vt(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new ee)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new ee;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:Rv;Jc.multiplyMatrices(o,t[r]),Jc.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Pa(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=lu(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Fu(t,e,e,It,vn);return this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new qr),this.bones.push(a),this.boneInverses.push(new ee().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}const Zc=new ee,Kc=new ee,Bs=[],br=new Ke;class Iv extends Ke{constructor(e,t,n){super(e,t),this.instanceMatrix=new $e(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1}copy(e){return super.copy(e),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(br.geometry=this.geometry,br.material=this.material,br.material!==void 0)for(let r=0;r<i;r++){this.getMatrixAt(r,Zc),Kc.multiplyMatrices(n,Zc),br.matrixWorld=Kc,br.raycast(e,Bs);for(let a=0,o=Bs.length;a<o;a++){const l=Bs[a];l.instanceId=r,l.object=this,t.push(l)}Bs.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new $e(new Float32Array(this.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}Iv.prototype.isInstancedMesh=!0;class ui extends _t{constructor(e){super(),this.type="LineBasicMaterial",this.color=new J(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.morphTargets=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.morphTargets=e.morphTargets,this}}ui.prototype.isLineBasicMaterial=!0;const $c=new S,eh=new S,th=new ee,po=new hi,Os=new Vn;class os extends Ne{constructor(e=new De,t=new ui){super(),this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)$c.fromBufferAttribute(t,i-1),eh.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=$c.distanceTo(eh);e.setAttribute("lineDistance",new Me(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Os.copy(n.boundingSphere),Os.applyMatrix4(i),Os.radius+=r,e.ray.intersectsSphere(Os)===!1)return;th.copy(i).invert(),po.copy(e.ray).applyMatrix4(th);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new S,h=new S,u=new S,d=new S,f=this.isLineSegments?2:1;if(n.isBufferGeometry){const p=n.index,v=n.attributes.position;if(p!==null){const m=Math.max(0,a.start),g=Math.min(p.count,a.start+a.count);for(let x=m,M=g-1;x<M;x+=f){const w=p.getX(x),y=p.getX(x+1);if(c.fromBufferAttribute(v,w),h.fromBufferAttribute(v,y),po.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const E=e.ray.origin.distanceTo(d);E<e.near||E>e.far||t.push({distance:E,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const m=Math.max(0,a.start),g=Math.min(v.count,a.start+a.count);for(let x=m,M=g-1;x<M;x+=f){if(c.fromBufferAttribute(v,x),h.fromBufferAttribute(v,x+1),po.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const y=e.ray.origin.distanceTo(d);y<e.near||y>e.far||t.push({distance:y,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}else n.isGeometry&&console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}os.prototype.isLine=!0;const nh=new S,ih=new S;class Ca extends os{constructor(e,t){super(e,t),this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)nh.fromBufferAttribute(t,i),ih.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+nh.distanceTo(ih);e.setAttribute("lineDistance",new Me(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}}Ca.prototype.isLineSegments=!0;class Ru extends os{constructor(e,t){super(e,t),this.type="LineLoop"}}Ru.prototype.isLineLoop=!0;class ul extends _t{constructor(e){super(),this.type="PointsMaterial",this.color=new J(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.morphTargets=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.morphTargets=e.morphTargets,this}}ul.prototype.isPointsMaterial=!0;const rh=new ee,Oo=new hi,zs=new Vn,ks=new S;class Iu extends Ne{constructor(e=new De,t=new ul){super(),this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),zs.copy(n.boundingSphere),zs.applyMatrix4(i),zs.radius+=r,e.ray.intersectsSphere(zs)===!1)return;rh.copy(i).invert(),Oo.copy(e.ray).applyMatrix4(rh);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o;if(n.isBufferGeometry){const c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let p=d,_=f;p<_;p++){const v=c.getX(p);ks.fromBufferAttribute(u,v),sh(ks,v,l,i,e,t,this)}}else{const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let p=d,_=f;p<_;p++)ks.fromBufferAttribute(u,p),sh(ks,p,l,i,e,t,this)}}else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}Iu.prototype.isPoints=!0;function sh(s,e,t,n,i,r,a){const o=Oo.distanceSqToPoint(s);if(o<t){const l=new S;Oo.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class Dv extends lt{constructor(e,t,n,i,r,a,o,l,c){super(e,t,n,i,r,a,o,l,c),this.format=o!==void 0?o:Un,this.minFilter=a!==void 0?a:ft,this.magFilter=r!==void 0?r:ft,this.generateMipmaps=!1;const h=this;function u(){h.needsUpdate=!0,e.requestVideoFrameCallback(u)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(u)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}Dv.prototype.isVideoTexture=!0;class Nv extends lt{constructor(e,t,n,i,r,a,o,l,c,h,u,d){super(null,a,o,l,c,h,i,r,u,d),this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}Nv.prototype.isCompressedTexture=!0;class Du extends lt{constructor(e,t,n,i,r,a,o,l,c){super(e,t,n,i,r,a,o,l,c),this.needsUpdate=!0}}Du.prototype.isCanvasTexture=!0;class Uv extends lt{constructor(e,t,n,i,r,a,o,l,c,h){if(h=h!==void 0?h:Vi,h!==Vi&&h!==Wr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Vi&&(n=ca),n===void 0&&h===Wr&&(n=Nr),super(null,i,r,a,o,l,h,n,c),this.image={width:e,height:t},this.magFilter=o!==void 0?o:ct,this.minFilter=l!==void 0?l:ct,this.flipY=!1,this.generateMipmaps=!1}}Uv.prototype.isDepthTexture=!0;class dl extends De{constructor(e=1,t=1,n=1,i=8,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],d=[],f=[];let p=0;const _=[],v=n/2;let m=0;g(),a===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new Me(u,3)),this.setAttribute("normal",new Me(d,3)),this.setAttribute("uv",new Me(f,2));function g(){const M=new S,w=new S;let y=0;const A=(t-e)/n;for(let E=0;E<=r;E++){const D=[],R=E/r,z=R*(t-e)+e;for(let H=0;H<=i;H++){const F=H/i,I=F*l+o,C=Math.sin(I),P=Math.cos(I);w.x=z*C,w.y=-R*n+v,w.z=z*P,u.push(w.x,w.y,w.z),M.set(C,A,P).normalize(),d.push(M.x,M.y,M.z),f.push(F,1-R),D.push(p++)}_.push(D)}for(let E=0;E<i;E++)for(let D=0;D<r;D++){const R=_[D][E],z=_[D+1][E],H=_[D+1][E+1],F=_[D][E+1];h.push(R,z,F),h.push(z,H,F),y+=6}c.addGroup(m,y,0),m+=y}function x(M){const w=p,y=new X,A=new S;let E=0;const D=M===!0?e:t,R=M===!0?1:-1;for(let H=1;H<=i;H++)u.push(0,v*R,0),d.push(0,R,0),f.push(.5,.5),p++;const z=p;for(let H=0;H<=i;H++){const I=H/i*l+o,C=Math.cos(I),P=Math.sin(I);A.x=D*P,A.y=v*R,A.z=D*C,u.push(A.x,A.y,A.z),d.push(0,R,0),y.x=C*.5+.5,y.y=P*.5*R+.5,f.push(y.x,y.y),p++}for(let H=0;H<i;H++){const F=w+H,I=z+H;M===!0?h.push(I,I+1,F):h.push(I+1,I,F),E+=3}c.addGroup(m,E,M===!0?1:2),m+=E}}static fromJSON(e){return new dl(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class fl extends De{constructor(e,t,n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],a=[];o(i),c(n),h(),this.setAttribute("position",new Me(r,3)),this.setAttribute("normal",new Me(r.slice(),3)),this.setAttribute("uv",new Me(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(g){const x=new S,M=new S,w=new S;for(let y=0;y<t.length;y+=3)f(t[y+0],x),f(t[y+1],M),f(t[y+2],w),l(x,M,w,g)}function l(g,x,M,w){const y=w+1,A=[];for(let E=0;E<=y;E++){A[E]=[];const D=g.clone().lerp(M,E/y),R=x.clone().lerp(M,E/y),z=y-E;for(let H=0;H<=z;H++)H===0&&E===y?A[E][H]=D:A[E][H]=D.clone().lerp(R,H/z)}for(let E=0;E<y;E++)for(let D=0;D<2*(y-E)-1;D++){const R=Math.floor(D/2);D%2===0?(d(A[E][R+1]),d(A[E+1][R]),d(A[E][R])):(d(A[E][R+1]),d(A[E+1][R+1]),d(A[E+1][R]))}}function c(g){const x=new S;for(let M=0;M<r.length;M+=3)x.x=r[M+0],x.y=r[M+1],x.z=r[M+2],x.normalize().multiplyScalar(g),r[M+0]=x.x,r[M+1]=x.y,r[M+2]=x.z}function h(){const g=new S;for(let x=0;x<r.length;x+=3){g.x=r[x+0],g.y=r[x+1],g.z=r[x+2];const M=v(g)/2/Math.PI+.5,w=m(g)/Math.PI+.5;a.push(M,1-w)}p(),u()}function u(){for(let g=0;g<a.length;g+=6){const x=a[g+0],M=a[g+2],w=a[g+4],y=Math.max(x,M,w),A=Math.min(x,M,w);y>.9&&A<.1&&(x<.2&&(a[g+0]+=1),M<.2&&(a[g+2]+=1),w<.2&&(a[g+4]+=1))}}function d(g){r.push(g.x,g.y,g.z)}function f(g,x){const M=g*3;x.x=e[M+0],x.y=e[M+1],x.z=e[M+2]}function p(){const g=new S,x=new S,M=new S,w=new S,y=new X,A=new X,E=new X;for(let D=0,R=0;D<r.length;D+=9,R+=6){g.set(r[D+0],r[D+1],r[D+2]),x.set(r[D+3],r[D+4],r[D+5]),M.set(r[D+6],r[D+7],r[D+8]),y.set(a[R+0],a[R+1]),A.set(a[R+2],a[R+3]),E.set(a[R+4],a[R+5]),w.copy(g).add(x).add(M).divideScalar(3);const z=v(w);_(y,R+0,g,z),_(A,R+2,x,z),_(E,R+4,M,z)}}function _(g,x,M,w){w<0&&g.x===1&&(a[x]=g.x-1),M.x===0&&M.z===0&&(a[x]=w/2/Math.PI+.5)}function v(g){return Math.atan2(g.z,-g.x)}function m(g){return Math.atan2(-g.y,Math.sqrt(g.x*g.x+g.z*g.z))}}static fromJSON(e){return new fl(e.vertices,e.indices,e.radius,e.details)}}class zt{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const r=n.length;let a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);const h=n[i],d=n[i+1]-h,f=(a-h)/d;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),o=this.getPoint(r),l=t||(a.isVector2?new X:new S);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new S,i=[],r=[],a=[],o=new S,l=new ee;for(let f=0;f<=e;f++){const p=f/e;i[f]=this.getTangentAt(p,new S),i[f].normalize()}r[0]=new S,a[0]=new S;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();const p=Math.acos(Ft(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,p))}a[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(Ft(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(i[p],f*p)),a[p].crossVectors(i[p],r[p])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Fa extends zt{constructor(e=0,t=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t){const n=t||new X,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);const o=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}Fa.prototype.isEllipseCurve=!0;class Nu extends Fa{constructor(e,t,n,i,r,a){super(e,t,n,n,i,r,a),this.type="ArcCurve"}}Nu.prototype.isArcCurve=!0;function pl(){let s=0,e=0,t=0,n=0;function i(r,a,o,l){s=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,i(a,o,d,f)},calc:function(r){const a=r*r,o=a*r;return s+e*r+t*a+n*o}}}const Gs=new S,mo=new pl,go=new pl,_o=new pl;class Uu extends zt{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new S){const n=t,i=this.points,r=i.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%r]:(Gs.subVectors(i[0],i[1]).add(i[0]),c=Gs);const u=i[o%r],d=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(Gs.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Gs),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let p=Math.pow(c.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),v=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),p<1e-4&&(p=_),v<1e-4&&(v=_),mo.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,p,_,v),go.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,p,_,v),_o.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,p,_,v)}else this.curveType==="catmullrom"&&(mo.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),go.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),_o.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(mo.calc(l),go.calc(l),_o.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new S().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}Uu.prototype.isCatmullRomCurve3=!0;function ah(s,e,t,n,i){const r=(n-e)*.5,a=(i-t)*.5,o=s*s,l=s*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*s+t}function Bv(s,e){const t=1-s;return t*t*e}function Ov(s,e){return 2*(1-s)*s*e}function zv(s,e){return s*s*e}function zr(s,e,t,n){return Bv(s,e)+Ov(s,t)+zv(s,n)}function kv(s,e){const t=1-s;return t*t*t*e}function Gv(s,e){const t=1-s;return 3*t*t*s*e}function Hv(s,e){return 3*(1-s)*s*s*e}function Vv(s,e){return s*s*s*e}function kr(s,e,t,n,i){return kv(s,e)+Gv(s,t)+Hv(s,n)+Vv(s,i)}class ml extends zt{constructor(e=new X,t=new X,n=new X,i=new X){super(),this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new X){const n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(kr(e,i.x,r.x,a.x,o.x),kr(e,i.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}ml.prototype.isCubicBezierCurve=!0;class Bu extends zt{constructor(e=new S,t=new S,n=new S,i=new S){super(),this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new S){const n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(kr(e,i.x,r.x,a.x,o.x),kr(e,i.y,r.y,a.y,o.y),kr(e,i.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}Bu.prototype.isCubicBezierCurve3=!0;class Ra extends zt{constructor(e=new X,t=new X){super(),this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new X){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){const n=t||new X;return n.copy(this.v2).sub(this.v1).normalize(),n}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}Ra.prototype.isLineCurve=!0;class Wv extends zt{constructor(e=new S,t=new S){super(),this.type="LineCurve3",this.isLineCurve3=!0,this.v1=e,this.v2=t}getPoint(e,t=new S){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class gl extends zt{constructor(e=new X,t=new X,n=new X){super(),this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new X){const n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(zr(e,i.x,r.x,a.x),zr(e,i.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}gl.prototype.isQuadraticBezierCurve=!0;class Ou extends zt{constructor(e=new S,t=new S,n=new S){super(),this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new S){const n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(zr(e,i.x,r.x,a.x),zr(e,i.y,r.y,a.y),zr(e,i.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}Ou.prototype.isQuadraticBezierCurve3=!0;class _l extends zt{constructor(e=[]){super(),this.type="SplineCurve",this.points=e}getPoint(e,t=new X){const n=t,i=this.points,r=(i.length-1)*e,a=Math.floor(r),o=r-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(ah(o,l.x,c.x,h.x,u.x),ah(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new X().fromArray(i))}return this}}_l.prototype.isSplineCurve=!0;var zu=Object.freeze({__proto__:null,ArcCurve:Nu,CatmullRomCurve3:Uu,CubicBezierCurve:ml,CubicBezierCurve3:Bu,EllipseCurve:Fa,LineCurve:Ra,LineCurve3:Wv,QuadraticBezierCurve:gl,QuadraticBezierCurve3:Ou,SplineCurve:_l});const Xv={triangulate:function(s,e,t=2){const n=e&&e.length,i=n?e[0]*t:s.length;let r=ku(s,0,i,t,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,u,d,f;if(n&&(r=Jv(s,e,r,t)),s.length>80*t){o=c=s[0],l=h=s[1];for(let p=t;p<i;p+=t)u=s[p],d=s[p+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-o,h-l),f=f!==0?1/f:0}return Jr(r,a,t,o,l,f),a}};function ku(s,e,t,n,i){let r,a;if(i===ox(s,e,t,n)>0)for(r=e;r<t;r+=n)a=oh(r,s[r],s[r+1],a);else for(r=t-n;r>=e;r-=n)a=oh(r,s[r],s[r+1],a);return a&&Ia(a,a.next)&&(Kr(a),a=a.next),a}function Gn(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(Ia(t,t.next)||Ze(t.prev,t,t.next)===0)){if(Kr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Jr(s,e,t,n,i,r,a){if(!s)return;!a&&r&&tx(s,n,i,r);let o=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?jv(s,n,i,r):Yv(s)){e.push(l.i/t),e.push(s.i/t),e.push(c.i/t),Kr(s),s=c.next,o=c.next;continue}if(s=c,s===o){a?a===1?(s=Qv(Gn(s),e,t),Jr(s,e,t,n,i,r,2)):a===2&&qv(s,e,t,n,i,r):Jr(Gn(s),e,t,n,i,r,1);break}}}function Yv(s){const e=s.prev,t=s,n=s.next;if(Ze(e,t,n)>=0)return!1;let i=s.next.next;for(;i!==s.prev;){if(zi(e.x,e.y,t.x,t.y,n.x,n.y,i.x,i.y)&&Ze(i.prev,i,i.next)>=0)return!1;i=i.next}return!0}function jv(s,e,t,n){const i=s.prev,r=s,a=s.next;if(Ze(i,r,a)>=0)return!1;const o=i.x<r.x?i.x<a.x?i.x:a.x:r.x<a.x?r.x:a.x,l=i.y<r.y?i.y<a.y?i.y:a.y:r.y<a.y?r.y:a.y,c=i.x>r.x?i.x>a.x?i.x:a.x:r.x>a.x?r.x:a.x,h=i.y>r.y?i.y>a.y?i.y:a.y:r.y>a.y?r.y:a.y,u=zo(o,l,e,t,n),d=zo(c,h,e,t,n);let f=s.prevZ,p=s.nextZ;for(;f&&f.z>=u&&p&&p.z<=d;){if(f!==s.prev&&f!==s.next&&zi(i.x,i.y,r.x,r.y,a.x,a.y,f.x,f.y)&&Ze(f.prev,f,f.next)>=0||(f=f.prevZ,p!==s.prev&&p!==s.next&&zi(i.x,i.y,r.x,r.y,a.x,a.y,p.x,p.y)&&Ze(p.prev,p,p.next)>=0))return!1;p=p.nextZ}for(;f&&f.z>=u;){if(f!==s.prev&&f!==s.next&&zi(i.x,i.y,r.x,r.y,a.x,a.y,f.x,f.y)&&Ze(f.prev,f,f.next)>=0)return!1;f=f.prevZ}for(;p&&p.z<=d;){if(p!==s.prev&&p!==s.next&&zi(i.x,i.y,r.x,r.y,a.x,a.y,p.x,p.y)&&Ze(p.prev,p,p.next)>=0)return!1;p=p.nextZ}return!0}function Qv(s,e,t){let n=s;do{const i=n.prev,r=n.next.next;!Ia(i,r)&&Gu(i,n,n.next,r)&&Zr(i,r)&&Zr(r,i)&&(e.push(i.i/t),e.push(n.i/t),e.push(r.i/t),Kr(n),Kr(n.next),n=s=r),n=n.next}while(n!==s);return Gn(n)}function qv(s,e,t,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&rx(a,o)){let l=Hu(a,o);a=Gn(a,a.next),l=Gn(l,l.next),Jr(a,e,t,n,i,r),Jr(l,e,t,n,i,r);return}o=o.next}a=a.next}while(a!==s)}function Jv(s,e,t,n){const i=[];let r,a,o,l,c;for(r=0,a=e.length;r<a;r++)o=e[r]*n,l=r<a-1?e[r+1]*n:s.length,c=ku(s,o,l,n,!1),c===c.next&&(c.steiner=!0),i.push(ix(c));for(i.sort(Zv),r=0;r<i.length;r++)Kv(i[r],t),t=Gn(t,t.next);return t}function Zv(s,e){return s.x-e.x}function Kv(s,e){if(e=$v(s,e),e){const t=Hu(e,s);Gn(e,e.next),Gn(t,t.next)}}function $v(s,e){let t=e;const n=s.x,i=s.y;let r=-1/0,a;do{if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){const d=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>r){if(r=d,d===n){if(i===t.y)return t;if(i===t.next.y)return t.next}a=t.x<t.next.x?t:t.next}}t=t.next}while(t!==e);if(!a)return null;if(n===r)return a;const o=a,l=a.x,c=a.y;let h=1/0,u;t=a;do n>=t.x&&t.x>=l&&n!==t.x&&zi(i<c?n:r,i,l,c,i<c?r:n,i,t.x,t.y)&&(u=Math.abs(i-t.y)/(n-t.x),Zr(t,s)&&(u<h||u===h&&(t.x>a.x||t.x===a.x&&ex(a,t)))&&(a=t,h=u)),t=t.next;while(t!==o);return a}function ex(s,e){return Ze(s.prev,s,e.prev)<0&&Ze(e.next,s,s.next)<0}function tx(s,e,t,n){let i=s;do i.z===null&&(i.z=zo(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,nx(i)}function nx(s){let e,t,n,i,r,a,o,l,c=1;do{for(t=s,s=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,o--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,c*=2}while(a>1);return s}function zo(s,e,t,n,i){return s=32767*(s-t)*i,e=32767*(e-n)*i,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function ix(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function zi(s,e,t,n,i,r,a,o){return(i-a)*(e-o)-(s-a)*(r-o)>=0&&(s-a)*(n-o)-(t-a)*(e-o)>=0&&(t-a)*(r-o)-(i-a)*(n-o)>=0}function rx(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!sx(s,e)&&(Zr(s,e)&&Zr(e,s)&&ax(s,e)&&(Ze(s.prev,s,e.prev)||Ze(s,e.prev,e))||Ia(s,e)&&Ze(s.prev,s,s.next)>0&&Ze(e.prev,e,e.next)>0)}function Ze(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Ia(s,e){return s.x===e.x&&s.y===e.y}function Gu(s,e,t,n){const i=Vs(Ze(s,e,t)),r=Vs(Ze(s,e,n)),a=Vs(Ze(t,n,s)),o=Vs(Ze(t,n,e));return!!(i!==r&&a!==o||i===0&&Hs(s,t,e)||r===0&&Hs(s,n,e)||a===0&&Hs(t,s,n)||o===0&&Hs(t,e,n))}function Hs(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Vs(s){return s>0?1:s<0?-1:0}function sx(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&Gu(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Zr(s,e){return Ze(s.prev,s,s.next)<0?Ze(s,e,s.next)>=0&&Ze(s,s.prev,e)>=0:Ze(s,e,s.prev)<0||Ze(s,s.next,e)<0}function ax(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function Hu(s,e){const t=new ko(s.i,s.x,s.y),n=new ko(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function oh(s,e,t,n){const i=new ko(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Kr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function ko(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function ox(s,e,t,n){let i=0;for(let r=e,a=t-n;r<t;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}class On{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return On.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];lh(e),ch(n,e);let a=e.length;t.forEach(lh);for(let l=0;l<t.length;l++)i.push(a),a+=t[l].length,ch(n,t[l]);const o=Xv.triangulate(n,i);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function lh(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function ch(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class sr extends De{constructor(e,t){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],r=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new Me(i,3)),this.setAttribute("uv",new Me(r,2)),this.computeVertexNormals();function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1;let u=t.depth!==void 0?t.depth:100,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:6,p=t.bevelSize!==void 0?t.bevelSize:f-2,_=t.bevelOffset!==void 0?t.bevelOffset:0,v=t.bevelSegments!==void 0?t.bevelSegments:3;const m=t.extrudePath,g=t.UVGenerator!==void 0?t.UVGenerator:lx;t.amount!==void 0&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),u=t.amount);let x,M=!1,w,y,A,E;m&&(x=m.getSpacedPoints(h),M=!0,d=!1,w=m.computeFrenetFrames(h,!1),y=new S,A=new S,E=new S),d||(v=0,f=0,p=0,_=0);const D=o.extractPoints(c);let R=D.shape;const z=D.holes;if(!On.isClockWise(R)){R=R.reverse();for(let Q=0,Z=z.length;Q<Z;Q++){const te=z[Q];On.isClockWise(te)&&(z[Q]=te.reverse())}}const F=On.triangulateShape(R,z),I=R;for(let Q=0,Z=z.length;Q<Z;Q++){const te=z[Q];R=R.concat(te)}function C(Q,Z,te){return Z||console.error("THREE.ExtrudeGeometry: vec does not exist"),Z.clone().multiplyScalar(te).add(Q)}const P=R.length,B=F.length;function j(Q,Z,te){let fe,oe,L;const T=Q.x-Z.x,W=Q.y-Z.y,q=te.x-Q.x,se=te.y-Q.y,le=T*T+W*W,ye=T*se-W*q;if(Math.abs(ye)>Number.EPSILON){const xe=Math.sqrt(le),Ee=Math.sqrt(q*q+se*se),de=Z.x-W/xe,N=Z.y+T/xe,ie=te.x-se/Ee,Y=te.y+q/Ee,_e=((ie-de)*se-(Y-N)*q)/(T*se-W*q);fe=de+T*_e-Q.x,oe=N+W*_e-Q.y;const ae=fe*fe+oe*oe;if(ae<=2)return new X(fe,oe);L=Math.sqrt(ae/2)}else{let xe=!1;T>Number.EPSILON?q>Number.EPSILON&&(xe=!0):T<-Number.EPSILON?q<-Number.EPSILON&&(xe=!0):Math.sign(W)===Math.sign(se)&&(xe=!0),xe?(fe=-W,oe=T,L=Math.sqrt(le)):(fe=T,oe=W,L=Math.sqrt(le/2))}return new X(fe/L,oe/L)}const G=[];for(let Q=0,Z=I.length,te=Z-1,fe=Q+1;Q<Z;Q++,te++,fe++)te===Z&&(te=0),fe===Z&&(fe=0),G[Q]=j(I[Q],I[te],I[fe]);const ne=[];let K,ue=G.concat();for(let Q=0,Z=z.length;Q<Z;Q++){const te=z[Q];K=[];for(let fe=0,oe=te.length,L=oe-1,T=fe+1;fe<oe;fe++,L++,T++)L===oe&&(L=0),T===oe&&(T=0),K[fe]=j(te[fe],te[L],te[T]);ne.push(K),ue=ue.concat(K)}for(let Q=0;Q<v;Q++){const Z=Q/v,te=f*Math.cos(Z*Math.PI/2),fe=p*Math.sin(Z*Math.PI/2)+_;for(let oe=0,L=I.length;oe<L;oe++){const T=C(I[oe],G[oe],fe);Xe(T.x,T.y,-te)}for(let oe=0,L=z.length;oe<L;oe++){const T=z[oe];K=ne[oe];for(let W=0,q=T.length;W<q;W++){const se=C(T[W],K[W],fe);Xe(se.x,se.y,-te)}}}const ce=p+_;for(let Q=0;Q<P;Q++){const Z=d?C(R[Q],ue[Q],ce):R[Q];M?(A.copy(w.normals[0]).multiplyScalar(Z.x),y.copy(w.binormals[0]).multiplyScalar(Z.y),E.copy(x[0]).add(A).add(y),Xe(E.x,E.y,E.z)):Xe(Z.x,Z.y,0)}for(let Q=1;Q<=h;Q++)for(let Z=0;Z<P;Z++){const te=d?C(R[Z],ue[Z],ce):R[Z];M?(A.copy(w.normals[Q]).multiplyScalar(te.x),y.copy(w.binormals[Q]).multiplyScalar(te.y),E.copy(x[Q]).add(A).add(y),Xe(E.x,E.y,E.z)):Xe(te.x,te.y,u/h*Q)}for(let Q=v-1;Q>=0;Q--){const Z=Q/v,te=f*Math.cos(Z*Math.PI/2),fe=p*Math.sin(Z*Math.PI/2)+_;for(let oe=0,L=I.length;oe<L;oe++){const T=C(I[oe],G[oe],fe);Xe(T.x,T.y,u+te)}for(let oe=0,L=z.length;oe<L;oe++){const T=z[oe];K=ne[oe];for(let W=0,q=T.length;W<q;W++){const se=C(T[W],K[W],fe);M?Xe(se.x,se.y+x[h-1].y,x[h-1].x+te):Xe(se.x,se.y,u+te)}}}me(),he();function me(){const Q=i.length/3;if(d){let Z=0,te=P*Z;for(let fe=0;fe<B;fe++){const oe=F[fe];Te(oe[2]+te,oe[1]+te,oe[0]+te)}Z=h+v*2,te=P*Z;for(let fe=0;fe<B;fe++){const oe=F[fe];Te(oe[0]+te,oe[1]+te,oe[2]+te)}}else{for(let Z=0;Z<B;Z++){const te=F[Z];Te(te[2],te[1],te[0])}for(let Z=0;Z<B;Z++){const te=F[Z];Te(te[0]+P*h,te[1]+P*h,te[2]+P*h)}}n.addGroup(Q,i.length/3-Q,0)}function he(){const Q=i.length/3;let Z=0;V(I,Z),Z+=I.length;for(let te=0,fe=z.length;te<fe;te++){const oe=z[te];V(oe,Z),Z+=oe.length}n.addGroup(Q,i.length/3-Q,1)}function V(Q,Z){let te=Q.length;for(;--te>=0;){const fe=te;let oe=te-1;oe<0&&(oe=Q.length-1);for(let L=0,T=h+v*2;L<T;L++){const W=P*L,q=P*(L+1),se=Z+fe+W,le=Z+oe+W,ye=Z+oe+q,xe=Z+fe+q;we(se,le,ye,xe)}}}function Xe(Q,Z,te){l.push(Q),l.push(Z),l.push(te)}function Te(Q,Z,te){pe(Q),pe(Z),pe(te);const fe=i.length/3,oe=g.generateTopUV(n,i,fe-3,fe-2,fe-1);be(oe[0]),be(oe[1]),be(oe[2])}function we(Q,Z,te,fe){pe(Q),pe(Z),pe(fe),pe(Z),pe(te),pe(fe);const oe=i.length/3,L=g.generateSideWallUV(n,i,oe-6,oe-3,oe-2,oe-1);be(L[0]),be(L[1]),be(L[3]),be(L[1]),be(L[2]),be(L[3])}function pe(Q){i.push(l[Q*3+0]),i.push(l[Q*3+1]),i.push(l[Q*3+2])}function be(Q){r.push(Q.x),r.push(Q.y)}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return cx(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,a=e.shapes.length;r<a;r++){const o=t[e.shapes[r]];n.push(o)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new zu[i.type]().fromJSON(i)),new sr(n,e.options)}}const lx={generateTopUV:function(s,e,t,n,i){const r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[i*3],h=e[i*3+1];return[new X(r,a),new X(o,l),new X(c,h)]},generateSideWallUV:function(s,e,t,n,i,r){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[i*3],f=e[i*3+1],p=e[i*3+2],_=e[r*3],v=e[r*3+1],m=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new X(a,1-l),new X(c,1-u),new X(d,1-p),new X(_,1-m)]:[new X(o,1-l),new X(h,1-u),new X(f,1-p),new X(v,1-m)]}};function cx(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class vl extends fl{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new vl(e.radius,e.detail)}}class xl extends De{constructor(e,t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],r=[],a=[];let o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Me(i,3)),this.setAttribute("normal",new Me(r,3)),this.setAttribute("uv",new Me(a,2));function c(h){const u=i.length/3,d=h.extractPoints(t);let f=d.shape;const p=d.holes;On.isClockWise(f)===!1&&(f=f.reverse());for(let v=0,m=p.length;v<m;v++){const g=p[v];On.isClockWise(g)===!0&&(p[v]=g.reverse())}const _=On.triangulateShape(f,p);for(let v=0,m=p.length;v<m;v++){const g=p[v];f=f.concat(g)}for(let v=0,m=f.length;v<m;v++){const g=f[v];i.push(g.x,g.y,0),r.push(0,0,1),a.push(g.x,g.y)}for(let v=0,m=_.length;v<m;v++){const g=_[v],x=g[0]+u,M=g[1]+u,w=g[2]+u;n.push(x,M,w),l+=3}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return hx(t,e)}static fromJSON(e,t){const n=[];for(let i=0,r=e.shapes.length;i<r;i++){const a=t[e.shapes[i]];n.push(a)}return new xl(n,e.curveSegments)}}function hx(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){const i=s[t];e.shapes.push(i.uuid)}else e.shapes.push(s.uuid);return e}class yl extends De{constructor(e=1,t=8,n=6,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new S,d=new S,f=[],p=[],_=[],v=[];for(let m=0;m<=n;m++){const g=[],x=m/n;let M=0;m==0&&a==0?M=.5/t:m==n&&l==Math.PI&&(M=-.5/t);for(let w=0;w<=t;w++){const y=w/t;u.x=-e*Math.cos(i+y*r)*Math.sin(a+x*o),u.y=e*Math.cos(a+x*o),u.z=e*Math.sin(i+y*r)*Math.sin(a+x*o),p.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),v.push(y+M,1-x),g.push(c++)}h.push(g)}for(let m=0;m<n;m++)for(let g=0;g<t;g++){const x=h[m][g+1],M=h[m][g],w=h[m+1][g],y=h[m+1][g+1];(m!==0||a>0)&&f.push(x,M,y),(m!==n-1||l<Math.PI)&&f.push(M,w,y)}this.setIndex(f),this.setAttribute("position",new Me(p,3)),this.setAttribute("normal",new Me(_,3)),this.setAttribute("uv",new Me(v,2))}static fromJSON(e){return new yl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ux extends _t{constructor(e){super(),this.type="ShadowMaterial",this.color=new J(0),this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this}}ux.prototype.isShadowMaterial=!0;class dx extends mt{constructor(e){super(e),this.type="RawShaderMaterial"}}dx.prototype.isRawShaderMaterial=!0;class di extends _t{constructor(e){super(),this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new J(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new J(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=li,this.normalScale=new X(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.morphTargets=!1,this.morphNormals=!1,this.flatShading=!1,this.vertexTangents=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.flatShading=e.flatShading,this.vertexTangents=e.vertexTangents,this}}di.prototype.isMeshStandardMaterial=!0;class wl extends di{constructor(e){super(),this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoat=0,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new X(1,1),this.clearcoatNormalMap=null,this.reflectivity=.5,Object.defineProperty(this,"ior",{get:function(){return(1+.4*this.reflectivity)/(1-.4*this.reflectivity)},set:function(t){this.reflectivity=Ft(2.5*(t-1)/(t+1),0,1)}}),this.sheen=null,this.transmission=0,this.transmissionMap=null,this.thickness=.01,this.thicknessMap=null,this.attenuationDistance=0,this.attenuationColor=new J(1,1,1),this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.reflectivity=e.reflectivity,e.sheen?this.sheen=(this.sheen||new J).copy(e.sheen):this.sheen=null,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this}}wl.prototype.isMeshPhysicalMaterial=!0;class ea extends _t{constructor(e){super(),this.type="MeshPhongMaterial",this.color=new J(16777215),this.specular=new J(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new J(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=li,this.normalScale=new X(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ba,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.morphTargets=!1,this.morphNormals=!1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.flatShading=e.flatShading,this}}ea.prototype.isMeshPhongMaterial=!0;class fx extends _t{constructor(e){super(),this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new J(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new J(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=li,this.normalScale=new X(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.morphTargets=!1,this.morphNormals=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this}}fx.prototype.isMeshToonMaterial=!0;class px extends _t{constructor(e){super(),this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=li,this.normalScale=new X(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.morphTargets=!1,this.morphNormals=!1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.flatShading=e.flatShading,this}}px.prototype.isMeshNormalMaterial=!0;class Vu extends _t{constructor(e){super(),this.type="MeshLambertMaterial",this.color=new J(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new J(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ba,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.morphTargets=!1,this.morphNormals=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this}}Vu.prototype.isMeshLambertMaterial=!0;class mx extends _t{constructor(e){super(),this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new J(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=li,this.normalScale=new X(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.morphTargets=!1,this.morphNormals=!1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.flatShading=e.flatShading,this}}mx.prototype.isMeshMatcapMaterial=!0;class gx extends ui{constructor(e){super(),this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}gx.prototype.isLineDashedMaterial=!0;const Je={arraySlice:function(s,e,t){return Je.isTypedArray(s)?new s.constructor(s.subarray(e,t!==void 0?t:s.length)):s.slice(e,t)},convertArray:function(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)},isTypedArray:function(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)},getKeyframeOrder:function(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n},sortedArray:function(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let l=0;l!==e;++l)i[a++]=s[o+l]}return i},flattenJSON:function(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)},subclip:function(s,e,t,n,i=30){const r=s.clone();r.name=e;const a=[];for(let l=0;l<r.tracks.length;++l){const c=r.tracks[l],h=c.getValueSize(),u=[],d=[];for(let f=0;f<c.times.length;++f){const p=c.times[f]*i;if(!(p<t||p>=n)){u.push(c.times[f]);for(let _=0;_<h;++_)d.push(c.values[f*h+_])}}u.length!==0&&(c.times=Je.convertArray(u,c.times.constructor),c.values=Je.convertArray(d,c.values.constructor),a.push(c))}r.tracks=a;let o=1/0;for(let l=0;l<r.tracks.length;++l)o>r.tracks[l].times[0]&&(o=r.tracks[l].times[0]);for(let l=0;l<r.tracks.length;++l)r.tracks[l].shift(-1*o);return r.resetDuration(),r},makeClipAdditive:function(s,e=0,t=s,n=30){n<=0&&(n=30);const i=t.tracks.length,r=e/n;for(let a=0;a<i;++a){const o=t.tracks[a],l=o.ValueTypeName;if(l==="bool"||l==="string")continue;const c=s.tracks.find(function(m){return m.name===o.name&&m.ValueTypeName===l});if(c===void 0)continue;let h=0;const u=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=u/3);let d=0;const f=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=f/3);const p=o.times.length-1;let _;if(r<=o.times[0]){const m=h,g=u-h;_=Je.arraySlice(o.values,m,g)}else if(r>=o.times[p]){const m=p*u+h,g=m+u-h;_=Je.arraySlice(o.values,m,g)}else{const m=o.createInterpolant(),g=h,x=u-h;m.evaluate(r),_=Je.arraySlice(m.resultBuffer,g,x)}l==="quaternion"&&new Ve().fromArray(_).normalize().conjugate().toArray(_);const v=c.times.length;for(let m=0;m<v;++m){const g=m*f+d;if(l==="quaternion")Ve.multiplyQuaternionsFlat(c.values,g,_,0,c.values,g);else{const x=f-d*2;for(let M=0;M<x;++M)c.values[g+M]-=_[M]}}}return s.blendMode=au,s}};class Sn{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,e,r)}if(n===o)break;if(r=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,i);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,i);if(i===void 0)return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,r,e)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}Sn.prototype.beforeStart_=Sn.prototype.copySampleValue_;Sn.prototype.afterEnd_=Sn.prototype.copySampleValue_;class _x extends Sn{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Bi,endingEnd:Bi}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,a=e+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Oi:r=e,o=2*t-n;break;case ha:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Oi:a=e,l=2*n-t;break;case ha:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(i-t),_=p*p,v=_*p,m=-d*v+2*d*_-d*p,g=(1+d)*v+(-1.5-2*d)*_+(-.5+d)*p+1,x=(-1-f)*v+(1.5+f)*_+.5*p,M=f*v-f*_;for(let w=0;w!==o;++w)r[w]=m*a[h+w]+g*a[c+w]+x*a[l+w]+M*a[u+w];return r}}class Wu extends Sn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}}class vx extends Sn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class an{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Je.convertArray(t,this.TimeBufferType),this.values=Je.convertArray(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Je.convertArray(e.times,Array),values:Je.convertArray(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new vx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Wu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new _x(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Xr:t=this.InterpolantFactoryMethodDiscrete;break;case Xi:t=this.InterpolantFactoryMethodLinear;break;case za:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Xr;case this.InterpolantFactoryMethodLinear:return Xi;case this.InterpolantFactoryMethodSmooth:return za}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=Je.arraySlice(n,r,a),this.values=Je.arraySlice(this.values,r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&Je.isTypedArray(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=Je.arraySlice(this.times),t=Je.arraySlice(this.values),n=this.getValueSize(),i=this.getInterpolation()===za,r=e.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(i)l=!0;else{const u=o*n,d=u-n,f=u+n;for(let p=0;p!==n;++p){const _=t[u+p];if(_!==t[d+p]||_!==t[f+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=Je.arraySlice(e,0,a),this.values=Je.arraySlice(t,0,a*n)):(this.times=e,this.values=t),this}clone(){const e=Je.arraySlice(this.times,0),t=Je.arraySlice(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}an.prototype.TimeBufferType=Float32Array;an.prototype.ValueBufferType=Float32Array;an.prototype.DefaultInterpolation=Xi;class ar extends an{}ar.prototype.ValueTypeName="bool";ar.prototype.ValueBufferType=Array;ar.prototype.DefaultInterpolation=Xr;ar.prototype.InterpolantFactoryMethodLinear=void 0;ar.prototype.InterpolantFactoryMethodSmooth=void 0;class Xu extends an{}Xu.prototype.ValueTypeName="color";class Qi extends an{}Qi.prototype.ValueTypeName="number";class xx extends Sn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let h=c+o;c!==h;c+=4)Ve.slerpFlat(r,0,a,c-o,a,c,l);return r}}class Wn extends an{InterpolantFactoryMethodLinear(e){return new xx(this.times,this.values,this.getValueSize(),e)}}Wn.prototype.ValueTypeName="quaternion";Wn.prototype.DefaultInterpolation=Xi;Wn.prototype.InterpolantFactoryMethodSmooth=void 0;class or extends an{}or.prototype.ValueTypeName="string";or.prototype.ValueBufferType=Array;or.prototype.DefaultInterpolation=Xr;or.prototype.InterpolantFactoryMethodLinear=void 0;or.prototype.InterpolantFactoryMethodSmooth=void 0;class oi extends an{}oi.prototype.ValueTypeName="vector";class $r{constructor(e,t=-1,n,i=rl){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Vt(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(wx(n[a]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(an.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const h=Je.getKeyframeOrder(l);l=Je.sortedArray(l,1,h),c=Je.sortedArray(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new Qi(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],h=c.name.match(r);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,p,_){if(f.length!==0){const v=[],m=[];Je.flattenJSON(f,v,m,p),v.length!==0&&_.push(new u(d,v,m))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let p;for(p=0;p<d.length;p++)if(d[p].morphTargets)for(let _=0;_<d[p].morphTargets.length;_++)f[d[p].morphTargets[_]]=-1;for(const _ in f){const v=[],m=[];for(let g=0;g!==d[p].morphTargets.length;++g){const x=d[p];v.push(x.time),m.push(x.morphTarget===_?1:0)}i.push(new Qi(".morphTargetInfluence["+_+"]",v,m))}l=f.length*(a||1)}else{const f=".bones["+t[u].name+"]";n(oi,f+".position",d,"pos",i),n(Wn,f+".quaternion",d,"rot",i),n(oi,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function yx(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Qi;case"vector":case"vector2":case"vector3":case"vector4":return oi;case"color":return Xu;case"quaternion":return Wn;case"bool":case"boolean":return ar;case"string":return or}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function wx(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=yx(s.type);if(s.times===void 0){const t=[],n=[];Je.flattenJSON(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const qi={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Sx{constructor(e,t,n){const i=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],p=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null}}}const Mx=new Sx;class on{constructor(e){this.manager=e!==void 0?e:Mx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const Zt={};class Da extends on{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=qi.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;if(Zt[e]!==void 0){Zt[e].push({onLoad:t,onProgress:n,onError:i});return}const o=/^data:(.*?)(;base64)?,(.*)$/,l=e.match(o);let c;if(l){const h=l[1],u=!!l[2];let d=l[3];d=decodeURIComponent(d),u&&(d=atob(d));try{let f;const p=(this.responseType||"").toLowerCase();switch(p){case"arraybuffer":case"blob":const _=new Uint8Array(d.length);for(let m=0;m<d.length;m++)_[m]=d.charCodeAt(m);p==="blob"?f=new Blob([_.buffer],{type:h}):f=_.buffer;break;case"document":f=new DOMParser().parseFromString(d,h);break;case"json":f=JSON.parse(d);break;default:f=d;break}setTimeout(function(){t&&t(f),r.manager.itemEnd(e)},0)}catch(f){setTimeout(function(){i&&i(f),r.manager.itemError(e),r.manager.itemEnd(e)},0)}}else{Zt[e]=[],Zt[e].push({onLoad:t,onProgress:n,onError:i}),c=new XMLHttpRequest,c.open("GET",e,!0),c.addEventListener("load",function(h){const u=this.response,d=Zt[e];if(delete Zt[e],this.status===200||this.status===0){this.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),qi.add(e,u);for(let f=0,p=d.length;f<p;f++){const _=d[f];_.onLoad&&_.onLoad(u)}r.manager.itemEnd(e)}else{for(let f=0,p=d.length;f<p;f++){const _=d[f];_.onError&&_.onError(h)}r.manager.itemError(e),r.manager.itemEnd(e)}},!1),c.addEventListener("progress",function(h){const u=Zt[e];for(let d=0,f=u.length;d<f;d++){const p=u[d];p.onProgress&&p.onProgress(h)}},!1),c.addEventListener("error",function(h){const u=Zt[e];delete Zt[e];for(let d=0,f=u.length;d<f;d++){const p=u[d];p.onError&&p.onError(h)}r.manager.itemError(e),r.manager.itemEnd(e)},!1),c.addEventListener("abort",function(h){const u=Zt[e];delete Zt[e];for(let d=0,f=u.length;d<f;d++){const p=u[d];p.onError&&p.onError(h)}r.manager.itemError(e),r.manager.itemEnd(e)},!1),this.responseType!==void 0&&(c.responseType=this.responseType),this.withCredentials!==void 0&&(c.withCredentials=this.withCredentials),c.overrideMimeType&&c.overrideMimeType(this.mimeType!==void 0?this.mimeType:"text/plain");for(const h in this.requestHeader)c.setRequestHeader(h,this.requestHeader[h]);c.send(null)}return r.manager.itemStart(e),c}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Yu extends on{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=qi.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=document.createElementNS("http://www.w3.org/1999/xhtml","img");function l(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1),qi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1),i&&i(h),r.manager.itemError(e),r.manager.itemEnd(e)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.substr(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class ju extends on{constructor(e){super(e)}load(e,t,n,i){const r=new Ta,a=new Yu(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function l(c){a.load(e[c],function(h){r.images[c]=h,o++,o===6&&(r.needsUpdate=!0,t&&t(r))},void 0,i)}for(let c=0;c<e.length;++c)l(c);return r}}class fi extends on{constructor(e){super(e)}load(e,t,n,i){const r=new lt,a=new Yu(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o;const l=e.search(/\.jpe?g($|\?)/i)>0||e.search(/^data\:image\/jpeg/)===0;r.format=l?Un:It,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Ax extends zt{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new Ra(t,e))}getPoint(e){const t=e*this.getLength(),n=this.getCurveLengths();let i=0;for(;i<n.length;){if(n[i]>=t){const r=n[i]-t,a=this.curves[i],o=a.getLength(),l=o===0?0:1-r/o;return a.getPointAt(l)}i++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const a=r[i],o=a&&a.isEllipseCurve?e*2:a&&(a.isLineCurve||a.isLineCurve3)?1:a&&a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new zu[i.type]().fromJSON(i))}return this}}class Go extends Ax{constructor(e){super(),this.type="Path",this.currentPoint=new X,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Ra(this.currentPoint.clone(),new X(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new gl(this.currentPoint.clone(),new X(e,t),new X(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,a){const o=new ml(this.currentPoint.clone(),new X(e,t),new X(n,i),new X(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new _l(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,i,r,a),this}absarc(e,t,n,i,r,a){return this.absellipse(e,t,n,n,i,r,a),this}ellipse(e,t,n,i,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,r,a,o,l),this}absellipse(e,t,n,i,r,a,o,l){const c=new Fa(e,t,n,i,r,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Sl extends Go{constructor(e){super(e),this.uuid=Vt(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new Go().fromJSON(i))}return this}}class rn extends Ne{constructor(e,t=1){super(),this.type="Light",this.color=new J(e),this.intensity=t}dispose(){}copy(e){return super.copy(e),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}rn.prototype.isLight=!0;class Qu extends rn{constructor(e,t,n){super(e,n),this.type="HemisphereLight",this.position.copy(Ne.DefaultUp),this.updateMatrix(),this.groundColor=new J(t)}copy(e){return rn.prototype.copy.call(this,e),this.groundColor.copy(e.groundColor),this}}Qu.prototype.isHemisphereLight=!0;const hh=new ee,uh=new S,dh=new S;class Ml{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.mapSize=new X(512,512),this.map=null,this.mapPass=null,this.matrix=new ee,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ea,this._frameExtents=new X(1,1),this._viewportCount=1,this._viewports=[new Ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;uh.setFromMatrixPosition(e.matrixWorld),t.position.copy(uh),dh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(dh),t.updateMatrixWorld(),hh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hh),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(t.projectionMatrix),n.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class qu extends Ml{constructor(){super(new yt(50,1,.5,500)),this.focus=1}updateMatrices(e){const t=this.camera,n=jr*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}qu.prototype.isSpotLightShadow=!0;class Al extends rn{constructor(e,t,n=0,i=Math.PI/3,r=0,a=1){super(e,t),this.type="SpotLight",this.position.copy(Ne.DefaultUp),this.updateMatrix(),this.target=new Ne,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.shadow=new qu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}Al.prototype.isSpotLight=!0;const fh=new ee,Tr=new S,vo=new S;class Ju extends Ml{constructor(){super(new yt(90,1,.5,500)),this._frameExtents=new X(4,2),this._viewportCount=6,this._viewports=[new Ue(2,1,1,1),new Ue(0,1,1,1),new Ue(3,1,1,1),new Ue(1,1,1,1),new Ue(3,0,1,1),new Ue(1,0,1,1)],this._cubeDirections=[new S(1,0,0),new S(-1,0,0),new S(0,0,1),new S(0,0,-1),new S(0,1,0),new S(0,-1,0)],this._cubeUps=[new S(0,1,0),new S(0,1,0),new S(0,1,0),new S(0,1,0),new S(0,0,1),new S(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Tr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Tr),vo.copy(n.position),vo.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(vo),n.updateMatrixWorld(),i.makeTranslation(-Tr.x,-Tr.y,-Tr.z),fh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fh)}}Ju.prototype.isPointLightShadow=!0;class fa extends rn{constructor(e,t,n=0,i=1){super(e,t),this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Ju}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}fa.prototype.isPointLight=!0;class pi extends ol{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}pi.prototype.isOrthographicCamera=!0;class Zu extends Ml{constructor(){super(new pi(-5,5,5,-5,.5,500))}}Zu.prototype.isDirectionalLightShadow=!0;class Na extends rn{constructor(e,t){super(e,t),this.type="DirectionalLight",this.position.copy(Ne.DefaultUp),this.updateMatrix(),this.target=new Ne,this.shadow=new Zu}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}Na.prototype.isDirectionalLight=!0;class bl extends rn{constructor(e,t){super(e,t),this.type="AmbientLight"}}bl.prototype.isAmbientLight=!0;class bx extends rn{constructor(e,t,n=10,i=10){super(e,t),this.type="RectAreaLight",this.width=n,this.height=i}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}bx.prototype.isRectAreaLight=!0;class Ku{constructor(){this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new S)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,i=e.y,r=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.282095),t.addScaledVector(a[1],.488603*i),t.addScaledVector(a[2],.488603*r),t.addScaledVector(a[3],.488603*n),t.addScaledVector(a[4],1.092548*(n*i)),t.addScaledVector(a[5],1.092548*(i*r)),t.addScaledVector(a[6],.315392*(3*r*r-1)),t.addScaledVector(a[7],1.092548*(n*r)),t.addScaledVector(a[8],.546274*(n*n-i*i)),t}getIrradianceAt(e,t){const n=e.x,i=e.y,r=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.886227),t.addScaledVector(a[1],2*.511664*i),t.addScaledVector(a[2],2*.511664*r),t.addScaledVector(a[3],2*.511664*n),t.addScaledVector(a[4],2*.429043*n*i),t.addScaledVector(a[5],2*.429043*i*r),t.addScaledVector(a[6],.743125*r*r-.247708),t.addScaledVector(a[7],2*.429043*n*r),t.addScaledVector(a[8],.429043*(n*n-i*i)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+i*3);return this}toArray(e=[],t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+i*3);return e}static getBasisAt(e,t){const n=e.x,i=e.y,r=e.z;t[0]=.282095,t[1]=.488603*i,t[2]=.488603*r,t[3]=.488603*n,t[4]=1.092548*n*i,t[5]=1.092548*i*r,t[6]=.315392*(3*r*r-1),t[7]=1.092548*n*r,t[8]=.546274*(n*n-i*i)}}Ku.prototype.isSphericalHarmonics3=!0;class Tl extends rn{constructor(e=new Ku,t=1){super(void 0,t),this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}Tl.prototype.isLightProbe=!0;class yn{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.substr(0,t+1)}}class Tx extends De{constructor(){super(),this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}clone(){return new this.constructor().copy(this)}toJSON(){const e=super.toJSON(this);return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}Tx.prototype.isInstancedBufferGeometry=!0;class Ex extends $e{constructor(e,t,n,i=1){typeof n=="number"&&(i=n,n=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")),super(e,t,n),this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}Ex.prototype.isInstancedBufferAttribute=!0;class $u extends on{constructor(e){super(e),typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=qi.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){qi.add(e,l),t&&t(l),r.manager.itemEnd(e)}).catch(function(l){i&&i(l),r.manager.itemError(e),r.manager.itemEnd(e)}),r.manager.itemStart(e)}}$u.prototype.isImageBitmapLoader=!0;let Ws;const ed={getContext:function(){return Ws===void 0&&(Ws=new(window.AudioContext||window.webkitAudioContext)),Ws},setContext:function(s){Ws=s}};class El extends on{constructor(e){super(e)}load(e,t,n,i){const r=this,a=new Da(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{const l=o.slice(0);ed.getContext().decodeAudioData(l,function(h){t(h)})}catch(l){i?i(l):console.error(l),r.manager.itemError(e)}},n,i)}}class Lx extends Tl{constructor(e,t,n=1){super(void 0,n);const i=new J().set(e),r=new J().set(t),a=new S(i.r,i.g,i.b),o=new S(r.r,r.g,r.b),l=Math.sqrt(Math.PI),c=l*Math.sqrt(.75);this.sh.coefficients[0].copy(a).add(o).multiplyScalar(l),this.sh.coefficients[1].copy(a).sub(o).multiplyScalar(c)}}Lx.prototype.isHemisphereLightProbe=!0;class Px extends Tl{constructor(e,t=1){super(void 0,t);const n=new J().set(e);this.sh.coefficients[0].set(n.r,n.g,n.b).multiplyScalar(2*Math.sqrt(Math.PI))}}Px.prototype.isAmbientLightProbe=!0;class td{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ph(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=ph();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function ph(){return(typeof performance>"u"?Date:performance).now()}const Kn=new S,mh=new Ve,Cx=new S,$n=new S;class gh extends Ne{constructor(){super(),this.type="AudioListener",this.context=ed.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new td}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(Kn,mh,Cx),$n.set(0,0,-1).applyQuaternion(mh),t.positionX){const i=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(Kn.x,i),t.positionY.linearRampToValueAtTime(Kn.y,i),t.positionZ.linearRampToValueAtTime(Kn.z,i),t.forwardX.linearRampToValueAtTime($n.x,i),t.forwardY.linearRampToValueAtTime($n.y,i),t.forwardZ.linearRampToValueAtTime($n.z,i),t.upX.linearRampToValueAtTime(n.x,i),t.upY.linearRampToValueAtTime(n.y,i),t.upZ.linearRampToValueAtTime(n.z,i)}else t.setPosition(Kn.x,Kn.y,Kn.z),t.setOrientation($n.x,$n.y,$n.z,n.x,n.y,n.z)}}class nd extends Ne{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){if(this.detune=e,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}const ei=new S,_h=new Ve,Fx=new S,ti=new S;class Ho extends nd{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,n){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=n,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(ei,_h,Fx),ti.set(0,0,1).applyQuaternion(_h);const t=this.panner;if(t.positionX){const n=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(ei.x,n),t.positionY.linearRampToValueAtTime(ei.y,n),t.positionZ.linearRampToValueAtTime(ei.z,n),t.orientationX.linearRampToValueAtTime(ti.x,n),t.orientationY.linearRampToValueAtTime(ti.y,n),t.orientationZ.linearRampToValueAtTime(ti.z,n)}else t.setPosition(ei.x,ei.y,ei.z),t.setOrientation(ti.x,ti.y,ti.z)}}class Rx{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,a;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,r=e*i+i;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[r+o]=n[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){o.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,a=i;r!==a;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){Ve.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){const a=this._workIndex*r;Ve.multiplyQuaternionsFlat(e,a,e,t,e,n),Ve.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,r){const a=1-i;for(let o=0;o!==r;++o){const l=t+o;e[l]=e[l]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,r){for(let a=0;a!==r;++a){const o=t+a;e[o]=e[o]+e[n+a]*i}}}const Ll="\\[\\]\\.:\\/",Ix=new RegExp("["+Ll+"]","g"),Pl="[^"+Ll+"]",Dx="[^"+Ll.replace("\\.","")+"]",Nx=/((?:WC+[\/:])*)/.source.replace("WC",Pl),Ux=/(WCOD+)?/.source.replace("WCOD",Dx),Bx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Pl),Ox=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Pl),zx=new RegExp("^"+Nx+Ux+Bx+Ox+"$"),kx=["material","materials","bones"];class Gx{constructor(e,t,n){const i=n||ze.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class ze{constructor(e,t,n){this.path=t,this.parsedPath=n||ze.parseTrackName(t),this.node=ze.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new ze.Composite(e,t,n):new ze(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Ix,"")}static parseTrackName(e){const t=zx.exec(e);if(!t)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);kx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(!t||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.node[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=ze.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[i];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(e.geometry.isBufferGeometry){if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}else{console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",this);return}}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ze.Composite=Gx;ze.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ze.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ze.prototype.GetterByBindingType=[ze.prototype._getValue_direct,ze.prototype._getValue_array,ze.prototype._getValue_arrayElement,ze.prototype._getValue_toArray];ze.prototype.SetterByBindingTypeAndVersioning=[[ze.prototype._setValue_direct,ze.prototype._setValue_direct_setNeedsUpdate,ze.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ze.prototype._setValue_array,ze.prototype._setValue_array_setNeedsUpdate,ze.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ze.prototype._setValue_arrayElement,ze.prototype._setValue_arrayElement_setNeedsUpdate,ze.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ze.prototype._setValue_fromArray,ze.prototype._setValue_fromArray_setNeedsUpdate,ze.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Hx{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const r=t.tracks,a=r.length,o=new Array(a),l={endingStart:Bi,endingEnd:Bi};for(let c=0;c!==a;++c){const h=r[c].createInterpolant(null);o[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Ip,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,r=e._clip.duration,a=r/i,o=i/r;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,r=i.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/a,c[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const l=(e-r)*n;if(l<0||n===0)return;this._startTime=null,t=n*l}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case au:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulateAdditive(o);break;case rl:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,r=this._loopCount;const a=n===Dp;if(e===0)return r===-1?i:a&&(r&1)===1?t-i:i;if(n===$s){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){const o=Math.floor(i/t);i-=t*o,r+=Math.abs(o);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(a&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=Oi,i.endingEnd=Oi):(e?i.endingStart=this.zeroSlopeAtStart?Oi:Bi:i.endingStart=ha,t?i.endingEnd=this.zeroSlopeAtEnd?Oi:Bi:i.endingEnd=ha)}_scheduleFading(e,t,n){const i=this._mixer,r=i.time;let a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,l=a.sampleValues;return o[0]=r,l[0]=t,o[1]=r+e,l[1]=n,this}}class Cl extends ci{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,a=e._propertyBindings,o=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==r;++u){const d=i[u],f=d.name;let p=h[f];if(p!==void 0)a[u]=p;else{if(p=a[u],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,l,f));continue}const _=t&&t._propertyBindings[u].binding.parsedPath;p=new Rx(ze.create(n,f,_),d.ValueTypeName,d.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,l,f),a[u]=p}o[u].resultBuffer=p.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,r=this._actionsByClip;let a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,a=this._actionsByClip,o=a[r],l=o.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;const u=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],l.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,r=this._bindings;let a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Wu(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const i=t||this._root,r=i.uuid;let a=typeof e=="string"?$r.findByName(i,e):e;const o=a!==null?a.uuid:e,l=this._actionsByClip[o];let c=null;if(n===void 0&&(a!==null?n=a.blendMode:n=rl),l!==void 0){const u=l.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;const h=new Hx(this,a,t,n);return this._bindAction(h,c),this._addInactiveAction(h,o,r),h}existingAction(e,t){const n=t||this._root,i=n.uuid,r=typeof e=="string"?$r.findByName(n,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,r,a);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const a=r.knownActions;for(let o=0,l=a.length;o!==l;++o){const c=a[o];this._deactivateAction(c);const h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(const a in r){const o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}Cl.prototype._controlInterpolantsResultBuffer=new Float32Array(1);class Vx extends rr{constructor(e,t,n=1){super(e,t),this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}Vx.prototype.isInstancedInterleavedBuffer=!0;class Wx extends Ne{constructor(e){super(),this.material=e,this.render=function(){},this.hasPositions=!1,this.hasNormals=!1,this.hasColors=!1,this.hasUvs=!1,this.positionArray=null,this.normalArray=null,this.colorArray=null,this.uvArray=null,this.count=0}}Wx.prototype.isImmediateRenderObject=!0;const Rn=new S,Xs=new ee,xo=new ee;class id extends Ca{constructor(e){const t=rd(e),n=new De,i=[],r=[],a=new J(0,0,1),o=new J(0,1,0);for(let c=0;c<t.length;c++){const h=t[c];h.parent&&h.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),r.push(a.r,a.g,a.b),r.push(o.r,o.g,o.b))}n.setAttribute("position",new Me(i,3)),n.setAttribute("color",new Me(r,3));const l=new ui({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,l),this.type="SkeletonHelper",this.isSkeletonHelper=!0,this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){const t=this.bones,n=this.geometry,i=n.getAttribute("position");xo.copy(this.root.matrixWorld).invert();for(let r=0,a=0;r<t.length;r++){const o=t[r];o.parent&&o.parent.isBone&&(Xs.multiplyMatrices(xo,o.matrixWorld),Rn.setFromMatrixPosition(Xs),i.setXYZ(a,Rn.x,Rn.y,Rn.z),Xs.multiplyMatrices(xo,o.parent.matrixWorld),Rn.setFromMatrixPosition(Xs),i.setXYZ(a+1,Rn.x,Rn.y,Rn.z),a+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}}function rd(s){const e=[];s&&s.isBone&&e.push(s);for(let t=0;t<s.children.length;t++)e.push.apply(e,rd(s.children[t]));return e}class Xx extends Ca{constructor(e=10,t=10,n=4473924,i=8947848){n=new J(n),i=new J(i);const r=t/2,a=e/t,o=e/2,l=[],c=[];for(let d=0,f=0,p=-o;d<=t;d++,p+=a){l.push(-o,0,p,o,0,p),l.push(p,0,-o,p,0,o);const _=d===r?n:i;_.toArray(c,f),f+=3,_.toArray(c,f),f+=3,_.toArray(c,f),f+=3,_.toArray(c,f),f+=3}const h=new De;h.setAttribute("position",new Me(l,3)),h.setAttribute("color",new Me(c,3));const u=new ui({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}}const Yx=new Float32Array(1);new Int32Array(Yx.buffer);const jx=new $t({side:st,depthWrite:!1,depthTest:!1});new Ke(new wn,jx);zt.create=function(s,e){return console.log("THREE.Curve.create() has been deprecated"),s.prototype=Object.create(zt.prototype),s.prototype.constructor=s,s.prototype.getPoint=e,s};Go.prototype.fromPoints=function(s){return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),this.setFromPoints(s)};Xx.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")};id.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.")};on.prototype.extractUrlBase=function(s){return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),yn.extractUrlBase(s)};on.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")}};kt.prototype.center=function(s){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(s)};kt.prototype.empty=function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()};kt.prototype.isIntersectionBox=function(s){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(s)};kt.prototype.isIntersectionSphere=function(s){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(s)};kt.prototype.size=function(s){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(s)};Vn.prototype.empty=function(){return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),this.isEmpty()};Ea.prototype.setFromMatrix=function(s){return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),this.setFromProjectionMatrix(s)};pt.prototype.flattenToArrayOffset=function(s,e){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(s,e)};pt.prototype.multiplyVector3=function(s){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),s.applyMatrix3(this)};pt.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")};pt.prototype.applyToBufferAttribute=function(s){return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),s.applyMatrix3(this)};pt.prototype.applyToVector3Array=function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")};pt.prototype.getInverse=function(s){return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(s).invert()};ee.prototype.extractPosition=function(s){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(s)};ee.prototype.flattenToArrayOffset=function(s,e){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(s,e)};ee.prototype.getPosition=function(){return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),new S().setFromMatrixColumn(this,3)};ee.prototype.setRotationFromQuaternion=function(s){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(s)};ee.prototype.multiplyToArray=function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")};ee.prototype.multiplyVector3=function(s){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),s.applyMatrix4(this)};ee.prototype.multiplyVector4=function(s){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),s.applyMatrix4(this)};ee.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")};ee.prototype.rotateAxis=function(s){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),s.transformDirection(this)};ee.prototype.crossVector=function(s){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),s.applyMatrix4(this)};ee.prototype.translate=function(){console.error("THREE.Matrix4: .translate() has been removed.")};ee.prototype.rotateX=function(){console.error("THREE.Matrix4: .rotateX() has been removed.")};ee.prototype.rotateY=function(){console.error("THREE.Matrix4: .rotateY() has been removed.")};ee.prototype.rotateZ=function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")};ee.prototype.rotateByAxis=function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")};ee.prototype.applyToBufferAttribute=function(s){return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),s.applyMatrix4(this)};ee.prototype.applyToVector3Array=function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")};ee.prototype.makeFrustum=function(s,e,t,n,i,r){return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(s,e,n,t,i,r)};ee.prototype.getInverse=function(s){return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(s).invert()};_n.prototype.isIntersectionLine=function(s){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(s)};Ve.prototype.multiplyVector3=function(s){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),s.applyQuaternion(this)};Ve.prototype.inverse=function(){return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."),this.invert()};hi.prototype.isIntersectionBox=function(s){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(s)};hi.prototype.isIntersectionPlane=function(s){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(s)};hi.prototype.isIntersectionSphere=function(s){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(s)};ht.prototype.area=function(){return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea()};ht.prototype.barycoordFromPoint=function(s,e){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(s,e)};ht.prototype.midpoint=function(s){return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(s)};ht.prototypenormal=function(s){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(s)};ht.prototype.plane=function(s){return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(s)};ht.barycoordFromPoint=function(s,e,t,n,i){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),ht.getBarycoord(s,e,t,n,i)};ht.normal=function(s,e,t,n){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),ht.getNormal(s,e,t,n)};Sl.prototype.extractAllPoints=function(s){return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),this.extractPoints(s)};Sl.prototype.extrude=function(s){return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),new sr(this,s)};Sl.prototype.makeGeometry=function(s){return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),new xl(this,s)};X.prototype.fromAttribute=function(s,e,t){return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(s,e,t)};X.prototype.distanceToManhattan=function(s){return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(s)};X.prototype.lengthManhattan=function(){return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};S.prototype.setEulerFromRotationMatrix=function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")};S.prototype.setEulerFromQuaternion=function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")};S.prototype.getPositionFromMatrix=function(s){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(s)};S.prototype.getScaleFromMatrix=function(s){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(s)};S.prototype.getColumnFromMatrix=function(s,e){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(e,s)};S.prototype.applyProjection=function(s){return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(s)};S.prototype.fromAttribute=function(s,e,t){return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(s,e,t)};S.prototype.distanceToManhattan=function(s){return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(s)};S.prototype.lengthManhattan=function(){return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};Ue.prototype.fromAttribute=function(s,e,t){return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(s,e,t)};Ue.prototype.lengthManhattan=function(){return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};Ne.prototype.getChildByName=function(s){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(s)};Ne.prototype.renderDepth=function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")};Ne.prototype.translate=function(s,e){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(e,s)};Ne.prototype.getWorldRotation=function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")};Ne.prototype.applyMatrix=function(s){return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(s)};Object.defineProperties(Ne.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(s){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=s}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}});Ke.prototype.setDrawMode=function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")};Object.defineProperties(Ke.prototype,{drawMode:{get:function(){return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),Np},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}});La.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.")};yt.prototype.setLens=function(s,e){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),e!==void 0&&(this.filmGauge=e),this.setFocalLength(s)};Object.defineProperties(rn.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(s){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=s}},shadowCameraLeft:{set:function(s){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=s}},shadowCameraRight:{set:function(s){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=s}},shadowCameraTop:{set:function(s){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=s}},shadowCameraBottom:{set:function(s){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=s}},shadowCameraNear:{set:function(s){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=s}},shadowCameraFar:{set:function(s){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=s}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(s){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=s}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(s){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=s}},shadowMapHeight:{set:function(s){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=s}}});Object.defineProperties($e.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}},dynamic:{get:function(){return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.usage===ua},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.setUsage(ua)}}});$e.prototype.setDynamic=function(s){return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(s===!0?ua:Yr),this};$e.prototype.copyIndicesArray=function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")},$e.prototype.setArray=function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};De.prototype.addIndex=function(s){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(s)};De.prototype.addAttribute=function(s,e){return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),!(e&&e.isBufferAttribute)&&!(e&&e.isInterleavedBufferAttribute)?(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(s,new $e(arguments[1],arguments[2]))):s==="index"?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(e),this):this.setAttribute(s,e)};De.prototype.addDrawCall=function(s,e,t){t!==void 0&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(s,e)};De.prototype.clearDrawCalls=function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()};De.prototype.computeOffsets=function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")};De.prototype.removeAttribute=function(s){return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),this.deleteAttribute(s)};De.prototype.applyMatrix=function(s){return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(s)};Object.defineProperties(De.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}});rr.prototype.setDynamic=function(s){return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(s===!0?ua:Yr),this};rr.prototype.setArray=function(){console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};sr.prototype.getArrays=function(){console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.")};sr.prototype.addShapeList=function(){console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.")};sr.prototype.addShape=function(){console.error("THREE.ExtrudeGeometry: .addShape() has been removed.")};Or.prototype.dispose=function(){console.error("THREE.Scene: .dispose() has been removed.")};Object.defineProperties(_t.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE.Material: .wrapRGB has been removed."),new J}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(s){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=s===eu}},stencilMask:{get:function(){return console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask},set:function(s){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask=s}}});Object.defineProperties(mt.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(s){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=s}}});We.prototype.clearTarget=function(s,e,t,n){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),this.setRenderTarget(s),this.clear(e,t,n)};We.prototype.animate=function(s){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(s)};We.prototype.getCurrentRenderTarget=function(){return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget()};We.prototype.getMaxAnisotropy=function(){return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()};We.prototype.getPrecision=function(){return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision};We.prototype.resetGLState=function(){return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset()};We.prototype.supportsFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")};We.prototype.supportsHalfFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")};We.prototype.supportsStandardDerivatives=function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")};We.prototype.supportsCompressedTextureS3TC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")};We.prototype.supportsCompressedTexturePVRTC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")};We.prototype.supportsBlendMinMax=function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")};We.prototype.supportsVertexTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures};We.prototype.supportsInstancedArrays=function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")};We.prototype.enableScissorTest=function(s){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(s)};We.prototype.initMaterial=function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")};We.prototype.addPrePlugin=function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")};We.prototype.addPostPlugin=function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")};We.prototype.updateShadowMap=function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")};We.prototype.setFaceCulling=function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")};We.prototype.allocTextureUnit=function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")};We.prototype.setTexture=function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")};We.prototype.setTexture2D=function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")};We.prototype.setTextureCube=function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")};We.prototype.getActiveMipMapLevel=function(){return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),this.getActiveMipmapLevel()};Object.defineProperties(We.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(s){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=s}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(s){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=s}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}},context:{get:function(){return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),this.getContext()}},vr:{get:function(){return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),this.xr}},gammaInput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),!1},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")}},gammaOutput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),!1},set:function(s){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),this.outputEncoding=s===!0?Rt:as}},toneMappingWhitePoint:{get:function(){return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),1},set:function(){console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")}}});Object.defineProperties(Eu.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}});Object.defineProperties(Dt.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(s){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=s}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(s){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=s}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(s){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=s}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(s){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=s}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(s){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=s}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(s){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=s}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(s){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=s}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(s){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=s}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(s){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=s}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(s){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=s}}});nd.prototype.load=function(s){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");const e=this;return new El().load(s,function(n){e.setBuffer(n)}),this};ll.prototype.updateCubeMap=function(s,e){return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(s,e)};ll.prototype.clear=function(s,e,t,n){return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."),this.renderTarget.clear(s,e,t,n)};nr.crossOrigin=void 0;nr.loadTexture=function(s,e,t,n){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");const i=new fi;i.setCrossOrigin(this.crossOrigin);const r=i.load(s,t,void 0,n);return e&&(r.mapping=e),r};nr.loadTextureCube=function(s,e,t,n){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");const i=new ju;i.setCrossOrigin(this.crossOrigin);const r=i.load(s,t,void 0,n);return e&&(r.mapping=e),r};nr.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")};nr.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Zh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Zh);var pa={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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

		}`};class ls{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}}const Qx=new pi(-1,1,1,-1,0,1),Fl=new De;Fl.setAttribute("position",new Me([-1,3,0,-1,-1,0,3,-1,0],3));Fl.setAttribute("uv",new Me([0,2,0,0,2,0],2));class sd{constructor(e){this._mesh=new Ke(Fl,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Qx)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Gr extends ls{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof mt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=da.clone(e.uniforms),this.material=new mt({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new sd(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}}class vh extends ls{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class qx extends ls{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Jx{constructor(e,t){if(this.renderer=e,t===void 0){const n={minFilter:ft,magFilter:ft,format:It},i=e.getSize(new X);this._pixelRatio=e.getPixelRatio(),this._width=i.width,this._height=i.height,t=new Dt(this._width*this._pixelRatio,this._height*this._pixelRatio,n),t.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],pa===void 0&&console.error("THREE.EffectComposer relies on CopyShader"),Gr===void 0&&console.error("THREE.EffectComposer relies on ShaderPass"),this.copyPass=new Gr(pa),this.clock=new td}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}vh!==void 0&&(a instanceof vh?n=!0:a instanceof qx&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new X);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}}new pi(-1,1,1,-1,0,1);const ad=new De;ad.setAttribute("position",new Me([-1,3,0,-1,-1,0,3,-1,0],3));ad.setAttribute("uv",new Me([0,2,0,0,2,0],2));const Zx={uniforms:{tDiffuse:{value:null}},vertexShader:`

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

		}`};class yo extends ls{constructor(e,t,n,i,r){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r!==void 0?r:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new J}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==void 0&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),r=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,r),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=a),e.autoClear=i}}const Kx={uniforms:{tDiffuse:{value:null},resolution:{value:new X(1/1024,1/512)}},vertexShader:`

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
		}`},xh={shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new J(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Ji extends ls{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new X(e.x,e.y):new X(256,256),this.clearColor=new J(0,0,0);const r={minFilter:ft,magFilter:ft,format:It};this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let a=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Dt(a,o,r),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){const f=new Dt(a,o,r);f.texture.name="UnrealBloomPass.h"+d,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const p=new Dt(a,o,r);p.texture.name="UnrealBloomPass.v"+d,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),a=Math.round(a/2),o=Math.round(o/2)}xh===void 0&&console.error("THREE.UnrealBloomPass relies on LuminosityHighPassShader");const l=xh;this.highPassUniforms=da.clone(l.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new mt({uniforms:this.highPassUniforms,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader,defines:{}}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];a=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[d])),this.separableBlurMaterials[d].uniforms.texSize.value=new X(a,o),a=Math.round(a/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1,this.compositeMaterial.needsUpdate=!0;const h=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=h,this.bloomTintColors=[new S(1,1,1),new S(1,1,1),new S(1,1,1),new S(1,1,1),new S(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,pa===void 0&&console.error("THREE.UnrealBloomPass relies on CopyShader");const u=pa;this.copyUniforms=da.clone(u.uniforms),this.copyUniforms.opacity.value=1,this.materialCopy=new mt({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:aa,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new J,this.oldClearAlpha=1,this.basic=new $t,this.fsQuad=new sd(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.texSize.value=new X(n,i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=Ji.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Ji.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){return new mt({defines:{KERNEL_RADIUS:e,SIGMA:e},uniforms:{colorTexture:{value:null},texSize:{value:new X(.5,.5)},direction:{value:new X(.5,.5)}},vertexShader:`varying vec2 vUv;
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
				}`})}}Ji.BlurDirectionX=new X(1,0);Ji.BlurDirectionY=new X(0,1);/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.6.9
*/var yh={},Vo=function(s){return URL.createObjectURL(new Blob([s],{type:"text/javascript"}))},od=function(s){return new Worker(s)};try{URL.revokeObjectURL(Vo(""))}catch{Vo=function(e){return"data:application/javascript;charset=UTF-8,"+encodeURI(e)},od=function(e){return new Worker(e,{type:"module"})}}var $x=function(s,e,t,n,i){var r=od(yh[e]||(yh[e]=Vo(s)));return r.onerror=function(a){return i(a.error,null)},r.onmessage=function(a){return i(null,a.data)},r.postMessage(t,n),r},Ie=Uint8Array,gt=Uint16Array,Mn=Uint32Array,lr=new Ie([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),cr=new Ie([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),es=new Ie([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),ld=function(s,e){for(var t=new gt(31),n=0;n<31;++n)t[n]=e+=1<<s[n-1];for(var i=new Mn(t[30]),n=1;n<30;++n)for(var r=t[n];r<t[n+1];++r)i[r]=r-t[n]<<5|n;return[t,i]},cd=ld(lr,2),Rl=cd[0],ma=cd[1];Rl[28]=258,ma[258]=28;var hd=ld(cr,0),ud=hd[0],Wo=hd[1],ts=new gt(32768);for(var Qe=0;Qe<32768;++Qe){var In=(Qe&43690)>>>1|(Qe&21845)<<1;In=(In&52428)>>>2|(In&13107)<<2,In=(In&61680)>>>4|(In&3855)<<4,ts[Qe]=((In&65280)>>>8|(In&255)<<8)>>>1}var Wt=function(s,e,t){for(var n=s.length,i=0,r=new gt(e);i<n;++i)++r[s[i]-1];var a=new gt(e);for(i=0;i<e;++i)a[i]=a[i-1]+r[i-1]<<1;var o;if(t){o=new gt(1<<e);var l=15-e;for(i=0;i<n;++i)if(s[i])for(var c=i<<4|s[i],h=e-s[i],u=a[s[i]-1]++<<h,d=u|(1<<h)-1;u<=d;++u)o[ts[u]>>>l]=c}else for(o=new gt(n),i=0;i<n;++i)s[i]&&(o[i]=ts[a[s[i]-1]++]>>>15-s[i]);return o},An=new Ie(288);for(var Qe=0;Qe<144;++Qe)An[Qe]=8;for(var Qe=144;Qe<256;++Qe)An[Qe]=9;for(var Qe=256;Qe<280;++Qe)An[Qe]=7;for(var Qe=280;Qe<288;++Qe)An[Qe]=8;var Zi=new Ie(32);for(var Qe=0;Qe<32;++Qe)Zi[Qe]=5;var dd=Wt(An,9,0),fd=Wt(An,9,1),pd=Wt(Zi,5,0),md=Wt(Zi,5,1),ta=function(s){for(var e=s[0],t=1;t<s.length;++t)s[t]>e&&(e=s[t]);return e},Ht=function(s,e,t){var n=e/8|0;return(s[n]|s[n+1]<<8)>>(e&7)&t},na=function(s,e){var t=e/8|0;return(s[t]|s[t+1]<<8|s[t+2]<<16)>>(e&7)},cs=function(s){return(s/8|0)+(s&7&&1)},Xt=function(s,e,t){(e==null||e<0)&&(e=0),(t==null||t>s.length)&&(t=s.length);var n=new(s instanceof gt?gt:s instanceof Mn?Mn:Ie)(t-e);return n.set(s.subarray(e,t)),n},hs=function(s,e,t){var n=s.length;if(!n||t&&!t.l&&n<5)return e||new Ie(0);var i=!e||t,r=!t||t.i;t||(t={}),e||(e=new Ie(n*3));var a=function(V){var Xe=e.length;if(V>Xe){var Te=new Ie(Math.max(Xe*2,V));Te.set(e),e=Te}},o=t.f||0,l=t.p||0,c=t.b||0,h=t.l,u=t.d,d=t.m,f=t.n,p=n*8;do{if(!h){t.f=o=Ht(s,l,1);var _=Ht(s,l+1,3);if(l+=3,_)if(_==1)h=fd,u=md,d=9,f=5;else if(_==2){var x=Ht(s,l,31)+257,M=Ht(s,l+10,15)+4,w=x+Ht(s,l+5,31)+1;l+=14;for(var y=new Ie(w),A=new Ie(19),E=0;E<M;++E)A[es[E]]=Ht(s,l+E*3,7);l+=M*3;for(var D=ta(A),R=(1<<D)-1,z=Wt(A,D,1),E=0;E<w;){var H=z[Ht(s,l,R)];l+=H&15;var v=H>>>4;if(v<16)y[E++]=v;else{var F=0,I=0;for(v==16?(I=3+Ht(s,l,3),l+=2,F=y[E-1]):v==17?(I=3+Ht(s,l,7),l+=3):v==18&&(I=11+Ht(s,l,127),l+=7);I--;)y[E++]=F}}var C=y.subarray(0,x),P=y.subarray(x);d=ta(C),f=ta(P),h=Wt(C,d,1),u=Wt(P,f,1)}else throw"invalid block type";else{var v=cs(l)+4,m=s[v-4]|s[v-3]<<8,g=v+m;if(g>n){if(r)throw"unexpected EOF";break}i&&a(c+m),e.set(s.subarray(v,g),c),t.b=c+=m,t.p=l=g*8;continue}if(l>p){if(r)throw"unexpected EOF";break}}i&&a(c+131072);for(var B=(1<<d)-1,j=(1<<f)-1,G=l;;G=l){var F=h[na(s,l)&B],ne=F>>>4;if(l+=F&15,l>p){if(r)throw"unexpected EOF";break}if(!F)throw"invalid length/literal";if(ne<256)e[c++]=ne;else if(ne==256){G=l,h=null;break}else{var K=ne-254;if(ne>264){var E=ne-257,ue=lr[E];K=Ht(s,l,(1<<ue)-1)+Rl[E],l+=ue}var ce=u[na(s,l)&j],me=ce>>>4;if(!ce)throw"invalid distance";l+=ce&15;var P=ud[me];if(me>3){var ue=cr[me];P+=na(s,l)&(1<<ue)-1,l+=ue}if(l>p){if(r)throw"unexpected EOF";break}i&&a(c+131072);for(var he=c+K;c<he;c+=4)e[c]=e[c-P],e[c+1]=e[c+1-P],e[c+2]=e[c+2-P],e[c+3]=e[c+3-P];c=he}}t.l=h,t.p=G,t.b=c,h&&(o=1,t.m=d,t.d=u,t.n=f)}while(!o);return c==e.length?e:Xt(e,0,c)},tn=function(s,e,t){t<<=e&7;var n=e/8|0;s[n]|=t,s[n+1]|=t>>>8},Di=function(s,e,t){t<<=e&7;var n=e/8|0;s[n]|=t,s[n+1]|=t>>>8,s[n+2]|=t>>>16},ia=function(s,e){for(var t=[],n=0;n<s.length;++n)s[n]&&t.push({s:n,f:s[n]});var i=t.length,r=t.slice();if(!i)return[xn,0];if(i==1){var a=new Ie(t[0].s+1);return a[t[0].s]=1,[a,1]}t.sort(function(w,y){return w.f-y.f}),t.push({s:-1,f:25001});var o=t[0],l=t[1],c=0,h=1,u=2;for(t[0]={s:-1,f:o.f+l.f,l:o,r:l};h!=i-1;)o=t[t[c].f<t[u].f?c++:u++],l=t[c!=h&&t[c].f<t[u].f?c++:u++],t[h++]={s:-1,f:o.f+l.f,l:o,r:l};for(var d=r[0].s,n=1;n<i;++n)r[n].s>d&&(d=r[n].s);var f=new gt(d+1),p=ga(t[h-1],f,0);if(p>e){var n=0,_=0,v=p-e,m=1<<v;for(r.sort(function(y,A){return f[A.s]-f[y.s]||y.f-A.f});n<i;++n){var g=r[n].s;if(f[g]>e)_+=m-(1<<p-f[g]),f[g]=e;else break}for(_>>>=v;_>0;){var x=r[n].s;f[x]<e?_-=1<<e-f[x]++-1:++n}for(;n>=0&&_;--n){var M=r[n].s;f[M]==e&&(--f[M],++_)}p=e}return[new Ie(f),p]},ga=function(s,e,t){return s.s==-1?Math.max(ga(s.l,e,t+1),ga(s.r,e,t+1)):e[s.s]=t},Xo=function(s){for(var e=s.length;e&&!s[--e];);for(var t=new gt(++e),n=0,i=s[0],r=1,a=function(l){t[n++]=l},o=1;o<=e;++o)if(s[o]==i&&o!=e)++r;else{if(!i&&r>2){for(;r>138;r-=138)a(32754);r>2&&(a(r>10?r-11<<5|28690:r-3<<5|12305),r=0)}else if(r>3){for(a(i),--r;r>6;r-=6)a(8304);r>2&&(a(r-3<<5|8208),r=0)}for(;r--;)a(i);r=1,i=s[o]}return[t.subarray(0,n),e]},Ni=function(s,e){for(var t=0,n=0;n<e.length;++n)t+=s[n]*e[n];return t},Hr=function(s,e,t){var n=t.length,i=cs(e+2);s[i]=n&255,s[i+1]=n>>>8,s[i+2]=s[i]^255,s[i+3]=s[i+1]^255;for(var r=0;r<n;++r)s[i+r+4]=t[r];return(i+4+n)*8},Yo=function(s,e,t,n,i,r,a,o,l,c,h){tn(e,h++,t),++i[256];for(var u=ia(i,15),d=u[0],f=u[1],p=ia(r,15),_=p[0],v=p[1],m=Xo(d),g=m[0],x=m[1],M=Xo(_),w=M[0],y=M[1],A=new gt(19),E=0;E<g.length;++E)A[g[E]&31]++;for(var E=0;E<w.length;++E)A[w[E]&31]++;for(var D=ia(A,7),R=D[0],z=D[1],H=19;H>4&&!R[es[H-1]];--H);var F=c+5<<3,I=Ni(i,An)+Ni(r,Zi)+a,C=Ni(i,d)+Ni(r,_)+a+14+3*H+Ni(A,R)+(2*A[16]+3*A[17]+7*A[18]);if(F<=I&&F<=C)return Hr(e,h,s.subarray(l,l+c));var P,B,j,G;if(tn(e,h,1+(C<I)),h+=2,C<I){P=Wt(d,f,0),B=d,j=Wt(_,v,0),G=_;var ne=Wt(R,z,0);tn(e,h,x-257),tn(e,h+5,y-1),tn(e,h+10,H-4),h+=14;for(var E=0;E<H;++E)tn(e,h+3*E,R[es[E]]);h+=3*H;for(var K=[g,w],ue=0;ue<2;++ue)for(var ce=K[ue],E=0;E<ce.length;++E){var me=ce[E]&31;tn(e,h,ne[me]),h+=R[me],me>15&&(tn(e,h,ce[E]>>>5&127),h+=ce[E]>>>12)}}else P=dd,B=An,j=pd,G=Zi;for(var E=0;E<o;++E)if(n[E]>255){var me=n[E]>>>18&31;Di(e,h,P[me+257]),h+=B[me+257],me>7&&(tn(e,h,n[E]>>>23&31),h+=lr[me]);var he=n[E]&31;Di(e,h,j[he]),h+=G[he],he>3&&(Di(e,h,n[E]>>>5&8191),h+=cr[he])}else Di(e,h,P[n[E]]),h+=B[n[E]];return Di(e,h,P[256]),h+B[256]},gd=new Mn([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),xn=new Ie(0),_d=function(s,e,t,n,i,r){var a=s.length,o=new Ie(n+a+5*(1+Math.ceil(a/7e3))+i),l=o.subarray(n,o.length-i),c=0;if(!e||a<8)for(var h=0;h<=a;h+=65535){var u=h+65535;u<a?c=Hr(l,c,s.subarray(h,u)):(l[h]=r,c=Hr(l,c,s.subarray(h,a)))}else{for(var d=gd[e-1],f=d>>>13,p=d&8191,_=(1<<t)-1,v=new gt(32768),m=new gt(_+1),g=Math.ceil(t/3),x=2*g,M=function(te){return(s[te]^s[te+1]<<g^s[te+2]<<x)&_},w=new Mn(25e3),y=new gt(288),A=new gt(32),E=0,D=0,h=0,R=0,z=0,H=0;h<a;++h){var F=M(h),I=h&32767,C=m[F];if(v[I]=C,m[F]=I,z<=h){var P=a-h;if((E>7e3||R>24576)&&P>423){c=Yo(s,l,0,w,y,A,D,R,H,h-H,c),R=E=D=0,H=h;for(var B=0;B<286;++B)y[B]=0;for(var B=0;B<30;++B)A[B]=0}var j=2,G=0,ne=p,K=I-C&32767;if(P>2&&F==M(h-K))for(var ue=Math.min(f,P)-1,ce=Math.min(32767,h),me=Math.min(258,P);K<=ce&&--ne&&I!=C;){if(s[h+j]==s[h+j-K]){for(var he=0;he<me&&s[h+he]==s[h+he-K];++he);if(he>j){if(j=he,G=K,he>ue)break;for(var V=Math.min(K,he-2),Xe=0,B=0;B<V;++B){var Te=h-K+B+32768&32767,we=v[Te],pe=Te-we+32768&32767;pe>Xe&&(Xe=pe,C=Te)}}}I=C,C=v[I],K+=I-C+32768&32767}if(G){w[R++]=268435456|ma[j]<<18|Wo[G];var be=ma[j]&31,Q=Wo[G]&31;D+=lr[be]+cr[Q],++y[257+be],++A[Q],z=h+j,++E}else w[R++]=s[h],++y[s[h]]}}c=Yo(s,l,r,w,y,A,D,R,H,h-H,c),!r&&c&7&&(c=Hr(l,c+1,xn))}return Xt(o,0,n+cs(c)+i)},vd=function(){for(var s=new Mn(256),e=0;e<256;++e){for(var t=e,n=9;--n;)t=(t&1&&3988292384)^t>>>1;s[e]=t}return s}(),hr=function(){var s=-1;return{p:function(e){for(var t=s,n=0;n<e.length;++n)t=vd[t&255^e[n]]^t>>>8;s=t},d:function(){return~s}}},Il=function(){var s=1,e=0;return{p:function(t){for(var n=s,i=e,r=t.length,a=0;a!=r;){for(var o=Math.min(a+2655,r);a<o;++a)i+=n+=t[a];n=(n&65535)+15*(n>>16),i=(i&65535)+15*(i>>16)}s=n,e=i},d:function(){return s%=65521,e%=65521,(s&255)<<24|s>>>8<<16|(e&255)<<8|e>>>8}}},mi=function(s,e,t,n,i){return _d(s,e.level==null?6:e.level,e.mem==null?Math.ceil(Math.max(8,Math.min(13,Math.log(s.length)))*1.5):12+e.mem,t,n,!i)},us=function(s,e){var t={};for(var n in s)t[n]=s[n];for(var n in e)t[n]=e[n];return t},wh=function(s,e,t){for(var n=s(),i=s.toString(),r=i.slice(i.indexOf("[")+1,i.lastIndexOf("]")).replace(/ /g,"").split(","),a=0;a<n.length;++a){var o=n[a],l=r[a];if(typeof o=="function"){e+=";"+l+"=";var c=o.toString();if(o.prototype)if(c.indexOf("[native code]")!=-1){var h=c.indexOf(" ",8)+1;e+=c.slice(h,c.indexOf("(",h))}else{e+=c;for(var u in o.prototype)e+=";"+l+".prototype."+u+"="+o.prototype[u].toString()}else e+=c}else t[l]=o}return[e,t]},Ys=[],ey=function(s){var e=[];for(var t in s)(s[t]instanceof Ie||s[t]instanceof gt||s[t]instanceof Mn)&&e.push((s[t]=new s[t].constructor(s[t])).buffer);return e},xd=function(s,e,t,n){var i;if(!Ys[t]){for(var r="",a={},o=s.length-1,l=0;l<o;++l)i=wh(s[l],r,a),r=i[0],a=i[1];Ys[t]=wh(s[o],r,a)}var c=us({},Ys[t][1]);return $x(Ys[t][0]+";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage="+e.toString()+"}",t,c,ey(c),n)},ur=function(){return[Ie,gt,Mn,lr,cr,es,Rl,ud,fd,md,ts,Wt,ta,Ht,na,cs,Xt,hs,mr,Xn,Dl]},dr=function(){return[Ie,gt,Mn,lr,cr,es,ma,Wo,dd,An,pd,Zi,ts,gd,xn,Wt,tn,Di,ia,ga,Xo,Ni,Hr,Yo,cs,Xt,_d,mi,ds,Xn]},yd=function(){return[Nl,Bl,Ge,hr,vd]},wd=function(){return[Ul,Ad]},Sd=function(){return[Ol,Ge,Il]},Md=function(){return[bd]},Xn=function(s){return postMessage(s,[s.buffer])},Dl=function(s){return s&&s.size&&new Ie(s.size)},fr=function(s,e,t,n,i,r){var a=xd(t,n,i,function(o,l){a.terminate(),r(o,l)});return a.postMessage([s,e],e.consume?[s.buffer]:[]),function(){a.terminate()}},Yt=function(s){return s.ondata=function(e,t){return postMessage([e,t],[e.buffer])},function(e){return s.push(e.data[0],e.data[1])}},pr=function(s,e,t,n,i){var r,a=xd(s,n,i,function(o,l){o?(a.terminate(),e.ondata.call(e,o)):(l[1]&&a.terminate(),e.ondata.call(e,o,l[0],l[1]))});a.postMessage(t),e.push=function(o,l){if(r)throw"stream finished";if(!e.ondata)throw"no stream handler";a.postMessage([o,r=l],[o.buffer])},e.terminate=function(){a.terminate()}},Pt=function(s,e){return s[e]|s[e+1]<<8},it=function(s,e){return(s[e]|s[e+1]<<8|s[e+2]<<16|s[e+3]<<24)>>>0},wo=function(s,e){return it(s,e)+it(s,e+4)*4294967296},Ge=function(s,e,t){for(;t;++e)s[e]=t,t>>>=8},Nl=function(s,e){var t=e.filename;if(s[0]=31,s[1]=139,s[2]=8,s[8]=e.level<2?4:e.level==9?2:0,s[9]=3,e.mtime!=0&&Ge(s,4,Math.floor(new Date(e.mtime||Date.now())/1e3)),t){s[3]=8;for(var n=0;n<=t.length;++n)s[n+10]=t.charCodeAt(n)}},Ul=function(s){if(s[0]!=31||s[1]!=139||s[2]!=8)throw"invalid gzip data";var e=s[3],t=10;e&4&&(t+=s[10]|(s[11]<<8)+2);for(var n=(e>>3&1)+(e>>4&1);n>0;n-=!s[t++]);return t+(e&2)},Ad=function(s){var e=s.length;return(s[e-4]|s[e-3]<<8|s[e-2]<<16|s[e-1]<<24)>>>0},Bl=function(s){return 10+(s.filename&&s.filename.length+1||0)},Ol=function(s,e){var t=e.level,n=t==0?0:t<6?1:t==9?3:2;s[0]=120,s[1]=n<<6|(n?32-2*n:1)},bd=function(s){if((s[0]&15)!=8||s[0]>>>4>7||(s[0]<<8|s[1])%31)throw"invalid zlib data";if(s[1]&32)throw"invalid zlib data: preset dictionaries not supported"};function zl(s,e){return!e&&typeof s=="function"&&(e=s,s={}),this.ondata=e,s}var sn=function(){function s(e,t){!t&&typeof e=="function"&&(t=e,e={}),this.ondata=t,this.o=e||{}}return s.prototype.p=function(e,t){this.ondata(mi(e,this.o,0,0,!t),t)},s.prototype.push=function(e,t){if(this.d)throw"stream finished";if(!this.ondata)throw"no stream handler";this.d=t,this.p(e,t||!1)},s}(),Td=function(){function s(e,t){pr([dr,function(){return[Yt,sn]}],this,zl.call(this,e,t),function(n){var i=new sn(n.data);onmessage=Yt(i)},6)}return s}();function Ed(s,e,t){if(t||(t=e,e={}),typeof t!="function")throw"no callback";return fr(s,e,[dr],function(n){return Xn(ds(n.data[0],n.data[1]))},0,t)}function ds(s,e){return mi(s,e||{},0,0)}var Nt=function(){function s(e){this.s={},this.p=new Ie(0),this.ondata=e}return s.prototype.e=function(e){if(this.d)throw"stream finished";if(!this.ondata)throw"no stream handler";var t=this.p.length,n=new Ie(t+e.length);n.set(this.p),n.set(e,t),this.p=n},s.prototype.c=function(e){this.d=this.s.i=e||!1;var t=this.s.b,n=hs(this.p,this.o,this.s);this.ondata(Xt(n,t,this.s.b),this.d),this.o=Xt(n,this.s.b-32768),this.s.b=this.o.length,this.p=Xt(this.p,this.s.p/8|0),this.s.p&=7},s.prototype.push=function(e,t){this.e(e),this.c(t)},s}(),kl=function(){function s(e){this.ondata=e,pr([ur,function(){return[Yt,Nt]}],this,0,function(){var t=new Nt;onmessage=Yt(t)},7)}return s}();function Gl(s,e,t){if(t||(t=e,e={}),typeof t!="function")throw"no callback";return fr(s,e,[ur],function(n){return Xn(mr(n.data[0],Dl(n.data[1])))},1,t)}function mr(s,e){return hs(s,e)}var _a=function(){function s(e,t){this.c=hr(),this.l=0,this.v=1,sn.call(this,e,t)}return s.prototype.push=function(e,t){sn.prototype.push.call(this,e,t)},s.prototype.p=function(e,t){this.c.p(e),this.l+=e.length;var n=mi(e,this.o,this.v&&Bl(this.o),t&&8,!t);this.v&&(Nl(n,this.o),this.v=0),t&&(Ge(n,n.length-8,this.c.d()),Ge(n,n.length-4,this.l)),this.ondata(n,t)},s}(),Sh=function(){function s(e,t){pr([dr,yd,function(){return[Yt,sn,_a]}],this,zl.call(this,e,t),function(n){var i=new _a(n.data);onmessage=Yt(i)},8)}return s}();function Mh(s,e,t){if(t||(t=e,e={}),typeof t!="function")throw"no callback";return fr(s,e,[dr,yd,function(){return[va]}],function(n){return Xn(va(n.data[0],n.data[1]))},2,t)}function va(s,e){e||(e={});var t=hr(),n=s.length;t.p(s);var i=mi(s,e,Bl(e),8),r=i.length;return Nl(i,e),Ge(i,r-8,t.d()),Ge(i,r-4,n),i}var xa=function(){function s(e){this.v=1,Nt.call(this,e)}return s.prototype.push=function(e,t){if(Nt.prototype.e.call(this,e),this.v){var n=this.p.length>3?Ul(this.p):4;if(n>=this.p.length&&!t)return;this.p=this.p.subarray(n),this.v=0}if(t){if(this.p.length<8)throw"invalid gzip stream";this.p=this.p.subarray(0,-8)}Nt.prototype.c.call(this,t)},s}(),Ld=function(){function s(e){this.ondata=e,pr([ur,wd,function(){return[Yt,Nt,xa]}],this,0,function(){var t=new xa;onmessage=Yt(t)},9)}return s}();function Pd(s,e,t){if(t||(t=e,e={}),typeof t!="function")throw"no callback";return fr(s,e,[ur,wd,function(){return[ya]}],function(n){return Xn(ya(n.data[0]))},3,t)}function ya(s,e){return hs(s.subarray(Ul(s),-8),e||new Ie(Ad(s)))}var jo=function(){function s(e,t){this.c=Il(),this.v=1,sn.call(this,e,t)}return s.prototype.push=function(e,t){sn.prototype.push.call(this,e,t)},s.prototype.p=function(e,t){this.c.p(e);var n=mi(e,this.o,this.v&&2,t&&4,!t);this.v&&(Ol(n,this.o),this.v=0),t&&Ge(n,n.length-4,this.c.d()),this.ondata(n,t)},s}(),ty=function(){function s(e,t){pr([dr,Sd,function(){return[Yt,sn,jo]}],this,zl.call(this,e,t),function(n){var i=new jo(n.data);onmessage=Yt(i)},10)}return s}();function ny(s,e,t){if(t||(t=e,e={}),typeof t!="function")throw"no callback";return fr(s,e,[dr,Sd,function(){return[Qo]}],function(n){return Xn(Qo(n.data[0],n.data[1]))},4,t)}function Qo(s,e){e||(e={});var t=Il();t.p(s);var n=mi(s,e,2,4);return Ol(n,e),Ge(n,n.length-4,t.d()),n}var wa=function(){function s(e){this.v=1,Nt.call(this,e)}return s.prototype.push=function(e,t){if(Nt.prototype.e.call(this,e),this.v){if(this.p.length<2&&!t)return;this.p=this.p.subarray(2),this.v=0}if(t){if(this.p.length<4)throw"invalid zlib stream";this.p=this.p.subarray(0,-4)}Nt.prototype.c.call(this,t)},s}(),Cd=function(){function s(e){this.ondata=e,pr([ur,Md,function(){return[Yt,Nt,wa]}],this,0,function(){var t=new wa;onmessage=Yt(t)},11)}return s}();function Fd(s,e,t){if(t||(t=e,e={}),typeof t!="function")throw"no callback";return fr(s,e,[ur,Md,function(){return[ns]}],function(n){return Xn(ns(n.data[0],Dl(n.data[1])))},5,t)}function ns(s,e){return hs((bd(s),s.subarray(2,-4)),e)}var Rd=function(){function s(e){this.G=xa,this.I=Nt,this.Z=wa,this.ondata=e}return s.prototype.push=function(e,t){if(!this.ondata)throw"no stream handler";if(this.s)this.s.push(e,t);else{if(this.p&&this.p.length){var n=new Ie(this.p.length+e.length);n.set(this.p),n.set(e,this.p.length)}else this.p=e;if(this.p.length>2){var i=this,r=function(){i.ondata.apply(i,arguments)};this.s=this.p[0]==31&&this.p[1]==139&&this.p[2]==8?new this.G(r):(this.p[0]&15)!=8||this.p[0]>>4>7||(this.p[0]<<8|this.p[1])%31?new this.I(r):new this.Z(r),this.s.push(this.p,t),this.p=null}}},s}(),iy=function(){function s(e){this.G=Ld,this.I=kl,this.Z=Cd,this.ondata=e}return s.prototype.push=function(e,t){Rd.prototype.push.call(this,e,t)},s}();function ry(s,e,t){if(t||(t=e,e={}),typeof t!="function")throw"no callback";return s[0]==31&&s[1]==139&&s[2]==8?Pd(s,e,t):(s[0]&15)!=8||s[0]>>4>7||(s[0]<<8|s[1])%31?Gl(s,e,t):Fd(s,e,t)}function sy(s,e){return s[0]==31&&s[1]==139&&s[2]==8?ya(s,e):(s[0]&15)!=8||s[0]>>4>7||(s[0]<<8|s[1])%31?mr(s,e):ns(s,e)}var Hl=function(s,e,t,n){for(var i in s){var r=s[i],a=e+i;r instanceof Ie?t[a]=[r,n]:Array.isArray(r)?t[a]=[r[0],us(n,r[1])]:Hl(r,a+"/",t,n)}},Ah=typeof TextEncoder<"u"&&new TextEncoder,qo=typeof TextDecoder<"u"&&new TextDecoder,Id=0;try{qo.decode(xn,{stream:!0}),Id=1}catch{}var Dd=function(s){for(var e="",t=0;;){var n=s[t++],i=(n>127)+(n>223)+(n>239);if(t+i>s.length)return[e,Xt(s,t-1)];i?i==3?(n=((n&15)<<18|(s[t++]&63)<<12|(s[t++]&63)<<6|s[t++]&63)-65536,e+=String.fromCharCode(55296|n>>10,56320|n&1023)):i&1?e+=String.fromCharCode((n&31)<<6|s[t++]&63):e+=String.fromCharCode((n&15)<<12|(s[t++]&63)<<6|s[t++]&63):e+=String.fromCharCode(n)}},ay=function(){function s(e){this.ondata=e,Id?this.t=new TextDecoder:this.p=xn}return s.prototype.push=function(e,t){if(!this.ondata)throw"no callback";if(t=!!t,this.t){if(this.ondata(this.t.decode(e,{stream:!0}),t),t){if(this.t.decode().length)throw"invalid utf-8 data";this.t=null}return}if(!this.p)throw"stream finished";var n=new Ie(this.p.length+e.length);n.set(this.p),n.set(e,this.p.length);var i=Dd(n),r=i[0],a=i[1];if(t){if(a.length)throw"invalid utf-8 data";this.p=null}else this.p=a;this.ondata(r,t)},s}(),oy=function(){function s(e){this.ondata=e}return s.prototype.push=function(e,t){if(!this.ondata)throw"no callback";if(this.d)throw"stream finished";this.ondata(Hn(e),this.d=t||!1)},s}();function Hn(s,e){if(e){for(var t=new Ie(s.length),n=0;n<s.length;++n)t[n]=s.charCodeAt(n);return t}if(Ah)return Ah.encode(s);for(var i=s.length,r=new Ie(s.length+(s.length>>1)),a=0,o=function(h){r[a++]=h},n=0;n<i;++n){if(a+5>r.length){var l=new Ie(a+8+(i-n<<1));l.set(r),r=l}var c=s.charCodeAt(n);c<128||e?o(c):c<2048?(o(192|c>>6),o(128|c&63)):c>55295&&c<57344?(c=65536+(c&1047552)|s.charCodeAt(++n)&1023,o(240|c>>18),o(128|c>>12&63),o(128|c>>6&63),o(128|c&63)):(o(224|c>>12),o(128|c>>6&63),o(128|c&63))}return Xt(r,0,a)}function Vl(s,e){if(e){for(var t="",n=0;n<s.length;n+=16384)t+=String.fromCharCode.apply(null,s.subarray(n,n+16384));return t}else{if(qo)return qo.decode(s);var i=Dd(s),r=i[0],a=i[1];if(a.length)throw"invalid utf-8 data";return r}}var Nd=function(s){return s==1?3:s<6?2:s==9?1:0},Ud=function(s,e){return e+30+Pt(s,e+26)+Pt(s,e+28)},Bd=function(s,e,t){var n=Pt(s,e+28),i=Vl(s.subarray(e+46,e+46+n),!(Pt(s,e+8)&2048)),r=e+46+n,a=it(s,e+20),o=t&&a==4294967295?Od(s,r):[a,it(s,e+24),it(s,e+42)],l=o[0],c=o[1],h=o[2];return[Pt(s,e+10),l,c,i,r+Pt(s,e+30)+Pt(s,e+32),h]},Od=function(s,e){for(;Pt(s,e)!=1;e+=4+Pt(s,e+2));return[wo(s,e+12),wo(s,e+4),wo(s,e+20)]},zn=function(s){var e=0;if(s)for(var t in s){var n=s[t].length;if(n>65535)throw"extra field too long";e+=n+4}return e},Ki=function(s,e,t,n,i,r,a,o){var l=n.length,c=t.extra,h=o&&o.length,u=zn(c);Ge(s,e,a!=null?33639248:67324752),e+=4,a!=null&&(s[e++]=20,s[e++]=t.os),s[e]=20,e+=2,s[e++]=t.flag<<1|(r==null&&8),s[e++]=i&&8,s[e++]=t.compression&255,s[e++]=t.compression>>8;var d=new Date(t.mtime==null?Date.now():t.mtime),f=d.getFullYear()-1980;if(f<0||f>119)throw"date not in range 1980-2099";if(Ge(s,e,f<<25|d.getMonth()+1<<21|d.getDate()<<16|d.getHours()<<11|d.getMinutes()<<5|d.getSeconds()>>>1),e+=4,r!=null&&(Ge(s,e,t.crc),Ge(s,e+4,r),Ge(s,e+8,t.size)),Ge(s,e+12,l),Ge(s,e+14,u),e+=16,a!=null&&(Ge(s,e,h),Ge(s,e+6,t.attrs),Ge(s,e+10,a),e+=14),s.set(n,e),e+=l,u)for(var p in c){var _=c[p],v=_.length;Ge(s,e,+p),Ge(s,e+2,v),s.set(_,e+4),e+=4+v}return h&&(s.set(o,e),e+=h),e},Wl=function(s,e,t,n,i){Ge(s,e,101010256),Ge(s,e+8,t),Ge(s,e+10,t),Ge(s,e+12,n),Ge(s,e+16,i)},is=function(){function s(e){this.filename=e,this.c=hr(),this.size=0,this.compression=0}return s.prototype.process=function(e,t){this.ondata(null,e,t)},s.prototype.push=function(e,t){if(!this.ondata)throw"no callback - add to ZIP archive before pushing";this.c.p(e),this.size+=e.length,t&&(this.crc=this.c.d()),this.process(e,t||!1)},s}(),ly=function(){function s(e,t){var n=this;t||(t={}),is.call(this,e),this.d=new sn(t,function(i,r){n.ondata(null,i,r)}),this.compression=8,this.flag=Nd(t.level)}return s.prototype.process=function(e,t){try{this.d.push(e,t)}catch(n){this.ondata(n,null,t)}},s.prototype.push=function(e,t){is.prototype.push.call(this,e,t)},s}(),cy=function(){function s(e,t){var n=this;t||(t={}),is.call(this,e),this.d=new Td(t,function(i,r,a){n.ondata(i,r,a)}),this.compression=8,this.flag=Nd(t.level),this.terminate=this.d.terminate}return s.prototype.process=function(e,t){this.d.push(e,t)},s.prototype.push=function(e,t){is.prototype.push.call(this,e,t)},s}(),hy=function(){function s(e){this.ondata=e,this.u=[],this.d=1}return s.prototype.add=function(e){var t=this;if(this.d&2)throw"stream finished";var n=Hn(e.filename),i=n.length,r=e.comment,a=r&&Hn(r),o=i!=e.filename.length||a&&r.length!=a.length,l=i+zn(e.extra)+30;if(i>65535)throw"filename too long";var c=new Ie(l);Ki(c,0,e,n,o);var h=[c],u=function(){for(var v=0,m=h;v<m.length;v++){var g=m[v];t.ondata(null,g,!1)}h=[]},d=this.d;this.d=0;var f=this.u.length,p=us(e,{f:n,u:o,o:a,t:function(){e.terminate&&e.terminate()},r:function(){if(u(),d){var v=t.u[f+1];v?v.r():t.d=1}d=1}}),_=0;e.ondata=function(v,m,g){if(v)t.ondata(v,m,g),t.terminate();else if(_+=m.length,h.push(m),g){var x=new Ie(16);Ge(x,0,134695760),Ge(x,4,e.crc),Ge(x,8,_),Ge(x,12,e.size),h.push(x),p.c=_,p.b=l+_+16,p.crc=e.crc,p.size=e.size,d&&p.r(),d=1}else d&&u()},this.u.push(p)},s.prototype.end=function(){var e=this;if(this.d&2)throw this.d&1?"stream finishing":"stream finished";this.d?this.e():this.u.push({r:function(){e.d&1&&(e.u.splice(-1,1),e.e())},t:function(){}}),this.d=3},s.prototype.e=function(){for(var e=0,t=0,n=0,i=0,r=this.u;i<r.length;i++){var a=r[i];n+=46+a.f.length+zn(a.extra)+(a.o?a.o.length:0)}for(var o=new Ie(n+22),l=0,c=this.u;l<c.length;l++){var a=c[l];Ki(o,e,a,a.f,a.u,a.c,t,a.o),e+=46+a.f.length+zn(a.extra)+(a.o?a.o.length:0),t+=a.b}Wl(o,e,this.u.length,n,t),this.ondata(null,o,!0),this.d=2},s.prototype.terminate=function(){for(var e=0,t=this.u;e<t.length;e++){var n=t[e];n.t()}this.d=2},s}();function uy(s,e,t){if(t||(t=e,e={}),typeof t!="function")throw"no callback";var n={};Hl(s,"",n,e);var i=Object.keys(n),r=i.length,a=0,o=0,l=r,c=new Array(r),h=[],u=function(){for(var _=0;_<h.length;++_)h[_]()},d=function(){var _=new Ie(o+22),v=a,m=o-a;o=0;for(var g=0;g<l;++g){var x=c[g];try{var M=x.c.length;Ki(_,o,x,x.f,x.u,M);var w=30+x.f.length+zn(x.extra),y=o+w;_.set(x.c,y),Ki(_,a,x,x.f,x.u,M,o,x.m),a+=16+w+(x.m?x.m.length:0),o=y+M}catch(A){return t(A,null)}}Wl(_,a,c.length,m,v),t(null,_)};r||d();for(var f=function(_){var v=i[_],m=n[v],g=m[0],x=m[1],M=hr(),w=g.length;M.p(g);var y=Hn(v),A=y.length,E=x.comment,D=E&&Hn(E),R=D&&D.length,z=zn(x.extra),H=x.level==0?0:8,F=function(I,C){if(I)u(),t(I,null);else{var P=C.length;c[_]=us(x,{size:w,crc:M.d(),c:C,f:y,m:D,u:A!=v.length||D&&E.length!=R,compression:H}),a+=30+A+z+P,o+=76+2*(A+z)+(R||0)+P,--r||d()}};if(A>65535&&F("filename too long",null),!H)F(null,g);else if(w<16e4)try{F(null,ds(g,x))}catch(I){F(I,null)}else h.push(Ed(g,x,F))},p=0;p<l;++p)f(p);return u}function dy(s,e){e||(e={});var t={},n=[];Hl(s,"",t,e);var i=0,r=0;for(var a in t){var o=t[a],l=o[0],c=o[1],h=c.level==0?0:8,u=Hn(a),d=u.length,f=c.comment,p=f&&Hn(f),_=p&&p.length,v=zn(c.extra);if(d>65535)throw"filename too long";var m=h?ds(l,c):l,g=m.length,x=hr();x.p(l),n.push(us(c,{size:l.length,crc:x.d(),c:m,f:u,m:p,u:d!=a.length||p&&f.length!=_,o:i,compression:h})),i+=30+d+v+g,r+=76+2*(d+v)+(_||0)+g}for(var M=new Ie(r+22),w=i,y=r-i,A=0;A<n.length;++A){var u=n[A];Ki(M,u.o,u,u.f,u.u,u.c.length);var E=30+u.f.length+zn(u.extra);M.set(u.c,u.o+E),Ki(M,i,u,u.f,u.u,u.c.length,u.o,u.m),i+=16+E+(u.m?u.m.length:0)}return Wl(M,i,n.length,y,w),M}var zd=function(){function s(){}return s.prototype.push=function(e,t){this.ondata(null,e,t)},s.compression=0,s}(),fy=function(){function s(){var e=this;this.i=new Nt(function(t,n){e.ondata(null,t,n)})}return s.prototype.push=function(e,t){try{this.i.push(e,t)}catch(n){this.ondata(n,e,t)}},s.compression=8,s}(),py=function(){function s(e,t){var n=this;t<32e4?this.i=new Nt(function(i,r){n.ondata(null,i,r)}):(this.i=new kl(function(i,r,a){n.ondata(i,r,a)}),this.terminate=this.i.terminate)}return s.prototype.push=function(e,t){this.i.terminate&&(e=Xt(e,0)),this.i.push(e,t)},s.compression=8,s}(),my=function(){function s(e){this.onfile=e,this.k=[],this.o={0:zd},this.p=xn}return s.prototype.push=function(e,t){var n=this;if(!this.onfile)throw"no callback";if(!this.p)throw"stream finished";if(this.c>0){var i=Math.min(this.c,e.length),r=e.subarray(0,i);if(this.c-=i,this.d?this.d.push(r,!this.c):this.k[0].push(r),e=e.subarray(i),e.length)return this.push(e,t)}else{var a=0,o=0,l=void 0,c=void 0;this.p.length?e.length?(c=new Ie(this.p.length+e.length),c.set(this.p),c.set(e,this.p.length)):c=this.p:c=e;for(var h=c.length,u=this.c,d=u&&this.d,f=function(){var m,g=it(c,o);if(g==67324752){a=1,l=o,p.d=null,p.c=0;var x=Pt(c,o+6),M=Pt(c,o+8),w=x&2048,y=x&8,A=Pt(c,o+26),E=Pt(c,o+28);if(h>o+30+A+E){var D=[];p.k.unshift(D),a=2;var R=it(c,o+18),z=it(c,o+22),H=Vl(c.subarray(o+30,o+=30+A),!w);R==4294967295?(m=y?[-2]:Od(c,o),R=m[0],z=m[1]):y&&(R=-1),o+=E,p.c=R;var F,I={name:H,compression:M,start:function(){if(!I.ondata)throw"no callback";if(!R)I.ondata(null,xn,!0);else{var C=n.o[M];if(!C)throw"unknown compression type "+M;F=R<0?new C(H):new C(H,R,z),F.ondata=function(G,ne,K){I.ondata(G,ne,K)};for(var P=0,B=D;P<B.length;P++){var j=B[P];F.push(j,!1)}n.k[0]==D&&n.c?n.d=F:F.push(xn,!0)}},terminate:function(){F&&F.terminate&&F.terminate()}};R>=0&&(I.size=R,I.originalSize=z),p.onfile(I)}return"break"}else if(u){if(g==134695760)return l=o+=12+(u==-2&&8),a=3,p.c=0,"break";if(g==33639248)return l=o-=4,a=3,p.c=0,"break"}},p=this;o<h-4;++o){var _=f();if(_==="break")break}if(this.p=xn,u<0){var v=a?c.subarray(0,l-12-(u==-2&&8)-(it(c,l-16)==134695760&&4)):c.subarray(0,o);d?d.push(v,!!a):this.k[+(a==2)].push(v)}if(a&2)return this.push(c.subarray(o),t);this.p=c.subarray(o)}if(t){if(this.c)throw"invalid zip file";this.p=null}},s.prototype.register=function(e){this.o[e.compression]=e},s}();function gy(s,e){if(typeof e!="function")throw"no callback";for(var t=[],n=function(){for(var d=0;d<t.length;++d)t[d]()},i={},r=s.length-22;it(s,r)!=101010256;--r)if(!r||s.length-r>65558){e("invalid zip file",null);return}var a=Pt(s,r+8);a||e(null,{});var o=a,l=it(s,r+16),c=l==4294967295;if(c){if(r=it(s,r-12),it(s,r)!=101075792){e("invalid zip file",null);return}o=a=it(s,r+32),l=it(s,r+48)}for(var h=function(d){var f=Bd(s,l,c),p=f[0],_=f[1],v=f[2],m=f[3],g=f[4],x=f[5],M=Ud(s,x);l=g;var w=function(A,E){A?(n(),e(A,null)):(i[m]=E,--a||e(null,i))};if(!p)w(null,Xt(s,M,M+_));else if(p==8){var y=s.subarray(M,M+_);if(_<32e4)try{w(null,mr(y,new Ie(v)))}catch(A){w(A,null)}else t.push(Gl(y,{size:v},w))}else w("unknown compression type "+p,null)},u=0;u<o;++u)h();return n}function _y(s){for(var e={},t=s.length-22;it(s,t)!=101010256;--t)if(!t||s.length-t>65558)throw"invalid zip file";var n=Pt(s,t+8);if(!n)return{};var i=it(s,t+16),r=i==4294967295;if(r){if(t=it(s,t-12),it(s,t)!=101075792)throw"invalid zip file";n=it(s,t+32),i=it(s,t+48)}for(var a=0;a<n;++a){var o=Bd(s,i,r),l=o[0],c=o[1],h=o[2],u=o[3],d=o[4],f=o[5],p=Ud(s,f);if(i=d,!l)e[u]=Xt(s,p,p+c);else if(l==8)e[u]=mr(s.subarray(p,p+c),new Ie(h));else throw"unknown compression type "+l}return e}const vy=Object.freeze(Object.defineProperty({__proto__:null,AsyncCompress:Sh,AsyncDecompress:iy,AsyncDeflate:Td,AsyncGunzip:Ld,AsyncGzip:Sh,AsyncInflate:kl,AsyncUnzipInflate:py,AsyncUnzlib:Cd,AsyncZipDeflate:cy,AsyncZlib:ty,Compress:_a,DecodeUTF8:ay,Decompress:Rd,Deflate:sn,EncodeUTF8:oy,Gunzip:xa,Gzip:_a,Inflate:Nt,Unzip:my,UnzipInflate:fy,UnzipPassThrough:zd,Unzlib:wa,Zip:hy,ZipDeflate:ly,ZipPassThrough:is,Zlib:jo,compress:Mh,compressSync:va,decompress:ry,decompressSync:sy,deflate:Ed,deflateSync:ds,gunzip:Pd,gunzipSync:ya,gzip:Mh,gzipSync:va,inflate:Gl,inflateSync:mr,strFromU8:Vl,strToU8:Hn,unzip:gy,unzipSync:_y,unzlib:Fd,unzlibSync:ns,zip:uy,zipSync:dy,zlib:ny,zlibSync:Qo},Symbol.toStringTag,{value:"Module"}));class bh{static findSpan(e,t,n){const i=n.length-e-1;if(t>=n[i])return i-1;if(t<=n[e])return e;let r=e,a=i,o=Math.floor((r+a)/2);for(;t<n[o]||t>=n[o+1];)t<n[o]?a=o:r=o,o=Math.floor((r+a)/2);return o}static calcBasisFunctions(e,t,n,i){const r=[],a=[],o=[];r[0]=1;for(let l=1;l<=n;++l){a[l]=t-i[e+1-l],o[l]=i[e+l]-t;let c=0;for(let h=0;h<l;++h){const u=o[h+1],d=a[l-h],f=r[h]/(u+d);r[h]=c+u*f,c=d*f}r[l]=c}return r}static calcBSplinePoint(e,t,n,i){const r=this.findSpan(e,i,t),a=this.calcBasisFunctions(r,i,e,t),o=new Ue(0,0,0,0);for(let l=0;l<=e;++l){const c=n[r-e+l],h=a[l],u=c.w*h;o.x+=c.x*u,o.y+=c.y*u,o.z+=c.z*u,o.w+=c.w*h}return o}static calcBasisFunctionDerivatives(e,t,n,i,r){const a=[];for(let d=0;d<=n;++d)a[d]=0;const o=[];for(let d=0;d<=i;++d)o[d]=a.slice(0);const l=[];for(let d=0;d<=n;++d)l[d]=a.slice(0);l[0][0]=1;const c=a.slice(0),h=a.slice(0);for(let d=1;d<=n;++d){c[d]=t-r[e+1-d],h[d]=r[e+d]-t;let f=0;for(let p=0;p<d;++p){const _=h[p+1],v=c[d-p];l[d][p]=_+v;const m=l[p][d-1]/l[d][p];l[p][d]=f+_*m,f=v*m}l[d][d]=f}for(let d=0;d<=n;++d)o[0][d]=l[d][n];for(let d=0;d<=n;++d){let f=0,p=1;const _=[];for(let v=0;v<=n;++v)_[v]=a.slice(0);_[0][0]=1;for(let v=1;v<=i;++v){let m=0;const g=d-v,x=n-v;d>=v&&(_[p][0]=_[f][0]/l[x+1][g],m=_[p][0]*l[g][x]);const M=g>=-1?1:-g,w=d-1<=x?v-1:n-d;for(let A=M;A<=w;++A)_[p][A]=(_[f][A]-_[f][A-1])/l[x+1][g+A],m+=_[p][A]*l[g+A][x];d<=x&&(_[p][v]=-_[f][v-1]/l[x+1][d],m+=_[p][v]*l[d][x]),o[v][d]=m;const y=f;f=p,p=y}}let u=n;for(let d=1;d<=i;++d){for(let f=0;f<=n;++f)o[d][f]*=u;u*=n-d}return o}static calcBSplineDerivatives(e,t,n,i,r){const a=r<e?r:e,o=[],l=this.findSpan(e,i,t),c=this.calcBasisFunctionDerivatives(l,i,e,a,t),h=[];for(let u=0;u<n.length;++u){const d=n[u].clone(),f=d.w;d.x*=f,d.y*=f,d.z*=f,h[u]=d}for(let u=0;u<=a;++u){const d=h[l-e].clone().multiplyScalar(c[u][0]);for(let f=1;f<=e;++f)d.add(h[l-e+f].clone().multiplyScalar(c[u][f]));o[u]=d}for(let u=a+1;u<=r+1;++u)o[u]=new Ue(0,0,0);return o}static calcKoverI(e,t){let n=1;for(let r=2;r<=e;++r)n*=r;let i=1;for(let r=2;r<=t;++r)i*=r;for(let r=2;r<=e-t;++r)i*=r;return n/i}static calcRationalCurveDerivatives(e){const t=e.length,n=[],i=[];for(let a=0;a<t;++a){const o=e[a];n[a]=new S(o.x,o.y,o.z),i[a]=o.w}const r=[];for(let a=0;a<t;++a){const o=n[a].clone();for(let l=1;l<=a;++l)o.sub(r[a-l].clone().multiplyScalar(this.calcKoverI(a,l)*i[l]));r[a]=o.divideScalar(i[0])}return r}static calcNURBSDerivatives(e,t,n,i,r){const a=this.calcBSplineDerivatives(e,t,n,i,r);return this.calcRationalCurveDerivatives(a)}static calcSurfacePoint(e,t,n,i,r,a,o,l){const c=this.findSpan(e,a,n),h=this.findSpan(t,o,i),u=this.calcBasisFunctions(c,a,e,n),d=this.calcBasisFunctions(h,o,t,i),f=[];for(let _=0;_<=t;++_){f[_]=new Ue(0,0,0,0);for(let v=0;v<=e;++v){const m=r[c-e+v][h-t+_].clone(),g=m.w;m.x*=g,m.y*=g,m.z*=g,f[_].add(m.multiplyScalar(u[v]))}}const p=new Ue(0,0,0,0);for(let _=0;_<=t;++_)p.add(f[_].multiplyScalar(d[_]));p.divideScalar(p.w),l.set(p.x,p.y,p.z)}}class Th extends zt{constructor(e,t,n,i,r){super(),this.degree=e,this.knots=t,this.controlPoints=[],this.startKnot=i||0,this.endKnot=r||this.knots.length-1;for(let a=0;a<n.length;++a){const o=n[a];this.controlPoints[a]=new Ue(o.x,o.y,o.z,o.w)}}getPoint(e,t=new S){const n=t,i=this.knots[this.startKnot]+e*(this.knots[this.endKnot]-this.knots[this.startKnot]),r=bh.calcBSplinePoint(this.degree,this.knots,this.controlPoints,i);return r.w!==1&&r.divideScalar(r.w),n.set(r.x,r.y,r.z)}getTangent(e,t=new S){const n=t,i=this.knots[0]+e*(this.knots[this.knots.length-1]-this.knots[0]),r=bh.calcNURBSDerivatives(this.degree,this.knots,this.controlPoints,i,1);return n.copy(r[1]).normalize(),n}}let Fe,nt,bt;class xy extends on{constructor(e){super(e)}load(e,t,n,i){const r=this,a=r.path===""?yn.extractUrlBase(e):r.path,o=new Da(this.manager);o.setPath(r.path),o.setResponseType("arraybuffer"),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(e,function(l){try{t(r.parse(l,a))}catch(c){i?i(c):console.error(c),r.manager.itemError(e)}},n,i)}parse(e,t){if(by(e))Fe=new Ay().parse(e);else{const i=Vd(e);if(!Ty(i))throw new Error("THREE.FBXLoader: Unknown format.");if(Lh(i)<7e3)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+Lh(i));Fe=new My().parse(i)}const n=new fi(this.manager).setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);return new yy(n,this.manager).parse(Fe)}}class yy{constructor(e,t){this.textureLoader=e,this.manager=t}parse(){nt=this.parseConnections();const e=this.parseImages(),t=this.parseTextures(e),n=this.parseMaterials(t),i=this.parseDeformers(),r=new wy().parse(i);return this.parseScene(i,r,n),bt}parseConnections(){const e=new Map;return"Connections"in Fe&&Fe.Connections.connections.forEach(function(n){const i=n[0],r=n[1],a=n[2];e.has(i)||e.set(i,{parents:[],children:[]});const o={ID:r,relationship:a};e.get(i).parents.push(o),e.has(r)||e.set(r,{parents:[],children:[]});const l={ID:i,relationship:a};e.get(r).children.push(l)}),e}parseImages(){const e={},t={};if("Video"in Fe.Objects){const n=Fe.Objects.Video;for(const i in n){const r=n[i],a=parseInt(i);if(e[a]=r.RelativeFilename||r.Filename,"Content"in r){const o=r.Content instanceof ArrayBuffer&&r.Content.byteLength>0,l=typeof r.Content=="string"&&r.Content!=="";if(o||l){const c=this.parseImage(n[i]);t[r.RelativeFilename||r.Filename]=c}}}}for(const n in e){const i=e[n];t[i]!==void 0?e[n]=t[i]:e[n]=e[n].split("\\").pop()}return e}parseImage(e){const t=e.Content,n=e.RelativeFilename||e.Filename,i=n.slice(n.lastIndexOf(".")+1).toLowerCase();let r;switch(i){case"bmp":r="image/bmp";break;case"jpg":case"jpeg":r="image/jpeg";break;case"png":r="image/png";break;case"tif":r="image/tiff";break;case"tga":this.manager.getHandler(".tga")===null&&console.warn("FBXLoader: TGA loader not found, skipping ",n),r="image/tga";break;default:console.warn('FBXLoader: Image type "'+i+'" is not supported.');return}if(typeof t=="string")return"data:"+r+";base64,"+t;{const a=new Uint8Array(t);return window.URL.createObjectURL(new Blob([a],{type:r}))}}parseTextures(e){const t=new Map;if("Texture"in Fe.Objects){const n=Fe.Objects.Texture;for(const i in n){const r=this.parseTexture(n[i],e);t.set(parseInt(i),r)}}return t}parseTexture(e,t){const n=this.loadTexture(e,t);n.ID=e.id,n.name=e.attrName;const i=e.WrapModeU,r=e.WrapModeV,a=i!==void 0?i.value:0,o=r!==void 0?r.value:0;if(n.wrapS=a===0?at:Tt,n.wrapT=o===0?at:Tt,"Scaling"in e){const l=e.Scaling.value;n.repeat.x=l[0],n.repeat.y=l[1]}return n}loadTexture(e,t){let n;const i=this.textureLoader.path,r=nt.get(e.id).children;r!==void 0&&r.length>0&&t[r[0].ID]!==void 0&&(n=t[r[0].ID],(n.indexOf("blob:")===0||n.indexOf("data:")===0)&&this.textureLoader.setPath(void 0));let a;const o=e.FileName.slice(-3).toLowerCase();if(o==="tga"){const l=this.manager.getHandler(".tga");l===null?(console.warn("FBXLoader: TGA loader not found, creating placeholder texture for",e.RelativeFilename),a=new lt):(l.setPath(this.textureLoader.path),a=l.load(n))}else o==="psd"?(console.warn("FBXLoader: PSD textures are not supported, creating placeholder texture for",e.RelativeFilename),a=new lt):a=this.textureLoader.load(n);return this.textureLoader.setPath(i),a}parseMaterials(e){const t=new Map;if("Material"in Fe.Objects){const n=Fe.Objects.Material;for(const i in n){const r=this.parseMaterial(n[i],e);r!==null&&t.set(parseInt(i),r)}}return t}parseMaterial(e,t){const n=e.id,i=e.attrName;let r=e.ShadingModel;if(typeof r=="object"&&(r=r.value),!nt.has(n))return null;const a=this.parseParameters(e,t,n);let o;switch(r.toLowerCase()){case"phong":o=new ea;break;case"lambert":o=new Vu;break;default:console.warn('THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.',r),o=new ea;break}return o.setValues(a),o.name=i,o}parseParameters(e,t,n){const i={};e.BumpFactor&&(i.bumpScale=e.BumpFactor.value),e.Diffuse?i.color=new J().fromArray(e.Diffuse.value):e.DiffuseColor&&(e.DiffuseColor.type==="Color"||e.DiffuseColor.type==="ColorRGB")&&(i.color=new J().fromArray(e.DiffuseColor.value)),e.DisplacementFactor&&(i.displacementScale=e.DisplacementFactor.value),e.Emissive?i.emissive=new J().fromArray(e.Emissive.value):e.EmissiveColor&&(e.EmissiveColor.type==="Color"||e.EmissiveColor.type==="ColorRGB")&&(i.emissive=new J().fromArray(e.EmissiveColor.value)),e.EmissiveFactor&&(i.emissiveIntensity=parseFloat(e.EmissiveFactor.value)),e.Opacity&&(i.opacity=parseFloat(e.Opacity.value)),i.opacity<1&&(i.transparent=!0),e.ReflectionFactor&&(i.reflectivity=e.ReflectionFactor.value),e.Shininess&&(i.shininess=e.Shininess.value),e.Specular?i.specular=new J().fromArray(e.Specular.value):e.SpecularColor&&e.SpecularColor.type==="Color"&&(i.specular=new J().fromArray(e.SpecularColor.value));const r=this;return nt.get(n).children.forEach(function(a){const o=a.relationship;switch(o){case"Bump":i.bumpMap=r.getTexture(t,a.ID);break;case"Maya|TEX_ao_map":i.aoMap=r.getTexture(t,a.ID);break;case"DiffuseColor":case"Maya|TEX_color_map":i.map=r.getTexture(t,a.ID),i.map.encoding=Rt;break;case"DisplacementColor":i.displacementMap=r.getTexture(t,a.ID);break;case"EmissiveColor":i.emissiveMap=r.getTexture(t,a.ID),i.emissiveMap.encoding=Rt;break;case"NormalMap":case"Maya|TEX_normal_map":i.normalMap=r.getTexture(t,a.ID);break;case"ReflectionColor":i.envMap=r.getTexture(t,a.ID),i.envMap.mapping=Io,i.envMap.encoding=Rt;break;case"SpecularColor":i.specularMap=r.getTexture(t,a.ID),i.specularMap.encoding=Rt;break;case"TransparentColor":case"TransparencyFactor":i.alphaMap=r.getTexture(t,a.ID),i.transparent=!0;break;case"AmbientColor":case"ShininessExponent":case"SpecularFactor":case"VectorDisplacementColor":default:console.warn("THREE.FBXLoader: %s map is not supported in three.js, skipping texture.",o);break}}),i}getTexture(e,t){return"LayeredTexture"in Fe.Objects&&t in Fe.Objects.LayeredTexture&&(console.warn("THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer."),t=nt.get(t).children[0].ID),e.get(t)}parseDeformers(){const e={},t={};if("Deformer"in Fe.Objects){const n=Fe.Objects.Deformer;for(const i in n){const r=n[i],a=nt.get(parseInt(i));if(r.attrType==="Skin"){const o=this.parseSkeleton(a,n);o.ID=i,a.parents.length>1&&console.warn("THREE.FBXLoader: skeleton attached to more than one geometry is not supported."),o.geometryID=a.parents[0].ID,e[i]=o}else if(r.attrType==="BlendShape"){const o={id:i};o.rawTargets=this.parseMorphTargets(a,n),o.id=i,a.parents.length>1&&console.warn("THREE.FBXLoader: morph target attached to more than one geometry is not supported."),t[i]=o}}}return{skeletons:e,morphTargets:t}}parseSkeleton(e,t){const n=[];return e.children.forEach(function(i){const r=t[i.ID];if(r.attrType!=="Cluster")return;const a={ID:i.ID,indices:[],weights:[],transformLink:new ee().fromArray(r.TransformLink.a)};"Indexes"in r&&(a.indices=r.Indexes.a,a.weights=r.Weights.a),n.push(a)}),{rawBones:n,bones:[]}}parseMorphTargets(e,t){const n=[];for(let i=0;i<e.children.length;i++){const r=e.children[i],a=t[r.ID],o={name:a.attrName,initialWeight:a.DeformPercent,id:a.id,fullWeights:a.FullWeights.a};if(a.attrType!=="BlendShapeChannel")return;o.geoID=nt.get(parseInt(r.ID)).children.filter(function(l){return l.relationship===void 0})[0].ID,n.push(o)}return n}parseScene(e,t,n){bt=new ut;const i=this.parseModels(e.skeletons,t,n),r=Fe.Objects.Model,a=this;i.forEach(function(l){const c=r[l.ID];a.setLookAtProperties(l,c),nt.get(l.ID).parents.forEach(function(u){const d=i.get(u.ID);d!==void 0&&d.add(l)}),l.parent===null&&bt.add(l)}),this.bindSkeleton(e.skeletons,t,i),this.createAmbientLight(),this.setupMorphMaterials(),bt.traverse(function(l){if(l.userData.transformData){l.parent&&(l.userData.transformData.parentMatrix=l.parent.matrix,l.userData.transformData.parentMatrixWorld=l.parent.matrixWorld);const c=Gd(l.userData.transformData);l.applyMatrix4(c),l.updateWorldMatrix()}});const o=new Sy().parse();bt.children.length===1&&bt.children[0].isGroup&&(bt.children[0].animations=o,bt=bt.children[0]),bt.animations=o}parseModels(e,t,n){const i=new Map,r=Fe.Objects.Model;for(const a in r){const o=parseInt(a),l=r[a],c=nt.get(o);let h=this.buildSkeleton(c,e,o,l.attrName);if(!h){switch(l.attrType){case"Camera":h=this.createCamera(c);break;case"Light":h=this.createLight(c);break;case"Mesh":h=this.createMesh(c,t,n);break;case"NurbsCurve":h=this.createCurve(c,t);break;case"LimbNode":case"Root":h=new qr;break;case"Null":default:h=new ut;break}h.name=l.attrName?ze.sanitizeNodeName(l.attrName):"",h.ID=o}this.getTransformData(h,l),i.set(o,h)}return i}buildSkeleton(e,t,n,i){let r=null;return e.parents.forEach(function(a){for(const o in t){const l=t[o];l.rawBones.forEach(function(c,h){if(c.ID===a.ID){const u=r;r=new qr,r.matrixWorld.copy(c.transformLink),r.name=i?ze.sanitizeNodeName(i):"",r.ID=n,l.bones[h]=r,u!==null&&r.add(u)}})}}),r}createCamera(e){let t,n;if(e.children.forEach(function(i){const r=Fe.Objects.NodeAttribute[i.ID];r!==void 0&&(n=r)}),n===void 0)t=new Ne;else{let i=0;n.CameraProjectionType!==void 0&&n.CameraProjectionType.value===1&&(i=1);let r=1;n.NearPlane!==void 0&&(r=n.NearPlane.value/1e3);let a=1e3;n.FarPlane!==void 0&&(a=n.FarPlane.value/1e3);let o=window.innerWidth,l=window.innerHeight;n.AspectWidth!==void 0&&n.AspectHeight!==void 0&&(o=n.AspectWidth.value,l=n.AspectHeight.value);const c=o/l;let h=45;n.FieldOfView!==void 0&&(h=n.FieldOfView.value);const u=n.FocalLength?n.FocalLength.value:null;switch(i){case 0:t=new yt(h,c,r,a),u!==null&&t.setFocalLength(u);break;case 1:t=new pi(-o/2,o/2,l/2,-l/2,r,a);break;default:console.warn("THREE.FBXLoader: Unknown camera type "+i+"."),t=new Ne;break}}return t}createLight(e){let t,n;if(e.children.forEach(function(i){const r=Fe.Objects.NodeAttribute[i.ID];r!==void 0&&(n=r)}),n===void 0)t=new Ne;else{let i;n.LightType===void 0?i=0:i=n.LightType.value;let r=16777215;n.Color!==void 0&&(r=new J().fromArray(n.Color.value));let a=n.Intensity===void 0?1:n.Intensity.value/100;n.CastLightOnObject!==void 0&&n.CastLightOnObject.value===0&&(a=0);let o=0;n.FarAttenuationEnd!==void 0&&(n.EnableFarAttenuation!==void 0&&n.EnableFarAttenuation.value===0?o=0:o=n.FarAttenuationEnd.value);const l=1;switch(i){case 0:t=new fa(r,a,o,l);break;case 1:t=new Na(r,a);break;case 2:let c=Math.PI/3;n.InnerAngle!==void 0&&(c=Kt.degToRad(n.InnerAngle.value));let h=0;n.OuterAngle!==void 0&&(h=Kt.degToRad(n.OuterAngle.value),h=Math.max(h,1)),t=new Al(r,a,o,c,h,l);break;default:console.warn("THREE.FBXLoader: Unknown light type "+n.LightType.value+", defaulting to a PointLight."),t=new fa(r,a);break}n.CastShadows!==void 0&&n.CastShadows.value===1&&(t.castShadow=!0)}return t}createMesh(e,t,n){let i,r=null,a=null;const o=[];return e.children.forEach(function(l){t.has(l.ID)&&(r=t.get(l.ID)),n.has(l.ID)&&o.push(n.get(l.ID))}),o.length>1?a=o:o.length>0?a=o[0]:(a=new ea({color:13421772}),o.push(a)),"color"in r.attributes&&o.forEach(function(l){l.vertexColors=!0}),r.FBX_Deformer?(i=new La(r,a),i.normalizeSkinWeights()):i=new Ke(r,a),i}createCurve(e,t){const n=e.children.reduce(function(r,a){return t.has(a.ID)&&(r=t.get(a.ID)),r},null),i=new ui({color:3342591,linewidth:1});return new os(n,i)}getTransformData(e,t){const n={};"InheritType"in t&&(n.inheritType=parseInt(t.InheritType.value)),"RotationOrder"in t?n.eulerOrder=Hd(t.RotationOrder.value):n.eulerOrder="ZYX","Lcl_Translation"in t&&(n.translation=t.Lcl_Translation.value),"PreRotation"in t&&(n.preRotation=t.PreRotation.value),"Lcl_Rotation"in t&&(n.rotation=t.Lcl_Rotation.value),"PostRotation"in t&&(n.postRotation=t.PostRotation.value),"Lcl_Scaling"in t&&(n.scale=t.Lcl_Scaling.value),"ScalingOffset"in t&&(n.scalingOffset=t.ScalingOffset.value),"ScalingPivot"in t&&(n.scalingPivot=t.ScalingPivot.value),"RotationOffset"in t&&(n.rotationOffset=t.RotationOffset.value),"RotationPivot"in t&&(n.rotationPivot=t.RotationPivot.value),e.userData.transformData=n}setLookAtProperties(e,t){"LookAtProperty"in t&&nt.get(e.ID).children.forEach(function(i){if(i.relationship==="LookAtProperty"){const r=Fe.Objects.Model[i.ID];if("Lcl_Translation"in r){const a=r.Lcl_Translation.value;e.target!==void 0?(e.target.position.fromArray(a),bt.add(e.target)):e.lookAt(new S().fromArray(a))}}})}bindSkeleton(e,t,n){const i=this.parsePoseNodes();for(const r in e){const a=e[r];nt.get(parseInt(a.ID)).parents.forEach(function(l){if(t.has(l.ID)){const c=l.ID;nt.get(c).parents.forEach(function(u){n.has(u.ID)&&n.get(u.ID).bind(new Pa(a.bones),i[u.ID])})}})}}parsePoseNodes(){const e={};if("Pose"in Fe.Objects){const t=Fe.Objects.Pose;for(const n in t)if(t[n].attrType==="BindPose"){const i=t[n].PoseNode;Array.isArray(i)?i.forEach(function(r){e[r.Node]=new ee().fromArray(r.Matrix.a)}):e[i.Node]=new ee().fromArray(i.Matrix.a)}}return e}createAmbientLight(){if("GlobalSettings"in Fe&&"AmbientColor"in Fe.GlobalSettings){const e=Fe.GlobalSettings.AmbientColor.value,t=e[0],n=e[1],i=e[2];if(t!==0||n!==0||i!==0){const r=new J(t,n,i);bt.add(new bl(r,1))}}}setupMorphMaterials(){const e=this;bt.traverse(function(t){t.isMesh&&t.geometry.morphAttributes.position&&t.geometry.morphAttributes.position.length&&(Array.isArray(t.material)?t.material.forEach(function(n,i){e.setupMorphMaterial(t,n,i)}):e.setupMorphMaterial(t,t.material))})}setupMorphMaterial(e,t,n){const i=e.uuid,r=t.uuid;let a=!1;if(bt.traverse(function(o){o.isMesh&&(Array.isArray(o.material)?o.material.forEach(function(l){l.uuid===r&&o.uuid!==i&&(a=!0)}):o.material.uuid===r&&o.uuid!==i&&(a=!0))}),a===!0){const o=t.clone();o.morphTargets=!0,n===void 0?e.material=o:e.material[n]=o}else t.morphTargets=!0}}class wy{parse(e){const t=new Map;if("Geometry"in Fe.Objects){const n=Fe.Objects.Geometry;for(const i in n){const r=nt.get(parseInt(i)),a=this.parseGeometry(r,n[i],e);t.set(parseInt(i),a)}}return t}parseGeometry(e,t,n){switch(t.attrType){case"Mesh":return this.parseMeshGeometry(e,t,n);case"NurbsCurve":return this.parseNurbsGeometry(t)}}parseMeshGeometry(e,t,n){const i=n.skeletons,r=[],a=e.parents.map(function(u){return Fe.Objects.Model[u.ID]});if(a.length===0)return;const o=e.children.reduce(function(u,d){return i[d.ID]!==void 0&&(u=i[d.ID]),u},null);e.children.forEach(function(u){n.morphTargets[u.ID]!==void 0&&r.push(n.morphTargets[u.ID])});const l=a[0],c={};"RotationOrder"in l&&(c.eulerOrder=Hd(l.RotationOrder.value)),"InheritType"in l&&(c.inheritType=parseInt(l.InheritType.value)),"GeometricTranslation"in l&&(c.translation=l.GeometricTranslation.value),"GeometricRotation"in l&&(c.rotation=l.GeometricRotation.value),"GeometricScaling"in l&&(c.scale=l.GeometricScaling.value);const h=Gd(c);return this.genGeometry(t,o,r,h)}genGeometry(e,t,n,i){const r=new De;e.attrName&&(r.name=e.attrName);const a=this.parseGeoNode(e,t),o=this.genBuffers(a),l=new Me(o.vertex,3);if(l.applyMatrix4(i),r.setAttribute("position",l),o.colors.length>0&&r.setAttribute("color",new Me(o.colors,3)),t&&(r.setAttribute("skinIndex",new al(o.weightsIndices,4)),r.setAttribute("skinWeight",new Me(o.vertexWeights,4)),r.FBX_Deformer=t),o.normal.length>0){const c=new pt().getNormalMatrix(i),h=new Me(o.normal,3);h.applyNormalMatrix(c),r.setAttribute("normal",h)}if(o.uvs.forEach(function(c,h){let u="uv"+(h+1).toString();h===0&&(u="uv"),r.setAttribute(u,new Me(o.uvs[h],2))}),a.material&&a.material.mappingType!=="AllSame"){let c=o.materialIndex[0],h=0;if(o.materialIndex.forEach(function(u,d){u!==c&&(r.addGroup(h,d-h,c),c=u,h=d)}),r.groups.length>0){const u=r.groups[r.groups.length-1],d=u.start+u.count;d!==o.materialIndex.length&&r.addGroup(d,o.materialIndex.length-d,c)}r.groups.length===0&&r.addGroup(0,o.materialIndex.length,o.materialIndex[0])}return this.addMorphTargets(r,e,n,i),r}parseGeoNode(e,t){const n={};if(n.vertexPositions=e.Vertices!==void 0?e.Vertices.a:[],n.vertexIndices=e.PolygonVertexIndex!==void 0?e.PolygonVertexIndex.a:[],e.LayerElementColor&&(n.color=this.parseVertexColors(e.LayerElementColor[0])),e.LayerElementMaterial&&(n.material=this.parseMaterialIndices(e.LayerElementMaterial[0])),e.LayerElementNormal&&(n.normal=this.parseNormals(e.LayerElementNormal[0])),e.LayerElementUV){n.uv=[];let i=0;for(;e.LayerElementUV[i];)e.LayerElementUV[i].UV&&n.uv.push(this.parseUVs(e.LayerElementUV[i])),i++}return n.weightTable={},t!==null&&(n.skeleton=t,t.rawBones.forEach(function(i,r){i.indices.forEach(function(a,o){n.weightTable[a]===void 0&&(n.weightTable[a]=[]),n.weightTable[a].push({id:r,weight:i.weights[o]})})})),n}genBuffers(e){const t={vertex:[],normal:[],colors:[],uvs:[],materialIndex:[],vertexWeights:[],weightsIndices:[]};let n=0,i=0,r=!1,a=[],o=[],l=[],c=[],h=[],u=[];const d=this;return e.vertexIndices.forEach(function(f,p){let _,v=!1;f<0&&(f=f^-1,v=!0);let m=[],g=[];if(a.push(f*3,f*3+1,f*3+2),e.color){const x=js(p,n,f,e.color);l.push(x[0],x[1],x[2])}if(e.skeleton){if(e.weightTable[f]!==void 0&&e.weightTable[f].forEach(function(x){g.push(x.weight),m.push(x.id)}),g.length>4){r||(console.warn("THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights."),r=!0);const x=[0,0,0,0],M=[0,0,0,0];g.forEach(function(w,y){let A=w,E=m[y];M.forEach(function(D,R,z){if(A>D){z[R]=A,A=D;const H=x[R];x[R]=E,E=H}})}),m=x,g=M}for(;g.length<4;)g.push(0),m.push(0);for(let x=0;x<4;++x)h.push(g[x]),u.push(m[x])}if(e.normal){const x=js(p,n,f,e.normal);o.push(x[0],x[1],x[2])}e.material&&e.material.mappingType!=="AllSame"&&(_=js(p,n,f,e.material)[0]),e.uv&&e.uv.forEach(function(x,M){const w=js(p,n,f,x);c[M]===void 0&&(c[M]=[]),c[M].push(w[0]),c[M].push(w[1])}),i++,v&&(d.genFace(t,e,a,_,o,l,c,h,u,i),n++,i=0,a=[],o=[],l=[],c=[],h=[],u=[])}),t}genFace(e,t,n,i,r,a,o,l,c,h){for(let u=2;u<h;u++)e.vertex.push(t.vertexPositions[n[0]]),e.vertex.push(t.vertexPositions[n[1]]),e.vertex.push(t.vertexPositions[n[2]]),e.vertex.push(t.vertexPositions[n[(u-1)*3]]),e.vertex.push(t.vertexPositions[n[(u-1)*3+1]]),e.vertex.push(t.vertexPositions[n[(u-1)*3+2]]),e.vertex.push(t.vertexPositions[n[u*3]]),e.vertex.push(t.vertexPositions[n[u*3+1]]),e.vertex.push(t.vertexPositions[n[u*3+2]]),t.skeleton&&(e.vertexWeights.push(l[0]),e.vertexWeights.push(l[1]),e.vertexWeights.push(l[2]),e.vertexWeights.push(l[3]),e.vertexWeights.push(l[(u-1)*4]),e.vertexWeights.push(l[(u-1)*4+1]),e.vertexWeights.push(l[(u-1)*4+2]),e.vertexWeights.push(l[(u-1)*4+3]),e.vertexWeights.push(l[u*4]),e.vertexWeights.push(l[u*4+1]),e.vertexWeights.push(l[u*4+2]),e.vertexWeights.push(l[u*4+3]),e.weightsIndices.push(c[0]),e.weightsIndices.push(c[1]),e.weightsIndices.push(c[2]),e.weightsIndices.push(c[3]),e.weightsIndices.push(c[(u-1)*4]),e.weightsIndices.push(c[(u-1)*4+1]),e.weightsIndices.push(c[(u-1)*4+2]),e.weightsIndices.push(c[(u-1)*4+3]),e.weightsIndices.push(c[u*4]),e.weightsIndices.push(c[u*4+1]),e.weightsIndices.push(c[u*4+2]),e.weightsIndices.push(c[u*4+3])),t.color&&(e.colors.push(a[0]),e.colors.push(a[1]),e.colors.push(a[2]),e.colors.push(a[(u-1)*3]),e.colors.push(a[(u-1)*3+1]),e.colors.push(a[(u-1)*3+2]),e.colors.push(a[u*3]),e.colors.push(a[u*3+1]),e.colors.push(a[u*3+2])),t.material&&t.material.mappingType!=="AllSame"&&(e.materialIndex.push(i),e.materialIndex.push(i),e.materialIndex.push(i)),t.normal&&(e.normal.push(r[0]),e.normal.push(r[1]),e.normal.push(r[2]),e.normal.push(r[(u-1)*3]),e.normal.push(r[(u-1)*3+1]),e.normal.push(r[(u-1)*3+2]),e.normal.push(r[u*3]),e.normal.push(r[u*3+1]),e.normal.push(r[u*3+2])),t.uv&&t.uv.forEach(function(d,f){e.uvs[f]===void 0&&(e.uvs[f]=[]),e.uvs[f].push(o[f][0]),e.uvs[f].push(o[f][1]),e.uvs[f].push(o[f][(u-1)*2]),e.uvs[f].push(o[f][(u-1)*2+1]),e.uvs[f].push(o[f][u*2]),e.uvs[f].push(o[f][u*2+1])})}addMorphTargets(e,t,n,i){if(n.length===0)return;e.morphTargetsRelative=!0,e.morphAttributes.position=[];const r=this;n.forEach(function(a){a.rawTargets.forEach(function(o){const l=Fe.Objects.Geometry[o.geoID];l!==void 0&&r.genMorphGeometry(e,t,l,i,o.name)})})}genMorphGeometry(e,t,n,i,r){const a=t.PolygonVertexIndex!==void 0?t.PolygonVertexIndex.a:[],o=n.Vertices!==void 0?n.Vertices.a:[],l=n.Indexes!==void 0?n.Indexes.a:[],c=e.attributes.position.count*3,h=new Float32Array(c);for(let p=0;p<l.length;p++){const _=l[p]*3;h[_]=o[p*3],h[_+1]=o[p*3+1],h[_+2]=o[p*3+2]}const u={vertexIndices:a,vertexPositions:h},d=this.genBuffers(u),f=new Me(d.vertex,3);f.name=r||n.attrName,f.applyMatrix4(i),e.morphAttributes.position.push(f)}parseNormals(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,i=e.Normals.a;let r=[];return n==="IndexToDirect"&&("NormalIndex"in e?r=e.NormalIndex.a:"NormalsIndex"in e&&(r=e.NormalsIndex.a)),{dataSize:3,buffer:i,indices:r,mappingType:t,referenceType:n}}parseUVs(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,i=e.UV.a;let r=[];return n==="IndexToDirect"&&(r=e.UVIndex.a),{dataSize:2,buffer:i,indices:r,mappingType:t,referenceType:n}}parseVertexColors(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,i=e.Colors.a;let r=[];return n==="IndexToDirect"&&(r=e.ColorIndex.a),{dataSize:4,buffer:i,indices:r,mappingType:t,referenceType:n}}parseMaterialIndices(e){const t=e.MappingInformationType,n=e.ReferenceInformationType;if(t==="NoMappingInformation")return{dataSize:1,buffer:[0],indices:[0],mappingType:"AllSame",referenceType:n};const i=e.Materials.a,r=[];for(let a=0;a<i.length;++a)r.push(a);return{dataSize:1,buffer:i,indices:r,mappingType:t,referenceType:n}}parseNurbsGeometry(e){if(Th===void 0)return console.error("THREE.FBXLoader: The loader relies on NURBSCurve for any nurbs present in the model. Nurbs will show up as empty geometry."),new De;const t=parseInt(e.Order);if(isNaN(t))return console.error("THREE.FBXLoader: Invalid Order %s given for geometry ID: %s",e.Order,e.id),new De;const n=t-1,i=e.KnotVector.a,r=[],a=e.Points.a;for(let f=0,p=a.length;f<p;f+=4)r.push(new Ue().fromArray(a,f));let o,l;if(e.Form==="Closed")r.push(r[0]);else if(e.Form==="Periodic"){o=n,l=i.length-1-o;for(let f=0;f<n;++f)r.push(r[f])}const h=new Th(n,i,r,o,l).getPoints(r.length*7),u=new Float32Array(h.length*3);h.forEach(function(f,p){f.toArray(u,p*3)});const d=new De;return d.setAttribute("position",new $e(u,3)),d}}class Sy{parse(){const e=[],t=this.parseClips();if(t!==void 0)for(const n in t){const i=t[n],r=this.addClip(i);e.push(r)}return e}parseClips(){if(Fe.Objects.AnimationCurve===void 0)return;const e=this.parseAnimationCurveNodes();this.parseAnimationCurves(e);const t=this.parseAnimationLayers(e);return this.parseAnimStacks(t)}parseAnimationCurveNodes(){const e=Fe.Objects.AnimationCurveNode,t=new Map;for(const n in e){const i=e[n];if(i.attrName.match(/S|R|T|DeformPercent/)!==null){const r={id:i.id,attr:i.attrName,curves:{}};t.set(r.id,r)}}return t}parseAnimationCurves(e){const t=Fe.Objects.AnimationCurve;for(const n in t){const i={id:t[n].id,times:t[n].KeyTime.a.map(Ey),values:t[n].KeyValueFloat.a},r=nt.get(i.id);if(r!==void 0){const a=r.parents[0].ID,o=r.parents[0].relationship;o.match(/X/)?e.get(a).curves.x=i:o.match(/Y/)?e.get(a).curves.y=i:o.match(/Z/)?e.get(a).curves.z=i:o.match(/d|DeformPercent/)&&e.has(a)&&(e.get(a).curves.morph=i)}}}parseAnimationLayers(e){const t=Fe.Objects.AnimationLayer,n=new Map;for(const i in t){const r=[],a=nt.get(parseInt(i));a!==void 0&&(a.children.forEach(function(l,c){if(e.has(l.ID)){const h=e.get(l.ID);if(h.curves.x!==void 0||h.curves.y!==void 0||h.curves.z!==void 0){if(r[c]===void 0){const u=nt.get(l.ID).parents.filter(function(d){return d.relationship!==void 0})[0].ID;if(u!==void 0){const d=Fe.Objects.Model[u.toString()];if(d===void 0){console.warn("THREE.FBXLoader: Encountered a unused curve.",l);return}const f={modelName:d.attrName?ze.sanitizeNodeName(d.attrName):"",ID:d.id,initialPosition:[0,0,0],initialRotation:[0,0,0],initialScale:[1,1,1]};bt.traverse(function(p){p.ID===d.id&&(f.transform=p.matrix,p.userData.transformData&&(f.eulerOrder=p.userData.transformData.eulerOrder))}),f.transform||(f.transform=new ee),"PreRotation"in d&&(f.preRotation=d.PreRotation.value),"PostRotation"in d&&(f.postRotation=d.PostRotation.value),r[c]=f}}r[c]&&(r[c][h.attr]=h)}else if(h.curves.morph!==void 0){if(r[c]===void 0){const u=nt.get(l.ID).parents.filter(function(m){return m.relationship!==void 0})[0].ID,d=nt.get(u).parents[0].ID,f=nt.get(d).parents[0].ID,p=nt.get(f).parents[0].ID,_=Fe.Objects.Model[p],v={modelName:_.attrName?ze.sanitizeNodeName(_.attrName):"",morphName:Fe.Objects.Deformer[u].attrName};r[c]=v}r[c][h.attr]=h}}}),n.set(parseInt(i),r))}return n}parseAnimStacks(e){const t=Fe.Objects.AnimationStack,n={};for(const i in t){const r=nt.get(parseInt(i)).children;r.length>1&&console.warn("THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers.");const a=e.get(r[0].ID);n[i]={name:t[i].attrName,layer:a}}return n}addClip(e){let t=[];const n=this;return e.layer.forEach(function(i){t=t.concat(n.generateTracks(i))}),new $r(e.name,-1,t)}generateTracks(e){const t=[];let n=new S,i=new Ve,r=new S;if(e.transform&&e.transform.decompose(n,i,r),n=n.toArray(),i=new Ot().setFromQuaternion(i,e.eulerOrder).toArray(),r=r.toArray(),e.T!==void 0&&Object.keys(e.T.curves).length>0){const a=this.generateVectorTrack(e.modelName,e.T.curves,n,"position");a!==void 0&&t.push(a)}if(e.R!==void 0&&Object.keys(e.R.curves).length>0){const a=this.generateRotationTrack(e.modelName,e.R.curves,i,e.preRotation,e.postRotation,e.eulerOrder);a!==void 0&&t.push(a)}if(e.S!==void 0&&Object.keys(e.S.curves).length>0){const a=this.generateVectorTrack(e.modelName,e.S.curves,r,"scale");a!==void 0&&t.push(a)}if(e.DeformPercent!==void 0){const a=this.generateMorphTrack(e);a!==void 0&&t.push(a)}return t}generateVectorTrack(e,t,n,i){const r=this.getTimesForAllAxes(t),a=this.getKeyframeTrackValues(r,t,n);return new oi(e+"."+i,r,a)}generateRotationTrack(e,t,n,i,r,a){t.x!==void 0&&(this.interpolateRotations(t.x),t.x.values=t.x.values.map(Kt.degToRad)),t.y!==void 0&&(this.interpolateRotations(t.y),t.y.values=t.y.values.map(Kt.degToRad)),t.z!==void 0&&(this.interpolateRotations(t.z),t.z.values=t.z.values.map(Kt.degToRad));const o=this.getTimesForAllAxes(t),l=this.getKeyframeTrackValues(o,t,n);i!==void 0&&(i=i.map(Kt.degToRad),i.push(a),i=new Ot().fromArray(i),i=new Ve().setFromEuler(i)),r!==void 0&&(r=r.map(Kt.degToRad),r.push(a),r=new Ot().fromArray(r),r=new Ve().setFromEuler(r).invert());const c=new Ve,h=new Ot,u=[];for(let d=0;d<l.length;d+=3)h.set(l[d],l[d+1],l[d+2],a),c.setFromEuler(h),i!==void 0&&c.premultiply(i),r!==void 0&&c.multiply(r),c.toArray(u,d/3*4);return new Wn(e+".quaternion",o,u)}generateMorphTrack(e){const t=e.DeformPercent.curves.morph,n=t.values.map(function(r){return r/100}),i=bt.getObjectByName(e.modelName).morphTargetDictionary[e.morphName];return new Qi(e.modelName+".morphTargetInfluences["+i+"]",t.times,n)}getTimesForAllAxes(e){let t=[];if(e.x!==void 0&&(t=t.concat(e.x.times)),e.y!==void 0&&(t=t.concat(e.y.times)),e.z!==void 0&&(t=t.concat(e.z.times)),t=t.sort(function(n,i){return n-i}),t.length>1){let n=1,i=t[0];for(let r=1;r<t.length;r++){const a=t[r];a!==i&&(t[n]=a,i=a,n++)}t=t.slice(0,n)}return t}getKeyframeTrackValues(e,t,n){const i=n,r=[];let a=-1,o=-1,l=-1;return e.forEach(function(c){if(t.x&&(a=t.x.times.indexOf(c)),t.y&&(o=t.y.times.indexOf(c)),t.z&&(l=t.z.times.indexOf(c)),a!==-1){const h=t.x.values[a];r.push(h),i[0]=h}else r.push(i[0]);if(o!==-1){const h=t.y.values[o];r.push(h),i[1]=h}else r.push(i[1]);if(l!==-1){const h=t.z.values[l];r.push(h),i[2]=h}else r.push(i[2])}),r}interpolateRotations(e){for(let t=1;t<e.values.length;t++){const n=e.values[t-1],i=e.values[t]-n,r=Math.abs(i);if(r>=180){const a=r/180,o=i/a;let l=n+o;const c=e.times[t-1],u=(e.times[t]-c)/a;let d=c+u;const f=[],p=[];for(;d<e.times[t];)f.push(d),d+=u,p.push(l),l+=o;e.times=Ph(e.times,t,f),e.values=Ph(e.values,t,p)}}}}class My{getPrevNode(){return this.nodeStack[this.currentIndent-2]}getCurrentNode(){return this.nodeStack[this.currentIndent-1]}getCurrentProp(){return this.currentProp}pushStack(e){this.nodeStack.push(e),this.currentIndent+=1}popStack(){this.nodeStack.pop(),this.currentIndent-=1}setCurrentProp(e,t){this.currentProp=e,this.currentPropName=t}parse(e){this.currentIndent=0,this.allNodes=new kd,this.nodeStack=[],this.currentProp=[],this.currentPropName="";const t=this,n=e.split(/[\r\n]+/);return n.forEach(function(i,r){const a=i.match(/^[\s\t]*;/),o=i.match(/^[\s\t]*$/);if(a||o)return;const l=i.match("^\\t{"+t.currentIndent+"}(\\w+):(.*){",""),c=i.match("^\\t{"+t.currentIndent+"}(\\w+):[\\s\\t\\r\\n](.*)"),h=i.match("^\\t{"+(t.currentIndent-1)+"}}");l?t.parseNodeBegin(i,l):c?t.parseNodeProperty(i,c,n[++r]):h?t.popStack():i.match(/^[^\s\t}]/)&&t.parseNodePropertyContinued(i)}),this.allNodes}parseNodeBegin(e,t){const n=t[1].trim().replace(/^"/,"").replace(/"$/,""),i=t[2].split(",").map(function(l){return l.trim().replace(/^"/,"").replace(/"$/,"")}),r={name:n},a=this.parseNodeAttr(i),o=this.getCurrentNode();this.currentIndent===0?this.allNodes.add(n,r):n in o?(n==="PoseNode"?o.PoseNode.push(r):o[n].id!==void 0&&(o[n]={},o[n][o[n].id]=o[n]),a.id!==""&&(o[n][a.id]=r)):typeof a.id=="number"?(o[n]={},o[n][a.id]=r):n!=="Properties70"&&(n==="PoseNode"?o[n]=[r]:o[n]=r),typeof a.id=="number"&&(r.id=a.id),a.name!==""&&(r.attrName=a.name),a.type!==""&&(r.attrType=a.type),this.pushStack(r)}parseNodeAttr(e){let t=e[0];e[0]!==""&&(t=parseInt(e[0]),isNaN(t)&&(t=e[0]));let n="",i="";return e.length>1&&(n=e[1].replace(/^(\w+)::/,""),i=e[2]),{id:t,name:n,type:i}}parseNodeProperty(e,t,n){let i=t[1].replace(/^"/,"").replace(/"$/,"").trim(),r=t[2].replace(/^"/,"").replace(/"$/,"").trim();i==="Content"&&r===","&&(r=n.replace(/"/g,"").replace(/,$/,"").trim());const a=this.getCurrentNode();if(a.name==="Properties70"){this.parseNodeSpecialProperty(e,i,r);return}if(i==="C"){const l=r.split(",").slice(1),c=parseInt(l[0]),h=parseInt(l[1]);let u=r.split(",").slice(3);u=u.map(function(d){return d.trim().replace(/^"/,"")}),i="connections",r=[c,h],Py(r,u),a[i]===void 0&&(a[i]=[])}i==="Node"&&(a.id=r),i in a&&Array.isArray(a[i])?a[i].push(r):i!=="a"?a[i]=r:a.a=r,this.setCurrentProp(a,i),i==="a"&&r.slice(-1)!==","&&(a.a=Mo(r))}parseNodePropertyContinued(e){const t=this.getCurrentNode();t.a+=e,e.slice(-1)!==","&&(t.a=Mo(t.a))}parseNodeSpecialProperty(e,t,n){const i=n.split('",').map(function(h){return h.trim().replace(/^\"/,"").replace(/\s/,"_")}),r=i[0],a=i[1],o=i[2],l=i[3];let c=i[4];switch(a){case"int":case"enum":case"bool":case"ULongLong":case"double":case"Number":case"FieldOfView":c=parseFloat(c);break;case"Color":case"ColorRGB":case"Vector3D":case"Lcl_Translation":case"Lcl_Rotation":case"Lcl_Scaling":c=Mo(c);break}this.getPrevNode()[r]={type:a,type2:o,flag:l,value:c},this.setCurrentProp(this.getPrevNode(),r)}}class Ay{parse(e){const t=new Eh(e);t.skip(23);const n=t.getUint32();if(n<6400)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+n);const i=new kd;for(;!this.endOfContent(t);){const r=this.parseNode(t,n);r!==null&&i.add(r.name,r)}return i}endOfContent(e){return e.size()%16===0?(e.getOffset()+160+16&-16)>=e.size():e.getOffset()+160+16>=e.size()}parseNode(e,t){const n={},i=t>=7500?e.getUint64():e.getUint32(),r=t>=7500?e.getUint64():e.getUint32();t>=7500?e.getUint64():e.getUint32();const a=e.getUint8(),o=e.getString(a);if(i===0)return null;const l=[];for(let d=0;d<r;d++)l.push(this.parseProperty(e));const c=l.length>0?l[0]:"",h=l.length>1?l[1]:"",u=l.length>2?l[2]:"";for(n.singleProperty=r===1&&e.getOffset()===i;i>e.getOffset();){const d=this.parseNode(e,t);d!==null&&this.parseSubNode(o,n,d)}return n.propertyList=l,typeof c=="number"&&(n.id=c),h!==""&&(n.attrName=h),u!==""&&(n.attrType=u),o!==""&&(n.name=o),n}parseSubNode(e,t,n){if(n.singleProperty===!0){const i=n.propertyList[0];Array.isArray(i)?(t[n.name]=n,n.a=i):t[n.name]=i}else if(e==="Connections"&&n.name==="C"){const i=[];n.propertyList.forEach(function(r,a){a!==0&&i.push(r)}),t.connections===void 0&&(t.connections=[]),t.connections.push(i)}else if(n.name==="Properties70")Object.keys(n).forEach(function(r){t[r]=n[r]});else if(e==="Properties70"&&n.name==="P"){let i=n.propertyList[0],r=n.propertyList[1];const a=n.propertyList[2],o=n.propertyList[3];let l;i.indexOf("Lcl ")===0&&(i=i.replace("Lcl ","Lcl_")),r.indexOf("Lcl ")===0&&(r=r.replace("Lcl ","Lcl_")),r==="Color"||r==="ColorRGB"||r==="Vector"||r==="Vector3D"||r.indexOf("Lcl_")===0?l=[n.propertyList[4],n.propertyList[5],n.propertyList[6]]:l=n.propertyList[4],t[i]={type:r,type2:a,flag:o,value:l}}else t[n.name]===void 0?typeof n.id=="number"?(t[n.name]={},t[n.name][n.id]=n):t[n.name]=n:n.name==="PoseNode"?(Array.isArray(t[n.name])||(t[n.name]=[t[n.name]]),t[n.name].push(n)):t[n.name][n.id]===void 0&&(t[n.name][n.id]=n)}parseProperty(e){const t=e.getString(1);let n;switch(t){case"C":return e.getBoolean();case"D":return e.getFloat64();case"F":return e.getFloat32();case"I":return e.getInt32();case"L":return e.getInt64();case"R":return n=e.getUint32(),e.getArrayBuffer(n);case"S":return n=e.getUint32(),e.getString(n);case"Y":return e.getInt16();case"b":case"c":case"d":case"f":case"i":case"l":const i=e.getUint32(),r=e.getUint32(),a=e.getUint32();if(r===0)switch(t){case"b":case"c":return e.getBooleanArray(i);case"d":return e.getFloat64Array(i);case"f":return e.getFloat32Array(i);case"i":return e.getInt32Array(i);case"l":return e.getInt64Array(i)}typeof vy>"u"&&console.error("THREE.FBXLoader: External library fflate.min.js required.");const o=ns(new Uint8Array(e.getArrayBuffer(a))),l=new Eh(o.buffer);switch(t){case"b":case"c":return l.getBooleanArray(i);case"d":return l.getFloat64Array(i);case"f":return l.getFloat32Array(i);case"i":return l.getInt32Array(i);case"l":return l.getInt64Array(i)}default:throw new Error("THREE.FBXLoader: Unknown property type "+t)}}}class Eh{constructor(e,t){this.dv=new DataView(e),this.offset=0,this.littleEndian=t!==void 0?t:!0}getOffset(){return this.offset}size(){return this.dv.buffer.byteLength}skip(e){this.offset+=e}getBoolean(){return(this.getUint8()&1)===1}getBooleanArray(e){const t=[];for(let n=0;n<e;n++)t.push(this.getBoolean());return t}getUint8(){const e=this.dv.getUint8(this.offset);return this.offset+=1,e}getInt16(){const e=this.dv.getInt16(this.offset,this.littleEndian);return this.offset+=2,e}getInt32(){const e=this.dv.getInt32(this.offset,this.littleEndian);return this.offset+=4,e}getInt32Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getInt32());return t}getUint32(){const e=this.dv.getUint32(this.offset,this.littleEndian);return this.offset+=4,e}getInt64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t&2147483648?(t=~t&4294967295,e=~e&4294967295,e===4294967295&&(t=t+1&4294967295),e=e+1&4294967295,-(t*4294967296+e)):t*4294967296+e}getInt64Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getInt64());return t}getUint64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t*4294967296+e}getFloat32(){const e=this.dv.getFloat32(this.offset,this.littleEndian);return this.offset+=4,e}getFloat32Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getFloat32());return t}getFloat64(){const e=this.dv.getFloat64(this.offset,this.littleEndian);return this.offset+=8,e}getFloat64Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getFloat64());return t}getArrayBuffer(e){const t=this.dv.buffer.slice(this.offset,this.offset+e);return this.offset+=e,t}getString(e){let t=[];for(let i=0;i<e;i++)t[i]=this.getUint8();const n=t.indexOf(0);return n>=0&&(t=t.slice(0,n)),yn.decodeText(new Uint8Array(t))}}class kd{add(e,t){this[e]=t}}function by(s){const e="Kaydara FBX Binary  \0";return s.byteLength>=e.length&&e===Vd(s,0,e.length)}function Ty(s){const e=["K","a","y","d","a","r","a","\\","F","B","X","\\","B","i","n","a","r","y","\\","\\"];let t=0;function n(i){const r=s[i-1];return s=s.slice(t+i),t++,r}for(let i=0;i<e.length;++i)if(n(1)===e[i])return!1;return!0}function Lh(s){const e=/FBXVersion: (\d+)/,t=s.match(e);if(t)return parseInt(t[1]);throw new Error("THREE.FBXLoader: Cannot find the version number for the file given.")}function Ey(s){return s/46186158e3}const Ly=[];function js(s,e,t,n){let i;switch(n.mappingType){case"ByPolygonVertex":i=s;break;case"ByPolygon":i=e;break;case"ByVertice":i=t;break;case"AllSame":i=n.indices[0];break;default:console.warn("THREE.FBXLoader: unknown attribute mapping type "+n.mappingType)}n.referenceType==="IndexToDirect"&&(i=n.indices[i]);const r=i*n.dataSize,a=r+n.dataSize;return Cy(Ly,n.buffer,r,a)}const So=new Ot,Ii=new S;function Gd(s){const e=new ee,t=new ee,n=new ee,i=new ee,r=new ee,a=new ee,o=new ee,l=new ee,c=new ee,h=new ee,u=new ee,d=new ee,f=s.inheritType?s.inheritType:0;if(s.translation&&e.setPosition(Ii.fromArray(s.translation)),s.preRotation){const R=s.preRotation.map(Kt.degToRad);R.push(s.eulerOrder),t.makeRotationFromEuler(So.fromArray(R))}if(s.rotation){const R=s.rotation.map(Kt.degToRad);R.push(s.eulerOrder),n.makeRotationFromEuler(So.fromArray(R))}if(s.postRotation){const R=s.postRotation.map(Kt.degToRad);R.push(s.eulerOrder),i.makeRotationFromEuler(So.fromArray(R)),i.invert()}s.scale&&r.scale(Ii.fromArray(s.scale)),s.scalingOffset&&o.setPosition(Ii.fromArray(s.scalingOffset)),s.scalingPivot&&a.setPosition(Ii.fromArray(s.scalingPivot)),s.rotationOffset&&l.setPosition(Ii.fromArray(s.rotationOffset)),s.rotationPivot&&c.setPosition(Ii.fromArray(s.rotationPivot)),s.parentMatrixWorld&&(u.copy(s.parentMatrix),h.copy(s.parentMatrixWorld));const p=t.clone().multiply(n).multiply(i),_=new ee;_.extractRotation(h);const v=new ee;v.copyPosition(h);const m=v.clone().invert().multiply(h),g=_.clone().invert().multiply(m),x=r,M=new ee;if(f===0)M.copy(_).multiply(p).multiply(g).multiply(x);else if(f===1)M.copy(_).multiply(g).multiply(p).multiply(x);else{const z=new ee().scale(new S().setFromMatrixScale(u)).clone().invert(),H=g.clone().multiply(z);M.copy(_).multiply(p).multiply(H).multiply(x)}const w=c.clone().invert(),y=a.clone().invert();let A=e.clone().multiply(l).multiply(c).multiply(t).multiply(n).multiply(i).multiply(w).multiply(o).multiply(a).multiply(r).multiply(y);const E=new ee().copyPosition(A),D=h.clone().multiply(E);return d.copyPosition(D),A=d.clone().multiply(M),A.premultiply(h.invert()),A}function Hd(s){s=s||0;const e=["ZYX","YZX","XZY","ZXY","YXZ","XYZ"];return s===6?(console.warn("THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect."),e[0]):e[s]}function Mo(s){return s.split(",").map(function(t){return parseFloat(t)})}function Vd(s,e,t){return e===void 0&&(e=0),t===void 0&&(t=s.byteLength),yn.decodeText(new Uint8Array(s,e,t))}function Py(s,e){for(let t=0,n=s.length,i=e.length;t<i;t++,n++)s[n]=e[t]}function Cy(s,e,t,n){for(let i=t,r=0;i<n;i++,r++)s[r]=e[i];return s}function Ph(s,e,t){return s.slice(0,e).concat(t).concat(s.slice(e))}class Fy extends on{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Ny(t)}),this.register(function(t){return new By(t)}),this.register(function(t){return new Oy(t)}),this.register(function(t){return new Uy(t)}),this.register(function(t){return new Iy(t)}),this.register(function(t){return new zy(t)})}load(e,t,n,i){const r=this;let a;this.resourcePath!==""?a=this.resourcePath:this.path!==""?a=this.path:a=yn.extractUrlBase(e),this.manager.itemStart(e);const o=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Da(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const a={},o={};if(typeof e=="string")r=e;else if(yn.decodeText(new Uint8Array(e,0,4))===Wd){try{a[ke.KHR_BINARY_GLTF]=new ky(e)}catch(u){i&&i(u);return}r=a[ke.KHR_BINARY_GLTF].content}else r=yn.decodeText(new Uint8Array(e));const l=JSON.parse(r);if(l.asset===void 0||l.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new Jy(l,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);o[u.name]=u,a[u.name]=!0}if(l.extensionsUsed)for(let h=0;h<l.extensionsUsed.length;++h){const u=l.extensionsUsed[h],d=l.extensionsRequired||[];switch(u){case ke.KHR_MATERIALS_UNLIT:a[u]=new Dy;break;case ke.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:a[u]=new Vy;break;case ke.KHR_DRACO_MESH_COMPRESSION:a[u]=new Gy(l,this.dracoLoader);break;case ke.KHR_TEXTURE_TRANSFORM:a[u]=new Hy;break;case ke.KHR_MESH_QUANTIZATION:a[u]=new Wy;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}}function Ry(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const ke={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:"KHR_materials_pbrSpecularGlossiness",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression"};class Iy{constructor(e){this.parser=e,this.name=ke.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const h=new J(16777215);l.color!==void 0&&h.fromArray(l.color);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Na(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new fa(h),c.distance=u;break;case"spot":c=new Al(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class Dy{constructor(){this.name=ke.KHR_MATERIALS_UNLIT}getMaterialType(){return $t}extendParams(e,t,n){const i=[];e.color=new J(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.fromArray(a),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture))}return Promise.all(i)}}class Ny{constructor(e){this.parser=e,this.name=ke.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:wl}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new X(o,-o)}return Promise.all(r)}}class Uy{constructor(e){this.parser=e,this.name=ke.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:wl}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}}class By{constructor(e){this.parser=e,this.name=ke.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],a=n.images[r.source],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,a,o)}}class Oy{constructor(e){this.parser=e,this.name=ke.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class zy{constructor(e){this.name=ke.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return Promise.all([r,a.ready]).then(function(o){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,d=new ArrayBuffer(h*u),f=new Uint8Array(o[0],l,c);return a.decodeGltfBuffer(new Uint8Array(d),h,u,f,i.mode,i.filter),d})}else return null}}const Wd="glTF",Er=12,Ch={JSON:1313821514,BIN:5130562};class ky{constructor(e){this.name=ke.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Er);if(this.header={magic:yn.decodeText(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Wd)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const n=this.header.length-Er,i=new DataView(e,Er);let r=0;for(;r<n;){const a=i.getUint32(r,!0);r+=4;const o=i.getUint32(r,!0);if(r+=4,o===Ch.JSON){const l=new Uint8Array(e,Er+r,a);this.content=yn.decodeText(l)}else if(o===Ch.BIN){const l=Er+r;this.body=e.slice(l,l+a)}r+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Gy{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ke.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const h in a){const u=Zo[h]||h.toLowerCase();o[u]=a[h]}for(const h in e.attributes){const u=Zo[h]||h.toLowerCase();if(a[h]!==void 0){const d=n.accessors[e.attributes[h]],f=rs[d.componentType];c[u]=f,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u){i.decodeDracoFile(h,function(d){for(const f in d.attributes){const p=d.attributes[f],_=l[f];_!==void 0&&(p.normalized=_)}u(d)},o,c)})})}}class Hy{constructor(){this.name=ke.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return t.texCoord!==void 0&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Jo extends di{constructor(e){super(),this.isGLTFSpecularGlossinessMaterial=!0;const t=["#ifdef USE_SPECULARMAP","	uniform sampler2D specularMap;","#endif"].join(`
`),n=["#ifdef USE_GLOSSINESSMAP","	uniform sampler2D glossinessMap;","#endif"].join(`
`),i=["vec3 specularFactor = specular;","#ifdef USE_SPECULARMAP","	vec4 texelSpecular = texture2D( specularMap, vUv );","	texelSpecular = sRGBToLinear( texelSpecular );","	// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture","	specularFactor *= texelSpecular.rgb;","#endif"].join(`
`),r=["float glossinessFactor = glossiness;","#ifdef USE_GLOSSINESSMAP","	vec4 texelGlossiness = texture2D( glossinessMap, vUv );","	// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture","	glossinessFactor *= texelGlossiness.a;","#endif"].join(`
`),a=["PhysicalMaterial material;","material.diffuseColor = diffuseColor.rgb * ( 1. - max( specularFactor.r, max( specularFactor.g, specularFactor.b ) ) );","vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );","float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );","material.specularRoughness = max( 1.0 - glossinessFactor, 0.0525 ); // 0.0525 corresponds to the base mip of a 256 cubemap.","material.specularRoughness += geometryRoughness;","material.specularRoughness = min( material.specularRoughness, 1.0 );","material.specularColor = specularFactor;"].join(`
`),o={specular:{value:new J().setHex(16777215)},glossiness:{value:1},specularMap:{value:null},glossinessMap:{value:null}};this._extraUniforms=o,this.onBeforeCompile=function(l){for(const c in o)l.uniforms[c]=o[c];l.fragmentShader=l.fragmentShader.replace("uniform float roughness;","uniform vec3 specular;").replace("uniform float metalness;","uniform float glossiness;").replace("#include <roughnessmap_pars_fragment>",t).replace("#include <metalnessmap_pars_fragment>",n).replace("#include <roughnessmap_fragment>",i).replace("#include <metalnessmap_fragment>",r).replace("#include <lights_physical_fragment>",a)},Object.defineProperties(this,{specular:{get:function(){return o.specular.value},set:function(l){o.specular.value=l}},specularMap:{get:function(){return o.specularMap.value},set:function(l){o.specularMap.value=l,l?this.defines.USE_SPECULARMAP="":delete this.defines.USE_SPECULARMAP}},glossiness:{get:function(){return o.glossiness.value},set:function(l){o.glossiness.value=l}},glossinessMap:{get:function(){return o.glossinessMap.value},set:function(l){o.glossinessMap.value=l,l?(this.defines.USE_GLOSSINESSMAP="",this.defines.USE_UV=""):(delete this.defines.USE_GLOSSINESSMAP,delete this.defines.USE_UV)}}}),delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this.setValues(e)}copy(e){return super.copy(e),this.specularMap=e.specularMap,this.specular.copy(e.specular),this.glossinessMap=e.glossinessMap,this.glossiness=e.glossiness,delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this}}class Vy{constructor(){this.name=ke.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS,this.specularGlossinessParams=["color","map","lightMap","lightMapIntensity","aoMap","aoMapIntensity","emissive","emissiveIntensity","emissiveMap","bumpMap","bumpScale","normalMap","normalMapType","displacementMap","displacementScale","displacementBias","specularMap","specular","glossinessMap","glossiness","alphaMap","envMap","envMapIntensity","refractionRatio"]}getMaterialType(){return Jo}extendParams(e,t,n){const i=t.extensions[this.name];e.color=new J(1,1,1),e.opacity=1;const r=[];if(Array.isArray(i.diffuseFactor)){const a=i.diffuseFactor;e.color.fromArray(a),e.opacity=a[3]}if(i.diffuseTexture!==void 0&&r.push(n.assignTexture(e,"map",i.diffuseTexture)),e.emissive=new J(0,0,0),e.glossiness=i.glossinessFactor!==void 0?i.glossinessFactor:1,e.specular=new J(1,1,1),Array.isArray(i.specularFactor)&&e.specular.fromArray(i.specularFactor),i.specularGlossinessTexture!==void 0){const a=i.specularGlossinessTexture;r.push(n.assignTexture(e,"glossinessMap",a)),r.push(n.assignTexture(e,"specularMap",a))}return Promise.all(r)}createMaterial(e){const t=new Jo(e);return t.fog=!0,t.color=e.color,t.map=e.map===void 0?null:e.map,t.lightMap=null,t.lightMapIntensity=1,t.aoMap=e.aoMap===void 0?null:e.aoMap,t.aoMapIntensity=1,t.emissive=e.emissive,t.emissiveIntensity=1,t.emissiveMap=e.emissiveMap===void 0?null:e.emissiveMap,t.bumpMap=e.bumpMap===void 0?null:e.bumpMap,t.bumpScale=1,t.normalMap=e.normalMap===void 0?null:e.normalMap,t.normalMapType=li,e.normalScale&&(t.normalScale=e.normalScale),t.displacementMap=null,t.displacementScale=1,t.displacementBias=0,t.specularMap=e.specularMap===void 0?null:e.specularMap,t.specular=e.specular,t.glossinessMap=e.glossinessMap===void 0?null:e.glossinessMap,t.glossiness=e.glossiness,t.alphaMap=null,t.envMap=e.envMap===void 0?null:e.envMap,t.envMapIntensity=1,t.refractionRatio=.98,t}}class Wy{constructor(){this.name=ke.KHR_MESH_QUANTIZATION}}class $i extends Sn{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}}$i.prototype.beforeStart_=$i.prototype.copySampleValue_;$i.prototype.afterEnd_=$i.prototype.copySampleValue_;$i.prototype.interpolate_=function(s,e,t,n){const i=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=a*2,l=a*3,c=n-e,h=(t-e)/c,u=h*h,d=u*h,f=s*l,p=f-l,_=-2*d+3*u,v=d-u,m=1-_,g=v-u+h;for(let x=0;x!==a;x++){const M=r[p+x+a],w=r[p+x+o]*c,y=r[f+x+a],A=r[f+x]*c;i[x]=m*M+g*w+_*y+v*A}return i};const pn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},rs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Fh={9728:ct,9729:ft,9984:Do,9985:su,9986:No,9987:tr},Rh={33071:Tt,33648:oa,10497:at},Ih={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Zo={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Dn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Xy={CUBICSPLINE:void 0,LINEAR:Xi,STEP:Xr},Ao={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Dh(s,e){return typeof s!="string"||s===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(s)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(s)||/^data:.*,.*$/i.test(s)||/^blob:.*$/i.test(s)?s:e+s)}function Yy(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new di({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Wi})),s.DefaultMaterial}function Lr(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ni(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function jy(s,e,t){let n=!1,i=!1;for(let o=0,l=e.length;o<l;o++){const c=e[o];if(c.POSITION!==void 0&&(n=!0),c.NORMAL!==void 0&&(i=!0),n&&i)break}if(!n&&!i)return Promise.resolve(s);const r=[],a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];if(n){const h=c.POSITION!==void 0?t.getDependency("accessor",c.POSITION):s.attributes.position;r.push(h)}if(i){const h=c.NORMAL!==void 0?t.getDependency("accessor",c.NORMAL):s.attributes.normal;a.push(h)}}return Promise.all([Promise.all(r),Promise.all(a)]).then(function(o){const l=o[0],c=o[1];return n&&(s.morphAttributes.position=l),i&&(s.morphAttributes.normal=c),s.morphTargetsRelative=!0,s})}function Qy(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function qy(s){const e=s.extensions&&s.extensions[ke.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+Nh(e.attributes):t=s.indices+":"+Nh(s.attributes)+":"+s.mode,t}function Nh(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Ko(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}class Jy{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Ry,this.associations=new Map,this.primitiveCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.textureCache={},this.nodeNamesUsed={},typeof createImageBitmap<"u"&&/Firefox/.test(navigator.userAgent)===!1?this.textureLoader=new $u(this.options.manager):this.textureLoader=new fi(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Da(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};Lr(r,o,i),ni(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone();return i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this.loadNode(t);break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this.loadAnimation(t);break;case"camera":i=this.loadCamera(t);break;default:throw new Error("Unknown type: "+e)}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ke.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,a){n.load(Dh(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0)return Promise.resolve(null);const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],l=Ih[i.type],c=rs[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,p=i.normalized===!0;let _,v;if(f&&f!==u){const m=Math.floor(d/f),g="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+m+":"+i.count;let x=t.cache.get(g);x||(_=new c(o,m*f,i.count*f/h),x=new rr(_,f/h),t.cache.add(g,x)),v=new ji(x,l,d%f/h,p)}else o===null?_=new c(i.count*l):_=new c(o,d,i.count*l),v=new $e(_,l,p);if(i.sparse!==void 0){const m=Ih.SCALAR,g=rs[i.sparse.indices.componentType],x=i.sparse.indices.byteOffset||0,M=i.sparse.values.byteOffset||0,w=new g(a[1],x,i.sparse.count*m),y=new c(a[2],M,i.sparse.count*l);o!==null&&(v=new $e(v.array.slice(),v.itemSize,v.normalized));for(let A=0,E=w.length;A<E;A++){const D=w[A];if(v.setX(D,y[A*l]),l>=2&&v.setY(D,y[A*l+1]),l>=3&&v.setZ(D,y[A*l+2]),l>=4&&v.setW(D,y[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return v})}loadTexture(e){const t=this.json,n=this.options,i=t.textures[e],r=t.images[i.source];let a=this.textureLoader;if(r.uri){const o=n.manager.getHandler(r.uri);o!==null&&(a=o)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,a=this.options,o=r.textures[e],l=(t.uri||t.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=self.URL||self.webkitURL;let h=t.uri||"",u=!1,d=!0;const f=h.search(/\.jpe?g($|\?)/i)>0||h.search(/^data\:image\/jpeg/)===0;if((t.mimeType==="image/jpeg"||f)&&(d=!1),t.bufferView!==void 0)h=i.getDependency("bufferView",t.bufferView).then(function(_){if(t.mimeType==="image/png"){const m=new DataView(_,25,1).getUint8(0,!1);d=m===6||m===4||m===3}u=!0;const v=new Blob([_],{type:t.mimeType});return h=c.createObjectURL(v),h});else if(t.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const p=Promise.resolve(h).then(function(_){return new Promise(function(v,m){let g=v;n.isImageBitmapLoader===!0&&(g=function(x){const M=new lt(x);M.needsUpdate=!0,v(M)}),n.load(Dh(_,a.path),g,void 0,m)})}).then(function(_){u===!0&&c.revokeObjectURL(h),_.flipY=!1,o.name&&(_.name=o.name),d||(_.format=Un);const m=(r.samplers||{})[o.sampler]||{};return _.magFilter=Fh[m.magFilter]||ft,_.minFilter=Fh[m.minFilter]||tr,_.wrapS=Rh[m.wrapS]||at,_.wrapT=Rh[m.wrapT]||at,i.associations.set(_,{type:"textures",index:e}),_}).catch(function(){return console.error("THREE.GLTFLoader: Couldn't load texture",h),null});return this.textureCache[l]=p,p}assignTexture(e,t,n){const i=this;return this.getDependency("texture",n.index).then(function(r){if(n.texCoord!==void 0&&n.texCoord!=0&&!(t==="aoMap"&&n.texCoord==1)&&console.warn("THREE.GLTFLoader: Custom UV set "+n.texCoord+" for texture "+t+" not yet supported."),i.extensions[ke.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[ke.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const o=i.associations.get(r);r=i.extensions[ke.KHR_TEXTURE_TRANSFORM].extendTexture(r,a),i.associations.set(r,o)}}e[t]=r})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent!==void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0,o=Object.keys(t.morphAttributes).length>0,l=o&&t.morphAttributes.normal!==void 0;if(e.isPoints){const c="PointsMaterial:"+n.uuid;let h=this.cache.get(c);h||(h=new ul,_t.prototype.copy.call(h,n),h.color.copy(n.color),h.map=n.map,h.sizeAttenuation=!1,this.cache.add(c,h)),n=h}else if(e.isLine){const c="LineBasicMaterial:"+n.uuid;let h=this.cache.get(c);h||(h=new ui,_t.prototype.copy.call(h,n),h.color.copy(n.color),this.cache.add(c,h)),n=h}if(i||r||a||o){let c="ClonedMaterial:"+n.uuid+":";n.isGLTFSpecularGlossinessMaterial&&(c+="specular-glossiness:"),i&&(c+="vertex-tangents:"),r&&(c+="vertex-colors:"),a&&(c+="flat-shading:"),o&&(c+="morph-targets:"),l&&(c+="morph-normals:");let h=this.cache.get(c);h||(h=n.clone(),r&&(h.vertexColors=!0),a&&(h.flatShading=!0),o&&(h.morphTargets=!0),l&&(h.morphNormals=!0),i&&(h.vertexTangents=!0,h.normalScale&&(h.normalScale.y*=-1),h.clearcoatNormalScale&&(h.clearcoatNormalScale.y*=-1)),this.cache.add(c,h),this.associations.set(h,this.associations.get(n))),n=h}n.aoMap&&t.attributes.uv2===void 0&&t.attributes.uv!==void 0&&t.setAttribute("uv2",t.attributes.uv),e.material=n}getMaterialType(){return di}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let a;const o={},l=r.extensions||{},c=[];if(l[ke.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS]){const u=i[ke.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS];a=u.getMaterialType(),c.push(u.extendParams(o,r,t))}else if(l[ke.KHR_MATERIALS_UNLIT]){const u=i[ke.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,r,t))}else{const u=r.pbrMetallicRoughness||{};if(o.color=new J(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;o.color.fromArray(d),o.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=kn);const h=r.alphaMode||Ao.OPAQUE;return h===Ao.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Ao.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==$t&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new X(1,-1),r.normalTexture.scale!==void 0&&o.normalScale.set(r.normalTexture.scale,-r.normalTexture.scale)),r.occlusionTexture!==void 0&&a!==$t&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==$t&&(o.emissive=new J().fromArray(r.emissiveFactor)),r.emissiveTexture!==void 0&&a!==$t&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture)),Promise.all(c).then(function(){let u;return a===Jo?u=i[ke.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].createMaterial(o):u=new a(o),r.name&&(u.name=r.name),u.map&&(u.map.encoding=Rt),u.emissiveMap&&(u.emissiveMap.encoding=Rt),ni(u,r),t.associations.set(u,{type:"materials",index:e}),r.extensions&&Lr(i,u,r),u})}createUniqueName(e){const t=ze.sanitizeNodeName(e||"");let n=t;for(let i=1;this.nodeNamesUsed[n];++i)n=t+"_"+i;return this.nodeNamesUsed[n]=!0,n}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[ke.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Uh(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],h=qy(c),u=i[h];if(u)a.push(u.promise);else{let d;c.extensions&&c.extensions[ke.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=Uh(new De,c,t),i[h]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const h=a[l].material===void 0?Yy(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,p=h.length;f<p;f++){const _=h[f],v=a[f];let m;const g=c[f];if(v.mode===pn.TRIANGLES||v.mode===pn.TRIANGLE_STRIP||v.mode===pn.TRIANGLE_FAN||v.mode===void 0)m=r.isSkinnedMesh===!0?new La(_,g):new Ke(_,g),m.isSkinnedMesh===!0&&!m.geometry.attributes.skinWeight.normalized&&m.normalizeSkinWeights(),v.mode===pn.TRIANGLE_STRIP?m.geometry=Bh(m.geometry,Up):v.mode===pn.TRIANGLE_FAN&&(m.geometry=Bh(m.geometry,ou));else if(v.mode===pn.LINES)m=new Ca(_,g);else if(v.mode===pn.LINE_STRIP)m=new os(_,g);else if(v.mode===pn.LINE_LOOP)m=new Ru(_,g);else if(v.mode===pn.POINTS)m=new Iu(_,g);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+v.mode);Object.keys(m.geometry.morphAttributes).length>0&&Qy(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),ni(m,r),v.extensions&&Lr(i,m,v),t.assignFinalMaterial(m),u.push(m)}if(u.length===1)return u[0];const d=new ut;for(let f=0,p=u.length;f<p;f++)d.add(u[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new yt(Kt.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new pi(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ni(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n={joints:t.joints};return t.inverseBindMatrices===void 0?Promise.resolve(n):this.getDependency("accessor",t.inverseBindMatrices).then(function(i){return n.inverseBindMatrices=i,n})}loadAnimation(e){const n=this.json.animations[e],i=[],r=[],a=[],o=[],l=[];for(let c=0,h=n.channels.length;c<h;c++){const u=n.channels[c],d=n.samplers[u.sampler],f=u.target,p=f.node!==void 0?f.node:f.id,_=n.parameters!==void 0?n.parameters[d.input]:d.input,v=n.parameters!==void 0?n.parameters[d.output]:d.output;i.push(this.getDependency("node",p)),r.push(this.getDependency("accessor",_)),a.push(this.getDependency("accessor",v)),o.push(d),l.push(f)}return Promise.all([Promise.all(i),Promise.all(r),Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2],f=c[3],p=c[4],_=[];for(let m=0,g=h.length;m<g;m++){const x=h[m],M=u[m],w=d[m],y=f[m],A=p[m];if(x===void 0)continue;x.updateMatrix(),x.matrixAutoUpdate=!0;let E;switch(Dn[A.path]){case Dn.weights:E=Qi;break;case Dn.rotation:E=Wn;break;case Dn.position:case Dn.scale:default:E=oi;break}const D=x.name?x.name:x.uuid,R=y.interpolation!==void 0?Xy[y.interpolation]:Xi,z=[];Dn[A.path]===Dn.weights?x.traverse(function(F){F.isMesh===!0&&F.morphTargetInfluences&&z.push(F.name?F.name:F.uuid)}):z.push(D);let H=w.array;if(w.normalized){const F=Ko(H.constructor),I=new Float32Array(H.length);for(let C=0,P=H.length;C<P;C++)I[C]=H[C]*F;H=I}for(let F=0,I=z.length;F<I;F++){const C=new E(z[F]+"."+Dn[A.path],M.array,H,R);y.interpolation==="CUBICSPLINE"&&(C.createInterpolant=function(B){return new $i(this.times,this.values,this.getValueSize()/3,B)},C.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),_.push(C)}}const v=n.name?n.name:"animation_"+e;return new $r(v,void 0,_)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){const t=this.json,n=this.extensions,i=this,r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"";return function(){const o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),Promise.all(o)}().then(function(o){let l;if(r.isBone===!0?l=new qr:o.length>1?l=new ut:o.length===1?l=o[0]:l=new Ne,l!==o[0])for(let c=0,h=o.length;c<h;c++)l.add(o[c]);if(r.name&&(l.userData.name=r.name,l.name=a),ni(l,r),r.extensions&&Lr(n,l,r),r.matrix!==void 0){const c=new ee;c.fromArray(r.matrix),l.applyMatrix4(c)}else r.translation!==void 0&&l.position.fromArray(r.translation),r.rotation!==void 0&&l.quaternion.fromArray(r.rotation),r.scale!==void 0&&l.scale.fromArray(r.scale);return i.associations.set(l,{type:"nodes",index:e}),l})}loadScene(e){const t=this.json,n=this.extensions,i=this.json.scenes[e],r=this,a=new ut;i.name&&(a.name=r.createUniqueName(i.name)),ni(a,i),i.extensions&&Lr(n,a,i);const o=i.nodes||[],l=[];for(let c=0,h=o.length;c<h;c++)l.push(Xd(o[c],a,t,r));return Promise.all(l).then(function(){return a})}}function Xd(s,e,t,n){const i=t.nodes[s];return n.getDependency("node",s).then(function(r){if(i.skin===void 0)return r;let a;return n.getDependency("skin",i.skin).then(function(o){a=o;const l=[];for(let c=0,h=a.joints.length;c<h;c++)l.push(n.getDependency("node",a.joints[c]));return Promise.all(l)}).then(function(o){return r.traverse(function(l){if(!l.isMesh)return;const c=[],h=[];for(let u=0,d=o.length;u<d;u++){const f=o[u];if(f){c.push(f);const p=new ee;a.inverseBindMatrices!==void 0&&p.fromArray(a.inverseBindMatrices.array,u*16),h.push(p)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',a.joints[u])}l.bind(new Pa(c,h),l.matrixWorld)}),r})}).then(function(r){e.add(r);const a=[];if(i.children){const o=i.children;for(let l=0,c=o.length;l<c;l++){const h=o[l];a.push(Xd(h,r,t,n))}}return Promise.all(a)})}function Zy(s,e,t){const n=e.attributes,i=new kt;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new S(l[0],l[1],l[2]),new S(c[0],c[1],c[2])),o.normalized){const h=Ko(rs[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new S,l=new S;for(let c=0,h=r.length;c<h;c++){const u=r[c];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,p=d.max;if(f!==void 0&&p!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(p[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(p[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(p[2]))),d.normalized){const _=Ko(rs[d.componentType]);l.multiplyScalar(_)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;const a=new Vn;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function Uh(s,e,t){const n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){s.setAttribute(o,l)})}for(const a in n){const o=Zo[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){const a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return ni(s,e),Zy(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?jy(s,e.targets,t):s})}function Bh(s,e){let t=s.getIndex();if(t===null){const a=[],o=s.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);s.setIndex(a),t=s.getIndex()}else return console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===ou)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r}class Qs{static retarget(e,t,n={}){const i=new S,r=new Ve,a=new S,o=new ee,l=new ee,c=new ee;n.preserveMatrix=n.preserveMatrix!==void 0?n.preserveMatrix:!0,n.preservePosition=n.preservePosition!==void 0?n.preservePosition:!0,n.preserveHipPosition=n.preserveHipPosition!==void 0?n.preserveHipPosition:!1,n.useTargetMatrix=n.useTargetMatrix!==void 0?n.useTargetMatrix:!1,n.hip=n.hip!==void 0?n.hip:"hip",n.names=n.names||{};const h=t.isObject3D?t.skeleton.bones:this.getBones(t),u=e.isObject3D?e.skeleton.bones:this.getBones(e);let d,f,p,_,v;if(e.isObject3D?e.skeleton.pose():(n.useTargetMatrix=!0,n.preserveMatrix=!1),n.preservePosition){v=[];for(let m=0;m<u.length;m++)v.push(u[m].position.clone())}if(n.preserveMatrix){e.updateMatrixWorld(),e.matrixWorld.identity();for(let m=0;m<e.children.length;++m)e.children[m].updateMatrixWorld(!0)}if(n.offsets){d=[];for(let m=0;m<u.length;++m)f=u[m],p=n.names[f.name]||f.name,n.offsets&&n.offsets[p]&&(f.matrix.multiply(n.offsets[p]),f.matrix.decompose(f.position,f.quaternion,f.scale),f.updateMatrixWorld()),d.push(f.matrixWorld.clone())}for(let m=0;m<u.length;++m){if(f=u[m],p=n.names[f.name]||f.name,_=this.getBoneByName(p,h),c.copy(f.matrixWorld),_){if(_.updateMatrixWorld(),n.useTargetMatrix?l.copy(_.matrixWorld):(l.copy(e.matrixWorld).invert(),l.multiply(_.matrixWorld)),a.setFromMatrixScale(l),l.scale(a.set(1/a.x,1/a.y,1/a.z)),c.makeRotationFromQuaternion(r.setFromRotationMatrix(l)),e.isObject3D){const g=u.indexOf(f),x=d?d[g]:o.copy(e.skeleton.boneInverses[g]).invert();c.multiply(x)}c.copyPosition(l)}f.parent&&f.parent.isBone?(f.matrix.copy(f.parent.matrixWorld).invert(),f.matrix.multiply(c)):f.matrix.copy(c),n.preserveHipPosition&&p===n.hip&&f.matrix.setPosition(i.set(0,f.position.y,0)),f.matrix.decompose(f.position,f.quaternion,f.scale),f.updateMatrixWorld()}if(n.preservePosition)for(let m=0;m<u.length;++m)f=u[m],p=n.names[f.name]||f.name,p!==n.hip&&f.position.copy(v[m]);n.preserveMatrix&&e.updateMatrixWorld(!0)}static retargetClip(e,t,n,i={}){i.useFirstFramePosition=i.useFirstFramePosition!==void 0?i.useFirstFramePosition:!1,i.fps=i.fps!==void 0?i.fps:30,i.names=i.names||[],t.isObject3D||(t=this.getHelperFromSkeleton(t));const r=Math.round(n.duration*(i.fps/1e3)*1e3),a=1/i.fps,o=[],l=new Cl(t),c=this.getBones(e.skeleton),h=[];let u,d,f,p,_;l.clipAction(n).play(),l.update(0),t.updateMatrixWorld();for(let v=0;v<r;++v){const m=v*a;this.retarget(e,t,i);for(let g=0;g<c.length;++g)_=i.names[c[g].name]||c[g].name,f=this.getBoneByName(_,t.skeleton),f&&(d=c[g],p=h[g]=h[g]||{bone:d},i.hip===_&&(p.pos||(p.pos={times:new Float32Array(r),values:new Float32Array(r*3)}),i.useFirstFramePosition&&(v===0&&(u=d.position.clone()),d.position.sub(u)),p.pos.times[v]=m,d.position.toArray(p.pos.values,v*3)),p.quat||(p.quat={times:new Float32Array(r),values:new Float32Array(r*4)}),p.quat.times[v]=m,d.quaternion.toArray(p.quat.values,v*4));l.update(a),t.updateMatrixWorld()}for(let v=0;v<h.length;++v)p=h[v],p&&(p.pos&&o.push(new oi(".bones["+p.bone.name+"].position",p.pos.times,p.pos.values)),o.push(new Wn(".bones["+p.bone.name+"].quaternion",p.quat.times,p.quat.values)));return l.uncacheAction(n),new $r(n.name,-1,o)}static getHelperFromSkeleton(e){const t=new id(e.bones[0]);return t.skeleton=e,t}static getSkeletonOffsets(e,t,n={}){const i=new S,r=new S,a=new S,o=new S,l=new X,c=new X;n.hip=n.hip!==void 0?n.hip:"hip",n.names=n.names||{},t.isObject3D||(t=this.getHelperFromSkeleton(t));const h=Object.keys(n.names),u=Object.values(n.names),d=t.isObject3D?t.skeleton.bones:this.getBones(t),f=e.isObject3D?e.skeleton.bones:this.getBones(e),p=[];let _,v,m,g;for(e.skeleton.pose(),g=0;g<f.length;++g)if(_=f[g],m=n.names[_.name]||_.name,v=this.getBoneByName(m,d),v&&m!==n.hip){const x=this.getNearestBone(_.parent,h),M=this.getNearestBone(v.parent,u);x.updateMatrixWorld(),M.updateMatrixWorld(),i.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(_.matrixWorld),a.setFromMatrixPosition(M.matrixWorld),o.setFromMatrixPosition(v.matrixWorld),l.subVectors(new X(r.x,r.y),new X(i.x,i.y)).normalize(),c.subVectors(new X(o.x,o.y),new X(a.x,a.y)).normalize();const w=l.angle()-c.angle(),y=new ee().makeRotationFromEuler(new Ot(0,0,w));_.matrix.multiply(y),_.matrix.decompose(_.position,_.quaternion,_.scale),_.updateMatrixWorld(),p[m]=y}return p}static renameBones(e,t){const n=this.getBones(e);for(let i=0;i<n.length;++i){const r=n[i];t[r.name]&&(r.name=t[r.name])}return this}static getBones(e){return Array.isArray(e)?e:e.bones}static getBoneByName(e,t){for(let n=0,i=this.getBones(t);n<i.length;n++)if(e===i[n].name)return i[n]}static getNearestBone(e,t){for(;e.isBone;){if(t.indexOf(e.name)!==-1)return e;e=e.parent}}static findBoneTrackData(e,t){const n=/\[(.*)\]\.(.*)/,i={name:e};for(let r=0;r<t.length;++r){const a=n.exec(t[r].name);a&&e===a[1]&&(i[a[2]]=r)}return i}static getEqualsBonesNames(e,t){const n=this.getBones(e),i=this.getBones(t),r=[];e:for(let a=0;a<n.length;a++){const o=n[a].name;for(let l=0;l<i.length;l++)if(o===i[l].name){r.push(o);continue e}}return r}static clone(e){const t=new Map,n=new Map,i=e.clone();return Yd(e,i,function(r,a){t.set(a,r),n.set(r,a)}),i.traverse(function(r){if(!r.isSkinnedMesh)return;const a=r,o=t.get(r),l=o.skeleton.bones;a.skeleton=o.skeleton.clone(),a.bindMatrix.copy(o.bindMatrix),a.skeleton.bones=l.map(function(c){return n.get(c)}),a.bind(a.skeleton,a.bindMatrix)}),i}}function Yd(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)Yd(s.children[n],e.children[n],t)}class Ky extends De{constructor(e,t,n,i){super();const r=[],a=[],o=[],l=new S,c=new ee;c.makeRotationFromEuler(n),c.setPosition(t);const h=new ee;h.copy(c).invert(),u(),this.setAttribute("position",new Me(r,3)),this.setAttribute("normal",new Me(a,3)),this.setAttribute("uv",new Me(o,2));function u(){let _=[];const v=new S,m=new S;if(e.geometry.isGeometry===!0){console.error("THREE.DecalGeometry no longer supports THREE.Geometry. Use BufferGeometry instead.");return}const g=e.geometry,x=g.attributes.position,M=g.attributes.normal;if(g.index!==null){const w=g.index;for(let y=0;y<w.count;y++)v.fromBufferAttribute(x,w.getX(y)),m.fromBufferAttribute(M,w.getX(y)),d(_,v,m)}else for(let w=0;w<x.count;w++)v.fromBufferAttribute(x,w),m.fromBufferAttribute(M,w),d(_,v,m);_=f(_,l.set(1,0,0)),_=f(_,l.set(-1,0,0)),_=f(_,l.set(0,1,0)),_=f(_,l.set(0,-1,0)),_=f(_,l.set(0,0,1)),_=f(_,l.set(0,0,-1));for(let w=0;w<_.length;w++){const y=_[w];o.push(.5+y.position.x/i.x,.5+y.position.y/i.y),y.position.applyMatrix4(c),r.push(y.position.x,y.position.y,y.position.z),a.push(y.normal.x,y.normal.y,y.normal.z)}}function d(_,v,m){v.applyMatrix4(e.matrixWorld),v.applyMatrix4(h),m.transformDirection(e.matrixWorld),_.push(new Oh(v.clone(),m.clone()))}function f(_,v){const m=[],g=.5*Math.abs(i.dot(v));for(let x=0;x<_.length;x+=3){let M=0,w,y,A,E;const D=_[x+0].position.dot(v)-g,R=_[x+1].position.dot(v)-g,z=_[x+2].position.dot(v)-g,H=D>0,F=R>0,I=z>0;switch(M=(H?1:0)+(F?1:0)+(I?1:0),M){case 0:{m.push(_[x]),m.push(_[x+1]),m.push(_[x+2]);break}case 1:{if(H&&(w=_[x+1],y=_[x+2],A=p(_[x],w,v,g),E=p(_[x],y,v,g)),F){w=_[x],y=_[x+2],A=p(_[x+1],w,v,g),E=p(_[x+1],y,v,g),m.push(A),m.push(y.clone()),m.push(w.clone()),m.push(y.clone()),m.push(A.clone()),m.push(E);break}I&&(w=_[x],y=_[x+1],A=p(_[x+2],w,v,g),E=p(_[x+2],y,v,g)),m.push(w.clone()),m.push(y.clone()),m.push(A),m.push(E),m.push(A.clone()),m.push(y.clone());break}case 2:{H||(w=_[x].clone(),y=p(w,_[x+1],v,g),A=p(w,_[x+2],v,g),m.push(w),m.push(y),m.push(A)),F||(w=_[x+1].clone(),y=p(w,_[x+2],v,g),A=p(w,_[x],v,g),m.push(w),m.push(y),m.push(A)),I||(w=_[x+2].clone(),y=p(w,_[x],v,g),A=p(w,_[x+1],v,g),m.push(w),m.push(y),m.push(A));break}}}return m}function p(_,v,m,g){const x=_.position.dot(m)-g,M=v.position.dot(m)-g,w=x/(x-M);return new Oh(new S(_.position.x+w*(v.position.x-_.position.x),_.position.y+w*(v.position.y-_.position.y),_.position.z+w*(v.position.z-_.position.z)),new S(_.normal.x+w*(v.normal.x-_.normal.x),_.normal.y+w*(v.normal.y-_.normal.y),_.normal.z+w*(v.normal.z-_.normal.z)))}}}class Oh{constructor(e,t){this.position=e,this.normal=t}clone(){return new this.constructor(this.position.clone(),this.normal.clone())}}const jd=`
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
	`,Qd=`
		vec3 transformed;

		// Get the normal
		${gn.skinbase_vertex}
		${gn.beginnormal_vertex}
		${gn.skinnormal_vertex}
		${gn.defaultnormal_vertex}

		// Get the current vertex position
		transformed = vec3( position );
		${gn.skinning_vertex}
		newPosition = modelViewMatrix * vec4(transformed, 1.0);

		// Get the previous vertex position
		transformed = vec3( position );
		${gn.skinbase_vertex.replace(/mat4 /g,"").replace(/getBoneMatrix/g,"getPrevBoneMatrix")}
		${gn.skinning_vertex.replace(/vec4 /g,"")}
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

	`,$y={uniforms:{prevProjectionMatrix:{value:new si},prevModelViewMatrix:{value:new si},prevBoneTexture:{value:null},expandGeometry:{value:0},interpolateGeometry:{value:1},smearIntensity:{value:1}},vertexShader:`
			${gn.skinning_pars_vertex}
			${jd}

			uniform mat4 prevProjectionMatrix;
			uniform mat4 prevModelViewMatrix;
			uniform float expandGeometry;
			uniform float interpolateGeometry;
			varying vec4 prevPosition;
			varying vec4 newPosition;

			void main() {

				${Qd}

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
		`},ew={uniforms:{prevProjectionMatrix:{value:new si},prevModelViewMatrix:{value:new si},prevBoneTexture:{value:null},expandGeometry:{value:0},interpolateGeometry:{value:1},smearIntensity:{value:1}},vertexShader:`
			${gn.skinning_pars_vertex}
			${jd}

			uniform mat4 prevProjectionMatrix;
			uniform mat4 prevModelViewMatrix;
			uniform float expandGeometry;
			uniform float interpolateGeometry;
			varying vec4 prevPosition;
			varying vec4 newPosition;
			varying vec3 color;

			void main() {

				${Qd}

				color = (modelViewMatrix * vec4(normal.xyz, 0)).xyz;
				color = normalize(color);

			}
		`,fragmentShader:`
			varying vec3 color;

			void main() {
				gl_FragColor = vec4(color, 1);
			}
		`},tw={defines:{SAMPLES:30,JITTER_STRATEGY:1,BLUENOISE_SIZE:"32.0"},uniforms:{sourceBuffer:{value:null},velocityBuffer:{value:null},jitter:{value:1},blueNoiseTex:{value:null}},vertexShader:`
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
		`};function nw(s,e=Math.random){for(let t=s.length-1;t>0;t--){const n=~~((e()-1e-6)*t),i=s[t];s[t]=s[n],s[n]=i}}function iw(s,e){s.fill(0);for(let t=0;t<e;t++)s[t]=1}class zh{constructor(e){this.count=0,this.size=-1,this.sigma=-1,this.radius=-1,this.lookupTable=null,this.score=null,this.binaryPattern=null,this.resize(e),this.setSigma(1.5)}findVoid(){const{score:e,binaryPattern:t}=this;let n=1/0,i=-1;for(let r=0,a=t.length;r<a;r++){if(t[r]!==0)continue;const o=e[r];o<n&&(n=o,i=r)}return i}findCluster(){const{score:e,binaryPattern:t}=this;let n=-1/0,i=-1;for(let r=0,a=t.length;r<a;r++){if(t[r]!==1)continue;const o=e[r];o>n&&(n=o,i=r)}return i}setSigma(e){if(e===this.sigma)return;const t=~~(Math.sqrt(10*2*e**2)+1),n=2*t+1,i=new Float32Array(n*n),r=e*e;for(let a=-t;a<=t;a++)for(let o=-t;o<=t;o++){const l=(t+o)*n+a+t,c=a*a+o*o;i[l]=Math.E**(-c/(2*r))}this.lookupTable=i,this.sigma=e,this.radius=t}resize(e){this.size!==e&&(this.size=e,this.score=new Float32Array(e*e),this.binaryPattern=new Uint8Array(e*e))}invert(){const{binaryPattern:e,score:t,size:n}=this;t.fill(0);for(let i=0,r=e.length;i<r;i++)if(e[i]===0){const a=~~(i/n),o=i-a*n;this.updateScore(o,a,1),e[i]=1}else e[i]=0}updateScore(e,t,n){const{size:i,score:r,lookupTable:a}=this,o=this.radius,l=2*o+1;for(let c=-o;c<=o;c++)for(let h=-o;h<=o;h++){const u=(o+h)*l+c+o,d=a[u];let f=e+c;f=f<0?i+f:f%i;let p=t+h;p=p<0?i+p:p%i;const _=p*i+f;r[_]+=n*d}}addPointIndex(e){this.binaryPattern[e]=1;const t=this.size,n=~~(e/t),i=e-n*t;this.updateScore(i,n,1),this.count++}removePointIndex(e){this.binaryPattern[e]=0;const t=this.size,n=~~(e/t),i=e-n*t;this.updateScore(i,n,-1),this.count--}copy(e){this.resize(e.size),this.score.set(e.score),this.binaryPattern.set(e.binaryPattern),this.setSigma(e.sigma),this.count=e.count}}class qd{constructor(){this.random=Math.random,this.sigma=1.5,this.size=64,this.majorityPointsRatio=.1,this.samples=new zh(1),this.savedSamples=new zh(1)}generate(){const{samples:e,savedSamples:t,sigma:n,majorityPointsRatio:i,size:r}=this;e.resize(r),e.setSigma(n);const a=Math.floor(r*r*i),o=e.binaryPattern;console.time("Array Initialization"),iw(o,a),nw(o,this.random),console.timeEnd("Array Initialization"),console.time("Score Initialization");for(let u=0,d=o.length;u<d;u++)o[u]===1&&e.addPointIndex(u);for(console.timeEnd("Score Initialization"),console.time("Point Rearrangement");;){const u=e.findCluster();e.removePointIndex(u);const d=e.findVoid();if(u===d){e.addPointIndex(u);break}e.addPointIndex(d)}console.timeEnd("Point Rearrangement");const l=new Uint32Array(r*r);t.copy(e),console.time("Dither Array Phase 1");let c;for(c=e.count-1;c>=0;){const u=e.findCluster();e.removePointIndex(u),l[u]=c,c--}console.timeEnd("Dither Array Phase 1"),console.time("Dither Array Phase 2");const h=r*r;for(c=t.count;c<h/2;){const u=t.findVoid();t.addPointIndex(u),l[u]=c,c++}for(console.timeEnd("Dither Array Phase 2"),console.time("Samples Invert"),t.invert(),console.timeEnd("Samples Invert"),console.time("Dither Array Phase 3");c<h;){const u=t.findCluster();t.removePointIndex(u),l[u]=c,c++}return console.timeEnd("Dither Array Phase 3"),{data:l,maxValue:h}}}class Jd{constructor(){this.clearAlpha=0,this.clearColor=new ss,this.renderTarget=null,this.outputEncoding=hf,this.overrideMaterial=null,this.shadowsEnabled=!1,this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.background=null,this.autoUpdate=!0}copy(e,t){e&&(this.clearAlpha=e.getClearAlpha(),this.clearColor=e.getClearColor(this.clearColor),this.renderTarget=e.getRenderTarget(),this.shadowsEnabled=e.shadowMap.enabled,this.outputEncoding=e.outputEncoding,this.autoClear=e.autoClear,this.autoClearColor=e.autoClearColor,this.autoClearDepth=e.autoClearDepth,this.autoClearStencil=e.autoClearStencil),t&&(this.overrideMaterial=t.overrideMaterial,this.background=t.background,this.autoUpdate=t.autoUpdate)}restore(e,t){e&&(e.setClearAlpha(this.clearAlpha),e.setClearColor(this.clearColor),e.setRenderTarget(this.renderTarget),e.shadowMap.enabled=this.shadowsEnabled,e.outputEncoding=this.outputEncoding,e.autoClear=this.autoClear,e.autoClearColor=this.autoClearColor,e.autoClearDepth=this.autoClearDepth,e.autoClearStencil=this.autoClearStencil),t&&(t.overrideMaterial=this.overrideMaterial,t.background=this.background,t.autoUpdate=this.autoUpdate),this.renderTarget=null,this.overrideMaterial=null}}function Zd(s,e){if(s.visible){(s.isMesh||s.isSkinnedMesh)&&e(s);const t=s.children;for(let n=0,i=t.length;n<i;n++)Zd(t[n],e)}}const rw=new ss(0,0,0),sw={},kh=new Jd,Sa=new qd;Sa.size=32;const Kd=new Uint8Array(32**2*4);for(let s=0,e=1;s<e;s++){const t=Sa.generate(),n=t.data,i=t.maxValue;for(let r=0,a=n.length;r<a;r++){const o=255*(n[r]/i);Kd[r*3+s]=o}}const Ua=new $o(Kd,Sa.size,Sa.size,Qh);Ua.wrapS=Aa;Ua.wrapT=Aa;Ua.minFilter=ra;class xt extends Jh{get enabled(){return this._enabled}set enabled(e){e===!1&&(this._prevPosMap.clear(),this._cameraMatricesNeedInitializing=!0),this._enabled=e}constructor(e,t,n={}){super(),this.enabled=!0,this.needsSwap=!0,this.samples="samples"in n?n.samples:15,this.expandGeometry="expandGeometry"in n?n.expandGeometry:0,this.interpolateGeometry="interpolateGeometry"in n?n.interpolateGeometry:1,this.smearIntensity="smearIntensity"in n?n.smearIntensity:1,this.blurTransparent="blurTransparent"in n?n.blurTransparent:!1,this.renderCameraBlur="renderCameraBlur"in n?n.renderCameraBlur:!0,this.renderTargetScale="renderTargetScale"in n?n.renderTargetScale:1,this.jitter="jitter"in n?n.jitter:1,this.jitterStrategy="jitterStrategy"in n?n.jitterStrategy:xt.RANDOM_JITTER,this.debug={display:xt.DEFAULT,dontUpdateState:!1},this.scene=e,this.camera=t,this._prevPosMap=new Map,this._currentFrameMod=0,this._frustum=new uf,this._projScreenMatrix=new si,this._cameraMatricesNeedInitializing=!0,this._prevCamProjection=new si,this._prevCamWorldInverse=new si,this._velocityBuffer=new Zs(256,256,{minFilter:ra,magFilter:ra,format:Vr,type:qh}),this._velocityBuffer.texture.name="MotionBlurPass.Velocity",this._velocityBuffer.texture.generateMipmaps=!1,this._compositeMaterial=new Nn(tw),this._compositeQuad=new Cr(this._compositeMaterial)}dispose(){this._compositeQuad.dispose(),this._velocityBuffer.dispose(),this._prevPosMap.clear()}setSize(e,t){const n=this.renderTargetScale;this._velocityBuffer.setSize(e*n,t*n)}render(e,t,n){const i=this.debug,r=this.scene,a=this.camera,o=this._compositeQuad,l=this.renderToScreen?null:t;switch(kh.copy(e,r),e.autoClear=!1,e.setClearColor(rw,0),e.compile(r,a),this._ensurePrevCameraTransform(),i.display){case xt.GEOMETRY:{e.setRenderTarget(l),e.clear(),this._drawAllMeshes(e,xt.GEOMETRY,!i.dontUpdateState);break}case xt.VELOCITY:{e.setRenderTarget(l),e.clear(),this._drawAllMeshes(e,xt.VELOCITY,!i.dontUpdateState);break}case xt.DEFAULT:{const c=this._velocityBuffer;e.setRenderTarget(c),e.clear(),this._drawAllMeshes(e,xt.VELOCITY,!i.dontUpdateState);const h=this._compositeMaterial,u=h.uniforms;u.sourceBuffer.value=n.texture,u.velocityBuffer.value=this._velocityBuffer.texture,u.jitter.value=this.jitter,u.blueNoiseTex.value=Ua,h.defines.SAMPLES!==this.samples&&(h.defines.SAMPLES=Math.max(0,Math.floor(this.samples)),h.needsUpdate=!0),h.defines.JITTER_STRATEGY!==this.jitterStrategy&&(h.defines.JITTER_STRATEGY=this.jitterStrategy,h.needsUpdate=!0),e.setRenderTarget(l),o.render(e);break}}this._prevCamWorldInverse.copy(a.matrixWorldInverse),this._prevCamProjection.copy(a.projectionMatrix),kh.restore(e,r)}_getPreviousFrameState(e){const t=this._prevPosMap;let n=t.get(e);n===void 0&&(n={lastUsedFrame:-1,matrixWorld:e.matrixWorld.clone(),geometryMaterial:new Nn(ew),velocityMaterial:new Nn($y),boneMatrices:null,boneTexture:null},t.set(e,n));const i=e.type==="SkinnedMesh"&&e.skeleton&&e.skeleton.bones&&e.skeleton.boneMatrices;n.geometryMaterial.skinning=i,n.velocityMaterial.skinning=i;const r=e.skeleton,a=n.boneMatrices===null||n.boneMatrices.length!==r.boneMatrices.length;if(i&&a){const o=new Float32Array(r.boneMatrices.length);o.set(r.boneMatrices),n.boneMatrices=o;const l=Math.sqrt(r.boneMatrices.length/4),c=new $o(o,l,l,Vr,df);c.needsUpdate=!0,n.geometryMaterial.uniforms.prevBoneTexture.value=c,n.velocityMaterial.uniforms.prevBoneTexture.value=c,n.boneTexture=c}return n}_saveCurrentObjectState(e){const n=this._prevPosMap.get(e);n.boneMatrices!==null&&(n.boneMatrices.set(e.skeleton.boneMatrices),n.boneTexture.needsUpdate=!0),n.matrixWorld.copy(e.matrixWorld)}_drawAllMeshes(e,t,n){this._currentFrameMod=(this._currentFrameMod+1)%2;const i=this._currentFrameMod,r=this._prevPosMap;Zd(this.scene,a=>{this._drawMesh(e,a,t,n),r.has(a)&&(r.get(a).lastUsedFrame=i)}),r.forEach((a,o)=>{a.lastUsedFrame!==i&&(a.geometryMaterial.dispose(),a.velocityMaterial.dispose(),a.boneTexture&&a.boneTexture.dispose(),r.delete(o))})}_drawMesh(e,t,n,i){const r=t.motionBlur||sw;let a=this.blurTransparent,o=this.renderCameraBlur,l=this.expandGeometry,c=this.interpolateGeometry,h=this.smearIntensity;a="blurTransparent"in r?r.blurTransparent:this.blurTransparent,o="renderCameraBlur"in r?r.renderCameraBlur:this.renderCameraBlur,l="expandGeometry"in r?r.expandGeometry:this.expandGeometry,c="interpolateGeometry"in r?r.interpolateGeometry:this.interpolateGeometry,h="smearIntensity"in r?r.smearIntensity:this.smearIntensity;const u=t.material.transparent||t.material.alpha<1,d=t.frustumCulled&&!this._frustum.intersectsObject(t);if(a===!1&&u||d)this._prevPosMap.has(t)&&i&&this._saveCurrentObjectState(t);else{const p=this.camera,_=this._getPreviousFrameState(t),v=n===xt.GEOMETRY?_.geometryMaterial:_.velocityMaterial,m=v.uniforms;m.expandGeometry.value=l,m.interpolateGeometry.value=c,m.smearIntensity.value=h;const g=o?this._prevCamProjection:p.projectionMatrix,x=o?this._prevCamWorldInverse:p.matrixWorldInverse;m.prevProjectionMatrix.value.copy(g),m.prevModelViewMatrix.value.multiplyMatrices(x,_.matrixWorld),e.renderBufferDirect(p,null,t.geometry,v,t,null),i&&this._saveCurrentObjectState(t)}}_ensurePrevCameraTransform(){const e=this.camera,t=this._projScreenMatrix;this._cameraMatricesNeedInitializing&&(this._prevCamWorldInverse.copy(e.matrixWorldInverse),this._prevCamProjection.copy(e.projectionMatrix),this._cameraMatricesNeedInitializing=!1),t.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(t)}}xt.DEFAULT=0;xt.VELOCITY=1;xt.GEOMETRY=2;xt.REGULAR_JITTER=0;xt.RANDOM_JITTER=1;xt.BLUENOISE_JITTER=2;class aw extends Nn{constructor(...e){super(...e),["opacity","map","emissiveMap","roughnessMap","metalnessMap"].forEach(t=>{Object.defineProperty(this,t,{get(){if(t in this.uniforms)return this.uniforms[t].value},set(n){t in this.uniforms&&(this.uniforms[t].value=n)}})})}}class ow extends aw{constructor(...e){super(...e),this.modifiedDefines={},this.modifiedUniforms={}}setDefine(e,t){const n=this.defines,i=this.modifiedDefines;t==null?e in n&&(e in i||(i[e]=n[e]),delete n[e]):n[e]!==t&&(e in i||(e in n?i[e]=n[e]:i[e]=void 0),n[e]=t)}setTextureUniform(e,t){const n=this.uniforms,i=this.modifiedUniforms;e in i||(i[e]=n[e].value),n[e].value=t}finalize(){const e=this.modifiedDefines,t=this.defines;for(const r in e)e[r]===void 0?r in t&&(this.needsUpdate=!0):t[r]!==e[r]&&(this.needsUpdate=!0),delete e[r];const n=this.modifiedUniforms,i=this.uniforms;for(const r in n)n[r]!==i[r].value&&(this.needsUpdate=!0),delete n[r]}}const Gh=new WeakMap;class $d{constructor(e){this._replacementMaterial=new ow(e),this._replacementMaterials=new WeakMap,this.overrideUniforms={},this.overrideDefines={}}replace(e,t=!1,n=!0){const i=this;function r(l){if(!l.isMesh&&!l.isSkinnedMesh)return;if(!a.has(l)){const u=i.createMaterial(l);a.set(l,u)}const c=a.get(l);if(c===null)return;let h=l.material;n?o.set(l,h):h=o.get(l),h||console.error("ShaderReplacement : Material for object was not cached before replacing shader.",l),i.updateUniforms(l,h,c),c.finalize&&c.finalize(),l.material=c}const a=this._replacementMaterials,o=Gh;if(Array.isArray(e))if(t)for(let l=0,c=e.length;l<c;l++)e[l].traverse(r);else for(let l=0,c=e.length;l<c;l++)r(e[l]);else t?e.traverse(r):r(e)}reset(e,t){function n(r){i.has(r)?(r.material=i.get(r),i.delete(r)):(r.isSkinnedMesh||r.isMesh)&&console.error("ShaderReplacement : Material for object was not cached before resetting.",r)}const i=Gh;if(Array.isArray(e))if(t)for(let r=0,a=e.length;r<a;r++)n(e[r]);else for(let r=0,a=e.length;r<a;r++)e[r].traverse(n);else t?e.traverse(n):n(e)}createMaterial(e){return this._replacementMaterial.clone()}updateUniforms(e,t,n){const r=this._replacementMaterial.defines,a=t.defines,o=n.defines;if(n.side=t.side,n.flatShading=t.flatShading,n.skinning=t.skinning,a){for(const u in a)n.setDefine(u,a[u]);for(const u in o)u in a?n.setDefine(u,a[u]):n.setDefine(u,r[u])}const l=n.uniforms;if(t.isShaderMaterial){const u=t.uniforms;for(const d in l){const f=u[d],p=l[d];f&&f.value!==p.value&&(p.value&&p.value.isTexture||f.value&&f.value.isTexture?n.setTextureUniform(d,f.value):p.value=f.value)}}else for(const u in l){const d=l[u];u in t&&t[u]!==d.value&&(d.value&&d.value.isTexture||t[u]&&t[u].isTexture?n.setTextureUniform(u,t[u]):d.value=t[u])}const{overrideDefines:c,overrideUniforms:h}=this;for(const u in c)c[u]===null||c[u]===void 0?delete o[u]:o[u]!==c[u]&&(o[u]=c[u],n.needsUpdate=!0);for(const u in h)u in l&&(l[u].value=h[u].value)}dispose(){}}class lw extends $d{constructor(){super({extensions:{derivatives:!0},defines:{USE_UV:""},uniforms:{...Fo.normal.uniforms,alphaMap:{value:null},alphaTest:{value:0},map:{value:null},opacity:{value:1}},vertexShader:Fo.normal.vertexShader,fragmentShader:`

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
			`}),this.useNormalMaps=!1}createMaterial(...e){return super.createMaterial(...e)}updateUniforms(e,t,n){super.updateUniforms(e,t,n),n.setDefine("USE_NORMALMAP",this.useNormalMaps&&n.uniforms.normalMap.value?"":void 0),n.setDefine("TANGENTSPACE_NORMALMAP",this.useNormalMaps&&n.uniforms.normalMap.value?"":void 0),n.setDefine("ALPHATEST",n.uniforms.alphaTest.value?n.uniforms.alphaTest.value:void 0),n.setDefine("USE_ALPHAMAP",n.defines.ALPHATEST===0||!n.uniforms.alphaMap.value?void 0:""),n.setDefine("USE_MAP",n.defines.ALPHATEST===0||!n.uniforms.map.value?void 0:""),n.setDefine("USE_UV","USE_ALPHAMAP"in n.defines||"USE_MAP"in n.defines?"":void 0)}}class cw extends $d{constructor(){super({extensions:{derivatives:!0},defines:{USE_UV:""},uniforms:{...Fo.normal.uniforms,alphaMap:{value:null},alphaTest:{value:0},map:{value:null},opacity:{value:1}},vertexShader:`
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
			`}),this.invertSide=!1}updateUniforms(e,t,n){super.updateUniforms(e,t,n);let i;this.invertSide&&(n.side=n.side===$l?ff:$l),i=n.defines.ALPHATEST,n.uniforms.alphaTest.value===0?delete n.defines.ALPHATEST:n.defines.ALPHATEST=n.uniforms.alphaTest.value,i!==n.defines.ALPHATEST&&(n.needsUpdate=!0),i=n.defines.USE_ALPHAMAP,n.defines.ALPHATEST===0||!n.uniforms.alphaMap.value?delete n.defines.USE_ALPHAMAP:n.defines.USE_ALPHAMAP="",i!==n.defines.USE_ALPHAMAP&&(n.needsUpdate=!0),i=n.defines.USE_MAP,n.defines.ALPHATEST===0||!n.uniforms.map.value?delete n.defines.USE_MAP:n.defines.USE_MAP="",i!==n.defines.USE_MAP&&(n.needsUpdate=!0),i=n.defines.USE_UV,"USE_ALPHAMAP"in n.defines||"USE_MAP"in n.defines?n.defines.USE_UV="":delete n.defines.USE_UV,i!==n.defines.USE_UV&&(n.needsUpdate=!0)}}const hw={uniforms:{texture:{value:null}},vertexShader:`
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
	`},uw={uniforms:{tex:{value:null},displayRoughness:{value:0}},vertexShader:`
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
	`},dw={defines:{NUM_DIRECTIONS:32,NUM_STEPS:16,RADIUS:"2.0",ENABLE_FALLOFF:1,FALLOFF_START2:"0.16",FALLOFF_END2:"4.0",ENABLE_ROTATION_JITTER:1,ENABLE_RADIUS_JITTER:1,ENABLE_COLOR_BOUNCE:1,JITTER_TYPE:0},uniforms:{colorBuffer:{value:null},normalBuffer:{value:null},depthBuffer:{value:null},renderSize:{value:new sa},blueNoiseTex:{value:null},blueNoiseSize:{value:1},clipInfo:{value:new ec},projInfo:{value:new ec},params:{value:new sa},lightBounceIntensity:{value:1}},vertexShader:`
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

	`},fw={defines:{BLUR_ITERATIONS:5,BLUR_MODE:0,AO_ONLY:0,COLOR_ONLY:0,DEPTH_THRESHOLD:"5e-1"},uniforms:{fullSize:{value:new sa},aoSize:{value:new sa},normalBuffer:{value:null},depthBuffer:{value:null},colorBuffer:{value:null},gtaoBuffer:{value:null},intensity:{value:1},blurStride:{value:1},ambientColor:{value:new ss},ambientIntensity:{value:0}},vertexShader:`
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
		`},Hh=new Jd,pw=new ss(0),Ma=new qd;Ma.size=32;const ef=new Uint8Array(32**2*4);for(let s=0,e=4;s<e;s++){const t=Ma.generate(),n=t.data,i=t.maxValue;for(let r=0,a=n.length;r<a;r++){const o=255*(n[r]/i);ef[r*4+s]=o}}const er=new $o(ef,Ma.size,Ma.size,Vr);er.wrapS=Aa;er.wrapT=Aa;er.minFilter=ra;er.needsUpdate=!0;class ot extends Jh{constructor(e,t){super(),this.enabled=!0,this.needsSwap=!0,this.scene=e,this.camera=t,this.debug={display:ot.DEFAULT},this.renderTargetScale=1,this.enableJitter=!0,this.radiusJitter=0,this.rotationJitter=0,this.numSteps=8,this.numDirections=8,this.intensity=1,this.radius=2,this.directionOffset=0,this.stepOffset=0,this.blurMode=ot.BOX_BLUR,this.blurIterations=4,this.blurStride=1,this.enableFalloff=!0,this.falloffStart=.4,this.falloffEnd=2,this.ambientColor=new ss,this.ambientIntensity=0,this.lightBounceIntensity=1,this._gtaoBuffer=new Zs(1,1,{format:Vr}),this._depthBuffer=new Zs(1,1,{minFilter:ms,magFilter:ms,format:Qh,type:qh}),this._depthReplacement=new cw,this._normalBuffer=new Zs(1,1,{minFilter:ms,magFilter:ms,format:Vr}),this._normalReplacement=new lw,this.gtaoQuad=new Cr(new Nn(dw)),this.debugPackedQuad=new Cr(new Nn(uw)),this.debugDepthQuad=new Cr(new Nn(hw)),this.compositeQuad=new Cr(new Nn(fw))}dispose(){}setSize(e,t){const n=this.renderTargetScale,i=Math.floor(e*n),r=Math.floor(t*n);this._depthBuffer.setSize(e,t),this._normalBuffer.setSize(e,t),this._gtaoBuffer.setSize(i,r)}render(e,t,n){const i=this.renderToScreen?null:t,{scene:r,camera:a,debug:o,debugPackedQuad:l,debugDepthQuad:c,compositeQuad:h,gtaoQuad:u}=this,d=u.material;Hh.copy(e,r);const f=()=>{Hh.restore(e,r),p.reset(r,!0)},p=this._depthReplacement,_=this._depthBuffer;if(r.background=null,p.replace(r,!0,!0),e.setRenderTarget(_),e.setClearColor(pw,0),e.clear(),e.render(r,a),o.display===ot.DEPTH){e.setRenderTarget(i),c.material.uniforms.texture.value=_.texture,c.render(e),f();return}const v=this._normalReplacement,m=this._normalBuffer;if(v.replace(r,!0,!1),e.setRenderTarget(m),e.clear(),e.render(r,a),o.display===ot.NORMAL){e.setRenderTarget(i),e.clear(),l.material.uniforms.displayRoughness.value=0,l.material.uniforms.texture.value=m.texture,l.render(e),f();return}this.numSteps!==d.defines.NUM_STEPS&&(d.defines.NUM_STEPS=this.numSteps,d.needsUpdate=!0),this.numDirections!==d.defines.NUM_DIRECTIONS&&(d.defines.NUM_DIRECTIONS=this.numDirections,d.needsUpdate=!0),this.radius.toFixed(16)!==d.defines.RADIUS&&(d.defines.RADIUS=this.radius.toFixed(16),d.needsUpdate=!0),(Math.pow(this.falloffStart,2).toFixed(16)!==d.defines.FALLOFF_START2||Math.pow(this.falloffEnd,2).toFixed(16)!==d.defines.FALLOFF_END2||this.enableFalloff!==!!d.defines.ENABLE_FALLOFF)&&(d.defines.FALLOFF_START2=Math.pow(this.falloffStart,2).toFixed(16),d.defines.FALLOFF_END2=Math.pow(this.falloffEnd,2).toFixed(16),d.defines.ENABLE_FALLOFF=this.enableFalloff?1:0,d.needsUpdate=!0),this.rotationJitter!==d.defines.ENABLE_ROTATION_JITTER&&(d.defines.ENABLE_ROTATION_JITTER=this.rotationJitter,d.needsUpdate=!0),this.radiusJitter!==d.defines.ENABLE_RADIUS_JITTER&&(d.defines.ENABLE_RADIUS_JITTER=this.radiusJitter,d.needsUpdate=!0),this.lightBounceIntensity!==0!=!!d.defines.ENABLE_COLOR_BOUNCE&&(d.defines.ENABLE_COLOR_BOUNCE=this.lightBounceIntensity!==0?1:0,d.needsUpdate=!0);const g=this._gtaoBuffer,x=Math.floor(g.texture.image.width),M=Math.floor(g.texture.image.height),w=a.projectionMatrix,y=pf.DEG2RAD*a.fov;d.uniforms.params.value.set(this.directionOffset,this.stepOffset),d.uniforms.projInfo.value.set(2/(x*w.elements[4*0+0]),2/(M*w.elements[4*1+1]),-1/w.elements[4*0+0],-1/w.elements[4*1+1]),d.uniforms.clipInfo.value.set(a.near,a.far,.5*(M/(2*Math.tan(y*.5))),0),d.uniforms.normalBuffer.value=m.texture,d.uniforms.depthBuffer.value=_.texture,d.uniforms.colorBuffer.value=n.texture,d.uniforms.lightBounceIntensity.value=this.lightBounceIntensity,d.uniforms.renderSize.value.set(Math.floor(g.texture.image.width),Math.floor(g.texture.image.height)),d.uniforms.blueNoiseTex.value=er,d.uniforms.blueNoiseSize.value=er.image.width,e.setRenderTarget(g),e.clear(),u.render(e);const A=h.material;A.uniforms.depthBuffer.value=_.texture,A.uniforms.normalBuffer.value=m.texture,A.uniforms.colorBuffer.value=n.texture,A.uniforms.gtaoBuffer.value=g.texture,A.uniforms.intensity.value=this.intensity,A.uniforms.aoSize.value.set(g.width,g.height),A.uniforms.fullSize.value.set(n.width,n.height),A.uniforms.blurStride.value=this.blurStride,A.uniforms.ambientColor.value.copy(this.ambientColor),A.uniforms.ambientIntensity.value=this.ambientIntensity,this.blurIterations!==A.defines.BLUR_ITERATIONS&&(A.defines.BLUR_ITERATIONS=this.blurIterations,A.needsUpdate=!0),this.blurMode!==A.defines.BLUR_MODE&&(A.defines.BLUR_MODE=this.blurMode,A.needsUpdate=!0),o.display===ot.AO_SAMPLE?A.defines.AO_ONLY!==1&&(A.defines.AO_ONLY=1,A.needsUpdate=!0):A.defines.AO_ONLY!==0&&(A.defines.AO_ONLY=0,A.needsUpdate=!0),o.display===ot.COLOR_SAMPLE?A.defines.COLOR_ONLY!==1&&(A.defines.COLOR_ONLY=1,A.needsUpdate=!0):A.defines.COLOR_ONLY!==0&&(A.defines.COLOR_ONLY=0,A.needsUpdate=!0),e.setRenderTarget(i),e.clear(),h.render(e),f()}}ot.NO_JITTER=0;ot.RANDOM_JITTER=1;ot.BLUENOISE_JITTER=2;ot.DEFAULT=0;ot.DEPTH=1;ot.NORMAL=2;ot.AO_SAMPLE=3;ot.COLOR_SAMPLE=4;ot.NO_BLUR=0;ot.BOX_BLUR=1;ot.CROSS_BLUR=2;ot.DIAGONAL_BLUR=3;const bo=new Oe.Matrix4;class Ba{constructor(e){e=e||{},this.vertices={near:[new Oe.Vector3,new Oe.Vector3,new Oe.Vector3,new Oe.Vector3],far:[new Oe.Vector3,new Oe.Vector3,new Oe.Vector3,new Oe.Vector3]},e.projectionMatrix!==void 0&&this.setFromProjectionMatrix(e.projectionMatrix,e.maxFar||1e4)}setFromProjectionMatrix(e,t){const n=e.elements[11]===0;return bo.copy(e).invert(),this.vertices.near[0].set(1,1,-1),this.vertices.near[1].set(1,-1,-1),this.vertices.near[2].set(-1,-1,-1),this.vertices.near[3].set(-1,1,-1),this.vertices.near.forEach(function(i){i.applyMatrix4(bo)}),this.vertices.far[0].set(1,1,1),this.vertices.far[1].set(1,-1,1),this.vertices.far[2].set(-1,-1,1),this.vertices.far[3].set(-1,1,1),this.vertices.far.forEach(function(i){i.applyMatrix4(bo);const r=Math.abs(i.z);n?i.z*=Math.min(t/r,1):i.multiplyScalar(Math.min(t/r,1))}),this.vertices}split(e,t){for(;e.length>t.length;)t.push(new Ba);t.length=e.length;for(let n=0;n<e.length;n++){const i=t[n];if(n===0)for(let r=0;r<4;r++)i.vertices.near[r].copy(this.vertices.near[r]);else for(let r=0;r<4;r++)i.vertices.near[r].lerpVectors(this.vertices.near[r],this.vertices.far[r],e[n-1]);if(n===e.length-1)for(let r=0;r<4;r++)i.vertices.far[r].copy(this.vertices.far[r]);else for(let r=0;r<4;r++)i.vertices.far[r].lerpVectors(this.vertices.near[r],this.vertices.far[r],e[n])}}toSpace(e,t){for(var n=0;n<4;n++)t.vertices.near[n].copy(this.vertices.near[n]).applyMatrix4(e),t.vertices.far[n].copy(this.vertices.far[n]).applyMatrix4(e)}}var Vh={lights_fragment_begin:`
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
`+Oe.ShaderChunk.lights_pars_begin};class mw extends Oe.Group{constructor(e){super(),this.csm=e,this.displayFrustum=!0,this.displayPlanes=!0,this.displayShadowBounds=!0;const t=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),n=new Float32Array(24),i=new Oe.BufferGeometry;i.setIndex(new Oe.BufferAttribute(t,1)),i.setAttribute("position",new Oe.BufferAttribute(n,3,!1));const r=new Oe.LineSegments(i,new Oe.LineBasicMaterial);this.add(r),this.frustumLines=r,this.cascadeLines=[],this.cascadePlanes=[],this.shadowLines=[]}updateVisibility(){const e=this.displayFrustum,t=this.displayPlanes,n=this.displayShadowBounds,i=this.frustumLines,r=this.cascadeLines,a=this.cascadePlanes,o=this.shadowLines;for(let l=0,c=r.length;l<c;l++){const h=r[l],u=a[l],d=o[l];h.visible=e,u.visible=e&&t,d.visible=n}i.visible=e}update(){const e=this.csm,t=e.camera,n=e.cascades,i=e.mainFrustum,r=e.frustums,a=e.lights,l=this.frustumLines.geometry.getAttribute("position"),c=this.cascadeLines,h=this.cascadePlanes,u=this.shadowLines;for(this.position.copy(t.position),this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.updateMatrixWorld(!0);c.length>n;)this.remove(c.pop()),this.remove(h.pop()),this.remove(u.pop());for(;c.length<n;){const p=new Oe.Box3Helper(new Oe.Box3,16777215),_=new Oe.MeshBasicMaterial({transparent:!0,opacity:.1,depthWrite:!1,side:Oe.DoubleSide}),v=new Oe.Mesh(new Oe.PlaneBufferGeometry,_),m=new Oe.Group,g=new Oe.Box3Helper(new Oe.Box3,16776960);m.add(g),this.add(p),this.add(v),this.add(m),c.push(p),h.push(v),u.push(m)}for(let p=0;p<n;p++){const _=r[p],m=a[p].shadow.camera,g=_.vertices.far,x=c[p],M=h[p],w=u[p],y=w.children[0];x.box.min.copy(g[2]),x.box.max.copy(g[0]),x.box.max.z+=1e-4,M.position.addVectors(g[0],g[2]),M.position.multiplyScalar(.5),M.scale.subVectors(g[0],g[2]),M.scale.z=1e-4,this.remove(w),w.position.copy(m.position),w.quaternion.copy(m.quaternion),w.scale.copy(m.scale),w.updateMatrixWorld(!0),this.attach(w),y.box.min.set(m.bottom,m.left,-m.far),y.box.max.set(m.top,m.right,-m.near)}const d=i.vertices.near,f=i.vertices.far;l.setXYZ(0,f[0].x,f[0].y,f[0].z),l.setXYZ(1,f[3].x,f[3].y,f[3].z),l.setXYZ(2,f[2].x,f[2].y,f[2].z),l.setXYZ(3,f[1].x,f[1].y,f[1].z),l.setXYZ(4,d[0].x,d[0].y,d[0].z),l.setXYZ(5,d[3].x,d[3].y,d[3].z),l.setXYZ(6,d[2].x,d[2].y,d[2].z),l.setXYZ(7,d[1].x,d[1].y,d[1].z),l.needsUpdate=!0}}const Wh=new Oe.Matrix4,To=new Ba,mn=new Oe.Vector3,Pr=new Oe.Box3,Eo=[],Lo=[];class tf{constructor(e){e=e||{},this.camera=e.camera,this.parent=e.parent,this.cascades=e.cascades||3,this.maxFar=e.maxFar||1e5,this.mode=e.mode||"practical",this.shadowMapSize=e.shadowMapSize||2048,this.shadowBias=e.shadowBias||1e-6,this.lightDirection=e.lightDirection||new Oe.Vector3(1,-1,1).normalize(),this.lightIntensity=e.lightIntensity||1,this.lightNear=e.lightNear||1,this.lightFar=e.lightFar||2e3,this.lightMargin=e.lightMargin||200,this.customSplitsCallback=e.customSplitsCallback,this.fade=!1,this.mainFrustum=new Ba,this.frustums=[],this.breaks=[],this.lights=[],this.shaders=new Map,this.createLights(),this.updateFrustums(),this.injectInclude()}createLights(){for(let e=0;e<this.cascades;e++){const t=new Oe.DirectionalLight(16777215,this.lightIntensity);t.castShadow=!0,t.shadow.mapSize.width=this.shadowMapSize,t.shadow.mapSize.height=this.shadowMapSize,t.shadow.camera.near=this.lightNear,t.shadow.camera.far=this.lightFar,t.shadow.bias=this.shadowBias,this.parent.add(t),this.parent.add(t.target),this.lights.push(t)}}initCascades(){const e=this.camera;e.updateProjectionMatrix(),this.mainFrustum.setFromProjectionMatrix(e.projectionMatrix,this.maxFar),this.mainFrustum.split(this.breaks,this.frustums)}updateShadowBounds(){const e=this.frustums;for(let t=0;t<e.length;t++){const i=this.lights[t].shadow.camera,r=this.frustums[t],a=r.vertices.near,o=r.vertices.far,l=o[0];let c;l.distanceTo(o[2])>l.distanceTo(a[2])?c=o[2]:c=a[2];let h=l.distanceTo(c);if(this.fade){const u=this.camera,d=Math.max(u.far,this.maxFar),f=r.vertices.far[0].z/(d-u.near),p=.25*Math.pow(f,2)*(d-u.near);h+=p}i.left=-h/2,i.right=h/2,i.top=h/2,i.bottom=-h/2,i.updateProjectionMatrix()}}getBreaks(){const e=this.camera,t=Math.min(e.far,this.maxFar);switch(this.breaks.length=0,this.mode){case"uniform":n(this.cascades,e.near,t,this.breaks);break;case"logarithmic":i(this.cascades,e.near,t,this.breaks);break;case"practical":r(this.cascades,e.near,t,.5,this.breaks);break;case"custom":this.customSplitsCallback===void 0&&console.error("CSM: Custom split scheme callback not defined."),this.customSplitsCallback(this.cascades,e.near,t,this.breaks);break}function n(a,o,l,c){for(let h=1;h<a;h++)c.push((o+(l-o)*h/a)/l);c.push(1)}function i(a,o,l,c){for(let h=1;h<a;h++)c.push(o*(l/o)**(h/a)/l);c.push(1)}function r(a,o,l,c,h){Eo.length=0,Lo.length=0,i(a,o,l,Lo),n(a,o,l,Eo);for(let u=1;u<a;u++)h.push(Oe.MathUtils.lerp(Eo[u-1],Lo[u-1],c));h.push(1)}}update(){const e=this.camera,t=this.frustums;for(let n=0;n<t.length;n++){const i=this.lights[n],r=i.shadow.camera,a=(r.right-r.left)/this.shadowMapSize,o=(r.top-r.bottom)/this.shadowMapSize;i.shadow.camera.updateMatrixWorld(!0),Wh.multiplyMatrices(i.shadow.camera.matrixWorldInverse,e.matrixWorld),t[n].toSpace(Wh,To);const l=To.vertices.near,c=To.vertices.far;Pr.makeEmpty();for(let h=0;h<4;h++)Pr.expandByPoint(l[h]),Pr.expandByPoint(c[h]);Pr.getCenter(mn),mn.z=Pr.max.z+this.lightMargin,mn.x=Math.floor(mn.x/a)*a,mn.y=Math.floor(mn.y/o)*o,mn.applyMatrix4(i.shadow.camera.matrixWorld),i.position.copy(mn),i.target.position.copy(mn),i.target.position.x+=this.lightDirection.x,i.target.position.y+=this.lightDirection.y,i.target.position.z+=this.lightDirection.z}}injectInclude(){Oe.ShaderChunk.lights_fragment_begin=Vh.lights_fragment_begin,Oe.ShaderChunk.lights_pars_begin=Vh.lights_pars_begin}setupMaterial(e){e.defines=e.defines||{},e.defines.USE_CSM=1,e.defines.CSM_CASCADES=this.cascades,this.fade&&(e.defines.CSM_FADE="");const t=[],n=this,i=this.shaders,r=e.onBeforeCompile;e.onBeforeCompile=function(a){r&&r(a);const o=Math.min(n.camera.far,n.maxFar);n.getExtendedBreaks(t),a.uniforms.CSM_cascades={value:t},a.uniforms.cameraNear={value:n.camera.near},a.uniforms.shadowFar={value:o},i.set(e,a)},i.set(e,null)}updateUniforms(){const e=Math.min(this.camera.far,this.maxFar);this.shaders.forEach(function(n,i){if(n!==null){const r=n.uniforms;this.getExtendedBreaks(r.CSM_cascades.value),r.cameraNear.value=this.camera.near,r.shadowFar.value=e}!this.fade&&"CSM_FADE"in i.defines?(delete i.defines.CSM_FADE,i.needsUpdate=!0):this.fade&&!("CSM_FADE"in i.defines)&&(i.defines.CSM_FADE="",i.needsUpdate=!0)},this)}getExtendedBreaks(e){for(;e.length<this.breaks.length;)e.push(new Oe.Vector2);e.length=this.breaks.length;for(let t=0;t<this.cascades;t++){let n=this.breaks[t],i=this.breaks[t-1]||0;e[t].x=i,e[t].y=n}}updateFrustums(){this.getBreaks(),this.initCascades(),this.updateShadowBounds(),this.updateUniforms()}remove(){for(let e=0;e<this.lights.length;e++)this.parent.remove(this.lights[e])}dispose(){const e=this.shaders;e.forEach(function(t,n){delete n.onBeforeCompile,delete n.defines.USE_CSM,delete n.defines.CSM_CASCADES,delete n.defines.CSM_FADE,delete t.uniforms.CSM_cascades,delete t.uniforms.cameraNear,delete t.uniforms.shadowFar,n.needsUpdate=!0}),e.clear()}}tf.Helper=mw;const Be=(()=>{class s{constructor(){this.name_=null,this.id_=null,this.components_={},this.attributes_={},this._position=new S,this._rotation=new Ve,this.handlers_={},this.parent_=null,this.dead_=!1}Destroy(){for(let n in this.components_)this.components_[n].Destroy();this.components_=null,this.parent_=null,this.handlers_=null}RegisterHandler_(n,i){n in this.handlers_||(this.handlers_[n]=[]),this.handlers_[n].push(i)}SetParent(n){this.parent_=n}SetName(n){this.name_=n}SetId(n){this.id_=n}get Name(){return this.name_}get ID(){return this.id_}get Manager(){return this.parent_}get Attributes(){return this.attributes_}get IsDead(){return this.dead_}SetActive(n){this.parent_.SetActive(this,n)}SetDead(){this.dead_=!0}AddComponent(n){n.SetParent(this),this.components_[n.NAME]=n,n.InitComponent()}InitEntity(){for(let n in this.components_)this.components_[n].InitEntity()}GetComponent(n){return this.components_[n]}FindEntity(n){return this.parent_.Get(n)}Broadcast(n){if(!this.IsDead&&n.topic in this.handlers_)for(let i of this.handlers_[n.topic])i(n)}SetPosition(n){this._position.copy(n),this.Broadcast({topic:"update.position",value:this._position})}SetQuaternion(n){this._rotation.copy(n),this.Broadcast({topic:"update.rotation",value:this._rotation})}get Position(){return this._position}get Quaternion(){return this._rotation}get Forward(){const n=new S(0,0,-1);return n.applyQuaternion(this._rotation),n}get Left(){const n=new S(-1,0,0);return n.applyQuaternion(this._rotation),n}get Up(){const n=new S(0,1,0);return n.applyQuaternion(this._rotation),n}Update(n,i){for(let r in this.components_){const a=this.components_[r];a.Pass==i&&a.Update(n)}}}class e{get NAME(){return console.error("Unnamed Component: "+this.constructor.name),"__UNNAMED__"}constructor(){this.parent_=null,this.pass_=0}Destroy(){}SetParent(n){this.parent_=n}SetPass(n){this.pass_=n}get Pass(){return this.pass_}InitComponent(){}InitEntity(){}GetComponent(n){return this.parent_.GetComponent(n)}get Manager(){return this.parent_.Manager}get Parent(){return this.parent_}FindEntity(n){return this.parent_.FindEntity(n)}Broadcast(n){this.parent_.Broadcast(n)}Update(n){}RegisterHandler_(n,i){this.parent_.RegisterHandler_(n,i)}}return{Entity:s,Component:e}})(),gw=(()=>{const e=class e extends Be.Component{get NAME(){return e.CLASS_NAME}constructor(){super(),this.textures_={},this.models_={},this.sounds_={},this.playing_=[]}AddModel(n,i,r){const a=i+r;this.models_[a]={loader:null,asset:n}}LoadTexture(n,i){if(!(i in this.textures_)){const r=new fi;r.setPath(n),this.textures_[i]={loader:r,texture:r.load(i)},this.textures_[i].encoding=Rt}return this.textures_[i].texture}LoadSound(n,i,r){if(i in this.sounds_){const a=this.FindEntity("threejs").GetComponent("ThreeJSController"),o=new Ho(a.listener_);o.setBuffer(this.sounds_[i].buffer),o.setRefDistance(25),o.setMaxDistance(1e3),r(o),this.playing_.push(o)}else{const a=new El;a.setPath(n),a.load(i,o=>{this.sounds_[i]={buffer:o};const l=this.FindEntity("threejs").GetComponent("ThreeJSController"),c=new Ho(l.listener_);c.setBuffer(o),c.setRefDistance(10),c.setMaxDistance(500),r(c),this.playing_.push(c)})}}Load(n,i,r){if(i.endsWith("glb")||i.endsWith("gltf"))this.LoadGLB(n,i,r);else if(i.endsWith("fbx"))this.LoadFBX(n,i,r);else{const a=n+i;if(this.models_[a]){const o=this.models_[a].asset.clone();r({scene:o});return}}}LoadFBX(n,i,r){if(i in this.models_)if(this.models_[i].asset==null)this.models_[i].queue.push(r);else{const a=Qs.clone(this.models_[i].asset);r(a)}else{const a=new xy;a.setPath(n),this.models_[i]={loader:a,asset:null,queue:[r]},this.models_[i].loader.load(i,o=>{this.models_[i].asset=o;const l=this.models_[i].queue;this.models_[i].queue=null;for(let c of l){const h=Qs.clone(this.models_[i].asset);c(h)}})}}LoadGLB(n,i,r){const a=n+i;if(a in this.models_)if(this.models_[a].asset==null)this.models_[a].queue.push(r);else{const o={...this.models_[a].asset};o.scene=Qs.clone(o.scene),r(o)}else{const o=new Fy;o.setPath(n),this.models_[a]={loader:o,asset:null,queue:[r]},this.models_[a].loader.load(i,l=>{this.models_[a].asset=l;const c=this.models_[a].queue;this.models_[a].queue=null;for(let h of c){const u={...l};u.scene=Qs.clone(u.scene),h(u)}})}}Update(n){for(let i=0;i<this.playing_.length;++i)this.playing_[i].isPlaying||this.playing_[i].parent.remove(this.playing_[i]);this.playing_=this.playing_.filter(i=>i.isPlaying)}};rt(e,"CLASS_NAME","LoadController");let s=e;return{LoadController:s}})(),ai=function(){return{rand_range:function(s,e){return Math.random()*(e-s)+s},rand_normalish:function(){return(Math.random()+Math.random()+Math.random()+Math.random())/4*2-1},rand_int:function(s,e){return Math.round(Math.random()*(e-s)+s)},lerp:function(s,e,t){return s*(t-e)+e},smoothstep:function(s,e,t){return s=s*s*(3-2*s),s*(t-e)+e},smootherstep:function(s,e,t){return s=s*s*s*(s*(s*6-15)+10),s*(t-e)+e},clamp:function(s,e,t){return Math.min(Math.max(s,e),t)},sat:function(s){return Math.min(Math.max(s,0),1)},in_range:(s,e,t)=>s>=e&&s<=t}}(),Xl=(()=>({INPUT:3,CAMERA:1,GUN:2}))(),ii=(()=>{const s={a:65,s:83,w:87,d:68,SPACE:32,SHIFT_L:16,CTRL_L:17},t=class t extends Be.Component{get NAME(){return t.CLASS_NAME}constructor(i){super(),this.params_=i}InitEntity(){this.current_={leftButton:!1,rightButton:!1,mouseXDelta:0,mouseYDelta:0,mouseX:0,mouseY:0},this.previous_=null,this.keys_={},this.previousKeys_={},this.target_=document,this.target_.addEventListener("mousedown",i=>this.onMouseDown_(i),!1),this.target_.addEventListener("mousemove",i=>this.onMouseMove_(i),!1),this.target_.addEventListener("mouseup",i=>this.onMouseUp_(i),!1),this.target_.addEventListener("keydown",i=>this.onKeyDown_(i),!1),this.target_.addEventListener("keyup",i=>this.onKeyUp_(i),!1),this.Parent.Attributes.Input={Keyboard:{Current:this.keys_,Previous:this.previousKeys_},Mouse:{Current:this.current_,Previous:this.previous_}},this.SetPass(Xl.INPUT)}onMouseMove_(i){this.current_.mouseX=i.pageX-window.innerWidth/2,this.current_.mouseY=i.pageY-window.innerHeight/2,this.previous_===null&&(this.previous_={...this.current_}),this.current_.mouseXDelta=this.current_.mouseX-this.previous_.mouseX,this.current_.mouseYDelta=this.current_.mouseY-this.previous_.mouseY}onMouseDown_(i){switch(this.onMouseMove_(i),i.button){case 0:{this.current_.leftButton=!0;break}case 2:{this.current_.rightButton=!0;break}}}onMouseUp_(i){switch(this.onMouseMove_(i),i.button){case 0:{this.current_.leftButton=!1;break}case 2:{this.current_.rightButton=!1;break}}}onKeyDown_(i){this.keys_[i.keyCode]=!0}onKeyUp_(i){this.keys_[i.keyCode]=!1}key(i){return!!this.keys_[i]}mouseLeftReleased(i=!0){return!this.current_.leftButton&&this.previous_.leftButton}isReady(){return this.previous_!==null}Update(i){this.previous_!==null&&(this.current_.mouseXDelta=this.current_.mouseX-this.previous_.mouseX,this.current_.mouseYDelta=this.current_.mouseY-this.previous_.mouseY,this.previous_={...this.current_},this.previousKeys_={...this.keys_})}};rt(t,"CLASS_NAME","PlayerInput");let e=t;return{PlayerInput:e,KEYS:s}})(),_w=(()=>{const n=class n extends Be.Component{get NAME(){return n.CLASS_NAME}constructor(r){super(),this.params_=r,this.camera_=r.camera,this.group_=new ut,this.params_.scene.add(this.group_)}Destroy(){this.params_.scene.remove(this.group_)}InitEntity(){this.rotation_=new Ve,this.translation_=new S(0,3,0),this.phi_=0,this.phiSpeed_=8,this.theta_=0,this.thetaSpeed_=5,this.headBobActive_=!1,this.headBobTimer_=0,this.headBobSpeed_=15,this.headBobHeight_=.01,this.walkSpeed_=10,this.strafeSpeed_=10,this.powerTime_=1,this.power_=!1,this.Parent.Attributes.FPSCamera={group:this.group_},this.SetPass(Xl.CAMERA)}Update(r){this.updateRotation_(r),this.updateCamera_(r),this.updateTranslation_(r),this.updateHeadBob_(r),this.updatePower_(r),this.Parent.SetPosition(this.translation_),this.Parent.SetQuaternion(this.rotation_)}updateCamera_(r){this.camera_.quaternion.copy(this.rotation_),this.camera_.position.copy(this.translation_),this.camera_.position.y+=Math.sin(this.headBobTimer_*this.headBobSpeed_)*this.headBobHeight_,this.group_.position.copy(this.translation_),this.group_.quaternion.copy(this.rotation_)}updateHeadBob_(r){if(this.headBobActive_){const a=Math.PI,o=1+Math.floor((this.headBobTimer_+1e-6)*this.headBobSpeed_/a),l=o*a/this.headBobSpeed_;this.headBobTimer_=Math.min(this.headBobTimer_+r,l),this.headBobTimer_==l&&(this.headBobActive_=!1,this.Broadcast({topic:"fps.step",step:o}))}}updateTranslation_(r){const a=this.GetComponent("PlayerInput"),o=(a.key(ii.KEYS.w)?1:0)+(a.key(ii.KEYS.s)?-1:0),l=(a.key(ii.KEYS.a)?1:0)+(a.key(ii.KEYS.d)?-1:0),c=new Ve;c.setFromAxisAngle(new S(0,1,0),this.phi_);const h=new S(0,0,-1);h.applyQuaternion(c),h.multiplyScalar(o*r*this.walkSpeed_);const u=new S(-1,0,0);u.applyQuaternion(c),u.multiplyScalar(l*r*this.strafeSpeed_);const d=h.clone().add(u);this.Parent.Attributes.Physics.CharacterController.setWalkDirection(d);const p=this.Parent.Attributes.Physics.CharacterController.body_.getWorldTransform().getOrigin(),_=new S(p.x(),p.y(),p.z());this.translation_.lerp(_,.75),a.key(ii.KEYS.SPACE)&&(this.headBobActive_=!1,this.Parent.Attributes.Physics.CharacterController.jump()),a.key(ii.KEYS.SHIFT_L)?this.powerUp_(!0):this.powerUp_(!1),(o!=0||l!=0)&&(this.headBobActive_=!0)}powerUp_(r){this.power_&&r||(r&&this.powerTime_<1&&(r=!1),this.power_=r)}updatePower_(r){this.power_?(this.powerTime_-=r/5,this.powerTime_<0&&(this.power_=!1)):(this.powerTime_+=r/10,this.powerTime_=ai.sat(this.powerTime_)),this.FindEntity("ui").Broadcast({topic:"ui.charge",value:this.powerTime_});const a=this.power_,o=this.FindEntity("threejs").GetComponent("ThreeJSController");o.radialBlur_.uniforms.strength.value=ai.lerp(r*5,o.radialBlur_.uniforms.strength.value,a?.5:0),o.radialBlur_.uniforms.strength.value<.001&&!a&&(o.radialBlur_.uniforms.strength.value=0),this.walkSpeed_=a?30:10,this.Parent.Attributes.Physics.CharacterController.setJumpMultiplier(a?2.25:1)}updateRotation_(r){const a=this.GetComponent("PlayerInput"),o=a.current_.mouseXDelta/window.innerWidth,l=a.current_.mouseYDelta/window.innerHeight;this.phi_+=-o*this.phiSpeed_,this.theta_=ai.clamp(this.theta_+-l*this.thetaSpeed_,-Math.PI/3,Math.PI/3);const c=new Ve;c.setFromAxisAngle(new S(0,1,0),this.phi_);const h=new Ve;h.setFromAxisAngle(new S(1,0,0),this.theta_);const u=new Ve;u.multiply(c),u.multiply(h);const d=1-Math.pow(.01,5*r);this.rotation_.slerp(u,d)}};rt(n,"CLASS_NAME","FirstPersonCamera");let t=n;return{FirstPersonCamera:t}})(),vw=(()=>{const e=class e extends Be.Component{get NAME(){return e.CLASS_NAME}constructor(n){super(),this.params_=n,this.visible_=!0}Destroy(){if(!this.sprite_){this.visible_=!1;return}this.sprite_.traverse(n=>{if(n.material){let i=n.material;n.material instanceof Array||(i=[n.material]);for(let r of i)r.dispose()}n.geometry&&n.geometry.dispose()}),this.sprite_.parent&&this.sprite_.parent.remove(this.sprite_)}InitEntity(){this.OnCreateSprite_()}OnDeath_(){this.Destroy()}OnCreateSprite_(){if(!this.visible_)return;const n=128;this.element_=document.createElement("canvas"),this.context2d_=this.element_.getContext("2d"),this.context2d_.canvas.width=n,this.context2d_.canvas.height=n,this.context2d_.fillStyle="#FFFFFF",this.context2d_.lineWidth=5,this.context2d_.translate(n*.5,n*.5),this.context2d_.rotate(Math.PI/4),this.context2d_.translate(-n*.5,-n*.5);const i=()=>{this.context2d_.translate(n*.5,n*.5),this.context2d_.rotate(Math.PI/2),this.context2d_.translate(-n*.5,-n*.5),this.context2d_.beginPath(),this.context2d_.moveTo(n*.48,n*.25),this.context2d_.moveTo(n*.495,n*.45),this.context2d_.lineTo(n*.505,n*.45),this.context2d_.lineTo(n*.52,n*.25),this.context2d_.lineTo(n*.48,n*.25),this.context2d_.fill()};for(let o=0;o<4;++o)i();const r=new Du(this.context2d_.canvas);r.anisotropy=2,this.sprite_=new Cu(new hl({map:r,color:16777215,fog:!1,depthTest:!1})),this.sprite_.scale.set(4,4,1),this.sprite_.position.set(0,5,0),this.FindEntity("threejs").GetComponent("ThreeJSController").uiScene_.add(this.sprite_)}Update(){if(!this.sprite_)return;const i=this.FindEntity("threejs").GetComponent("ThreeJSController").camera_,r=new S(0,0,-10);this.sprite_.scale.set(.15,.15*i.aspect,1),this.sprite_.position.copy(r);const a=this.FindEntity("physics").GetComponent("AmmoJSController"),o=this.Parent.Forward.clone();o.multiplyScalar(1e3),o.add(this.Parent.Position),a.RayTest(this.Parent.Position,o).filter(c=>c.name!=this.Parent.Name).length>0?this.sprite_.material.color.setRGB(1,0,0):this.sprite_.material.color.setRGB(1,1,1)}};rt(e,"CLASS_NAME","Crosshair");let s=e;return{Crosshair:s}})(),Xh=(()=>{const e=class e extends Be.Component{get NAME(){return e.CLASS_NAME}constructor(n){super(),this.params_=n}Destroy(){this.FindEntity("physics").GetComponent("AmmoJSController").RemoveRigidBody(this.body_)}InitEntity(){const n=this.Parent.Position,i=this.Parent.Quaternion;this.body_=this.FindEntity("physics").GetComponent("AmmoJSController").CreateKinematicCharacterController(n,i,{name:this.Parent.Name}),this.Parent.Attributes.Physics={CharacterController:this.body_},this.Broadcast({topic:"physics.loaded"})}InitComponent(){this.RegisterHandler_("update.position",n=>{this.OnPosition_(n)})}OnPosition_(n){this.OnTransformChanged_()}OnTransformChanged_(){const n=this.Parent.Position;this.Parent.Quaternion;const i=this.body_.transform_;this.body_.body_.getWorldTransform(i),i.getOrigin().setValue(n.x,n.y,n.z),this.body_.body_.setWorldTransform(i)}};rt(e,"CLASS_NAME","KinematicCharacterController");let s=e;return{KinematicCharacterController:s}})(),Ui=(()=>{const e=class e extends Be.Component{get NAME(){return e.CLASS_NAME}constructor(n){super(),this.group_=new ut,this.target_=null,this.offset_=null,this.params_=n,this.params_.scene.add(this.group_)}Destroy(){this.group_.traverse(n=>{n.material&&n.material.dispose(),n.geometry&&n.geometry.dispose()}),this.params_.scene.remove(this.group_)}InitEntity(){this.Parent.Attributes.Render={group:this.group_},this.LoadModels_()}InitComponent(){this.RegisterHandler_("update.position",n=>{this.OnPosition_(n)}),this.RegisterHandler_("update.rotation",n=>{this.OnRotation_(n)}),this.RegisterHandler_("render.visible",n=>{this.OnVisible_(n)}),this.RegisterHandler_("render.offset",n=>{this.OnOffset_(n.offset)})}OnVisible_(n){this.group_.visible=n.value}OnPosition_(n){this.group_.position.copy(n.value)}OnRotation_(n){this.group_.quaternion.copy(n.value)}OnOffset_(n){this.offset_=n,this.offset_&&this.target_&&(this.target_.position.copy(this.offset_.position),this.target_.quaternion.copy(this.offset_.quaternion))}LoadModels_(){this.FindEntity("loader").GetComponent("LoadController").Load(this.params_.resourcePath,this.params_.resourceName,i=>{this.OnLoaded_(i.scene)})}OnLoaded_(n){this.target_=n,this.group_.add(this.target_),this.group_.position.copy(this.Parent.Position),this.group_.quaternion.copy(this.Parent.Quaternion),this.target_.scale.copy(this.params_.scale),this.params_.offset&&(this.offset_=this.params_.offset),this.OnOffset_(this.offset_);const i={};if(this.params_.textures){const r=this.FindEntity("loader").GetComponent("LoadController");for(let a in this.params_.textures.names){const o=r.LoadTexture(this.params_.textures.resourcePath,this.params_.textures.names[a]);o.encoding=Rt,this.params_.textures.wrap&&(o.wrapS=at,o.wrapT=at),i[a]=o}}this.target_.traverse(r=>{let a=r.material;r.material instanceof Array||(a=[r.material]),r.geometry&&r.geometry.computeBoundingBox();for(let o of a)if(o){this.params_.onMaterial&&this.params_.onMaterial(o);for(let l in i)o.name.search(l)>=0&&(o.map=i[l]);this.params_.specular&&(o.specular=this.params_.specular),this.params_.emissive&&(o.emissive=this.params_.emissive),this.params_.colour&&(o.color=this.params_.colour)}this.params_.receiveShadow!==void 0&&(r.receiveShadow=this.params_.receiveShadow),this.params_.castShadow!==void 0&&(r.castShadow=this.params_.castShadow),this.params_.visible!==void 0&&(r.visible=this.params_.visible),r.castShadow=!0,r.receiveShadow=!0}),this.Broadcast({topic:"render.loaded",value:this.target_})}Update(n){}};rt(e,"CLASS_NAME","RenderComponent");let s=e;return{RenderComponent:s}})(),xw=(()=>{function s(e,t){e.onBeforeCompile=n=>{n.uniforms.poopSpot={value:t},n.vertexShader=n.vertexShader.replace("#include <common>",`
      #include <common>
      varying vec4 vWorldPosition;
      varying vec3 vWorldNormal;
      `),n.vertexShader=n.vertexShader.replace("#include <fog_vertex>",`
      #include <fog_vertex>
      vWorldPosition = worldPosition;
      vWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
      `);const i=`
      uniform vec3 poopSpot;
      `;n.fragmentShader=n.fragmentShader.replace("void main()",i+"void main()"),n.fragmentShader=n.fragmentShader.replace("#include <common>",`
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

      `),n.fragmentShader=n.fragmentShader.replace("#include <emissivemap_fragment>",`
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
      `),e.userData.shader=n}}return{ModifyMaterial:s}})(),Yl=(()=>({DEFAULT:0,DECALS:1,SHIELDS:2,PARTICLES:3}))(),yw=(()=>{const t=class t extends Be.Component{get NAME(){return t.CLASS_NAME}constructor(i){super(),this.group_=new ut,this.soundGroup_=new ut,this.decals_=new ut,this.decals_.renderOrder=Yl.DECALS,this.params_=i,this.params_.scene.add(this.decals_),this.params_.scene.add(this.soundGroup_),this.lastStep_=0,this.cooldown_=0}Destroy(){this.group_.traverse(i=>{i.material&&i.material.dispose(),i.geometry&&i.geometry.dispose()}),this.group_.parent.remove(this.group_)}InitComponent(){this.RegisterHandler_("render.visible",i=>{this.OnVisible_(i)}),this.RegisterHandler_("fps.step",i=>{this.OnStep_(i)}),this.SetPass(Xl.GUN)}LoadSound_(i){const r=this.FindEntity("threejs").GetComponent("ThreeJSController"),a=new Ho(r.listener_);this.soundGroup_.add(a),new El().load("resources/sounds/"+i,l=>{a.setBuffer(l),a.setLoop(!1),a.setVolume(1),a.setRefDistance(1),a.play()})}InitEntity(){const i=this.FindEntity("threejs").GetComponent("ThreeJSController"),a=new fi().load("resources/textures/whitesquare.png");a.anisotropy=i.getMaxAnisotropy(),a.wrapS=at,a.wrapT=at,new ut;const o=new Be.Entity;o.AddComponent(new Ui.RenderComponent({scene:this.Parent.Attributes.FPSCamera.group,resourcePath:"resources/rifle/",resourceName:"scene.gltf",scale:new S(1,1,1),emissive:new J(0),color:new J(16777215)})),this.Manager.Add(o),o.SetPosition(new S(.1,-.25,-.1)),o.SetActive(!1),this.gun_=o}OnVisible_(i){this.group_.visible=i.value}OnStep_(i){i.step%2,i.step%2,this.lastStep_<=0&&(this.lastStep_=.25,this.Parent.Attributes.Physics.CharacterController.onGround()&&this.LoadSound_("footstep.ogg"))}UpdateGunRecoil_(){}Update(i){this.soundGroup_.position.copy(this.Parent.Position),this.lastStep_-=i;const r=this.GetComponent("PlayerInput");if(!r.isReady()||(this.cooldown_-=i,this.UpdateGunRecoil_(),this.cooldown_>0))return;if(r.mouseLeftReleased()){this.cooldown_=.5,this.LoadSound_("shot.ogg");const o=this.FindEntity("physics").GetComponent("AmmoJSController"),l=this.Parent.Forward.clone();l.multiplyScalar(100),l.add(this.Parent.Position);const c=new S(.1,-.125,-.75),u=this.FindEntity("fx").GetComponent("BlasterSystem").CreateParticle();u.Start=c.clone(),u.Start.applyQuaternion(this.Parent.Quaternion),u.Start.add(this.Parent.Position),u.End=this.Parent.Forward.clone(),u.End.multiplyScalar(10),u.End.add(this.Parent.Position),u.Velocity=u.End.clone(),u.Velocity.sub(u.Start),u.Velocity.normalize(),u.Velocity.multiplyScalar(5),u.Colours=[new J(4210752),new J(2105376)],u.Length=10,u.Life=1,u.TotalLife=1,u.Width=.125;const d=o.RayTest(this.Parent.Position,l);if(d.length==0)return;for(let f=0;f<d.length;++f){const p=this.FindEntity(d[f].name);if(p.Attributes.NPC){if(p.Attributes.Stats.health>0){p.Broadcast({topic:"shot.hit",position:d[f].position,start:this.Parent.Position,end:l});return}continue}p.Attributes.Render.group.traverse(_=>{if(_.geometry){const v=d[f].position.clone(),m=v.clone();m.add(d[f].normal);const g=new ee;g.makeRotationZ(Math.PI*Math.random());const x=new ee;x.lookAt(m,v,Ne.DefaultUp),x.multiply(g);const M=new Ot;M.setFromRotationMatrix(x),console.log("pos: "+v.y);const w=new di({color:16777215,transparent:!0,depthTest:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4,roughness:.1,metalness:.1});xw.ModifyMaterial(w,v),w.customProgramCacheKey=()=>"decalMaterial";const y=10,A=new Ke(new Ky(_,v,M,new S(y,y,y*2)),w);A.receiveShadow=!0,this.decals_.add(A)}});return}}}};rt(t,"CLASS_NAME","GunController");let e=t;return{GunController:e}})(),qs=(()=>{const t=class t extends Be.Component{get NAME(){return t.CLASS_NAME}constructor(i){super(),this.params_=i}Destroy(){this.FindEntity("physics").GetComponent("AmmoJSController").RemoveRigidBody(this.body_)}InitEntity(){const i=this.Parent.Position,r=this.Parent.Quaternion;if(this.body_=this.FindEntity("physics").GetComponent("AmmoJSController").CreateBox(i,r,this.params_.box,{name:this.Parent.Name}),this.params_.scene){const a=new wn(1,1,1),o=new $t({color:65280});this.debug_=new Ke(a,o),this.debug_.scale.copy(this.params_.box),this.params_.scene.add(this.debug_)}this.Parent.Attributes.roughRadius=Math.max(this.params_.box.x,Math.max(this.params_.box.y,this.params_.box.z)),this.Broadcast({topic:"physics.loaded"})}InitComponent(){this.RegisterHandler_("update.position",i=>{this.OnPosition_(i)}),this.RegisterHandler_("update.rotation",i=>{this.OnRotation_(i)}),this.RegisterHandler_("physics.collision",i=>{this.OnCollision_(i)})}OnCollision_(){}OnPosition_(i){this.OnTransformChanged_()}OnRotation_(i){this.OnTransformChanged_()}OnTransformChanged_(){const i=this.Parent.Position,r=this.Parent.Quaternion,a=this.body_.motionState_,o=this.body_.transform_;if(a.getWorldTransform(o),o.setIdentity(),o.getOrigin().setValue(i.x,i.y,i.z),o.getRotation().setValue(r.x,r.y,r.z,r.w),a.setWorldTransform(o),this.debug_){const l=i;this.debug_.position.copy(l),this.debug_.quaternion.copy(r)}}Update(i){}};rt(t,"CLASS_NAME","BasicRigidBody");let s=t;class e extends Be.Component{constructor(i){super(),this.params_=i,this.box_=new kt}Destroy(){this.FindEntity("physics").GetComponent("AmmoJSController").RemoveRigidBody(this.body_)}InitEntity(){const i=this.Parent.Position,r=this.Parent.Quaternion;if(this.body_=this.FindEntity("physics").GetComponent("AmmoJSController").CreateBox(i,r,this.params_.box,{name:this.Parent.Name}),this.params_.scene){const a=new wn(1,1,1),o=new $t({color:65280});this.debug_=new Ke(a,o),this.debug_.scale.copy(this.params_.box),this.params_.scene.add(this.debug_)}this.Parent.Attributes.roughRadius=Math.max(this.params_.box.x,Math.max(this.params_.box.y,this.params_.box.z)),this.Broadcast({topic:"physics.loaded"})}InitComponent(){this.RegisterHandler_("update.position",i=>{this.OnPosition_(i)}),this.RegisterHandler_("update.rotation",i=>{this.OnRotation_(i)}),this.RegisterHandler_("physics.collision",i=>{this.OnCollision_(i)})}OnCollision_(){}OnPosition_(i){this.OnTransformChanged_()}OnRotation_(i){this.OnTransformChanged_()}OnTransformChanged_(){this.box_.setFromObject(this.Parent.Attributes.Render.group);const i=this.Parent.Quaternion,r=this.body_.motionState_,a=this.body_.transform_,o=this.Parent.Position;if(this.box_.isEmpty()||this.box_.getCenter(o),r.getWorldTransform(a),a.setIdentity(),a.getOrigin().setValue(o.x,o.y,o.z),a.getRotation().setValue(i.x,i.y,i.z,i.w),r.setWorldTransform(a),this.debug_){const l=o;this.debug_.position.copy(l),this.debug_.quaternion.copy(i)}}Update(i){}}return{BasicRigidBody:s,CharacterRigidBody:e}})(),ww=(()=>{const e=class e extends Be.Component{get NAME(){return e.CLASS_NAME}constructor(n){super(),this.params_=n,this.spawned_=!1,this.materials_={}}LoadMaterial_(n,i,r,a){const o=new fi,l=o.load("resources/textures/"+n);l.anisotropy=this.FindEntity("threejs").GetComponent("ThreeJSController").getMaxAnisotropy(),l.wrapS=at,l.wrapT=at,l.encoding=Rt;const c=o.load("resources/textures/"+a);c.anisotropy=this.FindEntity("threejs").GetComponent("ThreeJSController").getMaxAnisotropy(),c.wrapS=at,c.wrapT=at;const h=o.load("resources/textures/"+i);h.anisotropy=this.FindEntity("threejs").GetComponent("ThreeJSController").getMaxAnisotropy(),h.wrapS=at,h.wrapT=at;const u=o.load("resources/textures/"+r);u.anisotropy=this.FindEntity("threejs").GetComponent("ThreeJSController").getMaxAnisotropy(),u.wrapS=at,u.wrapT=at;const d=new di({map:l,color:3158064});return d.onBeforeCompile=p=>{p.uniforms.iTime={value:0},p.vertexShader=p.vertexShader.replace("#include <common>",`
        #include <common>
        varying vec4 vWorldPosition;
        varying vec3 vWorldNormal;
        `),p.vertexShader=p.vertexShader.replace("#include <fog_vertex>",`
        #include <fog_vertex>
        vWorldPosition = worldPosition;
        vWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
        `),p.fragmentShader=p.fragmentShader.replace("#include <common>",`
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

        `),p.fragmentShader=p.fragmentShader.replace("#include <emissivemap_fragment>",`
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

        `),d.userData.shader=p},d.customProgramCacheKey=()=>l,this.FindEntity("threejs").GetComponent("ThreeJSController").csm_.setupMaterial(d),d}BuildHackModel_(){this.materials_.checkerboard=this.LoadMaterial_("whitesquare.png",null,null,null),this.materials_.vintageTile=this.LoadMaterial_("vintage-tile1_albedo.png","vintage-tile1_normal.png","vintage-tile1_roughness.png","vintage-tile1_metallic.png"),this.materials_.hexagonPavers=this.LoadMaterial_("hexagon-pavers1_albedo.png","hexagon-pavers1_normal.png","hexagon-pavers1_roughness.png","hexagon-pavers1_metallic.png"),this.materials_.dampDungeon=this.LoadMaterial_("damp-dungeon-floor_albedo.png","damp-dungeon-floor_normal.png","damp-dungeon-floor_roughness.png","damp-dungeon-floor_metallic.png"),this.materials_.rockSliced=this.LoadMaterial_("rock_sliced_albedo.png","rock_sliced_normal.png","rock_sliced_roughness.png","rock_sliced_metallic.png"),this.materials_.filthySpacePanels=this.LoadMaterial_("filthy-space-panels_albedo.png","filthy-space-panels_normal.png","filthy-space-panels_roughness.png","filthy-space-panels_metallic.png"),this.materials_.paintedWornAsphalt=this.LoadMaterial_("painted-worn-asphalt_albedo.png","painted-worn-asphalt_normal.png","painted-worn-asphalt_roughness.png","painted-worn-asphalt_metallic.png"),this.materials_.brokenDownConcrete2=this.LoadMaterial_("broken_down_concrete2_albedo.png","broken_down_concrete2_normal.png","broken_down_concrete2_roughness.png","broken_down_concrete2_metallic.png"),this.materials_.stucco1=this.LoadMaterial_("stucco1_albedo.png","stucco1_normal.png","stucco1_roughness.png","stucco1_metallic.png");const n=new Ke(new wn(1,1,1,10,10,10),this.materials_.checkerboard);n.castShadow=!0,n.receiveShadow=!0,this.FindEntity("loader").GetComponent("LoadController").AddModel(n,"built-in.","ground");const i=new Ke(new wn(1,1,1,10,10,10),this.materials_.checkerboard);i.castShadow=!0,i.receiveShadow=!0,this.FindEntity("loader").GetComponent("LoadController").AddModel(i,"built-in.","box");const r=new Ke(new dl(.5,.5,1,8,1),this.materials_.hexagonPavers);r.castShadow=!0,r.receiveShadow=!0,this.FindEntity("loader").GetComponent("LoadController").AddModel(r,"built-in.","column"),this.currentTime_=0}Update(n){if(this.currentTime_+=n,this.materials_.checkerboard&&this.materials_.checkerboard.userData.shader&&(this.materials_.checkerboard.userData.shader.uniforms.iTime.value=this.currentTime_,this.materials_.checkerboard.needsUpdate=!0),this.spawned_)return;this.spawned_=!0,this.BuildHackModel_();const i=new Be.Entity;i.AddComponent(new Ui.RenderComponent({scene:this.params_.scene,resourcePath:"built-in.",resourceName:"ground",scale:new S(100,20,100),emissive:new J(0),color:new J(16777215)})),i.AddComponent(new qs.BasicRigidBody({box:new S(100,20,100)})),this.Manager.Add(i,"ground"),i.SetPosition(new S(0,-12,0)),i.SetActive(!1);const r=[["anubis",10,[-1,-1]],["robot",1,[-1,1]],["buddha",10,[1,-1]],["skull",10,[1,1]]];for(let a=0;a<r.length;++a){const o=new S(r[a][2][0]*50,0,r[a][2][1]*50);{const c=new Be.Entity;c.AddComponent(new Ui.RenderComponent({scene:this.params_.scene,resourcePath:"built-in.",resourceName:"box",scale:new S(20,30,20),emissive:new J(0),color:new J(8421504)})),c.AddComponent(new qs.BasicRigidBody({box:new S(20,30,20)})),this.Manager.Add(c),c.SetPosition(o),c.SetActive(!1)}const l=new Be.Entity;l.AddComponent(new Ui.RenderComponent({scene:this.params_.scene,resourcePath:"resources/models/"+r[a][0]+"/",resourceName:"scene.glb",scale:new S(r[a][1],r[a][1],r[a][1]),emissive:new J(0),color:new J(16777215)})),this.Manager.Add(l),l.SetPosition(new S(o.x,o.y+15,o.z)),l.SetActive(!1)}for(let a=-2;a<=2;++a)for(let o=-2;o<=2;++o){const l=new Be.Entity;l.AddComponent(new Ui.RenderComponent({scene:this.params_.scene,resourcePath:"built-in.",resourceName:"ground",scale:new S(50,20,50),emissive:new J(0),color:new J(16777215)})),l.AddComponent(new qs.BasicRigidBody({box:new S(50,20,50)})),this.Manager.Add(l),l.SetPosition(new S(a*50,ai.rand_range(-30,-10),o*50)),l.SetActive(!1)}for(let a=-3;a<=3;++a)for(let o=-3;o<=3;++o){if(a==0&&o==0)continue;const l=new Be.Entity;l.AddComponent(new Ui.RenderComponent({scene:this.params_.scene,resourcePath:"built-in.",resourceName:"box",scale:new S(8,10,8),emissive:new J(0),color:new J(16777215)})),l.AddComponent(new qs.BasicRigidBody({box:new S(8,10,8)})),this.Manager.Add(l,"box."+a+"."+o),l.SetPosition(new S(a*20,1,o*20)),l.SetActive(!1)}this.FindEntity("spawners").GetComponent("TargetSpawner").Spawn({scene:this.params_.scene,position:new S(0,2,5)})}};rt(e,"CLASS_NAME","Level1Builder");let s=e;return{Level1Builder:s}})(),Yh=(()=>{const e=class e extends Be.Component{get NAME(){return e.CLASS_NAME}constructor(n){super(),this.stats_={...n}}InitComponent(){this.RegisterHandler_("shot.hit",n=>this.OnDamage_(n)),this.RegisterHandler_("health.add-experience",n=>this.OnAddExperience_(n)),this.UpdateUI_()}InitEntity(){this.Parent.Attributes.Stats=this.stats_}IsAlive(){return this.stats_.health>0}get Health(){return this.stats_.health}UpdateUI_(){this.stats_.updateUI&&document.getElementById("health-bar")}_ComputeLevelXPRequirement(){const n=this.stats_.level;return Math.round(2**(n-1)*100)}OnAddExperience_(n){this.stats_.experience+=n.value;const i=this._ComputeLevelXPRequirement();if(this.stats_.experience<i)return;this.stats_.level+=1,this.stats_.strength+=1,this.stats_.wisdomness+=1,this.stats_.benchpress+=1,this.stats_.curl+=2,this.FindEntity("level-up-spawner").GetComponent("LevelUpComponentSpawner").Spawn(this.Parent.Position),this.Broadcast({topic:"health.levelGained",value:this.stats_.level}),this.UpdateUI_()}OnDeath_(){this.Broadcast({topic:"health.death"})}OnHealthChanged_(){this.stats_.health==0&&this.OnDeath_(),this.Broadcast({topic:"health.update",health:this.stats_.health,maxHealth:this.stats_.maxHealth}),this.UpdateUI_()}OnDamage_(n){const i=this.stats_.health;this.stats_.health=Math.max(0,this.stats_.health-25),i!=this.stats_.health&&this.OnHealthChanged_()}};rt(e,"CLASS_NAME","HealthComponent");let s=e;return{HealthComponent:s}})(),Sw=(()=>{class s{constructor(){this._states={},this._currentState=null}_AddState(t,n){this._states[t]=n}get State(){return this._currentState.Name}SetState(t){const n=this._currentState;if(n){if(n.Name==t)return;n.Exit()}const i=new this._states[t](this);this._currentState=i,i.Enter(n)}Update(t,n){this._currentState&&this._currentState.Update(t,n)}}return{FiniteStateMachine:s}})(),Js=(()=>{class s{constructor(l){this._parent=l}Enter(){}Exit(){}Update(){}}class e extends s{constructor(l){super(l),this._action=null}get Name(){return"death"}Enter(l){if(this._action=this._parent._proxy.animations.death.action,this._action.reset(),this._action.setLoop($s,1),this._action.clampWhenFinished=!0,l){const c=this._parent._proxy.animations[l.Name].action;this._action.crossFadeFrom(c,.2,!0),this._action.play()}else this._action.play()}Exit(){}Update(l){}}class t extends s{constructor(l){super(l),this._action=null,this._FinishedCallback=()=>{this._Finished()}}get Name(){return"dance"}Enter(l){if(this._action=this._parent._proxy.animations.dance.action,this._action.getMixer().addEventListener("finished",this._FinishedCallback),this._action.reset(),this._action.setLoop($s,1),this._action.clampWhenFinished=!0,l){const h=this._parent._proxy.animations[l.Name].action;this._action.crossFadeFrom(h,.2,!0),this._action.play()}else this._action.play()}_Finished(){this._Cleanup(),this._parent.SetState("idle")}_Cleanup(){this._action&&this._action.getMixer().removeEventListener("finished",this._FinishedCallback)}Exit(){this._Cleanup()}Update(l){}}class n extends s{constructor(l){super(l),this._action=null,this._FinishedCallback=()=>{this._Finished()}}get Name(){return"attack"}Enter(l){if(this._action=this._parent._proxy.animations.attack.action,this._action.getMixer().addEventListener("finished",this._FinishedCallback),l){const h=this._parent._proxy.animations[l.Name].action;this._action.reset(),this._action.setLoop($s,1),this._action.clampWhenFinished=!0,this._action.crossFadeFrom(h,.4,!0),this._action.play()}else this._action.play()}_Finished(){this._Cleanup(),this._parent.SetState("idle")}_Cleanup(){this._action&&this._action.getMixer().removeEventListener("finished",this._FinishedCallback)}Exit(){this._Cleanup()}Update(l){}}class i extends s{constructor(l){super(l)}get Name(){return"walk"}Enter(l){const c=this._parent._proxy.animations.walk.action;if(l){const h=this._parent._proxy.animations[l.Name].action;if(c.enabled=!0,l.Name=="run"){const u=c.getClip().duration/h.getClip().duration;c.time=h.time*u}else c.time=0,c.setEffectiveTimeScale(1),c.setEffectiveWeight(1);c.crossFadeFrom(h,.1,!0),c.play()}else c.play()}Exit(){}Update(l,c){if(c){if(c._keys.forward||c._keys.backward){c._keys.shift&&this._parent.SetState("run");return}this._parent.SetState("idle")}}}class r extends s{constructor(l){super(l)}get Name(){return"run"}Enter(l){const c=this._parent._proxy.animations.run.action;if(l){const h=this._parent._proxy.animations[l.Name].action;if(c.enabled=!0,l.Name=="walk"){const u=c.getClip().duration/h.getClip().duration;c.time=h.time*u}else c.time=0,c.setEffectiveTimeScale(1),c.setEffectiveWeight(1);c.crossFadeFrom(h,.1,!0),c.play()}else c.play()}Exit(){}Update(l,c){if(c){if(c._keys.forward||c._keys.backward){c._keys.shift||this._parent.SetState("walk");return}this._parent.SetState("idle")}}}class a extends s{constructor(l){super(l)}get Name(){return"idle"}Enter(l){const c=this._parent._proxy.animations.idle.action;if(l){const h=this._parent._proxy.animations[l.Name].action;c.time=0,c.enabled=!0,c.setEffectiveTimeScale(1),c.setEffectiveWeight(1),c.crossFadeFrom(h,.25,!0),c.play()}else c.play()}Exit(){}Update(l,c){c&&(c._keys.forward||c._keys.backward?this._parent.SetState("walk"):c._keys.space?this._parent.SetState("attack"):c._keys.backspace&&this._parent.SetState("dance"))}}return{State:s,DanceState:t,AttackState:n,IdleState:a,WalkState:i,RunState:r,DeathState:e}})(),Mw=(()=>{const s=new ee,e=new Ve;class t extends Sw.FiniteStateMachine{constructor(o){super(),this._proxy=o,this.Init_()}Init_(){this._AddState("idle",Js.IdleState),this._AddState("run",Js.RunState),this._AddState("death",Js.DeathState),this._AddState("shoot",Js.AttackState)}}class n{constructor(o){this.animations_=o}get animations(){return this.animations_}}const r=class r extends Be.Component{get NAME(){return r.CLASS_NAME}constructor(o){super(),this.params_=o}InitEntity(){this.Init_()}Init_(){this.decceleration_=new S(-5e-4,-1e-4,-5),this.acceleration_=new S(1,.125,100),this.velocity_=new S(0,0,0),this.group_=new ut,this.params_.scene.add(this.group_),this.animations_={},this.Parent.Attributes.Render={group:this.group_},this.Parent.Attributes.NPC=!0,this.LoadModels_()}InitComponent(){this.RegisterHandler_("health.death",o=>{this.OnDeath_(o)}),this.RegisterHandler_("update.position",o=>{this.OnUpdatePosition_(o)}),this.RegisterHandler_("update.rotation",o=>{this.OnUpdateRotation_(o)})}OnUpdatePosition_(o){this.group_.position.copy(o.value)}OnUpdateRotation_(o){this.group_.quaternion.copy(o.value)}OnDeath_(o){this.stateMachine_.SetState("death")}LoadModels_(){this.FindEntity("loader").GetComponent("LoadController").Load(this.params_.model.path,this.params_.model.name,l=>{this.target_=l.scene,this.group_.add(this.target_),this.target_.scale.setScalar(this.params_.model.scale),this.target_.position.set(0,-2.35,0),this.target_.rotateY(Math.PI),this.bones_={},this.target_.traverse(h=>{if(h.skeleton)for(let u of h.skeleton.bones)this.bones_[u.name]=u}),this.target_.traverse(h=>{h.castShadow=!0,h.receiveShadow=!0,h.material&&h.material.map&&(h.material.map.encoding=Rt)}),this.mixer_=new Cl(this.target_);const c=h=>{for(let u=0;u<l.animations.length;u++)if(l.animations[u].name.includes(h)){const d=l.animations[u],f=this.mixer_.clipAction(d);return{clip:d,action:f}}return null};this.animations_.idle=c("Idle"),this.animations_.walk=c("Walk"),this.animations_.run=c("Run"),this.animations_.death=c("Death"),this.animations_.attack=c("Attack"),this.animations_.shoot=c("Shoot"),this.stateMachine_=new t(new n(this.animations_)),this.queuedState_?(this.stateMachine_.SetState(this.queuedState_),this.queuedState_=null):this.stateMachine_.SetState("idle"),this.Broadcast({topic:"load.character",model:this.group_,bones:this.bones_})})}FindPlayer_(){const l=this.FindEntity("player").Position.clone();return l.sub(this.Parent.Position),l.y=0,l}UpdateAI_(o){const l=this.FindPlayer_(),c=l.clone().normalize();if(l.length()==0||l.length()>50){this.stateMachine_.SetState("idle"),this.Parent.Attributes.Physics.CharacterController.setWalkDirection(new S(0,0,0));return}if(s.lookAt(new S(0,0,0),c,new S(0,1,0)),e.setFromRotationMatrix(s),this.Parent.SetQuaternion(e),l.length()<20){this.stateMachine_.SetState("shoot"),this.Parent.Attributes.Physics.CharacterController.setWalkDirection(new S(0,0,0));return}const h=1,u=0,d=new S(0,0,-1);d.applyQuaternion(e),d.multiplyScalar(h*o*2);const f=new S(-1,0,0);f.applyQuaternion(e),f.multiplyScalar(u*o*2);const p=d.clone().add(f);this.Parent.Attributes.Physics.CharacterController.setWalkDirection(p),this.stateMachine_.SetState("run")}Update(o){if(!this.stateMachine_)return;const l=this.GetComponent("BasicCharacterControllerInput");this.stateMachine_.Update(o,l),this.mixer_&&this.mixer_.update(o),this.stateMachine_._currentState._action&&this.Broadcast({topic:"player.action",action:this.stateMachine_._currentState.Name,time:this.stateMachine_._currentState._action.time});const h=this.Parent.Attributes.Physics.CharacterController.body_.getWorldTransform().getOrigin(),u=new S(h.x(),h.y(),h.z());this.Parent.SetPosition(u)}};rt(r,"CLASS_NAME","TargetCharacterController");let i=r;return{TargetFSM:t,TargetCharacterController:i}})(),Aw=(()=>{const s=`
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
  }`,n=class n extends Be.Component{get NAME(){return n.CLASS_NAME}constructor(r){super(),this.params_=r}InitEntity(){const r=new vl(2,6),a=new mt({uniforms:{time:{value:0},dissolveTime:{value:1e8},strength:{value:1},health:{value:1},hit:{value:new S(0,0,0)},hitTime:{value:0}},vertexShader:s,fragmentShader:e,transparent:!0,blending:tu,blendEquation:ri,blendSrc:Rr,blendDst:Rr,blendSrcAlpha:Rr,blendDstAlpha:Rr,blending:aa});this.model_=new Ke(r,a),this.model_.position.set(0,-1,0),this.group_=new ut,this.group_.add(this.model_),this.group_.renderOrder=Yl.SHIELDS,this.params_.scene.add(this.group_),this.dead_=!1}InitComponent(){this.RegisterHandler_("health.death",r=>{this.OnDeath_(r)}),this.RegisterHandler_("update.position",r=>{this.OnUpdatePosition_(r)}),this.RegisterHandler_("update.rotation",r=>{this.OnUpdateRotation_(r)}),this.RegisterHandler_("shot.hit",r=>{this.OnHit_(r)}),this.RegisterHandler_("health.update",r=>{this.OnDamage_(r)})}OnUpdatePosition_(r){this.group_.position.copy(r.value)}OnUpdateRotation_(r){this.group_.quaternion.copy(r.value)}OnHit_(r){if(this.dead_)return;this.model_.updateWorldMatrix(!0,!0);const a=new S(0,0,0);a.applyMatrix4(this.model_.matrixWorld);const o=r.end.clone().sub(r.start).normalize(),l=new hi(r.start,o),c=new Vn(a,2),h=new S;l.intersectSphere(c,h),this.model_.material.uniforms.hit.value.copy(h)}OnDeath_(r){this.dead_=!0,this.model_.material.uniforms.dissolveTime.value=this.model_.material.uniforms.time.value}OnDamage_(r){this.dead_||(this.model_.material.uniforms.hitTime.value=this.model_.material.uniforms.time.value,this.model_.material.uniforms.health.value=this.Parent.Attributes.Stats.health/this.Parent.Attributes.Stats.maxHealth)}Update(r){this.model_.material.uniforms.time.value+=r}};rt(n,"CLASS_NAME","ShieldComponent");let t=n;return{ShieldComponent:t}})(),Po=(()=>{const n=class n extends Be.Component{get NAME(){return n.CLASS_NAME}constructor(o){super(),this.params_=o}Spawn(){const o=new Be.Entity;return o.SetPosition(new S(0,2,0)),o.AddComponent(new ii.PlayerInput(this.params_)),o.AddComponent(new _w.FirstPersonCamera(this.params_)),o.AddComponent(new vw.Crosshair(this.params_)),o.AddComponent(new Xh.KinematicCharacterController(this.params_)),o.AddComponent(new yw.GunController(this.params_)),o.AddComponent(new Yh.HealthComponent({health:100,maxHealth:100,updateUI:!0})),this.Manager.Add(o,"player"),o}};rt(n,"CLASS_NAME","PlayerSpawner");let s=n;const i=class i extends Be.Component{get NAME(){return i.CLASS_NAME}constructor(o){super(),this.params_=o}Spawn(){const o=new Be.Entity;return o.SetPosition(new S(0,0,0)),o.AddComponent(new ww.Level1Builder(this.params_)),this.Manager.Add(o,"levelBuilder"),o}};rt(i,"CLASS_NAME","Level1Spawner");let e=i;const r=class r extends Be.Component{get NAME(){return r.CLASS_NAME}constructor(o){super(),this.params_=o}Spawn(o){const l=new Be.Entity;return l.AddComponent(new Mw.TargetCharacterController({scene:this.params_.scene,model:{path:"resources/quaternius/Enemies/",name:"Enemy_Large_Gun.glb",scale:2}})),l.AddComponent(new Xh.KinematicCharacterController(this.params_)),l.AddComponent(new Aw.ShieldComponent(this.params_)),l.AddComponent(new Yh.HealthComponent({health:100,maxHealth:100})),this.Manager.Add(l),l.SetPosition(o.position),l.SetActive(!0),l}};rt(r,"CLASS_NAME","TargetSpawner");let t=r;return{PlayerSpawner:s,Level1Spawner:e,TargetSpawner:t}})(),bw=(()=>{class s{constructor(t,n){const[i,r]=n;this._cells=[...Array(i)].map(a=>[...Array(r)].map(o=>null)),this._dimensions=n,this._bounds=t,this._queryIds=0,this.ids_=0}_GetCellIndex(t){const n=ai.sat((t[0]-this._bounds[0][0])/(this._bounds[1][0]-this._bounds[0][0])),i=ai.sat((t[1]-this._bounds[0][1])/(this._bounds[1][1]-this._bounds[0][1])),r=Math.floor(n*(this._dimensions[0]-1)),a=Math.floor(i*(this._dimensions[1]-1));return[r,a]}NewClient(t,n){const i={position:t,dimensions:n,_cells:{min:null,max:null,nodes:null},_queryId:-1,id_:this.ids_++};return this._Insert(i),i}UpdateClient(t){const[n,i]=t.position,[r,a]=t.dimensions,o=this._GetCellIndex([n-r/2,i-a/2]),l=this._GetCellIndex([n+r/2,i+a/2]);t._cells.min[0]==o[0]&&t._cells.min[1]==o[1]&&t._cells.max[0]==l[0]&&t._cells.max[1]==l[1]||(this.Remove(t),this._Insert(t))}FindNear(t,n){const[i,r]=t,[a,o]=n,l=this._GetCellIndex([i-a/2,r-o/2]),c=this._GetCellIndex([i+a/2,r+o/2]),h=[],u=this._queryIds++;for(let d=l[0],f=c[0];d<=f;++d)for(let p=l[1],_=c[1];p<=_;++p){let v=this._cells[d][p];for(;v;){const m=v.client;v=v.next,m._queryId!=u&&(m._queryId=u,h.push(m))}}return h}_Insert(t){const[n,i]=t.position,[r,a]=t.dimensions,o=this._GetCellIndex([n-r/2,i-a/2]),l=this._GetCellIndex([n+r/2,i+a/2]),c=[];for(let h=o[0],u=l[0];h<=u;++h){c.push([]);for(let d=o[1],f=l[1];d<=f;++d){const p=h-o[0],_={next:null,prev:null,client:t};c[p].push(_),_.next=this._cells[h][d],this._cells[h][d]&&(this._cells[h][d].prev=_),this._cells[h][d]=_}}t._cells.min=o,t._cells.max=l,t._cells.nodes=c}Remove(t){const n=t._cells.min,i=t._cells.max;for(let r=n[0],a=i[0];r<=a;++r)for(let o=n[1],l=i[1];o<=l;++o){const c=r-n[0],h=o-n[1],u=t._cells.nodes[c][h];u.next&&(u.next.prev=u.prev),u.prev&&(u.prev.next=u.next),u.prev||(this._cells[r][o]=u.next)}t._cells.min=null,t._cells.max=null,t._cells.nodes=null}}return{SpatialHashGrid:s}})(),jh={shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new J(0)},defaultOpacity:{value:0}},vertexShader:`
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
		}`},Co={shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},strength:{value:.5},center:{value:new X(0,0)},resolution:{value:new X(0,0)}},vertexShader:`
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
    `},Tw=(()=>{const s=`
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
  }`,n=class n extends Be.Component{get NAME(){return n.CLASS_NAME}constructor(){super()}InitEntity(){Ce.emissivemap_fragment+=`
diffuseColor.a = 0.0;`,this.threejs_=new We({antialias:!1}),this.threejs_.shadowMap.enabled=!0,this.threejs_.shadowMap.type=$h,this.threejs_.setPixelRatio(window.devicePixelRatio),this.threejs_.setSize(window.innerWidth,window.innerHeight),this.threejs_.domElement.id="threejs",this.threejs_.physicallyCorrectLights=!0,document.getElementById("container").appendChild(this.threejs_.domElement),window.addEventListener("resize",()=>{this.onWindowResize_()},!1);const r=60,a=1920/1080,o=.1,l=1e3;this.camera_=new yt(r,a,o,l),this.camera_.position.set(20,5,15),this.scene_=new Or,this.scene_.add(this.camera_),this.decalCamera_=new yt(r,a,o,l),this.decalCamera_.position.set(20,5,15),this.sceneDecals_=new Or,this.sceneDecals_.add(this.decalCamera_),this.listener_=new gh,this.camera_.add(this.listener_),this.uiCamera_=new pi(-1,1,1,-1,1,1e3),this.uiScene_=new Or,this.scene_.fog=new Qr(14674419,5e-5),this.sceneDecals_.fog=new Qr(14674419,5e-5);let c=new Na(15985598,.75);c.position.set(-20,100,20),c.target.position.set(0,0,0),c.intensity=2.4;const h=c.position.clone();h.normalize(),h.multiplyScalar(-1),this.sun_=c,this.csm_=new tf({maxFar:this.camera_.far,cascades:4,mode:"logarithmic",parent:this.scene_,shadowMapSize:4096,lightDirection:h,camera:this.camera_,lightNear:1,lightFar:1e3}),this.csm_.fade=!0;const u=new J(15985598);for(let v=0;v<this.csm_.lights.length;++v)this.csm_.lights[v].color=u,this.csm_.lights[v].intensity=1.5;const d=16777088,f=8421504;c=new Qu(d,f,.75),c.color.setHSL(.6,1,.6),c.groundColor.setHSL(.095,1,.75),c.position.set(0,4,0),this.scene_.add(c),c=new bl(16777215,.01),this.scene_.add(c),this.listener_=new gh,this.camera_.add(this.listener_);const p={minFilter:ct,magFilter:ct,format:It,type:vn},_=new Dt(window.innerWidth,window.innerHeight,p);this.writeBuffer_=_,this.readBuffer_=_.clone(),this.composer_=new Jx(this.threejs_),this.composer_.setPixelRatio(window.devicePixelRatio),this.composer_.setSize(window.innerWidth,window.innerHeight),this.fxaaPass_=new Gr(Kx),this.uiPass_=new yo(this.uiScene_,this.uiCamera_),this.uiPass_.clear=!1,this.motionBlurPass_=new xt(this.scene_,this.camera_),this.motionBlurPass_.samples=32,this.motionBlurPass_.smearIntensity=.02,this.motionBlurPass_.interpolateGeometry=!0,this.gtaoPass_=new ot(this.scene_,this.camera_),this.bloomPass_=new Ji(new X(window.innerWidth,window.innerHeight),1.5,.4,.85),this.bloomPass_.radius=0,this.bloomPass_.materialHighPassFilter=new mt({uniforms:this.bloomPass_.highPassUniforms,vertexShader:jh.vertexShader,fragmentShader:jh.fragmentShader,defines:{}}),this.radialBlur_=new Gr(new mt({uniforms:Co.uniforms,vertexShader:Co.vertexShader,fragmentShader:Co.fragmentShader})),this.opaquePass_=new yo(this.scene_,this.camera_),this.decalPass_=new yo(this.sceneDecals_,this.decalCamera_),this.gammaPass_=new Gr(Zx),this.composer_.addPass(this.opaquePass_),this.composer_.addPass(this.gtaoPass_),this.composer_.addPass(this.bloomPass_),this.composer_.addPass(this.uiPass_),this.composer_.addPass(this.gammaPass_),this.composer_.addPass(this.fxaaPass_),this.LoadBackground_(),this.onWindowResize_()}LoadBackground_(){const r=new ju,a=r.load(["resources/sky/Cold_Sunset__Cam_2_Left+X.png","resources/sky/Cold_Sunset__Cam_3_Right-X.png","resources/sky/Cold_Sunset__Cam_4_Up+Y.png","resources/sky/Cold_Sunset__Cam_5_Down-Y.png","resources/sky/Cold_Sunset__Cam_0_Front+Z.png","resources/sky/Cold_Sunset__Cam_1_Back-Z.png"]);a.encoding=Rt;const o=r.load(["resources/sky/space-posx.jpg","resources/sky/space-negx.jpg","resources/sky/space-posy.jpg","resources/sky/space-negy.jpg","resources/sky/space-posz.jpg","resources/sky/space-negz.jpg"]);o.encoding=Rt;const l={background:{value:a},stars:{value:o},time:{value:0}},c=new yl(1e3,32,15),h=new mt({uniforms:l,vertexShader:s,fragmentShader:e,side:st});this.sky_=new Ke(c,h),this.scene_.add(this.sky_)}getMaxAnisotropy(){return this.threejs_.capabilities.getMaxAnisotropy()}onWindowResize_(){this.camera_.aspect=window.innerWidth/window.innerHeight,this.camera_.updateProjectionMatrix(),this.threejs_.setSize(window.innerWidth,window.innerHeight),this.composer_.setSize(window.innerWidth,window.innerHeight),this.csm_.updateFrustums();const r=this.threejs_.getPixelRatio();this.fxaaPass_.material.uniforms.resolution.value.x=1/(window.innerWidth*r),this.fxaaPass_.material.uniforms.resolution.value.y=1/(window.innerHeight*r)}swapBuffers_(){const r=this.writeBuffer_;this.writeBuffer_=this.readBuffer_,this.readBuffer_=r}Render(r){this.csm_.update(this.camera_.matrix),this.opaquePass_.clearColor=new J(0),this.opaquePass_.clearAlpha=0,this.opaquePass_.render(this.threejs_,this.writeBuffer_,this.readBuffer_,r,!1),this.bloomPass_.render(this.threejs_,this.writeBuffer_,this.readBuffer_,r,!1),this.uiPass_.render(this.threejs_,this.writeBuffer_,this.readBuffer_,r,!1),this.radialBlur_.uniforms.center.value.set(window.innerWidth*.5,window.innerHeight*.5),this.radialBlur_.uniforms.resolution.value.set(window.innerWidth,window.innerHeight),this.radialBlur_.render(this.threejs_,this.writeBuffer_,this.readBuffer_,r,!1),this.swapBuffers_(),this.fxaaPass_.render(this.threejs_,this.writeBuffer_,this.readBuffer_,r,!1),this.swapBuffers_(),this.gammaPass_.renderToScreen=!0,this.gammaPass_.render(this.threejs_,this.writeBuffer_,this.readBuffer_,r,!1)}Update(r){const a=this.FindEntity("player");if(!a)return;const o=a._position;this.sun_.position.copy(o),this.sun_.position.add(new S(-20,100,20)),this.sun_.target.position.copy(o),this.sun_.updateMatrixWorld(),this.sun_.target.updateMatrixWorld(),this.sky_&&(this.sky_.material.uniforms.time.value+=r),this.sky_.position.copy(o)}};rt(n,"CLASS_NAME","ThreeJSController");let t=n;return{ThreeJSController:t}})(),Ew=(()=>{const s={CF_STATIC_OBJECT:1,CF_KINEMATIC_OBJECT:2,CF_NO_CONTACT_RESPONSE:4,CF_CUSTOM_MATERIAL_CALLBACK:8,CF_CHARACTER_OBJECT:16},e=75;class t{constructor(){}Destroy(){}Init(o,l,c){this.transform_=new Ammo.btTransform,this.transform_.setIdentity(),this.transform_.setOrigin(new Ammo.btVector3(o.x,o.y,o.z)),this.transform_.setRotation(new Ammo.btQuaternion(l.x,l.y,l.z,l.w)),this.shape_=new Ammo.btCapsuleShape(1,3),this.shape_.setMargin(.05),this.body_=new Ammo.btPairCachingGhostObject,this.body_.setWorldTransform(this.transform_),this.body_.setCollisionShape(this.shape_),this.body_.setCollisionFlags(s.CF_CHARACTER_OBJECT),this.body_.activate(!0),this.controller_=new Ammo.btKinematicCharacterController(this.body_,this.shape_,.35,1),this.controller_.setUseGhostSweepTest(!0),this.controller_.setUpInterpolate(),this.controller_.setGravity(e),this.controller_.setMaxSlope(Math.PI/3),this.controller_.canJump(!0),this.controller_.setJumpSpeed(e/3),this.controller_.setMaxJumpHeight(100),this.userData_=new Ammo.btVector3(0,0,0),this.userData_.userData=c,this.body_.setUserPointer(this.userData_),this.tmpVec3_=new Ammo.btVector3(0,0,0)}setJumpMultiplier(o){this.controller_.setJumpSpeed(o*e/3)}setWalkDirection(o){this.tmpVec3_.setValue(o.x,o.y,o.z),this.controller_.setWalkDirection(this.tmpVec3_)}onGround(){return this.controller_.onGround()}jump(){this.controller_.onGround()&&this.controller_.jump()}}class n{constructor(){}Destroy(){Ammo.destroy(this.body_),Ammo.destroy(this.info_),Ammo.destroy(this.shape_),Ammo.destroy(this.inertia_),Ammo.destroy(this.motionState_),Ammo.destroy(this.transform_),Ammo.destroy(this.userData_),this.mesh_&&Ammo.destroy(this.mesh_)}InitBox(o,l,c,h){this.transform_=new Ammo.btTransform,this.transform_.setIdentity(),this.transform_.setOrigin(new Ammo.btVector3(o.x,o.y,o.z)),this.transform_.setRotation(new Ammo.btQuaternion(l.x,l.y,l.z,l.w)),this.motionState_=new Ammo.btDefaultMotionState(this.transform_);let u=new Ammo.btVector3(c.x*.5,c.y*.5,c.z*.5);this.shape_=new Ammo.btBoxShape(u),this.shape_.setMargin(.05),this.inertia_=new Ammo.btVector3(0,0,0),this.shape_.calculateLocalInertia(10,this.inertia_),this.info_=new Ammo.btRigidBodyConstructionInfo(10,this.motionState_,this.shape_,this.inertia_),this.body_=new Ammo.btRigidBody(this.info_),this.userData_=new Ammo.btVector3(0,0,0),this.userData_.userData=h,this.body_.setUserPointer(this.userData_),Ammo.destroy(u)}InitMesh(o,l,c,h){const u=new Ammo.btVector3(0,0,0),d=new Ammo.btVector3(0,0,0),f=new Ammo.btVector3(0,0,0),p=new S,_=new S,v=new S;this.mesh_=new Ammo.btTriangleMesh(!0,!0),o.traverse(m=>{if(m.updateMatrixWorld(!0),m.geometry){const g=m.geometry.attributes.position.array;for(let x=0;x<m.geometry.index.count;x+=3){const M=m.geometry.index.array[x]*3,w=m.geometry.index.array[x+1]*3,y=m.geometry.index.array[x+2]*3;p.fromArray(g,M).applyMatrix4(m.matrixWorld),_.fromArray(g,w).applyMatrix4(m.matrixWorld),v.fromArray(g,y).applyMatrix4(m.matrixWorld),u.setX(p.x),u.setY(p.y),u.setZ(p.z),d.setX(_.x),d.setY(_.y),d.setZ(_.z),f.setX(v.x),f.setY(v.y),f.setZ(v.z),this.mesh_.addTriangle(u,d,f,!1)}}}),this.inertia_=new Ammo.btVector3(0,0,0),this.shape_=new Ammo.btBvhTriangleMeshShape(this.mesh_,!0,!0),this.shape_.setMargin(.05),this.shape_.calculateLocalInertia(10,this.inertia_),this.transform_=new Ammo.btTransform,this.transform_.setIdentity(),this.transform_.getOrigin().setValue(l.x,l.y,l.z),this.transform_.getRotation().setValue(c.x,c.y,c.z,c.w),this.motionState_=new Ammo.btDefaultMotionState(this.transform_),this.info_=new Ammo.btRigidBodyConstructionInfo(10,this.motionState_,this.shape_,this.inertia_),this.body_=new Ammo.btRigidBody(this.info_),this.userData_=new Ammo.btVector3(0,0,0),this.userData_.userData=h,this.body_.setUserPointer(this.userData_),Ammo.destroy(u),Ammo.destroy(d),Ammo.destroy(f)}}const r=class r extends Be.Component{get NAME(){return r.CLASS_NAME}constructor(){super()}Destroy(){Ammo.Destroy(this.physicsWorld_),Ammo.Destroy(this.solver_),Ammo.Destroy(this.broadphase_),Ammo.Destroy(this.dispatcher_),Ammo.Destroy(this.collisionConfiguration_)}InitEntity(){this.collisionConfiguration_=new Ammo.btDefaultCollisionConfiguration,this.dispatcher_=new Ammo.btCollisionDispatcher(this.collisionConfiguration_),this.broadphase_=new Ammo.btDbvtBroadphase,this.solver_=new Ammo.btSequentialImpulseConstraintSolver,this.physicsWorld_=new Ammo.btDiscreteDynamicsWorld(this.dispatcher_,this.broadphase_,this.solver_,this.collisionConfiguration_),this.physicsWorld_.setGravity(new Ammo.btVector3(0,-100,0)),this.tmpRayOrigin_=new Ammo.btVector3,this.tmpRayDst_=new Ammo.btVector3,this.rayCallback_=new Ammo.AllHitsRayResultCallback(this.tmpRayOrigin_,this.tmpRayDst_)}RayTest(o,l){this.tmpRayOrigin_.setValue(o.x,o.y,o.z),this.tmpRayDst_.setValue(l.x,l.y,l.z),this.tmpRayOrigin_.setValue(o.x,o.y,o.z),this.tmpRayDst_.setValue(l.x,l.y,l.z);const c=new Ammo.AllHitsRayResultCallback(this.tmpRayOrigin_,this.tmpRayDst_);this.physicsWorld_.rayTest(this.tmpRayOrigin_,this.tmpRayDst_,c);const h=[];if(c.hasHit()){const u=c.get_m_collisionObjects(),d=c.get_m_hitPointWorld(),f=c.get_m_hitNormalWorld(),p=u.size();for(let _=0;_<p;++_){const v=u.at(_),m=Ammo.castObject(v.getUserPointer(),Ammo.btVector3).userData,g=d.at(_),x=f.at(_),M=new S(g.x(),g.y(),g.z()),w=new S(x.x(),x.y(),x.z());h.push({name:m.name,position:M,normal:w,distance:M.distanceTo(o)})}}return h.sort((u,d)=>u.distance-d.distance),Ammo.destroy(c),h}RemoveRigidBody(o){this.physicsWorld_.removeRigidBody(o.body_),o.Destroy()}CreateKinematicCharacterController(o,l,c){const h=new t;return h.Init(o,l,c),this.physicsWorld_.addCollisionObject(h.body_),this.physicsWorld_.addAction(h.controller_),this.physicsWorld_.getBroadphase().getOverlappingPairCache().setInternalGhostPairCallback(new Ammo.btGhostPairCallback),h}CreateBox(o,l,c,h){const u=new n;return u.InitBox(o,l,c,h),this.physicsWorld_.addRigidBody(u.body_),u.body_.setActivationState(4),u.body_.setCollisionFlags(2),u}CreateMesh(o,l,c,h){const u=new n;return u.InitMesh(o,l,c,h),this.physicsWorld_.addRigidBody(u.body_),u.body_.setActivationState(4),u.body_.setCollisionFlags(2),u}StepSimulation(o){this.physicsWorld_.stepSimulation(o,10);const l=this.physicsWorld_.getDispatcher(),c=this.dispatcher_.getNumManifolds(),h={};for(let u=0;u<c;u++){const d=l.getManifoldByIndexInternal(u);if(d.getNumContacts()>0){const p=d.getBody0(),_=d.getBody1(),v=Ammo.castObject(p.getUserPointer(),Ammo.btVector3).userData,m=Ammo.castObject(_.getUserPointer(),Ammo.btVector3).userData;v.name in h||(h[v.name]=[]),h[v.name].push(m.name),m.name in h||(h[m.name]=[]),h[m.name].push(v.name)}}for(let u in h)this.FindEntity(u).Broadcast({topic:"physics.collision",value:h[u]})}Update(o){}};rt(r,"CLASS_NAME","AmmoJSController");let i=r;return{AmmoJSController:i}})(),Lw=(()=>{const s=`
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
`,n=class n extends Be.Component{get NAME(){return n.CLASS_NAME}constructor(r){super(),this.params_=r,this.Init_()}Init_(r){const a={diffuse:{value:new fi().load(this.params_.texture)}};this.material_=new mt({uniforms:a,vertexShader:s,fragmentShader:e,blending:ki,depthTest:!0,depthWrite:!1,transparent:!0,vertexColors:!0,side:kn}),this.geometry_=new De,this.particleSystem_=new Ke(this.geometry_,this.material_),this.particleSystem_.frustumCulled=!1,this.liveParticles_=[],this.group_=new ut,this.group_.renderOrder=Yl.PARTICLES,this.group_.add(this.particleSystem_),this.params_.scene.add(this.group_)}CreateParticle(){const r={Start:new S(0,0,0),End:new S(0,0,0),Colour:new J,Size:1,Alive:!0,Life:1};return this.liveParticles_.push(r),r}Update(r){for(const a of this.liveParticles_){if(a.Life-=r,a.Life<=0){a.Alive=!1;continue}if(a.End.add(a.Velocity.clone().multiplyScalar(r)),a.End.clone().sub(a.Start).length()>a.Length){const l=a.Velocity.clone().normalize();a.Start=a.End.clone().sub(l.multiplyScalar(a.Length))}}this.liveParticles_=this.liveParticles_.filter(a=>a.Alive),this.GenerateBuffers_()}GenerateBuffers_(){const r=[],a=[],o=[],l=[],c=[0,1,2,2,3,0];let h=0;this.params_.camera.matrixWorldInverse;const u=this.params_.camera.matrixWorld;for(const d of this.liveParticles_){r.push(...c.map(R=>R+h)),h+=4;const f=new Ue(d.End.x,d.End.y,d.End.z,1);f.applyMatrix4(this.particleSystem_.modelViewMatrix),f.applyMatrix4(this.params_.camera.projectionMatrix);const p=new Ue(d.Start.x,d.Start.y,d.Start.z,1);p.applyMatrix4(this.particleSystem_.modelViewMatrix),p.applyMatrix4(this.params_.camera.projectionMatrix),f.multiplyScalar(1/f.w),p.multiplyScalar(1/p.w);const _=new S(f.x,f.y,f.z),v=new S(p.x,p.y,p.z),m=new S().subVectors(_,v);m.z=0,m.normalize();const x=new S(-m.y,m.x,0).clone().transformDirection(this.params_.camera.projectionMatrixInverse);x.transformDirection(u),x.multiplyScalar(d.Width);const M=new S().copy(d.Start);M.sub(x);const w=new S().copy(d.Start);w.add(x);const y=new S().copy(d.End);y.add(x);const A=new S().copy(d.End);A.sub(x),a.push(M.x,M.y,M.z),a.push(w.x,w.y,w.z),a.push(y.x,y.y,y.z),a.push(A.x,A.y,A.z),l.push(0,0),l.push(1,0),l.push(1,1),l.push(0,1);const E=d.Colours[0].lerp(d.Colours[1],1-d.Life/d.TotalLife),D=ai.sat(d.Life/d.TotalLife);for(let R=0;R<4;R++)o.push(E.r,E.g,E.b,D)}this.geometry_.setAttribute("position",new Me(a,3)),this.geometry_.setAttribute("uv",new Me(l,2)),this.geometry_.setAttribute("color",new Me(o,4)),this.geometry_.setIndex(new $e(new Uint32Array(r),1)),this.geometry_.attributes.position.needsUpdate=!0,this.geometry_.attributes.uv.needsUpdate=!0}};rt(n,"CLASS_NAME","BlasterSystem");let t=n;return{BlasterSystem:t}})(),Pw=(()=>{const e=class e extends Be.Component{get NAME(){return e.CLASS_NAME}constructor(n){super()}InitComponent(){this.RegisterHandler_("ui.charge",i=>this.OnCharge_(i));const n=document.getElementById("top-left-ui-area");n.style.visibility="hidden"}OnCharge_(n){const i=document.getElementById("charge-text");i.innerText=Math.ceil(n.value*100)+"%";const r=document.getElementById("charge-bar"),a=new J("rgb(89, 241, 142)"),l=new J("rgb(237, 50, 50)").clone();l.lerpHSL(a,n.value),r.style.backgroundColor=l.getStyle(),r.style.width=i.innerText}};rt(e,"CLASS_NAME","UIController");let s=e;return{UIController:s}})();class Cw{constructor(){this._Initialize()}_Initialize(){this.entityManager_=new mf.EntityManager,this.OnGameStarted_()}OnGameStarted_(){this.grid_=new bw.SpatialHashGrid([[-5e3,-5e3],[5e3,5e3]],[100,100]),this.LoadControllers_(),this.previousRAF_=null,this.RAF_()}LoadControllers_(){const e=new Be.Entity;e.AddComponent(new Tw.ThreeJSController),this.entityManager_.Add(e,"threejs");const t=new Be.Entity;t.AddComponent(new Ew.AmmoJSController),this.entityManager_.Add(t,"physics"),this.ammojs_=t.GetComponent("AmmoJSController"),this.scene_=e.GetComponent("ThreeJSController").scene_,this.decals_=e.GetComponent("ThreeJSController").sceneDecals_,this.camera_=e.GetComponent("ThreeJSController").camera_,this.threejs_=e.GetComponent("ThreeJSController");const n=new Be.Entity;n.AddComponent(new Lw.BlasterSystem({scene:this.scene_,camera:this.camera_,texture:"resources/textures/fx/tracer.png"})),this.entityManager_.Add(n,"fx");const i=new Be.Entity;i.AddComponent(new gw.LoadController),this.entityManager_.Add(i,"loader");const r=new Be.Entity;r.AddComponent(new Pw.UIController),this.entityManager_.Add(r,"ui");const a={grid:this.grid_,scene:this.scene_,decals:this.decals_,camera:this.camera_},o=new Be.Entity;o.AddComponent(new Po.PlayerSpawner(a)),o.AddComponent(new Po.Level1Spawner(a)),o.AddComponent(new Po.TargetSpawner(a)),this.entityManager_.Add(o,"spawners"),o.GetComponent("PlayerSpawner").Spawn(),o.GetComponent("Level1Spawner").Spawn()}RAF_(){requestAnimationFrame(e=>{this.previousRAF_===null?this.previousRAF_=e:(this.Step_(e-this.previousRAF_),this.previousRAF_=e),setTimeout(()=>{this.RAF_()},1)})}Step_(e){const t=Math.min(.03333333333333333,e*.001);this.entityManager_.Update(t),this.ammojs_.StepSimulation(t),this.threejs_.Render(t)}}window.addEventListener("DOMContentLoaded",async()=>{const s=await Ammo();Ammo=s,new Cw});
