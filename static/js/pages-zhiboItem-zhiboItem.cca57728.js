(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-zhiboItem-zhiboItem"],{"112d":function(t,e,r){"use strict";var n=r("ee27").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,r("96cf"),r("d3b7"),r("3ca3"),r("ddb0"),r("a15b"),r("a434");var o=n(r("d0af")),i=n(r("c964")),a={data:function(){return{list:["https://img2.baidu.com/it/u=3193983776,3527045164&fm=26&fmt=auto&gp=0.jpg","https://img0.baidu.com/it/u=2053976645,1275706936&fm=26&fmt=auto&gp=0.jpg","https://img1.baidu.com/it/u=3134086834,3065550544&fm=26&fmt=auto&gp=0.jpg","https://img0.baidu.com/it/u=1811937566,3671564249&fm=26&fmt=auto&gp=0.jpg","https://img1.baidu.com/it/u=1387161093,2514770638&fm=26&fmt=auto&gp=0.jpg","https://img0.baidu.com/it/u=2074017045,2577960940&fm=26&fmt=auto&gp=0.jpg","https://img2.baidu.com/it/u=3345534380,1649791312&fm=26&fmt=auto&gp=0.jpg","https://img1.baidu.com/it/u=2585856731,2289491349&fm=11&fmt=auto&gp=0.jpg","https://img0.baidu.com/it/u=4223805844,4207646064&fm=11&fmt=auto&gp=0.jpg","https://img2.baidu.com/it/u=542254353,4108171557&fm=11&fmt=auto&gp=0.jpg","https://img0.baidu.com/it/u=652364899,4287368589&fm=26&fmt=auto&gp=0.jpg","https://img2.baidu.com/it/u=862592418,846768839&fm=26&fmt=auto&gp=0.jpg"],client:null,AudioTrack:null,VideoTrack:null,lists:[]}},onReady:function(){this.initVideo()},beforeDestroy:function(){this.leave()},methods:{initVideo:function(){var t=this;return(0,i.default)(regeneratorRuntime.mark((function e(){var r,n,i,a,u,c,s,f;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r="006b3107ac4ac5d49f6814ab05fe9fe7c3bIACbeXoIZZUGHAfHcT7/cPfRB5sQYPzt+yMn6t2TtqmWLtJjSIgAAAAAEACkGjsKrJaUYAEAAQCrlpRg",n="b3107ac4ac5d49f6814ab05fe9fe7c3b",i="123",t.client=AgoraRTC.createClient({mode:"rtc",codec:"vp8"}),t.client.on("user-published",(function(e,r){t.handleUserPublished(e,r)})),t.client.on("user-unpublished",(function(){t.handleUserUnpublished()})),e.next=8,Promise.all([t.client.join(n,i,r,null),AgoraRTC.createMicrophoneAudioTrack(),AgoraRTC.createCameraVideoTrack()]);case 8:return a=e.sent,u=(0,o.default)(a,3),c=u[0],s=u[1],f=u[2],t.AudioTrack=s,t.VideoTrack=f,t.VideoTrack&&(t.lists.push(c),t.$nextTick((function(){t.VideoTrack.play("videoPlayer"+c)}))),e.next=18,t.client.publish([s,f]);case 18:case"end":return e.stop()}}),e)})))()},handleUserPublished:function(t,e){var r=this;return(0,i.default)(regeneratorRuntime.mark((function n(){var o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return console.log(t,e),o=t.uid,n.next=4,r.client.subscribe(t,e);case 4:"video"===e&&(r.lists.push(o),r.$nextTick((function(){t.videoTrack.play("videoPlayer"+o)}))),"audio"===e&&t.audioTrack.play();case 6:case"end":return n.stop()}}),n)})))()},handleUserUnpublished:function(t){console.log(t);var e=t.uid,r=this.lists.indexof(e);console.log("index",r),this.lists.splice(r,1)},leave:function(){var t=this;return(0,i.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.AudioTrack.stop(),t.AudioTrack.close(),t.VideoTrack.stop(),t.VideoTrack.close(),e.next=6,t.client.leave();case 6:case"end":return e.stop()}}),e)})))()}}};e.default=a},"1b3d":function(t,e,r){"use strict";r.r(e);var n=r("bc66"),o=r("c67d");for(var i in o)["default"].indexOf(i)<0&&function(t){r.d(e,t,(function(){return o[t]}))}(i);r("7a81"),r("b146");var a,u=r("f0c5"),c=Object(u["a"])(o["default"],n["b"],n["c"],!1,null,"6883b14f",null,!1,n["a"],a);e["default"]=c.exports},"41ee":function(t,e,r){var n=r("24fb");e=n(!1),e.push([t.i,"uni-page-body[data-v-6883b14f]{background:#1c191c}body.?%PAGE?%[data-v-6883b14f]{background:#1c191c}",""]),t.exports=e},"530c":function(t,e,r){var n=r("24fb");e=n(!1),e.push([t.i,".zhibo[data-v-6883b14f]{width:%?750?%}.zhibo .mainBox[data-v-6883b14f]{display:grid;grid-template-columns:1fr 1fr 1fr;grid-template-rows:%?250?% %?250?% %?250?% %?250?% %?250?%}.zhibo .mainBox .item[data-v-6883b14f]{width:100%;height:100%}.zhibo .mainBox .item .img[data-v-6883b14f]{width:100%;height:100%}.zhibo .mainBox .item .video[data-v-6883b14f]{width:100%;height:100%;background-color:gold}",""]),t.exports=e},"56a1":function(t,e,r){var n=r("530c");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=r("4f06").default;o("ca94489e",n,!0,{sourceMap:!1,shadowMode:!1})},"7a81":function(t,e,r){"use strict";var n=r("e098"),o=r.n(n);o.a},"83cb":function(t,e,r){"use strict";function n(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n},"96cf":function(t,e){!function(e){"use strict";var r,n=Object.prototype,o=n.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag",s="object"===typeof t,f=e.regeneratorRuntime;if(f)s&&(t.exports=f);else{f=e.regeneratorRuntime=s?t.exports:{},f.wrap=w;var l="suspendedStart",d="suspendedYield",h="executing",p="completed",v={},m={};m[a]=function(){return this};var g=Object.getPrototypeOf,y=g&&g(g(C([])));y&&y!==n&&o.call(y,a)&&(m=y);var b=k.prototype=j.prototype=Object.create(m);_.prototype=b.constructor=k,k.constructor=_,k[c]=_.displayName="GeneratorFunction",f.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===_||"GeneratorFunction"===(e.displayName||e.name))},f.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,k):(t.__proto__=k,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(b),t},f.awrap=function(t){return{__await:t}},L(A.prototype),A.prototype[u]=function(){return this},f.AsyncIterator=A,f.async=function(t,e,r,n){var o=new A(w(t,e,r,n));return f.isGeneratorFunction(e)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},L(b),b[c]="Generator",b[a]=function(){return this},b.toString=function(){return"[object Generator]"},f.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},f.values=C,M.prototype={constructor:M,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return u.type="throw",u.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=o.call(a,"catchLoc"),s=o.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:C(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),v}}}function w(t,e,r,n){var o=e&&e.prototype instanceof j?e:j,i=Object.create(o.prototype),a=new M(n||[]);return i._invoke=T(t,r,a),i}function x(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}function j(){}function _(){}function k(){}function L(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function A(t){function e(r,n,i,a){var u=x(t[r],t,n);if("throw"!==u.type){var c=u.arg,s=c.value;return s&&"object"===typeof s&&o.call(s,"__await")?Promise.resolve(s.__await).then((function(t){e("next",t,i,a)}),(function(t){e("throw",t,i,a)})):Promise.resolve(s).then((function(t){c.value=t,i(c)}),(function(t){return e("throw",t,i,a)}))}a(u.arg)}var r;function n(t,n){function o(){return new Promise((function(r,o){e(t,n,r,o)}))}return r=r?r.then(o,o):o()}this._invoke=n}function T(t,e,r){var n=l;return function(o,i){if(n===h)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw i;return R()}r.method=o,r.arg=i;while(1){var a=r.delegate;if(a){var u=E(a,r);if(u){if(u===v)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var c=x(t,e,r);if("normal"===c.type){if(n=r.done?p:d,c.arg===v)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=p,r.method="throw",r.arg=c.arg)}}}function E(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,E(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=x(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,v):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function M(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function C(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){while(++n<t.length)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return i.next=i}}return{next:R}}function R(){return{value:r,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},b146:function(t,e,r){"use strict";var n=r("56a1"),o=r.n(n);o.a},b6802:function(t,e,r){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n},bc66:function(t,e,r){"use strict";var n;r.d(e,"b",(function(){return o})),r.d(e,"c",(function(){return i})),r.d(e,"a",(function(){return n}));var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-uni-view",{staticClass:"zhibo"},[r("v-uni-view",{staticClass:"mainBox"},[t._l(t.list,(function(t,e){return r("v-uni-view",{key:e,staticClass:"item"},[r("v-uni-image",{staticClass:"img",attrs:{src:t,mode:"scaleToFill"}})],1)})),t._l(t.lists,(function(t){return r("v-uni-view",{key:t,staticClass:"item"},[r("v-uni-view",{staticClass:"video",attrs:{id:"videoPlayer"+t}})],1)}))],2)],1)},i=[]},c1e7:function(t,e,r){"use strict";function n(t,e){var r=t&&("undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"]);if(null!=r){var n,o,i=[],a=!0,u=!1;try{for(r=r.call(t);!(a=(n=r.next()).done);a=!0)if(i.push(n.value),e&&i.length===e)break}catch(c){u=!0,o=c}finally{try{a||null==r["return"]||r["return"]()}finally{if(u)throw o}}return i}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n,r("a4d3"),r("e01a"),r("d3b7"),r("d28b"),r("3ca3"),r("ddb0")},c67d:function(t,e,r){"use strict";r.r(e);var n=r("112d"),o=r.n(n);for(var i in n)["default"].indexOf(i)<0&&function(t){r.d(e,t,(function(){return n[t]}))}(i);e["default"]=o.a},c964:function(t,e,r){"use strict";function n(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(s){return void r(s)}u.done?e(c):Promise.resolve(c).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function u(t){n(a,o,i,u,c,"next",t)}function c(t){n(a,o,i,u,c,"throw",t)}u(void 0)}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=o,r("d3b7")},ceef:function(t,e,r){"use strict";function n(t){if(Array.isArray(t))return t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n},d0af:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=c;var n=u(r("ceef")),o=u(r("c1e7")),i=u(r("dde1")),a=u(r("83cb"));function u(t){return t&&t.__esModule?t:{default:t}}function c(t,e){return(0,n.default)(t)||(0,o.default)(t,e)||(0,i.default)(t,e)||(0,a.default)()}},dde1:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=i,r("fb6a"),r("d3b7"),r("a630"),r("3ca3");var n=o(r("b6802"));function o(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(t){if("string"===typeof t)return(0,n.default)(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?(0,n.default)(t,e):void 0}}},e098:function(t,e,r){var n=r("41ee");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=r("4f06").default;o("36f754e4",n,!0,{sourceMap:!1,shadowMode:!1})}}]);