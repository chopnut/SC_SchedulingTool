<?php

namespace Models;

use Illuminate\Database\Eloquent\Model;

class SchedJobBagDepartmentGroup extends Model
{

    protected $primaryKey   = "job_group_id";
    protected $table        = "sched_job_bag_department_group";
    protected $fillable     = ["updated_at","created_at","job_group_qty"];

    public function sched_departments()
    {
        return $this->hasMany('Models\SchedJobBagDepartmentGroup','job_group_id');
    }
}

?>
