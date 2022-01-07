const moreContent = document.querySelector('.more-content');
const postDesc = document.querySelector('.post-desc');

moreContent.addEventListener('click', () => {
	postDesc.classList.toggle('more-initial');
	moreContent.classList.add('none');
});
