<?php
    include('includes.php');
    $u = new MyUtil();

    use Models\Department;

    $depts = Department::all()->sortBy("job_dp_order");
	
	$temp 	 = array();
	$parents = array();

	foreach($depts as $dept){
		$keyId = $dept->job_dept_id;
		$temp[$keyId]= array();
		$temp[$keyId]['parent'] = $dept->job_dep_parent;
		$temp[$keyId]['data']   = $dept;

		$parents[$dept->job_dep_parent] = $keyId;
	}



	// $order = Department::getDepartmentParentKids($temp);

?>
