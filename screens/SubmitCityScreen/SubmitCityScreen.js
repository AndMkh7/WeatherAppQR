import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import styles from "./style";
export default function WeatherScreen({ route }) {
  const { cityName } = route.params;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text>
          Do you really want to know the weather in the {cityName} city ?
        </Text>
        <View style={styles.buttonsBox}>
          <TouchableOpacity
            style={styles.submitBox}
            onPress={() =>
              navigation.navigate({
                name: "CityWeather",
                params: { cityName: cityName },
              })
            }
          >
            <Text style={styles.yesTxt}>Yes</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.cancelBox}
            onPress={() => navigation.navigate("HomeScreen")}
          >
            <Text style={styles.noTxt}>No</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
