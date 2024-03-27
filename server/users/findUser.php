<?php
include("../db/pdo_connect.php");

$sql = "select 
actiontracker_users.username,
actiontracker_users.dolszam as userID,
actiontracker_user_job_titles.name as position 

from actiontracker_users 
left join actiontracker_user_job_titles on actiontracker_user_job_titles.id = actiontracker_users.job_title
where username like ?";
$sth = $con->prepare($sql, array(PDO::ATTR_CURSOR => PDO::CURSOR_FWDONLY));
$sth->execute([ "%$_GET[username]%" ]);
$result = $sth->fetchAll(\PDO::FETCH_ASSOC);

echo json_encode($result);