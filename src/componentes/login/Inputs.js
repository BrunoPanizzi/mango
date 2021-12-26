import { View, TextInput, Image, StyleSheet, TouchableOpacity, Touchable } from 'react-native';
import React, { useState } from 'react';

import eyeHide from '../../imagens/hidden.png';
import eyeView from '../../imagens/view.png';






export default function Inputs(){

    const [ currentEye, setCurrentEye ] = useState(eyeHide);



    return(
        <View style={styles.inputContainer}>
            <TextInput style={styles.input} placeholder='Email'/>
            <View style={styles.inputPasswordContainer}>
              
              <TouchableOpacity style={styles.eyeBtn} onPress={()=>{
                  if (currentEye == eyeView) 
                    setCurrentEye(eyeHide)
                  else
                    setCurrentEye(eyeView)
                }}></TouchableOpacity>
                <View style={styles.showHidePassword} >
                  <Image style={styles.eye} source={currentEye} />
                </View>
              <TextInput secureTextEntry={true} style={styles.input} placeholder='Senha'/>
            </View>   
            
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer:{
      width:'100%',
      alignItems: 'center',
      justifyContent: 'center',
      padding:10,
  
    },
    input:{
      width:'100%',
      height:50,
      borderWidth:2,
      borderColor:'white',
      borderRadius:10,
      paddingLeft:10,
      lineHeight:20,
      fontSize:20,
      marginVertical:10,
      color:'white',
      
    },
    inputPasswordContainer:{
      width:'100%',
      
      position:'relative',
    },
    showHidePassword:{
      width:32,
      height:32,
      position:'absolute',
      right:10,
      top:20,
      zIndex:10,
    },
    eye:{
      width:'100%',
      height:'100%',
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