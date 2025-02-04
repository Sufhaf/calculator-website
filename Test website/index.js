const display = document.getElementById("display");
const clickSound = new Audio("click.mp3");
const clearSound = new Audio("reset.wav");
const enterSound = new Audio("enter.wav");


function appendToDisplay(input){
    display.value += input;
    clickSound.play();
    clickSound.currentTime = 0;
}

function clearDisplay(){
    display.value ="";
    clearSound.play();
    clearSound.currentTime = 0;
}

function calculate(){
    try{
    display.value = eval(display.value);
    enterSound.play();
    enterSound.currentTime = 0;
    }
    catch(error){
        display.value = "Error";
    }
}