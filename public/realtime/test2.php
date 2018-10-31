<?php

require_once("../../vendor/autoload.php");

$context    = new ZMQContext();
$socket     = $context->getSocket(ZMQ::SOCKET_PUSH, 'myPusher');
$socket->connect("tcp://127.0.0.1:5555");
$socket->send("Hello");

?>