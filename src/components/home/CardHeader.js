import { View, Text, StyleSheet } from 'react-native';

import defaultStyles from '../../assets/defaultStyles';

export default function CardHeader({tittle}) {
  return (
    <View style={styles.cardTop}>
      <Text style={styles.cardTitle}>{tittle}</Text>
      <View style={styles.line}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  cardTop: {
    width: '100%',
    alignItems: 'center',
    paddingBottom: 10,


  },
  cardTitle: {
    color: defaultStyles.textColor,
    fontWeight: 'bold',
    fontSize: 32,
    marginVertical: 10
  },
  line: {
    width: 100,
    height: 3,
    borderRadius: 2,
    backgroundColor: defaultStyles.mainColor
  }
})
