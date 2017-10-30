import {CALENDAR_PAGE_ADD_SCHEDULE_TO, CALENDAR_PAGE_CHANGE_DAYS} from '../common/Constants';

const CalendarReducer = function (state=[], action) {
    switch (action.type){
        // ADD FROM CALENDAR TO SCHEDULER RIGHT SIDE BAR
        case CALENDAR_PAGE_ADD_SCHEDULE_TO:

            return state;
            break;

        // FOR UPDATING CALENDAR DAYS
        case CALENDAR_PAGE_CHANGE_DAYS:

            return state;
            break;
        default:
            return state;
    }
    return state;
}
export default CalendarReducer ;
