const menuToggle = document.querySelector('.menu-toggle input');
const navLink = document.querySelector('.nav-link');

menuToggle.addEventListener('click', function () {
  navLink.classList.toggle('slide');
});
