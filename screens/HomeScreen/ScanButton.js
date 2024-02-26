import { TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./style";
const ScanButton = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.startButton}
      onPress={() => navigation.navigate("ScannerScreen")}
    >
      <Text style={styles.textStyle}>StartScan</Text>
    </TouchableOpacity>
  );
};

export default ScanButton;
