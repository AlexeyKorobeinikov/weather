import React, { useState } from 'react';  
  
export default function App() {  
  const [name, setName] = useState('');  
  const Cityes = ['Анапа', 'Белгород', 'Волгоград', 'Вологда', 'Владивосток', 'Екатеринбург', 'Ижевск', 'Краснодар', 'Красноярск', 'Липецк', 'Москва', 'Мурманск', 'Новосибирск', 'Норильск', 'Омск', 'Пенза', 'Ростов', 'Рязань', 'Санкт-Петербург', 'Саратов', 'Смоленск', 'Тамбов', 'Томск', 'Тюмень', 'Ульяновск', 'Уфа', 'Хабаровск',];
  //for (let i=0, i < Cityes.length, i++) {
    //if {name}==Cityes[i];
  return (  
    <div>  
      <form>
        <br />  
        <label>Введите название города:</label>  
        <input type="text" onChange={(e) => setName(e.target.value)} />  
      </form>  
      <br />  
           Город: {name}  
    </div>  
  );  
} 