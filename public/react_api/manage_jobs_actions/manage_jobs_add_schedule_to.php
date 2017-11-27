<?php

$folder_level = '../';
include('../includes.php');
$u = new MyUtil();

use Models\SchedJobBagDepartment;
use Models\SchedJobBags;

$postData= $u::getRequestData();

$extracted = array();
$temp = SchedJobBags::fillData($postData,$extracted);
$temp['job_created_by'] = ($user)?$user->login_id: 0;

$departments = $extracted['job_departments'];
$id          = $extracted['job_id'];
$date        = $extracted['job_dp_date'];

// Edit
if($id){

    $job_bag = SchedJobBags::find($id);

    if($job_bag){
        // UNSET THE UNNEEDED VARIABLES
        unset($temp['job_created_by']);

        $deps       = $job_bag->dept()->get();
        $depKeys    = $deps->keyBy("job_dp_dept")->keys()->toArray();

        // FILL UP THE DATA
        $job_bag->fill($temp);
        $job_bag->save();

        // GET THE DIFFERENCE FORM THE DEPARTMENTS
        $departments   = array_map('intval',$departments);
        $newDepartments = array_diff($departments,$depKeys); // Only returns the difference from first array parameter

        $jsonBag        = $job_bag->ToJson();
        echo '{ "msg": "Successfully edited.","error": 0 , "job": '.$jsonBag.' }';
    }

// New
}else{
    // Check first if prism_job_number or prism_job_id has been created already
    $prism_job_id       = $u::dd('job_prism_job_id', $postData,0);
    $prism_job_number   = $u::dd('job_prism_number', $postData,0);
    $date               = $postData["job_dp_date"];


    $jobBag = SchedJobBags::isBagExist($prism_job_id,$prism_job_number);
    // Does not already exist
    if($jobBag){

        $job_bag = SchedJobBags::create($temp);

        // If job bag created successfully
        if($job_bag->exists()){

            // Create the departments after succesfully creating it.
            SchedJobBags::createDepartments($job_bag,$departments,$date);


            $jsonBag        = SchedJobBags::find($job_bag->job_id);
            $json           = $jsonBag->toJson();
            echo '{ "msg": "Successfully created.","error": 0 , "job": '.$json.' }';
        }

    // A job bag link to this prism bag already exist notify the user that its already existed
    // you will not be allowed to create a duplicate job bag.

    } else{
        $jsonBag        = $jobBag->ToJson();
        echo '{ msg: "Job bag already exists.",error: 1,"job": '.$jsonBag.'}';
    }
}

?>