import {IconType} from 'common';
import {AppText} from 'common/text/Text';
import {AppNavigation} from 'navigation';
import React from 'react';
import {Button, SafeAreaView, Text, View} from 'react-native';
import {NavigationFunctionComponent} from 'react-native-navigation';
import {ItemCard} from './itemCard';
import {styles} from './style';

export const Menu: NavigationFunctionComponent = (props) => {
  return (
    <View style={styles.conatiner}>
      <View style={styles.AppNameContainer}>
        <AppText style={styles.AppName}>Herafieen</AppText>
      </View>
      
      <View style={styles.itemsContainer}>
        <ItemCard
          textName="Favorite"
          iconName="favorite"
          iconType={IconType.materialIcons}
          componentId={props.componentId}
          onPress={() => AppNavigation.push('favourite')}
        />
        <ItemCard
          textName="Setting"
          iconName="settings"
          iconType={IconType.materialIcons}
          componentId={props.componentId}
          onPress={() => AppNavigation.push('setting')}
        />
      </View>
    </View>
  );
};
