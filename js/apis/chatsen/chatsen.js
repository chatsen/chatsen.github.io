class Chatsen {
  constructor() {
    this.endpoint = 'https://api.chatsen.app/account';
  }

  async link(token, code) {
    let response = await fetch(`${this.endpoint}/link`, {
      headers: {
        'Authorization': token,
        'Code': code,
      },
    });
    return response.status == 200;
  }

  async unlink(token) {
    let response = await fetch(`${this.endpoint}/unlink`, {
      headers: {
        'Authorization': token,
      },
    });
    return response.status == 200;
  }

  async check(token) {
    let response = await fetch(`${this.endpoint}/check`, {
      headers: {
        'Authorization': token,
      },
    });
    return response.status == 200;
  }
}

export const chatsen = new Chatsen();
