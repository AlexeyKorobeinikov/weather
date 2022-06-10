import { useEffect, useState } from "react";

const LSCityesKey = "cityes";

const getLocalStorageInfo = () => {
  try {
    return JSON.parse(localStorage.getItem(LSCityesKey));
      } catch {
        return [];
      }
}

const setLocalStorageInfo = (cityes) => localStorage.setItem(LSCityesKey, JSON.stringify(cityes));

const useCityes = () => {
  const [cityes, setCityes] = useState(getLocalStorageInfo() || []);

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
        setLocalStorageInfo(cityes);
  }, [cityes]);

	return {
		cityes,
		createCity,
		deleteCity,
			}
};

export default useCityes
