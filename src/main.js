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
var errorMessage = document.querySelector('.error')

//event listeners
messageButton.addEventListener('click', displayMessage)
affirmationSelect.addEventListener('click', removeMessage)
mantraSelect.addEventListener('click', removeMessage)
clearButton.addEventListener('click', clearMessage)
favoriteButton.addEventListener('click', addToFavorites)

//event handlers
function displayMessage() {
  if (verifySelection() === false) {
    errorMessage.classList.remove('hidden')
    bellImage.classList.add('hidden')
    return
  }
  revealMessage();
  getMessage();
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
}

function removeMessage() {
  errorMessage.classList.add('hidden');
  bellImage.classList.remove('hidden');
  message.classList.add('hidden');
  favoriteButton.classList.add('hidden');
  clearButton.classList.add('hidden');
}

//helper functions
function revealMessage() {
  errorMessage.classList.add('hidden');
  bellImage.classList.add('hidden');
  message.classList.remove('hidden');
  favoriteButton.classList.remove('hidden')
  clearButton.classList.remove('hidden');
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
