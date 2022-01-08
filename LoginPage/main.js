const imageArray = document.querySelectorAll('.banner-image');

const VISIBLE = 'visible';

let index = 1;

setInterval(() => {
  imageArray[index === 0 ? imageArray.length - 1 : index - 1].classList.remove(VISIBLE);

  imageArray[index].classList.add(VISIBLE);

  index++;

  if (index === imageArray.length) index = 0;
}, 2000);
