import { useState, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Platform } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { captureRef } from 'react-native-view-shot';

import * as imagePicker from 'expo-image-picker';
import * as MediaLibrary from 'expo-media-library';
import * as SplashScreen from 'expo-splash-screen';
import * as Device from 'expo-device';
import domtoimage from 'dom-to-image';

import Button from './components/Button';
import ImageViewer from './components/ImageViewer';
import CircleButton from './components/CircleButton';
import IconButton from './components/IconButton';
import EmojiiPicker from './components/EmojiPicker';
import EmojiList from './components/EmojiList';
import EmojiSticker from './components/EmojiSticker';

const PlaceholderImage = require('./assets/images/background-image.png');

// splash screen testing
// SplashScreen.preventAutoHideAsync();
// setTimeout(SplashScreen.hideAsync, 5000);

export default function App() {
  // const imageRef = useRef();
  // const [status, requstPermission] = MediaLibrary.usePermissions();
  // const [pickedEmoji, setPickedEmoji] = useState(null);
  // const [isModalVisible, setIsModalVisible] = useState(false);
  // const [showAppOptions, setShowAppOptions] = useState(false);
  // const [selectedImage, setSelectedImage] = useState(null);

  // if( status === null ) {
  //   requstPermission();
  // }

  // const pickImageAsync = async () => {
  //   let result = await imagePicker.launchImageLibraryAsync({
  //     allowsEditing: true,
  //     quality: 1,
  //   });

  //   if( !result.canceled ) {
  //     setSelectedImage(result.assets[0].uri);
  //     setShowAppOptions(true);
  //   } else {
  //     alert('You did not select an image');
  //   }
  // };

  // const onReset = () => {
  //   setShowAppOptions(false);
  // };

  // const onAddSticker = () => {
  //   setIsModalVisible(true);
  // };

  // const onModalClose = () => {
  //   setIsModalVisible(false);
  // };

  // const onSaveImageAsync = async () => {
  //   if( Platform.OS != 'web' ) {
  //     try {
  //       const localUri = await captureRef(imageRef, {
  //         height: 440,
  //         quality: 1,
  //       });

  //       await MediaLibrary.saveToLibraryAsync(localUri);
  //       if( localUri ) {
  //         alert('Image saved successfully!');
  //       }
  //     } catch( e ) {
  //       console.log(e);
  //     }
  //   } else {
  //     domtoimage
  //       .toJpeg(imageRef.current, { 
  //         quality: 0.95,
  //         width: 320,
  //         height: 440,
  //       })
  //       .then(dataUrl => {
  //         let link = document.createElement('a');
  //         link.download = 'sticker-smash.jpeg';
  //         link.href = dataUrl;
  //         link.click();
  //       })
  //       .catch(e => {
  //         console.log(e);
  //       });
  //     }
  // };
  
  return (
    <View style={{ flex: 1, paddingTop: 100 }}>
      <Text>Hello Universe</Text>
      <Text>{Device.manufacturer}: {Device.modelName} </Text>
    </View>

    // <GestureHandlerRootView style={styles.container}>
    //   <View style={styles.imageContainer}>
    //     <View ref={imageRef} collapsable={false}>
    //       <ImageViewer placeholderImageSource={PlaceholderImage} selectedImage={selectedImage} />
    //       { pickedEmoji !== null ? <EmojiSticker imageSize={40} stickerSource={pickedEmoji} /> : null }
    //     </View>

    //     { showAppOptions ? (
    //         <View style={styles.optionsContainer}>
    //           <View style={styles.optionsRow}>
    //             <IconButton icon="refresh" label="Reset" onPress={onReset} />
    //             <CircleButton onPress={onAddSticker} />
    //             <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync} />
    //           </View>
    //         </View>
    //     ) : (
    //         <View style={styles.footerContainer} >
    //           <Button theme="primary" label="Test Button" onPress={pickImageAsync} />
    //           <Button label="Use this photo" onPress={() => setShowAppOptions(true)} />
    //         </View>
    //     )}

    //     <EmojiiPicker isVisible={isModalVisible} onClose={onModalClose}>
    //       <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose} />
    //     </EmojiiPicker>

    //     <StatusBar style="light" />
    //   </View>
    // </GestureHandlerRootView>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#003b6f', // tardis blue
//     alignItems: 'center',
//     // justifyContent: 'center',
//   },
//   imageContainer: {
//     flex: 1,
//     paddingTop: 58,
//     // backgroundColor: 'red',
//   },
//   footerContainer: {
//     flex: 1 / 3,
//     alignItems: 'center',
//   },
//   optionsContainer: {
//     position: 'absolute',
//     bottom: 80,
//   },
//   optionsRow: {
//     alignItems: 'center',
//     flexDirection: 'row',
//   },
// });
