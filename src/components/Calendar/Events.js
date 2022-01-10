import { StyleSheet, Text, View, Dimensions } from 'react-native'

export default function Events({ selectedDay }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {selectedDay ? `${selectedDay.getDate()}/${selectedDay.getMonth()+1}/${selectedDay.getFullYear()}` : 'selecione um dia'}
      </Text>
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
  }
})
