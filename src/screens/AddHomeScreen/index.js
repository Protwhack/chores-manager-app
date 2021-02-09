import React from 'react';
import { View } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import { setHomeInfo } from '~/utils/asyncStorage';
import authRoutes from '~/routes/authRoutes';

const AddHome = () => {
  const onSubmit = () => {
    const homeName = 'Bill';
    setHomeInfo(homeName);
    authRoutes(homeName);
  };

  return (
    <View>
      <Text>Create a new home</Text>
      <Input placeholder={`Home's Account`} />
      <Input placeholder={`Home's Password`} />
      <Input placeholder={`Home's Confirm Password`} />
      <Button onPress={onSubmit} title='Create' />
    </View>
  );
};

AddHome.screenName = 'AddHome';

export default AddHome;
