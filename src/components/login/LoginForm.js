import { useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native';

//import: components
import InputEmail from './InputEmail';
import InputPassword from './InputPassword';
import Button from '../Button'

import defaultStyles from '../../assets/defaultStyles';

import { AuthContext } from '../../contexts/AuthProvider'

export default function LoginForm(){
  const { handleAuthentication } = useContext(AuthContext)
  
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
      <Button onPress={handleAuthentication}>
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
    color:defaultStyles.mainColor,
    marginVertical:20,
    textAlign:'center',
    fontWeight:'bold'
  },
  forgotPassword: {
    color:defaultStyles.secondaryColor,
    fontSize:16,
    textAlign:'center',
    marginVertical: 16
  }
})