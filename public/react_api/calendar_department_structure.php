<?php
    include('includes.php');
    $u = new MyUtil();

    use Models\Department;

    $depts = Department::all()->sortBy("job_dp_order");
	
	$temp = array();
	$order= array();

	foreach($depts as $dept){
		$keyId = $dept->job_dept_id;
		$temp[$keyId]= array();
		$temp[$keyId]['parent'] = $dept->job_dep_parent;
		$temp[$keyId]['data']   = $dept;
	}



	// $order = Department::getDepartmentParentKids($temp);

?>
