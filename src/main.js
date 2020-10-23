favoriteAffirmations = [];
favoriteMantras = [];

//query selectors
var mainDisplay = document.querySelector('.main');
var favoritesDisplay = document.querySelector('.favorites');
var bellImage = document.querySelector('.meditation-image');
var message = document.querySelector('.message');
var affirmationSelect = document.querySelector('#affirmation');
var mantraSelect = document.querySelector('#mantra');
var favoriteStar = document.querySelector('.favorite-star');
var errorMessage = document.querySelector('.error');
var displayButtons = document.querySelector('.display-buttons');
var savedAffirmations = document.querySelector('.saved-affirmations');
var savedMantras = document.querySelector('.saved-mantras');
var affirmationsList = document.querySelector('.saved-affirmations')
var mantrasList = document.querySelector('.saved-mantras')

var starButton = document.querySelector('.star-button');
var favoritesButton = document.querySelector('.favorites-button');
var clearButton = document.querySelector('.clear-button');
var messageButton = document.querySelector('.message-button');
var backButton = document.querySelector('.back-to-main');
var deleteButton = document.querySelector('.delete-button')

//event listeners
messageButton.addEventListener('click', displayMessage);
affirmationSelect.addEventListener('click', removeMessage);
mantraSelect.addEventListener('click', removeMessage);
clearButton.addEventListener('click', clearMessage);
starButton.addEventListener('click', checkFavorites);
favoritesButton.addEventListener('click', toggleFavorites);
backButton.addEventListener('click', toggleFavorites);
deleteButton.addEventListener('click', deleteMessage)

//event handlers
function displayMessage() {
  if (verifySelection() === false) {
    errorMessage.classList.remove('hidden')
    bellImage.classList.add('hidden')
    return
  }
  getMessage();
  verifyFavorite();
  revealMessage();
}

function clearMessage() {
  message.innerText = "";
  affirmationSelect.checked = false;
  mantraSelect.checked = false;
  removeMessage();
}

function checkFavorites() {
  if (starButton.classList.contains('filter')) {
    addToFavorites();
  } else {
    removeFromFavorites();
  }
}

function removeMessage() {
  errorMessage.classList.add('hidden');
  bellImage.classList.remove('hidden');
  message.classList.add('hidden');
  displayButtons.classList.add('hidden');
  starButton.classList.add('hidden');
}

function toggleFavorites() {
  mainDisplay.classList.toggle('hidden');
  favoritesDisplay.classList.toggle('hidden');
  displayFavorites();
}



//helper functions
function revealMessage() {
  errorMessage.classList.add('hidden');
  bellImage.classList.add('hidden');
  message.classList.remove('hidden');
  starButton.classList.remove('hidden');
  displayButtons.classList.remove('hidden');
}

function getMessage() {
  if (affirmationSelect.checked) {;
    message.innerText = getRandomData(affirmations);
  } else if (mantraSelect.checked) {
    message.innerText = getRandomData(mantras)
  }
}

function verifySelection() {
  return (affirmationSelect.checked || mantraSelect.checked)
}

function verifyFavorite() {
  if (favoriteMantras.includes(message.innerText) || favoriteAffirmations.includes(message.innerText)) {
    starButton.classList.remove('filter');
  } else {
    starButton.classList.add('filter');
  }
}

function removeFromFavorites() {
  starButton.classList.toggle('filter')
  if (mantraSelect.checked) {
    favoriteMantras.splice(favoriteMantras.indexOf(message.innerText), 1)
  } else if (affirmationSelect.checked){
    favoriteAffirmations.splice(favoriteAffirmations.indexOf(message.innerText), 1)
  }
}

function addToFavorites() {
  if (mantraSelect.checked && !favoriteMantras.includes(message.innerText)) {
    favoriteMantras.push(message.innerText)
  } else if (affirmationSelect.checked && !favoriteAffirmations.includes(message.innerText)) {
    favoriteAffirmations.push(message.innerText)
  }
  starButton.classList.remove('filter')
}

function displayFavorites() {
  affirmationsList.innerHTML = ""
  mantrasList.innerHTML = ""
  for (var i = 0; i < favoriteAffirmations.length; i++) {
    affirmationsList.innerHTML += `<li>${favoriteAffirmations[i]}</li>`
  }
  for (var i = 0; i < favoriteMantras.length; i++) {
    mantrasList.innerHTML += `<li>${favoriteMantras[i]}</li>`
  }
}

function getRandomData(array) {
  return array[Math.floor(Math.random() * array.length)];
}
