<?php
include("includes.php");

$todaysT      = time();
$todays_date  = date("d/m/Y",$todaysT);

use Models\SchedSettings;
$schedSettings      = SchedSettings::all();
$defUserSettings    = SchedSettings::getSetting($schedSettings,"user_default_settings");


// Return the default user sched settings when its available from the database yet.
$arr                = array();
if($user){
    $arr                   = $user->ToArray();
    if(!$user->sched_settings){
        $json_setting           = json_decode($defUserSettings,true);
        $arr["sched_settings"]  = $json_setting[0];
    }
}else{
    $arr = false;
}


$temp = array();
$temp['userlog'] = $arr;
$temp['today']   = $todays_date;

echo json_encode($temp);
?>
