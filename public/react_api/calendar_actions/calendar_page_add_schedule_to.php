<?php

	$folder_level = '../';
    include('../includes.php');
    use Models\SchedJobBags;
    use Illuminate\Database\Capsule\Manager as Capsule;

    // You need to read the php://input stream to get the raw data
    // before php applies their _post _get etc. on the stream

	$data = $u::getRequestData();

	if(count($data)>0){
        $data['job_created_by']  = ($user)?$user->login_id:0;
		$b                       = SchedJobBags::addScheduleTo($data);
    }else{
        echo "{msg: 'Error scheduling a job. Data not available', error: 1 }";
    }
// print_r( Capsule::getQueryLog());
?>