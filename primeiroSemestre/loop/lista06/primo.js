function primo(numero){
  let vezesDividido = 0;
  for(let e = 1; e <= numero; e++){
    if(numero%e == 0){
      vezesDividido++;
    }
  }
  if(vezesDividido == 2){
    return(true);
  }else{
    return(false);
  }
}

for(let e = 1; e <= 100; e++){
  if(primo(e)){
    console.log(e);
  }else{
    continue;
  }
}