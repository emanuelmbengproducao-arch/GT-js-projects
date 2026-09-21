//crie um algoritmo que calcule a area da parede
//o valor do pintor
//e aquantidade de tinta necessaria.( em baldes)

const altura = 3;
const largura = 5;
const valorPintor = 15;
const redimentoTinta = 12; // m² por balde.

const area = altura * largura;
const balde = area / redimentoTinta;
const valor = area * valorPintor;

console.log(`seria necessário ${Math.ceil(balde)} baldes
    valor do pintor é ${valor}
    area da parede é ${area}`);
