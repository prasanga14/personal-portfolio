const cvBTN = document.querySelector('.btn');
const githubIcon = document.querySelector('.githubIcon');
const linkedinIcon = document.querySelector('.linkedinIcon');
const foodBtn = document.querySelector('.foodBtn');
const guessTheNumberBtn = document.querySelector('.guessTheNumberBtn');
const forkifyBtn = document.querySelector('.forkifyBtn');

cvBTN.addEventListener('click', function (e) {
  e.preventDefault();
  open('cv.pdf');
});

githubIcon.addEventListener('click', function (e) {
  e.preventDefault();
  open('https://github.com/prasanga14');
});

linkedinIcon.addEventListener('click', function (e) {
  e.preventDefault();
  open('https://www.linkedin.com/in/prasanga-ghimire-0930bb24b/');
});

foodBtn.addEventListener('click', function (e) {
  e.preventDefault();
  open('https://food-delivery-pg.netlify.app/');
});

guessTheNumberBtn.addEventListener('click', function (e) {
  e.preventDefault();
  open('https://guessthenumber-pg.netlify.app/');
});

forkifyBtn.addEventListener('click', function (e) {
  e.preventDefault();
  open('https://forkify-prasanga.netlify.app/');
});
