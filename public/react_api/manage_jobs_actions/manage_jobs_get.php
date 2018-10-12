<?php

$folder_level = '../';
include('../includes.php');

use Models\SchedJobBags;
use Models\SchedJobBagDepartmentGroup;
use Models\SchedJobBagDepartment;
/**
 * Get the job for AddEditForm.js to be prepopulated in the form.
 */

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
        $t['job_customer_name'] = $schedBag->job_customer_name;

        // Check for a programmer when the job is "once" job_type
        // This api is only called on when edit form is rendered once.
        if($schedBag->job_type == 'once'){
            // Get the job group first
            $sched_job_department   = SchedJobBagDepartmentGroup::where("job_id", $schedBag->job_id)->first();
            $sched_group_id         = $sched_job_department->job_group_id;

            // Get the department now
            $sched_dep              = SchedJobBagDepartment::where("job_group_id", $sched_group_id)->first();
            $programmer             = $sched_dep->programmer;
            $prog_tmp               = array();
            $prog_tmp['userid']     = $programmer->login_id;
            $prog_tmp['first_name'] = $programmer->first_name;
            $prog_tmp['last_name']  = $programmer->last_name;
            $prog_tmp['email']      = $programmer->email;

            $t['programmer'] = $prog_tmp;
        }

        $json = json_encode($t);
        echo "{\"msg\": \"\", \"error\": 0 , \"job\": $json }";
    }else{
        echo "{msg: 'Job bag does not exist', error: 1 }";
    }

}else{
    echo "{msg: 'Job id is not set', error: 1 }";
}

?>