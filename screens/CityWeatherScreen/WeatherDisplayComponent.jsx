import React, { memo, useContext, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { weatherConditions } from "../../utils/Conditions";
import { GlobalDataContext } from "../../context";
import { useNavigation } from "@react-navigation/native";
import { API_KEY } from "../../utils/APIKey";
import styles from "./style";

const WeatherDisplayComponent = ({
  cityName,
  setIsLoading,
  weatherCondition,
}) => {
  const navigation = useNavigation();
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`;

  const {
    temperature,
    setTemperature,
    setWeatherCondition,
    setError,
    cityFromAPI,
    setCityFromAPI,
    citiesList,
    setCitiesList,
  } = useContext(GlobalDataContext);

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
    <View
      style={[
        styles.weatherContainer,
        { backgroundColor: weatherConditions[weatherCondition].color },
      ]}
    >
      <View style={styles.headerContainer}>
        <MaterialCommunityIcons
          size={72}
          name={weatherConditions[weatherCondition].icon}
          color={"#fff"}
        />
        <Text style={styles.tempText}>{Math.round(temperature - 273.15)}˚</Text>
      </View>
      <View style={styles.cityNameContainer}>
        <Text style={styles.cityName}>{cityFromAPI}</Text>
      </View>
      {!citiesList.includes(cityFromAPI) && (
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.addButton} onPress={handleAdd}>
            <Text style={styles.buttonText}>Add City</Text>
          </TouchableOpacity>
        </View>
      )}
      <View style={styles.bodyContainer}>
        <Text style={styles.title}>
          {weatherConditions[weatherCondition].title}
        </Text>
        <Text style={styles.subtitle}>
          {weatherConditions[weatherCondition].subtitle}
        </Text>
      </View>
    </View>
  );
};

export default memo(WeatherDisplayComponent);
