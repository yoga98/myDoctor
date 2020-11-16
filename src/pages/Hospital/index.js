import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import { colors, fonst } from '../.././/utils'
import { DummyHospital1, DummyHospital2, DummyHospital3 } from '../../assets'
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
            {/* membuat view untuk menyimpan conten rumah sakit 
            propos name type pic di panggil disini 
            */}
            <View style={styles.content}>
               <ListHospital type="Rumah Sakit " name="Citra Bunga Lestari" address="Jln. Sejahtera 20" pic={DummyHospital1}/>
               <ListHospital type="Rumah Sakit Anak" name="Happy Familiy Kids" address="Jln. Sejahtera 20" pic={DummyHospital2}/>
               <ListHospital type="Rumah Sakit Jiwa" name="Tingkatan Paling Atas" address="Jln. Sejahtera 20" pic={DummyHospital3}/>
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