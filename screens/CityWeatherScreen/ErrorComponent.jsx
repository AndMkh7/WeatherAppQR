// ErrorComponent.js
import React from "react";
import { View, Text } from "react-native";
import styles from "./style";

const ErrorComponent = ({ error }) => {
  return (
    <View style={styles.loading}>
      <Text style={styles.  errorText}>{error}</Text>
    </View>
  );
};

export default ErrorComponent;
