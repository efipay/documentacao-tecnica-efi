"use strict";(self.webpackChunkwebsite_efi=self.webpackChunkwebsite_efi||[]).push([[4523],{4695:function(e,a,n){n.d(a,{GA:function(){return u},N1:function(){return r},T7:function(){return d},d6:function(){return l},jS:function(){return s},mj:function(){return c}});var o=n(7294),t=n(2949);function i(e){var a=e.children,n=e.backgroundColor,t=e.color;return o.createElement("span",{style:{backgroundColor:n,color:t,borderRadius:"12px",padding:"3px 10px 3px 10px",fontSize:"15px"}},a)}function r(e){return i({children:e.children,backgroundColor:"rgba(87,167,59,0.4)",color:"dark"===(0,t.I)().colorMode?"rgba(162,222,142,1)":"rgba(36,121,7,1)"})}function s(e){return i({children:e.children,backgroundColor:"rgba(243,156,18,0.4)",color:"dark"===(0,t.I)().colorMode?"rgba(252,213,151,1)":"rgba(166,102,0,1)"})}function c(e){return i({children:e.children,backgroundColor:"rgba(179,228,163,0.4)",color:"dark"===(0,t.I)().colorMode?"rgba(162,222,142,1)":"rgba(36,121,7,1)"})}function l(e){return i({children:e.children,backgroundColor:"rgba(11,161,194,0.4)",color:"dark"===(0,t.I)().colorMode?"rgba(119,214,234,1)":"rgba(0,97,119,1)"})}function u(e){return i({children:e.children,backgroundColor:"rgba(253,132,128,0.4)",color:"dark"===(0,t.I)().colorMode?"rgba(255,176,173,1)":"rgba(217,30,24,1)"})}function d(e){return i({children:e.children,color:"rgba(243,112,33,1)"})}},6745:function(e,a,n){n.d(a,{Z:function(){return l}});var o=n(7294),t=n(3253),i=n.n(t),r=n(4223),s=n(8189),c=n(5585);function l(e){var a=e.filename,n=o.useState(!1),t=n[0],l=n[1];var u=(0,o.useState)(""),d=u[0],p=u[1];return(0,o.useEffect)((function(){fetch(a).then((function(e){return e.text()})).then((function(e){return p(e)})).catch((function(e){return console.log(e)}))})),o.createElement("div",null,o.createElement("button",{className:"buttonModify2 button-referencia",onClick:function(){l(!0)}},"Consultar Atributos",o.createElement("svg",{width:"13.5",height:"13.5","aria-hidden":"true",viewBox:"0 0 24 24",class:"iconExternalLink_node_modules-@docusaurus-theme-classic-lib-theme-Icon-ExternalLink-styles-module"},o.createElement("path",{fill:"currentColor",d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"}))),o.createElement(i(),{className:"modal",isOpen:t,onRequestClose:function(){l(!1)},ariaHideApp:!1,contentLabel:"Modal de exemplo"},o.createElement("div",{className:"conteudo-modal"},o.createElement("div",{className:"col-50"},o.createElement(r.D,{children:d,remarkPlugins:[c.Z],rehypePlugins:[s.Z]})))))}},9826:function(e,a,n){n.r(a),n.d(a,{assets:function(){return m},contentTitle:function(){return d},default:function(){return b},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return f}});var o=n(7462),t=n(3366),i=(n(7294),n(3905)),r=n(4866),s=n(5162),c=n(4695),l=(n(6745),["components"]),u={id:"Credenciais",title:"Credenciais",hide_title:!0,sidebar_label:"Credenciais, Certificado e Autoriza\xe7\xe3o"},d=void 0,p={unversionedId:"APIOpenFinance/Credenciais",id:"APIOpenFinance/Credenciais",title:"Credenciais",description:"Credenciais, Certificado e Autoriza\xe7\xe3o",source:"@site/docs/APIOpenFinance/Credenciais.md",sourceDirName:"APIOpenFinance",slug:"/APIOpenFinance/Credenciais",permalink:"/doc/docs/APIOpenFinance/Credenciais",draft:!1,tags:[],version:"current",frontMatter:{id:"Credenciais",title:"Credenciais",hide_title:!0,sidebar_label:"Credenciais, Certificado e Autoriza\xe7\xe3o"},sidebar:"someSidebar",previous:{title:"Introdu\xe7\xe3o",permalink:"/doc/docs/APIOpenFinance/Introducao"},next:{title:"Configura\xe7\xf5es da aplica\xe7\xe3o",permalink:"/doc/docs/APIOpenFinance/Config_aplicacao"}},m={},f=[{value:"Obtendo as credenciais da aplica\xe7\xe3o",id:"obtendo-as-credenciais-da-aplica\xe7\xe3o",level:2},{value:"Entendendo os escopos de aplica\xe7\xe3o",id:"entendendo-os-escopos-de-aplica\xe7\xe3o",level:3},{value:"Criar uma aplica\xe7\xe3o ou configurar uma j\xe1 existente",id:"criar-uma-aplica\xe7\xe3o-ou-configurar-uma-j\xe1-existente",level:3},{value:"Gerando e convertendo um certificado P12",id:"gerando-e-convertendo-um-certificado-p12",level:2},{value:"Rotas base",id:"rotas-base",level:2},{value:"Autentica\xe7\xe3o com OAuth2",id:"autentica\xe7\xe3o-com-oauth2",level:2},{value:"Configurando o Postman para testes",id:"configurando-o-postman-para-testes",level:2},{value:"1. Criando um Environment",id:"1-criando-um-environment",level:3},{value:"2. Configurando o certificado no Postman",id:"2-configurando-o-certificado-no-postman",level:3},{value:"3. Atribuindo o Client_Id e Client_Secret no Postman",id:"3-atribuindo-o-client_id-e-client_secret-no-postman",level:3},{value:"Obter autoriza\xe7\xe3o",id:"obter-autoriza\xe7\xe3o",level:2},{value:"Exemplos de autoriza\xe7\xe3o utilizando o certificado .P12",id:"exemplos-de-autoriza\xe7\xe3o-utilizando-o-certificado-p12",level:3},{value:"Exemplo de resposta da autoriza\xe7\xe3o",id:"exemplo-de-resposta-da-autoriza\xe7\xe3o",level:3}],k={toc:f},g="wrapper";function b(e){var a=e.components,n=(0,t.Z)(e,l);return(0,i.kt)(g,(0,o.Z)({},k,n,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{className:"titulo"},"Credenciais, Certificado e Autoriza\xe7\xe3o"),(0,i.kt)("div",{className:"subtitulo"},(0,i.kt)("div",{className:"light"},"Informa\xe7\xf5es sobre credenciais, certificado e autoriza\xe7\xe3o da API Open Finance"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Para integrar a API open Finance ao seu sistema ou sua plataforma, \xe9 necess\xe1rio ter uma Conta Digital Ef\xed."),(0,i.kt)("p",null,"N\xe3o tem conta?"),(0,i.kt)("a",{href:"https://app.sejaefi.com.br/",target:"_blank",alt:"QUERO UMA CONSULTORIA T\xc9CNICA"},(0,i.kt)("button",{type:"button",className:"buttonModify2 button-auth"},"Abra sua conta Gr\xe1tis")),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("p",null,"Uma vez com acesso, voc\xea poder\xe1 obter as credenciais e o certificado necess\xe1rios para a comunica\xe7\xe3o com a API Open Finance."),(0,i.kt)("p",null,"Veja a seguir como obter as credenciais, certificados e detalhes sobre a autoriza\xe7\xe3o e seguran\xe7a da sua integra\xe7\xe3o com a Ef\xed."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"obtendo-as-credenciais-da-aplica\xe7\xe3o"},"Obtendo as credenciais da aplica\xe7\xe3o"),(0,i.kt)("p",null,"Um integrador pode criar quantas aplica\xe7\xf5es desejar. Para cada aplica\xe7\xe3o s\xe3o gerados 2 pares de chaves ",(0,i.kt)("code",null,"Client_Id")," e ",(0,i.kt)("code",null,"Client_Secret"),", sendo um par para utiliza\xe7\xe3o em ambiente de Produ\xe7\xe3o (",(0,i.kt)("a",{href:"/img/producao.jpg",target:"_blank"},"?"),") e outro para Homologa\xe7\xe3o (",(0,i.kt)("a",{href:"/img/homologacao.jpg",target:"_blank"},"?"),")."),(0,i.kt)("p",null,"Para utilizar a API Open Finance da Ef\xed \xe9 necess\xe1rio ativar os escopos necess\xe1rios em sua aplica\xe7\xe3o. "),(0,i.kt)("h3",{id:"entendendo-os-escopos-de-aplica\xe7\xe3o"},"Entendendo os escopos de aplica\xe7\xe3o"),(0,i.kt)("p",null,"Ao criar ou editar uma aplica\xe7\xe3o em sua Conta Ef\xed, voc\xea precisar\xe1 configurar os escopos que a aplica\xe7\xe3o ter\xe1 acesso. A escolha desses escopos define quais a\xe7\xf5es uma aplica\xe7\xe3o estar\xe1 autorizada a realizar via API."),(0,i.kt)("p",null,"Os escopos dispon\xedveis na API Open Finance est\xe3o listados abaixo com suas respectivas descri\xe7\xf5es de permiss\xf5es:"),(0,i.kt)("ul",null,(0,i.kt)("li",null,(0,i.kt)("b",null,(0,i.kt)("code",null,"gn.opb.participants.read"))," - consulta de participantes do Open Finance;"),(0,i.kt)("li",null,(0,i.kt)("b",null,(0,i.kt)("code",null,"gn.opb.payment.pix.send"))," - iniciar Pix via Open Finance;"),(0,i.kt)("li",null,(0,i.kt)("b",null,(0,i.kt)("code",null,"gn.opb.payment.pix.read"))," - listar as informa\xe7\xf5es dos pagamentos que foram efetuados;"),(0,i.kt)("li",null,(0,i.kt)("b",null,(0,i.kt)("code",null,"gn.opb.payment.pix.refund"))," - realizar a devolu\xe7\xe3o de um pagamento;"),(0,i.kt)("li",null,(0,i.kt)("b",null,(0,i.kt)("code",null,"gn.opb.config.write"))," - escrever na configura\xe7\xe3o de URLs da conta;"),(0,i.kt)("li",null,(0,i.kt)("b",null,(0,i.kt)("code",null,"gn.opb.config.read"))," - ler a configura\xe7\xe3o de URLs da conta;")),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"criar-uma-aplica\xe7\xe3o-ou-configurar-uma-j\xe1-existente"},"Criar uma aplica\xe7\xe3o ou configurar uma j\xe1 existente"),(0,i.kt)("p",null,"Veja como criar uma aplica\xe7\xe3o ou aproveitar uma aplica\xe7\xe3o j\xe1 existente para integrar com a API Pix Ef\xed."),(0,i.kt)(r.Z,{className:"tab",defaultValue:"Criar_uma_aplicacao",values:[{label:"Criar uma aplica\xe7\xe3o",value:"Criar_uma_aplicacao"},{label:"Aproveitar uma aplica\xe7\xe3o existente",value:"Aproveitar_uma_aplicacao_existente"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"Criar_uma_aplicacao",mdxType:"TabItem"},(0,i.kt)("p",null," Para ",(0,i.kt)("strong",{parentName:"p"},"criar uma aplica\xe7\xe3o para utiliza\xe7\xe3o da API Pix")," siga os passos abaixo:"),(0,i.kt)("ol",null,(0,i.kt)("li",null,'Acesse sua conta e clique no item "API" na parte inferior do menu \xe0 esquerda da conta Ef\xed;'),(0,i.kt)("li",null,'Clique em "Criar aplica\xe7\xe3o"'),(0,i.kt)("li",null,"Habilite a API Pix e escolha os escopos que deseja liberar em ambiente de Produ\xe7\xe3o e Homologa\xe7\xe3o (voc\xea pode edit\xe1-los no futuro);"),(0,i.kt)("li",null,'Com os escopos selecionados, clique em "Continuar".')),(0,i.kt)("div",{className:"figure"},(0,i.kt)("img",{src:"/img/criacao_aplicacao_of.png",alt:"banner"}),(0,i.kt)("p",null,"Ilustra\xe7\xe3o dos passos para a cria\xe7\xe3o de uma nova aplica\xe7\xe3o integrada \xe0 API Open Finance"))),(0,i.kt)(s.Z,{value:"Aproveitar_uma_aplicacao_existente",mdxType:"TabItem"},(0,i.kt)("p",null,"Para ",(0,i.kt)("strong",{parentName:"p"},"aproveitar uma aplica\xe7\xe3o j\xe1 cadastrada")," em sua conta e us\xe1-la para a integra\xe7\xe3o com Pix, siga os passos abaixo:"),(0,i.kt)("ol",null,(0,i.kt)("li",null,'Acesse sua conta e clique no item "API" na parte inferior do menu \xe0 esquerda da conta Ef\xed;'),(0,i.kt)("li",null,'Clique em "Aplica\xe7\xf5es". Em seguida, escolha a aplica\xe7\xe3o que ser\xe1 editada, clique nos tr\xeas pontinhos e depois em configura\xe7\xf5es;'),(0,i.kt)("li",null,"Habilite a API Pix e escolha os escopos que deseja liberar em ambiente de Produ\xe7\xe3o e Homologa\xe7\xe3o (voc\xea pode edit\xe1-los sempre que quiser);"),(0,i.kt)("li",null,'Com os escopos selecionados, clique em "Continuar".'),(0,i.kt)("br",null),(0,i.kt)("div",{className:"figure"},(0,i.kt)("img",{src:"/img/edicao_aplicacao_pix.png",alt:"banner"}),(0,i.kt)("p",null,"Passos at\xe9 a edi\xe7\xe3o de uma aplica\xe7\xe3o")),(0,i.kt)("br",null),(0,i.kt)("div",{className:"figure"},(0,i.kt)("img",{src:"/img/edicoes_para_aplicacao_pix.png",alt:"banner"}),(0,i.kt)("p",null,"Edi\xe7\xf5es necess\xe1rias para o acesso de uma aplica\xe7\xe3o \xe0 API Pix"))))),(0,i.kt)("h2",{id:"gerando-e-convertendo-um-certificado-p12"},"Gerando e convertendo um certificado P12"),(0,i.kt)("p",null,"Para gerar um certificado e convert\xea-lo, caso seja necess\xe1rio, voc\xea pode acessar o ",(0,i.kt)("a",{href:"https://dev.gerencianet.com.br/docs/api-pix-autenticacao-e-seguranca#gerando-um-certificado-p12",target:"_blank"},"link"),"."),(0,i.kt)("h2",{id:"rotas-base"},"Rotas base"),(0,i.kt)("p",null,"Rotas base ou URL's base para ambientes, utilize as rotas abaixo para realizar a comunica\xe7\xe3o da sua aplica\xe7\xe3o com o ambiente de produ\xe7\xe3o ou homologa\xe7\xe3o oferecidos pela Ef\xed."),(0,i.kt)("div",{className:"table"},(0,i.kt)("table",null,(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Ambiente"),(0,i.kt)("th",null,"Rota base")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Produ\xe7\xe3o"),(0,i.kt)("td",null,(0,i.kt)("code",null,"https://apis.gerencianet.com.br"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Homologa\xe7\xe3o"),(0,i.kt)("td",null,(0,i.kt)("code",null,"https://apis-h.gerencianet.com.br")))))),(0,i.kt)("h2",{id:"autentica\xe7\xe3o-com-oauth2"},"Autentica\xe7\xe3o com OAuth2"),(0,i.kt)("p",null,"O mecanismo de autoriza\xe7\xe3o das requisi\xe7\xf5es feitas \xe0 API Open Finance Ef\xed \xe9 compat\xedvel com ",(0,i.kt)("a",{href:"http://oauth.net/2/",target:"_blank"},"o protocolo OAuth 2.0"),". O objetivo do OAuth2 \xe9 a obten\xe7\xe3o de um token de acesso (",(0,i.kt)("code",null,"access_token"),"). Esse ",(0,i.kt)("code",null,"access_token")," \xe9 usado para autorizar todas as chamadas feitas \xe0 API, verificando se uma determinada aplica\xe7\xe3o tem permiss\xf5es para consumir o endpoint requisitado."),(0,i.kt)("p",null,"A autentica\xe7\xe3o das requisi\xe7\xf5es \xe9 feita com HTTP ",(0,i.kt)("a",{href:"https://en.wikipedia.org/wiki/Basic_access_authentication",target:"_blank"},"Basic Auth")," a partir do ",(0,i.kt)("code",null,"Client_Id")," e ",(0,i.kt)("code",null,"Client_Secret")," da aplica\xe7\xe3o criada em sua conta da Ef\xed."),(0,i.kt)("p",null,"Atrav\xe9s dessa autentica\xe7\xe3o o OAuth poder\xe1 responder quais as autoriza\xe7\xf5es que a aplica\xe7\xe3o tem e, consequentemente, autorizar ou negar as requisi\xe7\xf5es de acordo com essa informa\xe7\xe3o."),(0,i.kt)("div",{className:"admonition_caution"},(0,i.kt)("div",null,(0,i.kt)("img",{src:"/img/lightbulb-on-orange.svg"})," ",(0,i.kt)("b",null,"Aten\xe7\xe3o!")),"O Certificado P12/PEM gerado nos passos anteriores \xe9 ",(0,i.kt)("strong",null,"obrigat\xf3rio em todas as requisi\xe7\xf5es")," feitas \xe0 API Open Finance, inclusive na requisi\xe7\xe3o de autoriza\xe7\xe3o."),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"configurando-o-postman-para-testes"},"Configurando o Postman para testes"),(0,i.kt)("p",null,"Para seguir com a etapa de configura\xe7\xe3o do Postman, voc\xea deve ter:"),(0,i.kt)("ol",null,(0,i.kt)("li",null,"Um par de credenciais ",(0,i.kt)("code",null,"Client_Id")," e ",(0,i.kt)("code",null,"Client_Secret")," de uma aplica\xe7\xe3o cadastrada em sua Conta Ef\xed;"),(0,i.kt)("li",null,"Um certificado P12/PEM gerado em sua conta Ef\xed;"),(0,i.kt)("li",null,"O software Postman instalado em seu computador (Caso n\xe3o tenha, ",(0,i.kt)("a",{href:"https://www.postman.com/downloads/",target:"_blank"},"clique aqui para baixar"),");")),(0,i.kt)("h3",{id:"1-criando-um-environment"},"1. Criando um Environment"),(0,i.kt)("p",null,"A cria\xe7\xe3o de um ",(0,i.kt)("em",{parentName:"p"},"Environment")," no Postman \xe9 necess\xe1ria para que algumas automa\xe7\xf5es embutidas na collection funcionem. Essas automa\xe7\xf5es foram projetadas para dar mais facilidade aos desenvolvedores durante os testes."),(0,i.kt)("p",null,"Com elas voc\xea precisa solicitar a autoriza\xe7\xe3o apenas uma vez e, ent\xe3o, o ",(0,i.kt)("code",null,"access_token")," fica gravado como uma vari\xe1vel de ambiente (",(0,i.kt)("em",{parentName:"p"},"environment"),") do Postman, dispon\xedvel para utiliza\xe7\xe3o nas requisi\xe7\xf5es subsequentes."),(0,i.kt)("p",null,"Para criar um Environment siga os passos abaixo."),(0,i.kt)("ol",null,(0,i.kt)("li",null,"Acione o atalho ",(0,i.kt)("code",null,"Ctrl+N"),' e selecione "Environment";'),(0,i.kt)("li",null,"Atribua um nome preferencialmente especificando se esse Environment ser\xe1 apontado para o ambiente de Produ\xe7\xe3o ou Homologa\xe7\xe3o;"),(0,i.kt)("li",null,"Crie a vari\xe1vel efi-of-api e como valor inicial (Initial value) insira a URL da API Open Finance de Produ\xe7\xe3o ou Homologa\xe7\xe3o;"),(0,i.kt)("li",null,"Salve o seu Environment;"),(0,i.kt)("li",null,"Selecione o Environment desejado, assim o Postman entender\xe1 a vari\xe1vel criada.")),(0,i.kt)("p",null,"As imagens abaixo ilustram os passos acima. Como exemplo, foi criado um Environment apontado para o ambiente de Produ\xe7\xe3o da API Open Finance da Ef\xed."),(0,i.kt)("div",{className:"admonition_info"},(0,i.kt)("div",null,(0,i.kt)("img",{src:"/img/lightbulb-on-blue.svg"})," ",(0,i.kt)("b",null,"Dica")),"Repita os passos acima para dessa vez ter um Environment apontado para o ambiente de Produ\xe7\xe3o. Assim voc\xea poder\xe1 simplesmente alternar entre os Environments e suas requisi\xe7\xf5es j\xe1 estar\xe3o apontadas corretamente."),(0,i.kt)("br",null),(0,i.kt)("div",{className:"figure"},(0,i.kt)("img",{src:"/img/1-config-env-postman.png",alt:"banner"}),(0,i.kt)("p",null,"Criando um novo environment")),(0,i.kt)("div",{className:"figure"},(0,i.kt)("img",{src:"/img/2-config-env-postman.png",alt:"banner"}),(0,i.kt)("p",null,"Configura\xe7\xf5es do environment")),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"2-configurando-o-certificado-no-postman"},"2. Configurando o certificado no Postman"),(0,i.kt)("p",null,"Todas as requisi\xe7\xf5es feitas \xe0 API Open Finance Ef\xed precisam do certificado gerado em sua conta Ef\xed. Portanto, para facilitar seus testes utilizando o Postman, siga os passos abaixo para configurar o uso do certificado durante as requisi\xe7\xf5es de maneira autom\xe1tica:"),(0,i.kt)("ol",null,(0,i.kt)("li",null,"Clique no \xedcone de engrenagem no canto superior direito do Postman;"),(0,i.kt)("li",null,'Depois, clique em "Settings" para abrir as configura\xe7\xf5es;'),(0,i.kt)("li",null,'Na aba superior, clique em "Certificates";'),(0,i.kt)("li",null,'Em seguida, clique em "Add Certificate";'),(0,i.kt)("li",null,'Na janela de configura\xe7\xe3o do novo certificado, preencha o campo "Host" com a Rota base do ambiente ao qual o certificado pertence (Produ\xe7\xe3o ou Homologa\xe7\xe3o);'),(0,i.kt)("li",null,'Utilize o campo "PFX File" para informar ao Postman onde o arquivo do seu certificado P12/PEM se encontra;'),(0,i.kt)("li",null,'Finalize clicando em "Add" para salvar suas configura\xe7\xf5es.')),(0,i.kt)("p",null,"Seguindo esses passos, o Postman usar\xe1 o certificado para quaisquer requisi\xe7\xf5es feitas ao Host do ambiente configurado."),(0,i.kt)("div",{className:"admonition_info"},(0,i.kt)("div",null,(0,i.kt)("img",{src:"/img/lightbulb-on-blue.svg"})," ",(0,i.kt)("b",null,"Dica")),"\xc9 ideal que voc\xea configure o certificado do ambiente de homologa\xe7\xe3o, mas voc\xea tamb\xe9m pode repetir os passos acima para configurar o Postman com um certificado para o ambiente de Produ\xe7\xe3o."),(0,i.kt)("br",null),(0,i.kt)("p",null,"As imagens abaixo ilustram o passo a passo da configura\xe7\xe3o do certificado."),(0,i.kt)("div",{className:"figure"},(0,i.kt)("img",{src:"/img/1-add-cert-postman.png",alt:"banner"}),(0,i.kt)("p",null,"Acessando as configura\xe7\xf5es do Postman")),(0,i.kt)("div",{className:"figure"},(0,i.kt)("img",{src:"/img/2-add-cert-postman.png",alt:"banner"}),(0,i.kt)("p",null,"Adicionando um novo certificado no Postman")),(0,i.kt)("div",{className:"figure"},(0,i.kt)("img",{src:"/img/3-add-cert-postman.png",alt:"banner"}),(0,i.kt)("p",null,"Configura\xe7\xf5es do certificado")),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"3-atribuindo-o-client_id-e-client_secret-no-postman"},"3. Atribuindo o Client_Id e Client_Secret no Postman"),(0,i.kt)("p",null,"Para finalizar a configura\xe7\xe3o do seu Postman \xe9 necess\xe1rio configurar as credenciais de uma aplica\xe7\xe3o da sua conta Ef\xed. Essas credenciais s\xe3o usadas para o Basic Auth e obten\xe7\xe3o do ",(0,i.kt)("code",null,"access_token")," junto ao OAuth."),(0,i.kt)("p",null,"Siga os passos abaixo para incluir as credenciais e realizar o seu primeiro teste na API Open Finance Ef\xed."),(0,i.kt)("ol",null,(0,i.kt)("li",null,"Na collection importada, navegue at\xe9 a rota ",(0,i.kt)("code",null,"/oauth/token")," e clique duas vezes para abrir;"),(0,i.kt)("li",null,'Acesse o menu "Authorization" e certifique-se de que o "Type" (tipo de autoriza\xe7\xe3o) esteja selecionado como "Basic Auth";'),(0,i.kt)("li",null,'Nos campos "username" e "password" preencha com as credenciais da sua aplica\xe7\xe3o, Client_Id e Client_Secret, respectivamente;'),(0,i.kt)("li",null,'Para testar, clique no bot\xe3o "Send" para submeter a requisi\xe7\xe3o')),(0,i.kt)("p",null,"A imagem abaixo ilustra os passos acima. Se tudo foi seguido corretamente, voc\xea deve obter uma resposta em formato JSON, contendo o ",(0,i.kt)("code",null,"access_token"),", ",(0,i.kt)("code",null,"token_type"),", ",(0,i.kt)("code",null,"expires_in")," e ",(0,i.kt)("code",null,"scope")," (como na imagem abaixo)."),(0,i.kt)("div",{className:"figure"},(0,i.kt)("img",{src:"/img/request-auth-postman.png",alt:"banner"}),(0,i.kt)("p",null,"Uso das credenciais de uma aplica\xe7\xe3o para autoriza\xe7\xe3o de requisi\xe7\xf5es")),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"obter-autoriza\xe7\xe3o"},"Obter autoriza\xe7\xe3o"),(0,i.kt)("div",{className:"auth"},(0,i.kt)("b",null,(0,i.kt)(c.N1,{mdxType:"HighlightPost"},"POST"),"/oauth/token")),(0,i.kt)("br",null),(0,i.kt)("p",null,"  Este endpoint \xe9 utilizado para autorizar as credenciais de uma aplica\xe7\xe3o e obter os escopos que a aplica\xe7\xe3o possui para acessar os outros endpoints da API. \xc9 necess\xe1rio que o certificado P12/PEM esteja presente na requisi\xe7\xe3o de autoriza\xe7\xe3o a fim de que o handshake com o servidor da API seja permitido."),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"exemplos-de-autoriza\xe7\xe3o-utilizando-o-certificado-p12"},"Exemplos de autoriza\xe7\xe3o utilizando o certificado .P12"),(0,i.kt)("p",null,"Para a utiliza\xe7\xe3o da API Open Finance Ef\xed \xe9 necess\xe1rio que o cliente e o servidor se comuniquem em uma conex\xe3o verificada um com o outro. A verifica\xe7\xe3o \xe9 feita pelo certificado bidirecional (.PEM ou .P12), isto \xe9, o servidor e o cliente implementaram um certificado de chave privada e um certificado de chave p\xfablica que permite que um possa assegurar-se da identidade do outro."),(0,i.kt)("p",null,"Por isso para fazer qualquer requisi\xe7\xe3o HTTP \xe0 API Open Finance, incluindo a requisi\xe7\xe3o de autoriza\xe7\xe3o junto ao OAuth2, \xe9 necess\xe1rio que o certificado .P12, ou .PEM, esteja presente nos cabe\xe7alhos da requisi\xe7\xe3o."),(0,i.kt)("p",null,"Abaixo, trazemos exemplos de como consumir a autoriza\xe7\xe3o da API Pagamentos Ef\xed, incorporando esse certificado na requisi\xe7\xe3o."),(0,i.kt)(r.Z,{defaultValue:"PHP",values:[{label:"PHP",value:"PHP"},{label:"Node",value:"Node"},{label:"Python",value:"Python"},{label:".Net",value:".Net"},{label:"Ruby",value:"Ruby"},{label:"Java",value:"Java"},{label:"Go",value:"Go"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"PHP",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'//Desenvolvido pela Consultoria T\xe9cnica da Ef\xed\n<?php //Desenvolvido pela Consultoria T\xe9cnica da Ef\xed\n\n$config = [\n  "certificado" => "./certificado.pem",\n  "client_id" => "YOUR-CLIENT-ID",\n  "client_secret" => "YOUR-CLIENT-SECRET"\n];\n$autorizacao =  base64_encode($config["client_id"] . ":" . $config["client_secret"]);\n\n$curl = curl_init();\n\ncurl_setopt_array($curl, array(\n    CURLOPT_URL => "https://apis.gerencianet.com.br/oauth/token", // Rota base, homologa\xe7\xe3o ou produ\xe7\xe3o\n    CURLOPT_RETURNTRANSFER => true,\n    CURLOPT_ENCODING => "",\n    CURLOPT_MAXREDIRS => 10,\n    CURLOPT_TIMEOUT => 0,\n    CURLOPT_FOLLOWLOCATION => true,\n    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\n    CURLOPT_CUSTOMREQUEST => "POST",\n    CURLOPT_POSTFIELDS => \'{"grant_type": "client_credentials"}\',\n    CURLOPT_SSLCERT => $config["certificado"], // Caminho do certificado\n    CURLOPT_SSLCERTPASSWD => "",\n    CURLOPT_HTTPHEADER => array(\n        "Authorization: Basic $autorizacao",\n        "Content-Type: application/json"\n    ),\n));\n\n$response = curl_exec($curl);\n\ncurl_close($curl);\n\necho "<pre>";\necho $response;\necho "</pre>";\n'))),(0,i.kt)(s.Z,{value:"Node",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'//Desenvolvido pela Consultoria T\xe9cnica da Ef\xed\n\n"use strict";\nconst https = require("https");\nvar axios = require("axios");\nvar fs = require("fs");\n\n//Insira o caminho de seu certificado .p12 dentro de seu projeto\nvar certificado = fs.readFileSync("./certificado.p12");\n\n//Insira os valores de suas credenciais em desenvolvimento do pix\nvar credenciais = {\nclient_id: "YOUR-CLIENT-ID",\nclient_secret: "YOUR-CLIENT-SECRET",\n};\n\nvar data = JSON.stringify({ grant_type: "client_credentials" });\nvar data_credentials = credenciais.client_id + ":" + credenciais.client_secret;\n\n// Codificando as credenciais em base64\nvar auth = Buffer.from(data_credentials).toString("base64");\n\nconst agent = new https.Agent({\npfx: certificado,\npassphrase: "",\n});\n//Consumo em desenvolvimento da rota post oauth/token\nvar config = {\nmethod: "POST",\nurl: "https://apis.gerencianet.com.br/oauth/token",\nheaders: {\n  Authorization: "Basic " + auth,\n  "Content-Type": "application/json",\n},\nhttpsAgent: agent,\ndata: data,\n};\n\naxios(config)\n.then(function (response) {\n  console.log(JSON.stringify(response.data));\n})\n.catch(function (error) {\n  console.log(error);\n});\n'))),(0,i.kt)(s.Z,{value:"Python",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'#Desenvolvido pela Consultoria T\xe9cnica da Ef\xed\n\nimport requests\nimport base64\n\ncredentials = {\n  "client_id": "YOUR-CLIENT-ID",\n  "client_secret": "YOUR-CLIENT-SECRET",\n}\n\ncertificado = \'./certificado.pem\'  # A vari\xe1vel certificado \xe9 o diret\xf3rio em que seu certificado em formato .pem deve ser inserido\n\nauth = base64.b64encode(\n  (f"{credentials[\'client_id\']}:{credentials[\'client_secret\']}"\n   ).encode()).decode()\n\nurl = "https://apis.gerencianet.com.br/oauth/token"  #Para ambiente de Desenvolvimento\n\npayload="{\\r\\n    \\"grant_type\\": \\"client_credentials\\"\\r\\n}"\nheaders = {\n  \'Authorization\': f"Basic {auth}",\n  \'Content-Type\': \'application/json\'\n}\n\nresponse = requests.request("POST",\n                          url,\n                          headers=headers,\n                          data=payload,\n                          cert=certificado)\n\nprint(response.text)\n'))),(0,i.kt)(s.Z,{value:".Net",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'//Desenvolvido pela Consultoria T\xe9cnica da Ef\xed\n\nusing System;\nusing System.Security.Cryptography.X509Certificates;\nusing System.Collections.Generic;\nusing RestSharp;\n\nnamespace PixGerencianet\n{\n  class Authorize\n  {\n      public static string Base64Encode(string plainText)\n      {\n          var plainTextBytes = System.Text.Encoding.UTF8.GetBytes(plainText);\n          return System.Convert.ToBase64String(plainTextBytes);\n      }\n\n      static void Main(string[] args)\n      {\n\n          var credencials = new Dictionary<string, string>{\n              {"client_id", "YOUR-CLIENT-ID"},\n              {"client_secret", "YOUR-CLIENT-SECRET"}\n          };\n          var authorization = Base64Encode(credencials["client_id"] + ":" + credencials["client_secret"]);\n          var client = new RestSharp.RestClient("https://apis.gerencianet.com.br/oauth/token");\n          var request = new RestRequest(Method.POST);\n\n          X509Certificate2 uidCert = new X509Certificate2("./certificado.p12", "");\n          client.ClientCertificates = new X509CertificateCollection() { uidCert };\n\n          request.AddHeader("Authorization", "Basic " + authorization);\n          request.AddHeader("Content-Type", "application/json");\n          request.AddParameter("application/json", "{\\r\\n    \\"grant_type\\": \\"client_credentials\\"\\r\\n}", ParameterType.RequestBody);\n          \n          IRestResponse restResponse = client.Execute(request);\n          string response = restResponse.Content;\n\n          Console.WriteLine(response);\n      }\n  }\n}\n'))),(0,i.kt)(s.Z,{value:"Ruby",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ruby"},'#Desenvolvido pela Consultoria T\xe9cnica da Gerencianet\n\nrequire "uri"\nrequire "net/http"\nrequire "openssl"\n\nclient_id = "YOUR-CLIENT-ID";\nclient_secret = "YOUR-CLIENT-SECRET";\n\ncertfile = File.read("certificado.pem") # A vari\xe1vel certfile \xe9 o diret\xf3rio em que seu certificado em formato .pem deve ser inserido\n\nurl = URI("https://apis.gerencianet.com.br/oauth/token") #Para ambiente de Desenvolvimento\n\nhttps = Net::HTTP.new(url.host, url.port);\nhttps.use_ssl = true\nhttps.cert = OpenSSL::X509::Certificate.new(certfile)\nhttps.key = OpenSSL::PKey::RSA.new(certfile)\n\nrequest = Net::HTTP::Post.new(url)\nrequest.basic_auth(client_id, client_secret)\nrequest["Content-Type"] = "application/json"\nrequest.body = "{\\r\\n    \\"grant_type\\": \\"client_credentials\\"\\r\\n}"\n\nresponse = https.request(request)\nputs response.read_body\n'))),(0,i.kt)(s.Z,{value:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'//Desenvolvido pela Consultoria T\xe9cnica da Ef\xed\n\nimport java.io.BufferedReader;\nimport java.io.InputStreamReader;\nimport java.io.OutputStream;\nimport java.net.URL;\nimport java.util.Base64;\n\nimport javax.net.ssl.HttpsURLConnection;\nimport javax.net.ssl.SSLSocketFactory;\n\npublic class Auth {\n  public static void main(String[] args) throws Exception {\n      String client_id = "YOUR-CLIENT-ID";\n      String client_secret = "YOUR-CLIENT-SECRET";;\n      String basicAuth = Base64.getEncoder().encodeToString(((client_id+\':\'+client_secret).getBytes()));\n    \n      //Diret\xf3rio em que seu certificado em formato .p12 deve ser inserido\n      System.setProperty("javax.net.ssl.keyStore", "certificado.p12"); \n      SSLSocketFactory sslsocketfactory = (SSLSocketFactory) SSLSocketFactory.getDefault();\n      \n      URL url = new URL ("https://apis.gerencianet.com.br/oauth/token"); //Para ambiente de Desenvolvimento              \n      HttpsURLConnection conn = (HttpsURLConnection)url.openConnection();\n      conn.setDoOutput(true);\n      conn.setRequestMethod("POST");\n      conn.setRequestProperty("Content-Type", "application/json");\n      conn.setRequestProperty("Authorization", "Basic "+ basicAuth);\n      conn.setSSLSocketFactory(sslsocketfactory);\n      String input = "{\\"grant_type\\": \\"client_credentials\\"}";\n     \n      OutputStream os = conn.getOutputStream();\n      os.write(input.getBytes());\n      os.flush();     \n\n      InputStreamReader reader = new InputStreamReader(conn.getInputStream());\n      BufferedReader br = new BufferedReader(reader);\n\n      String response;\n      while ((response = br.readLine()) != null) {\n        System.out.println(response);\n      }\n      conn.disconnect();\n\n  }\n}\n'))),(0,i.kt)(s.Z,{value:"Go",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'//Desenvolvido pela Consultoria T\xe9cnica da Ef\xed\npackage main\n\nimport (\n"fmt"\n"strings"\n"net/http"\n"io/ioutil"\n"crypto/tls"\n)\n\nconst(\nclient_id = "YOUR-CLIENT-ID"\nclient_secret = "YOUR-CLIENT-SECRET"\n)\n\nfunc main() {\n\nurl := "https://apis.gerencianet.com.br/oauth/token"// Rota base, homologa\xe7\xe3o ou produ\xe7\xe3o\nmethod := "POST"\n\npayload := strings.NewReader(`{"grant_type": "client_credentials"}`)\n\n\ncert, _ := tls.LoadX509KeyPair("CA.crt.pem", "KEY.crt.pem")// Seu certificado e chave privada gerada a partir dos comandos de convers\xe3o OpenSSL\n\nclient := &http.Client{\n  Transport: &http.Transport{\n      TLSClientConfig: &tls.Config{\n          Certificates: []tls.Certificate{cert},\n      },\n  },\n}\n\nreq, err := http.NewRequest(method, url, payload)\n\nif err != nil {\n  fmt.Println(err)\n  return\n}\nreq.SetBasicAuth(client_id, client_secret)\nreq.Header.Add("Content-Type", "application/json")\n\nres, err := client.Do(req)\nif err != nil {\n  fmt.Println(err)\n  return\n}\ndefer res.Body.Close()\n\nbody, err := ioutil.ReadAll(res.Body)\nif err != nil {\n  fmt.Println(err)\n  return\n}\nfmt.Println(string(body))\n}\n')))),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"exemplo-de-resposta-da-autoriza\xe7\xe3o"},"Exemplo de resposta da autoriza\xe7\xe3o"),(0,i.kt)("p",null,"O trecho de c\xf3digo abaixo representa um exemplo de resposta do OAuth \xe0 sua requisi\xe7\xe3o de autoriza\xe7\xe3o."),(0,i.kt)(r.Z,{className:"tab",defaultValue:"Resposta",values:[{label:"Resposta",value:"Resposta"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"Resposta",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",\n   "token_type": "Bearer",\n   "expires_in": 3600,\n   "scope": "gn.opb.participants.read gn.opb.payment.pix.send gn.opb.payment.pix.read gn.opb.payment.pix.refund gn.opb.config.write gn.opb.config.read"\n}\n'))))))}b.isMDXComponent=!0}}]);