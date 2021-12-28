import { useContext } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

import { AuthContext } from '../contexts/AuthProvider'

export default function Home() {
  const { handleAuthentication } = useContext(AuthContext)
  
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <TouchableOpacity onPress={handleAuthentication} style={styles.button}>
        <Text>log out</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    backgroundColor: 'green',
    padding: 8 
  }
})
