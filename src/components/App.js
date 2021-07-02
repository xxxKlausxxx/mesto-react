import React from 'react';

// Components
import Header from './Header';
import PopupWithForm from './PopupWithForm';
import User from './User';
import Card from './Card';
import ImagePopup from './ImagePopup';
import api from '../utils/Api';

function App() {

  const [isEditProfileOpen, setIsEditProfileOpen] = React.useState('');
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState('');
  const [cards, setCards] = React.useState([]);
  const [selectedCard, setSelectedCard] = React.useState();
  const [cardOpen, setCardOpen] = React.useState('')

  function handleEditProfile() {
    setIsEditProfileOpen('popup_is-opened')
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen('popup_is-opened')
  }

  function handleCardClick(link) {
    setCardOpen('popup_is-opened')
    setSelectedCard(link)
  }

  function closeAllPopups() {
    setIsEditProfileOpen('');
    setIsAddPlacePopupOpen('');
    setCardOpen('')
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
          cardOpen={cardOpen}
          cardImg={selectedCard} 
          close={closeAllPopups} 
          onClose={selectedCard}/>

        {/* Add image popup */}
        <PopupWithForm 
          name="info" 
          title="Новое место" 
          input={{name: "Название", link: "Ссылка на картинку"}} 
          button="+" 
          isOpen={isAddPlacePopupOpen} 
          close={closeAllPopups}
          onClose={isAddPlacePopupOpen}/>
        {/* Edit profile popup */}
        <PopupWithForm 
          name="profile" 
          title="Редактировать профиль" 
          input={{name: "Имя", link: "О себе"}} 
          button="Сохранить" 
          isOpen={isEditProfileOpen}
          close={closeAllPopups}
          onClose={isEditProfileOpen}/>

        {/* Card Container */}
        <div className="places-list root__section">
          {cards.map((card) => {
              return (
                <Card name={card.name} link={card.link} onCardClick={handleCardClick}/>
              )
          })}
        </div> 

      </div>      

    </body>
  );
}

export default App;