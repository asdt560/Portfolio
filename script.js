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
    name: 'Multi-Post Stories',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    extradescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.",
    featuredimage: './images/Snapshoot-Popup.svg',
    technologies: [
      'html', 'css', 'javascript',
    ],
    liveversion: 'placeholder',
    source: 'https://github.com/asdt560/Portfolio',
  },
  {
    id: '2',
    name: 'Multi-Post Stories',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    extradescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.",
    featuredimage: './images/Snapshoot-Popup.svg',
    technologies: [
      'html', 'css', 'javascript',
    ],
    liveversion: 'placeholder',
    source: 'https://github.com/asdt560/Portfolio',
  },
  {
    id: '3',
    name: 'Multi-Post Stories',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    extradescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.",
    featuredimage: './images/Snapshoot-Popup.svg',
    technologies: [
      'html', 'css', 'javascript',
    ],
    liveversion: 'placeholder',
    source: 'https://github.com/asdt560/Portfolio',
  },
  {
    id: '4',
    name: 'Multi-Post Stories',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    extradescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.",
    featuredimage: './images/Snapshoot-Popup.svg',
    technologies: [
      'html', 'css', 'javascript',
    ],
    liveversion: 'placeholder',
    source: 'https://github.com/asdt560/Portfolio',
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
  cards.innerHTML += `<section id="c1" class="card">
  <img id="project1image" class="placeholder-image" src=${item.featuredimage} alt="A Placeholder">
  <div class="card-text">
    <h5 class="card-title" id="project1title">${item.name}</h5>
    <p class="blurb2" id="project1blurb">${item.description}</p>
    <ul class="card-list" id="project1list">
    ${ret(item.technologies, item)}
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
    ${ret(item.technologies, item)}
    </ul>
    <div class="popupbuttoncontainer">
    <button class="project-button popupbutton one">See Live<img src="./images/Live.svg" alt="Live"></button>
    <button class="project-button popupbutton two">See Source <img src="./images/Normal-Button/Tertiary/Icons/Vector.png" alt="Github"></button>
    <div>
  </div>`;
    }
  });
}

// eslint-disable-next-line no-unused-vars
function popupClose() {
  popup.style.display = 'none';
}

const form = document.getElementById('form');

// eslint-disable-next-line no-unused-vars
function validator(form) {
  const msgholder = document.getElementById('emailerror');
  const regex = /[A-Z]/g;
  const errormsg = 'The content of the email field has to be in lower case!';
  const emailcontent = form.email.value;
  if (regex.test(emailcontent)) {
    msgholder.innerHTML = errormsg;
    return false;
  }
  return true;
}

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
  form.textarea.textContent = input.textareainput;
}

window.addEventListener('load', () => {
  const info = window.localStorage.getItem('storedInfo');
  const infoObj = JSON.parse(info);
  fillfield(infoObj);
});
