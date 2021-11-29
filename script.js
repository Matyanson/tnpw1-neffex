const toggleBtn = document.getElementById('navToggle');
const navElement = document.getElementsByTagName('nav')[0];

toggleBtn.addEventListener('click', () => navElement.classList.toggle('opened'));