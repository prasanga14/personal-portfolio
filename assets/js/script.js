const cvBTN = document.querySelector('.btn');
const githubIcon = document.querySelector('.githubIcon');
const linkedinIcon = document.querySelector('.linkedinIcon');
const foodBtn = document.querySelector('.foodBtn');
const guessTheNumberBtn = document.querySelector('.guessTheNumberBtn');
const renderCountryBtn = document.querySelector('.renderCountryBtn');

// To open github page
githubIcon.addEventListener('click', function (e) {
  e.preventDefault();
  open('https://github.com/prasanga14');
});

// To open LinkedIn page
linkedinIcon.addEventListener('click', function (e) {
  e.preventDefault();
  open('https://www.linkedin.com/in/prasanga-ghimire-0930bb24b/');
});

// To open Websites

foodBtn.addEventListener('click', function (e) {
  e.preventDefault();
  open('https://food-delivery-pg.netlify.app/');
});

guessTheNumberBtn.addEventListener('click', function (e) {
  e.preventDefault();
  open('https://guessthenumber-pg.netlify.app/');
});

renderCountryBtn.addEventListener('click', function (e) {
  e.preventDefault();
  open('https://github.com/prasanga14/render-country');
});
