import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Gap, Header, Input } from '../../components';
import { colors } from '../../utils';
const Register = () => {
    return (
        <View style={styles.page}>
            <Header />
            <View style={styles.content}>
                {/* <Text>Register</Text> */}
                <Input label="Full Name" />
                <Gap height={24}/>
                <Input label="Pekerjaan" />
                <Gap height={24}/>
                <Input label="Email" />
                <Gap height={24}/>
                <Input label="Password" />
                <Gap height={40}/>
                <Button title="Continue" />
            </View>
        </View>
    )
}

export default Register

const styles = StyleSheet.create({
    content:{padding:40,paddingTop:0},
    page:{backgroundColor:colors.white,flex:1}
})
