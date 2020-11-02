import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { ILGetStarted, ILLogo } from '../../assets';
import { Button, Gap } from '../../components';
// import  Gap  from '../../components/atoms/Gap';
// import  Button from '../../components/atoms/Button/Button';


const GetStarted = ({navigation}) => { 
    return (
        <ImageBackground source={ILGetStarted} style={styles.page}>
            <View>
                <ILLogo />
                <Text style={styles.title}>Konsultasi dengan dokter jadi lebih mudah & fleksibel</Text>
            </View>
            <View>
                <Button title="Get Started" onPress={()=>navigation.navigate('Register')}/>
                <Gap height={16}/>
                <Button type='secondary' title="Sign Up" onPress={()=>navigation.replace('Login')}/>
            </View>
        </ImageBackground>
    );
};

export default GetStarted;

const styles = StyleSheet.create({
    page: {
        padding: 40,
        justifyContent: 'space-between',
        backgroundColor: 'white',
        flex: 1,
        // alignItems:"center"
    },
    title: {
        fontSize: 28,
        color: 'white',
        marginTop: 91,
        fontFamily:"Nunito-SemiBold",
    }
});
