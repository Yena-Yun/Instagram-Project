// 이미지 슬라이드
const slideContainer = document.querySelector(".slide-container");
const leftBtn = document.querySelector(".left-slide-btn");
const rightBtn = document.querySelector(".right-slide-btn");
const SCROLL_LEFT = 268;

leftBtn.style.display = "none";

leftBtn.addEventListener("click", () => {
  slideContainer.scrollLeft -= SCROLL_LEFT; // 유저 한칸 너비 * 4
});

rightBtn.addEventListener("click", () => {
  slideContainer.scrollLeft += SCROLL_LEFT;
});

slideContainer.addEventListener("scroll", () => {
  // scrollLeft가 맨 끝에 다다르면 오른쪽 버튼 사라지게
  // 'scrollWidth(스크롤 전체 너비)에서 clientWidth(뷰포트 너비)를 뺀 지점'을 인식
  // (소수점이 나오니까 -1을 해주고 '>, <'로 비교)
  if (
    slideContainer.scrollLeft >
    slideContainer.scrollWidth - slideContainer.clientWidth - 1
  ) {
    rightBtn.style.display = "none";
  } else if (slideContainer.scrollLeft === 0) {
    leftBtn.style.display = "none";
  } else {
    rightBtn.style.display = "block";
    leftBtn.style.display = "block";
  }
});

// 친구 리스트에 유저 추가
const friendsList = [
  {
    id: 0,
    image: "./assets/image/friends/gaeko.jpg",
    name: "개코",
  },
  {
    id: 1,
    image: "./assets/image/friends/ha-jeongwu.jpg",
    name: "하정우",
  },
  {
    id: 2,
    image: "./assets/image/friends/boycold.jpg",
    name: "BOYCOLD",
  },
  {
    id: 3,
    image: "./assets/image/friends/ariana.png",
    name: "Ariana",
  },
  {
    id: 4,
    image: "./assets/image/friends/iu.png",
    name: "아이유",
  },
  {
    id: 5,
    image: "./assets/image/friends/namjuhyeok.png",
    name: "남주혁",
  },
  {
    id: 6,
    image: "./assets/image/friends/jin.jpg",
    name: "진",
  },
  {
    id: 7,
    image: "./assets/image/friends/rm.png",
    name: "알엠",
  },
  {
    id: 7,
    image: "./assets/image/friends/jimin.jpg",
    name: "지민",
  },
  {
    id: 8,
    image: "./assets/image/friends/suzy.jpg",
    name: "수지",
  },
];

function renderFriends() {
  const friendList = document.querySelector(".friends-list");

  for (let x of friendsList) {
    const friendContainer = document.createElement("li");
    friendContainer.classList.add("friend");

    const imgContainer = document.createElement("div");
    imgContainer.classList.add("friend-image");
    const img = document.createElement("img");
    img.setAttribute("src", x.image);
    img.setAttribute("alt", x.name);
    imgContainer.appendChild(img);

    const info = document.createElement("div");
    info.classList.add("friend-info");
    info.innerText = x.name;
    friendContainer.append(imgContainer, info);
    friendList.appendChild(friendContainer);
  }
}

renderFriends();

// 게시글 더보기 line-clamp
const moreContent = document.querySelector(".more-content");
const postDesc = document.querySelector(".post-desc");

moreContent.addEventListener("click", () => {
  postDesc.classList.toggle("more-initial");
  moreContent.classList.add("none");
});

// 게시글 좋아요 (하트색깔 바뀌고 좋아요 개수 + 1)
const likeBefore = document.querySelector(".like-before");
const likeAfter = document.querySelector(".like-after");
const likeNumber = document.querySelector(".like-number");

likeAfter.style.display = "none";

likeBefore.addEventListener("click", () => {
  likeBefore.style.display = "none";
  likeAfter.style.display = "block";
  likeNumber.innerText = Number(likeNumber.innerText) + 1;
});

likeAfter.addEventListener("click", () => {
  likeBefore.style.display = "block";
  likeAfter.style.display = "none";
  likeNumber.innerText = Number(likeNumber.innerText) - 1;
});

// 댓글 달기
const commentForm = document.querySelector(".comment-form");
const commentList = document.querySelector(".comment-list");
const commentInput = document.querySelector(".comment-textarea");

function renderComment(newComment) {
  const li = document.createElement("li");
  const userSpan = document.createElement("p");
  const commentSpan = document.createElement("p");

  commentSpan.innerText = newComment;

  li.style.display = "flex";

  userSpan.textContent = "0_ggaebi";
  userSpan.style.marginRight = "20px";
  userSpan.style.fontWeight = "600";

  li.append(userSpan, commentSpan);

  commentList.appendChild(li);
}

function onCommentSubmit(e) {
  e.preventDefault();
  const newComment = commentInput.value;
  commentInput.value = "";
  commentInput.focus();
  renderComment(newComment);
}

commentForm.addEventListener("submit", onCommentSubmit);

// 사이드바에 추천 유저 추가
function renderFollower() {
  const recommendedUserList = document.querySelector(".recommended-userlist");
  const recommendedUser = document.createElement("li");
  const userImage = document.createElement("div");
  const totoro = document.createElement("img");
  const userInfo = document.createElement("div");
  const userName = document.createElement("div");
  const userDesc = document.createElement("div");
  const followBtn = document.createElement("button");

  recommendedUser.classList.add("recommended-user");
  userImage.classList.add("user-image");
  totoro.setAttribute("src", "assets/image/totoro.jpg");
  totoro.setAttribute("alt", "recommended-user");
  userInfo.classList.add("user-info");
  userName.classList.add("user-name");
  userName.innerText = "0_ggaebi";
  userDesc.classList.add("user-desc");
  userDesc.innerText = "ju_ju_1210님 외 3명이 팔로우합니다";
  followBtn.classList.add("follow-btn");
  followBtn.innerText = "팔로우";

  userImage.appendChild(totoro);
  userInfo.append(userName, userDesc);
  recommendedUser.append(userImage, userInfo, followBtn);
  recommendedUserList.appendChild(recommendedUser);
}

for (let i = 0; i < 5; i++) {
  renderFollower();
}
