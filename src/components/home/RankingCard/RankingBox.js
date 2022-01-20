import { View, StyleSheet, Text } from 'react-native';

import defaultStyles from '../../../assets/defaultStyles'

export default function RankingBox({ id, tittle, integrantes, cor }) {
  return (
    <View style={styles.container}>
      <View style={{flexDirection:'row'}}>
      <View style={{
        backgroundColor: cor,
        width: 48,
        height: 48,
        // backgroundColor:,

        borderRadius: 8,
        borderColor: defaultStyles.secondaryColor,
        alignItems:'center',
        justifyContent:'center',
        borderWidth: 1,
        // shadowColor: "black",
        // shadowOffset: {
        //   width: 0,
        //   height: 0,
        // },shadowOpacity: 1,
        // shadowRadius: 20.68,
        // elevation: 10,
      }}>
        <Text style={styles.positionNumber}>{id}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.tittle}>{tittle}</Text>
        <Text style={styles.integrantes}>{integrantes}</Text>
      </View>
      </View>
      <View style={styles.line}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 10,
    flexDirection:'column',

  },
  positionNumber: {
    color:defaultStyles.secondaryColor,
    fontSize:18,
    fontWeight:'bold'
  },
  textContainer:{
    paddingLeft:20,
  },
  tittle: {
    color: defaultStyles.mainColor,
    fontSize:20,
    fontWeight:'bold'
  },
  integrantes: {
    fontSize:18,
    color:'gray'
  },
  line: {
    position:'relative',
    marginTop:20,

    width:100,
    height:2,
    backgroundColor: defaultStyles.mainColor
  }
})
