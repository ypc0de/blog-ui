const navToggle = document.getElementById('nav-toggle'),
  navAuth = document.getElementById('nav-auth');

navToggle.addEventListener('click', () => {
  navAuth.classList.toggle('show-auth');
});
