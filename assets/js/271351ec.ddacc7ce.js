"use strict";(self.webpackChunkwebsite_efi=self.webpackChunkwebsite_efi||[]).push([[2081],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u[d]="string"==typeof e?e:r,l[1]=u;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(7294),r=n(6010),o={tabItem:"tabItem_Ymn6"};function l(e){var t=e.children,n=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,l),hidden:n},t)}},4866:function(e,t,n){n.d(t,{Z:function(){return N}});var a=n(7462),r=n(7294),o=n(6010),l=n(2466),u=n(6550),i=n(1980),s=n(7392),c=n(12);function d(e){return function(e){var t,n;return null!=(t=null==(n=r.Children.map(e,(function(e){if(!e||(0,r.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function p(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:d(n);return function(e){var t=(0,s.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function m(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function f(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,o=(0,u.k6)(),l=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:a});return[(0,i._X)(l),(0,r.useCallback)((function(e){if(l){var t=new URLSearchParams(o.location.search);t.set(l,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[l,o])]}function v(e){var t,n,a,o,l=e.defaultValue,u=e.queryString,i=void 0!==u&&u,s=e.groupId,d=p(e),v=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:l,tabValues:d})})),b=v[0],h=v[1],k=f({queryString:i,groupId:s}),g=k[0],y=k[1],N=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:s}.groupId),n=(0,c.Nk)(t),a=n[0],o=n[1],[a,(0,r.useCallback)((function(e){t&&o.set(e)}),[t,o])]),w=N[0],j=N[1],T=function(){var e=null!=g?g:w;return m({value:e,tabValues:d})?e:null}();return(0,r.useLayoutEffect)((function(){T&&h(T)}),[T]),{selectedValue:b,selectValue:(0,r.useCallback)((function(e){if(!m({value:e,tabValues:d}))throw new Error("Can't select invalid tab value="+e);h(e),y(e),j(e)}),[y,j,d]),tabValues:d}}var b=n(2389),h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){var t=e.className,n=e.block,u=e.selectedValue,i=e.selectValue,s=e.tabValues,c=[],d=(0,l.o5)().blockElementScrollPositionUntilNextRender,p=function(e){var t=e.currentTarget,n=c.indexOf(t),a=s[n].value;a!==u&&(d(t),i(a))},m=function(e){var t,n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":var a,r=c.indexOf(e.currentTarget)+1;n=null!=(a=c[r])?a:c[0];break;case"ArrowLeft":var o,l=c.indexOf(e.currentTarget)-1;n=null!=(o=c[l])?o:c[c.length-1]}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},s.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:function(e){return c.push(e)},onKeyDown:m,onClick:p},l,{className:(0,o.Z)("tabs__item",h.tabItem,null==l?void 0:l.className,{"tabs__item--active":u===t})}),null!=n?n:t)})))}function g(e){var t=e.lazy,n=e.children,a=e.selectedValue,o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var l=o.find((function(e){return e.props.value===a}));return l?(0,r.cloneElement)(l,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})})))}function y(e){var t=v(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",h.tabList)},r.createElement(k,(0,a.Z)({},e,t)),r.createElement(g,(0,a.Z)({},e,t)))}function N(e){var t=(0,b.Z)();return r.createElement(y,(0,a.Z)({key:String(t)},e))}},11:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return b},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return m}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),l=n(4866),u=n(5162),i=["components"],s={id:"node",title:"NodeJS",hide_title:!0,sidebar_label:"NodeJS"},c=void 0,d={unversionedId:"Instalacao/node",id:"Instalacao/node",title:"NodeJS",description:"NodeJS",source:"@site/docs/Instalacao/Node.md",sourceDirName:"Instalacao",slug:"/Instalacao/node",permalink:"/docs/Instalacao/node",draft:!1,tags:[],version:"current",frontMatter:{id:"node",title:"NodeJS",hide_title:!0,sidebar_label:"NodeJS"},sidebar:"someSidebar",previous:{title:"PHP",permalink:"/docs/Instalacao/php"},next:{title:"Python",permalink:"/docs/Instalacao/python"}},p={},m=[{value:"Instalando via NPM",id:"instalando-via-npm",level:2},{value:"Testado com",id:"testado-com",level:2},{value:"Uso B\xe1sico",id:"uso-b\xe1sico",level:2},{value:"Exemplos",id:"exemplos",level:2},{value:"Testes",id:"testes",level:2}],f={toc:m},v="wrapper";function b(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)(v,(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{className:"titulo"},"NodeJS"),(0,o.kt)("div",{className:"subtitulo"},(0,o.kt)("p",null,"Nossa API \xe9 ",(0,o.kt)("a",{href:"https://en.wikipedia.org/wiki/Representational_state_transfer"},"RESTful"),"\ne responde em ",(0,o.kt)("a",{href:"https://www.json.org/json-en.html"},"JSON"),". A Gerencianet utiliza ",(0,o.kt)("a",{href:"https://oauth.net/"},"OAuth")," para fornecer acesso autorizado \xe0 API. Nossa SDK de NodeJS j\xe1 est\xe1 preparada para realizar essa autentica\xe7\xe3o automaticamente."),(0,o.kt)("p",null,"A seguir, confira os procedimentos para instala\xe7\xe3o da SDK da Gerencianet em NodeJS:"),(0,o.kt)("h2",{id:"instalando-via-npm"},"Instalando via NPM"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ npm install gn-api-sdk-node\n")),(0,o.kt)("h2",{id:"testado-com"},"Testado com"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Node ",(0,o.kt)("inlineCode",{parentName:"li"},"0.12.7"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"4.4.0")," , e ",(0,o.kt)("inlineCode",{parentName:"li"},"4.4.4"))),(0,o.kt)("h2",{id:"uso-b\xe1sico"},"Uso B\xe1sico"),(0,o.kt)("p",null,"Referencie o m\xf3dulo:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"var Gerencianet = require('gn-api-sdk-node');\n")),(0,o.kt)("p",null,"Defina suas credenciais e se voc\xea deseja usar sandbox ou n\xe3o:"),(0,o.kt)(l.Z,{defaultValue:"Nodejs",values:[{label:"NodeJS",value:"Nodejs"}],mdxType:"Tabs"},(0,o.kt)(u.Z,{value:"Nodejs",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"var options = {\n  client_id: 'informe_seu_client_id',\n  client_secret: 'informe_seu_client_secret',\n  sandbox: true\n}\n")))),(0,o.kt)("p",null,"Instancie o m\xf3dulo passando suas op\xe7\xf5es:"),(0,o.kt)(l.Z,{defaultValue:"Nodejs",values:[{label:"NodeJS",value:"Nodejs"}],mdxType:"Tabs"},(0,o.kt)(u.Z,{value:"Nodejs",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"var gerencianet = new Gerencianet(options);\n")))),(0,o.kt)("p",null,"Crie a charge (transa\xe7\xe3o):"),(0,o.kt)(l.Z,{defaultValue:"Nodejs",values:[{label:"NodeJS",value:"Nodejs"}],mdxType:"Tabs"},(0,o.kt)(u.Z,{value:"Nodejs",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"var chargeInput = {\n  items: [{\n    name: 'Product A',\n    value: 1000,\n    amount: 2\n  }]\n}\n\ngerencianet\n  .createCharge({}, chargeInput)\n  .then(console.log)\n  .catch(console.log)\n  .done();\n")))),(0,o.kt)("h2",{id:"exemplos"},"Exemplos"),(0,o.kt)("p",null,"Para executar os exemplos, clone este reposit\xf3rio e instale as depend\xeancias:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ git clone git@github.com:gerencianet/gn-api-sdk-node.git\n$ cd gn-api-sdk-node/examples\n$ npm install\n")),(0,o.kt)("p",null,"Defina suas chaves oauth no arquivo ",(0,o.kt)("inlineCode",{parentName:"p"},"credentials.js"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"module.exports = {\n  client_id: 'your_client_id',\n  client_secret: 'your_client_secret'\n}\n")),(0,o.kt)("p",null,"Em seguida, execute o exemplo desejado:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ node createCharge.js\n")),(0,o.kt)("h2",{id:"testes"},"Testes"),(0,o.kt)("p",null,"Para executar o conjunto de testes, primeiro instale as depend\xeancias e, em seguida, execute o teste npm:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ cd gn-api-sdk-node/\n$ npm install\n$ npm test\n"))))}b.isMDXComponent=!0}}]);