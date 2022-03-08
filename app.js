let clicked = 0;
let label = document.querySelector(".aim-text");


let label2 = document.querySelector(".point-btn");

label2.addEventListener("click", handleClick);

function handleClick() {
    clicked+=1;
    label.innerHTML = `Clicked: ${clicked}`;
}