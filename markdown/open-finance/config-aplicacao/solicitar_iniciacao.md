<div>
<div className="espaco-1">

#### Dados para geração da cobrança.
<div className="light">
(*) são atributos obrigatórios
</div>
</div>
<br/>

****

  <div className="atributo"> 
          <div className="col-77">
           <b>x-idempotency-key</b>   
          </div>
          <div className="col-23">
            <div className="obrigatorio">
              <svg id="check-circle" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
  <path id="Caminho_19146" data-name="Caminho 19146" d="M127.946,200a8,8,0,1,0,8,8A7.936,7.936,0,0,0,127.946,200Zm0,15.2a7.2,7.2,0,0,1-5.09-12.29,7.131,7.131,0,0,1,5.09-2.11,7.2,7.2,0,0,1,0,14.4Z" transform="translate(-119.946 -200)" fill="#2f2f2f"/>
  <path id="Caminho_19147" data-name="Caminho 19147" d="M127.964,211.4l-2.4-2.4a.4.4,0,0,1,.564-.565l2.115,2.115,4.234-4.234a.4.4,0,1,1,.569.57l-4.518,4.514a.393.393,0,0,1-.564,0Z" transform="translate(-121.046 -201.241)" fill="#2f2f2f"/>
</svg> 
               <b>Obrigatório</b>      
            </div>
          </div>
  </div>                                      

<div className="light"> 

String ``minLength: 36 maxLength: 72``
</div>
<br/>
Chave única para evitar duplicidade em requisições em um curto espaço de tempo. Caso ocorra o envio de várias requisições com a mesma informação no mesmo instante, uma delas será processada com sucesso. Se outra requisição for enviada com a mesma chave, será retornado o erro 409.
(Este atributo deve ser enviado no Header)

****

  <div className="atributo"> 
          <div className="col-77">
           <b>Pagador</b>   
          </div>
          <div className="col-23">
            <div className="obrigatorio">
             <svg id="check-circle" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
  <path id="Caminho_19146" data-name="Caminho 19146" d="M127.946,200a8,8,0,1,0,8,8A7.936,7.936,0,0,0,127.946,200Zm0,15.2a7.2,7.2,0,0,1-5.09-12.29,7.131,7.131,0,0,1,5.09-2.11,7.2,7.2,0,0,1,0,14.4Z" transform="translate(-119.946 -200)" fill="#2f2f2f"/>
  <path id="Caminho_19147" data-name="Caminho 19147" d="M127.964,211.4l-2.4-2.4a.4.4,0,0,1,.564-.565l2.115,2.115,4.234-4.234a.4.4,0,1,1,.569.57l-4.518,4.514a.393.393,0,0,1-.564,0Z" transform="translate(-121.046 -201.241)" fill="#2f2f2f"/>
</svg> 
              <b>Obrigatório</b>   
            </div>
          </div>
  </div>                                       


<div className="light"> 
object (Pagador)
</div>
<br/>
Os campos aninhados sob o identificador pagador organizam informações a respeito de dados do cliente final ao qual vai se gerar a cobrança.

<div>
pagador:
</div>

``idParticipante*`` - / Identificador do participante no diretório do Banco Central. (String)

``cpf*`` - / CPF do cliente final pessoa física. (String) 

``cnpj`` - / CNPJ do cliente final pessoa jurídica. (String)
Caso for informado o cnpj, será necessário informar também o cpf do titular da conta jurídica.

****
  <div className="atributo"> 
          <div className="col-80">
           <b>Favorecido</b>   
          </div>
          <div className="col-20">
           <div className="obrigatorio">
             <svg id="check-circle" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
  <path id="Caminho_19146" data-name="Caminho 19146" d="M127.946,200a8,8,0,1,0,8,8A7.936,7.936,0,0,0,127.946,200Zm0,15.2a7.2,7.2,0,0,1-5.09-12.29,7.131,7.131,0,0,1,5.09-2.11,7.2,7.2,0,0,1,0,14.4Z" transform="translate(-119.946 -200)" fill="#2f2f2f"/>
  <path id="Caminho_19147" data-name="Caminho 19147" d="M127.964,211.4l-2.4-2.4a.4.4,0,0,1,.564-.565l2.115,2.115,4.234-4.234a.4.4,0,1,1,.569.57l-4.518,4.514a.393.393,0,0,1-.564,0Z" transform="translate(-121.046 -201.241)" fill="#2f2f2f"/>
</svg> 
              <b>Obrigatório</b>   
            </div>
          </div>
  </div>                                                             

<div className="light"> 
Pessoa Física (object) or Pessoa Jurídica (object)
</div>
<br/>
Os campos aninhados sob o identificador favorecido organizam informações a respeito dos dados da conta final que irá receber.
<br/>
<br/><br/> <div>
favorecido:
</div>

``contaBanco`*``:

``codigoBanco*`` - / Código ISPB do banco recebedor **09089356** (String)

``agencia*`` - (String)

``documento`` - / Documento do dono da conta (String)<br/>
O documento pode ser o cpf ou cnpj

``nome*`` - / Nome do titular (String)

``conta`` - / Número da conta com dígito (String)

``tipoConta``- CACC: Conta Corrente, usada para lançar débitos e créditos em geral.<br/>
SLRY: Conta Salário, utilizadas para pagamentos de salários.<br/>
SVGS: Conta Poupança, usada para poupança.<br/>
TRAN: Conta de Transações, usada como tipo básico de conta.<br/>
(Enum)<br/>
// "4-0": "infoPagador"<br/>

****

<div className="atributo"> 
          <div className="col-77">
           <b>valor</b>   
          </div>
          <div className="col-23">
           <div className="obrigatorio">
             <svg id="check-circle" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
  <path id="Caminho_19146" data-name="Caminho 19146" d="M127.946,200a8,8,0,1,0,8,8A7.936,7.936,0,0,0,127.946,200Zm0,15.2a7.2,7.2,0,0,1-5.09-12.29,7.131,7.131,0,0,1,5.09-2.11,7.2,7.2,0,0,1,0,14.4Z" transform="translate(-119.946 -200)" fill="#2f2f2f"/>
  <path id="Caminho_19147" data-name="Caminho 19147" d="M127.964,211.4l-2.4-2.4a.4.4,0,0,1,.564-.565l2.115,2.115,4.234-4.234a.4.4,0,1,1,.569.57l-4.518,4.514a.393.393,0,0,1-.564,0Z" transform="translate(-121.046 -201.241)" fill="#2f2f2f"/>
</svg> 
              <b>Obrigatório</b>   
            </div>
          </div>
  </div>  

<div className="light"> 

String pattern: ``\d{1,10}.\d{2}``
</div>
<br/>
	Valor do pagamento
<br/>

****
<div className="atributo"> 
          <div className="col-77">
           <b>codigoCidadeIBGE</b>   
          </div>
          <div className="col-23">
           <div className="opcional">
            <svg id="minus-circle" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
  <path id="Caminho_19359" data-name="Caminho 19359" d="M728,200a8,8,0,1,0,8,8A8.009,8.009,0,0,0,728,200Zm0,15.2a7.2,7.2,0,1,1,7.2-7.2A7.208,7.208,0,0,1,728,215.2Z" transform="translate(-720 -200)" fill="#2f2f2f"/>
  <path id="Caminho_19360" data-name="Caminho 19360" d="M732.541,209.5H725.5a.4.4,0,1,0,0,.8h7.043a.4.4,0,0,0,0-.8Z" transform="translate(-721.02 -201.9)" fill="#2f2f2f"/>
</svg> 
              <b>Opcional</b>   
            </div>
          </div>
  </div>                                                

<div className="light"> 

string
</div>
<br/>
Código da cidade segundo o IBGE

****
<div className="atributo"> 
          <div className="col-80">
           <b>infoPagador	</b>   
          </div>
          <div className="col-20">
           <div className="opcional">
            <svg id="minus-circle" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
  <path id="Caminho_19359" data-name="Caminho 19359" d="M728,200a8,8,0,1,0,8,8A8.009,8.009,0,0,0,728,200Zm0,15.2a7.2,7.2,0,1,1,7.2-7.2A7.208,7.208,0,0,1,728,215.2Z" transform="translate(-720 -200)" fill="#2f2f2f"/>
  <path id="Caminho_19360" data-name="Caminho 19360" d="M732.541,209.5H725.5a.4.4,0,1,0,0,.8h7.043a.4.4,0,0,0,0-.8Z" transform="translate(-721.02 -201.9)" fill="#2f2f2f"/>
</svg> 
              <b>Opcional</b>   
            </div>             
            </div>
          </div>
  </div>     

<div className="light"> 

string 
</div> 
<br/>
Informações pertinentes ao pagador final<br/>
200(Success)

****
<div className="atributo"> 
          <div className="col-80">
           <b>idProprio</b>   
          </div>
          <div className="col-20">
           <div className="opcional">
            <svg id="minus-circle" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
  <path id="Caminho_19359" data-name="Caminho 19359" d="M728,200a8,8,0,1,0,8,8A8.009,8.009,0,0,0,728,200Zm0,15.2a7.2,7.2,0,1,1,7.2-7.2A7.208,7.208,0,0,1,728,215.2Z" transform="translate(-720 -200)" fill="#2f2f2f"/>
  <path id="Caminho_19360" data-name="Caminho 19360" d="M732.541,209.5H725.5a.4.4,0,1,0,0,.8h7.043a.4.4,0,0,0,0-.8Z" transform="translate(-721.02 -201.9)" fill="#2f2f2f"/>
</svg> 
            <b>Opcional</b>
            </div>            
            </div>
          </div>
  </div>                                              

<div className="light"> 

Identificador personalizado do pagamento



</div>
 

