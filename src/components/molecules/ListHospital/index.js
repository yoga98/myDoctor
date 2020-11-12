import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { DummyHospital1 } from '../../../assets'
import { colors, fonst } from '../../../utils'

const ListHospital = () => {
    return (
        <View style={styles.container}>
            <Image source={DummyHospital1} style={styles.picture} />
            {/* agar sejajar teks maka dibungkus kembali oleh View */}
            <View>
                <Text style={styles.title}>Rumah Sakit</Text>
                <Text style={styles.title}>Citra Bunga Merdeka</Text>
                <Text style={styles.addres}>Jln. Surya Sejahtera 20</Text>
            </View>
        </View>
    )
}

export default ListHospital

const styles = StyleSheet.create({
    picture: {
        width: 80,
        height: 60,
        borderRadius: 11,
        marginRight: 16
    },
    container: {
        flexDirection: 'row', 
        padding: 16, borderBottomWidth: 1,
        borderBottomColor: colors.border,
    },title:{
        fontSize:16,
        fontFamily:fonst.primary.normal,
        color:colors.text.primary
    },addres:{
        fontSize:12,
        fontFamily:fonst.primary[300],
        color:colors.text.secondary,
        marginTop:6
    }
})
