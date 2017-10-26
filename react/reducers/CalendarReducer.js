import {CALENDAR_PAGE_ADD_SCHEDULE_TO} from '../common/Constants';

const CalendarReducer = function (state={}, action) {
    console.log("reducer called!",state);


    switch (action.type){

        case CALENDAR_PAGE_ADD_SCHEDULE_TO:
            return state;
        default:
            return state;
    }
    return state;
}
export default CalendarReducer ;
