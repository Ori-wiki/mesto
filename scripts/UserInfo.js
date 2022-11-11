export default class UserInfo {
  constructor({ profileName, profileProfession }) {
    this._name = profileName
    this._profession = profileProfession
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
}


// const asd = new UserInfo()
