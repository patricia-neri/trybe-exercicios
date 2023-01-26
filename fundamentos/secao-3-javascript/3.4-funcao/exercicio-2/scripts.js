//Exercicio 1
let info = {
  personagem: 'Margarida ',
  origem: 'Pato Donald ',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim',
};
//console.log('Bem vinda, ' + info.personagem);

//Exercicio 2
//for (let key in info) {
  //console.log(key);
//}

//Exercicio 3
//for (let key in info) {
  //console.log(info[key]);
//}

  
let info2 = {
  personagem: ' Tio Patinhas',
  origem: ' Christmas on Bear Mountain, Dells Four Color Comics #178 ',
  nota: 'O último MacPatinhas',
  recorrente: 'Sim',
};
for (let properties in info) {
  if (
    properties === 'recorrente' &&
    info[properties] === 'Sim' &&
    info2[properties] === 'Sim'
  ) {
    console.log('Ambos recorrentes');
  } else {
    console.log(info[properties] + 'e' + info2[properties])
  }
}

