import {combineReducers} from 'redux';

import CalendarReducer from '../reducers/CalendarReducer';
import ManageJobReducer from '../reducers/ManageJobReducer';
import MyTasksReducer from '../reducers/MyTasksReducer';
import SchedulingToolSettingsReducer from '../reducers/SchedulingToolSettingsReducer';

const allreducers = combineReducers({
    ManageJobReducer,
    calendar_page: CalendarReducer
    }
);


export default allreducers;
