<?php

// -------- REQUIRED FILE & LINES -------- //

$folder_level = '../';
include('../includes.php');
use Illuminate\Database\Capsule\Manager as Capsule;

$data = $u::getRequestData();

// -------- CUSTOM CODE BELOW ------------//

// THIS WILL SET THE CALENDAR_PAGE.DAYS STATE OF THE CURRENT PAGE
// @FROM
// @TO

$days = array();
if($u::areTheseSet('get','from','to')){
    $from   = $u::d('from');
    $to     = $u::d('to');

    $dateFrom   = DateTime::createFromFormat('d/m/Y', $from);
    $dateTo     = DateTime::createFromFormat('d/m/Y', $to);

    // DAY

    if(!$to){
        $dayNum                 = $dateFrom->format('w');
        $days[0]                = array();
        $days[0]['day']         = $u::getDayFromNum($dayNum);
        $days[0]['date']        = $_GET['from'];

    // A WEEK

    }else{

        for($i = 0 ;$i<7;$i++){
            $theTS            = strtotime('+'.$i.' days', $dateFrom->getTimestamp());
            $mDate            = date("d/m/Y",$theTS);
            $days[$i]         = array();
            $days[$i]['day']  = $u::getDayFromNum($i);
            $days[$i]['date'] = $mDate;
        }

    }
    echo json_encode($days);

}


?>