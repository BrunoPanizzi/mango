import { View, Text, StyleSheet } from "react-native";

import defaultStyles from "../../../assets/defaultStyles";

export default function Tarefa({tittle, text, data}){
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{tittle}</Text>
      <Text style={styles.text}>{text}</Text>
      <View style={styles.bottomBox}>
        <Text style={styles.data}>{data}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 250,
    padding:10,
  },
  title: {
    fontSize: 20,
    color:defaultStyles.mainColor,
    fontWeight:'bold'
  },
  text : {
    maxHeight: 66,
    fontSize:16,
    color:'gray',
    textAlign:'justify',
    padding:5,
  },
  bottomBox:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginVertical: 8
  },
  checkbox: {
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
