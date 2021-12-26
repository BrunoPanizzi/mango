import { StyleSheet, Text } from "react-native"

//main
import Main from "../../../Main";
export default function ForgotPassword(params) {
    return(
        <Text style={styles.forgotPasswordText}>Esqueceu sua senha?</Text>
    )
}

const styles = StyleSheet.create({
    forgotPasswordText:{
        color:Main.secondaryColor,
        fontSize:16,
        textAlign:'center',
        marginTop:15,
        marginBottom:15,
    }
})