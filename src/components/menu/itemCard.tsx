import React, { useRef } from 'react';
import { View } from 'react-native';
import { NavigationFunctionComponent } from 'react-native-navigation';
import { styles } from './style';
import { AppIcon, IconType } from 'common';
import { AppText } from 'common/text/Text';
import { rootStore } from 'store';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';

interface Props {
  iconName: string;
  textName: string;
  onPress: Function;
  iconType: IconType;
}

export const ItemCard: NavigationFunctionComponent<Props> = (props: Props) => {
  return (
    <TouchableNativeFeedback onPress={()=>props.onPress()}>
      <View style={styles.itemCardContainer}>
      <AppIcon name={props.iconName} size={30} color={rootStore.getState().theme.colors.primary} type={props.iconType} />
      <AppText style={styles.itemText}>{props.textName}</AppText>
    </View>
    </TouchableNativeFeedback>
    

  );
};
