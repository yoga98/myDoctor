import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { DumyUser, ILNullPhoto } from '../../../assets';
import { colors, fonst, getData } from '../../../utils';

const HomeProfile = ({ onPress }) => {
    const [profile, setProfile] = useState({
        photo: ILNullPhoto,
        fullName: '',
        profesional: '',
    });
    useEffect(() => {
        getData('user').then(res => {
            // console.log('data user:', res);
            const data= res;
            data.photo = {uri: res.photo};
            console.log('new profile :', data)
            setProfile(res);
        });
    }, [])        
 

   // useEffect(() => {
     //   getData('user').then(res => {
       //     console.log('data user:', res) //cara cek data di debug
            //set data base64
            // const data = res;
            // data.photo = { uri: res.photo };
            //data dirubah menggunakan setprofile res
            // console.log('new profile:', data);
         //   setProfile(res);
    //     });
    // }, [])

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Image source={profile.photo} style={styles.avatar} />
            <View>
    <Text style={styles.name}>{profile.fullName}</Text>
    <Text style={styles.profesional}>{profile.profesional}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default HomeProfile

const styles = StyleSheet.create({
    container: { flexDirection: 'row' },
    avatar: {
        width: 46,
        height: 46,
        borderRadius: 46 / 2,
        marginRight: 12
    },
    name: {
        fontSize: 16,
        fontFamily: fonst.primary[600],
        color: colors.text.primary,
        textTransform: 'capitalize',
    },
    profesional: {
        fontSize: 12,
        textTransform: 'capitalize',
        fontFamily: fonst.primary[400], color: colors.text.secondary
    }
})
