<?php 

namespace Models;

use Illuminate\Database\Eloquent\Model;

class SchedJobBagDepartment extends Model
{
    //
    protected $primaryKey = "job_dp_id";
    protected $table = 'sched_job_bag_department';
    protected $fillable = [
        'job_pd_job_id','job_id',
        'job_dp_dept','job_db_date','job_dp_proof_date','job_dp_comments','job_dp_order',
        'job_dp_allocated_to','job_dp_allocatee_comments','job_dp_qty'];

  public function jobbag()
  {
    return $this->belongsTo('Models\SchedJobBags','job_id');
  }
}


 ?>
