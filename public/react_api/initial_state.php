<?php


// Get Scheduling Settings and User Login
$settings = $db->getCapsule()->table('sched_settings')->get();
$temp     = array();

foreach($settings as $setting){
    $key = $setting->setting_name;
    $val = $setting->setting_value;
    $temp[$key] = $val;
}
$jsonSettings       = json_encode($temp);
$jsonUser           = json_encode($areYouLoggedIn);

// Get the first week of todays date , the rest of process is done by javascript
// Set sunday-saturday set up and pass the initial date to calendar
$lastSundayT = strtotime("last sunday");
$nextSaturdayT = strtotime("next saturday");

$todaysT      = time();
$todayDay     = date("l",$todaysT);
$daysDate     = array();
// Todays date 
$todays_date  = date("d/m/Y",$todaysT);


// If today is sunday or saturday make it todays range
$todayDay   = date("l");
if(strcasecmp($todayDay,"sunday")==0){
   $lastSundayT = $todaysT;
}
if(strcasecmp($todayDay,"saturday")==0){
   $nextSaturdayT = $todaysT;
}


for($i = 0 ;$i<7;$i++){
    $theTS                = strtotime('+'.$i.' days', $lastSundayT);
    $daysDate[$i]         = array();
    $daysDate[$i]['day']  = MyUtil::getDayFromNum($i);
    $daysDate[$i]['date'] = date("d/m/Y",$theTS);
}

$sevenDays = json_encode($daysDate);
$firstDay  = json_encode($daysDate[0]);

echo "window.__initial_state__ = {settings: $jsonSettings, 
	user_details: $jsonUser,
	calendar_page:{'days':$sevenDays },
	todays_date: \"$todays_date\"

}";

?>
