import { useContext } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

import defaultStyles from '../assets/defaultStyles'

import { AuthContext } from '../contexts/AuthProvider'

export default function Header() {
  const { handleAuthentication } = useContext(AuthContext)

  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <Image style={styles.profileHeaderImage} />
        <Text style={styles.profileHeaderText}>Adrian Hoff</Text>
      </View>
      <TouchableOpacity style={styles.logOut} onPress={handleAuthentication}>
        <Text>Log out</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems:'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 16,
    backgroundColor: defaultStyles.secondaryColor,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  profileHeaderImage: {
    width: 48,
    height: 48,
    borderRadius: 32,
    backgroundColor: '#ccc'
  },
  profileHeaderText: {
    fontSize:20,
    // color:defaultStyles.mainColor,
    color:'white',
    fontWeight:'bold',
    paddingLeft:15
  },
  logOut: {
    backgroundColor: defaultStyles.mainColor,
    padding: 8
  },

})
