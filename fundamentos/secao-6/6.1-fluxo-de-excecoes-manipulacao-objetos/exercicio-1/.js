const coutries = {
    franca: 'Paris',
    brasil: 'Brasília',
    espanha: 'Madrid',
    portugal: 'Lisboa',
  };
  //const pairKeyValue = Object.entries(coutries);
  console.log(pairKeyValue);
  for(index in pairKeyValue) {
    console.log('--------');
    console.log('País:', pairKeyValue[index][0]);
    console.log('Capital:', pairKeyValue[index][1]);
  };

  

  const top3Albums = {
    1: 'Nightfall in Middle-Earth',
    2: 'Imaginations from the Other Side',
    3: 'Somewhere Far Beyond',
  };
  console.log(Object.entries(top3Albums));