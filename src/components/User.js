import React from 'react';
import api from '../utils/Api';

function User(props) {
  const [userName, setUserName] = React.useState("Jaques Causteau");
  const [userDiscription, setUserDiscription] = React.useState("Sailor, Researcher")

  React.useEffect(() => {
    api.getProfile()
      .then((res) => {
        setUserName(res.name)
        setUserDiscription(res.about)
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`)
      })
  }, [userName, userDiscription]);

    return (
        // {/* Профиль */}
        <div className="profile root__section">
          <div className="user-info">
            <div className="user-info__photo"></div>
            <div className="user-info__data">
              <h1 className="user-info__name" >{userName}</h1>
              <p className="user-info__job">{userDiscription}</p>
              <button className="button edit__button" onClick={props.onEditProfile}>Edit</button>
            </div>
            <button className="button user-info__button" onClick={props.onAddPlace}>+</button>      
          </div>
        </div>
    ) 
}

export default User;