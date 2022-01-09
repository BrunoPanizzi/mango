import { ScrollView, StyleSheet} from 'react-native';

// Components
import AdminPrazosCard from '../components/home/AdminPrazosCard/AdminPrazosCard';
import RankingCard from '../components/home/RankingCard/RankingCard';
import PlantaCard from '../components/home/PlantaCard/PlantaCard';


export default function HomeAdmin(){
  return (
    <ScrollView style={styles.container} horizontal={true}>
      <AdminPrazosCard />
      <PlantaCard />
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

