import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SubmitCityScreen from "./../screens/SubmitCityScreen/SubmitCityScreen";
import CityWeatherScreen from "../screens/CityWeatherScreen/CityWeatherScreen.jsx";
import HomeScreen from "../screens/HomeScreen/HomeScreen.jsx";
const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SubmitCity"
        component={SubmitCityScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CityWeather"
        component={CityWeatherScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
