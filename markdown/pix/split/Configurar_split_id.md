<div>
<div className="espaco-1">

#### Dados para geração do Split
<div className="light">
(*) são atributos obrigatórios
</div>
</div>
<br/>

****


  <div className="atributo"> 
          <div className="col-77">
           <b>id (Identificador do Split)</b>   
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

string (Id do Split) ``^[a-zA-Z0-9]{1,35}$``
</div>
<br/>
O campo id determina o identificador do Split de pagamento.

****

<div className="atributo"> 
          <div className="col-80">
           <b>descricao</b>   
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
O campo descricao , opcional, determina um texto a ser apresentado na criação da configuração do Split em formato livre. Esse texto será preenchido pelo criador da configuração do Split. O tamanho do campo está limitado a 80 caracteres (string).

****

  <div className="atributo"> 
          <div className="col-77">
           <b>lancamento</b>   
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

Object (Lancamento)
</div>
<br/><br/> <div>
lancamento:
</div>

``imediato*`` - (boolean)


****
 <div className="atributo"> 
          <div className="col-77">
           <b>split</b>   
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
Object (Split)
</div>

<br/><br/> <div>
split:
</div>

``divisaoTarifa*`` - Maneira a qual a tarifa será cobrada. (string)
Ex: "assumir_total" ou "proporcional"

``minhaParte*`` - Define o repasse para a conta do cliente que está configurando o Split .(string)

``valor*`` - Define o valor que será repassado. (string). Ex: "60.00" (60%)

``repasses*`` - Define os repasses para as contas dos beneficiários que não o cliente configurador do Split (array)

``favorecido*`` -Define os dados do favorecido. (object)

``cpf/cnpj*`` - Documento do favorecido. (string) /^\d{11}$/

``conta*`` - Número da conta do favorecido (incluindo digito final, sem o hífen).





</div>
 

