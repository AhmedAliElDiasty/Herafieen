import { LIGHT_COLORS } from "common";
import { StyleSheet } from "react-native";
import { rootStore } from "store";

export const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: rootStore.getState().theme.colors.backgroundColor,
    paddingBottom:20
  },
  headerContainer: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignItems: 'center',
    backgroundColor: rootStore.getState().theme.colors.statusBar,
    justifyContent:'space-between',
    paddingHorizontal: 10,
    height:70
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
    width:'40%',
    justifyContent:'space-between',
    paddingHorizontal: 10,
    height:70
  },
  headerContent: {
    fontSize: 22,
    fontWeight: 'bold', 
    color: rootStore.getState().theme.colors.primary
  }
})