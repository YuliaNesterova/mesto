(()=>{"use strict";var e={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_inactive",inputErrorClass:"popup__input_invalid"},t=document.querySelector(".popup_type_image"),n=document.querySelector(".popup__form_type_edit"),r=document.querySelector(".popup__form_type_add"),o=document.querySelector(".popup__form_type_edit-pic"),i="popup_opened",u=".cards-template",a=document.querySelector(".profile__title"),c=document.querySelector(".profile__subtitle"),s=document.querySelector(".profile__image"),l=document.querySelector(".popup__input_type_title"),f=document.querySelector(".popup__input_type_subtitle"),p="element__like-button_clicked",h=document.querySelector(".profile__edit-button"),_=document.querySelector(".profile__add-button"),y=document.querySelector(".profile__image-button"),d=document.querySelector(".popup__button_type_edit"),m=document.querySelector(".popup__button_type_create"),v=document.querySelector(".popup__button_type_edit-pic"),b="popup__open-animation",g="Сохранение...",k="Сохранить",S="Удаление...",E=document.querySelector(".loader"),w="loader_shown";function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var O=function(){function e(t,n,r,o,i){var u=t.data,a=t.handleCardClick,c=t.handleCardLike;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._data=u,this._templateSelector=n,this._handleCardclick=a,this._handleCardRemove=r,this._handleCardLike=c,this._api=o,this._userId=i}var n,r;return n=e,(r=[{key:"putLike",value:function(e,t,n){e.classList.remove(p),t.textContent=n.likes.length}},{key:"deleteLike",value:function(e,t,n){e.classList.add(p),t.textContent=n.likes.length}},{key:"_toggleLike",value:function(e,t,n){this._handleCardLike(e,t,n)}},{key:"_handleOpenPopup",value:function(e,t){this._handleCardclick(t)}},{key:"_toggleAuthorShow",value:function(e){e.classList.add("element__author_shown")}},{key:"_toggleAuthorHide",value:function(e){e.classList.remove("element__author_shown")}},{key:"_handleDeleteButtonClick",value:function(e,t,n){this._handleCardRemove(e,t,n)}},{key:"_getTemplate",value:function(e,t){var n=document.querySelector(t).content.cloneNode(!0),r=n.querySelector(".element__text"),o=n.querySelector(".element__image"),i=n.querySelector(".element__like-counter"),u=n.querySelector(".element__like-button"),a=n.querySelector(".element__delete-button"),c=n.querySelector(".element__card-author");n.querySelector(".element__author").textContent=e.owner.name,c.setAttribute("src",e.owner.avatar),r.innerText=e.name,o.setAttribute("src",e.link),o.setAttribute("alt",e.name),i.textContent=e.likes.length;for(var s=0;s<e.likes.length;s++)this._userId===e.likes[s]._id&&u.classList.add(p);return this._userId!==e.owner._id&&(a.style.display="none"),n}},{key:"_setEventListeners",value:function(e){var n=this,r=this._element.querySelector(".element__delete-button"),o=this._element.querySelector(".element__like-button"),i=this._element.querySelector(".element__image"),u=e._id,a=this._element.querySelector(".element__like-counter"),c=this._element.querySelector(".element"),s=this._element.querySelector(".element__author"),l=this._element.querySelector(".element__card-author");l.addEventListener("mouseover",(function(){return n._toggleAuthorShow(s)})),l.addEventListener("mouseout",(function(){return n._toggleAuthorHide(s)})),r.addEventListener("click",(function(){return n._handleDeleteButtonClick(u,n._api,c)})),o.addEventListener("click",(function(){return n._toggleLike(u,o,a)})),i.addEventListener("click",(function(){return n._handleOpenPopup(t,e)}))}},{key:"getCard",value:function(e,t){return this._element=this._getTemplate(e,t),this._setEventListeners(e),this._element}}])&&C(n.prototype,r),e}();function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var P=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._container.append(e)}},{key:"addNewItem",value:function(e){this._container.prepend(e)}},{key:"renderItems",value:function(e,t){var n=this;e.forEach((function(e){n._renderer(e,t)}))}}])&&L(t.prototype,n),e}();function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var q=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._params=t,this._formElement=n,this._buttonElement=this._formElement.querySelector(this._params.submitButtonSelector),this._currentInputElements=Array.from(this._formElement.querySelectorAll(this._params.inputSelector))}var t,n;return t=e,(n=[{key:"_showError",value:function(e){this._formElement.querySelector("#".concat(e.id,"-error")).textContent=e.validationMessage,e.classList.add(this._params.inputErrorClass)}},{key:"_hideError",value:function(e){this._formElement.querySelector("#".concat(e.id,"-error")).textContent="",e.classList.remove(this._params.inputErrorClass)}},{key:"_checkInputValidity",value:function(e){e.checkValidity()?this._hideError(e):this._showError(e)}},{key:"hideErrorOpen",value:function(){var e=this;this._currentInputElements.forEach((function(t){e._hideError(t,e._params)}))}},{key:"toggleButtonState",value:function(){this._formElement.checkValidity()?(this._buttonElement.classList.remove(this._params.inactiveButtonClass),this._buttonElement.disabled=!1):(this._buttonElement.classList.add(this._params.inactiveButtonClass),this._buttonElement.disabled=!0)}},{key:"_setEventListeners",value:function(){var e=this;this._currentInputElements.forEach((function(t){t.addEventListener("input",(function(t){e._checkInputValidity(t.target),e.toggleButtonState()}))})),this.toggleButtonState()}},{key:"enableValidation",value:function(){this._formElement.addEventListener("submit",(function(e){e.preventDefault()})),this._setEventListeners()}}])&&j(t.prototype,n),e}();function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var T=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleBackgroundClick=this._handleBackgroundClick.bind(this),this._handleEscClose=this._handleEscClose.bind(this),this._container=this._popup.querySelector(".popup__container")}var t,n;return t=e,(n=[{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"_handleBackgroundClick",value:function(e){e.target.classList.contains("popup")&&this.close()}},{key:"open",value:function(){this._popup.classList.add(i),this._container.classList.add(b),document.addEventListener("keydown",this._handleEscClose),document.addEventListener("click",this._handleBackgroundClick)}},{key:"close",value:function(){this._popup.classList.remove(i),this._container.classList.remove(b),document.removeEventListener("keydown",this._handleEscClose),document.removeEventListener("click",this._handleBackgroundClick)}},{key:"setEventListeners",value:function(){this._popup.querySelector(".popup__close-button").addEventListener("click",this.close.bind(this))}}])&&R(t.prototype,n),e}();function I(e){return(I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function D(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function U(e,t,n){return(U="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=z(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function x(e,t){return(x=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function A(e,t){return!t||"object"!==I(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function z(e){return(z=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var B=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&x(e,t)}(a,t);var n,r,o,i,u=(o=a,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=z(o);if(i){var n=z(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return A(this,e)});function a(t,n,r,o,i,c){var s;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(s=u.call(this,t))._handleFormSubmit=n,s._handleOpenValidation=r,s._formValidator=o,s._popupForm=s._popup.querySelector(e.formSelector),s}return n=a,(r=[{key:"_getInputValues",value:function(){var t=this;return this._inputs=this._popup.querySelectorAll(e.inputSelector),this._inputValues={},this._inputs.forEach((function(e){t._inputValues[e.name]=e.value})),this._inputValues}},{key:"open",value:function(){U(z(a.prototype),"open",this).call(this),this._handleOpenValidation(this._formValidator)}},{key:"close",value:function(){this._popupForm.reset(),U(z(a.prototype),"close",this).call(this)}},{key:"setEventListeners",value:function(){var e=this;this._popupForm.addEventListener("submit",(function(t){e._handleFormSubmit(t,e._getInputValues())})),U(z(a.prototype),"setEventListeners",this).call(this)}}])&&D(n.prototype,r),a}(T);function V(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var N=function(){function e(t,n){var r=t.baseUrl,o=t.authorization,i=t.contentType;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=r,this._authorization=o,this._contentType=i,this._handleError=n}var t,n;return t=e,(n=[{key:"_getResponseData",value:function(e){return e.ok?e.json():Promise.reject(this._handleError("Ошибка ".concat(e.status)))}},{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/cards"),{headers:{authorization:"".concat(this._authorization)}}).then((function(t){return e._getResponseData(t)}))}},{key:"getUserInfo",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/users/me"),{headers:{authorization:"".concat(this._authorization)}}).then((function(t){return e._getResponseData(t)}))}},{key:"changeUserInfo",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:{authorization:"".concat(this._authorization),"Content-Type":this._contentType},body:JSON.stringify({name:e.name,about:e.profession})}).then((function(e){return t._getResponseData(e)}))}},{key:"addNewCard",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:{authorization:"".concat(this._authorization),"Content-Type":this._contentType},body:JSON.stringify({name:e.description,link:e.image})}).then((function(e){return t._getResponseData(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:{authorization:"".concat(this._authorization),"Content-Type":this._contentType}}).then((function(e){return t._getResponseData(e)}))}},{key:"getNewUserPic",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:{authorization:"".concat(this._authorization),"Content-Type":this._contentType},body:JSON.stringify({avatar:e.user_pic})}).then((function(e){return t._getResponseData(e)}))}},{key:"putLike",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:{authorization:"".concat(this._authorization),"Content-Type":this._contentType}}).then((function(e){return t._getResponseData(e)}))}},{key:"deleteLike",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:{authorization:"".concat(this._authorization),"Content-Type":this._contentType}}).then((function(e){return t._getResponseData(e)}))}}])&&V(t.prototype,n),e}();function F(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var H=function(){function e(t){var n=t.userName,r=t.userProfession,o=t.userAvatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userName=n,this._userProfession=r,this._userAvatar=o}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return this._userProfile={name:this._userName.textContent,profession:this._userProfession.textContent},this._userProfile}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.profession;this._userName.textContent=t,this._userProfession.textContent=n}},{key:"setUserPic",value:function(e){this._userAvatar.src=e}}])&&F(t.prototype,n),e}();function J(e){return(J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function M(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function $(e,t,n){return($="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=Q(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function G(e,t){return(G=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function K(e,t){return!t||"object"!==J(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Q(e){return(Q=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var W=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&G(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=Q(r);if(o){var n=Q(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return K(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._imagePopupPicture=t._popup.querySelector(".popup__image"),t._imagePopupCaption=t._popup.querySelector(".popup__caption"),t._container=t._popup.querySelector(".popup__container-image"),t}return t=u,(n=[{key:"open",value:function(e){var t=e.link,n=e.name;this._container.classList.add(b),this._imagePopupPicture.src=t,this._imagePopupPicture.alt=n,this._imagePopupCaption.textContent=n,$(Q(u.prototype),"open",this).call(this)}}])&&M(t.prototype,n),u}(T);function X(e){return(X="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Z(e,t,n){return(Z="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=ne(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function ee(e,t){return(ee=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function te(e,t){return!t||"object"!==X(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function ne(e){return(ne=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var re=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ee(e,t)}(a,t);var n,r,o,i,u=(o=a,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=ne(o);if(i){var n=ne(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return te(this,e)});function a(t,n){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(r=u.call(this,t))._handleFormSubmit=n,r._popupForm=r._popup.querySelector(e.formSelector),r._submitButton=r._popup.querySelector(e.submitButtonSelector),r}return n=a,(r=[{key:"open",value:function(e,t,n){this._api=t,this._cardId=e,this._element=n,Z(ne(a.prototype),"open",this).call(this)}},{key:"setEventListeners",value:function(){var e=this;this._popupForm.addEventListener("submit",(function(t){return e._handleFormSubmit(t,e._api,e._cardId,e._element,e._submitButton)})),Z(ne(a.prototype),"setEventListeners",this).call(this)}}])&&Y(n.prototype,r),a}(T);function oe(e){return(oe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ie(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ue(e,t){return(ue=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ae(e,t){return!t||"object"!==oe(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function ce(e){return(ce=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var se=new(function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ue(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=ce(r);if(o){var n=ce(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return ae(this,e)});function u(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),i.call(this,e)}return t=u,(n=[{key:"fillErrorField",value:function(e){this._popup.querySelector(".popup__subtitle").textContent=e}}])&&ie(t.prototype,n),u}(T))(".popup_type_error");se.setEventListeners();var le=new W(".popup_type_image");le.setEventListeners();var fe=new re(".popup_type_delete",(function(e,t,n,r,o){e.preventDefault(),he(!0,o,S,"Да"),"submit"===e.type&&t.deleteCard(n).then((function(){r.remove(),fe.close()})).finally((function(){he(!1,o,S,"Да")})).catch((function(){_e("Неизвестная ошибка, попробуйте еще раз")}))}));function pe(e){e?E.classList.add(w):E.classList.remove(w)}function he(e,t,n,r){t.innerText=e?n:r}function _e(e){console.log(e),se.fillErrorField(e),se.open()}function ye(e){var t=e.link,n=e.name;le.open({link:t,name:n})}function de(e,t,n){fe.open(e,t,n)}function me(e){e.hideErrorOpen(),e.toggleButtonState()}function ve(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var u,a=e[Symbol.iterator]();!(r=(u=a.next()).done)&&(n.push(u.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return be(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?be(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function be(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}fe.setEventListeners(),pe(!0);var ge=new N({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-18",authorization:"04df758b-41ec-45dd-81f7-1b0f03936357",contentType:"application/json"},_e),ke=ge.getInitialCards(),Se=new H({userName:a,userProfession:c,userAvatar:s}),Ee=ge.getUserInfo();function we(e,t){var n=new O({cards:e,handleCardClick:ye,handleCardLike:function(e,t,r){t.classList.contains(p)?ge.deleteLike(e).then((function(e){n.putLike(t,r,e)})).catch((function(){_e("Неизвестная ошибка, попробуйте еще раз")})):ge.putLike(e).then((function(e){n.deleteLike(t,r,e)})).catch((function(){_e("Неизвестная ошибка, попробуйте еще раз")}))}},u,de,ge,t);return n.getCard(e,u)}var Ce=new P({renderer:function(e,t){Ce.addItem(we(e,t))}},".elements__items"),Oe=new q(e,r);Oe.enableValidation();var Le=new q(e,n);Le.enableValidation();var Pe=new q(e,o);Pe.enableValidation();var je=new B(".popup_type_add",(function(e,t){e.preventDefault(),he(!0,m,g,k);var n=ge.addNewCard(t);Promise.all([n,Ee]).then((function(e){var t=ve(e,2),n=we(t[0],t[1]._id);Ce.addNewItem(n),je.close()})).finally((function(){he(!1,m,g,k)})).catch((function(){_e("Неизвестная ошибка, попробуйте еще раз")})),r.reset()}),me,Oe,ge,Se);je.setEventListeners();var qe=new B(".popup_type_edit",(function(e,t){e.preventDefault(),he(!0,d,g,k),ge.changeUserInfo(t).then((function(e){Se.setUserInfo({name:e.name,profession:e.about}),qe.close()})).finally((function(){he(!1,d,g,k)})).catch((function(){_e("Неизвестная ошибка, попробуйте еще раз")}))}),me,Le,ge,Se);qe.setEventListeners();var Re=new B(".popup_type_edit-pic",(function(e,t){e.preventDefault(),he(!0,v,g,k),ge.getNewUserPic(t).then((function(e){Se.setUserPic(e.avatar),Re.close()})).finally((function(){he(!1,v,g,k)})).catch((function(){_e("Неизвестная ошибка, попробуйте еще раз")}))}),me,Pe,ge,Se);Re.setEventListeners(),h.addEventListener("click",(function(){l.value=Se.getUserInfo().name,f.value=Se.getUserInfo().profession,qe.open()})),_.addEventListener("click",(function(){return je.open()})),y.addEventListener("click",(function(){return Re.open()})),Promise.all([ke,Ee]).then((function(e){var t=ve(e,2),n=t[0],r=t[1];Ce.renderItems(n,r._id),Se.setUserInfo({name:r.name,profession:r.about}),Se.setUserPic(r.avatar)})).finally((function(){pe(!1)})).catch((function(){_e("Неизвестная ошибка, попробуйте еще раз")}))})();