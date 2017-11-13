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
        'job_dp_status',
        'job_dp_comments',
        'job_dp_order',
        'job_dp_minutes',
        'job_dp_allocated_to',
        'job_dp_allocatee_comments',
        'job_dp_qty'];

  public function jobbag()
  {
    return $this->belongsTo('Models\SchedJobBags','job_id');
  }
    static public function getCalendarJobs($string_delimited_range){
        $dates = explode(',', $string_delimited_range );
        $temp  = array();

        // Reformat the date to be mysql friendly
        foreach($dates as $d){
            $temp[] = \MyUtil::getYmdHis($d,$format = "d/m/Y",$returnFormat="Y-m-d");
        }

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
//                echo $job_date;
//                var_dump($dates);
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



        // Fill up all the empty days in the master array also the dept ids
        $depts = Department::orderBy("job_dep_order")->get();

        foreach($dates as $key => $date){
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
        return $master_array;
    }
    // Mutator and Accesso
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
}


 ?>
