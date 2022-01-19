import { View, Text, StyleSheet, FlatList } from 'react-native';

//components
import CardHeader from '../CardHeader';
import Tarefa from './Tarefa';

import defaultStyles from '../../../assets/defaultStyles';

import MockPrazos from '../../../Mocks/MockPrazos';

export default function Card() {

  return (
    <FlatList
      style={styles.card}
      data={MockPrazos}
      keyExtractor={({ id }) => String(id)}
      renderItem={({ item }) => <Tarefa {...item} />}
      ListHeaderComponent={() => <CardHeader tittle='Proximas Tarefas' />}
      decelerationRate={'fast'}
    />
  )
}
const styles = StyleSheet.create({
  card: {
    flex: 1,
    padding: 4,
    backgroundColor: 'white',
    borderRadius: 10,
    overflow:'hidden',
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 0,
    },shadowOpacity: 1,
    shadowRadius: 20.68,
    elevation: 10,
  }
})
