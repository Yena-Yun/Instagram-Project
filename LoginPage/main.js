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
const usernameInput = document.querySelector('.username-input');
const passwordInput = document.querySelector('.password-input');
const userPlaceholder = document.querySelector('.username.placeholder');
const pwdPlaceholder = document.querySelector('.password.placeholder');

const UP = 'up';

usernameInput.addEventListener('input', (e) => {
  const v = e.target.value;

  if (v) {
    userPlaceholder.classList.add(UP);
  } else {
    userPlaceholder.classList.remove(UP);
  }
});

passwordInput.addEventListener('input', (e) => {
  const v = e.target.value;

  if (v) {
    pwdPlaceholder.classList.add(UP);
  } else {
    pwdPlaceholder.classList.remove(UP);
  }
});

// 비밀번호 표시 또는 숨기기
const showPassword = document.querySelector('.show-password');

showPassword.addEventListener('click', () => {
  if (passwordInput.getAttribute('type') === 'text') {
    passwordInput.setAttribute('type', 'password');
    showPassword.innerText = '비밀번호 표시';
  } else {
    passwordInput.setAttribute('type', 'text');
    showPassword.innerText = '숨기기';
    showPassword.style.justifyContent = 'flex-end';
  }
});

// 특정 이메일과 비밀번호 입력 시 로그인 버튼색 바꾸기
const loginForm = document.querySelector('.login-form');
const loginBtn = document.querySelector('.submit-btn');

if (usernameInput.value === 'ggg' && passwordInput.value === '123') {
  loginBtn.classList.add('login');
}

const userInputVal = document.querySelector('.username-input');
const pwdInputVal = document.querySelector('.password-input');

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
  location.href = '../MainPage/index.html';
});
