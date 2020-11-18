import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { IconAddPhoto, ILNullPhoto } from '../../assets'
import { Button, Gap, Header, Link } from '../../components'
import { colors, fonst } from '../../utils'
//pemanggilan image menggunakan objek bawaan react-native
const UploadPhoto = ({navigation}) => {
    return ( 
        <View style={styles.page}>
            <Header title="Upload Photo" onPress={()=> navigation.goBack()} />
            <View style={styles.content}>
                <View style={styles.profile}>
                    <View style={styles.avatarWallpaper}>
                        <Image source={ILNullPhoto} style={styles.avatar} />
                        <IconAddPhoto style={styles.addPhoto} />
                    </View>
                    <Text style={styles.name}>Shayna Melinda</Text>
                    <Text style={styles.profesiosnal}>Product Desainer</Text>
                </View>
                <View>
                    <Button title="Upload and Continue" onPress={()=>navigation.replace('MainApp')} />
                    <Gap height={30}/>
                    <Link title="Skip for this"  align="center" size={16} onPress={()=>navigation.replace('MainApp')}/>
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
        paddingBottom:64,
        flex: 1,
        justifyContent: "space-between"
    },
    profile:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    avatar: {
        height: 110,
        width: 110
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
