import { storage } from '/kyouyuu/js/storage.js';

let loginButton = document.getElementById('login-button');
let logoutButton = document.getElementById('logout-button');

let profileButton = document.getElementById('profile-button');
let profileAvatar = document.getElementById('profile-avatar');
let profileName = document.getElementById('profile-name');

storage.addListener((key, value) => {
  if (key == 'twitchUser') {
    let twitchUser = value;
    let user = JSON.parse(twitchUser);

    if (user != null) {
      profileAvatar.src = user['profileImage'];
      profileName.innerText = user['displayName'];
      profileButton.style.display = null;
      logoutButton.style.display = null;
      loginButton.style.display = 'none';
    } else {
      profileButton.style.display = 'none';
      logoutButton.style.display = 'none';
      loginButton.style.display = null;
    }
  }
});

loginButton.onclick = async () => {
  let url = `https://id.twitch.tv/oauth2/authorize?client_id=vvxbprk8sfufgzd7k9wwr1478znf7b&redirect_uri=${window.location.origin}/oauth&response_type=token`;
  window.open(url, '_blank', 'location=no,height=600,width=600,scrollbars=yes,status=yes');
};

logoutButton.onclick = async () => {
  storage.remove('twitchUser');
  storage.remove('patreonUser');
  window.location.href = '/';
};
