const bannerImagesAll = document.querySelectorAll('.banner-image-inner img');

console.log(bannerImagesAll);

const image1 = document.querySelector('.screenshot1');
const image2 = document.querySelector('.screenshot2');
const image3 = document.querySelector('.screenshot3');
const image4 = document.querySelector('.screenshot4');
const image5 = document.querySelector('.screenshot5');

// const bannerImage = document.querySelector('.banner-image');

// const imageArray = ['img/shot1.jpg', 'img/shot2.jpg', 'img/shot3.jpg', 'img/shot4.jpg', 'img/shot5.jpg'];

// let imageIndex = 1;

const PREVIOUS = 'previous';
const NEXT = 'next';

for (let i = 0; i <= bannerImagesAll.length; i++) {
  console.log(bannerImagesAll[i]);
  setInterval(() => {
    // imageIndex++; // 2
    i = i + 1;
    // bannerImage.setAttribute('src', imageArray[imageIndex]);

    // 전체 이미지 배열을 돈다.
    // 2초마다 다음 이미지에 클래스 부여
    // bannerImagesAll[i].classList.toggle(PREVIOUS);
    // bannerImagesAll[i + 1].classList.toggle(NEXT);
    // let eachImage = document.querySelector(`.image${i}`);
    // if (i >= bannerImagesAll.length) i = 0;
  }, 2000);
}

// changeImage();
