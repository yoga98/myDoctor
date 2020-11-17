import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { colors, fonst } from '../../../utils'
import { Button } from '../../atoms'

const InputChat = () => {
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder="Tulis Pesan Untuk Nairo " />
            <Button type="btn-icon-send" />
        </View>
    )
}

export default InputChat

const styles = StyleSheet.create({
    container: { padding: 16, flexDirection: 'row' },
    input: {
        backgroundColor: colors.disable,
        padding: 14,
        borderRadius: 10,
        flex: 1,
        marginRight: 10,
        fontFamily:fonst.primary.normal,
        fontSize:14,
        maxHeight:45
    }
})
