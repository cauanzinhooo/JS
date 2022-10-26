function capturar(){
  let data = new Date();
   return data.toLocaleTimeString('pt-br',{hour12: false});
}
const tempo = setInterval(function(){
  console.log(capturar());
}, 1000);

setTimeout(function(){
  clearInterval(tempo);
},3000);

