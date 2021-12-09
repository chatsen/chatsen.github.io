let themeSwitcherLight = document.getElementById('theme-switcher-light');
let themeSwitcherDark = document.getElementById('theme-switcher-dark');

if (localStorage.getItem('theme') === 'dark')
  applyDarkTheme();
else if (localStorage.getItem('theme') === 'light')
  applyLightTheme();

function applyDarkTheme() {
  document.documentElement.classList.replace('light', 'dark');
  themeSwitcherLight.style.display = 'block';
  themeSwitcherDark.style.display = 'none';
  localStorage.setItem('theme', 'dark');
}

function applyLightTheme() {
  document.documentElement.classList.replace('dark', 'light');
  themeSwitcherLight.style.display = 'none';
  themeSwitcherDark.style.display = 'block';
  localStorage.setItem('theme', 'light');
}

themeSwitcherLight.addEventListener('click', applyLightTheme);
themeSwitcherDark.addEventListener('click', applyDarkTheme);
