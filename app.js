// Update the count down every 1 second
var timer = 30;
let clicked = 0;
let retryclick = false;

var posX = 1;

let randomX = Math.floor(Math.random() * 5) + 1;
let randomY = Math.floor(Math.random() * 5) + 1;

let label = document.querySelector(".aim-text");
let label2 = document.querySelector(".time-left");
let label3 = document.querySelector(".point-btn");
let label4 = document.querySelector(".restart-game")

var x = setInterval(function() {

    
    if (clicked > 0 && timer > 0)
    {
        timer--;
        label2.innerHTML = `Time left:${timer}`;
    }
    else if (clicked > 0){
        label2.innerHTML = "GAME OVER";
        label3.innerHTML = "";
        label4.innerHTML = "RETRY";
    }

  document.getElementById("time").innerHTML = timer;

}, 1000);

label3.addEventListener("click", handleClick);
label4.addEventListener("click", handleClick2);

function handleClick2() {
window.location.href='mainmenu.html';
}

function handleClick() {
if (timer > 0)
{
    clicked+=1;
}
label.innerHTML = `Points:${clicked} |`;

document.documentElement.style.setProperty('--posY', Math.floor(Math.random() * 5) + 1);
document.documentElement.style.setProperty('--posX', Math.floor(Math.random() * 5) + 1);

document.setElementById("grid-item").gridRow =  2;
}