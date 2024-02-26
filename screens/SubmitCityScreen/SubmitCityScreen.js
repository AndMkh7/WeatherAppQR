import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from "@react-navigation/native";

export default function WeatherScreen({route}) {
          const { cityName } = route.params;
          const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Do you really want to know the weather in the {cityName} city ?</Text>
      <View style={styles.buttonsBox}>
        <TouchableOpacity style={styles.submitBox} onPress={() => navigation.navigate("CityWeatherScreen")}>
          <Text style={styles.yesTxt}>
            Yes 
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cancelBox} onPress={() => navigation.navigate("HomeScreen")}>
          <Text style={styles.noTxt}>
            No
          </Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonsBox: {
    flexDirection: 'row',
    marginTop:15,
    gap:40
  },
  cancelBox: {
    borderWidth:2,
    borderRadius:3,
    borderColor:'red',
    padding:5
  },
  submitBox: {
    borderWidth:2,
    borderRadius:3,
    borderColor:'green',
    padding:5
  },
  yesTxt:{
    color:'green'
  },
  noTxt:{
color:'red'
  }
});
