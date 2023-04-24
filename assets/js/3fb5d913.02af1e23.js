"use strict";(self.webpackChunkwebsite_efi=self.webpackChunkwebsite_efi||[]).push([[9641],{3905:function(e,a,o){o.d(a,{Zo:function(){return p},kt:function(){return g}});var t=o(7294);function r(e,a,o){return a in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o,e}function n(e,a){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),o.push.apply(o,t)}return o}function s(e){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?n(Object(o),!0).forEach((function(a){r(e,a,o[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))}))}return e}function i(e,a){if(null==e)return{};var o,t,r=function(e,a){if(null==e)return{};var o,t,r={},n=Object.keys(e);for(t=0;t<n.length;t++)o=n[t],a.indexOf(o)>=0||(r[o]=e[o]);return r}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)o=n[t],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=t.createContext({}),d=function(e){var a=t.useContext(l),o=a;return e&&(o="function"==typeof e?e(a):s(s({},a),e)),o},p=function(e){var a=d(e.components);return t.createElement(l.Provider,{value:a},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},c=t.forwardRef((function(e,a){var o=e.components,r=e.mdxType,n=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=d(o),c=r,g=m["".concat(l,".").concat(c)]||m[c]||u[c]||n;return o?t.createElement(g,s(s({ref:a},p),{},{components:o})):t.createElement(g,s({ref:a},p))}));function g(e,a){var o=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var n=o.length,s=new Array(n);s[0]=c;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i[m]="string"==typeof e?e:r,s[1]=i;for(var d=2;d<n;d++)s[d]=o[d];return t.createElement.apply(null,s)}return t.createElement.apply(null,o)}c.displayName="MDXCreateElement"},3466:function(e,a,o){o.r(a),o.d(a,{Highlight:function(){return u},assets:function(){return p},contentTitle:function(){return l},default:function(){return k},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return m}});var t=o(7462),r=o(3366),n=(o(7294),o(3905)),s=(o(4996),["components"]),i={id:"PrestaShop",title:"PrestaShop",hide_title:!0,sidebar_label:"PrestaShop"},l=void 0,d={unversionedId:"Modulos/PrestaShop",id:"Modulos/PrestaShop",title:"PrestaShop",description:"PrestaShop",source:"@site/docs/Modulos/PrestaShop.md",sourceDirName:"Modulos",slug:"/Modulos/PrestaShop",permalink:"/documentacao-tecnica-efi/docs/Modulos/PrestaShop",draft:!1,tags:[],version:"current",frontMatter:{id:"PrestaShop",title:"PrestaShop",hide_title:!0,sidebar_label:"PrestaShop"},sidebar:"someSidebar",previous:{title:"OpenCart",permalink:"/documentacao-tecnica-efi/docs/Modulos/OpenCart"},next:{title:"WHMCS",permalink:"/documentacao-tecnica-efi/docs/Modulos/WHMCS"}},p={},m=[{value:"1. Requisitos",id:"1-requisitos",level:2},{value:"2. Instala\xe7\xe3o do M\xf3dulo",id:"2-instala\xe7\xe3o-do-m\xf3dulo",level:2},{value:"Instala\xe7\xe3o Autom\xe1tica",id:"instala\xe7\xe3o-autom\xe1tica",level:3},{value:"Instala\xe7\xe3o Manual",id:"instala\xe7\xe3o-manual",level:3},{value:"3. Configura\xe7\xf5es do Plugin Gerencianet para PrestaShop",id:"3-configura\xe7\xf5es-do-plugin-gerencianet-para-prestashop",level:2},{value:"Configura\xe7\xf5es Gerais",id:"configura\xe7\xf5es-gerais",level:3},{value:"Credenciais",id:"credenciais",level:3},{value:"4. Funcionamento do M\xf3dulo",id:"4-funcionamento-do-m\xf3dulo",level:2},{value:"5. D\xfavidas Frequentes",id:"5-d\xfavidas-frequentes",level:2},{value:"5.1. \xc9 obrigat\xf3rio possuir SSL em minha loja para aceitar pagamentos com o m\xf3dulo?",id:"51-\xe9-obrigat\xf3rio-possuir-ssl-em-minha-loja-para-aceitar-pagamentos-com-o-m\xf3dulo",level:4},{value:"5.2. Quero usar o Checkout Transparente de forma que o cliente n\xe3o saia da minha loja para realizar o pagamento. \xc9 poss\xedvel?",id:"52-quero-usar-o-checkout-transparente-de-forma-que-o-cliente-n\xe3o-saia-da-minha-loja-para-realizar-o-pagamento-\xe9-poss\xedvel",level:4},{value:"5.3. \xc9 poss\xedvel utilizar as funcionalidades de MarketPlace ou Assinaturas com o m\xf3dulo?",id:"53-\xe9-poss\xedvel-utilizar-as-funcionalidades-de-marketplace-ou-assinaturas-com-o-m\xf3dulo",level:4},{value:"5.4. As parcelas das op\xe7\xf5es de pagamento n\xe3o est\xe3o sendo carregadas. Como corrigir?",id:"54-as-parcelas-das-op\xe7\xf5es-de-pagamento-n\xe3o-est\xe3o-sendo-carregadas-como-corrigir",level:4},{value:"5.5. Estou recebendo a mensagem \u201cUnauthorized\u201d ao tentar finalizar uma compra. O que fazer?",id:"55-estou-recebendo-a-mensagem-unauthorized-ao-tentar-finalizar-uma-compra-o-que-fazer",level:4},{value:"5.6. Est\xe1 aparecendo a mensagem \u201c<em>Gerencianet Desabilitada: O modo Sandbox (Ambiente de testes) est\xe1 ativo. Suas cobran\xe7as n\xe3o ser\xe3o validadas</em>\u201d. Como corrigir?",id:"56-est\xe1-aparecendo-a-mensagem-gerencianet-desabilitada-o-modo-sandbox-ambiente-de-testes-est\xe1-ativo-suas-cobran\xe7as-n\xe3o-ser\xe3o-validadas-como-corrigir",level:4},{value:"5.7. Onde posso acompanhar as transa\xe7\xf5es geradas pelo m\xf3dulo?",id:"57-onde-posso-acompanhar-as-transa\xe7\xf5es-geradas-pelo-m\xf3dulo",level:4},{value:"5.8. Quando tento realizar um pagamento recebo a mensagem \u201cOcorreu um erro ao tentar realizar a sua requisi\xe7\xe3o. Entre em contato com o propriet\xe1rio da loja.\u201d",id:"58-quando-tento-realizar-um-pagamento-recebo-a-mensagem-ocorreu-um-erro-ao-tentar-realizar-a-sua-requisi\xe7\xe3o-entre-em-contato-com-o-propriet\xe1rio-da-loja",level:4},{value:"6. Suporte e Sugest\xf5es",id:"6-suporte-e-sugest\xf5es",level:2}],u=function(e){var a=e.children,o=e.color;return(0,n.kt)("span",{style:{backgroundColor:o,borderRadius:"4px",color:"#fff",padding:"0.1rem"}},a)},c={toc:m,Highlight:u},g="wrapper";function k(e){var a=e.components,i=(0,r.Z)(e,s);return(0,n.kt)(g,(0,t.Z)({},c,i,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{className:"titulo"},"PrestaShop"),(0,n.kt)("div",{className:"subtitulo"},(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"M\xf3dulo de Integra\xe7\xe3o Gerencianet para PrestaShop - Vers\xe3o 0.3.1")),(0,n.kt)("p",null,"O m\xf3dulo Gerencianet para Prestashop permite receber pagamentos por meio do ",(0,n.kt)("strong",null,"checkout transparente da nossa API"),". Compat\xedvel com a vers\xe3o ",(0,n.kt)(u,{color:"#777",mdxType:"Highlight"},"1.6.x")," do PrestaShop."),(0,n.kt)("p",null,"Este \xe9 o M\xf3dulo de integra\xe7\xe3o fornecido pela ",(0,n.kt)("a",{target:"blank",href:"https://gerencianet.com.br"},"Gerencianet "),"para PrestaShop. Com ele, o propriet\xe1rio da loja pode optar por receber pagamentos por boleto banc\xe1rio e/ou cart\xe3o de cr\xe9dito. Todo processo \xe9 realizado por meio do checkout transparente. Com isso, o comprador n\xe3o precisa sair do site da loja para efetuar o pagamento."),(0,n.kt)("br",null),(0,n.kt)("h2",{id:"1-requisitos"},"1. Requisitos"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Vers\xe3o do PHP: ",(0,n.kt)("inlineCode",{parentName:"li"},"5.4.39")," \xe0 ",(0,n.kt)("inlineCode",{parentName:"li"},"7.0.3")),(0,n.kt)("li",{parentName:"ul"},"Vers\xe3o do PrestaShop: ",(0,n.kt)("inlineCode",{parentName:"li"},"1.6.x"))),(0,n.kt)("admonition",{title:"IMPORTANTE",type:"important"},(0,n.kt)("p",{parentName:"admonition"},"Os requisitos do sistema foram definidos de acordo com os nossos testes. Se seu sistema n\xe3o se encaixa nos requisitos, n\xe3o significa que o m\xf3dulo n\xe3o vai funcionar em seu PrestaShop, mas sim, que n\xe3o testamos no mesmo ambiente. ",(0,n.kt)("strong",{parentName:"p"},"Portanto, n\xe3o garantimos o funcionamento deste m\xf3dulo em ambientes diferentes dos citados acima."))),(0,n.kt)("br",null),(0,n.kt)("h2",{id:"2-instala\xe7\xe3o-do-m\xf3dulo"},"2. Instala\xe7\xe3o do M\xf3dulo"),(0,n.kt)("p",null,"O m\xf3dulo da Gerencianet para PrestaShop pode ser instalado de duas formas diferentes:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("em",{parentName:"p"},(0,n.kt)("a",{parentName:"em",href:"#instala%C3%A7%C3%A3o-autom%C3%A1tica"},"Instala\xe7\xe3o Autom\xe1tica:"))," utilizando o arquivo de instala\xe7\xe3o do m\xf3dulo compactado atrav\xe9s da ferramenta de adicionar novos M\xf3dulos do PrestaShop;")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("em",{parentName:"p"},(0,n.kt)("a",{parentName:"em",href:"#instala%C3%A7%C3%A3o-manual"},"Instala\xe7\xe3o Manual:"))," os arquivos do m\xf3dulo devem ser enviados manualmente para o servidor de hospedagem via FTP."))),(0,n.kt)("br",null),(0,n.kt)("h3",{id:"instala\xe7\xe3o-autom\xe1tica"},"Instala\xe7\xe3o Autom\xe1tica"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Fa\xe7a o ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/gerencianet/gn-api-prestashop/raw/master/auto/gerencianet.zip"},"download da \xfaltima vers\xe3o do m\xf3dulo"),' (arquivo "',(0,n.kt)("strong",{parentName:"p"},"gerencianet.zip"),'");')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Acesse a administra\xe7\xe3o da sua loja, acesse ",(0,n.kt)("code",null,"M\xf3dulos > Adicione um novo M\xf3dulo"),' e envie o arquivo "',(0,n.kt)("strong",{parentName:"p"},"gerencianet.zip"),'" que voc\xea acabou de baixar;')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Depois de enviar o m\xf3dulo para sua loja, clica em ",(0,n.kt)("code",null,"Instalar")," e aguarde a finaliza\xe7\xe3o do processo."))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"alt text",src:o(6444).Z,width:"905",height:"427"})),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},"Configure o m\xf3dulo em ",(0,n.kt)("code",null,"M\xf3dulos > Gerencianet > Configurar")," e comece a receber pagamentos.")),(0,n.kt)("br",null),(0,n.kt)("h3",{id:"instala\xe7\xe3o-manual"},"Instala\xe7\xe3o Manual"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Fa\xe7a o ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/gerencianet/gn-api-prestashop/raw/master/auto/gerencianet.zip"},"download da \xfaltima vers\xe3o do m\xf3dulo"),' (arquivo "',(0,n.kt)("strong",{parentName:"p"},"gerencianet.zip"),'") e extraia seu conte\xfado ou realize o ',(0,n.kt)("a",{href:"https://github.com/gerencianet/gn-api-prestashop/tree/master/manual/gerencianet",target:"_blank"},"download")," da \xfaltima vers\xe3o descompactada (pasta ",(0,n.kt)("code",null,"/manual"),");")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Acesse a loja via FTP e envie toda a pasta ",(0,n.kt)("code",null,"gerencianet")," descompactada para a pasta de destino ",(0,n.kt)("code",null,"modules")," que se encontra na raiz dos arquivos da loja no servidor;")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Acesse a administra\xe7\xe3o da loja e acesse ",(0,n.kt)("code",null,"M\xf3dulos"),". Procure pelo m\xf3dulo da Gerencianet na lista, clique em ",(0,n.kt)("code",null,"Instalar")," e aguarde a finaliza\xe7\xe3o do processo;")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Configure o m\xf3dulo em ",(0,n.kt)("code",null,"M\xf3dulos > Gerencianet > Configurar")," e comece a receber pagamentos."))),(0,n.kt)("br",null),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"3-configura\xe7\xf5es-do-plugin-gerencianet-para-prestashop"},"3. Configura\xe7\xf5es do Plugin Gerencianet para PrestaShop"),(0,n.kt)("p",null,"Para configurar o M\xf3dulo da Gerencianet para Prestashop, o lojista dever\xe1 acessar a interface administrativa da loja virtual e, no menu principal, acessar o op\xe7\xe3o ",(0,n.kt)("inlineCode",{parentName:"p"},"M\xf3dulos"),". Procure pelo m\xf3dulo da Gerencianet na lista que ser\xe1 exibida e depois clique em ",(0,n.kt)("inlineCode",{parentName:"p"},"Configurar"),", conforme imagem abaixo:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"alt text",src:o(9484).Z,width:"1005",height:"226"})),(0,n.kt)("br",null),(0,n.kt)("p",null,"Ao entrar na configura\xe7\xe3o do m\xf3dulo, a seguinte interface ser\xe1 exibida:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"alt text",src:o(7945).Z,width:"1027",height:"339"})),(0,n.kt)("p",null,"As credencias e prefer\xeancias dever\xe3o ser configuradas atrav\xe9s das duas abas disponibilizadas:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#configura%C3%A7%C3%B5es-gerais"},"Configura\xe7\xf5es Gerais")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#credenciais"},"Credenciais"))),(0,n.kt)("br",null),(0,n.kt)("h3",{id:"configura\xe7\xf5es-gerais"},"Configura\xe7\xf5es Gerais"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"alt text",src:o(6479).Z,width:"1005",height:"788"})),(0,n.kt)("p",null,"Nesta aba, as seguintes propriedades podem ser configuradas:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Modo:")," Configure se deseja ativar o m\xf3dulo em Desenvolvimento (ambiente de testes) ou Produ\xe7\xe3o (cobran\xe7a real);")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Op\xe7\xf5es de Pagamento:")," Configure as op\xe7\xf5es de pagamento que deseja receber: Boleto e/ou Cart\xe3o de Cr\xe9dito.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Dias para vencimento do Boleto:")," Configure o n\xfamero de dias corridos para vencimento do Boleto.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Desconto para pagamento no boleto(%):")," Defina se deseja aplicar desconto para pagamentos com Boleto.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Atualizar status dos pedidos PrestaShop automaticamente:")," Configure se deseja que o m\xf3dulo atualize os status dos pedidos da loja automaticamente de acordo com as notifica\xe7\xf5es da Gerencianet.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Status:")," Configure se o M\xf3dulo estar\xe1 dispon\xedvel para os clientes."))),(0,n.kt)("br",null),(0,n.kt)("h3",{id:"credenciais"},"Credenciais"),(0,n.kt)("p",null,'Nesta aba \xe9 necess\xe1rio informar as credenciais de sua aplica\xe7\xe3o, isto \xe9, o "Client_Id" e "Client_Secret" (veja onde localizar, de acordo com o ambiente: ',(0,n.kt)("a",{href:"https://s3.amazonaws.com/gerencianet-pub-prod-1/printscreen/2020/07/30/matheus.rodrigues/3d4208-de7a4092-1d7e-4526-9e20-dd7ed0329500.png",target:"_blank"},"desenvolvimento")," e ",(0,n.kt)("a",{href:"https://s3.amazonaws.com/gerencianet-pub-prod-1/printscreen/2020/07/30/matheus.rodrigues/335826-79f10f33-9878-4898-8795-a49b798b7185.png",target:"_blank"},"produ\xe7\xe3o"),") da sua aplica\xe7\xe3o e o ",(0,n.kt)("a",{href:"https://s3.amazonaws.com/gerencianet-pub-prod-1/printscreen/2020/07/24/matheus.rodrigues/b66b15-d2201967-d646-4988-8e39-cffae37df203.png",target:"_blank"},"identificador da conta")," obtidos na aplica\xe7\xe3o criada na Gerencianet."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"O lojista dever\xe1 inserir as credenciais de aplica\xe7\xe3o Gerencianet nos respectivos campos. Para ter acesso a essas credenciais, voc\xea dever\xe1 criar uma nova aplica\xe7\xe3o Gerencianet ou utilizar uma j\xe1 existente. Para criar uma aplica\xe7\xe3o, entre em sua conta Gerencianet, acesse ",(0,n.kt)("code",null,"API > Minhas Aplica\xe7\xf5es > Nova aplica\xe7\xe3o"),'. Escolha um nome e crie a nova aplica\xe7\xe3o. Agora j\xe1 j\xe1 ter\xe1 acesso \xe0s credenciais da aplica\xe7\xe3o. Copie-as e insira nos respectivos campos da aba "Credenciais" em sua loja (Client_Id e Client_Secret de ',(0,n.kt)("a",{href:"https://s3.amazonaws.com/gerencianet-pub-prod-1/printscreen/2020/07/30/matheus.rodrigues/335826-79f10f33-9878-4898-8795-a49b798b7185.png",target:"_blank"},"produ\xe7\xe3o")," e ",(0,n.kt)("a",{href:"https://s3.amazonaws.com/gerencianet-pub-prod-1/printscreen/2020/07/30/matheus.rodrigues/3d4208-de7a4092-1d7e-4526-9e20-dd7ed0329500.png",target:"_blank"},"desenvolvimento"),").")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Insira o ",(0,n.kt)("a",{href:"https://s3.amazonaws.com/gerencianet-pub-prod-1/printscreen/2020/07/24/matheus.rodrigues/b66b15-d2201967-d646-4988-8e39-cffae37df203.png",target:"_blank"},"identificador da conta")," Gerencianet.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Clique em ",(0,n.kt)("code",null,"Salvar")," e agora sua loja virtual j\xe1 est\xe1 pronta para receber pagamentos pela Gerencianet."))),(0,n.kt)("br",null),(0,n.kt)("admonition",{title:"IMPORTANTE",type:"important"},(0,n.kt)("p",{parentName:"admonition"},'Quando estiver em ambiente de produ\xe7\xe3o, use a Client_Id e Client_Secret da aba "Produ\xe7\xe3o" e a op\xe7\xe3o sandbox desativada. Se estiver em desenvolvimento, use a Client_Id e Client_Secret da aba "Desenvolvimento" com a op\xe7\xe3o sandbox habilitada. Se n\xe3o for realizado dessa forma, uma poss\xedvel mensagem de "unauthorized" (sem autoriza\xe7\xe3o) poder\xe1 ser retornada.')),(0,n.kt)("br",null),(0,n.kt)("admonition",{title:"ATEN\xc7\xc3O",type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Importante salientar que ",(0,n.kt)("strong",{parentName:"p"},"os boletos gerados em sandbox n\xe3o s\xe3o v\xe1lidos e n\xe3o podem ser pagos"),', possuem a linha digit\xe1vel "zerada" e uma marca d\'\xe1gua ao fundo informando ser um boleto de teste.'),(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},'Os pagamentos de cobran\xe7as de sandbox utilizando cart\xe3o de cr\xe9dito s\xe3o fict\xedcios, mesmo se utilizar um cart\xe3o "real".'),' Todos os pagamentos de cart\xe3o neste ambiente ter\xe3o o pagamento confirmado automaticamente, mas \xe9 apenas uma altera\xe7\xe3o de status para "Pago". Este recurso permite que voc\xea teste a notifica\xe7\xe3o do status ',(0,n.kt)("code",null,"paid"),"."),(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"Isso significa que todos os pagamentos realizados em sandbox n\xe3o s\xe3o reais e, portanto, n\xe3o h\xe1 cobran\xe7a de nenhuma import\xe2ncia financeira.")," "),(0,n.kt)("p",{parentName:"admonition"},"\xc9 importante saber que as palavras ",(0,n.kt)("strong",{parentName:"p"},"Playground, Sandbox e Ambiente de Desenvolvimento"),", no contexto da Gerencianet, s\xe3o sin\xf4nimos no sentido de fazerem refer\xeancia ao local de testes que oferecemos em que voc\xea pode testar \xe0 vontade sua integra\xe7\xe3o com a API.")),(0,n.kt)("br",null),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"4-funcionamento-do-m\xf3dulo"},"4. Funcionamento do M\xf3dulo"),(0,n.kt)("p",null,"Ap\xf3s ser habilitado, o m\xf3dulo j\xe1 estar\xe1 dispon\xedvel como uma op\xe7\xe3o de pagamento."),(0,n.kt)("p",null,"Dependendo da sua configura\xe7\xe3o de habilitar ou n\xe3o a op\xe7\xe3o de ",(0,n.kt)("code",null,"Pagamento em um passo"),", a p\xe1gina que o cliente digitar\xe1 seus dados de pagamento ser\xe1 diferente."),(0,n.kt)("p",null,"Se a op\xe7\xe3o de ",(0,n.kt)("code",null,"Pagamento em um passo")," estiver ativa, seu cliente ir\xe1 preencher os dados de pagamento na mesma tela de ",(0,n.kt)("code",null,"Finalizar compra"),", conforme as figuras abaixo:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"alt text",src:o(2971).Z,width:"562",height:"360"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"alt text",src:o(9632).Z,width:"563",height:"679"})),(0,n.kt)("p",null,"Desta forma, ao clicar em ",(0,n.kt)("code",null,"Finalizar Compra"),", os dados do cliente ser\xe3o validados e,caso esteja tudo correto a cobran\xe7a ser\xe1 gerada e a compra finalizada. O cliente ent\xe3o \xe9 redirecionado para a p\xe1gina de compra finalizada."),(0,n.kt)("p",null,"Caso a op\xe7\xe3o de ",(0,n.kt)("code",null,"Pagamento em um passo")," n\xe3o estiver ativa, seu cliente ir\xe1 preencher os dados pessoas e de entrega na p\xe1gina de ",(0,n.kt)("code",null,"Finalizar Compra")," e ao clicar em ",(0,n.kt)("code",null,"Confirmar Pedido")," ser\xe1 redirecionado para outra p\xe1gina para prosseguir com o pagamento, onde optar\xe1 pelas op\xe7\xf5es de pagamento da Gerencianet, conforme figura abaixo:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"alt text",src:o(1550).Z,width:"969",height:"275"})),(0,n.kt)("p",null,"Ambas as telas de pagamento podem sofrer mudan\xe7as de acordo com o tema utilizado na loja."),(0,n.kt)("admonition",{title:"OBSERVA\xc7\xc3O",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Se algum dos campos obrigat\xf3rios para o realizar o pagamento n\xe3o for preenchido corretamente, ele ser\xe1 cobrado novamente no formul\xe1rio de pagamento. Para ",(0,n.kt)("strong",{parentName:"p"},"Boleto Banc\xe1rio"),", os campos obrigat\xf3rios s\xe3o: ",(0,n.kt)("strong",null,"Nome, E-mail, CPF e Telefone"),". Para ",(0,n.kt)("strong",{parentName:"p"},"Cart\xe3o de Cr\xe9dito"),", os campos obrigat\xf3rios s\xe3o: ",(0,n.kt)("strong",null,"Nome, E-mail, CPF, data de nascimento, Telefone, Endere\xe7o, N\xfamero, Bairro, CEP, Cidade e Estado."))),(0,n.kt)("br",null),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"5-d\xfavidas-frequentes"},"5. D\xfavidas Frequentes"),(0,n.kt)("h4",{id:"51-\xe9-obrigat\xf3rio-possuir-ssl-em-minha-loja-para-aceitar-pagamentos-com-o-m\xf3dulo"},"5.1. \xc9 obrigat\xf3rio possuir SSL em minha loja para aceitar pagamentos com o m\xf3dulo?"),(0,n.kt)("p",null,"Para que o m\xf3dulo da Gerencianet para PrestaShop funcione, n\xe3o \xe9 necess\xe1rio que a loja possua um certificado SSL. Contudo \xe9 extremamente recomendado pela Gerencianet que os lojistas utilizem. Independente da sua utiliza\xe7\xe3o, todos os dados de pagamento s\xe3o criptografados e transmitidos com seguran\xe7a para valida\xe7\xe3o do pagamento. A presen\xe7a de um certificado SSL\ninstalado em sua loja garante maior seguran\xe7a para o lojista e para os clientes que realizam compras. A aus\xeancia do certificado SSL na tela de pagamento, pode fazer com que o lojista perca vendas, uma vez que o cliente pode se sentir inseguro para digitar dados de pagamento em uma p\xe1gina que n\xe3o possui um certificado."),(0,n.kt)("br",null),(0,n.kt)("h4",{id:"52-quero-usar-o-checkout-transparente-de-forma-que-o-cliente-n\xe3o-saia-da-minha-loja-para-realizar-o-pagamento-\xe9-poss\xedvel"},"5.2. Quero usar o Checkout Transparente de forma que o cliente n\xe3o saia da minha loja para realizar o pagamento. \xc9 poss\xedvel?"),(0,n.kt)("p",null,"Sim. O m\xf3dulo da Gerencianet para PrestaShop utiliza o checkout transparente para realizar o pagamento dos clientes, ou seja, em nenhum momento o cliente ir\xe1 sair da sua loja virtual para finalizar o pagamento. Assim, no \xfaltimo passo da compra, ser\xe1 solicitado ao clientes dos dados obrigat\xf3rios para efetivar o pagamento."),(0,n.kt)("h4",{id:"53-\xe9-poss\xedvel-utilizar-as-funcionalidades-de-marketplace-ou-assinaturas-com-o-m\xf3dulo"},"5.3. \xc9 poss\xedvel utilizar as funcionalidades de MarketPlace ou Assinaturas com o m\xf3dulo?"),(0,n.kt)("p",null,"Ainda n\xe3o. Acompanhe nosso ",(0,n.kt)("a",{parentName:"p",href:"../UltimasNovidades/changelog"},"changelog")," para visualizar todas as novidades."),(0,n.kt)("br",null),(0,n.kt)("h4",{id:"54-as-parcelas-das-op\xe7\xf5es-de-pagamento-n\xe3o-est\xe3o-sendo-carregadas-como-corrigir"},"5.4. As parcelas das op\xe7\xf5es de pagamento n\xe3o est\xe3o sendo carregadas. Como corrigir?"),(0,n.kt)("p",null,'Se ap\xf3s a instala\xe7\xe3o e configura\xe7\xe3o do m\xf3dulo as parcelas do cart\xe3o de cr\xe9dito n\xe3o carregarem ao clicar sobre as bandeiras dos cart\xf5es, o lojista dever\xe1 verificar as credenciais informadas na configura\xe7\xe3o do m\xf3dulo (chaves Client_Id, Client_Secret e tamb\xe9m o "identificador da conta"). Se estiverem corretas, entre em contato com a Gerencianet para que o problema seja analisado.'),(0,n.kt)("br",null),(0,n.kt)("h4",{id:"55-estou-recebendo-a-mensagem-unauthorized-ao-tentar-finalizar-uma-compra-o-que-fazer"},"5.5. Estou recebendo a mensagem \u201cUnauthorized\u201d ao tentar finalizar uma compra. O que fazer?"),(0,n.kt)("p",null,"Essa mensagem de erro pode estar relacionada com a as credenciais informadas de forma incorreta. Verifique se as suas credenciais est\xe3o corretamente inseridas nos respectivos campos de PRODU\xc7\xc3O e DESENVOLVIMENTO. Confira em ",(0,n.kt)("a",{parentName:"p",href:"https://gerencianet.com.br/artigo/estou-deparando-com-mensagem-de-unauthorized-sem-autorizacao-por-que/"},"nossa FAQ")," informa\xe7\xf5es detalhadas."),(0,n.kt)("br",null),(0,n.kt)("h4",{id:"56-est\xe1-aparecendo-a-mensagem-gerencianet-desabilitada-o-modo-sandbox-ambiente-de-testes-est\xe1-ativo-suas-cobran\xe7as-n\xe3o-ser\xe3o-validadas-como-corrigir"},"5.6. Est\xe1 aparecendo a mensagem \u201c",(0,n.kt)("em",{parentName:"h4"},"Gerencianet Desabilitada: O modo Sandbox (Ambiente de testes) est\xe1 ativo. Suas cobran\xe7as n\xe3o ser\xe3o validadas"),"\u201d. Como corrigir?"),(0,n.kt)("p",null,'Esta mensagem ir\xe1 ser exibida quando seu m\xf3dulo estiver configurado em ambiente de testes (sandbox). Para remover esta mensagem e come\xe7ar a receber com a Gerencianet, acesse as configura\xe7\xf5es do m\xf3dulo em "M\xf3dulos" > "Gerencianet" > "Configurar" e desmarque a op\xe7\xe3o \u201cSandBox\u201d > \u201cHabilitar Sandbox Gerencianet (Ambiente de testes)\u201d.'),(0,n.kt)("br",null),(0,n.kt)("h4",{id:"57-onde-posso-acompanhar-as-transa\xe7\xf5es-geradas-pelo-m\xf3dulo"},"5.7. Onde posso acompanhar as transa\xe7\xf5es geradas pelo m\xf3dulo?"),(0,n.kt)("p",null,"As transa\xe7\xf5es geradas atrav\xe9s do m\xf3dulo podem ser acompanhadas em sua conta Gerencianet no link \u201cAPI\u201d > \u201cMinhas Aplica\xe7\xf5es\u201d > \u201cSua Aplica\xe7\xe3o\u201d. Neste ambiente voc\xea poder\xe1 acompanhar todas as transa\xe7\xf5es e suas respectivas situa\xe7\xf5es."),(0,n.kt)("h4",{id:"58-quando-tento-realizar-um-pagamento-recebo-a-mensagem-ocorreu-um-erro-ao-tentar-realizar-a-sua-requisi\xe7\xe3o-entre-em-contato-com-o-propriet\xe1rio-da-loja"},"5.8. Quando tento realizar um pagamento recebo a mensagem \u201cOcorreu um erro ao tentar realizar a sua requisi\xe7\xe3o. Entre em contato com o propriet\xe1rio da loja.\u201d"),(0,n.kt)("p",null,'Essa mensagem de erro pode ser exibida no momento da finaliza\xe7\xe3o da compra por diversos fatores. Neste caso, o primeiro passo \xe9 verificar as credenciais da sua aplica\xe7\xe3o e tamb\xe9m conferir em sua API a subaba "hist\xf3rico de requisi\xe7\xf5es" veja como usar este recurso.'),(0,n.kt)("br",null),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"6-suporte-e-sugest\xf5es"},"6. Suporte e Sugest\xf5es"),(0,n.kt)("p",null,"Sua sugest\xe3o de novas ideias e implementa\xe7\xf5es para o m\xf3dulo da Gerencianet para PrestaShop \xe9 muito importante. Portanto, caso voc\xea tenha alguma ideia, entre em contato com a nossa equipe. Iremos analisar sua sugest\xe3o e avaliar a possibilidade de implanta\xe7\xe3o."),(0,n.kt)("p",null,"Caso voc\xea tenha alguma d\xfavida, entre em contato conosco pelo site ",(0,n.kt)("a",{href:"https://gerencianet.com.br/",target:"_blank"},"Gerencianet"),".")))}k.isMDXComponent=!0},6444:function(e,a,o){a.Z=o.p+"assets/images/prestashop-1b010b2c695cce4e1d056cb275bd2d18.png"},9484:function(e,a,o){a.Z=o.p+"assets/images/prestashop1-1c803f70b8272e73ab035e6f7014d988.png"},7945:function(e,a,o){a.Z=o.p+"assets/images/prestashop2-f015f6d95b66e7ea7b0b2fc78887ed56.png"},6479:function(e,a,o){a.Z=o.p+"assets/images/prestashop3-4de16c318923a9ee27e00918299f5277.png"},2971:function(e,a,o){a.Z=o.p+"assets/images/prestashop4-36b85d2f436bdfe9ad5e2bfdab7d9165.png"},9632:function(e,a,o){a.Z=o.p+"assets/images/prestashop5-7720dbef4a88a96d46433049dd6c2eeb.png"},1550:function(e,a,o){a.Z=o.p+"assets/images/prestashop6-a9fbfe8b96d3a12f2ed305a9313ba13c.png"}}]);