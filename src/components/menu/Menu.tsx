import {IconType} from 'common';
import {AppText} from 'common/text/Text';
import {AppNavigation} from 'navigation';
import React from 'react';
import {Button, SafeAreaView, Text, View} from 'react-native';
import {NavigationFunctionComponent} from 'react-native-navigation';
import {ItemCard} from './itemCard';
import { styles } from './style';
import I18n from 'react-native-i18n';

export const Menu: NavigationFunctionComponent = (props) => {
  return (
    <View style={styles.conatiner}>
      <View style={styles.AppNameContainer}>
        <AppText style={styles.AppName}>{I18n.t('appName')}</AppText>
      </View>
      
      <View style={styles.itemsContainer}>
        <ItemCard
          textName={I18n.t('favorite')}
          iconName="favorite"
          iconType={IconType.materialIcons}
          componentId={props.componentId}
          onPress={() => AppNavigation.push('favourite')}
        />
        <ItemCard
          textName={I18n.t('setting')}
          iconName="settings"
          iconType={IconType.materialIcons}
          componentId={props.componentId}
          onPress={() => AppNavigation.push('setting')}
        />
      </View>
    </View>
  );
};
