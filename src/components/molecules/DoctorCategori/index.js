import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ILCatUmum } from '../../../assets'
import { fonst } from '../../../utils'
import { colors } from '../../../utils/color'
const DoctorCategori = () => {
    return (
        <View style={styles.container}>
            <ILCatUmum style={styles.illustration}/>
            <Text style={styles.label}>Saya Butuh</Text>
            <Text style={styles.categori}>Dokter Umum</Text>
        </View>
    )
}

export default DoctorCategori
//alignSelf : flex-start akan mengikuti ukuran
const styles = StyleSheet.create({
    container:{
        padding:12, 
        backgroundColor:colors.CardLight,
        alignSelf:'flex-start',
        borderRadius:10,
        marginRight:10,
        height:130,
        width:100 
    },
    illustration:{marginBottom:28},
    label:{fontSize:12,fontFamily:fonst.primary[300], color:colors.text.primary},
    categori:{fontSize:12,fontFamily:fonst.primary[600], color:colors.text.primary, width:80}
})
 