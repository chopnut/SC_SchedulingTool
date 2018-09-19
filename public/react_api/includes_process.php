<?php

// -------- REQUIRED FILE & LINES -------- //

$folder_level = '../';
include('../includes.php');
use Illuminate\Database\Capsule\Manager as Capsule;
use Models\SchedJobBagDepartment;
use Models\SchedSettings;

$data        = $u::getRequestData();    // $u is the utility helper function
$user        = $user;                   // $user is the current user logged in
$settings    = $settings;               // scheduling tool settings to get a particular setting: $react_api_folder = SchedSettings::getSetting($settings,"react_api_folder");
$sched       = new SchedSettings();

// This is the output you want to return as JSON

$output = array();
$output["payload"] = "";
$output["message"] = "";
$output["returned"] = false;


if(!$user){
    $output["message"] = "You are not logged in.";
    echo json_encode($output);
    exit;
}
// -------- CUSTOM CODE BELOW ------------//


?>