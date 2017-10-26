import {createStore,applyMiddleware} from 'redux';
import allreducers from '../reducers/reducers';
import thunk from 'redux-thunk';

const initialState = window.__initial_state__;
const MainStore = createStore(
    allreducers
    ,initialState,
    applyMiddleware(thunk) );

export default MainStore;
