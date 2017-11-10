<?php

$folder_level = '../';
include('../includes.php');
$u = new MyUtil();

use Models\SchedJobBagDepartment;
use Models\SchedJobBags;

$_POST = json_decode(file_get_contents('php://input'), true);

//$u::debugPost($_POST);
//
$extracted = array();
$temp = SchedJobBags::fillData($_POST,$extracted);
$temp['job_created_by'] = ($user)?$user->login_id: 0;

$departments = $extracted['job_departments'];
$id          = $extracted['id'];



// Edit
if($id){
    echo "You are editing ".json_encode($id);

// New
}else{
    // Check first if prism_job_number or prism_job_id has been created already
    $prism_job_id       = $u::dd('job_prism_job_id', $temp,0);
    $prism_job_number   = $u::dd('job_prism_number', $temp,0);
    $date               = date('Y-m-d',time());

    // Does not already exist
    if(!SchedJobBags::isBagExist($prism_job_id,$prism_job_number)){

        $job_bag = SchedJobBags::create($temp);

        // If job bag created successfully
        if($job_bag->exists()){
            // Create the departments after succesfully creating it.
            $jobId          = $job_bag->job_id;
            SchedJobBags::createDepartments($job_bag,$departments,$date);


            $jsonBag        = $job_bag->ToJson();
            echo '{ "msg": "Successfully created.","error": 0 , "job": '.$jsonBag.' }';
        }

    // A job bag link to this prism bag already exist notify the user that its already existed
    // you will not be allowed to create a duplicate job bag.

    } else{
        echo '{ msg: "Job bag already exists.",error: 1 }';
    }
}



// Grab the miscellaneous data and delete the not needed ones


?>