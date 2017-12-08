<?php
    include('includes.php');
    use Models\Department;

    $depts = Department::orderBy("job_dep_order")->get();

	$temp 	 		= array();
	$departmenIsKid = array();
	$depsTitle 		= array();

	// Loop each departments
	foreach($depts as $dept){
		$keyId 				= $dept->job_dept_id;
		$temp[$keyId]		= $dept->job_dep_parent;
		$depsTitle[$keyId] 	= $dept->job_dept_desc;
	}

	$orders 	 	= Department::getDepartmentParentKids($temp);
	$departments 	= Department::reconstructDepartment($orders,$depsTitle);
	$departmentIsKid = Department::getKids($departments);

	$data 					  = array();
	$data['departmentsOrder'] = $departments;
	$data['departmentsKids'] = $departmentIsKid;
	$data['departments']      = $depsTitle;

	echo json_encode($data);



?>
