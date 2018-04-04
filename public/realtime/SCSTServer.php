<?php

require_once("../react_api/includes.php");

use Ratchet\Server\IoServer;
use Models\SCSTRealtimeObject;

$server = IoServer::factory(
    new SCSTRealtimeObject(),
    8080
);
$server->run();

?>