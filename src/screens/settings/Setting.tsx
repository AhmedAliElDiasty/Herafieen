import { IconType } from 'common';
import { SettingItemCard } from 'components';
import { AppHeader } from 'components/Header/Header';
import { AppNavigation } from 'navigation';
import React, { useEffect } from 'react';
import {Text, View} from 'react-native';
import {NavigationFunctionComponent} from 'react-native-navigation';
import {useDispatch} from 'react-redux';
import { onModeChange, useTheme } from 'slices';
import I18n from 'react-native-i18n';
import { rootStore } from 'store';
import { getIsDarkMode } from 'app/themeConfig';


export const Setting: NavigationFunctionComponent = (props) => {
  console.log(rootStore.getState().theme.isDarkMode);
  
  const dispatch = useDispatch();
  return (
    <View>
      <AppHeader title='Setting'/>
      <SettingItemCard
        textName={I18n.t('language')}
        iconName="language"
        iconType={IconType.materialIcons}
        componentId={props.componentId}
        onPress={() => AppNavigation.push('favourite')}
      />
      <SettingItemCard
        textName={rootStore.getState().theme.isDarkMode?I18n.t('light'):I18n.t('dark')}
        iconName="theme-light-dark"
        iconType={IconType.materialCommunityIcons}
        componentId={props.componentId}
        onPress={async () => {          
          dispatch(await getIsDarkMode()==='DARK_MODE' ? onModeChange(true) : onModeChange(false))
        }}
      />
    </View>
  );
};
