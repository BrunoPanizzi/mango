import { View, TouchableOpacity, Image, TextInput, StyleSheet} from 'react-native';
import { useState } from 'react';

//images
import eyeHide from '../../imagens/hide.png';
import eyeView from '../../imagens/show.png';
//main
import Main from '../../../Main';

export default function InputPassword(params) {
    const [ currentEye, setCurrentEye ] = useState(eyeHide);
    const [ secureTextEntry, setSecureTextEntry ] = useState(true);
    return(
        <View style={styles.inputPasswordContainer}>
              
              <TouchableOpacity style={styles.eyeBtn} onPress={()=>{
                  if (currentEye == eyeView) {
                    setSecureTextEntry(true);
                    setCurrentEye(eyeHide);   
                                  
                  }
                  else{
                    setSecureTextEntry(false);
                    setCurrentEye(eyeView);       
                  }
              }}></TouchableOpacity>
                <View style={styles.showHidePassword} >
                  <Image style={styles.eye} source={currentEye} />
                </View>
              <TextInput secureTextEntry={secureTextEntry} style={styles.input} placeholder='Senha'/>
        </View>
    )
}

const styles = StyleSheet.create({
    input:{
      width:'100%',
      height:60,
      borderWidth:1,
      borderColor:Main.mainColor,
      borderRadius:30,
      paddingLeft:25,
      lineHeight:20,
      fontSize:18,
      marginTop:10,
      color:Main.mainColor,
    },
    inputPasswordContainer:{
      width:'100%',
      
      position:'relative',
    },
    showHidePassword:{
      width:32,
      height:32,
      position:'absolute',
      right:15,
      top:25,
      zIndex:10,
    },
    eye:{
      width:'100%',
      height:'100%',
      color:Main.mainColor,
    },
    eyeBtn:{
      position:'absolute',
      right:10,
      top:20,
      width:32,
      height:32,

      zIndex:12,

    }
  })