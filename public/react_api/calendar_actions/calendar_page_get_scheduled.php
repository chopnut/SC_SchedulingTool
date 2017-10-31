<?php

    $folder_level = '../';
    include('../includes.php');
    $u = new MyUtil();

    use Models\SchedJobBags;
    use Models\SchedJobBagDepartment;
    use Models\Department;

/*
 * Get Parameters
 * @dates | Format as "dd/mm/yyyy, dd/mm/yyyy, etc..."
 * */
    if($u::areTheseSetAndNotEmpty('g','dates')){
        $dates = explode(',',$u::de('dates') );
        $temp  = array();

        // Reformat the date to be mysql friendly
        foreach($dates as $d){
            $temp[] = $u::getYmdHis($d,$format = "d/m/Y",$returnFormat="Y-m-d");
        }

        $dates          = $temp;
        $flipped_dates  = array_flip($dates);

        // Now grab the records according to the date that was generated.
        $job_departments = SchedJobBagDepartment::whereIn('job_dp_date',$temp)->get();

        // Restructure the JSON file to be return to the application
        $master_array = array();
        foreach($job_departments as $deps){
            $job_dp_id      = $deps->job_dp_id;
            $job_date       = $deps->job_dp_date;
            $job_dept_id    = $deps->job_dp_dept;

            // What to put in the data itself
            // Now allocate the record to the flipped array, and use the value as the key

            if(isset($flipped_dates[$job_date])){
                $key    = $flipped_dates[$job_date];

                // Create the 0-6 Array holder
                if(!isset($master_array[$key])){
                    $master_array[$key] = array();
                }
                // Create the department id holder
                if(!isset($master_array[$key][$job_dept_id])){
                    $master_array[$key][$job_dept_id] = array();
                }

                // Now add the jobbag id using its id key
                if(!isset($master_array[$key][$job_dept_id][$job_dp_id])){
                    $master_array[$key][$job_dept_id][$job_dp_id] = array();
                }

                $master_array[$key][$job_dept_id][$job_dp_id]['dep'] = $deps;
                $master_array[$key][$job_dept_id][$job_dp_id]['bag'] = $deps->jobbag;;


            }
        }

        // Fill up all the empty days in the master array
        foreach($dates as $key => $date){
            if(!isset($master_array[$key])){
                $master_array[$key] = array();
            }
        }

        echo json_encode($master_array);

    }
?>