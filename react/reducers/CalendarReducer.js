import {CALENDAR_PAGE_ADD_SCHEDULE_TO,
        CALENDAR_PAGE_CHANGE_DAYS,
        CALENDAR_PAGE_CHANGE_GET_JOBS,
        CALENDAR_PAGE_ADD_RECURRING_TO_DATE,
        CALENDAR_PAGE_MOVE_DEP_SIDE_BY_SIDE } from '../common/Constants';
import moment from 'moment';

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

        case CALENDAR_PAGE_ADD_RECURRING_TO_DATE:

            return state;
            break;
        // FOR MOVING JOB DEPARTMENTS  TO DIFFERENT JOB
        case CALENDAR_PAGE_MOVE_DEP_SIDE_BY_SIDE:
            // This clones the calendar_job itself, removes the old position and set it to the new position
            // if you are in saturday and sunday it will just stays there if you beyond the scope of days

            let newCalendarJobs      = Object.assign({}, state.calendar_jobs);
            let jobCopy   = Object.assign({},newCalendarJobs[action.info.dayKey][action.info.deptId][action.info.jobId]);
            delete newCalendarJobs[action.info.dayKey][action.info.deptId][action.info.jobId];
            newCalendarJobs[action.info.toKey][action.info.deptId][action.info.jobId] = jobCopy;

            const  newCJobsState = Object.assign({},state,{calendar_jobs : newCalendarJobs});
            return newCJobsState;
            break;
        default:
            return state;
    }
    return state;
}
export default CalendarReducer ;
