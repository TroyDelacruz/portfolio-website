'use strict';

// Navigation bar functionality added
const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
});

// Variables for typewriter animation
const textDisplay = document.getElementById('typewriter-text')
const phrases = ['Hello!', 'Hi!', 'Hey!'];
let i = 0;
let j = 0;
let currentPhrase = [];
let isDeleting = false;
let isEnd = false;


// Function for typewriter animation
function loop () {
  isEnd = false
  textDisplay.innerHTML = currentPhrase.join('')

  if (i < phrases.length) {

    if (!isDeleting && j <= phrases[i].length) {
      currentPhrase.push(phrases[i][j])
      j++
      textDisplay.innerHTML = currentPhrase.join('')
    }

    if(isDeleting && j <= phrases[i].length) {
      currentPhrase.pop(phrases[i][j])
      j--
      textDisplay.innerHTML = currentPhrase.join('')
    }

    if (j == phrases[i].length) {
      isEnd = true
      isDeleting = true
    }

    if (isDeleting && j === 0) {
      currentPhrase = []
      isDeleting = false
      i++
      if (i === phrases.length) {
        i = 0
      }
    }
  }
  const spedUp = Math.random() * (80 -50) + 50
  const normalSpeed = Math.random() * (300 -200) + 200
  const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed
  setTimeout(loop, time)
}

loop();

/* Creating time clock on navbar */

const span = document.getElementById('clock');

function time() {
  var d = new Date();
  var s = d.getSeconds();
  var m = d.getMinutes();
  var h = d.getHours();
  span.textContent = 
    ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ":" + ("0" + s).substr(-2);
}

setInterval(time, 1000);

time();

/* Creating modal functionality for image gallery */

const imageButtons = document.querySelectorAll('img');
const modals = document.querySelectorAll('.modal');
const imageButtonsClose = document.querySelectorAll('.close-modal');

imageButtons[0].onclick = function() {
  modals[0].style.display = "block";
}

imageButtons[1].onclick = function() {
  modals[1].style.display = "block";
}

imageButtons[2].onclick = function() {
  modals[2].style.display = "block";
}

imageButtonsClose[0].onclick = function() {
  modals[0].style.display = "none";
}

imageButtonsClose[1].onclick = function() {
  modals[1].style.display = "none";
}

imageButtonsClose[2].onclick = function() {
  modals[2].style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modals){
    modals.style.display = "none";
  }
}