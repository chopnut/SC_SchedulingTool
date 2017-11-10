import {MANAGE_JOB_ADD_NEW_EDIT} from '../common/Constants';
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
            req.then((res)=>{
                let returndata = res.data;

                console.log("INPUT:  ", job );
                dispatch ({type: MANAGE_JOB_ADD_NEW_EDIT , timestamp: new Date().getTime() ,resp: returndata });
            });
        });
    });
}


