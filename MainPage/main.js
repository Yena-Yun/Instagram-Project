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

leftBtn.style.display = 'none';

leftBtn.addEventListener('click', () => {
  slideContainer.scrollLeft -= 268; // 유저 한칸 너비 * 4
});

rightBtn.addEventListener('click', () => {
  slideContainer.scrollLeft += 268;
});

slideContainer.addEventListener('scroll', () => {
  // scrollLeft가 맨 끝에 다다르면 오른쪽 버튼 사라지게
  // 'scrollWidth(스크롤 전체 너비)에서 clientWidth(뷰포트 너비)를 뺀 지점'을 인식
  // (소수점이 나오니까 -1을 해주고 '>, <'로 비교)
  if (slideContainer.scrollLeft > slideContainer.scrollWidth - slideContainer.clientWidth - 1) {
    rightBtn.style.display = 'none';
  } else if (slideContainer.scrollLeft === 0) {
    leftBtn.style.display = 'none';
  } else {
    rightBtn.style.display = 'block';
    leftBtn.style.display = 'block';
  }
});
