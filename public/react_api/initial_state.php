<?php

// If you are accesing this directly for debugging purposes
if(!isset($db)){
    include('includes.php');
    $areYouLoggedIn = $user;
}
// REMOVE ABOVE AFTER DEBUG

// -----------------------  *  -------------------------------
// This page is use to get the initial value for the entire 
// web application
// -----------------------  *  -------------------------------


use Models\Department;
use Models\UserSchedSettings;

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


// Get all programming users
$programmingId      = $temp['programming_dept_id'];
$programmingUsers   = UserSchedSettings::where('sched_us_department_group','like','%'.$programmingId.'%')->with('login')->get();
$pUsers             = array();

foreach($programmingUsers as $user){
    $login   =  $user->login;
    $pUsers[]=  array(
        'first_name' => $login->first_name,
        'login_id'   => $login->login_id
    );
}
$pUsers = json_encode($pUsers);


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

$paramDates = array();
for($i = 0 ;$i<7;$i++){
    $theTS                = strtotime('+'.$i.' days', $lastSundayT);
    $mDate                = date("d/m/Y",$theTS);
    $daysDate[$i]         = array();
    $daysDate[$i]['day']  = MyUtil::getDayFromNum($i);
    $daysDate[$i]['date'] = $mDate;
    $paramDates[]         = $mDate;
}

// Restructure to be used in dropdown
$depts                              = Department::getDepartmentsNoKids();
$dropDownOptionsDepartment          = array();
foreach($depts as $id=>$value){
    $t2      = array();
    $t2['key'] = $value->job_dept_desc;
    $t2['text']= $value->job_dept_desc;
    $t2['value']= $value->job_dept_id;
    $dropDownOptionsDepartment[] = $t2;
}

// Encode them now

$sevenDays   = json_encode($daysDate);
$firstDay    = json_encode($daysDate[0]);
$departments = json_encode($dropDownOptionsDepartment);

// Set the calendar jobs

$paramDateString = implode(',',$paramDates);
$calendarJobs    = \Models\SchedJobBagDepartment::getCalendarJobs($paramDateString);

$master_jobs        = json_encode($calendarJobs['master_jobs'], JSON_FORCE_OBJECT);
$programmers_jobs   = json_encode($calendarJobs['programmers_jobs'],JSON_FORCE_OBJECT);



// Timestamp in every state needs to change to retrigger re-render
// When the calendar page days changed make sure you change the calendar_jobs state
// calendar_jobs reflects the jobs that are in there from the dates of the calendar page days.

echo "window.__initial_state__ = {
    settings: {
        setting: $jsonSettings,
        departmentOptions: $departments,
        action: { type:'',payload:{} },
        isWorking: false,
        programmingUsers: { deptId: $programmingId , value: $pUsers },
        clientPort: ".RT_CLIENT_PORT."
    },
    calendar_page:{
      days: $sevenDays,
      selected_date: '$todays_date',
      today: '$todayDay',
      today_date: '$todays_date',
      action: { type:'',payload:{} },
      calendar_jobs: $master_jobs,
      programmers_jobs: $programmers_jobs,
      isWorking: false
    },
    manage_jobs :{
        action: { type:'',payload:{} },
        isWorking: false
    },
    manage_tasks:{
        action: { type:'',payload:{} },
        isWorking: false
    },
    user_settings:{
        action: { type:'',payload:{} },
        isWorking: false,
        setting: {}
    }
}";

?>
