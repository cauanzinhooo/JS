function TimeSeconds(s){
    const data = new Date(s * 1000);
    return data.toLocaleTimeString('pt-br',{
        hour12: false,
        timeZone: 'UTC'
    });
}
const clock = document.querySelector('#clock')
const start = document.querySelector('.start')
const pause = document.querySelector('.pause')
const restart = document.querySelector('.restart')
let sec = 0;
let timer;
function StartingClock(){
    timer = setInterval(function(){
        sec++;
        clock.innerHTML = TimeSeconds(sec)
    },1000)
}
start.addEventListener('click', function(e){
    clearInterval(timer)
    StartingClock();
    clock.classList.remove('pausee')
});
pause.addEventListener('click', function(e){
    clearInterval(timer);
    clock.classList.add('pausee')
    
});
restart.addEventListener('click', function(e){
    clearInterval(timer);
    clock.innerHTML = '00:00:00'
    sec = 0;
    
});