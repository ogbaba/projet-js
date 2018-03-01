<?php

session_start();
/*calculer les données*/
$resultat=new stdClass();
$resultat->result=true;
$resultat->message='';

$resultat->est_connecte=false;
if (isset($_SESSION['id_user'])){
    $resultat->est_connecte=$_SESSION['id_user'];
}

/*  Renvoyer les données pour l'affichage /JSON*/

header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
header('Content-type: application/json');

echo json_encode($resultat);