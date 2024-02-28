import React from "react";
import { GlobalDataContext } from "../../context";
import { View, Text } from "react-native";
import styles from "./style";

const ErrorComponent = () => {
  const { error } = useContext(GlobalDataContext);
  return (
    <View style={styles.loading}>
      <Text style={styles.errorText}>{error}</Text>
    </View>
  );
};

export default ErrorComponent;
