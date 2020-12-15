import { AppNavigation } from 'navigation';
import React from 'react';
import {Button, SafeAreaView, Text, View} from 'react-native';
import {NavigationFunctionComponent} from 'react-native-navigation';

export const LeftMenu: NavigationFunctionComponent = (props) => {
  return (
    <View>
      <Button title='Home' onPress={ ()=> AppNavigation.push('home')}/>
      <Button title='Favourite' onPress={ ()=> AppNavigation.push('favourite')}/>
    </View>
  );
};
