import React, { useContext, useEffect } from "react";
import { View } from "react-native";
import LoadingComponent from "./LoadingComponent";
import WeatherDisplayComponent from "./WeatherDisplayComponent";
import ErrorComponent from "./ErrorComponent";
import { GlobalDataContext } from "../../context";
import { useNavigation } from "@react-navigation/native";
import { API_KEY } from "../../utils/APIKey";
import styles from "./style";

const CityWeatherScreen = ({ route }) => {
  const { cityName } = route.params;
  const {
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
    citiesList,
    setCitiesList,
  } = useContext(GlobalDataContext);
  const navigation = useNavigation();
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
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

    if (cityName) {
      fetchData();
    }
  }, [cityName]);
  const handleAdd = () => {
    if (!citiesList.includes(cityFromAPI)) {
      setCitiesList([...citiesList, cityFromAPI]);
    }
    navigation.navigate("CitiesList");
  };

  return (
    <View style={styles.weatherContainer}>
      {isLoading ? (
        <LoadingComponent />
      ) : weatherCondition ? (
        <WeatherDisplayComponent
          temperature={temperature}
          weatherCondition={weatherCondition}
          city={cityFromAPI}
          handleAdd={handleAdd}
        />
      ) : (
        <ErrorComponent error={error} />
      )}
    </View>
  );
};

export default CityWeatherScreen;
