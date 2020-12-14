import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { DumyDoctor1, DumyDoctor2, DumyDoctor3, JSONCategoriDoc } from '../../assets'
import { DoctorCategori, Gap, HomeProfile, NewsItem, RatedDoctor } from '../../components'
import { colors, fonst, getData, showError } from '../../utils'
import { Fire } from '../../config';

const Doctor = ({ navigation }) => {


    const [doctors, setDocter] = useState([])
    //*cek data local dan gunakan degub untuk melihat
    // useEffect(() => {
    //     getData('user').then(res =>{
    //         console.log('data user:', res)
    //     });
    // }, [])         

    //buat useEffect getdata dari firebase
    //buat state terlebih dahulu
    const [categoryDoctor, setCategoriDoctor] = useState([]);
    const [news, setNews] = useState([]);
    useEffect(() => {
        GetDataCateDoctor();
        GetDataTopRateDoctor();
        GetDataNews();
        // cara pertama
        // Fire.database()
        //     .ref('category_doctor/')
        //     .once('value')
        //     .then(res => {
        //         console.log('category doctor :', res.val());
        //         //jika ada nilai maka munculkan
        //         if (res.val()) {
        //             //jadikan value baru
        //             setCategoriDoctor(res.val())
        //         }
        //     }).catch(err => {
        //         showError(err.message)
        //     });
    }, []);


    //membuat objek ke array dari firebase contoh
    // const parseArray = (listObject) => {
    // definiskan objek 
    // const data = []; //diparse menjadi data array
    // Object.keys(Object).map(key => {
    // data.push({
    //     id: key,
    //     data: listObjek.[key],
    // })
    // }) //jadikan array 
    //     return data;
    // =}

    //cara kedua agar lebih clean code
    const GetDataTopRateDoctor = () => {
        Fire.database()
            .ref('doctors/')
            .orderByChild('rate')
            .limitToLast(3) //mengambil nilai terakhir dari 3
            .once('value')
            .then(res => {
                console.log('Top rated doctor :', res.val());
                //jika ada nilai maka munculkan
                if (res.val()) {
                    const OldData = res.val();
                    const data = []; //diparse menjadi data array
                    Object.keys(OldData).map(key => {
                        data.push({
                            id: key,
                            data: OldData[key],
                        });
                    }); //jadikan array 
                    console.log('data hasil perse :', data)
                    setDocter(data);
                }
            }).catch(err => {
                showError(err.message)
            });
    }
    const GetDataCateDoctor = () => {
        Fire.database()
            .ref('category_doctor/')
            .once('value')
            .then(res => {
                console.log('category doctor :', res.val());
                //jika ada nilai maka munculkan
                if (res.val()) {
                    //jadikan value baru
                    setCategoriDoctor(res.val())
                }
            }).catch(err => {
                showError(err.message)
            });
    }
    const GetDataNews = () => {
        Fire.database().ref('news/')
            .once('value')
            .then(res => {
                console.log('data :', res.val());
                //jika res.val() ada nilai maka munculkan
                if (res.val()) {
                    //jadi value baru
                    setNews(res.val());
                }
            }).catch(err => {
                showError(err.message);
            });

    }

    return (
        <View style={styles.page}>
            <View style={styles.conten}>
                {/* menghilangkan scroll bar showsVerticalScrollIndicator */}
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.wrapperSection}>
                        <Gap height={30} />
                        <HomeProfile onPress={() => navigation.navigate('UserProfile')} />
                        <Text style={styles.welcome}>Mau konsultasi dengan siapa hari ini</Text>
                    </View>
                    {/* agar bisa scrol ke samping card piliha dokter maka gunakan SCrollView bawaan
react-native secara defaul vertical maka aktifkan ketik horizontal seperti 
dibawah ini,
lalu agar indikator scrollnya hilang maka matikan gunakan showHorizontalScrollIndicatro ={false}
*/}
                    <View style={styles.wrapperScroll}>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <View style={styles.categori}>
                                <Gap width={32} />
                                {/* pangginl Json data 
                        JSONCategoriDoc.data artinya json memanggil data yg ada di dalam objek 1,2 yg di kasih nama item(optional) 
                        {
                            JSONCategoriDoc.data.map(item => {
                                return <DoctorCategori key={item.id} categori={item.categori}
                                    onPress={() => navigation.navigate('ChooseDoctor')} />
                            })
                        }
                        */}
                                {/* panggila menggunakan UseState */}
                                {
                                    categoryDoctor.map(item => {
                                        return <DoctorCategori key={item.id} category={item.category}
                                            onPress={() => navigation.navigate('ChooseDoctor')} />
                                    })
                                }
                                <Gap width={22} />
                            </View>
                        </ScrollView>
                    </View>
                    <View style={styles.wrapperSection}>
                        <Text style={styles.sectionLabel}>Top Rated Doctor</Text>
                        {doctors.map(doctors => {
                            return (
                                <RatedDoctor
                                    key={doctors.id}
                                    avatar={{ uri: doctors.data.photo }}
                                    name={doctors.data.fullName}
                                    desc={doctors.data.propresional}
                                    onPress={() => navigation.navigate('DoctorProfile',doctors)} />  //Kirim parameter
                            )
                        })}
                        {/* <RatedDoctor avatar={DumyDoctor1} name="Alexa Srinda" desc="Dokter Anak" onPress={() => navigation.navigate('DoctorProfile')} />
                        <RatedDoctor avatar={DumyDoctor2} name="Husabah" desc="Dokter Psikiater" onPress={() => navigation.navigate('DoctorProfile')} />
                        <RatedDoctor avatar={DumyDoctor3} name="Barbara" desc="Dokter Anak" onPress={() => navigation.navigate('DoctorProfile')} /> */}
                        <Text style={styles.sectionLabel}>Good News</Text>
                    </View>
                    {/* Looping news item */}
                    {news.map(item => {
                        return <NewsItem
                            key={item.id}
                            title={item.title}
                            date={item.date}
                            image={item.image} />
                    })}
                    {/* pemanggilan static 
                    <NewsItem />
                    <NewsItem />
                    <NewsItem /> */}
                    {/* Gap atur tinggi secara dinamis */}
                    <Gap height={30} />
                </ScrollView>
            </View>
        </View>
    )
}

export default Doctor

const styles = StyleSheet.create({
    wrapperSection: { paddingHorizontal: 16 },
    page: {

        backgroundColor: colors.secondary,
        flex: 1
    },
    //ini adalah cara untuk membuat lengkungan
    conten: {
        // paddingVertical: 30,
        // paddingHorizontal: 16,
        backgroundColor: colors.white,
        flex: 1,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },
    welcome: {
        fontSize: 20,
        fontFamily: fonst.primary[600], color: colors.text.primary,
        marginTop: 30,
        marginBottom: 16,
        maxWidth: 209
    },
    categori: {
        flexDirection: 'row'
    },
    sectionLabel: {
        fontSize: 16,
        fontFamily: fonst.primary[600],
        color: colors.text.primary,
        marginTop: 30,
        marginBottom: 16
    },
    wrapperScroll: { marginHorizontal: -16 }
})
