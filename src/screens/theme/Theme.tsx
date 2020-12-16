import { IconType } from 'common';
import { SettingItemCard } from 'components';
import { AppHeader } from 'components/Header/Header';
import { AppNavigation } from 'navigation';
import React from 'react';
import {Text, View} from 'react-native';
import {NavigationFunctionComponent} from 'react-native-navigation';

export const Setting: NavigationFunctionComponent = (props) => {
  return (
    <View>
      <AppHeader title='Setting'/>
      <SettingItemCard
        textName="Language"
        iconName="language"
        iconType={IconType.materialIcons}
        componentId={props.componentId}
        onPress={() => AppNavigation.push('favourite')}
      />
      <SettingItemCard
        textName="Theme"
        iconName="theme-light-dark"
        iconType={IconType.materialCommunityIcons}
        componentId={props.componentId}
        onPress={() => AppNavigation.push('favourite')}
      />
    </View>
  );
};
