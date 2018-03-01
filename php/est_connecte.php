<?php

session_start();
/*calculer les données*/
$connexion = new stdClass();
$connexion->result=true;
$connexion->message='';

$connexion->est_connecte=false;
if (isset($_SESSION['id_user'])){
    $connexion->est_connecte=$_SESSION['id_user'];
}

/*  Renvoyer les données pour l'affichage /JSON*/

header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
header('Content-type: application/json');

echo json_encode($connexion);

