<?php
session_start();
date_default_timezone_set('Australia/Brisbane');

// set $folder_level to the includer for the includes to work right
$level     = "";
if(isset($folder_level)){
	$level = $folder_level;
}

// make sure to set the level of folders using include(?level=../)
require ($level.'../../../config.php');
require ($level.'../../vendor/autoload.php');
require ($level.'../../../internalreports/app/MyUtil.php');
require ($level.'global_variables.php');
require ($level.'../../app/App.php');

$db      = new Models\Database();
$capsule = $db->getCapsule();
$app     = new App();
$user    = $app->check_if_logged_in();
?>
