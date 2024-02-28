import { TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./style";

const ScanButton = () => {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate("Scanner");
  };
  return (
    <TouchableOpacity style={styles.startButton} onPress={handlePress}>
      <Text style={styles.textStyle}>StartScan</Text>
    </TouchableOpacity>
  );
};

export default ScanButton;
