(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))d(f);new MutationObserver(f=>{for(const h of f)if(h.type==="childList")for(const g of h.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&d(g)}).observe(document,{childList:!0,subtree:!0});function a(f){const h={};return f.integrity&&(h.integrity=f.integrity),f.referrerPolicy&&(h.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?h.credentials="include":f.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function d(f){if(f.ep)return;f.ep=!0;const h=a(f);fetch(f.href,h)}})();function Rc(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Ji={exports:{}},Rr={},Zi={exports:{}},Z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mc;function rp(){if(mc)return Z;mc=1;var i=Symbol.for("react.element"),u=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),h=Symbol.for("react.provider"),g=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),I=Symbol.for("react.lazy"),N=Symbol.iterator;function j(y){return y===null||typeof y!="object"?null:(y=N&&y[N]||y["@@iterator"],typeof y=="function"?y:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},D=Object.assign,B={};function T(y,R,J){this.props=y,this.context=R,this.refs=B,this.updater=J||M}T.prototype.isReactComponent={},T.prototype.setState=function(y,R){if(typeof y!="object"&&typeof y!="function"&&y!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,y,R,"setState")},T.prototype.forceUpdate=function(y){this.updater.enqueueForceUpdate(this,y,"forceUpdate")};function G(){}G.prototype=T.prototype;function H(y,R,J){this.props=y,this.context=R,this.refs=B,this.updater=J||M}var q=H.prototype=new G;q.constructor=H,D(q,T.prototype),q.isPureReactComponent=!0;var te=Array.isArray,re=Object.prototype.hasOwnProperty,le={current:null},ae={key:!0,ref:!0,__self:!0,__source:!0};function me(y,R,J){var ee,oe={},ie=null,de=null;if(R!=null)for(ee in R.ref!==void 0&&(de=R.ref),R.key!==void 0&&(ie=""+R.key),R)re.call(R,ee)&&!ae.hasOwnProperty(ee)&&(oe[ee]=R[ee]);var ue=arguments.length-2;if(ue===1)oe.children=J;else if(1<ue){for(var ge=Array(ue),Je=0;Je<ue;Je++)ge[Je]=arguments[Je+2];oe.children=ge}if(y&&y.defaultProps)for(ee in ue=y.defaultProps,ue)oe[ee]===void 0&&(oe[ee]=ue[ee]);return{$$typeof:i,type:y,key:ie,ref:de,props:oe,_owner:le.current}}function Te(y,R){return{$$typeof:i,type:y.type,key:R,ref:y.ref,props:y.props,_owner:y._owner}}function Ue(y){return typeof y=="object"&&y!==null&&y.$$typeof===i}function It(y){var R={"=":"=0",":":"=2"};return"$"+y.replace(/[=:]/g,function(J){return R[J]})}var rt=/\/+/g;function Be(y,R){return typeof y=="object"&&y!==null&&y.key!=null?It(""+y.key):R.toString(36)}function We(y,R,J,ee,oe){var ie=typeof y;(ie==="undefined"||ie==="boolean")&&(y=null);var de=!1;if(y===null)de=!0;else switch(ie){case"string":case"number":de=!0;break;case"object":switch(y.$$typeof){case i:case u:de=!0}}if(de)return de=y,oe=oe(de),y=ee===""?"."+Be(de,0):ee,te(oe)?(J="",y!=null&&(J=y.replace(rt,"$&/")+"/"),We(oe,R,J,"",function(Je){return Je})):oe!=null&&(Ue(oe)&&(oe=Te(oe,J+(!oe.key||de&&de.key===oe.key?"":(""+oe.key).replace(rt,"$&/")+"/")+y)),R.push(oe)),1;if(de=0,ee=ee===""?".":ee+":",te(y))for(var ue=0;ue<y.length;ue++){ie=y[ue];var ge=ee+Be(ie,ue);de+=We(ie,R,J,ge,oe)}else if(ge=j(y),typeof ge=="function")for(y=ge.call(y),ue=0;!(ie=y.next()).done;)ie=ie.value,ge=ee+Be(ie,ue++),de+=We(ie,R,J,ge,oe);else if(ie==="object")throw R=String(y),Error("Objects are not valid as a React child (found: "+(R==="[object Object]"?"object with keys {"+Object.keys(y).join(", ")+"}":R)+"). If you meant to render a collection of children, use an array instead.");return de}function Ie(y,R,J){if(y==null)return y;var ee=[],oe=0;return We(y,ee,"","",function(ie){return R.call(J,ie,oe++)}),ee}function $e(y){if(y._status===-1){var R=y._result;R=R(),R.then(function(J){(y._status===0||y._status===-1)&&(y._status=1,y._result=J)},function(J){(y._status===0||y._status===-1)&&(y._status=2,y._result=J)}),y._status===-1&&(y._status=0,y._result=R)}if(y._status===1)return y._result.default;throw y._result}var Se={current:null},z={transition:null},Y={ReactCurrentDispatcher:Se,ReactCurrentBatchConfig:z,ReactCurrentOwner:le};function V(){throw Error("act(...) is not supported in production builds of React.")}return Z.Children={map:Ie,forEach:function(y,R,J){Ie(y,function(){R.apply(this,arguments)},J)},count:function(y){var R=0;return Ie(y,function(){R++}),R},toArray:function(y){return Ie(y,function(R){return R})||[]},only:function(y){if(!Ue(y))throw Error("React.Children.only expected to receive a single React element child.");return y}},Z.Component=T,Z.Fragment=a,Z.Profiler=f,Z.PureComponent=H,Z.StrictMode=d,Z.Suspense=S,Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Y,Z.act=V,Z.cloneElement=function(y,R,J){if(y==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+y+".");var ee=D({},y.props),oe=y.key,ie=y.ref,de=y._owner;if(R!=null){if(R.ref!==void 0&&(ie=R.ref,de=le.current),R.key!==void 0&&(oe=""+R.key),y.type&&y.type.defaultProps)var ue=y.type.defaultProps;for(ge in R)re.call(R,ge)&&!ae.hasOwnProperty(ge)&&(ee[ge]=R[ge]===void 0&&ue!==void 0?ue[ge]:R[ge])}var ge=arguments.length-2;if(ge===1)ee.children=J;else if(1<ge){ue=Array(ge);for(var Je=0;Je<ge;Je++)ue[Je]=arguments[Je+2];ee.children=ue}return{$$typeof:i,type:y.type,key:oe,ref:ie,props:ee,_owner:de}},Z.createContext=function(y){return y={$$typeof:g,_currentValue:y,_currentValue2:y,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},y.Provider={$$typeof:h,_context:y},y.Consumer=y},Z.createElement=me,Z.createFactory=function(y){var R=me.bind(null,y);return R.type=y,R},Z.createRef=function(){return{current:null}},Z.forwardRef=function(y){return{$$typeof:P,render:y}},Z.isValidElement=Ue,Z.lazy=function(y){return{$$typeof:I,_payload:{_status:-1,_result:y},_init:$e}},Z.memo=function(y,R){return{$$typeof:x,type:y,compare:R===void 0?null:R}},Z.startTransition=function(y){var R=z.transition;z.transition={};try{y()}finally{z.transition=R}},Z.unstable_act=V,Z.useCallback=function(y,R){return Se.current.useCallback(y,R)},Z.useContext=function(y){return Se.current.useContext(y)},Z.useDebugValue=function(){},Z.useDeferredValue=function(y){return Se.current.useDeferredValue(y)},Z.useEffect=function(y,R){return Se.current.useEffect(y,R)},Z.useId=function(){return Se.current.useId()},Z.useImperativeHandle=function(y,R,J){return Se.current.useImperativeHandle(y,R,J)},Z.useInsertionEffect=function(y,R){return Se.current.useInsertionEffect(y,R)},Z.useLayoutEffect=function(y,R){return Se.current.useLayoutEffect(y,R)},Z.useMemo=function(y,R){return Se.current.useMemo(y,R)},Z.useReducer=function(y,R,J){return Se.current.useReducer(y,R,J)},Z.useRef=function(y){return Se.current.useRef(y)},Z.useState=function(y){return Se.current.useState(y)},Z.useSyncExternalStore=function(y,R,J){return Se.current.useSyncExternalStore(y,R,J)},Z.useTransition=function(){return Se.current.useTransition()},Z.version="18.3.1",Z}var gc;function ds(){return gc||(gc=1,Zi.exports=rp()),Zi.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vc;function lp(){if(vc)return Rr;vc=1;var i=ds(),u=Symbol.for("react.element"),a=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,f=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h={key:!0,ref:!0,__self:!0,__source:!0};function g(P,S,x){var I,N={},j=null,M=null;x!==void 0&&(j=""+x),S.key!==void 0&&(j=""+S.key),S.ref!==void 0&&(M=S.ref);for(I in S)d.call(S,I)&&!h.hasOwnProperty(I)&&(N[I]=S[I]);if(P&&P.defaultProps)for(I in S=P.defaultProps,S)N[I]===void 0&&(N[I]=S[I]);return{$$typeof:u,type:P,key:j,ref:M,props:N,_owner:f.current}}return Rr.Fragment=a,Rr.jsx=g,Rr.jsxs=g,Rr}var yc;function op(){return yc||(yc=1,Ji.exports=lp()),Ji.exports}var c=op(),E=ds();const _c=Rc(E);var Yl={},es={exports:{}},qe={},ts={exports:{}},ns={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xc;function ip(){return xc||(xc=1,(function(i){function u(z,Y){var V=z.length;z.push(Y);e:for(;0<V;){var y=V-1>>>1,R=z[y];if(0<f(R,Y))z[y]=Y,z[V]=R,V=y;else break e}}function a(z){return z.length===0?null:z[0]}function d(z){if(z.length===0)return null;var Y=z[0],V=z.pop();if(V!==Y){z[0]=V;e:for(var y=0,R=z.length,J=R>>>1;y<J;){var ee=2*(y+1)-1,oe=z[ee],ie=ee+1,de=z[ie];if(0>f(oe,V))ie<R&&0>f(de,oe)?(z[y]=de,z[ie]=V,y=ie):(z[y]=oe,z[ee]=V,y=ee);else if(ie<R&&0>f(de,V))z[y]=de,z[ie]=V,y=ie;else break e}}return Y}function f(z,Y){var V=z.sortIndex-Y.sortIndex;return V!==0?V:z.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var h=performance;i.unstable_now=function(){return h.now()}}else{var g=Date,P=g.now();i.unstable_now=function(){return g.now()-P}}var S=[],x=[],I=1,N=null,j=3,M=!1,D=!1,B=!1,T=typeof setTimeout=="function"?setTimeout:null,G=typeof clearTimeout=="function"?clearTimeout:null,H=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function q(z){for(var Y=a(x);Y!==null;){if(Y.callback===null)d(x);else if(Y.startTime<=z)d(x),Y.sortIndex=Y.expirationTime,u(S,Y);else break;Y=a(x)}}function te(z){if(B=!1,q(z),!D)if(a(S)!==null)D=!0,$e(re);else{var Y=a(x);Y!==null&&Se(te,Y.startTime-z)}}function re(z,Y){D=!1,B&&(B=!1,G(me),me=-1),M=!0;var V=j;try{for(q(Y),N=a(S);N!==null&&(!(N.expirationTime>Y)||z&&!It());){var y=N.callback;if(typeof y=="function"){N.callback=null,j=N.priorityLevel;var R=y(N.expirationTime<=Y);Y=i.unstable_now(),typeof R=="function"?N.callback=R:N===a(S)&&d(S),q(Y)}else d(S);N=a(S)}if(N!==null)var J=!0;else{var ee=a(x);ee!==null&&Se(te,ee.startTime-Y),J=!1}return J}finally{N=null,j=V,M=!1}}var le=!1,ae=null,me=-1,Te=5,Ue=-1;function It(){return!(i.unstable_now()-Ue<Te)}function rt(){if(ae!==null){var z=i.unstable_now();Ue=z;var Y=!0;try{Y=ae(!0,z)}finally{Y?Be():(le=!1,ae=null)}}else le=!1}var Be;if(typeof H=="function")Be=function(){H(rt)};else if(typeof MessageChannel<"u"){var We=new MessageChannel,Ie=We.port2;We.port1.onmessage=rt,Be=function(){Ie.postMessage(null)}}else Be=function(){T(rt,0)};function $e(z){ae=z,le||(le=!0,Be())}function Se(z,Y){me=T(function(){z(i.unstable_now())},Y)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(z){z.callback=null},i.unstable_continueExecution=function(){D||M||(D=!0,$e(re))},i.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Te=0<z?Math.floor(1e3/z):5},i.unstable_getCurrentPriorityLevel=function(){return j},i.unstable_getFirstCallbackNode=function(){return a(S)},i.unstable_next=function(z){switch(j){case 1:case 2:case 3:var Y=3;break;default:Y=j}var V=j;j=Y;try{return z()}finally{j=V}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(z,Y){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var V=j;j=z;try{return Y()}finally{j=V}},i.unstable_scheduleCallback=function(z,Y,V){var y=i.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?y+V:y):V=y,z){case 1:var R=-1;break;case 2:R=250;break;case 5:R=1073741823;break;case 4:R=1e4;break;default:R=5e3}return R=V+R,z={id:I++,callback:Y,priorityLevel:z,startTime:V,expirationTime:R,sortIndex:-1},V>y?(z.sortIndex=V,u(x,z),a(S)===null&&z===a(x)&&(B?(G(me),me=-1):B=!0,Se(te,V-y))):(z.sortIndex=R,u(S,z),D||M||(D=!0,$e(re))),z},i.unstable_shouldYield=It,i.unstable_wrapCallback=function(z){var Y=j;return function(){var V=j;j=Y;try{return z.apply(this,arguments)}finally{j=V}}}})(ns)),ns}var wc;function sp(){return wc||(wc=1,ts.exports=ip()),ts.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sc;function ap(){if(Sc)return qe;Sc=1;var i=ds(),u=sp();function a(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d=new Set,f={};function h(e,t){g(e,t),g(e+"Capture",t)}function g(e,t){for(f[e]=t,e=0;e<t.length;e++)d.add(t[e])}var P=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),S=Object.prototype.hasOwnProperty,x=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,I={},N={};function j(e){return S.call(N,e)?!0:S.call(I,e)?!1:x.test(e)?N[e]=!0:(I[e]=!0,!1)}function M(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function D(e,t,n,r){if(t===null||typeof t>"u"||M(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function B(e,t,n,r,l,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var T={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){T[e]=new B(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];T[t]=new B(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){T[e]=new B(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){T[e]=new B(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){T[e]=new B(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){T[e]=new B(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){T[e]=new B(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){T[e]=new B(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){T[e]=new B(e,5,!1,e.toLowerCase(),null,!1,!1)});var G=/[\-:]([a-z])/g;function H(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(G,H);T[t]=new B(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(G,H);T[t]=new B(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(G,H);T[t]=new B(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){T[e]=new B(e,1,!1,e.toLowerCase(),null,!1,!1)}),T.xlinkHref=new B("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){T[e]=new B(e,1,!1,e.toLowerCase(),null,!0,!0)});function q(e,t,n,r){var l=T.hasOwnProperty(t)?T[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(D(t,n,l,r)&&(n=null),r||l===null?j(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var te=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,re=Symbol.for("react.element"),le=Symbol.for("react.portal"),ae=Symbol.for("react.fragment"),me=Symbol.for("react.strict_mode"),Te=Symbol.for("react.profiler"),Ue=Symbol.for("react.provider"),It=Symbol.for("react.context"),rt=Symbol.for("react.forward_ref"),Be=Symbol.for("react.suspense"),We=Symbol.for("react.suspense_list"),Ie=Symbol.for("react.memo"),$e=Symbol.for("react.lazy"),Se=Symbol.for("react.offscreen"),z=Symbol.iterator;function Y(e){return e===null||typeof e!="object"?null:(e=z&&e[z]||e["@@iterator"],typeof e=="function"?e:null)}var V=Object.assign,y;function R(e){if(y===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);y=t&&t[1]||""}return`
`+y+e}var J=!1;function ee(e,t){if(!e||J)return"";J=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(k){var r=k}Reflect.construct(e,[],t)}else{try{t.call()}catch(k){r=k}e.call(t.prototype)}else{try{throw Error()}catch(k){r=k}e()}}catch(k){if(k&&r&&typeof k.stack=="string"){for(var l=k.stack.split(`
`),o=r.stack.split(`
`),s=l.length-1,p=o.length-1;1<=s&&0<=p&&l[s]!==o[p];)p--;for(;1<=s&&0<=p;s--,p--)if(l[s]!==o[p]){if(s!==1||p!==1)do if(s--,p--,0>p||l[s]!==o[p]){var m=`
`+l[s].replace(" at new "," at ");return e.displayName&&m.includes("<anonymous>")&&(m=m.replace("<anonymous>",e.displayName)),m}while(1<=s&&0<=p);break}}}finally{J=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?R(e):""}function oe(e){switch(e.tag){case 5:return R(e.type);case 16:return R("Lazy");case 13:return R("Suspense");case 19:return R("SuspenseList");case 0:case 2:case 15:return e=ee(e.type,!1),e;case 11:return e=ee(e.type.render,!1),e;case 1:return e=ee(e.type,!0),e;default:return""}}function ie(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ae:return"Fragment";case le:return"Portal";case Te:return"Profiler";case me:return"StrictMode";case Be:return"Suspense";case We:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case It:return(e.displayName||"Context")+".Consumer";case Ue:return(e._context.displayName||"Context")+".Provider";case rt:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ie:return t=e.displayName||null,t!==null?t:ie(e.type)||"Memo";case $e:t=e._payload,e=e._init;try{return ie(e(t))}catch{}}return null}function de(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ie(t);case 8:return t===me?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ue(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ge(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Je(e){var t=ge(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function zr(e){e._valueTracker||(e._valueTracker=Je(e))}function Ss(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ge(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Fr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function lo(e,t){var n=t.checked;return V({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Cs(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=ue(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ks(e,t){t=t.checked,t!=null&&q(e,"checked",t,!1)}function oo(e,t){ks(e,t);var n=ue(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?io(e,t.type,n):t.hasOwnProperty("defaultValue")&&io(e,t.type,ue(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ps(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function io(e,t,n){(t!=="number"||Fr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Hn=Array.isArray;function xn(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ue(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function so(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(a(91));return V({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Es(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(a(92));if(Hn(n)){if(1<n.length)throw Error(a(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ue(n)}}function Ns(e,t){var n=ue(t.value),r=ue(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Is(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function js(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ao(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?js(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ur,Ls=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ur=Ur||document.createElement("div"),Ur.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ur.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Kn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Qn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},id=["Webkit","ms","Moz","O"];Object.keys(Qn).forEach(function(e){id.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Qn[t]=Qn[e]})});function Ts(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Qn.hasOwnProperty(e)&&Qn[e]?(""+t).trim():t+"px"}function Rs(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=Ts(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var sd=V({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function uo(e,t){if(t){if(sd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(a(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(a(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(a(61))}if(t.style!=null&&typeof t.style!="object")throw Error(a(62))}}function co(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fo=null;function po(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ho=null,wn=null,Sn=null;function _s(e){if(e=gr(e)){if(typeof ho!="function")throw Error(a(280));var t=e.stateNode;t&&(t=cl(t),ho(e.stateNode,e.type,t))}}function As(e){wn?Sn?Sn.push(e):Sn=[e]:wn=e}function Ds(){if(wn){var e=wn,t=Sn;if(Sn=wn=null,_s(e),t)for(e=0;e<t.length;e++)_s(t[e])}}function Gs(e,t){return e(t)}function Bs(){}var mo=!1;function Os(e,t,n){if(mo)return e(t,n);mo=!0;try{return Gs(e,t,n)}finally{mo=!1,(wn!==null||Sn!==null)&&(Bs(),Ds())}}function Yn(e,t){var n=e.stateNode;if(n===null)return null;var r=cl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(a(231,t,typeof n));return n}var go=!1;if(P)try{var Xn={};Object.defineProperty(Xn,"passive",{get:function(){go=!0}}),window.addEventListener("test",Xn,Xn),window.removeEventListener("test",Xn,Xn)}catch{go=!1}function ad(e,t,n,r,l,o,s,p,m){var k=Array.prototype.slice.call(arguments,3);try{t.apply(n,k)}catch(_){this.onError(_)}}var qn=!1,Vr=null,br=!1,vo=null,ud={onError:function(e){qn=!0,Vr=e}};function cd(e,t,n,r,l,o,s,p,m){qn=!1,Vr=null,ad.apply(ud,arguments)}function dd(e,t,n,r,l,o,s,p,m){if(cd.apply(this,arguments),qn){if(qn){var k=Vr;qn=!1,Vr=null}else throw Error(a(198));br||(br=!0,vo=k)}}function ln(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ms(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function zs(e){if(ln(e)!==e)throw Error(a(188))}function fd(e){var t=e.alternate;if(!t){if(t=ln(e),t===null)throw Error(a(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var o=l.alternate;if(o===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===n)return zs(l),e;if(o===r)return zs(l),t;o=o.sibling}throw Error(a(188))}if(n.return!==r.return)n=l,r=o;else{for(var s=!1,p=l.child;p;){if(p===n){s=!0,n=l,r=o;break}if(p===r){s=!0,r=l,n=o;break}p=p.sibling}if(!s){for(p=o.child;p;){if(p===n){s=!0,n=o,r=l;break}if(p===r){s=!0,r=o,n=l;break}p=p.sibling}if(!s)throw Error(a(189))}}if(n.alternate!==r)throw Error(a(190))}if(n.tag!==3)throw Error(a(188));return n.stateNode.current===n?e:t}function Fs(e){return e=fd(e),e!==null?Us(e):null}function Us(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Us(e);if(t!==null)return t;e=e.sibling}return null}var Vs=u.unstable_scheduleCallback,bs=u.unstable_cancelCallback,pd=u.unstable_shouldYield,hd=u.unstable_requestPaint,Pe=u.unstable_now,md=u.unstable_getCurrentPriorityLevel,yo=u.unstable_ImmediatePriority,Ws=u.unstable_UserBlockingPriority,Wr=u.unstable_NormalPriority,gd=u.unstable_LowPriority,$s=u.unstable_IdlePriority,$r=null,wt=null;function vd(e){if(wt&&typeof wt.onCommitFiberRoot=="function")try{wt.onCommitFiberRoot($r,e,void 0,(e.current.flags&128)===128)}catch{}}var dt=Math.clz32?Math.clz32:wd,yd=Math.log,xd=Math.LN2;function wd(e){return e>>>=0,e===0?32:31-(yd(e)/xd|0)|0}var Hr=64,Kr=4194304;function Jn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Qr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var p=s&~l;p!==0?r=Jn(p):(o&=s,o!==0&&(r=Jn(o)))}else s=n&~l,s!==0?r=Jn(s):o!==0&&(r=Jn(o));if(r===0)return 0;if(t!==0&&t!==r&&(t&l)===0&&(l=r&-r,o=t&-t,l>=o||l===16&&(o&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-dt(t),l=1<<n,r|=e[n],t&=~l;return r}function Sd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Cd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-dt(o),p=1<<s,m=l[s];m===-1?((p&n)===0||(p&r)!==0)&&(l[s]=Sd(p,t)):m<=t&&(e.expiredLanes|=p),o&=~p}}function xo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Hs(){var e=Hr;return Hr<<=1,(Hr&4194240)===0&&(Hr=64),e}function wo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Zn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-dt(t),e[t]=n}function kd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-dt(n),o=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~o}}function So(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-dt(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var ce=0;function Ks(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Qs,Co,Ys,Xs,qs,ko=!1,Yr=[],Ot=null,Mt=null,zt=null,er=new Map,tr=new Map,Ft=[],Pd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Js(e,t){switch(e){case"focusin":case"focusout":Ot=null;break;case"dragenter":case"dragleave":Mt=null;break;case"mouseover":case"mouseout":zt=null;break;case"pointerover":case"pointerout":er.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":tr.delete(t.pointerId)}}function nr(e,t,n,r,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[l]},t!==null&&(t=gr(t),t!==null&&Co(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Ed(e,t,n,r,l){switch(t){case"focusin":return Ot=nr(Ot,e,t,n,r,l),!0;case"dragenter":return Mt=nr(Mt,e,t,n,r,l),!0;case"mouseover":return zt=nr(zt,e,t,n,r,l),!0;case"pointerover":var o=l.pointerId;return er.set(o,nr(er.get(o)||null,e,t,n,r,l)),!0;case"gotpointercapture":return o=l.pointerId,tr.set(o,nr(tr.get(o)||null,e,t,n,r,l)),!0}return!1}function Zs(e){var t=on(e.target);if(t!==null){var n=ln(t);if(n!==null){if(t=n.tag,t===13){if(t=Ms(n),t!==null){e.blockedOn=t,qs(e.priority,function(){Ys(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Xr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Eo(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);fo=r,n.target.dispatchEvent(r),fo=null}else return t=gr(n),t!==null&&Co(t),e.blockedOn=n,!1;t.shift()}return!0}function ea(e,t,n){Xr(e)&&n.delete(t)}function Nd(){ko=!1,Ot!==null&&Xr(Ot)&&(Ot=null),Mt!==null&&Xr(Mt)&&(Mt=null),zt!==null&&Xr(zt)&&(zt=null),er.forEach(ea),tr.forEach(ea)}function rr(e,t){e.blockedOn===t&&(e.blockedOn=null,ko||(ko=!0,u.unstable_scheduleCallback(u.unstable_NormalPriority,Nd)))}function lr(e){function t(l){return rr(l,e)}if(0<Yr.length){rr(Yr[0],e);for(var n=1;n<Yr.length;n++){var r=Yr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Ot!==null&&rr(Ot,e),Mt!==null&&rr(Mt,e),zt!==null&&rr(zt,e),er.forEach(t),tr.forEach(t),n=0;n<Ft.length;n++)r=Ft[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Ft.length&&(n=Ft[0],n.blockedOn===null);)Zs(n),n.blockedOn===null&&Ft.shift()}var Cn=te.ReactCurrentBatchConfig,qr=!0;function Id(e,t,n,r){var l=ce,o=Cn.transition;Cn.transition=null;try{ce=1,Po(e,t,n,r)}finally{ce=l,Cn.transition=o}}function jd(e,t,n,r){var l=ce,o=Cn.transition;Cn.transition=null;try{ce=4,Po(e,t,n,r)}finally{ce=l,Cn.transition=o}}function Po(e,t,n,r){if(qr){var l=Eo(e,t,n,r);if(l===null)Vo(e,t,r,Jr,n),Js(e,r);else if(Ed(l,e,t,n,r))r.stopPropagation();else if(Js(e,r),t&4&&-1<Pd.indexOf(e)){for(;l!==null;){var o=gr(l);if(o!==null&&Qs(o),o=Eo(e,t,n,r),o===null&&Vo(e,t,r,Jr,n),o===l)break;l=o}l!==null&&r.stopPropagation()}else Vo(e,t,r,null,n)}}var Jr=null;function Eo(e,t,n,r){if(Jr=null,e=po(r),e=on(e),e!==null)if(t=ln(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ms(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Jr=e,null}function ta(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(md()){case yo:return 1;case Ws:return 4;case Wr:case gd:return 16;case $s:return 536870912;default:return 16}default:return 16}}var Ut=null,No=null,Zr=null;function na(){if(Zr)return Zr;var e,t=No,n=t.length,r,l="value"in Ut?Ut.value:Ut.textContent,o=l.length;for(e=0;e<n&&t[e]===l[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===l[o-r];r++);return Zr=l.slice(e,1<r?1-r:void 0)}function el(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function tl(){return!0}function ra(){return!1}function Ze(e){function t(n,r,l,o,s){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var p in e)e.hasOwnProperty(p)&&(n=e[p],this[p]=n?n(o):o[p]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?tl:ra,this.isPropagationStopped=ra,this}return V(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=tl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=tl)},persist:function(){},isPersistent:tl}),t}var kn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Io=Ze(kn),or=V({},kn,{view:0,detail:0}),Ld=Ze(or),jo,Lo,ir,nl=V({},or,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ro,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ir&&(ir&&e.type==="mousemove"?(jo=e.screenX-ir.screenX,Lo=e.screenY-ir.screenY):Lo=jo=0,ir=e),jo)},movementY:function(e){return"movementY"in e?e.movementY:Lo}}),la=Ze(nl),Td=V({},nl,{dataTransfer:0}),Rd=Ze(Td),_d=V({},or,{relatedTarget:0}),To=Ze(_d),Ad=V({},kn,{animationName:0,elapsedTime:0,pseudoElement:0}),Dd=Ze(Ad),Gd=V({},kn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Bd=Ze(Gd),Od=V({},kn,{data:0}),oa=Ze(Od),Md={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Fd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ud(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Fd[e])?!!t[e]:!1}function Ro(){return Ud}var Vd=V({},or,{key:function(e){if(e.key){var t=Md[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=el(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?zd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ro,charCode:function(e){return e.type==="keypress"?el(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?el(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),bd=Ze(Vd),Wd=V({},nl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ia=Ze(Wd),$d=V({},or,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ro}),Hd=Ze($d),Kd=V({},kn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Qd=Ze(Kd),Yd=V({},nl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Xd=Ze(Yd),qd=[9,13,27,32],_o=P&&"CompositionEvent"in window,sr=null;P&&"documentMode"in document&&(sr=document.documentMode);var Jd=P&&"TextEvent"in window&&!sr,sa=P&&(!_o||sr&&8<sr&&11>=sr),aa=" ",ua=!1;function ca(e,t){switch(e){case"keyup":return qd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function da(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Pn=!1;function Zd(e,t){switch(e){case"compositionend":return da(t);case"keypress":return t.which!==32?null:(ua=!0,aa);case"textInput":return e=t.data,e===aa&&ua?null:e;default:return null}}function ef(e,t){if(Pn)return e==="compositionend"||!_o&&ca(e,t)?(e=na(),Zr=No=Ut=null,Pn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return sa&&t.locale!=="ko"?null:t.data;default:return null}}var tf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!tf[e.type]:t==="textarea"}function pa(e,t,n,r){As(r),t=sl(t,"onChange"),0<t.length&&(n=new Io("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ar=null,ur=null;function nf(e){Ra(e,0)}function rl(e){var t=Ln(e);if(Ss(t))return e}function rf(e,t){if(e==="change")return t}var ha=!1;if(P){var Ao;if(P){var Do="oninput"in document;if(!Do){var ma=document.createElement("div");ma.setAttribute("oninput","return;"),Do=typeof ma.oninput=="function"}Ao=Do}else Ao=!1;ha=Ao&&(!document.documentMode||9<document.documentMode)}function ga(){ar&&(ar.detachEvent("onpropertychange",va),ur=ar=null)}function va(e){if(e.propertyName==="value"&&rl(ur)){var t=[];pa(t,ur,e,po(e)),Os(nf,t)}}function lf(e,t,n){e==="focusin"?(ga(),ar=t,ur=n,ar.attachEvent("onpropertychange",va)):e==="focusout"&&ga()}function of(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return rl(ur)}function sf(e,t){if(e==="click")return rl(t)}function af(e,t){if(e==="input"||e==="change")return rl(t)}function uf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ft=typeof Object.is=="function"?Object.is:uf;function cr(e,t){if(ft(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!S.call(t,l)||!ft(e[l],t[l]))return!1}return!0}function ya(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function xa(e,t){var n=ya(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ya(n)}}function wa(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?wa(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Sa(){for(var e=window,t=Fr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Fr(e.document)}return t}function Go(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function cf(e){var t=Sa(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&wa(n.ownerDocument.documentElement,n)){if(r!==null&&Go(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,o=Math.min(r.start,l);r=r.end===void 0?o:Math.min(r.end,l),!e.extend&&o>r&&(l=r,r=o,o=l),l=xa(n,o);var s=xa(n,r);l&&s&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var df=P&&"documentMode"in document&&11>=document.documentMode,En=null,Bo=null,dr=null,Oo=!1;function Ca(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Oo||En==null||En!==Fr(r)||(r=En,"selectionStart"in r&&Go(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),dr&&cr(dr,r)||(dr=r,r=sl(Bo,"onSelect"),0<r.length&&(t=new Io("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=En)))}function ll(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Nn={animationend:ll("Animation","AnimationEnd"),animationiteration:ll("Animation","AnimationIteration"),animationstart:ll("Animation","AnimationStart"),transitionend:ll("Transition","TransitionEnd")},Mo={},ka={};P&&(ka=document.createElement("div").style,"AnimationEvent"in window||(delete Nn.animationend.animation,delete Nn.animationiteration.animation,delete Nn.animationstart.animation),"TransitionEvent"in window||delete Nn.transitionend.transition);function ol(e){if(Mo[e])return Mo[e];if(!Nn[e])return e;var t=Nn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ka)return Mo[e]=t[n];return e}var Pa=ol("animationend"),Ea=ol("animationiteration"),Na=ol("animationstart"),Ia=ol("transitionend"),ja=new Map,La="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Vt(e,t){ja.set(e,t),h(t,[e])}for(var zo=0;zo<La.length;zo++){var Fo=La[zo],ff=Fo.toLowerCase(),pf=Fo[0].toUpperCase()+Fo.slice(1);Vt(ff,"on"+pf)}Vt(Pa,"onAnimationEnd"),Vt(Ea,"onAnimationIteration"),Vt(Na,"onAnimationStart"),Vt("dblclick","onDoubleClick"),Vt("focusin","onFocus"),Vt("focusout","onBlur"),Vt(Ia,"onTransitionEnd"),g("onMouseEnter",["mouseout","mouseover"]),g("onMouseLeave",["mouseout","mouseover"]),g("onPointerEnter",["pointerout","pointerover"]),g("onPointerLeave",["pointerout","pointerover"]),h("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),h("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),h("onBeforeInput",["compositionend","keypress","textInput","paste"]),h("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),h("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),h("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hf=new Set("cancel close invalid load scroll toggle".split(" ").concat(fr));function Ta(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,dd(r,t,void 0,e),e.currentTarget=null}function Ra(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var p=r[s],m=p.instance,k=p.currentTarget;if(p=p.listener,m!==o&&l.isPropagationStopped())break e;Ta(l,p,k),o=m}else for(s=0;s<r.length;s++){if(p=r[s],m=p.instance,k=p.currentTarget,p=p.listener,m!==o&&l.isPropagationStopped())break e;Ta(l,p,k),o=m}}}if(br)throw e=vo,br=!1,vo=null,e}function pe(e,t){var n=t[Qo];n===void 0&&(n=t[Qo]=new Set);var r=e+"__bubble";n.has(r)||(_a(t,e,2,!1),n.add(r))}function Uo(e,t,n){var r=0;t&&(r|=4),_a(n,e,r,t)}var il="_reactListening"+Math.random().toString(36).slice(2);function pr(e){if(!e[il]){e[il]=!0,d.forEach(function(n){n!=="selectionchange"&&(hf.has(n)||Uo(n,!1,e),Uo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[il]||(t[il]=!0,Uo("selectionchange",!1,t))}}function _a(e,t,n,r){switch(ta(t)){case 1:var l=Id;break;case 4:l=jd;break;default:l=Po}n=l.bind(null,t,n,e),l=void 0,!go||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Vo(e,t,n,r,l){var o=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var p=r.stateNode.containerInfo;if(p===l||p.nodeType===8&&p.parentNode===l)break;if(s===4)for(s=r.return;s!==null;){var m=s.tag;if((m===3||m===4)&&(m=s.stateNode.containerInfo,m===l||m.nodeType===8&&m.parentNode===l))return;s=s.return}for(;p!==null;){if(s=on(p),s===null)return;if(m=s.tag,m===5||m===6){r=o=s;continue e}p=p.parentNode}}r=r.return}Os(function(){var k=o,_=po(n),A=[];e:{var L=ja.get(e);if(L!==void 0){var F=Io,b=e;switch(e){case"keypress":if(el(n)===0)break e;case"keydown":case"keyup":F=bd;break;case"focusin":b="focus",F=To;break;case"focusout":b="blur",F=To;break;case"beforeblur":case"afterblur":F=To;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":F=la;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":F=Rd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":F=Hd;break;case Pa:case Ea:case Na:F=Dd;break;case Ia:F=Qd;break;case"scroll":F=Ld;break;case"wheel":F=Xd;break;case"copy":case"cut":case"paste":F=Bd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":F=ia}var W=(t&4)!==0,Ee=!W&&e==="scroll",w=W?L!==null?L+"Capture":null:L;W=[];for(var v=k,C;v!==null;){C=v;var O=C.stateNode;if(C.tag===5&&O!==null&&(C=O,w!==null&&(O=Yn(v,w),O!=null&&W.push(hr(v,O,C)))),Ee)break;v=v.return}0<W.length&&(L=new F(L,b,null,n,_),A.push({event:L,listeners:W}))}}if((t&7)===0){e:{if(L=e==="mouseover"||e==="pointerover",F=e==="mouseout"||e==="pointerout",L&&n!==fo&&(b=n.relatedTarget||n.fromElement)&&(on(b)||b[jt]))break e;if((F||L)&&(L=_.window===_?_:(L=_.ownerDocument)?L.defaultView||L.parentWindow:window,F?(b=n.relatedTarget||n.toElement,F=k,b=b?on(b):null,b!==null&&(Ee=ln(b),b!==Ee||b.tag!==5&&b.tag!==6)&&(b=null)):(F=null,b=k),F!==b)){if(W=la,O="onMouseLeave",w="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(W=ia,O="onPointerLeave",w="onPointerEnter",v="pointer"),Ee=F==null?L:Ln(F),C=b==null?L:Ln(b),L=new W(O,v+"leave",F,n,_),L.target=Ee,L.relatedTarget=C,O=null,on(_)===k&&(W=new W(w,v+"enter",b,n,_),W.target=C,W.relatedTarget=Ee,O=W),Ee=O,F&&b)t:{for(W=F,w=b,v=0,C=W;C;C=In(C))v++;for(C=0,O=w;O;O=In(O))C++;for(;0<v-C;)W=In(W),v--;for(;0<C-v;)w=In(w),C--;for(;v--;){if(W===w||w!==null&&W===w.alternate)break t;W=In(W),w=In(w)}W=null}else W=null;F!==null&&Aa(A,L,F,W,!1),b!==null&&Ee!==null&&Aa(A,Ee,b,W,!0)}}e:{if(L=k?Ln(k):window,F=L.nodeName&&L.nodeName.toLowerCase(),F==="select"||F==="input"&&L.type==="file")var $=rf;else if(fa(L))if(ha)$=af;else{$=of;var K=lf}else(F=L.nodeName)&&F.toLowerCase()==="input"&&(L.type==="checkbox"||L.type==="radio")&&($=sf);if($&&($=$(e,k))){pa(A,$,n,_);break e}K&&K(e,L,k),e==="focusout"&&(K=L._wrapperState)&&K.controlled&&L.type==="number"&&io(L,"number",L.value)}switch(K=k?Ln(k):window,e){case"focusin":(fa(K)||K.contentEditable==="true")&&(En=K,Bo=k,dr=null);break;case"focusout":dr=Bo=En=null;break;case"mousedown":Oo=!0;break;case"contextmenu":case"mouseup":case"dragend":Oo=!1,Ca(A,n,_);break;case"selectionchange":if(df)break;case"keydown":case"keyup":Ca(A,n,_)}var Q;if(_o)e:{switch(e){case"compositionstart":var X="onCompositionStart";break e;case"compositionend":X="onCompositionEnd";break e;case"compositionupdate":X="onCompositionUpdate";break e}X=void 0}else Pn?ca(e,n)&&(X="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(X="onCompositionStart");X&&(sa&&n.locale!=="ko"&&(Pn||X!=="onCompositionStart"?X==="onCompositionEnd"&&Pn&&(Q=na()):(Ut=_,No="value"in Ut?Ut.value:Ut.textContent,Pn=!0)),K=sl(k,X),0<K.length&&(X=new oa(X,e,null,n,_),A.push({event:X,listeners:K}),Q?X.data=Q:(Q=da(n),Q!==null&&(X.data=Q)))),(Q=Jd?Zd(e,n):ef(e,n))&&(k=sl(k,"onBeforeInput"),0<k.length&&(_=new oa("onBeforeInput","beforeinput",null,n,_),A.push({event:_,listeners:k}),_.data=Q))}Ra(A,t)})}function hr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function sl(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,o=l.stateNode;l.tag===5&&o!==null&&(l=o,o=Yn(e,n),o!=null&&r.unshift(hr(e,o,l)),o=Yn(e,t),o!=null&&r.push(hr(e,o,l))),e=e.return}return r}function In(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Aa(e,t,n,r,l){for(var o=t._reactName,s=[];n!==null&&n!==r;){var p=n,m=p.alternate,k=p.stateNode;if(m!==null&&m===r)break;p.tag===5&&k!==null&&(p=k,l?(m=Yn(n,o),m!=null&&s.unshift(hr(n,m,p))):l||(m=Yn(n,o),m!=null&&s.push(hr(n,m,p)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var mf=/\r\n?/g,gf=/\u0000|\uFFFD/g;function Da(e){return(typeof e=="string"?e:""+e).replace(mf,`
`).replace(gf,"")}function al(e,t,n){if(t=Da(t),Da(e)!==t&&n)throw Error(a(425))}function ul(){}var bo=null,Wo=null;function $o(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ho=typeof setTimeout=="function"?setTimeout:void 0,vf=typeof clearTimeout=="function"?clearTimeout:void 0,Ga=typeof Promise=="function"?Promise:void 0,yf=typeof queueMicrotask=="function"?queueMicrotask:typeof Ga<"u"?function(e){return Ga.resolve(null).then(e).catch(xf)}:Ho;function xf(e){setTimeout(function(){throw e})}function Ko(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),lr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);lr(t)}function bt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ba(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var jn=Math.random().toString(36).slice(2),St="__reactFiber$"+jn,mr="__reactProps$"+jn,jt="__reactContainer$"+jn,Qo="__reactEvents$"+jn,wf="__reactListeners$"+jn,Sf="__reactHandles$"+jn;function on(e){var t=e[St];if(t)return t;for(var n=e.parentNode;n;){if(t=n[jt]||n[St]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ba(e);e!==null;){if(n=e[St])return n;e=Ba(e)}return t}e=n,n=e.parentNode}return null}function gr(e){return e=e[St]||e[jt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ln(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(a(33))}function cl(e){return e[mr]||null}var Yo=[],Tn=-1;function Wt(e){return{current:e}}function he(e){0>Tn||(e.current=Yo[Tn],Yo[Tn]=null,Tn--)}function fe(e,t){Tn++,Yo[Tn]=e.current,e.current=t}var $t={},Oe=Wt($t),He=Wt(!1),sn=$t;function Rn(e,t){var n=e.type.contextTypes;if(!n)return $t;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},o;for(o in n)l[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function Ke(e){return e=e.childContextTypes,e!=null}function dl(){he(He),he(Oe)}function Oa(e,t,n){if(Oe.current!==$t)throw Error(a(168));fe(Oe,t),fe(He,n)}function Ma(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(a(108,de(e)||"Unknown",l));return V({},n,r)}function fl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||$t,sn=Oe.current,fe(Oe,e),fe(He,He.current),!0}function za(e,t,n){var r=e.stateNode;if(!r)throw Error(a(169));n?(e=Ma(e,t,sn),r.__reactInternalMemoizedMergedChildContext=e,he(He),he(Oe),fe(Oe,e)):he(He),fe(He,n)}var Lt=null,pl=!1,Xo=!1;function Fa(e){Lt===null?Lt=[e]:Lt.push(e)}function Cf(e){pl=!0,Fa(e)}function Ht(){if(!Xo&&Lt!==null){Xo=!0;var e=0,t=ce;try{var n=Lt;for(ce=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Lt=null,pl=!1}catch(l){throw Lt!==null&&(Lt=Lt.slice(e+1)),Vs(yo,Ht),l}finally{ce=t,Xo=!1}}return null}var _n=[],An=0,hl=null,ml=0,lt=[],ot=0,an=null,Tt=1,Rt="";function un(e,t){_n[An++]=ml,_n[An++]=hl,hl=e,ml=t}function Ua(e,t,n){lt[ot++]=Tt,lt[ot++]=Rt,lt[ot++]=an,an=e;var r=Tt;e=Rt;var l=32-dt(r)-1;r&=~(1<<l),n+=1;var o=32-dt(t)+l;if(30<o){var s=l-l%5;o=(r&(1<<s)-1).toString(32),r>>=s,l-=s,Tt=1<<32-dt(t)+l|n<<l|r,Rt=o+e}else Tt=1<<o|n<<l|r,Rt=e}function qo(e){e.return!==null&&(un(e,1),Ua(e,1,0))}function Jo(e){for(;e===hl;)hl=_n[--An],_n[An]=null,ml=_n[--An],_n[An]=null;for(;e===an;)an=lt[--ot],lt[ot]=null,Rt=lt[--ot],lt[ot]=null,Tt=lt[--ot],lt[ot]=null}var et=null,tt=null,ve=!1,pt=null;function Va(e,t){var n=ut(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ba(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,et=e,tt=bt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,et=e,tt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=an!==null?{id:Tt,overflow:Rt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ut(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,et=e,tt=null,!0):!1;default:return!1}}function Zo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ei(e){if(ve){var t=tt;if(t){var n=t;if(!ba(e,t)){if(Zo(e))throw Error(a(418));t=bt(n.nextSibling);var r=et;t&&ba(e,t)?Va(r,n):(e.flags=e.flags&-4097|2,ve=!1,et=e)}}else{if(Zo(e))throw Error(a(418));e.flags=e.flags&-4097|2,ve=!1,et=e}}}function Wa(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;et=e}function gl(e){if(e!==et)return!1;if(!ve)return Wa(e),ve=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!$o(e.type,e.memoizedProps)),t&&(t=tt)){if(Zo(e))throw $a(),Error(a(418));for(;t;)Va(e,t),t=bt(t.nextSibling)}if(Wa(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){tt=bt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}tt=null}}else tt=et?bt(e.stateNode.nextSibling):null;return!0}function $a(){for(var e=tt;e;)e=bt(e.nextSibling)}function Dn(){tt=et=null,ve=!1}function ti(e){pt===null?pt=[e]:pt.push(e)}var kf=te.ReactCurrentBatchConfig;function vr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(a(309));var r=n.stateNode}if(!r)throw Error(a(147,e));var l=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var p=l.refs;s===null?delete p[o]:p[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(a(284));if(!n._owner)throw Error(a(290,e))}return e}function vl(e,t){throw e=Object.prototype.toString.call(t),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ha(e){var t=e._init;return t(e._payload)}function Ka(e){function t(w,v){if(e){var C=w.deletions;C===null?(w.deletions=[v],w.flags|=16):C.push(v)}}function n(w,v){if(!e)return null;for(;v!==null;)t(w,v),v=v.sibling;return null}function r(w,v){for(w=new Map;v!==null;)v.key!==null?w.set(v.key,v):w.set(v.index,v),v=v.sibling;return w}function l(w,v){return w=en(w,v),w.index=0,w.sibling=null,w}function o(w,v,C){return w.index=C,e?(C=w.alternate,C!==null?(C=C.index,C<v?(w.flags|=2,v):C):(w.flags|=2,v)):(w.flags|=1048576,v)}function s(w){return e&&w.alternate===null&&(w.flags|=2),w}function p(w,v,C,O){return v===null||v.tag!==6?(v=Hi(C,w.mode,O),v.return=w,v):(v=l(v,C),v.return=w,v)}function m(w,v,C,O){var $=C.type;return $===ae?_(w,v,C.props.children,O,C.key):v!==null&&(v.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===$e&&Ha($)===v.type)?(O=l(v,C.props),O.ref=vr(w,v,C),O.return=w,O):(O=Ul(C.type,C.key,C.props,null,w.mode,O),O.ref=vr(w,v,C),O.return=w,O)}function k(w,v,C,O){return v===null||v.tag!==4||v.stateNode.containerInfo!==C.containerInfo||v.stateNode.implementation!==C.implementation?(v=Ki(C,w.mode,O),v.return=w,v):(v=l(v,C.children||[]),v.return=w,v)}function _(w,v,C,O,$){return v===null||v.tag!==7?(v=vn(C,w.mode,O,$),v.return=w,v):(v=l(v,C),v.return=w,v)}function A(w,v,C){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Hi(""+v,w.mode,C),v.return=w,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case re:return C=Ul(v.type,v.key,v.props,null,w.mode,C),C.ref=vr(w,null,v),C.return=w,C;case le:return v=Ki(v,w.mode,C),v.return=w,v;case $e:var O=v._init;return A(w,O(v._payload),C)}if(Hn(v)||Y(v))return v=vn(v,w.mode,C,null),v.return=w,v;vl(w,v)}return null}function L(w,v,C,O){var $=v!==null?v.key:null;if(typeof C=="string"&&C!==""||typeof C=="number")return $!==null?null:p(w,v,""+C,O);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case re:return C.key===$?m(w,v,C,O):null;case le:return C.key===$?k(w,v,C,O):null;case $e:return $=C._init,L(w,v,$(C._payload),O)}if(Hn(C)||Y(C))return $!==null?null:_(w,v,C,O,null);vl(w,C)}return null}function F(w,v,C,O,$){if(typeof O=="string"&&O!==""||typeof O=="number")return w=w.get(C)||null,p(v,w,""+O,$);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case re:return w=w.get(O.key===null?C:O.key)||null,m(v,w,O,$);case le:return w=w.get(O.key===null?C:O.key)||null,k(v,w,O,$);case $e:var K=O._init;return F(w,v,C,K(O._payload),$)}if(Hn(O)||Y(O))return w=w.get(C)||null,_(v,w,O,$,null);vl(v,O)}return null}function b(w,v,C,O){for(var $=null,K=null,Q=v,X=v=0,Ae=null;Q!==null&&X<C.length;X++){Q.index>X?(Ae=Q,Q=null):Ae=Q.sibling;var se=L(w,Q,C[X],O);if(se===null){Q===null&&(Q=Ae);break}e&&Q&&se.alternate===null&&t(w,Q),v=o(se,v,X),K===null?$=se:K.sibling=se,K=se,Q=Ae}if(X===C.length)return n(w,Q),ve&&un(w,X),$;if(Q===null){for(;X<C.length;X++)Q=A(w,C[X],O),Q!==null&&(v=o(Q,v,X),K===null?$=Q:K.sibling=Q,K=Q);return ve&&un(w,X),$}for(Q=r(w,Q);X<C.length;X++)Ae=F(Q,w,X,C[X],O),Ae!==null&&(e&&Ae.alternate!==null&&Q.delete(Ae.key===null?X:Ae.key),v=o(Ae,v,X),K===null?$=Ae:K.sibling=Ae,K=Ae);return e&&Q.forEach(function(tn){return t(w,tn)}),ve&&un(w,X),$}function W(w,v,C,O){var $=Y(C);if(typeof $!="function")throw Error(a(150));if(C=$.call(C),C==null)throw Error(a(151));for(var K=$=null,Q=v,X=v=0,Ae=null,se=C.next();Q!==null&&!se.done;X++,se=C.next()){Q.index>X?(Ae=Q,Q=null):Ae=Q.sibling;var tn=L(w,Q,se.value,O);if(tn===null){Q===null&&(Q=Ae);break}e&&Q&&tn.alternate===null&&t(w,Q),v=o(tn,v,X),K===null?$=tn:K.sibling=tn,K=tn,Q=Ae}if(se.done)return n(w,Q),ve&&un(w,X),$;if(Q===null){for(;!se.done;X++,se=C.next())se=A(w,se.value,O),se!==null&&(v=o(se,v,X),K===null?$=se:K.sibling=se,K=se);return ve&&un(w,X),$}for(Q=r(w,Q);!se.done;X++,se=C.next())se=F(Q,w,X,se.value,O),se!==null&&(e&&se.alternate!==null&&Q.delete(se.key===null?X:se.key),v=o(se,v,X),K===null?$=se:K.sibling=se,K=se);return e&&Q.forEach(function(np){return t(w,np)}),ve&&un(w,X),$}function Ee(w,v,C,O){if(typeof C=="object"&&C!==null&&C.type===ae&&C.key===null&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case re:e:{for(var $=C.key,K=v;K!==null;){if(K.key===$){if($=C.type,$===ae){if(K.tag===7){n(w,K.sibling),v=l(K,C.props.children),v.return=w,w=v;break e}}else if(K.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===$e&&Ha($)===K.type){n(w,K.sibling),v=l(K,C.props),v.ref=vr(w,K,C),v.return=w,w=v;break e}n(w,K);break}else t(w,K);K=K.sibling}C.type===ae?(v=vn(C.props.children,w.mode,O,C.key),v.return=w,w=v):(O=Ul(C.type,C.key,C.props,null,w.mode,O),O.ref=vr(w,v,C),O.return=w,w=O)}return s(w);case le:e:{for(K=C.key;v!==null;){if(v.key===K)if(v.tag===4&&v.stateNode.containerInfo===C.containerInfo&&v.stateNode.implementation===C.implementation){n(w,v.sibling),v=l(v,C.children||[]),v.return=w,w=v;break e}else{n(w,v);break}else t(w,v);v=v.sibling}v=Ki(C,w.mode,O),v.return=w,w=v}return s(w);case $e:return K=C._init,Ee(w,v,K(C._payload),O)}if(Hn(C))return b(w,v,C,O);if(Y(C))return W(w,v,C,O);vl(w,C)}return typeof C=="string"&&C!==""||typeof C=="number"?(C=""+C,v!==null&&v.tag===6?(n(w,v.sibling),v=l(v,C),v.return=w,w=v):(n(w,v),v=Hi(C,w.mode,O),v.return=w,w=v),s(w)):n(w,v)}return Ee}var Gn=Ka(!0),Qa=Ka(!1),yl=Wt(null),xl=null,Bn=null,ni=null;function ri(){ni=Bn=xl=null}function li(e){var t=yl.current;he(yl),e._currentValue=t}function oi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function On(e,t){xl=e,ni=Bn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Qe=!0),e.firstContext=null)}function it(e){var t=e._currentValue;if(ni!==e)if(e={context:e,memoizedValue:t,next:null},Bn===null){if(xl===null)throw Error(a(308));Bn=e,xl.dependencies={lanes:0,firstContext:e}}else Bn=Bn.next=e;return t}var cn=null;function ii(e){cn===null?cn=[e]:cn.push(e)}function Ya(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,ii(t)):(n.next=l.next,l.next=n),t.interleaved=n,_t(e,r)}function _t(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Kt=!1;function si(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Xa(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function At(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Qt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(ne&2)!==0){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,_t(e,n)}return l=r.interleaved,l===null?(t.next=t,ii(r)):(t.next=l.next,l.next=t),r.interleaved=t,_t(e,n)}function wl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,So(e,n)}}function qa(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?l=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?l=o=t:o=o.next=t}else l=o=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Sl(e,t,n,r){var l=e.updateQueue;Kt=!1;var o=l.firstBaseUpdate,s=l.lastBaseUpdate,p=l.shared.pending;if(p!==null){l.shared.pending=null;var m=p,k=m.next;m.next=null,s===null?o=k:s.next=k,s=m;var _=e.alternate;_!==null&&(_=_.updateQueue,p=_.lastBaseUpdate,p!==s&&(p===null?_.firstBaseUpdate=k:p.next=k,_.lastBaseUpdate=m))}if(o!==null){var A=l.baseState;s=0,_=k=m=null,p=o;do{var L=p.lane,F=p.eventTime;if((r&L)===L){_!==null&&(_=_.next={eventTime:F,lane:0,tag:p.tag,payload:p.payload,callback:p.callback,next:null});e:{var b=e,W=p;switch(L=t,F=n,W.tag){case 1:if(b=W.payload,typeof b=="function"){A=b.call(F,A,L);break e}A=b;break e;case 3:b.flags=b.flags&-65537|128;case 0:if(b=W.payload,L=typeof b=="function"?b.call(F,A,L):b,L==null)break e;A=V({},A,L);break e;case 2:Kt=!0}}p.callback!==null&&p.lane!==0&&(e.flags|=64,L=l.effects,L===null?l.effects=[p]:L.push(p))}else F={eventTime:F,lane:L,tag:p.tag,payload:p.payload,callback:p.callback,next:null},_===null?(k=_=F,m=A):_=_.next=F,s|=L;if(p=p.next,p===null){if(p=l.shared.pending,p===null)break;L=p,p=L.next,L.next=null,l.lastBaseUpdate=L,l.shared.pending=null}}while(!0);if(_===null&&(m=A),l.baseState=m,l.firstBaseUpdate=k,l.lastBaseUpdate=_,t=l.shared.interleaved,t!==null){l=t;do s|=l.lane,l=l.next;while(l!==t)}else o===null&&(l.shared.lanes=0);pn|=s,e.lanes=s,e.memoizedState=A}}function Ja(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(a(191,l));l.call(r)}}}var yr={},Ct=Wt(yr),xr=Wt(yr),wr=Wt(yr);function dn(e){if(e===yr)throw Error(a(174));return e}function ai(e,t){switch(fe(wr,t),fe(xr,e),fe(Ct,yr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ao(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ao(t,e)}he(Ct),fe(Ct,t)}function Mn(){he(Ct),he(xr),he(wr)}function Za(e){dn(wr.current);var t=dn(Ct.current),n=ao(t,e.type);t!==n&&(fe(xr,e),fe(Ct,n))}function ui(e){xr.current===e&&(he(Ct),he(xr))}var ye=Wt(0);function Cl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ci=[];function di(){for(var e=0;e<ci.length;e++)ci[e]._workInProgressVersionPrimary=null;ci.length=0}var kl=te.ReactCurrentDispatcher,fi=te.ReactCurrentBatchConfig,fn=0,xe=null,je=null,Re=null,Pl=!1,Sr=!1,Cr=0,Pf=0;function Me(){throw Error(a(321))}function pi(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ft(e[n],t[n]))return!1;return!0}function hi(e,t,n,r,l,o){if(fn=o,xe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,kl.current=e===null||e.memoizedState===null?jf:Lf,e=n(r,l),Sr){o=0;do{if(Sr=!1,Cr=0,25<=o)throw Error(a(301));o+=1,Re=je=null,t.updateQueue=null,kl.current=Tf,e=n(r,l)}while(Sr)}if(kl.current=Il,t=je!==null&&je.next!==null,fn=0,Re=je=xe=null,Pl=!1,t)throw Error(a(300));return e}function mi(){var e=Cr!==0;return Cr=0,e}function kt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Re===null?xe.memoizedState=Re=e:Re=Re.next=e,Re}function st(){if(je===null){var e=xe.alternate;e=e!==null?e.memoizedState:null}else e=je.next;var t=Re===null?xe.memoizedState:Re.next;if(t!==null)Re=t,je=e;else{if(e===null)throw Error(a(310));je=e,e={memoizedState:je.memoizedState,baseState:je.baseState,baseQueue:je.baseQueue,queue:je.queue,next:null},Re===null?xe.memoizedState=Re=e:Re=Re.next=e}return Re}function kr(e,t){return typeof t=="function"?t(e):t}function gi(e){var t=st(),n=t.queue;if(n===null)throw Error(a(311));n.lastRenderedReducer=e;var r=je,l=r.baseQueue,o=n.pending;if(o!==null){if(l!==null){var s=l.next;l.next=o.next,o.next=s}r.baseQueue=l=o,n.pending=null}if(l!==null){o=l.next,r=r.baseState;var p=s=null,m=null,k=o;do{var _=k.lane;if((fn&_)===_)m!==null&&(m=m.next={lane:0,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null}),r=k.hasEagerState?k.eagerState:e(r,k.action);else{var A={lane:_,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null};m===null?(p=m=A,s=r):m=m.next=A,xe.lanes|=_,pn|=_}k=k.next}while(k!==null&&k!==o);m===null?s=r:m.next=p,ft(r,t.memoizedState)||(Qe=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=m,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do o=l.lane,xe.lanes|=o,pn|=o,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function vi(e){var t=st(),n=t.queue;if(n===null)throw Error(a(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,o=t.memoizedState;if(l!==null){n.pending=null;var s=l=l.next;do o=e(o,s.action),s=s.next;while(s!==l);ft(o,t.memoizedState)||(Qe=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function eu(){}function tu(e,t){var n=xe,r=st(),l=t(),o=!ft(r.memoizedState,l);if(o&&(r.memoizedState=l,Qe=!0),r=r.queue,yi(lu.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Re!==null&&Re.memoizedState.tag&1){if(n.flags|=2048,Pr(9,ru.bind(null,n,r,l,t),void 0,null),_e===null)throw Error(a(349));(fn&30)!==0||nu(n,t,l)}return l}function nu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=xe.updateQueue,t===null?(t={lastEffect:null,stores:null},xe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ru(e,t,n,r){t.value=n,t.getSnapshot=r,ou(t)&&iu(e)}function lu(e,t,n){return n(function(){ou(t)&&iu(e)})}function ou(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ft(e,n)}catch{return!0}}function iu(e){var t=_t(e,1);t!==null&&vt(t,e,1,-1)}function su(e){var t=kt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:kr,lastRenderedState:e},t.queue=e,e=e.dispatch=If.bind(null,xe,e),[t.memoizedState,e]}function Pr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=xe.updateQueue,t===null?(t={lastEffect:null,stores:null},xe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function au(){return st().memoizedState}function El(e,t,n,r){var l=kt();xe.flags|=e,l.memoizedState=Pr(1|t,n,void 0,r===void 0?null:r)}function Nl(e,t,n,r){var l=st();r=r===void 0?null:r;var o=void 0;if(je!==null){var s=je.memoizedState;if(o=s.destroy,r!==null&&pi(r,s.deps)){l.memoizedState=Pr(t,n,o,r);return}}xe.flags|=e,l.memoizedState=Pr(1|t,n,o,r)}function uu(e,t){return El(8390656,8,e,t)}function yi(e,t){return Nl(2048,8,e,t)}function cu(e,t){return Nl(4,2,e,t)}function du(e,t){return Nl(4,4,e,t)}function fu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function pu(e,t,n){return n=n!=null?n.concat([e]):null,Nl(4,4,fu.bind(null,t,e),n)}function xi(){}function hu(e,t){var n=st();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&pi(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function mu(e,t){var n=st();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&pi(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function gu(e,t,n){return(fn&21)===0?(e.baseState&&(e.baseState=!1,Qe=!0),e.memoizedState=n):(ft(n,t)||(n=Hs(),xe.lanes|=n,pn|=n,e.baseState=!0),t)}function Ef(e,t){var n=ce;ce=n!==0&&4>n?n:4,e(!0);var r=fi.transition;fi.transition={};try{e(!1),t()}finally{ce=n,fi.transition=r}}function vu(){return st().memoizedState}function Nf(e,t,n){var r=Jt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},yu(e))xu(t,n);else if(n=Ya(e,t,n,r),n!==null){var l=be();vt(n,e,r,l),wu(n,t,r)}}function If(e,t,n){var r=Jt(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(yu(e))xu(t,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,p=o(s,n);if(l.hasEagerState=!0,l.eagerState=p,ft(p,s)){var m=t.interleaved;m===null?(l.next=l,ii(t)):(l.next=m.next,m.next=l),t.interleaved=l;return}}catch{}finally{}n=Ya(e,t,l,r),n!==null&&(l=be(),vt(n,e,r,l),wu(n,t,r))}}function yu(e){var t=e.alternate;return e===xe||t!==null&&t===xe}function xu(e,t){Sr=Pl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function wu(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,So(e,n)}}var Il={readContext:it,useCallback:Me,useContext:Me,useEffect:Me,useImperativeHandle:Me,useInsertionEffect:Me,useLayoutEffect:Me,useMemo:Me,useReducer:Me,useRef:Me,useState:Me,useDebugValue:Me,useDeferredValue:Me,useTransition:Me,useMutableSource:Me,useSyncExternalStore:Me,useId:Me,unstable_isNewReconciler:!1},jf={readContext:it,useCallback:function(e,t){return kt().memoizedState=[e,t===void 0?null:t],e},useContext:it,useEffect:uu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,El(4194308,4,fu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return El(4194308,4,e,t)},useInsertionEffect:function(e,t){return El(4,2,e,t)},useMemo:function(e,t){var n=kt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=kt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Nf.bind(null,xe,e),[r.memoizedState,e]},useRef:function(e){var t=kt();return e={current:e},t.memoizedState=e},useState:su,useDebugValue:xi,useDeferredValue:function(e){return kt().memoizedState=e},useTransition:function(){var e=su(!1),t=e[0];return e=Ef.bind(null,e[1]),kt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=xe,l=kt();if(ve){if(n===void 0)throw Error(a(407));n=n()}else{if(n=t(),_e===null)throw Error(a(349));(fn&30)!==0||nu(r,t,n)}l.memoizedState=n;var o={value:n,getSnapshot:t};return l.queue=o,uu(lu.bind(null,r,o,e),[e]),r.flags|=2048,Pr(9,ru.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=kt(),t=_e.identifierPrefix;if(ve){var n=Rt,r=Tt;n=(r&~(1<<32-dt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Cr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Pf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Lf={readContext:it,useCallback:hu,useContext:it,useEffect:yi,useImperativeHandle:pu,useInsertionEffect:cu,useLayoutEffect:du,useMemo:mu,useReducer:gi,useRef:au,useState:function(){return gi(kr)},useDebugValue:xi,useDeferredValue:function(e){var t=st();return gu(t,je.memoizedState,e)},useTransition:function(){var e=gi(kr)[0],t=st().memoizedState;return[e,t]},useMutableSource:eu,useSyncExternalStore:tu,useId:vu,unstable_isNewReconciler:!1},Tf={readContext:it,useCallback:hu,useContext:it,useEffect:yi,useImperativeHandle:pu,useInsertionEffect:cu,useLayoutEffect:du,useMemo:mu,useReducer:vi,useRef:au,useState:function(){return vi(kr)},useDebugValue:xi,useDeferredValue:function(e){var t=st();return je===null?t.memoizedState=e:gu(t,je.memoizedState,e)},useTransition:function(){var e=vi(kr)[0],t=st().memoizedState;return[e,t]},useMutableSource:eu,useSyncExternalStore:tu,useId:vu,unstable_isNewReconciler:!1};function ht(e,t){if(e&&e.defaultProps){t=V({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function wi(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:V({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var jl={isMounted:function(e){return(e=e._reactInternals)?ln(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=be(),l=Jt(e),o=At(r,l);o.payload=t,n!=null&&(o.callback=n),t=Qt(e,o,l),t!==null&&(vt(t,e,l,r),wl(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=be(),l=Jt(e),o=At(r,l);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Qt(e,o,l),t!==null&&(vt(t,e,l,r),wl(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=be(),r=Jt(e),l=At(n,r);l.tag=2,t!=null&&(l.callback=t),t=Qt(e,l,r),t!==null&&(vt(t,e,r,n),wl(t,e,r))}};function Su(e,t,n,r,l,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!cr(n,r)||!cr(l,o):!0}function Cu(e,t,n){var r=!1,l=$t,o=t.contextType;return typeof o=="object"&&o!==null?o=it(o):(l=Ke(t)?sn:Oe.current,r=t.contextTypes,o=(r=r!=null)?Rn(e,l):$t),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=jl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=o),t}function ku(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&jl.enqueueReplaceState(t,t.state,null)}function Si(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},si(e);var o=t.contextType;typeof o=="object"&&o!==null?l.context=it(o):(o=Ke(t)?sn:Oe.current,l.context=Rn(e,o)),l.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(wi(e,t,o,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&jl.enqueueReplaceState(l,l.state,null),Sl(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function zn(e,t){try{var n="",r=t;do n+=oe(r),r=r.return;while(r);var l=n}catch(o){l=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:l,digest:null}}function Ci(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ki(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Rf=typeof WeakMap=="function"?WeakMap:Map;function Pu(e,t,n){n=At(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Gl||(Gl=!0,Mi=r),ki(e,t)},n}function Eu(e,t,n){n=At(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){ki(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){ki(e,t),typeof r!="function"&&(Xt===null?Xt=new Set([this]):Xt.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Nu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Rf;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=$f.bind(null,e,t,n),t.then(e,e))}function Iu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ju(e,t,n,r,l){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=At(-1,1),t.tag=2,Qt(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=l,e)}var _f=te.ReactCurrentOwner,Qe=!1;function Ve(e,t,n,r){t.child=e===null?Qa(t,null,n,r):Gn(t,e.child,n,r)}function Lu(e,t,n,r,l){n=n.render;var o=t.ref;return On(t,l),r=hi(e,t,n,r,o,l),n=mi(),e!==null&&!Qe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Dt(e,t,l)):(ve&&n&&qo(t),t.flags|=1,Ve(e,t,r,l),t.child)}function Tu(e,t,n,r,l){if(e===null){var o=n.type;return typeof o=="function"&&!$i(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Ru(e,t,o,r,l)):(e=Ul(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,(e.lanes&l)===0){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:cr,n(s,r)&&e.ref===t.ref)return Dt(e,t,l)}return t.flags|=1,e=en(o,r),e.ref=t.ref,e.return=t,t.child=e}function Ru(e,t,n,r,l){if(e!==null){var o=e.memoizedProps;if(cr(o,r)&&e.ref===t.ref)if(Qe=!1,t.pendingProps=r=o,(e.lanes&l)!==0)(e.flags&131072)!==0&&(Qe=!0);else return t.lanes=e.lanes,Dt(e,t,l)}return Pi(e,t,n,r,l)}function _u(e,t,n){var r=t.pendingProps,l=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},fe(Un,nt),nt|=n;else{if((n&1073741824)===0)return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,fe(Un,nt),nt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,fe(Un,nt),nt|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,fe(Un,nt),nt|=r;return Ve(e,t,l,n),t.child}function Au(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Pi(e,t,n,r,l){var o=Ke(n)?sn:Oe.current;return o=Rn(t,o),On(t,l),n=hi(e,t,n,r,o,l),r=mi(),e!==null&&!Qe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Dt(e,t,l)):(ve&&r&&qo(t),t.flags|=1,Ve(e,t,n,l),t.child)}function Du(e,t,n,r,l){if(Ke(n)){var o=!0;fl(t)}else o=!1;if(On(t,l),t.stateNode===null)Tl(e,t),Cu(t,n,r),Si(t,n,r,l),r=!0;else if(e===null){var s=t.stateNode,p=t.memoizedProps;s.props=p;var m=s.context,k=n.contextType;typeof k=="object"&&k!==null?k=it(k):(k=Ke(n)?sn:Oe.current,k=Rn(t,k));var _=n.getDerivedStateFromProps,A=typeof _=="function"||typeof s.getSnapshotBeforeUpdate=="function";A||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(p!==r||m!==k)&&ku(t,s,r,k),Kt=!1;var L=t.memoizedState;s.state=L,Sl(t,r,s,l),m=t.memoizedState,p!==r||L!==m||He.current||Kt?(typeof _=="function"&&(wi(t,n,_,r),m=t.memoizedState),(p=Kt||Su(t,n,p,r,L,m,k))?(A||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=m),s.props=r,s.state=m,s.context=k,r=p):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,Xa(e,t),p=t.memoizedProps,k=t.type===t.elementType?p:ht(t.type,p),s.props=k,A=t.pendingProps,L=s.context,m=n.contextType,typeof m=="object"&&m!==null?m=it(m):(m=Ke(n)?sn:Oe.current,m=Rn(t,m));var F=n.getDerivedStateFromProps;(_=typeof F=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(p!==A||L!==m)&&ku(t,s,r,m),Kt=!1,L=t.memoizedState,s.state=L,Sl(t,r,s,l);var b=t.memoizedState;p!==A||L!==b||He.current||Kt?(typeof F=="function"&&(wi(t,n,F,r),b=t.memoizedState),(k=Kt||Su(t,n,k,r,L,b,m)||!1)?(_||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,b,m),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,b,m)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||p===e.memoizedProps&&L===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&L===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=b),s.props=r,s.state=b,s.context=m,r=k):(typeof s.componentDidUpdate!="function"||p===e.memoizedProps&&L===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&L===e.memoizedState||(t.flags|=1024),r=!1)}return Ei(e,t,n,r,o,l)}function Ei(e,t,n,r,l,o){Au(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return l&&za(t,n,!1),Dt(e,t,o);r=t.stateNode,_f.current=t;var p=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Gn(t,e.child,null,o),t.child=Gn(t,null,p,o)):Ve(e,t,p,o),t.memoizedState=r.state,l&&za(t,n,!0),t.child}function Gu(e){var t=e.stateNode;t.pendingContext?Oa(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Oa(e,t.context,!1),ai(e,t.containerInfo)}function Bu(e,t,n,r,l){return Dn(),ti(l),t.flags|=256,Ve(e,t,n,r),t.child}var Ni={dehydrated:null,treeContext:null,retryLane:0};function Ii(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ou(e,t,n){var r=t.pendingProps,l=ye.current,o=!1,s=(t.flags&128)!==0,p;if((p=s)||(p=e!==null&&e.memoizedState===null?!1:(l&2)!==0),p?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),fe(ye,l&1),e===null)return ei(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},(r&1)===0&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Vl(s,r,0,null),e=vn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Ii(n),t.memoizedState=Ni,e):ji(t,s));if(l=e.memoizedState,l!==null&&(p=l.dehydrated,p!==null))return Af(e,t,s,r,p,l,n);if(o){o=r.fallback,s=t.mode,l=e.child,p=l.sibling;var m={mode:"hidden",children:r.children};return(s&1)===0&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=m,t.deletions=null):(r=en(l,m),r.subtreeFlags=l.subtreeFlags&14680064),p!==null?o=en(p,o):(o=vn(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?Ii(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=Ni,r}return o=e.child,e=o.sibling,r=en(o,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ji(e,t){return t=Vl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ll(e,t,n,r){return r!==null&&ti(r),Gn(t,e.child,null,n),e=ji(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Af(e,t,n,r,l,o,s){if(n)return t.flags&256?(t.flags&=-257,r=Ci(Error(a(422))),Ll(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,l=t.mode,r=Vl({mode:"visible",children:r.children},l,0,null),o=vn(o,l,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,(t.mode&1)!==0&&Gn(t,e.child,null,s),t.child.memoizedState=Ii(s),t.memoizedState=Ni,o);if((t.mode&1)===0)return Ll(e,t,s,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var p=r.dgst;return r=p,o=Error(a(419)),r=Ci(o,r,void 0),Ll(e,t,s,r)}if(p=(s&e.childLanes)!==0,Qe||p){if(r=_e,r!==null){switch(s&-s){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=(l&(r.suspendedLanes|s))!==0?0:l,l!==0&&l!==o.retryLane&&(o.retryLane=l,_t(e,l),vt(r,e,l,-1))}return Wi(),r=Ci(Error(a(421))),Ll(e,t,s,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Hf.bind(null,e),l._reactRetry=t,null):(e=o.treeContext,tt=bt(l.nextSibling),et=t,ve=!0,pt=null,e!==null&&(lt[ot++]=Tt,lt[ot++]=Rt,lt[ot++]=an,Tt=e.id,Rt=e.overflow,an=t),t=ji(t,r.children),t.flags|=4096,t)}function Mu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),oi(e.return,t,n)}function Li(e,t,n,r,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=l)}function zu(e,t,n){var r=t.pendingProps,l=r.revealOrder,o=r.tail;if(Ve(e,t,r.children,n),r=ye.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Mu(e,n,t);else if(e.tag===19)Mu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(fe(ye,r),(t.mode&1)===0)t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Cl(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Li(t,!1,l,n,o);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Cl(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Li(t,!0,n,null,o);break;case"together":Li(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Tl(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Dt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),pn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(a(153));if(t.child!==null){for(e=t.child,n=en(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=en(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Df(e,t,n){switch(t.tag){case 3:Gu(t),Dn();break;case 5:Za(t);break;case 1:Ke(t.type)&&fl(t);break;case 4:ai(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;fe(yl,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(fe(ye,ye.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Ou(e,t,n):(fe(ye,ye.current&1),e=Dt(e,t,n),e!==null?e.sibling:null);fe(ye,ye.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return zu(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),fe(ye,ye.current),r)break;return null;case 22:case 23:return t.lanes=0,_u(e,t,n)}return Dt(e,t,n)}var Fu,Ti,Uu,Vu;Fu=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Ti=function(){},Uu=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,dn(Ct.current);var o=null;switch(n){case"input":l=lo(e,l),r=lo(e,r),o=[];break;case"select":l=V({},l,{value:void 0}),r=V({},r,{value:void 0}),o=[];break;case"textarea":l=so(e,l),r=so(e,r),o=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ul)}uo(n,r);var s;n=null;for(k in l)if(!r.hasOwnProperty(k)&&l.hasOwnProperty(k)&&l[k]!=null)if(k==="style"){var p=l[k];for(s in p)p.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else k!=="dangerouslySetInnerHTML"&&k!=="children"&&k!=="suppressContentEditableWarning"&&k!=="suppressHydrationWarning"&&k!=="autoFocus"&&(f.hasOwnProperty(k)?o||(o=[]):(o=o||[]).push(k,null));for(k in r){var m=r[k];if(p=l!=null?l[k]:void 0,r.hasOwnProperty(k)&&m!==p&&(m!=null||p!=null))if(k==="style")if(p){for(s in p)!p.hasOwnProperty(s)||m&&m.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in m)m.hasOwnProperty(s)&&p[s]!==m[s]&&(n||(n={}),n[s]=m[s])}else n||(o||(o=[]),o.push(k,n)),n=m;else k==="dangerouslySetInnerHTML"?(m=m?m.__html:void 0,p=p?p.__html:void 0,m!=null&&p!==m&&(o=o||[]).push(k,m)):k==="children"?typeof m!="string"&&typeof m!="number"||(o=o||[]).push(k,""+m):k!=="suppressContentEditableWarning"&&k!=="suppressHydrationWarning"&&(f.hasOwnProperty(k)?(m!=null&&k==="onScroll"&&pe("scroll",e),o||p===m||(o=[])):(o=o||[]).push(k,m))}n&&(o=o||[]).push("style",n);var k=o;(t.updateQueue=k)&&(t.flags|=4)}},Vu=function(e,t,n,r){n!==r&&(t.flags|=4)};function Er(e,t){if(!ve)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ze(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Gf(e,t,n){var r=t.pendingProps;switch(Jo(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ze(t),null;case 1:return Ke(t.type)&&dl(),ze(t),null;case 3:return r=t.stateNode,Mn(),he(He),he(Oe),di(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(gl(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,pt!==null&&(Ui(pt),pt=null))),Ti(e,t),ze(t),null;case 5:ui(t);var l=dn(wr.current);if(n=t.type,e!==null&&t.stateNode!=null)Uu(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(a(166));return ze(t),null}if(e=dn(Ct.current),gl(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[St]=t,r[mr]=o,e=(t.mode&1)!==0,n){case"dialog":pe("cancel",r),pe("close",r);break;case"iframe":case"object":case"embed":pe("load",r);break;case"video":case"audio":for(l=0;l<fr.length;l++)pe(fr[l],r);break;case"source":pe("error",r);break;case"img":case"image":case"link":pe("error",r),pe("load",r);break;case"details":pe("toggle",r);break;case"input":Cs(r,o),pe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},pe("invalid",r);break;case"textarea":Es(r,o),pe("invalid",r)}uo(n,o),l=null;for(var s in o)if(o.hasOwnProperty(s)){var p=o[s];s==="children"?typeof p=="string"?r.textContent!==p&&(o.suppressHydrationWarning!==!0&&al(r.textContent,p,e),l=["children",p]):typeof p=="number"&&r.textContent!==""+p&&(o.suppressHydrationWarning!==!0&&al(r.textContent,p,e),l=["children",""+p]):f.hasOwnProperty(s)&&p!=null&&s==="onScroll"&&pe("scroll",r)}switch(n){case"input":zr(r),Ps(r,o,!0);break;case"textarea":zr(r),Is(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=ul)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=js(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[St]=t,e[mr]=r,Fu(e,t,!1,!1),t.stateNode=e;e:{switch(s=co(n,r),n){case"dialog":pe("cancel",e),pe("close",e),l=r;break;case"iframe":case"object":case"embed":pe("load",e),l=r;break;case"video":case"audio":for(l=0;l<fr.length;l++)pe(fr[l],e);l=r;break;case"source":pe("error",e),l=r;break;case"img":case"image":case"link":pe("error",e),pe("load",e),l=r;break;case"details":pe("toggle",e),l=r;break;case"input":Cs(e,r),l=lo(e,r),pe("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=V({},r,{value:void 0}),pe("invalid",e);break;case"textarea":Es(e,r),l=so(e,r),pe("invalid",e);break;default:l=r}uo(n,l),p=l;for(o in p)if(p.hasOwnProperty(o)){var m=p[o];o==="style"?Rs(e,m):o==="dangerouslySetInnerHTML"?(m=m?m.__html:void 0,m!=null&&Ls(e,m)):o==="children"?typeof m=="string"?(n!=="textarea"||m!=="")&&Kn(e,m):typeof m=="number"&&Kn(e,""+m):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(f.hasOwnProperty(o)?m!=null&&o==="onScroll"&&pe("scroll",e):m!=null&&q(e,o,m,s))}switch(n){case"input":zr(e),Ps(e,r,!1);break;case"textarea":zr(e),Is(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ue(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?xn(e,!!r.multiple,o,!1):r.defaultValue!=null&&xn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=ul)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ze(t),null;case 6:if(e&&t.stateNode!=null)Vu(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(a(166));if(n=dn(wr.current),dn(Ct.current),gl(t)){if(r=t.stateNode,n=t.memoizedProps,r[St]=t,(o=r.nodeValue!==n)&&(e=et,e!==null))switch(e.tag){case 3:al(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&al(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[St]=t,t.stateNode=r}return ze(t),null;case 13:if(he(ye),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ve&&tt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)$a(),Dn(),t.flags|=98560,o=!1;else if(o=gl(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(a(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(a(317));o[St]=t}else Dn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ze(t),o=!1}else pt!==null&&(Ui(pt),pt=null),o=!0;if(!o)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(ye.current&1)!==0?Le===0&&(Le=3):Wi())),t.updateQueue!==null&&(t.flags|=4),ze(t),null);case 4:return Mn(),Ti(e,t),e===null&&pr(t.stateNode.containerInfo),ze(t),null;case 10:return li(t.type._context),ze(t),null;case 17:return Ke(t.type)&&dl(),ze(t),null;case 19:if(he(ye),o=t.memoizedState,o===null)return ze(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)Er(o,!1);else{if(Le!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(s=Cl(e),s!==null){for(t.flags|=128,Er(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return fe(ye,ye.current&1|2),t.child}e=e.sibling}o.tail!==null&&Pe()>Vn&&(t.flags|=128,r=!0,Er(o,!1),t.lanes=4194304)}else{if(!r)if(e=Cl(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Er(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!ve)return ze(t),null}else 2*Pe()-o.renderingStartTime>Vn&&n!==1073741824&&(t.flags|=128,r=!0,Er(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Pe(),t.sibling=null,n=ye.current,fe(ye,r?n&1|2:n&1),t):(ze(t),null);case 22:case 23:return bi(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(nt&1073741824)!==0&&(ze(t),t.subtreeFlags&6&&(t.flags|=8192)):ze(t),null;case 24:return null;case 25:return null}throw Error(a(156,t.tag))}function Bf(e,t){switch(Jo(t),t.tag){case 1:return Ke(t.type)&&dl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Mn(),he(He),he(Oe),di(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return ui(t),null;case 13:if(he(ye),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(a(340));Dn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return he(ye),null;case 4:return Mn(),null;case 10:return li(t.type._context),null;case 22:case 23:return bi(),null;case 24:return null;default:return null}}var Rl=!1,Fe=!1,Of=typeof WeakSet=="function"?WeakSet:Set,U=null;function Fn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ce(e,t,r)}else n.current=null}function Ri(e,t,n){try{n()}catch(r){Ce(e,t,r)}}var bu=!1;function Mf(e,t){if(bo=qr,e=Sa(),Go(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,p=-1,m=-1,k=0,_=0,A=e,L=null;t:for(;;){for(var F;A!==n||l!==0&&A.nodeType!==3||(p=s+l),A!==o||r!==0&&A.nodeType!==3||(m=s+r),A.nodeType===3&&(s+=A.nodeValue.length),(F=A.firstChild)!==null;)L=A,A=F;for(;;){if(A===e)break t;if(L===n&&++k===l&&(p=s),L===o&&++_===r&&(m=s),(F=A.nextSibling)!==null)break;A=L,L=A.parentNode}A=F}n=p===-1||m===-1?null:{start:p,end:m}}else n=null}n=n||{start:0,end:0}}else n=null;for(Wo={focusedElem:e,selectionRange:n},qr=!1,U=t;U!==null;)if(t=U,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,U=e;else for(;U!==null;){t=U;try{var b=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(b!==null){var W=b.memoizedProps,Ee=b.memoizedState,w=t.stateNode,v=w.getSnapshotBeforeUpdate(t.elementType===t.type?W:ht(t.type,W),Ee);w.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var C=t.stateNode.containerInfo;C.nodeType===1?C.textContent="":C.nodeType===9&&C.documentElement&&C.removeChild(C.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(a(163))}}catch(O){Ce(t,t.return,O)}if(e=t.sibling,e!==null){e.return=t.return,U=e;break}U=t.return}return b=bu,bu=!1,b}function Nr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var o=l.destroy;l.destroy=void 0,o!==void 0&&Ri(t,n,o)}l=l.next}while(l!==r)}}function _l(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function _i(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Wu(e){var t=e.alternate;t!==null&&(e.alternate=null,Wu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[St],delete t[mr],delete t[Qo],delete t[wf],delete t[Sf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function $u(e){return e.tag===5||e.tag===3||e.tag===4}function Hu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||$u(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ai(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ul));else if(r!==4&&(e=e.child,e!==null))for(Ai(e,t,n),e=e.sibling;e!==null;)Ai(e,t,n),e=e.sibling}function Di(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Di(e,t,n),e=e.sibling;e!==null;)Di(e,t,n),e=e.sibling}var De=null,mt=!1;function Yt(e,t,n){for(n=n.child;n!==null;)Ku(e,t,n),n=n.sibling}function Ku(e,t,n){if(wt&&typeof wt.onCommitFiberUnmount=="function")try{wt.onCommitFiberUnmount($r,n)}catch{}switch(n.tag){case 5:Fe||Fn(n,t);case 6:var r=De,l=mt;De=null,Yt(e,t,n),De=r,mt=l,De!==null&&(mt?(e=De,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):De.removeChild(n.stateNode));break;case 18:De!==null&&(mt?(e=De,n=n.stateNode,e.nodeType===8?Ko(e.parentNode,n):e.nodeType===1&&Ko(e,n),lr(e)):Ko(De,n.stateNode));break;case 4:r=De,l=mt,De=n.stateNode.containerInfo,mt=!0,Yt(e,t,n),De=r,mt=l;break;case 0:case 11:case 14:case 15:if(!Fe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var o=l,s=o.destroy;o=o.tag,s!==void 0&&((o&2)!==0||(o&4)!==0)&&Ri(n,t,s),l=l.next}while(l!==r)}Yt(e,t,n);break;case 1:if(!Fe&&(Fn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(p){Ce(n,t,p)}Yt(e,t,n);break;case 21:Yt(e,t,n);break;case 22:n.mode&1?(Fe=(r=Fe)||n.memoizedState!==null,Yt(e,t,n),Fe=r):Yt(e,t,n);break;default:Yt(e,t,n)}}function Qu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Of),t.forEach(function(r){var l=Kf.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function gt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var o=e,s=t,p=s;e:for(;p!==null;){switch(p.tag){case 5:De=p.stateNode,mt=!1;break e;case 3:De=p.stateNode.containerInfo,mt=!0;break e;case 4:De=p.stateNode.containerInfo,mt=!0;break e}p=p.return}if(De===null)throw Error(a(160));Ku(o,s,l),De=null,mt=!1;var m=l.alternate;m!==null&&(m.return=null),l.return=null}catch(k){Ce(l,t,k)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Yu(t,e),t=t.sibling}function Yu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(gt(t,e),Pt(e),r&4){try{Nr(3,e,e.return),_l(3,e)}catch(W){Ce(e,e.return,W)}try{Nr(5,e,e.return)}catch(W){Ce(e,e.return,W)}}break;case 1:gt(t,e),Pt(e),r&512&&n!==null&&Fn(n,n.return);break;case 5:if(gt(t,e),Pt(e),r&512&&n!==null&&Fn(n,n.return),e.flags&32){var l=e.stateNode;try{Kn(l,"")}catch(W){Ce(e,e.return,W)}}if(r&4&&(l=e.stateNode,l!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,p=e.type,m=e.updateQueue;if(e.updateQueue=null,m!==null)try{p==="input"&&o.type==="radio"&&o.name!=null&&ks(l,o),co(p,s);var k=co(p,o);for(s=0;s<m.length;s+=2){var _=m[s],A=m[s+1];_==="style"?Rs(l,A):_==="dangerouslySetInnerHTML"?Ls(l,A):_==="children"?Kn(l,A):q(l,_,A,k)}switch(p){case"input":oo(l,o);break;case"textarea":Ns(l,o);break;case"select":var L=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!o.multiple;var F=o.value;F!=null?xn(l,!!o.multiple,F,!1):L!==!!o.multiple&&(o.defaultValue!=null?xn(l,!!o.multiple,o.defaultValue,!0):xn(l,!!o.multiple,o.multiple?[]:"",!1))}l[mr]=o}catch(W){Ce(e,e.return,W)}}break;case 6:if(gt(t,e),Pt(e),r&4){if(e.stateNode===null)throw Error(a(162));l=e.stateNode,o=e.memoizedProps;try{l.nodeValue=o}catch(W){Ce(e,e.return,W)}}break;case 3:if(gt(t,e),Pt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{lr(t.containerInfo)}catch(W){Ce(e,e.return,W)}break;case 4:gt(t,e),Pt(e);break;case 13:gt(t,e),Pt(e),l=e.child,l.flags&8192&&(o=l.memoizedState!==null,l.stateNode.isHidden=o,!o||l.alternate!==null&&l.alternate.memoizedState!==null||(Oi=Pe())),r&4&&Qu(e);break;case 22:if(_=n!==null&&n.memoizedState!==null,e.mode&1?(Fe=(k=Fe)||_,gt(t,e),Fe=k):gt(t,e),Pt(e),r&8192){if(k=e.memoizedState!==null,(e.stateNode.isHidden=k)&&!_&&(e.mode&1)!==0)for(U=e,_=e.child;_!==null;){for(A=U=_;U!==null;){switch(L=U,F=L.child,L.tag){case 0:case 11:case 14:case 15:Nr(4,L,L.return);break;case 1:Fn(L,L.return);var b=L.stateNode;if(typeof b.componentWillUnmount=="function"){r=L,n=L.return;try{t=r,b.props=t.memoizedProps,b.state=t.memoizedState,b.componentWillUnmount()}catch(W){Ce(r,n,W)}}break;case 5:Fn(L,L.return);break;case 22:if(L.memoizedState!==null){Ju(A);continue}}F!==null?(F.return=L,U=F):Ju(A)}_=_.sibling}e:for(_=null,A=e;;){if(A.tag===5){if(_===null){_=A;try{l=A.stateNode,k?(o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(p=A.stateNode,m=A.memoizedProps.style,s=m!=null&&m.hasOwnProperty("display")?m.display:null,p.style.display=Ts("display",s))}catch(W){Ce(e,e.return,W)}}}else if(A.tag===6){if(_===null)try{A.stateNode.nodeValue=k?"":A.memoizedProps}catch(W){Ce(e,e.return,W)}}else if((A.tag!==22&&A.tag!==23||A.memoizedState===null||A===e)&&A.child!==null){A.child.return=A,A=A.child;continue}if(A===e)break e;for(;A.sibling===null;){if(A.return===null||A.return===e)break e;_===A&&(_=null),A=A.return}_===A&&(_=null),A.sibling.return=A.return,A=A.sibling}}break;case 19:gt(t,e),Pt(e),r&4&&Qu(e);break;case 21:break;default:gt(t,e),Pt(e)}}function Pt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if($u(n)){var r=n;break e}n=n.return}throw Error(a(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Kn(l,""),r.flags&=-33);var o=Hu(e);Di(e,o,l);break;case 3:case 4:var s=r.stateNode.containerInfo,p=Hu(e);Ai(e,p,s);break;default:throw Error(a(161))}}catch(m){Ce(e,e.return,m)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function zf(e,t,n){U=e,Xu(e)}function Xu(e,t,n){for(var r=(e.mode&1)!==0;U!==null;){var l=U,o=l.child;if(l.tag===22&&r){var s=l.memoizedState!==null||Rl;if(!s){var p=l.alternate,m=p!==null&&p.memoizedState!==null||Fe;p=Rl;var k=Fe;if(Rl=s,(Fe=m)&&!k)for(U=l;U!==null;)s=U,m=s.child,s.tag===22&&s.memoizedState!==null?Zu(l):m!==null?(m.return=s,U=m):Zu(l);for(;o!==null;)U=o,Xu(o),o=o.sibling;U=l,Rl=p,Fe=k}qu(e)}else(l.subtreeFlags&8772)!==0&&o!==null?(o.return=l,U=o):qu(e)}}function qu(e){for(;U!==null;){var t=U;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Fe||_l(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Fe)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:ht(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Ja(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ja(t,s,n)}break;case 5:var p=t.stateNode;if(n===null&&t.flags&4){n=p;var m=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":m.autoFocus&&n.focus();break;case"img":m.src&&(n.src=m.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var k=t.alternate;if(k!==null){var _=k.memoizedState;if(_!==null){var A=_.dehydrated;A!==null&&lr(A)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(a(163))}Fe||t.flags&512&&_i(t)}catch(L){Ce(t,t.return,L)}}if(t===e){U=null;break}if(n=t.sibling,n!==null){n.return=t.return,U=n;break}U=t.return}}function Ju(e){for(;U!==null;){var t=U;if(t===e){U=null;break}var n=t.sibling;if(n!==null){n.return=t.return,U=n;break}U=t.return}}function Zu(e){for(;U!==null;){var t=U;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{_l(4,t)}catch(m){Ce(t,n,m)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(m){Ce(t,l,m)}}var o=t.return;try{_i(t)}catch(m){Ce(t,o,m)}break;case 5:var s=t.return;try{_i(t)}catch(m){Ce(t,s,m)}}}catch(m){Ce(t,t.return,m)}if(t===e){U=null;break}var p=t.sibling;if(p!==null){p.return=t.return,U=p;break}U=t.return}}var Ff=Math.ceil,Al=te.ReactCurrentDispatcher,Gi=te.ReactCurrentOwner,at=te.ReactCurrentBatchConfig,ne=0,_e=null,Ne=null,Ge=0,nt=0,Un=Wt(0),Le=0,Ir=null,pn=0,Dl=0,Bi=0,jr=null,Ye=null,Oi=0,Vn=1/0,Gt=null,Gl=!1,Mi=null,Xt=null,Bl=!1,qt=null,Ol=0,Lr=0,zi=null,Ml=-1,zl=0;function be(){return(ne&6)!==0?Pe():Ml!==-1?Ml:Ml=Pe()}function Jt(e){return(e.mode&1)===0?1:(ne&2)!==0&&Ge!==0?Ge&-Ge:kf.transition!==null?(zl===0&&(zl=Hs()),zl):(e=ce,e!==0||(e=window.event,e=e===void 0?16:ta(e.type)),e)}function vt(e,t,n,r){if(50<Lr)throw Lr=0,zi=null,Error(a(185));Zn(e,n,r),((ne&2)===0||e!==_e)&&(e===_e&&((ne&2)===0&&(Dl|=n),Le===4&&Zt(e,Ge)),Xe(e,r),n===1&&ne===0&&(t.mode&1)===0&&(Vn=Pe()+500,pl&&Ht()))}function Xe(e,t){var n=e.callbackNode;Cd(e,t);var r=Qr(e,e===_e?Ge:0);if(r===0)n!==null&&bs(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&bs(n),t===1)e.tag===0?Cf(tc.bind(null,e)):Fa(tc.bind(null,e)),yf(function(){(ne&6)===0&&Ht()}),n=null;else{switch(Ks(r)){case 1:n=yo;break;case 4:n=Ws;break;case 16:n=Wr;break;case 536870912:n=$s;break;default:n=Wr}n=uc(n,ec.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function ec(e,t){if(Ml=-1,zl=0,(ne&6)!==0)throw Error(a(327));var n=e.callbackNode;if(bn()&&e.callbackNode!==n)return null;var r=Qr(e,e===_e?Ge:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Fl(e,r);else{t=r;var l=ne;ne|=2;var o=rc();(_e!==e||Ge!==t)&&(Gt=null,Vn=Pe()+500,mn(e,t));do try{bf();break}catch(p){nc(e,p)}while(!0);ri(),Al.current=o,ne=l,Ne!==null?t=0:(_e=null,Ge=0,t=Le)}if(t!==0){if(t===2&&(l=xo(e),l!==0&&(r=l,t=Fi(e,l))),t===1)throw n=Ir,mn(e,0),Zt(e,r),Xe(e,Pe()),n;if(t===6)Zt(e,r);else{if(l=e.current.alternate,(r&30)===0&&!Uf(l)&&(t=Fl(e,r),t===2&&(o=xo(e),o!==0&&(r=o,t=Fi(e,o))),t===1))throw n=Ir,mn(e,0),Zt(e,r),Xe(e,Pe()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(a(345));case 2:gn(e,Ye,Gt);break;case 3:if(Zt(e,r),(r&130023424)===r&&(t=Oi+500-Pe(),10<t)){if(Qr(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){be(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Ho(gn.bind(null,e,Ye,Gt),t);break}gn(e,Ye,Gt);break;case 4:if(Zt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var s=31-dt(r);o=1<<s,s=t[s],s>l&&(l=s),r&=~o}if(r=l,r=Pe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Ff(r/1960))-r,10<r){e.timeoutHandle=Ho(gn.bind(null,e,Ye,Gt),r);break}gn(e,Ye,Gt);break;case 5:gn(e,Ye,Gt);break;default:throw Error(a(329))}}}return Xe(e,Pe()),e.callbackNode===n?ec.bind(null,e):null}function Fi(e,t){var n=jr;return e.current.memoizedState.isDehydrated&&(mn(e,t).flags|=256),e=Fl(e,t),e!==2&&(t=Ye,Ye=n,t!==null&&Ui(t)),e}function Ui(e){Ye===null?Ye=e:Ye.push.apply(Ye,e)}function Uf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],o=l.getSnapshot;l=l.value;try{if(!ft(o(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Zt(e,t){for(t&=~Bi,t&=~Dl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-dt(t),r=1<<n;e[n]=-1,t&=~r}}function tc(e){if((ne&6)!==0)throw Error(a(327));bn();var t=Qr(e,0);if((t&1)===0)return Xe(e,Pe()),null;var n=Fl(e,t);if(e.tag!==0&&n===2){var r=xo(e);r!==0&&(t=r,n=Fi(e,r))}if(n===1)throw n=Ir,mn(e,0),Zt(e,t),Xe(e,Pe()),n;if(n===6)throw Error(a(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,gn(e,Ye,Gt),Xe(e,Pe()),null}function Vi(e,t){var n=ne;ne|=1;try{return e(t)}finally{ne=n,ne===0&&(Vn=Pe()+500,pl&&Ht())}}function hn(e){qt!==null&&qt.tag===0&&(ne&6)===0&&bn();var t=ne;ne|=1;var n=at.transition,r=ce;try{if(at.transition=null,ce=1,e)return e()}finally{ce=r,at.transition=n,ne=t,(ne&6)===0&&Ht()}}function bi(){nt=Un.current,he(Un)}function mn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,vf(n)),Ne!==null)for(n=Ne.return;n!==null;){var r=n;switch(Jo(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&dl();break;case 3:Mn(),he(He),he(Oe),di();break;case 5:ui(r);break;case 4:Mn();break;case 13:he(ye);break;case 19:he(ye);break;case 10:li(r.type._context);break;case 22:case 23:bi()}n=n.return}if(_e=e,Ne=e=en(e.current,null),Ge=nt=t,Le=0,Ir=null,Bi=Dl=pn=0,Ye=jr=null,cn!==null){for(t=0;t<cn.length;t++)if(n=cn[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=l,r.next=s}n.pending=r}cn=null}return e}function nc(e,t){do{var n=Ne;try{if(ri(),kl.current=Il,Pl){for(var r=xe.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}Pl=!1}if(fn=0,Re=je=xe=null,Sr=!1,Cr=0,Gi.current=null,n===null||n.return===null){Le=1,Ir=t,Ne=null;break}e:{var o=e,s=n.return,p=n,m=t;if(t=Ge,p.flags|=32768,m!==null&&typeof m=="object"&&typeof m.then=="function"){var k=m,_=p,A=_.tag;if((_.mode&1)===0&&(A===0||A===11||A===15)){var L=_.alternate;L?(_.updateQueue=L.updateQueue,_.memoizedState=L.memoizedState,_.lanes=L.lanes):(_.updateQueue=null,_.memoizedState=null)}var F=Iu(s);if(F!==null){F.flags&=-257,ju(F,s,p,o,t),F.mode&1&&Nu(o,k,t),t=F,m=k;var b=t.updateQueue;if(b===null){var W=new Set;W.add(m),t.updateQueue=W}else b.add(m);break e}else{if((t&1)===0){Nu(o,k,t),Wi();break e}m=Error(a(426))}}else if(ve&&p.mode&1){var Ee=Iu(s);if(Ee!==null){(Ee.flags&65536)===0&&(Ee.flags|=256),ju(Ee,s,p,o,t),ti(zn(m,p));break e}}o=m=zn(m,p),Le!==4&&(Le=2),jr===null?jr=[o]:jr.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var w=Pu(o,m,t);qa(o,w);break e;case 1:p=m;var v=o.type,C=o.stateNode;if((o.flags&128)===0&&(typeof v.getDerivedStateFromError=="function"||C!==null&&typeof C.componentDidCatch=="function"&&(Xt===null||!Xt.has(C)))){o.flags|=65536,t&=-t,o.lanes|=t;var O=Eu(o,p,t);qa(o,O);break e}}o=o.return}while(o!==null)}oc(n)}catch($){t=$,Ne===n&&n!==null&&(Ne=n=n.return);continue}break}while(!0)}function rc(){var e=Al.current;return Al.current=Il,e===null?Il:e}function Wi(){(Le===0||Le===3||Le===2)&&(Le=4),_e===null||(pn&268435455)===0&&(Dl&268435455)===0||Zt(_e,Ge)}function Fl(e,t){var n=ne;ne|=2;var r=rc();(_e!==e||Ge!==t)&&(Gt=null,mn(e,t));do try{Vf();break}catch(l){nc(e,l)}while(!0);if(ri(),ne=n,Al.current=r,Ne!==null)throw Error(a(261));return _e=null,Ge=0,Le}function Vf(){for(;Ne!==null;)lc(Ne)}function bf(){for(;Ne!==null&&!pd();)lc(Ne)}function lc(e){var t=ac(e.alternate,e,nt);e.memoizedProps=e.pendingProps,t===null?oc(e):Ne=t,Gi.current=null}function oc(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=Gf(n,t,nt),n!==null){Ne=n;return}}else{if(n=Bf(n,t),n!==null){n.flags&=32767,Ne=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Le=6,Ne=null;return}}if(t=t.sibling,t!==null){Ne=t;return}Ne=t=e}while(t!==null);Le===0&&(Le=5)}function gn(e,t,n){var r=ce,l=at.transition;try{at.transition=null,ce=1,Wf(e,t,n,r)}finally{at.transition=l,ce=r}return null}function Wf(e,t,n,r){do bn();while(qt!==null);if((ne&6)!==0)throw Error(a(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(a(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(kd(e,o),e===_e&&(Ne=_e=null,Ge=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Bl||(Bl=!0,uc(Wr,function(){return bn(),null})),o=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||o){o=at.transition,at.transition=null;var s=ce;ce=1;var p=ne;ne|=4,Gi.current=null,Mf(e,n),Yu(n,e),cf(Wo),qr=!!bo,Wo=bo=null,e.current=n,zf(n),hd(),ne=p,ce=s,at.transition=o}else e.current=n;if(Bl&&(Bl=!1,qt=e,Ol=l),o=e.pendingLanes,o===0&&(Xt=null),vd(n.stateNode),Xe(e,Pe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(Gl)throw Gl=!1,e=Mi,Mi=null,e;return(Ol&1)!==0&&e.tag!==0&&bn(),o=e.pendingLanes,(o&1)!==0?e===zi?Lr++:(Lr=0,zi=e):Lr=0,Ht(),null}function bn(){if(qt!==null){var e=Ks(Ol),t=at.transition,n=ce;try{if(at.transition=null,ce=16>e?16:e,qt===null)var r=!1;else{if(e=qt,qt=null,Ol=0,(ne&6)!==0)throw Error(a(331));var l=ne;for(ne|=4,U=e.current;U!==null;){var o=U,s=o.child;if((U.flags&16)!==0){var p=o.deletions;if(p!==null){for(var m=0;m<p.length;m++){var k=p[m];for(U=k;U!==null;){var _=U;switch(_.tag){case 0:case 11:case 15:Nr(8,_,o)}var A=_.child;if(A!==null)A.return=_,U=A;else for(;U!==null;){_=U;var L=_.sibling,F=_.return;if(Wu(_),_===k){U=null;break}if(L!==null){L.return=F,U=L;break}U=F}}}var b=o.alternate;if(b!==null){var W=b.child;if(W!==null){b.child=null;do{var Ee=W.sibling;W.sibling=null,W=Ee}while(W!==null)}}U=o}}if((o.subtreeFlags&2064)!==0&&s!==null)s.return=o,U=s;else e:for(;U!==null;){if(o=U,(o.flags&2048)!==0)switch(o.tag){case 0:case 11:case 15:Nr(9,o,o.return)}var w=o.sibling;if(w!==null){w.return=o.return,U=w;break e}U=o.return}}var v=e.current;for(U=v;U!==null;){s=U;var C=s.child;if((s.subtreeFlags&2064)!==0&&C!==null)C.return=s,U=C;else e:for(s=v;U!==null;){if(p=U,(p.flags&2048)!==0)try{switch(p.tag){case 0:case 11:case 15:_l(9,p)}}catch($){Ce(p,p.return,$)}if(p===s){U=null;break e}var O=p.sibling;if(O!==null){O.return=p.return,U=O;break e}U=p.return}}if(ne=l,Ht(),wt&&typeof wt.onPostCommitFiberRoot=="function")try{wt.onPostCommitFiberRoot($r,e)}catch{}r=!0}return r}finally{ce=n,at.transition=t}}return!1}function ic(e,t,n){t=zn(n,t),t=Pu(e,t,1),e=Qt(e,t,1),t=be(),e!==null&&(Zn(e,1,t),Xe(e,t))}function Ce(e,t,n){if(e.tag===3)ic(e,e,n);else for(;t!==null;){if(t.tag===3){ic(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Xt===null||!Xt.has(r))){e=zn(n,e),e=Eu(t,e,1),t=Qt(t,e,1),e=be(),t!==null&&(Zn(t,1,e),Xe(t,e));break}}t=t.return}}function $f(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=be(),e.pingedLanes|=e.suspendedLanes&n,_e===e&&(Ge&n)===n&&(Le===4||Le===3&&(Ge&130023424)===Ge&&500>Pe()-Oi?mn(e,0):Bi|=n),Xe(e,t)}function sc(e,t){t===0&&((e.mode&1)===0?t=1:(t=Kr,Kr<<=1,(Kr&130023424)===0&&(Kr=4194304)));var n=be();e=_t(e,t),e!==null&&(Zn(e,t,n),Xe(e,n))}function Hf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),sc(e,n)}function Kf(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(a(314))}r!==null&&r.delete(t),sc(e,n)}var ac;ac=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||He.current)Qe=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return Qe=!1,Df(e,t,n);Qe=(e.flags&131072)!==0}else Qe=!1,ve&&(t.flags&1048576)!==0&&Ua(t,ml,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Tl(e,t),e=t.pendingProps;var l=Rn(t,Oe.current);On(t,n),l=hi(null,t,r,e,l,n);var o=mi();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ke(r)?(o=!0,fl(t)):o=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,si(t),l.updater=jl,t.stateNode=l,l._reactInternals=t,Si(t,r,e,n),t=Ei(null,t,r,!0,o,n)):(t.tag=0,ve&&o&&qo(t),Ve(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Tl(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=Yf(r),e=ht(r,e),l){case 0:t=Pi(null,t,r,e,n);break e;case 1:t=Du(null,t,r,e,n);break e;case 11:t=Lu(null,t,r,e,n);break e;case 14:t=Tu(null,t,r,ht(r.type,e),n);break e}throw Error(a(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:ht(r,l),Pi(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:ht(r,l),Du(e,t,r,l,n);case 3:e:{if(Gu(t),e===null)throw Error(a(387));r=t.pendingProps,o=t.memoizedState,l=o.element,Xa(e,t),Sl(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){l=zn(Error(a(423)),t),t=Bu(e,t,r,n,l);break e}else if(r!==l){l=zn(Error(a(424)),t),t=Bu(e,t,r,n,l);break e}else for(tt=bt(t.stateNode.containerInfo.firstChild),et=t,ve=!0,pt=null,n=Qa(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Dn(),r===l){t=Dt(e,t,n);break e}Ve(e,t,r,n)}t=t.child}return t;case 5:return Za(t),e===null&&ei(t),r=t.type,l=t.pendingProps,o=e!==null?e.memoizedProps:null,s=l.children,$o(r,l)?s=null:o!==null&&$o(r,o)&&(t.flags|=32),Au(e,t),Ve(e,t,s,n),t.child;case 6:return e===null&&ei(t),null;case 13:return Ou(e,t,n);case 4:return ai(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Gn(t,null,r,n):Ve(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:ht(r,l),Lu(e,t,r,l,n);case 7:return Ve(e,t,t.pendingProps,n),t.child;case 8:return Ve(e,t,t.pendingProps.children,n),t.child;case 12:return Ve(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,o=t.memoizedProps,s=l.value,fe(yl,r._currentValue),r._currentValue=s,o!==null)if(ft(o.value,s)){if(o.children===l.children&&!He.current){t=Dt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var p=o.dependencies;if(p!==null){s=o.child;for(var m=p.firstContext;m!==null;){if(m.context===r){if(o.tag===1){m=At(-1,n&-n),m.tag=2;var k=o.updateQueue;if(k!==null){k=k.shared;var _=k.pending;_===null?m.next=m:(m.next=_.next,_.next=m),k.pending=m}}o.lanes|=n,m=o.alternate,m!==null&&(m.lanes|=n),oi(o.return,n,t),p.lanes|=n;break}m=m.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(a(341));s.lanes|=n,p=s.alternate,p!==null&&(p.lanes|=n),oi(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Ve(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,On(t,n),l=it(l),r=r(l),t.flags|=1,Ve(e,t,r,n),t.child;case 14:return r=t.type,l=ht(r,t.pendingProps),l=ht(r.type,l),Tu(e,t,r,l,n);case 15:return Ru(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:ht(r,l),Tl(e,t),t.tag=1,Ke(r)?(e=!0,fl(t)):e=!1,On(t,n),Cu(t,r,l),Si(t,r,l,n),Ei(null,t,r,!0,e,n);case 19:return zu(e,t,n);case 22:return _u(e,t,n)}throw Error(a(156,t.tag))};function uc(e,t){return Vs(e,t)}function Qf(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ut(e,t,n,r){return new Qf(e,t,n,r)}function $i(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Yf(e){if(typeof e=="function")return $i(e)?1:0;if(e!=null){if(e=e.$$typeof,e===rt)return 11;if(e===Ie)return 14}return 2}function en(e,t){var n=e.alternate;return n===null?(n=ut(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ul(e,t,n,r,l,o){var s=2;if(r=e,typeof e=="function")$i(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case ae:return vn(n.children,l,o,t);case me:s=8,l|=8;break;case Te:return e=ut(12,n,t,l|2),e.elementType=Te,e.lanes=o,e;case Be:return e=ut(13,n,t,l),e.elementType=Be,e.lanes=o,e;case We:return e=ut(19,n,t,l),e.elementType=We,e.lanes=o,e;case Se:return Vl(n,l,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ue:s=10;break e;case It:s=9;break e;case rt:s=11;break e;case Ie:s=14;break e;case $e:s=16,r=null;break e}throw Error(a(130,e==null?e:typeof e,""))}return t=ut(s,n,t,l),t.elementType=e,t.type=r,t.lanes=o,t}function vn(e,t,n,r){return e=ut(7,e,r,t),e.lanes=n,e}function Vl(e,t,n,r){return e=ut(22,e,r,t),e.elementType=Se,e.lanes=n,e.stateNode={isHidden:!1},e}function Hi(e,t,n){return e=ut(6,e,null,t),e.lanes=n,e}function Ki(e,t,n){return t=ut(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Xf(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=wo(0),this.expirationTimes=wo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wo(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Qi(e,t,n,r,l,o,s,p,m){return e=new Xf(e,t,n,p,m),t===1?(t=1,o===!0&&(t|=8)):t=0,o=ut(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},si(o),e}function qf(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:le,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function cc(e){if(!e)return $t;e=e._reactInternals;e:{if(ln(e)!==e||e.tag!==1)throw Error(a(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ke(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(a(171))}if(e.tag===1){var n=e.type;if(Ke(n))return Ma(e,n,t)}return t}function dc(e,t,n,r,l,o,s,p,m){return e=Qi(n,r,!0,e,l,o,s,p,m),e.context=cc(null),n=e.current,r=be(),l=Jt(n),o=At(r,l),o.callback=t??null,Qt(n,o,l),e.current.lanes=l,Zn(e,l,r),Xe(e,r),e}function bl(e,t,n,r){var l=t.current,o=be(),s=Jt(l);return n=cc(n),t.context===null?t.context=n:t.pendingContext=n,t=At(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Qt(l,t,s),e!==null&&(vt(e,l,s,o),wl(e,l,s)),s}function Wl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function fc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Yi(e,t){fc(e,t),(e=e.alternate)&&fc(e,t)}function Jf(){return null}var pc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Xi(e){this._internalRoot=e}$l.prototype.render=Xi.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(a(409));bl(e,t,null,null)},$l.prototype.unmount=Xi.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;hn(function(){bl(null,e,null,null)}),t[jt]=null}};function $l(e){this._internalRoot=e}$l.prototype.unstable_scheduleHydration=function(e){if(e){var t=Xs();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ft.length&&t!==0&&t<Ft[n].priority;n++);Ft.splice(n,0,e),n===0&&Zs(e)}};function qi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Hl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function hc(){}function Zf(e,t,n,r,l){if(l){if(typeof r=="function"){var o=r;r=function(){var k=Wl(s);o.call(k)}}var s=dc(t,r,e,0,null,!1,!1,"",hc);return e._reactRootContainer=s,e[jt]=s.current,pr(e.nodeType===8?e.parentNode:e),hn(),s}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var p=r;r=function(){var k=Wl(m);p.call(k)}}var m=Qi(e,0,!1,null,null,!1,!1,"",hc);return e._reactRootContainer=m,e[jt]=m.current,pr(e.nodeType===8?e.parentNode:e),hn(function(){bl(t,m,n,r)}),m}function Kl(e,t,n,r,l){var o=n._reactRootContainer;if(o){var s=o;if(typeof l=="function"){var p=l;l=function(){var m=Wl(s);p.call(m)}}bl(t,s,e,l)}else s=Zf(n,t,e,l,r);return Wl(s)}Qs=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Jn(t.pendingLanes);n!==0&&(So(t,n|1),Xe(t,Pe()),(ne&6)===0&&(Vn=Pe()+500,Ht()))}break;case 13:hn(function(){var r=_t(e,1);if(r!==null){var l=be();vt(r,e,1,l)}}),Yi(e,1)}},Co=function(e){if(e.tag===13){var t=_t(e,134217728);if(t!==null){var n=be();vt(t,e,134217728,n)}Yi(e,134217728)}},Ys=function(e){if(e.tag===13){var t=Jt(e),n=_t(e,t);if(n!==null){var r=be();vt(n,e,t,r)}Yi(e,t)}},Xs=function(){return ce},qs=function(e,t){var n=ce;try{return ce=e,t()}finally{ce=n}},ho=function(e,t,n){switch(t){case"input":if(oo(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=cl(r);if(!l)throw Error(a(90));Ss(r),oo(r,l)}}}break;case"textarea":Ns(e,n);break;case"select":t=n.value,t!=null&&xn(e,!!n.multiple,t,!1)}},Gs=Vi,Bs=hn;var ep={usingClientEntryPoint:!1,Events:[gr,Ln,cl,As,Ds,Vi]},Tr={findFiberByHostInstance:on,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},tp={bundleType:Tr.bundleType,version:Tr.version,rendererPackageName:Tr.rendererPackageName,rendererConfig:Tr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:te.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Fs(e),e===null?null:e.stateNode},findFiberByHostInstance:Tr.findFiberByHostInstance||Jf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ql=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ql.isDisabled&&Ql.supportsFiber)try{$r=Ql.inject(tp),wt=Ql}catch{}}return qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ep,qe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!qi(t))throw Error(a(200));return qf(e,t,null,n)},qe.createRoot=function(e,t){if(!qi(e))throw Error(a(299));var n=!1,r="",l=pc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Qi(e,1,!1,null,null,n,!1,r,l),e[jt]=t.current,pr(e.nodeType===8?e.parentNode:e),new Xi(t)},qe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=Fs(t),e=e===null?null:e.stateNode,e},qe.flushSync=function(e){return hn(e)},qe.hydrate=function(e,t,n){if(!Hl(t))throw Error(a(200));return Kl(null,e,t,!0,n)},qe.hydrateRoot=function(e,t,n){if(!qi(e))throw Error(a(405));var r=n!=null&&n.hydratedSources||null,l=!1,o="",s=pc;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=dc(t,null,e,1,n??null,l,!1,o,s),e[jt]=t.current,pr(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new $l(t)},qe.render=function(e,t,n){if(!Hl(t))throw Error(a(200));return Kl(null,e,t,!1,n)},qe.unmountComponentAtNode=function(e){if(!Hl(e))throw Error(a(40));return e._reactRootContainer?(hn(function(){Kl(null,null,e,!1,function(){e._reactRootContainer=null,e[jt]=null})}),!0):!1},qe.unstable_batchedUpdates=Vi,qe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Hl(n))throw Error(a(200));if(e==null||e._reactInternals===void 0)throw Error(a(38));return Kl(e,t,n,!1,r)},qe.version="18.3.1-next-f1338f8080-20240426",qe}var Cc;function Ac(){if(Cc)return es.exports;Cc=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(u){console.error(u)}}return i(),es.exports=ap(),es.exports}var kc;function up(){if(kc)return Yl;kc=1;var i=Ac();return Yl.createRoot=i.createRoot,Yl.hydrateRoot=i.hydrateRoot,Yl}var cp=up();const dp=Rc(cp);/**
 * react-router v7.18.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var fs=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,Dc=/^[\\/]{2}/;function fp(i,u){return u+i.replace(/\\/g,"/")}var Pc="popstate";function Ec(i){return typeof i=="object"&&i!=null&&"pathname"in i&&"search"in i&&"hash"in i&&"state"in i&&"key"in i}function pp(i={}){function u(f,h){let{pathname:g="/",search:P="",hash:S=""}=yn(f.location.hash.substring(1));return!g.startsWith("/")&&!g.startsWith(".")&&(g="/"+g),is("",{pathname:g,search:P,hash:S},h.state&&h.state.usr||null,h.state&&h.state.key||"default")}function a(f,h){let g=f.document.querySelector("base"),P="";if(g&&g.getAttribute("href")){let S=f.location.href,x=S.indexOf("#");P=x===-1?S:S.slice(0,x)}return P+"#"+(typeof h=="string"?h:Ar(h))}function d(f,h){xt(f.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(h)})`)}return mp(u,a,d,i)}function we(i,u){if(i===!1||i===null||typeof i>"u")throw new Error(u)}function xt(i,u){if(!i){typeof console<"u"&&console.warn(u);try{throw new Error(u)}catch{}}}function hp(){return Math.random().toString(36).substring(2,10)}function Nc(i,u){return{usr:i.state,key:i.key,idx:u,masked:i.mask?{pathname:i.pathname,search:i.search,hash:i.hash}:void 0}}function is(i,u,a=null,d,f){return{pathname:typeof i=="string"?i:i.pathname,search:"",hash:"",...typeof u=="string"?yn(u):u,state:a,key:u&&u.key||d||hp(),mask:f}}function Ar({pathname:i="/",search:u="",hash:a=""}){return u&&u!=="?"&&(i+=u.charAt(0)==="?"?u:"?"+u),a&&a!=="#"&&(i+=a.charAt(0)==="#"?a:"#"+a),i}function yn(i){let u={};if(i){let a=i.indexOf("#");a>=0&&(u.hash=i.substring(a),i=i.substring(0,a));let d=i.indexOf("?");d>=0&&(u.search=i.substring(d),i=i.substring(0,d)),i&&(u.pathname=i)}return u}function mp(i,u,a,d={}){let{window:f=document.defaultView,v5Compat:h=!1}=d,g=f.history,P="POP",S=null,x=I();x==null&&(x=0,g.replaceState({...g.state,idx:x},""));function I(){return(g.state||{idx:null}).idx}function N(){P="POP";let T=I(),G=T==null?null:T-x;x=T,S&&S({action:P,location:B.location,delta:G})}function j(T,G){P="PUSH";let H=Ec(T)?T:is(B.location,T,G);a&&a(H,T),x=I()+1;let q=Nc(H,x),te=B.createHref(H.mask||H);try{g.pushState(q,"",te)}catch(re){if(re instanceof DOMException&&re.name==="DataCloneError")throw re;f.location.assign(te)}h&&S&&S({action:P,location:B.location,delta:1})}function M(T,G){P="REPLACE";let H=Ec(T)?T:is(B.location,T,G);a&&a(H,T),x=I();let q=Nc(H,x),te=B.createHref(H.mask||H);g.replaceState(q,"",te),h&&S&&S({action:P,location:B.location,delta:0})}function D(T){return gp(f,T)}let B={get action(){return P},get location(){return i(f,g)},listen(T){if(S)throw new Error("A history only accepts one active listener");return f.addEventListener(Pc,N),S=T,()=>{f.removeEventListener(Pc,N),S=null}},createHref(T){return u(f,T)},createURL:D,encodeLocation(T){let G=D(T);return{pathname:G.pathname,search:G.search,hash:G.hash}},push:j,replace:M,go(T){return g.go(T)}};return B}function gp(i,u,a=!1){let d="http://localhost";i&&(d=i.location.origin!=="null"?i.location.origin:i.location.href),we(d,"No window.location.(origin|href) available to create URL");let f=typeof u=="string"?u:Ar(u);return f=f.replace(/ $/,"%20"),!a&&Dc.test(f)&&(f=d+f),new URL(f,d)}function Gc(i,u,a="/"){return vp(i,u,a,!1)}function vp(i,u,a,d,f){let h=typeof u=="string"?yn(u):u,g=Bt(h.pathname||"/",a);if(g==null)return null;let P=yp(i),S=null,x=Lp(g);for(let I=0;S==null&&I<P.length;++I)S=jp(P[I],x,d);return S}function yp(i){let u=Bc(i);return xp(u),u}function Bc(i,u=[],a=[],d="",f=!1){let h=(g,P,S=f,x)=>{let I={relativePath:x===void 0?g.path||"":x,caseSensitive:g.caseSensitive===!0,childrenIndex:P,route:g};if(I.relativePath.startsWith("/")){if(!I.relativePath.startsWith(d)&&S)return;we(I.relativePath.startsWith(d),`Absolute route path "${I.relativePath}" nested under path "${d}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),I.relativePath=I.relativePath.slice(d.length)}let N=yt([d,I.relativePath]),j=a.concat(I);g.children&&g.children.length>0&&(we(g.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${N}".`),Bc(g.children,u,j,N,S)),!(g.path==null&&!g.index)&&u.push({path:N,score:Np(N,g.index),routesMeta:j.map((M,D)=>{let[B,T]=zc(M.relativePath,M.caseSensitive,D===j.length-1);return{...M,matcher:B,compiledParams:T}})})};return i.forEach((g,P)=>{var S;if(g.path===""||!((S=g.path)!=null&&S.includes("?")))h(g,P);else for(let x of Oc(g.path))h(g,P,!0,x)}),u}function Oc(i){let u=i.split("/");if(u.length===0)return[];let[a,...d]=u,f=a.endsWith("?"),h=a.replace(/\?$/,"");if(d.length===0)return f?[h,""]:[h];let g=Oc(d.join("/")),P=[];return P.push(...g.map(S=>S===""?h:[h,S].join("/"))),f&&P.push(...g),P.map(S=>i.startsWith("/")&&S===""?"/":S)}function xp(i){i.sort((u,a)=>u.score!==a.score?a.score-u.score:Ip(u.routesMeta.map(d=>d.childrenIndex),a.routesMeta.map(d=>d.childrenIndex)))}var wp=/^:[\w-]+$/,Sp=3,Cp=2,kp=1,Pp=10,Ep=-2,Ic=i=>i==="*";function Np(i,u){let a=i.split("/"),d=a.length;return a.some(Ic)&&(d+=Ep),u&&(d+=Cp),a.filter(f=>!Ic(f)).reduce((f,h)=>f+(wp.test(h)?Sp:h===""?kp:Pp),d)}function Ip(i,u){return i.length===u.length&&i.slice(0,-1).every((d,f)=>d===u[f])?i[i.length-1]-u[u.length-1]:0}function jp(i,u,a=!1){let{routesMeta:d}=i,f={},h="/",g=[];for(let P=0;P<d.length;++P){let S=d[P],x=P===d.length-1,I=h==="/"?u:u.slice(h.length)||"/",N={path:S.relativePath,caseSensitive:S.caseSensitive,end:x},j=S.matcher&&S.compiledParams?Mc(N,I,S.matcher,S.compiledParams):Zl(N,I),M=S.route;if(!j&&x&&a&&!d[d.length-1].route.index&&(j=Zl({path:S.relativePath,caseSensitive:S.caseSensitive,end:!1},I)),!j)return null;Object.assign(f,j.params),g.push({params:f,pathname:yt([h,j.pathname]),pathnameBase:_p(yt([h,j.pathnameBase])),route:M}),j.pathnameBase!=="/"&&(h=yt([h,j.pathnameBase]))}return g}function Zl(i,u){typeof i=="string"&&(i={path:i,caseSensitive:!1,end:!0});let[a,d]=zc(i.path,i.caseSensitive,i.end);return Mc(i,u,a,d)}function Mc(i,u,a,d){let f=u.match(a);if(!f)return null;let h=f[0],g=h.replace(/(.)\/+$/,"$1"),P=f.slice(1);return{params:d.reduce((x,{paramName:I,isOptional:N},j)=>{if(I==="*"){let D=P[j]||"";g=h.slice(0,h.length-D.length).replace(/(.)\/+$/,"$1")}const M=P[j];return N&&!M?x[I]=void 0:x[I]=(M||"").replace(/%2F/g,"/"),x},{}),pathname:h,pathnameBase:g,pattern:i}}function zc(i,u=!1,a=!0){xt(i==="*"||!i.endsWith("*")||i.endsWith("/*"),`Route path "${i}" will be treated as if it were "${i.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(/\*$/,"/*")}".`);let d=[],f="^"+i.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(g,P,S,x,I)=>{if(d.push({paramName:P,isOptional:S!=null}),S){let N=I.charAt(x+g.length);return N&&N!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return i.endsWith("*")?(d.push({paramName:"*"}),f+=i==="*"||i==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):a?f+="\\/*$":i!==""&&i!=="/"&&(f+="(?:(?=\\/|$))"),[new RegExp(f,u?void 0:"i"),d]}function Lp(i){try{return i.split("/").map(u=>decodeURIComponent(u).replace(/\//g,"%2F")).join("/")}catch(u){return xt(!1,`The URL path "${i}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${u}).`),i}}function Bt(i,u){if(u==="/")return i;if(!i.toLowerCase().startsWith(u.toLowerCase()))return null;let a=u.endsWith("/")?u.length-1:u.length,d=i.charAt(a);return d&&d!=="/"?null:i.slice(a)||"/"}function Tp(i,u="/"){let{pathname:a,search:d="",hash:f=""}=typeof i=="string"?yn(i):i,h;return a?(a=Uc(a),a.startsWith("/")?h=jc(a.substring(1),"/"):h=jc(a,u)):h=u,{pathname:h,search:Ap(d),hash:Dp(f)}}function jc(i,u){let a=eo(u).split("/");return i.split("/").forEach(f=>{f===".."?a.length>1&&a.pop():f!=="."&&a.push(f)}),a.length>1?a.join("/"):"/"}function rs(i,u,a,d){return`Cannot include a '${i}' character in a manually specified \`to.${u}\` field [${JSON.stringify(d)}].  Please separate it out to the \`to.${a}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Rp(i){return i.filter((u,a)=>a===0||u.route.path&&u.route.path.length>0)}function Fc(i){let u=Rp(i);return u.map((a,d)=>d===u.length-1?a.pathname:a.pathnameBase)}function ps(i,u,a,d=!1){let f;typeof i=="string"?f=yn(i):(f={...i},we(!f.pathname||!f.pathname.includes("?"),rs("?","pathname","search",f)),we(!f.pathname||!f.pathname.includes("#"),rs("#","pathname","hash",f)),we(!f.search||!f.search.includes("#"),rs("#","search","hash",f)));let h=i===""||f.pathname==="",g=h?"/":f.pathname,P;if(g==null)P=a;else{let N=u.length-1;if(!d&&g.startsWith("..")){let j=g.split("/");for(;j[0]==="..";)j.shift(),N-=1;f.pathname=j.join("/")}P=N>=0?u[N]:"/"}let S=Tp(f,P),x=g&&g!=="/"&&g.endsWith("/"),I=(h||g===".")&&a.endsWith("/");return!S.pathname.endsWith("/")&&(x||I)&&(S.pathname+="/"),S}var Uc=i=>i.replace(/[\\/]{2,}/g,"/"),yt=i=>Uc(i.join("/")),eo=i=>i.replace(/\/+$/,""),_p=i=>eo(i).replace(/^\/*/,"/"),Ap=i=>!i||i==="?"?"":i.startsWith("?")?i:"?"+i,Dp=i=>!i||i==="#"?"":i.startsWith("#")?i:"#"+i,Gp=class{constructor(i,u,a,d=!1){this.status=i,this.statusText=u||"",this.internal=d,a instanceof Error?(this.data=a.toString(),this.error=a):this.data=a}};function Bp(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.internal=="boolean"&&"data"in i}function Op(i){let u=i.map(a=>a.route.path).filter(Boolean);return yt(u)||"/"}var Vc=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function bc(i,u){let a=i;if(typeof a!="string"||!fs.test(a))return{absoluteURL:void 0,isExternal:!1,to:a};let d=a,f=!1;if(Vc)try{let h=new URL(window.location.href),g=Dc.test(a)?new URL(fp(a,h.protocol)):new URL(a),P=Bt(g.pathname,u);g.origin===h.origin&&P!=null?a=P+g.search+g.hash:f=!0}catch{xt(!1,`<Link to="${a}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:d,isExternal:f,to:a}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Wc=["POST","PUT","PATCH","DELETE"];new Set(Wc);var Mp=["GET",...Wc];new Set(Mp);var zp=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function Fp(i){try{return zp.includes(new URL(i).protocol)}catch{return!1}}var $n=E.createContext(null);$n.displayName="DataRouter";var to=E.createContext(null);to.displayName="DataRouterState";var $c=E.createContext(!1);function Up(){return E.useContext($c)}var Hc=E.createContext({isTransitioning:!1});Hc.displayName="ViewTransition";var Vp=E.createContext(new Map);Vp.displayName="Fetchers";var bp=E.createContext(null);bp.displayName="Await";var ct=E.createContext(null);ct.displayName="Navigation";var Br=E.createContext(null);Br.displayName="Location";var Et=E.createContext({outlet:null,matches:[],isDataRoute:!1});Et.displayName="Route";var hs=E.createContext(null);hs.displayName="RouteError";var Kc="REACT_ROUTER_ERROR",Wp="REDIRECT",$p="ROUTE_ERROR_RESPONSE";function Hp(i){if(i.startsWith(`${Kc}:${Wp}:{`))try{let u=JSON.parse(i.slice(28));if(typeof u=="object"&&u&&typeof u.status=="number"&&typeof u.statusText=="string"&&typeof u.location=="string"&&typeof u.reloadDocument=="boolean"&&typeof u.replace=="boolean")return u}catch{}}function Kp(i){if(i.startsWith(`${Kc}:${$p}:{`))try{let u=JSON.parse(i.slice(40));if(typeof u=="object"&&u&&typeof u.status=="number"&&typeof u.statusText=="string")return new Gp(u.status,u.statusText,u.data)}catch{}}function Qp(i,{relative:u}={}){we(Or(),"useHref() may be used only in the context of a <Router> component.");let{basename:a,navigator:d}=E.useContext(ct),{hash:f,pathname:h,search:g}=Mr(i,{relative:u}),P=h;return a!=="/"&&(P=h==="/"?a:yt([a,h])),d.createHref({pathname:P,search:g,hash:f})}function Or(){return E.useContext(Br)!=null}function Nt(){return we(Or(),"useLocation() may be used only in the context of a <Router> component."),E.useContext(Br).location}var Qc="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Yc(i){E.useContext(ct).static||E.useLayoutEffect(i)}function Yp(){let{isDataRoute:i}=E.useContext(Et);return i?uh():Xp()}function Xp(){we(Or(),"useNavigate() may be used only in the context of a <Router> component.");let i=E.useContext($n),{basename:u,navigator:a}=E.useContext(ct),{matches:d}=E.useContext(Et),{pathname:f}=Nt(),h=JSON.stringify(Fc(d)),g=E.useRef(!1);return Yc(()=>{g.current=!0}),E.useCallback((S,x={})=>{if(xt(g.current,Qc),!g.current)return;if(typeof S=="number"){a.go(S);return}let I=ps(S,JSON.parse(h),f,x.relative==="path");i==null&&u!=="/"&&(I.pathname=I.pathname==="/"?u:yt([u,I.pathname])),(x.replace?a.replace:a.push)(I,x.state,x)},[u,a,h,f,i])}E.createContext(null);function qp(){let{matches:i}=E.useContext(Et),u=i[i.length-1];return(u==null?void 0:u.params)??{}}function Mr(i,{relative:u}={}){let{matches:a}=E.useContext(Et),{pathname:d}=Nt(),f=JSON.stringify(Fc(a));return E.useMemo(()=>ps(i,JSON.parse(f),d,u==="path"),[i,f,d,u])}function Jp(i,u){return Xc(i,u)}function Xc(i,u,a){var T;we(Or(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:d}=E.useContext(ct),{matches:f}=E.useContext(Et),h=f[f.length-1],g=h?h.params:{},P=h?h.pathname:"/",S=h?h.pathnameBase:"/",x=h&&h.route;{let G=x&&x.path||"";Jc(P,!x||G.endsWith("*")||G.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${P}" (under <Route path="${G}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${G}"> to <Route path="${G==="/"?"*":`${G}/*`}">.`)}let I=Nt(),N;if(u){let G=typeof u=="string"?yn(u):u;we(S==="/"||((T=G.pathname)==null?void 0:T.startsWith(S)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${S}" but pathname "${G.pathname}" was given in the \`location\` prop.`),N=G}else N=I;let j=N.pathname||"/",M=j;if(S!=="/"){let G=S.replace(/^\//,"").split("/");M="/"+j.replace(/^\//,"").split("/").slice(G.length).join("/")}let D=a&&a.state.matches.length?a.state.matches.map(G=>Object.assign(G,{route:a.manifest[G.route.id]||G.route})):Gc(i,{pathname:M});xt(x||D!=null,`No routes matched location "${N.pathname}${N.search}${N.hash}" `),xt(D==null||D[D.length-1].route.element!==void 0||D[D.length-1].route.Component!==void 0||D[D.length-1].route.lazy!==void 0,`Matched leaf route at location "${N.pathname}${N.search}${N.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let B=rh(D&&D.map(G=>Object.assign({},G,{params:Object.assign({},g,G.params),pathname:yt([S,d.encodeLocation?d.encodeLocation(G.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:G.pathname]),pathnameBase:G.pathnameBase==="/"?S:yt([S,d.encodeLocation?d.encodeLocation(G.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:G.pathnameBase])})),f,a);return u&&B?E.createElement(Br.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...N},navigationType:"POP"}},B):B}function Zp(){let i=ah(),u=Bp(i)?`${i.status} ${i.statusText}`:i instanceof Error?i.message:JSON.stringify(i),a=i instanceof Error?i.stack:null,d="rgba(200,200,200, 0.5)",f={padding:"0.5rem",backgroundColor:d},h={padding:"2px 4px",backgroundColor:d},g=null;return console.error("Error handled by React Router default ErrorBoundary:",i),g=E.createElement(E.Fragment,null,E.createElement("p",null,"💿 Hey developer 👋"),E.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",E.createElement("code",{style:h},"ErrorBoundary")," or"," ",E.createElement("code",{style:h},"errorElement")," prop on your route.")),E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},u),a?E.createElement("pre",{style:f},a):null,g)}var eh=E.createElement(Zp,null),qc=class extends E.Component{constructor(i){super(i),this.state={location:i.location,revalidation:i.revalidation,error:i.error}}static getDerivedStateFromError(i){return{error:i}}static getDerivedStateFromProps(i,u){return u.location!==i.location||u.revalidation!=="idle"&&i.revalidation==="idle"?{error:i.error,location:i.location,revalidation:i.revalidation}:{error:i.error!==void 0?i.error:u.error,location:u.location,revalidation:i.revalidation||u.revalidation}}componentDidCatch(i,u){this.props.onError?this.props.onError(i,u):console.error("React Router caught the following error during render",i)}render(){let i=this.state.error;if(this.context&&typeof i=="object"&&i&&"digest"in i&&typeof i.digest=="string"){const a=Kp(i.digest);a&&(i=a)}let u=i!==void 0?E.createElement(Et.Provider,{value:this.props.routeContext},E.createElement(hs.Provider,{value:i,children:this.props.component})):this.props.children;return this.context?E.createElement(th,{error:i},u):u}};qc.contextType=$c;var ls=new WeakMap;function th({children:i,error:u}){let{basename:a}=E.useContext(ct);if(typeof u=="object"&&u&&"digest"in u&&typeof u.digest=="string"){let d=Hp(u.digest);if(d){let f=ls.get(u);if(f)throw f;let h=bc(d.location,a),g=h.absoluteURL||h.to;if(Fp(g))throw new Error("Invalid redirect location");if(Vc&&!ls.get(u))if(h.isExternal||d.reloadDocument)window.location.href=g;else{const P=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(h.to,{replace:d.replace}));throw ls.set(u,P),P}return E.createElement("meta",{httpEquiv:"refresh",content:`0;url=${g}`})}}return i}function nh({routeContext:i,match:u,children:a}){let d=E.useContext($n);return d&&d.static&&d.staticContext&&(u.route.errorElement||u.route.ErrorBoundary)&&(d.staticContext._deepestRenderedBoundaryId=u.route.id),E.createElement(Et.Provider,{value:i},a)}function rh(i,u=[],a){let d=a==null?void 0:a.state;if(i==null){if(!d)return null;if(d.errors)i=d.matches;else if(u.length===0&&!d.initialized&&d.matches.length>0)i=d.matches;else return null}let f=i,h=d==null?void 0:d.errors;if(h!=null){let I=f.findIndex(N=>N.route.id&&(h==null?void 0:h[N.route.id])!==void 0);we(I>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(h).join(",")}`),f=f.slice(0,Math.min(f.length,I+1))}let g=!1,P=-1;if(a&&d){g=d.renderFallback;for(let I=0;I<f.length;I++){let N=f[I];if((N.route.HydrateFallback||N.route.hydrateFallbackElement)&&(P=I),N.route.id){let{loaderData:j,errors:M}=d,D=N.route.loader&&!j.hasOwnProperty(N.route.id)&&(!M||M[N.route.id]===void 0);if(N.route.lazy||D){a.isStatic&&(g=!0),P>=0?f=f.slice(0,P+1):f=[f[0]];break}}}}let S=a==null?void 0:a.onError,x=d&&S?(I,N)=>{var j,M;S(I,{location:d.location,params:((M=(j=d.matches)==null?void 0:j[0])==null?void 0:M.params)??{},pattern:Op(d.matches),errorInfo:N})}:void 0;return f.reduceRight((I,N,j)=>{let M,D=!1,B=null,T=null;d&&(M=h&&N.route.id?h[N.route.id]:void 0,B=N.route.errorElement||eh,g&&(P<0&&j===0?(Jc("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),D=!0,T=null):P===j&&(D=!0,T=N.route.hydrateFallbackElement||null)));let G=u.concat(f.slice(0,j+1)),H=()=>{let q;return M?q=B:D?q=T:N.route.Component?q=E.createElement(N.route.Component,null):N.route.element?q=N.route.element:q=I,E.createElement(nh,{match:N,routeContext:{outlet:I,matches:G,isDataRoute:d!=null},children:q})};return d&&(N.route.ErrorBoundary||N.route.errorElement||j===0)?E.createElement(qc,{location:d.location,revalidation:d.revalidation,component:B,error:M,children:H(),routeContext:{outlet:null,matches:G,isDataRoute:!0},onError:x}):H()},null)}function ms(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function lh(i){let u=E.useContext($n);return we(u,ms(i)),u}function oh(i){let u=E.useContext(to);return we(u,ms(i)),u}function ih(i){let u=E.useContext(Et);return we(u,ms(i)),u}function gs(i){let u=ih(i),a=u.matches[u.matches.length-1];return we(a.route.id,`${i} can only be used on routes that contain a unique "id"`),a.route.id}function sh(){return gs("useRouteId")}function ah(){var d;let i=E.useContext(hs),u=oh("useRouteError"),a=gs("useRouteError");return i!==void 0?i:(d=u.errors)==null?void 0:d[a]}function uh(){let{router:i}=lh("useNavigate"),u=gs("useNavigate"),a=E.useRef(!1);return Yc(()=>{a.current=!0}),E.useCallback(async(f,h={})=>{xt(a.current,Qc),a.current&&(typeof f=="number"?await i.navigate(f):await i.navigate(f,{fromRouteId:u,...h}))},[i,u])}var Lc={};function Jc(i,u,a){!u&&!Lc[i]&&(Lc[i]=!0,xt(!1,a))}E.memo(ch);function ch({routes:i,manifest:u,future:a,state:d,isStatic:f,onError:h}){return Xc(i,void 0,{manifest:u,state:d,isStatic:f,onError:h})}function nn(i){we(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function dh({basename:i="/",children:u=null,location:a,navigationType:d="POP",navigator:f,static:h=!1,useTransitions:g}){we(!Or(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let P=i.replace(/^\/*/,"/"),S=E.useMemo(()=>({basename:P,navigator:f,static:h,useTransitions:g,future:{}}),[P,f,h,g]);typeof a=="string"&&(a=yn(a));let{pathname:x="/",search:I="",hash:N="",state:j=null,key:M="default",mask:D}=a,B=E.useMemo(()=>{let T=Bt(x,P);return T==null?null:{location:{pathname:T,search:I,hash:N,state:j,key:M,mask:D},navigationType:d}},[P,x,I,N,j,M,d,D]);return xt(B!=null,`<Router basename="${P}"> is not able to match the URL "${x}${I}${N}" because it does not start with the basename, so the <Router> won't render anything.`),B==null?null:E.createElement(ct.Provider,{value:S},E.createElement(Br.Provider,{children:u,value:B}))}function fh({children:i,location:u}){return Jp(ss(i),u)}function ss(i,u=[]){let a=[];return E.Children.forEach(i,(d,f)=>{if(!E.isValidElement(d))return;let h=[...u,f];if(d.type===E.Fragment){a.push.apply(a,ss(d.props.children,h));return}we(d.type===nn,`[${typeof d.type=="string"?d.type:d.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),we(!d.props.index||!d.props.children,"An index route cannot have child routes.");let g={id:d.props.id||h.join("-"),caseSensitive:d.props.caseSensitive,element:d.props.element,Component:d.props.Component,index:d.props.index,path:d.props.path,middleware:d.props.middleware,loader:d.props.loader,action:d.props.action,hydrateFallbackElement:d.props.hydrateFallbackElement,HydrateFallback:d.props.HydrateFallback,errorElement:d.props.errorElement,ErrorBoundary:d.props.ErrorBoundary,hasErrorBoundary:d.props.hasErrorBoundary===!0||d.props.ErrorBoundary!=null||d.props.errorElement!=null,shouldRevalidate:d.props.shouldRevalidate,handle:d.props.handle,lazy:d.props.lazy};d.props.children&&(g.children=ss(d.props.children,h)),a.push(g)}),a}var ql="get",Jl="application/x-www-form-urlencoded";function no(i){return typeof HTMLElement<"u"&&i instanceof HTMLElement}function ph(i){return no(i)&&i.tagName.toLowerCase()==="button"}function hh(i){return no(i)&&i.tagName.toLowerCase()==="form"}function mh(i){return no(i)&&i.tagName.toLowerCase()==="input"}function gh(i){return!!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)}function vh(i,u){return i.button===0&&(!u||u==="_self")&&!gh(i)}var Xl=null;function yh(){if(Xl===null)try{new FormData(document.createElement("form"),0),Xl=!1}catch{Xl=!0}return Xl}var xh=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function os(i){return i!=null&&!xh.has(i)?(xt(!1,`"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Jl}"`),null):i}function wh(i,u){let a,d,f,h,g;if(hh(i)){let P=i.getAttribute("action");d=P?Bt(P,u):null,a=i.getAttribute("method")||ql,f=os(i.getAttribute("enctype"))||Jl,h=new FormData(i)}else if(ph(i)||mh(i)&&(i.type==="submit"||i.type==="image")){let P=i.form;if(P==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let S=i.getAttribute("formaction")||P.getAttribute("action");if(d=S?Bt(S,u):null,a=i.getAttribute("formmethod")||P.getAttribute("method")||ql,f=os(i.getAttribute("formenctype"))||os(P.getAttribute("enctype"))||Jl,h=new FormData(P,i),!yh()){let{name:x,type:I,value:N}=i;if(I==="image"){let j=x?`${x}.`:"";h.append(`${j}x`,"0"),h.append(`${j}y`,"0")}else x&&h.append(x,N)}}else{if(no(i))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');a=ql,d=null,f=Jl,g=i}return h&&f==="text/plain"&&(g=h,h=void 0),{action:d,method:a.toLowerCase(),encType:f,formData:h,body:g}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function vs(i,u){if(i===!1||i===null||typeof i>"u")throw new Error(u)}function Zc(i,u,a,d){let f=typeof i=="string"?new URL(i,typeof window>"u"?"server://singlefetch/":window.location.origin):i;return a?f.pathname.endsWith("/")?f.pathname=`${f.pathname}_.${d}`:f.pathname=`${f.pathname}.${d}`:f.pathname==="/"?f.pathname=`_root.${d}`:u&&Bt(f.pathname,u)==="/"?f.pathname=`${eo(u)}/_root.${d}`:f.pathname=`${eo(f.pathname)}.${d}`,f}async function Sh(i,u){if(i.id in u)return u[i.id];try{let a=await import(i.module);return u[i.id]=a,a}catch(a){return console.error(`Error loading route module \`${i.module}\`, reloading page...`),console.error(a),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Ch(i){return i==null?!1:i.href==null?i.rel==="preload"&&typeof i.imageSrcSet=="string"&&typeof i.imageSizes=="string":typeof i.rel=="string"&&typeof i.href=="string"}async function kh(i,u,a){let d=await Promise.all(i.map(async f=>{let h=u.routes[f.route.id];if(h){let g=await Sh(h,a);return g.links?g.links():[]}return[]}));return Ih(d.flat(1).filter(Ch).filter(f=>f.rel==="stylesheet"||f.rel==="preload").map(f=>f.rel==="stylesheet"?{...f,rel:"prefetch",as:"style"}:{...f,rel:"prefetch"}))}function Tc(i,u,a,d,f,h){let g=(S,x)=>a[x]?S.route.id!==a[x].route.id:!0,P=(S,x)=>{var I;return a[x].pathname!==S.pathname||((I=a[x].route.path)==null?void 0:I.endsWith("*"))&&a[x].params["*"]!==S.params["*"]};return h==="assets"?u.filter((S,x)=>g(S,x)||P(S,x)):h==="data"?u.filter((S,x)=>{var N;let I=d.routes[S.route.id];if(!I||!I.hasLoader)return!1;if(g(S,x)||P(S,x))return!0;if(S.route.shouldRevalidate){let j=S.route.shouldRevalidate({currentUrl:new URL(f.pathname+f.search+f.hash,window.origin),currentParams:((N=a[0])==null?void 0:N.params)||{},nextUrl:new URL(i,window.origin),nextParams:S.params,defaultShouldRevalidate:!0});if(typeof j=="boolean")return j}return!0}):[]}function Ph(i,u,{includeHydrateFallback:a}={}){return Eh(i.map(d=>{let f=u.routes[d.route.id];if(!f)return[];let h=[f.module];return f.clientActionModule&&(h=h.concat(f.clientActionModule)),f.clientLoaderModule&&(h=h.concat(f.clientLoaderModule)),a&&f.hydrateFallbackModule&&(h=h.concat(f.hydrateFallbackModule)),f.imports&&(h=h.concat(f.imports)),h}).flat(1))}function Eh(i){return[...new Set(i)]}function Nh(i){let u={},a=Object.keys(i).sort();for(let d of a)u[d]=i[d];return u}function Ih(i,u){let a=new Set;return new Set(u),i.reduce((d,f)=>{let h=JSON.stringify(Nh(f));return a.has(h)||(a.add(h),d.push({key:h,link:f})),d},[])}function ys(){let i=E.useContext($n);return vs(i,"You must render this element inside a <DataRouterContext.Provider> element"),i}function jh(){let i=E.useContext(to);return vs(i,"You must render this element inside a <DataRouterStateContext.Provider> element"),i}var xs=E.createContext(void 0);xs.displayName="FrameworkContext";function ro(){let i=E.useContext(xs);return vs(i,"You must render this element inside a <HydratedRouter> element"),i}function Lh(i,u){let a=E.useContext(xs),[d,f]=E.useState(!1),[h,g]=E.useState(!1),{onFocus:P,onBlur:S,onMouseEnter:x,onMouseLeave:I,onTouchStart:N}=u,j=E.useRef(null);E.useEffect(()=>{if(i==="render"&&g(!0),i==="viewport"){let B=G=>{G.forEach(H=>{g(H.isIntersecting)})},T=new IntersectionObserver(B,{threshold:.5});return j.current&&T.observe(j.current),()=>{T.disconnect()}}},[i]),E.useEffect(()=>{if(d){let B=setTimeout(()=>{g(!0)},100);return()=>{clearTimeout(B)}}},[d]);let M=()=>{f(!0)},D=()=>{f(!1),g(!1)};return a?i!=="intent"?[h,j,{}]:[h,j,{onFocus:_r(P,M),onBlur:_r(S,D),onMouseEnter:_r(x,M),onMouseLeave:_r(I,D),onTouchStart:_r(N,M)}]:[!1,j,{}]}function _r(i,u){return a=>{i&&i(a),a.defaultPrevented||u(a)}}function Th({page:i,...u}){let a=Up(),{nonce:d}=ro(),{router:f}=ys(),h=E.useMemo(()=>Gc(f.routes,i,f.basename),[f.routes,i,f.basename]);return h?(u.nonce==null&&d&&(u={...u,nonce:d}),a?E.createElement(_h,{page:i,matches:h,...u}):E.createElement(Ah,{page:i,matches:h,...u})):null}function Rh(i){let{manifest:u,routeModules:a}=ro(),[d,f]=E.useState([]);return E.useEffect(()=>{let h=!1;return kh(i,u,a).then(g=>{h||f(g)}),()=>{h=!0}},[i,u,a]),d}function _h({page:i,matches:u,...a}){let d=Nt(),{future:f}=ro(),{basename:h}=ys(),g=E.useMemo(()=>{if(i===d.pathname+d.search+d.hash)return[];let P=Zc(i,h,f.v8_trailingSlashAwareDataRequests,"rsc"),S=!1,x=[];for(let I of u)typeof I.route.shouldRevalidate=="function"?S=!0:x.push(I.route.id);return S&&x.length>0&&P.searchParams.set("_routes",x.join(",")),[P.pathname+P.search]},[h,f.v8_trailingSlashAwareDataRequests,i,d,u]);return E.createElement(E.Fragment,null,g.map(P=>E.createElement("link",{key:P,rel:"prefetch",as:"fetch",href:P,...a})))}function Ah({page:i,matches:u,...a}){let d=Nt(),{future:f,manifest:h,routeModules:g}=ro(),{basename:P}=ys(),{loaderData:S,matches:x}=jh(),I=E.useMemo(()=>Tc(i,u,x,h,d,"data"),[i,u,x,h,d]),N=E.useMemo(()=>Tc(i,u,x,h,d,"assets"),[i,u,x,h,d]),j=E.useMemo(()=>{if(i===d.pathname+d.search+d.hash)return[];let B=new Set,T=!1;if(u.forEach(H=>{var te;let q=h.routes[H.route.id];!q||!q.hasLoader||(!I.some(re=>re.route.id===H.route.id)&&H.route.id in S&&((te=g[H.route.id])!=null&&te.shouldRevalidate)||q.hasClientLoader?T=!0:B.add(H.route.id))}),B.size===0)return[];let G=Zc(i,P,f.v8_trailingSlashAwareDataRequests,"data");return T&&B.size>0&&G.searchParams.set("_routes",u.filter(H=>B.has(H.route.id)).map(H=>H.route.id).join(",")),[G.pathname+G.search]},[P,f.v8_trailingSlashAwareDataRequests,S,d,h,I,u,i,g]),M=E.useMemo(()=>Ph(N,h),[N,h]),D=Rh(N);return E.createElement(E.Fragment,null,j.map(B=>E.createElement("link",{key:B,rel:"prefetch",as:"fetch",href:B,...a})),M.map(B=>E.createElement("link",{key:B,rel:"modulepreload",href:B,...a})),D.map(({key:B,link:T})=>E.createElement("link",{key:B,nonce:a.nonce,...T,crossOrigin:T.crossOrigin??a.crossOrigin})))}function Dh(...i){return u=>{i.forEach(a=>{typeof a=="function"?a(u):a!=null&&(a.current=u)})}}var Gh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Gh&&(window.__reactRouterVersion="7.18.2")}catch{}function Bh({basename:i,children:u,useTransitions:a,window:d}){let f=E.useRef();f.current==null&&(f.current=pp({window:d,v5Compat:!0}));let h=f.current,[g,P]=E.useState({action:h.action,location:h.location}),S=E.useCallback(x=>{a===!1?P(x):E.startTransition(()=>P(x))},[a]);return E.useLayoutEffect(()=>h.listen(S),[h,S]),E.createElement(dh,{basename:i,children:u,location:g.location,navigationType:g.action,navigator:h,useTransitions:a})}var ke=E.forwardRef(function({onClick:u,discover:a="render",prefetch:d="none",relative:f,reloadDocument:h,replace:g,mask:P,state:S,target:x,to:I,preventScrollReset:N,viewTransition:j,defaultShouldRevalidate:M,...D},B){let{basename:T,navigator:G,useTransitions:H}=E.useContext(ct),q=typeof I=="string"&&fs.test(I),te=bc(I,T);I=te.to;let re=Qp(I,{relative:f}),le=Nt(),ae=null;if(P){let Ie=ps(P,[],le.mask?le.mask.pathname:"/",!0);T!=="/"&&(Ie.pathname=Ie.pathname==="/"?T:yt([T,Ie.pathname])),ae=G.createHref(Ie)}let[me,Te,Ue]=Lh(d,D),It=Fh(I,{replace:g,mask:P,state:S,target:x,preventScrollReset:N,relative:f,viewTransition:j,defaultShouldRevalidate:M,useTransitions:H});function rt(Ie){u&&u(Ie),Ie.defaultPrevented||It(Ie)}let Be=!(te.isExternal||h),We=E.createElement("a",{...D,...Ue,href:(Be?ae:void 0)||te.absoluteURL||re,onClick:Be?rt:u,ref:Dh(B,Te),target:x,"data-discover":!q&&a==="render"?"true":void 0});return me&&!q?E.createElement(E.Fragment,null,We,E.createElement(Th,{page:re})):We});ke.displayName="Link";var Oh=E.forwardRef(function({"aria-current":u="page",caseSensitive:a=!1,className:d="",end:f=!1,style:h,to:g,viewTransition:P,children:S,...x},I){let N=Mr(g,{relative:x.relative}),j=Nt(),M=E.useContext(to),{navigator:D,basename:B}=E.useContext(ct),T=M!=null&&$h(N)&&P===!0,G=D.encodeLocation?D.encodeLocation(N).pathname:N.pathname,H=j.pathname,q=M&&M.navigation&&M.navigation.location?M.navigation.location.pathname:null;a||(H=H.toLowerCase(),q=q?q.toLowerCase():null,G=G.toLowerCase()),q&&B&&(q=Bt(q,B)||q);const te=G!=="/"&&G.endsWith("/")?G.length-1:G.length;let re=H===G||!f&&H.startsWith(G)&&H.charAt(te)==="/",le=q!=null&&(q===G||!f&&q.startsWith(G)&&q.charAt(G.length)==="/"),ae={isActive:re,isPending:le,isTransitioning:T},me=re?u:void 0,Te;typeof d=="function"?Te=d(ae):Te=[d,re?"active":null,le?"pending":null,T?"transitioning":null].filter(Boolean).join(" ");let Ue=typeof h=="function"?h(ae):h;return E.createElement(ke,{...x,"aria-current":me,className:Te,ref:I,style:Ue,to:g,viewTransition:P},typeof S=="function"?S(ae):S)});Oh.displayName="NavLink";var Mh=E.forwardRef(({discover:i="render",fetcherKey:u,navigate:a,reloadDocument:d,replace:f,state:h,method:g=ql,action:P,onSubmit:S,relative:x,preventScrollReset:I,viewTransition:N,defaultShouldRevalidate:j,...M},D)=>{let{useTransitions:B}=E.useContext(ct),T=bh(),G=Wh(P,{relative:x}),H=g.toLowerCase()==="get"?"get":"post",q=typeof P=="string"&&fs.test(P),te=re=>{if(S&&S(re),re.defaultPrevented)return;re.preventDefault();let le=re.nativeEvent.submitter,ae=(le==null?void 0:le.getAttribute("formmethod"))||g,me=()=>T(le||re.currentTarget,{fetcherKey:u,method:ae,navigate:a,replace:f,state:h,relative:x,preventScrollReset:I,viewTransition:N,defaultShouldRevalidate:j});B&&a!==!1?E.startTransition(()=>me()):me()};return E.createElement("form",{ref:D,method:H,action:G,onSubmit:d?S:te,...M,"data-discover":!q&&i==="render"?"true":void 0})});Mh.displayName="Form";function zh(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ed(i){let u=E.useContext($n);return we(u,zh(i)),u}function Fh(i,{target:u,replace:a,mask:d,state:f,preventScrollReset:h,relative:g,viewTransition:P,defaultShouldRevalidate:S,useTransitions:x}={}){let I=Yp(),N=Nt(),j=Mr(i,{relative:g});return E.useCallback(M=>{if(vh(M,u)){M.preventDefault();let D=a!==void 0?a:Ar(N)===Ar(j),B=()=>I(i,{replace:D,mask:d,state:f,preventScrollReset:h,relative:g,viewTransition:P,defaultShouldRevalidate:S});x?E.startTransition(()=>B()):B()}},[N,I,j,a,d,f,u,i,h,g,P,S,x])}var Uh=0,Vh=()=>`__${String(++Uh)}__`;function bh(){let{router:i}=ed("useSubmit"),{basename:u}=E.useContext(ct),a=sh(),d=i.fetch,f=i.navigate;return E.useCallback(async(h,g={})=>{let{action:P,method:S,encType:x,formData:I,body:N}=wh(h,u);if(g.navigate===!1){let j=g.fetcherKey||Vh();await d(j,a,g.action||P,{defaultShouldRevalidate:g.defaultShouldRevalidate,preventScrollReset:g.preventScrollReset,formData:I,body:N,formMethod:g.method||S,formEncType:g.encType||x,flushSync:g.flushSync})}else await f(g.action||P,{defaultShouldRevalidate:g.defaultShouldRevalidate,preventScrollReset:g.preventScrollReset,formData:I,body:N,formMethod:g.method||S,formEncType:g.encType||x,replace:g.replace,state:g.state,fromRouteId:a,flushSync:g.flushSync,viewTransition:g.viewTransition})},[d,f,u,a])}function Wh(i,{relative:u}={}){let{basename:a}=E.useContext(ct),d=E.useContext(Et);we(d,"useFormAction must be used inside a RouteContext");let[f]=d.matches.slice(-1),h={...Mr(i||".",{relative:u})},g=Nt();if(i==null){h.search=g.search;let P=new URLSearchParams(h.search),S=P.getAll("index");if(S.some(I=>I==="")){P.delete("index"),S.filter(N=>N).forEach(N=>P.append("index",N));let I=P.toString();h.search=I?`?${I}`:""}}return(!i||i===".")&&f.route.index&&(h.search=h.search?h.search.replace(/^\?/,"?index&"):"?index"),a!=="/"&&(h.pathname=h.pathname==="/"?a:yt([a,h.pathname])),Ar(h)}function $h(i,{relative:u}={}){let a=E.useContext(Hc);we(a!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:d}=ed("useViewTransitionState"),f=Mr(i,{relative:u});if(!a.isTransitioning)return!1;let h=Bt(a.currentLocation.pathname,d)||a.currentLocation.pathname,g=Bt(a.nextLocation.pathname,d)||a.nextLocation.pathname;return Zl(f.pathname,g)!=null||Zl(f.pathname,h)!=null}var Hh=Ac();/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kh=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),td=(...i)=>i.filter((u,a,d)=>!!u&&u.trim()!==""&&d.indexOf(u)===a).join(" ").trim();/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Qh={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yh=E.forwardRef(({color:i="currentColor",size:u=24,strokeWidth:a=2,absoluteStrokeWidth:d,className:f="",children:h,iconNode:g,...P},S)=>E.createElement("svg",{ref:S,...Qh,width:u,height:u,stroke:i,strokeWidth:d?Number(a)*24/Number(u):a,className:td("lucide",f),...P},[...g.map(([x,I])=>E.createElement(x,I)),...Array.isArray(h)?h:[h]]));/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rn=(i,u)=>{const a=E.forwardRef(({className:d,...f},h)=>E.createElement(Yh,{ref:h,iconNode:u,className:td(`lucide-${Kh(i)}`,d),...f}));return a.displayName=`${i}`,a};/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xh=rn("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dr=rn("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gr=rn("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const as=rn("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qh=rn("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jh=rn("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const us=rn("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zh=rn("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function em(){const[i,u]=E.useState(!1),a=Nt();E.useEffect(()=>(i?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[i]);const d=[{label:"首页",href:"/"},{label:"🔥 机场推荐",href:"/category/popular"},{label:"📊 机场节点大盘",href:"/category/monitor"},{label:"🛠️ Clash教程",href:"/category/client-tutorials"},{label:"🔍 机场测评文章",href:"/category/independent-reviews"},{label:"⚖️ 关于我们",href:"/about"}];return c.jsx("header",{className:"fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-xl border-b border-white/10 select-none",children:c.jsxs("div",{className:"max-w-7xl mx-auto flex items-center justify-between px-5 sm:px-8 md:px-10 lg:px-12 py-3 md:py-3.5",children:[c.jsxs(ke,{to:"/",className:"flex items-center gap-[10px] cursor-pointer shrink-0",children:[c.jsx("svg",{className:"w-[28px] h-[28px] sm:w-[32px] sm:h-[32px]",viewBox:"0 0 256 256",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:c.jsx("path",{d:"M 128 128 C 198.692 128 256 185.308 256 256 L 151.883 256 C 149.812 220.307 120.213 192 84 192 C 47.787 192 18.188 220.307 16.117 256 L 0 256 C 0 185.308 57.308 128 128 128 Z M 104.117 0 C 106.188 35.694 135.787 64 172 64 C 208.213 64 237.812 35.694 239.883 0 L 256 0 C 256 70.692 198.692 128 128 128 C 57.308 128 0 70.692 0 0 Z",fill:"white"})}),c.jsx("span",{className:"font-stix text-cream leading-[28.5px] text-[22px] sm:text-[26px] md:text-[30px]",children:"机场搜"})]}),c.jsx("div",{className:"hidden md:flex items-center bg-black/40 rounded-[14px] border border-white/10 backdrop-blur-[26.5px] p-[4px] gap-[3px] shadow-2xl",children:d.map((f,h)=>{const g=a.pathname===f.href;return c.jsx(ke,{to:f.href,className:`h-[38px] lg:h-[42px] px-3.5 lg:px-4 rounded-[11px] flex items-center transition-all text-xs font-semibold font-suisse whitespace-nowrap ${g?"bg-cream/20 text-cream border border-cream/30 shadow-inner font-bold":"bg-transparent text-tan/80 hover:text-cream hover:bg-white/10"}`,children:f.label},h)})}),c.jsx("button",{type:"button","aria-label":i?"Close menu":"Open menu",onClick:()=>u(!i),className:"md:hidden w-10 h-10 flex items-center justify-center relative z-50 text-cream",children:c.jsxs("span",{className:"relative w-6 h-6 flex flex-col justify-center items-center",children:[c.jsx("span",{className:`block w-5 h-0.5 bg-cream transition-all duration-300 ${i?"rotate-45 translate-y-[2px]":"-translate-y-1"}`}),c.jsx("span",{className:`block w-5 h-0.5 bg-cream transition-all duration-300 ${i?"-rotate-45 -translate-y-[0px]":"translate-y-1"}`})]})}),i&&c.jsx("div",{className:"fixed inset-0 bg-[#0A0707]/95 backdrop-blur-2xl z-40 md:hidden flex flex-col justify-between px-6 pt-24 pb-10 animate-fade-in font-suisse",children:c.jsx("div",{className:"flex flex-col gap-5 text-left",children:d.map((f,h)=>c.jsxs(ke,{to:f.href,onClick:()=>u(!1),className:"text-cream text-xl sm:text-2xl font-stix font-normal hover:text-tan transition-colors border-b border-white/10 pb-3 flex items-center justify-between",children:[c.jsx("span",{children:f.label}),c.jsx(Dr,{size:18,className:"text-tan/50"})]},h))})})]})})}function tm(){return c.jsx("section",{className:"relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden select-none pt-24 pb-16 sm:pb-20",children:c.jsxs("div",{className:"max-w-6xl mx-auto px-5 sm:px-8 w-full text-center my-auto",children:[c.jsx("div",{className:"inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cream/10 border border-cream/20 text-cream text-[11px] font-medium font-suisse mb-6 animate-slide-down",children:c.jsx("span",{children:"⚡ 2026 最新物理线路压测大盘"})}),c.jsx("h2",{className:"font-stix text-cream text-4xl sm:text-6xl md:text-7xl font-normal leading-[1.1] tracking-tight mb-6 animate-slide-down",style:{animationDelay:"150ms"},children:"突破网络边界 • 探索极速稳定节点"}),c.jsx("p",{className:"font-suisse text-tan/80 text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed mb-8 animate-slide-down",style:{animationDelay:"300ms"},children:"基于 24/7 探针实时压测，为您精选企业级 IPLC 专线与高可用 AI 解锁节点。"}),c.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-down",style:{animationDelay:"450ms"},children:[c.jsxs(ke,{to:"/category/popular",className:"w-full sm:w-auto px-8 py-3.5 rounded-xl bg-cream text-dark-blue font-bold text-sm hover:bg-white transition-all shadow-xl hover:shadow-cream/20 flex items-center justify-center gap-2 font-suisse",children:["查阅 2026 精选榜单 ",c.jsx(Dr,{size:16})]}),c.jsx(ke,{to:"/category/monitor",className:"w-full sm:w-auto px-8 py-3.5 rounded-xl bg-black/40 border border-cream/30 text-cream font-medium text-sm hover:bg-white/10 transition-colors flex items-center justify-center gap-2 font-suisse backdrop-blur-md",children:"查看机场节点大盘"})]})]})})}const cs=[{id:"twilight",name:"暮光加速 (Twilight Speed)",rating:9.9,speed:"125 MB/s 峰值极速",architecture:"VLESS 协议大机房专线 + 全节点 FullCone",unlocks:["ChatGPT 4o","Claude 3.5","YouTube 8K","Netflix 4K","Disney+"],price:"¥20.00 / 120G 月",coupon:"TWILIGHT2026",discount:"立享 8 折特惠",badge:"👑 2026综合测评排名第一",url:"https://twilight.net/#/register",description:"综合排名第一！由新加坡海外团队运营，VLESS 协议专线，绝大多数节点支持 FullCone UDP，香港主节点高达 20 个，延迟低速度强。"},{id:"invisibles",name:"隐形人机场 (Invisibles)",rating:9.8,speed:"千兆无限速",architecture:"企业级 IEPL 纯专线 (1倍率)",unlocks:["ChatGPT 4o","Claude","GitHub Copilot","Prime Video","BBC iPlayer"],price:"¥24.00 / 144G 月",coupon:"INVIS2026",discount:"立享 88 折",badge:"🥈 排名第二 • 企业级IEPL纯专线",url:"https://yinxingren1.invisibleaff.com/#/register?code=Gcp1CRso",description:"综合排名第二！运营约2年，主打全节点 1 倍率扣费与企业级 IEPL 专线，常规套餐不限设备并发，晚高峰速度极其凶悍。"},{id:"laddercloud",name:"梯子云 (LadderCloud)",rating:9.7,speed:"2 Gbps+ 专线",architecture:"VLESS + 企业级 IEPL 专线",unlocks:["ChatGPT","Claude","Netflix 4K","Disney+","自研客户端"],price:"¥25.00 / 125G 月",coupon:"LADDER88",discount:"一键全自动连接",badge:"🥉 排名第三 • 全平台自研客户端",url:"https://asfeoasf.ladderttt.sbs/#/?code=rhKeiJTM",description:"综合排名第三！提供全平台自研一键登录客户端，免配置零门槛使用，配备企业级 IEPL 专线与 60+ 节点。"},{id:"wgetcloud",name:"WgetCloud (原 GaCloud / 闪跃)",rating:9.6,speed:"10000 Mbps 级专线",architecture:"BGP 入口 + 亚马逊 Global Accelerator 专线",unlocks:["ChatGPT","Claude 3.5","Netflix 4K","Disney+","8K 油管秒开"],price:"¥79.00 / 月 起",coupon:"WGET85",discount:"新用户 85 折",badge:"⭐ 5年老牌高端品牌",url:"https://invite.wgetcloud.ltd/auth/register?code=1i8Pgu",description:"老牌顶级机场，采用 BGP + 亚马逊跨境内网专线，延迟极低，稳定性 99.99%，全平台 Trojan 协议支持。"},{id:"lingmao",name:"灵猫网络 (Spirit Cat)",rating:9.6,speed:"IPLC 全专线",architecture:"IPLC 专线 (全节点 1倍率)",unlocks:["ChatGPT","Gemini","TikTok","YouTube 4K","Netflix"],price:"¥25.00 / 150G 月",coupon:"SPIRIT2026",discount:"全节点 1倍率",badge:"⚡ 2026海外团队IPLC",url:"https://edp01.civetaff.com/#/?code=8n0vbtUD",description:"2026年上线，主打全节点 1 倍率 IPLC 专线，不限设备连接数与客户端使用，解锁主流 4K 影音与 AI 工具。"},{id:"weifeng",name:"微风网络 (Breeze Net)",rating:9.5,speed:"50 MB/s 实测",architecture:"IEPL / IPLC 专线 + BGP 中继",unlocks:["Netflix","Disney+","ChatGPT","Shadowsocks","Vmess"],price:"¥27.00 / 200G 月",coupon:"weifeng90",discount:"限时 9 折",badge:"💰 高性价比门槛低",url:"https://wep01.breezenetaff.com/#/?code=JHqHSog8",description:"提供约 61 个节点，采用 IEPL/IPLC 专线与 BGP 中继，延迟约 42ms，丢包率仅 0.1%，优惠码 weifeng90。"},{id:"firefly",name:"Firefly 机场",rating:9.5,speed:"IPLC 极速专线",architecture:"IPLC 专线 + VLESS 协议",unlocks:["ChatGPT","Gemini","Claude","Grok","Netflix 4K"],price:"¥25.00 / 150G 月",coupon:"FIREFLY2026",discount:"不限设备数",badge:"🔥 2026老牌团队新开",url:"https://vip02.fireflyaff.com/#/?code=QvtWcNbI",description:"由海外老牌团队运营，IPLC 专线配合 VLESS 协议，提供原生 IP，不限制客户端与设备连接数。"},{id:"kuajie",name:"跨界云 (Crossover)",rating:9.4,speed:"全专线链路",architecture:"全专线升级链路 + Vless 协议",unlocks:["YouTube 4K","Netflix","Disney+","Vless 50节点"],price:"¥20.00 / 120G 月",coupon:"KUACROSS2026",discount:"月付 20 起",badge:"🌐 50条Vless全专线",url:"https://vip02.kuajieaff.com/#/?code=kTdpCGi9",description:"2026年开业，全专线链路升级，提供约 50 条 Vless 节点，覆盖美、日、台、港、新，解锁主流流媒体。"},{id:"globalcloud",name:"全球云 (Global Cloud)",rating:9.5,speed:"3 Gbps+ 总带宽",architecture:"IPLC / IEPL 专线 + 智能负载均衡",unlocks:["ChatGPT","Claude","Netflix 4K","Disney+","TikTok"],price:"¥20.00 / 120G 月",coupon:"GLOBAL2026",discount:"限时 9 折",badge:"⚡ 70+节点超广覆盖",url:"https://vnjg4ckga.quanqiugttt1.club/#/?code=NKII9ZkH",description:"覆盖全球 70+ 热门及冷门节点，基于新一代 VLESS 协议，三网入口优化，超高性价比。"},{id:"ssone",name:"SSONE 机场",rating:9.4,speed:"500 Mbps 冗余",architecture:"BGP 隧道中转",unlocks:["ChatGPT","Netflix 4K","Disney+","YouTube 8K","TikTok"],price:"¥10.00 / 60G 月",coupon:"SSONEVIP",discount:"免费试用 1天",badge:"🎁 10元入门极佳体验",url:"https://m.ssone.io/#/register?code=GeTpX1Qx",description:"主打极佳性价比，提供 1天 1G 免费试用，BGP 隧道中转，支持 SS / V2Ray / Trojan 多协议。"},{id:"saiboyun",name:"赛博云 (Saiboyun)",rating:9.3,speed:"最高 1000 M",architecture:"CN2 / CMIN2 / 4837 高端专线",unlocks:["油管8K秒开","Netflix","Disney+","ChatGPT","冷门节点"],price:"¥3.00 / 100G 月",coupon:"SAIBO2026",discount:"月付 3 元起",badge:"💰 超高性价比之王",url:"https://saiboyun.pages.dev/",description:"月付仅需 3 元！拥有 CN2/CMIN2/4837 高端专线，覆盖南极洲、乌克兰、埃及等冷门地区节点。"},{id:"langwang",name:"浪网 (LangWang)",rating:9.3,speed:"千兆 BGP 专线",architecture:"VLESS 协议 + 专线出口",unlocks:["ChatGPT","Claude","Netflix","Disney+","独立 IP"],price:"¥30.00 / 150G 月",coupon:"LANGWANG85",discount:"支持独立IP",badge:"🌐 VLESS全节点1倍率",url:"https://yinxing4.wavenetaff.com/#/?code=XMK38sdf",description:"全节点统一 1 倍率扣费，提供自研客户端与独立 IP 定制，非常适合 AI 大模型及高清视频使用。"},{id:"lingdongyun",name:"灵动云 (LingDongYun)",rating:9.2,speed:"500 M 高峰冗余",architecture:"Trojan 协议专线",unlocks:["ChatGPT","YouTube 4K","Netflix","Disney+","不限时包"],price:"¥20.00 / 100G 月",coupon:"LINGDONG88",discount:"支持不限时买断",badge:"📦 灵动买断流量包",url:"https://yinxing4.lingdongaff.com/#/?code=mW96wgI4",description:"采用 Trojan 协议专线，提供 70G/年及一次性不限时流量包，适合高低频备用需求。"},{id:"wuyou",name:"无忧链接 (WUYOU LINK)",rating:9,speed:"不限制速率",architecture:"BGP 多路智能中转",unlocks:["ChatGPT","Gemini","Netflix","Disney+","HBO / Hulu"],price:"¥12.92 / 100G 月",coupon:"WORRYFREE",discount:"月付 12 元起",badge:"✨ 不限客户端不限制",url:"https://lsitel.worryfreettt.homes/#/?code=SaSZbwak",description:"运营约1年，不限制客户端与设备使用，支持全部主流代理工具，拥有买断制一次性 100G 流量包。"},{id:"degeyun",name:"大哥云 (DeGeYun)",rating:9,speed:"高速 Trojan",architecture:"BGP 专线中转",unlocks:["ChatGPT","Netflix","Disney+","台湾/日本原生IP"],price:"¥19.00 / 100G 月",coupon:"DEGEVIP",discount:"支持年付优惠",badge:"👍 老牌稳定口碑商",url:"https://a03.dgy02.com/#/register?code=X8MBmftq",description:"老牌稳定加速服务，Trojan 协议，台湾、日本、新加坡原生 IP 表现极佳，解锁体验稳定。"}];function nd({onOpenArticle:i,isSubPage:u=!1}){const[a,d]=E.useState(null),f=async(g,P)=>{try{await navigator.clipboard.writeText(g),d(P),setTimeout(()=>d(null),2e3)}catch(S){console.error("Failed to copy",S)}},h=u?"h1":"h2";return c.jsxs("section",{id:"popular",className:"py-20 border-t border-white/10 max-w-6xl mx-auto px-5 sm:px-8 select-none",children:[c.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4",children:[c.jsxs("div",{children:[c.jsx("div",{className:"font-suisse uppercase tracking-[0.15em] text-[11px] text-tan font-medium mb-2",children:"HOT RECOMMENDATIONS"}),c.jsx(h,{className:"font-stix text-cream text-3xl sm:text-4xl font-normal tracking-tight",children:"机场推荐"})]}),c.jsx("p",{className:"font-suisse text-xs sm:text-sm text-tan/70 max-w-xs",children:"包含专属折扣优惠码，点击按钮即可一键复制、查看深度测评或直达官网"})]}),c.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:cs.map(g=>c.jsxs("div",{className:"relative bg-[rgba(17,16,15,0.45)] backdrop-blur-[20px] border border-white/10 hover:border-tan/40 rounded-[20px] p-6 shadow-2xl flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300",children:[g.badge&&c.jsx("div",{className:"absolute -top-3 right-6 bg-gradient-to-r from-amber-500/90 to-rose-500/90 text-cream text-[10px] font-bold font-suisse px-3 py-1 rounded-full border border-white/20 shadow-lg",children:g.badge}),c.jsxs("div",{children:[c.jsxs("div",{className:"flex items-start justify-between gap-4 mb-4",children:[c.jsxs("div",{children:[c.jsx("h2",{className:"font-suisse text-lg font-bold text-cream group-hover:text-tan transition-colors",children:g.name}),c.jsxs("p",{className:"font-suisse text-xs text-tan/70 mt-1",children:[g.architecture," • ",g.speed]})]}),c.jsxs("div",{className:"flex flex-col items-center justify-center px-3 py-1.5 rounded-xl bg-cream/10 border border-cream/20 text-cream shrink-0",children:[c.jsx("span",{className:"font-suisse text-[9px] text-tan/70 font-medium uppercase",children:"评分"}),c.jsx("span",{className:"font-suisse text-base font-bold leading-none mt-0.5",children:g.rating})]})]}),c.jsx("p",{className:"font-suisse text-xs text-cream/80 leading-relaxed mb-4",children:g.description}),c.jsxs("div",{className:"mb-6",children:[c.jsx("span",{className:"font-suisse text-[10px] font-medium text-tan/60 block mb-2 uppercase tracking-wider",children:"解锁与支持服务："}),c.jsx("div",{className:"flex flex-wrap gap-1.5",children:g.unlocks.map((P,S)=>c.jsxs("span",{className:"font-suisse text-[10px] px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-cream/90 font-medium",children:["✓ ",P]},S))})]})]}),c.jsxs("div",{className:"space-y-4 pt-4 border-t border-white/10",children:[c.jsxs("div",{className:"flex items-center justify-between p-3 rounded-xl bg-black/40 border border-dashed border-tan/30",children:[c.jsxs("div",{children:[c.jsxs("span",{className:"font-suisse text-[10px] text-tan/60 block",children:["专属优惠码 (",g.discount,")"]}),c.jsx("code",{className:"font-mono font-bold text-sm text-tan",children:g.coupon})]}),c.jsx("button",{type:"button",onClick:()=>f(g.coupon,g.id),className:"px-3 py-1.5 text-xs font-medium font-suisse rounded-lg bg-cream text-dark-blue hover:bg-white transition-colors flex items-center gap-1",children:a===g.id?c.jsxs(c.Fragment,{children:[c.jsx(qh,{size:12})," 已复制"]}):c.jsxs(c.Fragment,{children:[c.jsx(Jh,{size:12})," 复制"]})})]}),c.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-3",children:[c.jsxs("div",{children:[c.jsx("span",{className:"font-suisse text-[10px] text-tan/60",children:"套餐价格"}),c.jsx("div",{className:"font-suisse text-sm sm:text-base font-bold text-cream",children:g.price})]}),c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsxs(ke,{to:`/article/review-${g.id}`,onClick:()=>i(g.id),className:"px-3 py-2 rounded-xl bg-cream/10 border border-cream/20 text-cream hover:bg-cream/20 font-medium text-xs flex items-center gap-1.5 transition-all font-suisse shrink-0",children:[c.jsx(Gr,{size:13}),"查看测评"]}),c.jsxs("a",{href:g.url,target:"_blank",rel:"noopener noreferrer",className:"px-3.5 py-2 rounded-xl bg-cream text-dark-blue font-bold text-xs flex items-center gap-1 hover:bg-white transition-all shadow-lg hover:shadow-cream/10 font-suisse whitespace-nowrap shrink-0",children:["直达官网 ",c.jsx(Dr,{size:13})]})]})]})]})]},g.id))})]})}function rd({onOpenArticle:i,isSubPage:u=!1}){const a=u?"h1":"h2";return c.jsxs("section",{id:"monitor",className:"py-20 border-t border-white/10 max-w-6xl mx-auto px-5 sm:px-8 select-none space-y-12",children:[c.jsxs("div",{className:"text-center max-w-3xl mx-auto space-y-3",children:[c.jsx("div",{className:"font-suisse uppercase tracking-[0.15em] text-[11px] text-tan font-medium",children:"24/7 AUTOMATED MONITORING & STAIR SPEEDTEST REPORT"}),c.jsx(a,{className:"font-stix text-cream text-3xl sm:text-4xl font-normal tracking-tight",children:"机场节点大盘"}),c.jsx("p",{className:"font-suisse text-xs sm:text-sm text-tan/70",children:"依据线路架构 (25%)、晚高峰丢包 (25%)、AI/流媒体解锁 (20%)、性价比 (15%)、在线率 (15%) 综合评测。"})]}),c.jsxs("div",{className:"bg-[rgba(17,16,15,0.45)] backdrop-blur-[20px] border border-white/10 rounded-[24px] p-6 sm:p-8 space-y-6 shadow-2xl",children:[c.jsxs("div",{className:"border-b border-white/10 pb-4",children:[c.jsx("h3",{className:"font-suisse text-lg font-bold text-cream",children:"📊 2026 最新 MiaoKo / Stair Speedtest 全节点测速报告"}),c.jsx("p",{className:"font-suisse text-xs text-tan/70 mt-1",children:"包含各大机场物理线路的 TLS RTT 延迟、HTTPS 响应时间、平均/最高吞吐吞吐量及 UDP 类型测试"})]}),c.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[c.jsxs("div",{className:"space-y-3",children:[c.jsx("div",{className:"relative aspect-[9/16] rounded-xl overflow-hidden border border-white/15 shadow-xl",children:c.jsx("img",{src:"/speedtest/top_airports_speedtest.jpg",alt:"2026 TOP顶级机场物理专线Stair Speedtest压测报告大图（包含暮光加速、隐形人机场、梯子云等全节点延迟与吞吐数据）",title:"TOP 顶级机场测速大盘 - 暮光加速 / 隐形人 / 梯子云",className:"w-full h-full object-cover",loading:"lazy"})}),c.jsx("figcaption",{className:"font-suisse text-xs text-cream/80 text-center",children:"图 1：TOP 顶级专线机场测速报告（暮光加速、隐形人、梯子云）"})]}),c.jsxs("div",{className:"space-y-3",children:[c.jsx("div",{className:"relative aspect-[9/16] rounded-xl overflow-hidden border border-white/15 shadow-xl",children:c.jsx("img",{src:"/speedtest/mid_airports_speedtest.jpg",alt:"2026 IPLC/IEPL高性价比机场Stair Speedtest压测报告大图（包含FlyV机场、灵猫网络、WgetCloud闪跃、微风网络等全节点实测）",title:"高性价比 IPLC/IEPL 机场测速大盘 - FlyV / 灵猫网络 / WgetCloud / 微风网络",className:"w-full h-full object-cover",loading:"lazy"})}),c.jsx("figcaption",{className:"font-suisse text-xs text-cream/80 text-center",children:"图 2：高性价比 IPLC/IEPL 机场测速报告（FlyV、灵猫网络、WgetCloud、微风网络）"})]})]})]}),c.jsx("div",{className:"hidden md:block overflow-x-auto bg-[rgba(17,16,15,0.45)] backdrop-blur-[20px] border border-white/10 rounded-[20px] shadow-2xl",children:c.jsxs("table",{className:"w-full text-left border-collapse text-xs font-suisse",children:[c.jsx("thead",{children:c.jsxs("tr",{className:"bg-title-bar text-cream font-medium border-b border-white/10",children:[c.jsx("th",{className:"p-4",children:"节点名称"}),c.jsx("th",{className:"p-4",children:"线路架构"}),c.jsx("th",{className:"p-4",children:"带宽与延迟"}),c.jsx("th",{className:"p-4",children:"AI / 流媒体解锁"}),c.jsx("th",{className:"p-4",children:"优惠码 / 价格"}),c.jsx("th",{className:"p-4 text-right",children:"操作通道"})]})}),c.jsx("tbody",{className:"divide-y divide-white/5",children:cs.map(d=>c.jsxs("tr",{className:"hover:bg-white/5 transition-colors",children:[c.jsxs("td",{className:"p-4 font-bold text-cream",children:[d.name,d.badge&&c.jsx("span",{className:"block text-[10px] text-amber-400 font-normal mt-0.5",children:d.badge})]}),c.jsx("td",{className:"p-4 text-cream/80 font-medium",children:d.architecture}),c.jsx("td",{className:"p-4 text-cream/80",children:d.speed}),c.jsx("td",{className:"p-4",children:c.jsx("div",{className:"flex flex-wrap gap-1",children:d.unlocks.slice(0,3).map((f,h)=>c.jsx("span",{className:"px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-cream/90 text-[10px]",children:f},h))})}),c.jsxs("td",{className:"p-4",children:[c.jsx("code",{className:"text-tan font-mono font-bold block",children:d.coupon}),c.jsx("span",{className:"text-[10px] text-tan/60",children:d.price})]}),c.jsx("td",{className:"p-4 text-right whitespace-nowrap",children:c.jsxs("div",{className:"inline-flex items-center gap-2 justify-end",children:[c.jsxs(ke,{to:`/article/review-${d.id}`,onClick:()=>i(d.id),className:"px-3 py-1.5 rounded-xl bg-cream/10 border border-cream/20 text-cream hover:bg-cream/20 text-xs font-medium transition-colors flex items-center gap-1 font-suisse",children:[c.jsx(Gr,{size:12}),"测评"]}),c.jsx("a",{href:d.url,target:"_blank",rel:"noopener noreferrer",className:"px-3.5 py-1.5 rounded-xl bg-cream text-dark-blue hover:opacity-90 font-bold text-xs inline-block transition-opacity font-suisse",children:"直达通道"})]})})]},d.id))})]})}),c.jsx("div",{className:"md:hidden space-y-4",children:cs.map(d=>c.jsxs("div",{className:"p-5 rounded-[20px] bg-[rgba(17,16,15,0.45)] backdrop-blur-[20px] border border-white/10 space-y-3 font-suisse",children:[c.jsx("div",{className:"flex items-center justify-between",children:c.jsx("h2",{className:"font-bold text-cream text-base",children:d.name})}),c.jsxs("div",{className:"text-xs text-tan/70 space-y-1",children:[c.jsxs("p",{children:[c.jsx("strong",{children:"线路架构："}),d.architecture]}),c.jsxs("p",{children:[c.jsx("strong",{children:"带宽速度："}),d.speed]}),c.jsxs("p",{children:[c.jsx("strong",{children:"优惠码："}),c.jsx("code",{className:"text-tan font-mono font-bold",children:d.coupon})," (",d.discount,")"]})]}),c.jsxs("div",{className:"flex items-center justify-between pt-2 border-t border-white/10 gap-2 font-suisse",children:[c.jsx("span",{className:"text-xs text-cream font-bold",children:d.price}),c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsxs(ke,{to:`/article/review-${d.id}`,onClick:()=>i(d.id),className:"px-3 py-2 rounded-xl bg-cream/10 border border-cream/20 text-cream text-xs font-medium flex items-center gap-1",children:[c.jsx(Gr,{size:12})," 查看测评"]}),c.jsx("a",{href:d.url,target:"_blank",rel:"noopener noreferrer",className:"px-3.5 py-2 rounded-xl bg-cream text-dark-blue font-bold text-xs",children:"直达官网 →"})]})]})]},d.id))})]})}const Wn=[{id:"tutorial-clash-ultimate-guide-2026",title:"Clash 终极指南：从原理剖析到多平台安装配置全景深度解析",description:"从 Clash 底层逻辑与分流原理拆解，到 Windows (Clash Verge)、macOS、Android (Clash Meta) 及 iOS (Stash) 全平台安装配置与高阶 DNS 防污染终极教程。",category:"tutorial",author:"资深测评师",pubDate:"2026-08-22",heroImage:"https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1000",tags:["Clash教程","ClashVerge","规则分流","TUN模式"],content:`# Clash 终极指南：从原理剖析到多平台安装配置全景深度解析

## 导言与文章目录

网络加速与科学上网技术日新月异，在众多的代理工具中，Clash 凭借其强大的规则分流引擎、极高的自定义程度以及丰富的图形界面生态，成为了无数技术爱好者与普通用户的首选。

本指南将从 Clash 的底层逻辑、核心原理讲起，逐步深入到 Windows、macOS、Android、iOS 以及 Linux 等全平台的安装与配置细节，并提供高阶规则编写与疑难排解方案。

### 目录

- **第一章**：Clash 是什么？深度技术原理拆解
- **第二章**：Clash 的核心架构与配置文件详解
- **第三章**：Windows 平台安装与配置（Clash Verge / Clash for Windows）
- **第四章**：macOS 平台安装与配置（Clash Verge / ClashX）
- **第五章**：Android 平台安装与配置（Clash Meta for Android）
- **第六章**：iOS 平台替代方案（Shadowrocket / Stash）
- **第七章**：Linux 与路由器部署（Docker & OpenWrt 旁路由）
- **第八章**：高阶玩法：自定义分流规则与 DNS 防污染
- **第九章**：常见故障排查与 FAQ

---

## 第一章：Clash 是什么？深度技术原理拆解

### 1.1 什么是 Clash？
Clash 是一个基于 Go 语言开发的基于规则的跨平台代理核心（Proxy Core）。需要特别明确的是，Clash 本身并不是一个可以直接提供翻墙服务的软件，也不是一个集成了节点的“加速器”，而是一个规则引擎与协议转发工具。

### 1.2 代理工具的发展演变
- **第一代：全局代理（如传统 VPN）**  
  所有网络流量均经过远端服务器。缺点是访问国内网站变慢、消耗代理流量、容易引发安全告警。

- **第二代：PAC 静态分流（如 early Shadowsocks）**  
  通过预设的域名列表（PAC 文件）区分内外网。缺点是规则难以动态更新，且无法处理复杂的多线路分流需求。

- **第三代：基于规则的动态分流引擎（如 Clash, Surge）**  
  支持根据 IP、域名、进程、GeoIP 数据等维度进行精准流量导向，支持多节点负载均衡、自动延迟测试与故障转移。

### 1.3 Clash 的工作原理与流量生命周期
当你在浏览器输入一个网址（如 www.google.com）时，Clash 的流量处理流程如下：

1. **流量拦截**：通过系统代理（System Proxy）或 TUN/TAP 虚拟网卡接管本机的网络请求。
2. **DNS 解析（Clash 内置 DNS）**：Clash 拦截 DNS 请求，防止 DNS 污染（DNS Poisoning），并通过 Fake-IP 或 Redir-Host 模式解析域名。
3. **规则匹配（Rules Engine）**：Clash 拿着目标域名/IP 去匹配配置文件中的 rules 列表（由上至下匹配）。
4. **出站选择（Proxy Groups）**：匹配到规则后，将请求导向指定的代理组（如“节点选择”、“自动切换”或“直连”）。
5. **协议封装与传输**：Clash 将流量使用指定协议（Vmess, Trojan, Shadowsocks, Hysteria2 等）加密打包，发送至远端服务器。

---

## 第二章：Clash 的核心架构与配置文件详解

Clash 的强悍之处在于其极为灵活的 \`config.yaml\` 配置文件。

### 2.1 核心配置模块解析
一份标准的 Clash 配置文件由以下五大核心板块组成：

\`\`\`yaml
# 1. 基础运行参数
port: 7890
socks-port: 7891
allow-lan: true
mode: rule
log-level: info

# 2. DNS 配置（防止 DNS 污染的核心）
dns:
  enable: true
  enhanced-mode: fake-ip
  nameserver:
    - 119.29.29.29
    - 223.5.5.5

# 3. 节点定义 (Proxies)
proxies:
  - name: "香港 01 节点"
    type: ss
    server: hk.example.com
    port: 443
    cipher: aes-128-gcm
    password: "your_password"

# 4. 代理组 (Proxy Groups)
proxy-groups:
  - name: "节点选择"
    type: select
    proxies:
      - "香港 01 节点"
      - "自动选择"
  - name: "自动选择"
    type: url-test
    url: http://www.gstatic.com/generate_204
    interval: 300
    proxies:
      - "香港 01 节点"

# 5. 分流规则 (Rules)
rules:
  - DOMAIN-SUFFIX,google.com,节点选择
  - DOMAIN-KEYWORD,youtube,节点选择
  - GEOIP,CN,DIRECT
  - MATCH,FINAL
\`\`\`

### 2.2 核心模式介绍
- **Rule（规则模式）**：依据 rules 列表进行精准分流（推荐）。
- **Global（全局模式）**：强制所有流量通过指定的同一个代理节点。
- **Direct（直连模式）**：绕过 Clash，所有流量直接由本地网络发出。

---

## 第三章：Windows 平台安装与配置

由于原版 Clash for Windows 已停止维护，目前推荐使用开源且持续更新的内核衍生客户端，如 Clash Verge Rev。

### 3.1 下载与安装
1. 访问 Clash Verge Rev 的 GitHub Release 官方发布页。
2. 下载 Windows 版本的安装包（如 \`Clash.Verge_x64-setup.exe\`）。
3. 运行安装程序，按提示完成安装。

### 3.2 导入订阅与启动
1. **获取订阅链接**：登录你的加速服务商后台，复制 Clash 订阅链接（YAML 或 URL 格式）。
2. **导入配置**：打开 Clash Verge -> 点击侧边栏 Profile（配置） -> 将链接粘贴至顶部 URL 框 -> 点击 Import（导入）。
3. **激活配置**：选中刚导入的配置文件，使其变为选中激活状态。
4. **开启系统代理**：切换到 Settings（设置） -> 勾选 System Proxy（系统代理）。

### 3.3 开启 TUN 模式（处理游戏及不走系统代理的软件）
1. 在设置中开启 TUN Mode（TUN 模式）。
2. 首次开启会提示安装虚拟网卡驱动，点击允许并授权。
3. TUN 模式可将接管层级提升至网卡级，完美解决 UWP 应用、Telegram 或部分游戏不走代理的问题。

---

## 第四章：macOS 平台安装与配置

在 macOS 系统上，推荐使用 Clash Verge Rev (macOS 版) 或 ClashX Meta。

### 4.1 安装步骤
1. 下载适合你芯片型号的安装包（Apple Silicon 芯片选 aarch64.dmg，Intel 芯片选 x64.dmg）。
2. 打开 .dmg 文件，将应用拖入 Applications 文件夹。
3. 若提示“无法打开未认证开发者应用”，请前往 系统设置 -> 隐私与安全性 -> 仍要打开。

### 4.2 配置与权限授予
1. 打开应用，同理导入订阅链接。
2. 开启 Set as System Proxy（设置为系统代理）。
3. 若需要开启 Enhanced Mode（增强模式/TUN），需要在弹出的系统提示框中输入 macOS 开机密码，以授权修改系统网络路由表。

---

## 第五章：Android 平台安装与配置

Android 端首选开源客户端 Clash Meta for Android (CMFA) 或 Flclash。

### 5.1 安装与设置步骤
1. 下载并安装 .apk 文件。
2. 打开 App，点击 配置 (Profiles) -> 新配置 -> URL 导入。
3. 粘贴订阅链接，设置自动更新间隔（如 1440 分钟），点击右上角保存。
4. 返回主界面，选中刚刚导入的配置。
5. 点击主页的 已停止 -> 启动，系统会弹出 VPN 权限申请，点击 允许。

### 5.2 智能分流与应用绕过
- **分流应用设置**：在设置中可开启“应用分流”功能，指定哪些 App 走 Clash，哪些 App 强制直连（如微信、银行类 App 建议直连）。

---

## 第六章：iOS 平台替代方案

iOS 由于系统限制，无法直接运行原始的 Clash 核心，但可以使用兼容 Clash 订阅协议的顶级客户端：
- **Shadowrocket（小火箭）**：简单易用，支持导入 Clash 订阅。
- **Stash**：号称 iOS 上的 Clash 最佳移植版，完整继承了 Clash 的 YAML 规则引擎与策略组逻辑。

---

## 第七章：高阶玩法与进阶优化

### 7.1 DNS 防污染与 Fake-IP 原理解析
传统 DNS 查询极易受到 ISP 的劫持与污染。Clash 引入了 Fake-IP 机制：
1. 当本地向 Clash 请求 google.com 时，Clash 立即返回一个假的本地保留 IP（如 198.18.0.2）。
2. 本地应用直接向该假 IP 发起连接，Clash 接管流量后，将域名打包直接发往远程代理节点由远端解析。
3. 这完美避开了本地 DNS 污染，同时大幅降低了 DNS 查询的时间开销。

### 7.2 自定义分流规则配置（Rule Providers）
通过引入外部规则集，可以实现规则的自动维护更新：

\`\`\`yaml
rule-providers:
  apple:
    type: http
    behavior: domain
    url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/apple.txt"
    path: ./ruleset/apple.yaml
    interval: 86400

rules:
  - RULE-SET,apple,DIRECT
\`\`\`

---

## 第八章：常见故障排查（FAQ）

- **Q1：开启 Clash 后，网页打不开，但 Telegram 可以连通？**  
  *原因*：通常是 DNS 解析死锁或系统代理残留。  
  *解决*：在 Clash 设置中重启 DNS 模块，或关闭 Clash 后在 Windows 系统网络设置中重置代理。

- **Q2：为什么节点延迟测试显示 -1ms 或 Timeout？**  
  *原因*：节点配置信息失效、本地网络阻止了测试 URL，或者节点本身已离线。  
  *解决*：更新订阅，并在配置中更改 url-test 的测试网址为 http://www.gstatic.com/generate_204。

- **Q3：开启 TUN 模式后局域网设备无法互联？**  
  *原因*：TUN 接管了局域网流量。  
  *解决*：在配置文件中的 dns.fake-ip-filter 下添加局域网 IP 段，或在 rules 中将 GEOIP,PRIVATE,DIRECT 至于顶部。

---

## 结语

Clash 不仅仅是一个网络加速工具，更是个人流量管理与网络安全防护的利器。通过合理地配置分流规则与 DNS 模式，你可以无缝兼顾国内网络的极致速度与海外优质资源的顺畅访问。
`},{id:"review-flyv",title:"[2026机场推荐] FlyV 机场深度评测：IEPL游戏与流媒体双特化专线晚高峰实测与配置指南",description:"FlyV 是一家深耕游戏加速与跨境专线的高性能机场。全线采用 IEPL 游戏与流媒体双特化专线，全节点 1x 计费且无限速、不限设备数。完美支持 4K/8K 影音与 ChatGPT 等 AI 工具。",category:"review",author:"资深测评师",pubDate:"2026-08-22",heroImage:"https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1000",tags:["FlyV机场","IEPL专线","游戏加速","流媒体解锁"],content:`# 🌐 FlyV 机场深度解析与指南

> **摘要**：FlyV 是一家深耕游戏加速与跨境专线的高性能机场。全线采用 IEPL 游戏与流媒体双特化专线，全节点 1x 计费且无限速、不限设备数。完美支持 4K/8K 影音与 ChatGPT 等 AI 工具。

---

## 📊 2026 晚高峰 1000M 节点物理线路测速报告

![2026 FlyV 机场 晚高峰 Stair Speedtest 压测大盘](/speedtest/flyv_speedtest.jpg "2026 FlyV 机场 晚高峰 Stair Speedtest 压测大盘")



## 一、 平台概览与注册入口

| 项目 | 详细说明 |
| :--- | :--- |
| **服务名称** | FlyV 机场 |
| **线路架构** | IEPL 专线（游戏与流媒体双特化） |
| **代理协议** | Shadowsocks / VLESS / Hysteria 2 |
| **计费与限制** | 全节点 1x 计费，无限速，不限客户端及设备数量 |
| **解锁能力** | 奈飞、迪士尼+、油管满速；Bilibili 港澳台及 TVB 原生解锁；ChatGPT、Claude 等 AI 工具 |
| **生态兼容** | Surge、Shadowrocket、Clash 系列及 Android 端 Surfboard |
| **专属优惠码** | \`fly20\` |
| **注册入口** | 👉 [点击直达 FlyV 官网注册页面](https://rtu23u5.flyvttt.sbs/#/?code=28mmffKv) |

---

## 二、 订阅套餐价格表

### 1. 周期与独享订阅套餐

| 套餐名称 | 方案价格 | 适合人群与特点 |
| :--- | :--- | :--- |
| **FlyV 会员·入门方案** | ¥25.00 / 月 | 150G 起步大流量，性价比优选（推荐） |
| **FlyV 会员·进阶方案** | ¥50.00 / 月 | 日常高频使用与中度影音需求 |
| **FlyV 会员·高端方案** | ¥110.00 / 月 | 多设备共享与大流量重度用户 |
| **FlyV 会员·商业方案** | ¥190.00 / 月 | 团队办公与高并发业务需求 |
| **FlyV 会员·年付标准轻量版** | ¥99.00 / 年 | 低成本长期轻度备用 |
| **FlyV 会员·原生IP·独享黄金专线** | ¥600.00 / 月 | 追求独立极高品质 IP 与专属带宽极客用户 |

---

### 2. 单次不限时流量包

| 套餐名称 | 一次性价格 | 说明 |
| :--- | :--- | :--- |
| **单次轻量版·小流量包** | ¥189.00 / 一次性 | 适合低频备用或按需使用 |
| **单次轻量版·标准流量包** | ¥479.00 / 一次性 | 长期不限时中等用量 |
| **单次轻量版·精英流量包** | ¥799.00 / 一次性 | 大容量长期备用 |

---

## 三、 晚高峰 1000M 测速数据



| 测速节点地域 | 物理线路类型 | 晚高峰平均延迟 | 1000M 宽带实测吞吐量 | 丢包率表现 |
| :--- | :--- | :-: | :-: | :-: |
| **香港 HKG** | 特化游戏/影音专线 | 16ms - 24ms | 720 Mbps - 930 Mbps | 0.0%（极佳） |
| **日本 NRT** | 极速 IEPL 专线 | 40ms - 50ms | 580 Mbps - 850 Mbps | < 0.1%（平稳） |
| **台湾 TPE** | 低延迟直连线路 | 30ms - 38ms | 500 Mbps - 750 Mbps | < 0.2%（极佳） |

---

## 四、 选购建议与亮点总结

* **专线分流调度**：针对游戏 UDP 流量与流媒体 TCP 流量进行智能分流，确保跨国游戏（港服、日服等）丢包率几乎为 0，有效降低 Ping 值。
* **流媒体原生支持**：不仅覆盖常规欧美节点，还独家优化了冷门高带宽节点及港澳台 TVB / Bilibili 地区解锁。
* **性价比策略**：入门方案起步即给 150G 大流量（¥25/月），结账时输入专属优惠码 **\`fly20\`** 体验更佳，非常适合跨国游戏玩家、手游党和大流量影音用户。`},{id:"ultimate-network-guide-2026",category:"tutorial",title:"[2026机场推荐] 11家稳定科学上网梯子机场深度测评：从IEPL专线选型、晚高峰测速到Clash/Sing-box客户端配置终极指南",description:"2026最新高品质翻墙梯子机场推荐与对比测评指南。深度拆解底层物理线路拓扑（BGP/IEPL/IPLC）、传输协议演进（Shadowsocks/v2ray/Trojan/Sing-box Hysteria2）、晚高峰 QoS 避坑、全球流媒体与 AI 工具（OpenAI/Claude）解锁机制，并提供全流量梯度机场精选矩阵。",pubDate:"2026-08-19",author:"极速测评编辑部",tags:["机场推荐","梯子推荐","IEPL专线","网络协议","Clash","Sing-box","流媒体解锁","ChatGPT"],heroImage:"https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80",content:`>   - 6.2 晚高峰 QoS 限速应对策略

---

# 第一章：网络加速服务（机场）底层拓扑与技术原理解析

在探索如何选择高品质的“机场”（即网络加速服务商）之前，我们首先需要从底层物理网络和传输架构上理解：**为什么不同的节点在体验上会有天壤之别？为什么有的节点平时速度飞快，一到晚上 8 点（晚高峰）就频繁卡顿丢包？**

---

## 1.1 为什么我们需要网络加速？（GFW 运作机制简史）

国家防火墙（Great Firewall, 简称 GFW）在过去十几年中经历了从简单的 DNS 污染、IP 封锁，到复杂的**深度包检测（Deep Packet Inspection, DPI）**以及基于机器学习的流量行为特征识别的演进。

当您在浏览器中尝试访问海外服务（如 Google、Wikipedia 或 OpenAI）时，数据包需要经过骨干网出口路由器。GFW 的检测模块会在以下层面进行拦截：

1. **DNS 污染（DNS Poisoning）**：当您查询目标域名的 IP 地址时，DNS 递归服务器在传输过程中被劫持，并返回一个虚假的、不可达的 IP 地址。
2. **IP 封锁与黑洞路由（IP Blocking）**：直接将特定的海外服务器 IP 加入黑名单，或者在骨干网边缘路由器上设置黑洞路由，使所有丢往该 IP 的数据包直接丢弃。
3. **SNI 阻断（Server Name Indication Blocking）**：在 HTTPS 握手阶段，客户端发送的 \`Client Hello\` 包中会包含明文的域名信息（SNI）。GFW 读取该 SNI 后，若发现敏感域名，会立刻向通信双方发送伪造的 \`RST\`（重置）数据包，强制切断 TCP 连接。
4. **主动探测（Active Probing）**：当 DPI 系统怀疑某个未知 IP 的加密流量特征类似于代理协议（如早期的 Shadowsocks）时，GFW 会主动扮演客户端向该 IP 和端口发起特定结构的探测包。若服务器返回了符合代理特征的响应，该 IP 和端口就会在几分钟内被封禁。

网络加速服务（机场）的本质，就是通过在中途搭建**中间代理节点**，将原始的访问请求加密封装为合法的、不可识别的流量，避开 GFW 的检测与阻断。

---

## 1.2 物理线路三大架构：直连、公网中转与 IEPL/IPLC 国际专线

决定一个机场速度与稳定性的**最核心要素，并不是节点名称上标注的‘韩国’或‘日本’，而是其流量越境时所使用的物理线路类型**。目前市场上常见的线路架构分为以下三大类：

### 1. 直连线路（Direct Connection / 163网）
数据包直接通过电信 163 骨干网、联通 169 网或移动 CMI 出口过境。
* **优点**：成本极低。
* **缺点**：缺少中转防护，IP 极易被封锁；晚高峰时期公网出口拥堵，丢包率可高达 30% ~ 50%。

### 2. 公网中转线路（Public Transit / BGP Entrance）
流量先通过国内服务器（如广州电信、上海联通 BGP）入口接入，经过加密打通隧道后再通过公网出口发送至海外节点。
* **优点**：对国内三网用户进行入口优化，大幅降低首包延迟。
* **缺点**：过境依然走公网出口，敏感时期可能受到骨干网 QoS 抽查限速。

### 3. 企业级国际专线（IEPL / IPLC）
* **IPLC（International Private Leased Circuit）**：国际私有租用线路，指点对点的物理光缆专线。
* **IEPL（International Ethernet Private Line）**：国际以太网专线，在二层（数据链路层）实现完全隔离。
* **核心优势**：**流量完全不经过公网 GFW 检查**，数据直接在内网光纤中传输。具备零丢包、超低延迟、极高 SLA 稳定性，即使在特殊敏感时期也能保障 24 小时流畅连通。

---

## 1.3 BGP 多线接入与入口负载均衡原理

优质机场会在国内部署 **BGP（Border Gateway Protocol，边界网关协议）入口**。BGP 服务器能够智能识别用户的网络运营商（电信、联通、移动），将流量自动调度至最优接入节点，并配合**分布式负载均衡集群**，确保单点故障时瞬间完成故障转移（Failover）。

---

# 第二章：传输协议演进史：从 SS 到 Hysteria 2 与 TUIC

代理协议是客户端与服务器端沟通的“密码语言”。协议的演进史，就是一部加密防御与流量伪装的对抗史。

---

## 2.1 传统 Socks5 与 Shadowsocks 的加密机制

* **Socks5**：明文传输，没有任何加密，仅用于局域网内代理，无法穿越任何防火墙。
* **Shadowsocks (SS)**：基于对称加密算法（如 AEAD_AES_256_GCM），曾是划时代的代理协议。然而由于其固定的握手特征和数据包长度熵值分布，目前已能被高阶 DPI 系统通过机器学习精确识别。

---

## 2.2 VMess / VLESS / Trojan 协议与 TLS 伪装技术

* **VMess**：V2Ray 核心协议，引入时间戳与 UUID 身份校验，克服了 SS 主动探测的缺陷。
* **VLESS**：轻量化架构，去除了复杂的二次加密逻辑，性能更高。
* **Trojan 协议**：将代理流量完全伪装成标准的 **HTTPS 流量**。当审查设备探测该服务器时，服务器会返回一个正规的 Nginx/Apache 网站页面，实现完美的隐蔽性。

---

## 2.3 基于 UDP 的新型抗封锁协议：Hysteria 2 与 TUIC v5

传统的 TCP 协议在遇到高丢包线路时，由于拥塞控制算法（如 Cubic）会导致速率呈断崖式下跌。
* **Hysteria 2**：基于 QUIC (UDP) 协议，内置自研的拥塞控制算法，能够在丢包率高达 30% 的劣质网络下依然跑满带宽。
* **TUIC v5**：基于 QUIC 协议的多路复用代理，降低了握手延迟，极为适合移动网络环境。

---

## 2.4 Reality 协议：无需自备域名的终极伪装方案

VLESS-REALITY 协议无需开发者自备域名和证书，而是直接借用大型合法网站（如 Apple, Microsoft, Yahoo）的真实 TLS 证书进行流量掩护，彻底解决证书被反查和 SNI 阻断的问题。

---

# 第三章：2026 年度高品质网络加速服务（机场）综合选型与实测

结合前文所述的物理线路与传输协议，我们在测试了数十家服务商后，总结出 2026 年选型四大硬性标准：

---

## 3.1 选型四大指标

1. **连通率与 SLA 承诺**：是否提供 99.9% 级别的在线率保障。
2. **晚高峰带宽保底**：晚 20:00 - 23:00 丢包率低于 1%，4K 视频秒开无缓冲。
3. **解锁率**：稳定解锁 OpenAI, Claude, Netflix, Disney+, Google Gemini 等服务。
4. **全平台客户端兼容性**：支持 Clash, Sing-box, Shadowrocket 一键订阅同步。

---

# 第四章：流媒体、AI 工具（OpenAI/Claude）与风控解锁深度剖析

现代互联网的体验已经远远超出了“能否打开网页”的范畴。对于大多数使用加速服务的用户而言，**能否稳定登录 OpenAI ChatGPT、是否会触发 Claude 封号风险、能否顺畅观赏 Netflix 4K 原生画质**，才是检验节点质量的真正试金石。

---

## 4.1 互联网风控系统（Fraud Score）的工作机制

以 Cloudflare、Imperva、MaxMind 以及 OpenAI 的 Risk Engine 为代表的现代风控系统，不再单纯依赖“IP 黑名单”来拦截代理流量，而是综合运用以下多维数据进行**实时风险评分（0 - 100 分）**：

1. **IP 属性划分（Datacenter vs Residential）**：
   - **机房 IP (Datacenter IP)**：由 AWS、DigitalOcean、Linode 等云厂商分配的 IP，风险得分极高，易触发 403 / Access Denied。
   - **原生 IP / 住宅 IP (ISP / Residential IP)**：由当地电信运营商直接分配给家用宽带的 IP，欺诈得分低，完美通过 AI 风控检测。
2. **同 IP 并发数检测**：当数万人共享同一个机房出口 IP 访问 OpenAI 时，系统会立刻触发人机验证 (Cloudflare Turnstile)。

---

## 4.2 住宅 IP (ISP) 节点挑选指南

在选择节点时，优先使用标注有 **“原生住宅 IP”** 或 **“AI 专线”** 的美国（US）、新加坡（SG）、日本（JP）节点。避免使用香港（HK）节点登录 OpenAI 或 Claude，因为相关服务在香港地区暂未开放。

---

# 第五章：全平台客户端终极配置教程

---

## 5.1 Clash Verge Rev 极速配置指南 (Windows / macOS)

1. **下载与安装**：认准官方 GitHub 仓库获取安装包。
2. **复制并导入订阅**：在机场用户后台复制 Clash 订阅链接，粘贴至软件 Profiles 页面。
3. **开启 TUN 模式**：在设置中开启 TUN 模式，接管系统全局流量，为游戏及命令行提供底层加速。

---

## 5.2 Sing-box 跨平台配置指南 (iOS / Android / Mac)

1. 在 Sing-box Profiles 中点击 **Add New**，选择 **Remote**。
2. 粘贴 Sing-box 统一订阅链接，点击 保存。
3. 开启 **Enable Service** 即可畅享极速网络体验。

---

# 第六章：常见网络故障诊断与安全隐私防护

1. **DNS 泄露防范**：建议在代理软件中启用 **DoH (DNS over HTTPS)** 或 **DoT (DNS over TLS)**，防止运营商获取您的域名解析日志。
2. **节点断连排查**：若突然无法上网，请首先检查系统时间是否精准同步，时间偏差超过 30 秒会导致 TLS 握手失败。`},{id:"cross-platform-ai-tools",category:"tutorial",title:"跨平台 AI 效率神器安装与网络优化实战：桌面端/移动端 AI 工具官网下载与高可用 AI 机场推荐指南",description:"随着 AI 融入日常工作流，独立桌面客户端与移动端应用已成为主流。相比网页端，官方客户端提供了更加稳定的上下文保持、快捷键唤起以及本地文件深度融合能力。",pubDate:"2026-08-19",author:"极速测评编辑部",tags:["AI工具","ChatGPT","Claude","Cursor","下载指南"],heroImage:"/ai-robot-hero.jpg",content:`# 跨平台 AI 效率神器安装与网络优化实战：桌面端/移动端 AI 工具官网下载与高可用 AI 机场推荐指南

随着 AI 融入日常工作流，独立桌面客户端与移动端应用已成为主流。相比网页端，官方客户端提供了更加稳定的上下文保持、快捷键唤起以及本地文件深度融合能力。

本文将为你整理核心生产力 AI 工具的**官网下载矩阵**，并针对用户最关心的网络连接问题，深度解析**有什么机场适合使用 AI**，助你搭建一套高可用、零报错的 AI 办公环境。

---

## 一、 核心 AI 生产力客户端官方下载矩阵

为了方便大家快速检索，我们将热门 AI 工具的官网与支持平台进行了整理：

| AI 工具名称 | 主要用途 | 官方网站入口 | 支持客户端平台 | 客户端核心特色 |
| :--- | :--- | :--- | :--- | :--- |
| **ChatGPT** | 综合对话 / 逻辑推理 | https://chatgpt.com | Win / Mac / iOS / Android | 系统级快捷键唤起、语音实时对话 |
| **Claude** | 长文本 / 代码与写作 | https://claude.ai | Win / Mac / iOS / Android | 原生 Artifacts 渲染、本地文件直接拖拽 |
| **Cursor** | AI 辅助代码重构 | https://cursor.com | Win / Mac / Linux | 基于 VS Code 深度定制、全代码库索引 |
| **Perplexity** | AI 联网搜索与研究 | https://perplexity.ai | Win / Mac / iOS / Android | 替代传统搜索引擎、实时引用来源 |
| **Poe** | 多模型聚合体验 | https://poe.com | Win / Mac / iOS / Android | 快速切换 ChatGPT、Claude、Llama 等 |

> **安全验证提示：** 请勿从任何论坛、网盘或非官方第三方镜像站下载 .exe 或 .dmg 安装文件，请务必认准上述官方域名获取最新版本。

---

## 二、 客户端网络连接瓶颈：为什么普通节点频繁报错？

在安装完官方客户端后，不少用户经常会遇到客户端加载白屏、对话框显示“Networking Error”或者要求不断重试人机验证的情况。

AI 服务商（如 OpenAI、Anthropic）使用了先进的风控检测机制（如 Cloudflare Turnstile、IP 风险分级）：
* **普通数据中心节点：** 因同一 IP 下有成千上万请求，极易被识别为机器人流量。
* **跨区频繁切换：** 客户端在后台保持长连接，若节点不断跳变，会导致账号被系统列入风险风控名单。

---

## 三、 深度解析：有什么机场适合使用 AI？

要在客户端中获得顺畅无阻的 AI 体验，选对网络代理至关重要。究竟**有什么机场适合使用 AI**？我们在评测了数十家网络服务商后，总结出以下核心挑选标准与推荐配置：

### 1. 优质 AI 机场的核心特征
* **提供 AI 专用独立出口：** 优质机场会专门采购干净的住宅 IP (ISP 节点) 或专门解锁 OpenAI/Claude 的专线节点。
* **高可用性与低延迟：** 采用 IPLC / IEPL 内网专线的机场，不仅能绕过公网拥堵，还能提供极低的丢包率，保证 AI 流式打字输出不卡顿。
* **支持自动化分流（Clash / Sing-box / Quantumult X）：** 好的机场会提供成熟的订阅规则，自动将 AI 流量导入专属解锁节点，不影响国内其他软件的上网速度。

### 2. 适合 AI 使用的机场节点推荐标准
在选择具体的机场节点时，请参照以下权重进行配置：

1. **首选节点类型：** 美国原生 IP（US）、新加坡原生 IP（SG）、日本原生 IP（JP）。
2. **避开不兼容地区：** 香港（HK）节点通常无法直接解锁 OpenAI 和 Claude 官方服务，不建议作为 AI 默认分流出口。
3. **节点纯净度测试：** 可使用 IP 风险检测工具检查节点 IP，欺诈得分（Fraud Score）低于 20% 的节点最适合长期稳定使用 AI。

---

## 四、 客户端与网络优化最佳实践建议

1. **开启规则分流：** 在客户端代理软件中，将 AI 相关域名（如 *.openai.com, *.claude.ai, *.cursor.sh）设置为固定走向专用的 AI 节点，避免走全局模式。
2. **保持客户端更新：** 官方客户端会定期修补 API 接口与安全策略，建议开启自动更新功能。
3. **固定登录节点：** 尽量在使用同一设备时保持固定的 AI 节点地区，减少因 IP 跨国剧烈跳变引起的账号风控。

通过从官方渠道下载 AI 工具客户端，并配置高质量的 AI 专用机场节点，你就能彻底摆脱网络限制与人机验证的干扰，享受极致顺畅的 AI 生产力体验。`},{id:"hot-ai-tools-download-guide",category:"tutorial",title:"2026 热门 AI 工具官网与客户端下载汇总及网络配置：全平台客户端安装与优质 AI 机场节点选型指南",description:"在生成式 AI 快速发展的今天，使用原生桌面端与移动端客户端能够大幅提升交互效率、支持快捷键唤起与本地文件联动。",pubDate:"2026-08-19",author:"极速测评编辑部",tags:["AI教程","网络优化","ChatGPT客户端","住宅IP"],heroImage:"https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",content:`# 2026 热门 AI 工具官网与客户端下载汇总及网络配置：全平台客户端安装与优质 AI 机场节点选型指南

在生成式 AI 快速发展的今天，使用原生桌面端与移动端客户端能够大幅提升交互效率、支持快捷键唤起与本地文件联动。然而，面对网络上铺天盖地的第三方代理和二次打包软件，寻找**官方正版下载入口**至关重要。

同时，由于 OpenAI、Anthropic 等 AI 巨头对访问网络有极高的风控要求，**选对合适的网络节点（机场）** 是保证客户端不卡顿、不报 403 错误或被封号的关键。本文将为你汇总当前最热门的 AI 工具官网与官方客户端下载渠道，并深度解析如何选择适合 AI 工具的网络节点。

---

## 一、 热门 AI 工具官方入口与客户端下载指南

### 1. ChatGPT (OpenAI)
* **官方网站：** https://chatgpt.com / https://openai.com
* **客户端支持：** Windows、macOS、iOS、Android
* **下载渠道：**
  * **macOS / Windows 桌面端：** 登录 ChatGPT 官网后，在设置菜单或首页顶部提示中点击“下载桌面应用程序”（Download Desktop App）。
  * **移动端：** 苹果用户需登录美区/港区等非中国大陆 Apple ID，在 App Store 搜索 ChatGPT 下载；Android 用户可通过 Google Play 商店或官网提供的 APK 安装包获取。

### 2. Claude (Anthropic)
* **官方网站：** https://claude.ai
* **客户端支持：** macOS、Windows、iOS、Android
* **下载渠道：**
  * **Claude Desktop：** 访问官网底部或控制台的客户端下载页面，支持 macOS (Apple Silicon & Intel) 及 Windows 10/11。
  * **移动端：** 可在 App Store 及 Google Play 搜索 Claude 官方应用。

### 3. Cursor AI (智能代码编辑器)
* **官方网站：** https://cursor.com
* **客户端支持：** Windows、macOS、Linux
* **下载渠道：**
  * 访问官网首页直接点击 **“Download for Free”**，系统会自动识别你的操作系统类型并提供最新版本的安装包。

### 4. Perplexity AI (AI 搜索引擎)
* **官方网站：** https://perplexity.ai
* **客户端支持：** macOS、Windows、iOS、Android
* **下载渠道：**
  * 官网右侧或菜单栏中提供 **Perplexity Pro/Desktop** 下载入口，移动端需通过 App Store / Google Play 获取。

> **防骗提醒：** 请务必认准上方提供的官方域名，切勿在未经验证的第三方下载站或搜出来的“广告赞助链接”中下载被篡改的客户端安装包，以免泄露个人 API Key 或账号密码。

---

## 二、 客户端使用痛点：为什么网络节点选型至关重要？

很多用户在下载并安装了 ChatGPT 或 Claude 官方客户端后，经常遇到以下问题：
1. **登录失败或一直弹窗人机验证（Cloudflare CAPTCHA）**
2. **提示“Access Denied”或“Service unavailable in your region”**
3. **客户端响应极慢，流式输出经常中断**

这些问题的根本原因在于 **AI 服务商对节点 IP 的风控级别远远高于普通网站**。如果你的网络节点被过多用户共用，或者属于数据中心（Datacenter）高风险 IP，就会直接触发防护机制。

---

## 三、 有什么机场适合使用 AI？优质 AI 机场推荐与选型标准

在选择配合 AI 工具使用的网络服务（机场）时，普通仅看重“看视频速度”的节点往往无法满足需求。那么，**有什么机场适合使用 AI**？选购与配置时应参考以下核心标准：

### 1. 节点具备纯净的原生 IP / 家用住宅 IP (Residential IP)
* **推荐要求：** 适合 AI 的机场通常会提供标注有 **“原生 IP”、“住宅 IP” 或 “AI 专线”** 的节点。这类 IP 欺诈分低，不易被 OpenAI 或 Anthropic 标记为机房恶意流量。

### 2. 拥有稳定的解锁机制与极低的节点变动频率
* 某些普通机场经常更换出口 IP，这会导致 AI 客户端检测到异地频繁登录而触发二次验证。推荐选择节点稳定性高、出口 IP 固定的机场。

### 3. 节点支持完善的分流规则（Split Tunneling）
* 优质的 AI 机场会针对 openai.com、claude.ai、perplexity.ai 等域名配置专门的路由规则，确保 AI 流量走最优质的节点，而普通网页走常规节点。

### 4. 节点选择建议（地区推荐）
* **ChatGPT / Claude / Cursor：** 优先推荐 **美区（US）、日区（JP）、新加坡（SG）** 节点。
* **避坑提示：** 尽量避免使用被严格限制地区（如香港 HK 节点，部分 AI 工具直接屏蔽 HK IP）作为 AI 工具的出口。

---

## 四、 总结

选择正规渠道下载 AI 工具官方客户端，能够让你获得最新功能与最顺畅的交互体验。而配上一家**适合使用 AI 的高质量机场**，则是摆脱报错、封号和人机验证的决定性因素。在挑选机场节点时，重点关注 **原生 IP 质量、AI 解锁保证以及稳定性**，才能真正发挥 AI 生产力工具的最大价值。`},{id:"review-lingmao",category:"review",title:"灵猫网络 (Spirit Cat) 机场解析与指南：IPLC 专线与全节点 1 倍率",description:"灵猫网络（Spirit Cat）于 2026 年上线运营，主打 IPLC 专线线路，全节点 1 倍流量倍率、不限速且不限制设备连接数量，支持主流流媒体与 AI 工具解锁。",pubDate:"2026-08-22",author:"极速测评编辑部",tags:["灵猫网络","IPLC专线","1倍率","全解锁"],heroImage:"https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80",content:`# 🌐 灵猫网络 (Spirit Cat) 机场解析与指南

> **摘要**：灵猫网络（Spirit Cat）于 2026 年上线运营，主打 IPLC 专线线路。服务宣传全节点 1 倍流量倍率、不限速且不限制设备连接数量，支持通用订阅导入及主流流媒体与 AI 工具解锁。

---

## 📊 2026 晚高峰 1000M 节点物理线路测速报告

![2026 灵猫网络 晚高峰 Stair Speedtest 压测大盘](/speedtest/lingmao_speedtest.jpg "2026 灵猫网络 晚高峰 Stair Speedtest 压测大盘")



## 一、 平台概览与注册入口

| 项目 | 详细说明 |
| :--- | :--- |
| **服务名称** | 灵猫网络 (Spirit Cat) |
| **运营背景** | 2026 年上线，宣称由海外技术团队运营 |
| **线路类型** | IPLC 专线（宣传所有套餐均为 1 倍流量倍率） |
| **节点地区** | 香港、台湾、日本、美国、新加坡、韩国、印度及东南亚/欧洲部分地区 |
| **支付方式** | 微信支付、支付宝 |
| **订阅与设备** | 支持通用订阅，宣传不限制设备连接数量及客户端 |
| **解锁支持** | 支持 YouTube、Netflix、Disney+ 等流媒体，以及 ChatGPT、Gemini、TikTok 等 AI/短视频应用 |
| **注册入口** | 👉 [点击直达灵猫网络官网注册页面](https://edp01.civetaff.com/#/?code=8n0vbtUD) |

---

## 二、 周期套餐对比

| 套餐名称 | 方案价格 | 套餐流量 | 适合人群与特点 |
| :--- | :--- | :-: | :--- |
| **灵猫·年付小包** | ¥85 / 年（折合约 ¥7.08/月） | 45 GB | 低频备用，能接受年付风险 |
| **灵猫·年付 Small** | ¥195 / 年 | 150 GB | 中低用量，已完成短期测试用户 |
| **灵猫·年付 Big** | ¥295 / 年 | 300 GB | 中等用量，长期稳定需求 |
| **灵猫·季付 Small** | ¥65 / 季 | 150 GB | 减少续费次数的轻中度用户 |
| **灵猫·季付 Big** | ¥125 / 季 | 300 GB | 中等流量需求，先用季度验证 |
| **灵猫·月付 Small** | ¥25 / 月 | 150 GB | 首次体验、日常轻中度使用（推荐） |
| **灵猫·月付 Big** | ¥45 / 月 | 300 GB | 多设备共享或较高流量需求 |

---

## 三、 主要特点与使用建议

* **通用订阅与客户端支持**：支持生成通用订阅链接，客服称可提供小火箭（Shadowrocket）下载账号支持。
* **流媒体与 AI 解锁**：宣称覆盖常规地区及冷门节点，完美解锁主流 4K 影音与 AI 工具。
* **选购与测试建议**：建议首次使用优先选购 **月付 Small 套餐 (¥25/月)** 在自己的网络环境与晚高峰时段测试满意后再考虑长周期套餐。`},{id:"review-weifeng",category:"review",title:"微风网络深度解析与指南：高性价比 IEPL/IPLC 专线与 61 个节点分布",description:"微风网络是一家高性价比的入门级网络加速服务商，提供约 61 个节点，采用 IEPL 专线、IPLC 专线与 BGP 中继架构，延迟约 42ms，丢包率仅 0.1%。",pubDate:"2026-08-22",author:"极速测评编辑部",tags:["微风网络","IEPL专线","61节点","低延迟"],heroImage:"https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",content:`# 🌐 微风网络深度解析与指南

> **摘要**：微风网络是一家高性价比的入门级网络加速服务商。服务提供约 61 个节点，采用 IEPL 专线、IPLC 专线与 BGP 中继架构，解锁主流流媒体及 AI 工具。门槛低至 10 元/月，非常适合学生党、轻度用户及文献资料查询需求。

---

## 📊 2026 晚高峰 1000M 节点物理线路测速报告

![2026 微风网络 晚高峰 Stair Speedtest 压测大盘](/speedtest/weifeng_speedtest.jpg "2026 微风网络 晚高峰 Stair Speedtest 压测大盘")



## 一、 平台概览与注册入口

| 项目 | 详细说明 |
| :--- | :--- |
| **服务名称** | 微风网络 |
| **线路类型** | IEPL 专线、IPLC 专线、BGP 中继 |
| **代理协议** | Shadowsocks、Vmess、Trojan |
| **客户端支持** | Windows、macOS、iOS、Android |
| **解锁能力** | Netflix、Disney+、ChatGPT 等 |
| **支付方式** | 支付宝、微信支付、USDT |
| **售后支持** | 24/7 在线客服、TG 群组、工单系统 |
| **优惠码** | \`weifeng90\` |
| **注册入口** | 👉 [点击直达微风网络官网](https://wep01.breezenetaff.com/#/?code=JHqHSog8) |

---

## 二、 订阅套餐价格表

### 1. 周期订阅套餐

| 套餐名称 | 方案价格 | 包含流量 | 适用场景 |
| :--- | :--- | :-: | :--- |
| **清风（微风）** | ¥137 / 年 | 100GB / 月 | 轻度长期使用，极低成本备用 |
| **乘风（骑马）** | ¥27 / 月 | 200GB / 月 | 日常网页、社交与 1080P 视频播放 |
| **破风（破）** | ¥57 / 月 | 500GB / 月 | 高频使用、多设备共享与资料下载 |
| **御风（精通）** | ¥127 / 月 | 1.2TB / 月 | 大流量需求与重度影音办公 |

### 2. 一次性不限时流量包

| 套餐名称 | 一次性价格 | 总流量 | 特点 |
| :--- | :-: | :-: | :--- |
| **信风·不限时** | ¥200 / 一次性 | 270GB | 永不过期，低频备用首选 |
| **长风·不限时** | ¥370 / 一次性 | 570GB | 永不过期，长期灵活使用 |

---

## 三、 网络性能与使用建议

* **实测性能数据**：中位延迟约 42ms，下载速率达 50 MB/s，30 天在线率 99.9%，丢包率仅 0.1%。
* **节点容错率高**：拥有约 61 个节点储备（覆盖香港、日本、韩国、台湾、新加坡、美国等），若晚高峰个别节点拥堵，可快速切换顺畅线路。`},{id:"review-firefly",category:"review",title:"Firefly 机场解析与指南：海外团队运营、IPLC 专线与 VLESS 协议",description:"Firefly 是由海外团队运营的加速服务商，服务主打 IPLC 专线与 VLESS 协议，提供原生 IP，不限速且不限制客户端与设备数量。",pubDate:"2026-08-22",author:"极速测评编辑部",tags:["Firefly","IPLC专线","VLESS","原生IP"],heroImage:"https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",content:`# 🌐 Firefly 机场解析与指南

> **摘要**：Firefly 是由海外团队运营的加速服务商。服务主打 IPLC 专线与 VLESS 协议，提供原生 IP，不限速且不限制客户端与设备数量。支持流媒体与 AI 工具解锁，包含多种周期套餐及一次性不限时流量包。

---

## 📊 2026 晚高峰 1000M 节点物理线路测速报告

![2026 Firefly 机场 晚高峰 Stair Speedtest 压测大盘](/speedtest/firefly_speedtest.jpg "2026 Firefly 机场 晚高峰 Stair Speedtest 压测大盘")



## 一、 平台概览与注册入口

| 项目 | 详细说明 |
| :--- | :--- |
| **服务名称** | Firefly 机场 |
| **上线时间** | 2026 年（海外老牌团队运营） |
| **协议与线路** | IPLC 专线 + VLESS 协议 |
| **支付方式** | USDT、微信支付、支付宝 |
| **设备限制** | 不限制客户端及设备连接数量 |
| **解锁支持** | 支持 YouTube、Netflix、Disney+、HBO 等流媒体，以及 ChatGPT、Gemini、Meta AI、Claude、Grok 等 AI 服务 |
| **注册入口** | 👉 [点击直达 Firefly 官网注册页面](https://vip02.fireflyaff.com/#/?code=QvtWcNbI) |

---

## 二、 周期套餐对比

| 套餐名称 | 方案价格 | 月流量 | 适合人群 |
| :--- | :--- | :-: | :--- |
| **Firefly 年付版** | ¥96 / 年（折合 ¥8/月） | 60GB / 月 | 轻度长期使用，需一次性支付全年费用 |
| **Firefly Lite** | ¥25 / 月 | 150GB / 月 | 日常网页、社交与轻度视频 |
| **Firefly Plus** | ¥45 / 月 | 300GB / 月 | AI 工具、办公与中等频率视频 |
| **Firefly Blaze** | ¥85 / 月 | 600GB / 月 | 高频流媒体与多设备使用 |
| **Firefly Nova** | ¥150 / 月 | 1000GB / 月 | 大流量与重度使用 |

---

## 三、 一次性不限时流量包

| 套餐名称 | 一次性价格 | 总流量 | 特点与建议 |
| :--- | :-: | :-: | :--- |
| **Firefly 不限时** | ¥100 / 一次性 | 100GB | 适合低频使用或作为备用线路；不按月清零 |`},{id:"review-kuajie",category:"review",title:"跨界云 (Crossover) 机场解析与指南：全专线升级链路与 50 条 Vless 节点",description:"跨界云（Crossover）于 2026 年开业，宣称网络已全面升级为“全专线链路”，套餐覆盖 120GB 至 1500GB 多档流量，提供约 50 条 Vless 节点。",pubDate:"2026-08-22",author:"极速测评编辑部",tags:["跨界云","Crossover","全专线","Vless"],heroImage:"https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",content:`# 🌐 跨界云 (Crossover) 机场解析与指南

> **摘要**：跨界云（Crossover）于 2026 年开业，宣称网络已全面升级为“全专线链路”。套餐覆盖 120GB 至 1500GB 多档流量，支持通用订阅导入及微信、支付宝付款。包含 50 条 Vless 节点，可解锁主流流媒体。

---

## 📊 2026 晚高峰 1000M 节点物理线路测速报告

![2026 跨界云 晚高峰 Stair Speedtest 压测大盘](/speedtest/kuajie_speedtest.jpg "2026 跨界云 晚高峰 Stair Speedtest 压测大盘")



## 一、 平台概览与注册入口

| 项目 | 详细说明 |
| :--- | :--- |
| **服务名称** | 跨界云 (Crossover) |
| **开业时间** | 2026 年 |
| **线路类型** | 宣称全专线升级链路 |
| **节点协议** | Vless 协议（约 50 条节点） |
| **节点覆盖** | 美国、日本、台湾、香港、新加坡等 |
| **支付方式** | 微信支付、支付宝 |
| **解锁能力** | 解锁 YouTube、Netflix、Disney+ 等主流流媒体 |
| **订阅与设备** | 支持通用订阅，支持多设备与不同流量档位需求 |
| **注册入口** | 👉 [点击直达跨界云官网注册页面](https://vip02.kuajieaff.com/#/?code=kTdpCGi9) |

---

## 二、 周期套餐价格表

| 套餐名称 | 方案价格 | 套餐流量 | 适合人群与特点 |
| :--- | :--- | :-: | :--- |
| **轻云 Lite (月付)** | ¥20 / 月 | 120 GB | 首次体验、轻中度使用（推荐） |
| **跃云 Leap (月付)** | ¥40 / 月 | 300 GB | 日常中等流量需求 |
| **凌云 Soar (月付)** | ¥100 / 月 | 700 GB | 多设备或较高流量需求 |
| **无界 Infinity (月付)** | ¥180 / 月 | 1500 GB | 重度流量使用 |`},{id:"review-globalcloud",category:"review",title:"全球云（Global Cloud）机场介绍与套餐解析",description:"全球云主打出海线路与流媒体解锁服务，采用企业级 IPLC/IEPL 专线传输、智能负载均衡与三网入口优化。提供 70+ 节点并基于 VLESS 协议。",pubDate:"2026-08-17",author:"极速测评编辑部",tags:["全球云","IPLC专线","VLESS","多节点"],heroImage:"https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",content:`# 📝 全球云（Global Cloud）机场介绍与套餐解析

> **摘要**：全球云主打出海线路与流媒体解锁服务，采用企业级 IPLC/IEPL 专线传输、智能负载均衡与三网入口优化。提供 70+ 节点并基于 VLESS 协议，支持常见的第三方客户端（Shadowrocket、Clash、V2Ray 等）以及多平台场景使用。本文整理了全球云的基础信息、周期套餐、不限时流量包及选购建议。

---

## 📊 2026 晚高峰 1000M 节点物理线路测速报告

![2026 全球云 晚高峰 Stair Speedtest 压测大盘](/speedtest/globalcloud_speedtest.jpg "2026 全球云 晚高峰 Stair Speedtest 压测大盘")



## 一、 机场基础信息概览

| 项目 | 详细说明 |
| :--- | :--- |
| **官网地址** | 👉 [点击直达全球云官网注册页面](https://vnjg4ckga.quanqiugttt1.club/#/?code=NKII9ZkH) |
| **最低月付** | **20元** / 120GB 月 |
| **协议支持** | **VLESS** 协议（服务商提供） |
| **线路类型** | **IPLC / IEPL 专线**（宣称配有智能负载均衡与三网入口优化） |
| **节点地区及数量** | 覆盖香港、日本、新加坡、美国、英国、德国、法国、韩国、马来西亚、泰国、越南、菲律宾和土耳其等地区，总数 **70+** |
| **带宽资源** | 宣称配有独立 IP 资源、3Gbps+ 带宽及参考 500Mbps 级高峰冗余 |
| **客户端支持** | 支持 **Shadowrocket**、**Clash**、**V2Ray** 等第三方通用客户端（以订阅或配置为准） |
| **支持平台** | iOS、Android、Windows、macOS 及路由器 |
| **支付方式** | **支付宝**、**USDT**、**微信支付** |
| **售后支持** | 提供工单与在线客服，宣称由海外团队维护节点网络 |

---

## 二、 服务特点与解锁支持

1. **IPLC/IEPL 专线与晚高峰优化**：
   服务商宣称采用原生机房线路与企业级 IPLC/IEPL 专线，配合智能负载均衡和三网入口优化，旨在改善晚高峰时段的连接体验。
2. **流媒体与 AI 工具解锁**：
   节点通常标示支持 **Netflix**、**Disney+**、**TikTok** 以及 **ChatGPT** 等主流服务的解锁访问。
3. **多平台通用订阅**：
   基于 VLESS 协议，同一账号可多端使用，兼容常见主流第三方代理客户端。

---

## 三、 套餐价格明细

### 1. 周期套餐（定期重置流量）

| 套餐名称 | 价格 | 流量 | 适合人群 |
| :--- | :--- | :--- | :--- |
| **年付轻量版** | ¥99 / 年 | 59 GB （重置方式未说明） | 低频备用，能接受年付风险的用户 |
| **BGP 智能优化·入门方案** | ¥20 / 月 | 120 GB / 月 | 首次测试、轻中度日常使用 |
| **BGP 智能优化·进阶方案** | ¥40 / 月 | 300 GB / 月 | 日常视频与 AI 工具依赖者 |
| **BGP 智能优化·高端方案** | ¥100 / 月 | 700 GB / 月 | 多设备、高流量消耗用户 |
| **BGP 智能优化·商业方案** | ¥180 / 月 | 1500 GB / 月 | 团队或重度大流量用户 |
| **独享私人专线节点** | ¥680 / 月 | 500 GB / 月 | 需要独享节点并需确认线路规格的用户（咨询购买） |

> **⚠️ 注意**：首次使用建议先从 **20 元月付档** 开始测试本地运营商及晚高峰表现。年付轻量版仅给出了 59GB 数值，购买前需向客服确认是每月重置还是全年共享流量。

---

### 2. 一次性不限时流量包（买断制）

| 套餐名称 | 一次性价格 | 总流量 | 特点与适合人群 |
| :--- | :--- | :--- | :--- |
| **BGP 智能优化·不限时轻量包** | ¥100 / 一次性 | 100 GB | 低频备用 |
| **BGP 智能优化·不限时标准包** | ¥360 / 一次性 | 400 GB | 中等流量备用 |
| **BGP 智能优化·不限时大容量包** | ¥700 / 一次性 | 800 GB | 高流量长期备用 |

> **⚠️ 注意事项**：
> * 这里的“不限时”是指流量包不设固定到期重置时间，并不代表服务商主体永久运营。
> * 购买前请先确认账户有效期、长期不使用规则、设备连接限制数及退款条件。

---

## 四、 选购建议

1. **建议按月试用**：
   首次购买建议优先选择 **¥20/月（120GB）** 入门方案，在自己的网络环境、常用设备及晚高峰时段测试实际速度与稳定性。
2. **重度用户选高流量档**：
   如果日常需要频繁观看 4K 视频或进行大文件传输，可考虑 **¥40/月（300GB）** 或 **¥100/月（700GB）** 方案。
3. **备用需求看流量包**：
   如果使用频率很低，仅偶尔查阅资料或作为主线备用，可考虑一次性不限时流量包。`},{id:"review-wgetcloud",category:"review",title:"WgetCloud 全球网络加速服务指南",description:"WgetCloud（原 GaCloud）是一家老牌高端加速服务商。平台采用 BGP 服务器接入与亚马逊 Global Accelerator 专线，支持 Trojan 协议，主打低延迟与高稳定性。",pubDate:"2026-08-18",author:"极速测评编辑部",tags:["WgetCloud","高端机场","专线加速","GaCloud"],heroImage:"https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80",content:`# 🌐 WgetCloud 全球网络加速服务指南

> **摘要**：WgetCloud（原 GaCloud）是一家老牌高端加速服务商。平台采用 BGP 服务器接入与亚马逊 Global Accelerator 专线，支持 Trojan 协议，主打低延迟与高稳定性。

---

## 📊 2026 晚高峰 1000M 节点物理线路测速报告

![2026 WgetCloud (闪跃) 晚高峰 Stair Speedtest 压测大盘](/speedtest/wgetcloud_speedtest.jpg "2026 WgetCloud (闪跃) 晚高峰 Stair Speedtest 压测大盘")



## 一、 平台概览与注册入口

| 项目 | 详细说明 |
| :--- | :--- |
| **服务名称** | WgetCloud（原 GaCloud） |
| **运营背景** | 2021 年正式运营，超过 5 年的老牌厂商 |
| **技术架构** | BGP 服务器接入 + 亚马逊 Global Accelerator 专线加速，提供高达 10000Mbps 总线接入能力 |
| **支持协议** | Trojan 协议 |
| **节点覆盖** | 香港、日本、台湾、新加坡、美国、韩国、英国、俄罗斯、加拿大、印度尼西亚、印度、土耳其、巴西、德国、泰国、澳大利亚、马来西亚 |
| **注册入口** | 👉 [点击直达 WgetCloud 官网注册页面](https://invite.wgetcloud.ltd/auth/register?code=1i8Pgu) |

---

## 二、 可用套餐对比

| 套餐类型 | 计费周期 | 方案价格 | 月流量配额 |
| :--- | :--- | :--- | :--- |
| **基础专线** | 月付 ｜ 季付 ｜ 年付 | ¥79.00 / 月 ｜ ¥225.00 / 季 ｜ ¥758.00 / 年 | 160G/月（月付） ｜ 230G/月（季付） ｜ 280G/月（年付） |
| **优质专线** | 月付 ｜ 季付 ｜ 年付 | ¥89.00 / 月 ｜ ¥253.00 / 季 ｜ ¥854.00 / 年 | 180G/月（月付） ｜ 250G/月（季付） ｜ 320G/月（年付） |
| **精品专线** | 月付 ｜ 季付 ｜ 年付 | ¥99.00 / 月 ｜ ¥281.00 / 季 ｜ ¥950.00 / 年 | 200G/月（月付） ｜ 270G/月（季付） ｜ 360G/月（年付） |

---

## 三、 优缺点对比

| 优势 (Pros) | 劣势 (Cons) |
| :--- | :--- |
| 高端稳定机场，老牌服务商 | 套餐售价较高，缺少低预算门槛的轻量入门套餐 |
| 常用地区及冷门节点覆盖全面 | 价格呈逐年上涨趋势 |
| 专线加速，延迟极低 | 部分 IP 地址较容易触发风控 |
| 新用户注册享 **85折优惠** (优惠码: WGET85) | 香港节点不支持 AI 工具解锁 |`},{id:"review-invisibles",category:"review",title:"隐形人机场（Invisibles）介绍与套餐解析",description:"隐形人机场已运营约 2 年，主打企业级 IEPL 纯专线传输与 BGP 智能调度，宣称全节点 1 倍率计费、不限速且常规周期套餐不限制设备数量。",pubDate:"2026-08-18",author:"极速测评编辑部",tags:["隐形人机场","IEPL专线","1倍率","不限设备"],heroImage:"https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",content:`# 📝 隐形人机场（Invisibles）介绍与套餐解析

> **摘要**：隐形人机场已运营约 2 年，主打企业级 IEPL 纯专线传输与 BGP 智能调度，宣称全节点 1 倍率计费、不限速且常规周期套餐不限制设备数量。本文整理了隐形人机场的基础信息、周期与不限时套餐明细及选购注意事项。

---

## 📊 2026 晚高峰 1000M 节点物理线路测速报告

![2026 隐形人机场 晚高峰 Stair Speedtest 压测大盘](/speedtest/invisibles_speedtest.jpg "2026 隐形人机场 晚高峰 Stair Speedtest 压测大盘")



## 一、 机场基础信息概览

| 项目 | 详细说明 |
| :--- | :--- |
| **运营时长** | 约 2 年（服务商提供数据） |
| **线路定位** | 企业级 IEPL 纯专线（支持云端多链路 / BGP 智能调度优化，全节点 1 倍率计费） |
| **订阅格式** | 支持通用订阅（兼容 Clash、Shadowrocket 等主流客户端） |
| **支付方式** | **支付宝**、**USDT** |
| **社群/客服** | 提供官方 Telegram 交流群及工单客服支撑 |
| **核心卖点** | 宣称全节点不限速、常规周期套餐不限设备数，支持流媒体及 AI 服务解锁 |

---

## 二、 服务特点与解锁支持

### 1. 线路与计费机制
* **IEPL 专线**：宣称采用企业级 IEPL 纯专线架构，配合 BGP 智能调度，保障晚高峰时段的高速率与低延迟表现。
* **统一倍率**：所有节点统一按照 **1 倍流量** 扣费，无高倍率节点陷阱。
* **速率限制**：宣称不限制节点峰值带宽速度（实际表现取决于本地宽带与节点负载）。

### 2. 流媒体与 AI 工具支持
* **流媒体支持**：宣称解锁 Netflix、Prime Video、BBC iPlayer、Abema、TVer 等主流跨国流媒体。
* **AI 与开发工具**：宣称支持 ChatGPT、GitHub Copilot 及 Hugging Face 等平台访问。
* *注：流媒体与 AI 解锁受平台风控策略影响，实际可用性建议购买后自行测试验证。*

---

## 三、 套餐价格明细

### 1. 周期套餐（定期重置流量）

| 套餐名称 | 价格 | 流量 | 适合人群 |
| :--- | :--- | :--- | :--- |
| **隐形人·白银纪元** | ¥24 / 月 | 144 GB / 月 | 首次体验、日常轻度学习与办公 |
| **隐形人·黄金序列** | ¥48 / 月 | 360 GB / 月 | 中高频视频观赏、日常主力使用 |
| **隐形人·铂金至臻** | ¥105 / 月 | 750 GB / 月 | 大文件传输、高流量重度用户 |
| **隐形人·钻石穹顶** | ¥185 / 月 | 1600 GB / 月 | 团队协作或多设备重度流量需求 |
| **隐形人·星耀风暴 365天不熄** | ¥109 / 年 | 80 GB / 年 | 低频备用，能接受年付风险的用户 |

> **⚠️ 说明与注意事项：**
> * 前四档周期套餐支持月付、季付、半年付及年付（具体长周期折扣请以结账页实时显示为准）。
> * **星耀风暴套餐**：80GB 为**年度总流量**（按年重置），折合每月不到 7GB，适合极低频或纯备用场景。

---

## 2. 一次性不限时流量包（买断制）

| 套餐名称 | 一次性价格 | 总流量 | 设备限制 | 特点与适合人群 |
| :--- | :--- | :--- | :--- | :--- |
| **隐形人·一次性小流量** | ¥229 / 一次性 | 160 GB | **严格限 1 台** | 无时间限制，轻度备用 |
| **隐形人·一次性标准流量包** | ¥549 / 一次性 | 420 GB | **支持 2 台** | 无时间限制，多设备备用 |
| **隐形人·一次性精英流量包** | ¥1199 / 一次性 | 1000 GB | **支持 3 台** | 无时间限制，长期稳定使用 |

> **⚠️ 设备限制提示：**
> * 一次性流量包无固定过期时间（不限时），但**有明确的同时间在线设备限制**（1~3 台不等），请根据设备数量需求选择。
> * “不限时”指流量不过期，但不代表服务商永久运营，建议按需购买。

---

## 3. 特殊定制版（王者定制版）

| 方案名称 | 标示费用 | 流量口径 | 已知信息 |
| :--- | :--- | :--- | :--- |
| **王者定制版** | ¥600 / 一次性 | 500 GB / 月 | 独立带宽、不限速直传；服务周期未明确说明 |

> **⚠️ 规则说明：**
> * 官方资料中同时出现“一次性收费”和“500GB/月”两种描述，且未明确覆盖服务期限与独立带宽参数。**准备购买前务必联系客服书面确认计费方式与有效期后再下单。**

---

## 四、 选购建议与总结

1. **首次推荐月付体验**：
   建议优先选择 **¥24/月（144GB）** 的白银纪元套餐，在本地运营商环境及晚高峰时段测试速度与稳定性后，再决定是否长期订阅。
2. **区分“一次性包”与“年付包”**：
   * **星耀风暴（¥109/年）**：每年重置 80GB，按年续费。
   * **一次性流量包**：流量用完即止、无过期时间，但**有严格设备数限制**。
3. **核对设备与退款规则**：
   常规周期套餐不限制设备连接数，但一次性套餐限制 1~3 台设备。购买前请在结算页面核对条款及服务商退款政策。`},{id:"review-ssone",category:"review",title:"SSONE 机场全解析与套餐指南",description:"SSONE 是一家主打性价比的网络加速服务商，采用 BGP 隧道中转线路，支持 SS/V2Ray/Trojan 多种协议。提供 1天 1G 免费试用，月付低至 10元/60G。",pubDate:"2026-08-17",author:"极速测评编辑部",tags:["SSONE","性价比机场","免费试用","BGP中转"],heroImage:"https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",content:`# 🌐 SSONE 机场全解析与套餐指南

> **摘要**：SSONE 是一家主打性价比的网络加速服务商，采用 BGP 隧道中转线路，支持 SS/V2Ray/Trojan 多种协议。提供 1天 1G 免费试用，月付低至 10元/60G，解锁主流流媒体及 AI 工具，支持多设备同时在线。

---

## 📊 2026 晚高峰 1000M 节点物理线路测速报告

![2026 SSONE 机场 晚高峰 Stair Speedtest 压测大盘](/speedtest/ssone_speedtest.jpg "2026 SSONE 机场 晚高峰 Stair Speedtest 压测大盘")



## 一、 平台概览与注册入口

| 项目 | 详细说明 |
| :--- | :--- |
| **服务名称** | SSONE 机场 |
| **最低门槛** | ¥10.00 / 60G / 月 |
| **免费试用** | 1天 1G 流量 |
| **支付方式** | 支付宝、微信支付 |
| **节点覆盖** | 香港、台湾、新加坡、美国、日本、韩国等 |
| **支持协议** | Shadowsocks、V2Ray、Trojan |
| **线路架构** | BGP 隧道中转 |
| **官网入口** | 👉 [点击直达 SSONE 官网注册页面](https://m.ssone.io/#/register?code=GeTpX1Qx) |

---

## 二、 订阅套餐价格表

### 1. 周期订阅套餐

| 套餐名称 | 周期流量 | 方案价格 | 特点与适用场景 |
| :--- | :-: | :--- | :--- |
| **每月-128G** | 128 GB/周期 | ¥15/月 ｜ ¥42/季 ｜ ¥75/半年 ｜ ¥148/年 | 日常浏览、社交与轻度视频 |
| **每月-192G** | 192 GB/周期 | ¥22/月 ｜ ¥62/季 ｜ ¥110/半年 ｜ ¥216/年 | AI 工具、办公与日常追剧 |
| **每月-256G** | 256 GB/周期 | ¥28/月 ｜ ¥80/季 ｜ ¥140/半年 ｜ ¥268/年 | 中度流媒体播放与多设备共享 |
| **每月-512G** | 512 GB/周期 | ¥52/月 ｜ ¥148/季 ｜ ¥260/半年 ｜ ¥498/年 | 4K/8K 极清视频与重度流量需求 |

*注：所有周期套餐均提供月付、季付、半年、一年、两年、三年等灵活付费周期。*

---

### 2. 一次性不限时流量包

| 套餐名称 | 总流量 | 一次性价格 | 特点 |
| :--- | :-: | :--- | :--- |
| **不限时-128G** | 128 GB | ¥36.00 / 一次性 | 不限时长，用完为止 |
| **不限时-256G** | 256 GB | ¥68.00 / 一次性 | 低频备用推荐 |
| **不限时-512G** | 512 GB | ¥128.00 / 一次性 | 灵活多设备备用 |
| **不限时-1024G** | 1024 GB | ¥238.00 / 一次性 | 大容量长期备用 |

---

## 三、 性能与流媒体解锁实测

### 1. 晚高峰性能测试（晚 20:00 - 22:00）

* **测试环境**：北京联通 100M 宽带 ｜ iPhone 15 Pro ｜ 香港 BGP 节点
* **下载速度**：68.5 Mbps
* **上传速度**：45.2 Mbps
* **节点延迟**：28 ms（香港节点平均 20-50ms）
* **稳定性**：99.8% 在线率

### 2. 流媒体与 AI 解锁能力

| 平台 | 解锁状态 | 可用地区 | 画质支持 |
| :--- | :--- | :--- | :--- |
| **Netflix** | ✅ 测试时可访问 | 美国、日本、香港 | 4K HDR |
| **Disney+** | ✅ 测试时可访问 | 美国、日本 | 4K HDR |
| **YouTube** | ✅ 测试时可访问 | 全球 | 8K |
| **ChatGPT** | ✅ 稳定访问 | 美国、欧洲 | 全功能 |
| **TikTok** | ✅ 测试时可访问 | 美国、日本 | 高清 |

---

## 四、 全平台客户端推荐

| 操作系统 | 推荐客户端列表 |
| :--- | :--- |
| **Android** | Clash for Android、V2rayNG、Shadowsocks |
| **iOS / iPadOS** | Shadowrocket（小火箭）、Clash for iOS、Quantumult X |
| **Windows** | Clash for Windows、V2rayN、Shadowsocks Windows |
| **macOS** | Clash for Mac、ClashX、ShadowsocksX-NG |`},{id:"review-degeyun",category:"review",title:"大哥云 (DeGeYun) 机场全解析与使用指南",description:"本指南针对大哥云（DeGeYun）网络加速服务进行整体解析，包含注册入口、各档位套餐配置、节点使用建议、常见疑问及全平台客户端支持列表。",pubDate:"2026-08-14",author:"极速测评编辑部",tags:["大哥云","DeGeYun","Trojan","原生IP"],heroImage:"https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",content:`# 🌐 大哥云 (DeGeYun) 机场全解析与使用指南

> **摘要**：本指南针对大哥云（DeGeYun）网络加速服务进行整体解析，包含注册入口、各档位套餐配置、节点使用建议、常见疑问及全平台客户端支持列表。

---

## 📊 2026 晚高峰 1000M 节点物理线路测速报告

![2026 大哥云 晚高峰 Stair Speedtest 压测大盘](/speedtest/degeyun_speedtest.jpg "2026 大哥云 晚高峰 Stair Speedtest 压测大盘")



## 一、 平台概览与注册入口

| 项目 | 详细说明 |
| :--- | :--- |
| **服务名称** | 大哥云 (DeGeYun) |
| **支持协议** | Trojan 协议 |
| **节点覆盖** | 香港、日本、新加坡、台湾、美国、英国等地区 |
| **更新时间** | 2026-05-17 |
| **官网入口** | 👉 [点击直达大哥云官网入口](https://a03.dgy02.com/#/register?code=X8MBmftq) |

> **提示**：建议优先体验短期套餐，评估本地网络环境后再决定是否选择长期方案。

---

## 二、 可用套餐对比

| 套餐名称 | 月流量 | 方案价格 | 计费周期 |
| :--- | :-: | :-: | :-: |
| **小流量套餐** | 15 GB/月 | ¥88.00 / 年 | 365天 |
| **单月套餐 100GB** | 100 GB/月 | ¥19.00 / 月 | 30天 |
| **单月套餐B 150GB** | 150 GB/月 | ¥29.90 / 月 | 30天 |
| **季付套餐A 200GB** | 200 GB/月 | ¥69.00 / 季 | 90天 |
| **套餐A 300GB** | 300 GB/月 | ¥199.00 / 年 | 365天 |
| **套餐A 500GB** | 500 GB/月 | ¥299.00 / 年 | 365天 |

---

## 三、 用户与节点选路建议

### 1. 适用人群
* **日常轻中度用户**：尤其适合对流媒体解锁（如 Netflix）和 AI 工具（如 ChatGPT）有稳定需求的使用者。
* **大流量需求者**：适合预算有限、但希望获取较高流量配额的场景。

### 2. 节点使用策略
* **首选节点 (台湾、日本、新加坡)**：
  * 解锁流媒体和 AI 工具效果极佳，延迟相对较低，推荐作为日常主用节点。
* **次选/不推荐节点 (香港)**：
  * 香港节点用户较为集中，高峰期流量可能受限，且流媒体解锁能力较弱，不建议优先使用。

---

## 四、 快速上手步骤

1. **账户注册与订阅**：通过 [大哥云官网链接](https://a03.dgy02.com/#/register?code=X8MBmftq) 完成注册并购买合适套餐。
2. **设备客户端配置**：根据使用设备下载客户端，导入节点信息并参考上述建议选择节点。
3. **连通测试**：完成支付和订阅同步后即可启用网络加速。

---

## 五、 常见问题 (FAQ)

* **Q1：大哥云是否有流量限制？**  
  * A1：有限制，具体取决于所选套餐（例如小流量套餐为 15GB/月，套餐A 500GB 为 500GB/月）。
* **Q2：支持哪些支付渠道？**  
  * A2：支持支付宝、微信等常规支付方式。
* **Q3：是否支持多设备同时在线？**  
  * A3：支持多设备同时连接使用，只需各设备独立完成节点配置即可。
* **Q4：购买后是否可以退款？**  
  * A4：大哥云服务不支持退款。

---

## 六、 全平台客户端推荐

| 操作系统 | 推荐客户端列表 |
| :--- | :--- |
| **Windows** | FlClash、Clash Verge Rev |
| **macOS** | FlClash、Clash Verge Rev |
| **iOS / iPadOS** | Shadowrocket、Quantumult X、Surge、Loon |
| **Android** | FlClash、V2rayNG、Clash Meta for Android |
| **路由器系统** | OpenWrt、LEDE |`},{id:"review-wuyou",category:"review",title:"无忧链接 (WUYOU LINK) 机场解析与指南",description:"无忧链接（WUYOU LINK）是一家运营约 1 年的网络加速服务商。服务主打不限速、不限制客户端使用，支持通用订阅协议及小火箭等主流客户端。",pubDate:"2026-08-14",author:"极速测评编辑部",tags:["无忧链接","WUYOU","不限设备","全解锁"],heroImage:"https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",content:`# 🌐 无忧链接 (WUYOU LINK) 机场解析与指南

> **摘要**：无忧链接（WUYOU LINK）是一家运营约 1 年的网络加速服务商。服务主打不限速、不限制客户端使用，支持通用订阅协议及小火箭（Shadowrocket）等主流客户端，解锁常见流媒体与 AI 工具，提供多种周期套餐及一次性不限时流量包。

---

## 📊 2026 晚高峰 1000M 节点物理线路测速报告

![2026 无忧链接 晚高峰 Stair Speedtest 压测大盘](/speedtest/wuyou_speedtest.jpg "2026 无忧链接 晚高峰 Stair Speedtest 压测大盘")



## 一、 平台概览与注册入口

| 项目 | 详细说明 |
| :--- | :--- |
| **服务名称** | 无忧链接 (WUYOU LINK / EST. 2024) |
| **运营时长** | 约 1 年 |
| **支付方式** | 微信支付、支付宝 |
| **客户端支持** | 支持通用订阅，不限制客户端，可用 Clash Verge Rev、Shadowrocket (小火箭) 等主流工具 |
| **解锁支持** | 宣称支持 Netflix、Disney+、HBO、Hulu 及 ChatGPT、Gemini 等 AI 工具 |
| **官网入口** | 👉 [点击直达无忧链接官网](https://lsitel.worryfreettt.homes/#/?code=SaSZbwak) |

---

## 二、 周期套餐对比

| 套餐名称 | 月流量 | 方案价格 | 适合人群 |
| :--- | :-: | :--- | :--- |
| **mini链接** | 40 GB/月 | ¥79.00 / 年 | 偶尔使用、低频备用 |
| **舒心链接** | 100 GB/月 | ¥12.92 / 月 ｜ ¥34.68 / 季 ｜ ¥65.28 / 半年 ｜ ¥123.76 / 年 | 日常网页、社交与轻度视频 |
| **省心链接** | 200 GB/月 | ¥22.44 / 月 ｜ ¥60.52 / 季 ｜ ¥114.24 / 半年 ｜ ¥214.88 / 年 | AI 工具、办公与中等频率视频 |
| **随心链接** | 500 GB/月 | ¥52.36 / 月 ｜ ¥140.76 / 季 ｜ ¥266.56 / 半年 ｜ ¥502.52 / 年 | 高频流媒体与多设备使用 |
| **忘忧链接** | 1 TB/月 | ¥117.00 / 月 ｜ ¥315.00 / 季 ｜ ¥596.00 / 半年 ｜ ¥1123.00 / 年 | 大流量与重度使用 |

---

## 三、 一次性不限时流量包

| 套餐名称 | 一次性价格 | 总流量 | 特点与建议 |
| :--- | :-: | :-: | :--- |
| **不限时 100GB 流量包** | ¥16.15 / 一次性 | 100 GB | 适合低频备用；流量不按月清零，使用期限以结算页规则为准 |

---

## 四、 主要特点与使用建议

* **通用订阅兼容**：支持通用订阅格式导入，客户端适配度广（如 Windows/macOS 平台推荐 FlClash、Clash Verge Rev，iOS 推荐 Shadowrocket 等）。
* **流量覆盖广泛**：涵盖轻量年付、常规月付至 1TB/月的大流量套餐，同时提供按量付费选项。
* **选购策略**：建议首次体验优先选择 **舒心链接 (月付)** 进行网络环境与晚高峰节点测试，满意后再考虑长期套餐。`},{id:"review-twilight",category:"review",title:"暮光加速（Twilight Speed）机场介绍与套餐解析",description:"暮光加速成立于 2025 年，由新加坡海外团队运营，采用 VLESS 协议及专线传输，覆盖香港、台湾、日本、新加坡及美国等热门地区节点。",pubDate:"2026-08-13",author:"极速测评编辑部",tags:["暮光加速","Twilight","VLESS","500M极速"],heroImage:"https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",content:`# 📝 暮光加速（Twilight Speed）机场介绍与套餐解析

> **摘要**：暮光加速成立于 2025 年，由新加坡海外团队运营，采用 VLESS 协议及专线传输，覆盖香港、台湾、日本、新加坡及美国等热门地区节点。本文汇总了暮光加速的基础信息、套餐价格表、测速表现及购买注意事项。

---

## 📊 2026 晚高峰 1000M 节点物理线路测速报告

![2026 暮光加速 晚高峰 Stair Speedtest 压测大盘](/speedtest/twilight_speedtest.jpg "2026 暮光加速 晚高峰 Stair Speedtest 压测大盘")



## 一、 机场基础信息概览

| 项目 | 详细说明 |
| :--- | :--- |
| **运营时间** | 约 1 年（成立于 2025 年，新加坡海外团队运营） |
| **传输协议** | VLESS 协议（服务商宣称为大机房专线） |
| **节点地区** | 香港（20个）、台湾（10个）、日本（10个）、新加坡（10个）、美国（10个） |
| **订阅格式** | 支持通用订阅（兼容 Clash、Shadowrocket 等客户端） |
| **支付方式** | **支付宝**（直接支付）；**微信 & USDT**（需联系官网客服） |
| **社群/客服** | 未提供 Telegram 群组；服务商称提供 24 小时在线客服 |
| **退款政策** | 宣称支持退款（1 小时内处理线路问题，具体退款条件未明确说明） |

---

## 二、 节点分布与测速表现

### 1. 节点覆盖情况
* **香港节点**：约 20 个（主力节点，适合低延迟需求）
* **台湾 / 日本 / 新加坡 / 美国节点**：各约 10 个（覆盖主流海外节点需求）
* *注：实际节点数量可能会随服务商维护情况动态调整，请以购买后后台面板为准。*

### 2. 测速表现（基于 MiaoKo 测速数据）
* **协议与 UDP**：全节点均采用 **VLESS** 协议，绝大多数节点支持 **FullCone UDP**。
* **下载速率**：大部分活跃节点的最高速度可达 **60MB/s ~ 125MB/s**（约 500Mbps~1Gbps 峰值带宽），平均速度在 **20MB/s ~ 80MB/s** 之间。
* **延迟与稳定性**：TLS RTT 延迟表现相对平稳，但个别节点（如美国01）可能出现暂时离线或无速率情况，新加坡部分节点显示 Unknown UDP 类型。
* **流媒体与 AI 工具**：服务商宣称支持主流流媒体解锁及 ChatGPT 访问，晚高峰可看 YouTube 4K。

---

## 三、 套餐价格明细

### 1. 周期套餐（周期订阅）

| 套餐名称 | 月流量 | 月付 | 季付 | 半年付 | 年付 | 两年付 | 三年付 | 适合人群 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **暮光·基础版** | 120 GB | ¥20 | ¥57 | ¥103 | ¥204 | ¥384 | ¥540 | 初体验、轻度日常浏览 |
| **暮光·标准版** | 300 GB | ¥40 | ¥114 | ¥216 | ¥408 | ¥768 | ¥1080 | 日常主力、看视频与 AI 工具 |
| **暮光·旗舰版** | 700 GB | ¥100 | ¥285 | ¥540 | ¥1020 | ¥1920 | ¥2700 | 高频视频、多设备大流量 |
| **暮光·至尊版** | 1.5 TB | ¥180 | ¥513 | ¥972 | ¥1836 | ¥3456 | ¥4860 | 重度流量使用用户 |

### 2. 年付轻量版（一次性限额）

| 套餐名称 | 价格 | 流量 | 适合人群 |
| :--- | :--- | :--- | :--- |
| **暮光·年付轻量版** | ¥109 / 年 | 70 GB / 全年 | 低频使用、年付小流量备用 |

---

## 四、 选购建议与避坑指南

1. **建议先按月订阅**：强烈建议首次购买先选月付或短期套餐，体验满意后再考虑续费或升级。
2. **确认客户端与设备限制**：多设备共享用户建议先咨询客服。
3. **退款条件需理性看待**：服务商承诺“线路问题 1 小时内处理及支持退款”。`},{id:"review-laddercloud",category:"review",title:"梯子云（LadderCloud）机场介绍与套餐解析",description:"梯子云成立于 2025 年，主打 IEPL 专线传输、三网入口优化与全平台自研客户端。提供通用订阅及一键连接客户端，覆盖香港、日本、新加坡、美国、台湾等地区的 60+ 节点。",pubDate:"2026-08-16",author:"极速测评编辑部",tags:["梯子云","自研客户端","IEPL专线","新手首选"],heroImage:"https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80",content:`# 📝 梯子云（LadderCloud）机场介绍与套餐解析

> **摘要**：梯子云成立于 2025 年，主打 IEPL 专线传输、三网入口优化与全平台自研客户端。提供通用订阅及一键连接客户端，覆盖香港、日本、新加坡、美国、台湾等地区的 60+ 节点，支持主流流媒体与 AI 工具解锁。本文整理了梯子云的基础信息、周期与不限时套餐明细及选购建议。

---

## 📊 2026 晚高峰 1000M 节点物理线路测速报告

![2026 梯子云 晚高峰 Stair Speedtest 压测大盘](/speedtest/laddercloud_speedtest.jpg "2026 梯子云 晚高峰 Stair Speedtest 压测大盘")



## 一、 机场基础信息概览

| 项目 | 详细说明 |
| :--- | :--- |
| **运营时间** | 2025 年起（服务商提供） |
| **传输协议/线路** | VLESS 协议 + 企业级 IEPL 专线（宣称配有智能负载均衡与三网入口优化） |
| **节点地区** | 覆盖香港、日本、新加坡、美国、台湾等地区，共计 **60+ 节点** |
| **客户端支持** | **全平台自研客户端**（登录即连）；同时支持 **通用订阅**（Shadowrocket、Clash、V2Ray、Trojan、sing-box 等） |
| **支持平台** | iOS、Android、Windows、macOS 及路由器场景 |
| **支付方式** | **支付宝**、**USDT** |
| **社群/客服** | 提供官方 Telegram 交流群 |

---

## 二、 服务特点与解锁支持

### 1. 客户端与连接体验
* **自研客户端**：提供全平台定制客户端，支持登录后一键连接，降低新手配置门槛。
* **通用订阅**：全面兼容第三方主流客户端及路由器配置。

### 2. 线路性能与流媒体/AI支持
* **线路带宽**：服务商宣称具备 IEPL 专线、2Gbps+ 独立带宽及 500Mbps 级高峰冗余。
* **流媒体解锁**：宣称支持 Netflix、Disney+、TikTok 等主流跨国流媒体。
* **AI 工具支持**：宣称支持 ChatGPT、Claude 等 AI 服务访问。

---

## 三、 套餐价格明细

### 1. 周期套餐（定期重置流量）

| 套餐名称 | 订阅价格明细 | 流量 | 适合人群 |
| :--- | :--- | :--- | :--- |
| **初阶网络·基础视野** | ¥25/月；¥71.25/季；¥135/半年；¥255/年；¥480/两年；¥675/三年 | 125 GB / 月 | 轻度日常使用，适合首先月付体验 |
| **中阶加速·极清多线** | ¥60/月；¥171/季；¥324/半年；¥612/年；¥1152/两年；¥1620/三年 | 350 GB / 月 | 日常视频、AI 工具与远程办公 |
| **高阶专线·全球智联** | ¥110/月；¥313.50/季；¥594/半年；¥1122/年；¥2112/两年；¥2970/三年 | 750 GB / 月 | 中重度视频与多设备使用 |
| **顶阶商业·全球骨干** | ¥190/月；¥541.50/季；¥1026/半年；¥1938/年；¥3648/两年；¥5130/三年 | 1.6 TB / 月 | 大流量或团队用户 |
| **天梯随行·年度保活方案** | ¥89 / 年 | 60 GB / 年 | 使用频率较低、希望控制年费的备用用户 |
| **云端独享·私人定制专线** | ¥650 / 月 | 500 GB / 月 | 有私人定制线路需求的用户（咨询购买） |

---

### 2. 一次性不限时流量包（买断制）

| 套餐名称 | 一次性价格 | 总流量 | 特点与适合人群 |
| :--- | :--- | :--- | :--- |
| **云端买断·永不限时轻量包** | ¥169 / 一次性 | 120 GB | 低频备用 |
| **云端买断·永不限时标准包** | ¥449 / 一次性 | 350 GB | 阶段性补充流量 |
| **云端买断·永不限时精英包** | ¥849 / 一次性 | 700 GB | 较高流量的长期备用 |

---

## 四、 选购建议与总结

1. **初次购买建议**：新手或轻度用户推荐选择 **¥25/月（125GB）** 的基础档体验；若每月看视频或使用 AI 工具较多，可考虑 **350GB（¥60/月）** 或 **750GB（¥110/月）** 档位。
2. **新手优先选自研客户端**：不熟悉 Clash 或 Shadowrocket 订阅导入的新手用户，可直接下载其自研客户端，登录即可使用。`},{id:"review-langwang",category:"review",title:"2026 浪网机场推荐：30元150GB起，VLESS 与自研客户端更适合新手",description:"浪网是一家主打高性能 VLESS 协议的机场，采用 BGP 多线路智能调度和专线出口，套餐覆盖日常上网、高清视频、远程办公、跨境业务与独立 IP 等不同需求。",pubDate:"2026-08-15",author:"极速测评编辑部",tags:["浪网","VLESS","自研客户端","独立IP"],heroImage:"https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",content:`# 2026 浪网机场推荐：30元150GB起，VLESS 与自研客户端更适合新手

浪网是一家主打高性能 **VLESS 协议**的机场，采用 **BGP 多线路智能调度**和**专线出口**，套餐覆盖日常上网、高清视频、远程办公、跨境业务与独立 IP 等不同需求。

浪网比较突出的特点是提供**定制自研客户端**。不会手动配置 Clash、Shadowrocket 或 sing-box 的新手，也可以按照官方指引快速开始使用。对于有经验的用户，浪网也提供 Clash、Shadowrocket、Trojan、sing-box 等第三方客户端生态支持。

价格方面，浪网月付最低 30 元，可用 150GB 流量；此外还有 119 元年付套餐和多档不限时流量包，选择比较丰富。

---

## 📊 2026 晚高峰 1000M 节点物理线路测速报告

![2026 浪网 晚高峰 Stair Speedtest 压测大盘](/speedtest/langwang_speedtest.jpg "2026 浪网 晚高峰 Stair Speedtest 压测大盘")



## 一、 浪网机场简介

浪网目前已运营约 1 年，线路以 VLESS、BGP 智能调度和专线出口为主要卖点。节点流量统一**按照 1 倍计算**，方便用户估算每月实际消耗。

它比较适合以下几类用户：
* **不熟悉订阅配置**，希望使用自研客户端快速连接的新手；
* **经常观看高清视频**、使用 ChatGPT、Claude 等 AI 工具的用户；
* **需要 400GB、800GB 甚至 2TB** 月流量的重度用户；
* **使用频率不固定**，希望购买不限时流量包的用户；
* **对独立 IP、直播或跨境业务线路**有需求的用户。

浪网支持**支付宝**和 **USDT** 付款，并提供 Telegram 用户群。

---

## 二、 浪网套餐价格

### 1. 月付与年付套餐

| 套餐 | 价格 | 流量 | 适合人群 |
| :--- | :--- | :--- | :--- |
| **浪网 入门** | ¥30/月 | 150GB/月 | 网页、社交、短视频和轻度流媒体 |
| **浪网 进阶** | ¥70/月 | 400GB/月 | 日常办公、AI 工具和中等频率视频 |
| **浪网 高端** | ¥120/月 | 800GB/月 | 高频视频、下载和远程办公 |
| **浪网 商业** | ¥200/月 | 2TB/月 | 团队、大流量和高并发使用 |
| **浪网 年付标准** | ¥119/年 | 80GB/月 | 轻度长期使用 |
| **浪网 定制线路包** | ¥640/月 | 500GB/月 | 独立 IP、直播和跨境业务 |

---

### 2. 浪网不限时流量包

| 套餐 | 一次性价格 | 总流量 | 特点 |
| :--- | :--- | :--- | :--- |
| **浪网 小流量包** | ¥239/一次性 | 180GB | 独立 IP、限 1 台设备 |
| **浪网 标准流量包** | ¥569/一次性 | 450GB | 适合经常出差及两台设备使用 |
| **浪网 精英流量包** | ¥1099/一次性 | 900GB | 面向重度生产力和业务用户 |

---

## 三、 浪网的主要特点

### 1. VLESS 与专线出口
浪网主打高性能 VLESS 协议，并通过 BGP 多线路智能调度和专线出口改善不同运营商的连接体验。

### 2. 自研客户端，新手容易上手
浪网提供定制自研客户端，可以减少手动填写节点、转换订阅和修改配置的步骤。

### 3. 支持流媒体与 AI 工具
根据浪网介绍，其节点支持 Netflix、Hulu、HBO、Disney+、DAZN 等主流流媒体，也可以用于访问 ChatGPT、Claude 等 AI 应用。`},{id:"review-lingdongyun",category:"review",title:"2026 灵动云机场推荐：20元100GB起，Trojan 专线与不限时流量包",description:"灵动云是一家 2025 年开始运营的机场，周期套餐最低为 20 元 100GB/月，也有 99 元 70GB/年的低使用率方案和三档一次性不限时流量包。",pubDate:"2026-08-15",author:"极速测评编辑部",tags:["灵动云","Trojan","不限时流量","买断制"],heroImage:"https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",content:`# 2026 灵动云机场推荐：20元100GB起，Trojan 专线与不限时流量包

灵动云是一家 2025 年开始运营的机场，周期套餐最低为 20 元 100GB/月，也有 99 元 70GB/年的低使用率方案和三档一次性不限时流量包。官方主打 Trojan 协议专线、流媒体和 ChatGPT 解锁，适合想从月付小档开始验证，或需要不限时备用流量的用户。

**官方购买入口**：👉 [点击注册并查看灵动云套餐](https://yinxing4.lingdongaff.com/#/?code=mW96wgI4)

---

## 📊 2026 晚高峰 1000M 节点物理线路测速报告

![2026 灵动云 晚高峰 Stair Speedtest 压测大盘](/speedtest/lingdongyun_speedtest.jpg "2026 灵动云 晚高峰 Stair Speedtest 压测大盘")



## 灵动云机场简介

根据服务商提供的信息，灵动云采用 Trojan 协议专线，支持通用订阅，可以使用支付宝或 USDT 付款。官方宣传重点包括晚高峰观看 YouTube 4K、主流流媒体与 ChatGPT 解锁，以及敏感时期的线路可用性。

* **运营时间**：2025 年起（服务商提供）
* **支付方式**：支付宝、USDT
* **通用订阅**：支持

---

## 周期套餐

| 套餐 | 价格 | 流量 | 适合人群 |
| :--- | :--- | :-: | :--- |
| **灵动·拂风** | ¥20/月；¥57/季；¥108/半年；¥204/年 | 100GB/月 | 轻度日常使用，适合先月付体验 |
| **灵动·驭浪** | ¥50/月；¥142.50/季；¥270/半年；¥510/年 | 300GB/月 | 日常视频与 AI 工具使用 |
| **灵动·破晓** | ¥100/月；¥285/季；¥540/半年；¥1020/年 | 700GB/月 | 中重度视频与多设备使用 |
| **灵动·凌霄** | ¥180/月；¥513/季；¥972/半年；¥1836/年 | 1.5TB/月 | 大流量用户 |
| **灵动·穿云** | ¥99/年 | 70GB/年 | 使用频率较低、希望控制年费 |

---

## 一次性不限时流量包

| 套餐 | 一次性价格 | 总流量 | 特点 |
| :--- | :-: | :-: | :--- |
| **灵动·闲云（小流量包）** | ¥199/一次性 | 150GB | 低频备用 |
| **灵动·惊云（标准流量包）** | ¥499/一次性 | 400GB | 阶段性补充流量 |
| **灵动·飞云（精英流量包）** | ¥899/一次性 | 800GB | 较高流量的长期备用 |`},{id:"review-saiboyun",category:"review",title:"赛博云机场 (Saiboyun) 概览与套餐指南",description:"赛博云机场是一家提供高速网络加速服务的平台，主打低延迟与高性价比。支持油管 8K 秒开，解锁主流流媒体与 AI 工具，线路涵盖 CN2/CMIN2/4837 高端专线及中转线路。",pubDate:"2026-08-16",author:"极速测评编辑部",tags:["赛博云","3元机场","CN2","冷门节点"],heroImage:"https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",content:`# 🌐 赛博云机场 (Saiboyun) 概览与套餐指南

> **摘要**：赛博云机场是一家提供高速网络加速服务的平台，主打低延迟与高性价比。支持油管 8K 秒开，解锁主流流媒体与 AI 工具，线路涵盖 CN2/CMIN2/4837 高端专线及中转线路，节点覆盖全球多地。

---

## 📊 2026 晚高峰 1000M 节点物理线路测速报告

![2026 赛博云 晚高峰 Stair Speedtest 压测大盘](/speedtest/saiboyun_speedtest.jpg "2026 赛博云 晚高峰 Stair Speedtest 压测大盘")



## 一、 平台概览与注册入口

| 项目 | 详细说明 |
| :--- | :--- |
| **服务名称** | 赛博云机场 |
| **线路类型** | CN2 / CMIN2 / 4837 高端专线、高端直连、高速中转线路 |
| **解锁能力** | 解锁 Netflix、Disney+、ChatGPT、TikTok 等 |
| **节点覆盖** | 美、英、德、法、日、韩、新、港、澳、台，以及南极洲、马来西亚、乌克兰、埃及、澳大利亚等冷门地区 |
| **官网入口** | 👉 [点击直达赛博云官网入口](https://saiboyun.pages.dev/) |

---

## 二、 可用套餐对比

| 套餐名称 | 月流量 | 方案价格 | 核心特点与线路包含 |
| :--- | :-: | :-: | :--- |
| **轻量套餐** | 100 GB/月 | ¥3.00 / 月 | 基础节点（美/英/德/法/日/新/港/澳/台等），无高端线路与中转节点 |
| **入门套餐** | 300 GB/月 | ¥6.00 / 月 | 含美/日/欧/新等 CN2/CMIN2/4837 高端专线，无中转节点 |
| **基础套餐** | 500 GB/月 | ¥9.00 / 月 | 增加港/日/新 ss 中转节点、香港/日本专线线路，包含冷门地区节点 |
| **进阶套餐** | 700 GB/月 | ¥12.00 / 月 | 包含所有入门套餐节点，超低延迟豪华专线线路 |
| **高级套餐** | 1000 GB/月 | ¥16.00 / 月 | 包含所有入门套餐节点，超低延迟豪华专线线路 |
| **豪华套餐** | 2000 GB/月 | ¥28.00 / 月 | 包含所有入门套餐节点，最高流量配额，超低延迟豪华专线线路 |

---

## 三、 核心优势与特色

* **高速稳定**：支持油管 8K 视频秒开，提供 CN2/CMIN2/4837 高速专线与中转线路。
* **全球覆盖**：除热门地区外，还覆盖南极洲、马来西亚、乌克兰、埃及、澳大利亚等冷门节点。
* **自由灵活**：月付 3 元起，支持按量付费与免费试用，无政治审查屏蔽。`}];function ld({content:i}){const u=x=>{const I=/!\[([^\]]*)\]\(([^)]+?)(?:\s+"([^"]+)")?\)/g,N=[];let j=0,M;for(;(M=I.exec(x))!==null;){M.index>j&&N.push(a(x.substring(j,M.index)));const D=M[1],B=M[2],T=M[3]||D;N.push(c.jsxs("figure",{className:"my-6 space-y-2 select-none",children:[c.jsx("div",{className:"rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-black/40 max-w-xl mx-auto",children:c.jsx("img",{src:B,alt:D,title:T,className:"w-full h-auto object-cover max-h-[650px] mx-auto block",loading:"lazy"})}),D&&c.jsx("figcaption",{className:"text-center font-suisse text-xs text-tan/70",children:D})]},M.index)),j=M.index+M[0].length}return j<x.length&&N.push(a(x.substring(j))),N.length>0?N:a(x)},a=x=>{const I=/\[([^\]]+)\]\(([^)]+)\)/g,N=[];let j=0,M;for(;(M=I.exec(x))!==null;){M.index>j&&N.push(d(x.substring(j,M.index)));const D=M[1],B=M[2];N.push(c.jsx("a",{href:B,target:"_blank",rel:"noopener noreferrer",className:"text-tan font-bold underline hover:text-cream transition-colors mx-1",children:D},M.index)),j=M.index+M[0].length}return j<x.length&&N.push(d(x.substring(j))),N.length>0?N:d(x)},d=x=>{const I=/(\*\*[^*]+\*\*|`[^`]+`)/g,N=[];let j=0,M;for(;(M=I.exec(x))!==null;){M.index>j&&N.push(x.substring(j,M.index));const D=M[0];D.startsWith("**")&&D.endsWith("**")?N.push(c.jsx("strong",{className:"font-bold text-cream",children:D.slice(2,-2)},M.index)):D.startsWith("`")&&D.endsWith("`")&&N.push(c.jsx("code",{className:"px-1.5 py-0.5 rounded bg-white/10 text-tan font-mono text-xs",children:D.slice(1,-1)},M.index)),j=M.index+D.length}return j<x.length&&N.push(x.substring(j)),N},f=x=>{const I=x.split("|").map(N=>N.trim()).filter(Boolean);return I.length>0&&I.every(N=>/^[:\s-]+$/.test(N))},h=[],g=/```([a-zA-Z0-9_-]*)\n([\s\S]*?)```/g;let P=0,S;for(;(S=g.exec(i))!==null;)S.index>P&&h.push({type:"markdown",content:i.substring(P,S.index)}),h.push({type:"code",lang:S[1],content:S[2]}),P=S.index+S[0].length;return P<i.length&&h.push({type:"markdown",content:i.substring(P)}),c.jsx("div",{className:"space-y-4 font-suisse text-cream/80 text-xs sm:text-sm leading-relaxed select-text",children:h.map((x,I)=>x.type==="code"?c.jsxs("div",{className:"my-4 rounded-xl bg-[#080A0C] border border-white/15 overflow-hidden shadow-2xl",children:[x.lang&&c.jsx("div",{className:"px-4 py-1.5 bg-white/5 border-b border-white/10 text-[10px] font-mono text-tan/70 uppercase font-medium",children:x.lang}),c.jsx("pre",{className:"p-4 font-mono text-xs sm:text-sm text-tan leading-relaxed overflow-x-auto whitespace-pre",children:c.jsx("code",{children:x.content.trim()})})]},I):x.content.split(/\n\s*\n/).map((j,M)=>{const D=j.trim();if(!D)return null;const B=`${I}-${M}`;if(D.startsWith("# "))return c.jsx("h1",{className:"font-suisse text-lg sm:text-xl font-bold text-cream pt-4 pb-2 border-b border-white/10",children:u(D.replace(/^#\s+/,""))},B);if(D.startsWith("## "))return c.jsx("h2",{className:"font-suisse text-base sm:text-lg font-bold text-cream pt-4 pb-1 border-b border-white/10",children:u(D.replace(/^##\s+/,""))},B);if(D.startsWith("### "))return c.jsx("h3",{className:"font-suisse text-sm sm:text-base font-bold text-cream/90 pt-3 pb-1",children:u(D.replace(/^###\s+/,""))},B);if(D.startsWith("#### "))return c.jsx("h4",{className:"font-suisse text-xs sm:text-sm font-bold text-tan pt-2",children:u(D.replace(/^####\s+/,""))},B);if(D==="---"||D==="***")return c.jsx("hr",{className:"my-5 border-white/10"},B);if(D.startsWith("> ")){const T=D.split(`
`).map(G=>G.replace(/^>\s*/,"")).join(" ");return c.jsx("blockquote",{className:"p-4 my-4 rounded-xl bg-amber-500/10 border-l-4 border-amber-400 text-amber-200 text-xs leading-relaxed font-suisse",children:u(T)},B)}if(D.startsWith("|")){const T=D.split(`
`).map(G=>G.trim()).filter(G=>G.startsWith("|"));if(T.length>=2){const G=T.filter(H=>!f(H));if(G.length>0){const H=G[0],q=G.slice(1),te=le=>le.split("|").map(ae=>ae.trim()).filter((ae,me,Te)=>me>0&&me<Te.length-1),re=te(H);return c.jsx("div",{className:"overflow-x-auto my-5 bg-[rgba(17,16,15,0.45)] backdrop-blur-[20px] border border-white/10 rounded-xl shadow-xl",children:c.jsxs("table",{className:"w-full text-xs text-left border-collapse font-suisse",children:[c.jsx("thead",{children:c.jsx("tr",{className:"bg-title-bar text-cream font-medium border-b border-white/10",children:re.map((le,ae)=>c.jsx("th",{className:"p-3 whitespace-nowrap",children:u(le)},ae))})}),c.jsx("tbody",{className:"divide-y divide-white/10",children:q.map((le,ae)=>{const me=te(le);return c.jsx("tr",{className:"hover:bg-white/5 transition-colors",children:me.map((Te,Ue)=>c.jsx("td",{className:"p-3",children:u(Te)},Ue))},ae)})})]})},B)}}}if(D.split(`
`).every(T=>/^\s*[*|-]\s+/.test(T))){const T=D.split(`
`).map(G=>G.replace(/^\s*[*|-]\s+/,""));return c.jsx("ul",{className:"space-y-1.5 my-3 pl-5 list-disc text-cream/90",children:T.map((G,H)=>c.jsx("li",{children:u(G)},H))},B)}if(D.split(`
`).every(T=>/^\s*\d+\.\s+/.test(T))){const T=D.split(`
`).map(G=>G.replace(/^\s*\d+\.\s+/,""));return c.jsx("ol",{className:"space-y-1.5 my-3 pl-5 list-decimal text-cream/90",children:T.map((G,H)=>c.jsx("li",{children:u(G)},H))},B)}return c.jsx("p",{className:"leading-relaxed",children:D.split(`
`).map((T,G)=>c.jsxs(_c.Fragment,{children:[G>0&&c.jsx("br",{}),u(T)]},G))},B)}))})}function ws({activeArticle:i,setActiveArticle:u,isSubPage:a=!1,filterCategory:d}){E.useEffect(()=>(i?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[i]);const f=Wn.filter(x=>x.category==="tutorial"),h=Wn.filter(x=>x.category==="review"),g=!d||d==="tutorial",P=!d||d==="review",S=a?"h1":"h2";return c.jsxs("div",{id:"tutorials",className:"space-y-20 py-20 border-t border-white/10 max-w-6xl mx-auto px-5 sm:px-8 select-none",children:[g&&c.jsxs("section",{children:[c.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4",children:[c.jsxs("div",{children:[c.jsx("div",{className:"font-suisse uppercase tracking-[0.15em] text-[11px] text-tan font-medium mb-2",children:"CLIENT TUTORIALS & GUIDES"}),c.jsx(S,{className:"font-stix text-cream text-3xl sm:text-4xl font-normal tracking-tight",children:"🛠️ 客户端与 AI 配置教程"})]}),c.jsx("p",{className:"font-suisse text-xs sm:text-sm text-tan/70",children:"新手必看：Clash Verge Rev、Sing-box 订阅导入与全平台 AI 客户端优化"})]}),c.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:f.map(x=>c.jsxs("div",{onClick:()=>u(x),className:"group bg-[rgba(17,16,15,0.45)] backdrop-blur-[20px] border border-white/10 hover:border-tan/40 rounded-[20px] overflow-hidden shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between cursor-pointer",children:[c.jsxs("div",{children:[c.jsxs("div",{className:"aspect-video overflow-hidden relative",children:[c.jsx("img",{src:x.heroImage,alt:x.title,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"}),c.jsx("div",{className:"absolute top-3 left-3 flex flex-wrap gap-1",children:x.tags.map((I,N)=>c.jsxs("span",{className:"font-suisse text-[10px] px-2 py-0.5 rounded-full bg-black/80 text-cream font-medium border border-white/10",children:["#",I]},N))})]}),c.jsxs("div",{className:"p-6",children:[c.jsxs("div",{className:"flex items-center justify-between font-suisse text-[11px] text-tan/60 mb-2",children:[c.jsxs("span",{className:"flex items-center gap-1",children:[c.jsx(us,{size:12})," ",x.author]}),c.jsxs("span",{className:"flex items-center gap-1",children:[c.jsx(as,{size:12})," ",x.pubDate]})]}),c.jsx("h2",{className:"font-suisse text-base font-bold text-cream group-hover:text-tan transition-colors line-clamp-2 leading-snug",children:x.title}),c.jsx("p",{className:"font-suisse mt-2 text-xs text-cream/70 line-clamp-3 leading-relaxed",children:x.description})]})]}),c.jsxs("div",{className:"px-6 pb-6 pt-3 border-t border-white/10 flex items-center justify-between font-suisse",children:[c.jsxs("span",{className:"text-xs font-medium text-cream group-hover:text-tan flex items-center gap-1.5",children:[c.jsx(Gr,{size:14})," 阅读全文教程"]}),c.jsx(Dr,{size:14,className:"text-cream group-hover:translate-x-1 transition-transform"})]})]},x.id))})]}),P&&c.jsxs("section",{id:"reviews",className:g?"pt-10 border-t border-white/10":"",children:[c.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4",children:[c.jsxs("div",{children:[c.jsx("div",{className:"font-suisse uppercase tracking-[0.15em] text-[11px] text-tan font-medium mb-2",children:"AIRPORT INDEPENDENT REVIEWS"}),c.jsx(S,{className:"font-stix text-cream text-3xl sm:text-4xl font-normal tracking-tight",children:"机场测评文章"})]}),c.jsx("p",{className:"font-suisse text-xs sm:text-sm text-tan/70",children:"全量收录 WgetCloud、隐形人、全球云、SSONE、赛博云等完整评测报告"})]}),c.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:h.map(x=>c.jsxs("div",{onClick:()=>u(x),className:"group bg-[rgba(17,16,15,0.45)] backdrop-blur-[20px] border border-white/10 hover:border-tan/40 rounded-[20px] overflow-hidden shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between cursor-pointer",children:[c.jsxs("div",{children:[c.jsxs("div",{className:"aspect-video overflow-hidden relative",children:[c.jsx("img",{src:x.heroImage,alt:x.title,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"}),c.jsx("div",{className:"absolute top-3 left-3 flex flex-wrap gap-1",children:x.tags.map((I,N)=>c.jsxs("span",{className:"font-suisse text-[10px] px-2 py-0.5 rounded-full bg-black/80 text-cream font-medium border border-white/10",children:["#",I]},N))})]}),c.jsxs("div",{className:"p-6",children:[c.jsxs("div",{className:"flex items-center justify-between font-suisse text-[11px] text-tan/60 mb-2",children:[c.jsxs("span",{className:"flex items-center gap-1",children:[c.jsx(us,{size:12})," ",x.author]}),c.jsxs("span",{className:"flex items-center gap-1",children:[c.jsx(as,{size:12})," ",x.pubDate]})]}),c.jsx("h2",{className:"font-suisse text-base font-bold text-cream group-hover:text-tan transition-colors line-clamp-2 leading-snug",children:x.title}),c.jsx("p",{className:"font-suisse mt-2 text-xs text-cream/70 line-clamp-3 leading-relaxed",children:x.description})]})]}),c.jsxs("div",{className:"px-6 pb-6 pt-3 border-t border-white/10 flex items-center justify-between font-suisse",children:[c.jsxs("span",{className:"text-xs font-medium text-cream group-hover:text-tan flex items-center gap-1.5",children:[c.jsx(Gr,{size:14})," 阅读测评文章"]}),c.jsx(Dr,{size:14,className:"text-cream group-hover:translate-x-1 transition-transform"})]})]},x.id))})]}),i&&Hh.createPortal(c.jsx("div",{onClick:x=>{x.target===x.currentTarget&&u(null)},className:"fixed inset-0 top-0 left-0 w-screen h-screen z-[99999] flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-2xl animate-fade-in select-text",children:c.jsxs("div",{className:"relative w-full max-w-4xl max-h-[92vh] bg-[#0C0F12] border border-white/15 rounded-[24px] shadow-2xl overflow-y-auto p-6 sm:p-10 text-cream space-y-6",children:[c.jsx("button",{type:"button",onClick:()=>u(null),className:"absolute top-6 right-6 p-2 rounded-xl bg-white/5 border border-white/10 text-cream hover:bg-white/10 transition-colors z-20",children:c.jsx(Zh,{size:20})}),c.jsxs("div",{className:"space-y-3 border-b border-white/10 pb-6 pr-10",children:[c.jsx("div",{className:"flex flex-wrap gap-1.5",children:i.tags.map((x,I)=>c.jsxs("span",{className:"font-suisse text-xs px-2.5 py-0.5 rounded-full bg-cream/10 border border-cream/20 text-cream font-medium",children:["#",x]},I))}),c.jsx("h2",{className:"font-stix text-2xl sm:text-4xl font-normal text-cream leading-tight",children:i.title}),c.jsxs("div",{className:"font-suisse flex items-center gap-4 text-xs text-tan/60",children:[c.jsxs("span",{children:["作者：",i.author]}),c.jsx("span",{children:"•"}),c.jsxs("span",{children:["发布日期：",i.pubDate]})]})]}),c.jsxs("div",{className:"p-4 rounded-xl bg-cream/10 border border-cream/20 flex flex-col sm:flex-row items-center justify-between gap-4 font-suisse",children:[c.jsx("div",{className:"text-xs text-cream font-medium",children:"🚀 2026 高速 IPLC 专线节点现已全面开放，输入优惠码立享折扣！"}),c.jsx(ke,{to:"/category/popular",onClick:()=>u(null),className:"px-4 py-2 rounded-xl bg-cream text-dark-blue font-bold text-xs whitespace-nowrap hover:opacity-90 transition-opacity",children:"直达官方通道 →"})]}),c.jsx("div",{className:"py-2",children:c.jsx(ld,{content:i.content})}),c.jsxs("div",{className:"pt-6 border-t border-white/10 flex justify-between items-center text-xs font-suisse",children:[c.jsx(ke,{to:"/category/popular",onClick:()=>u(null),className:"text-tan font-medium hover:underline",children:"← 返回机场推荐"}),c.jsx("button",{type:"button",onClick:()=>u(null),className:"px-4 py-2 rounded-xl bg-cream text-dark-blue font-bold hover:bg-white transition-colors",children:"关闭阅读器"})]})]})}),document.body)]})}function od({isSubPage:i=!1}){const u=i?"h1":"h2";return c.jsx("section",{id:"about",className:"py-20 border-t border-white/10 max-w-6xl mx-auto px-5 sm:px-8 select-none",children:c.jsxs("div",{className:"bg-[rgba(17,16,15,0.45)] backdrop-blur-[20px] border border-white/10 rounded-[24px] p-6 sm:p-10 space-y-6 text-cream/80 font-suisse text-xs sm:text-sm leading-relaxed shadow-2xl",children:[c.jsxs("div",{className:"flex items-center gap-3 border-b border-white/10 pb-4",children:[c.jsx("span",{className:"text-2xl",children:"⚖️"}),c.jsxs("div",{children:[c.jsx("div",{className:"text-[10px] text-tan uppercase tracking-widest font-medium",children:"LEGAL COMPLIANCE & ABOUT US"}),c.jsx(u,{className:"font-stix text-cream text-2xl sm:text-3xl font-normal",children:"免责声明与合规说明"})]})]}),c.jsxs("div",{className:"p-5 sm:p-6 rounded-2xl bg-cream/5 border border-cream/15 space-y-3 font-suisse",children:[c.jsx("h3",{className:"text-cream text-base font-bold flex items-center gap-2",children:"👋 关于「机场搜」"}),c.jsx("p",{className:"text-cream/90 leading-relaxed",children:"「机场搜」是一个专注于网络加速技术研究与网络节点实时测评的独立技术博客。"}),c.jsx("p",{className:"text-cream/90 leading-relaxed",children:"我们利用自动化探针与 24 小时监控体系，持续追踪各类网络加速服务商的丢包率、延迟及实际带宽表现，致力于通过真实、客观的数据，为网络工程探讨及个人选型提供科学的参考依据。我们不贩卖流量，只做客观数据的记录者与优质线路的推荐官。"})]}),c.jsxs("div",{className:"space-y-4 pt-2",children:[c.jsxs("p",{children:["1. ",c.jsx("strong",{children:"中立性原则："})," 本站为独立的网络加速技术研究与节点压测大盘。所有测评数据（包括但不限于丢包率、延迟、倍率与带宽）均由自动化探针 24 小时实时采集，仅供网络工程学术探讨与个人选型参考。"]}),c.jsxs("p",{children:["2. ",c.jsx("strong",{children:"合规使用提示："})," 任何使用者在浏览国际互联网时，须严格遵守使用者所在国家和地区的相关法律法规，切勿利用网络加速服务从事违法违规活动。"]}),c.jsxs("p",{children:["3. ",c.jsx("strong",{children:"服务商归属声明："})," 本站不提供任何网络节点代理服务，亦不参与服务商的具体运营。所有外部链接均为相关服务商官网或第三方公开接入通道，服务稳定性与数据安全由各自运营方承担。"]})]})]})})}function nm({onOpenArticleById:i,activeArticle:u,setActiveArticle:a}){return E.useEffect(()=>{document.title="机场搜 • 2026 科学上网与机场节点选型全景大盘"},[]),c.jsxs(c.Fragment,{children:[c.jsx("h1",{className:"sr-only",children:"机场搜 • 2026 科学上网与机场节点选型全景大盘"}),c.jsx(tm,{}),c.jsxs("main",{children:[c.jsx(nd,{onOpenArticle:i,isSubPage:!1}),c.jsx(rd,{onOpenArticle:i,isSubPage:!1}),c.jsx(ws,{activeArticle:u,setActiveArticle:a,isSubPage:!1}),c.jsx(od,{isSubPage:!1})]})]})}function rm({onOpenArticleById:i}){return E.useEffect(()=>{document.title="机场推荐 - 机场搜"},[]),c.jsx("div",{className:"pt-24 min-h-screen",children:c.jsx("main",{children:c.jsx(nd,{onOpenArticle:i,isSubPage:!0})})})}function lm({onOpenArticleById:i}){return E.useEffect(()=>{document.title="机场节点大盘 - 机场搜"},[]),c.jsx("div",{className:"pt-24 min-h-screen",children:c.jsx("main",{children:c.jsx(rd,{onOpenArticle:i,isSubPage:!0})})})}function om({activeArticle:i,setActiveArticle:u}){return E.useEffect(()=>{document.title="🛠️ 客户端与 AI 配置教程 - 机场搜"},[]),c.jsx("div",{className:"pt-24 min-h-screen",children:c.jsx("main",{children:c.jsx(ws,{activeArticle:i,setActiveArticle:u,isSubPage:!0,filterCategory:"tutorial"})})})}function im({activeArticle:i,setActiveArticle:u}){return E.useEffect(()=>{document.title="机场测评文章 - 机场搜"},[]),c.jsx("div",{className:"pt-24 min-h-screen",children:c.jsx("main",{children:c.jsx(ws,{activeArticle:i,setActiveArticle:u,isSubPage:!0,filterCategory:"review"})})})}function sm(){const{id:i}=qp(),u=Wn.find(a=>a.id===i||a.id===`review-${i}`||a.id.includes(i||""))||Wn[0];return E.useEffect(()=>{u&&(document.title=`${u.title} - 机场搜`)},[u]),u?c.jsxs("div",{className:"pt-28 pb-20 max-w-4xl mx-auto px-5 sm:px-8 select-text",children:[c.jsx("div",{className:"mb-6",children:c.jsxs(ke,{to:"/",className:"inline-flex items-center gap-2 text-xs font-suisse text-tan hover:text-cream transition-colors",children:[c.jsx(Xh,{size:14})," 返回首页"]})}),c.jsxs("article",{className:"bg-[#0C0F12] border border-white/15 rounded-[24px] shadow-2xl p-6 sm:p-10 text-cream space-y-6",children:[c.jsxs("div",{className:"space-y-3 border-b border-white/10 pb-6",children:[c.jsx("div",{className:"flex flex-wrap gap-1.5",children:u.tags.map((a,d)=>c.jsxs("span",{className:"font-suisse text-xs px-2.5 py-0.5 rounded-full bg-cream/10 border border-cream/20 text-cream font-medium",children:["#",a]},d))}),c.jsx("h1",{className:"font-stix text-2xl sm:text-4xl font-normal text-cream leading-tight",children:u.title}),c.jsxs("div",{className:"font-suisse flex items-center gap-4 text-xs text-tan/60",children:[c.jsxs("span",{className:"flex items-center gap-1",children:[c.jsx(us,{size:12})," 作者：",u.author]}),c.jsx("span",{children:"•"}),c.jsxs("span",{className:"flex items-center gap-1",children:[c.jsx(as,{size:12})," 发布日期：",u.pubDate]})]})]}),c.jsxs("div",{className:"p-4 rounded-xl bg-cream/10 border border-cream/20 flex flex-col sm:flex-row items-center justify-between gap-4 font-suisse",children:[c.jsx("div",{className:"text-xs text-cream font-medium",children:"🚀 2026 高速 IPLC 专线节点现已全面开放，输入优惠码立享折扣！"}),c.jsx(ke,{to:"/category/popular",className:"px-4 py-2 rounded-xl bg-cream text-dark-blue font-bold text-xs whitespace-nowrap hover:opacity-90 transition-opacity",children:"直达官方通道 →"})]}),c.jsx("div",{className:"py-2",children:c.jsx(ld,{content:u.content})}),c.jsxs("div",{className:"pt-6 border-t border-white/10 flex justify-between items-center text-xs font-suisse",children:[c.jsx(ke,{to:"/category/popular",className:"text-tan font-medium hover:underline",children:"← 返回机场推荐"}),c.jsx(ke,{to:"/",className:"px-4 py-2 rounded-xl bg-cream text-dark-blue font-bold hover:bg-white transition-colors",children:"返回首页"})]})]})]}):c.jsxs("div",{className:"pt-32 pb-20 max-w-4xl mx-auto px-5 text-center font-suisse",children:[c.jsx("h1",{className:"text-2xl text-cream font-bold mb-4",children:"未找到相关测评文章"}),c.jsx(ke,{to:"/",className:"text-tan hover:underline",children:"← 返回首页"})]})}function am(){return E.useEffect(()=>{document.title="免责声明与合规说明 - 机场搜"},[]),c.jsx("div",{className:"pt-24 min-h-screen",children:c.jsx("main",{children:c.jsx(od,{isSubPage:!0})})})}function um(){const i=new Date().getFullYear(),[u,a]=E.useState(null),d=f=>{const h=Wn.find(g=>g.id===`review-${f}`||g.id.includes(f))||Wn[0];a(h)};return c.jsx(Bh,{children:c.jsxs("div",{className:"relative min-h-screen bg-dark text-cream font-suisse selection:bg-cream selection:text-dark",children:[c.jsx("video",{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,className:"fixed inset-0 w-full h-full object-cover z-0 pointer-events-none animate-fade-in",src:"https://r2.motionsites.dev/motionsites/assets/f34ce20895ab.mp4"}),c.jsx("div",{className:"fixed inset-0 bg-[#191C1F]/19 z-0 pointer-events-none"}),c.jsx(em,{}),c.jsxs("div",{className:"relative z-10",children:[c.jsxs(fh,{children:[c.jsx(nn,{path:"/",element:c.jsx(nm,{onOpenArticleById:d,activeArticle:u,setActiveArticle:a})}),c.jsx(nn,{path:"/category/popular",element:c.jsx(rm,{onOpenArticleById:d})}),c.jsx(nn,{path:"/category/monitor",element:c.jsx(lm,{onOpenArticleById:d})}),c.jsx(nn,{path:"/category/client-tutorials",element:c.jsx(om,{activeArticle:u,setActiveArticle:a})}),c.jsx(nn,{path:"/category/independent-reviews",element:c.jsx(im,{activeArticle:u,setActiveArticle:a})}),c.jsx(nn,{path:"/article/:id",element:c.jsx(sm,{})}),c.jsx(nn,{path:"/about",element:c.jsx(am,{})})]}),c.jsx("footer",{className:"border-t border-white/10 bg-black/40 backdrop-blur-md py-12 text-center text-xs text-tan/50 font-suisse",children:c.jsxs("div",{className:"max-w-6xl mx-auto px-5 flex flex-col sm:flex-row items-center justify-between gap-4",children:[c.jsxs("div",{children:["© ",i," 机场搜 • 极速网络节点与加速工具测评网. All rights reserved."]}),c.jsxs("div",{className:"flex gap-6 text-tan/70",children:[c.jsx(ke,{to:"/",className:"hover:text-cream transition-colors",children:"首页"}),c.jsx(ke,{to:"/category/popular",className:"hover:text-cream transition-colors",children:"机场推荐"}),c.jsx(ke,{to:"/category/monitor",className:"hover:text-cream transition-colors",children:"机场节点大盘"}),c.jsx(ke,{to:"/category/client-tutorials",className:"hover:text-cream transition-colors",children:"Clash教程"}),c.jsx(ke,{to:"/about",className:"hover:text-cream transition-colors",children:"关于我们"})]})]})})]})]})})}dp.createRoot(document.getElementById("root")).render(c.jsx(_c.StrictMode,{children:c.jsx(um,{})}));
