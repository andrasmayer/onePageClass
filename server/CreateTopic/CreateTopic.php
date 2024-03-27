<?php
include("../db/pdo_connect.php");

if( !isset($_POST["privateHeaders"]) ){ $_POST["privateHeaders"] = "{}"; }
else{ $_POST["privateHeaders"] =  json_encode($_POST["privateHeaders"]); }

session_start();
$sql = "INSERT INTO `actiontracker_topics`( `title`, `description`, `creator`, `creationDate`, `contributors`, `erTypes`, `privateHeaders`) 
VALUES (?,?,?,?,?,?,?)";

$stmt= $con->prepare($sql);
$stmt->execute([
   $_POST["title"],
   $_POST["description"],
   $_POST["contributors"][0],
   date("Y-m-d H:i:s"),
   json_encode($_POST["contributors"]),
   json_encode($_POST["erTypes"]),
   $_POST["privateHeaders"]

]);


$sql = "select max(id) from actiontracker_topics";
$sth = $con->prepare($sql, array(PDO::ATTR_CURSOR => PDO::CURSOR_FWDONLY));
$sth->execute([ ]);
$topicId = $sth->fetch(\PDO::FETCH_COLUMN,0);
echo json_encode($topicId);