import { IconType } from 'common';
import { SettingItemCard } from 'components';
import { AppHeader } from 'components/Header/Header';
import { AppNavigation } from 'navigation';
import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { NavigationFunctionComponent } from 'react-native-navigation';
import { useDispatch } from 'react-redux';
import { onModeChange, useTheme } from 'slices';
import I18n from 'react-native-i18n';
import { rootStore } from 'store';
import { getTheme, storeTheme } from 'app/themeConfig';
import { getLang, storeLang } from 'app/langConfig';
import { Lang, langConfig } from 'translation';
import RNRestart from 'react-native-restart';


export const Setting: NavigationFunctionComponent = (props) => {
  console.log(rootStore.getState().theme.isDarkMode);

  const dispatch = useDispatch();
  return (
    <View>
      <AppHeader title='Setting' />
      <SettingItemCard
        textName={I18n.t('language')}
        iconName="language"
        iconType={IconType.materialIcons}
        componentId={props.componentId}
        onPress={() => {
          getLang().then((value) => {
            if (value === Lang.ar)
              storeLang(Lang.en);
            else storeLang(Lang.ar);
          })

          setTimeout(() => {
            RNRestart.Restart();
          }, 2000);
        }}
      />
      <SettingItemCard
        textName={rootStore.getState().theme.isDarkMode ? I18n.t('light') : I18n.t('dark')}
        iconName="theme-light-dark"
        iconType={IconType.materialCommunityIcons}
        componentId={props.componentId}
        onPress={async () => {
          getTheme().then(value => {
            if (value == 'DARK_MODE') {
              storeTheme('LIGHT_MODE');
            } else {
            storeTheme('DARK_MODE')
            }
          })
          setTimeout(() => {
            RNRestart.Restart();
          }, 2000);
        }}
      />
    </View>
  );
};
