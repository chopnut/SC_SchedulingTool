import {CALENDAR_PAGE_ADD_SCHEDULE_TO} from '../common/Constants';

const CalendarReducer = function (state=[], action) {
    switch (action.type){
        case CALENDAR_PAGE_ADD_SCHEDULE_TO:
            return state;
            break;
        default:
            return state;
    }
    return state;
}
export default CalendarReducer ;
