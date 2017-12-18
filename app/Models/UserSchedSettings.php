<?php 

namespace Models;

use Illuminate\Database\Eloquent\Model;

class UserSchedSettings extends Model
{
    protected $primaryKey   = "sched_us_id";
    protected $table        = 'sched_user_settings';
    protected $fillable     = ['login_id','sched_us_calendar_hide_departments,sched_us_department_group'];
    public $timestamps      = false;

    public function login()
    {
        return $this->belongsTo('Models\Login','login_id');
    }
    public function getSchedUsDepartmentGroupAttribute($value){
        return json_decode($value);
    }
    public function getSchedUsCalendarHideDepartmentsAttribute($value){
        return json_decode($value);
    }
}


 ?>
