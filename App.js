import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

const PlaceholderImage = require('./assets/images/background-image.png');

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text style={{ color: 'yellow' }}>Open up App.js to start HACKING on your app!</Text> */}
      <View style={styles.imageContainer}>
        <Image source={PlaceholderImage} style={styles.image} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003b6f', // tardis blue
    alignItems: 'center',
    // justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
    // backgroundColor: 'red',
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
