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


    print_r($post);
}else{
    echo "{msg: 'Not enough data to process', error: 1 }";
}

?>
