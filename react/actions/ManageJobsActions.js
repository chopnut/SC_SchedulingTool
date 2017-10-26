import {MANAGE_JOB_ADD_NEW} from '../common/Constants';

export function manage_job_add_new(job){
    return dispatch =>{
        dispatch ({
            type: MANAGE_JOB_ADD_NEW
        });
    }
}


