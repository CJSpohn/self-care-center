//query selectors
var msgButton = document.querySelector('button');
var bellImage = document.querySelector('img');
var message = document.querySelector('.message');

//event listeners
msgButton.addEventListener('click', displayMessage)

//event handlers

function displayMessage() {
  if (!bellImage.classList.contains('hidden')) {
    revealMessage();
  }
}

function revealMessage() {
  bellImage.classList.toggle('hidden');
  message.classList.toggle('hidden');
}
