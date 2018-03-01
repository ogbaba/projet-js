<?php
require 'bd.php';
$bd = new MaBD();
error_log($_POST["id"]);
$result = $bd->query ("SELECT * FROM REVIEWS WHERE id=".SQLite3::escapeString($_POST["id"]));
$res = $result->fetchArray();

header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
header('Content-type: application/json');

echo json_encode($res);