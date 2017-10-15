<?php

require ('../start.php');


// ------------- ALL BUSINES LOGIC FOR INTERNAL REPORTS HERE ----------------//
$app->get('/',function()use($app,$areYouLoggedIn,$db){
	
	$variables = array();
	$variables['areYouLoggedIn'] = $areYouLoggedIn;
	$variables['db']             = $db;

	$app->render('index.php',$variables);
});



$app->run();
