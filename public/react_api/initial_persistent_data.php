<?php
include("includes.php");

$todaysT      = time();
$todays_date  = date("d/m/Y",$todaysT);

use Models\SchedSettings;


$schedSettings      = SchedSettings::all();
$defUserSettings    = SchedSettings::getSetting($schedSettings,"user_default_settings");

// Return the default user sched settings when its available from the database yet.

$arr                        = array();
if($user){
    $arr                   = $user->ToArray();
    $schedSettingCount     = count($arr["sched_settings"]);

    if($schedSettingCount<=0){

        $jsonSetting            = json_decode($defUserSettings,true);
        $defaultSetting         = $jsonSetting[0];
        $arr["sched_settings"]  = $defaultSetting;


        //----- CREATE DEFAULT USER SETTINGS -----
        // The user doesnt have a sched setting yet
        // Generate one depending on the default one

        $fillUserSetting            = array();
        $fillUserSetting["login_id"]= $user->login_id;

        foreach($defaultSetting as $key=>$val){
            // $jsonVal               = json_encode($val);
            $fillUserSetting[trim($key)] = $jsonVal;
        }

        $user->sched_settings()->create($fillUserSetting);

    }
}else{
    $arr = false;
}


$temp = array();
$temp['userlog'] = $arr;
$temp['today']   = $todays_date;

echo json_encode($temp);
?>
