function fizzBuzz (parametro) {
let numbers = []
if (numbers % 3 === 0 && numbers % 5 === 0) {
    parametro.push('fizzBuzz');
}
else if (numbers % 3 === 0) {
    parametro.push('fizz');
}
else if ( numbers % 5 ===0) {
    parametro.push('buzz');
}
else {
    parametro.push('bug!');
}
return numbers;
};
console.log(fizzBuzz([5,9]));