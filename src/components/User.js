import React from 'react';

function User(props) {

    return (
        // {/* Профиль */}
        <div className="profile root__section">
          <div className="user-info">
            <div className="user-info__photo"></div>
            <div className="user-info__data">
              <h1 className="user-info__name">Jaques Causteau</h1>
              <p className="user-info__job">Sailor, Researcher</p>
              <button className="button edit__button" onClick={props.onEditProfile}>Edit</button>
            </div>
            <button className="button user-info__button" onClick={props.onAddPlace}>+</button>      
          </div>
        </div>
    ) 
}

export default User;