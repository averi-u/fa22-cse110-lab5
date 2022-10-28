// expose.js

/**
 * When you select a horn from the drop down menu, the following should occur:
The correct image should display
The correct audio sound file should be set
 */
window.addEventListener('DOMContentLoaded', init);
function changeHorn(event) {
  if (event.target.value == "Air Horn") {
    let img1 = document.getElementsByTagName("img")[1];
    img1.src = "assets/images/air-horn.svg";
    let alt1 = document.querySelector("input[name='alt']");
    alt1 = "image is selected.";
    let snd1 = document.getElementsByClassName("hidden");
    snd1.src = "assets/audio/air-horn.mp3";
    
  }
  if (event == "Car Horn") {

  }
  if (event == "Party Horn") {

  }
}

function init() {
  // TODO
}