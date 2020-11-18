import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { DumyUser } from '../../../assets'
import { colors, fonst } from '../../../utils'

const index = () => {
    return (
        <View style={styles.container}>
            <View style={styles.borderProfile}>
                <Image source={DumyUser} style={styles.avatar} />
            </View>
            <Text style={styles.name}>Sahyana Putri</Text>
            <Text style={styles.profession}>Product Desainer</Text>
        </View>
    )
}

export default index

const styles = StyleSheet.create({
    container: { justifyContent: 'center', alignItems: 'center' },
    avatar: { width: 110, height: 110, borderRadius: 110 / 2 },
    borderProfile: {
        width: 130,
        height: 130,
        borderRadius: 130 / 2,
        borderWidth: 1,
        borderColor: colors.border,
        justifyContent: 'center',
        alignItems:"center"
    },
    name: {
        fontFamily: fonst.primary[600],
        fontSize: 20,
        color: colors.text.primary,
        marginTop: 16
    },
    profession: {
        fontSize: 16,
        fontFamily: fonst.primary[600],
        color: colors.text.secondary,
        marginTop: 2
    }
})
