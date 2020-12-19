import React, {useContext} from 'react';
import {getIconType, IconType} from '../utils/icon';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {IconProps} from 'react-native-vector-icons/Icon';
import {useSelector} from 'react-redux';
import {RootStore} from 'store';
import { View } from 'react-native';
import I18n from "react-native-i18n";


export interface Props extends IconProps {
  type?: IconType;
}

export const AppIcon: React.FC<Props> = (props) => {
  const {type, color, ...rest} = props;
  const VectorIcon = getIconType(type || IconType.custom);  
  const {
    colors: {iconColor},
  } = useSelector((state: RootStore) => state.theme);

  return (
    <View style={{transform: [
      { scaleX: I18n.currentLocale()=='ar'?-1:1 }
    ]}}>
      <VectorIcon color={color || iconColor} {...rest} />
    </View>
  );
};
