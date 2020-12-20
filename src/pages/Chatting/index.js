import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { ChattItem, Header, InputChat } from '../../components'
import { colors, fonst } from '../../utils'

const Chatting = ({navigation,route}) => {
    const dataDoctor = route.params;
    return (
        <View style={styles.page}>
            <Header type="dark-profile" 
            title={dataDoctor.data.fullName}
            desc={dataDoctor.data.category}
            photo={{uri: dataDoctor.data.photo}}
            onPress={()=>navigation.goBack()} />
            <View style={styles.content}>
                <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.chatDate}>senin, 25 Maret 2020</Text>
                <ChattItem isMe/>
                <ChattItem />
                <ChattItem isMe/>
                </ScrollView>
            </View>
            <InputChat
                value=""
                onChangeText={()=> alert('Input tab')}
                onButtonPress={()=>alert('Button Press')}
            />
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
