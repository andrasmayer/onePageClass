<?php
session_start();
include("../db/pdo_connect.php");

/********************************************
 *              ChangeLog                   *
 *                                          *
 *******************************************/

changeLog($_SESSION["userID"], "tasks",  $_POST["rowid"],  $_POST["column"], $_POST["value"]);

function changeLog( $userID, $type, $resourceId, $colname, $value){
    global $con;

    $sql = "select $colname from actiontracker_$type where id = ?";
    $sth = $con->prepare($sql, array(PDO::ATTR_CURSOR => PDO::CURSOR_FWDONLY));
    $sth->execute([ $resourceId ]);
    $result = $sth->fetch(\PDO::FETCH_COLUMN,0);

    if($result != $_POST["value"]){

        if($_POST["column"]  == "addin"){
            $tempValue_post = json_decode($_POST["value"],true);
            $tempValue_original = json_decode($result,true);

            foreach($tempValue_original as $key=>$val){
                if($val != $tempValue_post[$key]){
                    $colname = str_replace("$$"," ",$key);
                    
                    $sql = "INSERT INTO `actiontracker_changelogs`(`user`, `type`, `oldValue`, `newValue`, `resourceId`, `colname`)
                    VALUES (?,?,?,?,?,?)";
                    $sth = $con->prepare($sql, array(PDO::ATTR_CURSOR => PDO::CURSOR_FWDONLY));
                    $sth->execute([ $userID, $type, $val, $tempValue_post[$key], $resourceId, $colname ]);

                }
            }
        }
        else{
            $sql = "INSERT INTO `actiontracker_changelogs`(`user`, `type`, `oldValue`, `newValue`, `resourceId`, `colname`)
            VALUES (?,?,?,?,?,?)";
            $sth = $con->prepare($sql, array(PDO::ATTR_CURSOR => PDO::CURSOR_FWDONLY));
            $sth->execute([ $userID, $type, $result, $value, $resourceId, $colname ]);
        }
    }
}


/********************************************
 *      Cella értékének módosítása          *
 *                                          *
 *******************************************/
$sql = "update actiontracker_tasks set $_POST[column] = ? where id = ?";
$stmt= $con->prepare($sql);
$stmt->execute([$_POST["value"], $_POST["rowid"] ]);

$sql = "update actiontracker_tasks set $_POST[column] = '$_POST[value]' where id = '$_POST[rowid]'";
echo json_encode($sql);