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
  if (typeof speechSynthesis === 'undefined') {
    return;
  }
  
  synthesis.onvoiceschanged = () => { 
    const voices = synthesis.getVoices();
    setTimeout(() => {
      
      for (let i = 0; i < voices.length; i++) {
        const option = document.createElement('option');
  
        
        option.textContent = `${voices[i].name} (${voices[i].lang})`;
        
        if (voices[i].default) {
          option.textContent += ' — DEFAULT';
        }
  
        option.setAttribute('data-lang', voices[i].lang);
        option.setAttribute('data-name', voices[i].name);
        
        option.value = voices[i].lang;
        option.innerHTML = voices[i].lang;
        voiceSelect.appendChild(option);
      }
      
    }, (1000));

  }
}

function init() {
  texts.addEventListener('change', text2speech());
  populateVoiceList();

  /*
  if (typeof speechSynthesis !== 'undefined' && speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }
  voiceSelect.addEventListener('change', populateVoiceList());
  */
}