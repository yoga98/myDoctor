import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { colors } from '../../../utils';

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
    //jika typenya container stylenya ini
    constainer: type => ({
        backgroundColor: type === colors.button.secondary.background ? 'white' : colors.button.primary.background,
        paddingVertical: 10,
        borderRadius: 10,
    }),
    //jika type text maka munculkan ini
    text: (type) => (
        {
            fontSize: 16,
            fontWeight: '600',
            fontFamily: 'Nunito-SemiBold',
            textAlign: "center",
            color: type === colors.button.secondary.text ? '#112340' : colors.button.primary.text
        }
    )
});
