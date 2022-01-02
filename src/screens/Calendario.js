import { View, StyleSheet } from "react-native"

import defaultStyles from '../assets/defaultStyles'

import Calendar from '../components/Calendar'

export default function Calendario() {
    return(
      <View style={styles.container}>
        <Calendar />
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: defaultStyles.backgroundColor,
    padding: 16
  }
})
