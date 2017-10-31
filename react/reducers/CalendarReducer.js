import {CALENDAR_PAGE_ADD_SCHEDULE_TO, CALENDAR_PAGE_CHANGE_DAYS, CALENDAR_PAGE_CHANGE_GET_JOBS} from '../common/Constants';

const CalendarReducer = function (state=[], action) {
    switch (action.type){
        // ADD FROM CALENDAR TO SCHEDULER RIGHT SIDE BAR
        case CALENDAR_PAGE_ADD_SCHEDULE_TO:
            return state;
            break;

        // FOR UPDATING CALENDAR DAYS
        case CALENDAR_PAGE_CHANGE_DAYS:
            const days_state = Object.assign({},state,{days: action.days});
            return days_state;
            break;

        //  FOR GETTING THE JOBS WHEN CALENDAR DAYS HAVE CHANGE
        case CALENDAR_PAGE_CHANGE_GET_JOBS:
            const jobs_state = Object.assign({},state,{calendar_jobs : action.calendar_jobs});
            return jobs_state;
            break;
        default:
            return state;
    }
    return state;
}
export default CalendarReducer ;
