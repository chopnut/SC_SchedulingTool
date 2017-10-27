import {CALENDAR_PAGE_ADD_SCHEDULE_TO} from '../common/Constants';
import app from '../modules/persistent';
import axios from 'axios';

// This is where your logic is going to go
// Remember the name of the function is the ActionCreator, the action itself is what gets return.
// Special Note: With the use of thunk middleware , normally action creators only return object of type: and payload
// but with thunk you can pass a function
export function calendar_page_add_schedule_to(settings,job,date){
    return((dispatch)=>{
        const promise = app(settings);

        // Get user log first
        promise.then((res)=>{
            const path_api  = settings.setting.react_api_folder+'/calendar_actions/calendar_page_add_schedule_to.php';
            const userlog   = res.data.userlog;
            const data = {...job,date};

            // If you have the authority proceed with the adding
            const request = axios.post(path_api,data);
            request.then((res)=>{
                console.log("POST CREATION SCHEDULE: ",res.data);
                dispatch({type: CALENDAR_PAGE_ADD_SCHEDULE_TO, job, date});
            });

        });
    });

}
