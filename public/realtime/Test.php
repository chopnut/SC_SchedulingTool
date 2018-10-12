<?php
require_once("../react_api/includes.php");


$context    = new \ZMQContext();
$socket     = $context->getSocket(ZMQ::SOCKET_PUSH,'SCSTRealtimeSubsObject');

$host = "localhost";
$dsn  = "tcp://$host:5555";
// $dsn = "tcp://$host:".RT_CLIENT_PORT;


$endpoints = $socket->getEndpoints();

if (!in_array($dsn, $endpoints['connect'])) {
    echo "<p>Connecting to $dsn</p>";
    $socket->connect($dsn);
    $socket->send("HELLO ");

    
} else {
    echo "<p>Already connected to $dsn</p>";
    $socket->connect($dsn);
    $socket->send("HI");

}


?>