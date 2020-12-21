import { StyleSheet } from 'react-native';
import { rootStore } from 'store';
export default StyleSheet.create({
  dotStyles: {
    width: 10,
    height: 10,
    borderRadius: 5,

    backgroundColor: 'lightgrey',
    // marginTop: responsiveHeight(13),
    bottom: 50,
  },
  activeDotStyles: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: rootStore.getState().theme.colors.primary,
    bottom: 50,
  },
  button: {
    position: 'absolute',
    bottom:'3.1%',
    left: '30%',
    right:'30%',
    height: '6.5%',
    borderRadius:5,
    marginTop:10
  },
});
