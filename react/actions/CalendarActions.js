import { CALENDAR_PAGE_ADD_SCHEDULE_TO,
         CALENDAR_PAGE_CHANGE_DAYS,
         CALENDAR_PAGE_CHANGE_GET_JOBS,
         CALENDAR_PAGE_MOVE_DEP_SIDE_BY_SIDE,
         CALENDAR_PAGE_ADD_RECURRING_TO_DATE,
         CALENDAR_PAGE_MOVE_DEP_SBS_UPDATE_DB  } from '../common/Constants';
import app from '../modules/persistent';
import _ from 'lodash';
import axios from 'axios';

/*

This is where your logic is going to go
Remember the name of the function is the ActionCreator, the action itself is what gets return.
Special Note: With the use of thunk middleware , normally action creators only return object of type: and payload
but with thunk you can return a function

*/
export function calendar_page_add_schedule_to(settings,job){
    return((dispatch)=>{
        const prom = app(settings);
        // Get user log first
        prom.then((res)=>{
            const path_api  = settings.setting.react_api_folder+'/calendar_actions/calendar_page_add_schedule_to.php';
            const userlog   = res.data.userlog;
            let   user_id   = 0;

            if(userlog){
                user_id     = userlog.id;
            }
            // Data to send
            const data      = Object.assign({},job, {
                job_created_by: user_id
            });
            // If you have the authority proceed with the adding
            const req = axios.post(path_api,data);
            req.then((res)=>{

                console.log("POST CREATION SCHEDULE: ",res.data);
                dispatch({type: CALENDAR_PAGE_ADD_SCHEDULE_TO, job: data });
            });

        });
    });

}

/*
* When calendar_page.days have change call all new job departments again to update all
* @days the new days, jobs collection
* */
export function calendar_page_change_days(settings,days){

    return ((dispatch)=>{
            const prom = app(settings);
            // Get user log first
            prom.then((res)=> {
                let path_api = settings.setting.react_api_folder + '/calendar_actions/calendar_page_get_scheduled.php?dates=';
                let params = _.map(days,function(item){
                    return item.date;
                })

                const strParams = params.join(',');
                path_api = path_api+ strParams;

                // Check the api url for testing
                // console.log("URL get jobs" , path_api);
                dispatch({type: CALENDAR_PAGE_CHANGE_DAYS , days });


                // If you have the authority proceed with the adding
                const req = axios.get(path_api);
                req.then((res)=>{
                    console.log("GET JOBS FROM CALENDAR ",res.data);
                    dispatch({type: CALENDAR_PAGE_CHANGE_GET_JOBS ,calendar_jobs: res.data });

                });

            });

        }
    );
}

/*
* This is to move the job side by side, this is also used by the drag functionality
* @job_id one of the entry from the calendar_page.calendar_jobs
* @day one of the entry from calendar_page.days
* */
export function calendar_page_move_dep_side_by_side(settings, info){
    return ((dispatch)=>{
        // Update the database first upon moving
        const prom = app(settings);
        prom.then((res)=> {
            // Do it when settings returns data
            // Set the api path to update the position

            const data = Object.assign({},info);
            let path_api = settings.setting.react_api_folder + '/calendar_actions/calendar_page_move_dep_update.php';


            // Only update when post is successful
            const req = axios.post(path_api,data);
            req.then((res)=>{
                console.log("POST UPDATE BAG: ",data,res.data);

                dispatch({type: CALENDAR_PAGE_MOVE_DEP_SBS_UPDATE_DB, ok: true });
                // Update the state of the calendar now
                dispatch({type: CALENDAR_PAGE_MOVE_DEP_SIDE_BY_SIDE , info});
            });

        });
    });
}

/*
* Create recurring jobs to the date selected, no duplicates of job will be created
* job_departments will be based on number of the current jobs_deparments has been created in the past
* */
export function calendar_page_add_recurring_to_date(job){
    return ((dispatch)=>{
        dispatch({type: CALENDAR_PAGE_ADD_RECURRING_TO_DATE , job});
    });
}
/*
* This is for updating the schedule date for department bag when calendar_page_move_dep_side_by_side is invoke
* @info is the same variable used when changing the position of the dep bag.
* */
export function calendar_page_move_dep_sbs_update_db(info){
    return ((dispatch)=>{
        dispatch({type: CALENDAR_PAGE_MOVE_DEP_SBS_UPDATE_DB , job});
    });
}
