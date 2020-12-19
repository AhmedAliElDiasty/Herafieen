import React from 'react';
import { NavigationFunctionComponent } from 'react-native-navigation';
import { Menu } from 'components';
import ScalingDrawer from 'common/scalingDrawer/ScalingDrawer';
import { HomeComponent } from 'components/home/HomeComponent';
import { View } from 'react-native';
import I18n from "react-native-i18n";

export const Home: NavigationFunctionComponent = (props) => {
  const drawerRef = React.createRef();
  return (


    <ScalingDrawer
      ref={drawerRef}
      content={<Menu componentId={props.componentId} />}
      scalingFactor={0.75}
      rtl={!!(I18n.currentLocale()=='ar')}
    >
      <HomeComponent componentId={props.componentId} drawerRef={drawerRef} />
    </ScalingDrawer>
  );
};
