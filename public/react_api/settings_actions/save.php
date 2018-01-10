<?php

$folder_level = '../';
include('../includes.php');

use Models\SchedSettings;
use Models\UserSchedSettings;

$data = $u::getRequestData();

// ---------------------------------------
// For updating scheduling tool settings
// ---------------------------------------

$schedSettings = $data['sched_settings'];

foreach($schedSettings as $settingName => $val){
    $settingValue                   = $val['setting_value'];
    $settingLabel                   = $val['setting_label'];

    $schedSetting                   = SchedSettings::where('setting_name',$settingName)->first();
    $schedSetting->setting_value    = $settingValue;
    $schedSetting->setting_label    = $settingLabel;

    $schedSetting->save();
}

// ---------------------------------------
// For updating user sched settings
// ---------------------------------------

// for changing user departments allocation
$userSelected       = $data['user_selected'];
$userSettings       = $data['user_settings'];

if($userSelected){
    $user_id        = $userSelected["login_id"];
    $userSetting    = UserSchedSettings::where('login_id',$user_id)->first();

    foreach($userSettings as $field_name=>$field_value){
        $userSetting->$field_name = $field_value;
    }
    $userSetting->save();
}
?>