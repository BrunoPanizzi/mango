import { StyleSheet, Text, View } from 'react-native';

//components
import Logo from '../components/login/Logo';
import LoginForm from '../components/login/LoginForm';

import Main from '../../Main'

export default function Login() {
  return (
    <View style={styles.container}>
      <Logo/>
      <LoginForm/>
      <Text style={styles.text}>Developed By </Text>
      <Text style={[styles.text, {marginBottom: 8}]}>@AdrianHoff, @BrunoPanizziQ & Manuela Bergamaschi</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'white',
  },
  text: {
    color: Main.mainColor,
  }
})
