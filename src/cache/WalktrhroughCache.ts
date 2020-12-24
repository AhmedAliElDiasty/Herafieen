import AsyncStorage from '@react-native-async-storage/async-storage';

export const changeWalkthrough = async (value: boolean) => {
  try {
    await AsyncStorage.setItem('@walkthrough', JSON.stringify(value));
  } catch (e) {
    // saving error
  }
};
export const getWalkthrough = async () => {
  try {
    const value = await AsyncStorage.getItem('@walkthrough');
    return value ? JSON.parse(value) : null;

    // value previously stored
  } catch (e) {
    // error reading value
  }
};
