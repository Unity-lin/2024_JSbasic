const number = document.getElementById("number");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");   

    increase.onclick = () => { 
        const current = parseInt(number.innerText, 10); 
        number.innerText = current + 1;}; 
    
    decrease.onclick = () => {  
        const current = parseInt(number.innerText, 10);  
        if(current <= 0){
            current = 0
            number.innerHTML = current
        }
        number.innerText = current - 1;};