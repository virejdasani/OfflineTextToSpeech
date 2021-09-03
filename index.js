var isSpeaking = false;

function speakInputText() {
  isSpeaking = true;

  // Initialize the speech
  let speech = new SpeechSynthesisUtterance();
  speech.rate = 1;
  speech.pitch = 1;
  speech.volume = 1;
  speech.voice = speechSynthesis.getVoices()[0];
  speech.text = document.getElementById("textInput").value;
  speechSynthesis.speak(speech);
}

function pauseSpeech() {
  if (isSpeaking) {
    speechSynthesis.pause();
    isSpeaking = false;
  } else {
    speechSynthesis.resume();
    isSpeaking = true;
  }
}

function stopSpeech() {
  speechSynthesis.cancel();
}

// TODO
// speech rate
// speech voice
