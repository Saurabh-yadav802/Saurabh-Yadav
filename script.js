const toggle = document.getElementById('toggleDark');
const body = document.body;

toggle.addEventListener('change', () => {
  body.classList.toggle('dark-mode');
});
