import React from 'react';
import { Text, View } from 'react-native';
import FastImage, { Source } from 'react-native-fast-image'
import { styles } from './style';
import { AppIcon, IconType } from 'common';
import call from 'react-native-phone-call'

interface Props {
  key: number;
  id: number;
  image: Source;
  phone: string;
  isFav: boolean;
  setToFav: Function;
}


export const Card: React.FC<Props> = (props: Props) => {
  const args = {
    number: props.phone, // String value with the number to call
    prompt: true // Optional boolean property. Determines if the user should be prompt prior to the call 
  }  
  
  return (
    <View style={styles.cardContainer}>
      <FastImage
        style={styles.image}
        source={props.image}
        resizeMode={FastImage.resizeMode.stretch}
      />
      <View style={styles.cardDetails}>
        <Text style={styles.text}>New and Used</Text>
        <View style={styles.rightContent}>
          <AppIcon color='#2ac023' name='call' size={25} type={IconType.ionicons} onPress={() => {
            call(args).catch(console.error)

          }}/>
          <AppIcon color={props.isFav ? 'red' : 'white'} name='favorite' size={25} type={IconType.materialIcons}
            onPress={ ()=>props.setToFav(props.id,!props.isFav)}/>
        </View>

      </View>
    </View>
  );
};
