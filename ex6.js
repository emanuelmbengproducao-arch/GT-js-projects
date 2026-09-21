//crie um algoritmo que calcule o valor total de uma locação
//se a quantidade de dias for maior que 10
//apçicar o desconto de 50,00 no valor total.

const dias = 12;
const valorDia = 113.42;

const calculo = dias * valorDia;

if (dias > 10) {
  console.log(`o valor total é ${calculo - 50}`);
} else {
  console.log(`o valor total é $(calculo)`);
}
