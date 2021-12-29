import { useEffect, useRef } from 'react';
import { Image, StyleSheet, Animated } from "react-native";

import logo from '../../assets/images/logo.png';
import defaultStyles from "../../assets/defaultStyles";

export default function Logo() {
	const opacity = useRef(new Animated.Value(0)).current

	useEffect(() => {
		Animated.timing(opacity, {
			toValue: 1,
			duration: 1000,
			useNativeDriver: true
		}).start()
	}, [])
	
	return(
		<Animated.View style={[styles.logoContainer, {opacity}]}>
			<Image style={styles.logo} source={logo}/>
		</Animated.View>
	)
}

const styles = StyleSheet.create({
	logoContainer:{
		// backgroundColor:defaultStyles.mainColor,
		width:'100%',
    flex: 3,
		justifyContent:'center',
		alignItems:'center',
	},
	logo:{
		width:128,
		height:128,
		backgroundColor: defaultStyles.secondaryColor,
		borderRadius: 999
	},
});