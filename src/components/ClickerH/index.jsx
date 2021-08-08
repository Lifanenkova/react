import React, { useState, useEffect } from 'react';

function ClickerH () {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount(clickCount + 1);
  };

  useEffect(() => {
    //функция вызывается после каждого рендера
    document.body.addEventListener('click', handleClick);
    console.log('add EventListener :>> ');
    return () => {
      //функция для очищения предыдущего эффекта
      document.body.removeEventListener('click', handleClick);
      console.log('remove EventListener :>> ');
    };
  });

  return <div>{clickCount}</div>;
}

export default ClickerH;

//побочные эффекты:
//1. Подгрузка данных, обращение к ДОМ (после рендера)
//2. обработчики событий внешние, таймауты,интервалы
