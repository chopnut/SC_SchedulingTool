import {combineReducers} from 'redux';

import CalendarReducer from '../reducers/CalendarReducer';
import ManageJobReducer from '../reducers/ManageJobReducer';
import SettingsReducer from '../reducers/SettingsReducer';
import MyTasksReducer from '../reducers/MyTasksReducer';
import SchedulingToolSettingsReducer from '../reducers/SchedulingToolSettingsReducer';

const reducers = combineReducers({
    calendar_page: CalendarReducer,
    settings: SettingsReducer,
    manage_jobs: ManageJobReducer
});
export default reducers;
