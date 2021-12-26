import { View, Image, StyleSheet } from "react-native";

import logo from '../../imagens/logo.png';

export default function Logo(params) {
    
    return(
        <View style={styles.logoContainer}>
            <Image style={styles.logo} source={logo}/>
        </View>
    )
}

const styles = StyleSheet.create({
    logoContainer:{
        width:128,
        height:128,
      },
      logo:{
        width:'100%',
        height:'100%',
      },
});