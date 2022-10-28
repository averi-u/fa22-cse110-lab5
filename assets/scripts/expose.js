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
  if (event.target.value == "Car Horn") {
    let img1 = document.getElementsByTagName("img")[1];
    img1.src = "assets/images/car-horn.svg";
    let alt1 = document.querySelector("input[name='alt']");
    alt1 = "image is selected.";
    let snd1 = document.getElementsByClassName("hidden");
    snd1.src = "assets/audio/car-horn.mp3";
  }
  if (event.target.value == "Party Horn") {
    let img1 = document.getElementsByTagName("img")[1];
    img1.src = "assets/images/party-horn.svg";
    let alt1 = document.querySelector("input[name='alt']");
    alt1 = "image is selected.";
    let snd1 = document.getElementsByClassName("hidden");
    snd1.src = "assets/audio/party-horn.mp3";
  }
}

function init() {
  // TODO
  const horn = document.getElementById("horn-select"); 
  horn.addEventListener('click', changeHorn(horn));

}