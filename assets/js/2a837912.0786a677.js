"use strict";(self.webpackChunkwebsite_efi=self.webpackChunkwebsite_efi||[]).push([[7902],{4695:function(e,a,o){o.d(a,{GA:function(){return u},N1:function(){return i},T7:function(){return d},d6:function(){return c},jS:function(){return s},mj:function(){return l}});var t=o(7294),n=o(2949);function r(e){var a=e.children,o=e.backgroundColor,n=e.color;return t.createElement("span",{style:{backgroundColor:o,color:n,borderRadius:"12px",padding:"3px 10px 3px 10px",fontSize:"15px"}},a)}function i(e){return r({children:e.children,backgroundColor:"rgba(87,167,59,0.4)",color:"dark"===(0,n.I)().colorMode?"rgba(162,222,142,1)":"rgba(36,121,7,1)"})}function s(e){return r({children:e.children,backgroundColor:"rgba(243,156,18,0.4)",color:"dark"===(0,n.I)().colorMode?"rgba(252,213,151,1)":"rgba(166,102,0,1)"})}function l(e){return r({children:e.children,backgroundColor:"rgba(179,228,163,0.4)",color:"dark"===(0,n.I)().colorMode?"rgba(162,222,142,1)":"rgba(36,121,7,1)"})}function c(e){return r({children:e.children,backgroundColor:"rgba(11,161,194,0.4)",color:"dark"===(0,n.I)().colorMode?"rgba(119,214,234,1)":"rgba(0,97,119,1)"})}function u(e){return r({children:e.children,backgroundColor:"rgba(253,132,128,0.4)",color:"dark"===(0,n.I)().colorMode?"rgba(255,176,173,1)":"rgba(217,30,24,1)"})}function d(e){return r({children:e.children,color:"rgba(243,112,33,1)"})}},6745:function(e,a,o){o.d(a,{Z:function(){return c}});var t=o(7294),n=o(3253),r=o.n(n),i=o(4223),s=o(8189),l=o(5585);function c(e){var a=e.filename,o=t.useState(!1),n=o[0],c=o[1];var u=(0,t.useState)(""),d=u[0],m=u[1];return(0,t.useEffect)((function(){fetch(a).then((function(e){return e.text()})).then((function(e){return m(e)})).catch((function(e){return console.log(e)}))})),t.createElement("div",null,t.createElement("button",{className:"buttonModify2 button-referencia",onClick:function(){c(!0)}},"Consultar Atributos",t.createElement("svg",{width:"13.5",height:"13.5","aria-hidden":"true",viewBox:"0 0 24 24",class:"iconExternalLink_node_modules-@docusaurus-theme-classic-lib-theme-Icon-ExternalLink-styles-module"},t.createElement("path",{fill:"currentColor",d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"}))),t.createElement(r(),{className:"modal",isOpen:n,onRequestClose:function(){c(!1)},ariaHideApp:!1,contentLabel:"Modal de exemplo"},t.createElement("div",{className:"conteudo-modal"},t.createElement("div",{className:"col-50"},t.createElement(i.D,{children:d,remarkPlugins:[l.Z],rehypePlugins:[s.Z]})))))}},4027:function(e,a,o){o.r(a),o.d(a,{assets:function(){return u},contentTitle:function(){return l},default:function(){return k},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var t=o(7462),n=o(3366),r=(o(7294),o(3905)),i=(o(4866),o(5162),o(4695),o(6745),["components"]),s={id:"Credenciais",title:"Credenciais, Certificado e Autoriza\xe7\xe3o",hide_title:!0,sidebar_label:"Credenciais, Certificado e Autoriza\xe7\xe3o"},l=void 0,c={unversionedId:"APICobrancas/Credenciais",id:"APICobrancas/Credenciais",title:"Credenciais, Certificado e Autoriza\xe7\xe3o",description:"Credenciais, Certificado e Autoriza\xe7\xe3o",source:"@site/docs/APICobrancas/Credenciais.md",sourceDirName:"APICobrancas",slug:"/APICobrancas/Credenciais",permalink:"/docs/APICobrancas/Credenciais",draft:!1,tags:[],version:"current",frontMatter:{id:"Credenciais",title:"Credenciais, Certificado e Autoriza\xe7\xe3o",hide_title:!0,sidebar_label:"Credenciais, Certificado e Autoriza\xe7\xe3o"},sidebar:"someSidebar",previous:{title:"Introdu\xe7\xe3o",permalink:"/docs/APICobrancas/Introducao"},next:{title:"Curso Online de Integra\xe7\xf5es",permalink:"/docs/CursosIntegracao/CursoOnline"}},u={},d=[{value:"Obtendo as credenciais da aplica\xe7\xe3o",id:"obtendo-as-credenciais-da-aplica\xe7\xe3o",level:2},{value:"Rota base",id:"rota-base",level:2},{value:"Autentica\xe7\xe3o com OAuth2",id:"autentica\xe7\xe3o-com-oauth2",level:2},{value:"Configurando o Postman para testes",id:"configurando-o-postman-para-testes",level:2},{value:"1. Criando um Environment",id:"1-criando-um-environment",level:3},{value:"2. Atribuindo o Client_Id e Client_Secret no Postman",id:"2-atribuindo-o-client_id-e-client_secret-no-postman",level:3}],m={toc:d},p="wrapper";function k(e){var a=e.components,o=(0,n.Z)(e,i);return(0,r.kt)(p,(0,t.Z)({},m,o,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{className:"titulo"},"Credenciais, Certificado e Autoriza\xe7\xe3o"),(0,r.kt)("div",{className:"subtitulo"},(0,r.kt)("div",{className:"light"},"Nesta p\xe1gina voc\xea encontra informa\xe7\xf5es sobre credenciais, certificado e autoriza\xe7\xe3o API de Pagamentos Ef\xed."),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Para integrar a API de Cobran\xe7as Ef\xed ao seu sistema ou sua plataforma, \xe9 necess\xe1rio ter uma Conta Digital Ef\xed."),(0,r.kt)("p",null,"N\xe3o tem conta?"),(0,r.kt)("a",{href:"https://app.sejaefi.com.br/",target:"_blank",alt:"QUERO UMA CONSULTORIA T\xc9CNICA"},(0,r.kt)("button",{type:"button",className:"buttonModify2 button-auth"},"Abra sua conta Gr\xe1tis")),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("p",null,"Uma vez com acesso, voc\xea poder\xe1 obter as credenciais e o certificado necess\xe1rios para a comunica\xe7\xe3o com a API de Pagamentos Ef\xed."),(0,r.kt)("p",null,"Veja a seguir como obter as credenciais, certificados e detalhes sobre a autoriza\xe7\xe3o e seguran\xe7a da sua integra\xe7\xe3o com a Ef\xed."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"obtendo-as-credenciais-da-aplica\xe7\xe3o"},"Obtendo as credenciais da aplica\xe7\xe3o"),(0,r.kt)("p",null,"Um integrador pode criar quantas aplica\xe7\xf5es desejar. Para cada aplica\xe7\xe3o s\xe3o gerados 2 pares de chaves ",(0,r.kt)("code",null,"Client_Id")," e ",(0,r.kt)("code",null,"Client_Secret"),", sendo um par para utiliza\xe7\xe3o em ambiente de Produ\xe7\xe3o (",(0,r.kt)("a",{href:"/img/producao.jpg",target:"_blank"},"?"),") e outro para Homologa\xe7\xe3o (",(0,r.kt)("a",{href:"/img/homologacao.jpg",target:"_blank"},"?"),").\nPara utilizar a API de Cobran\xe7as da Ef\xed, \xe9 necess\xe1rio ativar o escopo em sua aplica\xe7\xe3o. Veja o exemplo na imagem abaixo:"),(0,r.kt)("div",{className:"figure"},(0,r.kt)("img",{src:"/img/escopos_cobrancas.jpg",alt:"banner"}),(0,r.kt)("p",null,"Escopo da API de Cobran\xe7as")),(0,r.kt)("h2",{id:"rota-base"},"Rota base"),(0,r.kt)("p",null,"Nesta documenta\xe7\xe3o voc\xea perceber\xe1 refer\xeancias \xe0 Rotas base ou URL's base para ambientes de Produ\xe7\xe3o ou Homologa\xe7\xe3o. Essas rotas s\xe3o, na verdade, a URL na qual a API de Cobran\xe7as Ef\xed se encontra. Assim, quando nos referirmos aos endpoints, fica impl\xedcito que esses trechos de URL tamb\xe9m comp\xf5em a rota final do recurso desejado."),(0,r.kt)("p",null,"Utilize as rotas abaixo para realizar a comunica\xe7\xe3o da sua aplica\xe7\xe3o com os ambientes de produ\xe7\xe3o e homologa\xe7\xe3o oferecidos pela Ef\xed."),(0,r.kt)("div",{className:"table"},(0,r.kt)("table",null,(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Ambiente"),(0,r.kt)("th",null,"Rota base")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Produ\xe7\xe3o"),(0,r.kt)("td",null,(0,r.kt)("code",null,"https://api.gerencianet.com.br"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Homologa\xe7\xe3o"),(0,r.kt)("td",null,(0,r.kt)("code",null,"https://sandbox.gerencianet.com.br")))))),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"autentica\xe7\xe3o-com-oauth2"},"Autentica\xe7\xe3o com OAuth2"),(0,r.kt)("p",null,"O processo de autentica\xe7\xe3o na API de Cobran\xe7as segue o protocolo ",(0,r.kt)("a",{href:"http://oauth.net/2/",target:"_blank"},"OAuth2"),". As requisi\xe7\xf5es s\xe3o autenticadas usando ",(0,r.kt)("a",{href:"https://en.wikipedia.org/wiki/Basic_access_authentication",target:"_blank"},"HTTP Basic Auth"),"."),(0,r.kt)("h2",{id:"configurando-o-postman-para-testes"},"Configurando o Postman para testes"),(0,r.kt)("div",{className:"admonition_info"},(0,r.kt)("div",null,(0,r.kt)("img",{src:"/img/lightbulb-on-blue.svg"})," ",(0,r.kt)("b",null,"Dica")),"O uso do software Postman \xe9 opcional. Os pr\xf3ximos par\xe1grafos explicam como configur\xe1-lo. Caso n\xe3o deseje usar o Postman para testes, voc\xea pode avan\xe7ar para o pr\xf3ximo t\xf3pico: ",(0,r.kt)("a",{href:"#obter-autoriza\xe7\xe3o",target:"_self"}," Obter Autoriza\xe7\xe3o"),"."),(0,r.kt)("br",null),(0,r.kt)("p",null,"Para seguir com a etapa de configura\xe7\xe3o do Postman, voc\xea deve ter:"),(0,r.kt)("ol",null,(0,r.kt)("li",null,"Um par de credenciais ",(0,r.kt)("code",null,"Client_Id")," e ",(0,r.kt)("code",null,"Client_Secret")," de uma aplica\xe7\xe3o cadastrada em sua Conta Ef\xed;"),(0,r.kt)("li",null,"O software Postman instalado em seu computador (",(0,r.kt)("a",{href:"https://www.postman.com/downloads/",target:"_blank"},"Caso n\xe3o tenha, clique aqui para baixar"),");")),(0,r.kt)("h3",{id:"1-criando-um-environment"},"1. Criando um Environment"),(0,r.kt)("p",null,"A cria\xe7\xe3o de um Environment no Postman \xe9 necess\xe1ria para que algumas automa\xe7\xf5es embutidas na collection funcionem. Essas automa\xe7\xf5es foram projetadas para dar mais facilidade aos desenvolvedores durante os testes."),(0,r.kt)("p",null,"Com elas voc\xea precisa solicitar a autoriza\xe7\xe3o apenas uma vez e, ent\xe3o, o ",(0,r.kt)("code",null,"access_token")," fica gravado como uma vari\xe1vel de ambiente (",(0,r.kt)("em",{parentName:"p"},"environment"),") do Postman, dispon\xedvel para utiliza\xe7\xe3o nas requisi\xe7\xf5es subsequentes."),(0,r.kt)("p",null,"Para criar um Environment siga os passos abaixo."),(0,r.kt)("ol",null,(0,r.kt)("li",null,"Acione o atalho ",(0,r.kt)("code",null,"Ctrl+N"),' e selecione "Environment";'),(0,r.kt)("li",null,"Atribua um nome preferencialmente especificando se esse Environment ser\xe1 apontado para o ambiente de Produ\xe7\xe3o ou Homologa\xe7\xe3o;"),(0,r.kt)("li",null,"Crie a vari\xe1vel ",(0,r.kt)("code",null,"efi-cob-api")," e como valor inicial (",(0,r.kt)("em",null,"Initial value"),") insira a URL da API de Pagamentos de Produ\xe7\xe3o ou Homologa\xe7\xe3o;"),(0,r.kt)("li",null,"Salve o seu Environment;"),(0,r.kt)("li",null,"Selecione o Environment desejado, assim o Postman entender\xe1 a vari\xe1vel criada.")),(0,r.kt)("br",null),(0,r.kt)("p",null,"As imagens abaixo ilustram os passos acima. Como exemplo, foi criado um Environment apontado para o ambiente de Produ\xe7\xe3o da API de Pagamentos Ef\xed."),(0,r.kt)("div",{className:"figure"},(0,r.kt)("img",{src:"/img/environment_cob.png",alt:"banner"}),(0,r.kt)("p",null,"Criando um novo environment")),(0,r.kt)("br",null),(0,r.kt)("div",{className:"figure"},(0,r.kt)("img",{src:"/img/configuracao_environment_cob.png",alt:"banner"}),(0,r.kt)("p",null,"Configura\xe7\xf5es do environment")),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"2-atribuindo-o-client_id-e-client_secret-no-postman"},"2. Atribuindo o Client_Id e Client_Secret no Postman"),(0,r.kt)("p",null,"Para finalizar a configura\xe7\xe3o do seu Postman \xe9 necess\xe1rio configurar as credenciais de uma aplica\xe7\xe3o da sua conta Ef\xed. Essas credenciais s\xe3o usadas para o Basic Auth e obten\xe7\xe3o do ",(0,r.kt)("code",null,"access_token")," junto ao OAuth."),(0,r.kt)("p",null,"Siga os passos abaixo para incluir as credenciais e realizar o seu primeiro teste na API de Pagamentos."),(0,r.kt)("ol",null,(0,r.kt)("li",null,"Na collection importada, navegue at\xe9 a rota ",(0,r.kt)("code",null,"/oauth/token")," e clique duas vezes para abrir;"),(0,r.kt)("li",null,'Acesse o menu "Authorization" e certifique-se de que o "Type" (tipo de autoriza\xe7\xe3o) esteja selecionado como "Basic Auth";'),(0,r.kt)("li",null,'Nos campos "username" e "password" preencha com as credenciais da sua aplica\xe7\xe3o, Client_Id e Client_Secret, respectivamente;'),(0,r.kt)("li",null,'Para testar, clique no bot\xe3o "Send" para submeter a requisi\xe7\xe3o')),(0,r.kt)("br",null),(0,r.kt)("p",null,"A imagem abaixo ilustra os passos acima. Se tudo foi seguido corretamente, voc\xea deve obter uma resposta em formato JSON, contendo o ",(0,r.kt)("code",null,"access_token"),", ",(0,r.kt)("code",null,"token_type"),", ",(0,r.kt)("code",null,"expires_in")," e ",(0,r.kt)("code",null,"scope")," (como na imagem abaixo)."),(0,r.kt)("div",{className:"figure"},(0,r.kt)("img",{src:"/img/auth-cob.png",alt:"banner"}),(0,r.kt)("p",null,"Uso das credenciais de uma aplica\xe7\xe3o para autoriza\xe7\xe3o de requisi\xe7\xf5es")),(0,r.kt)("br",null)))}k.isMDXComponent=!0}}]);