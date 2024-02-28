import { StyleSheet } from "react-native";

const cityListStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  cityItemContainer: {
    flex: 1,
    width: 250,
    height: 50,
    backgroundColor: "blue",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  cityText: {
    fontSize: 20,
    color: "white",
  },
  background: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default cityListStyles;
