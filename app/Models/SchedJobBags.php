<?php 

namespace Models;

use Illuminate\Database\Eloquent\Model;



class SchedJobBags extends Model
{
    protected $primaryKey   = "job_id";
    protected $table        = 'sched_job_bags';
    protected $guarded      = 'job_id';

    protected $fillable     = [
        'job_prism_job_id',
        'job_prism_number',
        'job_title',
        'job_print_date',
        'job_colour',
        'job_due_date',
        'job_lodge_date',
        'job_reports_ids',
        'job_comments',
        'job_status',
        'job_created_by',
        'job_qty',
        'job_type',
        'job_departments',
        'job_customer_name'
    ];

    public $timestamps       = true;

    public function dept()
    {
        return $this->hasMany('Models\SchedJobBagDepartment','job_id');
    }
    static public function fillData($data,&$extracted){
        $temp = array();
        $temp['job_prism_job_id'] = intval(\MyUtil::dd('job_prism_job_id',$data));
        $temp['job_prism_number'] = intval(\MyUtil::dd('job_prism_number',$data));
        $temp['job_title']        = \MyUtil::dd('job_title',$data);
        $temp['job_print_date']   = \MyUtil::dde('job_print_date',$data,"");
        $temp['job_due_date']     = \MyUtil::dde('job_due_date',$data,"");
        $temp['job_lodge_date']   = \MyUtil::dde('job_lodge_date',$data,"");
        $temp['job_qty']          = \MyUtil::dd('job_qty',$data);
        $temp['job_created_by']   = \MyUtil::dd('job_created_by',$data);
        $temp['job_colour']       = \MyUtil::dd('job_colour',$data,'');
        $temp['job_status']       = \MyUtil::dd('job_status',$data,'stand by');
        $temp['job_reports_ids']  = \MyUtil::dd('job_reports_ids',$data,'');
        $temp['job_comments']     = \MyUtil::dd('job_comments',$data,'');
        $temp['job_type']         = \MyUtil::dd('job_type',$data,'once');
        $temp['job_customer_name']= \MyUtil::dd('job_customer_name',$data,'');
        $temp['job_status']       = \MyUtil::dd('job_status',$data,'');

        // Extracted below
        $date 			                = \MyUtil::dd('job_dp_date',$data);
        $departments                    = \MyUtil::dd('job_departments',$data,[]);

        $extracted['job_id']            = \MyUtil::dd('job_id',$data,0);
        $extracted['job_departments']   = $departments;
        $extracted['job_dp_date']       = $date;

        // Also add the departments
        $temp['job_departments']        = implode(',',$departments);

        // Unsetting fields you dont need and will be null
        // when queried to the database

        if(empty($temp['job_print_date'])){
            unset($temp['job_print_date']);
        }
        if(empty($temp['job_due_date'])){
            unset($temp['job_due_date']);
        }
        if(empty($temp['job_lodge_date'])){
            unset($temp['job_lodge_date']);
        }

        // Prism Job id and number
        if(empty($temp['job_prism_job_id']) && $temp['job_prism_job_id']<=0){
            unset($temp['job_prism_job_id']);
        }
        if(empty($temp['job_prism_number']) && $temp['job_prism_number']<=0){

            unset($temp['job_prism_number']);
        }
        return $temp;

    }
    static public function isBagExist($prism_job_id,$prism_number){

        // Check if the schedule bag is already there, but will allow recurring job
        // Only one recurring type is allowed in that day

        $job_bag  = SchedJobBags::where(function($q) use($prism_job_id){
            $q->where("job_prism_job_id","=",$prism_job_id)
                ->where("job_prism_job_id","!=",0)
                ->WhereNotNull("job_prism_job_id");

        })->orWhere(function($q) use($prism_number){
            $q->where("job_prism_number","=",$prism_number)
                ->where("job_prism_number","!=",0)
                ->WhereNotNull("job_prism_number");
        });


        return $job_bag;
    }


    static public function createDepartments($job_bag,$departments,$date, $department_setup=null){

        // Create the bags department for each
        $job_depts = array();

        // Create group id
        $jd_group = new SchedJobBagDepartmentGroup();
        $jd_group->job_group_qty = $job_bag->job_qty;
        $jd_group->job_id        = $job_bag->job_id;
        $jd_group->save();

        foreach($departments as $departmentId){
            $jd  				     = new SchedJobBagDepartment();
            $jd->job_id              = $job_bag->job_id;
            $jd->job_dp_dept	     = $departmentId;

            // This must call mutator when date is being set

            $jd->job_dp_date	     = $date;
            $jd->job_dp_created_date = $date;
            $jd->job_group_id        = $jd_group->job_group_id;
            $jd->job_dp_status       = $job_bag->job_status;

            // Allocate programmer below only when the programmer is not empty
            if(is_array($department_setup) && !empty($department_setup['selected_programmer'])){

                $programming_dept_id = $department_setup['programming_dept_id'];
                $programmer_id       = $department_setup['selected_programmer'];

                // catch the department id = same to the settings department id
                if($departmentId == $programming_dept_id){
                    $jd->job_dp_allocated_to  = intval($programmer_id);
                }
            }
            $job_depts[]		     = $jd;
        }

        // Now create the job_departments you currently have set up.
        $job_bag->dept()->saveMany($job_depts);

        return $job_bag->dept();
    }
    static public function addScheduleTo($post){
        $extracted          = array();
        $temp               = SchedJobBags::fillData($post,$extracted);
        $job_prism_number   = (isset($temp['job_prism_number'])? $temp['job_prism_number']:0);

        $jobBag             = SchedJobBags::isBagExist($temp['job_prism_job_id'],$job_prism_number );

        $date 			    = \MyUtil::dd('job_dp_date',$post, null);
        $departments        = \MyUtil::dd('job_departments',$post,[]);

        if($jobBag->exists()){
            echo '{ msg: "Job bag already exist. ",error: 1 ,data: {} }';
        }else{

            // Create the job bag first
            $job_bag   = SchedJobBags::create($temp);

            SchedJobBags::createDepartments($job_bag,$departments,$date);
            echo '{ msg: "Job bag scheduled successfully.", error: 0 , data:{} }';
        }
    }
    // ----------------------------------------------
    // Mutator, when a variable is being set. Mutate to a different form.

    public function setJobPrintDateAttribute($value)
    {
        $d = \DateTime::createFromFormat('d/m/Y', $value);
        $newDate = date("Y-m-d",$d->getTimestamp());
        $this->attributes['job_print_date'] = $newDate;
    }
    public function setJobDueDateAttribute($value)
    {
        $d = \DateTime::createFromFormat('d/m/Y', $value);
        $newDate = date("Y-m-d",$d->getTimestamp());
        $this->attributes['job_due_date'] = $newDate;
    }

    public function setJobLodgeDateAttribute($value)
    {
        $d = \DateTime::createFromFormat('d/m/Y', $value);
        $newDate = date("Y-m-d",$d->getTimestamp());
        $this->attributes['job_lodge_date'] = $newDate;
    }

    // ----------------------------------------------
    // Accessor

    public function getJobPrintDateAttribute($value){
        if(is_null($value)){
            return "";
        }
        $originalDate = $value;
        $newDate = date("d/m/Y", strtotime($originalDate));
        return $newDate;
    }
    public function getJobDueDateAttribute($value){
        if(is_null($value)){
            return "";
        }
        $originalDate = $value;
        $newDate = date("d/m/Y", strtotime($originalDate));
        return $newDate;
    }
    public function getJobLodgeDateAttribute($value){
        if(is_null($value)){
            return "";
        }
        $originalDate = $value;
        $newDate = date("d/m/Y", strtotime($originalDate));
        return $newDate;
    }
    public function getJobColourAttribute($value){
        if(is_null($value)){
            return "";
        }
        return $value;
    }
    public function getJobPrismJobId($value){
        if(is_null($value)){
            return "";
        }
        return $value;
    }
    public function getJobPrismNumberAttribute($value){
        if(is_null($value)){
            return "";
        }
        return $value;
    }
    public function getJobDepartmentsAttribute($value){
        $deps  = (empty($value))?[]:array_map('intval', explode(',',$value));
        return $deps;
    }
}


 ?>
