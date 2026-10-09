export class Pilha{
  #array
  #topo
  constructor() {
    this.#array = [];
    this.#topo = -1;
  }
  isEmpty(){
    return(this.#topo === -1);
  }
  getLength(){
    return(this.#topo+1);
  }
  stack(elemento){
    this.#array[++this.#topo] = elemento;
  }
  getElement(){
    if(this.isEmpty()){
      throw new Error("Pilha Vazia!");
    }
    return(this.#array[this.#topo]);
  }
  unstack(){
    if(this.isEmpty()){
      throw new Error("Pilha Vazia!");
    }
    return(this.#array--);
  }
  clearStack(){
    this.#topo = -1;
    this.#array = [];
  }
}