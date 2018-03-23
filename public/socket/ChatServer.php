<?php
use Ratchet\Server\IoServer;
use Models\Chat;

require_once('../react_api/includes.php');


$server = IoServer::factory(
    new Chat(),
    8080
);

$server->run();