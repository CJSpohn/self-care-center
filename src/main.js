favoriteAffirmations = [];
favoriateMantras = [];
favoriteAffirmations = JSON.parse(localStorage.getItem(favoriteAffirmations)) || [];
favoriteMantras = JSON.parse(localStorage.getItem(favoriteAffirmations)) || [];

//query selectors
var mainDisplay = document.querySelector('.main');
var messageDisplay = document.querySelector('.display');
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
var mantrasList = document.querySelector('.saved-mantras');
var confirmDelete = document.querySelector('.confirm-delete')

var starButton = document.querySelector('.star-button');
var favoritesButton = document.querySelector('.favorites-button');
var clearButton = document.querySelector('.clear-button');
var messageButton = document.querySelector('.message-button');
var backButton = document.querySelector('.back-to-main');
var deleteButton = document.querySelector('.delete-button')
var yesButton = document.querySelector('.yes')
var noButton = document.querySelector('.no')

//event listeners
messageButton.addEventListener('click', displayMessage);
affirmationSelect.addEventListener('click', removeMessage);
mantraSelect.addEventListener('click', removeMessage);
clearButton.addEventListener('click', clearMessage);
starButton.addEventListener('click', checkFavorites);
favoritesButton.addEventListener('click', toggleFavorites);
backButton.addEventListener('click', toggleFavorites);
deleteButton.addEventListener('click', toggleConfirm)
yesButton.addEventListener('click', deleteMessage)
noButton.addEventListener('click', toggleConfirm)

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

function toggleConfirm() {
  confirmDelete.classList.toggle('hidden');
  messageDisplay.classList.toggle('hidden');
}

function deleteMessage() {
  if (mantraSelect.checked) {
    mantras.splice(mantras.indexOf(message.innerText), 1)
  } else if (affirmationSelect.checked) {
    affirmations.splice(affirmations.indexOf(message.innerText), 1)
  }
  message.innerText = `Message deleted.`;
  starButton.classList.add('hidden');
  toggleConfirm();
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
  if (affirmationSelect.checked) {
    message.innerText = getRandomData(affirmations);
  } else if (mantraSelect.checked) {
    message.innerText = getRandomData(mantras);
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
    removeFromLocalStorage('favoriteMantras', message.innerText)
  } else if (affirmationSelect.checked) {
    favoriteAffirmations.splice(favoriteAffirmations.indexOf(message.innerText), 1)
    removeFromLocalStorage('favoriteAffirmations', message.innerText)
  }
}

function addToFavorites() {
  if (mantraSelect.checked && !favoriteMantras.includes(message.innerText)) {
    favoriteMantras.push(message.innerText)
    saveToLocalStorage('favoriteMantras', message.innerText)
  } else if (affirmationSelect.checked && !favoriteAffirmations.includes(message.innerText)) {
    favoriteAffirmations.push(message.innerText)
    saveToLocalStorage('favoriteAffirmations', message.innerText)
  }
  starButton.classList.remove('filter')
}

function saveToLocalStorage(arrayName, message) {
  var arrayData = JSON.parse(localStorage.getItem(arrayName)) || [];
  arrayData.push(message);
  localStorage.setItem(arrayName, JSON.stringify(arrayData));
}

function removeFromLocalStorage(arrayName, message) {
  var arrayData = JSON.parse(localStorage.getItem(arrayName));
  arrayData.splice(arrayData.indexOf(message), 1);
  localStorage.setItem(arrayName, JSON.stringify(arrayData));
}

function displayFavorites() {
  affirmationsList.innerHTML = ""
  mantrasList.innerHTML = ""
  for (var i = 0; i < favoriteAffirmations.length; i++) {
    if (affirmations.includes(favoriteAffirmations[i])) {
      affirmationsList.innerHTML += `<li>${favoriteAffirmations[i]}</li>`
    }
  }
  for (var i = 0; i < favoriteMantras.length; i++) {
    if (mantras.includes(favoriteMantras[i])) {
      mantrasList.innerHTML += `<li>${favoriteMantras[i]}</li>`
    }
  }
}

function getRandomData(array) {
  return array[Math.floor(Math.random() * array.length)];
}
