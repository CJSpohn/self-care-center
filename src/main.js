//query selectors
var msgButton = document.querySelector('button');
var bellImage = document.querySelector('img');
var message = document.querySelector('.message');
var affirmationSelect = document.querySelector('#affirmation')
var mantraSelect = document.querySelector('#mantra')

//event listeners
msgButton.addEventListener('click', displayMessage)
affirmationSelect.addEventListener('click', hideMessage)
mantraSelect.addEventListener('click', hideMessage)

//event handlers

function displayMessage() {
  if (!bellImage.classList.contains('hidden')) {
    revealMessage();
  }
  getMessage();
}

function hideMessage() {
  message.classList.add('hidden');
  bellImage.classList.remove('hidden');
}

function revealMessage() {
  bellImage.classList.toggle('hidden');
  message.classList.toggle('hidden');
}

function getMessage() {
  if (!verifySelection) {
    break;
  }
  if (affirmationSelect.checked) {
    message.innerText = getRandomData(affirmations)
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
