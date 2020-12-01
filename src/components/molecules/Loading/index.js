import React from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import { colors } from '../../../utils'

const Loading = () => {
    return (
        <View style={styles.wrapper}>
            {/* ini di import dari react tambahkan size */}
            <ActivityIndicator size="large" color={colors.primary}/>
            <Text style={styles.text}>Loading..</Text>
        </View>
    )
}

export default Loading

const styles = StyleSheet.create({
    wrapper: {
        position: "absolute",
        flex: 1,
        alignItems: "center",
        backgroundColor: colors.LoadingBackground,
        justifyContent: "center",
        width: "100%",
        height: "100%",
    }   ,
    text:{
        color:colors.text.menuActive
    }
})