import { StyleSheet, Text, View, Image, TextInput} from 'react-native';

//components
import Logo from '../componentes/login/Logo';
import InputsContainer from '../componentes/login/InputsContainer';
import Direitos from '../componentes/login/Direitos';



export default function Login() {
  return (
    <View style={styles.container}>
      <Logo/>
      <InputsContainer/>
      <Direitos/>
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
    backgroundColor:'white',
  }
})
