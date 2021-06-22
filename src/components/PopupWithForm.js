import React from 'react';
import close from '../images/close.svg';

function PopupWithForm(props) {
    return (
        <div className={`popup__${props.name} popup ${props.isOpen}`}>
          <div className="popup__content">
            <img src={close} alt="Закрыть" className="popup__close" onClick={props.close}/>
            <h3 className="popup__title">{props.title}</h3>
            <form className="popup__form" name="new" noValidate>
              <input type="text" name="name" className="popup__input popup__input_type_name" minLength="1" placeholder={props.input.name} required />
              <span id="error-name" className="error-massage error-massage_hidden"></span>
              <input type="text" name="link" className="popup__input popup__input_type_link-url" minLength="1"  placeholder={props.input.link} required />
              <span id="error-link" className="error-massage error-massage_hidden"></span>
              <button id="popup__button" className="button popup__button">{props.button}</button>
            </form>
          </div>
        </div>
    )
}

export default PopupWithForm;