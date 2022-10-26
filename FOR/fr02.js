const pr = [{tag: 'p', Texto: 'Uma frase'},
            {tag: 'div', Texto: 'Uma div '},
            {tag: 'section', Texto: 'Uma section'},
            {tag: 'footer', Texto: 'Um footer'}];
const container = document.querySelector('.container');
const div = document.createElement('div');
for ( let i = 0; i < pr.length; i++){
    let {tag,Texto} = pr[i];
    let CreateTag = document.createElement(tag);
    CreateTag.innerHTML = Texto;
    div.appendChild(CreateTag);
}
container.appendChild(div)
