import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ChattItem, Header, InputChat } from '../../components'
import { colors, fonst } from '../../utils'

const Chatting = () => {
    return (
        <View>
            <Header type="dark-profile" title="Alexsander" />
            <Text style={styles.chatDate}>senin, 25 Maret 2020</Text>
            <ChattItem />
            <ChattItem />
            <ChattItem />
            <InputChat />
        </View>
    )
}

export default Chatting

const styles = StyleSheet.create({
    chatDate: {
        fontSize: 11,
        fontFamily: fonst.primary.normal,
        color: colors.text.secondary,
        marginVertical: 20,
        textAlign: "center"
    }
})
