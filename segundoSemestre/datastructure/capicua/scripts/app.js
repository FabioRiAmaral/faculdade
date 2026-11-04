import { Capicua } from "./capicua.js";

const pilha = new Capicua();

document.getElementById('btnVer').addEventListener('click', ()=>{
  let inNum = parseInt(document.getElementById('inNum').value);
  let ordemNum, numTemp = inNum, numLength = numTemp.toString().length;
  for(let e=0;e<=numLength;e++){
    numLength = numTemp.toString().length;
    ordemNum = Math.floor(numTemp/(10**(numLength-1)));
    pilha.stack(ordemNum);
    numTemp = numTemp-ordemNum*(10**(numLength-1));
  }
  let reverse = '';
  while(!pilha.isEmpty()){
    reverse += pilha.getElement();
    pilha.unstack();
  }
  reverse = parseInt(reverse);
  if(reverse!=inNum){
    alert(`O reverso de ${inNum} é ${reverse}, portanto não é uma capicua :(`);
  }else{
    alert(`O reverso de ${inNum} é ${reverse}, é uma capicua :)`);
  }
});