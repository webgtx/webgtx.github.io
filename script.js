
const aboutLink = document.querySelector('.about__link');
const portfolioLink = document.querySelector('.portfolio__link')
const aboutMain = document.querySelector('.about');
const portfolioMain = document.querySelector('.portfolio');
const aboutButtonBack = document.querySelector('.button-back');
const portfolioButtonBack = document.querySelector('.w-btn');

function linkClick() {
  aboutLink.addEventListener('click', () => {
    aboutMain.classList.add('about-active');
    aboutMain.classList.remove('about-home');
  })
  portfolioLink.addEventListener('click', () => {
    portfolioMain.classList.add('portfolio-active');
    portfolioMain.classList.remove('portfolio-home');
  })
}

function buttonClick() {
  aboutButtonBack.addEventListener('click', () => {
    aboutMain.classList.remove('about-active');
    aboutMain.classList.add('about-home');
  })
  portfolioButtonBack.addEventListener('click', () => {
    portfolioMain.classList.remove('portfolio-active');
    portfolioMain.classList.add('portfolio-home');
  })
}

linkClick();
buttonClick();
// portfolioLink.click();
