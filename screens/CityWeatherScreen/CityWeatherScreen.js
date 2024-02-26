import { StyleSheet,  View, Text } from 'react-native';


export default function WeatherScreen({}) {

  return (
    <View style={styles.container}>
          <Text>
                    Here We must see a weather in our city
          </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});