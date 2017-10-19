import {createStore} from 'redux';
import allreducers from '../reducers/reducers';

const initialState = window.__initial_state__;
const MainStore = createStore(
    allreducers
    ,initialState);

export default MainStore;
