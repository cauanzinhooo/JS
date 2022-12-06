//const a1 = [1,2,3,4,5,11,20,30,40,50];
//const a1filter = a1.filter((valor) =>{
//    return valor > 10;
//q});
//console.log(a1filter);

const peoples = [
    {name: 'Sebastian', years: 62},
    {name: 'Son', years: 13},
    {name: 'Penelope', years: 50},
    {name: 'Platao', years: 113},
];
const newpeoples0 = peoples.filter(valor =>{
    return valor.name.length >= 5;
})
console.log(newpeoples0);