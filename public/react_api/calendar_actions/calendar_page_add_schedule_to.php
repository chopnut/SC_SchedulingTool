<?php

	$folder_level = '../';
    include('../includes.php');
    $u = new MyUtil();

    use Models\SchedJobBags;
    use Models\SchedJobBagDepartment;
    use Models\Department;

    // You need to read the php://input stream to get the raw data
    // before php applies their _post _get etc. on the stream

	$_POST = json_decode(file_get_contents('php://input'), true);
	if(count($_POST)>0){
		$b = SchedJobBags::addScheduleTo($_POST);
	}	

?>