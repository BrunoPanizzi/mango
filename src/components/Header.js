import { useContext } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

import defaultStyles from '../assets/defaultStyles'

import { AuthContext } from '../contexts/AuthProvider'

export default function Header() {
  const { handleAuthentication } = useContext(AuthContext)

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image style={styles.profileHeaderImage} />
        <Text style={styles.profileHeaderText}>Nome do usuário</Text>
      </View>
      <TouchableOpacity style={styles.logOut} onPress={() => handleAuthentication('undefined')} >
        <Text>log out</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'white',
    borderBottomWidth:1,
    borderColor:'#ccc'
  },
  profileHeaderImage: {
    width: 56,
    height: 56,
    borderRadius: 99,
    backgroundColor: '#ccc',
    borderWidth:1,
    borderColor: defaultStyles.mainColor,
  },
  profileHeaderText: {
    fontSize:20,
    color:defaultStyles.mainColor,
    fontWeight:'bold',
    paddingLeft:15
  },
  logOut: {
    backgroundColor: '#555'
  },

})
