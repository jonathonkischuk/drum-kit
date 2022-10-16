// query the document's selectors for all objects with the class "drum" and stored the number in a variable
var numDrumButtons = document.querySelectorAll(".drum").length;

// using a for loop we query the document for buttons and add an event listener for when it is clicked and stores it for a switch statement
for (var i = 0; i < numDrumButtons; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    // stores the inner HTML of the button that was clicked
    var buttonInnerHTML = this.innerHTML;

    // call the makeSound function and buttonAnimation function, and pass in the inner HTML variable
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);

  });

}


// adds an event listener to the document that watches for a key to be pressed, and then call makeSound amd buttonAnimation functions
document.addEventListener("keydown", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
})

// create function makeSound() and pass in thd key value of the event (key that was pressed down)
function makeSound(key) {

  // switch statement checking for matches on the button clicked, creates a new Audio instance and assigns it an audio file, then plays it
  switch (key) {
    case "w":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;
    case "j":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;
    case "k":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;
    case "l":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;
    default:
      console.log(buttonInnerHTML);
      break;

  }
}

// creates a function that causes the button styling to appear "pressed" and then return to "normal" after a pause
function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function () {

    activeButton.classList.remove("pressed");

  }, 100);

}
