let firstvalue = document.querySelector('#value1');
let secondvalue = document.querySelector('#value2');
let select = document.querySelector('#islem');
let sonuc = document.getElementById("sonuc");
const btn = document.getElementById("btn");
btn.addEventListener("click", domClick);

function domClick(){
    if(secondvalue.value.length != 0 && firstvalue.value.length != 0){
   
    if(select.selectedIndex == 0  ){
        let first = parseInt(firstvalue.value)+parseInt(secondvalue.value);
        sonuc.innerHTML = "Sonucunuz: " + first ;
        
    }
    
    else if(select.selectedIndex == 1){
        let second = firstvalue.value-secondvalue.value
        sonuc.innerHTML = "Sonucunuz: " + second ;
    }
    else if(select.selectedIndex == 2){
        let third = firstvalue.value*secondvalue.value;
        sonuc.innerHTML = "Sonucunuz: " + third ;

    }
    else if(select.selectedIndex == 3){
        let forth = firstvalue.value/secondvalue.value;
        sonuc.innerHTML = "Sonucunuz: " + forth.toFixed(2) ;
    }
}}