// expose.js

/**
 * When you select a horn from the drop down menu, the following should occur:
The correct image should display
The correct audio sound file should be set
 */

window.addEventListener('DOMContentLoaded', init);
const jsConfetti = new JSConfetti()

const horn = document.getElementById("horn-select"); 
const soundPlay = document.querySelector("button")
const snd1 = document.querySelector("audio");
const vol = document.getElementById("volume");
const img1 = document.getElementsByTagName("img")[0];
const imgVol = document.getElementsByTagName("img")[1];

function changeHorn(event) {
  if (event.target.value == "air-horn") {
    img1.src = "assets/images/air-horn.svg";
    let alt1 = document.querySelector("input[name='alt']");
    alt1 = "image is selected.";
    snd1.src = "assets/audio/air-horn.mp3";
    soundPlay.addEventListener('click', function() {
      snd1.play();
    });

  }
  if (event.target.value == "car-horn") {
    img1.src = "assets/images/car-horn.svg";
    let alt1 = document.querySelector("input[name='alt']");
    alt1 = "image is selected.";
    snd1.src = "assets/audio/car-horn.mp3";
    soundPlay.addEventListener('click', function() {
      snd1.play();
    });
  }
  if (event.target.value == "party-horn") {
    img1.src = "assets/images/party-horn.svg";
    let alt1 = document.querySelector("input[name='alt']");
    alt1 = "image is selected.";
    snd1.src = "assets/audio/party-horn.mp3";
    soundPlay.addEventListener('click', function() {
      snd1.play();
      jsConfetti.addConfetti()
    });
  }
}

function volChange(event) {
  snd1.volume = event.target.value/100;
  if(event.target.value == "0"){
    imgVol.src = "assets/icons/volume-level-0.svg";
  }
  if(event.target.value >= "1" && event.target.value < "33" ){
    imgVol.src = "assets/icons/volume-level-1.svg";
  }
  if(event.target.value >= "33" && event.target.value < "67"){
    imgVol.src = "assets/icons/volume-level-2.svg";
  }
  if(event.target.value > "67"){
    imgVol.src = "assets/icons/volume-level-3.svg";
  }
}



function init() {
  // TODO
  horn.addEventListener('change', changeHorn);
  // soundPlay.addEventListener('click', playSound);
  vol.addEventListener('change', volChange)

}