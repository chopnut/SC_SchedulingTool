<?php 

namespace Models;

use Illuminate\Database\Eloquent\Model;

class SchedJobBags extends Model
{
    //
    protected $primaryKey   = "job_id";
    protected $table        = 'sched_job_bags';
    protected $guarded      = 'job_id';
    protected $fillable     = ['prism_job_id','job_prism_number','job_title','job_print_date','job_due_date','job_lodge_date','job_reports_ids','job_comments','job_status','job_created_by','job_qty','job_type'];

  public function dept()
  {
    return $this->hasMany('Models\SchedJobBagDepartment');
  }
    static public function addScheduleTo($post){
        $temp = array();
        $temp['job_prism_number'] = intval(\MyUtil::dd('job_prism_number',$post));
        $temp['job_prism_job_id'] = intval(\MyUtil::dd('job_prism_job_id',$post));
        $temp['job_title']        = \MyUtil::dd('job_title',$post);
        $temp['job_due_date']     = \MyUtil::getYmdHis(\MyUtil::dd('job_due_date',$post),"","Y-m-d");
        $temp['job_print_date']   = \MyUtil::getYmdHis(\MyUtil::dd('job_print_date',$post),"","Y-m-d");
        $temp['job_lodge_date']   = \MyUtil::getYmdHis(\MyUtil::dd('job_lodge_date',$post,"01/01/1970"),"","Y-m-d");
        $temp['job_qty']          = \MyUtil::dd('job_qty',$post);
        $temp['job_created_by']   = \MyUtil::dd('job_created_by',$post);
        $temp['job_type']         = \MyUtil::dd('job_type',$post,'once');
        $temp['job_status']       = \MyUtil::dd('job_status',$post,'stand by');


        $date 			  = \MyUtil::getYmdHis(\MyUtil::dd('job_bd_date',$post),"","Y-m-d");


        // Check if the schedule bag is already there, but will allow recurring job
        // Only one recurring type is allowed in that day

        $job_bag  = SchedJobBags::where(function($q) use($temp){
            $q->where("job_prism_job_id","=",$temp['job_prism_job_id'])
                ->orWhere("job_prism_number","=",$temp['job_prism_number']);
        });

        if($job_bag->count()){
            echo "Its already created";
        }else{
            foreach($temp as $key=>$value){
                echo $key." = ".$value."\n";
            }
            // Get the department that is not a parent with no kids
            $depts 			= Department::all();
            $deptsKeyArray  = $depts->keyBy('job_dept_id')->all();
            $depts->filter(function($item) use(&$deptsKeyArray){
                if(isset($deptsKeyArray[$item->job_dep_parent])){
                    unset($deptsKeyArray[$item->job_dep_parent]);
                }
            });

            // Create the job bag first
            $job_bag   = SchedJobBags::create($temp);

            // Create the bags department for each
            $job_depts = array();
            exit;
            foreach($deptsKeyArray as $id=>$v){
                $jd  				 = new SchedJobBagDepartment();
                $jd->job_dp_job_id   = $job_bag->job_id;
                $jd->job_dp_dept	 = $v->job_dept_id;
                $jd->job_db_date	 = $date;
                $job_depts[]		  = $jd;
            }

        }
    }
}


 ?>
