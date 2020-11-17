import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { IconDarkBack, IconLightkBack } from '../../../assets'
//iconOnly ini akan muncul di Index Button
//dan akan menerima parameter onPress dan icon (icon primary/secondary)
const IconOnly = ({ onPress, icon }) => {
    //buat kondisi untuk icon
    const Icon = () => {
        if (icon === 'back-dark') {
            return (<IconDarkBack />)
        }
        if (icon === 'back-light') {
            return (<IconLightkBack />)
        }
        return <IconDarkBack />
    };
    //maka Icon bisa di klik
    return (
        <TouchableOpacity onPress={onPress}>
            <Icon />
        </TouchableOpacity>
    )
}

export default IconOnly
