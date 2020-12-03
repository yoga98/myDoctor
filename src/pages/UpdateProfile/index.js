import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Button, Gap, Header, Input, Profile } from '../../components'
import { colors, getData } from '../../utils'
import { Fire } from '../../config'
import { showMessage } from 'react-native-flash-message'
import { color } from 'react-native-reanimated'
const index = ({ navigation }) => {
    const [profile, setProfile] = useState({
        fullName: '',
        profesional: '',
        email: '',
    })
    //untuk password update/ganti harus terpisah
    const [password, setPassword] = useState('')
    useEffect(() => {
        getData('user')
            .then(res => {
                const data = res;
                data.photo = { uri: res.photo }
                setProfile(data)
            });
    }, [])
    //buat fungsi update
    const update = () => {
        console.log('profile :', profile)
        const data = profile;
        data.photo = profile.photo.uri
        Fire.database()
            .ref(`users/${profile.uid}/`)
            .update(profile)
            .then(() => {
                console.log('succes :', )
            })
            .catch(err => {
                showMessage({
                    message: err.message,
                    type: 'default',
                    backgroundColor: colors.error,
                    color: colors.white
                })
            })
    }
    //buat fungsi agar bisa mengganti agar bisa digunakan banyak
    const changeText=(key, value) =>{
        // copy data lama
        setProfile({
            ...profile,[key]:value
        })
    }
    return (
        <View style={styles.page}>
            <Header title="Edit Profile" onPress={() => navigation.goBack()} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.content}>
                    <Profile isRemove photo={profile.photo} />
                    <Gap height={26} />
                    <Input label="Full Name" value={profile.fullName} onChangeText={(value)=> changeText('fullName',value)}/>
                    <Gap height={24} />
                    <Input label="Pekerjaan" value={profile.profesional} onChangeText={(value)=> changeText('profesional',value)}/>
                    <Gap height={24} />
                    <Input label="Email" value={profile.email} disable />
                    <Gap height={24} />
                    <Input label="Password" value={profile.password} />
                    <Gap height={40} />
                    <Button title="Save Profile" onPress={update} />

                </View>
            </ScrollView>
        </View>
    )
}

export default index

const styles = StyleSheet.create({
    page: { flex: 1, backgroundColor: colors.white },
    content: { padding: 40, paddingTop: 0 }
})
