import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { colors, fonst } from '../../../utils'
import { Button } from '../../atoms'

const DarkProfile = ({ onPress, title, desc, photo }) => {
    return (
        <View style={styles.container} >
            <Button type="icon-only" icon="back-light" onPress={onPress} />
            <View style={styles.conten}>
                <Text style={styles.name}>{title}</Text>
                <Text style={styles.des}>{desc}</Text>
            </View>
            <Image source={photo} style={styles.avatar} />
        </View>
    )
}

export default DarkProfile

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.secondary, paddingVertical: 30,
        paddingLeft: 20,
        paddingRight: 16,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        flexDirection: 'row',
        alignContent: 'center'
    },
    conten: { flex: 1 },
    avatar: { borderRadius: 46 / 2, width: 46, height: 46 },
    name: {
        fontSize: 20,
        fontFamily: fonst.primary[600],
        color: colors.white,
        textAlign: "center"
    },
    des: {
        fontSize: 14,
        fontFamily: fonst.primary.normal,
        marginTop: 6,
        textAlign: 'center',
        color: colors.text.subTitle,
        textTransform:'capitalize'
    }
})
