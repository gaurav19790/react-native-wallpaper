/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
// import type {Node} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  Image,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
// import firestore from '@react-native-firebase/firestore';

import {
  AppOpenAd,
  InterstitialAd,
  RewardedAd,
  BannerAd,
  TestIds,
  BannerAdSize,
  useInterstitialAd,
  AdEventType,
} from 'react-native-google-mobile-ads';
const {width, height} = Dimensions.get('screen');
const Ads = 'ca-app-pub-1350477690991328/5191289648';
// const interstitial = InterstitialAd.createForAdRequest(Ads, {
//   requestNonPersonalizedAdsOnly: true,
//   keywords: ['fashion', 'clothing'],
// });
const HomePage = ({navigation}: any) => {
  const isDarkMode = useColorScheme() === 'dark';
  // console.log('hello ggg ', imageData);
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const [loading, setLoading] = useState(true); // Set loading to true on component mount
  const [users, setUsers] = useState([
    {
      image:
        'https://i.pinimg.com/736x/44/b5/f5/44b5f558cc2b5b4db28bc570fde67544.jpg',
    },
    {
      image:
        'https://i.pinimg.com/736x/ba/54/b8/ba54b807a0c135c481c83a4906cd2759.jpg',
    },
    {
      image:
        'https://i.pinimg.com/736x/44/5f/02/445f023ad701e36c0678a161b048f6e1.jpg',
    },
    {
      image:
        'https://i.pinimg.com/736x/34/4d/6c/344d6c876654bc8f38a17a92f3d20f72.jpg',
    },
    {
      image:
        'https://i.pinimg.com/736x/44/b5/f5/44b5f558cc2b5b4db28bc570fde67544.jpg',
    },
    {
      image:
        'https://i.pinimg.com/736x/bc/1e/32/bc1e32150d9c580c8ecb0388a097ae80.jpg',
    },
  ]); // Initial empty array of users
  const [loaded, setLoaded] = useState(false);
  // const showInterstitialAd = () => {
  //   if (loaded) {
  //     interstitial.show();
  //   } else {
  //     interstitial.load();
  //   }
  // };
  // useEffect(() => {
  //   const unsubscribe = interstitial.addAdEventListener(AdEventType.LOADED, () => {
  //     setLoaded(true);
  //   });

  // Start loading the interstitial straight away
  // interstitial.load();
  // const subscriber = firestore()
  //   .collection('dragon Wall')
  //   .onSnapshot(querySnapshot => {
  //     // see next step
  //     const users = [];

  //     querySnapshot.forEach(documentSnapshot => {
  //       users.push({
  //         ...documentSnapshot.data(),
  //         key: documentSnapshot.id,
  //       });
  //     });

  //     setUsers(users);
  //     setLoading(false);
  //   });
  // Unsubscribe from events when no longer in use
  // return () => subscriber();
  // }, []);
  // showInterstitialAd()

  // if (loading) {
  //   return <ActivityIndicator size="large" />;
  // }
  return (
    <View style={[backgroundStyle, {flex: 1, width: width, height: height}]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}>
        {/* <BannerAd
          size={BannerAdSize.BANNER}
          unitId="ca-app-pub-3940256099942544/9214589741"
        />*/}
        <BannerAd size={BannerAdSize.BANNER} unitId={TestIds.ADAPTIVE_BANNER} />
      </View>
      <FlatList
        data={users}
        style={{flex: 1}}
        numColumns={3}
        renderItem={({item: {image}}) => (
          <TouchableOpacity
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              marginTop: 5,
              // marginRight: 20,
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
              width: width / 3,
              height: height / 2.5,
              padding: 5,
              // backgroundColor: "black"
            }}
            onPress={() => navigation.navigate('FullScreen', {image})}>
            {/* onPress={() => navigation.navigate('ScrollScreen')}>*/}
            {/* {console.log(image)} */}
            {/* <Text>hello</Text> */}
            <Image
              source={{uri: image}}
              resizeMode="cover"
              style={{width: '100%', height: '100%', borderRadius: 10}}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default HomePage;

// import React from 'react';
// import {
//   Button,
//   Dimensions,
//   Image,
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   Text,
//   View,
// } from 'react-native';
// import {NativeModules} from 'react-native';
// const {SetWallpaperModule} = NativeModules;

// const HomeScreen = ({navigation}: any) => {
//   const {width, height} = Dimensions.get('window');

//   const onPress = () => {
//     console.log('We will invoke the native module here!');
//     SetWallpaperModule.setWallpaper(
//       'https://i.pinimg.com/736x/44/b5/f5/44b5f558cc2b5b4db28bc570fde67544.jpg',
//       1,
//       (eventId: any) => {
//         console.log(`Created a new event with id ${eventId}`);
//       },
//     );
//     // SetWallpaperModule.createCalendarEvent('testName', 'testLocation');
//     console.log('2 We will invoke the native module here!');
//   };
//   return (
//     <SafeAreaView>
//       <StatusBar barStyle={'light-content'} />
//       <ScrollView>
//         <Button
//           title="Click to invoke your native module!"
//           color="#841584"
//           onPress={onPress}
//         />
//         <Image
//           resizeMode="cover"
//           style={{width: width / 2, height: height / 2}}
//           source={{
//             uri: 'https://i.pinimg.com/736x/44/b5/f5/44b5f558cc2b5b4db28bc570fde67544.jpg',
//           }}
//         />
//         <Image
//           resizeMode="cover"
//           style={{width: width / 2, height: height / 2}}
//           source={{
//             uri: 'https://i.pinimg.com/736x/44/b5/f5/44b5f558cc2b5b4db28bc570fde67544.jpg',
//           }}
//         />
//         <Text>gaurav</Text>
//         <Button
//           title="Go to Details"
//           onPress={() => navigation.navigate('Details')}
//         />
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default HomeScreen;
