function pessoa(){
    return{
        nome,
        idade,
        function flecha(){
            console.log(this.nome);
            console.log(this.idade);
        }
    }
};
const p1 = pessoa('Cauã',20)
console.log(p1);