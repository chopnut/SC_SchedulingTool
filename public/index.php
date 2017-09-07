<?php

require ('../start.php');


// ------------- ALL BUSINES LOGIC FOR INTERNAL REPORTS HERE ----------------//
$app->get('/',function()use($app,$areYouLoggedIn){
	
	$variables = array();
	$variables['areYouLoggedIn'] = $areYouLoggedIn;

	$app->render('index.php',$variables);
});



$app->run();
