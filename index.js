const display = document.getElementById("display"); // Gets the display element from the DOM
const clickSound = new Audio("click.mp3"); 
const clearSound = new Audio("reset.wav");
const enterSound = new Audio("enter.wav"); // These all load sound files for the calculator


function appendToDisplay(input){ // Function to append input to the display
    display.value += input; //Append the input value to the display
    clickSound.play(); 
    clickSound.currentTime = 0; // Plays mp3 file sound on input
}

function clearDisplay(){ // Function to clear the display on click
    display.value =""; // Sets to value of the display to blank
    clearSound.play();
    clearSound.currentTime = 0; // Plays mp3 file sound on input
}

function calculate(){ // Function to calculate the arithmatic 
    try{ // Using try, it allows an error input for eronius inputs the user does
    display.value = eval(display.value);  // Calculates and evaluates the arithmatic operation and displays it
    enterSound.play();
    enterSound.currentTime = 0; // Plays mp3 file sound on input
    }
    catch(error){ // If an eronious input has occured, display text 'Error'
        display.value = "Error";
    }
}
