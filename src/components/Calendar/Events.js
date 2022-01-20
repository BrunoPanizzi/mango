import { StyleSheet, Text, View, FlatList, Dimensions } from 'react-native'

import { useCalendarContext } from '../../contexts/CalendarContext'

import parseDate from '../../utils/parseDate'

import Tarefa from '../home/PrazosCard/Tarefa'

export default function Events() {
  const { selectedDay } = useCalendarContext()

  // TODO pegar as tarefas do dia selecionado
  const tarefasDoDia = []

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {selectedDay ? parseDate(selectedDay) : 'selecione um dia'}
      </Text>
      {selectedDay &&
      <FlatList
        style={styles.tarefas}
        data={tarefasDoDia}
        renderItem={tarefa => <Tarefa />}
        ListEmptyComponent={() => <Text style={styles.noTarefaText}>Nenhuma tarefa</Text>}
      />}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    maxHeight: Dimensions.get('screen').height * 0.7,
    padding: 8,
    borderRadius: 8,
    elevation: 5,
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16
  },
  tarefa: {
    maxHeight: 600,
  },
  noTarefaText: {
    width: '100%',
    textAlign: 'center',
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 16
  }
})
