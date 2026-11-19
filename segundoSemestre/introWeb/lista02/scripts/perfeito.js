const inNum = document.getElementById('inNum');

function perf(){
  const num = parseInt(inNum.value);
  const numQuad = num**0.5;
  let resultado;
  if(num==NaN){
    throw new Error('Insira o número!');
  }
  if(num==(Math.floor(numQuad)**2)){
    resultado = `O número ${num} é um quadrado perfeito, sua raiz  é ${numQuad}!`
  }else{
    resultado = `O número ${num} não é um quadrado perfeito, sua raiz  é ${numQuad}, não é um inteiro!`
  }
  
  document.getElementById('outNum').innerHTML = `<h2 style="animation: fade 2s; color: blue;">${resultado}!</h2>`;
}

document.getElementById('btnNum').addEventListener('click', perf);