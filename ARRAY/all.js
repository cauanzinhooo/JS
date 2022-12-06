const numbers = [4,12,5,50,80,90,100,200];
const Numbersp = numbers.filter( (valor) => {
    return valor % 2 === 0;
}).map( valor =>{
    return valor * 2;
}).reduce( (ac,valor) =>{
    return ac + valor;
});
console.log(Numbersp);