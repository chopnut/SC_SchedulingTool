<?php

$folder_level = '../';
include('../includes.php');
use Illuminate\Database\Capsule\Manager as Capsule;

use Models\SchedJobBags;
use Models\SchedJobBagDepartment;
use Models\SchedJobBagDepartmentGroup;

// @USAGE
// @date
// Description: Add daily jobs into a particular date.

$post = $u::getRequestData();

if(count($post)>0){
    $date = $u::dd('date',$post);
    $jobs = $u::dd('job_ids',$post);

    $jbCounter = 0;
    foreach($jobs as $id){
        $job  = SchedJobBags::find($id);

        if($job){
            $deps = $job->job_departments;

            $tmp = array();

            // Create group id

            $jd_group = new SchedJobBagDepartmentGroup();
            $jd_group->job_group_qty = $job->job_qty;
            $jd_group->job_id        = $job->job_id;
            $jd_group->save();

            // Departments

            foreach($deps as $dpid){
                $jd                 = new SchedJobBagDepartment();
                $jd->job_dp_dept    = $dpid;
                $jd->job_id         = $id;
                $jd->job_dp_date    = $date;
                $jd->job_dp_created_date = $date;
                $jd->job_dp_qty     = $job->qty;
                $jd->job_group_id   = $jd_group->job_group_id;
                $tmp[] = $jd;
            }

            // Save the departments

            $job->dept()->saveMany($tmp);

        }else{
            continue;
        }
        $jbCounter++;
    }
    if($jbCounter==0){
        echo "{msg: 'No jobs added to the schedule', error: 1}";
    }else{
        echo "{msg: 'Successfully added daily jobs', error: 0}";
    }

}else{
    echo "{msg: 'Not enough data to process', error: 1 }";
}

?>
