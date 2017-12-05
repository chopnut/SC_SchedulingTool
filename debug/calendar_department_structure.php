<?php


    include('includes.php');

    use Models\Department;


    $depts = Department::orderBy("job_dep_order")->get();

	$temp 	 	= array();
	$depsTitle 	= array();
	foreach($depts as $dept){

		$keyId 				= $dept->job_dept_id;
		$temp[$keyId]		= $dept->job_dep_parent;
		$depsTitle[$keyId] 	= $dept->job_dept_desc;
	}

	$orders 	 = Department::getDepartmentParentKids($temp);
	$departments = Department::reconstructDepartment($orders,$depsTitle);

	$data 					  = array();
	$data['departmentsOrder'] = $departments;
	$data['departments']      = $depsTitle;

	echo json_encode($data);





?>
