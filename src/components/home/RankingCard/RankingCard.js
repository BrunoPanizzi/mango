import { View, StyleSheet } from "react-native";

import CardContainer from '../Card'
//components
import CardHeader from "../CardHeader";
import ListContainer from "./ListContainer";

export default function RankingCard(){
  return(
    <View style={CardContainer}>
      <CardHeader tittle={'Ranking'}/>
      <ListContainer/>
    </View>
  )
}

