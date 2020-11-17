import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { DumyDoctor7 } from '../../../assets'
import { colors, fonst } from '../../../utils'

const Other = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.avatar} source={DumyDoctor7} />
            <View>
                <View style={styles.chatContent}>
                    <Text style={styles.text}>Ibu dokter, apakah memakan jeruk tiap hari itu buruk?</Text>
                </View>
                <Text style={styles.date}>4.20 AM</Text>
            </View>
        </View>
    )
}

export default Other;

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        alignItems: 'flex-end',
        paddingLeft: 16,
        flexDirection: 'row'
    },
    chatContent: {
        maxWidth: '80%',
        borderRadius: 10,
        padding: 12,
        paddingLeft: 18,
        backgroundColor: colors.primary,
        borderBottomLeftRadius: 0
    },
    text: {
        fontSize: 14,
        fontFamily: fonst.primary.normal,
        color: colors.white
    },
    date: {
        fontSize: 11,
        fontFamily: fonst.primary.normal,
        color: colors.text.secondary,
        marginTop: 8
    },
    avatar: {
        width: 30,
        height: 30,
        borderRadius: 30 / 2,
        marginRight: 12
    }
})
