<?php

$folder_level = '../';
include('../includes.php');

use Models\UserSchedSettings;
use Models\SchedSettings;
use Illuminate\Database\Capsule\Manager as Capsule;

// Get user settings depending on your session
$data   = "{}";
$msg    = "\"\"";
$error  = 0;

// You can access your own user settings only if you are logged in.
if($user){
    $userSettings = UserSchedSettings::where('login_id', '=', $user->login_id);

    if($userSettings->exists()){
        // -----------------------------------------------------
        // User setting exist , fetch it.

        $data = $userSettings->first()->ToJson();

    }else{
            // -----------------------------------------------------
            // If the user sched setting doesnt exist, create one. from the main sched settings

            $schedulerSettings      = SchedSettings::all();
            $defaultSettings        = json_decode(SchedSettings::getSetting($schedulerSettings,"user_default_settings"),true);
            $defaultSettings        = $defaultSettings[0];
            $data                   = json_encode($defaultSettings);

        try{
            // -----------------------------------------------------
            // Create the schedule setting based on default setting

            $dataToCreate           = new UserSchedSettings();
            foreach($defaultSettings as $key=>$val){
                $settingValue                  = $val;
                $settingKey                    = trim($key);
                $dataToCreate[$settingKey]     = $settingValue;
            }

            $dataToCreate['login_id']          = $user->login_id;
            $user->sched_settings()->save($dataToCreate);

            // -----------------------------------------------------
        }catch (Exception $e){

            $error = 1;
            $msg   = $e->getMessage();
        }
    }
}else{
    $error  = 1;
    $msg    = "You are not logged in. You cant access user settings, see your web administrator.";
}
echo "{\"payload\": $data,\"error\": $error, \"msg\": $msg}";

?>