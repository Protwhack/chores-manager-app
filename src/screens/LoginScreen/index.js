import React from 'react';
import { View } from 'react-native';
import { SocialIcon } from 'react-native-elements';
import { setToken } from '~/utils/asyncStorage';
import authRoutes from '~/routes/authRoutes';
const LoginScreen = () => {
  const onSubmit = () => {
    setToken('TEMP_TOKEN');
    authRoutes();
  };

  return (
    <View>
      <SocialIcon
        title='Sign In With Facebook'
        button
        type='facebook'
        onPress={onSubmit}
      />
      <SocialIcon
        title='Sign In With Google'
        button
        type='google'
        onPress={onSubmit}
      />
    </View>
  );
};

LoginScreen.screenName = 'Login';

export default LoginScreen;
