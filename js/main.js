const activePage = location.pathname;

// Change the background circle pattern position on load and depending on the screen size
window.onload = function () {
  if (activePage !== '/' && activePage !== '/index.html') {
    if (screen.width <= 700) {
      document.body.style.backgroundPosition = 'top -600px right -350px';
    } else if (screen.width > 700 && screen.width < 1024) {
      document.body.style.backgroundPosition = 'top -700px right -650px';
    } else {
      document.body.style.backgroundPosition = 'top -520px right -150px';
    }
  }
};

// Reponsive menu
const hamburger = document.querySelector('.header__toggle-menu');
const navBar = document.querySelector('.header__navigation');
hamburger.addEventListener('click', () => {
  navBar.classList.toggle('active');
  hamburger.classList.toggle('close');

  // alert('Joseph');
});

//Set the active menu
const menuItems = document.querySelectorAll('.header__link');
const button = document.querySelector('.header__demo-button');
const navigationLinks = document
  .querySelectorAll('.header__link')
  .forEach((link) => {
    if (link.href.includes(`${activePage}`)) {
      link.classList.add('active-link');
    }

    if (activePage === '/' || activePage === '/index.html') {
      link.classList.replace('active-link', '');
    }
  });
