import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { Header, Profile, Input, Button, Gap } from '../../components'
import { colors } from '../../utils'

const index = () => {
    return (
        <View style={styles.page}>
            <Header title="Edit Profile" />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.content}>
                    <Profile />
                    <Gap height={26}/>
                    <Input label="Full Name" />
                    <Gap height={24} />
                    <Input label="Pekerjaan" />
                    <Gap height={24} />
                    <Input label="Email" />
                    <Gap height={24} />
                    <Input label="Password" />
                    <Gap height={40} />
                    <Button title="Save Profile" />

                </View>
            </ScrollView>
        </View>
    )
}

export default index

const styles = StyleSheet.create({
    page: { flex: 1, backgroundColor: colors.white },
    content: { padding: 40, paddingTop: 0 }
})
