import { useContext, useEffect, useState } from "react";
import { CityListContext } from "../../../contexts/CityListContexts"

const Form = () => {
  const [name, setName] = useState("");
  const Cityes = ['Анапа', 'Белгород', 'Волгоград', 'Вологда', 'Владивосток', 'Екатеринбург', 'Ижевск', 'Краснодар', 'Красноярск', 'Липецк', 'Москва', 'Мурманск', 'Новосибирск', 'Норильск', 'Омск', 'Пенза', 'Ростов', 'Рязань', 'Санкт-Петербург', 'Саратов', 'Смоленск', 'Сочи', 'Тамбов', 'Томск', 'Тюмень', 'Ульяновск', 'Уфа', 'Хабаровск','Чита'];
  const { createCity } = useContext(CityListContext);

     
  const handleChange = (e) => setName(e.target.value);

    useEffect(() => {
        const checkCity = Cityes.find((cityName) => cityName.toUpperCase() === name.trim().toUpperCase());
        if (checkCity) {
            setName('');
            createCity(name);
                    }
             }, [name])

  return (
    <div>
          <br />  
        <label>Введите название города:</label>  
        <input type="text" value={name} onChange={handleChange} />
          <br />  
     </div>
  );
};

export default Form;
