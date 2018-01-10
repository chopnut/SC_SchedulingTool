<?php 

namespace Models;

use Illuminate\Database\Eloquent\Model;

class SchedSettings extends Model
{
    //
    protected $primaryKey   = "id";
    protected $table        = 'sched_settings';
    protected $fillable     = ['setting_name','setting_label','setting_value'];
    public $timestamps       = false;

    public static function getSetting($settings,$setting_name){
        foreach($settings as $val){
            $att_name   = $val->setting_name;
            $att_value  = $val->setting_value;

            if($setting_name == $att_name){
                return $att_value;
            }
        }
        return null;
    }

}


 ?>
