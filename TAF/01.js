const inputxxx = document.querySelector("#inputxxx")
const addbtn = document.querySelector("#addbtn")
const taf = document.querySelector("#taf")

inputxxx.addEventListener('keyup',function(e){
    if ( e.keyCode === 13){
        if(!inputxxx.value) return
        addtaf(inputxxx.value);
    }
})
function createbtn(li){
    li.innerText += '  ';
    const btn = document.createElement('button');
    btn.innerText = 'Delete';
    li.appendChild(btn);
    btn.setAttribute('class', 'btn');

}
function clearinput(){
    inputxxx.value = '';
    inputxxx.focus()
}
function createli(){
    const li = document.createElement('li');
    return li;
}
function addtaf(text){
    const li = createli();
    li.innerText = text;
    taf.appendChild(li);
    clearinput();
    createbtn(li);
    
}
createbtn().addEventListener('click',function(){
    if(!inputxxx.value) return
    addtaf(inputxxx.value);

})
btn.addEventListener('click',function(e){
    if(btn.classList.contains('btn')){
        btn.parentElement.remove();
    }

})