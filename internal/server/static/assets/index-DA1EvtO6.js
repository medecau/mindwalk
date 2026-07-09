(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function tM(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Gh={exports:{}},tl={};var E_;function eM(){if(E_)return tl;E_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:h,ref:l!==void 0?l:null,props:c}}return tl.Fragment=t,tl.jsx=i,tl.jsxs=i,tl}var b_;function nM(){return b_||(b_=1,Gh.exports=eM()),Gh.exports}var ft=nM(),Vh={exports:{}},de={};var T_;function iM(){if(T_)return de;T_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),M=Symbol.iterator;function y(N){return N===null||typeof N!="object"?null:(N=M&&N[M]||N["@@iterator"],typeof N=="function"?N:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,x={};function g(N,et,ht){this.props=N,this.context=et,this.refs=x,this.updater=ht||T}g.prototype.isReactComponent={},g.prototype.setState=function(N,et){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,et,"setState")},g.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function P(){}P.prototype=g.prototype;function U(N,et,ht){this.props=N,this.context=et,this.refs=x,this.updater=ht||T}var L=U.prototype=new P;L.constructor=U,w(L,g.prototype),L.isPureReactComponent=!0;var z=Array.isArray;function O(){}var D={H:null,A:null,T:null,S:null},V=Object.prototype.hasOwnProperty;function b(N,et,ht){var xt=ht.ref;return{$$typeof:r,type:N,key:et,ref:xt!==void 0?xt:null,props:ht}}function A(N,et){return b(N.type,et,N.props)}function H(N){return typeof N=="object"&&N!==null&&N.$$typeof===r}function Q(N){var et={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(ht){return et[ht]})}var tt=/\/+/g;function lt(N,et){return typeof N=="object"&&N!==null&&N.key!=null?Q(""+N.key):et.toString(36)}function it(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(O,O):(N.status="pending",N.then(function(et){N.status==="pending"&&(N.status="fulfilled",N.value=et)},function(et){N.status==="pending"&&(N.status="rejected",N.reason=et)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function I(N,et,ht,xt,Tt){var Y=typeof N;(Y==="undefined"||Y==="boolean")&&(N=null);var $=!1;if(N===null)$=!0;else switch(Y){case"bigint":case"string":case"number":$=!0;break;case"object":switch(N.$$typeof){case r:case t:$=!0;break;case v:return $=N._init,I($(N._payload),et,ht,xt,Tt)}}if($)return Tt=Tt(N),$=xt===""?"."+lt(N,0):xt,z(Tt)?(ht="",$!=null&&(ht=$.replace(tt,"$&/")+"/"),I(Tt,et,ht,"",function(Dt){return Dt})):Tt!=null&&(H(Tt)&&(Tt=A(Tt,ht+(Tt.key==null||N&&N.key===Tt.key?"":(""+Tt.key).replace(tt,"$&/")+"/")+$)),et.push(Tt)),1;$=0;var Mt=xt===""?".":xt+":";if(z(N))for(var Rt=0;Rt<N.length;Rt++)xt=N[Rt],Y=Mt+lt(xt,Rt),$+=I(xt,et,ht,Y,Tt);else if(Rt=y(N),typeof Rt=="function")for(N=Rt.call(N),Rt=0;!(xt=N.next()).done;)xt=xt.value,Y=Mt+lt(xt,Rt++),$+=I(xt,et,ht,Y,Tt);else if(Y==="object"){if(typeof N.then=="function")return I(it(N),et,ht,xt,Tt);throw et=String(N),Error("Objects are not valid as a React child (found: "+(et==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":et)+"). If you meant to render a collection of children, use an array instead.")}return $}function F(N,et,ht){if(N==null)return N;var xt=[],Tt=0;return I(N,xt,"","",function(Y){return et.call(ht,Y,Tt++)}),xt}function J(N){if(N._status===-1){var et=N._result;et=et(),et.then(function(ht){(N._status===0||N._status===-1)&&(N._status=1,N._result=ht)},function(ht){(N._status===0||N._status===-1)&&(N._status=2,N._result=ht)}),N._status===-1&&(N._status=0,N._result=et)}if(N._status===1)return N._result.default;throw N._result}var mt=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var et=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(et))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)},pt={map:F,forEach:function(N,et,ht){F(N,function(){et.apply(this,arguments)},ht)},count:function(N){var et=0;return F(N,function(){et++}),et},toArray:function(N){return F(N,function(et){return et})||[]},only:function(N){if(!H(N))throw Error("React.Children.only expected to receive a single React element child.");return N}};return de.Activity=_,de.Children=pt,de.Component=g,de.Fragment=i,de.Profiler=l,de.PureComponent=U,de.StrictMode=s,de.Suspense=m,de.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=D,de.__COMPILER_RUNTIME={__proto__:null,c:function(N){return D.H.useMemoCache(N)}},de.cache=function(N){return function(){return N.apply(null,arguments)}},de.cacheSignal=function(){return null},de.cloneElement=function(N,et,ht){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var xt=w({},N.props),Tt=N.key;if(et!=null)for(Y in et.key!==void 0&&(Tt=""+et.key),et)!V.call(et,Y)||Y==="key"||Y==="__self"||Y==="__source"||Y==="ref"&&et.ref===void 0||(xt[Y]=et[Y]);var Y=arguments.length-2;if(Y===1)xt.children=ht;else if(1<Y){for(var $=Array(Y),Mt=0;Mt<Y;Mt++)$[Mt]=arguments[Mt+2];xt.children=$}return b(N.type,Tt,xt)},de.createContext=function(N){return N={$$typeof:h,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:c,_context:N},N},de.createElement=function(N,et,ht){var xt,Tt={},Y=null;if(et!=null)for(xt in et.key!==void 0&&(Y=""+et.key),et)V.call(et,xt)&&xt!=="key"&&xt!=="__self"&&xt!=="__source"&&(Tt[xt]=et[xt]);var $=arguments.length-2;if($===1)Tt.children=ht;else if(1<$){for(var Mt=Array($),Rt=0;Rt<$;Rt++)Mt[Rt]=arguments[Rt+2];Tt.children=Mt}if(N&&N.defaultProps)for(xt in $=N.defaultProps,$)Tt[xt]===void 0&&(Tt[xt]=$[xt]);return b(N,Y,Tt)},de.createRef=function(){return{current:null}},de.forwardRef=function(N){return{$$typeof:d,render:N}},de.isValidElement=H,de.lazy=function(N){return{$$typeof:v,_payload:{_status:-1,_result:N},_init:J}},de.memo=function(N,et){return{$$typeof:p,type:N,compare:et===void 0?null:et}},de.startTransition=function(N){var et=D.T,ht={};D.T=ht;try{var xt=N(),Tt=D.S;Tt!==null&&Tt(ht,xt),typeof xt=="object"&&xt!==null&&typeof xt.then=="function"&&xt.then(O,mt)}catch(Y){mt(Y)}finally{et!==null&&ht.types!==null&&(et.types=ht.types),D.T=et}},de.unstable_useCacheRefresh=function(){return D.H.useCacheRefresh()},de.use=function(N){return D.H.use(N)},de.useActionState=function(N,et,ht){return D.H.useActionState(N,et,ht)},de.useCallback=function(N,et){return D.H.useCallback(N,et)},de.useContext=function(N){return D.H.useContext(N)},de.useDebugValue=function(){},de.useDeferredValue=function(N,et){return D.H.useDeferredValue(N,et)},de.useEffect=function(N,et){return D.H.useEffect(N,et)},de.useEffectEvent=function(N){return D.H.useEffectEvent(N)},de.useId=function(){return D.H.useId()},de.useImperativeHandle=function(N,et,ht){return D.H.useImperativeHandle(N,et,ht)},de.useInsertionEffect=function(N,et){return D.H.useInsertionEffect(N,et)},de.useLayoutEffect=function(N,et){return D.H.useLayoutEffect(N,et)},de.useMemo=function(N,et){return D.H.useMemo(N,et)},de.useOptimistic=function(N,et){return D.H.useOptimistic(N,et)},de.useReducer=function(N,et,ht){return D.H.useReducer(N,et,ht)},de.useRef=function(N){return D.H.useRef(N)},de.useState=function(N){return D.H.useState(N)},de.useSyncExternalStore=function(N,et,ht){return D.H.useSyncExternalStore(N,et,ht)},de.useTransition=function(){return D.H.useTransition()},de.version="19.2.7",de}var A_;function bp(){return A_||(A_=1,Vh.exports=iM()),Vh.exports}var Gt=bp();const Bc=tM(Gt);var kh={exports:{}},el={},Xh={exports:{}},Wh={};var R_;function aM(){return R_||(R_=1,(function(r){function t(I,F){var J=I.length;I.push(F);t:for(;0<J;){var mt=J-1>>>1,pt=I[mt];if(0<l(pt,F))I[mt]=F,I[J]=pt,J=mt;else break t}}function i(I){return I.length===0?null:I[0]}function s(I){if(I.length===0)return null;var F=I[0],J=I.pop();if(J!==F){I[0]=J;t:for(var mt=0,pt=I.length,N=pt>>>1;mt<N;){var et=2*(mt+1)-1,ht=I[et],xt=et+1,Tt=I[xt];if(0>l(ht,J))xt<pt&&0>l(Tt,ht)?(I[mt]=Tt,I[xt]=J,mt=xt):(I[mt]=ht,I[et]=J,mt=et);else if(xt<pt&&0>l(Tt,J))I[mt]=Tt,I[xt]=J,mt=xt;else break t}}return F}function l(I,F){var J=I.sortIndex-F.sortIndex;return J!==0?J:I.id-F.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();r.unstable_now=function(){return h.now()-d}}var m=[],p=[],v=1,_=null,M=3,y=!1,T=!1,w=!1,x=!1,g=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function L(I){for(var F=i(p);F!==null;){if(F.callback===null)s(p);else if(F.startTime<=I)s(p),F.sortIndex=F.expirationTime,t(m,F);else break;F=i(p)}}function z(I){if(w=!1,L(I),!T)if(i(m)!==null)T=!0,O||(O=!0,Q());else{var F=i(p);F!==null&&it(z,F.startTime-I)}}var O=!1,D=-1,V=5,b=-1;function A(){return x?!0:!(r.unstable_now()-b<V)}function H(){if(x=!1,O){var I=r.unstable_now();b=I;var F=!0;try{t:{T=!1,w&&(w=!1,P(D),D=-1),y=!0;var J=M;try{e:{for(L(I),_=i(m);_!==null&&!(_.expirationTime>I&&A());){var mt=_.callback;if(typeof mt=="function"){_.callback=null,M=_.priorityLevel;var pt=mt(_.expirationTime<=I);if(I=r.unstable_now(),typeof pt=="function"){_.callback=pt,L(I),F=!0;break e}_===i(m)&&s(m),L(I)}else s(m);_=i(m)}if(_!==null)F=!0;else{var N=i(p);N!==null&&it(z,N.startTime-I),F=!1}}break t}finally{_=null,M=J,y=!1}F=void 0}}finally{F?Q():O=!1}}}var Q;if(typeof U=="function")Q=function(){U(H)};else if(typeof MessageChannel<"u"){var tt=new MessageChannel,lt=tt.port2;tt.port1.onmessage=H,Q=function(){lt.postMessage(null)}}else Q=function(){g(H,0)};function it(I,F){D=g(function(){I(r.unstable_now())},F)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(I){I.callback=null},r.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<I?Math.floor(1e3/I):5},r.unstable_getCurrentPriorityLevel=function(){return M},r.unstable_next=function(I){switch(M){case 1:case 2:case 3:var F=3;break;default:F=M}var J=M;M=F;try{return I()}finally{M=J}},r.unstable_requestPaint=function(){x=!0},r.unstable_runWithPriority=function(I,F){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var J=M;M=I;try{return F()}finally{M=J}},r.unstable_scheduleCallback=function(I,F,J){var mt=r.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?mt+J:mt):J=mt,I){case 1:var pt=-1;break;case 2:pt=250;break;case 5:pt=1073741823;break;case 4:pt=1e4;break;default:pt=5e3}return pt=J+pt,I={id:v++,callback:F,priorityLevel:I,startTime:J,expirationTime:pt,sortIndex:-1},J>mt?(I.sortIndex=J,t(p,I),i(m)===null&&I===i(p)&&(w?(P(D),D=-1):w=!0,it(z,J-mt))):(I.sortIndex=pt,t(m,I),T||y||(T=!0,O||(O=!0,Q()))),I},r.unstable_shouldYield=A,r.unstable_wrapCallback=function(I){var F=M;return function(){var J=M;M=F;try{return I.apply(this,arguments)}finally{M=J}}}})(Wh)),Wh}var C_;function sM(){return C_||(C_=1,Xh.exports=aM()),Xh.exports}var qh={exports:{}},Pn={};var w_;function rM(){if(w_)return Pn;w_=1;var r=bp();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)p+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,v){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:p,implementation:v}}var h=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Pn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Pn.createPortal=function(m,p){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,v)},Pn.flushSync=function(m){var p=h.T,v=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=p,s.p=v,s.d.f()}},Pn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Pn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Pn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var v=p.as,_=d(v,p.crossOrigin),M=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;v==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:M,fetchPriority:y}):v==="script"&&s.d.X(m,{crossOrigin:_,integrity:M,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Pn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var v=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Pn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var v=p.as,_=d(v,p.crossOrigin);s.d.L(m,v,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Pn.preloadModule=function(m,p){if(typeof m=="string")if(p){var v=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Pn.requestFormReset=function(m){s.d.r(m)},Pn.unstable_batchedUpdates=function(m,p){return m(p)},Pn.useFormState=function(m,p,v){return h.H.useFormState(m,p,v)},Pn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Pn.version="19.2.7",Pn}var D_;function oM(){if(D_)return qh.exports;D_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),qh.exports=rM(),qh.exports}var U_;function lM(){if(U_)return el;U_=1;var r=sM(),t=bp(),i=oM();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),e;if(f===o)return m(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=f;else{for(var S=!1,R=u.child;R;){if(R===a){S=!0,a=u,o=f;break}if(R===o){S=!0,o=u,a=f;break}R=R.sibling}if(!S){for(R=f.child;R;){if(R===a){S=!0,a=f,o=u;break}if(R===o){S=!0,o=f,a=u;break}R=R.sibling}if(!S)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function v(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=v(e),n!==null)return n;e=e.sibling}return null}var _=Object.assign,M=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),x=Symbol.for("react.strict_mode"),g=Symbol.for("react.profiler"),P=Symbol.for("react.consumer"),U=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),O=Symbol.for("react.suspense_list"),D=Symbol.for("react.memo"),V=Symbol.for("react.lazy"),b=Symbol.for("react.activity"),A=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function Q(e){return e===null||typeof e!="object"?null:(e=H&&e[H]||e["@@iterator"],typeof e=="function"?e:null)}var tt=Symbol.for("react.client.reference");function lt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===tt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case w:return"Fragment";case g:return"Profiler";case x:return"StrictMode";case z:return"Suspense";case O:return"SuspenseList";case b:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case T:return"Portal";case U:return e.displayName||"Context";case P:return(e._context.displayName||"Context")+".Consumer";case L:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case D:return n=e.displayName||null,n!==null?n:lt(e.type)||"Memo";case V:n=e._payload,e=e._init;try{return lt(e(n))}catch{}}return null}var it=Array.isArray,I=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J={pending:!1,data:null,method:null,action:null},mt=[],pt=-1;function N(e){return{current:e}}function et(e){0>pt||(e.current=mt[pt],mt[pt]=null,pt--)}function ht(e,n){pt++,mt[pt]=e.current,e.current=n}var xt=N(null),Tt=N(null),Y=N(null),$=N(null);function Mt(e,n){switch(ht(Y,n),ht(Tt,e),ht(xt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?q0(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=q0(n),e=Y0(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}et(xt),ht(xt,e)}function Rt(){et(xt),et(Tt),et(Y)}function Dt(e){e.memoizedState!==null&&ht($,e);var n=xt.current,a=Y0(n,e.type);n!==a&&(ht(Tt,e),ht(xt,a))}function Qt(e){Tt.current===e&&(et(xt),et(Tt)),$.current===e&&(et($),Ko._currentValue=J)}var me,te;function ce(e){if(me===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);me=n&&n[1]||"",te=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+me+e+te}var ue=!1;function re(e,n){if(!e||ue)return"";ue=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var St=function(){throw Error()};if(Object.defineProperty(St.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(St,[])}catch(ut){var ot=ut}Reflect.construct(e,[],St)}else{try{St.call()}catch(ut){ot=ut}e.call(St.prototype)}}else{try{throw Error()}catch(ut){ot=ut}(St=e())&&typeof St.catch=="function"&&St.catch(function(){})}}catch(ut){if(ut&&ot&&typeof ut.stack=="string")return[ut.stack,ot.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),S=f[0],R=f[1];if(S&&R){var G=S.split(`
`),st=R.split(`
`);for(u=o=0;o<G.length&&!G[o].includes("DetermineComponentFrameRoot");)o++;for(;u<st.length&&!st[u].includes("DetermineComponentFrameRoot");)u++;if(o===G.length||u===st.length)for(o=G.length-1,u=st.length-1;1<=o&&0<=u&&G[o]!==st[u];)u--;for(;1<=o&&0<=u;o--,u--)if(G[o]!==st[u]){if(o!==1||u!==1)do if(o--,u--,0>u||G[o]!==st[u]){var gt=`
`+G[o].replace(" at new "," at ");return e.displayName&&gt.includes("<anonymous>")&&(gt=gt.replace("<anonymous>",e.displayName)),gt}while(1<=o&&0<=u);break}}}finally{ue=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?ce(a):""}function Ke(e,n){switch(e.tag){case 26:case 27:case 5:return ce(e.type);case 16:return ce("Lazy");case 13:return e.child!==n&&n!==null?ce("Suspense Fallback"):ce("Suspense");case 19:return ce("SuspenseList");case 0:case 15:return re(e.type,!1);case 11:return re(e.type.render,!1);case 1:return re(e.type,!0);case 31:return ce("Activity");default:return""}}function k(e){try{var n="",a=null;do n+=Ke(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var $e=Object.prototype.hasOwnProperty,Ae=r.unstable_scheduleCallback,ze=r.unstable_cancelCallback,jt=r.unstable_shouldYield,B=r.unstable_requestPaint,E=r.unstable_now,j=r.unstable_getCurrentPriorityLevel,_t=r.unstable_ImmediatePriority,Et=r.unstable_UserBlockingPriority,dt=r.unstable_NormalPriority,Kt=r.unstable_LowPriority,Lt=r.unstable_IdlePriority,Wt=r.log,oe=r.unstable_setDisableYieldValue,At=null,Ct=null;function Ht(e){if(typeof Wt=="function"&&oe(e),Ct&&typeof Ct.setStrictMode=="function")try{Ct.setStrictMode(At,e)}catch{}}var It=Math.clz32?Math.clz32:q,Nt=Math.log,ge=Math.LN2;function q(e){return e>>>=0,e===0?32:31-(Nt(e)/ge|0)|0}var Pt=256,wt=262144,Ft=4194304;function bt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function yt(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,f=e.suspendedLanes,S=e.pingedLanes;e=e.warmLanes;var R=o&134217727;return R!==0?(o=R&~f,o!==0?u=bt(o):(S&=R,S!==0?u=bt(S):a||(a=R&~e,a!==0&&(u=bt(a))))):(R=o&~f,R!==0?u=bt(R):S!==0?u=bt(S):a||(a=o&~e,a!==0&&(u=bt(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Ut(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function fe(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ie(){var e=Ft;return Ft<<=1,(Ft&62914560)===0&&(Ft=4194304),e}function we(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function On(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ti(e,n,a,o,u,f){var S=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var R=e.entanglements,G=e.expirationTimes,st=e.hiddenUpdates;for(a=S&~a;0<a;){var gt=31-It(a),St=1<<gt;R[gt]=0,G[gt]=-1;var ot=st[gt];if(ot!==null)for(st[gt]=null,gt=0;gt<ot.length;gt++){var ut=ot[gt];ut!==null&&(ut.lane&=-536870913)}a&=~St}o!==0&&Al(e,o,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(S&~n))}function Al(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-It(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function oo(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-It(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function Ws(e,n){var a=n&-n;return a=(a&42)!==0?1:lo(a),(a&(e.suspendedLanes|n))!==0?0:a}function lo(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function qs(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function co(){var e=F.p;return e!==0?e:(e=window.event,e===void 0?32:g_(e.type))}function Ii(e,n){var a=F.p;try{return F.p=e,n()}finally{F.p=a}}var fi=Math.random().toString(36).slice(2),ln="__reactFiber$"+fi,Mn="__reactProps$"+fi,Ai="__reactContainer$"+fi,Ys="__reactEvents$"+fi,js="__reactListeners$"+fi,Rl="__reactHandles$"+fi,uo="__reactResources$"+fi,fs="__reactMarker$"+fi;function fo(e){delete e[ln],delete e[Mn],delete e[Ys],delete e[js],delete e[Rl]}function Ra(e){var n=e[ln];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Ai]||a[ln]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=t_(e);e!==null;){if(a=e[ln])return a;e=t_(e)}return n}e=a,a=e.parentNode}return null}function Ca(e){if(e=e[ln]||e[Ai]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function hs(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function wa(e){var n=e[uo];return n||(n=e[uo]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function C(e){e[fs]=!0}var Z=new Set,ct={};function rt(e,n){nt(e,n),nt(e+"Capture",n)}function nt(e,n){for(ct[e]=n,e=0;e<n.length;e++)Z.add(n[e])}var Ot=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Vt={},zt={};function kt(e){return $e.call(zt,e)?!0:$e.call(Vt,e)?!1:Ot.test(e)?zt[e]=!0:(Vt[e]=!0,!1)}function qt(e,n,a){if(kt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function ee(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Yt(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function ie(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ne(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function tn(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(S){a=""+S,f.call(this,S)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(S){a=""+S},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Ze(e){if(!e._valueTracker){var n=Ne(e)?"checked":"value";e._valueTracker=tn(e,n,""+e[n])}}function Be(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=Ne(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function Jt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Oe=/[\n"\\]/g;function he(e){return e.replace(Oe,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function En(e,n,a,o,u,f,S,R){e.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.type=S:e.removeAttribute("type"),n!=null?S==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+ie(n)):e.value!==""+ie(n)&&(e.value=""+ie(n)):S!=="submit"&&S!=="reset"||e.removeAttribute("value"),n!=null?bn(e,S,ie(n)):a!=null?bn(e,S,ie(a)):o!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?e.name=""+ie(R):e.removeAttribute("name")}function Qi(e,n,a,o,u,f,S,R){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Ze(e);return}a=a!=null?""+ie(a):"",n=n!=null?""+ie(n):a,R||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=R?e.checked:!!o,e.defaultChecked=!!o,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(e.name=S),Ze(e)}function bn(e,n,a){n==="number"&&Jt(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function hi(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+ie(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Fe(e,n,a){if(n!=null&&(n=""+ie(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+ie(a):""}function Tn(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(it(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=ie(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),Ze(e)}function pn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var An=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Rn(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||An.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Zs(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Rn(e,u,o)}else for(var f in n)n.hasOwnProperty(f)&&Rn(e,f,n[f])}function Ri(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Kx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Qx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Cl(e){return Qx.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ji(){}var Bu=null;function Iu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ks=null,Qs=null;function Wp(e){var n=Ca(e);if(n&&(e=n.stateNode)){var a=e[Mn]||null;t:switch(e=n.stateNode,n.type){case"input":if(En(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+he(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[Mn]||null;if(!u)throw Error(s(90));En(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&Be(o)}break t;case"textarea":Fe(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&hi(e,!!a.multiple,n,!1)}}}var Fu=!1;function qp(e,n,a){if(Fu)return e(n,a);Fu=!0;try{var o=e(n);return o}finally{if(Fu=!1,(Ks!==null||Qs!==null)&&(mc(),Ks&&(n=Ks,e=Qs,Qs=Ks=null,Wp(n),e)))for(n=0;n<e.length;n++)Wp(e[n])}}function ho(e,n){var a=e.stateNode;if(a===null)return null;var o=a[Mn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var $i=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Hu=!1;if($i)try{var po={};Object.defineProperty(po,"passive",{get:function(){Hu=!0}}),window.addEventListener("test",po,po),window.removeEventListener("test",po,po)}catch{Hu=!1}var Da=null,Gu=null,wl=null;function Yp(){if(wl)return wl;var e,n=Gu,a=n.length,o,u="value"in Da?Da.value:Da.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var S=a-e;for(o=1;o<=S&&n[a-o]===u[f-o];o++);return wl=u.slice(e,1<o?1-o:void 0)}function Dl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Ul(){return!0}function jp(){return!1}function Wn(e){function n(a,o,u,f,S){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=S,this.currentTarget=null;for(var R in e)e.hasOwnProperty(R)&&(a=e[R],this[R]=a?a(f):f[R]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Ul:jp,this.isPropagationStopped=jp,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ul)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ul)},persist:function(){},isPersistent:Ul}),n}var ds={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ll=Wn(ds),mo=_({},ds,{view:0,detail:0}),Jx=Wn(mo),Vu,ku,go,Nl=_({},mo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==go&&(go&&e.type==="mousemove"?(Vu=e.screenX-go.screenX,ku=e.screenY-go.screenY):ku=Vu=0,go=e),Vu)},movementY:function(e){return"movementY"in e?e.movementY:ku}}),Zp=Wn(Nl),$x=_({},Nl,{dataTransfer:0}),tS=Wn($x),eS=_({},mo,{relatedTarget:0}),Xu=Wn(eS),nS=_({},ds,{animationName:0,elapsedTime:0,pseudoElement:0}),iS=Wn(nS),aS=_({},ds,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),sS=Wn(aS),rS=_({},ds,{data:0}),Kp=Wn(rS),oS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},lS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function uS(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=cS[e])?!!n[e]:!1}function Wu(){return uS}var fS=_({},mo,{key:function(e){if(e.key){var n=oS[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Dl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?lS[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wu,charCode:function(e){return e.type==="keypress"?Dl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Dl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),hS=Wn(fS),dS=_({},Nl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qp=Wn(dS),pS=_({},mo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wu}),mS=Wn(pS),gS=_({},ds,{propertyName:0,elapsedTime:0,pseudoElement:0}),_S=Wn(gS),vS=_({},Nl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),xS=Wn(vS),SS=_({},ds,{newState:0,oldState:0}),yS=Wn(SS),MS=[9,13,27,32],qu=$i&&"CompositionEvent"in window,_o=null;$i&&"documentMode"in document&&(_o=document.documentMode);var ES=$i&&"TextEvent"in window&&!_o,Jp=$i&&(!qu||_o&&8<_o&&11>=_o),$p=" ",tm=!1;function em(e,n){switch(e){case"keyup":return MS.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function nm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Js=!1;function bS(e,n){switch(e){case"compositionend":return nm(n);case"keypress":return n.which!==32?null:(tm=!0,$p);case"textInput":return e=n.data,e===$p&&tm?null:e;default:return null}}function TS(e,n){if(Js)return e==="compositionend"||!qu&&em(e,n)?(e=Yp(),wl=Gu=Da=null,Js=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Jp&&n.locale!=="ko"?null:n.data;default:return null}}var AS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function im(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!AS[e.type]:n==="textarea"}function am(e,n,a,o){Ks?Qs?Qs.push(o):Qs=[o]:Ks=o,n=Mc(n,"onChange"),0<n.length&&(a=new Ll("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var vo=null,xo=null;function RS(e){H0(e,0)}function Ol(e){var n=hs(e);if(Be(n))return e}function sm(e,n){if(e==="change")return n}var rm=!1;if($i){var Yu;if($i){var ju="oninput"in document;if(!ju){var om=document.createElement("div");om.setAttribute("oninput","return;"),ju=typeof om.oninput=="function"}Yu=ju}else Yu=!1;rm=Yu&&(!document.documentMode||9<document.documentMode)}function lm(){vo&&(vo.detachEvent("onpropertychange",cm),xo=vo=null)}function cm(e){if(e.propertyName==="value"&&Ol(xo)){var n=[];am(n,xo,e,Iu(e)),qp(RS,n)}}function CS(e,n,a){e==="focusin"?(lm(),vo=n,xo=a,vo.attachEvent("onpropertychange",cm)):e==="focusout"&&lm()}function wS(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ol(xo)}function DS(e,n){if(e==="click")return Ol(n)}function US(e,n){if(e==="input"||e==="change")return Ol(n)}function LS(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var ti=typeof Object.is=="function"?Object.is:LS;function So(e,n){if(ti(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!$e.call(n,u)||!ti(e[u],n[u]))return!1}return!0}function um(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function fm(e,n){var a=um(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=um(a)}}function hm(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?hm(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function dm(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Jt(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Jt(e.document)}return n}function Zu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var NS=$i&&"documentMode"in document&&11>=document.documentMode,$s=null,Ku=null,yo=null,Qu=!1;function pm(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Qu||$s==null||$s!==Jt(o)||(o=$s,"selectionStart"in o&&Zu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),yo&&So(yo,o)||(yo=o,o=Mc(Ku,"onSelect"),0<o.length&&(n=new Ll("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=$s)))}function ps(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var tr={animationend:ps("Animation","AnimationEnd"),animationiteration:ps("Animation","AnimationIteration"),animationstart:ps("Animation","AnimationStart"),transitionrun:ps("Transition","TransitionRun"),transitionstart:ps("Transition","TransitionStart"),transitioncancel:ps("Transition","TransitionCancel"),transitionend:ps("Transition","TransitionEnd")},Ju={},mm={};$i&&(mm=document.createElement("div").style,"AnimationEvent"in window||(delete tr.animationend.animation,delete tr.animationiteration.animation,delete tr.animationstart.animation),"TransitionEvent"in window||delete tr.transitionend.transition);function ms(e){if(Ju[e])return Ju[e];if(!tr[e])return e;var n=tr[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in mm)return Ju[e]=n[a];return e}var gm=ms("animationend"),_m=ms("animationiteration"),vm=ms("animationstart"),OS=ms("transitionrun"),PS=ms("transitionstart"),zS=ms("transitioncancel"),xm=ms("transitionend"),Sm=new Map,$u="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");$u.push("scrollEnd");function Ci(e,n){Sm.set(e,n),rt(n,[e])}var Pl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},di=[],er=0,tf=0;function zl(){for(var e=er,n=tf=er=0;n<e;){var a=di[n];di[n++]=null;var o=di[n];di[n++]=null;var u=di[n];di[n++]=null;var f=di[n];if(di[n++]=null,o!==null&&u!==null){var S=o.pending;S===null?u.next=u:(u.next=S.next,S.next=u),o.pending=u}f!==0&&ym(a,u,f)}}function Bl(e,n,a,o){di[er++]=e,di[er++]=n,di[er++]=a,di[er++]=o,tf|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function ef(e,n,a,o){return Bl(e,n,a,o),Il(e)}function gs(e,n){return Bl(e,null,null,n),Il(e)}function ym(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-It(a),e=f.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function Il(e){if(50<ko)throw ko=0,fh=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var nr={};function BS(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ei(e,n,a,o){return new BS(e,n,a,o)}function nf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ta(e,n){var a=e.alternate;return a===null?(a=ei(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Mm(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Fl(e,n,a,o,u,f){var S=0;if(o=e,typeof e=="function")nf(e)&&(S=1);else if(typeof e=="string")S=Vy(e,a,xt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case b:return e=ei(31,a,n,u),e.elementType=b,e.lanes=f,e;case w:return _s(a.children,u,f,n);case x:S=8,u|=24;break;case g:return e=ei(12,a,n,u|2),e.elementType=g,e.lanes=f,e;case z:return e=ei(13,a,n,u),e.elementType=z,e.lanes=f,e;case O:return e=ei(19,a,n,u),e.elementType=O,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case U:S=10;break t;case P:S=9;break t;case L:S=11;break t;case D:S=14;break t;case V:S=16,o=null;break t}S=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=ei(S,a,n,u),n.elementType=e,n.type=o,n.lanes=f,n}function _s(e,n,a,o){return e=ei(7,e,o,n),e.lanes=a,e}function af(e,n,a){return e=ei(6,e,null,n),e.lanes=a,e}function Em(e){var n=ei(18,null,null,0);return n.stateNode=e,n}function sf(e,n,a){return n=ei(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var bm=new WeakMap;function pi(e,n){if(typeof e=="object"&&e!==null){var a=bm.get(e);return a!==void 0?a:(n={value:e,source:n,stack:k(n)},bm.set(e,n),n)}return{value:e,source:n,stack:k(n)}}var ir=[],ar=0,Hl=null,Mo=0,mi=[],gi=0,Ua=null,Fi=1,Hi="";function ea(e,n){ir[ar++]=Mo,ir[ar++]=Hl,Hl=e,Mo=n}function Tm(e,n,a){mi[gi++]=Fi,mi[gi++]=Hi,mi[gi++]=Ua,Ua=e;var o=Fi;e=Hi;var u=32-It(o)-1;o&=~(1<<u),a+=1;var f=32-It(n)+u;if(30<f){var S=u-u%5;f=(o&(1<<S)-1).toString(32),o>>=S,u-=S,Fi=1<<32-It(n)+u|a<<u|o,Hi=f+e}else Fi=1<<f|a<<u|o,Hi=e}function rf(e){e.return!==null&&(ea(e,1),Tm(e,1,0))}function of(e){for(;e===Hl;)Hl=ir[--ar],ir[ar]=null,Mo=ir[--ar],ir[ar]=null;for(;e===Ua;)Ua=mi[--gi],mi[gi]=null,Hi=mi[--gi],mi[gi]=null,Fi=mi[--gi],mi[gi]=null}function Am(e,n){mi[gi++]=Fi,mi[gi++]=Hi,mi[gi++]=Ua,Fi=n.id,Hi=n.overflow,Ua=e}var Cn=null,Qe=null,Te=!1,La=null,_i=!1,lf=Error(s(519));function Na(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Eo(pi(n,e)),lf}function Rm(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[ln]=e,n[Mn]=o,a){case"dialog":Me("cancel",n),Me("close",n);break;case"iframe":case"object":case"embed":Me("load",n);break;case"video":case"audio":for(a=0;a<Wo.length;a++)Me(Wo[a],n);break;case"source":Me("error",n);break;case"img":case"image":case"link":Me("error",n),Me("load",n);break;case"details":Me("toggle",n);break;case"input":Me("invalid",n),Qi(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Me("invalid",n);break;case"textarea":Me("invalid",n),Tn(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||X0(n.textContent,a)?(o.popover!=null&&(Me("beforetoggle",n),Me("toggle",n)),o.onScroll!=null&&Me("scroll",n),o.onScrollEnd!=null&&Me("scrollend",n),o.onClick!=null&&(n.onclick=Ji),n=!0):n=!1,n||Na(e,!0)}function Cm(e){for(Cn=e.return;Cn;)switch(Cn.tag){case 5:case 31:case 13:_i=!1;return;case 27:case 3:_i=!0;return;default:Cn=Cn.return}}function sr(e){if(e!==Cn)return!1;if(!Te)return Cm(e),Te=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Ah(e.type,e.memoizedProps)),a=!a),a&&Qe&&Na(e),Cm(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Qe=$0(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Qe=$0(e)}else n===27?(n=Qe,Ya(e.type)?(e=Uh,Uh=null,Qe=e):Qe=n):Qe=Cn?xi(e.stateNode.nextSibling):null;return!0}function vs(){Qe=Cn=null,Te=!1}function cf(){var e=La;return e!==null&&(Zn===null?Zn=e:Zn.push.apply(Zn,e),La=null),e}function Eo(e){La===null?La=[e]:La.push(e)}var uf=N(null),xs=null,na=null;function Oa(e,n,a){ht(uf,n._currentValue),n._currentValue=a}function ia(e){e._currentValue=uf.current,et(uf)}function ff(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function hf(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var S=u.child;f=f.firstContext;t:for(;f!==null;){var R=f;f=u;for(var G=0;G<n.length;G++)if(R.context===n[G]){f.lanes|=a,R=f.alternate,R!==null&&(R.lanes|=a),ff(f.return,a,e),o||(S=null);break t}f=R.next}}else if(u.tag===18){if(S=u.return,S===null)throw Error(s(341));S.lanes|=a,f=S.alternate,f!==null&&(f.lanes|=a),ff(S,a,e),S=null}else S=u.child;if(S!==null)S.return=u;else for(S=u;S!==null;){if(S===e){S=null;break}if(u=S.sibling,u!==null){u.return=S.return,S=u;break}S=S.return}u=S}}function rr(e,n,a,o){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var S=u.alternate;if(S===null)throw Error(s(387));if(S=S.memoizedProps,S!==null){var R=u.type;ti(u.pendingProps.value,S.value)||(e!==null?e.push(R):e=[R])}}else if(u===$.current){if(S=u.alternate,S===null)throw Error(s(387));S.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Ko):e=[Ko])}u=u.return}e!==null&&hf(n,e,a,o),n.flags|=262144}function Gl(e){for(e=e.firstContext;e!==null;){if(!ti(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ss(e){xs=e,na=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function wn(e){return wm(xs,e)}function Vl(e,n){return xs===null&&Ss(e),wm(e,n)}function wm(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},na===null){if(e===null)throw Error(s(308));na=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else na=na.next=n;return a}var IS=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},FS=r.unstable_scheduleCallback,HS=r.unstable_NormalPriority,cn={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function df(){return{controller:new IS,data:new Map,refCount:0}}function bo(e){e.refCount--,e.refCount===0&&FS(HS,function(){e.controller.abort()})}var To=null,pf=0,or=0,lr=null;function GS(e,n){if(To===null){var a=To=[];pf=0,or=_h(),lr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return pf++,n.then(Dm,Dm),n}function Dm(){if(--pf===0&&To!==null){lr!==null&&(lr.status="fulfilled");var e=To;To=null,or=0,lr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function VS(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Um=I.S;I.S=function(e,n){p0=E(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&GS(e,n),Um!==null&&Um(e,n)};var ys=N(null);function mf(){var e=ys.current;return e!==null?e:je.pooledCache}function kl(e,n){n===null?ht(ys,ys.current):ht(ys,n.pool)}function Lm(){var e=mf();return e===null?null:{parent:cn._currentValue,pool:e}}var cr=Error(s(460)),gf=Error(s(474)),Xl=Error(s(542)),Wl={then:function(){}};function Nm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Om(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Ji,Ji),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,zm(e),e;default:if(typeof n.status=="string")n.then(Ji,Ji);else{if(e=je,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,zm(e),e}throw Es=n,cr}}function Ms(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Es=a,cr):a}}var Es=null;function Pm(){if(Es===null)throw Error(s(459));var e=Es;return Es=null,e}function zm(e){if(e===cr||e===Xl)throw Error(s(483))}var ur=null,Ao=0;function ql(e){var n=Ao;return Ao+=1,ur===null&&(ur=[]),Om(ur,e,n)}function Ro(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Yl(e,n){throw n.$$typeof===M?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Bm(e){function n(K,X){if(e){var at=K.deletions;at===null?(K.deletions=[X],K.flags|=16):at.push(X)}}function a(K,X){if(!e)return null;for(;X!==null;)n(K,X),X=X.sibling;return null}function o(K){for(var X=new Map;K!==null;)K.key!==null?X.set(K.key,K):X.set(K.index,K),K=K.sibling;return X}function u(K,X){return K=ta(K,X),K.index=0,K.sibling=null,K}function f(K,X,at){return K.index=at,e?(at=K.alternate,at!==null?(at=at.index,at<X?(K.flags|=67108866,X):at):(K.flags|=67108866,X)):(K.flags|=1048576,X)}function S(K){return e&&K.alternate===null&&(K.flags|=67108866),K}function R(K,X,at,vt){return X===null||X.tag!==6?(X=af(at,K.mode,vt),X.return=K,X):(X=u(X,at),X.return=K,X)}function G(K,X,at,vt){var $t=at.type;return $t===w?gt(K,X,at.props.children,vt,at.key):X!==null&&(X.elementType===$t||typeof $t=="object"&&$t!==null&&$t.$$typeof===V&&Ms($t)===X.type)?(X=u(X,at.props),Ro(X,at),X.return=K,X):(X=Fl(at.type,at.key,at.props,null,K.mode,vt),Ro(X,at),X.return=K,X)}function st(K,X,at,vt){return X===null||X.tag!==4||X.stateNode.containerInfo!==at.containerInfo||X.stateNode.implementation!==at.implementation?(X=sf(at,K.mode,vt),X.return=K,X):(X=u(X,at.children||[]),X.return=K,X)}function gt(K,X,at,vt,$t){return X===null||X.tag!==7?(X=_s(at,K.mode,vt,$t),X.return=K,X):(X=u(X,at),X.return=K,X)}function St(K,X,at){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=af(""+X,K.mode,at),X.return=K,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case y:return at=Fl(X.type,X.key,X.props,null,K.mode,at),Ro(at,X),at.return=K,at;case T:return X=sf(X,K.mode,at),X.return=K,X;case V:return X=Ms(X),St(K,X,at)}if(it(X)||Q(X))return X=_s(X,K.mode,at,null),X.return=K,X;if(typeof X.then=="function")return St(K,ql(X),at);if(X.$$typeof===U)return St(K,Vl(K,X),at);Yl(K,X)}return null}function ot(K,X,at,vt){var $t=X!==null?X.key:null;if(typeof at=="string"&&at!==""||typeof at=="number"||typeof at=="bigint")return $t!==null?null:R(K,X,""+at,vt);if(typeof at=="object"&&at!==null){switch(at.$$typeof){case y:return at.key===$t?G(K,X,at,vt):null;case T:return at.key===$t?st(K,X,at,vt):null;case V:return at=Ms(at),ot(K,X,at,vt)}if(it(at)||Q(at))return $t!==null?null:gt(K,X,at,vt,null);if(typeof at.then=="function")return ot(K,X,ql(at),vt);if(at.$$typeof===U)return ot(K,X,Vl(K,at),vt);Yl(K,at)}return null}function ut(K,X,at,vt,$t){if(typeof vt=="string"&&vt!==""||typeof vt=="number"||typeof vt=="bigint")return K=K.get(at)||null,R(X,K,""+vt,$t);if(typeof vt=="object"&&vt!==null){switch(vt.$$typeof){case y:return K=K.get(vt.key===null?at:vt.key)||null,G(X,K,vt,$t);case T:return K=K.get(vt.key===null?at:vt.key)||null,st(X,K,vt,$t);case V:return vt=Ms(vt),ut(K,X,at,vt,$t)}if(it(vt)||Q(vt))return K=K.get(at)||null,gt(X,K,vt,$t,null);if(typeof vt.then=="function")return ut(K,X,at,ql(vt),$t);if(vt.$$typeof===U)return ut(K,X,at,Vl(X,vt),$t);Yl(X,vt)}return null}function Xt(K,X,at,vt){for(var $t=null,Ue=null,Zt=X,_e=X=0,be=null;Zt!==null&&_e<at.length;_e++){Zt.index>_e?(be=Zt,Zt=null):be=Zt.sibling;var Le=ot(K,Zt,at[_e],vt);if(Le===null){Zt===null&&(Zt=be);break}e&&Zt&&Le.alternate===null&&n(K,Zt),X=f(Le,X,_e),Ue===null?$t=Le:Ue.sibling=Le,Ue=Le,Zt=be}if(_e===at.length)return a(K,Zt),Te&&ea(K,_e),$t;if(Zt===null){for(;_e<at.length;_e++)Zt=St(K,at[_e],vt),Zt!==null&&(X=f(Zt,X,_e),Ue===null?$t=Zt:Ue.sibling=Zt,Ue=Zt);return Te&&ea(K,_e),$t}for(Zt=o(Zt);_e<at.length;_e++)be=ut(Zt,K,_e,at[_e],vt),be!==null&&(e&&be.alternate!==null&&Zt.delete(be.key===null?_e:be.key),X=f(be,X,_e),Ue===null?$t=be:Ue.sibling=be,Ue=be);return e&&Zt.forEach(function(Ja){return n(K,Ja)}),Te&&ea(K,_e),$t}function ae(K,X,at,vt){if(at==null)throw Error(s(151));for(var $t=null,Ue=null,Zt=X,_e=X=0,be=null,Le=at.next();Zt!==null&&!Le.done;_e++,Le=at.next()){Zt.index>_e?(be=Zt,Zt=null):be=Zt.sibling;var Ja=ot(K,Zt,Le.value,vt);if(Ja===null){Zt===null&&(Zt=be);break}e&&Zt&&Ja.alternate===null&&n(K,Zt),X=f(Ja,X,_e),Ue===null?$t=Ja:Ue.sibling=Ja,Ue=Ja,Zt=be}if(Le.done)return a(K,Zt),Te&&ea(K,_e),$t;if(Zt===null){for(;!Le.done;_e++,Le=at.next())Le=St(K,Le.value,vt),Le!==null&&(X=f(Le,X,_e),Ue===null?$t=Le:Ue.sibling=Le,Ue=Le);return Te&&ea(K,_e),$t}for(Zt=o(Zt);!Le.done;_e++,Le=at.next())Le=ut(Zt,K,_e,Le.value,vt),Le!==null&&(e&&Le.alternate!==null&&Zt.delete(Le.key===null?_e:Le.key),X=f(Le,X,_e),Ue===null?$t=Le:Ue.sibling=Le,Ue=Le);return e&&Zt.forEach(function($y){return n(K,$y)}),Te&&ea(K,_e),$t}function We(K,X,at,vt){if(typeof at=="object"&&at!==null&&at.type===w&&at.key===null&&(at=at.props.children),typeof at=="object"&&at!==null){switch(at.$$typeof){case y:t:{for(var $t=at.key;X!==null;){if(X.key===$t){if($t=at.type,$t===w){if(X.tag===7){a(K,X.sibling),vt=u(X,at.props.children),vt.return=K,K=vt;break t}}else if(X.elementType===$t||typeof $t=="object"&&$t!==null&&$t.$$typeof===V&&Ms($t)===X.type){a(K,X.sibling),vt=u(X,at.props),Ro(vt,at),vt.return=K,K=vt;break t}a(K,X);break}else n(K,X);X=X.sibling}at.type===w?(vt=_s(at.props.children,K.mode,vt,at.key),vt.return=K,K=vt):(vt=Fl(at.type,at.key,at.props,null,K.mode,vt),Ro(vt,at),vt.return=K,K=vt)}return S(K);case T:t:{for($t=at.key;X!==null;){if(X.key===$t)if(X.tag===4&&X.stateNode.containerInfo===at.containerInfo&&X.stateNode.implementation===at.implementation){a(K,X.sibling),vt=u(X,at.children||[]),vt.return=K,K=vt;break t}else{a(K,X);break}else n(K,X);X=X.sibling}vt=sf(at,K.mode,vt),vt.return=K,K=vt}return S(K);case V:return at=Ms(at),We(K,X,at,vt)}if(it(at))return Xt(K,X,at,vt);if(Q(at)){if($t=Q(at),typeof $t!="function")throw Error(s(150));return at=$t.call(at),ae(K,X,at,vt)}if(typeof at.then=="function")return We(K,X,ql(at),vt);if(at.$$typeof===U)return We(K,X,Vl(K,at),vt);Yl(K,at)}return typeof at=="string"&&at!==""||typeof at=="number"||typeof at=="bigint"?(at=""+at,X!==null&&X.tag===6?(a(K,X.sibling),vt=u(X,at),vt.return=K,K=vt):(a(K,X),vt=af(at,K.mode,vt),vt.return=K,K=vt),S(K)):a(K,X)}return function(K,X,at,vt){try{Ao=0;var $t=We(K,X,at,vt);return ur=null,$t}catch(Zt){if(Zt===cr||Zt===Xl)throw Zt;var Ue=ei(29,Zt,null,K.mode);return Ue.lanes=vt,Ue.return=K,Ue}}}var bs=Bm(!0),Im=Bm(!1),Pa=!1;function _f(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function vf(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function za(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ba(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Pe&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Il(e),ym(e,null,a),n}return Bl(e,o,n,a),Il(e)}function Co(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,oo(e,a)}}function xf(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=S:f=f.next=S,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Sf=!1;function wo(){if(Sf){var e=lr;if(e!==null)throw e}}function Do(e,n,a,o){Sf=!1;var u=e.updateQueue;Pa=!1;var f=u.firstBaseUpdate,S=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var G=R,st=G.next;G.next=null,S===null?f=st:S.next=st,S=G;var gt=e.alternate;gt!==null&&(gt=gt.updateQueue,R=gt.lastBaseUpdate,R!==S&&(R===null?gt.firstBaseUpdate=st:R.next=st,gt.lastBaseUpdate=G))}if(f!==null){var St=u.baseState;S=0,gt=st=G=null,R=f;do{var ot=R.lane&-536870913,ut=ot!==R.lane;if(ut?(Ee&ot)===ot:(o&ot)===ot){ot!==0&&ot===or&&(Sf=!0),gt!==null&&(gt=gt.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});t:{var Xt=e,ae=R;ot=n;var We=a;switch(ae.tag){case 1:if(Xt=ae.payload,typeof Xt=="function"){St=Xt.call(We,St,ot);break t}St=Xt;break t;case 3:Xt.flags=Xt.flags&-65537|128;case 0:if(Xt=ae.payload,ot=typeof Xt=="function"?Xt.call(We,St,ot):Xt,ot==null)break t;St=_({},St,ot);break t;case 2:Pa=!0}}ot=R.callback,ot!==null&&(e.flags|=64,ut&&(e.flags|=8192),ut=u.callbacks,ut===null?u.callbacks=[ot]:ut.push(ot))}else ut={lane:ot,tag:R.tag,payload:R.payload,callback:R.callback,next:null},gt===null?(st=gt=ut,G=St):gt=gt.next=ut,S|=ot;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;ut=R,R=ut.next,ut.next=null,u.lastBaseUpdate=ut,u.shared.pending=null}}while(!0);gt===null&&(G=St),u.baseState=G,u.firstBaseUpdate=st,u.lastBaseUpdate=gt,f===null&&(u.shared.lanes=0),Va|=S,e.lanes=S,e.memoizedState=St}}function Fm(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function Hm(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Fm(a[e],n)}var fr=N(null),jl=N(0);function Gm(e,n){e=ha,ht(jl,e),ht(fr,n),ha=e|n.baseLanes}function yf(){ht(jl,ha),ht(fr,fr.current)}function Mf(){ha=jl.current,et(fr),et(jl)}var ni=N(null),vi=null;function Ia(e){var n=e.alternate;ht(rn,rn.current&1),ht(ni,e),vi===null&&(n===null||fr.current!==null||n.memoizedState!==null)&&(vi=e)}function Ef(e){ht(rn,rn.current),ht(ni,e),vi===null&&(vi=e)}function Vm(e){e.tag===22?(ht(rn,rn.current),ht(ni,e),vi===null&&(vi=e)):Fa()}function Fa(){ht(rn,rn.current),ht(ni,ni.current)}function ii(e){et(ni),vi===e&&(vi=null),et(rn)}var rn=N(0);function Zl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||wh(a)||Dh(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var aa=0,pe=null,ke=null,un=null,Kl=!1,hr=!1,Ts=!1,Ql=0,Uo=0,dr=null,kS=0;function nn(){throw Error(s(321))}function bf(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!ti(e[a],n[a]))return!1;return!0}function Tf(e,n,a,o,u,f){return aa=f,pe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,I.H=e===null||e.memoizedState===null?Tg:Hf,Ts=!1,f=a(o,u),Ts=!1,hr&&(f=Xm(n,a,o,u)),km(e),f}function km(e){I.H=Oo;var n=ke!==null&&ke.next!==null;if(aa=0,un=ke=pe=null,Kl=!1,Uo=0,dr=null,n)throw Error(s(300));e===null||fn||(e=e.dependencies,e!==null&&Gl(e)&&(fn=!0))}function Xm(e,n,a,o){pe=e;var u=0;do{if(hr&&(dr=null),Uo=0,hr=!1,25<=u)throw Error(s(301));if(u+=1,un=ke=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}I.H=Ag,f=n(a,o)}while(hr);return f}function XS(){var e=I.H,n=e.useState()[0];return n=typeof n.then=="function"?Lo(n):n,e=e.useState()[0],(ke!==null?ke.memoizedState:null)!==e&&(pe.flags|=1024),n}function Af(){var e=Ql!==0;return Ql=0,e}function Rf(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Cf(e){if(Kl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Kl=!1}aa=0,un=ke=pe=null,hr=!1,Uo=Ql=0,dr=null}function Hn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return un===null?pe.memoizedState=un=e:un=un.next=e,un}function on(){if(ke===null){var e=pe.alternate;e=e!==null?e.memoizedState:null}else e=ke.next;var n=un===null?pe.memoizedState:un.next;if(n!==null)un=n,ke=e;else{if(e===null)throw pe.alternate===null?Error(s(467)):Error(s(310));ke=e,e={memoizedState:ke.memoizedState,baseState:ke.baseState,baseQueue:ke.baseQueue,queue:ke.queue,next:null},un===null?pe.memoizedState=un=e:un=un.next=e}return un}function Jl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Lo(e){var n=Uo;return Uo+=1,dr===null&&(dr=[]),e=Om(dr,e,n),n=pe,(un===null?n.memoizedState:un.next)===null&&(n=n.alternate,I.H=n===null||n.memoizedState===null?Tg:Hf),e}function $l(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Lo(e);if(e.$$typeof===U)return wn(e)}throw Error(s(438,String(e)))}function wf(e){var n=null,a=pe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=pe.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Jl(),pe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=A;return n.index++,a}function sa(e,n){return typeof n=="function"?n(e):n}function tc(e){var n=on();return Df(n,ke,e)}function Df(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,f=o.pending;if(f!==null){if(u!==null){var S=u.next;u.next=f.next,f.next=S}n.baseQueue=u=f,o.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var R=S=null,G=null,st=n,gt=!1;do{var St=st.lane&-536870913;if(St!==st.lane?(Ee&St)===St:(aa&St)===St){var ot=st.revertLane;if(ot===0)G!==null&&(G=G.next={lane:0,revertLane:0,gesture:null,action:st.action,hasEagerState:st.hasEagerState,eagerState:st.eagerState,next:null}),St===or&&(gt=!0);else if((aa&ot)===ot){st=st.next,ot===or&&(gt=!0);continue}else St={lane:0,revertLane:st.revertLane,gesture:null,action:st.action,hasEagerState:st.hasEagerState,eagerState:st.eagerState,next:null},G===null?(R=G=St,S=f):G=G.next=St,pe.lanes|=ot,Va|=ot;St=st.action,Ts&&a(f,St),f=st.hasEagerState?st.eagerState:a(f,St)}else ot={lane:St,revertLane:st.revertLane,gesture:st.gesture,action:st.action,hasEagerState:st.hasEagerState,eagerState:st.eagerState,next:null},G===null?(R=G=ot,S=f):G=G.next=ot,pe.lanes|=St,Va|=St;st=st.next}while(st!==null&&st!==n);if(G===null?S=f:G.next=R,!ti(f,e.memoizedState)&&(fn=!0,gt&&(a=lr,a!==null)))throw a;e.memoizedState=f,e.baseState=S,e.baseQueue=G,o.lastRenderedState=f}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Uf(e){var n=on(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var S=u=u.next;do f=e(f,S.action),S=S.next;while(S!==u);ti(f,n.memoizedState)||(fn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function Wm(e,n,a){var o=pe,u=on(),f=Te;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var S=!ti((ke||u).memoizedState,a);if(S&&(u.memoizedState=a,fn=!0),u=u.queue,Of(jm.bind(null,o,u,e),[e]),u.getSnapshot!==n||S||un!==null&&un.memoizedState.tag&1){if(o.flags|=2048,pr(9,{destroy:void 0},Ym.bind(null,o,u,a,n),null),je===null)throw Error(s(349));f||(aa&127)!==0||qm(o,n,a)}return a}function qm(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=pe.updateQueue,n===null?(n=Jl(),pe.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Ym(e,n,a,o){n.value=a,n.getSnapshot=o,Zm(n)&&Km(e)}function jm(e,n,a){return a(function(){Zm(n)&&Km(e)})}function Zm(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!ti(e,a)}catch{return!0}}function Km(e){var n=gs(e,2);n!==null&&Kn(n,e,2)}function Lf(e){var n=Hn();if(typeof e=="function"){var a=e;if(e=a(),Ts){Ht(!0);try{a()}finally{Ht(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:e},n}function Qm(e,n,a,o){return e.baseState=a,Df(e,ke,typeof o=="function"?o:sa)}function WS(e,n,a,o,u){if(ic(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){f.listeners.push(S)}};I.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,Jm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Jm(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var f=I.T,S={};I.T=S;try{var R=a(u,o),G=I.S;G!==null&&G(S,R),$m(e,n,R)}catch(st){Nf(e,n,st)}finally{f!==null&&S.types!==null&&(f.types=S.types),I.T=f}}else try{f=a(u,o),$m(e,n,f)}catch(st){Nf(e,n,st)}}function $m(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){tg(e,n,o)},function(o){return Nf(e,n,o)}):tg(e,n,a)}function tg(e,n,a){n.status="fulfilled",n.value=a,eg(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Jm(e,a)))}function Nf(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,eg(n),n=n.next;while(n!==o)}e.action=null}function eg(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function ng(e,n){return n}function ig(e,n){if(Te){var a=je.formState;if(a!==null){t:{var o=pe;if(Te){if(Qe){e:{for(var u=Qe,f=_i;u.nodeType!==8;){if(!f){u=null;break e}if(u=xi(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Qe=xi(u.nextSibling),o=u.data==="F!";break t}}Na(o)}o=!1}o&&(n=a[0])}}return a=Hn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ng,lastRenderedState:n},a.queue=o,a=Mg.bind(null,pe,o),o.dispatch=a,o=Lf(!1),f=Ff.bind(null,pe,!1,o.queue),o=Hn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=WS.bind(null,pe,u,f,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function ag(e){var n=on();return sg(n,ke,e)}function sg(e,n,a){if(n=Df(e,n,ng)[0],e=tc(sa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=Lo(n)}catch(S){throw S===cr?Xl:S}else o=n;n=on();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(pe.flags|=2048,pr(9,{destroy:void 0},qS.bind(null,u,a),null)),[o,f,e]}function qS(e,n){e.action=n}function rg(e){var n=on(),a=ke;if(a!==null)return sg(n,a,e);on(),n=n.memoizedState,a=on();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function pr(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=pe.updateQueue,n===null&&(n=Jl(),pe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function og(){return on().memoizedState}function ec(e,n,a,o){var u=Hn();pe.flags|=e,u.memoizedState=pr(1|n,{destroy:void 0},a,o===void 0?null:o)}function nc(e,n,a,o){var u=on();o=o===void 0?null:o;var f=u.memoizedState.inst;ke!==null&&o!==null&&bf(o,ke.memoizedState.deps)?u.memoizedState=pr(n,f,a,o):(pe.flags|=e,u.memoizedState=pr(1|n,f,a,o))}function lg(e,n){ec(8390656,8,e,n)}function Of(e,n){nc(2048,8,e,n)}function YS(e){pe.flags|=4;var n=pe.updateQueue;if(n===null)n=Jl(),pe.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function cg(e){var n=on().memoizedState;return YS({ref:n,nextImpl:e}),function(){if((Pe&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function ug(e,n){return nc(4,2,e,n)}function fg(e,n){return nc(4,4,e,n)}function hg(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function dg(e,n,a){a=a!=null?a.concat([e]):null,nc(4,4,hg.bind(null,n,e),a)}function Pf(){}function pg(e,n){var a=on();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&bf(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function mg(e,n){var a=on();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&bf(n,o[1]))return o[0];if(o=e(),Ts){Ht(!0);try{e()}finally{Ht(!1)}}return a.memoizedState=[o,n],o}function zf(e,n,a){return a===void 0||(aa&1073741824)!==0&&(Ee&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=g0(),pe.lanes|=e,Va|=e,a)}function gg(e,n,a,o){return ti(a,n)?a:fr.current!==null?(e=zf(e,a,o),ti(e,n)||(fn=!0),e):(aa&42)===0||(aa&1073741824)!==0&&(Ee&261930)===0?(fn=!0,e.memoizedState=a):(e=g0(),pe.lanes|=e,Va|=e,n)}function _g(e,n,a,o,u){var f=F.p;F.p=f!==0&&8>f?f:8;var S=I.T,R={};I.T=R,Ff(e,!1,n,a);try{var G=u(),st=I.S;if(st!==null&&st(R,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var gt=VS(G,o);No(e,n,gt,ri(e))}else No(e,n,o,ri(e))}catch(St){No(e,n,{then:function(){},status:"rejected",reason:St},ri())}finally{F.p=f,S!==null&&R.types!==null&&(S.types=R.types),I.T=S}}function jS(){}function Bf(e,n,a,o){if(e.tag!==5)throw Error(s(476));var u=vg(e).queue;_g(e,u,n,J,a===null?jS:function(){return xg(e),a(o)})}function vg(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:J,baseState:J,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:J},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function xg(e){var n=vg(e);n.next===null&&(n=e.alternate.memoizedState),No(e,n.next.queue,{},ri())}function If(){return wn(Ko)}function Sg(){return on().memoizedState}function yg(){return on().memoizedState}function ZS(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=ri();e=za(a);var o=Ba(n,e,a);o!==null&&(Kn(o,n,a),Co(o,n,a)),n={cache:df()},e.payload=n;return}n=n.return}}function KS(e,n,a){var o=ri();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},ic(e)?Eg(n,a):(a=ef(e,n,a,o),a!==null&&(Kn(a,e,o),bg(a,n,o)))}function Mg(e,n,a){var o=ri();No(e,n,a,o)}function No(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(ic(e))Eg(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var S=n.lastRenderedState,R=f(S,a);if(u.hasEagerState=!0,u.eagerState=R,ti(R,S))return Bl(e,n,u,0),je===null&&zl(),!1}catch{}if(a=ef(e,n,u,o),a!==null)return Kn(a,e,o),bg(a,n,o),!0}return!1}function Ff(e,n,a,o){if(o={lane:2,revertLane:_h(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},ic(e)){if(n)throw Error(s(479))}else n=ef(e,a,o,2),n!==null&&Kn(n,e,2)}function ic(e){var n=e.alternate;return e===pe||n!==null&&n===pe}function Eg(e,n){hr=Kl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function bg(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,oo(e,a)}}var Oo={readContext:wn,use:$l,useCallback:nn,useContext:nn,useEffect:nn,useImperativeHandle:nn,useLayoutEffect:nn,useInsertionEffect:nn,useMemo:nn,useReducer:nn,useRef:nn,useState:nn,useDebugValue:nn,useDeferredValue:nn,useTransition:nn,useSyncExternalStore:nn,useId:nn,useHostTransitionStatus:nn,useFormState:nn,useActionState:nn,useOptimistic:nn,useMemoCache:nn,useCacheRefresh:nn};Oo.useEffectEvent=nn;var Tg={readContext:wn,use:$l,useCallback:function(e,n){return Hn().memoizedState=[e,n===void 0?null:n],e},useContext:wn,useEffect:lg,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,ec(4194308,4,hg.bind(null,n,e),a)},useLayoutEffect:function(e,n){return ec(4194308,4,e,n)},useInsertionEffect:function(e,n){ec(4,2,e,n)},useMemo:function(e,n){var a=Hn();n=n===void 0?null:n;var o=e();if(Ts){Ht(!0);try{e()}finally{Ht(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Hn();if(a!==void 0){var u=a(n);if(Ts){Ht(!0);try{a(n)}finally{Ht(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=KS.bind(null,pe,e),[o.memoizedState,e]},useRef:function(e){var n=Hn();return e={current:e},n.memoizedState=e},useState:function(e){e=Lf(e);var n=e.queue,a=Mg.bind(null,pe,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Pf,useDeferredValue:function(e,n){var a=Hn();return zf(a,e,n)},useTransition:function(){var e=Lf(!1);return e=_g.bind(null,pe,e.queue,!0,!1),Hn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=pe,u=Hn();if(Te){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),je===null)throw Error(s(349));(Ee&127)!==0||qm(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,lg(jm.bind(null,o,f,e),[e]),o.flags|=2048,pr(9,{destroy:void 0},Ym.bind(null,o,f,a,n),null),a},useId:function(){var e=Hn(),n=je.identifierPrefix;if(Te){var a=Hi,o=Fi;a=(o&~(1<<32-It(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Ql++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=kS++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:If,useFormState:ig,useActionState:ig,useOptimistic:function(e){var n=Hn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Ff.bind(null,pe,!0,a),a.dispatch=n,[e,n]},useMemoCache:wf,useCacheRefresh:function(){return Hn().memoizedState=ZS.bind(null,pe)},useEffectEvent:function(e){var n=Hn(),a={impl:e};return n.memoizedState=a,function(){if((Pe&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Hf={readContext:wn,use:$l,useCallback:pg,useContext:wn,useEffect:Of,useImperativeHandle:dg,useInsertionEffect:ug,useLayoutEffect:fg,useMemo:mg,useReducer:tc,useRef:og,useState:function(){return tc(sa)},useDebugValue:Pf,useDeferredValue:function(e,n){var a=on();return gg(a,ke.memoizedState,e,n)},useTransition:function(){var e=tc(sa)[0],n=on().memoizedState;return[typeof e=="boolean"?e:Lo(e),n]},useSyncExternalStore:Wm,useId:Sg,useHostTransitionStatus:If,useFormState:ag,useActionState:ag,useOptimistic:function(e,n){var a=on();return Qm(a,ke,e,n)},useMemoCache:wf,useCacheRefresh:yg};Hf.useEffectEvent=cg;var Ag={readContext:wn,use:$l,useCallback:pg,useContext:wn,useEffect:Of,useImperativeHandle:dg,useInsertionEffect:ug,useLayoutEffect:fg,useMemo:mg,useReducer:Uf,useRef:og,useState:function(){return Uf(sa)},useDebugValue:Pf,useDeferredValue:function(e,n){var a=on();return ke===null?zf(a,e,n):gg(a,ke.memoizedState,e,n)},useTransition:function(){var e=Uf(sa)[0],n=on().memoizedState;return[typeof e=="boolean"?e:Lo(e),n]},useSyncExternalStore:Wm,useId:Sg,useHostTransitionStatus:If,useFormState:rg,useActionState:rg,useOptimistic:function(e,n){var a=on();return ke!==null?Qm(a,ke,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:wf,useCacheRefresh:yg};Ag.useEffectEvent=cg;function Gf(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:_({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Vf={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=ri(),u=za(o);u.payload=n,a!=null&&(u.callback=a),n=Ba(e,u,o),n!==null&&(Kn(n,e,o),Co(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=ri(),u=za(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ba(e,u,o),n!==null&&(Kn(n,e,o),Co(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=ri(),o=za(a);o.tag=2,n!=null&&(o.callback=n),n=Ba(e,o,a),n!==null&&(Kn(n,e,a),Co(n,e,a))}};function Rg(e,n,a,o,u,f,S){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,S):n.prototype&&n.prototype.isPureReactComponent?!So(a,o)||!So(u,f):!0}function Cg(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&Vf.enqueueReplaceState(n,n.state,null)}function As(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=_({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function wg(e){Pl(e)}function Dg(e){console.error(e)}function Ug(e){Pl(e)}function ac(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Lg(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function kf(e,n,a){return a=za(a),a.tag=3,a.payload={element:null},a.callback=function(){ac(e,n)},a}function Ng(e){return e=za(e),e.tag=3,e}function Og(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;e.payload=function(){return u(f)},e.callback=function(){Lg(n,a,o)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(e.callback=function(){Lg(n,a,o),typeof u!="function"&&(ka===null?ka=new Set([this]):ka.add(this));var R=o.stack;this.componentDidCatch(o.value,{componentStack:R!==null?R:""})})}function QS(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&rr(n,a,u,!0),a=ni.current,a!==null){switch(a.tag){case 31:case 13:return vi===null?gc():a.alternate===null&&an===0&&(an=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Wl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),ph(e,o,u)),!1;case 22:return a.flags|=65536,o===Wl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),ph(e,o,u)),!1}throw Error(s(435,a.tag))}return ph(e,o,u),gc(),!1}if(Te)return n=ni.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==lf&&(e=Error(s(422),{cause:o}),Eo(pi(e,a)))):(o!==lf&&(n=Error(s(423),{cause:o}),Eo(pi(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=pi(o,a),u=kf(e.stateNode,o,u),xf(e,u),an!==4&&(an=2)),!1;var f=Error(s(520),{cause:o});if(f=pi(f,a),Vo===null?Vo=[f]:Vo.push(f),an!==4&&(an=2),n===null)return!0;o=pi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=kf(a.stateNode,o,e),xf(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(ka===null||!ka.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Ng(u),Og(u,e,a,o),xf(a,u),!1}a=a.return}while(a!==null);return!1}var Xf=Error(s(461)),fn=!1;function Dn(e,n,a,o){n.child=e===null?Im(n,null,a,o):bs(n,e.child,a,o)}function Pg(e,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var S={};for(var R in o)R!=="ref"&&(S[R]=o[R])}else S=o;return Ss(n),o=Tf(e,n,a,S,f,u),R=Af(),e!==null&&!fn?(Rf(e,n,u),ra(e,n,u)):(Te&&R&&rf(n),n.flags|=1,Dn(e,n,o,u),n.child)}function zg(e,n,a,o,u){if(e===null){var f=a.type;return typeof f=="function"&&!nf(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Bg(e,n,f,o,u)):(e=Fl(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!Jf(e,u)){var S=f.memoizedProps;if(a=a.compare,a=a!==null?a:So,a(S,o)&&e.ref===n.ref)return ra(e,n,u)}return n.flags|=1,e=ta(f,o),e.ref=n.ref,e.return=n,n.child=e}function Bg(e,n,a,o,u){if(e!==null){var f=e.memoizedProps;if(So(f,o)&&e.ref===n.ref)if(fn=!1,n.pendingProps=o=f,Jf(e,u))(e.flags&131072)!==0&&(fn=!0);else return n.lanes=e.lanes,ra(e,n,u)}return Wf(e,n,a,o,u)}function Ig(e,n,a,o){var u=o.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,n.child=null;return Fg(e,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&kl(n,f!==null?f.cachePool:null),f!==null?Gm(n,f):yf(),Vm(n);else return o=n.lanes=536870912,Fg(e,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(kl(n,f.cachePool),Gm(n,f),Fa(),n.memoizedState=null):(e!==null&&kl(n,null),yf(),Fa());return Dn(e,n,u,a),n.child}function Po(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Fg(e,n,a,o,u){var f=mf();return f=f===null?null:{parent:cn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&kl(n,null),yf(),Vm(n),e!==null&&rr(e,n,o,!0),n.childLanes=u,null}function sc(e,n){return n=oc({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Hg(e,n,a){return bs(n,e.child,null,a),e=sc(n,n.pendingProps),e.flags|=2,ii(n),n.memoizedState=null,e}function JS(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Te){if(o.mode==="hidden")return e=sc(n,o),n.lanes=536870912,Po(null,e);if(Ef(n),(e=Qe)?(e=J0(e,_i),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ua!==null?{id:Fi,overflow:Hi}:null,retryLane:536870912,hydrationErrors:null},a=Em(e),a.return=n,n.child=a,Cn=n,Qe=null)):e=null,e===null)throw Na(n);return n.lanes=536870912,null}return sc(n,o)}var f=e.memoizedState;if(f!==null){var S=f.dehydrated;if(Ef(n),u)if(n.flags&256)n.flags&=-257,n=Hg(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(fn||rr(e,n,a,!1),u=(a&e.childLanes)!==0,fn||u){if(o=je,o!==null&&(S=Ws(o,a),S!==0&&S!==f.retryLane))throw f.retryLane=S,gs(e,S),Kn(o,e,S),Xf;gc(),n=Hg(e,n,a)}else e=f.treeContext,Qe=xi(S.nextSibling),Cn=n,Te=!0,La=null,_i=!1,e!==null&&Am(n,e),n=sc(n,o),n.flags|=4096;return n}return e=ta(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function rc(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Wf(e,n,a,o,u){return Ss(n),a=Tf(e,n,a,o,void 0,u),o=Af(),e!==null&&!fn?(Rf(e,n,u),ra(e,n,u)):(Te&&o&&rf(n),n.flags|=1,Dn(e,n,a,u),n.child)}function Gg(e,n,a,o,u,f){return Ss(n),n.updateQueue=null,a=Xm(n,o,a,u),km(e),o=Af(),e!==null&&!fn?(Rf(e,n,f),ra(e,n,f)):(Te&&o&&rf(n),n.flags|=1,Dn(e,n,a,f),n.child)}function Vg(e,n,a,o,u){if(Ss(n),n.stateNode===null){var f=nr,S=a.contextType;typeof S=="object"&&S!==null&&(f=wn(S)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Vf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},_f(n),S=a.contextType,f.context=typeof S=="object"&&S!==null?wn(S):nr,f.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(Gf(n,a,S,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(S=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),S!==f.state&&Vf.enqueueReplaceState(f,f.state,null),Do(n,o,f,u),wo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var R=n.memoizedProps,G=As(a,R);f.props=G;var st=f.context,gt=a.contextType;S=nr,typeof gt=="object"&&gt!==null&&(S=wn(gt));var St=a.getDerivedStateFromProps;gt=typeof St=="function"||typeof f.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,gt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(R||st!==S)&&Cg(n,f,o,S),Pa=!1;var ot=n.memoizedState;f.state=ot,Do(n,o,f,u),wo(),st=n.memoizedState,R||ot!==st||Pa?(typeof St=="function"&&(Gf(n,a,St,o),st=n.memoizedState),(G=Pa||Rg(n,a,G,o,ot,st,S))?(gt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=st),f.props=o,f.state=st,f.context=S,o=G):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,vf(e,n),S=n.memoizedProps,gt=As(a,S),f.props=gt,St=n.pendingProps,ot=f.context,st=a.contextType,G=nr,typeof st=="object"&&st!==null&&(G=wn(st)),R=a.getDerivedStateFromProps,(st=typeof R=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(S!==St||ot!==G)&&Cg(n,f,o,G),Pa=!1,ot=n.memoizedState,f.state=ot,Do(n,o,f,u),wo();var ut=n.memoizedState;S!==St||ot!==ut||Pa||e!==null&&e.dependencies!==null&&Gl(e.dependencies)?(typeof R=="function"&&(Gf(n,a,R,o),ut=n.memoizedState),(gt=Pa||Rg(n,a,gt,o,ot,ut,G)||e!==null&&e.dependencies!==null&&Gl(e.dependencies))?(st||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,ut,G),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,ut,G)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||S===e.memoizedProps&&ot===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&ot===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ut),f.props=o,f.state=ut,f.context=G,o=gt):(typeof f.componentDidUpdate!="function"||S===e.memoizedProps&&ot===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&ot===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,rc(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=bs(n,e.child,null,u),n.child=bs(n,null,a,u)):Dn(e,n,a,u),n.memoizedState=f.state,e=n.child):e=ra(e,n,u),e}function kg(e,n,a,o){return vs(),n.flags|=256,Dn(e,n,a,o),n.child}var qf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Yf(e){return{baseLanes:e,cachePool:Lm()}}function jf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=si),e}function Xg(e,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,S;if((S=f)||(S=e!==null&&e.memoizedState===null?!1:(rn.current&2)!==0),S&&(u=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,e===null){if(Te){if(u?Ia(n):Fa(),(e=Qe)?(e=J0(e,_i),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ua!==null?{id:Fi,overflow:Hi}:null,retryLane:536870912,hydrationErrors:null},a=Em(e),a.return=n,n.child=a,Cn=n,Qe=null)):e=null,e===null)throw Na(n);return Dh(e)?n.lanes=32:n.lanes=536870912,null}var R=o.children;return o=o.fallback,u?(Fa(),u=n.mode,R=oc({mode:"hidden",children:R},u),o=_s(o,u,a,null),R.return=n,o.return=n,R.sibling=o,n.child=R,o=n.child,o.memoizedState=Yf(a),o.childLanes=jf(e,S,a),n.memoizedState=qf,Po(null,o)):(Ia(n),Zf(n,R))}var G=e.memoizedState;if(G!==null&&(R=G.dehydrated,R!==null)){if(f)n.flags&256?(Ia(n),n.flags&=-257,n=Kf(e,n,a)):n.memoizedState!==null?(Fa(),n.child=e.child,n.flags|=128,n=null):(Fa(),R=o.fallback,u=n.mode,o=oc({mode:"visible",children:o.children},u),R=_s(R,u,a,null),R.flags|=2,o.return=n,R.return=n,o.sibling=R,n.child=o,bs(n,e.child,null,a),o=n.child,o.memoizedState=Yf(a),o.childLanes=jf(e,S,a),n.memoizedState=qf,n=Po(null,o));else if(Ia(n),Dh(R)){if(S=R.nextSibling&&R.nextSibling.dataset,S)var st=S.dgst;S=st,o=Error(s(419)),o.stack="",o.digest=S,Eo({value:o,source:null,stack:null}),n=Kf(e,n,a)}else if(fn||rr(e,n,a,!1),S=(a&e.childLanes)!==0,fn||S){if(S=je,S!==null&&(o=Ws(S,a),o!==0&&o!==G.retryLane))throw G.retryLane=o,gs(e,o),Kn(S,e,o),Xf;wh(R)||gc(),n=Kf(e,n,a)}else wh(R)?(n.flags|=192,n.child=e.child,n=null):(e=G.treeContext,Qe=xi(R.nextSibling),Cn=n,Te=!0,La=null,_i=!1,e!==null&&Am(n,e),n=Zf(n,o.children),n.flags|=4096);return n}return u?(Fa(),R=o.fallback,u=n.mode,G=e.child,st=G.sibling,o=ta(G,{mode:"hidden",children:o.children}),o.subtreeFlags=G.subtreeFlags&65011712,st!==null?R=ta(st,R):(R=_s(R,u,a,null),R.flags|=2),R.return=n,o.return=n,o.sibling=R,n.child=o,Po(null,o),o=n.child,R=e.child.memoizedState,R===null?R=Yf(a):(u=R.cachePool,u!==null?(G=cn._currentValue,u=u.parent!==G?{parent:G,pool:G}:u):u=Lm(),R={baseLanes:R.baseLanes|a,cachePool:u}),o.memoizedState=R,o.childLanes=jf(e,S,a),n.memoizedState=qf,Po(e.child,o)):(Ia(n),a=e.child,e=a.sibling,a=ta(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(S=n.deletions,S===null?(n.deletions=[e],n.flags|=16):S.push(e)),n.child=a,n.memoizedState=null,a)}function Zf(e,n){return n=oc({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function oc(e,n){return e=ei(22,e,null,n),e.lanes=0,e}function Kf(e,n,a){return bs(n,e.child,null,a),e=Zf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Wg(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),ff(e.return,n,a)}function Qf(e,n,a,o,u,f){var S=e.memoizedState;S===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:f}:(S.isBackwards=n,S.rendering=null,S.renderingStartTime=0,S.last=o,S.tail=a,S.tailMode=u,S.treeForkCount=f)}function qg(e,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var S=rn.current,R=(S&2)!==0;if(R?(S=S&1|2,n.flags|=128):S&=1,ht(rn,S),Dn(e,n,o,a),o=Te?Mo:0,!R&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Wg(e,a,n);else if(e.tag===19)Wg(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Zl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Qf(n,!1,u,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Zl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Qf(n,!0,a,null,f,o);break;case"together":Qf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function ra(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Va|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(rr(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=ta(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=ta(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Jf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Gl(e)))}function $S(e,n,a){switch(n.tag){case 3:Mt(n,n.stateNode.containerInfo),Oa(n,cn,e.memoizedState.cache),vs();break;case 27:case 5:Dt(n);break;case 4:Mt(n,n.stateNode.containerInfo);break;case 10:Oa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Ef(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ia(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Xg(e,n,a):(Ia(n),e=ra(e,n,a),e!==null?e.sibling:null);Ia(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(rr(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return qg(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),ht(rn,rn.current),o)break;return null;case 22:return n.lanes=0,Ig(e,n,a,n.pendingProps);case 24:Oa(n,cn,e.memoizedState.cache)}return ra(e,n,a)}function Yg(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)fn=!0;else{if(!Jf(e,a)&&(n.flags&128)===0)return fn=!1,$S(e,n,a);fn=(e.flags&131072)!==0}else fn=!1,Te&&(n.flags&1048576)!==0&&Tm(n,Mo,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=Ms(n.elementType),n.type=e,typeof e=="function")nf(e)?(o=As(e,o),n.tag=1,n=Vg(null,n,e,o,a)):(n.tag=0,n=Wf(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===L){n.tag=11,n=Pg(null,n,e,o,a);break t}else if(u===D){n.tag=14,n=zg(null,n,e,o,a);break t}}throw n=lt(e)||e,Error(s(306,n,""))}}return n;case 0:return Wf(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=As(o,n.pendingProps),Vg(e,n,o,u,a);case 3:t:{if(Mt(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,vf(e,n),Do(n,o,null,a);var S=n.memoizedState;if(o=S.cache,Oa(n,cn,o),o!==f.cache&&hf(n,[cn],a,!0),wo(),o=S.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=kg(e,n,o,a);break t}else if(o!==u){u=pi(Error(s(424)),n),Eo(u),n=kg(e,n,o,a);break t}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Qe=xi(e.firstChild),Cn=n,Te=!0,La=null,_i=!0,a=Im(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(vs(),o===u){n=ra(e,n,a);break t}Dn(e,n,o,a)}n=n.child}return n;case 26:return rc(e,n),e===null?(a=a_(n.type,null,n.pendingProps,null))?n.memoizedState=a:Te||(a=n.type,e=n.pendingProps,o=Ec(Y.current).createElement(a),o[ln]=n,o[Mn]=e,Un(o,a,e),C(o),n.stateNode=o):n.memoizedState=a_(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Dt(n),e===null&&Te&&(o=n.stateNode=e_(n.type,n.pendingProps,Y.current),Cn=n,_i=!0,u=Qe,Ya(n.type)?(Uh=u,Qe=xi(o.firstChild)):Qe=u),Dn(e,n,n.pendingProps.children,a),rc(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Te&&((u=o=Qe)&&(o=wy(o,n.type,n.pendingProps,_i),o!==null?(n.stateNode=o,Cn=n,Qe=xi(o.firstChild),_i=!1,u=!0):u=!1),u||Na(n)),Dt(n),u=n.type,f=n.pendingProps,S=e!==null?e.memoizedProps:null,o=f.children,Ah(u,f)?o=null:S!==null&&Ah(u,S)&&(n.flags|=32),n.memoizedState!==null&&(u=Tf(e,n,XS,null,null,a),Ko._currentValue=u),rc(e,n),Dn(e,n,o,a),n.child;case 6:return e===null&&Te&&((e=a=Qe)&&(a=Dy(a,n.pendingProps,_i),a!==null?(n.stateNode=a,Cn=n,Qe=null,e=!0):e=!1),e||Na(n)),null;case 13:return Xg(e,n,a);case 4:return Mt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=bs(n,null,o,a):Dn(e,n,o,a),n.child;case 11:return Pg(e,n,n.type,n.pendingProps,a);case 7:return Dn(e,n,n.pendingProps,a),n.child;case 8:return Dn(e,n,n.pendingProps.children,a),n.child;case 12:return Dn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Oa(n,n.type,o.value),Dn(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,Ss(n),u=wn(u),o=o(u),n.flags|=1,Dn(e,n,o,a),n.child;case 14:return zg(e,n,n.type,n.pendingProps,a);case 15:return Bg(e,n,n.type,n.pendingProps,a);case 19:return qg(e,n,a);case 31:return JS(e,n,a);case 22:return Ig(e,n,a,n.pendingProps);case 24:return Ss(n),o=wn(cn),e===null?(u=mf(),u===null&&(u=je,f=df(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},_f(n),Oa(n,cn,u)):((e.lanes&a)!==0&&(vf(e,n),Do(n,null,null,a),wo()),u=e.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Oa(n,cn,o)):(o=f.cache,Oa(n,cn,o),o!==u.cache&&hf(n,[cn],a,!0))),Dn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function oa(e){e.flags|=4}function $f(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(S0())e.flags|=8192;else throw Es=Wl,gf}else e.flags&=-16777217}function jg(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!c_(n))if(S0())e.flags|=8192;else throw Es=Wl,gf}function lc(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Ie():536870912,e.lanes|=n,vr|=n)}function zo(e,n){if(!Te)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Je(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function ty(e,n,a){var o=n.pendingProps;switch(of(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Je(n),null;case 1:return Je(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ia(cn),Rt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(sr(n)?oa(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,cf())),Je(n),null;case 26:var u=n.type,f=n.memoizedState;return e===null?(oa(n),f!==null?(Je(n),jg(n,f)):(Je(n),$f(n,u,null,o,a))):f?f!==e.memoizedState?(oa(n),Je(n),jg(n,f)):(Je(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&oa(n),Je(n),$f(n,u,e,o,a)),null;case 27:if(Qt(n),a=Y.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&oa(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Je(n),null}e=xt.current,sr(n)?Rm(n):(e=e_(u,o,a),n.stateNode=e,oa(n))}return Je(n),null;case 5:if(Qt(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&oa(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Je(n),null}if(f=xt.current,sr(n))Rm(n);else{var S=Ec(Y.current);switch(f){case 1:f=S.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=S.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=S.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?S.createElement("select",{is:o.is}):S.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?S.createElement(u,{is:o.is}):S.createElement(u)}}f[ln]=n,f[Mn]=o;t:for(S=n.child;S!==null;){if(S.tag===5||S.tag===6)f.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===n)break t;for(;S.sibling===null;){if(S.return===null||S.return===n)break t;S=S.return}S.sibling.return=S.return,S=S.sibling}n.stateNode=f;t:switch(Un(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&oa(n)}}return Je(n),$f(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&oa(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=Y.current,sr(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=Cn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[ln]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||X0(e.nodeValue,a)),e||Na(n,!0)}else e=Ec(e).createTextNode(o),e[ln]=n,n.stateNode=e}return Je(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=sr(n),a!==null){if(e===null){if(!o)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[ln]=n}else vs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Je(n),e=!1}else a=cf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(ii(n),n):(ii(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Je(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=sr(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[ln]=n}else vs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Je(n),u=!1}else u=cf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ii(n),n):(ii(n),null)}return ii(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),lc(n,n.updateQueue),Je(n),null);case 4:return Rt(),e===null&&yh(n.stateNode.containerInfo),Je(n),null;case 10:return ia(n.type),Je(n),null;case 19:if(et(rn),o=n.memoizedState,o===null)return Je(n),null;if(u=(n.flags&128)!==0,f=o.rendering,f===null)if(u)zo(o,!1);else{if(an!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Zl(e),f!==null){for(n.flags|=128,zo(o,!1),e=f.updateQueue,n.updateQueue=e,lc(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Mm(a,e),a=a.sibling;return ht(rn,rn.current&1|2),Te&&ea(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&E()>dc&&(n.flags|=128,u=!0,zo(o,!1),n.lanes=4194304)}else{if(!u)if(e=Zl(f),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,lc(n,e),zo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!Te)return Je(n),null}else 2*E()-o.renderingStartTime>dc&&a!==536870912&&(n.flags|=128,u=!0,zo(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(e=o.last,e!==null?e.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=E(),e.sibling=null,a=rn.current,ht(rn,u?a&1|2:a&1),Te&&ea(n,o.treeForkCount),e):(Je(n),null);case 22:case 23:return ii(n),Mf(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Je(n),n.subtreeFlags&6&&(n.flags|=8192)):Je(n),a=n.updateQueue,a!==null&&lc(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&et(ys),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ia(cn),Je(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function ey(e,n){switch(of(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ia(cn),Rt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Qt(n),null;case 31:if(n.memoizedState!==null){if(ii(n),n.alternate===null)throw Error(s(340));vs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(ii(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));vs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return et(rn),null;case 4:return Rt(),null;case 10:return ia(n.type),null;case 22:case 23:return ii(n),Mf(),e!==null&&et(ys),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return ia(cn),null;case 25:return null;default:return null}}function Zg(e,n){switch(of(n),n.tag){case 3:ia(cn),Rt();break;case 26:case 27:case 5:Qt(n);break;case 4:Rt();break;case 31:n.memoizedState!==null&&ii(n);break;case 13:ii(n);break;case 19:et(rn);break;case 10:ia(n.type);break;case 22:case 23:ii(n),Mf(),e!==null&&et(ys);break;case 24:ia(cn)}}function Bo(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var f=a.create,S=a.inst;o=f(),S.destroy=o}a=a.next}while(a!==u)}}catch(R){Ge(n,n.return,R)}}function Ha(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&e)===e){var S=o.inst,R=S.destroy;if(R!==void 0){S.destroy=void 0,u=n;var G=a,st=R;try{st()}catch(gt){Ge(u,G,gt)}}}o=o.next}while(o!==f)}}catch(gt){Ge(n,n.return,gt)}}function Kg(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Hm(n,a)}catch(o){Ge(e,e.return,o)}}}function Qg(e,n,a){a.props=As(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Ge(e,n,o)}}function Io(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){Ge(e,n,u)}}function Gi(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Ge(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Ge(e,n,u)}else a.current=null}function Jg(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Ge(e,e.return,u)}}function th(e,n,a){try{var o=e.stateNode;Ey(o,e.type,a,n),o[Mn]=n}catch(u){Ge(e,e.return,u)}}function $g(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ya(e.type)||e.tag===4}function eh(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||$g(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ya(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function nh(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Ji));else if(o!==4&&(o===27&&Ya(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(nh(e,n,a),e=e.sibling;e!==null;)nh(e,n,a),e=e.sibling}function cc(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Ya(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(cc(e,n,a),e=e.sibling;e!==null;)cc(e,n,a),e=e.sibling}function t0(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Un(n,o,a),n[ln]=e,n[Mn]=a}catch(f){Ge(e,e.return,f)}}var la=!1,hn=!1,ih=!1,e0=typeof WeakSet=="function"?WeakSet:Set,Sn=null;function ny(e,n){if(e=e.containerInfo,bh=Dc,e=dm(e),Zu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var S=0,R=-1,G=-1,st=0,gt=0,St=e,ot=null;e:for(;;){for(var ut;St!==a||u!==0&&St.nodeType!==3||(R=S+u),St!==f||o!==0&&St.nodeType!==3||(G=S+o),St.nodeType===3&&(S+=St.nodeValue.length),(ut=St.firstChild)!==null;)ot=St,St=ut;for(;;){if(St===e)break e;if(ot===a&&++st===u&&(R=S),ot===f&&++gt===o&&(G=S),(ut=St.nextSibling)!==null)break;St=ot,ot=St.parentNode}St=ut}a=R===-1||G===-1?null:{start:R,end:G}}else a=null}a=a||{start:0,end:0}}else a=null;for(Th={focusedElem:e,selectionRange:a},Dc=!1,Sn=n;Sn!==null;)if(n=Sn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Sn=e;else for(;Sn!==null;){switch(n=Sn,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var Xt=As(a.type,u);e=o.getSnapshotBeforeUpdate(Xt,f),o.__reactInternalSnapshotBeforeUpdate=e}catch(ae){Ge(a,a.return,ae)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Ch(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Ch(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,Sn=e;break}Sn=n.return}}function n0(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ua(e,a),o&4&&Bo(5,a);break;case 1:if(ua(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(S){Ge(a,a.return,S)}else{var u=As(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(S){Ge(a,a.return,S)}}o&64&&Kg(a),o&512&&Io(a,a.return);break;case 3:if(ua(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Hm(e,n)}catch(S){Ge(a,a.return,S)}}break;case 27:n===null&&o&4&&t0(a);case 26:case 5:ua(e,a),n===null&&o&4&&Jg(a),o&512&&Io(a,a.return);break;case 12:ua(e,a);break;case 31:ua(e,a),o&4&&s0(e,a);break;case 13:ua(e,a),o&4&&r0(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=fy.bind(null,a),Uy(e,a))));break;case 22:if(o=a.memoizedState!==null||la,!o){n=n!==null&&n.memoizedState!==null||hn,u=la;var f=hn;la=o,(hn=n)&&!f?fa(e,a,(a.subtreeFlags&8772)!==0):ua(e,a),la=u,hn=f}break;case 30:break;default:ua(e,a)}}function i0(e){var n=e.alternate;n!==null&&(e.alternate=null,i0(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&fo(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var en=null,qn=!1;function ca(e,n,a){for(a=a.child;a!==null;)a0(e,n,a),a=a.sibling}function a0(e,n,a){if(Ct&&typeof Ct.onCommitFiberUnmount=="function")try{Ct.onCommitFiberUnmount(At,a)}catch{}switch(a.tag){case 26:hn||Gi(a,n),ca(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:hn||Gi(a,n);var o=en,u=qn;Ya(a.type)&&(en=a.stateNode,qn=!1),ca(e,n,a),Yo(a.stateNode),en=o,qn=u;break;case 5:hn||Gi(a,n);case 6:if(o=en,u=qn,en=null,ca(e,n,a),en=o,qn=u,en!==null)if(qn)try{(en.nodeType===9?en.body:en.nodeName==="HTML"?en.ownerDocument.body:en).removeChild(a.stateNode)}catch(f){Ge(a,n,f)}else try{en.removeChild(a.stateNode)}catch(f){Ge(a,n,f)}break;case 18:en!==null&&(qn?(e=en,K0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Ar(e)):K0(en,a.stateNode));break;case 4:o=en,u=qn,en=a.stateNode.containerInfo,qn=!0,ca(e,n,a),en=o,qn=u;break;case 0:case 11:case 14:case 15:Ha(2,a,n),hn||Ha(4,a,n),ca(e,n,a);break;case 1:hn||(Gi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Qg(a,n,o)),ca(e,n,a);break;case 21:ca(e,n,a);break;case 22:hn=(o=hn)||a.memoizedState!==null,ca(e,n,a),hn=o;break;default:ca(e,n,a)}}function s0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ar(e)}catch(a){Ge(n,n.return,a)}}}function r0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ar(e)}catch(a){Ge(n,n.return,a)}}function iy(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new e0),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new e0),n;default:throw Error(s(435,e.tag))}}function uc(e,n){var a=iy(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=hy.bind(null,e,o);o.then(u,u)}})}function Yn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=e,S=n,R=S;t:for(;R!==null;){switch(R.tag){case 27:if(Ya(R.type)){en=R.stateNode,qn=!1;break t}break;case 5:en=R.stateNode,qn=!1;break t;case 3:case 4:en=R.stateNode.containerInfo,qn=!0;break t}R=R.return}if(en===null)throw Error(s(160));a0(f,S,u),en=null,qn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)o0(n,e),n=n.sibling}var wi=null;function o0(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Yn(n,e),jn(e),o&4&&(Ha(3,e,e.return),Bo(3,e),Ha(5,e,e.return));break;case 1:Yn(n,e),jn(e),o&512&&(hn||a===null||Gi(a,a.return)),o&64&&la&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=wi;if(Yn(n,e),jn(e),o&512&&(hn||a===null||Gi(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[fs]||f[ln]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),Un(f,o,a),f[ln]=e,C(f),o=f;break t;case"link":var S=o_("link","href",u).get(o+(a.href||""));if(S){for(var R=0;R<S.length;R++)if(f=S[R],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(R,1);break e}}f=u.createElement(o),Un(f,o,a),u.head.appendChild(f);break;case"meta":if(S=o_("meta","content",u).get(o+(a.content||""))){for(R=0;R<S.length;R++)if(f=S[R],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(R,1);break e}}f=u.createElement(o),Un(f,o,a),u.head.appendChild(f);break;default:throw Error(s(468,o))}f[ln]=e,C(f),o=f}e.stateNode=o}else l_(u,e.type,e.stateNode);else e.stateNode=r_(u,o,e.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?l_(u,e.type,e.stateNode):r_(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&th(e,e.memoizedProps,a.memoizedProps)}break;case 27:Yn(n,e),jn(e),o&512&&(hn||a===null||Gi(a,a.return)),a!==null&&o&4&&th(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Yn(n,e),jn(e),o&512&&(hn||a===null||Gi(a,a.return)),e.flags&32){u=e.stateNode;try{pn(u,"")}catch(Xt){Ge(e,e.return,Xt)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,th(e,u,a!==null?a.memoizedProps:u)),o&1024&&(ih=!0);break;case 6:if(Yn(n,e),jn(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(Xt){Ge(e,e.return,Xt)}}break;case 3:if(Ac=null,u=wi,wi=bc(n.containerInfo),Yn(n,e),wi=u,jn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Ar(n.containerInfo)}catch(Xt){Ge(e,e.return,Xt)}ih&&(ih=!1,l0(e));break;case 4:o=wi,wi=bc(e.stateNode.containerInfo),Yn(n,e),jn(e),wi=o;break;case 12:Yn(n,e),jn(e);break;case 31:Yn(n,e),jn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,uc(e,o)));break;case 13:Yn(n,e),jn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(hc=E()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,uc(e,o)));break;case 22:u=e.memoizedState!==null;var G=a!==null&&a.memoizedState!==null,st=la,gt=hn;if(la=st||u,hn=gt||G,Yn(n,e),hn=gt,la=st,jn(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||G||la||hn||Rs(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){G=a=n;try{if(f=G.stateNode,u)S=f.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{R=G.stateNode;var St=G.memoizedProps.style,ot=St!=null&&St.hasOwnProperty("display")?St.display:null;R.style.display=ot==null||typeof ot=="boolean"?"":(""+ot).trim()}}catch(Xt){Ge(G,G.return,Xt)}}}else if(n.tag===6){if(a===null){G=n;try{G.stateNode.nodeValue=u?"":G.memoizedProps}catch(Xt){Ge(G,G.return,Xt)}}}else if(n.tag===18){if(a===null){G=n;try{var ut=G.stateNode;u?Q0(ut,!0):Q0(G.stateNode,!1)}catch(Xt){Ge(G,G.return,Xt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,uc(e,a))));break;case 19:Yn(n,e),jn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,uc(e,o)));break;case 30:break;case 21:break;default:Yn(n,e),jn(e)}}function jn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if($g(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=eh(e);cc(e,f,u);break;case 5:var S=a.stateNode;a.flags&32&&(pn(S,""),a.flags&=-33);var R=eh(e);cc(e,R,S);break;case 3:case 4:var G=a.stateNode.containerInfo,st=eh(e);nh(e,st,G);break;default:throw Error(s(161))}}catch(gt){Ge(e,e.return,gt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function l0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;l0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ua(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)n0(e,n.alternate,n),n=n.sibling}function Rs(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Ha(4,n,n.return),Rs(n);break;case 1:Gi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Qg(n,n.return,a),Rs(n);break;case 27:Yo(n.stateNode);case 26:case 5:Gi(n,n.return),Rs(n);break;case 22:n.memoizedState===null&&Rs(n);break;case 30:Rs(n);break;default:Rs(n)}e=e.sibling}}function fa(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,f=n,S=f.flags;switch(f.tag){case 0:case 11:case 15:fa(u,f,a),Bo(4,f);break;case 1:if(fa(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(st){Ge(o,o.return,st)}if(o=f,u=o.updateQueue,u!==null){var R=o.stateNode;try{var G=u.shared.hiddenCallbacks;if(G!==null)for(u.shared.hiddenCallbacks=null,u=0;u<G.length;u++)Fm(G[u],R)}catch(st){Ge(o,o.return,st)}}a&&S&64&&Kg(f),Io(f,f.return);break;case 27:t0(f);case 26:case 5:fa(u,f,a),a&&o===null&&S&4&&Jg(f),Io(f,f.return);break;case 12:fa(u,f,a);break;case 31:fa(u,f,a),a&&S&4&&s0(u,f);break;case 13:fa(u,f,a),a&&S&4&&r0(u,f);break;case 22:f.memoizedState===null&&fa(u,f,a),Io(f,f.return);break;case 30:break;default:fa(u,f,a)}n=n.sibling}}function ah(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&bo(a))}function sh(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&bo(e))}function Di(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)c0(e,n,a,o),n=n.sibling}function c0(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Di(e,n,a,o),u&2048&&Bo(9,n);break;case 1:Di(e,n,a,o);break;case 3:Di(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&bo(e)));break;case 12:if(u&2048){Di(e,n,a,o),e=n.stateNode;try{var f=n.memoizedProps,S=f.id,R=f.onPostCommit;typeof R=="function"&&R(S,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(G){Ge(n,n.return,G)}}else Di(e,n,a,o);break;case 31:Di(e,n,a,o);break;case 13:Di(e,n,a,o);break;case 23:break;case 22:f=n.stateNode,S=n.alternate,n.memoizedState!==null?f._visibility&2?Di(e,n,a,o):Fo(e,n):f._visibility&2?Di(e,n,a,o):(f._visibility|=2,mr(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&ah(S,n);break;case 24:Di(e,n,a,o),u&2048&&sh(n.alternate,n);break;default:Di(e,n,a,o)}}function mr(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,S=n,R=a,G=o,st=S.flags;switch(S.tag){case 0:case 11:case 15:mr(f,S,R,G,u),Bo(8,S);break;case 23:break;case 22:var gt=S.stateNode;S.memoizedState!==null?gt._visibility&2?mr(f,S,R,G,u):Fo(f,S):(gt._visibility|=2,mr(f,S,R,G,u)),u&&st&2048&&ah(S.alternate,S);break;case 24:mr(f,S,R,G,u),u&&st&2048&&sh(S.alternate,S);break;default:mr(f,S,R,G,u)}n=n.sibling}}function Fo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:Fo(a,o),u&2048&&ah(o.alternate,o);break;case 24:Fo(a,o),u&2048&&sh(o.alternate,o);break;default:Fo(a,o)}n=n.sibling}}var Ho=8192;function gr(e,n,a){if(e.subtreeFlags&Ho)for(e=e.child;e!==null;)u0(e,n,a),e=e.sibling}function u0(e,n,a){switch(e.tag){case 26:gr(e,n,a),e.flags&Ho&&e.memoizedState!==null&&ky(a,wi,e.memoizedState,e.memoizedProps);break;case 5:gr(e,n,a);break;case 3:case 4:var o=wi;wi=bc(e.stateNode.containerInfo),gr(e,n,a),wi=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=Ho,Ho=16777216,gr(e,n,a),Ho=o):gr(e,n,a));break;default:gr(e,n,a)}}function f0(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Go(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Sn=o,d0(o,e)}f0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)h0(e),e=e.sibling}function h0(e){switch(e.tag){case 0:case 11:case 15:Go(e),e.flags&2048&&Ha(9,e,e.return);break;case 3:Go(e);break;case 12:Go(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,fc(e)):Go(e);break;default:Go(e)}}function fc(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Sn=o,d0(o,e)}f0(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ha(8,n,n.return),fc(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,fc(n));break;default:fc(n)}e=e.sibling}}function d0(e,n){for(;Sn!==null;){var a=Sn;switch(a.tag){case 0:case 11:case 15:Ha(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:bo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Sn=o;else t:for(a=e;Sn!==null;){o=Sn;var u=o.sibling,f=o.return;if(i0(o),o===a){Sn=null;break t}if(u!==null){u.return=f,Sn=u;break t}Sn=f}}}var ay={getCacheForType:function(e){var n=wn(cn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return wn(cn).controller.signal}},sy=typeof WeakMap=="function"?WeakMap:Map,Pe=0,je=null,ye=null,Ee=0,He=0,ai=null,Ga=!1,_r=!1,rh=!1,ha=0,an=0,Va=0,Cs=0,oh=0,si=0,vr=0,Vo=null,Zn=null,lh=!1,hc=0,p0=0,dc=1/0,pc=null,ka=null,mn=0,Xa=null,xr=null,da=0,ch=0,uh=null,m0=null,ko=0,fh=null;function ri(){return(Pe&2)!==0&&Ee!==0?Ee&-Ee:I.T!==null?_h():co()}function g0(){if(si===0)if((Ee&536870912)===0||Te){var e=wt;wt<<=1,(wt&3932160)===0&&(wt=262144),si=e}else si=536870912;return e=ni.current,e!==null&&(e.flags|=32),si}function Kn(e,n,a){(e===je&&(He===2||He===9)||e.cancelPendingCommit!==null)&&(Sr(e,0),Wa(e,Ee,si,!1)),On(e,a),((Pe&2)===0||e!==je)&&(e===je&&((Pe&2)===0&&(Cs|=a),an===4&&Wa(e,Ee,si,!1)),Vi(e))}function _0(e,n,a){if((Pe&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Ut(e,n),u=o?ly(e,n):dh(e,n,!0),f=o;do{if(u===0){_r&&!o&&Wa(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!ry(a)){u=dh(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var S=0;else S=e.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;t:{var R=e;u=Vo;var G=R.current.memoizedState.isDehydrated;if(G&&(Sr(R,S).flags|=256),S=dh(R,S,!1),S!==2){if(rh&&!G){R.errorRecoveryDisabledLanes|=f,Cs|=f,u=4;break t}f=Zn,Zn=u,f!==null&&(Zn===null?Zn=f:Zn.push.apply(Zn,f))}u=S}if(f=!1,u!==2)continue}}if(u===1){Sr(e,0),Wa(e,n,0,!0);break}t:{switch(o=e,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Wa(o,n,si,!Ga);break t;case 2:Zn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=hc+300-E(),10<u)){if(Wa(o,n,si,!Ga),yt(o,0,!0)!==0)break t;da=n,o.timeoutHandle=j0(v0.bind(null,o,a,Zn,pc,lh,n,si,Cs,vr,Ga,f,"Throttled",-0,0),u);break t}v0(o,a,Zn,pc,lh,n,si,Cs,vr,Ga,f,null,-0,0)}}break}while(!0);Vi(e)}function v0(e,n,a,o,u,f,S,R,G,st,gt,St,ot,ut){if(e.timeoutHandle=-1,St=n.subtreeFlags,St&8192||(St&16785408)===16785408){St={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ji},u0(n,f,St);var Xt=(f&62914560)===f?hc-E():(f&4194048)===f?p0-E():0;if(Xt=Xy(St,Xt),Xt!==null){da=f,e.cancelPendingCommit=Xt(A0.bind(null,e,n,f,a,o,u,S,R,G,gt,St,null,ot,ut)),Wa(e,f,S,!st);return}}A0(e,n,f,a,o,u,S,R,G)}function ry(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!ti(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Wa(e,n,a,o){n&=~oh,n&=~Cs,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var f=31-It(u),S=1<<f;o[f]=-1,u&=~S}a!==0&&Al(e,a,n)}function mc(){return(Pe&6)===0?(Xo(0),!1):!0}function hh(){if(ye!==null){if(He===0)var e=ye.return;else e=ye,na=xs=null,Cf(e),ur=null,Ao=0,e=ye;for(;e!==null;)Zg(e.alternate,e),e=e.return;ye=null}}function Sr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Ay(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),da=0,hh(),je=e,ye=a=ta(e.current,null),Ee=n,He=0,ai=null,Ga=!1,_r=Ut(e,n),rh=!1,vr=si=oh=Cs=Va=an=0,Zn=Vo=null,lh=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-It(o),f=1<<u;n|=e[u],o&=~f}return ha=n,zl(),a}function x0(e,n){pe=null,I.H=Oo,n===cr||n===Xl?(n=Pm(),He=3):n===gf?(n=Pm(),He=4):He=n===Xf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ai=n,ye===null&&(an=1,ac(e,pi(n,e.current)))}function S0(){var e=ni.current;return e===null?!0:(Ee&4194048)===Ee?vi===null:(Ee&62914560)===Ee||(Ee&536870912)!==0?e===vi:!1}function y0(){var e=I.H;return I.H=Oo,e===null?Oo:e}function M0(){var e=I.A;return I.A=ay,e}function gc(){an=4,Ga||(Ee&4194048)!==Ee&&ni.current!==null||(_r=!0),(Va&134217727)===0&&(Cs&134217727)===0||je===null||Wa(je,Ee,si,!1)}function dh(e,n,a){var o=Pe;Pe|=2;var u=y0(),f=M0();(je!==e||Ee!==n)&&(pc=null,Sr(e,n)),n=!1;var S=an;t:do try{if(He!==0&&ye!==null){var R=ye,G=ai;switch(He){case 8:hh(),S=6;break t;case 3:case 2:case 9:case 6:ni.current===null&&(n=!0);var st=He;if(He=0,ai=null,yr(e,R,G,st),a&&_r){S=0;break t}break;default:st=He,He=0,ai=null,yr(e,R,G,st)}}oy(),S=an;break}catch(gt){x0(e,gt)}while(!0);return n&&e.shellSuspendCounter++,na=xs=null,Pe=o,I.H=u,I.A=f,ye===null&&(je=null,Ee=0,zl()),S}function oy(){for(;ye!==null;)E0(ye)}function ly(e,n){var a=Pe;Pe|=2;var o=y0(),u=M0();je!==e||Ee!==n?(pc=null,dc=E()+500,Sr(e,n)):_r=Ut(e,n);t:do try{if(He!==0&&ye!==null){n=ye;var f=ai;e:switch(He){case 1:He=0,ai=null,yr(e,n,f,1);break;case 2:case 9:if(Nm(f)){He=0,ai=null,b0(n);break}n=function(){He!==2&&He!==9||je!==e||(He=7),Vi(e)},f.then(n,n);break t;case 3:He=7;break t;case 4:He=5;break t;case 7:Nm(f)?(He=0,ai=null,b0(n)):(He=0,ai=null,yr(e,n,f,7));break;case 5:var S=null;switch(ye.tag){case 26:S=ye.memoizedState;case 5:case 27:var R=ye;if(S?c_(S):R.stateNode.complete){He=0,ai=null;var G=R.sibling;if(G!==null)ye=G;else{var st=R.return;st!==null?(ye=st,_c(st)):ye=null}break e}}He=0,ai=null,yr(e,n,f,5);break;case 6:He=0,ai=null,yr(e,n,f,6);break;case 8:hh(),an=6;break t;default:throw Error(s(462))}}cy();break}catch(gt){x0(e,gt)}while(!0);return na=xs=null,I.H=o,I.A=u,Pe=a,ye!==null?0:(je=null,Ee=0,zl(),an)}function cy(){for(;ye!==null&&!jt();)E0(ye)}function E0(e){var n=Yg(e.alternate,e,ha);e.memoizedProps=e.pendingProps,n===null?_c(e):ye=n}function b0(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Gg(a,n,n.pendingProps,n.type,void 0,Ee);break;case 11:n=Gg(a,n,n.pendingProps,n.type.render,n.ref,Ee);break;case 5:Cf(n);default:Zg(a,n),n=ye=Mm(n,ha),n=Yg(a,n,ha)}e.memoizedProps=e.pendingProps,n===null?_c(e):ye=n}function yr(e,n,a,o){na=xs=null,Cf(n),ur=null,Ao=0;var u=n.return;try{if(QS(e,u,n,a,Ee)){an=1,ac(e,pi(a,e.current)),ye=null;return}}catch(f){if(u!==null)throw ye=u,f;an=1,ac(e,pi(a,e.current)),ye=null;return}n.flags&32768?(Te||o===1?e=!0:_r||(Ee&536870912)!==0?e=!1:(Ga=e=!0,(o===2||o===9||o===3||o===6)&&(o=ni.current,o!==null&&o.tag===13&&(o.flags|=16384))),T0(n,e)):_c(n)}function _c(e){var n=e;do{if((n.flags&32768)!==0){T0(n,Ga);return}e=n.return;var a=ty(n.alternate,n,ha);if(a!==null){ye=a;return}if(n=n.sibling,n!==null){ye=n;return}ye=n=e}while(n!==null);an===0&&(an=5)}function T0(e,n){do{var a=ey(e.alternate,e);if(a!==null){a.flags&=32767,ye=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){ye=e;return}ye=e=a}while(e!==null);an=6,ye=null}function A0(e,n,a,o,u,f,S,R,G){e.cancelPendingCommit=null;do vc();while(mn!==0);if((Pe&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=tf,Ti(e,a,f,S,R,G),e===je&&(ye=je=null,Ee=0),xr=n,Xa=e,da=a,ch=f,uh=u,m0=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,dy(dt,function(){return U0(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=I.T,I.T=null,u=F.p,F.p=2,S=Pe,Pe|=4;try{ny(e,n,a)}finally{Pe=S,F.p=u,I.T=o}}mn=1,R0(),C0(),w0()}}function R0(){if(mn===1){mn=0;var e=Xa,n=xr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=I.T,I.T=null;var o=F.p;F.p=2;var u=Pe;Pe|=4;try{o0(n,e);var f=Th,S=dm(e.containerInfo),R=f.focusedElem,G=f.selectionRange;if(S!==R&&R&&R.ownerDocument&&hm(R.ownerDocument.documentElement,R)){if(G!==null&&Zu(R)){var st=G.start,gt=G.end;if(gt===void 0&&(gt=st),"selectionStart"in R)R.selectionStart=st,R.selectionEnd=Math.min(gt,R.value.length);else{var St=R.ownerDocument||document,ot=St&&St.defaultView||window;if(ot.getSelection){var ut=ot.getSelection(),Xt=R.textContent.length,ae=Math.min(G.start,Xt),We=G.end===void 0?ae:Math.min(G.end,Xt);!ut.extend&&ae>We&&(S=We,We=ae,ae=S);var K=fm(R,ae),X=fm(R,We);if(K&&X&&(ut.rangeCount!==1||ut.anchorNode!==K.node||ut.anchorOffset!==K.offset||ut.focusNode!==X.node||ut.focusOffset!==X.offset)){var at=St.createRange();at.setStart(K.node,K.offset),ut.removeAllRanges(),ae>We?(ut.addRange(at),ut.extend(X.node,X.offset)):(at.setEnd(X.node,X.offset),ut.addRange(at))}}}}for(St=[],ut=R;ut=ut.parentNode;)ut.nodeType===1&&St.push({element:ut,left:ut.scrollLeft,top:ut.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<St.length;R++){var vt=St[R];vt.element.scrollLeft=vt.left,vt.element.scrollTop=vt.top}}Dc=!!bh,Th=bh=null}finally{Pe=u,F.p=o,I.T=a}}e.current=n,mn=2}}function C0(){if(mn===2){mn=0;var e=Xa,n=xr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=I.T,I.T=null;var o=F.p;F.p=2;var u=Pe;Pe|=4;try{n0(e,n.alternate,n)}finally{Pe=u,F.p=o,I.T=a}}mn=3}}function w0(){if(mn===4||mn===3){mn=0,B();var e=Xa,n=xr,a=da,o=m0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?mn=5:(mn=0,xr=Xa=null,D0(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(ka=null),qs(a),n=n.stateNode,Ct&&typeof Ct.onCommitFiberRoot=="function")try{Ct.onCommitFiberRoot(At,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=I.T,u=F.p,F.p=2,I.T=null;try{for(var f=e.onRecoverableError,S=0;S<o.length;S++){var R=o[S];f(R.value,{componentStack:R.stack})}}finally{I.T=n,F.p=u}}(da&3)!==0&&vc(),Vi(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===fh?ko++:(ko=0,fh=e):ko=0,Xo(0)}}function D0(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,bo(n)))}function vc(){return R0(),C0(),w0(),U0()}function U0(){if(mn!==5)return!1;var e=Xa,n=ch;ch=0;var a=qs(da),o=I.T,u=F.p;try{F.p=32>a?32:a,I.T=null,a=uh,uh=null;var f=Xa,S=da;if(mn=0,xr=Xa=null,da=0,(Pe&6)!==0)throw Error(s(331));var R=Pe;if(Pe|=4,h0(f.current),c0(f,f.current,S,a),Pe=R,Xo(0,!1),Ct&&typeof Ct.onPostCommitFiberRoot=="function")try{Ct.onPostCommitFiberRoot(At,f)}catch{}return!0}finally{F.p=u,I.T=o,D0(e,n)}}function L0(e,n,a){n=pi(a,n),n=kf(e.stateNode,n,2),e=Ba(e,n,2),e!==null&&(On(e,2),Vi(e))}function Ge(e,n,a){if(e.tag===3)L0(e,e,a);else for(;n!==null;){if(n.tag===3){L0(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(ka===null||!ka.has(o))){e=pi(a,e),a=Ng(2),o=Ba(n,a,2),o!==null&&(Og(a,o,n,e),On(o,2),Vi(o));break}}n=n.return}}function ph(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new sy;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(rh=!0,u.add(a),e=uy.bind(null,e,n,a),n.then(e,e))}function uy(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,je===e&&(Ee&a)===a&&(an===4||an===3&&(Ee&62914560)===Ee&&300>E()-hc?(Pe&2)===0&&Sr(e,0):oh|=a,vr===Ee&&(vr=0)),Vi(e)}function N0(e,n){n===0&&(n=Ie()),e=gs(e,n),e!==null&&(On(e,n),Vi(e))}function fy(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),N0(e,a)}function hy(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),N0(e,a)}function dy(e,n){return Ae(e,n)}var xc=null,Mr=null,mh=!1,Sc=!1,gh=!1,qa=0;function Vi(e){e!==Mr&&e.next===null&&(Mr===null?xc=Mr=e:Mr=Mr.next=e),Sc=!0,mh||(mh=!0,my())}function Xo(e,n){if(!gh&&Sc){gh=!0;do for(var a=!1,o=xc;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var S=o.suspendedLanes,R=o.pingedLanes;f=(1<<31-It(42|e)+1)-1,f&=u&~(S&~R),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,B0(o,f))}else f=Ee,f=yt(o,o===je?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Ut(o,f)||(a=!0,B0(o,f));o=o.next}while(a);gh=!1}}function py(){O0()}function O0(){Sc=mh=!1;var e=0;qa!==0&&Ty()&&(e=qa);for(var n=E(),a=null,o=xc;o!==null;){var u=o.next,f=P0(o,n);f===0?(o.next=null,a===null?xc=u:a.next=u,u===null&&(Mr=a)):(a=o,(e!==0||(f&3)!==0)&&(Sc=!0)),o=u}mn!==0&&mn!==5||Xo(e),qa!==0&&(qa=0)}function P0(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var S=31-It(f),R=1<<S,G=u[S];G===-1?((R&a)===0||(R&o)!==0)&&(u[S]=fe(R,n)):G<=n&&(e.expiredLanes|=R),f&=~R}if(n=je,a=Ee,a=yt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(He===2||He===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&ze(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ut(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&ze(o),qs(a)){case 2:case 8:a=Et;break;case 32:a=dt;break;case 268435456:a=Lt;break;default:a=dt}return o=z0.bind(null,e),a=Ae(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&ze(o),e.callbackPriority=2,e.callbackNode=null,2}function z0(e,n){if(mn!==0&&mn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(vc()&&e.callbackNode!==a)return null;var o=Ee;return o=yt(e,e===je?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(_0(e,o,n),P0(e,E()),e.callbackNode!=null&&e.callbackNode===a?z0.bind(null,e):null)}function B0(e,n){if(vc())return null;_0(e,n,!0)}function my(){Ry(function(){(Pe&6)!==0?Ae(_t,py):O0()})}function _h(){if(qa===0){var e=or;e===0&&(e=Pt,Pt<<=1,(Pt&261888)===0&&(Pt=256)),qa=e}return qa}function I0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Cl(""+e)}function F0(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function gy(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=I0((u[Mn]||null).action),S=o.submitter;S&&(n=(n=S[Mn]||null)?I0(n.formAction):S.getAttribute("formAction"),n!==null&&(f=n,S=null));var R=new Ll("action","action",null,o,u);e.push({event:R,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(qa!==0){var G=S?F0(u,S):new FormData(u);Bf(a,{pending:!0,data:G,method:u.method,action:f},null,G)}}else typeof f=="function"&&(R.preventDefault(),G=S?F0(u,S):new FormData(u),Bf(a,{pending:!0,data:G,method:u.method,action:f},f,G))},currentTarget:u}]})}}for(var vh=0;vh<$u.length;vh++){var xh=$u[vh],_y=xh.toLowerCase(),vy=xh[0].toUpperCase()+xh.slice(1);Ci(_y,"on"+vy)}Ci(gm,"onAnimationEnd"),Ci(_m,"onAnimationIteration"),Ci(vm,"onAnimationStart"),Ci("dblclick","onDoubleClick"),Ci("focusin","onFocus"),Ci("focusout","onBlur"),Ci(OS,"onTransitionRun"),Ci(PS,"onTransitionStart"),Ci(zS,"onTransitionCancel"),Ci(xm,"onTransitionEnd"),nt("onMouseEnter",["mouseout","mouseover"]),nt("onMouseLeave",["mouseout","mouseover"]),nt("onPointerEnter",["pointerout","pointerover"]),nt("onPointerLeave",["pointerout","pointerover"]),rt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),rt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),rt("onBeforeInput",["compositionend","keypress","textInput","paste"]),rt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),rt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),rt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Wo));function H0(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var f=void 0;if(n)for(var S=o.length-1;0<=S;S--){var R=o[S],G=R.instance,st=R.currentTarget;if(R=R.listener,G!==f&&u.isPropagationStopped())break t;f=R,u.currentTarget=st;try{f(u)}catch(gt){Pl(gt)}u.currentTarget=null,f=G}else for(S=0;S<o.length;S++){if(R=o[S],G=R.instance,st=R.currentTarget,R=R.listener,G!==f&&u.isPropagationStopped())break t;f=R,u.currentTarget=st;try{f(u)}catch(gt){Pl(gt)}u.currentTarget=null,f=G}}}}function Me(e,n){var a=n[Ys];a===void 0&&(a=n[Ys]=new Set);var o=e+"__bubble";a.has(o)||(G0(n,e,2,!1),a.add(o))}function Sh(e,n,a){var o=0;n&&(o|=4),G0(a,e,o,n)}var yc="_reactListening"+Math.random().toString(36).slice(2);function yh(e){if(!e[yc]){e[yc]=!0,Z.forEach(function(a){a!=="selectionchange"&&(xy.has(a)||Sh(a,!1,e),Sh(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[yc]||(n[yc]=!0,Sh("selectionchange",!1,n))}}function G0(e,n,a,o){switch(g_(n)){case 2:var u=Yy;break;case 8:u=jy;break;default:u=zh}a=u.bind(null,n,a,e),u=void 0,!Hu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Mh(e,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var S=o.tag;if(S===3||S===4){var R=o.stateNode.containerInfo;if(R===u)break;if(S===4)for(S=o.return;S!==null;){var G=S.tag;if((G===3||G===4)&&S.stateNode.containerInfo===u)return;S=S.return}for(;R!==null;){if(S=Ra(R),S===null)return;if(G=S.tag,G===5||G===6||G===26||G===27){o=f=S;continue t}R=R.parentNode}}o=o.return}qp(function(){var st=f,gt=Iu(a),St=[];t:{var ot=Sm.get(e);if(ot!==void 0){var ut=Ll,Xt=e;switch(e){case"keypress":if(Dl(a)===0)break t;case"keydown":case"keyup":ut=hS;break;case"focusin":Xt="focus",ut=Xu;break;case"focusout":Xt="blur",ut=Xu;break;case"beforeblur":case"afterblur":ut=Xu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ut=Zp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ut=tS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ut=mS;break;case gm:case _m:case vm:ut=iS;break;case xm:ut=_S;break;case"scroll":case"scrollend":ut=Jx;break;case"wheel":ut=xS;break;case"copy":case"cut":case"paste":ut=sS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ut=Qp;break;case"toggle":case"beforetoggle":ut=yS}var ae=(n&4)!==0,We=!ae&&(e==="scroll"||e==="scrollend"),K=ae?ot!==null?ot+"Capture":null:ot;ae=[];for(var X=st,at;X!==null;){var vt=X;if(at=vt.stateNode,vt=vt.tag,vt!==5&&vt!==26&&vt!==27||at===null||K===null||(vt=ho(X,K),vt!=null&&ae.push(qo(X,vt,at))),We)break;X=X.return}0<ae.length&&(ot=new ut(ot,Xt,null,a,gt),St.push({event:ot,listeners:ae}))}}if((n&7)===0){t:{if(ot=e==="mouseover"||e==="pointerover",ut=e==="mouseout"||e==="pointerout",ot&&a!==Bu&&(Xt=a.relatedTarget||a.fromElement)&&(Ra(Xt)||Xt[Ai]))break t;if((ut||ot)&&(ot=gt.window===gt?gt:(ot=gt.ownerDocument)?ot.defaultView||ot.parentWindow:window,ut?(Xt=a.relatedTarget||a.toElement,ut=st,Xt=Xt?Ra(Xt):null,Xt!==null&&(We=c(Xt),ae=Xt.tag,Xt!==We||ae!==5&&ae!==27&&ae!==6)&&(Xt=null)):(ut=null,Xt=st),ut!==Xt)){if(ae=Zp,vt="onMouseLeave",K="onMouseEnter",X="mouse",(e==="pointerout"||e==="pointerover")&&(ae=Qp,vt="onPointerLeave",K="onPointerEnter",X="pointer"),We=ut==null?ot:hs(ut),at=Xt==null?ot:hs(Xt),ot=new ae(vt,X+"leave",ut,a,gt),ot.target=We,ot.relatedTarget=at,vt=null,Ra(gt)===st&&(ae=new ae(K,X+"enter",Xt,a,gt),ae.target=at,ae.relatedTarget=We,vt=ae),We=vt,ut&&Xt)e:{for(ae=Sy,K=ut,X=Xt,at=0,vt=K;vt;vt=ae(vt))at++;vt=0;for(var $t=X;$t;$t=ae($t))vt++;for(;0<at-vt;)K=ae(K),at--;for(;0<vt-at;)X=ae(X),vt--;for(;at--;){if(K===X||X!==null&&K===X.alternate){ae=K;break e}K=ae(K),X=ae(X)}ae=null}else ae=null;ut!==null&&V0(St,ot,ut,ae,!1),Xt!==null&&We!==null&&V0(St,We,Xt,ae,!0)}}t:{if(ot=st?hs(st):window,ut=ot.nodeName&&ot.nodeName.toLowerCase(),ut==="select"||ut==="input"&&ot.type==="file")var Ue=sm;else if(im(ot))if(rm)Ue=US;else{Ue=wS;var Zt=CS}else ut=ot.nodeName,!ut||ut.toLowerCase()!=="input"||ot.type!=="checkbox"&&ot.type!=="radio"?st&&Ri(st.elementType)&&(Ue=sm):Ue=DS;if(Ue&&(Ue=Ue(e,st))){am(St,Ue,a,gt);break t}Zt&&Zt(e,ot,st),e==="focusout"&&st&&ot.type==="number"&&st.memoizedProps.value!=null&&bn(ot,"number",ot.value)}switch(Zt=st?hs(st):window,e){case"focusin":(im(Zt)||Zt.contentEditable==="true")&&($s=Zt,Ku=st,yo=null);break;case"focusout":yo=Ku=$s=null;break;case"mousedown":Qu=!0;break;case"contextmenu":case"mouseup":case"dragend":Qu=!1,pm(St,a,gt);break;case"selectionchange":if(NS)break;case"keydown":case"keyup":pm(St,a,gt)}var _e;if(qu)t:{switch(e){case"compositionstart":var be="onCompositionStart";break t;case"compositionend":be="onCompositionEnd";break t;case"compositionupdate":be="onCompositionUpdate";break t}be=void 0}else Js?em(e,a)&&(be="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(be="onCompositionStart");be&&(Jp&&a.locale!=="ko"&&(Js||be!=="onCompositionStart"?be==="onCompositionEnd"&&Js&&(_e=Yp()):(Da=gt,Gu="value"in Da?Da.value:Da.textContent,Js=!0)),Zt=Mc(st,be),0<Zt.length&&(be=new Kp(be,e,null,a,gt),St.push({event:be,listeners:Zt}),_e?be.data=_e:(_e=nm(a),_e!==null&&(be.data=_e)))),(_e=ES?bS(e,a):TS(e,a))&&(be=Mc(st,"onBeforeInput"),0<be.length&&(Zt=new Kp("onBeforeInput","beforeinput",null,a,gt),St.push({event:Zt,listeners:be}),Zt.data=_e)),gy(St,e,st,a,gt)}H0(St,n)})}function qo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Mc(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=ho(e,a),u!=null&&o.unshift(qo(e,u,f)),u=ho(e,n),u!=null&&o.push(qo(e,u,f))),e.tag===3)return o;e=e.return}return[]}function Sy(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function V0(e,n,a,o,u){for(var f=n._reactName,S=[];a!==null&&a!==o;){var R=a,G=R.alternate,st=R.stateNode;if(R=R.tag,G!==null&&G===o)break;R!==5&&R!==26&&R!==27||st===null||(G=st,u?(st=ho(a,f),st!=null&&S.unshift(qo(a,st,G))):u||(st=ho(a,f),st!=null&&S.push(qo(a,st,G)))),a=a.return}S.length!==0&&e.push({event:n,listeners:S})}var yy=/\r\n?/g,My=/\u0000|\uFFFD/g;function k0(e){return(typeof e=="string"?e:""+e).replace(yy,`
`).replace(My,"")}function X0(e,n){return n=k0(n),k0(e)===n}function Xe(e,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||pn(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&pn(e,""+o);break;case"className":ee(e,"class",o);break;case"tabIndex":ee(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":ee(e,a,o);break;case"style":Zs(e,o,f);break;case"data":if(n!=="object"){ee(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Cl(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Xe(e,n,"name",u.name,u,null),Xe(e,n,"formEncType",u.formEncType,u,null),Xe(e,n,"formMethod",u.formMethod,u,null),Xe(e,n,"formTarget",u.formTarget,u,null)):(Xe(e,n,"encType",u.encType,u,null),Xe(e,n,"method",u.method,u,null),Xe(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Cl(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Ji);break;case"onScroll":o!=null&&Me("scroll",e);break;case"onScrollEnd":o!=null&&Me("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=Cl(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":Me("beforetoggle",e),Me("toggle",e),qt(e,"popover",o);break;case"xlinkActuate":Yt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Yt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Yt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Yt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Yt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Yt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Yt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Yt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Yt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":qt(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Kx.get(a)||a,qt(e,a,o))}}function Eh(e,n,a,o,u,f){switch(a){case"style":Zs(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?pn(e,o):(typeof o=="number"||typeof o=="bigint")&&pn(e,""+o);break;case"onScroll":o!=null&&Me("scroll",e);break;case"onScrollEnd":o!=null&&Me("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Ji);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ct.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[Mn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):qt(e,a,o)}}}function Un(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Me("error",e),Me("load",e);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var S=a[f];if(S!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Xe(e,n,f,S,a,null)}}u&&Xe(e,n,"srcSet",a.srcSet,a,null),o&&Xe(e,n,"src",a.src,a,null);return;case"input":Me("invalid",e);var R=f=S=u=null,G=null,st=null;for(o in a)if(a.hasOwnProperty(o)){var gt=a[o];if(gt!=null)switch(o){case"name":u=gt;break;case"type":S=gt;break;case"checked":G=gt;break;case"defaultChecked":st=gt;break;case"value":f=gt;break;case"defaultValue":R=gt;break;case"children":case"dangerouslySetInnerHTML":if(gt!=null)throw Error(s(137,n));break;default:Xe(e,n,o,gt,a,null)}}Qi(e,f,R,G,st,S,u,!1);return;case"select":Me("invalid",e),o=S=f=null;for(u in a)if(a.hasOwnProperty(u)&&(R=a[u],R!=null))switch(u){case"value":f=R;break;case"defaultValue":S=R;break;case"multiple":o=R;default:Xe(e,n,u,R,a,null)}n=f,a=S,e.multiple=!!o,n!=null?hi(e,!!o,n,!1):a!=null&&hi(e,!!o,a,!0);return;case"textarea":Me("invalid",e),f=u=o=null;for(S in a)if(a.hasOwnProperty(S)&&(R=a[S],R!=null))switch(S){case"value":o=R;break;case"defaultValue":u=R;break;case"children":f=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(s(91));break;default:Xe(e,n,S,R,a,null)}Tn(e,o,u,f);return;case"option":for(G in a)a.hasOwnProperty(G)&&(o=a[G],o!=null)&&(G==="selected"?e.selected=o&&typeof o!="function"&&typeof o!="symbol":Xe(e,n,G,o,a,null));return;case"dialog":Me("beforetoggle",e),Me("toggle",e),Me("cancel",e),Me("close",e);break;case"iframe":case"object":Me("load",e);break;case"video":case"audio":for(o=0;o<Wo.length;o++)Me(Wo[o],e);break;case"image":Me("error",e),Me("load",e);break;case"details":Me("toggle",e);break;case"embed":case"source":case"link":Me("error",e),Me("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(st in a)if(a.hasOwnProperty(st)&&(o=a[st],o!=null))switch(st){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Xe(e,n,st,o,a,null)}return;default:if(Ri(n)){for(gt in a)a.hasOwnProperty(gt)&&(o=a[gt],o!==void 0&&Eh(e,n,gt,o,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(o=a[R],o!=null&&Xe(e,n,R,o,a,null))}function Ey(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,S=null,R=null,G=null,st=null,gt=null;for(ut in a){var St=a[ut];if(a.hasOwnProperty(ut)&&St!=null)switch(ut){case"checked":break;case"value":break;case"defaultValue":G=St;default:o.hasOwnProperty(ut)||Xe(e,n,ut,null,o,St)}}for(var ot in o){var ut=o[ot];if(St=a[ot],o.hasOwnProperty(ot)&&(ut!=null||St!=null))switch(ot){case"type":f=ut;break;case"name":u=ut;break;case"checked":st=ut;break;case"defaultChecked":gt=ut;break;case"value":S=ut;break;case"defaultValue":R=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(s(137,n));break;default:ut!==St&&Xe(e,n,ot,ut,o,St)}}En(e,S,R,G,st,gt,f,u);return;case"select":ut=S=R=ot=null;for(f in a)if(G=a[f],a.hasOwnProperty(f)&&G!=null)switch(f){case"value":break;case"multiple":ut=G;default:o.hasOwnProperty(f)||Xe(e,n,f,null,o,G)}for(u in o)if(f=o[u],G=a[u],o.hasOwnProperty(u)&&(f!=null||G!=null))switch(u){case"value":ot=f;break;case"defaultValue":R=f;break;case"multiple":S=f;default:f!==G&&Xe(e,n,u,f,o,G)}n=R,a=S,o=ut,ot!=null?hi(e,!!a,ot,!1):!!o!=!!a&&(n!=null?hi(e,!!a,n,!0):hi(e,!!a,a?[]:"",!1));return;case"textarea":ut=ot=null;for(R in a)if(u=a[R],a.hasOwnProperty(R)&&u!=null&&!o.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Xe(e,n,R,null,o,u)}for(S in o)if(u=o[S],f=a[S],o.hasOwnProperty(S)&&(u!=null||f!=null))switch(S){case"value":ot=u;break;case"defaultValue":ut=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&Xe(e,n,S,u,o,f)}Fe(e,ot,ut);return;case"option":for(var Xt in a)ot=a[Xt],a.hasOwnProperty(Xt)&&ot!=null&&!o.hasOwnProperty(Xt)&&(Xt==="selected"?e.selected=!1:Xe(e,n,Xt,null,o,ot));for(G in o)ot=o[G],ut=a[G],o.hasOwnProperty(G)&&ot!==ut&&(ot!=null||ut!=null)&&(G==="selected"?e.selected=ot&&typeof ot!="function"&&typeof ot!="symbol":Xe(e,n,G,ot,o,ut));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ae in a)ot=a[ae],a.hasOwnProperty(ae)&&ot!=null&&!o.hasOwnProperty(ae)&&Xe(e,n,ae,null,o,ot);for(st in o)if(ot=o[st],ut=a[st],o.hasOwnProperty(st)&&ot!==ut&&(ot!=null||ut!=null))switch(st){case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(s(137,n));break;default:Xe(e,n,st,ot,o,ut)}return;default:if(Ri(n)){for(var We in a)ot=a[We],a.hasOwnProperty(We)&&ot!==void 0&&!o.hasOwnProperty(We)&&Eh(e,n,We,void 0,o,ot);for(gt in o)ot=o[gt],ut=a[gt],!o.hasOwnProperty(gt)||ot===ut||ot===void 0&&ut===void 0||Eh(e,n,gt,ot,o,ut);return}}for(var K in a)ot=a[K],a.hasOwnProperty(K)&&ot!=null&&!o.hasOwnProperty(K)&&Xe(e,n,K,null,o,ot);for(St in o)ot=o[St],ut=a[St],!o.hasOwnProperty(St)||ot===ut||ot==null&&ut==null||Xe(e,n,St,ot,o,ut)}function W0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function by(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],f=u.transferSize,S=u.initiatorType,R=u.duration;if(f&&R&&W0(S)){for(S=0,R=u.responseEnd,o+=1;o<a.length;o++){var G=a[o],st=G.startTime;if(st>R)break;var gt=G.transferSize,St=G.initiatorType;gt&&W0(St)&&(G=G.responseEnd,S+=gt*(G<R?1:(R-st)/(G-st)))}if(--o,n+=8*(f+S)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var bh=null,Th=null;function Ec(e){return e.nodeType===9?e:e.ownerDocument}function q0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Y0(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Ah(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Rh=null;function Ty(){var e=window.event;return e&&e.type==="popstate"?e===Rh?!1:(Rh=e,!0):(Rh=null,!1)}var j0=typeof setTimeout=="function"?setTimeout:void 0,Ay=typeof clearTimeout=="function"?clearTimeout:void 0,Z0=typeof Promise=="function"?Promise:void 0,Ry=typeof queueMicrotask=="function"?queueMicrotask:typeof Z0<"u"?function(e){return Z0.resolve(null).then(e).catch(Cy)}:j0;function Cy(e){setTimeout(function(){throw e})}function Ya(e){return e==="head"}function K0(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),Ar(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Yo(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Yo(a);for(var f=a.firstChild;f;){var S=f.nextSibling,R=f.nodeName;f[fs]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=S}}else a==="body"&&Yo(e.ownerDocument.body);a=u}while(a);Ar(n)}function Q0(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function Ch(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Ch(a),fo(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function wy(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[fs])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=xi(e.nextSibling),e===null)break}return null}function Dy(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=xi(e.nextSibling),e===null))return null;return e}function J0(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=xi(e.nextSibling),e===null))return null;return e}function wh(e){return e.data==="$?"||e.data==="$~"}function Dh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Uy(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function xi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Uh=null;function $0(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return xi(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function t_(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function e_(e,n,a){switch(n=Ec(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Yo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);fo(e)}var Si=new Map,n_=new Set;function bc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var pa=F.d;F.d={f:Ly,r:Ny,D:Oy,C:Py,L:zy,m:By,X:Fy,S:Iy,M:Hy};function Ly(){var e=pa.f(),n=mc();return e||n}function Ny(e){var n=Ca(e);n!==null&&n.tag===5&&n.type==="form"?xg(n):pa.r(e)}var Er=typeof document>"u"?null:document;function i_(e,n,a){var o=Er;if(o&&typeof n=="string"&&n){var u=he(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),n_.has(u)||(n_.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Un(n,"link",e),C(n),o.head.appendChild(n)))}}function Oy(e){pa.D(e),i_("dns-prefetch",e,null)}function Py(e,n){pa.C(e,n),i_("preconnect",e,n)}function zy(e,n,a){pa.L(e,n,a);var o=Er;if(o&&e&&n){var u='link[rel="preload"][as="'+he(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+he(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+he(a.imageSizes)+'"]')):u+='[href="'+he(e)+'"]';var f=u;switch(n){case"style":f=br(e);break;case"script":f=Tr(e)}Si.has(f)||(e=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),Si.set(f,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(jo(f))||n==="script"&&o.querySelector(Zo(f))||(n=o.createElement("link"),Un(n,"link",e),C(n),o.head.appendChild(n)))}}function By(e,n){pa.m(e,n);var a=Er;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+he(o)+'"][href="'+he(e)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Tr(e)}if(!Si.has(f)&&(e=_({rel:"modulepreload",href:e},n),Si.set(f,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Zo(f)))return}o=a.createElement("link"),Un(o,"link",e),C(o),a.head.appendChild(o)}}}function Iy(e,n,a){pa.S(e,n,a);var o=Er;if(o&&e){var u=wa(o).hoistableStyles,f=br(e);n=n||"default";var S=u.get(f);if(!S){var R={loading:0,preload:null};if(S=o.querySelector(jo(f)))R.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":n},a),(a=Si.get(f))&&Lh(e,a);var G=S=o.createElement("link");C(G),Un(G,"link",e),G._p=new Promise(function(st,gt){G.onload=st,G.onerror=gt}),G.addEventListener("load",function(){R.loading|=1}),G.addEventListener("error",function(){R.loading|=2}),R.loading|=4,Tc(S,n,o)}S={type:"stylesheet",instance:S,count:1,state:R},u.set(f,S)}}}function Fy(e,n){pa.X(e,n);var a=Er;if(a&&e){var o=wa(a).hoistableScripts,u=Tr(e),f=o.get(u);f||(f=a.querySelector(Zo(u)),f||(e=_({src:e,async:!0},n),(n=Si.get(u))&&Nh(e,n),f=a.createElement("script"),C(f),Un(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function Hy(e,n){pa.M(e,n);var a=Er;if(a&&e){var o=wa(a).hoistableScripts,u=Tr(e),f=o.get(u);f||(f=a.querySelector(Zo(u)),f||(e=_({src:e,async:!0,type:"module"},n),(n=Si.get(u))&&Nh(e,n),f=a.createElement("script"),C(f),Un(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function a_(e,n,a,o){var u=(u=Y.current)?bc(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=br(a.href),a=wa(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=br(a.href);var f=wa(u).hoistableStyles,S=f.get(e);if(S||(u=u.ownerDocument||u,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,S),(f=u.querySelector(jo(e)))&&!f._p&&(S.instance=f,S.state.loading=5),Si.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Si.set(e,a),f||Gy(u,e,a,S.state))),n&&o===null)throw Error(s(528,""));return S}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Tr(a),a=wa(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function br(e){return'href="'+he(e)+'"'}function jo(e){return'link[rel="stylesheet"]['+e+"]"}function s_(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function Gy(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Un(n,"link",a),C(n),e.head.appendChild(n))}function Tr(e){return'[src="'+he(e)+'"]'}function Zo(e){return"script[async]"+e}function r_(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+he(a.href)+'"]');if(o)return n.instance=o,C(o),o;var u=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),C(o),Un(o,"style",u),Tc(o,a.precedence,e),n.instance=o;case"stylesheet":u=br(a.href);var f=e.querySelector(jo(u));if(f)return n.state.loading|=4,n.instance=f,C(f),f;o=s_(a),(u=Si.get(u))&&Lh(o,u),f=(e.ownerDocument||e).createElement("link"),C(f);var S=f;return S._p=new Promise(function(R,G){S.onload=R,S.onerror=G}),Un(f,"link",o),n.state.loading|=4,Tc(f,a.precedence,e),n.instance=f;case"script":return f=Tr(a.src),(u=e.querySelector(Zo(f)))?(n.instance=u,C(u),u):(o=a,(u=Si.get(f))&&(o=_({},a),Nh(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),C(u),Un(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,Tc(o,a.precedence,e));return n.instance}function Tc(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,S=0;S<o.length;S++){var R=o[S];if(R.dataset.precedence===n)f=R;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Lh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Nh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Ac=null;function o_(e,n,a){if(Ac===null){var o=new Map,u=Ac=new Map;u.set(a,o)}else u=Ac,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[fs]||f[ln]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var S=f.getAttribute(n)||"";S=e+S;var R=o.get(S);R?R.push(f):o.set(S,[f])}}return o}function l_(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function Vy(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function c_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function ky(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=br(o.href),f=n.querySelector(jo(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=Rc.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,C(f);return}f=n.ownerDocument||n,o=s_(o),(u=Si.get(u))&&Lh(o,u),f=f.createElement("link"),C(f);var S=f;S._p=new Promise(function(R,G){S.onload=R,S.onerror=G}),Un(f,"link",o),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Rc.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var Oh=0;function Xy(e,n){return e.stylesheets&&e.count===0&&wc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&wc(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&Oh===0&&(Oh=62500*by());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&wc(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>Oh?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function Rc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)wc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Cc=null;function wc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Cc=new Map,n.forEach(Wy,e),Cc=null,Rc.call(e))}function Wy(e,n){if(!(n.state.loading&4)){var a=Cc.get(e);if(a)var o=a.get(null);else{a=new Map,Cc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var S=u[f];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),o=S)}o&&a.set(null,o)}u=n.instance,S=u.getAttribute("data-precedence"),f=a.get(S)||o,f===o&&a.set(null,u),a.set(S,u),this.count++,o=Rc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Ko={$$typeof:U,Provider:null,Consumer:null,_currentValue:J,_currentValue2:J,_threadCount:0};function qy(e,n,a,o,u,f,S,R,G){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=we(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=we(0),this.hiddenUpdates=we(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=G,this.incompleteTransitions=new Map}function u_(e,n,a,o,u,f,S,R,G,st,gt,St){return e=new qy(e,n,a,S,G,st,gt,St,R),n=1,f===!0&&(n|=24),f=ei(3,null,null,n),e.current=f,f.stateNode=e,n=df(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},_f(f),e}function f_(e){return e?(e=nr,e):nr}function h_(e,n,a,o,u,f){u=f_(u),o.context===null?o.context=u:o.pendingContext=u,o=za(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=Ba(e,o,n),a!==null&&(Kn(a,e,n),Co(a,e,n))}function d_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Ph(e,n){d_(e,n),(e=e.alternate)&&d_(e,n)}function p_(e){if(e.tag===13||e.tag===31){var n=gs(e,67108864);n!==null&&Kn(n,e,67108864),Ph(e,67108864)}}function m_(e){if(e.tag===13||e.tag===31){var n=ri();n=lo(n);var a=gs(e,n);a!==null&&Kn(a,e,n),Ph(e,n)}}var Dc=!0;function Yy(e,n,a,o){var u=I.T;I.T=null;var f=F.p;try{F.p=2,zh(e,n,a,o)}finally{F.p=f,I.T=u}}function jy(e,n,a,o){var u=I.T;I.T=null;var f=F.p;try{F.p=8,zh(e,n,a,o)}finally{F.p=f,I.T=u}}function zh(e,n,a,o){if(Dc){var u=Bh(o);if(u===null)Mh(e,n,o,Uc,a),__(e,o);else if(Ky(u,e,n,a,o))o.stopPropagation();else if(__(e,o),n&4&&-1<Zy.indexOf(e)){for(;u!==null;){var f=Ca(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var S=bt(f.pendingLanes);if(S!==0){var R=f;for(R.pendingLanes|=2,R.entangledLanes|=2;S;){var G=1<<31-It(S);R.entanglements[1]|=G,S&=~G}Vi(f),(Pe&6)===0&&(dc=E()+500,Xo(0))}}break;case 31:case 13:R=gs(f,2),R!==null&&Kn(R,f,2),mc(),Ph(f,2)}if(f=Bh(o),f===null&&Mh(e,n,o,Uc,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else Mh(e,n,o,null,a)}}function Bh(e){return e=Iu(e),Ih(e)}var Uc=null;function Ih(e){if(Uc=null,e=Ra(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Uc=e,null}function g_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(j()){case _t:return 2;case Et:return 8;case dt:case Kt:return 32;case Lt:return 268435456;default:return 32}default:return 32}}var Fh=!1,ja=null,Za=null,Ka=null,Qo=new Map,Jo=new Map,Qa=[],Zy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function __(e,n){switch(e){case"focusin":case"focusout":ja=null;break;case"dragenter":case"dragleave":Za=null;break;case"mouseover":case"mouseout":Ka=null;break;case"pointerover":case"pointerout":Qo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Jo.delete(n.pointerId)}}function $o(e,n,a,o,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Ca(n),n!==null&&p_(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function Ky(e,n,a,o,u){switch(n){case"focusin":return ja=$o(ja,e,n,a,o,u),!0;case"dragenter":return Za=$o(Za,e,n,a,o,u),!0;case"mouseover":return Ka=$o(Ka,e,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return Qo.set(f,$o(Qo.get(f)||null,e,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,Jo.set(f,$o(Jo.get(f)||null,e,n,a,o,u)),!0}return!1}function v_(e){var n=Ra(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,Ii(e.priority,function(){m_(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,Ii(e.priority,function(){m_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Lc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Bh(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);Bu=o,a.target.dispatchEvent(o),Bu=null}else return n=Ca(a),n!==null&&p_(n),e.blockedOn=a,!1;n.shift()}return!0}function x_(e,n,a){Lc(e)&&a.delete(n)}function Qy(){Fh=!1,ja!==null&&Lc(ja)&&(ja=null),Za!==null&&Lc(Za)&&(Za=null),Ka!==null&&Lc(Ka)&&(Ka=null),Qo.forEach(x_),Jo.forEach(x_)}function Nc(e,n){e.blockedOn===n&&(e.blockedOn=null,Fh||(Fh=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Qy)))}var Oc=null;function S_(e){Oc!==e&&(Oc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Oc===e&&(Oc=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(Ih(o||a)===null)continue;break}var f=Ca(a);f!==null&&(e.splice(n,3),n-=3,Bf(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Ar(e){function n(G){return Nc(G,e)}ja!==null&&Nc(ja,e),Za!==null&&Nc(Za,e),Ka!==null&&Nc(Ka,e),Qo.forEach(n),Jo.forEach(n);for(var a=0;a<Qa.length;a++){var o=Qa[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Qa.length&&(a=Qa[0],a.blockedOn===null);)v_(a),a.blockedOn===null&&Qa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],S=u[Mn]||null;if(typeof f=="function")S||S_(a);else if(S){var R=null;if(f&&f.hasAttribute("formAction")){if(u=f,S=f[Mn]||null)R=S.formAction;else if(Ih(u)!==null)continue}else R=S.action;typeof R=="function"?a[o+1]=R:(a.splice(o,3),o-=3),S_(a)}}}function y_(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(S){return u=S})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Hh(e){this._internalRoot=e}Pc.prototype.render=Hh.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=ri();h_(a,o,e,n,null,null)},Pc.prototype.unmount=Hh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;h_(e.current,2,null,e,null,null),mc(),n[Ai]=null}};function Pc(e){this._internalRoot=e}Pc.prototype.unstable_scheduleHydration=function(e){if(e){var n=co();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Qa.length&&n!==0&&n<Qa[a].priority;a++);Qa.splice(a,0,e),a===0&&v_(e)}};var M_=t.version;if(M_!=="19.2.7")throw Error(s(527,M_,"19.2.7"));F.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?v(e):null,e=e===null?null:e.stateNode,e};var Jy={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:I,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var zc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zc.isDisabled&&zc.supportsFiber)try{At=zc.inject(Jy),Ct=zc}catch{}}return el.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",u=wg,f=Dg,S=Ug;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError)),n=u_(e,1,!1,null,null,a,o,null,u,f,S,y_),e[Ai]=n.current,yh(e),new Hh(n)},el.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,u="",f=wg,S=Dg,R=Ug,G=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(G=a.formState)),n=u_(e,1,!0,n,a??null,o,u,G,f,S,R,y_),n.context=f_(null),a=n.current,o=ri(),o=lo(o),u=za(o),u.callback=null,Ba(a,u,o),a=o,n.current.lanes=a,On(n,a),Vi(n),e[Ai]=n.current,yh(e),new Pc(n)},el.version="19.2.7",el}var L_;function cM(){if(L_)return kh.exports;L_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),kh.exports=lM(),kh.exports}var uM=cM();async function Tp(r){const t=await fetch(r);if(!t.ok)throw new Error(await t.text());return t.json()}function fM(){return Tp("/api/sessions")}function hM(r){return Tp(`/api/sessions/${encodeURIComponent(r)}/trace`)}function dM(r){return Tp(`/api/sessions/${encodeURIComponent(r)}/citymap`)}const Yr={hit:1,read:2,edit:3},pM=12;class mM{events;idByPath=new Map;cursor=-1;touchByFile=new Map;touchByPath=new Map;visitsByFile=new Map;historyByPath=new Map;recentTargets=[];constructor(t,i){this.events=t?.events??[];for(const s of i?.files??[])this.idByPath.set(s.path,s.id)}snapshotAt(t){const i=Math.min(t,this.events.length-1);i<this.cursor&&this.reset();for(let s=this.cursor+1;s<=i;s++)this.apply(this.events[s]);return this.cursor=Math.max(this.cursor,i),{touchByFile:this.touchByFile,touchByPath:this.touchByPath,visitsByFile:this.visitsByFile,historyByPath:this.historyByPath,recentTargets:this.recentTargets}}reset(){this.cursor=-1,this.touchByFile.clear(),this.touchByPath.clear(),this.visitsByFile.clear(),this.historyByPath.clear(),this.recentTargets.length=0}apply(t){for(const i of t.targets){const s=this.touchByPath.get(i.path);(!s||Yr[i.touch]>Yr[s])&&this.touchByPath.set(i.path,i.touch);const l=i.fileId??this.idByPath.get(i.path);if(l!==void 0){const h=this.touchByFile.get(l);(!h||Yr[i.touch]>Yr[h])&&this.touchByFile.set(l,i.touch),this.visitsByFile.set(l,(this.visitsByFile.get(l)??0)+1)}const c=this.historyByPath.get(i.path);c?c.push(t):this.historyByPath.set(i.path,[t])}if(t.targets.length>0){const i=t.targets.find(s=>!s.weak)??t.targets[0];this.recentTargets.push({...i,fileId:i.fileId??this.idByPath.get(i.path)}),this.recentTargets.length>pM&&this.recentTargets.shift()}}}const Ap="182",Kr={ROTATE:0,DOLLY:1,PAN:2},jr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},gM=0,N_=1,_M=2,du=1,vM=2,_l=3,us=0,Jn=1,Sa=2,Ma=0,Qr=1,$r=2,O_=3,P_=4,xM=5,Ps=100,SM=101,yM=102,MM=103,EM=104,bM=200,TM=201,AM=202,RM=203,Cd=204,wd=205,CM=206,wM=207,DM=208,UM=209,LM=210,NM=211,OM=212,PM=213,zM=214,Dd=0,Ud=1,Ld=2,to=3,Nd=4,Od=5,Pd=6,zd=7,$v=0,BM=1,IM=2,Yi=0,tx=1,ex=2,nx=3,ix=4,ax=5,sx=6,rx=7,ox=300,Hs=301,eo=302,Bd=303,Id=304,Uu=306,Fd=1e3,ya=1001,Hd=1002,Ln=1003,FM=1004,Ic=1005,In=1006,Yh=1007,Is=1008,ui=1009,lx=1010,cx=1011,Sl=1012,Rp=1013,Zi=1014,Pi=1015,ba=1016,Cp=1017,wp=1018,yl=1020,ux=35902,fx=35899,hx=1021,dx=1022,zi=1023,Ta=1026,Fs=1027,Dp=1028,Up=1029,no=1030,Lp=1031,Np=1033,pu=33776,mu=33777,gu=33778,_u=33779,Gd=35840,Vd=35841,kd=35842,Xd=35843,Wd=36196,qd=37492,Yd=37496,jd=37488,Zd=37489,Kd=37490,Qd=37491,Jd=37808,$d=37809,tp=37810,ep=37811,np=37812,ip=37813,ap=37814,sp=37815,rp=37816,op=37817,lp=37818,cp=37819,up=37820,fp=37821,hp=36492,dp=36494,pp=36495,mp=36283,gp=36284,_p=36285,vp=36286,HM=3200,px=0,GM=1,rs="",Mi="srgb",io="srgb-linear",yu="linear",Ve="srgb",Rr=7680,z_=519,VM=512,kM=513,XM=514,Op=515,WM=516,qM=517,Pp=518,YM=519,xp=35044,B_=35048,I_="300 es",qi=2e3,Mu=2001;function mx(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Eu(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function jM(){const r=Eu("canvas");return r.style.display="block",r}const F_={};function bu(...r){const t="THREE."+r.shift();console.log(t,...r)}function le(...r){const t="THREE."+r.shift();console.warn(t,...r)}function Re(...r){const t="THREE."+r.shift();console.error(t,...r)}function Ml(...r){const t=r.join(" ");t in F_||(F_[t]=!0,le(...r))}function ZM(r,t,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}class Vs{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,t);t.target=null}}}const zn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],vu=Math.PI/180,Sp=180/Math.PI;function ls(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(zn[r&255]+zn[r>>8&255]+zn[r>>16&255]+zn[r>>24&255]+"-"+zn[t&255]+zn[t>>8&255]+"-"+zn[t>>16&15|64]+zn[t>>24&255]+"-"+zn[i&63|128]+zn[i>>8&255]+"-"+zn[i>>16&255]+zn[i>>24&255]+zn[s&255]+zn[s>>8&255]+zn[s>>16&255]+zn[s>>24&255]).toLowerCase()}function Se(r,t,i){return Math.max(t,Math.min(i,r))}function KM(r,t){return(r%t+t)%t}function jh(r,t,i){return(1-i)*r+i*t}function Wi(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function qe(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const QM={DEG2RAD:vu};class se{constructor(t=0,i=0){se.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Se(this.x,t.x,i.x),this.y=Se(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Se(this.x,t,i),this.y=Se(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Se(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Se(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,h=this.y-t.y;return this.x=c*s-h*l+t.x,this.y=c*l+h*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class bi{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,h,d){let m=s[l+0],p=s[l+1],v=s[l+2],_=s[l+3],M=c[h+0],y=c[h+1],T=c[h+2],w=c[h+3];if(d<=0){t[i+0]=m,t[i+1]=p,t[i+2]=v,t[i+3]=_;return}if(d>=1){t[i+0]=M,t[i+1]=y,t[i+2]=T,t[i+3]=w;return}if(_!==w||m!==M||p!==y||v!==T){let x=m*M+p*y+v*T+_*w;x<0&&(M=-M,y=-y,T=-T,w=-w,x=-x);let g=1-d;if(x<.9995){const P=Math.acos(x),U=Math.sin(P);g=Math.sin(g*P)/U,d=Math.sin(d*P)/U,m=m*g+M*d,p=p*g+y*d,v=v*g+T*d,_=_*g+w*d}else{m=m*g+M*d,p=p*g+y*d,v=v*g+T*d,_=_*g+w*d;const P=1/Math.sqrt(m*m+p*p+v*v+_*_);m*=P,p*=P,v*=P,_*=P}}t[i]=m,t[i+1]=p,t[i+2]=v,t[i+3]=_}static multiplyQuaternionsFlat(t,i,s,l,c,h){const d=s[l],m=s[l+1],p=s[l+2],v=s[l+3],_=c[h],M=c[h+1],y=c[h+2],T=c[h+3];return t[i]=d*T+v*_+m*y-p*M,t[i+1]=m*T+v*M+p*_-d*y,t[i+2]=p*T+v*y+d*M-m*_,t[i+3]=v*T-d*_-m*M-p*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,h=t._order,d=Math.cos,m=Math.sin,p=d(s/2),v=d(l/2),_=d(c/2),M=m(s/2),y=m(l/2),T=m(c/2);switch(h){case"XYZ":this._x=M*v*_+p*y*T,this._y=p*y*_-M*v*T,this._z=p*v*T+M*y*_,this._w=p*v*_-M*y*T;break;case"YXZ":this._x=M*v*_+p*y*T,this._y=p*y*_-M*v*T,this._z=p*v*T-M*y*_,this._w=p*v*_+M*y*T;break;case"ZXY":this._x=M*v*_-p*y*T,this._y=p*y*_+M*v*T,this._z=p*v*T+M*y*_,this._w=p*v*_-M*y*T;break;case"ZYX":this._x=M*v*_-p*y*T,this._y=p*y*_+M*v*T,this._z=p*v*T-M*y*_,this._w=p*v*_+M*y*T;break;case"YZX":this._x=M*v*_+p*y*T,this._y=p*y*_+M*v*T,this._z=p*v*T-M*y*_,this._w=p*v*_-M*y*T;break;case"XZY":this._x=M*v*_-p*y*T,this._y=p*y*_-M*v*T,this._z=p*v*T+M*y*_,this._w=p*v*_+M*y*T;break;default:le("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],h=i[1],d=i[5],m=i[9],p=i[2],v=i[6],_=i[10],M=s+d+_;if(M>0){const y=.5/Math.sqrt(M+1);this._w=.25/y,this._x=(v-m)*y,this._y=(c-p)*y,this._z=(h-l)*y}else if(s>d&&s>_){const y=2*Math.sqrt(1+s-d-_);this._w=(v-m)/y,this._x=.25*y,this._y=(l+h)/y,this._z=(c+p)/y}else if(d>_){const y=2*Math.sqrt(1+d-s-_);this._w=(c-p)/y,this._x=(l+h)/y,this._y=.25*y,this._z=(m+v)/y}else{const y=2*Math.sqrt(1+_-s-d);this._w=(h-l)/y,this._x=(c+p)/y,this._y=(m+v)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Se(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,h=t._w,d=i._x,m=i._y,p=i._z,v=i._w;return this._x=s*v+h*d+l*p-c*m,this._y=l*v+h*m+c*d-s*p,this._z=c*v+h*p+s*m-l*d,this._w=h*v-s*d-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){if(i<=0)return this;if(i>=1)return this.copy(t);let s=t._x,l=t._y,c=t._z,h=t._w,d=this.dot(t);d<0&&(s=-s,l=-l,c=-c,h=-h,d=-d);let m=1-i;if(d<.9995){const p=Math.acos(d),v=Math.sin(p);m=Math.sin(m*p)/v,i=Math.sin(i*p)/v,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(t=0,i=0,s=0){W.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(H_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(H_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,h=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*h,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,h=t.y,d=t.z,m=t.w,p=2*(h*l-d*s),v=2*(d*i-c*l),_=2*(c*s-h*i);return this.x=i+m*p+h*_-d*v,this.y=s+m*v+d*p-c*_,this.z=l+m*_+c*v-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Se(this.x,t.x,i.x),this.y=Se(this.y,t.y,i.y),this.z=Se(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Se(this.x,t,i),this.y=Se(this.y,t,i),this.z=Se(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Se(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*h-s*m,this.z=s*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Zh.copy(this).projectOnVector(t),this.sub(Zh)}reflect(t){return this.sub(Zh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Se(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Zh=new W,H_=new bi;class ve{constructor(t,i,s,l,c,h,d,m,p){ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,d,m,p)}set(t,i,s,l,c,h,d,m,p){const v=this.elements;return v[0]=t,v[1]=l,v[2]=d,v[3]=i,v[4]=c,v[5]=m,v[6]=s,v[7]=h,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],d=s[3],m=s[6],p=s[1],v=s[4],_=s[7],M=s[2],y=s[5],T=s[8],w=l[0],x=l[3],g=l[6],P=l[1],U=l[4],L=l[7],z=l[2],O=l[5],D=l[8];return c[0]=h*w+d*P+m*z,c[3]=h*x+d*U+m*O,c[6]=h*g+d*L+m*D,c[1]=p*w+v*P+_*z,c[4]=p*x+v*U+_*O,c[7]=p*g+v*L+_*D,c[2]=M*w+y*P+T*z,c[5]=M*x+y*U+T*O,c[8]=M*g+y*L+T*D,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],v=t[8];return i*h*v-i*d*p-s*c*v+s*d*m+l*c*p-l*h*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],v=t[8],_=v*h-d*p,M=d*m-v*c,y=p*c-h*m,T=i*_+s*M+l*y;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/T;return t[0]=_*w,t[1]=(l*p-v*s)*w,t[2]=(d*s-l*h)*w,t[3]=M*w,t[4]=(v*i-l*m)*w,t[5]=(l*c-d*i)*w,t[6]=y*w,t[7]=(s*m-p*i)*w,t[8]=(h*i-s*c)*w,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,h,d){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*h+p*d)+h+t,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(Kh.makeScale(t,i)),this}rotate(t){return this.premultiply(Kh.makeRotation(-t)),this}translate(t,i){return this.premultiply(Kh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Kh=new ve,G_=new ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),V_=new ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function JM(){const r={enabled:!0,workingColorSpace:io,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===Ve&&(l.r=Ea(l.r),l.g=Ea(l.g),l.b=Ea(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Ve&&(l.r=Jr(l.r),l.g=Jr(l.g),l.b=Jr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===rs?yu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Ml("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Ml("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[io]:{primaries:t,whitePoint:s,transfer:yu,toXYZ:G_,fromXYZ:V_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Mi},outputColorSpaceConfig:{drawingBufferColorSpace:Mi}},[Mi]:{primaries:t,whitePoint:s,transfer:Ve,toXYZ:G_,fromXYZ:V_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Mi}}}),r}const De=JM();function Ea(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Jr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Cr;class $M{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{Cr===void 0&&(Cr=Eu("canvas")),Cr.width=t.width,Cr.height=t.height;const l=Cr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=Cr}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Eu("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=Ea(c[h]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Ea(i[s]/255)*255):i[s]=Ea(i[s]);return{data:i,width:t.width,height:t.height}}else return le("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let tE=0;class zp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:tE++}),this.uuid=ls(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(Qh(l[h].image)):c.push(Qh(l[h]))}else c=Qh(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function Qh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?$M.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(le("Texture: Unable to serialize Texture."),{})}let eE=0;const Jh=new W;class Fn extends Vs{constructor(t=Fn.DEFAULT_IMAGE,i=Fn.DEFAULT_MAPPING,s=ya,l=ya,c=In,h=Is,d=zi,m=ui,p=Fn.DEFAULT_ANISOTROPY,v=rs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:eE++}),this.uuid=ls(),this.name="",this.source=new zp(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new se(0,0),this.repeat=new se(1,1),this.center=new se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Jh).x}get height(){return this.source.getSize(Jh).y}get depth(){return this.source.getSize(Jh).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){le(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){le(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ox)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Fd:t.x=t.x-Math.floor(t.x);break;case ya:t.x=t.x<0?0:1;break;case Hd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Fd:t.y=t.y-Math.floor(t.y);break;case ya:t.y=t.y<0?0:1;break;case Hd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Fn.DEFAULT_IMAGE=null;Fn.DEFAULT_MAPPING=ox;Fn.DEFAULT_ANISOTROPY=1;class sn{constructor(t=0,i=0,s=0,l=1){sn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,h=t.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,p=m[0],v=m[4],_=m[8],M=m[1],y=m[5],T=m[9],w=m[2],x=m[6],g=m[10];if(Math.abs(v-M)<.01&&Math.abs(_-w)<.01&&Math.abs(T-x)<.01){if(Math.abs(v+M)<.1&&Math.abs(_+w)<.1&&Math.abs(T+x)<.1&&Math.abs(p+y+g-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const U=(p+1)/2,L=(y+1)/2,z=(g+1)/2,O=(v+M)/4,D=(_+w)/4,V=(T+x)/4;return U>L&&U>z?U<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(U),l=O/s,c=D/s):L>z?L<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(L),s=O/l,c=V/l):z<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(z),s=D/c,l=V/c),this.set(s,l,c,i),this}let P=Math.sqrt((x-T)*(x-T)+(_-w)*(_-w)+(M-v)*(M-v));return Math.abs(P)<.001&&(P=1),this.x=(x-T)/P,this.y=(_-w)/P,this.z=(M-v)/P,this.w=Math.acos((p+y+g-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Se(this.x,t.x,i.x),this.y=Se(this.y,t.y,i.y),this.z=Se(this.z,t.z,i.z),this.w=Se(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Se(this.x,t,i),this.y=Se(this.y,t,i),this.z=Se(this.z,t,i),this.w=Se(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Se(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class nE extends Vs{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:In,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new sn(0,0,t,i),this.scissorTest=!1,this.viewport=new sn(0,0,t,i);const l={width:t,height:i,depth:s.depth},c=new Fn(l);this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:In,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new zp(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ji extends nE{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class gx extends Fn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=ya,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class iE extends Fn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=ya,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ks{constructor(t=new W(1/0,1/0,1/0),i=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Ui.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Ui.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Ui.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,Ui):Ui.fromBufferAttribute(c,h),Ui.applyMatrix4(t.matrixWorld),this.expandByPoint(Ui);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Fc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Fc.copy(s.boundingBox)),Fc.applyMatrix4(t.matrixWorld),this.union(Fc)}const l=t.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ui),Ui.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(nl),Hc.subVectors(this.max,nl),wr.subVectors(t.a,nl),Dr.subVectors(t.b,nl),Ur.subVectors(t.c,nl),$a.subVectors(Dr,wr),ts.subVectors(Ur,Dr),ws.subVectors(wr,Ur);let i=[0,-$a.z,$a.y,0,-ts.z,ts.y,0,-ws.z,ws.y,$a.z,0,-$a.x,ts.z,0,-ts.x,ws.z,0,-ws.x,-$a.y,$a.x,0,-ts.y,ts.x,0,-ws.y,ws.x,0];return!$h(i,wr,Dr,Ur,Hc)||(i=[1,0,0,0,1,0,0,0,1],!$h(i,wr,Dr,Ur,Hc))?!1:(Gc.crossVectors($a,ts),i=[Gc.x,Gc.y,Gc.z],$h(i,wr,Dr,Ur,Hc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ui).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ui).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ma[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ma[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ma[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ma[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ma[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ma[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ma[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ma[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ma),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ma=[new W,new W,new W,new W,new W,new W,new W,new W],Ui=new W,Fc=new ks,wr=new W,Dr=new W,Ur=new W,$a=new W,ts=new W,ws=new W,nl=new W,Hc=new W,Gc=new W,Ds=new W;function $h(r,t,i,s,l){for(let c=0,h=r.length-3;c<=h;c+=3){Ds.fromArray(r,c);const d=l.x*Math.abs(Ds.x)+l.y*Math.abs(Ds.y)+l.z*Math.abs(Ds.z),m=t.dot(Ds),p=i.dot(Ds),v=s.dot(Ds);if(Math.max(-Math.max(m,p,v),Math.min(m,p,v))>d)return!1}return!0}const aE=new ks,il=new W,td=new W;class so{constructor(t=new W,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):aE.setFromPoints(t).getCenter(s);let l=0;for(let c=0,h=t.length;c<h;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;il.subVectors(t,this.center);const i=il.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(il,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(td.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(il.copy(t.center).add(td)),this.expandByPoint(il.copy(t.center).sub(td))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const ga=new W,ed=new W,Vc=new W,es=new W,nd=new W,kc=new W,id=new W;class Lu{constructor(t=new W,i=new W(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ga)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ga.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ga.copy(this.origin).addScaledVector(this.direction,i),ga.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){ed.copy(t).add(i).multiplyScalar(.5),Vc.copy(i).sub(t).normalize(),es.copy(this.origin).sub(ed);const c=t.distanceTo(i)*.5,h=-this.direction.dot(Vc),d=es.dot(this.direction),m=-es.dot(Vc),p=es.lengthSq(),v=Math.abs(1-h*h);let _,M,y,T;if(v>0)if(_=h*m-d,M=h*d-m,T=c*v,_>=0)if(M>=-T)if(M<=T){const w=1/v;_*=w,M*=w,y=_*(_+h*M+2*d)+M*(h*_+M+2*m)+p}else M=c,_=Math.max(0,-(h*M+d)),y=-_*_+M*(M+2*m)+p;else M=-c,_=Math.max(0,-(h*M+d)),y=-_*_+M*(M+2*m)+p;else M<=-T?(_=Math.max(0,-(-h*c+d)),M=_>0?-c:Math.min(Math.max(-c,-m),c),y=-_*_+M*(M+2*m)+p):M<=T?(_=0,M=Math.min(Math.max(-c,-m),c),y=M*(M+2*m)+p):(_=Math.max(0,-(h*c+d)),M=_>0?c:Math.min(Math.max(-c,-m),c),y=-_*_+M*(M+2*m)+p);else M=h>0?-c:c,_=Math.max(0,-(h*M+d)),y=-_*_+M*(M+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(ed).addScaledVector(Vc,M),y}intersectSphere(t,i){ga.subVectors(t.center,this.origin);const s=ga.dot(this.direction),l=ga.dot(ga)-s*s,c=t.radius*t.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=s-h,m=s+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,h,d,m;const p=1/this.direction.x,v=1/this.direction.y,_=1/this.direction.z,M=this.origin;return p>=0?(s=(t.min.x-M.x)*p,l=(t.max.x-M.x)*p):(s=(t.max.x-M.x)*p,l=(t.min.x-M.x)*p),v>=0?(c=(t.min.y-M.y)*v,h=(t.max.y-M.y)*v):(c=(t.max.y-M.y)*v,h=(t.min.y-M.y)*v),s>h||c>l||((c>s||isNaN(s))&&(s=c),(h<l||isNaN(l))&&(l=h),_>=0?(d=(t.min.z-M.z)*_,m=(t.max.z-M.z)*_):(d=(t.max.z-M.z)*_,m=(t.min.z-M.z)*_),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,ga)!==null}intersectTriangle(t,i,s,l,c){nd.subVectors(i,t),kc.subVectors(s,t),id.crossVectors(nd,kc);let h=this.direction.dot(id),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;es.subVectors(this.origin,t);const m=d*this.direction.dot(kc.crossVectors(es,kc));if(m<0)return null;const p=d*this.direction.dot(nd.cross(es));if(p<0||m+p>h)return null;const v=-d*es.dot(id);return v<0?null:this.at(v/h,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ce{constructor(t,i,s,l,c,h,d,m,p,v,_,M,y,T,w,x){Ce.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,d,m,p,v,_,M,y,T,w,x)}set(t,i,s,l,c,h,d,m,p,v,_,M,y,T,w,x){const g=this.elements;return g[0]=t,g[4]=i,g[8]=s,g[12]=l,g[1]=c,g[5]=h,g[9]=d,g[13]=m,g[2]=p,g[6]=v,g[10]=_,g[14]=M,g[3]=y,g[7]=T,g[11]=w,g[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ce().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,s=t.elements,l=1/Lr.setFromMatrixColumn(t,0).length(),c=1/Lr.setFromMatrixColumn(t,1).length(),h=1/Lr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,h=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),v=Math.cos(c),_=Math.sin(c);if(t.order==="XYZ"){const M=h*v,y=h*_,T=d*v,w=d*_;i[0]=m*v,i[4]=-m*_,i[8]=p,i[1]=y+T*p,i[5]=M-w*p,i[9]=-d*m,i[2]=w-M*p,i[6]=T+y*p,i[10]=h*m}else if(t.order==="YXZ"){const M=m*v,y=m*_,T=p*v,w=p*_;i[0]=M+w*d,i[4]=T*d-y,i[8]=h*p,i[1]=h*_,i[5]=h*v,i[9]=-d,i[2]=y*d-T,i[6]=w+M*d,i[10]=h*m}else if(t.order==="ZXY"){const M=m*v,y=m*_,T=p*v,w=p*_;i[0]=M-w*d,i[4]=-h*_,i[8]=T+y*d,i[1]=y+T*d,i[5]=h*v,i[9]=w-M*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(t.order==="ZYX"){const M=h*v,y=h*_,T=d*v,w=d*_;i[0]=m*v,i[4]=T*p-y,i[8]=M*p+w,i[1]=m*_,i[5]=w*p+M,i[9]=y*p-T,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(t.order==="YZX"){const M=h*m,y=h*p,T=d*m,w=d*p;i[0]=m*v,i[4]=w-M*_,i[8]=T*_+y,i[1]=_,i[5]=h*v,i[9]=-d*v,i[2]=-p*v,i[6]=y*_+T,i[10]=M-w*_}else if(t.order==="XZY"){const M=h*m,y=h*p,T=d*m,w=d*p;i[0]=m*v,i[4]=-_,i[8]=p*v,i[1]=M*_+w,i[5]=h*v,i[9]=y*_-T,i[2]=T*_-y,i[6]=d*v,i[10]=w*_+M}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(sE,t,rE)}lookAt(t,i,s){const l=this.elements;return oi.subVectors(t,i),oi.lengthSq()===0&&(oi.z=1),oi.normalize(),ns.crossVectors(s,oi),ns.lengthSq()===0&&(Math.abs(s.z)===1?oi.x+=1e-4:oi.z+=1e-4,oi.normalize(),ns.crossVectors(s,oi)),ns.normalize(),Xc.crossVectors(oi,ns),l[0]=ns.x,l[4]=Xc.x,l[8]=oi.x,l[1]=ns.y,l[5]=Xc.y,l[9]=oi.y,l[2]=ns.z,l[6]=Xc.z,l[10]=oi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],d=s[4],m=s[8],p=s[12],v=s[1],_=s[5],M=s[9],y=s[13],T=s[2],w=s[6],x=s[10],g=s[14],P=s[3],U=s[7],L=s[11],z=s[15],O=l[0],D=l[4],V=l[8],b=l[12],A=l[1],H=l[5],Q=l[9],tt=l[13],lt=l[2],it=l[6],I=l[10],F=l[14],J=l[3],mt=l[7],pt=l[11],N=l[15];return c[0]=h*O+d*A+m*lt+p*J,c[4]=h*D+d*H+m*it+p*mt,c[8]=h*V+d*Q+m*I+p*pt,c[12]=h*b+d*tt+m*F+p*N,c[1]=v*O+_*A+M*lt+y*J,c[5]=v*D+_*H+M*it+y*mt,c[9]=v*V+_*Q+M*I+y*pt,c[13]=v*b+_*tt+M*F+y*N,c[2]=T*O+w*A+x*lt+g*J,c[6]=T*D+w*H+x*it+g*mt,c[10]=T*V+w*Q+x*I+g*pt,c[14]=T*b+w*tt+x*F+g*N,c[3]=P*O+U*A+L*lt+z*J,c[7]=P*D+U*H+L*it+z*mt,c[11]=P*V+U*Q+L*I+z*pt,c[15]=P*b+U*tt+L*F+z*N,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],h=t[1],d=t[5],m=t[9],p=t[13],v=t[2],_=t[6],M=t[10],y=t[14],T=t[3],w=t[7],x=t[11],g=t[15],P=m*y-p*M,U=d*y-p*_,L=d*M-m*_,z=h*y-p*v,O=h*M-m*v,D=h*_-d*v;return i*(w*P-x*U+g*L)-s*(T*P-x*z+g*O)+l*(T*U-w*z+g*D)-c*(T*L-w*O+x*D)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],v=t[8],_=t[9],M=t[10],y=t[11],T=t[12],w=t[13],x=t[14],g=t[15],P=_*x*p-w*M*p+w*m*y-d*x*y-_*m*g+d*M*g,U=T*M*p-v*x*p-T*m*y+h*x*y+v*m*g-h*M*g,L=v*w*p-T*_*p+T*d*y-h*w*y-v*d*g+h*_*g,z=T*_*m-v*w*m-T*d*M+h*w*M+v*d*x-h*_*x,O=i*P+s*U+l*L+c*z;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/O;return t[0]=P*D,t[1]=(w*M*c-_*x*c-w*l*y+s*x*y+_*l*g-s*M*g)*D,t[2]=(d*x*c-w*m*c+w*l*p-s*x*p-d*l*g+s*m*g)*D,t[3]=(_*m*c-d*M*c-_*l*p+s*M*p+d*l*y-s*m*y)*D,t[4]=U*D,t[5]=(v*x*c-T*M*c+T*l*y-i*x*y-v*l*g+i*M*g)*D,t[6]=(T*m*c-h*x*c-T*l*p+i*x*p+h*l*g-i*m*g)*D,t[7]=(h*M*c-v*m*c+v*l*p-i*M*p-h*l*y+i*m*y)*D,t[8]=L*D,t[9]=(T*_*c-v*w*c-T*s*y+i*w*y+v*s*g-i*_*g)*D,t[10]=(h*w*c-T*d*c+T*s*p-i*w*p-h*s*g+i*d*g)*D,t[11]=(v*d*c-h*_*c-v*s*p+i*_*p+h*s*y-i*d*y)*D,t[12]=z*D,t[13]=(v*w*l-T*_*l+T*s*M-i*w*M-v*s*x+i*_*x)*D,t[14]=(T*d*l-h*w*l-T*s*m+i*w*m+h*s*x-i*d*x)*D,t[15]=(h*_*l-v*d*l+v*s*m-i*_*m-h*s*M+i*d*M)*D,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,h=t.x,d=t.y,m=t.z,p=c*h,v=c*d;return this.set(p*h+s,p*d-l*m,p*m+l*d,0,p*d+l*m,v*d+s,v*m-l*h,0,p*m-l*d,v*m+l*h,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,h){return this.set(1,s,c,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,h=i._y,d=i._z,m=i._w,p=c+c,v=h+h,_=d+d,M=c*p,y=c*v,T=c*_,w=h*v,x=h*_,g=d*_,P=m*p,U=m*v,L=m*_,z=s.x,O=s.y,D=s.z;return l[0]=(1-(w+g))*z,l[1]=(y+L)*z,l[2]=(T-U)*z,l[3]=0,l[4]=(y-L)*O,l[5]=(1-(M+g))*O,l[6]=(x+P)*O,l[7]=0,l[8]=(T+U)*D,l[9]=(x-P)*D,l[10]=(1-(M+w))*D,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;if(t.x=l[12],t.y=l[13],t.z=l[14],this.determinant()===0)return s.set(1,1,1),i.identity(),this;let c=Lr.set(l[0],l[1],l[2]).length();const h=Lr.set(l[4],l[5],l[6]).length(),d=Lr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),Li.copy(this);const p=1/c,v=1/h,_=1/d;return Li.elements[0]*=p,Li.elements[1]*=p,Li.elements[2]*=p,Li.elements[4]*=v,Li.elements[5]*=v,Li.elements[6]*=v,Li.elements[8]*=_,Li.elements[9]*=_,Li.elements[10]*=_,i.setFromRotationMatrix(Li),s.x=c,s.y=h,s.z=d,this}makePerspective(t,i,s,l,c,h,d=qi,m=!1){const p=this.elements,v=2*c/(i-t),_=2*c/(s-l),M=(i+t)/(i-t),y=(s+l)/(s-l);let T,w;if(m)T=c/(h-c),w=h*c/(h-c);else if(d===qi)T=-(h+c)/(h-c),w=-2*h*c/(h-c);else if(d===Mu)T=-h/(h-c),w=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=v,p[4]=0,p[8]=M,p[12]=0,p[1]=0,p[5]=_,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=T,p[14]=w,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,c,h,d=qi,m=!1){const p=this.elements,v=2/(i-t),_=2/(s-l),M=-(i+t)/(i-t),y=-(s+l)/(s-l);let T,w;if(m)T=1/(h-c),w=h/(h-c);else if(d===qi)T=-2/(h-c),w=-(h+c)/(h-c);else if(d===Mu)T=-1/(h-c),w=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=v,p[4]=0,p[8]=0,p[12]=M,p[1]=0,p[5]=_,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=T,p[14]=w,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const Lr=new W,Li=new Ce,sE=new W(0,0,0),rE=new W(1,1,1),ns=new W,Xc=new W,oi=new W,k_=new Ce,X_=new bi;class Bi{constructor(t=0,i=0,s=0,l=Bi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],h=l[4],d=l[8],m=l[1],p=l[5],v=l[9],_=l[2],M=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(Se(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,y),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(M,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Se(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(Se(M,-1,1)),Math.abs(M)<.9999999?(this._y=Math.atan2(-_,y),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Se(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(M,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(Se(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-Se(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(M,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-v,y),this._y=0);break;default:le("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return k_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(k_,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return X_.setFromEuler(this),this.setFromQuaternion(X_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Bi.DEFAULT_ORDER="XYZ";class Bp{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let oE=0;const W_=new W,Nr=new bi,_a=new Ce,Wc=new W,al=new W,lE=new W,cE=new bi,q_=new W(1,0,0),Y_=new W(0,1,0),j_=new W(0,0,1),Z_={type:"added"},uE={type:"removed"},Or={type:"childadded",child:null},ad={type:"childremoved",child:null};class _n extends Vs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:oE++}),this.uuid=ls(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_n.DEFAULT_UP.clone();const t=new W,i=new Bi,s=new bi,l=new W(1,1,1);function c(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Ce},normalMatrix:{value:new ve}}),this.matrix=new Ce,this.matrixWorld=new Ce,this.matrixAutoUpdate=_n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Nr.setFromAxisAngle(t,i),this.quaternion.multiply(Nr),this}rotateOnWorldAxis(t,i){return Nr.setFromAxisAngle(t,i),this.quaternion.premultiply(Nr),this}rotateX(t){return this.rotateOnAxis(q_,t)}rotateY(t){return this.rotateOnAxis(Y_,t)}rotateZ(t){return this.rotateOnAxis(j_,t)}translateOnAxis(t,i){return W_.copy(t).applyQuaternion(this.quaternion),this.position.add(W_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(q_,t)}translateY(t){return this.translateOnAxis(Y_,t)}translateZ(t){return this.translateOnAxis(j_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(_a.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?Wc.copy(t):Wc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),al.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_a.lookAt(al,Wc,this.up):_a.lookAt(Wc,al,this.up),this.quaternion.setFromRotationMatrix(_a),l&&(_a.extractRotation(l.matrixWorld),Nr.setFromRotationMatrix(_a),this.quaternion.premultiply(Nr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Re("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Z_),Or.child=t,this.dispatchEvent(Or),Or.child=null):Re("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(uE),ad.child=t,this.dispatchEvent(ad),ad.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),_a.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),_a.multiply(t.parent.matrixWorld)),t.applyMatrix4(_a),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Z_),Or.child=t,this.dispatchEvent(Or),Or.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(al,t,lE),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(al,cE,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,v=m.length;p<v;p++){const _=m[p];c(t.shapes,_)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(t.materials,this.material[m]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(t.animations,m))}}if(i){const d=h(t.geometries),m=h(t.materials),p=h(t.textures),v=h(t.images),_=h(t.shapes),M=h(t.skeletons),y=h(t.animations),T=h(t.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),v.length>0&&(s.images=v),_.length>0&&(s.shapes=_),M.length>0&&(s.skeletons=M),y.length>0&&(s.animations=y),T.length>0&&(s.nodes=T)}return s.object=l,s;function h(d){const m=[];for(const p in d){const v=d[p];delete v.metadata,m.push(v)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}_n.DEFAULT_UP=new W(0,1,0);_n.DEFAULT_MATRIX_AUTO_UPDATE=!0;_n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ni=new W,va=new W,sd=new W,xa=new W,Pr=new W,zr=new W,K_=new W,rd=new W,od=new W,ld=new W,cd=new sn,ud=new sn,fd=new sn;class Ei{constructor(t=new W,i=new W,s=new W){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Ni.subVectors(t,i),l.cross(Ni);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Ni.subVectors(l,i),va.subVectors(s,i),sd.subVectors(t,i);const h=Ni.dot(Ni),d=Ni.dot(va),m=Ni.dot(sd),p=va.dot(va),v=va.dot(sd),_=h*p-d*d;if(_===0)return c.set(0,0,0),null;const M=1/_,y=(p*m-d*v)*M,T=(h*v-d*m)*M;return c.set(1-y-T,T,y)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,xa)===null?!1:xa.x>=0&&xa.y>=0&&xa.x+xa.y<=1}static getInterpolation(t,i,s,l,c,h,d,m){return this.getBarycoord(t,i,s,l,xa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,xa.x),m.addScaledVector(h,xa.y),m.addScaledVector(d,xa.z),m)}static getInterpolatedAttribute(t,i,s,l,c,h){return cd.setScalar(0),ud.setScalar(0),fd.setScalar(0),cd.fromBufferAttribute(t,i),ud.fromBufferAttribute(t,s),fd.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(cd,c.x),h.addScaledVector(ud,c.y),h.addScaledVector(fd,c.z),h}static isFrontFacing(t,i,s,l){return Ni.subVectors(s,i),va.subVectors(t,i),Ni.cross(va).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ni.subVectors(this.c,this.b),va.subVectors(this.a,this.b),Ni.cross(va).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ei.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Ei.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return Ei.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return Ei.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ei.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let h,d;Pr.subVectors(l,s),zr.subVectors(c,s),rd.subVectors(t,s);const m=Pr.dot(rd),p=zr.dot(rd);if(m<=0&&p<=0)return i.copy(s);od.subVectors(t,l);const v=Pr.dot(od),_=zr.dot(od);if(v>=0&&_<=v)return i.copy(l);const M=m*_-v*p;if(M<=0&&m>=0&&v<=0)return h=m/(m-v),i.copy(s).addScaledVector(Pr,h);ld.subVectors(t,c);const y=Pr.dot(ld),T=zr.dot(ld);if(T>=0&&y<=T)return i.copy(c);const w=y*p-m*T;if(w<=0&&p>=0&&T<=0)return d=p/(p-T),i.copy(s).addScaledVector(zr,d);const x=v*T-y*_;if(x<=0&&_-v>=0&&y-T>=0)return K_.subVectors(c,l),d=(_-v)/(_-v+(y-T)),i.copy(l).addScaledVector(K_,d);const g=1/(x+w+M);return h=w*g,d=M*g,i.copy(s).addScaledVector(Pr,h).addScaledVector(zr,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const _x={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},is={h:0,s:0,l:0},qc={h:0,s:0,l:0};function hd(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class ne{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Mi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,De.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=De.workingColorSpace){return this.r=t,this.g=i,this.b=s,De.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=De.workingColorSpace){if(t=KM(t,1),i=Se(i,0,1),s=Se(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,h=2*s-c;this.r=hd(h,c,t+1/3),this.g=hd(h,c,t),this.b=hd(h,c,t-1/3)}return De.colorSpaceToWorking(this,l),this}setStyle(t,i=Mi){function s(c){c!==void 0&&parseFloat(c)<1&&le("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:le("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);le("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Mi){const s=_x[t.toLowerCase()];return s!==void 0?this.setHex(s,i):le("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ea(t.r),this.g=Ea(t.g),this.b=Ea(t.b),this}copyLinearToSRGB(t){return this.r=Jr(t.r),this.g=Jr(t.g),this.b=Jr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Mi){return De.workingToColorSpace(Bn.copy(this),t),Math.round(Se(Bn.r*255,0,255))*65536+Math.round(Se(Bn.g*255,0,255))*256+Math.round(Se(Bn.b*255,0,255))}getHexString(t=Mi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=De.workingColorSpace){De.workingToColorSpace(Bn.copy(this),i);const s=Bn.r,l=Bn.g,c=Bn.b,h=Math.max(s,l,c),d=Math.min(s,l,c);let m,p;const v=(d+h)/2;if(d===h)m=0,p=0;else{const _=h-d;switch(p=v<=.5?_/(h+d):_/(2-h-d),h){case s:m=(l-c)/_+(l<c?6:0);break;case l:m=(c-s)/_+2;break;case c:m=(s-l)/_+4;break}m/=6}return t.h=m,t.s=p,t.l=v,t}getRGB(t,i=De.workingColorSpace){return De.workingToColorSpace(Bn.copy(this),i),t.r=Bn.r,t.g=Bn.g,t.b=Bn.b,t}getStyle(t=Mi){De.workingToColorSpace(Bn.copy(this),t);const i=Bn.r,s=Bn.g,l=Bn.b;return t!==Mi?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(is),this.setHSL(is.h+t,is.s+i,is.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(is),t.getHSL(qc);const s=jh(is.h,qc.h,i),l=jh(is.s,qc.s,i),c=jh(is.l,qc.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bn=new ne;ne.NAMES=_x;let fE=0;class Xs extends Vs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fE++}),this.uuid=ls(),this.name="",this.type="Material",this.blending=Qr,this.side=us,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Cd,this.blendDst=wd,this.blendEquation=Ps,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ne(0,0,0),this.blendAlpha=0,this.depthFunc=to,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=z_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Rr,this.stencilZFail=Rr,this.stencilZPass=Rr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){le(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){le(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Qr&&(s.blending=this.blending),this.side!==us&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Cd&&(s.blendSrc=this.blendSrc),this.blendDst!==wd&&(s.blendDst=this.blendDst),this.blendEquation!==Ps&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==to&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==z_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Rr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Rr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Rr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const h=[];for(const d in c){const m=c[d];delete m.metadata,h.push(m)}return h}if(i){const c=l(t.textures),h=l(t.images);c.length>0&&(s.textures=c),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class El extends Xs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bi,this.combine=$v,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const dn=new W,Yc=new se;let hE=0;class kn{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:hE++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=xp,this.updateRanges=[],this.gpuType=Pi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Yc.fromBufferAttribute(this,i),Yc.applyMatrix3(t),this.setXY(i,Yc.x,Yc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix3(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix4(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyNormalMatrix(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.transformDirection(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Wi(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=qe(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Wi(i,this.array)),i}setX(t,i){return this.normalized&&(i=qe(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Wi(i,this.array)),i}setY(t,i){return this.normalized&&(i=qe(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Wi(i,this.array)),i}setZ(t,i){return this.normalized&&(i=qe(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Wi(i,this.array)),i}setW(t,i){return this.normalized&&(i=qe(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=qe(i,this.array),s=qe(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=qe(i,this.array),s=qe(s,this.array),l=qe(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=qe(i,this.array),s=qe(s,this.array),l=qe(l,this.array),c=qe(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==xp&&(t.usage=this.usage),t}}class vx extends kn{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class xx extends kn{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class Nn extends kn{constructor(t,i,s){super(new Float32Array(t),i,s)}}let dE=0;const yi=new Ce,dd=new _n,Br=new W,li=new ks,sl=new ks,yn=new W;class Xn extends Vs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dE++}),this.uuid=ls(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(mx(t)?xx:vx)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new ve().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return yi.makeRotationFromQuaternion(t),this.applyMatrix4(yi),this}rotateX(t){return yi.makeRotationX(t),this.applyMatrix4(yi),this}rotateY(t){return yi.makeRotationY(t),this.applyMatrix4(yi),this}rotateZ(t){return yi.makeRotationZ(t),this.applyMatrix4(yi),this}translate(t,i,s){return yi.makeTranslation(t,i,s),this.applyMatrix4(yi),this}scale(t,i,s){return yi.makeScale(t,i,s),this.applyMatrix4(yi),this}lookAt(t){return dd.lookAt(t),dd.updateMatrix(),this.applyMatrix4(dd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Br).negate(),this.translate(Br.x,Br.y,Br.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const h=t[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Nn(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&le("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ks);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Re("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];li.setFromBufferAttribute(c),this.morphTargetsRelative?(yn.addVectors(this.boundingBox.min,li.min),this.boundingBox.expandByPoint(yn),yn.addVectors(this.boundingBox.max,li.max),this.boundingBox.expandByPoint(yn)):(this.boundingBox.expandByPoint(li.min),this.boundingBox.expandByPoint(li.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Re('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new so);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Re("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(t){const s=this.boundingSphere.center;if(li.setFromBufferAttribute(t),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];sl.setFromBufferAttribute(d),this.morphTargetsRelative?(yn.addVectors(li.min,sl.min),li.expandByPoint(yn),yn.addVectors(li.max,sl.max),li.expandByPoint(yn)):(li.expandByPoint(sl.min),li.expandByPoint(sl.max))}li.getCenter(s);let l=0;for(let c=0,h=t.count;c<h;c++)yn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(yn));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,v=d.count;p<v;p++)yn.fromBufferAttribute(d,p),m&&(Br.fromBufferAttribute(t,p),yn.add(Br)),l=Math.max(l,s.distanceToSquared(yn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Re('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Re("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new kn(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let V=0;V<s.count;V++)d[V]=new W,m[V]=new W;const p=new W,v=new W,_=new W,M=new se,y=new se,T=new se,w=new W,x=new W;function g(V,b,A){p.fromBufferAttribute(s,V),v.fromBufferAttribute(s,b),_.fromBufferAttribute(s,A),M.fromBufferAttribute(c,V),y.fromBufferAttribute(c,b),T.fromBufferAttribute(c,A),v.sub(p),_.sub(p),y.sub(M),T.sub(M);const H=1/(y.x*T.y-T.x*y.y);isFinite(H)&&(w.copy(v).multiplyScalar(T.y).addScaledVector(_,-y.y).multiplyScalar(H),x.copy(_).multiplyScalar(y.x).addScaledVector(v,-T.x).multiplyScalar(H),d[V].add(w),d[b].add(w),d[A].add(w),m[V].add(x),m[b].add(x),m[A].add(x))}let P=this.groups;P.length===0&&(P=[{start:0,count:t.count}]);for(let V=0,b=P.length;V<b;++V){const A=P[V],H=A.start,Q=A.count;for(let tt=H,lt=H+Q;tt<lt;tt+=3)g(t.getX(tt+0),t.getX(tt+1),t.getX(tt+2))}const U=new W,L=new W,z=new W,O=new W;function D(V){z.fromBufferAttribute(l,V),O.copy(z);const b=d[V];U.copy(b),U.sub(z.multiplyScalar(z.dot(b))).normalize(),L.crossVectors(O,b);const H=L.dot(m[V])<0?-1:1;h.setXYZW(V,U.x,U.y,U.z,H)}for(let V=0,b=P.length;V<b;++V){const A=P[V],H=A.start,Q=A.count;for(let tt=H,lt=H+Q;tt<lt;tt+=3)D(t.getX(tt+0)),D(t.getX(tt+1)),D(t.getX(tt+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new kn(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let M=0,y=s.count;M<y;M++)s.setXYZ(M,0,0,0);const l=new W,c=new W,h=new W,d=new W,m=new W,p=new W,v=new W,_=new W;if(t)for(let M=0,y=t.count;M<y;M+=3){const T=t.getX(M+0),w=t.getX(M+1),x=t.getX(M+2);l.fromBufferAttribute(i,T),c.fromBufferAttribute(i,w),h.fromBufferAttribute(i,x),v.subVectors(h,c),_.subVectors(l,c),v.cross(_),d.fromBufferAttribute(s,T),m.fromBufferAttribute(s,w),p.fromBufferAttribute(s,x),d.add(v),m.add(v),p.add(v),s.setXYZ(T,d.x,d.y,d.z),s.setXYZ(w,m.x,m.y,m.z),s.setXYZ(x,p.x,p.y,p.z)}else for(let M=0,y=i.count;M<y;M+=3)l.fromBufferAttribute(i,M+0),c.fromBufferAttribute(i,M+1),h.fromBufferAttribute(i,M+2),v.subVectors(h,c),_.subVectors(l,c),v.cross(_),s.setXYZ(M+0,v.x,v.y,v.z),s.setXYZ(M+1,v.x,v.y,v.z),s.setXYZ(M+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)yn.fromBufferAttribute(t,i),yn.normalize(),t.setXYZ(i,yn.x,yn.y,yn.z)}toNonIndexed(){function t(d,m){const p=d.array,v=d.itemSize,_=d.normalized,M=new p.constructor(m.length*v);let y=0,T=0;for(let w=0,x=m.length;w<x;w++){d.isInterleavedBufferAttribute?y=m[w]*d.data.stride+d.offset:y=m[w]*v;for(let g=0;g<v;g++)M[T++]=p[y++]}return new kn(M,v,_)}if(this.index===null)return le("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Xn,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,s);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let v=0,_=p.length;v<_;v++){const M=p[v],y=t(M,s);m.push(y)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],v=[];for(let _=0,M=p.length;_<M;_++){const y=p[_];v.push(y.toJSON(t.data))}v.length>0&&(l[m]=v,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const v=l[p];this.setAttribute(p,v.clone(i))}const c=t.morphAttributes;for(const p in c){const v=[],_=c[p];for(let M=0,y=_.length;M<y;M++)v.push(_[M].clone(i));this.morphAttributes[p]=v}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,v=h.length;p<v;p++){const _=h[p];this.addGroup(_.start,_.count,_.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Q_=new Ce,Us=new Lu,jc=new so,J_=new W,Zc=new W,Kc=new W,Qc=new W,pd=new W,Jc=new W,$_=new W,$c=new W;class $n extends _n{constructor(t=new Xn,i=new El){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){Jc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const v=d[m],_=c[m];v!==0&&(pd.fromBufferAttribute(_,t),h?Jc.addScaledVector(pd,v):Jc.addScaledVector(pd.sub(i),v))}i.add(Jc)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),jc.copy(s.boundingSphere),jc.applyMatrix4(c),Us.copy(t.ray).recast(t.near),!(jc.containsPoint(Us.origin)===!1&&(Us.intersectSphere(jc,J_)===null||Us.origin.distanceToSquared(J_)>(t.far-t.near)**2))&&(Q_.copy(c).invert(),Us.copy(t.ray).applyMatrix4(Q_),!(s.boundingBox!==null&&Us.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,Us)))}_computeIntersections(t,i,s){let l;const c=this.geometry,h=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,v=c.attributes.uv1,_=c.attributes.normal,M=c.groups,y=c.drawRange;if(d!==null)if(Array.isArray(h))for(let T=0,w=M.length;T<w;T++){const x=M[T],g=h[x.materialIndex],P=Math.max(x.start,y.start),U=Math.min(d.count,Math.min(x.start+x.count,y.start+y.count));for(let L=P,z=U;L<z;L+=3){const O=d.getX(L),D=d.getX(L+1),V=d.getX(L+2);l=tu(this,g,t,s,p,v,_,O,D,V),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=x.materialIndex,i.push(l))}}else{const T=Math.max(0,y.start),w=Math.min(d.count,y.start+y.count);for(let x=T,g=w;x<g;x+=3){const P=d.getX(x),U=d.getX(x+1),L=d.getX(x+2);l=tu(this,h,t,s,p,v,_,P,U,L),l&&(l.faceIndex=Math.floor(x/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let T=0,w=M.length;T<w;T++){const x=M[T],g=h[x.materialIndex],P=Math.max(x.start,y.start),U=Math.min(m.count,Math.min(x.start+x.count,y.start+y.count));for(let L=P,z=U;L<z;L+=3){const O=L,D=L+1,V=L+2;l=tu(this,g,t,s,p,v,_,O,D,V),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=x.materialIndex,i.push(l))}}else{const T=Math.max(0,y.start),w=Math.min(m.count,y.start+y.count);for(let x=T,g=w;x<g;x+=3){const P=x,U=x+1,L=x+2;l=tu(this,h,t,s,p,v,_,P,U,L),l&&(l.faceIndex=Math.floor(x/3),i.push(l))}}}}function pE(r,t,i,s,l,c,h,d){let m;if(t.side===Jn?m=s.intersectTriangle(h,c,l,!0,d):m=s.intersectTriangle(l,c,h,t.side===us,d),m===null)return null;$c.copy(d),$c.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo($c);return p<i.near||p>i.far?null:{distance:p,point:$c.clone(),object:r}}function tu(r,t,i,s,l,c,h,d,m,p){r.getVertexPosition(d,Zc),r.getVertexPosition(m,Kc),r.getVertexPosition(p,Qc);const v=pE(r,t,i,s,Zc,Kc,Qc,$_);if(v){const _=new W;Ei.getBarycoord($_,Zc,Kc,Qc,_),l&&(v.uv=Ei.getInterpolatedAttribute(l,d,m,p,_,new se)),c&&(v.uv1=Ei.getInterpolatedAttribute(c,d,m,p,_,new se)),h&&(v.normal=Ei.getInterpolatedAttribute(h,d,m,p,_,new W),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const M={a:d,b:m,c:p,normal:new W,materialIndex:0};Ei.getNormal(Zc,Kc,Qc,M.normal),v.face=M,v.barycoord=_}return v}class cs extends Xn{constructor(t=1,i=1,s=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],p=[],v=[],_=[];let M=0,y=0;T("z","y","x",-1,-1,s,i,t,h,c,0),T("z","y","x",1,-1,s,i,-t,h,c,1),T("x","z","y",1,1,t,s,i,l,h,2),T("x","z","y",1,-1,t,s,-i,l,h,3),T("x","y","z",1,-1,t,i,s,l,c,4),T("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new Nn(p,3)),this.setAttribute("normal",new Nn(v,3)),this.setAttribute("uv",new Nn(_,2));function T(w,x,g,P,U,L,z,O,D,V,b){const A=L/D,H=z/V,Q=L/2,tt=z/2,lt=O/2,it=D+1,I=V+1;let F=0,J=0;const mt=new W;for(let pt=0;pt<I;pt++){const N=pt*H-tt;for(let et=0;et<it;et++){const ht=et*A-Q;mt[w]=ht*P,mt[x]=N*U,mt[g]=lt,p.push(mt.x,mt.y,mt.z),mt[w]=0,mt[x]=0,mt[g]=O>0?1:-1,v.push(mt.x,mt.y,mt.z),_.push(et/D),_.push(1-pt/V),F+=1}}for(let pt=0;pt<V;pt++)for(let N=0;N<D;N++){const et=M+N+it*pt,ht=M+N+it*(pt+1),xt=M+(N+1)+it*(pt+1),Tt=M+(N+1)+it*pt;m.push(et,ht,Tt),m.push(ht,xt,Tt),J+=6}d.addGroup(y,J,b),y+=J,M+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cs(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ao(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(le("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function Vn(r){const t={};for(let i=0;i<r.length;i++){const s=ao(r[i]);for(const l in s)t[l]=s[l]}return t}function mE(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function Sx(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:De.workingColorSpace}const gE={clone:ao,merge:Vn};var _E=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ki extends Xs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_E,this.fragmentShader=vE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ao(t.uniforms),this.uniformsGroups=mE(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class yx extends _n{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ce,this.projectionMatrix=new Ce,this.projectionMatrixInverse=new Ce,this.coordinateSystem=qi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const as=new W,tv=new se,ev=new se;class ci extends yx{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Sp*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(vu*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Sp*2*Math.atan(Math.tan(vu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){as.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(as.x,as.y).multiplyScalar(-t/as.z),as.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(as.x,as.y).multiplyScalar(-t/as.z)}getViewSize(t,i){return this.getViewBounds(t,tv,ev),i.subVectors(ev,tv)}setViewOffset(t,i,s,l,c,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(vu*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*s/p,l*=h.width/m,s*=h.height/p}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Ir=-90,Fr=1;class xE extends _n{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ci(Ir,Fr,t,i);l.layers=this.layers,this.add(l);const c=new ci(Ir,Fr,t,i);c.layers=this.layers,this.add(c);const h=new ci(Ir,Fr,t,i);h.layers=this.layers,this.add(h);const d=new ci(Ir,Fr,t,i);d.layers=this.layers,this.add(d);const m=new ci(Ir,Fr,t,i);m.layers=this.layers,this.add(m);const p=new ci(Ir,Fr,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,h,d,m]=i;for(const p of i)this.remove(p);if(t===qi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Mu)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,m,p,v]=this.children,_=t.getRenderTarget(),M=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),T=t.xr.enabled;t.xr.enabled=!1;const w=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,c),t.setRenderTarget(s,1,l),t.render(i,h),t.setRenderTarget(s,2,l),t.render(i,d),t.setRenderTarget(s,3,l),t.render(i,m),t.setRenderTarget(s,4,l),t.render(i,p),s.texture.generateMipmaps=w,t.setRenderTarget(s,5,l),t.render(i,v),t.setRenderTarget(_,M,y),t.xr.enabled=T,s.texture.needsPMREMUpdate=!0}}class Mx extends Fn{constructor(t=[],i=Hs,s,l,c,h,d,m,p,v){super(t,i,s,l,c,h,d,m,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ex extends ji{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new Mx(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new cs(5,5,5),c=new Ki({name:"CubemapFromEquirect",uniforms:ao(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Jn,blending:Ma});c.uniforms.tEquirect.value=i;const h=new $n(l,c),d=i.minFilter;return i.minFilter===Is&&(i.minFilter=In),new xE(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,s,l);t.setRenderTarget(c)}}class Zr extends _n{constructor(){super(),this.isGroup=!0,this.type="Group"}}const SE={type:"move"};class md{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const w of t.hand.values()){const x=i.getJointPose(w,s),g=this._getHandJoint(p,w);x!==null&&(g.matrix.fromArray(x.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=x.radius),g.visible=x!==null}const v=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],M=v.position.distanceTo(_.position),y=.02,T=.005;p.inputState.pinching&&M>y+T?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&M<=y-T&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(SE)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Zr;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}class Nu{constructor(t,i=1,s=1e3){this.isFog=!0,this.name="",this.color=new ne(t),this.near=i,this.far=s}clone(){return new Nu(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class bx extends _n{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bi,this.environmentIntensity=1,this.environmentRotation=new Bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class yE{constructor(t,i){this.isInterleavedBuffer=!0,this.array=t,this.stride=i,this.count=t!==void 0?t.length/i:0,this.usage=xp,this.updateRanges=[],this.version=0,this.uuid=ls()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,i,s){t*=this.stride,s*=i.stride;for(let l=0,c=this.stride;l<c;l++)this.array[t+l]=i.array[s+l];return this}set(t,i=0){return this.array.set(t,i),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ls()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const i=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),s=new this.constructor(i,this.stride);return s.setUsage(this.usage),s}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ls()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Gn=new W;class Tu{constructor(t,i,s,l=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=i,this.offset=s,this.normalized=l}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let i=0,s=this.data.count;i<s;i++)Gn.fromBufferAttribute(this,i),Gn.applyMatrix4(t),this.setXYZ(i,Gn.x,Gn.y,Gn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)Gn.fromBufferAttribute(this,i),Gn.applyNormalMatrix(t),this.setXYZ(i,Gn.x,Gn.y,Gn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)Gn.fromBufferAttribute(this,i),Gn.transformDirection(t),this.setXYZ(i,Gn.x,Gn.y,Gn.z);return this}getComponent(t,i){let s=this.array[t*this.data.stride+this.offset+i];return this.normalized&&(s=Wi(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=qe(s,this.array)),this.data.array[t*this.data.stride+this.offset+i]=s,this}setX(t,i){return this.normalized&&(i=qe(i,this.array)),this.data.array[t*this.data.stride+this.offset]=i,this}setY(t,i){return this.normalized&&(i=qe(i,this.array)),this.data.array[t*this.data.stride+this.offset+1]=i,this}setZ(t,i){return this.normalized&&(i=qe(i,this.array)),this.data.array[t*this.data.stride+this.offset+2]=i,this}setW(t,i){return this.normalized&&(i=qe(i,this.array)),this.data.array[t*this.data.stride+this.offset+3]=i,this}getX(t){let i=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(i=Wi(i,this.array)),i}getY(t){let i=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(i=Wi(i,this.array)),i}getZ(t){let i=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(i=Wi(i,this.array)),i}getW(t){let i=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(i=Wi(i,this.array)),i}setXY(t,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(i=qe(i,this.array),s=qe(s,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=s,this}setXYZ(t,i,s,l){return t=t*this.data.stride+this.offset,this.normalized&&(i=qe(i,this.array),s=qe(s,this.array),l=qe(l,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=s,this.data.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t=t*this.data.stride+this.offset,this.normalized&&(i=qe(i,this.array),s=qe(s,this.array),l=qe(l,this.array),c=qe(c,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=s,this.data.array[t+2]=l,this.data.array[t+3]=c,this}clone(t){if(t===void 0){bu("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let s=0;s<this.count;s++){const l=s*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return new kn(new this.array.constructor(i),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Tu(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){bu("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let s=0;s<this.count;s++){const l=s*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Au extends Xs{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ne(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Hr;const rl=new W,Gr=new W,Vr=new W,kr=new se,ol=new se,Tx=new Ce,eu=new W,ll=new W,nu=new W,nv=new se,gd=new se,iv=new se;class Ru extends _n{constructor(t=new Au){if(super(),this.isSprite=!0,this.type="Sprite",Hr===void 0){Hr=new Xn;const i=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),s=new yE(i,5);Hr.setIndex([0,1,2,0,2,3]),Hr.setAttribute("position",new Tu(s,3,0,!1)),Hr.setAttribute("uv",new Tu(s,2,3,!1))}this.geometry=Hr,this.material=t,this.center=new se(.5,.5),this.count=1}raycast(t,i){t.camera===null&&Re('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Gr.setFromMatrixScale(this.matrixWorld),Tx.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Vr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Gr.multiplyScalar(-Vr.z);const s=this.material.rotation;let l,c;s!==0&&(c=Math.cos(s),l=Math.sin(s));const h=this.center;iu(eu.set(-.5,-.5,0),Vr,h,Gr,l,c),iu(ll.set(.5,-.5,0),Vr,h,Gr,l,c),iu(nu.set(.5,.5,0),Vr,h,Gr,l,c),nv.set(0,0),gd.set(1,0),iv.set(1,1);let d=t.ray.intersectTriangle(eu,ll,nu,!1,rl);if(d===null&&(iu(ll.set(-.5,.5,0),Vr,h,Gr,l,c),gd.set(0,1),d=t.ray.intersectTriangle(eu,nu,ll,!1,rl),d===null))return;const m=t.ray.origin.distanceTo(rl);m<t.near||m>t.far||i.push({distance:m,point:rl.clone(),uv:Ei.getInterpolation(rl,eu,ll,nu,nv,gd,iv,new se),face:null,object:this})}copy(t,i){return super.copy(t,i),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function iu(r,t,i,s,l,c){kr.subVectors(r,i).addScalar(.5).multiply(s),l!==void 0?(ol.x=c*kr.x-l*kr.y,ol.y=l*kr.x+c*kr.y):ol.copy(kr),r.copy(t),r.x+=ol.x,r.y+=ol.y,r.applyMatrix4(Tx)}class Ax extends Fn{constructor(t=null,i=1,s=1,l,c,h,d,m,p=Ln,v=Ln,_,M){super(null,h,d,m,p,v,l,c,_,M),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bl extends kn{constructor(t,i,s,l=1){super(t,i,s),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=l}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Xr=new Ce,av=new Ce,au=[],sv=new ks,ME=new Ce,cl=new $n,ul=new so;class xl extends $n{constructor(t,i,s){super(t,i),this.isInstancedMesh=!0,this.instanceMatrix=new bl(new Float32Array(s*16),16),this.instanceColor=null,this.morphTexture=null,this.count=s,this.boundingBox=null,this.boundingSphere=null;for(let l=0;l<s;l++)this.setMatrixAt(l,ME)}computeBoundingBox(){const t=this.geometry,i=this.count;this.boundingBox===null&&(this.boundingBox=new ks),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let s=0;s<i;s++)this.getMatrixAt(s,Xr),sv.copy(t.boundingBox).applyMatrix4(Xr),this.boundingBox.union(sv)}computeBoundingSphere(){const t=this.geometry,i=this.count;this.boundingSphere===null&&(this.boundingSphere=new so),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let s=0;s<i;s++)this.getMatrixAt(s,Xr),ul.copy(t.boundingSphere).applyMatrix4(Xr),this.boundingSphere.union(ul)}copy(t,i){return super.copy(t,i),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,i){i.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,i){i.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,i){const s=i.morphTargetInfluences,l=this.morphTexture.source.data.data,c=s.length+1,h=t*c+1;for(let d=0;d<s.length;d++)s[d]=l[h+d]}raycast(t,i){const s=this.matrixWorld,l=this.count;if(cl.geometry=this.geometry,cl.material=this.material,cl.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ul.copy(this.boundingSphere),ul.applyMatrix4(s),t.ray.intersectsSphere(ul)!==!1))for(let c=0;c<l;c++){this.getMatrixAt(c,Xr),av.multiplyMatrices(s,Xr),cl.matrixWorld=av,cl.raycast(t,au);for(let h=0,d=au.length;h<d;h++){const m=au[h];m.instanceId=c,m.object=this,i.push(m)}au.length=0}}setColorAt(t,i){this.instanceColor===null&&(this.instanceColor=new bl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),i.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,i){i.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,i){const s=i.morphTargetInfluences,l=s.length+1;this.morphTexture===null&&(this.morphTexture=new Ax(new Float32Array(l*this.count),l,this.count,Dp,Pi));const c=this.morphTexture.source.data.data;let h=0;for(let p=0;p<s.length;p++)h+=s[p];const d=this.geometry.morphTargetsRelative?1:1-h,m=l*t;c[m]=d,c.set(s,m+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const _d=new W,EE=new W,bE=new ve;class ss{constructor(t=new W(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=_d.subVectors(s,i).cross(EE.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(_d),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||bE.getNormalMatrix(t),l=this.coplanarPoint(_d).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ls=new so,TE=new se(.5,.5),su=new W;class Ip{constructor(t=new ss,i=new ss,s=new ss,l=new ss,c=new ss,h=new ss){this.planes=[t,i,s,l,c,h]}set(t,i,s,l,c,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=qi,s=!1){const l=this.planes,c=t.elements,h=c[0],d=c[1],m=c[2],p=c[3],v=c[4],_=c[5],M=c[6],y=c[7],T=c[8],w=c[9],x=c[10],g=c[11],P=c[12],U=c[13],L=c[14],z=c[15];if(l[0].setComponents(p-h,y-v,g-T,z-P).normalize(),l[1].setComponents(p+h,y+v,g+T,z+P).normalize(),l[2].setComponents(p+d,y+_,g+w,z+U).normalize(),l[3].setComponents(p-d,y-_,g-w,z-U).normalize(),s)l[4].setComponents(m,M,x,L).normalize(),l[5].setComponents(p-m,y-M,g-x,z-L).normalize();else if(l[4].setComponents(p-m,y-M,g-x,z-L).normalize(),i===qi)l[5].setComponents(p+m,y+M,g+x,z+L).normalize();else if(i===Mu)l[5].setComponents(m,M,x,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ls.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Ls.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ls)}intersectsSprite(t){Ls.center.set(0,0,0);const i=TE.distanceTo(t.center);return Ls.radius=.7071067811865476+i,Ls.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ls)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(su.x=l.normal.x>0?t.max.x:t.min.x,su.y=l.normal.y>0?t.max.y:t.min.y,su.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(su)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ou extends Xs{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ne(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Cu=new W,wu=new W,rv=new Ce,fl=new Lu,ru=new so,vd=new W,ov=new W;class Rx extends _n{constructor(t=new Xn,i=new Ou){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)Cu.fromBufferAttribute(i,l-1),wu.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=Cu.distanceTo(wu);t.setAttribute("lineDistance",new Nn(s,1))}else le("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),ru.copy(s.boundingSphere),ru.applyMatrix4(l),ru.radius+=c,t.ray.intersectsSphere(ru)===!1)return;rv.copy(l).invert(),fl.copy(t.ray).applyMatrix4(rv);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,v=s.index,M=s.attributes.position;if(v!==null){const y=Math.max(0,h.start),T=Math.min(v.count,h.start+h.count);for(let w=y,x=T-1;w<x;w+=p){const g=v.getX(w),P=v.getX(w+1),U=ou(this,t,fl,m,g,P,w);U&&i.push(U)}if(this.isLineLoop){const w=v.getX(T-1),x=v.getX(y),g=ou(this,t,fl,m,w,x,T-1);g&&i.push(g)}}else{const y=Math.max(0,h.start),T=Math.min(M.count,h.start+h.count);for(let w=y,x=T-1;w<x;w+=p){const g=ou(this,t,fl,m,w,w+1,w);g&&i.push(g)}if(this.isLineLoop){const w=ou(this,t,fl,m,T-1,y,T-1);w&&i.push(w)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function ou(r,t,i,s,l,c,h){const d=r.geometry.attributes.position;if(Cu.fromBufferAttribute(d,l),wu.fromBufferAttribute(d,c),i.distanceSqToSegment(Cu,wu,vd,ov)>s)return;vd.applyMatrix4(r.matrixWorld);const p=t.ray.origin.distanceTo(vd);if(!(p<t.near||p>t.far))return{distance:p,point:ov.clone().applyMatrix4(r.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:r}}const lv=new W,cv=new W;class Fp extends Rx{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)lv.fromBufferAttribute(i,l),cv.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+lv.distanceTo(cv);t.setAttribute("lineDistance",new Nn(s,1))}else le("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Hp extends Fn{constructor(t,i,s,l,c,h,d,m,p){super(t,i,s,l,c,h,d,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Tl extends Fn{constructor(t,i,s=Zi,l,c,h,d=Ln,m=Ln,p,v=Ta,_=1){if(v!==Ta&&v!==Fs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const M={width:t,height:i,depth:_};super(M,l,c,h,d,m,v,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new zp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class AE extends Tl{constructor(t,i=Zi,s=Hs,l,c,h=Ln,d=Ln,m,p=Ta){const v={width:t,height:t,depth:1},_=[v,v,v,v,v,v];super(t,t,i,s,l,c,h,d,m,p),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Cx extends Fn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class RE{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){le("Curve: .getPoint() not implemented.")}getPointAt(t,i){const s=this.getUtoTmapping(t);return this.getPoint(s,i)}getPoints(t=5){const i=[];for(let s=0;s<=t;s++)i.push(this.getPoint(s/t));return i}getSpacedPoints(t=5){const i=[];for(let s=0;s<=t;s++)i.push(this.getPointAt(s/t));return i}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let s,l=this.getPoint(0),c=0;i.push(0);for(let h=1;h<=t;h++)s=this.getPoint(h/t),c+=s.distanceTo(l),i.push(c),l=s;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,i=null){const s=this.getLengths();let l=0;const c=s.length;let h;i?h=i:h=t*s[c-1];let d=0,m=c-1,p;for(;d<=m;)if(l=Math.floor(d+(m-d)/2),p=s[l]-h,p<0)d=l+1;else if(p>0)m=l-1;else{m=l;break}if(l=m,s[l]===h)return l/(c-1);const v=s[l],M=s[l+1]-v,y=(h-v)/M;return(l+y)/(c-1)}getTangent(t,i){let l=t-1e-4,c=t+1e-4;l<0&&(l=0),c>1&&(c=1);const h=this.getPoint(l),d=this.getPoint(c),m=i||(h.isVector2?new se:new W);return m.copy(d).sub(h).normalize(),m}getTangentAt(t,i){const s=this.getUtoTmapping(t);return this.getTangent(s,i)}computeFrenetFrames(t,i=!1){const s=new W,l=[],c=[],h=[],d=new W,m=new Ce;for(let y=0;y<=t;y++){const T=y/t;l[y]=this.getTangentAt(T,new W)}c[0]=new W,h[0]=new W;let p=Number.MAX_VALUE;const v=Math.abs(l[0].x),_=Math.abs(l[0].y),M=Math.abs(l[0].z);v<=p&&(p=v,s.set(1,0,0)),_<=p&&(p=_,s.set(0,1,0)),M<=p&&s.set(0,0,1),d.crossVectors(l[0],s).normalize(),c[0].crossVectors(l[0],d),h[0].crossVectors(l[0],c[0]);for(let y=1;y<=t;y++){if(c[y]=c[y-1].clone(),h[y]=h[y-1].clone(),d.crossVectors(l[y-1],l[y]),d.length()>Number.EPSILON){d.normalize();const T=Math.acos(Se(l[y-1].dot(l[y]),-1,1));c[y].applyMatrix4(m.makeRotationAxis(d,T))}h[y].crossVectors(l[y],c[y])}if(i===!0){let y=Math.acos(Se(c[0].dot(c[t]),-1,1));y/=t,l[0].dot(d.crossVectors(c[0],c[t]))>0&&(y=-y);for(let T=1;T<=t;T++)c[T].applyMatrix4(m.makeRotationAxis(l[T],y*T)),h[T].crossVectors(l[T],c[T])}return{tangents:l,normals:c,binormals:h}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}function CE(r,t){const i=1-r;return i*i*t}function wE(r,t){return 2*(1-r)*r*t}function DE(r,t){return r*r*t}function xd(r,t,i,s){return CE(r,t)+wE(r,i)+DE(r,s)}class UE extends RE{constructor(t=new W,i=new W,s=new W){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=i,this.v2=s}getPoint(t,i=new W){const s=i,l=this.v0,c=this.v1,h=this.v2;return s.set(xd(t,l.x,c.x,h.x),xd(t,l.y,c.y,h.y),xd(t,l.z,c.z,h.z)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Gs extends Xn{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,h=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,v=m+1,_=t/d,M=i/m,y=[],T=[],w=[],x=[];for(let g=0;g<v;g++){const P=g*M-h;for(let U=0;U<p;U++){const L=U*_-c;T.push(L,-P,0),w.push(0,0,1),x.push(U/d),x.push(1-g/m)}}for(let g=0;g<m;g++)for(let P=0;P<d;P++){const U=P+p*g,L=P+p*(g+1),z=P+1+p*(g+1),O=P+1+p*g;y.push(U,L,O),y.push(L,z,O)}this.setIndex(y),this.setAttribute("position",new Nn(T,3)),this.setAttribute("normal",new Nn(w,3)),this.setAttribute("uv",new Nn(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gs(t.width,t.height,t.widthSegments,t.heightSegments)}}class Gp extends Xn{constructor(t=1,i=32,s=16,l=0,c=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(h+d,Math.PI);let p=0;const v=[],_=new W,M=new W,y=[],T=[],w=[],x=[];for(let g=0;g<=s;g++){const P=[],U=g/s;let L=0;g===0&&h===0?L=.5/i:g===s&&m===Math.PI&&(L=-.5/i);for(let z=0;z<=i;z++){const O=z/i;_.x=-t*Math.cos(l+O*c)*Math.sin(h+U*d),_.y=t*Math.cos(h+U*d),_.z=t*Math.sin(l+O*c)*Math.sin(h+U*d),T.push(_.x,_.y,_.z),M.copy(_).normalize(),w.push(M.x,M.y,M.z),x.push(O+L,1-U),P.push(p++)}v.push(P)}for(let g=0;g<s;g++)for(let P=0;P<i;P++){const U=v[g][P+1],L=v[g][P],z=v[g+1][P],O=v[g+1][P+1];(g!==0||h>0)&&y.push(U,L,O),(g!==s-1||m<Math.PI)&&y.push(L,z,O)}this.setIndex(y),this.setAttribute("position",new Nn(T,3)),this.setAttribute("normal",new Nn(w,3)),this.setAttribute("uv",new Nn(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gp(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class LE extends Ki{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class xu extends Xs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=px,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class NE extends Xs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=HM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class OE extends Xs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class wx extends _n{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new ne(t),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}class Dx extends wx{constructor(t,i,s){super(t,s),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(_n.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ne(i)}copy(t,i){return super.copy(t,i),this.groundColor.copy(t.groundColor),this}toJSON(t){const i=super.toJSON(t);return i.object.groundColor=this.groundColor.getHex(),i}}const Sd=new Ce,uv=new W,fv=new W;class PE{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new se(512,512),this.mapType=ui,this.map=null,this.mapPass=null,this.matrix=new Ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ip,this._frameExtents=new se(1,1),this._viewportCount=1,this._viewports=[new sn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;uv.setFromMatrixPosition(t.matrixWorld),i.position.copy(uv),fv.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(fv),i.updateMatrixWorld(),Sd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sd,i.coordinateSystem,i.reversedDepth),i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Sd)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Vp extends yx{constructor(t=-1,i=1,s=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,h=s+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,h=c+p*this.view.width,d-=v*this.view.offsetY,m=d-v*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class zE extends PE{constructor(){super(new Vp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ux extends wx{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_n.DEFAULT_UP),this.updateMatrix(),this.target=new _n,this.shadow=new zE}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class BE extends ci{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Lx{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}const hv=new Ce;class IE{constructor(t,i,s=0,l=1/0){this.ray=new Lu(t,i),this.near=s,this.far=l,this.camera=null,this.layers=new Bp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):Re("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return hv.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(hv),this}intersectObject(t,i=!0,s=[]){return yp(t,this,s,i),s.sort(dv),s}intersectObjects(t,i=!0,s=[]){for(let l=0,c=t.length;l<c;l++)yp(t[l],this,s,i);return s.sort(dv),s}}function dv(r,t){return r.distance-t.distance}function yp(r,t,i,s){let l=!0;if(r.layers.test(t.layers)&&r.raycast(t,i)===!1&&(l=!1),l===!0&&s===!0){const c=r.children;for(let h=0,d=c.length;h<d;h++)yp(c[h],t,i,!0)}}class pv{constructor(t=1,i=0,s=0){this.radius=t,this.phi=i,this.theta=s}set(t,i,s){return this.radius=t,this.phi=i,this.theta=s,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Se(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,s){return this.radius=Math.sqrt(t*t+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,s),this.phi=Math.acos(Se(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Nx extends Fp{constructor(t=10,i=10,s=4473924,l=8947848){s=new ne(s),l=new ne(l);const c=i/2,h=t/i,d=t/2,m=[],p=[];for(let M=0,y=0,T=-d;M<=i;M++,T+=h){m.push(-d,0,T,d,0,T),m.push(T,0,-d,T,0,d);const w=M===c?s:l;w.toArray(p,y),y+=3,w.toArray(p,y),y+=3,w.toArray(p,y),y+=3,w.toArray(p,y),y+=3}const v=new Xn;v.setAttribute("position",new Nn(m,3)),v.setAttribute("color",new Nn(p,3));const _=new Ou({vertexColors:!0,toneMapped:!1});super(v,_),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class FE extends Vs{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){le("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function mv(r,t,i,s){const l=HE(s);switch(i){case hx:return r*t;case Dp:return r*t/l.components*l.byteLength;case Up:return r*t/l.components*l.byteLength;case no:return r*t*2/l.components*l.byteLength;case Lp:return r*t*2/l.components*l.byteLength;case dx:return r*t*3/l.components*l.byteLength;case zi:return r*t*4/l.components*l.byteLength;case Np:return r*t*4/l.components*l.byteLength;case pu:case mu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case gu:case _u:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Vd:case Xd:return Math.max(r,16)*Math.max(t,8)/4;case Gd:case kd:return Math.max(r,8)*Math.max(t,8)/2;case Wd:case qd:case jd:case Zd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Yd:case Kd:case Qd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Jd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case $d:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case tp:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case ep:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case np:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case ip:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case ap:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case sp:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case rp:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case op:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case lp:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case cp:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case up:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case fp:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case hp:case dp:case pp:return Math.ceil(r/4)*Math.ceil(t/4)*16;case mp:case gp:return Math.ceil(r/4)*Math.ceil(t/4)*8;case _p:case vp:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function HE(r){switch(r){case ui:case lx:return{byteLength:1,components:1};case Sl:case cx:case ba:return{byteLength:2,components:1};case Cp:case wp:return{byteLength:2,components:4};case Zi:case Rp:case Pi:return{byteLength:4,components:1};case ux:case fx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ap}}));typeof window<"u"&&(window.__THREE__?le("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ap);function Ox(){let r=null,t=!1,i=null,s=null;function l(c,h){i(c,h),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function GE(r){const t=new WeakMap;function i(d,m){const p=d.array,v=d.usage,_=p.byteLength,M=r.createBuffer();r.bindBuffer(m,M),r.bufferData(m,p,v),d.onUploadCallback();let y;if(p instanceof Float32Array)y=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=r.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?y=r.HALF_FLOAT:y=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=r.SHORT;else if(p instanceof Uint32Array)y=r.UNSIGNED_INT;else if(p instanceof Int32Array)y=r.INT;else if(p instanceof Int8Array)y=r.BYTE;else if(p instanceof Uint8Array)y=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:M,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:_}}function s(d,m,p){const v=m.array,_=m.updateRanges;if(r.bindBuffer(p,d),_.length===0)r.bufferSubData(p,0,v);else{_.sort((y,T)=>y.start-T.start);let M=0;for(let y=1;y<_.length;y++){const T=_[M],w=_[y];w.start<=T.start+T.count+1?T.count=Math.max(T.count,w.start+w.count-T.start):(++M,_[M]=w)}_.length=M+1;for(let y=0,T=_.length;y<T;y++){const w=_[y];r.bufferSubData(p,w.start*v.BYTES_PER_ELEMENT,v,w.start,w.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(r.deleteBuffer(m.buffer),t.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=t.get(d);(!v||v.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:h}}var VE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,kE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,XE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,WE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,YE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ZE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,KE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,QE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,JE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$E=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tb=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,eb=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,nb=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ib=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,ab=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ob=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,lb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,cb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ub=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,fb=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,hb=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
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
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
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
#endif`,db=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,pb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_b=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vb="gl_FragColor = linearToOutputTexel( gl_FragColor );",xb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Sb=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,yb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Mb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Eb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bb=`#ifdef USE_ENVMAP
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
#endif`,Tb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ab=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wb=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Db=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ub=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Lb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Nb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
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
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ob=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Pb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zb=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Bb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ib=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Fb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Hb=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Gb=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Vb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,kb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Xb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Wb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,jb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Kb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Qb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$b=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,eT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,iT=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,aT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,rT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,oT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,uT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,fT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,_T=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ST=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,MT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ET=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,bT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,TT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
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
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,AT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,RT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,CT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,wT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,DT=`#ifdef USE_SKINNING
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
#endif`,UT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,LT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,NT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,OT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,PT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,zT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
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
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,BT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,IT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,FT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,HT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const GT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,VT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,XT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,jT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ZT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,KT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,QT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,JT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$T=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,t1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,e1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,n1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,i1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
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
}`,a1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,s1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,r1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,o1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,l1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,c1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
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
}`,u1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,f1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
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
	vWorldPosition = worldPosition.xyz;
#endif
}`,h1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,d1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
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
}`,p1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,m1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
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
}`,g1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,v1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,x1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,S1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,xe={alphahash_fragment:VE,alphahash_pars_fragment:kE,alphamap_fragment:XE,alphamap_pars_fragment:WE,alphatest_fragment:qE,alphatest_pars_fragment:YE,aomap_fragment:jE,aomap_pars_fragment:ZE,batching_pars_vertex:KE,batching_vertex:QE,begin_vertex:JE,beginnormal_vertex:$E,bsdfs:tb,iridescence_fragment:eb,bumpmap_pars_fragment:nb,clipping_planes_fragment:ib,clipping_planes_pars_fragment:ab,clipping_planes_pars_vertex:sb,clipping_planes_vertex:rb,color_fragment:ob,color_pars_fragment:lb,color_pars_vertex:cb,color_vertex:ub,common:fb,cube_uv_reflection_fragment:hb,defaultnormal_vertex:db,displacementmap_pars_vertex:pb,displacementmap_vertex:mb,emissivemap_fragment:gb,emissivemap_pars_fragment:_b,colorspace_fragment:vb,colorspace_pars_fragment:xb,envmap_fragment:Sb,envmap_common_pars_fragment:yb,envmap_pars_fragment:Mb,envmap_pars_vertex:Eb,envmap_physical_pars_fragment:Ob,envmap_vertex:bb,fog_vertex:Tb,fog_pars_vertex:Ab,fog_fragment:Rb,fog_pars_fragment:Cb,gradientmap_pars_fragment:wb,lightmap_pars_fragment:Db,lights_lambert_fragment:Ub,lights_lambert_pars_fragment:Lb,lights_pars_begin:Nb,lights_toon_fragment:Pb,lights_toon_pars_fragment:zb,lights_phong_fragment:Bb,lights_phong_pars_fragment:Ib,lights_physical_fragment:Fb,lights_physical_pars_fragment:Hb,lights_fragment_begin:Gb,lights_fragment_maps:Vb,lights_fragment_end:kb,logdepthbuf_fragment:Xb,logdepthbuf_pars_fragment:Wb,logdepthbuf_pars_vertex:qb,logdepthbuf_vertex:Yb,map_fragment:jb,map_pars_fragment:Zb,map_particle_fragment:Kb,map_particle_pars_fragment:Qb,metalnessmap_fragment:Jb,metalnessmap_pars_fragment:$b,morphinstance_vertex:tT,morphcolor_vertex:eT,morphnormal_vertex:nT,morphtarget_pars_vertex:iT,morphtarget_vertex:aT,normal_fragment_begin:sT,normal_fragment_maps:rT,normal_pars_fragment:oT,normal_pars_vertex:lT,normal_vertex:cT,normalmap_pars_fragment:uT,clearcoat_normal_fragment_begin:fT,clearcoat_normal_fragment_maps:hT,clearcoat_pars_fragment:dT,iridescence_pars_fragment:pT,opaque_fragment:mT,packing:gT,premultiplied_alpha_fragment:_T,project_vertex:vT,dithering_fragment:xT,dithering_pars_fragment:ST,roughnessmap_fragment:yT,roughnessmap_pars_fragment:MT,shadowmap_pars_fragment:ET,shadowmap_pars_vertex:bT,shadowmap_vertex:TT,shadowmask_pars_fragment:AT,skinbase_vertex:RT,skinning_pars_vertex:CT,skinning_vertex:wT,skinnormal_vertex:DT,specularmap_fragment:UT,specularmap_pars_fragment:LT,tonemapping_fragment:NT,tonemapping_pars_fragment:OT,transmission_fragment:PT,transmission_pars_fragment:zT,uv_pars_fragment:BT,uv_pars_vertex:IT,uv_vertex:FT,worldpos_vertex:HT,background_vert:GT,background_frag:VT,backgroundCube_vert:kT,backgroundCube_frag:XT,cube_vert:WT,cube_frag:qT,depth_vert:YT,depth_frag:jT,distance_vert:ZT,distance_frag:KT,equirect_vert:QT,equirect_frag:JT,linedashed_vert:$T,linedashed_frag:t1,meshbasic_vert:e1,meshbasic_frag:n1,meshlambert_vert:i1,meshlambert_frag:a1,meshmatcap_vert:s1,meshmatcap_frag:r1,meshnormal_vert:o1,meshnormal_frag:l1,meshphong_vert:c1,meshphong_frag:u1,meshphysical_vert:f1,meshphysical_frag:h1,meshtoon_vert:d1,meshtoon_frag:p1,points_vert:m1,points_frag:g1,shadow_vert:_1,shadow_frag:v1,sprite_vert:x1,sprite_frag:S1},Bt={common:{diffuse:{value:new ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ve},alphaMap:{value:null},alphaMapTransform:{value:new ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ve}},envmap:{envMap:{value:null},envMapRotation:{value:new ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ve},normalScale:{value:new se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ve},alphaTest:{value:0},uvTransform:{value:new ve}},sprite:{diffuse:{value:new ne(16777215)},opacity:{value:1},center:{value:new se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ve},alphaMap:{value:null},alphaMapTransform:{value:new ve},alphaTest:{value:0}}},Xi={basic:{uniforms:Vn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.fog]),vertexShader:xe.meshbasic_vert,fragmentShader:xe.meshbasic_frag},lambert:{uniforms:Vn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,Bt.lights,{emissive:{value:new ne(0)}}]),vertexShader:xe.meshlambert_vert,fragmentShader:xe.meshlambert_frag},phong:{uniforms:Vn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,Bt.lights,{emissive:{value:new ne(0)},specular:{value:new ne(1118481)},shininess:{value:30}}]),vertexShader:xe.meshphong_vert,fragmentShader:xe.meshphong_frag},standard:{uniforms:Vn([Bt.common,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.roughnessmap,Bt.metalnessmap,Bt.fog,Bt.lights,{emissive:{value:new ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xe.meshphysical_vert,fragmentShader:xe.meshphysical_frag},toon:{uniforms:Vn([Bt.common,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.gradientmap,Bt.fog,Bt.lights,{emissive:{value:new ne(0)}}]),vertexShader:xe.meshtoon_vert,fragmentShader:xe.meshtoon_frag},matcap:{uniforms:Vn([Bt.common,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,{matcap:{value:null}}]),vertexShader:xe.meshmatcap_vert,fragmentShader:xe.meshmatcap_frag},points:{uniforms:Vn([Bt.points,Bt.fog]),vertexShader:xe.points_vert,fragmentShader:xe.points_frag},dashed:{uniforms:Vn([Bt.common,Bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xe.linedashed_vert,fragmentShader:xe.linedashed_frag},depth:{uniforms:Vn([Bt.common,Bt.displacementmap]),vertexShader:xe.depth_vert,fragmentShader:xe.depth_frag},normal:{uniforms:Vn([Bt.common,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,{opacity:{value:1}}]),vertexShader:xe.meshnormal_vert,fragmentShader:xe.meshnormal_frag},sprite:{uniforms:Vn([Bt.sprite,Bt.fog]),vertexShader:xe.sprite_vert,fragmentShader:xe.sprite_frag},background:{uniforms:{uvTransform:{value:new ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:xe.background_vert,fragmentShader:xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ve}},vertexShader:xe.backgroundCube_vert,fragmentShader:xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:xe.cube_vert,fragmentShader:xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xe.equirect_vert,fragmentShader:xe.equirect_frag},distance:{uniforms:Vn([Bt.common,Bt.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:xe.distance_vert,fragmentShader:xe.distance_frag},shadow:{uniforms:Vn([Bt.lights,Bt.fog,{color:{value:new ne(0)},opacity:{value:1}}]),vertexShader:xe.shadow_vert,fragmentShader:xe.shadow_frag}};Xi.physical={uniforms:Vn([Xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ve},clearcoatNormalScale:{value:new se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ve},sheen:{value:0},sheenColor:{value:new ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ve},transmissionSamplerSize:{value:new se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ve},attenuationDistance:{value:0},attenuationColor:{value:new ne(0)},specularColor:{value:new ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ve},anisotropyVector:{value:new se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ve}}]),vertexShader:xe.meshphysical_vert,fragmentShader:xe.meshphysical_frag};const lu={r:0,b:0,g:0},Ns=new Bi,y1=new Ce;function M1(r,t,i,s,l,c,h){const d=new ne(0);let m=c===!0?0:1,p,v,_=null,M=0,y=null;function T(U){let L=U.isScene===!0?U.background:null;return L&&L.isTexture&&(L=(U.backgroundBlurriness>0?i:t).get(L)),L}function w(U){let L=!1;const z=T(U);z===null?g(d,m):z&&z.isColor&&(g(z,1),L=!0);const O=r.xr.getEnvironmentBlendMode();O==="additive"?s.buffers.color.setClear(0,0,0,1,h):O==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(r.autoClear||L)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function x(U,L){const z=T(L);z&&(z.isCubeTexture||z.mapping===Uu)?(v===void 0&&(v=new $n(new cs(1,1,1),new Ki({name:"BackgroundCubeMaterial",uniforms:ao(Xi.backgroundCube.uniforms),vertexShader:Xi.backgroundCube.vertexShader,fragmentShader:Xi.backgroundCube.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(O,D,V){this.matrixWorld.copyPosition(V.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(v)),Ns.copy(L.backgroundRotation),Ns.x*=-1,Ns.y*=-1,Ns.z*=-1,z.isCubeTexture&&z.isRenderTargetTexture===!1&&(Ns.y*=-1,Ns.z*=-1),v.material.uniforms.envMap.value=z,v.material.uniforms.flipEnvMap.value=z.isCubeTexture&&z.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(y1.makeRotationFromEuler(Ns)),v.material.toneMapped=De.getTransfer(z.colorSpace)!==Ve,(_!==z||M!==z.version||y!==r.toneMapping)&&(v.material.needsUpdate=!0,_=z,M=z.version,y=r.toneMapping),v.layers.enableAll(),U.unshift(v,v.geometry,v.material,0,0,null)):z&&z.isTexture&&(p===void 0&&(p=new $n(new Gs(2,2),new Ki({name:"BackgroundMaterial",uniforms:ao(Xi.background.uniforms),vertexShader:Xi.background.vertexShader,fragmentShader:Xi.background.fragmentShader,side:us,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=z,p.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,p.material.toneMapped=De.getTransfer(z.colorSpace)!==Ve,z.matrixAutoUpdate===!0&&z.updateMatrix(),p.material.uniforms.uvTransform.value.copy(z.matrix),(_!==z||M!==z.version||y!==r.toneMapping)&&(p.material.needsUpdate=!0,_=z,M=z.version,y=r.toneMapping),p.layers.enableAll(),U.unshift(p,p.geometry,p.material,0,0,null))}function g(U,L){U.getRGB(lu,Sx(r)),s.buffers.color.setClear(lu.r,lu.g,lu.b,L,h)}function P(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(U,L=1){d.set(U),m=L,g(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(U){m=U,g(d,m)},render:w,addToRenderList:x,dispose:P}}function E1(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=M(null);let c=l,h=!1;function d(A,H,Q,tt,lt){let it=!1;const I=_(tt,Q,H);c!==I&&(c=I,p(c.object)),it=y(A,tt,Q,lt),it&&T(A,tt,Q,lt),lt!==null&&t.update(lt,r.ELEMENT_ARRAY_BUFFER),(it||h)&&(h=!1,L(A,H,Q,tt),lt!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(lt).buffer))}function m(){return r.createVertexArray()}function p(A){return r.bindVertexArray(A)}function v(A){return r.deleteVertexArray(A)}function _(A,H,Q){const tt=Q.wireframe===!0;let lt=s[A.id];lt===void 0&&(lt={},s[A.id]=lt);let it=lt[H.id];it===void 0&&(it={},lt[H.id]=it);let I=it[tt];return I===void 0&&(I=M(m()),it[tt]=I),I}function M(A){const H=[],Q=[],tt=[];for(let lt=0;lt<i;lt++)H[lt]=0,Q[lt]=0,tt[lt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:Q,attributeDivisors:tt,object:A,attributes:{},index:null}}function y(A,H,Q,tt){const lt=c.attributes,it=H.attributes;let I=0;const F=Q.getAttributes();for(const J in F)if(F[J].location>=0){const pt=lt[J];let N=it[J];if(N===void 0&&(J==="instanceMatrix"&&A.instanceMatrix&&(N=A.instanceMatrix),J==="instanceColor"&&A.instanceColor&&(N=A.instanceColor)),pt===void 0||pt.attribute!==N||N&&pt.data!==N.data)return!0;I++}return c.attributesNum!==I||c.index!==tt}function T(A,H,Q,tt){const lt={},it=H.attributes;let I=0;const F=Q.getAttributes();for(const J in F)if(F[J].location>=0){let pt=it[J];pt===void 0&&(J==="instanceMatrix"&&A.instanceMatrix&&(pt=A.instanceMatrix),J==="instanceColor"&&A.instanceColor&&(pt=A.instanceColor));const N={};N.attribute=pt,pt&&pt.data&&(N.data=pt.data),lt[J]=N,I++}c.attributes=lt,c.attributesNum=I,c.index=tt}function w(){const A=c.newAttributes;for(let H=0,Q=A.length;H<Q;H++)A[H]=0}function x(A){g(A,0)}function g(A,H){const Q=c.newAttributes,tt=c.enabledAttributes,lt=c.attributeDivisors;Q[A]=1,tt[A]===0&&(r.enableVertexAttribArray(A),tt[A]=1),lt[A]!==H&&(r.vertexAttribDivisor(A,H),lt[A]=H)}function P(){const A=c.newAttributes,H=c.enabledAttributes;for(let Q=0,tt=H.length;Q<tt;Q++)H[Q]!==A[Q]&&(r.disableVertexAttribArray(Q),H[Q]=0)}function U(A,H,Q,tt,lt,it,I){I===!0?r.vertexAttribIPointer(A,H,Q,lt,it):r.vertexAttribPointer(A,H,Q,tt,lt,it)}function L(A,H,Q,tt){w();const lt=tt.attributes,it=Q.getAttributes(),I=H.defaultAttributeValues;for(const F in it){const J=it[F];if(J.location>=0){let mt=lt[F];if(mt===void 0&&(F==="instanceMatrix"&&A.instanceMatrix&&(mt=A.instanceMatrix),F==="instanceColor"&&A.instanceColor&&(mt=A.instanceColor)),mt!==void 0){const pt=mt.normalized,N=mt.itemSize,et=t.get(mt);if(et===void 0)continue;const ht=et.buffer,xt=et.type,Tt=et.bytesPerElement,Y=xt===r.INT||xt===r.UNSIGNED_INT||mt.gpuType===Rp;if(mt.isInterleavedBufferAttribute){const $=mt.data,Mt=$.stride,Rt=mt.offset;if($.isInstancedInterleavedBuffer){for(let Dt=0;Dt<J.locationSize;Dt++)g(J.location+Dt,$.meshPerAttribute);A.isInstancedMesh!==!0&&tt._maxInstanceCount===void 0&&(tt._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let Dt=0;Dt<J.locationSize;Dt++)x(J.location+Dt);r.bindBuffer(r.ARRAY_BUFFER,ht);for(let Dt=0;Dt<J.locationSize;Dt++)U(J.location+Dt,N/J.locationSize,xt,pt,Mt*Tt,(Rt+N/J.locationSize*Dt)*Tt,Y)}else{if(mt.isInstancedBufferAttribute){for(let $=0;$<J.locationSize;$++)g(J.location+$,mt.meshPerAttribute);A.isInstancedMesh!==!0&&tt._maxInstanceCount===void 0&&(tt._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let $=0;$<J.locationSize;$++)x(J.location+$);r.bindBuffer(r.ARRAY_BUFFER,ht);for(let $=0;$<J.locationSize;$++)U(J.location+$,N/J.locationSize,xt,pt,N*Tt,N/J.locationSize*$*Tt,Y)}}else if(I!==void 0){const pt=I[F];if(pt!==void 0)switch(pt.length){case 2:r.vertexAttrib2fv(J.location,pt);break;case 3:r.vertexAttrib3fv(J.location,pt);break;case 4:r.vertexAttrib4fv(J.location,pt);break;default:r.vertexAttrib1fv(J.location,pt)}}}}P()}function z(){V();for(const A in s){const H=s[A];for(const Q in H){const tt=H[Q];for(const lt in tt)v(tt[lt].object),delete tt[lt];delete H[Q]}delete s[A]}}function O(A){if(s[A.id]===void 0)return;const H=s[A.id];for(const Q in H){const tt=H[Q];for(const lt in tt)v(tt[lt].object),delete tt[lt];delete H[Q]}delete s[A.id]}function D(A){for(const H in s){const Q=s[H];if(Q[A.id]===void 0)continue;const tt=Q[A.id];for(const lt in tt)v(tt[lt].object),delete tt[lt];delete Q[A.id]}}function V(){b(),h=!0,c!==l&&(c=l,p(c.object))}function b(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:V,resetDefaultState:b,dispose:z,releaseStatesOfGeometry:O,releaseStatesOfProgram:D,initAttributes:w,enableAttribute:x,disableUnusedAttributes:P}}function b1(r,t,i){let s;function l(p){s=p}function c(p,v){r.drawArrays(s,p,v),i.update(v,s,1)}function h(p,v,_){_!==0&&(r.drawArraysInstanced(s,p,v,_),i.update(v,s,_))}function d(p,v,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,v,0,_);let y=0;for(let T=0;T<_;T++)y+=v[T];i.update(y,s,1)}function m(p,v,_,M){if(_===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let T=0;T<p.length;T++)h(p[T],v[T],M[T]);else{y.multiDrawArraysInstancedWEBGL(s,p,0,v,0,M,0,_);let T=0;for(let w=0;w<_;w++)T+=v[w]*M[w];i.update(T,s,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function T1(r,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const D=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(D){return!(D!==zi&&s.convert(D)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(D){const V=D===ba&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(D!==ui&&s.convert(D)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==Pi&&!V)}function m(D){if(D==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const v=m(p);v!==p&&(le("WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const _=i.logarithmicDepthBuffer===!0,M=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),y=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=r.getParameter(r.MAX_TEXTURE_SIZE),x=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),P=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),U=r.getParameter(r.MAX_VARYING_VECTORS),L=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),z=r.getParameter(r.MAX_SAMPLES),O=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:M,maxTextures:y,maxVertexTextures:T,maxTextureSize:w,maxCubemapSize:x,maxAttributes:g,maxVertexUniforms:P,maxVaryings:U,maxFragmentUniforms:L,maxSamples:z,samples:O}}function A1(r){const t=this;let i=null,s=0,l=!1,c=!1;const h=new ss,d=new ve,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,M){const y=_.length!==0||M||s!==0||l;return l=M,s=_.length,y},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,M){i=v(_,M,0)},this.setState=function(_,M,y){const T=_.clippingPlanes,w=_.clipIntersection,x=_.clipShadows,g=r.get(_);if(!l||T===null||T.length===0||c&&!x)c?v(null):p();else{const P=c?0:s,U=P*4;let L=g.clippingState||null;m.value=L,L=v(T,M,U,y);for(let z=0;z!==U;++z)L[z]=i[z];g.clippingState=L,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=P}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function v(_,M,y,T){const w=_!==null?_.length:0;let x=null;if(w!==0){if(x=m.value,T!==!0||x===null){const g=y+w*4,P=M.matrixWorldInverse;d.getNormalMatrix(P),(x===null||x.length<g)&&(x=new Float32Array(g));for(let U=0,L=y;U!==w;++U,L+=4)h.copy(_[U]).applyMatrix4(P,d),h.normal.toArray(x,L),x[L+3]=h.constant}m.value=x,m.needsUpdate=!0}return t.numPlanes=w,t.numIntersection=0,x}}function R1(r){let t=new WeakMap;function i(h,d){return d===Bd?h.mapping=Hs:d===Id&&(h.mapping=eo),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===Bd||d===Id)if(t.has(h)){const m=t.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new Ex(m.height);return p.fromEquirectangularTexture(r,h),t.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function c(){t=new WeakMap}return{get:s,dispose:c}}const os=4,gv=[.125,.215,.35,.446,.526,.582],zs=20,C1=256,hl=new Vp,_v=new ne;let yd=null,Md=0,Ed=0,bd=!1;const w1=new W;class vv{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,c={}){const{size:h=256,position:d=w1}=c;yd=this._renderer.getRenderTarget(),Md=this._renderer.getActiveCubeFace(),Ed=this._renderer.getActiveMipmapLevel(),bd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(yd,Md,Ed),this._renderer.xr.enabled=bd,t.scissorTest=!1,Wr(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Hs||t.mapping===eo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),yd=this._renderer.getRenderTarget(),Md=this._renderer.getActiveCubeFace(),Ed=this._renderer.getActiveMipmapLevel(),bd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:In,minFilter:In,generateMipmaps:!1,type:ba,format:zi,colorSpace:io,depthBuffer:!1},l=xv(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xv(t,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=D1(c)),this._blurMaterial=L1(c,t,i),this._ggxMaterial=U1(c,t,i)}return l}_compileMaterial(t){const i=new $n(new Xn,t);this._renderer.compile(i,hl)}_sceneToCubeUV(t,i,s,l,c){const m=new ci(90,1,i,s),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],_=this._renderer,M=_.autoClear,y=_.toneMapping;_.getClearColor(_v),_.toneMapping=Yi,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new $n(new cs,new El({name:"PMREM.Background",side:Jn,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,x=w.material;let g=!1;const P=t.background;P?P.isColor&&(x.color.copy(P),t.background=null,g=!0):(x.color.copy(_v),g=!0);for(let U=0;U<6;U++){const L=U%3;L===0?(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+v[U],c.y,c.z)):L===1?(m.up.set(0,0,p[U]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+v[U],c.z)):(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+v[U]));const z=this._cubeSize;Wr(l,L*z,U>2?z:0,z,z),_.setRenderTarget(l),g&&_.render(w,m),_.render(t,m)}_.toneMapping=y,_.autoClear=M,t.background=P}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Hs||t.mapping===eo;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=yv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sv());const c=l?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=c;const d=c.uniforms;d.envMap.value=t;const m=this._cubeSize;Wr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,hl)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,c=this._pingPongRenderTarget,h=this._ggxMaterial,d=this._lodMeshes[s];d.material=h;const m=h.uniforms,p=s/(this._lodMeshes.length-1),v=i/(this._lodMeshes.length-1),_=Math.sqrt(p*p-v*v),M=0+p*1.25,y=_*M,{_lodMax:T}=this,w=this._sizeLods[s],x=3*w*(s>T-os?s-T+os:0),g=4*(this._cubeSize-w);m.envMap.value=t.texture,m.roughness.value=y,m.mipInt.value=T-i,Wr(c,x,g,3*w,2*w),l.setRenderTarget(c),l.render(d,hl),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=T-s,Wr(t,x,g,3*w,2*w),l.setRenderTarget(t),l.render(d,hl)}_blur(t,i,s,l,c){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,s,l,"latitudinal",c),this._halfBlur(h,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&Re("blur direction must be either latitudinal or longitudinal!");const v=3,_=this._lodMeshes[l];_.material=p;const M=p.uniforms,y=this._sizeLods[s]-1,T=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*zs-1),w=c/T,x=isFinite(c)?1+Math.floor(v*w):zs;x>zs&&le(`sigmaRadians, ${c}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${zs}`);const g=[];let P=0;for(let D=0;D<zs;++D){const V=D/w,b=Math.exp(-V*V/2);g.push(b),D===0?P+=b:D<x&&(P+=2*b)}for(let D=0;D<g.length;D++)g[D]=g[D]/P;M.envMap.value=t.texture,M.samples.value=x,M.weights.value=g,M.latitudinal.value=h==="latitudinal",d&&(M.poleAxis.value=d);const{_lodMax:U}=this;M.dTheta.value=T,M.mipInt.value=U-s;const L=this._sizeLods[l],z=3*L*(l>U-os?l-U+os:0),O=4*(this._cubeSize-L);Wr(i,z,O,3*L,2*L),m.setRenderTarget(i),m.render(_,hl)}}function D1(r){const t=[],i=[],s=[];let l=r;const c=r-os+1+gv.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);t.push(d);let m=1/d;h>r-os?m=gv[h-r+os-1]:h===0&&(m=0),i.push(m);const p=1/(d-2),v=-p,_=1+p,M=[v,v,_,v,_,_,v,v,_,_,v,_],y=6,T=6,w=3,x=2,g=1,P=new Float32Array(w*T*y),U=new Float32Array(x*T*y),L=new Float32Array(g*T*y);for(let O=0;O<y;O++){const D=O%3*2/3-1,V=O>2?0:-1,b=[D,V,0,D+2/3,V,0,D+2/3,V+1,0,D,V,0,D+2/3,V+1,0,D,V+1,0];P.set(b,w*T*O),U.set(M,x*T*O);const A=[O,O,O,O,O,O];L.set(A,g*T*O)}const z=new Xn;z.setAttribute("position",new kn(P,w)),z.setAttribute("uv",new kn(U,x)),z.setAttribute("faceIndex",new kn(L,g)),s.push(new $n(z,null)),l>os&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function xv(r,t,i){const s=new ji(r,t,i);return s.texture.mapping=Uu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Wr(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function U1(r,t,i){return new Ki({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:C1,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Pu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ma,depthTest:!1,depthWrite:!1})}function L1(r,t,i){const s=new Float32Array(zs),l=new W(0,1,0);return new Ki({name:"SphericalGaussianBlur",defines:{n:zs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Pu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ma,depthTest:!1,depthWrite:!1})}function Sv(){return new Ki({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ma,depthTest:!1,depthWrite:!1})}function yv(){return new Ki({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ma,depthTest:!1,depthWrite:!1})}function Pu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function N1(r){let t=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const m=d.mapping,p=m===Bd||m===Id,v=m===Hs||m===eo;if(p||v){let _=t.get(d);const M=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==M)return i===null&&(i=new vv(r)),_=p?i.fromEquirectangular(d,_):i.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),_.texture;if(_!==void 0)return _.texture;{const y=d.image;return p&&y&&y.height>0||v&&y&&l(y)?(i===null&&(i=new vv(r)),_=p?i.fromEquirectangular(d):i.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),d.addEventListener("dispose",c),_.texture):null}}}return d}function l(d){let m=0;const p=6;for(let v=0;v<p;v++)d[v]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function O1(r){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=r.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Ml("WebGLRenderer: "+s+" extension not supported."),l}}}function P1(r,t,i,s){const l={},c=new WeakMap;function h(_){const M=_.target;M.index!==null&&t.remove(M.index);for(const T in M.attributes)t.remove(M.attributes[T]);M.removeEventListener("dispose",h),delete l[M.id];const y=c.get(M);y&&(t.remove(y),c.delete(M)),s.releaseStatesOfGeometry(M),M.isInstancedBufferGeometry===!0&&delete M._maxInstanceCount,i.memory.geometries--}function d(_,M){return l[M.id]===!0||(M.addEventListener("dispose",h),l[M.id]=!0,i.memory.geometries++),M}function m(_){const M=_.attributes;for(const y in M)t.update(M[y],r.ARRAY_BUFFER)}function p(_){const M=[],y=_.index,T=_.attributes.position;let w=0;if(y!==null){const P=y.array;w=y.version;for(let U=0,L=P.length;U<L;U+=3){const z=P[U+0],O=P[U+1],D=P[U+2];M.push(z,O,O,D,D,z)}}else if(T!==void 0){const P=T.array;w=T.version;for(let U=0,L=P.length/3-1;U<L;U+=3){const z=U+0,O=U+1,D=U+2;M.push(z,O,O,D,D,z)}}else return;const x=new(mx(M)?xx:vx)(M,1);x.version=w;const g=c.get(_);g&&t.remove(g),c.set(_,x)}function v(_){const M=c.get(_);if(M){const y=_.index;y!==null&&M.version<y.version&&p(_)}else p(_);return c.get(_)}return{get:d,update:m,getWireframeAttribute:v}}function z1(r,t,i){let s;function l(M){s=M}let c,h;function d(M){c=M.type,h=M.bytesPerElement}function m(M,y){r.drawElements(s,y,c,M*h),i.update(y,s,1)}function p(M,y,T){T!==0&&(r.drawElementsInstanced(s,y,c,M*h,T),i.update(y,s,T))}function v(M,y,T){if(T===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,y,0,c,M,0,T);let x=0;for(let g=0;g<T;g++)x+=y[g];i.update(x,s,1)}function _(M,y,T,w){if(T===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let g=0;g<M.length;g++)p(M[g]/h,y[g],w[g]);else{x.multiDrawElementsInstancedWEBGL(s,y,0,c,M,0,w,0,T);let g=0;for(let P=0;P<T;P++)g+=y[P]*w[P];i.update(g,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=v,this.renderMultiDrawInstances=_}function B1(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,h,d){switch(i.calls++,h){case r.TRIANGLES:i.triangles+=d*(c/3);break;case r.LINES:i.lines+=d*(c/2);break;case r.LINE_STRIP:i.lines+=d*(c-1);break;case r.LINE_LOOP:i.lines+=d*c;break;case r.POINTS:i.points+=d*c;break;default:Re("WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function I1(r,t,i){const s=new WeakMap,l=new sn;function c(h,d,m){const p=h.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=v!==void 0?v.length:0;let M=s.get(d);if(M===void 0||M.count!==_){let A=function(){V.dispose(),s.delete(d),d.removeEventListener("dispose",A)};var y=A;M!==void 0&&M.texture.dispose();const T=d.morphAttributes.position!==void 0,w=d.morphAttributes.normal!==void 0,x=d.morphAttributes.color!==void 0,g=d.morphAttributes.position||[],P=d.morphAttributes.normal||[],U=d.morphAttributes.color||[];let L=0;T===!0&&(L=1),w===!0&&(L=2),x===!0&&(L=3);let z=d.attributes.position.count*L,O=1;z>t.maxTextureSize&&(O=Math.ceil(z/t.maxTextureSize),z=t.maxTextureSize);const D=new Float32Array(z*O*4*_),V=new gx(D,z,O,_);V.type=Pi,V.needsUpdate=!0;const b=L*4;for(let H=0;H<_;H++){const Q=g[H],tt=P[H],lt=U[H],it=z*O*4*H;for(let I=0;I<Q.count;I++){const F=I*b;T===!0&&(l.fromBufferAttribute(Q,I),D[it+F+0]=l.x,D[it+F+1]=l.y,D[it+F+2]=l.z,D[it+F+3]=0),w===!0&&(l.fromBufferAttribute(tt,I),D[it+F+4]=l.x,D[it+F+5]=l.y,D[it+F+6]=l.z,D[it+F+7]=0),x===!0&&(l.fromBufferAttribute(lt,I),D[it+F+8]=l.x,D[it+F+9]=l.y,D[it+F+10]=l.z,D[it+F+11]=lt.itemSize===4?l.w:1)}}M={count:_,texture:V,size:new se(z,O)},s.set(d,M),d.addEventListener("dispose",A)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",h.morphTexture,i);else{let T=0;for(let x=0;x<p.length;x++)T+=p[x];const w=d.morphTargetsRelative?1:1-T;m.getUniforms().setValue(r,"morphTargetBaseInfluence",w),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",M.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",M.size)}return{update:c}}function F1(r,t,i,s){let l=new WeakMap;function c(m){const p=s.render.frame,v=m.geometry,_=t.get(m,v);if(l.get(_)!==p&&(t.update(_),l.set(_,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,r.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const M=m.skeleton;l.get(M)!==p&&(M.update(),l.set(M,p))}return _}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:h}}const H1={[tx]:"LINEAR_TONE_MAPPING",[ex]:"REINHARD_TONE_MAPPING",[nx]:"CINEON_TONE_MAPPING",[ix]:"ACES_FILMIC_TONE_MAPPING",[sx]:"AGX_TONE_MAPPING",[rx]:"NEUTRAL_TONE_MAPPING",[ax]:"CUSTOM_TONE_MAPPING"};function G1(r,t,i,s,l){const c=new ji(t,i,{type:r,depthBuffer:s,stencilBuffer:l}),h=new ji(t,i,{type:ba,depthBuffer:!1,stencilBuffer:!1}),d=new Xn;d.setAttribute("position",new Nn([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new Nn([0,2,0,0,2,0],2));const m=new LE({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new $n(d,m),v=new Vp(-1,1,1,-1,0,1);let _=null,M=null,y=!1,T,w=null,x=[],g=!1;this.setSize=function(P,U){c.setSize(P,U),h.setSize(P,U);for(let L=0;L<x.length;L++){const z=x[L];z.setSize&&z.setSize(P,U)}},this.setEffects=function(P){x=P,g=x.length>0&&x[0].isRenderPass===!0;const U=c.width,L=c.height;for(let z=0;z<x.length;z++){const O=x[z];O.setSize&&O.setSize(U,L)}},this.begin=function(P,U){if(y||P.toneMapping===Yi&&x.length===0)return!1;if(w=U,U!==null){const L=U.width,z=U.height;(c.width!==L||c.height!==z)&&this.setSize(L,z)}return g===!1&&P.setRenderTarget(c),T=P.toneMapping,P.toneMapping=Yi,!0},this.hasRenderPass=function(){return g},this.end=function(P,U){P.toneMapping=T,y=!0;let L=c,z=h;for(let O=0;O<x.length;O++){const D=x[O];if(D.enabled!==!1&&(D.render(P,z,L,U),D.needsSwap!==!1)){const V=L;L=z,z=V}}if(_!==P.outputColorSpace||M!==P.toneMapping){_=P.outputColorSpace,M=P.toneMapping,m.defines={},De.getTransfer(_)===Ve&&(m.defines.SRGB_TRANSFER="");const O=H1[M];O&&(m.defines[O]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=L.texture,P.setRenderTarget(w),P.render(p,v),w=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){c.dispose(),h.dispose(),d.dispose(),m.dispose()}}const Px=new Fn,Mp=new Tl(1,1),zx=new gx,Bx=new iE,Ix=new Mx,Mv=[],Ev=[],bv=new Float32Array(16),Tv=new Float32Array(9),Av=new Float32Array(4);function ro(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let c=Mv[l];if(c===void 0&&(c=new Float32Array(l),Mv[l]=c),t!==0){s.toArray(c,0);for(let h=1,d=0;h!==t;++h)d+=i,r[h].toArray(c,d)}return c}function vn(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function xn(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function zu(r,t){let i=Ev[t];i===void 0&&(i=new Int32Array(t),Ev[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function V1(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function k1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(vn(i,t))return;r.uniform2fv(this.addr,t),xn(i,t)}}function X1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(vn(i,t))return;r.uniform3fv(this.addr,t),xn(i,t)}}function W1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(vn(i,t))return;r.uniform4fv(this.addr,t),xn(i,t)}}function q1(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(vn(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),xn(i,t)}else{if(vn(i,s))return;Av.set(s),r.uniformMatrix2fv(this.addr,!1,Av),xn(i,s)}}function Y1(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(vn(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),xn(i,t)}else{if(vn(i,s))return;Tv.set(s),r.uniformMatrix3fv(this.addr,!1,Tv),xn(i,s)}}function j1(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(vn(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),xn(i,t)}else{if(vn(i,s))return;bv.set(s),r.uniformMatrix4fv(this.addr,!1,bv),xn(i,s)}}function Z1(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function K1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(vn(i,t))return;r.uniform2iv(this.addr,t),xn(i,t)}}function Q1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(vn(i,t))return;r.uniform3iv(this.addr,t),xn(i,t)}}function J1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(vn(i,t))return;r.uniform4iv(this.addr,t),xn(i,t)}}function $1(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function tA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(vn(i,t))return;r.uniform2uiv(this.addr,t),xn(i,t)}}function eA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(vn(i,t))return;r.uniform3uiv(this.addr,t),xn(i,t)}}function nA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(vn(i,t))return;r.uniform4uiv(this.addr,t),xn(i,t)}}function iA(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(Mp.compareFunction=i.isReversedDepthBuffer()?Pp:Op,c=Mp):c=Px,i.setTexture2D(t||c,l)}function aA(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||Bx,l)}function sA(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||Ix,l)}function rA(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||zx,l)}function oA(r){switch(r){case 5126:return V1;case 35664:return k1;case 35665:return X1;case 35666:return W1;case 35674:return q1;case 35675:return Y1;case 35676:return j1;case 5124:case 35670:return Z1;case 35667:case 35671:return K1;case 35668:case 35672:return Q1;case 35669:case 35673:return J1;case 5125:return $1;case 36294:return tA;case 36295:return eA;case 36296:return nA;case 35678:case 36198:case 36298:case 36306:case 35682:return iA;case 35679:case 36299:case 36307:return aA;case 35680:case 36300:case 36308:case 36293:return sA;case 36289:case 36303:case 36311:case 36292:return rA}}function lA(r,t){r.uniform1fv(this.addr,t)}function cA(r,t){const i=ro(t,this.size,2);r.uniform2fv(this.addr,i)}function uA(r,t){const i=ro(t,this.size,3);r.uniform3fv(this.addr,i)}function fA(r,t){const i=ro(t,this.size,4);r.uniform4fv(this.addr,i)}function hA(r,t){const i=ro(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function dA(r,t){const i=ro(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function pA(r,t){const i=ro(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function mA(r,t){r.uniform1iv(this.addr,t)}function gA(r,t){r.uniform2iv(this.addr,t)}function _A(r,t){r.uniform3iv(this.addr,t)}function vA(r,t){r.uniform4iv(this.addr,t)}function xA(r,t){r.uniform1uiv(this.addr,t)}function SA(r,t){r.uniform2uiv(this.addr,t)}function yA(r,t){r.uniform3uiv(this.addr,t)}function MA(r,t){r.uniform4uiv(this.addr,t)}function EA(r,t,i){const s=this.cache,l=t.length,c=zu(i,l);vn(s,c)||(r.uniform1iv(this.addr,c),xn(s,c));let h;this.type===r.SAMPLER_2D_SHADOW?h=Mp:h=Px;for(let d=0;d!==l;++d)i.setTexture2D(t[d]||h,c[d])}function bA(r,t,i){const s=this.cache,l=t.length,c=zu(i,l);vn(s,c)||(r.uniform1iv(this.addr,c),xn(s,c));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||Bx,c[h])}function TA(r,t,i){const s=this.cache,l=t.length,c=zu(i,l);vn(s,c)||(r.uniform1iv(this.addr,c),xn(s,c));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||Ix,c[h])}function AA(r,t,i){const s=this.cache,l=t.length,c=zu(i,l);vn(s,c)||(r.uniform1iv(this.addr,c),xn(s,c));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||zx,c[h])}function RA(r){switch(r){case 5126:return lA;case 35664:return cA;case 35665:return uA;case 35666:return fA;case 35674:return hA;case 35675:return dA;case 35676:return pA;case 5124:case 35670:return mA;case 35667:case 35671:return gA;case 35668:case 35672:return _A;case 35669:case 35673:return vA;case 5125:return xA;case 36294:return SA;case 36295:return yA;case 36296:return MA;case 35678:case 36198:case 36298:case 36306:case 35682:return EA;case 35679:case 36299:case 36307:return bA;case 35680:case 36300:case 36308:case 36293:return TA;case 36289:case 36303:case 36311:case 36292:return AA}}class CA{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=oA(i.type)}}class wA{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=RA(i.type)}}class DA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(t,i[d.id],s)}}}const Td=/(\w+)(\])?(\[|\.)?/g;function Rv(r,t){r.seq.push(t),r.map[t.id]=t}function UA(r,t,i){const s=r.name,l=s.length;for(Td.lastIndex=0;;){const c=Td.exec(s),h=Td.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){Rv(i,p===void 0?new CA(d,r,t):new wA(d,r,t));break}else{let _=i.map[d];_===void 0&&(_=new DA(d),Rv(i,_)),i=_}}}class Su{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let h=0;h<s;++h){const d=t.getActiveUniform(i,h),m=t.getUniformLocation(i,d.name);UA(d,m,this)}const l=[],c=[];for(const h of this.seq)h.type===t.SAMPLER_2D_SHADOW||h.type===t.SAMPLER_CUBE_SHADOW||h.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(h):c.push(h);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],m=s[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const h=t[l];h.id in i&&s.push(h)}return s}}function Cv(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const LA=37297;let NA=0;function OA(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let h=l;h<c;h++){const d=h+1;s.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const wv=new ve;function PA(r){De._getMatrix(wv,De.workingColorSpace,r);const t=`mat3( ${wv.elements.map(i=>i.toFixed(4))} )`;switch(De.getTransfer(r)){case yu:return[t,"LinearTransferOETF"];case Ve:return[t,"sRGBTransferOETF"];default:return le("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Dv(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+OA(r.getShaderSource(t),d)}else return c}function zA(r,t){const i=PA(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const BA={[tx]:"Linear",[ex]:"Reinhard",[nx]:"Cineon",[ix]:"ACESFilmic",[sx]:"AgX",[rx]:"Neutral",[ax]:"Custom"};function IA(r,t){const i=BA[t];return i===void 0?(le("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const cu=new W;function FA(){De.getLuminanceCoefficients(cu);const r=cu.x.toFixed(4),t=cu.y.toFixed(4),i=cu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function HA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vl).join(`
`)}function GA(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function VA(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),h=c.name;let d=1;c.type===r.FLOAT_MAT2&&(d=2),c.type===r.FLOAT_MAT3&&(d=3),c.type===r.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:r.getAttribLocation(t,h),locationSize:d}}return i}function vl(r){return r!==""}function Uv(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Lv(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const kA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ep(r){return r.replace(kA,WA)}const XA=new Map;function WA(r,t){let i=xe[t];if(i===void 0){const s=XA.get(t);if(s!==void 0)i=xe[s],le('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return Ep(i)}const qA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nv(r){return r.replace(qA,YA)}function YA(r,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Ov(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const jA={[du]:"SHADOWMAP_TYPE_PCF",[_l]:"SHADOWMAP_TYPE_VSM"};function ZA(r){return jA[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const KA={[Hs]:"ENVMAP_TYPE_CUBE",[eo]:"ENVMAP_TYPE_CUBE",[Uu]:"ENVMAP_TYPE_CUBE_UV"};function QA(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":KA[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const JA={[eo]:"ENVMAP_MODE_REFRACTION"};function $A(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":JA[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const tR={[$v]:"ENVMAP_BLENDING_MULTIPLY",[BM]:"ENVMAP_BLENDING_MIX",[IM]:"ENVMAP_BLENDING_ADD"};function eR(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":tR[r.combine]||"ENVMAP_BLENDING_NONE"}function nR(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function iR(r,t,i,s){const l=r.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=ZA(i),p=QA(i),v=$A(i),_=eR(i),M=nR(i),y=HA(i),T=GA(c),w=l.createProgram();let x,g,P=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(vl).join(`
`),x.length>0&&(x+=`
`),g=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(vl).join(`
`),g.length>0&&(g+=`
`)):(x=[Ov(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vl).join(`
`),g=[Ov(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+v:"",i.envMap?"#define "+_:"",M?"#define CUBEUV_TEXEL_WIDTH "+M.texelWidth:"",M?"#define CUBEUV_TEXEL_HEIGHT "+M.texelHeight:"",M?"#define CUBEUV_MAX_MIP "+M.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Yi?"#define TONE_MAPPING":"",i.toneMapping!==Yi?xe.tonemapping_pars_fragment:"",i.toneMapping!==Yi?IA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",xe.colorspace_pars_fragment,zA("linearToOutputTexel",i.outputColorSpace),FA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(vl).join(`
`)),h=Ep(h),h=Uv(h,i),h=Lv(h,i),d=Ep(d),d=Uv(d,i),d=Lv(d,i),h=Nv(h),d=Nv(d),i.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,x=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,g=["#define varying in",i.glslVersion===I_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===I_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const U=P+x+h,L=P+g+d,z=Cv(l,l.VERTEX_SHADER,U),O=Cv(l,l.FRAGMENT_SHADER,L);l.attachShader(w,z),l.attachShader(w,O),i.index0AttributeName!==void 0?l.bindAttribLocation(w,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(w,0,"position"),l.linkProgram(w);function D(H){if(r.debug.checkShaderErrors){const Q=l.getProgramInfoLog(w)||"",tt=l.getShaderInfoLog(z)||"",lt=l.getShaderInfoLog(O)||"",it=Q.trim(),I=tt.trim(),F=lt.trim();let J=!0,mt=!0;if(l.getProgramParameter(w,l.LINK_STATUS)===!1)if(J=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,w,z,O);else{const pt=Dv(l,z,"vertex"),N=Dv(l,O,"fragment");Re("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(w,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+it+`
`+pt+`
`+N)}else it!==""?le("WebGLProgram: Program Info Log:",it):(I===""||F==="")&&(mt=!1);mt&&(H.diagnostics={runnable:J,programLog:it,vertexShader:{log:I,prefix:x},fragmentShader:{log:F,prefix:g}})}l.deleteShader(z),l.deleteShader(O),V=new Su(l,w),b=VA(l,w)}let V;this.getUniforms=function(){return V===void 0&&D(this),V};let b;this.getAttributes=function(){return b===void 0&&D(this),b};let A=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=l.getProgramParameter(w,LA)),A},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=NA++,this.cacheKey=t,this.usedTimes=1,this.program=w,this.vertexShader=z,this.fragmentShader=O,this}let aR=0;class sR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new rR(t),i.set(t,s)),s}}class rR{constructor(t){this.id=aR++,this.code=t,this.usedTimes=0}}function oR(r,t,i,s,l,c,h){const d=new Bp,m=new sR,p=new Set,v=[],_=new Map,M=l.logarithmicDepthBuffer;let y=l.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(b){return p.add(b),b===0?"uv":`uv${b}`}function x(b,A,H,Q,tt){const lt=Q.fog,it=tt.geometry,I=b.isMeshStandardMaterial?Q.environment:null,F=(b.isMeshStandardMaterial?i:t).get(b.envMap||I),J=F&&F.mapping===Uu?F.image.height:null,mt=T[b.type];b.precision!==null&&(y=l.getMaxPrecision(b.precision),y!==b.precision&&le("WebGLProgram.getParameters:",b.precision,"not supported, using",y,"instead."));const pt=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,N=pt!==void 0?pt.length:0;let et=0;it.morphAttributes.position!==void 0&&(et=1),it.morphAttributes.normal!==void 0&&(et=2),it.morphAttributes.color!==void 0&&(et=3);let ht,xt,Tt,Y;if(mt){const we=Xi[mt];ht=we.vertexShader,xt=we.fragmentShader}else ht=b.vertexShader,xt=b.fragmentShader,m.update(b),Tt=m.getVertexShaderID(b),Y=m.getFragmentShaderID(b);const $=r.getRenderTarget(),Mt=r.state.buffers.depth.getReversed(),Rt=tt.isInstancedMesh===!0,Dt=tt.isBatchedMesh===!0,Qt=!!b.map,me=!!b.matcap,te=!!F,ce=!!b.aoMap,ue=!!b.lightMap,re=!!b.bumpMap,Ke=!!b.normalMap,k=!!b.displacementMap,$e=!!b.emissiveMap,Ae=!!b.metalnessMap,ze=!!b.roughnessMap,jt=b.anisotropy>0,B=b.clearcoat>0,E=b.dispersion>0,j=b.iridescence>0,_t=b.sheen>0,Et=b.transmission>0,dt=jt&&!!b.anisotropyMap,Kt=B&&!!b.clearcoatMap,Lt=B&&!!b.clearcoatNormalMap,Wt=B&&!!b.clearcoatRoughnessMap,oe=j&&!!b.iridescenceMap,At=j&&!!b.iridescenceThicknessMap,Ct=_t&&!!b.sheenColorMap,Ht=_t&&!!b.sheenRoughnessMap,It=!!b.specularMap,Nt=!!b.specularColorMap,ge=!!b.specularIntensityMap,q=Et&&!!b.transmissionMap,Pt=Et&&!!b.thicknessMap,wt=!!b.gradientMap,Ft=!!b.alphaMap,bt=b.alphaTest>0,yt=!!b.alphaHash,Ut=!!b.extensions;let fe=Yi;b.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(fe=r.toneMapping);const Ie={shaderID:mt,shaderType:b.type,shaderName:b.name,vertexShader:ht,fragmentShader:xt,defines:b.defines,customVertexShaderID:Tt,customFragmentShaderID:Y,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:y,batching:Dt,batchingColor:Dt&&tt._colorsTexture!==null,instancing:Rt,instancingColor:Rt&&tt.instanceColor!==null,instancingMorph:Rt&&tt.morphTexture!==null,outputColorSpace:$===null?r.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:io,alphaToCoverage:!!b.alphaToCoverage,map:Qt,matcap:me,envMap:te,envMapMode:te&&F.mapping,envMapCubeUVHeight:J,aoMap:ce,lightMap:ue,bumpMap:re,normalMap:Ke,displacementMap:k,emissiveMap:$e,normalMapObjectSpace:Ke&&b.normalMapType===GM,normalMapTangentSpace:Ke&&b.normalMapType===px,metalnessMap:Ae,roughnessMap:ze,anisotropy:jt,anisotropyMap:dt,clearcoat:B,clearcoatMap:Kt,clearcoatNormalMap:Lt,clearcoatRoughnessMap:Wt,dispersion:E,iridescence:j,iridescenceMap:oe,iridescenceThicknessMap:At,sheen:_t,sheenColorMap:Ct,sheenRoughnessMap:Ht,specularMap:It,specularColorMap:Nt,specularIntensityMap:ge,transmission:Et,transmissionMap:q,thicknessMap:Pt,gradientMap:wt,opaque:b.transparent===!1&&b.blending===Qr&&b.alphaToCoverage===!1,alphaMap:Ft,alphaTest:bt,alphaHash:yt,combine:b.combine,mapUv:Qt&&w(b.map.channel),aoMapUv:ce&&w(b.aoMap.channel),lightMapUv:ue&&w(b.lightMap.channel),bumpMapUv:re&&w(b.bumpMap.channel),normalMapUv:Ke&&w(b.normalMap.channel),displacementMapUv:k&&w(b.displacementMap.channel),emissiveMapUv:$e&&w(b.emissiveMap.channel),metalnessMapUv:Ae&&w(b.metalnessMap.channel),roughnessMapUv:ze&&w(b.roughnessMap.channel),anisotropyMapUv:dt&&w(b.anisotropyMap.channel),clearcoatMapUv:Kt&&w(b.clearcoatMap.channel),clearcoatNormalMapUv:Lt&&w(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Wt&&w(b.clearcoatRoughnessMap.channel),iridescenceMapUv:oe&&w(b.iridescenceMap.channel),iridescenceThicknessMapUv:At&&w(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ct&&w(b.sheenColorMap.channel),sheenRoughnessMapUv:Ht&&w(b.sheenRoughnessMap.channel),specularMapUv:It&&w(b.specularMap.channel),specularColorMapUv:Nt&&w(b.specularColorMap.channel),specularIntensityMapUv:ge&&w(b.specularIntensityMap.channel),transmissionMapUv:q&&w(b.transmissionMap.channel),thicknessMapUv:Pt&&w(b.thicknessMap.channel),alphaMapUv:Ft&&w(b.alphaMap.channel),vertexTangents:!!it.attributes.tangent&&(Ke||jt),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,pointsUvs:tt.isPoints===!0&&!!it.attributes.uv&&(Qt||Ft),fog:!!lt,useFog:b.fog===!0,fogExp2:!!lt&&lt.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:M,reversedDepthBuffer:Mt,skinning:tt.isSkinnedMesh===!0,morphTargets:it.morphAttributes.position!==void 0,morphNormals:it.morphAttributes.normal!==void 0,morphColors:it.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:et,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:b.dithering,shadowMapEnabled:r.shadowMap.enabled&&H.length>0,shadowMapType:r.shadowMap.type,toneMapping:fe,decodeVideoTexture:Qt&&b.map.isVideoTexture===!0&&De.getTransfer(b.map.colorSpace)===Ve,decodeVideoTextureEmissive:$e&&b.emissiveMap.isVideoTexture===!0&&De.getTransfer(b.emissiveMap.colorSpace)===Ve,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Sa,flipSided:b.side===Jn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ut&&b.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ut&&b.extensions.multiDraw===!0||Dt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Ie.vertexUv1s=p.has(1),Ie.vertexUv2s=p.has(2),Ie.vertexUv3s=p.has(3),p.clear(),Ie}function g(b){const A=[];if(b.shaderID?A.push(b.shaderID):(A.push(b.customVertexShaderID),A.push(b.customFragmentShaderID)),b.defines!==void 0)for(const H in b.defines)A.push(H),A.push(b.defines[H]);return b.isRawShaderMaterial===!1&&(P(A,b),U(A,b),A.push(r.outputColorSpace)),A.push(b.customProgramCacheKey),A.join()}function P(b,A){b.push(A.precision),b.push(A.outputColorSpace),b.push(A.envMapMode),b.push(A.envMapCubeUVHeight),b.push(A.mapUv),b.push(A.alphaMapUv),b.push(A.lightMapUv),b.push(A.aoMapUv),b.push(A.bumpMapUv),b.push(A.normalMapUv),b.push(A.displacementMapUv),b.push(A.emissiveMapUv),b.push(A.metalnessMapUv),b.push(A.roughnessMapUv),b.push(A.anisotropyMapUv),b.push(A.clearcoatMapUv),b.push(A.clearcoatNormalMapUv),b.push(A.clearcoatRoughnessMapUv),b.push(A.iridescenceMapUv),b.push(A.iridescenceThicknessMapUv),b.push(A.sheenColorMapUv),b.push(A.sheenRoughnessMapUv),b.push(A.specularMapUv),b.push(A.specularColorMapUv),b.push(A.specularIntensityMapUv),b.push(A.transmissionMapUv),b.push(A.thicknessMapUv),b.push(A.combine),b.push(A.fogExp2),b.push(A.sizeAttenuation),b.push(A.morphTargetsCount),b.push(A.morphAttributeCount),b.push(A.numDirLights),b.push(A.numPointLights),b.push(A.numSpotLights),b.push(A.numSpotLightMaps),b.push(A.numHemiLights),b.push(A.numRectAreaLights),b.push(A.numDirLightShadows),b.push(A.numPointLightShadows),b.push(A.numSpotLightShadows),b.push(A.numSpotLightShadowsWithMaps),b.push(A.numLightProbes),b.push(A.shadowMapType),b.push(A.toneMapping),b.push(A.numClippingPlanes),b.push(A.numClipIntersection),b.push(A.depthPacking)}function U(b,A){d.disableAll(),A.instancing&&d.enable(0),A.instancingColor&&d.enable(1),A.instancingMorph&&d.enable(2),A.matcap&&d.enable(3),A.envMap&&d.enable(4),A.normalMapObjectSpace&&d.enable(5),A.normalMapTangentSpace&&d.enable(6),A.clearcoat&&d.enable(7),A.iridescence&&d.enable(8),A.alphaTest&&d.enable(9),A.vertexColors&&d.enable(10),A.vertexAlphas&&d.enable(11),A.vertexUv1s&&d.enable(12),A.vertexUv2s&&d.enable(13),A.vertexUv3s&&d.enable(14),A.vertexTangents&&d.enable(15),A.anisotropy&&d.enable(16),A.alphaHash&&d.enable(17),A.batching&&d.enable(18),A.dispersion&&d.enable(19),A.batchingColor&&d.enable(20),A.gradientMap&&d.enable(21),b.push(d.mask),d.disableAll(),A.fog&&d.enable(0),A.useFog&&d.enable(1),A.flatShading&&d.enable(2),A.logarithmicDepthBuffer&&d.enable(3),A.reversedDepthBuffer&&d.enable(4),A.skinning&&d.enable(5),A.morphTargets&&d.enable(6),A.morphNormals&&d.enable(7),A.morphColors&&d.enable(8),A.premultipliedAlpha&&d.enable(9),A.shadowMapEnabled&&d.enable(10),A.doubleSided&&d.enable(11),A.flipSided&&d.enable(12),A.useDepthPacking&&d.enable(13),A.dithering&&d.enable(14),A.transmission&&d.enable(15),A.sheen&&d.enable(16),A.opaque&&d.enable(17),A.pointsUvs&&d.enable(18),A.decodeVideoTexture&&d.enable(19),A.decodeVideoTextureEmissive&&d.enable(20),A.alphaToCoverage&&d.enable(21),b.push(d.mask)}function L(b){const A=T[b.type];let H;if(A){const Q=Xi[A];H=gE.clone(Q.uniforms)}else H=b.uniforms;return H}function z(b,A){let H=_.get(A);return H!==void 0?++H.usedTimes:(H=new iR(r,A,b,c),v.push(H),_.set(A,H)),H}function O(b){if(--b.usedTimes===0){const A=v.indexOf(b);v[A]=v[v.length-1],v.pop(),_.delete(b.cacheKey),b.destroy()}}function D(b){m.remove(b)}function V(){m.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:L,acquireProgram:z,releaseProgram:O,releaseShaderCache:D,programs:v,dispose:V}}function lR(){let r=new WeakMap;function t(h){return r.has(h)}function i(h){let d=r.get(h);return d===void 0&&(d={},r.set(h,d)),d}function s(h){r.delete(h)}function l(h,d,m){r.get(h)[d]=m}function c(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function cR(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Pv(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function zv(){const r=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function h(_,M,y,T,w,x){let g=r[t];return g===void 0?(g={id:_.id,object:_,geometry:M,material:y,groupOrder:T,renderOrder:_.renderOrder,z:w,group:x},r[t]=g):(g.id=_.id,g.object=_,g.geometry=M,g.material=y,g.groupOrder=T,g.renderOrder=_.renderOrder,g.z=w,g.group=x),t++,g}function d(_,M,y,T,w,x){const g=h(_,M,y,T,w,x);y.transmission>0?s.push(g):y.transparent===!0?l.push(g):i.push(g)}function m(_,M,y,T,w,x){const g=h(_,M,y,T,w,x);y.transmission>0?s.unshift(g):y.transparent===!0?l.unshift(g):i.unshift(g)}function p(_,M){i.length>1&&i.sort(_||cR),s.length>1&&s.sort(M||Pv),l.length>1&&l.sort(M||Pv)}function v(){for(let _=t,M=r.length;_<M;_++){const y=r[_];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:d,unshift:m,finish:v,sort:p}}function uR(){let r=new WeakMap;function t(s,l){const c=r.get(s);let h;return c===void 0?(h=new zv,r.set(s,[h])):l>=c.length?(h=new zv,c.push(h)):h=c[l],h}function i(){r=new WeakMap}return{get:t,dispose:i}}function fR(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new W,color:new ne};break;case"SpotLight":i={position:new W,direction:new W,color:new ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new W,color:new ne,distance:0,decay:0};break;case"HemisphereLight":i={direction:new W,skyColor:new ne,groundColor:new ne};break;case"RectAreaLight":i={color:new ne,position:new W,halfWidth:new W,halfHeight:new W};break}return r[t.id]=i,i}}}function hR(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let dR=0;function pR(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function mR(r){const t=new fR,i=hR(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new W);const l=new W,c=new Ce,h=new Ce;function d(p){let v=0,_=0,M=0;for(let b=0;b<9;b++)s.probe[b].set(0,0,0);let y=0,T=0,w=0,x=0,g=0,P=0,U=0,L=0,z=0,O=0,D=0;p.sort(pR);for(let b=0,A=p.length;b<A;b++){const H=p[b],Q=H.color,tt=H.intensity,lt=H.distance;let it=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===no?it=H.shadow.map.texture:it=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)v+=Q.r*tt,_+=Q.g*tt,M+=Q.b*tt;else if(H.isLightProbe){for(let I=0;I<9;I++)s.probe[I].addScaledVector(H.sh.coefficients[I],tt);D++}else if(H.isDirectionalLight){const I=t.get(H);if(I.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const F=H.shadow,J=i.get(H);J.shadowIntensity=F.intensity,J.shadowBias=F.bias,J.shadowNormalBias=F.normalBias,J.shadowRadius=F.radius,J.shadowMapSize=F.mapSize,s.directionalShadow[y]=J,s.directionalShadowMap[y]=it,s.directionalShadowMatrix[y]=H.shadow.matrix,P++}s.directional[y]=I,y++}else if(H.isSpotLight){const I=t.get(H);I.position.setFromMatrixPosition(H.matrixWorld),I.color.copy(Q).multiplyScalar(tt),I.distance=lt,I.coneCos=Math.cos(H.angle),I.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),I.decay=H.decay,s.spot[w]=I;const F=H.shadow;if(H.map&&(s.spotLightMap[z]=H.map,z++,F.updateMatrices(H),H.castShadow&&O++),s.spotLightMatrix[w]=F.matrix,H.castShadow){const J=i.get(H);J.shadowIntensity=F.intensity,J.shadowBias=F.bias,J.shadowNormalBias=F.normalBias,J.shadowRadius=F.radius,J.shadowMapSize=F.mapSize,s.spotShadow[w]=J,s.spotShadowMap[w]=it,L++}w++}else if(H.isRectAreaLight){const I=t.get(H);I.color.copy(Q).multiplyScalar(tt),I.halfWidth.set(H.width*.5,0,0),I.halfHeight.set(0,H.height*.5,0),s.rectArea[x]=I,x++}else if(H.isPointLight){const I=t.get(H);if(I.color.copy(H.color).multiplyScalar(H.intensity),I.distance=H.distance,I.decay=H.decay,H.castShadow){const F=H.shadow,J=i.get(H);J.shadowIntensity=F.intensity,J.shadowBias=F.bias,J.shadowNormalBias=F.normalBias,J.shadowRadius=F.radius,J.shadowMapSize=F.mapSize,J.shadowCameraNear=F.camera.near,J.shadowCameraFar=F.camera.far,s.pointShadow[T]=J,s.pointShadowMap[T]=it,s.pointShadowMatrix[T]=H.shadow.matrix,U++}s.point[T]=I,T++}else if(H.isHemisphereLight){const I=t.get(H);I.skyColor.copy(H.color).multiplyScalar(tt),I.groundColor.copy(H.groundColor).multiplyScalar(tt),s.hemi[g]=I,g++}}x>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Bt.LTC_FLOAT_1,s.rectAreaLTC2=Bt.LTC_FLOAT_2):(s.rectAreaLTC1=Bt.LTC_HALF_1,s.rectAreaLTC2=Bt.LTC_HALF_2)),s.ambient[0]=v,s.ambient[1]=_,s.ambient[2]=M;const V=s.hash;(V.directionalLength!==y||V.pointLength!==T||V.spotLength!==w||V.rectAreaLength!==x||V.hemiLength!==g||V.numDirectionalShadows!==P||V.numPointShadows!==U||V.numSpotShadows!==L||V.numSpotMaps!==z||V.numLightProbes!==D)&&(s.directional.length=y,s.spot.length=w,s.rectArea.length=x,s.point.length=T,s.hemi.length=g,s.directionalShadow.length=P,s.directionalShadowMap.length=P,s.pointShadow.length=U,s.pointShadowMap.length=U,s.spotShadow.length=L,s.spotShadowMap.length=L,s.directionalShadowMatrix.length=P,s.pointShadowMatrix.length=U,s.spotLightMatrix.length=L+z-O,s.spotLightMap.length=z,s.numSpotLightShadowsWithMaps=O,s.numLightProbes=D,V.directionalLength=y,V.pointLength=T,V.spotLength=w,V.rectAreaLength=x,V.hemiLength=g,V.numDirectionalShadows=P,V.numPointShadows=U,V.numSpotShadows=L,V.numSpotMaps=z,V.numLightProbes=D,s.version=dR++)}function m(p,v){let _=0,M=0,y=0,T=0,w=0;const x=v.matrixWorldInverse;for(let g=0,P=p.length;g<P;g++){const U=p[g];if(U.isDirectionalLight){const L=s.directional[_];L.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(x),_++}else if(U.isSpotLight){const L=s.spot[y];L.position.setFromMatrixPosition(U.matrixWorld),L.position.applyMatrix4(x),L.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(x),y++}else if(U.isRectAreaLight){const L=s.rectArea[T];L.position.setFromMatrixPosition(U.matrixWorld),L.position.applyMatrix4(x),h.identity(),c.copy(U.matrixWorld),c.premultiply(x),h.extractRotation(c),L.halfWidth.set(U.width*.5,0,0),L.halfHeight.set(0,U.height*.5,0),L.halfWidth.applyMatrix4(h),L.halfHeight.applyMatrix4(h),T++}else if(U.isPointLight){const L=s.point[M];L.position.setFromMatrixPosition(U.matrixWorld),L.position.applyMatrix4(x),M++}else if(U.isHemisphereLight){const L=s.hemi[w];L.direction.setFromMatrixPosition(U.matrixWorld),L.direction.transformDirection(x),w++}}}return{setup:d,setupView:m,state:s}}function Bv(r){const t=new mR(r),i=[],s=[];function l(v){p.camera=v,i.length=0,s.length=0}function c(v){i.push(v)}function h(v){s.push(v)}function d(){t.setup(i)}function m(v){t.setupView(i,v)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:h}}function gR(r){let t=new WeakMap;function i(l,c=0){const h=t.get(l);let d;return h===void 0?(d=new Bv(r),t.set(l,[d])):c>=h.length?(d=new Bv(r),h.push(d)):d=h[c],d}function s(){t=new WeakMap}return{get:i,dispose:s}}const _R=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,xR=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],SR=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],Iv=new Ce,dl=new W,Ad=new W;function yR(r,t,i){let s=new Ip;const l=new se,c=new se,h=new sn,d=new NE,m=new OE,p={},v=i.maxTextureSize,_={[us]:Jn,[Jn]:us,[Sa]:Sa},M=new Ki({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new se},radius:{value:4}},vertexShader:_R,fragmentShader:vR}),y=M.clone();y.defines.HORIZONTAL_PASS=1;const T=new Xn;T.setAttribute("position",new kn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new $n(T,M),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=du;let g=this.type;this.render=function(O,D,V){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||O.length===0)return;O.type===vM&&(le("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),O.type=du);const b=r.getRenderTarget(),A=r.getActiveCubeFace(),H=r.getActiveMipmapLevel(),Q=r.state;Q.setBlending(Ma),Q.buffers.depth.getReversed()===!0?Q.buffers.color.setClear(0,0,0,0):Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const tt=g!==this.type;tt&&D.traverse(function(lt){lt.material&&(Array.isArray(lt.material)?lt.material.forEach(it=>it.needsUpdate=!0):lt.material.needsUpdate=!0)});for(let lt=0,it=O.length;lt<it;lt++){const I=O[lt],F=I.shadow;if(F===void 0){le("WebGLShadowMap:",I,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;l.copy(F.mapSize);const J=F.getFrameExtents();if(l.multiply(J),c.copy(F.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(c.x=Math.floor(v/J.x),l.x=c.x*J.x,F.mapSize.x=c.x),l.y>v&&(c.y=Math.floor(v/J.y),l.y=c.y*J.y,F.mapSize.y=c.y)),F.map===null||tt===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===_l){if(I.isPointLight){le("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new ji(l.x,l.y,{format:no,type:ba,minFilter:In,magFilter:In,generateMipmaps:!1}),F.map.texture.name=I.name+".shadowMap",F.map.depthTexture=new Tl(l.x,l.y,Pi),F.map.depthTexture.name=I.name+".shadowMapDepth",F.map.depthTexture.format=Ta,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Ln,F.map.depthTexture.magFilter=Ln}else{I.isPointLight?(F.map=new Ex(l.x),F.map.depthTexture=new AE(l.x,Zi)):(F.map=new ji(l.x,l.y),F.map.depthTexture=new Tl(l.x,l.y,Zi)),F.map.depthTexture.name=I.name+".shadowMap",F.map.depthTexture.format=Ta;const pt=r.state.buffers.depth.getReversed();this.type===du?(F.map.depthTexture.compareFunction=pt?Pp:Op,F.map.depthTexture.minFilter=In,F.map.depthTexture.magFilter=In):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Ln,F.map.depthTexture.magFilter=Ln)}F.camera.updateProjectionMatrix()}const mt=F.map.isWebGLCubeRenderTarget?6:1;for(let pt=0;pt<mt;pt++){if(F.map.isWebGLCubeRenderTarget)r.setRenderTarget(F.map,pt),r.clear();else{pt===0&&(r.setRenderTarget(F.map),r.clear());const N=F.getViewport(pt);h.set(c.x*N.x,c.y*N.y,c.x*N.z,c.y*N.w),Q.viewport(h)}if(I.isPointLight){const N=F.camera,et=F.matrix,ht=I.distance||N.far;ht!==N.far&&(N.far=ht,N.updateProjectionMatrix()),dl.setFromMatrixPosition(I.matrixWorld),N.position.copy(dl),Ad.copy(N.position),Ad.add(xR[pt]),N.up.copy(SR[pt]),N.lookAt(Ad),N.updateMatrixWorld(),et.makeTranslation(-dl.x,-dl.y,-dl.z),Iv.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),F._frustum.setFromProjectionMatrix(Iv,N.coordinateSystem,N.reversedDepth)}else F.updateMatrices(I);s=F.getFrustum(),L(D,V,F.camera,I,this.type)}F.isPointLightShadow!==!0&&this.type===_l&&P(F,V),F.needsUpdate=!1}g=this.type,x.needsUpdate=!1,r.setRenderTarget(b,A,H)};function P(O,D){const V=t.update(w);M.defines.VSM_SAMPLES!==O.blurSamples&&(M.defines.VSM_SAMPLES=O.blurSamples,y.defines.VSM_SAMPLES=O.blurSamples,M.needsUpdate=!0,y.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new ji(l.x,l.y,{format:no,type:ba})),M.uniforms.shadow_pass.value=O.map.depthTexture,M.uniforms.resolution.value=O.mapSize,M.uniforms.radius.value=O.radius,r.setRenderTarget(O.mapPass),r.clear(),r.renderBufferDirect(D,null,V,M,w,null),y.uniforms.shadow_pass.value=O.mapPass.texture,y.uniforms.resolution.value=O.mapSize,y.uniforms.radius.value=O.radius,r.setRenderTarget(O.map),r.clear(),r.renderBufferDirect(D,null,V,y,w,null)}function U(O,D,V,b){let A=null;const H=V.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(H!==void 0)A=H;else if(A=V.isPointLight===!0?m:d,r.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){const Q=A.uuid,tt=D.uuid;let lt=p[Q];lt===void 0&&(lt={},p[Q]=lt);let it=lt[tt];it===void 0&&(it=A.clone(),lt[tt]=it,D.addEventListener("dispose",z)),A=it}if(A.visible=D.visible,A.wireframe=D.wireframe,b===_l?A.side=D.shadowSide!==null?D.shadowSide:D.side:A.side=D.shadowSide!==null?D.shadowSide:_[D.side],A.alphaMap=D.alphaMap,A.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,A.map=D.map,A.clipShadows=D.clipShadows,A.clippingPlanes=D.clippingPlanes,A.clipIntersection=D.clipIntersection,A.displacementMap=D.displacementMap,A.displacementScale=D.displacementScale,A.displacementBias=D.displacementBias,A.wireframeLinewidth=D.wireframeLinewidth,A.linewidth=D.linewidth,V.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const Q=r.properties.get(A);Q.light=V}return A}function L(O,D,V,b,A){if(O.visible===!1)return;if(O.layers.test(D.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&A===_l)&&(!O.frustumCulled||s.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,O.matrixWorld);const tt=t.update(O),lt=O.material;if(Array.isArray(lt)){const it=tt.groups;for(let I=0,F=it.length;I<F;I++){const J=it[I],mt=lt[J.materialIndex];if(mt&&mt.visible){const pt=U(O,mt,b,A);O.onBeforeShadow(r,O,D,V,tt,pt,J),r.renderBufferDirect(V,null,tt,pt,O,J),O.onAfterShadow(r,O,D,V,tt,pt,J)}}}else if(lt.visible){const it=U(O,lt,b,A);O.onBeforeShadow(r,O,D,V,tt,it,null),r.renderBufferDirect(V,null,tt,it,O,null),O.onAfterShadow(r,O,D,V,tt,it,null)}}const Q=O.children;for(let tt=0,lt=Q.length;tt<lt;tt++)L(Q[tt],D,V,b,A)}function z(O){O.target.removeEventListener("dispose",z);for(const V in p){const b=p[V],A=O.target.uuid;A in b&&(b[A].dispose(),delete b[A])}}}const MR={[Dd]:Ud,[Ld]:Pd,[Nd]:zd,[to]:Od,[Ud]:Dd,[Pd]:Ld,[zd]:Nd,[Od]:to};function ER(r,t){function i(){let q=!1;const Pt=new sn;let wt=null;const Ft=new sn(0,0,0,0);return{setMask:function(bt){wt!==bt&&!q&&(r.colorMask(bt,bt,bt,bt),wt=bt)},setLocked:function(bt){q=bt},setClear:function(bt,yt,Ut,fe,Ie){Ie===!0&&(bt*=fe,yt*=fe,Ut*=fe),Pt.set(bt,yt,Ut,fe),Ft.equals(Pt)===!1&&(r.clearColor(bt,yt,Ut,fe),Ft.copy(Pt))},reset:function(){q=!1,wt=null,Ft.set(-1,0,0,0)}}}function s(){let q=!1,Pt=!1,wt=null,Ft=null,bt=null;return{setReversed:function(yt){if(Pt!==yt){const Ut=t.get("EXT_clip_control");yt?Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.ZERO_TO_ONE_EXT):Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.NEGATIVE_ONE_TO_ONE_EXT),Pt=yt;const fe=bt;bt=null,this.setClear(fe)}},getReversed:function(){return Pt},setTest:function(yt){yt?$(r.DEPTH_TEST):Mt(r.DEPTH_TEST)},setMask:function(yt){wt!==yt&&!q&&(r.depthMask(yt),wt=yt)},setFunc:function(yt){if(Pt&&(yt=MR[yt]),Ft!==yt){switch(yt){case Dd:r.depthFunc(r.NEVER);break;case Ud:r.depthFunc(r.ALWAYS);break;case Ld:r.depthFunc(r.LESS);break;case to:r.depthFunc(r.LEQUAL);break;case Nd:r.depthFunc(r.EQUAL);break;case Od:r.depthFunc(r.GEQUAL);break;case Pd:r.depthFunc(r.GREATER);break;case zd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ft=yt}},setLocked:function(yt){q=yt},setClear:function(yt){bt!==yt&&(Pt&&(yt=1-yt),r.clearDepth(yt),bt=yt)},reset:function(){q=!1,wt=null,Ft=null,bt=null,Pt=!1}}}function l(){let q=!1,Pt=null,wt=null,Ft=null,bt=null,yt=null,Ut=null,fe=null,Ie=null;return{setTest:function(we){q||(we?$(r.STENCIL_TEST):Mt(r.STENCIL_TEST))},setMask:function(we){Pt!==we&&!q&&(r.stencilMask(we),Pt=we)},setFunc:function(we,On,Ti){(wt!==we||Ft!==On||bt!==Ti)&&(r.stencilFunc(we,On,Ti),wt=we,Ft=On,bt=Ti)},setOp:function(we,On,Ti){(yt!==we||Ut!==On||fe!==Ti)&&(r.stencilOp(we,On,Ti),yt=we,Ut=On,fe=Ti)},setLocked:function(we){q=we},setClear:function(we){Ie!==we&&(r.clearStencil(we),Ie=we)},reset:function(){q=!1,Pt=null,wt=null,Ft=null,bt=null,yt=null,Ut=null,fe=null,Ie=null}}}const c=new i,h=new s,d=new l,m=new WeakMap,p=new WeakMap;let v={},_={},M=new WeakMap,y=[],T=null,w=!1,x=null,g=null,P=null,U=null,L=null,z=null,O=null,D=new ne(0,0,0),V=0,b=!1,A=null,H=null,Q=null,tt=null,lt=null;const it=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,F=0;const J=r.getParameter(r.VERSION);J.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(J)[1]),I=F>=1):J.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),I=F>=2);let mt=null,pt={};const N=r.getParameter(r.SCISSOR_BOX),et=r.getParameter(r.VIEWPORT),ht=new sn().fromArray(N),xt=new sn().fromArray(et);function Tt(q,Pt,wt,Ft){const bt=new Uint8Array(4),yt=r.createTexture();r.bindTexture(q,yt),r.texParameteri(q,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(q,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ut=0;Ut<wt;Ut++)q===r.TEXTURE_3D||q===r.TEXTURE_2D_ARRAY?r.texImage3D(Pt,0,r.RGBA,1,1,Ft,0,r.RGBA,r.UNSIGNED_BYTE,bt):r.texImage2D(Pt+Ut,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,bt);return yt}const Y={};Y[r.TEXTURE_2D]=Tt(r.TEXTURE_2D,r.TEXTURE_2D,1),Y[r.TEXTURE_CUBE_MAP]=Tt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[r.TEXTURE_2D_ARRAY]=Tt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Y[r.TEXTURE_3D]=Tt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),$(r.DEPTH_TEST),h.setFunc(to),re(!1),Ke(N_),$(r.CULL_FACE),ce(Ma);function $(q){v[q]!==!0&&(r.enable(q),v[q]=!0)}function Mt(q){v[q]!==!1&&(r.disable(q),v[q]=!1)}function Rt(q,Pt){return _[q]!==Pt?(r.bindFramebuffer(q,Pt),_[q]=Pt,q===r.DRAW_FRAMEBUFFER&&(_[r.FRAMEBUFFER]=Pt),q===r.FRAMEBUFFER&&(_[r.DRAW_FRAMEBUFFER]=Pt),!0):!1}function Dt(q,Pt){let wt=y,Ft=!1;if(q){wt=M.get(Pt),wt===void 0&&(wt=[],M.set(Pt,wt));const bt=q.textures;if(wt.length!==bt.length||wt[0]!==r.COLOR_ATTACHMENT0){for(let yt=0,Ut=bt.length;yt<Ut;yt++)wt[yt]=r.COLOR_ATTACHMENT0+yt;wt.length=bt.length,Ft=!0}}else wt[0]!==r.BACK&&(wt[0]=r.BACK,Ft=!0);Ft&&r.drawBuffers(wt)}function Qt(q){return T!==q?(r.useProgram(q),T=q,!0):!1}const me={[Ps]:r.FUNC_ADD,[SM]:r.FUNC_SUBTRACT,[yM]:r.FUNC_REVERSE_SUBTRACT};me[MM]=r.MIN,me[EM]=r.MAX;const te={[bM]:r.ZERO,[TM]:r.ONE,[AM]:r.SRC_COLOR,[Cd]:r.SRC_ALPHA,[LM]:r.SRC_ALPHA_SATURATE,[DM]:r.DST_COLOR,[CM]:r.DST_ALPHA,[RM]:r.ONE_MINUS_SRC_COLOR,[wd]:r.ONE_MINUS_SRC_ALPHA,[UM]:r.ONE_MINUS_DST_COLOR,[wM]:r.ONE_MINUS_DST_ALPHA,[NM]:r.CONSTANT_COLOR,[OM]:r.ONE_MINUS_CONSTANT_COLOR,[PM]:r.CONSTANT_ALPHA,[zM]:r.ONE_MINUS_CONSTANT_ALPHA};function ce(q,Pt,wt,Ft,bt,yt,Ut,fe,Ie,we){if(q===Ma){w===!0&&(Mt(r.BLEND),w=!1);return}if(w===!1&&($(r.BLEND),w=!0),q!==xM){if(q!==x||we!==b){if((g!==Ps||L!==Ps)&&(r.blendEquation(r.FUNC_ADD),g=Ps,L=Ps),we)switch(q){case Qr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case $r:r.blendFunc(r.ONE,r.ONE);break;case O_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case P_:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Re("WebGLState: Invalid blending: ",q);break}else switch(q){case Qr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case $r:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case O_:Re("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case P_:Re("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Re("WebGLState: Invalid blending: ",q);break}P=null,U=null,z=null,O=null,D.set(0,0,0),V=0,x=q,b=we}return}bt=bt||Pt,yt=yt||wt,Ut=Ut||Ft,(Pt!==g||bt!==L)&&(r.blendEquationSeparate(me[Pt],me[bt]),g=Pt,L=bt),(wt!==P||Ft!==U||yt!==z||Ut!==O)&&(r.blendFuncSeparate(te[wt],te[Ft],te[yt],te[Ut]),P=wt,U=Ft,z=yt,O=Ut),(fe.equals(D)===!1||Ie!==V)&&(r.blendColor(fe.r,fe.g,fe.b,Ie),D.copy(fe),V=Ie),x=q,b=!1}function ue(q,Pt){q.side===Sa?Mt(r.CULL_FACE):$(r.CULL_FACE);let wt=q.side===Jn;Pt&&(wt=!wt),re(wt),q.blending===Qr&&q.transparent===!1?ce(Ma):ce(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),h.setFunc(q.depthFunc),h.setTest(q.depthTest),h.setMask(q.depthWrite),c.setMask(q.colorWrite);const Ft=q.stencilWrite;d.setTest(Ft),Ft&&(d.setMask(q.stencilWriteMask),d.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),d.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),$e(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?$(r.SAMPLE_ALPHA_TO_COVERAGE):Mt(r.SAMPLE_ALPHA_TO_COVERAGE)}function re(q){A!==q&&(q?r.frontFace(r.CW):r.frontFace(r.CCW),A=q)}function Ke(q){q!==gM?($(r.CULL_FACE),q!==H&&(q===N_?r.cullFace(r.BACK):q===_M?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Mt(r.CULL_FACE),H=q}function k(q){q!==Q&&(I&&r.lineWidth(q),Q=q)}function $e(q,Pt,wt){q?($(r.POLYGON_OFFSET_FILL),(tt!==Pt||lt!==wt)&&(r.polygonOffset(Pt,wt),tt=Pt,lt=wt)):Mt(r.POLYGON_OFFSET_FILL)}function Ae(q){q?$(r.SCISSOR_TEST):Mt(r.SCISSOR_TEST)}function ze(q){q===void 0&&(q=r.TEXTURE0+it-1),mt!==q&&(r.activeTexture(q),mt=q)}function jt(q,Pt,wt){wt===void 0&&(mt===null?wt=r.TEXTURE0+it-1:wt=mt);let Ft=pt[wt];Ft===void 0&&(Ft={type:void 0,texture:void 0},pt[wt]=Ft),(Ft.type!==q||Ft.texture!==Pt)&&(mt!==wt&&(r.activeTexture(wt),mt=wt),r.bindTexture(q,Pt||Y[q]),Ft.type=q,Ft.texture=Pt)}function B(){const q=pt[mt];q!==void 0&&q.type!==void 0&&(r.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function E(){try{r.compressedTexImage2D(...arguments)}catch(q){Re("WebGLState:",q)}}function j(){try{r.compressedTexImage3D(...arguments)}catch(q){Re("WebGLState:",q)}}function _t(){try{r.texSubImage2D(...arguments)}catch(q){Re("WebGLState:",q)}}function Et(){try{r.texSubImage3D(...arguments)}catch(q){Re("WebGLState:",q)}}function dt(){try{r.compressedTexSubImage2D(...arguments)}catch(q){Re("WebGLState:",q)}}function Kt(){try{r.compressedTexSubImage3D(...arguments)}catch(q){Re("WebGLState:",q)}}function Lt(){try{r.texStorage2D(...arguments)}catch(q){Re("WebGLState:",q)}}function Wt(){try{r.texStorage3D(...arguments)}catch(q){Re("WebGLState:",q)}}function oe(){try{r.texImage2D(...arguments)}catch(q){Re("WebGLState:",q)}}function At(){try{r.texImage3D(...arguments)}catch(q){Re("WebGLState:",q)}}function Ct(q){ht.equals(q)===!1&&(r.scissor(q.x,q.y,q.z,q.w),ht.copy(q))}function Ht(q){xt.equals(q)===!1&&(r.viewport(q.x,q.y,q.z,q.w),xt.copy(q))}function It(q,Pt){let wt=p.get(Pt);wt===void 0&&(wt=new WeakMap,p.set(Pt,wt));let Ft=wt.get(q);Ft===void 0&&(Ft=r.getUniformBlockIndex(Pt,q.name),wt.set(q,Ft))}function Nt(q,Pt){const Ft=p.get(Pt).get(q);m.get(Pt)!==Ft&&(r.uniformBlockBinding(Pt,Ft,q.__bindingPointIndex),m.set(Pt,Ft))}function ge(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),h.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),v={},mt=null,pt={},_={},M=new WeakMap,y=[],T=null,w=!1,x=null,g=null,P=null,U=null,L=null,z=null,O=null,D=new ne(0,0,0),V=0,b=!1,A=null,H=null,Q=null,tt=null,lt=null,ht.set(0,0,r.canvas.width,r.canvas.height),xt.set(0,0,r.canvas.width,r.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:$,disable:Mt,bindFramebuffer:Rt,drawBuffers:Dt,useProgram:Qt,setBlending:ce,setMaterial:ue,setFlipSided:re,setCullFace:Ke,setLineWidth:k,setPolygonOffset:$e,setScissorTest:Ae,activeTexture:ze,bindTexture:jt,unbindTexture:B,compressedTexImage2D:E,compressedTexImage3D:j,texImage2D:oe,texImage3D:At,updateUBOMapping:It,uniformBlockBinding:Nt,texStorage2D:Lt,texStorage3D:Wt,texSubImage2D:_t,texSubImage3D:Et,compressedTexSubImage2D:dt,compressedTexSubImage3D:Kt,scissor:Ct,viewport:Ht,reset:ge}}function bR(r,t,i,s,l,c,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new se,v=new WeakMap;let _;const M=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(B,E){return y?new OffscreenCanvas(B,E):Eu("canvas")}function w(B,E,j){let _t=1;const Et=jt(B);if((Et.width>j||Et.height>j)&&(_t=j/Math.max(Et.width,Et.height)),_t<1)if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap||typeof VideoFrame<"u"&&B instanceof VideoFrame){const dt=Math.floor(_t*Et.width),Kt=Math.floor(_t*Et.height);_===void 0&&(_=T(dt,Kt));const Lt=E?T(dt,Kt):_;return Lt.width=dt,Lt.height=Kt,Lt.getContext("2d").drawImage(B,0,0,dt,Kt),le("WebGLRenderer: Texture has been resized from ("+Et.width+"x"+Et.height+") to ("+dt+"x"+Kt+")."),Lt}else return"data"in B&&le("WebGLRenderer: Image in DataTexture is too big ("+Et.width+"x"+Et.height+")."),B;return B}function x(B){return B.generateMipmaps}function g(B){r.generateMipmap(B)}function P(B){return B.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:B.isWebGL3DRenderTarget?r.TEXTURE_3D:B.isWebGLArrayRenderTarget||B.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function U(B,E,j,_t,Et=!1){if(B!==null){if(r[B]!==void 0)return r[B];le("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+B+"'")}let dt=E;if(E===r.RED&&(j===r.FLOAT&&(dt=r.R32F),j===r.HALF_FLOAT&&(dt=r.R16F),j===r.UNSIGNED_BYTE&&(dt=r.R8)),E===r.RED_INTEGER&&(j===r.UNSIGNED_BYTE&&(dt=r.R8UI),j===r.UNSIGNED_SHORT&&(dt=r.R16UI),j===r.UNSIGNED_INT&&(dt=r.R32UI),j===r.BYTE&&(dt=r.R8I),j===r.SHORT&&(dt=r.R16I),j===r.INT&&(dt=r.R32I)),E===r.RG&&(j===r.FLOAT&&(dt=r.RG32F),j===r.HALF_FLOAT&&(dt=r.RG16F),j===r.UNSIGNED_BYTE&&(dt=r.RG8)),E===r.RG_INTEGER&&(j===r.UNSIGNED_BYTE&&(dt=r.RG8UI),j===r.UNSIGNED_SHORT&&(dt=r.RG16UI),j===r.UNSIGNED_INT&&(dt=r.RG32UI),j===r.BYTE&&(dt=r.RG8I),j===r.SHORT&&(dt=r.RG16I),j===r.INT&&(dt=r.RG32I)),E===r.RGB_INTEGER&&(j===r.UNSIGNED_BYTE&&(dt=r.RGB8UI),j===r.UNSIGNED_SHORT&&(dt=r.RGB16UI),j===r.UNSIGNED_INT&&(dt=r.RGB32UI),j===r.BYTE&&(dt=r.RGB8I),j===r.SHORT&&(dt=r.RGB16I),j===r.INT&&(dt=r.RGB32I)),E===r.RGBA_INTEGER&&(j===r.UNSIGNED_BYTE&&(dt=r.RGBA8UI),j===r.UNSIGNED_SHORT&&(dt=r.RGBA16UI),j===r.UNSIGNED_INT&&(dt=r.RGBA32UI),j===r.BYTE&&(dt=r.RGBA8I),j===r.SHORT&&(dt=r.RGBA16I),j===r.INT&&(dt=r.RGBA32I)),E===r.RGB&&(j===r.UNSIGNED_INT_5_9_9_9_REV&&(dt=r.RGB9_E5),j===r.UNSIGNED_INT_10F_11F_11F_REV&&(dt=r.R11F_G11F_B10F)),E===r.RGBA){const Kt=Et?yu:De.getTransfer(_t);j===r.FLOAT&&(dt=r.RGBA32F),j===r.HALF_FLOAT&&(dt=r.RGBA16F),j===r.UNSIGNED_BYTE&&(dt=Kt===Ve?r.SRGB8_ALPHA8:r.RGBA8),j===r.UNSIGNED_SHORT_4_4_4_4&&(dt=r.RGBA4),j===r.UNSIGNED_SHORT_5_5_5_1&&(dt=r.RGB5_A1)}return(dt===r.R16F||dt===r.R32F||dt===r.RG16F||dt===r.RG32F||dt===r.RGBA16F||dt===r.RGBA32F)&&t.get("EXT_color_buffer_float"),dt}function L(B,E){let j;return B?E===null||E===Zi||E===yl?j=r.DEPTH24_STENCIL8:E===Pi?j=r.DEPTH32F_STENCIL8:E===Sl&&(j=r.DEPTH24_STENCIL8,le("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Zi||E===yl?j=r.DEPTH_COMPONENT24:E===Pi?j=r.DEPTH_COMPONENT32F:E===Sl&&(j=r.DEPTH_COMPONENT16),j}function z(B,E){return x(B)===!0||B.isFramebufferTexture&&B.minFilter!==Ln&&B.minFilter!==In?Math.log2(Math.max(E.width,E.height))+1:B.mipmaps!==void 0&&B.mipmaps.length>0?B.mipmaps.length:B.isCompressedTexture&&Array.isArray(B.image)?E.mipmaps.length:1}function O(B){const E=B.target;E.removeEventListener("dispose",O),V(E),E.isVideoTexture&&v.delete(E)}function D(B){const E=B.target;E.removeEventListener("dispose",D),A(E)}function V(B){const E=s.get(B);if(E.__webglInit===void 0)return;const j=B.source,_t=M.get(j);if(_t){const Et=_t[E.__cacheKey];Et.usedTimes--,Et.usedTimes===0&&b(B),Object.keys(_t).length===0&&M.delete(j)}s.remove(B)}function b(B){const E=s.get(B);r.deleteTexture(E.__webglTexture);const j=B.source,_t=M.get(j);delete _t[E.__cacheKey],h.memory.textures--}function A(B){const E=s.get(B);if(B.depthTexture&&(B.depthTexture.dispose(),s.remove(B.depthTexture)),B.isWebGLCubeRenderTarget)for(let _t=0;_t<6;_t++){if(Array.isArray(E.__webglFramebuffer[_t]))for(let Et=0;Et<E.__webglFramebuffer[_t].length;Et++)r.deleteFramebuffer(E.__webglFramebuffer[_t][Et]);else r.deleteFramebuffer(E.__webglFramebuffer[_t]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[_t])}else{if(Array.isArray(E.__webglFramebuffer))for(let _t=0;_t<E.__webglFramebuffer.length;_t++)r.deleteFramebuffer(E.__webglFramebuffer[_t]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let _t=0;_t<E.__webglColorRenderbuffer.length;_t++)E.__webglColorRenderbuffer[_t]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[_t]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const j=B.textures;for(let _t=0,Et=j.length;_t<Et;_t++){const dt=s.get(j[_t]);dt.__webglTexture&&(r.deleteTexture(dt.__webglTexture),h.memory.textures--),s.remove(j[_t])}s.remove(B)}let H=0;function Q(){H=0}function tt(){const B=H;return B>=l.maxTextures&&le("WebGLTextures: Trying to use "+B+" texture units while this GPU supports only "+l.maxTextures),H+=1,B}function lt(B){const E=[];return E.push(B.wrapS),E.push(B.wrapT),E.push(B.wrapR||0),E.push(B.magFilter),E.push(B.minFilter),E.push(B.anisotropy),E.push(B.internalFormat),E.push(B.format),E.push(B.type),E.push(B.generateMipmaps),E.push(B.premultiplyAlpha),E.push(B.flipY),E.push(B.unpackAlignment),E.push(B.colorSpace),E.join()}function it(B,E){const j=s.get(B);if(B.isVideoTexture&&Ae(B),B.isRenderTargetTexture===!1&&B.isExternalTexture!==!0&&B.version>0&&j.__version!==B.version){const _t=B.image;if(_t===null)le("WebGLRenderer: Texture marked for update but no image data found.");else if(_t.complete===!1)le("WebGLRenderer: Texture marked for update but image is incomplete");else{Y(j,B,E);return}}else B.isExternalTexture&&(j.__webglTexture=B.sourceTexture?B.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,j.__webglTexture,r.TEXTURE0+E)}function I(B,E){const j=s.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&j.__version!==B.version){Y(j,B,E);return}else B.isExternalTexture&&(j.__webglTexture=B.sourceTexture?B.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,j.__webglTexture,r.TEXTURE0+E)}function F(B,E){const j=s.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&j.__version!==B.version){Y(j,B,E);return}i.bindTexture(r.TEXTURE_3D,j.__webglTexture,r.TEXTURE0+E)}function J(B,E){const j=s.get(B);if(B.isCubeDepthTexture!==!0&&B.version>0&&j.__version!==B.version){$(j,B,E);return}i.bindTexture(r.TEXTURE_CUBE_MAP,j.__webglTexture,r.TEXTURE0+E)}const mt={[Fd]:r.REPEAT,[ya]:r.CLAMP_TO_EDGE,[Hd]:r.MIRRORED_REPEAT},pt={[Ln]:r.NEAREST,[FM]:r.NEAREST_MIPMAP_NEAREST,[Ic]:r.NEAREST_MIPMAP_LINEAR,[In]:r.LINEAR,[Yh]:r.LINEAR_MIPMAP_NEAREST,[Is]:r.LINEAR_MIPMAP_LINEAR},N={[VM]:r.NEVER,[YM]:r.ALWAYS,[kM]:r.LESS,[Op]:r.LEQUAL,[XM]:r.EQUAL,[Pp]:r.GEQUAL,[WM]:r.GREATER,[qM]:r.NOTEQUAL};function et(B,E){if(E.type===Pi&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===In||E.magFilter===Yh||E.magFilter===Ic||E.magFilter===Is||E.minFilter===In||E.minFilter===Yh||E.minFilter===Ic||E.minFilter===Is)&&le("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(B,r.TEXTURE_WRAP_S,mt[E.wrapS]),r.texParameteri(B,r.TEXTURE_WRAP_T,mt[E.wrapT]),(B===r.TEXTURE_3D||B===r.TEXTURE_2D_ARRAY)&&r.texParameteri(B,r.TEXTURE_WRAP_R,mt[E.wrapR]),r.texParameteri(B,r.TEXTURE_MAG_FILTER,pt[E.magFilter]),r.texParameteri(B,r.TEXTURE_MIN_FILTER,pt[E.minFilter]),E.compareFunction&&(r.texParameteri(B,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(B,r.TEXTURE_COMPARE_FUNC,N[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Ln||E.minFilter!==Ic&&E.minFilter!==Is||E.type===Pi&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const j=t.get("EXT_texture_filter_anisotropic");r.texParameterf(B,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function ht(B,E){let j=!1;B.__webglInit===void 0&&(B.__webglInit=!0,E.addEventListener("dispose",O));const _t=E.source;let Et=M.get(_t);Et===void 0&&(Et={},M.set(_t,Et));const dt=lt(E);if(dt!==B.__cacheKey){Et[dt]===void 0&&(Et[dt]={texture:r.createTexture(),usedTimes:0},h.memory.textures++,j=!0),Et[dt].usedTimes++;const Kt=Et[B.__cacheKey];Kt!==void 0&&(Et[B.__cacheKey].usedTimes--,Kt.usedTimes===0&&b(E)),B.__cacheKey=dt,B.__webglTexture=Et[dt].texture}return j}function xt(B,E,j){return Math.floor(Math.floor(B/j)/E)}function Tt(B,E,j,_t){const dt=B.updateRanges;if(dt.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,E.width,E.height,j,_t,E.data);else{dt.sort((At,Ct)=>At.start-Ct.start);let Kt=0;for(let At=1;At<dt.length;At++){const Ct=dt[Kt],Ht=dt[At],It=Ct.start+Ct.count,Nt=xt(Ht.start,E.width,4),ge=xt(Ct.start,E.width,4);Ht.start<=It+1&&Nt===ge&&xt(Ht.start+Ht.count-1,E.width,4)===Nt?Ct.count=Math.max(Ct.count,Ht.start+Ht.count-Ct.start):(++Kt,dt[Kt]=Ht)}dt.length=Kt+1;const Lt=r.getParameter(r.UNPACK_ROW_LENGTH),Wt=r.getParameter(r.UNPACK_SKIP_PIXELS),oe=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,E.width);for(let At=0,Ct=dt.length;At<Ct;At++){const Ht=dt[At],It=Math.floor(Ht.start/4),Nt=Math.ceil(Ht.count/4),ge=It%E.width,q=Math.floor(It/E.width),Pt=Nt,wt=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,ge),r.pixelStorei(r.UNPACK_SKIP_ROWS,q),i.texSubImage2D(r.TEXTURE_2D,0,ge,q,Pt,wt,j,_t,E.data)}B.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Lt),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Wt),r.pixelStorei(r.UNPACK_SKIP_ROWS,oe)}}function Y(B,E,j){let _t=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(_t=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(_t=r.TEXTURE_3D);const Et=ht(B,E),dt=E.source;i.bindTexture(_t,B.__webglTexture,r.TEXTURE0+j);const Kt=s.get(dt);if(dt.version!==Kt.__version||Et===!0){i.activeTexture(r.TEXTURE0+j);const Lt=De.getPrimaries(De.workingColorSpace),Wt=E.colorSpace===rs?null:De.getPrimaries(E.colorSpace),oe=E.colorSpace===rs||Lt===Wt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);let At=w(E.image,!1,l.maxTextureSize);At=ze(E,At);const Ct=c.convert(E.format,E.colorSpace),Ht=c.convert(E.type);let It=U(E.internalFormat,Ct,Ht,E.colorSpace,E.isVideoTexture);et(_t,E);let Nt;const ge=E.mipmaps,q=E.isVideoTexture!==!0,Pt=Kt.__version===void 0||Et===!0,wt=dt.dataReady,Ft=z(E,At);if(E.isDepthTexture)It=L(E.format===Fs,E.type),Pt&&(q?i.texStorage2D(r.TEXTURE_2D,1,It,At.width,At.height):i.texImage2D(r.TEXTURE_2D,0,It,At.width,At.height,0,Ct,Ht,null));else if(E.isDataTexture)if(ge.length>0){q&&Pt&&i.texStorage2D(r.TEXTURE_2D,Ft,It,ge[0].width,ge[0].height);for(let bt=0,yt=ge.length;bt<yt;bt++)Nt=ge[bt],q?wt&&i.texSubImage2D(r.TEXTURE_2D,bt,0,0,Nt.width,Nt.height,Ct,Ht,Nt.data):i.texImage2D(r.TEXTURE_2D,bt,It,Nt.width,Nt.height,0,Ct,Ht,Nt.data);E.generateMipmaps=!1}else q?(Pt&&i.texStorage2D(r.TEXTURE_2D,Ft,It,At.width,At.height),wt&&Tt(E,At,Ct,Ht)):i.texImage2D(r.TEXTURE_2D,0,It,At.width,At.height,0,Ct,Ht,At.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){q&&Pt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ft,It,ge[0].width,ge[0].height,At.depth);for(let bt=0,yt=ge.length;bt<yt;bt++)if(Nt=ge[bt],E.format!==zi)if(Ct!==null)if(q){if(wt)if(E.layerUpdates.size>0){const Ut=mv(Nt.width,Nt.height,E.format,E.type);for(const fe of E.layerUpdates){const Ie=Nt.data.subarray(fe*Ut/Nt.data.BYTES_PER_ELEMENT,(fe+1)*Ut/Nt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,bt,0,0,fe,Nt.width,Nt.height,1,Ct,Ie)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,bt,0,0,0,Nt.width,Nt.height,At.depth,Ct,Nt.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,bt,It,Nt.width,Nt.height,At.depth,0,Nt.data,0,0);else le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else q?wt&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,bt,0,0,0,Nt.width,Nt.height,At.depth,Ct,Ht,Nt.data):i.texImage3D(r.TEXTURE_2D_ARRAY,bt,It,Nt.width,Nt.height,At.depth,0,Ct,Ht,Nt.data)}else{q&&Pt&&i.texStorage2D(r.TEXTURE_2D,Ft,It,ge[0].width,ge[0].height);for(let bt=0,yt=ge.length;bt<yt;bt++)Nt=ge[bt],E.format!==zi?Ct!==null?q?wt&&i.compressedTexSubImage2D(r.TEXTURE_2D,bt,0,0,Nt.width,Nt.height,Ct,Nt.data):i.compressedTexImage2D(r.TEXTURE_2D,bt,It,Nt.width,Nt.height,0,Nt.data):le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):q?wt&&i.texSubImage2D(r.TEXTURE_2D,bt,0,0,Nt.width,Nt.height,Ct,Ht,Nt.data):i.texImage2D(r.TEXTURE_2D,bt,It,Nt.width,Nt.height,0,Ct,Ht,Nt.data)}else if(E.isDataArrayTexture)if(q){if(Pt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ft,It,At.width,At.height,At.depth),wt)if(E.layerUpdates.size>0){const bt=mv(At.width,At.height,E.format,E.type);for(const yt of E.layerUpdates){const Ut=At.data.subarray(yt*bt/At.data.BYTES_PER_ELEMENT,(yt+1)*bt/At.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,yt,At.width,At.height,1,Ct,Ht,Ut)}E.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,At.width,At.height,At.depth,Ct,Ht,At.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,It,At.width,At.height,At.depth,0,Ct,Ht,At.data);else if(E.isData3DTexture)q?(Pt&&i.texStorage3D(r.TEXTURE_3D,Ft,It,At.width,At.height,At.depth),wt&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,At.width,At.height,At.depth,Ct,Ht,At.data)):i.texImage3D(r.TEXTURE_3D,0,It,At.width,At.height,At.depth,0,Ct,Ht,At.data);else if(E.isFramebufferTexture){if(Pt)if(q)i.texStorage2D(r.TEXTURE_2D,Ft,It,At.width,At.height);else{let bt=At.width,yt=At.height;for(let Ut=0;Ut<Ft;Ut++)i.texImage2D(r.TEXTURE_2D,Ut,It,bt,yt,0,Ct,Ht,null),bt>>=1,yt>>=1}}else if(ge.length>0){if(q&&Pt){const bt=jt(ge[0]);i.texStorage2D(r.TEXTURE_2D,Ft,It,bt.width,bt.height)}for(let bt=0,yt=ge.length;bt<yt;bt++)Nt=ge[bt],q?wt&&i.texSubImage2D(r.TEXTURE_2D,bt,0,0,Ct,Ht,Nt):i.texImage2D(r.TEXTURE_2D,bt,It,Ct,Ht,Nt);E.generateMipmaps=!1}else if(q){if(Pt){const bt=jt(At);i.texStorage2D(r.TEXTURE_2D,Ft,It,bt.width,bt.height)}wt&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Ct,Ht,At)}else i.texImage2D(r.TEXTURE_2D,0,It,Ct,Ht,At);x(E)&&g(_t),Kt.__version=dt.version,E.onUpdate&&E.onUpdate(E)}B.__version=E.version}function $(B,E,j){if(E.image.length!==6)return;const _t=ht(B,E),Et=E.source;i.bindTexture(r.TEXTURE_CUBE_MAP,B.__webglTexture,r.TEXTURE0+j);const dt=s.get(Et);if(Et.version!==dt.__version||_t===!0){i.activeTexture(r.TEXTURE0+j);const Kt=De.getPrimaries(De.workingColorSpace),Lt=E.colorSpace===rs?null:De.getPrimaries(E.colorSpace),Wt=E.colorSpace===rs||Kt===Lt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);const oe=E.isCompressedTexture||E.image[0].isCompressedTexture,At=E.image[0]&&E.image[0].isDataTexture,Ct=[];for(let yt=0;yt<6;yt++)!oe&&!At?Ct[yt]=w(E.image[yt],!0,l.maxCubemapSize):Ct[yt]=At?E.image[yt].image:E.image[yt],Ct[yt]=ze(E,Ct[yt]);const Ht=Ct[0],It=c.convert(E.format,E.colorSpace),Nt=c.convert(E.type),ge=U(E.internalFormat,It,Nt,E.colorSpace),q=E.isVideoTexture!==!0,Pt=dt.__version===void 0||_t===!0,wt=Et.dataReady;let Ft=z(E,Ht);et(r.TEXTURE_CUBE_MAP,E);let bt;if(oe){q&&Pt&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Ft,ge,Ht.width,Ht.height);for(let yt=0;yt<6;yt++){bt=Ct[yt].mipmaps;for(let Ut=0;Ut<bt.length;Ut++){const fe=bt[Ut];E.format!==zi?It!==null?q?wt&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Ut,0,0,fe.width,fe.height,It,fe.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Ut,ge,fe.width,fe.height,0,fe.data):le("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?wt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Ut,0,0,fe.width,fe.height,It,Nt,fe.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Ut,ge,fe.width,fe.height,0,It,Nt,fe.data)}}}else{if(bt=E.mipmaps,q&&Pt){bt.length>0&&Ft++;const yt=jt(Ct[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Ft,ge,yt.width,yt.height)}for(let yt=0;yt<6;yt++)if(At){q?wt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,Ct[yt].width,Ct[yt].height,It,Nt,Ct[yt].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,ge,Ct[yt].width,Ct[yt].height,0,It,Nt,Ct[yt].data);for(let Ut=0;Ut<bt.length;Ut++){const Ie=bt[Ut].image[yt].image;q?wt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Ut+1,0,0,Ie.width,Ie.height,It,Nt,Ie.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Ut+1,ge,Ie.width,Ie.height,0,It,Nt,Ie.data)}}else{q?wt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,It,Nt,Ct[yt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,ge,It,Nt,Ct[yt]);for(let Ut=0;Ut<bt.length;Ut++){const fe=bt[Ut];q?wt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Ut+1,0,0,It,Nt,fe.image[yt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Ut+1,ge,It,Nt,fe.image[yt])}}}x(E)&&g(r.TEXTURE_CUBE_MAP),dt.__version=Et.version,E.onUpdate&&E.onUpdate(E)}B.__version=E.version}function Mt(B,E,j,_t,Et,dt){const Kt=c.convert(j.format,j.colorSpace),Lt=c.convert(j.type),Wt=U(j.internalFormat,Kt,Lt,j.colorSpace),oe=s.get(E),At=s.get(j);if(At.__renderTarget=E,!oe.__hasExternalTextures){const Ct=Math.max(1,E.width>>dt),Ht=Math.max(1,E.height>>dt);Et===r.TEXTURE_3D||Et===r.TEXTURE_2D_ARRAY?i.texImage3D(Et,dt,Wt,Ct,Ht,E.depth,0,Kt,Lt,null):i.texImage2D(Et,dt,Wt,Ct,Ht,0,Kt,Lt,null)}i.bindFramebuffer(r.FRAMEBUFFER,B),$e(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,_t,Et,At.__webglTexture,0,k(E)):(Et===r.TEXTURE_2D||Et>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Et<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,_t,Et,At.__webglTexture,dt),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Rt(B,E,j){if(r.bindRenderbuffer(r.RENDERBUFFER,B),E.depthBuffer){const _t=E.depthTexture,Et=_t&&_t.isDepthTexture?_t.type:null,dt=L(E.stencilBuffer,Et),Kt=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;$e(E)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,k(E),dt,E.width,E.height):j?r.renderbufferStorageMultisample(r.RENDERBUFFER,k(E),dt,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,dt,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Kt,r.RENDERBUFFER,B)}else{const _t=E.textures;for(let Et=0;Et<_t.length;Et++){const dt=_t[Et],Kt=c.convert(dt.format,dt.colorSpace),Lt=c.convert(dt.type),Wt=U(dt.internalFormat,Kt,Lt,dt.colorSpace);$e(E)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,k(E),Wt,E.width,E.height):j?r.renderbufferStorageMultisample(r.RENDERBUFFER,k(E),Wt,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,Wt,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Dt(B,E,j){const _t=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,B),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Et=s.get(E.depthTexture);if(Et.__renderTarget=E,(!Et.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),_t){if(Et.__webglInit===void 0&&(Et.__webglInit=!0,E.depthTexture.addEventListener("dispose",O)),Et.__webglTexture===void 0){Et.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,Et.__webglTexture),et(r.TEXTURE_CUBE_MAP,E.depthTexture);const oe=c.convert(E.depthTexture.format),At=c.convert(E.depthTexture.type);let Ct;E.depthTexture.format===Ta?Ct=r.DEPTH_COMPONENT24:E.depthTexture.format===Fs&&(Ct=r.DEPTH24_STENCIL8);for(let Ht=0;Ht<6;Ht++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ht,0,Ct,E.width,E.height,0,oe,At,null)}}else it(E.depthTexture,0);const dt=Et.__webglTexture,Kt=k(E),Lt=_t?r.TEXTURE_CUBE_MAP_POSITIVE_X+j:r.TEXTURE_2D,Wt=E.depthTexture.format===Fs?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(E.depthTexture.format===Ta)$e(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Wt,Lt,dt,0,Kt):r.framebufferTexture2D(r.FRAMEBUFFER,Wt,Lt,dt,0);else if(E.depthTexture.format===Fs)$e(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Wt,Lt,dt,0,Kt):r.framebufferTexture2D(r.FRAMEBUFFER,Wt,Lt,dt,0);else throw new Error("Unknown depthTexture format")}function Qt(B){const E=s.get(B),j=B.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==B.depthTexture){const _t=B.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),_t){const Et=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,_t.removeEventListener("dispose",Et)};_t.addEventListener("dispose",Et),E.__depthDisposeCallback=Et}E.__boundDepthTexture=_t}if(B.depthTexture&&!E.__autoAllocateDepthBuffer)if(j)for(let _t=0;_t<6;_t++)Dt(E.__webglFramebuffer[_t],B,_t);else{const _t=B.texture.mipmaps;_t&&_t.length>0?Dt(E.__webglFramebuffer[0],B,0):Dt(E.__webglFramebuffer,B,0)}else if(j){E.__webglDepthbuffer=[];for(let _t=0;_t<6;_t++)if(i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[_t]),E.__webglDepthbuffer[_t]===void 0)E.__webglDepthbuffer[_t]=r.createRenderbuffer(),Rt(E.__webglDepthbuffer[_t],B,!1);else{const Et=B.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,dt=E.__webglDepthbuffer[_t];r.bindRenderbuffer(r.RENDERBUFFER,dt),r.framebufferRenderbuffer(r.FRAMEBUFFER,Et,r.RENDERBUFFER,dt)}}else{const _t=B.texture.mipmaps;if(_t&&_t.length>0?i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),Rt(E.__webglDepthbuffer,B,!1);else{const Et=B.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,dt=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,dt),r.framebufferRenderbuffer(r.FRAMEBUFFER,Et,r.RENDERBUFFER,dt)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function me(B,E,j){const _t=s.get(B);E!==void 0&&Mt(_t.__webglFramebuffer,B,B.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),j!==void 0&&Qt(B)}function te(B){const E=B.texture,j=s.get(B),_t=s.get(E);B.addEventListener("dispose",D);const Et=B.textures,dt=B.isWebGLCubeRenderTarget===!0,Kt=Et.length>1;if(Kt||(_t.__webglTexture===void 0&&(_t.__webglTexture=r.createTexture()),_t.__version=E.version,h.memory.textures++),dt){j.__webglFramebuffer=[];for(let Lt=0;Lt<6;Lt++)if(E.mipmaps&&E.mipmaps.length>0){j.__webglFramebuffer[Lt]=[];for(let Wt=0;Wt<E.mipmaps.length;Wt++)j.__webglFramebuffer[Lt][Wt]=r.createFramebuffer()}else j.__webglFramebuffer[Lt]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){j.__webglFramebuffer=[];for(let Lt=0;Lt<E.mipmaps.length;Lt++)j.__webglFramebuffer[Lt]=r.createFramebuffer()}else j.__webglFramebuffer=r.createFramebuffer();if(Kt)for(let Lt=0,Wt=Et.length;Lt<Wt;Lt++){const oe=s.get(Et[Lt]);oe.__webglTexture===void 0&&(oe.__webglTexture=r.createTexture(),h.memory.textures++)}if(B.samples>0&&$e(B)===!1){j.__webglMultisampledFramebuffer=r.createFramebuffer(),j.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let Lt=0;Lt<Et.length;Lt++){const Wt=Et[Lt];j.__webglColorRenderbuffer[Lt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,j.__webglColorRenderbuffer[Lt]);const oe=c.convert(Wt.format,Wt.colorSpace),At=c.convert(Wt.type),Ct=U(Wt.internalFormat,oe,At,Wt.colorSpace,B.isXRRenderTarget===!0),Ht=k(B);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ht,Ct,B.width,B.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Lt,r.RENDERBUFFER,j.__webglColorRenderbuffer[Lt])}r.bindRenderbuffer(r.RENDERBUFFER,null),B.depthBuffer&&(j.__webglDepthRenderbuffer=r.createRenderbuffer(),Rt(j.__webglDepthRenderbuffer,B,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(dt){i.bindTexture(r.TEXTURE_CUBE_MAP,_t.__webglTexture),et(r.TEXTURE_CUBE_MAP,E);for(let Lt=0;Lt<6;Lt++)if(E.mipmaps&&E.mipmaps.length>0)for(let Wt=0;Wt<E.mipmaps.length;Wt++)Mt(j.__webglFramebuffer[Lt][Wt],B,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,Wt);else Mt(j.__webglFramebuffer[Lt],B,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,0);x(E)&&g(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Kt){for(let Lt=0,Wt=Et.length;Lt<Wt;Lt++){const oe=Et[Lt],At=s.get(oe);let Ct=r.TEXTURE_2D;(B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(Ct=B.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Ct,At.__webglTexture),et(Ct,oe),Mt(j.__webglFramebuffer,B,oe,r.COLOR_ATTACHMENT0+Lt,Ct,0),x(oe)&&g(Ct)}i.unbindTexture()}else{let Lt=r.TEXTURE_2D;if((B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(Lt=B.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Lt,_t.__webglTexture),et(Lt,E),E.mipmaps&&E.mipmaps.length>0)for(let Wt=0;Wt<E.mipmaps.length;Wt++)Mt(j.__webglFramebuffer[Wt],B,E,r.COLOR_ATTACHMENT0,Lt,Wt);else Mt(j.__webglFramebuffer,B,E,r.COLOR_ATTACHMENT0,Lt,0);x(E)&&g(Lt),i.unbindTexture()}B.depthBuffer&&Qt(B)}function ce(B){const E=B.textures;for(let j=0,_t=E.length;j<_t;j++){const Et=E[j];if(x(Et)){const dt=P(B),Kt=s.get(Et).__webglTexture;i.bindTexture(dt,Kt),g(dt),i.unbindTexture()}}}const ue=[],re=[];function Ke(B){if(B.samples>0){if($e(B)===!1){const E=B.textures,j=B.width,_t=B.height;let Et=r.COLOR_BUFFER_BIT;const dt=B.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Kt=s.get(B),Lt=E.length>1;if(Lt)for(let oe=0;oe<E.length;oe++)i.bindFramebuffer(r.FRAMEBUFFER,Kt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+oe,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Kt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+oe,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Kt.__webglMultisampledFramebuffer);const Wt=B.texture.mipmaps;Wt&&Wt.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Kt.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Kt.__webglFramebuffer);for(let oe=0;oe<E.length;oe++){if(B.resolveDepthBuffer&&(B.depthBuffer&&(Et|=r.DEPTH_BUFFER_BIT),B.stencilBuffer&&B.resolveStencilBuffer&&(Et|=r.STENCIL_BUFFER_BIT)),Lt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Kt.__webglColorRenderbuffer[oe]);const At=s.get(E[oe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,At,0)}r.blitFramebuffer(0,0,j,_t,0,0,j,_t,Et,r.NEAREST),m===!0&&(ue.length=0,re.length=0,ue.push(r.COLOR_ATTACHMENT0+oe),B.depthBuffer&&B.resolveDepthBuffer===!1&&(ue.push(dt),re.push(dt),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,re)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ue))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Lt)for(let oe=0;oe<E.length;oe++){i.bindFramebuffer(r.FRAMEBUFFER,Kt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+oe,r.RENDERBUFFER,Kt.__webglColorRenderbuffer[oe]);const At=s.get(E[oe]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Kt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+oe,r.TEXTURE_2D,At,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Kt.__webglMultisampledFramebuffer)}else if(B.depthBuffer&&B.resolveDepthBuffer===!1&&m){const E=B.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function k(B){return Math.min(l.maxSamples,B.samples)}function $e(B){const E=s.get(B);return B.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ae(B){const E=h.render.frame;v.get(B)!==E&&(v.set(B,E),B.update())}function ze(B,E){const j=B.colorSpace,_t=B.format,Et=B.type;return B.isCompressedTexture===!0||B.isVideoTexture===!0||j!==io&&j!==rs&&(De.getTransfer(j)===Ve?(_t!==zi||Et!==ui)&&le("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Re("WebGLTextures: Unsupported texture color space:",j)),E}function jt(B){return typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement?(p.width=B.naturalWidth||B.width,p.height=B.naturalHeight||B.height):typeof VideoFrame<"u"&&B instanceof VideoFrame?(p.width=B.displayWidth,p.height=B.displayHeight):(p.width=B.width,p.height=B.height),p}this.allocateTextureUnit=tt,this.resetTextureUnits=Q,this.setTexture2D=it,this.setTexture2DArray=I,this.setTexture3D=F,this.setTextureCube=J,this.rebindTextures=me,this.setupRenderTarget=te,this.updateRenderTargetMipmap=ce,this.updateMultisampleRenderTarget=Ke,this.setupDepthRenderbuffer=Qt,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=$e,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function TR(r,t){function i(s,l=rs){let c;const h=De.getTransfer(l);if(s===ui)return r.UNSIGNED_BYTE;if(s===Cp)return r.UNSIGNED_SHORT_4_4_4_4;if(s===wp)return r.UNSIGNED_SHORT_5_5_5_1;if(s===ux)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===fx)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===lx)return r.BYTE;if(s===cx)return r.SHORT;if(s===Sl)return r.UNSIGNED_SHORT;if(s===Rp)return r.INT;if(s===Zi)return r.UNSIGNED_INT;if(s===Pi)return r.FLOAT;if(s===ba)return r.HALF_FLOAT;if(s===hx)return r.ALPHA;if(s===dx)return r.RGB;if(s===zi)return r.RGBA;if(s===Ta)return r.DEPTH_COMPONENT;if(s===Fs)return r.DEPTH_STENCIL;if(s===Dp)return r.RED;if(s===Up)return r.RED_INTEGER;if(s===no)return r.RG;if(s===Lp)return r.RG_INTEGER;if(s===Np)return r.RGBA_INTEGER;if(s===pu||s===mu||s===gu||s===_u)if(h===Ve)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===pu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===mu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===gu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===_u)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===pu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===mu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===gu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===_u)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Gd||s===Vd||s===kd||s===Xd)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Gd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Vd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===kd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Xd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Wd||s===qd||s===Yd||s===jd||s===Zd||s===Kd||s===Qd)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Wd||s===qd)return h===Ve?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Yd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===jd)return c.COMPRESSED_R11_EAC;if(s===Zd)return c.COMPRESSED_SIGNED_R11_EAC;if(s===Kd)return c.COMPRESSED_RG11_EAC;if(s===Qd)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Jd||s===$d||s===tp||s===ep||s===np||s===ip||s===ap||s===sp||s===rp||s===op||s===lp||s===cp||s===up||s===fp)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Jd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===$d)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===tp)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===ep)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===np)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===ip)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ap)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===sp)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===rp)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===op)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===lp)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===cp)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===up)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===fp)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===hp||s===dp||s===pp)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===hp)return h===Ve?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===dp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===pp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===mp||s===gp||s===_p||s===vp)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===mp)return c.COMPRESSED_RED_RGTC1_EXT;if(s===gp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===_p)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===vp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===yl?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const AR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,RR=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class CR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new Cx(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new Ki({vertexShader:AR,fragmentShader:RR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new $n(new Gs(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class wR extends Vs{constructor(t,i){super();const s=this;let l=null,c=1,h=null,d="local-floor",m=1,p=null,v=null,_=null,M=null,y=null,T=null;const w=typeof XRWebGLBinding<"u",x=new CR,g={},P=i.getContextAttributes();let U=null,L=null;const z=[],O=[],D=new se;let V=null;const b=new ci;b.viewport=new sn;const A=new ci;A.viewport=new sn;const H=[b,A],Q=new BE;let tt=null,lt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let $=z[Y];return $===void 0&&($=new md,z[Y]=$),$.getTargetRaySpace()},this.getControllerGrip=function(Y){let $=z[Y];return $===void 0&&($=new md,z[Y]=$),$.getGripSpace()},this.getHand=function(Y){let $=z[Y];return $===void 0&&($=new md,z[Y]=$),$.getHandSpace()};function it(Y){const $=O.indexOf(Y.inputSource);if($===-1)return;const Mt=z[$];Mt!==void 0&&(Mt.update(Y.inputSource,Y.frame,p||h),Mt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function I(){l.removeEventListener("select",it),l.removeEventListener("selectstart",it),l.removeEventListener("selectend",it),l.removeEventListener("squeeze",it),l.removeEventListener("squeezestart",it),l.removeEventListener("squeezeend",it),l.removeEventListener("end",I),l.removeEventListener("inputsourceschange",F);for(let Y=0;Y<z.length;Y++){const $=O[Y];$!==null&&(O[Y]=null,z[Y].disconnect($))}tt=null,lt=null,x.reset();for(const Y in g)delete g[Y];t.setRenderTarget(U),y=null,M=null,_=null,l=null,L=null,Tt.stop(),s.isPresenting=!1,t.setPixelRatio(V),t.setSize(D.width,D.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){c=Y,s.isPresenting===!0&&le("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){d=Y,s.isPresenting===!0&&le("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(Y){p=Y},this.getBaseLayer=function(){return M!==null?M:y},this.getBinding=function(){return _===null&&w&&(_=new XRWebGLBinding(l,i)),_},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(Y){if(l=Y,l!==null){if(U=t.getRenderTarget(),l.addEventListener("select",it),l.addEventListener("selectstart",it),l.addEventListener("selectend",it),l.addEventListener("squeeze",it),l.addEventListener("squeezestart",it),l.addEventListener("squeezeend",it),l.addEventListener("end",I),l.addEventListener("inputsourceschange",F),P.xrCompatible!==!0&&await i.makeXRCompatible(),V=t.getPixelRatio(),t.getSize(D),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let Mt=null,Rt=null,Dt=null;P.depth&&(Dt=P.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Mt=P.stencil?Fs:Ta,Rt=P.stencil?yl:Zi);const Qt={colorFormat:i.RGBA8,depthFormat:Dt,scaleFactor:c};_=this.getBinding(),M=_.createProjectionLayer(Qt),l.updateRenderState({layers:[M]}),t.setPixelRatio(1),t.setSize(M.textureWidth,M.textureHeight,!1),L=new ji(M.textureWidth,M.textureHeight,{format:zi,type:ui,depthTexture:new Tl(M.textureWidth,M.textureHeight,Rt,void 0,void 0,void 0,void 0,void 0,void 0,Mt),stencilBuffer:P.stencil,colorSpace:t.outputColorSpace,samples:P.antialias?4:0,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}else{const Mt={antialias:P.antialias,alpha:!0,depth:P.depth,stencil:P.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,i,Mt),l.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),L=new ji(y.framebufferWidth,y.framebufferHeight,{format:zi,type:ui,colorSpace:t.outputColorSpace,stencilBuffer:P.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),Tt.setContext(l),Tt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function F(Y){for(let $=0;$<Y.removed.length;$++){const Mt=Y.removed[$],Rt=O.indexOf(Mt);Rt>=0&&(O[Rt]=null,z[Rt].disconnect(Mt))}for(let $=0;$<Y.added.length;$++){const Mt=Y.added[$];let Rt=O.indexOf(Mt);if(Rt===-1){for(let Qt=0;Qt<z.length;Qt++)if(Qt>=O.length){O.push(Mt),Rt=Qt;break}else if(O[Qt]===null){O[Qt]=Mt,Rt=Qt;break}if(Rt===-1)break}const Dt=z[Rt];Dt&&Dt.connect(Mt)}}const J=new W,mt=new W;function pt(Y,$,Mt){J.setFromMatrixPosition($.matrixWorld),mt.setFromMatrixPosition(Mt.matrixWorld);const Rt=J.distanceTo(mt),Dt=$.projectionMatrix.elements,Qt=Mt.projectionMatrix.elements,me=Dt[14]/(Dt[10]-1),te=Dt[14]/(Dt[10]+1),ce=(Dt[9]+1)/Dt[5],ue=(Dt[9]-1)/Dt[5],re=(Dt[8]-1)/Dt[0],Ke=(Qt[8]+1)/Qt[0],k=me*re,$e=me*Ke,Ae=Rt/(-re+Ke),ze=Ae*-re;if($.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(ze),Y.translateZ(Ae),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Dt[10]===-1)Y.projectionMatrix.copy($.projectionMatrix),Y.projectionMatrixInverse.copy($.projectionMatrixInverse);else{const jt=me+Ae,B=te+Ae,E=k-ze,j=$e+(Rt-ze),_t=ce*te/B*jt,Et=ue*te/B*jt;Y.projectionMatrix.makePerspective(E,j,_t,Et,jt,B),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function N(Y,$){$===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices($.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(l===null)return;let $=Y.near,Mt=Y.far;x.texture!==null&&(x.depthNear>0&&($=x.depthNear),x.depthFar>0&&(Mt=x.depthFar)),Q.near=A.near=b.near=$,Q.far=A.far=b.far=Mt,(tt!==Q.near||lt!==Q.far)&&(l.updateRenderState({depthNear:Q.near,depthFar:Q.far}),tt=Q.near,lt=Q.far),Q.layers.mask=Y.layers.mask|6,b.layers.mask=Q.layers.mask&3,A.layers.mask=Q.layers.mask&5;const Rt=Y.parent,Dt=Q.cameras;N(Q,Rt);for(let Qt=0;Qt<Dt.length;Qt++)N(Dt[Qt],Rt);Dt.length===2?pt(Q,b,A):Q.projectionMatrix.copy(b.projectionMatrix),et(Y,Q,Rt)};function et(Y,$,Mt){Mt===null?Y.matrix.copy($.matrixWorld):(Y.matrix.copy(Mt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply($.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy($.projectionMatrix),Y.projectionMatrixInverse.copy($.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Sp*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return Q},this.getFoveation=function(){if(!(M===null&&y===null))return m},this.setFoveation=function(Y){m=Y,M!==null&&(M.fixedFoveation=Y),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=Y)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(Q)},this.getCameraTexture=function(Y){return g[Y]};let ht=null;function xt(Y,$){if(v=$.getViewerPose(p||h),T=$,v!==null){const Mt=v.views;y!==null&&(t.setRenderTargetFramebuffer(L,y.framebuffer),t.setRenderTarget(L));let Rt=!1;Mt.length!==Q.cameras.length&&(Q.cameras.length=0,Rt=!0);for(let te=0;te<Mt.length;te++){const ce=Mt[te];let ue=null;if(y!==null)ue=y.getViewport(ce);else{const Ke=_.getViewSubImage(M,ce);ue=Ke.viewport,te===0&&(t.setRenderTargetTextures(L,Ke.colorTexture,Ke.depthStencilTexture),t.setRenderTarget(L))}let re=H[te];re===void 0&&(re=new ci,re.layers.enable(te),re.viewport=new sn,H[te]=re),re.matrix.fromArray(ce.transform.matrix),re.matrix.decompose(re.position,re.quaternion,re.scale),re.projectionMatrix.fromArray(ce.projectionMatrix),re.projectionMatrixInverse.copy(re.projectionMatrix).invert(),re.viewport.set(ue.x,ue.y,ue.width,ue.height),te===0&&(Q.matrix.copy(re.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale)),Rt===!0&&Q.cameras.push(re)}const Dt=l.enabledFeatures;if(Dt&&Dt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&w){_=s.getBinding();const te=_.getDepthInformation(Mt[0]);te&&te.isValid&&te.texture&&x.init(te,l.renderState)}if(Dt&&Dt.includes("camera-access")&&w){t.state.unbindTexture(),_=s.getBinding();for(let te=0;te<Mt.length;te++){const ce=Mt[te].camera;if(ce){let ue=g[ce];ue||(ue=new Cx,g[ce]=ue);const re=_.getCameraImage(ce);ue.sourceTexture=re}}}}for(let Mt=0;Mt<z.length;Mt++){const Rt=O[Mt],Dt=z[Mt];Rt!==null&&Dt!==void 0&&Dt.update(Rt,$,p||h)}ht&&ht(Y,$),$.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:$}),T=null}const Tt=new Ox;Tt.setAnimationLoop(xt),this.setAnimationLoop=function(Y){ht=Y},this.dispose=function(){}}}const Os=new Bi,DR=new Ce;function UR(r,t){function i(x,g){x.matrixAutoUpdate===!0&&x.updateMatrix(),g.value.copy(x.matrix)}function s(x,g){g.color.getRGB(x.fogColor.value,Sx(r)),g.isFog?(x.fogNear.value=g.near,x.fogFar.value=g.far):g.isFogExp2&&(x.fogDensity.value=g.density)}function l(x,g,P,U,L){g.isMeshBasicMaterial||g.isMeshLambertMaterial?c(x,g):g.isMeshToonMaterial?(c(x,g),_(x,g)):g.isMeshPhongMaterial?(c(x,g),v(x,g)):g.isMeshStandardMaterial?(c(x,g),M(x,g),g.isMeshPhysicalMaterial&&y(x,g,L)):g.isMeshMatcapMaterial?(c(x,g),T(x,g)):g.isMeshDepthMaterial?c(x,g):g.isMeshDistanceMaterial?(c(x,g),w(x,g)):g.isMeshNormalMaterial?c(x,g):g.isLineBasicMaterial?(h(x,g),g.isLineDashedMaterial&&d(x,g)):g.isPointsMaterial?m(x,g,P,U):g.isSpriteMaterial?p(x,g):g.isShadowMaterial?(x.color.value.copy(g.color),x.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function c(x,g){x.opacity.value=g.opacity,g.color&&x.diffuse.value.copy(g.color),g.emissive&&x.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(x.map.value=g.map,i(g.map,x.mapTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,i(g.alphaMap,x.alphaMapTransform)),g.bumpMap&&(x.bumpMap.value=g.bumpMap,i(g.bumpMap,x.bumpMapTransform),x.bumpScale.value=g.bumpScale,g.side===Jn&&(x.bumpScale.value*=-1)),g.normalMap&&(x.normalMap.value=g.normalMap,i(g.normalMap,x.normalMapTransform),x.normalScale.value.copy(g.normalScale),g.side===Jn&&x.normalScale.value.negate()),g.displacementMap&&(x.displacementMap.value=g.displacementMap,i(g.displacementMap,x.displacementMapTransform),x.displacementScale.value=g.displacementScale,x.displacementBias.value=g.displacementBias),g.emissiveMap&&(x.emissiveMap.value=g.emissiveMap,i(g.emissiveMap,x.emissiveMapTransform)),g.specularMap&&(x.specularMap.value=g.specularMap,i(g.specularMap,x.specularMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest);const P=t.get(g),U=P.envMap,L=P.envMapRotation;U&&(x.envMap.value=U,Os.copy(L),Os.x*=-1,Os.y*=-1,Os.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(Os.y*=-1,Os.z*=-1),x.envMapRotation.value.setFromMatrix4(DR.makeRotationFromEuler(Os)),x.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=g.reflectivity,x.ior.value=g.ior,x.refractionRatio.value=g.refractionRatio),g.lightMap&&(x.lightMap.value=g.lightMap,x.lightMapIntensity.value=g.lightMapIntensity,i(g.lightMap,x.lightMapTransform)),g.aoMap&&(x.aoMap.value=g.aoMap,x.aoMapIntensity.value=g.aoMapIntensity,i(g.aoMap,x.aoMapTransform))}function h(x,g){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,g.map&&(x.map.value=g.map,i(g.map,x.mapTransform))}function d(x,g){x.dashSize.value=g.dashSize,x.totalSize.value=g.dashSize+g.gapSize,x.scale.value=g.scale}function m(x,g,P,U){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,x.size.value=g.size*P,x.scale.value=U*.5,g.map&&(x.map.value=g.map,i(g.map,x.uvTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,i(g.alphaMap,x.alphaMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest)}function p(x,g){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,x.rotation.value=g.rotation,g.map&&(x.map.value=g.map,i(g.map,x.mapTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,i(g.alphaMap,x.alphaMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest)}function v(x,g){x.specular.value.copy(g.specular),x.shininess.value=Math.max(g.shininess,1e-4)}function _(x,g){g.gradientMap&&(x.gradientMap.value=g.gradientMap)}function M(x,g){x.metalness.value=g.metalness,g.metalnessMap&&(x.metalnessMap.value=g.metalnessMap,i(g.metalnessMap,x.metalnessMapTransform)),x.roughness.value=g.roughness,g.roughnessMap&&(x.roughnessMap.value=g.roughnessMap,i(g.roughnessMap,x.roughnessMapTransform)),g.envMap&&(x.envMapIntensity.value=g.envMapIntensity)}function y(x,g,P){x.ior.value=g.ior,g.sheen>0&&(x.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),x.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(x.sheenColorMap.value=g.sheenColorMap,i(g.sheenColorMap,x.sheenColorMapTransform)),g.sheenRoughnessMap&&(x.sheenRoughnessMap.value=g.sheenRoughnessMap,i(g.sheenRoughnessMap,x.sheenRoughnessMapTransform))),g.clearcoat>0&&(x.clearcoat.value=g.clearcoat,x.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(x.clearcoatMap.value=g.clearcoatMap,i(g.clearcoatMap,x.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,i(g.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(x.clearcoatNormalMap.value=g.clearcoatNormalMap,i(g.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Jn&&x.clearcoatNormalScale.value.negate())),g.dispersion>0&&(x.dispersion.value=g.dispersion),g.iridescence>0&&(x.iridescence.value=g.iridescence,x.iridescenceIOR.value=g.iridescenceIOR,x.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(x.iridescenceMap.value=g.iridescenceMap,i(g.iridescenceMap,x.iridescenceMapTransform)),g.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=g.iridescenceThicknessMap,i(g.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),g.transmission>0&&(x.transmission.value=g.transmission,x.transmissionSamplerMap.value=P.texture,x.transmissionSamplerSize.value.set(P.width,P.height),g.transmissionMap&&(x.transmissionMap.value=g.transmissionMap,i(g.transmissionMap,x.transmissionMapTransform)),x.thickness.value=g.thickness,g.thicknessMap&&(x.thicknessMap.value=g.thicknessMap,i(g.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=g.attenuationDistance,x.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(x.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(x.anisotropyMap.value=g.anisotropyMap,i(g.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=g.specularIntensity,x.specularColor.value.copy(g.specularColor),g.specularColorMap&&(x.specularColorMap.value=g.specularColorMap,i(g.specularColorMap,x.specularColorMapTransform)),g.specularIntensityMap&&(x.specularIntensityMap.value=g.specularIntensityMap,i(g.specularIntensityMap,x.specularIntensityMapTransform))}function T(x,g){g.matcap&&(x.matcap.value=g.matcap)}function w(x,g){const P=t.get(g).light;x.referencePosition.value.setFromMatrixPosition(P.matrixWorld),x.nearDistance.value=P.shadow.camera.near,x.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function LR(r,t,i,s){let l={},c={},h=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(P,U){const L=U.program;s.uniformBlockBinding(P,L)}function p(P,U){let L=l[P.id];L===void 0&&(T(P),L=v(P),l[P.id]=L,P.addEventListener("dispose",x));const z=U.program;s.updateUBOMapping(P,z);const O=t.render.frame;c[P.id]!==O&&(M(P),c[P.id]=O)}function v(P){const U=_();P.__bindingPointIndex=U;const L=r.createBuffer(),z=P.__size,O=P.usage;return r.bindBuffer(r.UNIFORM_BUFFER,L),r.bufferData(r.UNIFORM_BUFFER,z,O),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,U,L),L}function _(){for(let P=0;P<d;P++)if(h.indexOf(P)===-1)return h.push(P),P;return Re("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function M(P){const U=l[P.id],L=P.uniforms,z=P.__cache;r.bindBuffer(r.UNIFORM_BUFFER,U);for(let O=0,D=L.length;O<D;O++){const V=Array.isArray(L[O])?L[O]:[L[O]];for(let b=0,A=V.length;b<A;b++){const H=V[b];if(y(H,O,b,z)===!0){const Q=H.__offset,tt=Array.isArray(H.value)?H.value:[H.value];let lt=0;for(let it=0;it<tt.length;it++){const I=tt[it],F=w(I);typeof I=="number"||typeof I=="boolean"?(H.__data[0]=I,r.bufferSubData(r.UNIFORM_BUFFER,Q+lt,H.__data)):I.isMatrix3?(H.__data[0]=I.elements[0],H.__data[1]=I.elements[1],H.__data[2]=I.elements[2],H.__data[3]=0,H.__data[4]=I.elements[3],H.__data[5]=I.elements[4],H.__data[6]=I.elements[5],H.__data[7]=0,H.__data[8]=I.elements[6],H.__data[9]=I.elements[7],H.__data[10]=I.elements[8],H.__data[11]=0):(I.toArray(H.__data,lt),lt+=F.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,Q,H.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function y(P,U,L,z){const O=P.value,D=U+"_"+L;if(z[D]===void 0)return typeof O=="number"||typeof O=="boolean"?z[D]=O:z[D]=O.clone(),!0;{const V=z[D];if(typeof O=="number"||typeof O=="boolean"){if(V!==O)return z[D]=O,!0}else if(V.equals(O)===!1)return V.copy(O),!0}return!1}function T(P){const U=P.uniforms;let L=0;const z=16;for(let D=0,V=U.length;D<V;D++){const b=Array.isArray(U[D])?U[D]:[U[D]];for(let A=0,H=b.length;A<H;A++){const Q=b[A],tt=Array.isArray(Q.value)?Q.value:[Q.value];for(let lt=0,it=tt.length;lt<it;lt++){const I=tt[lt],F=w(I),J=L%z,mt=J%F.boundary,pt=J+mt;L+=mt,pt!==0&&z-pt<F.storage&&(L+=z-pt),Q.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=L,L+=F.storage}}}const O=L%z;return O>0&&(L+=z-O),P.__size=L,P.__cache={},this}function w(P){const U={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(U.boundary=4,U.storage=4):P.isVector2?(U.boundary=8,U.storage=8):P.isVector3||P.isColor?(U.boundary=16,U.storage=12):P.isVector4?(U.boundary=16,U.storage=16):P.isMatrix3?(U.boundary=48,U.storage=48):P.isMatrix4?(U.boundary=64,U.storage=64):P.isTexture?le("WebGLRenderer: Texture samplers can not be part of an uniforms group."):le("WebGLRenderer: Unsupported uniform value type.",P),U}function x(P){const U=P.target;U.removeEventListener("dispose",x);const L=h.indexOf(U.__bindingPointIndex);h.splice(L,1),r.deleteBuffer(l[U.id]),delete l[U.id],delete c[U.id]}function g(){for(const P in l)r.deleteBuffer(l[P]);h=[],l={},c={}}return{bind:m,update:p,dispose:g}}const NR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ki=null;function OR(){return ki===null&&(ki=new Ax(NR,16,16,no,ba),ki.name="DFG_LUT",ki.minFilter=In,ki.magFilter=In,ki.wrapS=ya,ki.wrapT=ya,ki.generateMipmaps=!1,ki.needsUpdate=!0),ki}class Fx{constructor(t={}){const{canvas:i=jM(),context:s=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:M=!1,outputBufferType:y=ui}=t;this.isWebGLRenderer=!0;let T;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=s.getContextAttributes().alpha}else T=h;const w=y,x=new Set([Np,Lp,Up]),g=new Set([ui,Zi,Sl,yl,Cp,wp]),P=new Uint32Array(4),U=new Int32Array(4);let L=null,z=null;const O=[],D=[];let V=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Yi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let A=!1;this._outputColorSpace=Mi;let H=0,Q=0,tt=null,lt=-1,it=null;const I=new sn,F=new sn;let J=null;const mt=new ne(0);let pt=0,N=i.width,et=i.height,ht=1,xt=null,Tt=null;const Y=new sn(0,0,N,et),$=new sn(0,0,N,et);let Mt=!1;const Rt=new Ip;let Dt=!1,Qt=!1;const me=new Ce,te=new W,ce=new sn,ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let re=!1;function Ke(){return tt===null?ht:1}let k=s;function $e(C,Z){return i.getContext(C,Z)}try{const C={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Ap}`),i.addEventListener("webglcontextlost",fe,!1),i.addEventListener("webglcontextrestored",Ie,!1),i.addEventListener("webglcontextcreationerror",we,!1),k===null){const Z="webgl2";if(k=$e(Z,C),k===null)throw $e(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw Re("WebGLRenderer: "+C.message),C}let Ae,ze,jt,B,E,j,_t,Et,dt,Kt,Lt,Wt,oe,At,Ct,Ht,It,Nt,ge,q,Pt,wt,Ft,bt;function yt(){Ae=new O1(k),Ae.init(),wt=new TR(k,Ae),ze=new T1(k,Ae,t,wt),jt=new ER(k,Ae),ze.reversedDepthBuffer&&M&&jt.buffers.depth.setReversed(!0),B=new B1(k),E=new lR,j=new bR(k,Ae,jt,E,ze,wt,B),_t=new R1(b),Et=new N1(b),dt=new GE(k),Ft=new E1(k,dt),Kt=new P1(k,dt,B,Ft),Lt=new F1(k,Kt,dt,B),ge=new I1(k,ze,j),Ht=new A1(E),Wt=new oR(b,_t,Et,Ae,ze,Ft,Ht),oe=new UR(b,E),At=new uR,Ct=new gR(Ae),Nt=new M1(b,_t,Et,jt,Lt,T,m),It=new yR(b,Lt,ze),bt=new LR(k,B,ze,jt),q=new b1(k,Ae,B),Pt=new z1(k,Ae,B),B.programs=Wt.programs,b.capabilities=ze,b.extensions=Ae,b.properties=E,b.renderLists=At,b.shadowMap=It,b.state=jt,b.info=B}yt(),w!==ui&&(V=new G1(w,i.width,i.height,l,c));const Ut=new wR(b,k);this.xr=Ut,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const C=Ae.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Ae.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return ht},this.setPixelRatio=function(C){C!==void 0&&(ht=C,this.setSize(N,et,!1))},this.getSize=function(C){return C.set(N,et)},this.setSize=function(C,Z,ct=!0){if(Ut.isPresenting){le("WebGLRenderer: Can't change size while VR device is presenting.");return}N=C,et=Z,i.width=Math.floor(C*ht),i.height=Math.floor(Z*ht),ct===!0&&(i.style.width=C+"px",i.style.height=Z+"px"),V!==null&&V.setSize(i.width,i.height),this.setViewport(0,0,C,Z)},this.getDrawingBufferSize=function(C){return C.set(N*ht,et*ht).floor()},this.setDrawingBufferSize=function(C,Z,ct){N=C,et=Z,ht=ct,i.width=Math.floor(C*ct),i.height=Math.floor(Z*ct),this.setViewport(0,0,C,Z)},this.setEffects=function(C){if(w===ui){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let Z=0;Z<C.length;Z++)if(C[Z].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}V.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(I)},this.getViewport=function(C){return C.copy(Y)},this.setViewport=function(C,Z,ct,rt){C.isVector4?Y.set(C.x,C.y,C.z,C.w):Y.set(C,Z,ct,rt),jt.viewport(I.copy(Y).multiplyScalar(ht).round())},this.getScissor=function(C){return C.copy($)},this.setScissor=function(C,Z,ct,rt){C.isVector4?$.set(C.x,C.y,C.z,C.w):$.set(C,Z,ct,rt),jt.scissor(F.copy($).multiplyScalar(ht).round())},this.getScissorTest=function(){return Mt},this.setScissorTest=function(C){jt.setScissorTest(Mt=C)},this.setOpaqueSort=function(C){xt=C},this.setTransparentSort=function(C){Tt=C},this.getClearColor=function(C){return C.copy(Nt.getClearColor())},this.setClearColor=function(){Nt.setClearColor(...arguments)},this.getClearAlpha=function(){return Nt.getClearAlpha()},this.setClearAlpha=function(){Nt.setClearAlpha(...arguments)},this.clear=function(C=!0,Z=!0,ct=!0){let rt=0;if(C){let nt=!1;if(tt!==null){const Ot=tt.texture.format;nt=x.has(Ot)}if(nt){const Ot=tt.texture.type,Vt=g.has(Ot),zt=Nt.getClearColor(),kt=Nt.getClearAlpha(),qt=zt.r,ee=zt.g,Yt=zt.b;Vt?(P[0]=qt,P[1]=ee,P[2]=Yt,P[3]=kt,k.clearBufferuiv(k.COLOR,0,P)):(U[0]=qt,U[1]=ee,U[2]=Yt,U[3]=kt,k.clearBufferiv(k.COLOR,0,U))}else rt|=k.COLOR_BUFFER_BIT}Z&&(rt|=k.DEPTH_BUFFER_BIT),ct&&(rt|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(rt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",fe,!1),i.removeEventListener("webglcontextrestored",Ie,!1),i.removeEventListener("webglcontextcreationerror",we,!1),Nt.dispose(),At.dispose(),Ct.dispose(),E.dispose(),_t.dispose(),Et.dispose(),Lt.dispose(),Ft.dispose(),bt.dispose(),Wt.dispose(),Ut.dispose(),Ut.removeEventListener("sessionstart",qs),Ut.removeEventListener("sessionend",co),Ii.stop()};function fe(C){C.preventDefault(),bu("WebGLRenderer: Context Lost."),A=!0}function Ie(){bu("WebGLRenderer: Context Restored."),A=!1;const C=B.autoReset,Z=It.enabled,ct=It.autoUpdate,rt=It.needsUpdate,nt=It.type;yt(),B.autoReset=C,It.enabled=Z,It.autoUpdate=ct,It.needsUpdate=rt,It.type=nt}function we(C){Re("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function On(C){const Z=C.target;Z.removeEventListener("dispose",On),Ti(Z)}function Ti(C){Al(C),E.remove(C)}function Al(C){const Z=E.get(C).programs;Z!==void 0&&(Z.forEach(function(ct){Wt.releaseProgram(ct)}),C.isShaderMaterial&&Wt.releaseShaderCache(C))}this.renderBufferDirect=function(C,Z,ct,rt,nt,Ot){Z===null&&(Z=ue);const Vt=nt.isMesh&&nt.matrixWorld.determinant()<0,zt=fs(C,Z,ct,rt,nt);jt.setMaterial(rt,Vt);let kt=ct.index,qt=1;if(rt.wireframe===!0){if(kt=Kt.getWireframeAttribute(ct),kt===void 0)return;qt=2}const ee=ct.drawRange,Yt=ct.attributes.position;let ie=ee.start*qt,Ne=(ee.start+ee.count)*qt;Ot!==null&&(ie=Math.max(ie,Ot.start*qt),Ne=Math.min(Ne,(Ot.start+Ot.count)*qt)),kt!==null?(ie=Math.max(ie,0),Ne=Math.min(Ne,kt.count)):Yt!=null&&(ie=Math.max(ie,0),Ne=Math.min(Ne,Yt.count));const tn=Ne-ie;if(tn<0||tn===1/0)return;Ft.setup(nt,rt,zt,ct,kt);let Ze,Be=q;if(kt!==null&&(Ze=dt.get(kt),Be=Pt,Be.setIndex(Ze)),nt.isMesh)rt.wireframe===!0?(jt.setLineWidth(rt.wireframeLinewidth*Ke()),Be.setMode(k.LINES)):Be.setMode(k.TRIANGLES);else if(nt.isLine){let Jt=rt.linewidth;Jt===void 0&&(Jt=1),jt.setLineWidth(Jt*Ke()),nt.isLineSegments?Be.setMode(k.LINES):nt.isLineLoop?Be.setMode(k.LINE_LOOP):Be.setMode(k.LINE_STRIP)}else nt.isPoints?Be.setMode(k.POINTS):nt.isSprite&&Be.setMode(k.TRIANGLES);if(nt.isBatchedMesh)if(nt._multiDrawInstances!==null)Ml("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Be.renderMultiDrawInstances(nt._multiDrawStarts,nt._multiDrawCounts,nt._multiDrawCount,nt._multiDrawInstances);else if(Ae.get("WEBGL_multi_draw"))Be.renderMultiDraw(nt._multiDrawStarts,nt._multiDrawCounts,nt._multiDrawCount);else{const Jt=nt._multiDrawStarts,Oe=nt._multiDrawCounts,he=nt._multiDrawCount,En=kt?dt.get(kt).bytesPerElement:1,Qi=E.get(rt).currentProgram.getUniforms();for(let bn=0;bn<he;bn++)Qi.setValue(k,"_gl_DrawID",bn),Be.render(Jt[bn]/En,Oe[bn])}else if(nt.isInstancedMesh)Be.renderInstances(ie,tn,nt.count);else if(ct.isInstancedBufferGeometry){const Jt=ct._maxInstanceCount!==void 0?ct._maxInstanceCount:1/0,Oe=Math.min(ct.instanceCount,Jt);Be.renderInstances(ie,tn,Oe)}else Be.render(ie,tn)};function oo(C,Z,ct){C.transparent===!0&&C.side===Sa&&C.forceSinglePass===!1?(C.side=Jn,C.needsUpdate=!0,js(C,Z,ct),C.side=us,C.needsUpdate=!0,js(C,Z,ct),C.side=Sa):js(C,Z,ct)}this.compile=function(C,Z,ct=null){ct===null&&(ct=C),z=Ct.get(ct),z.init(Z),D.push(z),ct.traverseVisible(function(nt){nt.isLight&&nt.layers.test(Z.layers)&&(z.pushLight(nt),nt.castShadow&&z.pushShadow(nt))}),C!==ct&&C.traverseVisible(function(nt){nt.isLight&&nt.layers.test(Z.layers)&&(z.pushLight(nt),nt.castShadow&&z.pushShadow(nt))}),z.setupLights();const rt=new Set;return C.traverse(function(nt){if(!(nt.isMesh||nt.isPoints||nt.isLine||nt.isSprite))return;const Ot=nt.material;if(Ot)if(Array.isArray(Ot))for(let Vt=0;Vt<Ot.length;Vt++){const zt=Ot[Vt];oo(zt,ct,nt),rt.add(zt)}else oo(Ot,ct,nt),rt.add(Ot)}),z=D.pop(),rt},this.compileAsync=function(C,Z,ct=null){const rt=this.compile(C,Z,ct);return new Promise(nt=>{function Ot(){if(rt.forEach(function(Vt){E.get(Vt).currentProgram.isReady()&&rt.delete(Vt)}),rt.size===0){nt(C);return}setTimeout(Ot,10)}Ae.get("KHR_parallel_shader_compile")!==null?Ot():setTimeout(Ot,10)})};let Ws=null;function lo(C){Ws&&Ws(C)}function qs(){Ii.stop()}function co(){Ii.start()}const Ii=new Ox;Ii.setAnimationLoop(lo),typeof self<"u"&&Ii.setContext(self),this.setAnimationLoop=function(C){Ws=C,Ut.setAnimationLoop(C),C===null?Ii.stop():Ii.start()},Ut.addEventListener("sessionstart",qs),Ut.addEventListener("sessionend",co),this.render=function(C,Z){if(Z!==void 0&&Z.isCamera!==!0){Re("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;const ct=Ut.enabled===!0&&Ut.isPresenting===!0,rt=V!==null&&(tt===null||ct)&&V.begin(b,tt);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),Ut.enabled===!0&&Ut.isPresenting===!0&&(V===null||V.isCompositing()===!1)&&(Ut.cameraAutoUpdate===!0&&Ut.updateCamera(Z),Z=Ut.getCamera()),C.isScene===!0&&C.onBeforeRender(b,C,Z,tt),z=Ct.get(C,D.length),z.init(Z),D.push(z),me.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),Rt.setFromProjectionMatrix(me,qi,Z.reversedDepth),Qt=this.localClippingEnabled,Dt=Ht.init(this.clippingPlanes,Qt),L=At.get(C,O.length),L.init(),O.push(L),Ut.enabled===!0&&Ut.isPresenting===!0){const Vt=b.xr.getDepthSensingMesh();Vt!==null&&fi(Vt,Z,-1/0,b.sortObjects)}fi(C,Z,0,b.sortObjects),L.finish(),b.sortObjects===!0&&L.sort(xt,Tt),re=Ut.enabled===!1||Ut.isPresenting===!1||Ut.hasDepthSensing()===!1,re&&Nt.addToRenderList(L,C),this.info.render.frame++,Dt===!0&&Ht.beginShadows();const nt=z.state.shadowsArray;if(It.render(nt,C,Z),Dt===!0&&Ht.endShadows(),this.info.autoReset===!0&&this.info.reset(),(rt&&V.hasRenderPass())===!1){const Vt=L.opaque,zt=L.transmissive;if(z.setupLights(),Z.isArrayCamera){const kt=Z.cameras;if(zt.length>0)for(let qt=0,ee=kt.length;qt<ee;qt++){const Yt=kt[qt];Mn(Vt,zt,C,Yt)}re&&Nt.render(C);for(let qt=0,ee=kt.length;qt<ee;qt++){const Yt=kt[qt];ln(L,C,Yt,Yt.viewport)}}else zt.length>0&&Mn(Vt,zt,C,Z),re&&Nt.render(C),ln(L,C,Z)}tt!==null&&Q===0&&(j.updateMultisampleRenderTarget(tt),j.updateRenderTargetMipmap(tt)),rt&&V.end(b),C.isScene===!0&&C.onAfterRender(b,C,Z),Ft.resetDefaultState(),lt=-1,it=null,D.pop(),D.length>0?(z=D[D.length-1],Dt===!0&&Ht.setGlobalState(b.clippingPlanes,z.state.camera)):z=null,O.pop(),O.length>0?L=O[O.length-1]:L=null};function fi(C,Z,ct,rt){if(C.visible===!1)return;if(C.layers.test(Z.layers)){if(C.isGroup)ct=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(Z);else if(C.isLight)z.pushLight(C),C.castShadow&&z.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Rt.intersectsSprite(C)){rt&&ce.setFromMatrixPosition(C.matrixWorld).applyMatrix4(me);const Vt=Lt.update(C),zt=C.material;zt.visible&&L.push(C,Vt,zt,ct,ce.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Rt.intersectsObject(C))){const Vt=Lt.update(C),zt=C.material;if(rt&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),ce.copy(C.boundingSphere.center)):(Vt.boundingSphere===null&&Vt.computeBoundingSphere(),ce.copy(Vt.boundingSphere.center)),ce.applyMatrix4(C.matrixWorld).applyMatrix4(me)),Array.isArray(zt)){const kt=Vt.groups;for(let qt=0,ee=kt.length;qt<ee;qt++){const Yt=kt[qt],ie=zt[Yt.materialIndex];ie&&ie.visible&&L.push(C,Vt,ie,ct,ce.z,Yt)}}else zt.visible&&L.push(C,Vt,zt,ct,ce.z,null)}}const Ot=C.children;for(let Vt=0,zt=Ot.length;Vt<zt;Vt++)fi(Ot[Vt],Z,ct,rt)}function ln(C,Z,ct,rt){const{opaque:nt,transmissive:Ot,transparent:Vt}=C;z.setupLightsView(ct),Dt===!0&&Ht.setGlobalState(b.clippingPlanes,ct),rt&&jt.viewport(I.copy(rt)),nt.length>0&&Ai(nt,Z,ct),Ot.length>0&&Ai(Ot,Z,ct),Vt.length>0&&Ai(Vt,Z,ct),jt.buffers.depth.setTest(!0),jt.buffers.depth.setMask(!0),jt.buffers.color.setMask(!0),jt.setPolygonOffset(!1)}function Mn(C,Z,ct,rt){if((ct.isScene===!0?ct.overrideMaterial:null)!==null)return;if(z.state.transmissionRenderTarget[rt.id]===void 0){const ie=Ae.has("EXT_color_buffer_half_float")||Ae.has("EXT_color_buffer_float");z.state.transmissionRenderTarget[rt.id]=new ji(1,1,{generateMipmaps:!0,type:ie?ba:ui,minFilter:Is,samples:ze.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:De.workingColorSpace})}const Ot=z.state.transmissionRenderTarget[rt.id],Vt=rt.viewport||I;Ot.setSize(Vt.z*b.transmissionResolutionScale,Vt.w*b.transmissionResolutionScale);const zt=b.getRenderTarget(),kt=b.getActiveCubeFace(),qt=b.getActiveMipmapLevel();b.setRenderTarget(Ot),b.getClearColor(mt),pt=b.getClearAlpha(),pt<1&&b.setClearColor(16777215,.5),b.clear(),re&&Nt.render(ct);const ee=b.toneMapping;b.toneMapping=Yi;const Yt=rt.viewport;if(rt.viewport!==void 0&&(rt.viewport=void 0),z.setupLightsView(rt),Dt===!0&&Ht.setGlobalState(b.clippingPlanes,rt),Ai(C,ct,rt),j.updateMultisampleRenderTarget(Ot),j.updateRenderTargetMipmap(Ot),Ae.has("WEBGL_multisampled_render_to_texture")===!1){let ie=!1;for(let Ne=0,tn=Z.length;Ne<tn;Ne++){const Ze=Z[Ne],{object:Be,geometry:Jt,material:Oe,group:he}=Ze;if(Oe.side===Sa&&Be.layers.test(rt.layers)){const En=Oe.side;Oe.side=Jn,Oe.needsUpdate=!0,Ys(Be,ct,rt,Jt,Oe,he),Oe.side=En,Oe.needsUpdate=!0,ie=!0}}ie===!0&&(j.updateMultisampleRenderTarget(Ot),j.updateRenderTargetMipmap(Ot))}b.setRenderTarget(zt,kt,qt),b.setClearColor(mt,pt),Yt!==void 0&&(rt.viewport=Yt),b.toneMapping=ee}function Ai(C,Z,ct){const rt=Z.isScene===!0?Z.overrideMaterial:null;for(let nt=0,Ot=C.length;nt<Ot;nt++){const Vt=C[nt],{object:zt,geometry:kt,group:qt}=Vt;let ee=Vt.material;ee.allowOverride===!0&&rt!==null&&(ee=rt),zt.layers.test(ct.layers)&&Ys(zt,Z,ct,kt,ee,qt)}}function Ys(C,Z,ct,rt,nt,Ot){C.onBeforeRender(b,Z,ct,rt,nt,Ot),C.modelViewMatrix.multiplyMatrices(ct.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),nt.onBeforeRender(b,Z,ct,rt,C,Ot),nt.transparent===!0&&nt.side===Sa&&nt.forceSinglePass===!1?(nt.side=Jn,nt.needsUpdate=!0,b.renderBufferDirect(ct,Z,rt,nt,C,Ot),nt.side=us,nt.needsUpdate=!0,b.renderBufferDirect(ct,Z,rt,nt,C,Ot),nt.side=Sa):b.renderBufferDirect(ct,Z,rt,nt,C,Ot),C.onAfterRender(b,Z,ct,rt,nt,Ot)}function js(C,Z,ct){Z.isScene!==!0&&(Z=ue);const rt=E.get(C),nt=z.state.lights,Ot=z.state.shadowsArray,Vt=nt.state.version,zt=Wt.getParameters(C,nt.state,Ot,Z,ct),kt=Wt.getProgramCacheKey(zt);let qt=rt.programs;rt.environment=C.isMeshStandardMaterial?Z.environment:null,rt.fog=Z.fog,rt.envMap=(C.isMeshStandardMaterial?Et:_t).get(C.envMap||rt.environment),rt.envMapRotation=rt.environment!==null&&C.envMap===null?Z.environmentRotation:C.envMapRotation,qt===void 0&&(C.addEventListener("dispose",On),qt=new Map,rt.programs=qt);let ee=qt.get(kt);if(ee!==void 0){if(rt.currentProgram===ee&&rt.lightsStateVersion===Vt)return uo(C,zt),ee}else zt.uniforms=Wt.getUniforms(C),C.onBeforeCompile(zt,b),ee=Wt.acquireProgram(zt,kt),qt.set(kt,ee),rt.uniforms=zt.uniforms;const Yt=rt.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Yt.clippingPlanes=Ht.uniform),uo(C,zt),rt.needsLights=Ra(C),rt.lightsStateVersion=Vt,rt.needsLights&&(Yt.ambientLightColor.value=nt.state.ambient,Yt.lightProbe.value=nt.state.probe,Yt.directionalLights.value=nt.state.directional,Yt.directionalLightShadows.value=nt.state.directionalShadow,Yt.spotLights.value=nt.state.spot,Yt.spotLightShadows.value=nt.state.spotShadow,Yt.rectAreaLights.value=nt.state.rectArea,Yt.ltc_1.value=nt.state.rectAreaLTC1,Yt.ltc_2.value=nt.state.rectAreaLTC2,Yt.pointLights.value=nt.state.point,Yt.pointLightShadows.value=nt.state.pointShadow,Yt.hemisphereLights.value=nt.state.hemi,Yt.directionalShadowMap.value=nt.state.directionalShadowMap,Yt.directionalShadowMatrix.value=nt.state.directionalShadowMatrix,Yt.spotShadowMap.value=nt.state.spotShadowMap,Yt.spotLightMatrix.value=nt.state.spotLightMatrix,Yt.spotLightMap.value=nt.state.spotLightMap,Yt.pointShadowMap.value=nt.state.pointShadowMap,Yt.pointShadowMatrix.value=nt.state.pointShadowMatrix),rt.currentProgram=ee,rt.uniformsList=null,ee}function Rl(C){if(C.uniformsList===null){const Z=C.currentProgram.getUniforms();C.uniformsList=Su.seqWithValue(Z.seq,C.uniforms)}return C.uniformsList}function uo(C,Z){const ct=E.get(C);ct.outputColorSpace=Z.outputColorSpace,ct.batching=Z.batching,ct.batchingColor=Z.batchingColor,ct.instancing=Z.instancing,ct.instancingColor=Z.instancingColor,ct.instancingMorph=Z.instancingMorph,ct.skinning=Z.skinning,ct.morphTargets=Z.morphTargets,ct.morphNormals=Z.morphNormals,ct.morphColors=Z.morphColors,ct.morphTargetsCount=Z.morphTargetsCount,ct.numClippingPlanes=Z.numClippingPlanes,ct.numIntersection=Z.numClipIntersection,ct.vertexAlphas=Z.vertexAlphas,ct.vertexTangents=Z.vertexTangents,ct.toneMapping=Z.toneMapping}function fs(C,Z,ct,rt,nt){Z.isScene!==!0&&(Z=ue),j.resetTextureUnits();const Ot=Z.fog,Vt=rt.isMeshStandardMaterial?Z.environment:null,zt=tt===null?b.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:io,kt=(rt.isMeshStandardMaterial?Et:_t).get(rt.envMap||Vt),qt=rt.vertexColors===!0&&!!ct.attributes.color&&ct.attributes.color.itemSize===4,ee=!!ct.attributes.tangent&&(!!rt.normalMap||rt.anisotropy>0),Yt=!!ct.morphAttributes.position,ie=!!ct.morphAttributes.normal,Ne=!!ct.morphAttributes.color;let tn=Yi;rt.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(tn=b.toneMapping);const Ze=ct.morphAttributes.position||ct.morphAttributes.normal||ct.morphAttributes.color,Be=Ze!==void 0?Ze.length:0,Jt=E.get(rt),Oe=z.state.lights;if(Dt===!0&&(Qt===!0||C!==it)){const An=C===it&&rt.id===lt;Ht.setState(rt,C,An)}let he=!1;rt.version===Jt.__version?(Jt.needsLights&&Jt.lightsStateVersion!==Oe.state.version||Jt.outputColorSpace!==zt||nt.isBatchedMesh&&Jt.batching===!1||!nt.isBatchedMesh&&Jt.batching===!0||nt.isBatchedMesh&&Jt.batchingColor===!0&&nt.colorTexture===null||nt.isBatchedMesh&&Jt.batchingColor===!1&&nt.colorTexture!==null||nt.isInstancedMesh&&Jt.instancing===!1||!nt.isInstancedMesh&&Jt.instancing===!0||nt.isSkinnedMesh&&Jt.skinning===!1||!nt.isSkinnedMesh&&Jt.skinning===!0||nt.isInstancedMesh&&Jt.instancingColor===!0&&nt.instanceColor===null||nt.isInstancedMesh&&Jt.instancingColor===!1&&nt.instanceColor!==null||nt.isInstancedMesh&&Jt.instancingMorph===!0&&nt.morphTexture===null||nt.isInstancedMesh&&Jt.instancingMorph===!1&&nt.morphTexture!==null||Jt.envMap!==kt||rt.fog===!0&&Jt.fog!==Ot||Jt.numClippingPlanes!==void 0&&(Jt.numClippingPlanes!==Ht.numPlanes||Jt.numIntersection!==Ht.numIntersection)||Jt.vertexAlphas!==qt||Jt.vertexTangents!==ee||Jt.morphTargets!==Yt||Jt.morphNormals!==ie||Jt.morphColors!==Ne||Jt.toneMapping!==tn||Jt.morphTargetsCount!==Be)&&(he=!0):(he=!0,Jt.__version=rt.version);let En=Jt.currentProgram;he===!0&&(En=js(rt,Z,nt));let Qi=!1,bn=!1,hi=!1;const Fe=En.getUniforms(),Tn=Jt.uniforms;if(jt.useProgram(En.program)&&(Qi=!0,bn=!0,hi=!0),rt.id!==lt&&(lt=rt.id,bn=!0),Qi||it!==C){jt.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Fe.setValue(k,"projectionMatrix",C.projectionMatrix),Fe.setValue(k,"viewMatrix",C.matrixWorldInverse);const Rn=Fe.map.cameraPosition;Rn!==void 0&&Rn.setValue(k,te.setFromMatrixPosition(C.matrixWorld)),ze.logarithmicDepthBuffer&&Fe.setValue(k,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(rt.isMeshPhongMaterial||rt.isMeshToonMaterial||rt.isMeshLambertMaterial||rt.isMeshBasicMaterial||rt.isMeshStandardMaterial||rt.isShaderMaterial)&&Fe.setValue(k,"isOrthographic",C.isOrthographicCamera===!0),it!==C&&(it=C,bn=!0,hi=!0)}if(Jt.needsLights&&(Oe.state.directionalShadowMap.length>0&&Fe.setValue(k,"directionalShadowMap",Oe.state.directionalShadowMap,j),Oe.state.spotShadowMap.length>0&&Fe.setValue(k,"spotShadowMap",Oe.state.spotShadowMap,j),Oe.state.pointShadowMap.length>0&&Fe.setValue(k,"pointShadowMap",Oe.state.pointShadowMap,j)),nt.isSkinnedMesh){Fe.setOptional(k,nt,"bindMatrix"),Fe.setOptional(k,nt,"bindMatrixInverse");const An=nt.skeleton;An&&(An.boneTexture===null&&An.computeBoneTexture(),Fe.setValue(k,"boneTexture",An.boneTexture,j))}nt.isBatchedMesh&&(Fe.setOptional(k,nt,"batchingTexture"),Fe.setValue(k,"batchingTexture",nt._matricesTexture,j),Fe.setOptional(k,nt,"batchingIdTexture"),Fe.setValue(k,"batchingIdTexture",nt._indirectTexture,j),Fe.setOptional(k,nt,"batchingColorTexture"),nt._colorsTexture!==null&&Fe.setValue(k,"batchingColorTexture",nt._colorsTexture,j));const pn=ct.morphAttributes;if((pn.position!==void 0||pn.normal!==void 0||pn.color!==void 0)&&ge.update(nt,ct,En),(bn||Jt.receiveShadow!==nt.receiveShadow)&&(Jt.receiveShadow=nt.receiveShadow,Fe.setValue(k,"receiveShadow",nt.receiveShadow)),rt.isMeshGouraudMaterial&&rt.envMap!==null&&(Tn.envMap.value=kt,Tn.flipEnvMap.value=kt.isCubeTexture&&kt.isRenderTargetTexture===!1?-1:1),rt.isMeshStandardMaterial&&rt.envMap===null&&Z.environment!==null&&(Tn.envMapIntensity.value=Z.environmentIntensity),Tn.dfgLUT!==void 0&&(Tn.dfgLUT.value=OR()),bn&&(Fe.setValue(k,"toneMappingExposure",b.toneMappingExposure),Jt.needsLights&&fo(Tn,hi),Ot&&rt.fog===!0&&oe.refreshFogUniforms(Tn,Ot),oe.refreshMaterialUniforms(Tn,rt,ht,et,z.state.transmissionRenderTarget[C.id]),Su.upload(k,Rl(Jt),Tn,j)),rt.isShaderMaterial&&rt.uniformsNeedUpdate===!0&&(Su.upload(k,Rl(Jt),Tn,j),rt.uniformsNeedUpdate=!1),rt.isSpriteMaterial&&Fe.setValue(k,"center",nt.center),Fe.setValue(k,"modelViewMatrix",nt.modelViewMatrix),Fe.setValue(k,"normalMatrix",nt.normalMatrix),Fe.setValue(k,"modelMatrix",nt.matrixWorld),rt.isShaderMaterial||rt.isRawShaderMaterial){const An=rt.uniformsGroups;for(let Rn=0,Zs=An.length;Rn<Zs;Rn++){const Ri=An[Rn];bt.update(Ri,En),bt.bind(Ri,En)}}return En}function fo(C,Z){C.ambientLightColor.needsUpdate=Z,C.lightProbe.needsUpdate=Z,C.directionalLights.needsUpdate=Z,C.directionalLightShadows.needsUpdate=Z,C.pointLights.needsUpdate=Z,C.pointLightShadows.needsUpdate=Z,C.spotLights.needsUpdate=Z,C.spotLightShadows.needsUpdate=Z,C.rectAreaLights.needsUpdate=Z,C.hemisphereLights.needsUpdate=Z}function Ra(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return Q},this.getRenderTarget=function(){return tt},this.setRenderTargetTextures=function(C,Z,ct){const rt=E.get(C);rt.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,rt.__autoAllocateDepthBuffer===!1&&(rt.__useRenderToTexture=!1),E.get(C.texture).__webglTexture=Z,E.get(C.depthTexture).__webglTexture=rt.__autoAllocateDepthBuffer?void 0:ct,rt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,Z){const ct=E.get(C);ct.__webglFramebuffer=Z,ct.__useDefaultFramebuffer=Z===void 0};const Ca=k.createFramebuffer();this.setRenderTarget=function(C,Z=0,ct=0){tt=C,H=Z,Q=ct;let rt=null,nt=!1,Ot=!1;if(C){const zt=E.get(C);if(zt.__useDefaultFramebuffer!==void 0){jt.bindFramebuffer(k.FRAMEBUFFER,zt.__webglFramebuffer),I.copy(C.viewport),F.copy(C.scissor),J=C.scissorTest,jt.viewport(I),jt.scissor(F),jt.setScissorTest(J),lt=-1;return}else if(zt.__webglFramebuffer===void 0)j.setupRenderTarget(C);else if(zt.__hasExternalTextures)j.rebindTextures(C,E.get(C.texture).__webglTexture,E.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const ee=C.depthTexture;if(zt.__boundDepthTexture!==ee){if(ee!==null&&E.has(ee)&&(C.width!==ee.image.width||C.height!==ee.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");j.setupDepthRenderbuffer(C)}}const kt=C.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(Ot=!0);const qt=E.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(qt[Z])?rt=qt[Z][ct]:rt=qt[Z],nt=!0):C.samples>0&&j.useMultisampledRTT(C)===!1?rt=E.get(C).__webglMultisampledFramebuffer:Array.isArray(qt)?rt=qt[ct]:rt=qt,I.copy(C.viewport),F.copy(C.scissor),J=C.scissorTest}else I.copy(Y).multiplyScalar(ht).floor(),F.copy($).multiplyScalar(ht).floor(),J=Mt;if(ct!==0&&(rt=Ca),jt.bindFramebuffer(k.FRAMEBUFFER,rt)&&jt.drawBuffers(C,rt),jt.viewport(I),jt.scissor(F),jt.setScissorTest(J),nt){const zt=E.get(C.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+Z,zt.__webglTexture,ct)}else if(Ot){const zt=Z;for(let kt=0;kt<C.textures.length;kt++){const qt=E.get(C.textures[kt]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+kt,qt.__webglTexture,ct,zt)}}else if(C!==null&&ct!==0){const zt=E.get(C.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,zt.__webglTexture,ct)}lt=-1},this.readRenderTargetPixels=function(C,Z,ct,rt,nt,Ot,Vt,zt=0){if(!(C&&C.isWebGLRenderTarget)){Re("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let kt=E.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Vt!==void 0&&(kt=kt[Vt]),kt){jt.bindFramebuffer(k.FRAMEBUFFER,kt);try{const qt=C.textures[zt],ee=qt.format,Yt=qt.type;if(!ze.textureFormatReadable(ee)){Re("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ze.textureTypeReadable(Yt)){Re("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=C.width-rt&&ct>=0&&ct<=C.height-nt&&(C.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+zt),k.readPixels(Z,ct,rt,nt,wt.convert(ee),wt.convert(Yt),Ot))}finally{const qt=tt!==null?E.get(tt).__webglFramebuffer:null;jt.bindFramebuffer(k.FRAMEBUFFER,qt)}}},this.readRenderTargetPixelsAsync=async function(C,Z,ct,rt,nt,Ot,Vt,zt=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let kt=E.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Vt!==void 0&&(kt=kt[Vt]),kt)if(Z>=0&&Z<=C.width-rt&&ct>=0&&ct<=C.height-nt){jt.bindFramebuffer(k.FRAMEBUFFER,kt);const qt=C.textures[zt],ee=qt.format,Yt=qt.type;if(!ze.textureFormatReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ze.textureTypeReadable(Yt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ie=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,ie),k.bufferData(k.PIXEL_PACK_BUFFER,Ot.byteLength,k.STREAM_READ),C.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+zt),k.readPixels(Z,ct,rt,nt,wt.convert(ee),wt.convert(Yt),0);const Ne=tt!==null?E.get(tt).__webglFramebuffer:null;jt.bindFramebuffer(k.FRAMEBUFFER,Ne);const tn=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await ZM(k,tn,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,ie),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Ot),k.deleteBuffer(ie),k.deleteSync(tn),Ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,Z=null,ct=0){const rt=Math.pow(2,-ct),nt=Math.floor(C.image.width*rt),Ot=Math.floor(C.image.height*rt),Vt=Z!==null?Z.x:0,zt=Z!==null?Z.y:0;j.setTexture2D(C,0),k.copyTexSubImage2D(k.TEXTURE_2D,ct,0,0,Vt,zt,nt,Ot),jt.unbindTexture()};const hs=k.createFramebuffer(),wa=k.createFramebuffer();this.copyTextureToTexture=function(C,Z,ct=null,rt=null,nt=0,Ot=null){Ot===null&&(nt!==0?(Ml("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ot=nt,nt=0):Ot=0);let Vt,zt,kt,qt,ee,Yt,ie,Ne,tn;const Ze=C.isCompressedTexture?C.mipmaps[Ot]:C.image;if(ct!==null)Vt=ct.max.x-ct.min.x,zt=ct.max.y-ct.min.y,kt=ct.isBox3?ct.max.z-ct.min.z:1,qt=ct.min.x,ee=ct.min.y,Yt=ct.isBox3?ct.min.z:0;else{const pn=Math.pow(2,-nt);Vt=Math.floor(Ze.width*pn),zt=Math.floor(Ze.height*pn),C.isDataArrayTexture?kt=Ze.depth:C.isData3DTexture?kt=Math.floor(Ze.depth*pn):kt=1,qt=0,ee=0,Yt=0}rt!==null?(ie=rt.x,Ne=rt.y,tn=rt.z):(ie=0,Ne=0,tn=0);const Be=wt.convert(Z.format),Jt=wt.convert(Z.type);let Oe;Z.isData3DTexture?(j.setTexture3D(Z,0),Oe=k.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(j.setTexture2DArray(Z,0),Oe=k.TEXTURE_2D_ARRAY):(j.setTexture2D(Z,0),Oe=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,Z.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,Z.unpackAlignment);const he=k.getParameter(k.UNPACK_ROW_LENGTH),En=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Qi=k.getParameter(k.UNPACK_SKIP_PIXELS),bn=k.getParameter(k.UNPACK_SKIP_ROWS),hi=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,Ze.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Ze.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,qt),k.pixelStorei(k.UNPACK_SKIP_ROWS,ee),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Yt);const Fe=C.isDataArrayTexture||C.isData3DTexture,Tn=Z.isDataArrayTexture||Z.isData3DTexture;if(C.isDepthTexture){const pn=E.get(C),An=E.get(Z),Rn=E.get(pn.__renderTarget),Zs=E.get(An.__renderTarget);jt.bindFramebuffer(k.READ_FRAMEBUFFER,Rn.__webglFramebuffer),jt.bindFramebuffer(k.DRAW_FRAMEBUFFER,Zs.__webglFramebuffer);for(let Ri=0;Ri<kt;Ri++)Fe&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,E.get(C).__webglTexture,nt,Yt+Ri),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,E.get(Z).__webglTexture,Ot,tn+Ri)),k.blitFramebuffer(qt,ee,Vt,zt,ie,Ne,Vt,zt,k.DEPTH_BUFFER_BIT,k.NEAREST);jt.bindFramebuffer(k.READ_FRAMEBUFFER,null),jt.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(nt!==0||C.isRenderTargetTexture||E.has(C)){const pn=E.get(C),An=E.get(Z);jt.bindFramebuffer(k.READ_FRAMEBUFFER,hs),jt.bindFramebuffer(k.DRAW_FRAMEBUFFER,wa);for(let Rn=0;Rn<kt;Rn++)Fe?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,pn.__webglTexture,nt,Yt+Rn):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,pn.__webglTexture,nt),Tn?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,An.__webglTexture,Ot,tn+Rn):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,An.__webglTexture,Ot),nt!==0?k.blitFramebuffer(qt,ee,Vt,zt,ie,Ne,Vt,zt,k.COLOR_BUFFER_BIT,k.NEAREST):Tn?k.copyTexSubImage3D(Oe,Ot,ie,Ne,tn+Rn,qt,ee,Vt,zt):k.copyTexSubImage2D(Oe,Ot,ie,Ne,qt,ee,Vt,zt);jt.bindFramebuffer(k.READ_FRAMEBUFFER,null),jt.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else Tn?C.isDataTexture||C.isData3DTexture?k.texSubImage3D(Oe,Ot,ie,Ne,tn,Vt,zt,kt,Be,Jt,Ze.data):Z.isCompressedArrayTexture?k.compressedTexSubImage3D(Oe,Ot,ie,Ne,tn,Vt,zt,kt,Be,Ze.data):k.texSubImage3D(Oe,Ot,ie,Ne,tn,Vt,zt,kt,Be,Jt,Ze):C.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Ot,ie,Ne,Vt,zt,Be,Jt,Ze.data):C.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Ot,ie,Ne,Ze.width,Ze.height,Be,Ze.data):k.texSubImage2D(k.TEXTURE_2D,Ot,ie,Ne,Vt,zt,Be,Jt,Ze);k.pixelStorei(k.UNPACK_ROW_LENGTH,he),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,En),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Qi),k.pixelStorei(k.UNPACK_SKIP_ROWS,bn),k.pixelStorei(k.UNPACK_SKIP_IMAGES,hi),Ot===0&&Z.generateMipmaps&&k.generateMipmap(Oe),jt.unbindTexture()},this.initRenderTarget=function(C){E.get(C).__webglFramebuffer===void 0&&j.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?j.setTextureCube(C,0):C.isData3DTexture?j.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?j.setTexture2DArray(C,0):j.setTexture2D(C,0),jt.unbindTexture()},this.resetState=function(){H=0,Q=0,tt=null,jt.reset(),Ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=De._getDrawingBufferColorSpace(t),i.unpackColorSpace=De._getUnpackColorSpace()}}const Fv={type:"change"},kp={type:"start"},Hx={type:"end"},uu=new Lu,Hv=new ss,PR=Math.cos(70*QM.DEG2RAD),gn=new W,Qn=2*Math.PI,Ye={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Rd=1e-6;class Gx extends FE{constructor(t,i=null){super(t,i),this.state=Ye.NONE,this.target=new W,this.cursor=new W,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Kr.ROTATE,MIDDLE:Kr.DOLLY,RIGHT:Kr.PAN},this.touches={ONE:jr.ROTATE,TWO:jr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new W,this._lastQuaternion=new bi,this._lastTargetPosition=new W,this._quat=new bi().setFromUnitVectors(t.up,new W(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new pv,this._sphericalDelta=new pv,this._scale=1,this._panOffset=new W,this._rotateStart=new se,this._rotateEnd=new se,this._rotateDelta=new se,this._panStart=new se,this._panEnd=new se,this._panDelta=new se,this._dollyStart=new se,this._dollyEnd=new se,this._dollyDelta=new se,this._dollyDirection=new W,this._mouse=new se,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=BR.bind(this),this._onPointerDown=zR.bind(this),this._onPointerUp=IR.bind(this),this._onContextMenu=WR.bind(this),this._onMouseWheel=GR.bind(this),this._onKeyDown=VR.bind(this),this._onTouchStart=kR.bind(this),this._onTouchMove=XR.bind(this),this._onMouseDown=FR.bind(this),this._onMouseMove=HR.bind(this),this._interceptControlDown=qR.bind(this),this._interceptControlUp=YR.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Fv),this.update(),this.state=Ye.NONE}update(t=null){const i=this.object.position;gn.copy(i).sub(this.target),gn.applyQuaternion(this._quat),this._spherical.setFromVector3(gn),this.autoRotate&&this.state===Ye.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=Qn:s>Math.PI&&(s-=Qn),l<-Math.PI?l+=Qn:l>Math.PI&&(l-=Qn),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const h=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=h!=this._spherical.radius}if(gn.setFromSpherical(this._spherical),gn.applyQuaternion(this._quatInverse),i.copy(this.target).add(gn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let h=null;if(this.object.isPerspectiveCamera){const d=gn.length();h=this._clampDistance(d*this._scale);const m=d-h;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),c=!!m}else if(this.object.isOrthographicCamera){const d=new W(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=m!==this.object.zoom;const p=new W(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(d),this.object.updateMatrixWorld(),h=gn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;h!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(h).add(this.object.position):(uu.origin.copy(this.object.position),uu.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(uu.direction))<PR?this.object.lookAt(this.target):(Hv.setFromNormalAndCoplanarPoint(this.object.up,this.target),uu.intersectPlane(Hv,this.target))))}else if(this.object.isOrthographicCamera){const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),h!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>Rd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Rd||this._lastTargetPosition.distanceToSquared(this.target)>Rd?(this.dispatchEvent(Fv),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Qn/60*this.autoRotateSpeed*t:Qn/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){gn.setFromMatrixColumn(i,0),gn.multiplyScalar(-t),this._panOffset.add(gn)}_panUp(t,i){this.screenSpacePanning===!0?gn.setFromMatrixColumn(i,1):(gn.setFromMatrixColumn(i,0),gn.crossVectors(this.object.up,gn)),gn.multiplyScalar(t),this._panOffset.add(gn)}_pan(t,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;gn.copy(l).sub(this.target);let c=gn.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/s.clientHeight,this.object.matrix),this._panUp(2*i*c/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=t-s.left,c=i-s.top,h=s.width,d=s.height;this._mouse.x=l/h*2-1,this._mouse.y=-(c/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Qn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Qn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Qn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Qn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Qn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Qn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const s=this._getSecondPointerPosition(t),l=.5*(t.pageX+s.x),c=.5*(t.pageY+s.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Qn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Qn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const h=(t.pageX+i.x)*.5,d=(t.pageY+i.y)*.5;this._updateZoomParameters(h,d)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new se,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,s={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function zR(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function BR(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function IR(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Hx),this.state=Ye.NONE;break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function FR(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Kr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=Ye.DOLLY;break;case Kr.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Ye.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Ye.ROTATE}break;case Kr.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Ye.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Ye.PAN}break;default:this.state=Ye.NONE}this.state!==Ye.NONE&&this.dispatchEvent(kp)}function HR(r){switch(this.state){case Ye.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case Ye.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case Ye.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function GR(r){this.enabled===!1||this.enableZoom===!1||this.state!==Ye.NONE||(r.preventDefault(),this.dispatchEvent(kp),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(Hx))}function VR(r){this.enabled!==!1&&this._handleKeyDown(r)}function kR(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case jr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=Ye.TOUCH_ROTATE;break;case jr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=Ye.TOUCH_PAN;break;default:this.state=Ye.NONE}break;case 2:switch(this.touches.TWO){case jr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=Ye.TOUCH_DOLLY_PAN;break;case jr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=Ye.TOUCH_DOLLY_ROTATE;break;default:this.state=Ye.NONE}break;default:this.state=Ye.NONE}this.state!==Ye.NONE&&this.dispatchEvent(kp)}function XR(r){switch(this._trackPointer(r),this.state){case Ye.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case Ye.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case Ye.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case Ye.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=Ye.NONE}}function WR(r){this.enabled!==!1&&r.preventDefault()}function qR(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function YR(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Du=new ne("#12151c"),Xp=new ne("#ff9e5e"),Vx={hit:new ne("#8fb45f"),read:new ne("#c3d6ec"),edit:new ne("#f0ad5a"),selected:new ne("#f6ead2")},kx=()=>typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;function Xx(r){r.traverse(t=>{if(t instanceof $n||t instanceof Rx||t instanceof Ru){t.geometry?.dispose();const i=t.material;Array.isArray(i)?i.forEach(Gv):i&&Gv(i)}})}function Gv(r){const t=r.map;t&&!t.userData.shared&&t.dispose(),r.dispose()}let pl=null;function Wx(){if(pl)return pl;const r=64,t=document.createElement("canvas");t.width=r,t.height=r;const i=t.getContext("2d"),s=i.createRadialGradient(r/2,r/2,0,r/2,r/2,r/2);return s.addColorStop(0,"rgba(255,255,255,1)"),s.addColorStop(.25,"rgba(255,210,160,0.55)"),s.addColorStop(1,"rgba(255,158,94,0)"),i.fillStyle=s,i.fillRect(0,0,r,r),pl=new Hp(t),pl.userData.shared=!0,pl}let ml=null;function jR(){if(ml)return ml;const r=128,t=document.createElement("canvas");t.width=r,t.height=r;const i=t.getContext("2d"),s=i.createRadialGradient(r/2,r/2,0,r/2,r/2,r/2);return s.addColorStop(0,"rgba(255,255,255,0.9)"),s.addColorStop(.4,"rgba(255,255,255,0.28)"),s.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=s,i.fillRect(0,0,r,r),ml=new Hp(t),ml.userData.shared=!0,ml}function ZR(r){const t='500 30px "Schibsted Grotesk Variable", "PingFang SC", sans-serif',i=document.createElement("canvas").getContext("2d");i.font=t;const s=Math.ceil(i.measureText(r).width)+24,l=44,c=document.createElement("canvas");c.width=s*2,c.height=l*2;const h=c.getContext("2d");h.scale(2,2),h.font=t,h.textBaseline="middle",h.textAlign="center",h.fillStyle="rgba(154, 163, 181, 0.92)",h.fillText(r,s/2,l/2+1);const d=new Hp(c);return d.anisotropy=4,{texture:d,aspect:s/l}}const gl=14,Vv=11;class qx{object;positions;colors;lift;arcPoints=Array.from({length:gl+1},()=>new W);mid=new W;curve=new UE;color=new ne;constructor(t){this.lift=t;const i=Vv*gl*2,s=new Xn;this.positions=new kn(new Float32Array(i*3),3),this.positions.setUsage(B_),this.colors=new kn(new Float32Array(i*3),3),this.colors.setUsage(B_),s.setAttribute("position",this.positions),s.setAttribute("color",this.colors),s.setDrawRange(0,0);const l=new Ou({vertexColors:!0,transparent:!0,blending:$r,depthWrite:!1});this.object=new Fp(s,l),this.object.frustumCulled=!1}update(t){const i=Math.min(Math.max(t.length-1,0),Vv);if(i===0){this.object.geometry.setDrawRange(0,0);return}const s=t.length-1-i;let l=0;for(let c=1;c<=i;c++){const h=t[s+c-1],d=t[s+c];this.mid.copy(h).lerp(d,.5),this.mid.y=Math.max(h.y,d.y)+h.distanceTo(d)*.22+this.lift,this.curve.v0.copy(h),this.curve.v1.copy(this.mid),this.curve.v2.copy(d);for(let p=0;p<=gl;p++)this.curve.getPoint(p/gl,this.arcPoints[p]);const m=c/i;this.color.copy(Xp).multiplyScalar(.05+.95*m*m);for(let p=0;p<gl;p++){const v=this.arcPoints[p],_=this.arcPoints[p+1];this.positions.setXYZ(l,v.x,v.y,v.z),this.colors.setXYZ(l,this.color.r,this.color.g,this.color.b),l++,this.positions.setXYZ(l,_.x,_.y,_.z),this.colors.setXYZ(l,this.color.r,this.color.g,this.color.b),l++}}this.object.geometry.setDrawRange(0,l),this.positions.needsUpdate=!0,this.colors.needsUpdate=!0}}const Bs={unvisited:new ne("#363d4b"),ghost:new ne("#272c37"),...Vx},fu=.14;function kv(r,t){return(r==="edit"?7.2:r==="read"?4.2:1.6)*(1+.35*Math.log2(Math.max(t,1)))}function KR({city:r,playback:t,selectedPath:i,onSelect:s}){const l=Gt.useRef(null),c=Gt.useRef(null),h=Gt.useRef(null),d=Gt.useRef([]),m=Gt.useRef([]),p=Gt.useRef(new Map),v=Gt.useRef(null),_=Gt.useRef(null),M=Gt.useRef(null),y=Gt.useRef(null),T=Gt.useRef(null),w=Gt.useRef(null),x=Gt.useRef(null),g=Gt.useRef(null),P=Gt.useRef(!1),U=Gt.useRef({cx:0,cz:0,size:120}),L=Gt.useMemo(()=>{if(!r||r.files.length===0)return{cx:0,cz:0,size:120};let z=1/0,O=-1/0,D=1/0,V=-1/0;for(const b of r.files)z=Math.min(z,b.rect.x),O=Math.max(O,b.rect.x+b.rect.w),D=Math.min(D,b.rect.z),V=Math.max(V,b.rect.z+b.rect.d);return{cx:(z+O)/2,cz:(D+V)/2,size:Math.max(O-z,V-D,60)}},[r]);return Gt.useEffect(()=>{const z=l.current;if(!z)return;const O=kx();P.current=O;const D=new bx;D.background=Du,y.current=D;const V=new ci(38,z.clientWidth/z.clientHeight,.1,2400);V.position.set(70,130,100),_.current=V;const b=new Fx({antialias:!0});b.setPixelRatio(Math.min(window.devicePixelRatio,2)),b.setSize(z.clientWidth,z.clientHeight),v.current=b,z.appendChild(b.domElement);const A=new Gx(V,b.domElement);A.enableDamping=!O,A.dampingFactor=.08,A.maxPolarAngle=Math.PI*.44,A.autoRotate=!O,A.autoRotateSpeed=-.5,A.addEventListener("start",()=>{A.autoRotate=!1}),M.current=A;const H=new Dx("#66779b","#161922",1.7);D.add(H);const Q=new Ux("#b6c5de",1.1);Q.position.set(-60,120,-40),D.add(Q);const tt=new IE,lt=new se;let it=null;const I=xt=>{it={x:xt.clientX,y:xt.clientY}},F=xt=>{if(!it)return;const Tt=Math.hypot(xt.clientX-it.x,xt.clientY-it.y);if(it=null,Tt>5||!_.current||!v.current)return;const Y=v.current.domElement.getBoundingClientRect();lt.x=(xt.clientX-Y.left)/Y.width*2-1,lt.y=-((xt.clientY-Y.top)/Y.height)*2+1,tt.setFromCamera(lt,_.current);const $=[h.current,c.current].filter(Boolean),Mt=tt.intersectObjects($,!1)[0];if(Mt&&Mt.instanceId!==void 0)if(Mt.object===h.current){const Rt=m.current[Mt.instanceId];s(Rt?d.current[Rt.fileId]?.path:void 0)}else s(d.current[Mt.instanceId]?.path);else s(void 0)};b.domElement.addEventListener("pointerdown",I),b.domElement.addEventListener("pointerup",F);const J=()=>{if(!l.current)return;const xt=l.current.clientWidth,Tt=l.current.clientHeight;xt===0||Tt===0||(b.setSize(xt,Tt),V.aspect=xt/Tt,V.updateProjectionMatrix())},mt=new ResizeObserver(J);mt.observe(z);const pt=new Lx,N=new Ce,et=new bi,ht=()=>{A.update();const xt=h.current,Tt=m.current,Y=p.current;if(xt&&Tt.length>0){let Mt=!1;for(let Rt=0;Rt<Tt.length;Rt++){const Dt=Tt[Rt],Qt=d.current[Dt.fileId];if(!Qt)continue;let me=Y.get(Dt.fileId)??0;const te=Dt.target-me;Math.abs(te)>.015?(me=P.current?Dt.target:me+te*.13,Y.set(Dt.fileId,me),Mt=!0):me!==Dt.target&&(Y.set(Dt.fileId,Dt.target),me=Dt.target,Mt=!0);const ce=Math.max(Qt.rect.w,.45)+.04,ue=Math.max(Qt.rect.d,.45)+.04;N.compose(new W(Qt.rect.x+Qt.rect.w/2-U.current.cx,Math.max(me,.02)/2+fu,Qt.rect.z+Qt.rect.d/2-U.current.cz),et,new W(ce,Math.max(me,.02),ue)),xt.setMatrixAt(Rt,N)}Mt&&(xt.instanceMatrix.needsUpdate=!0)}const $=x.current;if($?.visible){const Mt=pt.getElapsedTime(),Rt=$.userData.baseScale,Dt=P.current?1:1+.1*Math.sin(Mt*2.4);$.scale.setScalar(Rt*Dt)}b.render(D,V),g.current=requestAnimationFrame(ht)};return ht(),()=>{g.current&&cancelAnimationFrame(g.current),b.domElement.removeEventListener("pointerdown",I),b.domElement.removeEventListener("pointerup",F),mt.disconnect(),A.dispose(),b.dispose(),z.removeChild(b.domElement),D.clear()}},[s]),Gt.useEffect(()=>{const z=y.current;if(!z||(d.current=r?.files??[],m.current=[],p.current=new Map,U.current=L,!r||r.files.length===0))return;const O=new Zr,D=L.size;z.fog=new Nu(Du,D*2.1,D*4.2);const V=new $n(new Gs(D*6,D*6),new xu({color:"#14171e",roughness:1}));V.rotation.x=-Math.PI/2,V.position.y=-.32,O.add(V);const b=new Nx(D*2.8,46,"#20242e","#1a1e27");b.material.transparent=!0,b.material.opacity=.5,b.position.y=-.3,O.add(b);const A=r.dirs.filter(pt=>pt.depth<=3&&pt.rect.w>0&&pt.rect.d>0);if(A.length>0){const pt=new cs(1,1,1),N=new xu({roughness:.95,metalness:0}),et=new xl(pt,N,A.length),ht=new Ce,xt=new ne;A.forEach((Tt,Y)=>{const $=-.2+Math.min(Tt.depth,3)*.06,Mt=$+.3;ht.compose(new W(Tt.rect.x+Tt.rect.w/2-L.cx,$-Mt/2,Tt.rect.z+Tt.rect.d/2-L.cz),new bi,new W(Tt.rect.w,Mt,Tt.rect.d)),et.setMatrixAt(Y,ht),xt.set("#161a23").lerp(new ne("#1e232e"),Math.min(Tt.depth,3)/3),et.setColorAt(Y,xt)}),et.instanceMatrix.needsUpdate=!0,et.instanceColor&&(et.instanceColor.needsUpdate=!0),O.add(et)}const H=new cs(1,1,1),Q=new xu({roughness:.85,metalness:0}),tt=new xl(H,Q,r.files.length),lt=new Ce;for(const pt of r.files){const N=Math.max(pt.rect.w,.45),et=Math.max(pt.rect.d,.45),ht=pt.rect.x+pt.rect.w/2-L.cx,xt=pt.rect.z+pt.rect.d/2-L.cz;lt.compose(new W(ht,fu/2,xt),new bi,new W(N,fu,et)),tt.setMatrixAt(pt.id,lt),tt.setColorAt(pt.id,Xv(pt))}tt.instanceMatrix.needsUpdate=!0,tt.instanceColor&&(tt.instanceColor.needsUpdate=!0),c.current=tt,O.add(tt);const it=new xl(new cs(1,1,1),new El({toneMapped:!1}),r.files.length);it.instanceColor=new bl(new Float32Array(r.files.length*3),3),it.count=0,it.frustumCulled=!1,h.current=it,O.add(it);const I=new Ru(new Au({map:Wx(),color:Xp,blending:$r,depthWrite:!1,transparent:!0}));I.userData.baseScale=Math.max(D*.028,2.2),I.visible=!1,x.current=I,O.add(I);const F=new qx(1.4);w.current=F,O.add(F.object),T.current=O,z.add(O);const J=_.current,mt=M.current;return J&&mt&&(J.position.set(D*.46,D*1.08,D*.72),mt.target.set(0,0,0),mt.minDistance=D*.18,mt.maxDistance=D*2.6,mt.update()),()=>{Xx(O),z.remove(O),T.current=null,c.current=null,h.current=null,w.current=null,x.current=null}},[r,L]),Gt.useEffect(()=>{const z=h.current,O=c.current;if(!z||!O||!r)return;const D=p.current,V=[],b=new Set;for(const A of r.files){const H=t.touchByFile.get(A.id),Q=A.path===i;if(O.setColorAt(A.id,Q?Bs.selected:Xv(A)),H){const tt=t.visitsByFile.get(A.id)??1;let lt=Bs[H];A.ghost&&(lt=lt.clone().lerp(Bs.ghost,.45)),Q&&(lt=Bs.selected),V.push({fileId:A.id,target:kv(H,tt),color:lt}),b.add(A.id)}}for(const[A,H]of D)H>.04&&!b.has(A)?V.push({fileId:A,target:0,color:Bs.unvisited}):H<=.04&&!b.has(A)&&D.delete(A);V.forEach((A,H)=>z.setColorAt(H,A.color)),z.count=V.length,z.instanceColor&&(z.instanceColor.needsUpdate=!0),O.instanceColor&&(O.instanceColor.needsUpdate=!0),m.current=V},[r,t,i]),Gt.useEffect(()=>{const z=w.current;if(!z||!r)return;const O=t.recentTargets.map(b=>b.fileId!==void 0?r.files[b.fileId]:void 0).filter(b=>!!b),D=b=>{const A=t.touchByFile.get(b.id),H=t.visitsByFile.get(b.id)??1;return A?kv(A,H):fu},V=x.current;if(V){const b=O[O.length-1];if(b){const A=Wv(b,L);V.position.set(A.x,D(b)+1.6,A.z),V.visible=!0}else V.visible=!1}z.update(O.map(b=>{const A=Wv(b,L);return A.y=D(b)+.4,A}))},[r,t,L]),ft.jsx("div",{className:"city-scene",ref:l,"aria-label":"Attention terrain"})}function Xv(r){if(r.ghost)return Bs.ghost;let t=2166136261;for(let s=0;s<r.path.length;s++)t=Math.imul(t^r.path.charCodeAt(s),16777619);const i=(t>>>0)%1e3/1e3-.5;return Bs.unvisited.clone().offsetHSL(0,0,i*.05)}function Wv(r,t){return new W(r.rect.x+r.rect.w/2-t.cx,0,r.rect.z+r.rect.d/2-t.cz)}function QR(r){const t={name:"",path:"",depth:0,children:new Map,files:[],leafCount:0,angle:0},i=[...r].sort((x,g)=>x.path<g.path?-1:1);for(const x of i){const g=x.path.split("/").filter(Boolean);let P=t;for(const U of g.slice(0,-1)){let L=P.children.get(U);L||(L={name:U,path:P.path?`${P.path}/${U}`:U,depth:P.depth+1,children:new Map,files:[],leafCount:0,angle:0},P.children.set(U,L)),P=L}P.files.push(x)}let s=1;const l=x=>{x.leafCount=x.files.length,x.files.length>0&&(s=Math.max(s,x.depth+1));for(const g of x.children.values())x.leafCount+=l(g);return x.leafCount};l(t);const c=Math.max(t.leafCount,1),h=Math.max(55,Math.sqrt(c)*4),d=h/Math.max(s,1),m=Math.PI*2/c,p={radius:h,leaf:new Map,dirs:[],edges:[]},v=(x,g)=>({x:x*Math.cos(g),z:x*Math.sin(g)}),_=(x,g,P,U)=>{const L=x<1e-6?U:g;let z=U-L;for(;z>Math.PI;)z-=Math.PI*2;for(;z<-Math.PI;)z+=Math.PI*2;const O=[],D=8;for(let V=0;V<=D;V++){const b=V/D,A=b*b*(3-2*b);O.push(v(x+(P-x)*b,L+z*A))}return O};let M=0;const y=x=>{x.angle=(M+x.leafCount/2)*m;const g=[...x.children.values()].sort((U,L)=>U.name<L.name?-1:1),P=[...x.files].sort((U,L)=>U.path<L.path?-1:1);for(const U of g)y(U);for(const U of P){const L=(M+.5)*m;M+=1;const z=v((x.depth+1)*d,L);p.leaf.set(U.id,z),p.edges.push({childFileId:U.id,points:_(x.depth*d,x.angle,(x.depth+1)*d,L)})}if(x.path!==""){const U=v(x.depth*d,x.angle);p.dirs.push({path:x.path,name:x.name,x:U.x,z:U.z,depth:x.depth,fileCount:x.leafCount})}};y(t);const T=new Map,w=x=>{T.set(x.path,x);for(const g of x.children.values())w(g)};w(t);for(const x of p.dirs){const g=T.get(x.path),P=x.path.includes("/")?x.path.slice(0,x.path.lastIndexOf("/")):"",U=T.get(P);p.edges.push({childPath:x.path,points:_(U.depth*d,U.angle,g.depth*d,g.angle)})}return p}const Oi={unvisited:new ne("#434b5c"),ghost:new ne("#2c313d"),...Vx},qv=new ne("#242a36"),hu=.7;function JR(r,t){return(r==="edit"?3.4:r==="read"?2.3:1.3)*(1+.3*Math.log2(Math.max(t,1)))}const $R=["hit","hit","read","edit"];function tC({city:r,playback:t,selectedPath:i,onSelect:s}){const l=Gt.useRef(null),c=Gt.useRef(null),h=Gt.useRef(null),d=Gt.useRef(null),m=Gt.useRef([]),p=Gt.useRef([]),v=Gt.useRef(null),_=Gt.useRef([]),M=Gt.useRef(new Map),y=Gt.useRef(null),T=Gt.useRef(null),w=Gt.useRef(null),x=Gt.useRef(null),g=Gt.useRef(null),P=Gt.useRef(null),U=Gt.useRef(null),L=Gt.useRef(null),z=Gt.useRef(!1),O=Gt.useMemo(()=>r&&r.files.length>0?QR(r.files):null,[r]);return Gt.useEffect(()=>{const D=l.current;if(!D)return;const V=kx();z.current=V;const b=new bx;b.background=Du,x.current=b;const A=new ci(38,D.clientWidth/D.clientHeight,.1,2400);A.position.set(60,110,90),T.current=A;const H=new Fx({antialias:!0});H.setPixelRatio(Math.min(window.devicePixelRatio,2)),H.setSize(D.clientWidth,D.clientHeight),y.current=H,D.appendChild(H.domElement);const Q=new Gx(A,H.domElement);Q.enableDamping=!V,Q.dampingFactor=.08,Q.maxPolarAngle=Math.PI*.44,Q.autoRotate=!V,Q.autoRotateSpeed=-.5,Q.addEventListener("start",()=>{Q.autoRotate=!1}),w.current=Q;const tt=new Dx("#66779b","#161922",1.7);b.add(tt);const lt=new Ux("#b6c5de",1.1);lt.position.set(-60,120,-40),b.add(lt);const it=18,I=new W;let F=null;const J=Y=>{F={x:Y.clientX,y:Y.clientY}},mt=Y=>{if(!F)return;const $=Math.hypot(Y.clientX-F.x,Y.clientY-F.y);if(F=null,$>5)return;const Mt=v.current;if(!Mt||!T.current||!y.current)return;const Rt=y.current.domElement.getBoundingClientRect(),Dt=Y.clientX-Rt.left,Qt=Y.clientY-Rt.top;let me,te=it*it;for(const ce of p.current){const ue=Mt.leaf.get(ce.id);if(!ue||(I.set(ue.x,hu,ue.z).project(T.current),I.z>1))continue;const re=(I.x+1)/2*Rt.width,Ke=(1-I.y)/2*Rt.height,k=(re-Dt)*(re-Dt)+(Ke-Qt)*(Ke-Qt);k<te&&(te=k,me=ce.path)}s(me)};H.domElement.addEventListener("pointerdown",J),H.domElement.addEventListener("pointerup",mt);const pt=()=>{if(!l.current)return;const Y=l.current.clientWidth,$=l.current.clientHeight;Y===0||$===0||(H.setSize(Y,$),A.aspect=Y/$,A.updateProjectionMatrix())},N=new ResizeObserver(pt);N.observe(D);const et=new Lx,ht=new Ce,xt=new bi().setFromEuler(new Bi(-Math.PI/2,0,0)),Tt=()=>{Q.update();const Y=h.current,$=_.current,Mt=M.current,Rt=v.current;if(Y&&Rt&&$.length>0){let Qt=!1;for(let me=0;me<$.length;me++){const te=$[me],ce=Rt.leaf.get(te.fileId);if(!ce)continue;let ue=Mt.get(te.fileId)??0;const re=te.target-ue;Math.abs(re)>.015?(ue=z.current?te.target:ue+re*.12,Mt.set(te.fileId,ue),Qt=!0):ue!==te.target&&(Mt.set(te.fileId,te.target),ue=te.target,Qt=!0),ht.compose(new W(ce.x,.06,ce.z),xt,new W(Math.max(ue,.01)*2,Math.max(ue,.01)*2,1)),Y.setMatrixAt(me,ht)}Qt&&(Y.instanceMatrix.needsUpdate=!0)}const Dt=U.current;if(Dt?.visible){const Qt=et.getElapsedTime(),me=Dt.userData.baseScale,te=z.current?1:1+.1*Math.sin(Qt*2.4);Dt.scale.setScalar(me*te)}H.render(b,A),L.current=requestAnimationFrame(Tt)};return Tt(),()=>{L.current&&cancelAnimationFrame(L.current),H.domElement.removeEventListener("pointerdown",J),H.domElement.removeEventListener("pointerup",mt),N.disconnect(),Q.dispose(),H.dispose(),D.removeChild(H.domElement),b.clear()}},[s]),Gt.useEffect(()=>{const D=x.current;if(!D||(p.current=r?.files??[],v.current=O,_.current=[],M.current=new Map,!r||!O))return;const V=new Zr,b=O.radius*2.3;D.fog=new Nu(Du,b*2.1,b*4.2);const A=new $n(new Gs(b*6,b*6),new xu({color:"#14171e",roughness:1}));A.rotation.x=-Math.PI/2,A.position.y=-.25,V.add(A);const H=new Nx(b*2.4,40,"#1d222c","#181c25");H.material.transparent=!0,H.material.opacity=.4,H.position.y=-.24,V.add(H);const Q=[],tt=[];for(const $ of O.edges){let Mt=0;for(let Rt=0;Rt<$.points.length-1;Rt++)Q.push($.points[Rt].x,.12,$.points[Rt].z),Q.push($.points[Rt+1].x,.12,$.points[Rt+1].z),Mt+=2;tt.push({childPath:$.childPath,childFileId:$.childFileId,vertexCount:Mt})}const lt=new Xn;lt.setAttribute("position",new Nn(Q,3));const it=new Float32Array(Q.length);lt.setAttribute("color",new kn(it,3));const I=new Fp(lt,new Ou({vertexColors:!0,transparent:!0,opacity:.9}));d.current=I,m.current=tt,V.add(I);const F=new Gp(.5,10,8),J=new El({toneMapped:!1}),mt=new xl(F,J,r.files.length);mt.instanceColor=new bl(new Float32Array(r.files.length*3),3);const pt=new Ce;for(const $ of r.files){const Mt=O.leaf.get($.id);if(!Mt)continue;let Rt=Math.min(.24+Math.sqrt(Math.max($.lines,1))*.045,1.05);$.ghost&&(Rt*=.7),pt.compose(new W(Mt.x,hu,Mt.z),new bi,new W(Rt,Rt,Rt)),mt.setMatrixAt($.id,pt),mt.setColorAt($.id,$.ghost?Oi.ghost:Oi.unvisited)}mt.instanceMatrix.needsUpdate=!0,mt.instanceColor&&(mt.instanceColor.needsUpdate=!0),c.current=mt,V.add(mt);const N=new xl(new Gs(1,1),new El({map:jR(),transparent:!0,blending:$r,depthWrite:!1,toneMapped:!1}),r.files.length);N.instanceColor=new bl(new Float32Array(r.files.length*3),3),N.count=0,N.frustumCulled=!1,N.raycast=()=>{},h.current=N,V.add(N);const et=[...O.dirs].filter($=>$.depth<=2&&$.fileCount>=Math.max(3,r.files.length*.015)).sort(($,Mt)=>Mt.fileCount-$.fileCount).slice(0,18);for(const $ of et){const{texture:Mt,aspect:Rt}=ZR($.name),Dt=new Ru(new Au({map:Mt,transparent:!0,depthWrite:!1,toneMapped:!1})),Qt=$.depth===1?2.6:1.9;Dt.scale.set(Qt*Rt*.45,Qt*.45,1),Dt.position.set($.x,1.8,$.z),Dt.raycast=()=>{},V.add(Dt)}const ht=new Ru(new Au({map:Wx(),color:Xp,blending:$r,depthWrite:!1,transparent:!0}));ht.userData.baseScale=Math.max(b*.026,2.2),ht.visible=!1,U.current=ht,V.add(ht);const xt=new qx(1.6);P.current=xt,V.add(xt.object),g.current=V,D.add(V);const Tt=T.current,Y=w.current;return Tt&&Y&&(Tt.position.set(b*.3,b*.66,b*.47),Y.target.set(0,0,0),Y.minDistance=b*.15,Y.maxDistance=b*2.4,Y.update()),()=>{Xx(V),D.remove(V),g.current=null,c.current=null,h.current=null,d.current=null,P.current=null,U.current=null}},[r,O]),Gt.useEffect(()=>{const D=c.current,V=h.current,b=d.current;if(!D||!V||!b||!r||!O)return;const A=M.current,H=[],Q=new Set,tt=new Map;for(const F of r.files){const J=t.touchByFile.get(F.id),mt=F.path===i;let pt=F.ghost?Oi.ghost:Oi.unvisited;if(J){pt=Oi[J],F.ghost&&(pt=pt.clone().lerp(Oi.ghost,.4));const N=t.visitsByFile.get(F.id)??1;H.push({fileId:F.id,target:JR(J,N),color:mt?Oi.selected:Oi[J]}),Q.add(F.id);const et=Yr[J],ht=F.path.split("/");let xt="";for(let Tt=0;Tt<ht.length-1;Tt++)xt=xt?`${xt}/${ht[Tt]}`:ht[Tt],(tt.get(xt)??0)<et&&tt.set(xt,et)}D.setColorAt(F.id,mt?Oi.selected:pt)}for(const[F,J]of A)J>.04&&!Q.has(F)?H.push({fileId:F,target:0,color:Oi.unvisited}):J<=.04&&!Q.has(F)&&A.delete(F);H.forEach((F,J)=>V.setColorAt(J,F.color)),V.count=H.length,V.instanceColor&&(V.instanceColor.needsUpdate=!0),D.instanceColor&&(D.instanceColor.needsUpdate=!0),_.current=H;const lt=b.geometry.getAttribute("color"),it=new ne;let I=0;for(const F of m.current){let J=0;if(F.childFileId!==void 0){const mt=t.touchByFile.get(F.childFileId);J=mt?Yr[mt]:0}else F.childPath&&(J=tt.get(F.childPath)??0);J>0?it.copy(qv).lerp(Oi[$R[J]],.55):it.copy(qv);for(let mt=0;mt<F.vertexCount;mt++)lt.setXYZ(I++,it.r,it.g,it.b)}lt.needsUpdate=!0},[r,O,t,i]),Gt.useEffect(()=>{const D=P.current;if(!D||!r||!O)return;const V=t.recentTargets.map(A=>A.fileId!==void 0?r.files[A.fileId]:void 0).filter(A=>!!(A&&O.leaf.get(A.id))),b=U.current;if(b){const A=V[V.length-1];if(A){const H=O.leaf.get(A.id);b.position.set(H.x,hu+1.7,H.z),b.visible=!0}else b.visible=!1}D.update(V.map(A=>{const H=O.leaf.get(A.id);return new W(H.x,hu+.3,H.z)}))},[r,O,t]),ft.jsx("div",{className:"city-scene",ref:l,"aria-label":"Firefly tree"})}const Yx="mindwalk.sessionFilters";function jx(r,t,i){return!(t.harness&&r.harness!==t.harness||t.hideEmpty&&r.eventCount===0&&r.id!==i)}function eC(){try{const r=localStorage.getItem(Yx);if(r){const t=JSON.parse(r);return{hideEmpty:t.hideEmpty!==!1,harness:typeof t.harness=="string"?t.harness:void 0}}}catch{}return{hideEmpty:!0}}function Yv(r){try{localStorage.setItem(Yx,JSON.stringify(r))}catch{}}const jv=r=>{let t;const i=new Set,s=(p,v)=>{const _=typeof p=="function"?p(t):p;if(!Object.is(_,t)){const M=t;t=v??(typeof _!="object"||_===null)?_:Object.assign({},t,_),i.forEach(y=>y(t,M))}},l=()=>t,d={setState:s,getState:l,getInitialState:()=>m,subscribe:p=>(i.add(p),()=>i.delete(p))},m=t=r(s,l,d);return d},nC=(r=>r?jv(r):jv),iC=r=>r;function aC(r,t=iC){const i=Bc.useSyncExternalStore(r.subscribe,Bc.useCallback(()=>t(r.getState()),[r,t]),Bc.useCallback(()=>t(r.getInitialState()),[r,t]));return Bc.useDebugValue(i),i}const Zv=r=>{const t=nC(r),i=s=>aC(t,s);return Object.assign(i,t),i},sC=(r=>r?Zv(r):Zv),Kv=eC(),rC=sC((r,t)=>({sessions:[],currentSeq:0,view:"tree",loading:!1,hideEmpty:Kv.hideEmpty,harnessFilter:Kv.harness,setView:i=>r({view:i}),setSessions:i=>r({sessions:i}),setActiveSession:i=>r({activeSessionId:i,trace:void 0,city:void 0,currentSeq:0}),setData:(i,s)=>r({trace:i,city:s,currentSeq:Math.max(0,i.events.length-1)}),setCurrentSeq:i=>r({currentSeq:i}),setSelectedPath:i=>r({selectedPath:i}),setLoading:i=>r({loading:i}),setError:i=>r({error:i}),setHideEmpty:i=>{r({hideEmpty:i}),Yv({hideEmpty:i,harness:t().harnessFilter})},setHarnessFilter:i=>{r({harnessFilter:i}),Yv({hideEmpty:t().hideEmpty,harness:i})}})),oC=Gt.memo(function({trace:t,city:i,view:s,onViewChange:l}){const c=t?.stats;return ft.jsxs("div",{className:"hud","aria-hidden":!i,children:[ft.jsxs("div",{className:"hud-left",children:[ft.jsx("div",{className:"hud-repo",children:i?lC(i.repo.root):""}),i?ft.jsxs("div",{className:"hud-commit",children:[ft.jsx("span",{children:i.repo.commit||"worktree"}),i.repo.dirty?ft.jsx("span",{className:"dirty",children:"● dirty"}):null,t?.session.model?ft.jsx("span",{children:t.session.model}):null]}):null,c?ft.jsxs("div",{className:"hud-stats",children:[ft.jsx(qr,{label:"files",value:c.filesInRepo}),ft.jsx(qr,{label:"fovea",value:c.fovea}),ft.jsx(qr,{label:"parafovea",value:c.parafovea}),ft.jsx(qr,{label:"edited",value:c.edited}),ft.jsx(qr,{label:"regression",value:`${Math.round(c.regressionRate*100)}%`}),ft.jsx(qr,{label:"errors",value:`${Math.round(c.errorRate*100)}%`})]}):null]}),i?ft.jsxs("div",{className:"hud-right",children:[ft.jsxs("div",{className:"view-toggle",role:"group","aria-label":"Scene view",children:[ft.jsx("button",{className:s==="tree"?"active":"",onClick:()=>l("tree"),children:"Tree"}),ft.jsx("button",{className:s==="terrain"?"active":"",onClick:()=>l("terrain"),children:"Terrain"})]}),ft.jsxs("div",{className:"legend",children:[ft.jsxs("div",{className:"legend-row",children:[ft.jsx("span",{className:"legend-dot edit"}),ft.jsx("span",{children:"edited"})]}),ft.jsxs("div",{className:"legend-row",children:[ft.jsx("span",{className:"legend-dot read"}),ft.jsx("span",{children:"read"})]}),ft.jsxs("div",{className:"legend-row",children:[ft.jsx("span",{className:"legend-dot hit"}),ft.jsx("span",{children:"search hit"})]}),ft.jsxs("div",{className:"legend-row",children:[ft.jsx("span",{className:"legend-dot unvisited"}),ft.jsx("span",{children:"unvisited"})]}),ft.jsx("div",{className:"legend-note",children:s==="tree"?"glow ∝ depth × revisits":"height ∝ depth × revisits"})]})]}):null]})});function qr({label:r,value:t}){return ft.jsxs("div",{className:"stat",children:[ft.jsx("span",{children:r}),ft.jsx("strong",{children:t})]})}function lC(r){const t=r.replace(/\/+$/,"");return t.slice(t.lastIndexOf("/")+1)}const cC=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),uC=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,i,s)=>s?s.toUpperCase():i.toLowerCase()),Qv=r=>{const t=uC(r);return t.charAt(0).toUpperCase()+t.slice(1)},Zx=(...r)=>r.filter((t,i,s)=>!!t&&t.trim()!==""&&s.indexOf(t)===i).join(" ").trim(),fC=r=>{for(const t in r)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};var hC={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const dC=Gt.forwardRef(({color:r="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:c,iconNode:h,...d},m)=>Gt.createElement("svg",{ref:m,...hC,width:t,height:t,stroke:r,strokeWidth:s?Number(i)*24/Number(t):i,className:Zx("lucide",l),...!c&&!fC(d)&&{"aria-hidden":"true"},...d},[...h.map(([p,v])=>Gt.createElement(p,v)),...Array.isArray(c)?c:[c]]));const Aa=(r,t)=>{const i=Gt.forwardRef(({className:s,...l},c)=>Gt.createElement(dC,{ref:c,iconNode:t,className:Zx(`lucide-${cC(Qv(r))}`,`lucide-${r}`,s),...l}));return i.displayName=Qv(r),i};const pC=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],mC=Aa("eye-off",pC);const gC=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],_C=Aa("eye",gC);const vC=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]],xC=Aa("pause",vC);const SC=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],yC=Aa("play",SC);const MC=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],EC=Aa("refresh-cw",MC);const bC=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],TC=Aa("rotate-ccw",bC);const AC=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],RC=Aa("search",AC);const CC=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],wC=Aa("triangle-alert",CC);const DC=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],UC=Aa("x",DC);function LC({file:r,touch:t,history:i,onClose:s,onJumpTo:l}){const c=r.path.lastIndexOf("/"),h=c>=0?r.path.slice(0,c+1):"",d=c>=0?r.path.slice(c+1):r.path;return ft.jsxs("aside",{className:"inspector","aria-label":`File ${r.path}`,children:[ft.jsxs("div",{className:"inspector-head",children:[ft.jsxs("div",{children:[ft.jsxs("div",{className:"inspector-path",children:[ft.jsx("span",{className:"dir",children:h}),d]}),r.ghost?ft.jsx("span",{className:"ghost-badge",children:"ghost — not in this tree"}):null]}),ft.jsx("button",{className:"icon-btn",onClick:s,title:"Close","aria-label":"Close inspector",children:ft.jsx(UC,{size:15})})]}),ft.jsxs("dl",{className:"inspector-facts",children:[ft.jsxs("div",{children:[ft.jsx("dt",{children:"Touch"}),ft.jsx("dd",{className:t?`touch-${t}`:void 0,children:t??"unvisited"})]}),ft.jsxs("div",{children:[ft.jsx("dt",{children:"Lang"}),ft.jsx("dd",{children:r.lang||"text"})]}),ft.jsxs("div",{children:[ft.jsx("dt",{children:"Lines"}),ft.jsx("dd",{children:r.lines.toLocaleString()})]}),ft.jsxs("div",{children:[ft.jsx("dt",{children:"Bytes"}),ft.jsx("dd",{children:r.bytes.toLocaleString()})]})]}),ft.jsxs("section",{children:[ft.jsxs("p",{className:"eyebrow",children:["Visits · ",i.length]}),ft.jsxs("div",{className:"history-list",children:[i.slice(-14).reverse().map(m=>ft.jsxs("button",{className:"history-row",onClick:()=>l(m.seq),title:m.summary,children:[ft.jsx("span",{className:`action-dot ${m.action}`}),ft.jsx("strong",{children:m.seq}),ft.jsx("span",{children:m.tool}),m.isError?ft.jsx(wC,{className:"history-err",size:13}):ft.jsx("span",{})]},m.seq)),i.length===0?ft.jsx("p",{className:"muted",children:"Not visited yet at this point of the walk. Scrub the timeline forward."}):null]})]})]})}const NC=Gt.memo(function({sessions:t,activeId:i,loading:s,hideEmpty:l,harnessFilter:c,onSelect:h,onRefresh:d,onHideEmptyChange:m,onHarnessFilterChange:p}){const[v,_]=Gt.useState(""),M=Gt.useMemo(()=>[...new Set(t.map(x=>x.harness))].sort(),[t]),y=Gt.useMemo(()=>t.filter(x=>x.eventCount===0).length,[t]),T=c&&M.includes(c)?c:void 0,w=Gt.useMemo(()=>{const x=v.trim().toLowerCase();return t.filter(g=>jx(g,{hideEmpty:l,harness:T},i)?x?`${g.title??""} ${g.id} ${g.gitBranch??""} ${g.harness}`.toLowerCase().includes(x):!0:!1)},[t,v,l,T,i]);return ft.jsxs("aside",{className:"session-rail",children:[ft.jsxs("div",{className:"rail-head",children:[ft.jsxs("h1",{className:"wordmark",children:["mindwalk",ft.jsx("span",{className:"spark",children:"."})]}),ft.jsx("button",{className:"icon-btn",onClick:d,title:"Rescan sessions","aria-label":"Rescan sessions",children:ft.jsx(EC,{size:15})})]}),ft.jsxs("div",{className:"rail-controls",children:[ft.jsxs("label",{className:"rail-filter",children:[ft.jsx(RC,{size:14,"aria-hidden":!0}),ft.jsx("input",{type:"search",placeholder:"Filter sessions",value:v,onChange:x=>_(x.currentTarget.value),"aria-label":"Filter sessions"})]}),M.length>1||y>0?ft.jsxs("div",{className:"rail-chips",role:"group","aria-label":"Session filters",children:[M.length>1?ft.jsxs(ft.Fragment,{children:[ft.jsx("button",{className:T===void 0?"chip active":"chip",onClick:()=>p(void 0),children:"all"}),M.map(x=>ft.jsx("button",{className:T===x?"chip active":"chip",onClick:()=>p(x),children:Jv(x)},x))]}):null,y>0?ft.jsx("button",{className:l?"eye-toggle":"eye-toggle showing",onClick:()=>m(!l),"aria-pressed":!l,title:l?`Show ${y} empty sessions`:`Hide ${y} empty sessions`,"aria-label":l?`Show ${y} empty sessions`:`Hide ${y} empty sessions`,children:l?ft.jsx(mC,{size:13,"aria-hidden":!0}):ft.jsx(_C,{size:13,"aria-hidden":!0})}):null]}):null]}),ft.jsxs("div",{className:"session-list","aria-busy":s,children:[w.map(x=>ft.jsxs("button",{className:x.id===i?"session-row active":"session-row",onClick:()=>h(x.id),children:[ft.jsx("span",{className:"session-title",children:x.title||x.id}),ft.jsxs("span",{className:"session-meta",children:[ft.jsx("span",{className:`harness-badge ${OC(x.harness)}`,children:Jv(x.harness)}),ft.jsxs("span",{children:[x.eventCount," calls",x.gitBranch?` · ${x.gitBranch}`:"",x.endedAt?` · ${PC(x.endedAt)}`:""]})]})]},x.path)),w.length===0?ft.jsx("p",{className:"muted",style:{padding:"10px 8px"},children:"No matching sessions."}):null]}),ft.jsx("div",{className:"rail-foot",children:w.length===t.length?`${t.length} session${t.length===1?"":"s"}`:`${w.length} of ${t.length} sessions`})]})});function Jv(r){return r==="claude-code"?"claude":r}function OC(r){switch(r){case"claude-code":return"claude";case"codex":return"codex";default:return"other"}}function PC(r){const t=new Date(r);if(Number.isNaN(t.getTime()))return"";const i=new Date,s=t.getFullYear()===i.getFullYear(),l=`${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`,c=`${String(t.getHours()).padStart(2,"0")}:${String(t.getMinutes()).padStart(2,"0")}`;return s?`${l} ${c}`:`${t.getFullYear()}-${l}`}const zC=160;function BC({trace:r,currentSeq:t,onChange:i}){const[s,l]=Gt.useState(!1),c=r?.events.length??0,h=Math.max(0,c-1),d=Math.min(t,h),m=r?.events[d];Gt.useEffect(()=>{l(!1)},[r]);const p=Gt.useRef(d),v=Gt.useRef(h);p.current=d,v.current=h,Gt.useEffect(()=>{if(!s||c===0)return;const y=window.setInterval(()=>{i(p.current>=v.current?0:p.current+1)},340);return()=>window.clearInterval(y)},[s,c,i]);const _=Gt.useMemo(()=>{if(!r||c===0)return[];const y=Math.min(zC,c),T=[];for(let w=0;w<y;w++){const x=Math.floor(w*c/y),g=Math.floor((w+1)*c/y),P=new Map;for(let O=x;O<g;O++){const D=r.events[O].action;P.set(D,(P.get(D)??0)+1)}let U="other",L=-1;const z=["edit","verify","read","search","exec","other"];for(const O of z){const D=P.get(O)??0;D>L&&(L=D,U=O)}T.push({count:g-x,dominant:U})}return T},[r,c]),M=Gt.useMemo(()=>_.reduce((y,T)=>Math.max(y,T.count),1),[_]);return ft.jsxs("footer",{className:"deck",children:[ft.jsxs("div",{className:"transport",children:[ft.jsx("button",{className:"icon-btn",onClick:()=>i(0),title:"Restart","aria-label":"Restart playback",children:ft.jsx(TC,{size:15})}),ft.jsxs("button",{className:"play-btn",onClick:()=>l(y=>!y),disabled:c===0,"aria-label":s?"Pause playback":"Play playback",children:[s?ft.jsx(xC,{size:14}):ft.jsx(yC,{size:14}),ft.jsx("span",{children:s?"Pause":"Play"})]})]}),ft.jsxs("div",{className:"strip",children:[ft.jsx("div",{className:"strip-marks","aria-hidden":!0,children:r?.marks.map((y,T)=>ft.jsx("span",{className:`strip-mark ${y.type}`,style:{left:`${Math.min(y.seq,h)/Math.max(h,1)*100}%`},title:y.type==="compaction"?"context compaction":y.note||y.type},`${y.seq}-${y.type}-${T}`))}),ft.jsx("div",{className:"strip-bars","aria-hidden":!0,children:_.map((y,T)=>ft.jsx("span",{className:`strip-bar ${y.dominant}`,style:{height:`${18+y.count/M*82}%`}},T))}),c>0?ft.jsx("div",{className:"strip-playhead",style:{left:`${d/Math.max(h,1)*100}%`},"aria-hidden":!0}):null,ft.jsx("input",{className:"strip-input",type:"range",min:0,max:h,value:d,disabled:c===0,onChange:y=>i(Number(y.currentTarget.value)),"aria-label":"Playback position","aria-valuetext":m?`event ${m.seq}: ${m.tool}`:"empty"})]}),ft.jsxs("div",{className:"readout",children:[ft.jsx("span",{className:"readout-count",children:c>0?`${d+1} / ${c}`:"0 / 0"}),ft.jsx("span",{className:"readout-tool",children:m?ft.jsxs(ft.Fragment,{children:[ft.jsx("span",{className:`action-dot ${m.action}`}),m.tool,m.isError?ft.jsx("span",{className:"err",children:"error"}):null,m.ts?ft.jsx("span",{style:{color:"var(--faint)",fontWeight:420},children:IC(m.ts)}):null]}):"No session"}),ft.jsx("p",{className:"readout-summary",children:m?.summary??"Select a session to start the walk."})]})]})}function IC(r){const t=new Date(r);return Number.isNaN(t.getTime())?"":[t.getHours(),t.getMinutes(),t.getSeconds()].map(i=>String(i).padStart(2,"0")).join(":")}function FC(){const{sessions:r,activeSessionId:t,trace:i,city:s,currentSeq:l,selectedPath:c,view:h,loading:d,error:m,hideEmpty:p,harnessFilter:v,setView:_,setSessions:M,setActiveSession:y,setData:T,setCurrentSeq:w,setSelectedPath:x,setLoading:g,setError:P,setHideEmpty:U,setHarnessFilter:L}=rC(),z=Gt.useRef(!1),O=Gt.useCallback(async()=>{g(!0),P(void 0);try{const A=await fM();M(A);let H;if(!z.current){z.current=!0;const it=new URL(window.location.href).searchParams.get("session")??void 0;it&&A.some(I=>I.id===it)?H=it:it&&console.warn(`session "${it}" not found; falling back to the latest session`)}const Q=t!==void 0&&A.some(it=>it.id===t),tt=(A.find(it=>jx(it,{hideEmpty:p,harness:v}))??A[0])?.id,lt=H??(Q?t:tt);lt&&lt!==t&&y(lt)}catch(A){P(A instanceof Error?A.message:String(A))}finally{g(!1)}},[t,v,p,y,P,g,M]);Gt.useEffect(()=>{O()},[]),Gt.useEffect(()=>{if(!t)return;let A=!1;return g(!0),P(void 0),Promise.all([hM(t),dM(t)]).then(([H,Q])=>{A||(T(H,Q),x(void 0))}).catch(H=>{A||P(H instanceof Error?H.message:String(H))}).finally(()=>{A||g(!1)}),()=>{A=!0}},[t,T,P,g,x]);const D=Gt.useMemo(()=>new mM(i,s),[i,s]),V=Gt.useMemo(()=>D.snapshotAt(l),[D,l]),b=Gt.useMemo(()=>c?s?.files.find(A=>A.path===c):void 0,[s,c]);return ft.jsxs("main",{className:"app-frame",children:[ft.jsx(NC,{sessions:r,activeId:t,loading:d,hideEmpty:p,harnessFilter:v,onSelect:y,onRefresh:O,onHideEmptyChange:U,onHarnessFilterChange:L}),ft.jsxs("section",{className:"stage",children:[ft.jsxs("div",{className:"viewport",children:[h==="tree"?ft.jsx(tC,{city:s,playback:V,selectedPath:c,onSelect:x}):ft.jsx(KR,{city:s,playback:V,selectedPath:c,onSelect:x}),ft.jsx(oC,{trace:i,city:s,view:h,onViewChange:_}),b?ft.jsx(LC,{file:b,touch:V.touchByPath.get(b.path),history:V.historyByPath.get(b.path)??[],onClose:()=>x(void 0),onJumpTo:w}):null,!d&&r.length===0?ft.jsx("div",{className:"empty-stage",children:ft.jsxs("div",{className:"card",children:[ft.jsx("h2",{children:"No sessions found"}),ft.jsxs("p",{children:["mindwalk scans ",ft.jsx("code",{children:"~/.claude/projects"})," and ",ft.jsx("code",{children:"~/.codex/sessions"})," for agent traces. Run a session there, then refresh."]})]})}):null,d?ft.jsx("div",{className:"toast",children:"Reading trace…"}):null,m?ft.jsx("div",{className:"toast error",children:m}):null]}),ft.jsx(BC,{trace:i,currentSeq:l,onChange:w})]})]})}uM.createRoot(document.getElementById("root")).render(ft.jsx(Gt.StrictMode,{children:ft.jsx(FC,{})}));
//# sourceMappingURL=index-DA1EvtO6.js.map
