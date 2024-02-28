import { createContext, useState } from "react";

export const GlobalDataContext = createContext(undefined);

function GlobalData({ children }) {
  const [isLoading, setIsLoading] = useState(true);
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
    "Yerevan",
    "Madrid",
    "Moscow",
    "Praha",
    "Rome",
    "Tbillisi",
    "Berlin",
    "Paris",
    "Tehran",
    "Athens",
    "Lissabon",
    "Montebello",
  ]);
  return (
    <GlobalDataContext.Provider
      value={{
        isLoading,
        setIsLoading,
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
