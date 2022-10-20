import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from "react-native";
import {colors} from "../utils";

const SaveButton = (props) => {
	const {onPress, containerStyle} = props;
	return (
		<TouchableOpacity onPress={onPress} style={[styles.container, containerStyle && containerStyle]}>
			<Text style={styles.text}>Save to disk</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.primary,
		paddingHorizontal: 30,
		paddingVertical: 8,
		borderRadius: 30,
	},
	text: {
		color: colors.main
	}
})

export default SaveButton;
