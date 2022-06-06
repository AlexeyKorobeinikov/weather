import React, { useState } from 'react';

export default function App() {  
  const [name, setName] = useState('');
  const Cityes = ['Анапа', 'Белгород', 'Волгоград', 'Вологда', 'Владивосток', 'Екатеринбург', 'Ижевск', 'Краснодар', 'Красноярск', 'Липецк', 'Москва', 'Мурманск', 'Новосибирск', 'Норильск', 'Омск', 'Пенза', 'Ростов', 'Рязань', 'Санкт-Петербург', 'Саратов', 'Смоленск', 'Тамбов', 'Томск', 'Тюмень', 'Ульяновск', 'Уфа', 'Хабаровск',];

    function handleChange(e)
    {
        for (let i=0; i < Cityes.length; ++i)
        {
            if (e.target.value == Cityes[i])
            {
                setName(e.target.value);
            }
        }
    }

  return (  
    <div>  
      <form>
        <br />  
        <label>Введите название города:</label>  
        <input type="text" onChange={handleChange} />
      </form>  
      <br />  
           Город: {name}  
    </div>  
  );  
} 