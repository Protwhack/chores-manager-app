import React from 'react';
import { View } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { setToken } from '~/utils/asyncStorage';
import authRoutes from '~/routes/authRoutes';
const LoginScreen = () => {
  const onSubmit = () => {
    setToken('TEMP_TOKEN');
    authRoutes();
  };

  return (
    <View>
      <Input label='Account' placeholder='email@adress.com' />
      <Input label='Password' placeholder='Password' />
      <Button title='Submit' onPress={onSubmit} />
    </View>
  );
};

LoginScreen.screenName = 'Login';

export default LoginScreen;
