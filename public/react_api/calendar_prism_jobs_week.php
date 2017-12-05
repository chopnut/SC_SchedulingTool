<?php
    include('includes.php');

    use Models\PrismJobBag;
	use Models\SchedJobBagDepartment;
	use Models\SchedJobBags;
    // Query variable
    // from and to must be present
    if($u::areTheseSetAndNotEmpty('g','from','to')){

    	$from = $u::getYmdHis($u::de('from'),'','Y-m-d 00:00:00');
    	$to   = $u::getYmdHis($u::de('to'),'','Y-m-d 00:00:00');

		// CHANGE THIS
//		$from = '2017-10-01';
//		$to   = '2017-10-07';

        $sql = "SELECT ".JOBBAGS_FIELDNAMES_WITH_CUSTOMER_INFO." FROM qmi1 ".WITH_CUSTOMER_INFO."  WHERE qm_add_date>='$from' AND qm_add_date<='$to' ORDER BY qm_add_date DESC";
    	$prismJobBags = $capsule::connection('sqlserver')->select($sql);
    

    	$temp 		= array();
		$i 			= 0;

    	foreach($prismJobBags as $bag){

    		$qty    = $bag->QM_JOB_QTY;
    		$title	= $bag->QM_TITLE;

    		$jobNum = intval(trim($bag->QM_JOB_NUM));
    		$jobId	= intval(trim($bag->JOB_ID));

 			$customerCode = $bag->QM_CUST_CODE;  // Customer code
 			$customerName = $bag->RM_NAME;
 	

    		$reqDate 	= date("d/m/Y",strtotime($bag->QM_REQD_DATE));
    		$dateAdd 	= date("d/m/Y",strtotime($bag->QM_ADD_DATE));
    		$datePrint 	= date("d/m/Y",strtotime($bag->QM_DLY_DATE));

			$day 		= strtolower($u::getDayFromDate($bag->QM_ADD_DATE));


    		if(!isset($temp[$day])){
    			$temp[$day] 	= array();
    			$i 				= 0;
    		}
			$temp[$day][$i]['job_id'] 				= 0;
			$temp[$day][$i]['job_prism_number'] 	= $jobNum;
			$temp[$day][$i]['job_prism_job_id']		= $jobId;
			$temp[$day][$i]['job_title'] 			= $title;
			$temp[$day][$i]['job_due_date'] 		= $reqDate;
			$temp[$day][$i]['job_print_date']       = $datePrint;
			$temp[$day][$i]['job_qty'] 				= round($qty);

			// Miscellaneous fields
			$temp[$day][$i]['job_added_date'] 		= $dateAdd;
			$temp[$day][$i]['job_customer_code']    = $customerCode;
			$temp[$day][$i]['job_customer_name']    = $customerName;
			$temp[$day][$i]['isPrism']    			= 1;

			// Get jobs from mysql
			$schedBag                               = SchedJobBags::where("job_prism_job_id",  $jobId)->first();
			if($schedBag){
				$temp[$day][$i]['isAdded']  = 1;
				$temp[$day][$i]['job_id'] 	= $schedBag->job_id;

			}else{
				$temp[$day][$i]['isAdded'] = 0;
			}

			$i++;
    	}


    	echo "{ \"jobs\": ".json_encode($temp)." }";

    }

?>
