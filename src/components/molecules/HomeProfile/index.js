import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { DumyUser } from '../../../assets'
import { fonts, colors, fonst } from '../../../utils'

const HomeProfile = () => {
    return (
        <View style={styles.container}>
            <Image source={DumyUser} style={styles.avatar} />
            <View>
                <Text style={styles.name}>Shayna Melinda</Text>
                <Text style={styles.profesional}>Product Desainer</Text>
            </View>
        </View>
    )
}

export default HomeProfile

const styles = StyleSheet.create({
    container: { flexDirection: 'row' },
    avatar: {
        width: 46,
        height: 46,
        borderRadius: 46 / 2,
        marginRight:12
    },
    name: {
        fontSize: 16,
        fontFamily: fonst.primary[600],
        color: colors.text.primary
    },
    profesional:{fontSize:12,
    fontFamily:fonst.primary[400],color:colors.text.secondary}
})
