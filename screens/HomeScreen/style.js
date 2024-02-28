import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 30,
    color: "#295265",
    marginBottom: 25,
    fontWeight: "700",
  },
  image: {
    width: 50,
    height: 50,
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
  background: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  subtitle: {
    fontSize: 14,
    color: "#295265",
    marginTop: 15,
    fontWeight: "500",
  },
});

export default styles;
