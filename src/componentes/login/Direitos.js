import { Text, View, StyleSheet } from 'react-native';
import Main from '../../../Main';

export default function Direitos(){

    return(
        <View style={styles.direitosTextContainer}>
            <Text style={styles.direitosText}>Developed By </Text>
            <Text style={styles.direitosText}>@AdrianHoff, @BrunoPanizziQ & Manuela Bergamaschi</Text>        
        </View>

    )
}

const styles = StyleSheet.create({
    direitosTextContainer:{
        width:'100%',
        position:'absolute',
        bottom:20,
        alignItems:'center'
    },
    direitosText:{
        color:Main.mainColor,
        fontSize:14
    }
}) 