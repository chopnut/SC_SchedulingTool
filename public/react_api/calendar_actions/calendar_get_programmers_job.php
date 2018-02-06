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

    $ctr = 0;
    foreach($programmersJobs as $j){
        $uid    = $j->job_dp_allocated_to;
        $date   = $j->job_dp_date;

        $dateTimeStamp = DateTime::createFromFormat("d/m/Y", $date)->getTimestamp();
        $dayWeek  = date("w",$dateTimeStamp);

        if(!isset($temp[$uid]))         $temp[$uid]         = array();
        if(!isset($temp[$uid][$date]))  $temp[$uid][$date]  = array();

        // [USER_ID][DAY_DATE][COUNTER_ARRAY][bag|dep]
        $temp[$uid][$dayWeek][$ctr] = array();
        $temp[$uid][$dayWeek][$ctr]['bag'] = $j->jobbag()->get();
        $temp[$uid][$dayWeek][$ctr]['dep'] = $j;

        $ctr++;
    }

}

echo json_encode($temp);
?>