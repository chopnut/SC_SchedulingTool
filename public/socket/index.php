<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
use \ZMQContext;
$zmq = new ZMQContext();
var_dump(class_exists('ZMQContext'));
phpinfo();