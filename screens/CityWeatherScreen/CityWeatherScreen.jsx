import React, { useContext, useEffect, useState, memo } from "react";
import { View } from "react-native";
import LoadingComponent from "./LoadingComponent";
import WeatherDisplayComponent from "./WeatherDisplayComponent";
import ErrorComponent from "./ErrorComponent";
import { GlobalDataContext } from "../../context";
import { API_KEY } from "../../utils/APIKey";
import styles from "./style";

const CityWeatherScreen = ({ route }) => {
  const { cityName } = route.params;
  const {
    setTemperature,
    weatherCondition,
    setWeatherCondition,
    error,
    setError,
    setCityFromAPI,
  } = useContext(GlobalDataContext);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (cityName) {
      const fetchData = async () => {
        try {
          const URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`;
          setIsLoading(true);
          const response = await fetch(URL);
          const json = await response.json();
          setTemperature(json.main.temp);
          setWeatherCondition(json.weather[0].main);
          setCityFromAPI(json.name);
          setTimeout(() => {
            setIsLoading(false);
          }, 1500);
        } catch (error) {
          setError("Error fetching weather data");
          setIsLoading(false);
        }
      };
      fetchData();
    }
  }, [cityName]);

  return (
    <View style={styles.weatherContainer}>
      {isLoading ? (
        <LoadingComponent />
      ) : weatherCondition ? (
        <WeatherDisplayComponent
          weatherCondition={weatherCondition}
          cityName={cityName}
          setIsLoading={setIsLoading}
        />
      ) : (
        <ErrorComponent />
      )}
    </View>
  );
};

export default memo(CityWeatherScreen);
