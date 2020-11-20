import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Button, Gap, Header, Input } from '../../components';
import { colors, useForm } from '../../utils';
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



    // Buat fungsi untuk melakukan pengecekan
    const onContinue = () => {
        console.log(form)
        //navigation.navigate('UploadPhoto')
    }
    return (
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
                        onChangeText={value => setForm('fullName',value)} />
                    <Gap height={24} />
                    <Input value={form.profesional}
                        label="Pekerjaan"
                        onChangeText={value => setForm('profesional',value)} />
                    <Gap height={24} />
                    <Input value={form.email}   
                        label="Email"
                        onChangeText={(value) => setForm('email',value)} />    
                    <Gap height={24} />
                    <Input value={form.password}
                        label="Password"
                        onChangeText={(value) => setForm('password',value)}
                        secureTextEntry />
                    <Gap height={40} />
                    {/* Naviget untuk berpindah halaman yang dituju */}
                    <Button title="Continue" onPress={onContinue} />
                </ScrollView>
            </View>
        </View>
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
