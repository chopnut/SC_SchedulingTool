<?php
session_start();
date_default_timezone_set('Australia/Brisbane');

require ('../../../config.php');
require ('../../vendor/autoload.php');
require ('../../../internalreports/app/MyUtil.php');
require('global_variables.php');

$db = new Models\Database();
$capsule = $db->getCapsule();

?>