function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

function createBouncingButton(i) {
  // create a button
  var button = document.createElement("button");
  // set text inside
  button.innerHTML = i;
  // add to the document body
  document.body.appendChild(button);

  // Set initial position within window size based on button size
  var posX = Math.random() * (window.innerWidth - button.clientWidth);
  var posY = Math.random() * (window.innerHeight - button.clientHeight);

  // Set initial direction between -4 and 4
  console.log("button"+i)
  var directionX =direction(random(1,8))
  console.log(directionX)
  var directionY = direction(random(1,8))
  console.log(directionY)


  function updatePosition() {
    // Update position
    posX += directionX;
    posY += directionY;

    // check if button is touching the walls of the window if so switch direction
    if (posX <= 0 || posX >= window.innerWidth - button.clientWidth) {
      directionX = -(directionX);
    }
    if (posY <= 0 || posY >= window.innerHeight - button.clientHeight) {
      directionY = -(directionY);
    }

    // change button positon 
    button.style.left = posX + "px";
    button.style.top = posY + "px";

    // Request the next animation frame for the button
    requestAnimationFrame(updatePosition);
  }

  // Start the animation loop
  updatePosition();
  // create empty string for phone number
  phoneNumber = '';

  // Add a click event listener to the button to see if mouse is down for additional functunality 
  button.addEventListener("mousedown", function() {
    // check if button text is clear is so clear phone number string
      if(button.innerText === 'Clear'){
          phoneNumber = ""
      }
      else if(button.innerText === 'Submit'){
        if(phoneNumber.length < 10){
         alert("Invalid length")
        }
        else{
          alert("Your phone number is: "+ phoneNumber)
        }
    }
      // check if phone number is less than 10 characters
      // if it is add button number to phone number string
      else if(phoneNumber.length < 10){
          phoneNumber += button.innerText
      }
      console.log(phoneNumber)
      // change html to display phone number
      document.getElementById('phone').innerHTML = phoneNumber
  });
}

// Create multiple bouncing buttons
for (let i = 0; i <= 11; i++) {
  // if 10th number make button 'clear'
  if(i === 10){
      createBouncingButton('Clear')
  }
  else if(i === 11){
    createBouncingButton('Submit')
  }
  else{
    // make buttons 0 - 9
      createBouncingButton(i);
  }
}
// function to set directions so none of the balls would be slow/ stopped
function direction(randVar){
  if(randVar === 1){
    return -4
  }
  else if ((randVar === 2)){
    return 4
  }
  else if ((randVar === 3)){
    return -3.5
  }
  else if ((randVar === 4)){
    return 3.5
  }
  else if ((randVar === 5)){
    return 4.25
  }
  else if ((randVar === 6)){
    return -4.25
  }
  else if ((randVar === 7)){
    return -3.75
  }
  else if ((randVar === 8)){
    return 3.75
  }
}