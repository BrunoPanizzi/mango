import { View, Text, StyleSheet } from 'react-native';
import React, { useState } from 'react';

//import: components
import LoginText from './LoginText';
import InputEmail from './InputEmail';
import InputPassword from './InputPassword';
import LoginBtn from './LoginBtn';
import ForgotPassword from './ForgotPassword';

//import: images
import eyeHide from '../../imagens/hidden.png';
import eyeView from '../../imagens/view.png';

//import:main
import Main from '../../../Main';




export default function InputsContainer(){



  const [ currentEye, setCurrentEye ] = useState(eyeHide);
  const [ secureTextEntry, setSecureTextEntry ] = useState(true);

    return(
        <View style={styles.inputContainer}>
          <LoginText/>
          <InputEmail/>
          <InputPassword/>
          <ForgotPassword/>  
          <LoginBtn/>
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer:{
      position:'absolute',
      bottom:0,
      width:'100%',
      height:'70%',
      padding:10,
    }
  })