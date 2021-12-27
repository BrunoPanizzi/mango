import { View, Image, StyleSheet } from "react-native";

import logo from '../../images/logo.png';
import Main from "../../../Main";

export default function Logo() {
	return(
		<View style={styles.logoContainer}>
			<Image style={styles.logo} source={logo}/>
		</View>
	)
}

const styles = StyleSheet.create({
	logoContainer:{
		backgroundColor:Main.mainColor,
		width:'100%',
    flex: 3,
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