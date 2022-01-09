// 게시글 더보기 line-clamp
const moreContent = document.querySelector('.more-content');
const postDesc = document.querySelector('.post-desc');

moreContent.addEventListener('click', () => {
  postDesc.classList.toggle('more-initial');
  moreContent.classList.add('none');
});

// 이미지 슬라이드
const slideContainer = document.querySelector('.slide-container');
const leftBtn = document.querySelector('.left-slide-btn');
const rightBtn = document.querySelector('.right-slide-btn');

leftBtn.addEventListener('click', () => {
  slideContainer.scrollLeft -= 268;
  leftBtn.style.display = 'none';
});

leftBtn.style.display = 'none';

rightBtn.addEventListener('click', () => {
  slideContainer.scrollLeft += 268;
});

slideContainer.addEventListener('scroll', () => {
  if (slideContainer.scrollLeft > slideContainer.scrollWidth - slideContainer.clientWidth - 1) {
    rightBtn.style.display = 'none';
  } else if (slideContainer.scrollLeft === 0) {
    leftBtn.style.display = 'none';
  } else {
    rightBtn.style.display = 'block';
    leftBtn.style.display = 'block';
  }
});
