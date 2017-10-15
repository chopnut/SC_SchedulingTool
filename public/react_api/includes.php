<?php
session_start();
date_default_timezone_set('Australia/Brisbane');

require ('../../../config.php');
require ('../../vendor/autoload.php');
require ('../../../internalreports/app/MyUtil.php');
$db = new Models\Database();

$capsule = $db->getCapsule();

?>