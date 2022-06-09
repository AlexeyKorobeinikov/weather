import { createContext } from "react";
import useCityes from "../hooks/useCityes";

const CityListContext = createContext();

const CityListProvider = ({ children }) => {
  const { cityes, createCity, deleteCity } =
    useCityes();

  return (
    <CityListContext.Provider
      value={{ cityes, createCity, deleteCity }}>
      {children}
    </CityListContext.Provider>
  );
};

export default CityListProvider;

export { CityListContext };