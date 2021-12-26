import { View, Text, StyleSheet } from "react-native"
//main
import Main from "../../../Main"

export default function LoginText(params) {
    return(
        <View style={styles.textContainer}>
            <Text style={styles.loginText}>Login</Text> 
            {/* <Text style={styles.barraText}>|</Text>    
            <Text style={styles.registerText}>Register</Text>      */}
        </View>

    )
}

const styles = StyleSheet.create({
    textContainer:{
        width:'100%',
        alignItems:'center',
        alignContent:'center',
        justifyContent:'space-evenly',
        display:'flex',
        flexDirection:'row'

    },
    loginText:{
        fontSize:38,
        color:Main.mainColor,
        marginVertical:20,
        textAlign:'center',
        fontWeight:'bold'
    },
    barraText:{
        fontSize:32,
        color:Main.secondaryColor,
        marginHorizontal:10,
    },
    registerText:{
        fontSize:24,
        color:'#cccccc',
        marginVertical:20,
        textAlign:'center',
        fontWeight:'bold'
    }
})