import { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import Header from '../components/NewTask/Header';
import NewItem from '../components/NewTask/NewItem';
import TaskEditableItem from '../components/NewTask/TaskEditableItem';

export default function NovaTarefa() {
  const [itens, setItens] = useState([])

  const addItem = item => setItens(prevItens => [...prevItens, item])

  return (
    <FlatList
      style={styles.container}
      contentContainerStyle={{padding: 16}}
      data={itens}
      renderItem={() => <TaskEditableItem />}
      ListHeaderComponent={Header}
      ListFooterComponent={() => <NewItem addItem={addItem} />}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  }
});
