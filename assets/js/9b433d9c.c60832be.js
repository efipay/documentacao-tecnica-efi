"use strict";(self.webpackChunkwebsite_efi=self.webpackChunkwebsite_efi||[]).push([[3973],{4695:function(e,a,o){o.d(a,{GA:function(){return d},N1:function(){return r},T7:function(){return c},ZP:function(){return l},d6:function(){return u},jS:function(){return s},mj:function(){return i}});var n=o(7294),t=o(2949);function l(e){var a=e.children,o=e.backgroundColor,t=e.color;return n.createElement("span",{style:{backgroundColor:o,color:t,borderRadius:"12px",padding:"3px 10px 3px 10px",fontSize:"15px"}},a)}function r(e){return l({children:e.children,backgroundColor:"rgba(87,167,59,0.4)",color:"dark"===(0,t.I)().colorMode?"rgba(162,222,142,1)":"rgba(36,121,7,1)"})}function s(e){return l({children:e.children,backgroundColor:"rgba(243,156,18,0.4)",color:"dark"===(0,t.I)().colorMode?"rgba(252,213,151,1)":"rgba(166,102,0,1)"})}function i(e){return l({children:e.children,backgroundColor:"rgba(179,228,163,0.4)",color:"dark"===(0,t.I)().colorMode?"rgba(162,222,142,1)":"rgba(36,121,7,1)"})}function u(e){return l({children:e.children,backgroundColor:"rgba(11,161,194,0.4)",color:"dark"===(0,t.I)().colorMode?"rgba(119,214,234,1)":"rgba(0,97,119,1)"})}function d(e){return l({children:e.children,backgroundColor:"rgba(253,132,128,0.4)",color:"dark"===(0,t.I)().colorMode?"rgba(255,176,173,1)":"rgba(217,30,24,1)"})}function c(e){return l({children:e.children,color:"rgba(243,112,33,1)"})}},6745:function(e,a,o){o.d(a,{Z:function(){return u}});var n=o(7294),t=o(3253),l=o.n(t),r=o(4223),s=o(8189),i=o(5585);function u(e){var a=e.filename,o=n.useState(!1),t=o[0],u=o[1];var d=(0,n.useState)(""),c=d[0],p=d[1];return(0,n.useEffect)((function(){fetch(a).then((function(e){return e.text()})).then((function(e){return p(e)})).catch((function(e){return console.log(e)}))})),n.createElement("div",null,n.createElement("button",{className:"buttonModify2 button-referencia",onClick:function(){u(!0)}},"Consultar Atributos",n.createElement("svg",{width:"13.5",height:"13.5","aria-hidden":"true",viewBox:"0 0 24 24",class:"iconExternalLink_node_modules-@docusaurus-theme-classic-lib-theme-Icon-ExternalLink-styles-module"},n.createElement("path",{fill:"currentColor",d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"}))),n.createElement(l(),{className:"modal",isOpen:t,onRequestClose:function(){u(!1)},ariaHideApp:!1,contentLabel:"Modal de exemplo"},n.createElement("div",{className:"conteudo-modal"},n.createElement("div",{className:"col-50"},n.createElement(r.D,{children:c,remarkPlugins:[i.Z],rehypePlugins:[s.Z]})))))}},997:function(e,a,o){o.r(a),o.d(a,{assets:function(){return k},contentTitle:function(){return p},default:function(){return x},frontMatter:function(){return c},metadata:function(){return m},toc:function(){return v}});var n=o(7462),t=o(3366),l=(o(7294),o(3905)),r=o(4866),s=o(5162),i=o(4695),u=o(6745),d=["components"],c={id:"EndpointsExclusivosEfi",title:"Endpoints exclusivos Ef\xed",hide_title:!0,sidebar_label:"Endpoints exclusivos Ef\xed"},p=void 0,m={unversionedId:"APIPix/EndpointsExclusivosEfi",id:"APIPix/EndpointsExclusivosEfi",title:"Endpoints exclusivos Ef\xed",description:"Webhooks",source:"@site/docs/APIPix/EndpointsExclusivosEfi.md",sourceDirName:"APIPix",slug:"/APIPix/EndpointsExclusivosEfi",permalink:"/docs/APIPix/EndpointsExclusivosEfi",draft:!1,tags:[],version:"current",frontMatter:{id:"EndpointsExclusivosEfi",title:"Endpoints exclusivos Ef\xed",hide_title:!0,sidebar_label:"Endpoints exclusivos Ef\xed"},sidebar:"someSidebar",previous:{title:"Webhooks",permalink:"/docs/APIPix/Webhooks"},next:{title:"Gloss\xe1rio",permalink:"/docs/APIPix/Glossario"}},k={},v=[{value:"Endpoints exclusivos Ef\xcd",id:"endpoints-exclusivos-ef\xed",level:2},{value:"Criar chave evp",id:"criar-chave-evp",level:3},{value:"Listar chaves evp",id:"listar-chaves-evp",level:3},{value:"Remover chave evp",id:"remover-chave-evp",level:3},{value:"Buscar o saldo da conta",id:"buscar-o-saldo-da-conta",level:3},{value:"Criar/modifica configura\xe7\xf5es da conta",id:"criarmodifica-configura\xe7\xf5es-da-conta",level:3},{value:"Listar configura\xe7\xf5es da conta",id:"listar-configura\xe7\xf5es-da-conta",level:3},{value:"Requisitar Extrato Concilia\xe7\xe3o",id:"requisitar-extrato-concilia\xe7\xe3o",level:3},{value:"Solicitar Download Extrato Concilia\xe7\xe3o",id:"solicitar-download-extrato-concilia\xe7\xe3o",level:3}],b={toc:v},g="wrapper";function x(e){var a=e.components,o=(0,t.Z)(e,d);return(0,l.kt)(g,(0,n.Z)({},b,o,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h1",{className:"titulo"},"Webhooks"),(0,l.kt)("div",{className:"subtitulo"},(0,l.kt)("div",{className:"light"},"Esta se\xe7\xe3o re\xfane endpoints para gerenciamento de notifica\xe7\xf5es por parte do PSP recebedor ao usu\xe1rio recebedor."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"endpoints-exclusivos-ef\xed"},"Endpoints exclusivos Ef\xcd"),(0,l.kt)("p",null,"Os endpoints listados nesta se\xe7\xe3o visam \xe0 facilita\xe7\xe3o do uso da API Pix para os clientes Ef\xed . Com os endpoints a seguir voc\xea poder\xe1 obter e alterar informa\xe7\xf5es da sua conta diretamente pela API, conforme a necessidade da sua integra\xe7\xe3o."),(0,l.kt)("h3",{id:"criar-chave-evp"},"Criar chave evp"),(0,l.kt)("p",null,"Endpoint utilizado para criar uma chave Pix aleat\xf3ria (",(0,l.kt)("code",null,"evp"),")."),(0,l.kt)("div",{className:"post"},(0,l.kt)("details",{className:"col-100"},(0,l.kt)("summary",null,(0,l.kt)("b",null,(0,l.kt)(i.N1,{mdxType:"HighlightPost"},"POST"),"/v2/gn/evp")),(0,l.kt)("div",{className:"post-div"},(0,l.kt)("div",{className:"col-65"},"Requer autoriza\xe7\xe3o para o escopo: ",(0,l.kt)("code",null,"gn.pix.evp.write"))),(0,l.kt)("br",null),(0,l.kt)("b",null,"Requisi\xe7\xe3o"),(0,l.kt)("br",null),"A requisi\xe7\xe3o enviada para esse endpoint n\xe3o precisa de um body, apenas os cabe\xe7alhos de autoriza\xe7\xe3o OAuth e o certificado da conta, assim como os endpoints anteriores.",(0,l.kt)("br",null)," ",(0,l.kt)("br",null),(0,l.kt)("b",null,"Respostas"),(0,l.kt)("br",null),(0,l.kt)("p",null,"  As respostas abaixo representam Sucesso(201) e Falhas/erros do consumo."),(0,l.kt)(r.Z,{defaultValue:"saida",values:[{label:"201",value:"saida"},{label:"400",value:"400"},{label:"500",value:"500"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"saida",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n"chave": "345e4568-e89b-12d3-a456-006655440001"\n}\n'))),(0,l.kt)(s.Z,{value:"400",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n"nome": "limite_criacao_chave_atingido",\n"mensagem": "O limite de cria\xe7\xe3o de chaves foi atingido"\n}\n'))),(0,l.kt)(s.Z,{value:"500",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n"nome": "erro_aplicacao",\n"mensagem": "Ocorreu um erro ao solicitar a cria\xe7\xe3o da chave"\n}\n')))))),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"listar-chaves-evp"},"Listar chaves evp"),(0,l.kt)("p",null,"Endpoint utilizado para listar as chaves Pix aleat\xf3rias (",(0,l.kt)("code",null,"evp"),"). A listagem somente mostrar\xe1 as chaves do tipo aleat\xf3ria."),(0,l.kt)("div",{className:"get"},(0,l.kt)("details",{className:"col-100"},(0,l.kt)("summary",null,(0,l.kt)("b",null,(0,l.kt)(i.d6,{mdxType:"HighlightGet"},"GET"),"/v2/gn/evp")),(0,l.kt)("div",{className:"get-div"},(0,l.kt)("div",{className:"col-65"},"Requer autoriza\xe7\xe3o para o escopo: ",(0,l.kt)("code",null,"gn.pix.evp.read"))),(0,l.kt)("br",null),(0,l.kt)("b",null,"Requisi\xe7\xe3o"),(0,l.kt)("br",null),"A requisi\xe7\xe3o enviada para esse endpoint n\xe3o precisa de um body, apenas os cabe\xe7alhos de autoriza\xe7\xe3o OAuth e o certificado da conta, assim como os endpoints anteriores.",(0,l.kt)("br",null)," ",(0,l.kt)("br",null),(0,l.kt)("b",null,"Respostas"),(0,l.kt)("br",null),(0,l.kt)("p",null,"  As respostas abaixo representam Sucesso(200) e Falhas/erros do consumo."),(0,l.kt)(r.Z,{defaultValue:"saida",values:[{label:"200",value:"saida"},{label:"500",value:"500"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"saida",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},' {\n"chaves": [\n  "355e4568-e89b-1243-a456-006655440001",\n  "133e4568-e89b-1243-a456-006655440000"\n]\n}\n'))),(0,l.kt)(s.Z,{value:"500",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n"nome": "erro_aplicacao",\n"mensagem": "Ocorreu um erro ao buscar as chaves"\n}\n')))))),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"remover-chave-evp"},"Remover chave evp"),(0,l.kt)("p",null,"Endpoint utilizado para remover uma chave Pix aleat\xf3ria (",(0,l.kt)("code",null,"evp"),"). Caso remova uma chave aleat\xf3ria, n\xe3o h\xe1 como cri\xe1-la novamente: o uuid \xe9 gerado pelo DICT e a cada solicita\xe7\xe3o de registro de chave, nos \xe9 retornado um hash diferente. Isso significa que as cobran\xe7as criadas para a chave removida n\xe3o poder\xe3o mais ser pagas, pois o payload n\xe3o ser\xe1 mais retornado."),(0,l.kt)("div",{className:"delete"},(0,l.kt)("details",{className:"col-100"},(0,l.kt)("summary",null,(0,l.kt)("b",null,(0,l.kt)(i.GA,{mdxType:"HighlightDelete"},"DELETE"),"/v2/gn/evp/",(0,l.kt)(i.T7,{mdxType:"HighlightVar"},":chave"))),(0,l.kt)("div",{className:"delete-div"},(0,l.kt)("div",{className:"col-65"},"Requer autoriza\xe7\xe3o para o escopo: ",(0,l.kt)("code",null,"gn.pix.evp.write"))),(0,l.kt)("br",null),(0,l.kt)("b",null,"Requisi\xe7\xe3o"),(0,l.kt)("br",null),(0,l.kt)("p",null,"  A requisi\xe7\xe3o enviada para esse endpoint n\xe3o precisa de um body, apenas as informa\xe7\xf5es necess\xe1rias para autoriza\xe7\xe3o como os endpoints anteriores e o par\xe2metro chave passado na URL, que corresponde \xe0 chave Pix aleat\xf3ria (evp) que ser\xe1 apagada."),(0,l.kt)("br",null),(0,l.kt)("b",null,"Respostas"),(0,l.kt)("br",null),(0,l.kt)("p",null,"  As respostas abaixo representam Sucesso(200) e Falhas/erros do consumo."),(0,l.kt)(r.Z,{defaultValue:"saida",values:[{label:"200",value:"saida"},{label:"400",value:"400"},{label:"500",value:"500"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"saida",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},"Chave aleat\xf3ria removida.\n"))),(0,l.kt)(s.Z,{value:"400",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n"nome": "chave_nao_encontrada",\n"mensagem": "A chave informada n\xe3o foi encontrada"\n}\n'))),(0,l.kt)(s.Z,{value:"500",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n"nome": "erro_aplicacao",\n"mensagem": "Ocorreu um erro ao solicitar a exclus\xe3o da chave"\n}\n')))))),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"buscar-o-saldo-da-conta"},"Buscar o saldo da conta"),(0,l.kt)("p",null,"Endpoint com a finalidade de consultar o saldo em sua conta Ef\xed. Voc\xea pode habilitar o escopo nas configura\xe7\xf5es de sua aplica\xe7\xe3o em sua conta Ef\xed."),(0,l.kt)("div",{className:"get"},(0,l.kt)("details",{className:"col-100"},(0,l.kt)("summary",null,(0,l.kt)("b",null,(0,l.kt)(i.d6,{mdxType:"HighlightGet"},"GET"),"/v2/gn/saldo/")),(0,l.kt)("div",{className:"get-div"},(0,l.kt)("div",{className:"col-65"},"Requer autoriza\xe7\xe3o para o escopo: ",(0,l.kt)("code",null,"gn.balance.read")),(0,l.kt)("div",{className:"col-35"},(0,l.kt)(u.Z,{filename:"/markdown/pix/efi/Buscar_saldo.md",mdxType:"Modal"}))),(0,l.kt)("br",null),(0,l.kt)("b",null,"Requisi\xe7\xe3o"),(0,l.kt)("br",null),"A requisi\xe7\xe3o enviada para esse endpoint n\xe3o precisa de um ",(0,l.kt)("em",null,"body"),", com a op\xe7\xe3o de informar o par\xe2metro ",(0,l.kt)("code",null,"bloqueios")," igual a ",(0,l.kt)("code",null,"true")," ou ",(0,l.kt)("code",null,"false"),", como exibido no trecho de c\xf3digo abaixo. Esse par\xe2metro exibe ou n\xe3o, os saldos bloqueados por MED ou a\xe7\xe3o judicial.",(0,l.kt)("br",null)," ",(0,l.kt)("br",null),(0,l.kt)("code",null,"/v2/gn/saldo?bloqueios=true"),(0,l.kt)("br",null)," ",(0,l.kt)("br",null),(0,l.kt)("b",null,"Respostas"),(0,l.kt)("br",null),(0,l.kt)("p",null,"  As respostas abaixo representam Sucesso(200) e Falhas/erros do consumo."),(0,l.kt)(r.Z,{defaultValue:"saida",values:[{label:"200",value:"saida"},{label:"200",value:"200"},{label:"500",value:"500"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"saida",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'//Bloqueios = true\n {\n  "saldo": "100.00",\n  "bloqueios": {\n      "judicial": "0.00",\n      "med": "0.00",\n      "total": "0.00"\n  }\n}\n'))),(0,l.kt)(s.Z,{value:"200",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'//Bloqueios = false\n {\n"saldo": "100.00"\n}\n'))),(0,l.kt)(s.Z,{value:"500",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n"nome": "erro_aplicacao",\n"mensagem": "Ocorreu um erro ao solicitar o saldo da conta"\n}\n')))))),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"criarmodifica-configura\xe7\xf5es-da-conta"},"Criar/modifica configura\xe7\xf5es da conta"),(0,l.kt)("p",null,"  Endpoint com a finalidade de criar e modificar as configura\xe7\xf5es da conta do cliente relacionados \xe0 API."),(0,l.kt)("div",{className:"admonition_caution"},(0,l.kt)("div",null,(0,l.kt)("img",{src:"/img/lightbulb-on-orange.svg"})," ",(0,l.kt)("b",null,"API Open Finance")),'Em casos de utiliza\xe7\xe3o da API Open Finance, recomendamos que o atributo "receberSemChave" seja definido com o valor **true**, pois, a diverg\xeancia na configura\xe7\xe3o ir\xe1 impactar nas transa\xe7\xf5es.'),(0,l.kt)("br",null),(0,l.kt)("div",{className:"put"},(0,l.kt)("details",{className:"col-100"},(0,l.kt)("summary",null,(0,l.kt)("b",null,(0,l.kt)(i.jS,{mdxType:"HighlightPut"},"PUT"),"/v2/gn/config")),(0,l.kt)("div",{className:"put-div"},(0,l.kt)("div",{className:"col-65"},"Requer autoriza\xe7\xe3o para o escopo: ",(0,l.kt)("code",null,"gn.settings.write")),(0,l.kt)("div",{className:"col-35"},(0,l.kt)(u.Z,{filename:"/markdown/pix/efi/Configurar_conta.md",mdxType:"Modal"}))),(0,l.kt)("br",null),(0,l.kt)("b",null,"Requisi\xe7\xe3o"),(0,l.kt)(r.Z,{defaultValue:"exemplo",values:[{label:"Exemplo",value:"exemplo"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"exemplo",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "pix": {\n      "receberSemChave": true,\n      "chaves": {\n          "355e4568-e89b-1243-a456-006655440001": {\n              "recebimento": {\n                  "txidObrigatorio": false,\n                  "qrCodeEstatico": {\n                      "recusarTodos": false\n                  },\n                "webhook": {\n                  "notificacao": {\n                      "tarifa": true\n                       }\n                   }\n              }\n          }\n      }\n  }\n}\n')))),(0,l.kt)("br",null),(0,l.kt)("b",null,"Respostas"),(0,l.kt)("br",null),(0,l.kt)("p",null,"  As respostas abaixo representam Sucesso(201) e Falhas/erros do consumo."),(0,l.kt)(r.Z,{defaultValue:"saida",values:[{label:"204",value:"saida"},{label:"400",value:"400"},{label:"500",value:"500"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"saida",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},"Configura\xe7\xf5es criados / modificadas\n"))),(0,l.kt)(s.Z,{value:"400",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n"nome": "erro_aplicacao",\n"mensagem": "Ocorreu um erro ao buscar as configura\xe7\xf5es da conta"\n}\n'))),(0,l.kt)(s.Z,{value:"500",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n"nome": "erro_aplicacao",\n"mensagem": "Ocorreu um erro ao validar a chave"\n}\n')))))),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"listar-configura\xe7\xf5es-da-conta"},"Listar configura\xe7\xf5es da conta"),(0,l.kt)("p",null,"  Endpoint com a finalidade de listar as configura\xe7\xf5es definidas na conta."),(0,l.kt)("div",{className:"get"},(0,l.kt)("details",{className:"col-100"},(0,l.kt)("summary",null,(0,l.kt)("b",null,(0,l.kt)(i.d6,{mdxType:"HighlightGet"},"GET"),"/v2/gn/config")),(0,l.kt)("div",{className:"get-div"},(0,l.kt)("div",{className:"col-65"},"Requer autoriza\xe7\xe3o para o escopo: ",(0,l.kt)("code",null,"gn.settings.read"))),(0,l.kt)("br",null),(0,l.kt)("b",null,"Requisi\xe7\xe3o"),(0,l.kt)("br",null),"A requisi\xe7\xe3o enviada para esse endpoint n\xe3o precisa de um ",(0,l.kt)("em",null,"body"),", apenas os cabe\xe7alhos de autoriza\xe7\xe3o OAuth e o certificado da conta, assim como os endpoints anteriores.",(0,l.kt)("b",null,"Respostas"),(0,l.kt)("br",null),(0,l.kt)("p",null,"  As respostas abaixo representam Sucesso(200) do consumo."),(0,l.kt)(r.Z,{defaultValue:"saida",values:[{label:"200",value:"saida"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"saida",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "pix": {\n      "receberSemChave": true,\n      "chaves": {\n          "355e4568-e89b-1243-a456-006655440001": {\n              "recebimento": {\n                  "txidObrigatorio": true,\n                  "qrCodeEstatico": {\n                      "recusarTodos": false\n                  }\n              }\n          }\n      }\n  }\n}\n')))))),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"requisitar-extrato-concilia\xe7\xe3o"},"Requisitar Extrato Concilia\xe7\xe3o"),(0,l.kt)("p",null,"Endpoint para solicitar extrato de concilia\xe7\xe3o."),(0,l.kt)("div",{className:"post"},(0,l.kt)("details",{className:"col-100"},(0,l.kt)("summary",null,(0,l.kt)("b",null,(0,l.kt)(i.N1,{mdxType:"HighlightPost"},"POST"),"/v2/gn/evp")),(0,l.kt)("div",{className:"post-div"},(0,l.kt)("div",{className:"col-65"},"Requer autoriza\xe7\xe3o para o escopo: ",(0,l.kt)("code",null,"gn.reports.write")),(0,l.kt)("div",{className:"col-35"},(0,l.kt)(u.Z,{filename:"/markdown/pix/efi/Requisitar_extrato.md",mdxType:"Modal"}))),(0,l.kt)("br",null),(0,l.kt)("b",null,"Requisi\xe7\xe3o"),(0,l.kt)("br",null),(0,l.kt)(r.Z,{defaultValue:"exemplo1",values:[{label:"Exemplo 1",value:"exemplo1"},{label:"Exemplo 2",value:"exemplo2"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"exemplo1",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "dataMovimento": "2023-12-15",\n  "tipoRegistros": {\n      "pixRecebido": true,\n      "pixEnviadoChave": true,\n      "pixEnviadoDadosBancarios": true,\n      "estornoPixEnviado": true,\n      "pixDevolucaoEnviada": true,\n      "pixDevolucaoRecebida": true,\n      "tarifaPixEnviado": true,\n      "tarifaPixRecebido": true,\n      "estornoTarifaPixEnviado": true,\n      "saldoDiaAnterior": true,\n      "saldoDia": true,\n      "transferenciaEnviada": true,\n      "transferenciaRecebida": true,\n      "estornoTransferenciaEnviada": true,\n      "tarifaTransferenciaEnviada": true,\n      "estornoTarifaTransferenciaEnviada": true,\n      "estornoTarifaPixRecebido": true\n  }\n}\n'))),(0,l.kt)(s.Z,{value:"exemplo2",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "dataMovimento": "2022-04-24",\n  "tipoRegistros": {\n      "pixRecebido": true\n  }\n}\n')))),(0,l.kt)("br",null),(0,l.kt)("b",null,"Respostas"),(0,l.kt)("br",null),(0,l.kt)("p",null,"  As respostas abaixo representam Sucesso(201) e Falhas/erros do consumo."),(0,l.kt)(r.Z,{defaultValue:"saida",values:[{label:"202",value:"saida"},{label:"400",value:"400"},{label:"400",value:"not-found"},{label:"500",value:"500"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"saida",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "3d0ca315-aff9\u20134fc2-be61\u20133b76b9a2d798",\n  "dataSolicitacao": "\u201c2022-02-14T14:42:51.013Z",\n  "status": "AGUARDANDO_PROCESSAMENTO"\n}\n'))),(0,l.kt)(s.Z,{value:"400",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n"type": "https://api-pix.gerencianet.com.br/v2/gn/ExtratoConciliacaoConsultaInvalida",\n"title": "Consulta inv\xe1lida",\n"status": 400,\n"detail": "Os par\xe2metros de consulta n\xe3o respeitam o schema ou n\xe3o fazem sentido semanticamente",\n"violacoes": [\n {\n "razao": "n\xe3o s\xe3o permitidas propriedades adicionais",\n "propriedade": ".body.parametros"\n },\n {\n "razao": "deve ter a propriedade obrigat\xf3ria dataMovimento",\n "propriedade": ".body"\n }\n]\n}\n'))),(0,l.kt)(s.Z,{value:"not-found",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n"type": "https://api-pix.gerencianet.com.br/v2/gn/ExtratoConciliacaoConsultaInvalida",\n"title": "Consulta inv\xe1lida",\n"status": 400,\n"detail": "A data do extrato de concilia\xe7\xe3o deve ser anterior \xe0 data corrente"\n}\n'))),(0,l.kt)(s.Z,{value:"500",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n"type": "https://api-pix.gerencianet.com.br/v2/gn/ErroInterno",\n"title": "Erro Interno",\n"status": 500,\n"detail": "Ocorreu um erro interno ao processar a requisi\xe7\xe3o"\n}\n')))),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("b",null,"Tipos de status retornado no body:"),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("ul",null,(0,l.kt)("li",null,"AGUARDANDO_PROCESSAMENTO: esse status indica que a solicita\xe7\xe3o de extrato foi recebida com sucesso e est\xe1 na fila aguardando para iniciar o processamento;"),(0,l.kt)("li",null,"EM_PROCESSAMENTO: esse status indica que a gera\xe7\xe3o do arquivo foi iniciada e est\xe1 em etapa de processamento dos dados;"),(0,l.kt)("li",null,"CONCLUIDO: esse status indica que um extrato com os mesmos par\xe2metros foi solicitado anteriormente e um arquivo com o ",(0,l.kt)("code",null,"id")," retornado j\xe1 se encontra pass\xedvel para download.")),(0,l.kt)("br",null),(0,l.kt)("br",null))),(0,l.kt)("div",{className:"admonition_tip"},(0,l.kt)("div",null,(0,l.kt)("img",{src:"/img/lightbulb-on-green.svg"})," ",(0,l.kt)("b",null,"BOA PR\xc1TICA")),"Ap\xf3s realizar a requisi\xe7\xe3o POST, a API tem um tempo m\xe9dio de espera de 30 segundos at\xe9 processar o extrato. Ent\xe3o \xe9 recomendado esperar esse tempo para realizar a requisi\xe7\xe3o GET."),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"solicitar-download-extrato-concilia\xe7\xe3o"},"Solicitar Download Extrato Concilia\xe7\xe3o"),(0,l.kt)("p",null,"Endpoint para solicitar download do extrato de concilia\xe7\xe3o."),(0,l.kt)("div",{className:"get"},(0,l.kt)("details",{className:"col-100"},(0,l.kt)("summary",null,(0,l.kt)("b",null,(0,l.kt)(i.d6,{mdxType:"HighlightGet"},"GET"),"/v2/gn/relatorios/",(0,l.kt)(i.T7,{mdxType:"HighlightVar"},":id"))),(0,l.kt)("div",{className:"get-div"},(0,l.kt)("div",{className:"col-65"},"Requer autoriza\xe7\xe3o para o escopo: ",(0,l.kt)("code",null,"gn.reports.read")),(0,l.kt)("div",{className:"col-35"},(0,l.kt)(u.Z,{filename:"/markdown/pix/efi/Solicitar_download.md",mdxType:"Modal"}))),(0,l.kt)("br",null),(0,l.kt)("div",{className:"admonition_info"},(0,l.kt)("div",null,(0,l.kt)("img",{src:"/img/exclamation-triangle-blue.svg"})," ",(0,l.kt)("b",null,"Aten\xe7\xe3o!")),"Se consumir o endpoint GET e o extrato ainda n\xe3o tiver sido processado, a resposta ser\xe1 sucesso(202) e o retorno ser\xe1 semelhante ao que \xe9 retornado na solicita\xe7\xe3o, informando em qual etapa de processamento est\xe1 a solicita\xe7\xe3o."),(0,l.kt)("br",null),(0,l.kt)("b",null,"Respostas"),(0,l.kt)("br",null),"As respostas abaixo representam Sucesso(200) e Falhas/erros do consumo.",(0,l.kt)(r.Z,{defaultValue:"saida",values:[{label:"200",value:"saida"},{label:"202",value:"202"},{label:"404",value:"404"},{label:"500",value:"500"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"saida",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},"CA;Gerencianet;364;1;517613;Jo\xe3o da Silva;2021-12-17;2021-12-10;Extrato de Concilia\xe7\xe3o API Pix;1.0\nT;0;0;0;0;0;0\n"))),(0,l.kt)(s.Z,{value:"202",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "b02c2b3a-0ab2-4ab5-bc8e-b3ce607e7829",\n  "dataSolicitacao": "2022-06-02T20:08:39.000Z",\n  "status": "AGUARDANDO_PROCESSAMENTO"\n}\n'))),(0,l.kt)(s.Z,{value:"404",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n"type": "https://api-pix.gerencianet.com.br/v2/gn/NaoEncontrado",\n"title": "N\xe3o encontrado",\n"status": 404,\n"detail": "Recurso n\xe3o encontrado ou n\xe3o pertence \xe0 conta autenticada"\n}\n'))),(0,l.kt)(s.Z,{value:"500",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n"type": "https://api-pix.gerencianet.com.br/v2/gn/ErroInterno",\n"title": "Erro Interno",\n"status": 500,\n"detail": "Ocorreu um erro interno na gera\xe7\xe3o do relat\xf3rio. Tente solicitar um novo relat\xf3rio."\n}\n')))))),(0,l.kt)("br",null),(0,l.kt)("div",{className:"admonition_info"},(0,l.kt)("div",null,(0,l.kt)("img",{src:"/img/exclamation-triangle-blue.svg"}),(0,l.kt)("b",null,"Aten\xe7\xe3o!")),"Detalhamento de retorno Para mais informa\xe7\xf5es sobre o documento .CSV que \xe9 retornado e a legenda dos campos, baixe o PDF dispon\xedvel abaixo ou por meio deste ",(0,l.kt)("a",{href:"https://gerencianet-pub-prod-1.s3.amazonaws.com/Extrato_conciliacao_API_Pix_v3.0.pdf",target:"_blank"},"link"),"."),(0,l.kt)("br",null),(0,l.kt)("embed",{src:"/pdfelement/Extrato_conciliacao_API_Pix_v3.0.pdf",type:"application/pdf",width:"100%",height:"972px"})))}x.isMDXComponent=!0}}]);