import { CALENDAR_PAGE_ADD_SCHEDULE_TO,
         CALENDAR_PAGE_CHANGE_DAYS,
         CALENDAR_PAGE_CHANGE_GET_JOBS,
         CALENDAR_PAGE_MOVE_DEP_SIDE_BY_SIDE,
         CALENDAR_PAGE_ADD_RECURRING_TO_DATE,
         CALENDAR_PAGE_MOVE_DEP_SBS_UPDATE_DB,
         CALENDAR_PAGE_REFRESH,
         RESET_ALL_ACTION,
         IS_WORKING} from '../common/Constants';

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
            //  SET THE IS_WORKING VARIABLES FOR EVERY ACTION

            dispatch({type: IS_WORKING, isWorking: true });

            // DO PROCESSING BELOW
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

            console.log("ADD TO SCHEDULE: SENDING ",data);
            // If you have the authority proceed with the adding

            const req = axios.post(path_api,data);

            req.then((res)=>{
                console.log("POST ADD TO SCHEDULE: RECEIVED ",res.data);
                dispatch({type: CALENDAR_PAGE_ADD_SCHEDULE_TO, action:{ type: CALENDAR_PAGE_ADD_SCHEDULE_TO, payload: res.data }} );
                dispatch({type: IS_WORKING, isWorking: false });

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
            //  SET THE IS_WORKING VARIABLES FOR EVERY ACTION

            dispatch({type: IS_WORKING, isWorking: true });

            // DO PROCESSING BELOW

            const prom = app(settings);

            // get user log first
            prom.then((res)=> {
                let path_api    = settings.setting.react_api_folder + '/calendar_actions/calendar_page_get_scheduled.php?dates=';
                let params      = _.map(days,function(item){
                    return item.date;
                })

                const strParams = params.join(',');
                path_api = path_api+ strParams;

                // Check the api url for testing
                console.log("URL get jobs" , path_api);
                dispatch({type: CALENDAR_PAGE_CHANGE_DAYS , days });


                // If you have the authority proceed with the adding
                const req = axios.get(path_api);

                req.then((res)=>{
                    const master_jobs       = res.data.master;
                    const programmers_jobs  = res.data.programmers_jobs;

                    console.log("GET JOBS FROM CALENDAR ",res.data);

                    dispatch({type: CALENDAR_PAGE_CHANGE_GET_JOBS ,calendar_jobs: master_jobs, programmers_jobs });
                    dispatch({type: IS_WORKING, isWorking: false });

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
        //  SET THE IS_WORKING VARIABLES FOR EVERY ACTION

        dispatch({type: IS_WORKING, isWorking: true });

        // DO PROCESSING BELOW
        // Update the database first upon moving
        const prom = app(settings);

        prom.then((res)=> {
            // Do it when settings returns data
            // Set the api path to update the position

            const data = Object.assign({},info);
            let path_api = settings.setting.react_api_folder + '/calendar_actions/calendar_page_move_dep_update.php';


            console.log("POST SIDE BY SIDE: SENDING ",data, path_api);
            // Only update when post is successful
            const req = axios.post(path_api,data);

            req.then((res)=>{
                console.log("POST SIDE BY SIDE: RECEIVED ",res.data);

                // This is to update the database itself, there is no return value being used.
                // dispatch({type: CALENDAR_PAGE_MOVE_DEP_SBS_UPDATE_DB });

                // Update the state of the calendar now

                dispatch({type: CALENDAR_PAGE_MOVE_DEP_SIDE_BY_SIDE , info});
                dispatch({type: IS_WORKING, isWorking: false });

            });

        });
    });
}
/*
* This is for anything the main calendar page to update its view for any action that will need it.
* @from - date for sunday
* @to   - date for saturday
* */
export function calendar_page_refresh(settings, from, to){
    return ((dispatch)=>{
        //  SET THE IS_WORKING VARIABLES FOR EVERY ACTION
        dispatch({type: IS_WORKING, isWorking: true });

        // DO PROCESSING BELOW

        // Get app settings first, and get the react api folder
        // Update the database first upon moving
        const prom = app(settings);

        prom.then((res)=> {
            const path_api  = settings.setting.react_api_folder + '/calendar_actions/calendar_page_refresh.php?from='+from+'&to='+to;
            const req       = axios.get(path_api);

            req.then((res)=>{
                const master_jobs       = res.data.master;
                const programmers_jobs  = res.data.programmers_jobs;

                dispatch({type: CALENDAR_PAGE_REFRESH ,calendar_jobs: master_jobs, programmers_jobs });
                dispatch({type: IS_WORKING, isWorking: false });

            });
        })


    });
}
/*
* For resetting all actions when finished, so it doesnt call unneccessary action
* */
export function reset_all_action(){
    return ((dispatch)=>{
        const action = { type:'',payload:{} };
        dispatch({type: RESET_ALL_ACTION, action });
    });
}
/*
* Create recurring jobs to the date selected, no duplicates of job will be created
* job_departments will be based on number of the current jobs_deparments has been created in the past
* */
export function calendar_page_add_recurring_to_date(settings,jobsIds,date){
    return ((dispatch)=>{
        //  SET THE IS_WORKING VARIABLES FOR EVERY ACTION

        dispatch({type: IS_WORKING, isWorking: true });

        // DO PROCESSING BELOW

        const prom = app(settings); // Get the promise settings

        prom.then((res)=> {
            const path_api = settings.setting.react_api_folder + '/calendar_actions/calendar_page_recurring_add.php';
            const data     = {job_ids: jobsIds ,date: date};

            const req = axios.post(path_api,data);
            console.log("Sending recurring job: ",data);
            req.then((res)=>{
                const payload = res.data;
                const action = {type: CALENDAR_PAGE_ADD_RECURRING_TO_DATE, payload: payload};

                console.log("Post recurring job ",payload);
                dispatch({type: CALENDAR_PAGE_ADD_RECURRING_TO_DATE,action });
                dispatch({type: IS_WORKING, isWorking: false });


            });
        })

    });
}
/*
* This is for updating the schedule date for department bag when calendar_page_move_dep_side_by_side is invoke
* @info is the same variable used when changing the position of the dep bag.
* */
export function calendar_page_move_dep_sbs_update_db(info){
    return ((dispatch)=>{
        dispatch({type: CALENDAR_PAGE_MOVE_DEP_SBS_UPDATE_DB , info});
    });
}

