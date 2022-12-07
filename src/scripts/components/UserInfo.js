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
      profession: this._profession.textContent,
    };
    return userInfo;
  }
  setUserInfo(userInfo) {
    this._name.textContent = userInfo.name;
    console.log(this._profession);
    this._profession.textContent = userInfo.about;
  }
  setUserAvatar(data) {
    this._avatar.src = data.avatar;
  }
}
