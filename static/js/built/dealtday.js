(function(M,Y,t){'use strict';function T(b){return function(){var a=arguments[0],c;c="["+(b?b+":":"")+a+"] http://errors.angularjs.org/1.3.8/"+(b?b+"/":"")+a;for(a=1;a<arguments.length;a++){c=c+(1==a?"?":"&")+"p"+(a-1)+"=";var d=encodeURIComponent,e;e=arguments[a];e="function"==typeof e?e.toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof e?"undefined":"string"!=typeof e?JSON.stringify(e):e;c+=d(e)}return Error(c)}}function Ta(b){if(null==b||Ua(b))return!1;var a=b.length;return b.nodeType===
na&&a?!0:F(b)||x(b)||0===a||"number"===typeof a&&0<a&&a-1 in b}function s(b,a,c){var d,e;if(b)if(G(b))for(d in b)"prototype"==d||"length"==d||"name"==d||b.hasOwnProperty&&!b.hasOwnProperty(d)||a.call(c,b[d],d,b);else if(x(b)||Ta(b)){var f="object"!==typeof b;d=0;for(e=b.length;d<e;d++)(f||d in b)&&a.call(c,b[d],d,b)}else if(b.forEach&&b.forEach!==s)b.forEach(a,c,b);else for(d in b)b.hasOwnProperty(d)&&a.call(c,b[d],d,b);return b}function Ed(b,a,c){for(var d=Object.keys(b).sort(),e=0;e<d.length;e++)a.call(c,
b[d[e]],d[e]);return d}function kc(b){return function(a,c){b(c,a)}}function Fd(){return++nb}function lc(b,a){a?b.$$hashKey=a:delete b.$$hashKey}function z(b){for(var a=b.$$hashKey,c=1,d=arguments.length;c<d;c++){var e=arguments[c];if(e)for(var f=Object.keys(e),g=0,h=f.length;g<h;g++){var l=f[g];b[l]=e[l]}}lc(b,a);return b}function ba(b){return parseInt(b,10)}function C(){}function oa(b){return b}function da(b){return function(){return b}}function D(b){return"undefined"===typeof b}function y(b){return"undefined"!==
typeof b}function H(b){return null!==b&&"object"===typeof b}function F(b){return"string"===typeof b}function V(b){return"number"===typeof b}function pa(b){return"[object Date]"===Da.call(b)}function G(b){return"function"===typeof b}function ob(b){return"[object RegExp]"===Da.call(b)}function Ua(b){return b&&b.window===b}function Va(b){return b&&b.$evalAsync&&b.$watch}function Wa(b){return"boolean"===typeof b}function mc(b){return!(!b||!(b.nodeName||b.prop&&b.attr&&b.find))}function Gd(b){var a={};
b=b.split(",");var c;for(c=0;c<b.length;c++)a[b[c]]=!0;return a}function ua(b){return Q(b.nodeName||b[0]&&b[0].nodeName)}function Xa(b,a){var c=b.indexOf(a);0<=c&&b.splice(c,1);return a}function Ea(b,a,c,d){if(Ua(b)||Va(b))throw Ka("cpws");if(a){if(b===a)throw Ka("cpi");c=c||[];d=d||[];if(H(b)){var e=c.indexOf(b);if(-1!==e)return d[e];c.push(b);d.push(a)}if(x(b))for(var f=a.length=0;f<b.length;f++)e=Ea(b[f],null,c,d),H(b[f])&&(c.push(b[f]),d.push(e)),a.push(e);else{var g=a.$$hashKey;x(a)?a.length=
0:s(a,function(b,c){delete a[c]});for(f in b)b.hasOwnProperty(f)&&(e=Ea(b[f],null,c,d),H(b[f])&&(c.push(b[f]),d.push(e)),a[f]=e);lc(a,g)}}else if(a=b)x(b)?a=Ea(b,[],c,d):pa(b)?a=new Date(b.getTime()):ob(b)?(a=new RegExp(b.source,b.toString().match(/[^\/]*$/)[0]),a.lastIndex=b.lastIndex):H(b)&&(e=Object.create(Object.getPrototypeOf(b)),a=Ea(b,e,c,d));return a}function qa(b,a){if(x(b)){a=a||[];for(var c=0,d=b.length;c<d;c++)a[c]=b[c]}else if(H(b))for(c in a=a||{},b)if("$"!==c.charAt(0)||"$"!==c.charAt(1))a[c]=
b[c];return a||b}function fa(b,a){if(b===a)return!0;if(null===b||null===a)return!1;if(b!==b&&a!==a)return!0;var c=typeof b,d;if(c==typeof a&&"object"==c)if(x(b)){if(!x(a))return!1;if((c=b.length)==a.length){for(d=0;d<c;d++)if(!fa(b[d],a[d]))return!1;return!0}}else{if(pa(b))return pa(a)?fa(b.getTime(),a.getTime()):!1;if(ob(b)&&ob(a))return b.toString()==a.toString();if(Va(b)||Va(a)||Ua(b)||Ua(a)||x(a))return!1;c={};for(d in b)if("$"!==d.charAt(0)&&!G(b[d])){if(!fa(b[d],a[d]))return!1;c[d]=!0}for(d in a)if(!c.hasOwnProperty(d)&&
"$"!==d.charAt(0)&&a[d]!==t&&!G(a[d]))return!1;return!0}return!1}function Ya(b,a,c){return b.concat(Za.call(a,c))}function nc(b,a){var c=2<arguments.length?Za.call(arguments,2):[];return!G(a)||a instanceof RegExp?a:c.length?function(){return arguments.length?a.apply(b,Ya(c,arguments,0)):a.apply(b,c)}:function(){return arguments.length?a.apply(b,arguments):a.call(b)}}function Hd(b,a){var c=a;"string"===typeof b&&"$"===b.charAt(0)&&"$"===b.charAt(1)?c=t:Ua(a)?c="$WINDOW":a&&Y===a?c="$DOCUMENT":Va(a)&&
(c="$SCOPE");return c}function $a(b,a){if("undefined"===typeof b)return t;V(a)||(a=a?2:null);return JSON.stringify(b,Hd,a)}function oc(b){return F(b)?JSON.parse(b):b}function va(b){b=B(b).clone();try{b.empty()}catch(a){}var c=B("<div>").append(b).html();try{return b[0].nodeType===pb?Q(c):c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return"<"+Q(b)})}catch(d){return Q(c)}}function pc(b){try{return decodeURIComponent(b)}catch(a){}}function qc(b){var a={},c,d;s((b||"").split("&"),function(b){b&&
(c=b.replace(/\+/g,"%20").split("="),d=pc(c[0]),y(d)&&(b=y(c[1])?pc(c[1]):!0,rc.call(a,d)?x(a[d])?a[d].push(b):a[d]=[a[d],b]:a[d]=b))});return a}function Nb(b){var a=[];s(b,function(b,d){x(b)?s(b,function(b){a.push(Fa(d,!0)+(!0===b?"":"="+Fa(b,!0)))}):a.push(Fa(d,!0)+(!0===b?"":"="+Fa(b,!0)))});return a.length?a.join("&"):""}function qb(b){return Fa(b,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function Fa(b,a){return encodeURIComponent(b).replace(/%40/gi,"@").replace(/%3A/gi,
":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,a?"%20":"+")}function Id(b,a){var c,d,e=rb.length;b=B(b);for(d=0;d<e;++d)if(c=rb[d]+a,F(c=b.attr(c)))return c;return null}function Jd(b,a){var c,d,e={};s(rb,function(a){a+="app";!c&&b.hasAttribute&&b.hasAttribute(a)&&(c=b,d=b.getAttribute(a))});s(rb,function(a){a+="app";var e;!c&&(e=b.querySelector("["+a.replace(":","\\:")+"]"))&&(c=e,d=e.getAttribute(a))});c&&(e.strictDi=null!==Id(c,"strict-di"),a(c,d?[d]:[],e))}function sc(b,
a,c){H(c)||(c={});c=z({strictDi:!1},c);var d=function(){b=B(b);if(b.injector()){var d=b[0]===Y?"document":va(b);throw Ka("btstrpd",d.replace(/</,"&lt;").replace(/>/,"&gt;"));}a=a||[];a.unshift(["$provide",function(a){a.value("$rootElement",b)}]);c.debugInfoEnabled&&a.push(["$compileProvider",function(a){a.debugInfoEnabled(!0)}]);a.unshift("ng");d=Ob(a,c.strictDi);d.invoke(["$rootScope","$rootElement","$compile","$injector",function(a,b,c,d){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return d},
e=/^NG_ENABLE_DEBUG_INFO!/,f=/^NG_DEFER_BOOTSTRAP!/;M&&e.test(M.name)&&(c.debugInfoEnabled=!0,M.name=M.name.replace(e,""));if(M&&!f.test(M.name))return d();M.name=M.name.replace(f,"");ga.resumeBootstrap=function(b){s(b,function(b){a.push(b)});d()}}function Kd(){M.name="NG_ENABLE_DEBUG_INFO!"+M.name;M.location.reload()}function Ld(b){b=ga.element(b).injector();if(!b)throw Ka("test");return b.get("$$testability")}function tc(b,a){a=a||"_";return b.replace(Md,function(b,d){return(d?a:"")+b.toLowerCase()})}
function Nd(){var b;uc||((ra=M.jQuery)&&ra.fn.on?(B=ra,z(ra.fn,{scope:La.scope,isolateScope:La.isolateScope,controller:La.controller,injector:La.injector,inheritedData:La.inheritedData}),b=ra.cleanData,ra.cleanData=function(a){var c;if(Pb)Pb=!1;else for(var d=0,e;null!=(e=a[d]);d++)(c=ra._data(e,"events"))&&c.$destroy&&ra(e).triggerHandler("$destroy");b(a)}):B=R,ga.element=B,uc=!0)}function Qb(b,a,c){if(!b)throw Ka("areq",a||"?",c||"required");return b}function sb(b,a,c){c&&x(b)&&(b=b[b.length-1]);
Qb(G(b),a,"not a function, got "+(b&&"object"===typeof b?b.constructor.name||"Object":typeof b));return b}function Ma(b,a){if("hasOwnProperty"===b)throw Ka("badname",a);}function vc(b,a,c){if(!a)return b;a=a.split(".");for(var d,e=b,f=a.length,g=0;g<f;g++)d=a[g],b&&(b=(e=b)[d]);return!c&&G(b)?nc(e,b):b}function tb(b){var a=b[0];b=b[b.length-1];var c=[a];do{a=a.nextSibling;if(!a)break;c.push(a)}while(a!==b);return B(c)}function ha(){return Object.create(null)}function Od(b){function a(a,b,c){return a[b]||
(a[b]=c())}var c=T("$injector"),d=T("ng");b=a(b,"angular",Object);b.$$minErr=b.$$minErr||T;return a(b,"module",function(){var b={};return function(f,g,h){if("hasOwnProperty"===f)throw d("badname","module");g&&b.hasOwnProperty(f)&&(b[f]=null);return a(b,f,function(){function a(c,d,e,f){f||(f=b);return function(){f[e||"push"]([c,d,arguments]);return u}}if(!g)throw c("nomod",f);var b=[],d=[],e=[],q=a("$injector","invoke","push",d),u={_invokeQueue:b,_configBlocks:d,_runBlocks:e,requires:g,name:f,provider:a("$provide",
"provider"),factory:a("$provide","factory"),service:a("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),animation:a("$animateProvider","register"),filter:a("$filterProvider","register"),controller:a("$controllerProvider","register"),directive:a("$compileProvider","directive"),config:q,run:function(a){e.push(a);return this}};h&&q(h);return u})}})}function Pd(b){z(b,{bootstrap:sc,copy:Ea,extend:z,equals:fa,element:B,forEach:s,injector:Ob,noop:C,bind:nc,toJson:$a,
fromJson:oc,identity:oa,isUndefined:D,isDefined:y,isString:F,isFunction:G,isObject:H,isNumber:V,isElement:mc,isArray:x,version:Qd,isDate:pa,lowercase:Q,uppercase:ub,callbacks:{counter:0},getTestability:Ld,$$minErr:T,$$csp:ab,reloadWithDebugInfo:Kd});bb=Od(M);try{bb("ngLocale")}catch(a){bb("ngLocale",[]).provider("$locale",Rd)}bb("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:Sd});a.provider("$compile",wc).directive({a:Td,input:xc,textarea:xc,form:Ud,script:Vd,select:Wd,style:Xd,
option:Yd,ngBind:Zd,ngBindHtml:$d,ngBindTemplate:ae,ngClass:be,ngClassEven:ce,ngClassOdd:de,ngCloak:ee,ngController:fe,ngForm:ge,ngHide:he,ngIf:ie,ngInclude:je,ngInit:ke,ngNonBindable:le,ngPluralize:me,ngRepeat:ne,ngShow:oe,ngStyle:pe,ngSwitch:qe,ngSwitchWhen:re,ngSwitchDefault:se,ngOptions:te,ngTransclude:ue,ngModel:ve,ngList:we,ngChange:xe,pattern:yc,ngPattern:yc,required:zc,ngRequired:zc,minlength:Ac,ngMinlength:Ac,maxlength:Bc,ngMaxlength:Bc,ngValue:ye,ngModelOptions:ze}).directive({ngInclude:Ae}).directive(vb).directive(Cc);
a.provider({$anchorScroll:Be,$animate:Ce,$browser:De,$cacheFactory:Ee,$controller:Fe,$document:Ge,$exceptionHandler:He,$filter:Dc,$interpolate:Ie,$interval:Je,$http:Ke,$httpBackend:Le,$location:Me,$log:Ne,$parse:Oe,$rootScope:Pe,$q:Qe,$$q:Re,$sce:Se,$sceDelegate:Te,$sniffer:Ue,$templateCache:Ve,$templateRequest:We,$$testability:Xe,$timeout:Ye,$window:Ze,$$rAF:$e,$$asyncCallback:af,$$jqLite:bf})}])}function cb(b){return b.replace(cf,function(a,b,d,e){return e?d.toUpperCase():d}).replace(df,"Moz$1")}
function Ec(b){b=b.nodeType;return b===na||!b||9===b}function Fc(b,a){var c,d,e=a.createDocumentFragment(),f=[];if(Rb.test(b)){c=c||e.appendChild(a.createElement("div"));d=(ef.exec(b)||["",""])[1].toLowerCase();d=ia[d]||ia._default;c.innerHTML=d[1]+b.replace(ff,"<$1></$2>")+d[2];for(d=d[0];d--;)c=c.lastChild;f=Ya(f,c.childNodes);c=e.firstChild;c.textContent=""}else f.push(a.createTextNode(b));e.textContent="";e.innerHTML="";s(f,function(a){e.appendChild(a)});return e}function R(b){if(b instanceof
R)return b;var a;F(b)&&(b=U(b),a=!0);if(!(this instanceof R)){if(a&&"<"!=b.charAt(0))throw Sb("nosel");return new R(b)}if(a){a=Y;var c;b=(c=gf.exec(b))?[a.createElement(c[1])]:(c=Fc(b,a))?c.childNodes:[]}Gc(this,b)}function Tb(b){return b.cloneNode(!0)}function wb(b,a){a||xb(b);if(b.querySelectorAll)for(var c=b.querySelectorAll("*"),d=0,e=c.length;d<e;d++)xb(c[d])}function Hc(b,a,c,d){if(y(d))throw Sb("offargs");var e=(d=yb(b))&&d.events,f=d&&d.handle;if(f)if(a)s(a.split(" "),function(a){if(y(c)){var d=
e[a];Xa(d||[],c);if(d&&0<d.length)return}b.removeEventListener(a,f,!1);delete e[a]});else for(a in e)"$destroy"!==a&&b.removeEventListener(a,f,!1),delete e[a]}function xb(b,a){var c=b.ng339,d=c&&zb[c];d&&(a?delete d.data[a]:(d.handle&&(d.events.$destroy&&d.handle({},"$destroy"),Hc(b)),delete zb[c],b.ng339=t))}function yb(b,a){var c=b.ng339,c=c&&zb[c];a&&!c&&(b.ng339=c=++hf,c=zb[c]={events:{},data:{},handle:t});return c}function Ub(b,a,c){if(Ec(b)){var d=y(c),e=!d&&a&&!H(a),f=!a;b=(b=yb(b,!e))&&b.data;
if(d)b[a]=c;else{if(f)return b;if(e)return b&&b[a];z(b,a)}}}function Ab(b,a){return b.getAttribute?-1<(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+a+" "):!1}function Bb(b,a){a&&b.setAttribute&&s(a.split(" "),function(a){b.setAttribute("class",U((" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+U(a)+" "," ")))})}function Cb(b,a){if(a&&b.setAttribute){var c=(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");s(a.split(" "),function(a){a=
U(a);-1===c.indexOf(" "+a+" ")&&(c+=a+" ")});b.setAttribute("class",U(c))}}function Gc(b,a){if(a)if(a.nodeType)b[b.length++]=a;else{var c=a.length;if("number"===typeof c&&a.window!==a){if(c)for(var d=0;d<c;d++)b[b.length++]=a[d]}else b[b.length++]=a}}function Ic(b,a){return Db(b,"$"+(a||"ngController")+"Controller")}function Db(b,a,c){9==b.nodeType&&(b=b.documentElement);for(a=x(a)?a:[a];b;){for(var d=0,e=a.length;d<e;d++)if((c=B.data(b,a[d]))!==t)return c;b=b.parentNode||11===b.nodeType&&b.host}}
function Jc(b){for(wb(b,!0);b.firstChild;)b.removeChild(b.firstChild)}function Kc(b,a){a||wb(b);var c=b.parentNode;c&&c.removeChild(b)}function jf(b,a){a=a||M;if("complete"===a.document.readyState)a.setTimeout(b);else B(a).on("load",b)}function Lc(b,a){var c=Eb[a.toLowerCase()];return c&&Mc[ua(b)]&&c}function kf(b,a){var c=b.nodeName;return("INPUT"===c||"TEXTAREA"===c)&&Nc[a]}function lf(b,a){var c=function(c,e){c.isDefaultPrevented=function(){return c.defaultPrevented};var f=a[e||c.type],g=f?f.length:
0;if(g){if(D(c.immediatePropagationStopped)){var h=c.stopImmediatePropagation;c.stopImmediatePropagation=function(){c.immediatePropagationStopped=!0;c.stopPropagation&&c.stopPropagation();h&&h.call(c)}}c.isImmediatePropagationStopped=function(){return!0===c.immediatePropagationStopped};1<g&&(f=qa(f));for(var l=0;l<g;l++)c.isImmediatePropagationStopped()||f[l].call(b,c)}};c.elem=b;return c}function bf(){this.$get=function(){return z(R,{hasClass:function(b,a){b.attr&&(b=b[0]);return Ab(b,a)},addClass:function(b,
a){b.attr&&(b=b[0]);return Cb(b,a)},removeClass:function(b,a){b.attr&&(b=b[0]);return Bb(b,a)}})}}function Na(b,a){var c=b&&b.$$hashKey;if(c)return"function"===typeof c&&(c=b.$$hashKey()),c;c=typeof b;return c="function"==c||"object"==c&&null!==b?b.$$hashKey=c+":"+(a||Fd)():c+":"+b}function db(b,a){if(a){var c=0;this.nextUid=function(){return++c}}s(b,this.put,this)}function mf(b){return(b=b.toString().replace(Oc,"").match(Pc))?"function("+(b[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function Vb(b,
a,c){var d;if("function"===typeof b){if(!(d=b.$inject)){d=[];if(b.length){if(a)throw F(c)&&c||(c=b.name||mf(b)),Ga("strictdi",c);a=b.toString().replace(Oc,"");a=a.match(Pc);s(a[1].split(nf),function(a){a.replace(of,function(a,b,c){d.push(c)})})}b.$inject=d}}else x(b)?(a=b.length-1,sb(b[a],"fn"),d=b.slice(0,a)):sb(b,"fn",!0);return d}function Ob(b,a){function c(a){return function(b,c){if(H(b))s(b,kc(a));else return a(b,c)}}function d(a,b){Ma(a,"service");if(G(b)||x(b))b=q.instantiate(b);if(!b.$get)throw Ga("pget",
a);return p[a+"Provider"]=b}function e(a,b){return function(){var c=r.invoke(b,this);if(D(c))throw Ga("undef",a);return c}}function f(a,b,c){return d(a,{$get:!1!==c?e(a,b):b})}function g(a){var b=[],c;s(a,function(a){function d(a){var b,c;b=0;for(c=a.length;b<c;b++){var e=a[b],f=q.get(e[0]);f[e[1]].apply(f,e[2])}}if(!m.get(a)){m.put(a,!0);try{F(a)?(c=bb(a),b=b.concat(g(c.requires)).concat(c._runBlocks),d(c._invokeQueue),d(c._configBlocks)):G(a)?b.push(q.invoke(a)):x(a)?b.push(q.invoke(a)):sb(a,"module")}catch(e){throw x(a)&&
(a=a[a.length-1]),e.message&&e.stack&&-1==e.stack.indexOf(e.message)&&(e=e.message+"\n"+e.stack),Ga("modulerr",a,e.stack||e.message||e);}}});return b}function h(b,c){function d(a,e){if(b.hasOwnProperty(a)){if(b[a]===l)throw Ga("cdep",a+" <- "+k.join(" <- "));return b[a]}try{return k.unshift(a),b[a]=l,b[a]=c(a,e)}catch(f){throw b[a]===l&&delete b[a],f;}finally{k.shift()}}function e(b,c,f,g){"string"===typeof f&&(g=f,f=null);var h=[],k=Vb(b,a,g),l,q,p;q=0;for(l=k.length;q<l;q++){p=k[q];if("string"!==
typeof p)throw Ga("itkn",p);h.push(f&&f.hasOwnProperty(p)?f[p]:d(p,g))}x(b)&&(b=b[l]);return b.apply(c,h)}return{invoke:e,instantiate:function(a,b,c){var d=Object.create((x(a)?a[a.length-1]:a).prototype);a=e(a,d,b,c);return H(a)||G(a)?a:d},get:d,annotate:Vb,has:function(a){return p.hasOwnProperty(a+"Provider")||b.hasOwnProperty(a)}}}a=!0===a;var l={},k=[],m=new db([],!0),p={$provide:{provider:c(d),factory:c(f),service:c(function(a,b){return f(a,["$injector",function(a){return a.instantiate(b)}])}),
value:c(function(a,b){return f(a,da(b),!1)}),constant:c(function(a,b){Ma(a,"constant");p[a]=b;u[a]=b}),decorator:function(a,b){var c=q.get(a+"Provider"),d=c.$get;c.$get=function(){var a=r.invoke(d,c);return r.invoke(b,null,{$delegate:a})}}}},q=p.$injector=h(p,function(a,b){ga.isString(b)&&k.push(b);throw Ga("unpr",k.join(" <- "));}),u={},r=u.$injector=h(u,function(a,b){var c=q.get(a+"Provider",b);return r.invoke(c.$get,c,t,a)});s(g(b),function(a){r.invoke(a||C)});return r}function Be(){var b=!0;this.disableAutoScrolling=
function(){b=!1};this.$get=["$window","$location","$rootScope",function(a,c,d){function e(a){var b=null;Array.prototype.some.call(a,function(a){if("a"===ua(a))return b=a,!0});return b}function f(b){if(b){b.scrollIntoView();var c;c=g.yOffset;G(c)?c=c():mc(c)?(c=c[0],c="fixed"!==a.getComputedStyle(c).position?0:c.getBoundingClientRect().bottom):V(c)||(c=0);c&&(b=b.getBoundingClientRect().top,a.scrollBy(0,b-c))}else a.scrollTo(0,0)}function g(){var a=c.hash(),b;a?(b=h.getElementById(a))?f(b):(b=e(h.getElementsByName(a)))?
f(b):"top"===a&&f(null):f(null)}var h=a.document;b&&d.$watch(function(){return c.hash()},function(a,b){a===b&&""===a||jf(function(){d.$evalAsync(g)})});return g}]}function af(){this.$get=["$$rAF","$timeout",function(b,a){return b.supported?function(a){return b(a)}:function(b){return a(b,0,!1)}}]}function pf(b,a,c,d){function e(a){try{a.apply(null,Za.call(arguments,1))}finally{if(v--,0===v)for(;w.length;)try{w.pop()()}catch(b){c.error(b)}}}function f(a,b){(function N(){s(L,function(a){a()});J=b(N,
a)})()}function g(){h();l()}function h(){A=b.history.state;A=D(A)?null:A;fa(A,I)&&(A=I);I=A}function l(){if(E!==m.url()||P!==A)E=m.url(),P=A,s(W,function(a){a(m.url(),A)})}function k(a){try{return decodeURIComponent(a)}catch(b){return a}}var m=this,p=a[0],q=b.location,u=b.history,r=b.setTimeout,O=b.clearTimeout,n={};m.isMock=!1;var v=0,w=[];m.$$completeOutstandingRequest=e;m.$$incOutstandingRequestCount=function(){v++};m.notifyWhenNoOutstandingRequests=function(a){s(L,function(a){a()});0===v?a():
w.push(a)};var L=[],J;m.addPollFn=function(a){D(J)&&f(100,r);L.push(a);return a};var A,P,E=q.href,S=a.find("base"),X=null;h();P=A;m.url=function(a,c,e){D(e)&&(e=null);q!==b.location&&(q=b.location);u!==b.history&&(u=b.history);if(a){var f=P===e;if(E===a&&(!d.history||f))return m;var g=E&&Ha(E)===Ha(a);E=a;P=e;!d.history||g&&f?(g||(X=a),c?q.replace(a):g?(c=q,e=a.indexOf("#"),a=-1===e?"":a.substr(e+1),c.hash=a):q.href=a):(u[c?"replaceState":"pushState"](e,"",a),h(),P=A);return m}return X||q.href.replace(/%27/g,
"'")};m.state=function(){return A};var W=[],wa=!1,I=null;m.onUrlChange=function(a){if(!wa){if(d.history)B(b).on("popstate",g);B(b).on("hashchange",g);wa=!0}W.push(a);return a};m.$$checkUrlChange=l;m.baseHref=function(){var a=S.attr("href");return a?a.replace(/^(https?\:)?\/\/[^\/]*/,""):""};var ea={},y="",ca=m.baseHref();m.cookies=function(a,b){var d,e,f,g;if(a)b===t?p.cookie=encodeURIComponent(a)+"=;path="+ca+";expires=Thu, 01 Jan 1970 00:00:00 GMT":F(b)&&(d=(p.cookie=encodeURIComponent(a)+"="+encodeURIComponent(b)+
";path="+ca).length+1,4096<d&&c.warn("Cookie '"+a+"' possibly not set or overflowed because it was too large ("+d+" > 4096 bytes)!"));else{if(p.cookie!==y)for(y=p.cookie,d=y.split("; "),ea={},f=0;f<d.length;f++)e=d[f],g=e.indexOf("="),0<g&&(a=k(e.substring(0,g)),ea[a]===t&&(ea[a]=k(e.substring(g+1))));return ea}};m.defer=function(a,b){var c;v++;c=r(function(){delete n[c];e(a)},b||0);n[c]=!0;return c};m.defer.cancel=function(a){return n[a]?(delete n[a],O(a),e(C),!0):!1}}function De(){this.$get=["$window",
"$log","$sniffer","$document",function(b,a,c,d){return new pf(b,d,a,c)}]}function Ee(){this.$get=function(){function b(b,d){function e(a){a!=p&&(q?q==a&&(q=a.n):q=a,f(a.n,a.p),f(a,p),p=a,p.n=null)}function f(a,b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(b in a)throw T("$cacheFactory")("iid",b);var g=0,h=z({},d,{id:b}),l={},k=d&&d.capacity||Number.MAX_VALUE,m={},p=null,q=null;return a[b]={put:function(a,b){if(k<Number.MAX_VALUE){var c=m[a]||(m[a]={key:a});e(c)}if(!D(b))return a in l||g++,l[a]=b,g>k&&this.remove(q.key),
b},get:function(a){if(k<Number.MAX_VALUE){var b=m[a];if(!b)return;e(b)}return l[a]},remove:function(a){if(k<Number.MAX_VALUE){var b=m[a];if(!b)return;b==p&&(p=b.p);b==q&&(q=b.n);f(b.n,b.p);delete m[a]}delete l[a];g--},removeAll:function(){l={};g=0;m={};p=q=null},destroy:function(){m=h=l=null;delete a[b]},info:function(){return z({},h,{size:g})}}}var a={};b.info=function(){var b={};s(a,function(a,e){b[e]=a.info()});return b};b.get=function(b){return a[b]};return b}}function Ve(){this.$get=["$cacheFactory",
function(b){return b("templates")}]}function wc(b,a){function c(a,b){var c=/^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/,d={};s(a,function(a,e){var f=a.match(c);if(!f)throw ja("iscp",b,e,a);d[e]={mode:f[1][0],collection:"*"===f[2],optional:"?"===f[3],attrName:f[4]||e}});return d}var d={},e=/^\s*directive\:\s*([\w\-]+)\s+(.*)$/,f=/(([\w\-]+)(?:\:([^;]+))?;?)/,g=Gd("ngSrc,ngSrcset,src,srcset"),h=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,l=/^(on[a-z]+|formaction)$/;this.directive=function p(a,e){Ma(a,"directive");F(a)?(Qb(e,
"directiveFactory"),d.hasOwnProperty(a)||(d[a]=[],b.factory(a+"Directive",["$injector","$exceptionHandler",function(b,e){var f=[];s(d[a],function(d,g){try{var h=b.invoke(d);G(h)?h={compile:da(h)}:!h.compile&&h.link&&(h.compile=da(h.link));h.priority=h.priority||0;h.index=g;h.name=h.name||a;h.require=h.require||h.controller&&h.name;h.restrict=h.restrict||"EA";H(h.scope)&&(h.$$isolateBindings=c(h.scope,h.name));f.push(h)}catch(l){e(l)}});return f}])),d[a].push(e)):s(a,kc(p));return this};this.aHrefSanitizationWhitelist=
function(b){return y(b)?(a.aHrefSanitizationWhitelist(b),this):a.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(b){return y(b)?(a.imgSrcSanitizationWhitelist(b),this):a.imgSrcSanitizationWhitelist()};var k=!0;this.debugInfoEnabled=function(a){return y(a)?(k=a,this):k};this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$document","$sce","$animate","$$sanitizeUri",function(a,b,c,r,O,n,v,w,L,J,A){function P(a,b){try{a.addClass(b)}catch(c){}}
function E(a,b,c,d,e){a instanceof B||(a=B(a));s(a,function(b,c){b.nodeType==pb&&b.nodeValue.match(/\S+/)&&(a[c]=B(b).wrap("<span></span>").parent()[0])});var f=S(a,b,a,c,d,e);E.$$addScopeClass(a);var g=null;return function(b,c,d){Qb(b,"scope");d=d||{};var e=d.parentBoundTranscludeFn,h=d.transcludeControllers;d=d.futureParentElement;e&&e.$$boundTransclude&&(e=e.$$boundTransclude);g||(g=(d=d&&d[0])?"foreignobject"!==ua(d)&&d.toString().match(/SVG/)?"svg":"html":"html");d="html"!==g?B(Wb(g,B("<div>").append(a).html())):
c?La.clone.call(a):a;if(h)for(var l in h)d.data("$"+l+"Controller",h[l].instance);E.$$addScopeInfo(d,b);c&&c(d,b);f&&f(b,d,d,e);return d}}function S(a,b,c,d,e,f){function g(a,c,d,e){var f,l,k,q,p,n,w;if(r)for(w=Array(c.length),q=0;q<h.length;q+=3)f=h[q],w[f]=c[f];else w=c;q=0;for(p=h.length;q<p;)l=w[h[q++]],c=h[q++],f=h[q++],c?(c.scope?(k=a.$new(),E.$$addScopeInfo(B(l),k)):k=a,n=c.transcludeOnThisElement?X(a,c.transclude,e,c.elementTranscludeOnThisElement):!c.templateOnThisElement&&e?e:!e&&b?X(a,
b):null,c(f,k,l,d,n)):f&&f(a,l.childNodes,t,e)}for(var h=[],l,k,q,p,r,n=0;n<a.length;n++){l=new Xb;k=W(a[n],[],l,0===n?d:t,e);(f=k.length?ea(k,a[n],l,b,c,null,[],[],f):null)&&f.scope&&E.$$addScopeClass(l.$$element);l=f&&f.terminal||!(q=a[n].childNodes)||!q.length?null:S(q,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:b);if(f||l)h.push(n,f,l),p=!0,r=r||f;f=null}return p?g:null}function X(a,b,c,d){return function(d,e,f,g,h){d||(d=a.$new(!1,h),d.$$transcluded=!0);return b(d,e,
{parentBoundTranscludeFn:c,transcludeControllers:f,futureParentElement:g})}}function W(a,b,c,d,g){var h=c.$attr,l;switch(a.nodeType){case na:ca(b,ya(ua(a)),"E",d,g);for(var k,q,p,r=a.attributes,n=0,w=r&&r.length;n<w;n++){var O=!1,L=!1;k=r[n];l=k.name;q=U(k.value);k=ya(l);if(p=fb.test(k))l=l.replace(Rc,"").substr(8).replace(/_(.)/g,function(a,b){return b.toUpperCase()});var u=k.replace(/(Start|End)$/,"");D(u)&&k===u+"Start"&&(O=l,L=l.substr(0,l.length-5)+"end",l=l.substr(0,l.length-6));k=ya(l.toLowerCase());
h[k]=l;if(p||!c.hasOwnProperty(k))c[k]=q,Lc(a,k)&&(c[k]=!0);Pa(a,b,q,k,p);ca(b,k,"A",d,g,O,L)}a=a.className;if(F(a)&&""!==a)for(;l=f.exec(a);)k=ya(l[2]),ca(b,k,"C",d,g)&&(c[k]=U(l[3])),a=a.substr(l.index+l[0].length);break;case pb:M(b,a.nodeValue);break;case 8:try{if(l=e.exec(a.nodeValue))k=ya(l[1]),ca(b,k,"M",d,g)&&(c[k]=U(l[2]))}catch(v){}}b.sort(N);return b}function wa(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw ja("uterdir",b,c);a.nodeType==na&&(a.hasAttribute(b)&&
e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return B(d)}function I(a,b,c){return function(d,e,f,g,h){e=wa(e[0],b,c);return a(d,e,f,g,h)}}function ea(a,d,e,f,g,l,k,p,r){function w(a,b,c,d){if(a){c&&(a=I(a,c,d));a.require=K.require;a.directiveName=z;if(S===K||K.$$isolateScope)a=Z(a,{isolateScope:!0});k.push(a)}if(b){c&&(b=I(b,c,d));b.require=K.require;b.directiveName=z;if(S===K||K.$$isolateScope)b=Z(b,{isolateScope:!0});p.push(b)}}function L(a,b,c,d){var e,f="data",
g=!1,l=c,k;if(F(b)){k=b.match(h);b=b.substring(k[0].length);k[3]&&(k[1]?k[3]=null:k[1]=k[3]);"^"===k[1]?f="inheritedData":"^^"===k[1]&&(f="inheritedData",l=c.parent());"?"===k[2]&&(g=!0);e=null;d&&"data"===f&&(e=d[b])&&(e=e.instance);e=e||l[f]("$"+b+"Controller");if(!e&&!g)throw ja("ctreq",b,a);return e||null}x(b)&&(e=[],s(b,function(b){e.push(L(a,b,c,d))}));return e}function v(a,c,f,g,h){function l(a,b,c){var d;Va(a)||(c=b,b=a,a=t);C&&(d=P);c||(c=C?W.parent():W);return h(a,b,d,c,wa)}var r,w,u,A,
P,eb,W,I;d===f?(I=e,W=e.$$element):(W=B(f),I=new Xb(W,e));S&&(A=c.$new(!0));h&&(eb=l,eb.$$boundTransclude=h);J&&(X={},P={},s(J,function(a){var b={$scope:a===S||a.$$isolateScope?A:c,$element:W,$attrs:I,$transclude:eb};u=a.controller;"@"==u&&(u=I[a.name]);b=n(u,b,!0,a.controllerAs);P[a.name]=b;C||W.data("$"+a.name+"Controller",b.instance);X[a.name]=b}));if(S){E.$$addScopeInfo(W,A,!0,!(ka&&(ka===S||ka===S.$$originalDirective)));E.$$addScopeClass(W,!0);g=X&&X[S.name];var xa=A;g&&g.identifier&&!0===S.bindToController&&
(xa=g.instance);s(A.$$isolateBindings=S.$$isolateBindings,function(a,d){var e=a.attrName,f=a.optional,g,h,l,k;switch(a.mode){case "@":I.$observe(e,function(a){xa[d]=a});I.$$observers[e].$$scope=c;I[e]&&(xa[d]=b(I[e])(c));break;case "=":if(f&&!I[e])break;h=O(I[e]);k=h.literal?fa:function(a,b){return a===b||a!==a&&b!==b};l=h.assign||function(){g=xa[d]=h(c);throw ja("nonassign",I[e],S.name);};g=xa[d]=h(c);f=function(a){k(a,xa[d])||(k(a,g)?l(c,a=xa[d]):xa[d]=a);return g=a};f.$stateful=!0;f=a.collection?
c.$watchCollection(I[e],f):c.$watch(O(I[e],f),null,h.literal);A.$on("$destroy",f);break;case "&":h=O(I[e]),xa[d]=function(a){return h(c,a)}}})}X&&(s(X,function(a){a()}),X=null);g=0;for(r=k.length;g<r;g++)w=k[g],$(w,w.isolateScope?A:c,W,I,w.require&&L(w.directiveName,w.require,W,P),eb);var wa=c;S&&(S.template||null===S.templateUrl)&&(wa=A);a&&a(wa,f.childNodes,t,h);for(g=p.length-1;0<=g;g--)w=p[g],$(w,w.isolateScope?A:c,W,I,w.require&&L(w.directiveName,w.require,W,P),eb)}r=r||{};for(var A=-Number.MAX_VALUE,
P,J=r.controllerDirectives,X,S=r.newIsolateScopeDirective,ka=r.templateDirective,ea=r.nonTlbTranscludeDirective,ca=!1,D=!1,C=r.hasElementTranscludeDirective,aa=e.$$element=B(d),K,z,N,Aa=f,Q,M=0,R=a.length;M<R;M++){K=a[M];var Pa=K.$$start,fb=K.$$end;Pa&&(aa=wa(d,Pa,fb));N=t;if(A>K.priority)break;if(N=K.scope)K.templateUrl||(H(N)?(Oa("new/isolated scope",S||P,K,aa),S=K):Oa("new/isolated scope",S,K,aa)),P=P||K;z=K.name;!K.templateUrl&&K.controller&&(N=K.controller,J=J||{},Oa("'"+z+"' controller",J[z],
K,aa),J[z]=K);if(N=K.transclude)ca=!0,K.$$tlb||(Oa("transclusion",ea,K,aa),ea=K),"element"==N?(C=!0,A=K.priority,N=aa,aa=e.$$element=B(Y.createComment(" "+z+": "+e[z]+" ")),d=aa[0],V(g,Za.call(N,0),d),Aa=E(N,f,A,l&&l.name,{nonTlbTranscludeDirective:ea})):(N=B(Tb(d)).contents(),aa.empty(),Aa=E(N,f));if(K.template)if(D=!0,Oa("template",ka,K,aa),ka=K,N=G(K.template)?K.template(aa,e):K.template,N=Sc(N),K.replace){l=K;N=Rb.test(N)?Tc(Wb(K.templateNamespace,U(N))):[];d=N[0];if(1!=N.length||d.nodeType!==
na)throw ja("tplrt",z,"");V(g,aa,d);R={$attr:{}};N=W(d,[],R);var ba=a.splice(M+1,a.length-(M+1));S&&y(N);a=a.concat(N).concat(ba);Qc(e,R);R=a.length}else aa.html(N);if(K.templateUrl)D=!0,Oa("template",ka,K,aa),ka=K,K.replace&&(l=K),v=T(a.splice(M,a.length-M),aa,e,g,ca&&Aa,k,p,{controllerDirectives:J,newIsolateScopeDirective:S,templateDirective:ka,nonTlbTranscludeDirective:ea}),R=a.length;else if(K.compile)try{Q=K.compile(aa,e,Aa),G(Q)?w(null,Q,Pa,fb):Q&&w(Q.pre,Q.post,Pa,fb)}catch(qf){c(qf,va(aa))}K.terminal&&
(v.terminal=!0,A=Math.max(A,K.priority))}v.scope=P&&!0===P.scope;v.transcludeOnThisElement=ca;v.elementTranscludeOnThisElement=C;v.templateOnThisElement=D;v.transclude=Aa;r.hasElementTranscludeDirective=C;return v}function y(a){for(var b=0,c=a.length;b<c;b++){var d=b,e;e=z(Object.create(a[b]),{$$isolateScope:!0});a[d]=e}}function ca(b,e,f,g,h,l,k){if(e===h)return null;h=null;if(d.hasOwnProperty(e)){var q;e=a.get(e+"Directive");for(var r=0,n=e.length;r<n;r++)try{if(q=e[r],(g===t||g>q.priority)&&-1!=
q.restrict.indexOf(f)){if(l){var w={$$start:l,$$end:k};q=z(Object.create(q),w)}b.push(q);h=q}}catch(O){c(O)}}return h}function D(b){if(d.hasOwnProperty(b))for(var c=a.get(b+"Directive"),e=0,f=c.length;e<f;e++)if(b=c[e],b.multiElement)return!0;return!1}function Qc(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;s(a,function(d,e){"$"!=e.charAt(0)&&(b[e]&&b[e]!==d&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});s(b,function(b,f){"class"==f?(P(e,b),a["class"]=(a["class"]?a["class"]+" ":"")+b):"style"==
f?(e.attr("style",e.attr("style")+";"+b),a.style=(a.style?a.style+";":"")+b):"$"==f.charAt(0)||a.hasOwnProperty(f)||(a[f]=b,d[f]=c[f])})}function T(a,b,c,d,e,f,g,h){var l=[],k,q,p=b[0],n=a.shift(),w=z({},n,{templateUrl:null,transclude:null,replace:null,$$originalDirective:n}),O=G(n.templateUrl)?n.templateUrl(b,c):n.templateUrl,u=n.templateNamespace;b.empty();r(L.getTrustedResourceUrl(O)).then(function(r){var L,v;r=Sc(r);if(n.replace){r=Rb.test(r)?Tc(Wb(u,U(r))):[];L=r[0];if(1!=r.length||L.nodeType!==
na)throw ja("tplrt",n.name,O);r={$attr:{}};V(d,b,L);var A=W(L,[],r);H(n.scope)&&y(A);a=A.concat(a);Qc(c,r)}else L=p,b.html(r);a.unshift(w);k=ea(a,L,c,e,b,n,f,g,h);s(d,function(a,c){a==L&&(d[c]=b[0])});for(q=S(b[0].childNodes,e);l.length;){r=l.shift();v=l.shift();var J=l.shift(),E=l.shift(),A=b[0];if(!r.$$destroyed){if(v!==p){var I=v.className;h.hasElementTranscludeDirective&&n.replace||(A=Tb(L));V(J,B(v),A);P(B(A),I)}v=k.transcludeOnThisElement?X(r,k.transclude,E):E;k(q,r,A,d,v)}}l=null});return function(a,
b,c,d,e){a=e;b.$$destroyed||(l?l.push(b,c,d,a):(k.transcludeOnThisElement&&(a=X(b,k.transclude,e)),k(q,b,c,d,a)))}}function N(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function Oa(a,b,c,d){if(b)throw ja("multidir",b.name,c.name,a,va(d));}function M(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){a=a.parent();var b=!!a.length;b&&E.$$addBindingClass(a);return function(a,c){var e=c.parent();b||E.$$addBindingClass(e);E.$$addBindingInfo(e,
d.expressions);a.$watch(d,function(a){c[0].nodeValue=a})}}})}function Wb(a,b){a=Q(a||"html");switch(a){case "svg":case "math":var c=Y.createElement("div");c.innerHTML="<"+a+">"+b+"</"+a+">";return c.childNodes[0].childNodes;default:return b}}function R(a,b){if("srcdoc"==b)return L.HTML;var c=ua(a);if("xlinkHref"==b||"form"==c&&"action"==b||"img"!=c&&("src"==b||"ngSrc"==b))return L.RESOURCE_URL}function Pa(a,c,d,e,f){var h=R(a,e);f=g[e]||f;var k=b(d,!0,h,f);if(k){if("multiple"===e&&"select"===ua(a))throw ja("selmulti",
va(a));c.push({priority:100,compile:function(){return{pre:function(a,c,g){c=g.$$observers||(g.$$observers={});if(l.test(e))throw ja("nodomevents");var p=g[e];p!==d&&(k=p&&b(p,!0,h,f),d=p);k&&(g[e]=k(a),(c[e]||(c[e]=[])).$$inter=!0,(g.$$observers&&g.$$observers[e].$$scope||a).$watch(k,function(a,b){"class"===e&&a!=b?g.$updateClass(a,b):g.$set(e,a)}))}}}})}}function V(a,b,c){var d=b[0],e=b.length,f=d.parentNode,g,h;if(a)for(g=0,h=a.length;g<h;g++)if(a[g]==d){a[g++]=c;h=g+e-1;for(var l=a.length;g<l;g++,
h++)h<l?a[g]=a[h]:delete a[g];a.length-=e-1;a.context===d&&(a.context=c);break}f&&f.replaceChild(c,d);a=Y.createDocumentFragment();a.appendChild(d);B(c).data(B(d).data());ra?(Pb=!0,ra.cleanData([d])):delete B.cache[d[B.expando]];d=1;for(e=b.length;d<e;d++)f=b[d],B(f).remove(),a.appendChild(f),delete b[d];b[0]=c;b.length=1}function Z(a,b){return z(function(){return a.apply(null,arguments)},a,b)}function $(a,b,d,e,f,g){try{a(b,d,e,f,g)}catch(h){c(h,va(d))}}var Xb=function(a,b){if(b){var c=Object.keys(b),
d,e,f;d=0;for(e=c.length;d<e;d++)f=c[d],this[f]=b[f]}else this.$attr={};this.$$element=a};Xb.prototype={$normalize:ya,$addClass:function(a){a&&0<a.length&&J.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&J.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=Uc(a,b);c&&c.length&&J.addClass(this.$$element,c);(c=Uc(b,a))&&c.length&&J.removeClass(this.$$element,c)},$set:function(a,b,d,e){var f=this.$$element[0],g=Lc(f,a),h=kf(f,a),f=a;g?(this.$$element.prop(a,b),e=g):
h&&(this[h]=b,f=h);this[a]=b;e?this.$attr[a]=e:(e=this.$attr[a])||(this.$attr[a]=e=tc(a,"-"));g=ua(this.$$element);if("a"===g&&"href"===a||"img"===g&&"src"===a)this[a]=b=A(b,"src"===a);else if("img"===g&&"srcset"===a){for(var g="",h=U(b),l=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,l=/\s/.test(h)?l:/(,)/,h=h.split(l),l=Math.floor(h.length/2),k=0;k<l;k++)var q=2*k,g=g+A(U(h[q]),!0),g=g+(" "+U(h[q+1]));h=U(h[2*k]).split(/\s/);g+=A(U(h[0]),!0);2===h.length&&(g+=" "+U(h[1]));this[a]=b=g}!1!==d&&(null===b||
b===t?this.$$element.removeAttr(e):this.$$element.attr(e,b));(a=this.$$observers)&&s(a[f],function(a){try{a(b)}catch(d){c(d)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers=ha()),e=d[a]||(d[a]=[]);e.push(b);v.$evalAsync(function(){!e.$$inter&&c.hasOwnProperty(a)&&b(c[a])});return function(){Xa(e,b)}}};var Aa=b.startSymbol(),ka=b.endSymbol(),Sc="{{"==Aa||"}}"==ka?oa:function(a){return a.replace(/\{\{/g,Aa).replace(/}}/g,ka)},fb=/^ngAttr[A-Z]/;E.$$addBindingInfo=k?function(a,b){var c=
a.data("$binding")||[];x(b)?c=c.concat(b):c.push(b);a.data("$binding",c)}:C;E.$$addBindingClass=k?function(a){P(a,"ng-binding")}:C;E.$$addScopeInfo=k?function(a,b,c,d){a.data(c?d?"$isolateScopeNoTemplate":"$isolateScope":"$scope",b)}:C;E.$$addScopeClass=k?function(a,b){P(a,b?"ng-isolate-scope":"ng-scope")}:C;return E}]}function ya(b){return cb(b.replace(Rc,""))}function Uc(b,a){var c="",d=b.split(/\s+/),e=a.split(/\s+/),f=0;a:for(;f<d.length;f++){for(var g=d[f],h=0;h<e.length;h++)if(g==e[h])continue a;
c+=(0<c.length?" ":"")+g}return c}function Tc(b){b=B(b);var a=b.length;if(1>=a)return b;for(;a--;)8===b[a].nodeType&&rf.call(b,a,1);return b}function Fe(){var b={},a=!1,c=/^(\S+)(\s+as\s+(\w+))?$/;this.register=function(a,c){Ma(a,"controller");H(a)?z(b,a):b[a]=c};this.allowGlobals=function(){a=!0};this.$get=["$injector","$window",function(d,e){function f(a,b,c,d){if(!a||!H(a.$scope))throw T("$controller")("noscp",d,b);a.$scope[b]=c}return function(g,h,l,k){var m,p,q;l=!0===l;k&&F(k)&&(q=k);F(g)&&
(k=g.match(c),p=k[1],q=q||k[3],g=b.hasOwnProperty(p)?b[p]:vc(h.$scope,p,!0)||(a?vc(e,p,!0):t),sb(g,p,!0));if(l)return l=(x(g)?g[g.length-1]:g).prototype,m=Object.create(l),q&&f(h,q,m,p||g.name),z(function(){d.invoke(g,m,h,p);return m},{instance:m,identifier:q});m=d.instantiate(g,h,p);q&&f(h,q,m,p||g.name);return m}}]}function Ge(){this.$get=["$window",function(b){return B(b.document)}]}function He(){this.$get=["$log",function(b){return function(a,c){b.error.apply(b,arguments)}}]}function Yb(b,a){if(F(b)){var c=
b.replace(sf,"").trim();if(c){var d=a("Content-Type");(d=d&&0===d.indexOf(Vc))||(d=(d=c.match(tf))&&uf[d[0]].test(c));d&&(b=oc(c))}}return b}function Wc(b){var a=ha(),c,d,e;if(!b)return a;s(b.split("\n"),function(b){e=b.indexOf(":");c=Q(U(b.substr(0,e)));d=U(b.substr(e+1));c&&(a[c]=a[c]?a[c]+", "+d:d)});return a}function Xc(b){var a=H(b)?b:t;return function(c){a||(a=Wc(b));return c?(c=a[Q(c)],void 0===c&&(c=null),c):a}}function Yc(b,a,c,d){if(G(d))return d(b,a,c);s(d,function(d){b=d(b,a,c)});return b}
function Ke(){var b=this.defaults={transformResponse:[Yb],transformRequest:[function(a){return H(a)&&"[object File]"!==Da.call(a)&&"[object Blob]"!==Da.call(a)&&"[object FormData]"!==Da.call(a)?$a(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:qa(Zb),put:qa(Zb),patch:qa(Zb)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN"},a=!1;this.useApplyAsync=function(b){return y(b)?(a=!!b,this):a};var c=this.interceptors=[];this.$get=["$httpBackend","$browser","$cacheFactory",
"$rootScope","$q","$injector",function(d,e,f,g,h,l){function k(a){function c(a){var b=z({},a);b.data=a.data?Yc(a.data,a.headers,a.status,e.transformResponse):a.data;a=a.status;return 200<=a&&300>a?b:h.reject(b)}function d(a){var b,c={};s(a,function(a,d){G(a)?(b=a(),null!=b&&(c[d]=b)):c[d]=a});return c}if(!ga.isObject(a))throw T("$http")("badreq",a);var e=z({method:"get",transformRequest:b.transformRequest,transformResponse:b.transformResponse},a);e.headers=function(a){var c=b.headers,e=z({},a.headers),
f,g,c=z({},c.common,c[Q(a.method)]);a:for(f in c){a=Q(f);for(g in e)if(Q(g)===a)continue a;e[f]=c[f]}return d(e)}(a);e.method=ub(e.method);var f=[function(a){var d=a.headers,e=Yc(a.data,Xc(d),t,a.transformRequest);D(e)&&s(d,function(a,b){"content-type"===Q(b)&&delete d[b]});D(a.withCredentials)&&!D(b.withCredentials)&&(a.withCredentials=b.withCredentials);return m(a,e).then(c,c)},t],g=h.when(e);for(s(u,function(a){(a.request||a.requestError)&&f.unshift(a.request,a.requestError);(a.response||a.responseError)&&
f.push(a.response,a.responseError)});f.length;){a=f.shift();var l=f.shift(),g=g.then(a,l)}g.success=function(a){g.then(function(b){a(b.data,b.status,b.headers,e)});return g};g.error=function(a){g.then(null,function(b){a(b.data,b.status,b.headers,e)});return g};return g}function m(c,f){function l(b,c,d,e){function f(){m(c,b,d,e)}P&&(200<=b&&300>b?P.put(X,[b,c,Wc(d),e]):P.remove(X));a?g.$applyAsync(f):(f(),g.$$phase||g.$apply())}function m(a,b,d,e){b=Math.max(b,0);(200<=b&&300>b?J.resolve:J.reject)({data:a,
status:b,headers:Xc(d),config:c,statusText:e})}function w(a){m(a.data,a.status,qa(a.headers()),a.statusText)}function u(){var a=k.pendingRequests.indexOf(c);-1!==a&&k.pendingRequests.splice(a,1)}var J=h.defer(),A=J.promise,P,E,s=c.headers,X=p(c.url,c.params);k.pendingRequests.push(c);A.then(u,u);!c.cache&&!b.cache||!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method||(P=H(c.cache)?c.cache:H(b.cache)?b.cache:q);P&&(E=P.get(X),y(E)?E&&G(E.then)?E.then(w,w):x(E)?m(E[1],E[0],qa(E[2]),E[3]):m(E,200,{},
"OK"):P.put(X,A));D(E)&&((E=Zc(c.url)?e.cookies()[c.xsrfCookieName||b.xsrfCookieName]:t)&&(s[c.xsrfHeaderName||b.xsrfHeaderName]=E),d(c.method,X,f,l,s,c.timeout,c.withCredentials,c.responseType));return A}function p(a,b){if(!b)return a;var c=[];Ed(b,function(a,b){null===a||D(a)||(x(a)||(a=[a]),s(a,function(a){H(a)&&(a=pa(a)?a.toISOString():$a(a));c.push(Fa(b)+"="+Fa(a))}))});0<c.length&&(a+=(-1==a.indexOf("?")?"?":"&")+c.join("&"));return a}var q=f("$http"),u=[];s(c,function(a){u.unshift(F(a)?l.get(a):
l.invoke(a))});k.pendingRequests=[];(function(a){s(arguments,function(a){k[a]=function(b,c){return k(z(c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){s(arguments,function(a){k[a]=function(b,c,d){return k(z(d||{},{method:a,url:b,data:c}))}})})("post","put","patch");k.defaults=b;return k}]}function vf(){return new M.XMLHttpRequest}function Le(){this.$get=["$browser","$window","$document",function(b,a,c){return wf(b,vf,b.defer,a.angular.callbacks,c[0])}]}function wf(b,a,c,
d,e){function f(a,b,c){var f=e.createElement("script"),m=null;f.type="text/javascript";f.src=a;f.async=!0;m=function(a){f.removeEventListener("load",m,!1);f.removeEventListener("error",m,!1);e.body.removeChild(f);f=null;var g=-1,u="unknown";a&&("load"!==a.type||d[b].called||(a={type:"error"}),u=a.type,g="error"===a.type?404:200);c&&c(g,u)};f.addEventListener("load",m,!1);f.addEventListener("error",m,!1);e.body.appendChild(f);return m}return function(e,h,l,k,m,p,q,u){function r(){v&&v();w&&w.abort()}
function O(a,d,e,f,g){J!==t&&c.cancel(J);v=w=null;a(d,e,f,g);b.$$completeOutstandingRequest(C)}b.$$incOutstandingRequestCount();h=h||b.url();if("jsonp"==Q(e)){var n="_"+(d.counter++).toString(36);d[n]=function(a){d[n].data=a;d[n].called=!0};var v=f(h.replace("JSON_CALLBACK","angular.callbacks."+n),n,function(a,b){O(k,a,d[n].data,"",b);d[n]=C})}else{var w=a();w.open(e,h,!0);s(m,function(a,b){y(a)&&w.setRequestHeader(b,a)});w.onload=function(){var a=w.statusText||"",b="response"in w?w.response:w.responseText,
c=1223===w.status?204:w.status;0===c&&(c=b?200:"file"==Ba(h).protocol?404:0);O(k,c,b,w.getAllResponseHeaders(),a)};e=function(){O(k,-1,null,null,"")};w.onerror=e;w.onabort=e;q&&(w.withCredentials=!0);if(u)try{w.responseType=u}catch(L){if("json"!==u)throw L;}w.send(l||null)}if(0<p)var J=c(r,p);else p&&G(p.then)&&p.then(r)}}function Ie(){var b="{{",a="}}";this.startSymbol=function(a){return a?(b=a,this):b};this.endSymbol=function(b){return b?(a=b,this):a};this.$get=["$parse","$exceptionHandler","$sce",
function(c,d,e){function f(a){return"\\\\\\"+a}function g(f,g,u,r){function O(c){return c.replace(k,b).replace(m,a)}function n(a){try{var b=a;a=u?e.getTrusted(u,b):e.valueOf(b);var c;if(r&&!y(a))c=a;else if(null==a)c="";else{switch(typeof a){case "string":break;case "number":a=""+a;break;default:a=$a(a)}c=a}return c}catch(g){c=$b("interr",f,g.toString()),d(c)}}r=!!r;for(var v,w,L=0,J=[],A=[],P=f.length,E=[],s=[];L<P;)if(-1!=(v=f.indexOf(b,L))&&-1!=(w=f.indexOf(a,v+h)))L!==v&&E.push(O(f.substring(L,
v))),L=f.substring(v+h,w),J.push(L),A.push(c(L,n)),L=w+l,s.push(E.length),E.push("");else{L!==P&&E.push(O(f.substring(L)));break}if(u&&1<E.length)throw $b("noconcat",f);if(!g||J.length){var X=function(a){for(var b=0,c=J.length;b<c;b++){if(r&&D(a[b]))return;E[s[b]]=a[b]}return E.join("")};return z(function(a){var b=0,c=J.length,e=Array(c);try{for(;b<c;b++)e[b]=A[b](a);return X(e)}catch(g){a=$b("interr",f,g.toString()),d(a)}},{exp:f,expressions:J,$$watchDelegate:function(a,b,c){var d;return a.$watchGroup(A,
function(c,e){var f=X(c);G(b)&&b.call(this,f,c!==e?d:f,a);d=f},c)}})}}var h=b.length,l=a.length,k=new RegExp(b.replace(/./g,f),"g"),m=new RegExp(a.replace(/./g,f),"g");g.startSymbol=function(){return b};g.endSymbol=function(){return a};return g}]}function Je(){this.$get=["$rootScope","$window","$q","$$q",function(b,a,c,d){function e(e,h,l,k){var m=a.setInterval,p=a.clearInterval,q=0,u=y(k)&&!k,r=(u?d:c).defer(),O=r.promise;l=y(l)?l:0;O.then(null,null,e);O.$$intervalId=m(function(){r.notify(q++);0<
l&&q>=l&&(r.resolve(q),p(O.$$intervalId),delete f[O.$$intervalId]);u||b.$apply()},h);f[O.$$intervalId]=r;return O}var f={};e.cancel=function(b){return b&&b.$$intervalId in f?(f[b.$$intervalId].reject("canceled"),a.clearInterval(b.$$intervalId),delete f[b.$$intervalId],!0):!1};return e}]}function Rd(){this.$get=function(){return{id:"en-us",NUMBER_FORMATS:{DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{minInt:1,minFrac:0,maxFrac:3,posPre:"",posSuf:"",negPre:"-",negSuf:"",gSize:3,lgSize:3},{minInt:1,minFrac:2,
maxFrac:2,posPre:"\u00a4",posSuf:"",negPre:"(\u00a4",negSuf:")",gSize:3,lgSize:3}],CURRENCY_SYM:"$"},DATETIME_FORMATS:{MONTH:"January February March April May June July August September October November December".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),AMPMS:["AM","PM"],medium:"MMM d, y h:mm:ss a","short":"M/d/yy h:mm a",fullDate:"EEEE, MMMM d, y",
longDate:"MMMM d, y",mediumDate:"MMM d, y",shortDate:"M/d/yy",mediumTime:"h:mm:ss a",shortTime:"h:mm a"},pluralCat:function(b){return 1===b?"one":"other"}}}}function ac(b){b=b.split("/");for(var a=b.length;a--;)b[a]=qb(b[a]);return b.join("/")}function $c(b,a){var c=Ba(b);a.$$protocol=c.protocol;a.$$host=c.hostname;a.$$port=ba(c.port)||xf[c.protocol]||null}function ad(b,a){var c="/"!==b.charAt(0);c&&(b="/"+b);var d=Ba(b);a.$$path=decodeURIComponent(c&&"/"===d.pathname.charAt(0)?d.pathname.substring(1):
d.pathname);a.$$search=qc(d.search);a.$$hash=decodeURIComponent(d.hash);a.$$path&&"/"!=a.$$path.charAt(0)&&(a.$$path="/"+a.$$path)}function za(b,a){if(0===a.indexOf(b))return a.substr(b.length)}function Ha(b){var a=b.indexOf("#");return-1==a?b:b.substr(0,a)}function bd(b){return b.replace(/(#.+)|#$/,"$1")}function bc(b){return b.substr(0,Ha(b).lastIndexOf("/")+1)}function cc(b,a){this.$$html5=!0;a=a||"";var c=bc(b);$c(b,this);this.$$parse=function(a){var b=za(c,a);if(!F(b))throw Fb("ipthprfx",a,c);
ad(b,this);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Nb(this.$$search),b=this.$$hash?"#"+qb(this.$$hash):"";this.$$url=ac(this.$$path)+(a?"?"+a:"")+b;this.$$absUrl=c+this.$$url.substr(1)};this.$$parseLinkUrl=function(d,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;(f=za(b,d))!==t?(g=f,g=(f=za(a,f))!==t?c+(za("/",f)||f):b+g):(f=za(c,d))!==t?g=c+f:c==d+"/"&&(g=c);g&&this.$$parse(g);return!!g}}function dc(b,a){var c=bc(b);$c(b,this);this.$$parse=function(d){d=
za(b,d)||za(c,d);var e;"#"===d.charAt(0)?(e=za(a,d),D(e)&&(e=d)):e=this.$$html5?d:"";ad(e,this);d=this.$$path;var f=/^\/[A-Z]:(\/.*)/;0===e.indexOf(b)&&(e=e.replace(b,""));f.exec(e)||(d=(e=f.exec(d))?e[1]:d);this.$$path=d;this.$$compose()};this.$$compose=function(){var c=Nb(this.$$search),e=this.$$hash?"#"+qb(this.$$hash):"";this.$$url=ac(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+(this.$$url?a+this.$$url:"")};this.$$parseLinkUrl=function(a,c){return Ha(b)==Ha(a)?(this.$$parse(a),!0):!1}}function cd(b,
a){this.$$html5=!0;dc.apply(this,arguments);var c=bc(b);this.$$parseLinkUrl=function(d,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;b==Ha(d)?f=d:(g=za(c,d))?f=b+a+g:c===d+"/"&&(f=c);f&&this.$$parse(f);return!!f};this.$$compose=function(){var c=Nb(this.$$search),e=this.$$hash?"#"+qb(this.$$hash):"";this.$$url=ac(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+a+this.$$url}}function Gb(b){return function(){return this[b]}}function dd(b,a){return function(c){if(D(c))return this[b];this[b]=
a(c);this.$$compose();return this}}function Me(){var b="",a={enabled:!1,requireBase:!0,rewriteLinks:!0};this.hashPrefix=function(a){return y(a)?(b=a,this):b};this.html5Mode=function(b){return Wa(b)?(a.enabled=b,this):H(b)?(Wa(b.enabled)&&(a.enabled=b.enabled),Wa(b.requireBase)&&(a.requireBase=b.requireBase),Wa(b.rewriteLinks)&&(a.rewriteLinks=b.rewriteLinks),this):a};this.$get=["$rootScope","$browser","$sniffer","$rootElement","$window",function(c,d,e,f,g){function h(a,b,c){var e=k.url(),f=k.$$state;
try{d.url(a,b,c),k.$$state=d.state()}catch(g){throw k.url(e),k.$$state=f,g;}}function l(a,b){c.$broadcast("$locationChangeSuccess",k.absUrl(),a,k.$$state,b)}var k,m;m=d.baseHref();var p=d.url(),q;if(a.enabled){if(!m&&a.requireBase)throw Fb("nobase");q=p.substring(0,p.indexOf("/",p.indexOf("//")+2))+(m||"/");m=e.history?cc:cd}else q=Ha(p),m=dc;k=new m(q,"#"+b);k.$$parseLinkUrl(p,p);k.$$state=d.state();var u=/^\s*(javascript|mailto):/i;f.on("click",function(b){if(a.rewriteLinks&&!b.ctrlKey&&!b.metaKey&&
2!=b.which){for(var e=B(b.target);"a"!==ua(e[0]);)if(e[0]===f[0]||!(e=e.parent())[0])return;var h=e.prop("href"),l=e.attr("href")||e.attr("xlink:href");H(h)&&"[object SVGAnimatedString]"===h.toString()&&(h=Ba(h.animVal).href);u.test(h)||!h||e.attr("target")||b.isDefaultPrevented()||!k.$$parseLinkUrl(h,l)||(b.preventDefault(),k.absUrl()!=d.url()&&(c.$apply(),g.angular["ff-684208-preventDefault"]=!0))}});k.absUrl()!=p&&d.url(k.absUrl(),!0);var r=!0;d.onUrlChange(function(a,b){c.$evalAsync(function(){var d=
k.absUrl(),e=k.$$state,f;k.$$parse(a);k.$$state=b;f=c.$broadcast("$locationChangeStart",a,d,b,e).defaultPrevented;k.absUrl()===a&&(f?(k.$$parse(d),k.$$state=e,h(d,!1,e)):(r=!1,l(d,e)))});c.$$phase||c.$digest()});c.$watch(function(){var a=bd(d.url()),b=bd(k.absUrl()),f=d.state(),g=k.$$replace,q=a!==b||k.$$html5&&e.history&&f!==k.$$state;if(r||q)r=!1,c.$evalAsync(function(){var b=k.absUrl(),d=c.$broadcast("$locationChangeStart",b,a,k.$$state,f).defaultPrevented;k.absUrl()===b&&(d?(k.$$parse(a),k.$$state=
f):(q&&h(b,g,f===k.$$state?null:k.$$state),l(a,f)))});k.$$replace=!1});return k}]}function Ne(){var b=!0,a=this;this.debugEnabled=function(a){return y(a)?(b=a,this):b};this.$get=["$window",function(c){function d(a){a instanceof Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=c.console||{},e=b[a]||b.log||C;a=!1;try{a=!!e.apply}catch(l){}return a?function(){var a=
[];s(arguments,function(b){a.push(d(b))});return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){b&&c.apply(a,arguments)}}()}}]}function sa(b,a){if("__defineGetter__"===b||"__defineSetter__"===b||"__lookupGetter__"===b||"__lookupSetter__"===b||"__proto__"===b)throw la("isecfld",a);return b}function ta(b,a){if(b){if(b.constructor===b)throw la("isecfn",a);if(b.window===b)throw la("isecwindow",
a);if(b.children&&(b.nodeName||b.prop&&b.attr&&b.find))throw la("isecdom",a);if(b===Object)throw la("isecobj",a);}return b}function ec(b){return b.constant}function gb(b,a,c,d){ta(b,d);a=a.split(".");for(var e,f=0;1<a.length;f++){e=sa(a.shift(),d);var g=ta(b[e],d);g||(g={},b[e]=g);b=g}e=sa(a.shift(),d);ta(b[e],d);return b[e]=c}function Qa(b){return"constructor"==b}function ed(b,a,c,d,e,f,g){sa(b,f);sa(a,f);sa(c,f);sa(d,f);sa(e,f);var h=function(a){return ta(a,f)},l=g||Qa(b)?h:oa,k=g||Qa(a)?h:oa,m=
g||Qa(c)?h:oa,p=g||Qa(d)?h:oa,q=g||Qa(e)?h:oa;return function(f,g){var h=g&&g.hasOwnProperty(b)?g:f;if(null==h)return h;h=l(h[b]);if(!a)return h;if(null==h)return t;h=k(h[a]);if(!c)return h;if(null==h)return t;h=m(h[c]);if(!d)return h;if(null==h)return t;h=p(h[d]);return e?null==h?t:h=q(h[e]):h}}function yf(b,a){return function(c,d){return b(c,d,ta,a)}}function zf(b,a,c){var d=a.expensiveChecks,e=d?Af:Bf,f=e[b];if(f)return f;var g=b.split("."),h=g.length;if(a.csp)f=6>h?ed(g[0],g[1],g[2],g[3],g[4],
c,d):function(a,b){var e=0,f;do f=ed(g[e++],g[e++],g[e++],g[e++],g[e++],c,d)(a,b),b=t,a=f;while(e<h);return f};else{var l="";d&&(l+="s = eso(s, fe);\nl = eso(l, fe);\n");var k=d;s(g,function(a,b){sa(a,c);var e=(b?"s":'((l&&l.hasOwnProperty("'+a+'"))?l:s)')+"."+a;if(d||Qa(a))e="eso("+e+", fe)",k=!0;l+="if(s == null) return undefined;\ns="+e+";\n"});l+="return s;";a=new Function("s","l","eso","fe",l);a.toString=da(l);k&&(a=yf(a,c));f=a}f.sharedGetter=!0;f.assign=function(a,c){return gb(a,b,c,b)};return e[b]=
f}function fc(b){return G(b.valueOf)?b.valueOf():Cf.call(b)}function Oe(){var b=ha(),a=ha();this.$get=["$filter","$sniffer",function(c,d){function e(a){var b=a;a.sharedGetter&&(b=function(b,c){return a(b,c)},b.literal=a.literal,b.constant=a.constant,b.assign=a.assign);return b}function f(a,b){for(var c=0,d=a.length;c<d;c++){var e=a[c];e.constant||(e.inputs?f(e.inputs,b):-1===b.indexOf(e)&&b.push(e))}return b}function g(a,b){return null==a||null==b?a===b:"object"===typeof a&&(a=fc(a),"object"===typeof a)?
!1:a===b||a!==a&&b!==b}function h(a,b,c,d){var e=d.$$inputs||(d.$$inputs=f(d.inputs,[])),h;if(1===e.length){var l=g,e=e[0];return a.$watch(function(a){var b=e(a);g(b,l)||(h=d(a),l=b&&fc(b));return h},b,c)}for(var k=[],q=0,p=e.length;q<p;q++)k[q]=g;return a.$watch(function(a){for(var b=!1,c=0,f=e.length;c<f;c++){var l=e[c](a);if(b||(b=!g(l,k[c])))k[c]=l&&fc(l)}b&&(h=d(a));return h},b,c)}function l(a,b,c,d){var e,f;return e=a.$watch(function(a){return d(a)},function(a,c,d){f=a;G(b)&&b.apply(this,arguments);
y(a)&&d.$$postDigest(function(){y(f)&&e()})},c)}function k(a,b,c,d){function e(a){var b=!0;s(a,function(a){y(a)||(b=!1)});return b}var f,g;return f=a.$watch(function(a){return d(a)},function(a,c,d){g=a;G(b)&&b.call(this,a,c,d);e(a)&&d.$$postDigest(function(){e(g)&&f()})},c)}function m(a,b,c,d){var e;return e=a.$watch(function(a){return d(a)},function(a,c,d){G(b)&&b.apply(this,arguments);e()},c)}function p(a,b){if(!b)return a;var c=a.$$watchDelegate,c=c!==k&&c!==l?function(c,d){var e=a(c,d);return b(e,
c,d)}:function(c,d){var e=a(c,d),f=b(e,c,d);return y(e)?f:e};a.$$watchDelegate&&a.$$watchDelegate!==h?c.$$watchDelegate=a.$$watchDelegate:b.$stateful||(c.$$watchDelegate=h,c.inputs=[a]);return c}var q={csp:d.csp,expensiveChecks:!1},u={csp:d.csp,expensiveChecks:!0};return function(d,f,g){var v,w,L;switch(typeof d){case "string":L=d=d.trim();var J=g?a:b;v=J[L];v||(":"===d.charAt(0)&&":"===d.charAt(1)&&(w=!0,d=d.substring(2)),g=g?u:q,v=new gc(g),v=(new hb(v,c,g)).parse(d),v.constant?v.$$watchDelegate=
m:w?(v=e(v),v.$$watchDelegate=v.literal?k:l):v.inputs&&(v.$$watchDelegate=h),J[L]=v);return p(v,f);case "function":return p(d,f);default:return p(C,f)}}}]}function Qe(){this.$get=["$rootScope","$exceptionHandler",function(b,a){return fd(function(a){b.$evalAsync(a)},a)}]}function Re(){this.$get=["$browser","$exceptionHandler",function(b,a){return fd(function(a){b.defer(a)},a)}]}function fd(b,a){function c(a,b,c){function d(b){return function(c){e||(e=!0,b.call(a,c))}}var e=!1;return[d(b),d(c)]}function d(){this.$$state=
{status:0}}function e(a,b){return function(c){b.call(a,c)}}function f(c){!c.processScheduled&&c.pending&&(c.processScheduled=!0,b(function(){var b,d,e;e=c.pending;c.processScheduled=!1;c.pending=t;for(var f=0,g=e.length;f<g;++f){d=e[f][0];b=e[f][c.status];try{G(b)?d.resolve(b(c.value)):1===c.status?d.resolve(c.value):d.reject(c.value)}catch(h){d.reject(h),a(h)}}}))}function g(){this.promise=new d;this.resolve=e(this,this.resolve);this.reject=e(this,this.reject);this.notify=e(this,this.notify)}var h=
T("$q",TypeError);d.prototype={then:function(a,b,c){var d=new g;this.$$state.pending=this.$$state.pending||[];this.$$state.pending.push([d,a,b,c]);0<this.$$state.status&&f(this.$$state);return d.promise},"catch":function(a){return this.then(null,a)},"finally":function(a,b){return this.then(function(b){return k(b,!0,a)},function(b){return k(b,!1,a)},b)}};g.prototype={resolve:function(a){this.promise.$$state.status||(a===this.promise?this.$$reject(h("qcycle",a)):this.$$resolve(a))},$$resolve:function(b){var d,
e;e=c(this,this.$$resolve,this.$$reject);try{if(H(b)||G(b))d=b&&b.then;G(d)?(this.promise.$$state.status=-1,d.call(b,e[0],e[1],this.notify)):(this.promise.$$state.value=b,this.promise.$$state.status=1,f(this.promise.$$state))}catch(g){e[1](g),a(g)}},reject:function(a){this.promise.$$state.status||this.$$reject(a)},$$reject:function(a){this.promise.$$state.value=a;this.promise.$$state.status=2;f(this.promise.$$state)},notify:function(c){var d=this.promise.$$state.pending;0>=this.promise.$$state.status&&
d&&d.length&&b(function(){for(var b,e,f=0,g=d.length;f<g;f++){e=d[f][0];b=d[f][3];try{e.notify(G(b)?b(c):c)}catch(h){a(h)}}})}};var l=function(a,b){var c=new g;b?c.resolve(a):c.reject(a);return c.promise},k=function(a,b,c){var d=null;try{G(c)&&(d=c())}catch(e){return l(e,!1)}return d&&G(d.then)?d.then(function(){return l(a,b)},function(a){return l(a,!1)}):l(a,b)},m=function(a,b,c,d){var e=new g;e.resolve(a);return e.promise.then(b,c,d)},p=function u(a){if(!G(a))throw h("norslvr",a);if(!(this instanceof
u))return new u(a);var b=new g;a(function(a){b.resolve(a)},function(a){b.reject(a)});return b.promise};p.defer=function(){return new g};p.reject=function(a){var b=new g;b.reject(a);return b.promise};p.when=m;p.all=function(a){var b=new g,c=0,d=x(a)?[]:{};s(a,function(a,e){c++;m(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});0===c&&b.resolve(d);return b.promise};return p}function $e(){this.$get=["$window","$timeout",function(b,
a){var c=b.requestAnimationFrame||b.webkitRequestAnimationFrame,d=b.cancelAnimationFrame||b.webkitCancelAnimationFrame||b.webkitCancelRequestAnimationFrame,e=!!c,f=e?function(a){var b=c(a);return function(){d(b)}}:function(b){var c=a(b,16.66,!1);return function(){a.cancel(c)}};f.supported=e;return f}]}function Pe(){var b=10,a=T("$rootScope"),c=null,d=null;this.digestTtl=function(a){arguments.length&&(b=a);return b};this.$get=["$injector","$exceptionHandler","$parse","$browser",function(e,f,g,h){function l(){this.$id=
++nb;this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this.$root=this;this.$$destroyed=!1;this.$$listeners={};this.$$listenerCount={};this.$$isolateBindings=null}function k(b){if(r.$$phase)throw a("inprog",r.$$phase);r.$$phase=b}function m(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function p(){}function q(){for(;v.length;)try{v.shift()()}catch(a){f(a)}d=null}function u(){null===
d&&(d=h.defer(function(){r.$apply(q)}))}l.prototype={constructor:l,$new:function(a,b){function c(){d.$$destroyed=!0}var d;b=b||this;a?(d=new l,d.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=function(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$id=++nb;this.$$ChildScope=null},this.$$ChildScope.prototype=this),d=new this.$$ChildScope);d.$parent=b;d.$$prevSibling=b.$$childTail;b.$$childHead?(b.$$childTail.$$nextSibling=
d,b.$$childTail=d):b.$$childHead=b.$$childTail=d;(a||b!=this)&&d.$on("$destroy",c);return d},$watch:function(a,b,d){var e=g(a);if(e.$$watchDelegate)return e.$$watchDelegate(this,b,d,e);var f=this.$$watchers,h={fn:b,last:p,get:e,exp:a,eq:!!d};c=null;G(b)||(h.fn=C);f||(f=this.$$watchers=[]);f.unshift(h);return function(){Xa(f,h);c=null}},$watchGroup:function(a,b){function c(){h=!1;l?(l=!1,b(e,e,g)):b(e,d,g)}var d=Array(a.length),e=Array(a.length),f=[],g=this,h=!1,l=!0;if(!a.length){var k=!0;g.$evalAsync(function(){k&&
b(e,e,g)});return function(){k=!1}}if(1===a.length)return this.$watch(a[0],function(a,c,f){e[0]=a;d[0]=c;b(e,a===c?e:d,f)});s(a,function(a,b){var l=g.$watch(a,function(a,f){e[b]=a;d[b]=f;h||(h=!0,g.$evalAsync(c))});f.push(l)});return function(){for(;f.length;)f.shift()()}},$watchCollection:function(a,b){function c(a){e=a;var b,d,g,h;if(!D(e)){if(H(e))if(Ta(e))for(f!==q&&(f=q,u=f.length=0,k++),a=e.length,u!==a&&(k++,f.length=u=a),b=0;b<a;b++)h=f[b],g=e[b],d=h!==h&&g!==g,d||h===g||(k++,f[b]=g);else{f!==
m&&(f=m={},u=0,k++);a=0;for(b in e)e.hasOwnProperty(b)&&(a++,g=e[b],h=f[b],b in f?(d=h!==h&&g!==g,d||h===g||(k++,f[b]=g)):(u++,f[b]=g,k++));if(u>a)for(b in k++,f)e.hasOwnProperty(b)||(u--,delete f[b])}else f!==e&&(f=e,k++);return k}}c.$stateful=!0;var d=this,e,f,h,l=1<b.length,k=0,p=g(a,c),q=[],m={},n=!0,u=0;return this.$watch(p,function(){n?(n=!1,b(e,e,d)):b(e,h,d);if(l)if(H(e))if(Ta(e)){h=Array(e.length);for(var a=0;a<e.length;a++)h[a]=e[a]}else for(a in h={},e)rc.call(e,a)&&(h[a]=e[a]);else h=
e})},$digest:function(){var e,g,l,m,u,v,s=b,t,W=[],y,I;k("$digest");h.$$checkUrlChange();this===r&&null!==d&&(h.defer.cancel(d),q());c=null;do{v=!1;for(t=this;O.length;){try{I=O.shift(),I.scope.$eval(I.expression,I.locals)}catch(B){f(B)}c=null}a:do{if(m=t.$$watchers)for(u=m.length;u--;)try{if(e=m[u])if((g=e.get(t))!==(l=e.last)&&!(e.eq?fa(g,l):"number"===typeof g&&"number"===typeof l&&isNaN(g)&&isNaN(l)))v=!0,c=e,e.last=e.eq?Ea(g,null):g,e.fn(g,l===p?g:l,t),5>s&&(y=4-s,W[y]||(W[y]=[]),W[y].push({msg:G(e.exp)?
"fn: "+(e.exp.name||e.exp.toString()):e.exp,newVal:g,oldVal:l}));else if(e===c){v=!1;break a}}catch(D){f(D)}if(!(m=t.$$childHead||t!==this&&t.$$nextSibling))for(;t!==this&&!(m=t.$$nextSibling);)t=t.$parent}while(t=m);if((v||O.length)&&!s--)throw r.$$phase=null,a("infdig",b,W);}while(v||O.length);for(r.$$phase=null;n.length;)try{n.shift()()}catch(ca){f(ca)}},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;if(this!==r){for(var b in this.$$listenerCount)m(this,
this.$$listenerCount[b],b);a.$$childHead==this&&(a.$$childHead=this.$$nextSibling);a.$$childTail==this&&(a.$$childTail=this.$$prevSibling);this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling);this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling);this.$destroy=this.$digest=this.$apply=this.$evalAsync=this.$applyAsync=C;this.$on=this.$watch=this.$watchGroup=function(){return C};this.$$listeners={};this.$parent=this.$$nextSibling=this.$$prevSibling=this.$$childHead=
this.$$childTail=this.$root=this.$$watchers=null}}},$eval:function(a,b){return g(a)(this,b)},$evalAsync:function(a,b){r.$$phase||O.length||h.defer(function(){O.length&&r.$digest()});O.push({scope:this,expression:a,locals:b})},$$postDigest:function(a){n.push(a)},$apply:function(a){try{return k("$apply"),this.$eval(a)}catch(b){f(b)}finally{r.$$phase=null;try{r.$digest()}catch(c){throw f(c),c;}}},$applyAsync:function(a){function b(){c.$eval(a)}var c=this;a&&v.push(b);u()},$on:function(a,b){var c=this.$$listeners[a];
c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){var d=c.indexOf(b);-1!==d&&(c[d]=null,m(e,1,a))}},$emit:function(a,b){var c=[],d,e=this,g=!1,h={name:a,targetScope:e,stopPropagation:function(){g=!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},l=Ya([h],arguments,1),k,p;do{d=e.$$listeners[a]||c;h.currentScope=e;k=0;for(p=d.length;k<p;k++)if(d[k])try{d[k].apply(null,
l)}catch(m){f(m)}else d.splice(k,1),k--,p--;if(g)return h.currentScope=null,h;e=e.$parent}while(e);h.currentScope=null;return h},$broadcast:function(a,b){var c=this,d=this,e={name:a,targetScope:this,preventDefault:function(){e.defaultPrevented=!0},defaultPrevented:!1};if(!this.$$listenerCount[a])return e;for(var g=Ya([e],arguments,1),h,l;c=d;){e.currentScope=c;d=c.$$listeners[a]||[];h=0;for(l=d.length;h<l;h++)if(d[h])try{d[h].apply(null,g)}catch(k){f(k)}else d.splice(h,1),h--,l--;if(!(d=c.$$listenerCount[a]&&
c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}e.currentScope=null;return e}};var r=new l,O=r.$$asyncQueue=[],n=r.$$postDigestQueue=[],v=r.$$applyAsyncQueue=[];return r}]}function Sd(){var b=/^\s*(https?|ftp|mailto|tel|file):/,a=/^\s*((https?|ftp|file|blob):|data:image\/)/;this.aHrefSanitizationWhitelist=function(a){return y(a)?(b=a,this):b};this.imgSrcSanitizationWhitelist=function(b){return y(b)?(a=b,this):a};this.$get=function(){return function(c,d){var e=
d?a:b,f;f=Ba(c).href;return""===f||f.match(e)?c:"unsafe:"+f}}}function Df(b){if("self"===b)return b;if(F(b)){if(-1<b.indexOf("***"))throw Ca("iwcard",b);b=gd(b).replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return new RegExp("^"+b+"$")}if(ob(b))return new RegExp("^"+b.source+"$");throw Ca("imatcher");}function hd(b){var a=[];y(b)&&s(b,function(b){a.push(Df(b))});return a}function Te(){this.SCE_CONTEXTS=ma;var b=["self"],a=[];this.resourceUrlWhitelist=function(a){arguments.length&&(b=hd(a));return b};
this.resourceUrlBlacklist=function(b){arguments.length&&(a=hd(b));return a};this.$get=["$injector",function(c){function d(a,b){return"self"===a?Zc(b):!!a.exec(b.href)}function e(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var f=function(a){throw Ca("unsafe");};c.has("$sanitize")&&(f=c.get("$sanitize"));
var g=e(),h={};h[ma.HTML]=e(g);h[ma.CSS]=e(g);h[ma.URL]=e(g);h[ma.JS]=e(g);h[ma.RESOURCE_URL]=e(h[ma.URL]);return{trustAs:function(a,b){var c=h.hasOwnProperty(a)?h[a]:null;if(!c)throw Ca("icontext",a,b);if(null===b||b===t||""===b)return b;if("string"!==typeof b)throw Ca("itype",a);return new c(b)},getTrusted:function(c,e){if(null===e||e===t||""===e)return e;var g=h.hasOwnProperty(c)?h[c]:null;if(g&&e instanceof g)return e.$$unwrapTrustedValue();if(c===ma.RESOURCE_URL){var g=Ba(e.toString()),p,q,u=
!1;p=0;for(q=b.length;p<q;p++)if(d(b[p],g)){u=!0;break}if(u)for(p=0,q=a.length;p<q;p++)if(d(a[p],g)){u=!1;break}if(u)return e;throw Ca("insecurl",e.toString());}if(c===ma.HTML)return f(e);throw Ca("unsafe");},valueOf:function(a){return a instanceof g?a.$$unwrapTrustedValue():a}}}]}function Se(){var b=!0;this.enabled=function(a){arguments.length&&(b=!!a);return b};this.$get=["$parse","$sceDelegate",function(a,c){if(b&&8>Ra)throw Ca("iequirks");var d=qa(ma);d.isEnabled=function(){return b};d.trustAs=
c.trustAs;d.getTrusted=c.getTrusted;d.valueOf=c.valueOf;b||(d.trustAs=d.getTrusted=function(a,b){return b},d.valueOf=oa);d.parseAs=function(b,c){var e=a(c);return e.literal&&e.constant?e:a(c,function(a){return d.getTrusted(b,a)})};var e=d.parseAs,f=d.getTrusted,g=d.trustAs;s(ma,function(a,b){var c=Q(b);d[cb("parse_as_"+c)]=function(b){return e(a,b)};d[cb("get_trusted_"+c)]=function(b){return f(a,b)};d[cb("trust_as_"+c)]=function(b){return g(a,b)}});return d}]}function Ue(){this.$get=["$window","$document",
function(b,a){var c={},d=ba((/android (\d+)/.exec(Q((b.navigator||{}).userAgent))||[])[1]),e=/Boxee/i.test((b.navigator||{}).userAgent),f=a[0]||{},g,h=/^(Moz|webkit|ms)(?=[A-Z])/,l=f.body&&f.body.style,k=!1,m=!1;if(l){for(var p in l)if(k=h.exec(p)){g=k[0];g=g.substr(0,1).toUpperCase()+g.substr(1);break}g||(g="WebkitOpacity"in l&&"webkit");k=!!("transition"in l||g+"Transition"in l);m=!!("animation"in l||g+"Animation"in l);!d||k&&m||(k=F(f.body.style.webkitTransition),m=F(f.body.style.webkitAnimation))}return{history:!(!b.history||
!b.history.pushState||4>d||e),hasEvent:function(a){if("input"===a&&11>=Ra)return!1;if(D(c[a])){var b=f.createElement("div");c[a]="on"+a in b}return c[a]},csp:ab(),vendorPrefix:g,transitions:k,animations:m,android:d}}]}function We(){this.$get=["$templateCache","$http","$q",function(b,a,c){function d(e,f){d.totalPendingRequests++;var g=a.defaults&&a.defaults.transformResponse;x(g)?g=g.filter(function(a){return a!==Yb}):g===Yb&&(g=null);return a.get(e,{cache:b,transformResponse:g}).then(function(a){d.totalPendingRequests--;
return a.data},function(a){d.totalPendingRequests--;if(!f)throw ja("tpload",e);return c.reject(a)})}d.totalPendingRequests=0;return d}]}function Xe(){this.$get=["$rootScope","$browser","$location",function(b,a,c){return{findBindings:function(a,b,c){a=a.getElementsByClassName("ng-binding");var g=[];s(a,function(a){var d=ga.element(a).data("$binding");d&&s(d,function(d){c?(new RegExp("(^|\\s)"+gd(b)+"(\\s|\\||$)")).test(d)&&g.push(a):-1!=d.indexOf(b)&&g.push(a)})});return g},findModels:function(a,b,
c){for(var g=["ng-","data-ng-","ng\\:"],h=0;h<g.length;++h){var l=a.querySelectorAll("["+g[h]+"model"+(c?"=":"*=")+'"'+b+'"]');if(l.length)return l}},getLocation:function(){return c.url()},setLocation:function(a){a!==c.url()&&(c.url(a),b.$digest())},whenStable:function(b){a.notifyWhenNoOutstandingRequests(b)}}}]}function Ye(){this.$get=["$rootScope","$browser","$q","$$q","$exceptionHandler",function(b,a,c,d,e){function f(f,l,k){var m=y(k)&&!k,p=(m?d:c).defer(),q=p.promise;l=a.defer(function(){try{p.resolve(f())}catch(a){p.reject(a),
e(a)}finally{delete g[q.$$timeoutId]}m||b.$apply()},l);q.$$timeoutId=l;g[l]=p;return q}var g={};f.cancel=function(b){return b&&b.$$timeoutId in g?(g[b.$$timeoutId].reject("canceled"),delete g[b.$$timeoutId],a.defer.cancel(b.$$timeoutId)):!1};return f}]}function Ba(b){Ra&&(Z.setAttribute("href",b),b=Z.href);Z.setAttribute("href",b);return{href:Z.href,protocol:Z.protocol?Z.protocol.replace(/:$/,""):"",host:Z.host,search:Z.search?Z.search.replace(/^\?/,""):"",hash:Z.hash?Z.hash.replace(/^#/,""):"",hostname:Z.hostname,
port:Z.port,pathname:"/"===Z.pathname.charAt(0)?Z.pathname:"/"+Z.pathname}}function Zc(b){b=F(b)?Ba(b):b;return b.protocol===id.protocol&&b.host===id.host}function Ze(){this.$get=da(M)}function Dc(b){function a(c,d){if(H(c)){var e={};s(c,function(b,c){e[c]=a(c,b)});return e}return b.factory(c+"Filter",d)}this.register=a;this.$get=["$injector",function(a){return function(b){return a.get(b+"Filter")}}];a("currency",jd);a("date",kd);a("filter",Ef);a("json",Ff);a("limitTo",Gf);a("lowercase",Hf);a("number",
ld);a("orderBy",md);a("uppercase",If)}function Ef(){return function(b,a,c){if(!x(b))return b;var d;switch(typeof a){case "function":break;case "boolean":case "number":case "string":d=!0;case "object":a=Jf(a,c,d);break;default:return b}return b.filter(a)}}function Jf(b,a,c){var d=H(b)&&"$"in b;!0===a?a=fa:G(a)||(a=function(a,b){if(H(a)||H(b))return!1;a=Q(""+a);b=Q(""+b);return-1!==a.indexOf(b)});return function(e){return d&&!H(e)?Ia(e,b.$,a,!1):Ia(e,b,a,c)}}function Ia(b,a,c,d,e){var f=typeof b,g=
typeof a;if("string"===g&&"!"===a.charAt(0))return!Ia(b,a.substring(1),c,d);if("array"===f)return b.some(function(b){return Ia(b,a,c,d)});switch(f){case "object":var h;if(d){for(h in b)if("$"!==h.charAt(0)&&Ia(b[h],a,c,!0))return!0;return e?!1:Ia(b,a,c,!1)}if("object"===g){for(h in a)if(e=a[h],!G(e)&&(f="$"===h,!Ia(f?b:b[h],e,c,f,f)))return!1;return!0}return c(b,a);case "function":return!1;default:return c(b,a)}}function jd(b){var a=b.NUMBER_FORMATS;return function(b,d,e){D(d)&&(d=a.CURRENCY_SYM);
D(e)&&(e=a.PATTERNS[1].maxFrac);return null==b?b:nd(b,a.PATTERNS[1],a.GROUP_SEP,a.DECIMAL_SEP,e).replace(/\u00A4/g,d)}}function ld(b){var a=b.NUMBER_FORMATS;return function(b,d){return null==b?b:nd(b,a.PATTERNS[0],a.GROUP_SEP,a.DECIMAL_SEP,d)}}function nd(b,a,c,d,e){if(!isFinite(b)||H(b))return"";var f=0>b;b=Math.abs(b);var g=b+"",h="",l=[],k=!1;if(-1!==g.indexOf("e")){var m=g.match(/([\d\.]+)e(-?)(\d+)/);m&&"-"==m[2]&&m[3]>e+1?b=0:(h=g,k=!0)}if(k)0<e&&1>b&&(h=b.toFixed(e),b=parseFloat(h));else{g=
(g.split(od)[1]||"").length;D(e)&&(e=Math.min(Math.max(a.minFrac,g),a.maxFrac));b=+(Math.round(+(b.toString()+"e"+e)).toString()+"e"+-e);var g=(""+b).split(od),k=g[0],g=g[1]||"",p=0,q=a.lgSize,u=a.gSize;if(k.length>=q+u)for(p=k.length-q,m=0;m<p;m++)0===(p-m)%u&&0!==m&&(h+=c),h+=k.charAt(m);for(m=p;m<k.length;m++)0===(k.length-m)%q&&0!==m&&(h+=c),h+=k.charAt(m);for(;g.length<e;)g+="0";e&&"0"!==e&&(h+=d+g.substr(0,e))}0===b&&(f=!1);l.push(f?a.negPre:a.posPre,h,f?a.negSuf:a.posSuf);return l.join("")}
function Hb(b,a,c){var d="";0>b&&(d="-",b=-b);for(b=""+b;b.length<a;)b="0"+b;c&&(b=b.substr(b.length-a));return d+b}function $(b,a,c,d){c=c||0;return function(e){e=e["get"+b]();if(0<c||e>-c)e+=c;0===e&&-12==c&&(e=12);return Hb(e,a,d)}}function Ib(b,a){return function(c,d){var e=c["get"+b](),f=ub(a?"SHORT"+b:b);return d[f][e]}}function pd(b){var a=(new Date(b,0,1)).getDay();return new Date(b,0,(4>=a?5:12)-a)}function qd(b){return function(a){var c=pd(a.getFullYear());a=+new Date(a.getFullYear(),a.getMonth(),
a.getDate()+(4-a.getDay()))-+c;a=1+Math.round(a/6048E5);return Hb(a,b)}}function kd(b){function a(a){var b;if(b=a.match(c)){a=new Date(0);var f=0,g=0,h=b[8]?a.setUTCFullYear:a.setFullYear,l=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=ba(b[9]+b[10]),g=ba(b[9]+b[11]));h.call(a,ba(b[1]),ba(b[2])-1,ba(b[3]));f=ba(b[4]||0)-f;g=ba(b[5]||0)-g;h=ba(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));l.call(a,f,g,h,b)}return a}var c=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
return function(c,e,f){var g="",h=[],l,k;e=e||"mediumDate";e=b.DATETIME_FORMATS[e]||e;F(c)&&(c=Kf.test(c)?ba(c):a(c));V(c)&&(c=new Date(c));if(!pa(c))return c;for(;e;)(k=Lf.exec(e))?(h=Ya(h,k,1),e=h.pop()):(h.push(e),e=null);f&&"UTC"===f&&(c=new Date(c.getTime()),c.setMinutes(c.getMinutes()+c.getTimezoneOffset()));s(h,function(a){l=Mf[a];g+=l?l(c,b.DATETIME_FORMATS):a.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function Ff(){return function(b,a){D(a)&&(a=2);return $a(b,a)}}function Gf(){return function(b,
a){V(b)&&(b=b.toString());if(!x(b)&&!F(b))return b;a=Infinity===Math.abs(Number(a))?Number(a):ba(a);if(F(b))return a?0<=a?b.slice(0,a):b.slice(a,b.length):"";var c,d;a>b.length?a=b.length:a<-b.length&&(a=-b.length);if(0<a)c=0,d=a;else{if(!a)return[];c=b.length+a;d=b.length}return b.slice(c,d)}}function md(b){return function(a,c,d){function e(a,b){return b?function(b,c){return a(c,b)}:a}function f(a){switch(typeof a){case "number":case "boolean":case "string":return!0;default:return!1}}function g(a){return null===
a?"null":"function"===typeof a.valueOf&&(a=a.valueOf(),f(a))||"function"===typeof a.toString&&(a=a.toString(),f(a))?a:""}function h(a,b){var c=typeof a,d=typeof b;c===d&&"object"===c&&(a=g(a),b=g(b));return c===d?("string"===c&&(a=a.toLowerCase(),b=b.toLowerCase()),a===b?0:a<b?-1:1):c<d?-1:1}if(!Ta(a))return a;c=x(c)?c:[c];0===c.length&&(c=["+"]);c=c.map(function(a){var c=!1,d=a||oa;if(F(a)){if("+"==a.charAt(0)||"-"==a.charAt(0))c="-"==a.charAt(0),a=a.substring(1);if(""===a)return e(h,c);d=b(a);if(d.constant){var f=
d();return e(function(a,b){return h(a[f],b[f])},c)}}return e(function(a,b){return h(d(a),d(b))},c)});return Za.call(a).sort(e(function(a,b){for(var d=0;d<c.length;d++){var e=c[d](a,b);if(0!==e)return e}return 0},d))}}function Ja(b){G(b)&&(b={link:b});b.restrict=b.restrict||"AC";return da(b)}function rd(b,a,c,d,e){var f=this,g=[],h=f.$$parentForm=b.parent().controller("form")||Jb;f.$error={};f.$$success={};f.$pending=t;f.$name=e(a.name||a.ngForm||"")(c);f.$dirty=!1;f.$pristine=!0;f.$valid=!0;f.$invalid=
!1;f.$submitted=!1;h.$addControl(f);f.$rollbackViewValue=function(){s(g,function(a){a.$rollbackViewValue()})};f.$commitViewValue=function(){s(g,function(a){a.$commitViewValue()})};f.$addControl=function(a){Ma(a.$name,"input");g.push(a);a.$name&&(f[a.$name]=a)};f.$$renameControl=function(a,b){var c=a.$name;f[c]===a&&delete f[c];f[b]=a;a.$name=b};f.$removeControl=function(a){a.$name&&f[a.$name]===a&&delete f[a.$name];s(f.$pending,function(b,c){f.$setValidity(c,null,a)});s(f.$error,function(b,c){f.$setValidity(c,
null,a)});Xa(g,a)};sd({ctrl:this,$element:b,set:function(a,b,c){var d=a[b];d?-1===d.indexOf(c)&&d.push(c):a[b]=[c]},unset:function(a,b,c){var d=a[b];d&&(Xa(d,c),0===d.length&&delete a[b])},parentForm:h,$animate:d});f.$setDirty=function(){d.removeClass(b,Sa);d.addClass(b,Kb);f.$dirty=!0;f.$pristine=!1;h.$setDirty()};f.$setPristine=function(){d.setClass(b,Sa,Kb+" ng-submitted");f.$dirty=!1;f.$pristine=!0;f.$submitted=!1;s(g,function(a){a.$setPristine()})};f.$setUntouched=function(){s(g,function(a){a.$setUntouched()})};
f.$setSubmitted=function(){d.addClass(b,"ng-submitted");f.$submitted=!0;h.$setSubmitted()}}function hc(b){b.$formatters.push(function(a){return b.$isEmpty(a)?a:a.toString()})}function ib(b,a,c,d,e,f){var g=Q(a[0].type);if(!e.android){var h=!1;a.on("compositionstart",function(a){h=!0});a.on("compositionend",function(){h=!1;l()})}var l=function(b){k&&(f.defer.cancel(k),k=null);if(!h){var e=a.val();b=b&&b.type;"password"===g||c.ngTrim&&"false"===c.ngTrim||(e=U(e));(d.$viewValue!==e||""===e&&d.$$hasNativeValidators)&&
d.$setViewValue(e,b)}};if(e.hasEvent("input"))a.on("input",l);else{var k,m=function(a,b,c){k||(k=f.defer(function(){k=null;b&&b.value===c||l(a)}))};a.on("keydown",function(a){var b=a.keyCode;91===b||15<b&&19>b||37<=b&&40>=b||m(a,this,this.value)});if(e.hasEvent("paste"))a.on("paste cut",m)}a.on("change",l);d.$render=function(){a.val(d.$isEmpty(d.$viewValue)?"":d.$viewValue)}}function Lb(b,a){return function(c,d){var e,f;if(pa(c))return c;if(F(c)){'"'==c.charAt(0)&&'"'==c.charAt(c.length-1)&&(c=c.substring(1,
c.length-1));if(Nf.test(c))return new Date(c);b.lastIndex=0;if(e=b.exec(c))return e.shift(),f=d?{yyyy:d.getFullYear(),MM:d.getMonth()+1,dd:d.getDate(),HH:d.getHours(),mm:d.getMinutes(),ss:d.getSeconds(),sss:d.getMilliseconds()/1E3}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0,sss:0},s(e,function(b,c){c<a.length&&(f[a[c]]=+b)}),new Date(f.yyyy,f.MM-1,f.dd,f.HH,f.mm,f.ss||0,1E3*f.sss||0)}return NaN}}function jb(b,a,c,d){return function(e,f,g,h,l,k,m){function p(a){return a&&!(a.getTime&&a.getTime()!==a.getTime())}
function q(a){return y(a)?pa(a)?a:c(a):t}td(e,f,g,h);ib(e,f,g,h,l,k);var u=h&&h.$options&&h.$options.timezone,r;h.$$parserName=b;h.$parsers.push(function(b){return h.$isEmpty(b)?null:a.test(b)?(b=c(b,r),"UTC"===u&&b.setMinutes(b.getMinutes()-b.getTimezoneOffset()),b):t});h.$formatters.push(function(a){if(a&&!pa(a))throw Mb("datefmt",a);if(p(a)){if((r=a)&&"UTC"===u){var b=6E4*r.getTimezoneOffset();r=new Date(r.getTime()+b)}return m("date")(a,d,u)}r=null;return""});if(y(g.min)||g.ngMin){var s;h.$validators.min=
function(a){return!p(a)||D(s)||c(a)>=s};g.$observe("min",function(a){s=q(a);h.$validate()})}if(y(g.max)||g.ngMax){var n;h.$validators.max=function(a){return!p(a)||D(n)||c(a)<=n};g.$observe("max",function(a){n=q(a);h.$validate()})}}}function td(b,a,c,d){(d.$$hasNativeValidators=H(a[0].validity))&&d.$parsers.push(function(b){var c=a.prop("validity")||{};return c.badInput&&!c.typeMismatch?t:b})}function ud(b,a,c,d,e){if(y(d)){b=b(d);if(!b.constant)throw T("ngModel")("constexpr",c,d);return b(a)}return e}
function sd(b){function a(a,b){b&&!f[a]?(k.addClass(e,a),f[a]=!0):!b&&f[a]&&(k.removeClass(e,a),f[a]=!1)}function c(b,c){b=b?"-"+tc(b,"-"):"";a(kb+b,!0===c);a(vd+b,!1===c)}var d=b.ctrl,e=b.$element,f={},g=b.set,h=b.unset,l=b.parentForm,k=b.$animate;f[vd]=!(f[kb]=e.hasClass(kb));d.$setValidity=function(b,e,f){e===t?(d.$pending||(d.$pending={}),g(d.$pending,b,f)):(d.$pending&&h(d.$pending,b,f),wd(d.$pending)&&(d.$pending=t));Wa(e)?e?(h(d.$error,b,f),g(d.$$success,b,f)):(g(d.$error,b,f),h(d.$$success,
b,f)):(h(d.$error,b,f),h(d.$$success,b,f));d.$pending?(a(xd,!0),d.$valid=d.$invalid=t,c("",null)):(a(xd,!1),d.$valid=wd(d.$error),d.$invalid=!d.$valid,c("",d.$valid));e=d.$pending&&d.$pending[b]?t:d.$error[b]?!1:d.$$success[b]?!0:null;c(b,e);l.$setValidity(b,e,d)}}function wd(b){if(b)for(var a in b)return!1;return!0}function ic(b,a){b="ngClass"+b;return["$animate",function(c){function d(a,b){var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],m=0;m<b.length;m++)if(e==b[m])continue a;c.push(e)}return c}
function e(a){if(!x(a)){if(F(a))return a.split(" ");if(H(a)){var b=[];s(a,function(a,c){a&&(b=b.concat(c.split(" ")))});return b}}return a}return{restrict:"AC",link:function(f,g,h){function l(a,b){var c=g.data("$classCounts")||{},d=[];s(a,function(a){if(0<b||c[a])c[a]=(c[a]||0)+b,c[a]===+(0<b)&&d.push(a)});g.data("$classCounts",c);return d.join(" ")}function k(b){if(!0===a||f.$index%2===a){var k=e(b||[]);if(!m){var u=l(k,1);h.$addClass(u)}else if(!fa(b,m)){var r=e(m),u=d(k,r),k=d(r,k),u=l(u,1),k=
l(k,-1);u&&u.length&&c.addClass(g,u);k&&k.length&&c.removeClass(g,k)}}m=qa(b)}var m;f.$watch(h[b],k,!0);h.$observe("class",function(a){k(f.$eval(h[b]))});"ngClass"!==b&&f.$watch("$index",function(c,d){var g=c&1;if(g!==(d&1)){var k=e(f.$eval(h[b]));g===a?(g=l(k,1),h.$addClass(g)):(g=l(k,-1),h.$removeClass(g))}})}}}]}var Of=/^\/(.+)\/([a-z]*)$/,Q=function(b){return F(b)?b.toLowerCase():b},rc=Object.prototype.hasOwnProperty,ub=function(b){return F(b)?b.toUpperCase():b},Ra,B,ra,Za=[].slice,rf=[].splice,
Pf=[].push,Da=Object.prototype.toString,Ka=T("ng"),ga=M.angular||(M.angular={}),bb,nb=0;Ra=Y.documentMode;C.$inject=[];oa.$inject=[];var x=Array.isArray,U=function(b){return F(b)?b.trim():b},gd=function(b){return b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08")},ab=function(){if(y(ab.isActive_))return ab.isActive_;var b=!(!Y.querySelector("[ng-csp]")&&!Y.querySelector("[data-ng-csp]"));if(!b)try{new Function("")}catch(a){b=!0}return ab.isActive_=b},rb=["ng-","data-ng-","ng:",
"x-ng-"],Md=/[A-Z]/g,uc=!1,Pb,na=1,pb=3,Qd={full:"1.3.8",major:1,minor:3,dot:8,codeName:"prophetic-narwhal"};R.expando="ng339";var zb=R.cache={},hf=1;R._data=function(b){return this.cache[b[this.expando]]||{}};var cf=/([\:\-\_]+(.))/g,df=/^moz([A-Z])/,Qf={mouseleave:"mouseout",mouseenter:"mouseover"},Sb=T("jqLite"),gf=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,Rb=/<|&#?\w+;/,ef=/<([\w:]+)/,ff=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ia={option:[1,'<select multiple="multiple">',
"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ia.optgroup=ia.option;ia.tbody=ia.tfoot=ia.colgroup=ia.caption=ia.thead;ia.th=ia.td;var La=R.prototype={ready:function(b){function a(){c||(c=!0,b())}var c=!1;"complete"===Y.readyState?setTimeout(a):(this.on("DOMContentLoaded",a),R(M).on("load",a))},toString:function(){var b=[];s(this,function(a){b.push(""+
a)});return"["+b.join(", ")+"]"},eq:function(b){return 0<=b?B(this[b]):B(this[this.length+b])},length:0,push:Pf,sort:[].sort,splice:[].splice},Eb={};s("multiple selected checked disabled readOnly required open".split(" "),function(b){Eb[Q(b)]=b});var Mc={};s("input select option textarea button form details".split(" "),function(b){Mc[b]=!0});var Nc={ngMinlength:"minlength",ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",ngPattern:"pattern"};s({data:Ub,removeData:xb},function(b,a){R[a]=b});s({data:Ub,
inheritedData:Db,scope:function(b){return B.data(b,"$scope")||Db(b.parentNode||b,["$isolateScope","$scope"])},isolateScope:function(b){return B.data(b,"$isolateScope")||B.data(b,"$isolateScopeNoTemplate")},controller:Ic,injector:function(b){return Db(b,"$injector")},removeAttr:function(b,a){b.removeAttribute(a)},hasClass:Ab,css:function(b,a,c){a=cb(a);if(y(c))b.style[a]=c;else return b.style[a]},attr:function(b,a,c){var d=Q(a);if(Eb[d])if(y(c))c?(b[a]=!0,b.setAttribute(a,d)):(b[a]=!1,b.removeAttribute(d));
else return b[a]||(b.attributes.getNamedItem(a)||C).specified?d:t;else if(y(c))b.setAttribute(a,c);else if(b.getAttribute)return b=b.getAttribute(a,2),null===b?t:b},prop:function(b,a,c){if(y(c))b[a]=c;else return b[a]},text:function(){function b(a,b){if(D(b)){var d=a.nodeType;return d===na||d===pb?a.textContent:""}a.textContent=b}b.$dv="";return b}(),val:function(b,a){if(D(a)){if(b.multiple&&"select"===ua(b)){var c=[];s(b.options,function(a){a.selected&&c.push(a.value||a.text)});return 0===c.length?
null:c}return b.value}b.value=a},html:function(b,a){if(D(a))return b.innerHTML;wb(b,!0);b.innerHTML=a},empty:Jc},function(b,a){R.prototype[a]=function(a,d){var e,f,g=this.length;if(b!==Jc&&(2==b.length&&b!==Ab&&b!==Ic?a:d)===t){if(H(a)){for(e=0;e<g;e++)if(b===Ub)b(this[e],a);else for(f in a)b(this[e],f,a[f]);return this}e=b.$dv;g=e===t?Math.min(g,1):g;for(f=0;f<g;f++){var h=b(this[f],a,d);e=e?e+h:h}return e}for(e=0;e<g;e++)b(this[e],a,d);return this}});s({removeData:xb,on:function a(c,d,e,f){if(y(f))throw Sb("onargs");
if(Ec(c)){var g=yb(c,!0);f=g.events;var h=g.handle;h||(h=g.handle=lf(c,f));for(var g=0<=d.indexOf(" ")?d.split(" "):[d],l=g.length;l--;){d=g[l];var k=f[d];k||(f[d]=[],"mouseenter"===d||"mouseleave"===d?a(c,Qf[d],function(a){var c=a.relatedTarget;c&&(c===this||this.contains(c))||h(a,d)}):"$destroy"!==d&&c.addEventListener(d,h,!1),k=f[d]);k.push(e)}}},off:Hc,one:function(a,c,d){a=B(a);a.on(c,function f(){a.off(c,d);a.off(c,f)});a.on(c,d)},replaceWith:function(a,c){var d,e=a.parentNode;wb(a);s(new R(c),
function(c){d?e.insertBefore(c,d.nextSibling):e.replaceChild(c,a);d=c})},children:function(a){var c=[];s(a.childNodes,function(a){a.nodeType===na&&c.push(a)});return c},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,c){var d=a.nodeType;if(d===na||11===d){c=new R(c);for(var d=0,e=c.length;d<e;d++)a.appendChild(c[d])}},prepend:function(a,c){if(a.nodeType===na){var d=a.firstChild;s(new R(c),function(c){a.insertBefore(c,d)})}},wrap:function(a,c){c=B(c).eq(0).clone()[0];
var d=a.parentNode;d&&d.replaceChild(c,a);c.appendChild(a)},remove:Kc,detach:function(a){Kc(a,!0)},after:function(a,c){var d=a,e=a.parentNode;c=new R(c);for(var f=0,g=c.length;f<g;f++){var h=c[f];e.insertBefore(h,d.nextSibling);d=h}},addClass:Cb,removeClass:Bb,toggleClass:function(a,c,d){c&&s(c.split(" "),function(c){var f=d;D(f)&&(f=!Ab(a,c));(f?Cb:Bb)(a,c)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){return a.nextElementSibling},find:function(a,c){return a.getElementsByTagName?
a.getElementsByTagName(c):[]},clone:Tb,triggerHandler:function(a,c,d){var e,f,g=c.type||c,h=yb(a);if(h=(h=h&&h.events)&&h[g])e={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},stopImmediatePropagation:function(){this.immediatePropagationStopped=!0},isImmediatePropagationStopped:function(){return!0===this.immediatePropagationStopped},stopPropagation:C,type:g,target:a},c.type&&(e=z(e,c)),c=qa(h),f=d?[e].concat(d):[e],s(c,function(c){e.isImmediatePropagationStopped()||
c.apply(a,f)})}},function(a,c){R.prototype[c]=function(c,e,f){for(var g,h=0,l=this.length;h<l;h++)D(g)?(g=a(this[h],c,e,f),y(g)&&(g=B(g))):Gc(g,a(this[h],c,e,f));return y(g)?g:this};R.prototype.bind=R.prototype.on;R.prototype.unbind=R.prototype.off});db.prototype={put:function(a,c){this[Na(a,this.nextUid)]=c},get:function(a){return this[Na(a,this.nextUid)]},remove:function(a){var c=this[a=Na(a,this.nextUid)];delete this[a];return c}};var Pc=/^function\s*[^\(]*\(\s*([^\)]*)\)/m,nf=/,/,of=/^\s*(_?)(\S+?)\1\s*$/,
Oc=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Ga=T("$injector");Ob.$$annotate=Vb;var Rf=T("$animate"),Ce=["$provide",function(a){this.$$selectors={};this.register=function(c,d){var e=c+"-animation";if(c&&"."!=c.charAt(0))throw Rf("notcsel",c);this.$$selectors[c.substr(1)]=e;a.factory(e,d)};this.classNameFilter=function(a){1===arguments.length&&(this.$$classNameFilter=a instanceof RegExp?a:null);return this.$$classNameFilter};this.$get=["$$q","$$asyncCallback","$rootScope",function(a,d,e){function f(d){var f,
g=a.defer();g.promise.$$cancelFn=function(){f&&f()};e.$$postDigest(function(){f=d(function(){g.resolve()})});return g.promise}function g(a,c){var d=[],e=[],f=ha();s((a.attr("class")||"").split(/\s+/),function(a){f[a]=!0});s(c,function(a,c){var g=f[c];!1===a&&g?e.push(c):!0!==a||g||d.push(c)});return 0<d.length+e.length&&[d.length?d:null,e.length?e:null]}function h(a,c,d){for(var e=0,f=c.length;e<f;++e)a[c[e]]=d}function l(){m||(m=a.defer(),d(function(){m.resolve();m=null}));return m.promise}function k(a,
c){if(ga.isObject(c)){var d=z(c.from||{},c.to||{});a.css(d)}}var m;return{animate:function(a,c,d){k(a,{from:c,to:d});return l()},enter:function(a,c,d,e){k(a,e);d?d.after(a):c.prepend(a);return l()},leave:function(a,c){a.remove();return l()},move:function(a,c,d,e){return this.enter(a,c,d,e)},addClass:function(a,c,d){return this.setClass(a,c,[],d)},$$addClassImmediately:function(a,c,d){a=B(a);c=F(c)?c:x(c)?c.join(" "):"";s(a,function(a){Cb(a,c)});k(a,d);return l()},removeClass:function(a,c,d){return this.setClass(a,
[],c,d)},$$removeClassImmediately:function(a,c,d){a=B(a);c=F(c)?c:x(c)?c.join(" "):"";s(a,function(a){Bb(a,c)});k(a,d);return l()},setClass:function(a,c,d,e){var k=this,l=!1;a=B(a);var m=a.data("$$animateClasses");m?e&&m.options&&(m.options=ga.extend(m.options||{},e)):(m={classes:{},options:e},l=!0);e=m.classes;c=x(c)?c:c.split(" ");d=x(d)?d:d.split(" ");h(e,c,!0);h(e,d,!1);l&&(m.promise=f(function(c){var d=a.data("$$animateClasses");a.removeData("$$animateClasses");if(d){var e=g(a,d.classes);e&&
k.$$setClassImmediately(a,e[0],e[1],d.options)}c()}),a.data("$$animateClasses",m));return m.promise},$$setClassImmediately:function(a,c,d,e){c&&this.$$addClassImmediately(a,c);d&&this.$$removeClassImmediately(a,d);k(a,e);return l()},enabled:C,cancel:C}}]}],ja=T("$compile");wc.$inject=["$provide","$$sanitizeUriProvider"];var Rc=/^((?:x|data)[\:\-_])/i,Vc="application/json",Zb={"Content-Type":Vc+";charset=utf-8"},tf=/^\[|^\{(?!\{)/,uf={"[":/]$/,"{":/}$/},sf=/^\)\]\}',?\n/,$b=T("$interpolate"),Sf=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,
xf={http:80,https:443,ftp:21},Fb=T("$location"),Tf={$$html5:!1,$$replace:!1,absUrl:Gb("$$absUrl"),url:function(a){if(D(a))return this.$$url;var c=Sf.exec(a);(c[1]||""===a)&&this.path(decodeURIComponent(c[1]));(c[2]||c[1]||""===a)&&this.search(c[3]||"");this.hash(c[5]||"");return this},protocol:Gb("$$protocol"),host:Gb("$$host"),port:Gb("$$port"),path:dd("$$path",function(a){a=null!==a?a.toString():"";return"/"==a.charAt(0)?a:"/"+a}),search:function(a,c){switch(arguments.length){case 0:return this.$$search;
case 1:if(F(a)||V(a))a=a.toString(),this.$$search=qc(a);else if(H(a))a=Ea(a,{}),s(a,function(c,e){null==c&&delete a[e]}),this.$$search=a;else throw Fb("isrcharg");break;default:D(c)||null===c?delete this.$$search[a]:this.$$search[a]=c}this.$$compose();return this},hash:dd("$$hash",function(a){return null!==a?a.toString():""}),replace:function(){this.$$replace=!0;return this}};s([cd,dc,cc],function(a){a.prototype=Object.create(Tf);a.prototype.state=function(c){if(!arguments.length)return this.$$state;
if(a!==cc||!this.$$html5)throw Fb("nostate");this.$$state=D(c)?null:c;return this}});var la=T("$parse"),Uf=Function.prototype.call,Vf=Function.prototype.apply,Wf=Function.prototype.bind,lb=ha();s({"null":function(){return null},"true":function(){return!0},"false":function(){return!1},undefined:function(){}},function(a,c){a.constant=a.literal=a.sharedGetter=!0;lb[c]=a});lb["this"]=function(a){return a};lb["this"].sharedGetter=!0;var mb=z(ha(),{"+":function(a,c,d,e){d=d(a,c);e=e(a,c);return y(d)?y(e)?
d+e:d:y(e)?e:t},"-":function(a,c,d,e){d=d(a,c);e=e(a,c);return(y(d)?d:0)-(y(e)?e:0)},"*":function(a,c,d,e){return d(a,c)*e(a,c)},"/":function(a,c,d,e){return d(a,c)/e(a,c)},"%":function(a,c,d,e){return d(a,c)%e(a,c)},"===":function(a,c,d,e){return d(a,c)===e(a,c)},"!==":function(a,c,d,e){return d(a,c)!==e(a,c)},"==":function(a,c,d,e){return d(a,c)==e(a,c)},"!=":function(a,c,d,e){return d(a,c)!=e(a,c)},"<":function(a,c,d,e){return d(a,c)<e(a,c)},">":function(a,c,d,e){return d(a,c)>e(a,c)},"<=":function(a,
c,d,e){return d(a,c)<=e(a,c)},">=":function(a,c,d,e){return d(a,c)>=e(a,c)},"&&":function(a,c,d,e){return d(a,c)&&e(a,c)},"||":function(a,c,d,e){return d(a,c)||e(a,c)},"!":function(a,c,d){return!d(a,c)},"=":!0,"|":!0}),Xf={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},gc=function(a){this.options=a};gc.prototype={constructor:gc,lex:function(a){this.text=a;this.index=0;for(this.tokens=[];this.index<this.text.length;)if(a=this.text.charAt(this.index),'"'===a||"'"===a)this.readString(a);else if(this.isNumber(a)||
"."===a&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdent(a))this.readIdent();else if(this.is(a,"(){}[].,;:?"))this.tokens.push({index:this.index,text:a}),this.index++;else if(this.isWhitespace(a))this.index++;else{var c=a+this.peek(),d=c+this.peek(2),e=mb[c],f=mb[d];mb[a]||e||f?(a=f?d:e?c:a,this.tokens.push({index:this.index,text:a,operator:!0}),this.index+=a.length):this.throwError("Unexpected next character ",this.index,this.index+1)}return this.tokens},is:function(a,c){return-1!==
c.indexOf(a)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a&&"string"===typeof a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdent:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,c,d){d=d||this.index;c=y(c)?"s "+c+"-"+this.index+" ["+this.text.substring(c,
d)+"]":" "+d;throw la("lexerr",a,c,this.text);},readNumber:function(){for(var a="",c=this.index;this.index<this.text.length;){var d=Q(this.text.charAt(this.index));if("."==d||this.isNumber(d))a+=d;else{var e=this.peek();if("e"==d&&this.isExpOperator(e))a+=d;else if(this.isExpOperator(d)&&e&&this.isNumber(e)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||e&&this.isNumber(e)||"e"!=a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}this.tokens.push({index:c,
text:a,constant:!0,value:Number(a)})},readIdent:function(){for(var a=this.index;this.index<this.text.length;){var c=this.text.charAt(this.index);if(!this.isIdent(c)&&!this.isNumber(c))break;this.index++}this.tokens.push({index:a,text:this.text.slice(a,this.index),identifier:!0})},readString:function(a){var c=this.index;this.index++;for(var d="",e=a,f=!1;this.index<this.text.length;){var g=this.text.charAt(this.index),e=e+g;if(f)"u"===g?(f=this.text.substring(this.index+1,this.index+5),f.match(/[\da-f]{4}/i)||
this.throwError("Invalid unicode escape [\\u"+f+"]"),this.index+=4,d+=String.fromCharCode(parseInt(f,16))):d+=Xf[g]||g,f=!1;else if("\\"===g)f=!0;else{if(g===a){this.index++;this.tokens.push({index:c,text:e,constant:!0,value:d});return}d+=g}this.index++}this.throwError("Unterminated quote",c)}};var hb=function(a,c,d){this.lexer=a;this.$filter=c;this.options=d};hb.ZERO=z(function(){return 0},{sharedGetter:!0,constant:!0});hb.prototype={constructor:hb,parse:function(a){this.text=a;this.tokens=this.lexer.lex(a);
a=this.statements();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);a.literal=!!a.literal;a.constant=!!a.constant;return a},primary:function(){var a;this.expect("(")?(a=this.filterChain(),this.consume(")")):this.expect("[")?a=this.arrayDeclaration():this.expect("{")?a=this.object():this.peek().identifier&&this.peek().text in lb?a=lb[this.consume().text]:this.peek().identifier?a=this.identifier():this.peek().constant?a=this.constant():this.throwError("not a primary expression",
this.peek());for(var c,d;c=this.expect("(","[",".");)"("===c.text?(a=this.functionCall(a,d),d=null):"["===c.text?(d=a,a=this.objectIndex(a)):"."===c.text?(d=a,a=this.fieldAccess(a)):this.throwError("IMPOSSIBLE");return a},throwError:function(a,c){throw la("syntax",c.text,a,c.index+1,this.text,this.text.substring(c.index));},peekToken:function(){if(0===this.tokens.length)throw la("ueoe",this.text);return this.tokens[0]},peek:function(a,c,d,e){return this.peekAhead(0,a,c,d,e)},peekAhead:function(a,
c,d,e,f){if(this.tokens.length>a){a=this.tokens[a];var g=a.text;if(g===c||g===d||g===e||g===f||!(c||d||e||f))return a}return!1},expect:function(a,c,d,e){return(a=this.peek(a,c,d,e))?(this.tokens.shift(),a):!1},consume:function(a){if(0===this.tokens.length)throw la("ueoe",this.text);var c=this.expect(a);c||this.throwError("is unexpected, expecting ["+a+"]",this.peek());return c},unaryFn:function(a,c){var d=mb[a];return z(function(a,f){return d(a,f,c)},{constant:c.constant,inputs:[c]})},binaryFn:function(a,
c,d,e){var f=mb[c];return z(function(c,e){return f(c,e,a,d)},{constant:a.constant&&d.constant,inputs:!e&&[a,d]})},identifier:function(){for(var a=this.consume().text;this.peek(".")&&this.peekAhead(1).identifier&&!this.peekAhead(2,"(");)a+=this.consume().text+this.consume().text;return zf(a,this.options,this.text)},constant:function(){var a=this.consume().value;return z(function(){return a},{constant:!0,literal:!0})},statements:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",
";","]")&&a.push(this.filterChain()),!this.expect(";"))return 1===a.length?a[0]:function(c,d){for(var e,f=0,g=a.length;f<g;f++)e=a[f](c,d);return e}},filterChain:function(){for(var a=this.expression();this.expect("|");)a=this.filter(a);return a},filter:function(a){var c=this.$filter(this.consume().text),d,e;if(this.peek(":"))for(d=[],e=[];this.expect(":");)d.push(this.expression());var f=[a].concat(d||[]);return z(function(f,h){var l=a(f,h);if(e){e[0]=l;for(l=d.length;l--;)e[l+1]=d[l](f,h);return c.apply(t,
e)}return c(l)},{constant:!c.$stateful&&f.every(ec),inputs:!c.$stateful&&f})},expression:function(){return this.assignment()},assignment:function(){var a=this.ternary(),c,d;return(d=this.expect("="))?(a.assign||this.throwError("implies assignment but ["+this.text.substring(0,d.index)+"] can not be assigned to",d),c=this.ternary(),z(function(d,f){return a.assign(d,c(d,f),f)},{inputs:[a,c]})):a},ternary:function(){var a=this.logicalOR(),c;if(this.expect("?")&&(c=this.assignment(),this.consume(":"))){var d=
this.assignment();return z(function(e,f){return a(e,f)?c(e,f):d(e,f)},{constant:a.constant&&c.constant&&d.constant})}return a},logicalOR:function(){for(var a=this.logicalAND(),c;c=this.expect("||");)a=this.binaryFn(a,c.text,this.logicalAND(),!0);return a},logicalAND:function(){for(var a=this.equality(),c;c=this.expect("&&");)a=this.binaryFn(a,c.text,this.equality(),!0);return a},equality:function(){for(var a=this.relational(),c;c=this.expect("==","!=","===","!==");)a=this.binaryFn(a,c.text,this.relational());
return a},relational:function(){for(var a=this.additive(),c;c=this.expect("<",">","<=",">=");)a=this.binaryFn(a,c.text,this.additive());return a},additive:function(){for(var a=this.multiplicative(),c;c=this.expect("+","-");)a=this.binaryFn(a,c.text,this.multiplicative());return a},multiplicative:function(){for(var a=this.unary(),c;c=this.expect("*","/","%");)a=this.binaryFn(a,c.text,this.unary());return a},unary:function(){var a;return this.expect("+")?this.primary():(a=this.expect("-"))?this.binaryFn(hb.ZERO,
a.text,this.unary()):(a=this.expect("!"))?this.unaryFn(a.text,this.unary()):this.primary()},fieldAccess:function(a){var c=this.identifier();return z(function(d,e,f){d=f||a(d,e);return null==d?t:c(d)},{assign:function(d,e,f){(f=a(d,f))||a.assign(d,f={});return c.assign(f,e)}})},objectIndex:function(a){var c=this.text,d=this.expression();this.consume("]");return z(function(e,f){var g=a(e,f),h=d(e,f);sa(h,c);return g?ta(g[h],c):t},{assign:function(e,f,g){var h=sa(d(e,g),c);(g=ta(a(e,g),c))||a.assign(e,
g={});return g[h]=f}})},functionCall:function(a,c){var d=[];if(")"!==this.peekToken().text){do d.push(this.expression());while(this.expect(","))}this.consume(")");var e=this.text,f=d.length?[]:null;return function(g,h){var l=c?c(g,h):y(c)?t:g,k=a(g,h,l)||C;if(f)for(var m=d.length;m--;)f[m]=ta(d[m](g,h),e);ta(l,e);if(k){if(k.constructor===k)throw la("isecfn",e);if(k===Uf||k===Vf||k===Wf)throw la("isecff",e);}l=k.apply?k.apply(l,f):k(f[0],f[1],f[2],f[3],f[4]);return ta(l,e)}},arrayDeclaration:function(){var a=
[];if("]"!==this.peekToken().text){do{if(this.peek("]"))break;a.push(this.expression())}while(this.expect(","))}this.consume("]");return z(function(c,d){for(var e=[],f=0,g=a.length;f<g;f++)e.push(a[f](c,d));return e},{literal:!0,constant:a.every(ec),inputs:a})},object:function(){var a=[],c=[];if("}"!==this.peekToken().text){do{if(this.peek("}"))break;var d=this.consume();d.constant?a.push(d.value):d.identifier?a.push(d.text):this.throwError("invalid key",d);this.consume(":");c.push(this.expression())}while(this.expect(","))
}this.consume("}");return z(function(d,f){for(var g={},h=0,l=c.length;h<l;h++)g[a[h]]=c[h](d,f);return g},{literal:!0,constant:c.every(ec),inputs:c})}};var Bf=ha(),Af=ha(),Cf=Object.prototype.valueOf,Ca=T("$sce"),ma={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},ja=T("$compile"),Z=Y.createElement("a"),id=Ba(M.location.href);Dc.$inject=["$provide"];jd.$inject=["$locale"];ld.$inject=["$locale"];var od=".",Mf={yyyy:$("FullYear",4),yy:$("FullYear",2,0,!0),y:$("FullYear",1),MMMM:Ib("Month"),
MMM:Ib("Month",!0),MM:$("Month",2,1),M:$("Month",1,1),dd:$("Date",2),d:$("Date",1),HH:$("Hours",2),H:$("Hours",1),hh:$("Hours",2,-12),h:$("Hours",1,-12),mm:$("Minutes",2),m:$("Minutes",1),ss:$("Seconds",2),s:$("Seconds",1),sss:$("Milliseconds",3),EEEE:Ib("Day"),EEE:Ib("Day",!0),a:function(a,c){return 12>a.getHours()?c.AMPMS[0]:c.AMPMS[1]},Z:function(a){a=-1*a.getTimezoneOffset();return a=(0<=a?"+":"")+(Hb(Math[0<a?"floor":"ceil"](a/60),2)+Hb(Math.abs(a%60),2))},ww:qd(2),w:qd(1)},Lf=/((?:[^yMdHhmsaZEw']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|w+))(.*)/,
Kf=/^\-?\d+$/;kd.$inject=["$locale"];var Hf=da(Q),If=da(ub);md.$inject=["$parse"];var Td=da({restrict:"E",compile:function(a,c){if(!c.href&&!c.xlinkHref&&!c.name)return function(a,c){var f="[object SVGAnimatedString]"===Da.call(c.prop("href"))?"xlink:href":"href";c.on("click",function(a){c.attr(f)||a.preventDefault()})}}}),vb={};s(Eb,function(a,c){if("multiple"!=a){var d=ya("ng-"+c);vb[d]=function(){return{restrict:"A",priority:100,link:function(a,f,g){a.$watch(g[d],function(a){g.$set(c,!!a)})}}}}});
s(Nc,function(a,c){vb[c]=function(){return{priority:100,link:function(a,e,f){if("ngPattern"===c&&"/"==f.ngPattern.charAt(0)&&(e=f.ngPattern.match(Of))){f.$set("ngPattern",new RegExp(e[1],e[2]));return}a.$watch(f[c],function(a){f.$set(c,a)})}}}});s(["src","srcset","href"],function(a){var c=ya("ng-"+a);vb[c]=function(){return{priority:99,link:function(d,e,f){var g=a,h=a;"href"===a&&"[object SVGAnimatedString]"===Da.call(e.prop("href"))&&(h="xlinkHref",f.$attr[h]="xlink:href",g=null);f.$observe(c,function(c){c?
(f.$set(h,c),Ra&&g&&e.prop(g,f[h])):"href"===a&&f.$set(h,null)})}}}});var Jb={$addControl:C,$$renameControl:function(a,c){a.$name=c},$removeControl:C,$setValidity:C,$setDirty:C,$setPristine:C,$setSubmitted:C};rd.$inject=["$element","$attrs","$scope","$animate","$interpolate"];var yd=function(a){return["$timeout",function(c){return{name:"form",restrict:a?"EAC":"E",controller:rd,compile:function(a){a.addClass(Sa).addClass(kb);return{pre:function(a,d,g,h){if(!("action"in g)){var l=function(c){a.$apply(function(){h.$commitViewValue();
h.$setSubmitted()});c.preventDefault()};d[0].addEventListener("submit",l,!1);d.on("$destroy",function(){c(function(){d[0].removeEventListener("submit",l,!1)},0,!1)})}var k=h.$$parentForm,m=h.$name;m&&(gb(a,m,h,m),g.$observe(g.name?"name":"ngForm",function(c){m!==c&&(gb(a,m,t,m),m=c,gb(a,m,h,m),k.$$renameControl(h,m))}));d.on("$destroy",function(){k.$removeControl(h);m&&gb(a,m,t,m);z(h,Jb)})}}}}}]},Ud=yd(),ge=yd(!0),Nf=/\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/,Yf=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
Zf=/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,$f=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,zd=/^(\d{4})-(\d{2})-(\d{2})$/,Ad=/^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,jc=/^(\d{4})-W(\d\d)$/,Bd=/^(\d{4})-(\d\d)$/,Cd=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,ag=/(\s+|^)default(\s+|$)/,Mb=new T("ngModel"),Dd={text:function(a,c,d,e,f,g){ib(a,c,d,e,f,g);hc(e)},date:jb("date",zd,Lb(zd,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":jb("datetimelocal",
Ad,Lb(Ad,"yyyy MM dd HH mm ss sss".split(" ")),"yyyy-MM-ddTHH:mm:ss.sss"),time:jb("time",Cd,Lb(Cd,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:jb("week",jc,function(a,c){if(pa(a))return a;if(F(a)){jc.lastIndex=0;var d=jc.exec(a);if(d){var e=+d[1],f=+d[2],g=d=0,h=0,l=0,k=pd(e),f=7*(f-1);c&&(d=c.getHours(),g=c.getMinutes(),h=c.getSeconds(),l=c.getMilliseconds());return new Date(e,0,k.getDate()+f,d,g,h,l)}}return NaN},"yyyy-Www"),month:jb("month",Bd,Lb(Bd,["yyyy","MM"]),"yyyy-MM"),number:function(a,
c,d,e,f,g){td(a,c,d,e);ib(a,c,d,e,f,g);e.$$parserName="number";e.$parsers.push(function(a){return e.$isEmpty(a)?null:$f.test(a)?parseFloat(a):t});e.$formatters.push(function(a){if(!e.$isEmpty(a)){if(!V(a))throw Mb("numfmt",a);a=a.toString()}return a});if(d.min||d.ngMin){var h;e.$validators.min=function(a){return e.$isEmpty(a)||D(h)||a>=h};d.$observe("min",function(a){y(a)&&!V(a)&&(a=parseFloat(a,10));h=V(a)&&!isNaN(a)?a:t;e.$validate()})}if(d.max||d.ngMax){var l;e.$validators.max=function(a){return e.$isEmpty(a)||
D(l)||a<=l};d.$observe("max",function(a){y(a)&&!V(a)&&(a=parseFloat(a,10));l=V(a)&&!isNaN(a)?a:t;e.$validate()})}},url:function(a,c,d,e,f,g){ib(a,c,d,e,f,g);hc(e);e.$$parserName="url";e.$validators.url=function(a,c){var d=a||c;return e.$isEmpty(d)||Yf.test(d)}},email:function(a,c,d,e,f,g){ib(a,c,d,e,f,g);hc(e);e.$$parserName="email";e.$validators.email=function(a,c){var d=a||c;return e.$isEmpty(d)||Zf.test(d)}},radio:function(a,c,d,e){D(d.name)&&c.attr("name",++nb);c.on("click",function(a){c[0].checked&&
e.$setViewValue(d.value,a&&a.type)});e.$render=function(){c[0].checked=d.value==e.$viewValue};d.$observe("value",e.$render)},checkbox:function(a,c,d,e,f,g,h,l){var k=ud(l,a,"ngTrueValue",d.ngTrueValue,!0),m=ud(l,a,"ngFalseValue",d.ngFalseValue,!1);c.on("click",function(a){e.$setViewValue(c[0].checked,a&&a.type)});e.$render=function(){c[0].checked=e.$viewValue};e.$isEmpty=function(a){return!1===a};e.$formatters.push(function(a){return fa(a,k)});e.$parsers.push(function(a){return a?k:m})},hidden:C,
button:C,submit:C,reset:C,file:C},xc=["$browser","$sniffer","$filter","$parse",function(a,c,d,e){return{restrict:"E",require:["?ngModel"],link:{pre:function(f,g,h,l){l[0]&&(Dd[Q(h.type)]||Dd.text)(f,g,h,l[0],c,a,d,e)}}}}],kb="ng-valid",vd="ng-invalid",Sa="ng-pristine",Kb="ng-dirty",xd="ng-pending",bg=["$scope","$exceptionHandler","$attrs","$element","$parse","$animate","$timeout","$rootScope","$q","$interpolate",function(a,c,d,e,f,g,h,l,k,m){this.$modelValue=this.$viewValue=Number.NaN;this.$$rawModelValue=
t;this.$validators={};this.$asyncValidators={};this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$untouched=!0;this.$touched=!1;this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$error={};this.$$success={};this.$pending=t;this.$name=m(d.name||"",!1)(a);var p=f(d.ngModel),q=p.assign,u=p,r=q,O=null,n=this;this.$$setOptions=function(a){if((n.$options=a)&&a.getterSetter){var c=f(d.ngModel+"()"),g=f(d.ngModel+"($$$p)");u=function(a){var d=p(a);G(d)&&(d=c(a));return d};
r=function(a,c){G(p(a))?g(a,{$$$p:n.$modelValue}):q(a,n.$modelValue)}}else if(!p.assign)throw Mb("nonassign",d.ngModel,va(e));};this.$render=C;this.$isEmpty=function(a){return D(a)||""===a||null===a||a!==a};var v=e.inheritedData("$formController")||Jb,w=0;sd({ctrl:this,$element:e,set:function(a,c){a[c]=!0},unset:function(a,c){delete a[c]},parentForm:v,$animate:g});this.$setPristine=function(){n.$dirty=!1;n.$pristine=!0;g.removeClass(e,Kb);g.addClass(e,Sa)};this.$setDirty=function(){n.$dirty=!0;n.$pristine=
!1;g.removeClass(e,Sa);g.addClass(e,Kb);v.$setDirty()};this.$setUntouched=function(){n.$touched=!1;n.$untouched=!0;g.setClass(e,"ng-untouched","ng-touched")};this.$setTouched=function(){n.$touched=!0;n.$untouched=!1;g.setClass(e,"ng-touched","ng-untouched")};this.$rollbackViewValue=function(){h.cancel(O);n.$viewValue=n.$$lastCommittedViewValue;n.$render()};this.$validate=function(){if(!V(n.$modelValue)||!isNaN(n.$modelValue)){var a=n.$$rawModelValue,c=n.$valid,d=n.$modelValue,e=n.$options&&n.$options.allowInvalid;
n.$$runValidators(n.$error[n.$$parserName||"parse"]?!1:t,a,n.$$lastCommittedViewValue,function(f){e||c===f||(n.$modelValue=f?a:t,n.$modelValue!==d&&n.$$writeModelToScope())})}};this.$$runValidators=function(a,c,d,e){function f(){var a=!0;s(n.$validators,function(e,f){var g=e(c,d);a=a&&g;h(f,g)});return a?!0:(s(n.$asyncValidators,function(a,c){h(c,null)}),!1)}function g(){var a=[],e=!0;s(n.$asyncValidators,function(f,g){var l=f(c,d);if(!l||!G(l.then))throw Mb("$asyncValidators",l);h(g,t);a.push(l.then(function(){h(g,
!0)},function(a){e=!1;h(g,!1)}))});a.length?k.all(a).then(function(){l(e)},C):l(!0)}function h(a,c){m===w&&n.$setValidity(a,c)}function l(a){m===w&&e(a)}w++;var m=w;(function(a){var c=n.$$parserName||"parse";if(a===t)h(c,null);else if(h(c,a),!a)return s(n.$validators,function(a,c){h(c,null)}),s(n.$asyncValidators,function(a,c){h(c,null)}),!1;return!0})(a)?f()?g():l(!1):l(!1)};this.$commitViewValue=function(){var a=n.$viewValue;h.cancel(O);if(n.$$lastCommittedViewValue!==a||""===a&&n.$$hasNativeValidators)n.$$lastCommittedViewValue=
a,n.$pristine&&this.$setDirty(),this.$$parseAndValidate()};this.$$parseAndValidate=function(){var c=n.$$lastCommittedViewValue,d=D(c)?t:!0;if(d)for(var e=0;e<n.$parsers.length;e++)if(c=n.$parsers[e](c),D(c)){d=!1;break}V(n.$modelValue)&&isNaN(n.$modelValue)&&(n.$modelValue=u(a));var f=n.$modelValue,g=n.$options&&n.$options.allowInvalid;n.$$rawModelValue=c;g&&(n.$modelValue=c,n.$modelValue!==f&&n.$$writeModelToScope());n.$$runValidators(d,c,n.$$lastCommittedViewValue,function(a){g||(n.$modelValue=
a?c:t,n.$modelValue!==f&&n.$$writeModelToScope())})};this.$$writeModelToScope=function(){r(a,n.$modelValue);s(n.$viewChangeListeners,function(a){try{a()}catch(d){c(d)}})};this.$setViewValue=function(a,c){n.$viewValue=a;n.$options&&!n.$options.updateOnDefault||n.$$debounceViewValueCommit(c)};this.$$debounceViewValueCommit=function(c){var d=0,e=n.$options;e&&y(e.debounce)&&(e=e.debounce,V(e)?d=e:V(e[c])?d=e[c]:V(e["default"])&&(d=e["default"]));h.cancel(O);d?O=h(function(){n.$commitViewValue()},d):
l.$$phase?n.$commitViewValue():a.$apply(function(){n.$commitViewValue()})};a.$watch(function(){var c=u(a);if(c!==n.$modelValue){n.$modelValue=n.$$rawModelValue=c;for(var d=n.$formatters,e=d.length,f=c;e--;)f=d[e](f);n.$viewValue!==f&&(n.$viewValue=n.$$lastCommittedViewValue=f,n.$render(),n.$$runValidators(t,c,f,C))}return c})}],ve=["$rootScope",function(a){return{restrict:"A",require:["ngModel","^?form","^?ngModelOptions"],controller:bg,priority:1,compile:function(c){c.addClass(Sa).addClass("ng-untouched").addClass(kb);
return{pre:function(a,c,f,g){var h=g[0],l=g[1]||Jb;h.$$setOptions(g[2]&&g[2].$options);l.$addControl(h);f.$observe("name",function(a){h.$name!==a&&l.$$renameControl(h,a)});a.$on("$destroy",function(){l.$removeControl(h)})},post:function(c,e,f,g){var h=g[0];if(h.$options&&h.$options.updateOn)e.on(h.$options.updateOn,function(a){h.$$debounceViewValueCommit(a&&a.type)});e.on("blur",function(e){h.$touched||(a.$$phase?c.$evalAsync(h.$setTouched):c.$apply(h.$setTouched))})}}}}}],xe=da({restrict:"A",require:"ngModel",
link:function(a,c,d,e){e.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),zc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){e&&(d.required=!0,e.$validators.required=function(a,c){return!d.required||!e.$isEmpty(c)},d.$observe("required",function(){e.$validate()}))}}},yc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f,g=d.ngPattern||d.pattern;d.$observe("pattern",function(a){F(a)&&0<a.length&&(a=new RegExp("^"+a+"$"));if(a&&
!a.test)throw T("ngPattern")("noregexp",g,a,va(c));f=a||t;e.$validate()});e.$validators.pattern=function(a){return e.$isEmpty(a)||D(f)||f.test(a)}}}}},Bc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f=-1;d.$observe("maxlength",function(a){a=ba(a);f=isNaN(a)?-1:a;e.$validate()});e.$validators.maxlength=function(a,c){return 0>f||e.$isEmpty(a)||c.length<=f}}}}},Ac=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f=0;d.$observe("minlength",
function(a){f=ba(a)||0;e.$validate()});e.$validators.minlength=function(a,c){return e.$isEmpty(c)||c.length>=f}}}}},we=function(){return{restrict:"A",priority:100,require:"ngModel",link:function(a,c,d,e){var f=c.attr(d.$attr.ngList)||", ",g="false"!==d.ngTrim,h=g?U(f):f;e.$parsers.push(function(a){if(!D(a)){var c=[];a&&s(a.split(h),function(a){a&&c.push(g?U(a):a)});return c}});e.$formatters.push(function(a){return x(a)?a.join(f):t});e.$isEmpty=function(a){return!a||!a.length}}}},cg=/^(true|false|\d+)$/,
ye=function(){return{restrict:"A",priority:100,compile:function(a,c){return cg.test(c.ngValue)?function(a,c,f){f.$set("value",a.$eval(f.ngValue))}:function(a,c,f){a.$watch(f.ngValue,function(a){f.$set("value",a)})}}}},ze=function(){return{restrict:"A",controller:["$scope","$attrs",function(a,c){var d=this;this.$options=a.$eval(c.ngModelOptions);this.$options.updateOn!==t?(this.$options.updateOnDefault=!1,this.$options.updateOn=U(this.$options.updateOn.replace(ag,function(){d.$options.updateOnDefault=
!0;return" "}))):this.$options.updateOnDefault=!0}]}},Zd=["$compile",function(a){return{restrict:"AC",compile:function(c){a.$$addBindingClass(c);return function(c,e,f){a.$$addBindingInfo(e,f.ngBind);e=e[0];c.$watch(f.ngBind,function(a){e.textContent=a===t?"":a})}}}}],ae=["$interpolate","$compile",function(a,c){return{compile:function(d){c.$$addBindingClass(d);return function(d,f,g){d=a(f.attr(g.$attr.ngBindTemplate));c.$$addBindingInfo(f,d.expressions);f=f[0];g.$observe("ngBindTemplate",function(a){f.textContent=
a===t?"":a})}}}}],$d=["$sce","$parse","$compile",function(a,c,d){return{restrict:"A",compile:function(e,f){var g=c(f.ngBindHtml),h=c(f.ngBindHtml,function(a){return(a||"").toString()});d.$$addBindingClass(e);return function(c,e,f){d.$$addBindingInfo(e,f.ngBindHtml);c.$watch(h,function(){e.html(a.getTrustedHtml(g(c))||"")})}}}}],be=ic("",!0),de=ic("Odd",0),ce=ic("Even",1),ee=Ja({compile:function(a,c){c.$set("ngCloak",t);a.removeClass("ng-cloak")}}),fe=[function(){return{restrict:"A",scope:!0,controller:"@",
priority:500}}],Cc={},dg={blur:!0,focus:!0};s("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),function(a){var c=ya("ng-"+a);Cc[c]=["$parse","$rootScope",function(d,e){return{restrict:"A",compile:function(f,g){var h=d(g[c],null,!0);return function(c,d){d.on(a,function(d){var f=function(){h(c,{$event:d})};dg[a]&&e.$$phase?c.$evalAsync(f):c.$apply(f)})}}}}]});var ie=["$animate",function(a){return{multiElement:!0,
transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(c,d,e,f,g){var h,l,k;c.$watch(e.ngIf,function(c){c?l||g(function(c,f){l=f;c[c.length++]=Y.createComment(" end ngIf: "+e.ngIf+" ");h={clone:c};a.enter(c,d.parent(),d)}):(k&&(k.remove(),k=null),l&&(l.$destroy(),l=null),h&&(k=tb(h.clone),a.leave(k).then(function(){k=null}),h=null))})}}}],je=["$templateRequest","$anchorScroll","$animate","$sce",function(a,c,d,e){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",
controller:ga.noop,compile:function(f,g){var h=g.ngInclude||g.src,l=g.onload||"",k=g.autoscroll;return function(f,g,q,s,r){var t=0,n,v,w,L=function(){v&&(v.remove(),v=null);n&&(n.$destroy(),n=null);w&&(d.leave(w).then(function(){v=null}),v=w,w=null)};f.$watch(e.parseAsResourceUrl(h),function(e){var h=function(){!y(k)||k&&!f.$eval(k)||c()},q=++t;e?(a(e,!0).then(function(a){if(q===t){var c=f.$new();s.template=a;a=r(c,function(a){L();d.enter(a,null,g).then(h)});n=c;w=a;n.$emit("$includeContentLoaded",
e);f.$eval(l)}},function(){q===t&&(L(),f.$emit("$includeContentError",e))}),f.$emit("$includeContentRequested",e)):(L(),s.template=null)})}}}}],Ae=["$compile",function(a){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(c,d,e,f){/SVG/.test(d[0].toString())?(d.empty(),a(Fc(f.template,Y).childNodes)(c,function(a){d.append(a)},{futureParentElement:d})):(d.html(f.template),a(d.contents())(c))}}}],ke=Ja({priority:450,compile:function(){return{pre:function(a,c,d){a.$eval(d.ngInit)}}}}),
le=Ja({terminal:!0,priority:1E3}),me=["$locale","$interpolate",function(a,c){var d=/{}/g,e=/^when(Minus)?(.+)$/;return{restrict:"EA",link:function(f,g,h){function l(a){g.text(a||"")}var k=h.count,m=h.$attr.when&&g.attr(h.$attr.when),p=h.offset||0,q=f.$eval(m)||{},u={},m=c.startSymbol(),r=c.endSymbol(),t=m+k+"-"+p+r,n=ga.noop,v;s(h,function(a,c){var d=e.exec(c);d&&(d=(d[1]?"-":"")+Q(d[2]),q[d]=g.attr(h.$attr[c]))});s(q,function(a,e){u[e]=c(a.replace(d,t))});f.$watch(k,function(c){c=parseFloat(c);var d=
isNaN(c);d||c in q||(c=a.pluralCat(c-p));c===v||d&&isNaN(v)||(n(),n=f.$watch(u[c],l),v=c)})}}}],ne=["$parse","$animate",function(a,c){var d=T("ngRepeat"),e=function(a,c,d,e,k,m,p){a[d]=e;k&&(a[k]=m);a.$index=c;a.$first=0===c;a.$last=c===p-1;a.$middle=!(a.$first||a.$last);a.$odd=!(a.$even=0===(c&1))};return{restrict:"A",multiElement:!0,transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,compile:function(f,g){var h=g.ngRepeat,l=Y.createComment(" end ngRepeat: "+h+" "),k=h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
if(!k)throw d("iexp",h);var m=k[1],p=k[2],q=k[3],u=k[4],k=m.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/);if(!k)throw d("iidexp",m);var r=k[3]||k[1],y=k[2];if(q&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(q)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent)$/.test(q)))throw d("badident",q);var n,v,w,D,z={$id:Na};u?n=a(u):(w=function(a,c){return Na(c)},D=function(a){return a});return function(a,f,g,k,m){n&&(v=function(c,d,e){y&&(z[y]=c);z[r]=d;z.$index=e;return n(a,
z)});var u=ha();a.$watchCollection(p,function(g){var k,p,n=f[0],E,z=ha(),C,S,N,G,J,x,H;q&&(a[q]=g);if(Ta(g))J=g,p=v||w;else{p=v||D;J=[];for(H in g)g.hasOwnProperty(H)&&"$"!=H.charAt(0)&&J.push(H);J.sort()}C=J.length;H=Array(C);for(k=0;k<C;k++)if(S=g===J?k:J[k],N=g[S],G=p(S,N,k),u[G])x=u[G],delete u[G],z[G]=x,H[k]=x;else{if(z[G])throw s(H,function(a){a&&a.scope&&(u[a.id]=a)}),d("dupes",h,G,N);H[k]={id:G,scope:t,clone:t};z[G]=!0}for(E in u){x=u[E];G=tb(x.clone);c.leave(G);if(G[0].parentNode)for(k=0,
p=G.length;k<p;k++)G[k].$$NG_REMOVED=!0;x.scope.$destroy()}for(k=0;k<C;k++)if(S=g===J?k:J[k],N=g[S],x=H[k],x.scope){E=n;do E=E.nextSibling;while(E&&E.$$NG_REMOVED);x.clone[0]!=E&&c.move(tb(x.clone),null,B(n));n=x.clone[x.clone.length-1];e(x.scope,k,r,N,y,S,C)}else m(function(a,d){x.scope=d;var f=l.cloneNode(!1);a[a.length++]=f;c.enter(a,null,B(n));n=f;x.clone=a;z[x.id]=x;e(x.scope,k,r,N,y,S,C)});u=z})}}}}],oe=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(c,d,e){c.$watch(e.ngShow,
function(c){a[c?"removeClass":"addClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],he=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(c,d,e){c.$watch(e.ngHide,function(c){a[c?"addClass":"removeClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],pe=Ja(function(a,c,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&s(d,function(a,d){c.css(d,"")});a&&c.css(a)},!0)}),qe=["$animate",function(a){return{restrict:"EA",require:"ngSwitch",controller:["$scope",function(){this.cases=
{}}],link:function(c,d,e,f){var g=[],h=[],l=[],k=[],m=function(a,c){return function(){a.splice(c,1)}};c.$watch(e.ngSwitch||e.on,function(c){var d,e;d=0;for(e=l.length;d<e;++d)a.cancel(l[d]);d=l.length=0;for(e=k.length;d<e;++d){var r=tb(h[d].clone);k[d].$destroy();(l[d]=a.leave(r)).then(m(l,d))}h.length=0;k.length=0;(g=f.cases["!"+c]||f.cases["?"])&&s(g,function(c){c.transclude(function(d,e){k.push(e);var f=c.element;d[d.length++]=Y.createComment(" end ngSwitchWhen: ");h.push({clone:d});a.enter(d,
f.parent(),f)})})})}}}],re=Ja({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,c,d,e,f){e.cases["!"+d.ngSwitchWhen]=e.cases["!"+d.ngSwitchWhen]||[];e.cases["!"+d.ngSwitchWhen].push({transclude:f,element:c})}}),se=Ja({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,c,d,e,f){e.cases["?"]=e.cases["?"]||[];e.cases["?"].push({transclude:f,element:c})}}),ue=Ja({restrict:"EAC",link:function(a,c,d,e,f){if(!f)throw T("ngTransclude")("orphan",
va(c));f(function(a){c.empty();c.append(a)})}}),Vd=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(c,d){"text/ng-template"==d.type&&a.put(d.id,c[0].text)}}}],eg=T("ngOptions"),te=da({restrict:"A",terminal:!0}),Wd=["$compile","$parse",function(a,c){var d=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,e={$setViewValue:C};
return{restrict:"E",require:["select","?ngModel"],controller:["$element","$scope","$attrs",function(a,c,d){var l=this,k={},m=e,p;l.databound=d.ngModel;l.init=function(a,c,d){m=a;p=d};l.addOption=function(c,d){Ma(c,'"option value"');k[c]=!0;m.$viewValue==c&&(a.val(c),p.parent()&&p.remove());d&&d[0].hasAttribute("selected")&&(d[0].selected=!0)};l.removeOption=function(a){this.hasOption(a)&&(delete k[a],m.$viewValue===a&&this.renderUnknownOption(a))};l.renderUnknownOption=function(c){c="? "+Na(c)+" ?";
p.val(c);a.prepend(p);a.val(c);p.prop("selected",!0)};l.hasOption=function(a){return k.hasOwnProperty(a)};c.$on("$destroy",function(){l.renderUnknownOption=C})}],link:function(e,g,h,l){function k(a,c,d,e){d.$render=function(){var a=d.$viewValue;e.hasOption(a)?(C.parent()&&C.remove(),c.val(a),""===a&&n.prop("selected",!0)):D(a)&&n?c.val(""):e.renderUnknownOption(a)};c.on("change",function(){a.$apply(function(){C.parent()&&C.remove();d.$setViewValue(c.val())})})}function m(a,c,d){var e;d.$render=function(){var a=
new db(d.$viewValue);s(c.find("option"),function(c){c.selected=y(a.get(c.value))})};a.$watch(function(){fa(e,d.$viewValue)||(e=qa(d.$viewValue),d.$render())});c.on("change",function(){a.$apply(function(){var a=[];s(c.find("option"),function(c){c.selected&&a.push(c.value)});d.$setViewValue(a)})})}function p(e,f,g){function h(a,c,d){T[A]=d;H&&(T[H]=c);return a(e,T)}function k(a){var c;if(u)if(M&&x(a)){c=new db([]);for(var d=0;d<a.length;d++)c.put(h(M,null,a[d]),!0)}else c=new db(a);else M&&(a=h(M,null,
a));return function(d,e){var f;f=M?M:B?B:F;return u?y(c.remove(h(f,d,e))):a===h(f,d,e)}}function l(){v||(e.$$postDigest(p),v=!0)}function m(a,c,d){a[c]=a[c]||0;a[c]+=d?1:-1}function p(){v=!1;var a={"":[]},c=[""],d,l,n,r,t;n=g.$viewValue;r=P(e)||[];var B=H?Object.keys(r).sort():r,x,A,D,F,N={};t=k(n);var I=!1,U,V;Q={};for(F=0;D=B.length,F<D;F++){x=F;if(H&&(x=B[F],"$"===x.charAt(0)))continue;A=r[x];d=h(J,x,A)||"";(l=a[d])||(l=a[d]=[],c.push(d));d=t(x,A);I=I||d;A=h(C,x,A);A=y(A)?A:"";V=M?M(e,T):H?B[F]:
F;M&&(Q[V]=x);l.push({id:V,label:A,selected:d})}u||(z||null===n?a[""].unshift({id:"",label:"",selected:!I}):I||a[""].unshift({id:"?",label:"",selected:!0}));x=0;for(B=c.length;x<B;x++){d=c[x];l=a[d];R.length<=x?(n={element:G.clone().attr("label",d),label:l.label},r=[n],R.push(r),f.append(n.element)):(r=R[x],n=r[0],n.label!=d&&n.element.attr("label",n.label=d));I=null;F=0;for(D=l.length;F<D;F++)d=l[F],(t=r[F+1])?(I=t.element,t.label!==d.label&&(m(N,t.label,!1),m(N,d.label,!0),I.text(t.label=d.label),
I.prop("label",t.label)),t.id!==d.id&&I.val(t.id=d.id),I[0].selected!==d.selected&&(I.prop("selected",t.selected=d.selected),Ra&&I.prop("selected",t.selected))):(""===d.id&&z?U=z:(U=w.clone()).val(d.id).prop("selected",d.selected).attr("selected",d.selected).prop("label",d.label).text(d.label),r.push(t={element:U,label:d.label,id:d.id,selected:d.selected}),m(N,d.label,!0),I?I.after(U):n.element.append(U),I=U);for(F++;r.length>F;)d=r.pop(),m(N,d.label,!1),d.element.remove()}for(;R.length>x;){l=R.pop();
for(F=1;F<l.length;++F)m(N,l[F].label,!1);l[0].element.remove()}s(N,function(a,c){0<a?q.addOption(c):0>a&&q.removeOption(c)})}var n;if(!(n=r.match(d)))throw eg("iexp",r,va(f));var C=c(n[2]||n[1]),A=n[4]||n[6],D=/ as /.test(n[0])&&n[1],B=D?c(D):null,H=n[5],J=c(n[3]||""),F=c(n[2]?n[1]:A),P=c(n[7]),M=n[8]?c(n[8]):null,Q={},R=[[{element:f,label:""}]],T={};z&&(a(z)(e),z.removeClass("ng-scope"),z.remove());f.empty();f.on("change",function(){e.$apply(function(){var a=P(e)||[],c;if(u)c=[],s(f.val(),function(d){d=
M?Q[d]:d;c.push("?"===d?t:""===d?null:h(B?B:F,d,a[d]))});else{var d=M?Q[f.val()]:f.val();c="?"===d?t:""===d?null:h(B?B:F,d,a[d])}g.$setViewValue(c);p()})});g.$render=p;e.$watchCollection(P,l);e.$watchCollection(function(){var a=P(e),c;if(a&&x(a)){c=Array(a.length);for(var d=0,f=a.length;d<f;d++)c[d]=h(C,d,a[d])}else if(a)for(d in c={},a)a.hasOwnProperty(d)&&(c[d]=h(C,d,a[d]));return c},l);u&&e.$watchCollection(function(){return g.$modelValue},l)}if(l[1]){var q=l[0];l=l[1];var u=h.multiple,r=h.ngOptions,
z=!1,n,v=!1,w=B(Y.createElement("option")),G=B(Y.createElement("optgroup")),C=w.clone();h=0;for(var A=g.children(),H=A.length;h<H;h++)if(""===A[h].value){n=z=A.eq(h);break}q.init(l,z,C);u&&(l.$isEmpty=function(a){return!a||0===a.length});r?p(e,g,l):u?m(e,g,l):k(e,g,l,q)}}}}],Yd=["$interpolate",function(a){var c={addOption:C,removeOption:C};return{restrict:"E",priority:100,compile:function(d,e){if(D(e.value)){var f=a(d.text(),!0);f||e.$set("value",d.text())}return function(a,d,e){var k=d.parent(),
m=k.data("$selectController")||k.parent().data("$selectController");m&&m.databound||(m=c);f?a.$watch(f,function(a,c){e.$set("value",a);c!==a&&m.removeOption(c);m.addOption(a,d)}):m.addOption(e.value,d);d.on("$destroy",function(){m.removeOption(e.value)})}}}}],Xd=da({restrict:"E",terminal:!1});M.angular.bootstrap?console.log("WARNING: Tried to load angular more than once."):(Nd(),Pd(ga),B(Y).ready(function(){Jd(Y,sc)}))})(window,document);!window.angular.$$csp()&&window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}</style>');
//# sourceMappingURL=angular.min.js.map

(function(N,f,W){'use strict';f.module("ngAnimate",["ng"]).directive("ngAnimateChildren",function(){return function(X,C,g){g=g.ngAnimateChildren;f.isString(g)&&0===g.length?C.data("$$ngAnimateChildren",!0):X.$watch(g,function(f){C.data("$$ngAnimateChildren",!!f)})}}).factory("$$animateReflow",["$$rAF","$document",function(f,C){return function(g){return f(function(){g()})}}]).config(["$provide","$animateProvider",function(X,C){function g(f){for(var n=0;n<f.length;n++){var g=f[n];if(1==g.nodeType)return g}}
function ba(f,n){return g(f)==g(n)}var t=f.noop,n=f.forEach,da=C.$$selectors,aa=f.isArray,ea=f.isString,ga=f.isObject,r={running:!0},u;X.decorator("$animate",["$delegate","$$q","$injector","$sniffer","$rootElement","$$asyncCallback","$rootScope","$document","$templateRequest","$$jqLite",function(O,N,M,Y,y,H,P,W,Z,Q){function R(a,c){var b=a.data("$$ngAnimateState")||{};c&&(b.running=!0,b.structural=!0,a.data("$$ngAnimateState",b));return b.disabled||b.running&&b.structural}function D(a){var c,b=N.defer();
b.promise.$$cancelFn=function(){c&&c()};P.$$postDigest(function(){c=a(function(){b.resolve()})});return b.promise}function I(a){if(ga(a))return a.tempClasses&&ea(a.tempClasses)&&(a.tempClasses=a.tempClasses.split(/\s+/)),a}function S(a,c,b){b=b||{};var d={};n(b,function(e,a){n(a.split(" "),function(a){d[a]=e})});var h=Object.create(null);n((a.attr("class")||"").split(/\s+/),function(e){h[e]=!0});var f=[],l=[];n(c&&c.classes||[],function(e,a){var b=h[a],c=d[a]||{};!1===e?(b||"addClass"==c.event)&&
l.push(a):!0===e&&(b&&"removeClass"!=c.event||f.push(a))});return 0<f.length+l.length&&[f.join(" "),l.join(" ")]}function T(a){if(a){var c=[],b={};a=a.substr(1).split(".");(Y.transitions||Y.animations)&&c.push(M.get(da[""]));for(var d=0;d<a.length;d++){var f=a[d],k=da[f];k&&!b[f]&&(c.push(M.get(k)),b[f]=!0)}return c}}function U(a,c,b,d){function h(e,a){var b=e[a],c=e["before"+a.charAt(0).toUpperCase()+a.substr(1)];if(b||c)return"leave"==a&&(c=b,b=null),u.push({event:a,fn:b}),J.push({event:a,fn:c}),
!0}function k(c,l,w){var E=[];n(c,function(a){a.fn&&E.push(a)});var m=0;n(E,function(c,f){var p=function(){a:{if(l){(l[f]||t)();if(++m<E.length)break a;l=null}w()}};switch(c.event){case "setClass":l.push(c.fn(a,e,A,p,d));break;case "animate":l.push(c.fn(a,b,d.from,d.to,p));break;case "addClass":l.push(c.fn(a,e||b,p,d));break;case "removeClass":l.push(c.fn(a,A||b,p,d));break;default:l.push(c.fn(a,p,d))}});l&&0===l.length&&w()}var l=a[0];if(l){d&&(d.to=d.to||{},d.from=d.from||{});var e,A;aa(b)&&(e=
b[0],A=b[1],e?A?b=e+" "+A:(b=e,c="addClass"):(b=A,c="removeClass"));var w="setClass"==c,E=w||"addClass"==c||"removeClass"==c||"animate"==c,p=a.attr("class")+" "+b;if(x(p)){var ca=t,m=[],J=[],g=t,s=[],u=[],p=(" "+p).replace(/\s+/g,".");n(T(p),function(a){!h(a,c)&&w&&(h(a,"addClass"),h(a,"removeClass"))});return{node:l,event:c,className:b,isClassBased:E,isSetClassOperation:w,applyStyles:function(){d&&a.css(f.extend(d.from||{},d.to||{}))},before:function(a){ca=a;k(J,m,function(){ca=t;a()})},after:function(a){g=
a;k(u,s,function(){g=t;a()})},cancel:function(){m&&(n(m,function(a){(a||t)(!0)}),ca(!0));s&&(n(s,function(a){(a||t)(!0)}),g(!0))}}}}}function G(a,c,b,d,h,k,l,e){function A(e){var l="$animate:"+e;J&&J[l]&&0<J[l].length&&H(function(){b.triggerHandler(l,{event:a,className:c})})}function w(){A("before")}function E(){A("after")}function p(){p.hasBeenRun||(p.hasBeenRun=!0,k())}function g(){if(!g.hasBeenRun){m&&m.applyStyles();g.hasBeenRun=!0;l&&l.tempClasses&&n(l.tempClasses,function(a){u.removeClass(b,
a)});var w=b.data("$$ngAnimateState");w&&(m&&m.isClassBased?B(b,c):(H(function(){var e=b.data("$$ngAnimateState")||{};fa==e.index&&B(b,c,a)}),b.data("$$ngAnimateState",w)));A("close");e()}}var m=U(b,a,c,l);if(!m)return p(),w(),E(),g(),t;a=m.event;c=m.className;var J=f.element._data(m.node),J=J&&J.events;d||(d=h?h.parent():b.parent());if(z(b,d))return p(),w(),E(),g(),t;d=b.data("$$ngAnimateState")||{};var L=d.active||{},s=d.totalActive||0,q=d.last;h=!1;if(0<s){s=[];if(m.isClassBased)"setClass"==q.event?
(s.push(q),B(b,c)):L[c]&&(v=L[c],v.event==a?h=!0:(s.push(v),B(b,c)));else if("leave"==a&&L["ng-leave"])h=!0;else{for(var v in L)s.push(L[v]);d={};B(b,!0)}0<s.length&&n(s,function(a){a.cancel()})}!m.isClassBased||m.isSetClassOperation||"animate"==a||h||(h="addClass"==a==b.hasClass(c));if(h)return p(),w(),E(),A("close"),e(),t;L=d.active||{};s=d.totalActive||0;if("leave"==a)b.one("$destroy",function(a){a=f.element(this);var e=a.data("$$ngAnimateState");e&&(e=e.active["ng-leave"])&&(e.cancel(),B(a,"ng-leave"))});
u.addClass(b,"ng-animate");l&&l.tempClasses&&n(l.tempClasses,function(a){u.addClass(b,a)});var fa=K++;s++;L[c]=m;b.data("$$ngAnimateState",{last:m,active:L,index:fa,totalActive:s});w();m.before(function(e){var l=b.data("$$ngAnimateState");e=e||!l||!l.active[c]||m.isClassBased&&l.active[c].event!=a;p();!0===e?g():(E(),m.after(g))});return m.cancel}function q(a){if(a=g(a))a=f.isFunction(a.getElementsByClassName)?a.getElementsByClassName("ng-animate"):a.querySelectorAll(".ng-animate"),n(a,function(a){a=
f.element(a);(a=a.data("$$ngAnimateState"))&&a.active&&n(a.active,function(a){a.cancel()})})}function B(a,c){if(ba(a,y))r.disabled||(r.running=!1,r.structural=!1);else if(c){var b=a.data("$$ngAnimateState")||{},d=!0===c;!d&&b.active&&b.active[c]&&(b.totalActive--,delete b.active[c]);if(d||!b.totalActive)u.removeClass(a,"ng-animate"),a.removeData("$$ngAnimateState")}}function z(a,c){if(r.disabled)return!0;if(ba(a,y))return r.running;var b,d,g;do{if(0===c.length)break;var k=ba(c,y),l=k?r:c.data("$$ngAnimateState")||
{};if(l.disabled)return!0;k&&(g=!0);!1!==b&&(k=c.data("$$ngAnimateChildren"),f.isDefined(k)&&(b=k));d=d||l.running||l.last&&!l.last.isClassBased}while(c=c.parent());return!g||!b&&d}u=Q;y.data("$$ngAnimateState",r);var $=P.$watch(function(){return Z.totalPendingRequests},function(a,c){0===a&&($(),P.$$postDigest(function(){P.$$postDigest(function(){r.running=!1})}))}),K=0,V=C.classNameFilter(),x=V?function(a){return V.test(a)}:function(){return!0};return{animate:function(a,c,b,d,h){d=d||"ng-inline-animate";
h=I(h)||{};h.from=b?c:null;h.to=b?b:c;return D(function(b){return G("animate",d,f.element(g(a)),null,null,t,h,b)})},enter:function(a,c,b,d){d=I(d);a=f.element(a);c=c&&f.element(c);b=b&&f.element(b);R(a,!0);O.enter(a,c,b);return D(function(h){return G("enter","ng-enter",f.element(g(a)),c,b,t,d,h)})},leave:function(a,c){c=I(c);a=f.element(a);q(a);R(a,!0);return D(function(b){return G("leave","ng-leave",f.element(g(a)),null,null,function(){O.leave(a)},c,b)})},move:function(a,c,b,d){d=I(d);a=f.element(a);
c=c&&f.element(c);b=b&&f.element(b);q(a);R(a,!0);O.move(a,c,b);return D(function(h){return G("move","ng-move",f.element(g(a)),c,b,t,d,h)})},addClass:function(a,c,b){return this.setClass(a,c,[],b)},removeClass:function(a,c,b){return this.setClass(a,[],c,b)},setClass:function(a,c,b,d){d=I(d);a=f.element(a);a=f.element(g(a));if(R(a))return O.$$setClassImmediately(a,c,b,d);var h,k=a.data("$$animateClasses"),l=!!k;k||(k={classes:{}});h=k.classes;c=aa(c)?c:c.split(" ");n(c,function(a){a&&a.length&&(h[a]=
!0)});b=aa(b)?b:b.split(" ");n(b,function(a){a&&a.length&&(h[a]=!1)});if(l)return d&&k.options&&(k.options=f.extend(k.options||{},d)),k.promise;a.data("$$animateClasses",k={classes:h,options:d});return k.promise=D(function(e){var l=a.parent(),b=g(a),c=b.parentNode;if(!c||c.$$NG_REMOVED||b.$$NG_REMOVED)e();else{b=a.data("$$animateClasses");a.removeData("$$animateClasses");var c=a.data("$$ngAnimateState")||{},d=S(a,b,c.active);return d?G("setClass",d,a,l,null,function(){d[0]&&O.$$addClassImmediately(a,
d[0]);d[1]&&O.$$removeClassImmediately(a,d[1])},b.options,e):e()}})},cancel:function(a){a.$$cancelFn()},enabled:function(a,c){switch(arguments.length){case 2:if(a)B(c);else{var b=c.data("$$ngAnimateState")||{};b.disabled=!0;c.data("$$ngAnimateState",b)}break;case 1:r.disabled=!a;break;default:a=!r.disabled}return!!a}}}]);C.register("",["$window","$sniffer","$timeout","$$animateReflow",function(r,C,M,Y){function y(){b||(b=Y(function(){c=[];b=null;x={}}))}function H(a,e){b&&b();c.push(e);b=Y(function(){n(c,
function(a){a()});c=[];b=null;x={}})}function P(a,e){var b=g(a);a=f.element(b);k.push(a);b=Date.now()+e;b<=h||(M.cancel(d),h=b,d=M(function(){X(k);k=[]},e,!1))}function X(a){n(a,function(a){(a=a.data("$$ngAnimateCSS3Data"))&&n(a.closeAnimationFns,function(a){a()})})}function Z(a,e){var b=e?x[e]:null;if(!b){var c=0,d=0,f=0,g=0;n(a,function(a){if(1==a.nodeType){a=r.getComputedStyle(a)||{};c=Math.max(Q(a[z+"Duration"]),c);d=Math.max(Q(a[z+"Delay"]),d);g=Math.max(Q(a[K+"Delay"]),g);var e=Q(a[K+"Duration"]);
0<e&&(e*=parseInt(a[K+"IterationCount"],10)||1);f=Math.max(e,f)}});b={total:0,transitionDelay:d,transitionDuration:c,animationDelay:g,animationDuration:f};e&&(x[e]=b)}return b}function Q(a){var e=0;a=ea(a)?a.split(/\s*,\s*/):[];n(a,function(a){e=Math.max(parseFloat(a)||0,e)});return e}function R(b,e,c,d){b=0<=["ng-enter","ng-leave","ng-move"].indexOf(c);var f,p=e.parent(),h=p.data("$$ngAnimateKey");h||(p.data("$$ngAnimateKey",++a),h=a);f=h+"-"+g(e).getAttribute("class");var p=f+" "+c,h=x[p]?++x[p].total:
0,m={};if(0<h){var n=c+"-stagger",m=f+" "+n;(f=!x[m])&&u.addClass(e,n);m=Z(e,m);f&&u.removeClass(e,n)}u.addClass(e,c);var n=e.data("$$ngAnimateCSS3Data")||{},k=Z(e,p);f=k.transitionDuration;k=k.animationDuration;if(b&&0===f&&0===k)return u.removeClass(e,c),!1;c=d||b&&0<f;b=0<k&&0<m.animationDelay&&0===m.animationDuration;e.data("$$ngAnimateCSS3Data",{stagger:m,cacheKey:p,running:n.running||0,itemIndex:h,blockTransition:c,closeAnimationFns:n.closeAnimationFns||[]});p=g(e);c&&(I(p,!0),d&&e.css(d));
b&&(p.style[K+"PlayState"]="paused");return!0}function D(a,e,b,c,d){function f(){e.off(D,h);u.removeClass(e,k);u.removeClass(e,t);z&&M.cancel(z);G(e,b);var a=g(e),c;for(c in s)a.style.removeProperty(s[c])}function h(a){a.stopPropagation();var b=a.originalEvent||a;a=b.$manualTimeStamp||b.timeStamp||Date.now();b=parseFloat(b.elapsedTime.toFixed(3));Math.max(a-H,0)>=C&&b>=x&&c()}var m=g(e);a=e.data("$$ngAnimateCSS3Data");if(-1!=m.getAttribute("class").indexOf(b)&&a){var k="",t="";n(b.split(" "),function(a,
b){var e=(0<b?" ":"")+a;k+=e+"-active";t+=e+"-pending"});var s=[],q=a.itemIndex,v=a.stagger,r=0;if(0<q){r=0;0<v.transitionDelay&&0===v.transitionDuration&&(r=v.transitionDelay*q);var y=0;0<v.animationDelay&&0===v.animationDuration&&(y=v.animationDelay*q,s.push(B+"animation-play-state"));r=Math.round(100*Math.max(r,y))/100}r||(u.addClass(e,k),a.blockTransition&&I(m,!1));var F=Z(e,a.cacheKey+" "+k),x=Math.max(F.transitionDuration,F.animationDuration);if(0===x)u.removeClass(e,k),G(e,b),c();else{!r&&
d&&(F.transitionDuration||(e.css("transition",F.animationDuration+"s linear all"),s.push("transition")),e.css(d));var q=Math.max(F.transitionDelay,F.animationDelay),C=1E3*q;0<s.length&&(v=m.getAttribute("style")||"",";"!==v.charAt(v.length-1)&&(v+=";"),m.setAttribute("style",v+" "));var H=Date.now(),D=V+" "+$,q=1E3*(r+1.5*(q+x)),z;0<r&&(u.addClass(e,t),z=M(function(){z=null;0<F.transitionDuration&&I(m,!1);0<F.animationDuration&&(m.style[K+"PlayState"]="");u.addClass(e,k);u.removeClass(e,t);d&&(0===
F.transitionDuration&&e.css("transition",F.animationDuration+"s linear all"),e.css(d),s.push("transition"))},1E3*r,!1));e.on(D,h);a.closeAnimationFns.push(function(){f();c()});a.running++;P(e,q);return f}}else c()}function I(a,b){a.style[z+"Property"]=b?"none":""}function S(a,b,c,d){if(R(a,b,c,d))return function(a){a&&G(b,c)}}function T(a,b,c,d,f){if(b.data("$$ngAnimateCSS3Data"))return D(a,b,c,d,f);G(b,c);d()}function U(a,b,c,d,f){var g=S(a,b,c,f.from);if(g){var h=g;H(b,function(){h=T(a,b,c,d,f.to)});
return function(a){(h||t)(a)}}y();d()}function G(a,b){u.removeClass(a,b);var c=a.data("$$ngAnimateCSS3Data");c&&(c.running&&c.running--,c.running&&0!==c.running||a.removeData("$$ngAnimateCSS3Data"))}function q(a,b){var c="";a=aa(a)?a:a.split(/\s+/);n(a,function(a,d){a&&0<a.length&&(c+=(0<d?" ":"")+a+b)});return c}var B="",z,$,K,V;N.ontransitionend===W&&N.onwebkittransitionend!==W?(B="-webkit-",z="WebkitTransition",$="webkitTransitionEnd transitionend"):(z="transition",$="transitionend");N.onanimationend===
W&&N.onwebkitanimationend!==W?(B="-webkit-",K="WebkitAnimation",V="webkitAnimationEnd animationend"):(K="animation",V="animationend");var x={},a=0,c=[],b,d=null,h=0,k=[];return{animate:function(a,b,c,d,f,g){g=g||{};g.from=c;g.to=d;return U("animate",a,b,f,g)},enter:function(a,b,c){c=c||{};return U("enter",a,"ng-enter",b,c)},leave:function(a,b,c){c=c||{};return U("leave",a,"ng-leave",b,c)},move:function(a,b,c){c=c||{};return U("move",a,"ng-move",b,c)},beforeSetClass:function(a,b,c,d,f){f=f||{};b=q(c,
"-remove")+" "+q(b,"-add");if(f=S("setClass",a,b,f.from))return H(a,d),f;y();d()},beforeAddClass:function(a,b,c,d){d=d||{};if(b=S("addClass",a,q(b,"-add"),d.from))return H(a,c),b;y();c()},beforeRemoveClass:function(a,b,c,d){d=d||{};if(b=S("removeClass",a,q(b,"-remove"),d.from))return H(a,c),b;y();c()},setClass:function(a,b,c,d,f){f=f||{};c=q(c,"-remove");b=q(b,"-add");return T("setClass",a,c+" "+b,d,f.to)},addClass:function(a,b,c,d){d=d||{};return T("addClass",a,q(b,"-add"),c,d.to)},removeClass:function(a,
b,c,d){d=d||{};return T("removeClass",a,q(b,"-remove"),c,d.to)}}}])}])})(window,window.angular);
//# sourceMappingURL=angular-animate.min.js.map

(function(p,k,q){'use strict';k.module("ngAria",["ng"]).provider("$aria",function(){function b(b,e,c){return function(d,h,f){var l=f.$normalize(e);a[l]&&!f[l]&&d.$watch(f[b],function(d){c&&(d=!d);h.attr(e,d)})}}var a={ariaHidden:!0,ariaChecked:!0,ariaDisabled:!0,ariaRequired:!0,ariaInvalid:!0,ariaMultiline:!0,ariaValue:!0,tabindex:!0,bindKeypress:!0};this.config=function(b){a=k.extend(a,b)};this.$get=function(){return{config:function(b){return a[b]},$$watchExpr:b}}}).directive("ngShow",["$aria",function(b){return b.$$watchExpr("ngShow",
"aria-hidden",!0)}]).directive("ngHide",["$aria",function(b){return b.$$watchExpr("ngHide","aria-hidden",!1)}]).directive("ngModel",["$aria",function(b){function a(a,c,d){return b.config(c)&&!d.attr(a)}function g(b,c){var d=b.type,a=b.role;return"checkbox"===(d||a)||"menuitemcheckbox"===a?"checkbox":"radio"===(d||a)||"menuitemradio"===a?"radio":"range"===d||"progressbar"===a||"slider"===a?"range":"textbox"===(d||a)||"TEXTAREA"===c[0].nodeName?"multiline":""}return{restrict:"A",require:"?ngModel",
link:function(e,c,d,h){function f(){return h.$modelValue}function l(){return m?(m=!1,function(a){a=a===d.value;c.attr("aria-checked",a);c.attr("tabindex",0-!a)}):function(a){c.attr("aria-checked",a===d.value)}}function n(a){c.attr("aria-checked",!!a)}var k=g(d,c),m=a("tabindex","tabindex",c);switch(k){case "radio":case "checkbox":a("aria-checked","ariaChecked",c)&&e.$watch(f,"radio"===k?l():n);break;case "range":b.config("ariaValue")&&(d.min&&!c.attr("aria-valuemin")&&c.attr("aria-valuemin",d.min),
d.max&&!c.attr("aria-valuemax")&&c.attr("aria-valuemax",d.max),c.attr("aria-valuenow")||e.$watch(f,function(a){c.attr("aria-valuenow",a)}));break;case "multiline":a("aria-multiline","ariaMultiline",c)&&c.attr("aria-multiline",!0)}m&&c.attr("tabindex",0);h.$validators.required&&a("aria-required","ariaRequired",c)&&e.$watch(function(){return h.$error.required},function(a){c.attr("aria-required",!!a)});a("aria-invalid","ariaInvalid",c)&&e.$watch(function(){return h.$invalid},function(a){c.attr("aria-invalid",
!!a)})}}}]).directive("ngDisabled",["$aria",function(b){return b.$$watchExpr("ngDisabled","aria-disabled")}]).directive("ngMessages",function(){return{restrict:"A",require:"?ngMessages",link:function(b,a,g,e){a.attr("aria-live")||a.attr("aria-live","assertive")}}}).directive("ngClick",["$aria","$parse",function(b,a){return{restrict:"A",compile:function(g,e){var c=a(e.ngClick,null,!0);return function(a,e,f){b.config("tabindex")&&!e.attr("tabindex")&&e.attr("tabindex",0);if(b.config("bindKeypress")&&
!f.ngKeypress)e.on("keypress",function(b){function e(){c(a,{$event:b})}32!==b.keyCode&&13!==b.keyCode||a.$apply(e)})}}}}]).directive("ngDblclick",["$aria",function(b){return function(a,g,e){b.config("tabindex")&&!g.attr("tabindex")&&g.attr("tabindex",0)}}])})(window,window.angular);
//# sourceMappingURL=angular-aria.min.js.map

(function(p,f,n){'use strict';f.module("ngCookies",["ng"]).factory("$cookies",["$rootScope","$browser",function(e,b){var c={},g={},h,k=!1,l=f.copy,m=f.isUndefined;b.addPollFn(function(){var a=b.cookies();h!=a&&(h=a,l(a,g),l(a,c),k&&e.$apply())})();k=!0;e.$watch(function(){var a,d,e;for(a in g)m(c[a])&&b.cookies(a,n);for(a in c)d=c[a],f.isString(d)||(d=""+d,c[a]=d),d!==g[a]&&(b.cookies(a,d),e=!0);if(e)for(a in d=b.cookies(),c)c[a]!==d[a]&&(m(d[a])?delete c[a]:c[a]=d[a])});return c}]).factory("$cookieStore",
["$cookies",function(e){return{get:function(b){return(b=e[b])?f.fromJson(b):b},put:function(b,c){e[b]=f.toJson(c)},remove:function(b){delete e[b]}}}])})(window,window.angular);
//# sourceMappingURL=angular-cookies.min.js.map

(function(I,d,B){'use strict';function D(f,q){q=q||{};d.forEach(q,function(d,h){delete q[h]});for(var h in f)!f.hasOwnProperty(h)||"$"===h.charAt(0)&&"$"===h.charAt(1)||(q[h]=f[h]);return q}var w=d.$$minErr("$resource"),C=/^(\.[a-zA-Z_$][0-9a-zA-Z_$]*)+$/;d.module("ngResource",["ng"]).provider("$resource",function(){var f=this;this.defaults={stripTrailingSlashes:!0,actions:{get:{method:"GET"},save:{method:"POST"},query:{method:"GET",isArray:!0},remove:{method:"DELETE"},"delete":{method:"DELETE"}}};
this.$get=["$http","$q",function(q,h){function t(d,g){this.template=d;this.defaults=s({},f.defaults,g);this.urlParams={}}function v(x,g,l,m){function c(b,k){var c={};k=s({},g,k);r(k,function(a,k){u(a)&&(a=a());var d;if(a&&a.charAt&&"@"==a.charAt(0)){d=b;var e=a.substr(1);if(null==e||""===e||"hasOwnProperty"===e||!C.test("."+e))throw w("badmember",e);for(var e=e.split("."),n=0,g=e.length;n<g&&d!==B;n++){var h=e[n];d=null!==d?d[h]:B}}else d=a;c[k]=d});return c}function F(b){return b.resource}function e(b){D(b||
{},this)}var G=new t(x,m);l=s({},f.defaults.actions,l);e.prototype.toJSON=function(){var b=s({},this);delete b.$promise;delete b.$resolved;return b};r(l,function(b,k){var g=/^(POST|PUT|PATCH)$/i.test(b.method);e[k]=function(a,y,m,x){var n={},f,l,z;switch(arguments.length){case 4:z=x,l=m;case 3:case 2:if(u(y)){if(u(a)){l=a;z=y;break}l=y;z=m}else{n=a;f=y;l=m;break}case 1:u(a)?l=a:g?f=a:n=a;break;case 0:break;default:throw w("badargs",arguments.length);}var t=this instanceof e,p=t?f:b.isArray?[]:new e(f),
A={},v=b.interceptor&&b.interceptor.response||F,C=b.interceptor&&b.interceptor.responseError||B;r(b,function(b,a){"params"!=a&&"isArray"!=a&&"interceptor"!=a&&(A[a]=H(b))});g&&(A.data=f);G.setUrlParams(A,s({},c(f,b.params||{}),n),b.url);n=q(A).then(function(a){var c=a.data,g=p.$promise;if(c){if(d.isArray(c)!==!!b.isArray)throw w("badcfg",k,b.isArray?"array":"object",d.isArray(c)?"array":"object");b.isArray?(p.length=0,r(c,function(a){"object"===typeof a?p.push(new e(a)):p.push(a)})):(D(c,p),p.$promise=
g)}p.$resolved=!0;a.resource=p;return a},function(a){p.$resolved=!0;(z||E)(a);return h.reject(a)});n=n.then(function(a){var b=v(a);(l||E)(b,a.headers);return b},C);return t?n:(p.$promise=n,p.$resolved=!1,p)};e.prototype["$"+k]=function(a,b,c){u(a)&&(c=b,b=a,a={});a=e[k].call(this,a,this,b,c);return a.$promise||a}});e.bind=function(b){return v(x,s({},g,b),l)};return e}var E=d.noop,r=d.forEach,s=d.extend,H=d.copy,u=d.isFunction;t.prototype={setUrlParams:function(f,g,l){var m=this,c=l||m.template,h,
e,q=m.urlParams={};r(c.split(/\W/),function(b){if("hasOwnProperty"===b)throw w("badname");!/^\d+$/.test(b)&&b&&(new RegExp("(^|[^\\\\]):"+b+"(\\W|$)")).test(c)&&(q[b]=!0)});c=c.replace(/\\:/g,":");g=g||{};r(m.urlParams,function(b,k){h=g.hasOwnProperty(k)?g[k]:m.defaults[k];d.isDefined(h)&&null!==h?(e=encodeURIComponent(h).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"%20").replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+"),c=c.replace(new RegExp(":"+
k+"(\\W|$)","g"),function(b,a){return e+a})):c=c.replace(new RegExp("(/?):"+k+"(\\W|$)","g"),function(b,a,c){return"/"==c.charAt(0)?c:a+c})});m.defaults.stripTrailingSlashes&&(c=c.replace(/\/+$/,"")||"/");c=c.replace(/\/\.(?=\w+($|\?))/,".");f.url=c.replace(/\/\\\./,"/.");r(g,function(b,c){m.urlParams[c]||(f.params=f.params||{},f.params[c]=b)})}};return v}]})})(window,window.angular);
//# sourceMappingURL=angular-resource.min.js.map

(function(r,f,s){'use strict';f.module("ngMessages",[]).directive("ngMessages",["$compile","$animate","$templateRequest",function(q,k,l){return{restrict:"AE",controller:function(){this.$renderNgMessageClasses=f.noop;var b=[];this.registerMessage=function(d,a){for(var c=0;c<b.length;c++)if(b[c].type==a.type){if(d!=c){var g=b[d];b[d]=b[c];d<b.length?b[c]=g:b.splice(0,c)}return}b.splice(d,0,a)};this.renderMessages=function(d,a){d=d||{};var c;f.forEach(b,function(b){var e;if(e=!c||a)e=d[b.type],e=null!==
e&&!1!==e&&e;e?(b.attach(),c=!0):b.detach()});this.renderElementClasses(c)}},require:"ngMessages",link:function(b,d,a,c){c.renderElementClasses=function(b){b?k.setClass(d,"ng-active","ng-inactive"):k.setClass(d,"ng-inactive","ng-active")};var g=f.isString(a.ngMessagesMultiple)||f.isString(a.multiple),e;b.$watchCollection(a.ngMessages||a["for"],function(b){e=b;c.renderMessages(b,g)});(a=a.ngMessagesInclude||a.include)&&l(a).then(function(a){var h;a=f.element("<div/>").html(a);f.forEach(a.children(),
function(a){a=f.element(a);h?h.after(a):d.prepend(a);h=a;q(a)(b)});c.renderMessages(e,g)})}}}]).directive("ngMessage",["$animate",function(f){return{require:"^ngMessages",transclude:"element",terminal:!0,restrict:"AE",link:function(k,l,b,d,a){for(var c,g,e=l[0],n=e.parentNode,h=0,p=0;h<n.childNodes.length;h++){var m=n.childNodes[h];if(8==m.nodeType&&0<=m.nodeValue.indexOf("ngMessage")){if(m===e){c=p;break}p++}}d.registerMessage(c,{type:b.ngMessage||b.when,attach:function(){g||a(k,function(a){f.enter(a,
null,l);g=a})},detach:function(a){g&&(f.leave(g),g=null)}})}}}])})(window,window.angular);
//# sourceMappingURL=angular-messages.min.js.map

(function(p,d,C){'use strict';function v(r,h,g){return{restrict:"ECA",terminal:!0,priority:400,transclude:"element",link:function(a,c,b,f,y){function z(){k&&(g.cancel(k),k=null);l&&(l.$destroy(),l=null);m&&(k=g.leave(m),k.then(function(){k=null}),m=null)}function x(){var b=r.current&&r.current.locals;if(d.isDefined(b&&b.$template)){var b=a.$new(),f=r.current;m=y(b,function(b){g.enter(b,null,m||c).then(function(){!d.isDefined(t)||t&&!a.$eval(t)||h()});z()});l=f.scope=b;l.$emit("$viewContentLoaded");
l.$eval(w)}else z()}var l,m,k,t=b.autoscroll,w=b.onload||"";a.$on("$routeChangeSuccess",x);x()}}}function A(d,h,g){return{restrict:"ECA",priority:-400,link:function(a,c){var b=g.current,f=b.locals;c.html(f.$template);var y=d(c.contents());b.controller&&(f.$scope=a,f=h(b.controller,f),b.controllerAs&&(a[b.controllerAs]=f),c.data("$ngControllerController",f),c.children().data("$ngControllerController",f));y(a)}}}p=d.module("ngRoute",["ng"]).provider("$route",function(){function r(a,c){return d.extend(Object.create(a),
c)}function h(a,d){var b=d.caseInsensitiveMatch,f={originalPath:a,regexp:a},g=f.keys=[];a=a.replace(/([().])/g,"\\$1").replace(/(\/)?:(\w+)([\?\*])?/g,function(a,d,b,c){a="?"===c?c:null;c="*"===c?c:null;g.push({name:b,optional:!!a});d=d||"";return""+(a?"":d)+"(?:"+(a?d:"")+(c&&"(.+?)"||"([^/]+)")+(a||"")+")"+(a||"")}).replace(/([\/$\*])/g,"\\$1");f.regexp=new RegExp("^"+a+"$",b?"i":"");return f}var g={};this.when=function(a,c){var b=d.copy(c);d.isUndefined(b.reloadOnSearch)&&(b.reloadOnSearch=!0);
d.isUndefined(b.caseInsensitiveMatch)&&(b.caseInsensitiveMatch=this.caseInsensitiveMatch);g[a]=d.extend(b,a&&h(a,b));if(a){var f="/"==a[a.length-1]?a.substr(0,a.length-1):a+"/";g[f]=d.extend({redirectTo:a},h(f,b))}return this};this.caseInsensitiveMatch=!1;this.otherwise=function(a){"string"===typeof a&&(a={redirectTo:a});this.when(null,a);return this};this.$get=["$rootScope","$location","$routeParams","$q","$injector","$templateRequest","$sce",function(a,c,b,f,h,p,x){function l(b){var e=s.current;
(v=(n=k())&&e&&n.$$route===e.$$route&&d.equals(n.pathParams,e.pathParams)&&!n.reloadOnSearch&&!w)||!e&&!n||a.$broadcast("$routeChangeStart",n,e).defaultPrevented&&b&&b.preventDefault()}function m(){var u=s.current,e=n;if(v)u.params=e.params,d.copy(u.params,b),a.$broadcast("$routeUpdate",u);else if(e||u)w=!1,(s.current=e)&&e.redirectTo&&(d.isString(e.redirectTo)?c.path(t(e.redirectTo,e.params)).search(e.params).replace():c.url(e.redirectTo(e.pathParams,c.path(),c.search())).replace()),f.when(e).then(function(){if(e){var a=
d.extend({},e.resolve),b,c;d.forEach(a,function(b,e){a[e]=d.isString(b)?h.get(b):h.invoke(b,null,null,e)});d.isDefined(b=e.template)?d.isFunction(b)&&(b=b(e.params)):d.isDefined(c=e.templateUrl)&&(d.isFunction(c)&&(c=c(e.params)),c=x.getTrustedResourceUrl(c),d.isDefined(c)&&(e.loadedTemplateUrl=c,b=p(c)));d.isDefined(b)&&(a.$template=b);return f.all(a)}}).then(function(c){e==s.current&&(e&&(e.locals=c,d.copy(e.params,b)),a.$broadcast("$routeChangeSuccess",e,u))},function(b){e==s.current&&a.$broadcast("$routeChangeError",
e,u,b)})}function k(){var a,b;d.forEach(g,function(f,g){var q;if(q=!b){var h=c.path();q=f.keys;var l={};if(f.regexp)if(h=f.regexp.exec(h)){for(var k=1,m=h.length;k<m;++k){var n=q[k-1],p=h[k];n&&p&&(l[n.name]=p)}q=l}else q=null;else q=null;q=a=q}q&&(b=r(f,{params:d.extend({},c.search(),a),pathParams:a}),b.$$route=f)});return b||g[null]&&r(g[null],{params:{},pathParams:{}})}function t(a,b){var c=[];d.forEach((a||"").split(":"),function(a,d){if(0===d)c.push(a);else{var f=a.match(/(\w+)(?:[?*])?(.*)/),
g=f[1];c.push(b[g]);c.push(f[2]||"");delete b[g]}});return c.join("")}var w=!1,n,v,s={routes:g,reload:function(){w=!0;a.$evalAsync(function(){l();m()})},updateParams:function(a){if(this.current&&this.current.$$route){var b={},f=this;d.forEach(Object.keys(a),function(c){f.current.pathParams[c]||(b[c]=a[c])});a=d.extend({},this.current.params,a);c.path(t(this.current.$$route.originalPath,a));c.search(d.extend({},c.search(),b))}else throw B("norout");}};a.$on("$locationChangeStart",l);a.$on("$locationChangeSuccess",
m);return s}]});var B=d.$$minErr("ngRoute");p.provider("$routeParams",function(){this.$get=function(){return{}}});p.directive("ngView",v);p.directive("ngView",A);v.$inject=["$route","$anchorScroll","$animate"];A.$inject=["$compile","$controller","$route"]})(window,window.angular);
//# sourceMappingURL=angular-route.min.js.map

angular.module('mdDateTime', []).directive('timeDatePicker', [
  '$filter', '$sce', '$rootScope', '$parse', function($filter, $sce, $rootScope, $parse) {
    var _dateFilter;
    _dateFilter = $filter('date');
    return {
      restrict: 'AE',
      replace: true,
      scope: {
        _modelValue: '=ngModel'
      },
      require: 'ngModel',
      templateUrl: 'md-date-time.tpl.html',
      link: function(scope, element, attrs, ngModel) {
        var cancelFn, saveFn;
        attrs.$observe('defaultMode', function(val) {
          return scope._mode = val != null ? val : 'date';
        });
        attrs.$observe('displayMode', function(val) {
          return scope._displayMode = val;
        });
        attrs.$observe('orientation', function(val) {
          return scope._verticalMode = val === 'true';
        });
        attrs.$observe('displayTwentyfour', function(val) {
          return scope._hours24 = (val != null) && val;
        });
        attrs.$observe('mindate', function(val) {
          if ((val != null) && angular.isDate(val)) {
            return scope.restrictions.mindate = val;
          }
        });
        attrs.$observe('maxdate', function(val) {
          if ((val != null) && angular.isDate(val)) {
            return scope.restrictions.maxdate = val;
          }
        });
        ngModel.$render = function() {
          return scope.setDate(ngModel.$modelValue);
        };
        saveFn = $parse(attrs.onSave);
        cancelFn = $parse(attrs.onCancel);
        scope.save = function() {
          scope._modelValue = scope.date;
          ngModel.$setDirty();
          return saveFn(scope.$parent, {
            $value: scope.date
          });
        };
        return scope.cancel = function() {
          cancelFn(scope.$parent, {});
          return ngModel.$render();
        };
      },
      controller: [
        '$scope', function(scope) {
          var i;
          scope.restrictions = {
            mindate: void 0,
            maxdate: void 0
          };
          scope.setDate = function(newVal) {
            scope.date = newVal != null ? new Date(newVal) : new Date();
            scope.calendar._year = scope.date.getFullYear();
            scope.calendar._month = scope.date.getMonth();
            scope.clock._minutes = scope.date.getMinutes();
            scope.clock._hours = scope._hours24 ? scope.date.getHours() : scope.date.getHours() % 12;
            if (!scope._hours24 && scope.clock._hours === 0) {
              return scope.clock._hours = 12;
            }
          };
          scope.display = {
            fullTitle: function() {
              return _dateFilter(scope.date, 'EEEE d MMMM yyyy, h:mm a');
            },
            title: function() {
              if (scope._mode === 'date') {
                return _dateFilter(scope.date, (scope._displayMode === 'date' ? 'EEEE' : 'EEEE h:mm a'));
              } else {
                return _dateFilter(scope.date, 'MMMM d yyyy');
              }
            },
            "super": function() {
              if (scope._mode === 'date') {
                return _dateFilter(scope.date, 'MMM');
              } else {
                return '';
              }
            },
            main: function() {
              return $sce.trustAsHtml(scope._mode === 'date' ? _dateFilter(scope.date, 'd') : "" + (_dateFilter(scope.date, 'h:mm')) + "<small>" + (_dateFilter(scope.date, 'a')) + "</small>");
            },
            sub: function() {
              if (scope._mode === 'date') {
                return _dateFilter(scope.date, 'yyyy');
              } else {
                return _dateFilter(scope.date, 'HH:mm');
              }
            }
          };
          scope.calendar = {
            _month: 0,
            _year: 0,
            _months: (function() {
              var _i, _results;
              _results = [];
              for (i = _i = 0; _i <= 11; i = ++_i) {
                _results.push(_dateFilter(new Date(0, i), 'MMMM'));
              }
              return _results;
            })(),
            offsetMargin: function() {
              return "" + (new Date(this._year, this._month).getDay() * 2.7) + "rem";
            },
            isVisible: function(d) {
              return new Date(this._year, this._month, d).getMonth() === this._month;
            },
            "class": function(d) {
              if ((scope.date != null) && new Date(this._year, this._month, d).getTime() === new Date(scope.date.getTime()).setHours(0, 0, 0, 0)) {
                return "selected";
              } else if (new Date(this._year, this._month, d).getTime() === new Date().setHours(0, 0, 0, 0)) {
                return "today";
              } else {
                return "";
              }
            },
            select: function(d) {
              return scope.date.setFullYear(this._year, this._month, d);
            },
            monthChange: function() {
              if ((this._year == null) || isNaN(this._year)) {
                this._year = new Date().getFullYear();
              }
              scope.date.setFullYear(this._year, this._month);
              if (scope.date.getMonth() !== this._month) {
                return scope.date.setDate(0);
              }
            },
            _incMonth: function(months) {
              this._month += months;
              while (this._month < 0 || this._month > 11) {
                if (this._month < 0) {
                  this._month += 12;
                  this._year--;
                } else {
                  this._month -= 12;
                  this._year++;
                }
              }
              return this.monthChange();
            }
          };
          scope.clock = {
            _minutes: 0,
            _hours: 0,
            _incHours: function(inc) {
              this._hours = scope._hours24 ? Math.max(0, Math.min(23, this._hours + inc)) : Math.max(1, Math.min(12, this._hours + inc));
              if (isNaN(this._hours)) {
                return this._hours = 0;
              }
            },
            _incMinutes: function(inc) {
              this._minutes = Math.max(0, Math.min(59, this._minutes + inc));
              if (isNaN(this._minutes)) {
                return this._minutes = 0;
              }
            },
            setAM: function(b) {
              if (b == null) {
                b = !this.isAM();
              }
              if (b && !this.isAM()) {
                return scope.date.setHours(scope.date.getHours() - 12);
              } else if (!b && this.isAM()) {
                return scope.date.setHours(scope.date.getHours() + 12);
              }
            },
            isAM: function() {
              return scope.date.getHours() < 12;
            }
          };
          scope.$watch('clock._minutes', function(val, oldVal) {
            if ((val != null) && val !== scope.date.getMinutes() && !isNaN(val) && (0 <= val && val <= 59)) {
              return scope.date.setMinutes(val);
            }
          });
          scope.$watch('clock._hours', function(val) {
            if ((val != null) && !isNaN(val)) {
              if (!scope._hours24) {
                if (val === 24) {
                  val = 12;
                } else if (val === 12) {
                  val = 0;
                } else if (!scope.clock.isAM()) {
                  val += 12;
                }
              }
              if (val !== scope.date.getHours()) {
                return scope.date.setHours(val);
              }
            }
          });
          scope.setNow = function() {
            return scope.setDate();
          };
          scope._mode = 'date';
          scope.modeClass = function() {
            if (scope._displayMode != null) {
              scope._mode = scope._displayMode;
            }
            return "" + ((scope._verticalMode != null) && scope._verticalMode ? 'vertical ' : '') + (scope._displayMode === 'full' ? 'full-mode' : scope._displayMode === 'time' ? 'time-only' : scope._displayMode === 'date' ? 'date-only' : scope._mode === 'date' ? 'date-mode' : 'time-mode');
          };
          scope.modeSwitch = function() {
            var _ref;
            return scope._mode = (_ref = scope._displayMode) != null ? _ref : scope._mode === 'date' ? 'time' : 'date';
          };
          return scope.modeSwitchText = function() {
            if (scope._mode === 'date') {
              return 'Clock';
            } else {
              return 'Calendar';
            }
          };
        }
      ]
    };
  }
]);

'use strict';

angular.module('mdDateTime').run(['$templateCache', function($templateCache) {

  $templateCache.put('md-date-time.tpl.html', '<div ng-class="modeClass()" class="time-date"><div ng-click="modeSwitch()" aria-label="Switch to {{modeSwitchText()}}" class="display"><div class="title">{{display.title()}}</div><div class="content"><div class="super-title">{{display.super()}}</div><div ng-bind-html="display.main()" class="main-title"></div><div class="sub-title">{{display.sub()}}</div></div></div><div class="control"><div class="full-title">{{display.fullTitle()}}</div><div class="slider"><div class="date-control"><div class="title"><md-button ng-click="calendar._incMonth(-1)" aria-label="Previous Month" style="float: left"><i class="fa fa-caret-left"></i></md-button><span class="month-part">{{date | date:\'MMMM\'}}<select ng-model="calendar._month" ng-change="calendar.monthChange()" ng-options="calendar._months.indexOf(month) as month for month in calendar._months"></select></span><input ng-model="calendar._year" ng-change="calendar.monthChange()" type="number" class="year-part"><md-button ng-click="calendar._incMonth(1)" aria-label="Next Month" style="float: right"><i class="fa fa-caret-right"></i></md-button></div><div class="headers"><div class="day-cell">S</div><div class="day-cell">M</div><div class="day-cell">T</div><div class="day-cell">W</div><div class="day-cell">T</div><div class="day-cell">F</div><div class="day-cell">S</div></div><div class="days"><md-button ng-style="{\'margin-left\': calendar.offsetMargin()}" ng-class="calendar.class(1)" ng-show="calendar.isVisible(1)" ng-click="calendar.select(1)" class="day-cell">1</md-button><md-button ng-class="calendar.class(2)" ng-show="calendar.isVisible(2)" ng-click="calendar.select(2)" class="day-cell">2</md-button><md-button ng-class="calendar.class(3)" ng-show="calendar.isVisible(3)" ng-click="calendar.select(3)" class="day-cell">3</md-button><md-button ng-class="calendar.class(4)" ng-show="calendar.isVisible(4)" ng-click="calendar.select(4)" class="day-cell">4</md-button><md-button ng-class="calendar.class(5)" ng-show="calendar.isVisible(5)" ng-click="calendar.select(5)" class="day-cell">5</md-button><md-button ng-class="calendar.class(6)" ng-show="calendar.isVisible(6)" ng-click="calendar.select(6)" class="day-cell">6</md-button><md-button ng-class="calendar.class(7)" ng-show="calendar.isVisible(7)" ng-click="calendar.select(7)" class="day-cell">7</md-button><md-button ng-class="calendar.class(8)" ng-show="calendar.isVisible(8)" ng-click="calendar.select(8)" class="day-cell">8</md-button><md-button ng-class="calendar.class(9)" ng-show="calendar.isVisible(9)" ng-click="calendar.select(9)" class="day-cell">9</md-button><md-button ng-class="calendar.class(10)" ng-show="calendar.isVisible(10)" ng-click="calendar.select(10)" class="day-cell">10</md-button><md-button ng-class="calendar.class(11)" ng-show="calendar.isVisible(11)" ng-click="calendar.select(11)" class="day-cell">11</md-button><md-button ng-class="calendar.class(12)" ng-show="calendar.isVisible(12)" ng-click="calendar.select(12)" class="day-cell">12</md-button><md-button ng-class="calendar.class(13)" ng-show="calendar.isVisible(13)" ng-click="calendar.select(13)" class="day-cell">13</md-button><md-button ng-class="calendar.class(14)" ng-show="calendar.isVisible(14)" ng-click="calendar.select(14)" class="day-cell">14</md-button><md-button ng-class="calendar.class(15)" ng-show="calendar.isVisible(15)" ng-click="calendar.select(15)" class="day-cell">15</md-button><md-button ng-class="calendar.class(16)" ng-show="calendar.isVisible(16)" ng-click="calendar.select(16)" class="day-cell">16</md-button><md-button ng-class="calendar.class(17)" ng-show="calendar.isVisible(17)" ng-click="calendar.select(17)" class="day-cell">17</md-button><md-button ng-class="calendar.class(18)" ng-show="calendar.isVisible(18)" ng-click="calendar.select(18)" class="day-cell">18</md-button><md-button ng-class="calendar.class(19)" ng-show="calendar.isVisible(19)" ng-click="calendar.select(19)" class="day-cell">19</md-button><md-button ng-class="calendar.class(20)" ng-show="calendar.isVisible(20)" ng-click="calendar.select(20)" class="day-cell">20</md-button><md-button ng-class="calendar.class(21)" ng-show="calendar.isVisible(21)" ng-click="calendar.select(21)" class="day-cell">21</md-button><md-button ng-class="calendar.class(22)" ng-show="calendar.isVisible(22)" ng-click="calendar.select(22)" class="day-cell">22</md-button><md-button ng-class="calendar.class(23)" ng-show="calendar.isVisible(23)" ng-click="calendar.select(23)" class="day-cell">23</md-button><md-button ng-class="calendar.class(24)" ng-show="calendar.isVisible(24)" ng-click="calendar.select(24)" class="day-cell">24</md-button><md-button ng-class="calendar.class(25)" ng-show="calendar.isVisible(25)" ng-click="calendar.select(25)" class="day-cell">25</md-button><md-button ng-class="calendar.class(26)" ng-show="calendar.isVisible(26)" ng-click="calendar.select(26)" class="day-cell">26</md-button><md-button ng-class="calendar.class(27)" ng-show="calendar.isVisible(27)" ng-click="calendar.select(27)" class="day-cell">27</md-button><md-button ng-class="calendar.class(28)" ng-show="calendar.isVisible(28)" ng-click="calendar.select(28)" class="day-cell">28</md-button><md-button ng-class="calendar.class(29)" ng-show="calendar.isVisible(29)" ng-click="calendar.select(29)" class="day-cell">29</md-button><md-button ng-class="calendar.class(30)" ng-show="calendar.isVisible(30)" ng-click="calendar.select(30)" class="day-cell">30</md-button><md-button ng-class="calendar.class(31)" ng-show="calendar.isVisible(31)" ng-click="calendar.select(31)" class="day-cell">31</md-button></div></div><md-button ng-click="modeSwitch()" aria-label="Switch to {{modeSwitchText()}}" class="switch-control"><i class="fa fa-clock-o"></i><i class="fa fa-calendar"></i><span class="visuallyhidden">{{modeSwitchText()}}</span></md-button><div class="time-control"><div class="time-inputs"><input type="number" min="{{_hours24 ? 0 : 1}}" max="{{_hours24 ? 23 : 12}}" ng-model="clock._hours"><md-button ng-click="clock._incHours(1)" aria-label="Increment Hours" class="hours up"><i class="fa fa-caret-up"></i></md-button><md-button ng-click="clock._incHours(-1)" aria-label="Decrement Hours" class="hours down"><i class="fa fa-caret-down"></i></md-button><input type="number" min="0" max="59" ng-model="clock._minutes"><md-button ng-click="clock._incMinutes(1)" aria-label="Increment Minutes" class="minutes up"><i class="fa fa-caret-up"></i></md-button><md-button ng-click="clock._incMinutes(-1)" aria-label="Decrement Minutes" class="minutes down"><i class="fa fa-caret-down"></i></md-button></div><div ng-if="!_hours24" class="buttons"><md-button ng-click="clock.setAM()" aria-label="Switch AM/PM">{{date | date:\'a\'}}</md-button></div></div></div></div><div class="buttons"><md-button ng-click="setNow()" aria-label="Set To Current {{ _dispalyMode == \'date\' ? \'Date\' : \'Date/Time\'}}">Now</md-button><md-button ng-click="cancel()" aria-label="Cancel">Cancel</md-button><md-button ng-click="save()" aria-label="Save">Save</md-button></div></div>');

}]);
//! moment.js
//! version : 2.9.0
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
(function(a){function b(a,b,c){switch(arguments.length){case 2:return null!=a?a:b;case 3:return null!=a?a:null!=b?b:c;default:throw new Error("Implement me")}}function c(a,b){return Bb.call(a,b)}function d(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1}}function e(a){vb.suppressDeprecationWarnings===!1&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+a)}function f(a,b){var c=!0;return o(function(){return c&&(e(a),c=!1),b.apply(this,arguments)},b)}function g(a,b){sc[a]||(e(b),sc[a]=!0)}function h(a,b){return function(c){return r(a.call(this,c),b)}}function i(a,b){return function(c){return this.localeData().ordinal(a.call(this,c),b)}}function j(a,b){var c,d,e=12*(b.year()-a.year())+(b.month()-a.month()),f=a.clone().add(e,"months");return 0>b-f?(c=a.clone().add(e-1,"months"),d=(b-f)/(f-c)):(c=a.clone().add(e+1,"months"),d=(b-f)/(c-f)),-(e+d)}function k(a,b,c){var d;return null==c?b:null!=a.meridiemHour?a.meridiemHour(b,c):null!=a.isPM?(d=a.isPM(c),d&&12>b&&(b+=12),d||12!==b||(b=0),b):b}function l(){}function m(a,b){b!==!1&&H(a),p(this,a),this._d=new Date(+a._d),uc===!1&&(uc=!0,vb.updateOffset(this),uc=!1)}function n(a){var b=A(a),c=b.year||0,d=b.quarter||0,e=b.month||0,f=b.week||0,g=b.day||0,h=b.hour||0,i=b.minute||0,j=b.second||0,k=b.millisecond||0;this._milliseconds=+k+1e3*j+6e4*i+36e5*h,this._days=+g+7*f,this._months=+e+3*d+12*c,this._data={},this._locale=vb.localeData(),this._bubble()}function o(a,b){for(var d in b)c(b,d)&&(a[d]=b[d]);return c(b,"toString")&&(a.toString=b.toString),c(b,"valueOf")&&(a.valueOf=b.valueOf),a}function p(a,b){var c,d,e;if("undefined"!=typeof b._isAMomentObject&&(a._isAMomentObject=b._isAMomentObject),"undefined"!=typeof b._i&&(a._i=b._i),"undefined"!=typeof b._f&&(a._f=b._f),"undefined"!=typeof b._l&&(a._l=b._l),"undefined"!=typeof b._strict&&(a._strict=b._strict),"undefined"!=typeof b._tzm&&(a._tzm=b._tzm),"undefined"!=typeof b._isUTC&&(a._isUTC=b._isUTC),"undefined"!=typeof b._offset&&(a._offset=b._offset),"undefined"!=typeof b._pf&&(a._pf=b._pf),"undefined"!=typeof b._locale&&(a._locale=b._locale),Kb.length>0)for(c in Kb)d=Kb[c],e=b[d],"undefined"!=typeof e&&(a[d]=e);return a}function q(a){return 0>a?Math.ceil(a):Math.floor(a)}function r(a,b,c){for(var d=""+Math.abs(a),e=a>=0;d.length<b;)d="0"+d;return(e?c?"+":"":"-")+d}function s(a,b){var c={milliseconds:0,months:0};return c.months=b.month()-a.month()+12*(b.year()-a.year()),a.clone().add(c.months,"M").isAfter(b)&&--c.months,c.milliseconds=+b-+a.clone().add(c.months,"M"),c}function t(a,b){var c;return b=M(b,a),a.isBefore(b)?c=s(a,b):(c=s(b,a),c.milliseconds=-c.milliseconds,c.months=-c.months),c}function u(a,b){return function(c,d){var e,f;return null===d||isNaN(+d)||(g(b,"moment()."+b+"(period, number) is deprecated. Please use moment()."+b+"(number, period)."),f=c,c=d,d=f),c="string"==typeof c?+c:c,e=vb.duration(c,d),v(this,e,a),this}}function v(a,b,c,d){var e=b._milliseconds,f=b._days,g=b._months;d=null==d?!0:d,e&&a._d.setTime(+a._d+e*c),f&&pb(a,"Date",ob(a,"Date")+f*c),g&&nb(a,ob(a,"Month")+g*c),d&&vb.updateOffset(a,f||g)}function w(a){return"[object Array]"===Object.prototype.toString.call(a)}function x(a){return"[object Date]"===Object.prototype.toString.call(a)||a instanceof Date}function y(a,b,c){var d,e=Math.min(a.length,b.length),f=Math.abs(a.length-b.length),g=0;for(d=0;e>d;d++)(c&&a[d]!==b[d]||!c&&C(a[d])!==C(b[d]))&&g++;return g+f}function z(a){if(a){var b=a.toLowerCase().replace(/(.)s$/,"$1");a=lc[a]||mc[b]||b}return a}function A(a){var b,d,e={};for(d in a)c(a,d)&&(b=z(d),b&&(e[b]=a[d]));return e}function B(b){var c,d;if(0===b.indexOf("week"))c=7,d="day";else{if(0!==b.indexOf("month"))return;c=12,d="month"}vb[b]=function(e,f){var g,h,i=vb._locale[b],j=[];if("number"==typeof e&&(f=e,e=a),h=function(a){var b=vb().utc().set(d,a);return i.call(vb._locale,b,e||"")},null!=f)return h(f);for(g=0;c>g;g++)j.push(h(g));return j}}function C(a){var b=+a,c=0;return 0!==b&&isFinite(b)&&(c=b>=0?Math.floor(b):Math.ceil(b)),c}function D(a,b){return new Date(Date.UTC(a,b+1,0)).getUTCDate()}function E(a,b,c){return jb(vb([a,11,31+b-c]),b,c).week}function F(a){return G(a)?366:365}function G(a){return a%4===0&&a%100!==0||a%400===0}function H(a){var b;a._a&&-2===a._pf.overflow&&(b=a._a[Db]<0||a._a[Db]>11?Db:a._a[Eb]<1||a._a[Eb]>D(a._a[Cb],a._a[Db])?Eb:a._a[Fb]<0||a._a[Fb]>24||24===a._a[Fb]&&(0!==a._a[Gb]||0!==a._a[Hb]||0!==a._a[Ib])?Fb:a._a[Gb]<0||a._a[Gb]>59?Gb:a._a[Hb]<0||a._a[Hb]>59?Hb:a._a[Ib]<0||a._a[Ib]>999?Ib:-1,a._pf._overflowDayOfYear&&(Cb>b||b>Eb)&&(b=Eb),a._pf.overflow=b)}function I(b){return null==b._isValid&&(b._isValid=!isNaN(b._d.getTime())&&b._pf.overflow<0&&!b._pf.empty&&!b._pf.invalidMonth&&!b._pf.nullInput&&!b._pf.invalidFormat&&!b._pf.userInvalidated,b._strict&&(b._isValid=b._isValid&&0===b._pf.charsLeftOver&&0===b._pf.unusedTokens.length&&b._pf.bigHour===a)),b._isValid}function J(a){return a?a.toLowerCase().replace("_","-"):a}function K(a){for(var b,c,d,e,f=0;f<a.length;){for(e=J(a[f]).split("-"),b=e.length,c=J(a[f+1]),c=c?c.split("-"):null;b>0;){if(d=L(e.slice(0,b).join("-")))return d;if(c&&c.length>=b&&y(e,c,!0)>=b-1)break;b--}f++}return null}function L(a){var b=null;if(!Jb[a]&&Lb)try{b=vb.locale(),require("./locale/"+a),vb.locale(b)}catch(c){}return Jb[a]}function M(a,b){var c,d;return b._isUTC?(c=b.clone(),d=(vb.isMoment(a)||x(a)?+a:+vb(a))-+c,c._d.setTime(+c._d+d),vb.updateOffset(c,!1),c):vb(a).local()}function N(a){return a.match(/\[[\s\S]/)?a.replace(/^\[|\]$/g,""):a.replace(/\\/g,"")}function O(a){var b,c,d=a.match(Pb);for(b=0,c=d.length;c>b;b++)d[b]=rc[d[b]]?rc[d[b]]:N(d[b]);return function(e){var f="";for(b=0;c>b;b++)f+=d[b]instanceof Function?d[b].call(e,a):d[b];return f}}function P(a,b){return a.isValid()?(b=Q(b,a.localeData()),nc[b]||(nc[b]=O(b)),nc[b](a)):a.localeData().invalidDate()}function Q(a,b){function c(a){return b.longDateFormat(a)||a}var d=5;for(Qb.lastIndex=0;d>=0&&Qb.test(a);)a=a.replace(Qb,c),Qb.lastIndex=0,d-=1;return a}function R(a,b){var c,d=b._strict;switch(a){case"Q":return _b;case"DDDD":return bc;case"YYYY":case"GGGG":case"gggg":return d?cc:Tb;case"Y":case"G":case"g":return ec;case"YYYYYY":case"YYYYY":case"GGGGG":case"ggggg":return d?dc:Ub;case"S":if(d)return _b;case"SS":if(d)return ac;case"SSS":if(d)return bc;case"DDD":return Sb;case"MMM":case"MMMM":case"dd":case"ddd":case"dddd":return Wb;case"a":case"A":return b._locale._meridiemParse;case"x":return Zb;case"X":return $b;case"Z":case"ZZ":return Xb;case"T":return Yb;case"SSSS":return Vb;case"MM":case"DD":case"YY":case"GG":case"gg":case"HH":case"hh":case"mm":case"ss":case"ww":case"WW":return d?ac:Rb;case"M":case"D":case"d":case"H":case"h":case"m":case"s":case"w":case"W":case"e":case"E":return Rb;case"Do":return d?b._locale._ordinalParse:b._locale._ordinalParseLenient;default:return c=new RegExp($(Z(a.replace("\\","")),"i"))}}function S(a){a=a||"";var b=a.match(Xb)||[],c=b[b.length-1]||[],d=(c+"").match(jc)||["-",0,0],e=+(60*d[1])+C(d[2]);return"+"===d[0]?e:-e}function T(a,b,c){var d,e=c._a;switch(a){case"Q":null!=b&&(e[Db]=3*(C(b)-1));break;case"M":case"MM":null!=b&&(e[Db]=C(b)-1);break;case"MMM":case"MMMM":d=c._locale.monthsParse(b,a,c._strict),null!=d?e[Db]=d:c._pf.invalidMonth=b;break;case"D":case"DD":null!=b&&(e[Eb]=C(b));break;case"Do":null!=b&&(e[Eb]=C(parseInt(b.match(/\d{1,2}/)[0],10)));break;case"DDD":case"DDDD":null!=b&&(c._dayOfYear=C(b));break;case"YY":e[Cb]=vb.parseTwoDigitYear(b);break;case"YYYY":case"YYYYY":case"YYYYYY":e[Cb]=C(b);break;case"a":case"A":c._meridiem=b;break;case"h":case"hh":c._pf.bigHour=!0;case"H":case"HH":e[Fb]=C(b);break;case"m":case"mm":e[Gb]=C(b);break;case"s":case"ss":e[Hb]=C(b);break;case"S":case"SS":case"SSS":case"SSSS":e[Ib]=C(1e3*("0."+b));break;case"x":c._d=new Date(C(b));break;case"X":c._d=new Date(1e3*parseFloat(b));break;case"Z":case"ZZ":c._useUTC=!0,c._tzm=S(b);break;case"dd":case"ddd":case"dddd":d=c._locale.weekdaysParse(b),null!=d?(c._w=c._w||{},c._w.d=d):c._pf.invalidWeekday=b;break;case"w":case"ww":case"W":case"WW":case"d":case"e":case"E":a=a.substr(0,1);case"gggg":case"GGGG":case"GGGGG":a=a.substr(0,2),b&&(c._w=c._w||{},c._w[a]=C(b));break;case"gg":case"GG":c._w=c._w||{},c._w[a]=vb.parseTwoDigitYear(b)}}function U(a){var c,d,e,f,g,h,i;c=a._w,null!=c.GG||null!=c.W||null!=c.E?(g=1,h=4,d=b(c.GG,a._a[Cb],jb(vb(),1,4).year),e=b(c.W,1),f=b(c.E,1)):(g=a._locale._week.dow,h=a._locale._week.doy,d=b(c.gg,a._a[Cb],jb(vb(),g,h).year),e=b(c.w,1),null!=c.d?(f=c.d,g>f&&++e):f=null!=c.e?c.e+g:g),i=kb(d,e,f,h,g),a._a[Cb]=i.year,a._dayOfYear=i.dayOfYear}function V(a){var c,d,e,f,g=[];if(!a._d){for(e=X(a),a._w&&null==a._a[Eb]&&null==a._a[Db]&&U(a),a._dayOfYear&&(f=b(a._a[Cb],e[Cb]),a._dayOfYear>F(f)&&(a._pf._overflowDayOfYear=!0),d=fb(f,0,a._dayOfYear),a._a[Db]=d.getUTCMonth(),a._a[Eb]=d.getUTCDate()),c=0;3>c&&null==a._a[c];++c)a._a[c]=g[c]=e[c];for(;7>c;c++)a._a[c]=g[c]=null==a._a[c]?2===c?1:0:a._a[c];24===a._a[Fb]&&0===a._a[Gb]&&0===a._a[Hb]&&0===a._a[Ib]&&(a._nextDay=!0,a._a[Fb]=0),a._d=(a._useUTC?fb:eb).apply(null,g),null!=a._tzm&&a._d.setUTCMinutes(a._d.getUTCMinutes()-a._tzm),a._nextDay&&(a._a[Fb]=24)}}function W(a){var b;a._d||(b=A(a._i),a._a=[b.year,b.month,b.day||b.date,b.hour,b.minute,b.second,b.millisecond],V(a))}function X(a){var b=new Date;return a._useUTC?[b.getUTCFullYear(),b.getUTCMonth(),b.getUTCDate()]:[b.getFullYear(),b.getMonth(),b.getDate()]}function Y(b){if(b._f===vb.ISO_8601)return void ab(b);b._a=[],b._pf.empty=!0;var c,d,e,f,g,h=""+b._i,i=h.length,j=0;for(e=Q(b._f,b._locale).match(Pb)||[],c=0;c<e.length;c++)f=e[c],d=(h.match(R(f,b))||[])[0],d&&(g=h.substr(0,h.indexOf(d)),g.length>0&&b._pf.unusedInput.push(g),h=h.slice(h.indexOf(d)+d.length),j+=d.length),rc[f]?(d?b._pf.empty=!1:b._pf.unusedTokens.push(f),T(f,d,b)):b._strict&&!d&&b._pf.unusedTokens.push(f);b._pf.charsLeftOver=i-j,h.length>0&&b._pf.unusedInput.push(h),b._pf.bigHour===!0&&b._a[Fb]<=12&&(b._pf.bigHour=a),b._a[Fb]=k(b._locale,b._a[Fb],b._meridiem),V(b),H(b)}function Z(a){return a.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(a,b,c,d,e){return b||c||d||e})}function $(a){return a.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function _(a){var b,c,e,f,g;if(0===a._f.length)return a._pf.invalidFormat=!0,void(a._d=new Date(0/0));for(f=0;f<a._f.length;f++)g=0,b=p({},a),null!=a._useUTC&&(b._useUTC=a._useUTC),b._pf=d(),b._f=a._f[f],Y(b),I(b)&&(g+=b._pf.charsLeftOver,g+=10*b._pf.unusedTokens.length,b._pf.score=g,(null==e||e>g)&&(e=g,c=b));o(a,c||b)}function ab(a){var b,c,d=a._i,e=fc.exec(d);if(e){for(a._pf.iso=!0,b=0,c=hc.length;c>b;b++)if(hc[b][1].exec(d)){a._f=hc[b][0]+(e[6]||" ");break}for(b=0,c=ic.length;c>b;b++)if(ic[b][1].exec(d)){a._f+=ic[b][0];break}d.match(Xb)&&(a._f+="Z"),Y(a)}else a._isValid=!1}function bb(a){ab(a),a._isValid===!1&&(delete a._isValid,vb.createFromInputFallback(a))}function cb(a,b){var c,d=[];for(c=0;c<a.length;++c)d.push(b(a[c],c));return d}function db(b){var c,d=b._i;d===a?b._d=new Date:x(d)?b._d=new Date(+d):null!==(c=Mb.exec(d))?b._d=new Date(+c[1]):"string"==typeof d?bb(b):w(d)?(b._a=cb(d.slice(0),function(a){return parseInt(a,10)}),V(b)):"object"==typeof d?W(b):"number"==typeof d?b._d=new Date(d):vb.createFromInputFallback(b)}function eb(a,b,c,d,e,f,g){var h=new Date(a,b,c,d,e,f,g);return 1970>a&&h.setFullYear(a),h}function fb(a){var b=new Date(Date.UTC.apply(null,arguments));return 1970>a&&b.setUTCFullYear(a),b}function gb(a,b){if("string"==typeof a)if(isNaN(a)){if(a=b.weekdaysParse(a),"number"!=typeof a)return null}else a=parseInt(a,10);return a}function hb(a,b,c,d,e){return e.relativeTime(b||1,!!c,a,d)}function ib(a,b,c){var d=vb.duration(a).abs(),e=Ab(d.as("s")),f=Ab(d.as("m")),g=Ab(d.as("h")),h=Ab(d.as("d")),i=Ab(d.as("M")),j=Ab(d.as("y")),k=e<oc.s&&["s",e]||1===f&&["m"]||f<oc.m&&["mm",f]||1===g&&["h"]||g<oc.h&&["hh",g]||1===h&&["d"]||h<oc.d&&["dd",h]||1===i&&["M"]||i<oc.M&&["MM",i]||1===j&&["y"]||["yy",j];return k[2]=b,k[3]=+a>0,k[4]=c,hb.apply({},k)}function jb(a,b,c){var d,e=c-b,f=c-a.day();return f>e&&(f-=7),e-7>f&&(f+=7),d=vb(a).add(f,"d"),{week:Math.ceil(d.dayOfYear()/7),year:d.year()}}function kb(a,b,c,d,e){var f,g,h=fb(a,0,1).getUTCDay();return h=0===h?7:h,c=null!=c?c:e,f=e-h+(h>d?7:0)-(e>h?7:0),g=7*(b-1)+(c-e)+f+1,{year:g>0?a:a-1,dayOfYear:g>0?g:F(a-1)+g}}function lb(b){var c,d=b._i,e=b._f;return b._locale=b._locale||vb.localeData(b._l),null===d||e===a&&""===d?vb.invalid({nullInput:!0}):("string"==typeof d&&(b._i=d=b._locale.preparse(d)),vb.isMoment(d)?new m(d,!0):(e?w(e)?_(b):Y(b):db(b),c=new m(b),c._nextDay&&(c.add(1,"d"),c._nextDay=a),c))}function mb(a,b){var c,d;if(1===b.length&&w(b[0])&&(b=b[0]),!b.length)return vb();for(c=b[0],d=1;d<b.length;++d)b[d][a](c)&&(c=b[d]);return c}function nb(a,b){var c;return"string"==typeof b&&(b=a.localeData().monthsParse(b),"number"!=typeof b)?a:(c=Math.min(a.date(),D(a.year(),b)),a._d["set"+(a._isUTC?"UTC":"")+"Month"](b,c),a)}function ob(a,b){return a._d["get"+(a._isUTC?"UTC":"")+b]()}function pb(a,b,c){return"Month"===b?nb(a,c):a._d["set"+(a._isUTC?"UTC":"")+b](c)}function qb(a,b){return function(c){return null!=c?(pb(this,a,c),vb.updateOffset(this,b),this):ob(this,a)}}function rb(a){return 400*a/146097}function sb(a){return 146097*a/400}function tb(a){vb.duration.fn[a]=function(){return this._data[a]}}function ub(a){"undefined"==typeof ender&&(wb=zb.moment,zb.moment=a?f("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.",vb):vb)}for(var vb,wb,xb,yb="2.9.0",zb="undefined"==typeof global||"undefined"!=typeof window&&window!==global.window?this:global,Ab=Math.round,Bb=Object.prototype.hasOwnProperty,Cb=0,Db=1,Eb=2,Fb=3,Gb=4,Hb=5,Ib=6,Jb={},Kb=[],Lb="undefined"!=typeof module&&module&&module.exports,Mb=/^\/?Date\((\-?\d+)/i,Nb=/(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,Ob=/^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/,Pb=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|x|X|zz?|ZZ?|.)/g,Qb=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,Rb=/\d\d?/,Sb=/\d{1,3}/,Tb=/\d{1,4}/,Ub=/[+\-]?\d{1,6}/,Vb=/\d+/,Wb=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,Xb=/Z|[\+\-]\d\d:?\d\d/gi,Yb=/T/i,Zb=/[\+\-]?\d+/,$b=/[\+\-]?\d+(\.\d{1,3})?/,_b=/\d/,ac=/\d\d/,bc=/\d{3}/,cc=/\d{4}/,dc=/[+-]?\d{6}/,ec=/[+-]?\d+/,fc=/^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,gc="YYYY-MM-DDTHH:mm:ssZ",hc=[["YYYYYY-MM-DD",/[+-]\d{6}-\d{2}-\d{2}/],["YYYY-MM-DD",/\d{4}-\d{2}-\d{2}/],["GGGG-[W]WW-E",/\d{4}-W\d{2}-\d/],["GGGG-[W]WW",/\d{4}-W\d{2}/],["YYYY-DDD",/\d{4}-\d{3}/]],ic=[["HH:mm:ss.SSSS",/(T| )\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss",/(T| )\d\d:\d\d:\d\d/],["HH:mm",/(T| )\d\d:\d\d/],["HH",/(T| )\d\d/]],jc=/([\+\-]|\d\d)/gi,kc=("Date|Hours|Minutes|Seconds|Milliseconds".split("|"),{Milliseconds:1,Seconds:1e3,Minutes:6e4,Hours:36e5,Days:864e5,Months:2592e6,Years:31536e6}),lc={ms:"millisecond",s:"second",m:"minute",h:"hour",d:"day",D:"date",w:"week",W:"isoWeek",M:"month",Q:"quarter",y:"year",DDD:"dayOfYear",e:"weekday",E:"isoWeekday",gg:"weekYear",GG:"isoWeekYear"},mc={dayofyear:"dayOfYear",isoweekday:"isoWeekday",isoweek:"isoWeek",weekyear:"weekYear",isoweekyear:"isoWeekYear"},nc={},oc={s:45,m:45,h:22,d:26,M:11},pc="DDD w W M D d".split(" "),qc="M D H h m s w W".split(" "),rc={M:function(){return this.month()+1},MMM:function(a){return this.localeData().monthsShort(this,a)},MMMM:function(a){return this.localeData().months(this,a)},D:function(){return this.date()},DDD:function(){return this.dayOfYear()},d:function(){return this.day()},dd:function(a){return this.localeData().weekdaysMin(this,a)},ddd:function(a){return this.localeData().weekdaysShort(this,a)},dddd:function(a){return this.localeData().weekdays(this,a)},w:function(){return this.week()},W:function(){return this.isoWeek()},YY:function(){return r(this.year()%100,2)},YYYY:function(){return r(this.year(),4)},YYYYY:function(){return r(this.year(),5)},YYYYYY:function(){var a=this.year(),b=a>=0?"+":"-";return b+r(Math.abs(a),6)},gg:function(){return r(this.weekYear()%100,2)},gggg:function(){return r(this.weekYear(),4)},ggggg:function(){return r(this.weekYear(),5)},GG:function(){return r(this.isoWeekYear()%100,2)},GGGG:function(){return r(this.isoWeekYear(),4)},GGGGG:function(){return r(this.isoWeekYear(),5)},e:function(){return this.weekday()},E:function(){return this.isoWeekday()},a:function(){return this.localeData().meridiem(this.hours(),this.minutes(),!0)},A:function(){return this.localeData().meridiem(this.hours(),this.minutes(),!1)},H:function(){return this.hours()},h:function(){return this.hours()%12||12},m:function(){return this.minutes()},s:function(){return this.seconds()},S:function(){return C(this.milliseconds()/100)},SS:function(){return r(C(this.milliseconds()/10),2)},SSS:function(){return r(this.milliseconds(),3)},SSSS:function(){return r(this.milliseconds(),3)},Z:function(){var a=this.utcOffset(),b="+";return 0>a&&(a=-a,b="-"),b+r(C(a/60),2)+":"+r(C(a)%60,2)},ZZ:function(){var a=this.utcOffset(),b="+";return 0>a&&(a=-a,b="-"),b+r(C(a/60),2)+r(C(a)%60,2)},z:function(){return this.zoneAbbr()},zz:function(){return this.zoneName()},x:function(){return this.valueOf()},X:function(){return this.unix()},Q:function(){return this.quarter()}},sc={},tc=["months","monthsShort","weekdays","weekdaysShort","weekdaysMin"],uc=!1;pc.length;)xb=pc.pop(),rc[xb+"o"]=i(rc[xb],xb);for(;qc.length;)xb=qc.pop(),rc[xb+xb]=h(rc[xb],2);rc.DDDD=h(rc.DDD,3),o(l.prototype,{set:function(a){var b,c;for(c in a)b=a[c],"function"==typeof b?this[c]=b:this["_"+c]=b;this._ordinalParseLenient=new RegExp(this._ordinalParse.source+"|"+/\d{1,2}/.source)},_months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),months:function(a){return this._months[a.month()]},_monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),monthsShort:function(a){return this._monthsShort[a.month()]},monthsParse:function(a,b,c){var d,e,f;for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),d=0;12>d;d++){if(e=vb.utc([2e3,d]),c&&!this._longMonthsParse[d]&&(this._longMonthsParse[d]=new RegExp("^"+this.months(e,"").replace(".","")+"$","i"),this._shortMonthsParse[d]=new RegExp("^"+this.monthsShort(e,"").replace(".","")+"$","i")),c||this._monthsParse[d]||(f="^"+this.months(e,"")+"|^"+this.monthsShort(e,""),this._monthsParse[d]=new RegExp(f.replace(".",""),"i")),c&&"MMMM"===b&&this._longMonthsParse[d].test(a))return d;if(c&&"MMM"===b&&this._shortMonthsParse[d].test(a))return d;if(!c&&this._monthsParse[d].test(a))return d}},_weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdays:function(a){return this._weekdays[a.day()]},_weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysShort:function(a){return this._weekdaysShort[a.day()]},_weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),weekdaysMin:function(a){return this._weekdaysMin[a.day()]},weekdaysParse:function(a){var b,c,d;for(this._weekdaysParse||(this._weekdaysParse=[]),b=0;7>b;b++)if(this._weekdaysParse[b]||(c=vb([2e3,1]).day(b),d="^"+this.weekdays(c,"")+"|^"+this.weekdaysShort(c,"")+"|^"+this.weekdaysMin(c,""),this._weekdaysParse[b]=new RegExp(d.replace(".",""),"i")),this._weekdaysParse[b].test(a))return b},_longDateFormat:{LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY LT",LLLL:"dddd, MMMM D, YYYY LT"},longDateFormat:function(a){var b=this._longDateFormat[a];return!b&&this._longDateFormat[a.toUpperCase()]&&(b=this._longDateFormat[a.toUpperCase()].replace(/MMMM|MM|DD|dddd/g,function(a){return a.slice(1)}),this._longDateFormat[a]=b),b},isPM:function(a){return"p"===(a+"").toLowerCase().charAt(0)},_meridiemParse:/[ap]\.?m?\.?/i,meridiem:function(a,b,c){return a>11?c?"pm":"PM":c?"am":"AM"},_calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},calendar:function(a,b,c){var d=this._calendar[a];return"function"==typeof d?d.apply(b,[c]):d},_relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},relativeTime:function(a,b,c,d){var e=this._relativeTime[c];return"function"==typeof e?e(a,b,c,d):e.replace(/%d/i,a)},pastFuture:function(a,b){var c=this._relativeTime[a>0?"future":"past"];return"function"==typeof c?c(b):c.replace(/%s/i,b)},ordinal:function(a){return this._ordinal.replace("%d",a)},_ordinal:"%d",_ordinalParse:/\d{1,2}/,preparse:function(a){return a},postformat:function(a){return a},week:function(a){return jb(a,this._week.dow,this._week.doy).week},_week:{dow:0,doy:6},firstDayOfWeek:function(){return this._week.dow},firstDayOfYear:function(){return this._week.doy},_invalidDate:"Invalid date",invalidDate:function(){return this._invalidDate}}),vb=function(b,c,e,f){var g;return"boolean"==typeof e&&(f=e,e=a),g={},g._isAMomentObject=!0,g._i=b,g._f=c,g._l=e,g._strict=f,g._isUTC=!1,g._pf=d(),lb(g)},vb.suppressDeprecationWarnings=!1,vb.createFromInputFallback=f("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.",function(a){a._d=new Date(a._i+(a._useUTC?" UTC":""))}),vb.min=function(){var a=[].slice.call(arguments,0);return mb("isBefore",a)},vb.max=function(){var a=[].slice.call(arguments,0);return mb("isAfter",a)},vb.utc=function(b,c,e,f){var g;return"boolean"==typeof e&&(f=e,e=a),g={},g._isAMomentObject=!0,g._useUTC=!0,g._isUTC=!0,g._l=e,g._i=b,g._f=c,g._strict=f,g._pf=d(),lb(g).utc()},vb.unix=function(a){return vb(1e3*a)},vb.duration=function(a,b){var d,e,f,g,h=a,i=null;return vb.isDuration(a)?h={ms:a._milliseconds,d:a._days,M:a._months}:"number"==typeof a?(h={},b?h[b]=a:h.milliseconds=a):(i=Nb.exec(a))?(d="-"===i[1]?-1:1,h={y:0,d:C(i[Eb])*d,h:C(i[Fb])*d,m:C(i[Gb])*d,s:C(i[Hb])*d,ms:C(i[Ib])*d}):(i=Ob.exec(a))?(d="-"===i[1]?-1:1,f=function(a){var b=a&&parseFloat(a.replace(",","."));return(isNaN(b)?0:b)*d},h={y:f(i[2]),M:f(i[3]),d:f(i[4]),h:f(i[5]),m:f(i[6]),s:f(i[7]),w:f(i[8])}):null==h?h={}:"object"==typeof h&&("from"in h||"to"in h)&&(g=t(vb(h.from),vb(h.to)),h={},h.ms=g.milliseconds,h.M=g.months),e=new n(h),vb.isDuration(a)&&c(a,"_locale")&&(e._locale=a._locale),e},vb.version=yb,vb.defaultFormat=gc,vb.ISO_8601=function(){},vb.momentProperties=Kb,vb.updateOffset=function(){},vb.relativeTimeThreshold=function(b,c){return oc[b]===a?!1:c===a?oc[b]:(oc[b]=c,!0)},vb.lang=f("moment.lang is deprecated. Use moment.locale instead.",function(a,b){return vb.locale(a,b)}),vb.locale=function(a,b){var c;return a&&(c="undefined"!=typeof b?vb.defineLocale(a,b):vb.localeData(a),c&&(vb.duration._locale=vb._locale=c)),vb._locale._abbr},vb.defineLocale=function(a,b){return null!==b?(b.abbr=a,Jb[a]||(Jb[a]=new l),Jb[a].set(b),vb.locale(a),Jb[a]):(delete Jb[a],null)},vb.langData=f("moment.langData is deprecated. Use moment.localeData instead.",function(a){return vb.localeData(a)}),vb.localeData=function(a){var b;if(a&&a._locale&&a._locale._abbr&&(a=a._locale._abbr),!a)return vb._locale;if(!w(a)){if(b=L(a))return b;a=[a]}return K(a)},vb.isMoment=function(a){return a instanceof m||null!=a&&c(a,"_isAMomentObject")},vb.isDuration=function(a){return a instanceof n};for(xb=tc.length-1;xb>=0;--xb)B(tc[xb]);vb.normalizeUnits=function(a){return z(a)},vb.invalid=function(a){var b=vb.utc(0/0);return null!=a?o(b._pf,a):b._pf.userInvalidated=!0,b},vb.parseZone=function(){return vb.apply(null,arguments).parseZone()},vb.parseTwoDigitYear=function(a){return C(a)+(C(a)>68?1900:2e3)},vb.isDate=x,o(vb.fn=m.prototype,{clone:function(){return vb(this)},valueOf:function(){return+this._d-6e4*(this._offset||0)},unix:function(){return Math.floor(+this/1e3)},toString:function(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},toDate:function(){return this._offset?new Date(+this):this._d},toISOString:function(){var a=vb(this).utc();return 0<a.year()&&a.year()<=9999?"function"==typeof Date.prototype.toISOString?this.toDate().toISOString():P(a,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):P(a,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")},toArray:function(){var a=this;return[a.year(),a.month(),a.date(),a.hours(),a.minutes(),a.seconds(),a.milliseconds()]},isValid:function(){return I(this)},isDSTShifted:function(){return this._a?this.isValid()&&y(this._a,(this._isUTC?vb.utc(this._a):vb(this._a)).toArray())>0:!1},parsingFlags:function(){return o({},this._pf)},invalidAt:function(){return this._pf.overflow},utc:function(a){return this.utcOffset(0,a)},local:function(a){return this._isUTC&&(this.utcOffset(0,a),this._isUTC=!1,a&&this.subtract(this._dateUtcOffset(),"m")),this},format:function(a){var b=P(this,a||vb.defaultFormat);return this.localeData().postformat(b)},add:u(1,"add"),subtract:u(-1,"subtract"),diff:function(a,b,c){var d,e,f=M(a,this),g=6e4*(f.utcOffset()-this.utcOffset());return b=z(b),"year"===b||"month"===b||"quarter"===b?(e=j(this,f),"quarter"===b?e/=3:"year"===b&&(e/=12)):(d=this-f,e="second"===b?d/1e3:"minute"===b?d/6e4:"hour"===b?d/36e5:"day"===b?(d-g)/864e5:"week"===b?(d-g)/6048e5:d),c?e:q(e)},from:function(a,b){return vb.duration({to:this,from:a}).locale(this.locale()).humanize(!b)},fromNow:function(a){return this.from(vb(),a)},calendar:function(a){var b=a||vb(),c=M(b,this).startOf("day"),d=this.diff(c,"days",!0),e=-6>d?"sameElse":-1>d?"lastWeek":0>d?"lastDay":1>d?"sameDay":2>d?"nextDay":7>d?"nextWeek":"sameElse";return this.format(this.localeData().calendar(e,this,vb(b)))},isLeapYear:function(){return G(this.year())},isDST:function(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()},day:function(a){var b=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=a?(a=gb(a,this.localeData()),this.add(a-b,"d")):b},month:qb("Month",!0),startOf:function(a){switch(a=z(a)){case"year":this.month(0);case"quarter":case"month":this.date(1);case"week":case"isoWeek":case"day":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===a?this.weekday(0):"isoWeek"===a&&this.isoWeekday(1),"quarter"===a&&this.month(3*Math.floor(this.month()/3)),this},endOf:function(b){return b=z(b),b===a||"millisecond"===b?this:this.startOf(b).add(1,"isoWeek"===b?"week":b).subtract(1,"ms")},isAfter:function(a,b){var c;return b=z("undefined"!=typeof b?b:"millisecond"),"millisecond"===b?(a=vb.isMoment(a)?a:vb(a),+this>+a):(c=vb.isMoment(a)?+a:+vb(a),c<+this.clone().startOf(b))},isBefore:function(a,b){var c;return b=z("undefined"!=typeof b?b:"millisecond"),"millisecond"===b?(a=vb.isMoment(a)?a:vb(a),+a>+this):(c=vb.isMoment(a)?+a:+vb(a),+this.clone().endOf(b)<c)},isBetween:function(a,b,c){return this.isAfter(a,c)&&this.isBefore(b,c)},isSame:function(a,b){var c;return b=z(b||"millisecond"),"millisecond"===b?(a=vb.isMoment(a)?a:vb(a),+this===+a):(c=+vb(a),+this.clone().startOf(b)<=c&&c<=+this.clone().endOf(b))},min:f("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548",function(a){return a=vb.apply(null,arguments),this>a?this:a}),max:f("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548",function(a){return a=vb.apply(null,arguments),a>this?this:a}),zone:f("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779",function(a,b){return null!=a?("string"!=typeof a&&(a=-a),this.utcOffset(a,b),this):-this.utcOffset()}),utcOffset:function(a,b){var c,d=this._offset||0;return null!=a?("string"==typeof a&&(a=S(a)),Math.abs(a)<16&&(a=60*a),!this._isUTC&&b&&(c=this._dateUtcOffset()),this._offset=a,this._isUTC=!0,null!=c&&this.add(c,"m"),d!==a&&(!b||this._changeInProgress?v(this,vb.duration(a-d,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,vb.updateOffset(this,!0),this._changeInProgress=null)),this):this._isUTC?d:this._dateUtcOffset()},isLocal:function(){return!this._isUTC},isUtcOffset:function(){return this._isUTC},isUtc:function(){return this._isUTC&&0===this._offset},zoneAbbr:function(){return this._isUTC?"UTC":""},zoneName:function(){return this._isUTC?"Coordinated Universal Time":""},parseZone:function(){return this._tzm?this.utcOffset(this._tzm):"string"==typeof this._i&&this.utcOffset(S(this._i)),this},hasAlignedHourOffset:function(a){return a=a?vb(a).utcOffset():0,(this.utcOffset()-a)%60===0},daysInMonth:function(){return D(this.year(),this.month())},dayOfYear:function(a){var b=Ab((vb(this).startOf("day")-vb(this).startOf("year"))/864e5)+1;return null==a?b:this.add(a-b,"d")},quarter:function(a){return null==a?Math.ceil((this.month()+1)/3):this.month(3*(a-1)+this.month()%3)},weekYear:function(a){var b=jb(this,this.localeData()._week.dow,this.localeData()._week.doy).year;return null==a?b:this.add(a-b,"y")},isoWeekYear:function(a){var b=jb(this,1,4).year;return null==a?b:this.add(a-b,"y")},week:function(a){var b=this.localeData().week(this);return null==a?b:this.add(7*(a-b),"d")},isoWeek:function(a){var b=jb(this,1,4).week;return null==a?b:this.add(7*(a-b),"d")},weekday:function(a){var b=(this.day()+7-this.localeData()._week.dow)%7;return null==a?b:this.add(a-b,"d")},isoWeekday:function(a){return null==a?this.day()||7:this.day(this.day()%7?a:a-7)},isoWeeksInYear:function(){return E(this.year(),1,4)},weeksInYear:function(){var a=this.localeData()._week;return E(this.year(),a.dow,a.doy)},get:function(a){return a=z(a),this[a]()},set:function(a,b){var c;if("object"==typeof a)for(c in a)this.set(c,a[c]);else a=z(a),"function"==typeof this[a]&&this[a](b);return this},locale:function(b){var c;return b===a?this._locale._abbr:(c=vb.localeData(b),null!=c&&(this._locale=c),this)},lang:f("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(b){return b===a?this.localeData():this.locale(b)}),localeData:function(){return this._locale},_dateUtcOffset:function(){return 15*-Math.round(this._d.getTimezoneOffset()/15)}}),vb.fn.millisecond=vb.fn.milliseconds=qb("Milliseconds",!1),vb.fn.second=vb.fn.seconds=qb("Seconds",!1),vb.fn.minute=vb.fn.minutes=qb("Minutes",!1),vb.fn.hour=vb.fn.hours=qb("Hours",!0),vb.fn.date=qb("Date",!0),vb.fn.dates=f("dates accessor is deprecated. Use date instead.",qb("Date",!0)),vb.fn.year=qb("FullYear",!0),vb.fn.years=f("years accessor is deprecated. Use year instead.",qb("FullYear",!0)),vb.fn.days=vb.fn.day,vb.fn.months=vb.fn.month,vb.fn.weeks=vb.fn.week,vb.fn.isoWeeks=vb.fn.isoWeek,vb.fn.quarters=vb.fn.quarter,vb.fn.toJSON=vb.fn.toISOString,vb.fn.isUTC=vb.fn.isUtc,o(vb.duration.fn=n.prototype,{_bubble:function(){var a,b,c,d=this._milliseconds,e=this._days,f=this._months,g=this._data,h=0;g.milliseconds=d%1e3,a=q(d/1e3),g.seconds=a%60,b=q(a/60),g.minutes=b%60,c=q(b/60),g.hours=c%24,e+=q(c/24),h=q(rb(e)),e-=q(sb(h)),f+=q(e/30),e%=30,h+=q(f/12),f%=12,g.days=e,g.months=f,g.years=h},abs:function(){return this._milliseconds=Math.abs(this._milliseconds),this._days=Math.abs(this._days),this._months=Math.abs(this._months),this._data.milliseconds=Math.abs(this._data.milliseconds),this._data.seconds=Math.abs(this._data.seconds),this._data.minutes=Math.abs(this._data.minutes),this._data.hours=Math.abs(this._data.hours),this._data.months=Math.abs(this._data.months),this._data.years=Math.abs(this._data.years),this},weeks:function(){return q(this.days()/7)},valueOf:function(){return this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*C(this._months/12)
},humanize:function(a){var b=ib(this,!a,this.localeData());return a&&(b=this.localeData().pastFuture(+this,b)),this.localeData().postformat(b)},add:function(a,b){var c=vb.duration(a,b);return this._milliseconds+=c._milliseconds,this._days+=c._days,this._months+=c._months,this._bubble(),this},subtract:function(a,b){var c=vb.duration(a,b);return this._milliseconds-=c._milliseconds,this._days-=c._days,this._months-=c._months,this._bubble(),this},get:function(a){return a=z(a),this[a.toLowerCase()+"s"]()},as:function(a){var b,c;if(a=z(a),"month"===a||"year"===a)return b=this._days+this._milliseconds/864e5,c=this._months+12*rb(b),"month"===a?c:c/12;switch(b=this._days+Math.round(sb(this._months/12)),a){case"week":return b/7+this._milliseconds/6048e5;case"day":return b+this._milliseconds/864e5;case"hour":return 24*b+this._milliseconds/36e5;case"minute":return 24*b*60+this._milliseconds/6e4;case"second":return 24*b*60*60+this._milliseconds/1e3;case"millisecond":return Math.floor(24*b*60*60*1e3)+this._milliseconds;default:throw new Error("Unknown unit "+a)}},lang:vb.fn.lang,locale:vb.fn.locale,toIsoString:f("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",function(){return this.toISOString()}),toISOString:function(){var a=Math.abs(this.years()),b=Math.abs(this.months()),c=Math.abs(this.days()),d=Math.abs(this.hours()),e=Math.abs(this.minutes()),f=Math.abs(this.seconds()+this.milliseconds()/1e3);return this.asSeconds()?(this.asSeconds()<0?"-":"")+"P"+(a?a+"Y":"")+(b?b+"M":"")+(c?c+"D":"")+(d||e||f?"T":"")+(d?d+"H":"")+(e?e+"M":"")+(f?f+"S":""):"P0D"},localeData:function(){return this._locale},toJSON:function(){return this.toISOString()}}),vb.duration.fn.toString=vb.duration.fn.toISOString;for(xb in kc)c(kc,xb)&&tb(xb.toLowerCase());vb.duration.fn.asMilliseconds=function(){return this.as("ms")},vb.duration.fn.asSeconds=function(){return this.as("s")},vb.duration.fn.asMinutes=function(){return this.as("m")},vb.duration.fn.asHours=function(){return this.as("h")},vb.duration.fn.asDays=function(){return this.as("d")},vb.duration.fn.asWeeks=function(){return this.as("weeks")},vb.duration.fn.asMonths=function(){return this.as("M")},vb.duration.fn.asYears=function(){return this.as("y")},vb.locale("en",{ordinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(a){var b=a%10,c=1===C(a%100/10)?"th":1===b?"st":2===b?"nd":3===b?"rd":"th";return a+c}}),Lb?module.exports=vb:"function"==typeof define&&define.amd?(define(function(a,b,c){return c.config&&c.config()&&c.config().noGlobal===!0&&(zb.moment=wb),vb}),ub(!0)):ub()}).call(this);
/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.7.1
 */
function mdMediaFactory(e,t,n){function r(e){var t=d[e];angular.isUndefined(t)&&(t=d[e]=o(e));var n=c[t];return angular.isUndefined(n)&&(n=a(t)),n}function o(t){return e.MEDIA[t]||("("!==t.charAt(0)?"("+t+")":t)}function a(e){var t=n.matchMedia(e);return t.addListener(i),c[t.media]=!!t.matches}function i(){var e=this;t.$evalAsync(function(){c[e.media]=!!e.matches})}var d={},c={};return r}angular.module("ngMaterial",["ng","ngAnimate","ngAria","material.core","material.core.theming.palette","material.core.theming","material.components.backdrop","material.components.bottomSheet","material.components.button","material.components.card","material.components.checkbox","material.components.content","material.components.dialog","material.components.divider","material.components.icon","material.components.input","material.components.list","material.components.progressCircular","material.components.progressLinear","material.components.radioButton","material.components.sidenav","material.components.slider","material.components.sticky","material.components.subheader","material.components.swipe","material.components.switch","material.components.tabs","material.components.textField","material.components.toast","material.components.toolbar","material.components.tooltip","material.components.whiteframe"]),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.7.1
 */
function(){"use strict";function e(e,n){e.decorator("$$rAF",["$delegate",t]),n.theme("default").primaryPalette("indigo").accentPalette("pink").warnPalette("red").backgroundPalette("grey")}function t(e){return e.throttle=function(t){var n,r,o,a;return function(){n=arguments,a=this,o=t,r||(r=!0,e(function(){o.apply(a,n),r=!1}))}},e}angular.module("material.core",["material.core.theming"]).config(e),e.$inject=["$provide","$mdThemingProvider"]}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.7.1
 */
function(){"use strict";function e(e,t){function n(e){return r?"webkit"+e.charAt(0).toUpperCase()+e.substring(1):e}var r=/webkit/i.test(t.vendorPrefix);return{KEY_CODE:{ENTER:13,ESCAPE:27,SPACE:32,LEFT_ARROW:37,UP_ARROW:38,RIGHT_ARROW:39,DOWN_ARROW:40},CSS:{TRANSITIONEND:"transitionend"+(r?" webkitTransitionEnd":""),ANIMATIONEND:"animationend"+(r?" webkitAnimationEnd":""),TRANSFORM:n("transform"),TRANSITION:n("transition"),TRANSITION_DURATION:n("transitionDuration"),ANIMATION_PLAY_STATE:n("animationPlayState"),ANIMATION_DURATION:n("animationDuration"),ANIMATION_NAME:n("animationName"),ANIMATION_TIMING:n("animationTimingFunction"),ANIMATION_DIRECTION:n("animationDirection")},MEDIA:{sm:"(max-width: 600px)","gt-sm":"(min-width: 600px)",md:"(min-width: 600px) and (max-width: 960px)","gt-md":"(min-width: 960px)",lg:"(min-width: 960px) and (max-width: 1200px)","gt-lg":"(min-width: 1200px)"}}}angular.module("material.core").factory("$mdConstant",e),e.$inject=["$$rAF","$sniffer"]}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.7.1
 */
function(){function e(e,t){function n(){return[].concat(b)}function r(){return b.length}function o(e){return b.length&&e>-1&&e<b.length}function a(e){return e?o(s(e)+1):!1}function i(e){return e?o(s(e)-1):!1}function d(e){return o(e)?b[e]:null}function c(e,t){return b.filter(function(n){return n[e]===t})}function l(e,t){return e?(angular.isNumber(t)||(t=b.length),b.splice(t,0,e),s(e)):-1}function m(e){u(e)&&b.splice(s(e),1)}function s(e){return b.indexOf(e)}function u(e){return e&&s(e)>-1}function f(){return b.length?b[0]:null}function p(){return b.length?b[b.length-1]:null}function h(e,n,r,a){r=r||g;var i=s(n);if(!o(i))return null;var d=i+(e?-1:1),c=null;return o(d)?c=b[d]:t&&(c=e?p():f(),d=s(c)),null===c||d===a?null:(angular.isUndefined(a)&&(a=d),r(c)?c:h(e,c,r,a))}var g=function(){return!0};t=!!t;var b=e||[];return{items:n,count:r,inRange:o,contains:u,indexOf:s,itemAt:d,findBy:c,add:l,remove:m,first:f,last:p,next:angular.bind(null,h,!1),previous:angular.bind(null,h,!0),hasPrevious:i,hasNext:a}}angular.module("material.core").config(["$provide",function(t){t.decorator("$mdUtil",["$delegate",function(t){return t.iterator=e,t}])}])}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.7.1
 */
angular.module("material.core").factory("$mdMedia",mdMediaFactory),mdMediaFactory.$inject=["$mdConstant","$rootScope","$window"],/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.7.1
 */
function(){"use strict";var e=["0","0","0"];angular.module("material.core").factory("$mdUtil",["$document","$timeout",function(t,n){var r;return r={now:window.performance?angular.bind(window.performance,window.performance.now):Date.now,elementRect:function(e,t){var n=e[0];t=t||n.offsetParent||document.body,t=t[0]||t;var r=n.getBoundingClientRect(),o=t.getBoundingClientRect();return{left:r.left-o.left+t.scrollLeft,top:r.top-o.top+t.scrollTop,width:r.width,height:r.height}},fakeNgModel:function(){return{$fake:!0,$setViewValue:function(e){this.$viewValue=e,this.$render(e),this.$viewChangeListeners.forEach(function(e){e()})},$isEmpty:function(e){return 0===(""+e).length},$parsers:[],$formatters:[],$viewChangeListeners:[],$render:angular.noop}},debounce:function(e,t,r,o){var a;return function(){var i=r,d=Array.prototype.slice.call(arguments);n.cancel(a),a=n(function(){a=void 0,e.apply(i,d)},t||10,o)}},throttle:function(e,t){var n;return function(){var o=this,a=arguments,i=r.now();(!n||i-n>t)&&(e.apply(o,a),n=i)}},nextUid:function(){for(var t,n=e.length;n;){if(n--,t=e[n].charCodeAt(0),57==t)return e[n]="A",e.join("");if(90!=t)return e[n]=String.fromCharCode(t+1),e.join("");e[n]="0"}return e.unshift("0"),e.join("")},disconnectScope:function(e){if(e&&e.$root!==e&&!e.$$destroyed){var t=e.$parent;e.$$disconnected=!0,t.$$childHead===e&&(t.$$childHead=e.$$nextSibling),t.$$childTail===e&&(t.$$childTail=e.$$prevSibling),e.$$prevSibling&&(e.$$prevSibling.$$nextSibling=e.$$nextSibling),e.$$nextSibling&&(e.$$nextSibling.$$prevSibling=e.$$prevSibling),e.$$nextSibling=e.$$prevSibling=null}},reconnectScope:function(e){if(e&&e.$root!==e&&e.$$disconnected){var t=e,n=t.$parent;t.$$disconnected=!1,t.$$prevSibling=n.$$childTail,n.$$childHead?(n.$$childTail.$$nextSibling=t,n.$$childTail=t):n.$$childHead=n.$$childTail=t}},getClosest:function(e,t){t=t.toUpperCase();do if(e.nodeName===t)return e;while(e=e.parentNode);return null}}}]),angular.element.prototype.focus=angular.element.prototype.focus||function(){return this.length&&this[0].focus(),this},angular.element.prototype.blur=angular.element.prototype.blur||function(){return this.length&&this[0].blur(),this}}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.7.1
 */
function(){"use strict";function e(e,t,n){function r(e,n,r){var o=e[0];o.hasAttribute(n)||i(o,n)||(r=angular.isString(r)&&r.trim()||"",r.length?e.attr(n,r):t.warn('ARIA: Attribute "',n,'", required for accessibility, is missing on node:',o))}function o(t,n,o){e(function(){r(t,n,o())})}function a(e,t){o(e,t,function(){return e.text().trim()})}function i(e,t){function r(e){var t=e.currentStyle?e.currentStyle:n.getComputedStyle(e);return"none"===t.display}var o=e.hasChildNodes(),a=!1;if(o)for(var i=e.childNodes,d=0;d<i.length;d++){var c=i[d];1===c.nodeType&&c.hasAttribute(t)&&(r(c)||(a=!0))}return a}return{expect:r,expectAsync:o,expectWithText:a}}angular.module("material.core").service("$mdAria",e),e.$inject=["$$rAF","$log","$window"]}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.7.1
 */
function(){"use strict";function e(e,t,n,r,o,a){this.compile=function(i){var d=i.templateUrl,c=i.template||"",l=i.controller,m=i.controllerAs,s=i.resolve||{},u=i.locals||{},f=i.transformTemplate||angular.identity,p=i.bindToController;return angular.forEach(s,function(e,t){s[t]=angular.isString(e)?n.get(e):n.invoke(e)}),angular.extend(s,u),s.$template=d?t.get(d,{cache:a}).then(function(e){return e.data}):e.when(c),e.all(s).then(function(e){var t=f(e.$template),n=angular.element("<div>").html(t.trim()).contents(),a=r(n);return{locals:e,element:n,link:function(t){if(e.$scope=t,l){var r=o(l,e);p&&angular.extend(r,e),n.data("$ngControllerController",r),n.children().data("$ngControllerController",r),m&&(t[m]=r)}return a(t)}}})}}angular.module("material.core").service("$mdCompiler",e),e.$inject=["$q","$http","$injector","$compile","$controller","$templateCache"]}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.7.1
 */
function(){"use strict";function e(e,t){var n;for(var r in c)n=c[r],"start"===e&&n.cancel(),n[e](t,g)}function t(t){if(!g){var n=+Date.now();b&&!o(t,b)&&n-b.endTime<1500||(g=d(t),e("start",t))}}function n(t){g&&o(t,g)&&(i(t,g),e("move",t))}function r(t){g&&o(t,g)&&(i(t,g),g.endTime=+Date.now(),e("end",t),b=g,g=null)}function o(e,t){return e&&t&&e.type.charAt(0)===t.type}function a(e){return e=e.originalEvent||e,e.touches&&e.touches[0]||e.changedTouches&&e.changedTouches[0]||e}function i(e,t){var n=a(e),r=t.x=n.pageX,o=t.y=n.pageY;t.distanceX=r-t.startX,t.distanceY=o-t.startY,t.distance=Math.sqrt(t.distanceX*t.distanceX+t.distanceY*t.distanceY),t.directionX=t.distanceX>0?"right":t.distanceX<0?"left":"",t.directionY=t.distanceY>0?"up":t.distanceY<0?"down":"",t.duration=+Date.now()-t.startTime,t.velocityX=t.distanceX/t.duration,t.velocityY=t.distanceY/t.duration}function d(e){var t=a(e),n={startTime:+Date.now(),target:e.target,type:e.type.charAt(0)};return n.startX=n.x=t.pageX,n.startY=n.y=t.pageY,n}var c,l="mousedown touchstart pointerdown",m="mousemove touchmove pointermove",s="mouseup mouseleave touchend touchcancel pointerup pointercancel";document.contains||(document.contains=function(e){return document.body.contains(e)});var u=navigator.userAgent||navigator.vendor||window.opera,f=u.match(/iPad/i)||u.match(/iPhone/i)||u.match(/iPod/i),p=u.match(/Android/i),h=f||p;h&&document.addEventListener("click",function(e){var t=0===e.clientX&&0===e.clientY;t||e.$material||(e.preventDefault(),e.stopPropagation())},!0),angular.element(document).on(l,t).on(m,n).on(s,r).on("$$mdGestureReset",function(){b=g=null});var g,b;angular.module("material.core").run(["$mdGesture",function(){}]).factory("$mdGesture",["$$MdGestureHandler","$$rAF","$timeout",function(e,t,n){function r(t,n){var r=new e(t);return angular.extend(r,n),c[t]=r,a}function o(e,t,n){var r=c[t.replace(/^\$md./,"")];if(!r)throw new Error("Failed to register element with handler "+t+". Available handlers: "+Object.keys(c).join(", "));return r.registerElement(e,n)}c={},h&&r("click",{options:{maxDistance:6},onEnd:function(e,t){t.distance<this.state.options.maxDistance&&this.dispatchEvent(e,"click",null,e)}}),r("press",{onStart:function(e){this.dispatchEvent(e,"$md.pressdown")},onEnd:function(e){this.dispatchEvent(e,"$md.pressup")}}),r("hold",{options:{maxDistance:6,delay:500},onCancel:function(){n.cancel(this.state.timeout)},onStart:function(e,t){return this.state.registeredParent?(this.state.pos={x:t.x,y:t.y},this.state.timeout=n(angular.bind(this,function(){this.dispatchEvent(e,"$md.hold"),this.cancel()}),this.state.options.delay,!1),void 0):this.cancel()},onMove:function(e,t){e.preventDefault();var n=this.state.pos.x-t.x,r=this.state.pos.y-t.y;Math.sqrt(n*n+r*r)>this.options.maxDistance&&this.cancel()},onEnd:function(){this.onCancel()}}),r("drag",{options:{minDistance:6,horizontal:!0},onStart:function(){this.state.registeredParent||this.cancel()},onMove:function(e,t){var n,r;e.preventDefault(),this.state.dragPointer?this.dispatchDragMove(e):(this.state.options.horizontal?(n=Math.abs(t.distanceX)>this.state.options.minDistance,r=Math.abs(t.distanceY)>1.5*this.state.options.minDistance):(n=Math.abs(t.distanceY)>this.state.options.minDistance,r=Math.abs(t.distanceX)>1.5*this.state.options.minDistance),n?(this.state.dragPointer=d(e),i(e,this.state.dragPointer),this.dispatchEvent(e,"$md.dragstart",this.state.dragPointer)):r&&this.cancel())},dispatchDragMove:t.throttle(function(e){this.state.isRunning&&(i(e,this.state.dragPointer),this.dispatchEvent(e,"$md.drag",this.state.dragPointer))}),onEnd:function(e){this.state.dragPointer&&(i(e,this.state.dragPointer),this.dispatchEvent(e,"$md.dragend",this.state.dragPointer))}}),r("swipe",{options:{minVelocity:.65,minDistance:10},onEnd:function(e,t){if(Math.abs(t.velocityX)>this.state.options.minVelocity&&Math.abs(t.distanceX)>this.state.options.minDistance){var n="left"==t.directionX?"$md.swipeleft":"$md.swiperight";this.dispatchEvent(e,n)}}});var a;return a={handler:r,register:o}}]).factory("$$MdGestureHandler",["$$rAF",function(){function e(e){this.name=e,this.state={}}function t(e,t,n,r){n=n||g;var o;"click"===t?(o=document.createEvent("MouseEvents"),o.initMouseEvent("click",!0,!0,window,r.detail,r.screenX,r.screenY,r.clientX,r.clientY,r.ctrlKey,r.altKey,r.shiftKey,r.metaKey,r.button,r.relatedTarget||null)):(o=document.createEvent("CustomEvent"),o.initCustomEvent(t,!0,!0,{})),o.$material=!0,o.pointer=n,o.srcEvent=e,n.target.dispatchEvent(o)}e.prototype={onStart:angular.noop,onMove:angular.noop,onEnd:angular.noop,onCancel:angular.noop,options:{},dispatchEvent:t,start:function(e,t){if(!this.state.isRunning){var n=this.getNearestParent(e.target),r=n&&n.$mdGesture[this.name]||{};this.state={isRunning:!0,options:angular.extend({},this.options,r),registeredParent:n},this.onStart(e,t)}},move:function(e,t){this.state.isRunning&&this.onMove(e,t)},end:function(e,t){this.state.isRunning&&(this.onEnd(e,t),this.state.isRunning=!1)},cancel:function(e,t){this.onCancel(e,t),this.state={}},getNearestParent:function(e){for(var t=e;t;){if((t.$mdGesture||{})[this.name])return t;t=t.parentNode}},registerElement:function(e,t){function n(){delete e[0].$mdGesture[r.name],e.off("$destroy",n)}var r=this;return e[0].$mdGesture=e[0].$mdGesture||{},e[0].$mdGesture[this.name]=t||{},e.on("$destroy",n),n}};return e}])}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.7.1
 */
function(){"use strict";function e(){function e(e){function t(e){return a.optionsFactory=e.options,a.methods=(e.methods||[]).concat(o),i}function n(t,n){if(n=n||{},n.methods=n.methods||[],n.options=n.options||function(){return{}},/^cancel|hide|show$/.test(t))throw new Error("Preset '"+t+"' in "+e+" is reserved!");if(n.methods.indexOf("_options")>-1)throw new Error("Method '_options' in "+e+" is reserved!");return a.presets[t]={methods:n.methods.concat(o),optionsFactory:n.options,argOption:n.argOption},i}function r(t,n,r){function o(e){return e&&e._options&&(e=e._options),l.show(angular.extend({},c,e))}function i(t,n){var o={};return o[e]=m,r.invoke(t||function(){return n},{},o)}var d,c,l=t(),m={hide:l.hide,cancel:l.cancel,show:o};return d=a.methods||[],c=i(a.optionsFactory,{}),angular.forEach(a.presets,function(e,t){function n(e){this._options=angular.extend({},r,e)}var r=i(e.optionsFactory,{}),o=(e.methods||[]).concat(d);if(angular.extend(r,{$type:t}),angular.forEach(o,function(e){n.prototype[e]=function(t){return this._options[e]=t,this}}),e.argOption){var a="show"+t.charAt(0).toUpperCase()+t.slice(1);m[a]=function(e){var n=m[t](e);return m.show(n)}}m[t]=function(t){return arguments.length&&e.argOption&&!angular.isObject(t)&&!angular.isArray(t)?(new n)[e.argOption](t):new n(t)}}),m}var o=["onHide","onShow","onRemove"],a={presets:{}},i={setDefaults:t,addPreset:n,$get:r};return i.addPreset("build",{methods:["controller","controllerAs","resolve","template","templateUrl","themable","transformTemplate","parent"]}),r.$inject=["$$interimElement","$animate","$injector"],i}function t(e,t,n,r,o,a,i,d,c){function l(e){return e&&angular.isString(e)?e.replace(/\{\{/g,m).replace(/}}/g,s):e}var m=i.startSymbol(),s=i.endSymbol(),u="{{"===m&&"}}"===s,f=u?angular.identity:l;return function(){function i(e){p.length&&u.cancel();var t=new s(e);return p.push(t),t.show().then(function(){return t.deferred.promise})}function l(e){var n=p.shift();return n&&n.remove().then(function(){n.deferred.resolve(e)}),n?n.deferred.promise:t.when(e)}function m(e){var n=p.shift();return n&&n.remove().then(function(){n.deferred.reject(e)}),n?n.deferred.promise:t.reject(e)}function s(i){var l,m,s;return i=i||{},i=angular.extend({scope:i.scope||n.$new(i.isolateScope),onShow:function(e,t,n){return a.enter(t,n.parent)},onRemove:function(e,n){return n&&a.leave(n)||t.when()}},i),i.template&&(i.template=f(i.template)),l={options:i,deferred:t.defer(),show:function(){return d.compile(i).then(function(n){function a(){i.hideDelay&&(m=r(u.cancel,i.hideDelay))}angular.extend(n.locals,l.options),angular.isString(i.parent)?i.parent=angular.element(e[0].querySelector(i.parent)):i.parent||(i.parent=o.find("body"),i.parent.length||(i.parent=o)),s=n.link(i.scope),i.themable&&c(s);var d=i.onShow(i.scope,s,i);return t.when(d).then(function(){(i.onComplete||angular.noop)(i.scope,s,i),a()})})},cancelTimeout:function(){m&&(r.cancel(m),m=void 0)},remove:function(){l.cancelTimeout();var e=i.onRemove(i.scope,s,i);return t.when(e).then(function(){i.scope.$destroy()})}}}var u,p=[];return u={show:i,hide:l,cancel:m}}}return e.$get=t,t.$inject=["$document","$q","$rootScope","$timeout","$rootElement","$animate","$interpolate","$mdCompiler","$mdTheming"],e}angular.module("material.core").provider("$$interimElement",e)}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.7.1
 */
function(){"use strict";function e(e,t){function n(e){return e&&""!==e}var r,o=[],a={};return r={notFoundError:function(t){e.error("No instance found for handle",t)},getInstances:function(){return o},get:function(e){if(!n(e))return null;var t,r,a;for(t=0,r=o.length;r>t;t++)if(a=o[t],a.$$mdHandle===e)return a;return null},register:function(e,t){function n(){var t=o.indexOf(e);-1!==t&&o.splice(t,1)}function r(){var n=a[t];n&&(n.resolve(e),delete a[t])}return t?(e.$$mdHandle=t,o.push(e),r(),n):angular.noop},when:function(e){if(n(e)){var o=t.defer(),i=r.get(e);return i?o.resolve(i):a[e]=o,o.promise}return t.reject("Invalid `md-component-id` value.")}}}angular.module("material.core").factory("$mdComponentRegistry",e),e.$inject=["$log","$q"]}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.7.1
 */
function(){"use strict";function e(e){return{controller:angular.noop,link:function(t,n,r){r.hasOwnProperty("mdInkRippleCheckbox")?e.attachCheckboxBehavior(t,n):e.attachButtonBehavior(t,n)}}}function t(e,t){function n(e,t,n){return a(e,t,angular.extend({isFAB:t.hasClass("md-fab"),isMenuItem:t.hasClass("md-menu-item"),center:!1,dimBackground:!0},n))}function r(e,t,n){return a(e,t,angular.extend({center:!0,dimBackground:!1,fitRipple:!0},n))}function o(e,t,n){return a(e,t,angular.extend({center:!1,dimBackground:!0,outline:!0},n))}function a(n,r,o){function a(){var e=r.data("$mdRippleContainer");return e?e:(e=angular.element('<div class="md-ripple-container">'),r.append(e),r.data("$mdRippleContainer",e),e)}function i(e){function t(e){var t="#"===e.charAt(0)?e.substr(1):e,n=t.length/3,r=t.substr(0,n),o=t.substr(n,n),a=t.substr(2*n);return 1===n&&(r+=r,o+=o,a+=a),"rgba("+parseInt(r,16)+","+parseInt(o,16)+","+parseInt(a,16)+",0.1)"}function n(e){return e.replace(")",", 0.1)").replace("(","a(")}if(e)return 0===e.indexOf("rgba")?e.replace(/\d?\.?\d*\s*\)\s*$/,"0.1)"):0===e.indexOf("rgb")?n(e):0===e.indexOf("#")?t(e):void 0}function d(e,n){g.splice(g.indexOf(e),1),0===g.length&&a().css({backgroundColor:""}),t(function(){e.remove()},n,!1)}function c(e){var t=g.indexOf(e),n=b[t]||{},r=g.length>1?!1:v,a=g.length>1?!1:$;r||n.animating||a?e.addClass("md-ripple-visible"):e&&(e.removeClass("md-ripple-visible"),o.outline&&e.css({width:f+"px",height:f+"px",marginLeft:-1*f+"px",marginTop:-1*f+"px"}),d(e,o.outline?450:650))}function l(n,d){function l(e){var t=angular.element('<div class="md-ripple" data-counter="'+h++ +'">');return g.unshift(t),b.unshift({animating:!0}),u.append(t),e&&t.css(e),t}function m(e,t){var n,r,a,i=u.prop("offsetWidth"),d=u.prop("offsetHeight");return o.isMenuItem?r=Math.sqrt(Math.pow(i,2)+Math.pow(d,2)):o.outline?(a=M.getBoundingClientRect(),e-=a.left,t-=a.top,i=Math.max(e,i-e),d=Math.max(t,d-t),r=2*Math.sqrt(Math.pow(i,2)+Math.pow(d,2))):(n=o.isFAB?1.1:.8,r=Math.sqrt(Math.pow(i,2)+Math.pow(d,2))*n,o.fitRipple&&(r=Math.min(d,i,r))),r}function s(e,t,n){function r(e){return e.replace("rgba","rgb").replace(/,[^\)\,]+\)/,")")}var a,i={backgroundColor:r(T),borderColor:r(T),width:e+"px",height:e+"px"};return o.outline?(i.width=0,i.height=0):i.marginLeft=i.marginTop=e*-.5+"px",o.center?i.left=i.top="50%":(a=M.getBoundingClientRect(),i.left=Math.round((t-a.left)/u.prop("offsetWidth")*100)+"%",i.top=Math.round((n-a.top)/u.prop("offsetHeight")*100)+"%"),i}T=i(r.attr("md-ink-ripple"))||i(e.getComputedStyle(o.colorElement[0]).color||"rgb(0, 0, 0)");var u=a(),p=m(n,d),E=s(p,n,d),v=l(E),$=g.indexOf(v),A=b[$]||{};return f=p,A.animating=!0,t(function(){o.dimBackground&&u.css({backgroundColor:T}),v.addClass("md-ripple-placed md-ripple-scaled"),o.outline?v.css({borderWidth:.5*p+"px",marginLeft:p*-.5+"px",marginTop:p*-.5+"px"}):v.css({left:"50%",top:"50%"}),c(v),t(function(){A.animating=!1,c(v)},o.outline?450:225,!1)},0,!1),v}function m(e){if(u()){{l(e.pointer.x,e.pointer.y)}$=!0}}function s(){$=!1;var e=g[g.length-1];t(function(){c(e)},0,!1)}function u(){function e(e){return e&&e.hasAttribute&&e.hasAttribute("disabled")}var t=M.parentNode,n=t&&t.parentNode,r=n&&n.parentNode;return!(e(M)||e(t)||e(n)||e(r))}if(r.controller("mdNoInk"))return angular.noop;o=angular.extend({colorElement:r,mousedown:!0,hover:!0,focus:!0,center:!1,mousedownPauseTime:150,dimBackground:!1,outline:!1,isFAB:!1,isMenuItem:!1,fitRipple:!1},o);var f,p=r.controller("mdInkRipple")||{},h=0,g=[],b=[],E=r.attr("md-highlight"),v=!1,$=!1,M=r[0],A=r.attr("md-ripple-size"),T=i(r.attr("md-ink-ripple"))||i(e.getComputedStyle(o.colorElement[0]).color||"rgb(0, 0, 0)");switch(A){case"full":o.isFAB=!0;break;case"partial":o.isFAB=!1}return o.mousedown&&r.on("$md.pressdown",m).on("$md.pressup",s),p.createRipple=l,E&&n.$watch(E,function(e){v=e,v&&!g.length&&t(function(){l(0,0)},0,!1),angular.forEach(g,c)}),function(){r.off("$md.pressdown",m).off("$md.pressup",s),a().remove()}}return{attachButtonBehavior:n,attachCheckboxBehavior:r,attachTabBehavior:o,attach:a}}function n(){return function(){return{controller:angular.noop}}}angular.module("material.core").factory("$mdInkRipple",t).directive("mdInkRipple",e).directive("mdNoInk",n()).directive("mdNoBar",n()).directive("mdNoStretch",n()),e.$inject=["$mdInkRipple"],t.$inject=["$window","$timeout"]}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.7.1
 */
function(){"use strict";angular.module("material.core.theming.palette",[]).constant("$mdColorPalette",{red:{50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000",contrastDefaultColor:"light",contrastDarkColors:"50 100 200 300 400 A100",contrastStrongLightColors:"500 600 700 A200 A400 A700"},pink:{50:"#fce4ec",100:"#f8bbd0",200:"#f48fb1",300:"#f06292",400:"#ec407a",500:"#e91e63",600:"#d81b60",700:"#c2185b",800:"#ad1457",900:"#880e4f",A100:"#ff80ab",A200:"#ff4081",A400:"#f50057",A700:"#c51162",contrastDefaultColor:"light",contrastDarkColors:"50 100 200 300 400 A100",contrastStrongLightColors:"500 600 A200 A400 A700"},purple:{50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff",contrastDefaultColor:"light",contrastDarkColors:"50 100 200 A100",contrastStrongLightColors:"300 400 A200 A400 A700"},"deep-purple":{50:"#ede7f6",100:"#d1c4e9",200:"#b39ddb",300:"#9575cd",400:"#7e57c2",500:"#673ab7",600:"#5e35b1",700:"#512da8",800:"#4527a0",900:"#311b92",A100:"#b388ff",A200:"#7c4dff",A400:"#651fff",A700:"#6200ea",contrastDefaultColor:"light",contrastDarkColors:"50 100 200 A100",contrastStrongLightColors:"300 400 A200"},indigo:{50:"#e8eaf6",100:"#c5cae9",200:"#9fa8da",300:"#7986cb",400:"#5c6bc0",500:"#3f51b5",600:"#3949ab",700:"#303f9f",800:"#283593",900:"#1a237e",A100:"#8c9eff",A200:"#536dfe",A400:"#3d5afe",A700:"#304ffe",contrastDefaultColor:"light",contrastDarkColors:"50 100 200 A100",contrastStrongLightColors:"300 400 A200 A400"},blue:{50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff",contrastDefaultColor:"light",contrastDarkColors:"100 200 300 400 A100",contrastStrongLightColors:"500 600 700 A200 A400 A700"},"light-blue":{50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea",contrastDefaultColor:"dark",contrastLightColors:"500 600 700 800 900 A700",contrastStrongLightColors:"500 600 700 800 A700"},cyan:{50:"#e0f7fa",100:"#b2ebf2",200:"#80deea",300:"#4dd0e1",400:"#26c6da",500:"#00bcd4",600:"#00acc1",700:"#0097a7",800:"#00838f",900:"#006064",A100:"#84ffff",A200:"#18ffff",A400:"#00e5ff",A700:"#00b8d4",contrastDefaultColor:"dark",contrastLightColors:"500 600 700 800 900",contrastStrongLightColors:"500 600 700 800"},teal:{50:"#e0f2f1",100:"#b2dfdb",200:"#80cbc4",300:"#4db6ac",400:"#26a69a",500:"#009688",600:"#00897b",700:"#00796b",800:"#00695c",900:"#004d40",A100:"#a7ffeb",A200:"#64ffda",A400:"#1de9b6",A700:"#00bfa5",contrastDefaultColor:"dark",contrastLightColors:"500 600 700 800 900",contrastStrongLightColors:"500 600 700"},green:{50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853",contrastDefaultColor:"dark",contrastLightColors:"500 600 700 800 900",contrastStrongLightColors:"500 600 700"},"light-green":{50:"#f1f8e9",100:"#dcedc8",200:"#c5e1a5",300:"#aed581",400:"#9ccc65",500:"#8bc34a",600:"#7cb342",700:"#689f38",800:"#558b2f",900:"#33691e",A100:"#ccff90",A200:"#b2ff59",A400:"#76ff03",A700:"#64dd17",contrastDefaultColor:"dark",contrastLightColors:"800 900",contrastStrongLightColors:"800 900"},lime:{50:"#f9fbe7",100:"#f0f4c3",200:"#e6ee9c",300:"#dce775",400:"#d4e157",500:"#cddc39",600:"#c0ca33",700:"#afb42b",800:"#9e9d24",900:"#827717",A100:"#f4ff81",A200:"#eeff41",A400:"#c6ff00",A700:"#aeea00",contrastDefaultColor:"dark",contrastLightColors:"900",contrastStrongLightColors:"900"},yellow:{50:"#fffde7",100:"#fff9c4",200:"#fff59d",300:"#fff176",400:"#ffee58",500:"#ffeb3b",600:"#fdd835",700:"#fbc02d",800:"#f9a825",900:"#f57f17",A100:"#ffff8d",A200:"#ffff00",A400:"#ffea00",A700:"#ffd600",contrastDefaultColor:"dark"},amber:{50:"#fff8e1",100:"#ffecb3",200:"#ffe082",300:"#ffd54f",400:"#ffca28",500:"#ffc107",600:"#ffb300",700:"#ffa000",800:"#ff8f00",900:"#ff6f00",A100:"#ffe57f",A200:"#ffd740",A400:"#ffc400",A700:"#ffab00",contrastDefaultColor:"dark"},orange:{50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00",contrastDefaultColor:"dark",contrastLightColors:"800 900",contrastStrongLightColors:"800 900"},"deep-orange":{50:"#fbe9e7",100:"#ffccbc",200:"#ffab91",300:"#ff8a65",400:"#ff7043",500:"#ff5722",600:"#f4511e",700:"#e64a19",800:"#d84315",900:"#bf360c",A100:"#ff9e80",A200:"#ff6e40",A400:"#ff3d00",A700:"#dd2c00",contrastDefaultColor:"light",contrastDarkColors:"50 100 200 300 400 A100 A200",contrastStrongLightColors:"500 600 700 800 900 A400 A700"},brown:{50:"#efebe9",100:"#d7ccc8",200:"#bcaaa4",300:"#a1887f",400:"#8d6e63",500:"#795548",600:"#6d4c41",700:"#5d4037",800:"#4e342e",900:"#3e2723",A100:"#d7ccc8",A200:"#bcaaa4",A400:"#8d6e63",A700:"#5d4037",contrastDefaultColor:"light",contrastDarkColors:"50 100 200",contrastStrongLightColors:"300 400"},grey:{0:"#ffffff",50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",1000:"#000000",A100:"#ffffff",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161",contrastDefaultColor:"dark",contrastLightColors:"600 700 800 900"},"blue-grey":{50:"#eceff1",100:"#cfd8dc",200:"#b0bec5",300:"#90a4ae",400:"#78909c",500:"#607d8b",600:"#546e7a",700:"#455a64",800:"#37474f",900:"#263238",A100:"#cfd8dc",A200:"#b0bec5",A400:"#78909c",A700:"#455a64",contrastDefaultColor:"light",contrastDarkColors:"50 100 200 300",contrastStrongLightColors:"400 500"}})}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.7.1
 */
function(){"use strict";function e(e){function t(e,t){return t=t||{},c[e]=o(e,t),m}function n(e,t){return o(e,angular.extend({},c[e]||{},t))}function o(e,t){var n=T.filter(function(e){return!t[e]});if(n.length)throw new Error("Missing colors %1 in palette %2!".replace("%1",n.join(", ")).replace("%2",e));return t}function a(e,t){if(t=t||"default",l[e])return l[e];var n="string"==typeof t?l[t]:t,r=new i(e);return n&&angular.forEach(n.colors,function(e,t){r.colors[t]={name:e.name,hues:angular.extend({},e.hues)}}),l[e]=r,r}function i(e){function t(e){if(e=0===arguments.length?!0:!!e,e!==n.isDark){n.isDark=e,n.foregroundPalette=n.isDark?f:u,n.foregroundShadow=n.isDark?p:h;var t=n.isDark?A:M,r=n.isDark?M:A;return angular.forEach(t,function(e,t){var o=n.colors[t],a=r[t];if(o)for(var i in o.hues)o.hues[i]===a[i]&&(o.hues[i]=e[i])}),n}}var n=this;n.name=e,n.colors={},n.dark=t,t(!1),v.forEach(function(e){var t=(n.isDark?A:M)[e];n[e+"Palette"]=function(r,o){var a=n.colors[e]={name:r,hues:angular.extend({},t,o)};return Object.keys(a.hues).forEach(function(e){if(!t[e])throw new Error("Invalid hue name '%1' in theme %2's %3 color %4. Available hue names: %4".replace("%1",e).replace("%2",n.name).replace("%3",r).replace("%4",Object.keys(t).join(", ")))}),Object.keys(a.hues).map(function(e){return a.hues[e]}).forEach(function(t){if(-1==T.indexOf(t))throw new Error("Invalid hue value '%1' in theme %2's %3 color %4. Available hue values: %5".replace("%1",t).replace("%2",n.name).replace("%3",e).replace("%4",r).replace("%5",T.join(", ")))}),n},n[e+"Color"]=function(){var t=Array.prototype.slice.call(arguments);return console.warn("$mdThemingProviderTheme."+e+"Color() has been depricated. Use $mdThemingProviderTheme."+e+"Palette() instead."),n[e+"Palette"].apply(n,t)}})}function s(e,t){function n(e){return void 0===e||""===e?!0:void 0!==l[e]}function r(t,n){void 0===n&&(n=t,t=void 0),void 0===t&&(t=e),r.inherit(n,n)}return r.inherit=function(r,o){function a(e){n(e)||t.warn("Attempted to use unregistered theme '"+e+"'. Register it with $mdThemingProvider.theme().");var o=r.data("$mdThemeName");o&&r.removeClass("md-"+o+"-theme"),r.addClass("md-"+e+"-theme"),r.data("$mdThemeName",e)}var i=o.controller("mdTheme"),d=r.attr("md-theme-watch");if((b||angular.isDefined(d))&&"false"!=d){var c=e.$watch(function(){return i&&i.$mdTheme||g},a);r.on("$destroy",c)}else{var l=i&&i.$mdTheme||g;a(l)}},r.registered=n,r}c={},l={};var g="default",b=!1;return angular.extend(c,e),s.$inject=["$rootScope","$log"],m={definePalette:t,extendPalette:n,theme:a,setDefaultTheme:function(e){g=e},alwaysWatchTheme:function(e){b=e},$get:s,_LIGHT_DEFAULT_HUES:M,_DARK_DEFAULT_HUES:A,_PALETTES:c,_THEMES:l,_parseRules:r,_rgba:d}}function t(e,t,n){return{priority:100,link:{pre:function(r,o,a){var i={$setTheme:function(t){e.registered(t)||n.warn("attempted to use unregistered theme '"+t+"'"),i.$mdTheme=t}};o.data("$mdThemeController",i),i.$setTheme(t(a.mdTheme)(r)),a.$observe("mdTheme",i.$setTheme)}}}}function n(e){return e}function r(e,t,n){a(e,t),n=n.replace(/THEME_NAME/g,e.name);var r=[],o=e.colors[t],i=new RegExp(".md-"+e.name+"-theme","g"),l=new RegExp("('|\")?{{\\s*("+t+")-(color|contrast)-?(\\d\\.?\\d*)?\\s*}}(\"|')?","g"),m=/'?"?\{\{\s*([a-zA-Z]+)-(A?\d+|hue\-[0-3]|shadow)-?(\d\.?\d*)?\s*\}\}'?"?/g,s=c[o.name];return n=n.replace(m,function(t,n,r,o){return"foreground"===n?"shadow"==r?e.foregroundShadow:e.foregroundPalette[r]||e.foregroundPalette["1"]:(0===r.indexOf("hue")&&(r=e.colors[n].hues[r]),d((c[e.colors[n].name][r]||"").value,o))}),angular.forEach(o.hues,function(t,o){var a=n.replace(l,function(e,n,r,o,a){return d(s[t]["color"===o?"value":"contrast"],a)});"default"!==o&&(a=a.replace(i,".md-"+e.name+"-theme.md-"+o)),r.push(a)}),r.join("")}function o(e){function t(e){var t=e.contrastDefaultColor,n=e.contrastLightColors||[],r=e.contrastStrongLightColors||[],o=e.contrastDarkColors||[];"string"==typeof n&&(n=n.split(" ")),"string"==typeof r&&(r=r.split(" ")),"string"==typeof o&&(o=o.split(" ")),delete e.contrastDefaultColor,delete e.contrastLightColors,delete e.contrastStrongLightColors,delete e.contrastDarkColors,angular.forEach(e,function(a,d){function c(){return"light"===t?o.indexOf(d)>-1?g:r.indexOf(d)>-1?E:b:n.indexOf(d)>-1?r.indexOf(d)>-1?E:b:g}if(!angular.isObject(a)){var l=i(a);if(!l)throw new Error("Color %1, in palette %2's hue %3, is invalid. Hex or rgb(a) color expected.".replace("%1",a).replace("%2",e.name).replace("%3",d));e[d]={value:l,contrast:c()}}})}var n=e.has("$MD_THEME_CSS")?e.get("$MD_THEME_CSS"):"";angular.forEach(c,t);var o=n.split(/\}(?!(\}|'|"|;))/).filter(function(e){return e&&e.length}).map(function(e){return e.trim()+"}"}),a={};v.forEach(function(e){a[e]=""});var d=new RegExp("md-("+v.join("|")+")","g");o.forEach(function(e){for(var t,n=(e.match(d),0);t=v[n];n++)if(e.indexOf(".md-"+t)>-1)return a[t]+=e;for(n=0;t=v[n];n++)if(e.indexOf(t)>-1)return a[t]+=e;return a[$]+=e});var m="";if(angular.forEach(l,function(e){v.forEach(function(t){m+=r(e,t,a[t]+"")}),e.colors.primary.name==e.colors.accent.name&&console.warn("$mdThemingProvider: Using the same palette for primary andaccent. This violates the material design spec.")}),!s){var u=document.createElement("style");u.innerHTML=m;var f=document.getElementsByTagName("head")[0];f.insertBefore(u,f.firstElementChild),s=!0}}function a(e,t){if(!c[(e.colors[t]||{}).name])throw new Error("You supplied an invalid color palette for theme %1's %2 palette. Available palettes: %3".replace("%1",e.name).replace("%2",t).replace("%3",Object.keys(c).join(", ")))}function i(e){if(angular.isArray(e)&&3==e.length)return e;if(/^rgb/.test(e))return e.replace(/(^\s*rgba?\(|\)\s*$)/g,"").split(",").map(function(e,t){return 3==t?parseFloat(e,10):parseInt(e,10)});if("#"==e.charAt(0)&&(e=e.substring(1)),/^([a-fA-F0-9]{3}){1,2}$/g.test(e)){var t=e.length/3,n=e.substr(0,t),r=e.substr(t,t),o=e.substr(2*t);return 1===t&&(n+=n,r+=r,o+=o),[parseInt(n,16),parseInt(r,16),parseInt(o,16)]}}function d(e,t){return 4==e.length&&(e=angular.copy(e),t?e.pop():t=e.pop()),t&&("number"==typeof t||"string"==typeof t&&t.length)?"rgba("+e.join(",")+","+t+")":"rgb("+e.join(",")+")"}angular.module("material.core.theming",["material.core.theming.palette"]).directive("mdTheme",t).directive("mdThemable",n).provider("$mdTheming",e).run(o);var c,l,m,s,u={name:"dark",1:"rgba(0,0,0,0.87)",2:"rgba(0,0,0,0.54)",3:"rgba(0,0,0,0.26)",4:"rgba(0,0,0,0.12)"},f={name:"light",1:"rgba(255,255,255,1.0)",2:"rgba(255,255,255,0.7)",3:"rgba(255,255,255,0.3)",4:"rgba(255,255,255,0.12)"},p="1px 1px 0px rgba(0,0,0,0.4), -1px -1px 0px rgba(0,0,0,0.4)",h="",g=i("rgba(0,0,0,0.87)"),b=i("rgba(255,255,255,0.87"),E=i("rgb(255,255,255)"),v=["primary","accent","warn","background"],$="primary",M={accent:{"default":"A200","hue-1":"A100","hue-2":"A400","hue-3":"A700"}},A={background:{"default":"500","hue-1":"300","hue-2":"600","hue-3":"800"}};v.forEach(function(e){var t={"default":"500","hue-1":"300","hue-2":"800","hue-3":"A100"};M[e]||(M[e]=t),A[e]||(A[e]=t)});var T=["50","100","200","300","400","500","600","700","800","900","A100","A200","A400","A700"];e.$inject=["$mdColorPalette"],t.$inject=["$mdTheming","$interpolate","$log"],n.$inject=["$mdTheming"],o.$inject=["$injector"]}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.7.1
 */
function(){"use strict";function e(e){return e}angular.module("material.components.backdrop",["material.core"]).directive("mdBackdrop",e),e.$inject=["$mdTheming"]}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.7.1
 */
function(){"use strict";function e(){return{restrict:"E"}}function t(e){function t(e,t,o,a,i,d,c,l,m,s){function u(n,r,a){h=i('<md-backdrop class="md-opaque md-bottom-sheet-backdrop">')(n),h.on("click",function(){o(c.cancel)}),d.inherit(h,a.parent),e.enter(h,a.parent,null);var m=new p(r,a.parent);return a.bottomSheet=m,a.targetEvent&&angular.element(a.targetEvent.target).blur(),d.inherit(m.element,a.parent),a.disableParentScroll&&(a.lastOverflow=a.parent.css("overflow"),a.parent.css("overflow","hidden")),e.enter(m.element,a.parent).then(function(){var e=angular.element(r[0].querySelector("button")||r[0].querySelector("a")||r[0].querySelector("[ng-click]"));e.focus(),a.escapeToClose&&(a.rootElementKeyupCallback=function(e){e.keyCode===t.KEY_CODE.ESCAPE&&o(c.cancel)},l.on("keyup",a.rootElementKeyupCallback))})}function f(t,n,r){var o=r.bottomSheet;return e.leave(h),e.leave(o.element).then(function(){r.disableParentScroll&&(r.parent.css("overflow",r.lastOverflow),delete r.lastOverflow),o.cleanup(),r.targetEvent&&angular.element(r.targetEvent.target).focus()})}function p(e,a){function i(){e.css(t.CSS.TRANSITION_DURATION,"0ms")}function d(n){var o=n.pointer.distanceY;5>o&&(o=Math.max(-r,o/2)),e.css(t.CSS.TRANSFORM,"translate3d(0,"+(r+o)+"px,0)")}function l(r){if(r.pointer.distanceY>0&&(r.pointer.distanceY>20||Math.abs(r.pointer.velocityY)>n)){var a=e.prop("offsetHeight")-r.pointer.distanceY,i=Math.min(a/r.pointer.velocityY*.75,500);e.css(t.CSS.TRANSITION_DURATION,i+"ms"),o(c.cancel)}else e.css(t.CSS.TRANSITION_DURATION,""),e.css(t.CSS.TRANSFORM,"")}var m=s.register(a,"drag",{horizontal:!1});return a.on("$md.dragstart",i).on("$md.drag",d).on("$md.dragend",l),{element:e,cleanup:function(){m(),a.off("$md.dragstart",i).off("$md.drag",d).off("$md.dragend",l)}}}var h;return{themable:!0,targetEvent:null,onShow:u,onRemove:f,escapeToClose:!0,disableParentScroll:!0}}var n=.5,r=80;return t.$inject=["$animate","$mdConstant","$timeout","$$rAF","$compile","$mdTheming","$mdBottomSheet","$rootElement","$rootScope","$mdGesture"],e("$mdBottomSheet").setDefaults({methods:["disableParentScroll","escapeToClose","targetEvent"],options:t})}angular.module("material.components.bottomSheet",["material.core","material.components.backdrop"]).directive("mdBottomSheet",e).provider("$mdBottomSheet",t),t.$inject=["$$interimElementProvider"]}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.7.1
 */
function(){"use strict";function e(e,t,n){function r(e){return angular.isDefined(e.href)||angular.isDefined(e.ngHref)}function o(e,t){return r(t)?'<a class="md-button" ng-transclude></a>':'<button class="md-button" ng-transclude></button>'}function a(o,a,i){var d=a[0];t(a),e.attachButtonBehavior(o,a);var c=d.textContent.trim();c||n.expect(a,"aria-label"),r(i)&&angular.isDefined(i.ngDisabled)&&o.$watch(i.ngDisabled,function(e){a.attr("tabindex",e?-1:0)})}return{restrict:"E",replace:!0,transclude:!0,template:o,link:a}}angular.module("material.components.button",["material.core"]).directive("mdButton",e),e.$inject=["$mdInkRipple","$mdTheming","$mdAria"]}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.7.1
 */
function(){"use strict";function e(e){return{restrict:"E",link:function(t,n){e(n)}}}angular.module("material.components.card",["material.core"]).directive("mdCard",e),e.$inject=["$mdTheming"]}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.7.1
 */
function(){"use strict";function e(e,t,n,r,o,a){function i(t,i){return i.type="checkbox",i.tabIndex=0,t.attr("role",i.type),function(t,i,c,l){function m(e){e.which===r.KEY_CODE.SPACE&&(e.preventDefault(),s(e))}function s(e){i[0].hasAttribute("disabled")||t.$apply(function(){f=!f,l.$setViewValue(f,e&&e.type),l.$render()})}function u(){f=l.$viewValue,f?i.addClass(d):i.removeClass(d)}l=l||a.fakeNgModel();var f=!1;o(i),n.expectWithText(i,"aria-label"),e.link.pre(t,{on:angular.noop,0:{}},c,[l]),i.on("click",s).on("keypress",m),l.$render=u}}e=e[0];var d="md-checked";return{restrict:"E",transclude:!0,require:"?ngModel",template:'<div class="md-container" md-ink-ripple md-ink-ripple-checkbox><div class="md-icon"></div></div><div ng-transclude class="md-label"></div>',compile:i}}angular.module("material.components.checkbox",["material.core"]).directive("mdCheckbox",e),e.$inject=["inputDirective","$mdInkRipple","$mdAria","$mdConstant","$mdTheming","$mdUtil"]}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.7.1
 */
function(){"use strict";function e(e){function n(e,t){this.$scope=e,this.$element=t}return{restrict:"E",controller:["$scope","$element",n],link:function(n,r){r[0];e(r),n.$broadcast("$mdContentLoaded",r),t(r[0])}}}function t(e){angular.element(e).on("$md.pressdown",function(t){"t"===t.pointer.type&&(t.$materialScrollFixed||(t.$materialScrollFixed=!0,0===e.scrollTop?e.scrollTop=1:e.scrollHeight===e.scrollTop+e.offsetHeight&&(e.scrollTop-=1)))})}angular.module("material.components.content",["material.core"]).directive("mdContent",e),e.$inject=["$mdTheming"]}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.7.1
 */
function(){"use strict";function e(e,t){return{restrict:"E",link:function(n,r){t(r),e(function(){var e=r[0].querySelector("md-content");e&&e.scrollHeight>e.clientHeight&&r.addClass("md-content-overflow")})}}}function t(e){function t(e){return{template:['<md-dialog aria-label="{{ dialog.ariaLabel }}">',"<md-content>","<h2>{{ dialog.title }}</h2>","<p>{{ dialog.content }}</p>","</md-content>",'<div class="md-actions">','<md-button ng-if="dialog.$type == \'confirm\'" ng-click="dialog.abort()">',"{{ dialog.cancel }}","</md-button>",'<md-button ng-click="dialog.hide()" class="md-primary">',"{{ dialog.ok }}","</md-button>","</div>","</md-dialog>"].join(""),controller:function(){this.hide=function(){e.hide(!0)},this.abort=function(){e.cancel()}},controllerAs:"dialog",bindToController:!0}}function n(e,t,n,r,o,a,i,d,c,l,m,s){function u(n,o,a){function i(){var e=o[0].querySelector(".dialog-close");if(!e){var t=o[0].querySelectorAll(".md-actions button");e=t[t.length-1]}return angular.element(e)}a.parent=angular.element(a.parent),a.popInTarget=angular.element((a.targetEvent||{}).target);var l=i();if(p(o.find("md-dialog")),a.hasBackdrop){var m=a.parent.prop("scrollTop");a.backdrop=angular.element('<md-backdrop class="md-dialog-backdrop md-opaque">'),c.inherit(a.backdrop,a.parent),r.enter(a.backdrop,a.parent),o.css("top",m+"px")}return a.disableParentScroll&&(a.lastOverflow=a.parent.css("overflow"),a.parent.css("overflow","hidden")),h(o,a.parent,a.popInTarget&&a.popInTarget.length&&a.popInTarget).then(function(){a.escapeToClose&&(a.rootElementKeyupCallback=function(t){t.keyCode===d.KEY_CODE.ESCAPE&&e(s.cancel)},t.on("keyup",a.rootElementKeyupCallback)),a.clickOutsideToClose&&(a.dialogClickOutsideCallback=function(t){t.target===o[0]&&e(s.cancel)},o.on("click",a.dialogClickOutsideCallback)),l.focus()})}function f(e,n,o){return o.backdrop&&r.leave(o.backdrop),o.disableParentScroll&&(o.parent.css("overflow",o.lastOverflow),delete o.lastOverflow),o.escapeToClose&&t.off("keyup",o.rootElementKeyupCallback),o.clickOutsideToClose&&n.off("click",o.dialogClickOutsideCallback),g(n,o.parent,o.popInTarget&&o.popInTarget.length&&o.popInTarget).then(function(){o.scope.$destroy(),n.remove(),o.popInTarget&&o.popInTarget.focus()})}function p(e){e.attr({role:"dialog"});var t=e.find("md-content");0===t.length&&(t=e),o.expectAsync(e,"aria-label",function(){var e=t.text().split(/\s+/);return e.length>3&&(e=e.slice(0,3).concat("...")),e.join(" ")})}function h(e,t,n){var r=e.find("md-dialog");return t.append(e),b(r,n),l(function(){r.addClass("transition-in").css(d.CSS.TRANSFORM,"")}),E(r)}function g(e,t,n){var r=e.find("md-dialog");return r.addClass("transition-out").removeClass("transition-in"),b(r,n),E(r)}function b(e,t){if(t){var n=t[0].getBoundingClientRect(),r=e[0].getBoundingClientRect(),o=Math.min(.5,n.width/r.width),a=Math.min(.5,n.height/r.height);e.css(d.CSS.TRANSFORM,"translate3d("+(-r.left+n.left+n.width/2-r.width/2)+"px,"+(-r.top+n.top+n.height/2-r.height/2)+"px,0) scale("+o+","+a+")")}}function E(e){function t(r){r.target===e[0]&&(e.off(d.CSS.TRANSITIONEND,t),n.resolve())}var n=m.defer();return e.on(d.CSS.TRANSITIONEND,t),n.promise}return{hasBackdrop:!0,isolateScope:!0,onShow:u,onRemove:f,clickOutsideToClose:!0,escapeToClose:!0,targetEvent:null,disableParentScroll:!0,transformTemplate:function(e){return'<div class="md-dialog-container">'+e+"</div>"}}}return t.$inject=["$mdDialog"],n.$inject=["$timeout","$rootElement","$compile","$animate","$mdAria","$document","$mdUtil","$mdConstant","$mdTheming","$$rAF","$q","$mdDialog"],e("$mdDialog").setDefaults({methods:["disableParentScroll","hasBackdrop","clickOutsideToClose","escapeToClose","targetEvent"],options:n}).addPreset("alert",{methods:["title","content","ariaLabel","ok"],options:t}).addPreset("confirm",{methods:["title","content","ariaLabel","ok","cancel"],options:t})}angular.module("material.components.dialog",["material.core","material.components.backdrop"]).directive("mdDialog",e).provider("$mdDialog",t),e.$inject=["$$rAF","$mdTheming"],t.$inject=["$$interimElementProvider"]}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.7.1
 */
function(){"use strict";function e(){}function t(t){return{restrict:"E",link:t,controller:[e]}}angular.module("material.components.divider",["material.core"]).directive("mdDivider",t),t.$inject=["$mdTheming"]}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.7.1
 */
function(){"use strict";function e(){return{restrict:"E",template:'<object class="md-icon"></object>',compile:function(e,t){var n=angular.element(e[0].children[0]);angular.isDefined(t.icon)&&n.attr("data",t.icon)}}}angular.module("material.components.icon",["material.core"]).directive("mdIcon",e)}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.7.1
 */
function(){function e(e,t){function n(t,n){e(n)}function r(e,n,r){var o=this;o.isErrorGetter=r.mdIsError&&t(r.mdIsError),o.element=n,o.setFocused=function(e){n.toggleClass("md-input-focused",!!e)},o.setHasValue=function(e){n.toggleClass("md-input-has-value",!!e)},o.setInvalid=function(e){n.toggleClass("md-input-invalid",!!e)},e.$watch(function(){return o.label&&o.input},function(e){e&&!o.label.attr("for")&&o.label.attr("for",o.input.attr("id"))})}return r.$inject=["$scope","$element","$attrs"],{restrict:"E",link:n,controller:r}}function t(){return{restrict:"E",require:"^?mdInputContainer",link:function(e,t,n,r){r&&(r.label=t,e.$on("$destroy",function(){r.label=null}))}}}function n(e,t){function n(n,r,o,a){function i(e){return l.setHasValue(!m.$isEmpty(e)),e}function d(){l.setHasValue(r.val().length>0||(r[0].validity||{}).badInput)}function c(){function o(e){return c(),e}function a(){d.style.height="auto";var e=d.scrollHeight-d.offsetHeight;d.scrollTop=0;var t=d.offsetHeight+(e>0?e:0);d.style.height=t+"px"}function i(){d.scrollTop=0;var e=d.scrollHeight-d.offsetHeight,t=d.offsetHeight+e;d.style.height=t+"px"}var d=r[0],c=e.debounce(a,1);m?(m.$formatters.push(o),m.$viewChangeListeners.push(o)):c(),r.on("keydown input",c),r.on("scroll",i),angular.element(t).on("resize",c),n.$on("$destroy",function(){angular.element(t).off("resize",c)})}var l=a[0],m=a[1]||e.fakeNgModel(),s=angular.isDefined(o.readonly);if(l){if(l.input)throw new Error("<md-input-container> can only have *one* <input> or <textarea> child element!");l.input=r,r.addClass("md-input"),r.attr("id")||r.attr("id","input_"+e.nextUid()),"textarea"===r[0].tagName.toLowerCase()&&c();var u=l.isErrorGetter||function(){return m.$invalid&&m.$touched};n.$watch(u,l.setInvalid),m.$parsers.push(i),m.$formatters.push(i),r.on("input",d),s||r.on("focus",function(){l.setFocused(!0)}).on("blur",function(){l.setFocused(!1),d()}),n.$on("$destroy",function(){l.setFocused(!1),l.setHasValue(!1),l.input=null})}}return{restrict:"E",require:["^?mdInputContainer","?ngModel"],link:n}}function r(e){function t(t,n,r,o){function a(e){return l.text((n.val()||e||"").length+"/"+i),e}var i,d=o[0],c=o[1],l=angular.element('<div class="md-char-counter">');r.$set("ngTrim","false"),c.element.append(l),d.$formatters.push(a),d.$viewChangeListeners.push(a),n.on("input keydown",function(){a()}),t.$watch(r.mdMaxlength,function(t){i=t,angular.isNumber(t)&&t>0?(l.parent().length||e.enter(l,c.element,angular.element(c.element[0].lastElementChild)),a()):e.leave(l)}),d.$validators["md-maxlength"]=function(e,t){return!angular.isNumber(i)||0>i?!0:(e||n.val()||t||"").length<=i}}return{restrict:"A",require:["ngModel","^mdInputContainer"],link:t}}function o(){function e(e,t,n,r){if(r){var o=n.placeholder;t.removeAttr("placeholder"),r.element.append('<div class="md-placeholder">'+o+"</div>")}}return{restrict:"A",require:"^^?mdInputContainer",link:e}}angular.module("material.components.input",["material.core"]).directive("mdInputContainer",e).directive("label",t).directive("input",n).directive("textarea",n).directive("mdMaxlength",r).directive("placeholder",o),e.$inject=["$mdTheming","$parse"],n.$inject=["$mdUtil","$window","$compile","$animate"],r.$inject=["$animate"]}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.7.1
 */
function(){"use strict";function e(){return{restrict:"E",link:function(e,t){t.attr({role:"list"})}}}function t(){return{restrict:"E",link:function(e,t){t.attr({role:"listitem"})}}}angular.module("material.components.list",["material.core"]).directive("mdList",e).directive("mdItem",t)}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.7.1
 */
function(){"use strict";function e(e,t,n){function r(e){return e.attr("aria-valuemin",0),e.attr("aria-valuemax",100),e.attr("role","progressbar"),o}function o(e,r,o){n(r);var c,l,m,s,u=r[0],f=u.querySelectorAll(".md-fill, .md-mask.md-full"),p=u.querySelectorAll(".md-fill.md-fix"),h=o.mdDiameter||48,g=h/48;u.style[t.CSS.TRANSFORM]="scale("+g.toString()+")",o.$observe("value",function(e){for(l=a(e),m=i[l],s=d[l],r.attr("aria-valuenow",l),c=0;c<f.length;c++)f[c].style[t.CSS.TRANSFORM]=m;for(c=0;c<p.length;c++)p[c].style[t.CSS.TRANSFORM]=s})}function a(e){return e>100?100:0>e?0:Math.ceil(e||0)}for(var i=new Array(101),d=new Array(101),c=0;101>c;c++){var l=c/100,m=Math.floor(180*l);i[c]="rotate("+m.toString()+"deg)",d[c]="rotate("+(2*m).toString()+"deg)"}return{restrict:"E",template:'<div class="md-spinner-wrapper"><div class="md-inner"><div class="md-gap"></div><div class="md-left"><div class="md-half-circle"></div></div><div class="md-right"><div class="md-half-circle"></div></div></div></div>',compile:r}}angular.module("material.components.progressCircular",["material.core"]).directive("mdProgressCircular",e),e.$inject=["$$rAF","$mdConstant","$mdTheming"]}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.7.1
 */
function(){"use strict";function e(e,n,r){function o(e){return e.attr("aria-valuemin",0),e.attr("aria-valuemax",100),e.attr("role","progressbar"),a}function a(o,a,d){r(a);var c=a[0].querySelector(".md-bar1").style,l=a[0].querySelector(".md-bar2").style,m=angular.element(a[0].querySelector(".md-container"));d.$observe("value",function(e){if("query"!=d.mdMode){var r=i(e);a.attr("aria-valuenow",r),l[n.CSS.TRANSFORM]=t[r]}}),d.$observe("mdBufferValue",function(e){c[n.CSS.TRANSFORM]=t[i(e)]}),e(function(){m.addClass("md-ready")})}function i(e){return e>100?100:0>e?0:Math.ceil(e||0)}return{restrict:"E",template:'<div class="md-container"><div class="md-dashed"></div><div class="md-bar md-bar1"></div><div class="md-bar md-bar2"></div></div>',compile:o}}angular.module("material.components.progressLinear",["material.core"]).directive("mdProgressLinear",e),e.$inject=["$$rAF","$mdConstant","$mdTheming"];var t=function(){function e(e){var t=e/100,n=(e-100)/2;return"translateX("+n.toString()+"%) scale("+t.toString()+", 1)"}for(var t=new Array(101),n=0;101>n;n++)t[n]=e(n);return t}()}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.7.1
 */
function(){"use strict";function e(e,t,n){function r(r,o,a,i){function d(n){switch(n.keyCode){case t.KEY_CODE.LEFT_ARROW:case t.KEY_CODE.UP_ARROW:n.preventDefault(),c.selectPrevious();break;case t.KEY_CODE.RIGHT_ARROW:case t.KEY_CODE.DOWN_ARROW:n.preventDefault(),c.selectNext();break;case t.KEY_CODE.ENTER:var r=angular.element(e.getClosest(o[0],"form"));r.length>0&&r.triggerHandler("submit")}}n(o);var c=i[0],l=i[1]||e.fakeNgModel();c.init(l),o.attr({role:"radiogroup",tabIndex:o.attr("tabindex")||"0"}).on("keydown",d)}function o(e){this._radioButtonRenderFns=[],this.$element=e}function a(){return{init:function(e){this._ngModelCtrl=e,this._ngModelCtrl.$render=angular.bind(this,this.render)},add:function(e){this._radioButtonRenderFns.push(e)},remove:function(e){var t=this._radioButtonRenderFns.indexOf(e);-1!==t&&this._radioButtonRenderFns.splice(t,1)},render:function(){this._radioButtonRenderFns.forEach(function(e){e()})},setViewValue:function(e,t){this._ngModelCtrl.$setViewValue(e,t),this.render()},getViewValue:function(){return this._ngModelCtrl.$viewValue},selectNext:function(){return i(this.$element,1)},selectPrevious:function(){return i(this.$element,-1)},setActiveDescendant:function(e){this.$element.attr("aria-activedescendant",e)}}}function i(t,n){var r=e.iterator(Array.prototype.slice.call(t[0].querySelectorAll("md-radio-button")),!0);if(r.count()){var o=function(e){return!angular.element(e).attr("disabled")},a=t[0].querySelector("md-radio-button.md-checked"),i=r[0>n?"previous":"next"](a,o)||r.first();angular.element(i).triggerHandler("click")}}return o.prototype=a(),{restrict:"E",controller:["$element",o],require:["mdRadioGroup","?ngModel"],link:{pre:r}}}function t(e,t,n){function r(r,a,i,d){function c(e){a[0].hasAttribute("disabled")||r.$apply(function(){d.setViewValue(i.value,e&&e.type)})}function l(){var e=d.getViewValue()==i.value;e!==s&&(s=e,a.attr("aria-checked",e),e?(a.addClass(o),d.setActiveDescendant(a.attr("id"))):a.removeClass(o))}function m(n,r){function o(){return i.id||"radio_"+t.nextUid()}r.ariaId=o(),n.attr({id:r.ariaId,role:"radio","aria-checked":"false"}),e.expectWithText(n,"aria-label")}var s;n(a),m(a,r),d.add(l),i.$observe("value",l),a.on("click",c).on("$destroy",function(){d.remove(l)})}var o="md-checked";return{restrict:"E",require:"^mdRadioGroup",transclude:!0,template:'<div class="md-container" md-ink-ripple md-ink-ripple-checkbox><div class="md-off"></div><div class="md-on"></div></div><div ng-transclude class="md-label"></div>',link:r}}angular.module("material.components.radioButton",["material.core"]).directive("mdRadioGroup",e).directive("mdRadioButton",t),e.$inject=["$mdUtil","$mdConstant","$mdTheming"],t.$inject=["$mdAria","$mdUtil","$mdTheming"]}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.7.1
 */
function(){"use strict";function e(e,t){return function(n){var r="SideNav '"+n+"' is not available!",o=e.get(n);return o||e.notFoundError(n),{isOpen:function(){return o&&o.isOpen()},isLockedOpen:function(){return o&&o.isLockedOpen()},toggle:function(){return o?o.toggle():t.reject(r)},open:function(){return o?o.open():t.reject(r)},close:function(){return o?o.close():t.reject(r)}}}}function t(e,t,n,r,o,a,i,d,c){function l(l,m,s,u){function f(e,n){l.isLockedOpen=e,e===n?m.toggleClass("md-locked-open",!!e):t[e?"addClass":"removeClass"](m,"md-locked-open"),A.toggleClass("md-locked-open",!!e)}function p(e){var n=m.parent();return n[e?"on":"off"]("keydown",g),A[e?"on":"off"]("click",b),e&&(E=c[0].activeElement),v=d.all([t[e?"enter":"leave"](A,n),t[e?"removeClass":"addClass"](m,"md-closed").then(function(){l.isOpen&&m.focus()})])}function h(t){if(l.isOpen==t)return d.when(!0);var n=d.defer();return l.isOpen=t,e(function(){v.then(function(e){l.isOpen||(E&&E.focus(),E=null),n.resolve(e)})},0,!1),n.promise}function g(e){var t=e.keyCode===o.KEY_CODE.ESCAPE;return t?b(e):d.when(!0)}function b(e){return e.preventDefault(),e.stopPropagation(),u.close()}var E=null,v=d.when(!0),$=n(s.mdIsLockedOpen),M=function(){return $(l.$parent,{$media:r})},A=a('<md-backdrop class="md-sidenav-backdrop md-opaque ng-enter">')(l);m.on("$destroy",u.destroy),i.inherit(A,m),l.$watch(M,f),l.$watch("isOpen",p),u.$toggleOpen=h}return{restrict:"E",scope:{isOpen:"=?mdIsOpen"},controller:"$mdSidenavController",compile:function(e){return e.addClass("md-closed"),e.attr("tabIndex","-1"),l}}}function n(e,t,n,r,o){var a=this;a.$toggleOpen=function(){return o.when(e.isOpen)},a.isOpen=function(){return!!e.isOpen},a.isLockedOpen=function(){return!!e.isLockedOpen},a.open=function(){return a.$toggleOpen(!0)},a.close=function(){return a.$toggleOpen(!1)},a.toggle=function(){return a.$toggleOpen(!e.isOpen)},a.destroy=r.register(a,n.mdComponentId)}angular.module("material.components.sidenav",["material.core","material.components.backdrop"]).factory("$mdSidenav",e).directive("mdSidenav",t).controller("$mdSidenavController",n),e.$inject=["$mdComponentRegistry","$q"],t.$inject=["$timeout","$animate","$parse","$mdMedia","$mdConstant","$compile","$mdTheming","$q","$document"],n.$inject=["$scope","$element","$attrs","$mdComponentRegistry","$q"]}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.7.1
 */
function(){"use strict";function e(e,t,n,r,o,a,i,d){function c(c,l,m,s){function u(){E(),A(),b()}function f(e){W=parseFloat(e),l.attr("aria-valuemin",e),u()}function p(e){X=parseFloat(e),l.attr("aria-valuemax",e),u()}function h(e){z=parseFloat(e),b()}function g(e){l.attr("aria-disabled",!!e)}function b(){if(angular.isDefined(m.mdDiscrete)){var e=Math.floor((X-W)/z);if(!Z){var n=t.getComputedStyle(U[0]);Z=angular.element('<canvas style="position:absolute;">'),J=Z[0].getContext("2d"),J.fillStyle=n.backgroundColor||"black",U.append(Z)}var r=v();Z[0].width=r.width,Z[0].height=r.height;for(var o,a=0;e>=a;a++)o=Math.floor(r.width*(a/e)),J.fillRect(o-1,0,2,r.height)}}function E(){Q=B[0].getBoundingClientRect()}function v(){return Y(),Q}function $(e){if(!l[0].hasAttribute("disabled")){var t;e.keyCode===o.KEY_CODE.LEFT_ARROW?t=-z:e.keyCode===o.KEY_CODE.RIGHT_ARROW&&(t=z),t&&((e.metaKey||e.ctrlKey||e.altKey)&&(t*=4),e.preventDefault(),e.stopPropagation(),c.$evalAsync(function(){M(s.$viewValue+t)}))}}function M(e){s.$setViewValue(T(k(e)))}function A(){isNaN(s.$viewValue)&&(s.$viewValue=s.$modelValue);var e=(s.$viewValue-W)/(X-W);c.modelValue=s.$viewValue,l.attr("aria-valuenow",s.$viewValue),w(e),L.text(s.$viewValue)}function T(e){return angular.isNumber(e)?Math.max(W,Math.min(X,e)):void 0}function k(e){return angular.isNumber(e)?Math.round(e/z)*z:void 0}function w(e){V.css("width",100*e+"%"),q.css(o.CSS.TRANSFORM,"translate3d("+100*e+"%,0,0)"),l.toggleClass("md-min",0===e)}function y(e){if(!j()){l.addClass("active"),l[0].focus(),E();var t=R(O(e.pointer.x)),n=T(k(t));c.$apply(function(){M(n),w(I(n))})}}function C(e){if(!j()){l.removeClass("dragging active");var t=R(O(e.pointer.x)),n=T(k(t));c.$apply(function(){M(n)})}}function N(e){j()||(et=!0,e.stopPropagation(),l.addClass("dragging"),H(e))}function x(e){et&&(e.stopPropagation(),H(e))}function _(e){et&&(e.stopPropagation(),et=!1)}function H(e){tt?D(e.pointer.x):S(e.pointer.x)}function S(e){c.$evalAsync(function(){M(R(O(e)))})}function D(e){var t=R(O(e)),n=T(k(t));w(O(e)),L.text(n)}function O(e){return Math.max(0,Math.min(1,(e-Q.left)/Q.width))}function R(e){return W+e*(X-W)}function I(e){return(e-W)/(X-W)}a(l),s=s||{$setViewValue:function(e){this.$viewValue=e,this.$viewChangeListeners.forEach(function(e){e()})},$parsers:[],$formatters:[],$viewChangeListeners:[]};var P=m.ngDisabled&&d(m.ngDisabled),j=P?function(){return P(c.$parent)}:angular.noop,F=angular.element(l[0].querySelector(".md-thumb")),L=angular.element(l[0].querySelector(".md-thumb-text")),q=F.parent(),B=angular.element(l[0].querySelector(".md-track-container")),V=angular.element(l[0].querySelector(".md-track-fill")),U=angular.element(l[0].querySelector(".md-track-ticks")),Y=r.throttle(E,5e3);m.min?m.$observe("min",f):f(0),m.max?m.$observe("max",p):p(100),m.step?m.$observe("step",h):h(1);var K=angular.noop;m.ngDisabled&&(K=c.$parent.$watch(m.ngDisabled,g)),n.expect(l,"aria-label"),i.register(l,"drag"),l.attr({tabIndex:0,role:"slider"}).on("keydown",$).on("$md.pressdown",y).on("$md.pressup",C).on("$md.dragstart",N).on("$md.drag",x).on("$md.dragend",_),setTimeout(u);var G=e.throttle(u);angular.element(t).on("resize",G),c.$on("$destroy",function(){angular.element(t).off("resize",G),K()}),s.$render=A,s.$viewChangeListeners.push(A),s.$formatters.push(T),s.$formatters.push(k);var W,X,z,Z,J,Q={};E();var et=!1,tt=angular.isDefined(m.mdDiscrete)}return{scope:{},require:"?ngModel",template:'<div class="md-track-container"><div class="md-track"></div><div class="md-track md-track-fill"></div><div class="md-track-ticks"></div></div><div class="md-thumb-container"><div class="md-thumb"></div><div class="md-focus-thumb"></div><div class="md-focus-ring"></div><div class="md-sign"><span class="md-thumb-text"></span></div><div class="md-disabled-thumb"></div></div>',link:c}}angular.module("material.components.slider",["material.core"]).directive("mdSlider",e),e.$inject=["$$rAF","$window","$mdAria","$mdUtil","$mdConstant","$mdTheming","$mdGesture","$parse"]}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.7.1
 */
function(){"use strict";function e(e,t,n,r,o){function a(e){function n(e,t){t.addClass("md-sticky-clone"),t.css("top",p+"px");var n={element:e,clone:t};return f.items.push(n),s.parent().prepend(n.clone),u(),function(){f.items.forEach(function(t,n){t.element[0]===e[0]&&(f.items.splice(n,1),t.clone.remove())}),u()}}function o(){f.items.forEach(a),f.items=f.items.sort(function(e,t){return e.top<t.top?-1:1});for(var e,t=s.prop("scrollTop"),n=f.items.length-1;n>=0;n--)if(t>f.items[n].top){e=f.items[n];break}c(e)}function a(e){var t=e.element[0];for(e.top=0,e.left=0;t&&t!==s[0];)e.top+=t.offsetTop,e.left+=t.offsetLeft,t=t.offsetParent;e.height=e.element.prop("offsetHeight"),e.clone.css("margin-left",e.left+"px")}function i(){var e=s.prop("scrollTop"),t=e>(i.prevScrollTop||0);i.prevScrollTop=e,0===e?c(null):t&&f.next?f.next.top-e<=0?c(f.next):f.current&&(f.next.top-e<=f.next.height?m(f.current,f.next.top-f.next.height-e):m(f.current,null)):!t&&f.current&&(e<f.current.top&&c(f.prev),f.current&&f.next&&(e>=f.next.top-f.current.height?m(f.current,f.next.top-e-f.current.height):m(f.current,null)))}function c(e){if(f.current!==e){f.current&&(m(f.current,null),l(f.current,null)),e&&l(e,"active"),f.current=e;var t=f.items.indexOf(e);f.next=f.items[t+1],f.prev=f.items[t-1],l(f.next,"next"),l(f.prev,"prev")}}function l(e,t){e&&e.state!==t&&(e.state&&(e.clone.attr("sticky-prev-state",e.state),e.element.attr("sticky-prev-state",e.state)),e.clone.attr("sticky-state",t),e.element.attr("sticky-state",t),e.state=t)}function m(e,n){e&&(null===n||void 0===n?e.translateY&&(e.translateY=null,e.clone.css(t.CSS.TRANSFORM,"")):(e.translateY=n,e.clone.css(t.CSS.TRANSFORM,"translate3d("+e.left+"px,"+n+"px,0)")))}var s=e.$element,u=r.throttle(o);d(s),s.on("$scrollstart",u),s.on("$scroll",i);var f,p=s.prop("offsetTop");return f={prev:null,current:null,next:null,items:[],add:n,refreshElements:o}}function i(){var t,n=angular.element("<div>");e[0].body.appendChild(n[0]);for(var r=["sticky","-webkit-sticky"],o=0;o<r.length;++o)if(n.css({position:r[o],top:0,"z-index":2}),n.css("position")==r[o]){t=r[o];break}return n.remove(),t}function d(e){function t(){+o.now()-a>i?(n=!1,e.triggerHandler("$scrollend")):(e.triggerHandler("$scroll"),r(t))}var n,a,i=200;e.on("scroll touchmove",function(){n||(n=!0,r(t),e.triggerHandler("$scrollstart")),e.triggerHandler("$scroll"),a=+o.now()})}var c=i();return function(e,t,n){var r=t.controller("mdContent");if(r)if(c)t.css({position:c,top:0,"z-index":2});else{var o=r.$element.data("$$sticky");o||(o=a(r),r.$element.data("$$sticky",o));var i=o.add(t,n||t.clone());e.$on("$destroy",i)}}}angular.module("material.components.sticky",["material.core","material.components.content"]).factory("$mdSticky",e),e.$inject=["$document","$mdConstant","$compile","$$rAF","$mdUtil"]}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.7.1
 */
function(){"use strict";function e(e,t,n){return{restrict:"E",replace:!0,transclude:!0,template:'<h2 class="md-subheader"><span class="md-subheader-content"></span></h2>',compile:function(r,o,a){var i=r[0].outerHTML;return function(r,o){function d(e){return angular.element(e[0].querySelector(".md-subheader-content"))}n(o),a(r,function(e){d(o).append(e)}),a(r,function(a){var c=t(angular.element(i))(r);n(c),d(c).append(a),e(r,o,c)})}}}}angular.module("material.components.subheader",["material.core","material.components.sticky"]).directive("mdSubheader",e),e.$inject=["$mdSticky","$compile","$mdTheming"]}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.7.1
 */
function(){"use strict";var e=angular.module("material.components.swipe",[]);["SwipeLeft","SwipeRight"].forEach(function(t){var n="md"+t,r="$md."+t.toLowerCase();e.directive(n,["$parse",function(e){function t(t,o,a){var i=e(a[n]);o.on(r,function(e){t.$apply(function(){i(t,{$event:e})})})}return{restrict:"A",link:t}}])})}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.7.1
 */
function(){"use strict";function e(e,t,n,r,o,a,i,d){function c(e,t){var r=l.compile(e,t);return e.addClass("md-dragging"),function(e,t,c,l){function m(n){p(e)||(n.stopPropagation(),t.addClass("md-dragging"),b={width:h.prop("offsetWidth")},t.removeClass("transition"))}function s(e){if(b){e.stopPropagation(),e.srcEvent&&e.srcEvent.preventDefault();var t=e.pointer.distanceX/b.width,n=l.$viewValue?1+t:t;n=Math.max(0,Math.min(1,n)),h.css(o.CSS.TRANSFORM,"translate3d("+100*n+"%,0,0)"),b.translate=n}}function u(e){if(b){e.stopPropagation(),t.removeClass("md-dragging"),h.css(o.CSS.TRANSFORM,"");var n=l.$viewValue?b.translate<.5:b.translate>.5;n&&f(!l.$viewValue),b=null}}function f(t){e.$apply(function(){l.$setViewValue(t),l.$render()})}l=l||n.fakeNgModel();var p=a(c.ngDisabled),h=angular.element(t[0].querySelector(".md-thumb-container")),g=angular.element(t[0].querySelector(".md-container"));i(function(){t.removeClass("md-dragging")}),r(e,t,c,l),angular.isDefined(c.ngDisabled)&&e.$watch(p,function(e){t.attr("tabindex",e?-1:0)}),d.register(g,"drag"),g.on("$md.dragstart",m).on("$md.drag",s).on("$md.dragend",u);var b}}var l=e[0];return{restrict:"E",transclude:!0,template:'<div class="md-container"><div class="md-bar"></div><div class="md-thumb-container"><div class="md-thumb" md-ink-ripple md-ink-ripple-checkbox></div></div></div><div ng-transclude class="md-label"></div>',require:"?ngModel",compile:c}}angular.module("material.components.switch",["material.core","material.components.checkbox"]).directive("mdSwitch",e),e.$inject=["mdCheckboxDirective","$mdTheming","$mdUtil","$document","$mdConstant","$parse","$$rAF","$mdGesture"]}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.7.1
 */
function(){"use strict";angular.module("material.components.tabs",["material.core"])}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.7.1
 */
function(){"use strict";function e(e,t,n,r){return{restrict:"E",replace:!0,scope:{fid:"@?mdFid",label:"@?",value:"=ngModel"},compile:function(o,a){return r.warn("<md-text-float> is deprecated. Please use `<md-input-container>` and `<input>`.More information at http://material.angularjs.org/#/api/material.components.input/directive/mdInputContainer"),angular.isUndefined(a.mdFid)&&(a.mdFid=t.nextUid()),{pre:function(e,t,r){var o=n(r.ngDisabled);e.isDisabled=function(){return o(e.$parent)},e.inputType=r.type||"text"},post:e}},template:'<md-input-group tabindex="-1"> <label for="{{fid}}" >{{label}}</label> <md-input id="{{fid}}" ng-disabled="isDisabled()" ng-model="value" type="{{inputType}}"></md-input></md-input-group>'}}function t(e){return{restrict:"CE",controller:["$element",function(t){e.warn("<md-input-group> is deprecated. Please use `<md-input-container>` and `<input>`.More information at http://material.angularjs.org/#/api/material.components.input/directive/mdInputContainer"),this.setFocused=function(e){t.toggleClass("md-input-focused",!!e)},this.setHasValue=function(e){t.toggleClass("md-input-has-value",e)}}]}}function n(e,t){return{restrict:"E",replace:!0,template:"<input >",require:["^?mdInputGroup","?ngModel"],link:function(e,n,r,o){function a(e){return e=angular.isUndefined(e)?n.val():e,angular.isDefined(e)&&null!==e&&""!==e.toString().trim()}if(o[0]){t.warn("<md-input> is deprecated. Please use `<md-input-container>` and `<input>`.More information at http://material.angularjs.org/#/api/material.components.input/directive/mdInputContainer");var i=o[0],d=o[1];e.$watch(e.isDisabled,function(e){n.attr("aria-disabled",!!e),n.attr("tabindex",!!e)}),n.attr("type",r.type||n.parent().attr("type")||"text"),d&&d.$formatters.push(function(e){return i.setHasValue(a(e)),e}),n.on("input",function(){i.setHasValue(a())}).on("focus",function(){i.setFocused(!0)}).on("blur",function(){i.setFocused(!1),i.setHasValue(a())}),e.$on("$destroy",function(){i.setFocused(!1),i.setHasValue(!1)})}}}}angular.module("material.components.textField",["material.core"]).directive("mdInputGroup",t).directive("mdInput",n).directive("mdTextFloat",e),e.$inject=["$mdTheming","$mdUtil","$parse","$log"],t.$inject=["$log"],n.$inject=["$mdUtil","$log"]}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.7.1
 */
function(){"use strict";function e(){return{restrict:"E"}}function t(e){function t(e,t,n,r){function o(n,o,a){return o.addClass(a.position.split(" ").map(function(e){return"md-"+e}).join(" ")),a.parent.addClass(i(a.position)),a.onSwipe=function(t){o.addClass("md-"+t.type.replace("$md.","")),e(r.cancel)},o.on("$md.swipeleft $md.swiperight",a.onSwipe),t.enter(o,a.parent)}function a(e,n,r){return n.off("$md.swipeleft $md.swiperight",r.onSwipe),r.parent.removeClass(i(r.position)),t.leave(n)}function i(e){return"md-toast-open-"+(e.indexOf("top")>-1?"top":"bottom")}return{onShow:o,onRemove:a,position:"bottom left",themable:!0,hideDelay:3e3}}return t.$inject=["$timeout","$animate","$mdTheming","$mdToast"],e("$mdToast").setDefaults({methods:["position","hideDelay","capsule"],options:t}).addPreset("simple",{argOption:"content",methods:["content","action","highlightAction"],options:["$mdToast",function(e){return{template:["<md-toast ng-class=\"{'md-capsule': toast.capsule}\">","<span flex>{{ toast.content }}</span>",'<md-button class="md-action" ng-if="toast.action" ng-click="toast.resolve()" ng-class="{\'md-highlight\': toast.highlightAction}">',"{{ toast.action }}","</md-button>","</md-toast>"].join(""),controller:function(){this.resolve=function(){e.hide()}},controllerAs:"toast",bindToController:!0}}]})}angular.module("material.components.toast",["material.core","material.components.button"]).directive("mdToast",e).provider("$mdToast",t),t.$inject=["$$interimElementProvider"]}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.7.1
 */
function(){"use strict";function e(e,t,n,r){return{restrict:"E",controller:angular.noop,link:function(o,a,i){function d(){function r(t,n){a.parent()[0]===n.parent()[0]&&(m&&m.off("scroll",p),n.on("scroll",p),n.attr("scroll-shrink","true"),m=n,e(d))}function d(){l=a.prop("offsetHeight"),m.css("margin-top",-l*f+"px"),c()}function c(e){var n=e?e.target.scrollTop:u;h(),s=Math.min(l/f,Math.max(0,s+n-u)),a.css(t.CSS.TRANSFORM,"translate3d(0,"+-s*f+"px,0)"),m.css(t.CSS.TRANSFORM,"translate3d(0,"+(l-s)*f+"px,0)"),u=n}var l,m,s=0,u=0,f=i.mdShrinkSpeedFactor||.5,p=e.throttle(c),h=n.debounce(d,5e3);o.$on("$mdContentLoaded",r)}r(a),angular.isDefined(i.mdScrollShrink)&&d()}}}angular.module("material.components.toolbar",["material.core","material.components.content"]).directive("mdToolbar",e),e.$inject=["$$rAF","$mdConstant","$mdUtil","$mdTheming"]}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.7.1
 */
function(){"use strict";function e(e,t,n,r,o,a,i){function d(d,m,s){function u(t){u.value=!!t,u.queued||(t?(u.queued=!0,e(function(){d.visible=u.value,u.queued=!1},d.delay)):e(function(){d.visible=!1}))}function f(){m.removeClass("md-hide"),g.attr("aria-describedby",m.attr("id")),E.append(m),h(),n(function(){n(function(){h(),d.visible&&m.addClass("md-show")})})}function p(){m.removeClass("md-show").addClass("md-hide"),g.removeAttr("aria-describedby"),e(function(){d.visible||m.detach()},200,!1)}function h(){var e=o.elementRect(m,E),t=o.elementRect(g,E),n="bottom",r={left:t.left+t.width/2-e.width/2,top:t.top+t.height};r.left=Math.min(r.left,E.prop("scrollWidth")-e.width-l),r.left=Math.max(r.left,l),r.top+e.height>E.prop("scrollHeight")&&(r.top=t.top-e.height,n="top"),m.css({top:r.top+"px",left:r.left+"px"}),m.attr("width-32",Math.ceil(e.width/32)),m.attr("md-direction",n)}a(m);for(var g=m.parent(),b=m.parent()[0];b&&b!==i[0]&&b!==document.body&&(!b.tagName||"md-content"!=b.tagName.toLowerCase());)b=b.parentNode;var E=angular.element(b||document.body);angular.isDefined(s.mdDelay)||(d.delay=c),m.detach(),m.attr("role","tooltip"),m.attr("id",s.id||"tooltip_"+o.nextUid()),g.on("focus mouseenter touchstart",function(){u(!0)}),g.on("blur mouseleave touchend touchcancel",function(){r[0].activeElement!==g[0]&&u(!1)}),d.$watch("visible",function(e){e?f():p()});var v=n.throttle(function(){d.visible&&h()});angular.element(t).on("resize",v),d.$on("$destroy",function(){d.visible=!1,m.remove(),angular.element(t).off("resize",v)})}var c=400,l=8;return{restrict:"E",transclude:!0,template:'<div class="md-background"></div><div class="md-content" ng-transclude></div>',scope:{visible:"=?mdVisible",delay:"=?mdDelay"},link:d}}angular.module("material.components.tooltip",["material.core"]).directive("mdTooltip",e),e.$inject=["$timeout","$window","$$rAF","$document","$mdUtil","$mdTheming","$rootElement"]}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.7.1
 */
function(){"use strict";angular.module("material.components.whiteframe",[])}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.7.1
 */
function(){"use strict";function e(e){function t(t,r,o,a){function i(){var e=c.getSelectedItem(),o=!e||c.count()<2||d;if(r.css("display",o?"none":"block"),!o&&t.pagination&&t.pagination.tabData){var a=c.getSelectedIndex(),i=t.pagination.tabData.tabs[a]||{left:0,right:0,width:0},l=r.parent().prop("offsetWidth")-i.right,m=["md-transition-left","md-transition-right","md-no-transition"],s=n>a?0:a>n?1:2;r.removeClass(m.join(" ")).addClass(m[s]).css({left:i.left+"px",right:l+"px"}),n=a}}var d=!!a[0],c=a[1],l=e.throttle(i);c.inkBarElement=r,t.$on("$mdTabsPaginationChanged",l)}var n=0;return{restrict:"E",require:["^?mdNoBar","^mdTabs"],link:t}}angular.module("material.components.tabs").directive("mdTabsInkBar",e),e.$inject=["$$rAF"]}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.7.1
 */
function(){"use strict";function e(e,t,n,r,o,a){function i(i,c,l,m){function s(e,t){if(e){var n=b(e);T.active&&n!==T.page?(t&&t.element.blur(),E(n).then(function(){A=!1,e.element.focus()})):e.element.focus()}}function u(e){var t=T.tabData,n=Math.max(0,Math.min(t.pages.length-1,T.page+e)),r=t.pages[n][e>0?"firstTabIndex":"lastTabIndex"],o=m.itemAt(r);A=!0,s(o)}function f(){function e(){M.css("width","9999px"),angular.forEach(a.tabs,function(e){angular.element(e.element).css("margin-left",e.filler+"px")}),E(b(m.getSelectedItem()))}function t(){p(0),M.css("width",""),r.css("width",""),r.css("margin-left",""),T.page=null,T.active=!1}function n(){return l||i.$watch(function(){o(function(){c[0].offsetParent&&(angular.isFunction(l)&&l(),$(),l=null)},0,!1)})}if(c.prop("offsetParent")){var r=c.find("md-tab");t();var a=T.tabData=g(),d=T.active=a.pages.length>1;d&&e(),i.$evalAsync(function(){i.$broadcast("$mdTabsPaginationChanged")})}else var l=n()}function p(t){function n(t){t.target===M[0]&&(M.off(e.CSS.TRANSITIONEND,n),o.resolve())}if(m.pagingOffset===t)return r.when();var o=r.defer();return m.$$pagingOffset=t,M.css(e.CSS.TRANSFORM,"translate3d("+t+"px,0,0)"),M.on(e.CSS.TRANSITIONEND,n),o.promise}function h(){switch(i.stretchTabs){case"never":return!1;case"always":return!0;default:return a("sm")}}function g(e){function t(){var e=1===s.length?r:o,t=Math.min(Math.floor(e/l),v.length),n=Math.floor(e/t);return a.css("width",n+"px"),g(!0)}var n,r=c.parent().prop("offsetWidth"),o=r-d-1,a=angular.element(v),i=0,l=0,m=[],s=[];return a.css("max-width",""),angular.forEach(v,function(e,t){var a=Math.min(o,e.offsetWidth),d={element:e,left:i,width:a,right:i+a,filler:0};d.page=Math.ceil(d.right/(1===s.length&&t===v.length-1?r:o))-1,d.page>=s.length?(d.filler=o*d.page-d.left,d.right+=d.filler,d.left+=d.filler,n={left:d.left,firstTabIndex:t,lastTabIndex:t,tabs:[d]},s.push(n)):(n.lastTabIndex=t,n.tabs.push(d)),i=d.right,l=Math.max(l,a),m.push(d)}),a.css("max-width",o+"px"),!e&&h()?t():{width:i,max:l,tabs:m,pages:s,tabElements:v}}function b(e){var t=m.indexOf(e);if(-1===t)return 0;var n=T.tabData;return n?n.tabs[t].page:0}function E(e){if(e!==T.page){var t=T.tabData.pages.length-1;return 0>e&&(e=0),e>t&&(e=t),T.hasPrev=e>0,T.hasNext=t>e,T.page=e,i.$broadcast("$mdTabsPaginationChanged"),p(-T.tabData.pages[e].left)}}var v=c[0].getElementsByTagName("md-tab"),$=n.throttle(f),M=c.children(),A=!1,T=i.pagination={page:-1,active:!1,clickNext:function(){A||u(1)},clickPrevious:function(){A||u(-1)}};i.$on("$mdTabsChanged",$),angular.element(t).on("resize",$),i.$on("$destroy",function(){angular.element(t).off("resize",$)}),i.$watch(function(){return m.tabToFocus},s)}var d=64;return{restrict:"A",require:"^mdTabs",link:i}}angular.module("material.components.tabs").directive("mdTabsPagination",e),e.$inject=["$mdConstant","$window","$$rAF","$$q","$timeout","$mdMedia"]}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.7.1
 */
function(){"use strict";function e(e,t,n,r,o,a,i,d){function c(){return b(e.$parent)}function l(t,n){h.content.length&&(h.contentContainer.append(h.content),h.contentScope=e.$parent.$new(),t.append(h.contentContainer),r(h.contentContainer)(h.contentScope),n===!0&&d(function(){a.disconnectScope(h.contentScope)},0,!1))}function m(){o.leave(h.contentContainer).then(function(){h.contentScope&&h.contentScope.$destroy(),h.contentScope=null})}function s(e){h.contentContainer[e?"addClass":"removeClass"]("md-transition-rtl")}function u(n){a.reconnectScope(h.contentScope),t.addClass("active").attr({"aria-selected":!0,tabIndex:0}).on("$md.swipeleft $md.swiperight",p),s(n),o.removeClass(h.contentContainer,"ng-hide"),e.onSelect()}function f(n){a.disconnectScope(h.contentScope),t.removeClass("active").attr({"aria-selected":!1,tabIndex:-1}).off("$md.swipeleft $md.swiperight",p),s(n),o.addClass(h.contentContainer,"ng-hide"),e.onDeselect()}function p(t){e.$apply(function(){/left/.test(t.type)?g.select(g.next()):g.select(g.previous())})}var h=this,g=t.controller("mdTabs");h.contentContainer=angular.element('<div class="md-tab-content ng-hide">'),h.element=t,h.isDisabled=c,h.onAdd=l,h.onRemove=m,h.onSelect=u,h.onDeselect=f;var b=i(n.ngDisabled)}angular.module("material.components.tabs").controller("$mdTab",e),e.$inject=["$scope","$element","$attrs","$compile","$animate","$mdUtil","$parse","$timeout"]}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.7.1
 */
function(){"use strict";function e(e,t,n,r,o){function a(a,i){var d=a.find("md-tab-label");d.length?d.remove():d=angular.isDefined(i.label)?angular.element("<md-tab-label>").html(i.label):angular.element("<md-tab-label>").append(a.contents().remove());var c=a.contents().remove();return function(a,i,l,m){function s(){var e=d.clone();i.append(e),t(e)(a.$parent),E.content=c.clone()}function u(){a.$apply(function(){v.select(E),v.focus(E)})}function f(e){e.keyCode==r.KEY_CODE.SPACE||e.keyCode==r.KEY_CODE.ENTER?(i.triggerHandler("click"),e.preventDefault()):e.keyCode===r.KEY_CODE.LEFT_ARROW?a.$evalAsync(function(){v.focus(v.previous(E))}):e.keyCode===r.KEY_CODE.RIGHT_ARROW&&a.$evalAsync(function(){v.focus(v.next(E))})}function p(){a.$watch("$parent.$index",function(e){v.move(E,e)})}function h(){function e(e){var t=v.getSelectedItem()===E;e&&!t?v.select(E):!e&&t&&v.deselect(E)}var t=a.$parent.$watch("!!("+l.mdActive+")",e);a.$on("$destroy",t)}function g(){function e(e){i.attr("aria-disabled",e);var t=v.getSelectedItem()===E;t&&e&&v.select(v.next()||v.previous())}a.$watch(E.isDisabled,e)}function b(){var e=l.id||"tab_"+n.nextUid();if(i.attr({id:e,role:"tab",tabIndex:-1}),c.length){var t="content_"+e;i.attr("aria-controls")||i.attr("aria-controls",t),E.contentContainer.attr({id:t,role:"tabpanel","aria-labelledby":e})}}var E=m[0],v=m[1];o(i.addClass.bind(i,"md-tab-themed"),0,!1),a.$watch(function(){return l.label},function(){o(function(){v.scope.$broadcast("$mdTabsChanged")},0,!1)}),s(),b();var $=e.attachTabBehavior(a,i,{colorElement:v.inkBarElement});v.add(E),a.$on("$destroy",function(){$(),v.remove(E)}),i.on("$destroy",function(){o(function(){v.scope.$broadcast("$mdTabsChanged")},0,!1)}),angular.isDefined(l.ngClick)||i.on("click",u),i.on("keydown",f),angular.isNumber(a.$parent.$index)&&p(),angular.isDefined(l.mdActive)&&h(),g()}}return{restrict:"E",require:["mdTab","^mdTabs"],controller:"$mdTab",scope:{onSelect:"&mdOnSelect",onDeselect:"&mdOnDeselect",label:"@"},compile:a}}angular.module("material.components.tabs").directive("mdTab",e),e.$inject=["$mdInkRipple","$compile","$mdUtil","$mdConstant","$timeout"]}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.7.1
 */
function(){"use strict";function e(e,t,n){function r(){return b(e.selectedIndex)}function o(){return e.selectedIndex}function a(t,n){p.add(t,n),angular.isDefined(t.element.attr("md-active"))||-1!==e.selectedIndex&&angular.isNumber(e.selectedIndex)&&e.selectedIndex!==h.indexOf(t)?t.onAdd(h.contentArea,!0):(t.onAdd(h.contentArea,!1),h.select(t)),e.$broadcast("$mdTabsChanged")}function i(t,n){if(p.contains(t)&&!n){var o=r()===t,a=u()||s();m(t),p.remove(t),t.onRemove(),e.$broadcast("$mdTabsChanged"),o&&c(a)}}function d(t,n){var o=r()===t;p.remove(t),p.add(t,n),o&&c(t),e.$broadcast("$mdTabsChanged")}function c(t,n){!t||t.isSelected||t.isDisabled()||p.contains(t)&&(angular.isDefined(n)||(n=g(t)<e.selectedIndex),m(r(),n),e.selectedIndex=g(t),t.isSelected=!0,t.onSelect(n),e.$broadcast("$mdTabsChanged"))}function l(e){h.tabToFocus=e}function m(t,n){t&&t.isSelected&&p.contains(t)&&(e.selectedIndex=-1,t.isSelected=!1,t.onDeselect(n))}function s(e,t){return p.next(e||r(),t||f)}function u(e,t){return p.previous(e||r(),t||f)}function f(e){return e&&!e.isDisabled()}var p=n.iterator([],!1),h=this;h.$element=t,h.scope=e;var g=(h.contentArea=angular.element(t[0].querySelector(".md-tabs-content")),h.inRange=p.inRange,h.indexOf=p.indexOf),b=h.itemAt=p.itemAt;h.count=p.count,h.getSelectedItem=r,h.getSelectedIndex=o,h.add=a,h.remove=i,h.move=d,h.select=c,h.focus=l,h.deselect=m,h.next=s,h.previous=u,e.$on("$destroy",function(){m(r());for(var e=p.count()-1;e>=0;e--)i(p[e],!0)})}angular.module("material.components.tabs").controller("$mdTabs",e),e.$inject=["$scope","$element","$mdUtil","$timeout"]}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.7.1
 */
function(){"use strict";function e(e){function t(t,n,r,o,a){function i(){n.attr("role","tablist")}function d(){t.$watch("selectedIndex",function(e,t){if(t!=e){var n=t>e;if(o.deselect(o.itemAt(t),n),o.inRange(e)){for(var r=o.itemAt(e);r&&r.isDisabled();)r=e>t?o.next(r):o.previous(r);o.select(r,n)}}})}t.stretchTabs=r.hasOwnProperty("mdStretchTabs")?r.mdStretchTabs||"always":"auto",e(n),i(),d(),a(t.$parent,function(e){angular.element(n[0].querySelector(".md-header-items")).append(e)})}return{restrict:"E",controller:"$mdTabs",require:"mdTabs",transclude:!0,scope:{selectedIndex:"=?mdSelected"},template:'<section class="md-header" ng-class="{\'md-paginating\': pagination.active}"><button class="md-paginator md-prev" ng-if="pagination.active && pagination.hasPrev" ng-click="pagination.clickPrevious()" aria-hidden="true"></button><div class="md-header-items-container" md-tabs-pagination><div class="md-header-items"><md-tabs-ink-bar></md-tabs-ink-bar></div></div><button class="md-paginator md-next" ng-if="pagination.active && pagination.hasNext" ng-click="pagination.clickNext()" aria-hidden="true"></button></section><section class="md-tabs-content"></section>',link:t}}angular.module("material.components.tabs").directive("mdTabs",e),e.$inject=["$mdTheming"]}(),angular.module("material.core").constant("$MD_THEME_CSS","md-backdrop.md-opaque.md-THEME_NAME-theme {  background-color: '{{foreground-4-0.5}}'; }md-bottom-sheet.md-THEME_NAME-theme {  background-color: '{{background-50}}';  border-top-color: '{{background-300}}'; }  md-bottom-sheet.md-THEME_NAME-theme.md-list md-item {    color: '{{foreground-1}}'; }  md-bottom-sheet.md-THEME_NAME-theme .md-subheader {    background-color: '{{background-50}}'; }  md-bottom-sheet.md-THEME_NAME-theme .md-subheader {    color: '{{foreground-1}}'; }md-toolbar .md-button.md-THEME_NAME-theme.md-fab {  background-color: white; }.md-button.md-THEME_NAME-theme {  border-radius: 3px; }  .md-button.md-THEME_NAME-theme:not([disabled]):hover, .md-button.md-THEME_NAME-theme:not([disabled]):focus {    background-color: '{{background-500-0.2}}'; }  .md-button.md-THEME_NAME-theme.md-primary {    color: '{{primary-color}}'; }    .md-button.md-THEME_NAME-theme.md-primary.md-raised, .md-button.md-THEME_NAME-theme.md-primary.md-fab {      color: '{{primary-contrast}}';      background-color: '{{primary-color}}'; }      .md-button.md-THEME_NAME-theme.md-primary.md-raised:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-primary.md-raised:not([disabled]):focus, .md-button.md-THEME_NAME-theme.md-primary.md-fab:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-primary.md-fab:not([disabled]):focus {        background-color: '{{primary-600}}'; }  .md-button.md-THEME_NAME-theme.md-fab {    border-radius: 50%;    background-color: '{{accent-color}}';    color: '{{accent-contrast}}'; }    .md-button.md-THEME_NAME-theme.md-fab:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-fab:not([disabled]):focus {      background-color: '{{accent-A700}}'; }  .md-button.md-THEME_NAME-theme.md-raised {    color: '{{background-contrast}}';    background-color: '{{background-50}}'; }    .md-button.md-THEME_NAME-theme.md-raised:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-raised:not([disabled]):focus {      background-color: '{{background-200}}'; }  .md-button.md-THEME_NAME-theme.md-warn {    color: '{{warn-color}}'; }    .md-button.md-THEME_NAME-theme.md-warn.md-raised, .md-button.md-THEME_NAME-theme.md-warn.md-fab {      color: '{{warn-contrast}}';      background-color: '{{warn-color}}'; }      .md-button.md-THEME_NAME-theme.md-warn.md-raised:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-warn.md-raised:not([disabled]):focus, .md-button.md-THEME_NAME-theme.md-warn.md-fab:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-warn.md-fab:not([disabled]):focus {        background-color: '{{warn-700}}'; }  .md-button.md-THEME_NAME-theme.md-accent {    color: '{{accent-color}}'; }    .md-button.md-THEME_NAME-theme.md-accent.md-raised, .md-button.md-THEME_NAME-theme.md-accent.md-fab {      color: '{{accent-contrast}}';      background-color: '{{accent-color}}'; }      .md-button.md-THEME_NAME-theme.md-accent.md-raised:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-accent.md-raised:not([disabled]):focus, .md-button.md-THEME_NAME-theme.md-accent.md-fab:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-accent.md-fab:not([disabled]):focus {        background-color: '{{accent-700}}'; }  .md-button.md-THEME_NAME-theme[disabled], .md-button.md-THEME_NAME-theme.md-raised[disabled], .md-button.md-THEME_NAME-theme.md-fab[disabled] {    color: '{{foreground-3}}';    background-color: transparent;    cursor: not-allowed; }md-card.md-THEME_NAME-theme {  border-radius: 2px; }  md-card.md-THEME_NAME-theme .md-card-image {    border-radius: 2px 2px 0 0; }md-checkbox.md-THEME_NAME-theme .md-ripple {  color: '{{accent-600}}'; }md-checkbox.md-THEME_NAME-theme.md-checked .md-ripple {  color: '{{background-600}}'; }md-checkbox.md-THEME_NAME-theme .md-icon {  border-color: '{{foreground-2}}'; }md-checkbox.md-THEME_NAME-theme.md-checked .md-icon {  background-color: '{{accent-color-0.87}}'; }md-checkbox.md-THEME_NAME-theme.md-checked .md-icon:after {  border-color: '{{background-200}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary .md-ripple {  color: '{{primary-600}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-ripple {  color: '{{background-600}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary .md-icon {  border-color: '{{foreground-2}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-icon {  background-color: '{{primary-color-0.87}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-icon:after {  border-color: '{{background-200}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn .md-ripple {  color: '{{warn-600}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn .md-icon {  border-color: '{{foreground-2}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-icon {  background-color: '{{warn-color-0.87}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-icon:after {  border-color: '{{background-200}}'; }md-checkbox.md-THEME_NAME-theme[disabled] .md-icon {  border-color: '{{foreground-3}}'; }md-checkbox.md-THEME_NAME-theme[disabled].md-checked .md-icon {  background-color: '{{foreground-3}}'; }md-content.md-THEME_NAME-theme {  background-color: '{{background-hue-3}}'; }md-dialog.md-THEME_NAME-theme {  border-radius: 4px;  background-color: '{{background-hue-3}}'; }  md-dialog.md-THEME_NAME-theme.md-content-overflow .md-actions {    border-top-color: '{{foreground-4}}'; }md-divider.md-THEME_NAME-theme {  border-top-color: '{{foreground-4}}'; }md-input-container.md-THEME_NAME-theme .md-input {  color: '{{foreground-1}}';  border-color: '{{foreground-4}}';  text-shadow: '{{foreground-shadow}}'; }  md-input-container.md-THEME_NAME-theme .md-input::-webkit-input-placeholder, md-input-container.md-THEME_NAME-theme .md-input::-moz-placeholder, md-input-container.md-THEME_NAME-theme .md-input:-moz-placeholder, md-input-container.md-THEME_NAME-theme .md-input:-ms-input-placeholder {    color: '{{foreground-3}}'; }md-input-container.md-THEME_NAME-theme label, md-input-container.md-THEME_NAME-theme .md-placeholder {  text-shadow: '{{foreground-shadow}}';  color: '{{foreground-3}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-has-value label {  color: '{{foreground-2}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused .md-input {  border-color: '{{primary-500}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused label {  color: '{{primary-500}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused.md-accent .md-input {  border-color: '{{accent-500}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused.md-accent label {  color: '{{accent-500}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused.md-warn .md-input {  border-color: '{{warn-500}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused.md-warn label {  color: '{{warn-500}}'; }md-input-container.md-THEME_NAME-theme.md-input-invalid .md-input {  border-color: '{{warn-500}}'; }md-input-container.md-THEME_NAME-theme.md-input-invalid label {  color: '{{warn-500}}'; }md-input-container.md-THEME_NAME-theme.md-input-invalid ng-message, md-input-container.md-THEME_NAME-theme.md-input-invalid data-ng-message, md-input-container.md-THEME_NAME-theme.md-input-invalid x-ng-message, md-input-container.md-THEME_NAME-theme.md-input-invalid [ng-message], md-input-container.md-THEME_NAME-theme.md-input-invalid [data-ng-message], md-input-container.md-THEME_NAME-theme.md-input-invalid [x-ng-message], md-input-container.md-THEME_NAME-theme.md-input-invalid .md-char-counter {  color: '{{warn-500}}'; }md-input-container.md-THEME_NAME-theme .md-input[disabled] {  border-bottom-color: transparent;  color: '{{foreground-3}}';  background-image: linear-gradient(to right, '{{foreground-4}}' 0%, '{{foreground-4}}' 33%, transparent 0%); }md-progress-circular.md-THEME_NAME-theme {  background-color: transparent; }  md-progress-circular.md-THEME_NAME-theme .md-inner .md-gap {    border-top-color: '{{primary-color}}';    border-bottom-color: '{{primary-color}}'; }  md-progress-circular.md-THEME_NAME-theme .md-inner .md-left .md-half-circle, md-progress-circular.md-THEME_NAME-theme .md-inner .md-right .md-half-circle {    border-top-color: '{{primary-color}}'; }  md-progress-circular.md-THEME_NAME-theme .md-inner .md-right .md-half-circle {    border-right-color: '{{primary-color}}'; }  md-progress-circular.md-THEME_NAME-theme .md-inner .md-left .md-half-circle {    border-left-color: '{{primary-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-warn .md-inner .md-gap {    border-top-color: '{{warn-color}}';    border-bottom-color: '{{warn-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-warn .md-inner .md-left .md-half-circle, md-progress-circular.md-THEME_NAME-theme.md-warn .md-inner .md-right .md-half-circle {    border-top-color: '{{warn-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-warn .md-inner .md-right .md-half-circle {    border-right-color: '{{warn-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-warn .md-inner .md-left .md-half-circle {    border-left-color: '{{warn-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-accent .md-inner .md-gap {    border-top-color: '{{accent-color}}';    border-bottom-color: '{{accent-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-accent .md-inner .md-left .md-half-circle, md-progress-circular.md-THEME_NAME-theme.md-accent .md-inner .md-right .md-half-circle {    border-top-color: '{{accent-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-accent .md-inner .md-right .md-half-circle {    border-right-color: '{{accent-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-accent .md-inner .md-left .md-half-circle {    border-left-color: '{{accent-color}}'; }md-progress-linear.md-THEME_NAME-theme .md-container {  background-color: '{{primary-100}}'; }md-progress-linear.md-THEME_NAME-theme .md-bar {  background-color: '{{primary-color}}'; }md-progress-linear.md-THEME_NAME-theme.md-warn .md-container {  background-color: '{{warn-100}}'; }md-progress-linear.md-THEME_NAME-theme.md-warn .md-bar {  background-color: '{{warn-color}}'; }md-progress-linear.md-THEME_NAME-theme.md-accent .md-container {  background-color: '{{accent-100}}'; }md-progress-linear.md-THEME_NAME-theme.md-accent .md-bar {  background-color: '{{accent-color}}'; }md-progress-linear.md-THEME_NAME-theme[md-mode=buffer].md-warn .md-bar1 {  background-color: '{{warn-100}}'; }md-progress-linear.md-THEME_NAME-theme[md-mode=buffer].md-warn .md-dashed:before {  background: radial-gradient('{{warn-100}}' 0%, '{{warn-100}}' 16%, transparent 42%); }md-progress-linear.md-THEME_NAME-theme[md-mode=buffer].md-accent .md-bar1 {  background-color: '{{accent-100}}'; }md-progress-linear.md-THEME_NAME-theme[md-mode=buffer].md-accent .md-dashed:before {  background: radial-gradient('{{accent-100}}' 0%, '{{accent-100}}' 16%, transparent 42%); }md-radio-button.md-THEME_NAME-theme .md-off {  border-color: '{{foreground-2}}'; }md-radio-button.md-THEME_NAME-theme .md-on {  background-color: '{{accent-color-0.87}}'; }md-radio-button.md-THEME_NAME-theme.md-checked .md-off {  border-color: '{{accent-color-0.87}}'; }md-radio-button.md-THEME_NAME-theme.md-checked .md-ink-ripple {  color: '{{accent-color-0.87}}'; }md-radio-button.md-THEME_NAME-theme .md-container .md-ripple {  color: '{{accent-600}}'; }md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary .md-on {  background-color: '{{primary-color-0.87}}'; }md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-off {  border-color: '{{primary-color-0.87}}'; }md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-ink-ripple {  color: '{{primary-color-0.87}}'; }md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary .md-container .md-ripple {  color: '{{primary-600}}'; }md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn .md-on {  background-color: '{{warn-color-0.87}}'; }md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-off {  border-color: '{{warn-color-0.87}}'; }md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-ink-ripple {  color: '{{warn-color-0.87}}'; }md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn .md-container .md-ripple {  color: '{{warn-600}}'; }md-radio-button.md-THEME_NAME-theme[disabled] .md-container .md-off {  border-color: '{{foreground-3}}'; }md-radio-button.md-THEME_NAME-theme[disabled] .md-container .md-on {  border-color: '{{foreground-3}}'; }md-radio-group.md-THEME_NAME-theme:focus:not(:empty) {  border-color: '{{foreground-1}}'; }md-sidenav.md-THEME_NAME-theme {  background-color: '{{background-hue-3}}'; }md-slider.md-THEME_NAME-theme .md-track {  background-color: '{{foreground-3}}'; }md-slider.md-THEME_NAME-theme .md-track-ticks {  background-color: '{{foreground-4}}'; }md-slider.md-THEME_NAME-theme .md-focus-thumb {  background-color: '{{foreground-2}}'; }md-slider.md-THEME_NAME-theme .md-focus-ring {  border-color: '{{foreground-4}}'; }md-slider.md-THEME_NAME-theme .md-disabled-thumb {  border-color: '{{background-hue-3}}'; }md-slider.md-THEME_NAME-theme.md-min .md-thumb:after {  background-color: '{{background-hue-3}}'; }md-slider.md-THEME_NAME-theme .md-track.md-track-fill {  background-color: '{{primary-color}}'; }md-slider.md-THEME_NAME-theme .md-thumb:after {  border-color: '{{primary-color}}';  background-color: '{{primary-color}}'; }md-slider.md-THEME_NAME-theme .md-sign {  background-color: '{{primary-color}}'; }  md-slider.md-THEME_NAME-theme .md-sign:after {    border-top-color: '{{primary-color}}'; }md-slider.md-THEME_NAME-theme .md-thumb-text {  color: '{{primary-contrast}}'; }md-slider.md-THEME_NAME-theme.md-warn .md-track-fill {  background-color: '{{warn-color}}'; }md-slider.md-THEME_NAME-theme.md-warn .md-thumb:after {  border-color: '{{warn-color}}';  background-color: '{{warn-color}}'; }md-slider.md-THEME_NAME-theme.md-warn .md-sign {  background-color: '{{warn-color}}'; }  md-slider.md-THEME_NAME-theme.md-warn .md-sign:after {    border-top-color: '{{warn-color}}'; }md-slider.md-THEME_NAME-theme.md-warn .md-thumb-text {  color: '{{warn-contrast}}'; }md-slider.md-THEME_NAME-theme.md-primary .md-track-fill {  background-color: '{{primary-color}}'; }md-slider.md-THEME_NAME-theme.md-primary .md-thumb:after {  border-color: '{{primary-color}}';  background-color: '{{primary-color}}'; }md-slider.md-THEME_NAME-theme.md-primary .md-sign {  background-color: '{{primary-color}}'; }  md-slider.md-THEME_NAME-theme.md-primary .md-sign:after {    border-top-color: '{{primary-color}}'; }md-slider.md-THEME_NAME-theme.md-primary .md-thumb-text {  color: '{{primary-contrast}}'; }md-slider.md-THEME_NAME-theme[disabled] .md-thumb:after {  border-color: '{{foreground-3}}'; }md-slider.md-THEME_NAME-theme[disabled]:not(.md-min) .md-thumb:after {  background-color: '{{foreground-3}}'; }.md-subheader.md-THEME_NAME-theme {  color: '{{ foreground-2-0.23 }}';  background-color: '{{background-hue-3}}'; }  .md-subheader.md-THEME_NAME-theme.md-primary {    color: '{{primary-color}}'; }  .md-subheader.md-THEME_NAME-theme.md-accent {    color: '{{accent-color}}'; }  .md-subheader.md-THEME_NAME-theme.md-warn {    color: '{{warn-color}}'; }md-switch.md-THEME_NAME-theme .md-thumb {  background-color: '{{background-50}}'; }md-switch.md-THEME_NAME-theme .md-bar {  background-color: '{{background-500}}'; }md-switch.md-THEME_NAME-theme.md-checked .md-thumb {  background-color: '{{accent-color}}'; }md-switch.md-THEME_NAME-theme.md-checked .md-bar {  background-color: '{{accent-color-0.5}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-primary .md-thumb {  background-color: '{{primary-color}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-primary .md-bar {  background-color: '{{primary-color-0.5}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-warn .md-thumb {  background-color: '{{warn-color}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-warn .md-bar {  background-color: '{{warn-color-0.5}}'; }md-switch.md-THEME_NAME-theme[disabled] .md-thumb {  background-color: '{{background-400}}'; }md-switch.md-THEME_NAME-theme[disabled] .md-bar {  background-color: '{{foreground-4}}'; }md-switch.md-THEME_NAME-theme:focus .md-label:not(:empty) {  border-color: '{{foreground-1}}';  border-style: dotted; }md-tabs.md-THEME_NAME-theme .md-header {  background-color: '{{primary-color}}'; }md-tabs.md-THEME_NAME-theme.md-accent .md-header {  background-color: '{{accent-color}}'; }md-tabs.md-THEME_NAME-theme.md-accent md-tab:not([disabled]) {  color: '{{accent-100}}'; }  md-tabs.md-THEME_NAME-theme.md-accent md-tab:not([disabled]).active {    color: '{{accent-contrast}}'; }md-tabs.md-THEME_NAME-theme.md-warn .md-header {  background-color: '{{warn-color}}'; }md-tabs.md-THEME_NAME-theme.md-warn md-tab:not([disabled]) {  color: '{{warn-100}}'; }  md-tabs.md-THEME_NAME-theme.md-warn md-tab:not([disabled]).active {    color: '{{warn-contrast}}'; }md-tabs.md-THEME_NAME-theme md-tabs-ink-bar {  color: '{{primary-contrast}}';  background: '{{primary-contrast}}'; }md-tabs.md-THEME_NAME-theme md-tab {  color: '{{primary-100}}'; }  md-tabs.md-THEME_NAME-theme md-tab.active {    color: '{{primary-contrast}}'; }  md-tabs.md-THEME_NAME-theme md-tab[disabled] {    color: '{{foreground-4}}'; }  md-tabs.md-THEME_NAME-theme md-tab:focus {    color: '{{primary-contrast}}';    background-color: '{{primary-contrast-0.1}}'; }  md-tabs.md-THEME_NAME-theme md-tab .md-ripple-container {    color: '{{primary-contrast}}'; }md-input-group.md-THEME_NAME-theme input, md-input-group.md-THEME_NAME-theme textarea {  text-shadow: '{{foreground-shadow}}'; }  md-input-group.md-THEME_NAME-theme input::-webkit-input-placeholder, md-input-group.md-THEME_NAME-theme input::-moz-placeholder, md-input-group.md-THEME_NAME-theme input:-moz-placeholder, md-input-group.md-THEME_NAME-theme input:-ms-input-placeholder, md-input-group.md-THEME_NAME-theme textarea::-webkit-input-placeholder, md-input-group.md-THEME_NAME-theme textarea::-moz-placeholder, md-input-group.md-THEME_NAME-theme textarea:-moz-placeholder, md-input-group.md-THEME_NAME-theme textarea:-ms-input-placeholder {    color: '{{foreground-3}}'; }md-input-group.md-THEME_NAME-theme label {  text-shadow: '{{foreground-shadow}}';  color: '{{foreground-3}}'; }md-input-group.md-THEME_NAME-theme input, md-input-group.md-THEME_NAME-theme textarea {  color: '{{foreground-1}}';  border-color: '{{foreground-4}}'; }md-input-group.md-THEME_NAME-theme.md-input-focused input, md-input-group.md-THEME_NAME-theme.md-input-focused textarea {  border-color: '{{primary-500}}'; }md-input-group.md-THEME_NAME-theme.md-input-focused label {  color: '{{primary-500}}'; }md-input-group.md-THEME_NAME-theme.md-input-focused.md-accent input, md-input-group.md-THEME_NAME-theme.md-input-focused.md-accent textarea {  border-color: '{{accent-500}}'; }md-input-group.md-THEME_NAME-theme.md-input-focused.md-accent label {  color: '{{accent-500}}'; }md-input-group.md-THEME_NAME-theme.md-input-has-value:not(.md-input-focused) label {  color: '{{foreground-2}}'; }md-input-group.md-THEME_NAME-theme .md-input[disabled] {  border-bottom-color: '{{foreground-4}}';  color: '{{foreground-3}}'; }md-toast.md-THEME_NAME-theme {  background-color: '{{foreground-1}}';  color: '{{background-50}}'; }  md-toast.md-THEME_NAME-theme .md-button {    color: '{{background-50}}'; }    md-toast.md-THEME_NAME-theme .md-button.md-highlight {      color: '{{primary-A200}}'; }      md-toast.md-THEME_NAME-theme .md-button.md-highlight.md-accent {        color: '{{accent-A200}}'; }      md-toast.md-THEME_NAME-theme .md-button.md-highlight.md-warn {        color: '{{warn-A200}}'; }md-toolbar.md-THEME_NAME-theme {  background-color: '{{primary-color}}';  color: '{{primary-contrast}}'; }  md-toolbar.md-THEME_NAME-theme .md-button {    color: '{{primary-contrast}}'; }  md-toolbar.md-THEME_NAME-theme.md-accent {    background-color: '{{accent-color}}';    color: '{{accent-contrast}}'; }  md-toolbar.md-THEME_NAME-theme.md-warn {    background-color: '{{warn-color}}';    color: '{{warn-contrast}}'; }md-tooltip.md-THEME_NAME-theme {  color: '{{background-A100}}'; }  md-tooltip.md-THEME_NAME-theme .md-background {    background-color: '{{foreground-2}}'; }");
(function () {

    var app = angular.module('dealtday', [
        'ngMaterial',
        'ngRoute',
        'ngResource',
        'event',
        'answer',
        'friend',
        'profile'
    ]);

    app.value('eventApi', '/api/event/');
    app.value('answerApi', '/api/answer/');
    app.value('voteApi', '/api/vote/');
    app.value('getMyVotes', '/api/vote/?evento=');
    app.value('getFriends', '/api/friends/');
    app.value('friendRequestApi', '/api/friend_request/');
    app.value('getMyInfo', '/api/me/');
    app.value('changeNick', '/api/nick/');
    app.value('changePass', '/api/change-password/');

    app.config(['$httpProvider', function ($httpProvider) {
        $httpProvider.defaults.xsrfCookieName = 'csrftoken';
        $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
    }]);

    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: '/static/templates/landing.html'
        }).when('/eventos/', {
            templateUrl: '/static/event/templates/event.html'
        }).when('/eventos/crear/', {
            templateUrl: '/static/event/templates/create-event.html'
        }).when('/eventos/finalizados/:id', {
            templateUrl: '/static/event/templates/event-detail-finished.html'
        }).when('/eventos/:id', {
            templateUrl: '/static/event/templates/event-detail.html'
        }).when('/amigos/', {
            templateUrl: '/static/friends/templates/friends.html'
        }).when('/perfil/', {
            templateUrl: '/static/profile/templates/profile.html',
            controller: 'ProfileCtrl',
            resolve: {
                user: function (UserInfo) {
                    return UserInfo.retrieveInfo();
                }
            }
        }).otherwise('/eventos/');
    }]);

    app.config(function ($resourceProvider) {
        $resourceProvider.defaults.stripTrailingSlashes = false;
    });

    app.config(function ($mdThemingProvider) {
        /*$mdThemingProvider.definePalette('dealtdayColors', {
         '50': 'DEE7E9',
         '100': 'B0C6CB',
         '200': '81A4AC',
         '300': '4D7F8A',
         '400': '276471',
         '500': '024959',
         '600': '014251',
         '700': '013B48',
         '800': '01333F',
         '900': '01262E',
         'A100': '05C6F2',
         'A200': '0488A5',
         'A400': '025366',
         'A700': '01343F',
         'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
         // on this palette should be dark or light
         'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
         '200', '300', '400', 'A100'],
         'contrastLightColors': undefined    // could also specify this if default was 'dark'
         });
         $mdThemingProvider.theme('default')
         .primaryPalette('dealtdayColors')
         .accentPalette('red')
         .warnPalette('red');*/

        $mdThemingProvider.theme('default')
            .primaryPalette('indigo')
            .accentPalette('amber');
    });

    app.controller('MenuCtrl', function ($scope, $timeout, $mdSidenav, $log, $location, UserInfo) {

        $scope.currentPage = '';

        $scope.user = UserInfo.userInfo;

        $scope.toggleLeft = function () {
            $mdSidenav('left').toggle();
        };
        $scope.toggleRight = function () {
            $mdSidenav('right').toggle()
                .then(function () {
                    $log.debug("toggle RIGHT is done");
                });
        };

        $scope.navLinks = [
            {url: 'eventos', Title: 'Eventos'},
            {url: 'amigos', Title: 'Amigos'},
            {url: 'perfil', Title: 'Perfil'}
        ];

        $scope.close = function () {
            $mdSidenav('left').close();
        };

        $scope.navClass = function (page) {
            var currentRoute = $location.path().substring(1).split('/')[0];
            $scope.currentPage = currentRoute.charAt(0).toUpperCase() + currentRoute.slice(1);
            return page === currentRoute ? 'active' : '';
        };

    });

    app.run(function (UserInfo, $http) {
        $http.defaults.cache = false;
        UserInfo.retrieveInfo();
    });

})();
(function () {

    var app = angular.module('authService', ['ngCookies']);

    app.value('loginUrl', '/api/login/');
    app.value('logoutUrl', '/logout/');
    app.value('registerApi', '/api/user/register/');
    app.value('forgotApi', '/api/forgot-password/');
    app.value('templateRegistro', '/static/profile/templates/registro.html');
    app.value('templateRecuperarPass', '/static/profile/templates/recuperar-pass.html');

    app.service('AuthService', ['$http', '$q', '$window', '$cookies', 'loginUrl', 'logoutUrl', 'registerApi', 'forgotApi', function ($http, $q, $window, $cookies, loginUrl, logout, registerApi, forgotApi) {
        var Authentication = {

            login: function (email, password) {
                var deferred = $q.defer();

                $http.post(loginUrl, {
                    email: email,
                    password: password
                })
                    .success(function (response, status, headers, config) {

                        deferred.resolve(response, status, headers, config);
                    })
                    .error(function (response, status, headers, config) {
                        deferred.reject(response, status, headers, config);
                    });

                return deferred.promise;
            },

            logout: function () {
                $http.get(logout)
                    .success(function (response, status, headers, config) {

                        $window.location = '/';
                    }).error(function (response, status, headers, config) {
                    });
            },

            register: function (email, pass, pass2) {
                var deferred = $q.defer();

                $http.post(registerApi, {
                        email: email,
                        password: pass,
                        password_2: pass2
                    },
                    {
                        // Metodo para devolver el string del error.
                        transformResponse: [
                            function (data) {
                                var wrapped = angular.fromJson(data);
                                var first = true;
                                angular.forEach(wrapped, function (item) {
                                    if(first){
                                        first = false;
                                        error = item[0];
                                    }
                                });
                                return error;
                            }
                        ]
                    })
                    .success(function (response, status, headers, config) {
                        deferred.resolve(response, status, headers, config);
                    })
                    .error(function (response, status, headers, config) {
                        deferred.reject(response, status, headers, config);
                    });

                return deferred.promise;
            },

            forgot: function (email) {
                var deferred = $q.defer();

                $http.post(forgotApi, {
                    email: email
                })
                    .success(function (response, status, headers, config) {
                        deferred.resolve(response, status, headers, config);
                    })
                    .error(function (response, status, headers, config) {
                        deferred.reject(response, status, headers, config);
                    });

                return deferred.promise;
            }
        };

        return Authentication;
    }]);

})();
(function () {

    var app = angular.module('profile', ['ngMaterial', 'ngRoute', 'ngMessages', 'authService']);

    // Setting up CSRF integration with Django
    app.config(function ($httpProvider) {
        $httpProvider.defaults.xsrfCookieName = 'csrftoken';
        $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
    });

    app.config(function ($mdThemingProvider) {
        /*$mdThemingProvider.theme('default')
            .primaryPalette('red', {
                'default': '400'
            })
            .accentPalette('green', {});*/

        $mdThemingProvider.theme('default')
            .primaryPalette('indigo')
            .accentPalette('amber');
    });

    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: '/static/profile/templates/login.html'
        }).when('/registro/', {
            templateUrl: '/static/profile/templates/registro.html'
        }).when('/recuperar/', {
            templateUrl: '/static/profile/templates/recuperar-pass.html'
        }).otherwise({
            redirectTo: '/'
        });
    }]);

})();
angular.module('profile').controller('ForgotCtrl', ['$scope', 'AuthService', '$mdDialog', '$location', function ($scope, AuthService, $mdDialog, $location) {

    $scope.goLogin = function () {
        $location.path('/');
    };

    $scope.loading = false;

    $scope.forgot = function () {
        $scope.loading = true;
        AuthService.forgot($scope.user.email)
            .then(
            function (data) {
                $scope.loading = false;

                $scope.user.email = '';

                $mdDialog.show(
                    $mdDialog.alert()
                        .title('¡ ENVIADO !')
                        .content('Revisa tu correo para restablecer tu contraseña')
                        .ariaLabel('Recuperar contraseña')
                        .ok('OK')
                );
            },
            function (response, status, headers, config) {
                $scope.loading = false;

                $scope.user.email = '';

                $mdDialog.show(
                    $mdDialog.alert()
                        .title('¡ ERROR !')
                        .content('Se ha producido un error al restablecer la contraseña.')
                        .ariaLabel('Error enviando correo')
                        .ok('OK')
                );
            });
    };

}]);
angular.module('profile').controller('LoginCtrl', ['$scope', 'AuthService', '$window', '$mdDialog', '$location', function ($scope, AuthService, $window, $mdDialog, $location) {

    $scope.goRegistro = function () {
        $location.path('/registro/');
    };

    $scope.goRecuperarPass = function () {
        $location.path('/recuperar/');
    };

    $scope.loading = false;

    $scope.login = function () {
        $scope.loading = true;
        AuthService.login($scope.user.email, $scope.user.password)
            .then(
            function () {
                $scope.loading = false;
                $window.location = '/';
            },
            function (error) {
                $scope.loading = false;
                $scope.user.email = '';
                $scope.user.password = '';

                $mdDialog.show(
                    $mdDialog.alert()
                        .title('¡ ERROR !')
                        .content(error[Object.keys(error)])
                        .ariaLabel('Error registrandose')
                        .ok('OK')
                );
            });
    };

}]);
angular.module('profile').controller('ProfileCtrl', ['$scope', 'user', 'changeNick', 'changePass', '$http', 'UserInfo', '$mdToast', function ($scope, user, changeNick, changePass, $http, UserInfo, $mdToast) {

    $scope.nick = user.nick;

    $scope.changeNick = function (nick) {

        $http.post(changeNick, {nick: nick})
            .success(function (data) {
                UserInfo.retrieveInfo();
                $mdToast.show(
                    $mdToast.simple()
                        .content('Nick cambiado')
                        .position('bottom right')
                        .hideDelay(1500)
                );
            })
            .error(function (error) {
                console.log(error);
                $mdToast.show(
                    $mdToast.simple()
                        .content('Error cambiando nick')
                        .position('bottom right')
                        .hideDelay(1500)
                );
            });
    };

    $scope.changePass = function () {

        $http.post(changePass, {password: $scope.user.password, password_2: $scope.user.password_repeat})
            .success(function (data) {
                $mdToast.show(
                    $mdToast.simple()
                        .content('Contraseña cambiada')
                        .position('bottom right')
                        .hideDelay(1500)
                );
            })
            .error(function (error) {
                console.log(error);
                $mdToast.show(
                    $mdToast.simple()
                        .content('Error cambiando contraseña')
                        .position('bottom right')
                        .hideDelay(1500)
                );
            });
    };

}]);
angular.module('profile').controller('RegisterCtrl', ['$scope', 'AuthService', '$mdDialog', '$location', function ($scope, AuthService, $mdDialog, $location) {

    $scope.goLogin = function () {
        $location.path('/');
    };

    $scope.loading = false;

    $scope.register = function () {
        $scope.loading = true;
        AuthService.register($scope.user.email, $scope.user.password, $scope.user.password_repeat)
            .then(
            function (data) {
                $scope.loading = false;

                $scope.user.password = '';
                $scope.user.password_repeat = '';

                $mdDialog.show(
                    $mdDialog.alert()
                        .title('¡ ENHORABUENA !')
                        .content('Revisa tu correo para activar tu cuenta')
                        .ariaLabel('Registro correcto')
                        .ok('OK')
                );
            },
            function (response, status, headers, config) {
                $scope.loading = false;

                $scope.user.password = '';
                $scope.user.password_repeat = '';

                $mdDialog.show(
                    $mdDialog.alert()
                        .title('¡ ERROR !')
                        .content(response)
                        .ariaLabel('Error registrandose')
                        .ok('OK')
                );
            });
    };

}]);
angular.module('profile').directive('compareTo', function () {
    return {
        require: "ngModel",
        scope: {
            repeatPassword: '=compareTo'
        },
        link: function (scope, element, attr, ngModel) {
            ngModel.$validators.compareTo = function (modelValue, viewValue) {
                return viewValue == scope.repeatPassword;
            };

            scope.$watch("repeatPassword", function () {
                ngModel.$validate();
            });
        }
    }
});
angular.module('profile').directive('ngEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if(event.which === 13) {
                scope.$apply(function (){
                    scope.$eval(attrs.ngEnter);
                });

                event.preventDefault();
            }
        });
    };
});
angular.module('profile').service('UserInfo', ['$http', 'getMyInfo', function ($http, getMyInfo) {

    var user = {
        userInfo: {
            nick: '',
            first_name: '',
            last_name: '',
            email: ''
        },

        retrieveInfo: function () {

            return $http.get(getMyInfo).then(function (data) {
                user.userInfo.nick = data.data.nick;
                user.userInfo.first_name = data.data.user.first_name;
                user.userInfo.last_name = data.data.user.last_name;
                user.userInfo.email = data.data.user.email;

                return data.data;
            });
        }

    };

    return user;

}]);
var app = angular.module('event', ['mdDateTime', 'ngMessages']);

angular.module('event').
    factory('Event', ['$resource', 'eventApi', function ($resource, eventApi) {
        return $resource(eventApi + ':id', {id: '@id'}, {
            get: {
                method: 'GET',
                isArray: true
            },
            detail: {
                method: 'GET'
            },
            save: {
                method: 'POST',
                transformRequest: function (data, headers) {
                    delete data.date;
                    return JSON.stringify(data);
                }
            }
        });
    }]);
angular.module('event').directive('autoCompleteEmail', ['$http', function ($http) {
    return {
        restrict: 'AE',
        scope: {
            email: '=',
            friends: '=friends',
            event: '=event'
        },
        templateUrl: '/static/event/templates/autocomplete-email.html',
        link: function (scope, elem, attrs) {

            var without_friends = 'Aun no tienes amigos';
            var not_found = 'Ningun amigo con ese nick';

            scope.suggestions = [];
            scope.idInvite = '';
            scope.nick = '';
            scope.canInvite = false;

            scope.search = function () {
                scope.suggestions = [];

                if (scope.searchText != null) {
                    var q = scope.searchText.toLowerCase().trim();
                }

                if (scope.friends.length == 0) {
                    scope.suggestions.push({
                        friend: {
                            nick: without_friends
                        }
                    });

                } else {

                    for (var i = 0; i < scope.friends.length && scope.suggestions.length < 4; i++) {
                        var friend = scope.friends[i];
                        if (friend.friend.nick.toLowerCase().indexOf(q) === 0)
                            scope.suggestions.push(friend);
                    }

                    if (scope.suggestions.length == 0 && scope.searchText != null) {
                        scope.suggestions.push({
                            friend: {
                                nick: not_found
                            }
                        });
                    }
                }
            };

            scope.addToSelectedTags = function (friend) {
                if (friend.friend.nick != without_friends && friend.friend.nick != not_found) {
                    scope.searchText = friend.friend.nick;
                    scope.nick = friend.friend.nick;
                    scope.idInvite = friend.friend.id;
                    scope.suggestions = [];
                    scope.canInvite = true;
                } else {
                    scope.searchText = '';
                    scope.suggestions = [];
                }
            };

            scope.$watch('searchText', function (val) {
                if (scope.nick != val)
                    scope.canInvite = false;
            });

        }, controller: function ($scope, $http, $mdToast) {
            $scope.sendInvitation = function () {
                $http.post('/api/share/ ', {event: $scope.event, profile: $scope.idInvite})
                    .success(function (data) {
                        $scope.$emit('refresh_event');
                        
                        $mdToast.show(
                                $mdToast.simple()
                                    .content('Usuario añadido')
                                    .position('bottom right')
                                    .hideDelay(1500)
                            );
                    })
                    .error(function (error) {
                        $scope.$root.$emit('refresh_event');
                        console.log(error);

                        if (error['YaInvitado'] != null) {
                            $mdToast.show(
                                $mdToast.simple()
                                    .content(error['YaInvitado'][0])
                                    .position('bottom right')
                                    .hideDelay(1500)
                            );
                        }
                    });
            };
        }
    }
}]);
angular.module('event').directive('checkTime', function () {
    return {
        require: 'ngModel',
        scope: {
            time: "=checkTime"
        },
        link: function (scope, elm, attrs, ctrl) {
            ctrl.$validators.checkTime = function (modelValue, viewValue) {

                if (moment(scope.$parent.event.time_to_close).diff(moment().format(), 'minutes') >= 60) {
                    return true;
                }

                if (!angular.isUndefined(modelValue))
                    ctrl.$setDirty();

                return false;
            };

            scope.$watch("time", function () {
                ctrl.$validate();
            });
        }
    };
});
angular.module('event').
    filter('greaterThanToday', function () {
        return function (items) {
            var retn = [];

            var today = new Date();

            angular.forEach(items, function (item) {
                var date = new Date(item.time_to_close);
                if (today < date) {
                    retn.push(item);
                }
            });
            return retn;
        }
    })
    .filter('lessThanToday', function () {
        return function (items) {
            var retn = [];

            var today = new Date();

            angular.forEach(items, function (item) {
                var date = new Date(item.time_to_close);
                if (today > date) {
                    retn.push(item);
                }
            });
            return retn;
        }
    });
angular.module('event')
    .controller('CreateEventCrtl', ['$scope', '$mdDialog', '$filter', '$location', 'Event', function ($scope, $mdDialog, $filter, $location, Event) {
        $scope.createAnswers = false;

        $scope.event = new Event();
        $scope.event.open = false;
        $scope.event.voters_public = false;
        $scope.event.time_to_close = '';

        $scope.dateFormatted = '';

        $scope.goEvent = function () {
            $location.path('/eventos/');
        };

        $scope.showAdvanced = function (ev) {
            $mdDialog.show({
                controller: DateTimePicker,
                templateUrl: '/static/event/templates/dialog-time-picker.html',
                targetEvent: ev
            })
                .then(function (data) {
                    $scope.event.date = data.time;
                    $scope.event.time_to_close = data.timeFormatted;
                }, function () {
                });
        };

        $scope.showAlertNumVotes = function (ev) {
            $mdDialog.show(
                $mdDialog.alert()
                    .title('NÚMERO DE VOTOS')
                    .content('Especifica el número de opciones que quieres que un usuario pueda votar como máximo.')
                    .ariaLabel('Número votos alert')
                    .ok('OK')
                    .targetEvent(ev)
            );
        };

        $scope.showAlertPublicVotes = function (ev) {
            $mdDialog.show(
                $mdDialog.alert()
                    .title('VOTACIONES PÚBLICAS')
                    .content('Especifica si quieres que aparezca el dueño de cada voto o quieres que sea anonimo.')
                    .ariaLabel('Votaciones publicas alert')
                    .ok('OK')
                    .targetEvent(ev)
            );
        };

        $scope.showAlertOpenEvent = function (ev) {
            $mdDialog.show(
                $mdDialog.alert()
                    .title('EVENTO ABIERTO')
                    .content('Especifica si quieres que los usuarios de este eventos puedan invitar a otros usuarios.')
                    .ariaLabel('Evento abierto alert')
                    .ok('OK')
                    .targetEvent(ev)
            );
        };

        $scope.$on('back', function (event) {
            $scope.createAnswers = false;
        });

        $scope.next =  function () {
            $scope.createAnswers = true;
        };

    }]);

function DateTimePicker($scope, $mdDialog, $filter) {
    $scope.cancel = function () {
        $mdDialog.cancel();
    };

    $scope.save = function (date) {
        var data = [];
        data.time = $filter('date')(date, 'dd/MM/yyyy HH:mm');
        data.timeFormatted = moment(date).format();
        $mdDialog.hide(data);
    };
}
angular.module('event')
    .controller('EventCtrl', ['$scope', 'Event', '$location', function ($scope, Event, $location) {
        $scope.showInactive = false;
        $scope.loading = false;

        $scope.getEvents = function () {
            $scope.loading = true;
            Event.get(function (data) {
                $scope.events = data;
                $scope.loading = false;
            }, function (error) {
                console.log(error);
                $scope.loading = false;
            });
        };

        $scope.createEvent = function () {
          $location.path('/eventos/crear/');
        };

        $scope.$watch('showInactive', function () {
            if (!$scope.showInactive)
                $scope.getEvents();
        });
    }]);
angular.module('event')
    .controller('EventDetailCtrl', ['$scope', 'Event', '$location', '$routeParams', '$http', 'getMyVotes', '$mdDialog', 'Answer', 'ANSWER_TYPES', '$q', 'getFriends',
        function ($scope, Event, $location, $routeParams, $http, getMyVotes, $mdDialog, Answer, ANSWER_TYPES, $q, getFriends) {
            var self = this;

            $scope.data = [];
            $scope.loading = true;
            $scope.inviteFriend = false;
            $scope.createMode = false;
            $scope.inviteMode = false;
            $scope.id = $routeParams.id;
            $scope.type_text = ANSWER_TYPES[0].name;

            $scope.answer = new Answer();
            $scope.answer.type = ANSWER_TYPES[0].type;

            this.successGetDetail = function (data) {

                $scope.event = data;
                $scope.answer.event = $scope.event.id;

                if ($scope.event.voters_public) {
                    angular.forEach($scope.event.answer, function (value) {
                        value.votes_owners = value.votes;
                        value.votes = value.votes.length;
                    });
                }
            };

            this.successGetDetailAdd = function (data) {

                $scope.event = data.data;
                $scope.answer.event = $scope.event.id;

                if ($scope.event.voters_public) {
                    angular.forEach($scope.event.answer, function (value) {
                        value.votes_owners = value.votes;
                        value.votes = value.votes.length;
                    });
                }
            };

            $scope.next = function () {
                $scope.data.selectedIndex = Math.min($scope.data.selectedIndex + 1, 1);
            };
            $scope.previous = function () {
                $scope.data.selectedIndex = Math.max($scope.data.selectedIndex - 1, 0);
            };

            $scope.getEventDetail = function () {
                //return Event.detail({id: $scope.id}).$promise;
                return $http.get('/api/event/' +  $scope.id, {cache:false});
            };

            $scope.getMyVotes = function () {
                $http.get(getMyVotes + $scope.id)
                    .success(function (data) {
                        $scope.myVotes = data;
                    })
                    .error(function (error) {
                        console.log(error);
                        $scope.loading = false;
                    });
            };

            $scope.getFriends = function () {
                $http.get(getFriends)
                    .success(function (data) {
                        $scope.friends = data;
                        $scope.loading = false;
                    })
                    .error(function (error) {
                        console.log(error);
                        $scope.loading = false;
                    });
            };

            $scope.displayType = function (type) {
                if (!type) {
                    $scope.answer.type = ANSWER_TYPES[0].type;
                    var message = ANSWER_TYPES[0].name;
                } else {
                    $scope.answer.type = ANSWER_TYPES[1].type;
                    var message = ANSWER_TYPES[1].name;
                }
                $scope.answer.answer = '';
                $scope.type_text = message;
            };

            $scope.addDate = function (ev) {
                $mdDialog.show({
                    controller: DateTimePicker,
                    templateUrl: '/static/event/templates/dialog-time-picker.html',
                    targetEvent: ev
                })
                    .then(function (data) {
                        $scope.answer.time = data.time;
                        $scope.answer.answer = data.timeFormatted;
                    }, function () {
                    });
            };

            $scope.add = function () {
                $scope.$broadcast('partial_loading_start');

                $scope.answer.$save(function (data) {
                    var type = $scope.answer.type;
                    $scope.answer = new Answer();
                    $scope.answer.type = type;

                    $scope.getEventDetail()
                        .then(function (data) {
                            self.successGetDetailAdd(data);
                        }, function (error) {
                            console.log(error);
                        })
                        .then(function () {
                            $scope.getMyVotes();
                        })
                        .then($scope.$broadcast('partial_loading_end'));

                }, function (error) {
                    console.log(error);

                    $scope.$broadcast('partial_loading_end');
                });
            };

            $scope.selectText = function (answer) {
                $scope.voteText = answer.id;
            };

            $scope.selectDate = function (answer) {
                $scope.voteDate = answer.id;
            };

            $scope.init = function () {
                return $scope.getEventDetail()
                    .then(function (data) {
                        self.successGetDetail(data.data);
                    }, function (error) {
                        console.log(error);
                        $scope.loading = false;
                    })
                    .then(function () {
                        $scope.getMyVotes();
                    })
                    .then(function () {
                        $scope.getFriends();
                    });
            };

            $scope.showCreateMode = function () {
                $scope.createMode ? $scope.createMode = false : $scope.createMode = true;
            };

            $scope.showInviteMode = function () {
                $scope.inviteMode ? $scope.inviteMode = false : $scope.inviteMode = true;
            };

            $scope.inviteButton = function (data) {
                $scope.inviteFriend = data;
                data ? $scope.createMode = false : $scope.inviteMode = false;
            };

            $scope.init();

        }]);


function DateTimePicker($scope, $mdDialog, $filter) {
    $scope.cancel = function () {
        $mdDialog.cancel();
    };

    $scope.save = function (date) {
        var data = [];
        data.time = $filter('date')(date, 'dd/MM/yyyy HH:mm');
        data.timeFormatted = moment(date).format();
        $mdDialog.hide(data);
    };
}

angular.module('event')
    .controller('EventDetailFinishedCtrl', ['$scope', 'Event', '$location', '$routeParams', '$http', 'getMyVotes', '$mdDialog', 'Answer', 'ANSWER_TYPES', '$q', 'getFriends',
        function ($scope, Event, $location, $routeParams, $http, getMyVotes, $mdDialog, Answer, ANSWER_TYPES, $q, getFriends) {
            var self = this;

            $scope.data = [];
            $scope.loading = true;
            $scope.id = $routeParams.id;
            $scope.type_text = ANSWER_TYPES[0].name;

            $scope.answer = new Answer();
            $scope.answer.type = ANSWER_TYPES[0].type;

            this.successGetDetail = function (data) {

                $scope.event = data;
                $scope.answer.event = $scope.event.id;

                if ($scope.event.voters_public) {
                    angular.forEach($scope.event.answer, function (value) {
                        value.votes_owners = value.votes;
                        value.votes = value.votes.length;
                    });
                }
            };

            $scope.next = function () {
                $scope.data.selectedIndex = Math.min($scope.data.selectedIndex + 1, 1);
            };
            $scope.previous = function () {
                $scope.data.selectedIndex = Math.max($scope.data.selectedIndex - 1, 0);
            };

            $scope.getEventDetail = function () {
                return Event.detail({id: $scope.id}).$promise;
            };

            $scope.getMyVotes = function () {
                $http.get(getMyVotes + $scope.id)
                    .success(function (data) {
                        $scope.myVotes = data;
                    })
                    .error(function (error) {
                        console.log(error);
                        $scope.loading = false;
                    });
            };

            $scope.getFriends = function () {
                $http.get(getFriends)
                    .success(function (data) {
                        $scope.friends = data;
                        $scope.loading = false;
                    })
                    .error(function (error) {
                        console.log(error);
                        $scope.loading = false;
                    });
            };

            $scope.init = function () {
                return $scope.getEventDetail()
                    .then(function (data) {
                        self.successGetDetail(data);
                    }, function (error) {
                        console.log(error);
                        $scope.loading = false;
                    })
                    .then(function () {
                        $scope.getMyVotes();
                    })
                    .then(function () {
                        $scope.getFriends();
                    });
            };

            $scope.init();

        }]);

angular.module('event')
    .controller('EventDetailMultiCtrl', ['$scope', 'Event', '$location', '$http', 'voteApi', '$mdDialog', '$mdToast',
        function ($scope, Event, $location, $http, voteApi, $mdDialog, $mdToast) {
            var self = this;
            $scope.loading_multi = false;
            $scope.voteId = [];
            $scope.votesText = [];
            $scope.reamingAnswersText = $scope.event.num_answers;

            $scope.votesDate = [];
            $scope.reamingAnswersDate = $scope.event.num_answers;

            $scope.goEvent = function () {
                $location.path('/eventos/');
            };

            this.successGetDetail = function (data) {

                $scope.event = data;

                if ($scope.event.voters_public) {
                    angular.forEach($scope.event.answer, function (value) {
                        value.votes_owners = value.votes;
                        value.votes = value.votes.length;
                    });
                }
            };

            $scope.vote = function () {

                $scope.loading_multi = true;

                var sendVote = function () {
                        var data = $scope.votesText.concat($scope.votesDate);
                        var dict = {};
                        dict['votes'] = data;

                        return $http.post(voteApi, dict);
                    },
                    refreshEvent = function () {
                        return $http.get('/api/event/' +  $scope.id).then(function (data) {
                                self.successGetDetail(data.data);
                            }, function (error) {
                                console.log(error);
                                $scope.loading_multi = false;
                            });
                    },
                    refreshVotes = function () {
                        $scope.votesText = [];
                        $scope.votesDate = [];
                        return $scope.getMyVotes();
                    };

                sendVote()
                    .then(refreshEvent, function(error){
                        alert(error);
                        console.log(error);
                    })
                    .then(refreshVotes, function(error){
                        alert(error);
                        console.log(error);
                    })
                    .then(function () {
                        $scope.loading_multi = false;
                        $mdToast.show(
                            $mdToast.simple()
                                .content('Votos guardados')
                                .position('bottom right')
                                .hideDelay(1500)
                        );
                    }, function (error) {
                        console.log(error);
                        $scope.loading_multi = false;
                        $mdToast.show(
                            $mdToast.simple()
                                .content('Error al votar')
                                .position('bottom right')
                                .hideDelay(1500)
                        );
                    });
            };

            $scope.initVotes = function () {
                $scope.reamingAnswersText = $scope.event.num_answers;
                $scope.reamingAnswersDate = $scope.event.num_answers;

                angular.forEach($scope.myVotes, function (value) {
                    $scope.voteId[value.vote] = true;
                    if (value.type == 'TX') {
                        $scope.votesText.push(value.vote);
                        $scope.reamingAnswersText -= 1;
                    } else if (value.type == 'DT') {
                        $scope.votesDate.push(value.vote);
                        $scope.reamingAnswersDate -= 1;
                    }
                });
            };

            $scope.voteText = function (answer) {
                if ($scope.votesText.indexOf(answer.id) == -1) {
                    $scope.votesText.push(answer.id);
                    $scope.voteId[answer.id] = true;
                    if ($scope.reamingAnswersText > 0)
                        $scope.reamingAnswersText -= 1;
                } else {
                    var splice = $scope.votesText.splice($scope.votesText.indexOf(answer.id), 1);
                    $scope.voteId[splice] = false;
                    $scope.reamingAnswersText += 1;
                }

                if ($scope.event.num_answers < $scope.votesText.length) {
                    var uncheck = $scope.votesText.shift();
                    $scope.voteId[uncheck] = false;
                }
            };

            $scope.voteDate = function (answer) {
                if ($scope.votesDate.indexOf(answer.id) == -1) {
                    $scope.votesDate.push(answer.id);
                    $scope.voteId[answer.id] = true;
                    if ($scope.reamingAnswersDate > 0)
                        $scope.reamingAnswersDate -= 1;
                } else {
                    var splice = $scope.votesDate.splice($scope.votesDate.indexOf(answer.id), 1);
                    $scope.voteId[splice] = false;
                    $scope.reamingAnswersDate += 1;
                }

                if ($scope.event.num_answers < $scope.votesDate.length) {
                    var uncheck = $scope.votesDate.shift();
                    $scope.voteId[uncheck] = false;
                }
            };

            $scope.viewVoters = function (ev, answer) {
                $mdDialog.show({
                    controller: VoteOwnersController,
                    templateUrl: '/static/event/templates/vote-owners.html',
                    targetEvent: ev,
                    locals: {answer: answer}
                })
                    .then(function (data) {
                    }, function () {
                    });
            };

            $scope.$watch('myVotes', function () {
                if ($scope.myVotes != null)
                    $scope.initVotes();
            });

            $scope.$on('partial_loading_start', function () {
                $scope.loading_multi = true;
            });

            $scope.$on('partial_loading_end', function () {
                $scope.loading_multi = false;
            });

        }])
;

function VoteOwnersController($scope, $mdDialog, answer) {
    $scope.answer = answer;
    $scope.closeDialog = function () {
        $mdDialog.hide();
    };
}
angular.module('event')
    .controller('EventDetailSimpleCtrl', ['$scope', 'Event', '$location', '$http', 'voteApi', '$mdDialog', '$mdToast', function ($scope, Event, $location, $http, voteApi, $mdDialog, $mdToast) {
        $scope.loading_simple = false;
        $scope.voteId = [];

        $scope.goEvent = function () {
            $location.path('/eventos/');
        };

        $scope.vote = function () {
            var dict = {};
            if ($scope.voteText != null)
                $scope.voteId.push($scope.voteText);
            if ($scope.voteDate)
                $scope.voteId.push($scope.voteDate);
            dict['votes'] = $scope.voteId;

            if ($scope.voteId.length == 0) {
                $mdDialog.show(
                    $mdDialog.alert()
                        .title('ERROR')
                        .content('Selecciona primero una opción para votar.')
                        .ariaLabel('Selecciona opciones votar')
                        .ok('OK')
                        .targetEvent()
                );
            } else {
                var msg = 'Votos guardados';
                if ($scope.voteId.length == 1)
                    msg = 'Voto guardado';
                $scope.loading_simple = true;

                $http.post(voteApi, dict)
                    .success(function () {
                        Event.detail({id: $scope.id}, function (data) {
                            $scope.event = data;
                            if ($scope.event.voters_public) {
                                angular.forEach($scope.event.answer, function (value) {
                                    value.votes_owners = value.votes;
                                    value.votes = value.votes.length;
                                });
                            }

                            $scope.voteId = [];

                            $scope.getMyVotes();
                            $scope.loading_simple = false;
                            $mdToast.show(
                                $mdToast.simple()
                                    .content(msg)
                                    .position('bottom right')
                                    .hideDelay(1500)
                            );
                        }, function (error) {
                            console.log(error);
                            $scope.loading_simple = false;
                            $mdToast.show(
                                $mdToast.simple()
                                    .content('Error al votar')
                                    .position('bottom right')
                                    .hideDelay(1500)
                            );
                        });
                    })
                    .error(function (error) {
                        console.log(error);
                        $scope.loading_simple = false;
                    });
            }
        };

        $scope.viewVoters = function (ev, answer) {
            $mdDialog.show({
                controller: VoteOwnersController,
                templateUrl: '/static/event/templates/vote-owners.html',
                targetEvent: ev,
                locals: {answer: answer}
            })
                .then(function (data) {
                }, function () {
                });
        };

        $scope.clickText = function (answer) {
            $scope.voteText = answer.id;
        };

        $scope.clickDate = function (answer) {
            $scope.voteDate = answer.id;
        };

        $scope.initVotes = function () {
            angular.forEach($scope.myVotes, function (value) {
                if (value.type == 'TX') {
                    $scope.voteText = value.vote;
                } else if (value.type == 'DT') {
                    $scope.voteDate = value.vote;
                }
            });
        };

        $scope.$watch('myVotes', function () {
            if ($scope.myVotes != null)
                $scope.initVotes();
        });

        $scope.$on('partial_loading_start', function () {
            $scope.loading_multi = true;
        });

        $scope.$on('partial_loading_end', function () {
            $scope.loading_multi = false;
        });
    }]);

function VoteOwnersController($scope, $mdDialog, answer) {
    $scope.answer = answer;
    $scope.closeDialog = function () {
        $mdDialog.hide();
    };
}
angular.module('event')
    .controller('EventParticipantsCtrl', ['$scope', function ($scope) {
        $scope.loading_participants = false;
        $scope.participants = $scope.event.users;

        $scope.$root.$on('refresh_event', function () {
            $scope.loading_participants = true;
            $scope.init()
                .then(function () {
                    $scope.participants = $scope.event.users;
                    $scope.loading_participants = false;
                });
        });
    }]);
var app = angular.module('answer', ['mdDateTime', 'ngMessages']);

app.value('ANSWER_TYPES', [
    {type: 'TX', name: 'Texto'},
    {type: 'DT', name: 'Fecha'}
]);
angular.module('answer').
    factory('Answer', ['$resource', 'answerApi', function ($resource, answerApi) {
        return $resource(answerApi + ':id', {id: '@id'});
    }]);
angular.module('answer')
    .controller('CreateAnswersCrtl', ['$scope', '$mdDialog', '$filter', '$location', 'Answer', 'ANSWER_TYPES', '$http', function ($scope, $mdDialog, $filter, $location, Answer, ANSWER_TYPES, $http) {

        $scope.loading = false;

        $scope.canCreateEvent = false;
        var hasText = false;
        var hasDate = false;
        var numText = 0;
        var numDate = 0;

        $scope.type_text = ANSWER_TYPES[0].name;
        $scope.type = false;

        $scope.answers = new Answer();
        $scope.answers = [];
        $scope.answer = {};
        $scope.answer.type = ANSWER_TYPES[0].type;

        $scope.goEvent = function () {
            $location.path('/eventos/');
        };

        $scope.displayType = function (type) {
            if (!type) {
                $scope.answer.type = ANSWER_TYPES[0].type;
                var message = ANSWER_TYPES[0].name;
            } else {
                $scope.answer.type = ANSWER_TYPES[1].type;
                var message = ANSWER_TYPES[1].name;
            }
            $scope.answer.answer= '';
            $scope.type_text = message;
        };

        $scope.add = function () {
            $scope.answers.push($scope.answer);
            if ($scope.answer.type == ANSWER_TYPES[0].type) {
                hasText = true;
                numText += 1;
            } else {
                hasDate = true;
                numDate += 1;
            }

            var type = $scope.answer.type;
            $scope.answer = {};
            $scope.answer.type = type;
        };

        $scope.deleteAnswer = function (answer) {
            var type = answer.type;
            var can_delete = true;

            $scope.answers.splice($scope.answers.indexOf(answer), 1);

            angular.forEach($scope.answers, function (value, key) {
                if (value.type == type)
                    can_delete = false;
            });

            if (type == ANSWER_TYPES[0].type) {
                numText -= 1;
                if (can_delete)
                    hasText = false;
            } else {
                numDate -= 1;
                if (can_delete)
                    hasDate = false;
            }
        };

        $scope.addDate = function (ev) {
            $mdDialog.show({
                controller: DateTimePicker,
                templateUrl: '/static/event/templates/dialog-time-picker.html',
                targetEvent: ev
            })
                .then(function (data) {
                    $scope.answer.time = data.time;
                    $scope.answer.answer = data.timeFormatted;
                }, function () {
                });
        };

        $scope.create = function () {
            $scope.loading = true;
            $http.post('/api/evento/create_all/', {event: $scope.event, answers: $scope.answers}).
                success(function (data, status, headers, config) {
                    $mdDialog.show(
                        $mdDialog.alert()
                            .title('¡ CREADO !')
                            .content('Tu evento se ha creado correctamente')
                            .ariaLabel('Evento OK')
                            .ok('OK')
                    );
                    $scope.loading = false;
                    $scope.goEvent();
                }).
                error(function (data, status, headers, config) {
                    $mdDialog.show(
                        $mdDialog.alert()
                            .title('¡ ERROR !')
                            .content('Ha habido un error al crear tu evento. Inténtalo de nuevo.')
                            .ariaLabel('Evento OK')
                            .ok('OK')
                    );

                    $scope.loading = false;
                    $scope.goEvent();
                });
        };

        $scope.back = function () {
            $scope.$emit('back');
        };

        $scope.activeCreate = function () {
            return !($scope.canCreateEvent && $scope.answers.length != 0) || $scope.loading;
        };

        $scope.$watchCollection('answers', function () {
            checkCreateEvent();
        });

        $scope.$watch('event.num_answers', function () {
            checkCreateEvent();
        });

        function checkCreateEvent() {
            var text = true;
            var date = true;

            if (hasText) {
                text = numText >= $scope.event.num_answers;
            }
            if (hasDate) {
                date = numDate >= $scope.event.num_answers;
            }

            if (text && date && $scope.answers.length != 0)
                $scope.canCreateEvent = true;
            else
                $scope.canCreateEvent = false;
        }
    }]);

function DateTimePicker($scope, $mdDialog, $filter) {
    $scope.cancel = function () {
        $mdDialog.cancel();
    };

    $scope.save = function (date) {
        var data = [];
        data.time = $filter('date')(date, 'dd/MM/yyyy HH:mm');
        data.timeFormatted = moment(date).format();
        $mdDialog.hide(data);
    };
}


var app = angular.module('friend', ['ngMessages']);

angular.module('friend').
    factory('FriendRequest', ['$resource', 'friendRequestApi', function ($resource, friendRequestApi) {
        return $resource(friendRequestApi + ':id', {id: '@id'}, {
            'update': {method: 'PATCH'}
        });
    }]);
angular.module('friend').
    filter('filterFromFriend', function () {
        return function (items, user_email) {
            var retn = [];

            angular.forEach(items, function (item) {
                if (item.from_friend.email != user_email) {
                    retn.push(item);
                }
            });
            return retn;
        }
    })
    .filter('filterToFriend', function () {
        return function (items, user_email) {
            var retn = [];

            angular.forEach(items, function (item) {
                if (item.from_friend.email == user_email) {
                    retn.push(item);
                }
            });
            return retn;
        }
    });
angular.module('friend')
    .controller('FriendCtrl', ['$scope', 'getFriends', '$http', '$mdDialog', '$mdToast', 'FriendRequest', 'UserInfo', function ($scope, getFriends, $http, $mdDialog, $mdToast, FriendRequest, UserInfo) {
        $scope.loading = false;
        $scope.addFriendMode = false;
        $scope.error_request = false;

        $scope.user = UserInfo.userInfo;

        $scope.addFriend = new FriendRequest();

        $scope.next = function () {
            $scope.data.selectedIndex = Math.min($scope.data.selectedIndex + 1, 2);
        };
        $scope.previous = function () {
            $scope.data.selectedIndex = Math.max($scope.data.selectedIndex - 1, 0);
        };

        $scope.getFriends = function () {
            $scope.loading = true;
            $http.get(getFriends)
                .success(function (data) {
                    $scope.friends = data;
                    $scope.loading = false;
                })
                .error(function (error) {
                    console.log(error);
                    $scope.loading = false;
                });
        };

        $scope.deleteFriend = function (friend) {
            $scope.loading = true;
            $http.delete(getFriends + friend.id)
                .success(function (data) {
                    $scope.getFriends();
                    $mdToast.show(
                        $mdToast.simple()
                            .content('Amigo eliminado')
                            .position('bottom right')
                            .hideDelay(1500)
                    );
                })
                .error(function (error) {
                    console.log(error);
                    $scope.loading = false;
                });
        };

        $scope.showDeleteFriend = function (friend) {
            var confirm = $mdDialog.confirm()
                .title('ELIMINAR AMIGO')
                .content('¿Seguro que deseas borrar este amigo?')
                .ariaLabel('Borrar amigo')
                .ok('SI')
                .cancel('NO')
                .targetEvent(friend);
            $mdDialog.show(confirm).then(function () {
                $scope.deleteFriend(friend);
            }, function () {
            });
        };

        $scope.showAddFriendMode = function () {
            $scope.addFriendMode ? $scope.addFriendMode = false : $scope.addFriendMode = true;
        };

        $scope.sendFriendRequest = function () {
            $scope.addFriend.$save(function (data) {
                $scope.error_request = false;
                $scope.msg_error = '';

                $mdToast.show(
                    $mdToast.simple()
                        .content('Petición enviada')
                        .position('bottom right')
                        .hideDelay(1500)
                );
                $scope.$broadcast('refresh');
                $scope.addFriend = new FriendRequest();
            }, function (error) {
                $scope.error_request = true;
                if ('ErrorBuscando' in error.data) {
                    $scope.msg_error = error.data['ErrorBuscando'][0];
                } else if ('ErrorPeticion' in error.data) {
                    $scope.msg_error = error.data['ErrorPeticion'][0];
                } else if ('PeticionExistente' in error.data) {
                    $scope.msg_error = error.data['PeticionExistente'][0];
                } else {
                    $scope.msg_error = 'Error al realizar la petición. Vuelve a intentarlo.';
                }
            });
        };

        $scope.getFriends();
    }]);
angular.module('friend')
    .controller('RequestReceivedCtrl', ['$scope', 'FriendRequest', '$mdDialog', '$mdToast', function ($scope, FriendRequest, $mdDialog, $mdToast) {

        $scope.loading = false;
        $scope.requestReceived = [];

        $scope.getRequestReceived = function () {
            $scope.loading = true;
            FriendRequest.query(function (data) {
                $scope.requestReceived = data;
                $scope.loading = false;
            }, function (error) {
                console.log(error);
                $scope.loading = false;
            })
        };

        $scope.acceptRequest = function (request) {
            $scope.loading = true;
            FriendRequest.update({id: request.id}, {accepted: true},
                function (data) {
                    $scope.getRequestReceived();
                    $mdToast.show(
                        $mdToast.simple()
                            .content('Petición aceptada')
                            .position('bottom right')
                            .hideDelay(1500)
                    );
                }, function (error) {
                    console.log(error);
                });
        };

        $scope.showRejectRequest = function (request) {
            var confirm = $mdDialog.confirm()
                .title('RECHAZAR PETICION')
                .content('¿Seguro que deseas rechazar está petición?')
                .ariaLabel('Rechazar petición')
                .ok('SI')
                .cancel('NO')
                .targetEvent(request);

            $mdDialog.show(confirm).then(function () {
                $scope.rejectRequest(request);
            }, function () {
            });
        };

        $scope.rejectRequest = function (request) {
            $scope.loading = true;
            FriendRequest.delete({id: request.id},
                function (data) {
                    $scope.getRequestReceived();
                    $mdToast.show(
                        $mdToast.simple()
                            .content('Petición rechazada')
                            .position('bottom right')
                            .hideDelay(1500)
                    );
                }, function (error) {
                    console.log(error);
                });

        };

        $scope.getRequestReceived();
    }]);
angular.module('friend')
    .controller('RequestSentCtrl', ['$scope', 'FriendRequest', '$mdDialog', '$mdToast', function ($scope, FriendRequest, $mdDialog, $mdToast) {

        $scope.loading = false;
        $scope.requestSent = [];

        $scope.getRequestSent = function () {
            $scope.loading = true;
            FriendRequest.query(function (data) {
                $scope.requestSent = data;
                $scope.loading = false;
            }, function (error) {
                console.log(error);
                $scope.loading = false;
            })
        };

        $scope.showRejectRequest = function (request) {
            var confirm = $mdDialog.confirm()
                .title('DESHACER PETICION')
                .content('¿Seguro que deseas deshacer está petición?')
                .ariaLabel('Rechazar petición')
                .ok('SI')
                .cancel('NO')
                .targetEvent(request);

            $mdDialog.show(confirm).then(function () {
                $scope.rejectRequest(request);
            }, function () {
            });
        };

        $scope.rejectRequest = function (request) {
            $scope.loading = true;
            FriendRequest.delete({id: request.id},
                function (data) {
                    $scope.getRequestSent();
                    $mdToast.show(
                        $mdToast.simple()
                            .content('Petición deshecha')
                            .position('bottom right')
                            .hideDelay(1500)
                    );
                }, function (error) {
                    console.log(error);
                });

        };

        $scope.$on('refresh', function (){
            $scope.getRequestSent();
        });

        $scope.getRequestSent();
    }]);