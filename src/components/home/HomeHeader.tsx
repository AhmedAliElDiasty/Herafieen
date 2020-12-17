import React, { useRef } from 'react';
import {View} from 'react-native';
import { NavigationFunctionComponent } from 'react-native-navigation';
import {styles} from './style';
import { AppIcon, IconType } from 'common';
import { AppText } from 'common/text/Text';
import { rootStore } from 'store';
import I18n from 'react-native-i18n';

interface Props{
  drawerRef: React.ReactNode
}

export const HomeHeader: NavigationFunctionComponent<Props> = (props: Props) => {
  return (
    <View style={styles.headerContainer}>     
      <View style={styles.leftContent}>
        <AppIcon name='menu' size={30} color={rootStore.getState().theme.colors.primary} type={IconType.entypo} onPress={() => props.drawerRef.current.open()} />
        <AppText style={styles.headerContent}>{I18n.t('home')}</AppText>
      </View>  
      <AppIcon name='search' color={rootStore.getState().theme.colors.primary} size={30} type={IconType.ionicons} onPress={() => {}} />
      </View>
      
  );
};
