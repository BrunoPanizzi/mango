import { View, Text, StyleSheet } from 'react-native';

//import: components
import InputEmail from './InputEmail';
import InputPassword from './InputPassword';
import Button from '../Button'

import Main from '../../../Main';

export default function LoginForm(){
  return(
    <View style={styles.inputContainer}>
      <Text style={styles.loginText}>
        Login
      </Text>
      <InputEmail/>
      <InputPassword/>
      <Text style={styles.forgotPassword}>
        Esqueceu sua senha?
      </Text>
      <Button>
        Login
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer:{
    width:'100%',
    flex: 7,
    padding:10,
    alignItems: 'center'
  },
  loginText: {
    fontSize:38,
    color:Main.mainColor,
    marginVertical:20,
    textAlign:'center',
    fontWeight:'bold'
  },
  forgotPassword: {
    color:Main.secondaryColor,
    fontSize:16,
    textAlign:'center',
    marginVertical: 16
  }
})