<?php 

namespace Models;

use Illuminate\Database\Eloquent\Model;

class SchedSettings extends Model
{
    //
    protected $primaryKey   = "id";
    protected $table        = 'sched_settings';
    protected $fillable     = ['setting_name','setting_label','setting_value'];
    public $timestamp       = false;
}


 ?>
