// ================================= Global Variables declaration =================================

const body = document.querySelector('body');

const menu = document.querySelector('.menu');
const xmark = document.querySelector('.xmark');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');

// ================================= Function declaration =================================

function displayNavigation() {
  const nav = document.querySelector('.navigation');
  nav.classList.toggle('display-nav');
}

// ================================= Event Listeners =================================
 
menu.addEventListener('click', displayNavigation);
xmark.addEventListener('click', displayNavigation);
