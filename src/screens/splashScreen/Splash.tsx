import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {NavigationFunctionComponent} from 'react-native-navigation';
import {styles} from './style';

export const Splash: NavigationFunctionComponent = (props) => {
  return (
    <View style={styles.conatiner}>
      <Text>Hello world</Text>
    </View>
  );
};
