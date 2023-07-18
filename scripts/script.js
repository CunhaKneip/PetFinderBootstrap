const form = document.querySelector("#formulario")
const nome = document.getElementById('nome')
const sobrenome = document.getElementById('sobrenome')
const usuario =  document.getElementById('nomeUsuario')
const data = document.getElementById('data')
const senha = document.getElementById('senha')
const confirmacao_senha = document.getElementById('confirmacao_senha')
const email = document.getElementById('email')
const confirmacao_email = document.getElementById('confirmacao_email')
const cidade = document.getElementById('cidade')
const cpf= document.getElementById('cpf')
const cep = document.getElementById('cep')
const estado = document.getElementById('estado')
const rua = document.getElementById('rua');
const bairro = document.getElementById('bairro');

let cep_valido =false;


form.addEventListener("submit", (e) =>{
  if((!TestaCampos(nome,sobrenome,usuario,data,cpf,senha,confirmacao_senha,email,confirmacao_email)) || !cep_valido){
    e.preventDefault();
    console.log('nao ta indo');
  };

},false)
















function TestaCampos(nome,sobrenome,usuario,data,cpf,senha,confirmacao_senha,email,confirmacao_email){
  let errado = false;
  console.log(errado);

  

  //Testa o campo nome
  if (nome.value.length <= 4) {
    nome.classList.remove('is-valid');
    nome.classList.add('is-invalid');
    console.log('nome errado');

    errado = true;
  } else {
    nome.classList.remove('is-invalid');
    nome.classList.add('is-valid');
  }

  //Testa o sobrenome


  if (sobrenome.value.length <= 4) {
    sobrenome.classList.remove('is-valid');
    sobrenome.classList.add('is-invalid');
    console.log('sobrenome errado');

    errado = true;
  } else {
    sobrenome.classList.remove('is-invalid');
    sobrenome.classList.add('is-valid');
  }


  if (usuario.value.length <= 4) {
    usuario.classList.remove('is-valid');
    usuario.classList.add('is-invalid');
    console.log('usuario errado');

    errado = true;
  } else {
    usuario.classList.remove('is-invalid');
    usuario.classList.add('is-valid');
  }



   

  

const dateString = data.value; 
const [year, month, day] = dateString.split('-');
const dataValue = new Date(`${year}-${month}-${day}`);

const lowerBound = new Date('1900-01-01');
const upperBound = new Date('2030-12-12');

if (dataValue < lowerBound || dataValue > upperBound || data.value == '') {
    data.classList.remove('is-valid');
    data.classList.add('is-invalid');  
    console.log('data errada');

    errado = true;
} else{
  data.classList.remove('is-invalid');
  data.classList.add('is-valid');
}







  //Testa CPF

  if (!TestaCPF(cpf)){
     errado = true;
     console.log('cpf errado');
  }

  const padraoEmail = /^[^\s@]+@[^\s@]+$/;
  const teste =email.value.trim();

if(!padraoEmail.test(teste)){
  email.classList.remove('is-valid');
    email.classList.add('is-invalid');
    console.log('email errado');
  
    errado = true;
} else{
  email.classList.remove('is-invalid');
  email.classList.add('is-valid');
}







  if(email.value != confirmacao_email.value){
    confirmacao_email.classList.remove('is-valid');
    confirmacao_email.classList.add('is-invalid'); 
    console.log('confirmacao email errado');
 
    errado = true;
} else{

  confirmacao_email.classList.remove('is-invalid');
  confirmacao_email.classList.add('is-valid');
}



  if(!(/\d/.test(senha.value) && /[A-Z]/.test(senha.value) && /[a-z]/.test(senha.value) && /[!@#$%^&*]/.test(senha.value)) || (senha.value.length < 8)) {
    senha.classList.remove('is-valid');
    senha.classList.add('is-invalid');
    console.log('senha errado');
  
    errado = true;
} else{
  senha.classList.remove('is-invalid');
  senha.classList.add('is-valid');
}

if((senha.value != confirmacao_senha.value) || confirmacao_senha.value.length == 0){
  confirmacao_senha.classList.remove('is-valid');
  confirmacao_senha.classList.add('is-invalid');  
  console.log('confirmacao senha errado');

  errado = true;
} else{
confirmacao_senha.classList.remove('is-invalid');
confirmacao_senha.classList.add('is-valid');
}
 








console.log(errado);

  if (errado == true) return false
  return true;

}



cep.addEventListener("keyup", (e) => {
  const valorCep = e.target.value;

  if (valorCep.length === 8) {
    getAddress(valorCep);
  }
});

const getAddress = async (cep_) => {

 //coloca a URL da API em uma constante
 const apiUrl = `https://viacep.com.br/ws/${cep_}/json/`;

 //o codigo espera(await) pela resposta da API e coloca a resposta em uma constante
 const response = await fetch(apiUrl);

 //coloca o valor de response como um JSON na variavel "data"
 const data = await response.json();
 
 //Caso o cep inserido for inválido, chamamos  a função da msg, dando o valor referente ao erro
 if (data.erro == true) {
 
  cep.classList.remove('is-valid');
  cep.classList.add('is-invalid');
   cep_.value="";
   estado.value="";
   cidade.value="";
   bairro.value="";
   rua.value="";
  
   cep_valido =false;
   console.log('cep errado');

   return;
 }
 
 if(data.erro != true){
  //  erro_.innerText = "";
 }

   cidade.value = data.localidade;
   estado.value = data.uf;
   bairro.value =data.bairro;
   rua.value = data.logradouro;

   cep.classList.remove('is-invalid');
   cep.classList.add('is-valid');

  
   cep_valido =true;

}






// function validaForm(form){
//   var validateGroup = document.getElementsByClassName('validate-me');

//     // Loop over them and prevent submission
//     var validation = Array.prototype.filter.call(forms, function (form) {
//         form.addEventListener('submit', function (event) {
//             if (form.checkValidity() === false) {
//                 event.preventDefault();
//                 event.stopPropagation();
//             }
  
//             //Added validation class to all form-groups in need of validation
//             for (var i = 0; i < validateGroup.length; i++) {
//                 validateGroup[i].classList.add('was-validated');
//             }
//         }, false);
//     });
// }

// window.addEventListener('load', function () {
//   // Fetch all the forms we want to apply custom Bootstrap validation styles to
//   var forms = document.getElementsByClassName('needs-validation');
//   // Get all form-groups in need of validation
//   var validateGroup = document.getElementsByClassName('validate-me');

//   // Loop over them and prevent submission
//   var validation = Array.prototype.filter.call(forms, function (form) {
//       form.addEventListener('submit', function (event) {
//           if (form.checkValidity() === false) {
//               event.preventDefault();
//               event.stopPropagation();
//           }

//           //Added validation class to all form-groups in need of validation
//           for (var i = 0; i < validateGroup.length; i++) {
//               validateGroup[i].classList.add('was-validated');
//           }
//       }, false);
//   });
// }, false);






function TestaCPF(strCPF) {
    var Soma; //Variavel responsável por somar os dígitos do CPF
    var Resto; // Variavel responsável por guardar o valor do resta das divisões
    strCPF = strCPF.value.replace(/\D/g, ''); 
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
        cpf.classList.remove('is-valid');
        cpf.classList.add('is-invalid');
        return false; // retorna falsoautomaticamente caso o CPF seja tudo 0
    }
  
    for (i=0; i<9; i++) {
       
      Soma = Soma + parseInt(strCPF.charAt(i)) * (10 - i); // Soma o resultado da multiplicação de cada digito do CPF com o valor 11(esse valor decai 1 a cada multiplicação,seu mínimo sendo 2)
    }
  
    Resto = 11-(Soma % 11); //faz o resto da soma acima

    if ((Resto === 10) || (Resto === 11)) {
      Resto = 0; // Caso o resultado for maior que 9 (pois oprimeiro digito verificador deve ser de 0 à 9) é atribuido o valor 0 para a variavel resto
    }
  
    if (Resto !== parseInt(strCPF.charAt(9)) ){
      cpf.classList.remove('is-valid');
      cpf.classList.add('is-invalid');
      return false;// compara o resto com o 9 dígito do CPF, caso eles sejam diferentes,a função retorna false,caso contrário, o codigo continua( a função substring precisa de dois parametros, um define onde começara a substring e outro onde acabará,.Neste exemplo,a asubstring pegara o somente o 9)
    }
  
    //repete a msm coisa para o segundo dígito verificador do CPF
    Soma = 0;
  
    for (i = 1; i < 10; i++) { 
      Soma = Soma + parseInt(strCPF.charAt(i)) * (11 - i);
    }
  
    Resto= 11-(Soma % 11);

  
    
  
    if ((Resto === 10) || (Resto === 11)){
      Resto = 0;
    }
    
    if (Resto !== parseInt(strCPF.charAt(10)) ){

      cpf.classList.remove('is-valid');
      cpf.classList.add('is-invalid');
      return false;
    }
  
      //caso os dois dígitos verificadores forem corretos, a função retorna true
      cpf.classList.remove('is-invalid');
      cpf.classList.add('is-valid');
      return true;
  }
  








nome.addEventListener("input", (e) => e.target.value = e.target.value.replace(/[^a-zA-Z\s]/g, ''));


  
sobrenome.addEventListener("input", (e) => e.target.value = e.target.value.replace(/[^a-zA-Z\s]/g, ''));  
  
  
  
cpf.addEventListener("input", (e) => {
    let value = e.target.value.replace(/\D/g, '');
  
    if (value.length == 0) {
      e.target.value = ''; // Reset the input value if it's empty
    } else if (value.length <= 3) {
      e.target.value = value;
    } else if (value.length <= 6) {
      e.target.value = `${value.substring(0, 3)}.${value.substring(3)}`;
    } else if (value.length <= 9) {
      e.target.value = `${value.substring(0, 3)}.${value.substring(3, 6)}.${value.substring(6)}`;
    } else {
      e.target.value = `${value.substring(0, 3)}.${value.substring(3, 6)}.${value.substring(6, 9)}-${value.substring(9)}`;
    }
  });
  

  cep.addEventListener("input", (e) => e.target.value = e.target.value.replace(/\D/g, ''));

    
  cidade.addEventListener("input", (e) => e.target.value = e.target.value.replace(/[^a-zA-Z]/g,''));








