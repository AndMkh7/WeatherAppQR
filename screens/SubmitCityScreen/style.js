import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",

  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
  },
  buttonsBox: {
    flexDirection: "row",
    marginTop: 15,
    gap: 40,
  },
  cancelBox: {
    borderWidth: 2,
    borderRadius: 3,
    borderColor: "red",
    padding: 5,
  },
  submitBox: {
    borderWidth: 2,
    borderRadius: 3,
    borderColor: "green",
    padding: 5,
  },
  yesTxt: {
    color: "green",
  },
  noTxt: {
    color: "red",
  },
});

export default styles;
