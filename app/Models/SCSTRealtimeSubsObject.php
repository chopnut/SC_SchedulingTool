<?php

namespace Models;
use Ratchet\ConnectionInterface;
use Ratchet\Wamp\WampServerInterface;

class SCSTRealtimeSubsObject implements WampServerInterface {

    // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    //                  ComponentMessageInteface Implementations
    // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    public function __construct() {
        echo "Constructor call. \n";
    }
    public function onMessage($msg){ // Message from the onMessage
        echo "There was a message: $msg";
        return "message received";
    }
    // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    //                  WampServerInterface Implementations
    // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

    public function onOpen(ConnectionInterface $conn) {
        echo "OPEN!";
    }
    public function onClose(ConnectionInterface $conn) {
        // The connection is closed, remove it, as we can no longer send it messages
        echo "Connection {$conn->resourceId} has disconnected \n";
    }
    public function onError(ConnectionInterface $conn, \Exception $e) {
        echo "ERROR!";
    }
    public function onSubscribe(ConnectionInterface $conn, $topic) {
        echo "ON SUBSCRIBE! $topic";
    }
    public function onUnSubscribe(ConnectionInterface $conn, $topic) {
        echo "UN SUBSCRIBE!";
    }
    public function onCall(ConnectionInterface $conn, $id, $topic, array $params) {
        // In this application if clients send data it's because the user hacked around in console
        echo "On call called";
        $conn->callError($id, $topic, 'You are not allowed to make calls')->close();
    }
    public function onPublish(ConnectionInterface $conn, $topic, $event, array $exclude, array $eligible) {
        // In this application if clients send data it's because the user hacked around in console
        echo "PUBLISHED \n";
        $conn->close();
    }
}

?>