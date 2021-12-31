import { TextInput, StyleSheet } from "react-native"

//main
import defaultStyles from '../../assets/defaultStyles'

export default function InputEmail() {
  return (
    <TextInput style={styles.input} placeholder='Email' />
  )
}

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 60,
    borderWidth: 2,
    borderColor: defaultStyles.secondaryColor,
    borderRadius: 30,
    paddingHorizontal: 24,
    lineHeight: 20,
    fontSize: 18,
    marginVertical: 10,
    color: defaultStyles.textColor,
  }
})
