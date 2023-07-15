const form = document.getElementById("formulario");
const nome = document.getElementById('nome')
const sobrenome = document.getElementById('sobrenome')
const senha = document.getElementById('senha')
const confirmacao_senha = document.getElementById('confirmacao_senha')
const email = document.getElementById('email')
const confirmacao_email = document.getElementById('confirmacao_email')
const cidade = document.getElementById('cidade')
const cpf= document.getElementById('cpf')
const cep = document.getElementById('cep')
const estado = document.getElementById('estado')



form.addEventListener("submit", function ( event){

  if (!TestaCPF(cpf.value)) {
    cpf.classList.remove('is-valid');
    cpf.classList.add('is-invalid');
  } else {
    input.classList.add('is-valid');
    input.classList.remove('is-invalid');
  }

    if (!form.checkValidity())
    {
        
    event.preventDefault();
    event.stopPropagation();
    }
    form.classList.add( "was-validated");

},false)








function TestaCPF(strCPF) {
    var Soma; //Variavel responsável por somar os dígitos do CPF
    var Resto; // Variavel responsável por guardar o valor do resta das divisões
      
    Soma = 0; // inicialização da variavel soma 
    if (strCPF == "00000000000" 
    ||strCPF == "11111111111" 
    ||strCPF == "22222222222"
    ||strCPF == "33333333333"
    ||strCPF == "44444444444"
    ||strCPF == "55555555555"
    ||strCPF == "66666666666"
    ||strCPF == "77777777777"
    ||strCPF == "88888888888"
    ||strCPF == "99999999999") {
        console.log("cpf invalido")
        return false; // retorna falsoautomaticamente caso o CPF seja tudo 0
    }
  
    for (i=0; i<9; i++) {
       
      Soma = Soma + parseInt(strCPF.charAt(i)) * (10 - i); // Soma o resultado da multiplicação de cada digito do CPF com o valor 11(esse valor decai 1 a cada multiplicação,seu mínimo sendo 2)
      console.log(strCPF.charAt(i),"*", (10 - i), "=", Soma);
    }
  
    Resto = 11-(Soma % 11); //faz o resto da soma acima
    console.log("resto1", Resto);
    console.log("devia ser:", parseInt(strCPF.charAt(9)));
  
    if ((Resto === 10) || (Resto === 11)) {
      Resto = 0; // Caso o resultado for maior que 9 (pois oprimeiro digito verificador deve ser de 0 à 9) é atribuido o valor 0 para a variavel resto
    }
  
    if (Resto !== parseInt(strCPF.charAt(9)) ){
      console.log("cpf falso, primeiro digito");
      return false;// compara o resto com o 9 dígito do CPF, caso eles sejam diferentes,a função retorna false,caso contrário, o codigo continua( a função substring precisa de dois parametros, um define onde começara a substring e outro onde acabará,.Neste exemplo,a asubstring pegara o somente o 9)
    }
  
    //repete a msm coisa para o segundo dígito verificador do CPF
    Soma = 0;
  
    for (i = 1; i < 10; i++) { 
      Soma = Soma + parseInt(strCPF.charAt(i)) * (11 - i);
      console.log(Soma)
    }
  
    Resto= 11-(Soma % 11);
    console.log("resto2", Resto);
    console.log("devia ser:", parseInt(strCPF.charAt(10)));
  
  
    
  
    if ((Resto === 10) || (Resto === 11)){
      Resto = 0;
    }
    console.log(Resto);
    
    if (Resto !== parseInt(strCPF.charAt(10)) ){
      console.log("cpf falso, secundo digito");
      console.log("cpf invalido")
      return false;
    }
  
      //caso os dois dígitos verificadores forem corretos, a função retorna true
      return true;
  }
  








nome.addEventListener("input", (e) => {
    const value = e.target.value;
  
    if (!/^[a-zA-Z\s]*$/.test(value)) {
      e.target.value = value.replace(/[^a-zA-Z\s]/g, '');
    }
  });
  
  sobrenome.addEventListener("input", (e) => {
    const value = e.target.value;
  
    if (!/^[a-zA-Z\s]*$/.test(value)) {
      e.target.value = value.replace(/[^a-zA-Z\s]/g, '');
    }
  });
  
  cpf.addEventListener("input", (e) => {
    const value = e.target.value;
    let cpf_lenght = cpf.value.length;
    if (!/^\d*$/.test(value)) {
      e.target.value = value.replace(/\D/g, '');
    }
    


  });
  
  cep.addEventListener("input", (e) => {
    const value = e.target.value;
  
    if (!/^\d*$/.test(value)) {
      e.target.value = value.replace(/\D/g, '');
    }
  });
  
  cidade.addEventListener("input", (e) => {
    const value = e.target.value;
  
    if (!/^[a-zA-Z]*$/.test(value)) {
      e.target.value = value.replace(/[^a-zA-Z]/g, '');
    }
  });








