export default class Api {
  constructor(data) {
    this._baseUrl = data.serverUrl;
    this._token = data.token;
  }

  _checkResult(res) {
    return res.json();
  }

  getCards() {
    return fetch(`${this._baseUrl}cards/`, {
      headers: {
        authorization: this._token,
      },
    }).then((res) => this._checkResult(res));
  }
  postCard(data) {
    return fetch(`${this._baseUrl}cards`, {
      method: "POST",
      headers: {
        authorization: this._token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        link: data.link,
      }),
    }).then((res) => this._checkResult(res));
  }

  deleteCard(id) {
    return fetch(`${this._baseUrl}cards/${id}`, {
      method: "DELETE",
      headers: {
        authorization: this._token,
      },
    }).then((res) => {
      console.log(res);
      this._checkResult(res);
    });
  }
  getUserInfo() {
    return fetch(`${this._baseUrl}users/me`, {
      headers: {
        authorization: this._token,
      },
    }).then((res) => this._checkResult(res));
  }
  patchUserInfo() {
    fetch(`${this._baseUrl}users/me`, {
      method: "PATCH",
      headers: {
        authorization: this._token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "DENIS",
        about: "Physicist and Chemist",
      }),
    }).then((res) => this._checkResult(res));
  }
  patchUserAvatar() {
    fetch(`${this._baseUrl}users/me/avatar`, {
      method: "PATCH",
      headers: {
        authorization: this._token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        avatar:
          "https://pictures.s3.yandex.net/frontend-developer/common/avdasa.jpg",
      }),
    }).then((res) => this._checkResult(res));
  }
  putLike(id) {
    return fetch(`${this._baseUrl}cards/${id}/likes`, {
      method: "PUT",
      headers: {
        authorization: this._token,
      },
    }).then((res) => {
      this._checkResult(res);
    });
  }
  deleteLike(id) {
    return fetch(`${this._baseUrl}cards/${id}/likes`, {
      method: "DELETE",
      headers: {
        authorization: this._token,
      },
    }).then((res) => {
      this._checkResult(res);
    });
  }
}
