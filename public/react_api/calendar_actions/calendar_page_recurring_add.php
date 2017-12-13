<?php

$folder_level = '../';
include('../includes.php');
use Models\SchedJobBags;
use Models\SchedJobBagDepartment;
use Illuminate\Database\Capsule\Manager as Capsule;

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
            // Departments
            foreach($deps as $dpid){
                $jd                 = new SchedJobBagDepartment();
                $jd->job_dp_dept    = $dpid;
                $jd->job_id         = $id;
                $jd->job_dp_date    = $date;
                $jd->job_dp_created_date = $date;
                $jd->job_dp_qty     = $job->qty;
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
