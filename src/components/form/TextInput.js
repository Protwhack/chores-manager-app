import React from 'react';
import { Input } from 'react-native-elements';
import { Controller } from 'react-hook-form';

const TextInput = ({
  control,
  name,
  error,
  placeholder,
  inputProps = {},
  ...props
}) => {
  return (
    <>
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <Input
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder={placeholder}
            errorMessage={error ? 'This is required.' : ''}
            {...inputProps}
          />
        )}
        name={name}
        rules={{ required: true }}
        defaultValue=''
        {...props}
      />
    </>
  );
};

export default TextInput;
