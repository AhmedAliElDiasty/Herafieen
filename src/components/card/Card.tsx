import { AppNavigation } from 'navigation';
import React from 'react';
import {Button, SafeAreaView, Text, View} from 'react-native';
import { NavigationFunctionComponent } from 'react-native-navigation';
import FastImage from 'react-native-fast-image'
import { styles } from './style';
import img from 'assets/imgs/card.jpg'
import { AppIcon, IconType } from 'common';



export const Card: NavigationFunctionComponent = (props) => {
  return (
    <View style={styles.cardContainer}>
      <FastImage
        style={styles.image}
        source={img}
        resizeMode={FastImage.resizeMode.stretch}
      />
      <View style={styles.cardDetails}>
        <Text style={styles.text}>New and Used</Text>
        <View style={styles.rightContent}>
          <AppIcon color='#2ac023' name='call' size={25} type={IconType.ionicons} />
        <AppIcon color='red' name='favorite'  size={25} type={IconType.materialIcons} />
        </View>
        
      </View>
    </View>
  );
};
