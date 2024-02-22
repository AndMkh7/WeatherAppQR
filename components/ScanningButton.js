import {StyleSheet,TouchableOpacity, Text} from 'react-native';

const ScanButton = () => {
  return (
    <TouchableOpacity style={styles.startButton} onPress={() => {alert('StartScan')}}>
      <Text style={styles.textStyle}>StartScan</Text>
    </TouchableOpacity>                                                                     
  );
};

const styles = StyleSheet.create({
          startButton: {
            backgroundColor: 'white',
            borderRadius: 8,
            padding: 10,
            margin: 10,
            borderWidth: 1,
            borderColor: 'black',
          },
          textStyle:{
                    fontSize: 14,
                    color: 'blue',
          }
        });

export default ScanButton;