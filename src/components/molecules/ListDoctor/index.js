import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { colors, fonst } from '../../../utils'
//buat propos objek
const ListDoctor = ({profile,name,desc}) => {
    return (
        <View style={styles.container}>
            <Image source={profile} style={styles.avatar} />
            <View>
                <Text style={styles.name}>{name} </Text>
                <Text style={styles.desc}>{desc}</Text>
            </View>
        </View>
    )
}

export default ListDoctor

const styles = StyleSheet.create({
    avatar: {
        width: 46, height: 46,
        borderRadius: 46 / 2,
        marginRight: 12,
       
    },
    container: {
        flexDirection: 'row',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
        alignItems:'center'
    },
    name: {
        fontSize: 16,
        fontFamily: fonst.primary.normal
    },
    desc:{fontSize:12,
    fontFamily: fonst.primary[333]}
})
