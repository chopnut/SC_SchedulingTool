<?php

// -------- REQUIRED FILE & LINES -------- //

$folder_level = '../';
include('../includes.php');
use Illuminate\Database\Capsule\Manager as Capsule;
// print_r( Capsule::getQueryLog());
$data = $u::getRequestData();

// -------- CUSTOM CODE BELOW ------------//

use Models\SchedJobBags;

/*
 * PARAMS:
 * @date when job bags are created
 * @type of job bags recurring or once off only.
 */


if(isset($data['date_from']) && isset($data['date_to'])  && isset($data['job_type'])){
    $date_field     = $u::dd('date_field' ,$data);
    $search_term    = trim($u::dd('search_term',$data));
    $job_type       = $u::dd('job_type'   ,$data);

    // From
    $job_date_from = $u::dd('date_from',$data);
    $job_date_from = $u::getYmdHis($job_date_from,'d/m/Y','Y-m-d 00:00:00');

    // To
    $job_date_to = $u::dd('date_to',$data);
    $job_date_to = $u::getYmdHis($job_date_to,'d/m/Y','Y-m-d 59:59:59');

    // If job type is once get the job according the date is been created.
    $json       = '[]';
    $job_bags   = [];


    $job_bags = SchedJobBags::orderBy('created_at','desc')
        ->where($date_field ,'>=',$job_date_from)
        ->where($date_field ,'<=',$job_date_to)
        ->where('job_type','=',$job_type)->get();

    if(!empty($search_term)){
        $job_bags = SchedJobBags::orderBy('created_at','desc')
            ->where('job_type','=',$job_type)
            ->where('job_title','like',$search_term)->get();
    }

    if(count($job_bags)>0){
        $json = $job_bags->toJson();
    }
    echo "{\"payload\":$json}";
}else{
    echo "{\"payload\":[]}";
}
?>