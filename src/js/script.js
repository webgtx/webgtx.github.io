
const aboutLink = document.querySelector('.about__link');
const aboutMain = document.querySelector('.about')
const buttonBack = document.querySelector('.button-back')

function linkClick() {
  aboutLink.addEventListener('click', () => {
      aboutMain.classList.add('about-active');
      aboutMain.classList.remove('about-home');
  });
};

function buttonClick() {
  buttonBack.addEventListener('click', () => {
      aboutMain.classList.remove('about-active');
      aboutMain.classList.add('about-home');
  });
}

linkClick();
buttonClick();
// aboutLink.click();
