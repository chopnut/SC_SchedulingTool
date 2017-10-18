require('../common/Constants');

function addedNewJob(job){
    return {
        type: JOB_NEW_CREATED,
        job: job
    }
}
