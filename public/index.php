<?php

require ('../start.php');


// ------------- ALL BUSINES LOGIC FOR INTERNAL REPORTS HERE ----------------//
$app->get('/',function()use($app,$areYouLoggedIn,$db){
	
	$variables = array();
	$variables['areYouLoggedIn'] = $areYouLoggedIn;
	$variables['db']             = $db;

	$app->render('index.php',$variables);
});
// This is for posting data to form via post
$app->post('/',function() use($app,$areYouLoggedIn,$db){
	
	$variables = array();
	$variables['areYouLoggedIn'] = $areYouLoggedIn;
	$variables['db'] = $db; 

	$app->render('index.php',$variables);
});

$app->run();
