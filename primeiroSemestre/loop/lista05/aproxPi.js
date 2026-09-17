function pi(){
  let pi = 0;
  for(let e = 0; e <= 1000; e++){
    let numerador = 4;
    let denominador = 2 * e + 1;
    if(e%2 == 0){
      pi += numerador/denominador;
    }else{
      pi -= numerador/denominador;
    }
  }
  return pi;
}

console.log(pi())