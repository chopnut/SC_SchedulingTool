<?php

	$folder_level = '../';
    include('../includes.php');
    $u = new MyUtil();

    // You need to read the php://input stream to get the raw data
    // before php applies their _post _get etc. on the stream

	$_POST = json_decode(file_get_contents('php://input'), true);
	if(count($_POST)==10){
		
	}	
    print_r($_POST);

?>