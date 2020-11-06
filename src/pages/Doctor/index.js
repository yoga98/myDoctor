import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { DoctorCategori, HomeProfile, NewsItem, RatedDoctor } from '../../components'

const Doctor = () => {
    return (
        <View>
            <HomeProfile/>
            <Text>Mau konsultasi dengan siapa hari ini</Text>
            <DoctorCategori/>
            <DoctorCategori/>
            <DoctorCategori/>
            <DoctorCategori/>
            <Text>Top Rated Doctor</Text>
            <RatedDoctor/>
            <RatedDoctor/>
            <RatedDoctor/>
            <Text>Good News</Text>
            <NewsItem/>
            <NewsItem/>
            <NewsItem/>
        </View>
    )
}

export default Doctor

const styles = StyleSheet.create({})
