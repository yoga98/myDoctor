import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import { colors, fonst } from '../.././/utils'
import { ILBgHospital } from '../../assets/ilustrasion'
import { ListHospital } from '../../components'
const Hospital = () => {
    return (
        <View style={styles.page}>
            {/* ImageBackground lebih mirip pembungkus  bisa memuat componetn
            sedang kan image tidak bisa memuat component*/}
            <ImageBackground source={ILBgHospital} style={styles.background}>
                <Text style={styles.title}>Nearby Hospital</Text>
                <Text style={styles.desc}>3 Tersedia</Text>
            </ImageBackground>
            {/* membuat view untuk menyimpan conten rumah sakit */}
            <View style={styles.content}>
               <ListHospital/>
               <ListHospital/>
               <ListHospital/>
            </View>
        </View>
    )
}

export default Hospital

const styles = StyleSheet.create({
    page: { backgroundColor: colors.secondary, flex: 1 },
    background: { height: 240, paddingTop: 30 },
    title: {
        fontSize: 20,
        fontFamily: fonst.primary[600],
        textAlign: 'center',
        color: colors.white
    },
    desc: {
        fontSize: 14,
        fontFamily: fonst.primary[300],
        color: colors.white,
        marginTop: 6,
        textAlign: 'center'
    },
    content: {
        backgroundColor: colors.white,
        borderRadius: 20,
        flex: 1,
        paddingTop:14,
        marginTop: -30 //minus ini menambah tinggi border radius
    }

})