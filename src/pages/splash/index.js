import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ILLogo } from '../../assets';
import { colors, fonst } from '../../utils';
import { Fire } from '../../config';
const Splash = ({ navigation }) => {
    //useeffect adalah adalah hooks pada reactnative
    //setTime mengatur durasi berapa lama akan muncul/keluar 
    useEffect(() => {
        const unsubscibe = Fire.auth().onAuthStateChanged((user) => {
            setTimeout(() => {
                //*cek user masih login teknik  session 
                if (user) {
                    //user login
                    console.log('user :', user)
                    navigation.replace('MainApp')
                }
                else {
                    //user logout
                    navigation.replace('GetStarted')
                }
            }, 3000);
        });
        return () => unsubscibe(); // dibersihkan ketika bug splash screen ini cara membersihkan logic 
    }, [navigation]);
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
        fontFamily: fonst.primary[600]
    },
});