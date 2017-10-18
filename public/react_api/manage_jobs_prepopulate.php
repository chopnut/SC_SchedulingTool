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
            $temp[$counter]['title']        = trim($title);
            $temp[$counter]['jobNum']       = trim($jobNum);
            $temp[$counter]['jobQty']       = intval(trim($jobQty));
            $temp[$counter]['lodgeDate']    = $u::getYmdHis($lodgeDate,"Y-m-d H:i:s","d/m/Y");
            $temp[$counter]['printDate']    = $u::getYmdHis($printDate,"Y-m-d H:i:s","d/m/Y");
            $temp[$counter]['addDate']      = $u::getYmdHis($addDate,"Y-m-d H:i:s","d/m/Y");

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
