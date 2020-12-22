import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { ChattItem, Header, InputChat } from '../../components'
import { Fire } from '../../config'
import { colors, fonst, getData, getTimeChat, setDateChat, showError } from '../../utils'

const Chatting = ({ navigation, route }) => {
    const dataDoctor = route.params;
    const [chatData, setChatData] = useState([]);
    const [user, setUser] = useState({})
    useEffect(() => {
        getDataUserFromLocal();
        getDataChatting();
    }, [])
    //*mendapatkan uid
    const getDataUserFromLocal = () => {
        getData('user').then(res => {
            // console.log('user:', res) //cek siapa yang login untuk ambil id/uid
            setUser(res)
        })
    } 

    const getDataChatting = () => {
        const chatID = `${user.uid}_${dataDoctor.data.uid}` //mengabil data uid user dan doktor
        const urlFireBase = `chatting/${chatID}/allChat/`
        Fire.database()
            .ref(urlFireBase)
            // *on artinya di panggil terus berulang
            .on('value', (snapShot) => {
                console.log('data chat:', snapShot.val())
                if (snapShot.val()) {
                    const dataSnapshot = snapShot.val();
                    const allDataChat = [];
                    Object.keys(dataSnapshot).map(key => {
                        const dataChat = dataSnapshot[key];
                        const newDataChat = [];

                        Object.keys(dataChat).map(itemChat => {
                            newDataChat.push({
                                id: itemChat,
                                data: dataChat[itemChat]
                            });
                        });

                        allDataChat.push({
                            id: key,
                            data: newDataChat,
                        });
                    });
                    console.log('All data Chat ', allDataChat)
                    setChatData(allDataChat);
                }
            })
    }

    const [chatContent, setChatContent] = useState(""); //props content kirim pesan
    const chatSend = () => { //kirim pesan button  
        //cara mendapatkan hari jam menit
        const today = new Date();
        // console.log('Chat Terkirim :', chatContent)
        //fungsi data
        const data = {
            sendBy: user.uid,
            chatDate: today.getTime(),
            chatTime: getTimeChat(today),//diambil dari utils date
            chatContent: chatContent
        }
        //*Fungsi Uid user dan Uid Doctor
        const chatID = `${user.uid}_${dataDoctor.data.uid}` 
        //*Url Chatting semua
        const urlFireBase = `chatting/${chatID}/allChat/${setDateChat(today)}`
        const urlMessageUser = `messages/${user.uid}/${chatID}` //*Url pesan untuk user
        const urlMessageDoctor = `messages/${dataDoctor.data.uid}/${chatID}` //*url pesan untuk docot

        //*fungsi untuk history user 
        const dataHistoryChatForUser = {
            lastContentChat: chatContent,
            lastChatDate: today.getTime(),
            uidPartner: dataDoctor.data.uid
        }
        
        //*fungsi histori untuk docter
        const dataHistoryChatForDoctor = {
            lastContentChat: chatContent,
            lastChatDate: today.getTime(),
            uidPartner: user.uid
        }
        // console.log('data untuk dikirim:', data) //tes apa ada data masuk
        //console.log('Cek url', urlFireBase) //cek url firebase benar atau tidak di console bug
        setChatContent('') //agar setelah dikirim kotak pesan kosong

        //kirim ke firebase
        Fire.database()
            .ref(urlFireBase)
            .push(data)  //mengirimkan chatID uid user dan dokter
            .then(() => {
                setChatContent('') //jika berhasil kosongkan
                //!set hsitory for user
                Fire.database()
                    .ref(urlMessageUser)
                    .set(dataHistoryChatForUser)

                //!set history docktor 
                Fire.database()
                    .ref(urlMessageDoctor)
                    .set(dataHistoryChatForDoctor)
            }).catch(err => {
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
                    {chatData.map(chat => {
                        // Looping chat
                        // Pengambilan data dari Firebase
                        return (
                            <View key={chat.id}>
                                <Text style={styles.chatDate}>{chat.id}</Text>
                                {chat.data.map(itemChat => {
                                    const isMe = itemChat.data.sendBy === user.uid
                                    return <ChattItem
                                        key={itemChat.id}
                                        isMe={isMe}
                                        text={itemChat.data.chatContent}
                                        date={itemChat.data.chatTime}
                                        photo={isMe ? null : { uri: dataDoctor.data.photo }}
                                    />
                                })}
                                {/* secara statisc <ChattItem />
                                <ChattItem isMe /> */}
                            </View>
                        )
                    })}
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
