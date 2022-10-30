// explore.js
window.addEventListener('DOMContentLoaded', init);
const texts = document.getElementById("text-to-speak");
const soundPlay = document.querySelector("button");
const voiceSelect = document.getElementById("voice-select");
const synthesis = window.speechSynthesis;

function text2speech(event) {
  soundPlay.addEventListener('click', function() {
    let textEntered = new SpeechSynthesisUtterance(texts.value);
    speechSynthesis.speak(textEntered);
  });
}

function populateVoiceList() {
  const voices = synthesis.getVoices();
  synthesis.onvoiceschanged = () => { 
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
}

function init() {
  texts.addEventListener('change', text2speech());
  populateVoiceList();
  voiceSelect.addEventListener('change', populateVoiceList());
}