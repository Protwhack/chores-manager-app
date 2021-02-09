import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import { setToken, setHomeInfo } from '~/utils/asyncStorage';
import noAuthRoutes from '~/routes/noAuthRoutes';

const OtherScreen = () => {
  const onLogoutClick = async () => {
    await setToken('');
    await setHomeInfo('');
    noAuthRoutes();
  };

  return (
    <View>
      <Button title='Logout' onPress={onLogoutClick} />
    </View>
  );
};

OtherScreen.screenName = 'Other';

export default OtherScreen;
