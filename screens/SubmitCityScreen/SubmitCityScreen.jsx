import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import styles from "./style";
const SubmitCityScreen = ({ route }) => {
  const { cityName } = route.params;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text numberOfLines={2} ellipsizeMode="tail">
          Are you sure you want to know the weather in the {cityName} city?
        </Text>
        <View style={styles.buttonsBox}>
          <TouchableOpacity
            style={styles.submitBox}
            onPress={() =>
              navigation.navigate(
                {
                  name: "CityWeather",
                  params: { cityName: cityName },
                },
                { cityName: cityName, key: cityName }
              )
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
};

export default SubmitCityScreen;
