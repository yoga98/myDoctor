import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ILLogo } from '../../assets';
import Button from '../../components/atoms/Button/Button';


const GetStarted = () => {
    return (
        <View style={styles.page}>
            <View>
                <ILLogo />
                <Text style={styles.title}>Konsultasi dengan dokter jadi lebih mudah & fleksibel</Text>
            </View>
            <View>
                <Button />
                <Button />
            </View>
        </View>
    );
};

export default GetStarted;

const styles = StyleSheet.create({
    page: {
        padding: 40,
        justifyContent:'space-between',
        backgroundColor: 'yellow',
        flex:1
    },
    title: {
        fontSize: 28,
        fontWeight: '600',
        color: 'black',
        marginTop: 91,
    }
});
