import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

const Button = ({ type, title, onPress}) => {
    return (
        <TouchableOpacity style={styles.constainer(type)} onPress={onPress}>
            <Text style={styles.text(type)}>{title}</Text>
        </TouchableOpacity>
    )
}
//TouchableOpacity memberikan agar bisa di klik
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
            fontFamily: 'Nunito-SemiBold',
            textAlign: "center",
            color: type === 'secondary' ? '#112340' : '#fff'
        }
    )
});
