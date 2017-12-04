<?php

$folder_level = '../';
include('../includes.php');
use Models\SchedJobBags;
use Models\SchedJobBagDepartment;
use Illuminate\Database\Capsule\Manager as Capsule;

// @USAGE
// @date
// Description: Get all recurring jobs that are not yet set up for that particular date.

if($u::areTheseSetAndNotEmpty('get','date')){

    $date       = $u::d('date');
    $date       = \DateTime::createFromFormat('d/m/Y', $date)->format('Y-m-d');;
    $jobs       = SchedJobBags::where('job_type','=','recurring')->get();

    // Check jobs count number
    if(count($jobs)>0){
        $tempJobs  = array();
        $n = 0 ;
        // Get the department that is already set for that date.
        foreach($jobs as $job){
            $jobId      = $job->job_id;
            $jobDeptBag = SchedJobBagDepartment::where('job_dp_created_date','=',$date)->where('job_id','=',$jobId)->first();

            if(count($jobDeptBag)>0){ // Job exist so skip it
                continue;
            }
            $tempJobs[$n]     = array();
            $tempJobs[$n]['key']   = $job->job_id;
            $tempJobs[$n]['value'] = $job->job_id;
            $tempJobs[$n]['text']  = $job->job_title;
            $n++;
        }
        $encodedJobs = json_encode($tempJobs);
        echo "{ \"jobs\": $encodedJobs }";
    }else{
        // No recurring jobs
        echo "{\"jobs\": [] }";
    }
}else{
    echo "{}";
}

?>
