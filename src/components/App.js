import React from 'react';

import close from '../images/close.svg';

// Components
import Header from './Header';
import PopupWithForm from './PopupWithForm';
import User from './User';

function App() {

  const [isEditProfileOpen, setIsEditProfileOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false)

  function handleEditProfile() {
    setIsEditProfileOpen(true)
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true)
  }

  function closeAllPopups() {
    setIsEditProfileOpen(false);
    setIsAddPlacePopupOpen(false);
  }

  return (
    <body>
      <div className="root">
        <Header />
        <User onEditProfile={handleEditProfile} onAddPlace={handleAddPlaceClick}/>
{/* Edit profile popup */}
        <PopupWithForm 
        name="info" 
        title="Новое место" 
        input={{name: "Название", link: "Ссылка на картинку"}} 
        button="+" 
        isOpen={isAddPlacePopupOpen && 'popup_is-opened'} 
        close={closeAllPopups}
        onClose={!isAddPlacePopupOpen && ''}/>

        <PopupWithForm 
        name="profile" 
        title="Редактировать профиль" 
        input={{name: "Имя", link: "О себе"}} 
        button="Сохранить" 
        isOpen={isEditProfileOpen && 'popup_is-opened'}
        close={closeAllPopups}
        onClose={!isEditProfileOpen && ''}/>

        <div className="places-list root__section"></div> {/* Card Container */}\


        

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