(window.webpackJsonp=window.webpackJsonp||[]).push([[695],{1142:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return b}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),s=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},d=function(e){var n=s(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},f=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=s(t),f=r,b=d["".concat(i,".").concat(f)]||d[f]||p[f]||o;return t?a.a.createElement(b,u(u({ref:n},l),{},{components:t})):a.a.createElement(b,u({ref:n},l))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=f;var u={};for(var c in n)hasOwnProperty.call(n,c)&&(u[c]=n[c]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var l=2;l<o;l++)i[l]=t[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},1143:function(e,n,t){"use strict";(function(e){var r=this&&this.__createBinding||(Object.create?function(e,n,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return n[t]}})}:function(e,n,t,r){void 0===r&&(r=t),e[r]=n[t]}),a=this&&this.__setModuleDefault||(Object.create?function(e,n){Object.defineProperty(e,"default",{enumerable:!0,value:n})}:function(e,n){e.default=n}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&r(n,e,t);return a(n,e),n};Object.defineProperty(n,"__esModule",{value:!0}),n.OssOnly=n.FbInternalOnly=n.isInternal=n.validateFbContentArgs=n.fbInternalOnly=n.fbContent=n.bloks=void 0,n.bloks=o(t(1146));const i=["internal","external"];let u;try{u=t(1144).usePluginData}catch(p){u=null}function c(e){return s(e),d()?"internal"in e?l(e.internal):[]:"external"in e?l(e.external):[]}function l(e){return"function"==typeof e?e():e}function s(e){if("object"!=typeof e)throw new Error(`fbContent() args must be an object containing keys: ${i}. Instead got ${e}`);if(!Object.keys(e).find((e=>i.find((n=>n===e)))))throw new Error(`No valid args found in ${JSON.stringify(e)}. Accepted keys: ${i}`);const n=Object.keys(e).filter((e=>!i.find((n=>n===e))));if(n.length>0)throw new Error(`Unexpected keys ${n} found in fbContent() args. Accepted keys: ${i}`)}function d(){return e.env.FB_INTERNAL||u&&u("internaldocs-fb").FB_INTERNAL}n.fbContent=c,n.fbInternalOnly=function(e){return c({internal:e})},n.validateFbContentArgs=s,n.isInternal=d,n.FbInternalOnly=function(e){return d()?e.children:null},n.OssOnly=function(e){return d()?null:e.children}}).call(this,t(1145))},1144:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return a})),t.d(n,"useAllPluginInstancesData",(function(){return o})),t.d(n,"usePluginData",(function(){return i}));var r=t(22);function a(){var e=Object(r.default)().globalData;if(!e)throw new Error("Docusaurus global data not found");return e}function o(e){var n=a()[e];if(!n)throw new Error("Docusaurus plugin global data not found for pluginName="+e);return n}function i(e,n){void 0===n&&(n="default");var t=o(e)[n];if(!t)throw new Error("Docusaurus plugin global data not found for pluginName="+e+" and pluginId="+n);return t}},1145:function(e,n){var t,r,a=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function u(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:o}catch(e){t=o}try{r="function"==typeof clearTimeout?clearTimeout:i}catch(e){r=i}}();var c,l=[],s=!1,d=-1;function p(){s&&c&&(s=!1,c.length?l=c.concat(l):d=-1,l.length&&f())}function f(){if(!s){var e=u(p);s=!0;for(var n=l.length;n;){for(c=l,l=[];++d<n;)c&&c[d].run();d=-1,n=l.length}c=null,s=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(n){try{return r.call(null,e)}catch(n){return r.call(this,e)}}}(e)}}function b(e,n){this.fun=e,this.array=n}function y(){}a.nextTick=function(e){var n=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)n[t-1]=arguments[t];l.push(new b(e,n)),1!==l.length||s||u(f)},b.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=y,a.addListener=y,a.once=y,a.off=y,a.removeListener=y,a.removeAllListeners=y,a.emit=y,a.prependListener=y,a.prependOnceListener=y,a.listeners=function(e){return[]},a.binding=function(e){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}},1146:function(e,n,t){"use strict";var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(a,o){function i(e){try{c(r.next(e))}catch(n){o(n)}}function u(e){try{c(r.throw(e))}catch(n){o(n)}}function c(e){var n;e.done?a(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(i,u)}c((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.getSpecInfo=void 0;const a=t(1147);n.getSpecInfo=function(e){return r(this,void 0,void 0,(function*(){return yield a.call({module:"bloks",api:"getSpecInfo",args:{styleId:e}})}))}},1147:function(e,n,t){"use strict";var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(a,o){function i(e){try{c(r.next(e))}catch(n){o(n)}}function u(e){try{c(r.throw(e))}catch(n){o(n)}}function c(e){var n;e.done?a(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(i,u)}c((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.call=void 0;let a=!1,o=0;const i={};n.call=function(e){return r(this,void 0,void 0,(function*(){if("staticdocs.thefacebook.com"!==window.location.hostname&&"localhost"!==window.location.hostname)return Promise.reject(new Error("Not running on static docs"));a||(a=!0,window.addEventListener("message",(e=>{if("static-docs-bridge-response"!==e.data.event)return;const n=e.data.id;n in i||console.error(`Recieved response for id: ${n} with no matching receiver`),"response"in e.data?i[n].resolve(e.data.response):i[n].reject(new Error(e.data.error)),delete i[n]})));const n=o++,t=new Promise(((e,t)=>{i[n]={resolve:e,reject:t}})),r={event:"static-docs-bridge-call",id:n,module:e.module,api:e.api,args:e.args},u="localhost"===window.location.hostname?"*":"https://www.internalfb.com";return window.parent.postMessage(r,u),t}))}},1148:function(e,n,t){"use strict";t(61);var r=t(1143),a=t(0);function o(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function i(e){var n=e.children;return a.createElement("div",{className:"docsRating",id:"docsRating"},a.createElement("hr",null),n)}var u=function(){var e=a.useState(!1),n=e[0],t=e[1],r=function(e){t(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return n?"Thank you for letting us know!":a.createElement(a.Fragment,null,"Is this page useful?",a.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return r(1)}},a.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),a.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return r(0)}},a.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},c=function(){return a.createElement("p",null,"Let us know how these docs can be improved by",a.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:o},"Filing a task"))},l=function(){return a.createElement(i,null,a.createElement(c,null),a.createElement(u,null))},s=function(){return a.createElement(i,null,a.createElement(u,null))};n.a=function(){return Object(r.fbContent)({internal:a.createElement(l,null),external:a.createElement(s,null)})}},779:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return u})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return d}));var r=t(3),a=t(8),o=(t(0),t(1142)),i=t(1148),u={id:"use-preloaded-query",title:"usePreloadedQuery",slug:"/api-reference/use-preloaded-query/",description:"API reference for usePreloadedQuery, a React hook used to read query data from the Relay store using a query reference",keywords:["read","query","query reference"]},c={unversionedId:"api-reference/hooks/use-preloaded-query",id:"api-reference/hooks/use-preloaded-query",isDocsHomePage:!1,title:"usePreloadedQuery",description:"API reference for usePreloadedQuery, a React hook used to read query data from the Relay store using a query reference",source:"@site/docs/api-reference/hooks/use-preloaded-query.md",slug:"/api-reference/use-preloaded-query/",permalink:"/docs/next/api-reference/use-preloaded-query/",editUrl:"https://github.com/facebook/relay/edit/master/website/docs/api-reference/hooks/use-preloaded-query.md",version:"current",lastUpdatedBy:"Andrey Lunyov",lastUpdatedAt:1621520203,sidebar:"docs",previous:{title:"useRelayEnvironment",permalink:"/docs/next/api-reference/use-relay-environment/"},next:{title:"useQueryLoader",permalink:"/docs/next/api-reference/use-query-loader/"}},l=[{value:"<code>usePreloadedQuery</code>",id:"usepreloadedquery",children:[{value:"Arguments",id:"arguments",children:[]},{value:"Flow Type Parameters",id:"flow-type-parameters",children:[]},{value:"Return Value",id:"return-value",children:[]}]}],s={toc:l};function d(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"usepreloadedquery"},Object(o.b)("inlineCode",{parentName:"h2"},"usePreloadedQuery")),Object(o.b)("p",null,"Hook used to access data fetched by an earlier call to ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"../load-query"}),Object(o.b)("inlineCode",{parentName:"a"},"loadQuery"))," or with the help of ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"../use-query-loader"}),Object(o.b)("inlineCode",{parentName:"a"},"useQueryLoader")),'. This implements the "render-as-you-fetch" pattern:'),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Call the ",Object(o.b)("inlineCode",{parentName:"li"},"loadQuery")," callback returned from ",Object(o.b)("inlineCode",{parentName:"li"},"useQueryLoader"),". This will store a query reference in React state.",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"You can also call the imported ",Object(o.b)("inlineCode",{parentName:"li"},"loadQuery")," directly, which returns a query reference. In that case, store the item in state or in a React ref, and call ",Object(o.b)("inlineCode",{parentName:"li"},"dispose()")," on the value when you are no longer using it."))),Object(o.b)("li",{parentName:"ul"},"Then, in your render method, consume the query reference with ",Object(o.b)("inlineCode",{parentName:"li"},"usePreloadedQuery()"),". This call will suspend if the query is still pending, throw an error if it failed, and otherwise return the query results."),Object(o.b)("li",{parentName:"ul"},"This pattern is encouraged over ",Object(o.b)("inlineCode",{parentName:"li"},"useLazyLoadQuery()")," as it can allow fetching data earlier while not blocking rendering.")),Object(o.b)("p",null,"For more information, see the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"../../guided-tour/rendering/queries"}),"Rendering Queries")," guide."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import type {AppQuery as AppQueryType} from 'AppQuery.graphql';\n\nconst React = require('React');\n\nconst {graphql, useQueryLoader, usePreloadedQuery} = require('react-relay');\n\nconst AppQuery = graphql`\n  query AppQuery($id: ID!) {\n    user(id: $id) {\n      name\n    }\n  }\n`;\n\ntype Props = {\n  initialQueryRef: PreloadedQuery<AppQueryType>,\n};\n\nfunction NameLoader(props) {\n  const [queryReference, loadQuery] = useQueryLoader(\n    AppQuery\n    props.initialQueryRef, /* e.g. provided by router */\n  );\n\n  return (<>\n    <Button\n      onClick={() => loadQuery({id: '4'})}\n      disabled={queryReference != null}\n    >\n      Reveal your name!\n    </Button>\n    <Suspense fallback=\"Loading...\">\n      {queryReference != null\n        ? <NameDisplay queryReference={queryReference} />\n        : null\n      }\n    </Suspense>\n  </>);\n}\n\nfunction NameDisplay({ queryReference }) {\n  const data = usePreloadedQuery<AppQueryType>(AppQuery, queryReference);\n\n  return <h1>{data.user?.name}</h1>;\n}\n")),Object(o.b)("h3",{id:"arguments"},"Arguments"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"query"),": GraphQL query specified using a ",Object(o.b)("inlineCode",{parentName:"li"},"graphql")," template literal."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"preloadedQueryReference"),": A ",Object(o.b)("inlineCode",{parentName:"li"},"PreloadedQuery")," query reference, which can be acquired from ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"../use-query-loader"}),Object(o.b)("inlineCode",{parentName:"a"},"useQueryLoader"))," or by calling ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"../load-query"}),Object(o.b)("inlineCode",{parentName:"a"},"loadQuery()"))," .")),Object(o.b)("h3",{id:"flow-type-parameters"},"Flow Type Parameters"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"TQuery"),": Type parameter that should correspond to the Flow type for the specified query. This type is available to import from the the auto-generated file: ",Object(o.b)("inlineCode",{parentName:"li"},"<query_name>.graphql.js"),".")),Object(o.b)("h3",{id:"return-value"},"Return Value"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"data"),": Object that contains data which has been read out from the Relay store; the object matches the shape of specified query.",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"The Flow type for data will also match this shape, and contain types derived from the GraphQL Schema. For example, the type of ",Object(o.b)("inlineCode",{parentName:"li"},"data")," above is: ",Object(o.b)("inlineCode",{parentName:"li"},"{ user: ?{ name: ?string } }"),".")))),Object(o.b)(i.a,{mdxType:"DocsRating"}))}d.isMDXComponent=!0}}]);