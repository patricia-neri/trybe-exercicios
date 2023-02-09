let palavra = 'tryber';
let inverte = '';

for (let index = 0; index < palavra.length; index += 1) {
    inverte += palavra[palavra.length - 1 - index];
}
console.log(inverte)
