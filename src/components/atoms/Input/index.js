import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { Value } from 'react-native-reanimated';
import { colors, fonst } from '../../../utils';
//*label adalah bagian dari prop yang di munculkan di halaman login
//*untuk memanggil useState harus di import dari React
//membuat props value dan onChangeText untuk menerima masukan pada inputan
const Input = ({ label, value, onChangeText,secureTextEntry}) => {
    //* buat useState yang di beri nama border, dan setBorder yg mengsilkan useState colors.border
    const [border, setBorder] = useState(colors.border);
    //* panggil Props onFocus yang isinya dibawah in
    const onFocusForm = () => {
        setBorder(colors.tertiary);
    };
    const onBlurForm = () => {
        setBorder(colors.border)
    };
    return (
        <View>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                onFocus={onFocusForm}
                onBlur={onBlurForm}
                style={styles.input(border)}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
            />
        </View>
    )
}

export default Input;

const styles = StyleSheet.create({
    input: (border) => ({
        borderWidth: 1,
        borderColor: border,
        borderRadius: 10,
        padding: 12
    }),
    label: {
        fontSize: 16,
        color: colors.text.secondary,
        marginBottom: 6,
        fontFamily: fonst.primary[400]
    }
})
