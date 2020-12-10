export default class Api {
    constructor({baseUrl, authorization, contentType}, handleError) {
        this._baseUrl = baseUrl;
        this._authorization = authorization;
        this._contentType = contentType;
        this._handleError = handleError;
    }

    _getResponseData(res) {
        if (!res.ok) {
            return Promise.reject(this._handleError(`Ошибка ${res.status}`));
        }
        return res.json();
    }

    getInitialCards() {
           return fetch(`${this._baseUrl}/cards`, {
                headers: {
                    authorization: `${this._authorization}`
                }
            })
               .then((res) => this._getResponseData(res));
        }

    getUserInfo() {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: {
                authorization: `${this._authorization}`
            }
        })
            .then((res) => this._getResponseData(res));
    }

    changeUserInfo(object) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            headers: {
                authorization: `${this._authorization}`,
                'Content-Type': this._contentType
            },
            body: JSON.stringify({
                name: object.name,
                about: object.profession
            })
        })
            .then((res) => this._getResponseData(res));
    }

    addNewCard(object) {
        return fetch(`${this._baseUrl}/cards`, {
            method: 'POST',
            headers: {
                authorization: `${this._authorization}`,
                'Content-Type': this._contentType
            },
            body: JSON.stringify({
                name: object.description,
                link: object.image
            })
        })
            .then((res) => this._getResponseData(res));
    }

    deleteCard(id) {
        return fetch(`${this._baseUrl}/cards/${id}`, {
            method: "DELETE",
            headers: {
                authorization: `${this._authorization}`,
                'Content-Type': this._contentType
            },
        })
            .then((res) => this._getResponseData(res));
    }

    getNewUserPic(object) {
        return fetch(`${this._baseUrl}/users/me/avatar`, {
            method: 'PATCH',
            headers: {
                authorization: `${this._authorization}`,
                'Content-Type': this._contentType
            },
            body: JSON.stringify({
                avatar: object.user_pic
            })
        })
            .then((res) => this._getResponseData(res));
    }

    putLike(id) {
        return fetch(`${this._baseUrl}/cards/likes/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `${this._authorization}`,
                'Content-Type': this._contentType
            }
        })
            .then((res) => this._getResponseData(res));
    }

    deleteLike(id) {
        return fetch(`${this._baseUrl}/cards/likes/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `${this._authorization}`,
                'Content-Type': this._contentType
            }
        })
            .then((res) => this._getResponseData(res));
    }
    }
