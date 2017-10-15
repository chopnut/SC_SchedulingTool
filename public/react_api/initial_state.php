<?php

$settings = $db->getCapsule()->table('sched_settings')->get();
$temp     = array();
foreach($settings as $setting){
    $key = $setting->setting_name;
    $val = $setting->setting_value;
    $temp[$key] = $val;
}
$jsonSettings       = json_encode($temp);
$jsonUser           = json_encode($areYouLoggedIn);

echo "window.__initial_state__ = {settings: $jsonSettings, user_detail: $jsonUser}";

?>