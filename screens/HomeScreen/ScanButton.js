import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ScanButton = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.startButton} onPress={() => navigation.navigate("ScannerScreen")}>
      <Text style={styles.textStyle}>StartScan</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  startButton: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: "black",
  },
  textStyle: {
    fontSize: 14,
    color: "blue",
  },
});

export default ScanButton;
