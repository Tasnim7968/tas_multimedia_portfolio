let topics = [];
let deferredPrompt;

// Load JSON data and build the dropdown menu
fetch("data.json")
  .then(response => response.json())
  .then(data => {
    topics = data.topics;
    populateMenu();
  });

// Dynamically populate the menu from JSON
function populateMenu() {
  const menu = document.getElementById("topicMenu");

  const defaultOption = document.createElement("option");
  defaultOption.textContent = "-- Select a Solar System Topic --";
  defaultOption.value = "";
  menu.appendChild(defaultOption);

  topics.forEach((topic, index) => {
    const option = document.createElement("option");
    option.value = index;
    option.textContent = topic.title;
    menu.appendChild(option);
  });

  menu.addEventListener("change", displayTopic);
}

// Display selected topic information
function displayTopic() {
  const menu = document.getElementById("topicMenu");
  const selectedIndex = menu.value;

  if (selectedIndex === "") {
    document.getElementById("topicTitle").textContent = "Welcome";
    document.getElementById("topicText").textContent = "Select a topic to learn about the solar system.";
    document.getElementById("topicImage").style.display = "none";
    return;
  }

  const topic = topics[selectedIndex];

  document.getElementById("topicTitle").textContent = topic.title;
  document.getElementById("topicText").textContent = topic.description;

  const image = document.getElementById("topicImage");
  image.src = topic.image;
  image.alt = topic.title;
  image.style.display = "block";
}

// Text-to-speech feature
function speakText() {
  const title = document.getElementById("topicTitle").textContent;
  const text = document.getElementById("topicText").textContent;

  const message = new SpeechSynthesisUtterance(title + ". " + text);
  message.rate = 1;
  message.pitch = 1.1;

  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(message);
}

// Register service worker for offline support
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js");
}

// Install button logic
window.addEventListener("beforeinstallprompt", event => {
  event.preventDefault();
  deferredPrompt = event;

  const installBtn = document.getElementById("installBtn");
  installBtn.hidden = false;

  installBtn.addEventListener("click", async () => {
    installBtn.hidden = true;
    deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    deferredPrompt = null;
  });
});