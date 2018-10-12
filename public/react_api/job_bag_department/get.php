<?php

require_once("../includes_process.php");

use Models\SchedJobBagDepartment;

/**
 * DESCRIPTION:
 *      1. Retrieve a single job department based on ID
 *      eg: get.php?id=1000
 * 
 *      2. Retrieve all job departments based on their job_group_id field
 *      eg: get.php?job_group_id=5
 */

 // 1. Retrieve a single job department based on ID
if(isset($data['id'])){
    $jd_id = $data['id'];


    if(!empty($jd_id)){
       
        $jd = SchedJobBagDepartment::with(["jobbag", "jobGroup","dept","programmer"])->find($jd_id);
        

        if($jd){
            // FOUND
            $json_jd            = $jd->toArray();
            $output["payload"]  = $json_jd;
            $output["message"]  = "OK";
            $output["returned"] = true;
        }else{
            //NOT FOUND
            $output["message"]  = "No job bag department found with id of $jd_id ";
            $output["returned"] = false;
        }
       
        http_response_code(200);

    }
// 2. Retrieve all job departments based on their job_group_id field
}else if (isset($data['job_group_id'])){
    $jd_group_id = $data['job_group_id'];

    if(!empty($jd_group_id)){

        $deps = SchedJobBagDepartment::where('job_group_id', $jd_group_id)->get();

        if($deps){

            $json_jd            = $deps->toArray();
            $output["payload"]  = $json_jd;
            $output["message"]  = "OK";
            $output["returned"] = true;

        }else{
            $output["message"]  = "No job bag department  group found with id of $jd_group_id ";
            $output["returned"] = false;
            $output["error"]    = 1;
        }

    }
}

echo json_encode($output);

?>