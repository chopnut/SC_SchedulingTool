<?php


// -------- REQUIRED FILE & LINES -------- //
$folder_level = '../';
include('../includes.php');
use Illuminate\Database\Capsule\Manager as Capsule;
// print_r( Capsule::getQueryLog());
$data = $u::getRequestData();

// -------- CUSTOM CODE BELOW ------------//
use Models\SchedJobBags;

// You need to read the php://input stream to get the raw data
// before php applies their _post _get etc. on the stream



if(count($data)>0){
    $data['job_created_by']  = ($user)?$user->login_id:0;
    SchedJobBags::addScheduleTo($data);

}else{
    echo "{msg: 'Error scheduling a job. Data not available', error: 1 }";
}

?>