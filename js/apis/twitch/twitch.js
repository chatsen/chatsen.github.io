export class Twitch {
  static async validateToken(token) {
    let response = await fetch('https://id.twitch.tv/oauth2/validate', {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    return await response.json();
  }

  static async userData(token, clientId) {
    let response = await fetch('https://api.twitch.tv/helix/users', {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Client-Id': clientId,
      },
    });
    return await response.json();
  }
}
