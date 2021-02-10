
const aboutLink = document.querySelector('.about__link');
const aboutMain = document.querySelector('.about')

function linkClick() {
  aboutLink.addEventListener('click', () => {
      aboutMain.classList.add('about-active');
  });
}

linkClick();
