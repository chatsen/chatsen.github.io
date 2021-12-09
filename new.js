let themeSwitcherLight = document.getElementById('theme-switcher-light');
let themeSwitcherDark = document.getElementById('theme-switcher-dark');

themeSwitcherLight.addEventListener('click', function () {
  document.documentElement.classList.replace('dark', 'light');
  themeSwitcherLight.style.display = 'none';
  themeSwitcherDark.style.display = 'block';
});

themeSwitcherDark.addEventListener('click', function () {
  document.documentElement.classList.replace('light', 'dark');
  themeSwitcherLight.style.display = 'block';
  themeSwitcherDark.style.display = 'none';
});
