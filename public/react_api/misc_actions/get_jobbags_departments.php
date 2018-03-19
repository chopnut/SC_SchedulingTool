<?php
// -------- REQUIRED FILE & LINES -------- //

$folder_level = '../';
include('../includes.php');
use Illuminate\Database\Capsule\Manager as Capsule;
//  $data = $u::getRequestData();
//  print_r( Capsule::getQueryLog());

// -------- CUSTOM CODE BELOW ------------ //
use Models\SchedJobBagDepartment;

/*
 * Get latest departments for a job_id, how many days ago
 * USAGE: for department-jobs dropdown in the jobeditform job
 * @job_id the unique job id
 * @num_days_ago the limit of how far to get the departments from
 * @department_id is the set global programming id
 * @OPTIONAL['dep_id'] is to get a particular department
 */

if($u::areTheseSetAndNotEmpty('get','job_id','num_days_ago','department_id')){
    $d_id           = $u::d('department_id');
    $num_days_ago   = $u::d('num_days_ago');
    $job_id         = $u::d('job_id');

    $from_date       = date("Y-m-d", strtotime("-$num_days_ago days"));

    $job_departments = array();

    // if dep_id is set up you are trying to get the particular department for it
    if(isset($_GET['dep_id']) && $_GET['dep_id']>0){

        $job_departments = SchedJobBagDepartment::where("job_dp_date",">=",$from_date)
            ->where("job_id", $job_id)
            ->where("job_dp_dept", $d_id)
            ->orWhere("job_dp_id", $_GET['dep_id'])
            ->orderBy('job_dp_date','DESC')->get();

    }else{

        $job_departments = SchedJobBagDepartment::where("job_dp_date",">=",$from_date)
            ->where("job_id", $job_id)
            ->where("job_dp_dept", $d_id)
            ->orderBy('job_dp_date','DESC')->get();
    }

    $drop_down_options    = [];
    $drop_down_options[]  = ["key"=>0,"text"=> "--- clear --","value"=>""];
    $allocatee_list       = [];

    foreach($job_departments as $d){
        $job_group                      = $d->jobGroup;
        $dept                           = $d->dept;
        $prog                           = $d->programmer;

        $content                        = "DEPARTMENT: ". $dept->job_dept_desc ." | ID: ".$d->job_dp_id." | DATE: ".$d->job_dp_date." | QTY: ".$job_group->job_group_qty;
        $drop_down_options[]            = array("key"=>$d->job_dp_id, "text"=>$content, "value"=> $d->job_dp_id);
        $allocatee_list[$d->job_dp_id]  = $d->programmer;
    }

    $drop_down_options  = json_encode($drop_down_options);
    $json_list          = json_encode($allocatee_list,JSON_FORCE_OBJECT);
    echo "{\"error\": 0 , \"msg\": \"\" ,\"payload\": $drop_down_options, \"list\": $json_list }";

}else{
    echo "{\"error\": 1 , \"msg\": \"job_id and num_days_ago not set.\" ,\"payload\": [], \"list\": {}}";

}
?>