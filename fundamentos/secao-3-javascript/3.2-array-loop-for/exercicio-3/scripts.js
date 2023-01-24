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

