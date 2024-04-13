import { View, Text } from 'react-native'
import React from 'react'

import { BannerAd, BannerAdSize, GAMBannerAd, TestIds } from 'react-native-google-mobile-ads';

const adUnitId = __DEV__ ? TestIds.ADAPTIVE_BANNER : 'ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy';

function App() {
  return (
    <BannerAd
      unitId={adUnitId}
      size={BannerAdSize.BANNER}
    />
  );
}

const SetttingScreen = () => {
  return (
    <View>
      <GAMBannerAd
    unitId={TestIds.BANNER}
    sizes={[BannerAdSize.FULL_BANNER]}
    requestOptions={{
      requestNonPersonalizedAdsOnly: true,
    }}
  />
      <App/>
      <Text>SetttingScreen</Text>
    </View>
  )
}

export default SetttingScreen