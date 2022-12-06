const peoples = [
    {name: 'Sebastian', years: 62},
    {name: 'Son', years: 13},
    {name: 'Penelope', years: 50},
    {name: 'Platao', years: 113},
];

const newpeoples = peoples.reduce(function (acumulator,value){
    if (acumulator.years > value.years) return acumulator
    return value;
});
console.log(newpeoples)