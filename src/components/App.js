import React from 'react';

import close from '../images/close.svg';

// Components
import Header from './Header';
import PopupWithForm from './PopupWithForm';
import User from './User';
import Card from './Card';
import ImagePopup from './ImagePopup';
import api from '../utils/Api';

function App() {

  const [isEditProfileOpen, setIsEditProfileOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [cards, setCards] = React.useState([]);
  const [selectedCard, setSelectedCard] = React.useState(false);

  function handleEditProfile() {
    setIsEditProfileOpen(true)
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true)
  }

  function handleCardClick() {
    setSelectedCard(true)
  }

  function closeAllPopups() {
    setIsEditProfileOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(false)
  }

  React.useEffect(() => {
    api.getCards()
    .then((res) => {
      setCards(res)
    })
    .catch((err) => {
      console.log(err)
    })
  }, []);

  return (
    <body>
      <div className="root">
        <Header />
        <User onEditProfile={handleEditProfile} onAddPlace={handleAddPlaceClick}/>
        <ImagePopup 
          card={selectedCard && 'popup_is-opened'} 
          close={closeAllPopups} 
          onClose={!selectedCard && ''}/>

        {/* Add image popup */}
        <PopupWithForm 
          name="info" 
          title="Новое место" 
          input={{name: "Название", link: "Ссылка на картинку"}} 
          button="+" 
          isOpen={isAddPlacePopupOpen && 'popup_is-opened'} 
          close={closeAllPopups}
          onClose={!isAddPlacePopupOpen && ''}/>
        {/* Edit profile popup */}
        <PopupWithForm 
          name="profile" 
          title="Редактировать профиль" 
          input={{name: "Имя", link: "О себе"}} 
          button="Сохранить" 
          isOpen={isEditProfileOpen && 'popup_is-opened'}
          close={closeAllPopups}
          onClose={!isEditProfileOpen && ''}/>

        {/* Card Container */}
        <div className="places-list root__section">
          {cards.map((card) => {
              return (
                <Card name={card.name} link={card.link} openCard={handleCardClick}/>
              )
          })}
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