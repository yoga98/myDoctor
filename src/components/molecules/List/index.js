import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { IconEditProfile, IconHelp, IconLanguage, IconNext, IconRate } from '../../../assets'
import { colors, fonst } from '../../../utils'
//buat propos objek
//kondisi type yang muncul ketika pilih dokter ada tombol next atau tidak
//membuat kondisi menggunakan if Icon
const List = ({ profile, name, desc, type, onPrees,icon }) => {
    const Icon = () => {
        if (icon === 'edit-Profile') {
            return <IconEditProfile />
        }
        if (icon === 'language') {
            return <IconLanguage />
        }
        if (icon === 'rate') {
            return <IconRate />
        }
        if (icon === 'help') {
            return <IconHelp />
        }
        return <IconEditProfile />
    }
    return (
        <TouchableOpacity style={styles.container} onPress={onPrees} >
            {/* condisi dimana jika yg di munculkan adalah icon maka icon
            tapi jika bukan icon maka profile */}

            { icon ? <Icon /> : <Image source={profile} style={styles.avatar} />}
            <View style={styles.content}>
                <Text style={styles.name}>{name} </Text>
                <Text style={styles.desc}>{desc}</Text>
            </View>
            {
                type === 'next' && <IconNext />
            }
        </TouchableOpacity>
    )
}

export default List

const styles = StyleSheet.create({
    avatar: {
        width: 46, height: 46,
        borderRadius: 46 / 2,
      

    },
    content: { flex: 1, marginLeft:16},
    container: {
        flexDirection: 'row',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    name: {
        fontSize: 16,
        fontFamily: fonst.primary.normal
    },
    desc: {
        fontSize: 12,
        fontFamily: fonst.primary[333]
    }
})
