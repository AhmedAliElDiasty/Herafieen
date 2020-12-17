import { Card } from 'components/card/Card';
import { AppHeader } from 'components/Header/Header';
import { AppNavigation } from 'navigation';
import React from 'react';
import {Button, SafeAreaView, Text, View} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { NavigationFunctionComponent } from 'react-native-navigation';
import { styles } from './style'
import I18n from 'react-native-i18n';

export const Favourite: NavigationFunctionComponent = (props) => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

  return (
    <View style={styles.conatiner}>
      <AppHeader title={ I18n.t('favorite')}/>
      <ScrollView style={styles.conatiner}>
        {arr.map((item, index) => <Card key={index} componentId={props.componentId} />)}
      </ScrollView>
    </View>
  );
};
