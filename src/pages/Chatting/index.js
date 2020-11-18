import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ChattItem, Header, InputChat } from '../../components'
import { colors, fonst } from '../../utils'

const Chatting = ({navigation}) => {
    return (
        <View style={styles.page}>
            <Header type="dark-profile" title="Alexsander" onPress={()=>navigation.goBack()} />
            <View style={styles.content}>
                <Text style={styles.chatDate}>senin, 25 Maret 2020</Text>
                <ChattItem isMe/>
                <ChattItem />
                <ChattItem isMe/>
            </View>
            <InputChat />
        </View>
    )
}

export default Chatting

const styles = StyleSheet.create({
    content:{flex:1},
    page: { backgroundColor: colors.white, flex: 1 },
    chatDate: {
        fontSize: 11,
        fontFamily: fonst.primary.normal,
        color: colors.text.secondary,
        marginVertical: 20,
        textAlign: "center"
    }
})
