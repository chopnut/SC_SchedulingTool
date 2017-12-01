<?php
    include('includes.php');

    if($u::areTheseSetAndNotEmpty('g','q')){
        $query    = $u::de('q');
        $subQuery = "QM_TITLE LIKE '%$query%'";

        if(is_numeric($query)){
            $num = intval($query);
            $subQuery = "QM_JOB_NUM = $num";
        }

        $sql        = "SELECT ".JOBBAGS_FIELDNAMES_WITH_CUSTOMER_INFO." FROM qmi1 
        ".WITH_CUSTOMER_INFO." WHERE $subQuery ORDER BY QM_ADD_DATE DESC ";

        $jobs       = $capsule::connection('sqlserver')->select($sql);
        $limit      = 7;
        $counter    = 0;
        $temp       = array();

        foreach($jobs as $job){
            $id          = $job->JOB_ID;
            $title       = $job->QM_TITLE;
            $jobNum      = $job->QM_JOB_NUM;
            $jobQty      = $job->QM_JOB_QTY;
            $lodgeDate   = $job->QM_REQD_DATE;   // LODGE DATE
            $printDate   = $job->QM_DLY_DATE;    // PRINT DATE
            $addDate     = $job->QM_ADD_DATE;    // Miscelaneous field to check when it gets added
            $customerCode= $job->QM_CUST_CODE;  // Customer code

            $temp[$counter] = array();

            // Only add fields that are relevant to the form
            // dont add any fields that is likely to be edited by the user
            $temp[$counter]['job_prism_job_id']  = intval(trim($id));
            $temp[$counter]['job_prism_number']  = intval(trim($jobNum));
            $temp[$counter]['job_title']         = trim($title);
            $temp[$counter]['job_print_date']    = $u::getYmdHis($printDate,"Y-m-d H:i:s","d/m/Y");
            $temp[$counter]['job_due_date']      = $u::getYmdHis($lodgeDate,"Y-m-d H:i:s","d/m/Y");
            $temp[$counter]['job_lodge_date']    = $u::getYmdHis($lodgeDate,"Y-m-d H:i:s","d/m/Y");
            $temp[$counter]['job_qty']           = intval(trim($jobQty));

            // Miscellaneous fields
            $temp[$counter]['job_added_date']       = $u::getYmdHis($addDate,"Y-m-d H:i:s","d/m/Y");
            $temp[$counter]['job_customer_code']    = $customerCode;


            if($limit<$counter){
                $left = count($jobs)-$limit;
                $temp[$counter+1]["left"] = $left;
                break;
            }
            $counter ++;
        }

        $jsonDecode = json_encode($temp);
        echo $jsonDecode;
    }
?>
