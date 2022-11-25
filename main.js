const projectData = [
  {
    id: 1,
    name: ['Multi Post Stories', 'Keeping track of hundreds  of components website'],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    featured: 'project-1 featured',
    images: {
      mobile: ['images/Snapshoot Portfoliopopup.png'],
      desktop: ['images/Snapshoot Portfoliodeskpop.png'],
    },
    technologies: ['html', 'Bootstrap', 'Ruby on Rails'],
    liveVersionLink: '#',
    linkToSource: '#',
  },
];

// const projectsCont = document.querySelector('.recent-works');
// humburger popup menu page transition
const humberger = document.querySelector('.humberger');
const navMenu = document.querySelector('.nav-links');
const pops = document.querySelector('.popUp');
const deskpop = document.querySelector('.desk-popUp');
const popclose = document.querySelector('.pop-up-btn');
const showpro = document.querySelector('.showp');
const showpro2 = document.querySelector('.showp2');
const shows1 = document.querySelector('.show1');
const shows2 = document.querySelector('.show2');
const shows3 = document.querySelector('.show3');
const shows4 = document.querySelector('.show4');
const shows5 = document.querySelector('.show5');
const shows6 = document.querySelector('.show6');
const shows7 = document.querySelector('.show7');

humberger.addEventListener('click', () => {
  humberger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-links').forEach((n) => n
  .addEventListener('click', () => {
    humberger.classList.remove('active');
    navMenu.classList.remove('active');
  }));

function showProject() {
  pops.innerHTML = `<div class="pop-head"><h3 class="pop-up-title">${projectData[0].name[0]}</h3><div type="button" class="pop-up-btn" onClick="closeProject()"><img src="images/Icon.png"> </div></div><ul class="pop-ul"><li>${projectData[0].technologies[0]}</li><li>${projectData[0].technologies[1]}</li><li>${projectData[0].technologies[2]}</li></ul><div class="pop-img"><img src="${projectData[0].images.mobile[0]}" alt=""></div><p>${projectData[0].description}</p><div class="pop-proj-btn"><button><a href= "${projectData[0].liveVersionLink}">See live</a><img src="images/Icon2.png"></button><button><a href= "${projectData[0].linkToSource}">See source</a><img src="images/source.png"></button></div>`;

  pops.style.display = 'block';
}

function closeProject() {
  pops.style.display = 'none';
}

popclose.addEventListener('click', () => {
  closeProject();
});

shows1.addEventListener('click', () => {
  showProject();
});

shows2.addEventListener('click', () => {
  showProject();
});

shows3.addEventListener('click', () => {
  showProject();
});

shows4.addEventListener('click', () => {
  showProject();
});

shows5.addEventListener('click', () => {
  showProject();
});

shows6.addEventListener('click', () => {
  showProject();
});

shows7.addEventListener('click', () => {
  showProject();
});

function showDeskProject() {
  deskpop.innerHTML = `<div class="desk-pop-head"><h3 class="desk-pop-up-title">${projectData[0].name[1]}</h3><div type="button" class="deskpop-up-btn" onClick="closeDeskProject()"><img src="images/Icon.png"> </div></div><ul class="pop-ul"><li>${projectData[0].technologies[0]}</li><li>${projectData[0].technologies[1]}</li><li>${projectData[0].technologies[2]}</li></ul><div class="desk-popup-flex"><div class="desk-pop-img"><img src="${projectData[0].images.desktop[0]}" alt=""></div><div class="desk-popup-flexcol"><p>${projectData[0].description}</p><div class="desk-pop-proj-btn"><button><a href= "${projectData[0].liveVersionLink}">See live</a><img src="images/Icon2.png"</button><button><a href= "${projectData[0].linkToSource}">See source</a><img src="images/source.png"></button></div></div></div>`;

  deskpop.style.display = 'block';
}

function closeDeskProject() {
  deskpop.style.display = 'none';
}
closeDeskProject();

//  popclose1.addEventListener('click', () => {
//    closeDeskProject();
//  });

showpro.addEventListener('click', () => {
  showDeskProject();
});

showpro2.addEventListener('click', () => {
  showDeskProject();
});