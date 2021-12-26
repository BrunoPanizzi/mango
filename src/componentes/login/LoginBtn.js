import { Text, TouchableOpacity, StyleSheet } from "react-native"


//main
import Main from "../../../Main"
export default function LoginBtn(){
    return(
        <>
            <TouchableOpacity style={styles.loginBtn}>
                <Text style={styles.loginBtnText}>LOGIN</Text>
            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    loginBtn:{
        width:'100%',
        display:'flex',
        height:60,
        alignItems:'center',
        alignContent:'center',
        justifyContent:'center',
        backgroundColor:Main.secondaryColor,
        borderRadius:30,
    },
    loginBtnText:{
        color:'white',
        fontSize:24
    }
})