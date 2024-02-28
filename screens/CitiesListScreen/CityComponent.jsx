import { memo, useContext, useCallback } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { GlobalDataContext } from "../../context";
import { useNavigation } from "@react-navigation/native";
import styles from "./style";

const CityComponent = ({ city }) => {
  const { setCityName } = useContext(GlobalDataContext);
  const navigation = useNavigation();
  const handleNavigation = useCallback(() => {
    navigation.navigate({
      name: "CityWeather",
      params: { cityName: city },
    });
    setCityName(city);
  }, [city, navigation, setCityName]);
  return (
    <View style={styles.cityItemContainer}>
      <TouchableOpacity style={styles.cityBox} onPress={handleNavigation}>
        <Text style={styles.cityText}> {city}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default memo(CityComponent);
