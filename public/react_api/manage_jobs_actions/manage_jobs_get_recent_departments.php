<?php
// -------- REQUIRED FILE & LINES -------- //
$folder_level = '../';
include('../includes.php');
use Illuminate\Database\Capsule\Manager as Capsule;


// -------- CUSTOM CODE BELOW ------------ //
use \Models\SchedJobBags;
use \Models\SchedJobBagDepartment;
/*
 * This will get all recent department bags attached to the job bags.
 * @job_id
 */

if($u::areTheseSet('get','job_id')){
    $job_id             = $u::d('job_id');
    $not_done_status    = 'done';
    $job_bag_departments = SchedJobBagDepartment::where('job_id', $job_id)
                            ->where(function($q) use($not_done_status){
                                $q->whereNull('job_dp_status')
                                    ->orWhere('job_dp_status','<>',$not_done_status);
                            })->get();
    $temp = [];
    foreach($job_bag_departments as $dp){
        $temp[] = $dp->toArray();
    }

    echo "{\"msg\": \"\" , \"error\": 0 , \"payload\": ".json_encode($temp)." }";
    exit;
}
echo "{\"msg\": \"No setting has been detected\" , \"error\": 1 , \"payload\": [] }";


?>