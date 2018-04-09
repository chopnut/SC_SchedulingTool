<?php
require_once("../react_api/includes.php");


$context    = new \ZMQContext();
$socket     = $context->getSocket(ZMQ::SOCKET_PUSH,'SCSTRealtimeSubsObject');

$socket->connect('tcp://127.0.0.1:'.RT_CLIENT_PORT);
echo "SENDING ...\n";
$socket->send("HELLO WORLD");

print_r($socket->getEndpoints());
?>