import { View, Text, ScrollView, StyleSheet, FlatList } from 'react-native';
import React from 'react';
//components
import PrazosBox from './PrazosBox';
//mock
import MockPrazos from '../../../Mocks/MockPrazos';

export default function BoxContainer() {
  return (

      <FlatList
        data={MockPrazos}
        renderItem={({  item }) => <PrazosBox {...item} />}
        keyExtractor={({id}) => String(id)}
      />

  )
}

const styles = StyleSheet.create({
  container: {

    width: '100%',
    height: '100%'


  }
})
