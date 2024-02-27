import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTabNavigation from "./BottomTabNavigation";
import SubmitCityScreen from "./../screens/SubmitCityScreen/SubmitCityScreen";

const Stack = createStackNavigator();

export default function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BottomTabNavigation"
        component={BottomTabNavigation}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SubmitCity"
        component={SubmitCityScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
