<?php

// remove later
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require ('../../config.php'); // This is getting the file from landing page DONT MOVE config.php
require ('app/App.php');
require ('vendor/autoload.php');

session_start();


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
