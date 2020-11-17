import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { IconNext } from '../../../assets'
import { colors, fonst } from '../../../utils'
//buat propos objek
//kondisi type yang muncul ketika pilih dokter ada tombol next atau tidak
const ListDoctor = ({profile,name,desc,type,onPrees}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPrees} >
            <Image source={profile} style={styles.avatar} />
            <View style={styles.wrapper}>
                <Text style={styles.name}>{name} </Text>
                <Text style={styles.desc}>{desc}</Text>
            </View>
            {
                type === 'next' && <IconNext/>
            }
        </TouchableOpacity>
    )
}

export default ListDoctor

const styles = StyleSheet.create({
    avatar: {
        width: 46, height: 46,
        borderRadius: 46 / 2,
        marginRight: 12,
       
    },
    wrapper:{flex:1},
    container: {
        flexDirection: 'row',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
        alignItems:'center',
        justifyContent:'space-between'
    },
    name: {
        fontSize: 16,
        fontFamily: fonst.primary.normal
    },
    desc:{fontSize:12,
    fontFamily: fonst.primary[333]}
})
