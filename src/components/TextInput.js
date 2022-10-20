import React from 'react';
import {TextInput as RnTextInput, StyleSheet, View, Text} from 'react-native';
import {colors} from "../utils";

const TextInput = (props) => {
	const {value, onChangeText, label, containerStyle} = props;
	return (
		<View style={[styles.container, containerStyle && containerStyle]}>
			<RnTextInput keyboardType={'numeric'} value={value} onChangeText={onChangeText} style={styles.input} />
			<Text style={styles.label}>{label}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	input: {
		flex:1,
		height: 30,
		borderWidth: 0.5,
		borderColor: colors.main,
		borderRadius: 20,
		paddingHorizontal: 10,
		color: colors.main
	},
	label: {
		color: colors.main,
		marginLeft: 10
	}
})
export default TextInput;
