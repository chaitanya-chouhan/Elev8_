(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function w_(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Fd={exports:{}},Qa={},Ud={exports:{}},ke={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var my;function WE(){if(my)return ke;my=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),E=Symbol.iterator;function I(V){return V===null||typeof V!="object"?null:(V=E&&V[E]||V["@@iterator"],typeof V=="function"?V:null)}var P={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},q=Object.assign,O={};function L(V,Q,Se){this.props=V,this.context=Q,this.refs=O,this.updater=Se||P}L.prototype.isReactComponent={},L.prototype.setState=function(V,Q){if(typeof V!="object"&&typeof V!="function"&&V!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,V,Q,"setState")},L.prototype.forceUpdate=function(V){this.updater.enqueueForceUpdate(this,V,"forceUpdate")};function H(){}H.prototype=L.prototype;function Z(V,Q,Se){this.props=V,this.context=Q,this.refs=O,this.updater=Se||P}var ie=Z.prototype=new H;ie.constructor=Z,q(ie,L.prototype),ie.isPureReactComponent=!0;var ne=Array.isArray,fe=Object.prototype.hasOwnProperty,Ie={current:null},R={key:!0,ref:!0,__self:!0,__source:!0};function b(V,Q,Se){var be,Ae={},Ce=null,Fe=null;if(Q!=null)for(be in Q.ref!==void 0&&(Fe=Q.ref),Q.key!==void 0&&(Ce=""+Q.key),Q)fe.call(Q,be)&&!R.hasOwnProperty(be)&&(Ae[be]=Q[be]);var Le=arguments.length-2;if(Le===1)Ae.children=Se;else if(1<Le){for(var qe=Array(Le),Wt=0;Wt<Le;Wt++)qe[Wt]=arguments[Wt+2];Ae.children=qe}if(V&&V.defaultProps)for(be in Le=V.defaultProps,Le)Ae[be]===void 0&&(Ae[be]=Le[be]);return{$$typeof:n,type:V,key:Ce,ref:Fe,props:Ae,_owner:Ie.current}}function A(V,Q){return{$$typeof:n,type:V.type,key:Q,ref:V.ref,props:V.props,_owner:V._owner}}function D(V){return typeof V=="object"&&V!==null&&V.$$typeof===n}function N(V){var Q={"=":"=0",":":"=2"};return"$"+V.replace(/[=:]/g,function(Se){return Q[Se]})}var M=/\/+/g;function k(V,Q){return typeof V=="object"&&V!==null&&V.key!=null?N(""+V.key):Q.toString(36)}function Be(V,Q,Se,be,Ae){var Ce=typeof V;(Ce==="undefined"||Ce==="boolean")&&(V=null);var Fe=!1;if(V===null)Fe=!0;else switch(Ce){case"string":case"number":Fe=!0;break;case"object":switch(V.$$typeof){case n:case e:Fe=!0}}if(Fe)return Fe=V,Ae=Ae(Fe),V=be===""?"."+k(Fe,0):be,ne(Ae)?(Se="",V!=null&&(Se=V.replace(M,"$&/")+"/"),Be(Ae,Q,Se,"",function(Wt){return Wt})):Ae!=null&&(D(Ae)&&(Ae=A(Ae,Se+(!Ae.key||Fe&&Fe.key===Ae.key?"":(""+Ae.key).replace(M,"$&/")+"/")+V)),Q.push(Ae)),1;if(Fe=0,be=be===""?".":be+":",ne(V))for(var Le=0;Le<V.length;Le++){Ce=V[Le];var qe=be+k(Ce,Le);Fe+=Be(Ce,Q,Se,qe,Ae)}else if(qe=I(V),typeof qe=="function")for(V=qe.call(V),Le=0;!(Ce=V.next()).done;)Ce=Ce.value,qe=be+k(Ce,Le++),Fe+=Be(Ce,Q,Se,qe,Ae);else if(Ce==="object")throw Q=String(V),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(V).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.");return Fe}function We(V,Q,Se){if(V==null)return V;var be=[],Ae=0;return Be(V,be,"","",function(Ce){return Q.call(Se,Ce,Ae++)}),be}function jt(V){if(V._status===-1){var Q=V._result;Q=Q(),Q.then(function(Se){(V._status===0||V._status===-1)&&(V._status=1,V._result=Se)},function(Se){(V._status===0||V._status===-1)&&(V._status=2,V._result=Se)}),V._status===-1&&(V._status=0,V._result=Q)}if(V._status===1)return V._result.default;throw V._result}var Ze={current:null},re={transition:null},me={ReactCurrentDispatcher:Ze,ReactCurrentBatchConfig:re,ReactCurrentOwner:Ie};function le(){throw Error("act(...) is not supported in production builds of React.")}return ke.Children={map:We,forEach:function(V,Q,Se){We(V,function(){Q.apply(this,arguments)},Se)},count:function(V){var Q=0;return We(V,function(){Q++}),Q},toArray:function(V){return We(V,function(Q){return Q})||[]},only:function(V){if(!D(V))throw Error("React.Children.only expected to receive a single React element child.");return V}},ke.Component=L,ke.Fragment=t,ke.Profiler=o,ke.PureComponent=Z,ke.StrictMode=i,ke.Suspense=m,ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=me,ke.act=le,ke.cloneElement=function(V,Q,Se){if(V==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+V+".");var be=q({},V.props),Ae=V.key,Ce=V.ref,Fe=V._owner;if(Q!=null){if(Q.ref!==void 0&&(Ce=Q.ref,Fe=Ie.current),Q.key!==void 0&&(Ae=""+Q.key),V.type&&V.type.defaultProps)var Le=V.type.defaultProps;for(qe in Q)fe.call(Q,qe)&&!R.hasOwnProperty(qe)&&(be[qe]=Q[qe]===void 0&&Le!==void 0?Le[qe]:Q[qe])}var qe=arguments.length-2;if(qe===1)be.children=Se;else if(1<qe){Le=Array(qe);for(var Wt=0;Wt<qe;Wt++)Le[Wt]=arguments[Wt+2];be.children=Le}return{$$typeof:n,type:V.type,key:Ae,ref:Ce,props:be,_owner:Fe}},ke.createContext=function(V){return V={$$typeof:u,_currentValue:V,_currentValue2:V,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},V.Provider={$$typeof:l,_context:V},V.Consumer=V},ke.createElement=b,ke.createFactory=function(V){var Q=b.bind(null,V);return Q.type=V,Q},ke.createRef=function(){return{current:null}},ke.forwardRef=function(V){return{$$typeof:p,render:V}},ke.isValidElement=D,ke.lazy=function(V){return{$$typeof:w,_payload:{_status:-1,_result:V},_init:jt}},ke.memo=function(V,Q){return{$$typeof:v,type:V,compare:Q===void 0?null:Q}},ke.startTransition=function(V){var Q=re.transition;re.transition={};try{V()}finally{re.transition=Q}},ke.unstable_act=le,ke.useCallback=function(V,Q){return Ze.current.useCallback(V,Q)},ke.useContext=function(V){return Ze.current.useContext(V)},ke.useDebugValue=function(){},ke.useDeferredValue=function(V){return Ze.current.useDeferredValue(V)},ke.useEffect=function(V,Q){return Ze.current.useEffect(V,Q)},ke.useId=function(){return Ze.current.useId()},ke.useImperativeHandle=function(V,Q,Se){return Ze.current.useImperativeHandle(V,Q,Se)},ke.useInsertionEffect=function(V,Q){return Ze.current.useInsertionEffect(V,Q)},ke.useLayoutEffect=function(V,Q){return Ze.current.useLayoutEffect(V,Q)},ke.useMemo=function(V,Q){return Ze.current.useMemo(V,Q)},ke.useReducer=function(V,Q,Se){return Ze.current.useReducer(V,Q,Se)},ke.useRef=function(V){return Ze.current.useRef(V)},ke.useState=function(V){return Ze.current.useState(V)},ke.useSyncExternalStore=function(V,Q,Se){return Ze.current.useSyncExternalStore(V,Q,Se)},ke.useTransition=function(){return Ze.current.useTransition()},ke.version="18.3.1",ke}var gy;function $f(){return gy||(gy=1,Ud.exports=WE()),Ud.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yy;function qE(){if(yy)return Qa;yy=1;var n=$f(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(p,m,v){var w,E={},I=null,P=null;v!==void 0&&(I=""+v),m.key!==void 0&&(I=""+m.key),m.ref!==void 0&&(P=m.ref);for(w in m)i.call(m,w)&&!l.hasOwnProperty(w)&&(E[w]=m[w]);if(p&&p.defaultProps)for(w in m=p.defaultProps,m)E[w]===void 0&&(E[w]=m[w]);return{$$typeof:e,type:p,key:I,ref:P,props:E,_owner:o.current}}return Qa.Fragment=t,Qa.jsx=u,Qa.jsxs=u,Qa}var vy;function HE(){return vy||(vy=1,Fd.exports=qE()),Fd.exports}var h=HE(),B=$f();const GE=w_(B);var Xc={},Bd={exports:{}},Xt={},zd={exports:{}},$d={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _y;function KE(){return _y||(_y=1,(function(n){function e(re,me){var le=re.length;re.push(me);e:for(;0<le;){var V=le-1>>>1,Q=re[V];if(0<o(Q,me))re[V]=me,re[le]=Q,le=V;else break e}}function t(re){return re.length===0?null:re[0]}function i(re){if(re.length===0)return null;var me=re[0],le=re.pop();if(le!==me){re[0]=le;e:for(var V=0,Q=re.length,Se=Q>>>1;V<Se;){var be=2*(V+1)-1,Ae=re[be],Ce=be+1,Fe=re[Ce];if(0>o(Ae,le))Ce<Q&&0>o(Fe,Ae)?(re[V]=Fe,re[Ce]=le,V=Ce):(re[V]=Ae,re[be]=le,V=be);else if(Ce<Q&&0>o(Fe,le))re[V]=Fe,re[Ce]=le,V=Ce;else break e}}return me}function o(re,me){var le=re.sortIndex-me.sortIndex;return le!==0?le:re.id-me.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var u=Date,p=u.now();n.unstable_now=function(){return u.now()-p}}var m=[],v=[],w=1,E=null,I=3,P=!1,q=!1,O=!1,L=typeof setTimeout=="function"?setTimeout:null,H=typeof clearTimeout=="function"?clearTimeout:null,Z=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ie(re){for(var me=t(v);me!==null;){if(me.callback===null)i(v);else if(me.startTime<=re)i(v),me.sortIndex=me.expirationTime,e(m,me);else break;me=t(v)}}function ne(re){if(O=!1,ie(re),!q)if(t(m)!==null)q=!0,jt(fe);else{var me=t(v);me!==null&&Ze(ne,me.startTime-re)}}function fe(re,me){q=!1,O&&(O=!1,H(b),b=-1),P=!0;var le=I;try{for(ie(me),E=t(m);E!==null&&(!(E.expirationTime>me)||re&&!N());){var V=E.callback;if(typeof V=="function"){E.callback=null,I=E.priorityLevel;var Q=V(E.expirationTime<=me);me=n.unstable_now(),typeof Q=="function"?E.callback=Q:E===t(m)&&i(m),ie(me)}else i(m);E=t(m)}if(E!==null)var Se=!0;else{var be=t(v);be!==null&&Ze(ne,be.startTime-me),Se=!1}return Se}finally{E=null,I=le,P=!1}}var Ie=!1,R=null,b=-1,A=5,D=-1;function N(){return!(n.unstable_now()-D<A)}function M(){if(R!==null){var re=n.unstable_now();D=re;var me=!0;try{me=R(!0,re)}finally{me?k():(Ie=!1,R=null)}}else Ie=!1}var k;if(typeof Z=="function")k=function(){Z(M)};else if(typeof MessageChannel<"u"){var Be=new MessageChannel,We=Be.port2;Be.port1.onmessage=M,k=function(){We.postMessage(null)}}else k=function(){L(M,0)};function jt(re){R=re,Ie||(Ie=!0,k())}function Ze(re,me){b=L(function(){re(n.unstable_now())},me)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(re){re.callback=null},n.unstable_continueExecution=function(){q||P||(q=!0,jt(fe))},n.unstable_forceFrameRate=function(re){0>re||125<re?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<re?Math.floor(1e3/re):5},n.unstable_getCurrentPriorityLevel=function(){return I},n.unstable_getFirstCallbackNode=function(){return t(m)},n.unstable_next=function(re){switch(I){case 1:case 2:case 3:var me=3;break;default:me=I}var le=I;I=me;try{return re()}finally{I=le}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(re,me){switch(re){case 1:case 2:case 3:case 4:case 5:break;default:re=3}var le=I;I=re;try{return me()}finally{I=le}},n.unstable_scheduleCallback=function(re,me,le){var V=n.unstable_now();switch(typeof le=="object"&&le!==null?(le=le.delay,le=typeof le=="number"&&0<le?V+le:V):le=V,re){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=le+Q,re={id:w++,callback:me,priorityLevel:re,startTime:le,expirationTime:Q,sortIndex:-1},le>V?(re.sortIndex=le,e(v,re),t(m)===null&&re===t(v)&&(O?(H(b),b=-1):O=!0,Ze(ne,le-V))):(re.sortIndex=Q,e(m,re),q||P||(q=!0,jt(fe))),re},n.unstable_shouldYield=N,n.unstable_wrapCallback=function(re){var me=I;return function(){var le=I;I=me;try{return re.apply(this,arguments)}finally{I=le}}}})($d)),$d}var wy;function QE(){return wy||(wy=1,zd.exports=KE()),zd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xy;function YE(){if(xy)return Xt;xy=1;var n=$f(),e=QE();function t(r){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+r,a=1;a<arguments.length;a++)s+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+r+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function l(r,s){u(r,s),u(r+"Capture",s)}function u(r,s){for(o[r]=s,r=0;r<s.length;r++)i.add(s[r])}var p=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),m=Object.prototype.hasOwnProperty,v=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},E={};function I(r){return m.call(E,r)?!0:m.call(w,r)?!1:v.test(r)?E[r]=!0:(w[r]=!0,!1)}function P(r,s,a,d){if(a!==null&&a.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return d?!1:a!==null?!a.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function q(r,s,a,d){if(s===null||typeof s>"u"||P(r,s,a,d))return!0;if(d)return!1;if(a!==null)switch(a.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function O(r,s,a,d,f,g,x){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=d,this.attributeNamespace=f,this.mustUseProperty=a,this.propertyName=r,this.type=s,this.sanitizeURL=g,this.removeEmptyString=x}var L={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){L[r]=new O(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var s=r[0];L[s]=new O(s,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){L[r]=new O(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){L[r]=new O(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){L[r]=new O(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){L[r]=new O(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){L[r]=new O(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){L[r]=new O(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){L[r]=new O(r,5,!1,r.toLowerCase(),null,!1,!1)});var H=/[\-:]([a-z])/g;function Z(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var s=r.replace(H,Z);L[s]=new O(s,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var s=r.replace(H,Z);L[s]=new O(s,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var s=r.replace(H,Z);L[s]=new O(s,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){L[r]=new O(r,1,!1,r.toLowerCase(),null,!1,!1)}),L.xlinkHref=new O("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){L[r]=new O(r,1,!1,r.toLowerCase(),null,!0,!0)});function ie(r,s,a,d){var f=L.hasOwnProperty(s)?L[s]:null;(f!==null?f.type!==0:d||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(q(s,a,f,d)&&(a=null),d||f===null?I(s)&&(a===null?r.removeAttribute(s):r.setAttribute(s,""+a)):f.mustUseProperty?r[f.propertyName]=a===null?f.type===3?!1:"":a:(s=f.attributeName,d=f.attributeNamespace,a===null?r.removeAttribute(s):(f=f.type,a=f===3||f===4&&a===!0?"":""+a,d?r.setAttributeNS(d,s,a):r.setAttribute(s,a))))}var ne=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,fe=Symbol.for("react.element"),Ie=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),b=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),D=Symbol.for("react.provider"),N=Symbol.for("react.context"),M=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),Be=Symbol.for("react.suspense_list"),We=Symbol.for("react.memo"),jt=Symbol.for("react.lazy"),Ze=Symbol.for("react.offscreen"),re=Symbol.iterator;function me(r){return r===null||typeof r!="object"?null:(r=re&&r[re]||r["@@iterator"],typeof r=="function"?r:null)}var le=Object.assign,V;function Q(r){if(V===void 0)try{throw Error()}catch(a){var s=a.stack.trim().match(/\n( *(at )?)/);V=s&&s[1]||""}return`
`+V+r}var Se=!1;function be(r,s){if(!r||Se)return"";Se=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch($){var d=$}Reflect.construct(r,[],s)}else{try{s.call()}catch($){d=$}r.call(s.prototype)}else{try{throw Error()}catch($){d=$}r()}}catch($){if($&&d&&typeof $.stack=="string"){for(var f=$.stack.split(`
`),g=d.stack.split(`
`),x=f.length-1,S=g.length-1;1<=x&&0<=S&&f[x]!==g[S];)S--;for(;1<=x&&0<=S;x--,S--)if(f[x]!==g[S]){if(x!==1||S!==1)do if(x--,S--,0>S||f[x]!==g[S]){var C=`
`+f[x].replace(" at new "," at ");return r.displayName&&C.includes("<anonymous>")&&(C=C.replace("<anonymous>",r.displayName)),C}while(1<=x&&0<=S);break}}}finally{Se=!1,Error.prepareStackTrace=a}return(r=r?r.displayName||r.name:"")?Q(r):""}function Ae(r){switch(r.tag){case 5:return Q(r.type);case 16:return Q("Lazy");case 13:return Q("Suspense");case 19:return Q("SuspenseList");case 0:case 2:case 15:return r=be(r.type,!1),r;case 11:return r=be(r.type.render,!1),r;case 1:return r=be(r.type,!0),r;default:return""}}function Ce(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case R:return"Fragment";case Ie:return"Portal";case A:return"Profiler";case b:return"StrictMode";case k:return"Suspense";case Be:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case N:return(r.displayName||"Context")+".Consumer";case D:return(r._context.displayName||"Context")+".Provider";case M:var s=r.render;return r=r.displayName,r||(r=s.displayName||s.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case We:return s=r.displayName||null,s!==null?s:Ce(r.type)||"Memo";case jt:s=r._payload,r=r._init;try{return Ce(r(s))}catch{}}return null}function Fe(r){var s=r.type;switch(r.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=s.render,r=r.displayName||r.name||"",s.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ce(s);case 8:return s===b?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function Le(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function qe(r){var s=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function Wt(r){var s=qe(r)?"checked":"value",a=Object.getOwnPropertyDescriptor(r.constructor.prototype,s),d=""+r[s];if(!r.hasOwnProperty(s)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var f=a.get,g=a.set;return Object.defineProperty(r,s,{configurable:!0,get:function(){return f.call(this)},set:function(x){d=""+x,g.call(this,x)}}),Object.defineProperty(r,s,{enumerable:a.enumerable}),{getValue:function(){return d},setValue:function(x){d=""+x},stopTracking:function(){r._valueTracker=null,delete r[s]}}}}function Bs(r){r._valueTracker||(r._valueTracker=Wt(r))}function ta(r){if(!r)return!1;var s=r._valueTracker;if(!s)return!0;var a=s.getValue(),d="";return r&&(d=qe(r)?r.checked?"true":"false":r.value),r=d,r!==a?(s.setValue(r),!0):!1}function ei(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function zs(r,s){var a=s.checked;return le({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??r._wrapperState.initialChecked})}function Vl(r,s){var a=s.defaultValue==null?"":s.defaultValue,d=s.checked!=null?s.checked:s.defaultChecked;a=Le(s.value!=null?s.value:a),r._wrapperState={initialChecked:d,initialValue:a,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function $s(r,s){s=s.checked,s!=null&&ie(r,"checked",s,!1)}function Ki(r,s){$s(r,s);var a=Le(s.value),d=s.type;if(a!=null)d==="number"?(a===0&&r.value===""||r.value!=a)&&(r.value=""+a):r.value!==""+a&&(r.value=""+a);else if(d==="submit"||d==="reset"){r.removeAttribute("value");return}s.hasOwnProperty("value")?dt(r,s.type,a):s.hasOwnProperty("defaultValue")&&dt(r,s.type,Le(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(r.defaultChecked=!!s.defaultChecked)}function na(r,s,a){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var d=s.type;if(!(d!=="submit"&&d!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+r._wrapperState.initialValue,a||s===r.value||(r.value=s),r.defaultValue=s}a=r.name,a!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,a!==""&&(r.name=a)}function dt(r,s,a){(s!=="number"||ei(r.ownerDocument)!==r)&&(a==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+a&&(r.defaultValue=""+a))}var at=Array.isArray;function bn(r,s,a,d){if(r=r.options,s){s={};for(var f=0;f<a.length;f++)s["$"+a[f]]=!0;for(a=0;a<r.length;a++)f=s.hasOwnProperty("$"+r[a].value),r[a].selected!==f&&(r[a].selected=f),f&&d&&(r[a].defaultSelected=!0)}else{for(a=""+Le(a),s=null,f=0;f<r.length;f++){if(r[f].value===a){r[f].selected=!0,d&&(r[f].defaultSelected=!0);return}s!==null||r[f].disabled||(s=r[f])}s!==null&&(s.selected=!0)}}function ra(r,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return le({},s,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function ia(r,s){var a=s.value;if(a==null){if(a=s.children,s=s.defaultValue,a!=null){if(s!=null)throw Error(t(92));if(at(a)){if(1<a.length)throw Error(t(93));a=a[0]}s=a}s==null&&(s=""),a=s}r._wrapperState={initialValue:Le(a)}}function Ml(r,s){var a=Le(s.value),d=Le(s.defaultValue);a!=null&&(a=""+a,a!==r.value&&(r.value=a),s.defaultValue==null&&r.defaultValue!==a&&(r.defaultValue=a)),d!=null&&(r.defaultValue=""+d)}function ti(r){var s=r.textContent;s===r._wrapperState.initialValue&&s!==""&&s!==null&&(r.value=s)}function sa(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ws(r,s){return r==null||r==="http://www.w3.org/1999/xhtml"?sa(s):r==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var ni,Fl=(function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,a,d,f){MSApp.execUnsafeLocalFunction(function(){return r(s,a,d,f)})}:r})(function(r,s){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=s;else{for(ni=ni||document.createElement("div"),ni.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=ni.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;s.firstChild;)r.appendChild(s.firstChild)}});function Qi(r,s){if(s){var a=r.firstChild;if(a&&a===r.lastChild&&a.nodeType===3){a.nodeValue=s;return}}r.textContent=s}var ri={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ul=["Webkit","ms","Moz","O"];Object.keys(ri).forEach(function(r){Ul.forEach(function(s){s=s+r.charAt(0).toUpperCase()+r.substring(1),ri[s]=ri[r]})});function ii(r,s,a){return s==null||typeof s=="boolean"||s===""?"":a||typeof s!="number"||s===0||ri.hasOwnProperty(r)&&ri[r]?(""+s).trim():s+"px"}function qs(r,s){r=r.style;for(var a in s)if(s.hasOwnProperty(a)){var d=a.indexOf("--")===0,f=ii(a,s[a],d);a==="float"&&(a="cssFloat"),d?r.setProperty(a,f):r[a]=f}}var oa=le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function kn(r,s){if(s){if(oa[r]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,r));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function Hs(r,s){if(r.indexOf("-")===-1)return typeof s.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var si=null;function Gs(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var _r=null,wr=null,st=null;function aa(r){if(r=Da(r)){if(typeof _r!="function")throw Error(t(280));var s=r.stateNode;s&&(s=fc(s),_r(r.stateNode,r.type,s))}}function oi(r){wr?st?st.push(r):st=[r]:wr=r}function ai(){if(wr){var r=wr,s=st;if(st=wr=null,aa(r),s)for(r=0;r<s.length;r++)aa(s[r])}}function Bl(r,s){return r(s)}function zl(){}var qn=!1;function $l(r,s,a){if(qn)return r(s,a);qn=!0;try{return Bl(r,s,a)}finally{qn=!1,(wr!==null||st!==null)&&(zl(),ai())}}function Yi(r,s){var a=r.stateNode;if(a===null)return null;var d=fc(a);if(d===null)return null;a=d[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(d=!d.disabled)||(r=r.type,d=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!d;break e;default:r=!1}if(r)return null;if(a&&typeof a!="function")throw Error(t(231,s,typeof a));return a}var li=!1;if(p)try{var ci={};Object.defineProperty(ci,"passive",{get:function(){li=!0}}),window.addEventListener("test",ci,ci),window.removeEventListener("test",ci,ci)}catch{li=!1}function Wl(r,s,a,d,f,g,x,S,C){var $=Array.prototype.slice.call(arguments,3);try{s.apply(a,$)}catch(J){this.onError(J)}}var xr=!1,Hn=null,Ks=!1,hn=null,ql={onError:function(r){xr=!0,Hn=r}};function Hl(r,s,a,d,f,g,x,S,C){xr=!1,Hn=null,Wl.apply(ql,arguments)}function la(r,s,a,d,f,g,x,S,C){if(Hl.apply(this,arguments),xr){if(xr){var $=Hn;xr=!1,Hn=null}else throw Error(t(198));Ks||(Ks=!0,hn=$)}}function An(r){var s=r,a=r;if(r.alternate)for(;s.return;)s=s.return;else{r=s;do s=r,(s.flags&4098)!==0&&(a=s.return),r=s.return;while(r)}return s.tag===3?a:null}function ca(r){if(r.tag===13){var s=r.memoizedState;if(s===null&&(r=r.alternate,r!==null&&(s=r.memoizedState)),s!==null)return s.dehydrated}return null}function Gl(r){if(An(r)!==r)throw Error(t(188))}function Kl(r){var s=r.alternate;if(!s){if(s=An(r),s===null)throw Error(t(188));return s!==r?null:r}for(var a=r,d=s;;){var f=a.return;if(f===null)break;var g=f.alternate;if(g===null){if(d=f.return,d!==null){a=d;continue}break}if(f.child===g.child){for(g=f.child;g;){if(g===a)return Gl(f),r;if(g===d)return Gl(f),s;g=g.sibling}throw Error(t(188))}if(a.return!==d.return)a=f,d=g;else{for(var x=!1,S=f.child;S;){if(S===a){x=!0,a=f,d=g;break}if(S===d){x=!0,d=f,a=g;break}S=S.sibling}if(!x){for(S=g.child;S;){if(S===a){x=!0,a=g,d=f;break}if(S===d){x=!0,d=g,a=f;break}S=S.sibling}if(!x)throw Error(t(189))}}if(a.alternate!==d)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?r:s}function Ql(r){return r=Kl(r),r!==null?Ji(r):null}function Ji(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var s=Ji(r);if(s!==null)return s;r=r.sibling}return null}var ua=e.unstable_scheduleCallback,Qs=e.unstable_cancelCallback,Xi=e.unstable_shouldYield,Er=e.unstable_requestPaint,Qe=e.unstable_now,gh=e.unstable_getCurrentPriorityLevel,Ys=e.unstable_ImmediatePriority,ha=e.unstable_UserBlockingPriority,Zi=e.unstable_NormalPriority,da=e.unstable_LowPriority,Js=e.unstable_IdlePriority,es=null,en=null;function Yl(r){if(en&&typeof en.onCommitFiberRoot=="function")try{en.onCommitFiberRoot(es,r,void 0,(r.current.flags&128)===128)}catch{}}var tn=Math.clz32?Math.clz32:ts,Gn=Math.log,dn=Math.LN2;function ts(r){return r>>>=0,r===0?32:31-(Gn(r)/dn|0)|0}var Kn=64,ui=4194304;function Me(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function Tr(r,s){var a=r.pendingLanes;if(a===0)return 0;var d=0,f=r.suspendedLanes,g=r.pingedLanes,x=a&268435455;if(x!==0){var S=x&~f;S!==0?d=Me(S):(g&=x,g!==0&&(d=Me(g)))}else x=a&~f,x!==0?d=Me(x):g!==0&&(d=Me(g));if(d===0)return 0;if(s!==0&&s!==d&&(s&f)===0&&(f=d&-d,g=s&-s,f>=g||f===16&&(g&4194240)!==0))return s;if((d&4)!==0&&(d|=a&16),s=r.entangledLanes,s!==0)for(r=r.entanglements,s&=d;0<s;)a=31-tn(s),f=1<<a,d|=r[a],s&=~f;return d}function ns(r,s){switch(r){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function rs(r,s){for(var a=r.suspendedLanes,d=r.pingedLanes,f=r.expirationTimes,g=r.pendingLanes;0<g;){var x=31-tn(g),S=1<<x,C=f[x];C===-1?((S&a)===0||(S&d)!==0)&&(f[x]=ns(S,s)):C<=s&&(r.expiredLanes|=S),g&=~S}}function fa(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function pa(){var r=Kn;return Kn<<=1,(Kn&4194240)===0&&(Kn=64),r}function ma(r){for(var s=[],a=0;31>a;a++)s.push(r);return s}function is(r,s,a){r.pendingLanes|=s,s!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,s=31-tn(s),r[s]=a}function yh(r,s){var a=r.pendingLanes&~s;r.pendingLanes=s,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=s,r.mutableReadLanes&=s,r.entangledLanes&=s,s=r.entanglements;var d=r.eventTimes;for(r=r.expirationTimes;0<a;){var f=31-tn(a),g=1<<f;s[f]=0,d[f]=-1,r[f]=-1,a&=~g}}function ga(r,s){var a=r.entangledLanes|=s;for(r=r.entanglements;a;){var d=31-tn(a),f=1<<d;f&s|r[d]&s&&(r[d]|=s),a&=~f}}var je=0;function Qn(r){return r&=-r,1<r?4<r?(r&268435455)!==0?16:536870912:4:1}var ya,Xs,va,_a,wa,Yn=!1,Zs=[],Jn=null,Xn=null,bt=null,ss=new Map,Ir=new Map,nn=[],Jl="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function hi(r,s){switch(r){case"focusin":case"focusout":Jn=null;break;case"dragenter":case"dragleave":Xn=null;break;case"mouseover":case"mouseout":bt=null;break;case"pointerover":case"pointerout":ss.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ir.delete(s.pointerId)}}function Cn(r,s,a,d,f,g){return r===null||r.nativeEvent!==g?(r={blockedOn:s,domEventName:a,eventSystemFlags:d,nativeEvent:g,targetContainers:[f]},s!==null&&(s=Da(s),s!==null&&Xs(s)),r):(r.eventSystemFlags|=d,s=r.targetContainers,f!==null&&s.indexOf(f)===-1&&s.push(f),r)}function Xl(r,s,a,d,f){switch(s){case"focusin":return Jn=Cn(Jn,r,s,a,d,f),!0;case"dragenter":return Xn=Cn(Xn,r,s,a,d,f),!0;case"mouseover":return bt=Cn(bt,r,s,a,d,f),!0;case"pointerover":var g=f.pointerId;return ss.set(g,Cn(ss.get(g)||null,r,s,a,d,f)),!0;case"gotpointercapture":return g=f.pointerId,Ir.set(g,Cn(Ir.get(g)||null,r,s,a,d,f)),!0}return!1}function eo(r){var s=cs(r.target);if(s!==null){var a=An(s);if(a!==null){if(s=a.tag,s===13){if(s=ca(a),s!==null){r.blockedOn=s,wa(r.priority,function(){va(a)});return}}else if(s===3&&a.stateNode.current.memoizedState.isDehydrated){r.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}r.blockedOn=null}function He(r){if(r.blockedOn!==null)return!1;for(var s=r.targetContainers;0<s.length;){var a=to(r.domEventName,r.eventSystemFlags,s[0],r.nativeEvent);if(a===null){a=r.nativeEvent;var d=new a.constructor(a.type,a);si=d,a.target.dispatchEvent(d),si=null}else return s=Da(a),s!==null&&Xs(s),r.blockedOn=a,!1;s.shift()}return!0}function Zl(r,s,a){He(r)&&a.delete(s)}function vh(){Yn=!1,Jn!==null&&He(Jn)&&(Jn=null),Xn!==null&&He(Xn)&&(Xn=null),bt!==null&&He(bt)&&(bt=null),ss.forEach(Zl),Ir.forEach(Zl)}function di(r,s){r.blockedOn===s&&(r.blockedOn=null,Yn||(Yn=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,vh)))}function fi(r){function s(f){return di(f,r)}if(0<Zs.length){di(Zs[0],r);for(var a=1;a<Zs.length;a++){var d=Zs[a];d.blockedOn===r&&(d.blockedOn=null)}}for(Jn!==null&&di(Jn,r),Xn!==null&&di(Xn,r),bt!==null&&di(bt,r),ss.forEach(s),Ir.forEach(s),a=0;a<nn.length;a++)d=nn[a],d.blockedOn===r&&(d.blockedOn=null);for(;0<nn.length&&(a=nn[0],a.blockedOn===null);)eo(a),a.blockedOn===null&&nn.shift()}var Sr=ne.ReactCurrentBatchConfig,br=!0;function Zn(r,s,a,d){var f=je,g=Sr.transition;Sr.transition=null;try{je=1,xa(r,s,a,d)}finally{je=f,Sr.transition=g}}function ec(r,s,a,d){var f=je,g=Sr.transition;Sr.transition=null;try{je=4,xa(r,s,a,d)}finally{je=f,Sr.transition=g}}function xa(r,s,a,d){if(br){var f=to(r,s,a,d);if(f===null)Ch(r,s,d,er,a),hi(r,d);else if(Xl(f,r,s,a,d))d.stopPropagation();else if(hi(r,d),s&4&&-1<Jl.indexOf(r)){for(;f!==null;){var g=Da(f);if(g!==null&&ya(g),g=to(r,s,a,d),g===null&&Ch(r,s,d,er,a),g===f)break;f=g}f!==null&&d.stopPropagation()}else Ch(r,s,d,null,a)}}var er=null;function to(r,s,a,d){if(er=null,r=Gs(d),r=cs(r),r!==null)if(s=An(r),s===null)r=null;else if(a=s.tag,a===13){if(r=ca(s),r!==null)return r;r=null}else if(a===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;r=null}else s!==r&&(r=null);return er=r,null}function no(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(gh()){case Ys:return 1;case ha:return 4;case Zi:case da:return 16;case Js:return 536870912;default:return 16}default:return 16}}var rn=null,ro=null,kr=null;function tc(){if(kr)return kr;var r,s=ro,a=s.length,d,f="value"in rn?rn.value:rn.textContent,g=f.length;for(r=0;r<a&&s[r]===f[r];r++);var x=a-r;for(d=1;d<=x&&s[a-d]===f[g-d];d++);return kr=f.slice(r,1<d?1-d:void 0)}function os(r){var s=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&s===13&&(r=13)):r=s,r===10&&(r=13),32<=r||r===13?r:0}function tr(){return!0}function Ea(){return!1}function Dt(r){function s(a,d,f,g,x){this._reactName=a,this._targetInst=f,this.type=d,this.nativeEvent=g,this.target=x,this.currentTarget=null;for(var S in r)r.hasOwnProperty(S)&&(a=r[S],this[S]=a?a(g):g[S]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?tr:Ea,this.isPropagationStopped=Ea,this}return le(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=tr)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=tr)},persist:function(){},isPersistent:tr}),s}var nr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},as=Dt(nr),pi=le({},nr,{view:0,detail:0}),io=Dt(pi),so,oo,sn,ls=le({},pi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ee,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==sn&&(sn&&r.type==="mousemove"?(so=r.screenX-sn.screenX,oo=r.screenY-sn.screenY):oo=so=0,sn=r),so)},movementY:function(r){return"movementY"in r?r.movementY:oo}}),Ta=Dt(ls),nc=le({},ls,{dataTransfer:0}),rc=Dt(nc),ao=le({},pi,{relatedTarget:0}),kt=Dt(ao),ic=le({},nr,{animationName:0,elapsedTime:0,pseudoElement:0}),sc=Dt(ic),mi=le({},nr,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),c=Dt(mi),y=le({},nr,{data:0}),_=Dt(y),T={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},U={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},W={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function te(r){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(r):(r=W[r])?!!s[r]:!1}function Ee(){return te}var lt=le({},pi,{key:function(r){if(r.key){var s=T[r.key]||r.key;if(s!=="Unidentified")return s}return r.type==="keypress"?(r=os(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?U[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ee,charCode:function(r){return r.type==="keypress"?os(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?os(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),ze=Dt(lt),ft=le({},ls,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),on=Dt(ft),Ar=le({},pi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ee}),rr=Dt(Ar),ir=le({},nr,{propertyName:0,elapsedTime:0,pseudoElement:0}),lo=Dt(ir),Ia=le({},ls,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),Mx=Dt(Ia),Fx=[9,13,27,32],_h=p&&"CompositionEvent"in window,Sa=null;p&&"documentMode"in document&&(Sa=document.documentMode);var Ux=p&&"TextEvent"in window&&!Sa,am=p&&(!_h||Sa&&8<Sa&&11>=Sa),lm=" ",cm=!1;function um(r,s){switch(r){case"keyup":return Fx.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hm(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var co=!1;function Bx(r,s){switch(r){case"compositionend":return hm(s);case"keypress":return s.which!==32?null:(cm=!0,lm);case"textInput":return r=s.data,r===lm&&cm?null:r;default:return null}}function zx(r,s){if(co)return r==="compositionend"||!_h&&um(r,s)?(r=tc(),kr=ro=rn=null,co=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return am&&s.locale!=="ko"?null:s.data;default:return null}}var $x={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dm(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s==="input"?!!$x[r.type]:s==="textarea"}function fm(r,s,a,d){oi(d),s=uc(s,"onChange"),0<s.length&&(a=new as("onChange","change",null,a,d),r.push({event:a,listeners:s}))}var ba=null,ka=null;function Wx(r){Nm(r,0)}function oc(r){var s=mo(r);if(ta(s))return r}function qx(r,s){if(r==="change")return s}var pm=!1;if(p){var wh;if(p){var xh="oninput"in document;if(!xh){var mm=document.createElement("div");mm.setAttribute("oninput","return;"),xh=typeof mm.oninput=="function"}wh=xh}else wh=!1;pm=wh&&(!document.documentMode||9<document.documentMode)}function gm(){ba&&(ba.detachEvent("onpropertychange",ym),ka=ba=null)}function ym(r){if(r.propertyName==="value"&&oc(ka)){var s=[];fm(s,ka,r,Gs(r)),$l(Wx,s)}}function Hx(r,s,a){r==="focusin"?(gm(),ba=s,ka=a,ba.attachEvent("onpropertychange",ym)):r==="focusout"&&gm()}function Gx(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return oc(ka)}function Kx(r,s){if(r==="click")return oc(s)}function Qx(r,s){if(r==="input"||r==="change")return oc(s)}function Yx(r,s){return r===s&&(r!==0||1/r===1/s)||r!==r&&s!==s}var Rn=typeof Object.is=="function"?Object.is:Yx;function Aa(r,s){if(Rn(r,s))return!0;if(typeof r!="object"||r===null||typeof s!="object"||s===null)return!1;var a=Object.keys(r),d=Object.keys(s);if(a.length!==d.length)return!1;for(d=0;d<a.length;d++){var f=a[d];if(!m.call(s,f)||!Rn(r[f],s[f]))return!1}return!0}function vm(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function _m(r,s){var a=vm(r);r=0;for(var d;a;){if(a.nodeType===3){if(d=r+a.textContent.length,r<=s&&d>=s)return{node:a,offset:s-r};r=d}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=vm(a)}}function wm(r,s){return r&&s?r===s?!0:r&&r.nodeType===3?!1:s&&s.nodeType===3?wm(r,s.parentNode):"contains"in r?r.contains(s):r.compareDocumentPosition?!!(r.compareDocumentPosition(s)&16):!1:!1}function xm(){for(var r=window,s=ei();s instanceof r.HTMLIFrameElement;){try{var a=typeof s.contentWindow.location.href=="string"}catch{a=!1}if(a)r=s.contentWindow;else break;s=ei(r.document)}return s}function Eh(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s&&(s==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||s==="textarea"||r.contentEditable==="true")}function Jx(r){var s=xm(),a=r.focusedElem,d=r.selectionRange;if(s!==a&&a&&a.ownerDocument&&wm(a.ownerDocument.documentElement,a)){if(d!==null&&Eh(a)){if(s=d.start,r=d.end,r===void 0&&(r=s),"selectionStart"in a)a.selectionStart=s,a.selectionEnd=Math.min(r,a.value.length);else if(r=(s=a.ownerDocument||document)&&s.defaultView||window,r.getSelection){r=r.getSelection();var f=a.textContent.length,g=Math.min(d.start,f);d=d.end===void 0?g:Math.min(d.end,f),!r.extend&&g>d&&(f=d,d=g,g=f),f=_m(a,g);var x=_m(a,d);f&&x&&(r.rangeCount!==1||r.anchorNode!==f.node||r.anchorOffset!==f.offset||r.focusNode!==x.node||r.focusOffset!==x.offset)&&(s=s.createRange(),s.setStart(f.node,f.offset),r.removeAllRanges(),g>d?(r.addRange(s),r.extend(x.node,x.offset)):(s.setEnd(x.node,x.offset),r.addRange(s)))}}for(s=[],r=a;r=r.parentNode;)r.nodeType===1&&s.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<s.length;a++)r=s[a],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var Xx=p&&"documentMode"in document&&11>=document.documentMode,uo=null,Th=null,Ca=null,Ih=!1;function Em(r,s,a){var d=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ih||uo==null||uo!==ei(d)||(d=uo,"selectionStart"in d&&Eh(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),Ca&&Aa(Ca,d)||(Ca=d,d=uc(Th,"onSelect"),0<d.length&&(s=new as("onSelect","select",null,s,a),r.push({event:s,listeners:d}),s.target=uo)))}function ac(r,s){var a={};return a[r.toLowerCase()]=s.toLowerCase(),a["Webkit"+r]="webkit"+s,a["Moz"+r]="moz"+s,a}var ho={animationend:ac("Animation","AnimationEnd"),animationiteration:ac("Animation","AnimationIteration"),animationstart:ac("Animation","AnimationStart"),transitionend:ac("Transition","TransitionEnd")},Sh={},Tm={};p&&(Tm=document.createElement("div").style,"AnimationEvent"in window||(delete ho.animationend.animation,delete ho.animationiteration.animation,delete ho.animationstart.animation),"TransitionEvent"in window||delete ho.transitionend.transition);function lc(r){if(Sh[r])return Sh[r];if(!ho[r])return r;var s=ho[r],a;for(a in s)if(s.hasOwnProperty(a)&&a in Tm)return Sh[r]=s[a];return r}var Im=lc("animationend"),Sm=lc("animationiteration"),bm=lc("animationstart"),km=lc("transitionend"),Am=new Map,Cm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function gi(r,s){Am.set(r,s),l(s,[r])}for(var bh=0;bh<Cm.length;bh++){var kh=Cm[bh],Zx=kh.toLowerCase(),eE=kh[0].toUpperCase()+kh.slice(1);gi(Zx,"on"+eE)}gi(Im,"onAnimationEnd"),gi(Sm,"onAnimationIteration"),gi(bm,"onAnimationStart"),gi("dblclick","onDoubleClick"),gi("focusin","onFocus"),gi("focusout","onBlur"),gi(km,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ra="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),tE=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ra));function Rm(r,s,a){var d=r.type||"unknown-event";r.currentTarget=a,la(d,s,void 0,r),r.currentTarget=null}function Nm(r,s){s=(s&4)!==0;for(var a=0;a<r.length;a++){var d=r[a],f=d.event;d=d.listeners;e:{var g=void 0;if(s)for(var x=d.length-1;0<=x;x--){var S=d[x],C=S.instance,$=S.currentTarget;if(S=S.listener,C!==g&&f.isPropagationStopped())break e;Rm(f,S,$),g=C}else for(x=0;x<d.length;x++){if(S=d[x],C=S.instance,$=S.currentTarget,S=S.listener,C!==g&&f.isPropagationStopped())break e;Rm(f,S,$),g=C}}}if(Ks)throw r=hn,Ks=!1,hn=null,r}function Ye(r,s){var a=s[Lh];a===void 0&&(a=s[Lh]=new Set);var d=r+"__bubble";a.has(d)||(Pm(s,r,2,!1),a.add(d))}function Ah(r,s,a){var d=0;s&&(d|=4),Pm(a,r,d,s)}var cc="_reactListening"+Math.random().toString(36).slice(2);function Na(r){if(!r[cc]){r[cc]=!0,i.forEach(function(a){a!=="selectionchange"&&(tE.has(a)||Ah(a,!1,r),Ah(a,!0,r))});var s=r.nodeType===9?r:r.ownerDocument;s===null||s[cc]||(s[cc]=!0,Ah("selectionchange",!1,s))}}function Pm(r,s,a,d){switch(no(s)){case 1:var f=Zn;break;case 4:f=ec;break;default:f=xa}a=f.bind(null,s,a,r),f=void 0,!li||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(f=!0),d?f!==void 0?r.addEventListener(s,a,{capture:!0,passive:f}):r.addEventListener(s,a,!0):f!==void 0?r.addEventListener(s,a,{passive:f}):r.addEventListener(s,a,!1)}function Ch(r,s,a,d,f){var g=d;if((s&1)===0&&(s&2)===0&&d!==null)e:for(;;){if(d===null)return;var x=d.tag;if(x===3||x===4){var S=d.stateNode.containerInfo;if(S===f||S.nodeType===8&&S.parentNode===f)break;if(x===4)for(x=d.return;x!==null;){var C=x.tag;if((C===3||C===4)&&(C=x.stateNode.containerInfo,C===f||C.nodeType===8&&C.parentNode===f))return;x=x.return}for(;S!==null;){if(x=cs(S),x===null)return;if(C=x.tag,C===5||C===6){d=g=x;continue e}S=S.parentNode}}d=d.return}$l(function(){var $=g,J=Gs(a),X=[];e:{var Y=Am.get(r);if(Y!==void 0){var oe=as,ue=r;switch(r){case"keypress":if(os(a)===0)break e;case"keydown":case"keyup":oe=ze;break;case"focusin":ue="focus",oe=kt;break;case"focusout":ue="blur",oe=kt;break;case"beforeblur":case"afterblur":oe=kt;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":oe=Ta;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":oe=rc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":oe=rr;break;case Im:case Sm:case bm:oe=sc;break;case km:oe=lo;break;case"scroll":oe=io;break;case"wheel":oe=Mx;break;case"copy":case"cut":case"paste":oe=c;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":oe=on}var he=(s&4)!==0,ct=!he&&r==="scroll",F=he?Y!==null?Y+"Capture":null:Y;he=[];for(var j=$,z;j!==null;){z=j;var ee=z.stateNode;if(z.tag===5&&ee!==null&&(z=ee,F!==null&&(ee=Yi(j,F),ee!=null&&he.push(Pa(j,ee,z)))),ct)break;j=j.return}0<he.length&&(Y=new oe(Y,ue,null,a,J),X.push({event:Y,listeners:he}))}}if((s&7)===0){e:{if(Y=r==="mouseover"||r==="pointerover",oe=r==="mouseout"||r==="pointerout",Y&&a!==si&&(ue=a.relatedTarget||a.fromElement)&&(cs(ue)||ue[Cr]))break e;if((oe||Y)&&(Y=J.window===J?J:(Y=J.ownerDocument)?Y.defaultView||Y.parentWindow:window,oe?(ue=a.relatedTarget||a.toElement,oe=$,ue=ue?cs(ue):null,ue!==null&&(ct=An(ue),ue!==ct||ue.tag!==5&&ue.tag!==6)&&(ue=null)):(oe=null,ue=$),oe!==ue)){if(he=Ta,ee="onMouseLeave",F="onMouseEnter",j="mouse",(r==="pointerout"||r==="pointerover")&&(he=on,ee="onPointerLeave",F="onPointerEnter",j="pointer"),ct=oe==null?Y:mo(oe),z=ue==null?Y:mo(ue),Y=new he(ee,j+"leave",oe,a,J),Y.target=ct,Y.relatedTarget=z,ee=null,cs(J)===$&&(he=new he(F,j+"enter",ue,a,J),he.target=z,he.relatedTarget=ct,ee=he),ct=ee,oe&&ue)t:{for(he=oe,F=ue,j=0,z=he;z;z=fo(z))j++;for(z=0,ee=F;ee;ee=fo(ee))z++;for(;0<j-z;)he=fo(he),j--;for(;0<z-j;)F=fo(F),z--;for(;j--;){if(he===F||F!==null&&he===F.alternate)break t;he=fo(he),F=fo(F)}he=null}else he=null;oe!==null&&jm(X,Y,oe,he,!1),ue!==null&&ct!==null&&jm(X,ct,ue,he,!0)}}e:{if(Y=$?mo($):window,oe=Y.nodeName&&Y.nodeName.toLowerCase(),oe==="select"||oe==="input"&&Y.type==="file")var de=qx;else if(dm(Y))if(pm)de=Qx;else{de=Gx;var ge=Hx}else(oe=Y.nodeName)&&oe.toLowerCase()==="input"&&(Y.type==="checkbox"||Y.type==="radio")&&(de=Kx);if(de&&(de=de(r,$))){fm(X,de,a,J);break e}ge&&ge(r,Y,$),r==="focusout"&&(ge=Y._wrapperState)&&ge.controlled&&Y.type==="number"&&dt(Y,"number",Y.value)}switch(ge=$?mo($):window,r){case"focusin":(dm(ge)||ge.contentEditable==="true")&&(uo=ge,Th=$,Ca=null);break;case"focusout":Ca=Th=uo=null;break;case"mousedown":Ih=!0;break;case"contextmenu":case"mouseup":case"dragend":Ih=!1,Em(X,a,J);break;case"selectionchange":if(Xx)break;case"keydown":case"keyup":Em(X,a,J)}var ye;if(_h)e:{switch(r){case"compositionstart":var we="onCompositionStart";break e;case"compositionend":we="onCompositionEnd";break e;case"compositionupdate":we="onCompositionUpdate";break e}we=void 0}else co?um(r,a)&&(we="onCompositionEnd"):r==="keydown"&&a.keyCode===229&&(we="onCompositionStart");we&&(am&&a.locale!=="ko"&&(co||we!=="onCompositionStart"?we==="onCompositionEnd"&&co&&(ye=tc()):(rn=J,ro="value"in rn?rn.value:rn.textContent,co=!0)),ge=uc($,we),0<ge.length&&(we=new _(we,r,null,a,J),X.push({event:we,listeners:ge}),ye?we.data=ye:(ye=hm(a),ye!==null&&(we.data=ye)))),(ye=Ux?Bx(r,a):zx(r,a))&&($=uc($,"onBeforeInput"),0<$.length&&(J=new _("onBeforeInput","beforeinput",null,a,J),X.push({event:J,listeners:$}),J.data=ye))}Nm(X,s)})}function Pa(r,s,a){return{instance:r,listener:s,currentTarget:a}}function uc(r,s){for(var a=s+"Capture",d=[];r!==null;){var f=r,g=f.stateNode;f.tag===5&&g!==null&&(f=g,g=Yi(r,a),g!=null&&d.unshift(Pa(r,g,f)),g=Yi(r,s),g!=null&&d.push(Pa(r,g,f))),r=r.return}return d}function fo(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function jm(r,s,a,d,f){for(var g=s._reactName,x=[];a!==null&&a!==d;){var S=a,C=S.alternate,$=S.stateNode;if(C!==null&&C===d)break;S.tag===5&&$!==null&&(S=$,f?(C=Yi(a,g),C!=null&&x.unshift(Pa(a,C,S))):f||(C=Yi(a,g),C!=null&&x.push(Pa(a,C,S)))),a=a.return}x.length!==0&&r.push({event:s,listeners:x})}var nE=/\r\n?/g,rE=/\u0000|\uFFFD/g;function Dm(r){return(typeof r=="string"?r:""+r).replace(nE,`
`).replace(rE,"")}function hc(r,s,a){if(s=Dm(s),Dm(r)!==s&&a)throw Error(t(425))}function dc(){}var Rh=null,Nh=null;function Ph(r,s){return r==="textarea"||r==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var jh=typeof setTimeout=="function"?setTimeout:void 0,iE=typeof clearTimeout=="function"?clearTimeout:void 0,Lm=typeof Promise=="function"?Promise:void 0,sE=typeof queueMicrotask=="function"?queueMicrotask:typeof Lm<"u"?function(r){return Lm.resolve(null).then(r).catch(oE)}:jh;function oE(r){setTimeout(function(){throw r})}function Dh(r,s){var a=s,d=0;do{var f=a.nextSibling;if(r.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(d===0){r.removeChild(f),fi(s);return}d--}else a!=="$"&&a!=="$?"&&a!=="$!"||d++;a=f}while(a);fi(s)}function yi(r){for(;r!=null;r=r.nextSibling){var s=r.nodeType;if(s===1||s===3)break;if(s===8){if(s=r.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return r}function Om(r){r=r.previousSibling;for(var s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="$"||a==="$!"||a==="$?"){if(s===0)return r;s--}else a==="/$"&&s++}r=r.previousSibling}return null}var po=Math.random().toString(36).slice(2),sr="__reactFiber$"+po,ja="__reactProps$"+po,Cr="__reactContainer$"+po,Lh="__reactEvents$"+po,aE="__reactListeners$"+po,lE="__reactHandles$"+po;function cs(r){var s=r[sr];if(s)return s;for(var a=r.parentNode;a;){if(s=a[Cr]||a[sr]){if(a=s.alternate,s.child!==null||a!==null&&a.child!==null)for(r=Om(r);r!==null;){if(a=r[sr])return a;r=Om(r)}return s}r=a,a=r.parentNode}return null}function Da(r){return r=r[sr]||r[Cr],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function mo(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(t(33))}function fc(r){return r[ja]||null}var Oh=[],go=-1;function vi(r){return{current:r}}function Je(r){0>go||(r.current=Oh[go],Oh[go]=null,go--)}function Ge(r,s){go++,Oh[go]=r.current,r.current=s}var _i={},Lt=vi(_i),Gt=vi(!1),us=_i;function yo(r,s){var a=r.type.contextTypes;if(!a)return _i;var d=r.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===s)return d.__reactInternalMemoizedMaskedChildContext;var f={},g;for(g in a)f[g]=s[g];return d&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=s,r.__reactInternalMemoizedMaskedChildContext=f),f}function Kt(r){return r=r.childContextTypes,r!=null}function pc(){Je(Gt),Je(Lt)}function Vm(r,s,a){if(Lt.current!==_i)throw Error(t(168));Ge(Lt,s),Ge(Gt,a)}function Mm(r,s,a){var d=r.stateNode;if(s=s.childContextTypes,typeof d.getChildContext!="function")return a;d=d.getChildContext();for(var f in d)if(!(f in s))throw Error(t(108,Fe(r)||"Unknown",f));return le({},a,d)}function mc(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||_i,us=Lt.current,Ge(Lt,r),Ge(Gt,Gt.current),!0}function Fm(r,s,a){var d=r.stateNode;if(!d)throw Error(t(169));a?(r=Mm(r,s,us),d.__reactInternalMemoizedMergedChildContext=r,Je(Gt),Je(Lt),Ge(Lt,r)):Je(Gt),Ge(Gt,a)}var Rr=null,gc=!1,Vh=!1;function Um(r){Rr===null?Rr=[r]:Rr.push(r)}function cE(r){gc=!0,Um(r)}function wi(){if(!Vh&&Rr!==null){Vh=!0;var r=0,s=je;try{var a=Rr;for(je=1;r<a.length;r++){var d=a[r];do d=d(!0);while(d!==null)}Rr=null,gc=!1}catch(f){throw Rr!==null&&(Rr=Rr.slice(r+1)),ua(Ys,wi),f}finally{je=s,Vh=!1}}return null}var vo=[],_o=0,yc=null,vc=0,fn=[],pn=0,hs=null,Nr=1,Pr="";function ds(r,s){vo[_o++]=vc,vo[_o++]=yc,yc=r,vc=s}function Bm(r,s,a){fn[pn++]=Nr,fn[pn++]=Pr,fn[pn++]=hs,hs=r;var d=Nr;r=Pr;var f=32-tn(d)-1;d&=~(1<<f),a+=1;var g=32-tn(s)+f;if(30<g){var x=f-f%5;g=(d&(1<<x)-1).toString(32),d>>=x,f-=x,Nr=1<<32-tn(s)+f|a<<f|d,Pr=g+r}else Nr=1<<g|a<<f|d,Pr=r}function Mh(r){r.return!==null&&(ds(r,1),Bm(r,1,0))}function Fh(r){for(;r===yc;)yc=vo[--_o],vo[_o]=null,vc=vo[--_o],vo[_o]=null;for(;r===hs;)hs=fn[--pn],fn[pn]=null,Pr=fn[--pn],fn[pn]=null,Nr=fn[--pn],fn[pn]=null}var an=null,ln=null,et=!1,Nn=null;function zm(r,s){var a=vn(5,null,null,0);a.elementType="DELETED",a.stateNode=s,a.return=r,s=r.deletions,s===null?(r.deletions=[a],r.flags|=16):s.push(a)}function $m(r,s){switch(r.tag){case 5:var a=r.type;return s=s.nodeType!==1||a.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(r.stateNode=s,an=r,ln=yi(s.firstChild),!0):!1;case 6:return s=r.pendingProps===""||s.nodeType!==3?null:s,s!==null?(r.stateNode=s,an=r,ln=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(a=hs!==null?{id:Nr,overflow:Pr}:null,r.memoizedState={dehydrated:s,treeContext:a,retryLane:1073741824},a=vn(18,null,null,0),a.stateNode=s,a.return=r,r.child=a,an=r,ln=null,!0):!1;default:return!1}}function Uh(r){return(r.mode&1)!==0&&(r.flags&128)===0}function Bh(r){if(et){var s=ln;if(s){var a=s;if(!$m(r,s)){if(Uh(r))throw Error(t(418));s=yi(a.nextSibling);var d=an;s&&$m(r,s)?zm(d,a):(r.flags=r.flags&-4097|2,et=!1,an=r)}}else{if(Uh(r))throw Error(t(418));r.flags=r.flags&-4097|2,et=!1,an=r}}}function Wm(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;an=r}function _c(r){if(r!==an)return!1;if(!et)return Wm(r),et=!0,!1;var s;if((s=r.tag!==3)&&!(s=r.tag!==5)&&(s=r.type,s=s!=="head"&&s!=="body"&&!Ph(r.type,r.memoizedProps)),s&&(s=ln)){if(Uh(r))throw qm(),Error(t(418));for(;s;)zm(r,s),s=yi(s.nextSibling)}if(Wm(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(t(317));e:{for(r=r.nextSibling,s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="/$"){if(s===0){ln=yi(r.nextSibling);break e}s--}else a!=="$"&&a!=="$!"&&a!=="$?"||s++}r=r.nextSibling}ln=null}}else ln=an?yi(r.stateNode.nextSibling):null;return!0}function qm(){for(var r=ln;r;)r=yi(r.nextSibling)}function wo(){ln=an=null,et=!1}function zh(r){Nn===null?Nn=[r]:Nn.push(r)}var uE=ne.ReactCurrentBatchConfig;function La(r,s,a){if(r=a.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var d=a.stateNode}if(!d)throw Error(t(147,r));var f=d,g=""+r;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===g?s.ref:(s=function(x){var S=f.refs;x===null?delete S[g]:S[g]=x},s._stringRef=g,s)}if(typeof r!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,r))}return r}function wc(r,s){throw r=Object.prototype.toString.call(s),Error(t(31,r==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":r))}function Hm(r){var s=r._init;return s(r._payload)}function Gm(r){function s(F,j){if(r){var z=F.deletions;z===null?(F.deletions=[j],F.flags|=16):z.push(j)}}function a(F,j){if(!r)return null;for(;j!==null;)s(F,j),j=j.sibling;return null}function d(F,j){for(F=new Map;j!==null;)j.key!==null?F.set(j.key,j):F.set(j.index,j),j=j.sibling;return F}function f(F,j){return F=Ai(F,j),F.index=0,F.sibling=null,F}function g(F,j,z){return F.index=z,r?(z=F.alternate,z!==null?(z=z.index,z<j?(F.flags|=2,j):z):(F.flags|=2,j)):(F.flags|=1048576,j)}function x(F){return r&&F.alternate===null&&(F.flags|=2),F}function S(F,j,z,ee){return j===null||j.tag!==6?(j=jd(z,F.mode,ee),j.return=F,j):(j=f(j,z),j.return=F,j)}function C(F,j,z,ee){var de=z.type;return de===R?J(F,j,z.props.children,ee,z.key):j!==null&&(j.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===jt&&Hm(de)===j.type)?(ee=f(j,z.props),ee.ref=La(F,j,z),ee.return=F,ee):(ee=Wc(z.type,z.key,z.props,null,F.mode,ee),ee.ref=La(F,j,z),ee.return=F,ee)}function $(F,j,z,ee){return j===null||j.tag!==4||j.stateNode.containerInfo!==z.containerInfo||j.stateNode.implementation!==z.implementation?(j=Dd(z,F.mode,ee),j.return=F,j):(j=f(j,z.children||[]),j.return=F,j)}function J(F,j,z,ee,de){return j===null||j.tag!==7?(j=ws(z,F.mode,ee,de),j.return=F,j):(j=f(j,z),j.return=F,j)}function X(F,j,z){if(typeof j=="string"&&j!==""||typeof j=="number")return j=jd(""+j,F.mode,z),j.return=F,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case fe:return z=Wc(j.type,j.key,j.props,null,F.mode,z),z.ref=La(F,null,j),z.return=F,z;case Ie:return j=Dd(j,F.mode,z),j.return=F,j;case jt:var ee=j._init;return X(F,ee(j._payload),z)}if(at(j)||me(j))return j=ws(j,F.mode,z,null),j.return=F,j;wc(F,j)}return null}function Y(F,j,z,ee){var de=j!==null?j.key:null;if(typeof z=="string"&&z!==""||typeof z=="number")return de!==null?null:S(F,j,""+z,ee);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case fe:return z.key===de?C(F,j,z,ee):null;case Ie:return z.key===de?$(F,j,z,ee):null;case jt:return de=z._init,Y(F,j,de(z._payload),ee)}if(at(z)||me(z))return de!==null?null:J(F,j,z,ee,null);wc(F,z)}return null}function oe(F,j,z,ee,de){if(typeof ee=="string"&&ee!==""||typeof ee=="number")return F=F.get(z)||null,S(j,F,""+ee,de);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case fe:return F=F.get(ee.key===null?z:ee.key)||null,C(j,F,ee,de);case Ie:return F=F.get(ee.key===null?z:ee.key)||null,$(j,F,ee,de);case jt:var ge=ee._init;return oe(F,j,z,ge(ee._payload),de)}if(at(ee)||me(ee))return F=F.get(z)||null,J(j,F,ee,de,null);wc(j,ee)}return null}function ue(F,j,z,ee){for(var de=null,ge=null,ye=j,we=j=0,It=null;ye!==null&&we<z.length;we++){ye.index>we?(It=ye,ye=null):It=ye.sibling;var Ve=Y(F,ye,z[we],ee);if(Ve===null){ye===null&&(ye=It);break}r&&ye&&Ve.alternate===null&&s(F,ye),j=g(Ve,j,we),ge===null?de=Ve:ge.sibling=Ve,ge=Ve,ye=It}if(we===z.length)return a(F,ye),et&&ds(F,we),de;if(ye===null){for(;we<z.length;we++)ye=X(F,z[we],ee),ye!==null&&(j=g(ye,j,we),ge===null?de=ye:ge.sibling=ye,ge=ye);return et&&ds(F,we),de}for(ye=d(F,ye);we<z.length;we++)It=oe(ye,F,we,z[we],ee),It!==null&&(r&&It.alternate!==null&&ye.delete(It.key===null?we:It.key),j=g(It,j,we),ge===null?de=It:ge.sibling=It,ge=It);return r&&ye.forEach(function(Ci){return s(F,Ci)}),et&&ds(F,we),de}function he(F,j,z,ee){var de=me(z);if(typeof de!="function")throw Error(t(150));if(z=de.call(z),z==null)throw Error(t(151));for(var ge=de=null,ye=j,we=j=0,It=null,Ve=z.next();ye!==null&&!Ve.done;we++,Ve=z.next()){ye.index>we?(It=ye,ye=null):It=ye.sibling;var Ci=Y(F,ye,Ve.value,ee);if(Ci===null){ye===null&&(ye=It);break}r&&ye&&Ci.alternate===null&&s(F,ye),j=g(Ci,j,we),ge===null?de=Ci:ge.sibling=Ci,ge=Ci,ye=It}if(Ve.done)return a(F,ye),et&&ds(F,we),de;if(ye===null){for(;!Ve.done;we++,Ve=z.next())Ve=X(F,Ve.value,ee),Ve!==null&&(j=g(Ve,j,we),ge===null?de=Ve:ge.sibling=Ve,ge=Ve);return et&&ds(F,we),de}for(ye=d(F,ye);!Ve.done;we++,Ve=z.next())Ve=oe(ye,F,we,Ve.value,ee),Ve!==null&&(r&&Ve.alternate!==null&&ye.delete(Ve.key===null?we:Ve.key),j=g(Ve,j,we),ge===null?de=Ve:ge.sibling=Ve,ge=Ve);return r&&ye.forEach(function($E){return s(F,$E)}),et&&ds(F,we),de}function ct(F,j,z,ee){if(typeof z=="object"&&z!==null&&z.type===R&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case fe:e:{for(var de=z.key,ge=j;ge!==null;){if(ge.key===de){if(de=z.type,de===R){if(ge.tag===7){a(F,ge.sibling),j=f(ge,z.props.children),j.return=F,F=j;break e}}else if(ge.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===jt&&Hm(de)===ge.type){a(F,ge.sibling),j=f(ge,z.props),j.ref=La(F,ge,z),j.return=F,F=j;break e}a(F,ge);break}else s(F,ge);ge=ge.sibling}z.type===R?(j=ws(z.props.children,F.mode,ee,z.key),j.return=F,F=j):(ee=Wc(z.type,z.key,z.props,null,F.mode,ee),ee.ref=La(F,j,z),ee.return=F,F=ee)}return x(F);case Ie:e:{for(ge=z.key;j!==null;){if(j.key===ge)if(j.tag===4&&j.stateNode.containerInfo===z.containerInfo&&j.stateNode.implementation===z.implementation){a(F,j.sibling),j=f(j,z.children||[]),j.return=F,F=j;break e}else{a(F,j);break}else s(F,j);j=j.sibling}j=Dd(z,F.mode,ee),j.return=F,F=j}return x(F);case jt:return ge=z._init,ct(F,j,ge(z._payload),ee)}if(at(z))return ue(F,j,z,ee);if(me(z))return he(F,j,z,ee);wc(F,z)}return typeof z=="string"&&z!==""||typeof z=="number"?(z=""+z,j!==null&&j.tag===6?(a(F,j.sibling),j=f(j,z),j.return=F,F=j):(a(F,j),j=jd(z,F.mode,ee),j.return=F,F=j),x(F)):a(F,j)}return ct}var xo=Gm(!0),Km=Gm(!1),xc=vi(null),Ec=null,Eo=null,$h=null;function Wh(){$h=Eo=Ec=null}function qh(r){var s=xc.current;Je(xc),r._currentValue=s}function Hh(r,s,a){for(;r!==null;){var d=r.alternate;if((r.childLanes&s)!==s?(r.childLanes|=s,d!==null&&(d.childLanes|=s)):d!==null&&(d.childLanes&s)!==s&&(d.childLanes|=s),r===a)break;r=r.return}}function To(r,s){Ec=r,$h=Eo=null,r=r.dependencies,r!==null&&r.firstContext!==null&&((r.lanes&s)!==0&&(Qt=!0),r.firstContext=null)}function mn(r){var s=r._currentValue;if($h!==r)if(r={context:r,memoizedValue:s,next:null},Eo===null){if(Ec===null)throw Error(t(308));Eo=r,Ec.dependencies={lanes:0,firstContext:r}}else Eo=Eo.next=r;return s}var fs=null;function Gh(r){fs===null?fs=[r]:fs.push(r)}function Qm(r,s,a,d){var f=s.interleaved;return f===null?(a.next=a,Gh(s)):(a.next=f.next,f.next=a),s.interleaved=a,jr(r,d)}function jr(r,s){r.lanes|=s;var a=r.alternate;for(a!==null&&(a.lanes|=s),a=r,r=r.return;r!==null;)r.childLanes|=s,a=r.alternate,a!==null&&(a.childLanes|=s),a=r,r=r.return;return a.tag===3?a.stateNode:null}var xi=!1;function Kh(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ym(r,s){r=r.updateQueue,s.updateQueue===r&&(s.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function Dr(r,s){return{eventTime:r,lane:s,tag:0,payload:null,callback:null,next:null}}function Ei(r,s,a){var d=r.updateQueue;if(d===null)return null;if(d=d.shared,(Oe&2)!==0){var f=d.pending;return f===null?s.next=s:(s.next=f.next,f.next=s),d.pending=s,jr(r,a)}return f=d.interleaved,f===null?(s.next=s,Gh(d)):(s.next=f.next,f.next=s),d.interleaved=s,jr(r,a)}function Tc(r,s,a){if(s=s.updateQueue,s!==null&&(s=s.shared,(a&4194240)!==0)){var d=s.lanes;d&=r.pendingLanes,a|=d,s.lanes=a,ga(r,a)}}function Jm(r,s){var a=r.updateQueue,d=r.alternate;if(d!==null&&(d=d.updateQueue,a===d)){var f=null,g=null;if(a=a.firstBaseUpdate,a!==null){do{var x={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};g===null?f=g=x:g=g.next=x,a=a.next}while(a!==null);g===null?f=g=s:g=g.next=s}else f=g=s;a={baseState:d.baseState,firstBaseUpdate:f,lastBaseUpdate:g,shared:d.shared,effects:d.effects},r.updateQueue=a;return}r=a.lastBaseUpdate,r===null?a.firstBaseUpdate=s:r.next=s,a.lastBaseUpdate=s}function Ic(r,s,a,d){var f=r.updateQueue;xi=!1;var g=f.firstBaseUpdate,x=f.lastBaseUpdate,S=f.shared.pending;if(S!==null){f.shared.pending=null;var C=S,$=C.next;C.next=null,x===null?g=$:x.next=$,x=C;var J=r.alternate;J!==null&&(J=J.updateQueue,S=J.lastBaseUpdate,S!==x&&(S===null?J.firstBaseUpdate=$:S.next=$,J.lastBaseUpdate=C))}if(g!==null){var X=f.baseState;x=0,J=$=C=null,S=g;do{var Y=S.lane,oe=S.eventTime;if((d&Y)===Y){J!==null&&(J=J.next={eventTime:oe,lane:0,tag:S.tag,payload:S.payload,callback:S.callback,next:null});e:{var ue=r,he=S;switch(Y=s,oe=a,he.tag){case 1:if(ue=he.payload,typeof ue=="function"){X=ue.call(oe,X,Y);break e}X=ue;break e;case 3:ue.flags=ue.flags&-65537|128;case 0:if(ue=he.payload,Y=typeof ue=="function"?ue.call(oe,X,Y):ue,Y==null)break e;X=le({},X,Y);break e;case 2:xi=!0}}S.callback!==null&&S.lane!==0&&(r.flags|=64,Y=f.effects,Y===null?f.effects=[S]:Y.push(S))}else oe={eventTime:oe,lane:Y,tag:S.tag,payload:S.payload,callback:S.callback,next:null},J===null?($=J=oe,C=X):J=J.next=oe,x|=Y;if(S=S.next,S===null){if(S=f.shared.pending,S===null)break;Y=S,S=Y.next,Y.next=null,f.lastBaseUpdate=Y,f.shared.pending=null}}while(!0);if(J===null&&(C=X),f.baseState=C,f.firstBaseUpdate=$,f.lastBaseUpdate=J,s=f.shared.interleaved,s!==null){f=s;do x|=f.lane,f=f.next;while(f!==s)}else g===null&&(f.shared.lanes=0);gs|=x,r.lanes=x,r.memoizedState=X}}function Xm(r,s,a){if(r=s.effects,s.effects=null,r!==null)for(s=0;s<r.length;s++){var d=r[s],f=d.callback;if(f!==null){if(d.callback=null,d=a,typeof f!="function")throw Error(t(191,f));f.call(d)}}}var Oa={},or=vi(Oa),Va=vi(Oa),Ma=vi(Oa);function ps(r){if(r===Oa)throw Error(t(174));return r}function Qh(r,s){switch(Ge(Ma,s),Ge(Va,r),Ge(or,Oa),r=s.nodeType,r){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:Ws(null,"");break;default:r=r===8?s.parentNode:s,s=r.namespaceURI||null,r=r.tagName,s=Ws(s,r)}Je(or),Ge(or,s)}function Io(){Je(or),Je(Va),Je(Ma)}function Zm(r){ps(Ma.current);var s=ps(or.current),a=Ws(s,r.type);s!==a&&(Ge(Va,r),Ge(or,a))}function Yh(r){Va.current===r&&(Je(or),Je(Va))}var tt=vi(0);function Sc(r){for(var s=r;s!==null;){if(s.tag===13){var a=s.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Jh=[];function Xh(){for(var r=0;r<Jh.length;r++)Jh[r]._workInProgressVersionPrimary=null;Jh.length=0}var bc=ne.ReactCurrentDispatcher,Zh=ne.ReactCurrentBatchConfig,ms=0,nt=null,_t=null,Et=null,kc=!1,Fa=!1,Ua=0,hE=0;function Ot(){throw Error(t(321))}function ed(r,s){if(s===null)return!1;for(var a=0;a<s.length&&a<r.length;a++)if(!Rn(r[a],s[a]))return!1;return!0}function td(r,s,a,d,f,g){if(ms=g,nt=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,bc.current=r===null||r.memoizedState===null?mE:gE,r=a(d,f),Fa){g=0;do{if(Fa=!1,Ua=0,25<=g)throw Error(t(301));g+=1,Et=_t=null,s.updateQueue=null,bc.current=yE,r=a(d,f)}while(Fa)}if(bc.current=Rc,s=_t!==null&&_t.next!==null,ms=0,Et=_t=nt=null,kc=!1,s)throw Error(t(300));return r}function nd(){var r=Ua!==0;return Ua=0,r}function ar(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Et===null?nt.memoizedState=Et=r:Et=Et.next=r,Et}function gn(){if(_t===null){var r=nt.alternate;r=r!==null?r.memoizedState:null}else r=_t.next;var s=Et===null?nt.memoizedState:Et.next;if(s!==null)Et=s,_t=r;else{if(r===null)throw Error(t(310));_t=r,r={memoizedState:_t.memoizedState,baseState:_t.baseState,baseQueue:_t.baseQueue,queue:_t.queue,next:null},Et===null?nt.memoizedState=Et=r:Et=Et.next=r}return Et}function Ba(r,s){return typeof s=="function"?s(r):s}function rd(r){var s=gn(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var d=_t,f=d.baseQueue,g=a.pending;if(g!==null){if(f!==null){var x=f.next;f.next=g.next,g.next=x}d.baseQueue=f=g,a.pending=null}if(f!==null){g=f.next,d=d.baseState;var S=x=null,C=null,$=g;do{var J=$.lane;if((ms&J)===J)C!==null&&(C=C.next={lane:0,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),d=$.hasEagerState?$.eagerState:r(d,$.action);else{var X={lane:J,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null};C===null?(S=C=X,x=d):C=C.next=X,nt.lanes|=J,gs|=J}$=$.next}while($!==null&&$!==g);C===null?x=d:C.next=S,Rn(d,s.memoizedState)||(Qt=!0),s.memoizedState=d,s.baseState=x,s.baseQueue=C,a.lastRenderedState=d}if(r=a.interleaved,r!==null){f=r;do g=f.lane,nt.lanes|=g,gs|=g,f=f.next;while(f!==r)}else f===null&&(a.lanes=0);return[s.memoizedState,a.dispatch]}function id(r){var s=gn(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var d=a.dispatch,f=a.pending,g=s.memoizedState;if(f!==null){a.pending=null;var x=f=f.next;do g=r(g,x.action),x=x.next;while(x!==f);Rn(g,s.memoizedState)||(Qt=!0),s.memoizedState=g,s.baseQueue===null&&(s.baseState=g),a.lastRenderedState=g}return[g,d]}function eg(){}function tg(r,s){var a=nt,d=gn(),f=s(),g=!Rn(d.memoizedState,f);if(g&&(d.memoizedState=f,Qt=!0),d=d.queue,sd(ig.bind(null,a,d,r),[r]),d.getSnapshot!==s||g||Et!==null&&Et.memoizedState.tag&1){if(a.flags|=2048,za(9,rg.bind(null,a,d,f,s),void 0,null),Tt===null)throw Error(t(349));(ms&30)!==0||ng(a,s,f)}return f}function ng(r,s,a){r.flags|=16384,r={getSnapshot:s,value:a},s=nt.updateQueue,s===null?(s={lastEffect:null,stores:null},nt.updateQueue=s,s.stores=[r]):(a=s.stores,a===null?s.stores=[r]:a.push(r))}function rg(r,s,a,d){s.value=a,s.getSnapshot=d,sg(s)&&og(r)}function ig(r,s,a){return a(function(){sg(s)&&og(r)})}function sg(r){var s=r.getSnapshot;r=r.value;try{var a=s();return!Rn(r,a)}catch{return!0}}function og(r){var s=jr(r,1);s!==null&&Ln(s,r,1,-1)}function ag(r){var s=ar();return typeof r=="function"&&(r=r()),s.memoizedState=s.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ba,lastRenderedState:r},s.queue=r,r=r.dispatch=pE.bind(null,nt,r),[s.memoizedState,r]}function za(r,s,a,d){return r={tag:r,create:s,destroy:a,deps:d,next:null},s=nt.updateQueue,s===null?(s={lastEffect:null,stores:null},nt.updateQueue=s,s.lastEffect=r.next=r):(a=s.lastEffect,a===null?s.lastEffect=r.next=r:(d=a.next,a.next=r,r.next=d,s.lastEffect=r)),r}function lg(){return gn().memoizedState}function Ac(r,s,a,d){var f=ar();nt.flags|=r,f.memoizedState=za(1|s,a,void 0,d===void 0?null:d)}function Cc(r,s,a,d){var f=gn();d=d===void 0?null:d;var g=void 0;if(_t!==null){var x=_t.memoizedState;if(g=x.destroy,d!==null&&ed(d,x.deps)){f.memoizedState=za(s,a,g,d);return}}nt.flags|=r,f.memoizedState=za(1|s,a,g,d)}function cg(r,s){return Ac(8390656,8,r,s)}function sd(r,s){return Cc(2048,8,r,s)}function ug(r,s){return Cc(4,2,r,s)}function hg(r,s){return Cc(4,4,r,s)}function dg(r,s){if(typeof s=="function")return r=r(),s(r),function(){s(null)};if(s!=null)return r=r(),s.current=r,function(){s.current=null}}function fg(r,s,a){return a=a!=null?a.concat([r]):null,Cc(4,4,dg.bind(null,s,r),a)}function od(){}function pg(r,s){var a=gn();s=s===void 0?null:s;var d=a.memoizedState;return d!==null&&s!==null&&ed(s,d[1])?d[0]:(a.memoizedState=[r,s],r)}function mg(r,s){var a=gn();s=s===void 0?null:s;var d=a.memoizedState;return d!==null&&s!==null&&ed(s,d[1])?d[0]:(r=r(),a.memoizedState=[r,s],r)}function gg(r,s,a){return(ms&21)===0?(r.baseState&&(r.baseState=!1,Qt=!0),r.memoizedState=a):(Rn(a,s)||(a=pa(),nt.lanes|=a,gs|=a,r.baseState=!0),s)}function dE(r,s){var a=je;je=a!==0&&4>a?a:4,r(!0);var d=Zh.transition;Zh.transition={};try{r(!1),s()}finally{je=a,Zh.transition=d}}function yg(){return gn().memoizedState}function fE(r,s,a){var d=bi(r);if(a={lane:d,action:a,hasEagerState:!1,eagerState:null,next:null},vg(r))_g(s,a);else if(a=Qm(r,s,a,d),a!==null){var f=Ht();Ln(a,r,d,f),wg(a,s,d)}}function pE(r,s,a){var d=bi(r),f={lane:d,action:a,hasEagerState:!1,eagerState:null,next:null};if(vg(r))_g(s,f);else{var g=r.alternate;if(r.lanes===0&&(g===null||g.lanes===0)&&(g=s.lastRenderedReducer,g!==null))try{var x=s.lastRenderedState,S=g(x,a);if(f.hasEagerState=!0,f.eagerState=S,Rn(S,x)){var C=s.interleaved;C===null?(f.next=f,Gh(s)):(f.next=C.next,C.next=f),s.interleaved=f;return}}catch{}finally{}a=Qm(r,s,f,d),a!==null&&(f=Ht(),Ln(a,r,d,f),wg(a,s,d))}}function vg(r){var s=r.alternate;return r===nt||s!==null&&s===nt}function _g(r,s){Fa=kc=!0;var a=r.pending;a===null?s.next=s:(s.next=a.next,a.next=s),r.pending=s}function wg(r,s,a){if((a&4194240)!==0){var d=s.lanes;d&=r.pendingLanes,a|=d,s.lanes=a,ga(r,a)}}var Rc={readContext:mn,useCallback:Ot,useContext:Ot,useEffect:Ot,useImperativeHandle:Ot,useInsertionEffect:Ot,useLayoutEffect:Ot,useMemo:Ot,useReducer:Ot,useRef:Ot,useState:Ot,useDebugValue:Ot,useDeferredValue:Ot,useTransition:Ot,useMutableSource:Ot,useSyncExternalStore:Ot,useId:Ot,unstable_isNewReconciler:!1},mE={readContext:mn,useCallback:function(r,s){return ar().memoizedState=[r,s===void 0?null:s],r},useContext:mn,useEffect:cg,useImperativeHandle:function(r,s,a){return a=a!=null?a.concat([r]):null,Ac(4194308,4,dg.bind(null,s,r),a)},useLayoutEffect:function(r,s){return Ac(4194308,4,r,s)},useInsertionEffect:function(r,s){return Ac(4,2,r,s)},useMemo:function(r,s){var a=ar();return s=s===void 0?null:s,r=r(),a.memoizedState=[r,s],r},useReducer:function(r,s,a){var d=ar();return s=a!==void 0?a(s):s,d.memoizedState=d.baseState=s,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:s},d.queue=r,r=r.dispatch=fE.bind(null,nt,r),[d.memoizedState,r]},useRef:function(r){var s=ar();return r={current:r},s.memoizedState=r},useState:ag,useDebugValue:od,useDeferredValue:function(r){return ar().memoizedState=r},useTransition:function(){var r=ag(!1),s=r[0];return r=dE.bind(null,r[1]),ar().memoizedState=r,[s,r]},useMutableSource:function(){},useSyncExternalStore:function(r,s,a){var d=nt,f=ar();if(et){if(a===void 0)throw Error(t(407));a=a()}else{if(a=s(),Tt===null)throw Error(t(349));(ms&30)!==0||ng(d,s,a)}f.memoizedState=a;var g={value:a,getSnapshot:s};return f.queue=g,cg(ig.bind(null,d,g,r),[r]),d.flags|=2048,za(9,rg.bind(null,d,g,a,s),void 0,null),a},useId:function(){var r=ar(),s=Tt.identifierPrefix;if(et){var a=Pr,d=Nr;a=(d&~(1<<32-tn(d)-1)).toString(32)+a,s=":"+s+"R"+a,a=Ua++,0<a&&(s+="H"+a.toString(32)),s+=":"}else a=hE++,s=":"+s+"r"+a.toString(32)+":";return r.memoizedState=s},unstable_isNewReconciler:!1},gE={readContext:mn,useCallback:pg,useContext:mn,useEffect:sd,useImperativeHandle:fg,useInsertionEffect:ug,useLayoutEffect:hg,useMemo:mg,useReducer:rd,useRef:lg,useState:function(){return rd(Ba)},useDebugValue:od,useDeferredValue:function(r){var s=gn();return gg(s,_t.memoizedState,r)},useTransition:function(){var r=rd(Ba)[0],s=gn().memoizedState;return[r,s]},useMutableSource:eg,useSyncExternalStore:tg,useId:yg,unstable_isNewReconciler:!1},yE={readContext:mn,useCallback:pg,useContext:mn,useEffect:sd,useImperativeHandle:fg,useInsertionEffect:ug,useLayoutEffect:hg,useMemo:mg,useReducer:id,useRef:lg,useState:function(){return id(Ba)},useDebugValue:od,useDeferredValue:function(r){var s=gn();return _t===null?s.memoizedState=r:gg(s,_t.memoizedState,r)},useTransition:function(){var r=id(Ba)[0],s=gn().memoizedState;return[r,s]},useMutableSource:eg,useSyncExternalStore:tg,useId:yg,unstable_isNewReconciler:!1};function Pn(r,s){if(r&&r.defaultProps){s=le({},s),r=r.defaultProps;for(var a in r)s[a]===void 0&&(s[a]=r[a]);return s}return s}function ad(r,s,a,d){s=r.memoizedState,a=a(d,s),a=a==null?s:le({},s,a),r.memoizedState=a,r.lanes===0&&(r.updateQueue.baseState=a)}var Nc={isMounted:function(r){return(r=r._reactInternals)?An(r)===r:!1},enqueueSetState:function(r,s,a){r=r._reactInternals;var d=Ht(),f=bi(r),g=Dr(d,f);g.payload=s,a!=null&&(g.callback=a),s=Ei(r,g,f),s!==null&&(Ln(s,r,f,d),Tc(s,r,f))},enqueueReplaceState:function(r,s,a){r=r._reactInternals;var d=Ht(),f=bi(r),g=Dr(d,f);g.tag=1,g.payload=s,a!=null&&(g.callback=a),s=Ei(r,g,f),s!==null&&(Ln(s,r,f,d),Tc(s,r,f))},enqueueForceUpdate:function(r,s){r=r._reactInternals;var a=Ht(),d=bi(r),f=Dr(a,d);f.tag=2,s!=null&&(f.callback=s),s=Ei(r,f,d),s!==null&&(Ln(s,r,d,a),Tc(s,r,d))}};function xg(r,s,a,d,f,g,x){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(d,g,x):s.prototype&&s.prototype.isPureReactComponent?!Aa(a,d)||!Aa(f,g):!0}function Eg(r,s,a){var d=!1,f=_i,g=s.contextType;return typeof g=="object"&&g!==null?g=mn(g):(f=Kt(s)?us:Lt.current,d=s.contextTypes,g=(d=d!=null)?yo(r,f):_i),s=new s(a,g),r.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Nc,r.stateNode=s,s._reactInternals=r,d&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=f,r.__reactInternalMemoizedMaskedChildContext=g),s}function Tg(r,s,a,d){r=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(a,d),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(a,d),s.state!==r&&Nc.enqueueReplaceState(s,s.state,null)}function ld(r,s,a,d){var f=r.stateNode;f.props=a,f.state=r.memoizedState,f.refs={},Kh(r);var g=s.contextType;typeof g=="object"&&g!==null?f.context=mn(g):(g=Kt(s)?us:Lt.current,f.context=yo(r,g)),f.state=r.memoizedState,g=s.getDerivedStateFromProps,typeof g=="function"&&(ad(r,s,g,a),f.state=r.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(s=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),s!==f.state&&Nc.enqueueReplaceState(f,f.state,null),Ic(r,a,f,d),f.state=r.memoizedState),typeof f.componentDidMount=="function"&&(r.flags|=4194308)}function So(r,s){try{var a="",d=s;do a+=Ae(d),d=d.return;while(d);var f=a}catch(g){f=`
Error generating stack: `+g.message+`
`+g.stack}return{value:r,source:s,stack:f,digest:null}}function cd(r,s,a){return{value:r,source:null,stack:a??null,digest:s??null}}function ud(r,s){try{console.error(s.value)}catch(a){setTimeout(function(){throw a})}}var vE=typeof WeakMap=="function"?WeakMap:Map;function Ig(r,s,a){a=Dr(-1,a),a.tag=3,a.payload={element:null};var d=s.value;return a.callback=function(){Mc||(Mc=!0,Sd=d),ud(r,s)},a}function Sg(r,s,a){a=Dr(-1,a),a.tag=3;var d=r.type.getDerivedStateFromError;if(typeof d=="function"){var f=s.value;a.payload=function(){return d(f)},a.callback=function(){ud(r,s)}}var g=r.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(a.callback=function(){ud(r,s),typeof d!="function"&&(Ii===null?Ii=new Set([this]):Ii.add(this));var x=s.stack;this.componentDidCatch(s.value,{componentStack:x!==null?x:""})}),a}function bg(r,s,a){var d=r.pingCache;if(d===null){d=r.pingCache=new vE;var f=new Set;d.set(s,f)}else f=d.get(s),f===void 0&&(f=new Set,d.set(s,f));f.has(a)||(f.add(a),r=PE.bind(null,r,s,a),s.then(r,r))}function kg(r){do{var s;if((s=r.tag===13)&&(s=r.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return r;r=r.return}while(r!==null);return null}function Ag(r,s,a,d,f){return(r.mode&1)===0?(r===s?r.flags|=65536:(r.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(s=Dr(-1,1),s.tag=2,Ei(a,s,1))),a.lanes|=1),r):(r.flags|=65536,r.lanes=f,r)}var _E=ne.ReactCurrentOwner,Qt=!1;function qt(r,s,a,d){s.child=r===null?Km(s,null,a,d):xo(s,r.child,a,d)}function Cg(r,s,a,d,f){a=a.render;var g=s.ref;return To(s,f),d=td(r,s,a,d,g,f),a=nd(),r!==null&&!Qt?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~f,Lr(r,s,f)):(et&&a&&Mh(s),s.flags|=1,qt(r,s,d,f),s.child)}function Rg(r,s,a,d,f){if(r===null){var g=a.type;return typeof g=="function"&&!Pd(g)&&g.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(s.tag=15,s.type=g,Ng(r,s,g,d,f)):(r=Wc(a.type,null,d,s,s.mode,f),r.ref=s.ref,r.return=s,s.child=r)}if(g=r.child,(r.lanes&f)===0){var x=g.memoizedProps;if(a=a.compare,a=a!==null?a:Aa,a(x,d)&&r.ref===s.ref)return Lr(r,s,f)}return s.flags|=1,r=Ai(g,d),r.ref=s.ref,r.return=s,s.child=r}function Ng(r,s,a,d,f){if(r!==null){var g=r.memoizedProps;if(Aa(g,d)&&r.ref===s.ref)if(Qt=!1,s.pendingProps=d=g,(r.lanes&f)!==0)(r.flags&131072)!==0&&(Qt=!0);else return s.lanes=r.lanes,Lr(r,s,f)}return hd(r,s,a,d,f)}function Pg(r,s,a){var d=s.pendingProps,f=d.children,g=r!==null?r.memoizedState:null;if(d.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ge(ko,cn),cn|=a;else{if((a&1073741824)===0)return r=g!==null?g.baseLanes|a:a,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:r,cachePool:null,transitions:null},s.updateQueue=null,Ge(ko,cn),cn|=r,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},d=g!==null?g.baseLanes:a,Ge(ko,cn),cn|=d}else g!==null?(d=g.baseLanes|a,s.memoizedState=null):d=a,Ge(ko,cn),cn|=d;return qt(r,s,f,a),s.child}function jg(r,s){var a=s.ref;(r===null&&a!==null||r!==null&&r.ref!==a)&&(s.flags|=512,s.flags|=2097152)}function hd(r,s,a,d,f){var g=Kt(a)?us:Lt.current;return g=yo(s,g),To(s,f),a=td(r,s,a,d,g,f),d=nd(),r!==null&&!Qt?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~f,Lr(r,s,f)):(et&&d&&Mh(s),s.flags|=1,qt(r,s,a,f),s.child)}function Dg(r,s,a,d,f){if(Kt(a)){var g=!0;mc(s)}else g=!1;if(To(s,f),s.stateNode===null)jc(r,s),Eg(s,a,d),ld(s,a,d,f),d=!0;else if(r===null){var x=s.stateNode,S=s.memoizedProps;x.props=S;var C=x.context,$=a.contextType;typeof $=="object"&&$!==null?$=mn($):($=Kt(a)?us:Lt.current,$=yo(s,$));var J=a.getDerivedStateFromProps,X=typeof J=="function"||typeof x.getSnapshotBeforeUpdate=="function";X||typeof x.UNSAFE_componentWillReceiveProps!="function"&&typeof x.componentWillReceiveProps!="function"||(S!==d||C!==$)&&Tg(s,x,d,$),xi=!1;var Y=s.memoizedState;x.state=Y,Ic(s,d,x,f),C=s.memoizedState,S!==d||Y!==C||Gt.current||xi?(typeof J=="function"&&(ad(s,a,J,d),C=s.memoizedState),(S=xi||xg(s,a,S,d,Y,C,$))?(X||typeof x.UNSAFE_componentWillMount!="function"&&typeof x.componentWillMount!="function"||(typeof x.componentWillMount=="function"&&x.componentWillMount(),typeof x.UNSAFE_componentWillMount=="function"&&x.UNSAFE_componentWillMount()),typeof x.componentDidMount=="function"&&(s.flags|=4194308)):(typeof x.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=d,s.memoizedState=C),x.props=d,x.state=C,x.context=$,d=S):(typeof x.componentDidMount=="function"&&(s.flags|=4194308),d=!1)}else{x=s.stateNode,Ym(r,s),S=s.memoizedProps,$=s.type===s.elementType?S:Pn(s.type,S),x.props=$,X=s.pendingProps,Y=x.context,C=a.contextType,typeof C=="object"&&C!==null?C=mn(C):(C=Kt(a)?us:Lt.current,C=yo(s,C));var oe=a.getDerivedStateFromProps;(J=typeof oe=="function"||typeof x.getSnapshotBeforeUpdate=="function")||typeof x.UNSAFE_componentWillReceiveProps!="function"&&typeof x.componentWillReceiveProps!="function"||(S!==X||Y!==C)&&Tg(s,x,d,C),xi=!1,Y=s.memoizedState,x.state=Y,Ic(s,d,x,f);var ue=s.memoizedState;S!==X||Y!==ue||Gt.current||xi?(typeof oe=="function"&&(ad(s,a,oe,d),ue=s.memoizedState),($=xi||xg(s,a,$,d,Y,ue,C)||!1)?(J||typeof x.UNSAFE_componentWillUpdate!="function"&&typeof x.componentWillUpdate!="function"||(typeof x.componentWillUpdate=="function"&&x.componentWillUpdate(d,ue,C),typeof x.UNSAFE_componentWillUpdate=="function"&&x.UNSAFE_componentWillUpdate(d,ue,C)),typeof x.componentDidUpdate=="function"&&(s.flags|=4),typeof x.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof x.componentDidUpdate!="function"||S===r.memoizedProps&&Y===r.memoizedState||(s.flags|=4),typeof x.getSnapshotBeforeUpdate!="function"||S===r.memoizedProps&&Y===r.memoizedState||(s.flags|=1024),s.memoizedProps=d,s.memoizedState=ue),x.props=d,x.state=ue,x.context=C,d=$):(typeof x.componentDidUpdate!="function"||S===r.memoizedProps&&Y===r.memoizedState||(s.flags|=4),typeof x.getSnapshotBeforeUpdate!="function"||S===r.memoizedProps&&Y===r.memoizedState||(s.flags|=1024),d=!1)}return dd(r,s,a,d,g,f)}function dd(r,s,a,d,f,g){jg(r,s);var x=(s.flags&128)!==0;if(!d&&!x)return f&&Fm(s,a,!1),Lr(r,s,g);d=s.stateNode,_E.current=s;var S=x&&typeof a.getDerivedStateFromError!="function"?null:d.render();return s.flags|=1,r!==null&&x?(s.child=xo(s,r.child,null,g),s.child=xo(s,null,S,g)):qt(r,s,S,g),s.memoizedState=d.state,f&&Fm(s,a,!0),s.child}function Lg(r){var s=r.stateNode;s.pendingContext?Vm(r,s.pendingContext,s.pendingContext!==s.context):s.context&&Vm(r,s.context,!1),Qh(r,s.containerInfo)}function Og(r,s,a,d,f){return wo(),zh(f),s.flags|=256,qt(r,s,a,d),s.child}var fd={dehydrated:null,treeContext:null,retryLane:0};function pd(r){return{baseLanes:r,cachePool:null,transitions:null}}function Vg(r,s,a){var d=s.pendingProps,f=tt.current,g=!1,x=(s.flags&128)!==0,S;if((S=x)||(S=r!==null&&r.memoizedState===null?!1:(f&2)!==0),S?(g=!0,s.flags&=-129):(r===null||r.memoizedState!==null)&&(f|=1),Ge(tt,f&1),r===null)return Bh(s),r=s.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?((s.mode&1)===0?s.lanes=1:r.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(x=d.children,r=d.fallback,g?(d=s.mode,g=s.child,x={mode:"hidden",children:x},(d&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=x):g=qc(x,d,0,null),r=ws(r,d,a,null),g.return=s,r.return=s,g.sibling=r,s.child=g,s.child.memoizedState=pd(a),s.memoizedState=fd,r):md(s,x));if(f=r.memoizedState,f!==null&&(S=f.dehydrated,S!==null))return wE(r,s,x,d,S,f,a);if(g){g=d.fallback,x=s.mode,f=r.child,S=f.sibling;var C={mode:"hidden",children:d.children};return(x&1)===0&&s.child!==f?(d=s.child,d.childLanes=0,d.pendingProps=C,s.deletions=null):(d=Ai(f,C),d.subtreeFlags=f.subtreeFlags&14680064),S!==null?g=Ai(S,g):(g=ws(g,x,a,null),g.flags|=2),g.return=s,d.return=s,d.sibling=g,s.child=d,d=g,g=s.child,x=r.child.memoizedState,x=x===null?pd(a):{baseLanes:x.baseLanes|a,cachePool:null,transitions:x.transitions},g.memoizedState=x,g.childLanes=r.childLanes&~a,s.memoizedState=fd,d}return g=r.child,r=g.sibling,d=Ai(g,{mode:"visible",children:d.children}),(s.mode&1)===0&&(d.lanes=a),d.return=s,d.sibling=null,r!==null&&(a=s.deletions,a===null?(s.deletions=[r],s.flags|=16):a.push(r)),s.child=d,s.memoizedState=null,d}function md(r,s){return s=qc({mode:"visible",children:s},r.mode,0,null),s.return=r,r.child=s}function Pc(r,s,a,d){return d!==null&&zh(d),xo(s,r.child,null,a),r=md(s,s.pendingProps.children),r.flags|=2,s.memoizedState=null,r}function wE(r,s,a,d,f,g,x){if(a)return s.flags&256?(s.flags&=-257,d=cd(Error(t(422))),Pc(r,s,x,d)):s.memoizedState!==null?(s.child=r.child,s.flags|=128,null):(g=d.fallback,f=s.mode,d=qc({mode:"visible",children:d.children},f,0,null),g=ws(g,f,x,null),g.flags|=2,d.return=s,g.return=s,d.sibling=g,s.child=d,(s.mode&1)!==0&&xo(s,r.child,null,x),s.child.memoizedState=pd(x),s.memoizedState=fd,g);if((s.mode&1)===0)return Pc(r,s,x,null);if(f.data==="$!"){if(d=f.nextSibling&&f.nextSibling.dataset,d)var S=d.dgst;return d=S,g=Error(t(419)),d=cd(g,d,void 0),Pc(r,s,x,d)}if(S=(x&r.childLanes)!==0,Qt||S){if(d=Tt,d!==null){switch(x&-x){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(d.suspendedLanes|x))!==0?0:f,f!==0&&f!==g.retryLane&&(g.retryLane=f,jr(r,f),Ln(d,r,f,-1))}return Nd(),d=cd(Error(t(421))),Pc(r,s,x,d)}return f.data==="$?"?(s.flags|=128,s.child=r.child,s=jE.bind(null,r),f._reactRetry=s,null):(r=g.treeContext,ln=yi(f.nextSibling),an=s,et=!0,Nn=null,r!==null&&(fn[pn++]=Nr,fn[pn++]=Pr,fn[pn++]=hs,Nr=r.id,Pr=r.overflow,hs=s),s=md(s,d.children),s.flags|=4096,s)}function Mg(r,s,a){r.lanes|=s;var d=r.alternate;d!==null&&(d.lanes|=s),Hh(r.return,s,a)}function gd(r,s,a,d,f){var g=r.memoizedState;g===null?r.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:d,tail:a,tailMode:f}:(g.isBackwards=s,g.rendering=null,g.renderingStartTime=0,g.last=d,g.tail=a,g.tailMode=f)}function Fg(r,s,a){var d=s.pendingProps,f=d.revealOrder,g=d.tail;if(qt(r,s,d.children,a),d=tt.current,(d&2)!==0)d=d&1|2,s.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=s.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&Mg(r,a,s);else if(r.tag===19)Mg(r,a,s);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break e;for(;r.sibling===null;){if(r.return===null||r.return===s)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}d&=1}if(Ge(tt,d),(s.mode&1)===0)s.memoizedState=null;else switch(f){case"forwards":for(a=s.child,f=null;a!==null;)r=a.alternate,r!==null&&Sc(r)===null&&(f=a),a=a.sibling;a=f,a===null?(f=s.child,s.child=null):(f=a.sibling,a.sibling=null),gd(s,!1,f,a,g);break;case"backwards":for(a=null,f=s.child,s.child=null;f!==null;){if(r=f.alternate,r!==null&&Sc(r)===null){s.child=f;break}r=f.sibling,f.sibling=a,a=f,f=r}gd(s,!0,a,null,g);break;case"together":gd(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function jc(r,s){(s.mode&1)===0&&r!==null&&(r.alternate=null,s.alternate=null,s.flags|=2)}function Lr(r,s,a){if(r!==null&&(s.dependencies=r.dependencies),gs|=s.lanes,(a&s.childLanes)===0)return null;if(r!==null&&s.child!==r.child)throw Error(t(153));if(s.child!==null){for(r=s.child,a=Ai(r,r.pendingProps),s.child=a,a.return=s;r.sibling!==null;)r=r.sibling,a=a.sibling=Ai(r,r.pendingProps),a.return=s;a.sibling=null}return s.child}function xE(r,s,a){switch(s.tag){case 3:Lg(s),wo();break;case 5:Zm(s);break;case 1:Kt(s.type)&&mc(s);break;case 4:Qh(s,s.stateNode.containerInfo);break;case 10:var d=s.type._context,f=s.memoizedProps.value;Ge(xc,d._currentValue),d._currentValue=f;break;case 13:if(d=s.memoizedState,d!==null)return d.dehydrated!==null?(Ge(tt,tt.current&1),s.flags|=128,null):(a&s.child.childLanes)!==0?Vg(r,s,a):(Ge(tt,tt.current&1),r=Lr(r,s,a),r!==null?r.sibling:null);Ge(tt,tt.current&1);break;case 19:if(d=(a&s.childLanes)!==0,(r.flags&128)!==0){if(d)return Fg(r,s,a);s.flags|=128}if(f=s.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Ge(tt,tt.current),d)break;return null;case 22:case 23:return s.lanes=0,Pg(r,s,a)}return Lr(r,s,a)}var Ug,yd,Bg,zg;Ug=function(r,s){for(var a=s.child;a!==null;){if(a.tag===5||a.tag===6)r.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},yd=function(){},Bg=function(r,s,a,d){var f=r.memoizedProps;if(f!==d){r=s.stateNode,ps(or.current);var g=null;switch(a){case"input":f=zs(r,f),d=zs(r,d),g=[];break;case"select":f=le({},f,{value:void 0}),d=le({},d,{value:void 0}),g=[];break;case"textarea":f=ra(r,f),d=ra(r,d),g=[];break;default:typeof f.onClick!="function"&&typeof d.onClick=="function"&&(r.onclick=dc)}kn(a,d);var x;a=null;for($ in f)if(!d.hasOwnProperty($)&&f.hasOwnProperty($)&&f[$]!=null)if($==="style"){var S=f[$];for(x in S)S.hasOwnProperty(x)&&(a||(a={}),a[x]="")}else $!=="dangerouslySetInnerHTML"&&$!=="children"&&$!=="suppressContentEditableWarning"&&$!=="suppressHydrationWarning"&&$!=="autoFocus"&&(o.hasOwnProperty($)?g||(g=[]):(g=g||[]).push($,null));for($ in d){var C=d[$];if(S=f!=null?f[$]:void 0,d.hasOwnProperty($)&&C!==S&&(C!=null||S!=null))if($==="style")if(S){for(x in S)!S.hasOwnProperty(x)||C&&C.hasOwnProperty(x)||(a||(a={}),a[x]="");for(x in C)C.hasOwnProperty(x)&&S[x]!==C[x]&&(a||(a={}),a[x]=C[x])}else a||(g||(g=[]),g.push($,a)),a=C;else $==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,S=S?S.__html:void 0,C!=null&&S!==C&&(g=g||[]).push($,C)):$==="children"?typeof C!="string"&&typeof C!="number"||(g=g||[]).push($,""+C):$!=="suppressContentEditableWarning"&&$!=="suppressHydrationWarning"&&(o.hasOwnProperty($)?(C!=null&&$==="onScroll"&&Ye("scroll",r),g||S===C||(g=[])):(g=g||[]).push($,C))}a&&(g=g||[]).push("style",a);var $=g;(s.updateQueue=$)&&(s.flags|=4)}},zg=function(r,s,a,d){a!==d&&(s.flags|=4)};function $a(r,s){if(!et)switch(r.tailMode){case"hidden":s=r.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?r.tail=null:a.sibling=null;break;case"collapsed":a=r.tail;for(var d=null;a!==null;)a.alternate!==null&&(d=a),a=a.sibling;d===null?s||r.tail===null?r.tail=null:r.tail.sibling=null:d.sibling=null}}function Vt(r){var s=r.alternate!==null&&r.alternate.child===r.child,a=0,d=0;if(s)for(var f=r.child;f!==null;)a|=f.lanes|f.childLanes,d|=f.subtreeFlags&14680064,d|=f.flags&14680064,f.return=r,f=f.sibling;else for(f=r.child;f!==null;)a|=f.lanes|f.childLanes,d|=f.subtreeFlags,d|=f.flags,f.return=r,f=f.sibling;return r.subtreeFlags|=d,r.childLanes=a,s}function EE(r,s,a){var d=s.pendingProps;switch(Fh(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Vt(s),null;case 1:return Kt(s.type)&&pc(),Vt(s),null;case 3:return d=s.stateNode,Io(),Je(Gt),Je(Lt),Xh(),d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null),(r===null||r.child===null)&&(_c(s)?s.flags|=4:r===null||r.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,Nn!==null&&(Ad(Nn),Nn=null))),yd(r,s),Vt(s),null;case 5:Yh(s);var f=ps(Ma.current);if(a=s.type,r!==null&&s.stateNode!=null)Bg(r,s,a,d,f),r.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!d){if(s.stateNode===null)throw Error(t(166));return Vt(s),null}if(r=ps(or.current),_c(s)){d=s.stateNode,a=s.type;var g=s.memoizedProps;switch(d[sr]=s,d[ja]=g,r=(s.mode&1)!==0,a){case"dialog":Ye("cancel",d),Ye("close",d);break;case"iframe":case"object":case"embed":Ye("load",d);break;case"video":case"audio":for(f=0;f<Ra.length;f++)Ye(Ra[f],d);break;case"source":Ye("error",d);break;case"img":case"image":case"link":Ye("error",d),Ye("load",d);break;case"details":Ye("toggle",d);break;case"input":Vl(d,g),Ye("invalid",d);break;case"select":d._wrapperState={wasMultiple:!!g.multiple},Ye("invalid",d);break;case"textarea":ia(d,g),Ye("invalid",d)}kn(a,g),f=null;for(var x in g)if(g.hasOwnProperty(x)){var S=g[x];x==="children"?typeof S=="string"?d.textContent!==S&&(g.suppressHydrationWarning!==!0&&hc(d.textContent,S,r),f=["children",S]):typeof S=="number"&&d.textContent!==""+S&&(g.suppressHydrationWarning!==!0&&hc(d.textContent,S,r),f=["children",""+S]):o.hasOwnProperty(x)&&S!=null&&x==="onScroll"&&Ye("scroll",d)}switch(a){case"input":Bs(d),na(d,g,!0);break;case"textarea":Bs(d),ti(d);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(d.onclick=dc)}d=f,s.updateQueue=d,d!==null&&(s.flags|=4)}else{x=f.nodeType===9?f:f.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=sa(a)),r==="http://www.w3.org/1999/xhtml"?a==="script"?(r=x.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof d.is=="string"?r=x.createElement(a,{is:d.is}):(r=x.createElement(a),a==="select"&&(x=r,d.multiple?x.multiple=!0:d.size&&(x.size=d.size))):r=x.createElementNS(r,a),r[sr]=s,r[ja]=d,Ug(r,s,!1,!1),s.stateNode=r;e:{switch(x=Hs(a,d),a){case"dialog":Ye("cancel",r),Ye("close",r),f=d;break;case"iframe":case"object":case"embed":Ye("load",r),f=d;break;case"video":case"audio":for(f=0;f<Ra.length;f++)Ye(Ra[f],r);f=d;break;case"source":Ye("error",r),f=d;break;case"img":case"image":case"link":Ye("error",r),Ye("load",r),f=d;break;case"details":Ye("toggle",r),f=d;break;case"input":Vl(r,d),f=zs(r,d),Ye("invalid",r);break;case"option":f=d;break;case"select":r._wrapperState={wasMultiple:!!d.multiple},f=le({},d,{value:void 0}),Ye("invalid",r);break;case"textarea":ia(r,d),f=ra(r,d),Ye("invalid",r);break;default:f=d}kn(a,f),S=f;for(g in S)if(S.hasOwnProperty(g)){var C=S[g];g==="style"?qs(r,C):g==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,C!=null&&Fl(r,C)):g==="children"?typeof C=="string"?(a!=="textarea"||C!=="")&&Qi(r,C):typeof C=="number"&&Qi(r,""+C):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?C!=null&&g==="onScroll"&&Ye("scroll",r):C!=null&&ie(r,g,C,x))}switch(a){case"input":Bs(r),na(r,d,!1);break;case"textarea":Bs(r),ti(r);break;case"option":d.value!=null&&r.setAttribute("value",""+Le(d.value));break;case"select":r.multiple=!!d.multiple,g=d.value,g!=null?bn(r,!!d.multiple,g,!1):d.defaultValue!=null&&bn(r,!!d.multiple,d.defaultValue,!0);break;default:typeof f.onClick=="function"&&(r.onclick=dc)}switch(a){case"button":case"input":case"select":case"textarea":d=!!d.autoFocus;break e;case"img":d=!0;break e;default:d=!1}}d&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Vt(s),null;case 6:if(r&&s.stateNode!=null)zg(r,s,r.memoizedProps,d);else{if(typeof d!="string"&&s.stateNode===null)throw Error(t(166));if(a=ps(Ma.current),ps(or.current),_c(s)){if(d=s.stateNode,a=s.memoizedProps,d[sr]=s,(g=d.nodeValue!==a)&&(r=an,r!==null))switch(r.tag){case 3:hc(d.nodeValue,a,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&hc(d.nodeValue,a,(r.mode&1)!==0)}g&&(s.flags|=4)}else d=(a.nodeType===9?a:a.ownerDocument).createTextNode(d),d[sr]=s,s.stateNode=d}return Vt(s),null;case 13:if(Je(tt),d=s.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(et&&ln!==null&&(s.mode&1)!==0&&(s.flags&128)===0)qm(),wo(),s.flags|=98560,g=!1;else if(g=_c(s),d!==null&&d.dehydrated!==null){if(r===null){if(!g)throw Error(t(318));if(g=s.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[sr]=s}else wo(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Vt(s),g=!1}else Nn!==null&&(Ad(Nn),Nn=null),g=!0;if(!g)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=a,s):(d=d!==null,d!==(r!==null&&r.memoizedState!==null)&&d&&(s.child.flags|=8192,(s.mode&1)!==0&&(r===null||(tt.current&1)!==0?wt===0&&(wt=3):Nd())),s.updateQueue!==null&&(s.flags|=4),Vt(s),null);case 4:return Io(),yd(r,s),r===null&&Na(s.stateNode.containerInfo),Vt(s),null;case 10:return qh(s.type._context),Vt(s),null;case 17:return Kt(s.type)&&pc(),Vt(s),null;case 19:if(Je(tt),g=s.memoizedState,g===null)return Vt(s),null;if(d=(s.flags&128)!==0,x=g.rendering,x===null)if(d)$a(g,!1);else{if(wt!==0||r!==null&&(r.flags&128)!==0)for(r=s.child;r!==null;){if(x=Sc(r),x!==null){for(s.flags|=128,$a(g,!1),d=x.updateQueue,d!==null&&(s.updateQueue=d,s.flags|=4),s.subtreeFlags=0,d=a,a=s.child;a!==null;)g=a,r=d,g.flags&=14680066,x=g.alternate,x===null?(g.childLanes=0,g.lanes=r,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=x.childLanes,g.lanes=x.lanes,g.child=x.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=x.memoizedProps,g.memoizedState=x.memoizedState,g.updateQueue=x.updateQueue,g.type=x.type,r=x.dependencies,g.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),a=a.sibling;return Ge(tt,tt.current&1|2),s.child}r=r.sibling}g.tail!==null&&Qe()>Ao&&(s.flags|=128,d=!0,$a(g,!1),s.lanes=4194304)}else{if(!d)if(r=Sc(x),r!==null){if(s.flags|=128,d=!0,a=r.updateQueue,a!==null&&(s.updateQueue=a,s.flags|=4),$a(g,!0),g.tail===null&&g.tailMode==="hidden"&&!x.alternate&&!et)return Vt(s),null}else 2*Qe()-g.renderingStartTime>Ao&&a!==1073741824&&(s.flags|=128,d=!0,$a(g,!1),s.lanes=4194304);g.isBackwards?(x.sibling=s.child,s.child=x):(a=g.last,a!==null?a.sibling=x:s.child=x,g.last=x)}return g.tail!==null?(s=g.tail,g.rendering=s,g.tail=s.sibling,g.renderingStartTime=Qe(),s.sibling=null,a=tt.current,Ge(tt,d?a&1|2:a&1),s):(Vt(s),null);case 22:case 23:return Rd(),d=s.memoizedState!==null,r!==null&&r.memoizedState!==null!==d&&(s.flags|=8192),d&&(s.mode&1)!==0?(cn&1073741824)!==0&&(Vt(s),s.subtreeFlags&6&&(s.flags|=8192)):Vt(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function TE(r,s){switch(Fh(s),s.tag){case 1:return Kt(s.type)&&pc(),r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 3:return Io(),Je(Gt),Je(Lt),Xh(),r=s.flags,(r&65536)!==0&&(r&128)===0?(s.flags=r&-65537|128,s):null;case 5:return Yh(s),null;case 13:if(Je(tt),r=s.memoizedState,r!==null&&r.dehydrated!==null){if(s.alternate===null)throw Error(t(340));wo()}return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 19:return Je(tt),null;case 4:return Io(),null;case 10:return qh(s.type._context),null;case 22:case 23:return Rd(),null;case 24:return null;default:return null}}var Dc=!1,Mt=!1,IE=typeof WeakSet=="function"?WeakSet:Set,ce=null;function bo(r,s){var a=r.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(d){ot(r,s,d)}else a.current=null}function vd(r,s,a){try{a()}catch(d){ot(r,s,d)}}var $g=!1;function SE(r,s){if(Rh=br,r=xm(),Eh(r)){if("selectionStart"in r)var a={start:r.selectionStart,end:r.selectionEnd};else e:{a=(a=r.ownerDocument)&&a.defaultView||window;var d=a.getSelection&&a.getSelection();if(d&&d.rangeCount!==0){a=d.anchorNode;var f=d.anchorOffset,g=d.focusNode;d=d.focusOffset;try{a.nodeType,g.nodeType}catch{a=null;break e}var x=0,S=-1,C=-1,$=0,J=0,X=r,Y=null;t:for(;;){for(var oe;X!==a||f!==0&&X.nodeType!==3||(S=x+f),X!==g||d!==0&&X.nodeType!==3||(C=x+d),X.nodeType===3&&(x+=X.nodeValue.length),(oe=X.firstChild)!==null;)Y=X,X=oe;for(;;){if(X===r)break t;if(Y===a&&++$===f&&(S=x),Y===g&&++J===d&&(C=x),(oe=X.nextSibling)!==null)break;X=Y,Y=X.parentNode}X=oe}a=S===-1||C===-1?null:{start:S,end:C}}else a=null}a=a||{start:0,end:0}}else a=null;for(Nh={focusedElem:r,selectionRange:a},br=!1,ce=s;ce!==null;)if(s=ce,r=s.child,(s.subtreeFlags&1028)!==0&&r!==null)r.return=s,ce=r;else for(;ce!==null;){s=ce;try{var ue=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(ue!==null){var he=ue.memoizedProps,ct=ue.memoizedState,F=s.stateNode,j=F.getSnapshotBeforeUpdate(s.elementType===s.type?he:Pn(s.type,he),ct);F.__reactInternalSnapshotBeforeUpdate=j}break;case 3:var z=s.stateNode.containerInfo;z.nodeType===1?z.textContent="":z.nodeType===9&&z.documentElement&&z.removeChild(z.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(ee){ot(s,s.return,ee)}if(r=s.sibling,r!==null){r.return=s.return,ce=r;break}ce=s.return}return ue=$g,$g=!1,ue}function Wa(r,s,a){var d=s.updateQueue;if(d=d!==null?d.lastEffect:null,d!==null){var f=d=d.next;do{if((f.tag&r)===r){var g=f.destroy;f.destroy=void 0,g!==void 0&&vd(s,a,g)}f=f.next}while(f!==d)}}function Lc(r,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&r)===r){var d=a.create;a.destroy=d()}a=a.next}while(a!==s)}}function _d(r){var s=r.ref;if(s!==null){var a=r.stateNode;switch(r.tag){case 5:r=a;break;default:r=a}typeof s=="function"?s(r):s.current=r}}function Wg(r){var s=r.alternate;s!==null&&(r.alternate=null,Wg(s)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(s=r.stateNode,s!==null&&(delete s[sr],delete s[ja],delete s[Lh],delete s[aE],delete s[lE])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function qg(r){return r.tag===5||r.tag===3||r.tag===4}function Hg(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||qg(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function wd(r,s,a){var d=r.tag;if(d===5||d===6)r=r.stateNode,s?a.nodeType===8?a.parentNode.insertBefore(r,s):a.insertBefore(r,s):(a.nodeType===8?(s=a.parentNode,s.insertBefore(r,a)):(s=a,s.appendChild(r)),a=a._reactRootContainer,a!=null||s.onclick!==null||(s.onclick=dc));else if(d!==4&&(r=r.child,r!==null))for(wd(r,s,a),r=r.sibling;r!==null;)wd(r,s,a),r=r.sibling}function xd(r,s,a){var d=r.tag;if(d===5||d===6)r=r.stateNode,s?a.insertBefore(r,s):a.appendChild(r);else if(d!==4&&(r=r.child,r!==null))for(xd(r,s,a),r=r.sibling;r!==null;)xd(r,s,a),r=r.sibling}var At=null,jn=!1;function Ti(r,s,a){for(a=a.child;a!==null;)Gg(r,s,a),a=a.sibling}function Gg(r,s,a){if(en&&typeof en.onCommitFiberUnmount=="function")try{en.onCommitFiberUnmount(es,a)}catch{}switch(a.tag){case 5:Mt||bo(a,s);case 6:var d=At,f=jn;At=null,Ti(r,s,a),At=d,jn=f,At!==null&&(jn?(r=At,a=a.stateNode,r.nodeType===8?r.parentNode.removeChild(a):r.removeChild(a)):At.removeChild(a.stateNode));break;case 18:At!==null&&(jn?(r=At,a=a.stateNode,r.nodeType===8?Dh(r.parentNode,a):r.nodeType===1&&Dh(r,a),fi(r)):Dh(At,a.stateNode));break;case 4:d=At,f=jn,At=a.stateNode.containerInfo,jn=!0,Ti(r,s,a),At=d,jn=f;break;case 0:case 11:case 14:case 15:if(!Mt&&(d=a.updateQueue,d!==null&&(d=d.lastEffect,d!==null))){f=d=d.next;do{var g=f,x=g.destroy;g=g.tag,x!==void 0&&((g&2)!==0||(g&4)!==0)&&vd(a,s,x),f=f.next}while(f!==d)}Ti(r,s,a);break;case 1:if(!Mt&&(bo(a,s),d=a.stateNode,typeof d.componentWillUnmount=="function"))try{d.props=a.memoizedProps,d.state=a.memoizedState,d.componentWillUnmount()}catch(S){ot(a,s,S)}Ti(r,s,a);break;case 21:Ti(r,s,a);break;case 22:a.mode&1?(Mt=(d=Mt)||a.memoizedState!==null,Ti(r,s,a),Mt=d):Ti(r,s,a);break;default:Ti(r,s,a)}}function Kg(r){var s=r.updateQueue;if(s!==null){r.updateQueue=null;var a=r.stateNode;a===null&&(a=r.stateNode=new IE),s.forEach(function(d){var f=DE.bind(null,r,d);a.has(d)||(a.add(d),d.then(f,f))})}}function Dn(r,s){var a=s.deletions;if(a!==null)for(var d=0;d<a.length;d++){var f=a[d];try{var g=r,x=s,S=x;e:for(;S!==null;){switch(S.tag){case 5:At=S.stateNode,jn=!1;break e;case 3:At=S.stateNode.containerInfo,jn=!0;break e;case 4:At=S.stateNode.containerInfo,jn=!0;break e}S=S.return}if(At===null)throw Error(t(160));Gg(g,x,f),At=null,jn=!1;var C=f.alternate;C!==null&&(C.return=null),f.return=null}catch($){ot(f,s,$)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)Qg(s,r),s=s.sibling}function Qg(r,s){var a=r.alternate,d=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(Dn(s,r),lr(r),d&4){try{Wa(3,r,r.return),Lc(3,r)}catch(he){ot(r,r.return,he)}try{Wa(5,r,r.return)}catch(he){ot(r,r.return,he)}}break;case 1:Dn(s,r),lr(r),d&512&&a!==null&&bo(a,a.return);break;case 5:if(Dn(s,r),lr(r),d&512&&a!==null&&bo(a,a.return),r.flags&32){var f=r.stateNode;try{Qi(f,"")}catch(he){ot(r,r.return,he)}}if(d&4&&(f=r.stateNode,f!=null)){var g=r.memoizedProps,x=a!==null?a.memoizedProps:g,S=r.type,C=r.updateQueue;if(r.updateQueue=null,C!==null)try{S==="input"&&g.type==="radio"&&g.name!=null&&$s(f,g),Hs(S,x);var $=Hs(S,g);for(x=0;x<C.length;x+=2){var J=C[x],X=C[x+1];J==="style"?qs(f,X):J==="dangerouslySetInnerHTML"?Fl(f,X):J==="children"?Qi(f,X):ie(f,J,X,$)}switch(S){case"input":Ki(f,g);break;case"textarea":Ml(f,g);break;case"select":var Y=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!g.multiple;var oe=g.value;oe!=null?bn(f,!!g.multiple,oe,!1):Y!==!!g.multiple&&(g.defaultValue!=null?bn(f,!!g.multiple,g.defaultValue,!0):bn(f,!!g.multiple,g.multiple?[]:"",!1))}f[ja]=g}catch(he){ot(r,r.return,he)}}break;case 6:if(Dn(s,r),lr(r),d&4){if(r.stateNode===null)throw Error(t(162));f=r.stateNode,g=r.memoizedProps;try{f.nodeValue=g}catch(he){ot(r,r.return,he)}}break;case 3:if(Dn(s,r),lr(r),d&4&&a!==null&&a.memoizedState.isDehydrated)try{fi(s.containerInfo)}catch(he){ot(r,r.return,he)}break;case 4:Dn(s,r),lr(r);break;case 13:Dn(s,r),lr(r),f=r.child,f.flags&8192&&(g=f.memoizedState!==null,f.stateNode.isHidden=g,!g||f.alternate!==null&&f.alternate.memoizedState!==null||(Id=Qe())),d&4&&Kg(r);break;case 22:if(J=a!==null&&a.memoizedState!==null,r.mode&1?(Mt=($=Mt)||J,Dn(s,r),Mt=$):Dn(s,r),lr(r),d&8192){if($=r.memoizedState!==null,(r.stateNode.isHidden=$)&&!J&&(r.mode&1)!==0)for(ce=r,J=r.child;J!==null;){for(X=ce=J;ce!==null;){switch(Y=ce,oe=Y.child,Y.tag){case 0:case 11:case 14:case 15:Wa(4,Y,Y.return);break;case 1:bo(Y,Y.return);var ue=Y.stateNode;if(typeof ue.componentWillUnmount=="function"){d=Y,a=Y.return;try{s=d,ue.props=s.memoizedProps,ue.state=s.memoizedState,ue.componentWillUnmount()}catch(he){ot(d,a,he)}}break;case 5:bo(Y,Y.return);break;case 22:if(Y.memoizedState!==null){Xg(X);continue}}oe!==null?(oe.return=Y,ce=oe):Xg(X)}J=J.sibling}e:for(J=null,X=r;;){if(X.tag===5){if(J===null){J=X;try{f=X.stateNode,$?(g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(S=X.stateNode,C=X.memoizedProps.style,x=C!=null&&C.hasOwnProperty("display")?C.display:null,S.style.display=ii("display",x))}catch(he){ot(r,r.return,he)}}}else if(X.tag===6){if(J===null)try{X.stateNode.nodeValue=$?"":X.memoizedProps}catch(he){ot(r,r.return,he)}}else if((X.tag!==22&&X.tag!==23||X.memoizedState===null||X===r)&&X.child!==null){X.child.return=X,X=X.child;continue}if(X===r)break e;for(;X.sibling===null;){if(X.return===null||X.return===r)break e;J===X&&(J=null),X=X.return}J===X&&(J=null),X.sibling.return=X.return,X=X.sibling}}break;case 19:Dn(s,r),lr(r),d&4&&Kg(r);break;case 21:break;default:Dn(s,r),lr(r)}}function lr(r){var s=r.flags;if(s&2){try{e:{for(var a=r.return;a!==null;){if(qg(a)){var d=a;break e}a=a.return}throw Error(t(160))}switch(d.tag){case 5:var f=d.stateNode;d.flags&32&&(Qi(f,""),d.flags&=-33);var g=Hg(r);xd(r,g,f);break;case 3:case 4:var x=d.stateNode.containerInfo,S=Hg(r);wd(r,S,x);break;default:throw Error(t(161))}}catch(C){ot(r,r.return,C)}r.flags&=-3}s&4096&&(r.flags&=-4097)}function bE(r,s,a){ce=r,Yg(r)}function Yg(r,s,a){for(var d=(r.mode&1)!==0;ce!==null;){var f=ce,g=f.child;if(f.tag===22&&d){var x=f.memoizedState!==null||Dc;if(!x){var S=f.alternate,C=S!==null&&S.memoizedState!==null||Mt;S=Dc;var $=Mt;if(Dc=x,(Mt=C)&&!$)for(ce=f;ce!==null;)x=ce,C=x.child,x.tag===22&&x.memoizedState!==null?Zg(f):C!==null?(C.return=x,ce=C):Zg(f);for(;g!==null;)ce=g,Yg(g),g=g.sibling;ce=f,Dc=S,Mt=$}Jg(r)}else(f.subtreeFlags&8772)!==0&&g!==null?(g.return=f,ce=g):Jg(r)}}function Jg(r){for(;ce!==null;){var s=ce;if((s.flags&8772)!==0){var a=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:Mt||Lc(5,s);break;case 1:var d=s.stateNode;if(s.flags&4&&!Mt)if(a===null)d.componentDidMount();else{var f=s.elementType===s.type?a.memoizedProps:Pn(s.type,a.memoizedProps);d.componentDidUpdate(f,a.memoizedState,d.__reactInternalSnapshotBeforeUpdate)}var g=s.updateQueue;g!==null&&Xm(s,g,d);break;case 3:var x=s.updateQueue;if(x!==null){if(a=null,s.child!==null)switch(s.child.tag){case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}Xm(s,x,a)}break;case 5:var S=s.stateNode;if(a===null&&s.flags&4){a=S;var C=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":C.autoFocus&&a.focus();break;case"img":C.src&&(a.src=C.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var $=s.alternate;if($!==null){var J=$.memoizedState;if(J!==null){var X=J.dehydrated;X!==null&&fi(X)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Mt||s.flags&512&&_d(s)}catch(Y){ot(s,s.return,Y)}}if(s===r){ce=null;break}if(a=s.sibling,a!==null){a.return=s.return,ce=a;break}ce=s.return}}function Xg(r){for(;ce!==null;){var s=ce;if(s===r){ce=null;break}var a=s.sibling;if(a!==null){a.return=s.return,ce=a;break}ce=s.return}}function Zg(r){for(;ce!==null;){var s=ce;try{switch(s.tag){case 0:case 11:case 15:var a=s.return;try{Lc(4,s)}catch(C){ot(s,a,C)}break;case 1:var d=s.stateNode;if(typeof d.componentDidMount=="function"){var f=s.return;try{d.componentDidMount()}catch(C){ot(s,f,C)}}var g=s.return;try{_d(s)}catch(C){ot(s,g,C)}break;case 5:var x=s.return;try{_d(s)}catch(C){ot(s,x,C)}}}catch(C){ot(s,s.return,C)}if(s===r){ce=null;break}var S=s.sibling;if(S!==null){S.return=s.return,ce=S;break}ce=s.return}}var kE=Math.ceil,Oc=ne.ReactCurrentDispatcher,Ed=ne.ReactCurrentOwner,yn=ne.ReactCurrentBatchConfig,Oe=0,Tt=null,pt=null,Ct=0,cn=0,ko=vi(0),wt=0,qa=null,gs=0,Vc=0,Td=0,Ha=null,Yt=null,Id=0,Ao=1/0,Or=null,Mc=!1,Sd=null,Ii=null,Fc=!1,Si=null,Uc=0,Ga=0,bd=null,Bc=-1,zc=0;function Ht(){return(Oe&6)!==0?Qe():Bc!==-1?Bc:Bc=Qe()}function bi(r){return(r.mode&1)===0?1:(Oe&2)!==0&&Ct!==0?Ct&-Ct:uE.transition!==null?(zc===0&&(zc=pa()),zc):(r=je,r!==0||(r=window.event,r=r===void 0?16:no(r.type)),r)}function Ln(r,s,a,d){if(50<Ga)throw Ga=0,bd=null,Error(t(185));is(r,a,d),((Oe&2)===0||r!==Tt)&&(r===Tt&&((Oe&2)===0&&(Vc|=a),wt===4&&ki(r,Ct)),Jt(r,d),a===1&&Oe===0&&(s.mode&1)===0&&(Ao=Qe()+500,gc&&wi()))}function Jt(r,s){var a=r.callbackNode;rs(r,s);var d=Tr(r,r===Tt?Ct:0);if(d===0)a!==null&&Qs(a),r.callbackNode=null,r.callbackPriority=0;else if(s=d&-d,r.callbackPriority!==s){if(a!=null&&Qs(a),s===1)r.tag===0?cE(ty.bind(null,r)):Um(ty.bind(null,r)),sE(function(){(Oe&6)===0&&wi()}),a=null;else{switch(Qn(d)){case 1:a=Ys;break;case 4:a=ha;break;case 16:a=Zi;break;case 536870912:a=Js;break;default:a=Zi}a=cy(a,ey.bind(null,r))}r.callbackPriority=s,r.callbackNode=a}}function ey(r,s){if(Bc=-1,zc=0,(Oe&6)!==0)throw Error(t(327));var a=r.callbackNode;if(Co()&&r.callbackNode!==a)return null;var d=Tr(r,r===Tt?Ct:0);if(d===0)return null;if((d&30)!==0||(d&r.expiredLanes)!==0||s)s=$c(r,d);else{s=d;var f=Oe;Oe|=2;var g=ry();(Tt!==r||Ct!==s)&&(Or=null,Ao=Qe()+500,vs(r,s));do try{RE();break}catch(S){ny(r,S)}while(!0);Wh(),Oc.current=g,Oe=f,pt!==null?s=0:(Tt=null,Ct=0,s=wt)}if(s!==0){if(s===2&&(f=fa(r),f!==0&&(d=f,s=kd(r,f))),s===1)throw a=qa,vs(r,0),ki(r,d),Jt(r,Qe()),a;if(s===6)ki(r,d);else{if(f=r.current.alternate,(d&30)===0&&!AE(f)&&(s=$c(r,d),s===2&&(g=fa(r),g!==0&&(d=g,s=kd(r,g))),s===1))throw a=qa,vs(r,0),ki(r,d),Jt(r,Qe()),a;switch(r.finishedWork=f,r.finishedLanes=d,s){case 0:case 1:throw Error(t(345));case 2:_s(r,Yt,Or);break;case 3:if(ki(r,d),(d&130023424)===d&&(s=Id+500-Qe(),10<s)){if(Tr(r,0)!==0)break;if(f=r.suspendedLanes,(f&d)!==d){Ht(),r.pingedLanes|=r.suspendedLanes&f;break}r.timeoutHandle=jh(_s.bind(null,r,Yt,Or),s);break}_s(r,Yt,Or);break;case 4:if(ki(r,d),(d&4194240)===d)break;for(s=r.eventTimes,f=-1;0<d;){var x=31-tn(d);g=1<<x,x=s[x],x>f&&(f=x),d&=~g}if(d=f,d=Qe()-d,d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3e3>d?3e3:4320>d?4320:1960*kE(d/1960))-d,10<d){r.timeoutHandle=jh(_s.bind(null,r,Yt,Or),d);break}_s(r,Yt,Or);break;case 5:_s(r,Yt,Or);break;default:throw Error(t(329))}}}return Jt(r,Qe()),r.callbackNode===a?ey.bind(null,r):null}function kd(r,s){var a=Ha;return r.current.memoizedState.isDehydrated&&(vs(r,s).flags|=256),r=$c(r,s),r!==2&&(s=Yt,Yt=a,s!==null&&Ad(s)),r}function Ad(r){Yt===null?Yt=r:Yt.push.apply(Yt,r)}function AE(r){for(var s=r;;){if(s.flags&16384){var a=s.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var d=0;d<a.length;d++){var f=a[d],g=f.getSnapshot;f=f.value;try{if(!Rn(g(),f))return!1}catch{return!1}}}if(a=s.child,s.subtreeFlags&16384&&a!==null)a.return=s,s=a;else{if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function ki(r,s){for(s&=~Td,s&=~Vc,r.suspendedLanes|=s,r.pingedLanes&=~s,r=r.expirationTimes;0<s;){var a=31-tn(s),d=1<<a;r[a]=-1,s&=~d}}function ty(r){if((Oe&6)!==0)throw Error(t(327));Co();var s=Tr(r,0);if((s&1)===0)return Jt(r,Qe()),null;var a=$c(r,s);if(r.tag!==0&&a===2){var d=fa(r);d!==0&&(s=d,a=kd(r,d))}if(a===1)throw a=qa,vs(r,0),ki(r,s),Jt(r,Qe()),a;if(a===6)throw Error(t(345));return r.finishedWork=r.current.alternate,r.finishedLanes=s,_s(r,Yt,Or),Jt(r,Qe()),null}function Cd(r,s){var a=Oe;Oe|=1;try{return r(s)}finally{Oe=a,Oe===0&&(Ao=Qe()+500,gc&&wi())}}function ys(r){Si!==null&&Si.tag===0&&(Oe&6)===0&&Co();var s=Oe;Oe|=1;var a=yn.transition,d=je;try{if(yn.transition=null,je=1,r)return r()}finally{je=d,yn.transition=a,Oe=s,(Oe&6)===0&&wi()}}function Rd(){cn=ko.current,Je(ko)}function vs(r,s){r.finishedWork=null,r.finishedLanes=0;var a=r.timeoutHandle;if(a!==-1&&(r.timeoutHandle=-1,iE(a)),pt!==null)for(a=pt.return;a!==null;){var d=a;switch(Fh(d),d.tag){case 1:d=d.type.childContextTypes,d!=null&&pc();break;case 3:Io(),Je(Gt),Je(Lt),Xh();break;case 5:Yh(d);break;case 4:Io();break;case 13:Je(tt);break;case 19:Je(tt);break;case 10:qh(d.type._context);break;case 22:case 23:Rd()}a=a.return}if(Tt=r,pt=r=Ai(r.current,null),Ct=cn=s,wt=0,qa=null,Td=Vc=gs=0,Yt=Ha=null,fs!==null){for(s=0;s<fs.length;s++)if(a=fs[s],d=a.interleaved,d!==null){a.interleaved=null;var f=d.next,g=a.pending;if(g!==null){var x=g.next;g.next=f,d.next=x}a.pending=d}fs=null}return r}function ny(r,s){do{var a=pt;try{if(Wh(),bc.current=Rc,kc){for(var d=nt.memoizedState;d!==null;){var f=d.queue;f!==null&&(f.pending=null),d=d.next}kc=!1}if(ms=0,Et=_t=nt=null,Fa=!1,Ua=0,Ed.current=null,a===null||a.return===null){wt=1,qa=s,pt=null;break}e:{var g=r,x=a.return,S=a,C=s;if(s=Ct,S.flags|=32768,C!==null&&typeof C=="object"&&typeof C.then=="function"){var $=C,J=S,X=J.tag;if((J.mode&1)===0&&(X===0||X===11||X===15)){var Y=J.alternate;Y?(J.updateQueue=Y.updateQueue,J.memoizedState=Y.memoizedState,J.lanes=Y.lanes):(J.updateQueue=null,J.memoizedState=null)}var oe=kg(x);if(oe!==null){oe.flags&=-257,Ag(oe,x,S,g,s),oe.mode&1&&bg(g,$,s),s=oe,C=$;var ue=s.updateQueue;if(ue===null){var he=new Set;he.add(C),s.updateQueue=he}else ue.add(C);break e}else{if((s&1)===0){bg(g,$,s),Nd();break e}C=Error(t(426))}}else if(et&&S.mode&1){var ct=kg(x);if(ct!==null){(ct.flags&65536)===0&&(ct.flags|=256),Ag(ct,x,S,g,s),zh(So(C,S));break e}}g=C=So(C,S),wt!==4&&(wt=2),Ha===null?Ha=[g]:Ha.push(g),g=x;do{switch(g.tag){case 3:g.flags|=65536,s&=-s,g.lanes|=s;var F=Ig(g,C,s);Jm(g,F);break e;case 1:S=C;var j=g.type,z=g.stateNode;if((g.flags&128)===0&&(typeof j.getDerivedStateFromError=="function"||z!==null&&typeof z.componentDidCatch=="function"&&(Ii===null||!Ii.has(z)))){g.flags|=65536,s&=-s,g.lanes|=s;var ee=Sg(g,S,s);Jm(g,ee);break e}}g=g.return}while(g!==null)}sy(a)}catch(de){s=de,pt===a&&a!==null&&(pt=a=a.return);continue}break}while(!0)}function ry(){var r=Oc.current;return Oc.current=Rc,r===null?Rc:r}function Nd(){(wt===0||wt===3||wt===2)&&(wt=4),Tt===null||(gs&268435455)===0&&(Vc&268435455)===0||ki(Tt,Ct)}function $c(r,s){var a=Oe;Oe|=2;var d=ry();(Tt!==r||Ct!==s)&&(Or=null,vs(r,s));do try{CE();break}catch(f){ny(r,f)}while(!0);if(Wh(),Oe=a,Oc.current=d,pt!==null)throw Error(t(261));return Tt=null,Ct=0,wt}function CE(){for(;pt!==null;)iy(pt)}function RE(){for(;pt!==null&&!Xi();)iy(pt)}function iy(r){var s=ly(r.alternate,r,cn);r.memoizedProps=r.pendingProps,s===null?sy(r):pt=s,Ed.current=null}function sy(r){var s=r;do{var a=s.alternate;if(r=s.return,(s.flags&32768)===0){if(a=EE(a,s,cn),a!==null){pt=a;return}}else{if(a=TE(a,s),a!==null){a.flags&=32767,pt=a;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{wt=6,pt=null;return}}if(s=s.sibling,s!==null){pt=s;return}pt=s=r}while(s!==null);wt===0&&(wt=5)}function _s(r,s,a){var d=je,f=yn.transition;try{yn.transition=null,je=1,NE(r,s,a,d)}finally{yn.transition=f,je=d}return null}function NE(r,s,a,d){do Co();while(Si!==null);if((Oe&6)!==0)throw Error(t(327));a=r.finishedWork;var f=r.finishedLanes;if(a===null)return null;if(r.finishedWork=null,r.finishedLanes=0,a===r.current)throw Error(t(177));r.callbackNode=null,r.callbackPriority=0;var g=a.lanes|a.childLanes;if(yh(r,g),r===Tt&&(pt=Tt=null,Ct=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Fc||(Fc=!0,cy(Zi,function(){return Co(),null})),g=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||g){g=yn.transition,yn.transition=null;var x=je;je=1;var S=Oe;Oe|=4,Ed.current=null,SE(r,a),Qg(a,r),Jx(Nh),br=!!Rh,Nh=Rh=null,r.current=a,bE(a),Er(),Oe=S,je=x,yn.transition=g}else r.current=a;if(Fc&&(Fc=!1,Si=r,Uc=f),g=r.pendingLanes,g===0&&(Ii=null),Yl(a.stateNode),Jt(r,Qe()),s!==null)for(d=r.onRecoverableError,a=0;a<s.length;a++)f=s[a],d(f.value,{componentStack:f.stack,digest:f.digest});if(Mc)throw Mc=!1,r=Sd,Sd=null,r;return(Uc&1)!==0&&r.tag!==0&&Co(),g=r.pendingLanes,(g&1)!==0?r===bd?Ga++:(Ga=0,bd=r):Ga=0,wi(),null}function Co(){if(Si!==null){var r=Qn(Uc),s=yn.transition,a=je;try{if(yn.transition=null,je=16>r?16:r,Si===null)var d=!1;else{if(r=Si,Si=null,Uc=0,(Oe&6)!==0)throw Error(t(331));var f=Oe;for(Oe|=4,ce=r.current;ce!==null;){var g=ce,x=g.child;if((ce.flags&16)!==0){var S=g.deletions;if(S!==null){for(var C=0;C<S.length;C++){var $=S[C];for(ce=$;ce!==null;){var J=ce;switch(J.tag){case 0:case 11:case 15:Wa(8,J,g)}var X=J.child;if(X!==null)X.return=J,ce=X;else for(;ce!==null;){J=ce;var Y=J.sibling,oe=J.return;if(Wg(J),J===$){ce=null;break}if(Y!==null){Y.return=oe,ce=Y;break}ce=oe}}}var ue=g.alternate;if(ue!==null){var he=ue.child;if(he!==null){ue.child=null;do{var ct=he.sibling;he.sibling=null,he=ct}while(he!==null)}}ce=g}}if((g.subtreeFlags&2064)!==0&&x!==null)x.return=g,ce=x;else e:for(;ce!==null;){if(g=ce,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:Wa(9,g,g.return)}var F=g.sibling;if(F!==null){F.return=g.return,ce=F;break e}ce=g.return}}var j=r.current;for(ce=j;ce!==null;){x=ce;var z=x.child;if((x.subtreeFlags&2064)!==0&&z!==null)z.return=x,ce=z;else e:for(x=j;ce!==null;){if(S=ce,(S.flags&2048)!==0)try{switch(S.tag){case 0:case 11:case 15:Lc(9,S)}}catch(de){ot(S,S.return,de)}if(S===x){ce=null;break e}var ee=S.sibling;if(ee!==null){ee.return=S.return,ce=ee;break e}ce=S.return}}if(Oe=f,wi(),en&&typeof en.onPostCommitFiberRoot=="function")try{en.onPostCommitFiberRoot(es,r)}catch{}d=!0}return d}finally{je=a,yn.transition=s}}return!1}function oy(r,s,a){s=So(a,s),s=Ig(r,s,1),r=Ei(r,s,1),s=Ht(),r!==null&&(is(r,1,s),Jt(r,s))}function ot(r,s,a){if(r.tag===3)oy(r,r,a);else for(;s!==null;){if(s.tag===3){oy(s,r,a);break}else if(s.tag===1){var d=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof d.componentDidCatch=="function"&&(Ii===null||!Ii.has(d))){r=So(a,r),r=Sg(s,r,1),s=Ei(s,r,1),r=Ht(),s!==null&&(is(s,1,r),Jt(s,r));break}}s=s.return}}function PE(r,s,a){var d=r.pingCache;d!==null&&d.delete(s),s=Ht(),r.pingedLanes|=r.suspendedLanes&a,Tt===r&&(Ct&a)===a&&(wt===4||wt===3&&(Ct&130023424)===Ct&&500>Qe()-Id?vs(r,0):Td|=a),Jt(r,s)}function ay(r,s){s===0&&((r.mode&1)===0?s=1:(s=ui,ui<<=1,(ui&130023424)===0&&(ui=4194304)));var a=Ht();r=jr(r,s),r!==null&&(is(r,s,a),Jt(r,a))}function jE(r){var s=r.memoizedState,a=0;s!==null&&(a=s.retryLane),ay(r,a)}function DE(r,s){var a=0;switch(r.tag){case 13:var d=r.stateNode,f=r.memoizedState;f!==null&&(a=f.retryLane);break;case 19:d=r.stateNode;break;default:throw Error(t(314))}d!==null&&d.delete(s),ay(r,a)}var ly;ly=function(r,s,a){if(r!==null)if(r.memoizedProps!==s.pendingProps||Gt.current)Qt=!0;else{if((r.lanes&a)===0&&(s.flags&128)===0)return Qt=!1,xE(r,s,a);Qt=(r.flags&131072)!==0}else Qt=!1,et&&(s.flags&1048576)!==0&&Bm(s,vc,s.index);switch(s.lanes=0,s.tag){case 2:var d=s.type;jc(r,s),r=s.pendingProps;var f=yo(s,Lt.current);To(s,a),f=td(null,s,d,r,f,a);var g=nd();return s.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Kt(d)?(g=!0,mc(s)):g=!1,s.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,Kh(s),f.updater=Nc,s.stateNode=f,f._reactInternals=s,ld(s,d,r,a),s=dd(null,s,d,!0,g,a)):(s.tag=0,et&&g&&Mh(s),qt(null,s,f,a),s=s.child),s;case 16:d=s.elementType;e:{switch(jc(r,s),r=s.pendingProps,f=d._init,d=f(d._payload),s.type=d,f=s.tag=OE(d),r=Pn(d,r),f){case 0:s=hd(null,s,d,r,a);break e;case 1:s=Dg(null,s,d,r,a);break e;case 11:s=Cg(null,s,d,r,a);break e;case 14:s=Rg(null,s,d,Pn(d.type,r),a);break e}throw Error(t(306,d,""))}return s;case 0:return d=s.type,f=s.pendingProps,f=s.elementType===d?f:Pn(d,f),hd(r,s,d,f,a);case 1:return d=s.type,f=s.pendingProps,f=s.elementType===d?f:Pn(d,f),Dg(r,s,d,f,a);case 3:e:{if(Lg(s),r===null)throw Error(t(387));d=s.pendingProps,g=s.memoizedState,f=g.element,Ym(r,s),Ic(s,d,null,a);var x=s.memoizedState;if(d=x.element,g.isDehydrated)if(g={element:d,isDehydrated:!1,cache:x.cache,pendingSuspenseBoundaries:x.pendingSuspenseBoundaries,transitions:x.transitions},s.updateQueue.baseState=g,s.memoizedState=g,s.flags&256){f=So(Error(t(423)),s),s=Og(r,s,d,a,f);break e}else if(d!==f){f=So(Error(t(424)),s),s=Og(r,s,d,a,f);break e}else for(ln=yi(s.stateNode.containerInfo.firstChild),an=s,et=!0,Nn=null,a=Km(s,null,d,a),s.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(wo(),d===f){s=Lr(r,s,a);break e}qt(r,s,d,a)}s=s.child}return s;case 5:return Zm(s),r===null&&Bh(s),d=s.type,f=s.pendingProps,g=r!==null?r.memoizedProps:null,x=f.children,Ph(d,f)?x=null:g!==null&&Ph(d,g)&&(s.flags|=32),jg(r,s),qt(r,s,x,a),s.child;case 6:return r===null&&Bh(s),null;case 13:return Vg(r,s,a);case 4:return Qh(s,s.stateNode.containerInfo),d=s.pendingProps,r===null?s.child=xo(s,null,d,a):qt(r,s,d,a),s.child;case 11:return d=s.type,f=s.pendingProps,f=s.elementType===d?f:Pn(d,f),Cg(r,s,d,f,a);case 7:return qt(r,s,s.pendingProps,a),s.child;case 8:return qt(r,s,s.pendingProps.children,a),s.child;case 12:return qt(r,s,s.pendingProps.children,a),s.child;case 10:e:{if(d=s.type._context,f=s.pendingProps,g=s.memoizedProps,x=f.value,Ge(xc,d._currentValue),d._currentValue=x,g!==null)if(Rn(g.value,x)){if(g.children===f.children&&!Gt.current){s=Lr(r,s,a);break e}}else for(g=s.child,g!==null&&(g.return=s);g!==null;){var S=g.dependencies;if(S!==null){x=g.child;for(var C=S.firstContext;C!==null;){if(C.context===d){if(g.tag===1){C=Dr(-1,a&-a),C.tag=2;var $=g.updateQueue;if($!==null){$=$.shared;var J=$.pending;J===null?C.next=C:(C.next=J.next,J.next=C),$.pending=C}}g.lanes|=a,C=g.alternate,C!==null&&(C.lanes|=a),Hh(g.return,a,s),S.lanes|=a;break}C=C.next}}else if(g.tag===10)x=g.type===s.type?null:g.child;else if(g.tag===18){if(x=g.return,x===null)throw Error(t(341));x.lanes|=a,S=x.alternate,S!==null&&(S.lanes|=a),Hh(x,a,s),x=g.sibling}else x=g.child;if(x!==null)x.return=g;else for(x=g;x!==null;){if(x===s){x=null;break}if(g=x.sibling,g!==null){g.return=x.return,x=g;break}x=x.return}g=x}qt(r,s,f.children,a),s=s.child}return s;case 9:return f=s.type,d=s.pendingProps.children,To(s,a),f=mn(f),d=d(f),s.flags|=1,qt(r,s,d,a),s.child;case 14:return d=s.type,f=Pn(d,s.pendingProps),f=Pn(d.type,f),Rg(r,s,d,f,a);case 15:return Ng(r,s,s.type,s.pendingProps,a);case 17:return d=s.type,f=s.pendingProps,f=s.elementType===d?f:Pn(d,f),jc(r,s),s.tag=1,Kt(d)?(r=!0,mc(s)):r=!1,To(s,a),Eg(s,d,f),ld(s,d,f,a),dd(null,s,d,!0,r,a);case 19:return Fg(r,s,a);case 22:return Pg(r,s,a)}throw Error(t(156,s.tag))};function cy(r,s){return ua(r,s)}function LE(r,s,a,d){this.tag=r,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=d,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vn(r,s,a,d){return new LE(r,s,a,d)}function Pd(r){return r=r.prototype,!(!r||!r.isReactComponent)}function OE(r){if(typeof r=="function")return Pd(r)?1:0;if(r!=null){if(r=r.$$typeof,r===M)return 11;if(r===We)return 14}return 2}function Ai(r,s){var a=r.alternate;return a===null?(a=vn(r.tag,s,r.key,r.mode),a.elementType=r.elementType,a.type=r.type,a.stateNode=r.stateNode,a.alternate=r,r.alternate=a):(a.pendingProps=s,a.type=r.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=r.flags&14680064,a.childLanes=r.childLanes,a.lanes=r.lanes,a.child=r.child,a.memoizedProps=r.memoizedProps,a.memoizedState=r.memoizedState,a.updateQueue=r.updateQueue,s=r.dependencies,a.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},a.sibling=r.sibling,a.index=r.index,a.ref=r.ref,a}function Wc(r,s,a,d,f,g){var x=2;if(d=r,typeof r=="function")Pd(r)&&(x=1);else if(typeof r=="string")x=5;else e:switch(r){case R:return ws(a.children,f,g,s);case b:x=8,f|=8;break;case A:return r=vn(12,a,s,f|2),r.elementType=A,r.lanes=g,r;case k:return r=vn(13,a,s,f),r.elementType=k,r.lanes=g,r;case Be:return r=vn(19,a,s,f),r.elementType=Be,r.lanes=g,r;case Ze:return qc(a,f,g,s);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case D:x=10;break e;case N:x=9;break e;case M:x=11;break e;case We:x=14;break e;case jt:x=16,d=null;break e}throw Error(t(130,r==null?r:typeof r,""))}return s=vn(x,a,s,f),s.elementType=r,s.type=d,s.lanes=g,s}function ws(r,s,a,d){return r=vn(7,r,d,s),r.lanes=a,r}function qc(r,s,a,d){return r=vn(22,r,d,s),r.elementType=Ze,r.lanes=a,r.stateNode={isHidden:!1},r}function jd(r,s,a){return r=vn(6,r,null,s),r.lanes=a,r}function Dd(r,s,a){return s=vn(4,r.children!==null?r.children:[],r.key,s),s.lanes=a,s.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},s}function VE(r,s,a,d,f){this.tag=s,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ma(0),this.expirationTimes=ma(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ma(0),this.identifierPrefix=d,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function Ld(r,s,a,d,f,g,x,S,C){return r=new VE(r,s,a,S,C),s===1?(s=1,g===!0&&(s|=8)):s=0,g=vn(3,null,null,s),r.current=g,g.stateNode=r,g.memoizedState={element:d,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Kh(g),r}function ME(r,s,a){var d=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ie,key:d==null?null:""+d,children:r,containerInfo:s,implementation:a}}function uy(r){if(!r)return _i;r=r._reactInternals;e:{if(An(r)!==r||r.tag!==1)throw Error(t(170));var s=r;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Kt(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(r.tag===1){var a=r.type;if(Kt(a))return Mm(r,a,s)}return s}function hy(r,s,a,d,f,g,x,S,C){return r=Ld(a,d,!0,r,f,g,x,S,C),r.context=uy(null),a=r.current,d=Ht(),f=bi(a),g=Dr(d,f),g.callback=s??null,Ei(a,g,f),r.current.lanes=f,is(r,f,d),Jt(r,d),r}function Hc(r,s,a,d){var f=s.current,g=Ht(),x=bi(f);return a=uy(a),s.context===null?s.context=a:s.pendingContext=a,s=Dr(g,x),s.payload={element:r},d=d===void 0?null:d,d!==null&&(s.callback=d),r=Ei(f,s,x),r!==null&&(Ln(r,f,x,g),Tc(r,f,x)),x}function Gc(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function dy(r,s){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var a=r.retryLane;r.retryLane=a!==0&&a<s?a:s}}function Od(r,s){dy(r,s),(r=r.alternate)&&dy(r,s)}function FE(){return null}var fy=typeof reportError=="function"?reportError:function(r){console.error(r)};function Vd(r){this._internalRoot=r}Kc.prototype.render=Vd.prototype.render=function(r){var s=this._internalRoot;if(s===null)throw Error(t(409));Hc(r,s,null,null)},Kc.prototype.unmount=Vd.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var s=r.containerInfo;ys(function(){Hc(null,r,null,null)}),s[Cr]=null}};function Kc(r){this._internalRoot=r}Kc.prototype.unstable_scheduleHydration=function(r){if(r){var s=_a();r={blockedOn:null,target:r,priority:s};for(var a=0;a<nn.length&&s!==0&&s<nn[a].priority;a++);nn.splice(a,0,r),a===0&&eo(r)}};function Md(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function Qc(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function py(){}function UE(r,s,a,d,f){if(f){if(typeof d=="function"){var g=d;d=function(){var $=Gc(x);g.call($)}}var x=hy(s,d,r,0,null,!1,!1,"",py);return r._reactRootContainer=x,r[Cr]=x.current,Na(r.nodeType===8?r.parentNode:r),ys(),x}for(;f=r.lastChild;)r.removeChild(f);if(typeof d=="function"){var S=d;d=function(){var $=Gc(C);S.call($)}}var C=Ld(r,0,!1,null,null,!1,!1,"",py);return r._reactRootContainer=C,r[Cr]=C.current,Na(r.nodeType===8?r.parentNode:r),ys(function(){Hc(s,C,a,d)}),C}function Yc(r,s,a,d,f){var g=a._reactRootContainer;if(g){var x=g;if(typeof f=="function"){var S=f;f=function(){var C=Gc(x);S.call(C)}}Hc(s,x,r,f)}else x=UE(a,s,r,f,d);return Gc(x)}ya=function(r){switch(r.tag){case 3:var s=r.stateNode;if(s.current.memoizedState.isDehydrated){var a=Me(s.pendingLanes);a!==0&&(ga(s,a|1),Jt(s,Qe()),(Oe&6)===0&&(Ao=Qe()+500,wi()))}break;case 13:ys(function(){var d=jr(r,1);if(d!==null){var f=Ht();Ln(d,r,1,f)}}),Od(r,1)}},Xs=function(r){if(r.tag===13){var s=jr(r,134217728);if(s!==null){var a=Ht();Ln(s,r,134217728,a)}Od(r,134217728)}},va=function(r){if(r.tag===13){var s=bi(r),a=jr(r,s);if(a!==null){var d=Ht();Ln(a,r,s,d)}Od(r,s)}},_a=function(){return je},wa=function(r,s){var a=je;try{return je=r,s()}finally{je=a}},_r=function(r,s,a){switch(s){case"input":if(Ki(r,a),s=a.name,a.type==="radio"&&s!=null){for(a=r;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<a.length;s++){var d=a[s];if(d!==r&&d.form===r.form){var f=fc(d);if(!f)throw Error(t(90));ta(d),Ki(d,f)}}}break;case"textarea":Ml(r,a);break;case"select":s=a.value,s!=null&&bn(r,!!a.multiple,s,!1)}},Bl=Cd,zl=ys;var BE={usingClientEntryPoint:!1,Events:[Da,mo,fc,oi,ai,Cd]},Ka={findFiberByHostInstance:cs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},zE={bundleType:Ka.bundleType,version:Ka.version,rendererPackageName:Ka.rendererPackageName,rendererConfig:Ka.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ne.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=Ql(r),r===null?null:r.stateNode},findFiberByHostInstance:Ka.findFiberByHostInstance||FE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Jc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Jc.isDisabled&&Jc.supportsFiber)try{es=Jc.inject(zE),en=Jc}catch{}}return Xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=BE,Xt.createPortal=function(r,s){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Md(s))throw Error(t(200));return ME(r,s,null,a)},Xt.createRoot=function(r,s){if(!Md(r))throw Error(t(299));var a=!1,d="",f=fy;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(d=s.identifierPrefix),s.onRecoverableError!==void 0&&(f=s.onRecoverableError)),s=Ld(r,1,!1,null,null,a,!1,d,f),r[Cr]=s.current,Na(r.nodeType===8?r.parentNode:r),new Vd(s)},Xt.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var s=r._reactInternals;if(s===void 0)throw typeof r.render=="function"?Error(t(188)):(r=Object.keys(r).join(","),Error(t(268,r)));return r=Ql(s),r=r===null?null:r.stateNode,r},Xt.flushSync=function(r){return ys(r)},Xt.hydrate=function(r,s,a){if(!Qc(s))throw Error(t(200));return Yc(null,r,s,!0,a)},Xt.hydrateRoot=function(r,s,a){if(!Md(r))throw Error(t(405));var d=a!=null&&a.hydratedSources||null,f=!1,g="",x=fy;if(a!=null&&(a.unstable_strictMode===!0&&(f=!0),a.identifierPrefix!==void 0&&(g=a.identifierPrefix),a.onRecoverableError!==void 0&&(x=a.onRecoverableError)),s=hy(s,null,r,1,a??null,f,!1,g,x),r[Cr]=s.current,Na(r),d)for(r=0;r<d.length;r++)a=d[r],f=a._getVersion,f=f(a._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[a,f]:s.mutableSourceEagerHydrationData.push(a,f);return new Kc(s)},Xt.render=function(r,s,a){if(!Qc(s))throw Error(t(200));return Yc(null,r,s,!1,a)},Xt.unmountComponentAtNode=function(r){if(!Qc(r))throw Error(t(40));return r._reactRootContainer?(ys(function(){Yc(null,null,r,!1,function(){r._reactRootContainer=null,r[Cr]=null})}),!0):!1},Xt.unstable_batchedUpdates=Cd,Xt.unstable_renderSubtreeIntoContainer=function(r,s,a,d){if(!Qc(a))throw Error(t(200));if(r==null||r._reactInternals===void 0)throw Error(t(38));return Yc(r,s,a,!1,d)},Xt.version="18.3.1-next-f1338f8080-20240426",Xt}var Ey;function JE(){if(Ey)return Bd.exports;Ey=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Bd.exports=YE(),Bd.exports}var Ty;function XE(){if(Ty)return Xc;Ty=1;var n=JE();return Xc.createRoot=n.createRoot,Xc.hydrateRoot=n.hydrateRoot,Xc}var ZE=XE();const eT=w_(ZE);/**
 * react-router v7.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Iy="popstate";function Sy(n){return typeof n=="object"&&n!=null&&"pathname"in n&&"search"in n&&"hash"in n&&"state"in n&&"key"in n}function tT(n={}){function e(i,o){var v;let l=(v=o.state)==null?void 0:v.masked,{pathname:u,search:p,hash:m}=l||i.location;return pf("",{pathname:u,search:p,hash:m},o.state&&o.state.usr||null,o.state&&o.state.key||"default",l?{pathname:i.location.pathname,search:i.location.search,hash:i.location.hash}:void 0)}function t(i,o){return typeof o=="string"?o:cl(o)}return rT(e,t,null,n)}function rt(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function pr(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function nT(){return Math.random().toString(36).substring(2,10)}function by(n,e){return{usr:n.state,key:n.key,idx:e,masked:n.mask?{pathname:n.pathname,search:n.search,hash:n.hash}:void 0}}function pf(n,e,t=null,i,o){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof e=="string"?qo(e):e,state:t,key:e&&e.key||i||nT(),mask:o}}function cl({pathname:n="/",search:e="",hash:t=""}){return e&&e!=="?"&&(n+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(n+=t.charAt(0)==="#"?t:"#"+t),n}function qo(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substring(t),n=n.substring(0,t));let i=n.indexOf("?");i>=0&&(e.search=n.substring(i),n=n.substring(0,i)),n&&(e.pathname=n)}return e}function rT(n,e,t,i={}){let{window:o=document.defaultView,v5Compat:l=!1}=i,u=o.history,p="POP",m=null,v=w();v==null&&(v=0,u.replaceState({...u.state,idx:v},""));function w(){return(u.state||{idx:null}).idx}function E(){p="POP";let L=w(),H=L==null?null:L-v;v=L,m&&m({action:p,location:O.location,delta:H})}function I(L,H){p="PUSH";let Z=Sy(L)?L:pf(O.location,L,H);v=w()+1;let ie=by(Z,v),ne=O.createHref(Z.mask||Z);try{u.pushState(ie,"",ne)}catch(fe){if(fe instanceof DOMException&&fe.name==="DataCloneError")throw fe;o.location.assign(ne)}l&&m&&m({action:p,location:O.location,delta:1})}function P(L,H){p="REPLACE";let Z=Sy(L)?L:pf(O.location,L,H);v=w();let ie=by(Z,v),ne=O.createHref(Z.mask||Z);u.replaceState(ie,"",ne),l&&m&&m({action:p,location:O.location,delta:0})}function q(L){return iT(o,L)}let O={get action(){return p},get location(){return n(o,u)},listen(L){if(m)throw new Error("A history only accepts one active listener");return o.addEventListener(Iy,E),m=L,()=>{o.removeEventListener(Iy,E),m=null}},createHref(L){return e(o,L)},createURL:q,encodeLocation(L){let H=q(L);return{pathname:H.pathname,search:H.search,hash:H.hash}},push:I,replace:P,go(L){return u.go(L)}};return O}function iT(n,e,t=!1){let i="http://localhost";n&&(i=n.location.origin!=="null"?n.location.origin:n.location.href),rt(i,"No window.location.(origin|href) available to create URL");let o=typeof e=="string"?e:cl(e);return o=o.replace(/ $/,"%20"),!t&&o.startsWith("//")&&(o=i+o),new URL(o,i)}function x_(n,e,t="/"){return sT(n,e,t,!1)}function sT(n,e,t,i,o){let l=typeof e=="string"?qo(e):e,u=Wr(l.pathname||"/",t);if(u==null)return null;let p=oT(n),m=null,v=vT(u);for(let w=0;m==null&&w<p.length;++w)m=gT(p[w],v,i);return m}function oT(n){let e=E_(n);return aT(e),e}function E_(n,e=[],t=[],i="",o=!1){let l=(u,p,m=o,v)=>{let w={relativePath:v===void 0?u.path||"":v,caseSensitive:u.caseSensitive===!0,childrenIndex:p,route:u};if(w.relativePath.startsWith("/")){if(!w.relativePath.startsWith(i)&&m)return;rt(w.relativePath.startsWith(i),`Absolute route path "${w.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),w.relativePath=w.relativePath.slice(i.length)}let E=Fn([i,w.relativePath]),I=t.concat(w);u.children&&u.children.length>0&&(rt(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${E}".`),E_(u.children,e,I,E,m)),!(u.path==null&&!u.index)&&e.push({path:E,score:pT(E,u.index),routesMeta:I})};return n.forEach((u,p)=>{var m;if(u.path===""||!((m=u.path)!=null&&m.includes("?")))l(u,p);else for(let v of T_(u.path))l(u,p,!0,v)}),e}function T_(n){let e=n.split("/");if(e.length===0)return[];let[t,...i]=e,o=t.endsWith("?"),l=t.replace(/\?$/,"");if(i.length===0)return o?[l,""]:[l];let u=T_(i.join("/")),p=[];return p.push(...u.map(m=>m===""?l:[l,m].join("/"))),o&&p.push(...u),p.map(m=>n.startsWith("/")&&m===""?"/":m)}function aT(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:mT(e.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}var lT=/^:[\w-]+$/,cT=3,uT=2,hT=1,dT=10,fT=-2,ky=n=>n==="*";function pT(n,e){let t=n.split("/"),i=t.length;return t.some(ky)&&(i+=fT),e&&(i+=uT),t.filter(o=>!ky(o)).reduce((o,l)=>o+(lT.test(l)?cT:l===""?hT:dT),i)}function mT(n,e){return n.length===e.length&&n.slice(0,-1).every((i,o)=>i===e[o])?n[n.length-1]-e[e.length-1]:0}function gT(n,e,t=!1){let{routesMeta:i}=n,o={},l="/",u=[];for(let p=0;p<i.length;++p){let m=i[p],v=p===i.length-1,w=l==="/"?e:e.slice(l.length)||"/",E=_u({path:m.relativePath,caseSensitive:m.caseSensitive,end:v},w),I=m.route;if(!E&&v&&t&&!i[i.length-1].route.index&&(E=_u({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},w)),!E)return null;Object.assign(o,E.params),u.push({params:o,pathname:Fn([l,E.pathname]),pathnameBase:ET(Fn([l,E.pathnameBase])),route:I}),E.pathnameBase!=="/"&&(l=Fn([l,E.pathnameBase]))}return u}function _u(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,i]=yT(n.path,n.caseSensitive,n.end),o=e.match(t);if(!o)return null;let l=o[0],u=l.replace(/(.)\/+$/,"$1"),p=o.slice(1);return{params:i.reduce((v,{paramName:w,isOptional:E},I)=>{if(w==="*"){let q=p[I]||"";u=l.slice(0,l.length-q.length).replace(/(.)\/+$/,"$1")}const P=p[I];return E&&!P?v[w]=void 0:v[w]=(P||"").replace(/%2F/g,"/"),v},{}),pathname:l,pathnameBase:u,pattern:n}}function yT(n,e=!1,t=!0){pr(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let i=[],o="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,p,m,v,w)=>{if(i.push({paramName:p,isOptional:m!=null}),m){let E=w.charAt(v+u.length);return E&&E!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return n.endsWith("*")?(i.push({paramName:"*"}),o+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":n!==""&&n!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),i]}function vT(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return pr(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),n}}function Wr(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,i=n.charAt(t);return i&&i!=="/"?null:n.slice(t)||"/"}var _T=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function wT(n,e="/"){let{pathname:t,search:i="",hash:o=""}=typeof n=="string"?qo(n):n,l;return t?(t=S_(t),t.startsWith("/")?l=Ay(t.substring(1),"/"):l=Ay(t,e)):l=e,{pathname:l,search:TT(i),hash:IT(o)}}function Ay(n,e){let t=wu(e).split("/");return n.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function Wd(n,e,t,i){return`Cannot include a '${n}' character in a manually specified \`to.${e}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function xT(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function I_(n){let e=xT(n);return e.map((t,i)=>i===e.length-1?t.pathname:t.pathnameBase)}function Wf(n,e,t,i=!1){let o;typeof n=="string"?o=qo(n):(o={...n},rt(!o.pathname||!o.pathname.includes("?"),Wd("?","pathname","search",o)),rt(!o.pathname||!o.pathname.includes("#"),Wd("#","pathname","hash",o)),rt(!o.search||!o.search.includes("#"),Wd("#","search","hash",o)));let l=n===""||o.pathname==="",u=l?"/":o.pathname,p;if(u==null)p=t;else{let E=e.length-1;if(!i&&u.startsWith("..")){let I=u.split("/");for(;I[0]==="..";)I.shift(),E-=1;o.pathname=I.join("/")}p=E>=0?e[E]:"/"}let m=wT(o,p),v=u&&u!=="/"&&u.endsWith("/"),w=(l||u===".")&&t.endsWith("/");return!m.pathname.endsWith("/")&&(v||w)&&(m.pathname+="/"),m}var S_=n=>n.replace(/\/\/+/g,"/"),Fn=n=>S_(n.join("/")),wu=n=>n.replace(/\/+$/,""),ET=n=>wu(n).replace(/^\/*/,"/"),TT=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,IT=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n,ST=class{constructor(n,e,t,i=!1){this.status=n,this.statusText=e||"",this.internal=i,t instanceof Error?(this.data=t.toString(),this.error=t):this.data=t}};function bT(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}function kT(n){let e=n.map(t=>t.route.path).filter(Boolean);return Fn(e)||"/"}var b_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function k_(n,e){let t=n;if(typeof t!="string"||!_T.test(t))return{absoluteURL:void 0,isExternal:!1,to:t};let i=t,o=!1;if(b_)try{let l=new URL(window.location.href),u=t.startsWith("//")?new URL(l.protocol+t):new URL(t),p=Wr(u.pathname,e);u.origin===l.origin&&p!=null?t=p+u.search+u.hash:o=!0}catch{pr(!1,`<Link to="${t}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:i,isExternal:o,to:t}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var A_=["POST","PUT","PATCH","DELETE"];new Set(A_);var AT=["GET",...A_];new Set(AT);var Ho=B.createContext(null);Ho.displayName="DataRouter";var $u=B.createContext(null);$u.displayName="DataRouterState";var C_=B.createContext(!1);function CT(){return B.useContext(C_)}var R_=B.createContext({isTransitioning:!1});R_.displayName="ViewTransition";var RT=B.createContext(new Map);RT.displayName="Fetchers";var NT=B.createContext(null);NT.displayName="Await";var Sn=B.createContext(null);Sn.displayName="Navigation";var Tl=B.createContext(null);Tl.displayName="Location";var Qr=B.createContext({outlet:null,matches:[],isDataRoute:!1});Qr.displayName="Route";var qf=B.createContext(null);qf.displayName="RouteError";var N_="REACT_ROUTER_ERROR",PT="REDIRECT",jT="ROUTE_ERROR_RESPONSE";function DT(n){if(n.startsWith(`${N_}:${PT}:{`))try{let e=JSON.parse(n.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function LT(n){if(n.startsWith(`${N_}:${jT}:{`))try{let e=JSON.parse(n.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new ST(e.status,e.statusText,e.data)}catch{}}function OT(n,{relative:e}={}){rt(Il(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:i}=B.useContext(Sn),{hash:o,pathname:l,search:u}=Sl(n,{relative:e}),p=l;return t!=="/"&&(p=l==="/"?t:Fn([t,l])),i.createHref({pathname:p,search:u,hash:o})}function Il(){return B.useContext(Tl)!=null}function yr(){return rt(Il(),"useLocation() may be used only in the context of a <Router> component."),B.useContext(Tl).location}var P_="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function j_(n){B.useContext(Sn).static||B.useLayoutEffect(n)}function Wu(){let{isDataRoute:n}=B.useContext(Qr);return n?QT():VT()}function VT(){rt(Il(),"useNavigate() may be used only in the context of a <Router> component.");let n=B.useContext(Ho),{basename:e,navigator:t}=B.useContext(Sn),{matches:i}=B.useContext(Qr),{pathname:o}=yr(),l=JSON.stringify(I_(i)),u=B.useRef(!1);return j_(()=>{u.current=!0}),B.useCallback((m,v={})=>{if(pr(u.current,P_),!u.current)return;if(typeof m=="number"){t.go(m);return}let w=Wf(m,JSON.parse(l),o,v.relative==="path");n==null&&e!=="/"&&(w.pathname=w.pathname==="/"?e:Fn([e,w.pathname])),(v.replace?t.replace:t.push)(w,v.state,v)},[e,t,l,o,n])}B.createContext(null);function Sl(n,{relative:e}={}){let{matches:t}=B.useContext(Qr),{pathname:i}=yr(),o=JSON.stringify(I_(t));return B.useMemo(()=>Wf(n,JSON.parse(o),i,e==="path"),[n,o,i,e])}function MT(n,e){return D_(n,e)}function D_(n,e,t){var L;rt(Il(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:i}=B.useContext(Sn),{matches:o}=B.useContext(Qr),l=o[o.length-1],u=l?l.params:{},p=l?l.pathname:"/",m=l?l.pathnameBase:"/",v=l&&l.route;{let H=v&&v.path||"";O_(p,!v||H.endsWith("*")||H.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${H}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${H}"> to <Route path="${H==="/"?"*":`${H}/*`}">.`)}let w=yr(),E;if(e){let H=typeof e=="string"?qo(e):e;rt(m==="/"||((L=H.pathname)==null?void 0:L.startsWith(m)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${m}" but pathname "${H.pathname}" was given in the \`location\` prop.`),E=H}else E=w;let I=E.pathname||"/",P=I;if(m!=="/"){let H=m.replace(/^\//,"").split("/");P="/"+I.replace(/^\//,"").split("/").slice(H.length).join("/")}let q=t&&t.state.matches.length?t.state.matches.map(H=>Object.assign(H,{route:t.manifest[H.route.id]||H.route})):x_(n,{pathname:P});pr(v||q!=null,`No routes matched location "${E.pathname}${E.search}${E.hash}" `),pr(q==null||q[q.length-1].route.element!==void 0||q[q.length-1].route.Component!==void 0||q[q.length-1].route.lazy!==void 0,`Matched leaf route at location "${E.pathname}${E.search}${E.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let O=$T(q&&q.map(H=>Object.assign({},H,{params:Object.assign({},u,H.params),pathname:Fn([m,i.encodeLocation?i.encodeLocation(H.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:H.pathname]),pathnameBase:H.pathnameBase==="/"?m:Fn([m,i.encodeLocation?i.encodeLocation(H.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:H.pathnameBase])})),o,t);return e&&O?B.createElement(Tl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...E},navigationType:"POP"}},O):O}function FT(){let n=KT(),e=bT(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,i="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:i},l={padding:"2px 4px",backgroundColor:i},u=null;return console.error("Error handled by React Router default ErrorBoundary:",n),u=B.createElement(B.Fragment,null,B.createElement("p",null,"💿 Hey developer 👋"),B.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",B.createElement("code",{style:l},"ErrorBoundary")," or"," ",B.createElement("code",{style:l},"errorElement")," prop on your route.")),B.createElement(B.Fragment,null,B.createElement("h2",null,"Unexpected Application Error!"),B.createElement("h3",{style:{fontStyle:"italic"}},e),t?B.createElement("pre",{style:o},t):null,u)}var UT=B.createElement(FT,null),L_=class extends B.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,e){return e.location!==n.location||e.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:e.error,location:e.location,revalidation:n.revalidation||e.revalidation}}componentDidCatch(n,e){this.props.onError?this.props.onError(n,e):console.error("React Router caught the following error during render",n)}render(){let n=this.state.error;if(this.context&&typeof n=="object"&&n&&"digest"in n&&typeof n.digest=="string"){const t=LT(n.digest);t&&(n=t)}let e=n!==void 0?B.createElement(Qr.Provider,{value:this.props.routeContext},B.createElement(qf.Provider,{value:n,children:this.props.component})):this.props.children;return this.context?B.createElement(BT,{error:n},e):e}};L_.contextType=C_;var qd=new WeakMap;function BT({children:n,error:e}){let{basename:t}=B.useContext(Sn);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let i=DT(e.digest);if(i){let o=qd.get(e);if(o)throw o;let l=k_(i.location,t);if(b_&&!qd.get(e))if(l.isExternal||i.reloadDocument)window.location.href=l.absoluteURL||l.to;else{const u=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(l.to,{replace:i.replace}));throw qd.set(e,u),u}return B.createElement("meta",{httpEquiv:"refresh",content:`0;url=${l.absoluteURL||l.to}`})}}return n}function zT({routeContext:n,match:e,children:t}){let i=B.useContext(Ho);return i&&i.static&&i.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=e.route.id),B.createElement(Qr.Provider,{value:n},t)}function $T(n,e=[],t){let i=t==null?void 0:t.state;if(n==null){if(!i)return null;if(i.errors)n=i.matches;else if(e.length===0&&!i.initialized&&i.matches.length>0)n=i.matches;else return null}let o=n,l=i==null?void 0:i.errors;if(l!=null){let w=o.findIndex(E=>E.route.id&&(l==null?void 0:l[E.route.id])!==void 0);rt(w>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),o=o.slice(0,Math.min(o.length,w+1))}let u=!1,p=-1;if(t&&i){u=i.renderFallback;for(let w=0;w<o.length;w++){let E=o[w];if((E.route.HydrateFallback||E.route.hydrateFallbackElement)&&(p=w),E.route.id){let{loaderData:I,errors:P}=i,q=E.route.loader&&!I.hasOwnProperty(E.route.id)&&(!P||P[E.route.id]===void 0);if(E.route.lazy||q){t.isStatic&&(u=!0),p>=0?o=o.slice(0,p+1):o=[o[0]];break}}}}let m=t==null?void 0:t.onError,v=i&&m?(w,E)=>{var I,P;m(w,{location:i.location,params:((P=(I=i.matches)==null?void 0:I[0])==null?void 0:P.params)??{},pattern:kT(i.matches),errorInfo:E})}:void 0;return o.reduceRight((w,E,I)=>{let P,q=!1,O=null,L=null;i&&(P=l&&E.route.id?l[E.route.id]:void 0,O=E.route.errorElement||UT,u&&(p<0&&I===0?(O_("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),q=!0,L=null):p===I&&(q=!0,L=E.route.hydrateFallbackElement||null)));let H=e.concat(o.slice(0,I+1)),Z=()=>{let ie;return P?ie=O:q?ie=L:E.route.Component?ie=B.createElement(E.route.Component,null):E.route.element?ie=E.route.element:ie=w,B.createElement(zT,{match:E,routeContext:{outlet:w,matches:H,isDataRoute:i!=null},children:ie})};return i&&(E.route.ErrorBoundary||E.route.errorElement||I===0)?B.createElement(L_,{location:i.location,revalidation:i.revalidation,component:O,error:P,children:Z(),routeContext:{outlet:null,matches:H,isDataRoute:!0},onError:v}):Z()},null)}function Hf(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function WT(n){let e=B.useContext(Ho);return rt(e,Hf(n)),e}function qT(n){let e=B.useContext($u);return rt(e,Hf(n)),e}function HT(n){let e=B.useContext(Qr);return rt(e,Hf(n)),e}function Gf(n){let e=HT(n),t=e.matches[e.matches.length-1];return rt(t.route.id,`${n} can only be used on routes that contain a unique "id"`),t.route.id}function GT(){return Gf("useRouteId")}function KT(){var i;let n=B.useContext(qf),e=qT("useRouteError"),t=Gf("useRouteError");return n!==void 0?n:(i=e.errors)==null?void 0:i[t]}function QT(){let{router:n}=WT("useNavigate"),e=Gf("useNavigate"),t=B.useRef(!1);return j_(()=>{t.current=!0}),B.useCallback(async(o,l={})=>{pr(t.current,P_),t.current&&(typeof o=="number"?await n.navigate(o):await n.navigate(o,{fromRouteId:e,...l}))},[n,e])}var Cy={};function O_(n,e,t){!e&&!Cy[n]&&(Cy[n]=!0,pr(!1,t))}B.memo(YT);function YT({routes:n,manifest:e,future:t,state:i,isStatic:o,onError:l}){return D_(n,void 0,{manifest:e,state:i,isStatic:o,onError:l})}function _n(n){rt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function JT({basename:n="/",children:e=null,location:t,navigationType:i="POP",navigator:o,static:l=!1,useTransitions:u}){rt(!Il(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let p=n.replace(/^\/*/,"/"),m=B.useMemo(()=>({basename:p,navigator:o,static:l,useTransitions:u,future:{}}),[p,o,l,u]);typeof t=="string"&&(t=qo(t));let{pathname:v="/",search:w="",hash:E="",state:I=null,key:P="default",mask:q}=t,O=B.useMemo(()=>{let L=Wr(v,p);return L==null?null:{location:{pathname:L,search:w,hash:E,state:I,key:P,mask:q},navigationType:i}},[p,v,w,E,I,P,i,q]);return pr(O!=null,`<Router basename="${p}"> is not able to match the URL "${v}${w}${E}" because it does not start with the basename, so the <Router> won't render anything.`),O==null?null:B.createElement(Sn.Provider,{value:m},B.createElement(Tl.Provider,{children:e,value:O}))}function XT({children:n,location:e}){return MT(mf(n),e)}function mf(n,e=[]){let t=[];return B.Children.forEach(n,(i,o)=>{if(!B.isValidElement(i))return;let l=[...e,o];if(i.type===B.Fragment){t.push.apply(t,mf(i.props.children,l));return}rt(i.type===_n,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),rt(!i.props.index||!i.props.children,"An index route cannot have child routes.");let u={id:i.props.id||l.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,middleware:i.props.middleware,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(u.children=mf(i.props.children,l)),t.push(u)}),t}var ou="get",au="application/x-www-form-urlencoded";function qu(n){return typeof HTMLElement<"u"&&n instanceof HTMLElement}function ZT(n){return qu(n)&&n.tagName.toLowerCase()==="button"}function eI(n){return qu(n)&&n.tagName.toLowerCase()==="form"}function tI(n){return qu(n)&&n.tagName.toLowerCase()==="input"}function nI(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function rI(n,e){return n.button===0&&(!e||e==="_self")&&!nI(n)}var Zc=null;function iI(){if(Zc===null)try{new FormData(document.createElement("form"),0),Zc=!1}catch{Zc=!0}return Zc}var sI=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Hd(n){return n!=null&&!sI.has(n)?(pr(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${au}"`),null):n}function oI(n,e){let t,i,o,l,u;if(eI(n)){let p=n.getAttribute("action");i=p?Wr(p,e):null,t=n.getAttribute("method")||ou,o=Hd(n.getAttribute("enctype"))||au,l=new FormData(n)}else if(ZT(n)||tI(n)&&(n.type==="submit"||n.type==="image")){let p=n.form;if(p==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=n.getAttribute("formaction")||p.getAttribute("action");if(i=m?Wr(m,e):null,t=n.getAttribute("formmethod")||p.getAttribute("method")||ou,o=Hd(n.getAttribute("formenctype"))||Hd(p.getAttribute("enctype"))||au,l=new FormData(p,n),!iI()){let{name:v,type:w,value:E}=n;if(w==="image"){let I=v?`${v}.`:"";l.append(`${I}x`,"0"),l.append(`${I}y`,"0")}else v&&l.append(v,E)}}else{if(qu(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=ou,i=null,o=au,u=n}return l&&o==="text/plain"&&(u=l,l=void 0),{action:i,method:t.toLowerCase(),encType:o,formData:l,body:u}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Kf(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function V_(n,e,t,i){let o=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return t?o.pathname.endsWith("/")?o.pathname=`${o.pathname}_.${i}`:o.pathname=`${o.pathname}.${i}`:o.pathname==="/"?o.pathname=`_root.${i}`:e&&Wr(o.pathname,e)==="/"?o.pathname=`${wu(e)}/_root.${i}`:o.pathname=`${wu(o.pathname)}.${i}`,o}async function aI(n,e){if(n.id in e)return e[n.id];try{let t=await import(n.module);return e[n.id]=t,t}catch(t){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function lI(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function cI(n,e,t){let i=await Promise.all(n.map(async o=>{let l=e.routes[o.route.id];if(l){let u=await aI(l,t);return u.links?u.links():[]}return[]}));return fI(i.flat(1).filter(lI).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function Ry(n,e,t,i,o,l){let u=(m,v)=>t[v]?m.route.id!==t[v].route.id:!0,p=(m,v)=>{var w;return t[v].pathname!==m.pathname||((w=t[v].route.path)==null?void 0:w.endsWith("*"))&&t[v].params["*"]!==m.params["*"]};return l==="assets"?e.filter((m,v)=>u(m,v)||p(m,v)):l==="data"?e.filter((m,v)=>{var E;let w=i.routes[m.route.id];if(!w||!w.hasLoader)return!1;if(u(m,v)||p(m,v))return!0;if(m.route.shouldRevalidate){let I=m.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((E=t[0])==null?void 0:E.params)||{},nextUrl:new URL(n,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof I=="boolean")return I}return!0}):[]}function uI(n,e,{includeHydrateFallback:t}={}){return hI(n.map(i=>{let o=e.routes[i.route.id];if(!o)return[];let l=[o.module];return o.clientActionModule&&(l=l.concat(o.clientActionModule)),o.clientLoaderModule&&(l=l.concat(o.clientLoaderModule)),t&&o.hydrateFallbackModule&&(l=l.concat(o.hydrateFallbackModule)),o.imports&&(l=l.concat(o.imports)),l}).flat(1))}function hI(n){return[...new Set(n)]}function dI(n){let e={},t=Object.keys(n).sort();for(let i of t)e[i]=n[i];return e}function fI(n,e){let t=new Set;return new Set(e),n.reduce((i,o)=>{let l=JSON.stringify(dI(o));return t.has(l)||(t.add(l),i.push({key:l,link:o})),i},[])}function Qf(){let n=B.useContext(Ho);return Kf(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function pI(){let n=B.useContext($u);return Kf(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var Yf=B.createContext(void 0);Yf.displayName="FrameworkContext";function Jf(){let n=B.useContext(Yf);return Kf(n,"You must render this element inside a <HydratedRouter> element"),n}function mI(n,e){let t=B.useContext(Yf),[i,o]=B.useState(!1),[l,u]=B.useState(!1),{onFocus:p,onBlur:m,onMouseEnter:v,onMouseLeave:w,onTouchStart:E}=e,I=B.useRef(null);B.useEffect(()=>{if(n==="render"&&u(!0),n==="viewport"){let O=H=>{H.forEach(Z=>{u(Z.isIntersecting)})},L=new IntersectionObserver(O,{threshold:.5});return I.current&&L.observe(I.current),()=>{L.disconnect()}}},[n]),B.useEffect(()=>{if(i){let O=setTimeout(()=>{u(!0)},100);return()=>{clearTimeout(O)}}},[i]);let P=()=>{o(!0)},q=()=>{o(!1),u(!1)};return t?n!=="intent"?[l,I,{}]:[l,I,{onFocus:Ya(p,P),onBlur:Ya(m,q),onMouseEnter:Ya(v,P),onMouseLeave:Ya(w,q),onTouchStart:Ya(E,P)}]:[!1,I,{}]}function Ya(n,e){return t=>{n&&n(t),t.defaultPrevented||e(t)}}function gI({page:n,...e}){let t=CT(),{router:i}=Qf(),o=B.useMemo(()=>x_(i.routes,n,i.basename),[i.routes,n,i.basename]);return o?t?B.createElement(vI,{page:n,matches:o,...e}):B.createElement(_I,{page:n,matches:o,...e}):null}function yI(n){let{manifest:e,routeModules:t}=Jf(),[i,o]=B.useState([]);return B.useEffect(()=>{let l=!1;return cI(n,e,t).then(u=>{l||o(u)}),()=>{l=!0}},[n,e,t]),i}function vI({page:n,matches:e,...t}){let i=yr(),{future:o}=Jf(),{basename:l}=Qf(),u=B.useMemo(()=>{if(n===i.pathname+i.search+i.hash)return[];let p=V_(n,l,o.v8_trailingSlashAwareDataRequests,"rsc"),m=!1,v=[];for(let w of e)typeof w.route.shouldRevalidate=="function"?m=!0:v.push(w.route.id);return m&&v.length>0&&p.searchParams.set("_routes",v.join(",")),[p.pathname+p.search]},[l,o.v8_trailingSlashAwareDataRequests,n,i,e]);return B.createElement(B.Fragment,null,u.map(p=>B.createElement("link",{key:p,rel:"prefetch",as:"fetch",href:p,...t})))}function _I({page:n,matches:e,...t}){let i=yr(),{future:o,manifest:l,routeModules:u}=Jf(),{basename:p}=Qf(),{loaderData:m,matches:v}=pI(),w=B.useMemo(()=>Ry(n,e,v,l,i,"data"),[n,e,v,l,i]),E=B.useMemo(()=>Ry(n,e,v,l,i,"assets"),[n,e,v,l,i]),I=B.useMemo(()=>{if(n===i.pathname+i.search+i.hash)return[];let O=new Set,L=!1;if(e.forEach(Z=>{var ne;let ie=l.routes[Z.route.id];!ie||!ie.hasLoader||(!w.some(fe=>fe.route.id===Z.route.id)&&Z.route.id in m&&((ne=u[Z.route.id])!=null&&ne.shouldRevalidate)||ie.hasClientLoader?L=!0:O.add(Z.route.id))}),O.size===0)return[];let H=V_(n,p,o.v8_trailingSlashAwareDataRequests,"data");return L&&O.size>0&&H.searchParams.set("_routes",e.filter(Z=>O.has(Z.route.id)).map(Z=>Z.route.id).join(",")),[H.pathname+H.search]},[p,o.v8_trailingSlashAwareDataRequests,m,i,l,w,e,n,u]),P=B.useMemo(()=>uI(E,l),[E,l]),q=yI(E);return B.createElement(B.Fragment,null,I.map(O=>B.createElement("link",{key:O,rel:"prefetch",as:"fetch",href:O,...t})),P.map(O=>B.createElement("link",{key:O,rel:"modulepreload",href:O,...t})),q.map(({key:O,link:L})=>B.createElement("link",{key:O,nonce:t.nonce,...L,crossOrigin:L.crossOrigin??t.crossOrigin})))}function wI(...n){return e=>{n.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var xI=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{xI&&(window.__reactRouterVersion="7.16.0")}catch{}function EI({basename:n,children:e,useTransitions:t,window:i}){let o=B.useRef();o.current==null&&(o.current=tT({window:i,v5Compat:!0}));let l=o.current,[u,p]=B.useState({action:l.action,location:l.location}),m=B.useCallback(v=>{t===!1?p(v):B.startTransition(()=>p(v))},[t]);return B.useLayoutEffect(()=>l.listen(m),[l,m]),B.createElement(JT,{basename:n,children:e,location:u.location,navigationType:u.action,navigator:l,useTransitions:t})}var M_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,$e=B.forwardRef(function({onClick:e,discover:t="render",prefetch:i="none",relative:o,reloadDocument:l,replace:u,mask:p,state:m,target:v,to:w,preventScrollReset:E,viewTransition:I,defaultShouldRevalidate:P,...q},O){let{basename:L,navigator:H,useTransitions:Z}=B.useContext(Sn),ie=typeof w=="string"&&M_.test(w),ne=k_(w,L);w=ne.to;let fe=OT(w,{relative:o}),Ie=yr(),R=null;if(p){let We=Wf(p,[],Ie.mask?Ie.mask.pathname:"/",!0);L!=="/"&&(We.pathname=We.pathname==="/"?L:Fn([L,We.pathname])),R=H.createHref(We)}let[b,A,D]=mI(i,q),N=bI(w,{replace:u,mask:p,state:m,target:v,preventScrollReset:E,relative:o,viewTransition:I,defaultShouldRevalidate:P,useTransitions:Z});function M(We){e&&e(We),We.defaultPrevented||N(We)}let k=!(ne.isExternal||l),Be=B.createElement("a",{...q,...D,href:(k?R:void 0)||ne.absoluteURL||fe,onClick:k?M:e,ref:wI(O,A),target:v,"data-discover":!ie&&t==="render"?"true":void 0});return b&&!ie?B.createElement(B.Fragment,null,Be,B.createElement(gI,{page:fe})):Be});$e.displayName="Link";var TI=B.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:i="",end:o=!1,style:l,to:u,viewTransition:p,children:m,...v},w){let E=Sl(u,{relative:v.relative}),I=yr(),P=B.useContext($u),{navigator:q,basename:O}=B.useContext(Sn),L=P!=null&&NI(E)&&p===!0,H=q.encodeLocation?q.encodeLocation(E).pathname:E.pathname,Z=I.pathname,ie=P&&P.navigation&&P.navigation.location?P.navigation.location.pathname:null;t||(Z=Z.toLowerCase(),ie=ie?ie.toLowerCase():null,H=H.toLowerCase()),ie&&O&&(ie=Wr(ie,O)||ie);const ne=H!=="/"&&H.endsWith("/")?H.length-1:H.length;let fe=Z===H||!o&&Z.startsWith(H)&&Z.charAt(ne)==="/",Ie=ie!=null&&(ie===H||!o&&ie.startsWith(H)&&ie.charAt(H.length)==="/"),R={isActive:fe,isPending:Ie,isTransitioning:L},b=fe?e:void 0,A;typeof i=="function"?A=i(R):A=[i,fe?"active":null,Ie?"pending":null,L?"transitioning":null].filter(Boolean).join(" ");let D=typeof l=="function"?l(R):l;return B.createElement($e,{...v,"aria-current":b,className:A,ref:w,style:D,to:u,viewTransition:p},typeof m=="function"?m(R):m)});TI.displayName="NavLink";var II=B.forwardRef(({discover:n="render",fetcherKey:e,navigate:t,reloadDocument:i,replace:o,state:l,method:u=ou,action:p,onSubmit:m,relative:v,preventScrollReset:w,viewTransition:E,defaultShouldRevalidate:I,...P},q)=>{let{useTransitions:O}=B.useContext(Sn),L=CI(),H=RI(p,{relative:v}),Z=u.toLowerCase()==="get"?"get":"post",ie=typeof p=="string"&&M_.test(p),ne=fe=>{if(m&&m(fe),fe.defaultPrevented)return;fe.preventDefault();let Ie=fe.nativeEvent.submitter,R=(Ie==null?void 0:Ie.getAttribute("formmethod"))||u,b=()=>L(Ie||fe.currentTarget,{fetcherKey:e,method:R,navigate:t,replace:o,state:l,relative:v,preventScrollReset:w,viewTransition:E,defaultShouldRevalidate:I});O&&t!==!1?B.startTransition(()=>b()):b()};return B.createElement("form",{ref:q,method:Z,action:H,onSubmit:i?m:ne,...P,"data-discover":!ie&&n==="render"?"true":void 0})});II.displayName="Form";function SI(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function F_(n){let e=B.useContext(Ho);return rt(e,SI(n)),e}function bI(n,{target:e,replace:t,mask:i,state:o,preventScrollReset:l,relative:u,viewTransition:p,defaultShouldRevalidate:m,useTransitions:v}={}){let w=Wu(),E=yr(),I=Sl(n,{relative:u});return B.useCallback(P=>{if(rI(P,e)){P.preventDefault();let q=t!==void 0?t:cl(E)===cl(I),O=()=>w(n,{replace:q,mask:i,state:o,preventScrollReset:l,relative:u,viewTransition:p,defaultShouldRevalidate:m});v?B.startTransition(()=>O()):O()}},[E,w,I,t,i,o,e,n,l,u,p,m,v])}var kI=0,AI=()=>`__${String(++kI)}__`;function CI(){let{router:n}=F_("useSubmit"),{basename:e}=B.useContext(Sn),t=GT(),i=n.fetch,o=n.navigate;return B.useCallback(async(l,u={})=>{let{action:p,method:m,encType:v,formData:w,body:E}=oI(l,e);if(u.navigate===!1){let I=u.fetcherKey||AI();await i(I,t,u.action||p,{defaultShouldRevalidate:u.defaultShouldRevalidate,preventScrollReset:u.preventScrollReset,formData:w,body:E,formMethod:u.method||m,formEncType:u.encType||v,flushSync:u.flushSync})}else await o(u.action||p,{defaultShouldRevalidate:u.defaultShouldRevalidate,preventScrollReset:u.preventScrollReset,formData:w,body:E,formMethod:u.method||m,formEncType:u.encType||v,replace:u.replace,state:u.state,fromRouteId:t,flushSync:u.flushSync,viewTransition:u.viewTransition})},[i,o,e,t])}function RI(n,{relative:e}={}){let{basename:t}=B.useContext(Sn),i=B.useContext(Qr);rt(i,"useFormAction must be used inside a RouteContext");let[o]=i.matches.slice(-1),l={...Sl(n||".",{relative:e})},u=yr();if(n==null){l.search=u.search;let p=new URLSearchParams(l.search),m=p.getAll("index");if(m.some(w=>w==="")){p.delete("index"),m.filter(E=>E).forEach(E=>p.append("index",E));let w=p.toString();l.search=w?`?${w}`:""}}return(!n||n===".")&&o.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(l.pathname=l.pathname==="/"?t:Fn([t,l.pathname])),cl(l)}function NI(n,{relative:e}={}){let t=B.useContext(R_);rt(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=F_("useViewTransitionState"),o=Sl(n,{relative:e});if(!t.isTransitioning)return!1;let l=Wr(t.currentLocation.pathname,i)||t.currentLocation.pathname,u=Wr(t.nextLocation.pathname,i)||t.nextLocation.pathname;return _u(o.pathname,u)!=null||_u(o.pathname,l)!=null}const PI=()=>{};var Ny={};/**
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
 */const U_=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let o=n.charCodeAt(i);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},jI=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const o=n[t++];if(o<128)e[i++]=String.fromCharCode(o);else if(o>191&&o<224){const l=n[t++];e[i++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=n[t++],u=n[t++],p=n[t++],m=((o&7)<<18|(l&63)<<12|(u&63)<<6|p&63)-65536;e[i++]=String.fromCharCode(55296+(m>>10)),e[i++]=String.fromCharCode(56320+(m&1023))}else{const l=n[t++],u=n[t++];e[i++]=String.fromCharCode((o&15)<<12|(l&63)<<6|u&63)}}return e.join("")},B_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let o=0;o<n.length;o+=3){const l=n[o],u=o+1<n.length,p=u?n[o+1]:0,m=o+2<n.length,v=m?n[o+2]:0,w=l>>2,E=(l&3)<<4|p>>4;let I=(p&15)<<2|v>>6,P=v&63;m||(P=64,u||(I=64)),i.push(t[w],t[E],t[I],t[P])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(U_(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):jI(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let o=0;o<n.length;){const l=t[n.charAt(o++)],p=o<n.length?t[n.charAt(o)]:0;++o;const v=o<n.length?t[n.charAt(o)]:64;++o;const E=o<n.length?t[n.charAt(o)]:64;if(++o,l==null||p==null||v==null||E==null)throw new DI;const I=l<<2|p>>4;if(i.push(I),v!==64){const P=p<<4&240|v>>2;if(i.push(P),E!==64){const q=v<<6&192|E;i.push(q)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class DI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const LI=function(n){const e=U_(n);return B_.encodeByteArray(e,!0)},xu=function(n){return LI(n).replace(/\./g,"")},z_=function(n){try{return B_.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function OI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const VI=()=>OI().__FIREBASE_DEFAULTS__,MI=()=>{if(typeof process>"u"||typeof Ny>"u")return;const n=Ny.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},FI=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&z_(n[1]);return e&&JSON.parse(e)},Hu=()=>{try{return PI()||VI()||MI()||FI()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},$_=n=>{var e,t;return(t=(e=Hu())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},UI=n=>{const e=$_(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},W_=()=>{var n;return(n=Hu())==null?void 0:n.config},q_=n=>{var e;return(e=Hu())==null?void 0:e[`_${n}`]};/**
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
 */class BI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function zI(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",o=n.iat||0,l=n.sub||n.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u={iss:`https://securetoken.google.com/${i}`,aud:i,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}},...n};return[xu(JSON.stringify(t)),xu(JSON.stringify(u)),""].join(".")}/**
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
 */function $t(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function $I(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test($t())}function WI(){var e;const n=(e=Hu())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function qI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function HI(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function GI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function KI(){const n=$t();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function QI(){return!WI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function H_(){try{return typeof indexedDB=="object"}catch{return!1}}function G_(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(i);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var l;e(((l=o.error)==null?void 0:l.message)||"")}}catch(t){e(t)}})}function YI(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const JI="FirebaseError";class vr extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=JI,Object.setPrototypeOf(this,vr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Os.prototype.create)}}class Os{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},o=`${this.service}/${e}`,l=this.errors[e],u=l?XI(l,i):"Error",p=`${this.serviceName}: ${u} (${o}).`;return new vr(o,p,i)}}function XI(n,e){return n.replace(ZI,(t,i)=>{const o=e[i];return o!=null?String(o):`<${i}?>`})}const ZI=/\{\$([^}]+)}/g;function eS(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function As(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const o of t){if(!i.includes(o))return!1;const l=n[o],u=e[o];if(Py(l)&&Py(u)){if(!As(l,u))return!1}else if(l!==u)return!1}for(const o of i)if(!t.includes(o))return!1;return!0}function Py(n){return n!==null&&typeof n=="object"}/**
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
 */function bl(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function Xa(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[o,l]=i.split("=");e[decodeURIComponent(o)]=decodeURIComponent(l)}}),e}function Za(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function tS(n,e){const t=new nS(n,e);return t.subscribe.bind(t)}class nS{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let o;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");rS(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:i},o.next===void 0&&(o.next=Gd),o.error===void 0&&(o.error=Gd),o.complete===void 0&&(o.complete=Gd);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function rS(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Gd(){}/**
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
 */function vt(n){return n&&n._delegate?n._delegate:n}/**
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
 */function kl(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function K_(n){return(await fetch(n,{credentials:"include"})).ok}class $n{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Es="[DEFAULT]";/**
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
 */class iS{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new BI;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&i.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(oS(e))try{this.getOrInitializeService({instanceIdentifier:Es})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:o});i.resolve(l)}catch{}}}}clearInstance(e=Es){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Es){return this.instances.has(e)}getOptions(e=Es){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[l,u]of this.instancesDeferred.entries()){const p=this.normalizeInstanceIdentifier(l);i===p&&u.resolve(o)}return o}onInit(e,t){const i=this.normalizeInstanceIdentifier(t),o=this.onInitCallbacks.get(i)??new Set;o.add(e),this.onInitCallbacks.set(i,o);const l=this.instances.get(i);return l&&e(l,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const o of i)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:sS(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Es){return this.component?this.component.multipleInstances?e:Es:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function sS(n){return n===Es?void 0:n}function oS(n){return n.instantiationMode==="EAGER"}/**
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
 */class aS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new iS(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Re;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Re||(Re={}));const lS={debug:Re.DEBUG,verbose:Re.VERBOSE,info:Re.INFO,warn:Re.WARN,error:Re.ERROR,silent:Re.SILENT},cS=Re.INFO,uS={[Re.DEBUG]:"log",[Re.VERBOSE]:"log",[Re.INFO]:"info",[Re.WARN]:"warn",[Re.ERROR]:"error"},hS=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),o=uS[e];if(o)console[o](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Xf{constructor(e){this.name=e,this._logLevel=cS,this._logHandler=hS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?lS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Re.DEBUG,...e),this._logHandler(this,Re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Re.VERBOSE,...e),this._logHandler(this,Re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Re.INFO,...e),this._logHandler(this,Re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Re.WARN,...e),this._logHandler(this,Re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Re.ERROR,...e),this._logHandler(this,Re.ERROR,...e)}}const dS=(n,e)=>e.some(t=>n instanceof t);let jy,Dy;function fS(){return jy||(jy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function pS(){return Dy||(Dy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Q_=new WeakMap,gf=new WeakMap,Y_=new WeakMap,Kd=new WeakMap,Zf=new WeakMap;function mS(n){const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("success",l),n.removeEventListener("error",u)},l=()=>{t(Br(n.result)),o()},u=()=>{i(n.error),o()};n.addEventListener("success",l),n.addEventListener("error",u)});return e.then(t=>{t instanceof IDBCursor&&Q_.set(t,n)}).catch(()=>{}),Zf.set(e,n),e}function gS(n){if(gf.has(n))return;const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("complete",l),n.removeEventListener("error",u),n.removeEventListener("abort",u)},l=()=>{t(),o()},u=()=>{i(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",l),n.addEventListener("error",u),n.addEventListener("abort",u)});gf.set(n,e)}let yf={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return gf.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Y_.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Br(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function yS(n){yf=n(yf)}function vS(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Qd(this),e,...t);return Y_.set(i,e.sort?e.sort():[e]),Br(i)}:pS().includes(n)?function(...e){return n.apply(Qd(this),e),Br(Q_.get(this))}:function(...e){return Br(n.apply(Qd(this),e))}}function _S(n){return typeof n=="function"?vS(n):(n instanceof IDBTransaction&&gS(n),dS(n,fS())?new Proxy(n,yf):n)}function Br(n){if(n instanceof IDBRequest)return mS(n);if(Kd.has(n))return Kd.get(n);const e=_S(n);return e!==n&&(Kd.set(n,e),Zf.set(e,n)),e}const Qd=n=>Zf.get(n);function Gu(n,e,{blocked:t,upgrade:i,blocking:o,terminated:l}={}){const u=indexedDB.open(n,e),p=Br(u);return i&&u.addEventListener("upgradeneeded",m=>{i(Br(u.result),m.oldVersion,m.newVersion,Br(u.transaction),m)}),t&&u.addEventListener("blocked",m=>t(m.oldVersion,m.newVersion,m)),p.then(m=>{l&&m.addEventListener("close",()=>l()),o&&m.addEventListener("versionchange",v=>o(v.oldVersion,v.newVersion,v))}).catch(()=>{}),p}function Yd(n,{blocked:e}={}){const t=indexedDB.deleteDatabase(n);return e&&t.addEventListener("blocked",i=>e(i.oldVersion,i)),Br(t).then(()=>{})}const wS=["get","getKey","getAll","getAllKeys","count"],xS=["put","add","delete","clear"],Jd=new Map;function Ly(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Jd.get(e))return Jd.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,o=xS.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(o||wS.includes(t)))return;const l=async function(u,...p){const m=this.transaction(u,o?"readwrite":"readonly");let v=m.store;return i&&(v=v.index(p.shift())),(await Promise.all([v[t](...p),o&&m.done]))[0]};return Jd.set(e,l),l}yS(n=>({...n,get:(e,t,i)=>Ly(e,t)||n.get(e,t,i),has:(e,t)=>!!Ly(e,t)||n.has(e,t)}));/**
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
 */class ES{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(TS(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function TS(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const vf="@firebase/app",Oy="0.14.11";/**
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
 */const qr=new Xf("@firebase/app"),IS="@firebase/app-compat",SS="@firebase/analytics-compat",bS="@firebase/analytics",kS="@firebase/app-check-compat",AS="@firebase/app-check",CS="@firebase/auth",RS="@firebase/auth-compat",NS="@firebase/database",PS="@firebase/data-connect",jS="@firebase/database-compat",DS="@firebase/functions",LS="@firebase/functions-compat",OS="@firebase/installations",VS="@firebase/installations-compat",MS="@firebase/messaging",FS="@firebase/messaging-compat",US="@firebase/performance",BS="@firebase/performance-compat",zS="@firebase/remote-config",$S="@firebase/remote-config-compat",WS="@firebase/storage",qS="@firebase/storage-compat",HS="@firebase/firestore",GS="@firebase/ai",KS="@firebase/firestore-compat",QS="firebase",YS="12.12.0";/**
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
 */const _f="[DEFAULT]",JS={[vf]:"fire-core",[IS]:"fire-core-compat",[bS]:"fire-analytics",[SS]:"fire-analytics-compat",[AS]:"fire-app-check",[kS]:"fire-app-check-compat",[CS]:"fire-auth",[RS]:"fire-auth-compat",[NS]:"fire-rtdb",[PS]:"fire-data-connect",[jS]:"fire-rtdb-compat",[DS]:"fire-fn",[LS]:"fire-fn-compat",[OS]:"fire-iid",[VS]:"fire-iid-compat",[MS]:"fire-fcm",[FS]:"fire-fcm-compat",[US]:"fire-perf",[BS]:"fire-perf-compat",[zS]:"fire-rc",[$S]:"fire-rc-compat",[WS]:"fire-gcs",[qS]:"fire-gcs-compat",[HS]:"fire-fst",[KS]:"fire-fst-compat",[GS]:"fire-vertex","fire-js":"fire-js",[QS]:"fire-js-all"};/**
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
 */const Eu=new Map,XS=new Map,wf=new Map;function Vy(n,e){try{n.container.addComponent(e)}catch(t){qr.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function mr(n){const e=n.name;if(wf.has(e))return qr.debug(`There were multiple attempts to register component ${e}.`),!1;wf.set(e,n);for(const t of Eu.values())Vy(t,n);for(const t of XS.values())Vy(t,n);return!0}function Go(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function un(n){return n==null?!1:n.settings!==void 0}/**
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
 */const ZS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Li=new Os("app","Firebase",ZS);/**
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
 */class eb{constructor(e,t,i){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new $n("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Li.create("app-deleted",{appName:this._name})}}/**
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
 */const Ko=YS;function J_(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i={name:_f,automaticDataCollectionEnabled:!0,...e},o=i.name;if(typeof o!="string"||!o)throw Li.create("bad-app-name",{appName:String(o)});if(t||(t=W_()),!t)throw Li.create("no-options");const l=Eu.get(o);if(l){if(As(t,l.options)&&As(i,l.config))return l;throw Li.create("duplicate-app",{appName:o})}const u=new aS(o);for(const m of wf.values())u.addComponent(m);const p=new eb(t,i,u);return Eu.set(o,p),p}function ep(n=_f){const e=Eu.get(n);if(!e&&n===_f&&W_())return J_();if(!e)throw Li.create("no-app",{appName:n});return e}function En(n,e,t){let i=JS[n]??n;t&&(i+=`-${t}`);const o=i.match(/\s|\//),l=e.match(/\s|\//);if(o||l){const u=[`Unable to register library "${i}" with version "${e}":`];o&&u.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&l&&u.push("and"),l&&u.push(`version name "${e}" contains illegal characters (whitespace or "/")`),qr.warn(u.join(" "));return}mr(new $n(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const tb="firebase-heartbeat-database",nb=1,ul="firebase-heartbeat-store";let Xd=null;function X_(){return Xd||(Xd=Gu(tb,nb,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(ul)}catch(t){console.warn(t)}}}}).catch(n=>{throw Li.create("idb-open",{originalErrorMessage:n.message})})),Xd}async function rb(n){try{const t=(await X_()).transaction(ul),i=await t.objectStore(ul).get(Z_(n));return await t.done,i}catch(e){if(e instanceof vr)qr.warn(e.message);else{const t=Li.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});qr.warn(t.message)}}}async function My(n,e){try{const i=(await X_()).transaction(ul,"readwrite");await i.objectStore(ul).put(e,Z_(n)),await i.done}catch(t){if(t instanceof vr)qr.warn(t.message);else{const i=Li.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});qr.warn(i.message)}}}function Z_(n){return`${n.name}!${n.options.appId}`}/**
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
 */const ib=1024,sb=30;class ob{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new lb(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=Fy();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(u=>u.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:o}),this._heartbeatsCache.heartbeats.length>sb){const u=cb(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(u,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){qr.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Fy(),{heartbeatsToSend:i,unsentEntries:o}=ab(this._heartbeatsCache.heartbeats),l=xu(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return qr.warn(t),""}}}function Fy(){return new Date().toISOString().substring(0,10)}function ab(n,e=ib){const t=[];let i=n.slice();for(const o of n){const l=t.find(u=>u.agent===o.agent);if(l){if(l.dates.push(o.date),Uy(t)>e){l.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),Uy(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class lb{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return H_()?G_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await rb(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return My(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return My(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Uy(n){return xu(JSON.stringify({version:2,heartbeats:n})).length}function cb(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let i=1;i<n.length;i++)n[i].date<t&&(t=n[i].date,e=i);return e}/**
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
 */function ub(n){mr(new $n("platform-logger",e=>new ES(e),"PRIVATE")),mr(new $n("heartbeat",e=>new ob(e),"PRIVATE")),En(vf,Oy,n),En(vf,Oy,"esm2020"),En("fire-js","")}ub("");function ew(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const hb=ew,tw=new Os("auth","Firebase",ew());/**
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
 */const Tu=new Xf("@firebase/auth");function db(n,...e){Tu.logLevel<=Re.WARN&&Tu.warn(`Auth (${Ko}): ${n}`,...e)}function lu(n,...e){Tu.logLevel<=Re.ERROR&&Tu.error(`Auth (${Ko}): ${n}`,...e)}/**
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
 */function In(n,...e){throw np(n,...e)}function Un(n,...e){return np(n,...e)}function tp(n,e,t){const i={...hb(),[e]:t};return new Os("auth","Firebase",i).create(e,{appName:n.name})}function zr(n){return tp(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function fb(n,e,t){const i=t;if(!(e instanceof i))throw i.name!==e.constructor.name&&In(n,"argument-error"),tp(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function np(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return tw.create(n,...e)}function ve(n,e,...t){if(!n)throw np(e,...t)}function Fr(n){const e="INTERNAL ASSERTION FAILED: "+n;throw lu(e),new Error(e)}function Hr(n,e){n||Fr(e)}/**
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
 */function xf(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function pb(){return By()==="http:"||By()==="https:"}function By(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
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
 */function mb(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(pb()||HI()||"connection"in navigator)?navigator.onLine:!0}function gb(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Al{constructor(e,t){this.shortDelay=e,this.longDelay=t,Hr(t>e,"Short delay should be less than long delay!"),this.isMobile=$I()||GI()}get(){return mb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function rp(n,e){Hr(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class nw{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Fr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Fr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Fr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const yb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const vb=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],_b=new Al(3e4,6e4);function Hi(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function Yr(n,e,t,i,o={}){return rw(n,o,async()=>{let l={},u={};i&&(e==="GET"?u=i:l={body:JSON.stringify(i)});const p=bl({key:n.config.apiKey,...u}).slice(1),m=await n._getAdditionalHeaders();m["Content-Type"]="application/json",n.languageCode&&(m["X-Firebase-Locale"]=n.languageCode);const v={method:e,headers:m,...l};return qI()||(v.referrerPolicy="no-referrer"),n.emulatorConfig&&kl(n.emulatorConfig.host)&&(v.credentials="include"),nw.fetch()(await iw(n,n.config.apiHost,t,p),v)})}async function rw(n,e,t){n._canInitEmulator=!1;const i={...yb,...e};try{const o=new xb(n),l=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const u=await l.json();if("needConfirmation"in u)throw eu(n,"account-exists-with-different-credential",u);if(l.ok&&!("errorMessage"in u))return u;{const p=l.ok?u.errorMessage:u.error.message,[m,v]=p.split(" : ");if(m==="FEDERATED_USER_ID_ALREADY_LINKED")throw eu(n,"credential-already-in-use",u);if(m==="EMAIL_EXISTS")throw eu(n,"email-already-in-use",u);if(m==="USER_DISABLED")throw eu(n,"user-disabled",u);const w=i[m]||m.toLowerCase().replace(/[_\s]+/g,"-");if(v)throw tp(n,w,v);In(n,w)}}catch(o){if(o instanceof vr)throw o;In(n,"network-request-failed",{message:String(o)})}}async function Cl(n,e,t,i,o={}){const l=await Yr(n,e,t,i,o);return"mfaPendingCredential"in l&&In(n,"multi-factor-auth-required",{_serverResponse:l}),l}async function iw(n,e,t,i){const o=`${e}${t}?${i}`,l=n,u=l.config.emulator?rp(n.config,o):`${n.config.apiScheme}://${o}`;return vb.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(u).toString():u}function wb(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class xb{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(Un(this.auth,"network-request-failed")),_b.get())})}}function eu(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const o=Un(n,e,i);return o.customData._tokenResponse=t,o}function zy(n){return n!==void 0&&n.enterprise!==void 0}class Eb{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return wb(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Tb(n,e){return Yr(n,"GET","/v2/recaptchaConfig",Hi(n,e))}/**
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
 */async function Ib(n,e){return Yr(n,"POST","/v1/accounts:delete",e)}async function Iu(n,e){return Yr(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function il(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Sb(n,e=!1){const t=vt(n),i=await t.getIdToken(e),o=ip(i);ve(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,u=l==null?void 0:l.sign_in_provider;return{claims:o,token:i,authTime:il(Zd(o.auth_time)),issuedAtTime:il(Zd(o.iat)),expirationTime:il(Zd(o.exp)),signInProvider:u||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function Zd(n){return Number(n)*1e3}function ip(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return lu("JWT malformed, contained fewer than 3 sections"),null;try{const o=z_(t);return o?JSON.parse(o):(lu("Failed to decode base64 JWT payload"),null)}catch(o){return lu("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function $y(n){const e=ip(n);return ve(e,"internal-error"),ve(typeof e.exp<"u","internal-error"),ve(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Fo(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof vr&&bb(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function bb({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class kb{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const i=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ef{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=il(this.lastLoginAt),this.creationTime=il(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Su(n){var E;const e=n.auth,t=await n.getIdToken(),i=await Fo(n,Iu(e,{idToken:t}));ve(i==null?void 0:i.users.length,e,"internal-error");const o=i.users[0];n._notifyReloadListener(o);const l=(E=o.providerUserInfo)!=null&&E.length?sw(o.providerUserInfo):[],u=Cb(n.providerData,l),p=n.isAnonymous,m=!(n.email&&o.passwordHash)&&!(u!=null&&u.length),v=p?m:!1,w={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new Ef(o.createdAt,o.lastLoginAt),isAnonymous:v};Object.assign(n,w)}async function Ab(n){const e=vt(n);await Su(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Cb(n,e){return[...n.filter(i=>!e.some(o=>o.providerId===i.providerId)),...e]}function sw(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function Rb(n,e){const t=await rw(n,{},async()=>{const i=bl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=n.config,u=await iw(n,o,"/v1/token",`key=${l}`),p=await n._getAdditionalHeaders();p["Content-Type"]="application/x-www-form-urlencoded";const m={method:"POST",headers:p,body:i};return n.emulatorConfig&&kl(n.emulatorConfig.host)&&(m.credentials="include"),nw.fetch()(u,m)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Nb(n,e){return Yr(n,"POST","/v2/accounts:revokeToken",Hi(n,e))}/**
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
 */class Do{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ve(e.idToken,"internal-error"),ve(typeof e.idToken<"u","internal-error"),ve(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):$y(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ve(e.length!==0,"internal-error");const t=$y(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ve(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:o,expiresIn:l}=await Rb(e,t);this.updateTokensAndExpiration(i,o,Number(l))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:o,expirationTime:l}=t,u=new Do;return i&&(ve(typeof i=="string","internal-error",{appName:e}),u.refreshToken=i),o&&(ve(typeof o=="string","internal-error",{appName:e}),u.accessToken=o),l&&(ve(typeof l=="number","internal-error",{appName:e}),u.expirationTime=l),u}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Do,this.toJSON())}_performRefresh(){return Fr("not implemented")}}/**
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
 */function Ri(n,e){ve(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class On{constructor({uid:e,auth:t,stsTokenManager:i,...o}){this.providerId="firebase",this.proactiveRefresh=new kb(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Ef(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await Fo(this,this.stsTokenManager.getToken(this.auth,e));return ve(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Sb(this,e)}reload(){return Ab(this)}_assign(e){this!==e&&(ve(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new On({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){ve(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Su(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(un(this.auth.app))return Promise.reject(zr(this.auth));const e=await this.getIdToken();return await Fo(this,Ib(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const i=t.displayName??void 0,o=t.email??void 0,l=t.phoneNumber??void 0,u=t.photoURL??void 0,p=t.tenantId??void 0,m=t._redirectEventId??void 0,v=t.createdAt??void 0,w=t.lastLoginAt??void 0,{uid:E,emailVerified:I,isAnonymous:P,providerData:q,stsTokenManager:O}=t;ve(E&&O,e,"internal-error");const L=Do.fromJSON(this.name,O);ve(typeof E=="string",e,"internal-error"),Ri(i,e.name),Ri(o,e.name),ve(typeof I=="boolean",e,"internal-error"),ve(typeof P=="boolean",e,"internal-error"),Ri(l,e.name),Ri(u,e.name),Ri(p,e.name),Ri(m,e.name),Ri(v,e.name),Ri(w,e.name);const H=new On({uid:E,auth:e,email:o,emailVerified:I,displayName:i,isAnonymous:P,photoURL:u,phoneNumber:l,tenantId:p,stsTokenManager:L,createdAt:v,lastLoginAt:w});return q&&Array.isArray(q)&&(H.providerData=q.map(Z=>({...Z}))),m&&(H._redirectEventId=m),H}static async _fromIdTokenResponse(e,t,i=!1){const o=new Do;o.updateFromServerResponse(t);const l=new On({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:i});return await Su(l),l}static async _fromGetAccountInfoResponse(e,t,i){const o=t.users[0];ve(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?sw(o.providerUserInfo):[],u=!(o.email&&o.passwordHash)&&!(l!=null&&l.length),p=new Do;p.updateFromIdToken(i);const m=new On({uid:o.localId,auth:e,stsTokenManager:p,isAnonymous:u}),v={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new Ef(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(l!=null&&l.length)};return Object.assign(m,v),m}}/**
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
 */const Wy=new Map;function Ur(n){Hr(n instanceof Function,"Expected a class definition");let e=Wy.get(n);return e?(Hr(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Wy.set(n,e),e)}/**
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
 */class ow{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}ow.type="NONE";const qy=ow;/**
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
 */function cu(n,e,t){return`firebase:${n}:${e}:${t}`}class Lo{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:o,name:l}=this.auth;this.fullUserKey=cu(this.userKey,o.apiKey,l),this.fullPersistenceKey=cu("persistence",o.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Iu(this.auth,{idToken:e}).catch(()=>{});return t?On._fromGetAccountInfoResponse(this.auth,t,e):null}return On._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new Lo(Ur(qy),e,i);const o=(await Promise.all(t.map(async v=>{if(await v._isAvailable())return v}))).filter(v=>v);let l=o[0]||Ur(qy);const u=cu(i,e.config.apiKey,e.name);let p=null;for(const v of t)try{const w=await v._get(u);if(w){let E;if(typeof w=="string"){const I=await Iu(e,{idToken:w}).catch(()=>{});if(!I)break;E=await On._fromGetAccountInfoResponse(e,I,w)}else E=On._fromJSON(e,w);v!==l&&(p=E),l=v;break}}catch{}const m=o.filter(v=>v._shouldAllowMigration);return!l._shouldAllowMigration||!m.length?new Lo(l,e,i):(l=m[0],p&&await l._set(u,p.toJSON()),await Promise.all(t.map(async v=>{if(v!==l)try{await v._remove(u)}catch{}})),new Lo(l,e,i))}}/**
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
 */function Hy(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(uw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(aw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(dw(e))return"Blackberry";if(fw(e))return"Webos";if(lw(e))return"Safari";if((e.includes("chrome/")||cw(e))&&!e.includes("edge/"))return"Chrome";if(hw(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function aw(n=$t()){return/firefox\//i.test(n)}function lw(n=$t()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function cw(n=$t()){return/crios\//i.test(n)}function uw(n=$t()){return/iemobile/i.test(n)}function hw(n=$t()){return/android/i.test(n)}function dw(n=$t()){return/blackberry/i.test(n)}function fw(n=$t()){return/webos/i.test(n)}function sp(n=$t()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Pb(n=$t()){var e;return sp(n)&&!!((e=window.navigator)!=null&&e.standalone)}function jb(){return KI()&&document.documentMode===10}function pw(n=$t()){return sp(n)||hw(n)||fw(n)||dw(n)||/windows phone/i.test(n)||uw(n)}/**
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
 */function mw(n,e=[]){let t;switch(n){case"Browser":t=Hy($t());break;case"Worker":t=`${Hy($t())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Ko}/${i}`}/**
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
 */class Db{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=l=>new Promise((u,p)=>{try{const m=e(l);u(m)}catch(m){p(m)}});i.onAbort=t,this.queue.push(i);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function Lb(n,e={}){return Yr(n,"GET","/v2/passwordPolicy",Hi(n,e))}/**
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
 */const Ob=6;class Vb{constructor(e){var i;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??Ob,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((i=e.allowedNonAlphanumericCharacters)==null?void 0:i.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let o=0;o<e.length;o++)i=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
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
 */class Mb{constructor(e,t,i,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Gy(this),this.idTokenSubscription=new Gy(this),this.beforeStateQueue=new Db(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=tw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ur(t)),this._initializationPromise=this.queue(async()=>{var i,o,l;if(!this._deleted&&(this.persistenceManager=await Lo.create(this,e),(i=this._resolvePersistenceManagerAvailable)==null||i.call(this),!this._deleted)){if((o=this._popupRedirectResolver)!=null&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((l=this.currentUser)==null?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Iu(this,{idToken:e}),i=await On._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var l;if(un(this.app)){const u=this.app.settings.authIdToken;return u?new Promise(p=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(u).then(p,p))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let i=t,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const u=(l=this.redirectUser)==null?void 0:l._redirectEventId,p=i==null?void 0:i._redirectEventId,m=await this.tryRedirectSignIn(e);(!u||u===p)&&(m!=null&&m.user)&&(i=m.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(u){i=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(u))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ve(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Su(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=gb()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(un(this.app))return Promise.reject(zr(this));const t=e?vt(e):null;return t&&ve(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ve(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return un(this.app)?Promise.reject(zr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return un(this.app)?Promise.reject(zr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ur(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Lb(this),t=new Vb(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Os("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await Nb(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ur(e)||this._popupRedirectResolver;ve(t,this,"argument-error"),this.redirectPersistenceManager=await Lo.create(this,[Ur(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)==null?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,o){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let u=!1;const p=this._isInitialized?Promise.resolve():this._initializationPromise;if(ve(p,this,"internal-error"),p.then(()=>{u||l(this.currentUser)}),typeof t=="function"){const m=e.addObserver(t,i,o);return()=>{u=!0,m()}}else{const m=e.addObserver(t);return()=>{u=!0,m()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ve(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=mw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var o;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((o=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:o.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){var t;if(un(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&db(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Gi(n){return vt(n)}class Gy{constructor(e){this.auth=e,this.observer=null,this.addObserver=tS(t=>this.observer=t)}get next(){return ve(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Ku={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Fb(n){Ku=n}function gw(n){return Ku.loadJS(n)}function Ub(){return Ku.recaptchaEnterpriseScript}function Bb(){return Ku.gapiScript}function zb(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class $b{constructor(){this.enterprise=new Wb}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Wb{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const qb="recaptcha-enterprise",yw="NO_RECAPTCHA";class Hb{constructor(e){this.type=qb,this.auth=Gi(e)}async verify(e="verify",t=!1){async function i(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(u,p)=>{Tb(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(m=>{if(m.recaptchaKey===void 0)p(new Error("recaptcha Enterprise site key undefined"));else{const v=new Eb(m);return l.tenantId==null?l._agentRecaptchaConfig=v:l._tenantRecaptchaConfigs[l.tenantId]=v,u(v.siteKey)}}).catch(m=>{p(m)})})}function o(l,u,p){const m=window.grecaptcha;zy(m)?m.enterprise.ready(()=>{m.enterprise.execute(l,{action:e}).then(v=>{u(v)}).catch(()=>{u(yw)})}):p(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new $b().execute("siteKey",{action:"verify"}):new Promise((l,u)=>{i(this.auth).then(p=>{if(!t&&zy(window.grecaptcha))o(p,l,u);else{if(typeof window>"u"){u(new Error("RecaptchaVerifier is only supported in browser"));return}let m=Ub();m.length!==0&&(m+=p),gw(m).then(()=>{o(p,l,u)}).catch(v=>{u(v)})}}).catch(p=>{u(p)})})}}async function Ky(n,e,t,i=!1,o=!1){const l=new Hb(n);let u;if(o)u=yw;else try{u=await l.verify(t)}catch{u=await l.verify(t,!0)}const p={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in p){const m=p.phoneEnrollmentInfo.phoneNumber,v=p.phoneEnrollmentInfo.recaptchaToken;Object.assign(p,{phoneEnrollmentInfo:{phoneNumber:m,recaptchaToken:v,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in p){const m=p.phoneSignInInfo.recaptchaToken;Object.assign(p,{phoneSignInInfo:{recaptchaToken:m,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return p}return i?Object.assign(p,{captchaResp:u}):Object.assign(p,{captchaResponse:u}),Object.assign(p,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(p,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),p}async function Tf(n,e,t,i,o){var l;if((l=n._getRecaptchaConfig())!=null&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const u=await Ky(n,e,t,t==="getOobCode");return i(n,u)}else return i(n,e).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const p=await Ky(n,e,t,t==="getOobCode");return i(n,p)}else return Promise.reject(u)})}/**
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
 */function Gb(n,e){const t=Go(n,"auth");if(t.isInitialized()){const o=t.getImmediate(),l=t.getOptions();if(As(l,e??{}))return o;In(o,"already-initialized")}return t.initialize({options:e})}function Kb(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(Ur);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function Qb(n,e,t){const i=Gi(n);ve(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const o=!1,l=vw(e),{host:u,port:p}=Yb(e),m=p===null?"":`:${p}`,v={url:`${l}//${u}${m}/`},w=Object.freeze({host:u,port:p,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!i._canInitEmulator){ve(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),ve(As(v,i.config.emulator)&&As(w,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=v,i.emulatorConfig=w,i.settings.appVerificationDisabledForTesting=!0,kl(u)?K_(`${l}//${u}${m}`):Jb()}function vw(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Yb(n){const e=vw(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(i);if(o){const l=o[1];return{host:l,port:Qy(i.substr(l.length+1))}}else{const[l,u]=i.split(":");return{host:l,port:Qy(u)}}}function Qy(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Jb(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class op{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Fr("not implemented")}_getIdTokenResponse(e){return Fr("not implemented")}_linkToIdToken(e,t){return Fr("not implemented")}_getReauthenticationResolver(e){return Fr("not implemented")}}async function Xb(n,e){return Yr(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function Zb(n,e){return Cl(n,"POST","/v1/accounts:signInWithPassword",Hi(n,e))}/**
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
 */async function ek(n,e){return Cl(n,"POST","/v1/accounts:signInWithEmailLink",Hi(n,e))}async function tk(n,e){return Cl(n,"POST","/v1/accounts:signInWithEmailLink",Hi(n,e))}/**
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
 */class hl extends op{constructor(e,t,i,o=null){super("password",i),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new hl(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new hl(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Tf(e,t,"signInWithPassword",Zb);case"emailLink":return ek(e,{email:this._email,oobCode:this._password});default:In(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Tf(e,i,"signUpPassword",Xb);case"emailLink":return tk(e,{idToken:t,email:this._email,oobCode:this._password});default:In(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Oo(n,e){return Cl(n,"POST","/v1/accounts:signInWithIdp",Hi(n,e))}/**
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
 */const nk="http://localhost";class Cs extends op{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Cs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):In("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:o,...l}=t;if(!i||!o)return null;const u=new Cs(i,o);return u.idToken=l.idToken||void 0,u.accessToken=l.accessToken||void 0,u.secret=l.secret,u.nonce=l.nonce,u.pendingToken=l.pendingToken||null,u}_getIdTokenResponse(e){const t=this.buildRequest();return Oo(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Oo(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Oo(e,t)}buildRequest(){const e={requestUri:nk,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=bl(t)}return e}}/**
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
 */function rk(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ik(n){const e=Xa(Za(n)).link,t=e?Xa(Za(e)).deep_link_id:null,i=Xa(Za(n)).deep_link_id;return(i?Xa(Za(i)).link:null)||i||t||e||n}class ap{constructor(e){const t=Xa(Za(e)),i=t.apiKey??null,o=t.oobCode??null,l=rk(t.mode??null);ve(i&&o&&l,"argument-error"),this.apiKey=i,this.operation=l,this.code=o,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=ik(e);try{return new ap(t)}catch{return null}}}/**
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
 */class Qo{constructor(){this.providerId=Qo.PROVIDER_ID}static credential(e,t){return hl._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=ap.parseLink(t);return ve(i,"argument-error"),hl._fromEmailAndCode(e,i.code,i.tenantId)}}Qo.PROVIDER_ID="password";Qo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Qo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class lp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Rl extends lp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ni extends Rl{constructor(){super("facebook.com")}static credential(e){return Cs._fromParams({providerId:Ni.PROVIDER_ID,signInMethod:Ni.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ni.credentialFromTaggedObject(e)}static credentialFromError(e){return Ni.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ni.credential(e.oauthAccessToken)}catch{return null}}}Ni.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ni.PROVIDER_ID="facebook.com";/**
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
 */class Mr extends Rl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Cs._fromParams({providerId:Mr.PROVIDER_ID,signInMethod:Mr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Mr.credentialFromTaggedObject(e)}static credentialFromError(e){return Mr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return Mr.credential(t,i)}catch{return null}}}Mr.GOOGLE_SIGN_IN_METHOD="google.com";Mr.PROVIDER_ID="google.com";/**
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
 */class Pi extends Rl{constructor(){super("github.com")}static credential(e){return Cs._fromParams({providerId:Pi.PROVIDER_ID,signInMethod:Pi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pi.credentialFromTaggedObject(e)}static credentialFromError(e){return Pi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Pi.credential(e.oauthAccessToken)}catch{return null}}}Pi.GITHUB_SIGN_IN_METHOD="github.com";Pi.PROVIDER_ID="github.com";/**
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
 */class ji extends Rl{constructor(){super("twitter.com")}static credential(e,t){return Cs._fromParams({providerId:ji.PROVIDER_ID,signInMethod:ji.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ji.credentialFromTaggedObject(e)}static credentialFromError(e){return ji.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return ji.credential(t,i)}catch{return null}}}ji.TWITTER_SIGN_IN_METHOD="twitter.com";ji.PROVIDER_ID="twitter.com";/**
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
 */async function sk(n,e){return Cl(n,"POST","/v1/accounts:signUp",Hi(n,e))}/**
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
 */class Rs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,o=!1){const l=await On._fromIdTokenResponse(e,i,o),u=Yy(i);return new Rs({user:l,providerId:u,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const o=Yy(i);return new Rs({user:e,providerId:o,_tokenResponse:i,operationType:t})}}function Yy(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class bu extends vr{constructor(e,t,i,o){super(t.code,t.message),this.operationType=i,this.user=o,Object.setPrototypeOf(this,bu.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,o){return new bu(e,t,i,o)}}function _w(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?bu._fromErrorAndOperation(n,l,e,i):l})}async function ok(n,e,t=!1){const i=await Fo(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Rs._forOperation(n,"link",i)}/**
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
 */async function ak(n,e,t=!1){const{auth:i}=n;if(un(i.app))return Promise.reject(zr(i));const o="reauthenticate";try{const l=await Fo(n,_w(i,o,e,n),t);ve(l.idToken,i,"internal-error");const u=ip(l.idToken);ve(u,i,"internal-error");const{sub:p}=u;return ve(n.uid===p,i,"user-mismatch"),Rs._forOperation(n,o,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&In(i,"user-mismatch"),l}}/**
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
 */async function ww(n,e,t=!1){if(un(n.app))return Promise.reject(zr(n));const i="signIn",o=await _w(n,i,e),l=await Rs._fromIdTokenResponse(n,i,o);return t||await n._updateCurrentUser(l.user),l}async function lk(n,e){return ww(Gi(n),e)}/**
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
 */async function xw(n){const e=Gi(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function ck(n,e,t){if(un(n.app))return Promise.reject(zr(n));const i=Gi(n),u=await Tf(i,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",sk).catch(m=>{throw m.code==="auth/password-does-not-meet-requirements"&&xw(n),m}),p=await Rs._fromIdTokenResponse(i,"signIn",u);return await i._updateCurrentUser(p.user),p}function uk(n,e,t){return un(n.app)?Promise.reject(zr(n)):lk(vt(n),Qo.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&xw(n),i})}/**
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
 */async function hk(n,e){return Yr(n,"POST","/v1/accounts:update",e)}/**
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
 */async function dk(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const i=vt(n),l={idToken:await i.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},u=await Fo(i,hk(i.auth,l));i.displayName=u.displayName||null,i.photoURL=u.photoUrl||null;const p=i.providerData.find(({providerId:m})=>m==="password");p&&(p.displayName=i.displayName,p.photoURL=i.photoURL),await i._updateTokensIfNecessary(u)}function fk(n,e,t,i){return vt(n).onIdTokenChanged(e,t,i)}function pk(n,e,t){return vt(n).beforeAuthStateChanged(e,t)}function mk(n,e,t,i){return vt(n).onAuthStateChanged(e,t,i)}function ef(n){return vt(n).signOut()}const ku="__sak";/**
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
 */class Ew{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ku,"1"),this.storage.removeItem(ku),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const gk=1e3,yk=10;class Tw extends Ew{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=pw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),o=this.localCache[t];i!==o&&e(t,o,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((u,p,m)=>{this.notifyListeners(u,m)});return}const i=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const u=this.storage.getItem(i);!t&&this.localCache[i]===u||this.notifyListeners(i,u)},l=this.storage.getItem(i);jb()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,yk):o()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},gk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Tw.type="LOCAL";const vk=Tw;/**
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
 */class Iw extends Ew{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Iw.type="SESSION";const Sw=Iw;/**
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
 */function _k(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Qu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const i=new Qu(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:o,data:l}=t.data,u=this.handlersMap[o];if(!(u!=null&&u.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:o});const p=Array.from(u).map(async v=>v(t.origin,l)),m=await _k(p);t.ports[0].postMessage({status:"done",eventId:i,eventType:o,response:m})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Qu.receivers=[];/**
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
 */function cp(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class wk{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,u;return new Promise((p,m)=>{const v=cp("",20);o.port1.start();const w=setTimeout(()=>{m(new Error("unsupported_event"))},i);u={messageChannel:o,onMessage(E){const I=E;if(I.data.eventId===v)switch(I.data.status){case"ack":clearTimeout(w),l=setTimeout(()=>{m(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),p(I.data.response);break;default:clearTimeout(w),clearTimeout(l),m(new Error("invalid_response"));break}}},this.handlers.add(u),o.port1.addEventListener("message",u.onMessage),this.target.postMessage({eventType:e,eventId:v,data:t},[o.port2])}).finally(()=>{u&&this.removeMessageHandler(u)})}}/**
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
 */function ur(){return window}function xk(n){ur().location.href=n}/**
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
 */function bw(){return typeof ur().WorkerGlobalScope<"u"&&typeof ur().importScripts=="function"}async function Ek(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Tk(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function Ik(){return bw()?self:null}/**
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
 */const kw="firebaseLocalStorageDb",Sk=1,Au="firebaseLocalStorage",Aw="fbase_key";class Nl{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Yu(n,e){return n.transaction([Au],e?"readwrite":"readonly").objectStore(Au)}function bk(){const n=indexedDB.deleteDatabase(kw);return new Nl(n).toPromise()}function If(){const n=indexedDB.open(kw,Sk);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(Au,{keyPath:Aw})}catch(o){t(o)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(Au)?e(i):(i.close(),await bk(),e(await If()))})})}async function Jy(n,e,t){const i=Yu(n,!0).put({[Aw]:e,value:t});return new Nl(i).toPromise()}async function kk(n,e){const t=Yu(n,!1).get(e),i=await new Nl(t).toPromise();return i===void 0?null:i.value}function Xy(n,e){const t=Yu(n,!0).delete(e);return new Nl(t).toPromise()}const Ak=800,Ck=3;class Cw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await If(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>Ck)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return bw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Qu._getInstance(Ik()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,i;if(this.activeServiceWorker=await Ek(),!this.activeServiceWorker)return;this.sender=new wk(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(i=e[0])!=null&&i.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Tk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await If();return await Jy(e,ku,"1"),await Xy(e,ku),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>Jy(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>kk(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Xy(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=Yu(o,!1).getAll();return new Nl(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)i.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!i.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ak)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Cw.type="LOCAL";const Rk=Cw;new Al(3e4,6e4);/**
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
 */function Rw(n,e){return e?Ur(e):(ve(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class up extends op{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Oo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Oo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Oo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Nk(n){return ww(n.auth,new up(n),n.bypassAuthState)}function Pk(n){const{auth:e,user:t}=n;return ve(t,e,"internal-error"),ak(t,new up(n),n.bypassAuthState)}async function jk(n){const{auth:e,user:t}=n;return ve(t,e,"internal-error"),ok(t,new up(n),n.bypassAuthState)}/**
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
 */class Nw{constructor(e,t,i,o,l=!1){this.auth=e,this.resolver=i,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:o,tenantId:l,error:u,type:p}=e;if(u){this.reject(u);return}const m={auth:this.auth,requestUri:t,sessionId:i,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(p)(m))}catch(v){this.reject(v)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Nk;case"linkViaPopup":case"linkViaRedirect":return jk;case"reauthViaPopup":case"reauthViaRedirect":return Pk;default:In(this.auth,"internal-error")}}resolve(e){Hr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Hr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Dk=new Al(2e3,1e4);async function Lk(n,e,t){if(un(n.app))return Promise.reject(Un(n,"operation-not-supported-in-this-environment"));const i=Gi(n);fb(n,e,lp);const o=Rw(i,t);return new Ts(i,"signInViaPopup",e,o).executeNotNull()}class Ts extends Nw{constructor(e,t,i,o,l){super(e,t,o,l),this.provider=i,this.authWindow=null,this.pollId=null,Ts.currentPopupAction&&Ts.currentPopupAction.cancel(),Ts.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ve(e,this.auth,"internal-error"),e}async onExecution(){Hr(this.filter.length===1,"Popup operations only handle one event");const e=cp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Un(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Un(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ts.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if((i=(t=this.authWindow)==null?void 0:t.window)!=null&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Un(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Dk.get())};e()}}Ts.currentPopupAction=null;/**
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
 */const Ok="pendingRedirect",uu=new Map;class Vk extends Nw{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=uu.get(this.auth._key());if(!e){try{const i=await Mk(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}uu.set(this.auth._key(),e)}return this.bypassAuthState||uu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Mk(n,e){const t=Bk(e),i=Uk(n);if(!await i._isAvailable())return!1;const o=await i._get(t)==="true";return await i._remove(t),o}function Fk(n,e){uu.set(n._key(),e)}function Uk(n){return Ur(n._redirectPersistence)}function Bk(n){return cu(Ok,n.config.apiKey,n.name)}async function zk(n,e,t=!1){if(un(n.app))return Promise.reject(zr(n));const i=Gi(n),o=Rw(i,e),u=await new Vk(i,o,t).execute();return u&&!t&&(delete u.user._redirectEventId,await i._persistUserIfCurrent(u.user),await i._setRedirectUser(null,e)),u}/**
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
 */const $k=600*1e3;class Wk{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!qk(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!Pw(e)){const o=((i=e.error.code)==null?void 0:i.split("auth/")[1])||"internal-error";t.onError(Un(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=$k&&this.cachedEventUids.clear(),this.cachedEventUids.has(Zy(e))}saveEventToCache(e){this.cachedEventUids.add(Zy(e)),this.lastProcessedEventTime=Date.now()}}function Zy(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Pw({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function qk(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Pw(n);default:return!1}}/**
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
 */async function Hk(n,e={}){return Yr(n,"GET","/v1/projects",e)}/**
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
 */const Gk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Kk=/^https?/;async function Qk(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Hk(n);for(const t of e)try{if(Yk(t))return}catch{}In(n,"unauthorized-domain")}function Yk(n){const e=xf(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const u=new URL(n);return u.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&u.hostname===i}if(!Kk.test(t))return!1;if(Gk.test(n))return i===n;const o=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}/**
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
 */const Jk=new Al(3e4,6e4);function ev(){const n=ur().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Xk(n){return new Promise((e,t)=>{var o,l,u;function i(){ev(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ev(),t(Un(n,"network-request-failed"))},timeout:Jk.get()})}if((l=(o=ur().gapi)==null?void 0:o.iframes)!=null&&l.Iframe)e(gapi.iframes.getContext());else if((u=ur().gapi)!=null&&u.load)i();else{const p=zb("iframefcb");return ur()[p]=()=>{gapi.load?i():t(Un(n,"network-request-failed"))},gw(`${Bb()}?onload=${p}`).catch(m=>t(m))}}).catch(e=>{throw hu=null,e})}let hu=null;function Zk(n){return hu=hu||Xk(n),hu}/**
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
 */const e1=new Al(5e3,15e3),t1="__/auth/iframe",n1="emulator/auth/iframe",r1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},i1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function s1(n){const e=n.config;ve(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?rp(e,n1):`https://${n.config.authDomain}/${t1}`,i={apiKey:e.apiKey,appName:n.name,v:Ko},o=i1.get(n.config.apiHost);o&&(i.eid=o);const l=n._getFrameworks();return l.length&&(i.fw=l.join(",")),`${t}?${bl(i).slice(1)}`}async function o1(n){const e=await Zk(n),t=ur().gapi;return ve(t,n,"internal-error"),e.open({where:document.body,url:s1(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:r1,dontclear:!0},i=>new Promise(async(o,l)=>{await i.restyle({setHideOnLeave:!1});const u=Un(n,"network-request-failed"),p=ur().setTimeout(()=>{l(u)},e1.get());function m(){ur().clearTimeout(p),o(i)}i.ping(m).then(m,()=>{l(u)})}))}/**
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
 */const a1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},l1=500,c1=600,u1="_blank",h1="http://localhost";class tv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function d1(n,e,t,i=l1,o=c1){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),u=Math.max((window.screen.availWidth-i)/2,0).toString();let p="";const m={...a1,width:i.toString(),height:o.toString(),top:l,left:u},v=$t().toLowerCase();t&&(p=cw(v)?u1:t),aw(v)&&(e=e||h1,m.scrollbars="yes");const w=Object.entries(m).reduce((I,[P,q])=>`${I}${P}=${q},`,"");if(Pb(v)&&p!=="_self")return f1(e||"",p),new tv(null);const E=window.open(e||"",p,w);ve(E,n,"popup-blocked");try{E.focus()}catch{}return new tv(E)}function f1(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const p1="__/auth/handler",m1="emulator/auth/handler",g1=encodeURIComponent("fac");async function nv(n,e,t,i,o,l){ve(n.config.authDomain,n,"auth-domain-config-required"),ve(n.config.apiKey,n,"invalid-api-key");const u={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:Ko,eventId:o};if(e instanceof lp){e.setDefaultLanguage(n.languageCode),u.providerId=e.providerId||"",eS(e.getCustomParameters())||(u.customParameters=JSON.stringify(e.getCustomParameters()));for(const[w,E]of Object.entries({}))u[w]=E}if(e instanceof Rl){const w=e.getScopes().filter(E=>E!=="");w.length>0&&(u.scopes=w.join(","))}n.tenantId&&(u.tid=n.tenantId);const p=u;for(const w of Object.keys(p))p[w]===void 0&&delete p[w];const m=await n._getAppCheckToken(),v=m?`#${g1}=${encodeURIComponent(m)}`:"";return`${y1(n)}?${bl(p).slice(1)}${v}`}function y1({config:n}){return n.emulator?rp(n,m1):`https://${n.authDomain}/${p1}`}/**
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
 */const tf="webStorageSupport";class v1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Sw,this._completeRedirectFn=zk,this._overrideRedirectResult=Fk}async _openPopup(e,t,i,o){var u;Hr((u=this.eventManagers[e._key()])==null?void 0:u.manager,"_initialize() not called before _openPopup()");const l=await nv(e,t,i,xf(),o);return d1(e,l,cp())}async _openRedirect(e,t,i,o){await this._originValidation(e);const l=await nv(e,t,i,xf(),o);return xk(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:l}=this.eventManagers[t];return o?Promise.resolve(o):(Hr(l,"If manager is not set, promise should be"),l)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await o1(e),i=new Wk(e);return t.register("authEvent",o=>(ve(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:i.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(tf,{type:tf},o=>{var u;const l=(u=o==null?void 0:o[0])==null?void 0:u[tf];l!==void 0&&t(!!l),In(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Qk(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return pw()||lw()||sp()}}const _1=v1;var rv="@firebase/auth",iv="1.13.0";/**
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
 */class w1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ve(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function x1(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function E1(n){mr(new $n("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:u,authDomain:p}=i.options;ve(u&&!u.includes(":"),"invalid-api-key",{appName:i.name});const m={apiKey:u,authDomain:p,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:mw(n)},v=new Mb(i,o,l,m);return Kb(v,t),v},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),mr(new $n("auth-internal",e=>{const t=Gi(e.getProvider("auth").getImmediate());return(i=>new w1(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),En(rv,iv,x1(n)),En(rv,iv,"esm2020")}/**
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
 */const T1=300,I1=q_("authIdTokenMaxAge")||T1;let sv=null;const S1=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>I1)return;const o=t==null?void 0:t.token;sv!==o&&(sv=o,await fetch(n,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function b1(n=ep()){const e=Go(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Gb(n,{popupRedirectResolver:_1,persistence:[Rk,vk,Sw]}),i=q_("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(i,location.origin);if(location.origin===l.origin){const u=S1(l.toString());pk(t,u,()=>u(t.currentUser)),fk(t,p=>u(p))}}const o=$_("auth");return o&&Qb(t,`http://${o}`),t}function k1(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}Fb({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=o=>{const l=Un("internal-error");l.customData=o,t(l)},i.type="text/javascript",i.charset="UTF-8",k1().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});E1("Browser");var ov=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Oi,jw;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(R,b){function A(){}A.prototype=b.prototype,R.F=b.prototype,R.prototype=new A,R.prototype.constructor=R,R.D=function(D,N,M){for(var k=Array(arguments.length-2),Be=2;Be<arguments.length;Be++)k[Be-2]=arguments[Be];return b.prototype[N].apply(D,k)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(i,t),i.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(R,b,A){A||(A=0);const D=Array(16);if(typeof b=="string")for(var N=0;N<16;++N)D[N]=b.charCodeAt(A++)|b.charCodeAt(A++)<<8|b.charCodeAt(A++)<<16|b.charCodeAt(A++)<<24;else for(N=0;N<16;++N)D[N]=b[A++]|b[A++]<<8|b[A++]<<16|b[A++]<<24;b=R.g[0],A=R.g[1],N=R.g[2];let M=R.g[3],k;k=b+(M^A&(N^M))+D[0]+3614090360&4294967295,b=A+(k<<7&4294967295|k>>>25),k=M+(N^b&(A^N))+D[1]+3905402710&4294967295,M=b+(k<<12&4294967295|k>>>20),k=N+(A^M&(b^A))+D[2]+606105819&4294967295,N=M+(k<<17&4294967295|k>>>15),k=A+(b^N&(M^b))+D[3]+3250441966&4294967295,A=N+(k<<22&4294967295|k>>>10),k=b+(M^A&(N^M))+D[4]+4118548399&4294967295,b=A+(k<<7&4294967295|k>>>25),k=M+(N^b&(A^N))+D[5]+1200080426&4294967295,M=b+(k<<12&4294967295|k>>>20),k=N+(A^M&(b^A))+D[6]+2821735955&4294967295,N=M+(k<<17&4294967295|k>>>15),k=A+(b^N&(M^b))+D[7]+4249261313&4294967295,A=N+(k<<22&4294967295|k>>>10),k=b+(M^A&(N^M))+D[8]+1770035416&4294967295,b=A+(k<<7&4294967295|k>>>25),k=M+(N^b&(A^N))+D[9]+2336552879&4294967295,M=b+(k<<12&4294967295|k>>>20),k=N+(A^M&(b^A))+D[10]+4294925233&4294967295,N=M+(k<<17&4294967295|k>>>15),k=A+(b^N&(M^b))+D[11]+2304563134&4294967295,A=N+(k<<22&4294967295|k>>>10),k=b+(M^A&(N^M))+D[12]+1804603682&4294967295,b=A+(k<<7&4294967295|k>>>25),k=M+(N^b&(A^N))+D[13]+4254626195&4294967295,M=b+(k<<12&4294967295|k>>>20),k=N+(A^M&(b^A))+D[14]+2792965006&4294967295,N=M+(k<<17&4294967295|k>>>15),k=A+(b^N&(M^b))+D[15]+1236535329&4294967295,A=N+(k<<22&4294967295|k>>>10),k=b+(N^M&(A^N))+D[1]+4129170786&4294967295,b=A+(k<<5&4294967295|k>>>27),k=M+(A^N&(b^A))+D[6]+3225465664&4294967295,M=b+(k<<9&4294967295|k>>>23),k=N+(b^A&(M^b))+D[11]+643717713&4294967295,N=M+(k<<14&4294967295|k>>>18),k=A+(M^b&(N^M))+D[0]+3921069994&4294967295,A=N+(k<<20&4294967295|k>>>12),k=b+(N^M&(A^N))+D[5]+3593408605&4294967295,b=A+(k<<5&4294967295|k>>>27),k=M+(A^N&(b^A))+D[10]+38016083&4294967295,M=b+(k<<9&4294967295|k>>>23),k=N+(b^A&(M^b))+D[15]+3634488961&4294967295,N=M+(k<<14&4294967295|k>>>18),k=A+(M^b&(N^M))+D[4]+3889429448&4294967295,A=N+(k<<20&4294967295|k>>>12),k=b+(N^M&(A^N))+D[9]+568446438&4294967295,b=A+(k<<5&4294967295|k>>>27),k=M+(A^N&(b^A))+D[14]+3275163606&4294967295,M=b+(k<<9&4294967295|k>>>23),k=N+(b^A&(M^b))+D[3]+4107603335&4294967295,N=M+(k<<14&4294967295|k>>>18),k=A+(M^b&(N^M))+D[8]+1163531501&4294967295,A=N+(k<<20&4294967295|k>>>12),k=b+(N^M&(A^N))+D[13]+2850285829&4294967295,b=A+(k<<5&4294967295|k>>>27),k=M+(A^N&(b^A))+D[2]+4243563512&4294967295,M=b+(k<<9&4294967295|k>>>23),k=N+(b^A&(M^b))+D[7]+1735328473&4294967295,N=M+(k<<14&4294967295|k>>>18),k=A+(M^b&(N^M))+D[12]+2368359562&4294967295,A=N+(k<<20&4294967295|k>>>12),k=b+(A^N^M)+D[5]+4294588738&4294967295,b=A+(k<<4&4294967295|k>>>28),k=M+(b^A^N)+D[8]+2272392833&4294967295,M=b+(k<<11&4294967295|k>>>21),k=N+(M^b^A)+D[11]+1839030562&4294967295,N=M+(k<<16&4294967295|k>>>16),k=A+(N^M^b)+D[14]+4259657740&4294967295,A=N+(k<<23&4294967295|k>>>9),k=b+(A^N^M)+D[1]+2763975236&4294967295,b=A+(k<<4&4294967295|k>>>28),k=M+(b^A^N)+D[4]+1272893353&4294967295,M=b+(k<<11&4294967295|k>>>21),k=N+(M^b^A)+D[7]+4139469664&4294967295,N=M+(k<<16&4294967295|k>>>16),k=A+(N^M^b)+D[10]+3200236656&4294967295,A=N+(k<<23&4294967295|k>>>9),k=b+(A^N^M)+D[13]+681279174&4294967295,b=A+(k<<4&4294967295|k>>>28),k=M+(b^A^N)+D[0]+3936430074&4294967295,M=b+(k<<11&4294967295|k>>>21),k=N+(M^b^A)+D[3]+3572445317&4294967295,N=M+(k<<16&4294967295|k>>>16),k=A+(N^M^b)+D[6]+76029189&4294967295,A=N+(k<<23&4294967295|k>>>9),k=b+(A^N^M)+D[9]+3654602809&4294967295,b=A+(k<<4&4294967295|k>>>28),k=M+(b^A^N)+D[12]+3873151461&4294967295,M=b+(k<<11&4294967295|k>>>21),k=N+(M^b^A)+D[15]+530742520&4294967295,N=M+(k<<16&4294967295|k>>>16),k=A+(N^M^b)+D[2]+3299628645&4294967295,A=N+(k<<23&4294967295|k>>>9),k=b+(N^(A|~M))+D[0]+4096336452&4294967295,b=A+(k<<6&4294967295|k>>>26),k=M+(A^(b|~N))+D[7]+1126891415&4294967295,M=b+(k<<10&4294967295|k>>>22),k=N+(b^(M|~A))+D[14]+2878612391&4294967295,N=M+(k<<15&4294967295|k>>>17),k=A+(M^(N|~b))+D[5]+4237533241&4294967295,A=N+(k<<21&4294967295|k>>>11),k=b+(N^(A|~M))+D[12]+1700485571&4294967295,b=A+(k<<6&4294967295|k>>>26),k=M+(A^(b|~N))+D[3]+2399980690&4294967295,M=b+(k<<10&4294967295|k>>>22),k=N+(b^(M|~A))+D[10]+4293915773&4294967295,N=M+(k<<15&4294967295|k>>>17),k=A+(M^(N|~b))+D[1]+2240044497&4294967295,A=N+(k<<21&4294967295|k>>>11),k=b+(N^(A|~M))+D[8]+1873313359&4294967295,b=A+(k<<6&4294967295|k>>>26),k=M+(A^(b|~N))+D[15]+4264355552&4294967295,M=b+(k<<10&4294967295|k>>>22),k=N+(b^(M|~A))+D[6]+2734768916&4294967295,N=M+(k<<15&4294967295|k>>>17),k=A+(M^(N|~b))+D[13]+1309151649&4294967295,A=N+(k<<21&4294967295|k>>>11),k=b+(N^(A|~M))+D[4]+4149444226&4294967295,b=A+(k<<6&4294967295|k>>>26),k=M+(A^(b|~N))+D[11]+3174756917&4294967295,M=b+(k<<10&4294967295|k>>>22),k=N+(b^(M|~A))+D[2]+718787259&4294967295,N=M+(k<<15&4294967295|k>>>17),k=A+(M^(N|~b))+D[9]+3951481745&4294967295,R.g[0]=R.g[0]+b&4294967295,R.g[1]=R.g[1]+(N+(k<<21&4294967295|k>>>11))&4294967295,R.g[2]=R.g[2]+N&4294967295,R.g[3]=R.g[3]+M&4294967295}i.prototype.v=function(R,b){b===void 0&&(b=R.length);const A=b-this.blockSize,D=this.C;let N=this.h,M=0;for(;M<b;){if(N==0)for(;M<=A;)o(this,R,M),M+=this.blockSize;if(typeof R=="string"){for(;M<b;)if(D[N++]=R.charCodeAt(M++),N==this.blockSize){o(this,D),N=0;break}}else for(;M<b;)if(D[N++]=R[M++],N==this.blockSize){o(this,D),N=0;break}}this.h=N,this.o+=b},i.prototype.A=function(){var R=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);R[0]=128;for(var b=1;b<R.length-8;++b)R[b]=0;b=this.o*8;for(var A=R.length-8;A<R.length;++A)R[A]=b&255,b/=256;for(this.v(R),R=Array(16),b=0,A=0;A<4;++A)for(let D=0;D<32;D+=8)R[b++]=this.g[A]>>>D&255;return R};function l(R,b){var A=p;return Object.prototype.hasOwnProperty.call(A,R)?A[R]:A[R]=b(R)}function u(R,b){this.h=b;const A=[];let D=!0;for(let N=R.length-1;N>=0;N--){const M=R[N]|0;D&&M==b||(A[N]=M,D=!1)}this.g=A}var p={};function m(R){return-128<=R&&R<128?l(R,function(b){return new u([b|0],b<0?-1:0)}):new u([R|0],R<0?-1:0)}function v(R){if(isNaN(R)||!isFinite(R))return E;if(R<0)return L(v(-R));const b=[];let A=1;for(let D=0;R>=A;D++)b[D]=R/A|0,A*=4294967296;return new u(b,0)}function w(R,b){if(R.length==0)throw Error("number format error: empty string");if(b=b||10,b<2||36<b)throw Error("radix out of range: "+b);if(R.charAt(0)=="-")return L(w(R.substring(1),b));if(R.indexOf("-")>=0)throw Error('number format error: interior "-" character');const A=v(Math.pow(b,8));let D=E;for(let M=0;M<R.length;M+=8){var N=Math.min(8,R.length-M);const k=parseInt(R.substring(M,M+N),b);N<8?(N=v(Math.pow(b,N)),D=D.j(N).add(v(k))):(D=D.j(A),D=D.add(v(k)))}return D}var E=m(0),I=m(1),P=m(16777216);n=u.prototype,n.m=function(){if(O(this))return-L(this).m();let R=0,b=1;for(let A=0;A<this.g.length;A++){const D=this.i(A);R+=(D>=0?D:4294967296+D)*b,b*=4294967296}return R},n.toString=function(R){if(R=R||10,R<2||36<R)throw Error("radix out of range: "+R);if(q(this))return"0";if(O(this))return"-"+L(this).toString(R);const b=v(Math.pow(R,6));var A=this;let D="";for(;;){const N=ne(A,b).g;A=H(A,N.j(b));let M=((A.g.length>0?A.g[0]:A.h)>>>0).toString(R);if(A=N,q(A))return M+D;for(;M.length<6;)M="0"+M;D=M+D}},n.i=function(R){return R<0?0:R<this.g.length?this.g[R]:this.h};function q(R){if(R.h!=0)return!1;for(let b=0;b<R.g.length;b++)if(R.g[b]!=0)return!1;return!0}function O(R){return R.h==-1}n.l=function(R){return R=H(this,R),O(R)?-1:q(R)?0:1};function L(R){const b=R.g.length,A=[];for(let D=0;D<b;D++)A[D]=~R.g[D];return new u(A,~R.h).add(I)}n.abs=function(){return O(this)?L(this):this},n.add=function(R){const b=Math.max(this.g.length,R.g.length),A=[];let D=0;for(let N=0;N<=b;N++){let M=D+(this.i(N)&65535)+(R.i(N)&65535),k=(M>>>16)+(this.i(N)>>>16)+(R.i(N)>>>16);D=k>>>16,M&=65535,k&=65535,A[N]=k<<16|M}return new u(A,A[A.length-1]&-2147483648?-1:0)};function H(R,b){return R.add(L(b))}n.j=function(R){if(q(this)||q(R))return E;if(O(this))return O(R)?L(this).j(L(R)):L(L(this).j(R));if(O(R))return L(this.j(L(R)));if(this.l(P)<0&&R.l(P)<0)return v(this.m()*R.m());const b=this.g.length+R.g.length,A=[];for(var D=0;D<2*b;D++)A[D]=0;for(D=0;D<this.g.length;D++)for(let N=0;N<R.g.length;N++){const M=this.i(D)>>>16,k=this.i(D)&65535,Be=R.i(N)>>>16,We=R.i(N)&65535;A[2*D+2*N]+=k*We,Z(A,2*D+2*N),A[2*D+2*N+1]+=M*We,Z(A,2*D+2*N+1),A[2*D+2*N+1]+=k*Be,Z(A,2*D+2*N+1),A[2*D+2*N+2]+=M*Be,Z(A,2*D+2*N+2)}for(R=0;R<b;R++)A[R]=A[2*R+1]<<16|A[2*R];for(R=b;R<2*b;R++)A[R]=0;return new u(A,0)};function Z(R,b){for(;(R[b]&65535)!=R[b];)R[b+1]+=R[b]>>>16,R[b]&=65535,b++}function ie(R,b){this.g=R,this.h=b}function ne(R,b){if(q(b))throw Error("division by zero");if(q(R))return new ie(E,E);if(O(R))return b=ne(L(R),b),new ie(L(b.g),L(b.h));if(O(b))return b=ne(R,L(b)),new ie(L(b.g),b.h);if(R.g.length>30){if(O(R)||O(b))throw Error("slowDivide_ only works with positive integers.");for(var A=I,D=b;D.l(R)<=0;)A=fe(A),D=fe(D);var N=Ie(A,1),M=Ie(D,1);for(D=Ie(D,2),A=Ie(A,2);!q(D);){var k=M.add(D);k.l(R)<=0&&(N=N.add(A),M=k),D=Ie(D,1),A=Ie(A,1)}return b=H(R,N.j(b)),new ie(N,b)}for(N=E;R.l(b)>=0;){for(A=Math.max(1,Math.floor(R.m()/b.m())),D=Math.ceil(Math.log(A)/Math.LN2),D=D<=48?1:Math.pow(2,D-48),M=v(A),k=M.j(b);O(k)||k.l(R)>0;)A-=D,M=v(A),k=M.j(b);q(M)&&(M=I),N=N.add(M),R=H(R,k)}return new ie(N,R)}n.B=function(R){return ne(this,R).h},n.and=function(R){const b=Math.max(this.g.length,R.g.length),A=[];for(let D=0;D<b;D++)A[D]=this.i(D)&R.i(D);return new u(A,this.h&R.h)},n.or=function(R){const b=Math.max(this.g.length,R.g.length),A=[];for(let D=0;D<b;D++)A[D]=this.i(D)|R.i(D);return new u(A,this.h|R.h)},n.xor=function(R){const b=Math.max(this.g.length,R.g.length),A=[];for(let D=0;D<b;D++)A[D]=this.i(D)^R.i(D);return new u(A,this.h^R.h)};function fe(R){const b=R.g.length+1,A=[];for(let D=0;D<b;D++)A[D]=R.i(D)<<1|R.i(D-1)>>>31;return new u(A,R.h)}function Ie(R,b){const A=b>>5;b%=32;const D=R.g.length-A,N=[];for(let M=0;M<D;M++)N[M]=b>0?R.i(M+A)>>>b|R.i(M+A+1)<<32-b:R.i(M+A);return new u(N,R.h)}i.prototype.digest=i.prototype.A,i.prototype.reset=i.prototype.u,i.prototype.update=i.prototype.v,jw=i,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.B,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=v,u.fromString=w,Oi=u}).apply(typeof ov<"u"?ov:typeof self<"u"?self:typeof window<"u"?window:{});var tu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Dw,el,Lw,du,Sf,Ow,Vw,Mw;(function(){var n,e=Object.defineProperty;function t(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof tu=="object"&&tu];for(var y=0;y<c.length;++y){var _=c[y];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var i=t(this);function o(c,y){if(y)e:{var _=i;c=c.split(".");for(var T=0;T<c.length-1;T++){var U=c[T];if(!(U in _))break e;_=_[U]}c=c[c.length-1],T=_[c],y=y(T),y!=T&&y!=null&&e(_,c,{configurable:!0,writable:!0,value:y})}}o("Symbol.dispose",function(c){return c||Symbol("Symbol.dispose")}),o("Array.prototype.values",function(c){return c||function(){return this[Symbol.iterator]()}}),o("Object.entries",function(c){return c||function(y){var _=[],T;for(T in y)Object.prototype.hasOwnProperty.call(y,T)&&_.push([T,y[T]]);return _}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},u=this||self;function p(c){var y=typeof c;return y=="object"&&c!=null||y=="function"}function m(c,y,_){return c.call.apply(c.bind,arguments)}function v(c,y,_){return v=m,v.apply(null,arguments)}function w(c,y){var _=Array.prototype.slice.call(arguments,1);return function(){var T=_.slice();return T.push.apply(T,arguments),c.apply(this,T)}}function E(c,y){function _(){}_.prototype=y.prototype,c.Z=y.prototype,c.prototype=new _,c.prototype.constructor=c,c.Ob=function(T,U,W){for(var te=Array(arguments.length-2),Ee=2;Ee<arguments.length;Ee++)te[Ee-2]=arguments[Ee];return y.prototype[U].apply(T,te)}}var I=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?c=>c&&AsyncContext.Snapshot.wrap(c):c=>c;function P(c){const y=c.length;if(y>0){const _=Array(y);for(let T=0;T<y;T++)_[T]=c[T];return _}return[]}function q(c,y){for(let T=1;T<arguments.length;T++){const U=arguments[T];var _=typeof U;if(_=_!="object"?_:U?Array.isArray(U)?"array":_:"null",_=="array"||_=="object"&&typeof U.length=="number"){_=c.length||0;const W=U.length||0;c.length=_+W;for(let te=0;te<W;te++)c[_+te]=U[te]}else c.push(U)}}class O{constructor(y,_){this.i=y,this.j=_,this.h=0,this.g=null}get(){let y;return this.h>0?(this.h--,y=this.g,this.g=y.next,y.next=null):y=this.i(),y}}function L(c){u.setTimeout(()=>{throw c},0)}function H(){var c=R;let y=null;return c.g&&(y=c.g,c.g=c.g.next,c.g||(c.h=null),y.next=null),y}class Z{constructor(){this.h=this.g=null}add(y,_){const T=ie.get();T.set(y,_),this.h?this.h.next=T:this.g=T,this.h=T}}var ie=new O(()=>new ne,c=>c.reset());class ne{constructor(){this.next=this.g=this.h=null}set(y,_){this.h=y,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let fe,Ie=!1,R=new Z,b=()=>{const c=Promise.resolve(void 0);fe=()=>{c.then(A)}};function A(){for(var c;c=H();){try{c.h.call(c.g)}catch(_){L(_)}var y=ie;y.j(c),y.h<100&&(y.h++,c.next=y.g,y.g=c)}Ie=!1}function D(){this.u=this.u,this.C=this.C}D.prototype.u=!1,D.prototype.dispose=function(){this.u||(this.u=!0,this.N())},D.prototype[Symbol.dispose]=function(){this.dispose()},D.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function N(c,y){this.type=c,this.g=this.target=y,this.defaultPrevented=!1}N.prototype.h=function(){this.defaultPrevented=!0};var M=(function(){if(!u.addEventListener||!Object.defineProperty)return!1;var c=!1,y=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const _=()=>{};u.addEventListener("test",_,y),u.removeEventListener("test",_,y)}catch{}return c})();function k(c){return/^[\s\xa0]*$/.test(c)}function Be(c,y){N.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c&&this.init(c,y)}E(Be,N),Be.prototype.init=function(c,y){const _=this.type=c.type,T=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;this.target=c.target||c.srcElement,this.g=y,y=c.relatedTarget,y||(_=="mouseover"?y=c.fromElement:_=="mouseout"&&(y=c.toElement)),this.relatedTarget=y,T?(this.clientX=T.clientX!==void 0?T.clientX:T.pageX,this.clientY=T.clientY!==void 0?T.clientY:T.pageY,this.screenX=T.screenX||0,this.screenY=T.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=c.pointerType,this.state=c.state,this.i=c,c.defaultPrevented&&Be.Z.h.call(this)},Be.prototype.h=function(){Be.Z.h.call(this);const c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var We="closure_listenable_"+(Math.random()*1e6|0),jt=0;function Ze(c,y,_,T,U){this.listener=c,this.proxy=null,this.src=y,this.type=_,this.capture=!!T,this.ha=U,this.key=++jt,this.da=this.fa=!1}function re(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function me(c,y,_){for(const T in c)y.call(_,c[T],T,c)}function le(c,y){for(const _ in c)y.call(void 0,c[_],_,c)}function V(c){const y={};for(const _ in c)y[_]=c[_];return y}const Q="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Se(c,y){let _,T;for(let U=1;U<arguments.length;U++){T=arguments[U];for(_ in T)c[_]=T[_];for(let W=0;W<Q.length;W++)_=Q[W],Object.prototype.hasOwnProperty.call(T,_)&&(c[_]=T[_])}}function be(c){this.src=c,this.g={},this.h=0}be.prototype.add=function(c,y,_,T,U){const W=c.toString();c=this.g[W],c||(c=this.g[W]=[],this.h++);const te=Ce(c,y,T,U);return te>-1?(y=c[te],_||(y.fa=!1)):(y=new Ze(y,this.src,W,!!T,U),y.fa=_,c.push(y)),y};function Ae(c,y){const _=y.type;if(_ in c.g){var T=c.g[_],U=Array.prototype.indexOf.call(T,y,void 0),W;(W=U>=0)&&Array.prototype.splice.call(T,U,1),W&&(re(y),c.g[_].length==0&&(delete c.g[_],c.h--))}}function Ce(c,y,_,T){for(let U=0;U<c.length;++U){const W=c[U];if(!W.da&&W.listener==y&&W.capture==!!_&&W.ha==T)return U}return-1}var Fe="closure_lm_"+(Math.random()*1e6|0),Le={};function qe(c,y,_,T,U){if(Array.isArray(y)){for(let W=0;W<y.length;W++)qe(c,y[W],_,T,U);return null}return _=na(_),c&&c[We]?c.J(y,_,p(T)?!!T.capture:!1,U):Wt(c,y,_,!1,T,U)}function Wt(c,y,_,T,U,W){if(!y)throw Error("Invalid event type");const te=p(U)?!!U.capture:!!U;let Ee=$s(c);if(Ee||(c[Fe]=Ee=new be(c)),_=Ee.add(y,_,T,te,W),_.proxy)return _;if(T=Bs(),_.proxy=T,T.src=c,T.listener=_,c.addEventListener)M||(U=te),U===void 0&&(U=!1),c.addEventListener(y.toString(),T,U);else if(c.attachEvent)c.attachEvent(zs(y.toString()),T);else if(c.addListener&&c.removeListener)c.addListener(T);else throw Error("addEventListener and attachEvent are unavailable.");return _}function Bs(){function c(_){return y.call(c.src,c.listener,_)}const y=Vl;return c}function ta(c,y,_,T,U){if(Array.isArray(y))for(var W=0;W<y.length;W++)ta(c,y[W],_,T,U);else T=p(T)?!!T.capture:!!T,_=na(_),c&&c[We]?(c=c.i,W=String(y).toString(),W in c.g&&(y=c.g[W],_=Ce(y,_,T,U),_>-1&&(re(y[_]),Array.prototype.splice.call(y,_,1),y.length==0&&(delete c.g[W],c.h--)))):c&&(c=$s(c))&&(y=c.g[y.toString()],c=-1,y&&(c=Ce(y,_,T,U)),(_=c>-1?y[c]:null)&&ei(_))}function ei(c){if(typeof c!="number"&&c&&!c.da){var y=c.src;if(y&&y[We])Ae(y.i,c);else{var _=c.type,T=c.proxy;y.removeEventListener?y.removeEventListener(_,T,c.capture):y.detachEvent?y.detachEvent(zs(_),T):y.addListener&&y.removeListener&&y.removeListener(T),(_=$s(y))?(Ae(_,c),_.h==0&&(_.src=null,y[Fe]=null)):re(c)}}}function zs(c){return c in Le?Le[c]:Le[c]="on"+c}function Vl(c,y){if(c.da)c=!0;else{y=new Be(y,this);const _=c.listener,T=c.ha||c.src;c.fa&&ei(c),c=_.call(T,y)}return c}function $s(c){return c=c[Fe],c instanceof be?c:null}var Ki="__closure_events_fn_"+(Math.random()*1e9>>>0);function na(c){return typeof c=="function"?c:(c[Ki]||(c[Ki]=function(y){return c.handleEvent(y)}),c[Ki])}function dt(){D.call(this),this.i=new be(this),this.M=this,this.G=null}E(dt,D),dt.prototype[We]=!0,dt.prototype.removeEventListener=function(c,y,_,T){ta(this,c,y,_,T)};function at(c,y){var _,T=c.G;if(T)for(_=[];T;T=T.G)_.push(T);if(c=c.M,T=y.type||y,typeof y=="string")y=new N(y,c);else if(y instanceof N)y.target=y.target||c;else{var U=y;y=new N(T,c),Se(y,U)}U=!0;let W,te;if(_)for(te=_.length-1;te>=0;te--)W=y.g=_[te],U=bn(W,T,!0,y)&&U;if(W=y.g=c,U=bn(W,T,!0,y)&&U,U=bn(W,T,!1,y)&&U,_)for(te=0;te<_.length;te++)W=y.g=_[te],U=bn(W,T,!1,y)&&U}dt.prototype.N=function(){if(dt.Z.N.call(this),this.i){var c=this.i;for(const y in c.g){const _=c.g[y];for(let T=0;T<_.length;T++)re(_[T]);delete c.g[y],c.h--}}this.G=null},dt.prototype.J=function(c,y,_,T){return this.i.add(String(c),y,!1,_,T)},dt.prototype.K=function(c,y,_,T){return this.i.add(String(c),y,!0,_,T)};function bn(c,y,_,T){if(y=c.i.g[String(y)],!y)return!0;y=y.concat();let U=!0;for(let W=0;W<y.length;++W){const te=y[W];if(te&&!te.da&&te.capture==_){const Ee=te.listener,lt=te.ha||te.src;te.fa&&Ae(c.i,te),U=Ee.call(lt,T)!==!1&&U}}return U&&!T.defaultPrevented}function ra(c,y){if(typeof c!="function")if(c&&typeof c.handleEvent=="function")c=v(c.handleEvent,c);else throw Error("Invalid listener argument");return Number(y)>2147483647?-1:u.setTimeout(c,y||0)}function ia(c){c.g=ra(()=>{c.g=null,c.i&&(c.i=!1,ia(c))},c.l);const y=c.h;c.h=null,c.m.apply(null,y)}class Ml extends D{constructor(y,_){super(),this.m=y,this.l=_,this.h=null,this.i=!1,this.g=null}j(y){this.h=arguments,this.g?this.i=!0:ia(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ti(c){D.call(this),this.h=c,this.g={}}E(ti,D);var sa=[];function Ws(c){me(c.g,function(y,_){this.g.hasOwnProperty(_)&&ei(y)},c),c.g={}}ti.prototype.N=function(){ti.Z.N.call(this),Ws(this)},ti.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ni=u.JSON.stringify,Fl=u.JSON.parse,Qi=class{stringify(c){return u.JSON.stringify(c,void 0)}parse(c){return u.JSON.parse(c,void 0)}};function ri(){}function Ul(){}var ii={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function qs(){N.call(this,"d")}E(qs,N);function oa(){N.call(this,"c")}E(oa,N);var kn={},Hs=null;function si(){return Hs=Hs||new dt}kn.Ia="serverreachability";function Gs(c){N.call(this,kn.Ia,c)}E(Gs,N);function _r(c){const y=si();at(y,new Gs(y))}kn.STAT_EVENT="statevent";function wr(c,y){N.call(this,kn.STAT_EVENT,c),this.stat=y}E(wr,N);function st(c){const y=si();at(y,new wr(y,c))}kn.Ja="timingevent";function aa(c,y){N.call(this,kn.Ja,c),this.size=y}E(aa,N);function oi(c,y){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){c()},y)}function ai(){this.g=!0}ai.prototype.ua=function(){this.g=!1};function Bl(c,y,_,T,U,W){c.info(function(){if(c.g)if(W){var te="",Ee=W.split("&");for(let ze=0;ze<Ee.length;ze++){var lt=Ee[ze].split("=");if(lt.length>1){const ft=lt[0];lt=lt[1];const on=ft.split("_");te=on.length>=2&&on[1]=="type"?te+(ft+"="+lt+"&"):te+(ft+"=redacted&")}}}else te=null;else te=W;return"XMLHTTP REQ ("+T+") [attempt "+U+"]: "+y+`
`+_+`
`+te})}function zl(c,y,_,T,U,W,te){c.info(function(){return"XMLHTTP RESP ("+T+") [ attempt "+U+"]: "+y+`
`+_+`
`+W+" "+te})}function qn(c,y,_,T){c.info(function(){return"XMLHTTP TEXT ("+y+"): "+Yi(c,_)+(T?" "+T:"")})}function $l(c,y){c.info(function(){return"TIMEOUT: "+y})}ai.prototype.info=function(){};function Yi(c,y){if(!c.g)return y;if(!y)return null;try{const W=JSON.parse(y);if(W){for(c=0;c<W.length;c++)if(Array.isArray(W[c])){var _=W[c];if(!(_.length<2)){var T=_[1];if(Array.isArray(T)&&!(T.length<1)){var U=T[0];if(U!="noop"&&U!="stop"&&U!="close")for(let te=1;te<T.length;te++)T[te]=""}}}}return ni(W)}catch{return y}}var li={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},ci={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Wl;function xr(){}E(xr,ri),xr.prototype.g=function(){return new XMLHttpRequest},Wl=new xr;function Hn(c){return encodeURIComponent(String(c))}function Ks(c){var y=1;c=c.split(":");const _=[];for(;y>0&&c.length;)_.push(c.shift()),y--;return c.length&&_.push(c.join(":")),_}function hn(c,y,_,T){this.j=c,this.i=y,this.l=_,this.S=T||1,this.V=new ti(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new ql}function ql(){this.i=null,this.g="",this.h=!1}var Hl={},la={};function An(c,y,_){c.M=1,c.A=Tr(dn(y)),c.u=_,c.R=!0,ca(c,null)}function ca(c,y){c.F=Date.now(),Ji(c),c.B=dn(c.A);var _=c.B,T=c.S;Array.isArray(T)||(T=[String(T)]),_a(_.i,"t",T),c.C=0,_=c.j.L,c.h=new ql,c.g=nc(c.j,_?y:null,!c.u),c.P>0&&(c.O=new Ml(v(c.Y,c,c.g),c.P)),y=c.V,_=c.g,T=c.ba;var U="readystatechange";Array.isArray(U)||(U&&(sa[0]=U.toString()),U=sa);for(let W=0;W<U.length;W++){const te=qe(_,U[W],T||y.handleEvent,!1,y.h||y);if(!te)break;y.g[te.key]=te}y=c.J?V(c.J):{},c.u?(c.v||(c.v="POST"),y["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.B,c.v,c.u,y)):(c.v="GET",c.g.ea(c.B,c.v,null,y)),_r(),Bl(c.i,c.v,c.B,c.l,c.S,c.u)}hn.prototype.ba=function(c){c=c.target;const y=this.O;y&&Zn(c)==3?y.j():this.Y(c)},hn.prototype.Y=function(c){try{if(c==this.g)e:{const Ee=Zn(this.g),lt=this.g.ya(),ze=this.g.ca();if(!(Ee<3)&&(Ee!=3||this.g&&(this.h.h||this.g.la()||ec(this.g)))){this.K||Ee!=4||lt==7||(lt==8||ze<=0?_r(3):_r(2)),Qs(this);var y=this.g.ca();this.X=y;var _=Gl(this);if(this.o=y==200,zl(this.i,this.v,this.B,this.l,this.S,Ee,y),this.o){if(this.U&&!this.L){t:{if(this.g){var T,U=this.g;if((T=U.g?U.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!k(T)){var W=T;break t}}W=null}if(c=W)qn(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Qe(this,c);else{this.o=!1,this.m=3,st(12),Er(this),Xi(this);break e}}if(this.R){c=!0;let ft;for(;!this.K&&this.C<_.length;)if(ft=Ql(this,_),ft==la){Ee==4&&(this.m=4,st(14),c=!1),qn(this.i,this.l,null,"[Incomplete Response]");break}else if(ft==Hl){this.m=4,st(15),qn(this.i,this.l,_,"[Invalid Chunk]"),c=!1;break}else qn(this.i,this.l,ft,null),Qe(this,ft);if(Kl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ee!=4||_.length!=0||this.h.h||(this.m=1,st(16),c=!1),this.o=this.o&&c,!c)qn(this.i,this.l,_,"[Invalid Chunked Response]"),Er(this),Xi(this);else if(_.length>0&&!this.W){this.W=!0;var te=this.j;te.g==this&&te.aa&&!te.P&&(te.j.info("Great, no buffering proxy detected. Bytes received: "+_.length),as(te),te.P=!0,st(11))}}else qn(this.i,this.l,_,null),Qe(this,_);Ee==4&&Er(this),this.o&&!this.K&&(Ee==4?so(this.j,this):(this.o=!1,Ji(this)))}else xa(this.g),y==400&&_.indexOf("Unknown SID")>0?(this.m=3,st(12)):(this.m=0,st(13)),Er(this),Xi(this)}}}catch{}finally{}};function Gl(c){if(!Kl(c))return c.g.la();const y=ec(c.g);if(y==="")return"";let _="";const T=y.length,U=Zn(c.g)==4;if(!c.h.i){if(typeof TextDecoder>"u")return Er(c),Xi(c),"";c.h.i=new u.TextDecoder}for(let W=0;W<T;W++)c.h.h=!0,_+=c.h.i.decode(y[W],{stream:!(U&&W==T-1)});return y.length=0,c.h.g+=_,c.C=0,c.h.g}function Kl(c){return c.g?c.v=="GET"&&c.M!=2&&c.j.Aa:!1}function Ql(c,y){var _=c.C,T=y.indexOf(`
`,_);return T==-1?la:(_=Number(y.substring(_,T)),isNaN(_)?Hl:(T+=1,T+_>y.length?la:(y=y.slice(T,T+_),c.C=T+_,y)))}hn.prototype.cancel=function(){this.K=!0,Er(this)};function Ji(c){c.T=Date.now()+c.H,ua(c,c.H)}function ua(c,y){if(c.D!=null)throw Error("WatchDog timer not null");c.D=oi(v(c.aa,c),y)}function Qs(c){c.D&&(u.clearTimeout(c.D),c.D=null)}hn.prototype.aa=function(){this.D=null;const c=Date.now();c-this.T>=0?($l(this.i,this.B),this.M!=2&&(_r(),st(17)),Er(this),this.m=2,Xi(this)):ua(this,this.T-c)};function Xi(c){c.j.I==0||c.K||so(c.j,c)}function Er(c){Qs(c);var y=c.O;y&&typeof y.dispose=="function"&&y.dispose(),c.O=null,Ws(c.V),c.g&&(y=c.g,c.g=null,y.abort(),y.dispose())}function Qe(c,y){try{var _=c.j;if(_.I!=0&&(_.g==c||da(_.h,c))){if(!c.L&&da(_.h,c)&&_.I==3){try{var T=_.Ba.g.parse(y)}catch{T=null}if(Array.isArray(T)&&T.length==3){var U=T;if(U[0]==0){e:if(!_.v){if(_.g)if(_.g.F+3e3<c.F)io(_),rn(_);else break e;nr(_),st(18)}}else _.xa=U[1],0<_.xa-_.K&&U[2]<37500&&_.F&&_.A==0&&!_.C&&(_.C=oi(v(_.Va,_),6e3));Zi(_.h)<=1&&_.ta&&(_.ta=void 0)}else sn(_,11)}else if((c.L||_.g==c)&&io(_),!k(y))for(U=_.Ba.g.parse(y),y=0;y<U.length;y++){let ze=U[y];const ft=ze[0];if(!(ft<=_.K))if(_.K=ft,ze=ze[1],_.I==2)if(ze[0]=="c"){_.M=ze[1],_.ba=ze[2];const on=ze[3];on!=null&&(_.ka=on,_.j.info("VER="+_.ka));const Ar=ze[4];Ar!=null&&(_.za=Ar,_.j.info("SVER="+_.za));const rr=ze[5];rr!=null&&typeof rr=="number"&&rr>0&&(T=1.5*rr,_.O=T,_.j.info("backChannelRequestTimeoutMs_="+T)),T=_;const ir=c.g;if(ir){const lo=ir.g?ir.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(lo){var W=T.h;W.g||lo.indexOf("spdy")==-1&&lo.indexOf("quic")==-1&&lo.indexOf("h2")==-1||(W.j=W.l,W.g=new Set,W.h&&(Js(W,W.h),W.h=null))}if(T.G){const Ia=ir.g?ir.g.getResponseHeader("X-HTTP-Session-Id"):null;Ia&&(T.wa=Ia,Me(T.J,T.G,Ia))}}_.I=3,_.l&&_.l.ra(),_.aa&&(_.T=Date.now()-c.F,_.j.info("Handshake RTT: "+_.T+"ms")),T=_;var te=c;if(T.na=Ta(T,T.L?T.ba:null,T.W),te.L){es(T.h,te);var Ee=te,lt=T.O;lt&&(Ee.H=lt),Ee.D&&(Qs(Ee),Ji(Ee)),T.g=te}else Dt(T);_.i.length>0&&kr(_)}else ze[0]!="stop"&&ze[0]!="close"||sn(_,7);else _.I==3&&(ze[0]=="stop"||ze[0]=="close"?ze[0]=="stop"?sn(_,7):no(_):ze[0]!="noop"&&_.l&&_.l.qa(ze),_.A=0)}}_r(4)}catch{}}var gh=class{constructor(c,y){this.g=c,this.map=y}};function Ys(c){this.l=c||10,u.PerformanceNavigationTiming?(c=u.performance.getEntriesByType("navigation"),c=c.length>0&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function ha(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function Zi(c){return c.h?1:c.g?c.g.size:0}function da(c,y){return c.h?c.h==y:c.g?c.g.has(y):!1}function Js(c,y){c.g?c.g.add(y):c.h=y}function es(c,y){c.h&&c.h==y?c.h=null:c.g&&c.g.has(y)&&c.g.delete(y)}Ys.prototype.cancel=function(){if(this.i=en(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function en(c){if(c.h!=null)return c.i.concat(c.h.G);if(c.g!=null&&c.g.size!==0){let y=c.i;for(const _ of c.g.values())y=y.concat(_.G);return y}return P(c.i)}var Yl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function tn(c,y){if(c){c=c.split("&");for(let _=0;_<c.length;_++){const T=c[_].indexOf("=");let U,W=null;T>=0?(U=c[_].substring(0,T),W=c[_].substring(T+1)):U=c[_],y(U,W?decodeURIComponent(W.replace(/\+/g," ")):"")}}}function Gn(c){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let y;c instanceof Gn?(this.l=c.l,ts(this,c.j),this.o=c.o,this.g=c.g,Kn(this,c.u),this.h=c.h,ui(this,wa(c.i)),this.m=c.m):c&&(y=String(c).match(Yl))?(this.l=!1,ts(this,y[1]||"",!0),this.o=ns(y[2]||""),this.g=ns(y[3]||"",!0),Kn(this,y[4]),this.h=ns(y[5]||"",!0),ui(this,y[6]||"",!0),this.m=ns(y[7]||"")):(this.l=!1,this.i=new je(null,this.l))}Gn.prototype.toString=function(){const c=[];var y=this.j;y&&c.push(rs(y,pa,!0),":");var _=this.g;return(_||y=="file")&&(c.push("//"),(y=this.o)&&c.push(rs(y,pa,!0),"@"),c.push(Hn(_).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.u,_!=null&&c.push(":",String(_))),(_=this.h)&&(this.g&&_.charAt(0)!="/"&&c.push("/"),c.push(rs(_,_.charAt(0)=="/"?is:ma,!0))),(_=this.i.toString())&&c.push("?",_),(_=this.m)&&c.push("#",rs(_,ga)),c.join("")},Gn.prototype.resolve=function(c){const y=dn(this);let _=!!c.j;_?ts(y,c.j):_=!!c.o,_?y.o=c.o:_=!!c.g,_?y.g=c.g:_=c.u!=null;var T=c.h;if(_)Kn(y,c.u);else if(_=!!c.h){if(T.charAt(0)!="/")if(this.g&&!this.h)T="/"+T;else{var U=y.h.lastIndexOf("/");U!=-1&&(T=y.h.slice(0,U+1)+T)}if(U=T,U==".."||U==".")T="";else if(U.indexOf("./")!=-1||U.indexOf("/.")!=-1){T=U.lastIndexOf("/",0)==0,U=U.split("/");const W=[];for(let te=0;te<U.length;){const Ee=U[te++];Ee=="."?T&&te==U.length&&W.push(""):Ee==".."?((W.length>1||W.length==1&&W[0]!="")&&W.pop(),T&&te==U.length&&W.push("")):(W.push(Ee),T=!0)}T=W.join("/")}else T=U}return _?y.h=T:_=c.i.toString()!=="",_?ui(y,wa(c.i)):_=!!c.m,_&&(y.m=c.m),y};function dn(c){return new Gn(c)}function ts(c,y,_){c.j=_?ns(y,!0):y,c.j&&(c.j=c.j.replace(/:$/,""))}function Kn(c,y){if(y){if(y=Number(y),isNaN(y)||y<0)throw Error("Bad port number "+y);c.u=y}else c.u=null}function ui(c,y,_){y instanceof je?(c.i=y,Zs(c.i,c.l)):(_||(y=rs(y,yh)),c.i=new je(y,c.l))}function Me(c,y,_){c.i.set(y,_)}function Tr(c){return Me(c,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),c}function ns(c,y){return c?y?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function rs(c,y,_){return typeof c=="string"?(c=encodeURI(c).replace(y,fa),_&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function fa(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var pa=/[#\/\?@]/g,ma=/[#\?:]/g,is=/[#\?]/g,yh=/[#\?@]/g,ga=/#/g;function je(c,y){this.h=this.g=null,this.i=c||null,this.j=!!y}function Qn(c){c.g||(c.g=new Map,c.h=0,c.i&&tn(c.i,function(y,_){c.add(decodeURIComponent(y.replace(/\+/g," ")),_)}))}n=je.prototype,n.add=function(c,y){Qn(this),this.i=null,c=Yn(this,c);let _=this.g.get(c);return _||this.g.set(c,_=[]),_.push(y),this.h+=1,this};function ya(c,y){Qn(c),y=Yn(c,y),c.g.has(y)&&(c.i=null,c.h-=c.g.get(y).length,c.g.delete(y))}function Xs(c,y){return Qn(c),y=Yn(c,y),c.g.has(y)}n.forEach=function(c,y){Qn(this),this.g.forEach(function(_,T){_.forEach(function(U){c.call(y,U,T,this)},this)},this)};function va(c,y){Qn(c);let _=[];if(typeof y=="string")Xs(c,y)&&(_=_.concat(c.g.get(Yn(c,y))));else for(c=Array.from(c.g.values()),y=0;y<c.length;y++)_=_.concat(c[y]);return _}n.set=function(c,y){return Qn(this),this.i=null,c=Yn(this,c),Xs(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[y]),this.h+=1,this},n.get=function(c,y){return c?(c=va(this,c),c.length>0?String(c[0]):y):y};function _a(c,y,_){ya(c,y),_.length>0&&(c.i=null,c.g.set(Yn(c,y),P(_)),c.h+=_.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],y=Array.from(this.g.keys());for(let T=0;T<y.length;T++){var _=y[T];const U=Hn(_);_=va(this,_);for(let W=0;W<_.length;W++){let te=U;_[W]!==""&&(te+="="+Hn(_[W])),c.push(te)}}return this.i=c.join("&")};function wa(c){const y=new je;return y.i=c.i,c.g&&(y.g=new Map(c.g),y.h=c.h),y}function Yn(c,y){return y=String(y),c.j&&(y=y.toLowerCase()),y}function Zs(c,y){y&&!c.j&&(Qn(c),c.i=null,c.g.forEach(function(_,T){const U=T.toLowerCase();T!=U&&(ya(this,T),_a(this,U,_))},c)),c.j=y}function Jn(c,y){const _=new ai;if(u.Image){const T=new Image;T.onload=w(bt,_,"TestLoadImage: loaded",!0,y,T),T.onerror=w(bt,_,"TestLoadImage: error",!1,y,T),T.onabort=w(bt,_,"TestLoadImage: abort",!1,y,T),T.ontimeout=w(bt,_,"TestLoadImage: timeout",!1,y,T),u.setTimeout(function(){T.ontimeout&&T.ontimeout()},1e4),T.src=c}else y(!1)}function Xn(c,y){const _=new ai,T=new AbortController,U=setTimeout(()=>{T.abort(),bt(_,"TestPingServer: timeout",!1,y)},1e4);fetch(c,{signal:T.signal}).then(W=>{clearTimeout(U),W.ok?bt(_,"TestPingServer: ok",!0,y):bt(_,"TestPingServer: server error",!1,y)}).catch(()=>{clearTimeout(U),bt(_,"TestPingServer: error",!1,y)})}function bt(c,y,_,T,U){try{U&&(U.onload=null,U.onerror=null,U.onabort=null,U.ontimeout=null),T(_)}catch{}}function ss(){this.g=new Qi}function Ir(c){this.i=c.Sb||null,this.h=c.ab||!1}E(Ir,ri),Ir.prototype.g=function(){return new nn(this.i,this.h)};function nn(c,y){dt.call(this),this.H=c,this.o=y,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}E(nn,dt),n=nn.prototype,n.open=function(c,y){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=c,this.D=y,this.readyState=1,Cn(this)},n.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const y={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};c&&(y.body=c),(this.H||u).fetch(new Request(this.D,y)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,hi(this)),this.readyState=0},n.Pa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,Cn(this)),this.g&&(this.readyState=3,Cn(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Jl(this)}else c.text().then(this.Oa.bind(this),this.ga.bind(this))};function Jl(c){c.j.read().then(c.Ma.bind(c)).catch(c.ga.bind(c))}n.Ma=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var y=c.value?c.value:new Uint8Array(0);(y=this.B.decode(y,{stream:!c.done}))&&(this.response=this.responseText+=y)}c.done?hi(this):Cn(this),this.readyState==3&&Jl(this)}},n.Oa=function(c){this.g&&(this.response=this.responseText=c,hi(this))},n.Na=function(c){this.g&&(this.response=c,hi(this))},n.ga=function(){this.g&&hi(this)};function hi(c){c.readyState=4,c.l=null,c.j=null,c.B=null,Cn(c)}n.setRequestHeader=function(c,y){this.A.append(c,y)},n.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],y=this.h.entries();for(var _=y.next();!_.done;)_=_.value,c.push(_[0]+": "+_[1]),_=y.next();return c.join(`\r
`)};function Cn(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(nn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Xl(c){let y="";return me(c,function(_,T){y+=T,y+=":",y+=_,y+=`\r
`}),y}function eo(c,y,_){e:{for(T in _){var T=!1;break e}T=!0}T||(_=Xl(_),typeof c=="string"?_!=null&&Hn(_):Me(c,y,_))}function He(c){dt.call(this),this.headers=new Map,this.L=c||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}E(He,dt);var Zl=/^https?$/i,vh=["POST","PUT"];n=He.prototype,n.Fa=function(c){this.H=c},n.ea=function(c,y,_,T){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);y=y?y.toUpperCase():"GET",this.D=c,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Wl.g(),this.g.onreadystatechange=I(v(this.Ca,this));try{this.B=!0,this.g.open(y,String(c),!0),this.B=!1}catch(W){di(this,W);return}if(c=_||"",_=new Map(this.headers),T)if(Object.getPrototypeOf(T)===Object.prototype)for(var U in T)_.set(U,T[U]);else if(typeof T.keys=="function"&&typeof T.get=="function")for(const W of T.keys())_.set(W,T.get(W));else throw Error("Unknown input type for opt_headers: "+String(T));T=Array.from(_.keys()).find(W=>W.toLowerCase()=="content-type"),U=u.FormData&&c instanceof u.FormData,!(Array.prototype.indexOf.call(vh,y,void 0)>=0)||T||U||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[W,te]of _)this.g.setRequestHeader(W,te);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(c),this.v=!1}catch(W){di(this,W)}};function di(c,y){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=y,c.o=5,fi(c),br(c)}function fi(c){c.A||(c.A=!0,at(c,"complete"),at(c,"error"))}n.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=c||7,at(this,"complete"),at(this,"abort"),br(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),br(this,!0)),He.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Sr(this):this.Xa())},n.Xa=function(){Sr(this)};function Sr(c){if(c.h&&typeof l<"u"){if(c.v&&Zn(c)==4)setTimeout(c.Ca.bind(c),0);else if(at(c,"readystatechange"),Zn(c)==4){c.h=!1;try{const W=c.ca();e:switch(W){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var y=!0;break e;default:y=!1}var _;if(!(_=y)){var T;if(T=W===0){let te=String(c.D).match(Yl)[1]||null;!te&&u.self&&u.self.location&&(te=u.self.location.protocol.slice(0,-1)),T=!Zl.test(te?te.toLowerCase():"")}_=T}if(_)at(c,"complete"),at(c,"success");else{c.o=6;try{var U=Zn(c)>2?c.g.statusText:""}catch{U=""}c.l=U+" ["+c.ca()+"]",fi(c)}}finally{br(c)}}}}function br(c,y){if(c.g){c.m&&(clearTimeout(c.m),c.m=null);const _=c.g;c.g=null,y||at(c,"ready");try{_.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function Zn(c){return c.g?c.g.readyState:0}n.ca=function(){try{return Zn(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(c){if(this.g){var y=this.g.responseText;return c&&y.indexOf(c)==0&&(y=y.substring(c.length)),Fl(y)}};function ec(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.F){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function xa(c){const y={};c=(c.g&&Zn(c)>=2&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let T=0;T<c.length;T++){if(k(c[T]))continue;var _=Ks(c[T]);const U=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const W=y[U]||[];y[U]=W,W.push(_)}le(y,function(T){return T.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function er(c,y,_){return _&&_.internalChannelParams&&_.internalChannelParams[c]||y}function to(c){this.za=0,this.i=[],this.j=new ai,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=er("failFast",!1,c),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=er("baseRetryDelayMs",5e3,c),this.Za=er("retryDelaySeedMs",1e4,c),this.Ta=er("forwardChannelMaxRetries",2,c),this.va=er("forwardChannelRequestTimeoutMs",2e4,c),this.ma=c&&c.xmlHttpFactory||void 0,this.Ua=c&&c.Rb||void 0,this.Aa=c&&c.useFetchStreams||!1,this.O=void 0,this.L=c&&c.supportsCrossDomainXhr||!1,this.M="",this.h=new Ys(c&&c.concurrentRequestLimit),this.Ba=new ss,this.S=c&&c.fastHandshake||!1,this.R=c&&c.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=c&&c.Pb||!1,c&&c.ua&&this.j.ua(),c&&c.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&c&&c.detectBufferingProxy||!1,this.ia=void 0,c&&c.longPollingTimeout&&c.longPollingTimeout>0&&(this.ia=c.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=to.prototype,n.ka=8,n.I=1,n.connect=function(c,y,_,T){st(0),this.W=c,this.H=y||{},_&&T!==void 0&&(this.H.OSID=_,this.H.OAID=T),this.F=this.X,this.J=Ta(this,null,this.W),kr(this)};function no(c){if(ro(c),c.I==3){var y=c.V++,_=dn(c.J);if(Me(_,"SID",c.M),Me(_,"RID",y),Me(_,"TYPE","terminate"),tr(c,_),y=new hn(c,c.j,y),y.M=2,y.A=Tr(dn(_)),_=!1,u.navigator&&u.navigator.sendBeacon)try{_=u.navigator.sendBeacon(y.A.toString(),"")}catch{}!_&&u.Image&&(new Image().src=y.A,_=!0),_||(y.g=nc(y.j,null),y.g.ea(y.A)),y.F=Date.now(),Ji(y)}ls(c)}function rn(c){c.g&&(as(c),c.g.cancel(),c.g=null)}function ro(c){rn(c),c.v&&(u.clearTimeout(c.v),c.v=null),io(c),c.h.cancel(),c.m&&(typeof c.m=="number"&&u.clearTimeout(c.m),c.m=null)}function kr(c){if(!ha(c.h)&&!c.m){c.m=!0;var y=c.Ea;fe||b(),Ie||(fe(),Ie=!0),R.add(y,c),c.D=0}}function tc(c,y){return Zi(c.h)>=c.h.j-(c.m?1:0)?!1:c.m?(c.i=y.G.concat(c.i),!0):c.I==1||c.I==2||c.D>=(c.Sa?0:c.Ta)?!1:(c.m=oi(v(c.Ea,c,y),oo(c,c.D)),c.D++,!0)}n.Ea=function(c){if(this.m)if(this.m=null,this.I==1){if(!c){this.V=Math.floor(Math.random()*1e5),c=this.V++;const U=new hn(this,this.j,c);let W=this.o;if(this.U&&(W?(W=V(W),Se(W,this.U)):W=this.U),this.u!==null||this.R||(U.J=W,W=null),this.S)e:{for(var y=0,_=0;_<this.i.length;_++){t:{var T=this.i[_];if("__data__"in T.map&&(T=T.map.__data__,typeof T=="string")){T=T.length;break t}T=void 0}if(T===void 0)break;if(y+=T,y>4096){y=_;break e}if(y===4096||_===this.i.length-1){y=_+1;break e}}y=1e3}else y=1e3;y=Ea(this,U,y),_=dn(this.J),Me(_,"RID",c),Me(_,"CVER",22),this.G&&Me(_,"X-HTTP-Session-Id",this.G),tr(this,_),W&&(this.R?y="headers="+Hn(Xl(W))+"&"+y:this.u&&eo(_,this.u,W)),Js(this.h,U),this.Ra&&Me(_,"TYPE","init"),this.S?(Me(_,"$req",y),Me(_,"SID","null"),U.U=!0,An(U,_,null)):An(U,_,y),this.I=2}}else this.I==3&&(c?os(this,c):this.i.length==0||ha(this.h)||os(this))};function os(c,y){var _;y?_=y.l:_=c.V++;const T=dn(c.J);Me(T,"SID",c.M),Me(T,"RID",_),Me(T,"AID",c.K),tr(c,T),c.u&&c.o&&eo(T,c.u,c.o),_=new hn(c,c.j,_,c.D+1),c.u===null&&(_.J=c.o),y&&(c.i=y.G.concat(c.i)),y=Ea(c,_,1e3),_.H=Math.round(c.va*.5)+Math.round(c.va*.5*Math.random()),Js(c.h,_),An(_,T,y)}function tr(c,y){c.H&&me(c.H,function(_,T){Me(y,T,_)}),c.l&&me({},function(_,T){Me(y,T,_)})}function Ea(c,y,_){_=Math.min(c.i.length,_);const T=c.l?v(c.l.Ka,c.l,c):null;e:{var U=c.i;let Ee=-1;for(;;){const lt=["count="+_];Ee==-1?_>0?(Ee=U[0].g,lt.push("ofs="+Ee)):Ee=0:lt.push("ofs="+Ee);let ze=!0;for(let ft=0;ft<_;ft++){var W=U[ft].g;const on=U[ft].map;if(W-=Ee,W<0)Ee=Math.max(0,U[ft].g-100),ze=!1;else try{W="req"+W+"_"||"";try{var te=on instanceof Map?on:Object.entries(on);for(const[Ar,rr]of te){let ir=rr;p(rr)&&(ir=ni(rr)),lt.push(W+Ar+"="+encodeURIComponent(ir))}}catch(Ar){throw lt.push(W+"type="+encodeURIComponent("_badmap")),Ar}}catch{T&&T(on)}}if(ze){te=lt.join("&");break e}}te=void 0}return c=c.i.splice(0,_),y.G=c,te}function Dt(c){if(!c.g&&!c.v){c.Y=1;var y=c.Da;fe||b(),Ie||(fe(),Ie=!0),R.add(y,c),c.A=0}}function nr(c){return c.g||c.v||c.A>=3?!1:(c.Y++,c.v=oi(v(c.Da,c),oo(c,c.A)),c.A++,!0)}n.Da=function(){if(this.v=null,pi(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var c=4*this.T;this.j.info("BP detection timer enabled: "+c),this.B=oi(v(this.Wa,this),c)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,st(10),rn(this),pi(this))};function as(c){c.B!=null&&(u.clearTimeout(c.B),c.B=null)}function pi(c){c.g=new hn(c,c.j,"rpc",c.Y),c.u===null&&(c.g.J=c.o),c.g.P=0;var y=dn(c.na);Me(y,"RID","rpc"),Me(y,"SID",c.M),Me(y,"AID",c.K),Me(y,"CI",c.F?"0":"1"),!c.F&&c.ia&&Me(y,"TO",c.ia),Me(y,"TYPE","xmlhttp"),tr(c,y),c.u&&c.o&&eo(y,c.u,c.o),c.O&&(c.g.H=c.O);var _=c.g;c=c.ba,_.M=1,_.A=Tr(dn(y)),_.u=null,_.R=!0,ca(_,c)}n.Va=function(){this.C!=null&&(this.C=null,rn(this),nr(this),st(19))};function io(c){c.C!=null&&(u.clearTimeout(c.C),c.C=null)}function so(c,y){var _=null;if(c.g==y){io(c),as(c),c.g=null;var T=2}else if(da(c.h,y))_=y.G,es(c.h,y),T=1;else return;if(c.I!=0){if(y.o)if(T==1){_=y.u?y.u.length:0,y=Date.now()-y.F;var U=c.D;T=si(),at(T,new aa(T,_)),kr(c)}else Dt(c);else if(U=y.m,U==3||U==0&&y.X>0||!(T==1&&tc(c,y)||T==2&&nr(c)))switch(_&&_.length>0&&(y=c.h,y.i=y.i.concat(_)),U){case 1:sn(c,5);break;case 4:sn(c,10);break;case 3:sn(c,6);break;default:sn(c,2)}}}function oo(c,y){let _=c.Qa+Math.floor(Math.random()*c.Za);return c.isActive()||(_*=2),_*y}function sn(c,y){if(c.j.info("Error code "+y),y==2){var _=v(c.bb,c),T=c.Ua;const U=!T;T=new Gn(T||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||ts(T,"https"),Tr(T),U?Jn(T.toString(),_):Xn(T.toString(),_)}else st(2);c.I=0,c.l&&c.l.pa(y),ls(c),ro(c)}n.bb=function(c){c?(this.j.info("Successfully pinged google.com"),st(2)):(this.j.info("Failed to ping google.com"),st(1))};function ls(c){if(c.I=0,c.ja=[],c.l){const y=en(c.h);(y.length!=0||c.i.length!=0)&&(q(c.ja,y),q(c.ja,c.i),c.h.i.length=0,P(c.i),c.i.length=0),c.l.oa()}}function Ta(c,y,_){var T=_ instanceof Gn?dn(_):new Gn(_);if(T.g!="")y&&(T.g=y+"."+T.g),Kn(T,T.u);else{var U=u.location;T=U.protocol,y=y?y+"."+U.hostname:U.hostname,U=+U.port;const W=new Gn(null);T&&ts(W,T),y&&(W.g=y),U&&Kn(W,U),_&&(W.h=_),T=W}return _=c.G,y=c.wa,_&&y&&Me(T,_,y),Me(T,"VER",c.ka),tr(c,T),T}function nc(c,y,_){if(y&&!c.L)throw Error("Can't create secondary domain capable XhrIo object.");return y=c.Aa&&!c.ma?new He(new Ir({ab:_})):new He(c.ma),y.Fa(c.L),y}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function rc(){}n=rc.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function ao(){}ao.prototype.g=function(c,y){return new kt(c,y)};function kt(c,y){dt.call(this),this.g=new to(y),this.l=c,this.h=y&&y.messageUrlParams||null,c=y&&y.messageHeaders||null,y&&y.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=y&&y.initMessageHeaders||null,y&&y.messageContentType&&(c?c["X-WebChannel-Content-Type"]=y.messageContentType:c={"X-WebChannel-Content-Type":y.messageContentType}),y&&y.sa&&(c?c["X-WebChannel-Client-Profile"]=y.sa:c={"X-WebChannel-Client-Profile":y.sa}),this.g.U=c,(c=y&&y.Qb)&&!k(c)&&(this.g.u=c),this.A=y&&y.supportsCrossDomainXhr||!1,this.v=y&&y.sendRawJson||!1,(y=y&&y.httpSessionIdParam)&&!k(y)&&(this.g.G=y,c=this.h,c!==null&&y in c&&(c=this.h,y in c&&delete c[y])),this.j=new mi(this)}E(kt,dt),kt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},kt.prototype.close=function(){no(this.g)},kt.prototype.o=function(c){var y=this.g;if(typeof c=="string"){var _={};_.__data__=c,c=_}else this.v&&(_={},_.__data__=ni(c),c=_);y.i.push(new gh(y.Ya++,c)),y.I==3&&kr(y)},kt.prototype.N=function(){this.g.l=null,delete this.j,no(this.g),delete this.g,kt.Z.N.call(this)};function ic(c){qs.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var y=c.__sm__;if(y){e:{for(const _ in y){c=_;break e}c=void 0}(this.i=c)&&(c=this.i,y=y!==null&&c in y?y[c]:void 0),this.data=y}else this.data=c}E(ic,qs);function sc(){oa.call(this),this.status=1}E(sc,oa);function mi(c){this.g=c}E(mi,rc),mi.prototype.ra=function(){at(this.g,"a")},mi.prototype.qa=function(c){at(this.g,new ic(c))},mi.prototype.pa=function(c){at(this.g,new sc)},mi.prototype.oa=function(){at(this.g,"b")},ao.prototype.createWebChannel=ao.prototype.g,kt.prototype.send=kt.prototype.o,kt.prototype.open=kt.prototype.m,kt.prototype.close=kt.prototype.close,Mw=function(){return new ao},Vw=function(){return si()},Ow=kn,Sf={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},li.NO_ERROR=0,li.TIMEOUT=8,li.HTTP_ERROR=6,du=li,ci.COMPLETE="complete",Lw=ci,Ul.EventType=ii,ii.OPEN="a",ii.CLOSE="b",ii.ERROR="c",ii.MESSAGE="d",dt.prototype.listen=dt.prototype.J,el=Ul,He.prototype.listenOnce=He.prototype.K,He.prototype.getLastError=He.prototype.Ha,He.prototype.getLastErrorCode=He.prototype.ya,He.prototype.getStatus=He.prototype.ca,He.prototype.getResponseJson=He.prototype.La,He.prototype.getResponseText=He.prototype.la,He.prototype.send=He.prototype.ea,He.prototype.setWithCredentials=He.prototype.Fa,Dw=He}).apply(typeof tu<"u"?tu:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */class Ut{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ut.UNAUTHENTICATED=new Ut(null),Ut.GOOGLE_CREDENTIALS=new Ut("google-credentials-uid"),Ut.FIRST_PARTY=new Ut("first-party-uid"),Ut.MOCK_USER=new Ut("mock-user");/**
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
 */let Yo="12.12.0";function A1(n){Yo=n}/**
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
 *//**
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
 */const Ns=new Xf("@firebase/firestore");function Ro(){return Ns.logLevel}function ae(n,...e){if(Ns.logLevel<=Re.DEBUG){const t=e.map(hp);Ns.debug(`Firestore (${Yo}): ${n}`,...t)}}function Gr(n,...e){if(Ns.logLevel<=Re.ERROR){const t=e.map(hp);Ns.error(`Firestore (${Yo}): ${n}`,...t)}}function Ps(n,...e){if(Ns.logLevel<=Re.WARN){const t=e.map(hp);Ns.warn(`Firestore (${Yo}): ${n}`,...t)}}function hp(n){if(typeof n=="string")return n;try{return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
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
 */function _e(n,e,t){let i="Unexpected state";typeof e=="string"?i=e:t=e,Fw(n,i,t)}function Fw(n,e,t){let i=`FIRESTORE (${Yo}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{i+=" CONTEXT: "+JSON.stringify(t)}catch{i+=" CONTEXT: "+t}throw Gr(i),new Error(i)}function Ue(n,e,t,i){let o="Unexpected state";typeof t=="string"?o=t:i=t,n||Fw(e,o,i)}function Te(n,e){return n}/**
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
 */const G={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class se extends vr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class $r{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class Uw{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class C1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Ut.UNAUTHENTICATED)))}shutdown(){}}class R1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class N1{constructor(e){this.t=e,this.currentUser=Ut.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Ue(this.o===void 0,42304);let i=this.i;const o=m=>this.i!==i?(i=this.i,t(m)):Promise.resolve();let l=new $r;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new $r,e.enqueueRetryable((()=>o(this.currentUser)))};const u=()=>{const m=l;e.enqueueRetryable((async()=>{await m.promise,await o(this.currentUser)}))},p=m=>{ae("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=m,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit((m=>p(m))),setTimeout((()=>{if(!this.auth){const m=this.t.getImmediate({optional:!0});m?p(m):(ae("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new $r)}}),0),u()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((i=>this.i!==e?(ae("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Ue(typeof i.accessToken=="string",31837,{l:i}),new Uw(i.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ue(e===null||typeof e=="string",2055,{h:e}),new Ut(e)}}class P1{constructor(e,t,i){this.P=e,this.T=t,this.I=i,this.type="FirstParty",this.user=Ut.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class j1{constructor(e,t,i){this.P=e,this.T=t,this.I=i}getToken(){return Promise.resolve(new P1(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Ut.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class av{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class D1{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,un(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Ue(this.o===void 0,3512);const i=l=>{l.error!=null&&ae("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const u=l.token!==this.m;return this.m=l.token,ae("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable((()=>i(l)))};const o=l=>{ae("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((l=>o(l))),setTimeout((()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?o(l):ae("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new av(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Ue(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new av(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function L1(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
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
 */class dp{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const o=L1(40);for(let l=0;l<o.length;++l)i.length<20&&o[l]<t&&(i+=e.charAt(o[l]%62))}return i}}function Ne(n,e){return n<e?-1:n>e?1:0}function bf(n,e){const t=Math.min(n.length,e.length);for(let i=0;i<t;i++){const o=n.charAt(i),l=e.charAt(i);if(o!==l)return nf(o)===nf(l)?Ne(o,l):nf(o)?1:-1}return Ne(n.length,e.length)}const O1=55296,V1=57343;function nf(n){const e=n.charCodeAt(0);return e>=O1&&e<=V1}function Uo(n,e,t){return n.length===e.length&&n.every(((i,o)=>t(i,e[o])))}/**
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
 */const lv="__name__";class cr{constructor(e,t,i){t===void 0?t=0:t>e.length&&_e(637,{offset:t,range:e.length}),i===void 0?i=e.length-t:i>e.length-t&&_e(1746,{length:i,range:e.length-t}),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return cr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof cr?e.forEach((i=>{t.push(i)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let o=0;o<i;o++){const l=cr.compareSegments(e.get(o),t.get(o));if(l!==0)return l}return Ne(e.length,t.length)}static compareSegments(e,t){const i=cr.isNumericId(e),o=cr.isNumericId(t);return i&&!o?-1:!i&&o?1:i&&o?cr.extractNumericId(e).compare(cr.extractNumericId(t)):bf(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Oi.fromString(e.substring(4,e.length-2))}}class Ke extends cr{construct(e,t,i){return new Ke(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new se(G.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter((o=>o.length>0)))}return new Ke(t)}static emptyPath(){return new Ke([])}}const M1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Nt extends cr{construct(e,t,i){return new Nt(e,t,i)}static isValidIdentifier(e){return M1.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Nt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===lv}static keyField(){return new Nt([lv])}static fromServerFormat(e){const t=[];let i="",o=0;const l=()=>{if(i.length===0)throw new se(G.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let u=!1;for(;o<e.length;){const p=e[o];if(p==="\\"){if(o+1===e.length)throw new se(G.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const m=e[o+1];if(m!=="\\"&&m!=="."&&m!=="`")throw new se(G.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=m,o+=2}else p==="`"?(u=!u,o++):p!=="."||u?(i+=p,o++):(l(),o++)}if(l(),u)throw new se(G.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Nt(t)}static emptyPath(){return new Nt([])}}/**
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
 */class pe{constructor(e){this.path=e}static fromPath(e){return new pe(Ke.fromString(e))}static fromName(e){return new pe(Ke.fromString(e).popFirst(5))}static empty(){return new pe(Ke.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ke.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ke.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new pe(new Ke(e.slice()))}}/**
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
 */function Bw(n,e,t){if(!t)throw new se(G.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function F1(n,e,t,i){if(e===!0&&i===!0)throw new se(G.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function cv(n){if(!pe.isDocumentKey(n))throw new se(G.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function uv(n){if(pe.isDocumentKey(n))throw new se(G.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function zw(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Ju(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(i){return i.constructor?i.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":_e(12329,{type:typeof n})}function Tn(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new se(G.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Ju(n);throw new se(G.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function yt(n,e){const t={typeString:n};return e&&(t.value=e),t}function Pl(n,e){if(!zw(n))throw new se(G.INVALID_ARGUMENT,"JSON must be an object");let t;for(const i in e)if(e[i]){const o=e[i].typeString,l="value"in e[i]?{value:e[i].value}:void 0;if(!(i in n)){t=`JSON missing required field: '${i}'`;break}const u=n[i];if(o&&typeof u!==o){t=`JSON field '${i}' must be a ${o}.`;break}if(l!==void 0&&u!==l.value){t=`Expected '${i}' field to equal '${l.value}'`;break}}if(t)throw new se(G.INVALID_ARGUMENT,t);return!0}/**
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
 */const hv=-62135596800,dv=1e6;class Xe{static now(){return Xe.fromMillis(Date.now())}static fromDate(e){return Xe.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor((e-1e3*t)*dv);return new Xe(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new se(G.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new se(G.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<hv)throw new se(G.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new se(G.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/dv}_compareTo(e){return this.seconds===e.seconds?Ne(this.nanoseconds,e.nanoseconds):Ne(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Xe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Pl(e,Xe._jsonSchema))return new Xe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-hv;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Xe._jsonSchemaVersion="firestore/timestamp/1.0",Xe._jsonSchema={type:yt("string",Xe._jsonSchemaVersion),seconds:yt("number"),nanoseconds:yt("number")};/**
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
 */class xe{static fromTimestamp(e){return new xe(e)}static min(){return new xe(new Xe(0,0))}static max(){return new xe(new Xe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const dl=-1;function U1(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,o=xe.fromTimestamp(i===1e9?new Xe(t+1,0):new Xe(t,i));return new Fi(o,pe.empty(),e)}function B1(n){return new Fi(n.readTime,n.key,dl)}class Fi{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new Fi(xe.min(),pe.empty(),dl)}static max(){return new Fi(xe.max(),pe.empty(),dl)}}function z1(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=pe.comparator(n.documentKey,e.documentKey),t!==0?t:Ne(n.largestBatchId,e.largestBatchId))}/**
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
 */const $1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class W1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function Jo(n){if(n.code!==G.FAILED_PRECONDITION||n.message!==$1)throw n;ae("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class K{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&_e(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new K(((i,o)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(i,o)},this.catchCallback=l=>{this.wrapFailure(t,l).next(i,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof K?t:K.resolve(t)}catch(t){return K.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):K.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):K.reject(t)}static resolve(e){return new K(((t,i)=>{t(e)}))}static reject(e){return new K(((t,i)=>{i(e)}))}static waitFor(e){return new K(((t,i)=>{let o=0,l=0,u=!1;e.forEach((p=>{++o,p.next((()=>{++l,u&&l===o&&t()}),(m=>i(m)))})),u=!0,l===o&&t()}))}static or(e){let t=K.resolve(!1);for(const i of e)t=t.next((o=>o?K.resolve(o):i()));return t}static forEach(e,t){const i=[];return e.forEach(((o,l)=>{i.push(t.call(this,o,l))})),this.waitFor(i)}static mapArray(e,t){return new K(((i,o)=>{const l=e.length,u=new Array(l);let p=0;for(let m=0;m<l;m++){const v=m;t(e[v]).next((w=>{u[v]=w,++p,p===l&&i(u)}),(w=>o(w)))}}))}static doWhile(e,t){return new K(((i,o)=>{const l=()=>{e()===!0?t().next((()=>{l()}),o):i()};l()}))}}function q1(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Xo(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Xu{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.ae(i),this.ue=i=>t.writeSequenceNumber(i))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Xu.ce=-1;/**
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
 */const fp=-1;function Zu(n){return n==null}function Cu(n){return n===0&&1/n==-1/0}function H1(n){return typeof n=="number"&&Number.isInteger(n)&&!Cu(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const $w="";function G1(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=fv(e)),e=K1(n.get(t),e);return fv(e)}function K1(n,e){let t=e;const i=n.length;for(let o=0;o<i;o++){const l=n.charAt(o);switch(l){case"\0":t+="";break;case $w:t+="";break;default:t+=l}}return t}function fv(n){return n+$w+""}/**
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
 */function pv(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Vs(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Ww(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class it{constructor(e,t){this.comparator=e,this.root=t||Rt.EMPTY}insert(e,t){return new it(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Rt.BLACK,null,null))}remove(e){return new it(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Rt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const o=this.comparator(e,i.key);if(o===0)return t+i.left.size;o<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,i)=>(e(t,i),!1)))}toString(){const e=[];return this.inorderTraversal(((t,i)=>(e.push(`${t}:${i}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new nu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new nu(this.root,e,this.comparator,!1)}getReverseIterator(){return new nu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new nu(this.root,e,this.comparator,!0)}}class nu{constructor(e,t,i,o){this.isReverse=o,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?i(e.key,t):1,t&&o&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Rt{constructor(e,t,i,o,l){this.key=e,this.value=t,this.color=i??Rt.RED,this.left=o??Rt.EMPTY,this.right=l??Rt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,o,l){return new Rt(e??this.key,t??this.value,i??this.color,o??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let o=this;const l=i(e,o.key);return o=l<0?o.copy(null,null,null,o.left.insert(e,t,i),null):l===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,i)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Rt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Rt.EMPTY;i=o.right.min(),o=o.copy(i.key,i.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Rt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Rt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw _e(43730,{key:this.key,value:this.value});if(this.right.isRed())throw _e(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw _e(27949);return e+(this.isRed()?0:1)}}Rt.EMPTY=null,Rt.RED=!0,Rt.BLACK=!1;Rt.EMPTY=new class{constructor(){this.size=0}get key(){throw _e(57766)}get value(){throw _e(16141)}get color(){throw _e(16727)}get left(){throw _e(29726)}get right(){throw _e(36894)}copy(e,t,i,o,l){return this}insert(e,t,i){return new Rt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class xt{constructor(e){this.comparator=e,this.data=new it(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,i)=>(e(t),!1)))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const o=i.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new mv(this.data.getIterator())}getIteratorFrom(e){return new mv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((i=>{t=t.add(i)})),t}isEqual(e){if(!(e instanceof xt)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(this.comparator(o,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new xt(this.comparator);return t.data=e,t}}class mv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Vn{constructor(e){this.fields=e,e.sort(Nt.comparator)}static empty(){return new Vn([])}unionWith(e){let t=new xt(Nt.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new Vn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Uo(this.fields,e.fields,((t,i)=>t.isEqual(i)))}}/**
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
 */class qw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Pt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new qw("Invalid base64 string: "+l):l}})(e);return new Pt(t)}static fromUint8Array(e){const t=(function(o){let l="";for(let u=0;u<o.length;++u)l+=String.fromCharCode(o[u]);return l})(e);return new Pt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const i=new Uint8Array(t.length);for(let o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return i})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ne(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Pt.EMPTY_BYTE_STRING=new Pt("");const Q1=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ui(n){if(Ue(!!n,39018),typeof n=="string"){let e=0;const t=Q1.exec(n);if(Ue(!!t,46558,{timestamp:n}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:ut(n.seconds),nanos:ut(n.nanos)}}function ut(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Bi(n){return typeof n=="string"?Pt.fromBase64String(n):Pt.fromUint8Array(n)}/**
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
 */const Hw="server_timestamp",Gw="__type__",Kw="__previous_value__",Qw="__local_write_time__";function pp(n){var t,i;return((i=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Gw])==null?void 0:i.stringValue)===Hw}function eh(n){const e=n.mapValue.fields[Kw];return pp(e)?eh(e):e}function fl(n){const e=Ui(n.mapValue.fields[Qw].timestampValue);return new Xe(e.seconds,e.nanos)}/**
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
 */class Y1{constructor(e,t,i,o,l,u,p,m,v,w,E){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=o,this.ssl=l,this.forceLongPolling=u,this.autoDetectLongPolling=p,this.longPollingOptions=m,this.useFetchStreams=v,this.isUsingEmulator=w,this.apiKey=E}}const Ru="(default)";class pl{constructor(e,t){this.projectId=e,this.database=t||Ru}static empty(){return new pl("","")}get isDefaultDatabase(){return this.database===Ru}isEqual(e){return e instanceof pl&&e.projectId===this.projectId&&e.database===this.database}}function J1(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new se(G.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new pl(n.options.projectId,e)}/**
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
 */const Yw="__type__",X1="__max__",ru={mapValue:{}},Jw="__vector__",Nu="value";function zi(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?pp(n)?4:eA(n)?9007199254740991:Z1(n)?10:11:_e(28295,{value:n})}function gr(n,e){if(n===e)return!0;const t=zi(n);if(t!==zi(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return fl(n).isEqual(fl(e));case 3:return(function(o,l){if(typeof o.timestampValue=="string"&&typeof l.timestampValue=="string"&&o.timestampValue.length===l.timestampValue.length)return o.timestampValue===l.timestampValue;const u=Ui(o.timestampValue),p=Ui(l.timestampValue);return u.seconds===p.seconds&&u.nanos===p.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(o,l){return Bi(o.bytesValue).isEqual(Bi(l.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(o,l){return ut(o.geoPointValue.latitude)===ut(l.geoPointValue.latitude)&&ut(o.geoPointValue.longitude)===ut(l.geoPointValue.longitude)})(n,e);case 2:return(function(o,l){if("integerValue"in o&&"integerValue"in l)return ut(o.integerValue)===ut(l.integerValue);if("doubleValue"in o&&"doubleValue"in l){const u=ut(o.doubleValue),p=ut(l.doubleValue);return u===p?Cu(u)===Cu(p):isNaN(u)&&isNaN(p)}return!1})(n,e);case 9:return Uo(n.arrayValue.values||[],e.arrayValue.values||[],gr);case 10:case 11:return(function(o,l){const u=o.mapValue.fields||{},p=l.mapValue.fields||{};if(pv(u)!==pv(p))return!1;for(const m in u)if(u.hasOwnProperty(m)&&(p[m]===void 0||!gr(u[m],p[m])))return!1;return!0})(n,e);default:return _e(52216,{left:n})}}function ml(n,e){return(n.values||[]).find((t=>gr(t,e)))!==void 0}function Bo(n,e){if(n===e)return 0;const t=zi(n),i=zi(e);if(t!==i)return Ne(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ne(n.booleanValue,e.booleanValue);case 2:return(function(l,u){const p=ut(l.integerValue||l.doubleValue),m=ut(u.integerValue||u.doubleValue);return p<m?-1:p>m?1:p===m?0:isNaN(p)?isNaN(m)?0:-1:1})(n,e);case 3:return gv(n.timestampValue,e.timestampValue);case 4:return gv(fl(n),fl(e));case 5:return bf(n.stringValue,e.stringValue);case 6:return(function(l,u){const p=Bi(l),m=Bi(u);return p.compareTo(m)})(n.bytesValue,e.bytesValue);case 7:return(function(l,u){const p=l.split("/"),m=u.split("/");for(let v=0;v<p.length&&v<m.length;v++){const w=Ne(p[v],m[v]);if(w!==0)return w}return Ne(p.length,m.length)})(n.referenceValue,e.referenceValue);case 8:return(function(l,u){const p=Ne(ut(l.latitude),ut(u.latitude));return p!==0?p:Ne(ut(l.longitude),ut(u.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return yv(n.arrayValue,e.arrayValue);case 10:return(function(l,u){var I,P,q,O;const p=l.fields||{},m=u.fields||{},v=(I=p[Nu])==null?void 0:I.arrayValue,w=(P=m[Nu])==null?void 0:P.arrayValue,E=Ne(((q=v==null?void 0:v.values)==null?void 0:q.length)||0,((O=w==null?void 0:w.values)==null?void 0:O.length)||0);return E!==0?E:yv(v,w)})(n.mapValue,e.mapValue);case 11:return(function(l,u){if(l===ru.mapValue&&u===ru.mapValue)return 0;if(l===ru.mapValue)return 1;if(u===ru.mapValue)return-1;const p=l.fields||{},m=Object.keys(p),v=u.fields||{},w=Object.keys(v);m.sort(),w.sort();for(let E=0;E<m.length&&E<w.length;++E){const I=bf(m[E],w[E]);if(I!==0)return I;const P=Bo(p[m[E]],v[w[E]]);if(P!==0)return P}return Ne(m.length,w.length)})(n.mapValue,e.mapValue);default:throw _e(23264,{he:t})}}function gv(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Ne(n,e);const t=Ui(n),i=Ui(e),o=Ne(t.seconds,i.seconds);return o!==0?o:Ne(t.nanos,i.nanos)}function yv(n,e){const t=n.values||[],i=e.values||[];for(let o=0;o<t.length&&o<i.length;++o){const l=Bo(t[o],i[o]);if(l)return l}return Ne(t.length,i.length)}function zo(n){return kf(n)}function kf(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const i=Ui(t);return`time(${i.seconds},${i.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return Bi(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return pe.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let i="[",o=!0;for(const l of t.values||[])o?o=!1:i+=",",i+=kf(l);return i+"]"})(n.arrayValue):"mapValue"in n?(function(t){const i=Object.keys(t.fields||{}).sort();let o="{",l=!0;for(const u of i)l?l=!1:o+=",",o+=`${u}:${kf(t.fields[u])}`;return o+"}"})(n.mapValue):_e(61005,{value:n})}function fu(n){switch(zi(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=eh(n);return e?16+fu(e):16;case 5:return 2*n.stringValue.length;case 6:return Bi(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(i){return(i.values||[]).reduce(((o,l)=>o+fu(l)),0)})(n.arrayValue);case 10:case 11:return(function(i){let o=0;return Vs(i.fields,((l,u)=>{o+=l.length+fu(u)})),o})(n.mapValue);default:throw _e(13486,{value:n})}}function vv(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Af(n){return!!n&&"integerValue"in n}function mp(n){return!!n&&"arrayValue"in n}function _v(n){return!!n&&"nullValue"in n}function wv(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function pu(n){return!!n&&"mapValue"in n}function Z1(n){var t,i;return((i=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Yw])==null?void 0:i.stringValue)===Jw}function sl(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return Vs(n.mapValue.fields,((t,i)=>e.mapValue.fields[t]=sl(i))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=sl(n.arrayValue.values[t]);return e}return{...n}}function eA(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===X1}/**
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
 */class wn{constructor(e){this.value=e}static empty(){return new wn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!pu(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=sl(t)}setAll(e){let t=Nt.emptyPath(),i={},o=[];e.forEach(((u,p)=>{if(!t.isImmediateParentOf(p)){const m=this.getFieldsMap(t);this.applyChanges(m,i,o),i={},o=[],t=p.popLast()}u?i[p.lastSegment()]=sl(u):o.push(p.lastSegment())}));const l=this.getFieldsMap(t);this.applyChanges(l,i,o)}delete(e){const t=this.field(e.popLast());pu(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return gr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let o=t.mapValue.fields[e.get(i)];pu(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,i){Vs(t,((o,l)=>e[o]=l));for(const o of i)delete e[o]}clone(){return new wn(sl(this.value))}}function Xw(n){const e=[];return Vs(n.fields,((t,i)=>{const o=new Nt([t]);if(pu(i)){const l=Xw(i.mapValue).fields;if(l.length===0)e.push(o);else for(const u of l)e.push(o.child(u))}else e.push(o)})),new Vn(e)}/**
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
 */class Bt{constructor(e,t,i,o,l,u,p){this.key=e,this.documentType=t,this.version=i,this.readTime=o,this.createTime=l,this.data=u,this.documentState=p}static newInvalidDocument(e){return new Bt(e,0,xe.min(),xe.min(),xe.min(),wn.empty(),0)}static newFoundDocument(e,t,i,o){return new Bt(e,1,t,xe.min(),i,o,0)}static newNoDocument(e,t){return new Bt(e,2,t,xe.min(),xe.min(),wn.empty(),0)}static newUnknownDocument(e,t){return new Bt(e,3,t,xe.min(),xe.min(),wn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(xe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=wn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=wn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=xe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Bt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Bt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Pu{constructor(e,t){this.position=e,this.inclusive=t}}function xv(n,e,t){let i=0;for(let o=0;o<n.position.length;o++){const l=e[o],u=n.position[o];if(l.field.isKeyField()?i=pe.comparator(pe.fromName(u.referenceValue),t.key):i=Bo(u,t.data.field(l.field)),l.dir==="desc"&&(i*=-1),i!==0)break}return i}function Ev(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!gr(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class gl{constructor(e,t="asc"){this.field=e,this.dir=t}}function tA(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Zw{}class gt extends Zw{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new rA(e,t,i):t==="array-contains"?new oA(e,i):t==="in"?new aA(e,i):t==="not-in"?new lA(e,i):t==="array-contains-any"?new cA(e,i):new gt(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new iA(e,i):new sA(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Bo(t,this.value)):t!==null&&zi(this.value)===zi(t)&&this.matchesComparison(Bo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return _e(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Wn extends Zw{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Wn(e,t)}matches(e){return e0(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function e0(n){return n.op==="and"}function t0(n){return nA(n)&&e0(n)}function nA(n){for(const e of n.filters)if(e instanceof Wn)return!1;return!0}function Cf(n){if(n instanceof gt)return n.field.canonicalString()+n.op.toString()+zo(n.value);if(t0(n))return n.filters.map((e=>Cf(e))).join(",");{const e=n.filters.map((t=>Cf(t))).join(",");return`${n.op}(${e})`}}function n0(n,e){return n instanceof gt?(function(i,o){return o instanceof gt&&i.op===o.op&&i.field.isEqual(o.field)&&gr(i.value,o.value)})(n,e):n instanceof Wn?(function(i,o){return o instanceof Wn&&i.op===o.op&&i.filters.length===o.filters.length?i.filters.reduce(((l,u,p)=>l&&n0(u,o.filters[p])),!0):!1})(n,e):void _e(19439)}function r0(n){return n instanceof gt?(function(t){return`${t.field.canonicalString()} ${t.op} ${zo(t.value)}`})(n):n instanceof Wn?(function(t){return t.op.toString()+" {"+t.getFilters().map(r0).join(" ,")+"}"})(n):"Filter"}class rA extends gt{constructor(e,t,i){super(e,t,i),this.key=pe.fromName(i.referenceValue)}matches(e){const t=pe.comparator(e.key,this.key);return this.matchesComparison(t)}}class iA extends gt{constructor(e,t){super(e,"in",t),this.keys=i0("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class sA extends gt{constructor(e,t){super(e,"not-in",t),this.keys=i0("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function i0(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((i=>pe.fromName(i.referenceValue)))}class oA extends gt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return mp(t)&&ml(t.arrayValue,this.value)}}class aA extends gt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ml(this.value.arrayValue,t)}}class lA extends gt{constructor(e,t){super(e,"not-in",t)}matches(e){if(ml(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!ml(this.value.arrayValue,t)}}class cA extends gt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!mp(t)||!t.arrayValue.values)&&t.arrayValue.values.some((i=>ml(this.value.arrayValue,i)))}}/**
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
 */class uA{constructor(e,t=null,i=[],o=[],l=null,u=null,p=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=o,this.limit=l,this.startAt=u,this.endAt=p,this.Te=null}}function Tv(n,e=null,t=[],i=[],o=null,l=null,u=null){return new uA(n,e,t,i,o,l,u)}function gp(n){const e=Te(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((i=>Cf(i))).join(","),t+="|ob:",t+=e.orderBy.map((i=>(function(l){return l.field.canonicalString()+l.dir})(i))).join(","),Zu(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((i=>zo(i))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((i=>zo(i))).join(",")),e.Te=t}return e.Te}function yp(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!tA(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!n0(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Ev(n.startAt,e.startAt)&&Ev(n.endAt,e.endAt)}function Rf(n){return pe.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Zo{constructor(e,t=null,i=[],o=[],l=null,u="F",p=null,m=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=o,this.limit=l,this.limitType=u,this.startAt=p,this.endAt=m,this.Ee=null,this.Ie=null,this.Re=null,this.startAt,this.endAt}}function hA(n,e,t,i,o,l,u,p){return new Zo(n,e,t,i,o,l,u,p)}function th(n){return new Zo(n)}function Iv(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function dA(n){return pe.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function s0(n){return n.collectionGroup!==null}function ol(n){const e=Te(n);if(e.Ee===null){e.Ee=[];const t=new Set;for(const l of e.explicitOrderBy)e.Ee.push(l),t.add(l.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(u){let p=new xt(Nt.comparator);return u.filters.forEach((m=>{m.getFlattenedFilters().forEach((v=>{v.isInequality()&&(p=p.add(v.field))}))})),p})(e).forEach((l=>{t.has(l.canonicalString())||l.isKeyField()||e.Ee.push(new gl(l,i))})),t.has(Nt.keyField().canonicalString())||e.Ee.push(new gl(Nt.keyField(),i))}return e.Ee}function hr(n){const e=Te(n);return e.Ie||(e.Ie=fA(e,ol(n))),e.Ie}function fA(n,e){if(n.limitType==="F")return Tv(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((o=>{const l=o.dir==="desc"?"asc":"desc";return new gl(o.field,l)}));const t=n.endAt?new Pu(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new Pu(n.startAt.position,n.startAt.inclusive):null;return Tv(n.path,n.collectionGroup,e,n.filters,n.limit,t,i)}}function Nf(n,e){const t=n.filters.concat([e]);return new Zo(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function pA(n,e){const t=n.explicitOrderBy.concat([e]);return new Zo(n.path,n.collectionGroup,t,n.filters.slice(),n.limit,n.limitType,n.startAt,n.endAt)}function ju(n,e,t){return new Zo(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function nh(n,e){return yp(hr(n),hr(e))&&n.limitType===e.limitType}function o0(n){return`${gp(hr(n))}|lt:${n.limitType}`}function No(n){return`Query(target=${(function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map((o=>r0(o))).join(", ")}]`),Zu(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map((o=>(function(u){return`${u.field.canonicalString()} (${u.dir})`})(o))).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map((o=>zo(o))).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map((o=>zo(o))).join(",")),`Target(${i})`})(hr(n))}; limitType=${n.limitType})`}function rh(n,e){return e.isFoundDocument()&&(function(i,o){const l=o.key.path;return i.collectionGroup!==null?o.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(l):pe.isDocumentKey(i.path)?i.path.isEqual(l):i.path.isImmediateParentOf(l)})(n,e)&&(function(i,o){for(const l of ol(i))if(!l.field.isKeyField()&&o.data.field(l.field)===null)return!1;return!0})(n,e)&&(function(i,o){for(const l of i.filters)if(!l.matches(o))return!1;return!0})(n,e)&&(function(i,o){return!(i.startAt&&!(function(u,p,m){const v=xv(u,p,m);return u.inclusive?v<=0:v<0})(i.startAt,ol(i),o)||i.endAt&&!(function(u,p,m){const v=xv(u,p,m);return u.inclusive?v>=0:v>0})(i.endAt,ol(i),o))})(n,e)}function mA(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function a0(n){return(e,t)=>{let i=!1;for(const o of ol(n)){const l=gA(o,e,t);if(l!==0)return l;i=i||o.field.isKeyField()}return 0}}function gA(n,e,t){const i=n.field.isKeyField()?pe.comparator(e.key,t.key):(function(l,u,p){const m=u.data.field(l),v=p.data.field(l);return m!==null&&v!==null?Bo(m,v):_e(42886)})(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return _e(19790,{direction:n.dir})}}/**
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
 */class Ms{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[o,l]of i)if(this.equalsFn(o,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),o=this.inner[i];if(o===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let l=0;l<o.length;l++)if(this.equalsFn(o[l][0],e))return void(o[l]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return i.length===1?delete this.inner[t]:i.splice(o,1),this.innerSize--,!0;return!1}forEach(e){Vs(this.inner,((t,i)=>{for(const[o,l]of i)e(o,l)}))}isEmpty(){return Ww(this.inner)}size(){return this.innerSize}}/**
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
 */const yA=new it(pe.comparator);function Kr(){return yA}const l0=new it(pe.comparator);function tl(...n){let e=l0;for(const t of n)e=e.insert(t.key,t);return e}function c0(n){let e=l0;return n.forEach(((t,i)=>e=e.insert(t,i.overlayedDocument))),e}function Is(){return al()}function u0(){return al()}function al(){return new Ms((n=>n.toString()),((n,e)=>n.isEqual(e)))}const vA=new it(pe.comparator),_A=new xt(pe.comparator);function Pe(...n){let e=_A;for(const t of n)e=e.add(t);return e}const wA=new xt(Ne);function xA(){return wA}/**
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
 */function vp(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Cu(e)?"-0":e}}function h0(n){return{integerValue:""+n}}function EA(n,e){return H1(e)?h0(e):vp(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class ih{constructor(){this._=void 0}}function TA(n,e,t){return n instanceof yl?(function(o,l){const u={fields:{[Gw]:{stringValue:Hw},[Qw]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return l&&pp(l)&&(l=eh(l)),l&&(u.fields[Kw]=l),{mapValue:u}})(t,e):n instanceof vl?f0(n,e):n instanceof _l?p0(n,e):(function(o,l){const u=d0(o,l),p=Sv(u)+Sv(o.Ae);return Af(u)&&Af(o.Ae)?h0(p):vp(o.serializer,p)})(n,e)}function IA(n,e,t){return n instanceof vl?f0(n,e):n instanceof _l?p0(n,e):t}function d0(n,e){return n instanceof Du?(function(i){return Af(i)||(function(l){return!!l&&"doubleValue"in l})(i)})(e)?e:{integerValue:0}:null}class yl extends ih{}class vl extends ih{constructor(e){super(),this.elements=e}}function f0(n,e){const t=m0(e);for(const i of n.elements)t.some((o=>gr(o,i)))||t.push(i);return{arrayValue:{values:t}}}class _l extends ih{constructor(e){super(),this.elements=e}}function p0(n,e){let t=m0(e);for(const i of n.elements)t=t.filter((o=>!gr(o,i)));return{arrayValue:{values:t}}}class Du extends ih{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Sv(n){return ut(n.integerValue||n.doubleValue)}function m0(n){return mp(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class SA{constructor(e,t){this.field=e,this.transform=t}}function bA(n,e){return n.field.isEqual(e.field)&&(function(i,o){return i instanceof vl&&o instanceof vl||i instanceof _l&&o instanceof _l?Uo(i.elements,o.elements,gr):i instanceof Du&&o instanceof Du?gr(i.Ae,o.Ae):i instanceof yl&&o instanceof yl})(n.transform,e.transform)}class kA{constructor(e,t){this.version=e,this.transformResults=t}}class Bn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Bn}static exists(e){return new Bn(void 0,e)}static updateTime(e){return new Bn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function mu(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class sh{}function g0(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new _p(n.key,Bn.none()):new jl(n.key,n.data,Bn.none());{const t=n.data,i=wn.empty();let o=new xt(Nt.comparator);for(let l of e.fields)if(!o.has(l)){let u=t.field(l);u===null&&l.length>1&&(l=l.popLast(),u=t.field(l)),u===null?i.delete(l):i.set(l,u),o=o.add(l)}return new Fs(n.key,i,new Vn(o.toArray()),Bn.none())}}function AA(n,e,t){n instanceof jl?(function(o,l,u){const p=o.value.clone(),m=kv(o.fieldTransforms,l,u.transformResults);p.setAll(m),l.convertToFoundDocument(u.version,p).setHasCommittedMutations()})(n,e,t):n instanceof Fs?(function(o,l,u){if(!mu(o.precondition,l))return void l.convertToUnknownDocument(u.version);const p=kv(o.fieldTransforms,l,u.transformResults),m=l.data;m.setAll(y0(o)),m.setAll(p),l.convertToFoundDocument(u.version,m).setHasCommittedMutations()})(n,e,t):(function(o,l,u){l.convertToNoDocument(u.version).setHasCommittedMutations()})(0,e,t)}function ll(n,e,t,i){return n instanceof jl?(function(l,u,p,m){if(!mu(l.precondition,u))return p;const v=l.value.clone(),w=Av(l.fieldTransforms,m,u);return v.setAll(w),u.convertToFoundDocument(u.version,v).setHasLocalMutations(),null})(n,e,t,i):n instanceof Fs?(function(l,u,p,m){if(!mu(l.precondition,u))return p;const v=Av(l.fieldTransforms,m,u),w=u.data;return w.setAll(y0(l)),w.setAll(v),u.convertToFoundDocument(u.version,w).setHasLocalMutations(),p===null?null:p.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map((E=>E.field)))})(n,e,t,i):(function(l,u,p){return mu(l.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):p})(n,e,t)}function CA(n,e){let t=null;for(const i of n.fieldTransforms){const o=e.data.field(i.field),l=d0(i.transform,o||null);l!=null&&(t===null&&(t=wn.empty()),t.set(i.field,l))}return t||null}function bv(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(i,o){return i===void 0&&o===void 0||!(!i||!o)&&Uo(i,o,((l,u)=>bA(l,u)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class jl extends sh{constructor(e,t,i,o=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Fs extends sh{constructor(e,t,i,o,l=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=o,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function y0(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}})),e}function kv(n,e,t){const i=new Map;Ue(n.length===t.length,32656,{Ve:t.length,de:n.length});for(let o=0;o<t.length;o++){const l=n[o],u=l.transform,p=e.data.field(l.field);i.set(l.field,IA(u,p,t[o]))}return i}function Av(n,e,t){const i=new Map;for(const o of n){const l=o.transform,u=t.data.field(o.field);i.set(o.field,TA(l,u,e))}return i}class _p extends sh{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class RA extends sh{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class NA{constructor(e,t,i,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=o}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const l=this.mutations[o];l.key.isEqual(e.key)&&AA(l,e,i[o])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=ll(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=ll(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=u0();return this.mutations.forEach((o=>{const l=e.get(o.key),u=l.overlayedDocument;let p=this.applyToLocalView(u,l.mutatedFields);p=t.has(o.key)?null:p;const m=g0(u,p);m!==null&&i.set(o.key,m),u.isValidDocument()||u.convertToNoDocument(xe.min())})),i}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Pe())}isEqual(e){return this.batchId===e.batchId&&Uo(this.mutations,e.mutations,((t,i)=>bv(t,i)))&&Uo(this.baseMutations,e.baseMutations,((t,i)=>bv(t,i)))}}class wp{constructor(e,t,i,o){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=o}static from(e,t,i){Ue(e.mutations.length===i.length,58842,{me:e.mutations.length,fe:i.length});let o=(function(){return vA})();const l=e.mutations;for(let u=0;u<l.length;u++)o=o.insert(l[u].key,i[u].version);return new wp(e,t,i,o)}}/**
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
 */class PA{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class jA{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var mt,De;function DA(n){switch(n){case G.OK:return _e(64938);case G.CANCELLED:case G.UNKNOWN:case G.DEADLINE_EXCEEDED:case G.RESOURCE_EXHAUSTED:case G.INTERNAL:case G.UNAVAILABLE:case G.UNAUTHENTICATED:return!1;case G.INVALID_ARGUMENT:case G.NOT_FOUND:case G.ALREADY_EXISTS:case G.PERMISSION_DENIED:case G.FAILED_PRECONDITION:case G.ABORTED:case G.OUT_OF_RANGE:case G.UNIMPLEMENTED:case G.DATA_LOSS:return!0;default:return _e(15467,{code:n})}}function v0(n){if(n===void 0)return Gr("GRPC error has no .code"),G.UNKNOWN;switch(n){case mt.OK:return G.OK;case mt.CANCELLED:return G.CANCELLED;case mt.UNKNOWN:return G.UNKNOWN;case mt.DEADLINE_EXCEEDED:return G.DEADLINE_EXCEEDED;case mt.RESOURCE_EXHAUSTED:return G.RESOURCE_EXHAUSTED;case mt.INTERNAL:return G.INTERNAL;case mt.UNAVAILABLE:return G.UNAVAILABLE;case mt.UNAUTHENTICATED:return G.UNAUTHENTICATED;case mt.INVALID_ARGUMENT:return G.INVALID_ARGUMENT;case mt.NOT_FOUND:return G.NOT_FOUND;case mt.ALREADY_EXISTS:return G.ALREADY_EXISTS;case mt.PERMISSION_DENIED:return G.PERMISSION_DENIED;case mt.FAILED_PRECONDITION:return G.FAILED_PRECONDITION;case mt.ABORTED:return G.ABORTED;case mt.OUT_OF_RANGE:return G.OUT_OF_RANGE;case mt.UNIMPLEMENTED:return G.UNIMPLEMENTED;case mt.DATA_LOSS:return G.DATA_LOSS;default:return _e(39323,{code:n})}}(De=mt||(mt={}))[De.OK=0]="OK",De[De.CANCELLED=1]="CANCELLED",De[De.UNKNOWN=2]="UNKNOWN",De[De.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",De[De.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",De[De.NOT_FOUND=5]="NOT_FOUND",De[De.ALREADY_EXISTS=6]="ALREADY_EXISTS",De[De.PERMISSION_DENIED=7]="PERMISSION_DENIED",De[De.UNAUTHENTICATED=16]="UNAUTHENTICATED",De[De.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",De[De.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",De[De.ABORTED=10]="ABORTED",De[De.OUT_OF_RANGE=11]="OUT_OF_RANGE",De[De.UNIMPLEMENTED=12]="UNIMPLEMENTED",De[De.INTERNAL=13]="INTERNAL",De[De.UNAVAILABLE=14]="UNAVAILABLE",De[De.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function LA(){return new TextEncoder}/**
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
 */const OA=new Oi([4294967295,4294967295],0);function Cv(n){const e=LA().encode(n),t=new jw;return t.update(e),new Uint8Array(t.digest())}function Rv(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),o=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new Oi([t,i],0),new Oi([o,l],0)]}class xp{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new nl(`Invalid padding: ${t}`);if(i<0)throw new nl(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new nl(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new nl(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Oi.fromNumber(this.ge)}ye(e,t,i){let o=e.add(t.multiply(Oi.fromNumber(i)));return o.compare(OA)===1&&(o=new Oi([o.getBits(0),o.getBits(1)],0)),o.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Cv(e),[i,o]=Rv(t);for(let l=0;l<this.hashCount;l++){const u=this.ye(i,o,l);if(!this.we(u))return!1}return!0}static create(e,t,i){const o=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),u=new xp(l,o,t);return i.forEach((p=>u.insert(p))),u}insert(e){if(this.ge===0)return;const t=Cv(e),[i,o]=Rv(t);for(let l=0;l<this.hashCount;l++){const u=this.ye(i,o,l);this.Se(u)}}Se(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class nl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class oh{constructor(e,t,i,o,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=o,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const o=new Map;return o.set(e,Dl.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new oh(xe.min(),o,new it(Ne),Kr(),Pe())}}class Dl{constructor(e,t,i,o,l){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=o,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new Dl(i,t,Pe(),Pe(),Pe())}}/**
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
 */class gu{constructor(e,t,i,o){this.be=e,this.removedTargetIds=t,this.key=i,this.De=o}}class _0{constructor(e,t){this.targetId=e,this.Ce=t}}class w0{constructor(e,t,i=Pt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=o}}class Nv{constructor(){this.ve=0,this.Fe=Pv(),this.Me=Pt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Pe(),t=Pe(),i=Pe();return this.Fe.forEach(((o,l)=>{switch(l){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:i=i.add(o);break;default:_e(38017,{changeType:l})}})),new Dl(this.Me,this.xe,e,t,i)}qe(){this.Oe=!1,this.Fe=Pv()}Ke(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,Ue(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class VA{constructor(e){this.Ge=e,this.ze=new Map,this.je=Kr(),this.Je=iu(),this.He=iu(),this.Ze=new it(Ne)}Xe(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const i=this.nt(t);switch(e.state){case 0:this.rt(t)&&i.Le(e.resumeToken);break;case 1:i.We(),i.Ne||i.qe(),i.Le(e.resumeToken);break;case 2:i.We(),i.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(i.Qe(),i.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),i.Le(e.resumeToken));break;default:_e(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((i,o)=>{this.rt(o)&&t(o)}))}st(e){const t=e.targetId,i=e.Ce.count,o=this.ot(t);if(o){const l=o.target;if(Rf(l))if(i===0){const u=new pe(l.path);this.et(t,u,Bt.newNoDocument(u,xe.min()))}else Ue(i===1,20013,{expectedCount:i});else{const u=this._t(t);if(u!==i){const p=this.ut(e),m=p?this.ct(p,e,u):1;if(m!==0){this.it(t);const v=m===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,v)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:o=0},hashCount:l=0}=t;let u,p;try{u=Bi(i).toUint8Array()}catch(m){if(m instanceof qw)return Ps("Decoding the base64 bloom filter in existence filter failed ("+m.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw m}try{p=new xp(u,o,l)}catch(m){return Ps(m instanceof nl?"BloomFilter error: ":"Applying bloom filter failed: ",m),null}return p.ge===0?null:p}ct(e,t,i){return t.Ce.count===i-this.Pt(e,t.targetId)?0:2}Pt(e,t){const i=this.Ge.getRemoteKeysForTarget(t);let o=0;return i.forEach((l=>{const u=this.Ge.ht(),p=`projects/${u.projectId}/databases/${u.database}/documents/${l.path.canonicalString()}`;e.mightContain(p)||(this.et(t,l,null),o++)})),o}Tt(e){const t=new Map;this.ze.forEach(((l,u)=>{const p=this.ot(u);if(p){if(l.current&&Rf(p.target)){const m=new pe(p.target.path);this.Et(m).has(u)||this.It(u,m)||this.et(u,m,Bt.newNoDocument(m,e))}l.Be&&(t.set(u,l.ke()),l.qe())}}));let i=Pe();this.He.forEach(((l,u)=>{let p=!0;u.forEachWhile((m=>{const v=this.ot(m);return!v||v.purpose==="TargetPurposeLimboResolution"||(p=!1,!1)})),p&&(i=i.add(l))})),this.je.forEach(((l,u)=>u.setReadTime(e)));const o=new oh(e,t,this.Ze,this.je,i);return this.je=Kr(),this.Je=iu(),this.He=iu(),this.Ze=new it(Ne),o}Ye(e,t){if(!this.rt(e))return;const i=this.It(e,t.key)?2:0;this.nt(e).Ke(t.key,i),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Et(t.key).add(e)),this.He=this.He.insert(t.key,this.Rt(t.key).add(e))}et(e,t,i){if(!this.rt(e))return;const o=this.nt(e);this.It(e,t)?o.Ke(t,1):o.Ue(t),this.He=this.He.insert(t,this.Rt(t).delete(e)),this.He=this.He.insert(t,this.Rt(t).add(e)),i&&(this.je=this.je.insert(t,i))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new Nv,this.ze.set(e,t)),t}Rt(e){let t=this.He.get(e);return t||(t=new xt(Ne),this.He=this.He.insert(e,t)),t}Et(e){let t=this.Je.get(e);return t||(t=new xt(Ne),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||ae("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Nv),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}It(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function iu(){return new it(pe.comparator)}function Pv(){return new it(pe.comparator)}const MA={asc:"ASCENDING",desc:"DESCENDING"},FA={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},UA={and:"AND",or:"OR"};class BA{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Pf(n,e){return n.useProto3Json||Zu(e)?e:{value:e}}function Lu(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function x0(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function zA(n,e){return Lu(n,e.toTimestamp())}function dr(n){return Ue(!!n,49232),xe.fromTimestamp((function(t){const i=Ui(t);return new Xe(i.seconds,i.nanos)})(n))}function Ep(n,e){return jf(n,e).canonicalString()}function jf(n,e){const t=(function(o){return new Ke(["projects",o.projectId,"databases",o.database])})(n).child("documents");return e===void 0?t:t.child(e)}function E0(n){const e=Ke.fromString(n);return Ue(k0(e),10190,{key:e.toString()}),e}function Df(n,e){return Ep(n.databaseId,e.path)}function rf(n,e){const t=E0(e);if(t.get(1)!==n.databaseId.projectId)throw new se(G.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new se(G.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new pe(I0(t))}function T0(n,e){return Ep(n.databaseId,e)}function $A(n){const e=E0(n);return e.length===4?Ke.emptyPath():I0(e)}function Lf(n){return new Ke(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function I0(n){return Ue(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function jv(n,e,t){return{name:Df(n,e),fields:t.value.mapValue.fields}}function WA(n,e){let t;if("targetChange"in e){e.targetChange;const i=(function(v){return v==="NO_CHANGE"?0:v==="ADD"?1:v==="REMOVE"?2:v==="CURRENT"?3:v==="RESET"?4:_e(39313,{state:v})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],l=(function(v,w){return v.useProto3Json?(Ue(w===void 0||typeof w=="string",58123),Pt.fromBase64String(w||"")):(Ue(w===void 0||w instanceof Buffer||w instanceof Uint8Array,16193),Pt.fromUint8Array(w||new Uint8Array))})(n,e.targetChange.resumeToken),u=e.targetChange.cause,p=u&&(function(v){const w=v.code===void 0?G.UNKNOWN:v0(v.code);return new se(w,v.message||"")})(u);t=new w0(i,o,l,p||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const o=rf(n,i.document.name),l=dr(i.document.updateTime),u=i.document.createTime?dr(i.document.createTime):xe.min(),p=new wn({mapValue:{fields:i.document.fields}}),m=Bt.newFoundDocument(o,l,u,p),v=i.targetIds||[],w=i.removedTargetIds||[];t=new gu(v,w,m.key,m)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const o=rf(n,i.document),l=i.readTime?dr(i.readTime):xe.min(),u=Bt.newNoDocument(o,l),p=i.removedTargetIds||[];t=new gu([],p,u.key,u)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const o=rf(n,i.document),l=i.removedTargetIds||[];t=new gu([],l,o,null)}else{if(!("filter"in e))return _e(11601,{Vt:e});{e.filter;const i=e.filter;i.targetId;const{count:o=0,unchangedNames:l}=i,u=new jA(o,l),p=i.targetId;t=new _0(p,u)}}return t}function qA(n,e){let t;if(e instanceof jl)t={update:jv(n,e.key,e.value)};else if(e instanceof _p)t={delete:Df(n,e.key)};else if(e instanceof Fs)t={update:jv(n,e.key,e.data),updateMask:eC(e.fieldMask)};else{if(!(e instanceof RA))return _e(16599,{dt:e.type});t={verify:Df(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((i=>(function(l,u){const p=u.transform;if(p instanceof yl)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(p instanceof vl)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:p.elements}};if(p instanceof _l)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:p.elements}};if(p instanceof Du)return{fieldPath:u.field.canonicalString(),increment:p.Ae};throw _e(20930,{transform:u.transform})})(0,i)))),e.precondition.isNone||(t.currentDocument=(function(o,l){return l.updateTime!==void 0?{updateTime:zA(o,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:_e(27497)})(n,e.precondition)),t}function HA(n,e){return n&&n.length>0?(Ue(e!==void 0,14353),n.map((t=>(function(o,l){let u=o.updateTime?dr(o.updateTime):dr(l);return u.isEqual(xe.min())&&(u=dr(l)),new kA(u,o.transformResults||[])})(t,e)))):[]}function GA(n,e){return{documents:[T0(n,e.path)]}}function KA(n,e){const t={structuredQuery:{}},i=e.path;let o;e.collectionGroup!==null?(o=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=T0(n,o);const l=(function(v){if(v.length!==0)return b0(Wn.create(v,"and"))})(e.filters);l&&(t.structuredQuery.where=l);const u=(function(v){if(v.length!==0)return v.map((w=>(function(I){return{field:Po(I.field),direction:JA(I.dir)}})(w)))})(e.orderBy);u&&(t.structuredQuery.orderBy=u);const p=Pf(n,e.limit);return p!==null&&(t.structuredQuery.limit=p),e.startAt&&(t.structuredQuery.startAt=(function(v){return{before:v.inclusive,values:v.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(v){return{before:!v.inclusive,values:v.position}})(e.endAt)),{ft:t,parent:o}}function QA(n){let e=$A(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let o=null;if(i>0){Ue(i===1,65062);const w=t.from[0];w.allDescendants?o=w.collectionId:e=e.child(w.collectionId)}let l=[];t.where&&(l=(function(E){const I=S0(E);return I instanceof Wn&&t0(I)?I.getFilters():[I]})(t.where));let u=[];t.orderBy&&(u=(function(E){return E.map((I=>(function(q){return new gl(jo(q.field),(function(L){switch(L){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(q.direction))})(I)))})(t.orderBy));let p=null;t.limit&&(p=(function(E){let I;return I=typeof E=="object"?E.value:E,Zu(I)?null:I})(t.limit));let m=null;t.startAt&&(m=(function(E){const I=!!E.before,P=E.values||[];return new Pu(P,I)})(t.startAt));let v=null;return t.endAt&&(v=(function(E){const I=!E.before,P=E.values||[];return new Pu(P,I)})(t.endAt)),hA(e,o,u,l,p,"F",m,v)}function YA(n,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return _e(28987,{purpose:o})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function S0(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=jo(t.unaryFilter.field);return gt.create(i,"==",{doubleValue:NaN});case"IS_NULL":const o=jo(t.unaryFilter.field);return gt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=jo(t.unaryFilter.field);return gt.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=jo(t.unaryFilter.field);return gt.create(u,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return _e(61313);default:return _e(60726)}})(n):n.fieldFilter!==void 0?(function(t){return gt.create(jo(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return _e(58110);default:return _e(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return Wn.create(t.compositeFilter.filters.map((i=>S0(i))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return _e(1026)}})(t.compositeFilter.op))})(n):_e(30097,{filter:n})}function JA(n){return MA[n]}function XA(n){return FA[n]}function ZA(n){return UA[n]}function Po(n){return{fieldPath:n.canonicalString()}}function jo(n){return Nt.fromServerFormat(n.fieldPath)}function b0(n){return n instanceof gt?(function(t){if(t.op==="=="){if(wv(t.value))return{unaryFilter:{field:Po(t.field),op:"IS_NAN"}};if(_v(t.value))return{unaryFilter:{field:Po(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(wv(t.value))return{unaryFilter:{field:Po(t.field),op:"IS_NOT_NAN"}};if(_v(t.value))return{unaryFilter:{field:Po(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Po(t.field),op:XA(t.op),value:t.value}}})(n):n instanceof Wn?(function(t){const i=t.getFilters().map((o=>b0(o)));return i.length===1?i[0]:{compositeFilter:{op:ZA(t.op),filters:i}}})(n):_e(54877,{filter:n})}function eC(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function k0(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function A0(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}/**
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
 */class Di{constructor(e,t,i,o,l=xe.min(),u=xe.min(),p=Pt.EMPTY_BYTE_STRING,m=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=o,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=p,this.expectedCount=m}withSequenceNumber(e){return new Di(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Di(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Di(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Di(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class tC{constructor(e){this.yt=e}}function nC(n){const e=QA({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?ju(e,e.limit,"L"):e}/**
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
 */class rC{constructor(){this.bn=new iC}addToCollectionParentIndex(e,t){return this.bn.add(t),K.resolve()}getCollectionParents(e,t){return K.resolve(this.bn.getEntries(t))}addFieldIndex(e,t){return K.resolve()}deleteFieldIndex(e,t){return K.resolve()}deleteAllFieldIndexes(e){return K.resolve()}createTargetIndexes(e,t){return K.resolve()}getDocumentsMatchingTarget(e,t){return K.resolve(null)}getIndexType(e,t){return K.resolve(0)}getFieldIndexes(e,t){return K.resolve([])}getNextCollectionGroupToUpdate(e){return K.resolve(null)}getMinOffset(e,t){return K.resolve(Fi.min())}getMinOffsetFromCollectionGroup(e,t){return K.resolve(Fi.min())}updateCollectionGroup(e,t,i){return K.resolve()}updateIndexEntries(e,t){return K.resolve()}}class iC{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t]||new xt(Ke.comparator),l=!o.has(i);return this.index[t]=o.add(i),l}has(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t];return o&&o.has(i)}getEntries(e){return(this.index[e]||new xt(Ke.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
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
 */const Dv={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},C0=41943040;class Zt{static withCacheSize(e){return new Zt(e,Zt.DEFAULT_COLLECTION_PERCENTILE,Zt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}}/**
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
 */Zt.DEFAULT_COLLECTION_PERCENTILE=10,Zt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Zt.DEFAULT=new Zt(C0,Zt.DEFAULT_COLLECTION_PERCENTILE,Zt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Zt.DISABLED=new Zt(-1,0,0);/**
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
 */class $o{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new $o(0)}static ar(){return new $o(-1)}}/**
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
 */const Lv="LruGarbageCollector",sC=1048576;function Ov([n,e],[t,i]){const o=Ne(n,t);return o===0?Ne(e,i):o}class oC{constructor(e){this.Pr=e,this.buffer=new xt(Ov),this.Tr=0}Er(){return++this.Tr}Ir(e){const t=[e,this.Er()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const i=this.buffer.last();Ov(t,i)<0&&(this.buffer=this.buffer.delete(i).add(t))}}get maxValue(){return this.buffer.last()[0]}}class aC{constructor(e,t,i){this.garbageCollector=e,this.asyncQueue=t,this.localStore=i,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){ae(Lv,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Xo(t)?ae(Lv,"Ignoring IndexedDB error during garbage collection: ",t):await Jo(t)}await this.Ar(3e5)}))}}class lC{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next((i=>Math.floor(t/100*i)))}nthSequenceNumber(e,t){if(t===0)return K.resolve(Xu.ce);const i=new oC(t);return this.Vr.forEachTarget(e,(o=>i.Ir(o.sequenceNumber))).next((()=>this.Vr.mr(e,(o=>i.Ir(o))))).next((()=>i.maxValue))}removeTargets(e,t,i){return this.Vr.removeTargets(e,t,i)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ae("LruGarbageCollector","Garbage collection skipped; disabled"),K.resolve(Dv)):this.getCacheSize(e).next((i=>i<this.params.cacheSizeCollectionThreshold?(ae("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Dv):this.gr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let i,o,l,u,p,m,v;const w=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((E=>(E>this.params.maximumSequenceNumbersToCollect?(ae("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${E}`),o=this.params.maximumSequenceNumbersToCollect):o=E,u=Date.now(),this.nthSequenceNumber(e,o)))).next((E=>(i=E,p=Date.now(),this.removeTargets(e,i,t)))).next((E=>(l=E,m=Date.now(),this.removeOrphanedDocuments(e,i)))).next((E=>(v=Date.now(),Ro()<=Re.DEBUG&&ae("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${u-w}ms
	Determined least recently used ${o} in `+(p-u)+`ms
	Removed ${l} targets in `+(m-p)+`ms
	Removed ${E} documents in `+(v-m)+`ms
Total Duration: ${v-w}ms`),K.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:l,documentsRemoved:E}))))}}function cC(n,e){return new lC(n,e)}/**
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
 */class uC{constructor(){this.changes=new Ms((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Bt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?K.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 *//**
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
 */class hC{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class dC{constructor(e,t,i,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=o}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(i=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(i!==null&&ll(i.mutation,o,Vn.empty(),Xe.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.getLocalViewOfDocuments(e,i,Pe()).next((()=>i))))}getLocalViewOfDocuments(e,t,i=Pe()){const o=Is();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,i).next((l=>{let u=tl();return l.forEach(((p,m)=>{u=u.insert(p,m.overlayedDocument)})),u}))))}getOverlayedDocuments(e,t){const i=Is();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,Pe())))}populateOverlays(e,t,i){const o=[];return i.forEach((l=>{t.has(l)||o.push(l)})),this.documentOverlayCache.getOverlays(e,o).next((l=>{l.forEach(((u,p)=>{t.set(u,p)}))}))}computeViews(e,t,i,o){let l=Kr();const u=al(),p=(function(){return al()})();return t.forEach(((m,v)=>{const w=i.get(v.key);o.has(v.key)&&(w===void 0||w.mutation instanceof Fs)?l=l.insert(v.key,v):w!==void 0?(u.set(v.key,w.mutation.getFieldMask()),ll(w.mutation,v,w.mutation.getFieldMask(),Xe.now())):u.set(v.key,Vn.empty())})),this.recalculateAndSaveOverlays(e,l).next((m=>(m.forEach(((v,w)=>u.set(v,w))),t.forEach(((v,w)=>p.set(v,new hC(w,u.get(v)??null)))),p)))}recalculateAndSaveOverlays(e,t){const i=al();let o=new it(((u,p)=>u-p)),l=Pe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((u=>{for(const p of u)p.keys().forEach((m=>{const v=t.get(m);if(v===null)return;let w=i.get(m)||Vn.empty();w=p.applyToLocalView(v,w),i.set(m,w);const E=(o.get(p.batchId)||Pe()).add(m);o=o.insert(p.batchId,E)}))})).next((()=>{const u=[],p=o.getReverseIterator();for(;p.hasNext();){const m=p.getNext(),v=m.key,w=m.value,E=u0();w.forEach((I=>{if(!l.has(I)){const P=g0(t.get(I),i.get(I));P!==null&&E.set(I,P),l=l.add(I)}})),u.push(this.documentOverlayCache.saveOverlays(e,v,E))}return K.waitFor(u)})).next((()=>i))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.recalculateAndSaveOverlays(e,i)))}getDocumentsMatchingQuery(e,t,i,o){return dA(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):s0(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,o):this.getDocumentsMatchingCollectionQuery(e,t,i,o)}getNextDocuments(e,t,i,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,o).next((l=>{const u=o-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,o-l.size):K.resolve(Is());let p=dl,m=l;return u.next((v=>K.forEach(v,((w,E)=>(p<E.largestBatchId&&(p=E.largestBatchId),l.get(w)?K.resolve():this.remoteDocumentCache.getEntry(e,w).next((I=>{m=m.insert(w,I)}))))).next((()=>this.populateOverlays(e,v,l))).next((()=>this.computeViews(e,m,v,Pe()))).next((w=>({batchId:p,changes:c0(w)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new pe(t)).next((i=>{let o=tl();return i.isFoundDocument()&&(o=o.insert(i.key,i)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,i,o){const l=t.collectionGroup;let u=tl();return this.indexManager.getCollectionParents(e,l).next((p=>K.forEach(p,(m=>{const v=(function(E,I){return new Zo(I,null,E.explicitOrderBy.slice(),E.filters.slice(),E.limit,E.limitType,E.startAt,E.endAt)})(t,m.child(l));return this.getDocumentsMatchingCollectionQuery(e,v,i,o).next((w=>{w.forEach(((E,I)=>{u=u.insert(E,I)}))}))})).next((()=>u))))}getDocumentsMatchingCollectionQuery(e,t,i,o){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next((u=>(l=u,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,l,o)))).next((u=>{l.forEach(((m,v)=>{const w=v.getKey();u.get(w)===null&&(u=u.insert(w,Bt.newInvalidDocument(w)))}));let p=tl();return u.forEach(((m,v)=>{const w=l.get(m);w!==void 0&&ll(w.mutation,v,Vn.empty(),Xe.now()),rh(t,v)&&(p=p.insert(m,v))})),p}))}}/**
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
 */class fC{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return K.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:dr(o.createTime)}})(t)),K.resolve()}getNamedQuery(e,t){return K.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,(function(o){return{name:o.name,query:nC(o.bundledQuery),readTime:dr(o.readTime)}})(t)),K.resolve()}}/**
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
 */class pC{constructor(){this.overlays=new it(pe.comparator),this.Lr=new Map}getOverlay(e,t){return K.resolve(this.overlays.get(t))}getOverlays(e,t){const i=Is();return K.forEach(t,(o=>this.getOverlay(e,o).next((l=>{l!==null&&i.set(o,l)})))).next((()=>i))}saveOverlays(e,t,i){return i.forEach(((o,l)=>{this.St(e,t,l)})),K.resolve()}removeOverlaysForBatchId(e,t,i){const o=this.Lr.get(i);return o!==void 0&&(o.forEach((l=>this.overlays=this.overlays.remove(l))),this.Lr.delete(i)),K.resolve()}getOverlaysForCollection(e,t,i){const o=Is(),l=t.length+1,u=new pe(t.child("")),p=this.overlays.getIteratorFrom(u);for(;p.hasNext();){const m=p.getNext().value,v=m.getKey();if(!t.isPrefixOf(v.path))break;v.path.length===l&&m.largestBatchId>i&&o.set(m.getKey(),m)}return K.resolve(o)}getOverlaysForCollectionGroup(e,t,i,o){let l=new it(((v,w)=>v-w));const u=this.overlays.getIterator();for(;u.hasNext();){const v=u.getNext().value;if(v.getKey().getCollectionGroup()===t&&v.largestBatchId>i){let w=l.get(v.largestBatchId);w===null&&(w=Is(),l=l.insert(v.largestBatchId,w)),w.set(v.getKey(),v)}}const p=Is(),m=l.getIterator();for(;m.hasNext()&&(m.getNext().value.forEach(((v,w)=>p.set(v,w))),!(p.size()>=o)););return K.resolve(p)}St(e,t,i){const o=this.overlays.get(i.key);if(o!==null){const u=this.Lr.get(o.largestBatchId).delete(i.key);this.Lr.set(o.largestBatchId,u)}this.overlays=this.overlays.insert(i.key,new PA(t,i));let l=this.Lr.get(t);l===void 0&&(l=Pe(),this.Lr.set(t,l)),this.Lr.set(t,l.add(i.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class mC{constructor(){this.sessionToken=Pt.EMPTY_BYTE_STRING}getSessionToken(e){return K.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,K.resolve()}}/**
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
 */class Tp{constructor(){this.kr=new xt(St.qr),this.Kr=new xt(St.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const i=new St(e,t);this.kr=this.kr.add(i),this.Kr=this.Kr.add(i)}$r(e,t){e.forEach((i=>this.addReference(i,t)))}removeReference(e,t){this.Wr(new St(e,t))}Qr(e,t){e.forEach((i=>this.removeReference(i,t)))}Gr(e){const t=new pe(new Ke([])),i=new St(t,e),o=new St(t,e+1),l=[];return this.Kr.forEachInRange([i,o],(u=>{this.Wr(u),l.push(u.key)})),l}zr(){this.kr.forEach((e=>this.Wr(e)))}Wr(e){this.kr=this.kr.delete(e),this.Kr=this.Kr.delete(e)}jr(e){const t=new pe(new Ke([])),i=new St(t,e),o=new St(t,e+1);let l=Pe();return this.Kr.forEachInRange([i,o],(u=>{l=l.add(u.key)})),l}containsKey(e){const t=new St(e,0),i=this.kr.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class St{constructor(e,t){this.key=e,this.Jr=t}static qr(e,t){return pe.comparator(e.key,t.key)||Ne(e.Jr,t.Jr)}static Ur(e,t){return Ne(e.Jr,t.Jr)||pe.comparator(e.key,t.key)}}/**
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
 */class gC{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Hr=new xt(St.qr)}checkEmpty(e){return K.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,o){const l=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new NA(l,t,i,o);this.mutationQueue.push(u);for(const p of o)this.Hr=this.Hr.add(new St(p.key,l)),this.indexManager.addToCollectionParentIndex(e,p.key.path.popLast());return K.resolve(u)}lookupMutationBatch(e,t){return K.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,o=this.Xr(i),l=o<0?0:o;return K.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return K.resolve(this.mutationQueue.length===0?fp:this.Yn-1)}getAllMutationBatches(e){return K.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new St(t,0),o=new St(t,Number.POSITIVE_INFINITY),l=[];return this.Hr.forEachInRange([i,o],(u=>{const p=this.Zr(u.Jr);l.push(p)})),K.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new xt(Ne);return t.forEach((o=>{const l=new St(o,0),u=new St(o,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([l,u],(p=>{i=i.add(p.Jr)}))})),K.resolve(this.Yr(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,o=i.length+1;let l=i;pe.isDocumentKey(l)||(l=l.child(""));const u=new St(new pe(l),0);let p=new xt(Ne);return this.Hr.forEachWhile((m=>{const v=m.key.path;return!!i.isPrefixOf(v)&&(v.length===o&&(p=p.add(m.Jr)),!0)}),u),K.resolve(this.Yr(p))}Yr(e){const t=[];return e.forEach((i=>{const o=this.Zr(i);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){Ue(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let i=this.Hr;return K.forEach(t.mutations,(o=>{const l=new St(o.key,t.batchId);return i=i.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Hr=i}))}nr(e){}containsKey(e,t){const i=new St(t,0),o=this.Hr.firstAfterOrEqual(i);return K.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,K.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class yC{constructor(e){this.ti=e,this.docs=(function(){return new it(pe.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,o=this.docs.get(i),l=o?o.size:0,u=this.ti(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:u}),this.size+=u-l,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return K.resolve(i?i.document.mutableCopy():Bt.newInvalidDocument(t))}getEntries(e,t){let i=Kr();return t.forEach((o=>{const l=this.docs.get(o);i=i.insert(o,l?l.document.mutableCopy():Bt.newInvalidDocument(o))})),K.resolve(i)}getDocumentsMatchingQuery(e,t,i,o){let l=Kr();const u=t.path,p=new pe(u.child("__id-9223372036854775808__")),m=this.docs.getIteratorFrom(p);for(;m.hasNext();){const{key:v,value:{document:w}}=m.getNext();if(!u.isPrefixOf(v.path))break;v.path.length>u.length+1||z1(B1(w),i)<=0||(o.has(w.key)||rh(t,w))&&(l=l.insert(w.key,w.mutableCopy()))}return K.resolve(l)}getAllFromCollectionGroup(e,t,i,o){_e(9500)}ni(e,t){return K.forEach(this.docs,(i=>t(i)))}newChangeBuffer(e){return new vC(this)}getSize(e){return K.resolve(this.size)}}class vC extends uC{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach(((i,o)=>{o.isValidDocument()?t.push(this.Mr.addEntry(e,o)):this.Mr.removeEntry(i)})),K.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
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
 */class _C{constructor(e){this.persistence=e,this.ri=new Ms((t=>gp(t)),yp),this.lastRemoteSnapshotVersion=xe.min(),this.highestTargetId=0,this.ii=0,this.si=new Tp,this.targetCount=0,this.oi=$o._r()}forEachTarget(e,t){return this.ri.forEach(((i,o)=>t(o))),K.resolve()}getLastRemoteSnapshotVersion(e){return K.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return K.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),K.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.ii&&(this.ii=t),K.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new $o(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,K.resolve()}updateTargetData(e,t){return this.lr(t),K.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,K.resolve()}removeTargets(e,t,i){let o=0;const l=[];return this.ri.forEach(((u,p)=>{p.sequenceNumber<=t&&i.get(p.targetId)===null&&(this.ri.delete(u),l.push(this.removeMatchingKeysForTargetId(e,p.targetId)),o++)})),K.waitFor(l).next((()=>o))}getTargetCount(e){return K.resolve(this.targetCount)}getTargetData(e,t){const i=this.ri.get(t)||null;return K.resolve(i)}addMatchingKeys(e,t,i){return this.si.$r(t,i),K.resolve()}removeMatchingKeys(e,t,i){this.si.Qr(t,i);const o=this.persistence.referenceDelegate,l=[];return o&&t.forEach((u=>{l.push(o.markPotentiallyOrphaned(e,u))})),K.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),K.resolve()}getMatchingKeysForTargetId(e,t){const i=this.si.jr(t);return K.resolve(i)}containsKey(e,t){return K.resolve(this.si.containsKey(t))}}/**
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
 */class R0{constructor(e,t){this._i={},this.overlays={},this.ai=new Xu(0),this.ui=!1,this.ui=!0,this.ci=new mC,this.referenceDelegate=e(this),this.li=new _C(this),this.indexManager=new rC,this.remoteDocumentCache=(function(o){return new yC(o)})((i=>this.referenceDelegate.hi(i))),this.serializer=new tC(t),this.Pi=new fC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new pC,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this._i[e.toKey()];return i||(i=new gC(t,this.referenceDelegate),this._i[e.toKey()]=i),i}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,i){ae("MemoryPersistence","Starting transaction:",e);const o=new wC(this.ai.next());return this.referenceDelegate.Ti(),i(o).next((l=>this.referenceDelegate.Ei(o).next((()=>l)))).toPromise().then((l=>(o.raiseOnCommittedEvent(),l)))}Ii(e,t){return K.or(Object.values(this._i).map((i=>()=>i.containsKey(e,t))))}}class wC extends W1{constructor(e){super(),this.currentSequenceNumber=e}}class Ip{constructor(e){this.persistence=e,this.Ri=new Tp,this.Ai=null}static Vi(e){return new Ip(e)}get di(){if(this.Ai)return this.Ai;throw _e(60996)}addReference(e,t,i){return this.Ri.addReference(i,t),this.di.delete(i.toString()),K.resolve()}removeReference(e,t,i){return this.Ri.removeReference(i,t),this.di.add(i.toString()),K.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),K.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach((o=>this.di.add(o.toString())));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((l=>this.di.add(l.toString())))})).next((()=>i.removeTargetData(e,t)))}Ti(){this.Ai=new Set}Ei(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return K.forEach(this.di,(i=>{const o=pe.fromPath(i);return this.mi(e,o).next((l=>{l||t.removeEntry(o,xe.min())}))})).next((()=>(this.Ai=null,t.apply(e))))}updateLimboDocument(e,t){return this.mi(e,t).next((i=>{i?this.di.delete(t.toString()):this.di.add(t.toString())}))}hi(e){return 0}mi(e,t){return K.or([()=>K.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ii(e,t)])}}class Ou{constructor(e,t){this.persistence=e,this.fi=new Ms((i=>G1(i.path)),((i,o)=>i.isEqual(o))),this.garbageCollector=cC(this,t)}static Vi(e,t){return new Ou(e,t)}Ti(){}Ei(e){return K.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next((i=>t.next((o=>i+o))))}pr(e){let t=0;return this.mr(e,(i=>{t++})).next((()=>t))}mr(e,t){return K.forEach(this.fi,((i,o)=>this.wr(e,i,o).next((l=>l?K.resolve():t(o)))))}removeTargets(e,t,i){return this.persistence.getTargetCache().removeTargets(e,t,i)}removeOrphanedDocuments(e,t){let i=0;const o=this.persistence.getRemoteDocumentCache(),l=o.newChangeBuffer();return o.ni(e,(u=>this.wr(e,u,t).next((p=>{p||(i++,l.removeEntry(u,xe.min()))})))).next((()=>l.apply(e))).next((()=>i))}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),K.resolve()}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,t,i){return this.fi.set(i,e.currentSequenceNumber),K.resolve()}removeReference(e,t,i){return this.fi.set(i,e.currentSequenceNumber),K.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),K.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=fu(e.data.value)),t}wr(e,t,i){return K.or([()=>this.persistence.Ii(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.fi.get(t);return K.resolve(o!==void 0&&o>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Sp{constructor(e,t,i,o){this.targetId=e,this.fromCache=t,this.Ts=i,this.Es=o}static Is(e,t){let i=Pe(),o=Pe();for(const l of t.docChanges)switch(l.type){case 0:i=i.add(l.doc.key);break;case 1:o=o.add(l.doc.key)}return new Sp(e,t.fromCache,i,o)}}/**
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
 */class xC{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class EC{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return QI()?8:q1($t())>0?6:4})()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,i,o){const l={result:null};return this.gs(e,t).next((u=>{l.result=u})).next((()=>{if(!l.result)return this.ps(e,t,o,i).next((u=>{l.result=u}))})).next((()=>{if(l.result)return;const u=new xC;return this.ys(e,t,u).next((p=>{if(l.result=p,this.As)return this.ws(e,t,u,p.size)}))})).next((()=>l.result))}ws(e,t,i,o){return i.documentReadCount<this.Vs?(Ro()<=Re.DEBUG&&ae("QueryEngine","SDK will not create cache indexes for query:",No(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),K.resolve()):(Ro()<=Re.DEBUG&&ae("QueryEngine","Query:",No(t),"scans",i.documentReadCount,"local documents and returns",o,"documents as results."),i.documentReadCount>this.ds*o?(Ro()<=Re.DEBUG&&ae("QueryEngine","The SDK decides to create cache indexes for query:",No(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,hr(t))):K.resolve())}gs(e,t){if(Iv(t))return K.resolve(null);let i=hr(t);return this.indexManager.getIndexType(e,i).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=ju(t,null,"F"),i=hr(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next((l=>{const u=Pe(...l);return this.fs.getDocuments(e,u).next((p=>this.indexManager.getMinOffset(e,i).next((m=>{const v=this.Ss(t,p);return this.bs(t,v,u,m.readTime)?this.gs(e,ju(t,null,"F")):this.Ds(e,v,t,m)}))))})))))}ps(e,t,i,o){return Iv(t)||o.isEqual(xe.min())?K.resolve(null):this.fs.getDocuments(e,i).next((l=>{const u=this.Ss(t,l);return this.bs(t,u,i,o)?K.resolve(null):(Ro()<=Re.DEBUG&&ae("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),No(t)),this.Ds(e,u,t,U1(o,dl)).next((p=>p)))}))}Ss(e,t){let i=new xt(a0(e));return t.forEach(((o,l)=>{rh(e,l)&&(i=i.add(l))})),i}bs(e,t,i,o){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(o)>0)}ys(e,t,i){return Ro()<=Re.DEBUG&&ae("QueryEngine","Using full collection scan to execute query:",No(t)),this.fs.getDocumentsMatchingQuery(e,t,Fi.min(),i)}Ds(e,t,i,o){return this.fs.getDocumentsMatchingQuery(e,i,o).next((l=>(t.forEach((u=>{l=l.insert(u.key,u)})),l)))}}/**
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
 */const bp="LocalStore",TC=3e8;class IC{constructor(e,t,i,o){this.persistence=e,this.Cs=t,this.serializer=o,this.vs=new it(Ne),this.Fs=new Ms((l=>gp(l)),yp),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(i)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new dC(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.vs)))}}function SC(n,e,t,i){return new IC(n,e,t,i)}async function N0(n,e){const t=Te(n);return await t.persistence.runTransaction("Handle user change","readonly",(i=>{let o;return t.mutationQueue.getAllMutationBatches(i).next((l=>(o=l,t.Os(e),t.mutationQueue.getAllMutationBatches(i)))).next((l=>{const u=[],p=[];let m=Pe();for(const v of o){u.push(v.batchId);for(const w of v.mutations)m=m.add(w.key)}for(const v of l){p.push(v.batchId);for(const w of v.mutations)m=m.add(w.key)}return t.localDocuments.getDocuments(i,m).next((v=>({Ns:v,removedBatchIds:u,addedBatchIds:p})))}))}))}function bC(n,e){const t=Te(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(i=>{const o=e.batch.keys(),l=t.xs.newChangeBuffer({trackRemovals:!0});return(function(p,m,v,w){const E=v.batch,I=E.keys();let P=K.resolve();return I.forEach((q=>{P=P.next((()=>w.getEntry(m,q))).next((O=>{const L=v.docVersions.get(q);Ue(L!==null,48541),O.version.compareTo(L)<0&&(E.applyToRemoteDocument(O,v),O.isValidDocument()&&(O.setReadTime(v.commitVersion),w.addEntry(O)))}))})),P.next((()=>p.mutationQueue.removeMutationBatch(m,E)))})(t,i,e,l).next((()=>l.apply(i))).next((()=>t.mutationQueue.performConsistencyCheck(i))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(i,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,(function(p){let m=Pe();for(let v=0;v<p.mutationResults.length;++v)p.mutationResults[v].transformResults.length>0&&(m=m.add(p.batch.mutations[v].key));return m})(e)))).next((()=>t.localDocuments.getDocuments(i,o)))}))}function P0(n){const e=Te(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.li.getLastRemoteSnapshotVersion(t)))}function kC(n,e){const t=Te(n),i=e.snapshotVersion;let o=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(l=>{const u=t.xs.newChangeBuffer({trackRemovals:!0});o=t.vs;const p=[];e.targetChanges.forEach(((w,E)=>{const I=o.get(E);if(!I)return;p.push(t.li.removeMatchingKeys(l,w.removedDocuments,E).next((()=>t.li.addMatchingKeys(l,w.addedDocuments,E))));let P=I.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(E)!==null?P=P.withResumeToken(Pt.EMPTY_BYTE_STRING,xe.min()).withLastLimboFreeSnapshotVersion(xe.min()):w.resumeToken.approximateByteSize()>0&&(P=P.withResumeToken(w.resumeToken,i)),o=o.insert(E,P),(function(O,L,H){return O.resumeToken.approximateByteSize()===0||L.snapshotVersion.toMicroseconds()-O.snapshotVersion.toMicroseconds()>=TC?!0:H.addedDocuments.size+H.modifiedDocuments.size+H.removedDocuments.size>0})(I,P,w)&&p.push(t.li.updateTargetData(l,P))}));let m=Kr(),v=Pe();if(e.documentUpdates.forEach((w=>{e.resolvedLimboDocuments.has(w)&&p.push(t.persistence.referenceDelegate.updateLimboDocument(l,w))})),p.push(AC(l,u,e.documentUpdates).next((w=>{m=w.Bs,v=w.Ls}))),!i.isEqual(xe.min())){const w=t.li.getLastRemoteSnapshotVersion(l).next((E=>t.li.setTargetsMetadata(l,l.currentSequenceNumber,i)));p.push(w)}return K.waitFor(p).next((()=>u.apply(l))).next((()=>t.localDocuments.getLocalViewOfDocuments(l,m,v))).next((()=>m))})).then((l=>(t.vs=o,l)))}function AC(n,e,t){let i=Pe(),o=Pe();return t.forEach((l=>i=i.add(l))),e.getEntries(n,i).next((l=>{let u=Kr();return t.forEach(((p,m)=>{const v=l.get(p);m.isFoundDocument()!==v.isFoundDocument()&&(o=o.add(p)),m.isNoDocument()&&m.version.isEqual(xe.min())?(e.removeEntry(p,m.readTime),u=u.insert(p,m)):!v.isValidDocument()||m.version.compareTo(v.version)>0||m.version.compareTo(v.version)===0&&v.hasPendingWrites?(e.addEntry(m),u=u.insert(p,m)):ae(bp,"Ignoring outdated watch update for ",p,". Current version:",v.version," Watch version:",m.version)})),{Bs:u,Ls:o}}))}function CC(n,e){const t=Te(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(i=>(e===void 0&&(e=fp),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e))))}function RC(n,e){const t=Te(n);return t.persistence.runTransaction("Allocate target","readwrite",(i=>{let o;return t.li.getTargetData(i,e).next((l=>l?(o=l,K.resolve(o)):t.li.allocateTargetId(i).next((u=>(o=new Di(e,u,"TargetPurposeListen",i.currentSequenceNumber),t.li.addTargetData(i,o).next((()=>o)))))))})).then((i=>{const o=t.vs.get(i.targetId);return(o===null||i.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.vs=t.vs.insert(i.targetId,i),t.Fs.set(e,i.targetId)),i}))}async function Of(n,e,t){const i=Te(n),o=i.vs.get(e),l=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",l,(u=>i.persistence.referenceDelegate.removeTarget(u,o)))}catch(u){if(!Xo(u))throw u;ae(bp,`Failed to update sequence numbers for target ${e}: ${u}`)}i.vs=i.vs.remove(e),i.Fs.delete(o.target)}function Vv(n,e,t){const i=Te(n);let o=xe.min(),l=Pe();return i.persistence.runTransaction("Execute query","readwrite",(u=>(function(m,v,w){const E=Te(m),I=E.Fs.get(w);return I!==void 0?K.resolve(E.vs.get(I)):E.li.getTargetData(v,w)})(i,u,hr(e)).next((p=>{if(p)return o=p.lastLimboFreeSnapshotVersion,i.li.getMatchingKeysForTargetId(u,p.targetId).next((m=>{l=m}))})).next((()=>i.Cs.getDocumentsMatchingQuery(u,e,t?o:xe.min(),t?l:Pe()))).next((p=>(NC(i,mA(e),p),{documents:p,ks:l})))))}function NC(n,e,t){let i=n.Ms.get(e)||xe.min();t.forEach(((o,l)=>{l.readTime.compareTo(i)>0&&(i=l.readTime)})),n.Ms.set(e,i)}class Mv{constructor(){this.activeTargetIds=xA()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class PC{constructor(){this.vo=new Mv,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,i){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new Mv,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class jC{Mo(e){}shutdown(){}}/**
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
 */const Fv="ConnectivityMonitor";class Uv{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){ae(Fv,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){ae(Fv,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let su=null;function Vf(){return su===null?su=(function(){return 268435456+Math.round(2147483648*Math.random())})():su++,"0x"+su.toString(16)}/**
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
 */const sf="RestConnection",DC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class LC{get qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Ko=t+"://"+e.host,this.Uo=`projects/${i}/databases/${o}`,this.$o=this.databaseId.database===Ru?`project_id=${i}`:`project_id=${i}&database_id=${o}`}Wo(e,t,i,o,l){const u=Vf(),p=this.Qo(e,t.toUriEncodedString());ae(sf,`Sending RPC '${e}' ${u}:`,p,i);const m={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(m,o,l);const{host:v}=new URL(p),w=kl(v);return this.zo(e,p,m,i,w).then((E=>(ae(sf,`Received RPC '${e}' ${u}: `,E),E)),(E=>{throw Ps(sf,`RPC '${e}' ${u} failed with error: `,E,"url: ",p,"request:",i),E}))}jo(e,t,i,o,l,u){return this.Wo(e,t,i,o,l)}Go(e,t,i){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Yo})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((o,l)=>e[l]=o)),i&&i.headers.forEach(((o,l)=>e[l]=o))}Qo(e,t){const i=DC[e];let o=`${this.Ko}/v1/${t}:${i}`;return this.databaseInfo.apiKey&&(o=`${o}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),o}terminate(){}}/**
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
 */class OC{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
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
 */const Ft="WebChannelConnection",Ja=(n,e,t)=>{n.listen(e,(i=>{try{t(i)}catch(o){setTimeout((()=>{throw o}),0)}}))};class Vo extends LC{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Vo.c_){const e=Vw();Ja(e,Ow.STAT_EVENT,(t=>{t.stat===Sf.PROXY?ae(Ft,"STAT_EVENT: detected buffering proxy"):t.stat===Sf.NOPROXY&&ae(Ft,"STAT_EVENT: detected no buffering proxy")})),Vo.c_=!0}}zo(e,t,i,o,l){const u=Vf();return new Promise(((p,m)=>{const v=new Dw;v.setWithCredentials(!0),v.listenOnce(Lw.COMPLETE,(()=>{try{switch(v.getLastErrorCode()){case du.NO_ERROR:const E=v.getResponseJson();ae(Ft,`XHR for RPC '${e}' ${u} received:`,JSON.stringify(E)),p(E);break;case du.TIMEOUT:ae(Ft,`RPC '${e}' ${u} timed out`),m(new se(G.DEADLINE_EXCEEDED,"Request time out"));break;case du.HTTP_ERROR:const I=v.getStatus();if(ae(Ft,`RPC '${e}' ${u} failed with status:`,I,"response text:",v.getResponseText()),I>0){let P=v.getResponseJson();Array.isArray(P)&&(P=P[0]);const q=P==null?void 0:P.error;if(q&&q.status&&q.message){const O=(function(H){const Z=H.toLowerCase().replace(/_/g,"-");return Object.values(G).indexOf(Z)>=0?Z:G.UNKNOWN})(q.status);m(new se(O,q.message))}else m(new se(G.UNKNOWN,"Server responded with status "+v.getStatus()))}else m(new se(G.UNAVAILABLE,"Connection failed."));break;default:_e(9055,{l_:e,streamId:u,h_:v.getLastErrorCode(),P_:v.getLastError()})}}finally{ae(Ft,`RPC '${e}' ${u} completed.`)}}));const w=JSON.stringify(o);ae(Ft,`RPC '${e}' ${u} sending request:`,o),v.send(t,"POST",w,i,15)}))}T_(e,t,i){const o=Vf(),l=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],u=this.createWebChannelTransport(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},m=this.longPollingOptions.timeoutSeconds;m!==void 0&&(p.longPollingTimeout=Math.round(1e3*m)),this.useFetchStreams&&(p.useFetchStreams=!0),this.Go(p.initMessageHeaders,t,i),p.encodeInitMessageHeaders=!0;const v=l.join("");ae(Ft,`Creating RPC '${e}' stream ${o}: ${v}`,p);const w=u.createWebChannel(v,p);this.E_(w);let E=!1,I=!1;const P=new OC({Jo:q=>{I?ae(Ft,`Not sending because RPC '${e}' stream ${o} is closed:`,q):(E||(ae(Ft,`Opening RPC '${e}' stream ${o} transport.`),w.open(),E=!0),ae(Ft,`RPC '${e}' stream ${o} sending:`,q),w.send(q))},Ho:()=>w.close()});return Ja(w,el.EventType.OPEN,(()=>{I||(ae(Ft,`RPC '${e}' stream ${o} transport opened.`),P.i_())})),Ja(w,el.EventType.CLOSE,(()=>{I||(I=!0,ae(Ft,`RPC '${e}' stream ${o} transport closed`),P.o_(),this.I_(w))})),Ja(w,el.EventType.ERROR,(q=>{I||(I=!0,Ps(Ft,`RPC '${e}' stream ${o} transport errored. Name:`,q.name,"Message:",q.message),P.o_(new se(G.UNAVAILABLE,"The operation could not be completed")))})),Ja(w,el.EventType.MESSAGE,(q=>{var O;if(!I){const L=q.data[0];Ue(!!L,16349);const H=L,Z=(H==null?void 0:H.error)||((O=H[0])==null?void 0:O.error);if(Z){ae(Ft,`RPC '${e}' stream ${o} received error:`,Z);const ie=Z.status;let ne=(function(R){const b=mt[R];if(b!==void 0)return v0(b)})(ie),fe=Z.message;ie==="NOT_FOUND"&&fe.includes("database")&&fe.includes("does not exist")&&fe.includes(this.databaseId.database)&&Ps(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),ne===void 0&&(ne=G.INTERNAL,fe="Unknown error status: "+ie+" with message "+Z.message),I=!0,P.o_(new se(ne,fe)),w.close()}else ae(Ft,`RPC '${e}' stream ${o} received:`,L),P.__(L)}})),Vo.u_(),setTimeout((()=>{P.s_()}),0),P}terminate(){this.a_.forEach((e=>e.close())),this.a_=[]}E_(e){this.a_.push(e)}I_(e){this.a_=this.a_.filter((t=>t===e))}Go(e,t,i){super.Go(e,t,i),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Mw()}}/**
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
 */function VC(n){return new Vo(n)}function of(){return typeof document<"u"?document:null}/**
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
 */function ah(n){return new BA(n,!0)}/**
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
 */Vo.c_=!1;class j0{constructor(e,t,i=1e3,o=1.5,l=6e4){this.Ci=e,this.timerId=t,this.R_=i,this.A_=o,this.V_=l,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),i=Math.max(0,Date.now()-this.f_),o=Math.max(0,t-i);o>0&&ae("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,o,(()=>(this.f_=Date.now(),e()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const Bv="PersistentStream";class D0{constructor(e,t,i,o,l,u,p,m){this.Ci=e,this.S_=i,this.b_=o,this.connection=l,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=p,this.listener=m,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new j0(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.K_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.K_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===G.RESOURCE_EXHAUSTED?(Gr(t.toString()),Gr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===G.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([i,o])=>{this.D_===t&&this.G_(i,o)}),(i=>{e((()=>{const o=new se(G.UNKNOWN,"Fetching auth token failed: "+i.message);return this.z_(o)}))}))}G_(e,t){const i=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo((()=>{i((()=>this.listener.Zo()))})),this.stream.Yo((()=>{i((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((o=>{i((()=>this.z_(o)))})),this.stream.onMessage((o=>{i((()=>++this.F_==1?this.J_(o):this.onNext(o)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return ae(Bv,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget((()=>this.D_===e?t():(ae(Bv,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class MC extends D0{constructor(e,t,i,o,l,u){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,o,u),this.serializer=l}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=WA(this.serializer,e),i=(function(l){if(!("targetChange"in l))return xe.min();const u=l.targetChange;return u.targetIds&&u.targetIds.length?xe.min():u.readTime?dr(u.readTime):xe.min()})(e);return this.listener.H_(t,i)}Z_(e){const t={};t.database=Lf(this.serializer),t.addTarget=(function(l,u){let p;const m=u.target;if(p=Rf(m)?{documents:GA(l,m)}:{query:KA(l,m).ft},p.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){p.resumeToken=x0(l,u.resumeToken);const v=Pf(l,u.expectedCount);v!==null&&(p.expectedCount=v)}else if(u.snapshotVersion.compareTo(xe.min())>0){p.readTime=Lu(l,u.snapshotVersion.toTimestamp());const v=Pf(l,u.expectedCount);v!==null&&(p.expectedCount=v)}return p})(this.serializer,e);const i=YA(this.serializer,e);i&&(t.labels=i),this.q_(t)}X_(e){const t={};t.database=Lf(this.serializer),t.removeTarget=e,this.q_(t)}}class FC extends D0{constructor(e,t,i,o,l,u){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,o,u),this.serializer=l}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return Ue(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ue(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Ue(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=HA(e.writeResults,e.commitTime),i=dr(e.commitTime);return this.listener.na(i,t)}ra(){const e={};e.database=Lf(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((i=>qA(this.serializer,i)))};this.q_(t)}}/**
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
 */class UC{}class BC extends UC{constructor(e,t,i,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=o,this.ia=!1}sa(){if(this.ia)throw new se(G.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,i,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([l,u])=>this.connection.Wo(e,jf(t,i),o,l,u))).catch((l=>{throw l.name==="FirebaseError"?(l.code===G.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new se(G.UNKNOWN,l.toString())}))}jo(e,t,i,o,l){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,p])=>this.connection.jo(e,jf(t,i),o,u,p,l))).catch((u=>{throw u.name==="FirebaseError"?(u.code===G.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new se(G.UNKNOWN,u.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function zC(n,e,t,i){return new BC(n,e,t,i)}class $C{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Gr(t),this.aa=!1):ae("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const js="RemoteStore";class WC{constructor(e,t,i,o,l){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.Ta=[],this.Ea=new Map,this.Ia=new Set,this.Ra=[],this.Aa=l,this.Aa.Mo((u=>{i.enqueueAndForget((async()=>{Us(this)&&(ae(js,"Restarting streams for network reachability change."),await(async function(m){const v=Te(m);v.Ia.add(4),await Ll(v),v.Va.set("Unknown"),v.Ia.delete(4),await lh(v)})(this))}))})),this.Va=new $C(i,o)}}async function lh(n){if(Us(n))for(const e of n.Ra)await e(!0)}async function Ll(n){for(const e of n.Ra)await e(!1)}function L0(n,e){const t=Te(n);t.Ea.has(e.targetId)||(t.Ea.set(e.targetId,e),Rp(t)?Cp(t):ea(t).O_()&&Ap(t,e))}function kp(n,e){const t=Te(n),i=ea(t);t.Ea.delete(e),i.O_()&&O0(t,e),t.Ea.size===0&&(i.O_()?i.L_():Us(t)&&t.Va.set("Unknown"))}function Ap(n,e){if(n.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(xe.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}ea(n).Z_(e)}function O0(n,e){n.da.$e(e),ea(n).X_(e)}function Cp(n){n.da=new VA({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ea.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),ea(n).start(),n.Va.ua()}function Rp(n){return Us(n)&&!ea(n).x_()&&n.Ea.size>0}function Us(n){return Te(n).Ia.size===0}function V0(n){n.da=void 0}async function qC(n){n.Va.set("Online")}async function HC(n){n.Ea.forEach(((e,t)=>{Ap(n,e)}))}async function GC(n,e){V0(n),Rp(n)?(n.Va.ha(e),Cp(n)):n.Va.set("Unknown")}async function KC(n,e,t){if(n.Va.set("Online"),e instanceof w0&&e.state===2&&e.cause)try{await(async function(o,l){const u=l.cause;for(const p of l.targetIds)o.Ea.has(p)&&(await o.remoteSyncer.rejectListen(p,u),o.Ea.delete(p),o.da.removeTarget(p))})(n,e)}catch(i){ae(js,"Failed to remove targets %s: %s ",e.targetIds.join(","),i),await Vu(n,i)}else if(e instanceof gu?n.da.Xe(e):e instanceof _0?n.da.st(e):n.da.tt(e),!t.isEqual(xe.min()))try{const i=await P0(n.localStore);t.compareTo(i)>=0&&await(function(l,u){const p=l.da.Tt(u);return p.targetChanges.forEach(((m,v)=>{if(m.resumeToken.approximateByteSize()>0){const w=l.Ea.get(v);w&&l.Ea.set(v,w.withResumeToken(m.resumeToken,u))}})),p.targetMismatches.forEach(((m,v)=>{const w=l.Ea.get(m);if(!w)return;l.Ea.set(m,w.withResumeToken(Pt.EMPTY_BYTE_STRING,w.snapshotVersion)),O0(l,m);const E=new Di(w.target,m,v,w.sequenceNumber);Ap(l,E)})),l.remoteSyncer.applyRemoteEvent(p)})(n,t)}catch(i){ae(js,"Failed to raise snapshot:",i),await Vu(n,i)}}async function Vu(n,e,t){if(!Xo(e))throw e;n.Ia.add(1),await Ll(n),n.Va.set("Offline"),t||(t=()=>P0(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{ae(js,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await lh(n)}))}function M0(n,e){return e().catch((t=>Vu(n,t,e)))}async function ch(n){const e=Te(n),t=$i(e);let i=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:fp;for(;QC(e);)try{const o=await CC(e.localStore,i);if(o===null){e.Ta.length===0&&t.L_();break}i=o.batchId,YC(e,o)}catch(o){await Vu(e,o)}F0(e)&&U0(e)}function QC(n){return Us(n)&&n.Ta.length<10}function YC(n,e){n.Ta.push(e);const t=$i(n);t.O_()&&t.Y_&&t.ea(e.mutations)}function F0(n){return Us(n)&&!$i(n).x_()&&n.Ta.length>0}function U0(n){$i(n).start()}async function JC(n){$i(n).ra()}async function XC(n){const e=$i(n);for(const t of n.Ta)e.ea(t.mutations)}async function ZC(n,e,t){const i=n.Ta.shift(),o=wp.from(i,e,t);await M0(n,(()=>n.remoteSyncer.applySuccessfulWrite(o))),await ch(n)}async function eR(n,e){e&&$i(n).Y_&&await(async function(i,o){if((function(u){return DA(u)&&u!==G.ABORTED})(o.code)){const l=i.Ta.shift();$i(i).B_(),await M0(i,(()=>i.remoteSyncer.rejectFailedWrite(l.batchId,o))),await ch(i)}})(n,e),F0(n)&&U0(n)}async function zv(n,e){const t=Te(n);t.asyncQueue.verifyOperationInProgress(),ae(js,"RemoteStore received new credentials");const i=Us(t);t.Ia.add(3),await Ll(t),i&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await lh(t)}async function tR(n,e){const t=Te(n);e?(t.Ia.delete(2),await lh(t)):e||(t.Ia.add(2),await Ll(t),t.Va.set("Unknown"))}function ea(n){return n.ma||(n.ma=(function(t,i,o){const l=Te(t);return l.sa(),new MC(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(n.datastore,n.asyncQueue,{Zo:qC.bind(null,n),Yo:HC.bind(null,n),t_:GC.bind(null,n),H_:KC.bind(null,n)}),n.Ra.push((async e=>{e?(n.ma.B_(),Rp(n)?Cp(n):n.Va.set("Unknown")):(await n.ma.stop(),V0(n))}))),n.ma}function $i(n){return n.fa||(n.fa=(function(t,i,o){const l=Te(t);return l.sa(),new FC(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),Yo:JC.bind(null,n),t_:eR.bind(null,n),ta:XC.bind(null,n),na:ZC.bind(null,n)}),n.Ra.push((async e=>{e?(n.fa.B_(),await ch(n)):(await n.fa.stop(),n.Ta.length>0&&(ae(js,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
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
 */class Np{constructor(e,t,i,o,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=o,this.removalCallback=l,this.deferred=new $r,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((u=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,o,l){const u=Date.now()+i,p=new Np(e,t,u,o,l);return p.start(i),p}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new se(G.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Pp(n,e){if(Gr("AsyncQueue",`${e}: ${n}`),Xo(n))return new se(G.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Mo{static emptySet(e){return new Mo(e.comparator)}constructor(e){this.comparator=e?(t,i)=>e(t,i)||pe.comparator(t.key,i.key):(t,i)=>pe.comparator(t.key,i.key),this.keyedMap=tl(),this.sortedSet=new it(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,i)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Mo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(!o.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new Mo;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
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
 */class $v{constructor(){this.ga=new it(pe.comparator)}track(e){const t=e.doc.key,i=this.ga.get(t);i?e.type!==0&&i.type===3?this.ga=this.ga.insert(t,e):e.type===3&&i.type!==1?this.ga=this.ga.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.ga=this.ga.remove(t):e.type===1&&i.type===2?this.ga=this.ga.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):_e(63341,{Vt:e,pa:i}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,i)=>{e.push(i)})),e}}class Wo{constructor(e,t,i,o,l,u,p,m,v){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=o,this.mutatedKeys=l,this.fromCache=u,this.syncStateChanged=p,this.excludesMetadataChanges=m,this.hasCachedResults=v}static fromInitialDocuments(e,t,i,o,l){const u=[];return t.forEach((p=>{u.push({type:0,doc:p})})),new Wo(e,t,Mo.emptySet(t),u,i,o,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&nh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==i[o].type||!t[o].doc.isEqual(i[o].doc))return!1;return!0}}/**
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
 */class nR{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class rR{constructor(){this.queries=Wv(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,i){const o=Te(t),l=o.queries;o.queries=Wv(),l.forEach(((u,p)=>{for(const m of p.Sa)m.onError(i)}))})(this,new se(G.ABORTED,"Firestore shutting down"))}}function Wv(){return new Ms((n=>o0(n)),nh)}async function jp(n,e){const t=Te(n);let i=3;const o=e.query;let l=t.queries.get(o);l?!l.ba()&&e.Da()&&(i=2):(l=new nR,i=e.Da()?0:1);try{switch(i){case 0:l.wa=await t.onListen(o,!0);break;case 1:l.wa=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(u){const p=Pp(u,`Initialization of query '${No(e.query)}' failed`);return void e.onError(p)}t.queries.set(o,l),l.Sa.push(e),e.va(t.onlineState),l.wa&&e.Fa(l.wa)&&Lp(t)}async function Dp(n,e){const t=Te(n),i=e.query;let o=3;const l=t.queries.get(i);if(l){const u=l.Sa.indexOf(e);u>=0&&(l.Sa.splice(u,1),l.Sa.length===0?o=e.Da()?0:1:!l.ba()&&e.Da()&&(o=2))}switch(o){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function iR(n,e){const t=Te(n);let i=!1;for(const o of e){const l=o.query,u=t.queries.get(l);if(u){for(const p of u.Sa)p.Fa(o)&&(i=!0);u.wa=o}}i&&Lp(t)}function sR(n,e,t){const i=Te(n),o=i.queries.get(e);if(o)for(const l of o.Sa)l.onError(t);i.queries.delete(e)}function Lp(n){n.Ca.forEach((e=>{e.next()}))}var Mf,qv;(qv=Mf||(Mf={})).Ma="default",qv.Cache="cache";class Op{constructor(e,t,i){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=i||{}}Fa(e){if(!this.options.includeMetadataChanges){const i=[];for(const o of e.docChanges)o.type!==3&&i.push(o);e=new Wo(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const i=t!=="Offline";return(!this.options.qa||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Wo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Mf.Cache}}/**
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
 */class B0{constructor(e){this.key=e}}class z0{constructor(e){this.key=e}}class oR{constructor(e,t){this.query=e,this.Za=t,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=Pe(),this.mutatedKeys=Pe(),this.eu=a0(e),this.tu=new Mo(this.eu)}get nu(){return this.Za}ru(e,t){const i=t?t.iu:new $v,o=t?t.tu:this.tu;let l=t?t.mutatedKeys:this.mutatedKeys,u=o,p=!1;const m=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,v=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((w,E)=>{const I=o.get(w),P=rh(this.query,E)?E:null,q=!!I&&this.mutatedKeys.has(I.key),O=!!P&&(P.hasLocalMutations||this.mutatedKeys.has(P.key)&&P.hasCommittedMutations);let L=!1;I&&P?I.data.isEqual(P.data)?q!==O&&(i.track({type:3,doc:P}),L=!0):this.su(I,P)||(i.track({type:2,doc:P}),L=!0,(m&&this.eu(P,m)>0||v&&this.eu(P,v)<0)&&(p=!0)):!I&&P?(i.track({type:0,doc:P}),L=!0):I&&!P&&(i.track({type:1,doc:I}),L=!0,(m||v)&&(p=!0)),L&&(P?(u=u.add(P),l=O?l.add(w):l.delete(w)):(u=u.delete(w),l=l.delete(w)))})),this.query.limit!==null)for(;u.size>this.query.limit;){const w=this.query.limitType==="F"?u.last():u.first();u=u.delete(w.key),l=l.delete(w.key),i.track({type:1,doc:w})}return{tu:u,iu:i,bs:p,mutatedKeys:l}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,o){const l=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const u=e.iu.ya();u.sort(((w,E)=>(function(P,q){const O=L=>{switch(L){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return _e(20277,{Vt:L})}};return O(P)-O(q)})(w.type,E.type)||this.eu(w.doc,E.doc))),this.ou(i),o=o??!1;const p=t&&!o?this._u():[],m=this.Ya.size===0&&this.current&&!o?1:0,v=m!==this.Xa;return this.Xa=m,u.length!==0||v?{snapshot:new Wo(this.query,e.tu,l,u,e.mutatedKeys,m===0,v,!1,!!i&&i.resumeToken.approximateByteSize()>0),au:p}:{au:p}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new $v,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Za=this.Za.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Za=this.Za.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=Pe(),this.tu.forEach((i=>{this.uu(i.key)&&(this.Ya=this.Ya.add(i.key))}));const t=[];return e.forEach((i=>{this.Ya.has(i)||t.push(new z0(i))})),this.Ya.forEach((i=>{e.has(i)||t.push(new B0(i))})),t}cu(e){this.Za=e.ks,this.Ya=Pe();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Wo.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const Vp="SyncEngine";class aR{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class lR{constructor(e){this.key=e,this.hu=!1}}class cR{constructor(e,t,i,o,l,u){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=o,this.currentUser=l,this.maxConcurrentLimboResolutions=u,this.Pu={},this.Tu=new Ms((p=>o0(p)),nh),this.Eu=new Map,this.Iu=new Set,this.Ru=new it(pe.comparator),this.Au=new Map,this.Vu=new Tp,this.du={},this.mu=new Map,this.fu=$o.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function uR(n,e,t=!0){const i=K0(n);let o;const l=i.Tu.get(e);return l?(i.sharedClientState.addLocalQueryTarget(l.targetId),o=l.view.lu()):o=await $0(i,e,t,!0),o}async function hR(n,e){const t=K0(n);await $0(t,e,!0,!1)}async function $0(n,e,t,i){const o=await RC(n.localStore,hr(e)),l=o.targetId,u=n.sharedClientState.addLocalQueryTarget(l,t);let p;return i&&(p=await dR(n,e,l,u==="current",o.resumeToken)),n.isPrimaryClient&&t&&L0(n.remoteStore,o),p}async function dR(n,e,t,i,o){n.pu=(E,I,P)=>(async function(O,L,H,Z){let ie=L.view.ru(H);ie.bs&&(ie=await Vv(O.localStore,L.query,!1).then((({documents:R})=>L.view.ru(R,ie))));const ne=Z&&Z.targetChanges.get(L.targetId),fe=Z&&Z.targetMismatches.get(L.targetId)!=null,Ie=L.view.applyChanges(ie,O.isPrimaryClient,ne,fe);return Gv(O,L.targetId,Ie.au),Ie.snapshot})(n,E,I,P);const l=await Vv(n.localStore,e,!0),u=new oR(e,l.ks),p=u.ru(l.documents),m=Dl.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",o),v=u.applyChanges(p,n.isPrimaryClient,m);Gv(n,t,v.au);const w=new aR(e,t,u);return n.Tu.set(e,w),n.Eu.has(t)?n.Eu.get(t).push(e):n.Eu.set(t,[e]),v.snapshot}async function fR(n,e,t){const i=Te(n),o=i.Tu.get(e),l=i.Eu.get(o.targetId);if(l.length>1)return i.Eu.set(o.targetId,l.filter((u=>!nh(u,e)))),void i.Tu.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(o.targetId),i.sharedClientState.isActiveQueryTarget(o.targetId)||await Of(i.localStore,o.targetId,!1).then((()=>{i.sharedClientState.clearQueryState(o.targetId),t&&kp(i.remoteStore,o.targetId),Ff(i,o.targetId)})).catch(Jo)):(Ff(i,o.targetId),await Of(i.localStore,o.targetId,!0))}async function pR(n,e){const t=Te(n),i=t.Tu.get(e),o=t.Eu.get(i.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),kp(t.remoteStore,i.targetId))}async function mR(n,e,t){const i=ER(n);try{const o=await(function(u,p){const m=Te(u),v=Xe.now(),w=p.reduce(((P,q)=>P.add(q.key)),Pe());let E,I;return m.persistence.runTransaction("Locally write mutations","readwrite",(P=>{let q=Kr(),O=Pe();return m.xs.getEntries(P,w).next((L=>{q=L,q.forEach(((H,Z)=>{Z.isValidDocument()||(O=O.add(H))}))})).next((()=>m.localDocuments.getOverlayedDocuments(P,q))).next((L=>{E=L;const H=[];for(const Z of p){const ie=CA(Z,E.get(Z.key).overlayedDocument);ie!=null&&H.push(new Fs(Z.key,ie,Xw(ie.value.mapValue),Bn.exists(!0)))}return m.mutationQueue.addMutationBatch(P,v,H,p)})).next((L=>{I=L;const H=L.applyToLocalDocumentSet(E,O);return m.documentOverlayCache.saveOverlays(P,L.batchId,H)}))})).then((()=>({batchId:I.batchId,changes:c0(E)})))})(i.localStore,e);i.sharedClientState.addPendingMutation(o.batchId),(function(u,p,m){let v=u.du[u.currentUser.toKey()];v||(v=new it(Ne)),v=v.insert(p,m),u.du[u.currentUser.toKey()]=v})(i,o.batchId,t),await Ol(i,o.changes),await ch(i.remoteStore)}catch(o){const l=Pp(o,"Failed to persist write");t.reject(l)}}async function W0(n,e){const t=Te(n);try{const i=await kC(t.localStore,e);e.targetChanges.forEach(((o,l)=>{const u=t.Au.get(l);u&&(Ue(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?u.hu=!0:o.modifiedDocuments.size>0?Ue(u.hu,14607):o.removedDocuments.size>0&&(Ue(u.hu,42227),u.hu=!1))})),await Ol(t,i,e)}catch(i){await Jo(i)}}function Hv(n,e,t){const i=Te(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const o=[];i.Tu.forEach(((l,u)=>{const p=u.view.va(e);p.snapshot&&o.push(p.snapshot)})),(function(u,p){const m=Te(u);m.onlineState=p;let v=!1;m.queries.forEach(((w,E)=>{for(const I of E.Sa)I.va(p)&&(v=!0)})),v&&Lp(m)})(i.eventManager,e),o.length&&i.Pu.H_(o),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function gR(n,e,t){const i=Te(n);i.sharedClientState.updateQueryState(e,"rejected",t);const o=i.Au.get(e),l=o&&o.key;if(l){let u=new it(pe.comparator);u=u.insert(l,Bt.newNoDocument(l,xe.min()));const p=Pe().add(l),m=new oh(xe.min(),new Map,new it(Ne),u,p);await W0(i,m),i.Ru=i.Ru.remove(l),i.Au.delete(e),Mp(i)}else await Of(i.localStore,e,!1).then((()=>Ff(i,e,t))).catch(Jo)}async function yR(n,e){const t=Te(n),i=e.batch.batchId;try{const o=await bC(t.localStore,e);H0(t,i,null),q0(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await Ol(t,o)}catch(o){await Jo(o)}}async function vR(n,e,t){const i=Te(n);try{const o=await(function(u,p){const m=Te(u);return m.persistence.runTransaction("Reject batch","readwrite-primary",(v=>{let w;return m.mutationQueue.lookupMutationBatch(v,p).next((E=>(Ue(E!==null,37113),w=E.keys(),m.mutationQueue.removeMutationBatch(v,E)))).next((()=>m.mutationQueue.performConsistencyCheck(v))).next((()=>m.documentOverlayCache.removeOverlaysForBatchId(v,w,p))).next((()=>m.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(v,w))).next((()=>m.localDocuments.getDocuments(v,w)))}))})(i.localStore,e);H0(i,e,t),q0(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await Ol(i,o)}catch(o){await Jo(o)}}function q0(n,e){(n.mu.get(e)||[]).forEach((t=>{t.resolve()})),n.mu.delete(e)}function H0(n,e,t){const i=Te(n);let o=i.du[i.currentUser.toKey()];if(o){const l=o.get(e);l&&(t?l.reject(t):l.resolve(),o=o.remove(e)),i.du[i.currentUser.toKey()]=o}}function Ff(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.Eu.get(e))n.Tu.delete(i),t&&n.Pu.yu(i,t);n.Eu.delete(e),n.isPrimaryClient&&n.Vu.Gr(e).forEach((i=>{n.Vu.containsKey(i)||G0(n,i)}))}function G0(n,e){n.Iu.delete(e.path.canonicalString());const t=n.Ru.get(e);t!==null&&(kp(n.remoteStore,t),n.Ru=n.Ru.remove(e),n.Au.delete(t),Mp(n))}function Gv(n,e,t){for(const i of t)i instanceof B0?(n.Vu.addReference(i.key,e),_R(n,i)):i instanceof z0?(ae(Vp,"Document no longer in limbo: "+i.key),n.Vu.removeReference(i.key,e),n.Vu.containsKey(i.key)||G0(n,i.key)):_e(19791,{wu:i})}function _R(n,e){const t=e.key,i=t.path.canonicalString();n.Ru.get(t)||n.Iu.has(i)||(ae(Vp,"New document in limbo: "+t),n.Iu.add(i),Mp(n))}function Mp(n){for(;n.Iu.size>0&&n.Ru.size<n.maxConcurrentLimboResolutions;){const e=n.Iu.values().next().value;n.Iu.delete(e);const t=new pe(Ke.fromString(e)),i=n.fu.next();n.Au.set(i,new lR(t)),n.Ru=n.Ru.insert(t,i),L0(n.remoteStore,new Di(hr(th(t.path)),i,"TargetPurposeLimboResolution",Xu.ce))}}async function Ol(n,e,t){const i=Te(n),o=[],l=[],u=[];i.Tu.isEmpty()||(i.Tu.forEach(((p,m)=>{u.push(i.pu(m,e,t).then((v=>{var w;if((v||t)&&i.isPrimaryClient){const E=v?!v.fromCache:(w=t==null?void 0:t.targetChanges.get(m.targetId))==null?void 0:w.current;i.sharedClientState.updateQueryState(m.targetId,E?"current":"not-current")}if(v){o.push(v);const E=Sp.Is(m.targetId,v);l.push(E)}})))})),await Promise.all(u),i.Pu.H_(o),await(async function(m,v){const w=Te(m);try{await w.persistence.runTransaction("notifyLocalViewChanges","readwrite",(E=>K.forEach(v,(I=>K.forEach(I.Ts,(P=>w.persistence.referenceDelegate.addReference(E,I.targetId,P))).next((()=>K.forEach(I.Es,(P=>w.persistence.referenceDelegate.removeReference(E,I.targetId,P)))))))))}catch(E){if(!Xo(E))throw E;ae(bp,"Failed to update sequence numbers: "+E)}for(const E of v){const I=E.targetId;if(!E.fromCache){const P=w.vs.get(I),q=P.snapshotVersion,O=P.withLastLimboFreeSnapshotVersion(q);w.vs=w.vs.insert(I,O)}}})(i.localStore,l))}async function wR(n,e){const t=Te(n);if(!t.currentUser.isEqual(e)){ae(Vp,"User change. New user:",e.toKey());const i=await N0(t.localStore,e);t.currentUser=e,(function(l,u){l.mu.forEach((p=>{p.forEach((m=>{m.reject(new se(G.CANCELLED,u))}))})),l.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await Ol(t,i.Ns)}}function xR(n,e){const t=Te(n),i=t.Au.get(e);if(i&&i.hu)return Pe().add(i.key);{let o=Pe();const l=t.Eu.get(e);if(!l)return o;for(const u of l){const p=t.Tu.get(u);o=o.unionWith(p.view.nu)}return o}}function K0(n){const e=Te(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=W0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=xR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=gR.bind(null,e),e.Pu.H_=iR.bind(null,e.eventManager),e.Pu.yu=sR.bind(null,e.eventManager),e}function ER(n){const e=Te(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=yR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=vR.bind(null,e),e}class Mu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ah(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return SC(this.persistence,new EC,e.initialUser,this.serializer)}Cu(e){return new R0(Ip.Vi,this.serializer)}Du(e){return new PC}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Mu.provider={build:()=>new Mu};class TR extends Mu{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){Ue(this.persistence.referenceDelegate instanceof Ou,46915);const i=this.persistence.referenceDelegate.garbageCollector;return new aC(i,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Zt.withCacheSize(this.cacheSizeBytes):Zt.DEFAULT;return new R0((i=>Ou.Vi(i,t)),this.serializer)}}class Uf{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>Hv(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=wR.bind(null,this.syncEngine),await tR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new rR})()}createDatastore(e){const t=ah(e.databaseInfo.databaseId),i=VC(e.databaseInfo);return zC(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return(function(i,o,l,u,p){return new WC(i,o,l,u,p)})(this.localStore,this.datastore,e.asyncQueue,(t=>Hv(this.syncEngine,t,0)),(function(){return Uv.v()?new Uv:new jC})())}createSyncEngine(e,t){return(function(o,l,u,p,m,v,w){const E=new cR(o,l,u,p,m,v);return w&&(E.gu=!0),E})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(o){const l=Te(o);ae(js,"RemoteStore shutting down."),l.Ia.add(5),await Ll(l),l.Aa.shutdown(),l.Va.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}Uf.provider={build:()=>new Uf};/**
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
 *//**
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
 */class Fp{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Gr("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */const Wi="FirestoreClient";class IR{constructor(e,t,i,o,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this._databaseInfo=o,this.user=Ut.UNAUTHENTICATED,this.clientId=dp.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(i,(async u=>{ae(Wi,"Received user=",u.uid),await this.authCredentialListener(u),this.user=u})),this.appCheckCredentials.start(i,(u=>(ae(Wi,"Received new app check token=",u),this.appCheckCredentialListener(u,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new $r;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=Pp(t,"Failed to shutdown persistence");e.reject(i)}})),e.promise}}async function af(n,e){n.asyncQueue.verifyOperationInProgress(),ae(Wi,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener((async o=>{i.isEqual(o)||(await N0(e.localStore,o),i=o)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function Kv(n,e){n.asyncQueue.verifyOperationInProgress();const t=await SR(n);ae(Wi,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((i=>zv(e.remoteStore,i))),n.setAppCheckTokenChangeListener(((i,o)=>zv(e.remoteStore,o))),n._onlineComponents=e}async function SR(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){ae(Wi,"Using user provided OfflineComponentProvider");try{await af(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===G.FAILED_PRECONDITION||o.code===G.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;Ps("Error using user provided cache. Falling back to memory cache: "+t),await af(n,new Mu)}}else ae(Wi,"Using default OfflineComponentProvider"),await af(n,new TR(void 0));return n._offlineComponents}async function Q0(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(ae(Wi,"Using user provided OnlineComponentProvider"),await Kv(n,n._uninitializedComponentsProvider._online)):(ae(Wi,"Using default OnlineComponentProvider"),await Kv(n,new Uf))),n._onlineComponents}function bR(n){return Q0(n).then((e=>e.syncEngine))}async function Fu(n){const e=await Q0(n),t=e.eventManager;return t.onListen=uR.bind(null,e.syncEngine),t.onUnlisten=fR.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=hR.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=pR.bind(null,e.syncEngine),t}function kR(n,e,t,i){const o=new Fp(i),l=new Op(e,o,t);return n.asyncQueue.enqueueAndForget((async()=>jp(await Fu(n),l))),()=>{o.Nu(),n.asyncQueue.enqueueAndForget((async()=>Dp(await Fu(n),l)))}}function AR(n,e,t={}){const i=new $r;return n.asyncQueue.enqueueAndForget((async()=>(function(l,u,p,m,v){const w=new Fp({next:I=>{w.Nu(),u.enqueueAndForget((()=>Dp(l,E)));const P=I.docs.has(p);!P&&I.fromCache?v.reject(new se(G.UNAVAILABLE,"Failed to get document because the client is offline.")):P&&I.fromCache&&m&&m.source==="server"?v.reject(new se(G.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):v.resolve(I)},error:I=>v.reject(I)}),E=new Op(th(p.path),w,{includeMetadataChanges:!0,qa:!0});return jp(l,E)})(await Fu(n),n.asyncQueue,e,t,i))),i.promise}function CR(n,e,t={}){const i=new $r;return n.asyncQueue.enqueueAndForget((async()=>(function(l,u,p,m,v){const w=new Fp({next:I=>{w.Nu(),u.enqueueAndForget((()=>Dp(l,E))),I.fromCache&&m.source==="server"?v.reject(new se(G.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):v.resolve(I)},error:I=>v.reject(I)}),E=new Op(p,w,{includeMetadataChanges:!0,qa:!0});return jp(l,E)})(await Fu(n),n.asyncQueue,e,t,i))),i.promise}function RR(n,e){const t=new $r;return n.asyncQueue.enqueueAndForget((async()=>mR(await bR(n),e,t))),t.promise}/**
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
 */function Y0(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const NR="ComponentProvider",Qv=new Map;function PR(n,e,t,i,o){return new Y1(n,e,t,o.host,o.ssl,o.experimentalForceLongPolling,o.experimentalAutoDetectLongPolling,Y0(o.experimentalLongPollingOptions),o.useFetchStreams,o.isUsingEmulator,i)}/**
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
 */const J0="firestore.googleapis.com",Yv=!0;class Jv{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new se(G.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=J0,this.ssl=Yv}else this.host=e.host,this.ssl=e.ssl??Yv;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=C0;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<sC)throw new se(G.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}F1("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Y0(e.experimentalLongPollingOptions??{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new se(G.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new se(G.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new se(G.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(i,o){return i.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class uh{constructor(e,t,i,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Jv({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new se(G.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new se(G.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Jv(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(i){if(!i)return new C1;switch(i.type){case"firstParty":return new j1(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new se(G.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const i=Qv.get(t);i&&(ae(NR,"Removing Datastore"),Qv.delete(t),i.terminate())})(this),Promise.resolve()}}function jR(n,e,t,i={}){var v;n=Tn(n,uh);const o=kl(e),l=n._getSettings(),u={...l,emulatorOptions:n._getEmulatorOptions()},p=`${e}:${t}`;o&&K_(`https://${p}`),l.host!==J0&&l.host!==p&&Ps("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const m={...l,host:p,ssl:o,emulatorOptions:i};if(!As(m,u)&&(n._setSettings(m),i.mockUserToken)){let w,E;if(typeof i.mockUserToken=="string")w=i.mockUserToken,E=Ut.MOCK_USER;else{w=zI(i.mockUserToken,(v=n._app)==null?void 0:v.options.projectId);const I=i.mockUserToken.sub||i.mockUserToken.user_id;if(!I)throw new se(G.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");E=new Ut(I)}n._authCredentials=new R1(new Uw(w,E))}}/**
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
 */class Jr{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Jr(this.firestore,e,this._query)}}class ht{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Vi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ht(this.firestore,e,this._key)}toJSON(){return{type:ht._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,i){if(Pl(t,ht._jsonSchema))return new ht(e,i||null,new pe(Ke.fromString(t.referencePath)))}}ht._jsonSchemaVersion="firestore/documentReference/1.0",ht._jsonSchema={type:yt("string",ht._jsonSchemaVersion),referencePath:yt("string")};class Vi extends Jr{constructor(e,t,i){super(e,t,th(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ht(this.firestore,null,new pe(e))}withConverter(e){return new Vi(this.firestore,e,this._path)}}function yu(n,e,...t){if(n=vt(n),Bw("collection","path",e),n instanceof uh){const i=Ke.fromString(e,...t);return uv(i),new Vi(n,null,i)}{if(!(n instanceof ht||n instanceof Vi))throw new se(G.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(Ke.fromString(e,...t));return uv(i),new Vi(n.firestore,null,i)}}function Mi(n,e,...t){if(n=vt(n),arguments.length===1&&(e=dp.newId()),Bw("doc","path",e),n instanceof uh){const i=Ke.fromString(e,...t);return cv(i),new ht(n,null,new pe(i))}{if(!(n instanceof ht||n instanceof Vi))throw new se(G.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(Ke.fromString(e,...t));return cv(i),new ht(n.firestore,n instanceof Vi?n.converter:null,new pe(i))}}/**
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
 */const Xv="AsyncQueue";class Zv{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new j0(this,"async_queue_retry"),this._c=()=>{const i=of();i&&ae(Xv,"Visibility state changed to "+i.visibilityState),this.M_.w_()},this.ac=e;const t=of();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=of();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new $r;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Yu.push(e),this.lc())))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!Xo(e))throw e;ae(Xv,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((i=>{throw this.nc=i,this.rc=!1,Gr("INTERNAL UNHANDLED ERROR: ",e_(i)),i})).then((i=>(this.rc=!1,i))))));return this.ac=t,t}enqueueAfterDelay(e,t,i){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const o=Np.createAndSchedule(this,e,t,i,(l=>this.hc(l)));return this.tc.push(o),o}uc(){this.nc&&_e(47125,{Pc:e_(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ec(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ic(e){return this.Tc().then((()=>{this.tc.sort(((t,i)=>t.targetTimeMs-i.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}Rc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function e_(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class qi extends uh{constructor(e,t,i,o){super(e,t,i,o),this.type="firestore",this._queue=new Zv,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Zv(e),this._firestoreClient=void 0,await e}}}function DR(n,e){const t=typeof n=="object"?n:ep(),i=typeof n=="string"?n:Ru,o=Go(t,"firestore").getImmediate({identifier:i});if(!o._initialized){const l=UI("firestore");l&&jR(o,...l)}return o}function hh(n){if(n._terminated)throw new se(G.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||LR(n),n._firestoreClient}function LR(n){var i,o,l,u;const e=n._freezeSettings(),t=PR(n._databaseId,((i=n._app)==null?void 0:i.options.appId)||"",n._persistenceKey,(o=n._app)==null?void 0:o.options.apiKey,e);n._componentsProvider||(l=e.localCache)!=null&&l._offlineComponentProvider&&((u=e.localCache)!=null&&u._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new IR(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(m){const v=m==null?void 0:m._online.build();return{_offline:m==null?void 0:m._offline.build(v),_online:v}})(n._componentsProvider))}/**
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
 */class xn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new xn(Pt.fromBase64String(e))}catch(t){throw new se(G.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new xn(Pt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:xn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Pl(e,xn._jsonSchema))return xn.fromBase64String(e.bytes)}}xn._jsonSchemaVersion="firestore/bytes/1.0",xn._jsonSchema={type:yt("string",xn._jsonSchemaVersion),bytes:yt("string")};/**
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
 */class X0{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new se(G.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Nt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Up{constructor(e){this._methodName=e}}/**
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
 */class fr{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new se(G.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new se(G.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ne(this._lat,e._lat)||Ne(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:fr._jsonSchemaVersion}}static fromJSON(e){if(Pl(e,fr._jsonSchema))return new fr(e.latitude,e.longitude)}}fr._jsonSchemaVersion="firestore/geoPoint/1.0",fr._jsonSchema={type:yt("string",fr._jsonSchemaVersion),latitude:yt("number"),longitude:yt("number")};/**
 * @license
 * Copyright 2024 Google LLC
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
 */class zn{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(i,o){if(i.length!==o.length)return!1;for(let l=0;l<i.length;++l)if(i[l]!==o[l])return!1;return!0})(this._values,e._values)}toJSON(){return{type:zn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Pl(e,zn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new zn(e.vectorValues);throw new se(G.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}zn._jsonSchemaVersion="firestore/vectorValue/1.0",zn._jsonSchema={type:yt("string",zn._jsonSchemaVersion),vectorValues:yt("object")};/**
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
 */const OR=/^__.*__$/;class VR{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new Fs(e,this.data,this.fieldMask,t,this.fieldTransforms):new jl(e,this.data,t,this.fieldTransforms)}}function Z0(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw _e(40011,{dataSource:n})}}class Bp{constructor(e,t,i,o,l,u){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=o,l===void 0&&this.Ac(),this.fieldTransforms=l||[],this.fieldMask=u||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new Bp({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}dc(e){var o;const t=(o=this.path)==null?void 0:o.child(e),i=this.i({path:t,arrayElement:!1});return i.mc(e),i}fc(e){var o;const t=(o=this.path)==null?void 0:o.child(e),i=this.i({path:t,arrayElement:!1});return i.Ac(),i}gc(e){return this.i({path:void 0,arrayElement:!0})}yc(e){return Uu(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.mc(this.path.get(e))}mc(e){if(e.length===0)throw this.yc("Document fields must not be empty");if(Z0(this.dataSource)&&OR.test(e))throw this.yc('Document fields cannot begin and end with "__"')}}class MR{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||ah(e)}I(e,t,i,o=!1){return new Bp({dataSource:e,methodName:t,targetDoc:i,path:Nt.emptyPath(),arrayElement:!1,hasConverter:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function zp(n){const e=n._freezeSettings(),t=ah(n._databaseId);return new MR(n._databaseId,!!e.ignoreUndefinedProperties,t)}function ex(n,e,t,i,o,l={}){const u=n.I(l.merge||l.mergeFields?2:0,e,t,o);rx("Data must be an object, but it was:",u,i);const p=tx(i,u);let m,v;if(l.merge)m=new Vn(u.fieldMask),v=u.fieldTransforms;else if(l.mergeFields){const w=[];for(const E of l.mergeFields){const I=dh(e,E,t);if(!u.contains(I))throw new se(G.INVALID_ARGUMENT,`Field '${I}' is specified in your field mask but missing from your input data.`);zR(w,I)||w.push(I)}m=new Vn(w),v=u.fieldTransforms.filter((E=>m.covers(E.field)))}else m=null,v=u.fieldTransforms;return new VR(new wn(p),m,v)}class $p extends Up{_toFieldTransform(e){return new SA(e.path,new yl)}isEqual(e){return e instanceof $p}}function FR(n,e,t,i=!1){return Wp(t,n.I(i?4:3,e))}function Wp(n,e){if(nx(n=vt(n)))return rx("Unsupported field value:",e,n),tx(n,e);if(n instanceof Up)return(function(i,o){if(!Z0(o.dataSource))throw o.yc(`${i._methodName}() can only be used with update() and set()`);if(!o.path)throw o.yc(`${i._methodName}() is not currently supported inside arrays`);const l=i._toFieldTransform(o);l&&o.fieldTransforms.push(l)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.yc("Nested arrays are not supported");return(function(i,o){const l=[];let u=0;for(const p of i){let m=Wp(p,o.gc(u));m==null&&(m={nullValue:"NULL_VALUE"}),l.push(m),u++}return{arrayValue:{values:l}}})(n,e)}return(function(i,o){if((i=vt(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return EA(o.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const l=Xe.fromDate(i);return{timestampValue:Lu(o.serializer,l)}}if(i instanceof Xe){const l=new Xe(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:Lu(o.serializer,l)}}if(i instanceof fr)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof xn)return{bytesValue:x0(o.serializer,i._byteString)};if(i instanceof ht){const l=o.databaseId,u=i.firestore._databaseId;if(!u.isEqual(l))throw o.yc(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:Ep(i.firestore._databaseId||o.databaseId,i._key.path)}}if(i instanceof zn)return(function(u,p){const m=u instanceof zn?u.toArray():u;return{mapValue:{fields:{[Yw]:{stringValue:Jw},[Nu]:{arrayValue:{values:m.map((w=>{if(typeof w!="number")throw p.yc("VectorValues must only contain numeric values.");return vp(p.serializer,w)}))}}}}}})(i,o);if(A0(i))return i._toProto(o.serializer);throw o.yc(`Unsupported field value: ${Ju(i)}`)})(n,e)}function tx(n,e){const t={};return Ww(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Vs(n,((i,o)=>{const l=Wp(o,e.dc(i));l!=null&&(t[i]=l)})),{mapValue:{fields:t}}}function nx(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Xe||n instanceof fr||n instanceof xn||n instanceof ht||n instanceof Up||n instanceof zn||A0(n))}function rx(n,e,t){if(!nx(t)||!zw(t)){const i=Ju(t);throw i==="an object"?e.yc(n+" a custom object"):e.yc(n+" "+i)}}function dh(n,e,t){if((e=vt(e))instanceof X0)return e._internalPath;if(typeof e=="string")return BR(n,e);throw Uu("Field path arguments must be of type string or ",n,!1,void 0,t)}const UR=new RegExp("[~\\*/\\[\\]]");function BR(n,e,t){if(e.search(UR)>=0)throw Uu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new X0(...e.split("."))._internalPath}catch{throw Uu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Uu(n,e,t,i,o){const l=i&&!i.isEmpty(),u=o!==void 0;let p=`Function ${e}() called with invalid data`;t&&(p+=" (via `toFirestore()`)"),p+=". ";let m="";return(l||u)&&(m+=" (found",l&&(m+=` in field ${i}`),u&&(m+=` in document ${o}`),m+=")"),new se(G.INVALID_ARGUMENT,p+n+m)}function zR(n,e){return n.some((t=>t.isEqual(e)))}/**
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
 */class $R{convertValue(e,t="none"){switch(zi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ut(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Bi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw _e(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return Vs(e,((o,l)=>{i[o]=this.convertValue(l,t)})),i}convertVectorValue(e){var i,o,l;const t=(l=(o=(i=e.fields)==null?void 0:i[Nu].arrayValue)==null?void 0:o.values)==null?void 0:l.map((u=>ut(u.doubleValue)));return new zn(t)}convertGeoPoint(e){return new fr(ut(e.latitude),ut(e.longitude))}convertArray(e,t){return(e.values||[]).map((i=>this.convertValue(i,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const i=eh(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(fl(e));default:return null}}convertTimestamp(e){const t=Ui(e);return new Xe(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=Ke.fromString(e);Ue(k0(i),9688,{name:e});const o=new pl(i.get(1),i.get(3)),l=new pe(i.popFirst(5));return o.isEqual(t)||Gr(`Document ${l} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class qp extends $R{constructor(e){super(),this.firestore=e}convertBytes(e){return new xn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ht(this.firestore,null,t)}}function wl(){return new $p("serverTimestamp")}const t_="@firebase/firestore",n_="4.14.0";/**
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
 */function r_(n){return(function(t,i){if(typeof t!="object"||t===null)return!1;const o=t;for(const l of i)if(l in o&&typeof o[l]=="function")return!0;return!1})(n,["next","error","complete"])}/**
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
 */class ix{constructor(e,t,i,o,l){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=o,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new ht(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new WR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(dh("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class WR extends ix{data(){return super.data()}}/**
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
 */function sx(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new se(G.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Hp{}class Gp extends Hp{}function i_(n,e,...t){let i=[];e instanceof Hp&&i.push(e),i=i.concat(t),(function(l){const u=l.filter((m=>m instanceof Qp)).length,p=l.filter((m=>m instanceof Kp)).length;if(u>1||u>0&&p>0)throw new se(G.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(i);for(const o of i)n=o._apply(n);return n}class Kp extends Gp{constructor(e,t,i){super(),this._field=e,this._op=t,this._value=i,this.type="where"}static _create(e,t,i){return new Kp(e,t,i)}_apply(e){const t=this._parse(e);return ox(e._query,t),new Jr(e.firestore,e.converter,Nf(e._query,t))}_parse(e){const t=zp(e.firestore);return(function(l,u,p,m,v,w,E){let I;if(v.isKeyField()){if(w==="array-contains"||w==="array-contains-any")throw new se(G.INVALID_ARGUMENT,`Invalid Query. You can't perform '${w}' queries on documentId().`);if(w==="in"||w==="not-in"){a_(E,w);const q=[];for(const O of E)q.push(o_(m,l,O));I={arrayValue:{values:q}}}else I=o_(m,l,E)}else w!=="in"&&w!=="not-in"&&w!=="array-contains-any"||a_(E,w),I=FR(p,u,E,w==="in"||w==="not-in");return gt.create(v,w,I)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class Qp extends Hp{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Qp(e,t)}_parse(e){const t=this._queryConstraints.map((i=>i._parse(e))).filter((i=>i.getFilters().length>0));return t.length===1?t[0]:Wn.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(o,l){let u=o;const p=l.getFlattenedFilters();for(const m of p)ox(u,m),u=Nf(u,m)})(e._query,t),new Jr(e.firestore,e.converter,Nf(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Yp extends Gp{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Yp(e,t)}_apply(e){const t=(function(o,l,u){if(o.startAt!==null)throw new se(G.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new se(G.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new gl(l,u)})(e._query,this._field,this._direction);return new Jr(e.firestore,e.converter,pA(e._query,t))}}function qR(n,e="asc"){const t=e,i=dh("orderBy",n);return Yp._create(i,t)}class Jp extends Gp{constructor(e,t,i){super(),this.type=e,this._limit=t,this._limitType=i}static _create(e,t,i){return new Jp(e,t,i)}_apply(e){return new Jr(e.firestore,e.converter,ju(e._query,this._limit,this._limitType))}}function s_(n){return Jp._create("limit",n,"F")}function o_(n,e,t){if(typeof(t=vt(t))=="string"){if(t==="")throw new se(G.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!s0(e)&&t.indexOf("/")!==-1)throw new se(G.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const i=e.path.child(Ke.fromString(t));if(!pe.isDocumentKey(i))throw new se(G.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return vv(n,new pe(i))}if(t instanceof ht)return vv(n,t._key);throw new se(G.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ju(t)}.`)}function a_(n,e){if(!Array.isArray(n)||n.length===0)throw new se(G.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function ox(n,e){const t=(function(o,l){for(const u of o)for(const p of u.getFlattenedFilters())if(l.indexOf(p.op)>=0)return p.op;return null})(n.filters,(function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new se(G.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new se(G.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function ax(n,e,t){let i;return i=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,i}class rl{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class bs extends ix{constructor(e,t,i,o,l,u){super(e,t,i,o,u),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new vu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(dh("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new se(G.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=bs._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}bs._jsonSchemaVersion="firestore/documentSnapshot/1.0",bs._jsonSchema={type:yt("string",bs._jsonSchemaVersion),bundleSource:yt("string","DocumentSnapshot"),bundleName:yt("string"),bundle:yt("string")};class vu extends bs{data(e={}){return super.data(e)}}class ks{constructor(e,t,i,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new rl(o.hasPendingWrites,o.fromCache),this.query=i}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((i=>{e.call(t,new vu(this._firestore,this._userDataWriter,i.key,i,new rl(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new se(G.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,l){if(o._snapshot.oldDocs.isEmpty()){let u=0;return o._snapshot.docChanges.map((p=>{const m=new vu(o._firestore,o._userDataWriter,p.doc.key,p.doc,new rl(o._snapshot.mutatedKeys.has(p.doc.key),o._snapshot.fromCache),o.query.converter);return p.doc,{type:"added",doc:m,oldIndex:-1,newIndex:u++}}))}{let u=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((p=>l||p.type!==3)).map((p=>{const m=new vu(o._firestore,o._userDataWriter,p.doc.key,p.doc,new rl(o._snapshot.mutatedKeys.has(p.doc.key),o._snapshot.fromCache),o.query.converter);let v=-1,w=-1;return p.type!==0&&(v=u.indexOf(p.doc.key),u=u.delete(p.doc.key)),p.type!==1&&(u=u.add(p.doc),w=u.indexOf(p.doc.key)),{type:HR(p.type),doc:m,oldIndex:v,newIndex:w}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new se(G.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=ks._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=dp.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],i=[],o=[];return this.docs.forEach((l=>{l._document!==null&&(t.push(l._document),i.push(this._userDataWriter.convertObjectMap(l._document.data.value.mapValue.fields,"previous")),o.push(l.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function HR(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return _e(61501,{type:n})}}/**
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
 */ks._jsonSchemaVersion="firestore/querySnapshot/1.0",ks._jsonSchema={type:yt("string",ks._jsonSchemaVersion),bundleSource:yt("string","QuerySnapshot"),bundleName:yt("string"),bundle:yt("string")};/**
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
 */function GR(n){n=Tn(n,ht);const e=Tn(n.firestore,qi),t=hh(e);return AR(t,n._key).then((i=>cx(e,n,i)))}function lx(n){n=Tn(n,Jr);const e=Tn(n.firestore,qi),t=hh(e),i=new qp(e);return sx(n._query),CR(t,n._query).then((o=>new ks(e,i,n,o)))}function Bu(n,e,t){n=Tn(n,ht);const i=Tn(n.firestore,qi),o=ax(n.converter,e,t),l=zp(i);return Xp(i,[ex(l,"setDoc",n._key,o,n.converter!==null,t).toMutation(n._key,Bn.none())])}function Bf(n){return Xp(Tn(n.firestore,qi),[new _p(n._key,Bn.none())])}function KR(n,e){const t=Tn(n.firestore,qi),i=Mi(n),o=ax(n.converter,e),l=zp(n.firestore);return Xp(t,[ex(l,"addDoc",i._key,o,n.converter!==null,{}).toMutation(i._key,Bn.exists(!1))]).then((()=>i))}function QR(n,...e){var v,w,E;n=vt(n);let t={includeMetadataChanges:!1,source:"default"},i=0;typeof e[i]!="object"||r_(e[i])||(t=e[i++]);const o={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(r_(e[i])){const I=e[i];e[i]=(v=I.next)==null?void 0:v.bind(I),e[i+1]=(w=I.error)==null?void 0:w.bind(I),e[i+2]=(E=I.complete)==null?void 0:E.bind(I)}let l,u,p;if(n instanceof ht)u=Tn(n.firestore,qi),p=th(n._key.path),l={next:I=>{e[i]&&e[i](cx(u,n,I))},error:e[i+1],complete:e[i+2]};else{const I=Tn(n,Jr);u=Tn(I.firestore,qi),p=I._query;const P=new qp(u);l={next:q=>{e[i]&&e[i](new ks(u,P,I,q))},error:e[i+1],complete:e[i+2]},sx(n._query)}const m=hh(u);return kR(m,p,o,l)}function Xp(n,e){const t=hh(n);return RR(t,e)}function cx(n,e,t){const i=t.docs.get(e._key),o=new qp(n);return new bs(n,o,e._key,i,new rl(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){A1(Ko),mr(new $n("firestore",((i,{instanceIdentifier:o,options:l})=>{const u=i.getProvider("app").getImmediate(),p=new qi(new N1(i.getProvider("auth-internal")),new D1(u,i.getProvider("app-check-internal")),J1(u,o),u);return l={useFetchStreams:t,...l},p._setSettings(l),p}),"PUBLIC").setMultipleInstances(!0)),En(t_,n_,e),En(t_,n_,"esm2020")})();var YR="firebase",JR="12.12.1";/**
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
 */En(YR,JR,"app");const ux="@firebase/installations",Zp="0.6.21";/**
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
 */const hx=1e4,dx=`w:${Zp}`,fx="FIS_v2",XR="https://firebaseinstallations.googleapis.com/v1",ZR=3600*1e3,eN="installations",tN="Installations";/**
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
 */const nN={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Ds=new Os(eN,tN,nN);function px(n){return n instanceof vr&&n.code.includes("request-failed")}/**
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
 */function mx({projectId:n}){return`${XR}/projects/${n}/installations`}function gx(n){return{token:n.token,requestStatus:2,expiresIn:iN(n.expiresIn),creationTime:Date.now()}}async function yx(n,e){const i=(await e.json()).error;return Ds.create("request-failed",{requestName:n,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function vx({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function rN(n,{refreshToken:e}){const t=vx(n);return t.append("Authorization",sN(e)),t}async function _x(n){const e=await n();return e.status>=500&&e.status<600?n():e}function iN(n){return Number(n.replace("s","000"))}function sN(n){return`${fx} ${n}`}/**
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
 */async function oN({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const i=mx(n),o=vx(n),l=e.getImmediate({optional:!0});if(l){const v=await l.getHeartbeatsHeader();v&&o.append("x-firebase-client",v)}const u={fid:t,authVersion:fx,appId:n.appId,sdkVersion:dx},p={method:"POST",headers:o,body:JSON.stringify(u)},m=await _x(()=>fetch(i,p));if(m.ok){const v=await m.json();return{fid:v.fid||t,registrationStatus:2,refreshToken:v.refreshToken,authToken:gx(v.authToken)}}else throw await yx("Create Installation",m)}/**
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
 */function wx(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function aN(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const lN=/^[cdef][\w-]{21}$/,zf="";function cN(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=uN(n);return lN.test(t)?t:zf}catch{return zf}}function uN(n){return aN(n).substr(0,22)}/**
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
 */function fh(n){return`${n.appName}!${n.appId}`}/**
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
 */const xx=new Map;function Ex(n,e){const t=fh(n);Tx(t,e),hN(t,e)}function Tx(n,e){const t=xx.get(n);if(t)for(const i of t)i(e)}function hN(n,e){const t=dN();t&&t.postMessage({key:n,fid:e}),fN()}let Ss=null;function dN(){return!Ss&&"BroadcastChannel"in self&&(Ss=new BroadcastChannel("[Firebase] FID Change"),Ss.onmessage=n=>{Tx(n.data.key,n.data.fid)}),Ss}function fN(){xx.size===0&&Ss&&(Ss.close(),Ss=null)}/**
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
 */const pN="firebase-installations-database",mN=1,Ls="firebase-installations-store";let lf=null;function em(){return lf||(lf=Gu(pN,mN,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Ls)}}})),lf}async function zu(n,e){const t=fh(n),o=(await em()).transaction(Ls,"readwrite"),l=o.objectStore(Ls),u=await l.get(t);return await l.put(e,t),await o.done,(!u||u.fid!==e.fid)&&Ex(n,e.fid),e}async function Ix(n){const e=fh(n),i=(await em()).transaction(Ls,"readwrite");await i.objectStore(Ls).delete(e),await i.done}async function ph(n,e){const t=fh(n),o=(await em()).transaction(Ls,"readwrite"),l=o.objectStore(Ls),u=await l.get(t),p=e(u);return p===void 0?await l.delete(t):await l.put(p,t),await o.done,p&&(!u||u.fid!==p.fid)&&Ex(n,p.fid),p}/**
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
 */async function tm(n){let e;const t=await ph(n.appConfig,i=>{const o=gN(i),l=yN(n,o);return e=l.registrationPromise,l.installationEntry});return t.fid===zf?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function gN(n){const e=n||{fid:cN(),registrationStatus:0};return Sx(e)}function yN(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(Ds.create("app-offline"));return{installationEntry:e,registrationPromise:o}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=vN(n,t);return{installationEntry:t,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:_N(n)}:{installationEntry:e}}async function vN(n,e){try{const t=await oN(n,e);return zu(n.appConfig,t)}catch(t){throw px(t)&&t.customData.serverCode===409?await Ix(n.appConfig):await zu(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function _N(n){let e=await l_(n.appConfig);for(;e.registrationStatus===1;)await wx(100),e=await l_(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:i}=await tm(n);return i||t}return e}function l_(n){return ph(n,e=>{if(!e)throw Ds.create("installation-not-found");return Sx(e)})}function Sx(n){return wN(n)?{fid:n.fid,registrationStatus:0}:n}function wN(n){return n.registrationStatus===1&&n.registrationTime+hx<Date.now()}/**
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
 */async function xN({appConfig:n,heartbeatServiceProvider:e},t){const i=EN(n,t),o=rN(n,t),l=e.getImmediate({optional:!0});if(l){const v=await l.getHeartbeatsHeader();v&&o.append("x-firebase-client",v)}const u={installation:{sdkVersion:dx,appId:n.appId}},p={method:"POST",headers:o,body:JSON.stringify(u)},m=await _x(()=>fetch(i,p));if(m.ok){const v=await m.json();return gx(v)}else throw await yx("Generate Auth Token",m)}function EN(n,{fid:e}){return`${mx(n)}/${e}/authTokens:generate`}/**
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
 */async function nm(n,e=!1){let t;const i=await ph(n.appConfig,l=>{if(!bx(l))throw Ds.create("not-registered");const u=l.authToken;if(!e&&SN(u))return l;if(u.requestStatus===1)return t=TN(n,e),l;{if(!navigator.onLine)throw Ds.create("app-offline");const p=kN(l);return t=IN(n,p),p}});return t?await t:i.authToken}async function TN(n,e){let t=await c_(n.appConfig);for(;t.authToken.requestStatus===1;)await wx(100),t=await c_(n.appConfig);const i=t.authToken;return i.requestStatus===0?nm(n,e):i}function c_(n){return ph(n,e=>{if(!bx(e))throw Ds.create("not-registered");const t=e.authToken;return AN(t)?{...e,authToken:{requestStatus:0}}:e})}async function IN(n,e){try{const t=await xN(n,e),i={...e,authToken:t};return await zu(n.appConfig,i),t}catch(t){if(px(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await Ix(n.appConfig);else{const i={...e,authToken:{requestStatus:0}};await zu(n.appConfig,i)}throw t}}function bx(n){return n!==void 0&&n.registrationStatus===2}function SN(n){return n.requestStatus===2&&!bN(n)}function bN(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+ZR}function kN(n){const e={requestStatus:1,requestTime:Date.now()};return{...n,authToken:e}}function AN(n){return n.requestStatus===1&&n.requestTime+hx<Date.now()}/**
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
 */async function CN(n){const e=n,{installationEntry:t,registrationPromise:i}=await tm(e);return i?i.catch(console.error):nm(e).catch(console.error),t.fid}/**
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
 */async function RN(n,e=!1){const t=n;return await NN(t),(await nm(t,e)).token}async function NN(n){const{registrationPromise:e}=await tm(n);e&&await e}/**
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
 */function PN(n){if(!n||!n.options)throw cf("App Configuration");if(!n.name)throw cf("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw cf(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function cf(n){return Ds.create("missing-app-config-values",{valueName:n})}/**
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
 */const kx="installations",jN="installations-internal",DN=n=>{const e=n.getProvider("app").getImmediate(),t=PN(e),i=Go(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},LN=n=>{const e=n.getProvider("app").getImmediate(),t=Go(e,kx).getImmediate();return{getId:()=>CN(t),getToken:o=>RN(t,o)}};function ON(){mr(new $n(kx,DN,"PUBLIC")),mr(new $n(jN,LN,"PRIVATE"))}ON();En(ux,Zp);En(ux,Zp,"esm2020");/**
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
 */const VN="/firebase-messaging-sw.js",MN="/firebase-cloud-messaging-push-scope",Ax="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",FN="https://fcmregistrations.googleapis.com/v1",Cx="google.c.a.c_id",UN="google.c.a.c_l",BN="google.c.a.ts",zN="google.c.a.e",u_=1e4;var h_;(function(n){n[n.DATA_MESSAGE=1]="DATA_MESSAGE",n[n.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(h_||(h_={}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */var xl;(function(n){n.PUSH_RECEIVED="push-received",n.NOTIFICATION_CLICKED="notification-clicked"})(xl||(xl={}));/**
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
 */function Vr(n){const e=new Uint8Array(n);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function $N(n){const e="=".repeat((4-n.length%4)%4),t=(n+e).replace(/\-/g,"+").replace(/_/g,"/"),i=atob(t),o=new Uint8Array(i.length);for(let l=0;l<i.length;++l)o[l]=i.charCodeAt(l);return o}/**
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
 */const uf="fcm_token_details_db",WN=5,d_="fcm_token_object_Store";async function qN(n){if("databases"in indexedDB&&!(await indexedDB.databases()).map(l=>l.name).includes(uf))return null;let e=null;return(await Gu(uf,WN,{upgrade:async(i,o,l,u)=>{if(o<2||!i.objectStoreNames.contains(d_))return;const p=u.objectStore(d_),m=await p.index("fcmSenderId").get(n);if(await p.clear(),!!m){if(o===2){const v=m;if(!v.auth||!v.p256dh||!v.endpoint)return;e={token:v.fcmToken,createTime:v.createTime??Date.now(),subscriptionOptions:{auth:v.auth,p256dh:v.p256dh,endpoint:v.endpoint,swScope:v.swScope,vapidKey:typeof v.vapidKey=="string"?v.vapidKey:Vr(v.vapidKey)}}}else if(o===3){const v=m;e={token:v.fcmToken,createTime:v.createTime,subscriptionOptions:{auth:Vr(v.auth),p256dh:Vr(v.p256dh),endpoint:v.endpoint,swScope:v.swScope,vapidKey:Vr(v.vapidKey)}}}else if(o===4){const v=m;e={token:v.fcmToken,createTime:v.createTime,subscriptionOptions:{auth:Vr(v.auth),p256dh:Vr(v.p256dh),endpoint:v.endpoint,swScope:v.swScope,vapidKey:Vr(v.vapidKey)}}}}}})).close(),await Yd(uf),await Yd("fcm_vapid_details_db"),await Yd("undefined"),HN(e)?e:null}function HN(n){if(!n||!n.subscriptionOptions)return!1;const{subscriptionOptions:e}=n;return typeof n.createTime=="number"&&n.createTime>0&&typeof n.token=="string"&&n.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
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
 */const GN="firebase-messaging-database",KN=1,El="firebase-messaging-store";let hf=null;function Rx(){return hf||(hf=Gu(GN,KN,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(El)}}})),hf}async function QN(n){const e=Nx(n),i=await(await Rx()).transaction(El).objectStore(El).get(e);if(i)return i;{const o=await qN(n.appConfig.senderId);if(o)return await rm(n,o),o}}async function rm(n,e){const t=Nx(n),o=(await Rx()).transaction(El,"readwrite");return await o.objectStore(El).put(e,t),await o.done,e}function Nx({appConfig:n}){return n.appId}/**
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
 */const YN={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},zt=new Os("messaging","Messaging",YN);/**
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
 */async function JN(n,e){const t=await sm(n),i=Px(e),o={method:"POST",headers:t,body:JSON.stringify(i)};let l;try{l=await(await fetch(im(n.appConfig),o)).json()}catch(u){throw zt.create("token-subscribe-failed",{errorInfo:u==null?void 0:u.toString()})}if(l.error){const u=l.error.message;throw zt.create("token-subscribe-failed",{errorInfo:u})}if(!l.token)throw zt.create("token-subscribe-no-token");return l.token}async function XN(n,e){const t=await sm(n),i=Px(e.subscriptionOptions),o={method:"PATCH",headers:t,body:JSON.stringify(i)};let l;try{l=await(await fetch(`${im(n.appConfig)}/${e.token}`,o)).json()}catch(u){throw zt.create("token-update-failed",{errorInfo:u==null?void 0:u.toString()})}if(l.error){const u=l.error.message;throw zt.create("token-update-failed",{errorInfo:u})}if(!l.token)throw zt.create("token-update-no-token");return l.token}async function ZN(n,e){const i={method:"DELETE",headers:await sm(n)};try{const l=await(await fetch(`${im(n.appConfig)}/${e}`,i)).json();if(l.error){const u=l.error.message;throw zt.create("token-unsubscribe-failed",{errorInfo:u})}}catch(o){throw zt.create("token-unsubscribe-failed",{errorInfo:o==null?void 0:o.toString()})}}function im({projectId:n}){return`${FN}/projects/${n}/registrations`}async function sm({appConfig:n,installations:e}){const t=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n.apiKey,"x-goog-firebase-installations-auth":`FIS ${t}`})}function Px({p256dh:n,auth:e,endpoint:t,vapidKey:i}){const o={web:{endpoint:t,auth:e,p256dh:n}};return i!==Ax&&(o.web.applicationPubKey=i),o}/**
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
 */const eP=10080*60*1e3;async function tP(n){const e=await rP(n.swRegistration,n.vapidKey),t={vapidKey:n.vapidKey,swScope:n.swRegistration.scope,endpoint:e.endpoint,auth:Vr(e.getKey("auth")),p256dh:Vr(e.getKey("p256dh"))},i=await QN(n.firebaseDependencies);if(i){if(iP(i.subscriptionOptions,t))return Date.now()>=i.createTime+eP?nP(n,{token:i.token,createTime:Date.now(),subscriptionOptions:t}):i.token;try{await ZN(n.firebaseDependencies,i.token)}catch(o){console.warn(o)}return f_(n.firebaseDependencies,t)}else return f_(n.firebaseDependencies,t)}async function nP(n,e){try{const t=await XN(n.firebaseDependencies,e),i={...e,token:t,createTime:Date.now()};return await rm(n.firebaseDependencies,i),t}catch(t){throw t}}async function f_(n,e){const i={token:await JN(n,e),createTime:Date.now(),subscriptionOptions:e};return await rm(n,i),i.token}async function rP(n,e){const t=await n.pushManager.getSubscription();return t||n.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:$N(e)})}function iP(n,e){const t=e.vapidKey===n.vapidKey,i=e.endpoint===n.endpoint,o=e.auth===n.auth,l=e.p256dh===n.p256dh;return t&&i&&o&&l}/**
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
 */function p_(n){const e={from:n.from,collapseKey:n.collapse_key,messageId:n.fcmMessageId};return sP(e,n),oP(e,n),aP(e,n),e}function sP(n,e){if(!e.notification)return;n.notification={};const t=e.notification.title;t&&(n.notification.title=t);const i=e.notification.body;i&&(n.notification.body=i);const o=e.notification.image;o&&(n.notification.image=o);const l=e.notification.icon;l&&(n.notification.icon=l)}function oP(n,e){e.data&&(n.data=e.data)}function aP(n,e){var o,l,u,p;if(!e.fcmOptions&&!((o=e.notification)!=null&&o.click_action))return;n.fcmOptions={};const t=((l=e.fcmOptions)==null?void 0:l.link)??((u=e.notification)==null?void 0:u.click_action);t&&(n.fcmOptions.link=t);const i=(p=e.fcmOptions)==null?void 0:p.analytics_label;i&&(n.fcmOptions.analyticsLabel=i)}/**
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
 */function lP(n){return typeof n=="object"&&!!n&&Cx in n}/**
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
 */function cP(n){if(!n||!n.options)throw df("App Configuration Object");if(!n.name)throw df("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:t}=n;for(const i of e)if(!t[i])throw df(i);return{appName:n.name,projectId:t.projectId,apiKey:t.apiKey,appId:t.appId,senderId:t.messagingSenderId}}function df(n){return zt.create("missing-app-config-values",{valueName:n})}/**
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
 */class uP{constructor(e,t,i){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const o=cP(e);this.firebaseDependencies={app:e,appConfig:o,installations:t,analyticsProvider:i}}_delete(){return Promise.resolve()}}/**
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
 */async function hP(n){try{n.swRegistration=await navigator.serviceWorker.register(VN,{scope:MN}),n.swRegistration.update().catch(()=>{}),await dP(n.swRegistration)}catch(e){throw zt.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}async function dP(n){return new Promise((e,t)=>{const i=setTimeout(()=>t(new Error(`Service worker not registered after ${u_} ms`)),u_),o=n.installing||n.waiting;n.active?(clearTimeout(i),e()):o?o.onstatechange=l=>{var u;((u=l.target)==null?void 0:u.state)==="activated"&&(o.onstatechange=null,clearTimeout(i),e())}:(clearTimeout(i),t(new Error("No incoming service worker found.")))})}/**
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
 */async function fP(n,e){if(!e&&!n.swRegistration&&await hP(n),!(!e&&n.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw zt.create("invalid-sw-registration");n.swRegistration=e}}/**
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
 */async function pP(n,e){e?n.vapidKey=e:n.vapidKey||(n.vapidKey=Ax)}/**
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
 */async function jx(n,e){if(!navigator)throw zt.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw zt.create("permission-blocked");return await pP(n,e==null?void 0:e.vapidKey),await fP(n,e==null?void 0:e.serviceWorkerRegistration),tP(n)}/**
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
 */async function mP(n,e,t){const i=gP(e);(await n.firebaseDependencies.analyticsProvider.get()).logEvent(i,{message_id:t[Cx],message_name:t[UN],message_time:t[BN],message_device_time:Math.floor(Date.now()/1e3)})}function gP(n){switch(n){case xl.NOTIFICATION_CLICKED:return"notification_open";case xl.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
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
 */async function yP(n,e){const t=e.data;if(!t.isFirebaseMessaging)return;n.onMessageHandler&&t.messageType===xl.PUSH_RECEIVED&&(typeof n.onMessageHandler=="function"?n.onMessageHandler(p_(t)):n.onMessageHandler.next(p_(t)));const i=t.data;lP(i)&&i[zN]==="1"&&await mP(n,t.messageType,i)}const m_="@firebase/messaging",g_="0.12.25";/**
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
 */const vP=n=>{const e=new uP(n.getProvider("app").getImmediate(),n.getProvider("installations-internal").getImmediate(),n.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",t=>yP(e,t)),e},_P=n=>{const e=n.getProvider("messaging").getImmediate();return{getToken:i=>jx(e,i)}};function wP(){mr(new $n("messaging",vP,"PUBLIC")),mr(new $n("messaging-internal",_P,"PRIVATE")),En(m_,g_),En(m_,g_,"esm2020")}/**
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
 */async function Dx(){try{await G_()}catch{return!1}return typeof window<"u"&&H_()&&YI()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
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
 */function xP(n,e){if(!navigator)throw zt.create("only-available-in-window");return n.onMessageHandler=e,()=>{n.onMessageHandler=null}}/**
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
 */function EP(n=ep()){return Dx().then(e=>{if(!e)throw zt.create("unsupported-browser")},e=>{throw zt.create("indexed-db-unsupported")}),Go(vt(n),"messaging").getImmediate()}async function TP(n,e){return n=vt(n),jx(n,e)}function IP(n,e){return n=vt(n),xP(n,e)}wP();const SP={apiKey:"AIzaSyAPFTf8b_dKTtIDV1p7TpWUwslfVlJumQM",authDomain:"elev8-a9f07.firebaseapp.com",projectId:"elev8-a9f07",storageBucket:"elev8-a9f07.firebasestorage.app",messagingSenderId:"559941508782",appId:"1:559941508782:web:8429e19836252c7c07d73f",measurementId:"G-W3BPQ186ZG"},om=J_(SP),xs=b1(om),bP=new Mr,Mn=DR(om),Lx=async()=>await Dx()?EP(om):null,kP="YOUR_VAPID_PUBLIC_KEY",AP=2,Ox=B.createContext(null);function Vx(){let n=localStorage.getItem("elev8_device_id");return n||(n="dev_"+Math.random().toString(36).substr(2,12)+"_"+Date.now(),localStorage.setItem("elev8_device_id",n)),n}async function y_(n){const e=yu(Mn,"users",n,"sessions"),t=await lx(e);return t.size<AP?{allowed:!0,sessions:t}:{allowed:!1,sessions:t}}async function ff(n){const e=Vx();return await Bu(Mi(Mn,"users",n,"sessions",e),{deviceId:e,userAgent:navigator.userAgent,loginAt:wl()}),e}async function v_(n,e){await Bf(Mi(Mn,"users",n,"sessions",e))}function CP({children:n}){const[e,t]=B.useState(null),[i,o]=B.useState(!0),[l,u]=B.useState(null);B.useEffect(()=>mk(xs,async P=>{if(P){const q=await GR(Mi(Mn,"users",P.uid));t({...P,profile:q.exists()?q.data():{}})}else t(null);o(!1)}),[]);async function p(I,P){const q=await uk(xs,I,P),{allowed:O,sessions:L}=await y_(q.user.uid);if(!O)throw await ef(xs),{code:"device-limit",sessions:L.docs.map(Z=>Z.data())};return await ff(q.user.uid),q}async function m(){const I=await Lk(xs,bP),{allowed:P,sessions:q}=await y_(I.user.uid);if(!P)throw await ef(xs),{code:"device-limit",sessions:q.docs.map(L=>L.data())};return await Bu(Mi(Mn,"users",I.user.uid),{uid:I.user.uid,name:I.user.displayName,email:I.user.email,photoURL:I.user.photoURL,updatedAt:wl()},{merge:!0}),await ff(I.user.uid),I}async function v(I,P,q,O,L){const H=await ck(xs,I,P),Z=`${q} ${O}`;return await dk(H.user,{displayName:Z}),await Bu(Mi(Mn,"users",H.user.uid),{uid:H.user.uid,name:Z,email:I,healthGoal:L,createdAt:wl()}),await ff(H.user.uid),H}async function w(){if(e){const I=Vx();await v_(e.uid,I)}await ef(xs)}async function E(I,P){await v_(I,P)}return h.jsx(Ox.Provider,{value:{user:e,loading:i,login:p,loginWithGoogle:m,register:v,logout:w,revokeDevice:E,deviceError:l},children:n})}function mh(){return B.useContext(Ox)}async function __(n){try{const e=await Lx();if(!e||await Notification.requestPermission()!=="granted")return null;const i=await TP(e,{vapidKey:kP});return i&&n&&await Bu(Mi(Mn,"users",n,"fcmTokens",i),{token:i,createdAt:wl(),userAgent:navigator.userAgent}),i}catch(e){return console.warn("FCM token error:",e),null}}function RP(n){B.useEffect(()=>{let e=null;return Lx().then(t=>{t&&(e=IP(t,i=>{console.log("FCM message received:",i),n&&n(i)}))}),()=>{e&&e()}},[n])}function Xr({onNotification:n}){var E,I;const e=yr(),t=Wu(),{user:i,logout:o}=mh(),[l,u]=B.useState(!1),[p,m]=B.useState(!1),v=P=>e.pathname===P;B.useEffect(()=>{i&&!l&&__(i.uid).then(P=>{P&&u(!0)})},[i]);async function w(){m(!0),await o(),m(!1),t("/")}return h.jsxs(h.Fragment,{children:[h.jsx("nav",{className:"navbar navbar-expand-lg navbar-dark sticky-top",children:h.jsxs("div",{className:"container",children:[h.jsx($e,{className:"navbar-brand",to:"/",children:h.jsx("img",{src:"/Black and White Wings Company Logo.png",alt:"Logo",className:"me-2"})}),h.jsx("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav",children:h.jsx("span",{className:"navbar-toggler-icon"})}),h.jsxs("div",{className:"collapse navbar-collapse",id:"navbarNav",children:[h.jsxs("ul",{className:"navbar-nav me-auto",children:[h.jsx("li",{className:"nav-item",children:h.jsx($e,{className:`nav-link ${v("/")?"active":""}`,to:"/",children:"Home"})}),h.jsx("li",{className:"nav-item",children:h.jsx($e,{className:`nav-link ${v("/about")?"active":""}`,to:"/about",children:"About"})}),h.jsx("li",{className:"nav-item",children:h.jsx($e,{className:`nav-link ${v("/store")?"active":""}`,to:"/store",children:"Store"})}),h.jsx("li",{className:"nav-item",children:h.jsx("a",{className:"nav-link",href:"#contact",children:"Contact Us"})})]}),h.jsxs("div",{className:"d-flex align-items-center gap-2",children:[h.jsxs($e,{to:"/premium",className:"btn premium-btn",children:[h.jsx("i",{className:"fas fa-crown me-1"}),"Go Premium"]}),i?h.jsxs("div",{className:"dropdown",children:[h.jsxs("button",{className:"btn btn-outline-light dropdown-toggle d-flex align-items-center gap-2","data-bs-toggle":"dropdown",style:{borderRadius:20,padding:"5px 14px"},children:[i.photoURL?h.jsx("img",{src:i.photoURL,alt:"",style:{width:26,height:26,borderRadius:"50%",objectFit:"cover"}}):h.jsx("span",{style:{width:26,height:26,borderRadius:"50%",background:"linear-gradient(135deg,#36D1DC,#5B86E5)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"0.75rem",fontWeight:700},children:(i.displayName||i.email||"?")[0].toUpperCase()}),h.jsx("span",{style:{maxWidth:100,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",fontSize:"0.9rem"},children:((E=i.displayName)==null?void 0:E.split(" ")[0])||((I=i.email)==null?void 0:I.split("@")[0])||"Profile"})]}),h.jsxs("ul",{className:"dropdown-menu dropdown-menu-end",style:{minWidth:200,background:"#1a1a2e",border:"1px solid rgba(54,209,220,0.2)",borderRadius:12},children:[h.jsx("li",{children:h.jsx("span",{className:"dropdown-item",style:{color:"rgba(255,255,255,0.5)",fontSize:"0.8rem",cursor:"default"},children:i.email})}),h.jsx("li",{children:h.jsx("hr",{className:"dropdown-divider",style:{borderColor:"rgba(255,255,255,0.1)"}})}),h.jsx("li",{children:h.jsxs("button",{className:"dropdown-item",style:{color:"#36D1DC"},onClick:()=>{l||__(i.uid).then(()=>u(!0))},children:["🔔 ",l?"Notifications On ✓":"Enable Notifications"]})}),h.jsx("li",{children:h.jsx("button",{className:"dropdown-item",style:{color:"#ff8080"},onClick:w,disabled:p,children:p?"⏳ Logging out…":"🚪 Logout"})})]})]}):h.jsxs("div",{className:"d-flex gap-2",children:[h.jsxs($e,{to:"/login",className:"btn btn-outline-light",style:{borderRadius:20,padding:"5px 15px"},children:[h.jsx("i",{className:"fas fa-sign-in-alt me-1"}),"Login"]}),h.jsx($e,{to:"/register",className:"btn",style:{borderRadius:20,padding:"5px 15px",background:"linear-gradient(135deg,#36D1DC,#5B86E5)",color:"#fff",border:"none",fontWeight:600},children:"Sign Up"})]})]})]})]})}),h.jsx("style",{children:`
        .dropdown-item{padding:10px 16px;font-size:0.9rem;background:transparent;border:none;width:100%;text-align:left;cursor:pointer;transition:background 0.2s}
        .dropdown-item:hover{background:rgba(54,209,220,0.1)!important;color:#fff!important}
      `})]})}function Zr(){return h.jsx("footer",{id:"contact",children:h.jsxs("div",{className:"container",children:[h.jsxs("div",{className:"row",children:[h.jsxs("div",{className:"col-md-4 mb-4 mb-md-0",children:[h.jsx("h5",{children:"Elev8"}),h.jsx("p",{children:"Your comprehensive guide to holistic health, fitness, and wellbeing. Transform your life one healthy habit at a time."}),h.jsxs("div",{className:"social-icons mt-3",children:[h.jsx("a",{href:"#",className:"me-2",children:h.jsx("i",{className:"fab fa-facebook-f"})}),h.jsx("a",{href:"#",className:"me-2",children:h.jsx("i",{className:"fab fa-twitter"})}),h.jsx("a",{href:"https://www.instagram.com/elev8._.fit/",target:"_blank",rel:"noopener noreferrer",className:"me-2",children:h.jsx("i",{className:"fab fa-instagram"})}),h.jsx("a",{href:"#",className:"me-2",children:h.jsx("i",{className:"fab fa-youtube"})})]})]}),h.jsxs("div",{className:"col-md-2 mb-4 mb-md-0",children:[h.jsx("h5",{children:"Quick Links"}),h.jsxs("div",{className:"footer-links d-flex flex-column",children:[h.jsx($e,{to:"/",children:"Home"}),h.jsx($e,{to:"/about",children:"About"}),h.jsx($e,{to:"/store",children:"Store"})]})]}),h.jsxs("div",{className:"col-md-3 mb-4 mb-md-0",children:[h.jsx("h5",{children:"Wellness Categories"}),h.jsxs("div",{className:"footer-links d-flex flex-column",children:[h.jsx($e,{to:"/diet",children:"Diet Plan"}),h.jsx($e,{to:"/yoga",children:"Yoga and Meditation"}),h.jsx($e,{to:"/weight",children:"Weight Training"}),h.jsx($e,{to:"/calisthenics",children:"Calisthenics"}),h.jsx($e,{to:"/circadian",children:"Circadian Rhythm"})]})]}),h.jsxs("div",{className:"col-md-3",children:[h.jsx("h5",{children:"Contact Us"}),h.jsxs("p",{children:[h.jsx("i",{className:"fas fa-map-marker-alt me-2"}),"Chak Ganjaria City, Lucknow"]}),h.jsxs("p",{children:[h.jsx("i",{className:"fas fa-envelope me-2"})," elev8@iiitl.ac.in"]})]})]}),h.jsx("hr",{className:"mt-4 mb-3",style:{backgroundColor:"rgba(255,255,255,0.2)"}}),h.jsxs("div",{className:"row",children:[h.jsx("div",{className:"col-md-6",children:h.jsx("p",{children:"© 2025 Elev8. All rights reserved."})}),h.jsx("div",{className:"col-md-6 text-md-end"})]})]})})}function NP({url:n,title:e,compact:t=!1}){const i=n||window.location.href,o=e||"Check out Elev8 — Your Wellness Platform!",[l,u]=B.useState(!1),p=encodeURIComponent(i),m=encodeURIComponent(o),v=[{name:"WhatsApp",icon:"📱",color:"#25D366",href:`https://wa.me/?text=${m}%20${p}`},{name:"Twitter/X",icon:"𝕏",color:"#1DA1F2",href:`https://twitter.com/intent/tweet?text=${m}&url=${p}`},{name:"Facebook",icon:"f",color:"#1877F2",href:`https://www.facebook.com/sharer/sharer.php?u=${p}`},{name:"LinkedIn",icon:"in",color:"#0077B5",href:`https://www.linkedin.com/sharing/share-offsite/?url=${p}`},{name:"Instagram",icon:"📸",color:"linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)",href:"https://www.instagram.com/elev8._.fit/"}];async function w(){try{await navigator.clipboard.writeText(i),u(!0),setTimeout(()=>u(!1),2e3)}catch{const I=document.createElement("textarea");I.value=i,document.body.appendChild(I),I.select(),document.execCommand("copy"),document.body.removeChild(I),u(!0),setTimeout(()=>u(!1),2e3)}}async function E(){if(navigator.share)try{await navigator.share({title:o,url:i})}catch{}}return h.jsxs(h.Fragment,{children:[h.jsx("style",{children:`
        .share-bar{display:flex;flex-wrap:wrap;align-items:center;gap:8px}
        .share-label{color:rgba(255,255,255,0.6);font-size:0.82rem;font-weight:600;letter-spacing:0.5px;text-transform:uppercase;margin-right:4px}
        .share-btn{display:inline-flex;align-items:center;gap:6px;padding:${t?"7px 10px":"8px 14px"};border-radius:10px;border:none;cursor:pointer;font-weight:600;font-size:${t?"0.8rem":"0.85rem"};transition:transform 0.2s,box-shadow 0.2s;text-decoration:none;color:#fff;white-space:nowrap}
        .share-btn:hover{transform:translateY(-2px);box-shadow:0 4px 12px rgba(0,0,0,0.3);color:#fff}
        .share-btn-icon{font-size:${t?"14px":"15px"};font-style:normal;line-height:1;font-weight:900}
        .share-copy{background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.2)}
        .share-copy:hover{background:rgba(255,255,255,0.18)}
        .share-native{background:linear-gradient(135deg,#36D1DC,#5B86E5)}
      `}),h.jsxs("div",{className:"share-bar",children:[!t&&h.jsx("span",{className:"share-label",children:"Share:"}),typeof navigator<"u"&&"share"in navigator&&h.jsxs("button",{className:"share-btn share-native",onClick:E,title:"Share",children:[h.jsx("span",{className:"share-btn-icon",children:"↑"}),!t&&"Share"]}),v.map(I=>h.jsxs("a",{href:I.href,target:"_blank",rel:"noopener noreferrer",className:"share-btn",style:{background:(I.color.startsWith("linear"),I.color)},title:`Share on ${I.name}`,children:[h.jsx("span",{className:"share-btn-icon",children:I.icon}),!t&&I.name]},I.name)),h.jsxs("button",{className:"share-btn share-copy",onClick:w,title:"Copy link",children:[h.jsx("span",{className:"share-btn-icon",children:l?"✅":"🔗"}),!t&&(l?"Copied!":"Copy Link")]})]})]})}const PP=[{id:1,name:"Chaitanya Mahendra Chouhan",email:"chaitanya@example.com",goal:"Weight Loss",status:"Active"},{id:2,name:"Abhishek Chauhan",email:"abhishek@example.com",goal:"Stress Reduction",status:"Active"},{id:3,name:"Manish Kumar Yadav",email:"manish@example.com",goal:"Muscle Gain",status:"Active"},{id:4,name:"Soham Rastogi",email:"soham@example.com",goal:"Better Sleep",status:"Inactive"},{id:5,name:"Himanshu Prajapati",email:"himanshu@example.com",goal:"Overall Wellness",status:"Active"},{id:6,name:"Parth Badgire",email:"parth@example.com",goal:"Overall Wellness",status:"Active"},{id:7,name:"Sahil Bhaskarwar",email:"sahil@example.com",goal:"Muscle Gain",status:"Active"},{id:8,name:"Sankshitha Bhukya",email:"sankshitha@example.com",goal:"Weight Gain",status:"Inactive"},{id:9,name:"Srikruthi Amballa",email:"srikruthi@example.com",goal:"Weight Loss",status:"Inactive"},{id:10,name:"Prakhar Gupta",email:"prakhar@example.com",goal:"Better Sleep",status:"Active"}];function jP(){const[n,e]=B.useState(PP),[t,i]=B.useState({firstName:"",lastName:"",email:"",contact:"",healthGoals:"Choose",description:""}),[o,l]=B.useState(!1),[u,p]=B.useState(""),[m,v]=B.useState(!0),[w,E]=B.useState(()=>{const O=localStorage.getItem("elev8_water_glasses");return O?parseInt(O,10):3});function I(){E(O=>{const L=O>=8?0:O+1;return localStorage.setItem("elev8_water_glasses",L.toString()),L})}function P(O){const{id:L,value:H,type:Z,checked:ie}=O.target;i(ne=>({...ne,[L]:Z==="checkbox"?ie:H}))}async function q(O){O.preventDefault(),l(!0);try{await fetch("http://localhost:8080/api/callback",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({firstName:t.firstName,lastName:t.lastName,email:t.email,contact:t.contact,healthGoals:t.healthGoals==="Choose"?"":t.healthGoals,description:t.description})}),e(L=>[...L,{id:L.length+1,name:`${t.firstName} ${t.lastName}`,email:t.email,goal:t.healthGoals==="Choose"?"Not specified":t.healthGoals,status:"Pending"}]),p("✅ Callback request submitted! We'll contact you shortly."),i({firstName:"",lastName:"",email:"",contact:"",healthGoals:"Choose",description:""}),setTimeout(()=>p(""),5e3)}catch{p("⚠️ Saved locally. Backend not reachable — check your server."),setTimeout(()=>p(""),5e3)}finally{l(!1)}}return h.jsxs(h.Fragment,{children:[h.jsx(Xr,{}),h.jsxs("div",{id:"homeCarousel",className:"carousel slide","data-bs-ride":"carousel",children:[h.jsx("div",{className:"carousel-indicators",children:[0,1,2,3,4,5].map(O=>h.jsx("button",{type:"button","data-bs-target":"#homeCarousel","data-bs-slide-to":O,className:O===0?"active":""},O))}),h.jsxs("div",{className:"carousel-inner",children:[h.jsxs("div",{className:"carousel-item active",children:[h.jsx("video",{className:"d-block w-100",src:"/video1.webm",autoPlay:!0,muted:!0,loop:!0,playsInline:!0}),h.jsxs("div",{className:"carousel-caption d-none d-md-block",children:[h.jsx("h2",{style:{fontWeight:700},children:"Transform Your Health Journey"}),h.jsx("h4",{children:"Discover personalized wellness plans tailored to your goals and lifestyle"})]})]}),["/1.avif","/img122.jpeg","/ppt1image.avif","/2.avif","/3.avif"].map((O,L)=>h.jsxs("div",{className:"carousel-item",children:[h.jsx("img",{src:O,className:"d-block w-100",alt:"Fitness"}),h.jsxs("div",{className:"carousel-caption d-none d-md-block",children:[h.jsx("h3",{children:"Transform Your Health Journey"}),h.jsx("p",{children:"Discover personalized wellness plans tailored to your goals and lifestyle."})]})]},O))]}),h.jsx("button",{className:"carousel-control-prev",type:"button","data-bs-target":"#homeCarousel","data-bs-slide":"prev",children:h.jsx("span",{className:"carousel-control-prev-icon"})}),h.jsx("button",{className:"carousel-control-next",type:"button","data-bs-target":"#homeCarousel","data-bs-slide":"next",children:h.jsx("span",{className:"carousel-control-next-icon"})})]}),h.jsxs("div",{className:"container my-5",children:[h.jsxs("div",{className:"row",children:[h.jsx("div",{className:"sidebar-outer col-lg-3",children:h.jsxs("div",{className:"sidebar",children:[h.jsx("h4",{children:"Wellness Categories"}),h.jsxs("ul",{className:"sidebar-list",children:[h.jsx($e,{className:"sidebar-anchor",to:"/diet",children:h.jsxs("li",{children:[h.jsx("i",{className:"fas fa-apple-alt"}),"Diet Plan"]})}),h.jsx($e,{className:"sidebar-anchor",to:"/yoga",children:h.jsxs("li",{children:[h.jsx("i",{className:"fas fa-spa"}),"Yoga & Meditation"]})}),h.jsx($e,{className:"sidebar-anchor",to:"/weight",children:h.jsxs("li",{children:[h.jsx("i",{className:"fas fa-dumbbell"}),"Weight Training"]})}),h.jsx($e,{className:"sidebar-anchor",to:"/calisthenics",children:h.jsxs("li",{children:[h.jsx("i",{className:"fas fa-running"}),"Calisthenics"]})}),h.jsx($e,{className:"sidebar-anchor",to:"/circadian",children:h.jsxs("li",{children:[h.jsx("i",{className:"fas fa-clock"}),"Circadian Rhythm"]})})]}),h.jsxs("div",{className:"sidebar-section",children:[h.jsxs("h5",{children:[h.jsx("i",{className:"fas fa-glass-water",style:{color:"#36D1DC"}})," Water Tracker"]}),h.jsxs("div",{className:"water-tracker",children:[h.jsxs("span",{style:{fontSize:"0.85rem",fontWeight:600,color:"#4a5568"},children:["Daily Goal: ",w," / 8 Glasses"]}),h.jsx("div",{className:"water-glasses",children:Array.from({length:8}).map((O,L)=>h.jsx("i",{className:`fas fa-glass-water water-glass-icon ${L<w?"filled":""}`},L))}),h.jsx("button",{className:"btn-water",onClick:I,children:w>=8?"🔄 Reset Tracker":"💧 Log a Glass"})]})]}),h.jsxs("div",{className:"sidebar-section",children:[h.jsxs("h5",{children:[h.jsx("i",{className:"fas fa-lightbulb",style:{color:"#36D1DC"}})," Daily Tip"]}),h.jsxs("div",{className:"alert alert-custom mb-0",style:{fontSize:"0.95rem",lineHeight:"1.45"},children:[h.jsxs("p",{style:{marginBottom:8},children:[h.jsx("strong",{children:"Hydration:"})," Drink at least 8 glasses of water daily to maintain optimal body function."]}),h.jsxs("p",{style:{marginBottom:8},children:[h.jsx("strong",{children:"Sleep:"})," Maintain a consistent schedule by sleeping and waking at the same time daily."]}),h.jsxs("p",{style:{marginBottom:8},children:[h.jsx("strong",{children:"Activity:"})," Regular exercise improves mood and maintains cardiovascular health."]}),h.jsxs("p",{style:{marginBottom:0},children:[h.jsx("strong",{children:"Mindfulness:"})," Practice 5-10 minutes of deep breathing or meditation to calm your nervous system."]})]})]}),h.jsxs("div",{className:"sidebar-section",children:[h.jsxs("h5",{children:[h.jsx("i",{className:"fas fa-quote-left",style:{color:"#36D1DC"}})," Focus of the Day"]}),h.jsxs("div",{className:"quote-box",children:['"Your body hears everything your mind says. Keep speaking strength, growth, and wellness into existence."',h.jsx("span",{className:"quote-author",children:"— Elev8 Wellness"})]})]})]})}),h.jsxs("div",{className:"col-lg-9 main-content-col",children:[m&&h.jsxs("div",{className:"alert alert-success alert-dismissible fade show",role:"alert",children:[h.jsx("strong",{children:"Welcome!"})," You've successfully landed on our health and wellness platform. Start your journey today!",h.jsx("button",{type:"button",className:"btn-close",onClick:()=>v(!1)})]}),h.jsxs("div",{className:"form-container",style:{backgroundColor:"whitesmoke",borderTop:"4px solid var(--secondary-color)",boxShadow:"0 4px 12px rgba(255, 255, 255, 1)",borderRadius:12},children:[h.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,marginBottom:6},children:[h.jsx("span",{style:{fontSize:28},children:"📞"}),h.jsxs("div",{children:[h.jsx("h3",{className:"form-title",style:{marginBottom:2},children:"Request a Callback"}),h.jsx("p",{style:{color:"rgba(255,255,255,0.5)",fontSize:13,margin:0},children:"Fill in your details and our wellness expert will call you back within 24 hours."})]})]}),h.jsx("hr",{style:{borderColor:"rgba(54,209,220,0.2)",marginBottom:20}}),u&&h.jsx("div",{style:{background:"rgba(54,209,220,0.15)",border:"1px solid rgba(54,209,220,0.4)",borderRadius:10,padding:"10px 16px",marginBottom:16,color:"#36d1dc",fontWeight:500},children:u}),h.jsxs("form",{id:"callbackForm",onSubmit:q,children:[h.jsxs("div",{className:"row",children:[h.jsxs("div",{className:"col-md-6 mb-3",children:[h.jsxs("label",{htmlFor:"firstName",className:"form-label",children:["First Name ",h.jsx("span",{style:{color:"#36d1dc"},children:"*"})]}),h.jsx("input",{placeholder:"eg: Kamal",type:"text",className:"form-control",id:"firstName",value:t.firstName,onChange:P,required:!0})]}),h.jsxs("div",{className:"col-md-6 mb-3",children:[h.jsxs("label",{htmlFor:"lastName",className:"form-label",children:["Last Name ",h.jsx("span",{style:{color:"#36d1dc"},children:"*"})]}),h.jsx("input",{placeholder:"eg: Gupta",type:"text",className:"form-control",id:"lastName",value:t.lastName,onChange:P,required:!0})]})]}),h.jsxs("div",{className:"row",children:[h.jsxs("div",{className:"col-md-6 mb-3",children:[h.jsxs("label",{htmlFor:"email",className:"form-label",children:["Email Address ",h.jsx("span",{style:{color:"#36d1dc"},children:"*"})]}),h.jsx("input",{placeholder:"eg: kamal@example.com",type:"email",className:"form-control",id:"email",value:t.email,onChange:P,required:!0})]}),h.jsxs("div",{className:"col-md-6 mb-3",children:[h.jsxs("label",{htmlFor:"contact",className:"form-label",children:["Contact Number ",h.jsx("span",{style:{color:"#36d1dc"},children:"*"})]}),h.jsx("input",{placeholder:"eg: +91 98765 43210",type:"tel",className:"form-control",id:"contact",value:t.contact,onChange:P,pattern:"[+\\d\\s\\-]{7,15}",required:!0})]})]}),h.jsxs("div",{className:"mb-3",children:[h.jsx("label",{htmlFor:"healthGoals",className:"form-label",children:"Primary Health Goals"}),h.jsxs("select",{className:"form-select",id:"healthGoals",value:t.healthGoals,onChange:P,children:[h.jsx("option",{children:"Choose"}),h.jsx("option",{children:"Weight Loss"}),h.jsx("option",{children:"Muscle Gain"}),h.jsx("option",{children:"Stress Reduction"}),h.jsx("option",{children:"Better Sleep"}),h.jsx("option",{children:"Overall Wellness"}),h.jsx("option",{children:"Weight Gain"})]})]}),h.jsxs("div",{className:"mb-3",children:[h.jsx("label",{htmlFor:"description",className:"form-label",children:"Tell us about your health concern"}),h.jsx("textarea",{className:"form-control",id:"description",rows:4,placeholder:"Describe your current health situation, specific goals, or any concerns you'd like to discuss during the callback...",value:t.description,onChange:P,style:{resize:"vertical",minHeight:100}})]}),h.jsx("div",{className:"button-reg",children:h.jsx("button",{type:"submit",className:"btn btn-primary",disabled:o,style:{display:"flex",alignItems:"center",gap:8,padding:"10px 28px",fontSize:15},children:o?h.jsxs(h.Fragment,{children:[h.jsx("span",{className:"spinner-border spinner-border-sm",role:"status"})," Submitting..."]}):h.jsx(h.Fragment,{children:"📞 Request Callback"})})})]})]}),h.jsxs("div",{className:"table-container",children:[h.jsx("h3",{className:"table-title",children:"Community Members"}),h.jsxs("table",{className:"table table-striped table-hover",children:[h.jsx("thead",{children:h.jsxs("tr",{children:[h.jsx("th",{children:"#"}),h.jsx("th",{children:"Name"}),h.jsx("th",{children:"Email"}),h.jsx("th",{children:"Goals"}),h.jsx("th",{children:"Status"})]})}),h.jsx("tbody",{children:n.map(O=>h.jsxs("tr",{children:[h.jsx("td",{children:O.id}),h.jsx("td",{children:O.name}),h.jsx("td",{children:O.email}),h.jsx("td",{children:O.goal}),h.jsx("td",{children:h.jsx("span",{className:`badge ${O.status==="Active"?"bg-success":"bg-danger"}`,children:O.status})})]},O.id))})]})]})]}),h.jsx("h3",{className:"mb-4 gradient-text",id:"cards-features",children:"Featured Wellness Programs"}),h.jsx("div",{className:"row",children:[{title:"Nutrition Mastery & Blueprint",desc:"Learn to create balanced meal plans that support your health goals.",items:["Personalized diet charts","Recipe database","Nutrition tracking"],to:"/diet"},{title:"Calisthenics & Weight Training",desc:"Build strength and flexibility using your body weight or weight equipment.",items:["Beginner to advanced routines","Form tutorials","Progress tracking"],to:"/calisthenics"},{title:"Sleep Optimization",desc:"Improve sleep quality by understanding circadian rhythms and yoga.",items:["Sleep tracking","Stress relief yoga & meditation","Sleep hygiene tips"],to:"/circadian"}].map(O=>h.jsx("div",{className:"col-md-4",children:h.jsxs("div",{className:"card",children:[h.jsx("div",{className:"card-header",children:h.jsx("h5",{className:"card-title mb-0",children:O.title})}),h.jsxs("div",{className:"card-body",children:[h.jsx("p",{className:"card-text",children:O.desc}),h.jsx("ul",{className:"list-group list-group-flush mb-3",children:O.items.map(L=>h.jsx("li",{className:"list-group-item",children:L},L))}),h.jsx($e,{to:O.to,className:"btn btn-primary",children:"Learn More"})]})]})},O.title))})]}),h.jsxs("div",{className:"mt-4 p-4",style:{background:"rgba(255,255,255,0.03)",borderRadius:14,border:"1px solid rgba(54,209,220,0.15)"},children:[h.jsx("h5",{style:{color:"rgba(255,255,255,0.7)",marginBottom:14},children:"🌐 Share Elev8 with your friends"}),h.jsx(NP,{title:"Join Elev8 — The Ultimate Wellness Platform! 🏋️‍♂️"})]})]}),h.jsx(Zr,{})]})}function DP(){return h.jsxs(h.Fragment,{children:[h.jsx(Xr,{}),h.jsx("div",{className:"hero-section",children:h.jsxs("div",{className:"container",children:[h.jsx("h1",{className:"display-4 fw-bold mb-3",children:"About Elev8"}),h.jsx("p",{className:"lead mb-4",children:"Transforming Lives Through Holistic Wellness Since 2025"}),h.jsxs("a",{href:"#our-story",className:"btn btn-lg premium-btn",children:[h.jsx("i",{className:"fas fa-arrow-down me-2"}),"Our Story"]})]})}),h.jsxs("div",{className:"container",children:[h.jsx("section",{id:"our-story",className:"mb-5",children:h.jsxs("div",{className:"row align-items-center",children:[h.jsxs("div",{className:"col-lg-6 mb-4 mb-lg-0",children:[h.jsx("h2",{className:"gradient-text mb-4",children:"Our Journey"}),h.jsx("p",{className:"lead mb-4",children:"Elev8 was born from a simple observation: true wellness isn't just about fitness or diet alone. It's a harmonious balance of physical health, mental clarity, and spiritual connection."}),h.jsx("p",{children:"Founded in 2025 by a team of health enthusiasts, nutritionists, and fitness experts, we set out to create a platform that addresses all aspects of well-being. Our mission is to provide comprehensive, science-backed wellness solutions that are accessible to everyone."}),h.jsx("p",{children:"What started as a small community of like-minded individuals has grown into a thriving platform with thousands of members across the globe, all united by a common goal: to elevate their health and transform their lives."})]}),h.jsx("div",{className:"col-lg-6",children:h.jsx("img",{src:"/ABOUT/5469.jpg",alt:"Our Team",className:"img-fluid rounded shadow"})})]})}),h.jsx("section",{className:"mission-section",children:h.jsxs("div",{className:"container",children:[h.jsxs("div",{className:"text-center mb-5",children:[h.jsx("h2",{className:"gradient-text",children:"Our Mission"}),h.jsx("p",{className:"lead",children:"To empower individuals to achieve optimal health through integrated wellness solutions"})]}),h.jsxs("div",{className:"row",children:[h.jsx("div",{className:"col-md-4 mb-4",children:h.jsxs("div",{className:"value-card",children:[h.jsx("i",{className:"fas fa-heartbeat"}),h.jsx("h4",{children:"Holistic Approach"}),h.jsx("p",{children:"We believe in treating the whole person - body, mind, and spirit - for lasting transformation."})]})}),h.jsx("div",{className:"col-md-4 mb-4",children:h.jsxs("div",{className:"value-card",children:[h.jsx("i",{className:"fas fa-users"}),h.jsx("h4",{children:"Community Driven"}),h.jsx("p",{children:"Building supportive communities where members motivate and inspire each other's journeys."})]})}),h.jsx("div",{className:"col-md-4 mb-4",children:h.jsxs("div",{className:"value-card",children:[h.jsx("i",{className:"fas fa-graduation-cap"}),h.jsx("h4",{children:"Science-Backed"}),h.jsx("p",{children:"All our programs are based on scientific research and evidence-based practices."})]})})]})]})}),h.jsx("section",{className:"stats-section",children:h.jsx("div",{className:"container",children:h.jsxs("div",{className:"row text-center",children:[h.jsxs("div",{className:"col-md-3 mb-4",children:[h.jsx("div",{className:"stat-number",children:"5,000+"}),h.jsx("p",{children:"Active Members"})]}),h.jsxs("div",{className:"col-md-3 mb-4",children:[h.jsx("div",{className:"stat-number",children:"50+"}),h.jsx("p",{children:"Expert Coaches"})]}),h.jsxs("div",{className:"col-md-3 mb-4",children:[h.jsx("div",{className:"stat-number",children:"95%"}),h.jsx("p",{children:"Success Rate"})]}),h.jsxs("div",{className:"col-md-3 mb-4",children:[h.jsx("div",{className:"stat-number",children:"24/7"}),h.jsx("p",{children:"Support Available"})]})]})})}),h.jsx("section",{className:"simple-team-section py-5",children:h.jsxs("div",{className:"container",children:[h.jsx("h2",{className:"text-center gradient-text mb-4",children:"Meet Our Core Team"}),h.jsx("p",{className:"text-center text-white mb-5",children:"The passionate minds behind Elev8 Wellness"}),h.jsx("div",{className:"team-row top-row justify-content-center mb-5",children:[{name:"Prakhar Gupta",role:"Project Lead and Frontend Developer",img:"/ABOUT/prakhar.jpeg"},{name:"Sahil Bhaskarwar",role:"Frontend Developer",img:"/ABOUT/sahil.jpeg"},{name:"Chatanya Mahendra Singh Chouhan",role:"Frontend Developer",img:"/ABOUT/chaitanya.jpeg"},{name:"Soham Rastogi",role:"Content Writer",img:"/ABOUT/soham.jpeg"},{name:"Himanshu Prajapati",role:"Frontend Developer",img:"/ABOUT/himanshu.jpeg"}].map(n=>h.jsxs("div",{className:"team-member-simple",children:[h.jsx("div",{className:"member-circle",children:h.jsx("img",{src:n.img,alt:n.name})}),h.jsxs("div",{className:"member-info",children:[h.jsx("h6",{children:n.name}),h.jsx("p",{className:"role",children:n.role})]})]},n.name))}),h.jsx("div",{className:"team-row bottom-row justify-content-center",children:[{name:"Parth Badgire",role:"Designer and Frontend Developer",img:"/ABOUT/parth.jpeg"},{name:"Manish Kumar Yadav",role:"Frontend Developer",img:"/ABOUT/manish.jpeg"},{name:"Sankshitha Bhukya",role:"Frontend Developer",img:"/ABOUT/sankshitha.jpeg"},{name:"Srikruthi Amballa",role:"Frontend Developer",img:"/ABOUT/srikruthi.jpeg"},{name:"Abhishek Chauhan",role:"Frontend Developer",img:"/ABOUT/abhishek.jpeg"}].map(n=>h.jsxs("div",{className:"team-member-simple",children:[h.jsx("div",{className:"member-circle",children:h.jsx("img",{src:n.img,alt:n.name})}),h.jsxs("div",{className:"member-info",children:[h.jsx("h6",{children:n.name}),h.jsx("p",{className:"role",children:n.role})]})]},n.name))})]})}),h.jsx("section",{className:"cta-section",children:h.jsxs("div",{className:"container",children:[h.jsx("h2",{className:"display-5 mb-4",children:"Ready to Elevate Your Wellness Journey?"}),h.jsx("p",{className:"lead mb-4",children:"Join thousands of members who have transformed their lives with Elev8"}),h.jsxs($e,{to:"/premium",className:"btn btn-light btn-lg px-5",children:[h.jsx("i",{className:"fas fa-user-plus me-2"}),"Join Now"]})]})})]}),h.jsx(Zr,{}),h.jsx("style",{children:`
        .hero-section {
          background: linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80');
          background-size: cover; background-position: center;
          color: white; padding: 100px 0; margin-bottom: 50px;
          text-align: center; display: flex; height: 500px;
        }
        #our-story { color: white; }
        .lead { color: white; }
        .mission-section { background: linear-gradient(135deg, rgba(54,209,220,0.1), rgba(0,0,0,0.1)); padding: 60px 0; border-radius: 15px; margin: 50px 0; }
        .value-card { background: white; border-radius: 12px; padding: 30px; height: 100%; box-shadow: 0 4px 12px rgba(255,255,255,1); transition: transform 0.3s, box-shadow 0.3s; border-top: 4px solid var(--secondary-color); }
        .value-card:hover { transform: translateY(-10px); box-shadow: 0 8px 25px rgba(54,209,220,0.2); }
        .value-card i { font-size: 2.5rem; color: var(--secondary-color); margin-bottom: 20px; }
        .stats-section { background: linear-gradient(135deg, var(--primary-color), var(--secondary-color)); color: white; padding: 60px 0; border-radius: 15px; margin: 50px 0; }
        .stat-number { font-size: 3rem; font-weight: bold; color: white; }
        .cta-section { background: linear-gradient(135deg, var(--secondary-color), #5B86E5); color: white; padding: 80px 0; border-radius: 15px; text-align: center; margin: 50px 0; }
        .simple-team-section { background: linear-gradient(135deg, rgba(0,0,0,0.8), rgba(54,209,220,0.15)); border-radius: 15px; margin: 50px 0; }
        .team-row { display: flex; flex-wrap: wrap; gap: 30px; }
        .team-member-simple { text-align: center; flex: 0 0 180px; }
        .member-circle { width: 120px; height: 120px; margin: 0 auto 15px; border-radius: 50%; overflow: hidden; border: 3px solid var(--secondary-color); padding: 3px; background: linear-gradient(45deg, var(--secondary-color), #5B86E5); transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .member-circle img { width: 100%; height: 100%; border-radius: 50%; object-fit: cover; display: block; }
        .team-member-simple:hover .member-circle { transform: scale(1.05); box-shadow: 0 0 20px rgba(54,209,220,0.5); }
        .member-info h6 { color: white; font-weight: 600; margin-bottom: 5px; font-size: 0.95rem; }
        .member-info .role { color: var(--secondary-color); font-size: 0.85rem; margin: 0; }
      `})]})}function LP(){return h.jsxs(h.Fragment,{children:[h.jsx(Xr,{}),h.jsx("section",{className:"pricing-section",children:h.jsxs("div",{className:"container",children:[h.jsxs("div",{className:"text-center mb-5",children:[h.jsx("h2",{className:"section-title",children:"Elev8 Premium Plans"}),h.jsx("p",{className:"section-subtitle",children:"Choose the perfect plan to accelerate your fitness journey."})]}),h.jsxs("div",{className:"row",children:[h.jsx("div",{className:"col-lg-4 col-md-6 mb-4",children:h.jsxs("div",{className:"pricing-card",children:[h.jsx("h3",{className:"pcard-title",children:"Starter"}),h.jsx("p",{className:"card-subtitle",children:"Perfect for beginners starting their fitness journey."}),h.jsxs("div",{className:"price",children:["₹999",h.jsx("span",{children:"/month"})]}),h.jsx("p",{className:"billing-cycle",children:"Billed monthly. No commitment."}),h.jsxs("ul",{className:"features-list",children:[h.jsxs("li",{children:[h.jsx("i",{className:"fas fa-check"}),"Custom workout plan (3x/week)"]}),h.jsxs("li",{children:[h.jsx("i",{className:"fas fa-check"}),"Basic nutrition guidelines"]}),h.jsxs("li",{children:[h.jsx("i",{className:"fas fa-check"}),"Access to Elev8 mobile app"]}),h.jsxs("li",{className:"inactive",children:[h.jsx("i",{className:"fas fa-times"}),"Live coaching sessions"]}),h.jsxs("li",{className:"inactive",children:[h.jsx("i",{className:"fas fa-times"}),"Advanced analytics"]}),h.jsxs("li",{className:"inactive",children:[h.jsx("i",{className:"fas fa-times"}),"Priority support"]})]}),h.jsx("button",{className:"pcard-btn secondary",children:"Choose Starter Plan"})]})}),h.jsx("div",{className:"col-lg-4 col-md-6 mb-4",children:h.jsxs("div",{className:"pricing-card popular",children:[h.jsx("div",{className:"popular-badge",children:"POPULAR"}),h.jsx("h3",{className:"pcard-title",children:"Pro"}),h.jsx("p",{className:"card-subtitle",children:"Best value for serious fitness enthusiasts."}),h.jsxs("div",{className:"price",children:["₹2999",h.jsx("span",{children:"/month"})]}),h.jsx("p",{className:"billing-cycle",children:"Save 35% with annual billing"}),h.jsxs("ul",{className:"features-list",children:[h.jsxs("li",{children:[h.jsx("i",{className:"fas fa-check"}),"Custom workout plan (5x/week)"]}),h.jsxs("li",{children:[h.jsx("i",{className:"fas fa-check"}),"Personalized nutrition plan"]}),h.jsxs("li",{children:[h.jsx("i",{className:"fas fa-check"}),"Access to Elev8 mobile app + web"]}),h.jsxs("li",{children:[h.jsx("i",{className:"fas fa-check"}),"2 Live coaching sessions/month"]}),h.jsxs("li",{children:[h.jsx("i",{className:"fas fa-check"}),"Advanced progress analytics"]}),h.jsxs("li",{className:"inactive",children:[h.jsx("i",{className:"fas fa-times"}),"Priority support"]})]}),h.jsx("button",{className:"pcard-btn",children:"Choose Pro Plan"})]})}),h.jsx("div",{className:"col-lg-4 col-md-6 mb-4",children:h.jsxs("div",{className:"pricing-card",children:[h.jsx("h3",{className:"pcard-title",children:"Elite"}),h.jsx("p",{className:"card-subtitle",children:"Ultimate transformation with one-on-one coaching."}),h.jsxs("div",{className:"price",children:["₹5999",h.jsx("span",{children:"/month"})]}),h.jsx("p",{className:"billing-cycle",children:"Save 40% with annual billing"}),h.jsxs("ul",{className:"features-list",children:[h.jsxs("li",{children:[h.jsx("i",{className:"fas fa-check"}),"Fully customized workout plan"]}),h.jsxs("li",{children:[h.jsx("i",{className:"fas fa-check"}),"Personalized nutrition & supplement plan"]}),h.jsxs("li",{children:[h.jsx("i",{className:"fas fa-check"}),"Full app access + premium content"]}),h.jsxs("li",{children:[h.jsx("i",{className:"fas fa-check"}),"Weekly live coaching sessions"]}),h.jsxs("li",{children:[h.jsx("i",{className:"fas fa-check"}),"Advanced analytics & tracking"]}),h.jsxs("li",{children:[h.jsx("i",{className:"fas fa-check"}),"24/7 Priority support"]})]}),h.jsx("button",{className:"pcard-btn secondary",children:"Choose Elite Plan"})]})})]}),h.jsx("div",{className:"text-center mt-5",children:h.jsx("p",{style:{color:"#ccc"},children:"All plans include a 14-day money-back guarantee."})})]})}),h.jsx(Zr,{}),h.jsx("style",{children:`
        .pricing-section{padding:80px 0;background-color:var(--light-color)}
        .section-title{color:white;font-weight:700;margin-bottom:15px;text-align:center;font-size:2.5rem}
        .section-subtitle{color:#ccc;max-width:700px;margin:0 auto 50px;text-align:center;font-size:1.1rem}
        .pricing-card{background:white;border-radius:12px;box-shadow:0 4px 12px rgba(255,255,255,0.15);padding:30px;transition:transform 0.3s,box-shadow 0.3s;height:100%;border-top:4px solid var(--secondary-color);overflow:hidden;position:relative}
        .pricing-card:hover{transform:translateY(-8px);box-shadow:0 12px 20px rgba(0,0,0,0.15)}
        .pricing-card.popular{border-top:6px solid var(--secondary-color)}
        .popular-badge{position:absolute;top:15px;right:-30px;background:linear-gradient(135deg,var(--secondary-color),#5B86E5);color:white;padding:8px 35px;font-size:0.8rem;font-weight:600;transform:rotate(45deg)}
        .pcard-title{color:var(--primary-color);font-weight:700;font-size:1.8rem;margin-bottom:10px;margin-top:10px}
        .card-subtitle{color:#666;margin-bottom:20px;min-height:60px}
        .price{font-size:3.5rem;font-weight:700;color:var(--primary-color);margin-bottom:5px;line-height:1}
        .price span{font-size:1.2rem;color:#666;font-weight:400}
        .billing-cycle{color:#888;font-size:0.9rem;margin-bottom:25px}
        .features-list{list-style:none;padding:0;margin:20px 0 30px 0}
        .features-list li{padding:12px 0;border-bottom:1px solid #eee;display:flex;align-items:center}
        .features-list li:last-child{border-bottom:none}
        .features-list i{color:var(--secondary-color);margin-right:12px;font-size:1.1rem;min-width:20px}
        .features-list .inactive{color:#aaa}
        .features-list .inactive i{color:#aaa}
        .pcard-btn{display:block;width:100%;padding:15px;text-align:center;background:linear-gradient(135deg,var(--primary-color),var(--secondary-color));color:white;border:none;border-radius:8px;font-weight:600;font-size:1.1rem;transition:all 0.3s;cursor:pointer}
        .pcard-btn:hover{transform:translateY(-2px);box-shadow:0 4px 8px rgba(108,99,255,0.3)}
      `})]})}const OP=[{id:1,name:"Premium Whey Protein",price:2499,oldPrice:3499,img:"/store/protein.png",desc:"High-quality protein powder for muscle recovery and growth. 100% natural ingredients."},{id:2,name:"Premium Yoga Mat",price:1599,oldPrice:2199,img:"/store/yogamat.png",desc:"Eco-friendly, non-slip yoga mat with carrying strap. Perfect for all yoga styles."},{id:3,name:"Complete Nutrition Guide",price:899,oldPrice:null,img:"/store/nutrition.png",desc:"300+ pages of meal plans, recipes, and nutritional science. Digital + Physical copy."},{id:4,name:"Performance Workout Set",price:3299,oldPrice:null,img:"https://images.unsplash.com/photo-1552902865-b72c031ac5ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",desc:"Breathable, moisture-wicking workout clothes. Complete set for maximum comfort."},{id:5,name:"Elev8 Sipper",price:999,oldPrice:1499,img:"/store/sipper.png",desc:"A premium sipper for your protein shakes and daily hydration needs."},{id:6,name:"Elev8 Cup",price:999,oldPrice:1499,img:"/store/cup.jpg",desc:"A premium cup for your protein shakes and daily hydration needs."}];function VP(){const[n,e]=B.useState([]),[t,i]=B.useState({1:1,2:1,3:1,4:1,5:1,6:1});function o(E){const I=t[E.id];e(P=>P.find(O=>O.id===E.id)?P.map(O=>O.id===E.id?{...O,qty:O.qty+I}:O):[...P,{...E,qty:I}]),p(`${E.name} added to cart!`)}function l(E){e(I=>I.filter(P=>P.id!==E))}function u(){confirm("Clear cart?")&&e([])}function p(E){const I=document.createElement("div");I.className="position-fixed top-0 end-0 p-3",I.style.zIndex="1060",I.innerHTML=`<div class="alert alert-success alert-dismissible fade show">${E}<button type="button" class="btn-close" data-bs-dismiss="alert"></button></div>`,document.body.appendChild(I),setTimeout(()=>I.remove(),3e3)}function m(E,I){i(P=>({...P,[E]:Math.max(1,Math.min(10,(P[E]||1)+I))}))}const v=n.reduce((E,I)=>E+I.price*I.qty,0),w=n.reduce((E,I)=>E+I.qty,0);return h.jsxs(h.Fragment,{children:[h.jsx(Xr,{}),h.jsx("section",{className:"store-hero",children:h.jsxs("div",{className:"container",children:[h.jsx("h1",{children:"Elev8 Store"}),h.jsx("p",{children:"Premium health products, supplements, and equipment to support your wellness journey"})]})}),h.jsx("div",{className:"container my-5",children:h.jsxs("div",{className:"main-content-wrapper",children:[h.jsx("div",{className:"products-section",children:h.jsx("div",{className:"products-grid",children:OP.map(E=>h.jsxs("div",{className:"product-card",children:[h.jsx("img",{src:E.img,className:"product-img",alt:E.name}),h.jsxs("div",{className:"card-body",children:[h.jsx("h5",{className:"card-title",children:E.name}),h.jsx("p",{className:"card-text",children:E.desc}),h.jsxs("div",{className:"d-flex justify-content-between align-items-center mb-3",children:[h.jsxs("div",{children:[h.jsxs("span",{className:"product-price",children:["₹",E.price.toLocaleString()]}),E.oldPrice&&h.jsxs("span",{className:"product-old-price ms-2",children:["₹",E.oldPrice.toLocaleString()]})]}),h.jsxs("div",{className:"quantity-control",children:[h.jsx("button",{className:"quantity-btn",onClick:()=>m(E.id,-1),children:"-"}),h.jsx("input",{type:"text",className:"quantity-input",value:t[E.id],readOnly:!0}),h.jsx("button",{className:"quantity-btn",onClick:()=>m(E.id,1),children:"+"})]})]}),h.jsxs("button",{className:"cart-btn",onClick:()=>o(E),children:[h.jsx("i",{className:"fas fa-cart-plus me-2"}),"Add to Cart"]})]})]},E.id))})}),h.jsx("div",{className:"cart-section",children:h.jsxs("div",{className:"cart-sidebar",children:[h.jsxs("h4",{className:"mb-4",children:[h.jsx("i",{className:"fas fa-shopping-cart me-2"}),"Your Cart ",w>0&&h.jsx("span",{className:"badge bg-danger",children:w})]}),h.jsx("div",{id:"cartItems",children:n.length===0?h.jsx("p",{className:"text-muted text-center",children:"Your cart is empty"}):n.map((E,I)=>h.jsx("div",{className:"cart-item",children:h.jsxs("div",{className:"d-flex justify-content-between align-items-start",children:[h.jsxs("div",{style:{flex:1},children:[h.jsx("h6",{className:"mb-1",children:E.name}),h.jsxs("div",{className:"d-flex justify-content-between align-items-center",children:[h.jsxs("small",{children:["₹",E.price," × ",E.qty]}),h.jsxs("span",{className:"fw-bold",children:["₹",E.price*E.qty]})]})]}),h.jsx("button",{className:"btn btn-sm btn-outline-danger ms-2",onClick:()=>l(E.id),children:h.jsx("i",{className:"fas fa-times"})})]})},E.id))}),h.jsx("hr",{}),h.jsxs("div",{className:"d-flex justify-content-between mb-3",children:[h.jsx("span",{children:"Subtotal:"}),h.jsxs("span",{children:["₹",v]})]}),h.jsxs("div",{className:"d-flex justify-content-between mb-3",children:[h.jsx("span",{children:"Shipping:"}),h.jsx("span",{children:"₹99"})]}),h.jsxs("div",{className:"d-flex justify-content-between mb-4",children:[h.jsx("span",{className:"cart-total",children:"Total:"}),h.jsxs("span",{className:"cart-total",children:["₹",v+99]})]}),h.jsxs("button",{className:"checkout-btn mb-3",onClick:()=>n.length?alert("Proceeding to checkout..."):alert("Cart is empty!"),children:[h.jsx("i",{className:"fas fa-lock me-2"}),"Proceed to Checkout"]}),h.jsxs("button",{className:"btn btn-outline-primary w-100",onClick:u,children:[h.jsx("i",{className:"fas fa-trash me-2"}),"Clear Cart"]})]})})]})}),h.jsx(Zr,{})]})}function MP(){const[n,e]=B.useState({});function t(u){e(p=>({...p,[u]:!p[u]}))}function i(u,p){return Array.from({length:p},(m,v)=>n[`${u}-${v}`]).every(Boolean)}const o=({id:u,label:p})=>h.jsxs("div",{className:"meal-item",children:[h.jsx("input",{type:"checkbox",id:u,className:"meal-checkbox",checked:!!n[u],onChange:()=>t(u)}),h.jsx("label",{htmlFor:u,className:"checkbox-label",children:p})]}),l=({prefix:u,count:p,children:m})=>h.jsx("div",{className:`plan-box${i(u,p)?" completed":""}`,children:m});return h.jsxs(h.Fragment,{children:[h.jsx(Xr,{}),h.jsx("div",{className:"circadian-hero-diet",children:h.jsxs("div",{className:"container",children:[h.jsx("h1",{className:"display-4 fw-bold",children:"Diet Plan"}),h.jsx("p",{className:"lead",children:"Health is a daily practice not a 30 day diet"}),h.jsx("p",{children:"Science and mindfulness complement each other in helping people eat well."})]})}),h.jsxs("div",{className:"container",children:[h.jsxs("div",{className:"diet-section",children:[h.jsx("h2",{className:"diet-title",children:"Weight Loss Plans"}),h.jsxs("div",{className:"row",children:[h.jsxs("div",{className:"col-md-4",children:[h.jsx("h4",{children:"Vegetarian Plan"}),h.jsx("img",{src:"https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=200&fit=crop",className:"diet-image",alt:"Vegetarian"}),h.jsx("p",{children:"Plant-based proteins and fiber-rich foods."}),h.jsxs(l,{prefix:"wl-veg",count:4,children:[h.jsx("h5",{children:"Daily Meal Plan:"}),h.jsx(o,{id:"wl-veg-0",label:"Breakfast: Oats with fruits"}),h.jsx("div",{className:"alternative",children:"Alternative: Poha with vegetables"}),h.jsx(o,{id:"wl-veg-1",label:"Lunch: Brown rice with dal"}),h.jsx("div",{className:"alternative",children:"Alternative: Quinoa salad"}),h.jsx(o,{id:"wl-veg-2",label:"Evening: Green tea"}),h.jsx("div",{className:"alternative",children:"Alternative: Herbal tea"}),h.jsx(o,{id:"wl-veg-3",label:"Dinner: Vegetable soup"}),h.jsx("div",{className:"alternative",children:"Alternative: Grilled vegetables"})]}),h.jsxs("p",{children:[h.jsx("strong",{children:"Benefits:"})," High in fiber, low in calories, rich in vitamins."]})]}),h.jsxs("div",{className:"col-md-4",children:[h.jsx("h4",{children:"Non-Vegetarian Plan"}),h.jsx("img",{src:"https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=200&fit=crop",className:"diet-image",alt:"Non-Veg"}),h.jsx("p",{children:"Lean meats and fish for protein while reducing carbs."}),h.jsxs(l,{prefix:"wl-nv",count:4,children:[h.jsx("h5",{children:"Daily Meal Plan:"}),h.jsx(o,{id:"wl-nv-0",label:"Breakfast: Boiled eggs (2)"}),h.jsx("div",{className:"alternative",children:"Alternative: Scrambled eggs"}),h.jsx(o,{id:"wl-nv-1",label:"Lunch: Grilled chicken salad"}),h.jsx("div",{className:"alternative",children:"Alternative: Chicken soup"}),h.jsx(o,{id:"wl-nv-2",label:"Evening: Protein shake"}),h.jsx("div",{className:"alternative",children:"Alternative: Greek yogurt"}),h.jsx(o,{id:"wl-nv-3",label:"Dinner: Fish with vegetables"}),h.jsx("div",{className:"alternative",children:"Alternative: Chicken breast"})]}),h.jsxs("p",{children:[h.jsx("strong",{children:"Benefits:"})," High protein, maintains muscle mass."]})]}),h.jsxs("div",{className:"col-md-4",children:[h.jsx("h4",{children:"Vegan Plan"}),h.jsx("img",{src:"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=200&fit=crop",className:"diet-image",alt:"Vegan"}),h.jsx("p",{children:"Completely plant-based weight loss plan."}),h.jsxs(l,{prefix:"wl-vn",count:4,children:[h.jsx("h5",{children:"Daily Meal Plan:"}),h.jsx(o,{id:"wl-vn-0",label:"Breakfast: Smoothie bowl"}),h.jsx("div",{className:"alternative",children:"Alternative: Chia seed pudding"}),h.jsx(o,{id:"wl-vn-1",label:"Lunch: Tofu stir-fry"}),h.jsx("div",{className:"alternative",children:"Alternative: Lentil curry"}),h.jsx(o,{id:"wl-vn-2",label:"Evening: Mixed nuts"}),h.jsx("div",{className:"alternative",children:"Alternative: Apple slices"}),h.jsx(o,{id:"wl-vn-3",label:"Dinner: Lentil soup"}),h.jsx("div",{className:"alternative",children:"Alternative: Vegetable stew"})]}),h.jsxs("p",{children:[h.jsx("strong",{children:"Benefits:"})," Cholesterol-free, high in antioxidants."]})]})]})]}),h.jsxs("div",{className:"diet-section",children:[h.jsx("h2",{className:"diet-title",children:"Muscle Gain Plans"}),h.jsxs("div",{className:"row",children:[h.jsxs("div",{className:"col-md-4",children:[h.jsx("h4",{children:"Vegetarian Plan"}),h.jsx("img",{src:"https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=200&fit=crop",className:"diet-image",alt:"Veg"}),h.jsxs(l,{prefix:"mg-veg",count:4,children:[h.jsx("h5",{children:"Daily Meal Plan:"}),h.jsx(o,{id:"mg-veg-0",label:"Breakfast: Paneer paratha"}),h.jsx(o,{id:"mg-veg-1",label:"Lunch: Rajma chawal"}),h.jsx(o,{id:"mg-veg-2",label:"Post-workout: Protein shake"}),h.jsx(o,{id:"mg-veg-3",label:"Dinner: Chickpea curry"})]})]}),h.jsxs("div",{className:"col-md-4",children:[h.jsx("h4",{children:"Non-Vegetarian Plan"}),h.jsx("img",{src:"https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=200&fit=crop",className:"diet-image",alt:"NonVeg"}),h.jsxs(l,{prefix:"mg-nv",count:4,children:[h.jsx("h5",{children:"Daily Meal Plan:"}),h.jsx(o,{id:"mg-nv-0",label:"Breakfast: 3-egg omelette"}),h.jsx(o,{id:"mg-nv-1",label:"Lunch: Chicken breast with rice"}),h.jsx(o,{id:"mg-nv-2",label:"Post-workout: Whey protein"}),h.jsx(o,{id:"mg-nv-3",label:"Dinner: Salmon with quinoa"})]})]}),h.jsxs("div",{className:"col-md-4",children:[h.jsx("h4",{children:"Vegan Plan"}),h.jsx("img",{src:"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=200&fit=crop",className:"diet-image",alt:"Vegan"}),h.jsxs(l,{prefix:"mg-vn",count:4,children:[h.jsx("h5",{children:"Daily Meal Plan:"}),h.jsx(o,{id:"mg-vn-0",label:"Breakfast: Protein pancakes"}),h.jsx(o,{id:"mg-vn-1",label:"Lunch: Lentil patties"}),h.jsx(o,{id:"mg-vn-2",label:"Post-workout: Pea protein"}),h.jsx(o,{id:"mg-vn-3",label:"Dinner: Tempeh stir-fry"})]})]})]})]}),h.jsxs("div",{className:"diet-section",children:[h.jsx("h2",{className:"diet-title",children:"Important Tips"}),h.jsxs("div",{className:"row",children:[h.jsxs("div",{className:"col-md-6",children:[h.jsx("h5",{children:"General Guidelines"}),h.jsxs("ul",{children:[h.jsx("li",{children:"Drink at least 3-4 liters of water every day"}),h.jsx("li",{children:"Eat every 3-4 hours to maintain metabolism"}),h.jsx("li",{children:"Combine diet with regular exercise"}),h.jsx("li",{children:"Get 7-8 hours of sleep daily"}),h.jsx("li",{children:"Track your calories using mobile apps"})]})]}),h.jsxs("div",{className:"col-md-6",children:[h.jsx("h5",{children:"Do's and Don'ts"}),h.jsxs("ul",{children:[h.jsxs("li",{children:[h.jsx("strong",{children:"Do:"})," Eat plenty of vegetables"]}),h.jsxs("li",{children:[h.jsx("strong",{children:"Do:"})," Include protein in every meal"]}),h.jsxs("li",{children:[h.jsx("strong",{children:"Don't:"})," Skip breakfast"]}),h.jsxs("li",{children:[h.jsx("strong",{children:"Don't:"})," Drink sugary beverages"]}),h.jsxs("li",{children:[h.jsx("strong",{children:"Do:"})," Consult a doctor before starting"]})]})]})]})]})]}),h.jsx(Zr,{}),h.jsx("style",{children:`
        .circadian-hero-diet{background:linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('/DIET PLAN/veggies.jpg');background-size:cover;background-position:center;color:white;padding:80px 0;margin-bottom:50px;display:flex;align-items:center;text-align:center;height:500px}
        .diet-section{background-color:#f8f9fa;padding:30px;border-radius:10px;margin-bottom:30px;box-shadow:0 2px 10px rgba(0,0,0,0.1)}
        .diet-title{color:#36D1DC;border-bottom:2px solid #36D1DC;padding-bottom:10px;margin-bottom:20px}
        .plan-box{background:white;padding:20px;border-radius:8px;margin:15px 0;border-left:4px solid #36D1DC;box-shadow:0 2px 40px rgba(255,0,0,0.2)}
        .plan-box.completed{box-shadow:0 2px 60px rgba(0,255,0,0.5)}
        .meal-item{margin:10px 0;padding:8px;border-bottom:1px solid #eee}
        .checkbox-label{margin-left:10px}
        .diet-image{width:100%;height:200px;object-fit:cover;border-radius:8px;margin-bottom:15px}
        .alternative{font-size:14px;color:#666;margin-left:25px;margin-top:5px}
      `})]})}function FP(){return h.jsxs(h.Fragment,{children:[h.jsx(Xr,{}),h.jsx("div",{className:"yoga-hero",children:h.jsxs("div",{className:"container",children:[h.jsx("h1",{className:"display-4 fw-bold",children:"Yoga & Meditation"}),h.jsx("p",{className:"lead",children:"Master Your Body's Internal happiness for Optimal Health"}),h.jsx("p",{children:'"The grandest but most difficult goal to achieve in life is to still the mind."'})]})}),h.jsxs("div",{className:"container",children:[h.jsxs("div",{className:"row",children:[h.jsx("div",{className:"col-md-12",children:h.jsx("h2",{className:"pose-title-a",children:"Popular Yoga Poses"})}),h.jsx("div",{className:"col-md-4",children:h.jsxs("div",{className:"yoga-card",children:[h.jsx("img",{src:"https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=250&fit=crop",className:"card-image",alt:"Mountain Pose"}),h.jsx("h4",{children:"1. Mountain Pose"}),h.jsx("p",{children:"Stand straight, feet together, arms at sides. Good for posture and balance."}),h.jsxs("p",{children:[h.jsx("strong",{children:"Hold:"})," 30 seconds"]}),h.jsxs("p",{children:[h.jsx("strong",{children:"Level:"})," Beginner"]})]})}),h.jsx("div",{className:"col-md-4",children:h.jsxs("div",{className:"yoga-card",children:[h.jsx("img",{src:"/YOGA AND MEDITATION/treepose.jpeg",className:"card-image",alt:"Tree Pose"}),h.jsx("h4",{children:"2. Tree Pose"}),h.jsx("p",{children:"Stand on one leg, place other foot on inner thigh. Improves balance."}),h.jsxs("p",{children:[h.jsx("strong",{children:"Hold:"})," 30 seconds each side"]}),h.jsxs("p",{children:[h.jsx("strong",{children:"Level:"})," Beginner"]})]})}),h.jsx("div",{className:"col-md-4",children:h.jsxs("div",{className:"yoga-card",children:[h.jsx("img",{src:"https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=250&fit=crop",className:"card-image",alt:"Downward Dog"}),h.jsx("h4",{children:"3. Downward Dog"}),h.jsx("p",{children:"Hands and feet on floor, hips up. Stretches whole body."}),h.jsxs("p",{children:[h.jsx("strong",{children:"Hold:"})," 1 minute"]}),h.jsxs("p",{children:[h.jsx("strong",{children:"Level:"})," Beginner"]})]})})]}),h.jsxs("div",{className:"meditation-box",children:[h.jsx("h2",{className:"pose-title",children:"Meditation Techniques"}),h.jsxs("div",{className:"row",children:[h.jsx("div",{className:"col-md-4",children:h.jsxs("div",{className:"tip-box",children:[h.jsxs("h5",{children:[h.jsx("i",{className:"fas fa-wind"})," Breathing Meditation"]}),h.jsx("p",{children:"Sit comfortably. Close eyes. Focus on your breath. Count breaths 1 to 10."}),h.jsxs("p",{children:[h.jsx("strong",{children:"Time:"})," 5-10 minutes"]})]})}),h.jsx("div",{className:"col-md-4",children:h.jsxs("div",{className:"tip-box",children:[h.jsxs("h5",{children:[h.jsx("i",{className:"fas fa-brain"})," Mindfulness Meditation"]}),h.jsx("p",{children:"Notice thoughts without judgment. Watch them like clouds passing by."}),h.jsxs("p",{children:[h.jsx("strong",{children:"Time:"})," 10-15 minutes"]})]})}),h.jsx("div",{className:"col-md-4",children:h.jsxs("div",{className:"tip-box",children:[h.jsxs("h5",{children:[h.jsx("i",{className:"fas fa-heart"})," Loving-Kindness"]}),h.jsx("p",{children:"Send positive thoughts to yourself and others. Repeat kind phrases."}),h.jsxs("p",{children:[h.jsx("strong",{children:"Time:"})," 10 minutes"]})]})})]})]}),h.jsxs("div",{className:"row",children:[h.jsx("div",{className:"col-md-12",children:h.jsx("h2",{className:"pose-title-a",children:"Benefits of Yoga & Meditation"})}),[["fa-brain","Reduces Stress","Lowers stress hormones"],["fa-bed","Better Sleep","Improves sleep quality"],["fa-heartbeat","Heart Health","Lowers blood pressure"],["fa-smile","Happiness","Increases happiness"]].map(([n,e,t])=>h.jsx("div",{className:"col-md-3 col-6",children:h.jsxs("div",{className:"benefit-item",children:[h.jsx("i",{className:`fas ${n} fa-2x mb-2`,style:{color:"#36D1DC"}}),h.jsx("h6",{children:e}),h.jsx("p",{className:"small",children:t})]})},e))]}),h.jsxs("div",{className:"yoga-card",children:[h.jsx("h2",{className:"pose-title",children:"Weekly Yoga Schedule"}),h.jsx("div",{className:"row",children:[["Mon","Sun Salutations","20 min"],["Tue","Balance Poses","25 min"],["Wed","Meditation Day","15 min"],["Thu","Strength Poses","30 min"],["Fri","Flexibility","25 min"],["Sat","Rest & Recovery","10 min"]].map(([n,e,t])=>h.jsx("div",{className:"col-md-2 col-4",children:h.jsxs("div",{className:"week-day",children:[h.jsx("h5",{children:n}),h.jsx("p",{children:e}),h.jsx("p",{children:h.jsx("small",{children:t})})]})},n))})]}),h.jsxs("div",{className:"yoga-card text-center",children:[h.jsx("h3",{children:'"Yoga is the journey of the self, through the self, to the self."'}),h.jsx("p",{className:"text-muted",children:"- The Bhagavad Gita"})]})]}),h.jsx(Zr,{}),h.jsx("style",{children:`
        .yoga-hero{background:linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.6)),url('/YOGA AND MEDITATION/bg.png');background-size:cover;background-position:center;color:white;padding:80px 0;margin-bottom:50px;display:flex;align-items:center;text-align:center;height:500px}
        .yoga-card{background:rgb(226,223,223);padding:25px;margin:20px 0;border-radius:15px;box-shadow:0 8px 12px rgba(193,196,196,0.938)}
        .yoga-card:hover{box-shadow:0px 0px 20px 5px rgba(54,209,220,0.5)}
        .card-image{width:100%;height:250px;object-fit:cover;border-radius:10px;margin-bottom:15px}
        .pose-title{color:black;border-left:4px solid #36D1DC;padding-left:15px;margin-bottom:15px}
        .pose-title-a{color:#36D1DC}
        .benefit-item{background:rgb(226,223,223);padding:15px;border-radius:8px;margin:10px 0;text-align:center}
        .meditation-box{background:linear-gradient(135deg,#d4d8db,#e3f2fd);padding:25px;border-radius:15px;margin:20px 0}
        .tip-box{background:rgb(226,223,223);padding:20px;border-radius:10px;margin:10px;border-left:4px solid #36D1DC}
        .week-day{background:linear-gradient(135deg,var(--primary-color),var(--secondary-color));color:rgb(226,223,223);padding:10px;border-radius:5px;text-align:center;margin:5px}
      `})]})}function UP(){const[n,e]=B.useState({}),t=l=>e(u=>({...u,[l]:!u[l]})),i=({img:l,name:u,muscle:p,sets:m,equipment:v,steps:w})=>h.jsx("div",{className:"col-md-4 mb-4",children:h.jsxs("div",{className:"exercise-card",children:[h.jsx("img",{src:l,className:"exercise-image",alt:u}),h.jsx("h4",{className:"exercise-name",children:u}),h.jsxs("div",{className:"exercise-detail",children:[h.jsx("strong",{children:"Muscle:"})," ",p]}),h.jsxs("div",{className:"exercise-detail",children:[h.jsx("strong",{children:"Sets:"})," ",m]}),h.jsxs("div",{className:"exercise-detail",children:[h.jsx("strong",{children:"Equipment:"})," ",v]}),h.jsxs("div",{className:"instructions-box",children:[h.jsx("strong",{children:"Instructions:"}),h.jsx("br",{}),w.map((E,I)=>h.jsxs("span",{children:[I+1,". ",E,h.jsx("br",{})]},I))]})]})}),o=({day:l,label:u})=>h.jsx("div",{className:"day-bar",children:h.jsx("button",{className:`day-btn${n[l]?" completed":""}`,onClick:()=>t(l),children:u})});return h.jsxs(h.Fragment,{children:[h.jsx(Xr,{}),h.jsx("div",{className:"weight-hero",children:h.jsxs("div",{className:"container",children:[h.jsx("h1",{className:"display-4 fw-bold",children:"Weight Training"}),h.jsx("p",{className:"lead",children:"Master Your Body's Strength for Optimal Health"}),h.jsx("p",{children:"Train consistently, have more energy, and improve your overall wellbeing"})]})}),h.jsxs("div",{className:"container",children:[h.jsxs("div",{className:"muscle-group",children:[h.jsx("h2",{className:"muscle-title",children:"Chest Exercises"}),h.jsxs("div",{className:"row",children:[h.jsx(i,{img:"/WEIGHT/bench press.jpeg",name:"Bench Press",muscle:"Pectoralis Major",sets:"3 sets of 8-12 reps",equipment:"Barbell, Bench",steps:["Lie on bench with eyes under barbell","Grip bar slightly wider than shoulder width","Lower bar to mid-chest","Press bar back up to starting position"]}),h.jsx(i,{img:"/WEIGHT/push up.jpg",name:"Push Ups",muscle:"Chest & Triceps",sets:"3 sets of 15-20 reps",equipment:"Bodyweight only",steps:["Place hands slightly wider than shoulders","Keep body in straight line from head to heels","Lower chest to floor","Push back up to starting position"]}),h.jsx(i,{img:"/WEIGHT/chest fly.jpg",name:"Chest Fly",muscle:"Pectoralis Major",sets:"3 sets of 10-15 reps",equipment:"Dumbbells, Machine",steps:["Lie on bench with dumbbells above chest","Slightly bend elbows","Lower arms out to sides in arc motion","Bring weights back together over chest"]})]}),h.jsx(o,{day:"monday",label:"Monday"})]}),h.jsxs("div",{className:"muscle-group",children:[h.jsx("h2",{className:"muscle-title",children:"Back Exercises"}),h.jsxs("div",{className:"row",children:[h.jsx(i,{img:"/WEIGHT/pull up.jpg",name:"Pull Ups",muscle:"Latissimus Dorsi",sets:"3 sets of 5-10 reps",equipment:"Pull-up bar",steps:["Grip bar with palms facing away","Hang with arms fully extended","Pull body up until chin clears bar","Lower with control"]}),h.jsx(i,{img:"/WEIGHT/lat pulldown.jpg",name:"Lat Pulldown",muscle:"Latissimus Dorsi",sets:"3 sets of 10-12 reps",equipment:"Cable machine",steps:["Sit at machine with knees under pads","Grip bar wide","Pull bar down to upper chest","Slowly return to starting position"]}),h.jsx(i,{img:"/WEIGHT/bent row.jpeg",name:"Bent Over Row",muscle:"Rhomboids, Lats",sets:"3 sets of 8-12 reps",equipment:"Barbell, Dumbbells",steps:["Bend knees slightly, hinge at hips","Keep back straight, almost parallel to floor","Pull barbell to lower chest","Lower with control"]})]}),h.jsx(o,{day:"tuesday",label:"Tuesday"})]}),h.jsxs("div",{className:"muscle-group",children:[h.jsx("h2",{className:"muscle-title",children:"Shoulder Exercises"}),h.jsxs("div",{className:"row",children:[h.jsx(i,{img:"/WEIGHT/shoulder press.jpg",name:"Shoulder Press",muscle:"Deltoids",sets:"3 sets of 8-12 reps",equipment:"Dumbbells, Barbell",steps:["Sit or stand with dumbbells at shoulder height","Press weights overhead until arms extended","Lower back to starting position","Don't lock elbows at top"]}),h.jsx(i,{img:"/WEIGHT/lateral raise.jpg",name:"Lateral Raise",muscle:"Lateral Deltoids",sets:"3 sets of 12-15 reps",equipment:"Dumbbells",steps:["Stand with dumbbells at sides","Raise arms out to sides until shoulder height","Lower with control","Slight bend in elbows, don't use momentum"]}),h.jsx(i,{img:"/WEIGHT/front raise.png",name:"Front Raise",muscle:"Anterior Deltoids",sets:"3 sets of 12-15 reps",equipment:"Dumbbells, Plate",steps:["Stand with dumbbells in front of thighs","Raise one arm straight forward to shoulder height","Alternate arms or raise together","Control movement, do not swing"]})]}),h.jsx(o,{day:"wednesday",label:"Wednesday"})]}),h.jsxs("div",{className:"muscle-group",children:[h.jsx("h2",{className:"muscle-title",children:"Arm Exercises"}),h.jsxs("div",{className:"row",children:[h.jsx(i,{img:"/WEIGHT/bicep curl.jpg",name:"Bicep Curls",muscle:"Biceps",sets:"3 sets of 10-15 reps",equipment:"Dumbbells, Barbell",steps:["Stand with dumbbells at sides","Curl weights up towards shoulders","Squeeze biceps at top","Lower with control"]}),h.jsx(i,{img:"/WEIGHT/tricep.jpg",name:"Tricep Pushdown",muscle:"Triceps",sets:"3 sets of 12-15 reps",equipment:"Cable machine",steps:["Stand at cable machine with rope attachment","Keep elbows at sides","Push rope down until arms extended","Return to starting position"]}),h.jsx(i,{img:"/WEIGHT/hammer curl.jpg",name:"Hammer Curls",muscle:"Brachialis",sets:"3 sets of 10-12 reps",equipment:"Dumbbells",steps:["Hold dumbbells with palms facing each other","Curl weights up keeping palms facing in","Squeeze at top","Lower with control"]})]}),h.jsx(o,{day:"thursday",label:"Thursday"})]}),h.jsxs("div",{className:"muscle-group",children:[h.jsx("h2",{className:"muscle-title",children:"Leg Exercises"}),h.jsxs("div",{className:"row",children:[h.jsx(i,{img:"/WEIGHT/squat.jpg",name:"Squats",muscle:"Quadriceps, Glutes",sets:"3 sets of 8-12 reps",equipment:"Barbell, Bodyweight",steps:["Stand with feet shoulder-width apart","Lower hips back and down","Keep chest up, knees track over toes","Push through heels to stand back up"]}),h.jsx(i,{img:"/WEIGHT/leg press.jpg",name:"Leg Press",muscle:"Quadriceps",sets:"3 sets of 10-15 reps",equipment:"Leg press machine",steps:["Sit on machine with feet on platform","Lower weight by bending knees","Push platform away until legs extended","Don't lock knees, control movement"]}),h.jsx(i,{img:"/WEIGHT/lunges.jpg",name:"Lunges",muscle:"Quadriceps, Glutes",sets:"3 sets of 10-12 reps per leg",equipment:"Dumbbells, Bodyweight",steps:["Step forward with one leg","Lower hips until both knees bent 90 degrees","Push back to starting position","Alternate legs"]})]}),h.jsx(o,{day:"friday",label:"Friday"})]}),h.jsxs("div",{className:"muscle-group",children:[h.jsx("h2",{className:"muscle-title",children:"Core Exercises"}),h.jsxs("div",{className:"row",children:[h.jsx(i,{img:"/WEIGHT/cabel crunches.webp",name:"Cable Crunch",muscle:"Upper Abdominals, Core",sets:"3 sets of 20 reps",equipment:"Cables",steps:["Kneel in front of the machine and hold rope with both hands","Keep knees slightly bent and hips stationary","Engage core and pull rope down by crunching torso forward","Pause briefly then return"]}),h.jsx(i,{img:"/WEIGHT/crunches.jpg",name:"Crunches",muscle:"Rectus Abdominis",sets:"3 sets of 15-20 reps",equipment:"Bodyweight, Mat",steps:["Lie on back with knees bent","Place hands behind head","Lift shoulders off floor","Try to touch elbow with alternate knee"]}),h.jsx(i,{img:"/WEIGHT/abs roll.jpg",name:"Ab Roller Rollout",muscle:"All Abs, Core",sets:"3 sets of 12-15 reps",equipment:"Bodyweight, Roller",steps:["Start in a kneeling or plank position","Grip the ab roller firmly","Engage your core and slowly roll forward","Roll back using your abs"]})]}),h.jsx(o,{day:"saturday",label:"Saturday"})]}),h.jsxs("div",{className:"muscle-group",children:[h.jsx("h2",{className:"muscle-title",children:"Training Tips"}),h.jsx("div",{className:"row",children:[["Warm Up Properly","Always warm up for 5-10 minutes before lifting weights. This prevents injuries."],["Use Proper Form","Good form is more important than heavy weight. Ask trainer if unsure."],["Rest Between Sets","Rest 1-2 minutes between sets. This helps muscles recover."],["Stay Hydrated","Drink water during workout. Dehydration reduces performance."]].map(([l,u])=>h.jsx("div",{className:"col-md-6",children:h.jsxs("div",{className:"exercise-card",children:[h.jsx("h5",{children:l}),h.jsx("p",{children:u})]})},l))})]})]}),h.jsx(Zr,{}),h.jsx("style",{children:`
        .weight-hero{background:linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('/WEIGHT/bgDUMBLE.jpg');background-size:cover;background-position:center;color:white;padding:80px 0;text-align:center;margin-bottom:50px;display:flex;align-items:center;height:500px}
        .muscle-group{background:white;padding:30px;border-radius:12px;margin-bottom:40px;box-shadow:0 4px 12px rgba(255,255,255,1);border-top:4px solid var(--secondary-color)}
        .muscle-title{color:var(--primary-color);border-bottom:2px solid var(--secondary-color);padding-bottom:10px;margin-bottom:25px}
        .exercise-card{background:white;border-radius:10px;padding:15px;margin:10px 0;box-shadow:0 3px 10px rgba(0,0,0,0.1);transition:all 0.3s;border-left:4px solid var(--secondary-color);height:100%}
        .exercise-card:hover{transform:translateY(-5px);box-shadow:0 8px 20px rgba(54,209,220,0.2)}
        .exercise-image{width:300px;height:200px;object-fit:cover;border-radius:8px;margin-bottom:15px}
        .exercise-name{color:var(--primary-color);font-weight:bold;margin-bottom:10px}
        .exercise-detail{margin:8px 0;padding:5px 0;border-bottom:1px dashed #eee}
        .exercise-detail:last-of-type{border-bottom:none}
        .instructions-box{background:#f8f9fa;padding:15px;border-radius:8px;margin-top:10px;border-left:3px solid var(--secondary-color)}
        .day-bar{display:flex;justify-content:center;margin-top:20px;padding:10px;background:#f8f9fa;border-radius:8px}
        .day-btn{padding:10px 20px;margin:0 5px;border:none;border-radius:5px;background-color:#ff6b6b;color:white;cursor:pointer;transition:background-color 0.3s}
        .day-btn.completed{background-color:#51cf66}
      `})]})}function BP(){return h.jsxs(h.Fragment,{children:[h.jsx(Xr,{}),h.jsx("div",{className:"calisthenics-hero",children:h.jsxs("div",{className:"container",children:[h.jsx("h1",{className:"display-4 fw-bold",children:"Calisthenics"}),h.jsx("p",{className:"lead",children:"Transform Your Body Anywhere with Pure, Functional Movement."})]})}),h.jsxs("div",{className:"container my-5",children:[h.jsxs("section",{className:"schedule-section mb-5",children:[h.jsx("h3",{children:"Why Calisthenics?"}),h.jsx("p",{children:"Calisthenics is a form of exercise that uses your own body weight instead of equipment or machines. It includes movements like push-ups, pull-ups, dips, squats, lunges, planks, and advanced skills such as handstands, muscle-ups, and levers."}),h.jsxs("ul",{children:[h.jsxs("li",{children:[h.jsx("strong",{children:"Builds Functional Strength"})," — You train natural movement patterns which improves real-world strength."]}),h.jsxs("li",{children:[h.jsx("strong",{children:"No Equipment Needed"})," — You can practise anywhere: home, park, playground, or gym."]}),h.jsxs("li",{children:[h.jsx("strong",{children:"Improves Mobility & Flexibility"})," — Many exercises require full-range control."]}),h.jsxs("li",{children:[h.jsx("strong",{children:"Boosts Coordination & Body Control"})," — Skills like handstands develop balance and stability."]}),h.jsxs("li",{children:[h.jsx("strong",{children:"Scalable for All Levels"})," — Beginners can start with easy variations, advanced athletes can progress endlessly."]}),h.jsxs("li",{children:[h.jsx("strong",{children:"Great for Fat Loss & Lean Muscle"})," — High-rep body-weight training burns calories and builds muscle."]}),h.jsxs("li",{children:[h.jsx("strong",{children:"Fun & Skill-Based"})," — Unlike repetitive gym routines, calisthenics feels like learning new skills."]})]})]}),h.jsxs("section",{className:"mb-5",children:[h.jsx("h2",{className:"train-heading mb-4",children:"Training Programs"}),h.jsx("div",{className:"row",children:[{title:"Foundation Builder",level:"Beginner",desc:"Learn the fundamental movements and build a solid foundation.",items:["Push-up variations","Pull-up basics","Core strengthening","Squat progressions"]},{title:"Skill Development",level:"Intermediate",desc:"Master intermediate skills and progress toward advanced movements.",items:["Muscle-up training","Handstand progressions","L-sit mastery","Front lever basics"]},{title:"Advanced Mastery",level:"Advanced",desc:"Conquer advanced calisthenics skills and achieve elite body control.",items:["Planche training","Human flag","One-arm pull-ups","Handstand push-ups"]}].map(n=>h.jsx("div",{className:"col-md-4",children:h.jsxs("div",{className:"program-card",children:[h.jsx("div",{className:"program-card-header",children:h.jsx("h4",{className:"mb-0",children:n.title})}),h.jsxs("div",{className:"program-card-body",children:[h.jsx("span",{className:"difficulty-badge",children:n.level}),h.jsx("p",{children:n.desc}),h.jsx("ul",{className:"mb-3",children:n.items.map(e=>h.jsx("li",{children:e},e))})]})]})},n.title))})]}),h.jsxs("section",{className:"exercise-section",children:[h.jsx("h3",{children:"Essential Exercises"}),h.jsx("div",{className:"row",children:[{title:"Pull-ups & Variations",desc:"The foundation of upper body pulling strength. Master different grips and progressions.",muscles:"Back & Arms",level:"Intermediate"},{title:"Push-up Variations",desc:"From basic to advanced, develop chest, shoulder, and triceps strength.",muscles:"Chest & Triceps",level:"Beginner-Friendly"},{title:"Core & Leg Work",desc:"Build a strong foundation with bodyweight squats, lunges, and core exercises.",muscles:"Full Body",level:"All Levels"},{title:"Skill Movements",desc:"Master handstands, muscle-ups, and other advanced bodyweight skills.",muscles:"Skill & Strength",level:"Advanced"}].map(n=>h.jsx("div",{className:"col-md-6",children:h.jsxs("div",{className:"exercise-item",children:[h.jsx("h5",{children:n.title}),h.jsx("p",{children:n.desc}),h.jsxs("div",{className:"exercise-stats",children:[h.jsxs("div",{className:"stat-item",children:[h.jsx("i",{className:"fas fa-dumbbell"}),h.jsx("span",{children:n.muscles})]}),h.jsxs("div",{className:"stat-item",children:[h.jsx("i",{className:"fas fa-signal"}),h.jsx("span",{children:n.level})]})]})]})},n.title))})]}),h.jsx("div",{className:"col-md-12",children:h.jsxs("div",{className:"tips-section",children:[h.jsx("h3",{children:"Quick Tips"}),[["fa-bullseye","Focus on Form","Perfect form is more important than high reps. Quality over quantity always."],["fa-clock","Rest & Recovery","Muscles grow during rest. Ensure adequate sleep and recovery days."],["fa-utensils","Nutrition Matters","Fuel your workouts with proper nutrition for better performance and results."]].map(([n,e,t])=>h.jsxs("div",{className:"tip-item",children:[h.jsx("div",{className:"tip-icon",children:h.jsx("i",{className:`fas ${n}`})}),h.jsxs("div",{children:[h.jsx("h5",{children:e}),h.jsx("p",{children:t})]})]},e))]})}),h.jsxs("section",{className:"schedule-section mb-5",children:[h.jsx("h3",{children:"Sample Weekly Schedule"}),h.jsx("div",{className:"table-responsive",children:h.jsxs("table",{className:"table table-hover",children:[h.jsx("thead",{children:h.jsxs("tr",{children:[h.jsx("th",{children:"Day"}),h.jsx("th",{children:"Focus"}),h.jsx("th",{children:"Exercises"}),h.jsx("th",{children:"Duration"}),h.jsx("th",{children:"Difficulty"})]})}),h.jsx("tbody",{children:[["Monday","Upper Body Pull","Pull-ups, Rows, Biceps","45 mins","success","Medium"],["Tuesday","Lower Body","Squats, Lunges, Calves","40 mins","warning","Hard"],["Wednesday","Rest/Core","Planks, Leg Raises","20 mins","info","Easy"],["Thursday","Upper Body Push","Push-ups, Dips, Shoulders","50 mins","success","Medium"],["Friday","Full Body","Burpees, Compound Moves","55 mins","warning","Hard"],["Saturday","Skill Work","Handstands, Balance","35 mins","success","Medium"],["Sunday","Active Recovery","Stretching, Mobility","30 mins","info","Easy"]].map(([n,e,t,i,o,l])=>h.jsxs("tr",{children:[h.jsx("td",{children:n}),h.jsx("td",{children:e}),h.jsx("td",{children:t}),h.jsx("td",{children:i}),h.jsx("td",{children:h.jsx("span",{className:`badge bg-${o}`,children:l})})]},n))})]})})]})]}),h.jsx(Zr,{}),h.jsx("style",{children:`
        .calisthenics-hero{display:flex;flex-direction:row;align-items:center;color:white;padding:80px 0;text-align:center;margin-bottom:50px;height:500px;background:linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url('/Calisthenics/calisthenics-main.jpg');background-size:cover;background-position:bottom}
        .train-heading{font-size:2.5rem;font-weight:700;color:white}
        .schedule-section{background:white;border-radius:12px;padding:30px;box-shadow:0 4px 12px white}
        .schedule-section h3{color:var(--primary-color);border-bottom:2px solid var(--secondary-color);padding-bottom:10px;margin-bottom:25px}
        .schedule-section thead th{background:linear-gradient(135deg,var(--primary-color),var(--secondary-color));color:white;border:none;padding:15px}
        .schedule-section tbody tr:hover{background-color:rgba(54,209,220,0.1)}
        .program-card{background:white;border-radius:12px;overflow:hidden;box-shadow:0 4px 12px white;transition:all 0.3s ease;margin-bottom:30px;height:100%}
        .program-card:hover{transform:translateY(-10px)}
        .program-card-header{background:linear-gradient(135deg,var(--primary-color),var(--secondary-color));color:white;padding:20px;text-align:center}
        .program-card-body{padding:25px}
        .difficulty-badge{background:linear-gradient(135deg,#36D1DC,#5B86E5);color:white;padding:5px 15px;border-radius:20px;font-size:0.9rem;display:inline-block;margin-bottom:15px}
        .exercise-section{background:white;border-radius:12px;padding:30px;margin-bottom:30px;box-shadow:0 4px 12px white}
        .exercise-section h3{color:var(--primary-color);border-bottom:2px solid var(--secondary-color);padding-bottom:10px;margin-bottom:25px}
        .exercise-item{background:#f8f9fa;border-radius:10px;padding:20px;margin-bottom:20px;border-left:4px solid var(--secondary-color);transition:all 0.3s ease}
        .exercise-item:hover{background:#e9ecef;transform:translateX(5px)}
        .exercise-item h5{color:var(--primary-color);margin-bottom:10px}
        .exercise-stats{display:flex;gap:20px;margin-top:15px}
        .stat-item{display:flex;align-items:center;gap:8px;color:#6c757d}
        .stat-item i{color:var(--secondary-color)}
        .tips-section{background:linear-gradient(135deg,rgba(54,209,220,0.1),rgba(108,99,255,0.1));border-radius:12px;padding:30px;margin-bottom:30px;border-left:4px solid var(--secondary-color);color:white;box-shadow:0 4px 12px white}
        .tip-item{display:flex;align-items:flex-start;gap:15px;margin-bottom:20px;padding-bottom:20px;border-bottom:1px solid rgba(0,0,0,0.1);color:white}
        .tip-item:last-child{border-bottom:none;margin-bottom:0;padding-bottom:0}
        .tip-icon{width:40px;height:40px;background:var(--secondary-color);border-radius:50%;display:flex;align-items:center;justify-content:center;color:white;flex-shrink:0}
      `})]})}function zP(){return h.jsxs(h.Fragment,{children:[h.jsx(Xr,{}),h.jsx("div",{className:"circadian-hero",children:h.jsxs("div",{className:"container",children:[h.jsx("h1",{className:"display-4 fw-bold",children:"Circadian Rhythm"}),h.jsx("p",{className:"lead",children:"Master Your Body's Internal Clock for Optimal Health"}),h.jsx("p",{children:"Sleep better, have more energy, and improve your overall wellbeing"})]})}),h.jsx("div",{className:"container my-5",children:h.jsx("div",{className:"row justify-content-center",children:h.jsxs("div",{className:"col-lg-10",children:[h.jsxs("div",{className:"rhythm-card",children:[h.jsxs("h4",{children:[h.jsx("i",{className:"fas fa-chart-line me-2"}),"Circadian Rhythm"]}),h.jsxs("p",{className:"text-muted",children:["Circadian rhythm is the internally generated, approximately 24-hour biological cycle that regulates physiological and behavioral processes in living organisms, synchronized primarily by environmental light-dark signals. ",h.jsx("br",{}),h.jsx("b",{children:"In simple terms:"}),h.jsx("br",{}),"It is your body's built-in 24-hour clock that controls when you sleep, wake, release hormones, digest food, and stay alert — and it resets each day based on light."]})]}),h.jsxs("div",{className:"rhythm-card",children:[h.jsxs("h4",{children:[h.jsx("i",{className:"fas fa-calendar-day me-2"}),"Optimal 24-Hour Schedule"]}),h.jsx("p",{className:"text-muted",children:"Follow this natural rhythm for peak performance"}),[{icon:"fa-sun",label:"6:00 AM - Wake Up",desc:"Get morning sunlight, drink water, light stretching"},{icon:"fa-egg",label:"7:00 AM - Breakfast",desc:"High-protein meal to fuel your day"},{icon:"fa-brain",label:"9:00 AM - Peak Focus",desc:"Work on important tasks, cortisol peaks"},{icon:"fa-hamburger",label:"12:00 PM - Lunch",desc:"Balanced meal with complex carbs and protein"},{icon:"fa-dumbbell",label:"4:00 PM - Exercise",desc:"Best time for strength training and workouts"},{icon:"fa-utensils",label:"7:00 PM - Dinner",desc:"Light meal, avoid heavy carbs"},{icon:"fa-moon",label:"10:00 PM - Sleep",desc:"Begin wind-down routine, no screens, dim lights"}].map(n=>h.jsxs("div",{className:"time-slot",children:[h.jsx("div",{className:"time-icon",children:h.jsx("i",{className:`fas ${n.icon}`})}),h.jsxs("div",{className:"time-content",children:[h.jsx("div",{className:"time-label",children:n.label}),h.jsx("div",{children:n.desc})]})]},n.label))]}),h.jsxs("div",{className:"rhythm-card",children:[h.jsxs("h4",{children:[h.jsx("i",{className:"fas fa-chart-line me-2"}),"Hormone Fluctuations"]}),h.jsx("p",{className:"text-muted",children:"Understanding your body's natural cycles"}),[{name:"Cortisol",cls:"cortisol",peak:"Peak: 8-9 AM"},{name:"Melatonin",cls:"melatonin",peak:"Peak: 2-4 AM"},{name:"Growth Hormone",cls:"growth",peak:"Peak: 11 PM - 1 AM"}].map(n=>h.jsxs("div",{className:"hormone-track",children:[h.jsx("div",{className:"hormone-name",children:n.name}),h.jsx("div",{className:"hormone-bar",children:h.jsx("div",{className:`hormone-level ${n.cls}`})}),h.jsx("div",{className:"hormone-value",children:n.peak})]},n.name))]}),h.jsxs("div",{className:"rhythm-card",children:[h.jsxs("h4",{children:[h.jsx("i",{className:"fas fa-lightbulb me-2"}),"Light Exposure Guide"]}),h.jsx("p",{className:"text-muted",children:"Optimize light exposure for better rhythm"}),[{cls:"intensity-high",text:h.jsxs(h.Fragment,{children:[h.jsx("strong",{children:"Morning (6-10 AM):"})," Bright natural light (10,000+ lux) - resets circadian clock"]})},{cls:"intensity-medium",text:h.jsxs(h.Fragment,{children:[h.jsx("strong",{children:"Daytime (10 AM-4 PM):"})," Moderate light - maintains alertness"]})},{cls:"intensity-low",text:h.jsxs(h.Fragment,{children:[h.jsx("strong",{children:"Evening (6-10 PM):"})," Dim, warm light - promotes melatonin production"]})},{cls:"intensity-dark",text:h.jsxs(h.Fragment,{children:[h.jsx("strong",{children:"Night (10 PM-6 AM):"})," Complete darkness - essential for deep sleep"]})}].map((n,e)=>h.jsxs("div",{className:"light-exposure",children:[h.jsx("div",{className:`light-intensity ${n.cls}`}),h.jsx("div",{className:"light-content",children:n.text})]},e))]})]})})}),h.jsx(Zr,{}),h.jsx("style",{children:`
        .circadian-hero{background:linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.7)),url('/Circadian rhythm/sleep.jpg');background-size:cover;background-position:center;color:white;padding:80px 0;text-align:center;margin-bottom:50px;display:flex;align-items:center;height:500px}
        .rhythm-card{background:white;border-radius:12px;padding:25px;margin-bottom:30px;box-shadow:0 4px 12px rgba(255,255,255,1);border-left:4px solid var(--secondary-color);border-top:4px solid var(--secondary-color)}
        .rhythm-card h4{color:var(--primary-color);margin-bottom:15px;padding-bottom:10px;border-bottom:2px solid #f0f0f0}
        .time-slot{background:linear-gradient(135deg,rgba(54,209,220,0.1),rgba(0,0,0,0.05));border-radius:10px;padding:15px;margin:10px 0;display:flex;align-items:center}
        .time-icon{width:50px;height:50px;background:var(--secondary-color);border-radius:50%;display:flex;align-items:center;justify-content:center;color:white;font-size:1.2rem;margin-right:15px;flex-shrink:0}
        .time-label{font-weight:600;color:var(--primary-color);margin-bottom:5px}
        .hormone-track{display:flex;align-items:center;margin:15px 0}
        .hormone-name{width:120px;font-weight:600;color:var(--primary-color)}
        .hormone-bar{flex-grow:1;height:20px;background:#f0f0f0;border-radius:10px;overflow:hidden;margin:0 15px}
        .hormone-level{height:100%;border-radius:10px}
        .cortisol{background:linear-gradient(90deg,#667eea,#764ba2);width:90%}
        .melatonin{background:linear-gradient(90deg,#f093fb,#f5576c);width:85%}
        .growth{background:linear-gradient(90deg,#43e97b,#38f9d7);width:95%}
        .light-exposure{display:flex;align-items:center;margin:15px 0}
        .light-intensity{width:30px;height:30px;border-radius:50%;margin-right:15px;flex-shrink:0}
        .intensity-high{background:linear-gradient(135deg,#FFD700,#FF8C00)}
        .intensity-medium{background:linear-gradient(135deg,#90EE90,#32CD32)}
        .intensity-low{background:linear-gradient(135deg,#87CEEB,#1E90FF)}
        .intensity-dark{background:black}
      `})]})}function $P(){const{login:n,loginWithGoogle:e,revokeDevice:t}=mh(),i=Wu(),[o,l]=B.useState({email:"",password:""}),[u,p]=B.useState(""),[m,v]=B.useState(null),[w,E]=B.useState(!1);function I(L){l(H=>({...H,[L.target.id]:L.target.value}))}async function P(L){L.preventDefault(),p(""),E(!0);try{await n(o.email,o.password),i("/")}catch(H){H.code==="device-limit"?(v(H.sessions),p("You've reached the maximum of 2 simultaneous devices. Please log out from another device or revoke a session below.")):p(H.message||"Login failed. Check your credentials.")}finally{E(!1)}}async function q(){p(""),E(!0);try{await e(),i("/")}catch(L){L.code==="device-limit"?(v(L.sessions),p("Device limit reached. Revoke a session below.")):p(L.message||"Google sign-in failed.")}finally{E(!1)}}async function O(L,H){await t(L,H),v(Z=>Z.filter(ie=>ie.deviceId!==H)),p("Session revoked. Try logging in again.")}return h.jsxs(h.Fragment,{children:[h.jsx("style",{children:`
        .auth-page{min-height:100vh;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#0f0f0f 0%,#1a1a2e 50%,#212020 100%);padding:40px 15px}
        .auth-card{background:rgba(255,255,255,0.04);backdrop-filter:blur(20px);border:1px solid rgba(54,209,220,0.2);border-radius:20px;padding:45px 40px;width:100%;max-width:460px;box-shadow:0 20px 60px rgba(0,0,0,0.4)}
        .auth-logo{text-align:center;margin-bottom:30px}
        .auth-logo img{height:65px}
        .auth-title{font-size:1.8rem;font-weight:700;color:#fff;text-align:center;margin-bottom:6px}
        .auth-subtitle{color:rgba(255,255,255,0.5);text-align:center;margin-bottom:30px;font-size:0.95rem}
        .auth-label{color:rgba(255,255,255,0.75);font-size:0.9rem;margin-bottom:6px;display:block}
        .auth-input{background:rgba(255,255,255,0.07);border:1px solid rgba(255,255,255,0.15);border-radius:10px;padding:12px 16px;color:#fff;width:100%;font-size:1rem;transition:border 0.2s;outline:none;margin-bottom:18px}
        .auth-input:focus{border-color:#36D1DC;background:rgba(54,209,220,0.07)}
        .auth-input::placeholder{color:rgba(255,255,255,0.3)}
        .btn-auth{width:100%;padding:13px;border-radius:12px;border:none;font-size:1rem;font-weight:600;cursor:pointer;transition:all 0.3s;margin-bottom:14px}
        .btn-auth-primary{background:linear-gradient(135deg,#36D1DC,#5B86E5);color:#fff}
        .btn-auth-primary:hover{transform:translateY(-2px);box-shadow:0 6px 20px rgba(54,209,220,0.35)}
        .btn-auth-google{background:rgba(255,255,255,0.06);color:#fff;border:1px solid rgba(255,255,255,0.2);display:flex;align-items:center;justify-content:center;gap:10px}
        .btn-auth-google:hover{background:rgba(255,255,255,0.12);transform:translateY(-2px)}
        .auth-divider{display:flex;align-items:center;gap:12px;margin:6px 0 18px;color:rgba(255,255,255,0.3);font-size:0.85rem}
        .auth-divider::before,.auth-divider::after{content:'';flex:1;height:1px;background:rgba(255,255,255,0.1)}
        .auth-link{color:#36D1DC;text-decoration:none;font-size:0.9rem}
        .auth-link:hover{text-decoration:underline}
        .auth-error{background:rgba(255,80,80,0.12);border:1px solid rgba(255,80,80,0.3);border-radius:10px;padding:12px 16px;color:#ff8080;font-size:0.9rem;margin-bottom:18px}
        .auth-footer{text-align:center;margin-top:20px;color:rgba(255,255,255,0.4);font-size:0.9rem}
        .device-card{background:rgba(255,80,80,0.08);border:1px solid rgba(255,80,80,0.2);border-radius:10px;padding:14px;margin-bottom:10px;display:flex;justify-content:space-between;align-items:center}
        .device-info{color:rgba(255,255,255,0.7);font-size:0.82rem;line-height:1.5}
        .btn-revoke{background:rgba(255,80,80,0.2);color:#ff8080;border:1px solid rgba(255,80,80,0.3);border-radius:8px;padding:6px 14px;font-size:0.82rem;cursor:pointer;transition:all 0.2s}
        .btn-revoke:hover{background:rgba(255,80,80,0.35)}
        .google-g{font-size:18px;font-weight:700;font-family:sans-serif}
        .btn-auth:disabled{opacity:0.6;cursor:not-allowed;transform:none !important}
      `}),h.jsx("div",{className:"auth-page",children:h.jsxs("div",{className:"auth-card",children:[h.jsx("div",{className:"auth-logo",children:h.jsx("img",{src:"/Black and White Wings Company Logo.png",alt:"Elev8"})}),h.jsx("h1",{className:"auth-title",children:"Welcome Back"}),h.jsx("p",{className:"auth-subtitle",children:"Sign in to continue your wellness journey"}),u&&h.jsx("div",{className:"auth-error",children:u}),m&&h.jsx("div",{style:{marginBottom:18},children:m.map(L=>{var H,Z,ie,ne;return h.jsxs("div",{className:"device-card",children:[h.jsxs("div",{className:"device-info",children:[h.jsxs("div",{children:["🖥 ",(H=L.userAgent)==null?void 0:H.slice(0,60),"…"]}),h.jsxs("div",{style:{marginTop:4,color:"rgba(255,255,255,0.4)"},children:["Logged in: ",((ne=(ie=(Z=L.loginAt)==null?void 0:Z.toDate)==null?void 0:ie.call(Z))==null?void 0:ne.toLocaleString())||"Recently"]})]}),h.jsx("button",{className:"btn-revoke",onClick:()=>O(o.email,L.deviceId),children:"Revoke"})]},L.deviceId)})}),h.jsxs("form",{onSubmit:P,children:[h.jsx("label",{className:"auth-label",htmlFor:"email",children:"Email Address"}),h.jsx("input",{id:"email",type:"email",className:"auth-input",placeholder:"you@example.com",value:o.email,onChange:I,required:!0}),h.jsx("label",{className:"auth-label",htmlFor:"password",children:"Password"}),h.jsx("input",{id:"password",type:"password",className:"auth-input",placeholder:"••••••••",value:o.password,onChange:I,required:!0}),h.jsx("button",{type:"submit",className:"btn-auth btn-auth-primary",disabled:w,children:w?"⏳ Signing in…":"Sign In"})]}),h.jsx("div",{className:"auth-divider",children:"or continue with"}),h.jsxs("button",{className:"btn-auth btn-auth-google",onClick:q,disabled:w,children:[h.jsx("span",{className:"google-g",style:{color:"#EA4335"},children:"G"}),"Continue with Google"]}),h.jsxs("div",{className:"auth-footer",children:["Don't have an account?"," ",h.jsx($e,{to:"/register",className:"auth-link",children:"Create one"})]}),h.jsx("div",{className:"auth-footer",style:{marginTop:8},children:h.jsx($e,{to:"/",className:"auth-link",children:"← Back to Home"})})]})})]})}const WP=["Weight Loss","Muscle Gain","Stress Reduction","Better Sleep","Overall Wellness"];function qP(){const{register:n,loginWithGoogle:e}=mh(),t=Wu(),[i,o]=B.useState({firstName:"",lastName:"",email:"",password:"",confirmPassword:"",healthGoal:"Weight Loss",newsletter:!1}),[l,u]=B.useState(""),[p,m]=B.useState(!1);function v(I){const{id:P,value:q,type:O,checked:L}=I.target;o(H=>({...H,[P]:O==="checkbox"?L:q}))}async function w(I){if(I.preventDefault(),u(""),i.password!==i.confirmPassword)return u("Passwords don't match.");if(i.password.length<6)return u("Password must be at least 6 characters.");m(!0);try{await n(i.email,i.password,i.firstName,i.lastName,i.healthGoal),t("/")}catch(P){u(P.message||"Registration failed.")}finally{m(!1)}}async function E(){u(""),m(!0);try{await e(),t("/")}catch(I){u(I.message||"Google sign-up failed.")}finally{m(!1)}}return h.jsxs(h.Fragment,{children:[h.jsx("style",{children:`
        .auth-page{min-height:100vh;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#0f0f0f 0%,#1a1a2e 50%,#212020 100%);padding:40px 15px}
        .auth-card{background:rgba(255,255,255,0.04);backdrop-filter:blur(20px);border:1px solid rgba(54,209,220,0.2);border-radius:20px;padding:45px 40px;width:100%;max-width:500px;box-shadow:0 20px 60px rgba(0,0,0,0.4)}
        .auth-logo{text-align:center;margin-bottom:30px}
        .auth-logo img{height:60px}
        .auth-title{font-size:1.8rem;font-weight:700;color:#fff;text-align:center;margin-bottom:6px}
        .auth-subtitle{color:rgba(255,255,255,0.5);text-align:center;margin-bottom:30px;font-size:0.95rem}
        .auth-label{color:rgba(255,255,255,0.75);font-size:0.9rem;margin-bottom:6px;display:block}
        .auth-input,.auth-select{background:rgba(255,255,255,0.07);border:1px solid rgba(255,255,255,0.15);border-radius:10px;padding:12px 16px;color:#fff;width:100%;font-size:0.95rem;transition:border 0.2s;outline:none;margin-bottom:16px}
        .auth-input:focus,.auth-select:focus{border-color:#36D1DC;background:rgba(54,209,220,0.07)}
        .auth-input::placeholder{color:rgba(255,255,255,0.3)}
        .auth-select option{background:#1a1a2e;color:#fff}
        .row-2{display:grid;grid-template-columns:1fr 1fr;gap:14px}
        .btn-auth{width:100%;padding:13px;border-radius:12px;border:none;font-size:1rem;font-weight:600;cursor:pointer;transition:all 0.3s;margin-bottom:14px}
        .btn-auth-primary{background:linear-gradient(135deg,#36D1DC,#5B86E5);color:#fff}
        .btn-auth-primary:hover{transform:translateY(-2px);box-shadow:0 6px 20px rgba(54,209,220,0.35)}
        .btn-auth-google{background:rgba(255,255,255,0.06);color:#fff;border:1px solid rgba(255,255,255,0.2);display:flex;align-items:center;justify-content:center;gap:10px}
        .btn-auth-google:hover{background:rgba(255,255,255,0.12);transform:translateY(-2px)}
        .auth-divider{display:flex;align-items:center;gap:12px;margin:4px 0 14px;color:rgba(255,255,255,0.3);font-size:0.85rem}
        .auth-divider::before,.auth-divider::after{content:'';flex:1;height:1px;background:rgba(255,255,255,0.1)}
        .auth-link{color:#36D1DC;text-decoration:none;font-size:0.9rem}
        .auth-link:hover{text-decoration:underline}
        .auth-error{background:rgba(255,80,80,0.12);border:1px solid rgba(255,80,80,0.3);border-radius:10px;padding:12px 16px;color:#ff8080;font-size:0.9rem;margin-bottom:18px}
        .auth-footer{text-align:center;margin-top:18px;color:rgba(255,255,255,0.4);font-size:0.9rem}
        .check-row{display:flex;align-items:center;gap:10px;margin-bottom:20px}
        .check-row input{width:18px;height:18px;accent-color:#36D1DC;cursor:pointer}
        .check-row label{color:rgba(255,255,255,0.65);font-size:0.88rem;cursor:pointer}
        .google-g{font-size:18px;font-weight:700;font-family:sans-serif}
        .btn-auth:disabled{opacity:0.6;cursor:not-allowed;transform:none !important}
      `}),h.jsx("div",{className:"auth-page",children:h.jsxs("div",{className:"auth-card",children:[h.jsx("div",{className:"auth-logo",children:h.jsx("img",{src:"/Black and White Wings Company Logo.png",alt:"Elev8"})}),h.jsx("h1",{className:"auth-title",children:"Join Elev8"}),h.jsx("p",{className:"auth-subtitle",children:"Start your wellness transformation today"}),l&&h.jsx("div",{className:"auth-error",children:l}),h.jsxs("form",{onSubmit:w,children:[h.jsxs("div",{className:"row-2",children:[h.jsxs("div",{children:[h.jsx("label",{className:"auth-label",htmlFor:"firstName",children:"First Name"}),h.jsx("input",{id:"firstName",type:"text",className:"auth-input",placeholder:"Prakhar",value:i.firstName,onChange:v,required:!0})]}),h.jsxs("div",{children:[h.jsx("label",{className:"auth-label",htmlFor:"lastName",children:"Last Name"}),h.jsx("input",{id:"lastName",type:"text",className:"auth-input",placeholder:"Gupta",value:i.lastName,onChange:v,required:!0})]})]}),h.jsx("label",{className:"auth-label",htmlFor:"email",children:"Email Address"}),h.jsx("input",{id:"email",type:"email",className:"auth-input",placeholder:"you@iiitl.ac.in",value:i.email,onChange:v,required:!0}),h.jsx("label",{className:"auth-label",htmlFor:"password",children:"Password"}),h.jsx("input",{id:"password",type:"password",className:"auth-input",placeholder:"Min. 6 characters",value:i.password,onChange:v,required:!0}),h.jsx("label",{className:"auth-label",htmlFor:"confirmPassword",children:"Confirm Password"}),h.jsx("input",{id:"confirmPassword",type:"password",className:"auth-input",placeholder:"Repeat password",value:i.confirmPassword,onChange:v,required:!0}),h.jsx("label",{className:"auth-label",htmlFor:"healthGoal",children:"Primary Health Goal"}),h.jsx("select",{id:"healthGoal",className:"auth-select",value:i.healthGoal,onChange:v,children:WP.map(I=>h.jsx("option",{children:I},I))}),h.jsxs("div",{className:"check-row",children:[h.jsx("input",{type:"checkbox",id:"newsletter",checked:i.newsletter,onChange:v}),h.jsx("label",{htmlFor:"newsletter",children:"Subscribe to Elev8 wellness newsletter"})]}),h.jsx("button",{type:"submit",className:"btn-auth btn-auth-primary",disabled:p,children:p?"⏳ Creating account…":"🚀 Create Account"})]}),h.jsx("div",{className:"auth-divider",children:"or"}),h.jsxs("button",{className:"btn-auth btn-auth-google",onClick:E,disabled:p,children:[h.jsx("span",{className:"google-g",style:{color:"#EA4335"},children:"G"}),"Sign up with Google"]}),h.jsxs("div",{className:"auth-footer",children:["Already have an account?"," ",h.jsx($e,{to:"/login",className:"auth-link",children:"Sign in"})]}),h.jsx("div",{className:"auth-footer",style:{marginTop:8},children:h.jsx($e,{to:"/",className:"auth-link",children:"← Back to Home"})})]})})]})}const HP="elev8-community";function GP(n=HP){const[e,t]=B.useState([]),[i,o]=B.useState(!0);B.useEffect(()=>{const m=yu(Mn,"chats",n,"messages"),v=i_(m,qR("timestamp","asc"),s_(100));return QR(v,E=>{const I=E.docs.map(P=>({id:P.id,...P.data()}));t(I),o(!1)})},[n]);async function l(m,v){if(!m.trim()||!v)return;const w=yu(Mn,"chats",n,"messages");await KR(w,{text:m.trim(),uid:v.uid,displayName:v.displayName||v.email,photoURL:v.photoURL||null,timestamp:wl()})}async function u(m){m&&await Bf(Mi(Mn,"chats",n,"messages",m))}async function p(){const m=yu(Mn,"chats",n,"messages"),w=(await lx(i_(m,s_(100)))).docs.map(E=>Bf(E.ref));await Promise.all(w)}return{messages:e,loading:i,sendMessage:l,deleteMessage:u,clearChat:p}}function KP(){var Z,ie;const{user:n}=mh(),[e,t]=B.useState(!1),[i,o]=B.useState(""),[l,u]=B.useState(null),{messages:p,loading:m,sendMessage:v,deleteMessage:w,clearChat:E}=GP(),I=B.useRef(null);B.useEffect(()=>{var ne;e&&((ne=I.current)==null||ne.scrollIntoView({behavior:"smooth"}))},[p,e]),B.useEffect(()=>{if(!e&&p.length>0){const ne=p[p.length-1];ne.uid!==(n==null?void 0:n.uid)&&(u(ne),setTimeout(()=>u(null),4e3))}},[p]);async function P(ne){if(ne.preventDefault(),!n){alert("Please login to chat!");return}await v(i,n),o("")}function q(ne){return ne?(ne.toDate?ne.toDate():new Date(ne)).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):""}function O(ne=""){return ne.split(" ").map(fe=>fe[0]).join("").toUpperCase().slice(0,2)}const L=["#36D1DC","#5B86E5","#FF6B9D","#FFBE0B","#06D6A0"];function H(ne=""){return L[ne.charCodeAt(0)%L.length]}return h.jsxs(h.Fragment,{children:[h.jsx("style",{children:`
        .chat-fab{position:fixed;bottom:28px;right:28px;z-index:1000;display:flex;flex-direction:column;align-items:flex-end;gap:10px}
        .chat-btn{width:60px;height:60px;border-radius:50%;background:linear-gradient(135deg,#36D1DC,#5B86E5);border:none;color:#fff;font-size:26px;cursor:pointer;box-shadow:0 4px 20px rgba(54,209,220,0.5);transition:transform 0.2s,box-shadow 0.2s;display:flex;align-items:center;justify-content:center}
        .chat-btn:hover{transform:scale(1.1);box-shadow:0 6px 28px rgba(54,209,220,0.65)}
        .chat-badge{position:absolute;top:-4px;right:-4px;width:18px;height:18px;background:#ff4444;border-radius:50%;font-size:11px;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;animation:pulse 1s infinite}
        @keyframes pulse{0%,100%{transform:scale(1)}50%{transform:scale(1.2)}}
        .chat-toast{background:rgba(30,30,50,0.95);border:1px solid rgba(54,209,220,0.3);border-radius:12px;padding:12px 16px;color:#fff;font-size:0.85rem;max-width:220px;box-shadow:0 4px 20px rgba(0,0,0,0.4);backdrop-filter:blur(12px);animation:fadeIn 0.3s ease}
        @keyframes fadeIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}
        .chat-window{position:fixed;bottom:98px;right:28px;z-index:999;width:370px;max-height:520px;background:rgba(18,18,35,0.97);border:1px solid rgba(54,209,220,0.25);border-radius:20px;box-shadow:0 20px 60px rgba(0,0,0,0.6);backdrop-filter:blur(20px);display:flex;flex-direction:column;overflow:hidden;animation:slideUp 0.25s ease}
        @keyframes slideUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
        .chat-header{background:linear-gradient(135deg,rgba(54,209,220,0.15),rgba(91,134,229,0.15));border-bottom:1px solid rgba(255,255,255,0.08);padding:16px 20px;display:flex;align-items:center;justify-content:space-between}
        .chat-header-title{color:#fff;font-weight:700;font-size:1rem;display:flex;align-items:center;gap:8px}
        .online-dot{width:8px;height:8px;background:#2ecc71;border-radius:50%;animation:pulse 2s infinite}
        .chat-clear{background:none;border:none;color:rgba(255,80,80,0.8);font-size:0.8rem;cursor:pointer;padding:4px 8px;margin-right:10px;border-radius:4px;}
        .chat-clear:hover{background:rgba(255,80,80,0.15);color:#ff8080;}
        .chat-close{background:none;border:none;color:rgba(255,255,255,0.5);font-size:20px;cursor:pointer;padding:0;line-height:1}
        .chat-close:hover{color:#fff}
        .chat-messages{flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:10px;max-height:360px}
        .chat-messages::-webkit-scrollbar{width:4px}
        .chat-messages::-webkit-scrollbar-track{background:transparent}
        .chat-messages::-webkit-scrollbar-thumb{background:rgba(54,209,220,0.3);border-radius:2px}
        .msg-row{display:flex;align-items:flex-end;gap:8px}
        .msg-row.mine{flex-direction:row-reverse}
        .msg-avatar{width:30px;height:30px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:0.7rem;font-weight:700;color:#fff;flex-shrink:0;overflow:hidden}
        .msg-avatar img{width:100%;height:100%;object-fit:cover}
        .msg-bubble{max-width:220px;padding:9px 14px;border-radius:16px;font-size:0.88rem;line-height:1.45;position:relative}
        .msg-bubble.theirs{background:rgba(255,255,255,0.08);color:#fff;border-bottom-left-radius:4px}
        .msg-bubble.mine{background:linear-gradient(135deg,#36D1DC,#5B86E5);color:#fff;border-bottom-right-radius:4px}
        .msg-delete{position:absolute;top:-8px;right:-8px;background:#ff4444;color:#fff;border:none;border-radius:50%;width:20px;height:20px;font-size:10px;cursor:pointer;display:none;align-items:center;justify-content:center;line-height:1;box-shadow:0 2px 5px rgba(0,0,0,0.3)}
        .msg-bubble:hover .msg-delete{display:flex}
        .msg-meta{font-size:0.7rem;color:rgba(255,255,255,0.35);margin-top:3px}
        .msg-name{font-size:0.72rem;color:rgba(255,255,255,0.5);margin-bottom:3px}
        .chat-loading{color:rgba(255,255,255,0.35);text-align:center;padding:20px;font-size:0.88rem}
        .chat-empty{color:rgba(255,255,255,0.25);text-align:center;padding:30px;font-size:0.88rem}
        .chat-input-row{border-top:1px solid rgba(255,255,255,0.08);padding:12px 16px;display:flex;gap:8px;align-items:center;background:rgba(0,0,0,0.2)}
        .chat-input{flex:1;background:rgba(255,255,255,0.07);border:1px solid rgba(255,255,255,0.12);border-radius:12px;padding:10px 14px;color:#fff;font-size:0.9rem;outline:none;transition:border 0.2s}
        .chat-input:focus{border-color:#36D1DC}
        .chat-input::placeholder{color:rgba(255,255,255,0.25)}
        .chat-send{background:linear-gradient(135deg,#36D1DC,#5B86E5);border:none;border-radius:12px;padding:10px 14px;color:#fff;cursor:pointer;font-size:16px;transition:transform 0.2s}
        .chat-send:hover{transform:scale(1.1)}
        .chat-login-hint{color:rgba(255,200,80,0.8);font-size:0.8rem;padding:8px 16px;text-align:center;background:rgba(255,200,80,0.05);border-top:1px solid rgba(255,200,80,0.1)}
        @media(max-width:420px){.chat-window{width:calc(100vw - 20px);right:10px}}
      `}),h.jsxs("div",{className:"chat-fab",children:[l&&!e&&h.jsxs("div",{className:"chat-toast",children:["💬 ",h.jsxs("strong",{children:[(Z=l.displayName)==null?void 0:Z.split(" ")[0],":"]})," ",(ie=l.text)==null?void 0:ie.slice(0,60)]}),e&&h.jsxs("div",{className:"chat-window",children:[h.jsxs("div",{className:"chat-header",children:[h.jsxs("div",{className:"chat-header-title",children:[h.jsx("span",{className:"online-dot"}),"💬 Community Chat"]}),h.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[n&&h.jsx("button",{className:"chat-clear",onClick:()=>{window.confirm("Clear all chat messages?")&&E()},children:"Clear"}),h.jsx("button",{className:"chat-close",onClick:()=>t(!1),children:"✕"})]})]}),h.jsxs("div",{className:"chat-messages",children:[m&&h.jsx("div",{className:"chat-loading",children:"Loading messages…"}),!m&&p.length===0&&h.jsx("div",{className:"chat-empty",children:"No messages yet. Say hello! 👋"}),p.map(ne=>{const fe=ne.uid===(n==null?void 0:n.uid);return h.jsxs("div",{className:`msg-row${fe?" mine":""}`,children:[h.jsx("div",{className:"msg-avatar",style:{background:H(ne.uid)},children:ne.photoURL?h.jsx("img",{src:ne.photoURL,alt:""}):O(ne.displayName)}),h.jsxs("div",{children:[!fe&&h.jsx("div",{className:"msg-name",children:ne.displayName}),h.jsxs("div",{className:`msg-bubble ${fe?"mine":"theirs"}`,children:[fe&&h.jsx("button",{className:"msg-delete",onClick:()=>w(ne.id),title:"Delete message",children:"✕"}),ne.text,h.jsx("div",{className:"msg-meta",children:q(ne.timestamp)})]})]})]},ne.id)}),h.jsx("div",{ref:I})]}),!n&&h.jsxs("div",{className:"chat-login-hint",children:["⚠️ ",h.jsx("a",{href:"/login",style:{color:"#ffcc44",textDecoration:"none"},children:"Login"})," to send messages"]}),h.jsxs("form",{className:"chat-input-row",onSubmit:P,children:[h.jsx("input",{className:"chat-input",placeholder:n?"Type a message…":"Login to chat…",value:i,onChange:ne=>o(ne.target.value),disabled:!n}),h.jsx("button",{type:"submit",className:"chat-send",disabled:!n||!i.trim(),children:"➤"})]})]}),h.jsxs("div",{style:{position:"relative"},children:[h.jsx("button",{className:"chat-btn",onClick:()=>t(ne=>!ne),title:"Community Chat",children:e?"✕":"💬"}),!e&&p.length>0&&h.jsx("div",{className:"chat-badge",children:p.length>9?"9+":p.length})]})]})]})}function QP(){const n="14155238886",e=encodeURIComponent("join are-of");return h.jsxs(h.Fragment,{children:[h.jsx("style",{children:`
        .wa-fab {
          position: fixed;
          bottom: 28px;
          left: 28px;
          z-index: 1000;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .wa-btn {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: linear-gradient(135deg, #25D366, #128C7E);
          border: none;
          color: #fff;
          font-size: 32px;
          cursor: pointer;
          box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
          transition: transform 0.2s, box-shadow 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
        }
        .wa-btn:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 28px rgba(37, 211, 102, 0.6);
          color: #fff;
        }
        .wa-tooltip {
          background: rgba(30, 30, 50, 0.95);
          border: 1px solid rgba(37, 211, 102, 0.3);
          color: white;
          padding: 8px 16px;
          border-radius: 12px;
          font-size: 0.9rem;
          font-weight: 600;
          box-shadow: 0 4px 15px rgba(0,0,0,0.3);
          backdrop-filter: blur(8px);
          opacity: 0;
          transform: translateX(-10px);
          transition: all 0.3s ease;
          pointer-events: none;
          white-space: nowrap;
        }
        .wa-fab:hover .wa-tooltip {
          opacity: 1;
          transform: translateX(0);
        }
      `}),h.jsxs("div",{className:"wa-fab",children:[h.jsx("a",{href:`https://wa.me/${n}?text=${e}`,target:"_blank",rel:"noopener noreferrer",className:"wa-btn",children:h.jsx("i",{className:"fab fa-whatsapp"})}),h.jsx("div",{className:"wa-tooltip",children:"Activate WhatsApp Bot 🤖"})]})]})}function YP({notif:n,onClose:e}){var t,i,o;return n?h.jsxs("div",{style:{position:"fixed",top:20,right:20,zIndex:9999,background:"rgba(18,18,35,0.97)",border:"1px solid rgba(54,209,220,0.3)",borderRadius:14,padding:"16px 20px",maxWidth:340,boxShadow:"0 10px 40px rgba(0,0,0,0.5)",backdropFilter:"blur(16px)",animation:"slideDown 0.3s ease",display:"flex",alignItems:"flex-start",gap:12},children:[h.jsx("span",{style:{fontSize:22},children:"🔔"}),h.jsxs("div",{style:{flex:1},children:[h.jsx("div",{style:{color:"#fff",fontWeight:700,marginBottom:4},children:((t=n.notification)==null?void 0:t.title)||"Elev8 Notification"}),h.jsx("div",{style:{color:"rgba(255,255,255,0.65)",fontSize:"0.88rem"},children:((i=n.notification)==null?void 0:i.body)||((o=n.data)==null?void 0:o.message)})]}),h.jsx("button",{onClick:e,style:{background:"none",border:"none",color:"rgba(255,255,255,0.4)",cursor:"pointer",fontSize:18,lineHeight:1},children:"✕"}),h.jsx("style",{children:"@keyframes slideDown{from{opacity:0;transform:translateY(-14px)}to{opacity:1;transform:translateY(0)}}"})]}):null}function JP(){const[n,e]=B.useState(null),t=B.useCallback(i=>{e(i),setTimeout(()=>e(null),5e3)},[]);return RP(t),h.jsxs(EI,{children:[h.jsx(YP,{notif:n,onClose:()=>e(null)}),h.jsxs(XT,{children:[h.jsx(_n,{path:"/",element:h.jsx(jP,{})}),h.jsx(_n,{path:"/about",element:h.jsx(DP,{})}),h.jsx(_n,{path:"/premium",element:h.jsx(LP,{})}),h.jsx(_n,{path:"/store",element:h.jsx(VP,{})}),h.jsx(_n,{path:"/diet",element:h.jsx(MP,{})}),h.jsx(_n,{path:"/yoga",element:h.jsx(FP,{})}),h.jsx(_n,{path:"/weight",element:h.jsx(UP,{})}),h.jsx(_n,{path:"/calisthenics",element:h.jsx(BP,{})}),h.jsx(_n,{path:"/circadian",element:h.jsx(zP,{})}),h.jsx(_n,{path:"/login",element:h.jsx($P,{})}),h.jsx(_n,{path:"/register",element:h.jsx(qP,{})})]}),h.jsx(KP,{}),h.jsx(QP,{})]})}function XP(){return h.jsx(CP,{children:h.jsx(JP,{})})}eT.createRoot(document.getElementById("root")).render(h.jsx(GE.StrictMode,{children:h.jsx(XP,{})}));
