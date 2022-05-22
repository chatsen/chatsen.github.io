import { storage } from '/kyouyuu/js/storage.js';
import { chatsen } from "/js/apis/chatsen/chatsen.js";

(async function () {
  let twitchUser = storage.get('twitchUser');
  let user = JSON.parse(twitchUser);
  if (user == null) {
    alert('Not logged in')
    window.close();
    return;
  }

  let urlSearchParams = new URLSearchParams(window.location.search);
  let queryParams = Object.fromEntries(urlSearchParams.entries());
  let code = queryParams['code'];
  if (code == null) {
    alert('No code present')
    window.close();
    return;
  }

  storage.set('patreonUser', JSON.stringify({
    token: code,
  }));

  if (!await chatsen.link(user['token'], code))
    alert('Could not link account');
  window.close();
})();
