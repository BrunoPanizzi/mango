import { View, StyleSheet } from 'react-native'

import CardContainer from '../Card'
//components
import CardHeader from '../CardHeader';

export default function PlantaCard(){
  return(
    <View style={CardContainer}>
      <CardHeader tittle={'Planta'}/>
    </View>
  )
}
