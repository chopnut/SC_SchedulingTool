import { CALENDAR_PAGE_ADD_SCHEDULE_TO, CALENDAR_PAGE_CHANGE_DAYS } from '../common/Constants';
import app from '../modules/persistent';
import axios from 'axios';

/*This is where your logic is going to go
Remember the name of the function is the ActionCreator, the action itself is what gets return.
Special Note: With the use of thunk middleware , normally action creators only return object of type: and payload
but with thunk you can pass a function
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

            console.log(data);
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
export function calendar_page_change_days(days){
    return ((dispatch)=>{
            dispatch({type: CALENDAR_PAGE_CHANGE_DAYS });
        }
    );
}
