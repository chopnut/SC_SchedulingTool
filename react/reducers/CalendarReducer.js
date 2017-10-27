import {CALENDAR_PAGE_ADD_SCHEDULE_TO} from '../common/Constants';

const CalendarReducer = function (state=[], action) {
    switch (action.type){
        // ADD FROM CALENDAR TO SCHEDULER RIGHT SIDE BAR
        case CALENDAR_PAGE_ADD_SCHEDULE_TO:
            const job = action.job;
            const date = action.dates;

            return state;
            break;
        default:
            return state;
    }
    return state;
}
export default CalendarReducer ;
