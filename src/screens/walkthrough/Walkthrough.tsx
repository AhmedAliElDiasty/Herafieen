import React, { Component } from "react";
import { SafeAreaView, Platform, Text, View } from "react-native";
import I18n from "react-native-i18n";
import styles from "./styles";
import { connect } from "react-redux";
import walkthrough1 from "assets/imgs/walkthrough1.png";
import walkthrough2 from "assets/imgs/walkthrough2.png";
import walkthrough3 from "assets/imgs/walkthrough3.png";
import walkthrough4 from "assets/imgs/walkthrough4.png";
import Swiper from "react-native-swiper";
import FastImage from "react-native-fast-image";
import { TouchableNativeFeedback } from "react-native-gesture-handler";
import { AppNavigation } from "navigation";

export default class Walkthrough extends Component {
  slides = [
    {
      key: "somethun",

      title: I18n.t("walkthrough-title-1"),
      subtitle: I18n.t("walkthrough-subtitle-1"),
      image: walkthrough1,
    },
    {
      key: "somethun1",
      title: I18n.t("walkthrough-title-2"),
      subtitle: I18n.t("walkthrough-subtitle-2"),
      image: walkthrough2,
    },
    {
      key: "somethun2",
      title: I18n.t("walkthrough-title-3"),
      subtitle: I18n.t("walkthrough-subtitle-3"),
      image: walkthrough3,
    },
    {
      key: "somethun3",
      title: I18n.t("walkthrough-title-4"),
      subtitle: I18n.t("walkthrough-subtitle-4"),
      image: walkthrough4,
    },
  ];

  _renderItem = (item) => {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <View

          style={{ paddingTop: 40, alignItems: 'stretch', paddingHorizontal: 50, backgroundColor: '#EAF3FF' }}
        >
          <FastImage
            source={item.image}
            resizeMode="contain"
            style={{ alignSelf: 'stretch', height: '70%' }}
          />
        </View>
        {/* <AppView style={{ marginTop: -70 }} center>
          <AppText center bold size={6.5} color="primary">
            {item.title}
          </AppText>
          <AppView width={65}>
            <AppText
              center
              size={5.4}
              marginTop={2}
              lineHeight={9.5}
              color="darkgrey"
            >
              {item.subtitle}
            </AppText>
          </AppView>
        </AppView> */}
      </View>
    );
  };

  renderDotItem = (localIndex, index, total) => {
    return (
      <View
        style={[localIndex === index ? styles.activeDotStyles : styles.dotStyles, { marginTop: 60, marginHorizontal: 10 }]}
      />
    );
  };
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, alignItems: 'stretch' }}>
          <Swiper
            index={I18n.currentLocale() == 'ar' && Platform.OS === "android" ? 3 : 0}
            renderPagination={(index, total, context) => {
              return (
                <View
                  style={{
                    flexDirection:
                      I18n.currentLocale()=='ar' && Platform.OS === "android"
                        ? "row-reverse"
                        : "row",
                    // paddingBottom: 25,
                    justifyContent: 'center',
                    alignItems: 'stretch',
                  }}
                >
                  {this.slides.map((item, localIndex) =>
                    this.renderDotItem(localIndex, index, total)
                  )}
                </View>
              );
            }}
          >
            {this.slides.map((item) => this._renderItem(item))}
          </Swiper>
          <View style={{ marginTop: 20, marginHorizontal: 40, alignItems: 'flex-end' }}>
            <TouchableNativeFeedback onPress={() => AppNavigation.setRootScreen('home')}>
              <Text style={{ fontSize: 20 }}>{I18n.t('skip')}</Text>
            </TouchableNativeFeedback>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
