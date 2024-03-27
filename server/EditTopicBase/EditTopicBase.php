<?php
session_start();
include("../db/pdo_connect.php");

/********************************************
 *              ChangeLog                   *
 *                                          *
 *******************************************/
changeLog($_SESSION["userID"],  $_POST);

function changeLog($userID,$dataSet){
   global $con;
   $sql = "select id,`title`, `description`, `contributors`, `erTypes` from actiontracker_topics where id = ?";
   $sth = $con->prepare($sql, array(PDO::ATTR_CURSOR => PDO::CURSOR_FWDONLY));
   $sth->execute([ $dataSet["id"] ]);
   $originalData = $sth->fetch(\PDO::FETCH_ASSOC);
   $originalData["contributors"]    = json_decode($originalData["contributors"],true);
   $originalData["erTypes"]         = json_decode($originalData["erTypes"],true);

   //If column is deleted
   foreach($originalData as $key=>$itm){
      if(is_array($itm) ){
         foreach( $itm as $columnName){
            if( !in_array("$columnName", $dataSet[$key]) ){
               $sql = "INSERT INTO `actiontracker_changelogs`(`user`, `type`, `oldValue`, `newValue`, `resourceId`, `colname`)
               VALUES (?,?,?,?,?,?)";
               $sth = $con->prepare($sql, array(PDO::ATTR_CURSOR => PDO::CURSOR_FWDONLY));
               $sth->execute([ $userID, "topics",$columnName,"Törölve", $originalData["id"], $key ]);
            }
         }
      }
      else if($itm != $dataSet[$key]){
         $sql = "INSERT INTO `actiontracker_changelogs`(`user`, `type`, `oldValue`, `newValue`, `resourceId`, `colname`)
         VALUES (?,?,?,?,?,?)";
         $sth = $con->prepare($sql, array(PDO::ATTR_CURSOR => PDO::CURSOR_FWDONLY));
         $sth->execute([ $userID, "topics",$itm,$dataSet[$key], $originalData["id"], $key ]);
      }
   }

   //If column is added
   foreach($dataSet as $key=>$itm){
      if(is_array($itm) && !in_array($key, ["task","privateHeaders","headerEditor","status_1","status_2","contributorNames"])){
         foreach( $itm as $columnName){
            if( !in_array("$columnName", $originalData[$key]) ){
               $sql = "INSERT INTO `actiontracker_changelogs`(`user`, `type`, `oldValue`, `newValue`, `resourceId`, `colname`)
               VALUES (?,?,?,?,?,?)";
               $sth = $con->prepare($sql, array(PDO::ATTR_CURSOR => PDO::CURSOR_FWDONLY));
               $sth->execute([ $userID, "topics","$columnName","Hozzáadva", $originalData["id"], $key ]);
            }
         }
      }
   }
}


/*********************************************
*        Cella értékének módosítása          *
*                                            *
**********************************************/
if( !isset($_POST["privateHeaders"]) ){ $_POST["privateHeaders"] = '{}'; }


$sql = "update actiontracker_topics set title = ?, description = ?, contributors = ?, erTypes = ?, privateHeaders = ? where id = ?";

$stmt= $con->prepare($sql);
$stmt->execute([
   $_POST["title"],
   $_POST["description"],
   json_encode($_POST["contributors"]),
   json_encode($_POST["erTypes"]),
   json_encode($_POST["privateHeaders"]),
   $_POST["id"]
]);


include("headers.php");

