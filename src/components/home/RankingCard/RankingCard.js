import { View, StyleSheet } from "react-native";
import { Dimensions } from "react-native";

import CardStyles from "../CardStyles";

var widthCard = Dimensions.get('window').width - 80;
var heightCard = Dimensions.get('window').height - (50 + 96) - 20;

//components
import CardHeader from "../CardHeader";
import ListContainer from "./ListContainer";

export default function RankingCard(){
  return(
    <View style={CardStyles}>
      <CardHeader tittle={'Ranking'}/>
      <ListContainer/>
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

