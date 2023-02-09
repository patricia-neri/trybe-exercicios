//Exercicio 1
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let index = 0; index < numbers.length; index++) {
  console.log(numbers[index]);
}

//Exercicio 2
let result = 0;
for (let index = 0; index < numbers.length; index += 1) {
  result += numbers[index];
}
console.log(result);

//Exercicio 3
let sum = 0;
for (let index = 0; index < numbers.length; index += 1) {
  sum += numbers[index];
}
let media = sum / numbers.length;
console.log(media);

//Exercicio 4
if (result > 20) {
  console.log('valor maior que 20');
} 
else {
  console.log('valor menor ou igual a 20');
}

//Exercicio 5
let maiorValor = 0;
for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] > maiorValor) {
    maiorValor = numbers[index];
  }
}
console.log(maiorValor);

//Exercicio 6
let impar = [];
for (let index = 0; index < numbers.length; index ++) {
  if (numbers[index] % 2 !== 0) {
    impar.push(numbers[index]);
  }
}
console.log(impar)

if (impar === 0) {
  console.log('nenhum valor ímpar encontrado');
} 
else {
  console.log(impar)
}

//Exercicio 7
let menorValor = numbers [0];
for (let index = 1; index < numbers.length; index += 1) {
  if (numbers[index] < menorValor) {
    menorValor = numbers[index];
  }
}
console.log(menorValor)

//Exercicio 8
let number = [];
for (let index =1; index <=25; index ++) {
  number.push(index);
}
console.log(number);

//Exercicio 9
let divisao = 0
for (let index = 0; index < number.length; index ++) {
  console.log(number[index] / 2);
 };