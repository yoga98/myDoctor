import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Gap, Header, Profile, ProfileItem } from '../../components'
import { colors } from '../../utils'

const index = () => {
    return (
        <View style={styles.page}>
            <Header title="Doctor Profile" />
            <Profile name="Alexsandria Nairo Putri" desc="Dokter Anak" />
            <Gap height={10} />
            <ProfileItem label="Alumnus" value="Universitas Indonesia" />
            <ProfileItem label="Tempat Praktik" value="Rumah Sakit Umum, Bandung" />
            <ProfileItem label="No. STR" value="0000116622081996 " />
            <View style={styles.wrapper}>
                <Button title="Start Consultation" />
            </View>
        </View>
    )
}

export default index

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.white,
        flex: 1
    },
    wrapper:{paddingHorizontal:40, paddingTop:23}
})
