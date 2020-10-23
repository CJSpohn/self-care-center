favoriteAffirmations = [];
favoriteMantras = [];

//query selectors
var mainDisplay = document.querySelector('.main');
var favoritesDisplay = document.querySelector('.favorites')
var messageButton = document.querySelector('.message-button');
var bellImage = document.querySelector('.meditation-image');
var message = document.querySelector('.message');
var affirmationSelect = document.querySelector('#affirmation')
var mantraSelect = document.querySelector('#mantra')
var clearButton = document.querySelector('.clear-button')
var starButton = document.querySelector('.star-button')
var favoriteStar = document.querySelector('.favorite-star')
var errorMessage = document.querySelector('.error')
var displayButtons = document.querySelector('.display-buttons')
var savedAffirmations = document.querySelector('.saved-affirmations')
var savedMantras = document.querySelector('.saved-mantras')
var favoritesButton = document.querySelector('.favorites-button')

//event listeners
messageButton.addEventListener('click', displayMessage)
affirmationSelect.addEventListener('click', removeMessage)
mantraSelect.addEventListener('click', removeMessage)
clearButton.addEventListener('click', clearMessage)
starButton.addEventListener('click', addToFavorites)
favoritesButton.addEventListener('click', displayFavorites)


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

function addToFavorites() {
  if (mantraSelect.checked && !favoriteMantras.includes(message.innerText)) {
    favoriteMantras.push(message.innerText)
  } else if (affirmationSelect.checked && !favoriteAffirmations.includes(message.innerText)) {
    favoriteAffirmations.push(message.innerText)
  }
  starButton.classList.remove('filter')
}

function removeMessage() {
  errorMessage.classList.add('hidden');
  bellImage.classList.remove('hidden');
  message.classList.add('hidden');
  displayButtons.classList.add('hidden');
  starButton.classList.add('hidden');
}

function displayFavorites() {
  mainDisplay.classList.toggle('hidden');
  favoritesDisplay.classList.toggle('hidden');
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

function getRandomData(array) {
  return array[Math.floor(Math.random() * array.length)];
}
