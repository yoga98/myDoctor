import React, { useState,useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { DumyDoctor1, DumyDoctor2, DumyDoctor3 } from '../../assets'
import { List } from '../../components'
import { Fire } from '../../config'
import { colors, fonst, getData } from '../../utils'
//useState di import dari react
//menggunakan State hooks fungsional component
//menggunakan metode useState
const Message = ({ navigation }) => {
    // Mendeskripsikan menjadi Doctor
    //jika kata pertama docktor maka setDoctor
    //atau jika pertama use maka setuser
    const [doctors, setDoctors] = useState([
        {
            id: 1,
            profile: DumyDoctor1,
            name: "Alexander Jannie",
            desc: 'Baik ibu, Terima Kasih...'
        },
        {
            id: 2,
            profile: DumyDoctor2,
            name: "Nairobi Putri Hayza",
            desc: 'Oh tentu saja bis...'
        },
        {
            id: 3,
            profile: DumyDoctor3,
            name: "John McParker Steve",
            desc: 'Oh tentu saja mun...'
        },])
    const [user, setUser] = useState({})
        const [historyChat, setsHistoryChat] =useState([]);
    useEffect(() => {
        getDataUserFromLocal()
        const urlHistory = `messages/${user.uid}/`;
        Fire.database().ref(urlHistory).on('value', snapshot => {
            // console.log('data history: ', snapshot.val())
            if(snapshot.val()){
                const oldData =snapshot.val();
                const data=[];
                Object.keys(oldData).map(key=>{
                    data.push({
                        id:key,
                        ...oldData[key], //agar lebih ringkas dari sebelumnya
                    })
                })
                console.log('New Data History:' ,data)
                setsHistoryChat(data);
            }
        })
    }, [user.uid])


    const getDataUserFromLocal = () => {
        getData('user').then(res => {
            // console.log('user:', res) //cek siapa yang login untuk ambil id/uid
            setUser(res)
        })
    }
    return (
        <View style={styles.page}>
            <View style={styles.content}>
                <Text style={styles.title}>Message</Text>
                {/* cara pemanggilan useState menggunkan map dan di isi permasing" objek doktor yg sudah di definiskan sebelumnya di atas
                ini yang dinamakan maping data array
                lalu panggil props yang berada di listDocotr yang dibutuhkan 
                jika ada warning di screen layar Hp 
                child list should have a unique 'key' this.props.
                karena ini maping array maka harus ada yg unik apa yg unik di atas
                gunakan id 
                */}
                {
                    historyChat.map(chat => {
                        return <List
                            key={chat.id}
                            profile={chat.uidPartner}
                            name={chat.uidPartner}
                            desc={chat.lastContentChat}
                            onPrees={() => navigation.navigate('Chatting')}
                        />
                    }) 
                }
            </View>
        </View>
    )
}

export default Message

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.secondary, flex: 1
    },
    content: {
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        backgroundColor: colors.white,
        flex: 1
    },
    title: {
        fontSize: 20,
        fontFamily: fonst.primary[600],
        color: colors.text.primary,
        marginTop: 30,
        marginLeft: 16
    },
})
