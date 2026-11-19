const inPrecoCombus = document.getElementById('inPrecoCombus');
const inTipoCombus = document.getElementById('inTipoCombus');

function comb(){
  const combus = parseInt(inPrecoCombus.value);
  const tipoCombus = parseInt(inTipoCombus.value);
  if(combus==NaN){
    throw new Error('Insira o número!');
  }
  let valorFinal;
  switch(tipoCombus){
    case(1):
      valorFinal = `Álcool, ${combus} litros, R$${(combus*4.805)}`;
      break;
    case(2):
      valorFinal = `Diesel, ${combus} litros, R$${(combus*5.953)}`;
      break;
    default:
      valorFinal = `Gasolina, ${combus} litros, R$${(combus*6.565)}`;
      break;
  }
  document.getElementById('outPrecoCombus').innerHTML = `<h2 style="animation: fade 2s; color: blue;">${valorFinal}</h2>`;
}

document.getElementById('btnCombus').addEventListener('click', comb);