// eslint-disable-next-line no-unused-vars
function menuOpen() {
  document.getElementById('menucurtain').style.display = 'flex';
}

// eslint-disable-next-line no-unused-vars
function menuClose() {
  document.getElementById('menucurtain').style.display = 'none';
}

const arr = [
  {
    id: '1',
    name: 'Doctors\' Appointments',
    description: 'Full stack application with a Ruby on Rails back-end and a React-Redux front-end. Allows a user to log in and see a list of Doctors, of which they can pick any to make an appointment.',
    extradescription: 'Full stack application with a Ruby on Rails back-end and a React-Redux front-end. Allows a user to log in and see a list of Doctors, of which they can pick any to make an appointment. Authorized users may add new doctors or delete existing ones',
    featuredimage: './images/doctors-img.PNG',
    technologies: [
      'React', 'Redux', 'RoR', 'PostgreSQL', 'Tailwind CSS',
    ],
    liveversion: 'https://doctors-reservations.netlify.app',
    source: 'https://github.com/JonahKayizzi/Doctors-Reservations-Backend',
  },
  {
    id: '2',
    name: 'Weather and Pollution Tracker',
    description: 'A mobile-first application which displays weather data for a list of cities, pulled from the OpenWeather API. It also displays air pollution data for the same.',
    extradescription: 'A mobile-first application which displays weather data for a list of cities, pulled from the OpenWeather API. It also displays air pollution data for the same. Currently only displays data for a small number of cities, given the amount of requests the API allows and the need to request pollution data for each city individually.',
    featuredimage: './images/app-pic.PNG',
    technologies: [
      'React', 'Redux', 'CSS',
    ],
    liveversion: 'https://weather-pollution-tracker-964571.netlify.app/',
    source: 'https://github.com/asdt560/weather-metrics-argentina',
  },
  {
    id: '3',
    name: 'Space Travelers\' Hub',
    description: 'A React-Redux site that uses data from the SpaceX API to display lists of rockets and missions and allows a user to reserve or join said missions.',
    extradescription: 'A React-Redux site that uses data from the SpaceX API to display lists of rockets and missions and allows a user to reserve or join said missions. The user can see what missions they have joined and what rockets they have reserved. The user can also cancel their reservations.',
    featuredimage: './images/spacetravel-img.PNG',
    technologies: [
      'React', 'Redux', 'Bootstrap',
    ],
    liveversion: 'https://spacetravelers-justorago-camilovela.netlify.app/',
    source: 'https://github.com/asdt560/rocket-mission-list',
  },
  {
    id: '4',
    name: 'Cash-Tracker',
    description: 'A Ruby on Rails application which is designed to allow logged-in users to add and keep track of monetary transactions, creating categories to classify them and then adding them to one or more of them according to what they consider appropriate.',
    extradescription: 'A Ruby on Rails application which is designed to allow logged-in users to add and keep track of monetary transactions, creating categories to classify them and then adding them to one or more of them according to what they consider appropriate.',
    featuredimage: './images/cashtracker-img.PNG',
    technologies: [
      'RoR', 'PostgreSQL', 'CSS',
    ],
    liveversion: 'https://cash-tracker.onrender.com',
    source: 'https://github.com/asdt560/cash-tracker',
  },
];
const ret = (arr) => {
  let tech = '';
  arr.forEach((item) => {
    tech += `<li>${item}</li>`;
    return tech;
  });
  return tech;
};
const cards = document.getElementById('cards');
arr.forEach((item) => {
  cards.innerHTML += `<section class="card">
  <img id="project1image" class="placeholder-image" src=${item.featuredimage} alt="A Placeholder">
  <div class="card-text">
    <h5 class="card-title" id="project1title">${item.name}</h5>
    <p class="blurb2" id="project1blurb">${item.description}</p>
    <ul class="card-list" id="project1list">
    ${ret(item.technologies)}
    </ul>
    <button id=${item.id} class="project-button openerbutton" onclick="popupOpen(this.id)">See Project</button>
  </div>
</section>`;
});
const popup = document.getElementById('popup');

// eslint-disable-next-line no-unused-vars
function popupOpen(id) {
  popup.style.display = 'flex';
  arr.forEach((item) => {
    if (id === item.id) {
      popup.innerHTML += `<div id="popupcontainer">
    <div id="X-popup">
      <h5 class="popuptitle">${item.name}</h5>
      <a class="menu-close">
        <img class="image-X modal-X" alt="Close" src="./images/Icon.png" onclick="popupClose()">
      </a>
    </div>
    <img class="popupimage" src=${item.featuredimage} alt="placeholder image">
    <p class="popuptext">${item.extradescription}</p>
    <ul class="card-list popuplist">
    ${ret(item.technologies)}
    </ul>
    <div class="popupbuttoncontainer">
    <a class="project-button popupbutton one" href="${item.liveversion}" target="_blank">See Live<img src="./images/Live.svg" alt="Live"></a>
    <a class="project-button popupbutton two" href="${item.source}" target="_blank">See Source <img src="./images/Normal-Button/Tertiary/Icons/Vector.png" alt="Github"></a>
    <div>
  </div>`;
    }
  });
}

// eslint-disable-next-line no-unused-vars
function popupClose() {
  popup.innerHTML = '';
  popup.style.display = 'none';
}

const form = document.getElementById('form');

form.addEventListener('input', () => {
  const formName = document.getElementById('name');
  const formEmail = document.getElementById('email');
  const formTextArea = document.getElementById('textarea');
  const object = {
    nameinput: formName.value,
    emailinput: formEmail.value,
    textareainput: formTextArea.value,
  };
  window.localStorage.setItem('storedInfo', JSON.stringify(object));
});

function fillfield(input) {
  form.name.value = input.nameinput;
  form.email.value = input.emailinput;
  form.textarea.value = input.textareainput;
}

window.addEventListener('load', () => {
  const info = JSON.parse(window.localStorage.getItem('storedInfo'));
  const infoObj = info;
  fillfield(infoObj);
});
