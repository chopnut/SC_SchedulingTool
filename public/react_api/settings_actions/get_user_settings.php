<?php

$folder_level = '../';
include('../includes.php');

use Models\UserSchedSettings;
use Models\SchedSettings;

/*
 * Params: @login_id
 * This rest api returns user scheduler settings if none is found
 * get the default user scheduler settings at for a user.
 * */

if($u::areTheseSetAndNotEmpty('get','login_id')){
    $loginId = $_GET['login_id'];
    $userSettings = UserSchedSettings::where("login_id","=",$loginId);

    $data = false;
    if($userSettings->exists()){
        $rows = $userSettings->first()->ToArray();
        $data = json_encode($rows);
    }else{
        // No user schedule setting has been found so create one
        // this is the same implemetation from initial_persistant_data.php
        $schedSettings      = SchedSettings::all();
        $defUserSettings    = SchedSettings::getSetting($schedSettings,"user_default_settings");

        $jsonSetting        = json_decode($defUserSettings,true);
        $defaultSetting     = $jsonSetting[0];


        //----- CREATE DEFAULT USER SETTINGS -----
        // The user doesnt have a sched setting yet
        // Generate one depending on the default one

        $fillUserSetting            = array();
        $fillUserSetting["login_id"]= $loginId;

        foreach($defaultSetting as $key=>$val){
            $fillUserSetting[trim($key)] = $val;
        }

        UserSchedSettings::create($fillUserSetting);

        // Grab again the newly default
        $userSettings = UserSchedSettings::where("login_id","=",$loginId);
        $rows = $userSettings->first()->ToArray();
        $data = json_encode($rows);

    }
    echo "{\"payload\": $data}";

}



