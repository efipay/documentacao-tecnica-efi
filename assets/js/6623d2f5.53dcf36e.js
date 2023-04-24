"use strict";(self.webpackChunkwebsite_efi=self.webpackChunkwebsite_efi||[]).push([[8536],{4695:function(e,o,a){a.d(o,{GA:function(){return c},N1:function(){return s},T7:function(){return u},d6:function(){return d},jS:function(){return i},mj:function(){return l}});var n=a(7294),t=a(2949);function r(e){var o=e.children,a=e.backgroundColor,t=e.color;return n.createElement("span",{style:{backgroundColor:a,color:t,borderRadius:"12px",padding:"3px 10px 3px 10px",fontSize:"15px"}},o)}function s(e){return r({children:e.children,backgroundColor:"rgba(87,167,59,0.4)",color:"dark"===(0,t.I)().colorMode?"rgba(162,222,142,1)":"rgba(36,121,7,1)"})}function i(e){return r({children:e.children,backgroundColor:"rgba(243,156,18,0.4)",color:"dark"===(0,t.I)().colorMode?"rgba(252,213,151,1)":"rgba(166,102,0,1)"})}function l(e){return r({children:e.children,backgroundColor:"rgba(179,228,163,0.4)",color:"dark"===(0,t.I)().colorMode?"rgba(162,222,142,1)":"rgba(36,121,7,1)"})}function d(e){return r({children:e.children,backgroundColor:"rgba(11,161,194,0.4)",color:"dark"===(0,t.I)().colorMode?"rgba(119,214,234,1)":"rgba(0,97,119,1)"})}function c(e){return r({children:e.children,backgroundColor:"rgba(253,132,128,0.4)",color:"dark"===(0,t.I)().colorMode?"rgba(255,176,173,1)":"rgba(217,30,24,1)"})}function u(e){return r({children:e.children,color:"rgba(243,112,33,1)"})}},6745:function(e,o,a){a.d(o,{Z:function(){return d}});var n=a(7294),t=a(3253),r=a.n(t),s=a(4223),i=a(8189),l=a(5585);function d(e){var o=e.filename,a=n.useState(!1),t=a[0],d=a[1];var c=(0,n.useState)(""),u=c[0],m=c[1];return(0,n.useEffect)((function(){fetch(o).then((function(e){return e.text()})).then((function(e){return m(e)})).catch((function(e){return console.log(e)}))})),n.createElement("div",null,n.createElement("button",{className:"buttonModify2 button-referencia",onClick:function(){d(!0)}},"Consultar Atributos",n.createElement("svg",{width:"13.5",height:"13.5","aria-hidden":"true",viewBox:"0 0 24 24",class:"iconExternalLink_node_modules-@docusaurus-theme-classic-lib-theme-Icon-ExternalLink-styles-module"},n.createElement("path",{fill:"currentColor",d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"}))),n.createElement(r(),{className:"modal",isOpen:t,onRequestClose:function(){d(!1)},ariaHideApp:!1,contentLabel:"Modal de exemplo"},n.createElement("div",{className:"conteudo-modal"},n.createElement("div",{className:"col-50"},n.createElement(s.D,{children:u,remarkPlugins:[l.Z],rehypePlugins:[i.Z]})))))}},436:function(e,o,a){a.r(o),a.d(o,{assets:function(){return k},contentTitle:function(){return m},default:function(){return f},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return b}});var n=a(7462),t=a(3366),r=(a(7294),a(3905)),s=a(4866),i=a(5162),l=a(4695),d=a(6745),c=["components"],u={id:"Webhooks",title:"Webhooks",hide_title:!0,sidebar_label:"Webhooks"},m=void 0,p={unversionedId:"APIPix/Webhooks",id:"APIPix/Webhooks",title:"Webhooks",description:"Webhooks",source:"@site/docs/APIPix/Webhooks.md",sourceDirName:"APIPix",slug:"/APIPix/Webhooks",permalink:"/docs/APIPix/Webhooks",draft:!1,tags:[],version:"current",frontMatter:{id:"Webhooks",title:"Webhooks",hide_title:!0,sidebar_label:"Webhooks"},sidebar:"someSidebar",previous:{title:"Split de pagamento Pix",permalink:"/docs/APIPix/SplitDePagamentoPix"},next:{title:"Endpoints exclusivos Ef\xed",permalink:"/docs/APIPix/EndpointsExclusivosEfi"}},k={},b=[{value:"Entendendo o padr\xe3o mTLS",id:"entendendo-o-padr\xe3o-mtls",level:3},{value:"Exemplos de configura\xe7\xf5es de servidor",id:"exemplos-de-configura\xe7\xf5es-de-servidor",level:3},{value:"Skip-mTLS",id:"skip-mtls",level:4},{value:"Como cadastrar o skip-mTLS:",id:"como-cadastrar-o-skip-mtls",level:4},{value:"Configurar o webhook Pix",id:"configurar-o-webhook-pix",level:3},{value:"Exibir informa\xe7\xf5es do webhook Pix",id:"exibir-informa\xe7\xf5es-do-webhook-pix",level:3},{value:"Consultar lista de webhooks",id:"consultar-lista-de-webhooks",level:3},{value:"Cancelar o webhook Pix",id:"cancelar-o-webhook-pix",level:3},{value:"Recebendo Callbacks",id:"recebendo-callbacks",level:3}],v={toc:b},h="wrapper";function f(e){var o=e.components,a=(0,t.Z)(e,c);return(0,r.kt)(h,(0,n.Z)({},v,a,{components:o,mdxType:"MDXLayout"}),(0,r.kt)("h1",{className:"titulo"},"Webhooks"),(0,r.kt)("div",{className:"subtitulo"},(0,r.kt)("div",{className:"light"},"Esta se\xe7\xe3o re\xfane endpoints para gerenciamento de notifica\xe7\xf5es por parte do PSP recebedor ao usu\xe1rio recebedor."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"entendendo-o-padr\xe3o-mtls"},"Entendendo o padr\xe3o mTLS"),(0,r.kt)("p",null,"  Por norma do Banco Central, ser\xe1 necess\xe1rio a inser\xe7\xe3o de uma chave p\xfablica da Ef\xed em seu servidor para que a comunica\xe7\xe3o obede\xe7a o padr\xe3o mTLS. Em seu dom\xednio que representa o seu servidor, dever\xe1 ser feita uma configura\xe7\xe3o para exigir a chave p\xfablica (mTLS) que estamos disponibilizando para que ocorra a autentica\xe7\xe3o m\xfatua."),(0,r.kt)("p",null,"  A Ef\xed ir\xe1 fazer 2 requisi\xe7\xf5es para o seu dom\xednio (servidor):"),(0,r.kt)("ol",null,(0,r.kt)("li",null,"Primeira Requisi\xe7\xe3o: Vamos certificar que seu servidor esteja exigindo uma chave p\xfablica da Ef\xed. Isso ser\xe1 feito ao enviar uma requisi\xe7\xe3o sem certificado e seu servidor n\xe3o dever\xe1 aceitar a requisi\xe7\xe3o. Uma vez respondido com a recusa ser\xe1 enviado a 2\xba requisi\xe7\xe3o.",(0,r.kt)("br",null)),(0,r.kt)("li",null,'Segunda Requisi\xe7\xe3o: Enviaremos a notifica\xe7\xe3o junto com a nossa chave p\xfablica, o seu servidor que deve conter a chave p\xfablica disponibilizada dever\xe1 realizar o "Hand-Shake" e assim a comunica\xe7\xe3o ser estabelecida.',(0,r.kt)("br",null),(0,r.kt)("br",null))),"\xc9 necess\xe1rio que o seu servidor tenha a vers\xe3o m\xednima do TLS 1.2. Mais detalhes sobre o TLS ",(0,r.kt)("a",{href:"https://dev.gerencianet.com.br/docs/atualizacao-tls-12",target:"_blank"},"aqui"),".  ",(0,r.kt)("br",null),(0,r.kt)("br",null),"Em seu servidor voc\xea deve configurar uma rota 'POST' com uma resposta padr\xe3o como uma string \"200\". Deve ser inserido o nosso certificado de produ\xe7\xe3o ou homologa\xe7\xe3o em seu servidor, abaixo temos alguns exemplos.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("div",{className:"admonition_tip"},(0,r.kt)("div",null,(0,r.kt)("img",{src:"/img/exclamation-triangle-green.svg"})," ",(0,r.kt)("b",null,"Servidores dedicados")),"Recomenda-se que voc\xea tenha um servidor dedicado para conseguir realizar as configura\xe7\xf5es do webhook, uma vez que \xe9 necess\xe1rio ter acesso a alguns arquivos para realizar as configura\xe7\xf5es como nos exemplos abaixo."),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"exemplos-de-configura\xe7\xf5es-de-servidor"},"Exemplos de configura\xe7\xf5es de servidor"),(0,r.kt)("p",null,"  Para configurar seu servidor, voc\xea precisar\xe1 das chaves p\xfablicas da Ef\xed. Abaixo est\xe3o os endere\xe7os das chaves para os ambientes de Produ\xe7\xe3o e Homologa\xe7\xe3o. Essas chaves devem ser baixadas e dispostas em seu servidor.",(0,r.kt)("br",null),(0,r.kt)("br",null)),(0,r.kt)("div",null,(0,r.kt)("table",{className:"table"},(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Atributo"),(0,r.kt)("th",{align:"center"},"URL da chave p\xfablica")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"Produ\xe7\xe3o")),(0,r.kt)("td",{align:"left"},(0,r.kt)("code",null,"https://pix.gerencianet.com.br/webhooks/chain-pix-prod.crt"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"Homologa\xe7\xe3o")),(0,r.kt)("td",{align:"left"},(0,r.kt)("code",null,"https://pix.gerencianet.com.br/webhooks/chain-pix-sandbox.crt")))))),(0,r.kt)("br",null),(0,r.kt)("br",null),"Os trechos de c\xf3digo abaixo buscam exemplificar as configura\xe7\xf5es necess\xe1rias em seu servidor para que seja poss\xedvel realizar o ",(0,r.kt)("em",null,"hand-shake")," com nossos servidores.",(0,r.kt)(s.Z,{defaultValue:"Python",values:[{label:"Python",value:"Python"},{label:"Nginx",value:"Nginx"},{label:"Node",value:"Node"},{label:"Apache",value:"Apache"},{label:"PHP",value:"PHP"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from flask import Flask, jsonify, request\nimport ssl\nimport json\napp = Flask(__name__)\n\n@app.route("/", methods=["POST"])\ndef imprimir():\n  response = {"status": 200}\n  return jsonify(response)\n\n\n@app.route("/pix", methods=["POST"])\ndef imprimirPix():\n  imprime = print(request.json)\n  data = request.json\n  with open(\'data.txt\', \'a\') as outfile:\n      outfile.write("\\n")\n      json.dump(data, outfile)\n  return jsonify(imprime)\n\nif __name__ == "__main__":\n  context = ssl.SSLContext(ssl.PROTOCOL_TLS_SERVER)\n  context.verify_mode = ssl.CERT_REQUIRED\n  context.load_verify_locations(\'caminho-certificados/certificado-p\xfablico-Gerencianet.crt\')\n  context.load_cert_chain(\n      \'caminho-certificados/server_ssl.crt.pem\',\n      \'caminho-certificados/server_ssl.key.pem\')\n  app.run(ssl_context=context, host=\'0.0.0.0\')\n#Desenvolvido pela Consultoria T\xe9cnica da Ef\xed\n'))),(0,r.kt)(i.Z,{value:"Nginx",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},"server {\n  #\n  # ...\n  #\n  listen [::]:443 ssl ipv6only=on;\n  listen 443 ssl;\n  ssl_certificate server_ssl.crt.pem;\n  ssl_certificate_key server_ssl.key.pem;\n  ssl_client_certificate /root/chain-pix-webhooks-prod.crt;\n  ssl_verify_client optional;\n  ssl_verify_depth 3;\n  #\n  # ...\n  #\n  location /webhook {\n      if ($ssl_client_verify != SUCCESS) {\n          return 403;\n      }\n      proxy_pass /webhook;\n  }\n}\n#Desenvolvido pela Consultoria T\xe9cnica da Ef\xed\n"))),(0,r.kt)(i.Z,{value:"Node",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const express = require("express");\nconst fs = require("fs");\nconst https = require("https");\nvar logger = require(\'morgan\');\n\nconst httpsOptions = {\ncert: fs.readFileSync(""), // Certificado fullchain do dominio\nkey: fs.readFileSync("/"), // Chave privada do dom\xednio\nca: fs.readFileSync(""),   // Certificado p\xfablico da Gerencianet\nminVersion: "TLSv1.2",\nrequestCert: true,\nrejectUnauthorized: false, //Mantenha como false para que os demais endpoints da API n\xe3o rejeitem requisi\xe7\xf5es sem MTLS\n};\n\nconst app = express();\nconst httpsServer = https.createServer(httpsOptions, app);\nconst PORT = 443;\n\napp.use(logger(\'dev\'));  // Comente essa linha caso n\xe3o queira que seja exibido o log do servidor no seu console\napp.use(express.json());\napp.use(express.urlencoded({ extended: false }));\n\n// Endpoint para configura\xe7\xe3o do webhook, voc\xea precisa cadastrar https://SEUDOMINIO.com/webhook\napp.post("/webhook", (request, response) => {\n  // Verifica se a requisi\xe7\xe3o que chegou nesse endpoint foi autorizada\n  if (request.socket.authorized) { \n      response.status(200).end();\n  } else {\n      response.status(401).end();\n  }\n});\n\n// Endpoind para recep\xe7\xe3o do webhook tratando o /pix\napp.post("/webhook/pix", (request, response) => {\n  if (request.socket.authorized){\n      //Seu c\xf3digo tratando a callback\n      /* EXEMPLO:\n      var body = request.body;\n      filePath = __dirname + "/data.json";\n      fs.appendFile(filePath, JSON.stringify(body) + "\\n", function (err) {\n          if (err) {\n              console.log(err);\n          } else {\n              response.status(200).end();\n          }\n      })*/\n      response.status(200).end();\n  }else{\n      response.status(401).end();\n  }\n});\n\nhttpsServer.listen(PORT, () =>\n  console.log(`Express server currently running on port ${PORT}`)\n);\n#Desenvolvido pela Consultoria T\xe9cnica da Ef\xed\n'))),(0,r.kt)(i.Z,{value:"Apache",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'# ********************************************************************************* #\n# Utilize o primeiro exemplo, caso queira requerir o certificado para autentica\xe7\xe3o  #\n# m\xfatua em qualquer rota do dom\xednio indicado no VirtualHost.                        #\n# Funciona bem para sub-dom\xednios. Exemplo: https://www.webhook.seu_dominio.com.br   # \n# ********************************************************************************* #\n\n<IfModule mod_ssl.c>\n<VirtualHost *:443> # Porta HTTPS\n  #\n  # ...\n  #\n\n  SSLCertificateFile /caminho_certificado/fullchain_ssl.pem #fullchain associado ao seu certificado SSL do dom\xednio\n  SSLCertificateKeyFile /caminho_certificado/privkey_ssl.pem #privkey associada ao seu certificado SSL do dom\xednio\n\n  #Chave p\xfablica da Ef\xed\n  SSLCACertificateFile /caminho_certificado/chain-pix-prod.crt\n  \n  # mTLS Ef\xed\n  SSLVerifyClient require\n  SSLVerifyDepth 3\n    \n  # Tratando o /pix, redirecionando as requisi\xe7\xf5es sempre para /webhook\n  Alias "/pix/" "/var/www/webhook/index.php"\n  Alias "/pix" "/var/www/webhook/index.php"\n\n  #\n  # ...\n  #\n</VirtualHost>\n</IfModule>\n\n\n# ******************************************************************************** #\n# Utilize o segundo exemplo, caso queira requerir o certificado para autentica\xe7\xe3o  #\n# m\xfatua em apenas uma rota do dom\xednio indicado no VirtualHost.                     #\n# Exemplo: https://www.seu_dominio.com.br/webhook/                                 #     \n# ******************************************************************************** #\n\n<IfModule mod_ssl.c>\n<VirtualHost *:443> # Porta HTTPS\n  #\n  # ...\n  #\n\n  SSLCertificateFile /caminho_certificado/fullchain_ssl.pem #fullchain associado ao seu certificado SSL do dom\xednio\n  SSLCertificateKeyFile /caminho_certificado/privkey_ssl.pem #privkey associada ao seu certificado SSL do dom\xednio\n\n  #Chave p\xfablica da Gerencianet\n  SSLCACertificateFile /caminho_certificado/chain-pix-prod.crt\n  \n  # mTLS Gerencianet\n  SSLVerifyClient none\n  SSLProtocol TLSv1.2\n    \n  <Location "/webhook">\n      SSLVerifyClient require\n      SSLVerifyDepth 3\n  </Location>\n  \n  # Tratando o /pix, redirecionando as requisi\xe7\xf5es sempre para /webhook\n  Alias "/webhook/pix/" "/var/www/webhook/index.php"\n  Alias "/webhook/pix" "/var/www/webhook/index.php"\n\n  #\n  # ...\n  #\n</VirtualHost>\n</IfModule>\n'))),(0,r.kt)(i.Z,{value:"PHP",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"# ********************************************************************************** #\n# Para o funcionamento deste exemplo \xe9 necess\xe1rio que seu servidor tenha configurado #\n# o certificado do mTLS, com o direcionamento para este arquivo, e tamb\xe9m com a      #\n# tratativa do /pix. Assim como \xe9 feito em nosso exemplo de servidores Apache.       #\n# ********************************************************************************** #\n\n<?php\n\nfunction resposta($status, $mensagem, $dados)\n{\n  $resposta['status'] = $status;\n  $resposta['mensagem'] = $mensagem;\n  $resposta['dados'] = $dados;\n  $json_resposta = '<pre>' . json_encode($resposta, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES) . '</pre>';\n\n  header(\"HTTP/1.1 \" . $status);\n  echo $json_resposta;\n}\n\nfunction salvar($dados)\n{\n  // Crie um arquivo .;json para salvar as informa\xe7\xf5es\n  $nomeArquivo = './dados.json';\n  $dadosGravados = json_decode(file_get_contents($nomeArquivo), true);\n  $arquivo = fopen($nomeArquivo, 'w');\n\n  // Incrementa as informa\xe7\xf5es enviadas com o que j\xe1 havia gravado\n  array_push($dadosGravados, $dados);\n\n  if (fwrite($arquivo, json_encode($dadosGravados))) {\n      resposta(200, \"Requisi\xe7\xe3o realizada com sucesso!\", $dados);\n  } else {\n      resposta(300, \"Falha ao salvar os dados da requisi\xe7\xe3o.\", $dados);\n  }\n\n  fclose($arquivo);\n}\n\nfunction requisicao($metodo, $body, $parametros)\n{\n  switch ($metodo) {\n      case 'POST':\n          salvar($body);\n          break;\n      case 'GET':\n          resposta(200, \"Requisi\xe7\xe3o realizada com sucesso!\", $body);\n          break;\n  }\n}\n\n// Obt\xe9m o m\xe9todo HTTP, body e par\xe2metros da requisi\xe7\xe3o\n$metodo = $_SERVER['REQUEST_METHOD'];\n$parametros = explode('/', trim($_SERVER['REQUEST_URI'], '/'));\n$body = json_decode(file_get_contents('php://input'), true);\n\ntry {\n  requisicao($metodo, $body, $parametros);\n} catch (Exception $e) {\n  resposta(400, $e->getMessage(), $e);\n}\n")))),(0,r.kt)("p",null,"  Para ter um ter um SSL v\xe1lido, voc\xea deve entrar em contato com uma Autoridade Certificadora e gerar a chave privada ",(0,r.kt)("code",null,"server_ssl.key.pem")," e uma p\xfablica ",(0,r.kt)("code",null,"server_ssl.crt.pem"),", assim voc\xea valida a integridade da conex\xe3o. Voc\xea consegue realizar isso de forma gratuita utilizando um utilit\xe1rio como o ",(0,r.kt)("a",{href:"https://certbot.eff.org/",target:"_blank"},"Certbot")," por exemplo."),(0,r.kt)("h4",{id:"skip-mtls"},"Skip-mTLS"),(0,r.kt)("p",null,"Para hospedagem em servidores compartilhados pode haver restri\xe7\xf5es relativas a inser\xe7\xe3o de certificados gerados por outra entidade, como o nosso CA por exemplo. Por isto disponibilizamos o skip mTLS que vai permitir o cadastro do webhook. ",(0,r.kt)("br",null)),(0,r.kt)("p",null,"\xc9 necess\xe1rio ressaltar que sempre enviaremos o certificado nos webhooks, seja no cadastro ou na notifica\xe7\xe3o de Pix. Mas quando o skip-mTLS \xe9 utilizado, voc\xea, integrador, fica respons\xe1vel por validar o nosso certificado.",(0,r.kt)("br",null)),(0,r.kt)("p",null,"Caso opte por utilizar o atributo skip mTLS, ou seja, sem a valida\xe7\xe3o mTLS no seu servidor, voc\xea dever\xe1 implementar medidas para garantir que quem est\xe1 enviando os webhooks ao seu servidor \xe9 de fato a Ef\xed. Deixamos como sugest\xe3o as duas formas valida\xe7\xe3o seguintes, mas recomendamos fortemente que utilize as duas em conjunto:",(0,r.kt)("br",null)),(0,r.kt)("ul",null,(0,r.kt)("li",null,"Verifique o IP de comunica\xe7\xe3o: Voc\xea pode restringir a comunica\xe7\xe3o ao dom\xednio do webhhook cadastrado para aceitar apenas mensagens do IP utilizado pela Ef\xed.",(0,r.kt)("br",null)),(0,r.kt)("code",null,"IP utilizado atualmente em nossas comunica\xe7\xf5es: '34.193.116.226'."),(0,r.kt)("li",null,"Adicione uma hash ao final da URL que ser\xe1 cadastrada no webhook: Esse hmac ser\xe1 uma identifica\xe7\xe3o pr\xf3pria, criado por voc\xea, que ser\xe1 acrescentado ao final da URL no momento do cadastro do webhook e ser\xe1 utilizado para validar a origem da notifica\xe7\xe3o. Dessa forma, todos os webhooks enviados a seu servidor, ser\xe3o entregues com essa identifica\xe7\xe3o final e ent\xe3o e ent\xe3o sua aplica\xe7\xe3o deve validar a presen\xe7a da mesma.",(0,r.kt)("br",null),"Exemplo:",(0,r.kt)("br",null),"URL de notifica\xe7\xe3o original: ",(0,r.kt)("code",null,"https://seu_dominio.com.br/webhook/"),(0,r.kt)("br",null),"Como dever\xe1 ser cadastrada com a hash: ",(0,r.kt)("code",null,"https://seu_dominio.com.br/webhook/?hmac=xyz"))),(0,r.kt)("h4",{id:"como-cadastrar-o-skip-mtls"},"Como cadastrar o skip-mTLS:"),(0,r.kt)("p",null,"  Voc\xea deve utilizar o endpoint de configurar o webhook Pix, passando no header da requisi\xe7\xe3o o par\xe2metro ",(0,r.kt)("code",null,"x-skip-mtls-checking")," com o valor ",(0,r.kt)("code",null,"true"),", ou ",(0,r.kt)("code",null,"false")," caso n\xe3o deseje mais utilizar essa funcionalidade.",(0,r.kt)("br",null),(0,r.kt)("br",null),"\nA imagem abaixo mostra como este par\xe2metro deve ser informado:"),(0,r.kt)("div",{className:"img-container"},(0,r.kt)("img",{src:"/img/put_webhook.png"})),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"configurar-o-webhook-pix"},"Configurar o webhook Pix"),(0,r.kt)("p",null,"  Endpoint para configura\xe7\xe3o do servi\xe7o de notifica\xe7\xf5es acerca de Pix recebidos. Pix oriundos de cobran\xe7as est\xe1ticas s\xf3 ser\xe3o notificados se estiverem associados a um ",(0,r.kt)("code",null,"txid"),"."),(0,r.kt)("div",{className:"admonition_caution"},(0,r.kt)("div",null,(0,r.kt)("img",{src:"/img/lightbulb-on-orange.svg"})," ",(0,r.kt)("b",null,"Lembrete")),"Uma URL de webhook pode estar associada a v\xe1rias chaves Pix.",(0,r.kt)("br",null)," ",(0,r.kt)("strong",null,"J\xe1 uma chave Pix s\xf3 pode estar atrelada a uma \xfanica URL de Webhook"),".",(0,r.kt)("br",null)),(0,r.kt)("br",null),(0,r.kt)("div",{className:"put"},(0,r.kt)("details",{className:"col-100"},(0,r.kt)("summary",null,(0,r.kt)("b",null,(0,r.kt)(l.jS,{mdxType:"HighlightPut"},"PUT")," /v2/webhook/",(0,r.kt)(l.T7,{mdxType:"HighlightVar"},":chave"))),(0,r.kt)("div",{className:"put-div"},(0,r.kt)("div",{className:"col-65"},"Requer autoriza\xe7\xe3o para o escopo: ",(0,r.kt)("code",null,"webhook.write")),(0,r.kt)("div",{className:"col-35"},(0,r.kt)(d.Z,{filename:"/markdown/pix/webhooks/Configurar_webhook.md",mdxType:"Modal"}))),(0,r.kt)("br",null),(0,r.kt)("b",null,"Requisi\xe7\xe3o"),(0,r.kt)(s.Z,{defaultValue:"exemplo",values:[{label:"Exemplo",value:"exemplo"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"exemplo",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n"webhookUrl": "https://exemplo-pix/webhook"\n}\n')))),(0,r.kt)("br",null),(0,r.kt)("b",null,"Respostas"),(0,r.kt)("br",null),(0,r.kt)("p",null,"  As respostas abaixo representam Sucesso(201) e Falhas/erros do consumo."),(0,r.kt)(s.Z,{defaultValue:"saida",values:[{label:"201",value:"saida"},{label:"400",value:"400"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"saida",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},"Webhook para notifica\xe7\xf5es acerca de Pix recebidos associados a um txid.\n"))),(0,r.kt)(i.Z,{value:"400",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'InvalidValueError\n{\n"nome": "valor_invalido",\n"mensagem": "URL inv\xe1lida"\n}\n\nOU\n\n{\n"nome": "valor_invalido",\n"mensagem": "A URL do webhook deve usar o protocolo HTTPS"\n}\n\nOU\n\n{\n"nome": "webhook_invalido",\n"mensagem": "A autentica\xe7\xe3o de TLS m\xfatuo n\xe3o est\xe1 configurada na URL informada"\n}\n\nOU\n\n{\n"nome": "webhook_invalido",\n"mensagem": "A URL informada est\xe1 inacess\xedvel"\n}\n\nOU\n\n{\n"nome": "webhook_invalido",\n"mensagem": "A URL informada atingiu o tempo limite de resposta"\n}\n\nOU\n\n{\n"nome": "webhook_invalido",\n"mensagem": "A requisi\xe7\xe3o na URL informada falhou com o erro: {{errno}}" //{{errno}} representa um c\xf3digo de erro do linux: https://man7.org/linux/man-pages/man3/errno.3.html Ex: ECONNRESET, EPIPE \n}\n\nOU\n\n{\n"nome": "webhook_invalido",\n"mensagem": "A URL informada respondeu com o c\xf3digo HTTP {{httpStatus}}" // {{httpStatus}} representa o status HTTP que a url respondeu. Ex: 400, 403, 500.\n}\n\nOU\n\n{\n"nome": "webhook_invalido",\n"mensagem": "N\xe3o foi poss\xedvel receber uma resposta da URL informada"\n}\n')))))),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"exibir-informa\xe7\xf5es-do-webhook-pix"},"Exibir informa\xe7\xf5es do webhook Pix"),(0,r.kt)("p",null,"  Endpoint para recupera\xe7\xe3o de informa\xe7\xf5es sobre o webhook pix."),(0,r.kt)("div",{className:"get"},(0,r.kt)("details",{className:"col-100"},(0,r.kt)("summary",null,(0,r.kt)("b",null,(0,r.kt)(l.d6,{mdxType:"HighlightGet"},"GET")," /v2/webhook/",(0,r.kt)(l.T7,{mdxType:"HighlightVar"},":chave"))),(0,r.kt)("div",{className:"get-div"},(0,r.kt)("div",{className:"col-65"},"Requer autoriza\xe7\xe3o para o escopo: ",(0,r.kt)("code",null,"webhook.read")),(0,r.kt)("div",{className:"col-35"},(0,r.kt)(d.Z,{filename:"/markdown/pix/webhooks/Consultar_webhook.md",mdxType:"Modal"}))),(0,r.kt)("br",null),(0,r.kt)("b",null,"Respostas"),(0,r.kt)("br",null),(0,r.kt)("p",null,"  As respostas abaixo representam Sucesso(200) do consumo."),(0,r.kt)(s.Z,{defaultValue:"saida",values:[{label:"200",value:"saida"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"saida",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n"webhookUrl": "https://gn-pix-webhook.gerencianet.com.br/webhook/",\n"chave": "40a0932d-1918-4eee-845d-35a2da1690dc",\n"criacao": "2020-11-11T10:15:00.358Z"\n}\n')))))),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"consultar-lista-de-webhooks"},"Consultar lista de webhooks"),(0,r.kt)("p",null,"Endpoint para consultar webhooks associados a chaves atrav\xe9s de par\xe2metros como ",(0,r.kt)("code",null,"in\xedcio")," e ",(0,r.kt)("code",null,"fim"),". Os atributos s\xe3o inseridos como ",(0,r.kt)("em",null,"query params"),"."),(0,r.kt)("div",{className:"get"},(0,r.kt)("details",{className:"col-100"},(0,r.kt)("summary",null,(0,r.kt)("b",null,(0,r.kt)(l.d6,{mdxType:"HighlightGet"},"GET")," /v2/webhook")),(0,r.kt)("div",{className:"get-div"},(0,r.kt)("div",{className:"col-65"},"Requer autoriza\xe7\xe3o para o escopo: ",(0,r.kt)("code",null,"gn.pix.send.read")),(0,r.kt)("div",{className:"col-35"},(0,r.kt)(d.Z,{filename:"/markdown/pix/webhooks/Listar_webhook.md",mdxType:"Modal"}))),(0,r.kt)("br",null),(0,r.kt)("b",null,"Requisi\xe7\xe3o"),"O trecho abaixo mostra como os par\xe2metros ",(0,r.kt)("code",null,"inicio")," e ",(0,r.kt)("code",null,"fim")," (obrigat\xf3rios) devem ser repassados na requisi\xe7\xe3o.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("code",null,"/v2/webhook/?inicio=2020-10-22T16:01:35Z&fim=2020-10-23T16:01:35Z"),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("b",null,"Respostas"),(0,r.kt)("br",null),(0,r.kt)("p",null,"  As respostas abaixo representam Sucesso(200) e Falhas/erros do consumo."),(0,r.kt)(s.Z,{defaultValue:"saida",values:[{label:"200",value:"saida"},{label:"400",value:"400"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"saida",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},' {\n  "parametros": {\n      "inicio": "2021-01-22T16:01:35.000Z",\n      "fim": "2022-12-30T16:01:35.000Z",\n      "paginacao": {\n          "paginaAtual": 0,\n          "itensPorPagina": 100,\n          "quantidadeDePaginas": 1,\n          "quantidadeTotalDeItens": 5\n      }\n  },\n  "webhooks": [\n      {\n          "webhookUrl": "https://seudominio.com.br/gn/webhook/",\n          "chave": "40a0932d-1618-4eee-845d-35a2da1590dc",\n          "criacao": "2021-05-05T19:52:13.000Z"\n      },\n      {\n          "webhookUrl": "https://.projetosseudominio.seudominio.com.br/gn/webhook/",\n          "chave": "40a0932d-1918-0eee-845d-35a2da1690dc",\n          "criacao": "2021-10-18T14:42:41.000Z"\n      },\n      {\n          "webhookUrl": "https://seudominio.com.br/webhook/?ignorar=",\n          "chave": "40a0032d-1918-45ee-845d-3562da1690dc",\n          "criacao": "2021-11-03T12:25:15.000Z"\n      }\n  ]\n}\n'))),(0,r.kt)(i.Z,{value:"400",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n"nome": "valor_invalido",\n"mensagem": "Campo de data fim deve ser maior ou igual ao campo de data inicio"\n}\n')))))),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"cancelar-o-webhook-pix"},"Cancelar o webhook Pix"),(0,r.kt)("p",null,"  Endpoint para cancelamento do webhook pix."),(0,r.kt)("div",{className:"delete"},(0,r.kt)("details",{className:"col-100"},(0,r.kt)("summary",null,(0,r.kt)("b",null,(0,r.kt)(l.GA,{mdxType:"HighlightDelete"},"DELETE"),"/v2/webhook/",(0,r.kt)(l.T7,{mdxType:"HighlightVar"},":chave"))),(0,r.kt)("div",{className:"delete-div"},(0,r.kt)("div",{className:"col-65"},"Requer autoriza\xe7\xe3o para o escopo: ",(0,r.kt)("code",null,"webhook.write")),(0,r.kt)("div",{className:"col-35"},(0,r.kt)(d.Z,{filename:"/markdown/pix/webhooks/Cancelar_webhook.md",mdxType:"Modal"}))),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("b",null,"Respostas"),(0,r.kt)("br",null),(0,r.kt)("p",null,"  As respostas abaixo representam Sucesso(200) e Falhas/erros do consumo."),(0,r.kt)(s.Z,{defaultValue:"saida",values:[{label:"200",value:"saida"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"saida",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},"Webhook para notifica\xe7\xf5es Pix foi cancelado.\n")))))),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"recebendo-callbacks"},"Recebendo Callbacks"),(0,r.kt)("p",null,"Esse servi\xe7o est\xe1 protegido por uma camada de autentica\xe7\xe3o mTLS. Os callbacks s\xe3o enviados pela Ef\xed via ",(0,r.kt)("code",null,"POST url-webhook-cadastrada\u200b/pix")," quando h\xe1 uma altera\xe7\xe3o no status do Pix.  "),(0,r.kt)("div",{className:"admonition_tip"},(0,r.kt)("div",null,(0,r.kt)("img",{src:"/img/info-circle-green.svg"})," ",(0,r.kt)("b",null,"Informa\xe7\xe3o")),"Caso voc\xea precise testar os endpoints de cobran\xe7a Pix Cob, temos um ambiente de homologa\xe7\xe3o funcional em que \xe9 poss\xedvel simular todos os status retornados pela nossa API e webhook.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("p",null,"Se o valor da cobran\xe7a est\xe1 entre ",(0,r.kt)("strong",{parentName:"p"},"R$ 0.01")," \xe0 ",(0,r.kt)("strong",{parentName:"p"},"R$ 10.00"),":",(0,r.kt)("br",null),"\n",(0,r.kt)("em",{parentName:"p"},"A cobran\xe7a \xe9 confirmada, informa\xe7\xe3o vir\xe1 via Webhook."),(0,r.kt)("br",null),"\nSe o valor da cobran\xe7a \xe9 maior que ",(0,r.kt)("strong",{parentName:"p"},"R$ 10.00"),":",(0,r.kt)("br",null),"\n",(0,r.kt)("em",{parentName:"p"},"A cobran\xe7a permanece ativa, sem confirma\xe7\xe3o. Como n\xe3o h\xe1 webhook nesses casos, nada \xe9 feito."),(0,r.kt)("br",null))),(0,r.kt)("br",null),(0,r.kt)("div",{className:"link-responsivo"},(0,r.kt)("div",{className:"requisicao"},(0,r.kt)("b",null,"Requisi\xe7\xe3o"),(0,r.kt)("p",null,"Uma requisi\xe7\xe3o ",(0,r.kt)("code",null,"POST")," \xe9 enviada pela Ef\xed para a URL que voc\xea cadastrou como webhook para uma determinada chave. Quando houver altera\xe7\xe3o no status de uma transa\xe7\xe3o Pix, envolvendo a chave associada, um objeto JSON (como os exemplos abaixo) ser\xe1 enviado ao seu servidor. Cada requisi\xe7\xe3o enviada possui um timeout de 60 segundos, isto \xe9, uma requisi\xe7\xe3o de callback \xe9 interrompida ao atingir 60 segundos sem resposta."),(0,r.kt)("details",{className:"no_border"},(0,r.kt)("summary",null,(0,r.kt)("b",null," Veja alguns exemplos:")),(0,r.kt)(s.Z,{defaultValue:"Exemplo-Pix-recebido",values:[{label:"Exemplo-Pix-recebido",value:"Exemplo-Pix-recebido"},{label:"Exemplo-Devolu\xe7\xe3o",value:"Exemplo-Devolu\xe7\xe3o"},{label:"Exemplo-Pix-enviado",value:"Exemplo-Pix-enviado"},{label:"Exemplo-Pix-recebido-com-tarifa-informada",value:"Exemplo-Pix-recebido-com-tarifa-informada"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Exemplo-Pix-recebido",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'// Pix recebido\n{\n"pix": [\n  {\n    "endToEndId": "E1803615022211340s08793XPJ",\n    "txid": "fc9a43k6ff384ryP5f41719",\n    "chave": "2c3c7441-b91e-4982-3c25-6105581e18ae",     \n          "valor": "0.01",\n    "horario": "2020-12-21T13:40:34.000Z",\n    "infoPagador": "pagando o pix"\n  }\n]\n}\n'))),(0,r.kt)(i.Z,{value:"Exemplo-Devolu\xe7\xe3o",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'// Devolu\xe7\xe3o\n{\n"pix": [\n  {\n    "endToEndId": "E12345678202009091221syhgfgufg",\n    "txid": "c3e0e7a4e7f1469a9f782d3d4999343c",\n    "chave": "2c3c7441-b91e-4982-3c25-6105581e18ae",\n    "valor": "110.00",\n    "horario": "2020-09-09T20:15:00.358Z",\n    "infoPagador": "0123456789",\n    "devolucoes":[\n    {\n      "id": "123ABC",\n      "rtrId": "D12345678202009091221abcdf098765",\n      "valor": "110.00",\n      "horario": {\n        "solicitacao": "2020-09-09T20:15:00.358Z"\n      },\n      "status": "DEVOLVIDO"\n    }\n    ]\n  }\n]\n}\n'))),(0,r.kt)(i.Z,{value:"Exemplo-Pix-enviado",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'// Pix enviado\n{\n"pix": [\n  {\n    "endToEndId": "E090893562021030PIf25a7868",\n    "chave": "2c3c7441-b91e-4982-3c25-6105581e18ae",\n    "tipo": "SOLICITACAO",\n    "status": "REALIZADO",\n    "valor": "0.01",\n    "horario": "2021-03-04T20:39:47.000Z",\n    "gnExtras": {\n      "idEnvio": "1"\n    }\n  }\n]\n}\n'))),(0,r.kt)(i.Z,{value:"Exemplo-Pix-recebido-com-tarifa-informada",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'// Pix recebido\n{\n"pix": [\n  {\n    "endToEndId": "E1803615022211340s08793XPJ",\n    "txid": "fc9a43k6ff384ryP5f41719",\n    "chave": "2c3c7441-b91e-4982-3c25-6105581e18ae",     \n          "valor": "0.10",\n    "horario": "2020-12-21T13:40:34.000Z",\n    "infoPagador": "pagando o pix",\n    "gnExtras": {\n         "tarifa": "0.01"\n     }\n  }\n]\n}\n')))),(0,r.kt)("br",null),(0,r.kt)("b",null,"Respostas"),(0,r.kt)("br",null),(0,r.kt)("p",null," As requisi\xe7\xf5es de callback aguardam uma resposta com status HTTP 2XX. Caso o servidor do cliente retorne um status diferente, a Ef\xed far\xe1 at\xe9 10 novas tentativas de notifica\xe7\xe3o. A primeira nova tentativa ser\xe1 feita 5 minutos ap\xf3s a falha do envio do callback. Persistindo o erro, as tentativas subsequentes ser\xe3o enviadas em intervalos de tempo cada vez maiores, conforme mostra a tabela abaixo."),(0,r.kt)("div",{className:"admonition_tip"},(0,r.kt)("div",null,(0,r.kt)("img",{src:"/img/exclamation-triangle-green.svg"})," ",(0,r.kt)("b",null,"Importante!")),"Em casos onde o servidor do cliente retorna o status HTTP 429 (*too many requests*), os servidores da Ef\xed tentar\xe3o enviar a notifica\xe7\xe3o at\xe9 10 vezes tamb\xe9m de acordo com a tabela abaixo."),(0,r.kt)("br",null),(0,r.kt)("table",{className:"table",width:"200px",align:"center"},(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"N\xb0 datentativa"),(0,r.kt)("th",{align:"center"},"Tempo (em minutos)")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"1"),(0,r.kt)("td",null,"5")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"2"),(0,r.kt)("td",null,"10")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"3"),(0,r.kt)("td",null,"20")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"4"),(0,r.kt)("td",null,"40")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"5"),(0,r.kt)("td",null,"80")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"6"),(0,r.kt)("td",null,"160")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"7"),(0,r.kt)("td",null,"320")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"8"),(0,r.kt)("td",null,"640")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"9"),(0,r.kt)("td",null,"1280")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"10"),(0,r.kt)("td",null,"52560")))))))))}f.isMDXComponent=!0}}]);