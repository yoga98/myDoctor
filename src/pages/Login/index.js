import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { showMessage } from 'react-native-flash-message';
import { ScrollView } from 'react-native-gesture-handler';
import { set } from 'react-native-reanimated';
import { ILLogo } from '../../assets';
import { Loading } from '../../components';
import { Button, Gap, Input, Link } from '../../components/atoms';
import { Fire } from '../../config';
import { colors, fonst, storeData, useForm } from '../../utils';

const Login = ({ navigation }) => {
    //*effec loading 
    const [loading, setLoading] = useState(false)

    //* buat useForm
    const [form, setForm] = useForm({
        email: '',
        password: ''
    });
    const login = () => {
        console.log('form :', form)  //cek terlebih dahulu ada apa saja dalam form
        setLoading(true)
        Fire.auth().signInWithEmailAndPassword(form.email, form.password)
            .then(res => {
                console.log('succes :', res);
                setLoading(false);
                //*tambah firebase ambil data local
                Fire.database()
                    .ref(`users/${res.user.uid}/`)
                    //once pemanggilan ke firebase sekali saja
                    .once('value')
                    .then(resDB => {
                        console.log('data user :', resDB.val())
                        //*jika berhasil simpan data local
                        if (resDB.val()) {
                            storeData('user', resDB.val());
                            navigation.replace('MainApp');
                        }
                    })
            })
            .catch(err => {
                console.log('error :', err);
                setLoading(false)
                showMessage({
                    message: err.message,
                    type: 'default',
                    color: colors.white,
                    backgroundColor: colors.error
                })
            });

    }
    return (
        <>
            <View style={styles.page}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Gap height={40} />
                    <ILLogo />
                    <Text style={styles.title}>Mulai dan berkonsultasi</Text>
                    <Input label="Email Address" value={form.email} onChangeText={value => setForm('email', value)} />
                    <Gap height={24} />
                    <Input label="Password" value={form.password} onChangeText={value => setForm('password', value)} secureTextEntry />
                    <Gap height={10} />
                    <Link title="Forgot My Password" size={12} />
                    <Gap height={40} />
                    <Button title="Sign In" onPress={login} />
                    <Gap height={30} />
                    <Link title="Create New Account" size={16} align="center" onPress={() => navigation.navigate('Register')} />
                </ScrollView>
            </View>
            {loading && <Loading />}
        </>
    )
}

export default Login

const styles = StyleSheet.create({
    page: {
        paddingHorizontal: 40,
        backgroundColor: colors.white,
        flex: 1
    },
    title: {
        fontSize: 20,
        fontFamily: fonst.primary[600],
        color: colors.text.primary,
        marginTop: 40,
        marginBottom: 40,
        maxWidth: 153
    }
})
