function randomizar(min = 1000, max = 5000){
    const n = Math.random() * (max - min) + min;
    return Math.floor(n);

}
function f1(callback){
    setTimeout(function(){
        console.log('X1');
        if(callback) callback();
    },randomizar());
}
function f2(callback){
    setTimeout(function(){
        console.log('X2');
        if(callback) callback();
    },randomizar());
}
function f3(callback){
    setTimeout(function(){
        console.log('X3');
        if(callback) callback();
    },randomizar());
}
f1(function(){
    f2(function(){
        f3(function(){
            setTimeout(function(){
                console.log('OH YEAHHH"""')
            },10000)
        })
    })
})