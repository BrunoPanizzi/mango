import { StyleSheet, Text, View, Image, TextInput} from 'react-native';

import Logo from '../componentes/login/Logo';
import Inputs from '../componentes/login/Inputs';

import main from '../../Main'

export default function Login() {
  return (
    <View style={styles.container}>
      <Logo/>
      <Inputs/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width:'100%',
    height:'100%',
    backgroundColor:main.mainColor,
  }
})
