const firebaseConfig = {
  apiKey: 'AIzaSyBI3iSygUJ56J3_UozYcD_Lmtl8Z3S7ne4',
  authDomain: 'personal-portfolio-conta-27f10.firebaseapp.com',
  databaseURL:
    'https://personal-portfolio-conta-27f10-default-rtdb.firebaseio.com',
  projectId: 'personal-portfolio-conta-27f10',
  storageBucket: 'personal-portfolio-conta-27f10.appspot.com',
  messagingSenderId: '662739250187',
  appId: '1:662739250187:web:b62d2e4957db82c72feb0e',
};

// initial firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref('personal-portfolio-contactForm');

document
  .getElementById('contactFormDBS')
  .addEventListener('submit', submitForm);

function submitForm(e) {
  e.preventDefault();
  var fullname = getElementVal('fullname');
  var email = getElementVal('email');
  var message = getElementVal('message');
  console.log(fullname, email, message);

  saveMessages(fullname, email, message);

  // enable alert
  document.querySelector('.alert').style.display = 'block';

  // remove alert
  setTimeout(() => {
    document.querySelector('.alert').style.display = 'none';
  }, 2000);

  // reset the form
  document.getElementById('contactFormDBS').reset();
}

const saveMessages = (fullname, email, message) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    fullname: fullname,
    email: email,
    message: message,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
