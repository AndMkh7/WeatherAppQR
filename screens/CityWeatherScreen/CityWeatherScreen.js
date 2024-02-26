import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { weatherConditions } from '../../utils/Conditions';
import { API_KEY } from "../../utils/APIKey";
import styles from "./style";

const CityWeatherScreen = ({ route }) => {
  const { cityName } = route.params;
  const [isLoading, setIsLoading] = useState(true);
  const [temperature, setTemperature] = useState(0);
  const [weatherCondition, setWeatherCondition] = useState(null);
  const [error, setError] = useState(null);
  const[city,setCity]=useState('')
const URL =`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(URL);
        const json = await response.json();
        setTemperature(json.main.temp);
        setWeatherCondition(json.weather[0].main);
        setCity(json.name);
        setTimeout(() => {
          setIsLoading(false);
        }, 1500);
      } catch (error) {
        setError('Error fetching weather data');
        setIsLoading(false);
      }
    };

    if (cityName) {
      fetchData();
    }
  }, [cityName]);

  if (isLoading) {
    return (
      <View style={styles.loading}>
        <Text>Loading ... </Text>
        <ActivityIndicator />
      </View>
    );
  } else if (weatherCondition != null) {
    return (
      <View
        style={[
          styles.weatherContainer,
          { backgroundColor: weatherConditions[weatherCondition].color }
        ]}
      >
        <View style={styles.headerContainer}>
          <MaterialCommunityIcons
            size={72}
            name={weatherConditions[weatherCondition].icon}
            color={'#fff'}
          />
          <Text style={styles.tempText}>{Math.round(temperature - 273.15)}˚</Text>
        </View>
        <View style={styles.cityNameContainer}>
          <Text style={styles.cityName}>
            {city}
          </Text>
        </View>
        <View style={styles.bodyContainer}>
          <Text style={styles.title}>{weatherConditions[weatherCondition].title}</Text>
          <Text style={styles.subtitle}>
            {weatherConditions[weatherCondition].subtitle}
          </Text>
        </View>
      </View>
    );
  } else {
    return (
      <View style={styles.loading}>
        <Text>{error}</Text>
      </View>
    );
  }
};

export default CityWeatherScreen;
