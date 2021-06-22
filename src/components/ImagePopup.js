import React from 'react';
import close from '../images/close.svg';

function ImagePopup() {
    return (
        <div className="popup popup__image-container">
          <div className="popup__image">
            <img className="popup__bg-image" />
            <img src={close} alt="Закрыть" className="popup__close popup__close_image" />
          </div>
        </div>
    )
}

export default ImagePopup;