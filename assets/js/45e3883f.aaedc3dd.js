"use strict";(self.webpackChunkwebsite_efi=self.webpackChunkwebsite_efi||[]).push([[9455],{4695:function(a,e,n){n.d(e,{GA:function(){return s},N1:function(){return l},T7:function(){return m},d6:function(){return d},jS:function(){return t},mj:function(){return c}});var o=n(7294),r=n(2949);function i(a){var e=a.children,n=a.backgroundColor,r=a.color;return o.createElement("span",{style:{backgroundColor:n,color:r,borderRadius:"12px",padding:"3px 10px 3px 10px",fontSize:"15px"}},e)}function l(a){return i({children:a.children,backgroundColor:"rgba(87,167,59,0.4)",color:"dark"===(0,r.I)().colorMode?"rgba(162,222,142,1)":"rgba(36,121,7,1)"})}function t(a){return i({children:a.children,backgroundColor:"rgba(243,156,18,0.4)",color:"dark"===(0,r.I)().colorMode?"rgba(252,213,151,1)":"rgba(166,102,0,1)"})}function c(a){return i({children:a.children,backgroundColor:"rgba(179,228,163,0.4)",color:"dark"===(0,r.I)().colorMode?"rgba(162,222,142,1)":"rgba(36,121,7,1)"})}function d(a){return i({children:a.children,backgroundColor:"rgba(11,161,194,0.4)",color:"dark"===(0,r.I)().colorMode?"rgba(119,214,234,1)":"rgba(0,97,119,1)"})}function s(a){return i({children:a.children,backgroundColor:"rgba(253,132,128,0.4)",color:"dark"===(0,r.I)().colorMode?"rgba(255,176,173,1)":"rgba(217,30,24,1)"})}function m(a){return i({children:a.children,color:"rgba(243,112,33,1)"})}},6745:function(a,e,n){n.d(e,{Z:function(){return d}});var o=n(7294),r=n(3253),i=n.n(r),l=n(4223),t=n(8189),c=n(5585);function d(a){var e=a.filename,n=o.useState(!1),r=n[0],d=n[1];var s=(0,o.useState)(""),m=s[0],u=s[1];return(0,o.useEffect)((function(){fetch(e).then((function(a){return a.text()})).then((function(a){return u(a)})).catch((function(a){return console.log(a)}))})),o.createElement("div",null,o.createElement("button",{className:"buttonModify2 button-referencia",onClick:function(){d(!0)}},"Consultar Atributos",o.createElement("svg",{width:"13.5",height:"13.5","aria-hidden":"true",viewBox:"0 0 24 24",class:"iconExternalLink_node_modules-@docusaurus-theme-classic-lib-theme-Icon-ExternalLink-styles-module"},o.createElement("path",{fill:"currentColor",d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"}))),o.createElement(i(),{className:"modal",isOpen:r,onRequestClose:function(){d(!1)},ariaHideApp:!1,contentLabel:"Modal de exemplo"},o.createElement("div",{className:"conteudo-modal"},o.createElement("div",{className:"col-50"},o.createElement(l.D,{children:m,remarkPlugins:[c.Z],rehypePlugins:[t.Z]})))))}},7342:function(a,e,n){n.r(e),n.d(e,{assets:function(){return b},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return m},metadata:function(){return p},toc:function(){return k}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),l=n(4866),t=n(5162),c=n(4695),d=n(6745),s=["components"],m={id:"CobrancasImediatas",title:"Cobrancas imediatas",hide_title:!0,sidebar_label:"Cobrancas imediatas"},u=void 0,p={unversionedId:"APIPix/CobrancasImediatas",id:"APIPix/CobrancasImediatas",title:"Cobrancas imediatas",description:"Cobran\xe7as imediatas",source:"@site/docs/APIPix/CobrancasImediatas.md",sourceDirName:"APIPix",slug:"/APIPix/CobrancasImediatas",permalink:"/documentacao-tecnica-efi/docs/APIPix/CobrancasImediatas",draft:!1,tags:[],version:"current",frontMatter:{id:"CobrancasImediatas",title:"Cobrancas imediatas",hide_title:!0,sidebar_label:"Cobrancas imediatas"},sidebar:"someSidebar",previous:{title:"Credenciais, Certificado e Autoriza\xe7\xe3o",permalink:"/documentacao-tecnica-efi/docs/APIPix/Credenciais"},next:{title:"Cobrancas com vencimento",permalink:"/documentacao-tecnica-efi/docs/APIPix/CobrancasComVencimento"}},b={},k=[{value:"Criar cobran\xe7a imediata (sem txid)",id:"criar-cobran\xe7a-imediata-sem-txid",level:3},{value:"Link responsivo para cobran\xe7a Pix",id:"link-responsivo-para-cobran\xe7a-pix",level:4},{value:"Criar cobran\xe7a imediata (com txid)",id:"criar-cobran\xe7a-imediata-com-txid",level:3},{value:"Revisar cobran\xe7a",id:"revisar-cobran\xe7a",level:3},{value:"Consultar cobran\xe7a",id:"consultar-cobran\xe7a",level:3},{value:"Consultar lista de cobran\xe7as",id:"consultar-lista-de-cobran\xe7as",level:3}],v={toc:k},g="wrapper";function f(a){var e=a.components,n=(0,r.Z)(a,s);return(0,i.kt)(g,(0,o.Z)({},v,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{className:"titulo"},"Cobran\xe7as imediatas "),(0,i.kt)("div",{className:"subtitulo"},(0,i.kt)("div",{className:"light"},"Nesta p\xe1gina voc\xea encontrar\xe1 as informa\xe7\xf5es sobre todos os endpoints dispon\xedveis na API Pix Ef\xed. Recomendamos que ",(0,i.kt)("a",{href:"https://discord.gg/ptGHMtczcV",target:"_blank"},"participe da nossa comunidade no Discord"),".   para acompanhar a evolu\xe7\xe3o da API, incluindo a disponibiliza\xe7\xe3o de novos endpoints."),(0,i.kt)("hr",null),(0,i.kt)("p",null,"O conjunto de endpoints a seguir \xe9 respons\xe1vel pela gest\xe3o de cobran\xe7as imediatas. As cobran\xe7as, no contexto da API Pix representam uma transa\xe7\xe3o financeira entre um pagador e um recebedor, cuja forma de pagamento \xe9 o Pix."),(0,i.kt)("div",{className:"admonition_caution"},(0,i.kt)("div",null,(0,i.kt)("img",{src:"/img/exclamation-triangle-orange.svg"})," ",(0,i.kt)("b",null,"Aten\xe7\xe3o!")),"Caso voc\xea precise testar os endpoints de cobran\xe7a Pix Cob, temos um ambiente de homologa\xe7\xe3o funcional em que \xe9 poss\xedvel simular todos os status retornados pela nossa API e webhook.",(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("p",null,"Se o valor da cobran\xe7a est\xe1 entre ",(0,i.kt)("strong",{parentName:"p"},"R$ 0.01")," \xe0 ",(0,i.kt)("strong",{parentName:"p"},"R$ 10.00"),":",(0,i.kt)("br",null),"\n",(0,i.kt)("em",{parentName:"p"},"A cobran\xe7a \xe9 confirmada, informa\xe7\xe3o vir\xe1 via Webhook."),(0,i.kt)("br",null),"\nSe o valor da cobran\xe7a \xe9 maior que ",(0,i.kt)("strong",{parentName:"p"},"R$ 10.00"),":",(0,i.kt)("br",null),"\n",(0,i.kt)("em",{parentName:"p"},"A cobran\xe7a permanece ativa, sem confirma\xe7\xe3o. Como n\xe3o h\xe1 webhook nesses casos, nada \xe9 feito."))),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"criar-cobran\xe7a-imediata-sem-txid"},"Criar cobran\xe7a imediata (sem txid)"),(0,i.kt)("p",null,"Endpoint para criar uma cobran\xe7a imediata sem informar um ",(0,i.kt)("code",null,"txid"),"."),(0,i.kt)("p",null,"Em geral, o ",(0,i.kt)("code",null,"txid")," \xe9 criado pelo usu\xe1rio recebedor e est\xe1 sob sua responsabilidade. Este endpoint \xe9 uma exce\xe7\xe3o a essa regra e, neste caso, o ",(0,i.kt)("code",null,"txid")," ser\xe1 definido pela Ef\xed."),(0,i.kt)("div",{className:"post"},(0,i.kt)("details",{className:"col-100"},(0,i.kt)("summary",null,(0,i.kt)("b",null,(0,i.kt)(c.N1,{mdxType:"HighlightPost"},"POST")," /v2/cob")),(0,i.kt)("div",{className:"post-div"},(0,i.kt)("div",{className:"col-65"},"Requer autoriza\xe7\xe3o para o escopo: ",(0,i.kt)("code",null,"cob.write")),(0,i.kt)("div",{className:"col-35"},(0,i.kt)(d.Z,{filename:"/documentacao-tecnica-efi/markdown/pix/cob/Cobranca_imediata.md",mdxType:"Modal"}))),(0,i.kt)("br",null),(0,i.kt)("b",null,"Requisi\xe7\xe3o"),(0,i.kt)(l.Z,{defaultValue:"exemplo1",values:[{label:"Exemplo 1",value:"exemplo1"},{label:"Exemplo 2",value:"exemplo2"}],mdxType:"Tabs"},(0,i.kt)(t.Z,{value:"exemplo1",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "calendario": {\n    "expiracao": 3600\n  },\n  "devedor": {\n    "cpf": "12345678909",\n    "nome": "Francisco da Silva"\n  },\n  "valor": {\n    "original": "123.45"\n  },\n  "chave": "71cdf9ba-c695-4e3c-b010-abb521a3f1be",\n  "solicitacaoPagador": "Cobran\xe7a dos servi\xe7os prestados."\n}\n'))),(0,i.kt)(t.Z,{value:"exemplo2",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "calendario": {\n    "expiracao": 3600\n  },\n  "devedor": {\n    "cnpj": "12345678000195",\n    "nome": "Empresa de Servi\xe7os SA"\n  },\n  "valor": {\n    "original": "37.00"\n  },\n  "chave": "ac107ed7-97cd-4fe7-8df5-a5f5659bf2f3",\n  "solicitacaoPagador": "Servi\xe7o realizado.",\n  "infoAdicionais": [\n    {\n      "nome": "Campo 1",\n      "valor": "Informa\xe7\xe3o Adicional1 do PSP-Recebedor"\n    },\n    {\n      "nome": "Campo 2",\n      "valor": "Informa\xe7\xe3o Adicional2 do PSP-Recebedor"\n    }\n  ]\n}\n')))),(0,i.kt)("br",null),(0,i.kt)("b",null,"Respostas"),(0,i.kt)("br",null),(0,i.kt)("p",null,"  As respostas abaixo representam Sucesso(201) e Falhas/erros do consumo."),(0,i.kt)(l.Z,{defaultValue:"saida",values:[{label:"201",value:"saida"},{label:"400",value:"400"},{label:"409",value:"409"},{label:"500",value:"500"}],mdxType:"Tabs"},(0,i.kt)(t.Z,{value:"saida",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "calendario": {\n    "criacao": "2020-09-09T20:15:00.358Z",\n    "expiracao": 3600\n  },\n  "txid": "7978c0c97ea847e78e8849634473c1f1",\n  "revisao": 0,\n  "loc": {\n    "id": 789,\n    "location": "pix.example.com/qr/v2/9d36b84fc70b478fb95c12729b90ca25",\n    "tipoCob": "cob"\n  },\n  "location": "pix.example.com/qr/v2/9d36b84fc70b478fb95c12729b90ca25",\n  "status": "ATIVA",\n  "devedor": {\n    "cnpj": "12345678000195",\n    "nome": "Empresa de Servi\xe7os SA"\n  },\n  "valor": {\n    "original": "567.89"\n  },\n  "chave": "a1f4102e-a446-4a57-bcce-6fa48899c1d1",\n  "solicitacaoPagador": "Informar cart\xe3o fidelidade"\n}\n'))),(0,i.kt)(t.Z,{value:"400",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'InvalidOperationError\n{\n  "nome": "documento_bloqueado",\n  "mensagem": "O documento desta conta tem bloqueios que impedem a emiss\xe3o"\n}\n\nOu\n\n{\n  "nome": "chave_invalida",\n  "mensagem": "A chave informada n\xe3o faz refer\xeancia \xe0 conta Gerencianet autenticada"\n}\n\nInvalidValueError\n{\n  "nome": "valor_invalido",\n  "mensagem": "Campo valor.original deve ser maior que zero"\n}\n\nOu\n\n{\n  "nome": "valor_invalido",\n  "mensagem": "Campo calendario.expiracao deve ser maior que zero"\n}\n\nOu\n\n{\n  "nome": "valor_invalido",\n  "mensagem": "Documento CPF em devedor.cpf \xe9 inv\xe1lido"\n}\n\n{\n  "nome": "valor_invalido",\n  "mensagem": "Documento CNPJ em devedor.cnpj \xe9 inv\xe1lido"\n}\n'))),(0,i.kt)(t.Z,{value:"409",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'DuplicatedRegisterError\n{\n  "nome": "txid_duplicado",\n  "mensagem": "Campo txid informado j\xe1 foi utilizado em outra cobran\xe7a"\n}\n'))),(0,i.kt)(t.Z,{value:"500",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'ApplicationError\n{\n  "nome": "erro_aplicacao",\n  "mensagem": "Ocorreu um erro ao validar a chave"\n}\n')))))),(0,i.kt)("br",null),(0,i.kt)("h4",{id:"link-responsivo-para-cobran\xe7a-pix"},"Link responsivo para cobran\xe7a Pix"),(0,i.kt)("div",{className:"link-responsivo"},(0,i.kt)("div",{className:"col-25"},(0,i.kt)("img",{src:"/img/light.png",alt:"banner"})),(0,i.kt)("div",{className:"col-75"},(0,i.kt)("b",null,"Conhe\xe7a o link responsivo para cobran\xe7as Pix"),(0,i.kt)("br",null),"Este link visa facilitar o compartilhamento das cobran\xe7as Pix emitidas via API, mostrando os detalhes da cobran\xe7a, bem como a imagem do QR Code e Pix Copia e Cola. E mais! \xc9 poss\xedvel customiz\xe1-la utilizando a logo e cor prim\xe1ria definidas nas ",(0,i.kt)("a",{href:"https://gerencianet.com.br/blog/personalizar-cobranca-293/",target:"_blank"},"configura\xe7\xf5es da sua conta"),".",(0,i.kt)("br",null),(0,i.kt)("details",{className:"no_border"},(0,i.kt)("summary",null,(0,i.kt)("b",null,"Como obter o link responsivo")),"Para obter este link da sua cobran\xe7a Pix emitida via API, basta utilizar a URL base base ",(0,i.kt)("b",null,"https://pix.gerencianet.com.br/cob/pagar/:token"),", onde ",(0,i.kt)("code",null,":token")," \xe9 o token contido na URL que est\xe1 no par\xe2metro ",(0,i.kt)("code",null,"loc=>location")," retornado no momento da emiss\xe3o da cobran\xe7a Pix, conforme exemplo a seguir:",(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("img",{src:"/img/link_responsivo.png",alt:"banner",width:"777",height:"313"}),"Link de exemplo: ",(0,i.kt)("a",{href:"https://pix.gerencianet.com.br/cob/pagar/c0a68af7ece6468cbb8e120e29a27cb5",target:"_blank"},"https://pix.gerencianet.com.br/cob/pagar/c0a68af7ece6468cbb8e120e29a27cb5"),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("b",null,"Aten\xe7\xe3o:")," Este link s\xf3 funciona para cobran\xe7as Pix emitidas em ambiente de produ\xe7\xe3o."))),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"criar-cobran\xe7a-imediata-com-txid"},"Criar cobran\xe7a imediata (com txid)"),(0,i.kt)("p",null,"Endpoint para cadastrar uma cobran\xe7a com um identificador de transa\xe7\xe3o (",(0,i.kt)("code",null,"txid"),")."),(0,i.kt)("div",{className:"put"},(0,i.kt)("details",{className:"col-100"},(0,i.kt)("summary",null,(0,i.kt)("b",null,(0,i.kt)(c.jS,{mdxType:"HighlightPut"},"PUT")," /v2/cob/",(0,i.kt)(c.T7,{mdxType:"HighlightVar"},":txid"))),(0,i.kt)("div",{className:"put-div"},(0,i.kt)("div",{className:"col-65"},"Requer autoriza\xe7\xe3o para o escopo: ",(0,i.kt)("code",null,"cob.write")),(0,i.kt)("div",{className:"col-35"},(0,i.kt)(d.Z,{filename:"/markdown/pix/cob/Cobranca_imediata_txid.md",mdxType:"Modal"}))),(0,i.kt)("br",null),(0,i.kt)("b",null,"Requisi\xe7\xe3o"),(0,i.kt)(l.Z,{defaultValue:"exemplo1",values:[{label:"Exemplo 1",value:"exemplo1"},{label:"Exemplo 2",value:"exemplo2"}],mdxType:"Tabs"},(0,i.kt)(t.Z,{value:"exemplo1",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "calendario": {\n    "expiracao": 3600\n  },\n  "devedor": {\n    "cpf": "12345678909",\n    "nome": "Francisco da Silva"\n  },\n  "valor": {\n    "original": "123.45"\n  },\n  "chave": "71cdf9ba-c695-4e3c-b010-abb521a3f1be",\n  "solicitacaoPagador": "Cobran\xe7a dos servi\xe7os prestados."\n}\n'))),(0,i.kt)(t.Z,{value:"exemplo2",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "calendario": {\n    "expiracao": 3600\n  },\n  "devedor": {\n    "cnpj": "12345678000195",\n    "nome": "Empresa de Servi\xe7os SA"\n  },\n  "valor": {\n    "original": "37.00"\n  },\n  "chave": "ac107ed7-97cd-4fe7-8df5-a5f5659bf2f3",\n  "solicitacaoPagador": "Servi\xe7o realizado.",\n  "infoAdicionais": [\n    {\n      "nome": "Campo 1",\n      "valor": "Informa\xe7\xe3o Adicional1 do PSP-Recebedor"\n    },\n    {\n      "nome": "Campo 2",\n      "valor": "Informa\xe7\xe3o Adicional2 do PSP-Recebedor"\n    }\n  ]\n}\n')))),(0,i.kt)("br",null),(0,i.kt)("b",null,"Respostas"),(0,i.kt)("br",null),(0,i.kt)("p",null,"  As respostas abaixo representam Sucesso(201) e Falhas/erros do consumo."),(0,i.kt)(l.Z,{defaultValue:"saida",values:[{label:"201",value:"saida"},{label:"400",value:"400"},{label:"409",value:"409"},{label:"500",value:"500"}],mdxType:"Tabs"},(0,i.kt)(t.Z,{value:"saida",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "calendario": {\n    "criacao": "2020-09-09T20:15:00.358Z",\n    "expiracao": 3600\n  },\n  "txid": "7978c0c97ea847e78e8849634473c1f1",\n  "revisao": 0,\n  "loc": {\n    "id": 789,\n    "location": "pix.example.com/qr/v2/9d36b84fc70b478fb95c12729b90ca25",\n    "tipoCob": "cob"\n  },\n  "location": "pix.example.com/qr/v2/9d36b84fc70b478fb95c12729b90ca25",\n  "status": "ATIVA",\n  "devedor": {\n    "cnpj": "12345678000195",\n    "nome": "Empresa de Servi\xe7os SA"\n  },\n  "valor": {\n    "original": "567.89"\n  },\n  "chave": "a1f4102e-a446-4a57-bcce-6fa48899c1d1",\n  "solicitacaoPagador": "Informar cart\xe3o fidelidade"\n}\n'))),(0,i.kt)(t.Z,{value:"400",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'InvalidOperationError\n{\n  "nome": "documento_bloqueado",\n  "mensagem": "O documento desta conta tem bloqueios que impedem a emiss\xe3o"\n}\n\nOu\n\n{\n  "nome": "chave_invalida",\n  "mensagem": "A chave informada n\xe3o faz refer\xeancia \xe0 conta Gerencianet autenticada"\n}\n\nInvalidValueError\n{\n  "nome": "valor_invalido",\n  "mensagem": "Campo valor.original deve ser maior que zero"\n}\n\nOu\n\n{\n  "nome": "valor_invalido",\n  "mensagem": "Campo calendario.expiracao deve ser maior que zero"\n}\n\nOu\n\n{\n  "nome": "valor_invalido",\n  "mensagem": "Documento CPF em devedor.cpf \xe9 inv\xe1lido"\n}\n\n{\n  "nome": "valor_invalido",\n  "mensagem": "Documento CNPJ em devedor.cnpj \xe9 inv\xe1lido"\n}\n'))),(0,i.kt)(t.Z,{value:"409",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'DuplicatedRegisterError\n{\n  "nome": "txid_duplicado",\n  "mensagem": "Campo txid informado j\xe1 foi utilizado em outra cobran\xe7a"\n}\n'))),(0,i.kt)(t.Z,{value:"500",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'ApplicationError\n{\n  "nome": "erro_aplicacao",\n  "mensagem": "Ocorreu um erro ao validar a chave"\n}\n')))))),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"revisar-cobran\xe7a"},"Revisar cobran\xe7a"),(0,i.kt)("p",null,"Endpoint para revisar (modificar) uma cobran\xe7a a partir do seu ",(0,i.kt)("code",null,"txid"),"."),(0,i.kt)("div",{className:"patch"},(0,i.kt)("details",{className:"col-100"},(0,i.kt)("summary",null,(0,i.kt)("b",null,(0,i.kt)(c.mj,{mdxType:"HighlightPatch"},"PATCH")," /v2/cob/",(0,i.kt)(c.T7,{mdxType:"HighlightVar"},":txid"))),(0,i.kt)("div",{className:"put-div"},(0,i.kt)("div",{className:"col-65"},"Requer autoriza\xe7\xe3o para o escopo: ",(0,i.kt)("code",null,"cob.write")),(0,i.kt)("div",{className:"col-35"},(0,i.kt)(d.Z,{filename:"/markdown/pix/cob/Revisar_cobranca.md",mdxType:"Modal"}))),(0,i.kt)("br",null),(0,i.kt)("b",null,"Requisi\xe7\xe3o"),(0,i.kt)(l.Z,{defaultValue:"exemplo1",values:[{label:"Exemplo 1",value:"exemplo1"},{label:"Exemplo 2",value:"exemplo2"},{label:"Exemplo 3",value:"exemplo3"}],mdxType:"Tabs"},(0,i.kt)(t.Z,{value:"exemplo1",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "loc": {\n    "id": 7768\n  },\n  "devedor": {\n    "cpf": "12345678909",\n    "nome": "Francisco da Silva"\n  },\n  "valor": {\n    "original": "123.45"\n  },\n  "solicitacaoPagador": "Informe o n\xfamero ou identificador do pedido."\n}\n'))),(0,i.kt)(t.Z,{value:"exemplo2",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "valor": {\n    "original": "567.89"\n  },\n  "solicitacaoPagador": "Informe o n\xfamero ou identificador do pedido."\n}\n'))),(0,i.kt)(t.Z,{value:"exemplo3",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": "REMOVIDA_PELO_USUARIO_RECEBEDOR"\n}\n')))),(0,i.kt)("br",null),(0,i.kt)("b",null,"Respostas"),(0,i.kt)("br",null),(0,i.kt)("p",null,"  As respostas abaixo representam Sucesso(200) e Falhas/erros do consumo."),(0,i.kt)(l.Z,{defaultValue:"saida",values:[{label:"200",value:"saida"},{label:"400",value:"400"},{label:"409",value:"409"},{label:"500",value:"500"}],mdxType:"Tabs"},(0,i.kt)(t.Z,{value:"saida",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": "ATIVA",\n  "calendario": {\n    "criacao": "2020-09-09T20:15:00.358Z",\n    "expiracao": 3600\n  },\n  "location": "pix.example.com/qr/9d36b84f-c70b-478f-b95c-12729b90ca25",\n  "txid": "7978c0c97ea847e78e8849634473c1f1",\n  "revisao": 1,\n  "devedor": {\n    "cnpj": "12345678000195",\n    "nome": "Empresa de Servi\xe7os SA"\n  },\n  "valor": {\n    "original": "567.89"\n  },\n  "chave": "a1f4102e-a446-4a57-bcce-6fa48899c1d1",\n  "solicitacaoPagador": "Informe o n\xfamero ou identificador do pedido."\n}\n'))),(0,i.kt)(t.Z,{value:"400",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'UnknownRegisterError\n{\n  "nome": "cobranca_nao_encontrada",\n  "mensagem": "Nenhuma cobran\xe7a encontrada para o txid informado"\n}\n\nInvalidOperationError\n{\n  "nome": "status_cobranca_invalido",\n  "mensagem": "A cobran\xe7a n\xe3o est\xe1 mais com o status ATIVA"\n}\n\nOu\n\n{\n  "nome": "chave_invalida",\n  "mensagem": "A chave informada n\xe3o faz refer\xeancia \xe0 conta Gerencianet autenticada"\n}\n\n\nInvalidValueError\n{\n  "nome": "valor_invalido",\n  "mensagem": "Campo calendario.expiracao deve ser maior ou igual a 1"\n}\n\nOu\n\n{\n  "nome": "valor_invalido",\n  "mensagem": "Documento CPF em devedor.cpf \xe9 inv\xe1lido"\n}\n\nOu\n\n{\n  "nome": "valor_invalido",\n  "mensagem": "Documento CNPJ em devedor.cnpj \xe9 inv\xe1lido"\n}\n'))),(0,i.kt)(t.Z,{value:"409",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'DuplicatedRegisterError\n{\n  "nome": "txid_duplicado",\n  "mensagem": "Campo txid informado j\xe1 foi utilizado em outra cobran\xe7a"\n}\n'))),(0,i.kt)(t.Z,{value:"500",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'ApplicationError\n{\n  "nome": "erro_aplicacao",\n  "mensagem": "Ocorreu um erro ao validar a chave"\n}\n')))))),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"consultar-cobran\xe7a"},"Consultar cobran\xe7a"),(0,i.kt)("p",null,"Endpoint para consultar uma cobran\xe7a a partir do ",(0,i.kt)("code",null,"txid"),"."),(0,i.kt)("div",{className:"get"},(0,i.kt)("details",{className:"col-100"},(0,i.kt)("summary",null,(0,i.kt)("b",null,(0,i.kt)(c.d6,{mdxType:"HighlightGet"},"GET")," /v2/cob/",(0,i.kt)(c.T7,{mdxType:"HighlightVar"},":txid"))),(0,i.kt)("div",{className:"get-div"},(0,i.kt)("div",{className:"col-65"},"Requer autoriza\xe7\xe3o para o escopo: ",(0,i.kt)("code",null,"cob.read")),(0,i.kt)("div",{className:"col-35"},(0,i.kt)(d.Z,{filename:"/markdown/pix/cob/Consultar_cobranca.md",mdxType:"Modal"}))),(0,i.kt)("br",null),(0,i.kt)("b",null,"Requisi\xe7\xe3o"),(0,i.kt)("br",null),"Tamb\xe9m \xe9 poss\xedvel consultar informa\xe7\xf5es de uma revis\xe3o espec\xedfica de uma cobran\xe7a. Para isso \xe9 necess\xe1rio informar o *query param* ",(0,i.kt)("code",null,"revisao"),". Exemplo: ",(0,i.kt)("code",null,"/v2/cob/:txid/?revisao=1"),". Quando o par\xe2metro n\xe3o \xe9 informado, a revis\xe3o mais recente \xe9 retornada como padr\xe3o.",(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("b",null,"Respostas"),(0,i.kt)("p",null,"  As respostas abaixo representam Sucesso(200) e Falhas/erros do consumo."),(0,i.kt)(l.Z,{defaultValue:"saida",values:[{label:"200",value:"saida"},{label:"200",value:"200"},{label:"400",value:"400"}],mdxType:"Tabs"},(0,i.kt)(t.Z,{value:"saida",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": "ATIVA",\n  "calendario": {\n    "criacao": "2020-09-09T20:15:00.358Z",\n    "expiracao": "3600"\n  },\n  "location": "pix.example.com/qr/9d36b84f-c70b-478f-b95c-12729b90ca25",\n  "txid": "7978c0c97ea847e78e8849634473c1f1",\n  "revisao": 1,\n  "devedor": {\n    "cnpj": "12345678000195",\n    "nome": "Empresa de Servi\xe7os SA"\n  },\n  "valor": {\n    "original": "567.89"\n  },\n  "chave": "a1f4102e-a446-4a57-bcce-6fa48899c1d1",\n  "solicitacaoPagador": "Informe o n\xfamero ou identificador do pedido."\n}\n'))),(0,i.kt)(t.Z,{value:"200",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": "CONCLUIDA",\n  "calendario": {\n    "criacao": "2020-09-09T20:15:00.358Z",\n    "expiracao": "3600"\n  },\n  "location": "qrcodes-pix.gerencianet.com.br/1dd7f893-a58e-4172-8702-8dc33e21a403",\n  "txid": "655dfdb1-a451-4b8f-bb58-254b958913fb",\n  "revisao": 1,\n  "devedor": {\n    "cnpj": "12345678000195",\n    "nome": "Empresa de Servi\xe7os SA"\n  },\n  "valor": {\n    "original": "100.00"\n  },\n  "chave": "40a0932d-1918-4eee-845d-35a2da1690dc",\n  "solicitacaoPagador": "Informe o n\xfamero ou identificador do pedido.",\n  "pix": [\n    {\n      "endToEndId": "E12345678202009091221kkkkkkkkkkk",\n      "txid": "655dfdb1-a451-4b8f-bb58-254b958913fb",\n      "valor": "110.00",\n      "horario": "2020-09-09T20:15:00.358Z",\n      "infoPagador": "0123456789",\n      "devolucoes": [\n        {\n          "id": "123ABC",\n          "rtrId": "Dxxxxxxxx202009091221kkkkkkkkkkk",\n          "valor": "10.00",\n          "horario": {\n            "solicitacao": "2020-09-09T20:15:00.358Z"\n          },\n          "status": "EM_PROCESSAMENTO"\n        }\n      ]\n    }\n  ]\n}\n'))),(0,i.kt)(t.Z,{value:"400",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'UnknownRegisterError\n{\n  "nome": "cobranca_nao_encontrada",\n  "mensagem": "Nenhuma cobran\xe7a encontrada para o txid informado"\n}\n')))))),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"consultar-lista-de-cobran\xe7as"},"Consultar lista de cobran\xe7as"),(0,i.kt)("p",null,"Endpoint para consultar v\xe1rias cobran\xe7as."),(0,i.kt)("p",null,"Este endpoint possui filtros para afunilar os resultados da busca, tais como CPF/CNPJ e status. Dentre todos os filtros dispon\xedveis, os filtros ",(0,i.kt)("code",null,"inicio")," e ",(0,i.kt)("code",null,"fim")," s\xe3o obrigat\xf3rios e representam o intervalo de datas em que as cobran\xe7as consultadas devem estar compreendidas."),(0,i.kt)("div",{className:"get"},(0,i.kt)("details",{className:"col-100"},(0,i.kt)("summary",null,(0,i.kt)("b",null,(0,i.kt)(c.d6,{mdxType:"HighlightGet"},"GET")," /v2/cob")),(0,i.kt)("div",{className:"get-div"},(0,i.kt)("div",{className:"col-65"},"Requer autoriza\xe7\xe3o para o escopo: ",(0,i.kt)("code",null,"cob.read")),(0,i.kt)("div",{className:"col-35"},(0,i.kt)(d.Z,{filename:"/markdown/pix/cob/Listar_cobrancas.md",mdxType:"Modal"}))),(0,i.kt)("br",null),(0,i.kt)("b",null,"Requisi\xe7\xe3o"),(0,i.kt)("br",null),"O trecho de c\xf3digo abaixo ilustra o consumo do endpoint em uma requisi\xe7\xe3o com o m\xednimo de par\xe2metros poss\xedvel (o intervalo de datas ",(0,i.kt)("code",null,"inicio")," e ",(0,i.kt)("code",null,"fim"),") e o formato em que esses par\xe2metros devem ser repassados.",(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("code",null,"/v2/cob?inicio=2020-10-22T16:01:35Z&fim=2020-11-30T20:10:00Z"),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("b",null,"Respostas"),(0,i.kt)("br",null),(0,i.kt)("p",null,"  As respostas abaixo representam Sucesso(200) do consumo."),(0,i.kt)(l.Z,{defaultValue:"saida",values:[{label:"200",value:"saida"},{label:"200",value:"200"}],mdxType:"Tabs"},(0,i.kt)(t.Z,{value:"saida",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "parametros": {\n      "inicio": "2020-04-01T00:00:00Z",\n      "fim": "2020-04-02T10:00:00Z",\n      "paginacao": {\n          "paginaAtual": 0,\n          "itensPorPagina": 100,\n          "quantidadeDePaginas": 1,\n          "quantidadeTotalDeItens": 2\n      }\n  },\n  "cobs": [\n      {\n          "status": "ATIVA",\n          "calendario": {\n              "criacao": "2020-09-09T20:15:00.358Z",\n              "expiracao": "3600"\n          },\n          "location": "qrcodes-pix.gerencianet.com.br/9d36b84f-c70b-478f-b95c-12729b90ca25",\n          "txid": "7978c0c97ea847e78e8849634473c1f1",\n          "revisao": 1,\n          "devedor": {\n              "cnpj": "12345678000195",\n              "nome": "Empresa de Servi\xe7os SA"\n          },\n          "valor": {\n              "original": "567.89"\n          },\n          "chave": "a1f4102e-a446-4a57-bcce-6fa48899c1d1",\n          "solicitacaoPagador": "Informe o n\xfamero ou identificador do pedido."\n      },\n      {\n          "status": "CONCLUIDA",\n          "calendario": {\n              "criacao": "2020-09-09T20:15:00.358Z",\n              "expiracao": "3600"\n          },\n          "location": "qrcodes-pix.gerencianet.com.br/1dd7f893-a58e-4172-8702-8dc33e21a403",\n          "txid": "655dfdb1a4514b8fbb58254b958913fb",\n          "revisao": 1,\n          "devedor": {\n              "cnpj": "12345678000195",\n              "nome": "Empresa de Servi\xe7os SA"\n          },\n          "valor": {\n              "original": "100.00"\n          },\n          "chave": "40a0932d-1918-4eee-845d-35a2da1690dc",\n          "solicitacaoPagador": "Informe o n\xfamero ou identificador do pedido.",\n          "pix": [\n              {\n                  "endToEndId": "E12345678202009091221kkkkkkkkkkk",\n                  "txid": "655dfdb1a4514b8fbb58254b958913fb",\n                  "valor": "110.00",\n                  "horario": "2020-09-09T20:15:00.358Z",\n                  "pagador": {\n                      "cnpj": "12345678000195",\n                      "nome": "Empresa de Servi\xe7os SA"\n                  },\n                  "infoPagador": "0123456789",\n                  "devolucoes": [\n                      {\n                          "id": "123ABC",\n                          "rtrId": "Dxxxxxxxx202009091221kkkkkkkkkkk",\n                          "valor": "10.00",\n                          "horario": {\n                              "solicitacao": "2020-09-09T20:15:00.358Z"\n                          },\n                          "status": "EM_PROCESSAMENTO"\n                      }\n                  ]\n              }\n          ]\n      }\n  ]\n}\n'))),(0,i.kt)(t.Z,{value:"200",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "parametros": {\n      "inicio": "2020-04-01T00:00:00Z",\n      "fim": "2020-04-01T23:59:59Z",\n      "paginacao": {\n          "paginaAtual": 0,\n          "itensPorPagina": 100,\n          "quantidadeDePaginas": 1,\n          "quantidadeTotalDeItens": 1\n      }\n  },\n  "cobs": [\n      {\n          "status": "ATIVA",\n          "calendario": {\n              "criacao": "2020-09-09T20:15:00.358Z",\n              "expiracao": "3600"\n          },\n          "location": "qrcodes-pix.gerencianet.com.br/9d36b84f-c70b-478f-b95c-12729b90ca25",\n          "txid": "7978c0c9-7ea8-47e7-8e88-49634473c1f1",\n          "revisao": 1,\n          "devedor": {\n              "cnpj": "12345678000195",\n              "nome": "Empresa de Servi\xe7os SA"\n          },\n          "valor": {\n              "original": "567.89"\n          },\n          "chave": "a1f4102e-a446-4a57-bcce-6fa48899c1d1",\n          "solicitacaoPagador": "Informe o n\xfamero ou identificador do pedido."\n      }\n  ]\n}\n')))))),(0,i.kt)("br",null)))}f.isMDXComponent=!0}}]);