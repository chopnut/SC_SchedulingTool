<?php

$folder_level = '../';
include('../includes.php');

use Models\SchedJobBagDepartment;
use Models\SchedJobBags;

/*
 * PARAMS:
 * @date when job bags are created
 * @type of job bags recurring or once off only.
 */

$data = $u::getRequestData();



if(isset($data['date_from']) && isset($data['date_to'])  && isset($data['job_type'])){
    $job_type = $u::dd('job_type',$data);

    // From
    $job_date_from = $u::dd('date_from',$data);
    $job_date_from = $u::getYmdHis($job_date_from,'d/m/Y','Y-m-d 00:00:00');

    // To
    $job_date_to = $u::dd('date_to',$data);
    $job_date_to = $u::getYmdHis($job_date_to,'d/m/Y','Y-m-d 59:59:59');

    // If job type is once get the job according the date is been created.
    $json       = '[]';
    $job_bags   = [];


    if($job_type=='once'){

        $job_bags = SchedJobBags::orderBy('created_at','desc')
            ->where('created_at','>=',$job_date_from)
            ->where('created_at','<=',$job_date_to)
            ->where('job_type','=',$job_type)->get();

    }else{
    // If job type is recurring get the jobs regardless of the date

        $job_bags = SchedJobBags::where('job_type','=','recurring')->get();

    }
    if(count($job_bags)>0){
        $json = $job_bags->toJson();
    }
    echo "{\"payload\":$json}";
}else{
    echo "{\"payload\":[]}";
}
?>