// 이미지 전환
const imageArray = document.querySelectorAll('.banner-image');

const VISIBLE = 'visible';

let index = 1;

setInterval(() => {
  imageArray[index === 0 ? imageArray.length - 1 : index - 1].classList.remove(VISIBLE);

  imageArray[index].classList.add(VISIBLE);

  index++;

  if (index === imageArray.length) index = 0;
}, 3000);

// input의 placeholder 위치 조정
const userInputDiv = document.querySelector('.username input');
console.log(userInputDiv);
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

// 비밀번호 표시 또는 숨기기
const showPassword = document.querySelector('.show-password');
console.log(showPassword.textContent);

console.log(pwdInput.getAttribute('type'));

showPassword.addEventListener('click', () => {
  pwdInput.setAttribute('type', 'text');

  console.log(pwdInput.getAttribute('type'));

  showPassword.textContent = '숨기기';

  if (pwdInput.getAttribute('type') === 'text') {
    pwdInput.setAttribute('type', 'password');
    showPassword.textContent = '비밀번호 표시';
  }
});

// 특정 이메일과 비밀번호 입력 시 로그인 버튼색 바꾸기
const loginForm = document.querySelector('form.hello');
console.log(loginForm);

const loginBtn = document.querySelector('.login-form .submit-btn');

console.dir(loginBtn);

if (userInputDiv.value === 'ggg' && passwordInputDiv.value === '123') {
  loginBtn.classList.add('login');
}

const userInputVal = document.querySelector('.username-input');
const pwdInputVal = document.querySelector('.password-input');

console.log(userInputVal.value);

const LOGIN = 'login';

function login(e) {
  e.preventDefault();

  if (userInputVal.value === 'ggg' && pwdInputVal.value === '123') {
    loginBtn.style.backgroundColor = '#0095f6';
    loginBtn.style.color = '#fff';
  }
}

loginForm.addEventListener('keyup', login);

loginBtn.addEventListener('click', (e) => {
  e.preventDefault();
  console.log('??');
  location.href = '../practice/practice.html';
});
