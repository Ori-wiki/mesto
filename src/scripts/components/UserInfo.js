export default class UserInfo {
  constructor({ profileNameSelector, profileProfessionSelector, porfileAvatarSelector }) {
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
    this._profession.textContent = userInfo.profession;
  }
  setUserAvatar(data){
    this._avatar.src = data.avatar;
  }
}

