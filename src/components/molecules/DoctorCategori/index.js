import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { ILCatObat, ILCatPsikiater, ILCatUmum } from '../../../assets'
import { fonst } from '../../../utils'
import { colors } from '../../../utils/color'

//buat props categori dalam objek

const DoctorCategori = ({ category ,onPress}) => {
    //agar icon dinamis berumah diberi kondisi
    //lalu di panggil di dalam view
    //lalu akan muncul di Page Doctro Categori
    const Icon = () => {
        if (category === 'dokter umum') {
            return <ILCatUmum style={styles.illustration} />
        }
        if (category === 'psikiater') {
            return <ILCatPsikiater style={styles.illustration} />
        }
        if (category === 'dokter obat') {
            return <ILCatObat style={styles.illustration} />
        }
        return <ILCatUmum style={styles.illustration} />
    }
    // agarbisa di klik pada card dokter gunakan TouchableOpacity 
    return (
        <TouchableOpacity style={styles.container} onPress={onPress} >
            <Icon />
            <Text style={styles.label}>Saya Butuh</Text>
            <Text style={styles.category}>{category}</Text>
        </TouchableOpacity>
    )
}

export default DoctorCategori
//alignSelf : flex-start akan mengikuti ukuran
const styles = StyleSheet.create({
    container: {
        padding: 12,
        backgroundColor: colors.CardLight,
        alignSelf: 'flex-start',
        borderRadius: 10,
        marginRight: 10,
        height: 130,
        width: 100
    },
    illustration: { marginBottom: 28 },
    label: { fontSize: 12, fontFamily: fonst.primary[300], color: colors.text.primary },
    categori: { fontSize: 12, fontFamily: fonst.primary[600], color: colors.text.primary, width: 80 }
})
