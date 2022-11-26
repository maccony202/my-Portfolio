const form = document.querySelectorAll('.contact-form');
const emails = document.querySelectorAll('.email-form');
const error = document.querySelectorAll('.validation-message');

for (let i = 0; i < form.length; i += 1) {
  form[i].addEventListener('submit', (e) => {
    if (emails[i].value !== emails[i].value.toLowerCase()) {
      e.preventDefault();
      error[i].innerHTML = '';
      emails[i].classList.add('.fail');
      const msg = document.createTextNode('kindly make sure your email characters are in lowercase*');
      error[i].append(msg);
    } else {
      emails[i].classList.remove('red-border');
      error[i].innerHTML = '';
    }
  });
}
