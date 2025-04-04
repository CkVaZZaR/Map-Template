import React from "react";
import "./Profile.css";

export default function Profile() {
  return (
    <div className='profile'>
      <div className='profile-avatar-container'>
        <img
          src={"https://thispersondoesnotexist.com/"}
          alt='Аватар'
          className='profile-avatar'
        />
      </div>

      <div className='profile-name'>
        <h1>Анна, 25</h1>
      </div>

      <div className='profile-menu'>
        <div className='profile-info'>
          <p className='profile-bio'>
            {
              "Путешественница и фотограф-любитель. Объездила 15 стран, ищу партнера для новых приключений. Люблю горные походы, этническую кухню и документальное кино. Мечтаю написать книгу о своих путешествиях."
            }
          </p>
        </div>
      </div>
    </div>
  );
}
