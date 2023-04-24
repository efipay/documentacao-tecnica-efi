"use strict";(self.webpackChunkwebsite_efi=self.webpackChunkwebsite_efi||[]).push([[2133],{4695:function(e,n,a){a.d(n,{GA:function(){return d},N1:function(){return l},T7:function(){return s},d6:function(){return c},jS:function(){return i},mj:function(){return u}});var o=a(7294),t=a(2949);function r(e){var n=e.children,a=e.backgroundColor,t=e.color;return o.createElement("span",{style:{backgroundColor:a,color:t,borderRadius:"12px",padding:"3px 10px 3px 10px",fontSize:"15px"}},n)}function l(e){return r({children:e.children,backgroundColor:"rgba(87,167,59,0.4)",color:"dark"===(0,t.I)().colorMode?"rgba(162,222,142,1)":"rgba(36,121,7,1)"})}function i(e){return r({children:e.children,backgroundColor:"rgba(243,156,18,0.4)",color:"dark"===(0,t.I)().colorMode?"rgba(252,213,151,1)":"rgba(166,102,0,1)"})}function u(e){return r({children:e.children,backgroundColor:"rgba(179,228,163,0.4)",color:"dark"===(0,t.I)().colorMode?"rgba(162,222,142,1)":"rgba(36,121,7,1)"})}function c(e){return r({children:e.children,backgroundColor:"rgba(11,161,194,0.4)",color:"dark"===(0,t.I)().colorMode?"rgba(119,214,234,1)":"rgba(0,97,119,1)"})}function d(e){return r({children:e.children,backgroundColor:"rgba(253,132,128,0.4)",color:"dark"===(0,t.I)().colorMode?"rgba(255,176,173,1)":"rgba(217,30,24,1)"})}function s(e){return r({children:e.children,color:"rgba(243,112,33,1)"})}},6745:function(e,n,a){a.d(n,{Z:function(){return c}});var o=a(7294),t=a(3253),r=a.n(t),l=a(4223),i=a(8189),u=a(5585);function c(e){var n=e.filename,a=o.useState(!1),t=a[0],c=a[1];var d=(0,o.useState)(""),s=d[0],m=d[1];return(0,o.useEffect)((function(){fetch(n).then((function(e){return e.text()})).then((function(e){return m(e)})).catch((function(e){return console.log(e)}))})),o.createElement("div",null,o.createElement("button",{className:"buttonModify2 button-referencia",onClick:function(){c(!0)}},"Consultar Atributos",o.createElement("svg",{width:"13.5",height:"13.5","aria-hidden":"true",viewBox:"0 0 24 24",class:"iconExternalLink_node_modules-@docusaurus-theme-classic-lib-theme-Icon-ExternalLink-styles-module"},o.createElement("path",{fill:"currentColor",d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"}))),o.createElement(r(),{className:"modal",isOpen:t,onRequestClose:function(){c(!1)},ariaHideApp:!1,contentLabel:"Modal de exemplo"},o.createElement("div",{className:"conteudo-modal"},o.createElement("div",{className:"col-50"},o.createElement(l.D,{children:s,remarkPlugins:[u.Z],rehypePlugins:[i.Z]})))))}},8068:function(e,n,a){a.r(n),a.d(n,{assets:function(){return v},contentTitle:function(){return m},default:function(){return k},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return g}});var o=a(7462),t=a(3366),r=(a(7294),a(3905)),l=a(4866),i=a(5162),u=a(4695),c=a(6745),d=["components"],s={id:"Devolucao",title:"Devolucao",hide_title:!0,sidebar_label:"Devolu\xe7\xe3o"},m=void 0,p={unversionedId:"APIOpenFinance/Devolucao",id:"APIOpenFinance/Devolucao",title:"Devolucao",description:"Devolu\xe7\xe3o",source:"@site/docs/APIOpenFinance/Devolucao.md",sourceDirName:"APIOpenFinance",slug:"/APIOpenFinance/Devolucao",permalink:"/docs/APIOpenFinance/Devolucao",draft:!1,tags:[],version:"current",frontMatter:{id:"Devolucao",title:"Devolucao",hide_title:!0,sidebar_label:"Devolu\xe7\xe3o"},sidebar:"someSidebar",previous:{title:"Pagamentos",permalink:"/docs/APIOpenFinance/Pagamentos"},next:{title:"Recebendo Callbacks",permalink:"/docs/APIOpenFinance/Recebendo_callbacks"}},v={},g=[{value:"Efetuar uma devolu\xe7\xe3o de um pagamento",id:"efetuar-uma-devolu\xe7\xe3o-de-um-pagamento",level:2}],b={toc:g},f="wrapper";function k(e){var n=e.components,a=(0,t.Z)(e,d);return(0,r.kt)(f,(0,o.Z)({},b,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{className:"titulo"},"Devolu\xe7\xe3o"),(0,r.kt)("div",{className:"subtitulo"},(0,r.kt)("div",{className:"light"},"Informa\xe7\xf5es sobre Devolu\xe7\xf5es da API Open Finance Ef\xed"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"efetuar-uma-devolu\xe7\xe3o-de-um-pagamento"},"Efetuar uma devolu\xe7\xe3o de um pagamento"),(0,r.kt)("p",null,"Este endpoint \xe9 utilizado para realizar a devolu\xe7\xe3o de um pagamento."),(0,r.kt)("div",{className:"post"},(0,r.kt)("details",{className:"col-100"},(0,r.kt)("summary",null,(0,r.kt)("b",null,(0,r.kt)(u.N1,{mdxType:"HighlightPost"},"POST"),"/open-finance/pagamentos/pix/",(0,r.kt)(u.T7,{mdxType:"HighlightVar"},":identificadorPagamento"),"/devolver")),(0,r.kt)("div",{className:"post-div"},(0,r.kt)("div",{className:"col-65"},"Requer autoriza\xe7\xe3o para o escopo: ",(0,r.kt)("code",null,"cob.write")),(0,r.kt)("div",{className:"col-35"},(0,r.kt)(c.Z,{filename:" /markdown/open-finance/config-aplicacao/devolucao.md",mdxType:"Modal"}))),(0,r.kt)("br",null),(0,r.kt)("b",null,"Requisi\xe7\xe3o"),(0,r.kt)(l.Z,{defaultValue:"exemplo1",values:[{label:"Devolu\xe7\xe3o",value:"exemplo1"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"exemplo1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n"valor": "0.01"\n}\n')))),(0,r.kt)("br",null),(0,r.kt)("b",null,"Respostas"),(0,r.kt)("br",null),(0,r.kt)("p",null,"  As respostas abaixo representam Sucesso(201) e Falhas/erros do consumo."),(0,r.kt)(l.Z,{defaultValue:"saida",values:[{label:"202 (accepted)",value:"saida"},{label:"400 (bad Request)",value:"400"},{label:"422 (Unprocessable Enitity) ",value:"422 "},{label:"500 (Error)",value:"500"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"saida",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'Processando devolu\xe7\xe3o\n\n{\n"identificadorPagamento": "urn:gerencianet:ae71713f-875b-4af3-9d85-0bcb43288847",\n"valorDevolucao": "0.01",\n"dataCriacao": "2022-10-28 10:02:25",\n"status": "pendente"\n}\n'))),(0,r.kt)(i.Z,{value:"400",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'InvalidOperationError\n{\n  "nome": "documento_bloqueado",\n  "mensagem": "O documento desta conta tem bloqueios que impedem a emiss\xe3o"\n}\n\nOu\n\n{\n  "nome": "chave_invalida",\n  "mensagem": "A chave informada n\xe3o faz refer\xeancia \xe0 conta Gerencianet autenticada"\n}\n\nInvalidValueError\n{\n  "nome": "valor_invalido",\n  "mensagem": "Campo valor.original deve ser maior que zero"\n}\n\nOu\n\n{\n  "nome": "valor_invalido",\n  "mensagem": "Campo calendario.expiracao deve ser maior que zero"\n}\n\nOu\n\n{\n  "nome": "valor_invalido",\n  "mensagem": "Documento CPF em devedor.cpf \xe9 inv\xe1lido"\n}\n\n{\n  "nome": "valor_invalido",\n  "mensagem": "Documento CNPJ em devedor.cnpj \xe9 inv\xe1lido"\n}\n'))),(0,r.kt)(i.Z,{value:"400",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'Erro na requisi\xe7\xe3o\n\n{\n"nome": "identificador_pagamento_obrigatorio",\n"mensagem": "O campo identificadorPagamento \xe9 obrigat\xf3rio"\n}\nOu\n{\n"nome": "valor_devolucao_invalido",\n"mensagem": "O valor de devolu\xe7\xe3o inv\xe1lido"\n}\n'))),(0,r.kt)(i.Z,{value:"422",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'Erro na requisi\xe7\xe3o\n\n{\n"nome": "identificador_pagamento_invalido",\n"mensagem": "O identificador de pagamento \xe9 inv\xe1lido"\n}\nOu\n{\n"nome": "status_pagamento_invalido_para_devolucao",\n"mensagem": "O status do pagamento \xe9 invalido para devolu\xe7\xe3o"\n}\nOu\n{\n"nome": "saldo_devolucao_insuficiente",\n"mensagem": "O valor da devolu\xe7\xe3o ultrapassou o valor recebido"\n}\nOu\n{\n"nome": "saldo_insuficiente",\n"mensagem": "O saldo em conta \xe9 insuficiente para efetuar esta transa\xe7\xe3o"\n}\n'))),(0,r.kt)(i.Z,{value:"500",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'  Erro no servidor\n\n{\n"nome": "erro_aplicacao",\n"mensagem": "Erro interno do servidor"\n}\n')))))),(0,r.kt)("br",null)))}k.isMDXComponent=!0}}]);