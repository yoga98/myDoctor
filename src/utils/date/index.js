export const getTimeChat = (date) => {
    const hour = date.getHours(); //jam
    const minute = date.getMinutes(); //menit
    return `${hour}:${minute} ${hour >= 12 ? 'PM' : 'AM'}`
}

export const setDateChat = (oldDate)=>{
    const year = oldDate.getFullYear(); //tahun
    const month = oldDate.getMonth() + 1 //bulan (standar javascript bulan dihutiung dari nol)        
    const date = oldDate.getDate() //tanggal
    

    return` ${year}-${month}-${date}`;
}   