import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

import defaultStyles from '../assets/defaultStyles'

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <Image style={styles.profileHeaderImage} />
        <Text style={styles.profileHeaderText}>Adrian Hoff</Text>
      </View>
      <View style={styles.logOut}>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position:'relative',
    height:96,
    width: '100%',
    justifyContent:'center',
    paddingHorizontal:16,
    backgroundColor: defaultStyles.secondaryColor,
    zIndex:1,
    // borderBottomWidth:1,
    borderColor:'#ccc'
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  profileHeaderImage: {
    width: 64,
    height: 64,
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

  },

})
