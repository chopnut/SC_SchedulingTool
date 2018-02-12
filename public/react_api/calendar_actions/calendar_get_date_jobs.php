<?php

// -------- REQUIRED FILE & LINES -------- //

$folder_level = '../';
include('../includes.php');
use Illuminate\Database\Capsule\Manager as Capsule;
use Models\SchedJobBagDepartment;

$data = $u::getRequestData();
// print_r( Capsule::getQueryLog());

// -------- CUSTOM CODE BELOW ------------//

// THIS WILL GET CALENDAR JOBS AND PROGRAMMERS JOBS IN THE VIEW DATE PAGE
// EG: @at=09/02/18

$aDep = array();
$pDep = array();

if($u::areTheseSetAndNotEmpty('get','at')){
    $at     = $u::d('at');
    $at     = $u::getYmdHis($at,'d/m/Y','Y-m-d');
    $jobs   = SchedJobBagDepartment::where('job_dp_date','=', $at)->get();

    foreach($jobs as $j){
        $depId  = $j->job_dp_dept;
        $uid    = $j->job_dp_allocated_to;
        $date   = $j->job_dp_date;

        if(!isset($aDep[$depId]))     $aDep[$depId]         = array();

        // its a programmers job
        if($uid>0 && !is_null($uid)){
            if(!isset($pDep[$uid]))       $pDep[$uid]           = array();
            $pDep[$uid][] = array('bag'=> $j->jobbag()->get(),'dep' => $j);
        }else{
        // its everything else job
            $aDep[$depId][] = array('bag'=> $j->jobbag()->get(),'dep' => $j);
        }
    }

    $temp = [];
    $temp['master'] = $aDep;
    $temp['programmers_jobs'] = $pDep;

     echo json_encode($temp);
}

?>