<?php
include("../db/pdo_connect.php");

$sql = "update actiontracker_topics set headerEditor = ? where id = ?";
$stmt= $con->prepare($sql);
$stmt->execute([   $_POST["data"],   $_POST["id"]]);



echo json_encode($_POST);