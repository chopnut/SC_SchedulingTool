<?php

// remove later
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

session_start();

require 'vendor/autoload.php';

$app = new \Slim\Slim(
	array('templates.path' => '../app/views')
);
$app->view()->setTemplatesDirectory('../app/views');
