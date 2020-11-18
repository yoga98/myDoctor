import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {Gap, Header, List, Profile} from '../../components'
const index = ({navigation}) => {
    //jika list sudah terpanggil dan tidak nampak cek di componen molecus apa saja atribut props yang harus dimiliki
    return (
        <View style={styles.page}>
            <Header title="Profile"/>
            <Gap height={10}/>
            <Profile/>
            <Gap height={14}/>
            <List desc="Last Update yesterday" type="next" name="Edit Profile" icon="edit-profile" onPrees={ () => navigation.navigate('UpdateProfile')} />
            <List desc="Last Update yesterday" type="next" name="Edit Profile" icon="language"/>
            <List desc="Last Update yesterday" type="next" name="Edit Profile" icon="rate"/>
            <List desc="Last Update yesterday" type="next" name="Edit Profile" icon="help"/>
        </View>
    )
}

export default index

const styles = StyleSheet.create({
    page:{flex:1, backgroundColor:'white'}
})
