import {CALENDAR_PAGE_ADD_SCHEDULE_TO} from '../common/Constants';

const SettingsReducer = function (state=[], action) {
    switch (action.type){
        case CALENDAR_PAGE_ADD_SCHEDULE_TO:
            return state;
        default:
            return state;
    }
    return state;
}
export default SettingsReducer ;
