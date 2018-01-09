<?php

$folder_level = '../';
include('../includes.php');

use Models\SchedSettings;
use Models\UserSchedSettings;

$data = $u::getRequestData();

// Saving sched setting
$schedSetting = $data['sched_settings'];
foreach($schedSetting as $key=>$val){
}
// User department set
$userSelected   = $data['user_selected'];
$userDepSelect  = $data['user_change_departments'];

//
print_r($data);


?>