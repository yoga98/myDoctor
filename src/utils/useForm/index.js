import { useState } from 'react';

//hook untuk merubah useState saja tidak untuk komponen

export const useForm = (initialValue) => {

    const [values, setValues] = useState(initialValue);

    // ...values artinya ganti param lama lalu ganti dengan param baru 
    //di atur secara dinamis menggunakan type
    //jika typenya reset maka kosongkan form
    return [values, (formType, formValue) => {
        if (formType === 'reset') {
            return setValues(initialValue);
        }

        return setValues({ ...values, [formType]: formValue })
    }]
}
// formType dan formValue adalah type pengisina dan form untuk integrasi isian form agar lebih simple