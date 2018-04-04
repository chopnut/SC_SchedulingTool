<?php
require_once("../react_api/includes.php");
$entryData = array(
    'category' => "mycategory"
, 'title'    => "my title"
, 'article'  => "my article"
, 'when'     => time()
);

$context    = new \ZMQContext();
$socket     = $context->getSocket(ZMQ::SOCKET_PUSH,'SCSTRealtimeSubsObject');
$socket->connect('tcp://localhost:11111');
sleep(2);
$socket->send(json_encode($entryData));

echo "SocketType: ".$socket->getSocketType();
print_r($socket->getEndpoints());
?>