import { AppNavigation } from 'navigation';
import React, { Component } from 'react';
import { Text, View, Dimensions, StyleSheet } from 'react-native';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';

import Carousel from 'react-native-snap-carousel'; // Version can be specified in package.json

import { scrollInterpolator, animatedStyles } from './animations';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 4 / 2);

const DATA = [];
for (let i = 0; i < 10; i++) {
  DATA.push(i)
}

export default class Walkthrough extends Component {

  state = {
    index: 0
  }

  constructor(props) {
    super(props);
    this._renderItem = this._renderItem.bind(this)
  }

  _renderItem({ item }) {
    return (
      <View style={styles.itemContainer}>
        <Text style={styles.itemLabel}>{`Item ${item}`}</Text>
      </View>
    );
  }

  render() {
    return (
      <View>
        <Carousel
          ref={(c) => this.carousel = c}
          data={DATA}
          renderItem={this._renderItem}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          containerCustomStyle={styles.carouselContainer}
          inactiveSlideShift={0}
          onSnapToItem={(index) => this.setState({ index })}
          scrollInterpolator={scrollInterpolator}
          slideInterpolatedStyle={animatedStyles}
          useScrollView={true}
        />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, marginHorizontal: 50 }}>
          {DATA.map((item, index) => {
            return this.state.index == index ? (
              <View style={{ backgroundColor: 'black', width: 12, height: 12, borderRadius: 6 }} />
            ) : (
                <View style={{ backgroundColor: 'grey', width: 9, height: 9, borderRadius: 4.5   }} />
              )
          })}
        </View>
        <View style={{ marginTop:20,marginHorizontal:40, alignItems:'flex-end'}}>
          <TouchableNativeFeedback onPress={()=>AppNavigation.setRootScreen('home')}>
          <Text style={{fontSize:20}}>skip</Text>
        </TouchableNativeFeedback>
        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  carouselContainer: {
    marginTop: 50
  },
  itemContainer: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'dodgerblue'
  },
  itemLabel: {
    color: 'white',
    fontSize: 24
  },
  counter: {
    marginTop: 25,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
