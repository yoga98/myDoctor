import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import { ILBgHospital } from '../../assets/ilustrasion'
import {colors, fonst} from '../.././/utils'
const Hospital = () => {
    return (
        <View>
            {/* ImageBackground lebih mirip pembungkus 
            */}
            <ImageBackground source={ILBgHospital} style={styles.background}>
                <Text style={styles.title}>Nearby Hospital</Text>
                <Text>3 Tersedia</Text>
            </ImageBackground>
            <Text>Hospital Page</Text>
        </View>
    )
}

export default Hospital

const styles = StyleSheet.create({
    background:{height:240},
    title:{
        fontSize:20,
        fontFamily: fonst.primary[600],
        textAlign:'center',
        color:colors.white
    }

})