<?php

namespace Models;

use Illuminate\Database\Eloquent\Model;

class Department extends Model
{
    //
    protected $primaryKey = "job_dept_id";
    protected $table = 'sched_department';

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
                eval($eval);

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
}


 ?>
