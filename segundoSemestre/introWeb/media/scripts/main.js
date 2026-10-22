const nome = document.getElementById("name").value;
const nota1 = parseInt(document.getElementById("nota1").value);
const nota2 = parseInt(document.getElementById("nota2").value);

function media(a, b){
  return((a+b)/2);
}

function aprovacao(){
  let mediaAluno = media(nota1, nota2);
  if(mediaAluno >= 7){
    alert(`O aluno ${nome} foi aprovado com a media ${mediaAluno}!`);
  }else if(mediaAluno>=5||mediaAluno<7){
    alert(`O aluno ${nome} esta de recuperação com a media ${mediaAluno}!`);
  }else{
    alert(`O aluno ${nome} foi reprovado com a media ${mediaAluno}!`);
  }
}

document.getElementById("btnMedia").addEventListener('click', aprovacao);