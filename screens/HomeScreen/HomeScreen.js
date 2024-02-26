import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import ScanButton from "./ScanButton.js";
import styles from "./style";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Lets try to know a weather in your city!!!</Text>
      <View>
        <ScanButton />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
