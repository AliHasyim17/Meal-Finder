(()=>{var e={286:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(r)for(var u=0;u<this.length;u++){var a=this[u][0];null!=a&&(c[a]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);r&&c[s[0]]||(void 0!==i&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=i),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),t.push(s))}},t}},372:e=>{"use strict";e.exports=function(e){return e[1]}},244:()=>{function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function n(t,n){if(n&&("object"===e(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t)}function r(e){var t="function"==typeof Map?new Map:void 0;return r=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return o(e,arguments,u(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),c(r,e)},r(e)}function o(e,t,n){return o=i()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&c(o,n.prototype),o},o.apply(null,arguments)}function i(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function c(e,t){return c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},c(e,t)}function u(e){return u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},u(e)}var a=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&c(e,t)}(f,e);var r,o,a,l,s=(r=f,o=i(),function(){var e,t=u(r);if(o){var i=u(this).constructor;e=Reflect.construct(t,arguments,i)}else e=t.apply(this,arguments);return n(this,e)});function f(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,f),(e=s.call(this)).shadowDOM=e.attachShadow({mode:"open"}),e}return a=f,(l=[{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){this.shadowDOM.innerHTML="\n       <style>\n           * {\n               margin: 0;\n               padding: 0;\n               box-sizing: border-box;\n           }\n           :host {\n               display: block;\n               width: 100%;\n               background-color: yellow;\n               color: brown;\n               text-align: center;\n               box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.8);\n           }\n           h2 {\n               padding: 20px;\n           }\n       </style>\n       <h2>Meal Finder</h2>"}}])&&t(a.prototype,l),Object.defineProperty(a,"prototype",{writable:!1}),f}(r(HTMLElement));customElements.define("custom-header",a)},929:()=>{function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function n(t,n){if(n&&("object"===e(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t)}function r(e){var t="function"==typeof Map?new Map:void 0;return r=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return o(e,arguments,u(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),c(r,e)},r(e)}function o(e,t,n){return o=i()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&c(o,n.prototype),o},o.apply(null,arguments)}function i(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function c(e,t){return c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},c(e,t)}function u(e){return u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},u(e)}var a=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&c(e,t)}(f,e);var r,o,a,l,s=(r=f,o=i(),function(){var e,t=u(r);if(o){var i=u(this).constructor;e=Reflect.construct(t,arguments,i)}else e=t.apply(this,arguments);return n(this,e)});function f(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,f),(e=s.call(this)).shadowDOM=e.attachShadow({mode:"open"}),e}return a=f,(l=[{key:"meal",set:function(e){this._meal=e,this.render()}},{key:"render",value:function(){this.shadowDOM.innerHTML='\n           <style>\n              * {\n                   margin: 0;\n                   padding: 0;\n                   box-sizing: border-box;\n               }\n               :host {\n                   display: block;\n                   margin-bottom: 18px;\n                   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n                   border-radius: 10px;\n                   overflow: hidden;\n               }\n              \n               .meal-img {\n                   width: 100%;\n                   max-height: 300px;\n                   object-fit: cover;\n                   object-position: center;\n               }\n              \n               .meal-info {\n                   padding: 24px;\n               }\n              \n               .meal-info > h2 {\n                   font-weight: lighter;\n               }\n              \n               .meal-info > p {\n                   margin-top: 10px;\n                   overflow: hidden;\n                   text-overflow: ellipsis;\n                   display: -webkit-box;\n                   -webkit-box-orient: vertical;\n                   -webkit-line-clamp: 10; /* number of lines to show */\n               }\n           </style>\n           <img class="meal-img" src="'.concat(this._meal.strMealThumb,'" alt="Meal Image">\n           <div class="meal-info">\n               <h2>').concat(this._meal.strMeal,"</h2>\n               <p>").concat(this._meal.strInstructions,"</p>\n           </div>")}}])&&t(a.prototype,l),Object.defineProperty(a,"prototype",{writable:!1}),f}(r(HTMLElement));customElements.define("meal-item",a)},998:()=>{function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function n(t,n){if(n&&("object"===e(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t)}function r(e){var t="function"==typeof Map?new Map:void 0;return r=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return o(e,arguments,u(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),c(r,e)},r(e)}function o(e,t,n){return o=i()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&c(o,n.prototype),o},o.apply(null,arguments)}function i(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function c(e,t){return c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},c(e,t)}function u(e){return u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},u(e)}var a=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&c(e,t)}(f,e);var r,o,a,l,s=(r=f,o=i(),function(){var e,t=u(r);if(o){var i=u(this).constructor;e=Reflect.construct(t,arguments,i)}else e=t.apply(this,arguments);return n(this,e)});function f(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,f),(e=s.call(this)).shadowDOM=e.attachShadow({mode:"open"}),e}return a=f,(l=[{key:"connectedCallback",value:function(){this.render()}},{key:"clickEvent",set:function(e){this._clickEvent=e,this.render()}},{key:"value",get:function(){return this.shadowDOM.querySelector("#searchElement").value}},{key:"render",value:function(){this.shadowDOM.innerHTML='\n       <style>\n       .search-container {\n           max-width: 800px;\n           box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n           padding: 16px;\n           border-radius: 5px;\n           display: flex;\n           position: sticky;\n           top: 10px;\n           background-color: white;\n       }\n      \n       .search-container > input {\n           width: 75%;\n           padding: 16px;\n           border: 0;\n           border-bottom: 1px solid black;\n           font-weight: bold;\n       }\n      \n       .search-container > input:focus {\n           outline: 0;\n           border-bottom: 2px solid cornflowerblue;\n       }\n      \n       .search-container > input:focus::placeholder {\n           font-weight: bold;\n       }\n      \n       .search-container >  input::placeholder {\n           color: black;\n           font-weight: normal;\n       }\n      \n       .search-container > button {\n           width: 23%;\n           cursor: pointer;\n           margin-left: auto;\n           padding: 16px;\n           background-color: yellow;\n           color: brown;\n           \n           border: 0;\n           text-transform: uppercase;\n       }\n      \n       @media screen and (max-width: 550px){\n           .search-container {\n               flex-direction: column;\n               position: static;\n           }\n      \n           .search-container > input {\n               width: 100%;\n               margin-bottom: 12px;\n           }\n      \n           .search-container > button {\n               width: 100%;\n           }\n       }\n       </style>\n       <div id="search-container" class="search-container">\n           <input placeholder="Search Meal" id="searchElement" type="search">\n           <button id="searchButtonElement" type="submit">Search</button>\n       </div>\n       ',this.shadowDOM.querySelector("#searchButtonElement").addEventListener("click",this._clickEvent)}}])&&t(a.prototype,l),Object.defineProperty(a,"prototype",{writable:!1}),f}(r(HTMLElement));customElements.define("search-bar",a)},890:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var r=n(372),o=n.n(r),i=n(286),c=n.n(i)()(o());c.push([e.id,"* {\r\n    padding: 0;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    font-family: sans-serif;    \r\n}\r\n\r\nmain {\r\n    width: 90%;\r\n    max-width: 800px;\r\n    margin: 32px auto;\r\n}\r\n\r\nclub-list {\r\n    display: block;\r\n    margin-top: 32px;\r\n    width: 100%;\r\n    padding: 16px;\r\n}",""]);const u=c},379:e=>{"use strict";var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},c=[],u=0;u<e.length;u++){var a=e[u],l=r.base?a[0]+r.base:a[0],s=i[l]||0,f="".concat(l," ").concat(s);i[l]=s+1;var p=n(f),d={css:a[1],media:a[2],sourceMap:a[3],supports:a[4],layer:a[5]};if(-1!==p)t[p].references++,t[p].updater(d);else{var y=o(d,r);r.byIndex=u,t.splice(u,0,{identifier:f,updater:y,references:1})}c.push(f)}return c}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<i.length;c++){var u=n(i[c]);t[u].references--}for(var a=r(e,o),l=0;l<i.length;l++){var s=n(i[l]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}i=a}}},569:e=>{"use strict";var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},380:e=>{"use strict";e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";var e=n(379),t=n.n(e),r=n(380),o=n.n(r),i=n(569),c=n.n(i),u=n(565),a=n.n(u),l=n(216),s=n.n(l),f=n(589),p=n.n(f),d=n(890),y={};function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){if(t&&("object"===h(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function v(e){var t="function"==typeof Map?new Map:void 0;return v=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return w(e,arguments,O(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),x(r,e)},v(e)}function w(e,t,n){return w=g()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&x(o,n.prototype),o},w.apply(null,arguments)}function g(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function x(e,t){return x=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},x(e,t)}function O(e){return O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},O(e)}y.styleTagTransform=p(),y.setAttributes=a(),y.insert=c().bind(null,"head"),y.domAPI=o(),y.insertStyleElement=s(),t()(d.Z,y),d.Z&&d.Z.locals&&d.Z.locals,n(244),n(929);var j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&x(e,t)}(c,e);var t,n,r,o,i=(t=c,n=g(),function(){var e,r=O(t);if(n){var o=O(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return m(this,e)});function c(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(e=i.call(this)).shadowDOM=e.attachShadow({mode:"open"}),e}return r=c,(o=[{key:"meals",set:function(e){this._meals=e,this.render()}},{key:"render",value:function(){var e=this;this.shadowDOM.innerHTML="",this._meals.forEach((function(t){var n=document.createElement("meal-item");n.meal=t,e.shadowDOM.appendChild(n)}))}},{key:"renderError",value:function(e){this.shadowDOM.innerHTML="\n        <style>\n             .placeholder {\n                   font-weight: lighter;\n                   color: rgba(0,0,0,0.5);\n                   -webkit-user-select: none;\n                   -moz-user-select: none;\n                   -ms-user-select: none;\n                   user-select: none;\n               }\n           </style>",this.shadowDOM.innerHTML+='<h2 class="placeholder">'.concat(e,"</h2>")}}])&&b(r.prototype,o),Object.defineProperty(r,"prototype",{writable:!1}),c}(v(HTMLElement));function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}customElements.define("meal-list",j),n(998);const S=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n;return t=e,n=[{key:"search",value:function(e){return fetch("www.themealdb.com/api/json/v1/1/search.php?s=".concat(e)).then((function(e){return e.json()})).then((function(t){return t.teams?Promise.resolve(t.teams):Promise.reject("".concat(e," is not found"))}))}}],null&&E(t.prototype,null),n&&E(t,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function M(e,t,n,r,o,i,c){try{var u=e[i](c),a=u.value}catch(e){return void n(e)}u.done?t(a):Promise.resolve(a).then(r,o)}document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector("search-bar"),t=document.querySelector("meal-list"),n=function(){var t,n=(t=regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,S.searchMeal(e.value);case 3:n=t.sent,r(n),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),o(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})),function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function c(e){M(i,r,o,c,u,"next",e)}function u(e){M(i,r,o,c,u,"throw",e)}c(void 0)}))});return function(){return n.apply(this,arguments)}}(),r=function(e){t.meals=e},o=function(e){t.renderError(e)};e.clickEvent=n}))})()})();