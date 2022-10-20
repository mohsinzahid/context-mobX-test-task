import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from "react-native";
import {colors} from "../utils";

const ResetButton = (props) => {
	const {onPress} = props;
	return (
		<TouchableOpacity onPress={onPress} style={styles.container}>
			<Text style={styles.text}>Reset</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 15,
	},
	text: {
		color: colors.label
	}
})

export default ResetButton;
