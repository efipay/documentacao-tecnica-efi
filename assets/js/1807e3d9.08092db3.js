"use strict";(self.webpackChunkwebsite_efi=self.webpackChunkwebsite_efi||[]).push([[3010],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return v}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),s=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=s(a),m=r,v=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return a?n.createElement(v,l(l({ref:t},c),{},{components:a})):n.createElement(v,l({ref:t},c))}));function v(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u[p]="string"==typeof e?e:r,l[1]=u;for(var s=2;s<o;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5162:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(7294),r=a(6010),o={tabItem:"tabItem_Ymn6"};function l(e){var t=e.children,a=e.hidden,l=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,l),hidden:a},t)}},4866:function(e,t,a){a.d(t,{Z:function(){return O}});var n=a(7462),r=a(7294),o=a(6010),l=a(2466),u=a(6550),i=a(1980),s=a(7392),c=a(12);function p(e){return function(e){var t,a;return null!=(t=null==(a=r.Children.map(e,(function(e){if(!e||(0,r.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:a.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function d(e){var t=e.values,a=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:p(a);return function(e){var t=(0,s.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,a])}function m(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function v(e){var t=e.queryString,a=void 0!==t&&t,n=e.groupId,o=(0,u.k6)(),l=function(e){var t=e.queryString,a=void 0!==t&&t,n=e.groupId;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:a,groupId:n});return[(0,i._X)(l),(0,r.useCallback)((function(e){if(l){var t=new URLSearchParams(o.location.search);t.set(l,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[l,o])]}function b(e){var t,a,n,o,l=e.defaultValue,u=e.queryString,i=void 0!==u&&u,s=e.groupId,p=d(e),b=(0,r.useState)((function(){return function(e){var t,a=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!m({value:a,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}var r=null!=(t=n.find((function(e){return e.default})))?t:n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:l,tabValues:p})})),f=b[0],k=b[1],g=v({queryString:i,groupId:s}),h=g[0],y=g[1],O=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:s}.groupId),a=(0,c.Nk)(t),n=a[0],o=a[1],[n,(0,r.useCallback)((function(e){t&&o.set(e)}),[t,o])]),j=O[0],N=O[1],x=function(){var e=null!=h?h:j;return m({value:e,tabValues:p})?e:null}();return(0,r.useLayoutEffect)((function(){x&&k(x)}),[x]),{selectedValue:f,selectValue:(0,r.useCallback)((function(e){if(!m({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);k(e),y(e),N(e)}),[y,N,p]),tabValues:p}}var f=a(2389),k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){var t=e.className,a=e.block,u=e.selectedValue,i=e.selectValue,s=e.tabValues,c=[],p=(0,l.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,a=c.indexOf(t),n=s[a].value;n!==u&&(p(t),i(n))},m=function(e){var t,a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var n,r=c.indexOf(e.currentTarget)+1;a=null!=(n=c[r])?n:c[0];break;case"ArrowLeft":var o,l=c.indexOf(e.currentTarget)-1;a=null!=(o=c[l])?o:c[c.length-1]}null==(t=a)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},s.map((function(e){var t=e.value,a=e.label,l=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:function(e){return c.push(e)},onKeyDown:m,onClick:d},l,{className:(0,o.Z)("tabs__item",k.tabItem,null==l?void 0:l.className,{"tabs__item--active":u===t})}),null!=a?a:t)})))}function h(e){var t=e.lazy,a=e.children,n=e.selectedValue,o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){var l=o.find((function(e){return e.props.value===n}));return l?(0,r.cloneElement)(l,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n})})))}function y(e){var t=b(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",k.tabList)},r.createElement(g,(0,n.Z)({},e,t)),r.createElement(h,(0,n.Z)({},e,t)))}function O(e){var t=(0,f.Z)();return r.createElement(y,(0,n.Z)({key:String(t)},e))}},2869:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),l=a(4866),u=a(5162),i=["components"],s={id:"java",title:"Java",hide_title:!0,sidebar_label:"Java"},c=void 0,p={unversionedId:"Instalacao/java",id:"Instalacao/java",title:"Java",description:"Java",source:"@site/docs/Instalacao/Java.md",sourceDirName:"Instalacao",slug:"/Instalacao/java",permalink:"/documentacao-tecnica-efi/docs/Instalacao/java",draft:!1,tags:[],version:"current",frontMatter:{id:"java",title:"Java",hide_title:!0,sidebar_label:"Java"},sidebar:"someSidebar",previous:{title:"Python",permalink:"/documentacao-tecnica-efi/docs/Instalacao/python"},next:{title:"C# .NET",permalink:"/documentacao-tecnica-efi/docs/Instalacao/c"}},d={},m=[{value:"Pr\xe9 Requisitos",id:"pr\xe9-requisitos",level:2},{value:"Testado com",id:"testado-com",level:2},{value:"Instalando via gradle",id:"instalando-via-gradle",level:2},{value:"Instalando via maven",id:"instalando-via-maven",level:2},{value:"Come\xe7ando",id:"come\xe7ando",level:2},{value:"Para ambiente de desenvolvimento",id:"para-ambiente-de-desenvolvimento",level:3},{value:"Para ambiente de produ\xe7\xe3o",id:"para-ambiente-de-produ\xe7\xe3o",level:3},{value:"Executando testes",id:"executando-testes",level:2},{value:"Executando exemplos",id:"executando-exemplos",level:2}],v={toc:m},b="wrapper";function f(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)(b,(0,n.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{className:"titulo"},"Java"),(0,o.kt)("div",{className:"subtitulo"},(0,o.kt)("p",null,"Nossa API \xe9 ",(0,o.kt)("a",{href:"https://en.wikipedia.org/wiki/Representational_state_transfer"},"RESTful"),"\ne responde em ",(0,o.kt)("a",{href:"https://www.json.org/json-en.html"},"JSON"),". A Gerencianet utiliza ",(0,o.kt)("a",{href:"https://oauth.net/"},"OAuth")," para fornecer acesso autorizado \xe0 API.\nNossa SDK de Java j\xe1 est\xe1 preparada para realizar essa autentica\xe7\xe3o automaticamente."),(0,o.kt)("p",null,"A seguir, confira os procedimentos para instala\xe7\xe3o da SDK da Gerencianet em Java:"),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"pr\xe9-requisitos"},"Pr\xe9 Requisitos"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Java >=7.0")),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"testado-com"},"Testado com"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Java ",(0,o.kt)("inlineCode",{parentName:"li"},"7.0"),"  e ",(0,o.kt)("inlineCode",{parentName:"li"},"8.0"))),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"instalando-via-gradle"},"Instalando via gradle"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"compile 'br.com.gerencianet.gnsdk:gn-api-sdk-java:0.2.2'\n")),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"instalando-via-maven"},"Instalando via maven"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<dependency>\n    <groupId>br.com.gerencianet.gnsdk</groupId>\n    <artifactId>gn-api-sdk-java</artifactId>\n    <version>0.2.2</version>\n</dependency>\n")),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"come\xe7ando"},"Come\xe7ando"),(0,o.kt)("p",null,"Requer o m\xf3dulo e os pacotes:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"import br.com.gerencianet.gnsdk.Gerencianet;\nimport br.com.gerencianet.gnsdk.exceptions.GerencianetException;\n")),(0,o.kt)("p",null,"Embora as respostas dos servi\xe7os da Web estejam no formato json, a SDK converter\xe1 qualquer resposta do servidor para um ",(0,o.kt)("em",{parentName:"p"},"JSONObject")," ou um ",(0,o.kt)("em",{parentName:"p"},"Map <String, Object>"),". O c\xf3digo deve estar dentro de um ",(0,o.kt)("em",{parentName:"p"},"try-catch")," e as exce\xe7\xf5es podem ser tratadas da seguinte forma:"),(0,o.kt)(l.Z,{defaultValue:"java",values:[{label:"Java",value:"java"}],mdxType:"Tabs"},(0,o.kt)(u.Z,{value:"java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"```java\ntry {\n  /* code */\n} catch(GerencianetException e) {\n  /* Gerencianet's api errors will come here */\n} catch(Exception ex) {\n  /* Other errors will come here */\n}\n")))),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"para-ambiente-de-desenvolvimento"},"Para ambiente de desenvolvimento"),(0,o.kt)("p",null,"Instanciar o m\xf3dulo passando seu ",(0,o.kt)("em",{parentName:"p"},"Client_Id, Client_Secret")," e sandbox sendo igual a ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),":"),(0,o.kt)(l.Z,{defaultValue:"JSONObject",values:[{label:"JSONObject",value:"JSONObject"}],mdxType:"Tabs"},(0,o.kt)(u.Z,{value:"JSONObject",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'JSONObject options = new JSONObject();\noptions.put("client_id", "client_id");\noptions.put("client_secret", "client_secret");\noptions.put("sandbox", true);\n\nGerencianet gn = new Gerencianet($options);\n')))),(0,o.kt)("p",null,"Ou ent\xe3o:"),(0,o.kt)(l.Z,{defaultValue:"Map",values:[{label:"Map",value:"Map"}],mdxType:"Tabs"},(0,o.kt)(u.Z,{value:"Map",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'Map<String, Object> options = new HashMap<String, Object>();\noptions.put("client_id", "client_id");\noptions.put("client_secret", "client_secret");\noptions.put("sandbox", true);\n\nGerencianet gn = new Gerencianet($options);\n')))),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"para-ambiente-de-produ\xe7\xe3o"},"Para ambiente de produ\xe7\xe3o"),(0,o.kt)("p",null,"Para alterar o ambiente para produ\xe7\xe3o, basta definir o terceiro sandbox como ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),", e seu ",(0,o.kt)("em",{parentName:"p"},"Client_Id e Client_Secret")," de produ\xe7\xe3o:"),(0,o.kt)(l.Z,{defaultValue:"JSONObject",values:[{label:"JSONObject",value:"JSONObject"}],mdxType:"Tabs"},(0,o.kt)(u.Z,{value:"JSONObject",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'JSONObject options = new JSONObject();\noptions.put("client_id", "client_id");\noptions.put("client_secret", "client_secret");\noptions.put("sandbox", false);\n\nGerencianet gn = new Gerencianet($options);\n')))),(0,o.kt)("p",null,"Ou ent\xe3o:"),(0,o.kt)(l.Z,{defaultValue:"Map",values:[{label:"Map",value:"Map"}],mdxType:"Tabs"},(0,o.kt)(u.Z,{value:"Map",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'Map<String, Object> options = new HashMap<String, Object>();\noptions.put("client_id", "client_id");\noptions.put("client_secret", "client_secret");\noptions.put("sandbox", false);\n\nGerencianet gn = new Gerencianet($options);\n')))),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"executando-testes"},"Executando testes"),(0,o.kt)("p",null,"Para executar o conjunto de testes com ",(0,o.kt)("em",{parentName:"p"},"coverage"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mvn clean test jacoco:report\n")),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"executando-exemplos"},"Executando exemplos"),(0,o.kt)("p",null,"Para executar alguns exemplos existentes siga as etapas descritas em nosso Github (",(0,o.kt)("a",{href:"https://github.com/gerencianet/gn-api-sdk-java-examples"},"gn-api-sdk-java-examples"),").")))}f.isMDXComponent=!0}}]);