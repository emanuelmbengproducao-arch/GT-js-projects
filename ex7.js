//crie um algoritmo que calcule o valor total de uma locação
//se a quantidade de dias for maior que 10
//aplicar o desconto de 50,00 no valor total.

const dias = 12;
const valorDia = 113.42;

//VAR e LET
var ex1 = ""; //entrou em desuso.
let ex2 = "";

let calculo = dias * valorDia;

if (dias > 10) {
  calculo = calculo - 50;
}

console.log(`O valor total é ${calculo}`);
