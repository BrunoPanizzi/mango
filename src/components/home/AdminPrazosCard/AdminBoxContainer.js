import { View, Text, ScrollView, StyleSheet, FlatList } from 'react-native';
import React from 'react';
//components
import AdminPrazosBox from './AdminPrazosBox'
//mock
import AdminMockPrazos from '../../../Mocks/AdminMockPrazos'

export default function BoxContainer() {
  return (

      <FlatList
        data={AdminMockPrazos}
        renderItem={({  item }) => <AdminPrazosBox {...item} />}
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
