import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { IconStart } from '../../../assets'
import { colors, fonst } from '../../../utils'

const RatedDoctor = ({onPress,name,desc,avatar}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Image source={avatar} style={styles.avatar} />
            <View style={styles.profile}>
                <Text styel={styles.name}>{name}</Text>
                <Text style={styles.categori}>{desc}</Text>
            </View>
            <View style={styles.rate}>
                <IconStart />
                <IconStart />
                <IconStart />
                <IconStart />
                <IconStart />
            </View>
        </TouchableOpacity>
    )
}

export default RatedDoctor

const styles = StyleSheet.create({
    container: { flexDirection: 'row', justifyContent:'space-between',paddingBottom:16},
    avatar: { width: 50, height: 50, borderRadius: 50 / 2 ,marginRight:12},
    rate: { flexDirection: 'row' },
    name: {
        fontSize: 16,
        fontFamily: fonst.primary[600],
        color: colors.text.primary
    },
    categori:{
        fontSize:12,
        fontFamily:fonst.primary.normal,
        color:colors.text.secondary,
        marginTop:2
    },
    profile:{
        flex:1
    }
})
