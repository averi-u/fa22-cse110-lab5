// explore.js

window.addEventListener('DOMContentLoaded', init);
const texts = document.getElementById("text-to-speak");
const soundPlay = document.querySelector("button");
const voiceSelect = document.getElementById("voice-select");

function text2speech(event) {
  
  soundPlay.addEventListener('click', function() {
    let textEntered = new SpeechSynthesisUtterance(texts.value);
    speechSynthesis.speak(textEntered);
  });
}

function populateVoiceList() {

  const voices = speechSynthesis.getVoices();

  for (let i = 0; i < voices.length; i++) {
    const option = document.createElement('option');
    option.textContent = `${voices[i].name} (${voices[i].lang})`;

    if (voices[i].default) {
      option.textContent += ' — DEFAULT';
    }

    option.setAttribute('data-lang', voices[i].lang);
    option.setAttribute('data-name', voices[i].name);
    voiceSelect.appendChild(option);
  }
}


function init() {
  // TODO
  texts.addEventListener('change', text2speech());
  populateVoiceList();
  voiceSelect.addEventListener('change', populateVoiceList());
}