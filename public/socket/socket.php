<?php
// ----------TUTORIAL AND ARTICLES----------
// https://medium.com/async-php/sockets-in-your-api-b682c8df5bd
// https://blog.samuelattard.com/the-tutorial-for-php-websockets-that-i-wish-had-existed/

require_once('../react_api/includes.php');
use Ratchet\Http\HttpServer;
use Ratchet\Server\EchoServer;
use Ratchet\Server\IoServer;
use Ratchet\WebSocket\WsServer;

$server = IoServer::factory(
    new HttpServer(
        new WsServer(
            new EchoServer()
        )
    ),
    8080,
    "127.0.0.1"
);

$server->run();