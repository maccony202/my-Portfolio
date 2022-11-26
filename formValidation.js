const form = document.querySelector('.contact-form');
const emails = document.querySelector('#email');
const error = document.querySelector('.validation-message');

form.addEventListener('submit', (e) => {
  if (emails.value !== emails.value.toLowerCase()) {
    e.preventDefault();
    error.innerHTML = '';
    emails.classList.add('.fail');
    const msg = document.createTextNode('kindly make sure your email characters are in lowercase*');
    error.append(msg);
  } else {
    emails.classList.remove('red-border');
    error.innerHTML = '';
  }
});
