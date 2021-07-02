import React from 'react';

function Card(props) {
  function handleClick() {
    props.onCardClick(props.link);
  } 

    return (
        <div className="place-card">
            <div className="place-card__image" style={{ backgroundImage: `url(${props.link})` }} dataurl={`${props.link}`} alt='Здесь должна быть картинка' onClick={handleClick}>
              <button className="place-card__delete-icon"></button>
            </div>
            <div className="place-card__description">
              <h3 className="place-card__name">{props.name}</h3>
              <button className="place-card__like-icon"></button>
            </div>
          </div> 
    )
}

export default Card;