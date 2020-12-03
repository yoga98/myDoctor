import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { showMessage } from 'react-native-flash-message'
import { Button, Gap, Header, Input, Profile } from '../../components'
import { Fire } from '../../config'
import { colors, getData, storeData } from '../../utils'
import ImagePicker from 'react-native-image-picker';
import { ILNullPhoto } from '../../assets'
const index = ({ navigation }) => {
    const [profile, setProfile] = useState({
        fullName: '',
        profesional: '',
        email: '',
    })
    //untuk password update/ganti harus terpisah
    const [password, setPassword] = useState('')
    const [photo, setPhoto] = useState(ILNullPhoto)
    const [photodb, setPhotoDb] = useState('')
    useEffect(() => {
        getData('user')
            .then(res => {
                const data = res;
                setPhoto({ uri: res.photo })
                setProfile(data)
            });
    }, [])
    //buat fungsi update
    const update = () => {
        console.log('profile :', profile)
        console.log('new Password', password)
        if (password.length > 0) {
            if (password.length < 6) {
                showMessage({
                    message: 'Password Kurang dari 6 karakter',
                    type: 'default',
                    backgroundColor: colors.error,
                    color: 'white',
                })
            } else {
                //update password disini
               updatePassword()
               updateProfileData();
               navigation.replace('MainApp');
            }
        } else {
           updateProfileData();
           navigation.replace('MainApp');

        }


    }
    //buat fungsiPassword
    const updatePassword = () => {
        //update password disini
        Fire.auth().onAuthStateChanged(user => {
            if (user) {
                //update pass
                user.updatePassword(password)
                    .catch(err => {
                        showMessage({
                            message: err.message,
                            type: 'default',
                            backgroundColor: colors.error,
                            color: 'white'
                        })
                    })
            }
        })
    }
    //buat fungsi jika tidak ada perubahan
    const updateProfileData = () => {
        const data = profile;
        data.photo = photodb;
        Fire.database()
            .ref(`users/${profile.uid}/`)
            .update(data)
            .then(() => {
                console.log('succes :');
                storeData('user', data)
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
    const changeText = (key, value) => {
        // copy data lama
        setProfile({
            ...profile, [key]: value
        })
    }
    //buat fungsi image
    const getImage = () => {
        ImagePicker.launchImageLibrary(
            { quality: 0.5, maxHeight: 200, maxWidth: 200 }, (response) => {
                //same code as in above section
                console.log('response:', response);
                //jika tidak jadi upload
                if (response.didCancel || response.error) {
                    showMessage({
                        message: 'Oops,Sepertinya anda tidak memilih Photonya?',
                        type: 'default',
                        backgroundColor: colors.error,
                        color: colors.white
                    });
                } else {
                    // console.log('response getImage :', response); cek console 
                    setPhotoDb(`data: ${response.type};base64,${response.data}`); //menggunakan ES6 dan photoDb akan di simpan di firebase  
                    const source = { uri: response.uri }; //memanggil source baru dari sebuah uri yang diman dari library kita sendiri
                    setPhoto(source)
                }
            }
        )
    }

    return (
        <View style={styles.page}>
            <Header title="Edit Profile" onPress={() => navigation.goBack()} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.content}>
                    <Profile isRemove photo={photo} onPress={getImage} />
                    <Gap height={26} />
                    <Input label="Full Name" value={profile.fullName} onChangeText={(value) => changeText('fullName', value)} />
                    <Gap height={24} />
                    <Input label="Pekerjaan" value={profile.profesional} onChangeText={(value) => changeText('profesional', value)} />
                    <Gap height={24} />
                    <Input label="Email" value={profile.email} disable />
                    <Gap height={24} />
                    <Input label="Password"
                        value={profile.password}
                        secureTextEntry
                        onChangeText={value => setPassword(value)}
                    />
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
