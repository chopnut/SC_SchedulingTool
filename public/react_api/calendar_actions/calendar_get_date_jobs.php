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

    $ctr = 0;
    foreach($jobs as $j){
        $depId  = $j->job_dp_dept;
        $uid    = $j->job_dp_allocated_to;
        $date   = $j->job_dp_date;
        $dept   = $j->dept;

        if(!isset($aDep[$depId]))     $aDep[$depId]         = array();

        // its a programmers job
        if($uid>0 && !is_null($uid)){
            if(!isset($pDep[$uid])) $pDep[$uid] = array();

            $pDep[$uid][$ctr]               = array('bag'=> $j->jobbag()->get()->first(),'dep'  => $j, 'grp'=> $j->jobGroup()->get()->first());
            $pDep[$uid][$ctr]['bag']['programmer'] = $j->programmer()->get()->first();


        }else{
            // its everything else job
            $aDep[$depId][$ctr] = array('bag'=> $j->jobbag()->get()->first(),'dep'=> $j,'grp'=> $j->jobGroup()->get()->first());
        }
        $ctr++;
    }

    $temp = [];
    $temp['master'] = $aDep;
    $temp['programmers_jobs'] = $pDep;

     echo json_encode($temp);
}

?>