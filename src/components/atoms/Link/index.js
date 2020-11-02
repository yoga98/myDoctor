import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
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
            fontSize: 12,
            color: "#7D8797",
            fontFamily: "Nunito-Regular",
            textDecorationLine: 'underline',
            textAlign: align,
        }),

})
