import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Button = ({ type, title }) => {
    return (
        <View style={styles.constainer(type)}>
            <Text style={styles.text(type)}>{title}</Text>
        </View>
    )
}

export default Button;
const styles = StyleSheet.create({
    constainer: type => ({
        backgroundColor: type === 'secondary' ? 'white' : '#0BCAD4',
        paddingVertical: 10,
        borderRadius: 10,
    }),
    text: (type) => (
        {
            fontSize: 16,
            fontWeight: '600',
            fontFamily:'Nunito-SemiBold',
            textAlign: "center",
            color: type === 'secondary' ? '#112340' : '#fff'
        }
    )
});
