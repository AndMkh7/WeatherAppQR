import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ScanButton from './components/ScanningButton';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Lets try to know a weather in your city!</Text>
      <View>
        <ScanButton/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
