import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import { NavigationFunctionComponent } from 'react-native-navigation';
import {LeftMenu} from 'components';
import ScalingDrawer from 'react-native-scaling-drawer';
import {styles} from '../home/style';
import { AppIcon, IconType } from 'common';

export const Splash: NavigationFunctionComponent = (props) => {
  return (
    <ScalingDrawer
      content={<LeftMenu componentId={props.componentId}/>}
        onClose={() => console.log('close')}
        onOpen={() => console.log('open')}
      >
      <View style={{ flex: 1, backgroundColor: 'red' }}>
        <AppIcon name='arrow-back' type={IconType.ionicons} />
      </View>
      
        
      </ScalingDrawer>
  );
};
