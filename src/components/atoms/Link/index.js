import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors, fonst } from '../../../utils'
//title dan size merubah ukuran dan teks agar dinamis dalam kurung kurawal/objek
//aligntext dinamis jadi parameter di masikan parameter agar dinamis
const Link = ({ title, size,align }) => {
    return (
        <View>
            <Text style={styles.text(size,align)}>{title}</Text>
        </View>
    )
}

export default Link

const styles = StyleSheet.create({
    //parameter ada dua size dan
    text:(size,align) => ({
            fontSize: size,
            color: colors.text.secondary ,
            fontFamily: fonst.primary[400],
            textDecorationLine: 'underline',
            textAlign: align,
        }),

})
