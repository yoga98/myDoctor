import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { DumyNews1 } from '../../../assets'
import { colors, fonst } from '../../../utils'

const NewsItem = () => {
    return (
        <View style={styles.container}>
            <View style={styles.wrapperTittle}>
                <Text style={styles.title}>Is it safe stay at home during coronavirus?</Text>
                <Text style={styles.date}>Today</Text>
            </View>
            <Image source={DumyNews1} style={styles.Image} />
        </View>
    )
}

export default NewsItem

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: colors.border,
        paddingBottom: 12,
        paddingTop: 16,
        paddingHorizontal:16
    },
    title: {
        fontSize: 16,
        fontFamily: fonst.primary[600],
        color: colors.text.primary,
        maxWidth:'90%'
    },
    wrapperTittle: { flex: 1 },
    date: {
        fontSize: 12,
        fontFamily: fonst.primary.normal,
        color: colors.text.primary,
        marginTop: 4
    },
    Image: { height: 80, width: 60, borderRadius: 11 }

})
