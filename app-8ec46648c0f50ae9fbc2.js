webpackJsonp([0xd2a57dc1d883],{"./.cache/api-runner-browser.js":function(e,n,o){"use strict";function t(e,n,o){var t=s.map(function(o){if(o.plugin[e]){var t=o.plugin[e](n,o.options);return t}});return t=t.filter(function(e){return"undefined"!=typeof e}),t.length>0?t:o?[o]:[]}function a(e,n,o){return s.reduce(function(o,t){return t.plugin[e]?o.then(function(){return t.plugin[e](n,t.options)}):o},Promise.resolve())}n.__esModule=!0,n.apiRunner=t,n.apiRunnerAsync=a;var s=[{plugin:o("./node_modules/gatsby-plugin-offline/gatsby-browser.js"),options:{plugins:[]}},{plugin:o("./node_modules/gatsby-plugin-google-analytics/gatsby-browser.js"),options:{plugins:[],trackingId:"UA-61225014-1"}}]},"./.cache/async-requires.js":function(e,n,o){"use strict";var t;n.components={"component---node-modules-gatsby-plugin-offline-app-shell-js":o("./node_modules/gatsby-module-loader/index.js?name=component---node-modules-gatsby-plugin-offline-app-shell-js!./node_modules/gatsby-plugin-offline/app-shell.js"),"component---src-pages-404-js":o("./node_modules/gatsby-module-loader/index.js?name=component---src-pages-404-js!./src/pages/404.js"),"component---src-pages-index-js":o("./node_modules/gatsby-module-loader/index.js?name=component---src-pages-index-js!./src/pages/index.js")},n.json=(t={"layout-index.json":o("./node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json"),"offline-plugin-app-shell-fallback.json":o("./node_modules/gatsby-module-loader/index.js?name=path---offline-plugin-app-shell-fallback!./.cache/json/offline-plugin-app-shell-fallback.json")},t["layout-index.json"]=o("./node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json"),t["404.json"]=o("./node_modules/gatsby-module-loader/index.js?name=path---404!./.cache/json/404.json"),t["layout-index.json"]=o("./node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json"),t["index.json"]=o("./node_modules/gatsby-module-loader/index.js?name=path---index!./.cache/json/index.json"),t["layout-index.json"]=o("./node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json"),t["404-html.json"]=o("./node_modules/gatsby-module-loader/index.js?name=path---404-html!./.cache/json/404-html.json"),t),n.layouts={"component---src-layouts-index-js":o("./node_modules/gatsby-module-loader/index.js?name=component---src-layouts-index-js!./.cache/layouts/index.js")}},"./.cache/component-renderer.js":function(e,n,o){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}function a(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function s(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function r(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}n.__esModule=!0;var u=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(e[t]=o[t])}return e},l=o("./node_modules/react/react.js"),i=t(l),c=o("./node_modules/prop-types/index.js"),d=t(c),m=o("./.cache/loader.js"),p=t(m),f=o("./.cache/emitter.js"),h=t(f),g=function(e){var n=e.children;return i.default.createElement("div",null,n())},j=function(e){function n(o){a(this,n);var t=s(this,e.call(this));return t.state={location:o.location,pageResources:p.default.getResourcesForPathname(o.location.pathname)},t}return r(n,e),n.prototype.componentWillReceiveProps=function(e){var n=this;if(this.state.location.pathname!==e.location.pathname){var o=p.default.getResourcesForPathname(e.location.pathname);o?this.setState({location:e.location,pageResources:o}):p.default.getResourcesForPathname(e.location.pathname,function(o){n.setState({location:e.location,pageResources:o})})}},n.prototype.componentDidMount=function(){var e=this;h.default.on("onPostLoadPageResources",function(n){n.page.path===p.default.getPage(e.state.location.pathname).path&&e.setState({pageResources:n.pageResources})})},n.prototype.shouldComponentUpdate=function(e,n){return!n.pageResources||(!(this.state.pageResources||!n.pageResources)||(this.state.pageResources.component!==n.pageResources.component||(this.state.pageResources.json!==n.pageResources.json||!(this.state.location.key===n.location.key||!n.pageResources.page||!n.pageResources.page.matchPath&&!n.pageResources.page.path))))},n.prototype.render=function(){return this.props.page?this.state.pageResources?(0,l.createElement)(this.state.pageResources.component,u({key:this.props.location.pathname},this.props,this.state.pageResources.json)):null:this.props.layout?(0,l.createElement)(this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:g,u({key:this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:"DefaultLayout"},this.props)):null},n}(i.default.Component);j.propTypes={page:d.default.bool,layout:d.default.bool,location:d.default.object},n.default=j,e.exports=n.default},"./.cache/emitter.js":function(e,n,o){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}var a=o("./node_modules/mitt/dist/mitt.js"),s=t(a),r=(0,s.default)();e.exports=r},"./.cache/find-page.js":function(e,n,o){"use strict";var t=o("./node_modules/react-router-dom/index.js"),a={};e.exports=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(o){var s=decodeURIComponent(o),r=s.slice(n.length);if(r.split("#").length>1&&(r=r.split("#").slice(0,-1).join("")),r.split("?").length>1&&(r=r.split("?").slice(0,-1).join("")),a[r])return a[r];var u=void 0;return e.some(function(e){if(e.matchPath){if((0,t.matchPath)(r,{path:e.path})||(0,t.matchPath)(r,{path:e.matchPath}))return u=e,a[r]=e,!0}else{if((0,t.matchPath)(r,{path:e.path,exact:!0}))return u=e,a[r]=e,!0;if((0,t.matchPath)(r,{path:e.path+"index.html"}))return u=e,a[r]=e,!0}return!1}),u}}},"./node_modules/gatsby-module-loader/index.js?name=path---404-html!./.cache/json/404-html.json":function(e,n,o){o("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return o.e(0xa2868bfb69fc,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o("./node_modules/json-loader/index.js!./.cache/json/404-html.json")})})}},"./node_modules/gatsby-module-loader/index.js?name=path---404!./.cache/json/404.json":function(e,n,o){o("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return o.e(0xe70826b53c04,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o("./node_modules/json-loader/index.js!./.cache/json/404.json")})})}},"./node_modules/gatsby-module-loader/index.js?name=path---index!./.cache/json/index.json":function(e,n,o){o("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return o.e(0x81b8806e4260,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o("./node_modules/json-loader/index.js!./.cache/json/index.json")})})}},"./node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json":function(e,n,o){o("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return o.e(60335399758886,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o("./node_modules/json-loader/index.js!./.cache/json/layout-index.json")})})}},"./node_modules/gatsby-module-loader/index.js?name=path---offline-plugin-app-shell-fallback!./.cache/json/offline-plugin-app-shell-fallback.json":function(e,n,o){o("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return o.e(0xbf4c176e203a,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o("./node_modules/json-loader/index.js!./.cache/json/offline-plugin-app-shell-fallback.json")})})}},"./node_modules/gatsby-module-loader/index.js?name=component---src-layouts-index-js!./.cache/layouts/index.js":function(e,n,o){o("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return o.e(0x67ef26645b2a,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o('./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/callummr/dev/callummr/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/callummr/dev/callummr/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/callummr/dev/callummr/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/Users/callummr/dev/callummr/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/callummr/dev/callummr/node_modules/babel-preset-stage-0/lib/index.js","/Users/callummr/dev/callummr/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./.cache/layouts/index.js')})})}},"./.cache/loader.js":function(e,n,o){(function(n){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}var a=o("./node_modules/react/react.js"),s=(t(a),o("./.cache/find-page.js")),r=t(s),u=o("./.cache/emitter.js"),l=t(u),i=void 0,c={},d={},m={},p={},f={},h=[],g=[],j={},y=[],b={},_=function(e){return e&&e.default||e},v=void 0,x=!0;v=o("./.cache/prefetcher.js")({getNextQueuedResources:function(){return y.slice(-1)[0]},createResourceDownload:function(e){P(e,function(){y=y.filter(function(n){return n!==e}),v.onResourcedFinished(e)})}}),l.default.on("onPreLoadPageResources",function(e){v.onPreLoadPageResources(e)}),l.default.on("onPostLoadPageResources",function(e){v.onPostLoadPageResources(e)});var R=function(e,n){return b[e]>b[n]?1:b[e]<b[n]?-1:0},w=function(e,n){return j[e]>j[n]?1:j[e]<j[n]?-1:0},P=function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(p[e])n.nextTick(function(){o(null,p[e])});else{var t="component---"===e.slice(0,12)?d.components[e]||d.layouts[e]:d.json[e];t(function(n,t){p[e]=t,o(n,t)})}},k=function(e,o){f[e]?n.nextTick(function(){o(null,f[e])}):P(e,function(n,t){if(n)o(n);else{var a=_(t());f[e]=a,o(n,a)}})},E=1,C={empty:function(){g=[],j={},b={},y=[],h=[]},addPagesArray:function(e){h=e;var n="";i=(0,r.default)(e,n)},addDevRequires:function(e){c=e},addProdRequires:function(e){d=e},dequeue:function(e){return g.pop()},enqueue:function(e){if(!h.some(function(n){return n.path===e}))return!1;var n=1/E;E+=1,j[e]?j[e]+=1:j[e]=1,C.has(e)||g.unshift(e),g.sort(w);var o=i(e);return o.jsonName&&(b[o.jsonName]?b[o.jsonName]+=1+n:b[o.jsonName]=1+n,y.indexOf(o.jsonName)!==-1||p[o.jsonName]||y.unshift(o.jsonName)),o.componentChunkName&&(b[o.componentChunkName]?b[o.componentChunkName]+=1+n:b[o.componentChunkName]=1+n,y.indexOf(o.componentChunkName)!==-1||p[o.jsonName]||y.unshift(o.componentChunkName)),y.sort(R),v.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:y,resourcesCount:b}},getPages:function(){return{pathArray:g,pathCount:j}},getPage:function(e){return i(e)},has:function(e){return g.some(function(n){return n===e})},getResourcesForPathname:function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};x&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(i(e)||navigator.serviceWorker.getRegistrations().then(function(e){for(var n=e,o=Array.isArray(n),t=0,n=o?n:n[Symbol.iterator]();;){var a;if(o){if(t>=n.length)break;a=n[t++]}else{if(t=n.next(),t.done)break;a=t.value}var s=a;s.unregister()}window.location.reload()})),x=!1;var t=i(e);if(!t)return void console.log("A page wasn't found for \""+e+'"');if(e=t.path,m[e])return n.nextTick(function(){o(m[e]),l.default.emit("onPostLoadPageResources",{page:t,pageResources:m[e]})}),m[e];l.default.emit("onPreLoadPageResources",{path:e});var a=void 0,s=void 0,r=void 0,u=function(){if(a&&s&&(!t.layoutComponentChunkName||r)){m[e]={component:a,json:s,layout:r};var n={component:a,json:s,layout:r};o(n),l.default.emit("onPostLoadPageResources",{page:t,pageResources:n})}};return k(t.componentChunkName,function(e,n){e&&console.log("Loading the component for "+t.path+" failed"),a=n,u()}),k(t.jsonName,function(e,n){e&&console.log("Loading the JSON for "+t.path+" failed"),s=n,u()}),void(t.layoutComponentChunkName&&k(t.layoutComponentChunkName,function(e,n){e&&console.log("Loading the Layout for "+t.path+" failed"),r=n,u()}))},peek:function(e){return g.slice(-1)[0]},length:function(){return g.length},indexOf:function(e){return g.length-g.indexOf(e)-1}};e.exports=C}).call(n,o("./node_modules/process/browser.js"))},"./.cache/pages.json":function(e,n){e.exports=[{componentChunkName:"component---node-modules-gatsby-plugin-offline-app-shell-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"offline-plugin-app-shell-fallback.json",path:"/offline-plugin-app-shell-fallback/"},{componentChunkName:"component---src-pages-404-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404.json",path:"/404/"},{componentChunkName:"component---src-pages-index-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"index.json",path:"/"},{componentChunkName:"component---src-pages-404-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404-html.json",path:"/404.html"}]},"./.cache/prefetcher.js":function(e,n){"use strict";e.exports=function(e){var n=e.getNextQueuedResources,o=e.createResourceDownload,t=[],a=[],s=function(){var e=n();e&&(a.push(e),o(e))},r=function(e){switch(e.type){case"RESOURCE_FINISHED":a=a.filter(function(n){return n!==e.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":t.push(e.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":t=t.filter(function(n){return n!==e.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===a.length&&0===t.length&&s()},0)};return{onResourcedFinished:function(e){r({type:"RESOURCE_FINISHED",payload:e})},onPreLoadPageResources:function(e){r({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:e})},onPostLoadPageResources:function(e){r({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:e})},onNewResourcesAdded:function(){r({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:t,resourcesDownloading:a}},empty:function(){t=[],a=[]}}}},0:function(e,n,o){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}var a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(e[t]=o[t])}return e},s=o("./.cache/api-runner-browser.js"),r=o("./node_modules/react/react.js"),u=t(r),l=o("./node_modules/react-dom/index.js"),i=t(l),c=o("./node_modules/react-router-dom/index.js"),d=o("./node_modules/gatsby-react-router-scroll/index.js"),m=o("./node_modules/history/createBrowserHistory.js"),p=t(m),f=o("./node_modules/domready/ready.js"),h=t(f),g=o("./.cache/emitter.js"),j=t(g),y=o("./.cache/pages.json"),b=t(y),_=o("./.cache/redirects.json"),v=t(_),x=o("./.cache/component-renderer.js"),R=t(x),w=o("./.cache/async-requires.js"),P=t(w),k=o("./.cache/loader.js"),E=t(k);o("./node_modules/core-js/modules/es6.promise.js"),window.___emitter=j.default,E.default.addPagesArray(b.default),E.default.addProdRequires(P.default),window.asyncRequires=P.default,window.___loader=E.default,window.matchPath=c.matchPath;var C=(0,p.default)(),N=v.default.reduce(function(e,n){return e[n.fromPath]=n,e},{}),O=function(e){var n=N[e];return null!=n&&(C.replace(n.toPath),!0)};O(window.location.pathname),(0,s.apiRunnerAsync)("onClientEntry").then(function(){function e(e){window.___history||(window.___history=e,e.listen(function(e,n){O(e.pathname)||(0,s.apiRunner)("onRouteUpdate",{location:e,action:n})}))}function n(e,n){var o=n.location.pathname,t=(0,s.apiRunner)("shouldUpdateScroll",{prevRouterProps:e,pathname:o});if(t.length>0)return t[0];if(e){var a=e.location.pathname;if(a===o)return!1}return!0}(0,s.apiRunner)("registerServiceWorker").length>0&&o("./.cache/register-service-worker.js");var t=function(e){function n(o){o.page.path===E.default.getPage(e).path&&(j.default.off("onPostLoadPageResources",n),clearTimeout(t),window.___history.push(e))}var o=N[e];if(o&&(e=o.toPath),window.location.pathname!==e){var t=setTimeout(function(){j.default.off("onPostLoadPageResources",n),j.default.emit("onDelayedLoadPageResources",{pathname:e}),window.___history.push(e)},1e3);E.default.getResourcesForPathname(e)?(clearTimeout(t),window.___history.push(e)):j.default.on("onPostLoadPageResources",n)}};window.___navigateTo=t,(0,s.apiRunner)("onRouteUpdate",{location:C.location,action:C.action});var l=(0,s.apiRunner)("replaceRouterComponent",{history:C})[0],m=function(e){var n=e.children;return u.default.createElement(c.Router,{history:C},n)};E.default.getResourcesForPathname(window.location.pathname,function(){var o=function(){return(0,r.createElement)(l?l:m,null,(0,r.createElement)(d.ScrollContext,{shouldUpdateScroll:n},(0,r.createElement)((0,c.withRouter)(R.default),{layout:!0,children:function(n){return(0,r.createElement)(c.Route,{render:function(o){e(o.history);var t=n?n:o;return E.default.getPage(t.location.pathname)?(0,r.createElement)(R.default,a({page:!0},t)):(0,r.createElement)(R.default,{location:{page:!0,pathname:"/404.html"}})}})}})))},t=(0,s.apiRunner)("wrapRootComponent",{Root:o},o)[0];(0,h.default)(function(){return i.default.render(u.default.createElement(t,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0,function(){(0,s.apiRunner)("onInitialClientRender")})})})})},"./.cache/redirects.json":function(e,n){e.exports=[]},"./.cache/register-service-worker.js":function(e,n,o){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}var a=o("./.cache/emitter.js"),s=t(a),r="/";"serviceWorker"in navigator&&navigator.serviceWorker.register(r+"sw.js").then(function(e){e.addEventListener("updatefound",function(){var n=e.installing;console.log("installingWorker",n),n.addEventListener("statechange",function(){switch(n.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),s.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(e){console.error("Error during service worker registration:",e)})},"./node_modules/domready/ready.js":function(e,n,o){!function(n,o){e.exports=o()}("domready",function(){var e,n=[],o=document,t=o.documentElement.doScroll,a="DOMContentLoaded",s=(t?/^loaded|^c/:/^loaded|^i|^c/).test(o.readyState);return s||o.addEventListener(a,e=function(){for(o.removeEventListener(a,e),s=1;e=n.shift();)e()}),function(e){s?setTimeout(e,0):n.push(e)}})},"./node_modules/gatsby-module-loader/patch.js":function(e,n,o){"use strict";function t(){function e(e){var n=t.lastChild;return"SCRIPT"!==n.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",n)):void(n.onload=n.onerror=function(){n.onload=n.onerror=null,setTimeout(e,0)})}var n,t=document.querySelector("head"),a=o.e,s=o.s;o.e=function(t,r){var u=!1,l=!0,i=function(e){r&&(r(o,e),r=null)};return!s&&n&&n[t]?void i(!0):(a(t,function(){u||(u=!0,l?setTimeout(function(){i()}):i())}),void(u||(l=!1,e(function(){u||(u=!0,s?s[t]=void 0:(n||(n={}),n[t]=!0),i(!0))}))))}}t()},"./node_modules/gatsby-plugin-google-analytics/gatsby-browser.js":function(e,n,o){"use strict";n.onRouteUpdate=function(e){var n=e.location;"function"==typeof ga&&(window.ga("set","page",(n||{}).pathname),window.ga("send","pageview"))}},"./node_modules/gatsby-module-loader/index.js?name=component---node-modules-gatsby-plugin-offline-app-shell-js!./node_modules/gatsby-plugin-offline/app-shell.js":function(e,n,o){o("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return o.e(99219681209289,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o("./node_modules/gatsby-plugin-offline/app-shell.js")})})}},"./node_modules/gatsby-plugin-offline/gatsby-browser.js":function(e,n){"use strict";n.registerServiceWorker=function(){return!0}},"./node_modules/mitt/dist/mitt.js":function(e,n){function o(e){return e=e||Object.create(null),{on:function(n,o){(e[n]||(e[n]=[])).push(o)},off:function(n,o){e[n]&&e[n].splice(e[n].indexOf(o)>>>0,1)},emit:function(n,o){(e[n]||[]).map(function(e){e(o)}),(e["*"]||[]).map(function(e){e(n,o)})}}}e.exports=o},"./node_modules/process/browser.js":function(e,n){function o(){throw new Error("setTimeout has not been defined")}function t(){throw new Error("clearTimeout has not been defined")}function a(e){if(c===setTimeout)return setTimeout(e,0);if((c===o||!c)&&setTimeout)return c=setTimeout,setTimeout(e,0);try{return c(e,0)}catch(n){try{return c.call(null,e,0)}catch(n){return c.call(this,e,0)}}}function s(e){if(d===clearTimeout)return clearTimeout(e);if((d===t||!d)&&clearTimeout)return d=clearTimeout,clearTimeout(e);try{return d(e)}catch(n){try{return d.call(null,e)}catch(n){return d.call(this,e)}}}function r(){h&&p&&(h=!1,p.length?f=p.concat(f):g=-1,f.length&&u())}function u(){if(!h){var e=a(r);h=!0;for(var n=f.length;n;){for(p=f,f=[];++g<n;)p&&p[g].run();g=-1,n=f.length}p=null,h=!1,s(e)}}function l(e,n){this.fun=e,this.array=n}function i(){}var c,d,m=e.exports={};!function(){try{c="function"==typeof setTimeout?setTimeout:o}catch(e){c=o}try{d="function"==typeof clearTimeout?clearTimeout:t}catch(e){d=t}}();var p,f=[],h=!1,g=-1;m.nextTick=function(e){var n=new Array(arguments.length-1);if(arguments.length>1)for(var o=1;o<arguments.length;o++)n[o-1]=arguments[o];f.push(new l(e,n)),1!==f.length||h||a(u)},l.prototype.run=function(){this.fun.apply(null,this.array)},m.title="browser",m.browser=!0,m.env={},m.argv=[],m.version="",m.versions={},m.on=i,m.addListener=i,m.once=i,m.off=i,m.removeListener=i,m.removeAllListeners=i,m.emit=i,m.prependListener=i,m.prependOnceListener=i,m.listeners=function(e){return[]},m.binding=function(e){throw new Error("process.binding is not supported")},m.cwd=function(){return"/"},m.chdir=function(e){throw new Error("process.chdir is not supported")},m.umask=function(){return 0}},"./node_modules/gatsby-module-loader/index.js?name=component---src-pages-404-js!./src/pages/404.js":function(e,n,o){o("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return o.e(0x9427c64ab85d,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o('./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/callummr/dev/callummr/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/callummr/dev/callummr/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/callummr/dev/callummr/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/Users/callummr/dev/callummr/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/callummr/dev/callummr/node_modules/babel-preset-stage-0/lib/index.js","/Users/callummr/dev/callummr/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/404.js')})})}},"./node_modules/gatsby-module-loader/index.js?name=component---src-pages-index-js!./src/pages/index.js":function(e,n,o){o("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return o.e(35783957827783,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o('./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/callummr/dev/callummr/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/callummr/dev/callummr/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/callummr/dev/callummr/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/Users/callummr/dev/callummr/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/callummr/dev/callummr/node_modules/babel-preset-stage-0/lib/index.js","/Users/callummr/dev/callummr/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/index.js')})})}}});
//# sourceMappingURL=app-8ec46648c0f50ae9fbc2.js.map