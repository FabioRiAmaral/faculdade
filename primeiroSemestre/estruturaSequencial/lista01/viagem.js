function CustoViagem(velocidadeMedia, tempo){
    let d = tempo * velocidadeMedia
    let custo = 6.20 * (d / 12.5);
    console.log(`A viagem teve o custo de ${custo} percorrendo um total de ${d}Km, levando um total de ${t} horas numa velocidade media de ${vM} Km/h`);
}

const vM = 40;
const t = 2;
CustoViagem(vM, t);
