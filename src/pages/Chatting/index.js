import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { ChattItem, Header, InputChat } from '../../components'
import { Fire } from '../../config'
import { colors, fonst, getData, showError } from '../../utils'

const Chatting = ({ navigation, route }) => {
    const dataDoctor = route.params;
    const [user, setUser] = useState({})
    useEffect(() => {
        getData('user').then(res => {
            console.log('user:', res) //cek siapa yang login untuk ambil id/uid
            setUser(res)
        })
    }, [])

    const [chatContent, setChatContent] = useState(""); //props content kirim pesan
    const chatSend = () => { //kirim pesan button  
        //cara mendapatkan hari jam menit
        const today = new Date();
        const hour = today.getHours(); //jam
        const minute = today.getMinutes(); //menit
        const year = today.getFullYear(); //tahun
        const month = today.getMonth() + 1 //bulan (standar javascript bulan dihutiung dari nol)        
        const date = today.getDate() //tanggal
        // console.log('Chat Terkirim :', chatContent)
        const data = {
            sendBy: user.uid,
            chatDate: new Date().getTime(),
            chatTime: `${hour}:${minute} ${hour > 12 ? 'PM' : 'AM'}`,
            chatContent: chatContent
        }
        console.log('data untuk dikirim:', data)
        console.log('Cek url',
            `chatting/${user.uid}_${dataDoctor.data.uid}/allChat/${year}-${month}-${date}`
        )
        setChatContent('') //agar setelah dikirim kotak pesan kosong

        //kirim ke firebase
        Fire.database()
            .ref(`chatting/${user.uid}_${dataDoctor.data.uid}/allChat/${year}-${month}-${date}`)
            .push(data)  //mengirimkan chatID uid user dan dokter
            .then(()=>{
                console.log(
                    setChatContent('') //jika berhasil kosongkan
                )
            }).catch(err =>{
                showError(err.message)
            })
    }
    return (
        <View style={styles.page}>
            <Header type="dark-profile"
                title={dataDoctor.data.fullName}
                desc={dataDoctor.data.category}
                photo={{ uri: dataDoctor.data.photo }}
                onPress={() => navigation.goBack()} />
            <View style={styles.content}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text style={styles.chatDate}>senin, 25 Maret 2020</Text>
                    <ChattItem isMe />
                    <ChattItem />
                    <ChattItem isMe />
                </ScrollView>
            </View>
            <InputChat
                value={chatContent}
                onChangeText={(value) => setChatContent(value)}
                onButtonPress={chatSend}
            />
        </View>
    )
}

export default Chatting

const styles = StyleSheet.create({
    content: { flex: 1 },
    page: { backgroundColor: colors.white, flex: 1 },
    chatDate: {
        fontSize: 11,
        fontFamily: fonst.primary.normal,
        color: colors.text.secondary,
        marginVertical: 20,
        textAlign: "center"
    }
})
