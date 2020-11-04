import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ILLogo } from '../../assets';
import { colors } from '../../utils';

const Splash = ({ navigation }) => {
    //useeffect adalah adalah hooks pada reactnative
    //setTime mengatur durasi berapa lama akan muncul/keluar 
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('GetStarted')
        }, 3000)
    });
    return (
        <View style={styles.page} >
            <ILLogo />
            <Text style={styles.title}>My Doctor</Text>
        </View >
    );
};
export default Splash;

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.white,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 20,
        marginTop: 20,
        fontWeight: '600',
        color: colors.text.primary,
        fontFamily: "Nunito-SemiBold"
    },
});