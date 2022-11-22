// humburger popup menu page transition
const humberger = document.querySelector('.humberger');
const navMenu = document.querySelector('.nav-links');

humberger.addEventListener('click', () => {
  humberger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-links').forEach((n) => n
  .addEventListener('click', () => {
    humberger.classList.remove('active');
    navMenu.classList.remove('active');
  }));
