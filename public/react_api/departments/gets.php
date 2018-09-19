<?php

require_once("../includes_process.php");

use Models\Department;


/**
 * DESCRIPTION:
 *      Retrieves all the departments when there is no options set up
 *      with filters to return only those needed ones.
 */

$not_in             = array(); // id of the department comma delimited
$react_api_folder   = $sched::getSetting($settings,"react_api_folder");

if(isset($data["not_in"])){
    $tmpstr = $data["not_in"];

    if(!empty($tmpstr)){
        foreach(explode(",", $tmpstr) as $dept_id){
            $not_in[$dept_id] = $dept_id;
        }
    }
}

// Get departments structure from CURL

$api_department_path    = $react_api_folder."calendar_department_structure.php";
$departments            = json_decode($u::getCURL($api_department_path),true)['departmentsOrder'];
$department_kids        = Department::getKidsArray($departments);

$tmp = array();

foreach($department_kids as $kid){
    $id = $kid['id'];
    if(!isset($not_in[$id])){
        $tmp[] = $kid;
    }
}

$output["payload"]  = $tmp;
$output["returned"] = true;
$output["message"]  = "OK";
echo json_encode($output);

?>