<?php
session_start();

$resultat = new stdClass();
$resultat-> result = false;
$resultat-> message ="";
$resultat-> est_connecte = false;
if(isset($_POST['username']) && isset($_POST['password'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];
    if (($username == "nom") && ($password == "mdp"))
    {
	$resultat->est_connecte = true;
    	$_SESSION['id_user'] = true;
        $_SESSION['username'] = $_POST['username'];
    }
}
else {
    $resultat->message = 'Try again';
}

header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
header('Content-type: application/json');

echo json_encode($resultat);