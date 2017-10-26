import {CALENDAR_PAGE_ADD_SCHEDULE_TO} from '../common/Constants';

// This is where your logic is going to go
// Remember the name of the function is the ActionCreator, the action itself is what gets return.
export function calendar_page_add_schedule_to(data){
    return({
        type: CALENDAR_PAGE_ADD_SCHEDULE_TO, data: data
    });
}
