import { useState, useEffect } from "react";

const API_KEY = "74f32a43d97e0f1f6a3244566f899e69";
const URL = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&lang=ru&units=metric`;

async function getWeather(name) {
  try {
    const response = await fetch(`${URL}&q=${name}`);
    const data = await response.json();

    return data;
  } catch (e) {
    return e;
  }
}

export function useWeather(cityName) {
  const [weatherCity, setWeatherCity] = useState({});

  useEffect(() => {
    
      getWeather(cityName).then((data) => setWeatherCity(data));
      
      const intevalId = setInterval(() => { 
        getWeather(cityName).then((data) => setWeatherCity(data));}, 60000);
   
        return () => clearInterval(intevalId); 
    
  }, [cityName, setWeatherCity]);
  
    return weatherCity; 
}