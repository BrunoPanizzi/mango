import { View, Text, StyleSheet, FlatList } from 'react-native';

import { Dimensions } from 'react-native'

import MockPrazos from '../../../Mocks/MockPrazos';

import CardContainer from '../Card'

import PrazosBox from './PrazosBox';
import CardHeader from '../CardHeader';

export default function PrazosCard() {

  return (
    <View style={CardContainer}>
      <CardHeader tittle={'Prazos Próximos'}/>
      <FlatList
        data={MockPrazos}
        renderItem={({ item }) => <PrazosBox {...item} />}
        keyExtractor={({id}) => String(id)}
      />
    </View>
  )
}

