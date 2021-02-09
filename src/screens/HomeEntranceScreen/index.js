import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import { push } from '~/routes/utils';
import authRoutes from '~/routes/authRoutes';
import { setHomeInfo } from '~/utils/asyncStorage';

const HomeEntrance = ({ componentId }) => {
  const goToAddHomeScreen = () => {
    push(componentId, 'AddHome');
  };

  const onSubmit = () => {
    const homeName = 'Bill';
    setHomeInfo(homeName);
    authRoutes(homeName);
  };

  return (
    <View style={styles.container}>
      <View style={styles.joinBlock}>
        <Text>Join the Home</Text>
        <Input placeholder={`Home's Account`} />
        <Input placeholder={`Home's Password`} />
        <Button onPress={onSubmit} title='Join' />
      </View>
      <Button onPress={goToAddHomeScreen} title='Create a new Home' />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    margin: '3%',
  },
  joinBlock: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '5%',
    marginBottom: '10%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 16,
  },
});

HomeEntrance.screenName = 'HomeEntrance';

export default HomeEntrance;
