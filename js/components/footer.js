import { storage } from '/kyouyuu/js/storage.js';

let darkThemeButton = document.getElementById('dark-theme-button');
let lightThemeButton = document.getElementById('light-theme-button');

storage.addListener((key, value) => {
  if (key == 'brightness' || key == null) {
    if (value == 'dark' || value == null) {
      document.documentElement.classList.replace('light', 'dark');
      darkThemeButton.style.display = 'none';
      lightThemeButton.style.display = null;
    } else {
      document.documentElement.classList.replace('dark', 'light');
      darkThemeButton.style.display = null;
      lightThemeButton.style.display = 'none';
    }
  }
});

darkThemeButton.onclick = () => {
  storage.set('brightness', 'dark');
};

lightThemeButton.onclick = () => {
  storage.set('brightness', 'light');
};
