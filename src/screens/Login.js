import { StyleSheet, Text, View } from 'react-native';

//components
import Logo from '../components/login/Logo';
import LoginForm from '../components/login/LoginForm';

import defaultStyles from '../assets/defaultStyles';

export default function Login() {
  return (
    <View style={styles.container}>
      <Logo/>
      <LoginForm/>
    
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: defaultStyles.backgroundColor
  },

})
