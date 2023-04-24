"use strict";(self.webpackChunkwebsite_efi=self.webpackChunkwebsite_efi||[]).push([[7860],{4695:function(a,e,n){n.d(e,{GA:function(){return c},N1:function(){return i},T7:function(){return u},d6:function(){return s},jS:function(){return r},mj:function(){return d}});var o=n(7294),l=n(2949);function t(a){var e=a.children,n=a.backgroundColor,l=a.color;return o.createElement("span",{style:{backgroundColor:n,color:l,borderRadius:"12px",padding:"3px 10px 3px 10px",fontSize:"15px"}},e)}function i(a){return t({children:a.children,backgroundColor:"rgba(87,167,59,0.4)",color:"dark"===(0,l.I)().colorMode?"rgba(162,222,142,1)":"rgba(36,121,7,1)"})}function r(a){return t({children:a.children,backgroundColor:"rgba(243,156,18,0.4)",color:"dark"===(0,l.I)().colorMode?"rgba(252,213,151,1)":"rgba(166,102,0,1)"})}function d(a){return t({children:a.children,backgroundColor:"rgba(179,228,163,0.4)",color:"dark"===(0,l.I)().colorMode?"rgba(162,222,142,1)":"rgba(36,121,7,1)"})}function s(a){return t({children:a.children,backgroundColor:"rgba(11,161,194,0.4)",color:"dark"===(0,l.I)().colorMode?"rgba(119,214,234,1)":"rgba(0,97,119,1)"})}function c(a){return t({children:a.children,backgroundColor:"rgba(253,132,128,0.4)",color:"dark"===(0,l.I)().colorMode?"rgba(255,176,173,1)":"rgba(217,30,24,1)"})}function u(a){return t({children:a.children,color:"rgba(243,112,33,1)"})}},6745:function(a,e,n){n.d(e,{Z:function(){return s}});var o=n(7294),l=n(3253),t=n.n(l),i=n(4223),r=n(8189),d=n(5585);function s(a){var e=a.filename,n=o.useState(!1),l=n[0],s=n[1];var c=(0,o.useState)(""),u=c[0],m=c[1];return(0,o.useEffect)((function(){fetch(e).then((function(a){return a.text()})).then((function(a){return m(a)})).catch((function(a){return console.log(a)}))})),o.createElement("div",null,o.createElement("button",{className:"buttonModify2 button-referencia",onClick:function(){s(!0)}},"Consultar Atributos",o.createElement("svg",{width:"13.5",height:"13.5","aria-hidden":"true",viewBox:"0 0 24 24",class:"iconExternalLink_node_modules-@docusaurus-theme-classic-lib-theme-Icon-ExternalLink-styles-module"},o.createElement("path",{fill:"currentColor",d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"}))),o.createElement(t(),{className:"modal",isOpen:l,onRequestClose:function(){s(!1)},ariaHideApp:!1,contentLabel:"Modal de exemplo"},o.createElement("div",{className:"conteudo-modal"},o.createElement("div",{className:"col-50"},o.createElement(i.D,{children:u,remarkPlugins:[d.Z],rehypePlugins:[r.Z]})))))}},8209:function(a,e,n){n.r(e),n.d(e,{assets:function(){return v},contentTitle:function(){return m},default:function(){return g},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return k}});var o=n(7462),l=n(3366),t=(n(7294),n(3905)),i=n(4866),r=n(5162),d=n(4695),s=n(6745),c=["components"],u={id:"Pix",title:"Pix",hide_title:!0,sidebar_label:"Pix"},m=void 0,p={unversionedId:"APIPix/Pix",id:"APIPix/Pix",title:"Pix",description:"Pix",source:"@site/docs/APIPix/Pix.md",sourceDirName:"APIPix",slug:"/APIPix/Pix",permalink:"/docs/APIPix/Pix",draft:!1,tags:[],version:"current",frontMatter:{id:"Pix",title:"Pix",hide_title:!0,sidebar_label:"Pix"},sidebar:"someSidebar",previous:{title:"Cobrancas com vencimento",permalink:"/docs/APIPix/CobrancasComVencimento"},next:{title:"Payload Locations",permalink:"/docs/APIPix/PayloadLocations"}},v={},k=[{value:"Consultar Pix",id:"consultar-pix",level:3},{value:"Consultar Pix Recebidos",id:"consultar-pix-recebidos",level:3},{value:"Requisitar envio de Pix",id:"requisitar-envio-de-pix",level:3},{value:"Consultar Pix enviado",id:"consultar-pix-enviado",level:3},{value:"Consultar lista de Pix enviados",id:"consultar-lista-de-pix-enviados",level:3},{value:"Solicitar devolu\xe7\xe3o",id:"solicitar-devolu\xe7\xe3o",level:3},{value:"Consultar devolu\xe7\xe3o",id:"consultar-devolu\xe7\xe3o",level:3}],b={toc:k},x="wrapper";function g(a){var e=a.components,n=(0,l.Z)(a,c);return(0,t.kt)(x,(0,o.Z)({},b,n,{components:e,mdxType:"MDXLayout"}),(0,t.kt)("h1",{className:"titulo"},"Pix"),(0,t.kt)("div",{className:"subtitulo"},(0,t.kt)("div",{className:"light"},"Os endpoints a seguir trazem as funcionalidades dispon\xedveis para a gest\xe3o das transa\xe7\xf5es Pix, isto \xe9, a manuten\xe7\xe3o dos recebimentos e envios de valores atrav\xe9s do arranjo de pagamentos Pix."),(0,t.kt)("hr",null),(0,t.kt)("h3",{id:"consultar-pix"},"Consultar Pix"),(0,t.kt)("p",null,"  Endpoint para consultar um Pix atrav\xe9s de um ",(0,t.kt)("em",{parentName:"p"},"End to End ID")," (",(0,t.kt)("code",null,"e2eid"),")."),(0,t.kt)("div",{className:"admonition_info"},(0,t.kt)("div",null,(0,t.kt)("img",{src:"/img/exclamation-triangle-blue.svg"})," ",(0,t.kt)("b",null,"Aten\xe7\xe3o!")),"Este endpoint retorna apenas informa\xe7\xf5es sobre ",(0,t.kt)("b",null,"Pix recebidos"),"."),(0,t.kt)("br",null),(0,t.kt)("div",{className:"get"},(0,t.kt)("details",{className:"col-100"},(0,t.kt)("summary",null,(0,t.kt)("b",null,(0,t.kt)(d.d6,{mdxType:"HighlightGet"},"GET")," /v2/pix/",(0,t.kt)(d.T7,{mdxType:"HighlightVar"},":e2eId"))),(0,t.kt)("div",{className:"get-div"},(0,t.kt)("div",{className:"col-65"},"Requer autoriza\xe7\xe3o para o escopo: ",(0,t.kt)("code",null,"pix.read")),(0,t.kt)("div",{className:"col-35"},(0,t.kt)(s.Z,{filename:"/markdown/pix/pix/Consultar_pix.md",mdxType:"Modal"}))),(0,t.kt)("br",null),(0,t.kt)("b",null,"Respostas"),(0,t.kt)("br",null),(0,t.kt)("p",null,"  As respostas abaixo representam Sucesso(200) e Falhas/erros do consumo."),(0,t.kt)(i.Z,{defaultValue:"saida",values:[{label:"200",value:"saida"},{label:"200",value:"200"},{label:"400",value:"400"},{label:"500",value:"500"}],mdxType:"Tabs"},(0,t.kt)(r.Z,{value:"saida",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-json"},'{\n"endToEndId": "E12345678202009091221abcdef12345",\n"txid": "cd1fe328c875481285a6f233ae41b662",\n"valor": "100.00",\n"horario": "2020-09-10T13:03:33.902Z",\n"infoPagador": "Reforma da casa",\n"devolucoes": [\n  {\n    "id": "000AAA111",\n    "rtrId": "D12345678202009091000abcde123456",\n    "valor": "11.00",\n    "horario": {\n      "solicitacao": "2020-09-10T13:03:33.902Z"\n    },\n    "status": "EM_PROCESSAMENTO"\n  }\n]\n}\n'))),(0,t.kt)(r.Z,{value:"403",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-json"},'{\n"type": "https://pix.bcb.gov.br/api/v2/error/AcessoNegado",\n"title": "Acesso Negado",\n"status": 403,\n"detail": "Requisi\xe7\xe3o de participante autenticado que viola alguma regra de autoriza\xe7\xe3o."\n}\n'))),(0,t.kt)(r.Z,{value:"200",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-json"},'{\n"endToEndId": "E12345678202009091221ghijk78901234",\n"txid": "5b933948f3224266b1050ac54319e775",\n"valor": "200.00",\n"horario": "2020-09-10T13:03:33.902Z",\n"infoPagador": "Revis\xe3o do carro"\n}\n'))),(0,t.kt)(r.Z,{value:"400",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-json"},'{\n"nome": "pix_nao_encontrado",\n"mensagem": "Nenhum pix encontrado para o identificador informado"\n}\n'))),(0,t.kt)(r.Z,{value:"500",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-json"},'{\n"nome": "erro_aplicacao",\n"mensagem": "Ocorreu um erro ao buscar o pix"\n}\n')))))),(0,t.kt)("br",null),(0,t.kt)("h3",{id:"consultar-pix-recebidos"},"Consultar Pix Recebidos"),(0,t.kt)("p",null,"  Endpoint para consultar v\xe1rios Pix recebidos."),(0,t.kt)("div",{className:"get"},(0,t.kt)("details",{className:"col-100"},(0,t.kt)("summary",null,(0,t.kt)("b",null,(0,t.kt)(d.d6,{mdxType:"HighlightGet"},"GET")," /v2/pix")),(0,t.kt)("div",{className:"get-div"},(0,t.kt)("div",{className:"col-65"},"Requer autoriza\xe7\xe3o para o escopo: ",(0,t.kt)("code",null,"cobv.read")),(0,t.kt)("div",{className:"col-35"},(0,t.kt)(s.Z,{filename:"/markdown/pix/pix/Consultar_recebidos.md",mdxType:"Modal"}))),(0,t.kt)("br",null),(0,t.kt)("b",null,"Requisi\xe7\xe3o"),(0,t.kt)("br",null),"Este endpoint disp\xf5e de filtros para afunilar os resultados. Todos os filtros s\xe3o do tipo ",(0,t.kt)("em",null,"query params"),", portanto devem ser enviados pela URL, como exemplificado no trecho de c\xf3digo abaixo.",(0,t.kt)("br",null),(0,t.kt)("br",null),(0,t.kt)("code",null,"/v2/pix?inicio=2020-04-01T00:00:00Z&fim=2020-04-01T23:59:59Z"),(0,t.kt)("br",null),(0,t.kt)("br",null),"Os filtros ",(0,t.kt)("code",null,"inicio")," e ",(0,t.kt)("code",null,"fim")," definem um intervalo de datas em que os Pix devem estar compreendidos para serem retornados. Esses filtros s\xe3o obrigat\xf3rios.",(0,t.kt)("br",null),(0,t.kt)("br",null),(0,t.kt)("b",null,"Respostas"),(0,t.kt)("br",null),(0,t.kt)("p",null,"  As respostas abaixo representam Sucesso(200) e Falhas/erros do consumo."),(0,t.kt)(i.Z,{defaultValue:"saida",values:[{label:"200",value:"saida"},{label:"400",value:"400"},{label:"500",value:"500"}],mdxType:"Tabs"},(0,t.kt)(r.Z,{value:"saida",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "parametros": {\n      "inicio": "2022-01-01T00:00:00.000Z",\n      "fim": "2022-12-31T23:00:00.000Z",\n      "paginacao": {\n          "paginaAtual": 0,\n          "itensPorPagina": 100,\n          "quantidadeDePaginas": 2,\n          "quantidadeTotalDeItens": 150\n      }\n  },\n  "pix": [\n      {\n          "endToEndId": "E182361232022110114206014506ed00",\n          "txid": "465669b3847d4a30ae14848c5d4d1683",\n          "valor": "0.01",\n          "chave": "5f84a4c5-c5cb-4599-9f13-7eb4d419dacc",\n          "horario": "2022-11-01T14:20:41.425Z"\n      },\n      {\n          "endToEndId": "E18236129202210311159s01f572d8b1",\n          "txid": "0002712070000000000000209BONAE2",\n          "valor": "5.00",\n          "chave": "5f84a4c5-c5cb-4599-9f13-7eb4d419dacc",\n          "horario": "2022-10-31T11:59:13.220Z"\n      },\n      {\n          "endToEndId": "E18236126202210091755s13093ea838",\n          "txid": "fc9a4386fefdh964b5dbc6c91a8722d5",\n          "valor": "0.02",\n          "chave": "5f84a4c5-c5cb-4590-9f13-7eb4d419dacc",\n          "horario": "2022-10-19T17:56:09.173Z",\n          "devolucoes": [\n              {\n                  "id": "fc9a4386fefdh964b5dbc6c91a8722d5",\n                  "rtrId": "D09089556202210191757eeb3cf6972c",\n                  "valor": "0.01",\n                  "horario": {\n                      "solicitacao": "2022-10-19T17:57:02.000Z",\n                      "liquidacao": "2022-10-19T17:57:03.000Z"\n                  },\n                  "status": "DEVOLVIDO"\n              },\n              {\n                  "id": "fc9a4386fefdh964b5dbc6c91a8722d6",\n                  "rtrId": "D09089356002210191757c95a3620972",\n                  "valor": "0.01",\n                  "horario": {\n                      "solicitacao": "2022-10-19T17:57:33.000Z",\n                      "liquidacao": "2022-10-19T17:57:35.000Z"\n                  },\n                  "status": "DEVOLVIDO"\n              }\n          ]\n      }\n  ]\n}\n'))),(0,t.kt)(r.Z,{value:"400",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-json"},'{\n"nome": "valor_invalido",\n"mensagem": "Campo de data fim deve ser maior ou igual ao campo de data inicio"\n}\n'))),(0,t.kt)(r.Z,{value:"500",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-json"},'{\n"nome": "erro_aplicacao",\n"mensagem": "Ocorreu um erro ao buscar pix recebidos"\n}\n')))))),(0,t.kt)("br",null),(0,t.kt)("h3",{id:"requisitar-envio-de-pix"},"Requisitar envio de Pix"),(0,t.kt)("p",null,"  Endpoint destinado a realizar o envio direto de um Pix para uma chave Pix cadastrada em um PSP seja da Ef\xed ou outro."),(0,t.kt)("div",{className:"admonition_caution"},(0,t.kt)("div",null,(0,t.kt)("img",{src:"/img/info-circle-orange.svg"})," ",(0,t.kt)("b",null,"Instru\xe7\xf5es")),"Para habilitar o endpoint pix/enviar em produ\xe7\xe3o, \xe9 necess\xe1rio preencher este formul\xe1rio. Ap\xf3s o preenchimento, basta aguardar que entraremos em contato.",(0,t.kt)("br",null),"Caso voc\xea precise testar o endpoint de envio de Pix, temos um ambiente de homologa\xe7\xe3o funcional em que \xe9 poss\xedvel simular todos os status retornados pela nossa API e webhook.",(0,t.kt)("br",null),(0,t.kt)("br",null),"Se o valor do Pix est\xe1 entre ",(0,t.kt)("b",null,"R$ 0.01")," \xe0 ",(0,t.kt)("b",null,"R$ 10.00"),":",(0,t.kt)("br",null),(0,t.kt)("i",null,"Pix \xe9 confirmado, informa\xe7\xe3o vir\xe1 via Webhook."),(0,t.kt)("br",null),"Se o valor do Pix est\xe1 entre ",(0,t.kt)("b",null,"R$ 10.01")," \xe0 ",(0,t.kt)("b",null,"R$ 20.00"),":",(0,t.kt)("br",null),(0,t.kt)("i",null,"Pix \xe9 rejeitado, informa\xe7\xe3o vir\xe1 via Webhook."),(0,t.kt)("br",null),"Se o valor do Pix \xe9 acima de ",(0,t.kt)("b",null,"R$ 20.00"),":",(0,t.kt)("br",null),(0,t.kt)("i",null,"Pix \xe9 rejeitado j\xe1 na requisi\xe7\xe3o, informa\xe7\xe3o n\xe3o vir\xe1 via Webhook.")),(0,t.kt)("br",null),(0,t.kt)("div",{className:"admonition_caution"},(0,t.kt)("div",null,(0,t.kt)("img",{src:"/img/lightbulb-on-orange.svg"})," ",(0,t.kt)("b",null,"Webhooks")),"Para utiliza\xe7\xe3o do ",(0,t.kt)("i",null,"endpoint")," de Requisitar envio de Pix, al\xe9m da libera\xe7\xe3o do escopo ",(0,t.kt)("i",null,"pix.send")," \xe9 necess\xe1rio que a chave Pix do pagador tenha um ",(0,t.kt)("i",null,"webhook")," associado a mesma, pois, ser\xe1 por meio do ",(0,t.kt)("i",null,"webhook")," que a Ef\xed vai informar a voc\xea se o envio de pix foi realizado com sucesso ou n\xe3o."),(0,t.kt)("br",null),(0,t.kt)("div",{className:"admonition_caution"},(0,t.kt)("div",null,(0,t.kt)("img",{src:"/img/exclamation-triangle-orange.svg"})," ",(0,t.kt)("b",null,"Aten\xe7\xe3o!")),"Para maior performance de uso do servi\xe7o, e visando evitar a colis\xe3o de movimenta\xe7\xf5es de saldo, sugerimos que o envio de Pix por API seja condicionado \xe0 conclus\xe3o da transa\xe7\xe3o anterior, que se d\xe1 pelo webhook. Caso a pr\xe1tica anteriormente citada n\xe3o seja adotada, quando m\xfaltiplas requisi\xe7\xf5es de envio forem feitas simultaneamente, o integrador poder\xe1 experimentar falhas no envio."),(0,t.kt)("br",null),(0,t.kt)("div",{className:"put"},(0,t.kt)("details",{className:"col-100"},(0,t.kt)("summary",null,(0,t.kt)("b",null,(0,t.kt)(d.jS,{mdxType:"HighlightPut"},"PUT")," /v2/gn/pix/",(0,t.kt)(d.T7,{mdxType:"HighlightVar"},":idEnvio"))),(0,t.kt)("div",{className:"put-div"},(0,t.kt)("div",{className:"col-65"},"Requer autoriza\xe7\xe3o para o escopo: ",(0,t.kt)("code",null,"pix.send")),(0,t.kt)("div",{className:"col-35"},(0,t.kt)(s.Z,{filename:"/markdown/pix/pix/Enviar_pix.md",mdxType:"Modal"}))),(0,t.kt)("br",null),(0,t.kt)("b",null,"Requisi\xe7\xe3o"),(0,t.kt)(i.Z,{defaultValue:"exemplo1",values:[{label:"Exemplo 1",value:"exemplo1"},{label:"Exemplo 2",value:"exemplo2"},{label:"Exemplo 3",value:"exemplo3"}],mdxType:"Tabs"},(0,t.kt)(r.Z,{value:"exemplo1",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-json"},'{\n"valor": "12.34",\n"pagador": {\n  "chave": "19974764017",\n  "infoPagador": "Segue o pagamento da conta"\n},\n"favorecido": {\n  "chave": "jo\xe3o@meuemail.com"\n}\n}\n'))),(0,t.kt)(r.Z,{value:"exemplo2",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-json"},'{\n"valor": "99.99",\n"pagador": {\n  "chave": "19974764017",\n  "infoPagador": "Segue o pagamento da conta"\n},\n"favorecido": {\n  "contaBanco": {\n    "nome": "JOSE CARVALHO",\n    "cpf": "10519952057",\n    "codigoBanco": "09089356",\n    "agencia": "1",\n    "conta": "123453",\n    "tipoConta": "cacc"\n  }\n}\n}\n'))),(0,t.kt)(r.Z,{value:"exemplo3",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-json"},'Exemplo validando o titular da chave\n{\n"valor": "12.34",\n"pagador": {\n  "chave": "19974764017"\n},\n"favorecido": {\n  "chave": "jo\xe3o@meuemail.com",\n  "cpf": "58629188090"\n}\n}\n')))),(0,t.kt)("br",null),(0,t.kt)("b",null,"Respostas"),(0,t.kt)("br",null),(0,t.kt)("p",null,"  As respostas abaixo representam Sucesso(201) e Falhas/erros do consumo."),(0,t.kt)(i.Z,{defaultValue:"saida",values:[{label:"201",value:"saida"},{label:"400",value:"400"},{label:"409",value:"409"},{label:"500",value:"500"}],mdxType:"Tabs"},(0,t.kt)(r.Z,{value:"saida",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "calendario": {\n    "criacao": "2020-09-09T20:15:00.358Z",\n    "expiracao": 3600\n  },\n  "txid": "7978c0c97ea847e78e8849634473c1f1",\n  "revisao": 0,\n  "loc": {\n    "id": 789,\n    "location": "pix.example.com/qr/v2/9d36b84fc70b478fb95c12729b90ca25",\n    "tipoCob": "cob"\n  },\n  "location": "pix.example.com/qr/v2/9d36b84fc70b478fb95c12729b90ca25",\n  "status": "ATIVA",\n  "devedor": {\n    "cnpj": "12345678000195",\n    "nome": "Empresa de Servi\xe7os SA"\n  },\n  "valor": {\n    "original": "567.89"\n  },\n  "chave": "a1f4102e-a446-4a57-bcce-6fa48899c1d1",\n  "solicitacaoPagador": "Informar cart\xe3o fidelidade"\n}\n'))),(0,t.kt)(r.Z,{value:"400",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-json"},'InvalidOperationError\n{\n  "nome": "documento_bloqueado",\n  "mensagem": "O documento desta conta tem bloqueios que impedem a emiss\xe3o"\n}\n\nOu\n\n{\n  "nome": "chave_invalida",\n  "mensagem": "A chave informada n\xe3o faz refer\xeancia \xe0 conta Gerencianet autenticada"\n}\n\nInvalidValueError\n{\n  "nome": "valor_invalido",\n  "mensagem": "Campo valor.original deve ser maior que zero"\n}\n\nOu\n\n{\n  "nome": "valor_invalido",\n  "mensagem": "Campo calendario.expiracao deve ser maior que zero"\n}\n\nOu\n\n{\n  "nome": "valor_invalido",\n  "mensagem": "Documento CPF em devedor.cpf \xe9 inv\xe1lido"\n}\n\n{\n  "nome": "valor_invalido",\n  "mensagem": "Documento CNPJ em devedor.cnpj \xe9 inv\xe1lido"\n}\n'))),(0,t.kt)(r.Z,{value:"409",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-json"},'DuplicatedRegisterError\n{\n  "nome": "txid_duplicado",\n  "mensagem": "Campo txid informado j\xe1 foi utilizado em outra cobran\xe7a"\n}\n'))),(0,t.kt)(r.Z,{value:"500",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-json"},'ApplicationError\n{\n  "nome": "erro_aplicacao",\n  "mensagem": "Ocorreu um erro ao validar a chave"\n}\n')))))),(0,t.kt)("br",null),(0,t.kt)("h3",{id:"consultar-pix-enviado"},"Consultar Pix enviado"),(0,t.kt)("p",null,"  Endpoint para consultar um Pix enviado atrav\xe9s de seu End to End ID (",(0,t.kt)("code",null,"e2eid"),")."),(0,t.kt)("div",{className:"get"},(0,t.kt)("details",{className:"col-100"},(0,t.kt)("summary",null,(0,t.kt)("b",null,(0,t.kt)(d.d6,{mdxType:"HighlightGet"},"GET")," /v2/pix/enviados/",(0,t.kt)(d.T7,{mdxType:"HighlightVar"},":e2eId"))),(0,t.kt)("div",{className:"get-div"},(0,t.kt)("div",{className:"col-65"},"Requer autoriza\xe7\xe3o para o escopo: ",(0,t.kt)("code",null,"gn.pix.send.read")),(0,t.kt)("div",{className:"col-35"},(0,t.kt)(s.Z,{filename:"/markdown/pix/pix/Consultar_pix_enviado.md",mdxType:"Modal"}))),(0,t.kt)("br",null),(0,t.kt)("b",null,"Respostas"),(0,t.kt)("br",null),(0,t.kt)("p",null,"  As respostas abaixo representam Sucesso(200) e Falhas/erros do consumo."),(0,t.kt)(i.Z,{defaultValue:"saida",values:[{label:"200",value:"saida"},{label:"200",value:"200"},{label:"404",value:"404"}],mdxType:"Tabs"},(0,t.kt)(r.Z,{value:"saida",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-json"},'{ // Pix enviado atrav\xe9s endpoint da API Pix para uma chave pix\n  "endToEndId": "E09089356202210251208APIcdbe38b4",\n  "idEnvio": "identificadoEnvio123456789",\n  "valor": "0.01",\n  "chave": "19974764017",\n  "status": "REALIZADO",\n  "infoPagador": "Segue o pagamento da conta (endpoint pix sent)",\n  "horario": {\n      "solicitacao": "2022-10-26T09:05:32.000Z",\n      "liquidacao": "2022-10-26T09:05:31.000Z"\n  },\n  "favorecido": {\n      "chave": "francisco@meuemail.com",\n      "identificacao": {\n          "nome": "Francisco da Silva",\n          "cpf": "***.456.789-**"\n      }\n  }\n}\n'))),(0,t.kt)(r.Z,{value:"200",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-json"},'{ // Pix enviado atrav\xe9s endpoint da API Pix via dados banc\xe1rios\n  "endToEndId": "E09089356202210262021APIbh1457fa",\n  "idEnvio": "4",\n  "valor": "0.01",\n  "chave": "19974764017",\n  "status": "REALIZADO",\n  "infoPagador": "Segue o pagamento da conta (pix.sent dados bancarios)",\n  "horario": {\n      "solicitacao": "2022-10-26T17:21:19.000Z",\n      "liquidacao": "2022-10-26T17:21:18.000Z"\n  },\n  "favorecido": {\n      "contaBanco": {\n          "nome": "Francisco da Silva",\n          "cpf": "***.456.789-**",\n          "agencia": "1",\n          "conta": "12345678",\n          "tipoConta": "corrente"\n      }\n  }\n}\n'))),(0,t.kt)(r.Z,{value:"404",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "https://pix.bcb.gov.br/api/v2/error/PixEnviadoNaoEncontrado",\n  "title": "N\xe3o Encontrado",\n  "status": 404,\n  "detail": "Pix enviado n\xe3o encontrado para o e2eid informado."\n}\n')))))),(0,t.kt)("br",null),(0,t.kt)("h3",{id:"consultar-lista-de-pix-enviados"},"Consultar lista de Pix enviados"),(0,t.kt)("p",null,"Endpoint para consultar um Pix enviado atrav\xe9s de seu End to End ID (e2eid)."),(0,t.kt)("div",{className:"get"},(0,t.kt)("details",{className:"col-100"},(0,t.kt)("summary",null,(0,t.kt)("b",null,(0,t.kt)(d.d6,{mdxType:"HighlightGet"},"GET")," /v2/gn/pix/enviados/",(0,t.kt)(d.T7,{mdxType:"HighlightVar"},":e2eId"))),(0,t.kt)("div",{className:"get-div"},(0,t.kt)("div",{className:"col-65"},"Requer autoriza\xe7\xe3o para o escopo: ",(0,t.kt)("code",null,"gn.pix.send.read")),(0,t.kt)("div",{className:"col-35"},(0,t.kt)(s.Z,{filename:"/markdown/pix/pix/Listar_enviados.md",mdxType:"Modal"}))),(0,t.kt)("br",null),(0,t.kt)("br",null),(0,t.kt)("b",null,"Requisi\xe7\xe3o"),(0,t.kt)("br",null),"Para obter o resultado da consulta \xe9 necess\xe1rio informar os par\xe2metros inicio e fim, como exibido no trecho de c\xf3digo abaixo. Esses par\xe2metros restringem os resultados para os Pix enviados compreendidos nesse intervalo de datas.",(0,t.kt)("br",null),(0,t.kt)("br",null),(0,t.kt)("code",null,"/v2/gn/pix/enviados?inicio=2022-01-01T00:00:00.000Z&fim=2022-12-31T23:59:59.000Z"),(0,t.kt)("br",null),(0,t.kt)("br",null),(0,t.kt)("b",null,"Respostas"),(0,t.kt)("br",null),(0,t.kt)("p",null,"  As respostas abaixo representam Sucesso(200) e Falhas/erros do consumo."),(0,t.kt)(i.Z,{defaultValue:"saida",values:[{label:"200",value:"saida"},{label:"200",value:"200"},{label:"404",value:"404"}],mdxType:"Tabs"},(0,t.kt)(r.Z,{value:"saida",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-json"},' Pix enviado atrav\xe9s endpoint da API Pix para uma chave pix\n{ \n  "endToEndId": "E09089356202210251208APIcdbe38b4",\n  "idEnvio": "identificadoEnvio123456789",\n  "valor": "0.01",\n  "chave": "19974764017",\n  "status": "REALIZADO",\n  "infoPagador": "Segue o pagamento da conta (endpoint pix sent)",\n  "horario": {\n      "solicitacao": "2022-10-26T09:05:32.000Z",\n      "liquidacao": "2022-10-26T09:05:31.000Z"\n  },\n  "favorecido": {\n      "chave": "francisco@meuemail.com",\n      "identificacao": {\n          "nome": "Francisco da Silva",\n          "cpf": "***.456.789-**"\n      }\n  }\n}\n'))),(0,t.kt)(r.Z,{value:"200",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-json"},'Pix enviado atrav\xe9s endpoint da API Pix via dados banc\xe1rios\n{ \n  "endToEndId": "E09089356202210262021APIbh1457fa",\n  "idEnvio": "4",\n  "valor": "0.01",\n  "chave": "19974764017",\n  "status": "REALIZADO",\n  "infoPagador": "Segue o pagamento da conta (pix.sent dados bancarios)",\n  "horario": {\n      "solicitacao": "2022-10-26T17:21:19.000Z",\n      "liquidacao": "2022-10-26T17:21:18.000Z"\n  },\n  "favorecido": {\n      "contaBanco": {\n          "nome": "Francisco da Silva",\n          "cpf": "***.456.789-**",\n          "agencia": "1",\n          "conta": "12345678",\n          "tipoConta": "corrente"\n      }\n  }\n}\n'))),(0,t.kt)(r.Z,{value:"404",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "https://pix.bcb.gov.br/api/v2/error/PixEnviadoNaoEncontrado",\n  "title": "N\xe3o Encontrado",\n  "status": 404,\n  "detail": "Pix enviado n\xe3o encontrado para o e2eid informado."\n}\n')))))),(0,t.kt)("br",null),(0,t.kt)("h3",{id:"solicitar-devolu\xe7\xe3o"},"Solicitar devolu\xe7\xe3o"),(0,t.kt)("p",null,"Endpoint para solicitar uma devolu\xe7\xe3o atrav\xe9s de um ",(0,t.kt)("code",null,"e2eid"),' do Pix e do ID da devolu\xe7\xe3o. O motivo que ser\xe1 atribu\xeddo \xe0 PACS.004 ser\xe1 "Devolu\xe7\xe3o solicitada pelo usu\xe1rio recebedor do pagamento original" cuja sigla \xe9 "MD06" de acordo com a aba RTReason da PACS.004 que consta no Cat\xe1logo de Mensagens do Pix.'),(0,t.kt)("div",{className:"put"},(0,t.kt)("details",{className:"col-100"},(0,t.kt)("summary",null,(0,t.kt)("b",null,(0,t.kt)(d.jS,{mdxType:"HighlightPut"},"PUT")," /v2/pix/",(0,t.kt)(d.T7,{mdxType:"HighlightVar"},":e2eId"),"/devolucao/",(0,t.kt)(d.T7,{mdxType:"HighlightVar"},":id"))),(0,t.kt)("div",{className:"put-div"},(0,t.kt)("div",{className:"col-65"},"Requer autoriza\xe7\xe3o para o escopo: ",(0,t.kt)("code",null,"pix.write")),(0,t.kt)("div",{className:"col-35"},(0,t.kt)(s.Z,{filename:"/markdown/pix/pix/Solicitar_devolucao.md",mdxType:"Modal"}))),(0,t.kt)("br",null),(0,t.kt)("b",null,"Respostas"),(0,t.kt)("br",null),(0,t.kt)("p",null,"  As respostas abaixo representam Sucesso(201) e Falhas/erros do consumo."),(0,t.kt)(i.Z,{defaultValue:"saida",values:[{label:"201",value:"saida"},{label:"400",value:"400"},{label:"409",value:"409"},{label:"500",value:"500"}],mdxType:"Tabs"},(0,t.kt)(r.Z,{value:"saida",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-json"},'{\n"id": "123456",\n"rtrId": "D12345678202009091000abcde123456",\n"valor": "7.89",\n"horario": {\n  "solicitacao": "2020-09-11T15:25:59.411Z"\n},\n"status": "EM_PROCESSAMENTO"\n}\n'))),(0,t.kt)(r.Z,{value:"400",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-json"},'{\n"nome": "pix_nao_encontrado",\n"mensagem": "Nenhum pix encontrado para o identificador informado"\n}\n'))),(0,t.kt)(r.Z,{value:"409",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-json"},'{\n"nome": "devolucao_id_duplicado",\n"mensagem": "O id informado j\xe1 foi utilizado em outra devolu\xe7\xe3o"\n}\n'))),(0,t.kt)(r.Z,{value:"500",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-json"},'{\n"nome": "erro_aplicacao",\n"mensagem": "Ocorreu um erro ao solicitar devolu\xe7\xe3o"\n}\n')))))),(0,t.kt)("br",null),(0,t.kt)("h3",{id:"consultar-devolu\xe7\xe3o"},"Consultar devolu\xe7\xe3o"),(0,t.kt)("p",null,"Endpoint para consultar uma devolu\xe7\xe3o atrav\xe9s de um End To End ID do Pix e do ID da devolu\xe7\xe3o."),(0,t.kt)("div",{className:"get"},(0,t.kt)("details",{className:"col-100"},(0,t.kt)("summary",null,(0,t.kt)("b",null,(0,t.kt)(d.d6,{mdxType:"HighlightGet"},"GET")," /v2/pix/",(0,t.kt)(d.T7,{mdxType:"HighlightVar"},":e2eId"),"/devolucao/",(0,t.kt)(d.T7,{mdxType:"HighlightVar"},":id"))),(0,t.kt)("div",{className:"get-div"},(0,t.kt)("div",{className:"col-65"},"Requer autoriza\xe7\xe3o para o escopo: ",(0,t.kt)("code",null,"pix.read")),(0,t.kt)("div",{className:"col-35"},(0,t.kt)(s.Z,{filename:"/markdown/pix/pix/Consultar_devolucao.md",mdxType:"Modal"}))),(0,t.kt)("br",null),(0,t.kt)("b",null,"Respostas"),(0,t.kt)("br",null),(0,t.kt)("p",null,"  As respostas abaixo representam Sucesso(200) e Falhas/erros do consumo."),(0,t.kt)(i.Z,{defaultValue:"saida",values:[{label:"200",value:"saida"},{label:"200",value:"200"},{label:"400",value:"400"},{label:"500",value:"500"}],mdxType:"Tabs"},(0,t.kt)(r.Z,{value:"saida",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-json"},' {\n"id": "123456",\n"rtrId": "D12345678202009091000abcde123456",\n"valor": "7.89",\n"horario": {\n  "solicitacao": "2020-09-11T15:25:59.411Z"\n},\n"status": "EM_PROCESSAMENTO"\n}\n'))),(0,t.kt)(r.Z,{value:"200",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-json"},'{\n"id": "502",\n"rtrId": "D12345678202011111000fghij789012",\n"valor": "20.00",\n"horario": {\n  "solicitacao": "2020-09-11T15:25:59.411Z"\n},\n"status": "NAO_REALIZADO",\n"motivo": "Negado por timeout"\n}\n'))),(0,t.kt)(r.Z,{value:"400",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-json"},'{\n"nome": "devolucao_nao_encontrada",\n"mensagem": "Nenhuma devolu\xe7\xe3o encontrada para o identificador informado"\n}\n\nOU\n\n{\n"nome": "pix_nao_encontrado",\n"mensagem": "Nenhum pix encontrado para o identificador informado"\n}\n'))),(0,t.kt)(r.Z,{value:"500",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-json"},'{\n"nome": "erro_aplicacao",\n"mensagem": "Ocorreu um erro ao buscar devolu\xe7\xe3o"\n}\n'))))))))}g.isMDXComponent=!0}}]);