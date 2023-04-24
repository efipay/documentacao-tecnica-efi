"use strict";(self.webpackChunkwebsite_efi=self.webpackChunkwebsite_efi||[]).push([[3502],{4695:function(e,n,t){t.d(n,{GA:function(){return p},N1:function(){return r},T7:function(){return u},d6:function(){return l},jS:function(){return c},mj:function(){return s}});var a=t(7294),o=t(2949);function i(e){var n=e.children,t=e.backgroundColor,o=e.color;return a.createElement("span",{style:{backgroundColor:t,color:o,borderRadius:"12px",padding:"3px 10px 3px 10px",fontSize:"15px"}},n)}function r(e){return i({children:e.children,backgroundColor:"rgba(87,167,59,0.4)",color:"dark"===(0,o.I)().colorMode?"rgba(162,222,142,1)":"rgba(36,121,7,1)"})}function c(e){return i({children:e.children,backgroundColor:"rgba(243,156,18,0.4)",color:"dark"===(0,o.I)().colorMode?"rgba(252,213,151,1)":"rgba(166,102,0,1)"})}function s(e){return i({children:e.children,backgroundColor:"rgba(179,228,163,0.4)",color:"dark"===(0,o.I)().colorMode?"rgba(162,222,142,1)":"rgba(36,121,7,1)"})}function l(e){return i({children:e.children,backgroundColor:"rgba(11,161,194,0.4)",color:"dark"===(0,o.I)().colorMode?"rgba(119,214,234,1)":"rgba(0,97,119,1)"})}function p(e){return i({children:e.children,backgroundColor:"rgba(253,132,128,0.4)",color:"dark"===(0,o.I)().colorMode?"rgba(255,176,173,1)":"rgba(217,30,24,1)"})}function u(e){return i({children:e.children,color:"rgba(243,112,33,1)"})}},6745:function(e,n,t){t.d(n,{Z:function(){return l}});var a=t(7294),o=t(3253),i=t.n(o),r=t(4223),c=t(8189),s=t(5585);function l(e){var n=e.filename,t=a.useState(!1),o=t[0],l=t[1];var p=(0,a.useState)(""),u=p[0],d=p[1];return(0,a.useEffect)((function(){fetch(n).then((function(e){return e.text()})).then((function(e){return d(e)})).catch((function(e){return console.log(e)}))})),a.createElement("div",null,a.createElement("button",{className:"buttonModify2 button-referencia",onClick:function(){l(!0)}},"Consultar Atributos",a.createElement("svg",{width:"13.5",height:"13.5","aria-hidden":"true",viewBox:"0 0 24 24",class:"iconExternalLink_node_modules-@docusaurus-theme-classic-lib-theme-Icon-ExternalLink-styles-module"},a.createElement("path",{fill:"currentColor",d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"}))),a.createElement(i(),{className:"modal",isOpen:o,onRequestClose:function(){l(!1)},ariaHideApp:!1,contentLabel:"Modal de exemplo"},a.createElement("div",{className:"conteudo-modal"},a.createElement("div",{className:"col-50"},a.createElement(r.D,{children:u,remarkPlugins:[s.Z],rehypePlugins:[c.Z]})))))}},9033:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u}});var a=t(7462),o=t(3366),i=(t(7294),t(3905)),r=(t(4866),t(5162),t(4695),t(6745),["components"]),c={id:"Introducao",title:"Introducao",hide_title:!0,sidebar_label:"Introdu\xe7\xe3o"},s=void 0,l={unversionedId:"APIOpenFinance/Introducao",id:"APIOpenFinance/Introducao",title:"Introducao",description:"Introdu\xe7\xe3o",source:"@site/docs/APIOpenFinance/Introducao.md",sourceDirName:"APIOpenFinance",slug:"/APIOpenFinance/Introducao",permalink:"/documentacao-tecnica-efi/docs/APIOpenFinance/Introducao",draft:!1,tags:[],version:"current",frontMatter:{id:"Introducao",title:"Introducao",hide_title:!0,sidebar_label:"Introdu\xe7\xe3o"},sidebar:"someSidebar",previous:{title:"Pagamentos",permalink:"/documentacao-tecnica-efi/docs/APIPagamentoContas/Pagamentos"},next:{title:"Credenciais, Certificado e Autoriza\xe7\xe3o",permalink:"/documentacao-tecnica-efi/docs/APIOpenFinance/Credenciais"}},p={},u=[{value:"API Open Finance",id:"api-open-finance",level:2},{value:"Mudan\xe7as na API Open Finance",id:"mudan\xe7as-na-api-open-finance",level:2},{value:"Collection Postan API Open Finance",id:"collection-postan-api-open-finance",level:2},{value:"SDK Open Finance",id:"sdk-open-finance",level:2}],d={toc:u},m="wrapper";function g(e){var n=e.components,t=(0,o.Z)(e,r);return(0,i.kt)(m,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{className:"titulo"},"Introdu\xe7\xe3o"),(0,i.kt)("div",{className:"subtitulo"},(0,i.kt)("div",{className:"light"},"Esta p\xe1gina cont\xe9m uma breve introdu\xe7\xe3o da API Open Finance e informa\xe7\xf5es sobre como configurar um ambiente para seu consumo."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"api-open-finance"},"API Open Finance"),(0,i.kt)("p",null,"A API Open Finance disponibiliza os nossos servi\xe7os que possibilitam a comunica\xe7\xe3o com a iniciadora Ef\xed (participante autorizado) e recebedor (e-commerce ou m-commerce n\xe3o participante). Com nossa API \xe9 poss\xedvel iniciar o processo open finance de forma pr\xe1tica e facilitar o pagamento do cliente final."),(0,i.kt)("div",{className:"admonition_info"},(0,i.kt)("div",null,(0,i.kt)("img",{src:"/img/info-circle-blue.svg"})," ",(0,i.kt)("b",null,"Aten\xe7\xe3o!")),"Antes de habilitar os escopos da API Open Finance, \xe9 importante ler os Termos e Condi\xe7\xf5es de Uso para para saber como utilizar a API da melhor maneira poss\xedvel e sem problemas. Baixe o PDF dispon\xedvel abaixo ou por meio deste ",(0,i.kt)("a",{href:"https://gerencianet-pub-prod-1.s3.amazonaws.com/public/Termos_e_condi%C3%A7%C3%B5es_de_uso_API_Open_Finance.pdf",target:"_blank"},"link"),"."),(0,i.kt)("br",null),(0,i.kt)("embed",{src:"/pdfelement/Termos_e_condi\xe7\xf5es_de_uso_API_Open_Finance.pdf",type:"application/pdf",width:"100%",height:"972px"}),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"mudan\xe7as-na-api-open-finance"},"Mudan\xe7as na API Open Finance"),(0,i.kt)("p",null," As seguintes mudan\xe7as podem acontecer, mas elas s\xe3o retrocompat\xedveis (backwards-compatibility). Ou seja, ser\xe3o compat\xedveis com vers\xf5es anteriores da API e n\xe3o impactar\xe1 nas suas integra\xe7\xf5es:"),(0,i.kt)("ul",null,(0,i.kt)("li",null,"Adi\xe7\xe3o de novos recursos na API Open Finance."),(0,i.kt)("li",null,"Adi\xe7\xe3o de novos par\xe2metros opcionais."),(0,i.kt)("li",null," Adi\xe7\xe3o de novos campos em respostas da API Open Finance"),(0,i.kt)("li",null," Altera\xe7\xe3o da ordem de campos."),(0,i.kt)("li",null," Adi\xe7\xe3o de novos elementos em enumera\xe7\xf5es.")),(0,i.kt)("div",{className:"admonition_caution"},(0,i.kt)("div",null,(0,i.kt)("img",{src:"/img/exclamation-triangle-orange.svg"})," ",(0,i.kt)("b",null,"Aten\xe7\xe3o!")),"Uma nova vers\xe3o da API Open Finance ser\xe1 gerada sempre que houver mudan\xe7as incompat\xedveis. Mas n\xe3o se preocupe, nossa equipe avisar\xe1 com anteced\xeancia, em nossos canais oficiais, sobre como voc\xea dever\xe1 proceder."),(0,i.kt)("br",null),(0,i.kt)("p",null,"Para saber mais sobre a implementa\xe7\xe3o da API Pix Ef\xed ou para receber uma proposta comercial, consulte um de nossos especialistas pelo e-mail ",(0,i.kt)("a",{parentName:"p",href:"mailto:pix@gerencianet.com.br"},"pix@gerencianet.com.br")," ou clique no bot\xe3o abaixo."),(0,i.kt)("a",{href:"https://cta-redirect.hubspot.com/cta/redirect/3324438/0ae588cb-c51b-4c19-a281-827f2262d2d1",target:"_blank",alt:"QUERO SER CLIENTE"},(0,i.kt)("button",{type:"button",className:"buttonModify2 button-auth"},"Quero ser cliente")),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("p",null,"Voc\xea tamb\xe9m pode falar com nossos times T\xe9cnico e Comercial na Plataforma Discord. Clique na imagem abaixo para acessar o servidor."),(0,i.kt)("div",{className:"figure"},(0,i.kt)("a",{href:"https://efipay.github.io/comunidade-discord-efi/",target:"_blank"}," ",(0,i.kt)("img",{src:"/img/discord.png",align:"center"})," ")),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"collection-postan-api-open-finance"},"Collection Postan API Open Finance"),(0,i.kt)("p",null,"Este \xe9 o  ",(0,i.kt)("a",{href:"https://documenter.getpostman.com/view/13574984/Uz5Dobw1",target:"_blank"},"link")," da nossa Collection que manteremos atualizada com o endpoints da API Pix Ef\xed."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://documenter.getpostman.com/view/13574984/Uz5Dobw1"},(0,i.kt)("img",{parentName:"a",src:"https://run.pstmn.io/button.svg",alt:"Run in Postman"}))),(0,i.kt)("div",{className:"admonition_caution"},(0,i.kt)("div",null,(0,i.kt)("img",{src:"/img/exclamation-triangle-orange.svg"})," ",(0,i.kt)("b",null,"API Open Finance")),"Em casos de utiliza\xe7\xe3o da API Open Finance, recomendamos que o atributo ",(0,i.kt)("em",null,'"receberSemChave"'),", da API-Pix, seja definido com o valor ",(0,i.kt)("b",null,(0,i.kt)("em",null,"true")),", pois, a diverg\xeancia na configura\xe7\xe3o ir\xe1 impactar nas transa\xe7\xf5es. O link para o endpoint pode ser encontrado ",(0,i.kt)("a",{href:"https://dev.gerencianet.com.br/docs/api-pix-endpoints#section-criar-modificar-configura-es-da-conta",target:"_blank"},"aqui"),"."),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"sdk-open-finance"},"SDK Open Finance"),(0,i.kt)("p",null,"Em nosso reposit\xf3rio no github voc\xea encontra v\xe1rias SDKs com exemplos da API Open Finance. Para mais detalhes, acesse:"),(0,i.kt)("p",null,"SDK PHP: ",(0,i.kt)("a",{href:"https://github.com/gerencianet/gn-api-sdk-php",target:"_blank"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/gerencianet/gn-api-sdk-php"},"https://github.com/gerencianet/gn-api-sdk-php")),(0,i.kt)("br",null),"\nSDK Python: ",(0,i.kt)("a",{href:"https://github.com/gerencianet/gn-api-sdk-python",target:"_blank"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/gerencianet/gn-api-sdk-python"},"https://github.com/gerencianet/gn-api-sdk-python")),(0,i.kt)("br",null),"\nSDK Node.js: ",(0,i.kt)("a",{href:"https://github.com/gerencianet/gn-api-sdk-node",target:"_blank"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/gerencianet/gn-api-sdk-node"},"https://github.com/gerencianet/gn-api-sdk-node")),(0,i.kt)("br",null),"\nSDK Typescript: ",(0,i.kt)("a",{href:"https://github.com/gerencianet/gn-api-sdk-typescript",target:"_blank"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/gerencianet/gn-api-sdk-typescript"},"https://github.com/gerencianet/gn-api-sdk-typescript")),(0,i.kt)("br",null),"\nSDK Java: ",(0,i.kt)("a",{href:"https://github.com/gerencianet/gn-api-sdk-java-examples",target:"_blank"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/gerencianet/gn-api-sdk-java-examples"},"https://github.com/gerencianet/gn-api-sdk-java-examples")),(0,i.kt)("br",null),"\nSDK C#: ",(0,i.kt)("a",{href:"https://github.com/gerencianet/gn-api-sdk-dotnet-core",target:"_blank"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/gerencianet/gn-api-sdk-dotnet-core"},"https://github.com/gerencianet/gn-api-sdk-dotnet-core")),(0,i.kt)("br",null),"\nSDK Delphi: ",(0,i.kt)("a",{href:"https://github.com/gerencianet/gn-api-sdk-delphi",target:"_blank"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/gerencianet/gn-api-sdk-delphi"},"https://github.com/gerencianet/gn-api-sdk-delphi")),(0,i.kt)("br",null))))}g.isMDXComponent=!0}}]);