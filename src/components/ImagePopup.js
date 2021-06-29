import React from 'react';
import close from '../images/close.svg';

function ImagePopup(props) {
    return (
        <div className={`popup popup__image-container ${props.card}`}>
          <div className="popup__image">
            <img className="popup__bg-image" />
            <img src={close} alt="Закрыть" className="popup__close popup__close_image" onClick={props.close}/>
          </div>
        </div>
    )
}

export default ImagePopup;