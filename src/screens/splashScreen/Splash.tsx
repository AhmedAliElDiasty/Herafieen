import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import { NavigationFunctionComponent } from 'react-native-navigation';
import {LeftMenu} from 'components';
import {styles} from '../home/style';
import { AppIcon, IconType } from 'common';

export const Splash: NavigationFunctionComponent = (props) => {
  return (
    
      <View style={{ flex: 1, backgroundColor: 'red' }}>
        <AppIcon name='arrow-back' type={IconType.ionicons} />
      </View>        
  );
};
