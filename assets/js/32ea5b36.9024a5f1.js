"use strict";(self.webpackChunkwebsite_efi=self.webpackChunkwebsite_efi||[]).push([[7597],{4695:function(e,a,o){o.d(a,{GA:function(){return c},N1:function(){return s},T7:function(){return u},d6:function(){return d},jS:function(){return i},mj:function(){return l}});var n=o(7294),r=o(2949);function t(e){var a=e.children,o=e.backgroundColor,r=e.color;return n.createElement("span",{style:{backgroundColor:o,color:r,borderRadius:"12px",padding:"3px 10px 3px 10px",fontSize:"15px"}},a)}function s(e){return t({children:e.children,backgroundColor:"rgba(87,167,59,0.4)",color:"dark"===(0,r.I)().colorMode?"rgba(162,222,142,1)":"rgba(36,121,7,1)"})}function i(e){return t({children:e.children,backgroundColor:"rgba(243,156,18,0.4)",color:"dark"===(0,r.I)().colorMode?"rgba(252,213,151,1)":"rgba(166,102,0,1)"})}function l(e){return t({children:e.children,backgroundColor:"rgba(179,228,163,0.4)",color:"dark"===(0,r.I)().colorMode?"rgba(162,222,142,1)":"rgba(36,121,7,1)"})}function d(e){return t({children:e.children,backgroundColor:"rgba(11,161,194,0.4)",color:"dark"===(0,r.I)().colorMode?"rgba(119,214,234,1)":"rgba(0,97,119,1)"})}function c(e){return t({children:e.children,backgroundColor:"rgba(253,132,128,0.4)",color:"dark"===(0,r.I)().colorMode?"rgba(255,176,173,1)":"rgba(217,30,24,1)"})}function u(e){return t({children:e.children,color:"rgba(243,112,33,1)"})}},6745:function(e,a,o){o.d(a,{Z:function(){return d}});var n=o(7294),r=o(3253),t=o.n(r),s=o(4223),i=o(8189),l=o(5585);function d(e){var a=e.filename,o=n.useState(!1),r=o[0],d=o[1];var c=(0,n.useState)(""),u=c[0],m=c[1];return(0,n.useEffect)((function(){fetch(a).then((function(e){return e.text()})).then((function(e){return m(e)})).catch((function(e){return console.log(e)}))})),n.createElement("div",null,n.createElement("button",{className:"buttonModify2 button-referencia",onClick:function(){d(!0)}},"Consultar Atributos",n.createElement("svg",{width:"13.5",height:"13.5","aria-hidden":"true",viewBox:"0 0 24 24",class:"iconExternalLink_node_modules-@docusaurus-theme-classic-lib-theme-Icon-ExternalLink-styles-module"},n.createElement("path",{fill:"currentColor",d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"}))),n.createElement(t(),{className:"modal",isOpen:r,onRequestClose:function(){d(!1)},ariaHideApp:!1,contentLabel:"Modal de exemplo"},n.createElement("div",{className:"conteudo-modal"},n.createElement("div",{className:"col-50"},n.createElement(s.D,{children:u,remarkPlugins:[l.Z],rehypePlugins:[i.Z]})))))}},8951:function(e,a,o){o.r(a),o.d(a,{assets:function(){return k},contentTitle:function(){return m},default:function(){return f},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return b}});var n=o(7462),r=o(3366),t=(o(7294),o(3905)),s=o(4866),i=o(5162),l=o(4695),d=o(6745),c=["components"],u={id:"Webhook",title:"Webhook",hide_title:!0,sidebar_label:"Webhook"},m=void 0,p={unversionedId:"APIAberturaContas/Webhook",id:"APIAberturaContas/Webhook",title:"Webhook",description:"Webhook",source:"@site/docs/APIAberturaContas/Webhook.md",sourceDirName:"APIAberturaContas",slug:"/APIAberturaContas/Webhook",permalink:"/documentacao-tecnica-efi/docs/APIAberturaContas/Webhook",draft:!1,tags:[],version:"current",frontMatter:{id:"Webhook",title:"Webhook",hide_title:!0,sidebar_label:"Webhook"},sidebar:"someSidebar",previous:{title:"Cadastro Simplificado",permalink:"/documentacao-tecnica-efi/docs/APIAberturaContas/CadastroSimplificado"},next:{title:"Introdu\xe7\xe3o",permalink:"/documentacao-tecnica-efi/docs/APICobrancas/Introducao"}},k={},b=[{value:"Entendendo o padr\xe3o mTLS",id:"entendendo-o-padr\xe3o-mtls",level:3},{value:"Exemplos de configura\xe7\xf5es de servidor",id:"exemplos-de-configura\xe7\xf5es-de-servidor",level:3},{value:"Skip-mTLS",id:"skip-mtls",level:4},{value:"Como cadastrar o skip-mTLS:",id:"como-cadastrar-o-skip-mtls",level:4},{value:"Configurar o webhook",id:"configurar-o-webhook",level:3},{value:"Detalhar webhook",id:"detalhar-webhook",level:3},{value:"Listar webhooks",id:"listar-webhooks",level:3},{value:"Cancelar webhook",id:"cancelar-webhook",level:3}],h={toc:b},v="wrapper";function f(e){var a=e.components,o=(0,r.Z)(e,c);return(0,t.kt)(v,(0,n.Z)({},h,o,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("h1",{className:"titulo"},"Webhook"),(0,t.kt)("div",{className:"subtitulo"},(0,t.kt)("div",{className:"light"},"Esta se\xe7\xe3o re\xfane endpoints para gerenciamento de notifica\xe7\xf5es por parte do PSP recebedor ao usu\xe1rio recebedor."),(0,t.kt)("hr",null),(0,t.kt)("h3",{id:"entendendo-o-padr\xe3o-mtls"},"Entendendo o padr\xe3o mTLS"),(0,t.kt)("p",null,"  Por norma do Banco Central, ser\xe1 necess\xe1rio a inser\xe7\xe3o de uma chave p\xfablica da Ef\xed em seu servidor para que a comunica\xe7\xe3o obede\xe7a o padr\xe3o mTLS. Em seu dom\xednio que representa o seu servidor, dever\xe1 ser feita uma configura\xe7\xe3o para exigir a chave p\xfablica (mTLS) que estamos disponibilizando para que ocorra a autentica\xe7\xe3o m\xfatua."),(0,t.kt)("p",null,"  A Ef\xed ir\xe1 fazer 2 requisi\xe7\xf5es para o seu dom\xednio (servidor):"),(0,t.kt)("ol",null,(0,t.kt)("li",null,"Primeira Requisi\xe7\xe3o: Vamos certificar que seu servidor esteja exigindo uma chave p\xfablica da Ef\xed. Isso ser\xe1 feito ao enviar uma requisi\xe7\xe3o sem certificado e seu servidor n\xe3o dever\xe1 aceitar a requisi\xe7\xe3o. Uma vez respondido com a recusa ser\xe1 enviado a 2\xba requisi\xe7\xe3o.",(0,t.kt)("br",null)),(0,t.kt)("li",null,'Segunda Requisi\xe7\xe3o: Enviaremos a notifica\xe7\xe3o junto com a nossa chave p\xfablica, o seu servidor que deve conter a chave p\xfablica disponibilizada dever\xe1 realizar o "Hand-Shake" e assim a comunica\xe7\xe3o ser estabelecida.',(0,t.kt)("br",null),(0,t.kt)("br",null))),"\xc9 necess\xe1rio que o seu servidor tenha a vers\xe3o m\xednima do TLS 1.2. Mais detalhes sobre o TLS ",(0,t.kt)("a",{href:"https://dev.gerencianet.com.br/docs/atualizacao-tls-12",target:"_blank"},"aqui"),".  ",(0,t.kt)("br",null),(0,t.kt)("br",null),"Em seu servidor voc\xea deve configurar uma rota 'POST' com uma resposta padr\xe3o como uma string \"200\". Deve ser inserido o nosso certificado de produ\xe7\xe3o ou homologa\xe7\xe3o em seu servidor, abaixo temos alguns exemplos.",(0,t.kt)("br",null),(0,t.kt)("br",null),(0,t.kt)("div",{className:"admonition_tip"},(0,t.kt)("div",null,(0,t.kt)("img",{src:"/img/exclamation-triangle-green.svg"})," ",(0,t.kt)("b",null,"Servidores dedicados")),"Recomenda-se que voc\xea tenha um servidor dedicado para conseguir realizar as configura\xe7\xf5es do webhook, uma vez que \xe9 necess\xe1rio ter acesso a alguns arquivos para realizar as configura\xe7\xf5es como nos exemplos abaixo."),(0,t.kt)("br",null),(0,t.kt)("div",{className:"admonition_info"},(0,t.kt)("div",null,(0,t.kt)("img",{src:"/img/info-circle-blue.svg"})," ",(0,t.kt)("b",null,"Hospedagens compartilhadas")),(0,t.kt)("p",null,"Para hospedagem em servidores compartilhados pode haver restri\xe7\xf5es relativas a inser\xe7\xe3o de certificados gerados por outra entidade, como o nosso CA por exemplo. Caso tenha problemas, orientamos a ",(0,t.kt)("a",{parentName:"p",href:"https://sistema.gerencianet.com.br/tickets/criar"},"abertura de um ticket")," informando como assunto: ",(0,t.kt)("strong",{parentName:"p"},"mTLS em hospedagem compartilhada"),"  ou entre em contato pelo ",(0,t.kt)("a",{parentName:"p",href:"https://discord.gg/duNqYs24"},"nosso canal #api-abertura-contas no Discord"),".  Analisaremos a situa\xe7\xe3o para atuarmos em conjunto em seu aux\xedlio.")),(0,t.kt)("br",null),(0,t.kt)("h3",{id:"exemplos-de-configura\xe7\xf5es-de-servidor"},"Exemplos de configura\xe7\xf5es de servidor"),(0,t.kt)("p",null,"  Para configurar seu servidor, voc\xea precisar\xe1 das chaves p\xfablicas da Ef\xed. Abaixo est\xe3o os endere\xe7os das chaves para os ambientes de Produ\xe7\xe3o e Homologa\xe7\xe3o. Essas chaves devem ser baixadas e dispostas em seu servidor.",(0,t.kt)("br",null),(0,t.kt)("br",null)),(0,t.kt)("div",null,(0,t.kt)("table",{className:"table"},(0,t.kt)("tbody",null,(0,t.kt)("tr",null,(0,t.kt)("th",null,"Atributo"),(0,t.kt)("th",{align:"center"},"URL da chave p\xfablica")),(0,t.kt)("tr",null,(0,t.kt)("td",null,(0,t.kt)("b",null,"Produ\xe7\xe3o")),(0,t.kt)("td",{align:"left"},(0,t.kt)("code",null,"https://pix.gerencianet.com.br/webhooks/chain-pix-prod.crt"))),(0,t.kt)("tr",null,(0,t.kt)("td",null,(0,t.kt)("b",null,"Homologa\xe7\xe3o")),(0,t.kt)("td",{align:"left"},(0,t.kt)("code",null,"https://pix.gerencianet.com.br/webhooks/chain-pix-sandbox.crt")))))),(0,t.kt)("br",null),(0,t.kt)("br",null),"Os trechos de c\xf3digo abaixo buscam exemplificar as configura\xe7\xf5es necess\xe1rias em seu servidor para que seja poss\xedvel realizar o ",(0,t.kt)("em",null,"hand-shake")," com nossos servidores.",(0,t.kt)(s.Z,{defaultValue:"Python",values:[{label:"Python",value:"Python"},{label:"Nginx",value:"Nginx"},{label:"Node",value:"Node"},{label:"Apache",value:"Apache"},{label:"PHP",value:"PHP"}],mdxType:"Tabs"},(0,t.kt)(i.Z,{value:"Python",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-python"},'from flask import Flask, jsonify, request\nimport ssl\nimport json\napp = Flask(__name__)\n\n@app.route("/", methods=["POST"])\ndef imprimir():\n  response = {"status": 200}\n  return jsonify(response)\n\n\n@app.route("/pix", methods=["POST"])\ndef imprimirPix():\n  imprime = print(request.json)\n  data = request.json\n  with open(\'data.txt\', \'a\') as outfile:\n      outfile.write("\\n")\n      json.dump(data, outfile)\n  return jsonify(imprime)\n\nif __name__ == "__main__":\n  context = ssl.SSLContext(ssl.PROTOCOL_TLS_SERVER)\n  context.verify_mode = ssl.CERT_REQUIRED\n  context.load_verify_locations(\'caminho-certificados/certificado-p\xfablico-Gerencianet.crt\')\n  context.load_cert_chain(\n      \'caminho-certificados/server_ssl.crt.pem\',\n      \'caminho-certificados/server_ssl.key.pem\')\n  app.run(ssl_context=context, host=\'0.0.0.0\')\n#Desenvolvido pela Consultoria T\xe9cnica da Ef\xed\n'))),(0,t.kt)(i.Z,{value:"Nginx",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-json"},"server {\n  #\n  # ...\n  #\n  listen [::]:443 ssl ipv6only=on;\n  listen 443 ssl;\n  ssl_certificate server_ssl.crt.pem;\n  ssl_certificate_key server_ssl.key.pem;\n  ssl_client_certificate /root/chain-pix-webhooks-prod.crt;\n  ssl_verify_client optional;\n  ssl_verify_depth 3;\n  #\n  # ...\n  #\n  location /webhook {\n      if ($ssl_client_verify != SUCCESS) {\n          return 403;\n      }\n      proxy_pass /webhook;\n  }\n}\n#Desenvolvido pela Consultoria T\xe9cnica da Ef\xed\n"))),(0,t.kt)(i.Z,{value:"Node",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-javascript"},'const express = require("express");\nconst fs = require("fs");\nconst https = require("https");\nvar logger = require(\'morgan\');\n\nconst httpsOptions = {\ncert: fs.readFileSync(""), // Certificado fullchain do dominio\nkey: fs.readFileSync("/"), // Chave privada do dom\xednio\nca: fs.readFileSync(""),   // Certificado p\xfablico da Gerencianet\nminVersion: "TLSv1.2",\nrequestCert: true,\nrejectUnauthorized: false, //Mantenha como false para que os demais endpoints da API n\xe3o rejeitem requisi\xe7\xf5es sem MTLS\n};\n\nconst app = express();\nconst httpsServer = https.createServer(httpsOptions, app);\nconst PORT = 443;\n\napp.use(logger(\'dev\'));  // Comente essa linha caso n\xe3o queira que seja exibido o log do servidor no seu console\napp.use(express.json());\napp.use(express.urlencoded({ extended: false }));\n\n// Endpoint para configura\xe7\xe3o do webhook, voc\xea precisa cadastrar https://SEUDOMINIO.com/webhook\napp.post("/webhook", (request, response) => {\n  // Verifica se a requisi\xe7\xe3o que chegou nesse endpoint foi autorizada\n  if (request.socket.authorized) { \n      response.status(200).end();\n  } else {\n      response.status(401).end();\n  }\n});\n\n// Endpoind para recep\xe7\xe3o do webhook tratando o /pix\napp.post("/webhook/pix", (request, response) => {\n  if (request.socket.authorized){\n      //Seu c\xf3digo tratando a callback\n      /* EXEMPLO:\n      var body = request.body;\n      filePath = __dirname + "/data.json";\n      fs.appendFile(filePath, JSON.stringify(body) + "\\n", function (err) {\n          if (err) {\n              console.log(err);\n          } else {\n              response.status(200).end();\n          }\n      })*/\n      response.status(200).end();\n  }else{\n      response.status(401).end();\n  }\n});\n\nhttpsServer.listen(PORT, () =>\n  console.log(`Express server currently running on port ${PORT}`)\n);\n#Desenvolvido pela Consultoria T\xe9cnica da Ef\xed\n'))),(0,t.kt)(i.Z,{value:"Apache",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-json"},'# ********************************************************************************* #\n# Utilize o primeiro exemplo, caso queira requerir o certificado para autentica\xe7\xe3o  #\n# m\xfatua em qualquer rota do dom\xednio indicado no VirtualHost.                        #\n# Funciona bem para sub-dom\xednios. Exemplo: https://www.webhook.seu_dominio.com.br   # \n# ********************************************************************************* #\n\n<IfModule mod_ssl.c>\n<VirtualHost *:443> # Porta HTTPS\n  #\n  # ...\n  #\n\n  SSLCertificateFile /caminho_certificado/fullchain_ssl.pem #fullchain associado ao seu certificado SSL do dom\xednio\n  SSLCertificateKeyFile /caminho_certificado/privkey_ssl.pem #privkey associada ao seu certificado SSL do dom\xednio\n\n  #Chave p\xfablica da Ef\xed\n  SSLCACertificateFile /caminho_certificado/chain-pix-prod.crt\n  \n  # mTLS Ef\xed\n  SSLVerifyClient require\n  SSLVerifyDepth 3\n    \n  # Tratando o /pix, redirecionando as requisi\xe7\xf5es sempre para /webhook\n  Alias "/pix/" "/var/www/webhook/index.php"\n  Alias "/pix" "/var/www/webhook/index.php"\n\n  #\n  # ...\n  #\n</VirtualHost>\n</IfModule>\n\n\n# ******************************************************************************** #\n# Utilize o segundo exemplo, caso queira requerir o certificado para autentica\xe7\xe3o  #\n# m\xfatua em apenas uma rota do dom\xednio indicado no VirtualHost.                     #\n# Exemplo: https://www.seu_dominio.com.br/webhook/                                 #     \n# ******************************************************************************** #\n\n<IfModule mod_ssl.c>\n<VirtualHost *:443> # Porta HTTPS\n  #\n  # ...\n  #\n\n  SSLCertificateFile /caminho_certificado/fullchain_ssl.pem #fullchain associado ao seu certificado SSL do dom\xednio\n  SSLCertificateKeyFile /caminho_certificado/privkey_ssl.pem #privkey associada ao seu certificado SSL do dom\xednio\n\n  #Chave p\xfablica da Gerencianet\n  SSLCACertificateFile /caminho_certificado/chain-pix-prod.crt\n  \n  # mTLS Gerencianet\n  SSLVerifyClient none\n  SSLProtocol TLSv1.2\n    \n  <Location "/webhook">\n      SSLVerifyClient require\n      SSLVerifyDepth 3\n  </Location>\n  \n  # Tratando o /pix, redirecionando as requisi\xe7\xf5es sempre para /webhook\n  Alias "/webhook/pix/" "/var/www/webhook/index.php"\n  Alias "/webhook/pix" "/var/www/webhook/index.php"\n\n  #\n  # ...\n  #\n</VirtualHost>\n</IfModule>\n'))),(0,t.kt)(i.Z,{value:"PHP",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-php"},"# ********************************************************************************** #\n# Para o funcionamento deste exemplo \xe9 necess\xe1rio que seu servidor tenha configurado #\n# o certificado do mTLS, com o direcionamento para este arquivo, e tamb\xe9m com a      #\n# tratativa do /pix. Assim como \xe9 feito em nosso exemplo de servidores Apache.       #\n# ********************************************************************************** #\n\n<?php\n\nfunction resposta($status, $mensagem, $dados)\n{\n  $resposta['status'] = $status;\n  $resposta['mensagem'] = $mensagem;\n  $resposta['dados'] = $dados;\n  $json_resposta = '<pre>' . json_encode($resposta, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES) . '</pre>';\n\n  header(\"HTTP/1.1 \" . $status);\n  echo $json_resposta;\n}\n\nfunction salvar($dados)\n{\n  // Crie um arquivo .;json para salvar as informa\xe7\xf5es\n  $nomeArquivo = './dados.json';\n  $dadosGravados = json_decode(file_get_contents($nomeArquivo), true);\n  $arquivo = fopen($nomeArquivo, 'w');\n\n  // Incrementa as informa\xe7\xf5es enviadas com o que j\xe1 havia gravado\n  array_push($dadosGravados, $dados);\n\n  if (fwrite($arquivo, json_encode($dadosGravados))) {\n      resposta(200, \"Requisi\xe7\xe3o realizada com sucesso!\", $dados);\n  } else {\n      resposta(300, \"Falha ao salvar os dados da requisi\xe7\xe3o.\", $dados);\n  }\n\n  fclose($arquivo);\n}\n\nfunction requisicao($metodo, $body, $parametros)\n{\n  switch ($metodo) {\n      case 'POST':\n          salvar($body);\n          break;\n      case 'GET':\n          resposta(200, \"Requisi\xe7\xe3o realizada com sucesso!\", $body);\n          break;\n  }\n}\n\n// Obt\xe9m o m\xe9todo HTTP, body e par\xe2metros da requisi\xe7\xe3o\n$metodo = $_SERVER['REQUEST_METHOD'];\n$parametros = explode('/', trim($_SERVER['REQUEST_URI'], '/'));\n$body = json_decode(file_get_contents('php://input'), true);\n\ntry {\n  requisicao($metodo, $body, $parametros);\n} catch (Exception $e) {\n  resposta(400, $e->getMessage(), $e);\n}\n")))),(0,t.kt)("p",null,"  Para ter um ter um SSL v\xe1lido, voc\xea deve entrar em contato com uma Autoridade Certificadora e gerar a chave privada ",(0,t.kt)("code",null,"server_ssl.key.pem")," e uma p\xfablica ",(0,t.kt)("code",null,"server_ssl.crt.pem"),", assim voc\xea valida a integridade da conex\xe3o. Voc\xea consegue realizar isso de forma gratuita utilizando um utilit\xe1rio como o ",(0,t.kt)("a",{href:"https://certbot.eff.org/",target:"_blank"},"Certbot")," por exemplo."),(0,t.kt)("h4",{id:"skip-mtls"},"Skip-mTLS"),(0,t.kt)("p",null,"Para hospedagem em servidores compartilhados pode haver restri\xe7\xf5es relativas a inser\xe7\xe3o de certificados gerados por outra entidade, como o nosso CA por exemplo. Por isto disponibilizamos o skip mTLS que vai permitir o cadastro do webhook. ",(0,t.kt)("br",null)),(0,t.kt)("p",null,"\xc9 necess\xe1rio ressaltar que sempre enviaremos o certificado nos webhooks, seja no cadastro ou na notifica\xe7\xe3o de Pix. Mas quando o skip-mTLS \xe9 utilizado, voc\xea, integrador, fica respons\xe1vel por validar o nosso certificado.",(0,t.kt)("br",null)),(0,t.kt)("p",null,"Caso opte por utilizar o atributo skip mTLS, ou seja, sem a valida\xe7\xe3o mTLS no seu servidor, voc\xea dever\xe1 implementar medidas para garantir que quem est\xe1 enviando os webhooks ao seu servidor \xe9 de fato a Ef\xed. Deixamos como sugest\xe3o as duas formas valida\xe7\xe3o seguintes, mas recomendamos fortemente que utilize as duas em conjunto:",(0,t.kt)("br",null)),(0,t.kt)("ul",null,(0,t.kt)("li",null,"Verifique o IP de comunica\xe7\xe3o: Voc\xea pode restringir a comunica\xe7\xe3o ao dom\xednio do webhhook cadastrado para aceitar apenas mensagens do IP utilizado pela Ef\xed.",(0,t.kt)("br",null)),(0,t.kt)("code",null,"IP utilizado atualmente em nossas comunica\xe7\xf5es: '34.193.116.226'."),(0,t.kt)("li",null,"Adicione uma hash ao final da URL que ser\xe1 cadastrada no webhook: Esse hmac ser\xe1 uma identifica\xe7\xe3o pr\xf3pria, criado por voc\xea, que ser\xe1 acrescentado ao final da URL no momento do cadastro do webhook e ser\xe1 utilizado para validar a origem da notifica\xe7\xe3o. Dessa forma, todos os webhooks enviados a seu servidor, ser\xe3o entregues com essa identifica\xe7\xe3o final e ent\xe3o e ent\xe3o sua aplica\xe7\xe3o deve validar a presen\xe7a da mesma.",(0,t.kt)("br",null),"Exemplo:",(0,t.kt)("br",null),"URL de notifica\xe7\xe3o original: ",(0,t.kt)("code",null,"https://seu_dominio.com.br/webhook/"),(0,t.kt)("br",null),"Como dever\xe1 ser cadastrada com a hash: ",(0,t.kt)("code",null,"https://seu_dominio.com.br/webhook/?hmac=xyz"))),(0,t.kt)("h4",{id:"como-cadastrar-o-skip-mtls"},"Como cadastrar o skip-mTLS:"),(0,t.kt)("p",null,"  Voc\xea deve utilizar o endpoint de configurar o webhook Pix, passando no header da requisi\xe7\xe3o o par\xe2metro ",(0,t.kt)("code",null,"x-skip-mtls-checking")," com o valor ",(0,t.kt)("code",null,"true"),", ou ",(0,t.kt)("code",null,"false")," caso n\xe3o deseje mais utilizar essa funcionalidade.",(0,t.kt)("br",null),(0,t.kt)("br",null),"\nA imagem abaixo mostra como este par\xe2metro deve ser informado:"),(0,t.kt)("div",{className:"img-container"},(0,t.kt)("img",{src:"/img/put_webhook.png"})),(0,t.kt)("br",null),(0,t.kt)("h3",{id:"configurar-o-webhook"},"Configurar o webhook"),(0,t.kt)("p",null,"Configura webhook para a API Abertura de Contas."),(0,t.kt)("br",null),(0,t.kt)("div",{className:"post"},(0,t.kt)("details",{className:"col-100"},(0,t.kt)("summary",null,(0,t.kt)("b",null,(0,t.kt)(l.N1,{mdxType:"HighlightPost"},"POST")," /cadastro/webhook")),(0,t.kt)("div",{className:"post-div"},(0,t.kt)("div",{className:"col-65"},"Requer autoriza\xe7\xe3o para o escopo: ",(0,t.kt)("code",null,"gn.registration.webhook.write")),(0,t.kt)("div",{className:"col-35"},(0,t.kt)(d.Z,{filename:"/markdown/payments/webhooks/Configurar_webhook.md",mdxType:"Modal"}))),(0,t.kt)("br",null),(0,t.kt)("b",null,"Requisi\xe7\xe3o"),(0,t.kt)(s.Z,{defaultValue:"exemplo",values:[{label:"Adicionar Webhook",value:"exemplo"},{label:"Editar Webhook",value:"exemplo2"}],mdxType:"Tabs"},(0,t.kt)(i.Z,{value:"exemplo",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-json"},'{\n"webhookUrl": "https://gerencianet.com.br/meu-webhook"\n}\n'))),(0,t.kt)(i.Z,{value:"exemplo2",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-json"},'{\n"url": "https://gerencianet.com.br/meu-webhook",\n"chave": "92ecc0a8-9631-4601-a188-feacf8288c13"\n}\n')))),(0,t.kt)("br",null),(0,t.kt)("b",null,"Respostas"),(0,t.kt)("br",null),(0,t.kt)("p",null,"  As respostas abaixo representam Sucesso(201) e Falhas/erros do consumo."),(0,t.kt)(s.Z,{defaultValue:"saida",values:[{label:"200(Success)",value:"saida"},{label:"400(Bad request)",value:"400"},{label:"401(Unauthorized)",value:"401"},{label:"500(Error)",value:"500"}],mdxType:"Tabs"},(0,t.kt)(i.Z,{value:"saida",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-json"},'{\n"identificadorWebhook": "92ecc0a8-9631-4601-a188-feacf8288c13"\n}\n'))),(0,t.kt)(i.Z,{value:"400",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-json"},'URL inv\xe1lido\n{\n"nome": "url_webhook",\n"mensagem": "A URL informada para webhook \xe9 inv\xe1lida."\n}\n\nOu\n\nProtocolo inv\xe1lido\n{\n"nome": "protocolo_da_url",\n"mensagem": "A URL do webhook deve usar o protocolo HTTPS."\n}\n\nOu\n\nmTLS n\xe3o configurado\n\n{\n"nome": "mtls_nao_configurado",\n"mensagem": "A autentica\xe7\xe3o TLS m\xfatua n\xe3o est\xe1 configurada no URL fornecido."\n}\n\nOu\n\nURL inacess\xedvel\n\n{\n"nome": "url_inacessivel",\n"mensagem": "A URL informada est\xe1 inacess\xedvel."\n}\n\nOu\n\nURL timeout\n\n{\n"nome": "limite_de_tempo_atingido_para_url",\n"mensagem": "A URL informada atingiu o tempo limite de resposta."\n}\n\nOu\n\nURL falhou com erro\n\n{\n"nome": "url_falhou_com_erro",\n"mensagem": "A requisi\xe7\xe3o na URL informada falhou com o erro."\n}\n\nOu\n\nProtocolo n\xe3o HTTPS\n\n{\n"nome": "protocolo_da_url",\n"mensagem": "A URL do webhook deve usar o protocolo HTTPS."\n}\n\nOu\n\nURL responde HTTP\n\n{\n"nome": "erro_de_codigo",\n"mensagem": "A URL informada respondeu com o c\xf3digo HTTP."\n}\n\nOu\n\nURL n\xe3o responde\n\n{\n"nome": "url_informada_nao_existe",\n"mensagem": "N\xe3o foi poss\xedvel receber uma resposta da URL informada."\n}\n\nOu\n\nWebhook n\xe3o encontrado\n\n{\n"nome": "chave_invalida",\n"mensagem": "N\xe3o foi poss\xedvel encontrar um webhook com a chave informada."\n}\n\nOu\n\nURL cadastrada\n\n{\n"nome": "url_cadastrada",\n"mensagem": "A URL j\xe1 foi cadastrada."\n}\n'))),(0,t.kt)(i.Z,{value:"401",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-json"},"Este erro ocorre na seguinte situa\xe7\xe3o:\n\n* Integrador n\xe3o tem permiss\xe3o para o escopo de servi\xe7o necess\xe1rio para consumir este endpoint.\n"))),(0,t.kt)(i.Z,{value:"500",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-json"},'{\n"nome": "erro_aplicacao",\n"mensagem": "Ocorreu um erro na aplica\xe7\xe3o."\n}\n')))))),(0,t.kt)("br",null),(0,t.kt)("h3",{id:"detalhar-webhook"},"Detalhar webhook"),(0,t.kt)("p",null,"  Detalha webhook configurado para a API Abertura de Contas."),(0,t.kt)("div",{className:"get"},(0,t.kt)("details",{className:"col-100"},(0,t.kt)("summary",null,(0,t.kt)("b",null,(0,t.kt)(l.d6,{mdxType:"HighlightGet"},"GET")," /cadastro/webhook/",(0,t.kt)(l.T7,{mdxType:"HighlightVar"},":identificadorWebhook"))),(0,t.kt)("div",{className:"get-div"},(0,t.kt)("div",{className:"col-65"},"Requer autoriza\xe7\xe3o para o escopo: ",(0,t.kt)("code",null,"webhook.read")),(0,t.kt)("div",{className:"col-35"},(0,t.kt)(d.Z,{filename:"/markdown/payments/webhooks/Consultar_webhook.md",mdxType:"Modal"}))),(0,t.kt)("br",null),(0,t.kt)("b",null,"Respostas"),(0,t.kt)("br",null),(0,t.kt)("p",null,"  As respostas abaixo representam Sucesso(201) e Falhas/erros do consumo."),(0,t.kt)(s.Z,{defaultValue:"saida",values:[{label:"200(Success)",value:"saida"},{label:"400(Bad request)",value:"400"},{label:"401(Unauthorized)",value:"401"},{label:"500(Error)",value:"500"}],mdxType:"Tabs"},(0,t.kt)(i.Z,{value:"saida",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-json"},'{\n"webhookUrl": "https://gerencianet.com.br/meu-webhook",\n"identificadorWebhook": "92ecc0a8-9631-4601-a188-feacf8288c13",\n"criacao": "2021-10-26T11:23:35.000Z"\n}\n'))),(0,t.kt)(i.Z,{value:"400",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-json"},'{\n"nome": "identificador_webhook",\n"mensagem": "N\xe3o foi poss\xedvel encontrar um webhook com o identificador webhook informado."\n}\n'))),(0,t.kt)(i.Z,{value:"401",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-json"},"Unauthorized. Este erro ocorre na seguinte situa\xe7\xe3o:\n\n* Integrador n\xe3o tem permiss\xe3o para o escopo de servi\xe7o necess\xe1rio para consumir este endpoint.\n"))),(0,t.kt)(i.Z,{value:"500",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-json"},'{\n"nome": "erro_aplicacao",\n"mensagem": "Ocorreu um erro na aplica\xe7\xe3o."\n}\n')))))),(0,t.kt)("br",null),(0,t.kt)("h3",{id:"listar-webhooks"},"Listar webhooks"),(0,t.kt)("p",null,"Lista webhooks configurados para a API Abertura de Contas."),(0,t.kt)("div",{className:"get"},(0,t.kt)("details",{className:"col-100"},(0,t.kt)("summary",null,(0,t.kt)("b",null,(0,t.kt)(l.d6,{mdxType:"HighlightGet"},"GET")," /cadastro/webhooks")),(0,t.kt)("div",{className:"get-div"},(0,t.kt)("div",{className:"col-65"},"Requer autoriza\xe7\xe3o para o escopo: ",(0,t.kt)("code",null,"gn.registration.webhook.read")),(0,t.kt)("div",{className:"col-35"},(0,t.kt)(d.Z,{filename:"/markdown/payments/webhooks/Listar_webhook.md",mdxType:"Modal"}))),(0,t.kt)("br",null),(0,t.kt)("b",null,"Requisi\xe7\xe3o"),(0,t.kt)("br",null),"A requisi\xe7\xe3o enviada para esse endpoint n\xe3o precisa de um body, apenas os cabe\xe7alhos de autoriza\xe7\xe3o OAuth, par\xe2metros e o certificado da conta.",(0,t.kt)("br",null),(0,t.kt)("br",null),(0,t.kt)("b",null,"Respostas"),(0,t.kt)("br",null),(0,t.kt)("p",null,"  As respostas abaixo representam Sucesso(201) e Falhas/erros do consumo."),(0,t.kt)(s.Z,{defaultValue:"saida",values:[{label:"200(Success)",value:"saida"},{label:"400(Bad request)",value:"400"},{label:"401(Unauthorized)",value:"401"},{label:"500(Error)",value:"500"}],mdxType:"Tabs"},(0,t.kt)(i.Z,{value:"saida",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-json"},'Success\n{\n"parametros": {\n  "inicio": "2020-04-01T00:00:00.000Z",\n  "fim": "2020-04-01T23:59:59.000Z",\n  "paginacao": {\n    "paginaAtual": 0,\n    "itensPorPagina": 100,\n    "quantidadeDePaginas": 1,\n    "quantidadeTotalDeItens": 1\n  }\n},\n"webhooks": [\n  {\n    "webhookUrl": "https://gerencianet.com.br/meu-webhook",\n    "identificadorWebhook": "92ecc0a8-9631-4601-a188-feacf8288c13",\n    "criacao": "2021-10-26T11:23:35.000Z"\n  }\n]\n}\n'))),(0,t.kt)(i.Z,{value:"400",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-json"},'{\n"nome": "data_invalida",\n"mensagem": "Campo de data fim deve ser maior ou igual ao campo de data inicio."\n}\n'))),(0,t.kt)(i.Z,{value:"401",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-json"},"Unauthorized. Este erro ocorre na seguinte situa\xe7\xe3o:\n\n* Integrador n\xe3o tem permiss\xe3o para o escopo de servi\xe7o necess\xe1rio para consumir este endpoint.\n"))),(0,t.kt)(i.Z,{value:"500",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-json"},'{\n"nome": "erro_aplicacao",\n"mensagem": "Ocorreu um erro na aplica\xe7\xe3o."\n}\n')))))),(0,t.kt)("br",null),(0,t.kt)("h3",{id:"cancelar-webhook"},"Cancelar webhook"),(0,t.kt)("p",null,"Cancela webhook configurado para a API Abertura de Contas."),(0,t.kt)("div",{className:"delete"},(0,t.kt)("details",{className:"col-100"},(0,t.kt)("summary",null,(0,t.kt)("b",null,(0,t.kt)(l.GA,{mdxType:"HighlightDelete"},"DELETE"),"/cadastro/webhook/",(0,t.kt)(l.T7,{mdxType:"HighlightVar"},":identificadorWebhook"))),(0,t.kt)("div",{className:"delete-div"},(0,t.kt)("div",{className:"col-65"},"Requer autoriza\xe7\xe3o para o escopo: ",(0,t.kt)("code",null,"gn.registration.webhook.write")),(0,t.kt)("div",{className:"col-35"},(0,t.kt)(d.Z,{filename:"/markdown/payments/webhooks/Cancelar_webhook.md",mdxType:"Modal"}))),(0,t.kt)("br",null),(0,t.kt)("b",null,"Requisi\xe7\xe3o"),(0,t.kt)("br",null),"A requisi\xe7\xe3o enviada para esse endpoint n\xe3o precisa de um body, apenas os cabe\xe7alhos de autoriza\xe7\xe3o, OAuth, par\xe2metro e o certificado da conta.",(0,t.kt)("br",null),(0,t.kt)("br",null),(0,t.kt)("b",null,"Respostas"),(0,t.kt)("br",null),(0,t.kt)("p",null,"  As respostas abaixo representam Sucesso(204) e Falhas/erros do consumo."),(0,t.kt)(s.Z,{defaultValue:"saida",values:[{label:"204(Success)",value:"saida"},{label:"400(Bad request)",value:"400"},{label:"401(Unauthorized)",value:"401"},{label:"500(Error)",value:"500"}],mdxType:"Tabs"},(0,t.kt)(i.Z,{value:"saida",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-json"},"No content \n* Webhook configurado para cadastro foi cancelado.\n\n\n"))),(0,t.kt)(i.Z,{value:"400",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-json"},'{\n"nome": "identificador_webhook",\n"mensagem": "N\xe3o foi poss\xedvel encontrar um webhook com o identificador webhook informado."\n}\n'))),(0,t.kt)(i.Z,{value:"401",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-json"},"Unauthorized. Este erro ocorre na seguinte situa\xe7\xe3o:\n\n* Integrador n\xe3o tem permiss\xe3o para o escopo de servi\xe7o necess\xe1rio para consumir este endpoint.\n"))),(0,t.kt)(i.Z,{value:"500",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-json"},'{\n"nome": "erro_aplicacao",\n"mensagem": "Ocorreu um erro na aplica\xe7\xe3o."\n}\n')))))),(0,t.kt)("br",null)))}f.isMDXComponent=!0}}]);