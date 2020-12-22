import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeFavorite = async (value: number[]) => {
  try {
    await AsyncStorage.setItem('@fav', JSON.stringify(value));
  } catch (e) {
    // saving error
  }
};
export const getFavorite = async () => {
  try {
    const value = await AsyncStorage.getItem('@fav');
    return value ? JSON.parse(value) : null;

    // value previously stored
  } catch (e) {
    // error reading value
  }
};
