import { View, Image, StyleSheet } from "react-native";

import logo from '../../imagens/logo.png';
import Main from "../../../Main";

export default function Logo(params) {
    
    return(
        <View style={styles.logoContainer}>
            <Image style={styles.logo} source={logo}/>
        </View>
    )
}

const styles = StyleSheet.create({
    logoContainer:{
        backgroundColor:Main.mainColor,
        position:'absolute',
        top:0,
        width:'100%',
        height:'30%',
        justifyContent:'center',
        alignItems:'center',
        borderBottomLeftRadius:30,
        borderBottomRightRadius:30,
      },
      logo:{
        width:128,
        height:128,
      },
});