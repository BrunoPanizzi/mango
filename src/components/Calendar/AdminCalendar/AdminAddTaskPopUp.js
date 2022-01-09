import { View, TextInput, StyleSheet, Dimensions} from "react-native";
import defaultStyles from "../../../assets/defaultStyles";

import defaultProps from "../../../assets/defaultStyles"

import CardHeader from '../../home/CardHeader'
import Button from '../../Button'


export default function AdminAddTaskBtn(){
  return(

      <View style={styles.container}>
        <View style={styles.form}>
          <CardHeader tittle={"Nova Tarefa"}/>
          <TextInput style={styles.tipoText} placeholder="Tipo de tarefa"/>
          <TextInput style={styles.descText}  multiline = {true} placeholder="Descriçao da tarefa"/>
          <Button style={styles.btn} children={'Adicionar'}/>
        </View>

      </View>

  )
}

const styles = StyleSheet.create({
  container:{
    padding:'2.5%',
    height:'100%',
    width:'100%',
    backgroundColor:'rgba(0,0,0,0.5)',
    position:'absolute',
    top:0,
    left:0,
    alignItems: 'center',
    justifyContent: 'center'
    // shadowColor: "#000",
  },
  form:{
    width:'100%',
    paddingHorizontal:10,
    paddingVertical:30,
    backgroundColor:'white',
    borderRadius:10,

  },
  tipoText:{
    width:'100%',
    height:60,
    lineHeight:30,
    fontSize:18,


    borderRadius:25,
    borderColor:'gray',
    borderWidth:1,
    marginVertical:10,
    marginTop:40,
    paddingLeft:20,
    color:'gray',
    fontWeight: "bold",
  },
  descText:{
    fontWeight: "bold",
    width:'100%',
    height:100,
    fontSize:18,
    textAlignVertical: 'top',
    paddingTop:5,


    borderRadius:10,
    borderColor:'gray',
    borderWidth:1,
    marginVertical:5,
    marginBottom:30,
    paddingHorizontal:20,
  },


})
