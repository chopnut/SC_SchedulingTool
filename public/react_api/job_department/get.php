<?php

require_once("../includes_process.php");

use Models\SchedJobBagDepartment;

/**
 * DESCRIPTION:
 *      Retrieve a single job department based on ID
 */

if(isset($data['id'])){
    $jd_id = $data['id'];


    if(!empty($jd_id)){
       
        $jd         = SchedJobBagDepartment::with(["jobbag", "jobGroup","dept","programmer"])->find($jd_id);
        

        if($jd){
            // JOB DEPARTMENT FOUND
            $json_jd            = $jd->toArray();
            $output["payload"]  = $json_jd;
            $output["message"]  = "OK";
            $output["returned"] = true;
        }else{
            // NO JOB DEPARTMENT FOUND
            $output["message"]  = "No job bag department found with id of $jd_id ";
            $output["returned"] = false;
        }
       
        http_response_code(200);

    }
}

echo json_encode($output);

?>