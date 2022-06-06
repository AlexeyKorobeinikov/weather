import { useEffect, useState } from "react";

const LSCityesKey = "cityes";

const useCityes = () => {
  const [cityes, setCityes] = useState([]);

  const createCity = (text) => {
    const newCity = {
      id: Date.now(),
      text,
        };

    setCityes((prev) => [...prev, newCity]);
  };

  
  const deleteCity = (id) => {
    setCityes((prev) => prev.filter((city) => city.id !== id));
  };

  
  useEffect(() => {
    const dataFromLS = localStorage.getItem(LSCityesKey);
    if (dataFromLS) {
      setCityes(JSON.parse(dataFromLS));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LSCityesKey, JSON.stringify(cityes));
  }, [cityes]);


	return {
		cityes,
		createCity,
		deleteCity,
			}
};

export default useCityes
