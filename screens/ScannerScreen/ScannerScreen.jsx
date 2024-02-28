import React, { useEffect, useContext } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Camera } from "expo-camera";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { GlobalDataContext } from "../../context";
import styles from "./style";

export default function ScannerScreen() {
  const { hasPermission, setHasPermission, scanned, setScanned, setCityName } =
    useContext(GlobalDataContext);
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  useEffect(() => {
    const getCameraPermissions = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getCameraPermissions();
  }, []);

  useEffect(() => {
    if (isFocused) {
      setScanned(false);
      setCityName(null);
    }
  }, [isFocused]);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setCityName(data);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    navigation.navigate({
      name: "SubmitCity",
      params: { cityName: data },
    });
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <Camera
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        barCodeScannerSettings={{
          barCodeTypes: [BarCodeScanner.Constants.BarCodeType.qr],
        }}
        style={StyleSheet.absoluteFillObject}
      />
    </View>
  );
}
