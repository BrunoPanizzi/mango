import { View, Text, StyleSheet } from 'react-native';

import { Dimensions } from 'react-native'

//components
import CardHeader from './CardHeader';


var widthCard = Dimensions.get('window').width - 80;
var heightCard = Dimensions.get('window').height - (50 + 96) - 20;
export default function Card() {

  return (
    <View style={styles.card}>
      <CardHeader tittle={'Teste'}/>

    </View>
  )
}
const styles = StyleSheet.create({
  card: {
    // position:'relative',
    width: widthCard,
    height: heightCard,
    marginTop: 10,
    marginHorizontal: 5,
    backgroundColor: 'white',
    borderRadius: 10,
    overflow:'hidden',
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 0,
    },shadowOpacity: 1,
    shadowRadius: 20.68,
    elevation: 10,
  }
})
