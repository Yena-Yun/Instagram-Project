//const imageArray = [];
//
//const image1 = document.querySelector('.shot1').outerHTML;
//const image2 = document.querySelector('.shot2').outerHTML;
//const image3 = document.querySelector('.shot3').outerHTML;
//const image4 = document.querySelector('.shot4').outerHTML;
//const image5 = document.querySelector('.shot5').outerHTML;
//
//console.log(image1.outerHTML);
//
//imageArray.push(image1, image2, image3, image4, image5);

const imageArray = document.querySelectorAll('.banner-image');

console.log(imageArray);

const VISIBLE = 'visible';
const NEXT = 'next';

let index = 0;

setInterval(() => {
  if (index === imageArray.length - 1) index = 0;

  let showImage = imageArray[index].classList.add(VISIBLE);
  let nextImage = imageArray[index + 1].classList.add(NEXT);

  console.log(showImage);
  console.log(nextImage);

  index++;

  if (imageArray[index].classList.contains(VISIBLE)) {
    imageArray[index].classList.remove(VISIBLE);
  }

  console.log(index);
}, 1000);

console.log(imageArray);
