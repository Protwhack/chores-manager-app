import React from 'react';
import { View, Text, FlatList, Pressable } from 'react-native';
import { useQuery } from '@apollo/client';
import { GET_EXCHANGE_RATES } from '~/gql/exchange';

const Item = ({ item, onPress }) => {
  const { currency, rate } = item;
  return (
    <Pressable onPress={onPress}>
      <Text>
        {currency} : {rate}
      </Text>
    </Pressable>
  );
};

const MainScrenn = () => {
  const { data, loading } = useQuery(GET_EXCHANGE_RATES);

  if (loading) {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={data.rates}
      renderItem={({ item }) => <Item item={item} />}
      keyExtractor={(item) => item.currency.toString()}
    />
  );
};

export default MainScrenn;
