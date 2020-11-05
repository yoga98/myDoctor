import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { IconDoctor, IconDoctorACtive, IconHospital, IconHospitalActive, IconMessage, IconMessageActive } from '../../../assets';
import { colors, fonst } from '../../../utils';

//tab item akan muncul di folder bottom navigation 
//membuat login dengan type icon apa yang muncul 
//buat props title
//maka props active akan di panggin di BottomNavigator
//login dari if ini adalah jika title === doctor lalu aktif maka tampilkan icon doctor active jika tidak icon biasa dan yang lainnya sama 
//onpres dan onlongprees di panggil di bagian TabItem 
const TabItem = ({ title,active,onPress,onLongPress }) => {
    const Icon = () => {
        if (title === 'Doctor') {
            return active ? <IconDoctorACtive/> : <IconDoctor />
        }
        if (title === 'Message') {
            return active ? <IconMessageActive/> : <IconMessage />
        }
        if (title === 'Hospital') {
            return active ? <IconHospitalActive/> : <IconHospital />
        }
        return <IconDoctor />
    };
    return (
        <TouchableOpacity style={styles.container} onPress={onPress} onLongPress={onLongPress}>
            <Icon />
            <Text style={styles.text(active)}>{title} </Text>
        </TouchableOpacity>
    )
}

export default TabItem

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
    },
    text:(active)=> ({
        fontSize: 10,
        color: active ? colors.text.menuActive : colors.text.menuinactive,
        fontFamily: fonst.primary[600],
        marginTop: 4
    })
})
