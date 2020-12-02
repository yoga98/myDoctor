// import AsyncStorage from '@react-native-community/async-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

// *fungsi storedata local
export const storeData = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(value))
    } catch (e) {
        //saving erro
    }
}
//get data
export const getData = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
            return JSON.parse(value)
            //kembalikan nilai menjadi objek
        }
    } catch (e) {
        //errir reading value
    }
};


//catatan
//JSON.stringfy(value)=>mengubah objek ke string
//JSON.parse(value) =>mengembalikan objek string ke objek