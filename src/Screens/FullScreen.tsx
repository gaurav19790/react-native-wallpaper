/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {View, Image, Button, Dimensions} from 'react-native';
import React from 'react';

import {NativeModules} from 'react-native';
const {SetWallpaperModule} = NativeModules;

const FullScreen = ({route}: any) => {
  const {width, height} = Dimensions.get('screen');
  const onPress = () => {
    SetWallpaperModule.setWallpaper(route.params.image, 1, (eventId: any) => {
      console.log(`Created a new event with id ${eventId}`);
    });
  };
  return (
    <View>
      <Image
        source={{uri: route.params.image}}
        resizeMode="cover"
        style={{width: width, height: height}}
      />
      <View
        style={{
          position: 'absolute',
          bottom: height / 9,
          left: 0,
          right: 0,
        }}>
        <Button title="setWallpaper" onPress={onPress} />
      </View>
    </View>
  );
};

export default FullScreen;
