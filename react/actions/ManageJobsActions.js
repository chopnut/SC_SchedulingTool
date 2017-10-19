require('../common/Constants');

export function ADD_NEW_JOB(job){
    return {
        type: ADD_NEW_JOB,
        job: job
    }
}
