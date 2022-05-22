class Chatsen {
  constructor() {
    this.endpoint = 'https://api.chatsen.app/account';
  }

  async link(token, code) {
    let response = await fetch(`${this.endpoint}/link`, {
      method: 'GET',
      headers: {
        'Authorization': token,
        'Code': code,
      },
    });
    return response.status == 200;
  }

  async unlink(token) {
    let response = await fetch(`${this.endpoint}/unlink`, {
      method: 'GET',
      headers: {
        'Authorization': token,
      },
    });
    return response.status == 200;
  }

  async check(token) {
    let response = await fetch(`${this.endpoint}/check`, {
      method: 'GET',
      headers: {
        'Authorization': token,
      },
    });
    return response.status == 200;
  }
}

export const chatsen = new Chatsen();
