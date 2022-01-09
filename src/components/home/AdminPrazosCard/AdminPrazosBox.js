import { View, Text, StyleSheet } from "react-native";


import defaultStyles from "../../../assets/defaultStyles";


export default function PrazosBox({tipo, text, data}){

  return (

    <View style={styles.container}>
      <Text style={styles.title}>{tipo}</Text>
      <Text style={styles.text}>{text}</Text>


        <Text style={styles.data}>{data}</Text>

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
