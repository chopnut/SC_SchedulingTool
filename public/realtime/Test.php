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
<<<<<<< HEAD
$socket->connect('tcp://localhost:11111');
$socket->send("HELLO");
=======
$socket->setSockOpt(ZMQ::SOCKOPT_LINGER, 500);
$socket->connect('tcp://192.168.70.9:11111');

$i = 0;
while($i < 10){
    $i++;
    echo "SENDING ...\n";
    $socket->send("HELLO WORLD");
}
>>>>>>> ed3688b9233e590390f852e392f3e079f15014b5

echo "SocketType: ".$socket->getSocketType();
print_r($socket->getEndpoints());
?>