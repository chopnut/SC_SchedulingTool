<?php

// -------- REQUIRED FILE & LINES -------- //

$folder_level = '../';
include('../includes.php');
use Illuminate\Database\Capsule\Manager as Capsule;
use Models\SchedJobBagDepartment;

$data = $u::getRequestData();

// -------- CUSTOM CODE BELOW ------------//

// GET PROGRAMMERS JOB FOR THE WHOLE WEEK
// @FROM
// @TO

$temp = array();

if($u::areTheseSetAndNotEmpty('get','from','to')){
    $from   = $u::getYmdHis($u::d('from'),"d/m/Y","Y-m-d 00:00:00");
    $to     = $u::getYmdHis($u::d('to')  ,"d/m/Y","Y-m-d 59:59:59");

    $programmersJobs = SchedJobBagDepartment
        ::where('job_dp_date','>=', $from)
        ->where('job_dp_date','<=', $to)
        ->whereNotNull('job_dp_allocated_to')
        ->get();


    foreach($programmersJobs as $j){
        $uid    = $j->job_dp_allocated_to;
        $date   = $j->job_dp_date;

        if(!isset($temp[$uid]))         $temp[$uid]         = array();
        if(!isset($temp[$uid][$date]))  $temp[$uid][$date]  = array();

        $temp[$uid][$date][] = $j;
    }
}

echo json_encode($temp);
?>