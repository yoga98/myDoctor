//setUp redux
// tempat menyimpann state global 
import { createStore } from 'redux';

//value berupa fungsion yang diberi nama reducer
//state value dan action perubahan yg diinginkan
const initialState = {
    loading: false,
    name:'Yoga muhamad',
    address:'tasik'
};
const reducer = (state = initialState, action) => {
   if(action.type === 'SET_LOADING'){
       return {
           ...state, //copy state lama(initial) dan ubah
           loading: action.value
       }
   }
    return state;
}
const store = createStore(reducer);


export default store;

// action untuk memunculkan dan menghilangkan loading