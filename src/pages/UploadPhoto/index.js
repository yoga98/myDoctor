import React, { useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { showMessage } from 'react-native-flash-message'
import ImagePicker from 'react-native-image-picker'
import { IconAddPhoto, IconRemovePhoto, ILNullPhoto } from '../../assets'
import { Button, Gap, Header, Link } from '../../components'
import { Fire } from '../../config'
import { colors, fonst } from '../../utils'
//pemanggilan image menggunakan objek bawaan react-native
//tambah props
const UploadPhoto = ({ navigation, route }) => {
    const {fullName, profesional, uid } = route.params; //parameter ini akan dikirim ke halam upload photos
    const [photoDb, setPhotoDb] = useState('')
    const [hasPhoto, setHasPhoto] = useState(false) 
    const [photo, setPhoto] = useState(ILNullPhoto)

    //buat fungsi panggil image library
    const getImage = () => {
        ImagePicker.launchImageLibrary({}, (response) => {
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
                setPhotoDb (`data: ${response.type};base64,${response.data}`); //menggunakan ES6 dan photoDb akan di simpan di firebase  
                const source = { uri: response.uri }; //memanggil source baru dari sebuah uri yang diman dari library kita sendiri
                setPhoto(source);
                setHasPhoto(true);
            }
        });
    }
    // ketika sudah upload photo langsung ke sini
    const uploadEndContinue = () =>{
        Fire
        .database()
        .ref('users/' + uid + '/') //panggil fungsi database
        .update({photo:photoDb});
        navigation.replace('MainApp')
    }
    return (
        <View style={styles.page}>
            <Header title="Upload Photo" onPress={() => navigation.goBack()} />
            <View style={styles.content}>
                <View style={styles.profile}>
                    <TouchableOpacity style={styles.avatarWallpaper} onPress={getImage}>
                        <Image source={photo} style={styles.avatar} />
                        {hasPhoto && <IconRemovePhoto style={styles.addPhoto} />}
                        {!hasPhoto && <IconAddPhoto style={styles.addPhoto} />}

                    </TouchableOpacity>
                    <Text style={styles.name}>{fullName}</Text>
                    <Text style={styles.profesiosnal}>{profesional}</Text>
                </View>
                <View>
                    <Button
                        disable={!hasPhoto}
                        title="Upload and Continue"
                        onPress={uploadEndContinue }
                    />
                    <Gap height={30} />
                    <Link title="Skip for this" align="center" size={16} onPress={() => navigation.replace('MainApp')} />
                </View>
            </View>
        </View>
    )
}

export default UploadPhoto

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.white,
        flex: 1
    },
    content: {
        paddingHorizontal: 40,
        paddingBottom: 64,
        flex: 1,
        justifyContent: "space-between"
    },
    profile: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    avatar: {
        height: 110,
        width: 110,
        borderRadius: 110 / 2
    },
    avatarWallpaper: {
        height: 130,
        width: 130,
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 130 / 2, //artinya semua sisi di bagi 2
        alignItems: 'center',
        justifyContent: "center"
    },
    //postion absolute agar bisa terbang kemana saja
    addPhoto: {
        position: 'absolute',
        bottom: 8,
        right: 6
    },
    name: {
        fontSize: 24,
        color: colors.text.primary,
        fontFamily: fonst.primary[600],
        textAlign: "center"
    },
    profesiosnal: {
        fontSize: 12,
        fontFamily: fonst.primary.normal,
        textAlign: "center",
        color: colors.text.secondary,
        marginTop: 4
    }
})
