"use strict";(self.webpackChunkwebsite_efi=self.webpackChunkwebsite_efi||[]).push([[3041],{3905:function(e,o,a){a.d(o,{Zo:function(){return m},kt:function(){return k}});var t=a(7294);function n(e,o,a){return o in e?Object.defineProperty(e,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[o]=a,e}function r(e,o){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);o&&(t=t.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var o=1;o<arguments.length;o++){var a=null!=arguments[o]?arguments[o]:{};o%2?r(Object(a),!0).forEach((function(o){n(e,o,a[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(a,o))}))}return e}function l(e,o){if(null==e)return{};var a,t,n=function(e,o){if(null==e)return{};var a,t,n={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],o.indexOf(a)>=0||(n[a]=e[a]);return n}(e,o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],o.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=t.createContext({}),u=function(e){var o=t.useContext(s),a=o;return e&&(a="function"==typeof e?e(o):i(i({},o),e)),a},m=function(e){var o=u(e.components);return t.createElement(s.Provider,{value:o},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var o=e.children;return t.createElement(t.Fragment,{},o)}},p=t.forwardRef((function(e,o){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=u(a),p=n,k=c["".concat(s,".").concat(p)]||c[p]||d[p]||r;return a?t.createElement(k,i(i({ref:o},m),{},{components:a})):t.createElement(k,i({ref:o},m))}));function k(e,o){var a=arguments,n=o&&o.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=p;var l={};for(var s in o)hasOwnProperty.call(o,s)&&(l[s]=o[s]);l.originalType=e,l[c]="string"==typeof e?e:n,i[1]=l;for(var u=2;u<r;u++)i[u]=a[u];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}p.displayName="MDXCreateElement"},5002:function(e,o,a){a.r(o),a.d(o,{assets:function(){return m},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var t=a(7462),n=a(3366),r=(a(7294),a(3905)),i=(a(4996),["components"]),l={id:"Joomla",title:"Joomla (VirtueMart)",hide_title:!0,sidebar_label:"Joomla (VirtueMart)"},s=void 0,u={unversionedId:"Modulos/Joomla",id:"Modulos/Joomla",title:"Joomla (VirtueMart)",description:"Joomla (VirtueMart)",source:"@site/docs/Modulos/Joomla.md",sourceDirName:"Modulos",slug:"/Modulos/Joomla",permalink:"/doc/docs/Modulos/Joomla",draft:!1,tags:[],version:"current",frontMatter:{id:"Joomla",title:"Joomla (VirtueMart)",hide_title:!0,sidebar_label:"Joomla (VirtueMart)"},sidebar:"someSidebar",previous:{title:"Box Billing",permalink:"/doc/docs/Modulos/BoxBilling"},next:{title:"Magento",permalink:"/doc/docs/Modulos/Magento"}},m={},c=[{value:"1. Requisitos",id:"1-requisitos",level:2},{value:"2. Instala\xe7\xe3o",id:"2-instala\xe7\xe3o",level:2},{value:"3. Configura\xe7\xe3o",id:"3-configura\xe7\xe3o",level:2},{value:"Configura\xe7\xf5es do Plugin de Pagamento",id:"configura\xe7\xf5es-do-plugin-de-pagamento",level:3},{value:"Campos Extras Obrigat\xf3rios",id:"campos-extras-obrigat\xf3rios",level:3},{value:"Configura\xe7\xf5es do Boleto Banc\xe1rio",id:"configura\xe7\xf5es-do-boleto-banc\xe1rio",level:3},{value:"4. Erros Comuns de Integra\xe7\xe3o:",id:"4-erros-comuns-de-integra\xe7\xe3o",level:2}],d={toc:c},p="wrapper";function k(e){var o=e.components,a=(0,n.Z)(e,i);return(0,r.kt)(p,(0,t.Z)({},d,a,{components:o,mdxType:"MDXLayout"}),(0,r.kt)("h1",{className:"titulo"},"Joomla (VirtueMart)"),(0,r.kt)("div",{className:"subtitulo"},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"M\xf3dulo de Integra\xe7\xe3o Gerencianet para VirtueMart Oficial - Vers\xe3o 0.2.1")),(0,r.kt)("p",null,"O m\xf3dulo Gerencianet para Joomla (VirtueMart) permite receber pagamentos por meio do ",(0,r.kt)("strong",null,"checkout transparente da nossa API"),". Compat\xedvel com o Virtuemart 3 e Joomla! 2.5."),(0,r.kt)("p",null,"Este \xe9 o M\xf3dulo Oficial de integra\xe7\xe3o fornecido pela Gerencianet para VirtueMart. Com ele, o propriet\xe1rio da loja pode optar por receber pagamentos por boleto banc\xe1rio e/ou cart\xe3o de cr\xe9dito. Todo processo \xe9 realizado por meio do checkout transparente. Com isso, o comprador n\xe3o precisa sair do site da loja para efetuar o pagamento."),(0,r.kt)("p",null,'Algumas informa\xe7\xf5es como "CPF", "n\xfamero do endere\xe7o", "bairro" e "data de nascimento" poder\xe3o ser solicitados no momento do pagamento, caso os campos n\xe3o sejam configurados conforme indicado.'),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"1-requisitos"},"1. Requisitos"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Vers\xe3o do PHP: ",(0,r.kt)("inlineCode",{parentName:"li"},"5.4.0")," \xe0 ",(0,r.kt)("inlineCode",{parentName:"li"},"7.0.3")),(0,r.kt)("li",{parentName:"ul"},"Vers\xe3o m\xednima do VirtueMart: ",(0,r.kt)("inlineCode",{parentName:"li"},"3.0")),(0,r.kt)("li",{parentName:"ul"},"Vers\xe3o m\xednima do Joomla!: ",(0,r.kt)("inlineCode",{parentName:"li"},"2.5"))),(0,r.kt)("br",null),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"2-instala\xe7\xe3o"},"2. Instala\xe7\xe3o"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Fa\xe7a o download da ",(0,r.kt)("a",{href:"https://github.com/gerencianet/gn-api-virtuemart/archive/master.zip",target:"_blank"},"\xfaltima vers\xe3o do plugin"),";")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Acesse o link em sua loja ",(0,r.kt)("code",null,"Extensions > Manage > Install")," e envie o arquivo ",(0,r.kt)("code",null,"gn-api-virtuemart.zip")," ou extraia o conte\xfado do arquivo dentro do diret\xf3rio de plugins da loja;")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Configure o plugin conforme instru\xe7\xf5es abaixo e comece a receber pagamentos com a Gerencianet."))),(0,r.kt)("br",null),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"3-configura\xe7\xe3o"},"3. Configura\xe7\xe3o"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Primeiramente, ",(0,r.kt)("a",{href:"https://gerencianet.com.br/#abrirconta",target:"_blank",title:"Cadastro ao nosso sistema, seja nosso cliente"},"crie gratuitamente sua conta Gerencianet"),";")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Crie 3 campos extras no Virtuemart: ",(0,r.kt)("code",null,"numero"),", ",(0,r.kt)("code",null,"bairro")," e ",(0,r.kt)("code",null,"data_nascimento"),". O n\xfamero da resid\xeancia, bairro e data de nascimento s\xe3o dados obrigat\xf3rios para pagamento com cart\xe3o de cr\xe9dito. Se n\xe3o for informado no formul\xe1rio de cadastro ou no carrinho, ser\xe1 solicitado no ato do pagamento;")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Habilite o plugin em ",(0,r.kt)("code",null,"Administrar Plugins"),";")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Instale nosso plugin atrav\xe9s da tela ",(0,r.kt)("code",null,"M\xe9todos de pagamento"),";")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Clique em ",(0,r.kt)("code",null,"Novo M\xe9todo de Pagamento")," e preencha as seguintes informa\xe7\xf5es:"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"Nome do Pagamento:")," Cart\xf5es de cr\xe9dito ou Boleto Banc\xe1rio ( Gerencianet );"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"Publicado:")," Sim;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"Descri\xe7\xe3o do pagamento:")," Pague com Cart\xe3o de Cr\xe9dito ou Boleto Banc\xe1rio;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"M\xe9todo de pagamento:")," Gerencianet;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"Grupo de Compradores:")," -default-")),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Clique em ",(0,r.kt)("inlineCode",{parentName:"p"},"Salvar"),";")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Na aba ",(0,r.kt)("inlineCode",{parentName:"p"},"Configura\xe7\xf5es"),", preencha os seguintes dados:"))),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"configura\xe7\xf5es-do-plugin-de-pagamento"},"Configura\xe7\xf5es do Plugin de Pagamento"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"Modo de teste:")," Sim ou N\xe3o;")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"Client ID Desenvolvimento"),": em sua conta Gerencianet, acesse ",(0,r.kt)("code",null,"API > Minhas Aplica\xe7\xf5es"),", selecione sua aplica\xe7\xe3o e clique na aba ",(0,r.kt)("code",null,"Desenvolvimento"),";")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"Client Secret Desenvolvimento")," Conta Gerencianet > API > Aplica\xe7\xf5es > Sua Aplica\xe7\xe3o > Client Secret Desenvolvimento")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"Client ID Produ\xe7\xe3o")," Conta Gerencianet > API > Aplica\xe7\xf5es > Sua Aplica\xe7\xe3o > Client ID Produ\xe7\xe3o")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"Client Secret Produ\xe7\xe3o"),' Conta Gerencianet > API > Aplica\xe7\xf5es > Sua Aplica\xe7\xe3o > Client Secret Produ\xe7\xe3o As credenciais devem ser da sua Aplica\xe7\xe3o na Gerencianet. Para criar uma nova Aplica\xe7\xe3o, entre em sua conta Gerencianet, acesse o menu "API" e clique em "Minhas Aplica\xe7\xf5es" -> "Nova aplica\xe7\xe3o".')),(0,r.kt)("admonition",{title:"Observa\xe7\xe3o:",type:"note"},(0,r.kt)("p",{parentName:"admonition"},'Para criar sua aplica\xe7\xe3o, logue em sua conta Gerencianet, acesse o menu superior "API", depois clique em "',(0,r.kt)("em",{parentName:"p"},"Minhas Aplica\xe7\xf5es > Nova Aplica\xe7\xe3o"),'" e defina um nome para a sua aplica\xe7\xe3o.')),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"campos-extras-obrigat\xf3rios"},"Campos Extras Obrigat\xf3rios"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Campo Logradouro (do endere\xe7o)"),(0,r.kt)("li",{parentName:"ul"},"Campo Bairro"),(0,r.kt)("li",{parentName:"ul"},"Campo N\xfamero (do endere\xe7o)"),(0,r.kt)("li",{parentName:"ul"},"Campo Complemento (do endere\xe7o)"),(0,r.kt)("li",{parentName:"ul"},"Campo Telefone (do cliente)"),(0,r.kt)("li",{parentName:"ul"},"Campo CPF (do cliente)"),(0,r.kt)("li",{parentName:"ul"},"Campo Data de Nascimento (do cliente)")),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"configura\xe7\xf5es-do-boleto-banc\xe1rio"},"Configura\xe7\xf5es do Boleto Banc\xe1rio"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Dias para vencimento"),(0,r.kt)("li",{parentName:"ul"},"Desconto para pagamento no Boleto")),(0,r.kt)("p",null,"Recomendamos que antes de disponibilizar pagamentos pela Gerencianet, o lojista realize testes de cobran\xe7a com o sandbox (ambiente de testes) ativado para verificar se o procedimento de pagamento est\xe1 acontecendo conforme esperado."),(0,r.kt)("admonition",{title:"ATEN\xc7\xc3O",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Importante salientar que ",(0,r.kt)("strong",{parentName:"p"},"os boletos gerados em sandbox n\xe3o s\xe3o v\xe1lidos e n\xe3o podem ser pagos"),', possuem a linha digit\xe1vel "zerada" e uma marca d\'\xe1gua ao fundo informando ser um boleto de teste.'),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},'Os pagamentos de cobran\xe7as de sandbox utilizando cart\xe3o de cr\xe9dito s\xe3o fict\xedcios, mesmo se utilizar um cart\xe3o "real".'),' Todos os pagamentos de cart\xe3o neste ambiente ter\xe3o o pagamento confirmado automaticamente, mas \xe9 apenas uma altera\xe7\xe3o de status para "Pago". Este recurso permite que voc\xea teste a notifica\xe7\xe3o do status ',(0,r.kt)("code",null,"paid"),"."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Isso significa que todos os pagamentos realizados em sandbox n\xe3o s\xe3o reais e, portanto, n\xe3o h\xe1 cobran\xe7a de nenhuma import\xe2ncia financeira.")," "),(0,r.kt)("p",{parentName:"admonition"},"\xc9 importante saber que as palavras ",(0,r.kt)("strong",{parentName:"p"},"Playground, Sandbox e Ambiente de Desenvolvimento"),", no contexto da Gerencianet, s\xe3o sin\xf4nimos no sentido de fazerem refer\xeancia ao local de testes que oferecemos em que voc\xea pode testar \xe0 vontade sua integra\xe7\xe3o com a API.")),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"4-erros-comuns-de-integra\xe7\xe3o"},"4. Erros Comuns de Integra\xe7\xe3o:"),(0,r.kt)("p",null,"Ainda que nenhum destes erros de valida\xe7\xe3o sejam retornados, a API Gerencianet poder\xe1 retornar erros referentes \xe0 gera\xe7\xe3o da cobran\xe7a. Para interpretar os retornos da API e, claro, corrigir poss\xedveis erros de valida\xe7\xe3o de dados ou outros similares, acesse a p\xe1gina Interpretando erros da API.")))}k.isMDXComponent=!0}}]);