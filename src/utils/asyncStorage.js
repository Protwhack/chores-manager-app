import AsyncStorage from '@react-native-async-storage/async-storage';

const AUTH_TOKEN = 'AUTH_TOKEN';

export const getToken = async () => {
  return await AsyncStorage.getItem(AUTH_TOKEN);
};

export const setToken = async token => {
  return await AsyncStorage.setItem(AUTH_TOKEN, token);
};
