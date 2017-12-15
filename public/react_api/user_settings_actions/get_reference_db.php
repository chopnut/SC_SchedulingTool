<?php

$folder_level = '../';
include('../includes.php');

use Models\Department;

$deps  = Department::all();



echo "{'departments': []}"
?>