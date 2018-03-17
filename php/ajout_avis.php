<?php
require 'bd.php';
session_start();
if (!isset($_SESSION["id_user"])) {
    return;
}

if (isset($_POST['titre']) && isset($_POST['texte']) && isset($_POST['bien'])) {
    $bd = new MaBD();
    error_log($_POST['bien']);
    $bd->exec("INSERT INTO REVIEWS (titre, texte, auteur, bien) VALUES ('"
    . SQLite3::escapeString(htmlspecialchars($_POST['titre']))."','"
    . SQLite3::escapeString(htmlspecialchars($_POST['texte']))."','"
    . SQLite3::escapeString(htmlspecialchars($_SESSION['username']))."', "
    . SQLite3::escapeString(htmlspecialchars($_POST['bien']))." )");
}
