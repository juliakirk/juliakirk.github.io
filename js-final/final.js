function random(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
  }

function posNeg(){
    val = random(1,10);
    if( val % 2 === 0){
        return -1
    }
    else{
        return 1
    }
}

  function createBouncingButton(i) {
    var button = document.createElement("button");
    button.innerHTML = i;
    document.body.appendChild(button);

    // Set initial position
    var posX = Math.random() * (window.innerWidth - button.clientWidth);
    var posY = Math.random() * (window.innerHeight - button.clientHeight);

    // Set initial direction
    var directionX =random(-4,4)
    var directionY = random(-4,4)

    function updatePosition() {
      // Update position
      posX += .83 * directionX;
      posY += .83 * directionY;

      // Bounce off the walls
      if (posX <= 0 || posX >= window.innerWidth - button.clientWidth) {
        directionX *= -1;
      }
      if (posY <= 0 || posY >= window.innerHeight - button.clientHeight) {
        directionY *= -1;
      }

      // Apply new position
      button.style.left = posX + "px";
      button.style.top = posY + "px";

      // Request the next animation frame
      requestAnimationFrame(updatePosition);
    }

    // Start the animation loop
    updatePosition();
phoneNumber = '';
    // Add a click event listener to the button
    button.addEventListener("click", function() {
        if(button.innerText === 'Clear'){
            phoneNumber = ""
        }
        else if(phoneNumber.length < 10){
            phoneNumber += button.innerText
        }
        console.log(phoneNumber)
        document.getElementById('phone').innerHTML = phoneNumber
    });
  }

  // Create multiple bouncing buttons
  for (let i = 0; i <= 10; i++) {
    
    if(i === 10){
        createBouncingButton('Clear')
    }
    else{
        createBouncingButton(i);
    }
  }
