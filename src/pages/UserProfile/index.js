import React, { useState,useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import { ILNullPhoto } from '../../assets';
import { Gap, Header, List, Profile } from '../../components';
import {getData} from '../../utils';
const index = ({ navigation }) => {
    const [profile, setProfile] = useState({
        fullName: '',
        profesional: '',
        photo:ILNullPhoto,
    })
    useEffect(() => {
        getData('user')
            .then(res => {
                const data = res;
                data.photo ={uri: res.photo}
                setProfile(data);
            });
    }, [])


    //jika list sudah terpanggil dan tidak nampak cek di componen molecus apa saja atribut props yang harus dimiliki
    return (
        <View style={styles.page}>
            <Header title="Profile" onPress={() => navigation.goBack()} />
            <Gap height={10} />
            {/* jika erro text string must be rendered within a <Text></Text> lakukan  kondisi maksud kondisi jika fullName lebih dari 0 atau ada 1 huruf tampilkan*/}
            {profile.fullName.length > 0 && (
                <Profile name={profile.fullName} 
                desc={profile.profesional} 
                photo={profile.photo}
                 />
            )}
            <Gap height={14} />
            <List desc="Last Update yesterday" type="next" name="Edit Profile" icon="edit-profile" onPrees={() => navigation.navigate('UpdateProfile')} />
            <List desc="Last Update yesterday" type="next" name="language" icon="language" />
            <List desc="Last Update yesterday" type="next" name="Rate" icon="rate" />
            <List desc="Last Update yesterday" type="next" name="Help" icon="help" />
        </View>
    )
}

export default index

const styles = StyleSheet.create({
    page: { flex: 1, backgroundColor: 'white' }
})
