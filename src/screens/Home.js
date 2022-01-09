import { useContext } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'


import defaultStyles from '../assets/defaultStyles'

import { AuthContext } from '../contexts/AuthProvider'

//components
import PrazosCard from '../components/home/PrazosCard/PrazosCard';
import RankingCard from '../components/home/RankingCard/RankingCard';
import PlantaCard from '../components/home/PlantaCard/PlantaCard';
import Card from '../components/home/Card';

// Components prazos card
import CardHeader from '../components/home/CardHeader';
import BoxContainer from '../components/home/PrazosCard/BoxContainer';

export default function Home() {
  const { handleAuthentication } = useContext(AuthContext)

  return (
    <ScrollView style={styles.container} horizontal={true}>

      <PlantaCard />
      <PrazosCard />
      <RankingCard />

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
    height: '100%',
    backgroundColor: "white",
    // backgroundColor:defaultStyles.secondaryColor,


    zIndex: 999
  }
})
