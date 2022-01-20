import { StyleSheet, Text, View } from 'react-native';

export default function NovaTarefa() {
  return (
    <View style={styles.container}>
      <Text>
        isso era pra ser a tela em que o professor adiciona uma tarefa,
        mas eu to com preguiça e por enquanto tem so isso mesmo
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
