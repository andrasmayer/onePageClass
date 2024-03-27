<?php

include("../db/pdo_connect.php");

$search = isset($_GET["search"]) == true ? " where title like '%$_GET[search]%' " : "";
$addin = isset($_GET["userID"]) == true ? " where contributors like '%$_GET[userID]%' " : "";

$sql = "select * FROM actiontracker_topics $search $addin";
$sth = $con->prepare($sql, array(PDO::ATTR_CURSOR => PDO::CURSOR_FWDONLY));
$sth->execute([]);  
$topic = $sth->fetchAll(\PDO::FETCH_ASSOC);


echo json_encode($topic);