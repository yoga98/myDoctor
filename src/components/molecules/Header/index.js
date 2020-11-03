import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { IconDarkBack} from '../../../assets';
import { colors } from '../../../utils';
import { Gap } from '../../atoms';
const Header = () => {
    return (
        <View style={styles.container}>
            <IconDarkBack/>
            <Text style={styles.text}>Text Header</Text>
            <Gap width={24}/>
        </View>
    )
}

export default Header
//agar saling bersamping gunakan flexdirection yang value row
//agar benar" ditengah text header maka gunakan Gap bawaan yang sudah dibuat
// dan gunakan flex gunakan dumy background color untuk melihat luas ukuran
const styles = StyleSheet.create({
    container:{
        paddingHorizontal:16,
        paddingVertical:30,
        backgroundColor:colors.white,
        flexDirection:'row',
        alignItems:'center'
    },
    text:{
        textAlign:'center', 
        // backgroundColor:'yellow',
        flex:1,
        fontSize:20,
        fontFamily:'Nunito-SemiBold',
        color: colors.text.primary
    }
})
