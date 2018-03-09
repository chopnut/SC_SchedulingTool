<?php 

namespace Models;

use Illuminate\Database\Eloquent\Model;

class SchedJobBagDepartment extends Model
{
    //
    protected $primaryKey = "job_dp_id";
    protected $table = 'sched_job_bag_department';
    protected $fillable = [
        'job_pd_job_id',
        'job_id',
        'job_dp_dept',
        'job_dp_date',
        'job_dp_created_date',
        'job_dp_started_date',
        'job_dp_finished_date',
        'job_dp_proof_date',
        'job_dp_print_date',
        'job_dp_status',
        'job_dp_comments',
        'job_dp_order',
        'job_dp_minutes',
        'job_dp_allocated_to',
        'job_dp_allocatee_comments',
        'job_dp_qty',
        'job_dp_stock_picked',
        'job_allocated_hours'
    ];

        public function jobbag()
        {
        return $this->belongsTo('Models\SchedJobBags','job_id');
        }
        public function jobGroup()
        {
            return $this->belongsTo('Models\SchedJobBagDepartmentGroup','job_group_id');
        }
        public function dept()
        {
            return $this->hasOne('Models\Department', 'job_dept_id','job_dp_dept');
        }

    /*
        get departments according to date range
        @string_delimited_range: eg. "04/02/19, 05/02/19 .... 10/02/19"
    */
    static public function getCalendarJobs($string_delimited_range){
        $dates = explode(',', $string_delimited_range );
        $temp  = array();

        // Reformat the date to be mysql friendly
        foreach($dates as $d){
            $temp[] = \MyUtil::getYmdHis($d,$format = "d/m/Y",$returnFormat="Y-m-d");
        }
        $flipped_dates  = array_flip($dates);

        // Now grab the records according to the date that was generated.
        $job_departments = SchedJobBagDepartment::whereIn('job_dp_date',$temp)->orderBy('job_dp_order','DESC')->get();


        // Restructure the JSON file to be return to the application
        $master_array           = array();  // for all the jobs in the calendar
        $programmers_array      = array();  // for all the jobs for the programmers
        $programmers_ids        = array();  // holds all programmers ids currently available
        $all_array              = array();



        foreach($job_departments as $deps){
            $job_dp_id      = $deps->job_dp_id;
            $job_date       = $deps->job_dp_date;
            $job_dept_id    = $deps->job_dp_dept;
            $job_programmer = $deps->job_dp_allocated_to;

            // What to put in the data itself
            // Now allocate the record to the flipped array, and use the value as the key


            if(isset($flipped_dates[$job_date])){
                // $key is the number between 0-6
                $key    = $flipped_dates[$job_date];

                // Create the 0-6 Array holder
                if(!isset($master_array[$key])){
                    $master_array[$key] = array();
                }
                // Create the department id holder
                if(!isset($master_array[$key][$job_dept_id])){
                    $master_array[$key][$job_dept_id] = array();
                }



                // Check if theres a programmer allocated to the job
                // if there is skip the mater_array and populate the programmers job array

                if($job_programmer){
                    if(!isset($programmers_array[$job_programmer])) $programmers_array[$job_programmer] = array();
                    if(!isset($programmers_array[$job_programmer][$key])) $programmers_array[$job_programmer][$key] = array();

                    $programmers_array[$job_programmer][$key][$job_dp_id]        = array();
                    $programmers_array[$job_programmer][$key][$job_dp_id]['dep'] = $deps->jobGroup;
                    $programmers_array[$job_programmer][$key][$job_dp_id]['bag'] = $deps->jobbag;
                    $programmers_array[$job_programmer][$key][$job_dp_id]['grp'] = $deps->jobGroup;
                    $programmers_array[$job_programmer][$key][$job_dp_id]['dp']  = $deps->dept;


                    // DELETE THE DUPLICATE JOBBAG
                    // For some reason jobbag relation gets added when $deps->jobbag is called
                    unset($programmers_array[$job_programmer][$key][$job_dp_id]['dp']);
                    unset($programmers_array[$job_programmer][$key][$job_dp_id]['dep']['jobbag']);
                    unset($programmers_array[$job_programmer][$key][$job_dp_id]['dep']['dp']);
                    unset($programmers_array[$job_programmer][$key][$job_dp_id]['dep']['jobGroup']);

                    $programmers_ids[] = $job_programmer;

                }else{
                    // Now add the jobbag id using its id key
                    if(!isset($master_array[$key][$job_dept_id][$job_dp_id])){
                        $master_array[$key][$job_dept_id][$job_dp_id] = array();
                    }

                    $master_array[$key][$job_dept_id][$job_dp_id]['dep'] = $deps;
                    $master_array[$key][$job_dept_id][$job_dp_id]['bag'] = $deps->jobbag;
                    $master_array[$key][$job_dept_id][$job_dp_id]['grp'] = $deps->jobGroup;
                    $master_array[$key][$job_dept_id][$job_dp_id]['dp']  = $deps->dept;


                    // DELETE THE DUPLICATE JOBBAG
                    // For some reason jobbag relation gets added when $deps->jobbag is called
                    unset($master_array[$key][$job_dept_id][$job_dp_id]['dp']);
                    unset($master_array[$key][$job_dept_id][$job_dp_id]['dep']['dp']);
                    unset($master_array[$key][$job_dept_id][$job_dp_id]['dep']['jobbag']);
                    unset($master_array[$key][$job_dept_id][$job_dp_id]['dep']['jobGroup']);



                }

            }
        }


        // Fill up all the empty days in the master array also the dept ids
        $depts = Department::orderBy("job_dep_order")->get();

        foreach($dates as $key => $date){
            // FOR MASTER JOBS
            if(!isset($master_array[$key])){
                $master_array[$key] = array();
                // Populate the departments aswell
                foreach($depts as $dp){
                    $master_array[$key][$dp->job_dept_id] = array();

                }
            }else{
                foreach($depts as $dp){
                    if(!isset($master_array[$key][$dp->job_dept_id])){
                        $master_array[$key][$dp->job_dept_id] = array();
                    }
                }
            }
        }
        // Fill up empty days for the programmers jobs
        $temp = array_unique($programmers_ids);
        foreach($temp as $pid){
            foreach($dates as $key=>$date){
                if(!isset($programmers_array[$pid][$key])){
                    $programmers_array[$pid][$key] = array();
                }
            }
        }

        $all_array['programmers_jobs']  = $programmers_array;
        $all_array['master_jobs']       = $master_array;
        return $all_array;
    }
    // Accessor
    public function getJobDpDateAttribute($value){
        $originalDate = $value;
        $newDate = date("d/m/Y", strtotime($originalDate));
        return $newDate;
    }

    // Mutator
    public function setJobDpDateAttribute($value){
        $d = \DateTime::createFromFormat('d/m/Y', $value);
        $this->attributes['job_dp_date'] = $d->format('Y-m-d');
    }
    public function setJobDpCreatedDateAttribute($value){
        $d = \DateTime::createFromFormat('d/m/Y', $value);
        $this->attributes['job_dp_created_date'] = $d->format('Y-m-d');
    }
    public function setJobDpPrintDateDateAttribute($value){
        $d = \DateTime::createFromFormat('d/m/Y', $value);
        $this->attributes['job_dp_print_date'] = $d->format('Y-m-d');
    }
    public function setJobDpProofDateDateAttribute($value){
        $d = \DateTime::createFromFormat('d/m/Y', $value);
        $this->attributes['job_dp_proof_date'] = $d->format('Y-m-d');
    }
}


 ?>
