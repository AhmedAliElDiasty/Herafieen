import {StyleSheet} from 'react-native';
import {APPBAR_HEIGHT} from 'common/utils/responsiveDimmensions';
import { rootStore } from 'store';

export const styles = StyleSheet.create({
  container: {
    height: APPBAR_HEIGHT,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20
  },
  items: {
    flex: 1,
    flexDirection: 'row',
    alignContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 17,
    color:rootStore.getState().theme.colors.primary
  },
  content: {
    justifyContent: 'center',
  },
  left: {
    justifyContent: 'flex-start',
  },
  right: {
    justifyContent: 'flex-end',
  },
  back_icon_container: {
    height: 38,
    width: 38,
    borderRadius: 9.6,
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  back_icon: {},
});
