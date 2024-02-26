
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './../screens/HomeScreen/HomeScreen';
import ScannerScreen from './../screens/ScannerScreen/ScannerScreen';
import SubmitCityScreen from './../screens/SubmitCityScreen/SubmitCityScreen';
import CityWeatherScreen from './../screens/CityWeatherScreen/CityWeatherScreen';

const Stack = createStackNavigator();

export default function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ScannerScreen" component={ScannerScreen} /> 
      <Stack.Screen name="SubmitCityScreen" component={SubmitCityScreen} />   
      <Stack.Screen name="CityWeatherScreen" component={CityWeatherScreen} />  
    </Stack.Navigator>
  );
}