import { createContext, useState } from "react";

export const GlobalDataContext = createContext(undefined);

function GlobalData({ children }) {
  const [temperature, setTemperature] = useState(0);
  const [weatherCondition, setWeatherCondition] = useState(null);
  const [error, setError] = useState(null);
  const [cityFromAPI, setCityFromAPI] = useState(null);
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [cityName, setCityName] = useState(null);
  const [citiesList, setCitiesList] = useState([
    "Vanadzor",
    "Batumi",
    "Vienna",
    "Madrid",
    "Moscow",
    "Prague",
  ]);
  return (
    <GlobalDataContext.Provider
      value={{
        temperature,
        setTemperature,
        weatherCondition,
        setWeatherCondition,
        error,
        setError,
        cityFromAPI,
        setCityFromAPI,
        hasPermission,
        setHasPermission,
        scanned,
        setScanned,
        cityName,
        setCityName,
        citiesList,
        setCitiesList,
      }}
    >
      {typeof children === "function" ? children() : children}
    </GlobalDataContext.Provider>
  );
}

export default GlobalData;
