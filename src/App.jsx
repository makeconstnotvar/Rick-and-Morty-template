import './App.css'
import { useState, useEffect } from 'react';

/*
Загрузить список персонажей с сервера https://rickandmortyapi.com/api/character
Вывести списком в столбик карточки с данными персонажей - картинка, имя, статус.
Сделать фильтр, который позволяет искать персонажа по имени и статусу.
*/

export default function App() {

  return (
    <main>
      <header />
      <div className='cards'>
        <div className='cards-title'>Персонажи</div>
        <div>Тут делаем фильтр</div>
        <div>Тут выводим список персонажей</div>
        <div>Тут делаем пейджер</div>
      </div>
    </main>
  )
}
