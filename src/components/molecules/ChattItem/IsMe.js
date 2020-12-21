import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors, fonst } from '../../../utils'
const isMe = ({text, date}) => {
    return (
        <View style={styles.container}>
            <View style={styles.chatContent}>
                <Text style={styles.text}>{text}</Text>
            </View>
            <Text style={styles.date}>{date}</Text>
        </View>
    )
}

export default isMe

const styles = StyleSheet.create({ 
    container:{alignItems:'flex-end',
    marginBottom:20,
    paddingRight:16},
    chatContent:{maxWidth:'70%',
    borderRadius:10,
    padding:12,
    paddingRight:18,
    backgroundColor: colors.CardLight,
    borderBottomRightRadius:0},
    text:{fontSize:14,fontFamily:fonst.primary.normal,color:colors.text.primary},
    date:{fontSize:11,fontFamily:fonst.primary.normal,color:colors.text.secondary,marginTop:8}
})

