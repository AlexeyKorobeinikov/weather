import { useContext, useState } from "react";
import { CityListContext } from "../../../contexts/CityListContexts"

const Form = () => {
  const [name, setName] = useState("");
  const Cityes = ['Анапа', 'Белгород', 'Волгоград', 'Вологда', 'Владивосток', 'Екатеринбург', 'Ижевск', 'Краснодар', 'Красноярск', 'Липецк', 'Москва', 'Мурманск', 'Новосибирск', 'Норильск', 'Омск', 'Пенза', 'Ростов', 'Рязань', 'Санкт-Петербург', 'Саратов', 'Смоленск', 'Тамбов', 'Томск', 'Тюмень', 'Ульяновск', 'Уфа', 'Хабаровск',];
  const { createCity } = useContext(CityListContext);

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

  
    const nameTrim = name.trim();
    if (nameTrim) {
      createCity(nameTrim);
      setName("");
    }


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
