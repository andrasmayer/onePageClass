<?php

session_start();
//session_destroy();
include("../db/pdo_connect.php");
$sql = "select dolszam  FROM actiontracker_users where dolszam = ? and passWord = ?";
$sth = $con->prepare($sql, array(PDO::ATTR_CURSOR => PDO::CURSOR_FWDONLY));
$sth->execute([ $_POST["userName"], md5( $_POST["passWord"]) ]);  
$response = $sth->fetch(\PDO::FETCH_COLUMN,0);

if($response != false){
    $_SESSION["userID"] = $response;
}

echo json_encode($response);
