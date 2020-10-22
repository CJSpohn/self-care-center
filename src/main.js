//query selectors
var messageButton = document.querySelector('.message-button');
var bellImage = document.querySelector('img');
var message = document.querySelector('.message');
var affirmationSelect = document.querySelector('#affirmation')
var mantraSelect = document.querySelector('#mantra')
var clearButton = document.querySelector('.clear-button')

//event listeners
messageButton.addEventListener('click', displayMessage)
affirmationSelect.addEventListener('click', hideMessage)
mantraSelect.addEventListener('click', hideMessage)
clearButton.addEventListener('click', clearMessage)

//event handlers
function displayMessage() {
  if (!verifySelection()) {
    message.innerText = "Please select a message type."
    message.classList.toggle('hidden')
    bellImage.classList.toggle('hidden')
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
}

function clearMessage() {
  message.innerText = "";
  affirmationSelect.checked = false;
  mantraSelect.checked = false;
  revealMessage();
}

//helper functions
function revealMessage() {
  bellImage.classList.toggle('hidden');
  message.classList.toggle('hidden');
  clearButton.classList.toggle('hidden')
}

function getMessage() {
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
