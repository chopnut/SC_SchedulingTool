<?php

$folder_level = '../';

include('../includes.php');
use Models\SchedJobBagDepartment;
use Illuminate\Database\Capsule\Manager as Capsule;
// print_r( Capsule::getQueryLog());

// You need to read the php://input stream to get the raw data
// before php applies their _post _get etc. on the stream
$data = $u::getRequestData();

/*
 * This Api gets the job departments for a particular dates
 * required data:
 * @job_dp_date: Date eg. 2017-09-09 Already formatted to be used in the database
 */

if(isset($data['job_dp_date'])){
    $job_dp_date = $u::dd('job_dp_date',$data);
    $jobs_dp = SchedJobBagDepartment::with('jobbag')->where('job_dp_date','=',$job_dp_date)->get();

    if(count($jobs_dp)>0){
        $jobs_dp_ = $jobs_dp->toArray();
        $t        = array();
        foreach($jobs_dp_ as $val){
            $dep_id     = $val['job_dp_dept'];
            if(!isset($t[$dep_id])) $t[$dep_id] = array();
            $t[$dep_id][] = $val;
        }
        // @RETURN AS
        /*
         * data[job_dept_id][] = job_departments
         */
        $json = json_encode($t);
        echo "{\"payload\":$json}";
    }else{
        echo "{\"payload\":{}";
    }
}


?>