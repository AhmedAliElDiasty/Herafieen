import { StyleSheet } from "react-native";
import { rootStore } from "store";

export const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: rootStore.getState().theme.colors.innerDarkShadowColor,
    paddingVertical: 40,
  },
  AppNameContainer: {
    paddingLeft: 30,
  },
  AppName: {
    fontSize: 22,
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
    width: '70%'
  },
  itemText: {
    color: 'white',
    paddingHorizontal:15
  }
 
})