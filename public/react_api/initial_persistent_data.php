<?php
include("includes.php");

$todaysT      = time();
$todays_date  = date("d/m/Y",$todaysT);

$temp = array();
$temp['userlog'] = $user;
$temp['today']   = $todays_date;

echo json_encode($temp);
?>
