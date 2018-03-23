<?php
require_once('../react_api/includes.php');

$entryData = array(
    'category' => "MY CATEGORY"
, 'title'    => "TEST TITLE"
, 'article'  => "ARTICLE"
, 'when'     => time()
);

echo "Connecting...";
// This is our new stuff
$context = new ZMQContext();
$socket = $context->getSocket(ZMQ::SOCKET_PUSH, 'my pusher');
$socket->connect("tcp://192.168.70.22:5555");
$socket->send("HEY!!!!!!");


