import {createStore} from 'redux';
import AllReducers from '../reducers/reducers';



const initialState =window.__initial_state__;
const MainStore = createStore(function (state, action) {
    switch (action.type){
        case 'SAMPLE':
            let myObj = Object.assign({},action.data,{
                sample: "Hello World"
            })
            return Object.assign({},state,myObj);
        default:
            return state || {} // If there is no state yet just return an empty object
    }
},initialState);


export default MainStore;
