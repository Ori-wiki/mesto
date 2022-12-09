export default class UserInfo {
  constructor({
    profileNameSelector,
    profileProfessionSelector,
    porfileAvatarSelector,
  }) {
    this._name = document.querySelector(profileNameSelector);
    this._profession = document.querySelector(profileProfessionSelector);
    this._avatar = document.querySelector(porfileAvatarSelector);
  }
  getUserInfo() {
    const userInfo = {
      name: this._name.textContent,
      about: this._profession.textContent,
    };
    return userInfo;
  }
  setUserInfo(userInfo) {
    if (userInfo.name) {
      this._name.textContent = userInfo.name;
      this._profession.textContent = userInfo.about;
    }
  }
  setUserAvatar(data) {
    if (data.avatar) {
      this._avatar.src = data.avatar;
    }
  }
}
