import {MANAGE_JOB_ADD_NEW_EDIT,
        IS_WORKING} from '../common/Constants';
import app from '../modules/persistent';
import _ from 'lodash';
import axios from 'axios';

export function manage_job_add_new_edit(settings, job){
    return ((dispatch) =>{
        const prom = app(settings);

        // Get user log first
        prom.then((res)=> {
            const path_api = settings.setting.react_api_folder + 'manage_jobs_actions/manage_jobs_add_schedule_to.php';
            // If you have the authority proceed with the adding

            const req = axios.post(path_api,job);
            console.log("SAVING: ",path_api,job);
            req.then((res)=>{
                let returndata = res.data;
                console.log("PROMISE GET: ",returndata);
                dispatch ({type: MANAGE_JOB_ADD_NEW_EDIT ,resp: returndata });
            });
        });
    });
}

export function manage_job_update_views(settings){
    return (
        (dispatch)=>{
            dispatch({type: IS_WORKING, isWorking: true });
        }
    );
}


