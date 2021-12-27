import { Text, TouchableOpacity, StyleSheet } from "react-native"

//main
import defaultStyles from "../assets/defaultStyles"

export default function Button({ children, onPress }){
	return(
		<TouchableOpacity style={styles.button} onPress={onPress}>
			<Text style={styles.text}>{children}</Text>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	button:{
		width:'100%',
		display:'flex',
		height:60,
		alignItems:'center',
		alignContent:'center',
		justifyContent:'center',
		backgroundColor:defaultStyles.secondaryColor,
		borderRadius:30,
	},
	text:{
		color:'white',
		fontSize:24
	}
})