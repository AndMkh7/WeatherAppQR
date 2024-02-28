import React, { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { weatherConditions } from "../../utils/Conditions";
import { GlobalDataContext } from "../../context";
import styles from "./style";

const WeatherDisplayComponent = ({
  temperature,
  weatherCondition,
  city,
  handleAdd,
}) => {
  const { citiesList } = useContext(GlobalDataContext);
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
        <Text style={styles.cityName}>{city}</Text>
      </View>
      {!citiesList.includes(city) && (
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => handleAdd(city)}
          >
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

export default WeatherDisplayComponent;
