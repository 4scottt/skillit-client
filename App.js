import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as imagePicker from 'expo-image-picker';

import Button from './components/Button';
import ImageViewer from './components/ImageViewer';

const PlaceholderImage = require('./assets/images/background-image.png');

export default function App() {
  const [selectedImage, setSelectedImage] = useState(null);

  const pickImageAsync = async () => {
    let result = await imagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if( !result.canceled ) {
      setSelectedImage(result.assets[0].uri);
    } else {
      alert('You did not select an image');
    }
  };

  return (
    <View style={styles.container}>

      {/* <Text style={{ color: 'yellow' }}>Open up App.js to start HACKING on your app!</Text> */}

      <View style={styles.imageContainer}>
        <ImageViewer 
          placeholderImageSource={PlaceholderImage}
          selectedImage={selectedImage}
          />
      </View>

      <View style={styles.footerContainer} >
        <Button theme="primary" label="Test Button" onPress={pickImageAsync} />
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
