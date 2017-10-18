<?php
include('includes.php');
$u = new MyUtil();

if($u::areTheseSetAndNotEmpty('p','id')){

    $jsonDecode = json_encode($temp);
    echo $jsonDecode;
}
?>
