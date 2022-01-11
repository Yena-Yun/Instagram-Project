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

// 친구 리스트에 유저 추가
function renderFriends() {
  const friendList = document.querySelector('.friends-list');
  const friend = document.createElement('li');
  const friendInfo = document.createElement('div');
  const friendImage = document.createElement('div');
  const unicorn = document.createElement('img');
  const friendName = document.createElement('div');

  friend.classList.add('friend');
  friendInfo.classList.add('friend-info');
  friendImage.classList.add('friend-image');
  unicorn.setAttribute('src', 'assets/image/unicorn.png');
  unicorn.setAttribute('alt', 'friend-user-image');
  friendName.classList.add('friend-name');
  friendName.innerText = 'unicorn';

  friendImage.appendChild(unicorn);
  friendInfo.append(friendImage, friendName);
  friend.appendChild(friendInfo);

  console.log(friend);

  friendList.appendChild(friend);
  friendList.appendChild(friend);
  friendList.appendChild(friend);
}

for (let i = 0; i < 16; i++) {
  renderFriends();
}

function renderComment(newComment) {
  const li = document.createElement('li');
  li.innerText = newComment;
  commentList.appendChild(li);
}

// // hover?
// const postIcon = document.querySelector('.post-header-icons .icon');
// console.log(postIcon);

// postIcon.addEventListener('mouseover', (e) => {
//   if (e.target.getAttribute('color') === '#262626') {
//     e.target.setAttribute('color', '#8e8e8e');
//   } else {
//     e.target.setAttribute('color', '#262626');
//   }
// });

// postIcon.addEventListener('mouseout', (e) => {
//   if (e.target.getAttribute('color') === '#262626') {
//     e.target.setAttribute('color', '#8e8e8e');
//   } else {
//     e.target.setAttribute('color', '#262626');
//   }
// });

// 좋아요 하기
const likeBefore = document.querySelector('.like-before');
const likeAfter = document.querySelector('.like-after');
const likeNumber = document.querySelector('.like-number');

likeAfter.style.display = 'none';

likeBefore.addEventListener('click', () => {
  likeBefore.style.display = 'none';
  likeAfter.style.display = 'block';
  likeNumber.innerText = Number(likeNumber.innerText) + 1;
});

likeAfter.addEventListener('click', () => {
  likeBefore.style.display = 'block';
  likeAfter.style.display = 'none';
  likeNumber.innerText = Number(likeNumber.innerText) - 1;
});

// 댓글 달기
const commentForm = document.querySelector('.comment-form');
const commentList = document.querySelector('.comment-list');
const commentInput = document.querySelector('.comment-input');
const submitComment = document.querySelector('.submit-comment');

function renderComment(newComment) {
  const li = document.createElement('li');
  li.innerText = newComment;
  commentList.appendChild(li);
}

function onCommentSubmit(e) {
  e.preventDefault();
  const newComment = commentInput.value;
  commentInput.value = '';
  renderComment(newComment);
}

commentForm.addEventListener('submit', onCommentSubmit);

// 게시글 더보기 line-clamp
const moreContent = document.querySelector('.more-content');
const postDesc = document.querySelector('.post-desc');

moreContent.addEventListener('click', () => {
  postDesc.classList.toggle('more-initial');
  moreContent.classList.add('none');
});
