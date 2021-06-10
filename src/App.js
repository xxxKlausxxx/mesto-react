import React from 'react';
import logo from './images/logo.svg';
import close from './images/close.svg';

function App() {
  return (
    <body>

      <div className="root">

        {/* Хедер */}
        <header className="header root__section">
          <img src={logo} alt="mesto logo" className="logo" />
        </header>

        {/* Профиль */}
        <div className="profile root__section">
          <div className="user-info">
            <div className="user-info__photo"></div>
            <div className="user-info__data">
              <h1 className="user-info__name">Jaques Causteau</h1>
              <p className="user-info__job">Sailor, Researcher</p>
              <button className="button edit__button">Edit</button>
            </div>
            <button className="button user-info__button">+</button>      
          </div>
        </div>

        {/* Контейнер с карточками */}
        <div className="places-list root__section"></div>

        {/* Попап добавления карточек */}
        <div className="popup__info popup">
          <div className="popup__content">
            <img src={close} alt="Закрыть" className="popup__close" />
            <h3 className="popup__title">Новое место</h3>
            <form className="popup__form" name="new" noValidate>
              <input type="text" name="name" className="popup__input popup__input_type_name" minLength="1" placeholder="Название" required />
              <span id="error-name" className="error-massage error-massage_hidden"></span>
              <input type="text" name="link" className="popup__input popup__input_type_link-url" minLength="1"  placeholder="Ссылка на картинку" required />
              <span id="error-link" className="error-massage error-massage_hidden"></span>
              <button id="popup__button" className="button popup__button">+</button>
            </form>
          </div>
        </div>

        {/* Попап редактирования профиля */}
        <div className="popup__profile popup">
          <div className="popup__content">
            <img src={close} alt="Закрыть" className="popup__close" />
            <h3 className="popup__title">Редактировать профиль</h3>
            <form id="profile__form" className="popup__form" name="new" noValidate>
              <input id="profile__name" type="text" name="name" className="popup__input popup__input_type_name" placeholder="Имя" />
              <span id="error-name" className="error-massage error-massage_hidden"></span>
              <input id="profile__link" type="text" name="link" className="popup__input popup__input_type_link-url" placeholder="О себе" />
              <span id="error-link" className="error-massage error-massage_hidden"></span>
              <button id="profile__button" className="button popup__button">Сохранить</button>
            </form>
          </div>
        </div>

        {/* Открытая картинка */}
        <div className="popup popup__image-container">
          <div className="popup__image">
            <img className="popup__bg-image" />
            <img src={close} alt="Закрыть" className="popup__close popup__close_image" />
          </div>
        </div>

      </div>      

    </body>
  );
}

export default App;