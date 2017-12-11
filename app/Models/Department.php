<?php

namespace Models;

use Illuminate\Database\Eloquent\Model;

class Department extends Model
{
    //
    protected $primaryKey = "job_dept_id";
    protected $table = 'sched_department';


    // This restructure the departments to an array parent child
    // for easy ordering
    static public function  getDepartmentParentKids($departments){
        $tracker    = array();
    	foreach($departments as $id=>$val){
            $parent     = intval($val);
             if($parent>0){
                if(isset($tracker[$parent])){
                    $tracker[$parent][$id] = array();
                }else{
                    $tracker[$parent]=array();
                    $tracker[$parent][$id] = array() ;

                }
                 $tracker = Department::getMoreParents($parent,$departments,"[$id]",$tracker,$id);
             }else{
                 if(!isset($tracker[$id])){
                     $tracker[$id]= array();
                     
                 }

             }
    	}

    	return($tracker);
    }

    static public function getMoreParents($thisId,$departments,$tracker="",$contain=null,$curid=0){
        $temp = $contain;
        if(isset($departments[$thisId])){

            $parent = intval($departments[$thisId]);
            if($parent>0) {
                unset($temp[$thisId]);
                $temp = Department::getMoreParents($parent, $departments, "[$thisId],".$tracker,$temp,$thisId);
            }else{
                $t        ="[$thisId],$tracker";
                $tex      = explode(",",$t);
                $tracking = "\$temp".implode('',$tex);
                $eval = "\$b = isset($tracking);";
                eval($eval); // This will set other array if $b is false that means the parent might not be set yet.

                // This will set the array structure if the parent array is not set
                // and set the child back again to restructure 
                if(!$b){
                    $last = array_pop($tex);

                    $tracking = "\$temp".implode('',$tex);
                    $eval = $tracking." = array();";

                    eval($eval);

                    $tex[]= $last;
                    $tracking = "\$temp".implode('',$tex);
                    $eval = $tracking." = array();";

                    eval($eval);
                }
            }
        }
        return $temp;
    }
    static public function  getKids($departments,$carry = null){
        $temp = $carry;
        if(!$temp){
            $temp = array();
        }
        foreach($departments as $dep){
            $id     = $dep['id'];
            $title  = $dep['title'];

            if(count($dep['kids'])>0){
                $temp      = Department::getKids($dep['kids'], $temp);
            }else{
                $temp[$id] = array();
                $temp[$id]['title'] = $title;
            }
        }
        return $temp;
    }
    static  public function getKidsArray($dept){
        $t        = array();
        $depttemp = Department::getKids($dept);
        $i = 0;
        foreach($depttemp as $id=>$val){
            $t[$i] = array();
            $t[$i]['id']    = $id;
            $t[$i]['title'] = $val['title'];
            $i++;
        }
        return $t;
    }
    static public function reconstructDepartment($orders,$lookup){
        $temp = array();
        $i    = 0;
        foreach($orders as $key=>$val){
            $temp[$i]               = array();
            $temp[$i]['id']         = $key;
            $temp[$i]['title']      = $lookup[$key];
            $temp[$i]['kids']       = Department::reconstructDepartment($val,$lookup);
            $i++;
        }
        return $temp;
    }
    static public function getDepartmentsNoKids(){
        // Get the department that is not a parent with no kids
        $depts 			= Department::all()->sortBy('job_dept_id');
        $deptsKeyArray  = $depts->keyBy('job_dept_id')->all();
        $depts->filter(function($item) use(&$deptsKeyArray){
            if(isset($deptsKeyArray[$item->job_dep_parent])){
                unset($deptsKeyArray[$item->job_dep_parent]);
            }
        });
        return $deptsKeyArray;
    }
}


 ?>
