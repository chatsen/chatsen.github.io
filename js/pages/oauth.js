import { Twitch } from '/js/apis/twitch/twitch.js';
import { storage } from '/kyouyuu/js/storage.js';

(async function () {
  let urlSearchParams = new URLSearchParams(window.location.hash.substring(1));
  let queryParams = Object.fromEntries(urlSearchParams.entries());
  let token = queryParams['access_token'];
  if (token == null) {
    alert('No token present')
    window.close();
    return;
  }

  let tokenInfo = await Twitch.validateToken(token);
  let clientId = tokenInfo['client_id'];
  let id = tokenInfo['user_id'];
  let login = tokenInfo['login'];

  let userInfo = await Twitch.userData(token, clientId);
  let displayName = userInfo['data'][0]['display_name'];
  let profileImage = userInfo['data'][0]['profile_image_url'];
  let offlineUrl = userInfo['data'][0]['offline_image_url'];

  storage.set('twitchUser', JSON.stringify({
    id: id,
    login: login,
    clientId: clientId,
    displayName: displayName,
    profileImage: profileImage,
    offlineUrl: offlineUrl,
    token: token,
  }));

  window.close();
})();
