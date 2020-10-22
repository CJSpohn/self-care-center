favoriteAffirmations = [];
favoriteMantras = [];

//query selectors
var messageButton = document.querySelector('.message-button');
var bellImage = document.querySelector('.meditation-image');
var message = document.querySelector('.message');
var affirmationSelect = document.querySelector('#affirmation')
var mantraSelect = document.querySelector('#mantra')
var clearButton = document.querySelector('.clear-button')
var favoriteButton = document.querySelector('.favorite-button')
var favoriteStar = document.querySelector('.favorite-star')

//event listeners
messageButton.addEventListener('click', displayMessage)
affirmationSelect.addEventListener('click', hideMessage)
mantraSelect.addEventListener('click', hideMessage)
clearButton.addEventListener('click', clearMessage)
favoriteButton.addEventListener('click', addToFavorites)

//event handlers
function displayMessage() {
  if (verifySelection() === false) {
    message.innerText = "Please select a message type."
    bellImage.classList.add('hidden')
    favoriteStar.classList.remove('hidden')
    return
  }
  if (!bellImage.classList.contains('hidden')) {
    revealMessage();
  }
  getMessage();
}

function hideMessage() {
  message.classList.add('hidden');
  bellImage.classList.remove('hidden');
  clearButton.classList.add('hidden')
  favoriteStar.classList.add('hidden')
}

function clearMessage() {
  message.innerText = "";
  affirmationSelect.checked = false;
  mantraSelect.checked = false;
  revealMessage();
}

function addToFavorites() {
  if (mantraSelect.checked && !favoriteMantras.includes(message.innerText)) {
    favoriteMantras.push(message.innerText)
  } else if (affirmationSelect.checked && !favoriteAffirmations.includes(message.innerText)) {
    favoriteAffirmations.push(message.innerText)
  }
}

//helper functions
function revealMessage() {
  bellImage.classList.toggle('hidden');
  message.classList.remove('hidden');
  favoriteStar.classList.toggle('hidden')
  clearButton.classList.toggle('hidden')
}

function getMessage() {
  if (affirmationSelect.checked) {;
    message.innerText = getRandomData(affirmations);
  } else if (mantraSelect.checked) {
    message.innerText = getRandomData(mantras)
  }
}

function verifySelection() {
  if (affirmationSelect.checked || mantraSelect.checked) {
    return true
  } else {
    return false
  }
}

function getRandomData(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function toggleFavorite() {
  favoriteButton.classList.toggle('filter');
}
