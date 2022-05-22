import { storage } from '/kyouyuu/js/storage.js';
import { chatsen } from "/js/apis/chatsen/chatsen.js";

let loginWithPatreonButton = document.getElementById('login-with-patreon-button');

async function checkPatreonStatus() {
  loginWithPatreonButton.innerHTML = loginWithPatreonButton.innerHTML.replace(/&nbsp;&nbsp;.*/g, `&nbsp;&nbsp;Loading...`);

  let twitchUser = storage.get('twitchUser');
  let user = JSON.parse(twitchUser);
  if (user == null)
    return;

  if (await chatsen.check(user['token'])) {
    loginWithPatreonButton.innerHTML = loginWithPatreonButton.innerHTML.replace(/&nbsp;&nbsp;.*/g, `&nbsp;&nbsp;Unlink account`);
    loginWithPatreonButton.onclick = unlink;
  } else {
    loginWithPatreonButton.innerHTML = loginWithPatreonButton.innerHTML.replace(/&nbsp;&nbsp;.*/g, `&nbsp;&nbsp;Login with Patreon`);
    loginWithPatreonButton.onclick = link;
  }
}

storage.addListener((key, value) => {
  if (key == 'twitchUser') {
    checkPatreonStatus();

    let user = JSON.parse(value);
    if (user == null)
      return;

    let profile = document.getElementById('profile');
    let profileAvatar = profile.getElementsByClassName('avatar')[0]
    let profileNameUsername = document.getElementById('profile-name-username');
    let profileNameUserId = document.getElementById('profile-name-userid');

    profileAvatar.src = user['profileImage'];
    profileNameUsername.innerText = user['displayName'];
    profileNameUserId.innerText = `#${user['id']}`;
  }
});

async function link() {
  let url = 'https://www.patreon.com/oauth2/authorize?response_type=code&client_id=ZnOByLFZZzeZqdZIQsS2_ExwDCSWBfQAT3-5zta6hvNJEi0K8ShxWr52bJkzU4UF&redirect_uri=https://chatsen.app/link';
  let oauthWindow = window.open(url, '_blank', 'location=no,height=600,width=600,scrollbars=yes,status=yes');
  let timer = setInterval(() => {
    if (!oauthWindow.closed)
      return;

    clearInterval(timer);
    checkPatreonStatus();
  }, 500);
}

async function unlink() {
  let twitchUser = storage.get('twitchUser');
  let user = JSON.parse(twitchUser);
  if (user == null)
    return;

  chatsen.unlink(user['token']);
  checkPatreonStatus();
}
