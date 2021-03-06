var favoriteAffirmations = JSON.parse(localStorage.getItem(`favoriteAffirmations`)) || [];
var favoriteMantras = JSON.parse(localStorage.getItem(`favoriteMantras`)) || [];
affirmations = JSON.parse(localStorage.getItem('affirmations')) || affirmations;
mantras = JSON.parse(localStorage.getItem('mantras')) || mantras;
var visitor = JSON.parse(localStorage.getItem(`visitor`)) || '';

var logInDisplay = document.querySelector('.log-in');
var fullSiteDisplay = document.querySelector('.full-site');
var mainDisplay = document.querySelector('.main');
var messageDisplay = document.querySelector('.display');
var favoritesDisplay = document.querySelector('.favorites');
var bellImage = document.querySelector('.meditation-image');
var message = document.querySelector('.message');
var affirmationRadio = document.querySelector('.affirmation');
var mantraRadio = document.querySelector('.mantra');
var favoriteStar = document.querySelector('.favorite-star');
var errorMessage = document.querySelector('.no-selection');
var displayButtons = document.querySelector('.display-buttons');
var savedAffirmations = document.querySelector('.saved-affirmations');
var savedMantras = document.querySelector('.saved-mantras');
var confirmDelete = document.querySelector('.confirm-delete');
var nameInput = document.querySelector('.name');
var nameDisplay = document.querySelector('.name-display');
var logOut = document.querySelector('.log-out');

var enterButton = document.querySelector('.enter-button');
var starButton = document.querySelector('.star-button');
var favoritesButton = document.querySelector('.favorites-button');
var clearButton = document.querySelector('.clear-button');
var messageButton = document.querySelector('.message-button');
var backButton = document.querySelector('.back-to-main');
var deleteButton = document.querySelector('.delete-button');
var yesButton = document.querySelector('.yes');
var noButton = document.querySelector('.no');
var resetButton = document.querySelector('.remove-data');

affirmationRadio.addEventListener('click', removeMessage);
mantraRadio.addEventListener('click', removeMessage);
messageButton.addEventListener('click', displayMessage);
clearButton.addEventListener('click', clearMessage);
starButton.addEventListener('click', checkFavorites);
favoritesButton.addEventListener('click', toggleFavorites);
backButton.addEventListener('click', toggleFavorites);
deleteButton.addEventListener('click', toggleConfirm);
yesButton.addEventListener('click', deleteMessage);
noButton.addEventListener('click', toggleConfirm);
resetButton.addEventListener('click', alertReset);
enterButton.addEventListener('click', enterSite);
logOut.addEventListener('click', alertReset);

if (visitor !== '') {
  nameInput.value = visitor;
  enterSite();
}

function displayMessage() {
  if (verifySelection() === false) {
    errorMessage.classList.remove('hidden');
    bellImage.classList.add('hidden');
    return
  }
  getMessage();
  verifyFavorite();
  revealMessage();
}

function clearMessage() {
  message.innerText = "";
  affirmationRadio.checked = false;
  mantraRadio.checked = false;
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
  if (message.innerText != `Message deleted.`) {
    if (mantraRadio.checked) {
      mantras.splice(mantras.indexOf(message.innerText), 1);
      removeFromLocalStorage('mantras', message.innerText, mantras);
    } else if (affirmationRadio.checked) {
      affirmations.splice(affirmations.indexOf(message.innerText), 1);
      removeFromLocalStorage('affirmations', message.innerText, affirmations);
    }
    removeFromFavorites();
    message.innerText = `Message deleted.`;
    starButton.classList.add('hidden');
    toggleConfirm();
  }
}

function alertReset() {
  if (confirm('This will reset all page data. Are you sure?')) {
    localStorage.clear();
    window.location.reload();
  }
}

function enterSite() {
  if (nameInput.value) {
    logInDisplay.classList.toggle('hidden');
    fullSiteDisplay.classList.toggle('hidden');
    nameDisplay.innerText = `Hello, ${nameInput.value}. Which type of message?`;
    localStorage.setItem('visitor', JSON.stringify(nameInput.value));
  } else {
    nameInput.classList.add('error');
  }
}

function revealMessage() {
  errorMessage.classList.add('hidden');
  bellImage.classList.add('hidden');
  message.classList.remove('hidden');
  starButton.classList.remove('hidden');
  displayButtons.classList.remove('hidden');
}

function getMessage() {
  if (affirmationRadio.checked) {
    message.innerText = getRandomData(affirmations);
  } else if (mantraRadio.checked) {
    message.innerText = getRandomData(mantras);
  }
}

function verifySelection() {
  return (affirmationRadio.checked || mantraRadio.checked);
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
  if (mantraRadio.checked && favoriteMantras.includes(message.innerText)) {
    favoriteMantras.splice(favoriteMantras.indexOf(message.innerText), 1);
    removeFromLocalStorage('favoriteMantras', message.innerText, mantras);
  } else if (affirmationRadio.checked && favoriteAffirmations.includes(message.innerText)) {
    removeFromLocalStorage('favoriteAffirmations', message.innerText, affirmations);
    favoriteAffirmations.splice(favoriteAffirmations.indexOf(message.innerText), 1);
  }
}

function addToFavorites() {
  if (mantraRadio.checked && !favoriteMantras.includes(message.innerText)) {
    favoriteMantras.push(message.innerText);
    saveToLocalStorage('favoriteMantras', message.innerText);
  } else if (affirmationRadio.checked && !favoriteAffirmations.includes(message.innerText)) {
    favoriteAffirmations.push(message.innerText);
    saveToLocalStorage('favoriteAffirmations', message.innerText);
  }
  starButton.classList.remove('filter');
}

function saveToLocalStorage(arrayName, message) {
  arrayData = JSON.parse(localStorage.getItem(arrayName)) || [];
  arrayData.push(message);
  localStorage.setItem(arrayName, JSON.stringify(arrayData));
}

function removeFromLocalStorage(arrayName, message, array) {
  arrayData = JSON.parse(localStorage.getItem(arrayName)) || array;
  arrayData.splice(array.indexOf(message), 1);
  localStorage.setItem(arrayName, JSON.stringify(arrayData));
}

function displayFavorites() {
  savedAffirmations.innerHTML = "";
  savedMantras.innerHTML = "";
  for (var i = 0; i < favoriteAffirmations.length; i++) {
    if (affirmations.includes(favoriteAffirmations[i])) {
      savedAffirmations.innerHTML += `<li>${favoriteAffirmations[i]}</li>`
    }
  }
  for (var i = 0; i < favoriteMantras.length; i++) {
    if (mantras.includes(favoriteMantras[i])) {
      savedMantras.innerHTML += `<li>${favoriteMantras[i]}</li>`
    }
  }
}

function getRandomData(array) {
  return array[Math.floor(Math.random() * array.length)];
}
