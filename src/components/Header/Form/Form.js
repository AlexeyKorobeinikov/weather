import { useContext, useEffect, useState } from "react";
import { CityListContext } from "../../../contexts/CityListContexts"

const Form = () => {
  const [name, setName] = useState("");
  const Cityes = ['Анапа', 'Белгород', 'Волгоград', 'Вологда', 'Владивосток', 'Екатеринбург', 'Ижевск', 'Краснодар', 'Красноярск', 'Липецк', 'Москва', 'Мурманск', 'Новосибирск', 'Норильск', 'Омск', 'Пенза', 'Ростов', 'Рязань', 'Санкт-Петербург', 'Саратов', 'Смоленск', 'Тамбов', 'Томск', 'Тюмень', 'Ульяновск', 'Уфа', 'Хабаровск',];
  const { createCity } = useContext(CityListContext);

   
  const handleChange = (e) => setName(e.target.value);
    useEffect(() => {
        const checkCity = Cityes.find((cityName) => cityName.toUpperCase() === name.trim().toUpperCase());
        if (checkCity) {
            setName('');
            createCity(name);
        }
        //fetch('https://api.gismeteo.net/v2/weather/current/4368/?lang=ru')
        //.then(response => response.json())
    }, [name])

  return (
    <div>
    <form>
      <br />  
        <label>Введите название города:</label>  
        <input type="text" onChange={handleChange} />
        </form>
            <br />  
          </div>
  );
};

export default Form;
