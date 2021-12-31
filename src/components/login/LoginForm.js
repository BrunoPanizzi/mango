import { useContext, useEffect, useRef } from 'react'
import { View, Text, StyleSheet, Animated } from 'react-native';

//import: components
import InputEmail from './InputEmail';
import InputPassword from './InputPassword';
import Button from '../Button';

import defaultStyles from '../../assets/defaultStyles';

import { AuthContext } from '../../contexts/AuthProvider'

export default function LoginForm() {
  const { handleAuthentication } = useContext(AuthContext)
  const animation = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false
    }).start()
  }, [])

  return (
    <Animated.View
      style={[
        styles.container,
        {
          opacity: animation,
          flex: animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 7]
          })
        }
      ]}
    >
      <View style={{ flex: 1, width: '100%' }}>
        <Text style={styles.loginText}>
          Login
        </Text>
        <InputEmail />
        <InputPassword />
        <Text style={styles.forgotPassword}>
          Esqueceu sua senha?
        </Text>
        <Button onPress={handleAuthentication}>
          Login
        </Button>
      </View>
      <View>
        <Text style={styles.text}>Developed By </Text>
        <Text style={styles.text}>@AdrianHoff, @BrunoPanizziQ & Manuela Bergamaschi</Text>
      </View>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 10,
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  loginText: {
    fontSize: 38,
    color: defaultStyles.secondaryColor,
    marginVertical: 20,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  forgotPassword: {
    color: defaultStyles.mainColor,
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 16
  },
  text: {
    color: defaultStyles.textColor,
    textAlign: 'center'
  }
})
