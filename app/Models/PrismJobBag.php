<?php 

namespace Models;

use Illuminate\Database\Eloquent\Model;

class PrismJobBag extends Model
{
    // [QM_CUST_CODE],[QM_ADD_DATE],[QM_JOB_NUM],[QM_TITLE]
    protected $primaryKey = "ID";
    protected $table = 'QMI1';
    protected $connection = 'sqlserver';

}

 ?>
