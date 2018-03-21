import {CALENDAR_PAGE_ADD_SCHEDULE_TO,
        CALENDAR_PAGE_CHANGE_DAYS,
        CALENDAR_PAGE_CHANGE_GET_JOBS,
        CALENDAR_PAGE_ADD_RECURRING_TO_DATE,
        CALENDAR_PAGE_MOVE_DEP_SIDE_BY_SIDE ,
        CALENDAR_PAGE_MOVE_DEP_SBS_UPDATE_DB,
        CALENDAR_PAGE_REFRESH,
        CALENDAR_PAGE_VIEW_DATE_GET_JOBS,
        CALENDAR_VIEW_DAY_SET_CALENDAR_DATE,
        CALENDAR_MAIN_PAGE_REFRESH,
        RESET_ALL_ACTION,
        IS_WORKING} from '../common/Constants';
import {fromJS} from 'immutable';

const CalendarReducer = function (state=[], action) {
    switch (action.type){
        // ADD FROM CALENDAR TO SCHEDULER RIGHT SIDE BAR
        case CALENDAR_PAGE_ADD_SCHEDULE_TO:
            const action_state = Object.assign({},state,{action: action.action });
            return action_state;
            break;

        // REFRESH THE CALENDAR PAGE
        case CALENDAR_PAGE_REFRESH:
            const calendar_state_job = Object.assign({},state,{calendar_jobs: action.calendar_jobs, programmers_jobs: action.programmers_jobs});
            return calendar_state_job;
            break;

        // FOR UPDATING CALENDAR DAYS
        case CALENDAR_PAGE_CHANGE_DAYS:
            const days_state = Object.assign({},state,{days: action.days});
            return days_state;
            break;

        //  FOR GETTING THE JOBS WHEN CALENDAR DAYS HAVE CHANGE
        case CALENDAR_PAGE_CHANGE_GET_JOBS:
            const jobs_state = Object.assign({},state,{calendar_jobs : action.calendar_jobs, programmers_jobs: action.programmers_jobs});
            return jobs_state;
            break;

        //  FOR UPDATING JOB BAG DEPARTMENT IN THE DATABASE
        //  AT THE MOMENT ITS JUST HERE FOR FUTURE PURPOSES
        case CALENDAR_PAGE_MOVE_DEP_SBS_UPDATE_DB:
            return state;
            break;

        // SCHEDULLING ALL RECURRING JOBS TO THE SCHEDULE
        case CALENDAR_PAGE_ADD_RECURRING_TO_DATE:
            const nextAction  = action.action;
            const add_recur_state    = Object.assign({},state,{ action: nextAction });
            return add_recur_state;
            break;

        // FOR MOVING JOB DEPARTMENTS  TO DIFFERENT JOB
        case CALENDAR_PAGE_MOVE_DEP_SIDE_BY_SIDE:
            // This clones the calendar_job itself, removes the old position and set it to the new position
            // if you are in saturday and sunday it will just stays there if you beyond the scope of days

            let userId        = action.info.userId;
            const fromDayKey  = action.info.dayKey.toString();
            const toDayKey    = action.info.toKey.toString();
            const deptId      = action.info.deptId.toString();
            const jobId       = action.info.jobId.toString();


            // ONLY UPDATE THE CALENDAR JOBS FOR NON-PROGRAMMERS JOBS
            if(!userId){

                const copystate             = fromJS(state);
                const copied_job            = copystate.get('calendar_jobs').get(fromDayKey).get(deptId).get(jobId);
                const calendar_job_removed  = copystate.get('calendar_jobs').deleteIn([fromDayKey,deptId,jobId]);
                const calendar_job_add      = calendar_job_removed.setIn([toDayKey,deptId,jobId], copied_job.toJS());

                const newstate              = Object.assign({},state,{calendar_jobs: calendar_job_add.toJS() } );
                return newstate;

            }else{
            // UPDATE PROGRAMMERS JOBS IN HERE WITH THE SAME SYNTAX AS ABOVE

                userId = userId.toString();

                const copystate             = fromJS(state);
                const copied_job            = copystate.get('programmers_jobs').get(userId).get(fromDayKey).get(jobId);
                const calendar_job_removed  = copystate.get('programmers_jobs').deleteIn([userId,fromDayKey,jobId]);
                const calendar_job_add      = calendar_job_removed.setIn([userId,toDayKey,jobId], copied_job.toJS());

                const newstate              = Object.assign({},state,{programmers_jobs: calendar_job_add.toJS() });
                return newstate;
            }

            break;
        case CALENDAR_PAGE_VIEW_DATE_GET_JOBS:
            // THIS WILL GET ALL JOBS FOR THE VIEW DATE PAGE, VIEWDATEJOBS IS NOT AVAILABLE IN THE GLOBAL STATE ITS JUST ADDED

            const  calendarViewDateJobs = Object.assign({},state,{ view_date_jobs: action.action.payload });
            return calendarViewDateJobs;
            break;
        case CALENDAR_VIEW_DAY_SET_CALENDAR_DATE:
            // THIS WILL UPDATE THE CALENDAR DAYS STATE FROM 7 DAYS TO 1 DAY AND VICE-VERSA
            const selected_date      = action.action.payload.selected_date.format("DD/MM/YYYY");
            const days               = action.action.payload.days;

            const  calendarDaysState = Object.assign({},state,{days , selected_date});
            return calendarDaysState;
            break;
        case CALENDAR_MAIN_PAGE_REFRESH:
            // HOOK TO FORCE ANY MAIN PAGE TO RELOAD ONCE AND GET THEIR RESPECTED DATA FROM THE API
            const  mainRefreshState = Object.assign({},state,{ action: action.action });
            return mainRefreshState;

            break;
        case RESET_ALL_ACTION:
            // RESET ALL ACTION IF NEEDED

            const  newState = Object.assign({},state,{ action: action.action });
            return newState;
            break;
        case IS_WORKING:
            // MAKE IS WORKING THE LAST STATE CHANGER

            const  isWorkingState = Object.assign({},state,{ isWorking: action.isWorking });
            return isWorkingState;
            break;
        default:
            return state;
    }
    return state;
}
export default CalendarReducer ;
