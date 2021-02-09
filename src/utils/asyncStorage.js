import AsyncStorage from '@react-native-async-storage/async-storage';

const AUTH_TOKEN = 'AUTH_TOKEN';
const HOME_INFO = 'HOME_INFO';

export const getHomeInfo = async () => {
  return await AsyncStorage.getItem(HOME_INFO);
};

export const getToken = async () => {
  return await AsyncStorage.getItem(AUTH_TOKEN);
};

export const setHomeInfo = async payload => {
  return await AsyncStorage.setItem(HOME_INFO, payload);
};

export const setToken = async token => {
  return await AsyncStorage.setItem(AUTH_TOKEN, token);
};
