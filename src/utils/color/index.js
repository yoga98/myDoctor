//setup color ini terbentuk warna basic
//mainColor adalah kumpulan warna warna
const mainColor = {
    green1: "#0BcAD4",
    green2: '#EDFCFD',
    dark1: '#112340',
    dark2: '#495A75',
    dark3: '#8092AF',
    grey1: "#7D8797",
    grey2: '#E9E9E9',
    grey3: '#EDEEF0',
    grey4: '#B1B7C2',
    blue1: '#0066CB',
    black1: '#000000',
    black2: 'rgba(0,0,0,0.5)',
    red1: '#E06379'
}
export const colors = {
    primary: mainColor.green1,
    secondary: mainColor.dark1,
    tertiary: mainColor.blue1,
    white: 'white',
    black: 'black',
    disable: mainColor.grey3,
    text: {
        primary: mainColor.dark1,
        secondary: mainColor.grey1,
        menuinactive: mainColor.dark2,
        menuActive: mainColor.green1,
        subTitle: mainColor.dark3
    },
    button: {
        primary: {
            background: mainColor.green1,
            text: 'white'
        },
        secondary: {
            background: 'white',
            text: mainColor.dark1
        },
        disable:{
            background: mainColor.grey3,
            text: mainColor.grey4
        }
        
    },
    border: mainColor.grey2,
    CardLight: mainColor.green2,
    LoadingBackground: mainColor.black2,
    error: mainColor.red1,
}