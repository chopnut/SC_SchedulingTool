<?php
    // -------- REQUIRED FILE & LINES -------- //

    $folder_level = '../';
    include('../includes.php');
    use Illuminate\Database\Capsule\Manager as Capsule;
    // print_r( Capsule::getQueryLog());
    $data = $u::getRequestData();

    // -------- CUSTOM CODE BELOW ------------ //
    use \Models\SchedSettings;
    use \Models\UserSchedSettings;
    /*
     * GET PROGRAMMERS ACCORDING TO THE SETTINGS
     */
    $sched_settings =  SchedSettings::where('setting_name','programming_dept_id')->get()->first();
    if(count($sched_settings)>0){
        $programmers_dep_id = $sched_settings->setting_value;

        if($programmers_dep_id){
            $u_setting = UserSchedSettings::where('sched_us_department_group','like', "%$programmers_dep_id%")->get();
            $users = [];

            foreach($u_setting as $user){
                $u          = $user->login()->get()->first();
                $u_array    = ['key'=> $u->login_id, 'text'=> ($u->first_name.' '.$u->last_name ), 'value'=> $u->login_id];
                $users[]    = $u_array;
            }

            $json_decode    = json_encode($users);
            echo "{\"msg\": \"\" , \"error\": 0 , \"payload\": $json_decode }";
        }else{
            echo "{\"msg\": \"There is no programmers id set in the settings\" , \"error\": 1 , \"payload\": [] }";
        }
    }else{
        echo "{\"msg\": \"No setting has been detected\" , \"error\": 1 , \"payload\": [] }";
    }

?>