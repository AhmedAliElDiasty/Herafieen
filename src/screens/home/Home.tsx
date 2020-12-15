import { AppHeader } from 'components/Header/Header';
import { AppNavigation } from 'navigation';
import React from 'react';
import {Button, SafeAreaView, Text, View} from 'react-native';
import {NavigationFunctionComponent} from 'react-native-navigation';

export const Home: NavigationFunctionComponent = (props) => {
  return (
    <View>
      <AppHeader title='Home'/>
      <Text>Homeeeeeeeeeeeeeeeeeeeeeeeeeeeeee</Text>
    </View>
  );
};
