import { StyleSheet, Text, View, TextInput } from 'react-native'

import defaultStyles from '../../assets/defaultStyles'
import containerStyle from './containerStyle'

export default function Header() {
  return (
    <View style={containerStyle}>
      <TextInput
        style={styles.nameInput}
        placeholder='Nome da tarefa...'
      />
      <TextInput
        style={styles.nameInput}
        placeholder='Descrição'
      />

    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  nameInput: {
    fontSize: 18,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderColor: defaultStyles.mainColor
  }
})
