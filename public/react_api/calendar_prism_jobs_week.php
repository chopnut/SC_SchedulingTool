<?php
    include('includes.php');
    $u = new MyUtil();
    use Models\PrismJobBag;
    // Query variable
    // from and to must be present
    if($u::areTheseSetAndNotEmpty('g','from','to')){
    	$from = $u::getYmdHis($u::de('from'),'','Y-m-d 00:00:00');
    	$to   = $u::getYmdHis($u::de('to'),'','Y-m-d 00:00:00');

        $sql = "SELECT *FROM qmi1 WHERE qm_add_date>='$from' AND qm_add_date<='$to' ORDER BY qm_add_date DESC";
    	$prismJobBags = $capsule::connection('sqlserver')->select($sql);


    	$temp = array();
		$i = 0;

    	foreach($prismJobBags as $bag){

    		$qty    = $bag->QM_JOB_QTY;
    		$title	= $bag->QM_TITLE;
    		$jobNum = $bag->QM_JOB_NUM;
    		$reqDate= date("d/m/Y",strtotime($bag->QM_REQD_DATE));
    		$dateAdd= date("d/m/Y",strtotime($bag->QM_ADD_DATE));

    		$day 	= strtolower($u::getDayFromDate($bag->QM_ADD_DATE));

    		if(!isset($temp[$day])){
    			$temp[$day] 	= array();
    			$i 				= 0;
    		}
    		$temp[$day][$i]['title'] 	= $title;
			$temp[$day][$i]['jobNum'] 	= trim($jobNum);
			$temp[$day][$i]['dateAdd'] 	= $dateAdd;
			$temp[$day][$i]['dateReq'] 	= $reqDate;
			$temp[$day][$i]['qty'] 		= $qty;
			$i++;

    	}
    	echo json_encode($temp);

    }

?>
