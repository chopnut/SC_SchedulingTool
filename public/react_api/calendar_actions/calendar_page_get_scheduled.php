<?php

    $folder_level = '../';
    include('../includes.php');
    $u = new MyUtil();

    use Models\SchedJobBagDepartment;

/*
 * Get Parameters
 * @dates | Format as "dd/mm/yyyy, dd/mm/yyyy, etc..."
 * */
    if($u::areTheseSetAndNotEmpty('g','dates')){
        echo json_encode(SchedJobBagDepartment::getCalendarJobs($u::de('dates')));
    }
?>