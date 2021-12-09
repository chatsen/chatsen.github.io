let themeSwitcherLight = document.getElementById('theme-switcher-light');
let themeSwitcherDark = document.getElementById('theme-switcher-dark');

themeSwitcherLight.addEventListener('click', function () {
  document.documentElement.classList.replace('dark', 'light');
  themeSwitcherLight.style.display = 'none';
  themeSwitcherDark.style.display = 'block';
  localStorage.setItem('theme', 'light');
});

themeSwitcherDark.addEventListener('click', function () {
  document.documentElement.classList.replace('light', 'dark');
  themeSwitcherLight.style.display = 'block';
  themeSwitcherDark.style.display = 'none';
  localStorage.setItem('theme', 'dark');
});

if (localStorage.getItem('theme') === 'dark') {
  document.documentElement.classList.replace('light', 'dark');
  themeSwitcherLight.style.display = 'block';
  themeSwitcherDark.style.display = 'none';
} else if (localStorage.getItem('theme') === 'light') {
  document.documentElement.classList.replace('dark', 'light');
  themeSwitcherLight.style.display = 'none';
  themeSwitcherDark.style.display = 'block';
}
