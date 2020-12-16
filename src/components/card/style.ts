import {StyleSheet} from 'react-native';
import {APPBAR_HEIGHT} from 'common/utils/responsiveDimmensions';
import {rootStore} from 'store';

export const styles = StyleSheet.create({
  cardContainer: {
    paddingHorizontal: 20,
    alignItems: 'stretch',
    paddingVertical:20
  },
  cardDetails: {
    height: 40,
    backgroundColor: rootStore.getState().theme.colors.darkShadowColor,
    paddingHorizontal: 5,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rightContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '25%',
  },
  image: {
    alignSelf: 'stretch',
    height: 150,
    backgroundColor: 'pink'
  },
  text: {
    color: rootStore.getState().theme.colors.white
  }
});
