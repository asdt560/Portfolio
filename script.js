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
    name: 'Multi-Post Stories',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    featuredimage: './images/Img-Placeholder(1).png',
    technologies: [
      'html', 'css', 'javascript',
    ],
    liveversion: 'placeholder',
    source: 'https://github.com/asdt560/Portfolio',
  },
  {
    name: 'Multi-Post Stories',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    featuredimage: './images/Img-Placeholder(1).png',
    technologies: [
      'html', 'css', 'javascript',
    ],
    liveversion: 'placeholder',
    source: 'https://github.com/asdt560/Portfolio',
  },
  {
    name: 'Multi-Post Stories',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    featuredimage: './images/Img-Placeholder(1).png',
    technologies: [
      'html', 'css', 'javascript',
    ],
    liveversion: 'placeholder',
    source: 'https://github.com/asdt560/Portfolio',
  },
  {
    name: 'Multi-Post Stories',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    featuredimage: './images/Img-Placeholder(1).png',
    technologies: [
      'html', 'css', 'javascript',
    ],
    liveversion: 'placeholder',
    source: 'https://github.com/asdt560/Portfolio',
  },
];
const cards = document.getElementById('cards');
console.log(Array.of(cards))
arr.forEach((item, index) => {
  cards.innerHTML += `<section id="c1" class="card">
  <img id="project1image" class="placeholder-image" src=${item.featuredimage} alt="A Placeholder">
  <div class="card-text">
    <h5 class="card-title" id="project1title">${item.name}</h5>
    <p class="blurb2" id="project1blurb">${item.description}</p>
    <ul class="card-list" id="project1list">
    </ul>
    <button class="project-button">See Project</button>
  </div>
</section>`;
  /* let card = cards; */
});
/* const project1 = arr[0];
console.log(project1);
window.addEventListener('load', () => {
  const project1 = arr[0];
  const cardtext1 = document.getElementById('project1blurb');
  cardtext1.innerHTML = project1.description;
  const image1 = document.getElementById('project1image');
  image1.src = project1.featuredimage;
  const title1 = document.getElementById('project1title');
  title1.innerHTML = project1.name;
  const list1 = document.getElementById('project1list');

  const project2 = arr[1];
}); */

/* <section id="c1" class="card">
      <img id="project1image" class="placeholder-image" src="placeholder" alt="A Placeholder">
      <div class="card-text">
        <h5 class="card-title" id="project1title"></h5>
        <p class="blurb2" id="project1blurb"></p>
        <ul class="card-list" id="project1list">
        </ul>
        <button class="project-button">See Project</button>
      </div>
    </section> */
