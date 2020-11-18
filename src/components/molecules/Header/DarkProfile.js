import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { DumyDoctor8 } from '../../../assets'
import { colors, fonst } from '../../../utils'
import { Button } from '../../atoms'

const DarkProfile = ({onPress}) => {
    return (
        <View style={styles.container} >
            <Button type="icon-only" icon="back-light" onPress={onPress} />
            <View style={styles.conten}>
                <Text style={styles.name}>Nairo Putri Hayza</Text>
                <Text style={styles.des}>Dokter anak</Text>
            </View>
            <Image source={DumyDoctor8} style={styles.avatar} />
        </View>
    )
}

export default DarkProfile

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.secondary, paddingVertical: 30,
        paddingLeft: 20,
        paddingRight: 16,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        flexDirection: 'row',
        alignContent:'center'
    },
    conten:{flex:1},
    avatar:{borderRadius: 46/2, width:46,height:46},
    name:{fontSize:20,fontFamily:fonst.primary[600],color:colors.white,textAlign:"center"},
    des:{fontSize:14,fontFamily:fonst.primary.normal,marginTop:6,textAlign:'center',color:colors.text.subTitle}
})
