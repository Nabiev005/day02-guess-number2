const toggleBtn = document.getElementById('toggleBtn');
const body = document.body;

// Функция: Теманы орнотуу
function setTheme(theme) {
  body.className = theme; 
  localStorage.setItem('theme', theme);
}

// Алгач: сакталган тема барбы?
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  setTheme(savedTheme);
} else {
  setTheme('light'); // демейки — light
}

// Кнопкага toggle логикасы
toggleBtn.addEventListener('click', () => {
  const currentTheme = body.className;
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  setTheme(newTheme);
});
