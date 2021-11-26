import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import { AccordionList } from 'accordion-collapse-react-native';
import Head from './Head';
import Body from './Body';

import { useQuery } from '@apollo/client';
import { GET_AREAS } from '~/gql/areas';
import { keyExtractor } from '~/utils/list';

const SpaceAccordionList = () => {
  const { data, loading } = useQuery(GET_AREAS);
  if (loading) {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  }

  return (
    <AccordionList
      list={data?.areas ?? []}
      header={Head}
      body={Body}
      keyExtractor={keyExtractor}
    />
  );
};

SpaceAccordionList.screenName = 'SpaceAccordionList';

export default SpaceAccordionList;
