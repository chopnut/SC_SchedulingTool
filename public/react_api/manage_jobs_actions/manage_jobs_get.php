<?php

$folder_level = '../';
include('../includes.php');

use Models\SchedJobBags;


if($u::areTheseSet('get','job_id')){
    $data  = $u::getRequestData();
    $jobId = $u::dd('job_id',$data,0);

    $schedBag = SchedJobBags::find($jobId);


    if($schedBag){
        $t = array();
        $t['job_id']            = $schedBag->job_id;
        $t['job_prism_job_id']  = $schedBag->job_prism_job_id;
        $t['job_prism_number']  = $schedBag->job_prism_number;
        $t['job_title']         = $schedBag->job_title;
        $t['job_colour']        = $schedBag->job_colour;
        $t['job_print_date']    = $schedBag->job_print_date;
        $t['job_due_date']      = $schedBag->job_due_date;
        $t['job_lodge_date']    = $schedBag->job_lodge_date;
        $t['job_reports_ids']   = $schedBag->job_reports_ids;
        $t['job_comments']      = $schedBag->job_comments;
        $t['job_status']        = $schedBag->job_status;
        $t['job_qty']           = $schedBag->job_qty;
        $t['job_type']          = $schedBag->job_type;
        $t['job_departments']   = $schedBag->job_departments;
        $t['job_dp_date']       = '';

        $json = json_encode($t);
        echo "{\"msg\": \"\", \"error\": 0 , \"job\": $json }";
    }else{
        echo "{msg: 'Job bag does not exist', error: 1 }";
    }

}else{
    echo "{msg: 'Job id is not set', error: 1 }";
}

?>