const menuButton = document.querySelector('.hamburger-button');
const navbarList = document.querySelector('.navbar-list');

menuButton.addEventListener('click', function () {
    navbarList.classList.toggle('show');
});
