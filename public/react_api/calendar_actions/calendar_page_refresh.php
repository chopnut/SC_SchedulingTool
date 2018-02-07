<?php

$folder_level = '../';
include('../includes.php');

// @USAGE
// @from
// @to
// Description: This is to refresh the page according to what is currently selected date SUNDAY and SATURDAY

if($u::areTheseSetAndNotEmpty('get','from','to')){
    $from       = $u::d('from');
    $to         = $u::d('to');

    $sundayDate     = DateTime::createFromFormat('d/m/Y', $from);
    $saturdayDate   = DateTime::createFromFormat('d/m/Y', $to);



    $lastSundayT =  $sundayDate->getTimestamp();
    $nextSaturdayT = $saturdayDate->getTimestamp();

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

// Encode them now

    $sevenDays   = json_encode($daysDate);

// Set the calendar jobs
    $paramDateString = implode(',',$paramDates);
    $calendarJobs    = \Models\SchedJobBagDepartment::getCalendarJobs($paramDateString);

    $master_jobs        = json_encode($calendarJobs['master_jobs']);
    $programmers_jobs   = json_encode($calendarJobs['programmers_jobs']);


// Timestamp in every state needs to change to retrigger re-render
// When the calendar page days changed make sure you change the calendar_jobs state
// calendar_jobs reflects the jobs that are in there from the dates of the calendar page days.

//    echo "calendar_page:{
//      days: $sevenDays,
//      selected_date: '$todays_date',
//      today: '$todayDay',
//      today_date: '$todays_date',
//      action: { type:'',payload:{} },
//      calendar_jobs: $calendarJobs
//      }";
    echo "{$master_jobs}";
}

?>
