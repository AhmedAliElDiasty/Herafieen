import AsyncStorage from "@react-native-async-storage/async-storage";



export const storeTheme = async (value) => {
  try {
    await AsyncStorage.setItem('@theme', value);
  } catch (e) {
    // saving error
  }
};
export const getTheme = async () => {
  try {
    const value = await AsyncStorage.getItem('@theme');
    if (value !== null) {
      return value;
    }

    // value previously stored
  } catch (e) {
    // error reading value
  }
};