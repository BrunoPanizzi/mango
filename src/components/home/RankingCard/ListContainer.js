import { View,Text, FlatList, StyleSheet } from "react-native";

//mock
import MockRanking from '../../../Mocks/MockRanking'

//components
import RankingBox from "./RankingBox";

export default function ListContainer(params) {
  return(
    <FlatList
      data={MockRanking}
      renderItem={({item}) => <RankingBox {...item}/>}
      keyExtractor={({id}) => String(id)}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  }
})
