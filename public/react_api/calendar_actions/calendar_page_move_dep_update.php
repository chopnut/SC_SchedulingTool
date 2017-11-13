<?php

$folder_level = '../';
include('../includes.php');
$u = new MyUtil();

use Models\SchedJobBagDepartment;

$_POST = json_decode(file_get_contents('php://input'), true);

// For debugging purposes
foreach($_POST as $key=>$value){
    if(is_array($value)){
        foreach($value as $key2=> $value2){
            echo "$key |$key2| = $value2 \n";
        }
        continue;
    }
    echo "$key = $value \n";
}

// Check first if the job bag exist before processing
$schedJob  = SchedJobBagDepartment::find($_POST['jobId']);
if($schedJob->exists()){
    $newDate               = $_POST['day']['date'];
    $schedJob->job_dp_date = $newDate;
    $schedJob->save();
     echo "UPDATED SUCCESSFULLY";
}


?>