import { View, Text, StyleSheet } from "react-native";

import { SocialIcon } from "react-native-elements/dist/social/SocialIcon";

import defaultStyles from "../../../assets/defaultStyles";
import MockPrazos from '../../../Mocks/MockPrazos'

export default function PrazosBox({tittle, text, data}){

  return (

    <View style={styles.container}>
      <Text style={styles.title}>{tittle}</Text>
      <Text style={styles.text}>{text}</Text>
      <View style={styles.bottomBox}>
        <View style={styles.checkbox} ></View>
        <Text style={styles.data}>{data}</Text>
      </View>
      <View style={styles.line}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width:'100%',
    padding:10,


  },
  title: {
    fontSize: 20,
    color:defaultStyles.mainColor,
    fontWeight:'bold'
  },
  text :{
    fontSize:16,
    color:'gray',
    textAlign:'justify',
    padding:5,
  },
  bottomBox:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },checkbox: {
    width:18,
    height:18,
    borderRadius:4,
    borderWidth:1
  },
  data: {
    textAlign:'right',
    fontSize:20,

  },
  line: {
    width:'100%',
    height:1,
    backgroundColor:"#ccc",
    marginTop:10
  }
})
