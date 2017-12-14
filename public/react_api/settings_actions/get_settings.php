<?php

$folder_level = '../';
include('../includes.php');

use Models\SchedSettings;

/*
 * PARAMS:
 * Straight forward rest api just grab the data from the table
 */

$settings = SchedSettings::all();
$arr      = array();

foreach($settings as $val){
    $arr[$val->setting_name] = array();
    $arr[$val->setting_name]['setting_label'] = $val->setting_label;
    $arr[$val->setting_name]['setting_value'] = $val->setting_value;
}

echo json_encode($arr);