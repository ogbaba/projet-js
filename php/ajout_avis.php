<?php
require 'bd.php';
session_start();
if (!isset($_SESSION["id_user"])) {
    return;
}

if (isset($_POST['titre']) && isset($_POST['texte'])) {
    $bd = new MaBD();
    $bd->exec("INSERT INTO REVIEWS (titre, texte, auteur) VALUES ('"
    . SQLite3::escapeString($_POST['titre'])."','"
    . SQLite3::escapeString($_POST['texte'])."','"
    . SQLite3::escapeString($_SESSION['username'])."')");
}
