import { StatusBar } from "expo-status-bar";
import { Text, View, ImageBackground, Image } from "react-native";
import ScanButton from "./ScanButton.jsx";
import background from "../../assets/images/background.jpg";
import styles from "./style.js";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ImageBackground
        source={background}
        style={styles.background}
        resizeMode="cover"
      >
        <Text style={styles.title}>WeatherAppQR</Text>
        <Image
          source={require("../../assets/images/appqr.png")}
          style={styles.image}
        />

        <Text style={styles.subtitle}>
          Lets try to know a weather in your city!!!
        </Text>
        <View>
          <ScanButton />
        </View>
      </ImageBackground>
    </View>
  );
}
