import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {colors} from "../utils";

const Menu = (props) => {
    const {onPress, active} = props;

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => onPress('imperial')}
                              style={[styles.menuContainer, styles.leftContainer, active === 'imperial' && styles.activeMenu]}>
                <Text style={[styles.text, active === 'imperial' && styles.activeMenu]}>Imperial</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onPress('metric')}
                              style={[styles.menuContainer, styles.rightContainer, active === 'metric' && styles.activeMenu]}>
                <Text style={[styles.text, active === 'metric' && styles.activeMenu]}>Metric</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
    },
    text: {
        color: colors.main
    },
    activeMenu: {
        backgroundColor: colors.main,
        color: colors.secondary
    },
    rightContainer: {
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
    },
    leftContainer: {
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
    },
    menuContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primary,
        padding: 10
    }
})

export default Menu;
