function clearDisplay(){
    document.getElementById("display").value="";
}

function deleteLast(){
    // document.getElementById("display").value.slice(0,-1)
    const display= document.getElementById("display");
    display.value=display.value.slice(0,-1);
}

function appendChar(char){
    const display=document.getElementById("display");
    display.value+=char;
}

function calculate(){
    try{
        const display=document.getElementById("display");
        display.value=eval(display.value);
    }
    catch(error){
        display.value="error"
    }
}