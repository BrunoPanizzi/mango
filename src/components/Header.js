import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Header() {
	return (
		<View style={styles.container}>
			<Text>header</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'white',
		width: '100%',
		// height: 50
		padding: 26
	}
})
