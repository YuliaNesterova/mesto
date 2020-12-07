export default class UserInfo {
    constructor({userName, userProfession, userAvatar}) {
        this._userName = userName;
        this._userProfession = userProfession;
        this._userAvatar = userAvatar;
    }

    getUserInfo() {
        this._userProfile = {
            name: this._userName.textContent,
            profession: this._userProfession.textContent
        }
        return this._userProfile;
    }

    setUserInfo({name, profession,}) {
        this._userName.textContent = name;
        this._userProfession.textContent = profession;
    }

    setUserPic(avatar) {
        this._userAvatar.src = avatar;
    }
}