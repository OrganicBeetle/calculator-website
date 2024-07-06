const display = document.getElementById("display");
let flag = false;
function appendToDisplay(element){
    if(display.value==="Math Error" || flag === true){
        display.value = "";
    }

    display.value += element;
    flag = false;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
    let result = eval(display.value);
    if(result/result !== 1)
        display.value = (result).toFixed(2);
    else
        display.value = result;
    flag = true;
    
    }
    catch(error){
        display.value = ("Math Error");
    }
}
