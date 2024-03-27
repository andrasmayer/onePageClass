<?php
include("../db/pdo_connect.php");

$sql = "select 
actiontracker_tasks.id,
actiontracker_topics.id as topicId,
actiontracker_tasks.action,
actiontracker_topics.title,
actiontracker_tasks.erTypes,
actiontracker_tasks.expireDate,
actiontracker_tasks.status_2

from actiontracker_tasks 
    left join actiontracker_topics on actiontracker_topics.id = actiontracker_tasks.topicid
where (responsible = ? || delegated = ?) and status_2 = 0";
$sth = $con->prepare($sql, array(PDO::ATTR_CURSOR => PDO::CURSOR_FWDONLY));
$sth->execute([ $_GET["userID"] , $_GET["userID"] ]);
$result = $sth->fetchAll(\PDO::FETCH_ASSOC);
echo json_encode($result);