import { TextInput, StyleSheet } from "react-native"

//main
import Main from "../../../Main";

export default function InputEmail(){
    return(
        <>
            <TextInput style={styles.input} placeholder='Email'/>
        </>
    )
}

const styles = StyleSheet.create({
    input:{
      width:'100%',
      height:60,
      borderWidth:1,
      borderColor:Main.mainColor,
      borderRadius:30,
      paddingLeft:10,
      lineHeight:20,
      fontSize:18,
      marginVertical:10,
      color:Main.mainColor,
      
    }
  })