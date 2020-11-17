import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, fonst } from '../../../utils';
import { Button, Gap } from '../../atoms';
//memanggil onPress
//artinya button icon back-dark menjadi event press kembalidarokomponen yang dipunya
//membuat props title agar dinams 
//akan muncul di register,
//type akan menjadi parameter untuk merubah kondisi sebuat tampilan/
//pada button buat kondisi sama masukan parameter type 
const Header = ({ onPress, title, type }) => {
    return (
        <View style={styles.container(type)}>
            <Button type="icon-only" icon={type === 'dark' ? 'back-light' : 'back-dark'} onPress={onPress} />
            <Text style={styles.text(type)}>{title}</Text>
            <Gap width={24} />
        </View>
    )
}

export default Header
//agar saling bersamping gunakan flexdirection yang value row
//agar benar" ditengah text header maka gunakan Gap bawaan yang sudah dibuat
// dan gunakan flex gunakan dumy background color untuk melihat luas ukuran
const styles = StyleSheet.create({
    container: (type) => (
        {
            paddingHorizontal: 16,
            paddingVertical: 30,
            backgroundColor: type === 'dark' ? colors.secondary : colors.white,
            flexDirection: 'row',
            alignItems: 'center',
            borderBottomLeftRadius: type === 'dark' ? 20 : 0,
            borderBottomRightRadius: type === 'dark' ? 20 : 0,
        }
    ),
    text: (type) => (
        {
            textAlign: 'center',
            // backgroundColor:'yellow',
            flex: 1,
            fontSize: 20,
            fontFamily: fonst.primary[600],
            color: type === 'dark' ? colors.white : colors.text.primary,
        }
    ),
})
