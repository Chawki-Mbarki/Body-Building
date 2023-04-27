// ================================= Global Variables declaration =================================

const menu = document.querySelector('.menu');
const xmark = document.querySelector('.xmark');

/* these are for future use, to add animation to highlighted section and links
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section'); */

const moreLess = document.querySelector('.moreless');
const chevron = document.querySelector('.chevron');
const trainerButton = document.querySelector('.trainer-btn');
const trainers = [
  {
    image: 'assets/Trainers/Trainer1.jfif',
    name: 'Arnold Schwarzenegger1',
    occupation: 'Actor Producer Director',
    info: 'He is a pro bodybuilder',
  },
  {
    image: 'assets/Trainers/Trainer1.jfif',
    name: 'Arnold Schwarzenegger2',
    occupation: 'Actor Producer Director',
    info: 'He is a pro bodybuilder',
  },
  {
    image: 'assets/Trainers/Trainer1.jfif',
    name: 'Arnold Schwarzenegger3',
    occupation: 'Actor Producer Director',
    info: 'He is a pro bodybuilder',
  },
  {
    image: 'assets/Trainers/Trainer1.jfif',
    name: 'Arnold Schwarzenegger4',
    occupation: 'Actor Producer Director',
    info: 'He is a pro bodybuilder',
  },
  {
    image: 'assets/Trainers/Trainer1.jfif',
    name: 'Arnold Schwarzenegger5',
    occupation: 'Actor Producer Director',
    info: 'He is a pro bodybuilder',
  },
  {
    image: 'assets/Trainers/Trainer1.jfif',
    name: 'Arnold Schwarzenegger6',
    occupation: 'Actor Producer Director',
    info: 'He is a pro bodybuilder',
  },
];

// ================================= Function declaration =================================

// this function will toggle the display status of the navigation bar
function displayNavigation() {
  const nav = document.querySelector('.navigation');
  nav.classList.toggle('display-nav');
}

function generateTrainers(start, number) {
  const trainersContainer = document.querySelector('#trainers-container');
  for (let i = start; i < number; i += 1) {
    trainersContainer.innerHTML += `
      <div class="trainer-card flex">
        <img src="assets/images/chess-board.png" alt="" class="trainer-deco">
        <img src="${trainers[i].image}" alt="" class="trainer-img">
        <div class="trainer-info flex column">
          <h3 class="trainer-name">${trainers[i].name}</h3>
          <h4 class="trainer-occ" >${trainers[i].occupation}</h4>
          <hr>
          <p class="trainer-para">${trainers[i].info}</p>
        </div>
      </div>`;
  }
}

// This function will see the screen width, and based on that
// it shows all trainers or just the first two
function widthTester() {
  if (window.innerWidth >= 768) {
    document.getElementById('trainers-container').innerHTML = '';
    generateTrainers(0, trainers.length);
  } else {
    document.getElementById('trainers-container').innerHTML = '';
    generateTrainers(0, 2);
    chevron.classList.remove('up');
    moreLess.innerHTML = 'MORE ';
  }
}

// this function will delete trainers from trainers section
function deleteTrainers(start, number) {
  document.querySelectorAll(`#trainers-container > div:nth-last-child(-n+${number - 2})`).forEach((n) => {
    n.parentNode.removeChild(n);
  });
}

// this function will see if we should delete or add trainers from the trainers section
function trainersChecker() {
  if (moreLess.innerHTML === 'MORE ') {
    generateTrainers(2, trainers.length);
    moreLess.innerHTML = 'LESS ';
  } else {
    deleteTrainers(2, trainers.length);
    moreLess.innerHTML = 'MORE ';
  }
  chevron.classList.toggle('up');
}

// ================================= Event Listeners =================================

menu.addEventListener('click', displayNavigation);
xmark.addEventListener('click', displayNavigation);
trainerButton.addEventListener('click', trainersChecker);
window.addEventListener('resize', widthTester);
window.addEventListener('load', widthTester);
