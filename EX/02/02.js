const form = document.querySelector('#LMAO');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const inputheight = e.target.querySelector('#Height')
  const inputweight = e.target.querySelector('#Weight')
  const height = Number(inputheight.value);
  const weight = Number(inputweight.value)
  if (!weight){
    result('Weight not is valid', false)
    return ;
  }
  if(!height){
    result('Height not is valid', false)
    return ;
  }
  const imc = createimc(height,weight)
  console.log(imc)
  
});
function createp(){
  const p = document.createElement('p');
  return p
}
function createimc(weight,height){
  const imc = weight / height ** 2;
  return imc.toFixed(2);
}
function result(msg,valited){
    const b = document.querySelector('#result');
    b.innerHTML = '';
    const p = createp();
    p.innerHTML = msg;
    b.appendChild(p)
    
  }
