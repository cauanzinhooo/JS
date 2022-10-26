function meuescopo(){
    const fc = document.querySelector('.fc');

    const pessoas = []
    function eventodisparado(event){
        const resultado = document.querySelector('.resultado') 
        event.preventDefault();
        const name = fc.querySelector('.name')
        const Sobrenome = fc.querySelector('.Sobrenome')
        const Idade = fc.querySelector('.Idade')
        const Peso = fc.querySelector('.Peso')
        console.log(name,Sobrenome,Idade,Peso);
        pessoas.push({
            name: name.value,
            Sobrenome: Sobrenome.value,
            Idade: Idade.value,
            Peso: Peso.value 
        })
        console.log(pessoas)
        resultado.innerHTML += `<p>${name.value}</p>`




    }
    fc.addEventListener('submit',eventodisparado)
}
meuescopo();