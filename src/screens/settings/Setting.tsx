import { AppHeader } from 'components/Header/Header';
import React from 'react';
import {Text, View} from 'react-native';
import {NavigationFunctionComponent} from 'react-native-navigation';

export const Setting: NavigationFunctionComponent = (props) => {
  return (
    <View>
      <AppHeader title='Setting'/>
      <Text>Setting!!!!!!!!!!!!!!!!!!!!!!</Text>
    </View>
  );
};
