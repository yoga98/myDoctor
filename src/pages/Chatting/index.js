import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ChattItem, Header, InputChat } from '../../components'

const Chatting = () => {
    return (
        <View>
            <Header title="Alexsander"/>
            <Text>senin, 25 Maret 2020</Text>
            <ChattItem/>
            <ChattItem/>
            <ChattItem/>
            <InputChat/>
        </View>
    )
}

export default Chatting

const styles = StyleSheet.create({})
