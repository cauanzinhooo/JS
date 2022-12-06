function Calc(){
    this.display = document.querySelector('.display')
    this.capturacliques = () =>{
        document.addEventListener('click', event =>{
            const el = event.target;
            if( el.classList.contains('btn-num')) this.addNumDisplay(el);
            if ( el.classList.contains('btn-clear')) this.clear(el);
            if( el.classList.contains('btn-del')) this.del(el);
        });
    };
    this.clear = el => this.display.value = ' '
    this.addNumDisplay = el => this.display.value += el.innerText;
    this.del = el => this.display.value = this.display.value.slice(0, -1);
    this.start = () =>{
        this.capturacliques();  
    };
}
const calc = new Calc();
calc.start();
