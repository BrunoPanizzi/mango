import { View, Image, StyleSheet } from "react-native";

import logo from '../../assets/images/logo.png';
import defaultStyles from "../../assets/defaultStyles";

export default function Logo() {
	return(
		<View style={styles.logoContainer}>
			<Image style={styles.logo} source={logo}/>
		</View>
	)
}

const styles = StyleSheet.create({
	logoContainer:{
		backgroundColor:defaultStyles.mainColor,
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