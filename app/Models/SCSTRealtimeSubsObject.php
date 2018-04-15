<?php

namespace Models;
use Ratchet\ConnectionInterface;
use Ratchet\Wamp\WampServerInterface;

class SCSTRealtimeSubsObject implements WampServerInterface {
    protected $subscriber_topics = [];

    // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    //                  ComponentMessageInteface Implementations
    // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    public function __construct() {
        echo "Server Instantiated...\n";
        $this->clients = new \SplObjectStorage;
    }
    public function onSend($msg){ // Message from the onMessage
        $data   = json_decode($msg);
        $action = array_key_exists('action', $data)? $data['action']:'';
        if(array_key_exists($action,$this->subscriber_topics)){
            echo "Received msg, broacasting to $action";
            $this->subscriber_topics[$action]->broadcast($msg);
        }
    }
    // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    //                  WampServerInterface Implementations
    // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

    public function onOpen(ConnectionInterface $conn) {

    }
    public function onSubscribe(ConnectionInterface $conn, $topic) {
        $id     = $topic->getId();
        $addr   = $conn->remoteAddress;

        echo "$addr subscribed to: ".$topic->getId()." \n";
        $this->subscriber_topics[$topic->getId()] = $topic;
    }
    public function onUnSubscribe(ConnectionInterface $conn, $topic) {
        echo "On unsubscribe triggered ...\n";
    }
    public function onClose(ConnectionInterface $conn) {
        // The connection is closed, remove it, as we can no longer send it messages
        echo "Connection {$conn->resourceId} has disconnected... \n";
    }
    public function onError(ConnectionInterface $conn, \Exception $e) {
        echo "Server error: ". $e->getMessage()."...\n";
    }
    public function onCall(ConnectionInterface $conn, $id, $topic, array $params) {
        // In this application if clients send data it's because the user hacked around in console
        echo "On call called...";
        $conn->callError($id, $topic, 'You are not allowed to make calls')->close();
    }
    public function onPublish(ConnectionInterface $conn, $topic, $event, array $exclude, array $eligible) {
        // In this application if clients send data it's because the user hacked around in console
        echo "Closing onPublish has triggered ...\n";
        $conn->close();
    }
}

?>