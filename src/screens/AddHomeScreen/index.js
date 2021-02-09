import React from 'react';
import { useForm } from 'react-hook-form';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-elements';
import TextInput from '~/components/form/TextInput';
import authRoutes from '~/routes/authRoutes';
import { setHomeInfo } from '~/utils/asyncStorage';

const AddHome = () => {
  const { control, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    setHomeInfo(data.account);
    authRoutes(data.account);
  };
  return (
    <View style={styles.container}>
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
      <TextInput
        control={control}
        name='confirmPassword'
        placeholder='Confirm Password'
        error={errors.password}
        inputProps={{ secureTextEntry: true }}
      />
      <Button onPress={handleSubmit(onSubmit)} title='Create' />
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
});

AddHome.screenName = 'AddHome';

export default AddHome;
