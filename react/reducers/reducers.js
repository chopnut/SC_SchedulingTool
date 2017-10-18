import Redux from 'redux';
import {combineReducers} from 'redux';

import CalendarReducer from '../reducers/CalendarReducer';
import ManageJobReducer from '../reducers/ManageJobReducer';
import MyTasksREducer from '../reducers/MyTasksReducer';
import SchedulingToolSettingsReducer from '../reducers/SchedulingToolSettingsReducer';


const AllReducers = function (state, action) {
    switch (action.type){
        default:
            return state || {} // If there is no state yet just return an empty object
    }
}
export default AllReducers;
