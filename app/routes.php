<?php 


// Main route
$app->get('/',function () use($app){

	$app->render('Hello world');
});

// Client Level
$app->get('/clients/:clientlink/',function($clientlink) use($app){

});



?>