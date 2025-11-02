// Seleciona o botão e o menu
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.main-nav');

// Quando clicar no botão, alterna as classes "active"
menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  navMenu.classList.toggle('active');
});
