import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Button, Gap, Header, Input, Loading } from '../../components';
import { colors, useForm } from '../../utils';
import {Fire} from '../../config';
import { showMessage, hideMessage } from "react-native-flash-message";
import { color } from 'react-native-reanimated';

//untuk membuat valeu kosong dan akan berisi maka menggunakan useState
//diberi string kosong karena di awal form tampa isi


const Register = ({ navigation }) => {
    // const [fullname, setFullName] = useState('');
    // const [profesional, setProfesional] = useState('')
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('')

    //panggil useState yg sudah dibuat
    //jadi hanya buat satu useState tidak perlu membuat banyak seperti contoh di atas
    const [form, setForm] = useForm({
        fullname: '',
        profesional: '',
        email: '',
        password: '',
    });

    //buat useState loading aktif/tidak
    const [loading,setLoading] =useState(false)

    // Buat fungsi untuk melakukan pengecekan
    const onContinue = () => {
        console.log(form);
       
        setLoading(true);
        // nama Fire ini di buat di src config
        // kita ambil fungsi firebase yang berada di configurasi
        Fire.auth()
            .createUserWithEmailAndPassword(form.email, form.password)
            .then((succes) => {
                setLoading(false);
                setForm('reset');
                console.log('succes registrasi :', succes)
            })
            .catch((error) => {
                // dibuat arrow Funtion.
                const errorMessage = error.message;
                setLoading(false);
                showMessage({
                    message:errorMessage,
                    type:'default',
                    backgroundColor:colors.error,
                    color:colors.white,
                    
                });
                // console.log('error register :', errorMessage)
             });
    }
    return (
        <>
        <View style={styles.page}>
            {/* artinya navigation.goBack ketika di
            klik maka fungisnya akan kembali ke halaman sebelumnya
             */}
            <Header onPress={() => navigation.goBack()} title="Daftar Akun" />
            <View style={styles.content}>   
                {/*  
                props value berasa dari component Input, lalu isi dari value tersbut di ambil dari useState di atas,
                agar ketika di ketika tidak berubah maka gunakan onChangetext yang berasal dari inputan

                */}
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Input
                        value={form.fullName}
                        label="Full Name"
                        onChangeText={value => setForm('fullName', value)} />
                    <Gap height={24} />
                    <Input value={form.profesional}
                        label="Pekerjaan"
                        onChangeText={value => setForm('profesional', value)} />
                    <Gap height={24} />
                    <Input value={form.email}
                        label="Email"
                        onChangeText={(value) => setForm('email', value)} />
                    <Gap height={24} />
                    <Input value={form.password}
                        label="Password"
                        onChangeText={(value) => setForm('password', value)}
                        secureTextEntry />
                    <Gap height={40} />
                    {/* Naviget untuk berpindah halaman yang dituju */}
                    <Button title="Continue" onPress={onContinue} />
                </ScrollView>
            </View>
        </View>
        {/* tampilan loading jika true */}
        {loading &&  <Loading/> }
        {/* ini adalah fragmen <> awal dan ini </> akhir */}
        </>
    )
}

export default Register

const styles = StyleSheet.create({
    content: {
        padding: 40,
        paddingTop: 0
    },
    page: {
        backgroundColor: colors.white,
        flex: 1
    }
})
