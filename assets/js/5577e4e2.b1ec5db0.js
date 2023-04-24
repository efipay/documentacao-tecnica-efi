"use strict";(self.webpackChunkwebsite_efi=self.webpackChunkwebsite_efi||[]).push([[6630],{3905:function(e,a,n){n.d(a,{Zo:function(){return c},kt:function(){return f}});var t=n(7294);function o(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){o(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function l(e,a){if(null==e)return{};var n,t,o=function(e,a){if(null==e)return{};var n,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(o[n]=e[n]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=t.createContext({}),u=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},c=function(e){var a=u(e.components);return t.createElement(s.Provider,{value:a},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||r;return n?t.createElement(f,i(i({ref:a},c),{},{components:n})):t.createElement(f,i({ref:a},c))}));function f(e,a){var n=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<r;u++)i[u]=n[u];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:function(e,a,n){n.d(a,{Z:function(){return i}});var t=n(7294),o=n(6010),r={tabItem:"tabItem_Ymn6"};function i(e){var a=e.children,n=e.hidden,i=e.className;return t.createElement("div",{role:"tabpanel",className:(0,o.Z)(r.tabItem,i),hidden:n},a)}},4866:function(e,a,n){n.d(a,{Z:function(){return h}});var t=n(7462),o=n(7294),r=n(6010),i=n(2466),l=n(6550),s=n(1980),u=n(7392),c=n(12);function d(e){return function(e){var a,n;return null!=(a=null==(n=o.Children.map(e,(function(e){if(!e||(0,o.isValidElement)(e)&&(a=e.props)&&"object"==typeof a&&"value"in a)return e;var a;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?a:[]}(e).map((function(e){var a=e.props;return{value:a.value,label:a.label,attributes:a.attributes,default:a.default}}))}function p(e){var a=e.values,n=e.children;return(0,o.useMemo)((function(){var e=null!=a?a:d(n);return function(e){var a=(0,u.l)(e,(function(e,a){return e.value===a.value}));if(a.length>0)throw new Error('Docusaurus error: Duplicate values "'+a.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[a,n])}function m(e){var a=e.value;return e.tabValues.some((function(e){return e.value===a}))}function f(e){var a=e.queryString,n=void 0!==a&&a,t=e.groupId,r=(0,l.k6)(),i=function(e){var a=e.queryString,n=void 0!==a&&a,t=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:n,groupId:t});return[(0,s._X)(i),(0,o.useCallback)((function(e){if(i){var a=new URLSearchParams(r.location.search);a.set(i,e),r.replace(Object.assign({},r.location,{search:a.toString()}))}}),[i,r])]}function g(e){var a,n,t,r,i=e.defaultValue,l=e.queryString,s=void 0!==l&&l,u=e.groupId,d=p(e),g=(0,o.useState)((function(){return function(e){var a,n=e.defaultValue,t=e.tabValues;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+t.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var o=null!=(a=t.find((function(e){return e.default})))?a:t[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:i,tabValues:d})})),v=g[0],b=g[1],T=f({queryString:s,groupId:u}),x=T[0],k=T[1],h=(a=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),n=(0,c.Nk)(a),t=n[0],r=n[1],[t,(0,o.useCallback)((function(e){a&&r.set(e)}),[a,r])]),y=h[0],E=h[1],w=function(){var e=null!=x?x:y;return m({value:e,tabValues:d})?e:null}();return(0,o.useLayoutEffect)((function(){w&&b(w)}),[w]),{selectedValue:v,selectValue:(0,o.useCallback)((function(e){if(!m({value:e,tabValues:d}))throw new Error("Can't select invalid tab value="+e);b(e),k(e),E(e)}),[k,E,d]),tabValues:d}}var v=n(2389),b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function T(e){var a=e.className,n=e.block,l=e.selectedValue,s=e.selectValue,u=e.tabValues,c=[],d=(0,i.o5)().blockElementScrollPositionUntilNextRender,p=function(e){var a=e.currentTarget,n=c.indexOf(a),t=u[n].value;t!==l&&(d(a),s(t))},m=function(e){var a,n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":var t,o=c.indexOf(e.currentTarget)+1;n=null!=(t=c[o])?t:c[0];break;case"ArrowLeft":var r,i=c.indexOf(e.currentTarget)-1;n=null!=(r=c[i])?r:c[c.length-1]}null==(a=n)||a.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},a)},u.map((function(e){var a=e.value,n=e.label,i=e.attributes;return o.createElement("li",(0,t.Z)({role:"tab",tabIndex:l===a?0:-1,"aria-selected":l===a,key:a,ref:function(e){return c.push(e)},onKeyDown:m,onClick:p},i,{className:(0,r.Z)("tabs__item",b.tabItem,null==i?void 0:i.className,{"tabs__item--active":l===a})}),null!=n?n:a)})))}function x(e){var a=e.lazy,n=e.children,t=e.selectedValue,r=(Array.isArray(n)?n:[n]).filter(Boolean);if(a){var i=r.find((function(e){return e.props.value===t}));return i?(0,o.cloneElement)(i,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},r.map((function(e,a){return(0,o.cloneElement)(e,{key:a,hidden:e.props.value!==t})})))}function k(e){var a=g(e);return o.createElement("div",{className:(0,r.Z)("tabs-container",b.tabList)},o.createElement(T,(0,t.Z)({},e,a)),o.createElement(x,(0,t.Z)({},e,a)))}function h(e){var a=(0,v.Z)();return o.createElement(k,(0,t.Z)({key:String(a)},e))}},7825:function(e,a,n){n.r(a),n.d(a,{assets:function(){return p},contentTitle:function(){return c},default:function(){return v},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return m}});var t=n(7462),o=n(3366),r=(n(7294),n(3905)),i=n(4866),l=n(5162),s=["components"],u={id:"Glossario",title:"Gloss\xe1rio",hide_title:!0,sidebar_label:"Gloss\xe1rio"},c=void 0,d={unversionedId:"APIPix/Glossario",id:"APIPix/Glossario",title:"Gloss\xe1rio",description:"Gloss\xe1rio",source:"@site/docs/APIPix/Glossario.md",sourceDirName:"APIPix",slug:"/APIPix/Glossario",permalink:"/doc/docs/APIPix/Glossario",draft:!1,tags:[],version:"current",frontMatter:{id:"Glossario",title:"Gloss\xe1rio",hide_title:!0,sidebar_label:"Gloss\xe1rio"},sidebar:"someSidebar",previous:{title:"Endpoints exclusivos Ef\xed",permalink:"/doc/docs/APIPix/EndpointsExclusivosEfi"},next:{title:"Fluxogramas",permalink:"/doc/docs/APIPix/Fluxogramas"}},p={},m=[{value:"location",id:"location",level:3},{value:"payload",id:"payload",level:3},{value:"revis\xe3o",id:"revis\xe3o",level:3},{value:"txid",id:"txid",level:3},{value:"webhook",id:"webhook",level:3},{value:"Ilustra\xe7\xe3o do funcionamento das cobran\xe7as cobv ap\xf3s a data de vencimento",id:"ilustra\xe7\xe3o-do-funcionamento-das-cobran\xe7as-cobv-ap\xf3s-a-data-de-vencimento",level:3}],f={toc:m},g="wrapper";function v(e){var a=e.components,n=(0,o.Z)(e,s);return(0,r.kt)(g,(0,t.Z)({},f,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{className:"titulo"},"Gloss\xe1rio"),(0,r.kt)("div",{className:"subtitulo"},(0,r.kt)("div",{className:"light"},"Esta p\xe1gina tem o objetivo de alinhar a compreens\xe3o de termos relacionados \xe0 API Pix."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"location"},"location"),(0,r.kt)("p",null,"Um location \xe9 a URL do tipo ",(0,r.kt)("a",{href:"https://www.w3.org/TR/capability-urls/",target:"_blank"},"URL de capacidade")," que serve de ",(0,r.kt)("strong",{parentName:"p"},"endere\xe7o para uma cobran\xe7a"),". Em outras palavras \xe9 atrav\xe9s de um location que se torna poss\xedvel resgatar as informa\xe7\xf5es relacionadas a uma cobran\xe7a e, assim, realizar as movimenta\xe7\xf5es."),(0,r.kt)("h3",{id:"payload"},"payload"),(0,r.kt)("p",null,"Payload \xe9 o nome dado ao segundo fragmento do objeto JWS (JSON Web Signature) que cont\xe9m um JSON com os dados referentes a uma cobran\xe7a."),(0,r.kt)("h3",{id:"revis\xe3o"},"revis\xe3o"),(0,r.kt)("p",null,'O campo "revisao" registra o n\xfamero de altera\xe7\xf5es de uma cobran\xe7a. Uma cobran\xe7a nova sempre inicia com valor de revis\xe3o 0 (zero) e esse valor \xe9 incrementado uma unidade sempre que a cobran\xe7a sofrer altera\xe7\xf5es, exceto quando a altera\xe7\xe3o \xe9 o Location.'),(0,r.kt)("h3",{id:"txid"},"txid"),(0,r.kt)("p",null,"Cada transa\xe7\xe3o Pix possui um ",(0,r.kt)("strong",{parentName:"p"},"Identificador da Transa\xe7\xe3o"),", chamado ",(0,r.kt)("code",null,"txid"),", que no contexto de representa\xe7\xe3o de uma cobran\xe7a, \xe9 \xfanico por CPF/CNPJ do usu\xe1rio recebedor. Um ",(0,r.kt)("code",null,"txid")," \xe9 uma ",(0,r.kt)("a",{href:"https://pt.wikipedia.org/wiki/Alfanum%C3%A9rico",target:"_blank"}," string alfanum\xe9rica")," com comprimentos m\xednimo de 26 e m\xe1ximo de 35 caracteres. Um txid v\xe1lido, portanto, deve obedecer \xe0 seguinte express\xe3o regular (regex): ",(0,r.kt)("code",null,"^","[a-zA-Z0-9]","{26,35}$"),". Voc\xea pode usar ",(0,r.kt)("a",{href:"https://regex101.com/r/iZ08y4/1",target:"_blank"},"este link para validar strings ",(0,r.kt)("code",null,"txid")," sob a regex"),"."),(0,r.kt)("h3",{id:"webhook"},"webhook"),(0,r.kt)("p",null,"Nome da funcionalidade em que \xe9 poss\xedvel cadastrar uma URL de callback para receber notifica\xe7\xf5es sobre atualiza\xe7\xf5es de transa\xe7\xf5es que envolvem uma determinada chave do Dict."),(0,r.kt)("h3",{id:"ilustra\xe7\xe3o-do-funcionamento-das-cobran\xe7as-cobv-ap\xf3s-a-data-de-vencimento"},"Ilustra\xe7\xe3o do funcionamento das cobran\xe7as cobv ap\xf3s a data de vencimento"),(0,r.kt)(i.Z,{className:"tab",defaultValue:"Exemplo_A",values:[{label:"Exemplo A",value:"Exemplo_A"},{label:"Exemplo B",value:"Exemplo_B"},{label:"Exemplo C",value:"Exemplo_C"},{label:"Exemplo D",value:"Exemplo_D"},{label:"Exemplo E",value:"Exemplo_E"},{label:"Exemplo F",value:"Exemplo_F"},{label:"Exemplo G",value:"Exemplo_G"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Exemplo_A",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},"dataDeVencimento: 2020-10-20, ter\xe7a-feira.\nvalidadeAposVencimento: 4\n\nTenta-se pagar no dia 2020-10-20, ter\xe7a: aceito. (#)(*)\nTenta-se pagar no dia 2020-10-21, quarta: aceito. (1)\nTenta-se pagar no dia 2020-10-22, quinta: aceito. (2)\nTenta-se pagar no dia 2020-10-23, sexta: aceito. (3)\nTenta-se pagar no dia 2020-10-24, s\xe1bado: aceito. \nTenta-se pagar no dia 2020-10-25, domingo: aceito. (Feriado)\nTenta-se pagar no dia 2020-10-26, segunda: aceito. (4)\nTenta-se pagar no dia 2020-10-27, ter\xe7a: negado.\n"))),(0,r.kt)(l.Z,{value:"Exemplo_B",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},"dataDeVencimento: 2020-12-25, sexta-feira, feriado.\nvalidadeAposVencimento: 0\n\nTenta-se pagar no dia 2020-12-25, sexta: aceito. (#)(Feriado)\nTenta-se pagar no dia 2020-12-26, s\xe1bado: aceito.\nTenta-se pagar no dia 2020-12-27, domingo: aceito.\nTenta-se pagar no dia 2020-12-28, segunda: aceito. (*)\nTenta-se pagar no dia 2020-12-29, ter\xe7a: negado.\n"))),(0,r.kt)(l.Z,{value:"Exemplo_C",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},"dataDeVencimento: 2020-12-25, sexta-feira, feriado.\nvalidadeAposVencimento: 1\n\nTenta-se pagar no dia 2020-12-25, sexta: aceito. (#)(Feriado)\nTenta-se pagar no dia 2020-12-26, s\xe1bado: aceito.\nTenta-se pagar no dia 2020-12-27, domingo: aceito.\nTenta-se pagar no dia 2020-12-28, segunda: aceito. (*)\nTenta-se pagar no dia 2020-12-29, ter\xe7a: aceito. (1)\nTenta-se pagar no dia 2020-12-30, quarta: negado.\n"))),(0,r.kt)(l.Z,{value:"Exemplo_D",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},"dataDeVencimento: 2020-12-25, sexta-feira, feriado.\nvalidadeAposVencimento: 3\n\nTenta-se pagar no dia 2020-12-25, sexta: aceito. (#)(Feriado)\nTenta-se pagar no dia 2020-12-26, s\xe1bado: aceito.\nTenta-se pagar no dia 2020-12-27, domingo: aceito.\nTenta-se pagar no dia 2020-12-28, segunda: aceito. (*)\nTenta-se pagar no dia 2020-12-29, ter\xe7a: aceito. (1)\nTenta-se pagar no dia 2020-12-30, quarta: aceito. (2)\nTenta-se pagar no dia 2020-12-31, quinta: aceito. (3)\nTenta-se pagar no dia 2021-01-01, sexta: negado.\n"))),(0,r.kt)(l.Z,{value:"Exemplo_E",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},"dataDeVencimento: 2020-12-25, sexta-feira, feriado.\nvalidadeAposVencimento: 4\n\nTenta-se pagar no dia 2020-12-25, sexta: aceito. (#)(Feriado)\nTenta-se pagar no dia 2020-12-26, s\xe1bado: aceito.\nTenta-se pagar no dia 2020-12-27, domingo: aceito.\nTenta-se pagar no dia 2020-12-28, segunda: aceito. (*)\nTenta-se pagar no dia 2020-12-29, ter\xe7a: aceito. (1)\nTenta-se pagar no dia 2020-12-30, quarta: aceito. (2)\nTenta-se pagar no dia 2020-12-31, quinta: aceito. (3)\nTenta-se pagar no dia 2021-01-01, sexta: aceito. (Feriado)\nTenta-se pagar no dia 2021-01-02, s\xe1bado: aceito.\nTenta-se pagar no dia 2021-01-03, domingo: aceito.\nTenta-se pagar no dia 2021-01-04, segunda: aceito. (4)\nTenta-se pagar no dia 2021-01-05, ter\xe7a: negado.\n"))),(0,r.kt)(l.Z,{value:"Exemplo_F",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},"dataDeVencimento: 2021-08-27, sexta-feira.\nvalidadeAposVencimento: 5\n\nTenta-se pagar no dia 2020-08-27, sexta: aceito. (#)(*)\nTenta-se pagar no dia 2020-08-28, s\xe1bado: aceito. (1)\nTenta-se pagar no dia 2020-08-29, domingo: aceito. (2)\nTenta-se pagar no dia 2020-08-30, segunda: aceito. (3)\nTenta-se pagar no dia 2020-12-31, ter\xe7a: aceito. (4)\nTenta-se pagar no dia 2020-12-01, quarta: aceito. (5)\nTenta-se pagar no dia 2020-12-02, quinta: negado.\n"))),(0,r.kt)(l.Z,{value:"Exemplo_G",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},"dataDeVencimento: 2021-08-28, s\xe1bado.\nvalidadeAposVencimento: 5\n\nTenta-se pagar no dia 2020-08-28, s\xe1bado: aceito. (#)\nTenta-se pagar no dia 2020-08-29, domingo: aceito. \nTenta-se pagar no dia 2020-08-30, segunda: aceito. (*)\nTenta-se pagar no dia 2020-08-31, ter\xe7a: aceito. (1)\nTenta-se pagar no dia 2020-09-01, quarta: aceito. (2)\nTenta-se pagar no dia 2020-09-02, quinta: aceito. (3)\nTenta-se pagar no dia 2020-09-03, sexta: aceito. (4)\nTenta-se pagar no dia 2020-09-04, sabado: aceito. \nTenta-se pagar no dia 2020-09-05, domingo: aceito. \nTenta-se pagar no dia 2020-09-06, segunda: aceito. (5)\n")))),(0,r.kt)("br",null)))}v.isMDXComponent=!0}}]);