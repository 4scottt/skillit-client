import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Button from './components/Button';
import ImageViewer from './components/ImageViewer';

const PlaceholderImage = require('./assets/images/background-image.png');

export default function App() {
  return (
    <View style={styles.container}>

      {/* <Text style={{ color: 'yellow' }}>Open up App.js to start HACKING on your app!</Text> */}

      <View style={styles.imageContainer}>
        <ImageViewer placeholderImageSource={PlaceholderImage} />
      </View>

      <View style={styles.footerContainer} >
        <Button label="Sign Up" />
        <Button label="Log In" />
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
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
});
