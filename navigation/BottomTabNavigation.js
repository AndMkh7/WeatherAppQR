import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./../screens/HomeScreen/HomeScreen";
import ScannerScreen from "./../screens/ScannerScreen/ScannerScreen";
import CityWeatherScreen from "./../screens/CityWeatherScreen/CityWeatherScreen";
import Ionicons from "@expo/vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

export default function BottomTabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home-sharp" : "home-outline";
          } else if (route.name === "Scanner") {
            iconName = focused ? "qr-code-sharp" : "qr-code-outline";
          } else if (route.name === "CityWeather") {
            iconName = focused ? "list-sharp" : "list-outline";
          }

          // You can return any component that you like here!
          return (
            <Ionicons
              name={iconName}
              size={20}
              color={focused ? "tomato" : "gray"}
            />
          );
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Scanner" component={ScannerScreen} />
      <Tab.Screen name="CityWeather" component={CityWeatherScreen} />
    </Tab.Navigator>
  );
}
