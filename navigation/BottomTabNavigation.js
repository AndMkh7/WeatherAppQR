import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ScannerScreen from "../screens/ScannerScreen/ScannerScreen";
import CitiesListScreen from "../screens/CitiesListScreen/CitiesLIstScreen";
import Ionicons from "@expo/vector-icons/Ionicons";
import HomeStack from "./HomeStack";

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
          } else if (route.name === "CitiesList") {
            iconName = focused ? "list-sharp" : "list-outline";
          }
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
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Scanner"
        component={ScannerScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="CitiesList"
        component={CitiesListScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}
