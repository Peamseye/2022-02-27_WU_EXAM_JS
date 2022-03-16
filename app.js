//Starting timer
var timer = 30;

//Click variable
let clicked = 0;

//Retry button variable
let retryclick = false;

var posX = 1;

//Randomizes X and Y position for button
let randomX = Math.floor(Math.random() * 5) + 1;
let randomY = Math.floor(Math.random() * 5) + 1;

//Label variable for button
let label = document.querySelector(".aim-text");

//Label variable for time
let label2 = document.querySelector(".time-left");

//Label variable for points
let label3 = document.querySelector(".point-btn");

//Label variable for retry button
let label4 = document.querySelector(".restart-game")


//Function for counting down (Counts in milliseconds, thus 1000 at the end)
var x = setInterval(function() {

    //Check if player has started clicking the button before counting down
    if (clicked > 0 && timer > 0)
    {
        timer--;
        //Write down time left
        label2.innerHTML = `Time left:${timer}`;
    }
    //Activates the retry button when the time is out
    else if (clicked > 0){
        //Replaces time
        label2.innerHTML = "GAME OVER";
        //Removes button
        label3.innerHTML = "";
        //Adds retry button
        label4.innerHTML = "RETRY";
    }
  
    //defines time
  document.getElementById("time").innerHTML = timer;

}, 1000);

//Adds function when clicking label3 (button) and label4 (retry text)
label3.addEventListener("click", handleClick);
label4.addEventListener("click", handleClick2);

//Moves player to main menu when clicking retry
function handleClick2() {
window.location.href='mainmenu.html';
}

//Adds points when clicking button
function handleClick() {
if (timer > 0)
{
    clicked+=1;
}
//Show points
label.innerHTML = `Points:${clicked} |`;

//Randomize button position in css grid
document.documentElement.style.setProperty('--posY', Math.floor(Math.random() * 5) + 1);
document.documentElement.style.setProperty('--posX', Math.floor(Math.random() * 5) + 1);

document.setElementById("grid-item").gridRow =  2;
}