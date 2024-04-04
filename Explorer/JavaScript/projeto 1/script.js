// let nome = prompt("Qual seu nome?");
// alert("Olá, " + nome);

// alert("Iremos somar dois numeros!")
// let numberOne = prompt("Digite o primeiro numero")
// let numberTwo = prompt("Digite o segundo numero")
// let result = Number(numberOne) + Number(numberTwo)

// alert("Resultado " + result)

// let aluno = prompt("Qual seu nome?");
// let nota1 = prompt("Qual sua nota da primeira prova?");
// let nota2 = prompt("Qual sua nota da segunda prova?");
// let nota3 = prompt("Qual sua nota da terceira prova?");

// let media = (Number(nota1) + Number(nota2) + Number(nota1)) / 3;
// media = media.toFixed(2)

// if (media >= 6) {
//   alert("Parabéns, " + aluno + "! Sua média foi de: " + media);
// } else {
//   alert(aluno + " estude para sua prova de recuperação! Sua média foi de: " +  media);
// }

// let itens = [];

// for (item = 0; item < 2; item++){
//    let itemNome = prompt('Qual o item' + (item + 1))
//     itens [item] = itemNome
// }

// alert(itens)




// let resultado = prompt("Adivinhe o numero que estou pensando, de 1 a 10!");

// const gerar = Math.round(Math.random() * 10);

// let tentativas = 1;

// while (Number(resultado) != gerar) {
//   resultado = prompt("Tente novamente!");

//   tentativas++;
// }

// alert(`Parabéns você acertou em ${tentativas} tentativa(s)!`);



// let option
// let itens = []

// while(option != 3){

//     option = Number(prompt(`
//     Olá usuário! Digite o número da opção desejada
    
//     1. Cadastrar um item na lista
//     2. Mostrar itens cadastrados
//     3. Sair do programa
//   `))

//   switch(option){
//     case 1:
//         let item = prompt("Digite o nome do item")
//         itens.push(item)
//     break
//     case 2:
//         if (itens.length == 0){
//             alert("Não existem itens cadastrados")
//         }
//         else{
//             alert(itens)
//         }
//      break
//     case 3:
//         alert('Tchau')
//         break

//     default:
//         alert('Opção invalida!')
// }

// }



// while(option != 3){

//     option = Number(prompt(`
//     Olá usuário! Digite o número da opção desejada
    
//     1. Cadastrar um item na lista
//     2. Mostrar itens cadastrados
//     3. Sair do programa
//   `))

// if(option == 1){
// let item = prompt("Digite o nome do item")
// itens.push(item)
// }
// else if(option == 2){
//     if (itens.length == 0){
//         alert("Não existem itens cadastrados")
//     }
//     else{
//         alert(itens)
//     }
// }
// else {
//     alert('Tchau')
// }
// }


// const pacientes = [
//     {
//       name: "Luiz",
//       age: 20,
//       weight: 100,
//       height: 190
//     },
//     {
//       name: "Alexandra",
//       age: 27,
//       weight: 70,
//       height: 170
//     },
//     {
//       name: "Carlos",
//       age: 42,
//       weight: 90,
//       height: 180
//     },
//   ]


//   function MostrarImcPacient (pacientes){

//     alert(`
//     Paciente ${pacientes.name} possui o IMC de 
//     ${(pacientes.weight / ((pacientes.height / 100) ** 2)).toFixed(2)}
   
//    `)

//   }

// for (let Paciente of pacientes){
//     MostrarImcPacient(Paciente)
// }

  
let numero1, numero2, iguais, ParInpa;

numero1 = Number(prompt("Digite o primeiro numero:"))
numero2 = Number(prompt("Digite o segundo numero:"))

ParInpa = (numero1 + numero2);



if ( ParInpa & 1){
 ParInpa = "Inpar"
  }
  else{
    ParInpa = "Par"
     }

if (numero1 == numero2){
iguais = "iguais"
}
else{
    iguais = "diferentes"
}


alert(`A soma dos dois números: ${numero1 + numero2}`)
alert(`A subtração dos dois números: ${numero1 - numero2}`)
alert(`A multiplicação dos dois números: ${numero1 * numero2}`)
alert(`A divisão dos dois números: ${numero1 / numero2}`)
alert(`O resto da divisão dos dois números: ${numero1 % numero2}`)
alert(`A soma dos dois números é ${ParInpa}: ${numero1 + numero2}`)
alert(`Os numeros inseridos são ${iguais}!`)