const inputtaf = document.querySelector('#assign')
const addtext = document.querySelector('#addassign')
const taf = document.querySelector('#taf')
inputtaf.addEventListener('keyup',function (e){
    if( e.keyCode === 13){
        if (!inputtaf.value) return;
        createtaf(inputtaf.value)
    }
})
function creatbottom(li){
    li.innerText += '  ';
    const bottom = document.createElement('button')
    bottom.innerText = 'Delete'
    li.appendChild(bottom)
    bottom.setAttribute('class', 'apagar')
}
function clearinput(){
    inputtaf.value = ''
    inputtaf.focus();
}
function createLi(){
    const li = document.createElement('li');
    return li
}
function createtaf(texti){
    const li = createLi();
    li.innerText = texti;
    taf.appendChild(li)
    clearinput();
    creatbottom(li)
}
addtext.addEventListener('click', function( ){
    if (!inputtaf.value) return;
    createtaf(inputtaf.value)
})
document.addEventListener('click', function(e){
    const elementt = e.target;
    if( elementt.classList.contains('apagar')){
        elementt.parentElement.remove();
    }
})