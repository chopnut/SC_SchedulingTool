<?php 

namespace Models;

use Illuminate\Database\Eloquent\Model;

class Login extends Model
{
    //
    protected $primaryKey   = "login_id";
    protected $table        = 'login';
    protected $fillable     = ['username','password','position','email','first_name','last_name','logged_in_date','updated_at','usertype'];
    protected  $with        = ['sched_settings'];
    public function sched_settings()
    {
        return $this->hasMany('Models\UserSchedSettings','login_id');
    }
}


 ?>
