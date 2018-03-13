<?php

$folder_level = '../';
include('../includes.php');

use Models\SchedJobBagDepartment;
use Models\SchedJobBags;

$postData   = $u::getRequestData();

$extracted              = array();
$temp                   = SchedJobBags::fillData($postData,$extracted);
$temp['job_created_by'] =($user)?$user->login_id: 0;

$departments            = $extracted['job_departments'];
$id                     = $extracted['job_id'];
$date                   = $extracted['job_dp_date'];

// Setting up programming department

$department_setup = array();
$department_setup['programming_dept_id']        = $postData['programming_dept_id'];
$department_setup['selected_programming_dept']  = $postData['selected_programming_dept'];
$department_setup['selected_programmer']        = $postData['selected_programmer'];

// Edit,  you are not adding any job bag departments here
if($id){

    $job_bag = SchedJobBags::find($id);

    if($job_bag){
        // UNSET THE UNNEEDED VARIABLES
        unset($temp['job_created_by']);

        // FILL UP THE DATA
        $job_bag->fill($temp);
        $job_bag->save();

        $jsonBag = $job_bag->toJson();


        // Updating departments programmer

        $job_department = null;
        if($temp['job_type']== 'once'){
            $job_department = SchedJobBagDepartment::where('job_id', $id)->where('job_dp_dept', $department_setup['programming_dept_id'])->first();
        }else{
            if(!empty($department_setup['selected_programming_dept'])){
                $job_department = SchedJobBagDepartment::where('job_dp_id',$department_setup['selected_programming_dept'])->first();

            }
        }
        if($job_department!=null && $job_department->exists() && !empty($department_setup['selected_programmer'])){
            $job_department->job_dp_allocated_to = $department_setup['selected_programmer'];
            $job_department->save();
        }

        echo '{ "msg": "Successfully edited.","error": 0 , "job": '.$jsonBag.' }';

    }

// New,  you are adding new departments here
}else{
    // Check first if prism_job_number or prism_job_id has been created already
    $prism_job_id       = $u::dd('job_prism_job_id', $postData,0);
    $prism_job_number   = $u::dd('job_prism_number', $postData,0);

    $date               = $postData["job_dp_date"];
    $jobBag             = SchedJobBags::isBagExist($prism_job_id,$prism_job_number);

    // Does not already exist
    if($jobBag){

        $job_bag = SchedJobBags::create($temp);

        // If job bag created successfully
        if($job_bag->exists()){

            // Create the departments after succesfully creating it.
            SchedJobBags::createDepartments($job_bag,$departments,$date, $department_setup);

            echo '{ "msg": "Successfully created.","error": 0 , "job": '.$job_bag->toJson().' }';
        }

    // A job bag link to this prism bag already exist notify the user that its already existed
    // you will not be allowed to create a duplicate job bag.

    } else{
        $jsonBag        = $jobBag->ToJson();
        echo '{ msg: "Job bag already exists.",error: 1,"job": '.$jsonBag.'}';
    }
}

?>