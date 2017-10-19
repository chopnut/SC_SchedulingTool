<?php
    include('includes.php');
    $u = new MyUtil();

    if($u::areTheseSetAndNotEmpty('g','q')){
        $query    = $u::de('q');
        $subQuery = "QM_TITLE LIKE '%$query%'";

        if(is_numeric($query)){
            $num = intval($query);
            $subQuery = "QM_JOB_NUM = $num";
        }

        $sql        = "SELECT *FROM qmi1 WHERE $subQuery ORDER BY QM_ADD_DATE DESC ";

        $jobs       = $capsule::connection('sqlserver')->select($sql);
        $limit      = 7;
        $counter    = 0;
        $temp       = array();

        foreach($jobs as $job){
            $title      = $job->QM_TITLE;
            $jobNum     = $job->QM_JOB_NUM;
            $jobQty     = $job->QM_JOB_QTY;
            $lodgeDate  = $job->QM_REQD_DATE;
            $printDate  = $job->QM_DLY_DATE;
            $addDate    = $job->QM_ADD_DATE;

            $temp[$counter] = array();
            $temp[$counter]['job_title']         = trim($title);
            $temp[$counter]['job_prism_number']  = trim($jobNum);
            $temp[$counter]['job_qty']           = intval(trim($jobQty));
            $temp[$counter]['job_lodge_date']    = $u::getYmdHis($lodgeDate,"Y-m-d H:i:s","d/m/Y");
            $temp[$counter]['job_print_date']    = $u::getYmdHis($printDate,"Y-m-d H:i:s","d/m/Y");
            $temp[$counter]['job_due_date']      = $u::getYmdHis($addDate,"Y-m-d H:i:s","d/m/Y");
            $temp[$counter]['job_recurrence_or_once'] =  "once";
            $temp[$counter]['job_status']         =  "";


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
