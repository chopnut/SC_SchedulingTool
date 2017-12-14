import {CALENDAR_PAGE_ADD_SCHEDULE_TO} from '../common/Constants';

const MyTasksReducer = function (state=[], action) {
    switch (action.type){
        case CALENDAR_PAGE_ADD_SCHEDULE_TO:
            return state;
        default:
            return state;
    }
    return state;
}
export default MyTasksReducer ;
