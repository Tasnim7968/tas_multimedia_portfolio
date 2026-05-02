// =====================================
// MULTIMEDIA DICTIONARY JAVASCRIPT
// This file controls the dropdown,
// sentence display, and speech buttons.
// =====================================

// Reusable Web Speech API function
function speak(textToSay) {
  const message = new SpeechSynthesisUtterance(textToSay);
  message.pitch = 1.2;
  message.rate = 1.0;
  window.speechSynthesis.speak(message);
}

// Shows the sentence connected to the selected word
function showSentence() {
  const menu = document.getElementById("wordSelect");
  const sentenceBox = document.getElementById("sentenceBox");

  // Gatekeeper validation: index 0 is only the instruction option
  if (menu.selectedIndex > 0) {
    const selectedOption = menu.options[menu.selectedIndex];

    // Gets the hidden sentence from data-sentence
    sentenceBox.value = selectedOption.dataset.sentence;
  } else {
    sentenceBox.value = "";
  }
}

// Speaks the selected word
function speakSelectedWord() {
  const menu = document.getElementById("wordSelect");

  if (menu.selectedIndex > 0) {
    speak(menu.value);
  } else {
    alert("Please select a word first.");
  }
}

// Speaks the displayed sentence
function speakSentence() {
  const sentenceBox = document.getElementById("sentenceBox");

  if (sentenceBox.value !== "") {
    speak(sentenceBox.value);
  } else {
    alert("Please select a word first.");
  }
}