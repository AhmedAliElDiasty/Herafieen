import AsyncStorage from "@react-native-async-storage/async-storage";



export const storeLang = async (value) => {
  try {
    await AsyncStorage.setItem('@lang', value);
  } catch (e) {
    // saving error
  }
};
export const getLang = async () => {
  try {
    const value = await AsyncStorage.getItem('@lang');
    if (value !== null) {
      return value;
    }

    // value previously stored
  } catch (e) {
    // error reading value
  }
};