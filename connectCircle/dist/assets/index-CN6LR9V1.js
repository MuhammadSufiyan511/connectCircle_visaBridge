const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Hero-DBryrSm8.js","assets/Hero-B__88f4x.css","assets/Profile-CxNp0iO9.js","assets/Profile-egD9TqvD.css","assets/Settings-CCOXKwIT.js","assets/Settings-xs4yJvwz.css","assets/Login-BKy6LQPh.js","assets/Login-D0hWTvqX.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();/**
* @vue/shared v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Sl(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const we={},Os=[],jt=()=>{},Ch=()=>!1,Oo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),kl=t=>t.startsWith("onUpdate:"),je=Object.assign,xl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Im=Object.prototype.hasOwnProperty,me=(t,e)=>Im.call(t,e),W=Array.isArray,Ms=t=>ai(t)==="[object Map]",er=t=>ai(t)==="[object Set]",Zc=t=>ai(t)==="[object Date]",te=t=>typeof t=="function",Oe=t=>typeof t=="string",zt=t=>typeof t=="symbol",Ee=t=>t!==null&&typeof t=="object",Eh=t=>(Ee(t)||te(t))&&te(t.then)&&te(t.catch),Ih=Object.prototype.toString,ai=t=>Ih.call(t),Tm=t=>ai(t).slice(8,-1),Th=t=>ai(t)==="[object Object]",Rl=t=>Oe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Er=Sl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Mo=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},Sm=/-\w/g,It=Mo(t=>t.replace(Sm,e=>e.slice(1).toUpperCase())),km=/\B([A-Z])/g,_s=Mo(t=>t.replace(km,"-$1").toLowerCase()),Do=Mo(t=>t.charAt(0).toUpperCase()+t.slice(1)),ca=Mo(t=>t?`on${Do(t)}`:""),Ln=(t,e)=>!Object.is(t,e),Oi=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Sh=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},$i=t=>{const e=parseFloat(t);return isNaN(e)?t:e},xm=t=>{const e=Oe(t)?Number(t):NaN;return isNaN(e)?t:e};let eu;const Lo=()=>eu||(eu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Al(t){if(W(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=Oe(s)?Nm(s):Al(s);if(r)for(const i in r)e[i]=r[i]}return e}else if(Oe(t)||Ee(t))return t}const Rm=/;(?![^(]*\))/g,Am=/:([^]+)/,Pm=/\/\*[^]*?\*\//g;function Nm(t){const e={};return t.replace(Pm,"").split(Rm).forEach(n=>{if(n){const s=n.split(Am);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Re(t){let e="";if(Oe(t))e=t;else if(W(t))for(let n=0;n<t.length;n++){const s=Re(t[n]);s&&(e+=s+" ")}else if(Ee(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Om="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Mm=Sl(Om);function kh(t){return!!t||t===""}function Dm(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=ls(t[s],e[s]);return n}function ls(t,e){if(t===e)return!0;let n=Zc(t),s=Zc(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=zt(t),s=zt(e),n||s)return t===e;if(n=W(t),s=W(e),n||s)return n&&s?Dm(t,e):!1;if(n=Ee(t),s=Ee(e),n||s){if(!n||!s)return!1;const r=Object.keys(t).length,i=Object.keys(e).length;if(r!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!ls(t[o],e[o]))return!1}}return String(t)===String(e)}function Pl(t,e){return t.findIndex(n=>ls(n,e))}const xh=t=>!!(t&&t.__v_isRef===!0),ie=t=>Oe(t)?t:t==null?"":W(t)||Ee(t)&&(t.toString===Ih||!te(t.toString))?xh(t)?ie(t.value):JSON.stringify(t,Rh,2):String(t),Rh=(t,e)=>xh(e)?Rh(t,e.value):Ms(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r],i)=>(n[ua(s,i)+" =>"]=r,n),{})}:er(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>ua(n))}:zt(e)?ua(e):Ee(e)&&!W(e)&&!Th(e)?String(e):e,ua=(t,e="")=>{var n;return zt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let rt;class Ah{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=rt,!e&&rt&&(this.index=(rt.scopes||(rt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=rt;try{return rt=this,e()}finally{rt=n}}}on(){++this._on===1&&(this.prevScope=rt,rt=this)}off(){this._on>0&&--this._on===0&&(rt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Lm(t){return new Ah(t)}function Um(){return rt}let Te;const da=new WeakSet;class Ph{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,rt&&rt.active&&rt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,da.has(this)&&(da.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Oh(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,tu(this),Mh(this);const e=Te,n=At;Te=this,At=!0;try{return this.fn()}finally{Dh(this),Te=e,At=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ml(e);this.deps=this.depsTail=void 0,tu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?da.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ja(this)&&this.run()}get dirty(){return ja(this)}}let Nh=0,Ir,Tr;function Oh(t,e=!1){if(t.flags|=8,e){t.next=Tr,Tr=t;return}t.next=Ir,Ir=t}function Nl(){Nh++}function Ol(){if(--Nh>0)return;if(Tr){let e=Tr;for(Tr=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Ir;){let e=Ir;for(Ir=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function Mh(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Dh(t){let e,n=t.depsTail,s=n;for(;s;){const r=s.prevDep;s.version===-1?(s===n&&(n=r),Ml(s),Fm(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=r}t.deps=e,t.depsTail=n}function ja(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Lh(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Lh(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Br)||(t.globalVersion=Br,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!ja(t))))return;t.flags|=2;const e=t.dep,n=Te,s=At;Te=t,At=!0;try{Mh(t);const r=t.fn(t._value);(e.version===0||Ln(r,t._value))&&(t.flags|=128,t._value=r,e.version++)}catch(r){throw e.version++,r}finally{Te=n,At=s,Dh(t),t.flags&=-3}}function Ml(t,e=!1){const{dep:n,prevSub:s,nextSub:r}=t;if(s&&(s.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Ml(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Fm(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let At=!0;const Uh=[];function gn(){Uh.push(At),At=!1}function mn(){const t=Uh.pop();At=t===void 0?!0:t}function tu(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Te;Te=void 0;try{e()}finally{Te=n}}}let Br=0;class Bm{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Dl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Te||!At||Te===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Te)n=this.activeLink=new Bm(Te,this),Te.deps?(n.prevDep=Te.depsTail,Te.depsTail.nextDep=n,Te.depsTail=n):Te.deps=Te.depsTail=n,Fh(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=Te.depsTail,n.nextDep=void 0,Te.depsTail.nextDep=n,Te.depsTail=n,Te.deps===n&&(Te.deps=s)}return n}trigger(e){this.version++,Br++,this.notify(e)}notify(e){Nl();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Ol()}}}function Fh(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)Fh(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Wa=new WeakMap,is=Symbol(""),$a=Symbol(""),Hr=Symbol("");function ze(t,e,n){if(At&&Te){let s=Wa.get(t);s||Wa.set(t,s=new Map);let r=s.get(n);r||(s.set(n,r=new Dl),r.map=s,r.key=n),r.track()}}function tn(t,e,n,s,r,i){const o=Wa.get(t);if(!o){Br++;return}const a=l=>{l&&l.trigger()};if(Nl(),e==="clear")o.forEach(a);else{const l=W(t),c=l&&Rl(n);if(l&&n==="length"){const u=Number(s);o.forEach((d,h)=>{(h==="length"||h===Hr||!zt(h)&&h>=u)&&a(d)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),c&&a(o.get(Hr)),e){case"add":l?c&&a(o.get("length")):(a(o.get(is)),Ms(t)&&a(o.get($a)));break;case"delete":l||(a(o.get(is)),Ms(t)&&a(o.get($a)));break;case"set":Ms(t)&&a(o.get(is));break}}Ol()}function Ts(t){const e=he(t);return e===t?e:(ze(e,"iterate",Hr),wt(t)?e:e.map(We))}function Uo(t){return ze(t=he(t),"iterate",Hr),t}const Hm={__proto__:null,[Symbol.iterator](){return ha(this,Symbol.iterator,We)},concat(...t){return Ts(this).concat(...t.map(e=>W(e)?Ts(e):e))},entries(){return ha(this,"entries",t=>(t[1]=We(t[1]),t))},every(t,e){return Qt(this,"every",t,e,void 0,arguments)},filter(t,e){return Qt(this,"filter",t,e,n=>n.map(We),arguments)},find(t,e){return Qt(this,"find",t,e,We,arguments)},findIndex(t,e){return Qt(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Qt(this,"findLast",t,e,We,arguments)},findLastIndex(t,e){return Qt(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Qt(this,"forEach",t,e,void 0,arguments)},includes(...t){return fa(this,"includes",t)},indexOf(...t){return fa(this,"indexOf",t)},join(t){return Ts(this).join(t)},lastIndexOf(...t){return fa(this,"lastIndexOf",t)},map(t,e){return Qt(this,"map",t,e,void 0,arguments)},pop(){return ur(this,"pop")},push(...t){return ur(this,"push",t)},reduce(t,...e){return nu(this,"reduce",t,e)},reduceRight(t,...e){return nu(this,"reduceRight",t,e)},shift(){return ur(this,"shift")},some(t,e){return Qt(this,"some",t,e,void 0,arguments)},splice(...t){return ur(this,"splice",t)},toReversed(){return Ts(this).toReversed()},toSorted(t){return Ts(this).toSorted(t)},toSpliced(...t){return Ts(this).toSpliced(...t)},unshift(...t){return ur(this,"unshift",t)},values(){return ha(this,"values",We)}};function ha(t,e,n){const s=Uo(t),r=s[e]();return s!==t&&!wt(t)&&(r._next=r.next,r.next=()=>{const i=r._next();return i.value&&(i.value=n(i.value)),i}),r}const Vm=Array.prototype;function Qt(t,e,n,s,r,i){const o=Uo(t),a=o!==t&&!wt(t),l=o[e];if(l!==Vm[e]){const d=l.apply(t,i);return a?We(d):d}let c=n;o!==t&&(a?c=function(d,h){return n.call(this,We(d),h,t)}:n.length>2&&(c=function(d,h){return n.call(this,d,h,t)}));const u=l.call(o,c,s);return a&&r?r(u):u}function nu(t,e,n,s){const r=Uo(t);let i=n;return r!==t&&(wt(t)?n.length>3&&(i=function(o,a,l){return n.call(this,o,a,l,t)}):i=function(o,a,l){return n.call(this,o,We(a),l,t)}),r[e](i,...s)}function fa(t,e,n){const s=he(t);ze(s,"iterate",Hr);const r=s[e](...n);return(r===-1||r===!1)&&Fl(n[0])?(n[0]=he(n[0]),s[e](...n)):r}function ur(t,e,n=[]){gn(),Nl();const s=he(t)[e].apply(t,n);return Ol(),mn(),s}const jm=Sl("__proto__,__v_isRef,__isVue"),Bh=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(zt));function Wm(t){zt(t)||(t=String(t));const e=he(this);return ze(e,"has",t),e.hasOwnProperty(t)}class Hh{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const r=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return i;if(n==="__v_raw")return s===(r?i?Zm:$h:i?Wh:jh).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=W(e);if(!r){let l;if(o&&(l=Hm[n]))return l;if(n==="hasOwnProperty")return Wm}const a=Reflect.get(e,n,Ke(e)?e:s);return(zt(n)?Bh.has(n):jm(n))||(r||ze(e,"get",n),i)?a:Ke(a)?o&&Rl(n)?a:a.value:Ee(a)?r?Gh(a):li(a):a}}class Vh extends Hh{constructor(e=!1){super(!1,e)}set(e,n,s,r){let i=e[n];if(!this._isShallow){const l=Hn(i);if(!wt(s)&&!Hn(s)&&(i=he(i),s=he(s)),!W(e)&&Ke(i)&&!Ke(s))return l||(i.value=s),!0}const o=W(e)&&Rl(n)?Number(n)<e.length:me(e,n),a=Reflect.set(e,n,s,Ke(e)?e:r);return e===he(r)&&(o?Ln(s,i)&&tn(e,"set",n,s):tn(e,"add",n,s)),a}deleteProperty(e,n){const s=me(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&s&&tn(e,"delete",n,void 0),r}has(e,n){const s=Reflect.has(e,n);return(!zt(n)||!Bh.has(n))&&ze(e,"has",n),s}ownKeys(e){return ze(e,"iterate",W(e)?"length":is),Reflect.ownKeys(e)}}class $m extends Hh{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const zm=new Vh,Gm=new $m,Km=new Vh(!0);const za=t=>t,Ii=t=>Reflect.getPrototypeOf(t);function qm(t,e,n){return function(...s){const r=this.__v_raw,i=he(r),o=Ms(i),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=r[t](...s),u=n?za:e?zi:We;return!e&&ze(i,"iterate",l?$a:is),{next(){const{value:d,done:h}=c.next();return h?{value:d,done:h}:{value:a?[u(d[0]),u(d[1])]:u(d),done:h}},[Symbol.iterator](){return this}}}}function Ti(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Ym(t,e){const n={get(r){const i=this.__v_raw,o=he(i),a=he(r);t||(Ln(r,a)&&ze(o,"get",r),ze(o,"get",a));const{has:l}=Ii(o),c=e?za:t?zi:We;if(l.call(o,r))return c(i.get(r));if(l.call(o,a))return c(i.get(a));i!==o&&i.get(r)},get size(){const r=this.__v_raw;return!t&&ze(he(r),"iterate",is),r.size},has(r){const i=this.__v_raw,o=he(i),a=he(r);return t||(Ln(r,a)&&ze(o,"has",r),ze(o,"has",a)),r===a?i.has(r):i.has(r)||i.has(a)},forEach(r,i){const o=this,a=o.__v_raw,l=he(a),c=e?za:t?zi:We;return!t&&ze(l,"iterate",is),a.forEach((u,d)=>r.call(i,c(u),c(d),o))}};return je(n,t?{add:Ti("add"),set:Ti("set"),delete:Ti("delete"),clear:Ti("clear")}:{add(r){!e&&!wt(r)&&!Hn(r)&&(r=he(r));const i=he(this);return Ii(i).has.call(i,r)||(i.add(r),tn(i,"add",r,r)),this},set(r,i){!e&&!wt(i)&&!Hn(i)&&(i=he(i));const o=he(this),{has:a,get:l}=Ii(o);let c=a.call(o,r);c||(r=he(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,i),c?Ln(i,u)&&tn(o,"set",r,i):tn(o,"add",r,i),this},delete(r){const i=he(this),{has:o,get:a}=Ii(i);let l=o.call(i,r);l||(r=he(r),l=o.call(i,r)),a&&a.call(i,r);const c=i.delete(r);return l&&tn(i,"delete",r,void 0),c},clear(){const r=he(this),i=r.size!==0,o=r.clear();return i&&tn(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=qm(r,t,e)}),n}function Ll(t,e){const n=Ym(t,e);return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(me(n,r)&&r in s?n:s,r,i)}const Qm={get:Ll(!1,!1)},Jm={get:Ll(!1,!0)},Xm={get:Ll(!0,!1)};const jh=new WeakMap,Wh=new WeakMap,$h=new WeakMap,Zm=new WeakMap;function e_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function t_(t){return t.__v_skip||!Object.isExtensible(t)?0:e_(Tm(t))}function li(t){return Hn(t)?t:Ul(t,!1,zm,Qm,jh)}function zh(t){return Ul(t,!1,Km,Jm,Wh)}function Gh(t){return Ul(t,!0,Gm,Xm,$h)}function Ul(t,e,n,s,r){if(!Ee(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=t_(t);if(i===0)return t;const o=r.get(t);if(o)return o;const a=new Proxy(t,i===2?s:n);return r.set(t,a),a}function Ds(t){return Hn(t)?Ds(t.__v_raw):!!(t&&t.__v_isReactive)}function Hn(t){return!!(t&&t.__v_isReadonly)}function wt(t){return!!(t&&t.__v_isShallow)}function Fl(t){return t?!!t.__v_raw:!1}function he(t){const e=t&&t.__v_raw;return e?he(e):t}function n_(t){return!me(t,"__v_skip")&&Object.isExtensible(t)&&Sh(t,"__v_skip",!0),t}const We=t=>Ee(t)?li(t):t,zi=t=>Ee(t)?Gh(t):t;function Ke(t){return t?t.__v_isRef===!0:!1}function fe(t){return Kh(t,!1)}function s_(t){return Kh(t,!0)}function Kh(t,e){return Ke(t)?t:new r_(t,e)}class r_{constructor(e,n){this.dep=new Dl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:he(e),this._value=n?e:We(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||wt(e)||Hn(e);e=s?e:he(e),Ln(e,n)&&(this._rawValue=e,this._value=s?e:We(e),this.dep.trigger())}}function os(t){return Ke(t)?t.value:t}const i_={get:(t,e,n)=>e==="__v_raw"?t:os(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return Ke(r)&&!Ke(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function qh(t){return Ds(t)?t:new Proxy(t,i_)}class o_{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Dl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Br-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&Te!==this)return Oh(this,!0),!0}get value(){const e=this.dep.track();return Lh(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function a_(t,e,n=!1){let s,r;return te(t)?s=t:(s=t.get,r=t.set),new o_(s,r,n)}const Si={},Gi=new WeakMap;let Jn;function l_(t,e=!1,n=Jn){if(n){let s=Gi.get(n);s||Gi.set(n,s=[]),s.push(t)}}function c_(t,e,n=we){const{immediate:s,deep:r,once:i,scheduler:o,augmentJob:a,call:l}=n,c=A=>r?A:wt(A)||r===!1||r===0?nn(A,1):nn(A);let u,d,h,f,y=!1,v=!1;if(Ke(t)?(d=()=>t.value,y=wt(t)):Ds(t)?(d=()=>c(t),y=!0):W(t)?(v=!0,y=t.some(A=>Ds(A)||wt(A)),d=()=>t.map(A=>{if(Ke(A))return A.value;if(Ds(A))return c(A);if(te(A))return l?l(A,2):A()})):te(t)?e?d=l?()=>l(t,2):t:d=()=>{if(h){gn();try{h()}finally{mn()}}const A=Jn;Jn=u;try{return l?l(t,3,[f]):t(f)}finally{Jn=A}}:d=jt,e&&r){const A=d,V=r===!0?1/0:r;d=()=>nn(A(),V)}const x=Um(),R=()=>{u.stop(),x&&x.active&&xl(x.effects,u)};if(i&&e){const A=e;e=(...V)=>{A(...V),R()}}let k=v?new Array(t.length).fill(Si):Si;const O=A=>{if(!(!(u.flags&1)||!u.dirty&&!A))if(e){const V=u.run();if(r||y||(v?V.some((M,X)=>Ln(M,k[X])):Ln(V,k))){h&&h();const M=Jn;Jn=u;try{const X=[V,k===Si?void 0:v&&k[0]===Si?[]:k,f];k=V,l?l(e,3,X):e(...X)}finally{Jn=M}}}else u.run()};return a&&a(O),u=new Ph(d),u.scheduler=o?()=>o(O,!1):O,f=A=>l_(A,!1,u),h=u.onStop=()=>{const A=Gi.get(u);if(A){if(l)l(A,4);else for(const V of A)V();Gi.delete(u)}},e?s?O(!0):k=u.run():o?o(O.bind(null,!0),!0):u.run(),R.pause=u.pause.bind(u),R.resume=u.resume.bind(u),R.stop=R,R}function nn(t,e=1/0,n){if(e<=0||!Ee(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,Ke(t))nn(t.value,e,n);else if(W(t))for(let s=0;s<t.length;s++)nn(t[s],e,n);else if(er(t)||Ms(t))t.forEach(s=>{nn(s,e,n)});else if(Th(t)){for(const s in t)nn(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&nn(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ci(t,e,n,s){try{return s?t(...s):t()}catch(r){Fo(r,e,n)}}function Ot(t,e,n,s){if(te(t)){const r=ci(t,e,n,s);return r&&Eh(r)&&r.catch(i=>{Fo(i,e,n)}),r}if(W(t)){const r=[];for(let i=0;i<t.length;i++)r.push(Ot(t[i],e,n,s));return r}}function Fo(t,e,n,s=!0){const r=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||we;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](t,l,c)===!1)return}a=a.parent}if(i){gn(),ci(i,null,10,[t,l,c]),mn();return}}u_(t,n,r,s,o)}function u_(t,e,n,s=!0,r=!1){if(r)throw t;console.error(t)}const Qe=[];let Ht=-1;const Ls=[];let Rn=null,Rs=0;const Yh=Promise.resolve();let Ki=null;function Dn(t){const e=Ki||Yh;return t?e.then(this?t.bind(this):t):e}function d_(t){let e=Ht+1,n=Qe.length;for(;e<n;){const s=e+n>>>1,r=Qe[s],i=Vr(r);i<t||i===t&&r.flags&2?e=s+1:n=s}return e}function Bl(t){if(!(t.flags&1)){const e=Vr(t),n=Qe[Qe.length-1];!n||!(t.flags&2)&&e>=Vr(n)?Qe.push(t):Qe.splice(d_(e),0,t),t.flags|=1,Qh()}}function Qh(){Ki||(Ki=Yh.then(Xh))}function h_(t){W(t)?Ls.push(...t):Rn&&t.id===-1?Rn.splice(Rs+1,0,t):t.flags&1||(Ls.push(t),t.flags|=1),Qh()}function su(t,e,n=Ht+1){for(;n<Qe.length;n++){const s=Qe[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;Qe.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function Jh(t){if(Ls.length){const e=[...new Set(Ls)].sort((n,s)=>Vr(n)-Vr(s));if(Ls.length=0,Rn){Rn.push(...e);return}for(Rn=e,Rs=0;Rs<Rn.length;Rs++){const n=Rn[Rs];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Rn=null,Rs=0}}const Vr=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Xh(t){try{for(Ht=0;Ht<Qe.length;Ht++){const e=Qe[Ht];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ci(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Ht<Qe.length;Ht++){const e=Qe[Ht];e&&(e.flags&=-2)}Ht=-1,Qe.length=0,Jh(),Ki=null,(Qe.length||Ls.length)&&Xh()}}let gt=null,Zh=null;function qi(t){const e=gt;return gt=t,Zh=t&&t.type.__scopeId||null,e}function Ue(t,e=gt,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&Xi(-1);const i=qi(e);let o;try{o=t(...r)}finally{qi(i),s._d&&Xi(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function it(t,e){if(gt===null)return t;const n=$o(gt),s=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[i,o,a,l=we]=e[r];i&&(te(i)&&(i={mounted:i,updated:i}),i.deep&&nn(o),s.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function Kn(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let l=a.dir[s];l&&(gn(),Ot(l,n,8,[t.el,a,t,e]),mn())}}const f_=Symbol("_vte"),ef=t=>t.__isTeleport,en=Symbol("_leaveCb"),ki=Symbol("_enterCb");function p_(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return tr(()=>{t.isMounted=!0}),Wr(()=>{t.isUnmounting=!0}),t}const yt=[Function,Array],tf={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:yt,onEnter:yt,onAfterEnter:yt,onEnterCancelled:yt,onBeforeLeave:yt,onLeave:yt,onAfterLeave:yt,onLeaveCancelled:yt,onBeforeAppear:yt,onAppear:yt,onAfterAppear:yt,onAppearCancelled:yt},nf=t=>{const e=t.subTree;return e.component?nf(e.component):e},g_={name:"BaseTransition",props:tf,setup(t,{slots:e}){const n=Af(),s=p_();return()=>{const r=e.default&&of(e.default(),!0);if(!r||!r.length)return;const i=sf(r),o=he(t),{mode:a}=o;if(s.isLeaving)return pa(i);const l=ru(i);if(!l)return pa(i);let c=Ga(l,o,s,n,d=>c=d);l.type!==Xe&&jr(l,c);let u=n.subTree&&ru(n.subTree);if(u&&u.type!==Xe&&!es(u,l)&&nf(n).type!==Xe){let d=Ga(u,o,s,n);if(jr(u,d),a==="out-in"&&l.type!==Xe)return s.isLeaving=!0,d.afterLeave=()=>{s.isLeaving=!1,n.job.flags&8||n.update(),delete d.afterLeave,u=void 0},pa(i);a==="in-out"&&l.type!==Xe?d.delayLeave=(h,f,y)=>{const v=rf(s,u);v[String(u.key)]=u,h[en]=()=>{f(),h[en]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{y(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return i}}};function sf(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==Xe){e=n;break}}return e}const m_=g_;function rf(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Ga(t,e,n,s,r){const{appear:i,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:h,onLeave:f,onAfterLeave:y,onLeaveCancelled:v,onBeforeAppear:x,onAppear:R,onAfterAppear:k,onAppearCancelled:O}=e,A=String(t.key),V=rf(n,t),M=(Q,ce)=>{Q&&Ot(Q,s,9,ce)},X=(Q,ce)=>{const B=ce[1];M(Q,ce),W(Q)?Q.every(S=>S.length<=1)&&B():Q.length<=1&&B()},xe={mode:o,persisted:a,beforeEnter(Q){let ce=l;if(!n.isMounted)if(i)ce=x||l;else return;Q[en]&&Q[en](!0);const B=V[A];B&&es(t,B)&&B.el[en]&&B.el[en](),M(ce,[Q])},enter(Q){let ce=c,B=u,S=d;if(!n.isMounted)if(i)ce=R||c,B=k||u,S=O||d;else return;let ne=!1;const H=Q[ki]=re=>{ne||(ne=!0,re?M(S,[Q]):M(B,[Q]),xe.delayedLeave&&xe.delayedLeave(),Q[ki]=void 0)};ce?X(ce,[Q,H]):H()},leave(Q,ce){const B=String(t.key);if(Q[ki]&&Q[ki](!0),n.isUnmounting)return ce();M(h,[Q]);let S=!1;const ne=Q[en]=H=>{S||(S=!0,ce(),H?M(v,[Q]):M(y,[Q]),Q[en]=void 0,V[B]===t&&delete V[B])};V[B]=t,f?X(f,[Q,ne]):ne()},clone(Q){const ce=Ga(Q,e,n,s,r);return r&&r(ce),ce}};return xe}function pa(t){if(Bo(t))return t=Vn(t),t.children=null,t}function ru(t){if(!Bo(t))return ef(t.type)&&t.children?sf(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&te(n.default))return n.default()}}function jr(t,e){t.shapeFlag&6&&t.component?(t.transition=e,jr(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function of(t,e=!1,n){let s=[],r=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Je?(o.patchFlag&128&&r++,s=s.concat(of(o.children,e,a))):(e||o.type!==Xe)&&s.push(a!=null?Vn(o,{key:a}):o)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}function af(t,e){return te(t)?je({name:t.name},e,{setup:t}):t}function lf(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}const Yi=new WeakMap;function Sr(t,e,n,s,r=!1){if(W(t)){t.forEach((y,v)=>Sr(y,e&&(W(e)?e[v]:e),n,s,r));return}if(kr(s)&&!r){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Sr(t,e,n,s.component.subTree);return}const i=s.shapeFlag&4?$o(s.component):s.el,o=r?null:i,{i:a,r:l}=t,c=e&&e.r,u=a.refs===we?a.refs={}:a.refs,d=a.setupState,h=he(d),f=d===we?Ch:y=>me(h,y);if(c!=null&&c!==l){if(iu(e),Oe(c))u[c]=null,f(c)&&(d[c]=null);else if(Ke(c)){c.value=null;const y=e;y.k&&(u[y.k]=null)}}if(te(l))ci(l,a,12,[o,u]);else{const y=Oe(l),v=Ke(l);if(y||v){const x=()=>{if(t.f){const R=y?f(l)?d[l]:u[l]:l.value;if(r)W(R)&&xl(R,i);else if(W(R))R.includes(i)||R.push(i);else if(y)u[l]=[i],f(l)&&(d[l]=u[l]);else{const k=[i];l.value=k,t.k&&(u[t.k]=k)}}else y?(u[l]=o,f(l)&&(d[l]=o)):v&&(l.value=o,t.k&&(u[t.k]=o))};if(o){const R=()=>{x(),Yi.delete(t)};R.id=-1,Yi.set(t,R),ht(R,n)}else iu(t),x()}}}function iu(t){const e=Yi.get(t);e&&(e.flags|=8,Yi.delete(t))}Lo().requestIdleCallback;Lo().cancelIdleCallback;const kr=t=>!!t.type.__asyncLoader,Bo=t=>t.type.__isKeepAlive;function __(t,e){cf(t,"a",e)}function y_(t,e){cf(t,"da",e)}function cf(t,e,n=Ge){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Ho(e,s,n),n){let r=n.parent;for(;r&&r.parent;)Bo(r.parent.vnode)&&v_(s,e,n,r),r=r.parent}}function v_(t,e,n,s){const r=Ho(e,t,s,!0);Vo(()=>{xl(s[e],r)},n)}function Ho(t,e,n=Ge,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{gn();const a=ui(n),l=Ot(e,n,t,o);return a(),mn(),l});return s?r.unshift(i):r.push(i),i}}const wn=t=>(e,n=Ge)=>{(!Gr||t==="sp")&&Ho(t,(...s)=>e(...s),n)},b_=wn("bm"),tr=wn("m"),w_=wn("bu"),C_=wn("u"),Wr=wn("bum"),Vo=wn("um"),E_=wn("sp"),I_=wn("rtg"),T_=wn("rtc");function S_(t,e=Ge){Ho("ec",t,e)}const k_="components";function $r(t,e){return R_(k_,t,!0,e)||t}const x_=Symbol.for("v-ndc");function R_(t,e,n=!0,s=!1){const r=gt||Ge;if(r){const i=r.type;{const a=my(i,!1);if(a&&(a===e||a===It(e)||a===Do(It(e))))return i}const o=ou(r[t]||i[t],e)||ou(r.appContext[t],e);return!o&&s?i:o}}function ou(t,e){return t&&(t[e]||t[It(e)]||t[Do(It(e))])}function Qi(t,e,n,s){let r;const i=n,o=W(t);if(o||Oe(t)){const a=o&&Ds(t);let l=!1,c=!1;a&&(l=!wt(t),c=Hn(t),t=Uo(t)),r=new Array(t.length);for(let u=0,d=t.length;u<d;u++)r[u]=e(l?c?zi(We(t[u])):We(t[u]):t[u],u,void 0,i)}else if(typeof t=="number"){r=new Array(t);for(let a=0;a<t;a++)r[a]=e(a+1,a,void 0,i)}else if(Ee(t))if(t[Symbol.iterator])r=Array.from(t,(a,l)=>e(a,l,void 0,i));else{const a=Object.keys(t);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];r[l]=e(t[u],u,l,i)}}else r=[];return r}const Ka=t=>t?Pf(t)?$o(t):Ka(t.parent):null,xr=je(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ka(t.parent),$root:t=>Ka(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>df(t),$forceUpdate:t=>t.f||(t.f=()=>{Bl(t.update)}),$nextTick:t=>t.n||(t.n=Dn.bind(t.proxy)),$watch:t=>Q_.bind(t)}),ga=(t,e)=>t!==we&&!t.__isScriptSetup&&me(t,e),A_={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(ga(s,e))return o[e]=1,s[e];if(r!==we&&me(r,e))return o[e]=2,r[e];if((c=t.propsOptions[0])&&me(c,e))return o[e]=3,i[e];if(n!==we&&me(n,e))return o[e]=4,n[e];qa&&(o[e]=0)}}const u=xr[e];let d,h;if(u)return e==="$attrs"&&ze(t.attrs,"get",""),u(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==we&&me(n,e))return o[e]=4,n[e];if(h=l.config.globalProperties,me(h,e))return h[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return ga(r,e)?(r[e]=n,!0):s!==we&&me(s,e)?(s[e]=n,!0):me(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i,type:o}},a){let l,c;return!!(n[a]||t!==we&&a[0]!=="$"&&me(t,a)||ga(e,a)||(l=i[0])&&me(l,a)||me(s,a)||me(xr,a)||me(r.config.globalProperties,a)||(c=o.__cssModules)&&c[a])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:me(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function au(t){return W(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let qa=!0;function P_(t){const e=df(t),n=t.proxy,s=t.ctx;qa=!1,e.beforeCreate&&lu(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:h,beforeUpdate:f,updated:y,activated:v,deactivated:x,beforeDestroy:R,beforeUnmount:k,destroyed:O,unmounted:A,render:V,renderTracked:M,renderTriggered:X,errorCaptured:xe,serverPrefetch:Q,expose:ce,inheritAttrs:B,components:S,directives:ne,filters:H}=e;if(c&&N_(c,s,null),o)for(const Z in o){const K=o[Z];te(K)&&(s[Z]=K.bind(n))}if(r){const Z=r.call(n,n);Ee(Z)&&(t.data=li(Z))}if(qa=!0,i)for(const Z in i){const K=i[Z],Pe=te(K)?K.bind(n,n):te(K.get)?K.get.bind(n,n):jt,Me=!te(K)&&te(K.set)?K.set.bind(n):jt,et=ke({get:Pe,set:Me});Object.defineProperty(s,Z,{enumerable:!0,configurable:!0,get:()=>et.value,set:tt=>et.value=tt})}if(a)for(const Z in a)uf(a[Z],s,n,Z);if(l){const Z=te(l)?l.call(n):l;Reflect.ownKeys(Z).forEach(K=>{Mi(K,Z[K])})}u&&lu(u,t,"c");function se(Z,K){W(K)?K.forEach(Pe=>Z(Pe.bind(n))):K&&Z(K.bind(n))}if(se(b_,d),se(tr,h),se(w_,f),se(C_,y),se(__,v),se(y_,x),se(S_,xe),se(T_,M),se(I_,X),se(Wr,k),se(Vo,A),se(E_,Q),W(ce))if(ce.length){const Z=t.exposed||(t.exposed={});ce.forEach(K=>{Object.defineProperty(Z,K,{get:()=>n[K],set:Pe=>n[K]=Pe,enumerable:!0})})}else t.exposed||(t.exposed={});V&&t.render===jt&&(t.render=V),B!=null&&(t.inheritAttrs=B),S&&(t.components=S),ne&&(t.directives=ne),Q&&lf(t)}function N_(t,e,n=jt){W(t)&&(t=Ya(t));for(const s in t){const r=t[s];let i;Ee(r)?"default"in r?i=Ct(r.from||s,r.default,!0):i=Ct(r.from||s):i=Ct(r),Ke(i)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[s]=i}}function lu(t,e,n){Ot(W(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function uf(t,e,n,s){let r=s.includes(".")?If(n,s):()=>n[s];if(Oe(t)){const i=e[t];te(i)&&hn(r,i)}else if(te(t))hn(r,t.bind(n));else if(Ee(t))if(W(t))t.forEach(i=>uf(i,e,n,s));else{const i=te(t.handler)?t.handler.bind(n):e[t.handler];te(i)&&hn(r,i,t)}}function df(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let l;return a?l=a:!r.length&&!n&&!s?l=e:(l={},r.length&&r.forEach(c=>Ji(l,c,o,!0)),Ji(l,e,o)),Ee(e)&&i.set(e,l),l}function Ji(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&Ji(t,i,n,!0),r&&r.forEach(o=>Ji(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=O_[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const O_={data:cu,props:uu,emits:uu,methods:br,computed:br,beforeCreate:Ye,created:Ye,beforeMount:Ye,mounted:Ye,beforeUpdate:Ye,updated:Ye,beforeDestroy:Ye,beforeUnmount:Ye,destroyed:Ye,unmounted:Ye,activated:Ye,deactivated:Ye,errorCaptured:Ye,serverPrefetch:Ye,components:br,directives:br,watch:D_,provide:cu,inject:M_};function cu(t,e){return e?t?function(){return je(te(t)?t.call(this,this):t,te(e)?e.call(this,this):e)}:e:t}function M_(t,e){return br(Ya(t),Ya(e))}function Ya(t){if(W(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ye(t,e){return t?[...new Set([].concat(t,e))]:e}function br(t,e){return t?je(Object.create(null),t,e):e}function uu(t,e){return t?W(t)&&W(e)?[...new Set([...t,...e])]:je(Object.create(null),au(t),au(e??{})):e}function D_(t,e){if(!t)return e;if(!e)return t;const n=je(Object.create(null),t);for(const s in e)n[s]=Ye(t[s],e[s]);return n}function hf(){return{app:null,config:{isNativeTag:Ch,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let L_=0;function U_(t,e){return function(s,r=null){te(s)||(s=je({},s)),r!=null&&!Ee(r)&&(r=null);const i=hf(),o=new WeakSet,a=[];let l=!1;const c=i.app={_uid:L_++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:yy,get config(){return i.config},set config(u){},use(u,...d){return o.has(u)||(u&&te(u.install)?(o.add(u),u.install(c,...d)):te(u)&&(o.add(u),u(c,...d))),c},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),c},component(u,d){return d?(i.components[u]=d,c):i.components[u]},directive(u,d){return d?(i.directives[u]=d,c):i.directives[u]},mount(u,d,h){if(!l){const f=c._ceVNode||de(s,r);return f.appContext=i,h===!0?h="svg":h===!1&&(h=void 0),t(f,u,h),l=!0,c._container=u,u.__vue_app__=c,$o(f.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Ot(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,d){return i.provides[u]=d,c},runWithContext(u){const d=Us;Us=c;try{return u()}finally{Us=d}}};return c}}let Us=null;function Mi(t,e){if(Ge){let n=Ge.provides;const s=Ge.parent&&Ge.parent.provides;s===n&&(n=Ge.provides=Object.create(s)),n[t]=e}}function Ct(t,e,n=!1){const s=Af();if(s||Us){let r=Us?Us._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&te(e)?e.call(s&&s.proxy):e}}const ff={},pf=()=>Object.create(ff),gf=t=>Object.getPrototypeOf(t)===ff;function F_(t,e,n,s=!1){const r={},i=pf();t.propsDefaults=Object.create(null),mf(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:zh(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function B_(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=he(r),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let h=u[d];if(jo(t.emitsOptions,h))continue;const f=e[h];if(l)if(me(i,h))f!==i[h]&&(i[h]=f,c=!0);else{const y=It(h);r[y]=Qa(l,a,y,f,t,!1)}else f!==i[h]&&(i[h]=f,c=!0)}}}else{mf(t,e,r,i)&&(c=!0);let u;for(const d in a)(!e||!me(e,d)&&((u=_s(d))===d||!me(e,u)))&&(l?n&&(n[d]!==void 0||n[u]!==void 0)&&(r[d]=Qa(l,a,d,void 0,t,!0)):delete r[d]);if(i!==a)for(const d in i)(!e||!me(e,d))&&(delete i[d],c=!0)}c&&tn(t.attrs,"set","")}function mf(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Er(l))continue;const c=e[l];let u;r&&me(r,u=It(l))?!i||!i.includes(u)?n[u]=c:(a||(a={}))[u]=c:jo(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(i){const l=he(n),c=a||we;for(let u=0;u<i.length;u++){const d=i[u];n[d]=Qa(r,l,d,c[d],t,!me(c,d))}}return o}function Qa(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=me(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&te(l)){const{propsDefaults:c}=r;if(n in c)s=c[n];else{const u=ui(r);s=c[n]=l.call(null,e),u()}}else s=l;r.ce&&r.ce._setProp(n,s)}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===_s(n))&&(s=!0))}return s}const H_=new WeakMap;function _f(t,e,n=!1){const s=n?H_:e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let l=!1;if(!te(t)){const u=d=>{l=!0;const[h,f]=_f(d,e,!0);je(o,h),f&&a.push(...f)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!l)return Ee(t)&&s.set(t,Os),Os;if(W(i))for(let u=0;u<i.length;u++){const d=It(i[u]);du(d)&&(o[d]=we)}else if(i)for(const u in i){const d=It(u);if(du(d)){const h=i[u],f=o[d]=W(h)||te(h)?{type:h}:je({},h),y=f.type;let v=!1,x=!0;if(W(y))for(let R=0;R<y.length;++R){const k=y[R],O=te(k)&&k.name;if(O==="Boolean"){v=!0;break}else O==="String"&&(x=!1)}else v=te(y)&&y.name==="Boolean";f[0]=v,f[1]=x,(v||me(f,"default"))&&a.push(d)}}const c=[o,a];return Ee(t)&&s.set(t,c),c}function du(t){return t[0]!=="$"&&!Er(t)}const Hl=t=>t==="_"||t==="_ctx"||t==="$stable",Vl=t=>W(t)?t.map(Vt):[Vt(t)],V_=(t,e,n)=>{if(e._n)return e;const s=Ue((...r)=>Vl(e(...r)),n);return s._c=!1,s},yf=(t,e,n)=>{const s=t._ctx;for(const r in t){if(Hl(r))continue;const i=t[r];if(te(i))e[r]=V_(r,i,s);else if(i!=null){const o=Vl(i);e[r]=()=>o}}},vf=(t,e)=>{const n=Vl(e);t.slots.default=()=>n},bf=(t,e,n)=>{for(const s in e)(n||!Hl(s))&&(t[s]=e[s])},j_=(t,e,n)=>{const s=t.slots=pf();if(t.vnode.shapeFlag&32){const r=e._;r?(bf(s,e,n),n&&Sh(s,"_",r,!0)):yf(e,s)}else e&&vf(t,e)},W_=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=we;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:bf(r,e,n):(i=!e.$stable,yf(e,r)),o=e}else e&&(vf(t,e),o={default:1});if(i)for(const a in r)!Hl(a)&&o[a]==null&&delete r[a]},ht=ry;function $_(t){return z_(t)}function z_(t,e){const n=Lo();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:h,setScopeId:f=jt,insertStaticContent:y}=t,v=(p,m,_,w=null,E=null,b=null,D=void 0,N=null,P=!!m.dynamicChildren)=>{if(p===m)return;p&&!es(p,m)&&(w=C(p),tt(p,E,b,!0),p=null),m.patchFlag===-2&&(P=!1,m.dynamicChildren=null);const{type:I,ref:G,shapeFlag:U}=m;switch(I){case Wo:x(p,m,_,w);break;case Xe:R(p,m,_,w);break;case Di:p==null&&k(m,_,w,D);break;case Je:S(p,m,_,w,E,b,D,N,P);break;default:U&1?V(p,m,_,w,E,b,D,N,P):U&6?ne(p,m,_,w,E,b,D,N,P):(U&64||U&128)&&I.process(p,m,_,w,E,b,D,N,P,j)}G!=null&&E?Sr(G,p&&p.ref,b,m||p,!m):G==null&&p&&p.ref!=null&&Sr(p.ref,null,b,p,!0)},x=(p,m,_,w)=>{if(p==null)s(m.el=a(m.children),_,w);else{const E=m.el=p.el;m.children!==p.children&&c(E,m.children)}},R=(p,m,_,w)=>{p==null?s(m.el=l(m.children||""),_,w):m.el=p.el},k=(p,m,_,w)=>{[p.el,p.anchor]=y(p.children,m,_,w,p.el,p.anchor)},O=({el:p,anchor:m},_,w)=>{let E;for(;p&&p!==m;)E=h(p),s(p,_,w),p=E;s(m,_,w)},A=({el:p,anchor:m})=>{let _;for(;p&&p!==m;)_=h(p),r(p),p=_;r(m)},V=(p,m,_,w,E,b,D,N,P)=>{m.type==="svg"?D="svg":m.type==="math"&&(D="mathml"),p==null?M(m,_,w,E,b,D,N,P):Q(p,m,E,b,D,N,P)},M=(p,m,_,w,E,b,D,N)=>{let P,I;const{props:G,shapeFlag:U,transition:$,dirs:ee}=p;if(P=p.el=o(p.type,b,G&&G.is,G),U&8?u(P,p.children):U&16&&xe(p.children,P,null,w,E,ma(p,b),D,N),ee&&Kn(p,null,w,"created"),X(P,p,p.scopeId,D,w),G){for(const Ie in G)Ie!=="value"&&!Er(Ie)&&i(P,Ie,null,G[Ie],b,w);"value"in G&&i(P,"value",null,G.value,b),(I=G.onVnodeBeforeMount)&&Bt(I,w,p)}ee&&Kn(p,null,w,"beforeMount");const ue=G_(E,$);ue&&$.beforeEnter(P),s(P,m,_),((I=G&&G.onVnodeMounted)||ue||ee)&&ht(()=>{I&&Bt(I,w,p),ue&&$.enter(P),ee&&Kn(p,null,w,"mounted")},E)},X=(p,m,_,w,E)=>{if(_&&f(p,_),w)for(let b=0;b<w.length;b++)f(p,w[b]);if(E){let b=E.subTree;if(m===b||Sf(b.type)&&(b.ssContent===m||b.ssFallback===m)){const D=E.vnode;X(p,D,D.scopeId,D.slotScopeIds,E.parent)}}},xe=(p,m,_,w,E,b,D,N,P=0)=>{for(let I=P;I<p.length;I++){const G=p[I]=N?An(p[I]):Vt(p[I]);v(null,G,m,_,w,E,b,D,N)}},Q=(p,m,_,w,E,b,D)=>{const N=m.el=p.el;let{patchFlag:P,dynamicChildren:I,dirs:G}=m;P|=p.patchFlag&16;const U=p.props||we,$=m.props||we;let ee;if(_&&qn(_,!1),(ee=$.onVnodeBeforeUpdate)&&Bt(ee,_,m,p),G&&Kn(m,p,_,"beforeUpdate"),_&&qn(_,!0),(U.innerHTML&&$.innerHTML==null||U.textContent&&$.textContent==null)&&u(N,""),I?ce(p.dynamicChildren,I,N,_,w,ma(m,E),b):D||K(p,m,N,null,_,w,ma(m,E),b,!1),P>0){if(P&16)B(N,U,$,_,E);else if(P&2&&U.class!==$.class&&i(N,"class",null,$.class,E),P&4&&i(N,"style",U.style,$.style,E),P&8){const ue=m.dynamicProps;for(let Ie=0;Ie<ue.length;Ie++){const ye=ue[Ie],nt=U[ye],st=$[ye];(st!==nt||ye==="value")&&i(N,ye,nt,st,E,_)}}P&1&&p.children!==m.children&&u(N,m.children)}else!D&&I==null&&B(N,U,$,_,E);((ee=$.onVnodeUpdated)||G)&&ht(()=>{ee&&Bt(ee,_,m,p),G&&Kn(m,p,_,"updated")},w)},ce=(p,m,_,w,E,b,D)=>{for(let N=0;N<m.length;N++){const P=p[N],I=m[N],G=P.el&&(P.type===Je||!es(P,I)||P.shapeFlag&198)?d(P.el):_;v(P,I,G,null,w,E,b,D,!0)}},B=(p,m,_,w,E)=>{if(m!==_){if(m!==we)for(const b in m)!Er(b)&&!(b in _)&&i(p,b,m[b],null,E,w);for(const b in _){if(Er(b))continue;const D=_[b],N=m[b];D!==N&&b!=="value"&&i(p,b,N,D,E,w)}"value"in _&&i(p,"value",m.value,_.value,E)}},S=(p,m,_,w,E,b,D,N,P)=>{const I=m.el=p?p.el:a(""),G=m.anchor=p?p.anchor:a("");let{patchFlag:U,dynamicChildren:$,slotScopeIds:ee}=m;ee&&(N=N?N.concat(ee):ee),p==null?(s(I,_,w),s(G,_,w),xe(m.children||[],_,G,E,b,D,N,P)):U>0&&U&64&&$&&p.dynamicChildren?(ce(p.dynamicChildren,$,_,E,b,D,N),(m.key!=null||E&&m===E.subTree)&&wf(p,m,!0)):K(p,m,_,G,E,b,D,N,P)},ne=(p,m,_,w,E,b,D,N,P)=>{m.slotScopeIds=N,p==null?m.shapeFlag&512?E.ctx.activate(m,_,w,D,P):H(m,_,w,E,b,D,P):re(p,m,P)},H=(p,m,_,w,E,b,D)=>{const N=p.component=dy(p,w,E);if(Bo(p)&&(N.ctx.renderer=j),hy(N,!1,D),N.asyncDep){if(E&&E.registerDep(N,se,D),!p.el){const P=N.subTree=de(Xe);R(null,P,m,_),p.placeholder=P.el}}else se(N,p,m,_,E,b,D)},re=(p,m,_)=>{const w=m.component=p.component;if(ny(p,m,_))if(w.asyncDep&&!w.asyncResolved){Z(w,m,_);return}else w.next=m,w.update();else m.el=p.el,w.vnode=m},se=(p,m,_,w,E,b,D)=>{const N=()=>{if(p.isMounted){let{next:U,bu:$,u:ee,parent:ue,vnode:Ie}=p;{const Ut=Cf(p);if(Ut){U&&(U.el=Ie.el,Z(p,U,D)),Ut.asyncDep.then(()=>{p.isUnmounted||N()});return}}let ye=U,nt;qn(p,!1),U?(U.el=Ie.el,Z(p,U,D)):U=Ie,$&&Oi($),(nt=U.props&&U.props.onVnodeBeforeUpdate)&&Bt(nt,ue,U,Ie),qn(p,!0);const st=fu(p),Lt=p.subTree;p.subTree=st,v(Lt,st,d(Lt.el),C(Lt),p,E,b),U.el=st.el,ye===null&&sy(p,st.el),ee&&ht(ee,E),(nt=U.props&&U.props.onVnodeUpdated)&&ht(()=>Bt(nt,ue,U,Ie),E)}else{let U;const{el:$,props:ee}=m,{bm:ue,m:Ie,parent:ye,root:nt,type:st}=p,Lt=kr(m);qn(p,!1),ue&&Oi(ue),!Lt&&(U=ee&&ee.onVnodeBeforeMount)&&Bt(U,ye,m),qn(p,!0);{nt.ce&&nt.ce._def.shadowRoot!==!1&&nt.ce._injectChildStyle(st);const Ut=p.subTree=fu(p);v(null,Ut,_,w,p,E,b),m.el=Ut.el}if(Ie&&ht(Ie,E),!Lt&&(U=ee&&ee.onVnodeMounted)){const Ut=m;ht(()=>Bt(U,ye,Ut),E)}(m.shapeFlag&256||ye&&kr(ye.vnode)&&ye.vnode.shapeFlag&256)&&p.a&&ht(p.a,E),p.isMounted=!0,m=_=w=null}};p.scope.on();const P=p.effect=new Ph(N);p.scope.off();const I=p.update=P.run.bind(P),G=p.job=P.runIfDirty.bind(P);G.i=p,G.id=p.uid,P.scheduler=()=>Bl(G),qn(p,!0),I()},Z=(p,m,_)=>{m.component=p;const w=p.vnode.props;p.vnode=m,p.next=null,B_(p,m.props,w,_),W_(p,m.children,_),gn(),su(p),mn()},K=(p,m,_,w,E,b,D,N,P=!1)=>{const I=p&&p.children,G=p?p.shapeFlag:0,U=m.children,{patchFlag:$,shapeFlag:ee}=m;if($>0){if($&128){Me(I,U,_,w,E,b,D,N,P);return}else if($&256){Pe(I,U,_,w,E,b,D,N,P);return}}ee&8?(G&16&&_t(I,E,b),U!==I&&u(_,U)):G&16?ee&16?Me(I,U,_,w,E,b,D,N,P):_t(I,E,b,!0):(G&8&&u(_,""),ee&16&&xe(U,_,w,E,b,D,N,P))},Pe=(p,m,_,w,E,b,D,N,P)=>{p=p||Os,m=m||Os;const I=p.length,G=m.length,U=Math.min(I,G);let $;for($=0;$<U;$++){const ee=m[$]=P?An(m[$]):Vt(m[$]);v(p[$],ee,_,null,E,b,D,N,P)}I>G?_t(p,E,b,!0,!1,U):xe(m,_,w,E,b,D,N,P,U)},Me=(p,m,_,w,E,b,D,N,P)=>{let I=0;const G=m.length;let U=p.length-1,$=G-1;for(;I<=U&&I<=$;){const ee=p[I],ue=m[I]=P?An(m[I]):Vt(m[I]);if(es(ee,ue))v(ee,ue,_,null,E,b,D,N,P);else break;I++}for(;I<=U&&I<=$;){const ee=p[U],ue=m[$]=P?An(m[$]):Vt(m[$]);if(es(ee,ue))v(ee,ue,_,null,E,b,D,N,P);else break;U--,$--}if(I>U){if(I<=$){const ee=$+1,ue=ee<G?m[ee].el:w;for(;I<=$;)v(null,m[I]=P?An(m[I]):Vt(m[I]),_,ue,E,b,D,N,P),I++}}else if(I>$)for(;I<=U;)tt(p[I],E,b,!0),I++;else{const ee=I,ue=I,Ie=new Map;for(I=ue;I<=$;I++){const dt=m[I]=P?An(m[I]):Vt(m[I]);dt.key!=null&&Ie.set(dt.key,I)}let ye,nt=0;const st=$-ue+1;let Lt=!1,Ut=0;const cr=new Array(st);for(I=0;I<st;I++)cr[I]=0;for(I=ee;I<=U;I++){const dt=p[I];if(nt>=st){tt(dt,E,b,!0);continue}let Ft;if(dt.key!=null)Ft=Ie.get(dt.key);else for(ye=ue;ye<=$;ye++)if(cr[ye-ue]===0&&es(dt,m[ye])){Ft=ye;break}Ft===void 0?tt(dt,E,b,!0):(cr[Ft-ue]=I+1,Ft>=Ut?Ut=Ft:Lt=!0,v(dt,m[Ft],_,null,E,b,D,N,P),nt++)}const Qc=Lt?K_(cr):Os;for(ye=Qc.length-1,I=st-1;I>=0;I--){const dt=ue+I,Ft=m[dt],Jc=m[dt+1],Xc=dt+1<G?Jc.el||Jc.placeholder:w;cr[I]===0?v(null,Ft,_,Xc,E,b,D,N,P):Lt&&(ye<0||I!==Qc[ye]?et(Ft,_,Xc,2):ye--)}}},et=(p,m,_,w,E=null)=>{const{el:b,type:D,transition:N,children:P,shapeFlag:I}=p;if(I&6){et(p.component.subTree,m,_,w);return}if(I&128){p.suspense.move(m,_,w);return}if(I&64){D.move(p,m,_,j);return}if(D===Je){s(b,m,_);for(let U=0;U<P.length;U++)et(P[U],m,_,w);s(p.anchor,m,_);return}if(D===Di){O(p,m,_);return}if(w!==2&&I&1&&N)if(w===0)N.beforeEnter(b),s(b,m,_),ht(()=>N.enter(b),E);else{const{leave:U,delayLeave:$,afterLeave:ee}=N,ue=()=>{p.ctx.isUnmounted?r(b):s(b,m,_)},Ie=()=>{b._isLeaving&&b[en](!0),U(b,()=>{ue(),ee&&ee()})};$?$(b,ue,Ie):Ie()}else s(b,m,_)},tt=(p,m,_,w=!1,E=!1)=>{const{type:b,props:D,ref:N,children:P,dynamicChildren:I,shapeFlag:G,patchFlag:U,dirs:$,cacheIndex:ee}=p;if(U===-2&&(E=!1),N!=null&&(gn(),Sr(N,null,_,p,!0),mn()),ee!=null&&(m.renderCache[ee]=void 0),G&256){m.ctx.deactivate(p);return}const ue=G&1&&$,Ie=!kr(p);let ye;if(Ie&&(ye=D&&D.onVnodeBeforeUnmount)&&Bt(ye,m,p),G&6)Ei(p.component,_,w);else{if(G&128){p.suspense.unmount(_,w);return}ue&&Kn(p,null,m,"beforeUnmount"),G&64?p.type.remove(p,m,_,j,w):I&&!I.hasOnce&&(b!==Je||U>0&&U&64)?_t(I,m,_,!1,!0):(b===Je&&U&384||!E&&G&16)&&_t(P,m,_),w&&Es(p)}(Ie&&(ye=D&&D.onVnodeUnmounted)||ue)&&ht(()=>{ye&&Bt(ye,m,p),ue&&Kn(p,null,m,"unmounted")},_)},Es=p=>{const{type:m,el:_,anchor:w,transition:E}=p;if(m===Je){Is(_,w);return}if(m===Di){A(p);return}const b=()=>{r(_),E&&!E.persisted&&E.afterLeave&&E.afterLeave()};if(p.shapeFlag&1&&E&&!E.persisted){const{leave:D,delayLeave:N}=E,P=()=>D(_,b);N?N(p.el,b,P):P()}else b()},Is=(p,m)=>{let _;for(;p!==m;)_=h(p),r(p),p=_;r(m)},Ei=(p,m,_)=>{const{bum:w,scope:E,job:b,subTree:D,um:N,m:P,a:I}=p;hu(P),hu(I),w&&Oi(w),E.stop(),b&&(b.flags|=8,tt(D,p,m,_)),N&&ht(N,m),ht(()=>{p.isUnmounted=!0},m)},_t=(p,m,_,w=!1,E=!1,b=0)=>{for(let D=b;D<p.length;D++)tt(p[D],m,_,w,E)},C=p=>{if(p.shapeFlag&6)return C(p.component.subTree);if(p.shapeFlag&128)return p.suspense.next();const m=h(p.anchor||p.el),_=m&&m[f_];return _?h(_):m};let F=!1;const L=(p,m,_)=>{p==null?m._vnode&&tt(m._vnode,null,null,!0):v(m._vnode||null,p,m,null,null,null,_),m._vnode=p,F||(F=!0,su(),Jh(),F=!1)},j={p:v,um:tt,m:et,r:Es,mt:H,mc:xe,pc:K,pbc:ce,n:C,o:t};return{render:L,hydrate:void 0,createApp:U_(L)}}function ma({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function qn({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function G_(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function wf(t,e,n=!1){const s=t.children,r=e.children;if(W(s)&&W(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=An(r[i]),a.el=o.el),!n&&a.patchFlag!==-2&&wf(o,a)),a.type===Wo&&a.patchFlag!==-1&&(a.el=o.el),a.type===Xe&&!a.el&&(a.el=o.el)}}function K_(t){const e=t.slice(),n=[0];let s,r,i,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(r=n[n.length-1],t[r]<c){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<c?i=a+1:o=a;c<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Cf(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Cf(e)}function hu(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const q_=Symbol.for("v-scx"),Y_=()=>Ct(q_);function hn(t,e,n){return Ef(t,e,n)}function Ef(t,e,n=we){const{immediate:s,deep:r,flush:i,once:o}=n,a=je({},n),l=e&&s||!e&&i!=="post";let c;if(Gr){if(i==="sync"){const f=Y_();c=f.__watcherHandles||(f.__watcherHandles=[])}else if(!l){const f=()=>{};return f.stop=jt,f.resume=jt,f.pause=jt,f}}const u=Ge;a.call=(f,y,v)=>Ot(f,u,y,v);let d=!1;i==="post"?a.scheduler=f=>{ht(f,u&&u.suspense)}:i!=="sync"&&(d=!0,a.scheduler=(f,y)=>{y?f():Bl(f)}),a.augmentJob=f=>{e&&(f.flags|=4),d&&(f.flags|=2,u&&(f.id=u.uid,f.i=u))};const h=c_(t,e,a);return Gr&&(c?c.push(h):l&&h()),h}function Q_(t,e,n){const s=this.proxy,r=Oe(t)?t.includes(".")?If(s,t):()=>s[t]:t.bind(s,s);let i;te(e)?i=e:(i=e.handler,n=e);const o=ui(this),a=Ef(r,i.bind(s),n);return o(),a}function If(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}const J_=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${It(e)}Modifiers`]||t[`${_s(e)}Modifiers`];function X_(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||we;let r=n;const i=e.startsWith("update:"),o=i&&J_(s,e.slice(7));o&&(o.trim&&(r=n.map(u=>Oe(u)?u.trim():u)),o.number&&(r=n.map($i)));let a,l=s[a=ca(e)]||s[a=ca(It(e))];!l&&i&&(l=s[a=ca(_s(e))]),l&&Ot(l,t,6,r);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Ot(c,t,6,r)}}const Z_=new WeakMap;function Tf(t,e,n=!1){const s=n?Z_:e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!te(t)){const l=c=>{const u=Tf(c,e,!0);u&&(a=!0,je(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!a?(Ee(t)&&s.set(t,null),null):(W(i)?i.forEach(l=>o[l]=null):je(o,i),Ee(t)&&s.set(t,o),o)}function jo(t,e){return!t||!Oo(e)?!1:(e=e.slice(2).replace(/Once$/,""),me(t,e[0].toLowerCase()+e.slice(1))||me(t,_s(e))||me(t,e))}function fu(t){const{type:e,vnode:n,proxy:s,withProxy:r,propsOptions:[i],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:d,data:h,setupState:f,ctx:y,inheritAttrs:v}=t,x=qi(t);let R,k;try{if(n.shapeFlag&4){const A=r||s,V=A;R=Vt(c.call(V,A,u,d,f,h,y)),k=a}else{const A=e;R=Vt(A.length>1?A(d,{attrs:a,slots:o,emit:l}):A(d,null)),k=e.props?a:ey(a)}}catch(A){Rr.length=0,Fo(A,t,1),R=de(Xe)}let O=R;if(k&&v!==!1){const A=Object.keys(k),{shapeFlag:V}=O;A.length&&V&7&&(i&&A.some(kl)&&(k=ty(k,i)),O=Vn(O,k,!1,!0))}return n.dirs&&(O=Vn(O,null,!1,!0),O.dirs=O.dirs?O.dirs.concat(n.dirs):n.dirs),n.transition&&jr(O,n.transition),R=O,qi(x),R}const ey=t=>{let e;for(const n in t)(n==="class"||n==="style"||Oo(n))&&((e||(e={}))[n]=t[n]);return e},ty=(t,e)=>{const n={};for(const s in t)(!kl(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function ny(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:l}=e,c=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?pu(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const h=u[d];if(o[h]!==s[h]&&!jo(c,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?pu(s,o,c):!0:!!o;return!1}function pu(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!jo(n,i))return!0}return!1}function sy({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const Sf=t=>t.__isSuspense;function ry(t,e){e&&e.pendingBranch?W(t)?e.effects.push(...t):e.effects.push(t):h_(t)}const Je=Symbol.for("v-fgt"),Wo=Symbol.for("v-txt"),Xe=Symbol.for("v-cmt"),Di=Symbol.for("v-stc"),Rr=[];let mt=null;function z(t=!1){Rr.push(mt=t?null:[])}function iy(){Rr.pop(),mt=Rr[Rr.length-1]||null}let zr=1;function Xi(t,e=!1){zr+=t,t<0&&mt&&e&&(mt.hasOnce=!0)}function kf(t){return t.dynamicChildren=zr>0?mt||Os:null,iy(),zr>0&&mt&&mt.push(t),t}function q(t,e,n,s,r,i){return kf(g(t,e,n,s,r,i,!0))}function xf(t,e,n,s,r){return kf(de(t,e,n,s,r,!0))}function Zi(t){return t?t.__v_isVNode===!0:!1}function es(t,e){return t.type===e.type&&t.key===e.key}const Rf=({key:t})=>t??null,Li=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Oe(t)||Ke(t)||te(t)?{i:gt,r:t,k:e,f:!!n}:t:null);function g(t,e=null,n=null,s=0,r=null,i=t===Je?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Rf(e),ref:e&&Li(e),scopeId:Zh,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:gt};return a?(jl(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=Oe(n)?8:16),zr>0&&!o&&mt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&mt.push(l),l}const de=oy;function oy(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===x_)&&(t=Xe),Zi(t)){const a=Vn(t,e,!0);return n&&jl(a,n),zr>0&&!i&&mt&&(a.shapeFlag&6?mt[mt.indexOf(t)]=a:mt.push(a)),a.patchFlag=-2,a}if(_y(t)&&(t=t.__vccOpts),e){e=ay(e);let{class:a,style:l}=e;a&&!Oe(a)&&(e.class=Re(a)),Ee(l)&&(Fl(l)&&!W(l)&&(l=je({},l)),e.style=Al(l))}const o=Oe(t)?1:Sf(t)?128:ef(t)?64:Ee(t)?4:te(t)?2:0;return g(t,e,n,s,r,o,i,!0)}function ay(t){return t?Fl(t)||gf(t)?je({},t):t:null}function Vn(t,e,n=!1,s=!1){const{props:r,ref:i,patchFlag:o,children:a,transition:l}=t,c=e?ly(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&Rf(c),ref:e&&e.ref?n&&i?W(i)?i.concat(Li(e)):[i,Li(e)]:Li(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Je?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Vn(t.ssContent),ssFallback:t.ssFallback&&Vn(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&s&&jr(u,l.clone(u)),u}function Ui(t=" ",e=0){return de(Wo,null,t,e)}function Ja(t,e){const n=de(Di,null,t);return n.staticCount=e,n}function De(t="",e=!1){return e?(z(),xf(Xe,null,t)):de(Xe,null,t)}function Vt(t){return t==null||typeof t=="boolean"?de(Xe):W(t)?de(Je,null,t.slice()):Zi(t)?An(t):de(Wo,null,String(t))}function An(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Vn(t)}function jl(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(W(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),jl(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!gf(e)?e._ctx=gt:r===3&&gt&&(gt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else te(e)?(e={default:e,_ctx:gt},n=32):(e=String(e),s&64?(n=16,e=[Ui(e)]):n=8);t.children=e,t.shapeFlag|=n}function ly(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=Re([e.class,s.class]));else if(r==="style")e.style=Al([e.style,s.style]);else if(Oo(r)){const i=e[r],o=s[r];o&&i!==o&&!(W(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function Bt(t,e,n,s=null){Ot(t,e,7,[n,s])}const cy=hf();let uy=0;function dy(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||cy,i={uid:uy++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Ah(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:_f(s,r),emitsOptions:Tf(s,r),emit:null,emitted:null,propsDefaults:we,inheritAttrs:s.inheritAttrs,ctx:we,data:we,props:we,attrs:we,slots:we,refs:we,setupState:we,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=X_.bind(null,i),t.ce&&t.ce(i),i}let Ge=null;const Af=()=>Ge||gt;let eo,Xa;{const t=Lo(),e=(n,s)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(s),i=>{r.length>1?r.forEach(o=>o(i)):r[0](i)}};eo=e("__VUE_INSTANCE_SETTERS__",n=>Ge=n),Xa=e("__VUE_SSR_SETTERS__",n=>Gr=n)}const ui=t=>{const e=Ge;return eo(t),t.scope.on(),()=>{t.scope.off(),eo(e)}},gu=()=>{Ge&&Ge.scope.off(),eo(null)};function Pf(t){return t.vnode.shapeFlag&4}let Gr=!1;function hy(t,e=!1,n=!1){e&&Xa(e);const{props:s,children:r}=t.vnode,i=Pf(t);F_(t,s,i,e),j_(t,r,n||e);const o=i?fy(t,e):void 0;return e&&Xa(!1),o}function fy(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,A_);const{setup:s}=n;if(s){gn();const r=t.setupContext=s.length>1?gy(t):null,i=ui(t),o=ci(s,t,0,[t.props,r]),a=Eh(o);if(mn(),i(),(a||t.sp)&&!kr(t)&&lf(t),a){if(o.then(gu,gu),e)return o.then(l=>{mu(t,l)}).catch(l=>{Fo(l,t,0)});t.asyncDep=o}else mu(t,o)}else Nf(t)}function mu(t,e,n){te(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ee(e)&&(t.setupState=qh(e)),Nf(t)}function Nf(t,e,n){const s=t.type;t.render||(t.render=s.render||jt);{const r=ui(t);gn();try{P_(t)}finally{mn(),r()}}}const py={get(t,e){return ze(t,"get",""),t[e]}};function gy(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,py),slots:t.slots,emit:t.emit,expose:e}}function $o(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(qh(n_(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in xr)return xr[n](t)},has(e,n){return n in e||n in xr}})):t.proxy}function my(t,e=!0){return te(t)?t.displayName||t.name:t.name||e&&t.__name}function _y(t){return te(t)&&"__vccOpts"in t}const ke=(t,e)=>a_(t,e,Gr);function Wl(t,e,n){const s=(i,o,a)=>{Xi(-1);try{return de(i,o,a)}finally{Xi(1)}},r=arguments.length;return r===2?Ee(e)&&!W(e)?Zi(e)?s(t,null,[e]):s(t,e):s(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Zi(n)&&(n=[n]),s(t,e,n))}const yy="3.5.21";/**
* @vue/runtime-dom v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Za;const _u=typeof window<"u"&&window.trustedTypes;if(_u)try{Za=_u.createPolicy("vue",{createHTML:t=>t})}catch{}const Of=Za?t=>Za.createHTML(t):t=>t,vy="http://www.w3.org/2000/svg",by="http://www.w3.org/1998/Math/MathML",Zt=typeof document<"u"?document:null,yu=Zt&&Zt.createElement("template"),wy={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e==="svg"?Zt.createElementNS(vy,t):e==="mathml"?Zt.createElementNS(by,t):n?Zt.createElement(t,{is:n}):Zt.createElement(t);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>Zt.createTextNode(t),createComment:t=>Zt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Zt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{yu.innerHTML=Of(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const a=yu.content;if(s==="svg"||s==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Sn="transition",dr="animation",Kr=Symbol("_vtc"),Mf={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Cy=je({},tf,Mf),Ey=t=>(t.displayName="Transition",t.props=Cy,t),an=Ey((t,{slots:e})=>Wl(m_,Iy(t),e)),Yn=(t,e=[])=>{W(t)?t.forEach(n=>n(...e)):t&&t(...e)},vu=t=>t?W(t)?t.some(e=>e.length>1):t.length>1:!1;function Iy(t){const e={};for(const S in t)S in Mf||(e[S]=t[S]);if(t.css===!1)return e;const{name:n="v",type:s,duration:r,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:f=`${n}-leave-to`}=t,y=Ty(r),v=y&&y[0],x=y&&y[1],{onBeforeEnter:R,onEnter:k,onEnterCancelled:O,onLeave:A,onLeaveCancelled:V,onBeforeAppear:M=R,onAppear:X=k,onAppearCancelled:xe=O}=e,Q=(S,ne,H,re)=>{S._enterCancelled=re,Qn(S,ne?u:a),Qn(S,ne?c:o),H&&H()},ce=(S,ne)=>{S._isLeaving=!1,Qn(S,d),Qn(S,f),Qn(S,h),ne&&ne()},B=S=>(ne,H)=>{const re=S?X:k,se=()=>Q(ne,S,H);Yn(re,[ne,se]),bu(()=>{Qn(ne,S?l:i),Jt(ne,S?u:a),vu(re)||wu(ne,s,v,se)})};return je(e,{onBeforeEnter(S){Yn(R,[S]),Jt(S,i),Jt(S,o)},onBeforeAppear(S){Yn(M,[S]),Jt(S,l),Jt(S,c)},onEnter:B(!1),onAppear:B(!0),onLeave(S,ne){S._isLeaving=!0;const H=()=>ce(S,ne);Jt(S,d),S._enterCancelled?(Jt(S,h),Iu()):(Iu(),Jt(S,h)),bu(()=>{S._isLeaving&&(Qn(S,d),Jt(S,f),vu(A)||wu(S,s,x,H))}),Yn(A,[S,H])},onEnterCancelled(S){Q(S,!1,void 0,!0),Yn(O,[S])},onAppearCancelled(S){Q(S,!0,void 0,!0),Yn(xe,[S])},onLeaveCancelled(S){ce(S),Yn(V,[S])}})}function Ty(t){if(t==null)return null;if(Ee(t))return[_a(t.enter),_a(t.leave)];{const e=_a(t);return[e,e]}}function _a(t){return xm(t)}function Jt(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Kr]||(t[Kr]=new Set)).add(e)}function Qn(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const n=t[Kr];n&&(n.delete(e),n.size||(t[Kr]=void 0))}function bu(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Sy=0;function wu(t,e,n,s){const r=t._endId=++Sy,i=()=>{r===t._endId&&s()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:a,propCount:l}=ky(t,e);if(!o)return s();const c=o+"end";let u=0;const d=()=>{t.removeEventListener(c,h),i()},h=f=>{f.target===t&&++u>=l&&d()};setTimeout(()=>{u<l&&d()},a+1),t.addEventListener(c,h)}function ky(t,e){const n=window.getComputedStyle(t),s=y=>(n[y]||"").split(", "),r=s(`${Sn}Delay`),i=s(`${Sn}Duration`),o=Cu(r,i),a=s(`${dr}Delay`),l=s(`${dr}Duration`),c=Cu(a,l);let u=null,d=0,h=0;e===Sn?o>0&&(u=Sn,d=o,h=i.length):e===dr?c>0&&(u=dr,d=c,h=l.length):(d=Math.max(o,c),u=d>0?o>c?Sn:dr:null,h=u?u===Sn?i.length:l.length:0);const f=u===Sn&&/\b(?:transform|all)(?:,|$)/.test(s(`${Sn}Property`).toString());return{type:u,timeout:d,propCount:h,hasTransform:f}}function Cu(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>Eu(n)+Eu(t[s])))}function Eu(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Iu(){return document.body.offsetHeight}function xy(t,e,n){const s=t[Kr];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const to=Symbol("_vod"),Df=Symbol("_vsh"),vt={name:"show",beforeMount(t,{value:e},{transition:n}){t[to]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):hr(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),hr(t,!0),s.enter(t)):s.leave(t,()=>{hr(t,!1)}):hr(t,e))},beforeUnmount(t,{value:e}){hr(t,e)}};function hr(t,e){t.style.display=e?t[to]:"none",t[Df]=!e}const Ry=Symbol(""),Ay=/(?:^|;)\s*display\s*:/;function Py(t,e,n){const s=t.style,r=Oe(n);let i=!1;if(n&&!r){if(e)if(Oe(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Fi(s,a,"")}else for(const o in e)n[o]==null&&Fi(s,o,"");for(const o in n)o==="display"&&(i=!0),Fi(s,o,n[o])}else if(r){if(e!==n){const o=s[Ry];o&&(n+=";"+o),s.cssText=n,i=Ay.test(n)}}else e&&t.removeAttribute("style");to in t&&(t[to]=i?s.display:"",t[Df]&&(s.display="none"))}const Tu=/\s*!important$/;function Fi(t,e,n){if(W(n))n.forEach(s=>Fi(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Ny(t,e);Tu.test(n)?t.setProperty(_s(s),n.replace(Tu,""),"important"):t[s]=n}}const Su=["Webkit","Moz","ms"],ya={};function Ny(t,e){const n=ya[e];if(n)return n;let s=It(e);if(s!=="filter"&&s in t)return ya[e]=s;s=Do(s);for(let r=0;r<Su.length;r++){const i=Su[r]+s;if(i in t)return ya[e]=i}return e}const ku="http://www.w3.org/1999/xlink";function xu(t,e,n,s,r,i=Mm(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(ku,e.slice(6,e.length)):t.setAttributeNS(ku,e,n):n==null||i&&!kh(n)?t.removeAttribute(e):t.setAttribute(e,i?"":zt(n)?String(n):n)}function Ru(t,e,n,s,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Of(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=kh(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(r||e)}function sn(t,e,n,s){t.addEventListener(e,n,s)}function Oy(t,e,n,s){t.removeEventListener(e,n,s)}const Au=Symbol("_vei");function My(t,e,n,s,r=null){const i=t[Au]||(t[Au]={}),o=i[e];if(s&&o)o.value=s;else{const[a,l]=Dy(e);if(s){const c=i[e]=Fy(s,r);sn(t,a,c,l)}else o&&(Oy(t,a,o,l),i[e]=void 0)}}const Pu=/(?:Once|Passive|Capture)$/;function Dy(t){let e;if(Pu.test(t)){e={};let s;for(;s=t.match(Pu);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):_s(t.slice(2)),e]}let va=0;const Ly=Promise.resolve(),Uy=()=>va||(Ly.then(()=>va=0),va=Date.now());function Fy(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Ot(By(s,n.value),e,5,[s])};return n.value=t,n.attached=Uy(),n}function By(t,e){if(W(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const Nu=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Hy=(t,e,n,s,r,i)=>{const o=r==="svg";e==="class"?xy(t,s,o):e==="style"?Py(t,n,s):Oo(e)?kl(e)||My(t,e,n,s,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Vy(t,e,s,o))?(Ru(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&xu(t,e,s,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Oe(s))?Ru(t,It(e),s,i,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),xu(t,e,s,o))};function Vy(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&Nu(e)&&te(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Nu(e)&&Oe(n)?!1:e in t}const jn=t=>{const e=t.props["onUpdate:modelValue"]||!1;return W(e)?n=>Oi(e,n):e};function jy(t){t.target.composing=!0}function Ou(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Et=Symbol("_assign"),no={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t[Et]=jn(r);const i=s||r.props&&r.props.type==="number";sn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=$i(a)),t[Et](a)}),n&&sn(t,"change",()=>{t.value=t.value.trim()}),e||(sn(t,"compositionstart",jy),sn(t,"compositionend",Ou),sn(t,"change",Ou))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:r,number:i}},o){if(t[Et]=jn(o),t.composing)return;const a=(i||t.type==="number")&&!/^0\d/.test(t.value)?$i(t.value):t.value,l=e??"";a!==l&&(document.activeElement===t&&t.type!=="range"&&(s&&e===n||r&&t.value.trim()===l)||(t.value=l))}},Wy={deep:!0,created(t,e,n){t[Et]=jn(n),sn(t,"change",()=>{const s=t._modelValue,r=$s(t),i=t.checked,o=t[Et];if(W(s)){const a=Pl(s,r),l=a!==-1;if(i&&!l)o(s.concat(r));else if(!i&&l){const c=[...s];c.splice(a,1),o(c)}}else if(er(s)){const a=new Set(s);i?a.add(r):a.delete(r),o(a)}else o(Lf(t,i))})},mounted:Mu,beforeUpdate(t,e,n){t[Et]=jn(n),Mu(t,e,n)}};function Mu(t,{value:e,oldValue:n},s){t._modelValue=e;let r;if(W(e))r=Pl(e,s.props.value)>-1;else if(er(e))r=e.has(s.props.value);else{if(e===n)return;r=ls(e,Lf(t,!0))}t.checked!==r&&(t.checked=r)}const $y={created(t,{value:e},n){t.checked=ls(e,n.props.value),t[Et]=jn(n),sn(t,"change",()=>{t[Et]($s(t))})},beforeUpdate(t,{value:e,oldValue:n},s){t[Et]=jn(s),e!==n&&(t.checked=ls(e,s.props.value))}},zy={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const r=er(e);sn(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?$i($s(o)):$s(o));t[Et](t.multiple?r?new Set(i):i:i[0]),t._assigning=!0,Dn(()=>{t._assigning=!1})}),t[Et]=jn(s)},mounted(t,{value:e}){Du(t,e)},beforeUpdate(t,e,n){t[Et]=jn(n)},updated(t,{value:e}){t._assigning||Du(t,e)}};function Du(t,e){const n=t.multiple,s=W(e);if(!(n&&!s&&!er(e))){for(let r=0,i=t.options.length;r<i;r++){const o=t.options[r],a=$s(o);if(n)if(s){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(c=>String(c)===String(a)):o.selected=Pl(e,a)>-1}else o.selected=e.has(a);else if(ls($s(o),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function $s(t){return"_value"in t?t._value:t.value}function Lf(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const uR={created(t,e,n){xi(t,e,n,null,"created")},mounted(t,e,n){xi(t,e,n,null,"mounted")},beforeUpdate(t,e,n,s){xi(t,e,n,s,"beforeUpdate")},updated(t,e,n,s){xi(t,e,n,s,"updated")}};function Gy(t,e){switch(t){case"SELECT":return zy;case"TEXTAREA":return no;default:switch(e){case"checkbox":return Wy;case"radio":return $y;default:return no}}}function xi(t,e,n,s,r){const o=Gy(t.tagName,n.props&&n.props.type)[r];o&&o(t,e,n,s)}const Ky=["ctrl","shift","alt","meta"],qy={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Ky.some(n=>t[`${n}Key`]&&!e.includes(n))},dR=(t,e)=>{const n=t._withMods||(t._withMods={}),s=e.join(".");return n[s]||(n[s]=((r,...i)=>{for(let o=0;o<e.length;o++){const a=qy[e[o]];if(a&&a(r,e))return}return t(r,...i)}))},Yy=je({patchProp:Hy},wy);let Lu;function Qy(){return Lu||(Lu=$_(Yy))}const Jy=((...t)=>{const e=Qy().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=Zy(s);if(!r)return;const i=e._component;!te(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=n(r,!1,Xy(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e});function Xy(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Zy(t){return Oe(t)?document.querySelector(t):t}function ev(){return Uf().__VUE_DEVTOOLS_GLOBAL_HOOK__}function Uf(){return typeof navigator<"u"&&typeof window<"u"?window:typeof globalThis<"u"?globalThis:{}}const tv=typeof Proxy=="function",nv="devtools-plugin:setup",sv="plugin:settings:set";let Ss,el;function rv(){var t;return Ss!==void 0||(typeof window<"u"&&window.performance?(Ss=!0,el=window.performance):typeof globalThis<"u"&&(!((t=globalThis.perf_hooks)===null||t===void 0)&&t.performance)?(Ss=!0,el=globalThis.perf_hooks.performance):Ss=!1),Ss}function iv(){return rv()?el.now():Date.now()}class ov{constructor(e,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=n;const s={};if(e.settings)for(const o in e.settings){const a=e.settings[o];s[o]=a.defaultValue}const r=`__vue-devtools-plugin-settings__${e.id}`;let i=Object.assign({},s);try{const o=localStorage.getItem(r),a=JSON.parse(o);Object.assign(i,a)}catch{}this.fallbacks={getSettings(){return i},setSettings(o){try{localStorage.setItem(r,JSON.stringify(o))}catch{}i=o},now(){return iv()}},n&&n.on(sv,(o,a)=>{o===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(o,a)=>this.target?this.target.on[a]:(...l)=>{this.onQueue.push({method:a,args:l})}}),this.proxiedTarget=new Proxy({},{get:(o,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...l)=>(this.targetQueue.push({method:a,args:l,resolve:()=>{}}),this.fallbacks[a](...l)):(...l)=>new Promise(c=>{this.targetQueue.push({method:a,args:l,resolve:c})})})}async setRealTarget(e){this.target=e;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function av(t,e){const n=t,s=Uf(),r=ev(),i=tv&&n.enableEarlyProxy;if(r&&(s.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!i))r.emit(nv,t,e);else{const o=i?new ov(n,r):null;(s.__VUE_DEVTOOLS_PLUGINS__=s.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:e,proxy:o}),o&&e(o.proxiedTarget)}}/*!
 * vuex v4.1.0
 * (c) 2022 Evan You
 * @license MIT
 */var Ff="store";function Bf(t){return t===void 0&&(t=null),Ct(t!==null?t:Ff)}function nr(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function lv(t){return t!==null&&typeof t=="object"}function cv(t){return t&&typeof t.then=="function"}function uv(t,e){return function(){return t(e)}}function Hf(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var s=e.indexOf(t);s>-1&&e.splice(s,1)}}function Vf(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;zo(t,n,[],t._modules.root,!0),$l(t,n,e)}function $l(t,e,n){var s=t._state,r=t._scope;t.getters={},t._makeLocalGettersCache=Object.create(null);var i=t._wrappedGetters,o={},a={},l=Lm(!0);l.run(function(){nr(i,function(c,u){o[u]=uv(c,t),a[u]=ke(function(){return o[u]()}),Object.defineProperty(t.getters,u,{get:function(){return a[u].value},enumerable:!0})})}),t._state=li({data:e}),t._scope=l,t.strict&&gv(t),s&&n&&t._withCommit(function(){s.data=null}),r&&r.stop()}function zo(t,e,n,s,r){var i=!n.length,o=t._modules.getNamespace(n);if(s.namespaced&&(t._modulesNamespaceMap[o],t._modulesNamespaceMap[o]=s),!i&&!r){var a=zl(e,n.slice(0,-1)),l=n[n.length-1];t._withCommit(function(){a[l]=s.state})}var c=s.context=dv(t,o,n);s.forEachMutation(function(u,d){var h=o+d;hv(t,h,u,c)}),s.forEachAction(function(u,d){var h=u.root?d:o+d,f=u.handler||u;fv(t,h,f,c)}),s.forEachGetter(function(u,d){var h=o+d;pv(t,h,u,c)}),s.forEachChild(function(u,d){zo(t,e,n.concat(d),u,r)})}function dv(t,e,n){var s=e==="",r={dispatch:s?t.dispatch:function(i,o,a){var l=so(i,o,a),c=l.payload,u=l.options,d=l.type;return(!u||!u.root)&&(d=e+d),t.dispatch(d,c)},commit:s?t.commit:function(i,o,a){var l=so(i,o,a),c=l.payload,u=l.options,d=l.type;(!u||!u.root)&&(d=e+d),t.commit(d,c,u)}};return Object.defineProperties(r,{getters:{get:s?function(){return t.getters}:function(){return jf(t,e)}},state:{get:function(){return zl(t.state,n)}}}),r}function jf(t,e){if(!t._makeLocalGettersCache[e]){var n={},s=e.length;Object.keys(t.getters).forEach(function(r){if(r.slice(0,s)===e){var i=r.slice(s);Object.defineProperty(n,i,{get:function(){return t.getters[r]},enumerable:!0})}}),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function hv(t,e,n,s){var r=t._mutations[e]||(t._mutations[e]=[]);r.push(function(o){n.call(t,s.state,o)})}function fv(t,e,n,s){var r=t._actions[e]||(t._actions[e]=[]);r.push(function(o){var a=n.call(t,{dispatch:s.dispatch,commit:s.commit,getters:s.getters,state:s.state,rootGetters:t.getters,rootState:t.state},o);return cv(a)||(a=Promise.resolve(a)),t._devtoolHook?a.catch(function(l){throw t._devtoolHook.emit("vuex:error",l),l}):a})}function pv(t,e,n,s){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(i){return n(s.state,s.getters,i.state,i.getters)})}function gv(t){hn(function(){return t._state.data},function(){},{deep:!0,flush:"sync"})}function zl(t,e){return e.reduce(function(n,s){return n[s]},t)}function so(t,e,n){return lv(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}var mv="vuex bindings",Uu="vuex:mutations",ba="vuex:actions",ks="vuex",_v=0;function yv(t,e){av({id:"org.vuejs.vuex",app:t,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[mv]},function(n){n.addTimelineLayer({id:Uu,label:"Vuex Mutations",color:Fu}),n.addTimelineLayer({id:ba,label:"Vuex Actions",color:Fu}),n.addInspector({id:ks,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree(function(s){if(s.app===t&&s.inspectorId===ks)if(s.filter){var r=[];Gf(r,e._modules.root,s.filter,""),s.rootNodes=r}else s.rootNodes=[zf(e._modules.root,"")]}),n.on.getInspectorState(function(s){if(s.app===t&&s.inspectorId===ks){var r=s.nodeId;jf(e,r),s.state=wv(Ev(e._modules,r),r==="root"?e.getters:e._makeLocalGettersCache,r)}}),n.on.editInspectorState(function(s){if(s.app===t&&s.inspectorId===ks){var r=s.nodeId,i=s.path;r!=="root"&&(i=r.split("/").filter(Boolean).concat(i)),e._withCommit(function(){s.set(e._state.data,i,s.state.value)})}}),e.subscribe(function(s,r){var i={};s.payload&&(i.payload=s.payload),i.state=r,n.notifyComponentUpdate(),n.sendInspectorTree(ks),n.sendInspectorState(ks),n.addTimelineEvent({layerId:Uu,event:{time:Date.now(),title:s.type,data:i}})}),e.subscribeAction({before:function(s,r){var i={};s.payload&&(i.payload=s.payload),s._id=_v++,s._time=Date.now(),i.state=r,n.addTimelineEvent({layerId:ba,event:{time:s._time,title:s.type,groupId:s._id,subtitle:"start",data:i}})},after:function(s,r){var i={},o=Date.now()-s._time;i.duration={_custom:{type:"duration",display:o+"ms",tooltip:"Action duration",value:o}},s.payload&&(i.payload=s.payload),i.state=r,n.addTimelineEvent({layerId:ba,event:{time:Date.now(),title:s.type,groupId:s._id,subtitle:"end",data:i}})}})})}var Fu=8702998,vv=6710886,bv=16777215,Wf={label:"namespaced",textColor:bv,backgroundColor:vv};function $f(t){return t&&t!=="root"?t.split("/").slice(-2,-1)[0]:"Root"}function zf(t,e){return{id:e||"root",label:$f(e),tags:t.namespaced?[Wf]:[],children:Object.keys(t._children).map(function(n){return zf(t._children[n],e+n+"/")})}}function Gf(t,e,n,s){s.includes(n)&&t.push({id:s||"root",label:s.endsWith("/")?s.slice(0,s.length-1):s||"Root",tags:e.namespaced?[Wf]:[]}),Object.keys(e._children).forEach(function(r){Gf(t,e._children[r],n,s+r+"/")})}function wv(t,e,n){e=n==="root"?e:e[n];var s=Object.keys(e),r={state:Object.keys(t.state).map(function(o){return{key:o,editable:!0,value:t.state[o]}})};if(s.length){var i=Cv(e);r.getters=Object.keys(i).map(function(o){return{key:o.endsWith("/")?$f(o):o,editable:!1,value:tl(function(){return i[o]})}})}return r}function Cv(t){var e={};return Object.keys(t).forEach(function(n){var s=n.split("/");if(s.length>1){var r=e,i=s.pop();s.forEach(function(o){r[o]||(r[o]={_custom:{value:{},display:o,tooltip:"Module",abstract:!0}}),r=r[o]._custom.value}),r[i]=tl(function(){return t[n]})}else e[n]=tl(function(){return t[n]})}),e}function Ev(t,e){var n=e.split("/").filter(function(s){return s});return n.reduce(function(s,r,i){var o=s[r];if(!o)throw new Error('Missing module "'+r+'" for path "'+e+'".');return i===n.length-1?o:o._children},e==="root"?t:t.root._children)}function tl(t){try{return t()}catch(e){return e}}var Dt=function(e,n){this.runtime=n,this._children=Object.create(null),this._rawModule=e;var s=e.state;this.state=(typeof s=="function"?s():s)||{}},Kf={namespaced:{configurable:!0}};Kf.namespaced.get=function(){return!!this._rawModule.namespaced};Dt.prototype.addChild=function(e,n){this._children[e]=n};Dt.prototype.removeChild=function(e){delete this._children[e]};Dt.prototype.getChild=function(e){return this._children[e]};Dt.prototype.hasChild=function(e){return e in this._children};Dt.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)};Dt.prototype.forEachChild=function(e){nr(this._children,e)};Dt.prototype.forEachGetter=function(e){this._rawModule.getters&&nr(this._rawModule.getters,e)};Dt.prototype.forEachAction=function(e){this._rawModule.actions&&nr(this._rawModule.actions,e)};Dt.prototype.forEachMutation=function(e){this._rawModule.mutations&&nr(this._rawModule.mutations,e)};Object.defineProperties(Dt.prototype,Kf);var ys=function(e){this.register([],e,!1)};ys.prototype.get=function(e){return e.reduce(function(n,s){return n.getChild(s)},this.root)};ys.prototype.getNamespace=function(e){var n=this.root;return e.reduce(function(s,r){return n=n.getChild(r),s+(n.namespaced?r+"/":"")},"")};ys.prototype.update=function(e){qf([],this.root,e)};ys.prototype.register=function(e,n,s){var r=this;s===void 0&&(s=!0);var i=new Dt(n,s);if(e.length===0)this.root=i;else{var o=this.get(e.slice(0,-1));o.addChild(e[e.length-1],i)}n.modules&&nr(n.modules,function(a,l){r.register(e.concat(l),a,s)})};ys.prototype.unregister=function(e){var n=this.get(e.slice(0,-1)),s=e[e.length-1],r=n.getChild(s);r&&r.runtime&&n.removeChild(s)};ys.prototype.isRegistered=function(e){var n=this.get(e.slice(0,-1)),s=e[e.length-1];return n?n.hasChild(s):!1};function qf(t,e,n){if(e.update(n),n.modules)for(var s in n.modules){if(!e.getChild(s))return;qf(t.concat(s),e.getChild(s),n.modules[s])}}function Iv(t){return new ut(t)}var ut=function(e){var n=this;e===void 0&&(e={});var s=e.plugins;s===void 0&&(s=[]);var r=e.strict;r===void 0&&(r=!1);var i=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new ys(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._scope=null,this._devtools=i;var o=this,a=this,l=a.dispatch,c=a.commit;this.dispatch=function(h,f){return l.call(o,h,f)},this.commit=function(h,f,y){return c.call(o,h,f,y)},this.strict=r;var u=this._modules.root.state;zo(this,u,[],this._modules.root),$l(this,u),s.forEach(function(d){return d(n)})},Gl={state:{configurable:!0}};ut.prototype.install=function(e,n){e.provide(n||Ff,this),e.config.globalProperties.$store=this;var s=this._devtools!==void 0?this._devtools:!1;s&&yv(e,this)};Gl.state.get=function(){return this._state.data};Gl.state.set=function(t){};ut.prototype.commit=function(e,n,s){var r=this,i=so(e,n,s),o=i.type,a=i.payload,l={type:o,payload:a},c=this._mutations[o];c&&(this._withCommit(function(){c.forEach(function(d){d(a)})}),this._subscribers.slice().forEach(function(u){return u(l,r.state)}))};ut.prototype.dispatch=function(e,n){var s=this,r=so(e,n),i=r.type,o=r.payload,a={type:i,payload:o},l=this._actions[i];if(l){try{this._actionSubscribers.slice().filter(function(u){return u.before}).forEach(function(u){return u.before(a,s.state)})}catch{}var c=l.length>1?Promise.all(l.map(function(u){return u(o)})):l[0](o);return new Promise(function(u,d){c.then(function(h){try{s._actionSubscribers.filter(function(f){return f.after}).forEach(function(f){return f.after(a,s.state)})}catch{}u(h)},function(h){try{s._actionSubscribers.filter(function(f){return f.error}).forEach(function(f){return f.error(a,s.state,h)})}catch{}d(h)})})}};ut.prototype.subscribe=function(e,n){return Hf(e,this._subscribers,n)};ut.prototype.subscribeAction=function(e,n){var s=typeof e=="function"?{before:e}:e;return Hf(s,this._actionSubscribers,n)};ut.prototype.watch=function(e,n,s){var r=this;return hn(function(){return e(r.state,r.getters)},n,Object.assign({},s))};ut.prototype.replaceState=function(e){var n=this;this._withCommit(function(){n._state.data=e})};ut.prototype.registerModule=function(e,n,s){s===void 0&&(s={}),typeof e=="string"&&(e=[e]),this._modules.register(e,n),zo(this,this.state,e,this._modules.get(e),s.preserveState),$l(this,this.state)};ut.prototype.unregisterModule=function(e){var n=this;typeof e=="string"&&(e=[e]),this._modules.unregister(e),this._withCommit(function(){var s=zl(n.state,e.slice(0,-1));delete s[e[e.length-1]]}),Vf(this)};ut.prototype.hasModule=function(e){return typeof e=="string"&&(e=[e]),this._modules.isRegistered(e)};ut.prototype.hotUpdate=function(e){this._modules.update(e),Vf(this,!0)};ut.prototype._withCommit=function(e){var n=this._committing;this._committing=!0,e(),this._committing=n};Object.defineProperties(ut.prototype,Gl);const Tv=()=>{};var Bu={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yf={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T=function(t,e){if(!t)throw sr(e)},sr=function(t){return new Error("Firebase Database ("+Yf.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qf=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Sv=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],l=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Kl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,l=r+2<t.length,c=l?t[r+2]:0,u=i>>2,d=(i&3)<<4|a>>4;let h=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(h=64)),s.push(n[u],n[d],n[h],n[f])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Qf(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Sv(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const c=r<t.length?n[t.charAt(r)]:64;++r;const d=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||c==null||d==null)throw new kv;const h=i<<2|a>>4;if(s.push(h),c!==64){const f=a<<4&240|c>>2;if(s.push(f),d!==64){const y=c<<6&192|d;s.push(y)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class kv extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Jf=function(t){const e=Qf(t);return Kl.encodeByteArray(e,!0)},ro=function(t){return Jf(t).replace(/\./g,"")},io=function(t){try{return Kl.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xv(t){return Xf(void 0,t)}function Xf(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Rv(n)||(t[n]=Xf(t[n],e[n]));return t}function Rv(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Av(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pv=()=>Av().__FIREBASE_DEFAULTS__,Nv=()=>{if(typeof process>"u"||typeof Bu>"u")return;const t=Bu.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Ov=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&io(t[1]);return e&&JSON.parse(e)},ql=()=>{try{return Tv()||Pv()||Nv()||Ov()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Zf=t=>ql()?.emulatorHosts?.[t],ep=t=>{const e=Zf(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},tp=()=>ql()?.config,np=t=>ql()?.[`_${t}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vs(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Yl(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sp(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[ro(JSON.stringify(n)),ro(JSON.stringify(o)),""].join(".")}const Ar={};function Mv(){const t={prod:[],emulator:[]};for(const e of Object.keys(Ar))Ar[e]?t.emulator.push(e):t.prod.push(e);return t}function Dv(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Hu=!1;function Ql(t,e){if(typeof window>"u"||typeof document>"u"||!vs(window.location.host)||Ar[t]===e||Ar[t]||Hu)return;Ar[t]=e;function n(h){return`__firebase__banner__${h}`}const s="__firebase__banner",i=Mv().prod.length>0;function o(){const h=document.getElementById(s);h&&h.remove()}function a(h){h.style.display="flex",h.style.background="#7faaf0",h.style.position="fixed",h.style.bottom="5px",h.style.left="5px",h.style.padding=".5em",h.style.borderRadius="5px",h.style.alignItems="center"}function l(h,f){h.setAttribute("width","24"),h.setAttribute("id",f),h.setAttribute("height","24"),h.setAttribute("viewBox","0 0 24 24"),h.setAttribute("fill","none"),h.style.marginLeft="-6px"}function c(){const h=document.createElement("span");return h.style.cursor="pointer",h.style.marginLeft="16px",h.style.fontSize="24px",h.innerHTML=" &times;",h.onclick=()=>{Hu=!0,o()},h}function u(h,f){h.setAttribute("id",f),h.innerText="Learn more",h.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",h.setAttribute("target","__blank"),h.style.paddingLeft="5px",h.style.textDecoration="underline"}function d(){const h=Dv(s),f=n("text"),y=document.getElementById(f)||document.createElement("span"),v=n("learnmore"),x=document.getElementById(v)||document.createElement("a"),R=n("preprendIcon"),k=document.getElementById(R)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(h.created){const O=h.element;a(O),u(x,v);const A=c();l(k,R),O.append(k,y,x,A),document.body.appendChild(O)}i?(y.innerText="Preview backend disconnected.",k.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(k.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,y.innerText="Preview backend running in this workspace."),y.setAttribute("id",f)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",d):d()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Jl(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ze())}function Lv(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Uv(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function rp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Fv(){const t=Ze();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Bv(){return Yf.NODE_ADMIN===!0}function Hv(){try{return typeof indexedDB=="object"}catch{return!1}}function Vv(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{e(r.error?.message||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jv="FirebaseError";class Cn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=jv,Object.setPrototypeOf(this,Cn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,di.prototype.create)}}class di{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?Wv(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Cn(r,a,s)}}function Wv(t,e){return t.replace($v,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const $v=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qr(t){return JSON.parse(t)}function Ve(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ip=function(t){let e={},n={},s={},r="";try{const i=t.split(".");e=qr(io(i[0])||""),n=qr(io(i[1])||""),r=i[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:r}},zv=function(t){const e=ip(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Gv=function(t){const e=ip(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function zs(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function oo(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ao(t,e,n){const s={};for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&(s[r]=e.call(n,t[r],r,t));return s}function cs(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(Vu(i)&&Vu(o)){if(!cs(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Vu(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rr(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function wr(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function Cr(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kv{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)s[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)s[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const h=s[d-3]^s[d-8]^s[d-14]^s[d-16];s[d]=(h<<1|h>>>31)&4294967295}let r=this.chain_[0],i=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let d=0;d<80;d++){d<40?d<20?(c=a^i&(o^a),u=1518500249):(c=i^o^a,u=1859775393):d<60?(c=i&o|a&(i|o),u=2400959708):(c=i^o^a,u=3395469782);const h=(r<<5|r>>>27)+c+l+u+s[d]&4294967295;l=a,a=o,o=(i<<30|i>>>2)&4294967295,i=r,r=h}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let r=0;const i=this.buf_;let o=this.inbuf_;for(;r<n;){if(o===0)for(;r<=s;)this.compress_(e,r),r+=this.blockSize;if(typeof e=="string"){for(;r<n;)if(i[o]=e.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}else for(;r<n;)if(i[o]=e[r],++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let r=0;r<5;r++)for(let i=24;i>=0;i-=8)e[s]=this.chain_[r]>>i&255,++s;return e}}function qv(t,e){const n=new Yv(t,e);return n.subscribe.bind(n)}class Yv{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Qv(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=wa),r.error===void 0&&(r.error=wa),r.complete===void 0&&(r.complete=wa);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Qv(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function wa(){}function Gs(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jv=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);if(r>=55296&&r<=56319){const i=r-55296;s++,T(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;r=65536+(i<<10)+o}r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):r<65536?(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Go=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fe(t){return t&&t._delegate?t._delegate:t}class Wn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xv{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new rn;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e?.identifier),s=e?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(e0(e))try{this.getOrInitializeService({instanceIdentifier:Xn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Xn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Xn){return this.instances.has(e)}getOptions(e=Xn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){const s=this.normalizeInstanceIdentifier(n),r=this.onInitCallbacks.get(s)??new Set;r.add(e),this.onInitCallbacks.set(s,r);const i=this.instances.get(s);return i&&e(i,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Zv(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Xn){return this.component?this.component.multipleInstances?e:Xn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Zv(t){return t===Xn?void 0:t}function e0(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Xv(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ve;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ve||(ve={}));const n0={debug:ve.DEBUG,verbose:ve.VERBOSE,info:ve.INFO,warn:ve.WARN,error:ve.ERROR,silent:ve.SILENT},s0=ve.INFO,r0={[ve.DEBUG]:"log",[ve.VERBOSE]:"log",[ve.INFO]:"info",[ve.WARN]:"warn",[ve.ERROR]:"error"},i0=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=r0[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Xl{constructor(e){this.name=e,this._logLevel=s0,this._logHandler=i0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ve))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?n0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ve.DEBUG,...e),this._logHandler(this,ve.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ve.VERBOSE,...e),this._logHandler(this,ve.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ve.INFO,...e),this._logHandler(this,ve.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ve.WARN,...e),this._logHandler(this,ve.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ve.ERROR,...e),this._logHandler(this,ve.ERROR,...e)}}const o0=(t,e)=>e.some(n=>t instanceof n);let ju,Wu;function a0(){return ju||(ju=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function l0(){return Wu||(Wu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const op=new WeakMap,nl=new WeakMap,ap=new WeakMap,Ca=new WeakMap,Zl=new WeakMap;function c0(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Un(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&op.set(n,t)}).catch(()=>{}),Zl.set(e,t),e}function u0(t){if(nl.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});nl.set(t,e)}let sl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return nl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||ap.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Un(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function d0(t){sl=t(sl)}function h0(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Ea(this),e,...n);return ap.set(s,e.sort?e.sort():[e]),Un(s)}:l0().includes(t)?function(...e){return t.apply(Ea(this),e),Un(op.get(this))}:function(...e){return Un(t.apply(Ea(this),e))}}function f0(t){return typeof t=="function"?h0(t):(t instanceof IDBTransaction&&u0(t),o0(t,a0())?new Proxy(t,sl):t)}function Un(t){if(t instanceof IDBRequest)return c0(t);if(Ca.has(t))return Ca.get(t);const e=f0(t);return e!==t&&(Ca.set(t,e),Zl.set(e,t)),e}const Ea=t=>Zl.get(t);function p0(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=Un(o);return s&&o.addEventListener("upgradeneeded",l=>{s(Un(o.result),l.oldVersion,l.newVersion,Un(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),r&&l.addEventListener("versionchange",c=>r(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const g0=["get","getKey","getAll","getAllKeys","count"],m0=["put","add","delete","clear"],Ia=new Map;function $u(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ia.get(e))return Ia.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=m0.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||g0.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,r?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),r&&l.done]))[0]};return Ia.set(e,i),i}d0(t=>({...t,get:(e,n,s)=>$u(e,n)||t.get(e,n,s),has:(e,n)=>!!$u(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(y0(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function y0(t){return t.getComponent()?.type==="VERSION"}const rl="@firebase/app",zu="0.14.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _n=new Xl("@firebase/app"),v0="@firebase/app-compat",b0="@firebase/analytics-compat",w0="@firebase/analytics",C0="@firebase/app-check-compat",E0="@firebase/app-check",I0="@firebase/auth",T0="@firebase/auth-compat",S0="@firebase/database",k0="@firebase/data-connect",x0="@firebase/database-compat",R0="@firebase/functions",A0="@firebase/functions-compat",P0="@firebase/installations",N0="@firebase/installations-compat",O0="@firebase/messaging",M0="@firebase/messaging-compat",D0="@firebase/performance",L0="@firebase/performance-compat",U0="@firebase/remote-config",F0="@firebase/remote-config-compat",B0="@firebase/storage",H0="@firebase/storage-compat",V0="@firebase/firestore",j0="@firebase/ai",W0="@firebase/firestore-compat",$0="firebase",z0="12.3.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const il="[DEFAULT]",G0={[rl]:"fire-core",[v0]:"fire-core-compat",[w0]:"fire-analytics",[b0]:"fire-analytics-compat",[E0]:"fire-app-check",[C0]:"fire-app-check-compat",[I0]:"fire-auth",[T0]:"fire-auth-compat",[S0]:"fire-rtdb",[k0]:"fire-data-connect",[x0]:"fire-rtdb-compat",[R0]:"fire-fn",[A0]:"fire-fn-compat",[P0]:"fire-iid",[N0]:"fire-iid-compat",[O0]:"fire-fcm",[M0]:"fire-fcm-compat",[D0]:"fire-perf",[L0]:"fire-perf-compat",[U0]:"fire-rc",[F0]:"fire-rc-compat",[B0]:"fire-gcs",[H0]:"fire-gcs-compat",[V0]:"fire-fst",[W0]:"fire-fst-compat",[j0]:"fire-vertex","fire-js":"fire-js",[$0]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lo=new Map,K0=new Map,ol=new Map;function Gu(t,e){try{t.container.addComponent(e)}catch(n){_n.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function us(t){const e=t.name;if(ol.has(e))return _n.debug(`There were multiple attempts to register component ${e}.`),!1;ol.set(e,t);for(const n of lo.values())Gu(n,t);for(const n of K0.values())Gu(n,t);return!0}function Ko(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function ot(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q0={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Fn=new di("app","Firebase",q0);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y0{constructor(e,n,s){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Wn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Fn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bs=z0;function lp(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s={name:il,automaticDataCollectionEnabled:!0,...e},r=s.name;if(typeof r!="string"||!r)throw Fn.create("bad-app-name",{appName:String(r)});if(n||(n=tp()),!n)throw Fn.create("no-options");const i=lo.get(r);if(i){if(cs(n,i.options)&&cs(s,i.config))return i;throw Fn.create("duplicate-app",{appName:r})}const o=new t0(r);for(const l of ol.values())o.addComponent(l);const a=new Y0(n,s,o);return lo.set(r,a),a}function ec(t=il){const e=lo.get(t);if(!e&&t===il&&tp())return lp();if(!e)throw Fn.create("no-app",{appName:t});return e}function Wt(t,e,n){let s=G0[t]??t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),i=e.match(/\s|\//);if(r||i){const o=[`Unable to register library "${s}" with version "${e}":`];r&&o.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),_n.warn(o.join(" "));return}us(new Wn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q0="firebase-heartbeat-database",J0=1,Yr="firebase-heartbeat-store";let Ta=null;function cp(){return Ta||(Ta=p0(Q0,J0,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Yr)}catch(n){console.warn(n)}}}}).catch(t=>{throw Fn.create("idb-open",{originalErrorMessage:t.message})})),Ta}async function X0(t){try{const n=(await cp()).transaction(Yr),s=await n.objectStore(Yr).get(up(t));return await n.done,s}catch(e){if(e instanceof Cn)_n.warn(e.message);else{const n=Fn.create("idb-get",{originalErrorMessage:e?.message});_n.warn(n.message)}}}async function Ku(t,e){try{const s=(await cp()).transaction(Yr,"readwrite");await s.objectStore(Yr).put(e,up(t)),await s.done}catch(n){if(n instanceof Cn)_n.warn(n.message);else{const s=Fn.create("idb-set",{originalErrorMessage:n?.message});_n.warn(s.message)}}}function up(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z0=1024,eb=30;class tb{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new sb(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=qu();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats.length>eb){const r=rb(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(r,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){_n.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=qu(),{heartbeatsToSend:n,unsentEntries:s}=nb(this._heartbeatsCache.heartbeats),r=ro(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(e){return _n.warn(e),""}}}function qu(){return new Date().toISOString().substring(0,10)}function nb(t,e=Z0){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Yu(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Yu(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class sb{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Hv()?Vv().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await X0(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Ku(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Ku(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Yu(t){return ro(JSON.stringify({version:2,heartbeats:t})).length}function rb(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ib(t){us(new Wn("platform-logger",e=>new _0(e),"PRIVATE")),us(new Wn("heartbeat",e=>new tb(e),"PRIVATE")),Wt(rl,zu,t),Wt(rl,zu,"esm2020"),Wt("fire-js","")}ib("");function dp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ob=dp,hp=new di("auth","Firebase",dp());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const co=new Xl("@firebase/auth");function ab(t,...e){co.logLevel<=ve.WARN&&co.warn(`Auth (${bs}): ${t}`,...e)}function Bi(t,...e){co.logLevel<=ve.ERROR&&co.error(`Auth (${bs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(t,...e){throw nc(t,...e)}function Pt(t,...e){return nc(t,...e)}function tc(t,e,n){const s={...ob(),[e]:n};return new di("auth","Firebase",s).create(e,{appName:t.name})}function fn(t){return tc(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function lb(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&Tt(t,"argument-error"),tc(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function nc(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return hp.create(t,...e)}function Y(t,e,...n){if(!t)throw nc(e,...n)}function ln(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Bi(e),new Error(e)}function yn(t,e){t||ln(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function al(){return typeof self<"u"&&self.location?.href||""}function cb(){return Qu()==="http:"||Qu()==="https:"}function Qu(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ub(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(cb()||Uv()||"connection"in navigator)?navigator.onLine:!0}function db(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e,n){this.shortDelay=e,this.longDelay=n,yn(n>e,"Short delay should be less than long delay!"),this.isMobile=Jl()||rp()}get(){return ub()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sc(t,e){yn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fp{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ln("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ln("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ln("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fb=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],pb=new hi(3e4,6e4);function En(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function qt(t,e,n,s,r={}){return pp(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=rr({key:t.config.apiKey,...o}).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:l,...i};return Lv()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&vs(t.emulatorConfig.host)&&(c.credentials="include"),fp.fetch()(await gp(t,t.config.apiHost,n,a),c)})}async function pp(t,e,n){t._canInitEmulator=!1;const s={...hb,...e};try{const r=new mb(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ri(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ri(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ri(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ri(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw tc(t,u,c);Tt(t,u)}}catch(r){if(r instanceof Cn)throw r;Tt(t,"network-request-failed",{message:String(r)})}}async function fi(t,e,n,s,r={}){const i=await qt(t,e,n,s,r);return"mfaPendingCredential"in i&&Tt(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function gp(t,e,n,s){const r=`${e}${n}?${s}`,i=t,o=i.config.emulator?sc(t.config,r):`${t.config.apiScheme}://${r}`;return fb.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function gb(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class mb{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Pt(this.auth,"network-request-failed")),pb.get())})}}function Ri(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=Pt(t,e,s);return r.customData._tokenResponse=n,r}function Ju(t){return t!==void 0&&t.enterprise!==void 0}class _b{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return gb(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function yb(t,e){return qt(t,"GET","/v2/recaptchaConfig",En(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vb(t,e){return qt(t,"POST","/v1/accounts:delete",e)}async function uo(t,e){return qt(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function bb(t,e=!1){const n=Fe(t),s=await n.getIdToken(e),r=rc(s);Y(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i?.sign_in_provider;return{claims:r,token:s,authTime:Pr(Sa(r.auth_time)),issuedAtTime:Pr(Sa(r.iat)),expirationTime:Pr(Sa(r.exp)),signInProvider:o||null,signInSecondFactor:i?.sign_in_second_factor||null}}function Sa(t){return Number(t)*1e3}function rc(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Bi("JWT malformed, contained fewer than 3 sections"),null;try{const r=io(n);return r?JSON.parse(r):(Bi("Failed to decode base64 JWT payload"),null)}catch(r){return Bi("Caught error parsing JWT payload as JSON",r?.toString()),null}}function Xu(t){const e=rc(t);return Y(e,"internal-error"),Y(typeof e.exp<"u","internal-error"),Y(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ks(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Cn&&wb(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function wb({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cb{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Pr(this.lastLoginAt),this.creationTime=Pr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ho(t){const e=t.auth,n=await t.getIdToken(),s=await Ks(t,uo(e,{idToken:n}));Y(s?.users.length,e,"internal-error");const r=s.users[0];t._notifyReloadListener(r);const i=r.providerUserInfo?.length?mp(r.providerUserInfo):[],o=Ib(t.providerData,i),a=t.isAnonymous,l=!(t.email&&r.passwordHash)&&!o?.length,c=a?l:!1,u={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:o,metadata:new ll(r.createdAt,r.lastLoginAt),isAnonymous:c};Object.assign(t,u)}async function Eb(t){const e=Fe(t);await ho(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ib(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function mp(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tb(t,e){const n=await pp(t,{},async()=>{const s=rr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=await gp(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:a,body:s};return t.emulatorConfig&&vs(t.emulatorConfig.host)&&(l.credentials="include"),fp.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Sb(t,e){return qt(t,"POST","/v2/accounts:revokeToken",En(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Y(e.idToken,"internal-error"),Y(typeof e.idToken<"u","internal-error"),Y(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Xu(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Y(e.length!==0,"internal-error");const n=Xu(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Y(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await Tb(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new Fs;return s&&(Y(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(Y(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(Y(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Fs,this.toJSON())}_performRefresh(){return ln("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kn(t,e){Y(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class kt{constructor({uid:e,auth:n,stsTokenManager:s,...r}){this.providerId="firebase",this.proactiveRefresh=new Cb(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new ll(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await Ks(this,this.stsTokenManager.getToken(this.auth,e));return Y(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return bb(this,e)}reload(){return Eb(this)}_assign(e){this!==e&&(Y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new kt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){Y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await ho(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ot(this.auth.app))return Promise.reject(fn(this.auth));const e=await this.getIdToken();return await Ks(this,vb(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const s=n.displayName??void 0,r=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,a=n.tenantId??void 0,l=n._redirectEventId??void 0,c=n.createdAt??void 0,u=n.lastLoginAt??void 0,{uid:d,emailVerified:h,isAnonymous:f,providerData:y,stsTokenManager:v}=n;Y(d&&v,e,"internal-error");const x=Fs.fromJSON(this.name,v);Y(typeof d=="string",e,"internal-error"),kn(s,e.name),kn(r,e.name),Y(typeof h=="boolean",e,"internal-error"),Y(typeof f=="boolean",e,"internal-error"),kn(i,e.name),kn(o,e.name),kn(a,e.name),kn(l,e.name),kn(c,e.name),kn(u,e.name);const R=new kt({uid:d,auth:e,email:r,emailVerified:h,displayName:s,isAnonymous:f,photoURL:o,phoneNumber:i,tenantId:a,stsTokenManager:x,createdAt:c,lastLoginAt:u});return y&&Array.isArray(y)&&(R.providerData=y.map(k=>({...k}))),l&&(R._redirectEventId=l),R}static async _fromIdTokenResponse(e,n,s=!1){const r=new Fs;r.updateFromServerResponse(n);const i=new kt({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await ho(i),i}static async _fromGetAccountInfoResponse(e,n,s){const r=n.users[0];Y(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?mp(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!i?.length,a=new Fs;a.updateFromIdToken(s);const l=new kt({uid:r.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new ll(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!i?.length};return Object.assign(l,c),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zu=new Map;function cn(t){yn(t instanceof Function,"Expected a class definition");let e=Zu.get(t);return e?(yn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Zu.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _p{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}_p.type="NONE";const ed=_p;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hi(t,e,n){return`firebase:${t}:${e}:${n}`}class Bs{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Hi(this.userKey,r.apiKey,i),this.fullPersistenceKey=Hi("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await uo(this.auth,{idToken:e}).catch(()=>{});return n?kt._fromGetAccountInfoResponse(this.auth,n,e):null}return kt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Bs(cn(ed),e,s);const r=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=r[0]||cn(ed);const o=Hi(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){let d;if(typeof u=="string"){const h=await uo(e,{idToken:u}).catch(()=>{});if(!h)break;d=await kt._fromGetAccountInfoResponse(e,h,u)}else d=kt._fromJSON(e,u);c!==i&&(a=d),i=c;break}}catch{}const l=r.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Bs(i,e,s):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new Bs(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function td(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(wp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(yp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ep(e))return"Blackberry";if(Ip(e))return"Webos";if(vp(e))return"Safari";if((e.includes("chrome/")||bp(e))&&!e.includes("edge/"))return"Chrome";if(Cp(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if(s?.length===2)return s[1]}return"Other"}function yp(t=Ze()){return/firefox\//i.test(t)}function vp(t=Ze()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function bp(t=Ze()){return/crios\//i.test(t)}function wp(t=Ze()){return/iemobile/i.test(t)}function Cp(t=Ze()){return/android/i.test(t)}function Ep(t=Ze()){return/blackberry/i.test(t)}function Ip(t=Ze()){return/webos/i.test(t)}function ic(t=Ze()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function kb(t=Ze()){return ic(t)&&!!window.navigator?.standalone}function xb(){return Fv()&&document.documentMode===10}function Tp(t=Ze()){return ic(t)||Cp(t)||Ip(t)||Ep(t)||/windows phone/i.test(t)||wp(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sp(t,e=[]){let n;switch(t){case"Browser":n=td(Ze());break;case"Worker":n=`${td(Ze())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${bs}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rb{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ab(t,e={}){return qt(t,"GET","/v2/passwordPolicy",En(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pb=6;class Nb{constructor(e){const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??Pb,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),r&&(n.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ob{constructor(e,n,s,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new nd(this),this.idTokenSubscription=new nd(this),this.beforeStateQueue=new Rb(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=hp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=cn(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Bs.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await uo(this,{idToken:e}),s=await kt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(ot(this.app)){const i=this.app.settings.authIdToken;return i?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(i).then(o,o))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let s=n,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=this.redirectUser?._redirectEventId,o=s?._redirectEventId,a=await this.tryRedirectSignIn(e);(!i||i===o)&&a?.user&&(s=a.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(i){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ho(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=db()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ot(this.app))return Promise.reject(fn(this));const n=e?Fe(e):null;return n&&Y(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ot(this.app)?Promise.reject(fn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ot(this.app)?Promise.reject(fn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(cn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Ab(this),n=new Nb(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new di("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await Sb(this,s)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&cn(e)||this._popupRedirectResolver;Y(n,this,"argument-error"),this.redirectPersistenceManager=await Bs.create(this,[cn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(Y(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,s,r);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Sp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(e["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){if(ot(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&ab(`Error while retrieving App Check token: ${e.error}`),e?.token}}function In(t){return Fe(t)}class nd{constructor(e){this.auth=e,this.observer=null,this.addObserver=qv(n=>this.observer=n)}get next(){return Y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qo={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Mb(t){qo=t}function kp(t){return qo.loadJS(t)}function Db(){return qo.recaptchaEnterpriseScript}function Lb(){return qo.gapiScript}function Ub(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class Fb{constructor(){this.enterprise=new Bb}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class Bb{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const Hb="recaptcha-enterprise",xp="NO_RECAPTCHA";class Vb{constructor(e){this.type=Hb,this.auth=In(e)}async verify(e="verify",n=!1){async function s(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{yb(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new _b(l);return i.tenantId==null?i._agentRecaptchaConfig=c:i._tenantRecaptchaConfigs[i.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function r(i,o,a){const l=window.grecaptcha;Ju(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(c=>{o(c)}).catch(()=>{o(xp)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Fb().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{s(this.auth).then(a=>{if(!n&&Ju(window.grecaptcha))r(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=Db();l.length!==0&&(l+=a),kp(l).then(()=>{r(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function sd(t,e,n,s=!1,r=!1){const i=new Vb(t);let o;if(r)o=xp;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const a={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,c=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return s?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function fo(t,e,n,s,r){if(t._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await sd(t,e,n,n==="getOobCode");return s(t,i)}else return s(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await sd(t,e,n,n==="getOobCode");return s(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jb(t,e){const n=Ko(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(cs(i,e??{}))return r;Tt(r,"already-initialized")}return n.initialize({options:e})}function Wb(t,e){const n=e?.persistence||[],s=(Array.isArray(n)?n:[n]).map(cn);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e?.popupRedirectResolver)}function $b(t,e,n){const s=In(t);Y(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!1,i=Rp(e),{host:o,port:a}=zb(e),l=a===null?"":`:${a}`,c={url:`${i}//${o}${l}/`},u=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!s._canInitEmulator){Y(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),Y(cs(c,s.config.emulator)&&cs(u,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=c,s.emulatorConfig=u,s.settings.appVerificationDisabledForTesting=!0,vs(o)?(Yl(`${i}//${o}${l}`),Ql("Auth",!0)):Gb()}function Rp(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function zb(t){const e=Rp(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:rd(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:rd(o)}}}function rd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Gb(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ln("not implemented")}_getIdTokenResponse(e){return ln("not implemented")}_linkToIdToken(e,n){return ln("not implemented")}_getReauthenticationResolver(e){return ln("not implemented")}}async function Kb(t,e){return qt(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qb(t,e){return fi(t,"POST","/v1/accounts:signInWithPassword",En(t,e))}async function Yb(t,e){return qt(t,"POST","/v1/accounts:sendOobCode",En(t,e))}async function Qb(t,e){return Yb(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jb(t,e){return fi(t,"POST","/v1/accounts:signInWithEmailLink",En(t,e))}async function Xb(t,e){return fi(t,"POST","/v1/accounts:signInWithEmailLink",En(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr extends oc{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new Qr(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Qr(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return fo(e,n,"signInWithPassword",qb);case"emailLink":return Jb(e,{email:this._email,oobCode:this._password});default:Tt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return fo(e,s,"signUpPassword",Kb);case"emailLink":return Xb(e,{idToken:n,email:this._email,oobCode:this._password});default:Tt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hs(t,e){return fi(t,"POST","/v1/accounts:signInWithIdp",En(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zb="http://localhost";class ds extends oc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ds(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Tt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r,...i}=n;if(!s||!r)return null;const o=new ds(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Hs(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Hs(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Hs(e,n)}buildRequest(){const e={requestUri:Zb,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=rr(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ew(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function tw(t){const e=wr(Cr(t)).link,n=e?wr(Cr(e)).deep_link_id:null,s=wr(Cr(t)).deep_link_id;return(s?wr(Cr(s)).link:null)||s||n||e||t}class ac{constructor(e){const n=wr(Cr(e)),s=n.apiKey??null,r=n.oobCode??null,i=ew(n.mode??null);Y(s&&r&&i,"argument-error"),this.apiKey=s,this.operation=i,this.code=r,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=tw(e);try{return new ac(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(){this.providerId=ir.PROVIDER_ID}static credential(e,n){return Qr._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=ac.parseLink(n);return Y(s,"argument-error"),Qr._fromEmailAndCode(e,s.code,s.tenantId)}}ir.PROVIDER_ID="password";ir.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ir.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi extends lc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn extends pi{constructor(){super("facebook.com")}static credential(e){return ds._fromParams({providerId:Nn.PROVIDER_ID,signInMethod:Nn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Nn.credentialFromTaggedObject(e)}static credentialFromError(e){return Nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Nn.credential(e.oauthAccessToken)}catch{return null}}}Nn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Nn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on extends pi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ds._fromParams({providerId:on.PROVIDER_ID,signInMethod:on.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return on.credentialFromTaggedObject(e)}static credentialFromError(e){return on.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return on.credential(n,s)}catch{return null}}}on.GOOGLE_SIGN_IN_METHOD="google.com";on.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On extends pi{constructor(){super("github.com")}static credential(e){return ds._fromParams({providerId:On.PROVIDER_ID,signInMethod:On.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return On.credentialFromTaggedObject(e)}static credentialFromError(e){return On.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return On.credential(e.oauthAccessToken)}catch{return null}}}On.GITHUB_SIGN_IN_METHOD="github.com";On.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn extends pi{constructor(){super("twitter.com")}static credential(e,n){return ds._fromParams({providerId:Mn.PROVIDER_ID,signInMethod:Mn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Mn.credentialFromTaggedObject(e)}static credentialFromError(e){return Mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Mn.credential(n,s)}catch{return null}}}Mn.TWITTER_SIGN_IN_METHOD="twitter.com";Mn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nw(t,e){return fi(t,"POST","/v1/accounts:signUp",En(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await kt._fromIdTokenResponse(e,s,r),o=id(s);return new hs({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=id(s);return new hs({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function id(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po extends Cn{constructor(e,n,s,r){super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,po.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new po(e,n,s,r)}}function Ap(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?po._fromErrorAndOperation(t,i,e,s):i})}async function sw(t,e,n=!1){const s=await Ks(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return hs._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rw(t,e,n=!1){const{auth:s}=t;if(ot(s.app))return Promise.reject(fn(s));const r="reauthenticate";try{const i=await Ks(t,Ap(s,r,e,t),n);Y(i.idToken,s,"internal-error");const o=rc(i.idToken);Y(o,s,"internal-error");const{sub:a}=o;return Y(t.uid===a,s,"user-mismatch"),hs._forOperation(t,r,i)}catch(i){throw i?.code==="auth/user-not-found"&&Tt(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pp(t,e,n=!1){if(ot(t.app))return Promise.reject(fn(t));const s="signIn",r=await Ap(t,s,e),i=await hs._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function iw(t,e){return Pp(In(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Np(t){const e=In(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function hR(t,e,n){const s=In(t);await fo(s,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",Qb)}async function fR(t,e,n){if(ot(t.app))return Promise.reject(fn(t));const s=In(t),o=await fo(s,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",nw).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Np(t),l}),a=await hs._fromIdTokenResponse(s,"signIn",o);return await s._updateCurrentUser(a.user),a}function pR(t,e,n){return ot(t.app)?Promise.reject(fn(t)):iw(Fe(t),ir.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&Np(t),s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ow(t,e){return qt(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gR(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const s=Fe(t),i={idToken:await s.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Ks(s,ow(s.auth,i));s.displayName=o.displayName||null,s.photoURL=o.photoUrl||null;const a=s.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=s.displayName,a.photoURL=s.photoURL),await s._updateTokensIfNecessary(o)}function aw(t,e,n,s){return Fe(t).onIdTokenChanged(e,n,s)}function lw(t,e,n){return Fe(t).beforeAuthStateChanged(e,n)}function Op(t,e,n,s){return Fe(t).onAuthStateChanged(e,n,s)}function Mp(t){return Fe(t).signOut()}const go="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dp{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(go,"1"),this.storage.removeItem(go),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cw=1e3,uw=10;class Lp extends Dp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Tp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;n?this.detachListener():this.stopPolling();const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);xb()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,uw):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},cw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Lp.type="LOCAL";const dw=Lp;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Up extends Dp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Up.type="SESSION";const Fp=Up;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hw(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new Yo(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!o?.size)return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async c=>c(n.origin,i)),l=await hw(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Yo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cc(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fw{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const c=cc("",20);r.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(d){const h=d;if(h.data.eventId===c)switch(h.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(h.data.response);break;default:clearTimeout(u),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t(){return window}function pw(t){$t().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bp(){return typeof $t().WorkerGlobalScope<"u"&&typeof $t().importScripts=="function"}async function gw(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function mw(){return navigator?.serviceWorker?.controller||null}function _w(){return Bp()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hp="firebaseLocalStorageDb",yw=1,mo="firebaseLocalStorage",Vp="fbase_key";class gi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Qo(t,e){return t.transaction([mo],e?"readwrite":"readonly").objectStore(mo)}function vw(){const t=indexedDB.deleteDatabase(Hp);return new gi(t).toPromise()}function cl(){const t=indexedDB.open(Hp,yw);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(mo,{keyPath:Vp})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(mo)?e(s):(s.close(),await vw(),e(await cl()))})})}async function od(t,e,n){const s=Qo(t,!0).put({[Vp]:e,value:n});return new gi(s).toPromise()}async function bw(t,e){const n=Qo(t,!1).get(e),s=await new gi(n).toPromise();return s===void 0?null:s.value}function ad(t,e){const n=Qo(t,!0).delete(e);return new gi(n).toPromise()}const ww=800,Cw=3;class jp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await cl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>Cw)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Bp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Yo._getInstance(_w()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await gw(),!this.activeServiceWorker)return;this.sender=new fw(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||mw()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await cl();return await od(e,go,"1"),await ad(e,go),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>od(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>bw(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ad(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=Qo(r,!1).getAll();return new gi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ww)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}jp.type="LOCAL";const Ew=jp;new hi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wp(t,e){return e?cn(e):(Y(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc extends oc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Hs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Hs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Hs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Iw(t){return Pp(t.auth,new uc(t),t.bypassAuthState)}function Tw(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),rw(n,new uc(t),t.bypassAuthState)}async function Sw(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),sw(n,new uc(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $p{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Iw;case"linkViaPopup":case"linkViaRedirect":return Sw;case"reauthViaPopup":case"reauthViaRedirect":return Tw;default:Tt(this.auth,"internal-error")}}resolve(e){yn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){yn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kw=new hi(2e3,1e4);async function mR(t,e,n){if(ot(t.app))return Promise.reject(Pt(t,"operation-not-supported-in-this-environment"));const s=In(t);lb(t,e,lc);const r=Wp(s,n);return new ts(s,"signInViaPopup",e,r).executeNotNull()}class ts extends $p{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,ts.currentPopupAction&&ts.currentPopupAction.cancel(),ts.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Y(e,this.auth,"internal-error"),e}async onExecution(){yn(this.filter.length===1,"Popup operations only handle one event");const e=cc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Pt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(Pt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ts.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Pt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,kw.get())};e()}}ts.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xw="pendingRedirect",Vi=new Map;class Rw extends $p{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Vi.get(this.auth._key());if(!e){try{const s=await Aw(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Vi.set(this.auth._key(),e)}return this.bypassAuthState||Vi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Aw(t,e){const n=Ow(e),s=Nw(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function Pw(t,e){Vi.set(t._key(),e)}function Nw(t){return cn(t._redirectPersistence)}function Ow(t){return Hi(xw,t.config.apiKey,t.name)}async function Mw(t,e,n=!1){if(ot(t.app))return Promise.reject(fn(t));const s=In(t),r=Wp(s,e),o=await new Rw(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dw=600*1e3;class Lw{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Uw(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){if(e.error&&!zp(e)){const s=e.error.code?.split("auth/")[1]||"internal-error";n.onError(Pt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Dw&&this.cachedEventUids.clear(),this.cachedEventUids.has(ld(e))}saveEventToCache(e){this.cachedEventUids.add(ld(e)),this.lastProcessedEventTime=Date.now()}}function ld(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function zp({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function Uw(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return zp(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fw(t,e={}){return qt(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Hw=/^https?/;async function Vw(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Fw(t);for(const n of e)try{if(jw(n))return}catch{}Tt(t,"unauthorized-domain")}function jw(t){const e=al(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!Hw.test(n))return!1;if(Bw.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ww=new hi(3e4,6e4);function cd(){const t=$t().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function $w(t){return new Promise((e,n)=>{function s(){cd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{cd(),n(Pt(t,"network-request-failed"))},timeout:Ww.get()})}if($t().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if($t().gapi?.load)s();else{const r=Ub("iframefcb");return $t()[r]=()=>{gapi.load?s():n(Pt(t,"network-request-failed"))},kp(`${Lb()}?onload=${r}`).catch(i=>n(i))}}).catch(e=>{throw ji=null,e})}let ji=null;function zw(t){return ji=ji||$w(t),ji}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gw=new hi(5e3,15e3),Kw="__/auth/iframe",qw="emulator/auth/iframe",Yw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Qw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Jw(t){const e=t.config;Y(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?sc(e,qw):`https://${t.config.authDomain}/${Kw}`,s={apiKey:e.apiKey,appName:t.name,v:bs},r=Qw.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${rr(s).slice(1)}`}async function Xw(t){const e=await zw(t),n=$t().gapi;return Y(n,t,"internal-error"),e.open({where:document.body,url:Jw(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Yw,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=Pt(t,"network-request-failed"),a=$t().setTimeout(()=>{i(o)},Gw.get());function l(){$t().clearTimeout(a),r(s)}s.ping(l).then(l,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},e1=500,t1=600,n1="_blank",s1="http://localhost";class ud{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function r1(t,e,n,s=e1,r=t1){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l={...Zw,width:s.toString(),height:r.toString(),top:i,left:o},c=Ze().toLowerCase();n&&(a=bp(c)?n1:n),yp(c)&&(e=e||s1,l.scrollbars="yes");const u=Object.entries(l).reduce((h,[f,y])=>`${h}${f}=${y},`,"");if(kb(c)&&a!=="_self")return i1(e||"",a),new ud(null);const d=window.open(e||"",a,u);Y(d,t,"popup-blocked");try{d.focus()}catch{}return new ud(d)}function i1(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o1="__/auth/handler",a1="emulator/auth/handler",l1=encodeURIComponent("fac");async function dd(t,e,n,s,r,i){Y(t.config.authDomain,t,"auth-domain-config-required"),Y(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:bs,eventId:r};if(e instanceof lc){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",oo(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,d]of Object.entries({}))o[u]=d}if(e instanceof pi){const u=e.getScopes().filter(d=>d!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${l1}=${encodeURIComponent(l)}`:"";return`${c1(t)}?${rr(a).slice(1)}${c}`}function c1({config:t}){return t.emulator?sc(t,a1):`https://${t.authDomain}/${o1}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ka="webStorageSupport";class u1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Fp,this._completeRedirectFn=Mw,this._overrideRedirectResult=Pw}async _openPopup(e,n,s,r){yn(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const i=await dd(e,n,s,al(),r);return r1(e,i,cc())}async _openRedirect(e,n,s,r){await this._originValidation(e);const i=await dd(e,n,s,al(),r);return pw(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(yn(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await Xw(e),s=new Lw(e);return n.register("authEvent",r=>(Y(r?.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ka,{type:ka},r=>{const i=r?.[0]?.[ka];i!==void 0&&n(!!i),Tt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Vw(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Tp()||vp()||ic()}}const d1=u1;var hd="@firebase/auth",fd="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f1(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function p1(t){us(new Wn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;Y(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Sp(t)},c=new Ob(s,r,i,l);return Wb(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),us(new Wn("auth-internal",e=>{const n=In(e.getProvider("auth").getImmediate());return(s=>new h1(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Wt(hd,fd,f1(t)),Wt(hd,fd,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g1=300,m1=np("authIdTokenMaxAge")||g1;let pd=null;const _1=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>m1)return;const r=n?.token;pd!==r&&(pd=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function y1(t=ec()){const e=Ko(t,"auth");if(e.isInitialized())return e.getImmediate();const n=jb(t,{popupRedirectResolver:d1,persistence:[Ew,dw,Fp]}),s=np("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(s,location.origin);if(location.origin===i.origin){const o=_1(i.toString());lw(n,o,()=>o(n.currentUser)),aw(n,a=>o(a))}}const r=Zf("auth");return r&&$b(n,`http://${r}`),n}function v1(){return document.getElementsByTagName("head")?.[0]??document}Mb({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=Pt("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",v1().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});p1("Browser");var b1="firebase",w1="12.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Wt(b1,w1,"app");var gd={};const md="@firebase/database",_d="1.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gp="";function C1(t){Gp=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E1{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ve(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:qr(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I1{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Kt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kp=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new E1(e)}}catch{}return new I1},ns=Kp("localStorage"),T1=Kp("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vs=new Xl("@firebase/database"),S1=(function(){let t=1;return function(){return t++}})(),qp=function(t){const e=Jv(t),n=new Kv;n.update(e);const s=n.digest();return Kl.encodeByteArray(s)},mi=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=mi.apply(null,s):typeof s=="object"?e+=Ve(s):e+=s,e+=" "}return e};let Nr=null,yd=!0;const k1=function(t,e){T(!0,"Can't turn on custom loggers persistently."),Vs.logLevel=ve.VERBOSE,Nr=Vs.log.bind(Vs)},$e=function(...t){if(yd===!0&&(yd=!1,Nr===null&&T1.get("logging_enabled")===!0&&k1()),Nr){const e=mi.apply(null,t);Nr(e)}},_i=function(t){return function(...e){$e(t,...e)}},ul=function(...t){const e="FIREBASE INTERNAL ERROR: "+mi(...t);Vs.error(e)},vn=function(...t){const e=`FIREBASE FATAL ERROR: ${mi(...t)}`;throw Vs.error(e),new Error(e)},ct=function(...t){const e="FIREBASE WARNING: "+mi(...t);Vs.warn(e)},x1=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ct("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Jo=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},R1=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},fs="[MIN_NAME]",$n="[MAX_NAME]",ws=function(t,e){if(t===e)return 0;if(t===fs||e===$n)return-1;if(e===fs||t===$n)return 1;{const n=vd(t),s=vd(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},A1=function(t,e){return t===e?0:t<e?-1:1},fr=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ve(e))},dc=function(t){if(typeof t!="object"||t===null)return Ve(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Ve(e[s]),n+=":",n+=dc(t[e[s]]);return n+="}",n},Yp=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let r=0;r<n;r+=e)r+e>n?s.push(t.substring(r,n)):s.push(t.substring(r,r+e));return s};function qe(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Qp=function(t){T(!Jo(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let r,i,o,a,l;t===0?(i=0,o=0,r=1/t===-1/0?1:0):(r=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),i=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(i=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(i%2?1:0),i=Math.floor(i/2);c.push(r?1:0),c.reverse();const u=c.join("");let d="";for(l=0;l<64;l+=8){let h=parseInt(u.substr(l,8),2).toString(16);h.length===1&&(h="0"+h),d=d+h}return d.toLowerCase()},P1=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},N1=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function O1(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const M1=new RegExp("^-?(0*)\\d{1,10}$"),D1=-2147483648,L1=2147483647,vd=function(t){if(M1.test(t)){const e=Number(t);if(e>=D1&&e<=L1)return e}return null},or=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw ct("Exception was thrown by user callback.",n),e},Math.floor(0))}},U1=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Or=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F1{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,ot(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n?.getImmediate({optional:!0}),this.appCheck||n?.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.appCheckProvider?.get().then(n=>n.addTokenListener(e))}notifyForInvalidToken(){ct(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B1{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(r=>this.auth_=r)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?($e("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ct(e)}}class Wi{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Wi.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hc="5",Jp="v",Xp="s",Zp="r",eg="f",tg=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,ng="ls",sg="p",dl="ac",rg="websocket",ig="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class og{constructor(e,n,s,r,i=!1,o="",a=!1,l=!1,c=null){this.secure=n,this.namespace=s,this.webSocketOnly=r,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this.emulatorOptions=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ns.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ns.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function H1(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function ag(t,e,n){T(typeof e=="string","typeof type must == string"),T(typeof n=="object","typeof params must == object");let s;if(e===rg)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===ig)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);H1(t)&&(n.ns=t.namespace);const r=[];return qe(n,(i,o)=>{r.push(i+"="+o)}),s+r.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V1{constructor(){this.counters_={}}incrementCounter(e,n=1){Kt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return xv(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xa={},Ra={};function fc(t){const e=t.toString();return xa[e]||(xa[e]=new V1),xa[e]}function j1(t,e){const n=t.toString();return Ra[n]||(Ra[n]=e()),Ra[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W1{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let r=0;r<s.length;++r)s[r]&&or(()=>{this.onMessage_(s[r])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bd="start",$1="close",z1="pLPCommand",G1="pRTLPCB",lg="id",cg="pw",ug="ser",K1="cb",q1="seg",Y1="ts",Q1="d",J1="dframe",dg=1870,hg=30,X1=dg-hg,Z1=25e3,eC=3e4;class Ps{constructor(e,n,s,r,i,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=r,this.authToken=i,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=_i(e),this.stats_=fc(n),this.urlFn=l=>(this.appCheckToken&&(l[dl]=this.appCheckToken),ag(n,ig,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new W1(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(eC)),R1(()=>{if(this.isClosed_)return;this.scriptTagHolder=new pc((...i)=>{const[o,a,l,c,u]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===bd)this.id=a,this.password=l;else if(o===$1)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,a]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[bd]="t",s[ug]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[K1]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Jp]=hc,this.transportSessionId&&(s[Xp]=this.transportSessionId),this.lastSessionId&&(s[ng]=this.lastSessionId),this.applicationId&&(s[sg]=this.applicationId),this.appCheckToken&&(s[dl]=this.appCheckToken),typeof location<"u"&&location.hostname&&tg.test(location.hostname)&&(s[Zp]=eg);const r=this.urlFn(s);this.log_("Connecting via long-poll to "+r),this.scriptTagHolder.addTag(r,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ps.forceAllow_=!0}static forceDisallow(){Ps.forceDisallow_=!0}static isAvailable(){return Ps.forceAllow_?!0:!Ps.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!P1()&&!N1()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ve(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Jf(n),r=Yp(s,X1);for(let i=0;i<r.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[i]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[J1]="t",s[lg]=e,s[cg]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ve(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class pc{constructor(e,n,s,r){this.onDisconnect=s,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=S1(),window[z1+this.uniqueCallbackIdentifier]=e,window[G1+this.uniqueCallbackIdentifier]=n,this.myIFrame=pc.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){$e("frame writing exception"),a.stack&&$e(a.stack),$e(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||$e("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[lg]=this.myID,e[cg]=this.myPW,e[ug]=this.currentSerial;let n=this.urlFn(e),s="",r=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+hg+s.length<=dg;){const o=this.pendingSegs.shift();s=s+"&"+q1+r+"="+o.seg+"&"+Y1+r+"="+o.ts+"&"+Q1+r+"="+o.d,r++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},r=setTimeout(s,Math.floor(Z1)),i=()=>{clearTimeout(r),s()};this.addTag(e,i)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const r=s.readyState;(!r||r==="loaded"||r==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{$e("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tC=16384,nC=45e3;let _o=null;typeof MozWebSocket<"u"?_o=MozWebSocket:typeof WebSocket<"u"&&(_o=WebSocket);class St{constructor(e,n,s,r,i,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=r,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=_i(this.connId),this.stats_=fc(n),this.connURL=St.connectionURL_(n,o,a,r,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,r,i){const o={};return o[Jp]=hc,typeof location<"u"&&location.hostname&&tg.test(location.hostname)&&(o[Zp]=eg),n&&(o[Xp]=n),s&&(o[ng]=s),r&&(o[dl]=r),i&&(o[sg]=i),ag(e,rg,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ns.set("previous_websocket_failure",!0);try{let s;Bv(),this.mySock=new _o(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const r=s.message||s.data;r&&this.log_(r),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const r=s.message||s.data;r&&this.log_(r),this.onClosed_()}}start(){}static forceDisallow(){St.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&_o!==null&&!St.forceDisallow_}static previouslyFailed(){return ns.isInMemoryStorage||ns.get("previous_websocket_failure")===!0}markConnectionHealthy(){ns.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=qr(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(T(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Ve(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Yp(n,tC);s.length>1&&this.sendString_(String(s.length));for(let r=0;r<s.length;r++)this.sendString_(s[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(nC))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}St.responsesRequiredToBeHealthy=2;St.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{static get ALL_TRANSPORTS(){return[Ps,St]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=St&&St.isAvailable();let s=n&&!St.previouslyFailed();if(e.webSocketOnly&&(n||ct("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[St];else{const r=this.transports_=[];for(const i of Jr.ALL_TRANSPORTS)i&&i.isAvailable()&&r.push(i);Jr.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Jr.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sC=6e4,rC=5e3,iC=10*1024,oC=100*1024,Aa="t",wd="d",aC="s",Cd="r",lC="e",Ed="o",Id="a",Td="n",Sd="p",cC="h";class uC{constructor(e,n,s,r,i,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=r,this.authToken_=i,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=_i("c:"+this.id+":"),this.transportManager_=new Jr(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=Or(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>oC?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>iC?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Aa in e){const n=e[Aa];n===Id?this.upgradeIfSecondaryHealthy_():n===Cd?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Ed&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=fr("t",e),s=fr("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Sd,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Id,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Td,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=fr("t",e),s=fr("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=fr(Aa,e);if(wd in e){const s=e[wd];if(n===cC){const r={...s};this.repoInfo_.isUsingEmulator&&(r.h=this.repoInfo_.host),this.onHandshake_(r)}else if(n===Td){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===aC?this.onConnectionShutdown_(s):n===Cd?this.onReset_(s):n===lC?ul("Server Error: "+s):n===Ed?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ul("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),hc!==s&&ct("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Or(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(sC))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Or(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(rC))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Sd,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ns.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fg{put(e,n,s,r){}merge(e,n,s,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pg{constructor(e){this.allowedEvents_=e,this.listeners_={},T(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let r=0;r<s.length;r++)s[r].callback.apply(s[r].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const r=this.getInitialEvent(e);r&&n.apply(s,r)}off(e,n,s){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let i=0;i<r.length;i++)if(r[i].callback===n&&(!s||s===r[i].context)){r.splice(i,1);return}}validateEventType_(e){T(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo extends pg{static getInstance(){return new yo}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Jl()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return T(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kd=32,xd=768;class _e{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let r=0;r<this.pieces_.length;r++)this.pieces_[r].length>0&&(this.pieces_[s]=this.pieces_[r],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function pe(){return new _e("")}function oe(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function zn(t){return t.pieces_.length-t.pieceNum_}function Ce(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new _e(t.pieces_,e)}function gc(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function dC(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Xr(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function gg(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new _e(e,0)}function Ne(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof _e)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let r=0;r<s.length;r++)s[r].length>0&&n.push(s[r])}return new _e(n,0)}function ae(t){return t.pieceNum_>=t.pieces_.length}function at(t,e){const n=oe(t),s=oe(e);if(n===null)return e;if(n===s)return at(Ce(t),Ce(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function hC(t,e){const n=Xr(t,0),s=Xr(e,0);for(let r=0;r<n.length&&r<s.length;r++){const i=ws(n[r],s[r]);if(i!==0)return i}return n.length===s.length?0:n.length<s.length?-1:1}function mc(t,e){if(zn(t)!==zn(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function bt(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(zn(t)>zn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class fC{constructor(e,n){this.errorPrefix_=n,this.parts_=Xr(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Go(this.parts_[s]);mg(this)}}function pC(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Go(e),mg(t)}function gC(t){const e=t.parts_.pop();t.byteLength_-=Go(e),t.parts_.length>0&&(t.byteLength_-=1)}function mg(t){if(t.byteLength_>xd)throw new Error(t.errorPrefix_+"has a key path longer than "+xd+" bytes ("+t.byteLength_+").");if(t.parts_.length>kd)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+kd+") or object contains a cycle "+Zn(t))}function Zn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c extends pg{static getInstance(){return new _c}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return T(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pr=1e3,mC=300*1e3,Rd=30*1e3,_C=1.3,yC=3e4,vC="server_kill",Ad=3;class pn extends fg{constructor(e,n,s,r,i,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=r,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=pn.nextPersistentConnectionId_++,this.log_=_i("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=pr,this.maxReconnectDelay_=mC,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");_c.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&yo.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const r=++this.requestNumber_,i={r,a:e,b:n};this.log_(Ve(i)),T(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),s&&(this.requestCBHash_[r]=s)}get(e){this.initConnection_();const n=new rn,r={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),n.promise}listen(e,n,s,r){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),T(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),T(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const a={onComplete:r,hashFn:n,query:e,tag:s};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),r=n._queryIdentifier;this.log_("Listen on "+s+" for "+r);const i={p:s},o="q";e.tag&&(i.q=n._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,a=>{const l=a.d,c=a.s;pn.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(r))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,r),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Kt(e,"w")){const s=zs(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const r='".indexOn": "'+n._queryParams.getIndex().toString()+'"',i=n._path.toString();ct(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${r} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Gv(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Rd)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=zv(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,r=>{const i=r.s,o=r.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+r),T(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,r)&&this.connected_&&this.sendUnlisten_(s,r,e._queryObject,n)}sendUnlisten_(e,n,s,r){this.log_("Unlisten on "+e+" for "+n);const i={p:e},o="n";r&&(i.q=s,i.t=r),this.sendRequest(o,i)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,r){const i={p:n,d:s};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{r&&setTimeout(()=>{r(o.s,o.d)},Math.floor(0))})}put(e,n,s,r){this.putInternal("p",e,n,s,r)}merge(e,n,s,r){this.putInternal("m",e,n,s,r)}putInternal(e,n,s,r,i){this.initConnection_();const o={p:n,d:s};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,i=>{this.log_(n+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),r&&r(i.s,i.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const i=s.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ve(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):ul("Unrecognized action received from server: "+Ve(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){T(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=pr,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=pr,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>yC&&(this.reconnectDelay_=pr),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*_C)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+pn.nextConnectionId_++,i=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(d){T(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,h]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?$e("getToken() completed but was canceled"):($e("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=h&&h.token,a=new uC(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,f=>{ct(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(vC)},i))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&ct(d),l())}}}interrupt(e){$e("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){$e("Resuming connection for reason: "+e),delete this.interruptReasons_[e],oo(this.interruptReasons_)&&(this.reconnectDelay_=pr,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(i=>dc(i)).join("$"):s="default";const r=this.removeListen_(e,s);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,n){const s=new _e(e).toString();let r;if(this.listens.has(s)){const i=this.listens.get(s);r=i.get(n),i.delete(n),i.size===0&&this.listens.delete(s)}else r=void 0;return r}onAuthRevoked_(e,n){$e("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Ad&&(this.reconnectDelay_=Rd,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){$e("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Ad&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Gp.replace(/\./g,"-")]=1,Jl()?e["framework.cordova"]=1:rp()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=yo.getInstance().currentlyOnline();return oo(this.interruptReasons_)&&e}}pn.nextPersistentConnectionId_=0;pn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new le(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new le(fs,e),r=new le(fs,n);return this.compare(s,r)!==0}minPost(){return le.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ai;class _g extends Xo{static get __EMPTY_NODE(){return Ai}static set __EMPTY_NODE(e){Ai=e}compare(e,n){return ws(e.name,n.name)}isDefinedOn(e){throw sr("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return le.MIN}maxPost(){return new le($n,Ai)}makePost(e,n){return T(typeof e=="string","KeyIndex indexValue must always be a string."),new le(e,Ai)}toString(){return".key"}}const as=new _g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(e,n,s,r,i=null){this.isReverse_=r,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,r&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class He{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??He.RED,this.left=r??lt.EMPTY_NODE,this.right=i??lt.EMPTY_NODE}copy(e,n,s,r,i){return new He(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return i<0?r=r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r=r.copy(null,n,null,null,null):r=r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return lt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,r;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return lt.EMPTY_NODE;r=s.right.min_(),s=s.copy(r.key,r.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,He.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,He.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}He.RED=!0;He.BLACK=!1;class bC{copy(e,n,s,r,i){return this}insert(e,n,s){return new He(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class lt{constructor(e,n=lt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new lt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,He.BLACK,null,null))}remove(e){return new lt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,He.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,r=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return r?r.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(r=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Pi(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Pi(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Pi(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Pi(this.root_,null,this.comparator_,!0,e)}}lt.EMPTY_NODE=new bC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wC(t,e){return ws(t.name,e.name)}function yc(t,e){return ws(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hl;function CC(t){hl=t}const yg=function(t){return typeof t=="number"?"number:"+Qp(t):"string:"+t},vg=function(t){if(t.isLeafNode()){const e=t.val();T(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Kt(e,".sv"),"Priority must be a string or number.")}else T(t===hl||t.isEmpty(),"priority of unexpected type.");T(t===hl||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pd;class Be{static set __childrenNodeConstructor(e){Pd=e}static get __childrenNodeConstructor(){return Pd}constructor(e,n=Be.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,T(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),vg(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Be(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Be.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ae(e)?this:oe(e)===".priority"?this.priorityNode_:Be.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Be.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=oe(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(T(s!==".priority"||zn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Be.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ce(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+yg(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Qp(this.value_):e+=this.value_,this.lazyHash_=qp(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Be.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Be.__childrenNodeConstructor?-1:(T(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,r=Be.VALUE_TYPE_ORDER.indexOf(n),i=Be.VALUE_TYPE_ORDER.indexOf(s);return T(r>=0,"Unknown leaf type: "+n),T(i>=0,"Unknown leaf type: "+s),r===i?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Be.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bg,wg;function EC(t){bg=t}function IC(t){wg=t}class TC extends Xo{compare(e,n){const s=e.node.getPriority(),r=n.node.getPriority(),i=s.compareTo(r);return i===0?ws(e.name,n.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return le.MIN}maxPost(){return new le($n,new Be("[PRIORITY-POST]",wg))}makePost(e,n){const s=bg(e);return new le(n,new Be("[PRIORITY-POST]",s))}toString(){return".priority"}}const Ae=new TC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SC=Math.log(2);class kC{constructor(e){const n=i=>parseInt(Math.log(i)/SC,10),s=i=>parseInt(Array(i+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const r=s(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const vo=function(t,e,n,s){t.sort(e);const r=function(l,c){const u=c-l;let d,h;if(u===0)return null;if(u===1)return d=t[l],h=n?n(d):d,new He(h,d.node,He.BLACK,null,null);{const f=parseInt(u/2,10)+l,y=r(l,f),v=r(f+1,c);return d=t[f],h=n?n(d):d,new He(h,d.node,He.BLACK,y,v)}},i=function(l){let c=null,u=null,d=t.length;const h=function(y,v){const x=d-y,R=d;d-=y;const k=r(x+1,R),O=t[x],A=n?n(O):O;f(new He(A,O.node,v,null,k))},f=function(y){c?(c.left=y,c=y):(u=y,c=y)};for(let y=0;y<l.count;++y){const v=l.nextBitIsOne(),x=Math.pow(2,l.count-(y+1));v?h(x,He.BLACK):(h(x,He.BLACK),h(x,He.RED))}return u},o=new kC(t.length),a=i(o);return new lt(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pa;const xs={};class un{static get Default(){return T(xs&&Ae,"ChildrenNode.ts has not been loaded"),Pa=Pa||new un({".priority":xs},{".priority":Ae}),Pa}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=zs(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof lt?n:null}hasIndex(e){return Kt(this.indexSet_,e.toString())}addIndex(e,n){T(e!==as,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let r=!1;const i=n.getIterator(le.Wrap);let o=i.getNext();for(;o;)r=r||e.isDefinedOn(o.node),s.push(o),o=i.getNext();let a;r?a=vo(s,e.getCompare()):a=xs;const l=e.toString(),c={...this.indexSet_};c[l]=e;const u={...this.indexes_};return u[l]=a,new un(u,c)}addToIndexes(e,n){const s=ao(this.indexes_,(r,i)=>{const o=zs(this.indexSet_,i);if(T(o,"Missing index implementation for "+i),r===xs)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(le.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),vo(a,o.getCompare())}else return xs;else{const a=n.get(e.name);let l=r;return a&&(l=l.remove(new le(e.name,a))),l.insert(e,e.node)}});return new un(s,this.indexSet_)}removeFromIndexes(e,n){const s=ao(this.indexes_,r=>{if(r===xs)return r;{const i=n.get(e.name);return i?r.remove(new le(e.name,i)):r}});return new un(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gr;class J{static get EMPTY_NODE(){return gr||(gr=new J(new lt(yc),null,un.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&vg(this.priorityNode_),this.children_.isEmpty()&&T(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||gr}updatePriority(e){return this.children_.isEmpty()?this:new J(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?gr:n}}getChild(e){const n=oe(e);return n===null?this:this.getImmediateChild(n).getChild(Ce(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(T(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new le(e,n);let r,i;n.isEmpty()?(r=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(s,this.children_)):(r=this.children_.insert(e,n),i=this.indexMap_.addToIndexes(s,this.children_));const o=r.isEmpty()?gr:this.priorityNode_;return new J(r,o,i)}}updateChild(e,n){const s=oe(e);if(s===null)return n;{T(oe(e)!==".priority"||zn(e)===1,".priority must be the last token in a path");const r=this.getImmediateChild(s).updateChild(Ce(e),n);return this.updateImmediateChild(s,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,r=0,i=!0;if(this.forEachChild(Ae,(o,a)=>{n[o]=a.val(e),s++,i&&J.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):i=!1}),!e&&i&&r<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+yg(this.getPriority().val())+":"),this.forEachChild(Ae,(n,s)=>{const r=s.hash();r!==""&&(e+=":"+n+":"+r)}),this.lazyHash_=e===""?"":qp(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const r=this.resolveIndex_(s);if(r){const i=r.getPredecessorKey(new le(e,n));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new le(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new le(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(r=>n(r.name,r.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,r=>r);{const r=this.children_.getIteratorFrom(e.name,le.Wrap);let i=r.peek();for(;i!=null&&n.compare(i,e)<0;)r.getNext(),i=r.peek();return r}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,r=>r);{const r=this.children_.getReverseIteratorFrom(e.name,le.Wrap);let i=r.peek();for(;i!=null&&n.compare(i,e)>0;)r.getNext(),i=r.peek();return r}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===yi?-1:0}withIndex(e){if(e===as||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new J(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===as||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(Ae),r=n.getIterator(Ae);let i=s.getNext(),o=r.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=s.getNext(),o=r.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===as?null:this.indexMap_.get(e.toString())}}J.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class xC extends J{constructor(){super(new lt(yc),J.EMPTY_NODE,un.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return J.EMPTY_NODE}isEmpty(){return!1}}const yi=new xC;Object.defineProperties(le,{MIN:{value:new le(fs,J.EMPTY_NODE)},MAX:{value:new le($n,yi)}});_g.__EMPTY_NODE=J.EMPTY_NODE;Be.__childrenNodeConstructor=J;CC(yi);IC(yi);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RC=!0;function Le(t,e=null){if(t===null)return J.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),T(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Be(n,Le(e))}if(!(t instanceof Array)&&RC){const n=[];let s=!1;if(qe(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Le(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new le(o,l)))}}),n.length===0)return J.EMPTY_NODE;const i=vo(n,wC,o=>o.name,yc);if(s){const o=vo(n,Ae.getCompare());return new J(i,Le(e),new un({".priority":o},{".priority":Ae}))}else return new J(i,Le(e),un.Default)}else{let n=J.EMPTY_NODE;return qe(t,(s,r)=>{if(Kt(t,s)&&s.substring(0,1)!=="."){const i=Le(r);(i.isLeafNode()||!i.isEmpty())&&(n=n.updateImmediateChild(s,i))}}),n.updatePriority(Le(e))}}EC(Le);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc extends Xo{constructor(e){super(),this.indexPath_=e,T(!ae(e)&&oe(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),r=this.extractChild(n.node),i=s.compareTo(r);return i===0?ws(e.name,n.name):i}makePost(e,n){const s=Le(e),r=J.EMPTY_NODE.updateChild(this.indexPath_,s);return new le(n,r)}maxPost(){const e=J.EMPTY_NODE.updateChild(this.indexPath_,yi);return new le($n,e)}toString(){return Xr(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AC extends Xo{compare(e,n){const s=e.node.compareTo(n.node);return s===0?ws(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return le.MIN}maxPost(){return le.MAX}makePost(e,n){const s=Le(e);return new le(n,s)}toString(){return".value"}}const Cg=new AC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eg(t){return{type:"value",snapshotNode:t}}function qs(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Zr(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function ei(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function PC(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc{constructor(e){this.index_=e}updateChild(e,n,s,r,i,o){T(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(r).equals(s.getChild(r))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(Zr(n,a)):T(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(qs(n,s)):o.trackChildChange(ei(n,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(Ae,(r,i)=>{n.hasChild(r)||s.trackChildChange(Zr(r,i))}),n.isLeafNode()||n.forEachChild(Ae,(r,i)=>{if(e.hasChild(r)){const o=e.getImmediateChild(r);o.equals(i)||s.trackChildChange(ei(r,i,o))}else s.trackChildChange(qs(r,i))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?J.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e){this.indexedFilter_=new bc(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ti.getStartPost_(e),this.endPost_=ti.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,r,i,o){return this.matches(new le(n,s))||(s=J.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,r,i,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=J.EMPTY_NODE);let r=n.withIndex(this.index_);r=r.updatePriority(J.EMPTY_NODE);const i=this;return n.forEachChild(Ae,(o,a)=>{i.matches(new le(o,a))||(r=r.updateImmediateChild(o,J.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,r,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NC{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new ti(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,r,i,o){return this.rangedFilter_.matches(new le(n,s))||(s=J.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,r,i,o):this.fullLimitUpdateChild_(e,n,s,i,o)}updateFullNode(e,n,s){let r;if(n.isLeafNode()||n.isEmpty())r=J.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){r=J.EMPTY_NODE.withIndex(this.index_);let i;this.reverse_?i=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):i=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;i.hasNext()&&o<this.limit_;){const a=i.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))r=r.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{r=n.withIndex(this.index_),r=r.updatePriority(J.EMPTY_NODE);let i;this.reverse_?i=r.getReverseIterator(this.index_):i=r.getIterator(this.index_);let o=0;for(;i.hasNext();){const a=i.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:r=r.updateImmediateChild(a.name,J.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,r,i){let o;if(this.reverse_){const d=this.index_.getCompare();o=(h,f)=>d(f,h)}else o=this.index_.getCompare();const a=e;T(a.numChildren()===this.limit_,"");const l=new le(n,s),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let h=r.getChildAfterChild(this.index_,c,this.reverse_);for(;h!=null&&(h.name===n||a.hasChild(h.name));)h=r.getChildAfterChild(this.index_,h,this.reverse_);const f=h==null?1:o(h,l);if(u&&!s.isEmpty()&&f>=0)return i?.trackChildChange(ei(n,s,d)),a.updateImmediateChild(n,s);{i?.trackChildChange(Zr(n,d));const v=a.updateImmediateChild(n,J.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(i?.trackChildChange(qs(h.name,h.node)),v.updateImmediateChild(h.name,h.node)):v}}else return s.isEmpty()?e:u&&o(c,l)>=0?(i!=null&&(i.trackChildChange(Zr(c.name,c.node)),i.trackChildChange(qs(n,s))),a.updateImmediateChild(n,s).updateImmediateChild(c.name,J.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ae}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return T(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return T(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:fs}hasEnd(){return this.endSet_}getIndexEndValue(){return T(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return T(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:$n}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return T(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ae}copy(){const e=new wc;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function OC(t){return t.loadsAllData()?new bc(t.getIndex()):t.hasLimit()?new NC(t):new ti(t)}function MC(t,e){const n=t.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="r",n}function DC(t,e){const n=t.copy();return n.index_=e,n}function Nd(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Ae?n="$priority":t.index_===Cg?n="$value":t.index_===as?n="$key":(T(t.index_ instanceof vc,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ve(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=Ve(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+Ve(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=Ve(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+Ve(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Od(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Ae&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo extends fg{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(T(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,r){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=r,this.log_=_i("p:rest:"),this.listens_={}}listen(e,n,s,r){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=bo.getListenId_(e,s),a={};this.listens_[o]=a;const l=Nd(e._queryParams);this.restRequest_(i+".json",l,(c,u)=>{let d=u;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(i,d,!1,s),zs(this.listens_,o)===a){let h;c?c===401?h="permission_denied":h="rest_error:"+c:h="ok",r(h,null)}})}unlisten(e,n){const s=bo.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Nd(e._queryParams),s=e._path.toString(),r=new rn;return this.restRequest_(s+".json",n,(i,o)=>{let a=o;i===404&&(a=null,i=null),i===null?(this.onDataUpdate_(s,a,!1,null),r.resolve(a)):r.reject(new Error(a))}),r.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,i])=>{r&&r.accessToken&&(n.auth=r.accessToken),i&&i.token&&(n.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+rr(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=qr(a.responseText)}catch{ct("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&ct("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LC{constructor(){this.rootNode_=J.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wo(){return{value:null,children:new Map}}function ar(t,e,n){if(ae(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=oe(e);t.children.has(s)||t.children.set(s,wo());const r=t.children.get(s);e=Ce(e),ar(r,e,n)}}function fl(t,e){if(ae(e))return t.value=null,t.children.clear(),!0;if(t.value!==null){if(t.value.isLeafNode())return!1;{const n=t.value;return t.value=null,n.forEachChild(Ae,(s,r)=>{ar(t,new _e(s),r)}),fl(t,e)}}else if(t.children.size>0){const n=oe(e);return e=Ce(e),t.children.has(n)&&fl(t.children.get(n),e)&&t.children.delete(n),t.children.size===0}else return!0}function pl(t,e,n){t.value!==null?n(e,t.value):UC(t,(s,r)=>{const i=new _e(e.toString()+"/"+s);pl(r,i,n)})}function UC(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FC{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n={...e};return this.last_&&qe(this.last_,(s,r)=>{n[s]=n[s]-r}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Md=10*1e3,BC=30*1e3,HC=300*1e3;class VC{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new FC(e);const s=Md+(BC-Md)*Math.random();Or(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;qe(e,(r,i)=>{i>0&&Kt(this.statsToReport_,r)&&(n[r]=i,s=!0)}),s&&this.server_.reportStats(n),Or(this.reportStats_.bind(this),Math.floor(Math.random()*2*HC))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var xt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(xt||(xt={}));function Ig(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Cc(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Ec(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=xt.ACK_USER_WRITE,this.source=Ig()}operationForChild(e){if(ae(this.path)){if(this.affectedTree.value!=null)return T(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new _e(e));return new Co(pe(),n,this.revert)}}else return T(oe(this.path)===e,"operationForChild called for unrelated child."),new Co(Ce(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(e,n){this.source=e,this.path=n,this.type=xt.LISTEN_COMPLETE}operationForChild(e){return ae(this.path)?new ni(this.source,pe()):new ni(this.source,Ce(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=xt.OVERWRITE}operationForChild(e){return ae(this.path)?new ps(this.source,pe(),this.snap.getImmediateChild(e)):new ps(this.source,Ce(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=xt.MERGE}operationForChild(e){if(ae(this.path)){const n=this.children.subtree(new _e(e));return n.isEmpty()?null:n.value?new ps(this.source,pe(),n.value):new si(this.source,pe(),n)}else return T(oe(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new si(this.source,Ce(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ae(e))return this.isFullyInitialized()&&!this.filtered_;const n=oe(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jC{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function WC(t,e,n,s){const r=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(PC(o.childName,o.snapshotNode))}),mr(t,r,"child_removed",e,s,n),mr(t,r,"child_added",e,s,n),mr(t,r,"child_moved",i,s,n),mr(t,r,"child_changed",e,s,n),mr(t,r,"value",e,s,n),r}function mr(t,e,n,s,r,i){const o=s.filter(a=>a.type===n);o.sort((a,l)=>zC(t,a,l)),o.forEach(a=>{const l=$C(t,a,i);r.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function $C(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function zC(t,e,n){if(e.childName==null||n.childName==null)throw sr("Should only compare child_ events.");const s=new le(e.childName,e.snapshotNode),r=new le(n.childName,n.snapshotNode);return t.index_.compare(s,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zo(t,e){return{eventCache:t,serverCache:e}}function Mr(t,e,n,s){return Zo(new gs(e,n,s),t.serverCache)}function Tg(t,e,n,s){return Zo(t.eventCache,new gs(e,n,s))}function gl(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function ms(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Na;const GC=()=>(Na||(Na=new lt(A1)),Na);class Se{static fromObject(e){let n=new Se(null);return qe(e,(s,r)=>{n=n.set(new _e(s),r)}),n}constructor(e,n=GC()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:pe(),value:this.value};if(ae(e))return null;{const s=oe(e),r=this.children.get(s);if(r!==null){const i=r.findRootMostMatchingPathAndValue(Ce(e),n);return i!=null?{path:Ne(new _e(s),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ae(e))return this;{const n=oe(e),s=this.children.get(n);return s!==null?s.subtree(Ce(e)):new Se(null)}}set(e,n){if(ae(e))return new Se(n,this.children);{const s=oe(e),i=(this.children.get(s)||new Se(null)).set(Ce(e),n),o=this.children.insert(s,i);return new Se(this.value,o)}}remove(e){if(ae(e))return this.children.isEmpty()?new Se(null):new Se(null,this.children);{const n=oe(e),s=this.children.get(n);if(s){const r=s.remove(Ce(e));let i;return r.isEmpty()?i=this.children.remove(n):i=this.children.insert(n,r),this.value===null&&i.isEmpty()?new Se(null):new Se(this.value,i)}else return this}}get(e){if(ae(e))return this.value;{const n=oe(e),s=this.children.get(n);return s?s.get(Ce(e)):null}}setTree(e,n){if(ae(e))return n;{const s=oe(e),i=(this.children.get(s)||new Se(null)).setTree(Ce(e),n);let o;return i.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,i),new Se(this.value,o)}}fold(e){return this.fold_(pe(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((r,i)=>{s[r]=i.fold_(Ne(e,r),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,pe(),n)}findOnPath_(e,n,s){const r=this.value?s(n,this.value):!1;if(r)return r;if(ae(e))return null;{const i=oe(e),o=this.children.get(i);return o?o.findOnPath_(Ce(e),Ne(n,i),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,pe(),n)}foreachOnPath_(e,n,s){if(ae(e))return this;{this.value&&s(n,this.value);const r=oe(e),i=this.children.get(r);return i?i.foreachOnPath_(Ce(e),Ne(n,r),s):new Se(null)}}foreach(e){this.foreach_(pe(),e)}foreach_(e,n){this.children.inorderTraversal((s,r)=>{r.foreach_(Ne(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e){this.writeTree_=e}static empty(){return new Nt(new Se(null))}}function Dr(t,e,n){if(ae(e))return new Nt(new Se(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const r=s.path;let i=s.value;const o=at(r,e);return i=i.updateChild(o,n),new Nt(t.writeTree_.set(r,i))}else{const r=new Se(n),i=t.writeTree_.setTree(e,r);return new Nt(i)}}}function Dd(t,e,n){let s=t;return qe(n,(r,i)=>{s=Dr(s,Ne(e,r),i)}),s}function Ld(t,e){if(ae(e))return Nt.empty();{const n=t.writeTree_.setTree(e,new Se(null));return new Nt(n)}}function ml(t,e){return Cs(t,e)!=null}function Cs(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(at(n.path,e)):null}function Ud(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Ae,(s,r)=>{e.push(new le(s,r))}):t.writeTree_.children.inorderTraversal((s,r)=>{r.value!=null&&e.push(new le(s,r.value))}),e}function Bn(t,e){if(ae(e))return t;{const n=Cs(t,e);return n!=null?new Nt(new Se(n)):new Nt(t.writeTree_.subtree(e))}}function _l(t){return t.writeTree_.isEmpty()}function Ys(t,e){return Sg(pe(),t.writeTree_,e)}function Sg(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((r,i)=>{r===".priority"?(T(i.value!==null,"Priority writes must always be leaf nodes"),s=i.value):n=Sg(Ne(t,r),i,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(Ne(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ic(t,e){return Ag(e,t)}function KC(t,e,n,s,r){T(s>t.lastWriteId,"Stacking an older write on top of newer ones"),r===void 0&&(r=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:r}),r&&(t.visibleWrites=Dr(t.visibleWrites,e,n)),t.lastWriteId=s}function qC(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function YC(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);T(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let r=s.visible,i=!1,o=t.allWrites.length-1;for(;r&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&QC(a,s.path)?r=!1:bt(s.path,a.path)&&(i=!0)),o--}if(r){if(i)return JC(t),!0;if(s.snap)t.visibleWrites=Ld(t.visibleWrites,s.path);else{const a=s.children;qe(a,l=>{t.visibleWrites=Ld(t.visibleWrites,Ne(s.path,l))})}return!0}else return!1}function QC(t,e){if(t.snap)return bt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&bt(Ne(t.path,n),e))return!0;return!1}function JC(t){t.visibleWrites=kg(t.allWrites,XC,pe()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function XC(t){return t.visible}function kg(t,e,n){let s=Nt.empty();for(let r=0;r<t.length;++r){const i=t[r];if(e(i)){const o=i.path;let a;if(i.snap)bt(n,o)?(a=at(n,o),s=Dr(s,a,i.snap)):bt(o,n)&&(a=at(o,n),s=Dr(s,pe(),i.snap.getChild(a)));else if(i.children){if(bt(n,o))a=at(n,o),s=Dd(s,a,i.children);else if(bt(o,n))if(a=at(o,n),ae(a))s=Dd(s,pe(),i.children);else{const l=zs(i.children,oe(a));if(l){const c=l.getChild(Ce(a));s=Dr(s,pe(),c)}}}else throw sr("WriteRecord should have .snap or .children")}}return s}function xg(t,e,n,s,r){if(!s&&!r){const i=Cs(t.visibleWrites,e);if(i!=null)return i;{const o=Bn(t.visibleWrites,e);if(_l(o))return n;if(n==null&&!ml(o,pe()))return null;{const a=n||J.EMPTY_NODE;return Ys(o,a)}}}else{const i=Bn(t.visibleWrites,e);if(!r&&_l(i))return n;if(!r&&n==null&&!ml(i,pe()))return null;{const o=function(c){return(c.visible||r)&&(!s||!~s.indexOf(c.writeId))&&(bt(c.path,e)||bt(e,c.path))},a=kg(t.allWrites,o,e),l=n||J.EMPTY_NODE;return Ys(a,l)}}}function ZC(t,e,n){let s=J.EMPTY_NODE;const r=Cs(t.visibleWrites,e);if(r)return r.isLeafNode()||r.forEachChild(Ae,(i,o)=>{s=s.updateImmediateChild(i,o)}),s;if(n){const i=Bn(t.visibleWrites,e);return n.forEachChild(Ae,(o,a)=>{const l=Ys(Bn(i,new _e(o)),a);s=s.updateImmediateChild(o,l)}),Ud(i).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const i=Bn(t.visibleWrites,e);return Ud(i).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function eE(t,e,n,s,r){T(s||r,"Either existingEventSnap or existingServerSnap must exist");const i=Ne(e,n);if(ml(t.visibleWrites,i))return null;{const o=Bn(t.visibleWrites,i);return _l(o)?r.getChild(n):Ys(o,r.getChild(n))}}function tE(t,e,n,s){const r=Ne(e,n),i=Cs(t.visibleWrites,r);if(i!=null)return i;if(s.isCompleteForChild(n)){const o=Bn(t.visibleWrites,r);return Ys(o,s.getNode().getImmediateChild(n))}else return null}function nE(t,e){return Cs(t.visibleWrites,e)}function sE(t,e,n,s,r,i,o){let a;const l=Bn(t.visibleWrites,e),c=Cs(l,pe());if(c!=null)a=c;else if(n!=null)a=Ys(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],d=o.getCompare(),h=i?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let f=h.getNext();for(;f&&u.length<r;)d(f,s)!==0&&u.push(f),f=h.getNext();return u}else return[]}function rE(){return{visibleWrites:Nt.empty(),allWrites:[],lastWriteId:-1}}function Eo(t,e,n,s){return xg(t.writeTree,t.treePath,e,n,s)}function Tc(t,e){return ZC(t.writeTree,t.treePath,e)}function Fd(t,e,n,s){return eE(t.writeTree,t.treePath,e,n,s)}function Io(t,e){return nE(t.writeTree,Ne(t.treePath,e))}function iE(t,e,n,s,r,i){return sE(t.writeTree,t.treePath,e,n,s,r,i)}function Sc(t,e,n){return tE(t.writeTree,t.treePath,e,n)}function Rg(t,e){return Ag(Ne(t.treePath,e),t.writeTree)}function Ag(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oE{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;T(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),T(s!==".priority","Only non-priority child changes can be tracked.");const r=this.changeMap.get(s);if(r){const i=r.type;if(n==="child_added"&&i==="child_removed")this.changeMap.set(s,ei(s,e.snapshotNode,r.snapshotNode));else if(n==="child_removed"&&i==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&i==="child_changed")this.changeMap.set(s,Zr(s,r.oldSnap));else if(n==="child_changed"&&i==="child_added")this.changeMap.set(s,qs(s,e.snapshotNode));else if(n==="child_changed"&&i==="child_changed")this.changeMap.set(s,ei(s,e.snapshotNode,r.oldSnap));else throw sr("Illegal combination of changes: "+e+" occurred after "+r)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aE{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Pg=new aE;class kc{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new gs(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Sc(this.writes_,e,s)}}getChildAfterChild(e,n,s){const r=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ms(this.viewCache_),i=iE(this.writes_,r,n,1,s,e);return i.length===0?null:i[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lE(t){return{filter:t}}function cE(t,e){T(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),T(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function uE(t,e,n,s,r){const i=new oE;let o,a;if(n.type===xt.OVERWRITE){const c=n;c.source.fromUser?o=yl(t,e,c.path,c.snap,s,r,i):(T(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!ae(c.path),o=To(t,e,c.path,c.snap,s,r,a,i))}else if(n.type===xt.MERGE){const c=n;c.source.fromUser?o=hE(t,e,c.path,c.children,s,r,i):(T(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=vl(t,e,c.path,c.children,s,r,a,i))}else if(n.type===xt.ACK_USER_WRITE){const c=n;c.revert?o=gE(t,e,c.path,s,r,i):o=fE(t,e,c.path,c.affectedTree,s,r,i)}else if(n.type===xt.LISTEN_COMPLETE)o=pE(t,e,n.path,s,i);else throw sr("Unknown operation type: "+n.type);const l=i.getChanges();return dE(e,o,l),{viewCache:o,changes:l}}function dE(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const r=s.getNode().isLeafNode()||s.getNode().isEmpty(),i=gl(t);(n.length>0||!t.eventCache.isFullyInitialized()||r&&!s.getNode().equals(i)||!s.getNode().getPriority().equals(i.getPriority()))&&n.push(Eg(gl(e)))}}function Ng(t,e,n,s,r,i){const o=e.eventCache;if(Io(s,n)!=null)return e;{let a,l;if(ae(n))if(T(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=ms(e),u=c instanceof J?c:J.EMPTY_NODE,d=Tc(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),d,i)}else{const c=Eo(s,ms(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,i)}else{const c=oe(n);if(c===".priority"){T(zn(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const d=Fd(s,n,u,l);d!=null?a=t.filter.updatePriority(u,d):a=o.getNode()}else{const u=Ce(n);let d;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const h=Fd(s,n,o.getNode(),l);h!=null?d=o.getNode().getImmediateChild(c).updateChild(u,h):d=o.getNode().getImmediateChild(c)}else d=Sc(s,c,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),c,d,u,r,i):a=o.getNode()}}return Mr(e,a,o.isFullyInitialized()||ae(n),t.filter.filtersNodes())}}function To(t,e,n,s,r,i,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(ae(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),f,null)}else{const f=oe(n);if(!l.isCompleteForPath(n)&&zn(n)>1)return e;const y=Ce(n),x=l.getNode().getImmediateChild(f).updateChild(y,s);f===".priority"?c=u.updatePriority(l.getNode(),x):c=u.updateChild(l.getNode(),f,x,y,Pg,null)}const d=Tg(e,c,l.isFullyInitialized()||ae(n),u.filtersNodes()),h=new kc(r,d,i);return Ng(t,d,n,r,h,a)}function yl(t,e,n,s,r,i,o){const a=e.eventCache;let l,c;const u=new kc(r,e,i);if(ae(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=Mr(e,c,!0,t.filter.filtersNodes());else{const d=oe(n);if(d===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=Mr(e,c,a.isFullyInitialized(),a.isFiltered());else{const h=Ce(n),f=a.getNode().getImmediateChild(d);let y;if(ae(h))y=s;else{const v=u.getCompleteChild(d);v!=null?gc(h)===".priority"&&v.getChild(gg(h)).isEmpty()?y=v:y=v.updateChild(h,s):y=J.EMPTY_NODE}if(f.equals(y))l=e;else{const v=t.filter.updateChild(a.getNode(),d,y,h,u,o);l=Mr(e,v,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Bd(t,e){return t.eventCache.isCompleteForChild(e)}function hE(t,e,n,s,r,i,o){let a=e;return s.foreach((l,c)=>{const u=Ne(n,l);Bd(e,oe(u))&&(a=yl(t,a,u,c,r,i,o))}),s.foreach((l,c)=>{const u=Ne(n,l);Bd(e,oe(u))||(a=yl(t,a,u,c,r,i,o))}),a}function Hd(t,e,n){return n.foreach((s,r)=>{e=e.updateChild(s,r)}),e}function vl(t,e,n,s,r,i,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;ae(n)?c=s:c=new Se(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((d,h)=>{if(u.hasChild(d)){const f=e.serverCache.getNode().getImmediateChild(d),y=Hd(t,f,h);l=To(t,l,new _e(d),y,r,i,o,a)}}),c.children.inorderTraversal((d,h)=>{const f=!e.serverCache.isCompleteForChild(d)&&h.value===null;if(!u.hasChild(d)&&!f){const y=e.serverCache.getNode().getImmediateChild(d),v=Hd(t,y,h);l=To(t,l,new _e(d),v,r,i,o,a)}}),l}function fE(t,e,n,s,r,i,o){if(Io(r,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(ae(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return To(t,e,n,l.getNode().getChild(n),r,i,a,o);if(ae(n)){let c=new Se(null);return l.getNode().forEachChild(as,(u,d)=>{c=c.set(new _e(u),d)}),vl(t,e,n,c,r,i,a,o)}else return e}else{let c=new Se(null);return s.foreach((u,d)=>{const h=Ne(n,u);l.isCompleteForPath(h)&&(c=c.set(u,l.getNode().getChild(h)))}),vl(t,e,n,c,r,i,a,o)}}function pE(t,e,n,s,r){const i=e.serverCache,o=Tg(e,i.getNode(),i.isFullyInitialized()||ae(n),i.isFiltered());return Ng(t,o,n,s,Pg,r)}function gE(t,e,n,s,r,i){let o;if(Io(s,n)!=null)return e;{const a=new kc(s,e,r),l=e.eventCache.getNode();let c;if(ae(n)||oe(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Eo(s,ms(e));else{const d=e.serverCache.getNode();T(d instanceof J,"serverChildren would be complete if leaf node"),u=Tc(s,d)}u=u,c=t.filter.updateFullNode(l,u,i)}else{const u=oe(n);let d=Sc(s,u,e.serverCache);d==null&&e.serverCache.isCompleteForChild(u)&&(d=l.getImmediateChild(u)),d!=null?c=t.filter.updateChild(l,u,d,Ce(n),a,i):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,J.EMPTY_NODE,Ce(n),a,i):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Eo(s,ms(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,i)))}return o=e.serverCache.isFullyInitialized()||Io(s,pe())!=null,Mr(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mE{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,r=new bc(s.getIndex()),i=OC(s);this.processor_=lE(i);const o=n.serverCache,a=n.eventCache,l=r.updateFullNode(J.EMPTY_NODE,o.getNode(),null),c=i.updateFullNode(J.EMPTY_NODE,a.getNode(),null),u=new gs(l,o.isFullyInitialized(),r.filtersNodes()),d=new gs(c,a.isFullyInitialized(),i.filtersNodes());this.viewCache_=Zo(d,u),this.eventGenerator_=new jC(this.query_)}get query(){return this.query_}}function _E(t){return t.viewCache_.serverCache.getNode()}function yE(t,e){const n=ms(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ae(e)&&!n.getImmediateChild(oe(e)).isEmpty())?n.getChild(e):null}function Vd(t){return t.eventRegistrations_.length===0}function vE(t,e){t.eventRegistrations_.push(e)}function jd(t,e,n){const s=[];if(n){T(e==null,"A cancel should cancel all event registrations.");const r=t.query._path;t.eventRegistrations_.forEach(i=>{const o=i.createCancelEvent(n,r);o&&s.push(o)})}if(e){let r=[];for(let i=0;i<t.eventRegistrations_.length;++i){const o=t.eventRegistrations_[i];if(!o.matches(e))r.push(o);else if(e.hasAnyCallback()){r=r.concat(t.eventRegistrations_.slice(i+1));break}}t.eventRegistrations_=r}else t.eventRegistrations_=[];return s}function Wd(t,e,n,s){e.type===xt.MERGE&&e.source.queryId!==null&&(T(ms(t.viewCache_),"We should always have a full cache before handling merges"),T(gl(t.viewCache_),"Missing event cache, even though we have a server cache"));const r=t.viewCache_,i=uE(t.processor_,r,e,n,s);return cE(t.processor_,i.viewCache),T(i.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=i.viewCache,Og(t,i.changes,i.viewCache.eventCache.getNode(),null)}function bE(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Ae,(i,o)=>{s.push(qs(i,o))}),n.isFullyInitialized()&&s.push(Eg(n.getNode())),Og(t,s,n.getNode(),e)}function Og(t,e,n,s){const r=s?[s]:t.eventRegistrations_;return WC(t.eventGenerator_,e,n,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let So;class wE{constructor(){this.views=new Map}}function CE(t){T(!So,"__referenceConstructor has already been defined"),So=t}function EE(){return T(So,"Reference.ts has not been loaded"),So}function IE(t){return t.views.size===0}function xc(t,e,n,s){const r=e.source.queryId;if(r!==null){const i=t.views.get(r);return T(i!=null,"SyncTree gave us an op for an invalid query."),Wd(i,e,n,s)}else{let i=[];for(const o of t.views.values())i=i.concat(Wd(o,e,n,s));return i}}function TE(t,e,n,s,r){const i=e._queryIdentifier,o=t.views.get(i);if(!o){let a=Eo(n,r?s:null),l=!1;a?l=!0:s instanceof J?(a=Tc(n,s),l=!1):(a=J.EMPTY_NODE,l=!1);const c=Zo(new gs(a,l,!1),new gs(s,r,!1));return new mE(e,c)}return o}function SE(t,e,n,s,r,i){const o=TE(t,e,s,r,i);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),vE(o,n),bE(o,n)}function kE(t,e,n,s){const r=e._queryIdentifier,i=[];let o=[];const a=Gn(t);if(r==="default")for(const[l,c]of t.views.entries())o=o.concat(jd(c,n,s)),Vd(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||i.push(c.query));else{const l=t.views.get(r);l&&(o=o.concat(jd(l,n,s)),Vd(l)&&(t.views.delete(r),l.query._queryParams.loadsAllData()||i.push(l.query)))}return a&&!Gn(t)&&i.push(new(EE())(e._repo,e._path)),{removed:i,events:o}}function Mg(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function js(t,e){let n=null;for(const s of t.views.values())n=n||yE(s,e);return n}function Dg(t,e){if(e._queryParams.loadsAllData())return ea(t);{const s=e._queryIdentifier;return t.views.get(s)}}function Lg(t,e){return Dg(t,e)!=null}function Gn(t){return ea(t)!=null}function ea(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ko;function xE(t){T(!ko,"__referenceConstructor has already been defined"),ko=t}function RE(){return T(ko,"Reference.ts has not been loaded"),ko}let AE=1;class $d{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Se(null),this.pendingWriteTree_=rE(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Ug(t,e,n,s,r){return KC(t.pendingWriteTree_,e,n,s,r),r?vi(t,new ps(Ig(),e,n)):[]}function ss(t,e,n=!1){const s=qC(t.pendingWriteTree_,e);if(YC(t.pendingWriteTree_,e)){let i=new Se(null);return s.snap!=null?i=i.set(pe(),!0):qe(s.children,o=>{i=i.set(new _e(o),!0)}),vi(t,new Co(s.path,i,n))}else return[]}function ta(t,e,n){return vi(t,new ps(Cc(),e,n))}function PE(t,e,n){const s=Se.fromObject(n);return vi(t,new si(Cc(),e,s))}function NE(t,e){return vi(t,new ni(Cc(),e))}function OE(t,e,n){const s=Ac(t,n);if(s){const r=Pc(s),i=r.path,o=r.queryId,a=at(i,e),l=new ni(Ec(o),a);return Nc(t,i,l)}else return[]}function bl(t,e,n,s,r=!1){const i=e._path,o=t.syncPointTree_.get(i);let a=[];if(o&&(e._queryIdentifier==="default"||Lg(o,e))){const l=kE(o,e,n,s);IE(o)&&(t.syncPointTree_=t.syncPointTree_.remove(i));const c=l.removed;if(a=l.events,!r){const u=c.findIndex(h=>h._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(i,(h,f)=>Gn(f));if(u&&!d){const h=t.syncPointTree_.subtree(i);if(!h.isEmpty()){const f=LE(h);for(let y=0;y<f.length;++y){const v=f[y],x=v.query,R=Hg(t,v);t.listenProvider_.startListening(Lr(x),xo(t,x),R.hashFn,R.onComplete)}}}!d&&c.length>0&&!s&&(u?t.listenProvider_.stopListening(Lr(e),null):c.forEach(h=>{const f=t.queryToTagMap.get(na(h));t.listenProvider_.stopListening(Lr(h),f)}))}UE(t,c)}return a}function ME(t,e,n,s){const r=Ac(t,s);if(r!=null){const i=Pc(r),o=i.path,a=i.queryId,l=at(o,e),c=new ps(Ec(a),l,n);return Nc(t,o,c)}else return[]}function DE(t,e,n,s){const r=Ac(t,s);if(r){const i=Pc(r),o=i.path,a=i.queryId,l=at(o,e),c=Se.fromObject(n),u=new si(Ec(a),l,c);return Nc(t,o,u)}else return[]}function zd(t,e,n,s=!1){const r=e._path;let i=null,o=!1;t.syncPointTree_.foreachOnPath(r,(h,f)=>{const y=at(h,r);i=i||js(f,y),o=o||Gn(f)});let a=t.syncPointTree_.get(r);a?(o=o||Gn(a),i=i||js(a,pe())):(a=new wE,t.syncPointTree_=t.syncPointTree_.set(r,a));let l;i!=null?l=!0:(l=!1,i=J.EMPTY_NODE,t.syncPointTree_.subtree(r).foreachChild((f,y)=>{const v=js(y,pe());v&&(i=i.updateImmediateChild(f,v))}));const c=Lg(a,e);if(!c&&!e._queryParams.loadsAllData()){const h=na(e);T(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const f=FE();t.queryToTagMap.set(h,f),t.tagToQueryMap.set(f,h)}const u=Ic(t.pendingWriteTree_,r);let d=SE(a,e,n,u,i,l);if(!c&&!o&&!s){const h=Dg(a,e);d=d.concat(BE(t,e,h))}return d}function Rc(t,e,n){const r=t.pendingWriteTree_,i=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=at(o,e),c=js(a,l);if(c)return c});return xg(r,e,i,n,!0)}function vi(t,e){return Fg(e,t.syncPointTree_,null,Ic(t.pendingWriteTree_,pe()))}function Fg(t,e,n,s){if(ae(t.path))return Bg(t,e,n,s);{const r=e.get(pe());n==null&&r!=null&&(n=js(r,pe()));let i=[];const o=oe(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=Rg(s,o);i=i.concat(Fg(a,l,c,u))}return r&&(i=i.concat(xc(r,t,s,n))),i}}function Bg(t,e,n,s){const r=e.get(pe());n==null&&r!=null&&(n=js(r,pe()));let i=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=Rg(s,o),u=t.operationForChild(o);u&&(i=i.concat(Bg(u,a,l,c)))}),r&&(i=i.concat(xc(r,t,s,n))),i}function Hg(t,e){const n=e.query,s=xo(t,n);return{hashFn:()=>(_E(e)||J.EMPTY_NODE).hash(),onComplete:r=>{if(r==="ok")return s?OE(t,n._path,s):NE(t,n._path);{const i=O1(r,n);return bl(t,n,null,i)}}}}function xo(t,e){const n=na(e);return t.queryToTagMap.get(n)}function na(t){return t._path.toString()+"$"+t._queryIdentifier}function Ac(t,e){return t.tagToQueryMap.get(e)}function Pc(t){const e=t.indexOf("$");return T(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new _e(t.substr(0,e))}}function Nc(t,e,n){const s=t.syncPointTree_.get(e);T(s,"Missing sync point for query tag that we're tracking");const r=Ic(t.pendingWriteTree_,e);return xc(s,n,r,null)}function LE(t){return t.fold((e,n,s)=>{if(n&&Gn(n))return[ea(n)];{let r=[];return n&&(r=Mg(n)),qe(s,(i,o)=>{r=r.concat(o)}),r}})}function Lr(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(RE())(t._repo,t._path):t}function UE(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const r=na(s),i=t.queryToTagMap.get(r);t.queryToTagMap.delete(r),t.tagToQueryMap.delete(i)}}}function FE(){return AE++}function BE(t,e,n){const s=e._path,r=xo(t,e),i=Hg(t,n),o=t.listenProvider_.startListening(Lr(e),r,i.hashFn,i.onComplete),a=t.syncPointTree_.subtree(s);if(r)T(!Gn(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,d)=>{if(!ae(c)&&u&&Gn(u))return[ea(u).query];{let h=[];return u&&(h=h.concat(Mg(u).map(f=>f.query))),qe(d,(f,y)=>{h=h.concat(y)}),h}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(Lr(u),xo(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Oc(n)}node(){return this.node_}}class Mc{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ne(this.path_,e);return new Mc(this.syncTree_,n)}node(){return Rc(this.syncTree_,this.path_)}}const HE=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Gd=function(t,e,n){if(!t||typeof t!="object")return t;if(T(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return VE(t[".sv"],e,n);if(typeof t[".sv"]=="object")return jE(t[".sv"],e);T(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},VE=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:T(!1,"Unexpected server value: "+t)}},jE=function(t,e,n){t.hasOwnProperty("increment")||T(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&T(!1,"Unexpected increment value: "+s);const r=e.node();if(T(r!==null&&typeof r<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return s;const o=r.getValue();return typeof o!="number"?s:o+s},WE=function(t,e,n,s){return Dc(e,new Mc(n,t),s)},Vg=function(t,e,n){return Dc(t,new Oc(e),n)};function Dc(t,e,n){const s=t.getPriority().val(),r=Gd(s,e.getImmediateChild(".priority"),n);let i;if(t.isLeafNode()){const o=t,a=Gd(o.getValue(),e,n);return a!==o.getValue()||r!==o.getPriority().val()?new Be(a,Le(r)):t}else{const o=t;return i=o,r!==o.getPriority().val()&&(i=i.updatePriority(new Be(r))),o.forEachChild(Ae,(a,l)=>{const c=Dc(l,e.getImmediateChild(a),n);c!==l&&(i=i.updateImmediateChild(a,c))}),i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Uc(t,e){let n=e instanceof _e?e:new _e(e),s=t,r=oe(n);for(;r!==null;){const i=zs(s.node.children,r)||{children:{},childCount:0};s=new Lc(r,s,i),n=Ce(n),r=oe(n)}return s}function lr(t){return t.node.value}function jg(t,e){t.node.value=e,wl(t)}function Wg(t){return t.node.childCount>0}function $E(t){return lr(t)===void 0&&!Wg(t)}function sa(t,e){qe(t.node.children,(n,s)=>{e(new Lc(n,t,s))})}function $g(t,e,n,s){n&&e(t),sa(t,r=>{$g(r,e,!0)})}function zE(t,e,n){let s=t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function bi(t){return new _e(t.parent===null?t.name:bi(t.parent)+"/"+t.name)}function wl(t){t.parent!==null&&GE(t.parent,t.name,t)}function GE(t,e,n){const s=$E(n),r=Kt(t.node.children,e);s&&r?(delete t.node.children[e],t.node.childCount--,wl(t)):!s&&!r&&(t.node.children[e]=n.node,t.node.childCount++,wl(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KE=/[\[\].#$\/\u0000-\u001F\u007F]/,qE=/[\[\].#$\u0000-\u001F\u007F]/,Oa=10*1024*1024,Fc=function(t){return typeof t=="string"&&t.length!==0&&!KE.test(t)},zg=function(t){return typeof t=="string"&&t.length!==0&&!qE.test(t)},YE=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),zg(t)},Ro=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Jo(t)||t&&typeof t=="object"&&Kt(t,".sv")},Ao=function(t,e,n,s){s&&e===void 0||ra(Gs(t,"value"),e,n)},ra=function(t,e,n){const s=n instanceof _e?new fC(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Zn(s));if(typeof e=="function")throw new Error(t+"contains a function "+Zn(s)+" with contents = "+e.toString());if(Jo(e))throw new Error(t+"contains "+e.toString()+" "+Zn(s));if(typeof e=="string"&&e.length>Oa/3&&Go(e)>Oa)throw new Error(t+"contains a string greater than "+Oa+" utf8 bytes "+Zn(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let r=!1,i=!1;if(qe(e,(o,a)=>{if(o===".value")r=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!Fc(o)))throw new Error(t+" contains an invalid key ("+o+") "+Zn(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);pC(s,o),ra(t,a,s),gC(s)}),r&&i)throw new Error(t+' contains ".value" child '+Zn(s)+" in addition to actual children.")}},QE=function(t,e){let n,s;for(n=0;n<e.length;n++){s=e[n];const i=Xr(s);for(let o=0;o<i.length;o++)if(!(i[o]===".priority"&&o===i.length-1)){if(!Fc(i[o]))throw new Error(t+"contains an invalid key ("+i[o]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(hC);let r=null;for(n=0;n<e.length;n++){if(s=e[n],r!==null&&bt(r,s))throw new Error(t+"contains a path "+r.toString()+" that is ancestor of another path "+s.toString());r=s}},JE=function(t,e,n,s){const r=Gs(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(r+" must be an object containing the children to replace.");const i=[];qe(e,(o,a)=>{const l=new _e(o);if(ra(r,a,Ne(n,l)),gc(l)===".priority"&&!Ro(a))throw new Error(r+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");i.push(l)}),QE(r,i)},XE=function(t,e,n){if(Jo(e))throw new Error(Gs(t,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!Ro(e))throw new Error(Gs(t,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")},Bc=function(t,e,n,s){if(!zg(n))throw new Error(Gs(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},ZE=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Bc(t,e,n)},rs=function(t,e){if(oe(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},eI=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Fc(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!YE(n))throw new Error(Gs(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tI{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Hc(t,e){let n=null;for(let s=0;s<e.length;s++){const r=e[s],i=r.getPath();n!==null&&!mc(i,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:i}),n.events.push(r)}n&&t.eventLists_.push(n)}function Gg(t,e,n){Hc(t,n),Kg(t,s=>mc(s,e))}function bn(t,e,n){Hc(t,n),Kg(t,s=>bt(s,e)||bt(e,s))}function Kg(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const r=t.eventLists_[s];if(r){const i=r.path;e(i)?(nI(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function nI(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Nr&&$e("event: "+n.toString()),or(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sI="repo_interrupt",rI=25;class iI{constructor(e,n,s,r){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new tI,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=wo(),this.transactionQueueTree_=new Lc,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function oI(t,e,n){if(t.stats_=fc(t.repoInfo_),t.forceRestClient_||U1())t.server_=new bo(t.repoInfo_,(s,r,i,o)=>{Kd(t,s,r,i,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>qd(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ve(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new pn(t.repoInfo_,e,(s,r,i,o)=>{Kd(t,s,r,i,o)},s=>{qd(t,s)},s=>{aI(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=j1(t.repoInfo_,()=>new VC(t.stats_,t.server_)),t.infoData_=new LC,t.infoSyncTree_=new $d({startListening:(s,r,i,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=ta(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),jc(t,"connected",!1),t.serverSyncTree_=new $d({startListening:(s,r,i,o)=>(t.server_.listen(s,i,r,(a,l)=>{const c=o(a,l);bn(t.eventQueue_,s._path,c)}),[]),stopListening:(s,r)=>{t.server_.unlisten(s,r)}})}function qg(t){const n=t.infoData_.getNode(new _e(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Vc(t){return HE({timestamp:qg(t)})}function Kd(t,e,n,s,r){t.dataUpdateCount++;const i=new _e(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(r)if(s){const l=ao(n,c=>Le(c));o=DE(t.serverSyncTree_,i,l,r)}else{const l=Le(n);o=ME(t.serverSyncTree_,i,l,r)}else if(s){const l=ao(n,c=>Le(c));o=PE(t.serverSyncTree_,i,l)}else{const l=Le(n);o=ta(t.serverSyncTree_,i,l)}let a=i;o.length>0&&(a=ia(t,i)),bn(t.eventQueue_,a,o)}function qd(t,e){jc(t,"connected",e),e===!1&&cI(t)}function aI(t,e){qe(e,(n,s)=>{jc(t,n,s)})}function jc(t,e,n){const s=new _e("/.info/"+e),r=Le(n);t.infoData_.updateSnapshot(s,r);const i=ta(t.infoSyncTree_,s,r);bn(t.eventQueue_,s,i)}function Yg(t){return t.nextWriteId_++}function lI(t,e,n,s,r){Wc(t,"set",{path:e.toString(),value:n,priority:s});const i=Vc(t),o=Le(n,s),a=Rc(t.serverSyncTree_,e),l=Vg(o,a,i),c=Yg(t),u=Ug(t.serverSyncTree_,e,l,c,!0);Hc(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(h,f)=>{const y=h==="ok";y||ct("set at "+e+" failed: "+h);const v=ss(t.serverSyncTree_,c,!y);bn(t.eventQueue_,e,v),Qs(t,r,h,f)});const d=em(t,e);ia(t,d),bn(t.eventQueue_,d,[])}function cI(t){Wc(t,"onDisconnectEvents");const e=Vc(t),n=wo();pl(t.onDisconnect_,pe(),(r,i)=>{const o=WE(r,i,t.serverSyncTree_,e);ar(n,r,o)});let s=[];pl(n,pe(),(r,i)=>{s=s.concat(ta(t.serverSyncTree_,r,i));const o=em(t,r);ia(t,o)}),t.onDisconnect_=wo(),bn(t.eventQueue_,pe(),s)}function uI(t,e,n){t.server_.onDisconnectCancel(e.toString(),(s,r)=>{s==="ok"&&fl(t.onDisconnect_,e),Qs(t,n,s,r)})}function Yd(t,e,n,s){const r=Le(n);t.server_.onDisconnectPut(e.toString(),r.val(!0),(i,o)=>{i==="ok"&&ar(t.onDisconnect_,e,r),Qs(t,s,i,o)})}function dI(t,e,n,s,r){const i=Le(n,s);t.server_.onDisconnectPut(e.toString(),i.val(!0),(o,a)=>{o==="ok"&&ar(t.onDisconnect_,e,i),Qs(t,r,o,a)})}function hI(t,e,n,s){if(oo(n)){$e("onDisconnect().update() called with empty data.  Don't do anything."),Qs(t,s,"ok",void 0);return}t.server_.onDisconnectMerge(e.toString(),n,(r,i)=>{r==="ok"&&qe(n,(o,a)=>{const l=Le(a);ar(t.onDisconnect_,Ne(e,o),l)}),Qs(t,s,r,i)})}function fI(t,e,n){let s;oe(e._path)===".info"?s=zd(t.infoSyncTree_,e,n):s=zd(t.serverSyncTree_,e,n),Gg(t.eventQueue_,e._path,s)}function Qd(t,e,n){let s;oe(e._path)===".info"?s=bl(t.infoSyncTree_,e,n):s=bl(t.serverSyncTree_,e,n),Gg(t.eventQueue_,e._path,s)}function pI(t){t.persistentConnection_&&t.persistentConnection_.interrupt(sI)}function Wc(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),$e(n,...e)}function Qs(t,e,n,s){e&&or(()=>{if(n==="ok")e(null);else{const r=(n||"error").toUpperCase();let i=r;s&&(i+=": "+s);const o=new Error(i);o.code=r,e(o)}})}function Qg(t,e,n){return Rc(t.serverSyncTree_,e,n)||J.EMPTY_NODE}function $c(t,e=t.transactionQueueTree_){if(e||oa(t,e),lr(e)){const n=Xg(t,e);T(n.length>0,"Sending zero length transaction queue"),n.every(r=>r.status===0)&&gI(t,bi(e),n)}else Wg(e)&&sa(e,n=>{$c(t,n)})}function gI(t,e,n){const s=n.map(c=>c.currentWriteId),r=Qg(t,e,s);let i=r;const o=r.hash();for(let c=0;c<n.length;c++){const u=n[c];T(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const d=at(e,u.path);i=i.updateChild(d,u.currentOutputSnapshotRaw)}const a=i.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Wc(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const d=[];for(let h=0;h<n.length;h++)n[h].status=2,u=u.concat(ss(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&d.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();oa(t,Uc(t.transactionQueueTree_,e)),$c(t,t.transactionQueueTree_),bn(t.eventQueue_,e,u);for(let h=0;h<d.length;h++)or(d[h])}else{if(c==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{ct("transaction at "+l.toString()+" failed: "+c);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=c}ia(t,e)}},o)}function ia(t,e){const n=Jg(t,e),s=bi(n),r=Xg(t,n);return mI(t,r,s),s}function mI(t,e,n){if(e.length===0)return;const s=[];let r=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=at(n,l.path);let u=!1,d;if(T(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,d=l.abortReason,r=r.concat(ss(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=rI)u=!0,d="maxretry",r=r.concat(ss(t.serverSyncTree_,l.currentWriteId,!0));else{const h=Qg(t,l.path,o);l.currentInputSnapshot=h;const f=e[a].update(h.val());if(f!==void 0){ra("transaction failed: Data returned ",f,l.path);let y=Le(f);typeof f=="object"&&f!=null&&Kt(f,".priority")||(y=y.updatePriority(h.getPriority()));const x=l.currentWriteId,R=Vc(t),k=Vg(y,h,R);l.currentOutputSnapshotRaw=y,l.currentOutputSnapshotResolved=k,l.currentWriteId=Yg(t),o.splice(o.indexOf(x),1),r=r.concat(Ug(t.serverSyncTree_,l.path,k,l.currentWriteId,l.applyLocally)),r=r.concat(ss(t.serverSyncTree_,x,!0))}else u=!0,d="nodata",r=r.concat(ss(t.serverSyncTree_,l.currentWriteId,!0))}bn(t.eventQueue_,n,r),r=[],u&&(e[a].status=2,(function(h){setTimeout(h,Math.floor(0))})(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(d),!1,null))))}oa(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)or(s[a]);$c(t,t.transactionQueueTree_)}function Jg(t,e){let n,s=t.transactionQueueTree_;for(n=oe(e);n!==null&&lr(s)===void 0;)s=Uc(s,n),e=Ce(e),n=oe(e);return s}function Xg(t,e){const n=[];return Zg(t,e,n),n.sort((s,r)=>s.order-r.order),n}function Zg(t,e,n){const s=lr(e);if(s)for(let r=0;r<s.length;r++)n.push(s[r]);sa(e,r=>{Zg(t,r,n)})}function oa(t,e){const n=lr(e);if(n){let s=0;for(let r=0;r<n.length;r++)n[r].status!==2&&(n[s]=n[r],s++);n.length=s,jg(e,n.length>0?n:void 0)}sa(e,s=>{oa(t,s)})}function em(t,e){const n=bi(Jg(t,e)),s=Uc(t.transactionQueueTree_,e);return zE(s,r=>{Ma(t,r)}),Ma(t,s),$g(s,r=>{Ma(t,r)}),n}function Ma(t,e){const n=lr(e);if(n){const s=[];let r=[],i=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(T(i===o-1,"All SENT items should be at beginning of queue."),i=o,n[o].status=3,n[o].abortReason="set"):(T(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),r=r.concat(ss(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?jg(e,void 0):n.length=i+1,bn(t.eventQueue_,bi(e),r);for(let o=0;o<s.length;o++)or(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _I(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let r=n[s];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch{}e+="/"+r}return e}function yI(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):ct(`Invalid query segment '${n}' in query '${t}'`)}return e}const Jd=function(t,e){const n=vI(t),s=n.namespace;n.domain==="firebase.com"&&vn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&vn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||x1();const r=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new og(n.host,n.secure,s,r,e,"",s!==n.subdomain),path:new _e(n.pathString)}},vI=function(t){let e="",n="",s="",r="",i="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(u,d)),u<d&&(r=_I(t.substring(u,d)));const h=yI(t.substring(Math.min(t.length,d)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const f=e.slice(0,c);if(f.toLowerCase()==="localhost")n="localhost";else if(f.split(".").length<=2)n=f;else{const y=e.indexOf(".");s=e.substring(0,y).toLowerCase(),n=e.substring(y+1),i=s}"ns"in h&&(i=h.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:r,namespace:i}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xd="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",bI=(function(){let t=0;const e=[];return function(n){const s=n===t;t=n;let r;const i=new Array(8);for(r=7;r>=0;r--)i[r]=Xd.charAt(n%64),n=Math.floor(n/64);T(n===0,"Cannot push at time == 0");let o=i.join("");if(s){for(r=11;r>=0&&e[r]===63;r--)e[r]=0;e[r]++}else for(r=0;r<12;r++)e[r]=Math.floor(Math.random()*64);for(r=0;r<12;r++)o+=Xd.charAt(e[r]);return T(o.length===20,"nextPushId: Length should be 20."),o}})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tm{constructor(e,n,s,r){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=r}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ve(this.snapshot.exportVal())}}class nm{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wI{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return T(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CI{constructor(e,n){this._repo=e,this._path=n}cancel(){const e=new rn;return uI(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){rs("OnDisconnect.remove",this._path);const e=new rn;return Yd(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){rs("OnDisconnect.set",this._path),Ao("OnDisconnect.set",e,this._path,!1);const n=new rn;return Yd(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}setWithPriority(e,n){rs("OnDisconnect.setWithPriority",this._path),Ao("OnDisconnect.setWithPriority",e,this._path,!1),XE("OnDisconnect.setWithPriority",n);const s=new rn;return dI(this._repo,this._path,e,n,s.wrapCallback(()=>{})),s.promise}update(e){rs("OnDisconnect.update",this._path),JE("OnDisconnect.update",e,this._path);const n=new rn;return hI(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(e,n,s,r){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=r}get key(){return ae(this._path)?null:gc(this._path)}get ref(){return new Tn(this._repo,this._path)}get _queryIdentifier(){const e=Od(this._queryParams),n=dc(e);return n==="{}"?"default":n}get _queryObject(){return Od(this._queryParams)}isEqual(e){if(e=Fe(e),!(e instanceof wi))return!1;const n=this._repo===e._repo,s=mc(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return n&&s&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+dC(this._path)}}function EI(t,e){if(t._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function II(t){let e=null,n=null;if(t.hasStart()&&(e=t.getIndexStartValue()),t.hasEnd()&&(n=t.getIndexEndValue()),t.getIndex()===as){const s="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",r="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(t.hasStart()){if(t.getIndexStartName()!==fs)throw new Error(s);if(typeof e!="string")throw new Error(r)}if(t.hasEnd()){if(t.getIndexEndName()!==$n)throw new Error(s);if(typeof n!="string")throw new Error(r)}}else if(t.getIndex()===Ae){if(e!=null&&!Ro(e)||n!=null&&!Ro(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(T(t.getIndex()instanceof vc||t.getIndex()===Cg,"unknown index type."),e!=null&&typeof e=="object"||n!=null&&typeof n=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}class Tn extends wi{constructor(e,n){super(e,n,new wc,!1)}get parent(){const e=gg(this._path);return e===null?null:new Tn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class ri{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new _e(e),s=Js(this.ref,e);return new ri(this._node.getChild(n),s,Ae)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,r)=>e(new ri(r,Js(this.ref,s),Ae)))}hasChild(e){const n=new _e(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function ft(t,e){return t=Fe(t),t._checkNotDeleted("ref"),e!==void 0?Js(t._root,e):t._root}function Js(t,e){return t=Fe(t),oe(t._path)===null?ZE("child","path",e):Bc("child","path",e),new Tn(t._repo,Ne(t._path,e))}function sm(t){return t=Fe(t),new CI(t._repo,t._path)}function TI(t,e){t=Fe(t),rs("push",t._path),Ao("push",e,t._path,!0);const n=qg(t._repo),s=bI(n),r=Js(t,s),i=Js(t,s);let o;return o=Promise.resolve(i),r.then=o.then.bind(o),r.catch=o.then.bind(o,void 0),r}function Da(t){return rs("remove",t._path),Ws(t,null)}function Ws(t,e){t=Fe(t),rs("set",t._path),Ao("set",e,t._path,!1);const n=new rn;return lI(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}class zc{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new tm("value",this,new ri(e.snapshotNode,new Tn(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new nm(this,e,n):null}matches(e){return e instanceof zc?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Gc{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new nm(this,e,n):null}createEvent(e,n){T(e.childName!=null,"Child events should have a childName.");const s=Js(new Tn(n._repo,n._path),e.childName),r=n._queryParams.getIndex();return new tm(e.type,this,new ri(e.snapshotNode,s,r),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Gc?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function rm(t,e,n,s,r){let i;if(typeof s=="object"&&(i=void 0,r=s),typeof s=="function"&&(i=s),r&&r.onlyOnce){const l=n,c=(u,d)=>{Qd(t._repo,t,a),l(u,d)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new wI(n,i||void 0),a=e==="value"?new zc(o):new Gc(e,o);return fI(t._repo,t,a),()=>Qd(t._repo,t,a)}function Ns(t,e,n,s){return rm(t,"value",e,n,s)}function SI(t,e,n,s){return rm(t,"child_added",e,n,s)}class im{}class kI extends im{constructor(e){super(),this._limit=e,this.type="limitToLast"}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new wi(e._repo,e._path,MC(e._queryParams,this._limit),e._orderByCalled)}}function xI(t){if(Math.floor(t)!==t||t<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new kI(t)}class RI extends im{constructor(e){super(),this._path=e,this.type="orderByChild"}_apply(e){EI(e,"orderByChild");const n=new _e(this._path);if(ae(n))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const s=new vc(n),r=DC(e._queryParams,s);return II(r),new wi(e._repo,e._path,r,!0)}}function AI(t){return Bc("orderByChild","path",t),new RI(t)}function PI(t,...e){let n=Fe(t);for(const s of e)n=s._apply(n);return n}CE(Tn);xE(Tn);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NI="FIREBASE_DATABASE_EMULATOR_HOST",Cl={};let OI=!1;function MI(t,e,n,s){const r=e.lastIndexOf(":"),i=e.substring(0,r),o=vs(i);t.repoInfo_=new og(e,o,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),s&&(t.authTokenProvider_=s)}function DI(t,e,n,s,r){let i=s||t.options.databaseURL;i===void 0&&(t.options.projectId||vn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),$e("Using default host for project ",t.options.projectId),i=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Jd(i,r),a=o.repoInfo,l;typeof process<"u"&&gd&&(l=gd[NI]),l?(i=`http://${l}?ns=${a.namespace}`,o=Jd(i,r),a=o.repoInfo):o.repoInfo.secure;const c=new B1(t.name,t.options,e);eI("Invalid Firebase Database URL",o),ae(o.path)||vn("Database URL must point to the root of a Firebase Database (not including a child path).");const u=UI(a,t,c,new F1(t,n));return new FI(u,t)}function LI(t,e){const n=Cl[e];(!n||n[t.key]!==t)&&vn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),pI(t),delete n[t.key]}function UI(t,e,n,s){let r=Cl[e.name];r||(r={},Cl[e.name]=r);let i=r[t.toURLString()];return i&&vn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new iI(t,OI,n,s),r[t.toURLString()]=i,i}class FI{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(oI(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Tn(this._repo,pe())),this._rootInternal}_delete(){return this._rootInternal!==null&&(LI(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&vn("Cannot call "+e+" on a deleted database.")}}function BI(t=ec(),e){const n=Ko(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=ep("database");s&&HI(n,...s)}return n}function HI(t,e,n,s={}){t=Fe(t),t._checkNotDeleted("useEmulator");const r=`${e}:${n}`,i=t._repoInternal;if(t._instanceStarted){if(r===t._repoInternal.repoInfo_.host&&cs(s,i.repoInfo_.emulatorOptions))return;vn("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&vn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new Wi(Wi.OWNER);else if(s.mockUserToken){const a=typeof s.mockUserToken=="string"?s.mockUserToken:sp(s.mockUserToken,t.app.options.projectId);o=new Wi(a)}vs(e)&&(Yl(e),Ql("Database",!0)),MI(i,r,s,o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VI(t){C1(bs),us(new Wn("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return DI(s,r,i,n)},"PUBLIC").setMultipleInstances(!0)),Wt(md,_d,t),Wt(md,_d,"esm2020")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jI={".sv":"timestamp"};function La(){return jI}pn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};pn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};VI();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const om="firebasestorage.googleapis.com",WI="storageBucket",$I=120*1e3,zI=600*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt extends Cn{constructor(e,n,s=0){super(Ua(e),`Firebase Storage: ${n} (${Ua(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Yt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Ua(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Gt;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Gt||(Gt={}));function Ua(t){return"storage/"+t}function GI(){const t="An unknown error occurred, please check the error payload for server response.";return new Yt(Gt.UNKNOWN,t)}function KI(){return new Yt(Gt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function qI(){return new Yt(Gt.CANCELED,"User canceled the upload/download.")}function YI(t){return new Yt(Gt.INVALID_URL,"Invalid URL '"+t+"'.")}function QI(t){return new Yt(Gt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Zd(t){return new Yt(Gt.INVALID_ARGUMENT,t)}function am(){return new Yt(Gt.APP_DELETED,"The Firebase app was deleted.")}function JI(t){return new Yt(Gt.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=Rt.makeFromUrl(e,n)}catch{return new Rt(e,"")}if(s.path==="")return s;throw QI(e)}static makeFromUrl(e,n){let s=null;const r="([A-Za-z0-9.\\-_]+)";function i(A){A.path.charAt(A.path.length-1)==="/"&&(A.path_=A.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+r+o,"i"),l={bucket:1,path:3};function c(A){A.path_=decodeURIComponent(A.path)}const u="v[A-Za-z0-9_]+",d=n.replace(/[.]/g,"\\."),h="(/([^?#]*).*)?$",f=new RegExp(`^https?://${d}/${u}/b/${r}/o${h}`,"i"),y={bucket:1,path:3},v=n===om?"(?:storage.googleapis.com|storage.cloud.google.com)":n,x="([^?#]*)",R=new RegExp(`^https?://${v}/${r}/${x}`,"i"),O=[{regex:a,indices:l,postModify:i},{regex:f,indices:y,postModify:c},{regex:R,indices:{bucket:1,path:2},postModify:c}];for(let A=0;A<O.length;A++){const V=O[A],M=V.regex.exec(e);if(M){const X=M[V.indices.bucket];let xe=M[V.indices.path];xe||(xe=""),s=new Rt(X,xe),V.postModify(s);break}}if(s==null)throw YI(e);return s}}class XI{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZI(t,e,n){let s=1,r=null,i=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...x){c||(c=!0,e.apply(null,x))}function d(x){r=setTimeout(()=>{r=null,t(f,l())},x)}function h(){i&&clearTimeout(i)}function f(x,...R){if(c){h();return}if(x){h(),u.call(null,x,...R);return}if(l()||o){h(),u.call(null,x,...R);return}s<64&&(s*=2);let O;a===1?(a=2,O=0):O=(s+Math.random())*1e3,d(O)}let y=!1;function v(x){y||(y=!0,h(),!c&&(r!==null?(x||(a=2),clearTimeout(r),d(0)):x||(a=1)))}return d(0),i=setTimeout(()=>{o=!0,v(!0)},n),v}function eT(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tT(t){return t!==void 0}function eh(t,e,n,s){if(s<e)throw Zd(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw Zd(`Invalid value for '${t}'. Expected ${n} or less.`)}function nT(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const r=e(s)+"="+e(t[s]);n=n+r+"&"}return n=n.slice(0,-1),n}var Po;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Po||(Po={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sT(t,e){const n=t>=500&&t<600,r=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||r||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rT{constructor(e,n,s,r,i,o,a,l,c,u,d,h=!0,f=!1){this.url_=e,this.method_=n,this.headers_=s,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=d,this.retry=h,this.isUsingEmulator=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((y,v)=>{this.resolve_=y,this.reject_=v,this.start_()})}start_(){const e=(s,r)=>{if(r){s(!1,new Ni(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===Po.NO_ERROR,l=i.getStatus();if(!a||sT(l,this.additionalRetryCodes_)&&this.retry){const u=i.getErrorCode()===Po.ABORT;s(!1,new Ni(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;s(!0,new Ni(c,i))})},n=(s,r)=>{const i=this.resolve_,o=this.reject_,a=r.connection;if(r.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());tT(l)?i(l):i()}catch(l){o(l)}else if(a!==null){const l=GI();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(r.canceled){const l=this.appDelete_?am():qI();o(l)}else{const l=KI();o(l)}};this.canceled_?n(!1,new Ni(!1,null,!0)):this.backoffId_=ZI(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&eT(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ni{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function iT(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function oT(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function aT(t,e){e&&(t["X-Firebase-GMPID"]=e)}function lT(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function cT(t,e,n,s,r,i,o=!0,a=!1){const l=nT(t.urlParams),c=t.url+l,u=Object.assign({},t.headers);return aT(u,e),iT(u,n),oT(u,i),lT(u,s),new rT(c,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r,o,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uT(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function dT(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(e,n){this._service=e,n instanceof Rt?this._location=n:this._location=Rt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new No(e,n)}get root(){const e=new Rt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return dT(this._location.path)}get storage(){return this._service}get parent(){const e=uT(this._location.path);if(e===null)return null;const n=new Rt(this._location.bucket,e);return new No(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw JI(e)}}function th(t,e){const n=e?.[WI];return n==null?null:Rt.makeFromBucketSpec(n,t)}function hT(t,e,n,s={}){t.host=`${e}:${n}`;const r=vs(e);r&&(Yl(`https://${t.host}/b`),Ql("Storage",!0)),t._isUsingEmulator=!0,t._protocol=r?"https":"http";const{mockUserToken:i}=s;i&&(t._overrideAuthToken=typeof i=="string"?i:sp(i,t.app.options.projectId))}class fT{constructor(e,n,s,r,i,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=r,this._firebaseVersion=i,this._isUsingEmulator=o,this._bucket=null,this._host=om,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=$I,this._maxUploadRetryTime=zI,this._requests=new Set,r!=null?this._bucket=Rt.makeFromBucketSpec(r,this._host):this._bucket=th(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Rt.makeFromBucketSpec(this._url,e):this._bucket=th(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){eh("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){eh("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(ot(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new No(this,e)}_makeRequest(e,n,s,r,i=!0){if(this._deleted)return new XI(am());{const o=cT(e,this._appId,s,r,n,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,r).getPromise()}}const nh="@firebase/storage",sh="0.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lm="storage";function pT(t=ec(),e){t=Fe(t);const s=Ko(t,lm).getImmediate({identifier:e}),r=ep("storage");return r&&gT(s,...r),s}function gT(t,e,n,s={}){hT(t,e,n,s)}function mT(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new fT(n,s,r,e,bs)}function _T(){us(new Wn(lm,mT,"PUBLIC").setMultipleInstances(!0)),Wt(nh,sh,""),Wt(nh,sh,"esm2020")}_T();const yT={apiKey:"AIzaSyDLRvQc2PBTj5cR0gSaNwygQd6LO3_Voto",authDomain:"connectcircle-dff2b.firebaseapp.com",databaseURL:"https://connectcircle-dff2b-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"connectcircle-dff2b",storageBucket:"connectcircle-dff2b.firebasestorage.app",messagingSenderId:"346730287457",appId:"1:346730287457:web:dcbba1dc9bbd7ddbf23520",measurementId:"G-KKRHCCS8JH"},Kc=lp(yT),dn=y1(Kc),pt=BI(Kc);pT(Kc);const _R=new on;/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const As=typeof document<"u";function cm(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function vT(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&cm(t.default)}const ge=Object.assign;function Fa(t,e){const n={};for(const s in e){const r=e[s];n[s]=Mt(r)?r.map(t):t(r)}return n}const Ur=()=>{},Mt=Array.isArray,um=/#/g,bT=/&/g,wT=/\//g,CT=/=/g,ET=/\?/g,dm=/\+/g,IT=/%5B/g,TT=/%5D/g,hm=/%5E/g,ST=/%60/g,fm=/%7B/g,kT=/%7C/g,pm=/%7D/g,xT=/%20/g;function qc(t){return encodeURI(""+t).replace(kT,"|").replace(IT,"[").replace(TT,"]")}function RT(t){return qc(t).replace(fm,"{").replace(pm,"}").replace(hm,"^")}function El(t){return qc(t).replace(dm,"%2B").replace(xT,"+").replace(um,"%23").replace(bT,"%26").replace(ST,"`").replace(fm,"{").replace(pm,"}").replace(hm,"^")}function AT(t){return El(t).replace(CT,"%3D")}function PT(t){return qc(t).replace(um,"%23").replace(ET,"%3F")}function NT(t){return t==null?"":PT(t).replace(wT,"%2F")}function ii(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const OT=/\/$/,MT=t=>t.replace(OT,"");function Ba(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=e.slice(0,l),i=e.slice(l+1,a>-1?a:e.length),r=t(i)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=FT(s??e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:ii(o)}}function DT(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function rh(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function LT(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&Xs(e.matched[s],n.matched[r])&&gm(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Xs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function gm(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!UT(t[n],e[n]))return!1;return!0}function UT(t,e){return Mt(t)?ih(t,e):Mt(e)?ih(e,t):t===e}function ih(t,e){return Mt(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function FT(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),r=s[s.length-1];(r===".."||r===".")&&s.push("");let i=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(o).join("/")}const xn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var oi;(function(t){t.pop="pop",t.push="push"})(oi||(oi={}));var Fr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Fr||(Fr={}));function BT(t){if(!t)if(As){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),MT(t)}const HT=/^[^#]+#/;function VT(t,e){return t.replace(HT,"#")+e}function jT(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const aa=()=>({left:window.scrollX,top:window.scrollY});function WT(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=jT(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function oh(t,e){return(history.state?history.state.position-e:-1)+t}const Il=new Map;function $T(t,e){Il.set(t,e)}function zT(t){const e=Il.get(t);return Il.delete(t),e}let GT=()=>location.protocol+"//"+location.host;function mm(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),rh(l,"")}return rh(n,t)+s+r}function KT(t,e,n,s){let r=[],i=[],o=null;const a=({state:h})=>{const f=mm(t,location),y=n.value,v=e.value;let x=0;if(h){if(n.value=f,e.value=h,o&&o===y){o=null;return}x=v?h.position-v.position:0}else s(f);r.forEach(R=>{R(n.value,y,{delta:x,type:oi.pop,direction:x?x>0?Fr.forward:Fr.back:Fr.unknown})})};function l(){o=n.value}function c(h){r.push(h);const f=()=>{const y=r.indexOf(h);y>-1&&r.splice(y,1)};return i.push(f),f}function u(){const{history:h}=window;h.state&&h.replaceState(ge({},h.state,{scroll:aa()}),"")}function d(){for(const h of i)h();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:d}}function ah(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?aa():null}}function qT(t){const{history:e,location:n}=window,s={value:mm(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,c,u){const d=t.indexOf("#"),h=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+l:GT()+t+l;try{e[u?"replaceState":"pushState"](c,"",h),r.value=c}catch(f){console.error(f),n[u?"replace":"assign"](h)}}function o(l,c){const u=ge({},e.state,ah(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});i(l,u,!0),s.value=l}function a(l,c){const u=ge({},r.value,e.state,{forward:l,scroll:aa()});i(u.current,u,!0);const d=ge({},ah(s.value,l,null),{position:u.position+1},c);i(l,d,!1),s.value=l}return{location:s,state:r,push:a,replace:o}}function YT(t){t=BT(t);const e=qT(t),n=KT(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=ge({location:"",base:t,go:s,createHref:VT.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function QT(t){return typeof t=="string"||t&&typeof t=="object"}function _m(t){return typeof t=="string"||typeof t=="symbol"}const ym=Symbol("");var lh;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(lh||(lh={}));function Zs(t,e){return ge(new Error,{type:t,[ym]:!0},e)}function Xt(t,e){return t instanceof Error&&ym in t&&(e==null||!!(t.type&e))}const ch="[^/]+?",JT={sensitive:!1,strict:!1,start:!0,end:!0},XT=/[.+*?^${}()[\]/\\]/g;function ZT(t,e){const n=ge({},JT,e),s=[];let r=n.start?"^":"";const i=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(r+="/");for(let d=0;d<c.length;d++){const h=c[d];let f=40+(n.sensitive?.25:0);if(h.type===0)d||(r+="/"),r+=h.value.replace(XT,"\\$&"),f+=40;else if(h.type===1){const{value:y,repeatable:v,optional:x,regexp:R}=h;i.push({name:y,repeatable:v,optional:x});const k=R||ch;if(k!==ch){f+=10;try{new RegExp(`(${k})`)}catch(A){throw new Error(`Invalid custom RegExp for param "${y}" (${k}): `+A.message)}}let O=v?`((?:${k})(?:/(?:${k}))*)`:`(${k})`;d||(O=x&&c.length<2?`(?:/${O})`:"/"+O),x&&(O+="?"),r+=O,f+=20,x&&(f+=-8),v&&(f+=-20),k===".*"&&(f+=-50)}u.push(f)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(c){const u=c.match(o),d={};if(!u)return null;for(let h=1;h<u.length;h++){const f=u[h]||"",y=i[h-1];d[y.name]=f&&y.repeatable?f.split("/"):f}return d}function l(c){let u="",d=!1;for(const h of t){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const f of h)if(f.type===0)u+=f.value;else if(f.type===1){const{value:y,repeatable:v,optional:x}=f,R=y in c?c[y]:"";if(Mt(R)&&!v)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const k=Mt(R)?R.join("/"):R;if(!k)if(x)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${y}"`);u+=k}}return u||"/"}return{re:o,score:s,keys:i,parse:a,stringify:l}}function eS(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function vm(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=eS(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(uh(s))return 1;if(uh(r))return-1}return r.length-s.length}function uh(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const tS={type:0,value:""},nS=/[a-zA-Z0-9_]/;function sS(t){if(!t)return[[]];if(t==="/")return[[tS]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(f){throw new Error(`ERR (${n})/"${c}": ${f}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,l,c="",u="";function d(){c&&(n===0?i.push({type:0,value:c}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&d(),o()):l===":"?(d(),n=1):h();break;case 4:h(),n=s;break;case 1:l==="("?n=2:nS.test(l)?h():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),d(),o(),r}function rS(t,e,n){const s=ZT(sS(t.path),n),r=ge(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function iS(t,e){const n=[],s=new Map;e=ph({strict:!1,end:!0,sensitive:!1},e);function r(d){return s.get(d)}function i(d,h,f){const y=!f,v=hh(d);v.aliasOf=f&&f.record;const x=ph(e,d),R=[v];if("alias"in d){const A=typeof d.alias=="string"?[d.alias]:d.alias;for(const V of A)R.push(hh(ge({},v,{components:f?f.record.components:v.components,path:V,aliasOf:f?f.record:v})))}let k,O;for(const A of R){const{path:V}=A;if(h&&V[0]!=="/"){const M=h.record.path,X=M[M.length-1]==="/"?"":"/";A.path=h.record.path+(V&&X+V)}if(k=rS(A,h,x),f?f.alias.push(k):(O=O||k,O!==k&&O.alias.push(k),y&&d.name&&!fh(k)&&o(d.name)),bm(k)&&l(k),v.children){const M=v.children;for(let X=0;X<M.length;X++)i(M[X],k,f&&f.children[X])}f=f||k}return O?()=>{o(O)}:Ur}function o(d){if(_m(d)){const h=s.get(d);h&&(s.delete(d),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(d);h>-1&&(n.splice(h,1),d.record.name&&s.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function a(){return n}function l(d){const h=lS(d,n);n.splice(h,0,d),d.record.name&&!fh(d)&&s.set(d.record.name,d)}function c(d,h){let f,y={},v,x;if("name"in d&&d.name){if(f=s.get(d.name),!f)throw Zs(1,{location:d});x=f.record.name,y=ge(dh(h.params,f.keys.filter(O=>!O.optional).concat(f.parent?f.parent.keys.filter(O=>O.optional):[]).map(O=>O.name)),d.params&&dh(d.params,f.keys.map(O=>O.name))),v=f.stringify(y)}else if(d.path!=null)v=d.path,f=n.find(O=>O.re.test(v)),f&&(y=f.parse(v),x=f.record.name);else{if(f=h.name?s.get(h.name):n.find(O=>O.re.test(h.path)),!f)throw Zs(1,{location:d,currentLocation:h});x=f.record.name,y=ge({},h.params,d.params),v=f.stringify(y)}const R=[];let k=f;for(;k;)R.unshift(k.record),k=k.parent;return{name:x,path:v,params:y,matched:R,meta:aS(R)}}t.forEach(d=>i(d));function u(){n.length=0,s.clear()}return{addRoute:i,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:r}}function dh(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function hh(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:oS(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function oS(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function fh(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function aS(t){return t.reduce((e,n)=>ge(e,n.meta),{})}function ph(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function lS(t,e){let n=0,s=e.length;for(;n!==s;){const i=n+s>>1;vm(t,e[i])<0?s=i:n=i+1}const r=cS(t);return r&&(s=e.lastIndexOf(r,s-1)),s}function cS(t){let e=t;for(;e=e.parent;)if(bm(e)&&vm(t,e)===0)return e}function bm({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function uS(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(dm," "),o=i.indexOf("="),a=ii(o<0?i:i.slice(0,o)),l=o<0?null:ii(i.slice(o+1));if(a in e){let c=e[a];Mt(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function gh(t){let e="";for(let n in t){const s=t[n];if(n=AT(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Mt(s)?s.map(i=>i&&El(i)):[s&&El(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function dS(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Mt(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const hS=Symbol(""),mh=Symbol(""),la=Symbol(""),Yc=Symbol(""),Tl=Symbol("");function _r(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Pn(t,e,n,s,r,i=o=>o()){const o=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((a,l)=>{const c=h=>{h===!1?l(Zs(4,{from:n,to:e})):h instanceof Error?l(h):QT(h)?l(Zs(2,{from:e,to:h})):(o&&s.enterCallbacks[r]===o&&typeof h=="function"&&o.push(h),a())},u=i(()=>t.call(s&&s.instances[r],e,n,c));let d=Promise.resolve(u);t.length<3&&(d=d.then(c)),d.catch(h=>l(h))})}function Ha(t,e,n,s,r=i=>i()){const i=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(cm(l)){const u=(l.__vccOpts||l)[e];u&&i.push(Pn(u,n,s,o,a,r))}else{let c=l();i.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const d=vT(u)?u.default:u;o.mods[a]=u,o.components[a]=d;const f=(d.__vccOpts||d)[e];return f&&Pn(f,n,s,o,a,r)()}))}}return i}function _h(t){const e=Ct(la),n=Ct(Yc),s=ke(()=>{const l=os(t.to);return e.resolve(l)}),r=ke(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],d=n.matched;if(!u||!d.length)return-1;const h=d.findIndex(Xs.bind(null,u));if(h>-1)return h;const f=yh(l[c-2]);return c>1&&yh(u)===f&&d[d.length-1].path!==f?d.findIndex(Xs.bind(null,l[c-2])):h}),i=ke(()=>r.value>-1&&_S(n.params,s.value.params)),o=ke(()=>r.value>-1&&r.value===n.matched.length-1&&gm(n.params,s.value.params));function a(l={}){if(mS(l)){const c=e[os(t.replace)?"replace":"push"](os(t.to)).catch(Ur);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:s,href:ke(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}function fS(t){return t.length===1?t[0]:t}const pS=af({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:_h,setup(t,{slots:e}){const n=li(_h(t)),{options:s}=Ct(la),r=ke(()=>({[vh(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[vh(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&fS(e.default(n));return t.custom?i:Wl("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),gS=pS;function mS(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function _S(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!Mt(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function yh(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const vh=(t,e,n)=>t??e??n,yS=af({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Ct(Tl),r=ke(()=>t.route||s.value),i=Ct(mh,0),o=ke(()=>{let c=os(i);const{matched:u}=r.value;let d;for(;(d=u[c])&&!d.components;)c++;return c}),a=ke(()=>r.value.matched[o.value]);Mi(mh,ke(()=>o.value+1)),Mi(hS,a),Mi(Tl,r);const l=fe();return hn(()=>[l.value,a.value,t.name],([c,u,d],[h,f,y])=>{u&&(u.instances[d]=c,f&&f!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=f.leaveGuards),u.updateGuards.size||(u.updateGuards=f.updateGuards))),c&&u&&(!f||!Xs(u,f)||!h)&&(u.enterCallbacks[d]||[]).forEach(v=>v(c))},{flush:"post"}),()=>{const c=r.value,u=t.name,d=a.value,h=d&&d.components[u];if(!h)return bh(n.default,{Component:h,route:c});const f=d.props[u],y=f?f===!0?c.params:typeof f=="function"?f(c):f:null,x=Wl(h,ge({},y,e,{onVnodeUnmounted:R=>{R.component.isUnmounted&&(d.instances[u]=null)},ref:l}));return bh(n.default,{Component:x,route:c})||x}}});function bh(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const vS=yS;function bS(t){const e=iS(t.routes,t),n=t.parseQuery||uS,s=t.stringifyQuery||gh,r=t.history,i=_r(),o=_r(),a=_r(),l=s_(xn);let c=xn;As&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Fa.bind(null,C=>""+C),d=Fa.bind(null,NT),h=Fa.bind(null,ii);function f(C,F){let L,j;return _m(C)?(L=e.getRecordMatcher(C),j=F):j=C,e.addRoute(j,L)}function y(C){const F=e.getRecordMatcher(C);F&&e.removeRoute(F)}function v(){return e.getRoutes().map(C=>C.record)}function x(C){return!!e.getRecordMatcher(C)}function R(C,F){if(F=ge({},F||l.value),typeof C=="string"){const _=Ba(n,C,F.path),w=e.resolve({path:_.path},F),E=r.createHref(_.fullPath);return ge(_,w,{params:h(w.params),hash:ii(_.hash),redirectedFrom:void 0,href:E})}let L;if(C.path!=null)L=ge({},C,{path:Ba(n,C.path,F.path).path});else{const _=ge({},C.params);for(const w in _)_[w]==null&&delete _[w];L=ge({},C,{params:d(_)}),F.params=d(F.params)}const j=e.resolve(L,F),be=C.hash||"";j.params=u(h(j.params));const p=DT(s,ge({},C,{hash:RT(be),path:j.path})),m=r.createHref(p);return ge({fullPath:p,hash:be,query:s===gh?dS(C.query):C.query||{}},j,{redirectedFrom:void 0,href:m})}function k(C){return typeof C=="string"?Ba(n,C,l.value.path):ge({},C)}function O(C,F){if(c!==C)return Zs(8,{from:F,to:C})}function A(C){return X(C)}function V(C){return A(ge(k(C),{replace:!0}))}function M(C){const F=C.matched[C.matched.length-1];if(F&&F.redirect){const{redirect:L}=F;let j=typeof L=="function"?L(C):L;return typeof j=="string"&&(j=j.includes("?")||j.includes("#")?j=k(j):{path:j},j.params={}),ge({query:C.query,hash:C.hash,params:j.path!=null?{}:C.params},j)}}function X(C,F){const L=c=R(C),j=l.value,be=C.state,p=C.force,m=C.replace===!0,_=M(L);if(_)return X(ge(k(_),{state:typeof _=="object"?ge({},be,_.state):be,force:p,replace:m}),F||L);const w=L;w.redirectedFrom=F;let E;return!p&&LT(s,j,L)&&(E=Zs(16,{to:w,from:j}),et(j,j,!0,!1)),(E?Promise.resolve(E):ce(w,j)).catch(b=>Xt(b)?Xt(b,2)?b:Me(b):K(b,w,j)).then(b=>{if(b){if(Xt(b,2))return X(ge({replace:m},k(b.to),{state:typeof b.to=="object"?ge({},be,b.to.state):be,force:p}),F||w)}else b=S(w,j,!0,m,be);return B(w,j,b),b})}function xe(C,F){const L=O(C,F);return L?Promise.reject(L):Promise.resolve()}function Q(C){const F=Is.values().next().value;return F&&typeof F.runWithContext=="function"?F.runWithContext(C):C()}function ce(C,F){let L;const[j,be,p]=wS(C,F);L=Ha(j.reverse(),"beforeRouteLeave",C,F);for(const _ of j)_.leaveGuards.forEach(w=>{L.push(Pn(w,C,F))});const m=xe.bind(null,C,F);return L.push(m),_t(L).then(()=>{L=[];for(const _ of i.list())L.push(Pn(_,C,F));return L.push(m),_t(L)}).then(()=>{L=Ha(be,"beforeRouteUpdate",C,F);for(const _ of be)_.updateGuards.forEach(w=>{L.push(Pn(w,C,F))});return L.push(m),_t(L)}).then(()=>{L=[];for(const _ of p)if(_.beforeEnter)if(Mt(_.beforeEnter))for(const w of _.beforeEnter)L.push(Pn(w,C,F));else L.push(Pn(_.beforeEnter,C,F));return L.push(m),_t(L)}).then(()=>(C.matched.forEach(_=>_.enterCallbacks={}),L=Ha(p,"beforeRouteEnter",C,F,Q),L.push(m),_t(L))).then(()=>{L=[];for(const _ of o.list())L.push(Pn(_,C,F));return L.push(m),_t(L)}).catch(_=>Xt(_,8)?_:Promise.reject(_))}function B(C,F,L){a.list().forEach(j=>Q(()=>j(C,F,L)))}function S(C,F,L,j,be){const p=O(C,F);if(p)return p;const m=F===xn,_=As?history.state:{};L&&(j||m?r.replace(C.fullPath,ge({scroll:m&&_&&_.scroll},be)):r.push(C.fullPath,be)),l.value=C,et(C,F,L,m),Me()}let ne;function H(){ne||(ne=r.listen((C,F,L)=>{if(!Ei.listening)return;const j=R(C),be=M(j);if(be){X(ge(be,{replace:!0,force:!0}),j).catch(Ur);return}c=j;const p=l.value;As&&$T(oh(p.fullPath,L.delta),aa()),ce(j,p).catch(m=>Xt(m,12)?m:Xt(m,2)?(X(ge(k(m.to),{force:!0}),j).then(_=>{Xt(_,20)&&!L.delta&&L.type===oi.pop&&r.go(-1,!1)}).catch(Ur),Promise.reject()):(L.delta&&r.go(-L.delta,!1),K(m,j,p))).then(m=>{m=m||S(j,p,!1),m&&(L.delta&&!Xt(m,8)?r.go(-L.delta,!1):L.type===oi.pop&&Xt(m,20)&&r.go(-1,!1)),B(j,p,m)}).catch(Ur)}))}let re=_r(),se=_r(),Z;function K(C,F,L){Me(C);const j=se.list();return j.length?j.forEach(be=>be(C,F,L)):console.error(C),Promise.reject(C)}function Pe(){return Z&&l.value!==xn?Promise.resolve():new Promise((C,F)=>{re.add([C,F])})}function Me(C){return Z||(Z=!C,H(),re.list().forEach(([F,L])=>C?L(C):F()),re.reset()),C}function et(C,F,L,j){const{scrollBehavior:be}=t;if(!As||!be)return Promise.resolve();const p=!L&&zT(oh(C.fullPath,0))||(j||!L)&&history.state&&history.state.scroll||null;return Dn().then(()=>be(C,F,p)).then(m=>m&&WT(m)).catch(m=>K(m,C,F))}const tt=C=>r.go(C);let Es;const Is=new Set,Ei={currentRoute:l,listening:!0,addRoute:f,removeRoute:y,clearRoutes:e.clearRoutes,hasRoute:x,getRoutes:v,resolve:R,options:t,push:A,replace:V,go:tt,back:()=>tt(-1),forward:()=>tt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:se.add,isReady:Pe,install(C){const F=this;C.component("RouterLink",gS),C.component("RouterView",vS),C.config.globalProperties.$router=F,Object.defineProperty(C.config.globalProperties,"$route",{enumerable:!0,get:()=>os(l)}),As&&!Es&&l.value===xn&&(Es=!0,A(r.location).catch(be=>{}));const L={};for(const be in xn)Object.defineProperty(L,be,{get:()=>l.value[be],enumerable:!0});C.provide(la,F),C.provide(Yc,zh(L)),C.provide(Tl,l);const j=C.unmount;Is.add(C),C.unmount=function(){Is.delete(C),Is.size<1&&(c=xn,ne&&ne(),ne=null,l.value=xn,Es=!1,Z=!1),j()}}};function _t(C){return C.reduce((F,L)=>F.then(()=>Q(L)),Promise.resolve())}return Ei}function wS(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(c=>Xs(c,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Xs(c,l))||r.push(l))}return[n,s,r]}function wm(){return Ct(la)}function Cm(t){return Ct(Yc)}const Ci=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},CS={class:"w-full backdrop-blur-xl bg-white/80 dark:bg-gray-900/80 border-b border-white/20 dark:border-gray-700/30 shadow-lg relative z-50"},ES={class:"relative max-w-7xl mx-auto px-6 py-4"},IS={class:"flex items-center justify-between"},TS={class:"flex items-center space-x-4"},SS={class:"hidden md:flex items-center space-x-1 bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm rounded-xl p-1 border border-white/30"},kS={class:"flex items-center space-x-4"},xS={class:"w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm shadow-lg group-hover:shadow-xl"},RS={class:"hidden sm:block text-left"},AS={class:"text-sm font-semibold text-gray-800 dark:text-white truncate max-w-32"},PS={class:"absolute right-0 mt-2 w-80 rounded-2xl backdrop-blur-2xl bg-white/90 dark:bg-gray-800/90 shadow-2xl border border-white/30 dark:border-gray-700/30 py-2 z-50"},NS={class:"px-4 py-3 border-b border-gray-200/50 dark:border-gray-700/50"},OS={class:"flex items-center space-x-3"},MS={class:"w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold shadow-lg"},DS={class:"font-semibold text-gray-900 dark:text-white"},LS={class:"text-sm text-gray-500 dark:text-gray-400"},US={class:"py-2"},FS=["disabled"],BS={key:0,class:"w-5 h-5 group-hover:rotate-12 transition-transform duration-300",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},HS={key:1,class:"w-5 h-5 animate-spin",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},VS={key:1,class:"flex items-center space-x-3"},jS={class:"md:hidden mt-4 p-4 rounded-2xl backdrop-blur-2xl bg-white/80 dark:bg-gray-800/80 border border-white/30"},WS={class:"space-y-2"},$S={class:"fixed top-20 right-6 z-50"},zS={key:0,class:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},GS={key:1,class:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},KS={class:"font-medium"},qS={__name:"Navbar",setup(t){const e=Bf(),n=wm();Cm();const s=fe(!1),r=fe(!1),i=fe(!1),o=fe(!1),a=fe(!1),l=fe(""),c=fe("success"),u=fe(null),d=ke(()=>!!e.state.user),h=ke(()=>e.state.user?.displayName||e.state.user?.email||"User"),f=ke(()=>e.state.user?.displayName?e.state.user.displayName.split(" ").map(V=>V[0]).join("").slice(0,2).toUpperCase():"U"),y=()=>{s.value=!s.value,r.value=!1},v=()=>{s.value=!1},x=()=>{r.value=!r.value,s.value=!1},R=()=>{r.value=!1},k=(V,M="success")=>{l.value=V,c.value=M,a.value=!0,setTimeout(()=>{a.value=!1},3e3)},O=async()=>{if(!i.value){i.value=!0;try{await Mp(dn),e.commit("clearUser"),v(),k("Successfully signed out!","success"),setTimeout(()=>{n.push("/")},1e3)}catch(V){console.error("Sign out failed:",V),k("Failed to sign out. Please try again.","error")}finally{i.value=!1}}},A=V=>{u.value&&!u.value.contains(V.target)&&(s.value=!1)};return tr(()=>{const V=localStorage.getItem("darkMode");(V==="true"||!V&&window.matchMedia("(prefers-color-scheme: dark)").matches)&&(o.value=!0,document.documentElement.classList.add("dark")),document.addEventListener("click",A)}),Vo(()=>{document.removeEventListener("click",A)}),(V,M)=>{const X=$r("router-link");return z(),q("header",CS,[M[17]||(M[17]=g("div",{class:"absolute inset-0 bg-gradient-to-r from-blue-500/5 via-indigo-500/5 to-purple-500/5 opacity-60"},null,-1)),g("div",ES,[g("div",IS,[g("div",TS,[de(X,{to:"/",class:"flex items-center space-x-3 group"},{default:Ue(()=>[...M[0]||(M[0]=[g("div",{class:"w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg group-hover:shadow-xl transform group-hover:scale-110 transition-all duration-300"},[g("svg",{class:"w-6 h-6 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"})])],-1),g("div",null,[g("h1",{class:"font-black text-2xl bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent"}," ConnectCircle "),g("p",{class:"text-xs text-gray-500 dark:text-gray-400 -mt-1"},"Stay Connected")],-1)])]),_:1})]),g("nav",SS,[de(X,{to:"/",class:Re(["px-6 py-2 rounded-lg text-sm font-semibold transition-all duration-300 flex items-center space-x-2",V.$route.path==="/"?"bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg":"text-gray-600 dark:text-gray-300 hover:bg-white/50 dark:hover:bg-gray-700/50"])},{default:Ue(()=>[...M[1]||(M[1]=[g("svg",{class:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"})],-1),g("span",null,"Chat",-1)])]),_:1},8,["class"]),de(X,{to:"/profile",class:Re(["px-6 py-2 rounded-lg text-sm font-semibold transition-all duration-300 flex items-center space-x-2",V.$route.path==="/profile"?"bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg":"text-gray-600 dark:text-gray-300 hover:bg-white/50 dark:hover:bg-gray-700/50"])},{default:Ue(()=>[...M[2]||(M[2]=[g("svg",{class:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})],-1),g("span",null,"Profile",-1)])]),_:1},8,["class"])]),g("div",kS,[d.value?(z(),q("div",{key:0,class:"relative",ref_key:"userMenuRef",ref:u},[g("button",{onClick:y,class:"flex items-center space-x-3 p-2 rounded-xl bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm border border-white/30 hover:bg-white/40 dark:hover:bg-gray-700/40 transition-all duration-300 group"},[g("div",xS,ie(f.value),1),g("div",RS,[g("p",AS,ie(h.value),1),M[3]||(M[3]=g("p",{class:"text-xs text-gray-500 dark:text-gray-400"},"Online",-1))]),M[4]||(M[4]=g("svg",{class:"w-4 h-4 text-gray-600 dark:text-gray-400 group-hover:rotate-180 transition-transform duration-300",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"})],-1))]),de(an,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-150","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:Ue(()=>[it(g("div",PS,[g("div",NS,[g("div",OS,[g("div",MS,ie(f.value),1),g("div",null,[g("p",DS,ie(h.value),1),g("p",LS,ie(os(e).state.user?.email),1)])])]),g("div",US,[de(X,{to:"/profile",class:"flex items-center space-x-3 px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-white/50 dark:hover:bg-gray-700/50 transition-colors duration-200",onClick:v},{default:Ue(()=>[...M[5]||(M[5]=[g("svg",{class:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})],-1),g("span",null,"View Profile",-1)])]),_:1}),de(X,{to:"/settings",class:"flex items-center space-x-3 px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-white/50 dark:hover:bg-gray-700/50 transition-colors duration-200",onClick:v},{default:Ue(()=>[...M[6]||(M[6]=[g("svg",{class:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"}),g("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"})],-1),g("span",null,"Settings",-1)])]),_:1}),M[9]||(M[9]=g("div",{class:"border-t border-gray-200/50 dark:border-gray-700/50 my-2"},null,-1)),g("button",{onClick:O,class:"w-full flex items-center space-x-3 px-4 py-3 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors duration-200 group",disabled:i.value},[i.value?(z(),q("svg",HS,[...M[8]||(M[8]=[g("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"},null,-1)])])):(z(),q("svg",BS,[...M[7]||(M[7]=[g("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"},null,-1)])])),g("span",null,ie(i.value?"Signing Out...":"Sign Out"),1)],8,FS)])],512),[[vt,s.value]])]),_:1})],512)):(z(),q("div",VS,[de(X,{to:"/login",class:"group px-6 py-2 text-sm font-semibold text-gray-700 dark:text-gray-300 bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm border border-white/30 rounded-xl hover:bg-white/40 dark:hover:bg-gray-700/40 transition-all duration-300 flex items-center space-x-2"},{default:Ue(()=>[...M[10]||(M[10]=[g("svg",{class:"w-4 h-4 group-hover:rotate-12 transition-transform duration-300",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"})],-1),g("span",null,"Sign In",-1)])]),_:1}),de(X,{to:"/register",class:"group relative px-6 py-2 text-sm font-bold text-white bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2 overflow-hidden"},{default:Ue(()=>[...M[11]||(M[11]=[g("div",{class:"absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"},null,-1),g("svg",{class:"relative z-10 w-4 h-4 group-hover:rotate-12 transition-transform duration-300",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"})],-1),g("span",{class:"relative z-10"},"Create Account",-1)])]),_:1})])),g("button",{onClick:x,class:"md:hidden p-2 rounded-xl bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm border border-white/30 hover:bg-white/40 dark:hover:bg-gray-700/40 transition-all duration-300"},[...M[12]||(M[12]=[g("svg",{class:"w-6 h-6 text-gray-600 dark:text-gray-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"})],-1)])])])]),de(an,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-150","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:Ue(()=>[it(g("div",jS,[g("nav",WS,[de(X,{to:"/home",class:"flex items-center space-x-2 p-3 rounded-xl text-sm font-semibold text-gray-700 dark:text-gray-300 hover:bg-white/50 dark:hover:bg-gray-700/50 transition-colors duration-200",onClick:R},{default:Ue(()=>[...M[13]||(M[13]=[g("svg",{class:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"})],-1),g("span",null,"Chat",-1)])]),_:1}),de(X,{to:"/profile",class:"flex items-center space-x-2 p-3 rounded-xl text-sm font-semibold text-gray-700 dark:text-gray-300 hover:bg-white/50 dark:hover:bg-gray-700/50 transition-colors duration-200",onClick:R},{default:Ue(()=>[...M[14]||(M[14]=[g("svg",{class:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})],-1),g("span",null,"Profile",-1)])]),_:1})])],512),[[vt,r.value]])]),_:1})]),de(an,{"enter-active-class":"transition ease-out duration-300","enter-from-class":"transform translate-y-[-100%] opacity-0","enter-to-class":"transform translate-y-0 opacity-100","leave-active-class":"transition ease-in duration-200","leave-from-class":"transform translate-y-0 opacity-100","leave-to-class":"transform translate-y-[-100%] opacity-0"},{default:Ue(()=>[it(g("div",$S,[g("div",{class:Re(["p-4 rounded-2xl backdrop-blur-2xl shadow-2xl border flex items-center space-x-3",c.value==="success"?"bg-green-50/90 border-green-200 text-green-800":"bg-red-50/90 border-red-200 text-red-800"])},[c.value==="success"?(z(),q("svg",zS,[...M[15]||(M[15]=[g("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"},null,-1)])])):(z(),q("svg",GS,[...M[16]||(M[16]=[g("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,-1)])])),g("span",KS,ie(l.value),1)],2)],512),[[vt,a.value]])]),_:1})])}}},YS=Ci(qS,[["__scopeId","data-v-f1eb913a"]]),QS={__name:"App",setup(t){const e=Cm(),n=ke(()=>e.path==="/");return(s,r)=>{const i=$r("router-view");return z(),q("div",null,[n.value?De("",!0):(z(),xf(YS,{key:0})),g("main",null,[de(i)])])}}},JS="modulepreload",XS=function(t){return"/"+t},wh={},yr=function(e,n,s){let r=Promise.resolve();if(n&&n.length>0){let l=function(c){return Promise.all(c.map(u=>Promise.resolve(u).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=o?.nonce||o?.getAttribute("nonce");r=l(n.map(c=>{if(c=XS(c),c in wh)return;wh[c]=!0;const u=c.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${d}`))return;const h=document.createElement("link");if(h.rel=u?"stylesheet":JS,u||(h.as="script"),h.crossOrigin="",h.href=c,a&&h.setAttribute("nonce",a),document.head.appendChild(h),u)return new Promise((f,y)=>{h.addEventListener("load",f),h.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${c}`)))})}))}function i(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&i(a.reason);return e().catch(i)})},ZS={name:"ResponsiveSidebar",props:{currentChatId:String},emits:["select-chat"],setup(t,{emit:e}){const n=Bf(),s=wm(),r=fe([]),i=fe([]),o=fe(""),a=fe(new Set),l=fe({}),c=fe(!1),u=fe(null),d=ke(()=>n.state.user),h=ke(()=>d.value?.displayName?d.value.displayName.split(" ").map(B=>B[0]).join("").slice(0,2).toUpperCase():"U"),f=ke(()=>a.value.size),y=ke(()=>{if(!o.value)return r.value;const B=o.value.toLowerCase();return r.value.filter(S=>S.name?.toLowerCase().includes(B)||S.description?.toLowerCase().includes(B))}),v=ke(()=>{const B=i.value.filter(ne=>ne?.id&&d.value?.uid&&ne.id!==d.value.uid);if(!o.value)return B;const S=o.value.toLowerCase();return B.filter(ne=>ne.displayName?.toLowerCase().includes(S)||ne.email?.toLowerCase().includes(S))}),x=B=>B?B.split(" ").map(S=>S[0]).join("").slice(0,2).toUpperCase():"G",R=B=>B?.displayName?B.displayName.split(" ").map(S=>S[0]).join("").slice(0,2).toUpperCase():"U",k=B=>{if(!d.value?.uid||!B)return null;const S=[d.value.uid,B].sort();return`${S[0]}_${S[1]}`},O=B=>a.value.has(B),A=B=>l.value[`group_${B}`]||0,V=B=>{const S=k(B);return l.value[`private_${S}`]||0},M=B=>{if(!B)return"";const S=new Date(B);return new Date-S<1440*60*1e3?S.toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit",hour12:!0}):S.toLocaleDateString("en-US",{month:"short",day:"numeric"})},X=(B,S)=>{const ne=S?{...B,type:"private",participantId:B.id,id:k(B.id)}:{...B,type:"group",id:B.id};e("select-chat",ne)},xe=async()=>{try{await Mp(dn),s.push("/")}catch(B){console.error("Logout failed:",B)}},Q=()=>{c.value=!c.value,clearTimeout(u.value)},ce=()=>{c.value&&(c.value=!1,clearTimeout(u.value),u.value=setTimeout(()=>{c.value=!0},5e3))};return tr(()=>{const B=ft(pt,"groups");Ns(B,re=>{const se=re.val()||{};r.value=Object.entries(se).map(([Z,K])=>({id:Z,...K}))});const S=ft(pt,"users");Ns(S,re=>{const se=re.val()||{};i.value=Object.entries(se).map(([Z,K])=>({id:Z,displayName:K.displayName||"Unknown",email:K.email||"No email",...K}))});const ne=ft(pt,"presence");Ns(ne,re=>{const se=re.val()||{};a.value=new Set(Object.keys(se).filter(Z=>se[Z]?.online))});const H=ft(pt,"unreadCounts");Ns(H,re=>{l.value=re.val()||{}})}),Vo(()=>{clearTimeout(u.value)}),{groups:r,users:i,searchQuery:o,currentUser:d,currentUserInitials:h,onlineUsersCount:f,filteredGroups:y,filteredUsers:v,collapsed:c,getGroupInitials:x,getUserInitials:R,generateChatId:k,getUserOnlineStatus:O,getGroupUnreadCount:A,getPrivateUnreadCount:V,formatTime:M,selectChat:X,logout:xe,toggleCollapse:Q,expandTemporarily:ce}}},ek={class:"flex-shrink-0 p-4 border-b border-gray-200 dark:border-gray-700"},tk={class:"flex items-center justify-between"},nk={class:"flex items-center gap-3"},sk={class:"transition-opacity duration-200"},rk={class:"flex-shrink-0 p-4"},ik={class:"relative"},ok={class:"flex-shrink-0 p-2 flex justify-center"},ak={class:"flex-shrink-0 px-4 py-2"},lk={class:"flex items-center gap-2 text-xs text-green-600 dark:text-green-400"},ck={class:"font-medium"},uk={class:"flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 scrollbar-track-transparent"},dk={class:"px-2 py-3"},hk={class:"flex items-center justify-between px-3 mb-3"},fk={class:"px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded-full font-medium"},pk={class:"space-y-1"},gk=["onClick"],mk={class:"flex-1 min-w-0"},_k={class:"flex items-center justify-between mb-1"},yk={class:"text-sm font-medium text-gray-900 dark:text-white truncate"},vk={class:"flex items-center gap-2"},bk={key:0,class:"text-xs text-gray-400"},wk={key:1,class:"px-1.5 py-0.5 text-xs bg-red-500 text-white rounded-full min-w-5 text-center"},Ck={key:0,class:"text-xs text-gray-500 dark:text-gray-400 truncate"},Ek={class:"font-medium"},Ik={key:1,class:"text-xs text-gray-400 dark:text-gray-500 truncate"},Tk={class:"px-2 py-3 border-t border-gray-100 dark:border-gray-700"},Sk={class:"flex items-center justify-between px-3 mb-3"},kk={class:"px-2 py-1 text-xs bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 rounded-full font-medium"},xk={class:"space-y-1"},Rk=["onClick"],Ak={class:"relative flex-shrink-0"},Pk={class:"flex-1 min-w-0"},Nk={class:"flex items-center justify-between mb-1"},Ok={class:"flex items-center gap-2"},Mk={class:"text-sm font-medium text-gray-900 dark:text-white truncate"},Dk={key:0,class:"w-2 h-2 bg-green-500 rounded-full"},Lk={class:"flex items-center gap-2"},Uk={key:0,class:"text-xs text-gray-400"},Fk={key:1,class:"px-1.5 py-0.5 text-xs bg-red-500 text-white rounded-full min-w-5 text-center"},Bk={key:0,class:"text-xs text-gray-500 dark:text-gray-400 truncate"},Hk={key:1,class:"text-xs text-gray-400 dark:text-gray-500 truncate"},Vk={class:"flex-shrink-0 p-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/50"},jk={class:"relative"},Wk={class:"flex-1 min-w-0"},$k={class:"text-sm font-medium text-gray-900 dark:text-white truncate"},zk={class:"text-xs text-gray-500 dark:text-gray-400 truncate"},Gk=["title"];function Kk(t,e,n,s,r,i){return z(),q("div",null,[g("div",{class:Re(["relative h-full flex flex-col bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transition-all duration-300 ease-in-out z-50","md:flex",s.collapsed?"md:w-16":"md:w-72","w-80 md:w-auto"])},[g("div",ek,[g("div",tk,[g("div",nk,[g("div",{class:Re(["rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold shadow-lg",s.collapsed?"w-8 h-8 text-sm":"w-10 h-10"])},ie((s.collapsed,"CC")),3),it(g("div",sk,[...e[3]||(e[3]=[g("h4",{class:"font-bold text-gray-900 dark:text-white text-sm"},"ConnectCircle",-1),g("p",{class:"text-xs text-gray-500 dark:text-gray-400"},"Chats & Contacts",-1)])],512),[[vt,!s.collapsed]])])])]),it(g("div",rk,[g("div",ik,[e[4]||(e[4]=g("div",{class:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"},[g("svg",{class:"w-4 h-4 text-gray-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})])],-1)),it(g("input",{"onUpdate:modelValue":e[0]||(e[0]=o=>s.searchQuery=o),type:"text",placeholder:"Search conversations...",class:"w-full pl-10 pr-4 py-2.5 text-sm rounded-xl bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"},null,512),[[no,s.searchQuery]])])],512),[[vt,!s.collapsed]]),it(g("div",ok,[g("button",{onClick:e[1]||(e[1]=(...o)=>s.expandTemporarily&&s.expandTemporarily(...o)),class:"w-10 h-10 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center justify-center transition-colors",title:"Search"},[...e[5]||(e[5]=[g("svg",{class:"w-4 h-4 text-gray-600 dark:text-gray-300",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})],-1)])])],512),[[vt,s.collapsed]]),it(g("div",ak,[g("div",lk,[e[6]||(e[6]=g("div",{class:"w-2 h-2 bg-green-500 rounded-full animate-pulse"},null,-1)),g("span",ck,ie(s.onlineUsersCount)+" users online",1)])],512),[[vt,!s.collapsed]]),g("div",uk,[g("div",dk,[it(g("div",hk,[e[7]||(e[7]=g("h3",{class:"text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide flex items-center gap-2"},[g("svg",{class:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"})]),Ui(" Groups ")],-1)),g("span",fk,ie(s.filteredGroups.length),1)],512),[[vt,!s.collapsed]]),g("div",pk,[(z(!0),q(Je,null,Qi(s.filteredGroups,o=>(z(),q("div",{key:o?.id||o?.name,onClick:a=>s.selectChat(o,!1),class:Re(["flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all duration-200 group",s.collapsed?"justify-center":"",n.currentChatId===o.id?"bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500":"hover:bg-gray-50 dark:hover:bg-gray-700/50"])},[g("div",{class:Re(["flex-shrink-0 rounded-xl flex items-center justify-center text-white font-bold shadow-sm",s.collapsed?"w-8 h-8 text-sm":"w-10 h-10",n.currentChatId===o.id?"bg-gradient-to-br from-blue-500 to-indigo-600":"bg-gradient-to-br from-gray-400 to-gray-600"])},ie(s.getGroupInitials(o.name)),3),it(g("div",mk,[g("div",_k,[g("p",yk,ie(o.name),1),g("div",vk,[o.lastMessage?(z(),q("span",bk,ie(s.formatTime(o.lastMessage.timestamp)),1)):De("",!0),s.getGroupUnreadCount(o.id)?(z(),q("span",wk,ie(s.getGroupUnreadCount(o.id)),1)):De("",!0)])]),o.lastMessage?(z(),q("p",Ck,[g("span",Ek,ie(o.lastMessage.senderName)+":",1),Ui(" "+ie(o.lastMessage.text),1)])):(z(),q("p",Ik,ie(o.description||"No messages yet"),1))],512),[[vt,!s.collapsed]])],10,gk))),128))])]),g("div",Tk,[it(g("div",Sk,[e[8]||(e[8]=g("h3",{class:"text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide flex items-center gap-2"},[g("svg",{class:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})]),Ui(" Private ")],-1)),g("span",kk,ie(s.filteredUsers.length),1)],512),[[vt,!s.collapsed]]),g("div",xk,[(z(!0),q(Je,null,Qi(s.filteredUsers,o=>(z(),q("div",{key:o?.id||o?.email,onClick:a=>s.selectChat(o,!0),class:Re(["flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all duration-200 group",s.collapsed?"justify-center":"",n.currentChatId===s.generateChatId(o.id)?"bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500":"hover:bg-gray-50 dark:hover:bg-gray-700/50"])},[g("div",Ak,[g("div",{class:Re(["rounded-xl flex items-center justify-center text-white font-bold shadow-sm",s.collapsed?"w-8 h-8 text-sm":"w-10 h-10",n.currentChatId===s.generateChatId(o.id)?"bg-gradient-to-br from-purple-500 to-pink-600":s.getUserOnlineStatus(o.id)?"bg-gradient-to-br from-green-500 to-emerald-600":"bg-gradient-to-br from-gray-400 to-gray-600"])},ie(s.getUserInitials(o)),3),s.getUserOnlineStatus(o.id)?(z(),q("div",{key:0,class:Re(["absolute bg-green-500 rounded-full border-2 border-white dark:border-gray-800",s.collapsed?"-bottom-0.5 -right-0.5 w-2.5 h-2.5":"-bottom-1 -right-1 w-3 h-3"])},null,2)):De("",!0)]),it(g("div",Pk,[g("div",Nk,[g("div",Ok,[g("p",Mk,ie(o.displayName||"Unknown User"),1),s.getUserOnlineStatus(o.id)?(z(),q("span",Dk)):De("",!0)]),g("div",Lk,[o.lastMessage?(z(),q("span",Uk,ie(s.formatTime(o.lastMessage.timestamp)),1)):De("",!0),s.getPrivateUnreadCount(o.id)?(z(),q("span",Fk,ie(s.getPrivateUnreadCount(o.id)),1)):De("",!0)])]),o.lastMessage?(z(),q("p",Bk,ie(o.lastMessage.text),1)):(z(),q("p",Hk,ie(o.email||"No messages yet"),1))],512),[[vt,!s.collapsed]])],10,Rk))),128))])])]),g("div",Vk,[g("div",{class:Re(["flex items-center gap-3",s.collapsed?"justify-center":""])},[g("div",jk,[g("div",{class:Re(["bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold shadow-sm",s.collapsed?"w-8 h-8 text-sm":"w-10 h-10"])},ie(s.currentUserInitials),3),g("div",{class:Re(["absolute bg-green-500 rounded-full border-2 border-white dark:border-gray-800",s.collapsed?"-bottom-0.5 -right-0.5 w-2.5 h-2.5":"-bottom-1 -right-1 w-3 h-3"])},null,2)]),it(g("div",Wk,[g("p",$k,ie(s.currentUser?.displayName||"Guest User"),1),g("p",zk,ie(s.getUserOnlineStatus(s.currentUser?.uid)?"Online":"Offline"),1)],512),[[vt,!s.collapsed]]),g("button",{onClick:e[2]||(e[2]=(...o)=>s.logout&&s.logout(...o)),class:Re(["flex items-center justify-center rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors group",(s.collapsed,"w-8 h-8")]),title:(s.collapsed,"Sign out")},[...e[9]||(e[9]=[g("svg",{class:"w-4 h-4 text-gray-500 dark:text-gray-400 group-hover:text-red-500 transition-colors",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"})],-1)])],10,Gk)],2)])],2)])}const qk=Ci(ZS,[["render",Kk],["__scopeId","data-v-ecdfee4b"]]),Yk={name:"MessageList",props:{messages:{type:Array,required:!0},currentUser:{type:Object,required:!0},typingUsers:{type:Array,default:()=>[]}},emits:["reply-message","react-message","message-options"],setup(t){const e=fe(null),n=ke(()=>{const o={};return t.messages.forEach(a=>{if(!a.timestamp)return;const c=new Date(a.timestamp).toDateString();o[c]||(o[c]=[]),o[c].push(a)}),o}),s=()=>{Dn(()=>{const o=e.value;o&&(o.scrollTop=o.scrollHeight)})};hn(()=>t.messages.length,(o,a)=>{o!==a&&s()});const r=ke(()=>t.typingUsers.length>0),i=ke(()=>t.typingUsers[0]||{name:"Someone"});return{groupedMessages:n,someoneIsTyping:r,typingUser:i,scrollContainer:e}},methods:{formatTime(t){if(!t)return"";const e=new Date(t);if(isNaN(e.getTime()))return"";const s=(new Date-e)/(1e3*60*60);return s<24?e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",hour12:!0}):s<48?`Yesterday ${e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",hour12:!0})}`:e.toLocaleDateString([],{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0})},formatDateSeparator(t){const e=new Date(t),n=new Date,s=new Date(n);return s.setDate(s.getDate()-1),e.toDateString()===n.toDateString()?"Today":e.toDateString()===s.toDateString()?"Yesterday":Math.floor((n-e)/864e5)<7?e.toLocaleDateString([],{weekday:"long"}):e.toLocaleDateString([],{year:"numeric",month:"long",day:"numeric"})},getInitials(t){return t?t.split(" ").map(e=>e[0]).join("").slice(0,2).toUpperCase():"U"},shouldShowAvatar(t,e){if(e===0)return!0;const n=t[e],s=t[e-1];return n.senderId!==s.senderId},shouldShowSenderName(t,e){return this.shouldShowAvatar(t,e)},shouldShowTail(t,e){if(e===t.length-1)return!0;const n=t[e],s=t[e+1];return n.senderId!==s.senderId},getMessageSpacing(t,e){const n=t[e],s=t[e-1],r=t[e+1];let i="";return s&&n.senderId===s.senderId&&(i+=" mt-1"),r&&n.senderId===r.senderId&&(i+=" mb-1"),n.senderId===this.currentUser?.uid?(s&&n.senderId===s.senderId&&(i+=" rounded-tr-md"),r&&n.senderId===r.senderId&&(i+=" rounded-br-md")):(s&&n.senderId===s.senderId&&(i+=" rounded-tl-md"),r&&n.senderId===r.senderId&&(i+=" rounded-bl-md")),i}}},Qk={ref:"scrollContainer",class:"space-y-4 p-4 overflow-y-auto h-full custom-scrollbar"},Jk={class:"flex items-center justify-center my-6"},Xk={class:"mx-4 px-4 py-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-full border border-white/30 dark:border-gray-600/30 shadow-sm"},Zk={class:"text-xs font-semibold text-gray-600 dark:text-gray-400"},ex={class:"space-y-3"},tx={key:0,class:"flex-shrink-0 mr-3"},nx={class:"w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold shadow-lg"},sx={key:1,class:"flex-shrink-0 w-11 mr-0"},rx={key:0,class:"mb-1"},ix={class:"text-xs font-bold text-gray-700 dark:text-gray-300"},ox={class:"space-y-2"},ax={class:"text-sm leading-relaxed whitespace-pre-wrap break-words"},lx={key:0,class:"flex items-center space-x-1 ml-2"},cx={key:0,class:"w-4 h-4 text-blue-200",fill:"currentColor",viewBox:"0 0 20 20"},ux={key:1,class:"w-4 h-4 text-blue-200",fill:"currentColor",viewBox:"0 0 20 20"},dx={key:2,class:"w-4 h-4 text-blue-200 animate-pulse",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},hx=["onClick"],fx=["onClick"],px=["onClick"],gx={key:0,class:"text-center py-12"},mx={key:1,class:"flex justify-start"},_x={class:"flex items-center space-x-3"},yx={class:"w-8 h-8 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white text-xs font-bold shadow-lg"},vx={class:"px-4 py-3 bg-white/70 dark:bg-gray-800/70 rounded-2xl rounded-bl-md backdrop-blur-sm border border-white/30 dark:border-gray-600/30 shadow-lg"},bx={class:"flex items-center space-x-1"},wx={class:"text-sm text-gray-600 dark:text-gray-400"};function Cx(t,e,n,s,r,i){return z(),q("div",Qk,[(z(!0),q(Je,null,Qi(s.groupedMessages,(o,a)=>(z(),q(Je,{key:a},[g("div",Jk,[e[0]||(e[0]=g("div",{class:"flex-grow border-t border-gray-300/50 dark:border-gray-600/50"},null,-1)),g("div",Xk,[g("span",Zk,ie(i.formatDateSeparator(a)),1)]),e[1]||(e[1]=g("div",{class:"flex-grow border-t border-gray-300/50 dark:border-gray-600/50"},null,-1))]),g("div",ex,[(z(!0),q(Je,null,Qi(o,(l,c)=>(z(),q("div",{key:l.id,class:Re(["group relative",l.senderId===n.currentUser?.uid?"flex justify-end":"flex justify-start"])},[g("div",{class:Re(["relative max-w-25rem lg:max-w-lg xl:max-w-xl flex",l.senderId===n.currentUser?.uid?"flex-row-reverse":"flex-row"])},[l.senderId!==n.currentUser?.uid&&i.shouldShowAvatar(o,c)?(z(),q("div",tx,[g("div",nx,ie(i.getInitials(l.senderName)),1)])):l.senderId!==n.currentUser?.uid?(z(),q("div",sx)):De("",!0),g("div",{class:Re(["relative px-4 py-3 rounded-2xl backdrop-blur-sm border shadow-lg transform transition-all duration-300 hover:scale-105 group-hover:shadow-xl",l.senderId===n.currentUser?.uid?"bg-gradient-to-r from-blue-500 to-indigo-600 text-white border-blue-400/30 rounded-br-md":"bg-white/70 dark:bg-gray-800/70 text-gray-900 dark:text-white border-white/30 dark:border-gray-600/30 rounded-bl-md",i.getMessageSpacing(o,c)])},[l.senderId!==n.currentUser?.uid&&i.shouldShowSenderName(o,c)?(z(),q("div",rx,[g("p",ix,ie(l.senderName),1)])):De("",!0),g("div",ox,[g("p",ax,ie(l.text),1),g("div",{class:Re(["flex items-center justify-between text-xs",l.senderId===n.currentUser?.uid?"text-blue-100":"text-gray-500 dark:text-gray-400"])},[g("span",null,ie(i.formatTime(l.timestamp)),1),l.senderId===n.currentUser?.uid?(z(),q("div",lx,[l.status==="read"?(z(),q("svg",cx,[...e[2]||(e[2]=[g("path",{"fill-rule":"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z","clip-rule":"evenodd"},null,-1),g("path",{"fill-rule":"evenodd",d:"M19.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-1-1a1 1 0 111.414-1.414L18 6.414l1.293-1.121a1 1 0 011.414 0z","clip-rule":"evenodd"},null,-1)])])):l.status==="delivered"?(z(),q("svg",ux,[...e[3]||(e[3]=[g("path",{"fill-rule":"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z","clip-rule":"evenodd"},null,-1)])])):(z(),q("svg",dx,[...e[4]||(e[4]=[g("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1)])]))])):De("",!0)],2)]),i.shouldShowTail(o,c)?(z(),q("div",{key:1,class:Re(["absolute top-0 w-4 h-4",l.senderId===n.currentUser?.uid?"-right-2 bg-gradient-to-br from-blue-500 to-indigo-600 transform rotate-45":"-left-2 bg-white/70 dark:bg-gray-800/70 border-l border-t border-white/30 dark:border-gray-600/30 transform rotate-45"])},null,2)):De("",!0)],2)],2),g("div",{class:Re(["absolute top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex space-x-1",l.senderId===n.currentUser?.uid?"-left-12":"-right-12"])},[g("button",{onClick:u=>t.$emit("reply-message",l),class:"p-1.5 rounded-full bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-700 shadow-lg backdrop-blur-sm border border-white/30 dark:border-gray-600/30 transition-colors duration-200",title:"Reply"},[...e[5]||(e[5]=[g("svg",{class:"w-4 h-4 text-gray-600 dark:text-gray-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"})],-1)])],8,hx),g("button",{onClick:u=>t.$emit("react-message",l),class:"p-1.5 rounded-full bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-700 shadow-lg backdrop-blur-sm border border-white/30 dark:border-gray-600/30 transition-colors duration-200",title:"React"},[...e[6]||(e[6]=[g("svg",{class:"w-4 h-4 text-gray-600 dark:text-gray-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})],-1)])],8,fx),l.senderId===n.currentUser?.uid?(z(),q("button",{key:0,onClick:u=>t.$emit("message-options",l),class:"p-1.5 rounded-full bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-700 shadow-lg backdrop-blur-sm border border-white/30 dark:border-gray-600/30 transition-colors duration-200",title:"More options"},[...e[7]||(e[7]=[g("svg",{class:"w-4 h-4 text-gray-600 dark:text-gray-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"})],-1)])],8,px)):De("",!0)],2)],2))),128))])],64))),128)),n.messages.length===0?(z(),q("div",gx,[...e[8]||(e[8]=[Ja('<div class="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center" data-v-1105f1ee><svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-1105f1ee><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" data-v-1105f1ee></path></svg></div><h3 class="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2" data-v-1105f1ee> No messages yet </h3><p class="text-gray-500 dark:text-gray-400" data-v-1105f1ee> Start the conversation by sending a message! </p>',3)])])):De("",!0),s.someoneIsTyping?(z(),q("div",mx,[g("div",_x,[g("div",yx,ie(i.getInitials(s.typingUser.name)),1),g("div",vx,[g("div",bx,[g("span",wx,ie(s.typingUser.name)+" is typing",1),e[9]||(e[9]=g("div",{class:"flex space-x-1"},[g("div",{class:"w-1 h-1 bg-gray-400 rounded-full animate-bounce"}),g("div",{class:"w-1 h-1 bg-gray-400 rounded-full animate-bounce delay-100"}),g("div",{class:"w-1 h-1 bg-gray-400 rounded-full animate-bounce delay-200"})],-1))])])])])):De("",!0)],512)}const Ex=Ci(Yk,[["render",Cx],["__scopeId","data-v-1105f1ee"]]),Ix={name:"ChatWindow",components:{MessageList:Ex},props:{currentChat:{type:Object,default:null}},setup(t){const e=fe([]),n=fe(""),s=fe(null),r=fe(null),i=fe(dn.currentUser),o=fe(!1),a=fe(!1),l=fe([]),c=fe(!0),u=fe(null),d=fe(null),h=fe(!1);let f=null;const y=ke(()=>t.currentChat?(t.currentChat.isPrivate,t.currentChat.id):"group_general"),v=(H=t.currentChat)=>H?H.type==="private"||H.isPrivate===!0:!1,x=()=>t.currentChat?v()?t.currentChat.displayName||t.currentChat.participantName||t.currentChat.name||"Private Chat":t.currentChat.name||t.currentChat.displayName||"Group Chat":"General Chat",R=()=>x().split(" ").map(re=>re[0]).join("").slice(0,2).toUpperCase(),k=()=>t.currentChat?t.currentChat.isPrivate?"Online":`${e.value.length} messages`:"Select a chat to start messaging",O=()=>{h.value=!h.value},A=H=>{u.value&&(u.value(),u.value=null),e.value=[];try{console.log(`[attachQueryListener] Setting up listener for room: ${H}`);const re=ft(pt,`messages/${H}`),se=PI(re,AI("timestamp"),xI(100));Ns(se,Z=>{const K=Z.val();if(!K){e.value=[];return}const Pe=Object.entries(K).map(([Me,et])=>({id:Me,...et})).filter(Me=>Me.timestamp&&typeof Me.timestamp=="number").sort((Me,et)=>Me.timestamp-et.timestamp);e.value=Pe,Dn(Q)},{onlyOnce:!0}),u.value=SI(se,Z=>{const K={id:Z.key,...Z.val()};e.value.find(Pe=>Pe.id===K.id)||(e.value.push(K),e.value.sort((Pe,Me)=>Pe.timestamp-Me.timestamp),Dn(Q))}),V(H)}catch(re){console.error("[attachQueryListener] Setup failed:",re),c.value=!1}},V=H=>{d.value&&d.value();const re=ft(pt,`typing/${H}`);d.value=Ns(re,se=>{const Z=se.val()||{};l.value=Object.entries(Z).filter(([K,Pe])=>K!==i.value?.uid&&Pe.isTyping).map(([K,Pe])=>({id:K,name:Pe.name}))})},M=()=>{if(!i.value||!y.value)return;const H=ft(pt,`typing/${y.value}/${i.value.uid}`);Ws(H,{isTyping:!0,name:i.value.displayName||"Anonymous",timestamp:Date.now()}),f&&clearTimeout(f),f=setTimeout(()=>{Da(H),a.value=!1},2e3),a.value=!0},X=async()=>{const H=n.value?.trim();if(!H||o.value||H.length>2e3)return;const re=i.value||dn.currentUser;if(!re){console.error("No authenticated user");return}o.value=!0,h.value=!1,f&&clearTimeout(f);const se=ft(pt,`typing/${y.value}/${re.uid}`);Da(se),a.value=!1;try{const Z={text:H,senderId:re.uid,senderName:re.displayName||"Anonymous",timestamp:Date.now(),status:"sending"},K=y.value,Pe=ft(pt,`messages/${K}`);n.value="";const Me=TI(Pe);await Ws(Me,{...Z,status:"sent",serverTimestamp:La()}),console.log(`[sendMessage] Message sent to messages/${K}/${Me.key}`),Dn(Q)}catch(Z){console.error("[sendMessage] Failed:",Z),n.value=H,alert("Failed to send message. Please try again."),c.value=!1}finally{o.value=!1}},xe=H=>{H.key==="Enter"&&!H.shiftKey&&(H.preventDefault(),X())},Q=()=>{s.value&&(s.value.scrollTop=s.value.scrollHeight)},ce=()=>{r.value&&(r.value.style.height="auto",r.value.style.height=Math.min(r.value.scrollHeight,120)+"px")},B=H=>{n.value=`@${H.senderName} `,r.value?.focus()},S=H=>{console.log("React to message:",H)},ne=H=>{console.log("Message options:",H)};return hn(()=>y.value,(H,re)=>{H!==re&&(console.log(`[ChatWindow] Switching from ${re} to ${H}`),A(H))},{immediate:!0}),hn(n,()=>{Dn(ce)}),tr(()=>{i.value=dn.currentUser;const H=dn.onAuthStateChanged(se=>{i.value=se,se&&(c.value=!0)});if(i.value){const se=ft(pt,`presence/${i.value.uid}`);Ws(se,{online:!0,lastSeen:La()}),sm(se).set({online:!1,lastSeen:La()})}const re=se=>{h.value&&!se.target.closest(".mobile-actions")&&(h.value=!1)};document.addEventListener("click",re),Wr(()=>{H(),document.removeEventListener("click",re)})}),Wr(()=>{if(u.value&&u.value(),d.value&&d.value(),f&&clearTimeout(f),i.value&&y.value){const H=ft(pt,`typing/${y.value}/${i.value.uid}`);Da(H)}}),{messages:e,newMessage:n,currentUser:i,listWrap:s,messageInput:r,sending:o,isTyping:a,typingUsers:l,isConnected:c,showMobileActions:h,getChatName:x,getChatInitials:R,getChatStatus:k,toggleMobileActions:O,sendMessage:X,handleKeyDown:xe,handleTyping:M,handleReplyMessage:B,handleReactMessage:S,handleMessageOptions:ne,scrollToBottom:Q}}},Tx={class:"flex flex-col h-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg rounded-tl-3xl shadow-2xl border border-white/20 dark:border-gray-700/20 overflow-hidden"},Sx={class:"flex-shrink-0 p-4 sm:p-6 border-b border-white/20 dark:border-gray-600/30 bg-gradient-to-r from-white/30 to-white/10 dark:from-gray-800/30 dark:to-gray-700/10 backdrop-blur-sm"},kx={class:"flex items-center justify-between"},xx={class:"flex items-center space-x-3 sm:space-x-4 min-w-0"},Rx={class:"w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 flex items-center justify-center text-white font-bold shadow-lg ring-2 ring-white/20 dark:ring-gray-700/20"},Ax={class:"min-w-0 flex-1"},Px={class:"text-lg sm:text-xl font-bold text-gray-800 dark:text-white truncate"},Nx={class:"flex items-center space-x-2"},Ox={class:"text-xs sm:text-sm text-gray-600 dark:text-gray-400 truncate"},Mx={ref:"listWrap",class:"flex-1 overflow-y-auto px-2 sm:px-4 py-2 min-h-0"},Dx={key:0,class:"px-4 sm:px-6 py-2 text-xs text-gray-500 dark:text-gray-400"},Lx={class:"flex-shrink-0 border-t border-white/20 dark:border-gray-600/30 bg-gradient-to-r from-white/20 to-white/10 dark:from-gray-800/20 dark:to-gray-700/10 backdrop-blur-sm"},Ux={class:"p-4 sm:p-6"},Fx={class:"flex items-end space-x-2 sm:space-x-4"},Bx={class:"flex-1"},Hx={class:"relative"},Vx=["disabled"],jx=["disabled"],Wx={key:0,class:"w-4 h-4 sm:w-5 sm:h-5 animate-spin",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},$x={key:1,class:"w-4 h-4 sm:w-5 sm:h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},zx={key:0,class:"mt-2 text-xs text-right"},Gx={class:"sm:hidden"},Kx={key:0,class:"sm:hidden mt-3 p-3 rounded-2xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-white/30 dark:border-gray-600/30"},qx={key:0,class:"absolute top-20 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-red-500/90 backdrop-blur-sm text-white rounded-lg shadow-lg border border-red-400/20 z-50"};function Yx(t,e,n,s,r,i){const o=$r("MessageList");return z(),q("div",Tx,[g("div",Sx,[g("div",kx,[g("div",xx,[g("div",Rx,ie(s.getChatInitials()),1),g("div",Ax,[g("h2",Px,ie(s.getChatName()),1),g("div",Nx,[e[5]||(e[5]=g("div",{class:"w-2 h-2 bg-green-500 rounded-full animate-pulse flex-shrink-0"},null,-1)),g("p",Ox,ie(s.getChatStatus()),1)])])]),e[6]||(e[6]=Ja('<div class="flex items-center space-x-1 sm:space-x-2 flex-shrink-0" data-v-afb8c1b7><button class="p-2 rounded-xl hover:bg-white/20 dark:hover:bg-gray-700/30 transition-all duration-200 active:scale-95 touch-manipulation" data-v-afb8c1b7><svg class="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-afb8c1b7><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" data-v-afb8c1b7></path></svg></button><button class="p-2 rounded-xl hover:bg-white/20 dark:hover:bg-gray-700/30 transition-all duration-200 active:scale-95 touch-manipulation" data-v-afb8c1b7><svg class="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-afb8c1b7><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" data-v-afb8c1b7></path></svg></button></div>',1))])]),g("div",Mx,[de(o,{messages:s.messages,currentUser:s.currentUser,typingUsers:s.typingUsers,onReplyMessage:s.handleReplyMessage,onReactMessage:s.handleReactMessage,onMessageOptions:s.handleMessageOptions},null,8,["messages","currentUser","typingUsers","onReplyMessage","onReactMessage","onMessageOptions"])],512),de(an,{"enter-active-class":"transition-all duration-300 ease-out","enter-from-class":"opacity-0 transform translate-y-2","enter-to-class":"opacity-100 transform translate-y-0","leave-active-class":"transition-all duration-200 ease-in","leave-from-class":"opacity-100 transform translate-y-0","leave-to-class":"opacity-0 transform -translate-y-2"},{default:Ue(()=>[s.isTyping?(z(),q("div",Dx,[...e[7]||(e[7]=[g("div",{class:"flex items-center space-x-2"},[g("div",{class:"flex space-x-1"},[g("div",{class:"w-1 h-1 bg-blue-500 rounded-full animate-bounce"}),g("div",{class:"w-1 h-1 bg-blue-500 rounded-full animate-bounce delay-100"}),g("div",{class:"w-1 h-1 bg-blue-500 rounded-full animate-bounce delay-200"})]),g("span",null,"You are typing...")],-1)])])):De("",!0)]),_:1}),g("div",Lx,[g("div",Ux,[g("div",Fx,[g("div",Bx,[g("div",Hx,[it(g("textarea",{"onUpdate:modelValue":e[0]||(e[0]=a=>s.newMessage=a),onKeydown:e[1]||(e[1]=(...a)=>s.handleKeyDown&&s.handleKeyDown(...a)),onInput:e[2]||(e[2]=(...a)=>s.handleTyping&&s.handleTyping(...a)),disabled:s.sending,ref:"messageInput",rows:"1",class:"w-full px-3 sm:px-4 py-3 pr-12 sm:pr-16 rounded-2xl bg-white/80 dark:bg-gray-800/80 border border-white/40 dark:border-gray-600/40 backdrop-blur-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 disabled:opacity-50 resize-none shadow-lg",placeholder:"Type your message...",style:{"min-height":"48px","max-height":"120px"}},null,40,Vx),[[no,s.newMessage]]),g("button",{onClick:e[3]||(e[3]=(...a)=>s.sendMessage&&s.sendMessage(...a)),disabled:s.sending||!s.newMessage.trim(),class:"absolute right-2 bottom-2 p-2 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 hover:from-blue-600 hover:via-purple-600 hover:to-indigo-700 text-white disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 transition-all duration-300 touch-manipulation"},[s.sending?(z(),q("svg",Wx,[...e[8]||(e[8]=[g("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"},null,-1)])])):(z(),q("svg",$x,[...e[9]||(e[9]=[g("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 19l9 2-9-18-9 18 9-2zm0 0v-8"},null,-1)])]))],8,jx)]),de(an,{"enter-active-class":"transition-all duration-200 ease-out","enter-from-class":"opacity-0 transform translate-y-1","enter-to-class":"opacity-100 transform translate-y-0","leave-active-class":"transition-all duration-150 ease-in","leave-from-class":"opacity-100 transform translate-y-0","leave-to-class":"opacity-0 transform -translate-y-1"},{default:Ue(()=>[s.newMessage.length>0?(z(),q("div",zx,[g("span",{class:Re([s.newMessage.length>1800?"text-red-500 dark:text-red-400":s.newMessage.length>1500?"text-yellow-500 dark:text-yellow-400":"text-gray-500 dark:text-gray-400"])},ie(s.newMessage.length)+"/2000 ",3)])):De("",!0)]),_:1})]),e[12]||(e[12]=Ja('<div class="hidden sm:flex items-center space-x-2" data-v-afb8c1b7><button class="p-3 rounded-xl hover:bg-white/20 dark:hover:bg-gray-700/30 transition-all duration-200 active:scale-95 touch-manipulation group" data-v-afb8c1b7><svg class="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 dark:text-gray-400 group-hover:text-yellow-500 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-afb8c1b7><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" data-v-afb8c1b7></path></svg></button><button class="p-3 rounded-xl hover:bg-white/20 dark:hover:bg-gray-700/30 transition-all duration-200 active:scale-95 touch-manipulation group" data-v-afb8c1b7><svg class="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 dark:text-gray-400 group-hover:text-blue-500 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-afb8c1b7><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" data-v-afb8c1b7></path></svg></button></div>',1)),g("div",Gx,[g("button",{onClick:e[4]||(e[4]=(...a)=>s.toggleMobileActions&&s.toggleMobileActions(...a)),class:"p-3 rounded-xl hover:bg-white/20 dark:hover:bg-gray-700/30 transition-all duration-200 active:scale-95 touch-manipulation"},[...e[10]||(e[10]=[g("svg",{class:"w-5 h-5 text-gray-600 dark:text-gray-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 6v6m0 0v6m0-6h6m-6 0H6"})],-1)])])]),de(an,{"enter-active-class":"transition-all duration-300 ease-out","enter-from-class":"opacity-0 transform scale-95 translate-y-2","enter-to-class":"opacity-100 transform scale-100 translate-y-0","leave-active-class":"transition-all duration-200 ease-in","leave-from-class":"opacity-100 transform scale-100 translate-y-0","leave-to-class":"opacity-0 transform scale-95 translate-y-2"},{default:Ue(()=>[s.showMobileActions?(z(),q("div",Kx,[...e[11]||(e[11]=[g("div",{class:"flex items-center justify-around"},[g("button",{class:"p-3 rounded-xl hover:bg-white/20 dark:hover:bg-gray-700/30 transition-all duration-200 active:scale-95 touch-manipulation flex flex-col items-center space-y-1"},[g("svg",{class:"w-5 h-5 text-yellow-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})]),g("span",{class:"text-xs text-gray-600 dark:text-gray-400"},"Emoji")]),g("button",{class:"p-3 rounded-xl hover:bg-white/20 dark:hover:bg-gray-700/30 transition-all duration-200 active:scale-95 touch-manipulation flex flex-col items-center space-y-1"},[g("svg",{class:"w-5 h-5 text-blue-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"})]),g("span",{class:"text-xs text-gray-600 dark:text-gray-400"},"File")]),g("button",{class:"p-3 rounded-xl hover:bg-white/20 dark:hover:bg-gray-700/30 transition-all duration-200 active:scale-95 touch-manipulation flex flex-col items-center space-y-1"},[g("svg",{class:"w-5 h-5 text-purple-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"}),g("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 13a3 3 0 11-6 0 3 3 0 016 0z"})]),g("span",{class:"text-xs text-gray-600 dark:text-gray-400"},"Camera")])],-1)])])):De("",!0)]),_:1})])]),de(an,{"enter-active-class":"transition-all duration-500 ease-out","enter-from-class":"opacity-0 transform -translate-y-full scale-95","enter-to-class":"opacity-100 transform translate-y-0 scale-100","leave-active-class":"transition-all duration-300 ease-in","leave-from-class":"opacity-100 transform translate-y-0 scale-100","leave-to-class":"opacity-0 transform -translate-y-full scale-95"},{default:Ue(()=>[s.isConnected?De("",!0):(z(),q("div",qx,[...e[13]||(e[13]=[g("div",{class:"flex items-center space-x-2"},[g("svg",{class:"w-4 h-4 animate-spin",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"})]),g("span",{class:"text-sm font-medium"},"Reconnecting...")],-1)])]))]),_:1})])])}const Qx=Ci(Ix,[["render",Yx],["__scopeId","data-v-afb8c1b7"]]),Jx={components:{Sidebar:qk,ChatWindow:Qx},setup(){const t=fe(null),e=fe(!1),n=l=>{!l||!l.id||(t.value=l)},s=l=>{n(l),e.value=!1},r=()=>{e.value=!0},i=()=>{e.value=!1},o=()=>{window.innerWidth>=768&&(e.value=!1)},a=l=>{if(l.key==="Escape"&&(e.value=!1),l.ctrlKey&&l.key.toLowerCase()==="k"){l.preventDefault();const c=document.querySelector('input[placeholder*="search" i]');c&&c.focus()}};return tr(()=>{window.addEventListener("resize",o),window.addEventListener("keydown",a)}),Wr(()=>{window.removeEventListener("resize",o),window.removeEventListener("keydown",a)}),{currentChat:t,setCurrentChat:n,mobileOverlay:e,openMobileOverlay:r,closeMobileOverlay:i,onMobileSelectChat:s}}},Xx={class:"flex h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-950 relative overflow-hidden"},Zx={class:"hidden md:flex relative z-10 w-70 border-r border-white/20 backdrop-blur-xl bg-white/80 dark:bg-gray-900/80 shadow-2xl"},eR={class:"h-full flex flex-col"},tR={class:"flex-1 overflow-hidden"},nR={key:0,class:"fixed inset-y-0 left-0 z-50 w-80 bg-white/95 dark:bg-gray-900/95 shadow-2xl md:hidden"},sR={class:"p-4 border-b border-white/20 flex items-center justify-between"},rR={class:"h-[calc(100vh-64px)] overflow-auto"},iR={class:"flex-1 flex flex-col relative z-10"};function oR(t,e,n,s,r,i){const o=$r("Sidebar"),a=$r("ChatWindow");return z(),q("div",Xx,[e[5]||(e[5]=g("div",{class:"absolute inset-0 opacity-30"},[g("div",{class:"absolute top-20 left-20 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"}),g("div",{class:"absolute bottom-20 right-20 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl animate-pulse delay-700"}),g("div",{class:"absolute top-1/2 left-1/2 w-64 h-64 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"})],-1)),g("div",Zx,[g("div",eR,[g("div",tR,[de(o,{currentChatId:s.currentChat?.id,onSelectChat:s.setCurrentChat,class:"h-full"},null,8,["currentChatId","onSelectChat"])])])]),g("button",{class:"md:hidden fixed top-4 left-4 z-50 w-10 h-10 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center",onClick:e[0]||(e[0]=(...l)=>s.openMobileOverlay&&s.openMobileOverlay(...l)),"aria-label":"Open sidebar"},[...e[3]||(e[3]=[g("svg",{class:"w-5 h-5 text-gray-600 dark:text-gray-300",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"})],-1)])]),de(an,{name:"fade"},{default:Ue(()=>[s.mobileOverlay?(z(),q("div",{key:0,class:"fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden",onClick:e[1]||(e[1]=(...l)=>s.closeMobileOverlay&&s.closeMobileOverlay(...l))})):De("",!0)]),_:1}),de(an,{name:"slide-left"},{default:Ue(()=>[s.mobileOverlay?(z(),q("aside",nR,[g("div",sR,[g("button",{onClick:e[2]||(e[2]=(...l)=>s.closeMobileOverlay&&s.closeMobileOverlay(...l)),class:"p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"},[...e[4]||(e[4]=[g("svg",{class:"w-5 h-5 text-gray-600 dark:text-gray-300",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)])])]),g("div",rR,[de(o,{currentChatId:s.currentChat?.id,onSelectChat:s.onMobileSelectChat,class:"h-full"},null,8,["currentChatId","onSelectChat"])])])):De("",!0)]),_:1}),g("div",iR,[de(a,{class:"flex-1",currentChat:s.currentChat},null,8,["currentChat"])])])}const aR=Ci(Jx,[["render",oR],["__scopeId","data-v-7233e9da"]]),lR=[{path:"/home",name:"Home",component:aR},{path:"/",name:"Hero",component:()=>yr(()=>import("./Hero-DBryrSm8.js"),__vite__mapDeps([0,1]))},{path:"/profile",name:"Profile",component:()=>yr(()=>import("./Profile-CxNp0iO9.js"),__vite__mapDeps([2,3])),meta:{requiresAuth:!0}},{path:"/settings",name:"Settings",component:()=>yr(()=>import("./Settings-CCOXKwIT.js"),__vite__mapDeps([4,5])),meta:{requiresAuth:!0}},{path:"/login",name:"Login",component:()=>yr(()=>import("./Login-BKy6LQPh.js"),__vite__mapDeps([6,7]))},{path:"/register",name:"Register",component:()=>yr(()=>import("./Register-bLtX89UK.js"),[])}],Em=bS({history:YT(),routes:lR});function cR(){return new Promise(t=>{const e=Op(dn,n=>{e(),t(n)})})}Em.beforeEach(async(t,e,n)=>!t.meta?.requiresAuth||dn.currentUser||await cR()?n():n({name:"Login",query:{redirect:t.fullPath}}));const Va=Iv({state:{user:null},mutations:{setUser(t,e){t.user=e},clearUser(t){t.user=null}},getters:{isAuthenticated:t=>!!t.user}});let vr=null;Op(dn,async t=>{if(t){const e={uid:t.uid,displayName:t.displayName||t.email.split("@")[0],email:t.email,lastSeen:Date.now()};Va.commit("setUser",e),await Ws(ft(pt,`users/${t.uid}`),e);const n=ft(pt,`status/${t.uid}`);await Ws(n,{online:!0,lastSeen:Date.now()}),sm(n).set({online:!1,lastSeen:Date.now()})}else Va.commit("clearUser");vr||(vr=Jy(QS),vr.use(Va),vr.use(Em),vr.mount("#app"))});export{gR as A,Wy as B,zy as C,uR as D,mR as E,Je as F,_R as G,pR as H,fR as I,Ws as J,ft as K,pt as L,an as T,Ci as _,Op as a,z as b,q as c,g as d,Ja as e,Qi as f,y1 as g,De as h,de as i,$r as j,Ui as k,ke as l,Bf as m,Al as n,tr as o,dn as p,dR as q,fe as r,it as s,ie as t,wm as u,no as v,Ue as w,Mp as x,hR as y,Re as z};
