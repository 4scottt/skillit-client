import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as imagePicker from 'expo-image-picker';

import Button from './components/Button';
import ImageViewer from './components/ImageViewer';
import CircleButton from './components/CircleButton';
import IconButton from './components/IconButton';
import EmojiiPicker from './components/EmojiPicker';
import EmojiList from './components/EmojiList';
import EmojiSticker from './components/EmojiSticker';

const PlaceholderImage = require('./assets/images/background-image.png');

export default function App() {
  const [pickedEmoji, setPickedEmoji] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [showAppOptions, setShowAppOptions] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const pickImageAsync = async () => {
    let result = await imagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if( !result.canceled ) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert('You did not select an image');
    }
  };

  const onReset = () => {
    setShowAppOptions(false);
  };

  const onAddSticker = () => {
    setIsModalVisible(true);
  };

  const onModalClose = () => {
    setIsModalVisible(false);
  };

  const onSaveImageAsync = async () => {
    // todo
  };
  
  return (
    <View style={styles.container}>

      {/* <Text style={{ color: 'yellow' }}>Open up App.js to start HACKING on your app!</Text> */}

      <View style={styles.imageContainer}>
        <ImageViewer placeholderImageSource={PlaceholderImage} selectedImage={selectedImage} />
        { pickedEmoji !== null ? <EmojiSticker imageSize={40} stickerSource={pickedEmoji} /> : null }
      </View>

      { showAppOptions ? (
          <View style={styles.optionsContainer}>
            <View style={styles.optionsRow}>
              <IconButton icon="refresh" label="Reset" onPress={onReset} />
              <CircleButton onPress={onAddSticker} />
              <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync} />
            </View>
          </View>
      ) : (
          <View style={styles.footerContainer} >
            <Button theme="primary" label="Test Button" onPress={pickImageAsync} />
            <Button label="Use this photo" onPress={() => setShowAppOptions(true)} />
          </View>
      )}

      <EmojiiPicker isVisible={isModalVisible} onClose={onModalClose}>
        <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose} />
      </EmojiiPicker>

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
  optionsContainer: {
    position: 'absolute',
    bottom: 80,
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});
