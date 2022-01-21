import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

import containerStyle from './containerStyle'

export default function NewItem({ addItem }) {
  return (
    <TouchableOpacity
      style={[
        containerStyle,
        { justifyContent: 'center', alignItems: 'center'}
      ]}
      onPress={() => addItem({})}
    >
      <Text>Novo item</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({})
