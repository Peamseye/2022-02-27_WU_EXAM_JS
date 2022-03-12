var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();
    
    // Update the count down every 1 second
    var timer = 30;
    let clicked = 0;

    let label = document.querySelector(".aim-text");
    let label2 = document.querySelector(".time-left");
    let label3 = document.querySelector(".point-btn");
    
    var x = setInterval(function() {

        
        if (clicked > 0 && timer > 0)
        {
            timer--;
            label2.innerHTML = `Time left:${timer}`;
        }
        else if (clicked > 0){
            label2.innerHTML = "EXPIRED";
            label3.innerHTML = "";
        }
        

    
      document.getElementById("time").innerHTML = timer;
        
      // If the count down is over, write some text 
      //if (timer <= 0) {
        //clearInterval(x);
        //document.getElementById("time").innerHTML = "EXPIRED";
    //}

    }, 1000);




label3.addEventListener("click", handleClick);

function handleClick() {
    if (timer > 0)
    {
        clicked+=1;
        Math.floor(Math.random() * 5) + 1;
        Math.floor(Math.random() * 5) + 1;
    }
    label.innerHTML = `Points:${clicked} |`;
}
