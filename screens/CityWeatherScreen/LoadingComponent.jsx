import React from "react";
import { View, Text, ActivityIndicator } from "react-native";
import styles from "./style";

const LoadingComponent = () => {
  return (
    <View style={styles.loading}>
      <Text>Loading ... </Text>
      <ActivityIndicator />
    </View>
  );
};

export default LoadingComponent;
