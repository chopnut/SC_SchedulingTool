<?php
session_start();
date_default_timezone_set('Australia/Brisbane');

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// set $folder_level to the includer for the includes to work right
$level     = "";
if(isset($folder_level)){
	$level = $folder_level;
}

// make sure to set the level of folders using include(?level=../)
$config  	= $level.'../../../config.php';
$autoload 	= $level.'../../vendor/autoload.php';
$myutil     = $level.'../../app/MyUtil.php';
$globalvar  = $level.'global_variables.php';
$myapp      = $level.'../../app/App.php';


require_once($config);
require_once($autoload);
require_once($myutil);
require_once($globalvar);
require_once($myapp);

$db      = new Models\Database();
$capsule = $db->getCapsule();
$app     = new App();
$user    = $app->check_if_logged_in();
$u 		 = new MyUtil();
?>
