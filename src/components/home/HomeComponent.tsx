import React, { useRef } from 'react';
import { View } from 'react-native';
import { NavigationFunctionComponent } from 'react-native-navigation';
import { styles } from './style';
import { AppIcon, IconType } from 'common';
import { HomeHeader } from './HomeHeader';
import { Card } from 'components/card/Card';
import { ScrollView } from 'react-native-gesture-handler';

interface Props {
  componentId: string;
  drawerRef: React.ReactNode
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

export const HomeComponent: NavigationFunctionComponent<Props> = (props: Props) => {
  return (
    <View style={styles.conatiner}>
      <HomeHeader componentId={props.componentId} drawerRef={props.drawerRef} />
      <ScrollView style={styles.conatiner}>
        {arr.map((item, index) => <Card key={index} componentId={props.componentId} />)}
        <Card componentId={props.componentId} />
      </ScrollView>
    </View>


  );
};
