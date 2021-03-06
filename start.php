<?php
session_start();
date_default_timezone_set('Australia/Brisbane');
// remove later
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require ('../../config.php'); // This is getting the file from landing page DONT MOVE config.php
require ('../../internalreports/app/MyUtil.php');
require ('app/App.php');
require ('vendor/autoload.php');
require_once('public/react_api/global_variables.php');

use Models\Login;
use Models\Database;

// Initialize database connection
$db = new Models\Database();

$process = new App();
$process->init();

$app = new \Slim\Slim(
	array('templates.path' => '../app/views')
);

$areYouLoggedIn = $process->check_if_logged_in();
$app->view()->setTemplatesDirectory('../app/views');
