<?php 

namespace Models;

use Illuminate\Database\Eloquent\Model;

class Department extends Model
{
    //
    protected $primaryKey = "job_dept_id";
    protected $table = 'sched_department';

    static public function  getDepartmentParentKids($departments){
    	$temp = array();

    	foreach($departments as $id=>$val){
    		$parent = intval($val['parent']);

    		if($parent>0){
    			// This is a child
    			$thisData = array();
    			Department::getMoreParents($parentId,$departments,&$thisData);

    		}else{
    			// This is a parent
    			$temp[$id] = array();
    			$temp[$id]["data"] = $val["data"];
    			$temp[$id]["kids"] = array();

    		}
    	}
    }
    static public function getMoreParents($parentId,$departments,$container){

    }
}


 ?>
