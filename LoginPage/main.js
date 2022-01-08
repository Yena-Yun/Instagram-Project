const imageArray = document.querySelectorAll('.banner-image');

const VISIBLE = 'visible';

let index = 1;

setInterval(() => {
  imageArray[index === 0 ? imageArray.length - 1 : index - 1].classList.remove(VISIBLE);

  imageArray[index].classList.add(VISIBLE);

  index++;

  if (index === imageArray.length) index = 0;
}, 2000);

const userInputDiv = document.querySelector('.username input');
const passwordInputDiv = document.querySelector('.password input');
const userPlaceholder = document.querySelector('.placeholder.username');
const pwdPlaceholder = document.querySelector('.placeholder.password');
const pwdInput = document.querySelector('.pwd-input input');
console.log(pwdInput);

const UP = 'up';

userInputDiv.addEventListener('input', (e) => {
  const v = e.target.value;

  if (v) {
    userPlaceholder.classList.add(UP);
  } else {
    userPlaceholder.classList.remove(UP);
  }
});

passwordInputDiv.addEventListener('input', (e) => {
  const v = e.target.value;

  if (v) {
    pwdPlaceholder.classList.add(UP);
  } else {
    pwdPlaceholder.classList.remove(UP);
  }
});

const showPassword = document.querySelector('.show-password');
console.log(showPassword.textContent);

console.log(pwdInput.getAttribute('type'));

showPassword.addEventListener('click', () => {
  pwdInput.setAttribute('type', 'text');

  console.log(pwdInput.getAttribute('type'));

  showPassword.textContent = '숨기기';

  // console.log(pwdInput.getAttribute('type'));
  if (pwdInput.getAttribute('type') === 'text') {
    pwdInput.setAttribute('type', 'password');
    showPassword.textContent = '비밀번호 표시';
  }
});
