import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { DumyDoctor2 } from '../../assets'
import { Header, List } from '../../components'
import { Fire } from '../../config'
import { colors } from '../../utils'

const ChooseDoctor = ({ navigation, route }) => {
    const [listDoctor, SetListDoctors] = useState([])
    const itemCategory = route.params;
    useEffect(() => {
        callDoctorByCategori(itemCategory.category)
    }, [itemCategory.category])
    const callDoctorByCategori = (category) => {
        //dokter umum,psikirater
        Fire.database().ref('doctors/').orderByChild('category').equalTo(category).once('value').then(res => {
            console.log('data list doctor:', res.val())
            if (res.val()) {
                const OldData = res.val()
                const data = []
                Object.keys(OldData).map(item => {
                    data.push({
                        id: item,
                        data: OldData[item]
                    })
                })
                SetListDoctors(data);
            }
        });
    }
    return (
        <View style={styles.page}>
            <Header type="dark" title={`Pilih ${itemCategory.category}`} onPress={() => navigation.goBack()} />
            {listDoctor.map(doctor => {
                return (
                    <List
                        type="next" profile={{ uri: doctor.data.photo }} key={doctor.id} name={doctor.data.fullName}
                        desc={doctor.data.gender}
                        onPrees={() => navigation.navigate('DoctorProfile',doctor)}
                    />
                )
            })}
            {/*pemanggilan secara statis
              <List type="next" profile={DumyDoctor2} name="Alexsander " desc="laki" />
            <List type="next" profile={DumyDoctor2} name="Alexsander " desc="laki" />
            <List type="next" profile={DumyDoctor2} name="Alexsander " desc="laki" />
            <List type="next" profile={DumyDoctor2} name="Alexsander " desc="laki" /> */}
        </View>
    )
}

export default ChooseDoctor

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.white,
        flex: 1
    }
})
