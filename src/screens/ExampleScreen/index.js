import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import Title from '~/components/example/Title';
import GraphqlResultList from '~/components/example/GraphqlResultList';
import { Divider, Text } from 'react-native-elements';
import  MyDivider from '~/components/MyDivider';


const ExampleScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Title>Result List from GraphQL</Title>
      <GraphqlResultList style={styles.graphqlResultList} />
      <Text>Divider Element</Text>
      <Divider />
      <Text>Divider Element</Text>
      <Divider />
      <Text>MyDivider</Text>
      <MyDivider />
      <Text>MyDivider</Text>
      <MyDivider />
    </ScrollView>

  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    margin: '3%',
  },
  graphqlResultList: {
    height: '40%',
  },
});

ExampleScreen.screenName = 'Example';

export default ExampleScreen;
