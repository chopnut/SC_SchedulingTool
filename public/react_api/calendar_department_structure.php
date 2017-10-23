<?php
    include('includes.php');
    $u = new MyUtil();

    use Models\Department;

    $depts = Department::orderBy("job_dep_order")->get();

	$temp 	 = array();

	foreach($depts as $dept){
		$keyId = $dept->job_dept_id;
		$temp[$keyId]= $dept->job_dep_parent;

	}


var_dump($temp);

	$order = Department::getDepartmentParentKids($temp);
	print_r($order);

?>
