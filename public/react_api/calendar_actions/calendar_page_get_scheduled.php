<?php

    $folder_level = '../';
    include('../includes.php');
    use Models\SchedJobBagDepartment;

/*
 * Get Parameters
 * @dates | Format as "dd/mm/yyyy, dd/mm/yyyy, etc..."
 * */
    if($u::areTheseSetAndNotEmpty('g','dates')){

        $calendarJobs    = SchedJobBagDepartment::getCalendarJobs($u::de('dates'));

        $master_jobs        = json_encode($calendarJobs['master_jobs']);
        $programmers_jobs   = json_encode($calendarJobs['programmers_jobs']);

        echo $master_jobs;
    }
?>