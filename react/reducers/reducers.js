import {combineReducers} from 'redux';

import CalendarReducer from '../reducers/CalendarReducer';
import ManageJobReducer from '../reducers/ManageJobReducer';
import UserSettingsReducer from '../reducers/UserSettingsReducer';
import MyTasksReducer from '../reducers/MyTasksReducer';
import SchedulingToolSettingsReducer from '../reducers/SchedulingToolSettingsReducer';

const reducers = combineReducers({
    calendar_page: CalendarReducer,
    settings: SchedulingToolSettingsReducer,
    manage_jobs: ManageJobReducer,
    manage_tasks: MyTasksReducer,
    user_settings: UserSettingsReducer
});
export default reducers;
