let a = 65;
let b = 100;
let c = 15;

let somaAngulos = a + b + c;
let anguloPositivo = a > 0 && b > 0 && c > 0;

if(anguloPositivo){
    if (somaAngulos === 180) {
    console.log(true);
    } else {
        console.log(false);
    };
}

else {
    console.log('Erro: ângulo inválido');
}