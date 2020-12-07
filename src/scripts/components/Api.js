export default class Api {
    constructor({baseUrl, authorization, contentType}, handleError) {
        this._baseUrl = baseUrl;
        this._authorization = authorization;
        this._contentType = contentType;
        this._handleError = handleError;
    }

    getInitialCards() {
           return fetch(`${this._baseUrl}/cards`, {
                headers: {
                    authorization: `${this._authorization}`
                }
            })
               .then((res) => {
                   if(res.ok) {
                       return res.json();
                   }
                   return Promise.reject(this._handleError(res.status));
               })
               .catch(() => {
                   this._handleError("Неизвестная ошибка, попробуйте еще раз");
               });
        }

    getUserInfo() {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: {
                authorization: `${this._authorization}`
            }
        })
            .then((res) => {
                if(res.ok) {
                    return res.json();
                }
                return Promise.reject(this._handleError(res.status));
            })
            .catch(() => {
                this._handleError("Неизвестная ошибка, попробуйте еще раз");
            });
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
            .then((res) => {
                if(res.ok) {
                    return res.json();
                }
                return Promise.reject(this._handleError(`Ошибка ${res.status}`));
            })
            .catch(() => {
                this._handleError("Неизвестная ошибка, попробуйте еще раз");
            });
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
            .then((res) => {
                if(res.ok) {
                    return res.json();
                }
                return Promise.reject(this._handleError(res.status));
            })
            .catch(() => {
                this._handleError("Неизвестная ошибка, попробуйте еще раз");
            });
    }

    deleteCard(id) {
        return fetch(`${this._baseUrl}/cards/${id}`, {
            method: "DELETE",
            headers: {
                authorization: `${this._authorization}`,
                'Content-Type': this._contentType
            },
        })
            .then((res) => {
                if(res.ok) {
                    return res.json();
                }
                return Promise.reject(this._handleError(res.status));
            })
            .catch(() => {
                this._handleError("Неизвестная ошибка, попробуйте еще раз");
            });
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
            .then((res) => {
                if(res.ok) {
                    return res.json();
                }
                return Promise.reject(this._handleError(res.status));
            })
            .catch(() => {
                this._handleError("Неизвестная ошибка, попробуйте еще раз");
            });
    }

    putLike(id) {
        return fetch(`${this._baseUrl}/cards/likes/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `${this._authorization}`,
                'Content-Type': this._contentType
            }
        })
            .then((res) => {
                if(res.ok) {
                    return res.json();
                }
                return Promise.reject(this._handleError(res.status));
            })
            .catch(() => {
                this._handleError("Неизвестная ошибка, попробуйте еще раз");
            });
    }

    deleteLike(id) {
        return fetch(`${this._baseUrl}/cards/likes/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `${this._authorization}`,
                'Content-Type': this._contentType
            }
        })
            .then((res) => {
                if(res.ok) {
                    return res.json();
                }
                return Promise.reject(this._handleError(res.status));
            })
            .catch(() => {
                this._handleError("Неизвестная ошибка, попробуйте еще раз");
            });
    }
    }
