import { StyleSheet } from "react-native";
import { rootStore } from "store";

export const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: rootStore.getState().theme.colors.innerDarkShadowColor,
    paddingVertical: 100,
  },
  AppNameContainer: {
    paddingLeft: 30,
  },
  AppName: {
    fontSize: 33,
    color:'white'
  },
  itemsContainer: {
    alignItems: 'stretch',
    marginTop:100,
  },
  itemCardContainer: {
    paddingLeft: 30,
    flexDirection: 'row',
    alignItems:'center',
    height: 70,
    width: '70%',
  },
  itemText: {
    color: rootStore.getState().theme.colors.primary,
    paddingHorizontal:15
  }
 
})