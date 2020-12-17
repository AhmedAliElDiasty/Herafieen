import AsyncStorage from "@react-native-async-storage/async-storage";



export const storeData = async (value) => {
  try {
    await AsyncStorage.setItem('@storage_Key', value);
  } catch (e) {
    // saving error
  }
};
export const getIsDarkMode = async () => {
  try {
    const value = await AsyncStorage.getItem('@storage_Key');
    if (value !== null) {
      return value;
    }

    // value previously stored
  } catch (e) {
    // error reading value
  }
};