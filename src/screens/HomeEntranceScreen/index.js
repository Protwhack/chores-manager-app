import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useForm } from 'react-hook-form';
import { Button, Text } from 'react-native-elements';
import TextInput from '~/components/form/TextInput';
import authRoutes from '~/routes/authRoutes';
import { push } from '~/routes/utils';
import { setHomeInfo } from '~/utils/asyncStorage';

const HomeEntrance = ({ componentId }) => {
  const { control, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    setHomeInfo(data.account);
    authRoutes(data.account);
  };

  const goToAddHomeScreen = () => {
    push(componentId, 'AddHome');
  };

  return (
    <View style={styles.container}>
      <View style={styles.joinBlock}>
        <Text>Join the Home</Text>
        <TextInput
          control={control}
          name='account'
          placeholder='Account'
          error={errors.account}
        />
        <TextInput
          control={control}
          name='password'
          placeholder='Password'
          error={errors.password}
          inputProps={{ secureTextEntry: true }}
        />
        <Button onPress={handleSubmit(onSubmit)} title='Join' />
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
